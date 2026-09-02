/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [73810],
    {
      95039: (ur, qr, f) => {
        f.d(qr, { fH: () => M, nW: () => s });
        const Dr = null,
          M = 0,
          s = 1;
      },
      6740: (ur, qr, f) => {
        f.d(qr, {
          kX: () => Tr,
          iP: () => P,
          R9: () => F,
          tS: () => X,
          qu: () => H,
          Ev: () => D,
          Qc: () => Q,
          TY: () => M,
          SS: () => s,
          wv: () => m,
          O6: () => Dr,
        });
        var Dr = {};
        f.r(Dr), f.d(Dr, { w$: () => W });
        var M = {};
        f.r(M),
          f.d(M, {
            bH: () => c,
            x0: () => U,
            Xs: () => I,
            $Y: () => v,
            sF: () => Er,
            ig: () => n,
            WM: () => x,
            oP: () => O,
          });
        var s = {};
        f.r(s), f.d(s, { Ql: () => E, w0: () => z, FB: () => $, tS: () => L });
        var m = {};
        f.r(m), f.d(m, { BH: () => vr });
        var B = f(80613),
          t = f.n(B),
          i = f(75245),
          Y = f(35038),
          Gr = f(95039),
          pr = f(65329);
        const ii = 0,
          J = 1,
          W = 2,
          Z = 3,
          K = 4,
          O = 0,
          x = 1,
          I = 2,
          c = 3,
          U = 4,
          v = 5,
          n = 6,
          Er = 7,
          $ = 0,
          z = 1,
          L = 2,
          E = 3,
          N = 0,
          Xr = 1,
          kr = 2,
          Lr = 3,
          l = 4,
          e = 5,
          d = 6,
          hr = 7,
          Rr = 0,
          Ar = 1,
          Cr = 2,
          or = 3,
          nr = 4,
          vr = 5,
          $r = 6,
          bi = 99;
        function si(g) {
          return "unknown ECaptchaAnnotation ( " + g + " )";
        }
        function gi(g) {
          return "unknown EAuthSessionSecurityHistory ( " + g + " )";
        }
        function Mi(g) {
          return "unknown EAuthenticationType ( " + g + " )";
        }
        function di(g) {
          return "unknown EAuthSessionGuardType ( " + g + " )";
        }
        function wi(g) {
          return "unknown EAuthTokenPlatformType ( " + g + " )";
        }
        function yi(g) {
          return "unknown EAuthTokenAppType ( " + g + " )";
        }
        function fi(g) {
          return "unknown ETokenRenewalType ( " + g + " )";
        }
        function zi(g) {
          return "unknown EAuthTokenRevokeAction ( " + g + " )";
        }
        function ji(g) {
          return "unknown EAuthTokenState ( " + g + " )";
        }
        function Wi(g) {
          return "unknown ECaptchaUsage ( " + g + " )";
        }
        function Oi(g) {
          return "unknown ECaptchaType ( " + g + " )";
        }
        function xi(g) {
          return "unknown ECaptchaDifficulty ( " + g + " )";
        }
        function Ii(g) {
          return "unknown ERiskLevel ( " + g + " )";
        }
        function ci(g) {
          return "unknown ETokenRiskFactor ( " + g + " )";
        }
        function Ui(g) {
          return "unknown EConfirmationState ( " + g + " )";
        }
        function vi(g) {
          return "unknown EConfirmationRequestType ( " + g + " )";
        }
        class H extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              H.prototype.account_name || i.Sg(H.M()),
              B.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              H.sm_m ||
                (H.sm_m = {
                  proto: H,
                  fields: {
                    account_name: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              H.sm_m
            );
          }
          static MBF() {
            return H.sm_mbf || (H.sm_mbf = i.w0(H.M())), H.sm_mbf;
          }
          toObject(r = !1) {
            return H.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(H.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(H.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              b = new H();
            return H.deserializeBinaryFromReader(b, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(H.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return H.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(H.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              H.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_GetPasswordRSAPublicKey_Request";
          }
        }
        class p extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              p.prototype.publickey_mod || i.Sg(p.M()),
              B.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              p.sm_m ||
                (p.sm_m = {
                  proto: p,
                  fields: {
                    publickey_mod: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    publickey_exp: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    timestamp: {
                      n: 3,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              p.sm_m
            );
          }
          static MBF() {
            return p.sm_mbf || (p.sm_mbf = i.w0(p.M())), p.sm_mbf;
          }
          toObject(r = !1) {
            return p.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(p.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(p.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              b = new p();
            return p.deserializeBinaryFromReader(b, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(p.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return p.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(p.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              p.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_GetPasswordRSAPublicKey_Response";
          }
        }
        class X extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              X.prototype.device_friendly_name || i.Sg(X.M()),
              B.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              X.sm_m ||
                (X.sm_m = {
                  proto: X,
                  fields: {
                    device_friendly_name: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    platform_type: {
                      n: 2,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    os_type: { n: 3, br: i.qM.readInt32, bw: i.gp.writeInt32 },
                    gaming_device_type: {
                      n: 4,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    client_count: {
                      n: 5,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    machine_id: {
                      n: 6,
                      br: i.qM.readBytes,
                      bw: i.gp.writeBytes,
                    },
                    app_type: { n: 7, br: i.qM.readEnum, bw: i.gp.writeEnum },
                  },
                }),
              X.sm_m
            );
          }
          static MBF() {
            return X.sm_mbf || (X.sm_mbf = i.w0(X.M())), X.sm_mbf;
          }
          toObject(r = !1) {
            return X.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(X.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(X.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              b = new X();
            return X.deserializeBinaryFromReader(b, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(X.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return X.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(X.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              X.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_DeviceDetails";
          }
        }
        class S extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              S.prototype.confirmation_type || i.Sg(S.M()),
              B.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              S.sm_m ||
                (S.sm_m = {
                  proto: S,
                  fields: {
                    confirmation_type: {
                      n: 1,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    associated_message: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              S.sm_m
            );
          }
          static MBF() {
            return S.sm_mbf || (S.sm_mbf = i.w0(S.M())), S.sm_mbf;
          }
          toObject(r = !1) {
            return S.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(S.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(S.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              b = new S();
            return S.deserializeBinaryFromReader(b, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(S.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return S.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(S.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              S.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_AllowedConfirmation";
          }
        }
        class F extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              F.prototype.device_friendly_name || i.Sg(F.M()),
              B.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              F.sm_m ||
                (F.sm_m = {
                  proto: F,
                  fields: {
                    device_friendly_name: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    platform_type: {
                      n: 2,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    device_details: { n: 3, c: X },
                    website_id: {
                      n: 4,
                      d: "Unknown",
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              F.sm_m
            );
          }
          static MBF() {
            return F.sm_mbf || (F.sm_mbf = i.w0(F.M())), F.sm_mbf;
          }
          toObject(r = !1) {
            return F.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(F.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(F.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              b = new F();
            return F.deserializeBinaryFromReader(b, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(F.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return F.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(F.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              F.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_BeginAuthSessionViaQR_Request";
          }
        }
        class k extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              k.prototype.client_id || i.Sg(k.M()),
              B.Message.initialize(this, r, 0, -1, [5], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              k.sm_m ||
                (k.sm_m = {
                  proto: k,
                  fields: {
                    client_id: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    challenge_url: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    request_id: {
                      n: 3,
                      br: i.qM.readBytes,
                      bw: i.gp.writeBytes,
                    },
                    interval: { n: 4, br: i.qM.readFloat, bw: i.gp.writeFloat },
                    allowed_confirmations: { n: 5, c: S, r: !0, q: !0 },
                    version: { n: 6, br: i.qM.readInt32, bw: i.gp.writeInt32 },
                  },
                }),
              k.sm_m
            );
          }
          static MBF() {
            return k.sm_mbf || (k.sm_mbf = i.w0(k.M())), k.sm_mbf;
          }
          toObject(r = !1) {
            return k.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(k.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(k.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              b = new k();
            return k.deserializeBinaryFromReader(b, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(k.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return k.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(k.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              k.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_BeginAuthSessionViaQR_Response";
          }
        }
        class P extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              P.prototype.device_friendly_name || i.Sg(P.M()),
              B.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              P.sm_m ||
                (P.sm_m = {
                  proto: P,
                  fields: {
                    device_friendly_name: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    account_name: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    encrypted_password: {
                      n: 3,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    encryption_timestamp: {
                      n: 4,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    remember_login: {
                      n: 5,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    platform_type: {
                      n: 6,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    persistence: {
                      n: 7,
                      d: Gr.nW,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    website_id: {
                      n: 8,
                      d: "Unknown",
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    device_details: { n: 9, c: X },
                    guard_data: {
                      n: 10,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    language: {
                      n: 11,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    qos_level: {
                      n: 12,
                      d: 2,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                  },
                }),
              P.sm_m
            );
          }
          static MBF() {
            return P.sm_mbf || (P.sm_mbf = i.w0(P.M())), P.sm_mbf;
          }
          toObject(r = !1) {
            return P.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(P.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(P.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              b = new P();
            return P.deserializeBinaryFromReader(b, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(P.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return P.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(P.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              P.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_BeginAuthSessionViaCredentials_Request";
          }
        }
        class T extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              T.prototype.client_id || i.Sg(T.M()),
              B.Message.initialize(this, r, 0, -1, [4], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              T.sm_m ||
                (T.sm_m = {
                  proto: T,
                  fields: {
                    client_id: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    request_id: {
                      n: 2,
                      br: i.qM.readBytes,
                      bw: i.gp.writeBytes,
                    },
                    interval: { n: 3, br: i.qM.readFloat, bw: i.gp.writeFloat },
                    allowed_confirmations: { n: 4, c: S, r: !0, q: !0 },
                    steamid: {
                      n: 5,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    weak_token: {
                      n: 6,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    agreement_session_url: {
                      n: 7,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    extended_error_message: {
                      n: 8,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              T.sm_m
            );
          }
          static MBF() {
            return T.sm_mbf || (T.sm_mbf = i.w0(T.M())), T.sm_mbf;
          }
          toObject(r = !1) {
            return T.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(T.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(T.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              b = new T();
            return T.deserializeBinaryFromReader(b, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(T.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return T.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(T.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              T.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_BeginAuthSessionViaCredentials_Response";
          }
        }
        class D extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              D.prototype.client_id || i.Sg(D.M()),
              B.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              D.sm_m ||
                (D.sm_m = {
                  proto: D,
                  fields: {
                    client_id: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    request_id: {
                      n: 2,
                      br: i.qM.readBytes,
                      bw: i.gp.writeBytes,
                    },
                    token_to_revoke: {
                      n: 3,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                  },
                }),
              D.sm_m
            );
          }
          static MBF() {
            return D.sm_mbf || (D.sm_mbf = i.w0(D.M())), D.sm_mbf;
          }
          toObject(r = !1) {
            return D.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(D.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(D.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              b = new D();
            return D.deserializeBinaryFromReader(b, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(D.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return D.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(D.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              D.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_PollAuthSessionStatus_Request";
          }
        }
        class u extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              u.prototype.new_client_id || i.Sg(u.M()),
              B.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              u.sm_m ||
                (u.sm_m = {
                  proto: u,
                  fields: {
                    new_client_id: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    new_challenge_url: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    refresh_token: {
                      n: 3,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    access_token: {
                      n: 4,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    had_remote_interaction: {
                      n: 5,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    account_name: {
                      n: 6,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    new_guard_data: {
                      n: 7,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    agreement_session_url: {
                      n: 8,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              u.sm_m
            );
          }
          static MBF() {
            return u.sm_mbf || (u.sm_mbf = i.w0(u.M())), u.sm_mbf;
          }
          toObject(r = !1) {
            return u.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(u.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(u.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              b = new u();
            return u.deserializeBinaryFromReader(b, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(u.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return u.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(u.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              u.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_PollAuthSessionStatus_Response";
          }
        }
        class h extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              h.prototype.client_id || i.Sg(h.M()),
              B.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              h.sm_m ||
                (h.sm_m = {
                  proto: h,
                  fields: {
                    client_id: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              h.sm_m
            );
          }
          static MBF() {
            return h.sm_mbf || (h.sm_mbf = i.w0(h.M())), h.sm_mbf;
          }
          toObject(r = !1) {
            return h.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(h.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(h.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              b = new h();
            return h.deserializeBinaryFromReader(b, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(h.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return h.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(h.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              h.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_GetAuthSessionInfo_Request";
          }
        }
        class R extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              R.prototype.ip || i.Sg(R.M()),
              B.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              R.sm_m ||
                (R.sm_m = {
                  proto: R,
                  fields: {
                    ip: { n: 1, br: i.qM.readString, bw: i.gp.writeString },
                    geoloc: { n: 2, br: i.qM.readString, bw: i.gp.writeString },
                    city: { n: 3, br: i.qM.readString, bw: i.gp.writeString },
                    state: { n: 4, br: i.qM.readString, bw: i.gp.writeString },
                    country: {
                      n: 5,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    platform_type: {
                      n: 6,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    device_friendly_name: {
                      n: 7,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    version: { n: 8, br: i.qM.readInt32, bw: i.gp.writeInt32 },
                    login_history: {
                      n: 9,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    requestor_location_mismatch: {
                      n: 10,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    high_usage_login: {
                      n: 11,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    requested_persistence: {
                      n: 12,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    device_trust: {
                      n: 13,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                    app_type: { n: 14, br: i.qM.readEnum, bw: i.gp.writeEnum },
                  },
                }),
              R.sm_m
            );
          }
          static MBF() {
            return R.sm_mbf || (R.sm_mbf = i.w0(R.M())), R.sm_mbf;
          }
          toObject(r = !1) {
            return R.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(R.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(R.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              b = new R();
            return R.deserializeBinaryFromReader(b, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(R.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return R.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(R.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              R.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_GetAuthSessionInfo_Response";
          }
        }
        class A extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              A.prototype.client_id || i.Sg(A.M()),
              B.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              A.sm_m ||
                (A.sm_m = {
                  proto: A,
                  fields: {
                    client_id: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    language: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              A.sm_m
            );
          }
          static MBF() {
            return A.sm_mbf || (A.sm_mbf = i.w0(A.M())), A.sm_mbf;
          }
          toObject(r = !1) {
            return A.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(A.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(A.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              b = new A();
            return A.deserializeBinaryFromReader(b, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(A.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return A.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(A.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              A.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_GetAuthSessionRiskInfo_Request";
          }
        }
        class C extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              C.prototype.location_confirmer || i.Sg(C.M()),
              B.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              C.sm_m ||
                (C.sm_m = {
                  proto: C,
                  fields: {
                    location_confirmer: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    location_requestor: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    location_other: {
                      n: 3,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    platform_type: {
                      n: 4,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                  },
                }),
              C.sm_m
            );
          }
          static MBF() {
            return C.sm_mbf || (C.sm_mbf = i.w0(C.M())), C.sm_mbf;
          }
          toObject(r = !1) {
            return C.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(C.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(C.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              b = new C();
            return C.deserializeBinaryFromReader(b, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(C.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return C.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(C.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              C.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_GetAuthSessionRiskInfo_Response";
          }
        }
        class o extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              o.prototype.client_id || i.Sg(o.M()),
              B.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              o.sm_m ||
                (o.sm_m = {
                  proto: o,
                  fields: {
                    client_id: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    results: { n: 2, c: _ },
                    selected_action: {
                      n: 3,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    did_confirm_login: {
                      n: 4,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                  },
                }),
              o.sm_m
            );
          }
          static MBF() {
            return o.sm_mbf || (o.sm_mbf = i.w0(o.M())), o.sm_mbf;
          }
          toObject(r = !1) {
            return o.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(o.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(o.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              b = new o();
            return o.deserializeBinaryFromReader(b, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(o.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return o.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(o.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              o.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_NotifyRiskQuizResults_Notification";
          }
        }
        class _ extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              _.prototype.platform || i.Sg(_.M()),
              B.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    platform: { n: 1, br: i.qM.readBool, bw: i.gp.writeBool },
                    location: { n: 2, br: i.qM.readBool, bw: i.gp.writeBool },
                    action: { n: 3, br: i.qM.readBool, bw: i.gp.writeBool },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = i.w0(_.M())), _.sm_mbf;
          }
          toObject(r = !1) {
            return _.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(_.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(_.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              b = new _();
            return _.deserializeBinaryFromReader(b, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(_.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return _.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(_.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_NotifyRiskQuizResults_Notification_RiskQuizResults";
          }
        }
        class Kr extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), B.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Kr.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new Kr();
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              b = new Kr();
            return Kr.deserializeBinaryFromReader(b, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Kr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Kr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_GetAuthSessionsForAccount_Request";
          }
        }
        class rr extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              rr.prototype.client_ids || i.Sg(rr.M()),
              B.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              rr.sm_m ||
                (rr.sm_m = {
                  proto: rr,
                  fields: {
                    client_ids: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint64String,
                      pbr: i.qM.readPackedUint64String,
                      bw: i.gp.writeRepeatedUint64String,
                    },
                  },
                }),
              rr.sm_m
            );
          }
          static MBF() {
            return rr.sm_mbf || (rr.sm_mbf = i.w0(rr.M())), rr.sm_mbf;
          }
          toObject(r = !1) {
            return rr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(rr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(rr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              b = new rr();
            return rr.deserializeBinaryFromReader(b, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(rr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return rr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(rr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              rr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_GetAuthSessionsForAccount_Response";
          }
        }
        class ir extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ir.prototype.version || i.Sg(ir.M()),
              B.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ir.sm_m ||
                (ir.sm_m = {
                  proto: ir,
                  fields: {
                    version: { n: 1, br: i.qM.readInt32, bw: i.gp.writeInt32 },
                    client_id: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    steamid: {
                      n: 3,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    signature: {
                      n: 4,
                      br: i.qM.readBytes,
                      bw: i.gp.writeBytes,
                    },
                    confirm: {
                      n: 5,
                      d: !1,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    persistence: {
                      n: 6,
                      d: Gr.nW,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                  },
                }),
              ir.sm_m
            );
          }
          static MBF() {
            return ir.sm_mbf || (ir.sm_mbf = i.w0(ir.M())), ir.sm_mbf;
          }
          toObject(r = !1) {
            return ir.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(ir.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(ir.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              b = new ir();
            return ir.deserializeBinaryFromReader(b, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(ir.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return ir.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(ir.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              ir.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request";
          }
        }
        class Nr extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), B.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Nr.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new Nr();
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              b = new Nr();
            return Nr.deserializeBinaryFromReader(b, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Nr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Nr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response";
          }
        }
        class Q extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Q.prototype.client_id || i.Sg(Q.M()),
              B.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Q.sm_m ||
                (Q.sm_m = {
                  proto: Q,
                  fields: {
                    client_id: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    steamid: {
                      n: 2,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    code: { n: 3, br: i.qM.readString, bw: i.gp.writeString },
                    code_type: { n: 4, br: i.qM.readEnum, bw: i.gp.writeEnum },
                  },
                }),
              Q.sm_m
            );
          }
          static MBF() {
            return Q.sm_mbf || (Q.sm_mbf = i.w0(Q.M())), Q.sm_mbf;
          }
          toObject(r = !1) {
            return Q.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Q.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Q.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              b = new Q();
            return Q.deserializeBinaryFromReader(b, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Q.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Q.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Q.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Q.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request";
          }
        }
        class ar extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ar.prototype.agreement_session_url || i.Sg(ar.M()),
              B.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ar.sm_m ||
                (ar.sm_m = {
                  proto: ar,
                  fields: {
                    agreement_session_url: {
                      n: 7,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              ar.sm_m
            );
          }
          static MBF() {
            return ar.sm_mbf || (ar.sm_mbf = i.w0(ar.M())), ar.sm_mbf;
          }
          toObject(r = !1) {
            return ar.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(ar.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(ar.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              b = new ar();
            return ar.deserializeBinaryFromReader(b, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(ar.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return ar.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(ar.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              ar.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response";
          }
        }
        class lr extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              lr.prototype.refresh_token || i.Sg(lr.M()),
              B.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              lr.sm_m ||
                (lr.sm_m = {
                  proto: lr,
                  fields: {
                    refresh_token: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    steamid: {
                      n: 2,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    renewal_type: {
                      n: 3,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                  },
                }),
              lr.sm_m
            );
          }
          static MBF() {
            return lr.sm_mbf || (lr.sm_mbf = i.w0(lr.M())), lr.sm_mbf;
          }
          toObject(r = !1) {
            return lr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(lr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(lr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              b = new lr();
            return lr.deserializeBinaryFromReader(b, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(lr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return lr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(lr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              lr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_AccessToken_GenerateForApp_Request";
          }
        }
        class mr extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              mr.prototype.access_token || i.Sg(mr.M()),
              B.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              mr.sm_m ||
                (mr.sm_m = {
                  proto: mr,
                  fields: {
                    access_token: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    refresh_token: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              mr.sm_m
            );
          }
          static MBF() {
            return mr.sm_mbf || (mr.sm_mbf = i.w0(mr.M())), mr.sm_mbf;
          }
          toObject(r = !1) {
            return mr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(mr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(mr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              b = new mr();
            return mr.deserializeBinaryFromReader(b, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(mr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return mr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(mr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              mr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_AccessToken_GenerateForApp_Response";
          }
        }
        class tr extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              tr.prototype.include_revoked || i.Sg(tr.M()),
              B.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              tr.sm_m ||
                (tr.sm_m = {
                  proto: tr,
                  fields: {
                    include_revoked: {
                      n: 1,
                      d: !1,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                  },
                }),
              tr.sm_m
            );
          }
          static MBF() {
            return tr.sm_mbf || (tr.sm_mbf = i.w0(tr.M())), tr.sm_mbf;
          }
          toObject(r = !1) {
            return tr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(tr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(tr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              b = new tr();
            return tr.deserializeBinaryFromReader(b, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(tr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return tr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(tr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              tr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_RefreshToken_Enumerate_Request";
          }
        }
        class er extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              er.prototype.refresh_tokens || i.Sg(er.M()),
              B.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              er.sm_m ||
                (er.sm_m = {
                  proto: er,
                  fields: {
                    refresh_tokens: { n: 1, c: Br, r: !0, q: !0 },
                    requesting_token: {
                      n: 2,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                  },
                }),
              er.sm_m
            );
          }
          static MBF() {
            return er.sm_mbf || (er.sm_mbf = i.w0(er.M())), er.sm_mbf;
          }
          toObject(r = !1) {
            return er.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(er.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(er.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              b = new er();
            return er.deserializeBinaryFromReader(b, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(er.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return er.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(er.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              er.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_RefreshToken_Enumerate_Response";
          }
        }
        class V extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              V.prototype.time || i.Sg(V.M()),
              B.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              V.sm_m ||
                (V.sm_m = {
                  proto: V,
                  fields: {
                    time: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    ip: { n: 2, c: pr.kK },
                    locale: { n: 3, br: i.qM.readString, bw: i.gp.writeString },
                    country: {
                      n: 4,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    state: { n: 5, br: i.qM.readString, bw: i.gp.writeString },
                    city: { n: 6, br: i.qM.readString, bw: i.gp.writeString },
                  },
                }),
              V.sm_m
            );
          }
          static MBF() {
            return V.sm_mbf || (V.sm_mbf = i.w0(V.M())), V.sm_mbf;
          }
          toObject(r = !1) {
            return V.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(V.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(V.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              b = new V();
            return V.deserializeBinaryFromReader(b, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(V.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return V.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(V.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              V.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_RefreshToken_Enumerate_Response_TokenUsageEvent";
          }
        }
        class Br extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Br.prototype.token_id || i.Sg(Br.M()),
              B.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Br.sm_m ||
                (Br.sm_m = {
                  proto: Br,
                  fields: {
                    token_id: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    token_description: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    time_updated: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    platform_type: {
                      n: 4,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    logged_in: { n: 5, br: i.qM.readBool, bw: i.gp.writeBool },
                    os_platform: {
                      n: 6,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    auth_type: {
                      n: 7,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    gaming_device_type: {
                      n: 8,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    first_seen: { n: 9, c: V },
                    last_seen: { n: 10, c: V },
                    os_type: { n: 11, br: i.qM.readInt32, bw: i.gp.writeInt32 },
                    authentication_type: {
                      n: 12,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    effective_token_state: {
                      n: 13,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                  },
                }),
              Br.sm_m
            );
          }
          static MBF() {
            return Br.sm_mbf || (Br.sm_mbf = i.w0(Br.M())), Br.sm_mbf;
          }
          toObject(r = !1) {
            return Br.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Br.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Br.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              b = new Br();
            return Br.deserializeBinaryFromReader(b, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Br.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Br.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Br.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Br.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_RefreshToken_Enumerate_Response_RefreshTokenDescription";
          }
        }
        class br extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              br.prototype.token || i.Sg(br.M()),
              B.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              br.sm_m ||
                (br.sm_m = {
                  proto: br,
                  fields: {
                    token: { n: 1, br: i.qM.readString, bw: i.gp.writeString },
                    revoke_action: {
                      n: 2,
                      d: Xr,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                  },
                }),
              br.sm_m
            );
          }
          static MBF() {
            return br.sm_mbf || (br.sm_mbf = i.w0(br.M())), br.sm_mbf;
          }
          toObject(r = !1) {
            return br.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(br.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(br.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              b = new br();
            return br.deserializeBinaryFromReader(b, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(br.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return br.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(br.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              br.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_Token_Revoke_Request";
          }
        }
        class Hr extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), B.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Hr.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new Hr();
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              b = new Hr();
            return Hr.deserializeBinaryFromReader(b, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Hr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Hr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_Token_Revoke_Response";
          }
        }
        class sr extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              sr.prototype.token_id || i.Sg(sr.M()),
              B.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              sr.sm_m ||
                (sr.sm_m = {
                  proto: sr,
                  fields: {
                    token_id: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    steamid: {
                      n: 2,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    revoke_action: {
                      n: 3,
                      d: Xr,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    signature: {
                      n: 4,
                      br: i.qM.readBytes,
                      bw: i.gp.writeBytes,
                    },
                  },
                }),
              sr.sm_m
            );
          }
          static MBF() {
            return sr.sm_mbf || (sr.sm_mbf = i.w0(sr.M())), sr.sm_mbf;
          }
          toObject(r = !1) {
            return sr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(sr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(sr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              b = new sr();
            return sr.deserializeBinaryFromReader(b, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(sr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return sr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(sr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              sr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_RefreshToken_Revoke_Request";
          }
        }
        class Sr extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), B.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Sr.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new Sr();
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              b = new Sr();
            return Sr.deserializeBinaryFromReader(b, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Sr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Sr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_RefreshToken_Revoke_Response";
          }
        }
        class q extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              q.prototype.token_id || i.Sg(q.M()),
              B.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              q.sm_m ||
                (q.sm_m = {
                  proto: q,
                  fields: {
                    token_id: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    token_description: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    time_updated: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    platform_type: {
                      n: 4,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    token_state: {
                      n: 5,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    owner_steamid: {
                      n: 6,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    os_platform: {
                      n: 7,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    os_type: { n: 8, br: i.qM.readInt32, bw: i.gp.writeInt32 },
                    auth_type: {
                      n: 9,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    gaming_device_type: {
                      n: 10,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    first_seen: { n: 11, c: G },
                    last_seen: { n: 12, c: G },
                  },
                }),
              q.sm_m
            );
          }
          static MBF() {
            return q.sm_mbf || (q.sm_mbf = i.w0(q.M())), q.sm_mbf;
          }
          toObject(r = !1) {
            return q.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(q.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(q.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              b = new q();
            return q.deserializeBinaryFromReader(b, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(q.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return q.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(q.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              q.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSupportRefreshTokenDescription";
          }
        }
        class G extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              G.prototype.time || i.Sg(G.M()),
              B.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              G.sm_m ||
                (G.sm_m = {
                  proto: G,
                  fields: {
                    time: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    ip: { n: 2, c: pr.kK },
                    country: {
                      n: 3,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    state: { n: 4, br: i.qM.readString, bw: i.gp.writeString },
                    city: { n: 5, br: i.qM.readString, bw: i.gp.writeString },
                  },
                }),
              G.sm_m
            );
          }
          static MBF() {
            return G.sm_mbf || (G.sm_mbf = i.w0(G.M())), G.sm_mbf;
          }
          toObject(r = !1) {
            return G.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(G.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(G.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              b = new G();
            return G.deserializeBinaryFromReader(b, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(G.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return G.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(G.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              G.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSupportRefreshTokenDescription_TokenUsageEvent";
          }
        }
        class gr extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              gr.prototype.action || i.Sg(gr.M()),
              B.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              gr.sm_m ||
                (gr.sm_m = {
                  proto: gr,
                  fields: {
                    action: { n: 1, br: i.qM.readInt32, bw: i.gp.writeInt32 },
                    time: { n: 2, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    ip: { n: 3, c: pr.kK },
                    actor: {
                      n: 4,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                  },
                }),
              gr.sm_m
            );
          }
          static MBF() {
            return gr.sm_mbf || (gr.sm_mbf = i.w0(gr.M())), gr.sm_mbf;
          }
          toObject(r = !1) {
            return gr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(gr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(gr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              b = new gr();
            return gr.deserializeBinaryFromReader(b, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(gr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return gr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(gr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              gr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSupportRefreshTokenAudit";
          }
        }
        class Mr extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Mr.prototype.steamid || i.Sg(Mr.M()),
              B.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Mr.sm_m ||
                (Mr.sm_m = {
                  proto: Mr,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    include_revoked_tokens: {
                      n: 2,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                  },
                }),
              Mr.sm_m
            );
          }
          static MBF() {
            return Mr.sm_mbf || (Mr.sm_mbf = i.w0(Mr.M())), Mr.sm_mbf;
          }
          toObject(r = !1) {
            return Mr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Mr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Mr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              b = new Mr();
            return Mr.deserializeBinaryFromReader(b, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Mr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Mr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Mr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Mr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthenticationSupport_QueryRefreshTokensByAccount_Request";
          }
        }
        class dr extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              dr.prototype.refresh_tokens || i.Sg(dr.M()),
              B.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              dr.sm_m ||
                (dr.sm_m = {
                  proto: dr,
                  fields: {
                    refresh_tokens: { n: 1, c: q, r: !0, q: !0 },
                    last_token_reset: {
                      n: 2,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                  },
                }),
              dr.sm_m
            );
          }
          static MBF() {
            return dr.sm_mbf || (dr.sm_mbf = i.w0(dr.M())), dr.sm_mbf;
          }
          toObject(r = !1) {
            return dr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(dr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(dr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              b = new dr();
            return dr.deserializeBinaryFromReader(b, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(dr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return dr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(dr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              dr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthenticationSupport_QueryRefreshTokensByAccount_Response";
          }
        }
        class wr extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              wr.prototype.token_id || i.Sg(wr.M()),
              B.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              wr.sm_m ||
                (wr.sm_m = {
                  proto: wr,
                  fields: {
                    token_id: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                  },
                }),
              wr.sm_m
            );
          }
          static MBF() {
            return wr.sm_mbf || (wr.sm_mbf = i.w0(wr.M())), wr.sm_mbf;
          }
          toObject(r = !1) {
            return wr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(wr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(wr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              b = new wr();
            return wr.deserializeBinaryFromReader(b, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(wr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return wr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(wr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              wr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthenticationSupport_QueryRefreshTokenByID_Request";
          }
        }
        class yr extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              yr.prototype.refresh_tokens || i.Sg(yr.M()),
              B.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              yr.sm_m ||
                (yr.sm_m = {
                  proto: yr,
                  fields: { refresh_tokens: { n: 1, c: q, r: !0, q: !0 } },
                }),
              yr.sm_m
            );
          }
          static MBF() {
            return yr.sm_mbf || (yr.sm_mbf = i.w0(yr.M())), yr.sm_mbf;
          }
          toObject(r = !1) {
            return yr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(yr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(yr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              b = new yr();
            return yr.deserializeBinaryFromReader(b, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(yr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return yr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(yr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              yr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthenticationSupport_QueryRefreshTokenByID_Response";
          }
        }
        class fr extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              fr.prototype.token_id || i.Sg(fr.M()),
              B.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              fr.sm_m ||
                (fr.sm_m = {
                  proto: fr,
                  fields: {
                    token_id: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    steamid: {
                      n: 2,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                  },
                }),
              fr.sm_m
            );
          }
          static MBF() {
            return fr.sm_mbf || (fr.sm_mbf = i.w0(fr.M())), fr.sm_mbf;
          }
          toObject(r = !1) {
            return fr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(fr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(fr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              b = new fr();
            return fr.deserializeBinaryFromReader(b, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(fr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return fr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(fr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              fr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthenticationSupport_RevokeToken_Request";
          }
        }
        class Fr extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), B.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Fr.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new Fr();
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              b = new Fr();
            return Fr.deserializeBinaryFromReader(b, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Fr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Fr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthenticationSupport_RevokeToken_Response";
          }
        }
        class zr extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              zr.prototype.token_id || i.Sg(zr.M()),
              B.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              zr.sm_m ||
                (zr.sm_m = {
                  proto: zr,
                  fields: {
                    token_id: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                  },
                }),
              zr.sm_m
            );
          }
          static MBF() {
            return zr.sm_mbf || (zr.sm_mbf = i.w0(zr.M())), zr.sm_mbf;
          }
          toObject(r = !1) {
            return zr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(zr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(zr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              b = new zr();
            return zr.deserializeBinaryFromReader(b, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(zr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return zr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(zr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              zr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthenticationSupport_GetTokenHistory_Request";
          }
        }
        class jr extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              jr.prototype.history || i.Sg(jr.M()),
              B.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              jr.sm_m ||
                (jr.sm_m = {
                  proto: jr,
                  fields: { history: { n: 1, c: gr, r: !0, q: !0 } },
                }),
              jr.sm_m
            );
          }
          static MBF() {
            return jr.sm_mbf || (jr.sm_mbf = i.w0(jr.M())), jr.sm_mbf;
          }
          toObject(r = !1) {
            return jr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(jr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(jr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              b = new jr();
            return jr.deserializeBinaryFromReader(b, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(jr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return jr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(jr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              jr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthenticationSupport_GetTokenHistory_Response";
          }
        }
        class Wr extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Wr.prototype.steamid || i.Sg(Wr.M()),
              B.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Wr.sm_m ||
                (Wr.sm_m = {
                  proto: Wr,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    token_id: {
                      n: 2,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                  },
                }),
              Wr.sm_m
            );
          }
          static MBF() {
            return Wr.sm_mbf || (Wr.sm_mbf = i.w0(Wr.M())), Wr.sm_mbf;
          }
          toObject(r = !1) {
            return Wr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Wr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Wr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              b = new Wr();
            return Wr.deserializeBinaryFromReader(b, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Wr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Wr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Wr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Wr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthenticationSupport_MarkTokenCompromised_Request";
          }
        }
        class Pr extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), B.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Pr.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new Pr();
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              b = new Pr();
            return Pr.deserializeBinaryFromReader(b, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Pr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Pr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthenticationSupport_MarkTokenCompromised_Response";
          }
        }
        class Or extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Or.prototype.platform || i.Sg(Or.M()),
              B.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Or.sm_m ||
                (Or.sm_m = {
                  proto: Or,
                  fields: {
                    platform: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    appid: { n: 2, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                  },
                }),
              Or.sm_m
            );
          }
          static MBF() {
            return Or.sm_mbf || (Or.sm_mbf = i.w0(Or.M())), Or.sm_mbf;
          }
          toObject(r = !1) {
            return Or.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Or.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Or.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              b = new Or();
            return Or.deserializeBinaryFromReader(b, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Or.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Or.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Or.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Or.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloudGaming_CreateNonce_Request";
          }
        }
        class xr extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              xr.prototype.nonce || i.Sg(xr.M()),
              B.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              xr.sm_m ||
                (xr.sm_m = {
                  proto: xr,
                  fields: {
                    nonce: { n: 1, br: i.qM.readString, bw: i.gp.writeString },
                    expiry: { n: 2, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                  },
                }),
              xr.sm_m
            );
          }
          static MBF() {
            return xr.sm_mbf || (xr.sm_mbf = i.w0(xr.M())), xr.sm_mbf;
          }
          toObject(r = !1) {
            return xr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(xr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(xr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              b = new xr();
            return xr.deserializeBinaryFromReader(b, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(xr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return xr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(xr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              xr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloudGaming_CreateNonce_Response";
          }
        }
        class Ir extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ir.prototype.appid || i.Sg(Ir.M()),
              B.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ir.sm_m ||
                (Ir.sm_m = {
                  proto: Ir,
                  fields: {
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    minutes_remaining: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              Ir.sm_m
            );
          }
          static MBF() {
            return Ir.sm_mbf || (Ir.sm_mbf = i.w0(Ir.M())), Ir.sm_mbf;
          }
          toObject(r = !1) {
            return Ir.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Ir.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Ir.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              b = new Ir();
            return Ir.deserializeBinaryFromReader(b, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Ir.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Ir.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Ir.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Ir.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloudGaming_TimeRemaining";
          }
        }
        class cr extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              cr.prototype.platform || i.Sg(cr.M()),
              B.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              cr.sm_m ||
                (cr.sm_m = {
                  proto: cr,
                  fields: {
                    platform: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    appid_list: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint32,
                      pbr: i.qM.readPackedUint32,
                      bw: i.gp.writeRepeatedUint32,
                    },
                  },
                }),
              cr.sm_m
            );
          }
          static MBF() {
            return cr.sm_mbf || (cr.sm_mbf = i.w0(cr.M())), cr.sm_mbf;
          }
          toObject(r = !1) {
            return cr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(cr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(cr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              b = new cr();
            return cr.deserializeBinaryFromReader(b, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(cr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return cr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(cr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              cr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloudGaming_GetTimeRemaining_Request";
          }
        }
        class Ur extends B.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ur.prototype.entries || i.Sg(Ur.M()),
              B.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ur.sm_m ||
                (Ur.sm_m = {
                  proto: Ur,
                  fields: { entries: { n: 2, c: Ir, r: !0, q: !0 } },
                }),
              Ur.sm_m
            );
          }
          static MBF() {
            return Ur.sm_mbf || (Ur.sm_mbf = i.w0(Ur.M())), Ur.sm_mbf;
          }
          toObject(r = !1) {
            return Ur.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Ur.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Ur.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              b = new Ur();
            return Ur.deserializeBinaryFromReader(b, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Ur.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Ur.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Ur.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Ur.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloudGaming_GetTimeRemaining_Response";
          }
        }
        var Tr;
        ((g) => {
          function r(w, y, j) {
            return w.SendMsg(
              "Authentication.GetPasswordRSAPublicKey#1",
              (0, Y.I8)(H, y, j),
              p,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          g.GetPasswordRSAPublicKey = r;
          function a(w, y, j) {
            return w.SendMsg(
              "Authentication.BeginAuthSessionViaQR#1",
              (0, Y.I8)(F, y, j),
              k,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          g.BeginAuthSessionViaQR = a;
          function b(w, y, j) {
            return w.SendMsg(
              "Authentication.BeginAuthSessionViaCredentials#1",
              (0, Y.I8)(P, y, j),
              T,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          g.BeginAuthSessionViaCredentials = b;
          function Qr(w, y, j) {
            return w.SendMsg(
              "Authentication.PollAuthSessionStatus#1",
              (0, Y.I8)(D, y, j),
              u,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          g.PollAuthSessionStatus = Qr;
          function Vr(w, y, j) {
            return w.SendMsg(
              "Authentication.GetAuthSessionInfo#1",
              (0, Y.I8)(h, y, j),
              R,
              { ePrivilege: 1 },
            );
          }
          g.GetAuthSessionInfo = Vr;
          function Yr(w, y, j) {
            return w.SendMsg(
              "Authentication.GetAuthSessionRiskInfo#1",
              (0, Y.I8)(A, y, j),
              C,
              { ePrivilege: 1 },
            );
          }
          g.GetAuthSessionRiskInfo = Yr;
          function Jr(w, y) {
            return w.SendNotification(
              "Authentication.NotifyRiskQuizResults#1",
              (0, Y.I8)(o, y),
              { ePrivilege: 1 },
            );
          }
          g.NotifyRiskQuizResults = Jr;
          function Zr(w, y, j) {
            return w.SendMsg(
              "Authentication.UpdateAuthSessionWithMobileConfirmation#1",
              (0, Y.I8)(ir, y, j),
              Nr,
              { ePrivilege: 1 },
            );
          }
          g.UpdateAuthSessionWithMobileConfirmation = Zr;
          function ai(w, y, j) {
            return w.SendMsg(
              "Authentication.UpdateAuthSessionWithSteamGuardCode#1",
              (0, Y.I8)(Q, y, j),
              ar,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          g.UpdateAuthSessionWithSteamGuardCode = ai;
          function li(w, y, j) {
            return w.SendMsg(
              "Authentication.GenerateAccessTokenForApp#1",
              (0, Y.I8)(lr, y, j),
              mr,
              { ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }
          g.GenerateAccessTokenForApp = li;
          function mi(w, y, j) {
            return w.SendMsg(
              "Authentication.EnumerateTokens#1",
              (0, Y.I8)(tr, y, j),
              er,
              { ePrivilege: 1 },
            );
          }
          g.EnumerateTokens = mi;
          function ti(w, y, j) {
            return w.SendMsg(
              "Authentication.GetAuthSessionsForAccount#1",
              (0, Y.I8)(Kr, y, j),
              rr,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          g.GetAuthSessionsForAccount = ti;
          function ei(w, y, j) {
            return w.SendMsg(
              "Authentication.RevokeToken#1",
              (0, Y.I8)(br, y, j),
              Hr,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          g.RevokeToken = ei;
          function Bi(w, y, j) {
            return w.SendMsg(
              "Authentication.RevokeRefreshToken#1",
              (0, Y.I8)(sr, y, j),
              Sr,
              { ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          g.RevokeRefreshToken = Bi;
        })(Tr || (Tr = {}));
        var _r;
        ((g) => {
          function r(Yr, Jr, Zr) {
            return Yr.SendMsg(
              "AuthenticationSupport.QueryRefreshTokensByAccount#1",
              (0, Y.I8)(Mr, Jr, Zr),
              dr,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }
          g.QueryRefreshTokensByAccount = r;
          function a(Yr, Jr, Zr) {
            return Yr.SendMsg(
              "AuthenticationSupport.QueryRefreshTokenByID#1",
              (0, Y.I8)(wr, Jr, Zr),
              yr,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }
          g.QueryRefreshTokenByID = a;
          function b(Yr, Jr, Zr) {
            return Yr.SendMsg(
              "AuthenticationSupport.RevokeToken#1",
              (0, Y.I8)(fr, Jr, Zr),
              Fr,
              { ePrivilege: 5 },
            );
          }
          g.RevokeToken = b;
          function Qr(Yr, Jr, Zr) {
            return Yr.SendMsg(
              "AuthenticationSupport.GetTokenHistory#1",
              (0, Y.I8)(zr, Jr, Zr),
              jr,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }
          g.GetTokenHistory = Qr;
          function Vr(Yr, Jr, Zr) {
            return Yr.SendMsg(
              "AuthenticationSupport.MarkTokenCompromised#1",
              (0, Y.I8)(Wr, Jr, Zr),
              Pr,
              { ePrivilege: 5 },
            );
          }
          g.MarkTokenCompromised = Vr;
        })(_r || (_r = {}));
        var ri;
        ((g) => {
          function r(b, Qr, Vr) {
            return b.SendMsg(
              "CloudGaming.CreateNonce#1",
              (0, Y.I8)(Or, Qr, Vr),
              xr,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          g.CreateNonce = r;
          function a(b, Qr, Vr) {
            return b.SendMsg(
              "CloudGaming.GetTimeRemaining#1",
              (0, Y.I8)(cr, Qr, Vr),
              Ur,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          g.GetTimeRemaining = a;
        })(ri || (ri = {}));
      },
      44787: (ur, qr, f) => {
        f.d(qr, { bv: () => z, ot: () => Er, oN: () => Dr, fz: () => kr });
        var Dr = {};
        f.r(Dr), f.d(Dr, { U3: () => Gr, Ej: () => Y });
        var M = f(80613),
          s = f.n(M),
          m = f(75245),
          B = f(35038);
        const t = 0,
          i = 1,
          Y = 2,
          Gr = 3;
        function pr(Lr) {
          return "unknown ETwoFactorUsageType ( " + Lr + " )";
        }
        function ii(Lr) {
          return "unknown ETwoFactorStatusFieldFlag ( " + Lr + " )";
        }
        class J extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(l = null) {
            super(),
              J.prototype.time || m.Sg(J.M()),
              M.Message.initialize(this, l, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              J.sm_m ||
                (J.sm_m = {
                  proto: J,
                  fields: {
                    time: { n: 1, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                    usage_type: { n: 2, br: m.qM.readEnum, bw: m.gp.writeEnum },
                    confirmation_type: {
                      n: 3,
                      br: m.qM.readInt32,
                      bw: m.gp.writeInt32,
                    },
                    confirmation_action: {
                      n: 4,
                      br: m.qM.readInt32,
                      bw: m.gp.writeInt32,
                    },
                  },
                }),
              J.sm_m
            );
          }
          static MBF() {
            return J.sm_mbf || (J.sm_mbf = m.w0(J.M())), J.sm_mbf;
          }
          toObject(l = !1) {
            return J.toObject(l, this);
          }
          static toObject(l, e) {
            return m.BT(J.M(), l, e);
          }
          static fromObject(l) {
            return m.Uq(J.M(), l);
          }
          static deserializeBinary(l) {
            let e = new (s().BinaryReader)(l),
              d = new J();
            return J.deserializeBinaryFromReader(d, e);
          }
          static deserializeBinaryFromReader(l, e) {
            return m.zj(J.MBF(), l, e);
          }
          serializeBinary() {
            var l = new (s().BinaryWriter)();
            return J.serializeBinaryToWriter(this, l), l.getResultBuffer();
          }
          static serializeBinaryToWriter(l, e) {
            m.i0(J.M(), l, e);
          }
          serializeBase64String() {
            var l = new (s().BinaryWriter)();
            return (
              J.serializeBinaryToWriter(this, l), l.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_UsageEvent";
          }
        }
        class W extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(l = null) {
            super(),
              W.prototype.sender_time || m.Sg(W.M()),
              M.Message.initialize(this, l, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              W.sm_m ||
                (W.sm_m = {
                  proto: W,
                  fields: {
                    sender_time: {
                      n: 1,
                      br: m.qM.readUint64String,
                      bw: m.gp.writeUint64String,
                    },
                  },
                }),
              W.sm_m
            );
          }
          static MBF() {
            return W.sm_mbf || (W.sm_mbf = m.w0(W.M())), W.sm_mbf;
          }
          toObject(l = !1) {
            return W.toObject(l, this);
          }
          static toObject(l, e) {
            return m.BT(W.M(), l, e);
          }
          static fromObject(l) {
            return m.Uq(W.M(), l);
          }
          static deserializeBinary(l) {
            let e = new (s().BinaryReader)(l),
              d = new W();
            return W.deserializeBinaryFromReader(d, e);
          }
          static deserializeBinaryFromReader(l, e) {
            return m.zj(W.MBF(), l, e);
          }
          serializeBinary() {
            var l = new (s().BinaryWriter)();
            return W.serializeBinaryToWriter(this, l), l.getResultBuffer();
          }
          static serializeBinaryToWriter(l, e) {
            m.i0(W.M(), l, e);
          }
          serializeBase64String() {
            var l = new (s().BinaryWriter)();
            return (
              W.serializeBinaryToWriter(this, l), l.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_Time_Request";
          }
        }
        class Z extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(l = null) {
            super(),
              Z.prototype.server_time || m.Sg(Z.M()),
              M.Message.initialize(this, l, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Z.sm_m ||
                (Z.sm_m = {
                  proto: Z,
                  fields: {
                    server_time: {
                      n: 1,
                      br: m.qM.readUint64String,
                      bw: m.gp.writeUint64String,
                    },
                    skew_tolerance_seconds: {
                      n: 2,
                      br: m.qM.readUint64String,
                      bw: m.gp.writeUint64String,
                    },
                    large_time_jink: {
                      n: 3,
                      br: m.qM.readUint64String,
                      bw: m.gp.writeUint64String,
                    },
                    probe_frequency_seconds: {
                      n: 4,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                    adjusted_time_probe_frequency_seconds: {
                      n: 5,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                    hint_probe_frequency_seconds: {
                      n: 6,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                    sync_timeout: {
                      n: 7,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                    try_again_seconds: {
                      n: 8,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                    max_attempts: {
                      n: 9,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                  },
                }),
              Z.sm_m
            );
          }
          static MBF() {
            return Z.sm_mbf || (Z.sm_mbf = m.w0(Z.M())), Z.sm_mbf;
          }
          toObject(l = !1) {
            return Z.toObject(l, this);
          }
          static toObject(l, e) {
            return m.BT(Z.M(), l, e);
          }
          static fromObject(l) {
            return m.Uq(Z.M(), l);
          }
          static deserializeBinary(l) {
            let e = new (s().BinaryReader)(l),
              d = new Z();
            return Z.deserializeBinaryFromReader(d, e);
          }
          static deserializeBinaryFromReader(l, e) {
            return m.zj(Z.MBF(), l, e);
          }
          serializeBinary() {
            var l = new (s().BinaryWriter)();
            return Z.serializeBinaryToWriter(this, l), l.getResultBuffer();
          }
          static serializeBinaryToWriter(l, e) {
            m.i0(Z.M(), l, e);
          }
          serializeBase64String() {
            var l = new (s().BinaryWriter)();
            return (
              Z.serializeBinaryToWriter(this, l), l.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_Time_Response";
          }
        }
        class K extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(l = null) {
            super(),
              K.prototype.steamid || m.Sg(K.M()),
              M.Message.initialize(this, l, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              K.sm_m ||
                (K.sm_m = {
                  proto: K,
                  fields: {
                    steamid: {
                      n: 1,
                      br: m.qM.readFixed64String,
                      bw: m.gp.writeFixed64String,
                    },
                    include: { n: 2, br: m.qM.readEnum, bw: m.gp.writeEnum },
                  },
                }),
              K.sm_m
            );
          }
          static MBF() {
            return K.sm_mbf || (K.sm_mbf = m.w0(K.M())), K.sm_mbf;
          }
          toObject(l = !1) {
            return K.toObject(l, this);
          }
          static toObject(l, e) {
            return m.BT(K.M(), l, e);
          }
          static fromObject(l) {
            return m.Uq(K.M(), l);
          }
          static deserializeBinary(l) {
            let e = new (s().BinaryReader)(l),
              d = new K();
            return K.deserializeBinaryFromReader(d, e);
          }
          static deserializeBinaryFromReader(l, e) {
            return m.zj(K.MBF(), l, e);
          }
          serializeBinary() {
            var l = new (s().BinaryWriter)();
            return K.serializeBinaryToWriter(this, l), l.getResultBuffer();
          }
          static serializeBinaryToWriter(l, e) {
            m.i0(K.M(), l, e);
          }
          serializeBase64String() {
            var l = new (s().BinaryWriter)();
            return (
              K.serializeBinaryToWriter(this, l), l.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_Status_Request";
          }
        }
        class O extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(l = null) {
            super(),
              O.prototype.state || m.Sg(O.M()),
              M.Message.initialize(this, l, 0, -1, [16], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              O.sm_m ||
                (O.sm_m = {
                  proto: O,
                  fields: {
                    state: { n: 1, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                    inactivation_reason: {
                      n: 2,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                    authenticator_type: {
                      n: 3,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                    authenticator_allowed: {
                      n: 4,
                      br: m.qM.readBool,
                      bw: m.gp.writeBool,
                    },
                    steamguard_scheme: {
                      n: 5,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                    token_gid: {
                      n: 6,
                      br: m.qM.readString,
                      bw: m.gp.writeString,
                    },
                    email_validated: {
                      n: 7,
                      br: m.qM.readBool,
                      bw: m.gp.writeBool,
                    },
                    device_identifier: {
                      n: 8,
                      br: m.qM.readString,
                      bw: m.gp.writeString,
                    },
                    time_created: {
                      n: 9,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                    revocation_attempts_remaining: {
                      n: 10,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                    classified_agent: {
                      n: 11,
                      br: m.qM.readString,
                      bw: m.gp.writeString,
                    },
                    allow_external_authenticator: {
                      n: 12,
                      br: m.qM.readBool,
                      bw: m.gp.writeBool,
                    },
                    time_transferred: {
                      n: 13,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                    version: {
                      n: 14,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                    last_seen_auth_token_id: {
                      n: 15,
                      br: m.qM.readFixed64String,
                      bw: m.gp.writeFixed64String,
                    },
                    usages: { n: 16, c: J, r: !0, q: !0 },
                  },
                }),
              O.sm_m
            );
          }
          static MBF() {
            return O.sm_mbf || (O.sm_mbf = m.w0(O.M())), O.sm_mbf;
          }
          toObject(l = !1) {
            return O.toObject(l, this);
          }
          static toObject(l, e) {
            return m.BT(O.M(), l, e);
          }
          static fromObject(l) {
            return m.Uq(O.M(), l);
          }
          static deserializeBinary(l) {
            let e = new (s().BinaryReader)(l),
              d = new O();
            return O.deserializeBinaryFromReader(d, e);
          }
          static deserializeBinaryFromReader(l, e) {
            return m.zj(O.MBF(), l, e);
          }
          serializeBinary() {
            var l = new (s().BinaryWriter)();
            return O.serializeBinaryToWriter(this, l), l.getResultBuffer();
          }
          static serializeBinaryToWriter(l, e) {
            m.i0(O.M(), l, e);
          }
          serializeBase64String() {
            var l = new (s().BinaryWriter)();
            return (
              O.serializeBinaryToWriter(this, l), l.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_Status_Response";
          }
        }
        class x extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(l = null) {
            super(),
              x.prototype.steamid || m.Sg(x.M()),
              M.Message.initialize(this, l, 0, -1, [7], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              x.sm_m ||
                (x.sm_m = {
                  proto: x,
                  fields: {
                    steamid: {
                      n: 1,
                      br: m.qM.readFixed64String,
                      bw: m.gp.writeFixed64String,
                    },
                    authenticator_time: {
                      n: 2,
                      br: m.qM.readUint64String,
                      bw: m.gp.writeUint64String,
                    },
                    serial_number: {
                      n: 3,
                      br: m.qM.readFixed64String,
                      bw: m.gp.writeFixed64String,
                    },
                    authenticator_type: {
                      n: 4,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                    device_identifier: {
                      n: 5,
                      br: m.qM.readString,
                      bw: m.gp.writeString,
                    },
                    http_headers: {
                      n: 7,
                      r: !0,
                      q: !0,
                      br: m.qM.readString,
                      bw: m.gp.writeRepeatedString,
                    },
                    version: {
                      n: 8,
                      d: 1,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                  },
                }),
              x.sm_m
            );
          }
          static MBF() {
            return x.sm_mbf || (x.sm_mbf = m.w0(x.M())), x.sm_mbf;
          }
          toObject(l = !1) {
            return x.toObject(l, this);
          }
          static toObject(l, e) {
            return m.BT(x.M(), l, e);
          }
          static fromObject(l) {
            return m.Uq(x.M(), l);
          }
          static deserializeBinary(l) {
            let e = new (s().BinaryReader)(l),
              d = new x();
            return x.deserializeBinaryFromReader(d, e);
          }
          static deserializeBinaryFromReader(l, e) {
            return m.zj(x.MBF(), l, e);
          }
          serializeBinary() {
            var l = new (s().BinaryWriter)();
            return x.serializeBinaryToWriter(this, l), l.getResultBuffer();
          }
          static serializeBinaryToWriter(l, e) {
            m.i0(x.M(), l, e);
          }
          serializeBase64String() {
            var l = new (s().BinaryWriter)();
            return (
              x.serializeBinaryToWriter(this, l), l.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_AddAuthenticator_Request";
          }
        }
        class I extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(l = null) {
            super(),
              I.prototype.shared_secret || m.Sg(I.M()),
              M.Message.initialize(this, l, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              I.sm_m ||
                (I.sm_m = {
                  proto: I,
                  fields: {
                    shared_secret: {
                      n: 1,
                      br: m.qM.readBytes,
                      bw: m.gp.writeBytes,
                    },
                    serial_number: {
                      n: 2,
                      br: m.qM.readFixed64String,
                      bw: m.gp.writeFixed64String,
                    },
                    revocation_code: {
                      n: 3,
                      br: m.qM.readString,
                      bw: m.gp.writeString,
                    },
                    uri: { n: 4, br: m.qM.readString, bw: m.gp.writeString },
                    server_time: {
                      n: 5,
                      br: m.qM.readUint64String,
                      bw: m.gp.writeUint64String,
                    },
                    account_name: {
                      n: 6,
                      br: m.qM.readString,
                      bw: m.gp.writeString,
                    },
                    token_gid: {
                      n: 7,
                      br: m.qM.readString,
                      bw: m.gp.writeString,
                    },
                    identity_secret: {
                      n: 8,
                      br: m.qM.readBytes,
                      bw: m.gp.writeBytes,
                    },
                    secret_1: { n: 9, br: m.qM.readBytes, bw: m.gp.writeBytes },
                    status: { n: 10, br: m.qM.readInt32, bw: m.gp.writeInt32 },
                    phone_number_hint: {
                      n: 11,
                      br: m.qM.readString,
                      bw: m.gp.writeString,
                    },
                    confirm_type: {
                      n: 12,
                      br: m.qM.readInt32,
                      bw: m.gp.writeInt32,
                    },
                  },
                }),
              I.sm_m
            );
          }
          static MBF() {
            return I.sm_mbf || (I.sm_mbf = m.w0(I.M())), I.sm_mbf;
          }
          toObject(l = !1) {
            return I.toObject(l, this);
          }
          static toObject(l, e) {
            return m.BT(I.M(), l, e);
          }
          static fromObject(l) {
            return m.Uq(I.M(), l);
          }
          static deserializeBinary(l) {
            let e = new (s().BinaryReader)(l),
              d = new I();
            return I.deserializeBinaryFromReader(d, e);
          }
          static deserializeBinaryFromReader(l, e) {
            return m.zj(I.MBF(), l, e);
          }
          serializeBinary() {
            var l = new (s().BinaryWriter)();
            return I.serializeBinaryToWriter(this, l), l.getResultBuffer();
          }
          static serializeBinaryToWriter(l, e) {
            m.i0(I.M(), l, e);
          }
          serializeBase64String() {
            var l = new (s().BinaryWriter)();
            return (
              I.serializeBinaryToWriter(this, l), l.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_AddAuthenticator_Response";
          }
        }
        class c extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(l = null) {
            super(),
              c.prototype.steamid || m.Sg(c.M()),
              M.Message.initialize(this, l, 0, -1, [5], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              c.sm_m ||
                (c.sm_m = {
                  proto: c,
                  fields: {
                    steamid: {
                      n: 1,
                      br: m.qM.readFixed64String,
                      bw: m.gp.writeFixed64String,
                    },
                    authenticator_code: {
                      n: 2,
                      br: m.qM.readString,
                      bw: m.gp.writeString,
                    },
                    authenticator_time: {
                      n: 3,
                      br: m.qM.readUint64String,
                      bw: m.gp.writeUint64String,
                    },
                    activation_code: {
                      n: 4,
                      br: m.qM.readString,
                      bw: m.gp.writeString,
                    },
                    http_headers: {
                      n: 5,
                      r: !0,
                      q: !0,
                      br: m.qM.readString,
                      bw: m.gp.writeRepeatedString,
                    },
                    validate_sms_code: {
                      n: 6,
                      br: m.qM.readBool,
                      bw: m.gp.writeBool,
                    },
                  },
                }),
              c.sm_m
            );
          }
          static MBF() {
            return c.sm_mbf || (c.sm_mbf = m.w0(c.M())), c.sm_mbf;
          }
          toObject(l = !1) {
            return c.toObject(l, this);
          }
          static toObject(l, e) {
            return m.BT(c.M(), l, e);
          }
          static fromObject(l) {
            return m.Uq(c.M(), l);
          }
          static deserializeBinary(l) {
            let e = new (s().BinaryReader)(l),
              d = new c();
            return c.deserializeBinaryFromReader(d, e);
          }
          static deserializeBinaryFromReader(l, e) {
            return m.zj(c.MBF(), l, e);
          }
          serializeBinary() {
            var l = new (s().BinaryWriter)();
            return c.serializeBinaryToWriter(this, l), l.getResultBuffer();
          }
          static serializeBinaryToWriter(l, e) {
            m.i0(c.M(), l, e);
          }
          serializeBase64String() {
            var l = new (s().BinaryWriter)();
            return (
              c.serializeBinaryToWriter(this, l), l.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_FinalizeAddAuthenticator_Request";
          }
        }
        class U extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(l = null) {
            super(),
              U.prototype.success || m.Sg(U.M()),
              M.Message.initialize(this, l, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              U.sm_m ||
                (U.sm_m = {
                  proto: U,
                  fields: {
                    success: { n: 1, br: m.qM.readBool, bw: m.gp.writeBool },
                    server_time: {
                      n: 3,
                      br: m.qM.readUint64String,
                      bw: m.gp.writeUint64String,
                    },
                    status: { n: 4, br: m.qM.readInt32, bw: m.gp.writeInt32 },
                  },
                }),
              U.sm_m
            );
          }
          static MBF() {
            return U.sm_mbf || (U.sm_mbf = m.w0(U.M())), U.sm_mbf;
          }
          toObject(l = !1) {
            return U.toObject(l, this);
          }
          static toObject(l, e) {
            return m.BT(U.M(), l, e);
          }
          static fromObject(l) {
            return m.Uq(U.M(), l);
          }
          static deserializeBinary(l) {
            let e = new (s().BinaryReader)(l),
              d = new U();
            return U.deserializeBinaryFromReader(d, e);
          }
          static deserializeBinaryFromReader(l, e) {
            return m.zj(U.MBF(), l, e);
          }
          serializeBinary() {
            var l = new (s().BinaryWriter)();
            return U.serializeBinaryToWriter(this, l), l.getResultBuffer();
          }
          static serializeBinaryToWriter(l, e) {
            m.i0(U.M(), l, e);
          }
          serializeBase64String() {
            var l = new (s().BinaryWriter)();
            return (
              U.serializeBinaryToWriter(this, l), l.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_FinalizeAddAuthenticator_Response";
          }
        }
        class v extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(l = null) {
            super(),
              v.prototype.revocation_code || m.Sg(v.M()),
              M.Message.initialize(this, l, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              v.sm_m ||
                (v.sm_m = {
                  proto: v,
                  fields: {
                    revocation_code: {
                      n: 2,
                      br: m.qM.readString,
                      bw: m.gp.writeString,
                    },
                    revocation_reason: {
                      n: 5,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                    steamguard_scheme: {
                      n: 6,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                    remove_all_steamguard_cookies: {
                      n: 7,
                      br: m.qM.readBool,
                      bw: m.gp.writeBool,
                    },
                  },
                }),
              v.sm_m
            );
          }
          static MBF() {
            return v.sm_mbf || (v.sm_mbf = m.w0(v.M())), v.sm_mbf;
          }
          toObject(l = !1) {
            return v.toObject(l, this);
          }
          static toObject(l, e) {
            return m.BT(v.M(), l, e);
          }
          static fromObject(l) {
            return m.Uq(v.M(), l);
          }
          static deserializeBinary(l) {
            let e = new (s().BinaryReader)(l),
              d = new v();
            return v.deserializeBinaryFromReader(d, e);
          }
          static deserializeBinaryFromReader(l, e) {
            return m.zj(v.MBF(), l, e);
          }
          serializeBinary() {
            var l = new (s().BinaryWriter)();
            return v.serializeBinaryToWriter(this, l), l.getResultBuffer();
          }
          static serializeBinaryToWriter(l, e) {
            m.i0(v.M(), l, e);
          }
          serializeBase64String() {
            var l = new (s().BinaryWriter)();
            return (
              v.serializeBinaryToWriter(this, l), l.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_RemoveAuthenticator_Request";
          }
        }
        class n extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(l = null) {
            super(),
              n.prototype.success || m.Sg(n.M()),
              M.Message.initialize(this, l, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              n.sm_m ||
                (n.sm_m = {
                  proto: n,
                  fields: {
                    success: { n: 1, br: m.qM.readBool, bw: m.gp.writeBool },
                    server_time: {
                      n: 3,
                      br: m.qM.readUint64String,
                      bw: m.gp.writeUint64String,
                    },
                    revocation_attempts_remaining: {
                      n: 5,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                  },
                }),
              n.sm_m
            );
          }
          static MBF() {
            return n.sm_mbf || (n.sm_mbf = m.w0(n.M())), n.sm_mbf;
          }
          toObject(l = !1) {
            return n.toObject(l, this);
          }
          static toObject(l, e) {
            return m.BT(n.M(), l, e);
          }
          static fromObject(l) {
            return m.Uq(n.M(), l);
          }
          static deserializeBinary(l) {
            let e = new (s().BinaryReader)(l),
              d = new n();
            return n.deserializeBinaryFromReader(d, e);
          }
          static deserializeBinaryFromReader(l, e) {
            return m.zj(n.MBF(), l, e);
          }
          serializeBinary() {
            var l = new (s().BinaryWriter)();
            return n.serializeBinaryToWriter(this, l), l.getResultBuffer();
          }
          static serializeBinaryToWriter(l, e) {
            m.i0(n.M(), l, e);
          }
          serializeBase64String() {
            var l = new (s().BinaryWriter)();
            return (
              n.serializeBinaryToWriter(this, l), l.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_RemoveAuthenticator_Response";
          }
        }
        class Er extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(l = null) {
            super(), M.Message.initialize(this, l, 0, -1, void 0, null);
          }
          toObject(l = !1) {
            return Er.toObject(l, this);
          }
          static toObject(l, e) {
            return l ? { $jspbMessageInstance: e } : {};
          }
          static fromObject(l) {
            return new Er();
          }
          static deserializeBinary(l) {
            let e = new (s().BinaryReader)(l),
              d = new Er();
            return Er.deserializeBinaryFromReader(d, e);
          }
          static deserializeBinaryFromReader(l, e) {
            return l;
          }
          serializeBinary() {
            var l = new (s().BinaryWriter)();
            return Er.serializeBinaryToWriter(this, l), l.getResultBuffer();
          }
          static serializeBinaryToWriter(l, e) {}
          serializeBase64String() {
            var l = new (s().BinaryWriter)();
            return (
              Er.serializeBinaryToWriter(this, l), l.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request";
          }
        }
        class $ extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(l = null) {
            super(),
              $.prototype.success || m.Sg($.M()),
              M.Message.initialize(this, l, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $.sm_m ||
                ($.sm_m = {
                  proto: $,
                  fields: {
                    success: { n: 1, br: m.qM.readBool, bw: m.gp.writeBool },
                  },
                }),
              $.sm_m
            );
          }
          static MBF() {
            return $.sm_mbf || ($.sm_mbf = m.w0($.M())), $.sm_mbf;
          }
          toObject(l = !1) {
            return $.toObject(l, this);
          }
          static toObject(l, e) {
            return m.BT($.M(), l, e);
          }
          static fromObject(l) {
            return m.Uq($.M(), l);
          }
          static deserializeBinary(l) {
            let e = new (s().BinaryReader)(l),
              d = new $();
            return $.deserializeBinaryFromReader(d, e);
          }
          static deserializeBinaryFromReader(l, e) {
            return m.zj($.MBF(), l, e);
          }
          serializeBinary() {
            var l = new (s().BinaryWriter)();
            return $.serializeBinaryToWriter(this, l), l.getResultBuffer();
          }
          static serializeBinaryToWriter(l, e) {
            m.i0($.M(), l, e);
          }
          serializeBase64String() {
            var l = new (s().BinaryWriter)();
            return (
              $.serializeBinaryToWriter(this, l), l.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response";
          }
        }
        class z extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(l = null) {
            super(),
              z.prototype.sms_code || m.Sg(z.M()),
              M.Message.initialize(this, l, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              z.sm_m ||
                (z.sm_m = {
                  proto: z,
                  fields: {
                    sms_code: {
                      n: 1,
                      br: m.qM.readString,
                      bw: m.gp.writeString,
                    },
                    generate_new_token: {
                      n: 2,
                      br: m.qM.readBool,
                      bw: m.gp.writeBool,
                    },
                    version: {
                      n: 3,
                      d: 1,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                  },
                }),
              z.sm_m
            );
          }
          static MBF() {
            return z.sm_mbf || (z.sm_mbf = m.w0(z.M())), z.sm_mbf;
          }
          toObject(l = !1) {
            return z.toObject(l, this);
          }
          static toObject(l, e) {
            return m.BT(z.M(), l, e);
          }
          static fromObject(l) {
            return m.Uq(z.M(), l);
          }
          static deserializeBinary(l) {
            let e = new (s().BinaryReader)(l),
              d = new z();
            return z.deserializeBinaryFromReader(d, e);
          }
          static deserializeBinaryFromReader(l, e) {
            return m.zj(z.MBF(), l, e);
          }
          serializeBinary() {
            var l = new (s().BinaryWriter)();
            return z.serializeBinaryToWriter(this, l), l.getResultBuffer();
          }
          static serializeBinaryToWriter(l, e) {
            m.i0(z.M(), l, e);
          }
          serializeBase64String() {
            var l = new (s().BinaryWriter)();
            return (
              z.serializeBinaryToWriter(this, l), l.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request";
          }
        }
        class L extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(l = null) {
            super(),
              L.prototype.shared_secret || m.Sg(L.M()),
              M.Message.initialize(this, l, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              L.sm_m ||
                (L.sm_m = {
                  proto: L,
                  fields: {
                    shared_secret: {
                      n: 1,
                      br: m.qM.readBytes,
                      bw: m.gp.writeBytes,
                    },
                    serial_number: {
                      n: 2,
                      br: m.qM.readFixed64String,
                      bw: m.gp.writeFixed64String,
                    },
                    revocation_code: {
                      n: 3,
                      br: m.qM.readString,
                      bw: m.gp.writeString,
                    },
                    uri: { n: 4, br: m.qM.readString, bw: m.gp.writeString },
                    server_time: {
                      n: 5,
                      br: m.qM.readUint64String,
                      bw: m.gp.writeUint64String,
                    },
                    account_name: {
                      n: 6,
                      br: m.qM.readString,
                      bw: m.gp.writeString,
                    },
                    token_gid: {
                      n: 7,
                      br: m.qM.readString,
                      bw: m.gp.writeString,
                    },
                    identity_secret: {
                      n: 8,
                      br: m.qM.readBytes,
                      bw: m.gp.writeBytes,
                    },
                    secret_1: { n: 9, br: m.qM.readBytes, bw: m.gp.writeBytes },
                    status: { n: 10, br: m.qM.readInt32, bw: m.gp.writeInt32 },
                    steamguard_scheme: {
                      n: 11,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                    steamid: {
                      n: 12,
                      br: m.qM.readFixed64String,
                      bw: m.gp.writeFixed64String,
                    },
                  },
                }),
              L.sm_m
            );
          }
          static MBF() {
            return L.sm_mbf || (L.sm_mbf = m.w0(L.M())), L.sm_mbf;
          }
          toObject(l = !1) {
            return L.toObject(l, this);
          }
          static toObject(l, e) {
            return m.BT(L.M(), l, e);
          }
          static fromObject(l) {
            return m.Uq(L.M(), l);
          }
          static deserializeBinary(l) {
            let e = new (s().BinaryReader)(l),
              d = new L();
            return L.deserializeBinaryFromReader(d, e);
          }
          static deserializeBinaryFromReader(l, e) {
            return m.zj(L.MBF(), l, e);
          }
          serializeBinary() {
            var l = new (s().BinaryWriter)();
            return L.serializeBinaryToWriter(this, l), l.getResultBuffer();
          }
          static serializeBinaryToWriter(l, e) {
            m.i0(L.M(), l, e);
          }
          serializeBase64String() {
            var l = new (s().BinaryWriter)();
            return (
              L.serializeBinaryToWriter(this, l), l.getResultBase64String()
            );
          }
          getClassName() {
            return "CRemoveAuthenticatorViaChallengeContinue_Replacement_Token";
          }
        }
        class E extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(l = null) {
            super(),
              E.prototype.success || m.Sg(E.M()),
              M.Message.initialize(this, l, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              E.sm_m ||
                (E.sm_m = {
                  proto: E,
                  fields: {
                    success: { n: 1, br: m.qM.readBool, bw: m.gp.writeBool },
                    replacement_token: { n: 2, c: L },
                  },
                }),
              E.sm_m
            );
          }
          static MBF() {
            return E.sm_mbf || (E.sm_mbf = m.w0(E.M())), E.sm_mbf;
          }
          toObject(l = !1) {
            return E.toObject(l, this);
          }
          static toObject(l, e) {
            return m.BT(E.M(), l, e);
          }
          static fromObject(l) {
            return m.Uq(E.M(), l);
          }
          static deserializeBinary(l) {
            let e = new (s().BinaryReader)(l),
              d = new E();
            return E.deserializeBinaryFromReader(d, e);
          }
          static deserializeBinaryFromReader(l, e) {
            return m.zj(E.MBF(), l, e);
          }
          serializeBinary() {
            var l = new (s().BinaryWriter)();
            return E.serializeBinaryToWriter(this, l), l.getResultBuffer();
          }
          static serializeBinaryToWriter(l, e) {
            m.i0(E.M(), l, e);
          }
          serializeBase64String() {
            var l = new (s().BinaryWriter)();
            return (
              E.serializeBinaryToWriter(this, l), l.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response";
          }
        }
        class N extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(l = null) {
            super(),
              N.prototype.steamid || m.Sg(N.M()),
              M.Message.initialize(this, l, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              N.sm_m ||
                (N.sm_m = {
                  proto: N,
                  fields: {
                    steamid: {
                      n: 1,
                      br: m.qM.readFixed64String,
                      bw: m.gp.writeFixed64String,
                    },
                    version: {
                      n: 2,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                    signature: {
                      n: 3,
                      br: m.qM.readBytes,
                      bw: m.gp.writeBytes,
                    },
                  },
                }),
              N.sm_m
            );
          }
          static MBF() {
            return N.sm_mbf || (N.sm_mbf = m.w0(N.M())), N.sm_mbf;
          }
          toObject(l = !1) {
            return N.toObject(l, this);
          }
          static toObject(l, e) {
            return m.BT(N.M(), l, e);
          }
          static fromObject(l) {
            return m.Uq(N.M(), l);
          }
          static deserializeBinary(l) {
            let e = new (s().BinaryReader)(l),
              d = new N();
            return N.deserializeBinaryFromReader(d, e);
          }
          static deserializeBinaryFromReader(l, e) {
            return m.zj(N.MBF(), l, e);
          }
          serializeBinary() {
            var l = new (s().BinaryWriter)();
            return N.serializeBinaryToWriter(this, l), l.getResultBuffer();
          }
          static serializeBinaryToWriter(l, e) {
            m.i0(N.M(), l, e);
          }
          serializeBase64String() {
            var l = new (s().BinaryWriter)();
            return (
              N.serializeBinaryToWriter(this, l), l.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_UpdateTokenVersion_Request";
          }
        }
        class Xr extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(l = null) {
            super(), M.Message.initialize(this, l, 0, -1, void 0, null);
          }
          toObject(l = !1) {
            return Xr.toObject(l, this);
          }
          static toObject(l, e) {
            return l ? { $jspbMessageInstance: e } : {};
          }
          static fromObject(l) {
            return new Xr();
          }
          static deserializeBinary(l) {
            let e = new (s().BinaryReader)(l),
              d = new Xr();
            return Xr.deserializeBinaryFromReader(d, e);
          }
          static deserializeBinaryFromReader(l, e) {
            return l;
          }
          serializeBinary() {
            var l = new (s().BinaryWriter)();
            return Xr.serializeBinaryToWriter(this, l), l.getResultBuffer();
          }
          static serializeBinaryToWriter(l, e) {}
          serializeBase64String() {
            var l = new (s().BinaryWriter)();
            return (
              Xr.serializeBinaryToWriter(this, l), l.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_UpdateTokenVersion_Response";
          }
        }
        var kr;
        ((Lr) => {
          function l(nr, vr, $r) {
            return nr.SendMsg(
              "TwoFactor.QueryTime#1",
              (0, B.I8)(W, vr, $r),
              Z,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          Lr.QueryTime = l;
          function e(nr, vr, $r) {
            return nr.SendMsg(
              "TwoFactor.QueryStatus#1",
              (0, B.I8)(K, vr, $r),
              O,
              { ePrivilege: 1 },
            );
          }
          Lr.QueryStatus = e;
          function d(nr, vr, $r) {
            return nr.SendMsg(
              "TwoFactor.AddAuthenticator#1",
              (0, B.I8)(x, vr, $r),
              I,
              { ePrivilege: 1 },
            );
          }
          Lr.AddAuthenticator = d;
          function hr(nr, vr, $r) {
            return nr.SendMsg(
              "TwoFactor.FinalizeAddAuthenticator#1",
              (0, B.I8)(c, vr, $r),
              U,
              { ePrivilege: 1 },
            );
          }
          Lr.FinalizeAddAuthenticator = hr;
          function Rr(nr, vr, $r) {
            return nr.SendMsg(
              "TwoFactor.UpdateTokenVersion#1",
              (0, B.I8)(N, vr, $r),
              Xr,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          Lr.UpdateTokenVersion = Rr;
          function Ar(nr, vr, $r) {
            return nr.SendMsg(
              "TwoFactor.RemoveAuthenticator#1",
              (0, B.I8)(v, vr, $r),
              n,
              { ePrivilege: 9 },
            );
          }
          Lr.RemoveAuthenticator = Ar;
          function Cr(nr, vr, $r) {
            return nr.SendMsg(
              "TwoFactor.RemoveAuthenticatorViaChallengeStart#1",
              (0, B.I8)(Er, vr, $r),
              $,
              { ePrivilege: 9 },
            );
          }
          Lr.RemoveAuthenticatorViaChallengeStart = Cr;
          function or(nr, vr, $r) {
            return nr.SendMsg(
              "TwoFactor.RemoveAuthenticatorViaChallengeContinue#1",
              (0, B.I8)(z, vr, $r),
              E,
              { ePrivilege: 9 },
            );
          }
          Lr.RemoveAuthenticatorViaChallengeContinue = or;
        })(kr || (kr = {}));
      },
    },
  ]);
})();
