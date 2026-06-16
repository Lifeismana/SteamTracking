/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [3615],
  {
    60092: (e, t, r) => {
      r.d(t, { g: () => Ot });
      var i,
        n,
        a,
        s = r(7850),
        o = r(22837),
        l = r(40259),
        c = r(41735),
        m = r.n(c),
        u = r(65946),
        d = r(90626),
        g = r(62641),
        B = r(75933),
        _ = r(39733),
        b = r(37085),
        p = r(81393),
        y = r(56545),
        M = r(80613),
        w = r.n(M),
        f = r(89068);
      class z extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.promotion_id || f.Sg(z.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  promotion_id: {
                    n: 1,
                    br: f.qM.readFixed64String,
                    bw: f.gp.writeFixed64String,
                  },
                  admin_jsondata: {
                    n: 2,
                    br: f.qM.readString,
                    bw: f.gp.writeString,
                  },
                  partner_jsondata: {
                    n: 3,
                    br: f.qM.readString,
                    bw: f.gp.writeString,
                  },
                  input_jsondata: {
                    n: 4,
                    br: f.qM.readString,
                    bw: f.gp.writeString,
                  },
                  partner_readonly_jsondata: {
                    n: 10,
                    br: f.qM.readString,
                    bw: f.gp.writeString,
                  },
                  partner_writable_jsondata: {
                    n: 11,
                    br: f.qM.readString,
                    bw: f.gp.writeString,
                  },
                  assets_readonly_jsondata: {
                    n: 12,
                    br: f.qM.readString,
                    bw: f.gp.writeString,
                  },
                  assets_writable_jsondata: {
                    n: 13,
                    br: f.qM.readString,
                    bw: f.gp.writeString,
                  },
                  rtime32_start_time: {
                    n: 5,
                    br: f.qM.readUint32,
                    bw: f.gp.writeUint32,
                  },
                  rtime32_end_time: {
                    n: 6,
                    br: f.qM.readUint32,
                    bw: f.gp.writeUint32,
                  },
                  partner_id: {
                    n: 7,
                    br: f.qM.readUint32,
                    bw: f.gp.writeUint32,
                  },
                  input_access_key: {
                    n: 8,
                    br: f.qM.readString,
                    bw: f.gp.writeString,
                  },
                  last_update_time: {
                    n: 9,
                    br: f.qM.readUint32,
                    bw: f.gp.writeUint32,
                  },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = f.w0(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return f.BT(z.M(), e, t);
        }
        static fromObject(e) {
          return f.Uq(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (w().BinaryReader)(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return f.zj(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (w().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          f.i0(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new (w().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlan";
        }
      }
      class S extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.plan || f.Sg(S.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            S.sm_m || (S.sm_m = { proto: S, fields: { plan: { n: 1, c: z } } }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = f.w0(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return f.BT(S.M(), e, t);
        }
        static fromObject(e) {
          return f.Uq(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (w().BinaryReader)(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return f.zj(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (w().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          f.i0(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new (w().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_CreatePlan_Request";
        }
      }
      class h extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.promotion_id || f.Sg(h.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
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
                    br: f.qM.readFixed64String,
                    bw: f.gp.writeFixed64String,
                  },
                  input_access_key: {
                    n: 2,
                    br: f.qM.readString,
                    bw: f.gp.writeString,
                  },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = f.w0(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return f.BT(h.M(), e, t);
        }
        static fromObject(e) {
          return f.Uq(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (w().BinaryReader)(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return f.zj(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (w().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          f.i0(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new (w().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_CreatePlan_Response";
        }
      }
      class R extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.plan || f.Sg(R.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  plan: { n: 1, c: z },
                  promotion_id: {
                    n: 2,
                    br: f.qM.readFixed64String,
                    bw: f.gp.writeFixed64String,
                  },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = f.w0(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return f.BT(R.M(), e, t);
        }
        static fromObject(e) {
          return f.Uq(R.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (w().BinaryReader)(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return f.zj(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (w().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          f.i0(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new (w().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_UpdatePlan_Request";
        }
      }
      class v extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), M.Message.initialize(this, e, 0, -1, void 0, null);
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
          let t = new (w().BinaryReader)(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (w().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (w().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_UpdatePlan_Response";
        }
      }
      class j extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.promotion_id || f.Sg(j.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  promotion_id: {
                    n: 1,
                    br: f.qM.readFixed64String,
                    bw: f.gp.writeFixed64String,
                  },
                },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = f.w0(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, t) {
          return f.BT(j.M(), e, t);
        }
        static fromObject(e) {
          return f.Uq(j.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (w().BinaryReader)(e),
            r = new j();
          return j.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return f.zj(j.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (w().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          f.i0(j.M(), e, t);
        }
        serializeBase64String() {
          var e = new (w().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPlan_Request";
        }
      }
      class F extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.plan || f.Sg(F.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            F.sm_m || (F.sm_m = { proto: F, fields: { plan: { n: 1, c: z } } }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = f.w0(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return f.BT(F.M(), e, t);
        }
        static fromObject(e) {
          return f.Uq(F.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (w().BinaryReader)(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return f.zj(F.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (w().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          f.i0(F.M(), e, t);
        }
        serializeBase64String() {
          var e = new (w().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPlan_Response";
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
          let t = new (w().BinaryReader)(e),
            r = new P();
          return P.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (w().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (w().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetAllActivePlan_Request";
        }
      }
      class W extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.plan || f.Sg(W.M()),
            M.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: { plan: { n: 1, c: z, r: !0, q: !0 } },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = f.w0(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, t) {
          return f.BT(W.M(), e, t);
        }
        static fromObject(e) {
          return f.Uq(W.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (w().BinaryReader)(e),
            r = new W();
          return W.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return f.zj(W.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (w().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          f.i0(W.M(), e, t);
        }
        serializeBase64String() {
          var e = new (w().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetAllActivePlan_Response";
        }
      }
      class q extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            q.prototype.oldest_rtime || f.Sg(q.M()),
            M.Message.initialize(this, e, 0, -1, [3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: {
                  oldest_rtime: {
                    n: 1,
                    br: f.qM.readUint32,
                    bw: f.gp.writeUint32,
                  },
                  newest_rtime: {
                    n: 2,
                    br: f.qM.readUint32,
                    bw: f.gp.writeUint32,
                  },
                  promotion_types: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: f.qM.readString,
                    bw: f.gp.writeRepeatedString,
                  },
                },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = f.w0(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, t) {
          return f.BT(q.M(), e, t);
        }
        static fromObject(e) {
          return f.Uq(q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (w().BinaryReader)(e),
            r = new q();
          return q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return f.zj(q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (w().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          f.i0(q.M(), e, t);
        }
        serializeBase64String() {
          var e = new (w().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPlanCompletedInDateRange_Request";
        }
      }
      class T extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.plans || f.Sg(T.M()),
            M.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: { plans: { n: 1, c: z, r: !0, q: !0 } },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = f.w0(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return f.BT(T.M(), e, t);
        }
        static fromObject(e) {
          return f.Uq(T.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (w().BinaryReader)(e),
            r = new T();
          return T.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return f.zj(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (w().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          f.i0(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new (w().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPlanCompletedInDateRange_Response";
        }
      }
      class O extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.type || f.Sg(O.M()),
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
                  type: { n: 1, br: f.qM.readEnum, bw: f.gp.writeEnum },
                  gid: {
                    n: 2,
                    br: f.qM.readFixed64String,
                    bw: f.gp.writeFixed64String,
                  },
                  promotion_planid: {
                    n: 3,
                    br: f.qM.readFixed64String,
                    bw: f.gp.writeFixed64String,
                  },
                },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = f.w0(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, t) {
          return f.BT(O.M(), e, t);
        }
        static fromObject(e) {
          return f.Uq(O.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (w().BinaryReader)(e),
            r = new O();
          return O.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return f.zj(O.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (w().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          f.i0(O.M(), e, t);
        }
        serializeBase64String() {
          var e = new (w().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromoAssociation";
        }
      }
      class I extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.requested || f.Sg(I.M()),
            M.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: { requested: { n: 1, c: O, r: !0, q: !0 } },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = f.w0(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return f.BT(I.M(), e, t);
        }
        static fromObject(e) {
          return f.Uq(I.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (w().BinaryReader)(e),
            r = new I();
          return I.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return f.zj(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (w().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          f.i0(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new (w().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPlanByAssociationID_Request";
        }
      }
      class U extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            U.prototype.matching || f.Sg(U.M()),
            M.Message.initialize(this, e, 0, -1, [1, 2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: {
                  matching: { n: 1, c: O, r: !0, q: !0 },
                  plans: { n: 2, c: z, r: !0, q: !0 },
                },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = f.w0(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, t) {
          return f.BT(U.M(), e, t);
        }
        static fromObject(e) {
          return f.Uq(U.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (w().BinaryReader)(e),
            r = new U();
          return U.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return f.zj(U.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (w().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          f.i0(U.M(), e, t);
        }
        serializeBase64String() {
          var e = new (w().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPlanByAssociationID_Response";
        }
      }
      class C extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.rtime || f.Sg(C.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  rtime: { n: 1, br: f.qM.readUint32, bw: f.gp.writeUint32 },
                  upto_rtime: {
                    n: 2,
                    br: f.qM.readUint32,
                    bw: f.gp.writeUint32,
                  },
                },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = f.w0(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return f.BT(C.M(), e, t);
        }
        static fromObject(e) {
          return f.Uq(C.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (w().BinaryReader)(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return f.zj(C.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (w().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          f.i0(C.M(), e, t);
        }
        serializeBase64String() {
          var e = new (w().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPlansUpdatedSince_Request";
        }
      }
      class x extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            x.prototype.plans || f.Sg(x.M()),
            M.Message.initialize(this, e, 0, -1, [1, 2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: {
                  plans: { n: 1, c: z, r: !0, q: !0 },
                  deleted_plan_ids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: f.qM.readFixed64String,
                    pbr: f.qM.readPackedFixed64String,
                    bw: f.gp.writeRepeatedFixed64String,
                  },
                },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = f.w0(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, t) {
          return f.BT(x.M(), e, t);
        }
        static fromObject(e) {
          return f.Uq(x.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (w().BinaryReader)(e),
            r = new x();
          return x.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return f.zj(x.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (w().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          f.i0(x.M(), e, t);
        }
        serializeBase64String() {
          var e = new (w().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPlansUpdatedSince_Response";
        }
      }
      class A extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            A.prototype.promotion_id || f.Sg(A.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: {
                  promotion_id: {
                    n: 1,
                    br: f.qM.readFixed64String,
                    bw: f.gp.writeFixed64String,
                  },
                },
              }),
            A.sm_m
          );
        }
        static MBF() {
          return A.sm_mbf || (A.sm_mbf = f.w0(A.M())), A.sm_mbf;
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, t) {
          return f.BT(A.M(), e, t);
        }
        static fromObject(e) {
          return f.Uq(A.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (w().BinaryReader)(e),
            r = new A();
          return A.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return f.zj(A.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (w().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          f.i0(A.M(), e, t);
        }
        serializeBase64String() {
          var e = new (w().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_DeletePlan_Request";
        }
      }
      class D extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new D();
        }
        static deserializeBinary(e) {
          let t = new (w().BinaryReader)(e),
            r = new D();
          return D.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (w().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (w().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_DeletePlan_Response";
        }
      }
      class E extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            E.prototype.token || f.Sg(E.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  token: { n: 1, br: f.qM.readString, bw: f.gp.writeString },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = f.w0(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return f.BT(E.M(), e, t);
        }
        static fromObject(e) {
          return f.Uq(E.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (w().BinaryReader)(e),
            r = new E();
          return E.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return f.zj(E.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (w().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          f.i0(E.M(), e, t);
        }
        serializeBase64String() {
          var e = new (w().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_SearchPlan_Request";
        }
      }
      class N extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            N.prototype.plan || f.Sg(N.M()),
            M.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            N.sm_m ||
              (N.sm_m = {
                proto: N,
                fields: { plan: { n: 1, c: z, r: !0, q: !0 } },
              }),
            N.sm_m
          );
        }
        static MBF() {
          return N.sm_mbf || (N.sm_mbf = f.w0(N.M())), N.sm_mbf;
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, t) {
          return f.BT(N.M(), e, t);
        }
        static fromObject(e) {
          return f.Uq(N.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (w().BinaryReader)(e),
            r = new N();
          return N.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return f.zj(N.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (w().BinaryWriter)();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          f.i0(N.M(), e, t);
        }
        serializeBase64String() {
          var e = new (w().BinaryWriter)();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_SearchPlan_Response";
        }
      }
      class G extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            G.prototype.appids || f.Sg(G.M()),
            M.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: {
                  appids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: f.qM.readUint32,
                    pbr: f.qM.readPackedUint32,
                    bw: f.gp.writeRepeatedUint32,
                  },
                  exclude_sales: {
                    n: 2,
                    br: f.qM.readBool,
                    bw: f.gp.writeBool,
                  },
                  exclude_direct_featuring: {
                    n: 3,
                    br: f.qM.readBool,
                    bw: f.gp.writeBool,
                  },
                },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = f.w0(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, t) {
          return f.BT(G.M(), e, t);
        }
        static fromObject(e) {
          return f.Uq(G.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (w().BinaryReader)(e),
            r = new G();
          return G.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return f.zj(G.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (w().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          f.i0(G.M(), e, t);
        }
        serializeBase64String() {
          var e = new (w().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetAllPlansForApps_Request";
        }
      }
      class k extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            k.prototype.plans || f.Sg(k.M()),
            M.Message.initialize(this, e, 0, -1, [1, 2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
                fields: {
                  plans: { n: 1, c: z, r: !0, q: !0 },
                  apps_included_in_sales: { n: 2, c: L, r: !0, q: !0 },
                },
              }),
            k.sm_m
          );
        }
        static MBF() {
          return k.sm_mbf || (k.sm_mbf = f.w0(k.M())), k.sm_mbf;
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, t) {
          return f.BT(k.M(), e, t);
        }
        static fromObject(e) {
          return f.Uq(k.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (w().BinaryReader)(e),
            r = new k();
          return k.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return f.zj(k.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (w().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          f.i0(k.M(), e, t);
        }
        serializeBase64String() {
          var e = new (w().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetAllPlansForApps_Response";
        }
      }
      class L extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            L.prototype.appids || f.Sg(L.M()),
            M.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
                fields: {
                  appids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: f.qM.readUint32,
                    pbr: f.qM.readPackedUint32,
                    bw: f.gp.writeRepeatedUint32,
                  },
                  clan_event_gid: {
                    n: 2,
                    br: f.qM.readFixed64String,
                    bw: f.gp.writeFixed64String,
                  },
                },
              }),
            L.sm_m
          );
        }
        static MBF() {
          return L.sm_mbf || (L.sm_mbf = f.w0(L.M())), L.sm_mbf;
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, t) {
          return f.BT(L.M(), e, t);
        }
        static fromObject(e) {
          return f.Uq(L.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (w().BinaryReader)(e),
            r = new L();
          return L.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return f.zj(L.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (w().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          f.i0(L.M(), e, t);
        }
        serializeBase64String() {
          var e = new (w().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetAllPlansForApps_Response_CAppIncludedInSales";
        }
      }
      class V extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            V.prototype.partnerid || f.Sg(V.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            V.sm_m ||
              (V.sm_m = {
                proto: V,
                fields: {
                  partnerid: {
                    n: 1,
                    br: f.qM.readUint32,
                    bw: f.gp.writeUint32,
                  },
                  start_date: {
                    n: 5,
                    br: f.qM.readUint32,
                    bw: f.gp.writeUint32,
                  },
                  end_date: { n: 6, br: f.qM.readUint32, bw: f.gp.writeUint32 },
                  show_hidden: { n: 4, br: f.qM.readBool, bw: f.gp.writeBool },
                },
              }),
            V.sm_m
          );
        }
        static MBF() {
          return V.sm_mbf || (V.sm_mbf = f.w0(V.M())), V.sm_mbf;
        }
        toObject(e = !1) {
          return V.toObject(e, this);
        }
        static toObject(e, t) {
          return f.BT(V.M(), e, t);
        }
        static fromObject(e) {
          return f.Uq(V.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (w().BinaryReader)(e),
            r = new V();
          return V.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return f.zj(V.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (w().BinaryWriter)();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          f.i0(V.M(), e, t);
        }
        serializeBase64String() {
          var e = new (w().BinaryWriter)();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetAllPlansForPartner_Request";
        }
      }
      class H extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            H.prototype.plans || f.Sg(H.M()),
            M.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            H.sm_m ||
              (H.sm_m = {
                proto: H,
                fields: { plans: { n: 1, c: z, r: !0, q: !0 } },
              }),
            H.sm_m
          );
        }
        static MBF() {
          return H.sm_mbf || (H.sm_mbf = f.w0(H.M())), H.sm_mbf;
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, t) {
          return f.BT(H.M(), e, t);
        }
        static fromObject(e) {
          return f.Uq(H.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (w().BinaryReader)(e),
            r = new H();
          return H.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return f.zj(H.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (w().BinaryWriter)();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          f.i0(H.M(), e, t);
        }
        serializeBase64String() {
          var e = new (w().BinaryWriter)();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetAllPlansForPartner_Response";
        }
      }
      class K extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            K.prototype.input_access_key || f.Sg(K.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            K.sm_m ||
              (K.sm_m = {
                proto: K,
                fields: {
                  input_access_key: {
                    n: 1,
                    br: f.qM.readString,
                    bw: f.gp.writeString,
                  },
                },
              }),
            K.sm_m
          );
        }
        static MBF() {
          return K.sm_mbf || (K.sm_mbf = f.w0(K.M())), K.sm_mbf;
        }
        toObject(e = !1) {
          return K.toObject(e, this);
        }
        static toObject(e, t) {
          return f.BT(K.M(), e, t);
        }
        static fromObject(e) {
          return f.Uq(K.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (w().BinaryReader)(e),
            r = new K();
          return K.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return f.zj(K.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (w().BinaryWriter)();
          return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          f.i0(K.M(), e, t);
        }
        serializeBase64String() {
          var e = new (w().BinaryWriter)();
          return K.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPlanByInputAccessKey_Request";
        }
      }
      class Y extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Y.prototype.plan || f.Sg(Y.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Y.sm_m || (Y.sm_m = { proto: Y, fields: { plan: { n: 1, c: z } } }),
            Y.sm_m
          );
        }
        static MBF() {
          return Y.sm_mbf || (Y.sm_mbf = f.w0(Y.M())), Y.sm_mbf;
        }
        toObject(e = !1) {
          return Y.toObject(e, this);
        }
        static toObject(e, t) {
          return f.BT(Y.M(), e, t);
        }
        static fromObject(e) {
          return f.Uq(Y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (w().BinaryReader)(e),
            r = new Y();
          return Y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return f.zj(Y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (w().BinaryWriter)();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          f.i0(Y.M(), e, t);
        }
        serializeBase64String() {
          var e = new (w().BinaryWriter)();
          return Y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPlanByInputAccessKey_Response";
        }
      }
      class J extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            J.prototype.promotion_id || f.Sg(J.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
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
                    br: f.qM.readFixed64String,
                    bw: f.gp.writeFixed64String,
                  },
                  value: { n: 2, br: f.qM.readBool, bw: f.gp.writeBool },
                },
              }),
            J.sm_m
          );
        }
        static MBF() {
          return J.sm_mbf || (J.sm_mbf = f.w0(J.M())), J.sm_mbf;
        }
        toObject(e = !1) {
          return J.toObject(e, this);
        }
        static toObject(e, t) {
          return f.BT(J.M(), e, t);
        }
        static fromObject(e) {
          return f.Uq(J.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (w().BinaryReader)(e),
            r = new J();
          return J.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return f.zj(J.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (w().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          f.i0(J.M(), e, t);
        }
        serializeBase64String() {
          var e = new (w().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_MarkLocalizationAssetComplete_Request";
        }
      }
      class X extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new X();
        }
        static deserializeBinary(e) {
          let t = new (w().BinaryReader)(e),
            r = new X();
          return X.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (w().BinaryWriter)();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (w().BinaryWriter)();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_MarkLocalizationAssetComplete_Response";
        }
      }
      class Z extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Z.prototype.promotion_id || f.Sg(Z.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Z.sm_m ||
              (Z.sm_m = {
                proto: Z,
                fields: {
                  promotion_id: {
                    n: 1,
                    br: f.qM.readFixed64String,
                    bw: f.gp.writeFixed64String,
                  },
                  notification_type: {
                    n: 2,
                    br: f.qM.readEnum,
                    bw: f.gp.writeEnum,
                  },
                  only_explicit_email_addresses: {
                    n: 3,
                    br: f.qM.readBool,
                    bw: f.gp.writeBool,
                  },
                },
              }),
            Z.sm_m
          );
        }
        static MBF() {
          return Z.sm_mbf || (Z.sm_mbf = f.w0(Z.M())), Z.sm_mbf;
        }
        toObject(e = !1) {
          return Z.toObject(e, this);
        }
        static toObject(e, t) {
          return f.BT(Z.M(), e, t);
        }
        static fromObject(e) {
          return f.Uq(Z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (w().BinaryReader)(e),
            r = new Z();
          return Z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return f.zj(Z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (w().BinaryWriter)();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          f.i0(Z.M(), e, t);
        }
        serializeBase64String() {
          var e = new (w().BinaryWriter)();
          return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_SendNotification_Request";
        }
      }
      class $ extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return $.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new $();
        }
        static deserializeBinary(e) {
          let t = new (w().BinaryReader)(e),
            r = new $();
          return $.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (w().BinaryWriter)();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (w().BinaryWriter)();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_SendNotification_Response";
        }
      }
      class Q extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Q.prototype.promotion_id || f.Sg(Q.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
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
                    br: f.qM.readFixed64String,
                    bw: f.gp.writeFixed64String,
                  },
                  notification_id: {
                    n: 2,
                    br: f.qM.readFixed64String,
                    bw: f.gp.writeFixed64String,
                  },
                },
              }),
            Q.sm_m
          );
        }
        static MBF() {
          return Q.sm_mbf || (Q.sm_mbf = f.w0(Q.M())), Q.sm_mbf;
        }
        toObject(e = !1) {
          return Q.toObject(e, this);
        }
        static toObject(e, t) {
          return f.BT(Q.M(), e, t);
        }
        static fromObject(e) {
          return f.Uq(Q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (w().BinaryReader)(e),
            r = new Q();
          return Q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return f.zj(Q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (w().BinaryWriter)();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          f.i0(Q.M(), e, t);
        }
        serializeBase64String() {
          var e = new (w().BinaryWriter)();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetSentNotification_Request";
        }
      }
      class ee extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ee.prototype.results || f.Sg(ee.M()),
            M.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ee.sm_m ||
              (ee.sm_m = {
                proto: ee,
                fields: { results: { n: 1, c: te, r: !0, q: !0 } },
              }),
            ee.sm_m
          );
        }
        static MBF() {
          return ee.sm_mbf || (ee.sm_mbf = f.w0(ee.M())), ee.sm_mbf;
        }
        toObject(e = !1) {
          return ee.toObject(e, this);
        }
        static toObject(e, t) {
          return f.BT(ee.M(), e, t);
        }
        static fromObject(e) {
          return f.Uq(ee.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (w().BinaryReader)(e),
            r = new ee();
          return ee.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return f.zj(ee.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (w().BinaryWriter)();
          return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          f.i0(ee.M(), e, t);
        }
        serializeBase64String() {
          var e = new (w().BinaryWriter)();
          return ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetSentNotification_Response";
        }
      }
      class te extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            te.prototype.notification_id || f.Sg(te.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            te.sm_m ||
              (te.sm_m = {
                proto: te,
                fields: {
                  notification_id: {
                    n: 1,
                    br: f.qM.readFixed64String,
                    bw: f.gp.writeFixed64String,
                  },
                  tracking_id: {
                    n: 2,
                    br: f.qM.readFixed64String,
                    bw: f.gp.writeFixed64String,
                  },
                  email_address: {
                    n: 3,
                    br: f.qM.readString,
                    bw: f.gp.writeString,
                  },
                  accountid: {
                    n: 4,
                    br: f.qM.readUint32,
                    bw: f.gp.writeUint32,
                  },
                  status: { n: 5, br: f.qM.readUint32, bw: f.gp.writeUint32 },
                  type: { n: 6, br: f.qM.readEnum, bw: f.gp.writeEnum },
                  rt_send_time: {
                    n: 7,
                    br: f.qM.readUint32,
                    bw: f.gp.writeUint32,
                  },
                },
              }),
            te.sm_m
          );
        }
        static MBF() {
          return te.sm_mbf || (te.sm_mbf = f.w0(te.M())), te.sm_mbf;
        }
        toObject(e = !1) {
          return te.toObject(e, this);
        }
        static toObject(e, t) {
          return f.BT(te.M(), e, t);
        }
        static fromObject(e) {
          return f.Uq(te.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (w().BinaryReader)(e),
            r = new te();
          return te.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return f.zj(te.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (w().BinaryWriter)();
          return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          f.i0(te.M(), e, t);
        }
        serializeBase64String() {
          var e = new (w().BinaryWriter)();
          return te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionNotificationResults";
        }
      }
      class re extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            re.prototype.promotion_id || f.Sg(re.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            re.sm_m ||
              (re.sm_m = {
                proto: re,
                fields: {
                  promotion_id: {
                    n: 1,
                    br: f.qM.readFixed64String,
                    bw: f.gp.writeFixed64String,
                  },
                  notification_id: {
                    n: 2,
                    br: f.qM.readFixed64String,
                    bw: f.gp.writeFixed64String,
                  },
                },
              }),
            re.sm_m
          );
        }
        static MBF() {
          return re.sm_mbf || (re.sm_mbf = f.w0(re.M())), re.sm_mbf;
        }
        toObject(e = !1) {
          return re.toObject(e, this);
        }
        static toObject(e, t) {
          return f.BT(re.M(), e, t);
        }
        static fromObject(e) {
          return f.Uq(re.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (w().BinaryReader)(e),
            r = new re();
          return re.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return f.zj(re.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (w().BinaryWriter)();
          return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          f.i0(re.M(), e, t);
        }
        serializeBase64String() {
          var e = new (w().BinaryWriter)();
          return re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_ResendNotification_Request";
        }
      }
      class ie extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), M.Message.initialize(this, e, 0, -1, void 0, null);
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
          let t = new (w().BinaryReader)(e),
            r = new ie();
          return ie.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (w().BinaryWriter)();
          return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (w().BinaryWriter)();
          return ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_ResendNotification_Response";
        }
      }
      class ne extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ne.prototype.promotion_id || f.Sg(ne.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ne.sm_m ||
              (ne.sm_m = {
                proto: ne,
                fields: {
                  promotion_id: {
                    n: 1,
                    br: f.qM.readFixed64String,
                    bw: f.gp.writeFixed64String,
                  },
                  add: { n: 2, br: f.qM.readBool, bw: f.gp.writeBool },
                  email_address: {
                    n: 3,
                    br: f.qM.readString,
                    bw: f.gp.writeString,
                  },
                },
              }),
            ne.sm_m
          );
        }
        static MBF() {
          return ne.sm_mbf || (ne.sm_mbf = f.w0(ne.M())), ne.sm_mbf;
        }
        toObject(e = !1) {
          return ne.toObject(e, this);
        }
        static toObject(e, t) {
          return f.BT(ne.M(), e, t);
        }
        static fromObject(e) {
          return f.Uq(ne.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (w().BinaryReader)(e),
            r = new ne();
          return ne.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return f.zj(ne.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (w().BinaryWriter)();
          return ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          f.i0(ne.M(), e, t);
        }
        serializeBase64String() {
          var e = new (w().BinaryWriter)();
          return ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_SetPromotionEmailTarget_Request";
        }
      }
      class ae extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ae.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new ae();
        }
        static deserializeBinary(e) {
          let t = new (w().BinaryReader)(e),
            r = new ae();
          return ae.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (w().BinaryWriter)();
          return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (w().BinaryWriter)();
          return ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_SetPromotionEmailTarget_Response";
        }
      }
      class se extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            se.prototype.clan_account_id || f.Sg(se.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            se.sm_m ||
              (se.sm_m = {
                proto: se,
                fields: {
                  clan_account_id: {
                    n: 1,
                    br: f.qM.readUint32,
                    bw: f.gp.writeUint32,
                  },
                  clan_event_gid: {
                    n: 2,
                    br: f.qM.readFixed64String,
                    bw: f.gp.writeFixed64String,
                  },
                  rtime_sale_start: {
                    n: 3,
                    br: f.qM.readUint32,
                    bw: f.gp.writeUint32,
                  },
                  rtime_sale_end: {
                    n: 4,
                    br: f.qM.readUint32,
                    bw: f.gp.writeUint32,
                  },
                  daily_deal_gid: {
                    n: 5,
                    br: f.qM.readFixed64String,
                    bw: f.gp.writeFixed64String,
                  },
                  promotion_gid: {
                    n: 6,
                    br: f.qM.readFixed64String,
                    bw: f.gp.writeFixed64String,
                  },
                  create_asset_request: {
                    n: 7,
                    br: f.qM.readBool,
                    bw: f.gp.writeBool,
                  },
                  partner_id: {
                    n: 8,
                    br: f.qM.readUint32,
                    bw: f.gp.writeUint32,
                  },
                  advertising_appid: {
                    n: 9,
                    br: f.qM.readUint32,
                    bw: f.gp.writeUint32,
                  },
                },
              }),
            se.sm_m
          );
        }
        static MBF() {
          return se.sm_mbf || (se.sm_mbf = f.w0(se.M())), se.sm_mbf;
        }
        toObject(e = !1) {
          return se.toObject(e, this);
        }
        static toObject(e, t) {
          return f.BT(se.M(), e, t);
        }
        static fromObject(e) {
          return f.Uq(se.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (w().BinaryReader)(e),
            r = new se();
          return se.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return f.zj(se.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (w().BinaryWriter)();
          return se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          f.i0(se.M(), e, t);
        }
        serializeBase64String() {
          var e = new (w().BinaryWriter)();
          return se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlan_CreateSalePageForPromo_Request";
        }
      }
      class oe extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            oe.prototype.clan_account_id || f.Sg(oe.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            oe.sm_m ||
              (oe.sm_m = {
                proto: oe,
                fields: {
                  clan_account_id: {
                    n: 1,
                    br: f.qM.readUint32,
                    bw: f.gp.writeUint32,
                  },
                  clan_event_gid: {
                    n: 2,
                    br: f.qM.readFixed64String,
                    bw: f.gp.writeFixed64String,
                  },
                  daily_deal_gid: {
                    n: 3,
                    br: f.qM.readFixed64String,
                    bw: f.gp.writeFixed64String,
                  },
                  promotion_gid: {
                    n: 4,
                    br: f.qM.readFixed64String,
                    bw: f.gp.writeFixed64String,
                  },
                  asset_request_gid: {
                    n: 5,
                    br: f.qM.readFixed64String,
                    bw: f.gp.writeFixed64String,
                  },
                  advertising_appid: {
                    n: 6,
                    br: f.qM.readUint32,
                    bw: f.gp.writeUint32,
                  },
                },
              }),
            oe.sm_m
          );
        }
        static MBF() {
          return oe.sm_mbf || (oe.sm_mbf = f.w0(oe.M())), oe.sm_mbf;
        }
        toObject(e = !1) {
          return oe.toObject(e, this);
        }
        static toObject(e, t) {
          return f.BT(oe.M(), e, t);
        }
        static fromObject(e) {
          return f.Uq(oe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (w().BinaryReader)(e),
            r = new oe();
          return oe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return f.zj(oe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (w().BinaryWriter)();
          return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          f.i0(oe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (w().BinaryWriter)();
          return oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlan_CreateSalePageForPromo_Response";
        }
      }
      class le extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            le.prototype.total_gross_sales_usdx100 || f.Sg(le.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            le.sm_m ||
              (le.sm_m = {
                proto: le,
                fields: {
                  total_gross_sales_usdx100: {
                    n: 1,
                    br: f.qM.readInt64String,
                    bw: f.gp.writeInt64String,
                  },
                  total_gross_returns_usdx100: {
                    n: 2,
                    br: f.qM.readInt64String,
                    bw: f.gp.writeInt64String,
                  },
                  total_net_tax_usdx100: {
                    n: 3,
                    br: f.qM.readInt64String,
                    bw: f.gp.writeInt64String,
                  },
                  steam_gross_sales_usdx100: {
                    n: 4,
                    br: f.qM.readInt64String,
                    bw: f.gp.writeInt64String,
                  },
                  steam_gross_returns_usdx100: {
                    n: 5,
                    br: f.qM.readInt64String,
                    bw: f.gp.writeInt64String,
                  },
                  steam_net_tax_usdx100: {
                    n: 6,
                    br: f.qM.readInt64String,
                    bw: f.gp.writeInt64String,
                  },
                  in_game_gross_sales_usdx100: {
                    n: 7,
                    br: f.qM.readInt64String,
                    bw: f.gp.writeInt64String,
                  },
                  in_game_gross_returns_usdx100: {
                    n: 8,
                    br: f.qM.readInt64String,
                    bw: f.gp.writeInt64String,
                  },
                  in_game_net_tax_usdx100: {
                    n: 9,
                    br: f.qM.readInt64String,
                    bw: f.gp.writeInt64String,
                  },
                  total_net_sales_usdx100: {
                    n: 10,
                    br: f.qM.readInt64String,
                    bw: f.gp.writeInt64String,
                  },
                  steam_net_sales_usdx100: {
                    n: 11,
                    br: f.qM.readInt64String,
                    bw: f.gp.writeInt64String,
                  },
                  in_game_net_sales_usdx100: {
                    n: 12,
                    br: f.qM.readInt64String,
                    bw: f.gp.writeInt64String,
                  },
                  steam_gross_units_sold: {
                    n: 13,
                    br: f.qM.readInt64String,
                    bw: f.gp.writeInt64String,
                  },
                  steam_gross_units_returned: {
                    n: 14,
                    br: f.qM.readInt64String,
                    bw: f.gp.writeInt64String,
                  },
                  gross_units_activated: {
                    n: 15,
                    br: f.qM.readInt64String,
                    bw: f.gp.writeInt64String,
                  },
                },
              }),
            le.sm_m
          );
        }
        static MBF() {
          return le.sm_mbf || (le.sm_mbf = f.w0(le.M())), le.sm_mbf;
        }
        toObject(e = !1) {
          return le.toObject(e, this);
        }
        static toObject(e, t) {
          return f.BT(le.M(), e, t);
        }
        static fromObject(e) {
          return f.Uq(le.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (w().BinaryReader)(e),
            r = new le();
          return le.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return f.zj(le.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (w().BinaryWriter)();
          return le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          f.i0(le.M(), e, t);
        }
        serializeBase64String() {
          var e = new (w().BinaryWriter)();
          return le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlan_SummarySaleResult";
        }
      }
      class ce extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ce.prototype.promotionids || f.Sg(ce.M()),
            M.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ce.sm_m ||
              (ce.sm_m = {
                proto: ce,
                fields: {
                  promotionids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: f.qM.readUint64String,
                    pbr: f.qM.readPackedUint64String,
                    bw: f.gp.writeRepeatedUint64String,
                  },
                  partnerid: {
                    n: 2,
                    br: f.qM.readUint32,
                    bw: f.gp.writeUint32,
                  },
                },
              }),
            ce.sm_m
          );
        }
        static MBF() {
          return ce.sm_mbf || (ce.sm_mbf = f.w0(ce.M())), ce.sm_mbf;
        }
        toObject(e = !1) {
          return ce.toObject(e, this);
        }
        static toObject(e, t) {
          return f.BT(ce.M(), e, t);
        }
        static fromObject(e) {
          return f.Uq(ce.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (w().BinaryReader)(e),
            r = new ce();
          return ce.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return f.zj(ce.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (w().BinaryWriter)();
          return ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          f.i0(ce.M(), e, t);
        }
        serializeBase64String() {
          var e = new (w().BinaryWriter)();
          return ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlan_GetPromotionPlanSalesDaily_Request";
        }
      }
      class me extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            me.prototype.sales || f.Sg(me.M()),
            M.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            me.sm_m ||
              (me.sm_m = {
                proto: me,
                fields: {
                  sales: { n: 1, c: ge, r: !0, q: !0 },
                  partial_access: {
                    n: 2,
                    br: f.qM.readBool,
                    bw: f.gp.writeBool,
                  },
                },
              }),
            me.sm_m
          );
        }
        static MBF() {
          return me.sm_mbf || (me.sm_mbf = f.w0(me.M())), me.sm_mbf;
        }
        toObject(e = !1) {
          return me.toObject(e, this);
        }
        static toObject(e, t) {
          return f.BT(me.M(), e, t);
        }
        static fromObject(e) {
          return f.Uq(me.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (w().BinaryReader)(e),
            r = new me();
          return me.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return f.zj(me.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (w().BinaryWriter)();
          return me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          f.i0(me.M(), e, t);
        }
        serializeBase64String() {
          var e = new (w().BinaryWriter)();
          return me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlan_GetPromotionPlanSalesDaily_Response";
        }
      }
      class ue extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ue.prototype.rtime_date || f.Sg(ue.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ue.sm_m ||
              (ue.sm_m = {
                proto: ue,
                fields: {
                  rtime_date: {
                    n: 1,
                    br: f.qM.readUint32,
                    bw: f.gp.writeUint32,
                  },
                  date: { n: 2, br: f.qM.readString, bw: f.gp.writeString },
                  summary_sales: { n: 3, c: le },
                },
              }),
            ue.sm_m
          );
        }
        static MBF() {
          return ue.sm_mbf || (ue.sm_mbf = f.w0(ue.M())), ue.sm_mbf;
        }
        toObject(e = !1) {
          return ue.toObject(e, this);
        }
        static toObject(e, t) {
          return f.BT(ue.M(), e, t);
        }
        static fromObject(e) {
          return f.Uq(ue.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (w().BinaryReader)(e),
            r = new ue();
          return ue.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return f.zj(ue.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (w().BinaryWriter)();
          return ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          f.i0(ue.M(), e, t);
        }
        serializeBase64String() {
          var e = new (w().BinaryWriter)();
          return ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlan_GetPromotionPlanSalesDaily_Response_DailyPromotionSales";
        }
      }
      class de extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            de.prototype.appid || f.Sg(de.M()),
            M.Message.initialize(this, e, 0, -1, [5], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            de.sm_m ||
              (de.sm_m = {
                proto: de,
                fields: {
                  appid: { n: 1, br: f.qM.readUint32, bw: f.gp.writeUint32 },
                  packageid: {
                    n: 2,
                    br: f.qM.readUint32,
                    bw: f.gp.writeUint32,
                  },
                  secondary_product_id: {
                    n: 3,
                    br: f.qM.readUint32,
                    bw: f.gp.writeUint32,
                  },
                  summary_sales: { n: 4, c: le },
                  daily_promo_sales: { n: 5, c: ue, r: !0, q: !0 },
                  package_billing_type: {
                    n: 6,
                    br: f.qM.readUint32,
                    bw: f.gp.writeUint32,
                  },
                },
              }),
            de.sm_m
          );
        }
        static MBF() {
          return de.sm_mbf || (de.sm_mbf = f.w0(de.M())), de.sm_mbf;
        }
        toObject(e = !1) {
          return de.toObject(e, this);
        }
        static toObject(e, t) {
          return f.BT(de.M(), e, t);
        }
        static fromObject(e) {
          return f.Uq(de.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (w().BinaryReader)(e),
            r = new de();
          return de.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return f.zj(de.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (w().BinaryWriter)();
          return de.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          f.i0(de.M(), e, t);
        }
        serializeBase64String() {
          var e = new (w().BinaryWriter)();
          return de.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlan_GetPromotionPlanSalesDaily_Response_Product";
        }
      }
      class ge extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ge.prototype.promotionid || f.Sg(ge.M()),
            M.Message.initialize(this, e, 0, -1, [2, 4], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ge.sm_m ||
              (ge.sm_m = {
                proto: ge,
                fields: {
                  promotionid: {
                    n: 1,
                    br: f.qM.readUint64String,
                    bw: f.gp.writeUint64String,
                  },
                  daily_promo_sales: { n: 2, c: ue, r: !0, q: !0 },
                  summary_sales: { n: 3, c: le },
                  products: { n: 4, c: de, r: !0, q: !0 },
                  products_missing_user_rights: {
                    n: 5,
                    br: f.qM.readUint32,
                    bw: f.gp.writeUint32,
                  },
                },
              }),
            ge.sm_m
          );
        }
        static MBF() {
          return ge.sm_mbf || (ge.sm_mbf = f.w0(ge.M())), ge.sm_mbf;
        }
        toObject(e = !1) {
          return ge.toObject(e, this);
        }
        static toObject(e, t) {
          return f.BT(ge.M(), e, t);
        }
        static fromObject(e) {
          return f.Uq(ge.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (w().BinaryReader)(e),
            r = new ge();
          return ge.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return f.zj(ge.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (w().BinaryWriter)();
          return ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          f.i0(ge.M(), e, t);
        }
        serializeBase64String() {
          var e = new (w().BinaryWriter)();
          return ge.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlan_GetPromotionPlanSalesDaily_Response_PromotionSaleData";
        }
      }
      class Be extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Be.prototype.request_list || f.Sg(Be.M()),
            M.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Be.sm_m ||
              (Be.sm_m = {
                proto: Be,
                fields: { request_list: { n: 1, c: _e, r: !0, q: !0 } },
              }),
            Be.sm_m
          );
        }
        static MBF() {
          return Be.sm_mbf || (Be.sm_mbf = f.w0(Be.M())), Be.sm_mbf;
        }
        toObject(e = !1) {
          return Be.toObject(e, this);
        }
        static toObject(e, t) {
          return f.BT(Be.M(), e, t);
        }
        static fromObject(e) {
          return f.Uq(Be.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (w().BinaryReader)(e),
            r = new Be();
          return Be.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return f.zj(Be.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (w().BinaryWriter)();
          return Be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          f.i0(Be.M(), e, t);
        }
        serializeBase64String() {
          var e = new (w().BinaryWriter)();
          return Be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPromotionPlanForSalePages_Request";
        }
      }
      class _e extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _e.prototype.clan_account_id || f.Sg(_e.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _e.sm_m ||
              (_e.sm_m = {
                proto: _e,
                fields: {
                  clan_account_id: {
                    n: 1,
                    br: f.qM.readUint32,
                    bw: f.gp.writeUint32,
                  },
                  gid_clan_event: {
                    n: 2,
                    br: f.qM.readFixed64String,
                    bw: f.gp.writeFixed64String,
                  },
                },
              }),
            _e.sm_m
          );
        }
        static MBF() {
          return _e.sm_mbf || (_e.sm_mbf = f.w0(_e.M())), _e.sm_mbf;
        }
        toObject(e = !1) {
          return _e.toObject(e, this);
        }
        static toObject(e, t) {
          return f.BT(_e.M(), e, t);
        }
        static fromObject(e) {
          return f.Uq(_e.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (w().BinaryReader)(e),
            r = new _e();
          return _e.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return f.zj(_e.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (w().BinaryWriter)();
          return _e.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          f.i0(_e.M(), e, t);
        }
        serializeBase64String() {
          var e = new (w().BinaryWriter)();
          return _e.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPromotionPlanForSalePages_Request_CSalePage";
        }
      }
      class be extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            be.prototype.plans || f.Sg(be.M()),
            M.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            be.sm_m ||
              (be.sm_m = {
                proto: be,
                fields: { plans: { n: 1, c: z, r: !0, q: !0 } },
              }),
            be.sm_m
          );
        }
        static MBF() {
          return be.sm_mbf || (be.sm_mbf = f.w0(be.M())), be.sm_mbf;
        }
        toObject(e = !1) {
          return be.toObject(e, this);
        }
        static toObject(e, t) {
          return f.BT(be.M(), e, t);
        }
        static fromObject(e) {
          return f.Uq(be.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (w().BinaryReader)(e),
            r = new be();
          return be.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return f.zj(be.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (w().BinaryWriter)();
          return be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          f.i0(be.M(), e, t);
        }
        serializeBase64String() {
          var e = new (w().BinaryWriter)();
          return be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPromotionPlanForSalePages_Response";
        }
      }
      class pe extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            pe.prototype.rtstart || f.Sg(pe.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            pe.sm_m ||
              (pe.sm_m = {
                proto: pe,
                fields: {
                  rtstart: { n: 1, br: f.qM.readUint32, bw: f.gp.writeUint32 },
                  rtend: { n: 2, br: f.qM.readUint32, bw: f.gp.writeUint32 },
                  include_packages: {
                    n: 3,
                    br: f.qM.readBool,
                    bw: f.gp.writeBool,
                  },
                  filter_modified_sales_rank: {
                    n: 4,
                    d: !0,
                    br: f.qM.readBool,
                    bw: f.gp.writeBool,
                  },
                },
              }),
            pe.sm_m
          );
        }
        static MBF() {
          return pe.sm_mbf || (pe.sm_mbf = f.w0(pe.M())), pe.sm_mbf;
        }
        toObject(e = !1) {
          return pe.toObject(e, this);
        }
        static toObject(e, t) {
          return f.BT(pe.M(), e, t);
        }
        static fromObject(e) {
          return f.Uq(pe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (w().BinaryReader)(e),
            r = new pe();
          return pe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return f.zj(pe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (w().BinaryWriter)();
          return pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          f.i0(pe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (w().BinaryWriter)();
          return pe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetUpcomingScheduledDiscounts_Request";
        }
      }
      class ye extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ye.prototype.package_details || f.Sg(ye.M()),
            M.Message.initialize(this, e, 0, -1, [1, 2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ye.sm_m ||
              (ye.sm_m = {
                proto: ye,
                fields: {
                  package_details: { n: 1, c: Me, r: !0, q: !0 },
                  app_details: { n: 2, c: we, r: !0, q: !0 },
                },
              }),
            ye.sm_m
          );
        }
        static MBF() {
          return ye.sm_mbf || (ye.sm_mbf = f.w0(ye.M())), ye.sm_mbf;
        }
        toObject(e = !1) {
          return ye.toObject(e, this);
        }
        static toObject(e, t) {
          return f.BT(ye.M(), e, t);
        }
        static fromObject(e) {
          return f.Uq(ye.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (w().BinaryReader)(e),
            r = new ye();
          return ye.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return f.zj(ye.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (w().BinaryWriter)();
          return ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          f.i0(ye.M(), e, t);
        }
        serializeBase64String() {
          var e = new (w().BinaryWriter)();
          return ye.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetUpcomingScheduledDiscounts_Response";
        }
      }
      class Me extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Me.prototype.package_id || f.Sg(Me.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Me.sm_m ||
              (Me.sm_m = {
                proto: Me,
                fields: {
                  package_id: {
                    n: 1,
                    br: f.qM.readUint32,
                    bw: f.gp.writeUint32,
                  },
                  discount_id: {
                    n: 2,
                    br: f.qM.readUint32,
                    bw: f.gp.writeUint32,
                  },
                  discount_name: {
                    n: 3,
                    br: f.qM.readString,
                    bw: f.gp.writeString,
                  },
                  discount_percentage: {
                    n: 4,
                    br: f.qM.readUint32,
                    bw: f.gp.writeUint32,
                  },
                  original_price_usd: {
                    n: 5,
                    br: f.qM.readUint32,
                    bw: f.gp.writeUint32,
                  },
                  discount_price_usd: {
                    n: 6,
                    br: f.qM.readUint32,
                    bw: f.gp.writeUint32,
                  },
                  rtime_discount_start: {
                    n: 7,
                    br: f.qM.readUint32,
                    bw: f.gp.writeUint32,
                  },
                  rtime_discount_end: {
                    n: 8,
                    br: f.qM.readUint32,
                    bw: f.gp.writeUint32,
                  },
                },
              }),
            Me.sm_m
          );
        }
        static MBF() {
          return Me.sm_mbf || (Me.sm_mbf = f.w0(Me.M())), Me.sm_mbf;
        }
        toObject(e = !1) {
          return Me.toObject(e, this);
        }
        static toObject(e, t) {
          return f.BT(Me.M(), e, t);
        }
        static fromObject(e) {
          return f.Uq(Me.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (w().BinaryReader)(e),
            r = new Me();
          return Me.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return f.zj(Me.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (w().BinaryWriter)();
          return Me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          f.i0(Me.M(), e, t);
        }
        serializeBase64String() {
          var e = new (w().BinaryWriter)();
          return Me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetUpcomingScheduledDiscounts_Response_CUpcomingPackageDiscountInfo";
        }
      }
      class we extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            we.prototype.appid || f.Sg(we.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            we.sm_m ||
              (we.sm_m = {
                proto: we,
                fields: {
                  appid: { n: 1, br: f.qM.readUint32, bw: f.gp.writeUint32 },
                  cheapest_package_id: {
                    n: 3,
                    br: f.qM.readUint32,
                    bw: f.gp.writeUint32,
                  },
                  cheapest_discount_id: {
                    n: 4,
                    br: f.qM.readUint32,
                    bw: f.gp.writeUint32,
                  },
                  cheapest_discount_name: {
                    n: 5,
                    br: f.qM.readString,
                    bw: f.gp.writeString,
                  },
                  package_original_price_usd: {
                    n: 6,
                    br: f.qM.readUint32,
                    bw: f.gp.writeUint32,
                  },
                  discounted_price_usd: {
                    n: 7,
                    br: f.qM.readUint32,
                    bw: f.gp.writeUint32,
                  },
                  discount_percentage: {
                    n: 8,
                    br: f.qM.readUint32,
                    bw: f.gp.writeUint32,
                  },
                  rtime_discount_start: {
                    n: 9,
                    br: f.qM.readUint32,
                    bw: f.gp.writeUint32,
                  },
                  rtime_discount_end: {
                    n: 10,
                    br: f.qM.readUint32,
                    bw: f.gp.writeUint32,
                  },
                  num_discounted_packages: {
                    n: 11,
                    br: f.qM.readUint32,
                    bw: f.gp.writeUint32,
                  },
                  modified_sales_rank: {
                    n: 12,
                    br: f.qM.readUint32,
                    bw: f.gp.writeUint32,
                  },
                },
              }),
            we.sm_m
          );
        }
        static MBF() {
          return we.sm_mbf || (we.sm_mbf = f.w0(we.M())), we.sm_mbf;
        }
        toObject(e = !1) {
          return we.toObject(e, this);
        }
        static toObject(e, t) {
          return f.BT(we.M(), e, t);
        }
        static fromObject(e) {
          return f.Uq(we.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (w().BinaryReader)(e),
            r = new we();
          return we.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return f.zj(we.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (w().BinaryWriter)();
          return we.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          f.i0(we.M(), e, t);
        }
        serializeBase64String() {
          var e = new (w().BinaryWriter)();
          return we.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetUpcomingScheduledDiscounts_Response_CUpcomingAppDiscountInfo";
        }
      }
      class fe extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            fe.prototype.account_id || f.Sg(fe.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            fe.sm_m ||
              (fe.sm_m = {
                proto: fe,
                fields: {
                  account_id: {
                    n: 1,
                    br: f.qM.readUint32,
                    bw: f.gp.writeUint32,
                  },
                  include_published: {
                    n: 2,
                    br: f.qM.readBool,
                    bw: f.gp.writeBool,
                  },
                },
              }),
            fe.sm_m
          );
        }
        static MBF() {
          return fe.sm_mbf || (fe.sm_mbf = f.w0(fe.M())), fe.sm_mbf;
        }
        toObject(e = !1) {
          return fe.toObject(e, this);
        }
        static toObject(e, t) {
          return f.BT(fe.M(), e, t);
        }
        static fromObject(e) {
          return f.Uq(fe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (w().BinaryReader)(e),
            r = new fe();
          return fe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return f.zj(fe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (w().BinaryWriter)();
          return fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          f.i0(fe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (w().BinaryWriter)();
          return fe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetSalePageCandidatesForPromo_Request";
        }
      }
      class ze extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ze.prototype.clans || f.Sg(ze.M()),
            M.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ze.sm_m ||
              (ze.sm_m = {
                proto: ze,
                fields: { clans: { n: 1, c: he, r: !0, q: !0 } },
              }),
            ze.sm_m
          );
        }
        static MBF() {
          return ze.sm_mbf || (ze.sm_mbf = f.w0(ze.M())), ze.sm_mbf;
        }
        toObject(e = !1) {
          return ze.toObject(e, this);
        }
        static toObject(e, t) {
          return f.BT(ze.M(), e, t);
        }
        static fromObject(e) {
          return f.Uq(ze.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (w().BinaryReader)(e),
            r = new ze();
          return ze.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return f.zj(ze.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (w().BinaryWriter)();
          return ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          f.i0(ze.M(), e, t);
        }
        serializeBase64String() {
          var e = new (w().BinaryWriter)();
          return ze.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetSalePageCandidatesForPromo_Response";
        }
      }
      class Se extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Se.prototype.clan_account_id || f.Sg(Se.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Se.sm_m ||
              (Se.sm_m = {
                proto: Se,
                fields: {
                  clan_account_id: {
                    n: 1,
                    br: f.qM.readUint32,
                    bw: f.gp.writeUint32,
                  },
                  gid_clan_event: {
                    n: 2,
                    br: f.qM.readFixed64String,
                    bw: f.gp.writeFixed64String,
                  },
                  name: { n: 3, br: f.qM.readString, bw: f.gp.writeString },
                  published: { n: 4, br: f.qM.readBool, bw: f.gp.writeBool },
                  start_time: {
                    n: 5,
                    br: f.qM.readUint32,
                    bw: f.gp.writeUint32,
                  },
                  end_time: { n: 6, br: f.qM.readUint32, bw: f.gp.writeUint32 },
                  external_sale_event_type: {
                    n: 7,
                    br: f.qM.readUint32,
                    bw: f.gp.writeUint32,
                  },
                },
              }),
            Se.sm_m
          );
        }
        static MBF() {
          return Se.sm_mbf || (Se.sm_mbf = f.w0(Se.M())), Se.sm_mbf;
        }
        toObject(e = !1) {
          return Se.toObject(e, this);
        }
        static toObject(e, t) {
          return f.BT(Se.M(), e, t);
        }
        static fromObject(e) {
          return f.Uq(Se.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (w().BinaryReader)(e),
            r = new Se();
          return Se.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return f.zj(Se.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (w().BinaryWriter)();
          return Se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          f.i0(Se.M(), e, t);
        }
        serializeBase64String() {
          var e = new (w().BinaryWriter)();
          return Se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetSalePageCandidatesForPromo_Response_salepage";
        }
      }
      class he extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            he.prototype.clan_account_id || f.Sg(he.M()),
            M.Message.initialize(this, e, 0, -1, [4], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            he.sm_m ||
              (he.sm_m = {
                proto: he,
                fields: {
                  clan_account_id: {
                    n: 1,
                    br: f.qM.readUint32,
                    bw: f.gp.writeUint32,
                  },
                  clan_name: {
                    n: 2,
                    br: f.qM.readString,
                    bw: f.gp.writeString,
                  },
                  is_creator_home: {
                    n: 3,
                    br: f.qM.readBool,
                    bw: f.gp.writeBool,
                  },
                  sale_pages: { n: 4, c: Se, r: !0, q: !0 },
                },
              }),
            he.sm_m
          );
        }
        static MBF() {
          return he.sm_mbf || (he.sm_mbf = f.w0(he.M())), he.sm_mbf;
        }
        toObject(e = !1) {
          return he.toObject(e, this);
        }
        static toObject(e, t) {
          return f.BT(he.M(), e, t);
        }
        static fromObject(e) {
          return f.Uq(he.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (w().BinaryReader)(e),
            r = new he();
          return he.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return f.zj(he.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (w().BinaryWriter)();
          return he.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          f.i0(he.M(), e, t);
        }
        serializeBase64String() {
          var e = new (w().BinaryWriter)();
          return he.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetSalePageCandidatesForPromo_Response_clan";
        }
      }
      class Re extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Re.prototype.partner_id || f.Sg(Re.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Re.sm_m ||
              (Re.sm_m = {
                proto: Re,
                fields: {
                  partner_id: {
                    n: 1,
                    br: f.qM.readUint32,
                    bw: f.gp.writeUint32,
                  },
                },
              }),
            Re.sm_m
          );
        }
        static MBF() {
          return Re.sm_mbf || (Re.sm_mbf = f.w0(Re.M())), Re.sm_mbf;
        }
        toObject(e = !1) {
          return Re.toObject(e, this);
        }
        static toObject(e, t) {
          return f.BT(Re.M(), e, t);
        }
        static fromObject(e) {
          return f.Uq(Re.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (w().BinaryReader)(e),
            r = new Re();
          return Re.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return f.zj(Re.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (w().BinaryWriter)();
          return Re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          f.i0(Re.M(), e, t);
        }
        serializeBase64String() {
          var e = new (w().BinaryWriter)();
          return Re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetAdvertisingAppsForPartner_Request";
        }
      }
      class ve extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ve.prototype.advertising_apps || f.Sg(ve.M()),
            M.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ve.sm_m ||
              (ve.sm_m = {
                proto: ve,
                fields: { advertising_apps: { n: 1, c: je, r: !0, q: !0 } },
              }),
            ve.sm_m
          );
        }
        static MBF() {
          return ve.sm_mbf || (ve.sm_mbf = f.w0(ve.M())), ve.sm_mbf;
        }
        toObject(e = !1) {
          return ve.toObject(e, this);
        }
        static toObject(e, t) {
          return f.BT(ve.M(), e, t);
        }
        static fromObject(e) {
          return f.Uq(ve.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (w().BinaryReader)(e),
            r = new ve();
          return ve.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return f.zj(ve.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (w().BinaryWriter)();
          return ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          f.i0(ve.M(), e, t);
        }
        serializeBase64String() {
          var e = new (w().BinaryWriter)();
          return ve.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetAdvertisingAppsForPartner_Response";
        }
      }
      class je extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            je.prototype.appid || f.Sg(je.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            je.sm_m ||
              (je.sm_m = {
                proto: je,
                fields: {
                  appid: { n: 1, br: f.qM.readUint32, bw: f.gp.writeUint32 },
                  app_name: { n: 2, br: f.qM.readString, bw: f.gp.writeString },
                  itemid: { n: 3, br: f.qM.readUint32, bw: f.gp.writeUint32 },
                },
              }),
            je.sm_m
          );
        }
        static MBF() {
          return je.sm_mbf || (je.sm_mbf = f.w0(je.M())), je.sm_mbf;
        }
        toObject(e = !1) {
          return je.toObject(e, this);
        }
        static toObject(e, t) {
          return f.BT(je.M(), e, t);
        }
        static fromObject(e) {
          return f.Uq(je.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (w().BinaryReader)(e),
            r = new je();
          return je.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return f.zj(je.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (w().BinaryWriter)();
          return je.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          f.i0(je.M(), e, t);
        }
        serializeBase64String() {
          var e = new (w().BinaryWriter)();
          return je.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetAdvertisingAppsForPartner_Response_advertising_app";
        }
      }
      class Fe extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Fe.prototype.spotlight_due_date || f.Sg(Fe.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Fe.sm_m ||
              (Fe.sm_m = {
                proto: Fe,
                fields: {
                  spotlight_due_date: {
                    n: 1,
                    br: f.qM.readUint32,
                    bw: f.gp.writeUint32,
                  },
                  marketing_message_due_date: {
                    n: 2,
                    br: f.qM.readUint32,
                    bw: f.gp.writeUint32,
                  },
                  discount_event_due_date: {
                    n: 3,
                    br: f.qM.readUint32,
                    bw: f.gp.writeUint32,
                  },
                },
              }),
            Fe.sm_m
          );
        }
        static MBF() {
          return Fe.sm_mbf || (Fe.sm_mbf = f.w0(Fe.M())), Fe.sm_mbf;
        }
        toObject(e = !1) {
          return Fe.toObject(e, this);
        }
        static toObject(e, t) {
          return f.BT(Fe.M(), e, t);
        }
        static fromObject(e) {
          return f.Uq(Fe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (w().BinaryReader)(e),
            r = new Fe();
          return Fe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return f.zj(Fe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (w().BinaryWriter)();
          return Fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          f.i0(Fe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (w().BinaryWriter)();
          return Fe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionRequirements";
        }
      }
      class Pe extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Pe.prototype.inviteid || f.Sg(Pe.M()),
            M.Message.initialize(this, e, 0, -1, [16], null);
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
                    br: f.qM.readFixed64String,
                    bw: f.gp.writeFixed64String,
                  },
                  appid: { n: 2, br: f.qM.readUint32, bw: f.gp.writeUint32 },
                  invite_account: {
                    n: 3,
                    br: f.qM.readUint32,
                    bw: f.gp.writeUint32,
                  },
                  rtinvitetime: {
                    n: 4,
                    br: f.qM.readUint32,
                    bw: f.gp.writeUint32,
                  },
                  rtexpiretime: {
                    n: 5,
                    br: f.qM.readUint32,
                    bw: f.gp.writeUint32,
                  },
                  type: { n: 6, br: f.qM.readEnum, bw: f.gp.writeEnum },
                  accept_account: {
                    n: 7,
                    br: f.qM.readUint32,
                    bw: f.gp.writeUint32,
                  },
                  rtaccepttime: {
                    n: 8,
                    br: f.qM.readUint32,
                    bw: f.gp.writeUint32,
                  },
                  rtdatechosen: {
                    n: 9,
                    br: f.qM.readUint32,
                    bw: f.gp.writeUint32,
                  },
                  discount_eventid: {
                    n: 10,
                    br: f.qM.readUint32,
                    bw: f.gp.writeUint32,
                  },
                  packageid: {
                    n: 11,
                    br: f.qM.readUint32,
                    bw: f.gp.writeUint32,
                  },
                  bundleid: {
                    n: 12,
                    br: f.qM.readUint32,
                    bw: f.gp.writeUint32,
                  },
                  primary_partnerid: {
                    n: 13,
                    br: f.qM.readUint32,
                    bw: f.gp.writeUint32,
                  },
                  deadlines: { n: 14, c: Fe },
                  notify_partner: {
                    n: 15,
                    br: f.qM.readBool,
                    bw: f.gp.writeBool,
                  },
                  additional_email: {
                    n: 16,
                    r: !0,
                    q: !0,
                    br: f.qM.readString,
                    bw: f.gp.writeRepeatedString,
                  },
                  promotion_id: {
                    n: 17,
                    br: f.qM.readString,
                    bw: f.gp.writeString,
                  },
                  cancelled: { n: 18, br: f.qM.readBool, bw: f.gp.writeBool },
                  rtime32_cancel_time: {
                    n: 19,
                    br: f.qM.readUint32,
                    bw: f.gp.writeUint32,
                  },
                  require_sale_page: {
                    n: 20,
                    br: f.qM.readBool,
                    bw: f.gp.writeBool,
                  },
                  require_sale_page_type: {
                    n: 21,
                    br: f.qM.readEnum,
                    bw: f.gp.writeEnum,
                  },
                  admin_notes: {
                    n: 22,
                    br: f.qM.readString,
                    bw: f.gp.writeString,
                  },
                  partner_notes: {
                    n: 23,
                    br: f.qM.readString,
                    bw: f.gp.writeString,
                  },
                },
              }),
            Pe.sm_m
          );
        }
        static MBF() {
          return Pe.sm_mbf || (Pe.sm_mbf = f.w0(Pe.M())), Pe.sm_mbf;
        }
        toObject(e = !1) {
          return Pe.toObject(e, this);
        }
        static toObject(e, t) {
          return f.BT(Pe.M(), e, t);
        }
        static fromObject(e) {
          return f.Uq(Pe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (w().BinaryReader)(e),
            r = new Pe();
          return Pe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return f.zj(Pe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (w().BinaryWriter)();
          return Pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          f.i0(Pe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (w().BinaryWriter)();
          return Pe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvitation";
        }
      }
      class We extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            We.prototype.invite || f.Sg(We.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            We.sm_m ||
              (We.sm_m = {
                proto: We,
                fields: {
                  invite: { n: 1, c: Pe },
                  queue_email_to_send: {
                    n: 2,
                    br: f.qM.readBool,
                    bw: f.gp.writeBool,
                  },
                },
              }),
            We.sm_m
          );
        }
        static MBF() {
          return We.sm_mbf || (We.sm_mbf = f.w0(We.M())), We.sm_mbf;
        }
        toObject(e = !1) {
          return We.toObject(e, this);
        }
        static toObject(e, t) {
          return f.BT(We.M(), e, t);
        }
        static fromObject(e) {
          return f.Uq(We.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (w().BinaryReader)(e),
            r = new We();
          return We.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return f.zj(We.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (w().BinaryWriter)();
          return We.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          f.i0(We.M(), e, t);
        }
        serializeBase64String() {
          var e = new (w().BinaryWriter)();
          return We.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_SetInvite_Request";
        }
      }
      class qe extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            qe.prototype.inviteid || f.Sg(qe.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
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
                    br: f.qM.readFixed64String,
                    bw: f.gp.writeFixed64String,
                  },
                },
              }),
            qe.sm_m
          );
        }
        static MBF() {
          return qe.sm_mbf || (qe.sm_mbf = f.w0(qe.M())), qe.sm_mbf;
        }
        toObject(e = !1) {
          return qe.toObject(e, this);
        }
        static toObject(e, t) {
          return f.BT(qe.M(), e, t);
        }
        static fromObject(e) {
          return f.Uq(qe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (w().BinaryReader)(e),
            r = new qe();
          return qe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return f.zj(qe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (w().BinaryWriter)();
          return qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          f.i0(qe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (w().BinaryWriter)();
          return qe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_SetInvite_Response";
        }
      }
      class Te extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Te.prototype.inviteid || f.Sg(Te.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Te.sm_m ||
              (Te.sm_m = {
                proto: Te,
                fields: {
                  inviteid: {
                    n: 1,
                    br: f.qM.readFixed64String,
                    bw: f.gp.writeFixed64String,
                  },
                  appid: { n: 2, br: f.qM.readUint32, bw: f.gp.writeUint32 },
                  packageid: {
                    n: 3,
                    br: f.qM.readUint32,
                    bw: f.gp.writeUint32,
                  },
                  bundleid: { n: 4, br: f.qM.readUint32, bw: f.gp.writeUint32 },
                  partnerid: {
                    n: 5,
                    br: f.qM.readUint32,
                    bw: f.gp.writeUint32,
                  },
                  promotion_id: {
                    n: 6,
                    br: f.qM.readString,
                    bw: f.gp.writeString,
                  },
                },
              }),
            Te.sm_m
          );
        }
        static MBF() {
          return Te.sm_mbf || (Te.sm_mbf = f.w0(Te.M())), Te.sm_mbf;
        }
        toObject(e = !1) {
          return Te.toObject(e, this);
        }
        static toObject(e, t) {
          return f.BT(Te.M(), e, t);
        }
        static fromObject(e) {
          return f.Uq(Te.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (w().BinaryReader)(e),
            r = new Te();
          return Te.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return f.zj(Te.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (w().BinaryWriter)();
          return Te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          f.i0(Te.M(), e, t);
        }
        serializeBase64String() {
          var e = new (w().BinaryWriter)();
          return Te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_GetInvite_Request";
        }
      }
      class Oe extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Oe.prototype.invites || f.Sg(Oe.M()),
            M.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Oe.sm_m ||
              (Oe.sm_m = {
                proto: Oe,
                fields: { invites: { n: 1, c: Pe, r: !0, q: !0 } },
              }),
            Oe.sm_m
          );
        }
        static MBF() {
          return Oe.sm_mbf || (Oe.sm_mbf = f.w0(Oe.M())), Oe.sm_mbf;
        }
        toObject(e = !1) {
          return Oe.toObject(e, this);
        }
        static toObject(e, t) {
          return f.BT(Oe.M(), e, t);
        }
        static fromObject(e) {
          return f.Uq(Oe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (w().BinaryReader)(e),
            r = new Oe();
          return Oe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return f.zj(Oe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (w().BinaryWriter)();
          return Oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          f.i0(Oe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (w().BinaryWriter)();
          return Oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_GetInvite_Response";
        }
      }
      class Ie extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ie.prototype.inviteid || f.Sg(Ie.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ie.sm_m ||
              (Ie.sm_m = {
                proto: Ie,
                fields: {
                  inviteid: {
                    n: 1,
                    br: f.qM.readFixed64String,
                    bw: f.gp.writeFixed64String,
                  },
                  only_notify_additional_email: {
                    n: 2,
                    br: f.qM.readBool,
                    bw: f.gp.writeBool,
                  },
                },
              }),
            Ie.sm_m
          );
        }
        static MBF() {
          return Ie.sm_mbf || (Ie.sm_mbf = f.w0(Ie.M())), Ie.sm_mbf;
        }
        toObject(e = !1) {
          return Ie.toObject(e, this);
        }
        static toObject(e, t) {
          return f.BT(Ie.M(), e, t);
        }
        static fromObject(e) {
          return f.Uq(Ie.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (w().BinaryReader)(e),
            r = new Ie();
          return Ie.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return f.zj(Ie.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (w().BinaryWriter)();
          return Ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          f.i0(Ie.M(), e, t);
        }
        serializeBase64String() {
          var e = new (w().BinaryWriter)();
          return Ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_ResendEmailInvite_Request";
        }
      }
      class Ue extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Ue.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Ue();
        }
        static deserializeBinary(e) {
          let t = new (w().BinaryReader)(e),
            r = new Ue();
          return Ue.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (w().BinaryWriter)();
          return Ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (w().BinaryWriter)();
          return Ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_ResendEmailInvite_Response";
        }
      }
      class Ce extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ce.prototype.inviteid || f.Sg(Ce.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
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
                    br: f.qM.readFixed64String,
                    bw: f.gp.writeFixed64String,
                  },
                },
              }),
            Ce.sm_m
          );
        }
        static MBF() {
          return Ce.sm_mbf || (Ce.sm_mbf = f.w0(Ce.M())), Ce.sm_mbf;
        }
        toObject(e = !1) {
          return Ce.toObject(e, this);
        }
        static toObject(e, t) {
          return f.BT(Ce.M(), e, t);
        }
        static fromObject(e) {
          return f.Uq(Ce.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (w().BinaryReader)(e),
            r = new Ce();
          return Ce.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return f.zj(Ce.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (w().BinaryWriter)();
          return Ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          f.i0(Ce.M(), e, t);
        }
        serializeBase64String() {
          var e = new (w().BinaryWriter)();
          return Ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_GetEmailTargets_Request";
        }
      }
      class xe extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            xe.prototype.accountid || f.Sg(xe.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            xe.sm_m ||
              (xe.sm_m = {
                proto: xe,
                fields: {
                  accountid: {
                    n: 1,
                    br: f.qM.readUint32,
                    bw: f.gp.writeUint32,
                  },
                  partnerid: {
                    n: 2,
                    br: f.qM.readUint32,
                    bw: f.gp.writeUint32,
                  },
                  email_address: {
                    n: 3,
                    br: f.qM.readString,
                    bw: f.gp.writeString,
                  },
                },
              }),
            xe.sm_m
          );
        }
        static MBF() {
          return xe.sm_mbf || (xe.sm_mbf = f.w0(xe.M())), xe.sm_mbf;
        }
        toObject(e = !1) {
          return xe.toObject(e, this);
        }
        static toObject(e, t) {
          return f.BT(xe.M(), e, t);
        }
        static fromObject(e) {
          return f.Uq(xe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (w().BinaryReader)(e),
            r = new xe();
          return xe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return f.zj(xe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (w().BinaryWriter)();
          return xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          f.i0(xe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (w().BinaryWriter)();
          return xe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInviteReceive";
        }
      }
      class Ae extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ae.prototype.targets || f.Sg(Ae.M()),
            M.Message.initialize(this, e, 0, -1, [1, 2, 3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ae.sm_m ||
              (Ae.sm_m = {
                proto: Ae,
                fields: {
                  targets: { n: 1, c: xe, r: !0, q: !0 },
                  additional_email_address: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: f.qM.readString,
                    bw: f.gp.writeRepeatedString,
                  },
                  valve_account_ids: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: f.qM.readUint32,
                    pbr: f.qM.readPackedUint32,
                    bw: f.gp.writeRepeatedUint32,
                  },
                  operation_email: {
                    n: 4,
                    br: f.qM.readString,
                    bw: f.gp.writeString,
                  },
                },
              }),
            Ae.sm_m
          );
        }
        static MBF() {
          return Ae.sm_mbf || (Ae.sm_mbf = f.w0(Ae.M())), Ae.sm_mbf;
        }
        toObject(e = !1) {
          return Ae.toObject(e, this);
        }
        static toObject(e, t) {
          return f.BT(Ae.M(), e, t);
        }
        static fromObject(e) {
          return f.Uq(Ae.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (w().BinaryReader)(e),
            r = new Ae();
          return Ae.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return f.zj(Ae.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (w().BinaryWriter)();
          return Ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          f.i0(Ae.M(), e, t);
        }
        serializeBase64String() {
          var e = new (w().BinaryWriter)();
          return Ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_GetEmailTargets_Response";
        }
      }
      class De extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            De.prototype.inviteid || f.Sg(De.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            De.sm_m ||
              (De.sm_m = {
                proto: De,
                fields: {
                  inviteid: {
                    n: 1,
                    br: f.qM.readFixed64String,
                    bw: f.gp.writeFixed64String,
                  },
                  rtdatechosen: {
                    n: 2,
                    br: f.qM.readUint32,
                    bw: f.gp.writeUint32,
                  },
                  discount_days: {
                    n: 3,
                    br: f.qM.readUint32,
                    bw: f.gp.writeUint32,
                  },
                  discount_info: {
                    n: 4,
                    br: f.qM.readString,
                    bw: f.gp.writeString,
                  },
                  skip_discount_event: {
                    n: 5,
                    br: f.qM.readBool,
                    bw: f.gp.writeBool,
                  },
                },
              }),
            De.sm_m
          );
        }
        static MBF() {
          return De.sm_mbf || (De.sm_mbf = f.w0(De.M())), De.sm_mbf;
        }
        toObject(e = !1) {
          return De.toObject(e, this);
        }
        static toObject(e, t) {
          return f.BT(De.M(), e, t);
        }
        static fromObject(e) {
          return f.Uq(De.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (w().BinaryReader)(e),
            r = new De();
          return De.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return f.zj(De.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (w().BinaryWriter)();
          return De.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          f.i0(De.M(), e, t);
        }
        serializeBase64String() {
          var e = new (w().BinaryWriter)();
          return De.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_AcceptInvite_Request";
        }
      }
      class Ee extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ee.prototype.gid || f.Sg(Ee.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ee.sm_m ||
              (Ee.sm_m = {
                proto: Ee,
                fields: {
                  gid: {
                    n: 1,
                    br: f.qM.readFixed64String,
                    bw: f.gp.writeFixed64String,
                  },
                },
              }),
            Ee.sm_m
          );
        }
        static MBF() {
          return Ee.sm_mbf || (Ee.sm_mbf = f.w0(Ee.M())), Ee.sm_mbf;
        }
        toObject(e = !1) {
          return Ee.toObject(e, this);
        }
        static toObject(e, t) {
          return f.BT(Ee.M(), e, t);
        }
        static fromObject(e) {
          return f.Uq(Ee.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (w().BinaryReader)(e),
            r = new Ee();
          return Ee.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return f.zj(Ee.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (w().BinaryWriter)();
          return Ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          f.i0(Ee.M(), e, t);
        }
        serializeBase64String() {
          var e = new (w().BinaryWriter)();
          return Ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_AcceptInvite_Response";
        }
      }
      class Ne extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ne.prototype.inviteid || f.Sg(Ne.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ne.sm_m ||
              (Ne.sm_m = {
                proto: Ne,
                fields: {
                  inviteid: {
                    n: 1,
                    br: f.qM.readFixed64String,
                    bw: f.gp.writeFixed64String,
                  },
                },
              }),
            Ne.sm_m
          );
        }
        static MBF() {
          return Ne.sm_mbf || (Ne.sm_mbf = f.w0(Ne.M())), Ne.sm_mbf;
        }
        toObject(e = !1) {
          return Ne.toObject(e, this);
        }
        static toObject(e, t) {
          return f.BT(Ne.M(), e, t);
        }
        static fromObject(e) {
          return f.Uq(Ne.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (w().BinaryReader)(e),
            r = new Ne();
          return Ne.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return f.zj(Ne.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (w().BinaryWriter)();
          return Ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          f.i0(Ne.M(), e, t);
        }
        serializeBase64String() {
          var e = new (w().BinaryWriter)();
          return Ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_CancelInvite_Request";
        }
      }
      class Ge extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Ge.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Ge();
        }
        static deserializeBinary(e) {
          let t = new (w().BinaryReader)(e),
            r = new Ge();
          return Ge.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (w().BinaryWriter)();
          return Ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (w().BinaryWriter)();
          return Ge.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_CancelInvite_Response";
        }
      }
      class ke extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ke.prototype.opt_in_name || f.Sg(ke.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ke.sm_m ||
              (ke.sm_m = {
                proto: ke,
                fields: {
                  opt_in_name: {
                    n: 1,
                    br: f.qM.readString,
                    bw: f.gp.writeString,
                  },
                  partner_id: {
                    n: 2,
                    br: f.qM.readUint32,
                    bw: f.gp.writeUint32,
                  },
                },
              }),
            ke.sm_m
          );
        }
        static MBF() {
          return ke.sm_mbf || (ke.sm_mbf = f.w0(ke.M())), ke.sm_mbf;
        }
        toObject(e = !1) {
          return ke.toObject(e, this);
        }
        static toObject(e, t) {
          return f.BT(ke.M(), e, t);
        }
        static fromObject(e) {
          return f.Uq(ke.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (w().BinaryReader)(e),
            r = new ke();
          return ke.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return f.zj(ke.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (w().BinaryWriter)();
          return ke.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          f.i0(ke.M(), e, t);
        }
        serializeBase64String() {
          var e = new (w().BinaryWriter)();
          return ke.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionStats_GetOptInDemoStats_Request";
        }
      }
      class Le extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Le.prototype.stats || f.Sg(Le.M()),
            M.Message.initialize(this, e, 0, -1, [1, 2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Le.sm_m ||
              (Le.sm_m = {
                proto: Le,
                fields: {
                  stats: { n: 1, c: Ve, r: !0, q: !0 },
                  appid_without_permissions: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: f.qM.readUint32,
                    pbr: f.qM.readPackedUint32,
                    bw: f.gp.writeRepeatedUint32,
                  },
                },
              }),
            Le.sm_m
          );
        }
        static MBF() {
          return Le.sm_mbf || (Le.sm_mbf = f.w0(Le.M())), Le.sm_mbf;
        }
        toObject(e = !1) {
          return Le.toObject(e, this);
        }
        static toObject(e, t) {
          return f.BT(Le.M(), e, t);
        }
        static fromObject(e) {
          return f.Uq(Le.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (w().BinaryReader)(e),
            r = new Le();
          return Le.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return f.zj(Le.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (w().BinaryWriter)();
          return Le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          f.i0(Le.M(), e, t);
        }
        serializeBase64String() {
          var e = new (w().BinaryWriter)();
          return Le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionStats_GetOptInDemoStats_Response";
        }
      }
      class Ve extends M.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ve.prototype.appid || f.Sg(Ve.M()),
            M.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ve.sm_m ||
              (Ve.sm_m = {
                proto: Ve,
                fields: {
                  appid: { n: 1, br: f.qM.readUint32, bw: f.gp.writeUint32 },
                  demo_appid: {
                    n: 2,
                    br: f.qM.readUint32,
                    bw: f.gp.writeUint32,
                  },
                  rt_start_time: {
                    n: 3,
                    br: f.qM.readUint32,
                    bw: f.gp.writeUint32,
                  },
                  rt_end_time: {
                    n: 4,
                    br: f.qM.readUint32,
                    bw: f.gp.writeUint32,
                  },
                  demo_player_count: {
                    n: 5,
                    br: f.qM.readUint32,
                    bw: f.gp.writeUint32,
                  },
                  wishlist_count: {
                    n: 6,
                    br: f.qM.readUint32,
                    bw: f.gp.writeUint32,
                  },
                  player_wishlist_count: {
                    n: 7,
                    br: f.qM.readUint32,
                    bw: f.gp.writeUint32,
                  },
                  rt_last_update_time: {
                    n: 9,
                    br: f.qM.readUint32,
                    bw: f.gp.writeUint32,
                  },
                },
              }),
            Ve.sm_m
          );
        }
        static MBF() {
          return Ve.sm_mbf || (Ve.sm_mbf = f.w0(Ve.M())), Ve.sm_mbf;
        }
        toObject(e = !1) {
          return Ve.toObject(e, this);
        }
        static toObject(e, t) {
          return f.BT(Ve.M(), e, t);
        }
        static fromObject(e) {
          return f.Uq(Ve.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (w().BinaryReader)(e),
            r = new Ve();
          return Ve.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return f.zj(Ve.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (w().BinaryWriter)();
          return Ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          f.i0(Ve.M(), e, t);
        }
        serializeBase64String() {
          var e = new (w().BinaryWriter)();
          return Ve.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionStats_GetOptInDemoStats_Response_PerAppStats";
        }
      }
      !(function (e) {
        (e.CreatePlan = function (e, t) {
          return e.SendMsg(
            "PromotionPlanning.CreatePlan#1",
            (0, y.I8)(S, t),
            h,
            { ePrivilege: 1 },
          );
        }),
          (e.CreateTentativePlan = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.CreateTentativePlan#1",
              (0, y.I8)(S, t),
              h,
              { ePrivilege: 1 },
            );
          }),
          (e.UpdatePlan = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.UpdatePlan#1",
              (0, y.I8)(R, t),
              v,
              { ePrivilege: 1 },
            );
          }),
          (e.UpdatePlanPartnerInfo = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.UpdatePlanPartnerInfo#1",
              (0, y.I8)(R, t),
              v,
              { ePrivilege: 1 },
            );
          }),
          (e.UpdatePlanInputData = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.UpdatePlanInputData#1",
              (0, y.I8)(R, t),
              v,
              { ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.DeletePlan = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.DeletePlan#1",
              (0, y.I8)(A, t),
              D,
              { ePrivilege: 1 },
            );
          }),
          (e.GetPlan = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetPlan#1",
              (0, y.I8)(j, t),
              F,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetAllActivePlan = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetAllActivePlan#1",
              (0, y.I8)(P, t),
              W,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetPlanCompletedInDateRange = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetPlanCompletedInDateRange#1",
              (0, y.I8)(q, t),
              T,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetPlanByAssociationID = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetPlanByAssociationID#1",
              (0, y.I8)(I, t),
              U,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetPlansUpdatedSince = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetPlansUpdatedSince#1",
              (0, y.I8)(C, t),
              x,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.SearchPlan = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.SearchPlan#1",
              (0, y.I8)(E, t),
              N,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetAllPlansForApps = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetAllPlansForApps#1",
              (0, y.I8)(G, t),
              k,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          }),
          (e.GetAllPlansForPartner = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetAllPlansForPartner#1",
              (0, y.I8)(V, t),
              H,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetPlanByInputAccessKey = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetPlanByInputAccessKey#1",
              (0, y.I8)(K, t),
              Y,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.MarkLocalizationAssetComplete = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.MarkLocalizationAssetComplete#1",
              (0, y.I8)(J, t),
              X,
              { ePrivilege: 1 },
            );
          }),
          (e.SendNotification = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.SendNotification#1",
              (0, y.I8)(Z, t),
              $,
              { ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetSentNotification = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetSentNotification#1",
              (0, y.I8)(Q, t),
              ee,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.ResendNotification = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.ResendNotification#1",
              (0, y.I8)(re, t),
              ie,
              { ePrivilege: 1 },
            );
          }),
          (e.SetPromotionEmailTarget = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.SetPromotionEmailTarget#1",
              (0, y.I8)(ne, t),
              ae,
              { ePrivilege: 1 },
            );
          }),
          (e.GetPromotionPlanSalesDaily = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetPromotionPlanSalesDaily#1",
              (0, y.I8)(ce, t),
              me,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetPromotionPlanForSalePages = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetPromotionPlanForSalePages#1",
              (0, y.I8)(Be, t),
              be,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          }),
          (e.CreateSalePageForPromo = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.CreateSalePageForPromo#1",
              (0, y.I8)(se, t),
              oe,
              { ePrivilege: 1 },
            );
          }),
          (e.GetUpcomingScheduledDiscounts = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetUpcomingScheduledDiscounts#1",
              (0, y.I8)(pe, t),
              ye,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          }),
          (e.GetSalePageCandidatesForPromo = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetSalePageCandidatesForPromo#1",
              (0, y.I8)(fe, t),
              ze,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetAdvertisingAppsForPartner = function (e, t) {
            return e.SendMsg(
              "PromotionPlanning.GetAdvertisingAppsForPartner#1",
              (0, y.I8)(Re, t),
              ve,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          });
      })(i || (i = {})),
        (function (e) {
          (e.SetInvite = function (e, t) {
            return e.SendMsg(
              "PromotionEventInvites.SetInvite#1",
              (0, y.I8)(We, t),
              qe,
              { ePrivilege: 4 },
            );
          }),
            (e.GetInvite = function (e, t) {
              return e.SendMsg(
                "PromotionEventInvites.GetInvite#1",
                (0, y.I8)(Te, t),
                Oe,
                { bConstMethod: !0, ePrivilege: 1 },
              );
            }),
            (e.AcceptInvite = function (e, t) {
              return e.SendMsg(
                "PromotionEventInvites.AcceptInvite#1",
                (0, y.I8)(De, t),
                Ee,
                { ePrivilege: 1 },
              );
            }),
            (e.CancelInvite = function (e, t) {
              return e.SendMsg(
                "PromotionEventInvites.CancelInvite#1",
                (0, y.I8)(Ne, t),
                Ge,
                { ePrivilege: 4 },
              );
            }),
            (e.ResendEmailInvite = function (e, t) {
              return e.SendMsg(
                "PromotionEventInvites.ResendEmailInvite#1",
                (0, y.I8)(Ie, t),
                Ue,
                { ePrivilege: 4 },
              );
            }),
            (e.GetEmailTargets = function (e, t) {
              return e.SendMsg(
                "PromotionEventInvites.GetEmailTargets#1",
                (0, y.I8)(Ce, t),
                Ae,
                { ePrivilege: 4 },
              );
            });
        })(n || (n = {})),
        (function (e) {
          e.GetOptInDemoStats = function (e, t) {
            return e.SendMsg(
              "PromotionStats.GetOptInDemoStats#1",
              (0, y.I8)(ke, t),
              Le,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          };
        })(a || (a = {}));
      var He = r(80902),
        Ke = r(72034),
        Ye = r(30470),
        Je = r(24484);
      function Xe(e, t) {
        const [r] = (0, d.useState)(() =>
          (function () {
            const e = (0, Je.Tc)(
              "promotion_operation_token",
              "application_config",
            );
            return (
              (0, p.wT)(
                e,
                "GetPromotionWriteAccess: promotion operation token is missing",
              ),
              e
                ? new Ke.D(Ye.TS.WEBAPI_BASE_URL, e).GetServiceTransport()
                : null
            );
          })(),
        );
        return (0, He.I)({
          queryKey: ["usePromotionPlanBySalePage", t],
          queryFn: async () => {
            if (!r) return null;
            const n = y.w.Init(Be),
              a = new _e();
            a.set_clan_account_id(e),
              a.set_gid_clan_event(t),
              n.Body().add_request_list(a);
            const s = await i.GetPromotionPlanForSalePages(r, n);
            if (s.GetEResult() != b.R)
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
      var Ze = r(82429),
        $e = r(34824),
        Qe = r(56283),
        et = r(84811),
        tt = r(34629),
        rt = r(74568),
        it = r(61859),
        nt = r(84933),
        at = r(56330),
        st = r.n(at),
        ot = r(22797),
        lt = r(78327),
        ct = r(68797);
      const mt = new (class {
        async DeleteForumTopic(e, t, r, i, n) {
          let a =
            lt.TS.COMMUNITY_BASE_URL +
            "forum/" +
            e.GetAccountID() +
            "/" +
            t +
            "/deletetopic/";
          null != r && "" != r && (a += r + "/");
          const s = new FormData();
          s.append("sessionid", lt.TS.SESSIONID), s.append("gidforumtopic", i);
          let o = await m().post(a, s, {
            withCredentials: !0,
            cancelToken: n.token,
          });
          if (o.data.success != b.R) throw o.data;
          return o.data;
        }
      })();
      class ut extends d.Component {
        static m_uniqueError = 0;
        m_forumTopicGID;
        m_clanSteamID;
        m_cancelSignal = m().CancelToken.source();
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
              ? mt
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
          this.setState({ dialogState: "error", ...(0, ct.H)(e) });
        }
        OnDeleteForumTopicFailureCallback(e) {
          this.setState({
            dialogState: "failed_thread_delete",
            ...(0, ct.H)(e),
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
            i != o.kFb
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
              let n = e.GetNameWithFallback((0, o.sfN)(lt.TS.LANGUAGE)),
                a = e.BIsVisibleEvent()
                  ? "#EventDisplay_AreYouSure_Visible"
                  : "#EventDisplay_AreYouSure";
              (r = (0, it.we)(a, n)),
                (t = this.OnDelete),
                e.BHasForumTopicGID() &&
                  i.push(
                    (0, s.jsxs)(
                      "div",
                      {
                        className: st().Padding,
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
                            children: (0, it.we)(
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
              (r = (0, it.we)("#EventDisplay_DeleteEvent_InProgress")),
                i.push((0, s.jsx)(ot.t, {}, "throbber"));
              break;
            case "error":
              (r = (0, it.we)("#EventDisplay_DeleteEvent_Error")),
                i.push(
                  (0, s.jsx)(
                    "div",
                    {
                      className: st().ErrorStyles,
                      children: this.state.strErrorMsg,
                    },
                    "deleteerror_" + ++ut.m_uniqueError,
                  ),
                );
              break;
            case "failed_thread_delete":
              (r = (0, it.we)("#EventDisplay_DeleteEvent_ForumTopicError")),
                i.push(
                  (0, s.jsx)(
                    "div",
                    {
                      className: st().ErrorStyles,
                      children: this.state.strErrorMsg,
                    },
                    "deleteerror_" + ++ut.m_uniqueError,
                  ),
                ),
                this.props.onDeleteSuccessAndCloseDialog &&
                  (t = () => {
                    this.props.onDeleteSuccessAndCloseDialog(),
                      this.props.closeModal();
                  });
              break;
            case "success":
              (r = (0, it.we)("#EventDisplay_DeleteEvent_Success")),
                this.props.onDeleteSuccessAndCloseDialog &&
                  (t = () => {
                    this.props.onDeleteSuccessAndCloseDialog(),
                      this.props.closeModal();
                  });
          }
          return (0, s.jsx)(rt.o0, {
            strTitle: (0, it.we)("#EventDisplay_DeleteEvent"),
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
      (0, tt.Cg)([nt.oI], ut.prototype, "OnDeleteEventSuccessCallback", null),
        (0, tt.Cg)(
          [nt.oI],
          ut.prototype,
          "OnDeleteForumTopicSuccessCallback",
          null,
        ),
        (0, tt.Cg)([nt.oI], ut.prototype, "OnDeleteEventFailureCallback", null),
        (0, tt.Cg)(
          [nt.oI],
          ut.prototype,
          "OnDeleteForumTopicFailureCallback",
          null,
        ),
        (0, tt.Cg)([nt.oI], ut.prototype, "SetToWaiting", null),
        (0, tt.Cg)([nt.oI], ut.prototype, "OnDelete", null),
        (0, tt.Cg)([nt.oI], ut.prototype, "OnChangeDeleteForum", null);
      var dt = r(32803),
        gt = r(60860),
        Bt = r(95695),
        _t = r(738),
        bt = r(52038),
        pt = r(56011),
        yt = r(64846),
        Mt = r(14947),
        wt = r(1501),
        ft = r(35400),
        zt = r(36735),
        St = r(90316);
      function ht(e) {
        const { eventModel: t } = e,
          r = (0, u.q3)(() => t.jsondata.sale_sections);
        return (0, d.useMemo)(
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
          ? (0, s.jsx)(vt, { ...e })
          : null;
      }
      const Rt = "Answered as: ";
      function vt(e) {
        const { eventModel: t } = e,
          [r, i] = (0, d.useState)(!1),
          n = (0, ft.Tn)();
        if (
          ((0, d.useEffect)(() => {
            ft.hH
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
                label: Rt + e.category_name,
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
          const e = ft.hH.Get().GetMaxDoor();
          for (let t = -1; t <= e; ++t)
            o.push({ label: "Doors Opened " + (t + 1), data: t });
        }
        const c = t.GetSaleSectionsByType("rewards"),
          m = c?.length > 0 ? c[0] : null;
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)("a", {
              className: (0, bt.A)(Bt.Button, St.AdminButton),
              onClick: (e) => {
                (0, _t.pg)(
                  (0, s.jsx)(rt.o0, {
                    strTitle: (0, it.we)("#Dialog_AreYouSure"),
                    strDescription:
                      "Reload page after you hit OK; will not grant virtual reward items a second itme",
                    onOK: () => ft.hH.Get().CloseAllDoors(lt.UF.CLANACCOUNTID),
                  }),
                  (0, pt.uX)(e),
                );
              },
              children: "Reset All Doors",
            }),
            (0, s.jsx)(Qe.m, {
              strDropDownClassName: (0, bt.A)(Bt.DropDownScroll),
              rgOptions: o,
              selectedOption: n,
              label: "Minigame States:",
              onChange: (e) => {
                const t = new Array();
                if (l)
                  (0, Mt.h5)(() => {
                    if (
                      ((0, ft.Sp)(-1),
                      wt.N.Get().ClearAnswersAndCategories(),
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
                              wt.N.Get().SetAnswerCategory(
                                t,
                                e.answers[i].category_ids,
                              ),
                              wt.N.Get().SetAnswer(t, e.answers[i]);
                          }),
                        e.label.toString().startsWith(Rt) ||
                          ((0, ft.my)(0, !0),
                          (0, ft.my)(e.data, !0),
                          t.push(0),
                          t.push(e.data));
                    }
                  });
                else {
                  for (let r = 0; r <= e.data; ++r) t.push(r);
                  (0, ft.Sp)(e.data);
                }
                if (
                  m &&
                  m.rewards?.reward_items?.length > 0 &&
                  e.data > -1 &&
                  !e.label.toString().startsWith(Rt)
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
                        })(m, e),
                      )
                      .filter(Boolean),
                    r = new Array();
                  e.forEach((e) => r.push(...e)),
                    (0, zt.l5)(m.rewards?.reward_items[0].appid, r);
                }
              },
            }),
          ],
        });
      }
      var jt = r(95034),
        Ft = r(12155),
        Pt = r(32754),
        Wt = r(77021),
        qt = r(67165),
        Tt = r(27939);
      function Ot(e) {
        const {
            eventModel: t,
            partnerEventStore: r,
            addtionalAdminButtons: i,
            fnOnUpdateSaleDayIndex: n,
            bSupportsSticky: a = !1,
          } = e,
          l = (0, lt.Qn)(),
          c = (0, gt.MU)(),
          [m, B] = d.useState(!1),
          _ = (0, u.q3)(() =>
            (function (e) {
              let t;
              e?.BHasSaleEnabled() &&
                (e.GetSaleSectionCount() > 0 &&
                  e.GetSaleSections().forEach((e) => {
                    (0, g.ye)(e.section_type) &&
                      !(0, g.CU)(e) &&
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
          [b, p] = d.useState(t ? t.GetDayIndexFromEventStart() : 0),
          [y, M, w, f] = (0, u.q3)(() => [
            t.visibility_state,
            t.jsondata.bSaleEnabled,
            t.GID,
            t.clanSteamID.GetAccountID(),
          ]),
          z = (0, Ze.Ec)(f),
          [S, h] = d.useState(a),
          { bVisible: R, ref: v } = (0, nt.hd)(),
          j = (e) => {
            (0, _t.pg)(
              (0, s.jsx)(ut, {
                eventModel: t,
                onDeleteSuccessAndCloseDialog: () => B(!0),
                partnerEventStore: r,
              }),
              (0, pt.uX)(e),
            );
          },
          F = (0, Wt.ty)(),
          { creatorHome: P } = (0, qt.FV)(f);
        if (m)
          return (0, s.jsx)(dt.OG, {
            eventModel: t,
            route: dt.PH.k_eCommunityAdminPage,
          });
        if ((z.can_edit || z.support_user) && !l && !F) {
          const e = [];
          if (void 0 !== _)
            for (let t = 0; t <= _; ++t)
              e.push({
                label: (0, it.we)("#SalePage_Admin_SaleEventDay", t + 1),
                data: t,
              });
          const l = (0, lt.yK)(),
            m = "community" == l,
            u = "store" == l,
            B = lt.iA.is_support && (0, yt.m)(t.clanSteamID, !0),
            z = S && !R,
            F = t.GetEventType() == o.ajI,
            W = F && P?.GetLinkedEventGID() == t.GID,
            q =
              (y == g.zv.k_EEventStateVisible ||
                y == g.zv.k_EEventStateUnlisted) &&
              (!F || W),
            T = y == g.zv.k_EEventStateStaged;
          return (0, s.jsxs)(et.tH, {
            children: [
              (0, s.jsx)("div", {
                className: (0, bt.A)(
                  St.DisplayAdminPanel_TopSpacer,
                  z && St.Sticky,
                ),
              }),
              (0, s.jsxs)("div", {
                className: (0, bt.A)({
                  [St.DisplayAdminPanel]: !0,
                  [St.Locked]: m,
                  [St.Sticky]: z,
                }),
                children: [
                  (0, s.jsx)("span", {
                    className: St.DisplayAdminPanel_Title,
                    children: (0, it.we)("#EventDisplay_Admin_Title"),
                  }),
                  (0, s.jsxs)("div", {
                    className: (0, bt.A)(
                      St.DisplayAdminPanel_ctn,
                      z && St.Sticky,
                    ),
                    children: [
                      i,
                      i &&
                        (0, s.jsx)("span", {
                          className: St.DisplayAdminPanel_Spacer,
                          children: " ",
                        }),
                      (0, s.jsx)(dt.tj, {
                        eventModel: t,
                        route: dt.PH.k_eCommunityEdit,
                        className: (0, bt.A)(Bt.Button, St.AdminButton),
                        children: F
                          ? (0, it.we)("#EventEditor_Edit_Page")
                          : (0, it.we)("#EventEditor_Edit"),
                      }),
                      Boolean(r && "community" == (0, lt.yK)()) &&
                        (0, s.jsx)("span", {
                          className: Bt.Button + " " + St.AdminButton,
                          onClick: j,
                          children: (0, it.we)("#EventDisplay_DeleteEvent"),
                        }),
                      !q &&
                        (0, s.jsx)(d.Fragment, {
                          children: (0, s.jsx)(dt.tj, {
                            eventModel: t,
                            route: dt.PH.k_eCommunityPublish,
                            className: (0, bt.A)(Bt.Button, St.AdminButton),
                            children: (0, it.we)(
                              T
                                ? "#EventEditor_Publish_VisibleNow"
                                : "#Button_Publish",
                            ),
                          }),
                        }),
                      (0, s.jsx)(dt.tj, {
                        eventModel: t,
                        route: dt.PH.k_eCommunityAdminPage,
                        className: (0, bt.A)(Bt.Button, St.AdminButton),
                        children: (0, it.we)("#EventDisplay_Events"),
                      }),
                      Boolean(void 0 !== _ && e.length > 0) &&
                        (0, s.jsx)(Qe.m, {
                          strDropDownClassName: Bt.DropDownScroll,
                          rgOptions: e,
                          selectedOption: Math.min(_, b),
                          onChange: (e) => {
                            p(e.data), n(e.data);
                          },
                          bDisableMouseOverlay: !0,
                          contextMenuPositionOptions: {
                            bDisableMouseOverlay: !0,
                          },
                        }),
                      Boolean(t.jsondata.bSaleEnabled && c && !F) &&
                        (0, s.jsx)(dt.tj, {
                          eventModel: t,
                          route: dt.PH.k_eStoreSalePage,
                          className: (0, bt.A)(Bt.Button, St.AdminButton),
                          children: (0, it.we)("#EventDisplay_SalesPage"),
                        }),
                      Boolean(M && lt.iA.is_support && w) &&
                        (0, s.jsx)("a", {
                          href:
                            lt.TS.STATS_BASE_URL +
                            "sales/details/?gid=" +
                            w +
                            "&clanid=" +
                            f,
                          target: lt.TS.IN_CLIENT ? "" : "_blank",
                          className: (0, bt.A)(
                            Bt.Button,
                            St.AdminButton,
                            Bt.ValveOnlyBackground,
                          ),
                          children: (0, it.we)("#EventDisplay_StatsPage"),
                        }),
                      Boolean(M && lt.iA.is_support && w && !F) &&
                        (0, s.jsx)("a", {
                          href:
                            lt.TS.PARTNER_BASE_URL +
                            "promotion/invitationplanner/dashboard?saleclaneventgid=" +
                            w +
                            "&saleclanaccountid=" +
                            f,
                          target: lt.TS.IN_CLIENT ? "" : "_blank",
                          className: (0, bt.A)(
                            Bt.Button,
                            St.AdminButton,
                            Bt.ValveOnlyBackground,
                          ),
                          children: (0, it.we)(
                            "#EventDisplay_InvitationPlannerPage",
                          ),
                        }),
                      Boolean(M && B && w) &&
                        (0, s.jsx)(xt, {
                          clanAccountID: t.clanSteamID.GetAccountID(),
                          gidClanEvent: w,
                        }),
                      Boolean(
                        M && B && Tt.bv == f && t.GetContentHubCategory(),
                      ) &&
                        (0, s.jsx)("a", {
                          href: `${lt.TS.PARTNER_BASE_URL}admin/store/contenthub/categories?edit=${t.GetContentHubCategory()}`,
                          target: lt.TS.IN_CLIENT ? "" : "_blank",
                          className: (0, bt.A)(
                            Bt.Button,
                            St.AdminButton,
                            Bt.ValveOnlyBackground,
                          ),
                          children: (0, it.we)("#EventDisplay_CategoryEditor"),
                        }),
                      Boolean(q && (u || (c && !m))) &&
                        (0, s.jsx)(dt.tj, {
                          eventModel: t,
                          route: M
                            ? dt.PH.k_eCommunityPreviewSale
                            : dt.PH.k_eCommunityView,
                          className: (0, bt.A)(Bt.Button, St.AdminButton),
                          children: (0, it.we)(
                            M
                              ? "#EventDisplay_PreviewOnCommunity"
                              : "#EventDisplay_ViewOnCommunity",
                          ),
                        }),
                      Boolean(q && m) &&
                        (0, s.jsx)(dt.tj, {
                          eventModel: t,
                          route: dt.PH.k_eStoreView,
                          className: (0, bt.A)(Bt.Button, St.AdminButton),
                          children: (0, it.we)("#EventDisplay_ViewOnStore"),
                        }),
                      (0, s.jsx)(ht, { eventModel: t }),
                      (0, s.jsx)(Ut, { eventModel: t }),
                      Boolean(lt.iA.is_support) &&
                        (0, s.jsx)(It, { eventModel: t }),
                      z &&
                        (0, s.jsx)("div", {
                          className: St.DisplayAdminPanelClose,
                          onClick: () => h(!1),
                          children: (0, s.jsx)(Pt.Gq, {
                            toolTipContent: (0, it.we)(
                              "#EventDisplay_Admin_Close_ttip",
                            ),
                            children: (0, s.jsx)(Ft.X, {}),
                          }),
                        }),
                      !S &&
                        a &&
                        (0, s.jsx)("div", {
                          className: St.DisplayAdminPanelClose,
                          onClick: () => h(!0),
                          children: (0, s.jsx)(Pt.Gq, {
                            toolTipContent: (0, it.we)(
                              "#EventDisplay_Admin_Reopen_ttip",
                            ),
                            children: (0, s.jsx)(Ft.i3G, { angle: 0 }),
                          }),
                        }),
                    ],
                  }),
                ],
              }),
              (0, s.jsx)("div", {
                className: St.DisplayAdminPanelMarker,
                ref: v,
              }),
            ],
          });
        }
        return (0, s.jsx)("span", {});
      }
      function It(e) {
        const { eventModel: t } = e,
          r = (0, $e.Fb)(),
          [i] = (0, jt.QD)(B.jD, void 0);
        return Boolean(
          r &&
            t.jsondata?.bSaleEnabled &&
            t.jsondata?.sale_sections?.length > 0,
        )
          ? (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)("a", {
                  className: (0, bt.A)(
                    Bt.Button,
                    St.AdminButton,
                    Bt.ValveOnlyBackground,
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
                      (0, $e.Jz)(e) &&
                        a.push({
                          ...r,
                          insertion_requirement: null,
                          sectionID: e.unique_id,
                          tabID: n,
                          insertionIndex: 0,
                          force_preview_mode: !0,
                        });
                    }),
                      (0, $e.YH)(a);
                  },
                  children: "(VO) Inject Capsule",
                }),
                (0, s.jsx)("a", {
                  className: (0, bt.A)(
                    Bt.Button,
                    St.AdminButton,
                    Bt.ValveOnlyBackground,
                  ),
                  onClick: (e) =>
                    (0, _t.pg)(
                      (0, s.jsx)(rt.o0, {
                        strTitle: "Clear Rewards for Summer 2022",
                        onOK: async () => {
                          const e = new FormData();
                          e.append("sessionid", lt.TS.SESSIONID),
                            e.append(
                              "clan_accountid",
                              "" + lt.UF.CLANACCOUNTID,
                            ),
                            e.append("event_id", "" + l.LH.BP);
                          const t = await m().post(
                            `${lt.TS.STORE_BASE_URL}saleaction/ajaxgresetopendoorrewards`,
                            e,
                            { withCredentials: !0 },
                          );
                          console.log("ajaxgresetopendoorrewards", t);
                        },
                      }),
                      (0, pt.uX)(e),
                    ),
                  children: "( VO ) Clear Summer 2022 Rewards",
                }),
              ],
            })
          : null;
      }
      function Ut(e) {
        const { eventModel: t } = e,
          r = (0, u.q3)(() => t.jsondata.sale_sections),
          i = (0, d.useMemo)(
            () => r?.find((e) => "badge_progress" == e.section_type),
            [r],
          );
        return i?.badge_progress?.levels?.length > 0 && lt.iA.is_support
          ? (0, s.jsx)(Ct, { section: i })
          : null;
      }
      function Ct(e) {
        const { section: t } = e,
          r = (0, _.fy)(t.badge_progress?.event_badgeid),
          i = (0, u.q3)(() => t.badge_progress.levels),
          n = Math.max(...i.map((e) => e.level));
        if (!r) return null;
        const a = [];
        for (let e = 0; e <= n; ++e) a.push({ label: "Level " + e, data: e });
        return (0, s.jsx)(Qe.m, {
          strDropDownClassName: (0, bt.A)(
            Bt.DropDownScroll,
            Bt.ValveOnlyBackground,
          ),
          rgOptions: a,
          selectedOption: r.level,
          onChange: (e) =>
            (0, _.Du)({
              badgeid: t.badge_progress?.event_badgeid,
              level: e.data,
            }),
        });
      }
      function xt(e) {
        const { clanAccountID: t, gidClanEvent: r } = e,
          i = Xe(t, r);
        return i
          ? (0, s.jsx)(s.Fragment, {
              children: i.map((e) =>
                (0, s.jsx)(
                  "a",
                  {
                    href: `${lt.TS.PARTNER_BASE_URL}promotion/planning/edit/${e}`,
                    target: lt.TS.IN_CLIENT ? "" : "_blank",
                    className: (0, bt.A)(
                      Bt.Button,
                      St.AdminButton,
                      Bt.ValveOnlyBackground,
                    ),
                    children: (0, it.we)("#EventDisplay_PromotionEditor"),
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
        n = r(82429),
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
