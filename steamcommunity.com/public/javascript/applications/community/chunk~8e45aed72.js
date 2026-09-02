/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [8453],
    {
      74916: (Ie, je, B) => {
        "use strict";
        B.d(je, {
          CP: () => me,
          K: () => Pe,
          PS: () => tt,
          QE: () => _e,
          RD: () => ke,
          b5: () => Me,
          hU: () => z,
          k_: () => fe,
          lk: () => rt,
          nR: () => et,
          q3: () => Ue,
          vn: () => we,
        });
        var o = B(80613),
          s = B.n(o),
          t = B(75245),
          w = B(35038),
          ye = Object.defineProperty,
          h = (C, e, r) =>
            e in C
              ? ye(C, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: r,
                })
              : (C[e] = r),
          m = (C, e, r) => h(C, typeof e != "symbol" ? e + "" : e, r);
        const de = class Q extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Q.prototype.faq_id || t.Sg(Q.M()),
              o.Message.initialize(this, e, 0, -1, [6], null);
          }
          static M() {
            return (
              Q.sm_m ||
                (Q.sm_m = {
                  proto: Q,
                  fields: {
                    faq_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    internal_name: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    visible_in_global_realm: {
                      n: 3,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    visible_in_china_realm: {
                      n: 4,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    json_data: {
                      n: 5,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    per_language_info: { n: 6, c: Ae, r: !0, q: !0 },
                    url_code: {
                      n: 7,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              Q.sm_m
            );
          }
          static MBF() {
            return Q.sm_mbf || (Q.sm_mbf = t.w0(Q.M())), Q.sm_mbf;
          }
          toObject(e = !1) {
            return Q.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Q.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Q.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (s().BinaryReader)(e),
              c = new Q();
            return Q.deserializeBinaryFromReader(c, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Q.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Q.M(), e, r);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Q.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQSummary";
          }
        };
        m(de, "sm_m"), m(de, "sm_mbf");
        let ge = de;
        const be = class q extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              q.prototype.language || t.Sg(q.M()),
              o.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              q.sm_m ||
                (q.sm_m = {
                  proto: q,
                  fields: {
                    language: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    last_update_timestamp: {
                      n: 2,
                      br: t.qM.readFixed32,
                      bw: t.gp.writeFixed32,
                    },
                    last_publish_timestamp: {
                      n: 3,
                      br: t.qM.readFixed32,
                      bw: t.gp.writeFixed32,
                    },
                  },
                }),
              q.sm_m
            );
          }
          static MBF() {
            return q.sm_mbf || (q.sm_mbf = t.w0(q.M())), q.sm_mbf;
          }
          toObject(e = !1) {
            return q.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(q.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(q.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (s().BinaryReader)(e),
              c = new q();
            return q.deserializeBinaryFromReader(c, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(q.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(q.M(), e, r);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              q.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQSummary_CLanguageInfo";
          }
        };
        m(be, "sm_m"), m(be, "sm_mbf");
        let Ae = be;
        const oe = class U extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              U.prototype.faq_id || t.Sg(U.M()),
              o.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              U.sm_m ||
                (U.sm_m = {
                  proto: U,
                  fields: {
                    faq_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    language: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    version: {
                      n: 3,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    content: {
                      n: 4,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    title: { n: 5, br: t.qM.readString, bw: t.gp.writeString },
                    timestamp: {
                      n: 6,
                      br: t.qM.readFixed32,
                      bw: t.gp.writeFixed32,
                    },
                    author_account_id: {
                      n: 7,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    url_code: {
                      n: 8,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              U.sm_m
            );
          }
          static MBF() {
            return U.sm_mbf || (U.sm_mbf = t.w0(U.M())), U.sm_mbf;
          }
          toObject(e = !1) {
            return U.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(U.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(U.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (s().BinaryReader)(e),
              c = new U();
            return U.deserializeBinaryFromReader(c, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(U.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(U.M(), e, r);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              U.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQContent";
          }
        };
        m(oe, "sm_m"), m(oe, "sm_mbf");
        let p = oe;
        const Re = class _ extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              _.prototype.steamid || t.Sg(_.M()),
              o.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    internal_name: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    json_data: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = t.w0(_.M())), _.sm_mbf;
          }
          toObject(e = !1) {
            return _.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(_.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(_.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (s().BinaryReader)(e),
              c = new _();
            return _.deserializeBinaryFromReader(c, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(_.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(_.M(), e, r);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_Create_Request";
          }
        };
        m(Re, "sm_m"), m(Re, "sm_mbf");
        let Ue = Re;
        const ve = class j extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              j.prototype.faq_id || t.Sg(j.M()),
              o.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              j.sm_m ||
                (j.sm_m = {
                  proto: j,
                  fields: {
                    faq_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              j.sm_m
            );
          }
          static MBF() {
            return j.sm_mbf || (j.sm_mbf = t.w0(j.M())), j.sm_mbf;
          }
          toObject(e = !1) {
            return j.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(j.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(j.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (s().BinaryReader)(e),
              c = new j();
            return j.deserializeBinaryFromReader(c, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(j.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(j.M(), e, r);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              j.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_Create_Response";
          }
        };
        m(ve, "sm_m"), m(ve, "sm_mbf");
        let Ce = ve;
        const Se = class T extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              T.prototype.steamid || t.Sg(T.M()),
              o.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              T.sm_m ||
                (T.sm_m = {
                  proto: T,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    faq_id: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              T.sm_m
            );
          }
          static MBF() {
            return T.sm_mbf || (T.sm_mbf = t.w0(T.M())), T.sm_mbf;
          }
          toObject(e = !1) {
            return T.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(T.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(T.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (s().BinaryReader)(e),
              c = new T();
            return T.deserializeBinaryFromReader(c, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(T.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(T.M(), e, r);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              T.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_Delete_Request";
          }
        };
        m(Se, "sm_m"), m(Se, "sm_mbf");
        let Me = Se;
        class Be extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), o.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Be.toObject(e, this);
          }
          static toObject(e, r) {
            return e ? { $jspbMessageInstance: r } : {};
          }
          static fromObject(e) {
            return new Be();
          }
          static deserializeBinary(e) {
            let r = new (s().BinaryReader)(e),
              c = new Be();
            return Be.deserializeBinaryFromReader(c, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return e;
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Be.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {}
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Be.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_Delete_Response";
          }
        }
        const g = class W extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              W.prototype.steamid || t.Sg(W.M()),
              o.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              W.sm_m ||
                (W.sm_m = {
                  proto: W,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    faq_id: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    internal_name: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              W.sm_m
            );
          }
          static MBF() {
            return W.sm_mbf || (W.sm_mbf = t.w0(W.M())), W.sm_mbf;
          }
          toObject(e = !1) {
            return W.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(W.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(W.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (s().BinaryReader)(e),
              c = new W();
            return W.deserializeBinaryFromReader(c, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(W.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(W.M(), e, r);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              W.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_UpdateInternalName_Request";
          }
        };
        m(g, "sm_m"), m(g, "sm_mbf");
        let z = g;
        class le extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), o.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return le.toObject(e, this);
          }
          static toObject(e, r) {
            return e ? { $jspbMessageInstance: r } : {};
          }
          static fromObject(e) {
            return new le();
          }
          static deserializeBinary(e) {
            let r = new (s().BinaryReader)(e),
              c = new le();
            return le.deserializeBinaryFromReader(c, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return e;
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return le.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {}
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              le.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_UpdateInternalName_Response";
          }
        }
        const pe = class O extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              O.prototype.steamid || t.Sg(O.M()),
              o.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              O.sm_m ||
                (O.sm_m = {
                  proto: O,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    faq_id: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    json_data: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              O.sm_m
            );
          }
          static MBF() {
            return O.sm_mbf || (O.sm_mbf = t.w0(O.M())), O.sm_mbf;
          }
          toObject(e = !1) {
            return O.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(O.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(O.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (s().BinaryReader)(e),
              c = new O();
            return O.deserializeBinaryFromReader(c, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(O.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(O.M(), e, r);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              O.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_UpdateJsonData_Request";
          }
        };
        m(pe, "sm_m"), m(pe, "sm_mbf");
        let we = pe;
        class v extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), o.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return v.toObject(e, this);
          }
          static toObject(e, r) {
            return e ? { $jspbMessageInstance: r } : {};
          }
          static fromObject(e) {
            return new v();
          }
          static deserializeBinary(e) {
            let r = new (s().BinaryReader)(e),
              c = new v();
            return v.deserializeBinaryFromReader(c, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return e;
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {}
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              v.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_UpdateJsonData_Response";
          }
        }
        const R = class D extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              D.prototype.steamid || t.Sg(D.M()),
              o.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              D.sm_m ||
                (D.sm_m = {
                  proto: D,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    faq_id: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    visible_in_global_realm: {
                      n: 3,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    visible_in_china_realm: {
                      n: 4,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              D.sm_m
            );
          }
          static MBF() {
            return D.sm_mbf || (D.sm_mbf = t.w0(D.M())), D.sm_mbf;
          }
          toObject(e = !1) {
            return D.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(D.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(D.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (s().BinaryReader)(e),
              c = new D();
            return D.deserializeBinaryFromReader(c, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(D.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(D.M(), e, r);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              D.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_SetVisibility_Request";
          }
        };
        m(R, "sm_m"), m(R, "sm_mbf");
        let me = R;
        class ue extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), o.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return ue.toObject(e, this);
          }
          static toObject(e, r) {
            return e ? { $jspbMessageInstance: r } : {};
          }
          static fromObject(e) {
            return new ue();
          }
          static deserializeBinary(e) {
            let r = new (s().BinaryReader)(e),
              c = new ue();
            return ue.deserializeBinaryFromReader(c, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return e;
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {}
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              ue.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_SetVisibility_Response";
          }
        }
        const Te = class I extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              I.prototype.steamid || t.Sg(I.M()),
              o.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              I.sm_m ||
                (I.sm_m = {
                  proto: I,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    faq_id: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    language: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    content: {
                      n: 4,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    title: { n: 5, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              I.sm_m
            );
          }
          static MBF() {
            return I.sm_mbf || (I.sm_mbf = t.w0(I.M())), I.sm_mbf;
          }
          toObject(e = !1) {
            return I.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(I.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(I.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (s().BinaryReader)(e),
              c = new I();
            return I.deserializeBinaryFromReader(c, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(I.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(I.M(), e, r);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              I.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_UpdateDraft_Request";
          }
        };
        m(Te, "sm_m"), m(Te, "sm_mbf");
        let _e = Te;
        const We = class P extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              P.prototype.last_update_timestamp || t.Sg(P.M()),
              o.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              P.sm_m ||
                (P.sm_m = {
                  proto: P,
                  fields: {
                    last_update_timestamp: {
                      n: 1,
                      br: t.qM.readFixed32,
                      bw: t.gp.writeFixed32,
                    },
                  },
                }),
              P.sm_m
            );
          }
          static MBF() {
            return P.sm_mbf || (P.sm_mbf = t.w0(P.M())), P.sm_mbf;
          }
          toObject(e = !1) {
            return P.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(P.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(P.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (s().BinaryReader)(e),
              c = new P();
            return P.deserializeBinaryFromReader(c, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(P.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(P.M(), e, r);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              P.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_UpdateDraft_Response";
          }
        };
        m(We, "sm_m"), m(We, "sm_mbf");
        let Ge = We;
        const Oe = class G extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              G.prototype.steamid || t.Sg(G.M()),
              o.Message.initialize(this, e, 0, -1, [3], null);
          }
          static M() {
            return (
              G.sm_m ||
                (G.sm_m = {
                  proto: G,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    faq_id: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    language: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: t.qM.readUint32,
                      pbr: t.qM.readPackedUint32,
                      bw: t.gp.writeRepeatedUint32,
                    },
                  },
                }),
              G.sm_m
            );
          }
          static MBF() {
            return G.sm_mbf || (G.sm_mbf = t.w0(G.M())), G.sm_mbf;
          }
          toObject(e = !1) {
            return G.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(G.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(G.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (s().BinaryReader)(e),
              c = new G();
            return G.deserializeBinaryFromReader(c, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(G.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(G.M(), e, r);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              G.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_PublishDraft_Request";
          }
        };
        m(Oe, "sm_m"), m(Oe, "sm_mbf");
        let Pe = Oe;
        const De = class E extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              E.prototype.last_publish_timestamp || t.Sg(E.M()),
              o.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              E.sm_m ||
                (E.sm_m = {
                  proto: E,
                  fields: {
                    last_publish_timestamp: {
                      n: 1,
                      br: t.qM.readFixed32,
                      bw: t.gp.writeFixed32,
                    },
                  },
                }),
              E.sm_m
            );
          }
          static MBF() {
            return E.sm_mbf || (E.sm_mbf = t.w0(E.M())), E.sm_mbf;
          }
          toObject(e = !1) {
            return E.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(E.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(E.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (s().BinaryReader)(e),
              c = new E();
            return E.deserializeBinaryFromReader(c, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(E.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(E.M(), e, r);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              E.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_PublishDraft_Response";
          }
        };
        m(De, "sm_m"), m(De, "sm_mbf");
        let b = De;
        const i = class L extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              L.prototype.steamid || t.Sg(L.M()),
              o.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              L.sm_m ||
                (L.sm_m = {
                  proto: L,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    faq_id: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    language: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              L.sm_m
            );
          }
          static MBF() {
            return L.sm_mbf || (L.sm_mbf = t.w0(L.M())), L.sm_mbf;
          }
          toObject(e = !1) {
            return L.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(L.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(L.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (s().BinaryReader)(e),
              c = new L();
            return L.deserializeBinaryFromReader(c, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(L.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(L.M(), e, r);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              L.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_PreviewDraft_Request";
          }
        };
        m(i, "sm_m"), m(i, "sm_mbf");
        let a = i;
        const n = class x extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              x.prototype.faq || t.Sg(x.M()),
              o.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              x.sm_m ||
                (x.sm_m = { proto: x, fields: { faq: { n: 1, c: p } } }),
              x.sm_m
            );
          }
          static MBF() {
            return x.sm_mbf || (x.sm_mbf = t.w0(x.M())), x.sm_mbf;
          }
          toObject(e = !1) {
            return x.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(x.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(x.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (s().BinaryReader)(e),
              c = new x();
            return x.deserializeBinaryFromReader(c, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(x.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(x.M(), e, r);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              x.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_PreviewDraft_Response";
          }
        };
        m(n, "sm_m"), m(n, "sm_mbf");
        let l = n;
        const u = class N extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              N.prototype.faq_id || t.Sg(N.M()),
              o.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              N.sm_m ||
                (N.sm_m = {
                  proto: N,
                  fields: {
                    faq_id: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    language: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              N.sm_m
            );
          }
          static MBF() {
            return N.sm_mbf || (N.sm_mbf = t.w0(N.M())), N.sm_mbf;
          }
          toObject(e = !1) {
            return N.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(N.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(N.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (s().BinaryReader)(e),
              c = new N();
            return N.deserializeBinaryFromReader(c, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(N.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(N.M(), e, r);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              N.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_GetFAQ_Request";
          }
        };
        m(u, "sm_m"), m(u, "sm_mbf");
        let f = u;
        const d = class V extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              V.prototype.faq || t.Sg(V.M()),
              o.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              V.sm_m ||
                (V.sm_m = {
                  proto: V,
                  fields: {
                    faq: { n: 1, c: p },
                    faq_exists: {
                      n: 2,
                      d: !1,
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
          toObject(e = !1) {
            return V.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(V.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(V.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (s().BinaryReader)(e),
              c = new V();
            return V.deserializeBinaryFromReader(c, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(V.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(V.M(), e, r);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              V.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_GetFAQ_Response";
          }
        };
        m(d, "sm_m"), m(d, "sm_mbf");
        let F = d;
        const A = class H extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              H.prototype.steamid || t.Sg(H.M()),
              o.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              H.sm_m ||
                (H.sm_m = {
                  proto: H,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    faq_id: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    language: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    version: {
                      n: 4,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              H.sm_m
            );
          }
          static MBF() {
            return H.sm_mbf || (H.sm_mbf = t.w0(H.M())), H.sm_mbf;
          }
          toObject(e = !1) {
            return H.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(H.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(H.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (s().BinaryReader)(e),
              c = new H();
            return H.deserializeBinaryFromReader(c, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(H.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(H.M(), e, r);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              H.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_GetFAQVersion_Request";
          }
        };
        m(A, "sm_m"), m(A, "sm_mbf");
        let fe = A;
        const ce = class K extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              K.prototype.faq || t.Sg(K.M()),
              o.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              K.sm_m ||
                (K.sm_m = { proto: K, fields: { faq: { n: 1, c: p } } }),
              K.sm_m
            );
          }
          static MBF() {
            return K.sm_mbf || (K.sm_mbf = t.w0(K.M())), K.sm_mbf;
          }
          toObject(e = !1) {
            return K.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(K.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(K.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (s().BinaryReader)(e),
              c = new K();
            return K.deserializeBinaryFromReader(c, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(K.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(K.M(), e, r);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              K.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_GetFAQVersion_Response";
          }
        };
        m(ce, "sm_m"), m(ce, "sm_mbf");
        let Qe = ce;
        const qe = class J extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              J.prototype.steamid || t.Sg(J.M()),
              o.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              J.sm_m ||
                (J.sm_m = {
                  proto: J,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    faq_id: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              J.sm_m
            );
          }
          static MBF() {
            return J.sm_mbf || (J.sm_mbf = t.w0(J.M())), J.sm_mbf;
          }
          toObject(e = !1) {
            return J.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(J.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(J.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (s().BinaryReader)(e),
              c = new J();
            return J.deserializeBinaryFromReader(c, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(J.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(J.M(), e, r);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              J.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_GetAllDrafts_Request";
          }
        };
        m(qe, "sm_m"), m(qe, "sm_mbf");
        let et = qe;
        const Ee = class $ extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              $.prototype.summary || t.Sg($.M()),
              o.Message.initialize(this, e, 0, -1, [2], null);
          }
          static M() {
            return (
              $.sm_m ||
                ($.sm_m = {
                  proto: $,
                  fields: {
                    summary: { n: 1, c: ge },
                    draft: { n: 2, c: p, r: !0, q: !0 },
                  },
                }),
              $.sm_m
            );
          }
          static MBF() {
            return $.sm_mbf || ($.sm_mbf = t.w0($.M())), $.sm_mbf;
          }
          toObject(e = !1) {
            return $.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT($.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq($.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (s().BinaryReader)(e),
              c = new $();
            return $.deserializeBinaryFromReader(c, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj($.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0($.M(), e, r);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              $.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_GetAllDrafts_Response";
          }
        };
        m(Ee, "sm_m"), m(Ee, "sm_mbf");
        let it = Ee;
        const Le = class Y extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Y.prototype.steamid || t.Sg(Y.M()),
              o.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Y.sm_m ||
                (Y.sm_m = {
                  proto: Y,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              Y.sm_m
            );
          }
          static MBF() {
            return Y.sm_mbf || (Y.sm_mbf = t.w0(Y.M())), Y.sm_mbf;
          }
          toObject(e = !1) {
            return Y.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Y.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Y.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (s().BinaryReader)(e),
              c = new Y();
            return Y.deserializeBinaryFromReader(c, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Y.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Y.M(), e, r);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Y.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_GetAllFAQsForClan_Request";
          }
        };
        m(Le, "sm_m"), m(Le, "sm_mbf");
        let at = Le;
        const xe = class Z extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Z.prototype.faq || t.Sg(Z.M()),
              o.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              Z.sm_m ||
                (Z.sm_m = {
                  proto: Z,
                  fields: { faq: { n: 1, c: ge, r: !0, q: !0 } },
                }),
              Z.sm_m
            );
          }
          static MBF() {
            return Z.sm_mbf || (Z.sm_mbf = t.w0(Z.M())), Z.sm_mbf;
          }
          toObject(e = !1) {
            return Z.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Z.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Z.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (s().BinaryReader)(e),
              c = new Z();
            return Z.deserializeBinaryFromReader(c, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Z.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Z.M(), e, r);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Z.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_GetAllFAQsForClan_Response";
          }
        };
        m(xe, "sm_m"), m(xe, "sm_mbf");
        let st = xe;
        const Ne = class X extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              X.prototype.steamid || t.Sg(X.M()),
              o.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              X.sm_m ||
                (X.sm_m = {
                  proto: X,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    faq_id: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              X.sm_m
            );
          }
          static MBF() {
            return X.sm_mbf || (X.sm_mbf = t.w0(X.M())), X.sm_mbf;
          }
          toObject(e = !1) {
            return X.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(X.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(X.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (s().BinaryReader)(e),
              c = new X();
            return X.deserializeBinaryFromReader(c, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(X.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(X.M(), e, r);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              X.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_GetAllLatestVersionPublishedFAQS_Request";
          }
        };
        m(Ne, "sm_m"), m(Ne, "sm_mbf");
        let nt = Ne;
        const Ve = class k extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              k.prototype.faqs || t.Sg(k.M()),
              o.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              k.sm_m ||
                (k.sm_m = {
                  proto: k,
                  fields: { faqs: { n: 1, c: p, r: !0, q: !0 } },
                }),
              k.sm_m
            );
          }
          static MBF() {
            return k.sm_mbf || (k.sm_mbf = t.w0(k.M())), k.sm_mbf;
          }
          toObject(e = !1) {
            return k.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(k.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(k.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (s().BinaryReader)(e),
              c = new k();
            return k.deserializeBinaryFromReader(c, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(k.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(k.M(), e, r);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              k.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_GetAllLatestVersionPublishedFAQS_Response";
          }
        };
        m(Ve, "sm_m"), m(Ve, "sm_mbf");
        let lt = Ve;
        const He = class ee extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ee.prototype.steamid || t.Sg(ee.M()),
              o.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              ee.sm_m ||
                (ee.sm_m = {
                  proto: ee,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              ee.sm_m
            );
          }
          static MBF() {
            return ee.sm_mbf || (ee.sm_mbf = t.w0(ee.M())), ee.sm_mbf;
          }
          toObject(e = !1) {
            return ee.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(ee.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(ee.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (s().BinaryReader)(e),
              c = new ee();
            return ee.deserializeBinaryFromReader(c, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(ee.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(ee.M(), e, r);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              ee.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_CheckFAQPermissions_Request";
          }
        };
        m(He, "sm_m"), m(He, "sm_mbf");
        let ot = He;
        class he extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), o.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return he.toObject(e, this);
          }
          static toObject(e, r) {
            return e ? { $jspbMessageInstance: r } : {};
          }
          static fromObject(e) {
            return new he();
          }
          static deserializeBinary(e) {
            let r = new (s().BinaryReader)(e),
              c = new he();
            return he.deserializeBinaryFromReader(c, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return e;
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return he.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {}
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              he.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_CheckFAQPermissions_Response";
          }
        }
        const Ke = class te extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              te.prototype.search_text || t.Sg(te.M()),
              o.Message.initialize(this, e, 0, -1, [2, 5], null);
          }
          static M() {
            return (
              te.sm_m ||
                (te.sm_m = {
                  proto: te,
                  fields: {
                    search_text: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    elanguages: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: t.qM.readInt32,
                      pbr: t.qM.readPackedInt32,
                      bw: t.gp.writeRepeatedInt32,
                    },
                    count: { n: 3, br: t.qM.readInt32, bw: t.gp.writeInt32 },
                    cursor: { n: 4, br: t.qM.readString, bw: t.gp.writeString },
                    filter_clanids: {
                      n: 5,
                      r: !0,
                      q: !0,
                      br: t.qM.readUint32,
                      pbr: t.qM.readPackedUint32,
                      bw: t.gp.writeRepeatedUint32,
                    },
                  },
                }),
              te.sm_m
            );
          }
          static MBF() {
            return te.sm_mbf || (te.sm_mbf = t.w0(te.M())), te.sm_mbf;
          }
          toObject(e = !1) {
            return te.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(te.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(te.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (s().BinaryReader)(e),
              c = new te();
            return te.deserializeBinaryFromReader(c, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(te.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(te.M(), e, r);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              te.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_SearchFAQs_Request";
          }
        };
        m(Ke, "sm_m"), m(Ke, "sm_mbf");
        let mt = Ke;
        const Je = class re extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              re.prototype.faqs || t.Sg(re.M()),
              o.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              re.sm_m ||
                (re.sm_m = {
                  proto: re,
                  fields: {
                    faqs: { n: 1, c: ct, r: !0, q: !0 },
                    num_total_results: {
                      n: 2,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    next_cursor: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              re.sm_m
            );
          }
          static MBF() {
            return re.sm_mbf || (re.sm_mbf = t.w0(re.M())), re.sm_mbf;
          }
          toObject(e = !1) {
            return re.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(re.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(re.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (s().BinaryReader)(e),
              c = new re();
            return re.deserializeBinaryFromReader(c, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(re.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(re.M(), e, r);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              re.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_SearchFAQs_Response";
          }
        };
        m(Je, "sm_m"), m(Je, "sm_mbf");
        let ut = Je;
        const $e = class ie extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ie.prototype.articleid || t.Sg(ie.M()),
              o.Message.initialize(this, e, 0, -1, [6], null);
          }
          static M() {
            return (
              ie.sm_m ||
                (ie.sm_m = {
                  proto: ie,
                  fields: {
                    articleid: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    name: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                    content: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    clan_accountid: {
                      n: 4,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    url_code: {
                      n: 5,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    localized_names: {
                      n: 6,
                      r: !0,
                      q: !0,
                      br: t.qM.readString,
                      bw: t.gp.writeRepeatedString,
                    },
                  },
                }),
              ie.sm_m
            );
          }
          static MBF() {
            return ie.sm_mbf || (ie.sm_mbf = t.w0(ie.M())), ie.sm_mbf;
          }
          toObject(e = !1) {
            return ie.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(ie.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(ie.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (s().BinaryReader)(e),
              c = new ie();
            return ie.deserializeBinaryFromReader(c, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(ie.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(ie.M(), e, r);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              ie.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQS_SearchFAQs_Response_CFAQSearchResult";
          }
        };
        m($e, "sm_m"), m($e, "sm_mbf");
        let ct = $e;
        const Ye = class ae extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ae.prototype.faq_id || t.Sg(ae.M()),
              o.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              ae.sm_m ||
                (ae.sm_m = {
                  proto: ae,
                  fields: {
                    faq_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    language: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    steamid: {
                      n: 3,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              ae.sm_m
            );
          }
          static MBF() {
            return ae.sm_mbf || (ae.sm_mbf = t.w0(ae.M())), ae.sm_mbf;
          }
          toObject(e = !1) {
            return ae.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(ae.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(ae.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (s().BinaryReader)(e),
              c = new ae();
            return ae.deserializeBinaryFromReader(c, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(ae.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(ae.M(), e, r);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              ae.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQs_FetchLocalizationFromCrowdIn_Request";
          }
        };
        m(Ye, "sm_m"), m(Ye, "sm_mbf");
        let tt = Ye;
        class Fe extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), o.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Fe.toObject(e, this);
          }
          static toObject(e, r) {
            return e ? { $jspbMessageInstance: r } : {};
          }
          static fromObject(e) {
            return new Fe();
          }
          static deserializeBinary(e) {
            let r = new (s().BinaryReader)(e),
              c = new Fe();
            return Fe.deserializeBinaryFromReader(c, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return e;
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {}
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Fe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQs_FetchLocalizationFromCrowdIn_Response";
          }
        }
        const Ze = class se extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              se.prototype.faq_id || t.Sg(se.M()),
              o.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              se.sm_m ||
                (se.sm_m = {
                  proto: se,
                  fields: {
                    faq_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    steamid: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              se.sm_m
            );
          }
          static MBF() {
            return se.sm_mbf || (se.sm_mbf = t.w0(se.M())), se.sm_mbf;
          }
          toObject(e = !1) {
            return se.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(se.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(se.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (s().BinaryReader)(e),
              c = new se();
            return se.deserializeBinaryFromReader(c, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(se.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return se.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(se.M(), e, r);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              se.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQs_GetCrowdInMetadata_Request";
          }
        };
        m(Ze, "sm_m"), m(Ze, "sm_mbf");
        let rt = Ze;
        const Xe = class ne extends o.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ne.prototype.crowdin_project_id || t.Sg(ne.M()),
              o.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              ne.sm_m ||
                (ne.sm_m = {
                  proto: ne,
                  fields: {
                    crowdin_project_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    crowdin_file_id: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              ne.sm_m
            );
          }
          static MBF() {
            return ne.sm_mbf || (ne.sm_mbf = t.w0(ne.M())), ne.sm_mbf;
          }
          toObject(e = !1) {
            return ne.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(ne.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(ne.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (s().BinaryReader)(e),
              c = new ne();
            return ne.deserializeBinaryFromReader(c, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(ne.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(ne.M(), e, r);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              ne.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQs_GetCrowdInMetadata_Response";
          }
        };
        m(Xe, "sm_m"), m(Xe, "sm_mbf");
        let dt = Xe;
        var ke;
        ((C) => {
          function e(y, M, S) {
            return y.SendMsg("ClanFAQS.Create#1", (0, w.I8)(Ue, M, S), Ce, {
              ePrivilege: 1,
            });
          }
          C.Create = e;
          function r(y, M, S) {
            return y.SendMsg("ClanFAQS.Delete#1", (0, w.I8)(Me, M, S), Be, {
              ePrivilege: 1,
            });
          }
          C.Delete = r;
          function c(y, M, S) {
            return y.SendMsg(
              "ClanFAQS.UpdateInternalName#1",
              (0, w.I8)(z, M, S),
              le,
              { ePrivilege: 1 },
            );
          }
          C.UpdateInternalName = c;
          function ft(y, M, S) {
            return y.SendMsg(
              "ClanFAQS.UpdateJsonData#1",
              (0, w.I8)(we, M, S),
              v,
              { ePrivilege: 1 },
            );
          }
          C.UpdateJsonData = ft;
          function gt(y, M, S) {
            return y.SendMsg(
              "ClanFAQS.SetVisibility#1",
              (0, w.I8)(me, M, S),
              ue,
              { ePrivilege: 1 },
            );
          }
          C.SetVisibility = gt;
          function Bt(y, M, S) {
            return y.SendMsg(
              "ClanFAQS.UpdateDraft#1",
              (0, w.I8)(_e, M, S),
              Ge,
              { ePrivilege: 1 },
            );
          }
          C.UpdateDraft = Bt;
          function bt(y, M, S) {
            return y.SendMsg(
              "ClanFAQS.PublishDraft#1",
              (0, w.I8)(Pe, M, S),
              b,
              { ePrivilege: 1 },
            );
          }
          C.PublishDraft = bt;
          function pt(y, M, S) {
            return y.SendMsg("ClanFAQS.PreviewDraft#1", (0, w.I8)(a, M, S), l, {
              ePrivilege: 1,
            });
          }
          C.PreviewDraft = pt;
          function yt(y, M, S) {
            return y.SendMsg("ClanFAQS.GetFAQ#1", (0, w.I8)(f, M, S), F, {
              bConstMethod: !0,
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          }
          C.GetFAQ = yt;
          function Mt(y, M, S) {
            return y.SendMsg(
              "ClanFAQS.GetFAQVersion#1",
              (0, w.I8)(fe, M, S),
              Qe,
              { ePrivilege: 1 },
            );
          }
          C.GetFAQVersion = Mt;
          function St(y, M, S) {
            return y.SendMsg(
              "ClanFAQS.GetAllDrafts#1",
              (0, w.I8)(et, M, S),
              it,
              { ePrivilege: 1 },
            );
          }
          C.GetAllDrafts = St;
          function wt(y, M, S) {
            return y.SendMsg(
              "ClanFAQS.GetAllFAQsForClan#1",
              (0, w.I8)(at, M, S),
              st,
              { ePrivilege: 1 },
            );
          }
          C.GetAllFAQsForClan = wt;
          function ht(y, M, S) {
            return y.SendMsg(
              "ClanFAQS.GetAllLatestVersionPublishedFAQS#1",
              (0, w.I8)(nt, M, S),
              lt,
              { ePrivilege: 1 },
            );
          }
          C.GetAllLatestVersionPublishedFAQS = ht;
          function Ft(y, M, S) {
            return y.SendMsg(
              "ClanFAQS.CheckFAQPermissions#1",
              (0, w.I8)(ot, M, S),
              he,
              { ePrivilege: 1 },
            );
          }
          C.CheckFAQPermissions = Ft;
          function Rt(y, M, S) {
            return y.SendMsg("ClanFAQS.SearchFAQs#1", (0, w.I8)(mt, M, S), ut, {
              bConstMethod: !0,
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          }
          C.SearchFAQs = Rt;
          function Ct(y, M, S) {
            return y.SendMsg(
              "ClanFAQS.FetchLocalizationFromCrowdIn#1",
              (0, w.I8)(tt, M, S),
              Fe,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }
          C.FetchLocalizationFromCrowdIn = Ct;
          function zt(y, M, S) {
            return y.SendMsg(
              "ClanFAQS.GetCrowdInMetadata#1",
              (0, w.I8)(rt, M, S),
              dt,
              { ePrivilege: 5 },
            );
          }
          C.GetCrowdInMetadata = zt;
        })(ke || (ke = {}));
      },
      71462: (Ie, je, B) => {
        "use strict";
        B.d(je, { u: () => Ce });
        var o = B(7850),
          s = B(90626),
          t = B(32093),
          w = B(39239),
          ye = B(13465),
          h = B(36707),
          m = B(3166),
          de = B(96232),
          ge = B(7487),
          be = B(70187),
          Ae = B(86241),
          oe = B(16516),
          p = B.n(oe),
          Re = B(1917),
          Ue = B(29630);
        const ve = new Map([
            ...Array.from(be.W4.entries()),
            ...Array.from(be.N2.entries()),
            ["section", { Constructor: Se, autocloses: !1 }],
            ["img", { Constructor: Me, autocloses: !1 }],
            ["exclude_realm", { Constructor: Be, autocloses: !1 }],
          ]),
          Ce = (g) => {
            const { text: z, bShowErrorInfo: le, version: pe } = g,
              we = s.useCallback(
                (R) =>
                  new Ae.gL(
                    new Ae.pH(
                      new ge.OJ(new ge.R8()),
                      R,
                      [
                        {
                          urlRegExp: /youtu.be|youtube.com/i,
                          fnBBComponent: Re.j6,
                        },
                      ],
                      {},
                    ),
                    R,
                  ),
                [],
              ),
              v = s.useRef(new de.B(ve, we, m.TS.LANGUAGE));
            return (0, o.jsx)("div", {
              className: p().FAQContainer,
              children: v.current.ParseBBCode(z, {
                showErrorInfo: le,
                version: pe,
              }),
            });
          };
        function Se(g) {
          let z = (0, be.j$)(g.args, "id");
          z &&
            typeof z == "string" &&
            z.length > 0 &&
            z[0] === "#" &&
            (z = z.substring(1));
          const le = (0, be.j$)(g.args, "style"),
            pe = (0, h.A)(
              p().Section,
              le == "note" && p().Note,
              le == "important" && p().Important,
              le == "warning" && p().Warning,
            );
          return (0, o.jsx)("div", {
            id: z || void 0,
            className: pe,
            children: g.children,
          });
        }
        function Me(g) {
          var z, le, pe;
          const { showErrorInfo: we, version: v } = g.context;
          let R =
            (z = g == null ? void 0 : g.children) == null
              ? void 0
              : z.toString();
          (R == null || R == null || R.length == 0) &&
            (R = (le = g == null ? void 0 : g.args) == null ? void 0 : le[""]);
          const me =
              (pe = g == null ? void 0 : g.args) == null ? void 0 : pe.alt,
            ue = (0, Ue.z5)(R, g.language, Number.parseInt(v));
          return ue == null
            ? null
            : typeof ue == "string"
              ? ((R = ue),
                we
                  ? (0, o.jsx)(w.i, {
                      className: p().FAQImage,
                      src: R,
                      alt: me,
                    })
                  : ((R = R.replace("http://", "https://")),
                    (0, o.jsx)("img", {
                      className: p().FAQImage,
                      src: R,
                      alt: me,
                    })))
              : (0, o.jsx)(ye.c, {
                  className: p().FAQImage,
                  rgSources: ue,
                  alt: me,
                });
        }
        function Be(g) {
          const z = (0, be.j$)(g.args);
          return (z == "global" && m.TS.EREALM == t.TU.k_ESteamRealmGlobal) ||
            (z == "china" && (0, m.Y2)())
            ? null
            : (0, o.jsx)(o.Fragment, { children: g.children });
        }
      },
      90395: (Ie, je, B) => {
        "use strict";
        B.d(je, {
          pN: () => me,
          Wj: () => _e,
          CJ: () => Te,
          z5: () => Ge,
          cf: () => Pe,
          g5: () => Oe,
          W: () => De,
          Kv: () => We,
        });
        var o = B(41735),
          s = B.n(o),
          t = B(38506),
          w = B(14947),
          ye = B(90626),
          h = B(72604),
          m = B(99412),
          de = B(35038),
          ge = B(32093),
          be = B(71742),
          Ae = B(27066),
          oe = B(34592),
          p = B(3166),
          Re = Object.defineProperty,
          Ue = Object.getOwnPropertyDescriptor,
          ve = (b, i, a) =>
            i in b
              ? Re(b, i, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: a,
                })
              : (b[i] = a),
          Ce = (b, i, a, n) => {
            for (
              var l = n > 1 ? void 0 : n ? Ue(i, a) : i, u = b.length - 1, f;
              u >= 0;
              u--
            )
              (f = b[u]) && (l = (n ? f(i, a, l) : f(l)) || l);
            return n && l && Re(i, a, l), l;
          },
          Se = (b, i, a) => ve(b, typeof i != "symbol" ? i + "" : i, a);
        class Me {
          constructor(i, a) {
            Se(this, "m_summary"),
              Se(this, "m_mapStoredDrafts"),
              Se(this, "m_mapLocalUpdates", new Map()),
              (0, w.Gn)(this),
              (this.m_summary = i),
              (this.m_mapStoredDrafts = a),
              (this.m_mapLocalUpdates = new Map());
            for (let n = m.Bhc; n < m.bP9; n++)
              this.m_mapLocalUpdates.set(n, {});
          }
          BNeedsSaving(i) {
            if (i !== void 0) {
              const a = this.m_mapLocalUpdates.get(i);
              return !!a.strTitle || !!a.strContent;
            }
            return Array.from(this.m_mapLocalUpdates.values()).some(
              (a) => !!a.strTitle || !!a.strContent,
            );
          }
          async SaveDrafts() {
            var i, a, n, l;
            (0, be.wT)(
              !!((i = this.m_summary) != null && i.faq_id),
              "Attempting to save when we lack a FaqID in the summary object",
            );
            let u = h.R,
              f = new Array();
            for (let d = m.Bhc; d < m.bP9; ++d)
              if (
                (this.m_mapLocalUpdates.get(d).strTitle &&
                  this.m_mapLocalUpdates.get(d).strTitle !==
                    ((a = this.m_mapStoredDrafts.get(d)) == null
                      ? void 0
                      : a.title)) ||
                (this.m_mapLocalUpdates.get(d).strContent &&
                  this.m_mapLocalUpdates.get(d).strContent !==
                    ((n = this.m_mapStoredDrafts.get(d)) == null
                      ? void 0
                      : n.content))
              ) {
                const F = this.GetDraftTitle(d),
                  A = this.GetDraftContent(d),
                  fe = me
                    .Get()
                    .UpdateDraft(
                      (l = this.m_summary) == null ? void 0 : l.faq_id,
                      d,
                      F,
                      A,
                    );
                fe
                  .then((ce) => {
                    ce.eResult == h.R
                      ? (0, w.h5)(() => {
                          this.m_mapStoredDrafts.has(d) ||
                            this.m_mapStoredDrafts.set(d, {}),
                            (this.m_mapStoredDrafts.get(d).title = F),
                            (this.m_mapStoredDrafts.get(d).content = A),
                            (this.m_mapStoredDrafts.get(d).timestamp =
                              ce.rtUpdateTime),
                            (this.m_mapStoredDrafts.get(d).author_account_id =
                              p.iA.accountid.toString()),
                            (this.m_mapLocalUpdates.get(d).strTitle = null),
                            (this.m_mapLocalUpdates.get(d).strContent = null);
                          let Qe = !1;
                          this.m_summary.per_language_info.forEach((qe) => {
                            d == qe.language &&
                              ((Qe = !0),
                              (qe.last_update_timestamp = Math.max(
                                qe.last_update_timestamp,
                                ce.rtUpdateTime,
                              )));
                          }),
                            Qe ||
                              this.m_summary.per_language_info.push({
                                language: d,
                                last_update_timestamp: ce.rtUpdateTime,
                              });
                        })
                      : u == h.R &&
                        (console.error(
                          "FAQModel.SaveDraft: Response not ok " + ce.eResult,
                          ce,
                        ),
                        (u = ce.eResult));
                  })
                  .catch((ce) => {
                    console.error(
                      "FAQModel.SaveDrafts: Hit error " +
                        (0, oe.H)(ce).strErrorMsg,
                    ),
                      u == h.R && (u = h.zi);
                  }),
                  f.push(fe);
              }
            return await Promise.all(f), u;
          }
          GetFAQInternalName() {
            var i;
            return (i = this.m_summary) == null ? void 0 : i.internal_name;
          }
          GetDraftTitle(i) {
            var a;
            return this.m_mapLocalUpdates.get(i).strTitle !== null &&
              this.m_mapLocalUpdates.get(i).strTitle !== void 0
              ? this.m_mapLocalUpdates.get(i).strTitle
              : (a = this.m_mapStoredDrafts.get(i)) == null
                ? void 0
                : a.title;
          }
          GetDraftContent(i) {
            var a;
            return this.m_mapLocalUpdates.get(i).strContent !== null &&
              this.m_mapLocalUpdates.get(i).strContent !== void 0
              ? this.m_mapLocalUpdates.get(i).strContent
              : (a = this.m_mapStoredDrafts.get(i)) == null
                ? void 0
                : a.content;
          }
          GetDraftTitleWithFallback(i, a = ge.TU.k_ESteamRealmGlobal) {
            var n, l, u, f, d, F;
            const A = a == ge.TU.k_ESteamRealmChina ? m.NFp : m.Bhc;
            return (F =
              (d =
                (u =
                  (n = this.m_mapLocalUpdates.get(i).strTitle) != null
                    ? n
                    : this.m_mapLocalUpdates.get(A).strTitle) != null
                  ? u
                  : (l = this.m_mapStoredDrafts.get(i)) == null
                    ? void 0
                    : l.title) != null
                ? d
                : (f = this.m_mapStoredDrafts.get(A)) == null
                  ? void 0
                  : f.title) != null
              ? F
              : "";
          }
          GetDraftContentWithFallback(i, a = ge.TU.k_ESteamRealmGlobal) {
            var n, l, u, f, d, F;
            const A = a == ge.TU.k_ESteamRealmChina ? m.NFp : m.Bhc;
            return (F =
              (d =
                (u =
                  (n = this.m_mapLocalUpdates.get(i).strContent) != null
                    ? n
                    : this.m_mapLocalUpdates.get(A).strContent) != null
                  ? u
                  : (l = this.m_mapStoredDrafts.get(i)) == null
                    ? void 0
                    : l.content) != null
                ? d
                : (f = this.m_mapStoredDrafts.get(A)) == null
                  ? void 0
                  : f.content) != null
              ? F
              : "";
          }
          GetLastSavedDraftVersion(i) {
            return this.m_mapStoredDrafts.get(i);
          }
          BHasSomeTextForLanguage(i) {
            return !!(this.GetDraftContent(i) || this.GetDraftTitle(i));
          }
          SetDraftTitle(i, a) {
            var n;
            a ===
            ((n = this.m_mapStoredDrafts.get(i)) == null ? void 0 : n.title)
              ? (this.m_mapLocalUpdates.get(i).strTitle = null)
              : (this.m_mapLocalUpdates.get(i).strTitle = a);
          }
          SetDraftContent(i, a) {
            var n;
            a ===
            ((n = this.m_mapStoredDrafts.get(i)) == null ? void 0 : n.content)
              ? (this.m_mapLocalUpdates.get(i).strContent = null)
              : (this.m_mapLocalUpdates.get(i).strContent = a);
          }
          GetIncludedRealmList() {
            const i = new Array();
            return (
              this.m_summary.visible_in_global_realm &&
                i.push(ge.TU.k_ESteamRealmGlobal),
              this.m_summary.visible_in_global_realm &&
                i.push(ge.TU.k_ESteamRealmChina),
              i.length == 0 && i.push(ge.TU.k_ESteamRealmGlobal),
              (0, be.wT)(
                i.length > 0,
                `FAQ ${this.m_summary.faq_id} is currently configured so that no realms are valid for display.`,
              ),
              i
            );
          }
          BHasPublished() {
            return !!this.m_summary.per_language_info.some(
              (i) => !!i.last_publish_timestamp,
            );
          }
          GetLastTimeLanguageUpdated(i) {
            var a, n;
            return (n =
              (a = this.GetLastSavedDraftVersion(i)) == null
                ? void 0
                : a.timestamp) != null
              ? n
              : 0;
          }
          GetFAQID() {
            return this.m_summary.faq_id;
          }
          GetSummary() {
            return this.m_summary;
          }
          BLocalizeDraft() {
            var i;
            return this.m_summary.json_data.length === 0
              ? !1
              : (i = JSON.parse(this.m_summary.json_data).localizeDraft) != null
                ? i
                : !1;
          }
          BPushToCrowdIn() {
            var i;
            return this.m_summary.json_data.length === 0
              ? !1
              : (i = JSON.parse(this.m_summary.json_data).pushToCrowdIn) != null
                ? i
                : !1;
          }
          GetJsonData() {
            return this.m_summary.json_data;
          }
          async UpdateJsonData(i) {
            const a = await me.Get().UpdateJsonData(this.GetFAQID(), i);
            return (
              a === h.R && (this.m_summary.json_data = JSON.stringify(i)), a
            );
          }
        }
        Ce([w.sH], Me.prototype, "m_summary", 2),
          Ce([w.sH], Me.prototype, "m_mapLocalUpdates", 2),
          Ce([Ae.o], Me.prototype, "BHasSomeTextForLanguage", 1),
          Ce([Ae.o], Me.prototype, "GetLastTimeLanguageUpdated", 1);
        var Be = B(13018),
          g = B(74916),
          z = Object.defineProperty,
          le = Object.getOwnPropertyDescriptor,
          pe = (b, i, a) =>
            i in b
              ? z(b, i, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: a,
                })
              : (b[i] = a),
          we = (b, i, a, n) => {
            for (
              var l = n > 1 ? void 0 : n ? le(i, a) : i, u = b.length - 1, f;
              u >= 0;
              u--
            )
              (f = b[u]) && (l = (n ? f(i, a, l) : f(l)) || l);
            return n && l && z(i, a, l), l;
          },
          v = (b, i, a) => pe(b, typeof i != "symbol" ? i + "" : i, a);
        const R = class ze {
          constructor() {
            v(this, "m_mapFAQSummaries", new Map()),
              v(this, "m_mapFAQPublishedContent", new Map()),
              v(this, "m_mapFAQDrafts", new Map()),
              v(this, "m_bHasFAQEdit", !1),
              v(this, "m_steamInterface", null),
              (0, w.Gn)(this),
              p.TS.IN_STEAMUI ||
                (this.ReadInitialPayload(), this.SetUpWebAPIInterface());
          }
          static Get() {
            return (
              ze.s_Singleton || (ze.s_Singleton = new ze()), ze.s_Singleton
            );
          }
          static Init(i) {
            ze.Get().m_steamInterface = i;
          }
          SetUpWebAPIInterface() {
            const i = (0, p.Tc)("faqstore", "application_config"),
              a = i == null ? void 0 : i.webapi_token;
            this.m_steamInterface = new Be.D(p.TS.WEBAPI_BASE_URL, a);
          }
          ReadInitialPayload() {
            const i = (0, p.Tc)("faqstore", "application_config");
            if (this.BIsConfigValid(i)) {
              if (i.faqs)
                for (const a in i.faqs) {
                  const n = i.faqs[a];
                  (n == null ? void 0 : n.faq_id) != a ||
                    (n == null ? void 0 : n.language) === void 0 ||
                    (this.m_mapFAQPublishedContent.has(a) ||
                      this.m_mapFAQPublishedContent.set(a, new Map()),
                    this.m_mapFAQPublishedContent.get(a).set(n.language, n));
                }
              if (i.alldrafts)
                for (const a in i.alldrafts) {
                  const n = i.alldrafts[a];
                  if (!(n != null && n.summary) || !n.draft) continue;
                  this.m_mapFAQSummaries.set(a, n.summary);
                  const l = new Map();
                  for (const u of n.draft) l.set(u.language, u);
                  this.m_mapFAQDrafts.set(
                    a,
                    new Me(this.m_mapFAQSummaries.get(a), l),
                  );
                }
              if (i.allfaqs)
                for (const a of i.allfaqs)
                  a.faq_id &&
                    (this.m_mapFAQSummaries.has(a.faq_id) ||
                      this.m_mapFAQSummaries.set(a.faq_id, a));
              this.m_bHasFAQEdit = !!i.has_faq_edit;
            }
          }
          BIsConfigValid(i) {
            const a = i;
            return !!(
              (a && a.faqs && typeof a.faqs == "object") ||
              (a.alldrafts && typeof a.alldrafts == "object") ||
              (a.allfaqs && Array.isArray(a.allfaqs))
            );
          }
          async CreateFAQ(i) {
            const a = de.w.Init(g.q3);
            a.Body().set_steamid(p.UF.CLANSTEAMID),
              a.Body().set_internal_name(i);
            let n = h.zi,
              l;
            try {
              const u = await g.RD.Create(
                this.m_steamInterface.GetServiceTransport(),
                a,
              );
              if (((n = u.GetEResult()), n == h.R)) {
                l = u.Body().faq_id();
                const f = { faq_id: l, internal_name: i };
                this.m_mapFAQSummaries.set(l, f);
              } else
                console.error("FAQStore.CreateFAQ: Create request failed:", n);
            } catch (u) {
              const f = (0, oe.H)(u);
              console.error(
                "FAQStore.CreateFAQ: caught error " + f.strErrorMsg,
                f,
              );
            }
            return { eResult: n, strFaqId: l };
          }
          async UpdateDraft(i, a, n, l) {
            const u = de.w.Init(g.QE);
            u.Body().set_steamid(p.UF.CLANSTEAMID),
              u.Body().set_faq_id(i),
              u.Body().set_language(a),
              u.Body().set_content(l),
              u.Body().set_title(n);
            let f = h.zi,
              d = 0;
            try {
              const F = await g.RD.UpdateDraft(
                this.m_steamInterface.GetServiceTransport(),
                u,
              );
              (f = F.GetEResult()),
                f != h.R
                  ? console.error("FAQStore.UpdateDraft request failed:", f)
                  : (d = F.Body().last_update_timestamp());
            } catch (F) {
              const A = (0, oe.H)(F);
              console.error(
                "FAQStore.UpdateDraft: caught error " + A.strErrorMsg,
                A,
              );
            }
            return { eResult: f, rtUpdateTime: d };
          }
          async UpdateJsonData(i, a) {
            const n = JSON.stringify(a),
              l = de.w.Init(g.vn);
            l.Body().set_steamid(p.UF.CLANSTEAMID),
              l.Body().set_faq_id(i),
              l.Body().set_json_data(n);
            let u = h.zi;
            try {
              (u = (
                await g.RD.UpdateJsonData(
                  this.m_steamInterface.GetServiceTransport(),
                  l,
                )
              ).GetEResult()),
                u != h.R
                  ? console.error("FAQStore.UpdateJsonData request failed:", u)
                  : (this.m_mapFAQSummaries.get(i).json_data = n);
            } catch (f) {
              const d = (0, oe.H)(f);
              console.error(
                "FAQStore.UpdateJsonData: caught error " + d.strErrorMsg,
                d,
              );
            }
            return u;
          }
          async GetFAQVersion(i, a, n) {
            const l = de.w.Init(g.k_);
            l.Body().set_steamid(p.UF.CLANSTEAMID),
              l.Body().set_faq_id(i),
              l.Body().set_version(a),
              l.Body().set_language(n);
            try {
              const u = await g.RD.GetFAQVersion(
                  this.m_steamInterface.GetServiceTransport(),
                  l,
                ),
                f = u.GetEResult();
              if (f == h.R) return u.Body().faq().toObject();
              console.error("FAQStore.GetFAQVersion request failed:", f);
            } catch (u) {
              const f = (0, oe.H)(u);
              console.error(
                "FAQStore.GetFAQVersion: caught error " + f.strErrorMsg,
                f,
              );
            }
            return null;
          }
          async DeleteFAQ(i) {
            const a = de.w.Init(g.b5);
            a.Body().set_steamid(p.UF.CLANSTEAMID), a.Body().set_faq_id(i);
            let n = h.zi;
            try {
              (n = (
                await g.RD.Delete(
                  this.m_steamInterface.GetServiceTransport(),
                  a,
                )
              ).GetEResult()),
                n != h.R
                  ? console.error("FAQStore.DeleteFAQ request failed:", n)
                  : (this.m_mapFAQDrafts.delete(i),
                    this.m_mapFAQPublishedContent.delete(i),
                    this.m_mapFAQSummaries.delete(i));
            } catch (l) {
              const u = (0, oe.H)(l);
              console.error(
                "FAQStore.DeleteFAQ: caught error " + u.strErrorMsg,
                u,
              );
            }
            return n;
          }
          GetFAQPublishedContent(i, a) {
            const n = this.m_mapFAQPublishedContent.get(i);
            if (!n) return null;
            let l = n.get(a);
            return (
              !l &&
                ze.sm_mapFallbackLanguages.has(a) &&
                (l = n.get(ze.sm_mapFallbackLanguages.get(a))),
              !l && a != m.Bhc && !(0, p.Y2)() && (l = n.get(m.Bhc)),
              l
            );
          }
          GetFAQDraftContent(i) {
            return this.m_mapFAQDrafts.get(i);
          }
          GetAllFAQSummaries() {
            return Array.from(this.m_mapFAQSummaries.values());
          }
          GetFAQArticleSummary(i) {
            return this.m_mapFAQSummaries.get(i) || {};
          }
          async LoadFAQDraftContent(i) {
            if (this.m_mapFAQDrafts.has(i)) return this.m_mapFAQDrafts.get(i);
            const a = de.w.Init(g.nR);
            a.Body().set_steamid(p.UF.CLANSTEAMID), a.Body().set_faq_id(i);
            let n = h.zi;
            try {
              const l = await g.RD.GetAllDrafts(
                this.m_steamInterface.GetServiceTransport(),
                a,
              );
              if (((n = l.GetEResult()), n != h.R))
                return (
                  console.error(
                    "FaqStore.LoadFAQDraftContent request failed:",
                    n,
                  ),
                  null
                );
              {
                const u = l.Body().summary().toObject();
                this.m_mapFAQSummaries.set(i, u);
                const f = new Map();
                l.Body()
                  .draft()
                  .forEach((F) => f.set(F.language(), F.toObject()));
                const d = new Me(this.m_mapFAQSummaries.get(i), f);
                return this.m_mapFAQDrafts.set(i, d), d;
              }
            } catch (l) {
              const u = (0, oe.H)(l);
              console.error(
                "FaqStore.LoadFAQDraftContent: exception " + u.strErrorMsg,
                u,
              );
            }
            return null;
          }
          async UpdateVisibility(i, a, n) {
            const l = de.w.Init(g.CP);
            l.Body().set_steamid(p.UF.CLANSTEAMID),
              l.Body().set_faq_id(i),
              l.Body().set_visible_in_global_realm(a),
              l.Body().set_visible_in_china_realm(n);
            let u = h.zi;
            try {
              if (
                ((u = (
                  await g.RD.SetVisibility(
                    this.m_steamInterface.GetServiceTransport(),
                    l,
                  )
                ).GetEResult()),
                u === h.R)
              ) {
                const d = this.m_mapFAQSummaries.get(i);
                d &&
                  ((d.visible_in_global_realm = a),
                  (d.visible_in_china_realm = n),
                  this.m_mapFAQSummaries.set(i, d));
              } else console.error("FaqStore.UpdateVisibility: Failed " + u);
            } catch (f) {
              const d = (0, oe.H)(f);
              console.error(
                "FaqStore.UpdateVisibility: exception " + d.strErrorMsg,
                d,
              );
            }
            return u;
          }
          async PublishDraftByLanguage(i, a) {
            if (!a || a.length == 0) return h.R;
            const n = de.w.Init(g.K);
            n.Body().set_steamid(p.UF.CLANSTEAMID),
              n.Body().set_faq_id(i),
              a.forEach((u) => n.Body().add_language(u));
            let l = h.zi;
            try {
              const u = await g.RD.PublishDraft(
                this.m_steamInterface.GetServiceTransport(),
                n,
              );
              if (((l = u.GetEResult()), l === h.R)) {
                const f = this.m_mapFAQSummaries.get(i);
                f &&
                  (0, w.h5)(() => {
                    this.m_mapFAQPublishedContent.has(i) ||
                      this.m_mapFAQPublishedContent.set(i, new Map()),
                      f.per_language_info.forEach((d) => {
                        var F;
                        const A = d.language;
                        if (a.indexOf(A) >= 0) {
                          d.last_publish_timestamp = Math.max(
                            d.last_publish_timestamp,
                            u.Body().last_publish_timestamp(),
                          );
                          const fe =
                            (F = this.m_mapFAQDrafts.get(i)) == null
                              ? void 0
                              : F.GetLastSavedDraftVersion(A);
                          this.m_mapFAQPublishedContent.get(i).set(A, fe);
                        }
                      });
                  });
              } else
                console.error("FaqStore.PublishDraftByLanguage: Failed " + l);
            } catch (u) {
              const f = (0, oe.H)(u);
              console.error(
                "FaqStore.PublishDraftByLanguage: exception " + f.strErrorMsg,
                f,
              );
            }
            return l;
          }
          async UpdateInternalName(i, a) {
            const n = de.w.Init(g.hU);
            n.Body().set_steamid(p.UF.CLANSTEAMID),
              n.Body().set_faq_id(i),
              n.Body().set_internal_name(a);
            let l = h.zi;
            try {
              (l = (
                await g.RD.UpdateInternalName(
                  this.m_steamInterface.GetServiceTransport(),
                  n,
                )
              ).GetEResult()),
                l === h.R
                  ? (0, w.h5)(() => {
                      var f, d, F;
                      (f = this.m_mapFAQSummaries.get(i)) != null &&
                        f.internal_name &&
                        (this.m_mapFAQSummaries.get(i).internal_name = a),
                        (F =
                          (d = this.m_mapFAQDrafts.get(i)) == null
                            ? void 0
                            : d.GetSummary()) != null &&
                          F.internal_name &&
                          (this.m_mapFAQDrafts
                            .get(i)
                            .GetSummary().internal_name = a);
                    })
                  : console.error("FaqStore.UpdateInternalName: Failed " + l);
            } catch (u) {
              const f = (0, oe.H)(u);
              console.error(
                "FaqStore.UpdateInternalName: exception " + f.strErrorMsg,
                f,
              );
            }
            return l;
          }
          GetLoadedDraftObjs() {
            return Array.from(this.m_mapFAQDrafts.values());
          }
          RemoveAllDirtyDrafts() {
            var i, a;
            const n =
              (a =
                (i = this.GetLoadedDraftObjs()) == null
                  ? void 0
                  : i.filter((l) => l.BNeedsSaving())) == null
                ? void 0
                : a.map((l) => l.GetFAQID());
            n == null || n.forEach((l) => this.m_mapFAQDrafts.delete(l));
          }
          BHasFAQEdit() {
            return this.m_bHasFAQEdit;
          }
          async ExportEnglishDraftToCrowdin(i) {
            const a =
              p.TS.COMMUNITY_BASE_URL +
              "faqs/" +
              p.UF.VANITY_ID +
              "/ajaxpushtocrowdin/" +
              _e(i);
            await s().get(a);
          }
          async ImportNonEnglishDraftsFromCrowdin(i, a, n) {
            var l, u;
            const f =
                p.TS.COMMUNITY_BASE_URL +
                "faqs/" +
                p.UF.VANITY_ID +
                "/ajaxpullfromcrowdin/" +
                _e(i),
              d = new FormData();
            d.append("sessionid", (0, p.KC)()),
              d.append("languages", a.join(","));
            let F = null;
            try {
              const fe = await s().post(f, d, {
                withCredentials: !0,
                cancelToken: n == null ? void 0 : n.token,
              });
              if (
                (fe == null ? void 0 : fe.status) == 200 &&
                ((l = fe.data) == null ? void 0 : l.success) == h.R
              ) {
                const ce = fe.data.updated,
                  Qe = (u = ce == null ? void 0 : ce[i]) != null ? u : [];
                return (
                  Qe.length > 0 &&
                    (this.m_mapFAQSummaries.has(i) ||
                      this.m_mapFAQDrafts.has(i)) &&
                    (this.m_mapFAQDrafts.delete(i),
                    await this.LoadFAQDraftContent(i)),
                  Qe
                );
              }
              F = { response: fe };
            } catch (fe) {
              F = fe;
            }
            const A = (0, oe.H)(F);
            return (
              console.error(
                "Could not import from crowdin",
                i,
                A.strErrorMsg,
                A,
              ),
              []
            );
          }
          BHasLiveEnglishVersion(i) {
            return this.m_mapFAQSummaries
              .get(i)
              .per_language_info.some(
                (n) => n.language == m.Bhc && n.last_publish_timestamp > 0,
              );
          }
          GetNonEnglishDraftsToPublish(i) {
            return this.m_mapFAQSummaries
              .get(i)
              .per_language_info.filter((l) => {
                var u;
                return (
                  l.language != m.Bhc &&
                  l.last_update_timestamp >
                    ((u = l.last_publish_timestamp) != null ? u : 0)
                );
              })
              .map((l) => l.language);
          }
        };
        v(R, "s_Singleton"),
          v(
            R,
            "sm_mapFallbackLanguages",
            new Map([
              [m.HkE, m.FHN],
              [m.FHN, m.HkE],
              [m.ZLm, m.NFp],
            ]),
          ),
          we([w.sH], R.prototype, "m_mapFAQSummaries", 2),
          we([w.XI], R.prototype, "RemoveAllDirtyDrafts", 1);
        let me = R;
        const ue = /^[0-9a-fA-F]+$/;
        function Te(b) {
          const i = b == null ? void 0 : b.replace(/-/g, "");
          return (i == null ? void 0 : i.length) != 16 || !ue.test(i)
            ? null
            : t.A.fromString(i, !0, 16).toString();
        }
        function _e(b) {
          const a = (
            "0000000000000000" + t.A.fromString(b, !0, 10).toString(16)
          )
            .slice(-16)
            .toUpperCase();
          return `${a.slice(0, 4)}-${a.slice(4, 8)}-${a.slice(8, 12)}-${a.slice(12, 16)}`;
        }
        function We(b, i) {
          return [b && me.Get().GetFAQPublishedContent(b, i), !0];
        }
        function Ge(b) {
          const [i, a] = ye.useState(me.Get().GetFAQDraftContent(b)),
            [n, l] = ye.useState(!!i);
          return (
            (0, ye.useEffect)(() => {
              me.Get()
                .LoadFAQDraftContent(b)
                .then((u) => a(u))
                .finally(() => l(!0));
            }, [b]),
            [i, n]
          );
        }
        function Oe(b) {
          return [me.Get().GetFAQArticleSummary(b), !0];
        }
        function Pe() {
          const b = me.Get().GetAllFAQSummaries();
          return ye.useRef([b, !0]).current;
        }
        function De(b, i, a) {
          const [n, l] = ye.useState(null),
            [u, f] = ye.useState(!1);
          return (
            (0, ye.useEffect)(() => {
              me.Get().BHasFAQEdit() &&
                me
                  .Get()
                  .GetFAQVersion(b, i, a)
                  .then((d) => l(d))
                  .finally(() => f(!0));
            }, [b, i, a]),
            [n, u]
          );
        }
      },
      16516: (Ie) => {
        Ie.exports = {
          FAQContainer: "_2PQsW53YUsH-Z6TICGEF3K",
          Section: "bjwwIcPcDhqU8vTIhRti3",
          Note: "XjQ8ghCC1Ncl0mZyQ3iDM",
          Important: "mRx2Io-gR5pz0gqZnF4e7",
          Warning: "_3Hvtr6roA7ZUH4Vmi-YiYS",
          FAQImage: "_3EebtYBetncFupzjwjtJ8k",
        };
      },
    },
  ]);
})();
