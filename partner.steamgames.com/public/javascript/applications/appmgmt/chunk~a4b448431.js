/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [5659],
    {
      47634: (jr, wr, f) => {
        f.d(wr, {
          NI: () => I,
          QG: () => N,
          JE: () => K,
          MG: () => U,
          e6: () => j,
          CS: () => X,
          ds: () => $,
          LK: () => D,
          hd: () => Y,
          cc: () => H,
          tU: () => v,
          S4: () => x,
          $q: () => Z,
          ZR: () => F,
          OT: () => d,
          pk: () => pr,
          nf: () => er,
          rj: () => ar,
          D4: () => h,
          T: () => O,
          V$: () => hr,
          EO: () => Ur,
        });
        var h = {};
        f.r(h),
          f.d(h, {
            Sk: () => Nr,
            pw: () => n,
            EK: () => Br,
            SK: () => Er,
            vm: () => l,
            H5: () => B,
            KO: () => zr,
            xl: () => Tr,
            eV: () => Fr,
            RV: () => vr,
            OD: () => w,
            T9: () => S,
            k6: () => Lr,
            IT: () => E,
            QY: () => y,
            eH: () => Ar,
            W8: () => br,
            QJ: () => W,
          });
        var d = {};
        f.r(d),
          f.d(d, {
            vy: () => m,
            uA: () => $r,
            Zb: () => Kr,
            By: () => Dr,
            gI: () => Wr,
            jA: () => z,
          });
        var hr = {};
        f.r(hr), f.d(hr, { Mj: () => Jr, fy: () => Qr, QP: () => Yr });
        var er = {};
        f.r(er),
          f.d(er, { pE: () => Zr, Ln: () => Vr, Q2: () => Xr, u: () => Hr });
        var O = {};
        f.r(O), f.d(O, { rz: () => Rr, RZ: () => Pr, XG: () => qr });
        var pr = {};
        f.r(pr),
          f.d(pr, {
            om: () => _r,
            we: () => kr,
            A_: () => Mr,
            V5: () => Gr,
            SN: () => nt,
            XU: () => rt,
            LY: () => tt,
            FS: () => Cr,
            wZ: () => sr,
            Ky: () => it,
            yz: () => lt,
            tA: () => mt,
            QN: () => ct,
            CE: () => gr,
          });
        var ar = {};
        f.r(ar),
          f.d(ar, {
            H: () => ht,
            k2: () => dt,
            GS: () => Bt,
            CT: () => ot,
            BA: () => ut,
            TO: () => ft,
            q1: () => xr,
          });
        var u = f(80613),
          c = f.n(u),
          t = f(75245),
          T = f(35038),
          yr = f(44420);
        const zr = 0,
          w = 1,
          W = 2,
          E = 3,
          S = 4,
          y = 5,
          l = 6,
          n = 7,
          B = 8,
          Br = 9,
          br = 10,
          Tr = 11,
          Nr = 12,
          Fr = 13,
          Er = 14,
          Ar = 15,
          Lr = 16,
          vr = 17,
          Dr = 0,
          m = 1,
          z = 2,
          Wr = 3,
          Kr = 4,
          $r = 5,
          Qr = 1,
          Yr = 2,
          Jr = 3,
          Nt = 0,
          Xr = 1,
          Zr = 2,
          Hr = 3,
          Ft = 4,
          Vr = 5,
          Pr = 0,
          qr = 1,
          Rr = 2,
          Gr = 0,
          Cr = 1,
          _r = 2,
          sr = 3,
          kr = 4,
          gr = 5,
          Mr = 6,
          rt = 7,
          tt = 8,
          it = 9,
          lt = 10,
          mt = 11,
          ct = 12,
          nt = 13,
          xr = 0,
          ut = 1,
          Kt = 2,
          ot = 3,
          dt = 4,
          ft = 5,
          Bt = 6,
          ht = 7,
          $t = 8,
          yt = 0,
          Qt = 1,
          Yt = 2,
          Jt = 3,
          Xt = 4,
          Zt = 5,
          Ht = 6;
        function Vt(a) {
          return "unknown EMarketingMessageType ( " + a + " )";
        }
        function Pt(a) {
          return "unknown EMarketingMessageAssociationType ( " + a + " )";
        }
        function qt(a) {
          return "unknown EMarketingMessageVisibility ( " + a + " )";
        }
        function Rt(a) {
          return "unknown EMarketingMessageLookupType ( " + a + " )";
        }
        function Gt(a) {
          return "unknown EMarketingMessageValidRealms ( " + a + " )";
        }
        function Ct(a) {
          return "unknown EMarketingMessageFilterType ( " + a + " )";
        }
        function _t(a) {
          return "unknown EMarketingMessageTemplateType ( " + a + " )";
        }
        function st(a) {
          return "unknown EMarketingMessageClickLocation ( " + a + " )";
        }
        class I extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              I.prototype.gid || t.Sg(I.M()),
              u.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              I.sm_m ||
                (I.sm_m = {
                  proto: I,
                  fields: {
                    gid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    title: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                    type: { n: 3, br: t.qM.readEnum, bw: t.gp.writeEnum },
                    visibility: { n: 4, br: t.qM.readEnum, bw: t.gp.writeEnum },
                    priority: {
                      n: 5,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    association_type: {
                      n: 6,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    associated_id: {
                      n: 7,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    associated_name: {
                      n: 8,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    start_date: {
                      n: 9,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    end_date: {
                      n: 10,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    country_allow: {
                      n: 11,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    country_deny: {
                      n: 12,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    ownership_restrictions_overridden: {
                      n: 13,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    must_own_appid: {
                      n: 14,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    must_not_own_appid: {
                      n: 15,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    must_own_packageid: {
                      n: 16,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    must_not_own_packageid: {
                      n: 17,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    must_have_launched_appid: {
                      n: 18,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    additional_restrictions: {
                      n: 19,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    template_type: {
                      n: 20,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    template_vars: {
                      n: 21,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    flags: { n: 22, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    creator_name: {
                      n: 23,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    template_vars_json: {
                      n: 24,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    additional_restrictions_json: {
                      n: 25,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              I.sm_m
            );
          }
          static MBF() {
            return I.sm_mbf || (I.sm_mbf = t.w0(I.M())), I.sm_mbf;
          }
          toObject(r = !1) {
            return I.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(I.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(I.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (c().BinaryReader)(r),
              o = new I();
            return I.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(I.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return I.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(I.M(), r, i);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              I.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMarketingMessageProto";
          }
        }
        class A extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              A.prototype.gid || t.Sg(A.M()),
              u.Message.initialize(this, r, 0, -1, [12], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              A.sm_m ||
                (A.sm_m = {
                  proto: A,
                  fields: {
                    gid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    title: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                    type: { n: 3, br: t.qM.readEnum, bw: t.gp.writeEnum },
                    associated_item_id: { n: 4, c: yr.O4 },
                    associated_item: { n: 5, c: yr.vB },
                    associated_name: {
                      n: 6,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    template_type: {
                      n: 10,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    template_vars_json: {
                      n: 11,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    recommended_items: { n: 12, c: yr.O4, r: !0, q: !0 },
                  },
                }),
              A.sm_m
            );
          }
          static MBF() {
            return A.sm_mbf || (A.sm_mbf = t.w0(A.M())), A.sm_mbf;
          }
          toObject(r = !1) {
            return A.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(A.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(A.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (c().BinaryReader)(r),
              o = new A();
            return A.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(A.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return A.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(A.M(), r, i);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              A.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CDisplayMarketingMessage";
          }
        }
        class V extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              V.prototype.country || t.Sg(V.M()),
              u.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              V.sm_m ||
                (V.sm_m = {
                  proto: V,
                  fields: {
                    country: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    anonymous_user: {
                      n: 2,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              V.sm_m
            );
          }
          static MBF() {
            return V.sm_mbf || (V.sm_mbf = t.w0(V.M())), V.sm_mbf;
          }
          toObject(r = !1) {
            return V.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(V.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(V.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (c().BinaryReader)(r),
              o = new V();
            return V.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(V.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return V.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(V.M(), r, i);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              V.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMarketingMessages_GetActiveMarketingMessages_Request";
          }
        }
        class P extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              P.prototype.messages || t.Sg(P.M()),
              u.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              P.sm_m ||
                (P.sm_m = {
                  proto: P,
                  fields: {
                    messages: { n: 1, c: I, r: !0, q: !0 },
                    time_next_message_age: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              P.sm_m
            );
          }
          static MBF() {
            return P.sm_mbf || (P.sm_mbf = t.w0(P.M())), P.sm_mbf;
          }
          toObject(r = !1) {
            return P.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(P.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(P.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (c().BinaryReader)(r),
              o = new P();
            return P.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(P.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return P.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(P.M(), r, i);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              P.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMarketingMessages_GetActiveMarketingMessages_Response";
          }
        }
        class v extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              v.prototype.start_past_days || t.Sg(v.M()),
              u.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              v.sm_m ||
                (v.sm_m = {
                  proto: v,
                  fields: {
                    start_past_days: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    upto_past_days: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              v.sm_m
            );
          }
          static MBF() {
            return v.sm_mbf || (v.sm_mbf = t.w0(v.M())), v.sm_mbf;
          }
          toObject(r = !1) {
            return v.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(v.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(v.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (c().BinaryReader)(r),
              o = new v();
            return v.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(v.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return v.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(v.M(), r, i);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              v.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMarketingMessages_GetPastMarketingMessages_Request";
          }
        }
        class q extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              q.prototype.messages || t.Sg(q.M()),
              u.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              q.sm_m ||
                (q.sm_m = {
                  proto: q,
                  fields: { messages: { n: 1, c: I, r: !0, q: !0 } },
                }),
              q.sm_m
            );
          }
          static MBF() {
            return q.sm_mbf || (q.sm_mbf = t.w0(q.M())), q.sm_mbf;
          }
          toObject(r = !1) {
            return q.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(q.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(q.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (c().BinaryReader)(r),
              o = new q();
            return q.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(q.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return q.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(q.M(), r, i);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              q.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMarketingMessages_GetPastMarketingMessages_Response";
          }
        }
        class D extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              D.prototype.include_seen_messages || t.Sg(D.M()),
              u.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              D.sm_m ||
                (D.sm_m = {
                  proto: D,
                  fields: {
                    include_seen_messages: {
                      n: 1,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    country_code: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    elanguage: {
                      n: 3,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    operating_system: {
                      n: 4,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    client_package_version: {
                      n: 5,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    context: { n: 6, c: yr.TS },
                    data_request: { n: 7, c: yr.gn },
                  },
                }),
              D.sm_m
            );
          }
          static MBF() {
            return D.sm_mbf || (D.sm_mbf = t.w0(D.M())), D.sm_mbf;
          }
          toObject(r = !1) {
            return D.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(D.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(D.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (c().BinaryReader)(r),
              o = new D();
            return D.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(D.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return D.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(D.M(), r, i);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              D.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMarketingMessages_GetMarketingMessagesForUser_Request";
          }
        }
        class R extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              R.prototype.messages || t.Sg(R.M()),
              u.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              R.sm_m ||
                (R.sm_m = {
                  proto: R,
                  fields: { messages: { n: 1, c: G, r: !0, q: !0 } },
                }),
              R.sm_m
            );
          }
          static MBF() {
            return R.sm_mbf || (R.sm_mbf = t.w0(R.M())), R.sm_mbf;
          }
          toObject(r = !1) {
            return R.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(R.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(R.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (c().BinaryReader)(r),
              o = new R();
            return R.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(R.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return R.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(R.M(), r, i);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              R.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMarketingMessages_GetMarketingMessagesForUser_Response";
          }
        }
        class G extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              G.prototype.already_seen || t.Sg(G.M()),
              u.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              G.sm_m ||
                (G.sm_m = {
                  proto: G,
                  fields: {
                    already_seen: {
                      n: 1,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    message: { n: 2, c: A },
                  },
                }),
              G.sm_m
            );
          }
          static MBF() {
            return G.sm_mbf || (G.sm_mbf = t.w0(G.M())), G.sm_mbf;
          }
          toObject(r = !1) {
            return G.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(G.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(G.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (c().BinaryReader)(r),
              o = new G();
            return G.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(G.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return G.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(G.M(), r, i);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              G.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMarketingMessages_GetMarketingMessagesForUser_Response_MarketingMessageForUser";
          }
        }
        class C extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              C.prototype.country_code || t.Sg(C.M()),
              u.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              C.sm_m ||
                (C.sm_m = {
                  proto: C,
                  fields: {
                    country_code: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    elanguage: {
                      n: 3,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    operating_system: {
                      n: 4,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    client_package_version: {
                      n: 5,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                  },
                }),
              C.sm_m
            );
          }
          static MBF() {
            return C.sm_mbf || (C.sm_mbf = t.w0(C.M())), C.sm_mbf;
          }
          toObject(r = !1) {
            return C.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(C.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(C.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (c().BinaryReader)(r),
              o = new C();
            return C.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(C.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return C.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(C.M(), r, i);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              C.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMarketingMessages_DoesUserHavePendingMarketingMessages_Request";
          }
        }
        class _ extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              _.prototype.has_pending_messages || t.Sg(_.M()),
              u.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    has_pending_messages: {
                      n: 1,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    pending_message_count: {
                      n: 2,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = t.w0(_.M())), _.sm_mbf;
          }
          toObject(r = !1) {
            return _.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(_.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(_.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (c().BinaryReader)(r),
              o = new _();
            return _.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(_.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return _.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(_.M(), r, i);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMarketingMessages_DoesUserHavePendingMarketingMessages_Response";
          }
        }
        class j extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              j.prototype.gid || t.Sg(j.M()),
              u.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              j.sm_m ||
                (j.sm_m = {
                  proto: j,
                  fields: {
                    gid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    context: { n: 2, c: yr.TS },
                    data_request: { n: 3, c: yr.gn },
                  },
                }),
              j.sm_m
            );
          }
          static MBF() {
            return j.sm_mbf || (j.sm_mbf = t.w0(j.M())), j.sm_mbf;
          }
          toObject(r = !1) {
            return j.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(j.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(j.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (c().BinaryReader)(r),
              o = new j();
            return j.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(j.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return j.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(j.M(), r, i);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              j.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMarketingMessages_GetDisplayMarketingMessage_Request";
          }
        }
        class L extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              L.prototype.message || t.Sg(L.M()),
              u.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              L.sm_m ||
                (L.sm_m = { proto: L, fields: { message: { n: 1, c: A } } }),
              L.sm_m
            );
          }
          static MBF() {
            return L.sm_mbf || (L.sm_mbf = t.w0(L.M())), L.sm_mbf;
          }
          toObject(r = !1) {
            return L.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(L.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(L.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (c().BinaryReader)(r),
              o = new L();
            return L.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(L.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return L.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(L.M(), r, i);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              L.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMarketingMessages_GetDisplayMarketingMessage_Response";
          }
        }
        class x extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              x.prototype.gid || t.Sg(x.M()),
              u.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              x.sm_m ||
                (x.sm_m = {
                  proto: x,
                  fields: {
                    gid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    display_index: {
                      n: 2,
                      d: 0,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    template_type: {
                      n: 3,
                      d: xr,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                  },
                }),
              x.sm_m
            );
          }
          static MBF() {
            return x.sm_mbf || (x.sm_mbf = t.w0(x.M())), x.sm_mbf;
          }
          toObject(r = !1) {
            return x.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(x.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(x.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (c().BinaryReader)(r),
              o = new x();
            return x.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(x.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return x.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(x.M(), r, i);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              x.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMarketingMessages_MarkMessageSeen_Notification";
          }
        }
        class s extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              s.prototype.gid || t.Sg(s.M()),
              u.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              s.sm_m ||
                (s.sm_m = {
                  proto: s,
                  fields: {
                    gid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    display_index: {
                      n: 2,
                      d: 0,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    template_type: {
                      n: 3,
                      d: xr,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    click_location: {
                      n: 4,
                      d: yt,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                  },
                }),
              s.sm_m
            );
          }
          static MBF() {
            return s.sm_mbf || (s.sm_mbf = t.w0(s.M())), s.sm_mbf;
          }
          toObject(r = !1) {
            return s.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(s.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(s.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (c().BinaryReader)(r),
              o = new s();
            return s.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(s.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return s.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(s.M(), r, i);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              s.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMarketingMessages_MarkMessageClicked_Notification";
          }
        }
        class k extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              k.prototype.gid || t.Sg(k.M()),
              u.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              k.sm_m ||
                (k.sm_m = {
                  proto: k,
                  fields: {
                    gid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              k.sm_m
            );
          }
          static MBF() {
            return k.sm_mbf || (k.sm_mbf = t.w0(k.M())), k.sm_mbf;
          }
          toObject(r = !1) {
            return k.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(k.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(k.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (c().BinaryReader)(r),
              o = new k();
            return k.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(k.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return k.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(k.M(), r, i);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              k.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMarketingMessages_GetMarketingMessage_Request";
          }
        }
        class g extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              g.prototype.message || t.Sg(g.M()),
              u.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              g.sm_m ||
                (g.sm_m = { proto: g, fields: { message: { n: 1, c: I } } }),
              g.sm_m
            );
          }
          static MBF() {
            return g.sm_mbf || (g.sm_mbf = t.w0(g.M())), g.sm_mbf;
          }
          toObject(r = !1) {
            return g.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(g.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(g.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (c().BinaryReader)(r),
              o = new g();
            return g.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(g.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return g.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(g.M(), r, i);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              g.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMarketingMessages_GetMarketingMessage_Response";
          }
        }
        class U extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              U.prototype.lookup_type || t.Sg(U.M()),
              u.Message.initialize(this, r, 0, -1, [4], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              U.sm_m ||
                (U.sm_m = {
                  proto: U,
                  fields: {
                    lookup_type: {
                      n: 1,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    gid: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    message_type: {
                      n: 3,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    gidlist: {
                      n: 4,
                      r: !0,
                      q: !0,
                      br: t.qM.readFixed64String,
                      pbr: t.qM.readPackedFixed64String,
                      bw: t.gp.writeRepeatedFixed64String,
                    },
                    title: { n: 5, br: t.qM.readString, bw: t.gp.writeString },
                    associated_id: {
                      n: 6,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              U.sm_m
            );
          }
          static MBF() {
            return U.sm_mbf || (U.sm_mbf = t.w0(U.M())), U.sm_mbf;
          }
          toObject(r = !1) {
            return U.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(U.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(U.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (c().BinaryReader)(r),
              o = new U();
            return U.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(U.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return U.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(U.M(), r, i);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              U.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMarketingMessages_FindMarketingMessages_Request";
          }
        }
        class M extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              M.prototype.messages || t.Sg(M.M()),
              u.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              M.sm_m ||
                (M.sm_m = {
                  proto: M,
                  fields: { messages: { n: 1, c: I, r: !0, q: !0 } },
                }),
              M.sm_m
            );
          }
          static MBF() {
            return M.sm_mbf || (M.sm_mbf = t.w0(M.M())), M.sm_mbf;
          }
          toObject(r = !1) {
            return M.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(M.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(M.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (c().BinaryReader)(r),
              o = new M();
            return M.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(M.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return M.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(M.M(), r, i);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              M.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMarketingMessages_FindMarketingMessages_Response";
          }
        }
        class N extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              N.prototype.message || t.Sg(N.M()),
              u.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              N.sm_m ||
                (N.sm_m = {
                  proto: N,
                  fields: {
                    message: { n: 1, c: I },
                    from_json: { n: 2, br: t.qM.readBool, bw: t.gp.writeBool },
                  },
                }),
              N.sm_m
            );
          }
          static MBF() {
            return N.sm_mbf || (N.sm_mbf = t.w0(N.M())), N.sm_mbf;
          }
          toObject(r = !1) {
            return N.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(N.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(N.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (c().BinaryReader)(r),
              o = new N();
            return N.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(N.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return N.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(N.M(), r, i);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              N.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMarketingMessages_CreateMarketingMessage_Request";
          }
        }
        class rr extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              rr.prototype.gid || t.Sg(rr.M()),
              u.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              rr.sm_m ||
                (rr.sm_m = {
                  proto: rr,
                  fields: {
                    gid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              rr.sm_m
            );
          }
          static MBF() {
            return rr.sm_mbf || (rr.sm_mbf = t.w0(rr.M())), rr.sm_mbf;
          }
          toObject(r = !1) {
            return rr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(rr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(rr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (c().BinaryReader)(r),
              o = new rr();
            return rr.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(rr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return rr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(rr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              rr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMarketingMessages_CreateMarketingMessage_Response";
          }
        }
        class F extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              F.prototype.gid || t.Sg(F.M()),
              u.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              F.sm_m ||
                (F.sm_m = {
                  proto: F,
                  fields: {
                    gid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    message: { n: 2, c: I },
                    from_json: { n: 3, br: t.qM.readBool, bw: t.gp.writeBool },
                  },
                }),
              F.sm_m
            );
          }
          static MBF() {
            return F.sm_mbf || (F.sm_mbf = t.w0(F.M())), F.sm_mbf;
          }
          toObject(r = !1) {
            return F.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(F.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(F.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (c().BinaryReader)(r),
              o = new F();
            return F.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(F.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return F.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(F.M(), r, i);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              F.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMarketingMessages_UpdateMarketingMessage_Request";
          }
        }
        class Ir extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), u.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Ir.toObject(r, this);
          }
          static toObject(r, i) {
            return r ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(r) {
            return new Ir();
          }
          static deserializeBinary(r) {
            let i = new (c().BinaryReader)(r),
              o = new Ir();
            return Ir.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return r;
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return Ir.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {}
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              Ir.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMarketingMessages_UpdateMarketingMessage_Response";
          }
        }
        class K extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              K.prototype.gid || t.Sg(K.M()),
              u.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              K.sm_m ||
                (K.sm_m = {
                  proto: K,
                  fields: {
                    gid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              K.sm_m
            );
          }
          static MBF() {
            return K.sm_mbf || (K.sm_mbf = t.w0(K.M())), K.sm_mbf;
          }
          toObject(r = !1) {
            return K.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(K.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(K.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (c().BinaryReader)(r),
              o = new K();
            return K.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(K.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return K.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(K.M(), r, i);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              K.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMarketingMessages_DeleteMarketingMessage_Request";
          }
        }
        class Or extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), u.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Or.toObject(r, this);
          }
          static toObject(r, i) {
            return r ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(r) {
            return new Or();
          }
          static deserializeBinary(r) {
            let i = new (c().BinaryReader)(r),
              o = new Or();
            return Or.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return r;
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return Or.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {}
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              Or.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMarketingMessages_DeleteMarketingMessage_Response";
          }
        }
        class $ extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              $.prototype.gid || t.Sg($.M()),
              u.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $.sm_m ||
                ($.sm_m = {
                  proto: $,
                  fields: {
                    gid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              $.sm_m
            );
          }
          static MBF() {
            return $.sm_mbf || ($.sm_mbf = t.w0($.M())), $.sm_mbf;
          }
          toObject(r = !1) {
            return $.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT($.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq($.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (c().BinaryReader)(r),
              o = new $();
            return $.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj($.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return $.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0($.M(), r, i);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              $.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMarketingMessages_GetMarketingMessageViewerStats_Request";
          }
        }
        class Q extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Q.prototype.rt_time_hour || t.Sg(Q.M()),
              u.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Q.sm_m ||
                (Q.sm_m = {
                  proto: Q,
                  fields: {
                    rt_time_hour: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    seen_count: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    template_type: {
                      n: 3,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    display_index: {
                      n: 4,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              Q.sm_m
            );
          }
          static MBF() {
            return Q.sm_mbf || (Q.sm_mbf = t.w0(Q.M())), Q.sm_mbf;
          }
          toObject(r = !1) {
            return Q.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Q.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Q.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (c().BinaryReader)(r),
              o = new Q();
            return Q.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Q.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return Q.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Q.M(), r, i);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              Q.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMarketingMessageHourlyStats";
          }
        }
        class tr extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              tr.prototype.stats || t.Sg(tr.M()),
              u.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              tr.sm_m ||
                (tr.sm_m = {
                  proto: tr,
                  fields: { stats: { n: 1, c: Q, r: !0, q: !0 } },
                }),
              tr.sm_m
            );
          }
          static MBF() {
            return tr.sm_mbf || (tr.sm_mbf = t.w0(tr.M())), tr.sm_mbf;
          }
          toObject(r = !1) {
            return tr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(tr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(tr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (c().BinaryReader)(r),
              o = new tr();
            return tr.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(tr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return tr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(tr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              tr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMarketingMessages_GetMarketingMessageViewerStats_Response";
          }
        }
        class Y extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Y.prototype.rt_start_time || t.Sg(Y.M()),
              u.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Y.sm_m ||
                (Y.sm_m = {
                  proto: Y,
                  fields: {
                    rt_start_time: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    rt_end_time: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              Y.sm_m
            );
          }
          static MBF() {
            return Y.sm_mbf || (Y.sm_mbf = t.w0(Y.M())), Y.sm_mbf;
          }
          toObject(r = !1) {
            return Y.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Y.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Y.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (c().BinaryReader)(r),
              o = new Y();
            return Y.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Y.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return Y.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Y.M(), r, i);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              Y.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMarketingMessages_GetMarketingMessagesViewerRangeStats_Request";
          }
        }
        class J extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              J.prototype.rt_time_hour || t.Sg(J.M()),
              u.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              J.sm_m ||
                (J.sm_m = {
                  proto: J,
                  fields: {
                    rt_time_hour: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    clicked_count: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    display_index: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    template_type: {
                      n: 4,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    click_location: {
                      n: 5,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                  },
                }),
              J.sm_m
            );
          }
          static MBF() {
            return J.sm_mbf || (J.sm_mbf = t.w0(J.M())), J.sm_mbf;
          }
          toObject(r = !1) {
            return J.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(J.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(J.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (c().BinaryReader)(r),
              o = new J();
            return J.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(J.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return J.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(J.M(), r, i);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              J.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMarketingMessageClickedHourlyStats";
          }
        }
        class ir extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ir.prototype.stats || t.Sg(ir.M()),
              u.Message.initialize(this, r, 0, -1, [1, 2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ir.sm_m ||
                (ir.sm_m = {
                  proto: ir,
                  fields: {
                    stats: { n: 1, c: Q, r: !0, q: !0 },
                    clicked_stats: { n: 2, c: J, r: !0, q: !0 },
                  },
                }),
              ir.sm_m
            );
          }
          static MBF() {
            return ir.sm_mbf || (ir.sm_mbf = t.w0(ir.M())), ir.sm_mbf;
          }
          toObject(r = !1) {
            return ir.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(ir.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(ir.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (c().BinaryReader)(r),
              o = new ir();
            return ir.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(ir.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return ir.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(ir.M(), r, i);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              ir.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMarketingMessages_GetMarketingMessagesViewerRangeStats_Response";
          }
        }
        class X extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              X.prototype.gid || t.Sg(X.M()),
              u.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              X.sm_m ||
                (X.sm_m = {
                  proto: X,
                  fields: {
                    gid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              X.sm_m
            );
          }
          static MBF() {
            return X.sm_mbf || (X.sm_mbf = t.w0(X.M())), X.sm_mbf;
          }
          toObject(r = !1) {
            return X.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(X.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(X.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (c().BinaryReader)(r),
              o = new X();
            return X.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(X.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return X.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(X.M(), r, i);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              X.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMarketingMessages_GetMarketingMessageClickedStats_Request";
          }
        }
        class lr extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              lr.prototype.stats || t.Sg(lr.M()),
              u.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              lr.sm_m ||
                (lr.sm_m = {
                  proto: lr,
                  fields: { stats: { n: 1, c: J, r: !0, q: !0 } },
                }),
              lr.sm_m
            );
          }
          static MBF() {
            return lr.sm_mbf || (lr.sm_mbf = t.w0(lr.M())), lr.sm_mbf;
          }
          toObject(r = !1) {
            return lr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(lr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(lr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (c().BinaryReader)(r),
              o = new lr();
            return lr.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(lr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return lr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(lr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              lr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMarketingMessages_GetMarketingMessageClickedStats_Response";
          }
        }
        class mr extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              mr.prototype.partnerid || t.Sg(mr.M()),
              u.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              mr.sm_m ||
                (mr.sm_m = {
                  proto: mr,
                  fields: {
                    partnerid: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              mr.sm_m
            );
          }
          static MBF() {
            return mr.sm_mbf || (mr.sm_mbf = t.w0(mr.M())), mr.sm_mbf;
          }
          toObject(r = !1) {
            return mr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(mr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(mr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (c().BinaryReader)(r),
              o = new mr();
            return mr.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(mr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return mr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(mr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              mr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMarketingMessages_GetPartnerReadyToPublishMessages_Request";
          }
        }
        class cr extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              cr.prototype.messages || t.Sg(cr.M()),
              u.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              cr.sm_m ||
                (cr.sm_m = {
                  proto: cr,
                  fields: { messages: { n: 1, c: A, r: !0, q: !0 } },
                }),
              cr.sm_m
            );
          }
          static MBF() {
            return cr.sm_mbf || (cr.sm_mbf = t.w0(cr.M())), cr.sm_mbf;
          }
          toObject(r = !1) {
            return cr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(cr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(cr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (c().BinaryReader)(r),
              o = new cr();
            return cr.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(cr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return cr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(cr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              cr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMarketingMessages_GetPartnerReadyToPublishMessages_Response";
          }
        }
        class Z extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Z.prototype.gid || t.Sg(Z.M()),
              u.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Z.sm_m ||
                (Z.sm_m = {
                  proto: Z,
                  fields: {
                    gid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    partnerid: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              Z.sm_m
            );
          }
          static MBF() {
            return Z.sm_mbf || (Z.sm_mbf = t.w0(Z.M())), Z.sm_mbf;
          }
          toObject(r = !1) {
            return Z.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Z.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Z.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (c().BinaryReader)(r),
              o = new Z();
            return Z.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Z.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return Z.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Z.M(), r, i);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              Z.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMarketingMessages_PartnerPublishMessage_Request";
          }
        }
        class Sr extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), u.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Sr.toObject(r, this);
          }
          static toObject(r, i) {
            return r ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(r) {
            return new Sr();
          }
          static deserializeBinary(r) {
            let i = new (c().BinaryReader)(r),
              o = new Sr();
            return Sr.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return r;
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return Sr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {}
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              Sr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMarketingMessages_PartnerPublishMessage_Response";
          }
        }
        class H extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              H.prototype.gid || t.Sg(H.M()),
              u.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              H.sm_m ||
                (H.sm_m = {
                  proto: H,
                  fields: {
                    gid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    partnerid: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              H.sm_m
            );
          }
          static MBF() {
            return H.sm_mbf || (H.sm_mbf = t.w0(H.M())), H.sm_mbf;
          }
          toObject(r = !1) {
            return H.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(H.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(H.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (c().BinaryReader)(r),
              o = new H();
            return H.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(H.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return H.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(H.M(), r, i);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              H.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMarketingMessages_GetPartnerMessagePreview_Request";
          }
        }
        class nr extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              nr.prototype.message || t.Sg(nr.M()),
              u.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              nr.sm_m ||
                (nr.sm_m = { proto: nr, fields: { message: { n: 1, c: I } } }),
              nr.sm_m
            );
          }
          static MBF() {
            return nr.sm_mbf || (nr.sm_mbf = t.w0(nr.M())), nr.sm_mbf;
          }
          toObject(r = !1) {
            return nr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(nr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(nr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (c().BinaryReader)(r),
              o = new nr();
            return nr.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(nr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return nr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(nr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              nr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMarketingMessages_GetPartnerMessagePreview_Response";
          }
        }
        class ur extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ur.prototype.appids || t.Sg(ur.M()),
              u.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ur.sm_m ||
                (ur.sm_m = {
                  proto: ur,
                  fields: {
                    appids: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: t.qM.readUint32,
                      pbr: t.qM.readPackedUint32,
                      bw: t.gp.writeRepeatedUint32,
                    },
                  },
                }),
              ur.sm_m
            );
          }
          static MBF() {
            return ur.sm_mbf || (ur.sm_mbf = t.w0(ur.M())), ur.sm_mbf;
          }
          toObject(r = !1) {
            return ur.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(ur.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(ur.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (c().BinaryReader)(r),
              o = new ur();
            return ur.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(ur.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return ur.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(ur.M(), r, i);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              ur.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMarketingMessage_GetMarketingMessagesForApps_Request";
          }
        }
        class or extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              or.prototype.messages || t.Sg(or.M()),
              u.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              or.sm_m ||
                (or.sm_m = {
                  proto: or,
                  fields: { messages: { n: 1, c: I, r: !0, q: !0 } },
                }),
              or.sm_m
            );
          }
          static MBF() {
            return or.sm_mbf || (or.sm_mbf = t.w0(or.M())), or.sm_mbf;
          }
          toObject(r = !1) {
            return or.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(or.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(or.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (c().BinaryReader)(r),
              o = new or();
            return or.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(or.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return or.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(or.M(), r, i);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              or.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMarketingMessage_GetMarketingMessagesForApps_Response";
          }
        }
        class dr extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              dr.prototype.partnerid || t.Sg(dr.M()),
              u.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              dr.sm_m ||
                (dr.sm_m = {
                  proto: dr,
                  fields: {
                    partnerid: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              dr.sm_m
            );
          }
          static MBF() {
            return dr.sm_mbf || (dr.sm_mbf = t.w0(dr.M())), dr.sm_mbf;
          }
          toObject(r = !1) {
            return dr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(dr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(dr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (c().BinaryReader)(r),
              o = new dr();
            return dr.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(dr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return dr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(dr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              dr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMarketingMessage_GetMarketingMessagesForPartner_Request";
          }
        }
        class fr extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              fr.prototype.messages || t.Sg(fr.M()),
              u.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              fr.sm_m ||
                (fr.sm_m = {
                  proto: fr,
                  fields: { messages: { n: 1, c: I, r: !0, q: !0 } },
                }),
              fr.sm_m
            );
          }
          static MBF() {
            return fr.sm_mbf || (fr.sm_mbf = t.w0(fr.M())), fr.sm_mbf;
          }
          toObject(r = !1) {
            return fr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(fr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(fr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (c().BinaryReader)(r),
              o = new fr();
            return fr.deserializeBinaryFromReader(o, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(fr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return fr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(fr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              fr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMarketingMessage_GetMarketingMessagesForPartner_Response";
          }
        }
        var Ur;
        ((a) => {
          function r(b, p, e) {
            return b.SendMsg(
              "MarketingMessages.GetActiveMarketingMessages#1",
              (0, T.I8)(V, p, e),
              P,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          a.GetActiveMarketingMessages = r;
          function i(b, p, e) {
            return b.SendMsg(
              "MarketingMessages.GetPastMarketingMessages#1",
              (0, T.I8)(v, p, e),
              q,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          }
          a.GetPastMarketingMessages = i;
          function o(b, p, e) {
            return b.SendMsg(
              "MarketingMessages.GetMarketingMessagesForUser#1",
              (0, T.I8)(D, p, e),
              R,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          a.GetMarketingMessagesForUser = o;
          function bt(b, p, e) {
            return b.SendMsg(
              "MarketingMessages.DoesUserHavePendingMarketingMessages#1",
              (0, T.I8)(C, p, e),
              _,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          a.DoesUserHavePendingMarketingMessages = bt;
          function pt(b, p, e) {
            return b.SendMsg(
              "MarketingMessages.GetDisplayMarketingMessage#1",
              (0, T.I8)(j, p, e),
              L,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          a.GetDisplayMarketingMessage = pt;
          function et(b, p, e) {
            return b.SendMsg(
              "MarketingMessages.GetDisplayMarketingMessageForUser#1",
              (0, T.I8)(j, p, e),
              L,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          a.GetDisplayMarketingMessageForUser = et;
          function at(b, p, e) {
            return b.SendMsg(
              "MarketingMessages.GetDisplayMarketingMessageAdmin#1",
              (0, T.I8)(j, p, e),
              L,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          }
          a.GetDisplayMarketingMessageAdmin = at;
          function Tt(b, p) {
            return b.SendNotification(
              "MarketingMessages.MarkMessageSeen#1",
              (0, T.I8)(x, p),
              { ePrivilege: 1 },
            );
          }
          a.MarkMessageSeen = Tt;
          function wt(b, p) {
            return b.SendNotification(
              "MarketingMessages.MarkMessageClicked#1",
              (0, T.I8)(s, p),
              { ePrivilege: 1 },
            );
          }
          a.MarkMessageClicked = wt;
          function zt(b, p, e) {
            return b.SendMsg(
              "MarketingMessages.GetMarketingMessage#1",
              (0, T.I8)(k, p, e),
              g,
              { ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          a.GetMarketingMessage = zt;
          function It(b, p, e) {
            return b.SendMsg(
              "MarketingMessages.CreateMarketingMessage#1",
              (0, T.I8)(N, p, e),
              rr,
              { ePrivilege: 4 },
            );
          }
          a.CreateMarketingMessage = It;
          function Ot(b, p, e) {
            return b.SendMsg(
              "MarketingMessages.UpdateMarketingMessage#1",
              (0, T.I8)(F, p, e),
              Ir,
              { ePrivilege: 5 },
            );
          }
          a.UpdateMarketingMessage = Ot;
          function St(b, p, e) {
            return b.SendMsg(
              "MarketingMessages.DeleteMarketingMessage#1",
              (0, T.I8)(K, p, e),
              Or,
              { ePrivilege: 4 },
            );
          }
          a.DeleteMarketingMessage = St;
          function Wt(b, p, e) {
            return b.SendMsg(
              "MarketingMessages.FindMarketingMessages#1",
              (0, T.I8)(U, p, e),
              M,
              { ePrivilege: 5 },
            );
          }
          a.FindMarketingMessages = Wt;
          function jt(b, p, e) {
            return b.SendMsg(
              "MarketingMessages.GetMarketingMessageViewerStats#1",
              (0, T.I8)($, p, e),
              tr,
              { ePrivilege: 4 },
            );
          }
          a.GetMarketingMessageViewerStats = jt;
          function Et(b, p, e) {
            return b.SendMsg(
              "MarketingMessages.GetMarketingMessagesViewerRangeStats#1",
              (0, T.I8)(Y, p, e),
              ir,
              { ePrivilege: 4 },
            );
          }
          a.GetMarketingMessagesViewerRangeStats = Et;
          function At(b, p, e) {
            return b.SendMsg(
              "MarketingMessages.GetMarketingMessageClickedStats#1",
              (0, T.I8)(X, p, e),
              lr,
              { ePrivilege: 4 },
            );
          }
          a.GetMarketingMessageClickedStats = At;
          function Lt(b, p, e) {
            return b.SendMsg(
              "MarketingMessages.GetPartnerReadyToPublishMessages#1",
              (0, T.I8)(mr, p, e),
              cr,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          a.GetPartnerReadyToPublishMessages = Lt;
          function vt(b, p, e) {
            return b.SendMsg(
              "MarketingMessages.PublishPartnerMessage#1",
              (0, T.I8)(Z, p, e),
              Sr,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          a.PublishPartnerMessage = vt;
          function Dt(b, p, e) {
            return b.SendMsg(
              "MarketingMessages.GetPartnerMessagePreview#1",
              (0, T.I8)(H, p, e),
              nr,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          a.GetPartnerMessagePreview = Dt;
          function xt(b, p, e) {
            return b.SendMsg(
              "MarketingMessages.GetMarketingMessagesForPartner#1",
              (0, T.I8)(dr, p, e),
              fr,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          a.GetMarketingMessagesForPartner = xt;
          function Ut(b, p, e) {
            return b.SendMsg(
              "MarketingMessages.GetMarketingMessagesForApps#1",
              (0, T.I8)(ur, p, e),
              or,
              { ePrivilege: 4 },
            );
          }
          a.GetMarketingMessagesForApps = Ut;
        })(Ur || (Ur = {}));
      },
      25046: (jr, wr, f) => {
        f.d(wr, {
          M4: () => t,
          TH: () => ar,
          Wv: () => yr,
          hg: () => zr,
          hl: () => c,
          kB: () => O,
        });
        var h = f(7850),
          d = f(72609),
          hr = f(40358),
          er = f(41032);
        function O(w, W) {
          const { data: E } = (0, hr.Yo)(w),
            S = (0, er.dy)();
          if (E === void 0) return;
          if (E === null) return null;
          const y = [...(E.highlights || []), ...(E.other_trailers || [])];
          return S && !W ? y.filter((l) => !!l.all_ages) : y;
        }
        function pr(w, W, E, S) {
          const y = O(w, S);
          if (!(!y || y.length == 0))
            return W
              ? y.find((l) => l.trailer_base_id === W)
              : E
                ? y[0]
                : void 0;
        }
        function ar(w) {
          let W = O(w);
          if (!(!W || W.length == 0)) return W[0];
        }
        function u(w) {
          const { trailer: W, ...E } = w,
            S = c(W);
          return jsx("img", { ...E, src: S, alt: W.trailer_name });
        }
        function c(w) {
          return `${d.TS.STORE_ITEM_BASE_URL}${w.trailer_url_format.replace("${FILENAME}", w.screenshot_full ?? w.screenshot_medium ?? "")}`;
        }
        function t(w, W) {
          return `${d.TS.VIDEO_CDN_URL}store_trailers/${w.trailer_url_format.replace("${FILENAME}", W)}`;
        }
        function T(w, W) {
          return `${d.TS.VIDEO_CDN_URL}store_trailers/${W}`;
        }
        function yr(w) {
          let W =
            typeof w.captions_manifest == "function"
              ? w.captions_manifest()
              : w.captions_manifest;
          if (!W) return;
          let E = d.TS,
            S;
          if (
            (E.MEDIA_CDN_URL
              ? (S = E.MEDIA_CDN_URL)
              : E.CDN_HOST_MEDIA && (S = E.CDN_HOST_MEDIA),
            !!S)
          )
            return `${S}/${W}`;
        }
        function zr(w) {
          let W = [];
          w.adaptive_trailers &&
            (W = w.adaptive_trailers
              .filter(
                (S) =>
                  (S.encoding == "dash_h264" || S.encoding == "dash_av1") &&
                  S.cdn_path,
              )
              .map((S) => T(w, S.cdn_path || "")));
          let E = [];
          return (
            w.adaptive_trailers &&
              (E = w.adaptive_trailers
                .filter((S) => S.encoding == "hls_h264" && S.cdn_path)
                .map((S) => T(w, S.cdn_path || ""))),
            { rgDashTrailers: W, rgHlsTrailers: E }
          );
        }
      },
      41032: (jr, wr, f) => {
        f.d(wr, { Zj: () => l, dy: () => yr });
        var h = f(90626),
          d = f(98609),
          hr = f(18735),
          er = f(36174),
          O = f(97996),
          pr = f(20194),
          ar = f(40358);
        const u = h.createContext({ eAdultOnlyMediaBehavior: "masked" });
        function c(n) {
          const { eAdultOnlyMediaBehavior: B, children: Br } = n,
            br = React.useMemo(() => ({ eAdultOnlyMediaBehavior: B }), [B]);
          return React.createElement(u.Provider, { value: br }, Br);
        }
        function t() {
          return h.useMemo(() => {
            const n = (0, O.VY)("forceallages");
            return !!(
              (n && n !== "0") ||
              (d.TS.IN_MOBILE_WEBVIEW && navigator.userAgent.match(/Android/))
            );
          }, []);
        }
        function T() {
          const { eAdultOnlyMediaBehavior: n } = h.useContext(u),
            B = y();
          return t() ||
            (n == "masked" &&
              (d.iA.excluded_content_descriptors.includes(hr.T4) ||
                d.iA.excluded_content_descriptors.includes(hr.u7)))
            ? "blocked"
            : n == "masked" && B
              ? "allowed"
              : n;
        }
        function yr() {
          return T() != "allowed";
        }
        const zr = "bDisableAOWarning",
          w = 2 * er.Kp.PerDay;
        function W() {
          const n = useQueryClient();
          return React.useCallback(() => {
            SetCookie(zr, String(Math.floor(Date.now() / 1e3) + w)),
              n.invalidateQueries({ queryKey: ["AOWarningCookie"] });
          }, [n]);
        }
        function E() {
          const n = (0, O.VY)(zr),
            B = n ? parseInt(n) : 0;
          return B != 0 ? B : null;
        }
        function S() {
          return {
            queryKey: ["AOWarningCookie"],
            queryFn: () => E(),
            placeholderData: () => E(),
            staleTime: 0,
          };
        }
        function y() {
          const { data: n } = (0, pr.I)(S());
          return n && n > Date.now() / 1e3;
        }
        function l(n) {
          const Br = T() == "blocked" && !!n,
            { data: br } = (0, ar.J$)(Br ? { appid: n } : void 0);
          return Br
            ? br
              ? br.content_descriptorids.includes(hr.u7) ||
                br.content_descriptorids.includes(hr.T4)
              : !0
            : !1;
        }
      },
      14874: (jr, wr, f) => {
        f.d(wr, { Ay: () => t, DJ: () => E, QO: () => S });
        var h = f(44420),
          d = f(10349),
          hr = f(18210),
          er = f(92264),
          O = f(3166),
          pr = f(11512),
          ar = f(41635),
          u = f(71742),
          c = f(25046);
        class t {
          m_eItemType;
          m_unID;
          m_bVisible = !1;
          m_strName;
          m_strStoreURLPath;
          m_unAppID;
          m_eAppType;
          m_rgIncludedAppTypes;
          m_rgIncludedAppIDs;
          m_bIsFree;
          m_bIsFreeTemporary;
          m_bIsComingSoon;
          m_bIsEarlyAccess;
          m_RelatedItems;
          m_ContentDescriptorIDs;
          m_StoreCategories;
          m_ReviewInfo;
          m_BasicInfo;
          m_rgStoreTags = [];
          m_rgStoreTagIDs = [];
          m_Assets;
          m_AssetsWithoutOverrides;
          m_ReleaseInfo;
          m_Platforms;
          m_BestPurchaseOption;
          m_SelfPurchaseOption;
          m_rgPurchaseOptions;
          m_Screenshots;
          m_Trailers;
          m_rgSupportedLanguages;
          m_strStoreURLPathOverride;
          m_freeWeekend;
          m_DataRequested = { include_tag_count: 0 };
          m_strInternalName;
          m_rgLinks;
          m_userFilterFailure;
          m_strFullDescriptionBBCode;
          constructor(l, n) {
            (this.m_eItemType = l.item_type()),
              (this.m_unID = l.id()),
              (this.m_bVisible = !!l.visible()),
              (this.m_strName = l.name()),
              (this.m_strStoreURLPath = l.store_url_path()),
              (this.m_unAppID = l.appid()),
              (this.m_eAppType = l.type()),
              (this.m_rgIncludedAppTypes = l.included_types()),
              (this.m_rgIncludedAppIDs = l.included_appids()),
              (this.m_bIsFree = !!l.is_free()),
              (this.m_bIsFreeTemporary = !!l.is_free_temporarily()),
              (this.m_bIsComingSoon =
                !!l.is_coming_soon() || !!l.release()?.is_coming_soon()),
              (this.m_bIsEarlyAccess = !!l.is_early_access()),
              (this.m_RelatedItems = l.related_items()?.toObject()),
              (this.m_ContentDescriptorIDs = l.content_descriptorids()),
              (this.m_StoreCategories = l.categories().toObject()),
              (this.m_BestPurchaseOption = l
                .best_purchase_option()
                ?.toObject()),
              (this.m_strStoreURLPathOverride = l.store_url_path_override()),
              (this.m_freeWeekend = l.free_weekend()?.toObject()),
              (this.m_strInternalName = l.internal_name()),
              (this.m_eItemType == h.c6.RD || this.m_eItemType == h.c6.xO) &&
                (this.m_SelfPurchaseOption = l.self_purchase_option(!1)
                  ? l.self_purchase_option().toObject()
                  : this.m_BestPurchaseOption),
              this.MergeData(l, n);
          }
          MergeData(l, n) {
            n.include_assets &&
              !this.m_Assets &&
              ((this.m_Assets = new yr(l.assets(), l.id())),
              (this.m_DataRequested.include_assets = !0)),
              n.include_assets_without_overrides &&
                !this.m_AssetsWithoutOverrides &&
                ((this.m_AssetsWithoutOverrides = new yr(
                  l.assets_without_overrides(),
                  l.id(),
                )),
                (this.m_DataRequested.include_assets_without_overrides = !0)),
              n.include_release &&
                !this.m_ReleaseInfo &&
                ((this.m_ReleaseInfo = l.release().toObject()),
                (this.m_DataRequested.include_release = !0)),
              n.include_platforms &&
                !this.m_Platforms &&
                ((this.m_Platforms = l.platforms().toObject()),
                (this.m_DataRequested.include_platforms = !0)),
              n.include_all_purchase_options &&
                !this.m_rgPurchaseOptions &&
                ((this.m_rgPurchaseOptions = l
                  .purchase_options()
                  .map((B) => B.toObject())),
                (this.m_DataRequested.include_all_purchase_options = !0)),
              n.include_screenshots &&
                !this.m_Screenshots &&
                ((this.m_Screenshots = new W(l.screenshots())),
                (this.m_DataRequested.include_screenshots = !0)),
              n.include_trailers &&
                !this.m_Trailers &&
                ((this.m_Trailers = new zr(l.trailers())),
                (this.m_DataRequested.include_trailers = !0)),
              n.include_tag_count &&
                n.include_tag_count > this.m_rgStoreTags.length &&
                this.m_DataRequested.include_tag_count < n.include_tag_count &&
                ((this.m_rgStoreTags = l.tags().map((B) => B.toObject())),
                (this.m_rgStoreTagIDs = this.m_rgStoreTags.map((B) => B.tagid)),
                (this.m_DataRequested.include_tag_count = Math.max(
                  n.include_tag_count,
                  this.m_rgStoreTags.length || 0,
                ))),
              n.include_reviews &&
                !this.m_ReviewInfo &&
                ((this.m_ReviewInfo = l.reviews().toObject()),
                (this.m_DataRequested.include_reviews = !0)),
              n.include_basic_info &&
                !this.m_BasicInfo &&
                ((this.m_BasicInfo = l.basic_info().toObject()),
                (this.m_DataRequested.include_basic_info = !0)),
              n.include_supported_languages &&
                !this.m_rgSupportedLanguages &&
                ((this.m_rgSupportedLanguages = l
                  .supported_languages()
                  .map((B) => B.toObject())),
                (this.m_DataRequested.include_supported_languages = !0)),
              n.include_links &&
                !this.m_rgLinks &&
                ((this.m_rgLinks = l.links().map((B) => B.toObject())),
                (this.m_DataRequested.include_links = !0)),
              n.apply_user_filters &&
                !this.m_userFilterFailure &&
                ((this.m_userFilterFailure = l
                  .user_filter_failure()
                  ?.toObject()),
                (this.m_DataRequested.apply_user_filters = !0)),
              n.include_full_description &&
                !this.m_strFullDescriptionBBCode &&
                ((this.m_strFullDescriptionBBCode =
                  l.full_description_bbcode()),
                (this.m_DataRequested.include_full_description = !0));
          }
          static BDataRequestContainsOtherDataRequest(l, n) {
            return !!(
              (!n.include_assets || l.include_assets) &&
              (!n.include_assets_without_overrides ||
                l.include_assets_without_overrides) &&
              (!n.include_release || l.include_release) &&
              (!n.include_platforms || l.include_platforms) &&
              (!n.include_all_purchase_options ||
                l.include_all_purchase_options) &&
              (!n.include_screenshots || l.include_screenshots) &&
              (!n.include_trailers || l.include_trailers) &&
              (!n.include_ratings || l.include_ratings) &&
              (!n.include_tag_count ||
                (l.include_tag_count || 0) >= n.include_tag_count) &&
              (!n.include_reviews || l.include_reviews) &&
              (!n.include_basic_info || l.include_basic_info) &&
              (!n.include_supported_languages ||
                l.include_supported_languages) &&
              (!n.include_full_description || l.include_full_description) &&
              (!n.include_links || l.include_links)
            );
          }
          BContainDataRequest(l) {
            return t.BDataRequestContainsOtherDataRequest(
              this.m_DataRequested,
              l,
            );
          }
          BCheckDataRequestIncluded(l) {}
          GetStoreItemType() {
            return this.m_eItemType;
          }
          GetID() {
            return this.m_unID;
          }
          GetUniqueID() {
            return this.m_eItemType + "_" + this.m_unID;
          }
          BIsVisible() {
            return this.m_bVisible;
          }
          GetName() {
            return this.m_strName;
          }
          GetStorePageURL(l = !1) {
            return l && this.HasDemoStandaloneStorePage()
              ? O.TS.STORE_BASE_URL +
                  "app/" +
                  this.GetDemoStandaloneStorePageAppIDs()[0]
              : O.TS.STORE_BASE_URL + this.m_strStoreURLPath;
          }
          GetStorePageURLWithOverride() {
            return this.m_strStoreURLPathOverride &&
              this.m_strStoreURLPathOverride.length > 0
              ? this.GetStorePageURLOverride()
              : this.GetStorePageURL();
          }
          GetStorePageURLOverride() {
            return this.m_strStoreURLPathOverride;
          }
          GetCommunityPageURL() {
            return this.GetAppID()
              ? O.TS.COMMUNITY_BASE_URL + "app/" + this.GetAppID()
              : null;
          }
          GetCommunityDiscussionForumsURL() {
            return this.GetAppID()
              ? O.TS.COMMUNITY_BASE_URL +
                  "app/" +
                  this.GetAppID() +
                  "/discussions/"
              : null;
          }
          GetAppID() {
            return this.m_unAppID;
          }
          GetAppType() {
            return this.m_eAppType;
          }
          BIsApplicationOrTool() {
            return this.GetAppType() == h.uE.Sv || this.GetAppType() == h.uE.Lj;
          }
          k_regexSalePage =
            /^https?:\/\/[^\/]*(?:valvesoftware|steampowered).com\/(?:(curator|dev|developer|pub|publisher|franchise)\/[0-9a-zA-Z\-_]+\/)?sale\//;
          BIsSalePage() {
            return this.GetStoreItemType() === h.c6.qI
              ? this.k_regexSalePage.test(this.GetStorePageURLWithOverride())
              : !1;
          }
          GetSalePageVanityURL() {
            let l = this.GetStorePageURLWithOverride();
            return (
              this.GetStoreItemType() === h.c6.qI &&
                ((l = this.GetStorePageURLWithOverride().replace(
                  this.k_regexSalePage,
                  "",
                )),
                l.endsWith("/") && (l = l.replace("/", ""))),
              l
            );
          }
          GetIncludedAppTypes() {
            return this.m_rgIncludedAppTypes;
          }
          GetIncludedAppIDs() {
            return this.m_rgIncludedAppIDs;
          }
          GetIncludedAppIDsOrSelf() {
            return this.GetStoreItemType() == h.c6.qI
              ? [this.GetID()]
              : this.GetIncludedAppIDs();
          }
          BIsFree() {
            return this.m_bIsFree;
          }
          BIsFreeTemporary() {
            return this.m_bIsFreeTemporary;
          }
          BIsFreeWeekend() {
            const l = Date.now() / 1e3;
            return (
              !!this.m_freeWeekend &&
              this.m_freeWeekend.start_time <= l &&
              l <= this.m_freeWeekend.end_time
            );
          }
          GetFreeWeekendEnd() {
            return this.m_freeWeekend?.end_time;
          }
          GetFreeWeekendPlayTextOverride() {
            return this.m_freeWeekend?.text;
          }
          BIsEarlyAccess() {
            return this.m_bIsEarlyAccess;
          }
          GetParentAppID() {
            return this.m_RelatedItems?.parent_appid;
          }
          BHasDemo() {
            return (this.m_RelatedItems?.demo_appid?.length ?? 0) > 0;
          }
          GetDemoAppIDs() {
            return this.m_RelatedItems?.demo_appid ?? [];
          }
          HasDemoStandaloneStorePage() {
            return (
              (this.m_RelatedItems?.standalone_demo_appid?.length ?? 0) > 0
            );
          }
          GetDemoStandaloneStorePageAppIDs() {
            return this.m_RelatedItems?.standalone_demo_appid ?? [];
          }
          GetContentDescriptorIDs() {
            return this.m_ContentDescriptorIDs;
          }
          HasContentDescriptorID(l) {
            return this.m_ContentDescriptorIDs?.includes(l);
          }
          GetStoreCategories_SupportedPlayers() {
            return this.m_StoreCategories?.supported_player_categoryids || [];
          }
          GetStoreCategories_Features() {
            return this.m_StoreCategories?.feature_categoryids || [];
          }
          GetStoreCategories_Controller() {
            return this.m_StoreCategories?.controller_categoryids || [];
          }
          BHasStoreCategory(l) {
            return !!(
              this.GetStoreCategories_SupportedPlayers().find((n) => l === n) ||
              this.GetStoreCategories_Features().find((n) => l === n) ||
              this.GetStoreCategories_Controller().find((n) => l === n)
            );
          }
          GetFilteredReviewSummary() {
            return (
              this.BCheckDataRequestIncluded({ include_reviews: !0 }),
              this.m_ReviewInfo?.summary_filtered
            );
          }
          GetUnfilteredReviewSummary() {
            return (
              this.BCheckDataRequestIncluded({ include_reviews: !0 }),
              this.m_ReviewInfo?.summary_unfiltered ||
                this.m_ReviewInfo?.summary_filtered
            );
          }
          GetFilteredReviewSummaryLanguage() {
            return (
              this.BCheckDataRequestIncluded({ include_reviews: !0 }),
              this.m_ReviewInfo?.summary_language_specific
            );
          }
          GetFullDescriptionBBCode() {
            return (
              this.BCheckDataRequestIncluded({ include_full_description: !0 }),
              this.m_strFullDescriptionBBCode
            );
          }
          GetShortDescription() {
            return (
              this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
              this.m_BasicInfo?.short_description ?? ""
            );
          }
          GetDeveloperNames() {
            return (
              this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
              this.m_BasicInfo?.developers
                ?.map((l) => l.name.trim())
                ?.filter((l) => l?.length > 0) ?? []
            );
          }
          GetFranchiseNames() {
            return (
              this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
              this.m_BasicInfo?.franchises
                ?.map((l) => l.name.trim())
                ?.filter((l) => l?.length > 0) ?? []
            );
          }
          GetPublisherNames() {
            this.BCheckDataRequestIncluded({ include_basic_info: !0 });
            const l =
              this.m_BasicInfo?.publishers
                ?.map((n) => n.name.trim())
                ?.filter((n) => n?.length > 0) ?? [];
            return l?.length > 0 ? l : this.GetDeveloperNames();
          }
          GetAllCreatorClanIDs() {
            return (
              this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
              this.m_BasicInfo
                ? T([
                    ...this.m_BasicInfo.developers,
                    ...this.m_BasicInfo.publishers,
                    ...this.m_BasicInfo.franchises,
                  ])
                : []
            );
          }
          GetAllPublisherCreatorClans() {
            return (
              this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
              this.m_BasicInfo ? T(this.m_BasicInfo.publishers) : []
            );
          }
          GetAllDeveloperCreatorClans() {
            return (
              this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
              this.m_BasicInfo ? T(this.m_BasicInfo.developers) : []
            );
          }
          GetAllFranchiseCreatorClans() {
            return (
              this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
              this.m_BasicInfo ? T(this.m_BasicInfo.franchises) : []
            );
          }
          GetCapsuleHeadline() {
            return (
              this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
              this.m_BasicInfo?.capsule_headline
            );
          }
          GetTags() {
            return (
              this.BCheckDataRequestIncluded({ include_tag_count: 1 }),
              this.m_rgStoreTags
            );
          }
          GetTagIDs() {
            return (
              this.BCheckDataRequestIncluded({ include_tag_count: 1 }),
              this.m_rgStoreTagIDs
            );
          }
          BHasTags() {
            return (
              this.BCheckDataRequestIncluded({ include_tag_count: 1 }),
              this.m_rgStoreTagIDs?.length > 0
            );
          }
          GetAssets() {
            return (
              this.BCheckDataRequestIncluded({ include_assets: !0 }),
              this.m_Assets
            );
          }
          GetAssetsWithoutOverrides() {
            return (
              this.BCheckDataRequestIncluded({
                include_assets_without_overrides: !0,
              }),
              this.m_AssetsWithoutOverrides
            );
          }
          GetOriginalReleaseDateRTime() {
            this.BCheckDataRequestIncluded({ include_release: !0 });
            let l = this.m_ReleaseInfo?.original_steam_release_date;
            return l || (l = this.GetReleaseDateRTime()), l;
          }
          GetReleaseDateRTime(l = !1) {
            if (
              (this.BCheckDataRequestIncluded({ include_release: !0 }),
              this.m_ReleaseInfo?.is_coming_soon && !l)
            )
              return 0;
            let n = this.m_ReleaseInfo?.steam_release_date;
            return n || (n = this.m_ReleaseInfo?.original_release_date), n;
          }
          GetFormattedSteamReleaseDate() {
            if (
              (this.BCheckDataRequestIncluded({ include_release: !0 }),
              this.m_ReleaseInfo?.is_coming_soon)
            ) {
              if (this.m_ReleaseInfo?.coming_soon_display)
                return (0, pr.d)(this.m_ReleaseInfo);
              if (this.m_ReleaseInfo?.custom_release_date_message)
                return this.m_ReleaseInfo.custom_release_date_message;
              const n = this.m_ReleaseInfo?.steam_release_date;
              return n
                ? this.m_ReleaseInfo?.is_abridged_release_date
                  ? (0, er.sq)(new Date(n * 1e3))
                  : (0, hr.$z)(n)
                : "";
            }
            const l = this.GetReleaseDateRTime();
            return l ? (0, hr.$z)(l) : "";
          }
          BIsComingSoon() {
            return this.m_bIsComingSoon;
          }
          BIsCustomComingSoonDisplay() {
            return (
              this.BCheckDataRequestIncluded({ include_release: !0 }),
              this.BIsComingSoon()
                ? this.m_ReleaseInfo?.coming_soon_display
                  ? ["text_tba", "text_comingsoon"].includes(
                      this.m_ReleaseInfo.coming_soon_display,
                    )
                  : !!this.m_ReleaseInfo?.custom_release_date_message
                : !1
            );
          }
          BLimitedLaunchActive() {
            return this.m_ReleaseInfo?.limited_launch_active;
          }
          BIsPrePurchase() {
            return (
              this.BIsComingSoon() && !!this.GetBestPurchaseOption()?.packageid
            );
          }
          BIsReleased() {
            return !this.BIsComingSoon();
          }
          GetPlatforms() {
            return (
              this.BCheckDataRequestIncluded({ include_platforms: !0 }),
              this.m_Platforms
            );
          }
          GetBestPurchaseOption() {
            return this.m_BestPurchaseOption;
          }
          GetBestPurchasePriceInCents() {
            if (this.m_BestPurchaseOption?.final_price_in_cents)
              return Number.parseInt(
                this.m_BestPurchaseOption.final_price_in_cents,
              );
          }
          GetBestPurchasePriceFormatted() {
            return this.m_BestPurchaseOption?.formatted_final_price;
          }
          GetBestPurchaseOriginalPriceInCents() {
            return this.m_BestPurchaseOption?.original_price_in_cents
              ? Number.parseInt(this.m_BestPurchaseOption.final_price_in_cents)
              : this.GetBestPurchasePriceInCents();
          }
          GetBestPurchaseOriginalPriceFormatted() {
            return (
              this.m_BestPurchaseOption?.formatted_original_price ??
              this.m_BestPurchaseOption?.formatted_final_price
            );
          }
          GetAllPurchaseOptions() {
            return (
              this.BCheckDataRequestIncluded({
                include_all_purchase_options: !0,
              }),
              this.m_rgPurchaseOptions
            );
          }
          GetSelfPurchaseOption() {
            return this.m_SelfPurchaseOption;
          }
          BHasAgeSafeScreenshots() {
            return this.GetScreenshots(!0).length > 0;
          }
          GetScreenshots(l) {
            return (
              this.BCheckDataRequestIncluded({ include_screenshots: !0 }),
              this.m_Screenshots
                ? l
                  ? this.m_Screenshots.GetOnlyAllAgesScreenshots()
                  : this.m_Screenshots.GetAllAgesAndMatureScreenshots()
                : []
            );
          }
          BIsAgeSafeScreenshot(l) {
            return this.m_Screenshots.GetOnlyAllAgesScreenshots().includes(l);
          }
          BHasTrailers(l) {
            return (
              this.BCheckDataRequestIncluded({ include_trailers: !0 }),
              this.m_Trailers?.BHasTrailers(l)
            );
          }
          BHasHighlightTrailers(l) {
            return (
              this.BCheckDataRequestIncluded({ include_trailers: !0 }),
              (this.m_Trailers?.GetHighlightTrailers(l)?.length ?? 0) > 0
            );
          }
          GetAllTrailers() {
            return (
              this.BCheckDataRequestIncluded({ include_trailers: !0 }),
              this.m_Trailers
            );
          }
          BHasSomeLanguageSupport(l) {
            return (
              this.BCheckDataRequestIncluded({
                include_supported_languages: !0,
              }),
              this.m_rgSupportedLanguages?.some(
                (n) =>
                  n.elanguage == l &&
                  (n.supported || n.subtitles || n.full_audio),
              ) || !1
            );
          }
          GetAllLanguagesWithSomeSupport() {
            return (
              this.BCheckDataRequestIncluded({
                include_supported_languages: !0,
              }),
              this.m_rgSupportedLanguages
                ?.filter((l) => l.supported || l.subtitles || l.full_audio)
                .map((l) => l.elanguage) || []
            );
          }
          GetDataRequest() {
            return this.m_DataRequested;
          }
          GetMicroTrailer(l) {
            if (
              (this.BCheckDataRequestIncluded({ include_trailers: !0 }),
              this.m_Trailers)
            ) {
              const n = this.m_Trailers
                .GetAllTrailers(l)
                .find((B) => !!B.GetMicroTrailer());
              if (n) return n.GetMicroTrailer();
            }
            return null;
          }
          GetLinks() {
            return (
              this.BCheckDataRequestIncluded({ include_links: !0 }),
              this.m_rgLinks
            );
          }
          GetUserFilterFailure() {
            return (
              this.BCheckDataRequestIncluded({ apply_user_filters: !0 }),
              this.m_userFilterFailure
            );
          }
          ReplaceBestPurchaseOption(l) {
            this.m_BestPurchaseOption = l;
          }
          GetInternalName() {
            return this.m_strInternalName;
          }
        }
        function T(y) {
          if (!y?.length) return [];
          const l = y.map((n) => n.creator_clan_account_id).filter((n) => !!n);
          return Array.from(new Set(l));
        }
        class yr {
          m_strMainCapsuleURL;
          m_strSmallCapsuleURL;
          m_strHeaderURL;
          m_strPackageHeaderURL;
          m_strPageBackgroundURL;
          m_strRawPageBackgroundURL;
          m_strHeroCapsuleURL;
          m_strHeroCapsuleURL_2x;
          m_strLibraryCapsuleURL;
          m_strLibraryCapsuleURL_2x;
          m_strLibraryHeroURL;
          m_strLibraryHeroURL_2x;
          m_strCommunityIcon;
          m_strCommunityIcon_Full;
          constructor(l, n) {
            const B = l.asset_url_format();
            B &&
              (l.main_capsule() &&
                (this.m_strMainCapsuleURL = this.ConstructAssetURL(
                  B,
                  l.main_capsule(),
                )),
              l.small_capsule() &&
                (this.m_strSmallCapsuleURL = this.ConstructAssetURL(
                  B,
                  l.small_capsule(),
                )),
              l.header() &&
                (this.m_strHeaderURL = this.ConstructAssetURL(B, l.header())),
              l.package_header() &&
                (this.m_strPackageHeaderURL = this.ConstructAssetURL(
                  B,
                  l.package_header(),
                )),
              l.raw_page_background() &&
                (this.m_strRawPageBackgroundURL = this.ConstructAssetURL(
                  B,
                  l.raw_page_background(),
                )),
              l.hero_capsule() &&
                (this.m_strHeroCapsuleURL = this.ConstructAssetURL(
                  B,
                  l.hero_capsule(),
                )),
              l.hero_capsule_2x() &&
                (this.m_strHeroCapsuleURL_2x = this.ConstructAssetURL(
                  B,
                  l.hero_capsule_2x(),
                )),
              l.library_capsule() &&
                (this.m_strLibraryCapsuleURL = this.ConstructAssetURL(
                  B,
                  l.library_capsule(),
                )),
              l.library_capsule_2x() &&
                (this.m_strLibraryCapsuleURL_2x = this.ConstructAssetURL(
                  B,
                  l.library_capsule_2x(),
                )),
              l.library_hero() &&
                (this.m_strLibraryHeroURL = this.ConstructAssetURL(
                  B,
                  l.library_hero(),
                )),
              l.library_hero_2x() &&
                (this.m_strLibraryHeroURL_2x = this.ConstructAssetURL(
                  B,
                  l.library_hero_2x(),
                ))),
              l.community_icon() &&
                ((this.m_strCommunityIcon = `${O.TS.MEDIA_CDN_COMMUNITY_URL}images/apps/${n}/${l.community_icon()}.jpg`),
                (this.m_strCommunityIcon_Full = `${O.TS.MEDIA_CDN_COMMUNITY_URL}images/apps/${n}/${l.community_icon()}_full.jpg`)),
              l.page_background_path() &&
                (this.m_strPageBackgroundURL = `${O.TS.STORE_CDN_URL}images/storepagebackground/${l.page_background_path()}`);
          }
          GetMainCapsuleURL() {
            return this.m_strMainCapsuleURL;
          }
          GetSmallCapsuleURL() {
            return this.m_strSmallCapsuleURL;
          }
          GetHeaderURL() {
            return this.m_strHeaderURL;
          }
          GetPackageHeaderURL() {
            return this.m_strPackageHeaderURL;
          }
          GetPageBackgroundURL() {
            return this.m_strPageBackgroundURL;
          }
          GetRawPageBackgroundURL() {
            return this.m_strRawPageBackgroundURL;
          }
          GetHeroCapsuleURL() {
            return this.m_strHeroCapsuleURL;
          }
          GetHeroCapsuleURL_2x() {
            return this.m_strHeroCapsuleURL_2x;
          }
          GetLibraryCapsuleURL() {
            return this.m_strLibraryCapsuleURL;
          }
          GetLibraryCapsuleURL_2x() {
            return this.m_strLibraryCapsuleURL_2x;
          }
          GetLibraryHeroURL() {
            return this.m_strLibraryHeroURL;
          }
          GetLibraryHeroURL_2x() {
            return this.m_strLibraryHeroURL_2x;
          }
          ConstructAssetURL(l, n) {
            return (
              O.TS.BASE_URL_SHARED_CDN +
              "/store_item_assets/" +
              l.replace("${FILENAME}", n)
            );
          }
          GetCommunityIconURL() {
            return this.m_strCommunityIcon;
          }
          GetCommunityIconURL_Full() {
            return this.m_strCommunityIcon_Full;
          }
        }
        class zr {
          m_mapTrailer;
          m_highlightTrailers;
          m_highlightTrailersAllAges;
          m_otherTrailers;
          m_otherTrailersAllAges;
          constructor(l) {
            (this.m_highlightTrailers =
              l.highlights()?.map((n) => new w(n)) ?? []),
              (this.m_highlightTrailersAllAges =
                this.m_highlightTrailers.filter((n) => n.BIsAllAges())),
              (this.m_otherTrailers =
                l.other_trailers()?.map((n) => new w(n)) ?? []),
              (this.m_otherTrailersAllAges = this.m_otherTrailers.filter((n) =>
                n.BIsAllAges(),
              )),
              (this.m_mapTrailer = new Map(
                [...this.m_highlightTrailers, ...this.m_otherTrailers].map(
                  (n) => [n.GetTrailerID(), n],
                ),
              ));
          }
          BHasTrailers(l) {
            return l
              ? this.m_highlightTrailersAllAges.length > 0 ||
                  this.m_otherTrailersAllAges.length > 0
              : this.m_highlightTrailers.length > 0 ||
                  this.m_otherTrailers.length > 0;
          }
          GetHighlightTrailers(l) {
            return l
              ? this.m_highlightTrailersAllAges
              : this.m_highlightTrailers;
          }
          GetOtherTrailers(l) {
            return l ? this.m_otherTrailersAllAges : this.m_otherTrailers;
          }
          GetAllTrailers(l) {
            return [
              ...this.GetHighlightTrailers(l),
              ...this.GetOtherTrailers(l),
            ];
          }
          GetTrailerByID(l) {
            return this.m_mapTrailer.get(l);
          }
        }
        class w {
          m_strTrailerName;
          m_eTrailerCategory;
          m_nBaseID;
          m_MicroTrailer;
          m_rgDashTrailers;
          m_rgHlsTrailer;
          m_strScreenshotMedium;
          m_strScreenshotFull;
          m_bIsAllAges;
          m_strCaptionManifest;
          constructor(l) {
            (this.m_strTrailerName = l.trailer_name()),
              (this.m_nBaseID = l.trailer_base_id()),
              (this.m_eTrailerCategory = l.trailer_category());
            const n = l.trailer_url_format();
            if (
              (n &&
                (l.microtrailer() &&
                  (this.m_MicroTrailer = this.ExtractTrailerFormats(
                    n,
                    l.microtrailer(),
                  )),
                l.screenshot_medium() &&
                  (this.m_strScreenshotMedium = this.ConstructScreenshotURL(
                    n,
                    l.screenshot_medium(),
                  )),
                l.screenshot_full() &&
                  (this.m_strScreenshotFull = this.ConstructScreenshotURL(
                    n,
                    l.screenshot_full(),
                  ))),
              l.adaptive_trailers())
            ) {
              this.m_rgDashTrailers = this.ExtractAdaptiveTrailers(
                l.adaptive_trailers(),
                "dash",
              );
              let B = this.ExtractAdaptiveTrailers(
                l.adaptive_trailers(),
                "hls",
              );
              B.length > 0 && (this.m_rgHlsTrailer = B[0]);
            }
            (this.m_bIsAllAges = l.all_ages() ?? !0),
              (this.m_strCaptionManifest = (0, c.Wv)(l));
          }
          GetName() {
            return this.m_strTrailerName;
          }
          GetTrailerID() {
            return this.m_nBaseID;
          }
          GetTrailerCategory() {
            return this.m_eTrailerCategory;
          }
          GetTrailersDash() {
            return this.m_rgDashTrailers;
          }
          GetTrailerHls() {
            return this.m_rgHlsTrailer;
          }
          GetMicroTrailer() {
            return this.m_MicroTrailer;
          }
          GetScreenshot() {
            return this.m_strScreenshotFull
              ? this.m_strScreenshotFull
              : this.m_strScreenshotMedium;
          }
          BIsAllAges() {
            return this.m_bIsAllAges;
          }
          GetCaptionManifest() {
            return this.m_strCaptionManifest;
          }
          ExtractTrailerFormats(l, n) {
            let B = {};
            return (
              n.forEach((Br) => {
                Br.type() == "video/mp4"
                  ? (B.strMP4URL = this.ConstructAssetURL(l, Br.filename()))
                  : Br.type() == "video/webm" &&
                    (B.strWebMURL = this.ConstructAssetURL(l, Br.filename()));
              }),
              B
            );
          }
          ExtractAdaptiveTrailers(l, n) {
            let B = `${n}_`,
              Br = l.filter(
                (Tr) =>
                  Tr.encoding() && Tr.cdn_path() && Tr.encoding().startsWith(B),
              ),
              br = Br.findIndex((Tr) => Tr.encoding().endsWith("_av1"));
            return (
              br > 0 && ar.yY(Br, br, 0),
              Br.map((Tr) => this.ConstructAssetURL(Tr.cdn_path(), ""))
            );
          }
          ConstructScreenshotURL(l, n) {
            return (
              O.TS.BASE_URL_SHARED_CDN +
              "/store_item_assets/" +
              l.replace("${FILENAME}", n)
            );
          }
          ConstructAssetURL(l, n) {
            return (
              O.TS.VIDEO_CDN_URL +
              "/store_trailers/" +
              l.replace("${FILENAME}", n)
            );
          }
        }
        class W {
          m_rgAllScreenshots;
          m_rgOnlyAllAgesScreenshots;
          constructor(l) {
            const n = l.all_ages_screenshots() || [],
              B = l.mature_content_screenshots() || [],
              Br = (br) =>
                O.TS.BASE_URL_SHARED_CDN +
                "/store_item_assets/" +
                br.filename();
            (this.m_rgOnlyAllAgesScreenshots = n.map(Br)),
              (this.m_rgAllScreenshots = [...n, ...B]
                .sort((br, Tr) => br.ordinal() - Tr.ordinal())
                .map(Br));
          }
          GetAllAgesAndMatureScreenshots() {
            return this.m_rgAllScreenshots;
          }
          GetOnlyAllAgesScreenshots() {
            return this.m_rgOnlyAllAgesScreenshots;
          }
        }
        function E(y) {
          if (y)
            switch (y.GetStoreItemType()) {
              case h.c6.qI:
                return { appid: y.GetAppID() };
              case h.c6.RD:
                return { packageid: y.GetID() };
              case h.c6.xO:
                return { bundleid: y.GetID() };
              case h.c6.je:
                return { tagid: y.GetID() };
              case h.c6.tp:
                return { creatorid: y.GetID() };
              case h.c6.wn:
                return { hubcategoryid: y.GetID() };
              case h.c6.Xj:
                return;
              case h.c6.Eb:
              case h.c6.Ep:
                return;
              default:
                (0, u.z_)(
                  y.GetStoreItemType(),
                  `Unknown EStoreItemType ${y.GetStoreItemType()} ${(0, h.md)(y.GetStoreItemType())} `,
                );
                return;
            }
        }
        function S(y) {
          if (y)
            switch (y.item_type) {
              case h.c6.qI:
                return { appid: y.appid };
              case h.c6.RD:
                return { packageid: y.id };
              case h.c6.xO:
                return { bundleid: y.id };
              case h.c6.je:
                return { tagid: y.id };
              case h.c6.tp:
                return { creatorid: y.id };
              case h.c6.wn:
                return { hubcategoryid: y.id };
              case h.c6.Xj:
                return y.gid ? { salepagegid: y.gid } : void 0;
              case h.c6.Eb:
              case h.c6.Ep:
                return;
              default:
                (0, u.z_)(
                  y.item_type,
                  `Unknown EStoreItemType ${y.item_type} ${(0, h.md)(y.item_type)} `,
                );
                return;
            }
        }
      },
      10349: (jr, wr, f) => {
        f.d(wr, {
          Di: () => zr,
          FT: () => B,
          JK: () => O,
          Je: () => S,
          M9: () => Br,
          Rz: () => u,
          SW: () => c,
          Si: () => Dr,
          TM: () => T,
          TV: () => Ar,
          _P: () => br,
          cW: () => Er,
          gy: () => Tr,
          hh: () => w,
          lY: () => Lr,
          nB: () => pr,
          pk: () => ar,
          s9: () => vr,
          vo: () => W,
          wD: () => n,
          wR: () => yr,
        });
        var h = f(47634),
          d = f(44420),
          hr = ((m) => (
            (m[(m.k_NotRejected = -1)] = "k_NotRejected"),
            (m[(m.k_RejectNoMainCap = 0)] = "k_RejectNoMainCap"),
            (m[(m.k_RejectWrongPlatform = 1)] = "k_RejectWrongPlatform"),
            (m[(m.k_RejectNoComingSoon = 2)] = "k_RejectNoComingSoon"),
            (m[(m.k_RejectNoVR = 3)] = "k_RejectNoVR"),
            (m[(m.k_RejectCreatorClan = 4)] = "k_RejectCreatorClan"),
            (m[(m.k_RejectIgnoredGame = 5)] = "k_RejectIgnoredGame"),
            (m[(m.k_RejectSupportedLanguage = 6)] =
              "k_RejectSupportedLanguage"),
            (m[(m.k_RejectNotLoaded = 7)] = "k_RejectNotLoaded"),
            (m[(m.k_RejectIgnoreGameTags = 8)] = "k_RejectIgnoreGameTags"),
            (m[(m.k_RejectIgnoreContentDescriptors = 9)] =
              "k_RejectIgnoreContentDescriptors"),
            (m[(m.k_RejectEarlyAccess = 10)] = "k_RejectEarlyAccess"),
            (m[(m.k_RejectSoftware = 11)] = "k_RejectSoftware"),
            (m[(m.k_RejectDLC = 12)] = "k_RejectDLC"),
            (m[(m.k_RejectInLibrary = 13)] = "k_RejectInLibrary"),
            (m[(m.k_RejectNotInLibrary = 14)] = "k_RejectNotInLibrary"),
            (m[(m.k_RejectVideo = 15)] = "k_RejectVideo"),
            (m[(m.k_RejectNoDiscount = 16)] = "k_RejectNoDiscount"),
            (m[(m.k_RejectAlreadyDisplayed = 17)] = "k_RejectAlreadyDisplayed"),
            (m[(m.k_RejectNoTrailer = 18)] = "k_RejectNoTrailer"),
            (m[(m.k_RejectAO = 19)] = "k_RejectAO"),
            m
          ))(hr || {});
        const er = ["app", "sub", "bundle"];
        function O(m) {
          return m == "app" ? d.c6.qI : m == "sub" ? d.c6.RD : d.c6.xO;
        }
        function pr(m) {
          return er.includes(m);
        }
        function ar(m, z = d.c6.Ep) {
          return m?.appid
            ? d.c6.qI
            : m?.packageid
              ? d.c6.RD
              : m?.bundleid
                ? d.c6.xO
                : m?.creatorid
                  ? d.c6.tp
                  : m?.hubcategoryid
                    ? d.c6.wn
                    : m?.tagid
                      ? d.c6.je
                      : z;
        }
        function u(m) {
          switch (m) {
            case d.c6.qI:
              return "app";
            case d.c6.xO:
              return "bundle";
            case d.c6.RD:
              return "package";
            case d.c6.Eb:
              return "mtx";
          }
          return "invalid";
        }
        function c(m) {
          switch (m) {
            case "sub":
              return d.c6.RD;
            case "bundle":
              return d.c6.xO;
            default:
              return d.c6.qI;
          }
        }
        function t(m, z) {
          switch (m) {
            case EStoreItemType.k_EStoreItemType_Bundle:
              return "bundle";
            case EStoreItemType.k_EStoreItemType_Package:
              return "sub";
            default:
              switch (z) {
                case EStoreAppType.k_EStoreAppType_Game:
                  return "game";
                case EStoreAppType.k_EStoreAppType_Beta:
                  return "beta";
                case EStoreAppType.k_EStoreAppType_DLC:
                  return "dlc";
                case EStoreAppType.k_EStoreAppType_Demo:
                  return "demo";
                case EStoreAppType.k_EStoreAppType_Software:
                  return "software";
                case EStoreAppType.k_EStoreAppType_Video:
                case EStoreAppType.k_EStoreAppType_Movie:
                  return "video";
                case EStoreAppType.k_EStoreAppType_Hardware:
                  return "hardware";
                case EStoreAppType.k_EStoreAppType_Music:
                  return "music";
                case EStoreAppType.k_EStoreAppType_Tool:
                  return "tool";
                case EStoreAppType.k_EStoreAppType_Mod:
                  return "mod";
                case EStoreAppType.k_EStoreAppType_Episode:
                  return "episode";
                case EStoreAppType.k_EStoreAppType_Series:
                  return "series";
                default:
                  return "game";
              }
          }
        }
        function T(m) {
          switch (m) {
            case d.c6.xO:
              return "bundle";
            case d.c6.RD:
              return "sub";
            default:
              return "app";
          }
        }
        function yr(m, z, Wr) {
          return m
            ? { id: m, item_type: "app" }
            : z
              ? { id: z, item_type: "sub" }
              : { id: Wr, item_type: "bundle" };
        }
        function zr(m) {
          return m?.item_type == "app"
            ? { appid: m.id }
            : m?.item_type == "sub"
              ? { packageid: m.id }
              : m?.item_type == "bundle"
                ? { bundleid: m.id }
                : null;
        }
        function w(m) {
          return m?.appid
            ? { item_type: "app", id: m.appid }
            : m?.packageid
              ? { item_type: "sub", id: m.packageid }
              : m?.bundleid
                ? { item_type: "bundle", id: m.bundleid }
                : null;
        }
        function W(m, z) {
          return z == d.c6.qI
            ? { id: m, item_type: "app" }
            : z == d.c6.RD
              ? { id: m, item_type: "sub" }
              : z == d.c6.xO
                ? { id: m, item_type: "bundle" }
                : (console.error(
                    "ConvertEStoreItemTypeToStoreItemKey unexpected item type: ",
                    z,
                  ),
                  { id: 0, item_type: "app" });
        }
        function E(m, z, Wr) {
          return m ? { appid: m } : z ? { packageid: z } : { bundleid: Wr };
        }
        function S(m, z) {
          return z == d.c6.qI
            ? { appid: m }
            : z == d.c6.RD
              ? { packageid: m }
              : z == d.c6.xO
                ? { bundleid: m }
                : z == d.c6.je
                  ? { tagid: m }
                  : z == d.c6.tp
                    ? { creatorid: m }
                    : z == d.c6.wn
                      ? { hubcategoryid: m }
                      : null;
        }
        function y(m) {
          switch (m.item_type) {
            case "app":
              return "a" + m.id;
            case "sub":
              return "p" + m.id;
            default:
              return "b" + m.id;
          }
        }
        function l(m) {
          const z = Number.parseInt(m.substring(1));
          switch (m.charAt(0)) {
            case "a":
              return { item_type: "app", id: z };
            case "p":
              return { item_type: "sub", id: z };
            default:
              return { item_type: "bundle", id: z };
          }
        }
        function n(m) {
          return m?.appid
            ? "a" + m.appid
            : m?.packageid
              ? "p" + m.packageid
              : m?.bundleid
                ? "b" + m.bundleid
                : m?.creatorid
                  ? "c" + m.creatorid
                  : m?.hubcategoryid
                    ? "h" + m.hubcategoryid
                    : m?.tagid
                      ? "t" + m.tagid
                      : "unknown0";
        }
        function B(m, z) {
          switch (z) {
            case d.c6.qI:
              return "a" + m;
            case d.c6.RD:
              return "p" + m;
            case d.c6.xO:
              return "b" + m;
          }
          return "unknown0";
        }
        function Br(m) {
          return m?.appid
            ? m.appid
            : m?.packageid
              ? m.packageid
              : m?.bundleid
                ? m.bundleid
                : m?.hubcategoryid
                  ? m.hubcategoryid
                  : m?.creatorid
                    ? m.creatorid
                    : m?.tagid
                      ? m.tagid
                      : 0;
        }
        function br(m) {
          return m?.appid
            ? d.c6.qI
            : m?.packageid
              ? d.c6.RD
              : m?.bundleid
                ? d.c6.xO
                : m?.hubcategoryid
                  ? d.c6.wn
                  : m?.creatorid
                    ? d.c6.tp
                    : m?.tagid
                      ? d.c6.je
                      : 0;
        }
        function Tr(m) {
          return m?.item_type == "app"
            ? d.c6.qI
            : m?.item_type == "sub"
              ? d.c6.RD
              : m?.item_type == "bundle"
                ? d.c6.xO
                : d.c6.Ep;
        }
        function Nr(m) {
          return m?.appid()
            ? EStoreItemType.k_EStoreItemType_App
            : m?.packageid()
              ? EStoreItemType.k_EStoreItemType_Package
              : m?.bundleid()
                ? EStoreItemType.k_EStoreItemType_Bundle
                : EStoreItemType.k_EStoreItemType_Invalid;
        }
        function Fr(m) {
          return m?.appid() || m?.packageid() || m?.bundleid() || 0;
        }
        function Er(m) {
          const z = Number.parseInt(m.substring(1));
          switch (m.charAt(0)) {
            case "a":
              return { appid: z };
            case "p":
              return { packageid: z };
            default:
              return { bundleid: z };
          }
        }
        function Ar(m) {
          return m == "application"
            ? d.c6.qI
            : m == "bundle"
              ? d.c6.xO
              : m == "package"
                ? d.c6.RD
                : d.c6.Ep;
        }
        function Lr(m) {
          return m == d.c6.qI
            ? "application"
            : m == d.c6.RD
              ? "package"
              : m == d.c6.xO
                ? "bundle"
                : null;
        }
        function vr(m) {
          return m == h.OT.vy
            ? d.c6.qI
            : m == h.OT.uA
              ? d.c6.xO
              : m == h.OT.jA
                ? d.c6.RD
                : d.c6.Ep;
        }
        function Dr(m) {
          return m == d.c6.qI
            ? h.OT.vy
            : m == d.c6.RD
              ? h.OT.jA
              : m == d.c6.xO
                ? h.OT.uA
                : null;
        }
      },
      11512: (jr, wr, f) => {
        f.d(wr, { M: () => er, d: () => hr });
        var h = f(18210),
          d = f(92264);
        function hr(O) {
          return er(
            O.coming_soon_display,
            O.steam_release_date,
            O.custom_release_date_message,
          );
        }
        function er(O, pr, ar, u) {
          switch (O) {
            case "date_full":
              return (0, h.$z)(pr);
            case "date_month":
              return (0, d.sq)(new Date(pr * 1e3));
            case "date_quarter":
              return (0, d.u6)(new Date(pr * 1e3), u);
            case "date_year":
              return (0, d.vl)(new Date(pr * 1e3));
            case "text_comingsoon":
              return ar || (0, h.we)("#Store_ComingSoon_ComingSoon");
            case "text_tba":
              return ar || (0, h.we)("#Store_ComingSoon_TBA");
            default:
              return "";
          }
        }
      },
    },
  ]);
})();
