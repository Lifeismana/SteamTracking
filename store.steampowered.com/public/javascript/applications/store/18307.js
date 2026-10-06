/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [18307],
    {
      23761: (ur, C, k) => {
        k.d(C, { o6: () => hr, we: () => zr, Vc: () => ir });
        var A = k(90626),
          p = k(80902),
          G = k(54806),
          q = k(75233),
          rr = k(51614),
          H = k(72604),
          m = k(99412),
          D = k(42993),
          B = k(35038),
          b = k(68312),
          l = k(33512),
          s = k(80613),
          i = k.n(s),
          t = k(75245);
        class w extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              w.prototype.client_instanceid || t.Sg(w.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              w.sm_m ||
                (w.sm_m = {
                  proto: w,
                  fields: {
                    client_instanceid: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              w.sm_m
            );
          }
          static MBF() {
            return w.sm_mbf || (w.sm_mbf = t.w0(w.M())), w.sm_mbf;
          }
          toObject(r = !1) {
            return w.toObject(r, this);
          }
          static toObject(r, e) {
            return t.BT(w.M(), r, e);
          }
          static fromObject(r) {
            return t.Uq(w.M(), r);
          }
          static deserializeBinary(r) {
            let e = new (i().BinaryReader)(r),
              a = new w();
            return w.deserializeBinaryFromReader(a, e);
          }
          static deserializeBinaryFromReader(r, e) {
            return t.zj(w.MBF(), r, e);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return w.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, e) {
            t.i0(w.M(), r, e);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              w.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_GetClientLogonInfo_Request";
          }
        }
        class h extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              h.prototype.protocol_version || t.Sg(h.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              h.sm_m ||
                (h.sm_m = {
                  proto: h,
                  fields: {
                    protocol_version: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    os: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                    machine_name: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              h.sm_m
            );
          }
          static MBF() {
            return h.sm_mbf || (h.sm_mbf = t.w0(h.M())), h.sm_mbf;
          }
          toObject(r = !1) {
            return h.toObject(r, this);
          }
          static toObject(r, e) {
            return t.BT(h.M(), r, e);
          }
          static fromObject(r) {
            return t.Uq(h.M(), r);
          }
          static deserializeBinary(r) {
            let e = new (i().BinaryReader)(r),
              a = new h();
            return h.deserializeBinaryFromReader(a, e);
          }
          static deserializeBinaryFromReader(r, e) {
            return t.zj(h.MBF(), r, e);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return h.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, e) {
            t.i0(h.M(), r, e);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              h.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_GetClientLogonInfo_Response";
          }
        }
        class I extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return I.toObject(r, this);
          }
          static toObject(r, e) {
            return r ? { $jspbMessageInstance: e } : {};
          }
          static fromObject(r) {
            return new I();
          }
          static deserializeBinary(r) {
            let e = new (i().BinaryReader)(r),
              a = new I();
            return I.deserializeBinaryFromReader(a, e);
          }
          static deserializeBinaryFromReader(r, e) {
            return r;
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return I.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, e) {}
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              I.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_GetAllClientLogonInfo_Request";
          }
        }
        class T extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              T.prototype.sessions || t.Sg(T.M()),
              s.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              T.sm_m ||
                (T.sm_m = {
                  proto: T,
                  fields: {
                    sessions: { n: 1, c: U, r: !0, q: !0 },
                    refetch_interval_sec: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              T.sm_m
            );
          }
          static MBF() {
            return T.sm_mbf || (T.sm_mbf = t.w0(T.M())), T.sm_mbf;
          }
          toObject(r = !1) {
            return T.toObject(r, this);
          }
          static toObject(r, e) {
            return t.BT(T.M(), r, e);
          }
          static fromObject(r) {
            return t.Uq(T.M(), r);
          }
          static deserializeBinary(r) {
            let e = new (i().BinaryReader)(r),
              a = new T();
            return T.deserializeBinaryFromReader(a, e);
          }
          static deserializeBinaryFromReader(r, e) {
            return t.zj(T.MBF(), r, e);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return T.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, e) {
            t.i0(T.M(), r, e);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              T.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_GetAllClientLogonInfo_Response";
          }
        }
        class U extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              U.prototype.client_instanceid || t.Sg(U.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              U.sm_m ||
                (U.sm_m = {
                  proto: U,
                  fields: {
                    client_instanceid: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    protocol_version: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    os_name: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    machine_name: {
                      n: 4,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    os_type: { n: 5, br: t.qM.readInt32, bw: t.gp.writeInt32 },
                    device_type: {
                      n: 6,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    realm: { n: 7, br: t.qM.readInt32, bw: t.gp.writeInt32 },
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
          static toObject(r, e) {
            return t.BT(U.M(), r, e);
          }
          static fromObject(r) {
            return t.Uq(U.M(), r);
          }
          static deserializeBinary(r) {
            let e = new (i().BinaryReader)(r),
              a = new U();
            return U.deserializeBinaryFromReader(a, e);
          }
          static deserializeBinaryFromReader(r, e) {
            return t.zj(U.MBF(), r, e);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return U.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, e) {
            t.i0(U.M(), r, e);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              U.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_GetAllClientLogonInfo_Response_Session";
          }
        }
        class F extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              F.prototype.client_instanceid || t.Sg(F.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              F.sm_m ||
                (F.sm_m = {
                  proto: F,
                  fields: {
                    client_instanceid: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
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
          static toObject(r, e) {
            return t.BT(F.M(), r, e);
          }
          static fromObject(r) {
            return t.Uq(F.M(), r);
          }
          static deserializeBinary(r) {
            let e = new (i().BinaryReader)(r),
              a = new F();
            return F.deserializeBinaryFromReader(a, e);
          }
          static deserializeBinaryFromReader(r, e) {
            return t.zj(F.MBF(), r, e);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return F.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, e) {
            t.i0(F.M(), r, e);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              F.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_GetClientInfo_Request";
          }
        }
        class S extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              S.prototype.package_version || t.Sg(S.M()),
              s.Message.initialize(this, r, 0, -1, [7, 10], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              S.sm_m ||
                (S.sm_m = {
                  proto: S,
                  fields: {
                    package_version: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    os: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                    machine_name: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    ip_public: {
                      n: 4,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    ip_private: {
                      n: 5,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    bytes_available: {
                      n: 6,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    running_games: { n: 7, c: O, r: !0, q: !0 },
                    protocol_version: {
                      n: 8,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    clientcomm_version: {
                      n: 9,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    local_users: {
                      n: 10,
                      r: !0,
                      q: !0,
                      br: t.qM.readUint32,
                      pbr: t.qM.readPackedUint32,
                      bw: t.gp.writeRepeatedUint32,
                    },
                  },
                }),
              S.sm_m
            );
          }
          static MBF() {
            return S.sm_mbf || (S.sm_mbf = t.w0(S.M())), S.sm_mbf;
          }
          toObject(r = !1) {
            return S.toObject(r, this);
          }
          static toObject(r, e) {
            return t.BT(S.M(), r, e);
          }
          static fromObject(r) {
            return t.Uq(S.M(), r);
          }
          static deserializeBinary(r) {
            let e = new (i().BinaryReader)(r),
              a = new S();
            return S.deserializeBinaryFromReader(a, e);
          }
          static deserializeBinaryFromReader(r, e) {
            return t.zj(S.MBF(), r, e);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return S.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, e) {
            t.i0(S.M(), r, e);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              S.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_ClientData";
          }
        }
        class O extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              O.prototype.appid || t.Sg(O.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              O.sm_m ||
                (O.sm_m = {
                  proto: O,
                  fields: {
                    appid: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    extra_info: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    time_running_sec: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              O.sm_m
            );
          }
          static MBF() {
            return O.sm_mbf || (O.sm_mbf = t.w0(O.M())), O.sm_mbf;
          }
          toObject(r = !1) {
            return O.toObject(r, this);
          }
          static toObject(r, e) {
            return t.BT(O.M(), r, e);
          }
          static fromObject(r) {
            return t.Uq(O.M(), r);
          }
          static deserializeBinary(r) {
            let e = new (i().BinaryReader)(r),
              a = new O();
            return O.deserializeBinaryFromReader(a, e);
          }
          static deserializeBinaryFromReader(r, e) {
            return t.zj(O.MBF(), r, e);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return O.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, e) {
            t.i0(O.M(), r, e);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              O.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_ClientData_RunningGames";
          }
        }
        class E extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              E.prototype.client_info || t.Sg(E.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              E.sm_m ||
                (E.sm_m = {
                  proto: E,
                  fields: { client_info: { n: 1, c: S } },
                }),
              E.sm_m
            );
          }
          static MBF() {
            return E.sm_mbf || (E.sm_mbf = t.w0(E.M())), E.sm_mbf;
          }
          toObject(r = !1) {
            return E.toObject(r, this);
          }
          static toObject(r, e) {
            return t.BT(E.M(), r, e);
          }
          static fromObject(r) {
            return t.Uq(E.M(), r);
          }
          static deserializeBinary(r) {
            let e = new (i().BinaryReader)(r),
              a = new E();
            return E.deserializeBinaryFromReader(a, e);
          }
          static deserializeBinaryFromReader(r, e) {
            return t.zj(E.MBF(), r, e);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return E.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, e) {
            t.i0(E.M(), r, e);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              E.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_GetClientInfo_Response";
          }
        }
        class j extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              j.prototype.fields || t.Sg(j.M()),
              s.Message.initialize(this, r, 0, -1, [6], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              j.sm_m ||
                (j.sm_m = {
                  proto: j,
                  fields: {
                    fields: { n: 1, br: t.qM.readString, bw: t.gp.writeString },
                    filters: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    client_instanceid: {
                      n: 3,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    include_client_info: {
                      n: 4,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    language: {
                      n: 5,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    filter_appids: {
                      n: 6,
                      r: !0,
                      q: !0,
                      br: t.qM.readUint32,
                      pbr: t.qM.readPackedUint32,
                      bw: t.gp.writeRepeatedUint32,
                    },
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
          static toObject(r, e) {
            return t.BT(j.M(), r, e);
          }
          static fromObject(r) {
            return t.Uq(j.M(), r);
          }
          static deserializeBinary(r) {
            let e = new (i().BinaryReader)(r),
              a = new j();
            return j.deserializeBinaryFromReader(a, e);
          }
          static deserializeBinaryFromReader(r, e) {
            return t.zj(j.MBF(), r, e);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return j.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, e) {
            t.i0(j.M(), r, e);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              j.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_GetClientAppList_Request";
          }
        }
        class P extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              P.prototype.bytes_available || t.Sg(P.M()),
              s.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              P.sm_m ||
                (P.sm_m = {
                  proto: P,
                  fields: {
                    bytes_available: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    apps: { n: 2, c: Q, r: !0, q: !0 },
                    client_info: { n: 3, c: S },
                    refetch_interval_sec_full: {
                      n: 4,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    refetch_interval_sec_changing: {
                      n: 5,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    refetch_interval_sec_updating: {
                      n: 6,
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
          static toObject(r, e) {
            return t.BT(P.M(), r, e);
          }
          static fromObject(r) {
            return t.Uq(P.M(), r);
          }
          static deserializeBinary(r) {
            let e = new (i().BinaryReader)(r),
              a = new P();
            return P.deserializeBinaryFromReader(a, e);
          }
          static deserializeBinaryFromReader(r, e) {
            return t.zj(P.MBF(), r, e);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return P.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, e) {
            t.i0(P.M(), r, e);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              P.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_GetClientAppList_Response";
          }
        }
        class Q extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Q.prototype.appid || t.Sg(Q.M()),
              s.Message.initialize(this, r, 0, -1, [17], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Q.sm_m ||
                (Q.sm_m = {
                  proto: Q,
                  fields: {
                    appid: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    app: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                    category: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    app_type: {
                      n: 4,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    num_downloading: {
                      n: 8,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    bytes_download_rate: {
                      n: 11,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    bytes_downloaded: {
                      n: 12,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    bytes_to_download: {
                      n: 13,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    dlcs: { n: 17, c: N, r: !0, q: !0 },
                    favorite: { n: 18, br: t.qM.readBool, bw: t.gp.writeBool },
                    auto_update: {
                      n: 19,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    installed: { n: 20, br: t.qM.readBool, bw: t.gp.writeBool },
                    download_paused: {
                      n: 21,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    changing: { n: 22, br: t.qM.readBool, bw: t.gp.writeBool },
                    available_on_platform: {
                      n: 23,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    bytes_staged: {
                      n: 24,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    bytes_to_stage: {
                      n: 25,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    bytes_required: {
                      n: 26,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    source_buildid: {
                      n: 27,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    target_buildid: {
                      n: 28,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    estimated_seconds_remaining: {
                      n: 29,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    queue_position: {
                      n: 30,
                      d: -1,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    uninstalling: {
                      n: 31,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    rt_time_scheduled: {
                      n: 32,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    running: { n: 33, br: t.qM.readBool, bw: t.gp.writeBool },
                    update_percentage: {
                      n: 34,
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
          static toObject(r, e) {
            return t.BT(Q.M(), r, e);
          }
          static fromObject(r) {
            return t.Uq(Q.M(), r);
          }
          static deserializeBinary(r) {
            let e = new (i().BinaryReader)(r),
              a = new Q();
            return Q.deserializeBinaryFromReader(a, e);
          }
          static deserializeBinaryFromReader(r, e) {
            return t.zj(Q.MBF(), r, e);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return Q.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, e) {
            t.i0(Q.M(), r, e);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              Q.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_GetClientAppList_Response_AppData";
          }
        }
        class N extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              N.prototype.appid || t.Sg(N.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              N.sm_m ||
                (N.sm_m = {
                  proto: N,
                  fields: {
                    appid: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    app: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                    installed: {
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
          toObject(r = !1) {
            return N.toObject(r, this);
          }
          static toObject(r, e) {
            return t.BT(N.M(), r, e);
          }
          static fromObject(r) {
            return t.Uq(N.M(), r);
          }
          static deserializeBinary(r) {
            let e = new (i().BinaryReader)(r),
              a = new N();
            return N.deserializeBinaryFromReader(a, e);
          }
          static deserializeBinaryFromReader(r, e) {
            return t.zj(N.MBF(), r, e);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return N.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, e) {
            t.i0(N.M(), r, e);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              N.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_GetClientAppList_Response_AppData_DLCData";
          }
        }
        class W extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              W.prototype.appid || t.Sg(W.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              W.sm_m ||
                (W.sm_m = {
                  proto: W,
                  fields: {
                    appid: {
                      n: 1,
                      q: !0,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    client_instanceid: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              W.sm_m
            );
          }
          static MBF() {
            return W.sm_mbf || (W.sm_mbf = t.w0(W.M())), W.sm_mbf;
          }
          toObject(r = !1) {
            return W.toObject(r, this);
          }
          static toObject(r, e) {
            return t.BT(W.M(), r, e);
          }
          static fromObject(r) {
            return t.Uq(W.M(), r);
          }
          static deserializeBinary(r) {
            let e = new (i().BinaryReader)(r),
              a = new W();
            return W.deserializeBinaryFromReader(a, e);
          }
          static deserializeBinaryFromReader(r, e) {
            return t.zj(W.MBF(), r, e);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return W.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, e) {
            t.i0(W.M(), r, e);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              W.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_InstallClientApp_Request";
          }
        }
        class J extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return J.toObject(r, this);
          }
          static toObject(r, e) {
            return r ? { $jspbMessageInstance: e } : {};
          }
          static fromObject(r) {
            return new J();
          }
          static deserializeBinary(r) {
            let e = new (i().BinaryReader)(r),
              a = new J();
            return J.deserializeBinaryFromReader(a, e);
          }
          static deserializeBinaryFromReader(r, e) {
            return r;
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return J.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, e) {}
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              J.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_InstallClientApp_Response";
          }
        }
        class x extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              x.prototype.appid || t.Sg(x.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              x.sm_m ||
                (x.sm_m = {
                  proto: x,
                  fields: {
                    appid: {
                      n: 1,
                      q: !0,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    client_instanceid: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
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
          static toObject(r, e) {
            return t.BT(x.M(), r, e);
          }
          static fromObject(r) {
            return t.Uq(x.M(), r);
          }
          static deserializeBinary(r) {
            let e = new (i().BinaryReader)(r),
              a = new x();
            return x.deserializeBinaryFromReader(a, e);
          }
          static deserializeBinaryFromReader(r, e) {
            return t.zj(x.MBF(), r, e);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return x.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, e) {
            t.i0(x.M(), r, e);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              x.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_UninstallClientApp_Request";
          }
        }
        class X extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return X.toObject(r, this);
          }
          static toObject(r, e) {
            return r ? { $jspbMessageInstance: e } : {};
          }
          static fromObject(r) {
            return new X();
          }
          static deserializeBinary(r) {
            let e = new (i().BinaryReader)(r),
              a = new X();
            return X.deserializeBinaryFromReader(a, e);
          }
          static deserializeBinaryFromReader(r, e) {
            return r;
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return X.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, e) {}
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              X.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_UninstallClientApp_Response";
          }
        }
        class $ extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              $.prototype.appid || t.Sg($.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $.sm_m ||
                ($.sm_m = {
                  proto: $,
                  fields: {
                    appid: {
                      n: 1,
                      q: !0,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    action: {
                      n: 2,
                      q: !0,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    client_instanceid: {
                      n: 3,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
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
          static toObject(r, e) {
            return t.BT($.M(), r, e);
          }
          static fromObject(r) {
            return t.Uq($.M(), r);
          }
          static deserializeBinary(r) {
            let e = new (i().BinaryReader)(r),
              a = new $();
            return $.deserializeBinaryFromReader(a, e);
          }
          static deserializeBinaryFromReader(r, e) {
            return t.zj($.MBF(), r, e);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return $.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, e) {
            t.i0($.M(), r, e);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              $.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_SetClientAppUpdateState_Request";
          }
        }
        class o extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              o.prototype.client_instanceid || t.Sg(o.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              o.sm_m ||
                (o.sm_m = {
                  proto: o,
                  fields: {
                    client_instanceid: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    appid: {
                      n: 2,
                      q: !0,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    query_params: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              o.sm_m
            );
          }
          static MBF() {
            return o.sm_mbf || (o.sm_mbf = t.w0(o.M())), o.sm_mbf;
          }
          toObject(r = !1) {
            return o.toObject(r, this);
          }
          static toObject(r, e) {
            return t.BT(o.M(), r, e);
          }
          static fromObject(r) {
            return t.Uq(o.M(), r);
          }
          static deserializeBinary(r) {
            let e = new (i().BinaryReader)(r),
              a = new o();
            return o.deserializeBinaryFromReader(a, e);
          }
          static deserializeBinaryFromReader(r, e) {
            return t.zj(o.MBF(), r, e);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return o.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, e) {
            t.i0(o.M(), r, e);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              o.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_LaunchClientApp_Request";
          }
        }
        class Y extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Y.toObject(r, this);
          }
          static toObject(r, e) {
            return r ? { $jspbMessageInstance: e } : {};
          }
          static fromObject(r) {
            return new Y();
          }
          static deserializeBinary(r) {
            let e = new (i().BinaryReader)(r),
              a = new Y();
            return Y.deserializeBinaryFromReader(a, e);
          }
          static deserializeBinaryFromReader(r, e) {
            return r;
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return Y.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, e) {}
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              Y.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_LaunchClientApp_Response";
          }
        }
        class Z extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Z.toObject(r, this);
          }
          static toObject(r, e) {
            return r ? { $jspbMessageInstance: e } : {};
          }
          static fromObject(r) {
            return new Z();
          }
          static deserializeBinary(r) {
            let e = new (i().BinaryReader)(r),
              a = new Z();
            return Z.deserializeBinaryFromReader(a, e);
          }
          static deserializeBinaryFromReader(r, e) {
            return r;
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return Z.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, e) {}
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              Z.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_SetClientAppUpdateState_Response";
          }
        }
        class K extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              K.prototype.client_instanceid || t.Sg(K.M()),
              s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              K.sm_m ||
                (K.sm_m = {
                  proto: K,
                  fields: {
                    client_instanceid: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    enable: { n: 2, br: t.qM.readBool, bw: t.gp.writeBool },
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
          static toObject(r, e) {
            return t.BT(K.M(), r, e);
          }
          static fromObject(r) {
            return t.Uq(K.M(), r);
          }
          static deserializeBinary(r) {
            let e = new (i().BinaryReader)(r),
              a = new K();
            return K.deserializeBinaryFromReader(a, e);
          }
          static deserializeBinaryFromReader(r, e) {
            return t.zj(K.MBF(), r, e);
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return K.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, e) {
            t.i0(K.M(), r, e);
          }
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              K.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_EnableOrDisableDownloads_Request";
          }
        }
        class V extends s.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), s.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return V.toObject(r, this);
          }
          static toObject(r, e) {
            return r ? { $jspbMessageInstance: e } : {};
          }
          static fromObject(r) {
            return new V();
          }
          static deserializeBinary(r) {
            let e = new (i().BinaryReader)(r),
              a = new V();
            return V.deserializeBinaryFromReader(a, e);
          }
          static deserializeBinaryFromReader(r, e) {
            return r;
          }
          serializeBinary() {
            var r = new (i().BinaryWriter)();
            return V.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, e) {}
          serializeBase64String() {
            var r = new (i().BinaryWriter)();
            return (
              V.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_EnableOrDisableDownloads_Response";
          }
        }
        var R;
        ((c) => {
          function r(y, d, f) {
            return y.SendMsg(
              "ClientComm.GetClientLogonInfo#1",
              (0, B.I8)(w, d, f),
              h,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          c.GetClientLogonInfo = r;
          function e(y, d, f) {
            return y.SendMsg(
              "ClientComm.GetAllClientLogonInfo#1",
              (0, B.I8)(I, d, f),
              T,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          c.GetAllClientLogonInfo = e;
          function a(y, d, f) {
            return y.SendMsg(
              "ClientComm.GetClientInfo#1",
              (0, B.I8)(F, d, f),
              E,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          c.GetClientInfo = a;
          function n(y, d, f) {
            return y.SendMsg(
              "ClientComm.GetClientAppList#1",
              (0, B.I8)(j, d, f),
              P,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          c.GetClientAppList = n;
          function u(y, d, f) {
            return y.SendMsg(
              "ClientComm.InstallClientApp#1",
              (0, B.I8)(W, d, f),
              J,
              { ePrivilege: 1 },
            );
          }
          c.InstallClientApp = u;
          function g(y, d, f) {
            return y.SendMsg(
              "ClientComm.UninstallClientApp#1",
              (0, B.I8)(x, d, f),
              X,
              { ePrivilege: 1 },
            );
          }
          c.UninstallClientApp = g;
          function z(y, d, f) {
            return y.SendMsg(
              "ClientComm.LaunchClientApp#1",
              (0, B.I8)(o, d, f),
              Y,
              { ePrivilege: 1 },
            );
          }
          c.LaunchClientApp = z;
          function M(y, d, f) {
            return y.SendMsg(
              "ClientComm.SetClientAppUpdateState#1",
              (0, B.I8)($, d, f),
              Z,
              { ePrivilege: 1 },
            );
          }
          c.SetClientAppUpdateState = M;
          function v(y, d, f) {
            return y.SendMsg(
              "ClientComm.EnableOrDisableDownloads#1",
              (0, B.I8)(K, d, f),
              V,
              { ePrivilege: 1 },
            );
          }
          c.EnableOrDisableDownloads = v;
        })(R || (R = {}));
        const dr = "RemoteDownload_OnlineClient",
          Br = "RemoteDownload_ClientAppList",
          yr = "RemoteDownload_ClientAppData",
          wr = "RemoteDownload_PatchNotes";
        class gr extends Error {
          constructor(r, e) {
            super(r), (this.result = e);
          }
          result;
        }
        function ir() {
          const c = (0, b.KV)(),
            r = (0, D.LH)();
          return (0, p.I)({
            queryKey: [dr, r],
            queryFn: async () => {
              const a = B.w.Init(I),
                n = await R.GetAllClientLogonInfo(c, a);
              if (n.GetEResult() !== H.R)
                throw (
                  (console.error(
                    "Received error from GetAllClientLogonInfo",
                    n.GetEResult(),
                    n.Hdr().transport_error(),
                  ),
                  new Error(
                    `Error from GetAllClientLogonInfo: ${n.GetEResult()}`,
                  ))
                );
              const u = [];
              for (const g of n.Body().sessions())
                g.device_type() !== m.eSB && u.push(g.toObject());
              return {
                sessions: u,
                refetchInterval: n.Body().refetch_interval_sec() || 300,
              };
            },
            staleTime: 300 * 1e3,
            refetchInterval: (a) =>
              (a.state.data?.refetchInterval || 300) * 1e3,
          });
        }
        class fr {
          constructor(r) {
            Object.assign(this, r.toObject()),
              (this.bytes_to_download = parseInt(r.bytes_to_download() ?? "0")),
              (this.bytes_downloaded = parseInt(r.bytes_downloaded() ?? "0")),
              (this.bytes_staged = parseInt(r.bytes_staged() ?? "0")),
              (this.bytes_to_stage = parseInt(r.bytes_to_stage() ?? "0")),
              (this.bytes_required = parseInt(r.bytes_required() ?? "0"));
          }
          appid;
          app;
          category;
          app_type;
          num_downloading;
          bytes_download_rate;
          bytes_downloaded;
          bytes_to_download;
          favorite;
          auto_update;
          installed;
          download_paused;
          changing;
          available_on_platform;
          bytes_staged;
          bytes_to_stage;
          bytes_required;
          source_buildid;
          target_buildid;
          estimated_seconds_remaining;
          queue_position;
          uninstalling;
          rt_time_scheduled;
          update_percentage;
          BIsDownloading() {
            return this.num_downloading !== void 0 && this.num_downloading > 0;
          }
          SetDownloading() {
            (this.num_downloading = 1), (this.download_paused = !1);
          }
          SetPaused(r) {
            (this.download_paused = r), (this.num_downloading = r ? 0 : 1);
          }
          BIsAtTopOfQueue() {
            return this.queue_position === 0;
          }
          BIsPaused() {
            return (
              !!this.download_paused &&
              (this.bytes_downloaded < this.bytes_to_download ||
                this.bytes_staged < this.bytes_to_stage ||
                this.queue_position != -1)
            );
          }
          BHasPendingUpdate() {
            return (
              !this.BIsDownloading() &&
              !this.download_paused &&
              (this.bytes_downloaded < this.bytes_to_download ||
                this.bytes_staged < this.bytes_to_stage)
            );
          }
          GetPercentComplete() {
            return this.update_percentage
              ? this.update_percentage
              : this.bytes_to_download
                ? Math.floor(
                    (this.bytes_downloaded * 100) / this.bytes_to_download,
                  )
                : 0;
          }
        }
        async function ar(c, r, e) {
          const a = r.client_instanceid,
            n = B.w.Init(j);
          n.Body().set_fields("games"),
            n.Body().set_filters(e),
            n.Body().set_client_instanceid(a),
            n.Body().set_include_client_info(!0);
          const u = await R.GetClientAppList(c, n);
          if (u.GetEResult() !== H.R)
            throw (
              (console.error(
                "Received error from GetClientAppList",
                u.GetEResult(),
                u.Hdr().transport_error(),
              ),
              new gr(
                `Error from GetClientAppList: ${u.GetEResult()}`,
                u.GetEResult(),
              ))
            );
          const g = new Map();
          for (const z of u.Body().apps()) {
            const M = new fr(z);
            g.set(z.appid(), M);
          }
          return {
            session: r,
            mapApps: g,
            clientInfo: u.Body().client_info()?.toObject(),
            refetchIntervals: {
              full: u.Body().refetch_interval_sec_full() || 3600,
              changing: u.Body().refetch_interval_sec_changing() || 60,
              updating: u.Body().refetch_interval_sec_updating() || 10,
            },
          };
        }
        async function Mr(c, r, e, a) {
          if (!a) return;
          const n = await ar(c, r, e);
          for (const [u, g] of n.mapApps) a.mapApps.set(u, g);
          return { ...n, mapApps: a.mapApps };
        }
        function tr(c, r, e) {
          return [Br, c, r, e];
        }
        function br(c, r = !0) {
          const e = ir(),
            a = (0, b.KV)(),
            n = (0, D.LH)(),
            u = (d) => {
              r && (d.result == H.Dy || d.result == H._3) && e.refetch();
            },
            g = (0, G.E)({
              queries: (e.data?.sessions || []).map((d) => ({
                queryKey: tr(n, d.client_instanceid, "none"),
                queryFn: async () => ar(a, d, "none"),
                staletime: 3600 * 1e3,
                refetchInterval: (f) =>
                  (f.state.data?.refetchIntervals.full || 3600) * 1e3,
                enabled: e.isSuccess && !e.isFetching,
                onError: u,
                retry: r,
              })),
            }),
            z = (0, A.useCallback)(
              (d) => {
                if (!c) return d;
                const f = new Map(
                  Array.from(d?.mapApps.entries() ?? []).filter(c),
                );
                return { ...d, mapApps: f };
              },
              [c],
            ),
            M = (0, q.jE)(),
            v = (0, G.E)({
              queries: (e.data?.sessions || []).map((d, f) => ({
                queryKey: tr(n, d.client_instanceid, "changing"),
                queryFn: async () => Mr(a, d, "changing", g[f].data),
                enabled: g[f].isSuccess && !g[f].isFetching,
                staletime: 10 * 1e3,
                select: z,
                refetchInterval: (vr) => {
                  const er = vr.state.data;
                  if (!er) return 60 * 1e3;
                  let sr = !1;
                  for (const nr of er.mapApps.values())
                    if (nr.BIsDownloading() || nr.uninstalling) {
                      sr = !0;
                      break;
                    }
                  const cr = er.refetchIntervals;
                  return (sr ? cr.updating : cr.changing) * 1e3;
                },
                onError: u,
                retry: r,
              })),
            }),
            y = () => {
              for (const d of e.data?.sessions || []) {
                const f = tr(n, d.client_instanceid, "changing");
                M.removeQueries({ queryKey: f });
              }
              for (const d of g) d.refetch();
            };
          return {
            rgQueries: v.map((d, f) =>
              g[f].isError && !g[f].isFetching ? g[f] : d,
            ),
            refetch: y,
          };
        }
        function L(c, r) {
          return [yr, c, r];
        }
        function _(c, r = !0) {
          const e = (0, D.LH)(),
            { rgQueries: a } = br(void 0, r);
          return (0, p.I)({
            queryKey: L(e, c),
            queryFn: () => {
              const n = new Map();
              for (const u of a)
                if (u.isSuccess) {
                  const g = u.data?.session?.client_instanceid,
                    M = u.data?.mapApps?.get(c);
                  M &&
                    n.set(g, {
                      session: u.data.session,
                      app: M,
                      clientInfo: u.data.clientInfo,
                    });
                }
              return n;
            },
            enabled: a.reduce((n, u) => n && u.isSuccess && !u.isFetching, !0),
            staleTime: 0,
            gcTime: 0,
          });
        }
        function Sr(c, r, e) {
          const a = useActiveAccount(),
            n = useActiveServiceTransport();
          return useQuery({
            queryKey: [wr, a, c, r, e],
            queryFn: async () => {
              if (!r || !e || r == e) return {};
              const g = CProtoBufMsg.Init(
                  CClan_GetPartnerEventsByBuildIDRange_Request,
                ),
                z = g.Body().add_requests();
              z.set_appid(c),
                z.set_start_build_id(r + 1),
                g.Body().set_count(100);
              const M = await ClanService.GetPartnerEventsByBuildIDRange(n, g);
              if (M.GetEResult() != k_EResultOK)
                throw (
                  (console.error(
                    "Received error from GetPartnerEventsByBuildIDRange",
                    M.GetEResult(),
                  ),
                  new Error(
                    `Error from GetPartnerEventsByBuildIDRange: ${M.GetEResult()}`,
                  ))
                );
              return {
                appid: c,
                source_buildid: r,
                target_buildid: e,
                patch_notes: M.Body()
                  .toObject()
                  .matches?.sort((v, y) => y.build_id - v.build_id),
              };
            },
          });
        }
        function zr(c, r, e) {
          const a = (0, b.KV)(),
            n = _(c),
            u = (0, D.LH)(),
            g = (0, q.jE)();
          return (0, rr.n)({
            mutationFn: async () => {
              const z = B.w.Init(W);
              z.Body().set_appid(c), z.Body().set_client_instanceid(r);
              const M = await R.InstallClientApp(a, z);
              if (M.GetEResult() != H.R)
                throw (
                  (console.error(
                    "Received error from InstallClientApp",
                    M.GetEResult(),
                  ),
                  new Error(`Error from InstallClientApp: ${M.GetEResult()}`))
                );
              const v = n?.data;
              v && v.get(r) && v.get(r).app.SetDownloading(),
                g.setQueryData(L(u, c), v),
                n.refetch();
            },
            onSuccess: e,
          });
        }
        function jr(c, r, e) {
          const a = useActiveServiceTransport(),
            n = _(c),
            u = useActiveAccount(),
            g = useQueryClient();
          return useMutation({
            mutationFn: async () => {
              const z = CProtoBufMsg.Init(
                CClientComm_UninstallClientApp_Request,
              );
              z.Body().set_appid(c), z.Body().set_client_instanceid(r);
              const M = await ClientCommService.UninstallClientApp(a, z);
              if (M.GetEResult() != k_EResultOK)
                throw (
                  (console.error(
                    "Received error from UninstallClientApp",
                    M.GetEResult(),
                  ),
                  new Error(`Error from UninstallClientApp: ${M.GetEResult()}`))
                );
              const v = n?.data;
              v && v.get(r) && (v.get(r).app.uninstalling = !0),
                g.setQueryData(L(u, c), v),
                n.refetch();
            },
            onSuccess: e,
          });
        }
        function Wr(c, r, e) {
          const a = useActiveServiceTransport(),
            n = _(c),
            u = useActiveAccount(),
            g = useQueryClient();
          return useMutation({
            mutationFn: async () => {
              const z = n?.data,
                M = z && z.get(r),
                v = CProtoBufMsg.Init(
                  CClientComm_SetClientAppUpdateState_Request,
                );
              v.Body().set_appid(c),
                v.Body().set_client_instanceid(r),
                v.Body().set_action(1);
              const y = await ClientCommService.SetClientAppUpdateState(a, v);
              if (y.GetEResult() != k_EResultOK)
                throw (
                  (console.error(
                    "Received error from SetClientAppUpdateState",
                    y.GetEResult(),
                  ),
                  new Error(
                    `Error from SetClientAppUpdateState: ${y.GetEResult()}`,
                  ))
                );
              M && z.get(r).app.SetDownloading(),
                g.setQueryData(L(u, c), z),
                n.refetch();
            },
            onSuccess: e,
          });
        }
        function or(c, r, e, a) {
          const n = useActiveServiceTransport(),
            u = _(c),
            g = useActiveAccount(),
            z = useQueryClient();
          return useMutation({
            mutationFn: async () => {
              const M = u?.data,
                v = M && M.get(r);
              if (
                v?.clientInfo?.clientcomm_version &&
                v.clientInfo.clientcomm_version >= 1
              ) {
                const y = CProtoBufMsg.Init(
                  CClientComm_EnableOrDisableDownloads_Request,
                );
                y.Body().set_client_instanceid(r), y.Body().set_enable(!e);
                const d = await ClientCommService.EnableOrDisableDownloads(
                  n,
                  y,
                );
                if (d.GetEResult() != k_EResultOK)
                  throw (
                    (console.error(
                      "Received error from EnableOrDisableDownloads",
                      d.GetEResult(),
                    ),
                    new Error(
                      `Error from EnableOrDisableDownloads: ${d.GetEResult()}`,
                    ))
                  );
              } else {
                const y = CProtoBufMsg.Init(
                  CClientComm_SetClientAppUpdateState_Request,
                );
                y.Body().set_appid(c),
                  y.Body().set_client_instanceid(r),
                  y.Body().set_action(e ? 0 : 1);
                const d = await ClientCommService.SetClientAppUpdateState(n, y);
                if (d.GetEResult() != k_EResultOK)
                  throw (
                    (console.error(
                      "Received error from SetClientAppUpdateState",
                      d.GetEResult(),
                    ),
                    new Error(
                      `Error from SetClientAppUpdateState: ${d.GetEResult()}`,
                    ))
                  );
              }
              v && M.get(r)?.app.SetPaused(e),
                z.setQueryData(L(g, c), M),
                u.refetch();
            },
            onSuccess: a,
          });
        }
        async function hr(c, r, e, a) {
          const n = B.w.Init(o);
          n.Body().set_appid(e),
            n.Body().set_client_instanceid(r),
            n.Body().set_query_params(a);
          const u = await R.LaunchClientApp(c, n);
          if (u.GetEResult() !== H.R)
            throw (
              (console.error(
                "Received error from LaunchClientApp",
                u.GetEResult(),
                u.Hdr().transport_error(),
              ),
              new Error(`Error from LaunchClientApp: ${u.GetEResult()}`))
            );
        }
      },
      179: (ur, C, k) => {
        k.d(C, {
          Bm: () => q,
          QD: () => H,
          f3: () => G,
          iV: () => D,
          ip: () => m,
          le: () => rr,
        });
        var A = k(90626),
          p = k(92757);
        function G(B, b) {
          let l;
          if (typeof B == "string") l = B;
          else if ("location" in B) l = B.location.search;
          else if ("search" in B) l = B.search;
          else return;
          const s = new URLSearchParams(l.substring(1));
          if (s.has(b)) {
            const i = s.getAll(b);
            return i[i.length - 1];
          }
        }
        function q(B, b, l, s = !1) {
          const i = new URLSearchParams(B.location.search.substring(1));
          if (l != null && l != null) {
            if (i.get(b) == l) return;
            i.set(b, l);
          } else {
            if (!i.has(b)) return;
            i.delete(b);
          }
          s
            ? B.replace(`?${i.toString()}`, { ...B.location.state })
            : B.push(`?${i.toString()}`);
        }
        function rr(B, b, l) {
          q(B, b, l, !0);
        }
        function H(B, b) {
          const l = (0, p.W6)(),
            s = (0, p.zy)(),
            i = (0, A.useMemo)(() => {
              const w = G(s.search, B);
              return w != null && w != null
                ? b != null && b != null
                  ? typeof b == "boolean"
                    ? b.constructor(w !== "false")
                    : b.constructor(w)
                  : w
                : b;
            }, [s.search, B, b]),
            t = (0, A.useCallback)(
              (w, h = !1) => {
                q(l, B, w != null && w != null ? String(w) : null, h);
              },
              [l, B],
            );
          return [i, t];
        }
        function m(B, b, l = !1) {
          const s = new URLSearchParams(B.location.search.substring(1));
          for (const i in b)
            if (b.hasOwnProperty(i)) {
              const t = b[i];
              s.delete(i), t != null && t != null && s.append(i, t);
            }
          l
            ? B.replace(`?${s.toString()}`, { ...B.location.state })
            : B.push(`?${s.toString()}`);
        }
        function D(B, b) {
          m(B, b, !0);
        }
      },
    },
  ]);
})();
