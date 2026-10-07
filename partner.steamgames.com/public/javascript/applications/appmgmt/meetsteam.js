/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [86762],
    {
      12946: (Be, ke, f) => {
        "use strict";
        f.r(ke), f.d(ke, { MeetSteamRoutes: () => at, default: () => ns });
        var t = f(7850),
          fe = f(58732),
          v = f(90626),
          G = f(17083),
          re = f(92757),
          Ee = f(61266),
          Le = f(26485),
          ze = f(90783),
          pe = f(25792),
          L = f(95695),
          he = f.n(L),
          We = f(21418),
          Re = f(45737),
          I = f.n(Re),
          W = f(67705),
          $ = f(99412),
          Z = f(72604),
          ie = f(35038),
          K = f(80613),
          T = f.n(K),
          o = f(75245);
        class ae extends K.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ae.prototype.clan_event_gid || o.Sg(ae.M()),
              K.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ae.sm_m ||
                (ae.sm_m = {
                  proto: ae,
                  fields: {
                    clan_event_gid: {
                      n: 1,
                      br: o.qM.readFixed64String,
                      bw: o.gp.writeFixed64String,
                    },
                    steamid: {
                      n: 2,
                      br: o.qM.readFixed64String,
                      bw: o.gp.writeFixed64String,
                    },
                    registration_group_id: {
                      n: 3,
                      br: o.qM.readUint32,
                      bw: o.gp.writeUint32,
                    },
                    registration_session_id: {
                      n: 4,
                      br: o.qM.readUint32,
                      bw: o.gp.writeUint32,
                    },
                    guest_count: {
                      n: 5,
                      br: o.qM.readUint32,
                      bw: o.gp.writeUint32,
                    },
                    jsondata: {
                      n: 7,
                      br: o.qM.readString,
                      bw: o.gp.writeString,
                    },
                    skip_email: { n: 8, br: o.qM.readBool, bw: o.gp.writeBool },
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
          static toObject(e, n) {
            return o.BT(ae.M(), e, n);
          }
          static fromObject(e) {
            return o.Uq(ae.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (T().BinaryReader)(e),
              s = new ae();
            return ae.deserializeBinaryFromReader(s, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return o.zj(ae.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (T().BinaryWriter)();
            return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            o.i0(ae.M(), e, n);
          }
          serializeBase64String() {
            var e = new (T().BinaryWriter)();
            return (
              ae.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMeetSteam_UpdateRegistration_Request";
          }
        }
        class je extends K.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), K.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return je.toObject(e, this);
          }
          static toObject(e, n) {
            return e ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(e) {
            return new je();
          }
          static deserializeBinary(e) {
            let n = new (T().BinaryReader)(e),
              s = new je();
            return je.deserializeBinaryFromReader(s, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return e;
          }
          serializeBinary() {
            var e = new (T().BinaryWriter)();
            return je.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {}
          serializeBase64String() {
            var e = new (T().BinaryWriter)();
            return (
              je.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMeetSteam_UpdateRegistration_Response";
          }
        }
        class k extends K.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              k.prototype.clan_event_gid || o.Sg(k.M()),
              K.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              k.sm_m ||
                (k.sm_m = {
                  proto: k,
                  fields: {
                    clan_event_gid: {
                      n: 1,
                      br: o.qM.readFixed64String,
                      bw: o.gp.writeFixed64String,
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
          static toObject(e, n) {
            return o.BT(k.M(), e, n);
          }
          static fromObject(e) {
            return o.Uq(k.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (T().BinaryReader)(e),
              s = new k();
            return k.deserializeBinaryFromReader(s, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return o.zj(k.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (T().BinaryWriter)();
            return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            o.i0(k.M(), e, n);
          }
          serializeBase64String() {
            var e = new (T().BinaryWriter)();
            return (
              k.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMeetSteam_GetAvailability_Request";
          }
        }
        class c extends K.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              c.prototype.availability || o.Sg(c.M()),
              K.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              c.sm_m ||
                (c.sm_m = {
                  proto: c,
                  fields: { availability: { n: 1, c: l, r: !0, q: !0 } },
                }),
              c.sm_m
            );
          }
          static MBF() {
            return c.sm_mbf || (c.sm_mbf = o.w0(c.M())), c.sm_mbf;
          }
          toObject(e = !1) {
            return c.toObject(e, this);
          }
          static toObject(e, n) {
            return o.BT(c.M(), e, n);
          }
          static fromObject(e) {
            return o.Uq(c.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (T().BinaryReader)(e),
              s = new c();
            return c.deserializeBinaryFromReader(s, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return o.zj(c.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (T().BinaryWriter)();
            return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            o.i0(c.M(), e, n);
          }
          serializeBase64String() {
            var e = new (T().BinaryWriter)();
            return (
              c.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMeetSteam_GetAvailability_Response";
          }
        }
        class l extends K.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              l.prototype.group_id || o.Sg(l.M()),
              K.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              l.sm_m ||
                (l.sm_m = {
                  proto: l,
                  fields: {
                    group_id: {
                      n: 1,
                      br: o.qM.readUint32,
                      bw: o.gp.writeUint32,
                    },
                    session_id: {
                      n: 2,
                      br: o.qM.readUint32,
                      bw: o.gp.writeUint32,
                    },
                    guest_count: {
                      n: 3,
                      br: o.qM.readUint32,
                      bw: o.gp.writeUint32,
                    },
                  },
                }),
              l.sm_m
            );
          }
          static MBF() {
            return l.sm_mbf || (l.sm_mbf = o.w0(l.M())), l.sm_mbf;
          }
          toObject(e = !1) {
            return l.toObject(e, this);
          }
          static toObject(e, n) {
            return o.BT(l.M(), e, n);
          }
          static fromObject(e) {
            return o.Uq(l.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (T().BinaryReader)(e),
              s = new l();
            return l.deserializeBinaryFromReader(s, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return o.zj(l.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (T().BinaryWriter)();
            return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            o.i0(l.M(), e, n);
          }
          serializeBase64String() {
            var e = new (T().BinaryWriter)();
            return (
              l.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMeetSteam_GetAvailability_Response_Session";
          }
        }
        class m extends K.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              m.prototype.clan_event_gid || o.Sg(m.M()),
              K.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              m.sm_m ||
                (m.sm_m = {
                  proto: m,
                  fields: {
                    clan_event_gid: {
                      n: 1,
                      br: o.qM.readFixed64String,
                      bw: o.gp.writeFixed64String,
                    },
                    steamid: {
                      n: 2,
                      br: o.qM.readFixed64String,
                      bw: o.gp.writeFixed64String,
                    },
                  },
                }),
              m.sm_m
            );
          }
          static MBF() {
            return m.sm_mbf || (m.sm_mbf = o.w0(m.M())), m.sm_mbf;
          }
          toObject(e = !1) {
            return m.toObject(e, this);
          }
          static toObject(e, n) {
            return o.BT(m.M(), e, n);
          }
          static fromObject(e) {
            return o.Uq(m.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (T().BinaryReader)(e),
              s = new m();
            return m.deserializeBinaryFromReader(s, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return o.zj(m.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (T().BinaryWriter)();
            return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            o.i0(m.M(), e, n);
          }
          serializeBase64String() {
            var e = new (T().BinaryWriter)();
            return (
              m.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMeetSteam_GetRegistrations_Request";
          }
        }
        class j extends K.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              j.prototype.registrations || o.Sg(j.M()),
              K.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              j.sm_m ||
                (j.sm_m = {
                  proto: j,
                  fields: { registrations: { n: 1, c: x, r: !0, q: !0 } },
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
          static toObject(e, n) {
            return o.BT(j.M(), e, n);
          }
          static fromObject(e) {
            return o.Uq(j.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (T().BinaryReader)(e),
              s = new j();
            return j.deserializeBinaryFromReader(s, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return o.zj(j.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (T().BinaryWriter)();
            return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            o.i0(j.M(), e, n);
          }
          serializeBase64String() {
            var e = new (T().BinaryWriter)();
            return (
              j.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMeetSteam_GetRegistrations_Response";
          }
        }
        class x extends K.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              x.prototype.group_id || o.Sg(x.M()),
              K.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              x.sm_m ||
                (x.sm_m = {
                  proto: x,
                  fields: {
                    group_id: {
                      n: 1,
                      br: o.qM.readUint32,
                      bw: o.gp.writeUint32,
                    },
                    session_id: {
                      n: 2,
                      br: o.qM.readUint32,
                      bw: o.gp.writeUint32,
                    },
                    steamid: {
                      n: 3,
                      br: o.qM.readFixed64String,
                      bw: o.gp.writeFixed64String,
                    },
                    guests_registered: {
                      n: 4,
                      br: o.qM.readUint32,
                      bw: o.gp.writeUint32,
                    },
                    jsondata: {
                      n: 5,
                      br: o.qM.readString,
                      bw: o.gp.writeString,
                    },
                    rt_attendance_marked: {
                      n: 6,
                      br: o.qM.readUint32,
                      bw: o.gp.writeUint32,
                    },
                    attendance_count: {
                      n: 7,
                      br: o.qM.readUint32,
                      bw: o.gp.writeUint32,
                    },
                    guests_attendance: {
                      n: 8,
                      br: o.qM.readString,
                      bw: o.gp.writeString,
                    },
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
          static toObject(e, n) {
            return o.BT(x.M(), e, n);
          }
          static fromObject(e) {
            return o.Uq(x.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (T().BinaryReader)(e),
              s = new x();
            return x.deserializeBinaryFromReader(s, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return o.zj(x.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (T().BinaryWriter)();
            return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            o.i0(x.M(), e, n);
          }
          serializeBase64String() {
            var e = new (T().BinaryWriter)();
            return (
              x.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMeetSteam_GetRegistrations_Response_Registration";
          }
        }
        class F extends K.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              F.prototype.clan_event_gid || o.Sg(F.M()),
              K.Message.initialize(this, e, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              F.sm_m ||
                (F.sm_m = {
                  proto: F,
                  fields: {
                    clan_event_gid: {
                      n: 1,
                      br: o.qM.readFixed64String,
                      bw: o.gp.writeFixed64String,
                    },
                    steamid: {
                      n: 2,
                      br: o.qM.readFixed64String,
                      bw: o.gp.writeFixed64String,
                    },
                    accountids: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: o.qM.readUint32,
                      pbr: o.qM.readPackedUint32,
                      bw: o.gp.writeRepeatedUint32,
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
          static toObject(e, n) {
            return o.BT(F.M(), e, n);
          }
          static fromObject(e) {
            return o.Uq(F.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (T().BinaryReader)(e),
              s = new F();
            return F.deserializeBinaryFromReader(s, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return o.zj(F.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (T().BinaryWriter)();
            return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            o.i0(F.M(), e, n);
          }
          serializeBase64String() {
            var e = new (T().BinaryWriter)();
            return (
              F.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMeetSteam_EmailInvitees_Request";
          }
        }
        class H extends K.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              H.prototype.num_emailed || o.Sg(H.M()),
              K.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              H.sm_m ||
                (H.sm_m = {
                  proto: H,
                  fields: {
                    num_emailed: {
                      n: 1,
                      br: o.qM.readUint32,
                      bw: o.gp.writeUint32,
                    },
                    num_skipped: {
                      n: 2,
                      br: o.qM.readUint32,
                      bw: o.gp.writeUint32,
                    },
                  },
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
          static toObject(e, n) {
            return o.BT(H.M(), e, n);
          }
          static fromObject(e) {
            return o.Uq(H.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (T().BinaryReader)(e),
              s = new H();
            return H.deserializeBinaryFromReader(s, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return o.zj(H.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (T().BinaryWriter)();
            return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            o.i0(H.M(), e, n);
          }
          serializeBase64String() {
            var e = new (T().BinaryWriter)();
            return (
              H.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMeetSteam_EmailInvitees_Response";
          }
        }
        class X extends K.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              X.prototype.clan_event_gid || o.Sg(X.M()),
              K.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              X.sm_m ||
                (X.sm_m = {
                  proto: X,
                  fields: {
                    clan_event_gid: {
                      n: 1,
                      br: o.qM.readFixed64String,
                      bw: o.gp.writeFixed64String,
                    },
                    steamid: {
                      n: 2,
                      br: o.qM.readFixed64String,
                      bw: o.gp.writeFixed64String,
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
          static toObject(e, n) {
            return o.BT(X.M(), e, n);
          }
          static fromObject(e) {
            return o.Uq(X.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (T().BinaryReader)(e),
              s = new X();
            return X.deserializeBinaryFromReader(s, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return o.zj(X.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (T().BinaryWriter)();
            return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            o.i0(X.M(), e, n);
          }
          serializeBase64String() {
            var e = new (T().BinaryWriter)();
            return (
              X.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CParterMeetSteam_TestFireEmails_Request";
          }
        }
        class P extends K.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              P.prototype.sessionids || o.Sg(P.M()),
              K.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              P.sm_m ||
                (P.sm_m = {
                  proto: P,
                  fields: {
                    sessionids: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: o.qM.readUint32,
                      pbr: o.qM.readPackedUint32,
                      bw: o.gp.writeRepeatedUint32,
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
          static toObject(e, n) {
            return o.BT(P.M(), e, n);
          }
          static fromObject(e) {
            return o.Uq(P.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (T().BinaryReader)(e),
              s = new P();
            return P.deserializeBinaryFromReader(s, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return o.zj(P.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (T().BinaryWriter)();
            return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            o.i0(P.M(), e, n);
          }
          serializeBase64String() {
            var e = new (T().BinaryWriter)();
            return (
              P.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CParterMeetSteam_TestFireEmails_Response";
          }
        }
        class M extends K.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              M.prototype.rt_oldest_date || o.Sg(M.M()),
              K.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              M.sm_m ||
                (M.sm_m = {
                  proto: M,
                  fields: {
                    rt_oldest_date: {
                      n: 1,
                      br: o.qM.readUint32,
                      bw: o.gp.writeUint32,
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
          static toObject(e, n) {
            return o.BT(M.M(), e, n);
          }
          static fromObject(e) {
            return o.Uq(M.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (T().BinaryReader)(e),
              s = new M();
            return M.deserializeBinaryFromReader(s, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return o.zj(M.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (T().BinaryWriter)();
            return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            o.i0(M.M(), e, n);
          }
          serializeBase64String() {
            var e = new (T().BinaryWriter)();
            return (
              M.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMeetSteam_GetSaleEventOrganizers_Request";
          }
        }
        class C extends K.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              C.prototype.accountid || o.Sg(C.M()),
              K.Message.initialize(this, e, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              C.sm_m ||
                (C.sm_m = {
                  proto: C,
                  fields: {
                    accountid: {
                      n: 1,
                      br: o.qM.readUint32,
                      bw: o.gp.writeUint32,
                    },
                    clan_event_gids: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: o.qM.readFixed64String,
                      pbr: o.qM.readPackedFixed64String,
                      bw: o.gp.writeRepeatedFixed64String,
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
          static toObject(e, n) {
            return o.BT(C.M(), e, n);
          }
          static fromObject(e) {
            return o.Uq(C.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (T().BinaryReader)(e),
              s = new C();
            return C.deserializeBinaryFromReader(s, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return o.zj(C.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (T().BinaryWriter)();
            return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            o.i0(C.M(), e, n);
          }
          serializeBase64String() {
            var e = new (T().BinaryWriter)();
            return (
              C.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleEventOrganizerInfo";
          }
        }
        class b extends K.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              b.prototype.info || o.Sg(b.M()),
              K.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              b.sm_m ||
                (b.sm_m = {
                  proto: b,
                  fields: { info: { n: 1, c: C, r: !0, q: !0 } },
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
          static toObject(e, n) {
            return o.BT(b.M(), e, n);
          }
          static fromObject(e) {
            return o.Uq(b.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (T().BinaryReader)(e),
              s = new b();
            return b.deserializeBinaryFromReader(s, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return o.zj(b.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (T().BinaryWriter)();
            return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            o.i0(b.M(), e, n);
          }
          serializeBase64String() {
            var e = new (T().BinaryWriter)();
            return (
              b.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMeetSteam_GetSaleEventOrganizers_Response";
          }
        }
        class Q extends K.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Q.prototype.accountids || o.Sg(Q.M()),
              K.Message.initialize(this, e, 0, -1, [1, 2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Q.sm_m ||
                (Q.sm_m = {
                  proto: Q,
                  fields: {
                    accountids: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: o.qM.readUint32,
                      pbr: o.qM.readPackedUint32,
                      bw: o.gp.writeRepeatedUint32,
                    },
                    partnerids: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: o.qM.readUint32,
                      pbr: o.qM.readPackedUint32,
                      bw: o.gp.writeRepeatedUint32,
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
          static toObject(e, n) {
            return o.BT(Q.M(), e, n);
          }
          static fromObject(e) {
            return o.Uq(Q.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (T().BinaryReader)(e),
              s = new Q();
            return Q.deserializeBinaryFromReader(s, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return o.zj(Q.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (T().BinaryWriter)();
            return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            o.i0(Q.M(), e, n);
          }
          serializeBase64String() {
            var e = new (T().BinaryWriter)();
            return (
              Q.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMeetSteam_GetBatchPartnerEmailAndName_Request";
          }
        }
        class D extends K.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              D.prototype.accountid || o.Sg(D.M()),
              K.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              D.sm_m ||
                (D.sm_m = {
                  proto: D,
                  fields: {
                    accountid: {
                      n: 1,
                      br: o.qM.readUint32,
                      bw: o.gp.writeUint32,
                    },
                    partnerid: {
                      n: 2,
                      br: o.qM.readUint32,
                      bw: o.gp.writeUint32,
                    },
                    realname: {
                      n: 3,
                      br: o.qM.readString,
                      bw: o.gp.writeString,
                    },
                    email: { n: 4, br: o.qM.readString, bw: o.gp.writeString },
                  },
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
          static toObject(e, n) {
            return o.BT(D.M(), e, n);
          }
          static fromObject(e) {
            return o.Uq(D.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (T().BinaryReader)(e),
              s = new D();
            return D.deserializeBinaryFromReader(s, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return o.zj(D.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (T().BinaryWriter)();
            return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            o.i0(D.M(), e, n);
          }
          serializeBase64String() {
            var e = new (T().BinaryWriter)();
            return (
              D.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerEmailAndName";
          }
        }
        class O extends K.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              O.prototype.info || o.Sg(O.M()),
              K.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              O.sm_m ||
                (O.sm_m = {
                  proto: O,
                  fields: { info: { n: 1, c: D, r: !0, q: !0 } },
                }),
              O.sm_m
            );
          }
          static MBF() {
            return O.sm_mbf || (O.sm_mbf = o.w0(O.M())), O.sm_mbf;
          }
          toObject(e = !1) {
            return O.toObject(e, this);
          }
          static toObject(e, n) {
            return o.BT(O.M(), e, n);
          }
          static fromObject(e) {
            return o.Uq(O.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (T().BinaryReader)(e),
              s = new O();
            return O.deserializeBinaryFromReader(s, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return o.zj(O.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (T().BinaryWriter)();
            return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            o.i0(O.M(), e, n);
          }
          serializeBase64String() {
            var e = new (T().BinaryWriter)();
            return (
              O.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMeetSteam_GetBatchPartnerEmailAndName_Response";
          }
        }
        var E;
        ((r) => {
          function e(h, g, p) {
            return h.SendMsg(
              "PartnerMeetSteam.UpdateRegistration#1",
              (0, ie.I8)(ae, g, p),
              je,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          r.UpdateRegistration = e;
          function n(h, g, p) {
            return h.SendMsg(
              "PartnerMeetSteam.GetAvailability#1",
              (0, ie.I8)(k, g, p),
              c,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          r.GetAvailability = n;
          function s(h, g, p) {
            return h.SendMsg(
              "PartnerMeetSteam.GetRegistrations#1",
              (0, ie.I8)(m, g, p),
              j,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          r.GetRegistrations = s;
          function a(h, g, p) {
            return h.SendMsg(
              "PartnerMeetSteam.EmailInvitees#1",
              (0, ie.I8)(F, g, p),
              H,
              { ePrivilege: 4 },
            );
          }
          r.EmailInvitees = a;
          function i(h, g, p) {
            return h.SendMsg(
              "PartnerMeetSteam.TestFireEmails#1",
              (0, ie.I8)(X, g, p),
              P,
              { ePrivilege: 4, rgBrowserAPISites: ["partner"] },
            );
          }
          r.TestFireEmails = i;
          function d(h, g, p) {
            return h.SendMsg(
              "PartnerMeetSteam.GetSaleEventOrganizers#1",
              (0, ie.I8)(M, g, p),
              b,
              {
                bConstMethod: !0,
                ePrivilege: 4,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          r.GetSaleEventOrganizers = d;
          function u(h, g, p) {
            return h.SendMsg(
              "PartnerMeetSteam.GetBatchPartnerEmailAndName#1",
              (0, ie.I8)(Q, g, p),
              O,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          r.GetBatchPartnerEmailAndName = u;
        })(E || (E = {}));
        var oe = f(64868),
          ee = f(20194),
          ue = f(75233),
          Ae = f(41735),
          Y = f.n(Ae),
          R = f(76559),
          N = f(3166),
          U = f(91916),
          te = f(40772),
          me = f(7582),
          ce = f(179);
        function ne(r, e = !1) {
          const [n, s = "00:00:00"] = r.trim().split(/\s+/),
            [a, i, d] = n.split("-").map(Number),
            [u, h, g] = s.split(":").map(Number),
            p = e
              ? Date.UTC(a, i - 1, d, u, h, g ?? 0)
              : new Date(a, i - 1, d, u, h, g ?? 0).getTime();
          return Math.floor(p / 1e3);
        }
        function J() {
          const [r] = v.useState(() =>
              (0, N.Tc)("events_list", "application_config"),
            ),
            [e] = (0, ce.QD)("filter"),
            n = (0, me.f1)(),
            [s, a] = v.useMemo(() => {
              let d = new Array(),
                u = new Array();
              return (
                r.forEach((h) => {
                  h.endtime && ne(h.endtime) < n ? u.push(h) : d.push(h);
                }),
                [u, d]
              );
            }, [r, n]),
            i = (0, v.useMemo)(
              () => r.find((d) => d.id === e?.toLocaleLowerCase()),
              [r, e],
            );
          return { rgOldEvents: s, rgEvents: a, selectConference: i };
        }
        function ve(r) {
          return ["usePartnerRevAndBestAppSlow", r];
        }
        async function _(r) {
          const e = `${N.TS.PARTNER_BASE_URL}/meetsteam/ajaxfetchpartnerdetails`,
            n = { sessionid: (0, N.KC)(), partnerid: r };
          return (await Y().get(e, { params: n }))?.data?.data;
        }
        function le(r) {
          const e = (0, ee.I)({
            queryKey: ve(r),
            queryFn: async () => _(r),
            enabled: !!r,
          });
          return e.isLoading ? null : e.data;
        }
        function ge(r, e) {
          return r.getQueryData(["usePartnerRevAndBestAppSlow", e]);
        }
        function Ke(r, e, n) {
          return (0, ee.I)({
            queryKey: ["useMeetSteamGetAllRegistration", e, n],
            queryFn: async () => {
              const a = ie.w.Init(m);
              a.Body().set_clan_event_gid(e);
              const i = await E.GetRegistrations(r, a);
              return i.BSuccess()
                ? i
                    .Body()
                    .registrations()
                    .map((d) => d.toObject())
                : [];
            },
            enabled: e != null && n != 0,
          });
        }
        function Oe(r) {
          const e = (0, ee.I)({
            queryKey: ["useMeetSteamSaleOperators"],
            queryFn: async () => {
              const n = ie.w.Init(M),
                s = new Date();
              s.setFullYear(s.getFullYear() - 2),
                n.Body().set_rt_oldest_date(0);
              const a = await E.GetSaleEventOrganizers(r, n);
              return a.BSuccess()
                ? a
                    .Body()
                    .info()
                    .map((i) => i.toObject())
                : [];
            },
          });
          return e.isLoading ? null : e.data;
        }
        function Je(r) {
          const [e, n] = (0, v.useState)(!1),
            [s, a] = (0, v.useState)(0),
            i = (0, ue.jE)();
          return (
            (0, v.useEffect)(() => {
              (async () => {
                let u = 0;
                for (const h of r) {
                  const g = h.results.partner_id,
                    p = new R.b(h.steamid).GetAccountID();
                  await Promise.all([
                    (0, U.qG)(g),
                    i.prefetchQuery({
                      queryKey: ve(g),
                      queryFn: async () => _(g),
                    }),
                    (0, te.PQ)(i, g),
                  ]),
                    ++u,
                    a(u);
                }
                n(!0);
              })();
            }, [i, r]),
            { bComplete: e, nCount: s }
          );
        }
        var ye = f(19367),
          Fe = f.n(ye),
          de = f(48421),
          we = f(69909),
          be = f(63854),
          V = f(58534),
          Ze = f(16369),
          Se = f(1880),
          xe = f(69168),
          se = f(85599),
          Xe = f(11243),
          et = f(36707),
          It = f(41502),
          A = f(18210),
          ct = f(92264),
          Ne = f(98609),
          an = f(30565),
          De = f.n(an);
        function on(r) {
          const e = At();
          return (0, t.jsx)("div", {
            children: (0, t.jsx)("ol", {
              children: Array.from(e.entries()).map(([n, s]) =>
                (0, t.jsx)(
                  "li",
                  {
                    children: (0, t.jsx)("a", {
                      href: `${N.TS.PARTNER_BASE_URL}meetsteam/surveyresults/${n}`,
                      target: "_blank",
                      children: s,
                    }),
                  },
                  n,
                ),
              ),
            }),
          });
        }
        function At() {
          const [r] = (0, v.useState)(() => {
            const e = (0, N.Tc)("survey_list", "application_config") || {},
              n = new Map();
            for (const s of Object.keys(e)) n.set(s, e[s]);
            return n;
          });
          return r;
        }
        function cn() {
          const [r, e] = (0, v.useState)(location.search);
          return (
            (0, v.useEffect)(() => {
              function n(s) {
                s.data === "urlchange" && e(location.search);
              }
              return (
                window.addEventListener("message", n),
                () => {
                  window.removeEventListener("message", n);
                }
              );
            }, []),
            r
          );
        }
        function Tt(r, e) {
          const n = cn(),
            s = (0, v.useMemo)(() => {
              const h = new URLSearchParams(n.substring(1)).get(r);
              return h != null
                ? e != null
                  ? typeof e == "boolean"
                    ? e.constructor(h !== "false")
                    : e.constructor(h)
                  : h
                : e;
            }, [r, e, n]),
            [a, i] = (0, v.useState)(s),
            d = v.useCallback(
              (u, h = !1) => {
                const g = new URLSearchParams(n.substring(1));
                if (u != null) {
                  if (g.get(r) == u) return;
                  g.set(r, String(u));
                } else {
                  if (!g.has(r)) return;
                  g.delete(r);
                }
                h
                  ? history.replaceState(
                      history.state,
                      "",
                      decodeURIComponent(`${window.location.pathname}?${g}`),
                    )
                  : history.pushState(
                      history.state,
                      "",
                      decodeURIComponent(`${window.location.pathname}?${g}`),
                    ),
                  (0, v.startTransition)(() => {
                    i(u), window.postMessage("urlchange");
                  });
              },
              [r, n],
            );
          return [a, d];
        }
        const Et = v.createContext(void 0);
        function ln(r) {
          const { children: e } = r,
            [n, s] = Tt("showpastevents", !1);
          return (0, t.jsx)(Et.Provider, {
            value: { bShowArchived: n, setShowArchived: s },
            children: e,
          });
        }
        const Ft = () => {
          const r = (0, v.useContext)(Et);
          if (!r)
            throw new Error(
              "useMeetSteamArchived must be used within MeetSteamArchivedProvider",
            );
          return r;
        };
        var dn = f(34283),
          $e = f.n(dn),
          rt = f(34592),
          Pe = f(22880),
          st = f(45926),
          dt = f(54407),
          un = f(71742),
          hn = f(13018),
          gn = f(60298);
        class Ge {
          m_steamInterface;
          GetSaleFeatureTransport() {
            return this.m_steamInterface;
          }
          static s_Singleton;
          static Get() {
            return (
              Ge.s_Singleton ||
                ((Ge.s_Singleton = new Ge()), Ge.s_Singleton.Init()),
              Ge.s_Singleton
            );
          }
          Init() {
            const e = (0, W.Tc)("store_feature_token", "application_config");
            (0, un.wT)(!!e, "require store_feature_token"),
              (this.m_steamInterface = (0, gn.p)(
                new hn.D(Ne.TS.WEBAPI_BASE_URL, e),
              ));
          }
        }
        function ut() {
          return Ge.Get().GetSaleFeatureTransport().GetServiceTransport();
        }
        var it = f(24642),
          Mt = f(72609);
        async function mn(r) {
          const e = `${Mt.TS.PARTNER_BASE_URL}meetsteam/admin/ajaxgetpartnersforaccount?accountid=${r}`,
            n = await fetch(e);
          if (!n.ok)
            throw new Error(`Failed to read the partner list for account ${r}`);
          const s = await n.json();
          if (s.success != Z.R)
            throw new Error(
              `Failed to read the partner list for account ${r}: ${s.msg}`,
            );
          return s.partners ?? [];
        }
        function fn(r) {
          return (0, ee.I)({
            queryKey: ["MeetSteamPartnersForAccount", r],
            queryFn: () => mn(r),
            enabled: r > 0,
          });
        }
        function ss(r, e) {
          const [n, s] = useState(r),
            a = Lt(n, {
              nTimeoutMS: e,
              nTimeoutExtensionMS: e,
              nMaxTimeoutExtensions: 1 / 0,
            });
          return [n, a, s];
        }
        function Lt(r, e = {}) {
          const {
              nTimeoutMS: n = 350,
              nTimeoutExtensionMS: s = 125,
              nMaxTimeoutExtensions: a = 3,
            } = e,
            [i, d] = v.useState(r),
            u = v.useRef(void 0);
          return (
            v.useEffect(() => {
              const h = performance.now();
              u.current
                ? h - u.current.tsLastChange < a * n &&
                  (u.current.tsScheduledTimeout = Math.max(
                    performance.now() + s,
                    u.current.tsScheduledTimeout,
                  ))
                : (u.current = {
                    tsLastChange: h,
                    tsScheduledTimeout: performance.now() + n,
                  });
              const g = u.current.tsScheduledTimeout - performance.now(),
                p = window.setTimeout(() => {
                  (u.current = void 0), d(r);
                }, g);
              return () => window.clearTimeout(p);
            }, [r, n, s, a]),
            i
          );
        }
        function pn(r) {
          const e = r.trim();
          if (!/^\d+$/.test(e)) return 0;
          if (Number(e) > 4294967295) {
            const n = new R.b(e);
            return n.BIsValid() && n.BIsIndividualAccount()
              ? n.GetAccountID()
              : 0;
          }
          return Number(e);
        }
        function vn(r) {
          const { hideModal: e, gid: n } = r,
            [s, a] = (0, v.useState)(!1),
            [i, d] = (0, v.useState)(null),
            [u, h] = v.useState(""),
            [g, p] = v.useState(""),
            [y, w] = v.useState(""),
            [z, B] = v.useState(!1),
            S = Lt(u),
            q = pn(S),
            Te = !!S.trim() && !q,
            Qe = ut(),
            qe = fn(q),
            Me = qe.data,
            Ie = (0, ee.I)({
              queryKey: ["MeetSteamInviteDirectDialog", n, q],
              queryFn: async () => {
                const Ue = {
                    steamid: R.b.InitFromAccountID(q).ConvertTo64BitString(),
                    gid: n,
                    type: st.Dk.rV,
                  },
                  _e = await st.Nl.GetUserActionData(Qe, Ue);
                return _e.BSuccess() && _e.Body().jsondata()
                  ? JSON.parse(_e.Body().jsondata())
                  : {};
              },
              enabled: !!n && q > 0,
            });
          v.useEffect(() => {
            if (!Ie.isLoading && Ie.isSuccess) {
              const Ue = Me?.length == 1 ? Me[0].partnerid.toString() : "";
              p(Ie.data.partner_id ? Ie.data.partner_id.toString() : Ue),
                w(Ie.data.email_override ?? ""),
                B(Ie.data.allow_registration_if_full ?? !1);
            }
          }, [Ie.isLoading, Ie.isSuccess, Ie.data, Me]);
          const rs = async () => {
            a(!0);
            const Ue = Number.parseInt(g) > 0 ? Number.parseInt(g) : 0,
              _e = await zt(
                n,
                [
                  {
                    nAccountID: q,
                    nPartnerID: Ue,
                    strEmailOverride: y,
                    bAllowRegistrationIfFull: z,
                  },
                ],
                !0,
              ),
              sn = _e && _e.success == Z.R;
            sn || d("We hit error during invite, check console: " + _e?.msg),
              a(!1),
              Ie.refetch(),
              sn && e();
          };
          return (0, t.jsxs)(Se.o0, {
            strTitle: "Invite User",
            bOKDisabled: !q || s || Ie.isLoading,
            onOK: rs,
            onCancel: e,
            children: [
              !!i &&
                (0, t.jsx)("div", {
                  className: L.ErrorStylesWithIcon,
                  children: i,
                }),
              !s &&
                (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsx)("div", {
                      children:
                        "Saving sends an invitation email to this account only, and only if it has not been sent one for this event already. It does not send the invitation emails queued for anyone else. Use the Invitation And Registration Status dialog for those.",
                    }),
                    (0, t.jsx)(V.pd, {
                      type: "text",
                      label: "Account ID or Steam ID",
                      description:
                        "Accepts either the 32-bit account id or the 64-bit steam id",
                      onChange: (Ue) => h(Ue.currentTarget.value),
                      value: u,
                    }),
                    Te &&
                      (0, t.jsx)("div", {
                        className: L.ErrorStylesWithIcon,
                        children: "That is not a valid account id or steam id.",
                      }),
                    q != 0 && (0, t.jsx)(xn, { nAccountID: q }),
                    q != 0 &&
                      !Ie.isLoading &&
                      (0, t.jsxs)(t.Fragment, {
                        children: [
                          (0, t.jsx)(V.pd, {
                            type: "number",
                            label: "Partner ID (optional)",
                            onChange: (Ue) => p(Ue.currentTarget.value),
                            value: g,
                          }),
                          (0, t.jsx)(jn, {
                            rgPartners: Me,
                            bLoading: qe.isLoading,
                            bFailed: qe.isError,
                            strPartnerID: g,
                            SetPartnerID: p,
                          }),
                          (0, t.jsx)(V.pd, {
                            type: "text",
                            label: "Email override (optional)",
                            onChange: (Ue) => w(Ue.currentTarget.value.trim()),
                            value: y,
                          }),
                          (0, t.jsx)(V.Yh, {
                            controlled: !0,
                            checked: z,
                            onChange: B,
                            label: "Allow if registration is full",
                          }),
                        ],
                      }),
                  ],
                }),
              s &&
                (0, t.jsx)(se.t, {
                  size: "small",
                  position: "center",
                  string: (0, A.we)("#Saving"),
                }),
              Ie.isLoading &&
                (0, t.jsx)(se.t, {
                  size: "small",
                  position: "center",
                  string: (0, A.we)("#Loading"),
                }),
            ],
          });
        }
        function xn(r) {
          const { nAccountID: e } = r,
            [n, s] = (0, dt.KT)(e);
          if (s)
            return (0, t.jsx)(se.t, {
              size: "small",
              position: "center",
              string: (0, A.we)("#Loading"),
            });
          if (!n)
            return (0, t.jsx)("div", {
              className: L.ErrorStylesWithIcon,
              children: `We could not find an account for ${e}.`,
            });
          const a = R.b.InitFromAccountID(e).ConvertTo64BitString();
          return (0, t.jsxs)("div", {
            className: $e().AccountSummary,
            children: [
              (0, t.jsx)("img", {
                className: $e().AccountAvatar,
                src: n.avatar_url?.replace(/\.jpg$/, "_medium.jpg"),
              }),
              (0, t.jsxs)("div", {
                children: [
                  (0, t.jsx)("div", {
                    className: $e().AccountPersonaName,
                    children: n.persona_name,
                  }),
                  (0, t.jsx)("a", {
                    href: `${Ne.TS.SUPPORT_BASE_URL}account/overview/${a}`,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: `Account ${e} / SteamID ${a}`,
                  }),
                ],
              }),
            ],
          });
        }
        function jn(r) {
          const {
            rgPartners: e,
            bLoading: n,
            bFailed: s,
            strPartnerID: a,
            SetPartnerID: i,
          } = r;
          return n
            ? (0, t.jsx)(se.t, {
                size: "small",
                position: "center",
                string: "Looking up partner membership",
              })
            : s
              ? (0, t.jsx)("div", {
                  className: $e().PartnerListHeader,
                  children:
                    "We could not look up partner membership, enter the partner id above.",
                })
              : !e || e.length == 0
                ? (0, t.jsx)("div", {
                    className: $e().PartnerListHeader,
                    children: "This account is not a member of any partner.",
                  })
                : (0, t.jsxs)("div", {
                    className: $e().PartnerList,
                    children: [
                      (0, t.jsx)("div", {
                        className: $e().PartnerListHeader,
                        children: "Member of, click to use:",
                      }),
                      e.map((d) =>
                        (0, t.jsxs)(
                          "a",
                          {
                            href: "#",
                            className: (0, et.A)(
                              $e().PartnerListRow,
                              d.partnerid.toString() == a
                                ? $e().PartnerListRowSelected
                                : "",
                            ),
                            onClick: (u) => {
                              u.preventDefault(), i(d.partnerid.toString());
                            },
                            children: [d.partner_name, " (", d.partnerid, ")"],
                          },
                          d.partnerid,
                        ),
                      ),
                    ],
                  });
        }
        function yn(r) {
          const { hideModal: e, gid: n } = r,
            [s, a] = (0, v.useState)(null),
            [i, d] = (0, v.useState)(!1),
            [u, h] = (0, v.useState)(null),
            [g, p] = (0, v.useState)(null),
            [y, w] = (0, v.useState)(null),
            z = async () => {
              d(!0);
              const S = await zt(n, s, !1);
              S?.success == Z.R
                ? (p(S.rgInvitedAccounts.length), w(S.rgSkippedAccounts.length))
                : h("We hit error during invite, check console: " + S?.msg),
                d(!1);
            },
            B = () => {
              p(null), w(null), d(!1), a(null), e();
            };
          return (0, t.jsxs)(Se.o0, {
            strTitle: "Invite Users",
            bOKDisabled: !s || s.length == 0 || g != null,
            strCancelButtonText: g !== null ? "Close" : "Cancel",
            onOK: z,
            onCancel: B,
            children: [
              !!u &&
                (0, t.jsx)("div", {
                  className: L.ErrorStylesWithIcon,
                  children: u,
                }),
              g != null &&
                (0, t.jsxs)("div", {
                  children: [
                    "Invited ",
                    (0, it.D)(g),
                    " accounts, skipped previously invited ",
                    (0, it.D)(y),
                  ],
                }),
              i &&
                (0, t.jsx)(se.t, {
                  size: "small",
                  position: "center",
                  string: (0, A.we)("#Saving"),
                }),
              (0, t.jsx)("div", {
                children:
                  "Saving sends an invitation email to the accounts imported here that have not been sent one for this event already. It does not send the invitation emails queued for anyone else on the event.",
              }),
              s == null
                ? (0, t.jsx)(bn, { setInvites: a })
                : (0, t.jsx)(wn, { rgInvites: s }),
            ],
          });
        }
        function wn(r) {
          const { rgInvites: e } = r;
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsxs)("div", {
                children: ["Total Invites Parsed: ", e.length, " "],
              }),
              (0, t.jsxs)("table", {
                children: [
                  (0, t.jsx)("thead", {
                    children: (0, t.jsxs)("tr", {
                      children: [
                        (0, t.jsx)("th", { children: "AccountID" }),
                        (0, t.jsx)("th", { children: "PartnerID" }),
                        (0, t.jsx)("th", { children: "Email Override" }),
                      ],
                    }),
                  }),
                  (0, t.jsx)("tbody", {
                    children: e.map((n, s) =>
                      (0, t.jsxs)(
                        "tr",
                        {
                          children: [
                            (0, t.jsx)("td", { children: n.nAccountID }),
                            (0, t.jsx)("td", { children: n.nPartnerID }),
                            (0, t.jsx)("td", { children: n.strEmailOverride }),
                          ],
                        },
                        "invite" + n.nAccountID + "_" + s,
                      ),
                    ),
                  }),
                ],
              }),
            ],
          });
        }
        function bn(r) {
          const { setInvites: e } = r;
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)("div", {
                children: "Format for CSV File, please use the template below:",
              }),
              (0, t.jsxs)("ul", {
                children: [
                  (0, t.jsxs)("li", {
                    children: [
                      (0, t.jsx)("b", { children: "nAccountID" }),
                      " - required, 32-bit integer value, not the 64-bit steam id",
                    ],
                  }),
                  (0, t.jsxs)("li", {
                    children: [
                      (0, t.jsx)("b", { children: "nPartnerID" }),
                      " - (preferred for biz contact)",
                    ],
                  }),
                  (0, t.jsxs)("li", {
                    children: [
                      (0, t.jsx)("b", { children: "strOverrideEmail" }),
                      " - (optional, we wil use the email associated with the account and partner or the steamid itself)",
                    ],
                  }),
                ],
              }),
              (0, t.jsx)("br", {}),
              (0, t.jsx)("a", {
                href: "#",
                onClick: async (n) => {
                  n.preventDefault(), n.stopPropagation();
                  const s = [];
                  s.push(["nAccountID", "nPartnerID", "strEmailOverride"]),
                    s.push(["388445686", "1", "adils@valvesoftware.com"]),
                    Pe.g.WriteCSVToFile(s, "invite_template.csv");
                },
                children: "Download Template Example",
              }),
              (0, t.jsx)("br", {}),
              (0, t.jsx)("br", {}),
              (0, t.jsx)(V.$n, {
                children: (0, t.jsxs)("label", {
                  className: $e().ImportButtonLabel,
                  htmlFor: "import-discount-input",
                  children: [
                    "Choose CSV File",
                    (0, t.jsx)("input", {
                      id: "import-discount-input",
                      type: "file",
                      style: { display: "none" },
                      onChange: async (n) => {
                        if (n.target.files.length >= 1) {
                          const s = n.target.files[0],
                            a = await Pe.g.ParseCSVFile(s);
                          if (a?.data) {
                            const i = new Array();
                            a.data.forEach((d) => {
                              if (d.nAccountID) {
                                const u = {
                                  nAccountID: Number.parseInt(d.nAccountID),
                                };
                                d.nPartnerID &&
                                  (u.nPartnerID = Number.parseInt(
                                    d.nPartnerID,
                                  )),
                                  d.strEmailOverride &&
                                    (u.strEmailOverride = d.strEmailOverride),
                                  i.push(u);
                              }
                            }),
                              e(i);
                          }
                        }
                      },
                    }),
                  ],
                }),
              }),
            ],
          });
        }
        async function zt(r, e, n) {
          const s = e.map((g) => g.nAccountID).join(","),
            a = e.map((g) => g.nPartnerID).join(","),
            i = e.map((g) => g.strEmailOverride).join(","),
            d = e
              .map((g) => (g.bAllowRegistrationIfFull ? "1" : "0"))
              .join(",");
          let u = new FormData();
          u.append("sessionid", (0, N.KC)()),
            u.append("gid", r),
            u.append("accounts", s),
            u.append("partnerids", a),
            u.append("emailoverride", i),
            u.append("allowregistrationiffull", d),
            u.append("forceupdate", n ? "1" : "0");
          const h = `${Ne.TS.PARTNER_BASE_URL}/meetsteam/ajaxinviteusers`;
          try {
            const g = await Y().post(h, u, { withCredentials: !0 });
            if (g?.data?.success != Z.R) {
              let p = (0, rt.H)(g);
              console.error(
                "DisplayPartnerEventRow error: " + p.strErrorMsg,
                p,
              );
            }
            return g?.data;
          } catch (g) {
            let p = (0, rt.H)(g);
            console.error("DisplayPartnerEventRow error: " + p.strErrorMsg, p);
          }
          return null;
        }
        var ht = f(16666),
          gt = f(32),
          Ot = f(54806),
          Bn = f(58632),
          mt = f.n(Bn);
        function Nt(r) {
          const e = ut(),
            n = v.useContext(ft),
            s = (0, ee.I)(Ut(n, e, r));
          return s.isLoading ? null : s.data;
        }
        function Wt(r) {
          const e = ut(),
            n = v.useContext(ft);
          return (0, Ot.E)({ queries: r.map((s) => Ut(n, e, s)) });
        }
        function is(r) {
          return ReactQueryClient.getQueryData([
            "MeetSteamAllRegistrationStatus",
            r,
          ]);
        }
        function as(r) {
          const { loadMeetSteamAllRegistration: e, children: n } = r,
            s = React.useMemo(() => ({ loadMeetSteamAllRegistration: e }), [e]);
          return React.createElement(ft.Provider, { value: s }, n);
        }
        const ft = v.createContext({
          loadMeetSteamAllRegistration: async (r, e) => await Sn(r).load(e),
        });
        function Ut(r, e, n) {
          return {
            queryKey: ["MeetSteamAllRegistrationStatus", n],
            queryFn: () => r.loadMeetSteamAllRegistration(e, n),
            enabled: !!n,
          };
        }
        let pt;
        function Sn(r) {
          return (
            pt ||
              (pt = new (mt())(
                async (e) => {
                  const n = ie.w.Init(st.j3);
                  n.Body().set_gids([...e]), n.Body().set_type(st.Dk.rV);
                  const s = await st.Nl.GetMultipleUserActionData(r, n);
                  if (!s.BSuccess())
                    throw `Failed to call GetMultipleUserActionData with details: ${s.GetErrorMessage()}`;
                  const a = new Map();
                  return (
                    s
                      .Body()
                      .entries()
                      .forEach((i) => {
                        try {
                          const d = JSON.parse(i.jsondata());
                          if (!("steamid" in d) || !d.steamid) {
                            d.steamid = i.steamid();
                            const h = new R.b(d.steamid);
                            d.accountid = h.GetAccountID();
                          }
                          const u = i.gid();
                          return (
                            a.has(u) ? a.get(u).push(d) : a.set(u, [d]), [d]
                          );
                        } catch {
                          throw `Failed to parse GetMultipleUserActionData with details: ${i.steamid()}`;
                        }
                      }),
                    e.map((i) => a.get(i) ?? null)
                  );
                },
                { maxBatchSize: 5 },
              )),
            pt
          );
        }
        var kt = f(40497);
        function Rt(r, e) {
          const n = (0, be.a)(),
            s = v.useContext(xt),
            a = (0, ee.I)($t(s, n, r, e));
          return a.isLoading ? null : a.data;
        }
        function Dn(r, e) {
          const n = (0, be.a)(),
            s = v.useContext(xt);
          return (0, Ot.E)({ queries: r.map((a, i) => $t(s, n, a, e[i])) });
        }
        function vt(r, e) {
          return kt.L.getQueryData(["PartnerEmailAndName", r, e]);
        }
        function os(r) {
          const { loadPartnerEmailAndName: e, children: n } = r,
            s = React.useMemo(() => ({ loadPartnerEmailAndName: e }), [e]);
          return React.createElement(xt.Provider, { value: s }, n);
        }
        const xt = v.createContext({
          loadPartnerEmailAndName: async (r, e, n) =>
            await In(r).load({ accountID: e, partnerID: n }),
        });
        function $t(r, e, n, s) {
          return {
            queryKey: ["PartnerEmailAndName", n, s],
            queryFn: () => r.loadPartnerEmailAndName(e, n, s),
            enabled: !!n || !!s,
          };
        }
        let jt;
        function In(r) {
          return (
            jt ||
              (jt = new (mt())(
                async (e) => {
                  const n = ie.w.Init(Q);
                  n.Body().set_accountids(e.map((i) => i.accountID)),
                    n.Body().set_partnerids(e.map((i) => i.partnerID));
                  const s = await E.GetBatchPartnerEmailAndName(r, n);
                  if (!s.BSuccess())
                    throw `Failed to call GetBatchPartnerEmailAndName with details: ${s.GetErrorMessage()}`;
                  const a = new Map();
                  return (
                    s
                      .Body()
                      .info()
                      .forEach((i) => {
                        a.set(
                          "" + i.accountid() + "_" + i.partnerid(),
                          i.toObject(),
                        );
                      }),
                    e.map(
                      (i) =>
                        a.get("" + i.accountID + "_" + i.partnerID) ?? null,
                    )
                  );
                },
                { maxBatchSize: 100 },
              )),
            jt
          );
        }
        function An(r) {
          const { rgEventGIDs: e } = r,
            [n, s, a] = (0, oe.uD)(),
            [i, d] = (0, v.useState)(null);
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)("span", { children: " | " }),
              (0, t.jsx)("a", {
                href: "#",
                onClick: (u) => {
                  u.preventDefault(), u.stopPropagation(), s();
                },
                children: "Analyse Top Partner Coverage",
              }),
              (0, t.jsx)(xe.E, {
                active: n,
                children: (0, t.jsx)(pe.tH, {
                  children: (0, t.jsx)(Se.o0, {
                    closeModal: a,
                    bAllowFullSize: !0,
                    bDisableBackgroundDismiss: !0,
                    children:
                      i == null
                        ? (0, t.jsx)(Vt, {
                            rgEventGIDs: e,
                            fnSelectedEvents: d,
                          })
                        : (0, t.jsxs)(t.Fragment, {
                            children: [
                              (0, t.jsx)(En, { rgGidMeetSteamEvents: i }),
                              (0, t.jsx)(V.$n, {
                                onClick: () => d(null),
                                children: "Reset Selection",
                              }),
                            ],
                          }),
                  }),
                }),
              }),
            ],
          });
        }
        const lt = (0, ht.FB)();
        function Ct(r) {
          return (
            (r = r?.filter(
              (e, n) =>
                n == 0 ||
                !r.slice(0, n).some((s) => s.accountid == e.accountid),
            )),
            r
              ?.map(
                (e) =>
                  e.name ||
                  vt(e.accountid, e.partner_id)?.realname ||
                  e.accountid,
              )
              .join(",") || ""
          );
        }
        function Kt(r) {
          return Ct(r.cell.getValue());
        }
        function Tn(r, e) {
          const n = Wt(e),
            [s, a, i] = (0, v.useMemo)(() => {
              if (n.filter((y) => !y.isLoading).length != n.length)
                return [null, [], []];
              const u = new Map(),
                h = new Set(r),
                g = new Map();
              n.forEach((y) =>
                y.data.forEach((w) => {
                  if (
                    h.has(w.partner_id) &&
                    (g.has(w.partner_id)
                      ? g.get(w.partner_id).push(w)
                      : g.set(w.partner_id, [w]),
                    !w.name)
                  ) {
                    const z = w.accountid;
                    u.set(`${z}_${w.partner_id}`, {
                      accountID: z,
                      partnerID: w.partner_id,
                    });
                  }
                }),
              );
              const p = Array.from(u.values());
              return [g, p.map((y) => y.accountID), p.map((y) => y.partnerID)];
            }, [n, r]),
            d = Dn(a, i);
          return d.filter((u) => !u.isLoading).length == d.length ? s : null;
        }
        function En(r) {
          const { rgGidMeetSteamEvents: e } = r,
            n = Mn(),
            s = (0, U.vh)(n),
            a = Tn(n, e),
            i = (0, v.useMemo)(() => {
              if (!s || !a) return null;
              const h = [];
              return (
                n.forEach((g) => {
                  const p = a.get(g);
                  h.push({
                    partner_id: g,
                    partner_name: (0, U.Yd)(g)?.name || "Unknown",
                    invitations:
                      p?.filter(
                        (y) =>
                          y.invited &&
                          !Object.keys(y).some((w) =>
                            w.startsWith("registration_emailed"),
                          ),
                      ) || [],
                    registrations:
                      p?.filter((y) =>
                        Object.keys(y).some((w) =>
                          w.startsWith("registration_emailed"),
                        ),
                      ) || [],
                  });
                }),
                h
              );
            }, [s, a, n]),
            d = (0, v.useMemo)(
              () => [
                lt.accessor("partner_id", { header: "Partner ID", size: 100 }),
                lt.accessor("partner_name", {
                  header: "Partner Name",
                  size: 300,
                }),
                lt.accessor("invitations", {
                  header: "Invitations",
                  cell: Kt,
                  size: 300,
                }),
                lt.accessor("registrations", {
                  header: "Registered to Attend",
                  cell: Kt,
                  size: 300,
                }),
              ],
              [],
            );
          function u() {
            const h = [],
              g = [];
            for (const y of d) g.push(y.header);
            h.push(g);
            for (const y of i) {
              const w = [];
              for (const z of d) {
                const B = y[z.accessorKey];
                w.push(
                  z.accessorKey == "invitations" ||
                    z.accessorKey == "registrations"
                    ? Ct(B)
                    : B.toString(),
                );
              }
              h.push(w);
            }
            Pe.g.WriteCSVToFile(h, "partneranalysis.csv");
          }
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(V.JU, { children: "Partner Analysis" }),
              i
                ? (0, t.jsxs)(pe.tH, {
                    children: [
                      (0, t.jsx)(V.$n, {
                        id: "download-csv",
                        onClick: u,
                        style: { width: "120px" },
                        children: "Download CSV",
                      }),
                      (0, t.jsx)(gt.k, {
                        columns: d,
                        data: i,
                        getRowKey: (h) => h,
                        stickyHeader: !0,
                        nItemHeight: 28,
                        overscan: n.length,
                      }),
                      (0, t.jsx)("br", {}),
                      (0, t.jsx)(V.$n, {
                        id: "download-csv",
                        onClick: u,
                        style: { width: "120px" },
                        children: "Download CSV",
                      }),
                    ],
                  })
                : (0, t.jsx)(se.t, {
                    string: (0, A.we)("#Loading"),
                    position: "center",
                  }),
            ],
          });
        }
        function Vt(r) {
          const { rgEventGIDs: e, fnSelectedEvents: n } = r,
            [s, a] = (0, v.useState)([]),
            { bShowArchived: i, setShowArchived: d } = Ft(),
            { bIsLoading: u, events: h } = (0, de.PB)(e),
            g = (0, v.useMemo)(() => {
              const p = Math.floor(new Date().getTime() / 1e3);
              return i && h ? [...h] : h?.filter((w) => w.endTime >= p);
            }, [h, i]);
          return u
            ? (0, t.jsx)(se.t, { string: "Loading..." })
            : (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsx)(V.Yh, {
                    checked: i,
                    onChange: d,
                    label: "Show Past Events",
                  }),
                  (0, t.jsx)(V.JU, { children: "Choose Events" }),
                  g.map((p) =>
                    (0, t.jsx)(
                      Fn,
                      { gidClanEvent: p.GID, rgSelected: s, fnSetSelected: a },
                      p.GID,
                    ),
                  ),
                  (0, t.jsx)(V.$n, {
                    disabled: s.length == 0,
                    onClick: () => n(s),
                    children: "Continue",
                  }),
                ],
              });
        }
        function Fn(r) {
          const { gidClanEvent: e, rgSelected: n, fnSetSelected: s } = r,
            i = (0, de.RR)(e).GetNameWithFallback($.Bhc);
          return (0, t.jsx)(V.Yh, {
            label: i,
            checked: n.includes(e),
            onChange: (d) => {
              const u = n.indexOf(e),
                h = u >= 0;
              d && !h
                ? s([...n, e])
                : !d && h && s([...n.slice(0, u), ...n.slice(u + 1)]);
            },
          });
        }
        function Mn() {
          const [r] = (0, v.useState)(() =>
            (0, W.Tc)("partners_to_verify", "application_config"),
          );
          return r;
        }
        var yt = f(16114),
          He = f(20117),
          Ln = f(30603),
          Ht = f.n(Ln);
        function zn(r) {
          const { hideModal: e, gid: n } = r,
            s = Nt(n),
            a = (0, ue.jE)(),
            [i, d] = (0, v.useMemo)(
              () =>
                s
                  ? [
                      s.length,
                      s.filter(
                        (u) =>
                          !u.invitation_emailed &&
                          !u.invite_registration_auto_create,
                      ).length,
                    ]
                  : [0, 0],
              [s],
            );
          return (0, t.jsxs)(Se.o0, {
            bAlertDialog: !0,
            bAllowFullSize: !0,
            bDisableBackgroundDismiss: !0,
            closeModal: e,
            strDescription:
              "Every account with an invitation or a registration on this event, and where each one is. Rows with no invite are people who registered themselves from the registration link; they are never sent an invitation email.",
            strTitle: "Invitation And Registration Status",
            children: [
              !s &&
                (0, t.jsx)(se.t, {
                  size: "medium",
                  position: "center",
                  string: (0, A.we)("#Loading"),
                }),
              s &&
                (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsxs)("div", {
                      children: [
                        "There are ",
                        i,
                        " invitation/registration records.",
                      ],
                    }),
                    d > 0 &&
                      (0, t.jsxs)(V.$n, {
                        onClick: async () => {
                          await Rn(a, n);
                        },
                        children: [
                          d,
                          " invitation emails are queued for this event. Send them all now?",
                        ],
                      }),
                    (0, t.jsxs)("table", {
                      children: [
                        (0, t.jsx)("thead", {
                          children: (0, t.jsxs)("tr", {
                            children: [
                              (0, t.jsx)("th", { children: "SteamID" }),
                              (0, t.jsx)("th", { children: "Name" }),
                              (0, t.jsx)("th", { children: "invited" }),
                              (0, t.jsx)("th", { children: "Invite Emailed" }),
                              (0, t.jsx)("th", { children: "Partner" }),
                              (0, t.jsx)("th", { children: "Email Override" }),
                            ],
                          }),
                        }),
                        (0, t.jsx)("tbody", {
                          children: s?.map((u) =>
                            (0, t.jsx)(On, { reg: u }, "regentry_" + u.steamid),
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
            ],
          });
        }
        function On(r) {
          const { reg: e } = r,
            [n] = (0, U.UA)(e.partner_id);
          return (0, t.jsxs)("tr", {
            children: [
              (0, t.jsx)("td", { children: e.steamid }),
              (0, t.jsx)("td", { children: e.name }),
              (0, t.jsx)("td", { children: e.invited ? "YES" : "" }),
              (0, t.jsx)("td", { children: e.invitation_emailed ? "YES" : "" }),
              (0, t.jsxs)("td", {
                children: [n?.name, " (", e.partner_id, ")"],
              }),
              (0, t.jsx)("td", { children: e.email_override }),
            ],
          });
        }
        function Nn(r) {
          const { hideModal: e, gid: n, title: s, group: a, session: i } = r,
            d = (0, be.a)(),
            u = Nt(n),
            h = Ke(d, n, a?.group_id),
            [g, p] = (0, v.useMemo)(() => {
              const w = h?.data?.filter((S) => S.session_id == i.id),
                z = new Map(),
                B = new Map();
              return (
                w?.forEach((S) => {
                  const q = new He.b2(S.steamid).GetAccountID();
                  if ((z.set(q, S), S.jsondata)) {
                    const Te = JSON.parse(S.jsondata);
                    Te.pre_event_partner_questions &&
                      B.set(q, Te.pre_event_partner_questions);
                  }
                }),
                [z, B]
              );
            }, [i, h]),
            y = u?.filter((w) => g.has(new He.b2(w.steamid).GetAccountID()));
          return (0, t.jsxs)(Se.o0, {
            bAlertDialog: !0,
            bAllowFullSize: !0,
            bDisableBackgroundDismiss: !0,
            closeModal: e,
            strDescription: "Show who is registered for this session",
            strTitle: "Session Registration",
            children: [
              (0, t.jsx)("div", {
                className: Ht().ExportToCSV,
                children: (0, t.jsx)("a", {
                  onClick: () => Wn(a, i, s, y, g, p),
                  children: "Export to CSV",
                }),
              }),
              (0, t.jsxs)("table", {
                className: Ht().Table,
                children: [
                  (0, t.jsx)("thead", {
                    children: (0, t.jsxs)("tr", {
                      children: [
                        (0, t.jsx)("th", { children: "SteamID" }),
                        (0, t.jsx)("th", { children: "Name" }),
                        (0, t.jsx)("th", { children: "Invited" }),
                        (0, t.jsx)("th", { children: "Partner" }),
                        (0, t.jsx)("th", { children: "Game" }),
                        (0, t.jsx)("th", { children: "Email Override" }),
                        (0, t.jsxs)("th", {
                          children: [
                            "Guest Count ",
                            (0, t.jsx)(Xe.o, {
                              tooltip:
                                "Additional guests, doesn't include main registrant",
                            }),
                          ],
                        }),
                        (0, t.jsx)("th", {
                          children: "Reg Confirm Email Sent",
                        }),
                        a.ask_registration_question &&
                          (0, t.jsx)("th", { children: "Answer" }),
                      ],
                    }),
                  }),
                  (0, t.jsx)("tbody", {
                    children: y?.flatMap((w) => {
                      const z = new He.b2(w.steamid).GetAccountID(),
                        B = [
                          (0, t.jsx)(
                            Un,
                            {
                              group: a,
                              regInfo: g.get(z),
                              inviteInfo: w,
                              preRegQuestions: p.get(z),
                            },
                            "regrow" + w.steamid,
                          ),
                        ];
                      for (let S = 0; S < w.guest_names?.length; S++)
                        B.push(
                          (0, t.jsx)(
                            kn,
                            { guestName: w.guest_names[S] },
                            "regguestrow" + w.steamid + "_" + S,
                          ),
                        );
                      return B;
                    }),
                  }),
                ],
              }),
            ],
          });
        }
        function Wn(r, e, n, s, a, i) {
          const d = [],
            u = [
              "SteamID",
              "Name",
              "Invited",
              "Partner",
              "Game",
              "Email Override",
              "Guest Count",
              "Reg Confirmation Email Sent",
            ];
          r.ask_registration_question && u.push("Pre Reg Answer"),
            d.push(u),
            s.forEach((g) => {
              const p = [],
                y = g.partner_id ? (0, U.Yd)(g.partner_id) : void 0;
              p.push("" + g.steamid),
                p.push(g.name),
                p.push(g.invited ? "YES" : ""),
                p.push(y ? `${y?.name} (${g.partner_id})` : ""),
                p.push(g.game ? `Game: ${g.game}` : ""),
                p.push(g.email_override),
                p.push(
                  "" + (g.guests_registered ? g.guests_registered - 1 : 0),
                );
              const w = new He.b2(g.steamid);
              if (a.has(w.GetAccountID())) {
                const z = a.get(w.GetAccountID()),
                  B = Yt(z, g);
                if (B) {
                  const S = new Date(B * 1e3)
                    .toISOString()
                    .replace("T", " ")
                    .split(".")[0];
                  p.push(S);
                } else p.push("");
              } else p.push("");
              if (r.ask_registration_question) {
                const z = i
                  .get(w.GetAccountID())
                  ?.find((B) => B.group_id == r.group_id);
                z && p.push(z.question);
              }
              d.push(p);
              for (let z = 0; z < g.guest_names?.length; z++) {
                const B = [];
                B.push("(guest)"), B.push(g.guest_names[z]), d.push(B);
              }
            });
          const h =
            `meetsteam_${n}_${(0, A.TW)(e.rtime_start)}_at_${(0, yt.KC)(e.rtime_start)}.csv`.replace(
              /[ <>:"/\\|?*\x00-\x1F]/g,
              "_",
            );
          Pe.g.WriteCSVToFile(d, h);
        }
        function Yt(r, e) {
          const n = `registration_emailed_${r.group_id}_${r.session_id}`;
          let s = null;
          return n in e && (s = e[n]), s;
        }
        function Un(r) {
          const { inviteInfo: e, regInfo: n, group: s, preRegQuestions: a } = r,
            [i] = (0, U.UA)(e.partner_id),
            d = Yt(n, e);
          return (0, t.jsxs)("tr", {
            children: [
              (0, t.jsx)("td", { children: e.steamid }),
              (0, t.jsx)("td", { children: e.name }),
              (0, t.jsx)("td", { children: e.invited ? "YES" : "" }),
              (0, t.jsx)("td", { children: i?.name ?? `(${e.partner_id})` }),
              (0, t.jsx)("td", { children: e.game ? `Game: ${e.game}` : "" }),
              (0, t.jsx)("td", { children: e.email_override }),
              (0, t.jsx)("td", {
                children: n.guests_registered ? n.guests_registered - 1 : 0,
              }),
              (0, t.jsx)("td", { children: d ? (0, A.TW)(d) : "" }),
              s.ask_registration_question &&
                (0, t.jsx)("td", {
                  children:
                    a?.find((u) => u.group_id == s.group_id)?.question || "",
                }),
            ],
          });
        }
        function kn(r) {
          const { guestName: e } = r;
          return (0, t.jsxs)("tr", {
            children: [
              (0, t.jsx)("td", { children: "(guest)" }),
              (0, t.jsx)("td", { children: e }),
            ],
          });
        }
        async function Rn(r, e) {
          let n = new FormData();
          n.append("sessionid", (0, N.KC)()), n.append("gid", e);
          const s = `${Ne.TS.PARTNER_BASE_URL}/meetsteam/ajaxsendinviteemails`;
          try {
            const a = await Y().post(s, n, { withCredentials: !0 });
            if (a?.data?.success != Z.R) {
              let i = (0, rt.H)(a);
              console.error("AsyncSendInviteEmails error: " + i.strErrorMsg, i);
            }
            return (
              r.invalidateQueries({
                queryKey: ["useMeetSteamAllRegistrationStatus", e],
              }),
              a?.data
            );
          } catch (a) {
            let i = (0, rt.H)(a);
            console.error("AsyncSendInviteEmails error: " + i.strErrorMsg, i);
          }
          return null;
        }
        var Qt = f(40299),
          tt = f(55298);
        async function $n(r) {
          const e = { sessionid: (0, W.KC)(), gids: r },
            n = `${Mt.TS.PARTNER_BASE_URL}meetsteam/admin/ajaxgetregistrations`,
            s = await fetch(n, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(e),
            });
          if (!s.ok)
            throw new Error(
              `Failed to read registrations for gids ${r.join(",")}`,
            );
          const a = await s.json();
          if (a.success != Z.R)
            throw new Error(
              `Failed to read registrations for gids ${r.join(",")}: ${a.msg}`,
            );
          return a.lists ?? [];
        }
        function Cn(r) {
          return (0, ee.I)({
            queryKey: [],
            queryFn: async () => await $n(r),
            enabled: r && r.length > 0,
          });
        }
        function cs(r) {
          return ["MeetSteamGetRegistration", ...(r || []).sort()];
        }
        function Kn(r) {
          const { rgEventGIDs: e } = r,
            [n, s, a] = (0, oe.uD)(),
            [i, d] = (0, v.useState)(null);
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)("span", { children: " | " }),
              (0, t.jsx)("a", {
                href: "#",
                onClick: (u) => {
                  u.preventDefault(), u.stopPropagation(), s();
                },
                children: "Show Registration Across Events",
              }),
              (0, t.jsx)(xe.E, {
                active: n,
                children: (0, t.jsx)(pe.tH, {
                  children: (0, t.jsx)(Se.o0, {
                    closeModal: a,
                    bAllowFullSize: !0,
                    bDisableBackgroundDismiss: !0,
                    children:
                      i == null
                        ? (0, t.jsx)(Vt, {
                            rgEventGIDs: e,
                            fnSelectedEvents: d,
                          })
                        : (0, t.jsxs)(t.Fragment, {
                            children: [
                              (0, t.jsx)(Hn, { rgGidMeetSteamEvents: i }),
                              (0, t.jsx)(V.$n, {
                                onClick: () => d(null),
                                children: "Reset Selection",
                              }),
                            ],
                          }),
                  }),
                }),
              }),
            ],
          });
        }
        function Vn(r) {
          const e = Wt(r),
            n = (0, tt.qh)(),
            { bIsLoading: s, events: a } = (0, de.PB)(r),
            { data: i } = Cn(r),
            [d, u, h] = (0, v.useMemo)(() => {
              if (
                s ||
                !i ||
                i.length == 0 ||
                e.filter((B) => !B.isLoading).length != e.length
              )
                return [null, null, null];
              const p = new Array(),
                y = new Set(),
                w = new Map();
              e.forEach((B) => {
                B.data.forEach((S) => {
                  S.guests_registered > 0 &&
                    (p.push(S), S.partner_id && y.add(S.partner_id));
                });
              });
              const z = new Map();
              return (
                a.forEach((B) => {
                  B.jsondata.meet_steam_groups?.forEach((S) => {
                    S.sessions?.forEach((q) => {
                      z.set(
                        `${B.GID}_${S.group_id}_${q.id}`,
                        `${S.localized_session_title[$.Bhc]}@${(0, yt.TW)(q.rtime_start)} ${(0, yt.KC)(q.rtime_start)}`,
                      );
                    });
                  });
                }),
                i.forEach((B) => {
                  B.rgRegistrations.forEach((S) => {
                    const Te = new R.b(S.steamid).GetAccountID(),
                      Qe =
                        z.get(`${B.gid}_${S.group_id}_${S.session_id}`) ||
                        `${S.group_id}:${S.session_id}`;
                    w.has(Te) ? w.set(Te, w.get(Te) + `,${Qe}`) : w.set(Te, Qe);
                  });
                }),
                [Array.from(y), p, w]
              );
            }, [e, s, i, a]);
          return (0, te.fI)(d)
            ? {
                rgAllRegistrations: u,
                rgPartnerIDs: d,
                rgValveAccounts: n,
                rgMapAccountToSessionTimes: h,
              }
            : {
                rgAllRegistrations: void 0,
                rgPartnerIDs: void 0,
                rgValveAccounts: void 0,
                rgMapAccountToSessionTimes: void 0,
              };
        }
        const Ce = (0, ht.FB)();
        function Hn(r) {
          const { rgGidMeetSteamEvents: e } = r,
            {
              rgAllRegistrations: n,
              rgPartnerIDs: s,
              rgValveAccounts: a,
              rgMapAccountToSessionTimes: i,
            } = Vn(e),
            d = (0, U.vh)(s),
            u = (0, v.useMemo)(() => {
              if (!d || !n || !a || !i) return null;
              const g = new Map();
              a.forEach((y) => g.set(y.id, y));
              const p = [];
              return (
                n.forEach((y) => {
                  const w = (0, U.Yd)(y.partner_id),
                    z = (0, te.Gl)(y.partner_id);
                  p.push({
                    partner_id: y.partner_id ? "" + y.partner_id : "",
                    partner_name: w?.name || "Unknown",
                    name: y.name,
                    game: y.game || "",
                    accountid: y.accountid,
                    email: y.email_override,
                    guest_registrated: y.guests_registered - 1,
                    guest_names:
                      y.guest_names?.length > 0 ? y.guest_names.join(",") : "",
                    business_contact:
                      z && z.length > 0
                        ? z
                            .filter((B) => B.is_business_contact)
                            .map((B) => {
                              const S = new R.b(B.steamid);
                              return (
                                g.get(S.GetAccountID())?.displayName ||
                                B.steamid
                              );
                            })
                            .join(",")
                        : "",
                    sessions: i.get(y.accountid) || "missing data",
                  });
                }),
                p
              );
            }, [d, n, a, i]),
            h = Jt();
          return !d || !s || !u
            ? (0, t.jsx)(se.t, { string: (0, A.we)("#Loading") })
            : (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsx)(V.JU, { children: "Registations" }),
                  u
                    ? (0, t.jsxs)(pe.tH, {
                        children: [
                          (0, t.jsx)(Zt, { rgData: u }),
                          (0, t.jsx)(gt.k, {
                            columns: h,
                            data: u,
                            getRowKey: (g) => g,
                            stickyHeader: !0,
                            nItemHeight: 28,
                            overscan: s.length,
                          }),
                          (0, t.jsx)("br", {}),
                          (0, t.jsx)(Zt, { rgData: u }),
                        ],
                      })
                    : (0, t.jsx)(se.t, {
                        string: (0, A.we)("#Loading"),
                        position: "center",
                      }),
                ],
              });
        }
        function Jt() {
          return (0, v.useMemo)(
            () => [
              Ce.accessor("name", { header: "Name", size: 200 }),
              Ce.accessor("accountid", { header: "Account ID", size: 150 }),
              Ce.accessor("email", { header: "Email", size: 150 }),
              Ce.accessor("guest_registrated", {
                header: "Guest Count",
                size: 100,
              }),
              Ce.accessor("guest_names", {
                header: "Guest's Names",
                size: 100,
              }),
              Ce.accessor("partner_id", { header: "Partner ID", size: 100 }),
              Ce.accessor("partner_name", {
                header: "Partner Name",
                size: 300,
              }),
              Ce.accessor("game", { header: "Game Name", size: 150 }),
              Ce.accessor("business_contact", {
                header: "Business Contact",
                size: 150,
              }),
              Ce.accessor("sessions", { header: "Sessions", size: 150 }),
            ],
            [],
          );
        }
        function Zt(r) {
          const { rgData: e } = r,
            n = Jt();
          return (0, t.jsx)(V.$n, {
            id: "download-csv",
            onClick: () =>
              (0, Qt.K)(
                "registrationdump.csv",
                e,
                n.map((s) => ({
                  accessorKey: s.accessorKey,
                  header:
                    typeof s.header == "string"
                      ? s.header
                      : (s.accessorKey ?? ""),
                })),
              ),
            style: { width: "120px" },
            children: "Download CSV",
          });
        }
        const Xt = v.createContext(void 0);
        function Yn(r) {
          const { children: e } = r,
            [n, s] = Tt("search", ""),
            [a, i] = (0, v.useState)(() => n || ""),
            d = (0, v.useCallback)(
              (h) => {
                i(h), s(h || void 0, !0);
              },
              [s],
            ),
            u = (0, v.useMemo)(() => ({ strSearch: a, setSearch: d }), [a, d]);
          return (0, t.jsx)(Xt.Provider, { value: u, children: e });
        }
        const Pt = () => {
          const r = (0, v.useContext)(Xt);
          if (!r)
            throw new Error(
              "useMeetSteamSearch must be used within MeetSteamSearchProvider",
            );
          return r;
        };
        function Qn(r, e) {
          const n = e?.trim().toLowerCase();
          return n ? !!r && r.toLowerCase().includes(n) : !0;
        }
        function Jn(r, e) {
          const n = e?.trim().toLowerCase();
          if (!r || !n) return [{ strText: r || "", bMatch: !1 }];
          const s = new Array(),
            a = r.toLowerCase();
          let i = 0;
          for (let d = a.indexOf(n); d >= 0; d = a.indexOf(n, i))
            d > i && s.push({ strText: r.slice(i, d), bMatch: !1 }),
              s.push({ strText: r.slice(d, d + n.length), bMatch: !0 }),
              (i = d + n.length);
          return i < r.length && s.push({ strText: r.slice(i), bMatch: !1 }), s;
        }
        function wt(r) {
          const { text: e } = r,
            { strSearch: n } = Pt(),
            s = (0, v.useMemo)(() => Jn(e, n), [e, n]);
          return (0, t.jsx)(t.Fragment, {
            children: s.map((a, i) =>
              a.bMatch
                ? (0, t.jsx)(
                    "span",
                    { className: De().SearchMatch, children: a.strText },
                    i,
                  )
                : (0, t.jsx)(v.Fragment, { children: a.strText }, i),
            ),
          });
        }
        function Zn(r) {
          const e = R.b.InitFromClanID((0, Ze.H)()),
            n = ir(),
            { bShowArchived: s, setShowArchived: a } = Ft(),
            { strSearch: i, setSearch: d } = Pt(),
            { bIsLoading: u, events: h } = (0, de.PB)(n),
            {
              rgEventsByMonth: g,
              cEvents: p,
              cMatchingEvents: y,
            } = v.useMemo(() => {
              if (!h)
                return {
                  rgEventsByMonth: null,
                  cEvents: 0,
                  cMatchingEvents: 0,
                };
              const w =
                  s && h
                    ? [...h]
                    : h?.filter((S) => S.endTime >= new Date().getTime() / 1e3),
                z = w.filter((S) => Xn(S, i)),
                B = Array.from(
                  (0, It.bv)(z, (S) => (0, It.J2)(new Date(S.startTime * 1e3))),
                );
              return (
                B?.sort((S) => -S[0]),
                {
                  rgEventsByMonth: B,
                  cEvents: w.length,
                  cMatchingEvents: z.length,
                }
              );
            }, [h, s, i]);
          return u
            ? (0, t.jsx)(se.t, {})
            : g
              ? (0, t.jsxs)("div", {
                  children: [
                    (0, t.jsxs)("div", {
                      children: [
                        (0, t.jsx)("a", {
                          href: `${Ne.TS.COMMUNITY_BASE_URL}gid/${e.ConvertTo64BitString()}/partnerevents/`,
                          children: "Open Meet Steam Event Dashboard",
                        }),
                        (0, t.jsx)(An, { rgEventGIDs: n }),
                        (0, t.jsx)(Kn, { rgEventGIDs: n }),
                      ],
                    }),
                    (0, t.jsx)(V.Yh, {
                      checked: s,
                      onChange: a,
                      label: "Show Past Events",
                    }),
                    (0, t.jsxs)("div", {
                      className: De().SearchLine,
                      children: [
                        (0, t.jsx)(V.pd, {
                          type: "text",
                          placeholder: "Search events",
                          tooltip:
                            "In-memory search of the event id, title and description, and of the session group titles, descriptions and intended audience",
                          value: i,
                          onChange: (w) => d(w?.currentTarget?.value || ""),
                        }),
                        !!i.trim() &&
                          (0, t.jsxs)("div", {
                            className: De().SearchSummary,
                            children: [
                              "Showing ",
                              y,
                              " of ",
                              p,
                              " events \xA0",
                              (0, t.jsx)("a", {
                                href: "#",
                                onClick: (w) => {
                                  w.preventDefault(), d("");
                                },
                                children: "Clear",
                              }),
                            ],
                          }),
                      ],
                    }),
                    (0, t.jsx)("hr", {}),
                    g.map((w) =>
                      (0, t.jsx)(
                        Pn,
                        { month: new Date(w[0] * 1e3), events: w[1] },
                        w[0],
                      ),
                    ),
                  ],
                })
              : null;
        }
        function Xn(r, e) {
          if (!e?.trim()) return !0;
          const n = [
            r.GID,
            r.GetNameWithFallback($.Bhc),
            r.GetDescriptionWithFallback($.Bhc),
          ];
          return (
            r.jsondata.meet_steam_groups?.forEach((s) => {
              n.push(A.NT.GetWithFallback(s.localized_session_title, $.Bhc)),
                n.push(
                  A.NT.GetWithFallback(s.localized_session_description, $.Bhc),
                ),
                n.push(
                  A.NT.GetWithFallback(s.localized_intended_audience, $.Bhc),
                ),
                n.push(A.NT.GetWithFallback(s.localized_sesssion_faq, $.Bhc));
            }),
            n.some((s) => Qn(s, e))
          );
        }
        function Pn(r) {
          const { month: e, events: n } = r,
            s = v.useMemo(() => [...n].sort((d) => -d.startTime), [n]),
            a = { year: "numeric", month: "long" },
            i = new Intl.DateTimeFormat(navigator.language, a).format(e);
          return (0, t.jsxs)("div", {
            children: [
              (0, t.jsx)("div", { className: De().MonthTitle, children: i }),
              (0, t.jsx)("div", {
                className: De().MonthEvents,
                children: s.map((d) => (0, t.jsx)(Gn, { oEvent: d }, d.GID)),
              }),
            ],
          });
        }
        function Gn(r) {
          const { oEvent: e } = r,
            n = e.GID,
            s = R.b.InitFromClanID((0, Ze.H)()),
            a = (0, we.my)((0, Ze.H)(), n),
            i = a.isSuccess ? a.data : null,
            d = e.GetNameWithFallback($.Bhc),
            u = (0, v.useMemo)(() => {
              const h = new Array();
              return (
                e.jsondata.meet_steam_groups?.forEach((g) => {
                  g.sessions.forEach((p, y) => {
                    h.push({ group: g, session: p, firstSession: y == 0 });
                  });
                }),
                h
              );
            }, [e.jsondata.meet_steam_groups]);
          return (0, t.jsxs)("div", {
            className: De().EventRow,
            children: [
              (0, t.jsxs)("div", {
                className: De().EventMainDetails,
                children: [
                  (0, t.jsxs)("div", {
                    className: De().TitleLine,
                    children: [
                      (0, t.jsx)("div", {
                        className: De().Title,
                        children: (0, t.jsx)(wt, { text: d }),
                      }),
                      (0, t.jsx)("div", {
                        className: De().StartDate,
                        children: (0, A.TW)(e?.startTime),
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: De().ActionLine,
                    children: [
                      (0, t.jsx)("div", {
                        children: (0, t.jsx)("a", {
                          href: `${Ne.TS.COMMUNITY_BASE_URL}gid/${s.ConvertTo64BitString()}/partnerevents/edit/${n}`,
                          children: "Edit",
                        }),
                      }),
                      (0, t.jsxs)("div", {
                        children: [
                          "\xA0|\xA0",
                          (0, t.jsx)("a", {
                            href: `${Ne.TS.STORE_BASE_URL}meetsteam/${n}`,
                            children: "View",
                          }),
                        ],
                      }),
                      !!(
                        e.BIsUnlistedEvent() &&
                        e.jsondata.meet_steam_groups?.length > 0
                      ) &&
                        (0, t.jsxs)(t.Fragment, {
                          children: [
                            (0, t.jsx)(nr, { gid: n }),
                            "\xA0|\xA0",
                            (0, t.jsx)("a", {
                              href: `${Ne.TS.STORE_BASE_URL}meetsteam/attendance?gid=${n}&accountid=${Ne.iA.accountid}`,
                              children: "QR Page",
                            }),
                            "\xA0|\xA0",
                            (0, t.jsx)("a", {
                              href: `${Ne.TS.STORE_BASE_URL}meetsteam/attendeelist?gid=${n}`,
                              children: "Attendance List",
                            }),
                            (0, t.jsx)(qn, { gid: n }),
                            (0, t.jsx)(er, { gid: n }),
                            (0, t.jsx)(_n, { gid: n }),
                            (0, t.jsx)(tr, { gid: n }),
                          ],
                        }),
                    ],
                  }),
                ],
              }),
              (0, t.jsx)("div", {
                children: (0, t.jsxs)("table", {
                  className: "landingTable",
                  children: [
                    (0, t.jsx)("thead", {
                      children: (0, t.jsxs)("tr", {
                        children: [
                          (0, t.jsx)("th", { children: "Group" }),
                          (0, t.jsx)("th", { children: "Session Start" }),
                          (0, t.jsx)("th", { children: "Session Duration" }),
                          (0, t.jsx)("th", { children: "Seats" }),
                          (0, t.jsx)("th", {
                            style: { width: "50px" },
                            children: "Registered",
                          }),
                          (0, t.jsx)("th", {
                            style: { width: "50px" },
                            children: "Guests",
                          }),
                          (0, t.jsx)("th", {
                            style: { width: "100px" },
                            children: "Details",
                          }),
                        ],
                      }),
                    }),
                    (0, t.jsxs)("tbody", {
                      children: [
                        (0, t.jsxs)("tr", {
                          children: [
                            u.length > 0
                              ? (0, t.jsx)(
                                  Gt,
                                  {
                                    gid: n,
                                    group: u[0].group,
                                    session: u[0].session,
                                    rgAvailability: i,
                                  },
                                  u[0].session.id,
                                )
                              : (0, t.jsxs)(t.Fragment, {
                                  children: [
                                    (0, t.jsx)("td", { children: "None" }),
                                    (0, t.jsx)("td", {}),
                                    (0, t.jsx)("td", {}),
                                    (0, t.jsx)("td", {}),
                                    (0, t.jsx)("td", {}),
                                    (0, t.jsx)("td", {}),
                                  ],
                                }),
                            (0, t.jsx)("td", {
                              children:
                                !(
                                  e?.BIsUnlistedEvent() &&
                                  e.jsondata.meet_steam_groups?.length > 0
                                ) &&
                                (0, t.jsx)("div", {
                                  children:
                                    "Invite Disabled. Event need to publish into Unlisted State",
                                }),
                            }),
                          ],
                        }),
                        u
                          .filter((h, g) => g > 0)
                          .map((h) =>
                            (0, t.jsx)(
                              "tr",
                              {
                                children: (0, t.jsx)(Gt, {
                                  group: h.group,
                                  gid: n,
                                  session: h.session,
                                  rgAvailability: i,
                                  firstSession: h.firstSession,
                                }),
                              },
                              h.session.id,
                            ),
                          ),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          });
        }
        function qn(r) {
          const { gid: e } = r,
            n = At();
          return Array.from(n.keys()).includes(e)
            ? (0, t.jsxs)(t.Fragment, {
                children: [
                  "\xA0|\xA0",
                  (0, t.jsx)("a", {
                    href: `${Ne.TS.PARTNER_BASE_URL}meetsteam/survey/${e}`,
                    children: "Survey",
                  }),
                ],
              })
            : null;
        }
        function _n(r) {
          const { gid: e } = r,
            [n, s, a] = (0, oe.uD)();
          return (0, t.jsxs)("div", {
            children: [
              "\xA0|\xA0",
              (0, t.jsxs)("a", {
                href: "#",
                onClick: (i) => {
                  i.preventDefault(), i.stopPropagation(), s();
                },
                children: [
                  "Invite via CSV",
                  (0, t.jsx)(Xe.o, {
                    tooltip:
                      "This will email invitee and show the users on the dashboard (if not already invited).  We need csv with accountid,partnerid,email_override (optional)",
                  }),
                ],
              }),
              (0, t.jsx)(pe.tH, {
                children: (0, t.jsx)(xe.E, {
                  active: n,
                  children: (0, t.jsx)(yn, { hideModal: a, gid: e }),
                }),
              }),
            ],
          });
        }
        function er(r) {
          const { gid: e } = r,
            [n, s, a] = (0, oe.uD)();
          return (0, t.jsxs)("div", {
            children: [
              "\xA0|\xA0",
              (0, t.jsx)("a", {
                href: "#",
                onClick: (i) => {
                  i.preventDefault(), i.stopPropagation(), s();
                },
                children: "Invite",
              }),
              (0, t.jsx)(pe.tH, {
                children: (0, t.jsx)(xe.E, {
                  active: n,
                  children: (0, t.jsx)(vn, { hideModal: a, gid: e }),
                }),
              }),
            ],
          });
        }
        function tr(r) {
          const { gid: e } = r,
            [n, s, a] = (0, oe.uD)();
          return (0, t.jsxs)("div", {
            children: [
              "\xA0|\xA0",
              (0, t.jsx)("a", {
                href: "#",
                onClick: (i) => {
                  i.preventDefault(), i.stopPropagation(), s();
                },
                children: "Show Invites",
              }),
              (0, t.jsx)(pe.tH, {
                children: (0, t.jsx)(xe.E, {
                  active: n,
                  children: (0, t.jsx)(zn, { hideModal: a, gid: e }),
                }),
              }),
            ],
          });
        }
        function nr(r) {
          const { gid: e } = r,
            n = (0, be.a)(),
            [s, a] = (0, v.useState)(!1),
            [i, d] = (0, v.useState)(null);
          return (0, t.jsxs)("div", {
            children: [
              (0, t.jsx)("a", {
                href: "#",
                onClick: async (u) => {
                  u.preventDefault(), u.stopPropagation(), a(!0);
                  const h = await rr(n, e);
                  d(h);
                },
                children: "Email Self",
              }),
              (0, t.jsx)(xe.E, {
                active: s,
                children: (0, t.jsxs)(Se.o0, {
                  bAlertDialog: !0,
                  strTitle: "Test Emails",
                  closeModal: () => {
                    a(!1), d(null);
                  },
                  onOK: () => {},
                  children: [
                    (0, t.jsx)("div", {
                      children:
                        "This will temporarily register and then de-register you from the event as a way to test the email sending code.",
                    }),
                    i == null &&
                      (0, t.jsx)(se.t, { string: (0, A.we)("#Loading") }),
                    i == Z.R &&
                      (0, t.jsx)("div", { children: "Test Emails Sent" }),
                    !!(i && i != Z.R) &&
                      (0, t.jsx)("div", {
                        children: "Email Failed to Send. Check console",
                      }),
                  ],
                }),
              }),
            ],
          });
        }
        async function rr(r, e) {
          const n = ie.w.Init(X),
            s = R.b.InitFromClanID((0, Ze.H)());
          n.Body().set_clan_event_gid(e),
            n.Body().set_steamid(s.ConvertTo64BitString());
          const a = await E.TestFireEmails(r, n);
          return console.log("test fire", a), a.GetEResult();
        }
        function sr(r, e) {
          const n = Fe().unix(r),
            s = Fe().unix(r).tz(e),
            a = s.utcOffset() - n.utcOffset(),
            i = new Date((r + a * 60) * 1e3),
            d = new Date(),
            u =
              i.getFullYear() == d.getFullYear()
                ? (0, ct.$w)(i, !1, !1)
                : (0, ct._9)(i, !1, !1),
            h = (0, ct.KC)(r + a * 60);
          return `${u} ${h} ${s.format("z")}`;
        }
        function Gt(r) {
          const {
              gid: e,
              group: n,
              rgAvailability: s,
              session: a,
              firstSession: i = !0,
            } = r,
            d = A.NT.GetWithFallback(n?.localized_session_title, $.Bhc),
            u = A.NT.GetWithFallback(n?.localized_session_description, $.Bhc),
            h = A.NT.GetWithFallback(n?.localized_intended_audience, $.Bhc),
            g = s?.find(
              (Me) => Me.group_id == n.group_id && Me.session_id == a.id,
            ),
            [p, y, w] = (0, oe.uD)(),
            z = (0, be.a)(),
            B = Ke(z, e, n?.group_id);
          let S = Math.min((g?.guest_count / a.max_capacity) * 100, 100),
            q = g?.guest_count > 0 ? `${S}%` : "0%",
            Te = g?.guest_count >= a.max_capacity;
          const Qe = Intl.DateTimeFormat().resolvedOptions().timeZone,
            qe =
              a.location_type === "in_person"
                ? (a.in_person_time_zone ?? we.hh)
                : Qe;
          return (0, t.jsxs)(t.Fragment, {
            children: [
              i && n
                ? (0, t.jsxs)("td", {
                    children: [
                      (0, t.jsx)(wt, { text: d }),
                      (0, t.jsx)(Xe.o, { tooltip: u }),
                      !!h &&
                        (0, t.jsx)("div", {
                          children: (0, t.jsx)(wt, { text: h }),
                        }),
                    ],
                  })
                : (0, t.jsx)("td", {}),
              (0, t.jsx)("td", {
                children: (0, t.jsx)("span", {
                  children: sr(a.rtime_start, qe),
                }),
              }),
              (0, t.jsx)("td", {
                children: (0, ct.IH)(a.rtime_end - a.rtime_start),
              }),
              (0, t.jsxs)("td", {
                children: [
                  g?.guest_count || 0,
                  " / ",
                  a.max_capacity,
                  (0, t.jsx)("br", {}),
                  (0, t.jsx)("div", {
                    className: De().CapacityBarMax,
                    children: (0, t.jsx)("div", {
                      className: (0, et.A)(
                        De().CapacityBarCurrent,
                        Te ? De().Full : "",
                      ),
                      style: { width: q },
                    }),
                  }),
                ],
              }),
              (0, t.jsx)("td", {
                children:
                  B.isSuccess &&
                  (0, t.jsx)(t.Fragment, {
                    children: B.data?.filter((Me) => Me.session_id == a.id)
                      .length,
                  }),
              }),
              (0, t.jsx)("td", {
                children:
                  B.isSuccess &&
                  (0, t.jsx)(t.Fragment, {
                    children: B.data
                      ?.filter((Me) => Me.session_id == a.id)
                      .reduce((Me, Ie) => Me + Ie.guests_registered - 1, 0),
                  }),
              }),
              (0, t.jsxs)("td", {
                children: [
                  (0, t.jsx)(V.$n, { onClick: y, children: "Details" }),
                  (0, t.jsx)(pe.tH, {
                    children: (0, t.jsx)(xe.E, {
                      active: p,
                      children: (0, t.jsx)(Nn, {
                        gid: e,
                        title: d,
                        group: n,
                        session: a,
                        hideModal: w,
                      }),
                    }),
                  }),
                ],
              }),
            ],
          });
        }
        function ir() {
          const [r] = (0, v.useState)(() =>
            (0, W.Tc)("event_gids", "application_config"),
          );
          return r;
        }
        var ar = f(29522),
          or = f(40358),
          Ye = f(62092),
          cr = f(10142),
          lr = f(24237),
          bt = f(12932);
        function dr(r) {
          const { rgEvents: e } = J(),
            n = pr(),
            [s, a] = (0, v.useState)(""),
            i = N.TS.PARTNER_BASE_URL + "meetsteam",
            d = (0, v.useMemo)(() => {
              const u = new Map();
              return (
                n.forEach((h) => {
                  h.results?.attending?.forEach((g) => {
                    u.has(g) ? u.set(g, u.get(g) + 1) : u.set(g, 1);
                  });
                }),
                u
              );
            }, [n]);
          return (0, t.jsxs)("div", {
            className: De().EventList,
            children: [
              (0, t.jsx)(V.pd, {
                type: "text",
                value: s,
                onChange: (u) => a(u.currentTarget.value.trim()),
                label: "Filter",
              }),
              (0, t.jsxs)("div", {
                children: [
                  "Total Survey Responses: ",
                  (0, it.D)(n?.length || 0),
                ],
              }),
              (0, t.jsxs)("div", {
                children: [
                  "Link to partner-facing survey: ",
                  (0, t.jsx)("a", { href: i, children: i }),
                ],
              }),
              e
                .filter(
                  (u) =>
                    s.length == 0 || u.name.includes(s) || u.id.includes(s),
                )
                .map((u) =>
                  (0, t.jsx)(
                    ur,
                    {
                      conf: u,
                      nInterestCount: d.get(u.id) ?? 0,
                      rgSurveyInterest: n,
                    },
                    u.id,
                  ),
                ),
              (0, t.jsx)(vr, { rgSurveyInterest: n }),
            ],
          });
        }
        function ur(r) {
          const { conf: e, nInterestCount: n, rgSurveyInterest: s } = r;
          return (0, t.jsx)(bt.qx, {
            title: `${e.name} in ${e.place} around ${e.time}: Interest: ${(0, it.D)(n)}`,
            bStartMinimized: !0,
            children: (0, t.jsx)(hr, { conf: e, rgSurveyInterest: s }),
          });
        }
        function qt(r) {
          if (typeof r == "number") return r;
          const e = r.slice(-1).toUpperCase(),
            n = parseFloat(r.slice(0, -1));
          switch (e) {
            case "K":
              return n * 1e3;
            case "M":
              return n * 1e6;
            case "B":
              return n * 1e9;
            default:
              return parseFloat(r);
          }
        }
        function hr(r) {
          const { conf: e, rgSurveyInterest: n } = r,
            s = (0, v.useMemo)(
              () => n.filter((u) => u.results?.attending?.includes(e.id)),
              [e, n],
            ),
            a = (0, tt.qh)(),
            { bComplete: i, nCount: d } = Je(s);
          return i
            ? a?.length
              ? !s || s.length == 0
                ? (0, t.jsx)("div", { children: "No users with interest" })
                : (0, t.jsx)(gr, { conf: e, rgSurveyInterest: s })
              : (0, t.jsx)(se.t, {
                  position: "center",
                  string:
                    "Loading Valve Account info (this shouldn't take long)",
                })
            : (0, t.jsx)(se.t, {
                position: "center",
                string: `Loading ${d} of ${s.length}`,
              });
        }
        function gr(r) {
          const { conf: e, rgSurveyInterest: n } = r,
            s = (0, ue.jE)();
          return (0, t.jsxs)("div", {
            children: [
              (0, t.jsx)(V.$n, {
                onClick: () => {
                  const a = [];
                  a.push([
                    "AccountID",
                    "Partner ID",
                    "Valve Partner Contacts",
                    "Email Override",
                    "Account Name",
                    "Name",
                    "Have you met steam",
                    "Survey Time",
                    "Attending Other Event Count",
                    "Country",
                    "Alt Language",
                    "Partner Name",
                    "Gross USD",
                    "Best AppID",
                    "Best AppID Name",
                    "Long Term Sales Rank",
                  ]),
                    n.forEach((d) => {
                      const u = [],
                        h = new He.b2(d.steamid);
                      u.push("" + h.GetAccountID());
                      const g = (0, Ye.z0)(h.GetAccountID()),
                        p = d.results.partner_id;
                      u.push("" + p);
                      const y = (0, te.N6)(p).map(
                        (q) => (0, tt.YA)(s, q)?.displayName || "" + q,
                      );
                      u.push(y.join("|"));
                      const w = d.results.email_override || "";
                      u.push("" + w),
                        u.push(g?.m_strPlayerName ? g.m_strPlayerName : "");
                      const z = vt(h.GetAccountID(), p);
                      if (
                        (u.push(z ? z.realname : ""),
                        u.push(d.results.have_you_met_steam ? "yes" : "no"),
                        d.results.submit_time)
                      ) {
                        const q = d.results.submit_time,
                          Te = new Date(q * 1e3)
                            .toISOString()
                            .replace("T", " ")
                            .split(".")[0];
                        u.push(Te);
                      } else u.push("");
                      u.push("" + d.results.attending?.length),
                        u.push(d.results.country_code),
                        u.push(
                          d.results.preferred_language
                            ? (0, $.LgB)(d.results.preferred_language)
                            : "",
                        );
                      const B = (0, U.Yd)(p);
                      u.push(B ? B.name : "");
                      const S = ge(s, p);
                      S
                        ? (u.push("" + qt(S.strGrossUSD)),
                          u.push("" + S.nBestAppID),
                          u.push(cr.A.Get().GetApp(S.nBestAppID)?.GetName()),
                          u.push("" + S.nBestAppLongTermSalesRank))
                        : (u.push(""), u.push(""), u.push(""), u.push("")),
                        a.push(u);
                    });
                  const i =
                    e.name.replace(" ", "_") + "_conference_interest.csv";
                  Pe.g.WriteCSVToFile(a, i);
                },
                children: "Export to CSV",
              }),
              (0, t.jsxs)("table", {
                className: "landingTable",
                children: [
                  (0, t.jsx)("thead", {
                    children: (0, t.jsxs)("tr", {
                      children: [
                        (0, t.jsx)("th", { children: "Name and Email" }),
                        (0, t.jsx)("th", { children: "Have you met steam?" }),
                        (0, t.jsx)("th", { children: "Partner" }),
                        (0, t.jsx)("th", { children: "Valve Contacts" }),
                        (0, t.jsx)("th", { children: "Partner Revenue" }),
                        (0, t.jsx)("th", { children: "Biggest Game" }),
                        (0, t.jsx)("th", { children: "Long Term Sales Rank" }),
                        (0, t.jsx)("th", { children: "Attending count?" }),
                        (0, t.jsx)("th", { children: "Alt Language" }),
                        (0, t.jsx)("th", { children: "Country" }),
                        (0, t.jsx)("th", { children: "Submit Survey Time" }),
                      ],
                    }),
                  }),
                  (0, t.jsx)("tbody", {
                    children: n.map((a) =>
                      (0, t.jsx)(
                        mr,
                        {
                          strsteamid: a.steamid,
                          partnerID: a.results.partner_id,
                          registration: a.results,
                        },
                        e.id + "_" + a.steamid,
                      ),
                    ),
                  }),
                ],
              }),
            ],
          });
        }
        function mr(r) {
          const { partnerID: e, registration: n } = r;
          return (0, t.jsxs)("tr", {
            children: [
              (0, t.jsx)("td", { children: (0, t.jsx)(_t, { ...r }) }),
              (0, t.jsx)("td", { children: n.have_you_met_steam ? "" : "NO" }),
              (0, t.jsx)(en, { nPartnerID: e }),
              (0, t.jsx)("td", { children: n.attending.length }),
              (0, t.jsx)("td", {
                children:
                  n.english_not_good && n.preferred_language
                    ? (0, $.LgB)(n.preferred_language)
                    : "",
              }),
              (0, t.jsx)("td", { children: n.country_code }),
              (0, t.jsx)("td", { children: (0, A.TW)(n.submit_time) }),
            ],
          });
        }
        function _t(r) {
          const { strsteamid: e, partnerID: n, registration: s } = r,
            a = (0, Ye.hW)(e),
            i = new He.b2(e),
            d = Rt(i.GetAccountID(), n),
            u = d?.realname || a.data?.m_strPlayerName;
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)("span", { children: u }),
              (0, t.jsx)("br", {}),
              (0, t.jsx)("span", { children: s.email_override || d?.email }),
            ],
          });
        }
        function en(r) {
          const { nPartnerID: e } = r,
            [n] = (0, U.UA)(e),
            s = le(e),
            a = (0, te.Z4)(e),
            i = (0, ue.jE)();
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)("td", { children: n ? n?.name + ` (${e})` : e }),
              (0, t.jsx)("td", {
                children: a
                  ?.map((d) => (0, tt.YA)(i, d)?.displayName || "" + d)
                  .join(","),
              }),
              (0, t.jsxs)("td", { children: ["$", s?.strGrossUSD] }),
              (0, t.jsx)("td", {
                children:
                  s?.nBestAppID > 0
                    ? (0, t.jsx)(fr, { appid: s?.nBestAppID })
                    : "N/A",
              }),
              (0, t.jsx)("td", { children: s?.nBestAppLongTermSalesRank }),
            ],
          });
        }
        const ls = {};
        function fr(r) {
          const { appid: e } = r,
            n = (0, ar.$5)(e),
            { data: s } = (0, or.J$)(n);
          return (0, t.jsx)(lr.Q, {
            id: n,
            children: (0, t.jsx)("span", { children: s?.name || e }),
          });
        }
        function pr() {
          const [r] = (0, v.useState)(() =>
            (0, W.Tc)("interest_results", "application_config"),
          );
          return (0, v.useMemo)(
            () => r.map((e) => ((e.results = JSON.parse(e.jsondata)), e)),
            [r],
          );
        }
        function vr(r) {
          const { rgSurveyInterest: e } = r,
            n = (0, ue.jE)(),
            s = (0, tt.qh)(),
            a = (0, v.useMemo)(
              () => e.filter((i) => i.results?.suggestion?.trim().length > 0),
              [e],
            );
          return (0, t.jsxs)(bt.qx, {
            title: `Alternative Suggestions (${a.length})`,
            bStartMinimized: !0,
            children: [
              (0, t.jsx)(V.$n, {
                onClick: () => {
                  const i = [];
                  i.push([
                    "AccountID",
                    "Partner ID",
                    "Email Override",
                    "Account Name",
                    "name",
                    "Attending Other Event Count",
                    "Country",
                    "Alt Language",
                    "Partner Name",
                    "Gross USD",
                    "Best AppID",
                    "Long Term Sales Rank",
                    "Suggestion",
                  ]),
                    a.forEach((u) => {
                      const h = [],
                        g = new He.b2(u.steamid);
                      h.push("" + g.GetAccountID());
                      const p = (0, Ye.z0)(g.GetAccountID()),
                        y = u.results.partner_id;
                      h.push("" + y);
                      const w = u.results.email_override || "";
                      h.push("" + w),
                        h.push(p?.m_strPlayerName ? p.m_strPlayerName : "");
                      const z = vt(g.GetAccountID(), y);
                      h.push(z ? z.realname : ""),
                        h.push("" + u.results.attending?.length),
                        h.push(u.results.country_code),
                        h.push(
                          u.results.preferred_language
                            ? (0, $.LgB)(u.results.preferred_language)
                            : "",
                        );
                      const B = (0, U.Yd)(y);
                      h.push(B ? B.name : "");
                      const S = ge(n, y);
                      S
                        ? (h.push("" + qt(S.strGrossUSD)),
                          h.push("" + S.nBestAppID),
                          h.push("" + S.nBestAppLongTermSalesRank))
                        : (h.push(""), h.push(""), h.push("")),
                        h.push(u.results.suggestion),
                        i.push(h);
                    }),
                    Pe.g.WriteCSVToFile(i, "suggestsion.csv");
                },
                children:
                  "Export to CSV (wait until the table populates fully)",
              }),
              (0, t.jsxs)("table", {
                className: "landingTable",
                children: [
                  (0, t.jsx)("thead", {
                    children: (0, t.jsxs)("tr", {
                      children: [
                        (0, t.jsx)("th", { children: "Name and Email" }),
                        (0, t.jsx)("th", { children: "Partner" }),
                        (0, t.jsx)("th", { children: "Valve Contacts" }),
                        (0, t.jsx)("th", { children: "Partner Revenue" }),
                        (0, t.jsx)("th", { children: "Biggest Game" }),
                        (0, t.jsx)("th", { children: "Long Term Sales Rank" }),
                        (0, t.jsx)("th", { children: "Suggestions" }),
                      ],
                    }),
                  }),
                  (0, t.jsx)("tbody", {
                    children: a.map((i) =>
                      (0, t.jsx)(xr, { survey: i }, "suggested" + i.steamid),
                    ),
                  }),
                ],
              }),
            ],
          });
        }
        function xr(r) {
          const { survey: e } = r,
            n = new He.b2(e.steamid);
          return (0, t.jsxs)("tr", {
            children: [
              (0, t.jsx)("td", {
                children: (0, t.jsx)(_t, {
                  strsteamid: e.steamid,
                  partnerID: e.results.partner_id,
                  registration: e.results,
                }),
              }),
              (0, t.jsx)(en, { nPartnerID: e.results.partner_id }),
              (0, t.jsx)("td", { children: e.results.suggestion.trim() }),
            ],
          });
        }
        function jr(r) {
          const e = v.useContext(Bt);
          return (0, ee.I)(tn(e, r));
        }
        function ds(r) {
          const e = React.useContext(Bt);
          return useQueries({ queries: r.map((n) => tn(e, n)) });
        }
        function yr(r) {
          return kt.L.getQueryData(["UserEmailAndLangs", r]);
        }
        function us(r) {
          const { loadUserEmailAndLangs: e, children: n } = r,
            s = React.useMemo(() => ({ loadUserEmailAndLangs: e }), [e]);
          return React.createElement(Bt.Provider, { value: s }, n);
        }
        const Bt = v.createContext({
          loadUserEmailAndLangs: async (r) => await wr().load(r),
        });
        function tn(r, e) {
          return {
            queryKey: ["UserEmailAndLangs", e],
            queryFn: () => r.loadUserEmailAndLangs(e),
            enabled: !!e,
          };
        }
        let St;
        function wr() {
          return (
            St ||
              (St = new (mt())(
                async (r) => {
                  const e = `${N.TS.PARTNER_BASE_URL}meetsteam/ajaxbatchgetuseremails`,
                    n = { sessionid: (0, N.KC)(), strAccountIDs: r.join(",") },
                    s = await Y().get(e, { params: n, withCredentials: !0 });
                  if (!s || s?.status != 200 || s?.data?.success != Z.R)
                    throw `Failed to load app to user email and langs: ${((0, rt.H))(s).strErrorMsg}`;
                  const a = new Map();
                  return (
                    s.data.users.forEach((i) => {
                      const d = new R.b(i.steamid);
                      a.set(d.GetAccountID(), i);
                    }),
                    r.map((i) => a.get(i) ?? null)
                  );
                },
                { maxBatchSize: 100 },
              )),
            St
          );
        }
        var br = f(54963),
          Br = f(84346);
        function Sr(r) {
          const e = (0, be.a)(),
            n = (0, tt.qh)(),
            s = Oe(e),
            a = (0, v.useMemo)(() => {
              if (!s || !n) return null;
              const i = new Set(n.map((d) => d.id));
              return s
                .filter((d) => !i.has(d.accountid))
                .sort(
                  (d, u) =>
                    u.clan_event_gids?.length - d.clan_event_gids.length,
                );
            }, [s, n]);
          return a
            ? (0, t.jsxs)("div", {
                children: [
                  (0, t.jsxs)(V.$n, {
                    onClick: () => {
                      const i = [];
                      i.push([
                        "User Name",
                        "account id",
                        "Email",
                        "Event Count",
                      ]),
                        a.forEach((u) => {
                          const h = (0, Ye.z0)(u.accountid),
                            g = yr(u.accountid);
                          i.push([
                            h?.m_strPlayerName || "",
                            "" + u.accountid,
                            g?.email_address || "",
                            u.clan_event_gids?.length.toLocaleString(
                              (0, Br.J)(),
                            ),
                          ]);
                        }),
                        Pe.g.WriteCSVToFile(i, "sale_operators.csv");
                    },
                    children: [
                      "CSV Export",
                      (0, t.jsx)(Xe.o, {
                        tooltip:
                          "Wait until the page finishes loading before export",
                      }),
                    ],
                  }),
                  (0, t.jsxs)("table", {
                    children: [
                      (0, t.jsx)("thead", {
                        children: (0, t.jsxs)("tr", {
                          children: [
                            (0, t.jsx)("th", { children: "User" }),
                            (0, t.jsx)("th", { children: "Email" }),
                            (0, t.jsx)("th", { children: "Events" }),
                          ],
                        }),
                      }),
                      (0, t.jsx)("tbody", {
                        children: a.map((i) =>
                          (0, t.jsx)(Dr, { organizer: i }, i.accountid),
                        ),
                      }),
                    ],
                  }),
                ],
              })
            : (0, t.jsx)(se.t, {
                string: (0, A.we)("#Loading"),
                size: "medium",
              });
        }
        function Dr(r) {
          const { organizer: e } = r,
            n = (0, v.useMemo)(
              () => R.b.InitFromAccountID(e.accountid).ConvertTo64BitString(),
              [e],
            ),
            s = (0, Ye.hW)(n),
            a = jr(e.accountid),
            i = s.data?.m_strPlayerName || "";
          return (0, t.jsxs)("tr", {
            children: [
              (0, t.jsxs)("td", { children: [i, " (", e.accountid, ")"] }),
              (0, t.jsx)("td", { children: a?.data?.email_address }),
              (0, t.jsx)("td", {
                children: (0, t.jsx)(Ir, {
                  name: i,
                  rgClanEventGIDs: e.clan_event_gids,
                }),
              }),
            ],
          });
        }
        function Ir(r) {
          const { name: e, rgClanEventGIDs: n } = r,
            [s, a, i] = (0, br.uD)();
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsxs)(V.$n, {
                onClick: a,
                children: ["See ", (0, it.D)(n.length), " Events"],
              }),
              (0, t.jsx)(xe.E, {
                active: s,
                children: (0, t.jsx)(Se.o0, {
                  bAlertDialog: !0,
                  closeModal: i,
                  strTitle: `${e}'s Events`,
                  children: n.map((d) => (0, t.jsx)(Ar, { gid: d }, d)),
                }),
              }),
            ],
          });
        }
        function Ar(r) {
          const { gid: e } = r,
            n = (0, de.RR)(e);
          return n
            ? (0, t.jsxs)("a", {
                href: `${Ne.TS.COMMUNITY_BASE_URL}gid/${n.clanSteamID.ConvertTo64BitString()}/partnerevents/edit/${e}`,
                target: "_blank",
                children: [
                  (0, t.jsx)("div", { children: n.GetNameWithFallback($.Bhc) }),
                  (0, t.jsx)("img", { src: n.GetImageURL("capsule", $.Bhc) }),
                ],
              })
            : (0, t.jsxs)("div", { children: ["Loading ", e] });
        }
        function Tr(r) {
          const e = (s) =>
              window.sessionStorage.setItem("meetsteamadmin", `?tab=${s.key}`),
            n = [
              {
                name: "Interest Survey Results",
                key: "survey",
                contents: (0, t.jsx)(pe.tH, { children: (0, t.jsx)(dr, {}) }),
                onClick: e,
              },
              {
                name: "Event Management",
                key: "event",
                contents: (0, t.jsx)(pe.tH, { children: (0, t.jsx)(Zn, {}) }),
                onClick: e,
              },
              {
                name: "Sale Operators",
                key: "saleops",
                contents: (0, t.jsx)(pe.tH, { children: (0, t.jsx)(Sr, {}) }),
                onClick: e,
              },
              {
                name: "Post Event Surveys",
                key: "postsurvey",
                contents: (0, t.jsx)(pe.tH, { children: (0, t.jsx)(on, {}) }),
                onClick: e,
              },
            ];
          return (0, t.jsx)(ln, {
            children: (0, t.jsx)(Yn, {
              children: (0, t.jsxs)("div", {
                className: I().AdminPageCtn,
                children: [
                  (0, t.jsxs)("div", {
                    className: I().PageTitle,
                    children: [
                      "Meet Steam Admin Dashboard ",
                      (0, W.Fd)("current_year", "application_config"),
                    ],
                  }),
                  (0, t.jsx)("hr", {}),
                  (0, t.jsx)(We.V, { tabs: n }),
                  (0, t.jsx)("div", { className: he().ClearThings }),
                  (0, t.jsx)("br", {}),
                ],
              }),
            }),
          });
        }
        var Er = f(65946),
          Fr = f(19324),
          Mr = f(24806),
          nn = f(56330),
          Lr = f(85761),
          Ve = f.n(Lr);
        function zr(r) {
          const e = kr(),
            n = Rr(),
            { data: s } = (0, Ye.js)(N.iA.accountid),
            [a, i] = (0, v.useState)(!1),
            [d, u] = (0, v.useState)(!1),
            [h, g] = (0, v.useState)(!1),
            [p, y] = (0, v.useState)(() => JSON.parse(JSON.stringify(n)));
          return e
            ? !s || s.m_bPlayerNamePending
              ? (0, t.jsx)(se.t, {
                  size: "medium",
                  position: "center",
                  string: (0, A.we)("#Loading"),
                })
              : (0, t.jsxs)("div", {
                  className: (0, et.A)(I().AdminPageCtn, Ve().Ctn),
                  children: [
                    (0, t.jsx)("div", {
                      className: I().PageTitle,
                      children: (0, A.we)("#MeetSteam_MainTitle"),
                    }),
                    (0, t.jsx)("hr", {}),
                    (0, t.jsx)("div", {
                      className: I().ColumnCtn,
                      children: (0, t.jsxs)("div", {
                        className: I().LeftCol,
                        children: [
                          (0, t.jsxs)("div", {
                            className: I().SectionCtn,
                            children: [
                              (0, t.jsxs)("h1", {
                                children: [
                                  " ",
                                  (0, A.PP)(
                                    "#MeetSteam_Intro",
                                    s.m_strPlayerName,
                                    (0, t.jsx)("br", {}),
                                  ),
                                ],
                              }),
                              (0, t.jsx)("p", {
                                className: I().IntroText,
                                children: (0, A.we)("#MeetSteam_Desc1"),
                              }),
                            ],
                          }),
                          (0, t.jsx)("div", {
                            className: I().SectionCtn,
                            children: (0, t.jsx)(Wr, {
                              oRegistration: p,
                              fnSetRegistration: y,
                            }),
                          }),
                          (0, t.jsx)("div", {
                            className: I().SectionCtn,
                            children: (0, t.jsx)(Or, {
                              oRegistration: p,
                              fnSetRegistration: y,
                            }),
                          }),
                          (0, t.jsxs)("div", {
                            className: (0, et.A)(I().SectionCtn, I().ActionBar),
                            children: [
                              (0, t.jsx)(V.jn, {
                                onClick: async () => {
                                  u(!0), i(!1), g(!1);
                                  const w = `${N.TS.PARTNER_BASE_URL}meetsteam/ajaxregisterinterest`,
                                    z = new FormData();
                                  z.append("sessionid", (0, N.KC)()),
                                    z.append(
                                      "registrationJson",
                                      JSON.stringify(p),
                                    );
                                  try {
                                    const B = await Y().post(w, z, {
                                      withCredentials: !0,
                                    });
                                    B.data.success != Z.R
                                      ? (console.error(
                                          "MeetSteamLanding failed " +
                                            B.data.success,
                                        ),
                                        i(!0))
                                      : g(!0);
                                  } catch (B) {
                                    console.error(
                                      "MeetSteamLanding failed caught",
                                      B,
                                    );
                                  }
                                  u(!1);
                                },
                                children: (0, A.we)("#Button_Submit"),
                              }),
                              d &&
                                (0, t.jsx)(se.t, {
                                  size: "medium",
                                  position: "center",
                                  string: (0, A.we)("#Saving"),
                                }),
                              h &&
                                (0, t.jsx)("div", {
                                  children: (0, A.we)("#Button_Saved"),
                                }),
                              a &&
                                (0, t.jsx)("div", {
                                  className: nn.ErrorStylesWithIcon,
                                  children: (0, A.we)(
                                    "#Error_ErrorCommunicatingWithNetwork",
                                  ),
                                }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                })
            : (0, t.jsx)("div", {
                className: Ve().Ctn,
                children: (0, A.we)("#MeetSteam_closed"),
              });
        }
        function Or(r) {
          const { oRegistration: e, fnSetRegistration: n } = r,
            { rgEvents: s, rgOldEvents: a, selectConference: i } = J();
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)("h1", {
                children: (0, A.we)("#MeetSteam_Events_Interest"),
              }),
              (0, t.jsx)("p", {
                children: (0, A.PP)(
                  "#MeetSteam_Events_title",
                  (0, N.Tc)("meet_steam_year", "application_config") || "2025",
                ),
              }),
              (0, t.jsxs)("p", {
                children: [
                  (0, t.jsx)("span", {
                    className: Ve().Indicator,
                    children: "*",
                  }),
                  " ",
                  (0, A.PP)("#MeetSteam_Events_desc"),
                ],
              }),
              !!i &&
                (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsx)("hr", {}),
                    (0, t.jsx)("p", {
                      children: (0, A.we)("#MeetSteam_ConferenceOrg"),
                    }),
                    (0, t.jsx)(Dt, { ...r, rgConference: [i] }),
                    (0, t.jsx)("br", {}),
                    (0, t.jsx)("br", {}),
                    (0, t.jsx)("hr", {}),
                    (0, t.jsx)("h2", {
                      children: (0, A.we)("#MeetSteam_OtherConference"),
                    }),
                  ],
                }),
              (0, t.jsx)(Dt, { ...r, rgConference: s }),
              (0, t.jsx)("br", {}),
              (0, t.jsx)(V.pd, {
                type: "text",
                value: e.suggestion || "",
                onChange: (d) => n({ ...e, suggestion: d.currentTarget.value }),
                label: (0, A.we)("#MeetSteam_others"),
              }),
              a?.length > 0 &&
                (0, t.jsx)(bt.qx, {
                  bStartMinimized: !0,
                  title: (0, A.we)("#MeetSteam_PastEvents", a.length),
                  children: (0, t.jsx)(Dt, { ...r, rgConference: a }),
                }),
            ],
          });
        }
        function Dt(r) {
          const { rgConference: e } = r;
          return (0, t.jsxs)("table", {
            children: [
              (0, t.jsx)("thead", {
                children: (0, t.jsxs)("tr", {
                  children: [
                    (0, t.jsx)("th", {}),
                    (0, t.jsx)("th", {}),
                    (0, t.jsx)("th", {}),
                    (0, t.jsx)("th", {}),
                  ],
                }),
              }),
              (0, t.jsx)("tbody", {
                children: e.map((n) =>
                  (0, t.jsxs)(
                    "tr",
                    {
                      children: [
                        (0, t.jsx)("td", {
                          children: n.attending
                            ? (0, t.jsx)("span", {
                                className: Ve().Indicator,
                                children: "*",
                              })
                            : "",
                        }),
                        (0, t.jsxs)("td", {
                          children: [
                            (0, t.jsx)("div", { children: n.name }),
                            (0, t.jsx)("div", { children: n.place }),
                          ],
                        }),
                        (0, t.jsx)("td", {
                          children: (0, t.jsx)("div", { children: n.time }),
                        }),
                        (0, t.jsx)("td", {
                          children: (0, t.jsx)(Nr, { ...r, conf: n }),
                        }),
                      ],
                    },
                    n.id,
                  ),
                ),
              }),
            ],
          });
        }
        function Nr(r) {
          const { oRegistration: e, fnSetRegistration: n, conf: s } = r;
          return (0, t.jsx)(V.Yh, {
            checked: e.attending?.includes(s.id),
            onChange: (a) => {
              let i = e.attending ? [...e.attending] : [];
              a && !i.includes(s.id)
                ? (i.push(s.id), n({ ...e, attending: i }))
                : !a &&
                  i.includes(s.id) &&
                  (i.splice(i.indexOf(s.id), 1), n({ ...e, attending: i }));
            },
            tooltip: (0, A.we)("#MeetSteam_attend_ttip"),
          });
        }
        function Wr(r) {
          const { oRegistration: e, fnSetRegistration: n } = r,
            s = (0, Ye.js)(N.iA.accountid),
            a = Kr(e?.partner_id),
            [i, d] = (0, v.useState)(
              () => !!((e.email_override && e.email_override != a) || !a),
            ),
            [u, h, g] = (0, Er.q3)(() => [
              !e.have_you_met_steam,
              !!e.english_not_good,
              e.preferred_language,
            ]);
          return s.data
            ? (0, t.jsxs)("div", {
                children: [
                  (0, t.jsx)("h1", { children: (0, A.we)("#MeetSteam_You") }),
                  (0, t.jsx)("p", {
                    children: (0, A.we)("#MeetSteam_You_Desc"),
                  }),
                  (0, t.jsx)(Ur, {
                    nPartnerID: e.partner_id,
                    label: (0, A.we)("#MeetSteam_You_Company"),
                    setPartnerID: (p) => n({ ...e, partner_id: p }),
                  }),
                  (0, t.jsxs)("div", {
                    className: Ve().EmailInfoRow,
                    children: [
                      (0, t.jsx)("div", {
                        className: Ve().EmailField,
                        children: (0, t.jsx)(V.pd, {
                          type: "string",
                          label: (0, A.we)("#MeetSteam_You_Email"),
                          disabled: !i,
                          value: e.email_override || a || "",
                          placeholder: (0, A.we)("#MeetSteam_You_EmailMissing"),
                          mustBeEmail: !0,
                          onChange: (p) =>
                            n({ ...e, email_override: p.currentTarget.value }),
                        }),
                      }),
                      !i &&
                        (0, t.jsx)(V.Yh, {
                          checked: i,
                          onChange: d,
                          label: (0, A.we)("#MeetSteam_You_Update"),
                          tooltip: (0, A.we)("#MeetSteam_You_Update_ttip"),
                        }),
                    ],
                  }),
                  (0, t.jsx)(V.JU, {
                    children: (0, A.we)("#MeetSteam_NeverMet"),
                  }),
                  (0, t.jsx)(V.Yh, {
                    label: (0, A.we)("#MeetSteam_NeverMetNo"),
                    checked: u,
                    onChange: (p) => n({ ...e, have_you_met_steam: !p }),
                  }),
                  (0, t.jsx)(V.JU, {
                    children: (0, A.we)("#MeetSteam_CapabableEnglish"),
                  }),
                  (0, t.jsxs)("div", {
                    className: Ve().RadioButtonCtn,
                    children: [
                      (0, t.jsx)(V.Od, {
                        className: Ve().RadioButtons,
                        checked: !h,
                        onChange: (p) =>
                          p &&
                          n({
                            ...e,
                            english_not_good: void 0,
                            preferred_language: void 0,
                          }),
                        label: (0, A.we)("#MeetSteam_CapabableEnglish_Yes"),
                      }),
                      (0, t.jsx)(V.Od, {
                        className: Ve().RadioButtons,
                        checked: h,
                        onChange: (p) =>
                          p &&
                          n({
                            ...e,
                            english_not_good: !0,
                            preferred_language: (0, $.sfN)(N.TS.LANGUAGE),
                          }),
                        label: (0, A.we)("#MeetSteam_CapabableEnglish_No"),
                      }),
                    ],
                  }),
                  h &&
                    (0, t.jsxs)(t.Fragment, {
                      children: [
                        (0, t.jsx)("br", {}),
                        (0, t.jsx)(V.JU, {
                          children: (0, A.we)("#MeetSteam_LanguagePref"),
                        }),
                        (0, t.jsx)(Mr.Ng, {
                          selectedLang: g,
                          bAllowUnsetOption: !1,
                          strTooltip: (0, A.we)("#MeetSteam_LanguagePref_ttip"),
                          fnOnLanguageChanged: (p) =>
                            n({ ...e, preferred_language: p }),
                        }),
                      ],
                    }),
                ],
              })
            : (0, t.jsx)(se.t, {
                size: "medium",
                position: "center",
                string: (0, A.we)("#Loading"),
              });
        }
        function Ur(r) {
          const { nPartnerID: e, setPartnerID: n, label: s } = r,
            a = (0, Fr.c)(N.iA.accountid);
          if (!a)
            return (0, t.jsx)(se.t, {
              size: "small",
              position: "center",
              string: (0, A.we)("#Loading"),
            });
          if (a.length == 1) return null;
          const i = [];
          return (
            a.forEach((d) =>
              i.push({ label: d?.partner_name, data: d.partnerid }),
            ),
            (0, t.jsx)(V.m, {
              layout: "inline",
              label: s,
              rgOptions: i,
              selectedOption: e,
              onChange: (d) => {
                n(d.data);
              },
            })
          );
        }
        function kr() {
          const [r] = (0, v.useState)(() =>
            (0, N.Tc)("registration_open", "application_config"),
          );
          return r;
        }
        function Rr() {
          const [r] = (0, v.useState)(
            () => (0, N.Tc)("user_reg", "application_config") || {},
          );
          return r;
        }
        function $r() {
          const [r] = (0, v.useState)(
            () => (0, N.Tc)("partner_user_email", "application_config") || "",
          );
          return r;
        }
        function Cr() {
          const [r] = (0, v.useState)(() =>
            (0, N.Tc)("primary_partner_id", "application_config"),
          );
          return r;
        }
        function Kr(r) {
          const e = $r(),
            n = Cr(),
            s = Rt(N.iA.accountid, r != n ? r : null);
          return r == n ? e : s?.email;
        }
        var Vr = f(65804),
          Hr = f(13038),
          Yr = f.n(Hr);
        function Qr(r) {
          const { data: e } = (0, Ye.js)(N.iA.accountid),
            n = Jr(),
            s = Zr(),
            [a, i] = (0, v.useState)(() => s || ""),
            { surveyGID: d } = (0, re.g)(),
            [u, h] = (0, v.useState)(!1),
            [g, p] = (0, v.useState)(!1),
            [y, w] = (0, v.useState)(!1);
          return !e || e.m_bPlayerNamePending
            ? (0, t.jsx)(se.t, {
                size: "medium",
                position: "center",
                string: (0, A.we)("#Loading"),
              })
            : (0, t.jsxs)("div", {
                className: (0, et.A)(I().AdminPageCtn, Yr().Ctn),
                children: [
                  (0, t.jsx)("div", {
                    className: I().PageTitle,
                    children: (0, A.we)("#MeetSteam_PostSurvey_Title", n),
                  }),
                  (0, t.jsx)("hr", {}),
                  (0, t.jsx)("div", {
                    className: I().ColumnCtn,
                    children: (0, t.jsxs)("div", {
                      className: I().LeftCol,
                      children: [
                        (0, t.jsxs)("div", {
                          className: I().SectionCtn,
                          children: [
                            (0, t.jsx)("div", {
                              children: (0, A.we)(
                                "#MeetSteam_PostSurvey_Question",
                              ),
                            }),
                            (0, t.jsx)("textarea", {
                              rows: 10,
                              onChange: (z) => i(z.currentTarget.value),
                              value: a,
                              autoFocus: !0,
                            }),
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          className: (0, et.A)(I().SectionCtn, I().ActionBar),
                          children: [
                            (0, t.jsx)(V.jn, {
                              onClick: async () => {
                                p(!0), h(!1), w(!1);
                                const z = `${N.TS.PARTNER_BASE_URL}meetsteam/ajaxsubmitsurvey/${d}`,
                                  B = new FormData();
                                B.append("gid", d),
                                  B.append("sessionid", (0, N.KC)());
                                let S = {
                                  gid: d,
                                  simple_response: a,
                                  submit_time: Math.floor(
                                    new Date().getTime() / 1e3,
                                  ),
                                };
                                B.append("surveyjson", JSON.stringify(S));
                                try {
                                  const q = await Y().post(z, B, {
                                    withCredentials: !0,
                                  });
                                  q.data.success != Z.R
                                    ? (console.error(
                                        "MeetSteamLanding failed " +
                                          q.data.success,
                                      ),
                                      h(!0))
                                    : w(!0);
                                } catch (q) {
                                  console.error(
                                    "MeetSteamLanding failed caught",
                                    q,
                                  );
                                }
                                p(!1);
                              },
                              children: (0, A.we)("#Button_Submit"),
                            }),
                            g &&
                              (0, t.jsx)(se.t, {
                                size: "medium",
                                position: "center",
                                string: (0, A.we)("#Saving"),
                              }),
                            y &&
                              (0, t.jsx)("div", {
                                children: (0, A.we)("#Button_Saved"),
                              }),
                            u &&
                              (0, t.jsx)("div", {
                                className: nn.ErrorStylesWithIcon,
                                children: (0, A.we)(
                                  "#Error_ErrorCommunicatingWithNetwork",
                                ),
                              }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              });
        }
        function Jr() {
          const [r] = (0, v.useState)(
            () => (0, N.Tc)("survey_event_name", "application_config") || "",
          );
          return r;
        }
        function Zr() {
          const [r] = (0, v.useState)(
            () => (0, N.Tc)("survey_data", "application_config") || "",
          );
          return r;
        }
        var rn = f(65532);
        function Xr(r) {
          const e = es(),
            n = ts(),
            s = qr(),
            { surveyGID: a } = (0, re.g)(),
            { bIsLoading: i, events: d } = (0, de.PB)(e),
            [u, h] = (0, v.useMemo)(
              () => [
                n
                  .map((y) => {
                    const w = new R.b(y.steamid);
                    if (s.has(w.GetAccountID())) {
                      const z = s.get(w.GetAccountID());
                      return JSON.parse(z[0].jsondata).partner_id;
                    }
                    return null;
                  })
                  .filter(Boolean),
                n.map((y) => new R.b(y.steamid).GetAccountID()),
              ],
              [s, n],
            ),
            g = (0, U.vh)(u),
            p = (0, dt.B3)(h);
          return i || !g || !p
            ? (0, t.jsx)(se.t, {
                string: "Loading Event, Partner and User Info",
              })
            : (0, t.jsx)(Pr, {
                rgSurveyResults: n,
                mapAccountsToReg: s,
                meetSteamEvents: d,
              });
        }
        const nt = (0, ht.FB)();
        function Pr(r) {
          const {
              rgSurveyResults: e,
              mapAccountsToReg: n,
              meetSteamEvents: s,
            } = r,
            a = (0, v.useMemo)(() => {
              if (!e) return null;
              const d = new Map();
              s.forEach((h) => d.set(h.GID, h));
              const u = [];
              return (
                e.forEach((h) => {
                  const g = JSON.parse(h.jsondata),
                    p = new R.b(h.steamid);
                  let y = {
                    feedback: g.simple_response,
                    accountid: p.GetAccountID(),
                  };
                  if (n.has(p.GetAccountID())) {
                    const w = n.get(p.GetAccountID()),
                      z = JSON.parse(w[0].jsondata);
                    (y.partner_id = z.partner_id),
                      (y.email = z.email_override),
                      (y.name = z.name),
                      (y.registrations = "");
                    const B = (0, U.Yd)(z.partner_id);
                    B && (y.partner_name = B.name),
                      w.forEach((S) => {
                        const q = d.get(S.gidEvent);
                        if (q) {
                          const Qe = q.jsondata.meet_steam_groups.find(
                            (qe) => qe.group_id === S.group_id,
                          ).localized_session_title[$.Bhc];
                          y.registrations.length > 0 &&
                            (y.registrations += "|"),
                            (y.registrations += Qe);
                        }
                      });
                  } else {
                    const w = (0, dt.CF)(p.GetAccountID());
                    w && (y.name = w.persona_name);
                  }
                  u.push(y);
                }),
                u
              );
            }, [n, s, e]),
            i = (0, v.useMemo)(
              () => [
                nt.accessor("name", { header: "Name", size: 150 }),
                nt.accessor("feedback", {
                  header: "Feedback",
                  size: 500,
                  cell: rn.Gb,
                }),
                nt.accessor("registrations", {
                  header: "Sessions",
                  size: 200,
                  cell: Gr,
                }),
                nt.accessor("accountid", { header: "Account ID", size: 150 }),
                nt.accessor("email", { header: "Email", size: 150 }),
                nt.accessor("partner_name", {
                  header: "Partner Name",
                  size: 200,
                }),
              ],
              [],
            );
          return a
            ? (0, t.jsx)(pe.tH, {
                children: (0, t.jsxs)("div", {
                  className: I().AdminPageCtn,
                  children: [
                    (0, t.jsx)("div", {
                      className: I().PageTitle,
                      children: "Survey Results",
                    }),
                    (0, t.jsx)("hr", {}),
                    (0, t.jsx)(V.$n, {
                      id: "download-csv",
                      onClick: () =>
                        (0, Qt.K)(
                          "meetsteam_survey_results.csv",
                          a,
                          i.map((d) => ({
                            accessorKey: d.accessorKey,
                            header:
                              typeof d.header == "string"
                                ? d.header
                                : (d.accessorKey ?? ""),
                          })),
                        ),
                      style: { width: "120px" },
                      children: "Download CSV",
                    }),
                    (0, t.jsx)("br", {}),
                    (0, t.jsx)(gt.k, {
                      columns: i,
                      data: a,
                      getRowKey: (d) => d,
                      stickyHeader: !0,
                      nItemHeight: 28,
                      overscan: a.length,
                    }),
                  ],
                }),
              })
            : (0, t.jsx)(se.t, { string: (0, A.we)("#Loading") });
        }
        function Gr(r) {
          return r.getValue()?.length > 0
            ? (0, t.jsx)(rn.DP, { text: r.getValue(), regExp: /\|/ })
            : "";
        }
        function qr() {
          const r = _r();
          return (0, v.useMemo)(() => {
            const n = new Map();
            return (
              r.forEach((s, a) => {
                s.forEach((i) => {
                  const d = new R.b(i.steamid);
                  n.has(d.GetAccountID()) || n.set(d.GetAccountID(), []),
                    (i.gidEvent = a),
                    n.get(d.GetAccountID()).push(i);
                });
              }),
              n
            );
          }, [r]);
        }
        function _r() {
          const [r] = (0, v.useState)(() => {
            const e = new Map(),
              n = (0, N.Tc)("registration_by_gid", "application_config") || {};
            for (const s in n) {
              const a = n[s];
              e.set(s, a);
            }
            return e;
          });
          return r;
        }
        function es() {
          const [r] = (0, v.useState)(
            () => (0, N.Tc)("event_gids", "application_config") || [],
          );
          return r;
        }
        function ts() {
          const [r] = (0, v.useState)(
            () => (0, N.Tc)("survey_results", "application_config") || [],
          );
          return r;
        }
        const at = {
          YearlySurvery: (r = ":year") => `/${r}`,
          PostEventSurvey: (r = ":surveyGID") => `/survey/${r}`,
          AdminDashboard: () => "/admin",
          PostEventSurveyResults: (r = ":surveyGID") => `/surveyresults/${r}`,
        };
        function ns(r) {
          return (
            (0, v.useEffect)(() => {
              Vr.O3.Init();
            }, []),
            (0, t.jsx)(Ee.m, {
              children: (0, t.jsx)(G.Kd, {
                basename: (0, fe.C)() + "meetsteam/",
                children: (0, t.jsxs)(re.dO, {
                  children: [
                    (0, t.jsx)(re.qh, {
                      exact: !0,
                      path: fe.B.DiagData(),
                      render: (e) =>
                        (0, t.jsx)(Le.z, {
                          ...e,
                          strConfigID: "application_config",
                        }),
                    }),
                    (0, t.jsx)(re.qh, {
                      exact: !0,
                      path: at.AdminDashboard(),
                      component: Tr,
                    }),
                    (0, t.jsx)(re.qh, {
                      exact: !0,
                      path: at.YearlySurvery(":year(\\d+)"),
                      component: zr,
                    }),
                    (0, t.jsx)(re.qh, {
                      exact: !0,
                      path: at.PostEventSurvey(":surveyGID(\\d+)"),
                      component: Qr,
                    }),
                    (0, t.jsx)(re.qh, {
                      exact: !0,
                      path: at.PostEventSurveyResults(":surveyGID(\\d+)"),
                      component: Xr,
                    }),
                    (0, t.jsx)(re.qh, { component: ze.a }),
                  ],
                }),
              }),
            })
          );
        }
      },
      7742: (Be, ke, f) => {
        "use strict";
        f.d(ke, { x0: () => fe, yI: () => v });
        async function t(G) {
          try {
            return await G;
          } catch (re) {
            console.error(re);
            return;
          }
        }
        function fe() {
          let G, re;
          return {
            promise: new Promise((Le, ze) => {
              (G = Le), (re = ze);
            }),
            resolve: G,
            reject: re,
          };
        }
        function v(G) {
          return new Promise((re) => setTimeout(re, G));
        }
      },
      50109: (Be, ke, f) => {
        "use strict";
        f.d(ke, { E: () => Re, O: () => We });
        var t = f(14947),
          fe = f(65946),
          v = f(99412),
          G = f(41635),
          re = f(27066),
          Ee = f(3166),
          Le = f(38585),
          ze = Object.defineProperty,
          pe = Object.getOwnPropertyDescriptor,
          L = (I, W, $, Z) => {
            for (
              var ie = Z > 1 ? void 0 : Z ? pe(W, $) : W, K = I.length - 1, T;
              K >= 0;
              K--
            )
              (T = I[K]) && (ie = (Z ? T(W, $, ie) : T(ie)) || ie);
            return Z && ie && ze(W, $, ie), ie;
          };
        const he = class ot {
          m_eCurLang = (0, v.sfN)(Ee.TS.LANGUAGE);
          m_rgHasData = (0, G.$Y)([], v.bP9, !1);
          m_bHasLocalizationContext = !1;
          m_callback = new Le.l();
          GetCallback() {
            return this.m_callback;
          }
          GetCurEditLanguage() {
            return this.m_eCurLang;
          }
          SetCurEditLanguage(W) {
            return this.m_eCurLang != W
              ? ((this.m_eCurLang = W), this.GetCallback().Dispatch(W), !0)
              : !1;
          }
          SetHasLanguage(W) {
            W.forEach(($, Z) => {
              this.m_rgHasData[Z] != $ && (this.m_rgHasData[Z] = $);
            });
          }
          BHasLanguageData(W) {
            return this.m_rgHasData[W];
          }
          GetHasLocalizationContext() {
            return this.m_bHasLocalizationContext;
          }
          SetHasLocalizationContext(W) {
            W != this.m_bHasLocalizationContext &&
              (this.m_bHasLocalizationContext = W);
          }
          static s_globalSingletonStore;
          static Get() {
            return (
              ot.s_globalSingletonStore ||
                (ot.s_globalSingletonStore = new ot()),
              ot.s_globalSingletonStore
            );
          }
          constructor() {
            (0, t.Gn)(this);
          }
        };
        L([t.sH], he.prototype, "m_eCurLang", 2),
          L([t.sH], he.prototype, "m_rgHasData", 2),
          L([t.sH], he.prototype, "m_bHasLocalizationContext", 2),
          L([re.o], he.prototype, "GetCurEditLanguage", 1),
          L([re.o], he.prototype, "SetCurEditLanguage", 1),
          L([t.XI.bound], he.prototype, "SetHasLanguage", 1),
          L([re.o], he.prototype, "BHasLanguageData", 1);
        let We = he;
        function Re() {
          return (0, fe.q3)(() => We.Get().GetCurEditLanguage());
        }
      },
      51746: (Be, ke, f) => {
        "use strict";
        f.d(ke, {
          EG: () => re,
          II: () => We,
          N1: () => Re,
          S2: () => L,
          Uz: () => pe,
          aL: () => ze,
          ab: () => v,
          qR: () => G,
          zB: () => he,
        });
        var t = f(7742),
          fe = f(72849);
        function v(I) {
          const W = I.toLowerCase();
          if (W.endsWith(".jpg") || W.endsWith(".jpeg")) return "image/jpeg";
          if (W.endsWith(".png")) return "image/png";
          if (W.endsWith(".gif")) return "image/gif";
          if (W.endsWith(".mp4")) return "video/mp4";
          if (W.endsWith(".webm")) return "video/webm";
          if (W.endsWith(".srt")) return "text/srt";
          if (W.endsWith(".vtt")) return "text/vtt";
          if (W.endsWith(".webp")) return "image/webp";
        }
        function G(I) {
          switch (I) {
            case "image/jpeg":
              return ".jpg";
            case "image/png":
              return ".png";
            case "image/gif":
              return ".gif";
            case "video/mp4":
              return ".mp4";
            case "video/webm":
              return ".webm";
            case "text/vtt":
              return ".vtt";
            case "text/srt":
              return ".srt";
            case "image/webp":
              return ".webp";
          }
          return (
            console.error(
              "ConvertMimeTypeToExtension:Unexepected mime type ",
              I,
            ),
            ".jpg"
          );
        }
        function re(I) {
          switch (I) {
            case fe.bg.iS:
              return ".jpg";
            case fe.bg.CK:
              return ".gif";
            case fe.bg.dU:
              return ".png";
            case fe.bg.pJ:
              return ".webm";
            case fe.bg.nn:
              return ".mp4";
            case fe.bg.pi:
              return ".srt";
            case fe.bg.k7:
              return ".vtt";
            case fe.bg.wD:
              return ".webp";
          }
        }
        function Ee(I) {
          const W = (0, t.x0)(),
            $ = new Image();
          return (
            ($.onload = () => W.resolve($)),
            ($.onerror = (Z) => {
              console.error("LoadImage failed to load the image, details", Z),
                W.resolve(void 0);
            }),
            ($.src = I),
            W.promise
          );
        }
        function Le(I) {
          const W = (0, t.x0)(),
            $ = document.createElement("video");
          return (
            ($.preload = "metadata"),
            $.addEventListener("loadedmetadata", () => W.resolve($)),
            ($.onerror = (Z) => {
              console.error("LoadVideo failed to load the video, details", Z),
                W.resolve(void 0);
            }),
            ($.src = I),
            W.promise
          );
        }
        function ze(I) {
          return I.startsWith("image/");
        }
        function pe(I) {
          return I.startsWith("video/");
        }
        function L(I, W) {
          return W ? Le(I) : Ee(I);
        }
        async function he(I, W) {
          if (W) return Le(URL.createObjectURL(I));
          {
            const $ = (0, t.x0)(),
              Z = new FileReader();
            (Z.onload = () => $.resolve(Z.result ?? void 0)),
              (Z.onerror = () => {
                console.error(
                  "GetMediaElementFromFile failed to load the image, details",
                  Z.error,
                ),
                  $.resolve(void 0);
              }),
              Z.readAsDataURL(I);
            const ie = await $.promise;
            return ie ? Ee(ie.toString()) : void 0;
          }
        }
        function We(I) {
          return I
            ? I instanceof HTMLVideoElement
              ? { width: I.videoWidth, height: I.videoHeight }
              : { width: I.width, height: I.height }
            : { width: 0, height: 0 };
        }
        function Re(I, W) {
          if (!W) return I;
          const $ = new Set([
            "content-length",
            "host",
            "origin",
            "referer",
            "user-agent",
            "cookie",
            "set-cookie",
            "connection",
            "upgrade",
          ]);
          for (const Z of W)
            $.has(Z.name.toLowerCase()) || (I[Z.name] = Z.value);
          return I;
        }
      },
      30565: (Be) => {
        Be.exports = {
          EventList: "_3iKeBOMuwqPC87BLxvCKll",
          EventRow: "_3HCTdN7N0hxyB7WCoQkX-l",
          EventMainDetails: "_12wSR9wtG84Yh4obIARUAy",
          Title: "_1bLTz07sQnRA0DjTpjXCza",
          StartDate: "_6accgtG1qR7tHFL1wnO58",
          TitleLine: "_3VdcJeFNzpiS6C6nzlzZfv",
          ActionLine: "_2T7-EVSiD7wt3kh-UtbFwJ",
          SearchLine: "_3WR8L9DXe8JRgcUuBlzxCV",
          SearchSummary: "_2ZYKXsT05br_fBl6Al_Ok2",
          SearchMatch: "_3NPtUvJyTjDkKKBkXpmMMh",
          CapacityBarMax: "_1LKv33ip1CbofO_817Nx6_",
          CapacityBarCurrent: "_3lS1D6vNLfl6RVGdhdgWTY",
          Full: "ndEhtgivpXhCilYDnAAVe",
          MonthTitle: "_2OGsXaLxpf_2IFP6hi2egn",
          MonthEvents: "_3dLuE6Vg6u_xDsbtxjzVLZ",
        };
      },
      34283: (Be) => {
        Be.exports = {
          ImportButtonLabel: "_1QCMW1MwEkiLeTlmhMvSs_",
          AccountSummary: "_3ASk__24cRSvf749cMDwat",
          AccountAvatar: "_2xoRnY-a7zMtF4eXy564LW",
          AccountPersonaName: "_13y5R1N5OAhnGi8UjBv9ZK",
          PartnerList: "_EdCW3WiSPTQsVts-RIeJ",
          PartnerListHeader: "_4TErK934px6TrK1V9JGoD",
          PartnerListRow: "CZqR_ufpzWTsB5Z6N9Zut",
          PartnerListRowSelected: "_2d0ftwVO6CThilpy0rp1mx",
        };
      },
      85761: (Be) => {
        Be.exports = {
          Ctn: "_8n9wPNrWDu91tlwBW9bHt",
          Indicator: "_355XkH0xfIpJF1YsMX7I7k",
          EmailInfoRow: "_3bta6oovSNKe3Nv2b67SmP",
          EmailField: "_1E-g4exFlAQhvXDqspYTR0",
          RadioButtons: "_1ZG5Z9nFYtYu3B7aksbG67",
          RadioButtonCtn: "_3AoiDJJ1RWLAWBwcOjgm3f",
        };
      },
      13038: (Be) => {
        Be.exports = {
          Ctn: "_1olTwzPkPjzL36u0WgyDG0",
          Indicator: "_3d0cYrmQzzda_P3DQ994kX",
        };
      },
      30603: (Be) => {
        Be.exports = {
          ExportToCSV: "_2QfZu5-7jOdld1h2nYbca8",
          Table: "_2JSoC65mCQdxh-B_srjUjf",
        };
      },
      40323: function (Be, ke) {
        var f, t, fe; /* @license
Papa Parse
v5.5.3
https://github.com/mholt/PapaParse
License: MIT
*/
        ((v, G) => {
          (t = []),
            (f = G),
            (fe = typeof f == "function" ? f.apply(ke, t) : f),
            fe !== void 0 && (Be.exports = fe);
        })(this, function v() {
          var G =
              typeof self < "u"
                ? self
                : typeof window < "u"
                  ? window
                  : G !== void 0
                    ? G
                    : {},
            re,
            Ee = !G.document && !!G.postMessage,
            Le = G.IS_PAPA_WORKER || !1,
            ze = {},
            pe = 0,
            L = {};
          function he(c) {
            (this._handle = null),
              (this._finished = !1),
              (this._completed = !1),
              (this._halted = !1),
              (this._input = null),
              (this._baseIndex = 0),
              (this._partialLine = ""),
              (this._rowCount = 0),
              (this._start = 0),
              (this._nextChunk = null),
              (this.isFirstChunk = !0),
              (this._completeResults = { data: [], errors: [], meta: {} }),
              function (l) {
                var m = ae(l);
                (m.chunkSize = parseInt(m.chunkSize)),
                  l.step || l.chunk || (m.chunkSize = null),
                  (this._handle = new $(m)),
                  ((this._handle.streamer = this)._config = m);
              }.call(this, c),
              (this.parseChunk = function (l, m) {
                var j = parseInt(this._config.skipFirstNLines) || 0;
                if (this.isFirstChunk && 0 < j) {
                  let F = this._config.newline;
                  F ||
                    ((x = this._config.quoteChar || '"'),
                    (F = this._handle.guessLineEndings(l, x))),
                    (l = [...l.split(F).slice(j)].join(F));
                }
                this.isFirstChunk &&
                  k(this._config.beforeFirstChunk) &&
                  (x = this._config.beforeFirstChunk(l)) !== void 0 &&
                  (l = x),
                  (this.isFirstChunk = !1),
                  (this._halted = !1);
                var j = this._partialLine + l,
                  x =
                    ((this._partialLine = ""),
                    this._handle.parse(j, this._baseIndex, !this._finished));
                if (!this._handle.paused() && !this._handle.aborted()) {
                  if (
                    ((l = x.meta.cursor),
                    (j =
                      (this._finished ||
                        ((this._partialLine = j.substring(l - this._baseIndex)),
                        (this._baseIndex = l)),
                      x && x.data && (this._rowCount += x.data.length),
                      this._finished ||
                        (this._config.preview &&
                          this._rowCount >= this._config.preview))),
                    Le)
                  )
                    G.postMessage({
                      results: x,
                      workerId: L.WORKER_ID,
                      finished: j,
                    });
                  else if (k(this._config.chunk) && !m) {
                    if (
                      (this._config.chunk(x, this._handle),
                      this._handle.paused() || this._handle.aborted())
                    )
                      return void (this._halted = !0);
                    this._completeResults = x = void 0;
                  }
                  return (
                    this._config.step ||
                      this._config.chunk ||
                      ((this._completeResults.data =
                        this._completeResults.data.concat(x.data)),
                      (this._completeResults.errors =
                        this._completeResults.errors.concat(x.errors)),
                      (this._completeResults.meta = x.meta)),
                    this._completed ||
                      !j ||
                      !k(this._config.complete) ||
                      (x && x.meta.aborted) ||
                      (this._config.complete(
                        this._completeResults,
                        this._input,
                      ),
                      (this._completed = !0)),
                    j || (x && x.meta.paused) || this._nextChunk(),
                    x
                  );
                }
                this._halted = !0;
              }),
              (this._sendError = function (l) {
                k(this._config.error)
                  ? this._config.error(l)
                  : Le &&
                    this._config.error &&
                    G.postMessage({
                      workerId: L.WORKER_ID,
                      error: l,
                      finished: !1,
                    });
              });
          }
          function We(c) {
            var l;
            (c = c || {}).chunkSize || (c.chunkSize = L.RemoteChunkSize),
              he.call(this, c),
              (this._nextChunk = Ee
                ? function () {
                    this._readChunk(), this._chunkLoaded();
                  }
                : function () {
                    this._readChunk();
                  }),
              (this.stream = function (m) {
                (this._input = m), this._nextChunk();
              }),
              (this._readChunk = function () {
                if (this._finished) this._chunkLoaded();
                else {
                  if (
                    ((l = new XMLHttpRequest()),
                    this._config.withCredentials &&
                      (l.withCredentials = this._config.withCredentials),
                    Ee ||
                      ((l.onload = je(this._chunkLoaded, this)),
                      (l.onerror = je(this._chunkError, this))),
                    l.open(
                      this._config.downloadRequestBody ? "POST" : "GET",
                      this._input,
                      !Ee,
                    ),
                    this._config.downloadRequestHeaders)
                  ) {
                    var m,
                      j = this._config.downloadRequestHeaders;
                    for (m in j) l.setRequestHeader(m, j[m]);
                  }
                  var x;
                  this._config.chunkSize &&
                    ((x = this._start + this._config.chunkSize - 1),
                    l.setRequestHeader(
                      "Range",
                      "bytes=" + this._start + "-" + x,
                    ));
                  try {
                    l.send(this._config.downloadRequestBody);
                  } catch (F) {
                    this._chunkError(F.message);
                  }
                  Ee && l.status === 0 && this._chunkError();
                }
              }),
              (this._chunkLoaded = function () {
                l.readyState === 4 &&
                  (l.status < 200 || 400 <= l.status
                    ? this._chunkError()
                    : ((this._start +=
                        this._config.chunkSize || l.responseText.length),
                      (this._finished =
                        !this._config.chunkSize ||
                        this._start >=
                          ((m) =>
                            (m = m.getResponseHeader("Content-Range")) !== null
                              ? parseInt(m.substring(m.lastIndexOf("/") + 1))
                              : -1)(l)),
                      this.parseChunk(l.responseText)));
              }),
              (this._chunkError = function (m) {
                (m = l.statusText || m), this._sendError(new Error(m));
              });
          }
          function Re(c) {
            (c = c || {}).chunkSize || (c.chunkSize = L.LocalChunkSize),
              he.call(this, c);
            var l,
              m,
              j = typeof FileReader < "u";
            (this.stream = function (x) {
              (this._input = x),
                (m = x.slice || x.webkitSlice || x.mozSlice),
                j
                  ? (((l = new FileReader()).onload = je(
                      this._chunkLoaded,
                      this,
                    )),
                    (l.onerror = je(this._chunkError, this)))
                  : (l = new FileReaderSync()),
                this._nextChunk();
            }),
              (this._nextChunk = function () {
                this._finished ||
                  (this._config.preview &&
                    !(this._rowCount < this._config.preview)) ||
                  this._readChunk();
              }),
              (this._readChunk = function () {
                var x = this._input,
                  F =
                    (this._config.chunkSize &&
                      ((F = Math.min(
                        this._start + this._config.chunkSize,
                        this._input.size,
                      )),
                      (x = m.call(x, this._start, F))),
                    l.readAsText(x, this._config.encoding));
                j || this._chunkLoaded({ target: { result: F } });
              }),
              (this._chunkLoaded = function (x) {
                (this._start += this._config.chunkSize),
                  (this._finished =
                    !this._config.chunkSize || this._start >= this._input.size),
                  this.parseChunk(x.target.result);
              }),
              (this._chunkError = function () {
                this._sendError(l.error);
              });
          }
          function I(c) {
            var l;
            he.call(this, (c = c || {})),
              (this.stream = function (m) {
                return (l = m), this._nextChunk();
              }),
              (this._nextChunk = function () {
                var m, j;
                if (!this._finished)
                  return (
                    (m = this._config.chunkSize),
                    (l = m
                      ? ((j = l.substring(0, m)), l.substring(m))
                      : ((j = l), "")),
                    (this._finished = !l),
                    this.parseChunk(j)
                  );
              });
          }
          function W(c) {
            he.call(this, (c = c || {}));
            var l = [],
              m = !0,
              j = !1;
            (this.pause = function () {
              he.prototype.pause.apply(this, arguments), this._input.pause();
            }),
              (this.resume = function () {
                he.prototype.resume.apply(this, arguments),
                  this._input.resume();
              }),
              (this.stream = function (x) {
                (this._input = x),
                  this._input.on("data", this._streamData),
                  this._input.on("end", this._streamEnd),
                  this._input.on("error", this._streamError);
              }),
              (this._checkIsFinished = function () {
                j && l.length === 1 && (this._finished = !0);
              }),
              (this._nextChunk = function () {
                this._checkIsFinished(),
                  l.length ? this.parseChunk(l.shift()) : (m = !0);
              }),
              (this._streamData = je(function (x) {
                try {
                  l.push(
                    typeof x == "string"
                      ? x
                      : x.toString(this._config.encoding),
                  ),
                    m &&
                      ((m = !1),
                      this._checkIsFinished(),
                      this.parseChunk(l.shift()));
                } catch (F) {
                  this._streamError(F);
                }
              }, this)),
              (this._streamError = je(function (x) {
                this._streamCleanUp(), this._sendError(x);
              }, this)),
              (this._streamEnd = je(function () {
                this._streamCleanUp(), (j = !0), this._streamData("");
              }, this)),
              (this._streamCleanUp = je(function () {
                this._input.removeListener("data", this._streamData),
                  this._input.removeListener("end", this._streamEnd),
                  this._input.removeListener("error", this._streamError);
              }, this));
          }
          function $(c) {
            var l,
              m,
              j,
              x,
              F = Math.pow(2, 53),
              H = -F,
              X = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,
              P =
                /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,
              M = this,
              C = 0,
              b = 0,
              Q = !1,
              D = !1,
              O = [],
              E = { data: [], errors: [], meta: {} };
            function oe(Y) {
              return c.skipEmptyLines === "greedy"
                ? Y.join("").trim() === ""
                : Y.length === 1 && Y[0].length === 0;
            }
            function ee() {
              if (
                (E &&
                  j &&
                  (Ae(
                    "Delimiter",
                    "UndetectableDelimiter",
                    "Unable to auto-detect delimiting character; defaulted to '" +
                      L.DefaultDelimiter +
                      "'",
                  ),
                  (j = !1)),
                c.skipEmptyLines &&
                  (E.data = E.data.filter(function (te) {
                    return !oe(te);
                  })),
                ue())
              ) {
                let te = function (me, ce) {
                  k(c.transformHeader) && (me = c.transformHeader(me, ce)),
                    O.push(me);
                };
                var U = te;
                if (E)
                  if (Array.isArray(E.data[0])) {
                    for (var Y = 0; ue() && Y < E.data.length; Y++)
                      E.data[Y].forEach(te);
                    E.data.splice(0, 1);
                  } else E.data.forEach(te);
              }
              function R(te, me) {
                for (
                  var ce = c.header ? {} : [], ne = 0;
                  ne < te.length;
                  ne++
                ) {
                  var J = ne,
                    ve = te[ne],
                    ve = ((_, le) =>
                      ((ge) => (
                        c.dynamicTypingFunction &&
                          c.dynamicTyping[ge] === void 0 &&
                          (c.dynamicTyping[ge] = c.dynamicTypingFunction(ge)),
                        (c.dynamicTyping[ge] || c.dynamicTyping) === !0
                      ))(_)
                        ? le === "true" ||
                          le === "TRUE" ||
                          (le !== "false" &&
                            le !== "FALSE" &&
                            (((ge) => {
                              if (
                                X.test(ge) &&
                                ((ge = parseFloat(ge)), H < ge && ge < F)
                              )
                                return 1;
                            })(le)
                              ? parseFloat(le)
                              : P.test(le)
                                ? new Date(le)
                                : le === ""
                                  ? null
                                  : le))
                        : le)(
                      (J = c.header
                        ? ne >= O.length
                          ? "__parsed_extra"
                          : O[ne]
                        : J),
                      (ve = c.transform ? c.transform(ve, J) : ve),
                    );
                  J === "__parsed_extra"
                    ? ((ce[J] = ce[J] || []), ce[J].push(ve))
                    : (ce[J] = ve);
                }
                return (
                  c.header &&
                    (ne > O.length
                      ? Ae(
                          "FieldMismatch",
                          "TooManyFields",
                          "Too many fields: expected " +
                            O.length +
                            " fields but parsed " +
                            ne,
                          b + me,
                        )
                      : ne < O.length &&
                        Ae(
                          "FieldMismatch",
                          "TooFewFields",
                          "Too few fields: expected " +
                            O.length +
                            " fields but parsed " +
                            ne,
                          b + me,
                        )),
                  ce
                );
              }
              var N;
              E &&
                (c.header || c.dynamicTyping || c.transform) &&
                ((N = 1),
                !E.data.length || Array.isArray(E.data[0])
                  ? ((E.data = E.data.map(R)), (N = E.data.length))
                  : (E.data = R(E.data, 0)),
                c.header && E.meta && (E.meta.fields = O),
                (b += N));
            }
            function ue() {
              return c.header && O.length === 0;
            }
            function Ae(Y, R, N, U) {
              (Y = { type: Y, code: R, message: N }),
                U !== void 0 && (Y.row = U),
                E.errors.push(Y);
            }
            k(c.step) &&
              ((x = c.step),
              (c.step = function (Y) {
                (E = Y),
                  ue()
                    ? ee()
                    : (ee(),
                      E.data.length !== 0 &&
                        ((C += Y.data.length),
                        c.preview && C > c.preview
                          ? m.abort()
                          : ((E.data = E.data[0]), x(E, M))));
              })),
              (this.parse = function (Y, R, N) {
                var U = c.quoteChar || '"',
                  U =
                    (c.newline || (c.newline = this.guessLineEndings(Y, U)),
                    (j = !1),
                    c.delimiter
                      ? k(c.delimiter) &&
                        ((c.delimiter = c.delimiter(Y)),
                        (E.meta.delimiter = c.delimiter))
                      : ((U = ((te, me, ce, ne, J) => {
                          var ve, _, le, ge;
                          J = J || [
                            ",",
                            "	",
                            "|",
                            ";",
                            L.RECORD_SEP,
                            L.UNIT_SEP,
                          ];
                          for (var Ke = 0; Ke < J.length; Ke++) {
                            for (
                              var Oe,
                                Je = J[Ke],
                                ye = 0,
                                Fe = 0,
                                de = 0,
                                we =
                                  ((le = void 0),
                                  new ie({
                                    comments: ne,
                                    delimiter: Je,
                                    newline: me,
                                    preview: 10,
                                  }).parse(te)),
                                be = 0;
                              be < we.data.length;
                              be++
                            )
                              ce && oe(we.data[be])
                                ? de++
                                : ((Oe = we.data[be].length),
                                  (Fe += Oe),
                                  le === void 0
                                    ? (le = Oe)
                                    : 0 < Oe &&
                                      ((ye += Math.abs(Oe - le)), (le = Oe)));
                            0 < we.data.length && (Fe /= we.data.length - de),
                              (_ === void 0 || ye <= _) &&
                                (ge === void 0 || ge < Fe) &&
                                1.99 < Fe &&
                                ((_ = ye), (ve = Je), (ge = Fe));
                          }
                          return {
                            successful: !!(c.delimiter = ve),
                            bestDelimiter: ve,
                          };
                        })(
                          Y,
                          c.newline,
                          c.skipEmptyLines,
                          c.comments,
                          c.delimitersToGuess,
                        )).successful
                          ? (c.delimiter = U.bestDelimiter)
                          : ((j = !0), (c.delimiter = L.DefaultDelimiter)),
                        (E.meta.delimiter = c.delimiter)),
                    ae(c));
                return (
                  c.preview && c.header && U.preview++,
                  (l = Y),
                  (m = new ie(U)),
                  (E = m.parse(l, R, N)),
                  ee(),
                  Q ? { meta: { paused: !0 } } : E || { meta: { paused: !1 } }
                );
              }),
              (this.paused = function () {
                return Q;
              }),
              (this.pause = function () {
                (Q = !0),
                  m.abort(),
                  (l = k(c.chunk) ? "" : l.substring(m.getCharIndex()));
              }),
              (this.resume = function () {
                M.streamer._halted
                  ? ((Q = !1), M.streamer.parseChunk(l, !0))
                  : setTimeout(M.resume, 3);
              }),
              (this.aborted = function () {
                return D;
              }),
              (this.abort = function () {
                (D = !0),
                  m.abort(),
                  (E.meta.aborted = !0),
                  k(c.complete) && c.complete(E),
                  (l = "");
              }),
              (this.guessLineEndings = function (te, U) {
                te = te.substring(0, 1048576);
                var U = new RegExp(Z(U) + "([^]*?)" + Z(U), "gm"),
                  N = (te = te.replace(U, "")).split("\r"),
                  U = te.split(`
`),
                  te = 1 < U.length && U[0].length < N[0].length;
                if (N.length === 1 || te)
                  return `
`;
                for (var me = 0, ce = 0; ce < N.length; ce++)
                  N[ce][0] ===
                    `
` && me++;
                return me >= N.length / 2
                  ? `\r
`
                  : "\r";
              });
          }
          function Z(c) {
            return c.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          }
          function ie(c) {
            var l = (c = c || {}).delimiter,
              m = c.newline,
              j = c.comments,
              x = c.step,
              F = c.preview,
              H = c.fastMode,
              X = null,
              P = !1,
              M = c.quoteChar == null ? '"' : c.quoteChar,
              C = M;
            if (
              (c.escapeChar !== void 0 && (C = c.escapeChar),
              (typeof l != "string" || -1 < L.BAD_DELIMITERS.indexOf(l)) &&
                (l = ","),
              j === l)
            )
              throw new Error("Comment character same as delimiter");
            j === !0
              ? (j = "#")
              : (typeof j != "string" || -1 < L.BAD_DELIMITERS.indexOf(j)) &&
                (j = !1),
              m !==
                `
` &&
                m !== "\r" &&
                m !==
                  `\r
` &&
                (m = `
`);
            var b = 0,
              Q = !1;
            (this.parse = function (D, O, E) {
              if (typeof D != "string")
                throw new Error("Input must be a string");
              var oe = D.length,
                ee = l.length,
                ue = m.length,
                Ae = j.length,
                Y = k(x),
                R = [],
                N = [],
                U = [],
                te = (b = 0);
              if (!D) return ye();
              if (H || (H !== !1 && D.indexOf(M) === -1)) {
                for (var me = D.split(m), ce = 0; ce < me.length; ce++) {
                  if (((U = me[ce]), (b += U.length), ce !== me.length - 1))
                    b += m.length;
                  else if (E) return ye();
                  if (!j || U.substring(0, Ae) !== j) {
                    if (Y) {
                      if (((R = []), ge(U.split(l)), Fe(), Q)) return ye();
                    } else ge(U.split(l));
                    if (F && F <= ce) return (R = R.slice(0, F)), ye(!0);
                  }
                }
                return ye();
              }
              for (
                var ne = D.indexOf(l, b),
                  J = D.indexOf(m, b),
                  ve = new RegExp(Z(C) + Z(M), "g"),
                  _ = D.indexOf(M, b);
                ;
              )
                if (D[b] === M)
                  for (_ = b, b++; ; ) {
                    if ((_ = D.indexOf(M, _ + 1)) === -1)
                      return (
                        E ||
                          N.push({
                            type: "Quotes",
                            code: "MissingQuotes",
                            message: "Quoted field unterminated",
                            row: R.length,
                            index: b,
                          }),
                        Oe()
                      );
                    if (_ === oe - 1)
                      return Oe(D.substring(b, _).replace(ve, M));
                    if (M === C && D[_ + 1] === C) _++;
                    else if (M === C || _ === 0 || D[_ - 1] !== C) {
                      ne !== -1 && ne < _ + 1 && (ne = D.indexOf(l, _ + 1));
                      var le = Ke(
                        (J =
                          J !== -1 && J < _ + 1 ? D.indexOf(m, _ + 1) : J) ===
                          -1
                          ? ne
                          : Math.min(ne, J),
                      );
                      if (D.substr(_ + 1 + le, ee) === l) {
                        U.push(D.substring(b, _).replace(ve, M)),
                          D[(b = _ + 1 + le + ee)] !== M &&
                            (_ = D.indexOf(M, b)),
                          (ne = D.indexOf(l, b)),
                          (J = D.indexOf(m, b));
                        break;
                      }
                      if (
                        ((le = Ke(J)),
                        D.substring(_ + 1 + le, _ + 1 + le + ue) === m)
                      ) {
                        if (
                          (U.push(D.substring(b, _).replace(ve, M)),
                          Je(_ + 1 + le + ue),
                          (ne = D.indexOf(l, b)),
                          (_ = D.indexOf(M, b)),
                          Y && (Fe(), Q))
                        )
                          return ye();
                        if (F && R.length >= F) return ye(!0);
                        break;
                      }
                      N.push({
                        type: "Quotes",
                        code: "InvalidQuotes",
                        message: "Trailing quote on quoted field is malformed",
                        row: R.length,
                        index: b,
                      }),
                        _++;
                    }
                  }
                else if (j && U.length === 0 && D.substring(b, b + Ae) === j) {
                  if (J === -1) return ye();
                  (b = J + ue), (J = D.indexOf(m, b)), (ne = D.indexOf(l, b));
                } else if (ne !== -1 && (ne < J || J === -1))
                  U.push(D.substring(b, ne)),
                    (b = ne + ee),
                    (ne = D.indexOf(l, b));
                else {
                  if (J === -1) break;
                  if ((U.push(D.substring(b, J)), Je(J + ue), Y && (Fe(), Q)))
                    return ye();
                  if (F && R.length >= F) return ye(!0);
                }
              return Oe();
              function ge(de) {
                R.push(de), (te = b);
              }
              function Ke(de) {
                var we = 0;
                return (we =
                  de !== -1 && (de = D.substring(_ + 1, de)) && de.trim() === ""
                    ? de.length
                    : we);
              }
              function Oe(de) {
                return (
                  E ||
                    (de === void 0 && (de = D.substring(b)),
                    U.push(de),
                    (b = oe),
                    ge(U),
                    Y && Fe()),
                  ye()
                );
              }
              function Je(de) {
                (b = de), ge(U), (U = []), (J = D.indexOf(m, b));
              }
              function ye(de) {
                if (c.header && !O && R.length && !P) {
                  var we = R[0],
                    be = Object.create(null),
                    V = new Set(we);
                  let Ze = !1;
                  for (let Se = 0; Se < we.length; Se++) {
                    let xe = we[Se];
                    if (
                      be[
                        (xe = k(c.transformHeader)
                          ? c.transformHeader(xe, Se)
                          : xe)
                      ]
                    ) {
                      let se,
                        Xe = be[xe];
                      for (; (se = xe + "_" + Xe), Xe++, V.has(se); );
                      V.add(se),
                        (we[Se] = se),
                        be[xe]++,
                        (Ze = !0),
                        ((X = X === null ? {} : X)[se] = xe);
                    } else (be[xe] = 1), (we[Se] = xe);
                    V.add(xe);
                  }
                  Ze && console.warn("Duplicate headers found and renamed."),
                    (P = !0);
                }
                return {
                  data: R,
                  errors: N,
                  meta: {
                    delimiter: l,
                    linebreak: m,
                    aborted: Q,
                    truncated: !!de,
                    cursor: te + (O || 0),
                    renamedHeaders: X,
                  },
                };
              }
              function Fe() {
                x(ye()), (R = []), (N = []);
              }
            }),
              (this.abort = function () {
                Q = !0;
              }),
              (this.getCharIndex = function () {
                return b;
              });
          }
          function K(c) {
            var l = c.data,
              m = ze[l.workerId],
              j = !1;
            if (l.error) m.userError(l.error, l.file);
            else if (l.results && l.results.data) {
              var x = {
                abort: function () {
                  (j = !0),
                    T(l.workerId, {
                      data: [],
                      errors: [],
                      meta: { aborted: !0 },
                    });
                },
                pause: o,
                resume: o,
              };
              if (k(m.userStep)) {
                for (
                  var F = 0;
                  F < l.results.data.length &&
                  (m.userStep(
                    {
                      data: l.results.data[F],
                      errors: l.results.errors,
                      meta: l.results.meta,
                    },
                    x,
                  ),
                  !j);
                  F++
                );
                delete l.results;
              } else
                k(m.userChunk) &&
                  (m.userChunk(l.results, x, l.file), delete l.results);
            }
            l.finished && !j && T(l.workerId, l.results);
          }
          function T(c, l) {
            var m = ze[c];
            k(m.userComplete) && m.userComplete(l), m.terminate(), delete ze[c];
          }
          function o() {
            throw new Error("Not implemented.");
          }
          function ae(c) {
            if (typeof c != "object" || c === null) return c;
            var l,
              m = Array.isArray(c) ? [] : {};
            for (l in c) m[l] = ae(c[l]);
            return m;
          }
          function je(c, l) {
            return function () {
              c.apply(l, arguments);
            };
          }
          function k(c) {
            return typeof c == "function";
          }
          return (
            (L.parse = function (c, l) {
              var m = (l = l || {}).dynamicTyping || !1;
              if (
                (k(m) && ((l.dynamicTypingFunction = m), (m = {})),
                (l.dynamicTyping = m),
                (l.transform = !!k(l.transform) && l.transform),
                !l.worker || !L.WORKERS_SUPPORTED)
              )
                return (
                  (m = null),
                  L.NODE_STREAM_INPUT,
                  typeof c == "string"
                    ? ((c = ((j) =>
                        j.charCodeAt(0) !== 65279 ? j : j.slice(1))(c)),
                      (m = new (l.download ? We : I)(l)))
                    : c.readable === !0 && k(c.read) && k(c.on)
                      ? (m = new W(l))
                      : ((G.File && c instanceof File) ||
                          c instanceof Object) &&
                        (m = new Re(l)),
                  m.stream(c)
                );
              ((m = (() => {
                var j;
                return (
                  !!L.WORKERS_SUPPORTED &&
                  ((j = (() => {
                    var x = G.URL || G.webkitURL || null,
                      F = v.toString();
                    return (
                      L.BLOB_URL ||
                      (L.BLOB_URL = x.createObjectURL(
                        new Blob(
                          [
                            "var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ",
                            "(",
                            F,
                            ")();",
                          ],
                          { type: "text/javascript" },
                        ),
                      ))
                    );
                  })()),
                  ((j = new G.Worker(j)).onmessage = K),
                  (j.id = pe++),
                  (ze[j.id] = j))
                );
              })()).userStep = l.step),
                (m.userChunk = l.chunk),
                (m.userComplete = l.complete),
                (m.userError = l.error),
                (l.step = k(l.step)),
                (l.chunk = k(l.chunk)),
                (l.complete = k(l.complete)),
                (l.error = k(l.error)),
                delete l.worker,
                m.postMessage({ input: c, config: l, workerId: m.id });
            }),
            (L.unparse = function (c, l) {
              var m = !1,
                j = !0,
                x = ",",
                F = `\r
`,
                H = '"',
                X = H + H,
                P = !1,
                M = null,
                C = !1,
                b =
                  ((() => {
                    if (typeof l == "object") {
                      if (
                        (typeof l.delimiter != "string" ||
                          L.BAD_DELIMITERS.filter(function (O) {
                            return l.delimiter.indexOf(O) !== -1;
                          }).length ||
                          (x = l.delimiter),
                        (typeof l.quotes != "boolean" &&
                          typeof l.quotes != "function" &&
                          !Array.isArray(l.quotes)) ||
                          (m = l.quotes),
                        (typeof l.skipEmptyLines != "boolean" &&
                          typeof l.skipEmptyLines != "string") ||
                          (P = l.skipEmptyLines),
                        typeof l.newline == "string" && (F = l.newline),
                        typeof l.quoteChar == "string" && (H = l.quoteChar),
                        typeof l.header == "boolean" && (j = l.header),
                        Array.isArray(l.columns))
                      ) {
                        if (l.columns.length === 0)
                          throw new Error("Option columns is empty");
                        M = l.columns;
                      }
                      l.escapeChar !== void 0 && (X = l.escapeChar + H),
                        l.escapeFormulae instanceof RegExp
                          ? (C = l.escapeFormulae)
                          : typeof l.escapeFormulae == "boolean" &&
                            l.escapeFormulae &&
                            (C = /^[=+\-@\t\r].*$/);
                    }
                  })(),
                  new RegExp(Z(H), "g"));
              if (
                (typeof c == "string" && (c = JSON.parse(c)), Array.isArray(c))
              ) {
                if (!c.length || Array.isArray(c[0])) return Q(null, c, P);
                if (typeof c[0] == "object")
                  return Q(M || Object.keys(c[0]), c, P);
              } else if (typeof c == "object")
                return (
                  typeof c.data == "string" && (c.data = JSON.parse(c.data)),
                  Array.isArray(c.data) &&
                    (c.fields || (c.fields = (c.meta && c.meta.fields) || M),
                    c.fields ||
                      (c.fields = Array.isArray(c.data[0])
                        ? c.fields
                        : typeof c.data[0] == "object"
                          ? Object.keys(c.data[0])
                          : []),
                    Array.isArray(c.data[0]) ||
                      typeof c.data[0] == "object" ||
                      (c.data = [c.data])),
                  Q(c.fields || [], c.data || [], P)
                );
              throw new Error("Unable to serialize unrecognized input");
              function Q(O, E, oe) {
                var ee = "",
                  ue =
                    (typeof O == "string" && (O = JSON.parse(O)),
                    typeof E == "string" && (E = JSON.parse(E)),
                    Array.isArray(O) && 0 < O.length),
                  Ae = !Array.isArray(E[0]);
                if (ue && j) {
                  for (var Y = 0; Y < O.length; Y++)
                    0 < Y && (ee += x), (ee += D(O[Y], Y));
                  0 < E.length && (ee += F);
                }
                for (var R = 0; R < E.length; R++) {
                  var N = (ue ? O : E[R]).length,
                    U = !1,
                    te = ue
                      ? Object.keys(E[R]).length === 0
                      : E[R].length === 0;
                  if (
                    (oe &&
                      !ue &&
                      (U =
                        oe === "greedy"
                          ? E[R].join("").trim() === ""
                          : E[R].length === 1 && E[R][0].length === 0),
                    oe === "greedy" && ue)
                  ) {
                    for (var me = [], ce = 0; ce < N; ce++) {
                      var ne = Ae ? O[ce] : ce;
                      me.push(E[R][ne]);
                    }
                    U = me.join("").trim() === "";
                  }
                  if (!U) {
                    for (var J = 0; J < N; J++) {
                      0 < J && !te && (ee += x);
                      var ve = ue && Ae ? O[J] : J;
                      ee += D(E[R][ve], J);
                    }
                    R < E.length - 1 && (!oe || (0 < N && !te)) && (ee += F);
                  }
                }
                return ee;
              }
              function D(O, E) {
                var oe, ee;
                return O == null
                  ? ""
                  : O.constructor === Date
                    ? JSON.stringify(O).slice(1, 25)
                    : ((ee = !1),
                      C &&
                        typeof O == "string" &&
                        C.test(O) &&
                        ((O = "'" + O), (ee = !0)),
                      (oe = O.toString().replace(b, X)),
                      (ee =
                        ee ||
                        m === !0 ||
                        (typeof m == "function" && m(O, E)) ||
                        (Array.isArray(m) && m[E]) ||
                        ((ue, Ae) => {
                          for (var Y = 0; Y < Ae.length; Y++)
                            if (-1 < ue.indexOf(Ae[Y])) return !0;
                          return !1;
                        })(oe, L.BAD_DELIMITERS) ||
                        -1 < oe.indexOf(x) ||
                        oe.charAt(0) === " " ||
                        oe.charAt(oe.length - 1) === " ")
                        ? H + oe + H
                        : oe);
              }
            }),
            (L.RECORD_SEP = ""),
            (L.UNIT_SEP = ""),
            (L.BYTE_ORDER_MARK = "\uFEFF"),
            (L.BAD_DELIMITERS = [
              "\r",
              `
`,
              '"',
              L.BYTE_ORDER_MARK,
            ]),
            (L.WORKERS_SUPPORTED = !Ee && !!G.Worker),
            (L.NODE_STREAM_INPUT = 1),
            (L.LocalChunkSize = 10485760),
            (L.RemoteChunkSize = 5242880),
            (L.DefaultDelimiter = ","),
            (L.Parser = ie),
            (L.ParserHandle = $),
            (L.NetworkStreamer = We),
            (L.FileStreamer = Re),
            (L.StringStreamer = I),
            (L.ReadableStreamStreamer = W),
            G.jQuery &&
              ((re = G.jQuery).fn.parse = function (c) {
                var l = c.config || {},
                  m = [];
                return (
                  this.each(function (F) {
                    if (
                      !(
                        re(this).prop("tagName").toUpperCase() === "INPUT" &&
                        re(this).attr("type").toLowerCase() === "file" &&
                        G.FileReader
                      ) ||
                      !this.files ||
                      this.files.length === 0
                    )
                      return !0;
                    for (var H = 0; H < this.files.length; H++)
                      m.push({
                        file: this.files[H],
                        inputElem: this,
                        instanceConfig: re.extend({}, l),
                      });
                  }),
                  j(),
                  this
                );
                function j() {
                  if (m.length === 0) k(c.complete) && c.complete();
                  else {
                    var F,
                      H,
                      X,
                      P,
                      M = m[0];
                    if (k(c.before)) {
                      var C = c.before(M.file, M.inputElem);
                      if (typeof C == "object") {
                        if (C.action === "abort")
                          return (
                            (F = "AbortError"),
                            (H = M.file),
                            (X = M.inputElem),
                            (P = C.reason),
                            void (k(c.error) && c.error({ name: F }, H, X, P))
                          );
                        if (C.action === "skip") return void x();
                        typeof C.config == "object" &&
                          (M.instanceConfig = re.extend(
                            M.instanceConfig,
                            C.config,
                          ));
                      } else if (C === "skip") return void x();
                    }
                    var b = M.instanceConfig.complete;
                    (M.instanceConfig.complete = function (Q) {
                      k(b) && b(Q, M.file, M.inputElem), x();
                    }),
                      L.parse(M.file, M.instanceConfig);
                  }
                }
                function x() {
                  m.splice(0, 1), j();
                }
              }),
            Le &&
              (G.onmessage = function (c) {
                (c = c.data),
                  L.WORKER_ID === void 0 && c && (L.WORKER_ID = c.workerId),
                  typeof c.input == "string"
                    ? G.postMessage({
                        workerId: L.WORKER_ID,
                        results: L.parse(c.input, c.config),
                        finished: !0,
                      })
                    : ((G.File && c.input instanceof File) ||
                        c.input instanceof Object) &&
                      (c = L.parse(c.input, c.config)) &&
                      G.postMessage({
                        workerId: L.WORKER_ID,
                        results: c,
                        finished: !0,
                      });
              }),
            ((We.prototype = Object.create(he.prototype)).constructor = We),
            ((Re.prototype = Object.create(he.prototype)).constructor = Re),
            ((I.prototype = Object.create(I.prototype)).constructor = I),
            ((W.prototype = Object.create(he.prototype)).constructor = W),
            L
          );
        });
      },
    },
  ]);
})();
