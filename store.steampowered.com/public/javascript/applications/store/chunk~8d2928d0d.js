/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [33615],
    {
      24808: (xt, De, f) => {
        f.d(De, { g: () => jt });
        var b = f(7850),
          We = f(99412),
          ue = f(65946),
          Rr = f(90626),
          ze = f(73259),
          Ve = f(35702),
          ke = f(72604),
          ve = f(71742),
          y = f(35038),
          a = f(80613),
          i = f.n(a),
          e = f(75245);
        function Ut(B) {
          return "unknown EPromoPlanAssociationType ( " + B + " )";
        }
        function gt(B) {
          return "unknown EPromotionNotification ( " + B + " )";
        }
        function mt(B) {
          return "unknown EPromotionEventInviteType ( " + B + " )";
        }
        class z extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              z.prototype.promotion_id || e.Sg(z.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
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
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    admin_jsondata: {
                      n: 2,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    partner_jsondata: {
                      n: 3,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    input_jsondata: {
                      n: 4,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    partner_readonly_jsondata: {
                      n: 10,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    partner_writable_jsondata: {
                      n: 11,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    assets_readonly_jsondata: {
                      n: 12,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    assets_writable_jsondata: {
                      n: 13,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    rtime32_start_time: {
                      n: 5,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    rtime32_end_time: {
                      n: 6,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    partner_id: {
                      n: 7,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    input_access_key: {
                      n: 8,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    last_update_time: {
                      n: 9,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                  },
                }),
              z.sm_m
            );
          }
          static MBF() {
            return z.sm_mbf || (z.sm_mbf = e.w0(z.M())), z.sm_mbf;
          }
          toObject(r = !1) {
            return z.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(z.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(z.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new z();
            return z.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(z.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return z.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(z.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              z.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlan";
          }
        }
        class g extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              g.prototype.plan || e.Sg(g.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              g.sm_m ||
                (g.sm_m = { proto: g, fields: { plan: { n: 1, c: z } } }),
              g.sm_m
            );
          }
          static MBF() {
            return g.sm_mbf || (g.sm_mbf = e.w0(g.M())), g.sm_mbf;
          }
          toObject(r = !1) {
            return g.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(g.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(g.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new g();
            return g.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(g.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return g.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(g.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              g.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_CreatePlan_Request";
          }
        }
        class m extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              m.prototype.promotion_id || e.Sg(m.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              m.sm_m ||
                (m.sm_m = {
                  proto: m,
                  fields: {
                    promotion_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    input_access_key: {
                      n: 2,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                  },
                }),
              m.sm_m
            );
          }
          static MBF() {
            return m.sm_mbf || (m.sm_mbf = e.w0(m.M())), m.sm_mbf;
          }
          toObject(r = !1) {
            return m.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(m.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(m.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new m();
            return m.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(m.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return m.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(m.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              m.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_CreatePlan_Response";
          }
        }
        class O extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              O.prototype.plan || e.Sg(O.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              O.sm_m ||
                (O.sm_m = {
                  proto: O,
                  fields: {
                    plan: { n: 1, c: z },
                    promotion_id: {
                      n: 2,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                  },
                }),
              O.sm_m
            );
          }
          static MBF() {
            return O.sm_mbf || (O.sm_mbf = e.w0(O.M())), O.sm_mbf;
          }
          toObject(r = !1) {
            return O.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(O.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(O.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new O();
            return O.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(O.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return O.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(O.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              O.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_UpdatePlan_Request";
          }
        }
        class pr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return pr.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new pr();
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new pr();
            return pr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return pr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              pr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_UpdatePlan_Response";
          }
        }
        class k extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              k.prototype.promotion_id || e.Sg(k.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              k.sm_m ||
                (k.sm_m = {
                  proto: k,
                  fields: {
                    promotion_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                  },
                }),
              k.sm_m
            );
          }
          static MBF() {
            return k.sm_mbf || (k.sm_mbf = e.w0(k.M())), k.sm_mbf;
          }
          toObject(r = !1) {
            return k.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(k.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(k.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new k();
            return k.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(k.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return k.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(k.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              k.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_GetPlan_Request";
          }
        }
        class $ extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              $.prototype.plan || e.Sg($.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $.sm_m ||
                ($.sm_m = { proto: $, fields: { plan: { n: 1, c: z } } }),
              $.sm_m
            );
          }
          static MBF() {
            return $.sm_mbf || ($.sm_mbf = e.w0($.M())), $.sm_mbf;
          }
          toObject(r = !1) {
            return $.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT($.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq($.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new $();
            return $.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj($.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return $.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0($.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              $.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_GetPlan_Response";
          }
        }
        class nr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return nr.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new nr();
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new nr();
            return nr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return nr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              nr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_GetAllActivePlan_Request";
          }
        }
        class L extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              L.prototype.plan || e.Sg(L.M()),
              a.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              L.sm_m ||
                (L.sm_m = {
                  proto: L,
                  fields: { plan: { n: 1, c: z, r: !0, q: !0 } },
                }),
              L.sm_m
            );
          }
          static MBF() {
            return L.sm_mbf || (L.sm_mbf = e.w0(L.M())), L.sm_mbf;
          }
          toObject(r = !1) {
            return L.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(L.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(L.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new L();
            return L.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(L.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return L.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(L.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              L.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_GetAllActivePlan_Response";
          }
        }
        class Q extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Q.prototype.oldest_rtime || e.Sg(Q.M()),
              a.Message.initialize(this, r, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Q.sm_m ||
                (Q.sm_m = {
                  proto: Q,
                  fields: {
                    oldest_rtime: {
                      n: 1,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    newest_rtime: {
                      n: 2,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    promotion_types: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: e.qM.readString,
                      bw: e.gp.writeRepeatedString,
                    },
                  },
                }),
              Q.sm_m
            );
          }
          static MBF() {
            return Q.sm_mbf || (Q.sm_mbf = e.w0(Q.M())), Q.sm_mbf;
          }
          toObject(r = !1) {
            return Q.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(Q.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(Q.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new Q();
            return Q.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(Q.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return Q.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(Q.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              Q.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_GetPlanCompletedInDateRange_Request";
          }
        }
        class X extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              X.prototype.plans || e.Sg(X.M()),
              a.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              X.sm_m ||
                (X.sm_m = {
                  proto: X,
                  fields: { plans: { n: 1, c: z, r: !0, q: !0 } },
                }),
              X.sm_m
            );
          }
          static MBF() {
            return X.sm_mbf || (X.sm_mbf = e.w0(X.M())), X.sm_mbf;
          }
          toObject(r = !1) {
            return X.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(X.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(X.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new X();
            return X.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(X.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return X.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(X.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              X.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_GetPlanCompletedInDateRange_Response";
          }
        }
        class F extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              F.prototype.type || e.Sg(F.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              F.sm_m ||
                (F.sm_m = {
                  proto: F,
                  fields: {
                    type: { n: 1, br: e.qM.readEnum, bw: e.gp.writeEnum },
                    gid: {
                      n: 2,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    promotion_planid: {
                      n: 3,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                  },
                }),
              F.sm_m
            );
          }
          static MBF() {
            return F.sm_mbf || (F.sm_mbf = e.w0(F.M())), F.sm_mbf;
          }
          toObject(r = !1) {
            return F.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(F.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(F.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new F();
            return F.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(F.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return F.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(F.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              F.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromoAssociation";
          }
        }
        class Y extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Y.prototype.requested || e.Sg(Y.M()),
              a.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Y.sm_m ||
                (Y.sm_m = {
                  proto: Y,
                  fields: { requested: { n: 1, c: F, r: !0, q: !0 } },
                }),
              Y.sm_m
            );
          }
          static MBF() {
            return Y.sm_mbf || (Y.sm_mbf = e.w0(Y.M())), Y.sm_mbf;
          }
          toObject(r = !1) {
            return Y.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(Y.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(Y.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new Y();
            return Y.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(Y.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return Y.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(Y.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              Y.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_GetPlanByAssociationID_Request";
          }
        }
        class J extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              J.prototype.matching || e.Sg(J.M()),
              a.Message.initialize(this, r, 0, -1, [1, 2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              J.sm_m ||
                (J.sm_m = {
                  proto: J,
                  fields: {
                    matching: { n: 1, c: F, r: !0, q: !0 },
                    plans: { n: 2, c: z, r: !0, q: !0 },
                  },
                }),
              J.sm_m
            );
          }
          static MBF() {
            return J.sm_mbf || (J.sm_mbf = e.w0(J.M())), J.sm_mbf;
          }
          toObject(r = !1) {
            return J.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(J.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(J.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new J();
            return J.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(J.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return J.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(J.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              J.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_GetPlanByAssociationID_Response";
          }
        }
        class Z extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Z.prototype.rtime || e.Sg(Z.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Z.sm_m ||
                (Z.sm_m = {
                  proto: Z,
                  fields: {
                    rtime: { n: 1, br: e.qM.readUint32, bw: e.gp.writeUint32 },
                    upto_rtime: {
                      n: 2,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                  },
                }),
              Z.sm_m
            );
          }
          static MBF() {
            return Z.sm_mbf || (Z.sm_mbf = e.w0(Z.M())), Z.sm_mbf;
          }
          toObject(r = !1) {
            return Z.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(Z.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(Z.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new Z();
            return Z.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(Z.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return Z.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(Z.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              Z.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_GetPlansUpdatedSince_Request";
          }
        }
        class K extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              K.prototype.plans || e.Sg(K.M()),
              a.Message.initialize(this, r, 0, -1, [1, 2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              K.sm_m ||
                (K.sm_m = {
                  proto: K,
                  fields: {
                    plans: { n: 1, c: z, r: !0, q: !0 },
                    deleted_plan_ids: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: e.qM.readFixed64String,
                      pbr: e.qM.readPackedFixed64String,
                      bw: e.gp.writeRepeatedFixed64String,
                    },
                  },
                }),
              K.sm_m
            );
          }
          static MBF() {
            return K.sm_mbf || (K.sm_mbf = e.w0(K.M())), K.sm_mbf;
          }
          toObject(r = !1) {
            return K.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(K.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(K.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new K();
            return K.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(K.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return K.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(K.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              K.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_GetPlansUpdatedSince_Response";
          }
        }
        class S extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              S.prototype.promotion_id || e.Sg(S.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              S.sm_m ||
                (S.sm_m = {
                  proto: S,
                  fields: {
                    promotion_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                  },
                }),
              S.sm_m
            );
          }
          static MBF() {
            return S.sm_mbf || (S.sm_mbf = e.w0(S.M())), S.sm_mbf;
          }
          toObject(r = !1) {
            return S.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(S.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(S.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new S();
            return S.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(S.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return S.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(S.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              S.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_DeletePlan_Request";
          }
        }
        class _r extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return _r.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new _r();
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new _r();
            return _r.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return _r.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              _r.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_DeletePlan_Response";
          }
        }
        class E extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              E.prototype.token || e.Sg(E.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              E.sm_m ||
                (E.sm_m = {
                  proto: E,
                  fields: {
                    token: { n: 1, br: e.qM.readString, bw: e.gp.writeString },
                  },
                }),
              E.sm_m
            );
          }
          static MBF() {
            return E.sm_mbf || (E.sm_mbf = e.w0(E.M())), E.sm_mbf;
          }
          toObject(r = !1) {
            return E.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(E.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(E.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new E();
            return E.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(E.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return E.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(E.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              E.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_SearchPlan_Request";
          }
        }
        class D extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              D.prototype.plan || e.Sg(D.M()),
              a.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              D.sm_m ||
                (D.sm_m = {
                  proto: D,
                  fields: { plan: { n: 1, c: z, r: !0, q: !0 } },
                }),
              D.sm_m
            );
          }
          static MBF() {
            return D.sm_mbf || (D.sm_mbf = e.w0(D.M())), D.sm_mbf;
          }
          toObject(r = !1) {
            return D.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(D.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(D.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new D();
            return D.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(D.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return D.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(D.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              D.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_SearchPlan_Response";
          }
        }
        class v extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              v.prototype.appids || e.Sg(v.M()),
              a.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              v.sm_m ||
                (v.sm_m = {
                  proto: v,
                  fields: {
                    appids: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: e.qM.readUint32,
                      pbr: e.qM.readPackedUint32,
                      bw: e.gp.writeRepeatedUint32,
                    },
                    exclude_sales: {
                      n: 2,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                    exclude_direct_featuring: {
                      n: 3,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                  },
                }),
              v.sm_m
            );
          }
          static MBF() {
            return v.sm_mbf || (v.sm_mbf = e.w0(v.M())), v.sm_mbf;
          }
          toObject(r = !1) {
            return v.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(v.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(v.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new v();
            return v.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(v.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return v.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(v.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              v.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_GetAllPlansForApps_Request";
          }
        }
        class q extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              q.prototype.plans || e.Sg(q.M()),
              a.Message.initialize(this, r, 0, -1, [1, 2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              q.sm_m ||
                (q.sm_m = {
                  proto: q,
                  fields: {
                    plans: { n: 1, c: z, r: !0, q: !0 },
                    apps_included_in_sales: { n: 2, c: I, r: !0, q: !0 },
                  },
                }),
              q.sm_m
            );
          }
          static MBF() {
            return q.sm_mbf || (q.sm_mbf = e.w0(q.M())), q.sm_mbf;
          }
          toObject(r = !1) {
            return q.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(q.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(q.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new q();
            return q.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(q.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return q.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(q.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              q.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_GetAllPlansForApps_Response";
          }
        }
        class I extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              I.prototype.appids || e.Sg(I.M()),
              a.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
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
                      br: e.qM.readUint32,
                      pbr: e.qM.readPackedUint32,
                      bw: e.gp.writeRepeatedUint32,
                    },
                    clan_event_gid: {
                      n: 2,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                  },
                }),
              I.sm_m
            );
          }
          static MBF() {
            return I.sm_mbf || (I.sm_mbf = e.w0(I.M())), I.sm_mbf;
          }
          toObject(r = !1) {
            return I.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(I.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(I.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new I();
            return I.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(I.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return I.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(I.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              I.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_GetAllPlansForApps_Response_CAppIncludedInSales";
          }
        }
        class p extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              p.prototype.partnerid || e.Sg(p.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              p.sm_m ||
                (p.sm_m = {
                  proto: p,
                  fields: {
                    partnerid: {
                      n: 1,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    start_date: {
                      n: 5,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    end_date: {
                      n: 6,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    show_hidden: {
                      n: 4,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                  },
                }),
              p.sm_m
            );
          }
          static MBF() {
            return p.sm_mbf || (p.sm_mbf = e.w0(p.M())), p.sm_mbf;
          }
          toObject(r = !1) {
            return p.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(p.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(p.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new p();
            return p.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(p.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return p.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(p.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              p.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_GetAllPlansForPartner_Request";
          }
        }
        class A extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              A.prototype.plans || e.Sg(A.M()),
              a.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              A.sm_m ||
                (A.sm_m = {
                  proto: A,
                  fields: { plans: { n: 1, c: z, r: !0, q: !0 } },
                }),
              A.sm_m
            );
          }
          static MBF() {
            return A.sm_mbf || (A.sm_mbf = e.w0(A.M())), A.sm_mbf;
          }
          toObject(r = !1) {
            return A.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(A.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(A.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new A();
            return A.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(A.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return A.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(A.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              A.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_GetAllPlansForPartner_Response";
          }
        }
        class G extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              G.prototype.input_access_key || e.Sg(G.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
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
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                  },
                }),
              G.sm_m
            );
          }
          static MBF() {
            return G.sm_mbf || (G.sm_mbf = e.w0(G.M())), G.sm_mbf;
          }
          toObject(r = !1) {
            return G.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(G.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(G.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new G();
            return G.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(G.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return G.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(G.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              G.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_GetPlanByInputAccessKey_Request";
          }
        }
        class R extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              R.prototype.plan || e.Sg(R.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              R.sm_m ||
                (R.sm_m = { proto: R, fields: { plan: { n: 1, c: z } } }),
              R.sm_m
            );
          }
          static MBF() {
            return R.sm_mbf || (R.sm_mbf = e.w0(R.M())), R.sm_mbf;
          }
          toObject(r = !1) {
            return R.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(R.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(R.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new R();
            return R.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(R.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return R.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(R.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              R.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_GetPlanByInputAccessKey_Response";
          }
        }
        class C extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              C.prototype.promotion_id || e.Sg(C.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
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
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    value: { n: 2, br: e.qM.readBool, bw: e.gp.writeBool },
                  },
                }),
              C.sm_m
            );
          }
          static MBF() {
            return C.sm_mbf || (C.sm_mbf = e.w0(C.M())), C.sm_mbf;
          }
          toObject(r = !1) {
            return C.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(C.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(C.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new C();
            return C.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(C.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return C.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(C.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              C.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_MarkLocalizationAssetComplete_Request";
          }
        }
        class Pr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Pr.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new Pr();
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new Pr();
            return Pr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return Pr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              Pr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_MarkLocalizationAssetComplete_Response";
          }
        }
        class n extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              n.prototype.promotion_id || e.Sg(n.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              n.sm_m ||
                (n.sm_m = {
                  proto: n,
                  fields: {
                    promotion_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    notification_type: {
                      n: 2,
                      br: e.qM.readEnum,
                      bw: e.gp.writeEnum,
                    },
                    only_explicit_email_addresses: {
                      n: 3,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                  },
                }),
              n.sm_m
            );
          }
          static MBF() {
            return n.sm_mbf || (n.sm_mbf = e.w0(n.M())), n.sm_mbf;
          }
          toObject(r = !1) {
            return n.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(n.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(n.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new n();
            return n.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(n.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return n.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(n.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              n.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_SendNotification_Request";
          }
        }
        class or extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return or.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new or();
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new or();
            return or.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return or.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              or.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_SendNotification_Response";
          }
        }
        class _ extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              _.prototype.promotion_id || e.Sg(_.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    promotion_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    notification_id: {
                      n: 2,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = e.w0(_.M())), _.sm_mbf;
          }
          toObject(r = !1) {
            return _.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(_.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(_.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new _();
            return _.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(_.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return _.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(_.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_GetSentNotification_Request";
          }
        }
        class P extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              P.prototype.results || e.Sg(P.M()),
              a.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              P.sm_m ||
                (P.sm_m = {
                  proto: P,
                  fields: { results: { n: 1, c: o, r: !0, q: !0 } },
                }),
              P.sm_m
            );
          }
          static MBF() {
            return P.sm_mbf || (P.sm_mbf = e.w0(P.M())), P.sm_mbf;
          }
          toObject(r = !1) {
            return P.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(P.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(P.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new P();
            return P.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(P.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return P.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(P.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              P.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_GetSentNotification_Response";
          }
        }
        class o extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              o.prototype.notification_id || e.Sg(o.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              o.sm_m ||
                (o.sm_m = {
                  proto: o,
                  fields: {
                    notification_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    tracking_id: {
                      n: 2,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    email_address: {
                      n: 3,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    accountid: {
                      n: 4,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    status: { n: 5, br: e.qM.readUint32, bw: e.gp.writeUint32 },
                    type: { n: 6, br: e.qM.readEnum, bw: e.gp.writeEnum },
                    rt_send_time: {
                      n: 7,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                  },
                }),
              o.sm_m
            );
          }
          static MBF() {
            return o.sm_mbf || (o.sm_mbf = e.w0(o.M())), o.sm_mbf;
          }
          toObject(r = !1) {
            return o.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(o.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(o.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new o();
            return o.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(o.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return o.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(o.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              o.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionNotificationResults";
          }
        }
        class rr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              rr.prototype.promotion_id || e.Sg(rr.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              rr.sm_m ||
                (rr.sm_m = {
                  proto: rr,
                  fields: {
                    promotion_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    notification_id: {
                      n: 2,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                  },
                }),
              rr.sm_m
            );
          }
          static MBF() {
            return rr.sm_mbf || (rr.sm_mbf = e.w0(rr.M())), rr.sm_mbf;
          }
          toObject(r = !1) {
            return rr.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(rr.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(rr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new rr();
            return rr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(rr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return rr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(rr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              rr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_ResendNotification_Request";
          }
        }
        class re extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return re.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new re();
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new re();
            return re.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return re.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              re.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_ResendNotification_Response";
          }
        }
        class er extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              er.prototype.promotion_id || e.Sg(er.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              er.sm_m ||
                (er.sm_m = {
                  proto: er,
                  fields: {
                    promotion_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    add: { n: 2, br: e.qM.readBool, bw: e.gp.writeBool },
                    email_address: {
                      n: 3,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                  },
                }),
              er.sm_m
            );
          }
          static MBF() {
            return er.sm_mbf || (er.sm_mbf = e.w0(er.M())), er.sm_mbf;
          }
          toObject(r = !1) {
            return er.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(er.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(er.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new er();
            return er.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(er.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return er.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(er.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              er.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_SetPromotionEmailTarget_Request";
          }
        }
        class ee extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return ee.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new ee();
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new ee();
            return ee.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return ee.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              ee.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_SetPromotionEmailTarget_Response";
          }
        }
        class tr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              tr.prototype.clan_account_id || e.Sg(tr.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              tr.sm_m ||
                (tr.sm_m = {
                  proto: tr,
                  fields: {
                    clan_account_id: {
                      n: 1,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    clan_event_gid: {
                      n: 2,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    rtime_sale_start: {
                      n: 3,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    rtime_sale_end: {
                      n: 4,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    daily_deal_gid: {
                      n: 5,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    promotion_gid: {
                      n: 6,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    create_asset_request: {
                      n: 7,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                    partner_id: {
                      n: 8,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    advertising_appid: {
                      n: 9,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                  },
                }),
              tr.sm_m
            );
          }
          static MBF() {
            return tr.sm_mbf || (tr.sm_mbf = e.w0(tr.M())), tr.sm_mbf;
          }
          toObject(r = !1) {
            return tr.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(tr.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(tr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new tr();
            return tr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(tr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return tr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(tr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              tr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlan_CreateSalePageForPromo_Request";
          }
        }
        class ir extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ir.prototype.clan_account_id || e.Sg(ir.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ir.sm_m ||
                (ir.sm_m = {
                  proto: ir,
                  fields: {
                    clan_account_id: {
                      n: 1,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    clan_event_gid: {
                      n: 2,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    daily_deal_gid: {
                      n: 3,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    promotion_gid: {
                      n: 4,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    asset_request_gid: {
                      n: 5,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    advertising_appid: {
                      n: 6,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                  },
                }),
              ir.sm_m
            );
          }
          static MBF() {
            return ir.sm_mbf || (ir.sm_mbf = e.w0(ir.M())), ir.sm_mbf;
          }
          toObject(r = !1) {
            return ir.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(ir.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(ir.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new ir();
            return ir.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(ir.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return ir.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(ir.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              ir.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlan_CreateSalePageForPromo_Response";
          }
        }
        class x extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              x.prototype.total_gross_sales_usdx100 || e.Sg(x.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              x.sm_m ||
                (x.sm_m = {
                  proto: x,
                  fields: {
                    total_gross_sales_usdx100: {
                      n: 1,
                      br: e.qM.readInt64String,
                      bw: e.gp.writeInt64String,
                    },
                    total_gross_returns_usdx100: {
                      n: 2,
                      br: e.qM.readInt64String,
                      bw: e.gp.writeInt64String,
                    },
                    total_net_tax_usdx100: {
                      n: 3,
                      br: e.qM.readInt64String,
                      bw: e.gp.writeInt64String,
                    },
                    steam_gross_sales_usdx100: {
                      n: 4,
                      br: e.qM.readInt64String,
                      bw: e.gp.writeInt64String,
                    },
                    steam_gross_returns_usdx100: {
                      n: 5,
                      br: e.qM.readInt64String,
                      bw: e.gp.writeInt64String,
                    },
                    steam_net_tax_usdx100: {
                      n: 6,
                      br: e.qM.readInt64String,
                      bw: e.gp.writeInt64String,
                    },
                    in_game_gross_sales_usdx100: {
                      n: 7,
                      br: e.qM.readInt64String,
                      bw: e.gp.writeInt64String,
                    },
                    in_game_gross_returns_usdx100: {
                      n: 8,
                      br: e.qM.readInt64String,
                      bw: e.gp.writeInt64String,
                    },
                    in_game_net_tax_usdx100: {
                      n: 9,
                      br: e.qM.readInt64String,
                      bw: e.gp.writeInt64String,
                    },
                    total_net_sales_usdx100: {
                      n: 10,
                      br: e.qM.readInt64String,
                      bw: e.gp.writeInt64String,
                    },
                    steam_net_sales_usdx100: {
                      n: 11,
                      br: e.qM.readInt64String,
                      bw: e.gp.writeInt64String,
                    },
                    in_game_net_sales_usdx100: {
                      n: 12,
                      br: e.qM.readInt64String,
                      bw: e.gp.writeInt64String,
                    },
                    steam_gross_units_sold: {
                      n: 13,
                      br: e.qM.readInt64String,
                      bw: e.gp.writeInt64String,
                    },
                    steam_gross_units_returned: {
                      n: 14,
                      br: e.qM.readInt64String,
                      bw: e.gp.writeInt64String,
                    },
                    gross_units_activated: {
                      n: 15,
                      br: e.qM.readInt64String,
                      bw: e.gp.writeInt64String,
                    },
                  },
                }),
              x.sm_m
            );
          }
          static MBF() {
            return x.sm_mbf || (x.sm_mbf = e.w0(x.M())), x.sm_mbf;
          }
          toObject(r = !1) {
            return x.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(x.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(x.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new x();
            return x.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(x.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return x.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(x.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              x.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlan_SummarySaleResult";
          }
        }
        class sr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              sr.prototype.promotionids || e.Sg(sr.M()),
              a.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              sr.sm_m ||
                (sr.sm_m = {
                  proto: sr,
                  fields: {
                    promotionids: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: e.qM.readUint64String,
                      pbr: e.qM.readPackedUint64String,
                      bw: e.gp.writeRepeatedUint64String,
                    },
                    partnerid: {
                      n: 2,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                  },
                }),
              sr.sm_m
            );
          }
          static MBF() {
            return sr.sm_mbf || (sr.sm_mbf = e.w0(sr.M())), sr.sm_mbf;
          }
          toObject(r = !1) {
            return sr.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(sr.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(sr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new sr();
            return sr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(sr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return sr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(sr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              sr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlan_GetPromotionPlanSalesDaily_Request";
          }
        }
        class ar extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ar.prototype.sales || e.Sg(ar.M()),
              a.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ar.sm_m ||
                (ar.sm_m = {
                  proto: ar,
                  fields: {
                    sales: { n: 1, c: cr, r: !0, q: !0 },
                    partial_access: {
                      n: 2,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                  },
                }),
              ar.sm_m
            );
          }
          static MBF() {
            return ar.sm_mbf || (ar.sm_mbf = e.w0(ar.M())), ar.sm_mbf;
          }
          toObject(r = !1) {
            return ar.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(ar.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(ar.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new ar();
            return ar.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(ar.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return ar.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(ar.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              ar.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlan_GetPromotionPlanSalesDaily_Response";
          }
        }
        class l extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              l.prototype.rtime_date || e.Sg(l.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              l.sm_m ||
                (l.sm_m = {
                  proto: l,
                  fields: {
                    rtime_date: {
                      n: 1,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    date: { n: 2, br: e.qM.readString, bw: e.gp.writeString },
                    summary_sales: { n: 3, c: x },
                  },
                }),
              l.sm_m
            );
          }
          static MBF() {
            return l.sm_mbf || (l.sm_mbf = e.w0(l.M())), l.sm_mbf;
          }
          toObject(r = !1) {
            return l.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(l.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(l.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new l();
            return l.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(l.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return l.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(l.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              l.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlan_GetPromotionPlanSalesDaily_Response_DailyPromotionSales";
          }
        }
        class Br extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Br.prototype.appid || e.Sg(Br.M()),
              a.Message.initialize(this, r, 0, -1, [5], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Br.sm_m ||
                (Br.sm_m = {
                  proto: Br,
                  fields: {
                    appid: { n: 1, br: e.qM.readUint32, bw: e.gp.writeUint32 },
                    packageid: {
                      n: 2,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    secondary_product_id: {
                      n: 3,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    summary_sales: { n: 4, c: x },
                    daily_promo_sales: { n: 5, c: l, r: !0, q: !0 },
                    package_billing_type: {
                      n: 6,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                  },
                }),
              Br.sm_m
            );
          }
          static MBF() {
            return Br.sm_mbf || (Br.sm_mbf = e.w0(Br.M())), Br.sm_mbf;
          }
          toObject(r = !1) {
            return Br.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(Br.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(Br.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new Br();
            return Br.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(Br.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return Br.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(Br.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              Br.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlan_GetPromotionPlanSalesDaily_Response_Product";
          }
        }
        class cr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              cr.prototype.promotionid || e.Sg(cr.M()),
              a.Message.initialize(this, r, 0, -1, [2, 4], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              cr.sm_m ||
                (cr.sm_m = {
                  proto: cr,
                  fields: {
                    promotionid: {
                      n: 1,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    daily_promo_sales: { n: 2, c: l, r: !0, q: !0 },
                    summary_sales: { n: 3, c: x },
                    products: { n: 4, c: Br, r: !0, q: !0 },
                    products_missing_user_rights: {
                      n: 5,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                  },
                }),
              cr.sm_m
            );
          }
          static MBF() {
            return cr.sm_mbf || (cr.sm_mbf = e.w0(cr.M())), cr.sm_mbf;
          }
          toObject(r = !1) {
            return cr.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(cr.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(cr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new cr();
            return cr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(cr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return cr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(cr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              cr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlan_GetPromotionPlanSalesDaily_Response_PromotionSaleData";
          }
        }
        class N extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              N.prototype.request_list || e.Sg(N.M()),
              a.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              N.sm_m ||
                (N.sm_m = {
                  proto: N,
                  fields: { request_list: { n: 1, c: H, r: !0, q: !0 } },
                }),
              N.sm_m
            );
          }
          static MBF() {
            return N.sm_mbf || (N.sm_mbf = e.w0(N.M())), N.sm_mbf;
          }
          toObject(r = !1) {
            return N.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(N.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(N.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new N();
            return N.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(N.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return N.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(N.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              N.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_GetPromotionPlanForSalePages_Request";
          }
        }
        class H extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              H.prototype.clan_account_id || e.Sg(H.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              H.sm_m ||
                (H.sm_m = {
                  proto: H,
                  fields: {
                    clan_account_id: {
                      n: 1,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    gid_clan_event: {
                      n: 2,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                  },
                }),
              H.sm_m
            );
          }
          static MBF() {
            return H.sm_mbf || (H.sm_mbf = e.w0(H.M())), H.sm_mbf;
          }
          toObject(r = !1) {
            return H.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(H.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(H.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new H();
            return H.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(H.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return H.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(H.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              H.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_GetPromotionPlanForSalePages_Request_CSalePage";
          }
        }
        class br extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              br.prototype.plans || e.Sg(br.M()),
              a.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              br.sm_m ||
                (br.sm_m = {
                  proto: br,
                  fields: { plans: { n: 1, c: z, r: !0, q: !0 } },
                }),
              br.sm_m
            );
          }
          static MBF() {
            return br.sm_mbf || (br.sm_mbf = e.w0(br.M())), br.sm_mbf;
          }
          toObject(r = !1) {
            return br.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(br.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(br.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new br();
            return br.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(br.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return br.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(br.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              br.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_GetPromotionPlanForSalePages_Response";
          }
        }
        class dr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              dr.prototype.rtstart || e.Sg(dr.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              dr.sm_m ||
                (dr.sm_m = {
                  proto: dr,
                  fields: {
                    rtstart: {
                      n: 1,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    rtend: { n: 2, br: e.qM.readUint32, bw: e.gp.writeUint32 },
                    include_packages: {
                      n: 3,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                    filter_modified_sales_rank: {
                      n: 4,
                      d: !0,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                  },
                }),
              dr.sm_m
            );
          }
          static MBF() {
            return dr.sm_mbf || (dr.sm_mbf = e.w0(dr.M())), dr.sm_mbf;
          }
          toObject(r = !1) {
            return dr.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(dr.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(dr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new dr();
            return dr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(dr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return dr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(dr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              dr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_GetUpcomingScheduledDiscounts_Request";
          }
        }
        class wr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              wr.prototype.package_details || e.Sg(wr.M()),
              a.Message.initialize(this, r, 0, -1, [1, 2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              wr.sm_m ||
                (wr.sm_m = {
                  proto: wr,
                  fields: {
                    package_details: { n: 1, c: ur, r: !0, q: !0 },
                    app_details: { n: 2, c: fr, r: !0, q: !0 },
                  },
                }),
              wr.sm_m
            );
          }
          static MBF() {
            return wr.sm_mbf || (wr.sm_mbf = e.w0(wr.M())), wr.sm_mbf;
          }
          toObject(r = !1) {
            return wr.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(wr.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(wr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new wr();
            return wr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(wr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return wr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(wr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              wr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_GetUpcomingScheduledDiscounts_Response";
          }
        }
        class ur extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ur.prototype.package_id || e.Sg(ur.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ur.sm_m ||
                (ur.sm_m = {
                  proto: ur,
                  fields: {
                    package_id: {
                      n: 1,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    discount_id: {
                      n: 2,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    discount_name: {
                      n: 3,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    discount_percentage: {
                      n: 4,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    original_price_usd: {
                      n: 5,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    discount_price_usd: {
                      n: 6,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    rtime_discount_start: {
                      n: 7,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    rtime_discount_end: {
                      n: 8,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                  },
                }),
              ur.sm_m
            );
          }
          static MBF() {
            return ur.sm_mbf || (ur.sm_mbf = e.w0(ur.M())), ur.sm_mbf;
          }
          toObject(r = !1) {
            return ur.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(ur.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(ur.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new ur();
            return ur.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(ur.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return ur.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(ur.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              ur.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_GetUpcomingScheduledDiscounts_Response_CUpcomingPackageDiscountInfo";
          }
        }
        class fr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              fr.prototype.appid || e.Sg(fr.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              fr.sm_m ||
                (fr.sm_m = {
                  proto: fr,
                  fields: {
                    appid: { n: 1, br: e.qM.readUint32, bw: e.gp.writeUint32 },
                    cheapest_package_id: {
                      n: 3,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    cheapest_discount_id: {
                      n: 4,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    cheapest_discount_name: {
                      n: 5,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    package_original_price_usd: {
                      n: 6,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    discounted_price_usd: {
                      n: 7,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    discount_percentage: {
                      n: 8,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    rtime_discount_start: {
                      n: 9,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    rtime_discount_end: {
                      n: 10,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    num_discounted_packages: {
                      n: 11,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    modified_sales_rank: {
                      n: 12,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                  },
                }),
              fr.sm_m
            );
          }
          static MBF() {
            return fr.sm_mbf || (fr.sm_mbf = e.w0(fr.M())), fr.sm_mbf;
          }
          toObject(r = !1) {
            return fr.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(fr.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(fr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new fr();
            return fr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(fr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return fr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(fr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              fr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_GetUpcomingScheduledDiscounts_Response_CUpcomingAppDiscountInfo";
          }
        }
        class Mr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Mr.prototype.account_id || e.Sg(Mr.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Mr.sm_m ||
                (Mr.sm_m = {
                  proto: Mr,
                  fields: {
                    account_id: {
                      n: 1,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    include_published: {
                      n: 2,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                  },
                }),
              Mr.sm_m
            );
          }
          static MBF() {
            return Mr.sm_mbf || (Mr.sm_mbf = e.w0(Mr.M())), Mr.sm_mbf;
          }
          toObject(r = !1) {
            return Mr.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(Mr.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(Mr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new Mr();
            return Mr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(Mr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return Mr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(Mr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              Mr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_GetSalePageCandidatesForPromo_Request";
          }
        }
        class yr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              yr.prototype.clans || e.Sg(yr.M()),
              a.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              yr.sm_m ||
                (yr.sm_m = {
                  proto: yr,
                  fields: { clans: { n: 1, c: jr, r: !0, q: !0 } },
                }),
              yr.sm_m
            );
          }
          static MBF() {
            return yr.sm_mbf || (yr.sm_mbf = e.w0(yr.M())), yr.sm_mbf;
          }
          toObject(r = !1) {
            return yr.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(yr.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(yr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new yr();
            return yr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(yr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return yr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(yr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              yr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_GetSalePageCandidatesForPromo_Response";
          }
        }
        class zr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              zr.prototype.clan_account_id || e.Sg(zr.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              zr.sm_m ||
                (zr.sm_m = {
                  proto: zr,
                  fields: {
                    clan_account_id: {
                      n: 1,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    gid_clan_event: {
                      n: 2,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    name: { n: 3, br: e.qM.readString, bw: e.gp.writeString },
                    published: { n: 4, br: e.qM.readBool, bw: e.gp.writeBool },
                    start_time: {
                      n: 5,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    end_time: {
                      n: 6,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    external_sale_event_type: {
                      n: 7,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                  },
                }),
              zr.sm_m
            );
          }
          static MBF() {
            return zr.sm_mbf || (zr.sm_mbf = e.w0(zr.M())), zr.sm_mbf;
          }
          toObject(r = !1) {
            return zr.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(zr.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(zr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new zr();
            return zr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(zr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return zr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(zr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              zr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_GetSalePageCandidatesForPromo_Response_salepage";
          }
        }
        class jr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              jr.prototype.clan_account_id || e.Sg(jr.M()),
              a.Message.initialize(this, r, 0, -1, [4], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              jr.sm_m ||
                (jr.sm_m = {
                  proto: jr,
                  fields: {
                    clan_account_id: {
                      n: 1,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    clan_name: {
                      n: 2,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    is_creator_home: {
                      n: 3,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                    sale_pages: { n: 4, c: zr, r: !0, q: !0 },
                  },
                }),
              jr.sm_m
            );
          }
          static MBF() {
            return jr.sm_mbf || (jr.sm_mbf = e.w0(jr.M())), jr.sm_mbf;
          }
          toObject(r = !1) {
            return jr.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(jr.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(jr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new jr();
            return jr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(jr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return jr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(jr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              jr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_GetSalePageCandidatesForPromo_Response_clan";
          }
        }
        class hr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              hr.prototype.partner_id || e.Sg(hr.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              hr.sm_m ||
                (hr.sm_m = {
                  proto: hr,
                  fields: {
                    partner_id: {
                      n: 1,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                  },
                }),
              hr.sm_m
            );
          }
          static MBF() {
            return hr.sm_mbf || (hr.sm_mbf = e.w0(hr.M())), hr.sm_mbf;
          }
          toObject(r = !1) {
            return hr.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(hr.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(hr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new hr();
            return hr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(hr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return hr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(hr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              hr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_GetAdvertisingAppsForPartner_Request";
          }
        }
        class Wr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Wr.prototype.advertising_apps || e.Sg(Wr.M()),
              a.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Wr.sm_m ||
                (Wr.sm_m = {
                  proto: Wr,
                  fields: { advertising_apps: { n: 1, c: Tr, r: !0, q: !0 } },
                }),
              Wr.sm_m
            );
          }
          static MBF() {
            return Wr.sm_mbf || (Wr.sm_mbf = e.w0(Wr.M())), Wr.sm_mbf;
          }
          toObject(r = !1) {
            return Wr.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(Wr.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(Wr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new Wr();
            return Wr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(Wr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return Wr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(Wr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              Wr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_GetAdvertisingAppsForPartner_Response";
          }
        }
        class Tr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Tr.prototype.appid || e.Sg(Tr.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Tr.sm_m ||
                (Tr.sm_m = {
                  proto: Tr,
                  fields: {
                    appid: { n: 1, br: e.qM.readUint32, bw: e.gp.writeUint32 },
                    app_name: {
                      n: 2,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    itemid: { n: 3, br: e.qM.readUint32, bw: e.gp.writeUint32 },
                  },
                }),
              Tr.sm_m
            );
          }
          static MBF() {
            return Tr.sm_mbf || (Tr.sm_mbf = e.w0(Tr.M())), Tr.sm_mbf;
          }
          toObject(r = !1) {
            return Tr.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(Tr.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(Tr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new Tr();
            return Tr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(Tr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return Tr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(Tr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              Tr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionPlanning_GetAdvertisingAppsForPartner_Response_advertising_app";
          }
        }
        class Or extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Or.prototype.spotlight_due_date || e.Sg(Or.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Or.sm_m ||
                (Or.sm_m = {
                  proto: Or,
                  fields: {
                    spotlight_due_date: {
                      n: 1,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    marketing_message_due_date: {
                      n: 2,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    discount_event_due_date: {
                      n: 3,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                  },
                }),
              Or.sm_m
            );
          }
          static MBF() {
            return Or.sm_mbf || (Or.sm_mbf = e.w0(Or.M())), Or.sm_mbf;
          }
          toObject(r = !1) {
            return Or.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(Or.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(Or.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new Or();
            return Or.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(Or.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return Or.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(Or.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              Or.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionRequirements";
          }
        }
        class V extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              V.prototype.inviteid || e.Sg(V.M()),
              a.Message.initialize(this, r, 0, -1, [16], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              V.sm_m ||
                (V.sm_m = {
                  proto: V,
                  fields: {
                    inviteid: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    appid: { n: 2, br: e.qM.readUint32, bw: e.gp.writeUint32 },
                    invite_account: {
                      n: 3,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    rtinvitetime: {
                      n: 4,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    rtexpiretime: {
                      n: 5,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    type: { n: 6, br: e.qM.readEnum, bw: e.gp.writeEnum },
                    accept_account: {
                      n: 7,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    rtaccepttime: {
                      n: 8,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    rtdatechosen: {
                      n: 9,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    discount_eventid: {
                      n: 10,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    packageid: {
                      n: 11,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    bundleid: {
                      n: 12,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    primary_partnerid: {
                      n: 13,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    deadlines: { n: 14, c: Or },
                    notify_partner: {
                      n: 15,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                    additional_email: {
                      n: 16,
                      r: !0,
                      q: !0,
                      br: e.qM.readString,
                      bw: e.gp.writeRepeatedString,
                    },
                    promotion_id: {
                      n: 17,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    cancelled: { n: 18, br: e.qM.readBool, bw: e.gp.writeBool },
                    rtime32_cancel_time: {
                      n: 19,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    require_sale_page: {
                      n: 20,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                    require_sale_page_type: {
                      n: 21,
                      br: e.qM.readEnum,
                      bw: e.gp.writeEnum,
                    },
                    admin_notes: {
                      n: 22,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    partner_notes: {
                      n: 23,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                  },
                }),
              V.sm_m
            );
          }
          static MBF() {
            return V.sm_mbf || (V.sm_mbf = e.w0(V.M())), V.sm_mbf;
          }
          toObject(r = !1) {
            return V.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(V.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(V.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new V();
            return V.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(V.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return V.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(V.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              V.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionEventInvitation";
          }
        }
        class xr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              xr.prototype.invite || e.Sg(xr.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              xr.sm_m ||
                (xr.sm_m = {
                  proto: xr,
                  fields: {
                    invite: { n: 1, c: V },
                    queue_email_to_send: {
                      n: 2,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                  },
                }),
              xr.sm_m
            );
          }
          static MBF() {
            return xr.sm_mbf || (xr.sm_mbf = e.w0(xr.M())), xr.sm_mbf;
          }
          toObject(r = !1) {
            return xr.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(xr.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(xr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new xr();
            return xr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(xr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return xr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(xr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              xr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionEventInvites_SetInvite_Request";
          }
        }
        class Ur extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ur.prototype.inviteid || e.Sg(Ur.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ur.sm_m ||
                (Ur.sm_m = {
                  proto: Ur,
                  fields: {
                    inviteid: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                  },
                }),
              Ur.sm_m
            );
          }
          static MBF() {
            return Ur.sm_mbf || (Ur.sm_mbf = e.w0(Ur.M())), Ur.sm_mbf;
          }
          toObject(r = !1) {
            return Ur.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(Ur.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(Ur.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new Ur();
            return Ur.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(Ur.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return Ur.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(Ur.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              Ur.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionEventInvites_SetInvite_Response";
          }
        }
        class gr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              gr.prototype.inviteid || e.Sg(gr.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              gr.sm_m ||
                (gr.sm_m = {
                  proto: gr,
                  fields: {
                    inviteid: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    appid: { n: 2, br: e.qM.readUint32, bw: e.gp.writeUint32 },
                    packageid: {
                      n: 3,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    bundleid: {
                      n: 4,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    partnerid: {
                      n: 5,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    promotion_id: {
                      n: 6,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                  },
                }),
              gr.sm_m
            );
          }
          static MBF() {
            return gr.sm_mbf || (gr.sm_mbf = e.w0(gr.M())), gr.sm_mbf;
          }
          toObject(r = !1) {
            return gr.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(gr.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(gr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new gr();
            return gr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(gr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return gr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(gr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              gr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionEventInvites_GetInvite_Request";
          }
        }
        class mr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              mr.prototype.invites || e.Sg(mr.M()),
              a.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              mr.sm_m ||
                (mr.sm_m = {
                  proto: mr,
                  fields: { invites: { n: 1, c: V, r: !0, q: !0 } },
                }),
              mr.sm_m
            );
          }
          static MBF() {
            return mr.sm_mbf || (mr.sm_mbf = e.w0(mr.M())), mr.sm_mbf;
          }
          toObject(r = !1) {
            return mr.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(mr.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(mr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new mr();
            return mr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(mr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return mr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(mr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              mr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionEventInvites_GetInvite_Response";
          }
        }
        class Fr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Fr.prototype.inviteid || e.Sg(Fr.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Fr.sm_m ||
                (Fr.sm_m = {
                  proto: Fr,
                  fields: {
                    inviteid: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    only_notify_additional_email: {
                      n: 2,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                  },
                }),
              Fr.sm_m
            );
          }
          static MBF() {
            return Fr.sm_mbf || (Fr.sm_mbf = e.w0(Fr.M())), Fr.sm_mbf;
          }
          toObject(r = !1) {
            return Fr.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(Fr.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(Fr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new Fr();
            return Fr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(Fr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return Fr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(Fr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              Fr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionEventInvites_ResendEmailInvite_Request";
          }
        }
        class te extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return te.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new te();
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new te();
            return te.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return te.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              te.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionEventInvites_ResendEmailInvite_Response";
          }
        }
        class lr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              lr.prototype.inviteid || e.Sg(lr.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              lr.sm_m ||
                (lr.sm_m = {
                  proto: lr,
                  fields: {
                    inviteid: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                  },
                }),
              lr.sm_m
            );
          }
          static MBF() {
            return lr.sm_mbf || (lr.sm_mbf = e.w0(lr.M())), lr.sm_mbf;
          }
          toObject(r = !1) {
            return lr.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(lr.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(lr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new lr();
            return lr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(lr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return lr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(lr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              lr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionEventInvites_GetEmailTargets_Request";
          }
        }
        class Nr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Nr.prototype.accountid || e.Sg(Nr.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Nr.sm_m ||
                (Nr.sm_m = {
                  proto: Nr,
                  fields: {
                    accountid: {
                      n: 1,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    partnerid: {
                      n: 2,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    email_address: {
                      n: 3,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                  },
                }),
              Nr.sm_m
            );
          }
          static MBF() {
            return Nr.sm_mbf || (Nr.sm_mbf = e.w0(Nr.M())), Nr.sm_mbf;
          }
          toObject(r = !1) {
            return Nr.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(Nr.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(Nr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new Nr();
            return Nr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(Nr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return Nr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(Nr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              Nr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionEventInviteReceive";
          }
        }
        class Hr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Hr.prototype.targets || e.Sg(Hr.M()),
              a.Message.initialize(this, r, 0, -1, [1, 2, 3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Hr.sm_m ||
                (Hr.sm_m = {
                  proto: Hr,
                  fields: {
                    targets: { n: 1, c: Nr, r: !0, q: !0 },
                    additional_email_address: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: e.qM.readString,
                      bw: e.gp.writeRepeatedString,
                    },
                    valve_account_ids: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: e.qM.readUint32,
                      pbr: e.qM.readPackedUint32,
                      bw: e.gp.writeRepeatedUint32,
                    },
                    operation_email: {
                      n: 4,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                  },
                }),
              Hr.sm_m
            );
          }
          static MBF() {
            return Hr.sm_mbf || (Hr.sm_mbf = e.w0(Hr.M())), Hr.sm_mbf;
          }
          toObject(r = !1) {
            return Hr.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(Hr.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(Hr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new Hr();
            return Hr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(Hr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return Hr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(Hr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              Hr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionEventInvites_GetEmailTargets_Response";
          }
        }
        class Vr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Vr.prototype.inviteid || e.Sg(Vr.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Vr.sm_m ||
                (Vr.sm_m = {
                  proto: Vr,
                  fields: {
                    inviteid: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    rtdatechosen: {
                      n: 2,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    discount_days: {
                      n: 3,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    discount_info: {
                      n: 4,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    skip_discount_event: {
                      n: 5,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                  },
                }),
              Vr.sm_m
            );
          }
          static MBF() {
            return Vr.sm_mbf || (Vr.sm_mbf = e.w0(Vr.M())), Vr.sm_mbf;
          }
          toObject(r = !1) {
            return Vr.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(Vr.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(Vr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new Vr();
            return Vr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(Vr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return Vr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(Vr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              Vr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionEventInvites_AcceptInvite_Request";
          }
        }
        class kr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              kr.prototype.gid || e.Sg(kr.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              kr.sm_m ||
                (kr.sm_m = {
                  proto: kr,
                  fields: {
                    gid: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                  },
                }),
              kr.sm_m
            );
          }
          static MBF() {
            return kr.sm_mbf || (kr.sm_mbf = e.w0(kr.M())), kr.sm_mbf;
          }
          toObject(r = !1) {
            return kr.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(kr.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(kr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new kr();
            return kr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(kr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return kr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(kr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              kr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionEventInvites_AcceptInvite_Response";
          }
        }
        class $r extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              $r.prototype.inviteid || e.Sg($r.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $r.sm_m ||
                ($r.sm_m = {
                  proto: $r,
                  fields: {
                    inviteid: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                  },
                }),
              $r.sm_m
            );
          }
          static MBF() {
            return $r.sm_mbf || ($r.sm_mbf = e.w0($r.M())), $r.sm_mbf;
          }
          toObject(r = !1) {
            return $r.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT($r.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq($r.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new $r();
            return $r.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj($r.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return $r.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0($r.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              $r.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionEventInvites_CancelInvite_Request";
          }
        }
        class ie extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return ie.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new ie();
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new ie();
            return ie.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return ie.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              ie.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionEventInvites_CancelInvite_Response";
          }
        }
        class Lr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Lr.prototype.opt_in_name || e.Sg(Lr.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Lr.sm_m ||
                (Lr.sm_m = {
                  proto: Lr,
                  fields: {
                    opt_in_name: {
                      n: 1,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    partner_id: {
                      n: 2,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                  },
                }),
              Lr.sm_m
            );
          }
          static MBF() {
            return Lr.sm_mbf || (Lr.sm_mbf = e.w0(Lr.M())), Lr.sm_mbf;
          }
          toObject(r = !1) {
            return Lr.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(Lr.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(Lr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new Lr();
            return Lr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(Lr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return Lr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(Lr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              Lr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionStats_GetOptInDemoStats_Request";
          }
        }
        class Qr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Qr.prototype.stats || e.Sg(Qr.M()),
              a.Message.initialize(this, r, 0, -1, [1, 2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Qr.sm_m ||
                (Qr.sm_m = {
                  proto: Qr,
                  fields: {
                    stats: { n: 1, c: Xr, r: !0, q: !0 },
                    appid_without_permissions: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: e.qM.readUint32,
                      pbr: e.qM.readPackedUint32,
                      bw: e.gp.writeRepeatedUint32,
                    },
                  },
                }),
              Qr.sm_m
            );
          }
          static MBF() {
            return Qr.sm_mbf || (Qr.sm_mbf = e.w0(Qr.M())), Qr.sm_mbf;
          }
          toObject(r = !1) {
            return Qr.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(Qr.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(Qr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new Qr();
            return Qr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(Qr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return Qr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(Qr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              Qr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionStats_GetOptInDemoStats_Response";
          }
        }
        class Xr extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Xr.prototype.appid || e.Sg(Xr.M()),
              a.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Xr.sm_m ||
                (Xr.sm_m = {
                  proto: Xr,
                  fields: {
                    appid: { n: 1, br: e.qM.readUint32, bw: e.gp.writeUint32 },
                    demo_appid: {
                      n: 2,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    rt_start_time: {
                      n: 3,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    rt_end_time: {
                      n: 4,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    demo_player_count: {
                      n: 5,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    wishlist_count: {
                      n: 6,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    player_wishlist_count: {
                      n: 7,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    rt_last_update_time: {
                      n: 9,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                  },
                }),
              Xr.sm_m
            );
          }
          static MBF() {
            return Xr.sm_mbf || (Xr.sm_mbf = e.w0(Xr.M())), Xr.sm_mbf;
          }
          toObject(r = !1) {
            return Xr.toObject(r, this);
          }
          static toObject(r, t) {
            return e.BT(Xr.M(), r, t);
          }
          static fromObject(r) {
            return e.Uq(Xr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (i().BinaryReader)(r),
              s = new Xr();
            return Xr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return e.zj(Xr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return Xr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            e.i0(Xr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              Xr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPromotionStats_GetOptInDemoStats_Response_PerAppStats";
          }
        }
        var Oe;
        ((B) => {
          function r(c, d, u) {
            return c.SendMsg(
              "PromotionPlanning.CreatePlan#1",
              (0, y.I8)(g, d, u),
              m,
              { ePrivilege: 1 },
            );
          }
          B.CreatePlan = r;
          function t(c, d, u) {
            return c.SendMsg(
              "PromotionPlanning.CreateTentativePlan#1",
              (0, y.I8)(g, d, u),
              m,
              { ePrivilege: 1 },
            );
          }
          B.CreateTentativePlan = t;
          function s(c, d, u) {
            return c.SendMsg(
              "PromotionPlanning.UpdatePlan#1",
              (0, y.I8)(O, d, u),
              pr,
              { ePrivilege: 1 },
            );
          }
          B.UpdatePlan = s;
          function w(c, d, u) {
            return c.SendMsg(
              "PromotionPlanning.UpdatePlanPartnerInfo#1",
              (0, y.I8)(O, d, u),
              pr,
              { ePrivilege: 1 },
            );
          }
          B.UpdatePlanPartnerInfo = w;
          function j(c, d, u) {
            return c.SendMsg(
              "PromotionPlanning.UpdatePlanInputData#1",
              (0, y.I8)(O, d, u),
              pr,
              { ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          B.UpdatePlanInputData = j;
          function M(c, d, u) {
            return c.SendMsg(
              "PromotionPlanning.DeletePlan#1",
              (0, y.I8)(S, d, u),
              _r,
              { ePrivilege: 1 },
            );
          }
          B.DeletePlan = M;
          function h(c, d, u) {
            return c.SendMsg(
              "PromotionPlanning.GetPlan#1",
              (0, y.I8)(k, d, u),
              $,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          B.GetPlan = h;
          function W(c, d, u) {
            return c.SendMsg(
              "PromotionPlanning.GetAllActivePlan#1",
              (0, y.I8)(nr, d, u),
              L,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          B.GetAllActivePlan = W;
          function Zr(c, d, u) {
            return c.SendMsg(
              "PromotionPlanning.GetPlanCompletedInDateRange#1",
              (0, y.I8)(Q, d, u),
              X,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          B.GetPlanCompletedInDateRange = Zr;
          function de(c, d, u) {
            return c.SendMsg(
              "PromotionPlanning.GetPlanByAssociationID#1",
              (0, y.I8)(Y, d, u),
              J,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          B.GetPlanByAssociationID = de;
          function Ar(c, d, u) {
            return c.SendMsg(
              "PromotionPlanning.GetPlansUpdatedSince#1",
              (0, y.I8)(Z, d, u),
              K,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          B.GetPlansUpdatedSince = Ar;
          function T(c, d, u) {
            return c.SendMsg(
              "PromotionPlanning.SearchPlan#1",
              (0, y.I8)(E, d, u),
              D,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          B.SearchPlan = T;
          function Jr(c, d, u) {
            return c.SendMsg(
              "PromotionPlanning.GetAllPlansForApps#1",
              (0, y.I8)(v, d, u),
              q,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          }
          B.GetAllPlansForApps = Jr;
          function Kr(c, d, u) {
            return c.SendMsg(
              "PromotionPlanning.GetAllPlansForPartner#1",
              (0, y.I8)(p, d, u),
              A,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          B.GetAllPlansForPartner = Kr;
          function Sr(c, d, u) {
            return c.SendMsg(
              "PromotionPlanning.GetPlanByInputAccessKey#1",
              (0, y.I8)(G, d, u),
              R,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          B.GetPlanByInputAccessKey = Sr;
          function Ir(c, d, u) {
            return c.SendMsg(
              "PromotionPlanning.MarkLocalizationAssetComplete#1",
              (0, y.I8)(C, d, u),
              Pr,
              { ePrivilege: 1 },
            );
          }
          B.MarkLocalizationAssetComplete = Ir;
          function Gr(c, d, u) {
            return c.SendMsg(
              "PromotionPlanning.SendNotification#1",
              (0, y.I8)(n, d, u),
              or,
              { ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          B.SendNotification = Gr;
          function se(c, d, u) {
            return c.SendMsg(
              "PromotionPlanning.GetSentNotification#1",
              (0, y.I8)(_, d, u),
              P,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          B.GetSentNotification = se;
          function je(c, d, u) {
            return c.SendMsg(
              "PromotionPlanning.ResendNotification#1",
              (0, y.I8)(rr, d, u),
              re,
              { ePrivilege: 1 },
            );
          }
          B.ResendNotification = je;
          function vr(c, d, u) {
            return c.SendMsg(
              "PromotionPlanning.SetPromotionEmailTarget#1",
              (0, y.I8)(er, d, u),
              ee,
              { ePrivilege: 1 },
            );
          }
          B.SetPromotionEmailTarget = vr;
          function he(c, d, u) {
            return c.SendMsg(
              "PromotionPlanning.GetPromotionPlanSalesDaily#1",
              (0, y.I8)(sr, d, u),
              ar,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          B.GetPromotionPlanSalesDaily = he;
          function le(c, d, u) {
            return c.SendMsg(
              "PromotionPlanning.GetPromotionPlanForSalePages#1",
              (0, y.I8)(N, d, u),
              br,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          }
          B.GetPromotionPlanForSalePages = le;
          function Te(c, d, u) {
            return c.SendMsg(
              "PromotionPlanning.CreateSalePageForPromo#1",
              (0, y.I8)(tr, d, u),
              ir,
              { ePrivilege: 1 },
            );
          }
          B.CreateSalePageForPromo = Te;
          function Ne(c, d, u) {
            return c.SendMsg(
              "PromotionPlanning.GetUpcomingScheduledDiscounts#1",
              (0, y.I8)(dr, d, u),
              wr,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          }
          B.GetUpcomingScheduledDiscounts = Ne;
          function Me(c, d, u) {
            return c.SendMsg(
              "PromotionPlanning.GetSalePageCandidatesForPromo#1",
              (0, y.I8)(Mr, d, u),
              yr,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          B.GetSalePageCandidatesForPromo = Me;
          function ye(c, d, u) {
            return c.SendMsg(
              "PromotionPlanning.GetAdvertisingAppsForPartner#1",
              (0, y.I8)(hr, d, u),
              Wr,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          B.GetAdvertisingAppsForPartner = ye;
        })(Oe || (Oe = {}));
        var $e;
        ((B) => {
          function r(h, W, Zr) {
            return h.SendMsg(
              "PromotionEventInvites.SetInvite#1",
              (0, y.I8)(xr, W, Zr),
              Ur,
              { ePrivilege: 4 },
            );
          }
          B.SetInvite = r;
          function t(h, W, Zr) {
            return h.SendMsg(
              "PromotionEventInvites.GetInvite#1",
              (0, y.I8)(gr, W, Zr),
              mr,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          B.GetInvite = t;
          function s(h, W, Zr) {
            return h.SendMsg(
              "PromotionEventInvites.AcceptInvite#1",
              (0, y.I8)(Vr, W, Zr),
              kr,
              { ePrivilege: 1 },
            );
          }
          B.AcceptInvite = s;
          function w(h, W, Zr) {
            return h.SendMsg(
              "PromotionEventInvites.CancelInvite#1",
              (0, y.I8)($r, W, Zr),
              ie,
              { ePrivilege: 4 },
            );
          }
          B.CancelInvite = w;
          function j(h, W, Zr) {
            return h.SendMsg(
              "PromotionEventInvites.ResendEmailInvite#1",
              (0, y.I8)(Fr, W, Zr),
              te,
              { ePrivilege: 4 },
            );
          }
          B.ResendEmailInvite = j;
          function M(h, W, Zr) {
            return h.SendMsg(
              "PromotionEventInvites.GetEmailTargets#1",
              (0, y.I8)(lr, W, Zr),
              Hr,
              { ePrivilege: 4 },
            );
          }
          B.GetEmailTargets = M;
        })($e || ($e = {}));
        var Le;
        ((B) => {
          function r(t, s, w) {
            return t.SendMsg(
              "PromotionStats.GetOptInDemoStats#1",
              (0, y.I8)(Lr, s, w),
              Qr,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          B.GetOptInDemoStats = r;
        })(Le || (Le = {}));
        var qe = f(80902),
          Ie = f(3685),
          pe = f(98609),
          Ae = f(67705);
        function Ge() {
          const B = (0, Ae.Tc)(
            "promotion_operation_token",
            "application_config",
          );
          return (
            (0, ve.wT)(
              B,
              "GetPromotionWriteAccess: promotion operation token is missing",
            ),
            B ? new Ie.D(pe.TS.WEBAPI_BASE_URL, B).GetServiceTransport() : null
          );
        }
        function Re(B, r) {
          const [t] = (0, Rr.useState)(() => Ge());
          return (0, qe.I)({
            queryKey: ["usePromotionPlanBySalePage", r],
            queryFn: async () => {
              if (!t) return null;
              const w = y.w.Init(N),
                j = new H();
              j.set_clan_account_id(B),
                j.set_gid_clan_event(r),
                w.Body().add_request_list(j);
              const M = await Oe.GetPromotionPlanForSalePages(t, w);
              if (M.GetEResult() != ke.R)
                throw new Error(
                  `Error from PromotionPlanBySalePage: ${M.GetEResult()}`,
                );
              return M.Body()
                .plans()
                .map((h) => h.promotion_id());
            },
            placeholderData: null,
            enabled: !!t,
          }).data;
        }
        var Ce = f(7638),
          xe = f(16412),
          Qe = f(96538),
          U = f(18210),
          ae = f(30096),
          ne = f(56330),
          Ue = f.n(ne),
          _e = f(85599),
          Cr = f(3166),
          Xe = f(34592),
          Pe = f(41735),
          Ye = f.n(Pe);
        class oe {
          async DeleteForumTopic(r, t, s, w, j) {
            let M =
              Cr.TS.COMMUNITY_BASE_URL +
              "forum/" +
              r.GetAccountID() +
              "/" +
              t +
              "/deletetopic/";
            s != null && s != "" && (M += s + "/");
            const h = new FormData();
            h.append("sessionid", (0, Cr.KC)()), h.append("gidforumtopic", w);
            let W = await Ye().post(M, h, {
              withCredentials: !0,
              cancelToken: j.token,
            });
            if (W.data.success != ke.R) throw W.data;
            return W.data;
          }
        }
        const rt = new oe();
        var et = Object.defineProperty,
          tt = Object.getOwnPropertyDescriptor,
          we = (B, r, t, s) => {
            for (
              var w = s > 1 ? void 0 : s ? tt(r, t) : r, j = B.length - 1, M;
              j >= 0;
              j--
            )
              (M = B[j]) && (w = (s ? M(r, t, w) : M(w)) || w);
            return s && w && et(r, t, w), w;
          };
        const Be = class He extends Rr.Component {
          static m_uniqueError = 0;
          m_forumTopicGID;
          m_clanSteamID;
          m_cancelSignal = Ye().CancelToken.source();
          constructor(r) {
            super(r),
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
                ? rt
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
          OnDeleteEventFailureCallback(r) {
            this.setState({ dialogState: "error", ...(0, Xe.H)(r) });
          }
          OnDeleteForumTopicFailureCallback(r) {
            this.setState({
              dialogState: "failed_thread_delete",
              ...(0, Xe.H)(r),
            });
          }
          SetToWaiting() {
            this.state.dialogState != "waiting" &&
              this.setState({ dialogState: "waiting" });
          }
          OnDelete() {
            const { eventModel: r, partnerEventStore: t } = this.props;
            let s = r.clanSteamID,
              w = r.GID,
              j = r.AnnouncementGID;
            (this.m_forumTopicGID = r.forumTopicGID),
              (this.m_clanSteamID = s),
              !this.props.eventModel.bOldAnnouncement &&
              w &&
              w != "0" &&
              w != We.kFb
                ? (this.SetToWaiting(),
                  t
                    .DeleteClanEvent(s, w)
                    .then(this.OnDeleteEventSuccessCallback)
                    .catch(this.OnDeleteEventFailureCallback))
                : this.props.eventModel.bOldAnnouncement
                  ? (this.SetToWaiting(),
                    t
                      .DeleteOldAnnouncement(s, j)
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
            let r = this.props.eventModel,
              t = this.props.closeModal,
              s = "",
              w = new Array();
            switch (this.state.dialogState) {
              case "confirmation":
                let j = r.GetNameWithFallback((0, We.sfN)(Cr.TS.LANGUAGE)),
                  M = r.BIsVisibleEvent()
                    ? "#EventDisplay_AreYouSure_Visible"
                    : "#EventDisplay_AreYouSure";
                (s = (0, U.we)(M, j)),
                  (t = this.OnDelete),
                  r.BHasForumTopicGID() &&
                    w.push(
                      (0, b.jsxs)(
                        "div",
                        {
                          className: Ue().Padding,
                          children: [
                            (0, b.jsx)("input", {
                              type: "checkbox",
                              id: "del_cmt_post",
                              name: "del_cmt_post",
                              defaultChecked: this.state.bDeleteCommentThread,
                              onChange: this.OnChangeDeleteForum,
                            }),
                            (0, b.jsx)("label", {
                              htmlFor: "del_cmt_post",
                              children: (0, U.we)(
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
                (s = (0, U.we)("#EventDisplay_DeleteEvent_InProgress")),
                  w.push((0, b.jsx)(_e.t, {}, "throbber"));
                break;
              case "error":
                (s = (0, U.we)("#EventDisplay_DeleteEvent_Error")),
                  w.push(
                    (0, b.jsx)(
                      "div",
                      {
                        className: Ue().ErrorStyles,
                        children: this.state.strErrorMsg,
                      },
                      "deleteerror_" + ++He.m_uniqueError,
                    ),
                  );
                break;
              case "failed_thread_delete":
                (s = (0, U.we)("#EventDisplay_DeleteEvent_ForumTopicError")),
                  w.push(
                    (0, b.jsx)(
                      "div",
                      {
                        className: Ue().ErrorStyles,
                        children: this.state.strErrorMsg,
                      },
                      "deleteerror_" + ++He.m_uniqueError,
                    ),
                  ),
                  this.props.onDeleteSuccessAndCloseDialog &&
                    (t = () => {
                      this.props.onDeleteSuccessAndCloseDialog(),
                        this.props.closeModal();
                    });
                break;
              case "success":
                (s = (0, U.we)("#EventDisplay_DeleteEvent_Success")),
                  this.props.onDeleteSuccessAndCloseDialog &&
                    (t = () => {
                      this.props.onDeleteSuccessAndCloseDialog(),
                        this.props.closeModal();
                    });
                break;
            }
            return (0, b.jsx)(Qe.o0, {
              strTitle: (0, U.we)("#EventDisplay_DeleteEvent"),
              strDescription: s,
              onCancel: this.props.closeModal,
              onOK: t,
              bAlertDialog: this.state.dialogState != "confirmation",
              bOKDisabled: this.state.dialogState == "waiting",
              bDestructiveWarning: this.state.dialogState == "error",
              children: w,
            });
          }
        };
        we([ae.oI], Be.prototype, "OnDeleteEventSuccessCallback", 1),
          we([ae.oI], Be.prototype, "OnDeleteForumTopicSuccessCallback", 1),
          we([ae.oI], Be.prototype, "OnDeleteEventFailureCallback", 1),
          we([ae.oI], Be.prototype, "OnDeleteForumTopicFailureCallback", 1),
          we([ae.oI], Be.prototype, "SetToWaiting", 1),
          we([ae.oI], Be.prototype, "OnDelete", 1),
          we([ae.oI], Be.prototype, "OnChangeDeleteForum", 1);
        let it = Be;
        var Dr = f(56492),
          ce = f(95695),
          qr = f.n(ce),
          Je = f(88003),
          Er = f(36707),
          Ze = f(82734),
          st = f(50974),
          fe = f(72609),
          at = f(36631),
          Bt = f(25792),
          ge = f(90316),
          Yr = f.n(ge),
          Ke = f(36118),
          Se = f(71421);
        function ct(B) {
          const {
              eventModel: r,
              permissions: t,
              bIsCreatorHomeVisible: s,
              additionalButtons: w,
              onDeleteRequest: j,
              saleDayControl: M,
              promotionPlanLinks: h,
              testControls: W,
              bSupportsSticky: Zr = !1,
            } = B,
            de = (0, Cr.Qn)(),
            Ar = (0, at.MU)(),
            [T, Jr, Kr, Sr] = (0, ue.q3)(() => [
              r.visibility_state,
              r.jsondata.bSaleEnabled,
              r.GID,
              r.clanSteamID.GetAccountID(),
            ]),
            [Ir, Gr] = Rr.useState(Zr),
            { bVisible: se, ref: je } = (0, ae.hd)();
          if (!(t?.can_edit || t?.support_user) || de)
            return (0, b.jsx)("span", {});
          const vr = (0, Cr.yK)(),
            he = vr == "community",
            le = vr == "store",
            Te = !!t.support_user,
            Ne = Ee(t),
            Me = Ir && !se,
            ye = r.GetEventType() == We.ajI,
            c =
              (T == ze.zv.k_EEventStateVisible ||
                T == ze.zv.k_EEventStateUnlisted) &&
              (!ye || s),
            d = T == ze.zv.k_EEventStateStaged;
          return (0, b.jsxs)(Bt.tH, {
            children: [
              (0, b.jsx)("div", {
                className: (0, Er.A)(
                  Yr().DisplayAdminPanel_TopSpacer,
                  Me && Yr().Sticky,
                ),
              }),
              (0, b.jsxs)("div", {
                className: (0, Er.A)({
                  [Yr().DisplayAdminPanel]: !0,
                  [Yr().Locked]: he,
                  [Yr().Sticky]: Me,
                }),
                children: [
                  (0, b.jsx)("span", {
                    className: Yr().DisplayAdminPanel_Title,
                    children: (0, U.we)("#EventDisplay_Admin_Title"),
                  }),
                  (0, b.jsxs)("div", {
                    className: (0, Er.A)(
                      Yr().DisplayAdminPanel_ctn,
                      Me && Yr().Sticky,
                    ),
                    children: [
                      w,
                      w &&
                        (0, b.jsx)("span", {
                          className: Yr().DisplayAdminPanel_Spacer,
                          children: " ",
                        }),
                      (0, b.jsx)(Dr.tj, {
                        eventModel: r,
                        route: Dr.PH.k_eCommunityEdit,
                        className: (0, Er.A)(qr().Button, Yr().AdminButton),
                        children: ye
                          ? (0, U.we)("#EventEditor_Edit_Page")
                          : (0, U.we)("#EventEditor_Edit"),
                      }),
                      !!j &&
                        (0, b.jsx)("span", {
                          className: qr().Button + " " + Yr().AdminButton,
                          onClick: j,
                          children: (0, U.we)("#EventDisplay_DeleteEvent"),
                        }),
                      !c &&
                        (0, b.jsx)(Rr.Fragment, {
                          children: (0, b.jsx)(Dr.tj, {
                            eventModel: r,
                            route: Dr.PH.k_eCommunityPublish,
                            className: (0, Er.A)(qr().Button, Yr().AdminButton),
                            children: (0, U.we)(
                              d
                                ? "#EventEditor_Publish_VisibleNow"
                                : "#Button_Publish",
                            ),
                          }),
                        }),
                      (0, b.jsx)(Dr.tj, {
                        eventModel: r,
                        route: Dr.PH.k_eCommunityAdminPage,
                        className: (0, Er.A)(qr().Button, Yr().AdminButton),
                        children: (0, U.we)("#EventDisplay_Events"),
                      }),
                      M,
                      !!(Jr && Ar && !ye) &&
                        (0, b.jsx)(Dr.tj, {
                          eventModel: r,
                          route: Dr.PH.k_eStoreSalePage,
                          className: (0, Er.A)(qr().Button, Yr().AdminButton),
                          children: (0, U.we)("#EventDisplay_SalesPage"),
                        }),
                      !!(Jr && Te && Kr) &&
                        (0, b.jsx)("a", {
                          href:
                            fe.TS.STATS_BASE_URL +
                            "sales/details/?gid=" +
                            Kr +
                            "&clanid=" +
                            Sr,
                          target: fe.TS.IN_CLIENT ? "" : "_blank",
                          className: (0, Er.A)(
                            qr().Button,
                            Yr().AdminButton,
                            qr().ValveOnlyBackground,
                          ),
                          children: (0, U.we)("#EventDisplay_StatsPage"),
                        }),
                      !!(Jr && Te && Kr && !ye) &&
                        (0, b.jsx)("a", {
                          href:
                            fe.TS.PARTNER_BASE_URL +
                            "promotion/invitationplanner/dashboard?saleclaneventgid=" +
                            Kr +
                            "&saleclanaccountid=" +
                            Sr,
                          target: fe.TS.IN_CLIENT ? "" : "_blank",
                          className: (0, Er.A)(
                            qr().Button,
                            Yr().AdminButton,
                            qr().ValveOnlyBackground,
                          ),
                          children: (0, U.we)(
                            "#EventDisplay_InvitationPlannerPage",
                          ),
                        }),
                      h,
                      !!(
                        Jr &&
                        Ne &&
                        st.bv == Sr &&
                        r.GetContentHubCategory()
                      ) &&
                        (0, b.jsx)("a", {
                          href: `${fe.TS.PARTNER_BASE_URL}admin/store/contenthub/categories?edit=${r.GetContentHubCategory()}`,
                          target: fe.TS.IN_CLIENT ? "" : "_blank",
                          className: (0, Er.A)(
                            qr().Button,
                            Yr().AdminButton,
                            qr().ValveOnlyBackground,
                          ),
                          children: (0, U.we)("#EventDisplay_CategoryEditor"),
                        }),
                      !!(c && (le || (Ar && !he))) &&
                        (0, b.jsx)(Dr.tj, {
                          eventModel: r,
                          route: Jr
                            ? Dr.PH.k_eCommunityPreviewSale
                            : Dr.PH.k_eCommunityView,
                          className: (0, Er.A)(qr().Button, Yr().AdminButton),
                          children: (0, U.we)(
                            Jr
                              ? "#EventDisplay_PreviewOnCommunity"
                              : "#EventDisplay_ViewOnCommunity",
                          ),
                        }),
                      !!(c && he) &&
                        (0, b.jsx)(Dr.tj, {
                          eventModel: r,
                          route: Dr.PH.k_eStoreView,
                          className: (0, Er.A)(qr().Button, Yr().AdminButton),
                          children: (0, U.we)("#EventDisplay_ViewOnStore"),
                        }),
                      W,
                      Me &&
                        (0, b.jsx)("div", {
                          className: Yr().DisplayAdminPanelClose,
                          onClick: () => Gr(!1),
                          children: (0, b.jsx)(Se.Gq, {
                            toolTipContent: (0, U.we)(
                              "#EventDisplay_Admin_Close_ttip",
                            ),
                            children: (0, b.jsx)(Ke.X, {}),
                          }),
                        }),
                      !Ir &&
                        Zr &&
                        (0, b.jsx)("div", {
                          className: Yr().DisplayAdminPanelClose,
                          onClick: () => Gr(!0),
                          children: (0, b.jsx)(Se.Gq, {
                            toolTipContent: (0, U.we)(
                              "#EventDisplay_Admin_Reopen_ttip",
                            ),
                            children: (0, b.jsx)(Ke.i3G, { angle: 0 }),
                          }),
                        }),
                    ],
                  }),
                ],
              }),
              (0, b.jsx)("div", {
                className: Yr().DisplayAdminPanelMarker,
                ref: je,
              }),
            ],
          });
        }
        function Ee(B) {
          return !!(B?.support_user && B?.valve_admin);
        }
        var bt = f(14947),
          be = f(64703),
          me = f(54622),
          dt = f(6881),
          wt = f(75233);
        function ut(B) {
          const { eventModel: r } = B,
            t = (0, ue.q3)(() => r.jsondata.sale_sections);
          return (0, Rr.useMemo)(
            () =>
              t?.some(
                (w) =>
                  (w.section_type == "quiz" &&
                    w.quiz?.track_with_cozy_cottage_doors) ||
                  w.section_type == "quest" ||
                  w.section_type == "rewards",
              ),
            [t],
          )
            ? (0, b.jsx)(Mt, { ...B })
            : null;
        }
        function ft(B, r) {
          if (B && B.section_type == "rewards") {
            const t = B.rewards.reward_items?.filter((s) => s.item_bucket == r);
            if (t?.length > 0)
              return t.map((w) => ({
                appid: w.appid,
                item_type: w.community_item_type,
                amount: "1",
              }));
          }
          return null;
        }
        const Fe = "Answered as: ";
        function Mt(B) {
          const { eventModel: r } = B,
            [t, s] = (0, Rr.useState)(!1),
            w = (0, be.Tn)(),
            j = (0, wt.jE)();
          if (
            ((0, Rr.useEffect)(() => {
              be.hH
                .Get()
                .LoadDoorData()
                .then(() => s(!0));
            }, []),
            !t)
          )
            return null;
          const M = r.GetSaleSectionsByType("quiz"),
            h = [],
            W = M?.length > 0 ? M[0].unique_id : void 0,
            Zr =
              M?.length == 1 &&
              (M[0].quiz.quiz_type == "scenario" ||
                M[0].quiz.quiz_type == "branching") &&
              M[0].quiz.answer_categories?.length > 0;
          if (Zr)
            h.push({ label: "State: Reset the Quiz", data: -1 }),
              h.push(
                ...M[0].quiz.answer_categories.map((T) => ({
                  label: Fe + T.category_name,
                  data: T.door_index,
                })),
              ),
              h.push(
                ...M[0].quiz.answer_categories.map((T) => ({
                  label: "Rewarded as: " + T.category_name,
                  data: T.door_index,
                })),
              );
          else {
            const T = be.hH.Get().GetMaxDoor();
            for (let Jr = -1; Jr <= T; ++Jr)
              h.push({ label: "Doors Opened " + (Jr + 1), data: Jr });
          }
          const de = r.GetSaleSectionsByType("rewards"),
            Ar = de?.length > 0 ? de[0] : null;
          return (0, b.jsxs)(b.Fragment, {
            children: [
              (0, b.jsx)("a", {
                className: (0, Er.A)(ce.Button, ge.AdminButton),
                onClick: (T) => {
                  (0, Je.pg)(
                    (0, b.jsx)(Qe.o0, {
                      strTitle: (0, U.we)("#Dialog_AreYouSure"),
                      strDescription:
                        "Reload page after you hit OK; will not grant virtual reward items a second itme",
                      onOK: () =>
                        be.hH.Get().CloseAllDoors(Cr.UF.CLANACCOUNTID),
                    }),
                    (0, Ze.uX)(T),
                  );
                },
                children: "Reset All Doors",
              }),
              (0, b.jsx)(xe.m, {
                strDropDownClassName: (0, Er.A)(ce.DropDownScroll),
                rgOptions: h,
                selectedOption: w,
                label: "Minigame States:",
                onChange: (T) => {
                  const Jr = new Array();
                  if (Zr)
                    (0, bt.h5)(() => {
                      if (((0, be.Sp)(-1), (0, me.LM)(j, W), T.data != -1)) {
                        const Kr = M[0].quiz.answer_categories.find(
                          (Sr) => Sr.door_index == T.data,
                        );
                        Kr &&
                          M[0].quiz.questions
                            .filter((Sr) => Sr.answers?.length > 0)
                            .forEach((Sr, Ir) => {
                              let Gr = Sr.answers.findIndex((se) =>
                                se.category_ids?.includes(Kr.category_id),
                              );
                              Gr < 0 && (Gr = 0),
                                (0, me.VX)(
                                  j,
                                  W,
                                  Ir,
                                  Sr.answers[Gr].category_ids,
                                ),
                                (0, me.xN)(j, W, Ir, Sr.answers[Gr]);
                            }),
                          T.label.toString().startsWith(Fe) ||
                            ((0, be.my)(0, !0),
                            (0, be.my)(T.data, !0),
                            Jr.push(0),
                            Jr.push(T.data));
                      }
                    });
                  else {
                    for (let Kr = 0; Kr <= T.data; ++Kr) Jr.push(Kr);
                    (0, be.Sp)(T.data);
                  }
                  if (
                    Ar &&
                    Ar.rewards?.reward_items?.length > 0 &&
                    T.data > -1 &&
                    !T.label.toString().startsWith(Fe)
                  ) {
                    const Kr = Jr.map((Ir) => ft(Ar, Ir)).filter(Boolean),
                      Sr = new Array();
                    Kr.forEach((Ir) => Sr.push(...Ir)),
                      (0, dt._u)(j, Ar.rewards?.reward_items[0].appid, Sr);
                  }
                },
              }),
            ],
          });
        }
        var yt = f(85692),
          zt = f(60480);
        function jt(B) {
          const {
              eventModel: r,
              partnerEventStore: t,
              addtionalAdminButtons: s,
              fnOnUpdateSaleDayIndex: w,
              bSupportsSticky: j = !1,
            } = B,
            [M, h] = Rr.useState(!1),
            W = (0, ue.q3)(() => ht(r)),
            [Zr, de] = Rr.useState(r ? r.GetDayIndexFromEventStart() : 0),
            [Ar, T, Jr] = (0, ue.q3)(() => [
              r.jsondata.bSaleEnabled,
              r.GID,
              r.clanSteamID.GetAccountID(),
            ]),
            Kr = (0, Ce.Ec)(Jr),
            Sr = (vr) => {
              (0, Je.pg)(
                (0, b.jsx)(it, {
                  eventModel: r,
                  onDeleteSuccessAndCloseDialog: () => h(!0),
                  partnerEventStore: t,
                }),
                (0, Ze.uX)(vr),
              );
            },
            Ir = (0, yt.ty)(),
            { creatorHome: Gr } = (0, zt.FV)(Jr);
          if (M)
            return (0, b.jsx)(Dr.OG, {
              eventModel: r,
              route: Dr.PH.k_eCommunityAdminPage,
            });
          if (Ir) return (0, b.jsx)("span", {});
          const se = [];
          if (W !== void 0)
            for (let vr = 0; vr <= W; ++vr)
              se.push({
                label: (0, U.we)("#SalePage_Admin_SaleEventDay", vr + 1),
                data: vr,
              });
          const je = r.GetEventType() == We.ajI;
          return (0, b.jsx)(ct, {
            eventModel: r,
            permissions: Kr,
            bIsCreatorHomeVisible: je && Gr?.GetLinkedEventGID() == r.GID,
            additionalButtons: s,
            onDeleteRequest: t && (0, Cr.yK)() == "community" ? Sr : void 0,
            saleDayControl:
              W !== void 0 &&
              se.length > 0 &&
              (0, b.jsx)(xe.m, {
                strDropDownClassName: ce.DropDownScroll,
                rgOptions: se,
                selectedOption: Math.min(W, Zr),
                onChange: (vr) => {
                  de(vr.data), w(vr.data);
                },
                bDisableMouseOverlay: !0,
                contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
              }),
            promotionPlanLinks:
              !!(Ar && Ee(Kr) && T) &&
              (0, b.jsx)(Ot, { clanAccountID: Jr, gidClanEvent: T }),
            testControls: (0, b.jsxs)(b.Fragment, {
              children: [
                (0, b.jsx)(ut, { eventModel: r }),
                (0, b.jsx)(Wt, { eventModel: r }),
              ],
            }),
            bSupportsSticky: j,
          });
        }
        function ht(B) {
          let r;
          return (
            B?.BHasSaleEnabled() &&
              (B.GetSaleSectionCount() > 0 &&
                B.GetSaleSections().forEach((t) => {
                  (0, ze.ye)(t.section_type) &&
                    !(0, ze.CU)(t) &&
                    t.capsules.forEach((s) => {
                      s.visibility_index !== void 0 &&
                        (r === void 0 || r < s.visibility_index) &&
                        (r = s.visibility_index);
                    });
                }),
              B.jsondata.sale_num_headers > 1 &&
                (r === void 0 || r < B.jsondata.sale_num_headers) &&
                (r = B.jsondata.sale_num_headers)),
            r
          );
        }
        function Wt(B) {
          const { eventModel: r } = B,
            t = (0, ue.q3)(() => r.jsondata.sale_sections),
            s = (0, Rr.useMemo)(
              () => t?.find((w) => w.section_type == "badge_progress"),
              [t],
            );
          return s?.badge_progress?.levels?.length > 0 && Cr.iA.is_support
            ? (0, b.jsx)(Tt, { section: s })
            : null;
        }
        function Tt(B) {
          const { section: r } = B,
            t = (0, Ve.fy)(r.badge_progress?.event_badgeid),
            s = (0, ue.q3)(() => r.badge_progress.levels),
            w = Math.max(...s.map((M) => M.level));
          if (!t) return null;
          const j = [];
          for (let M = 0; M <= w; ++M) j.push({ label: "Level " + M, data: M });
          return (0, b.jsx)(xe.m, {
            strDropDownClassName: (0, Er.A)(
              ce.DropDownScroll,
              ce.ValveOnlyBackground,
            ),
            rgOptions: j,
            selectedOption: t.level,
            onChange: (M) =>
              (0, Ve.Du)({
                badgeid: r.badge_progress?.event_badgeid,
                level: M.data,
              }),
          });
        }
        function Ot(B) {
          const { clanAccountID: r, gidClanEvent: t } = B,
            s = Re(r, t);
          return s
            ? (0, b.jsx)(b.Fragment, {
                children: s.map((w) =>
                  (0, b.jsx)(
                    "a",
                    {
                      href: `${Cr.TS.PARTNER_BASE_URL}promotion/planning/edit/${w}`,
                      target: Cr.TS.IN_CLIENT ? "" : "_blank",
                      className: (0, Er.A)(
                        ce.Button,
                        ge.AdminButton,
                        ce.ValveOnlyBackground,
                      ),
                      children: (0, U.we)("#EventDisplay_PromotionEditor"),
                    },
                    w,
                  ),
                ),
              })
            : null;
        }
      },
    },
  ]);
})();
