/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [1747],
    {
      95039: (se, Be, b) => {
        "use strict";
        b.d(Be, { fH: () => ae, nW: () => M });
        const s = null,
          ae = 0,
          M = 1;
      },
      94276: (se, Be, b) => {
        "use strict";
        b.d(Be, {
          kX: () => Fe,
          iP: () => $,
          R9: () => U,
          tS: () => ir,
          qu: () => tr,
          Ev: () => k,
          Qc: () => I,
          TY: () => s,
          SS: () => ae,
        });
        var s = {};
        b.r(s),
          b.d(s, {
            bH: () => lr,
            x0: () => Ir,
            Xs: () => zr,
            $Y: () => Vr,
            ig: () => cr,
            WM: () => oe,
            oP: () => P,
          });
        var ae = {};
        b.r(ae), b.d(ae, { w0: () => V, tS: () => jr });
        var M = b(80613),
          l = b.n(M),
          e = b(75245),
          br = b(35038),
          de = b(95039),
          D = b(47997);
        const P = 0,
          oe = 1,
          zr = 2,
          lr = 3,
          Ir = 4,
          Vr = 5,
          cr = 6,
          Ur = 7,
          Tr = 0,
          V = 1,
          jr = 2,
          fr = 3,
          vr = 0,
          Pr = 1,
          F = 2,
          q = 3,
          K = 4,
          v = 5,
          T = 6,
          X = 7;
        function J(Q) {
          return "unknown ECaptchaAnnotation ( " + Q + " )";
        }
        function Me(Q) {
          return "unknown EAuthSessionSecurityHistory ( " + Q + " )";
        }
        function Oe(Q) {
          return "unknown EAuthenticationType ( " + Q + " )";
        }
        function kr(Q) {
          return "unknown EAuthSessionGuardType ( " + Q + " )";
        }
        function pe(Q) {
          return "unknown EAuthTokenPlatformType ( " + Q + " )";
        }
        function be(Q) {
          return "unknown EAuthTokenAppType ( " + Q + " )";
        }
        function Ve(Q) {
          return "unknown ETokenRenewalType ( " + Q + " )";
        }
        function gr(Q) {
          return "unknown EAuthTokenRevokeAction ( " + Q + " )";
        }
        function G(Q) {
          return "unknown EAuthTokenState ( " + Q + " )";
        }
        function d(Q) {
          return "unknown ECaptchaUsage ( " + Q + " )";
        }
        function Ge(Q) {
          return "unknown ECaptchaType ( " + Q + " )";
        }
        function Qe(Q) {
          return "unknown ECaptchaDifficulty ( " + Q + " )";
        }
        function Hr(Q) {
          return "unknown ERiskLevel ( " + Q + " )";
        }
        function Dr(Q) {
          return "unknown ETokenRiskFactor ( " + Q + " )";
        }
        function hr(Q) {
          return "unknown EConfirmationState ( " + Q + " )";
        }
        function Er(Q) {
          return "unknown EConfirmationRequestType ( " + Q + " )";
        }
        class tr extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              tr.prototype.account_name || e.Sg(tr.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              tr.sm_m ||
                (tr.sm_m = {
                  proto: tr,
                  fields: {
                    account_name: {
                      n: 1,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
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
          static toObject(r, a) {
            return e.BT(tr.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(tr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              x = new tr();
            return tr.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(tr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return tr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(tr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              tr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_GetPasswordRSAPublicKey_Request";
          }
        }
        class nr extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              nr.prototype.publickey_mod || e.Sg(nr.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              nr.sm_m ||
                (nr.sm_m = {
                  proto: nr,
                  fields: {
                    publickey_mod: {
                      n: 1,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    publickey_exp: {
                      n: 2,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    timestamp: {
                      n: 3,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                  },
                }),
              nr.sm_m
            );
          }
          static MBF() {
            return nr.sm_mbf || (nr.sm_mbf = e.w0(nr.M())), nr.sm_mbf;
          }
          toObject(r = !1) {
            return nr.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(nr.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(nr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              x = new nr();
            return nr.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(nr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return nr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(nr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              nr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_GetPasswordRSAPublicKey_Response";
          }
        }
        class ir extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ir.prototype.device_friendly_name || e.Sg(ir.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ir.sm_m ||
                (ir.sm_m = {
                  proto: ir,
                  fields: {
                    device_friendly_name: {
                      n: 1,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    platform_type: {
                      n: 2,
                      br: e.qM.readEnum,
                      bw: e.gp.writeEnum,
                    },
                    os_type: { n: 3, br: e.qM.readInt32, bw: e.gp.writeInt32 },
                    gaming_device_type: {
                      n: 4,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    client_count: {
                      n: 5,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    machine_id: {
                      n: 6,
                      br: e.qM.readBytes,
                      bw: e.gp.writeBytes,
                    },
                    app_type: { n: 7, br: e.qM.readEnum, bw: e.gp.writeEnum },
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
          static toObject(r, a) {
            return e.BT(ir.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(ir.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              x = new ir();
            return ir.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(ir.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return ir.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(ir.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              ir.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_DeviceDetails";
          }
        }
        class W extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              W.prototype.confirmation_type || e.Sg(W.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              W.sm_m ||
                (W.sm_m = {
                  proto: W,
                  fields: {
                    confirmation_type: {
                      n: 1,
                      br: e.qM.readEnum,
                      bw: e.gp.writeEnum,
                    },
                    associated_message: {
                      n: 2,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                  },
                }),
              W.sm_m
            );
          }
          static MBF() {
            return W.sm_mbf || (W.sm_mbf = e.w0(W.M())), W.sm_mbf;
          }
          toObject(r = !1) {
            return W.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(W.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(W.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              x = new W();
            return W.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(W.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return W.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(W.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              W.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_AllowedConfirmation";
          }
        }
        class U extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              U.prototype.device_friendly_name || e.Sg(U.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              U.sm_m ||
                (U.sm_m = {
                  proto: U,
                  fields: {
                    device_friendly_name: {
                      n: 1,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    platform_type: {
                      n: 2,
                      br: e.qM.readEnum,
                      bw: e.gp.writeEnum,
                    },
                    device_details: { n: 3, c: ir },
                    website_id: {
                      n: 4,
                      d: "Unknown",
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                  },
                }),
              U.sm_m
            );
          }
          static MBF() {
            return U.sm_mbf || (U.sm_mbf = e.w0(U.M())), U.sm_mbf;
          }
          toObject(r = !1) {
            return U.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(U.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(U.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              x = new U();
            return U.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(U.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return U.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(U.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              U.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_BeginAuthSessionViaQR_Request";
          }
        }
        class Y extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Y.prototype.client_id || e.Sg(Y.M()),
              M.Message.initialize(this, r, 0, -1, [5], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Y.sm_m ||
                (Y.sm_m = {
                  proto: Y,
                  fields: {
                    client_id: {
                      n: 1,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    challenge_url: {
                      n: 2,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    request_id: {
                      n: 3,
                      br: e.qM.readBytes,
                      bw: e.gp.writeBytes,
                    },
                    interval: { n: 4, br: e.qM.readFloat, bw: e.gp.writeFloat },
                    allowed_confirmations: { n: 5, c: W, r: !0, q: !0 },
                    version: { n: 6, br: e.qM.readInt32, bw: e.gp.writeInt32 },
                  },
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
          static toObject(r, a) {
            return e.BT(Y.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(Y.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              x = new Y();
            return Y.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(Y.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return Y.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(Y.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              Y.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_BeginAuthSessionViaQR_Response";
          }
        }
        class $ extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              $.prototype.device_friendly_name || e.Sg($.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $.sm_m ||
                ($.sm_m = {
                  proto: $,
                  fields: {
                    device_friendly_name: {
                      n: 1,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    account_name: {
                      n: 2,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    encrypted_password: {
                      n: 3,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    encryption_timestamp: {
                      n: 4,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    remember_login: {
                      n: 5,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                    platform_type: {
                      n: 6,
                      br: e.qM.readEnum,
                      bw: e.gp.writeEnum,
                    },
                    persistence: {
                      n: 7,
                      d: de.nW,
                      br: e.qM.readEnum,
                      bw: e.gp.writeEnum,
                    },
                    website_id: {
                      n: 8,
                      d: "Unknown",
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    device_details: { n: 9, c: ir },
                    guard_data: {
                      n: 10,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    language: {
                      n: 11,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    qos_level: {
                      n: 12,
                      d: 2,
                      br: e.qM.readInt32,
                      bw: e.gp.writeInt32,
                    },
                  },
                }),
              $.sm_m
            );
          }
          static MBF() {
            return $.sm_mbf || ($.sm_mbf = e.w0($.M())), $.sm_mbf;
          }
          toObject(r = !1) {
            return $.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT($.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq($.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              x = new $();
            return $.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj($.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return $.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0($.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              $.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_BeginAuthSessionViaCredentials_Request";
          }
        }
        class sr extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              sr.prototype.client_id || e.Sg(sr.M()),
              M.Message.initialize(this, r, 0, -1, [4], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              sr.sm_m ||
                (sr.sm_m = {
                  proto: sr,
                  fields: {
                    client_id: {
                      n: 1,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    request_id: {
                      n: 2,
                      br: e.qM.readBytes,
                      bw: e.gp.writeBytes,
                    },
                    interval: { n: 3, br: e.qM.readFloat, bw: e.gp.writeFloat },
                    allowed_confirmations: { n: 4, c: W, r: !0, q: !0 },
                    steamid: {
                      n: 5,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    weak_token: {
                      n: 6,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    agreement_session_url: {
                      n: 7,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    extended_error_message: {
                      n: 8,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
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
          static toObject(r, a) {
            return e.BT(sr.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(sr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              x = new sr();
            return sr.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(sr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return sr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(sr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              sr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_BeginAuthSessionViaCredentials_Response";
          }
        }
        class k extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              k.prototype.client_id || e.Sg(k.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
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
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    request_id: {
                      n: 2,
                      br: e.qM.readBytes,
                      bw: e.gp.writeBytes,
                    },
                    token_to_revoke: {
                      n: 3,
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
          static toObject(r, a) {
            return e.BT(k.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(k.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              x = new k();
            return k.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(k.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return k.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(k.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              k.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_PollAuthSessionStatus_Request";
          }
        }
        class C extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              C.prototype.new_client_id || e.Sg(C.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              C.sm_m ||
                (C.sm_m = {
                  proto: C,
                  fields: {
                    new_client_id: {
                      n: 1,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    new_challenge_url: {
                      n: 2,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    refresh_token: {
                      n: 3,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    access_token: {
                      n: 4,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    had_remote_interaction: {
                      n: 5,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                    account_name: {
                      n: 6,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    new_guard_data: {
                      n: 7,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    agreement_session_url: {
                      n: 8,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
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
          static toObject(r, a) {
            return e.BT(C.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(C.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              x = new C();
            return C.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(C.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return C.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(C.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              C.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_PollAuthSessionStatus_Response";
          }
        }
        class or extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              or.prototype.client_id || e.Sg(or.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              or.sm_m ||
                (or.sm_m = {
                  proto: or,
                  fields: {
                    client_id: {
                      n: 1,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                  },
                }),
              or.sm_m
            );
          }
          static MBF() {
            return or.sm_mbf || (or.sm_mbf = e.w0(or.M())), or.sm_mbf;
          }
          toObject(r = !1) {
            return or.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(or.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(or.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              x = new or();
            return or.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(or.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return or.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(or.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              or.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_GetAuthSessionInfo_Request";
          }
        }
        class mr extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              mr.prototype.ip || e.Sg(mr.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              mr.sm_m ||
                (mr.sm_m = {
                  proto: mr,
                  fields: {
                    ip: { n: 1, br: e.qM.readString, bw: e.gp.writeString },
                    geoloc: { n: 2, br: e.qM.readString, bw: e.gp.writeString },
                    city: { n: 3, br: e.qM.readString, bw: e.gp.writeString },
                    state: { n: 4, br: e.qM.readString, bw: e.gp.writeString },
                    country: {
                      n: 5,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    platform_type: {
                      n: 6,
                      br: e.qM.readEnum,
                      bw: e.gp.writeEnum,
                    },
                    device_friendly_name: {
                      n: 7,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    version: { n: 8, br: e.qM.readInt32, bw: e.gp.writeInt32 },
                    login_history: {
                      n: 9,
                      br: e.qM.readEnum,
                      bw: e.gp.writeEnum,
                    },
                    requestor_location_mismatch: {
                      n: 10,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                    high_usage_login: {
                      n: 11,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                    requested_persistence: {
                      n: 12,
                      br: e.qM.readEnum,
                      bw: e.gp.writeEnum,
                    },
                    device_trust: {
                      n: 13,
                      br: e.qM.readInt32,
                      bw: e.gp.writeInt32,
                    },
                    app_type: { n: 14, br: e.qM.readEnum, bw: e.gp.writeEnum },
                  },
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
          static toObject(r, a) {
            return e.BT(mr.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(mr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              x = new mr();
            return mr.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(mr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return mr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(mr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              mr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_GetAuthSessionInfo_Response";
          }
        }
        class dr extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              dr.prototype.client_id || e.Sg(dr.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              dr.sm_m ||
                (dr.sm_m = {
                  proto: dr,
                  fields: {
                    client_id: {
                      n: 1,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    language: {
                      n: 2,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
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
          static toObject(r, a) {
            return e.BT(dr.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(dr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              x = new dr();
            return dr.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(dr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return dr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(dr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              dr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_GetAuthSessionRiskInfo_Request";
          }
        }
        class Br extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Br.prototype.location_confirmer || e.Sg(Br.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Br.sm_m ||
                (Br.sm_m = {
                  proto: Br,
                  fields: {
                    location_confirmer: {
                      n: 1,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    location_requestor: {
                      n: 2,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    location_other: {
                      n: 3,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    platform_type: {
                      n: 4,
                      br: e.qM.readEnum,
                      bw: e.gp.writeEnum,
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
          static toObject(r, a) {
            return e.BT(Br.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(Br.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              x = new Br();
            return Br.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(Br.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return Br.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(Br.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              Br.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_GetAuthSessionRiskInfo_Response";
          }
        }
        class Wr extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Wr.prototype.client_id || e.Sg(Wr.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Wr.sm_m ||
                (Wr.sm_m = {
                  proto: Wr,
                  fields: {
                    client_id: {
                      n: 1,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    results: { n: 2, c: $r },
                    selected_action: {
                      n: 3,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    did_confirm_login: {
                      n: 4,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                  },
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
          static toObject(r, a) {
            return e.BT(Wr.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(Wr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              x = new Wr();
            return Wr.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(Wr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return Wr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(Wr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              Wr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_NotifyRiskQuizResults_Notification";
          }
        }
        class $r extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              $r.prototype.platform || e.Sg($r.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $r.sm_m ||
                ($r.sm_m = {
                  proto: $r,
                  fields: {
                    platform: { n: 1, br: e.qM.readBool, bw: e.gp.writeBool },
                    location: { n: 2, br: e.qM.readBool, bw: e.gp.writeBool },
                    action: { n: 3, br: e.qM.readBool, bw: e.gp.writeBool },
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
          static toObject(r, a) {
            return e.BT($r.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq($r.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              x = new $r();
            return $r.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj($r.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return $r.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0($r.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              $r.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_NotifyRiskQuizResults_Notification_RiskQuizResults";
          }
        }
        class Se extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Se.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new Se();
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              x = new Se();
            return Se.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return Se.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              Se.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_GetAuthSessionsForAccount_Request";
          }
        }
        class u extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              u.prototype.client_ids || e.Sg(u.M()),
              M.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              u.sm_m ||
                (u.sm_m = {
                  proto: u,
                  fields: {
                    client_ids: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: e.qM.readUint64String,
                      pbr: e.qM.readPackedUint64String,
                      bw: e.gp.writeRepeatedUint64String,
                    },
                  },
                }),
              u.sm_m
            );
          }
          static MBF() {
            return u.sm_mbf || (u.sm_mbf = e.w0(u.M())), u.sm_mbf;
          }
          toObject(r = !1) {
            return u.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(u.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(u.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              x = new u();
            return u.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(u.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return u.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(u.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              u.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_GetAuthSessionsForAccount_Response";
          }
        }
        class y extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              y.prototype.version || e.Sg(y.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              y.sm_m ||
                (y.sm_m = {
                  proto: y,
                  fields: {
                    version: { n: 1, br: e.qM.readInt32, bw: e.gp.writeInt32 },
                    client_id: {
                      n: 2,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    steamid: {
                      n: 3,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    signature: {
                      n: 4,
                      br: e.qM.readBytes,
                      bw: e.gp.writeBytes,
                    },
                    confirm: {
                      n: 5,
                      d: !1,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                    persistence: {
                      n: 6,
                      d: de.nW,
                      br: e.qM.readEnum,
                      bw: e.gp.writeEnum,
                    },
                  },
                }),
              y.sm_m
            );
          }
          static MBF() {
            return y.sm_mbf || (y.sm_mbf = e.w0(y.M())), y.sm_mbf;
          }
          toObject(r = !1) {
            return y.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(y.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(y.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              x = new y();
            return y.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(y.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return y.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(y.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              y.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request";
          }
        }
        class O extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return O.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new O();
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              x = new O();
            return O.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return O.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              O.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response";
          }
        }
        class I extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              I.prototype.client_id || e.Sg(I.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              I.sm_m ||
                (I.sm_m = {
                  proto: I,
                  fields: {
                    client_id: {
                      n: 1,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    steamid: {
                      n: 2,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    code: { n: 3, br: e.qM.readString, bw: e.gp.writeString },
                    code_type: { n: 4, br: e.qM.readEnum, bw: e.gp.writeEnum },
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
          static toObject(r, a) {
            return e.BT(I.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(I.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              x = new I();
            return I.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(I.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return I.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(I.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              I.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request";
          }
        }
        class E extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              E.prototype.agreement_session_url || e.Sg(E.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              E.sm_m ||
                (E.sm_m = {
                  proto: E,
                  fields: {
                    agreement_session_url: {
                      n: 7,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
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
          static toObject(r, a) {
            return e.BT(E.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(E.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              x = new E();
            return E.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(E.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return E.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(E.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              E.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response";
          }
        }
        class L extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              L.prototype.refresh_token || e.Sg(L.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              L.sm_m ||
                (L.sm_m = {
                  proto: L,
                  fields: {
                    refresh_token: {
                      n: 1,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    steamid: {
                      n: 2,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    renewal_type: {
                      n: 3,
                      br: e.qM.readEnum,
                      bw: e.gp.writeEnum,
                    },
                  },
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
          static toObject(r, a) {
            return e.BT(L.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(L.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              x = new L();
            return L.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(L.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return L.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(L.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              L.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_AccessToken_GenerateForApp_Request";
          }
        }
        class Z extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Z.prototype.access_token || e.Sg(Z.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Z.sm_m ||
                (Z.sm_m = {
                  proto: Z,
                  fields: {
                    access_token: {
                      n: 1,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    refresh_token: {
                      n: 2,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
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
          static toObject(r, a) {
            return e.BT(Z.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(Z.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              x = new Z();
            return Z.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(Z.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return Z.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(Z.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              Z.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_AccessToken_GenerateForApp_Response";
          }
        }
        class R extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              R.prototype.include_revoked || e.Sg(R.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              R.sm_m ||
                (R.sm_m = {
                  proto: R,
                  fields: {
                    include_revoked: {
                      n: 1,
                      d: !1,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                  },
                }),
              R.sm_m
            );
          }
          static MBF() {
            return R.sm_mbf || (R.sm_mbf = e.w0(R.M())), R.sm_mbf;
          }
          toObject(r = !1) {
            return R.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(R.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(R.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              x = new R();
            return R.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(R.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return R.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(R.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              R.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_RefreshToken_Enumerate_Request";
          }
        }
        class ar extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ar.prototype.refresh_tokens || e.Sg(ar.M()),
              M.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ar.sm_m ||
                (ar.sm_m = {
                  proto: ar,
                  fields: {
                    refresh_tokens: { n: 1, c: Fr, r: !0, q: !0 },
                    requesting_token: {
                      n: 2,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
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
          static toObject(r, a) {
            return e.BT(ar.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(ar.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              x = new ar();
            return ar.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(ar.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return ar.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(ar.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              ar.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_RefreshToken_Enumerate_Response";
          }
        }
        class Kr extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Kr.prototype.time || e.Sg(Kr.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Kr.sm_m ||
                (Kr.sm_m = {
                  proto: Kr,
                  fields: {
                    time: { n: 1, br: e.qM.readUint32, bw: e.gp.writeUint32 },
                    ip: { n: 2, c: D.kK },
                    locale: { n: 3, br: e.qM.readString, bw: e.gp.writeString },
                    country: {
                      n: 4,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    state: { n: 5, br: e.qM.readString, bw: e.gp.writeString },
                    city: { n: 6, br: e.qM.readString, bw: e.gp.writeString },
                  },
                }),
              Kr.sm_m
            );
          }
          static MBF() {
            return Kr.sm_mbf || (Kr.sm_mbf = e.w0(Kr.M())), Kr.sm_mbf;
          }
          toObject(r = !1) {
            return Kr.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(Kr.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(Kr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              x = new Kr();
            return Kr.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(Kr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return Kr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(Kr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              Kr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_RefreshToken_Enumerate_Response_TokenUsageEvent";
          }
        }
        class Fr extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Fr.prototype.token_id || e.Sg(Fr.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Fr.sm_m ||
                (Fr.sm_m = {
                  proto: Fr,
                  fields: {
                    token_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    token_description: {
                      n: 2,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    time_updated: {
                      n: 3,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    platform_type: {
                      n: 4,
                      br: e.qM.readEnum,
                      bw: e.gp.writeEnum,
                    },
                    logged_in: { n: 5, br: e.qM.readBool, bw: e.gp.writeBool },
                    os_platform: {
                      n: 6,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    auth_type: {
                      n: 7,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    gaming_device_type: {
                      n: 8,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    first_seen: { n: 9, c: Kr },
                    last_seen: { n: 10, c: Kr },
                    os_type: { n: 11, br: e.qM.readInt32, bw: e.gp.writeInt32 },
                    authentication_type: {
                      n: 12,
                      br: e.qM.readEnum,
                      bw: e.gp.writeEnum,
                    },
                    effective_token_state: {
                      n: 13,
                      br: e.qM.readEnum,
                      bw: e.gp.writeEnum,
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
          static toObject(r, a) {
            return e.BT(Fr.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(Fr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              x = new Fr();
            return Fr.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(Fr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return Fr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(Fr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              Fr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_RefreshToken_Enumerate_Response_RefreshTokenDescription";
          }
        }
        class Ar extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ar.prototype.token || e.Sg(Ar.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ar.sm_m ||
                (Ar.sm_m = {
                  proto: Ar,
                  fields: {
                    token: { n: 1, br: e.qM.readString, bw: e.gp.writeString },
                    revoke_action: {
                      n: 2,
                      d: Pr,
                      br: e.qM.readEnum,
                      bw: e.gp.writeEnum,
                    },
                  },
                }),
              Ar.sm_m
            );
          }
          static MBF() {
            return Ar.sm_mbf || (Ar.sm_mbf = e.w0(Ar.M())), Ar.sm_mbf;
          }
          toObject(r = !1) {
            return Ar.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(Ar.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(Ar.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              x = new Ar();
            return Ar.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(Ar.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return Ar.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(Ar.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              Ar.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_Token_Revoke_Request";
          }
        }
        class ue extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return ue.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new ue();
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              x = new ue();
            return ue.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return ue.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              ue.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_Token_Revoke_Response";
          }
        }
        class Lr extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Lr.prototype.token_id || e.Sg(Lr.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Lr.sm_m ||
                (Lr.sm_m = {
                  proto: Lr,
                  fields: {
                    token_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    steamid: {
                      n: 2,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    revoke_action: {
                      n: 3,
                      d: Pr,
                      br: e.qM.readEnum,
                      bw: e.gp.writeEnum,
                    },
                    signature: {
                      n: 4,
                      br: e.qM.readBytes,
                      bw: e.gp.writeBytes,
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
          static toObject(r, a) {
            return e.BT(Lr.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(Lr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              x = new Lr();
            return Lr.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(Lr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return Lr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(Lr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              Lr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_RefreshToken_Revoke_Request";
          }
        }
        class ze extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return ze.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new ze();
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              x = new ze();
            return ze.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return ze.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              ze.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_RefreshToken_Revoke_Response";
          }
        }
        class Zr extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Zr.prototype.token_id || e.Sg(Zr.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Zr.sm_m ||
                (Zr.sm_m = {
                  proto: Zr,
                  fields: {
                    token_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    token_description: {
                      n: 2,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    time_updated: {
                      n: 3,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    platform_type: {
                      n: 4,
                      br: e.qM.readEnum,
                      bw: e.gp.writeEnum,
                    },
                    token_state: {
                      n: 5,
                      br: e.qM.readEnum,
                      bw: e.gp.writeEnum,
                    },
                    owner_steamid: {
                      n: 6,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    os_platform: {
                      n: 7,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    os_type: { n: 8, br: e.qM.readInt32, bw: e.gp.writeInt32 },
                    auth_type: {
                      n: 9,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    gaming_device_type: {
                      n: 10,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    first_seen: { n: 11, c: Jr },
                    last_seen: { n: 12, c: Jr },
                  },
                }),
              Zr.sm_m
            );
          }
          static MBF() {
            return Zr.sm_mbf || (Zr.sm_mbf = e.w0(Zr.M())), Zr.sm_mbf;
          }
          toObject(r = !1) {
            return Zr.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(Zr.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(Zr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              x = new Zr();
            return Zr.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(Zr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return Zr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(Zr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              Zr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSupportRefreshTokenDescription";
          }
        }
        class Jr extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Jr.prototype.time || e.Sg(Jr.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Jr.sm_m ||
                (Jr.sm_m = {
                  proto: Jr,
                  fields: {
                    time: { n: 1, br: e.qM.readUint32, bw: e.gp.writeUint32 },
                    ip: { n: 2, c: D.kK },
                    country: {
                      n: 3,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    state: { n: 4, br: e.qM.readString, bw: e.gp.writeString },
                    city: { n: 5, br: e.qM.readString, bw: e.gp.writeString },
                  },
                }),
              Jr.sm_m
            );
          }
          static MBF() {
            return Jr.sm_mbf || (Jr.sm_mbf = e.w0(Jr.M())), Jr.sm_mbf;
          }
          toObject(r = !1) {
            return Jr.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(Jr.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(Jr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              x = new Jr();
            return Jr.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(Jr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return Jr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(Jr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              Jr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSupportRefreshTokenDescription_TokenUsageEvent";
          }
        }
        class Gr extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Gr.prototype.action || e.Sg(Gr.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Gr.sm_m ||
                (Gr.sm_m = {
                  proto: Gr,
                  fields: {
                    action: { n: 1, br: e.qM.readInt32, bw: e.gp.writeInt32 },
                    time: { n: 2, br: e.qM.readUint32, bw: e.gp.writeUint32 },
                    ip: { n: 3, c: D.kK },
                    actor: {
                      n: 4,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                  },
                }),
              Gr.sm_m
            );
          }
          static MBF() {
            return Gr.sm_mbf || (Gr.sm_mbf = e.w0(Gr.M())), Gr.sm_mbf;
          }
          toObject(r = !1) {
            return Gr.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(Gr.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(Gr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              x = new Gr();
            return Gr.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(Gr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return Gr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(Gr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              Gr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSupportRefreshTokenAudit";
          }
        }
        class qr extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              qr.prototype.steamid || e.Sg(qr.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              qr.sm_m ||
                (qr.sm_m = {
                  proto: qr,
                  fields: {
                    steamid: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    include_revoked_tokens: {
                      n: 2,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                  },
                }),
              qr.sm_m
            );
          }
          static MBF() {
            return qr.sm_mbf || (qr.sm_mbf = e.w0(qr.M())), qr.sm_mbf;
          }
          toObject(r = !1) {
            return qr.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(qr.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(qr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              x = new qr();
            return qr.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(qr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return qr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(qr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              qr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthenticationSupport_QueryRefreshTokensByAccount_Request";
          }
        }
        class Sr extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Sr.prototype.refresh_tokens || e.Sg(Sr.M()),
              M.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Sr.sm_m ||
                (Sr.sm_m = {
                  proto: Sr,
                  fields: {
                    refresh_tokens: { n: 1, c: Zr, r: !0, q: !0 },
                    last_token_reset: {
                      n: 2,
                      br: e.qM.readInt32,
                      bw: e.gp.writeInt32,
                    },
                  },
                }),
              Sr.sm_m
            );
          }
          static MBF() {
            return Sr.sm_mbf || (Sr.sm_mbf = e.w0(Sr.M())), Sr.sm_mbf;
          }
          toObject(r = !1) {
            return Sr.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(Sr.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(Sr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              x = new Sr();
            return Sr.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(Sr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return Sr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(Sr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              Sr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthenticationSupport_QueryRefreshTokensByAccount_Response";
          }
        }
        class _r extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              _r.prototype.token_id || e.Sg(_r.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _r.sm_m ||
                (_r.sm_m = {
                  proto: _r,
                  fields: {
                    token_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                  },
                }),
              _r.sm_m
            );
          }
          static MBF() {
            return _r.sm_mbf || (_r.sm_mbf = e.w0(_r.M())), _r.sm_mbf;
          }
          toObject(r = !1) {
            return _r.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(_r.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(_r.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              x = new _r();
            return _r.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(_r.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return _r.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(_r.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              _r.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthenticationSupport_QueryRefreshTokenByID_Request";
          }
        }
        class ne extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ne.prototype.refresh_tokens || e.Sg(ne.M()),
              M.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ne.sm_m ||
                (ne.sm_m = {
                  proto: ne,
                  fields: { refresh_tokens: { n: 1, c: Zr, r: !0, q: !0 } },
                }),
              ne.sm_m
            );
          }
          static MBF() {
            return ne.sm_mbf || (ne.sm_mbf = e.w0(ne.M())), ne.sm_mbf;
          }
          toObject(r = !1) {
            return ne.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(ne.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(ne.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              x = new ne();
            return ne.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(ne.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return ne.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(ne.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              ne.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthenticationSupport_QueryRefreshTokenByID_Response";
          }
        }
        class Cr extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Cr.prototype.token_id || e.Sg(Cr.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Cr.sm_m ||
                (Cr.sm_m = {
                  proto: Cr,
                  fields: {
                    token_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    steamid: {
                      n: 2,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                  },
                }),
              Cr.sm_m
            );
          }
          static MBF() {
            return Cr.sm_mbf || (Cr.sm_mbf = e.w0(Cr.M())), Cr.sm_mbf;
          }
          toObject(r = !1) {
            return Cr.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(Cr.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(Cr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              x = new Cr();
            return Cr.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(Cr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return Cr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(Cr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              Cr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthenticationSupport_RevokeToken_Request";
          }
        }
        class Pe extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Pe.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new Pe();
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              x = new Pe();
            return Pe.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return Pe.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              Pe.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthenticationSupport_RevokeToken_Response";
          }
        }
        class re extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              re.prototype.token_id || e.Sg(re.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              re.sm_m ||
                (re.sm_m = {
                  proto: re,
                  fields: {
                    token_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                  },
                }),
              re.sm_m
            );
          }
          static MBF() {
            return re.sm_mbf || (re.sm_mbf = e.w0(re.M())), re.sm_mbf;
          }
          toObject(r = !1) {
            return re.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(re.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(re.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              x = new re();
            return re.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(re.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return re.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(re.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              re.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthenticationSupport_GetTokenHistory_Request";
          }
        }
        class Qr extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Qr.prototype.history || e.Sg(Qr.M()),
              M.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Qr.sm_m ||
                (Qr.sm_m = {
                  proto: Qr,
                  fields: { history: { n: 1, c: Gr, r: !0, q: !0 } },
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
          static toObject(r, a) {
            return e.BT(Qr.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(Qr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              x = new Qr();
            return Qr.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(Qr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return Qr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(Qr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              Qr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthenticationSupport_GetTokenHistory_Response";
          }
        }
        class Rr extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Rr.prototype.steamid || e.Sg(Rr.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Rr.sm_m ||
                (Rr.sm_m = {
                  proto: Rr,
                  fields: {
                    steamid: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    token_id: {
                      n: 2,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                  },
                }),
              Rr.sm_m
            );
          }
          static MBF() {
            return Rr.sm_mbf || (Rr.sm_mbf = e.w0(Rr.M())), Rr.sm_mbf;
          }
          toObject(r = !1) {
            return Rr.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(Rr.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(Rr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              x = new Rr();
            return Rr.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(Rr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return Rr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(Rr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              Rr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthenticationSupport_MarkTokenCompromised_Request";
          }
        }
        class We extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return We.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new We();
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              x = new We();
            return We.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return We.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              We.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthenticationSupport_MarkTokenCompromised_Response";
          }
        }
        class xr extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              xr.prototype.platform || e.Sg(xr.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              xr.sm_m ||
                (xr.sm_m = {
                  proto: xr,
                  fields: {
                    platform: {
                      n: 1,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    appid: { n: 2, br: e.qM.readUint32, bw: e.gp.writeUint32 },
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
          static toObject(r, a) {
            return e.BT(xr.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(xr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              x = new xr();
            return xr.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(xr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return xr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(xr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              xr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloudGaming_CreateNonce_Request";
          }
        }
        class ee extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ee.prototype.nonce || e.Sg(ee.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ee.sm_m ||
                (ee.sm_m = {
                  proto: ee,
                  fields: {
                    nonce: { n: 1, br: e.qM.readString, bw: e.gp.writeString },
                    expiry: { n: 2, br: e.qM.readUint32, bw: e.gp.writeUint32 },
                  },
                }),
              ee.sm_m
            );
          }
          static MBF() {
            return ee.sm_mbf || (ee.sm_mbf = e.w0(ee.M())), ee.sm_mbf;
          }
          toObject(r = !1) {
            return ee.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(ee.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(ee.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              x = new ee();
            return ee.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(ee.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return ee.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(ee.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              ee.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloudGaming_CreateNonce_Response";
          }
        }
        class te extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              te.prototype.appid || e.Sg(te.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              te.sm_m ||
                (te.sm_m = {
                  proto: te,
                  fields: {
                    appid: { n: 1, br: e.qM.readUint32, bw: e.gp.writeUint32 },
                    minutes_remaining: {
                      n: 2,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                  },
                }),
              te.sm_m
            );
          }
          static MBF() {
            return te.sm_mbf || (te.sm_mbf = e.w0(te.M())), te.sm_mbf;
          }
          toObject(r = !1) {
            return te.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(te.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(te.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              x = new te();
            return te.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(te.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return te.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(te.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              te.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloudGaming_TimeRemaining";
          }
        }
        class ie extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ie.prototype.platform || e.Sg(ie.M()),
              M.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ie.sm_m ||
                (ie.sm_m = {
                  proto: ie,
                  fields: {
                    platform: {
                      n: 1,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    appid_list: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: e.qM.readUint32,
                      pbr: e.qM.readPackedUint32,
                      bw: e.gp.writeRepeatedUint32,
                    },
                  },
                }),
              ie.sm_m
            );
          }
          static MBF() {
            return ie.sm_mbf || (ie.sm_mbf = e.w0(ie.M())), ie.sm_mbf;
          }
          toObject(r = !1) {
            return ie.toObject(r, this);
          }
          static toObject(r, a) {
            return e.BT(ie.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(ie.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              x = new ie();
            return ie.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(ie.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return ie.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(ie.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              ie.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloudGaming_GetTimeRemaining_Request";
          }
        }
        class Xr extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Xr.prototype.entries || e.Sg(Xr.M()),
              M.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Xr.sm_m ||
                (Xr.sm_m = {
                  proto: Xr,
                  fields: { entries: { n: 2, c: te, r: !0, q: !0 } },
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
          static toObject(r, a) {
            return e.BT(Xr.M(), r, a);
          }
          static fromObject(r) {
            return e.Uq(Xr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (l().BinaryReader)(r),
              x = new Xr();
            return Xr.deserializeBinaryFromReader(x, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return e.zj(Xr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (l().BinaryWriter)();
            return Xr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            e.i0(Xr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (l().BinaryWriter)();
            return (
              Xr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloudGaming_GetTimeRemaining_Response";
          }
        }
        var Fe;
        ((Q) => {
          function r(Nr, Mr, Yr) {
            return Nr.SendMsg(
              "Authentication.GetPasswordRSAPublicKey#1",
              (0, br.I8)(tr, Mr, Yr),
              nr,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          Q.GetPasswordRSAPublicKey = r;
          function a(Nr, Mr, Yr) {
            return Nr.SendMsg(
              "Authentication.BeginAuthSessionViaQR#1",
              (0, br.I8)(U, Mr, Yr),
              Y,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          Q.BeginAuthSessionViaQR = a;
          function x(Nr, Mr, Yr) {
            return Nr.SendMsg(
              "Authentication.BeginAuthSessionViaCredentials#1",
              (0, br.I8)($, Mr, Yr),
              sr,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          Q.BeginAuthSessionViaCredentials = x;
          function ve(Nr, Mr, Yr) {
            return Nr.SendMsg(
              "Authentication.PollAuthSessionStatus#1",
              (0, br.I8)(k, Mr, Yr),
              C,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          Q.PollAuthSessionStatus = ve;
          function j(Nr, Mr, Yr) {
            return Nr.SendMsg(
              "Authentication.GetAuthSessionInfo#1",
              (0, br.I8)(or, Mr, Yr),
              mr,
              { ePrivilege: 1 },
            );
          }
          Q.GetAuthSessionInfo = j;
          function Ie(Nr, Mr, Yr) {
            return Nr.SendMsg(
              "Authentication.GetAuthSessionRiskInfo#1",
              (0, br.I8)(dr, Mr, Yr),
              Br,
              { ePrivilege: 1 },
            );
          }
          Q.GetAuthSessionRiskInfo = Ie;
          function Ee(Nr, Mr) {
            return Nr.SendNotification(
              "Authentication.NotifyRiskQuizResults#1",
              (0, br.I8)(Wr, Mr),
              { ePrivilege: 1 },
            );
          }
          Q.NotifyRiskQuizResults = Ee;
          function Le(Nr, Mr, Yr) {
            return Nr.SendMsg(
              "Authentication.UpdateAuthSessionWithMobileConfirmation#1",
              (0, br.I8)(y, Mr, Yr),
              O,
              { ePrivilege: 1 },
            );
          }
          Q.UpdateAuthSessionWithMobileConfirmation = Le;
          function rt(Nr, Mr, Yr) {
            return Nr.SendMsg(
              "Authentication.UpdateAuthSessionWithSteamGuardCode#1",
              (0, br.I8)(I, Mr, Yr),
              E,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          Q.UpdateAuthSessionWithSteamGuardCode = rt;
          function Ce(Nr, Mr, Yr) {
            return Nr.SendMsg(
              "Authentication.GenerateAccessTokenForApp#1",
              (0, br.I8)(L, Mr, Yr),
              Z,
              { ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }
          Q.GenerateAccessTokenForApp = Ce;
          function Re(Nr, Mr, Yr) {
            return Nr.SendMsg(
              "Authentication.EnumerateTokens#1",
              (0, br.I8)(R, Mr, Yr),
              ar,
              { ePrivilege: 1 },
            );
          }
          Q.EnumerateTokens = Re;
          function et(Nr, Mr, Yr) {
            return Nr.SendMsg(
              "Authentication.GetAuthSessionsForAccount#1",
              (0, br.I8)(Se, Mr, Yr),
              u,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          Q.GetAuthSessionsForAccount = et;
          function tt(Nr, Mr, Yr) {
            return Nr.SendMsg(
              "Authentication.RevokeToken#1",
              (0, br.I8)(Ar, Mr, Yr),
              ue,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          Q.RevokeToken = tt;
          function we(Nr, Mr, Yr) {
            return Nr.SendMsg(
              "Authentication.RevokeRefreshToken#1",
              (0, br.I8)(Lr, Mr, Yr),
              ze,
              { ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          Q.RevokeRefreshToken = we;
        })(Fe || (Fe = {}));
        var Je;
        ((Q) => {
          function r(Ie, Ee, Le) {
            return Ie.SendMsg(
              "AuthenticationSupport.QueryRefreshTokensByAccount#1",
              (0, br.I8)(qr, Ee, Le),
              Sr,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }
          Q.QueryRefreshTokensByAccount = r;
          function a(Ie, Ee, Le) {
            return Ie.SendMsg(
              "AuthenticationSupport.QueryRefreshTokenByID#1",
              (0, br.I8)(_r, Ee, Le),
              ne,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }
          Q.QueryRefreshTokenByID = a;
          function x(Ie, Ee, Le) {
            return Ie.SendMsg(
              "AuthenticationSupport.RevokeToken#1",
              (0, br.I8)(Cr, Ee, Le),
              Pe,
              { ePrivilege: 5 },
            );
          }
          Q.RevokeToken = x;
          function ve(Ie, Ee, Le) {
            return Ie.SendMsg(
              "AuthenticationSupport.GetTokenHistory#1",
              (0, br.I8)(re, Ee, Le),
              Qr,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }
          Q.GetTokenHistory = ve;
          function j(Ie, Ee, Le) {
            return Ie.SendMsg(
              "AuthenticationSupport.MarkTokenCompromised#1",
              (0, br.I8)(Rr, Ee, Le),
              We,
              { ePrivilege: 5 },
            );
          }
          Q.MarkTokenCompromised = j;
        })(Je || (Je = {}));
        var ke;
        ((Q) => {
          function r(x, ve, j) {
            return x.SendMsg(
              "CloudGaming.CreateNonce#1",
              (0, br.I8)(xr, ve, j),
              ee,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          Q.CreateNonce = r;
          function a(x, ve, j) {
            return x.SendMsg(
              "CloudGaming.GetTimeRemaining#1",
              (0, br.I8)(ie, ve, j),
              Xr,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          Q.GetTimeRemaining = a;
        })(ke || (ke = {}));
      },
      95414: (se, Be, b) => {
        "use strict";
        b.d(Be, { j: () => lr, u: () => Ir });
        var s = b(7850),
          ae = b(90626),
          M = b(24660),
          l = b(83482),
          e = b(72865),
          br = b(77200),
          de = b(53113),
          D = b(68094),
          P = b(72609),
          oe = b(3166);
        function zr(Vr) {
          if (Vr) {
            if ("appid" in Vr) return "app";
            if ("bundleid" in Vr) return "bundle";
            if ("packageid" in Vr) return "sub";
          }
        }
        function lr(Vr) {
          const {
              id: cr,
              hoverClassName: Ur,
              fnGetIDOverride: Tr,
              fnHoverState: V,
              disableScreenshots: jr,
              children: fr,
            } = Vr,
            vr = ae.useRef(null),
            Pr = ae.useCallback(
              (q) => {
                const K = zr(cr);
                K &&
                  (V && V(!0),
                  window.GameHover &&
                    (vr.current &&
                      jr &&
                      (vr.current.dataset.hoverDisableScreenshots = "true"),
                    window.GameHover(
                      Tr ? Tr() : vr.current,
                      q,
                      "global_hover",
                      { type: K, id: (0, D.G$)(cr).id, v6: 1 },
                    )));
              },
              [V, Tr, jr, cr],
            ),
            F = ae.useCallback(
              (q) => {
                zr(cr) &&
                  (V && q.relatedTarget && V(!1),
                  window.HideGameHover &&
                    window.HideGameHover(
                      Tr ? Tr() : vr.current,
                      q,
                      "global_hover",
                    ));
              },
              [cr, V, Tr],
            );
          return (0, s.jsx)("div", {
            ref: vr,
            className: Ur,
            onMouseEnter: Pr,
            onMouseLeave: F,
            onFocus: Pr,
            onBlur: F,
            children: fr,
          });
        }
        function Ir(Vr) {
          const {
              id: cr,
              strExtraParams: Ur,
              fnOnClickOverride: Tr,
              strOverrideURL: V,
            } = Vr,
            jr = (0, e.n9)(),
            fr = (0, br.w)(),
            vr = (0, de.NT)(
              V ||
                (cr && "creatorid" in cr
                  ? (0, l.It)(
                      `${P.TS.STORE_BASE_URL}curator/${((0, D.G$))(cr).id}${Ur ? `?${Ur}` : ""}`,
                      jr,
                      fr,
                    )
                  : (0, l.It)(
                      `${P.TS.STORE_BASE_URL}${zr(cr)}/${((0, D.G$))(cr).id}${Ur ? `?${Ur}` : ""}`,
                      jr,
                      fr,
                    )),
            );
          return (0, s.jsx)(lr, {
            ...Vr,
            children: (0, s.jsx)(M.Ii, {
              className: Vr.className,
              href: Tr ? void 0 : vr,
              target: P.TS.IN_CLIENT || Tr ? void 0 : "_blank",
              rel: "noopener noreferrer",
              onClick: Tr,
              children: Vr.children,
            }),
          });
        }
      },
      8059: (se, Be, b) => {
        "use strict";
        b.d(Be, {
          FU: () => Tr,
          eF: () => Ur,
          gf: () => jr,
          wI: () => V,
          yp: () => fr,
        });
        var s = b(14947),
          ae = b(41735),
          M = b.n(ae),
          l = b(35038),
          e = b(27066),
          br = b(72604),
          de = b(99412),
          D = b(94354),
          P = b(3166),
          oe = b(94276),
          zr = b(71944),
          lr = b(64434),
          Ir = Object.defineProperty,
          Vr = Object.getOwnPropertyDescriptor,
          cr = (F, q, K, v) => {
            for (
              var T = v > 1 ? void 0 : v ? Vr(q, K) : q, X = F.length - 1, J;
              X >= 0;
              X--
            )
              (J = F[X]) && (T = (v ? J(q, K, T) : J(T)) || T);
            return v && T && Ir(q, K, T), T;
          },
          Ur = ((F) => (
            (F[(F.None = 0)] = "None"),
            (F[(F.Generic = 1)] = "Generic"),
            (F[(F.Expired = 2)] = "Expired"),
            (F[(F.Network = 3)] = "Network"),
            (F[(F.MoveAuthenticator = 4)] = "MoveAuthenticator"),
            (F[(F.RateLimitExceeded = 5)] = "RateLimitExceeded"),
            (F[(F.AnonymousLogin = 6)] = "AnonymousLogin"),
            F
          ))(Ur || {});
        function Tr(F) {
          const {
            shared_secret: q,
            identity_secret: K,
            secret_1: v,
            status: T,
            uri: X,
            server_time: J,
            ...Me
          } = F;
          return {
            shared_secret: zr.fromByteArray(q),
            identity_secret: zr.fromByteArray(K),
            secret_1: zr.fromByteArray(v),
            ...Me,
          };
        }
        var V = ((F) => (
          (F[(F.k_Success = 0)] = "k_Success"),
          (F[(F.k_PrimaryDomainFail = 1)] = "k_PrimaryDomainFail"),
          (F[(F.k_SecondaryDomainFail = 2)] = "k_SecondaryDomainFail"),
          F
        ))(V || {});
        class jr {
          m_transport;
          m_strClientID;
          m_msPollInterval;
          m_activeTimerID;
          m_rgRequestID;
          m_strTokenToRevoke;
          m_strChallengeURL = void 0;
          m_onShowAgreement;
          m_bRemoteInteraction = !1;
          m_onCompleteCallback;
          m_eFailureState = 0;
          m_strExtendedErrorMessage = "";
          m_onDeviceDetailsCallback;
          constructor(q, K, v, T) {
            (0, s.Gn)(this),
              (this.m_transport = q),
              (this.m_onCompleteCallback = K),
              (this.m_onDeviceDetailsCallback = v),
              (this.m_onShowAgreement = T);
          }
          StartPolling(q = !0) {
            this.m_activeTimerID != null && this.StopPolling(),
              q
                ? this.PollForUpdate()
                : (this.m_activeTimerID = window.setTimeout(
                    this.PollForUpdate,
                    this.m_msPollInterval,
                  ));
          }
          StopPolling() {
            window.clearTimeout(this.m_activeTimerID),
              (this.m_activeTimerID = void 0);
          }
          async PollForUpdate() {
            try {
              const q = l.w.Init(oe.Ev);
              q.SetEMsg(D.Kec),
                q.Body().set_client_id(this.m_strClientID),
                q.Body().set_request_id(this.m_rgRequestID),
                this.m_strTokenToRevoke &&
                  q.Body().set_token_to_revoke(this.m_strTokenToRevoke);
              const K = await oe.kX.PollAuthSessionStatus(this.m_transport, q),
                v = K.GetEResult();
              if (v !== br.R) {
                if (v === br.zi) {
                  const be = K.Hdr().transport_error();
                  if (
                    ((0, lr.ZI)(
                      `Failed to poll auth session. Result ${v}. Transport Error: ${be}`,
                    ),
                    be === de.MhR || be === de.VrD)
                  )
                    return (
                      this.m_transport.MakeReady(), this.StartPolling(!1), br.R
                    );
                }
                if (v === br.Qo || v === br.ob) this.m_eFailureState = 2;
                else if (v === br.h_) this.m_eFailureState = 5;
                else if (v == br.oH) {
                  if (this.m_onShowAgreement)
                    this.m_onShowAgreement(K.Body().agreement_session_url());
                  else {
                    const be = K.Body().agreement_session_url(),
                      Ve = document.location.href;
                    window.location.href = `${be}&redir=${encodeURIComponent(Ve)}`;
                  }
                  return this.m_onCompleteCallback({ bSuccess: !1 }), v;
                } else
                  (0, lr.ZI)(`Failed to poll auth session. Result: ${v}`),
                    (this.m_eFailureState = 1);
                return this.m_onCompleteCallback({ bSuccess: !1 }), v;
              }
              const {
                new_challenge_url: T,
                new_client_id: X,
                refresh_token: J,
                access_token: Me,
                account_name: Oe,
                had_remote_interaction: kr,
                new_guard_data: pe,
              } = K.Body().toObject();
              return (
                (this.m_bRemoteInteraction = !!kr),
                J
                  ? (this.m_onCompleteCallback({
                      bSuccess: !0,
                      strRefreshToken: J,
                      strAccessToken: Me,
                      strAccountName: Oe,
                      strNewGuardData: pe,
                    }),
                    v)
                  : (T && (this.m_strChallengeURL = T),
                    X && (this.m_strClientID = X),
                    this.StartPolling(!1),
                    v)
              );
            } catch (q) {
              return (
                (0, lr.ZI)(`Failed to poll auth session. ${q}`),
                (this.m_eFailureState = 1),
                this.m_onCompleteCallback({ bSuccess: !1 }),
                br.zi
              );
            }
          }
          SetTokenToRevoke(q) {
            this.m_strTokenToRevoke = q;
          }
          GetFailureState() {
            return this.m_eFailureState;
          }
          GetExtendedErrorMessage() {
            return this.m_strExtendedErrorMessage;
          }
          BHadRemoteInteraction() {
            return this.m_bRemoteInteraction;
          }
          async GetDeviceDetails() {
            const q = await this.m_onDeviceDetailsCallback();
            return oe.tS.fromObject(q);
          }
        }
        cr([s.sH], jr.prototype, "m_strChallengeURL", 2),
          cr([s.sH], jr.prototype, "m_bRemoteInteraction", 2),
          cr([s.sH], jr.prototype, "m_eFailureState", 2),
          cr([s.sH], jr.prototype, "m_strExtendedErrorMessage", 2),
          cr([e.o], jr.prototype, "PollForUpdate", 1),
          cr([e.o], jr.prototype, "SetTokenToRevoke", 1);
        function fr(F) {
          const q = new FormData();
          q.append("nonce", F), q.append("sessionid", (0, P.KC)());
          let K = new URL(document.location.href);
          const v = new URLSearchParams(K.search);
          v.has("need_password") &&
            (v.delete("need_password"), (K.search = v.toString())),
            q.append("redir", K.toString());
          const T = `${P.TS.LOGIN_BASE_URL}jwt/finalizelogin`;
          return M()
            .post(T, q, { withCredentials: !0 })
            .then(
              (X) => {
                const { data: J } = X;
                if (
                  !J ||
                  !J.transfer_info ||
                  !J.steamID ||
                  !Array.isArray(J.transfer_info)
                )
                  return (
                    (0, lr.ZI)(
                      "Result of finalizelogin does not match expectations!",
                    ),
                    1
                  );
                const {
                  transfer_info: Me,
                  steamID: Oe,
                  primary_domain: kr,
                } = J;
                return Promise.all(
                  Me.map(({ url: pe, params: be }) =>
                    Pr(pe, { ...be, steamID: Oe }),
                  ),
                ).then(
                  (pe) => vr(pe, kr),
                  () => 2,
                );
              },
              () => (
                (0, lr.ZI)("Failed to finalize login. Initial call failed."), 1
              ),
            );
        }
        function vr(F, q) {
          let K = 0;
          return (
            F.forEach((v) => {
              v.bSuccess ||
                (q && v.domain.toLowerCase() === q.toLowerCase()
                  ? (K = 1)
                  : K == 0 && (K = 2));
            }),
            K
          );
        }
        async function Pr(F, q) {
          const K = new URL(F);
          let v = !0;
          try {
            const T = new FormData();
            Object.keys(q).forEach((J) => T.append(J, q[J]));
            const X = await M().post(F, T, {
              withCredentials: !0,
              timeout: 1e4,
            });
            X.status !== 200
              ? ((0, lr.ZI)(
                  `Transfer login to ${K.host} failed with status code: ${X.status}`,
                ),
                (v = !1))
              : X.data.result !== br.R &&
                ((0, lr.ZI)(
                  `Transfer login to ${K.host} failed with result: ${X.data.result}`,
                ),
                (v = !1));
          } catch (T) {
            (0, lr.ZI)(`Transfer login to ${K.host} failed: "${T}"`), (v = !1);
          }
          return { bSuccess: v, domain: K.host };
        }
      },
      64434: (se, Be, b) => {
        "use strict";
        b.d(Be, { P8: () => cr, ZI: () => P, tG: () => br, tH: () => D });
        var s = b(41735),
          ae = b.n(s),
          M = b(57589);
        const l = b(80407).A,
          e = new M.wd("Login"),
          br = e.Info,
          de = e.Debug,
          D = e.Warning,
          P = e.Error;
        function oe(V, jr) {
          return V.endsWith("/") || (V += "/"), `${V}login/${jr}/`;
        }
        function zr() {
          let V = new FormData();
          return V.append("donotcache", new Date().getTime().toString()), V;
        }
        async function lr(V) {
          let jr = zr(),
            fr = oe(V, "refreshcaptcha"),
            vr = "";
          try {
            let Pr = { "Content-Type": "multipart/form-data" },
              F = await axios.post(fr, jr, { headers: Pr });
            if (F.status != 200) return !1;
            vr = F.data.gid;
          } catch {
            return !1;
          }
          return vr;
        }
        function Ir(V, jr) {
          return oe(V, "rendercaptcha") + `?gid=${jr}`;
        }
        async function Vr(V, jr) {
          let fr = zr();
          fr.append("username", jr);
          let vr = oe(V, "getrsakey"),
            Pr;
          try {
            let F = { "Content-Type": "multipart/form-data" },
              q = await axios.post(vr, fr, { headers: F });
            if (q.status != 200)
              return (
                console.log("GetRSAKey failure: "), console.log(q.status), null
              );
            let K = q.data;
            if (
              !K ||
              !K.success ||
              !K.publickey_mod ||
              !K.publickey_exp ||
              !K.timestamp
            )
              return console.log("GetRSAKey failure: "), console.log(K), null;
            Pr = K;
          } catch (F) {
            return console.log("GetRSAKey exception: "), console.log(F), null;
          }
          return Pr;
        }
        function cr(V, jr) {
          let fr = l.getPublicKey(jr.publickey_mod, jr.publickey_exp),
            vr = l.encrypt(V, fr);
          return vr === !1 ? null : vr;
        }
        async function Ur(V, jr, fr, vr) {
          const Pr = cr(fr.strPassword, vr);
          if (!Pr) return null;
          let F = zr();
          F.append("password", Pr),
            F.append("username", fr.strUserName),
            F.append("twofactorcode", fr.strTwoFactorCode || ""),
            F.append("emailauth", fr.strEmailAuthCode || ""),
            F.append("loginfriendlyname", ""),
            F.append("captchagid", fr.gidCaptcha || ""),
            F.append("captcha_text", fr.strCaptchaText || ""),
            F.append("emailsteamid", fr.emailSteamID || ""),
            F.append("rsatimestamp", vr.timestamp),
            F.append("remember_login", fr.bRememberLogin ? "true" : "false");
          let q = {};
          jr &&
            (F.append("oauth_client_id", jr),
            F.append("mobile_chat_client", "true"));
          let K = oe(V, "dologin"),
            v;
          try {
            q.headers = { "Content-Type": "multipart/form-data" };
            let T = await axios.post(K, F, q);
            if (T.status != 200) return null;
            let X = T.data;
            if (!X) return null;
            X.oauth && (X.oauth = JSON.parse(X.oauth)), (v = X);
          } catch {
            return null;
          }
          return v;
        }
        async function Tr(V, jr, fr) {
          if (
            ((fr = Object.assign({}, fr)),
            fr.strUserName &&
              (fr.strUserName = fr.strUserName.replace(/[^\x00-\x7F]/g, "")),
            !fr.strPassword ||
              fr.strPassword.match(/[^\x00-\x7F]/) ||
              !fr.strUserName)
          )
            return null;
          let vr = await Vr(V, fr.strUserName);
          return vr
            ? await Ur(V, jr, fr, vr)
            : (console.error(`Failed to get RSA key from ${V}`), null);
        }
      },
      1317: (se, Be, b) => {
        "use strict";
        b.d(Be, {
          P5: () => xe,
          sW: () => he,
          YN: () => w,
          Fn: () => f,
          Mk: () => It,
          kt: () => Mt,
        });
        var s = b(7850),
          ae = b(32093),
          M = b(99412),
          l = b(72604),
          e = b(94276),
          br = b(41735),
          de = b.n(br),
          D = b(90626),
          P = b(92757);
        const oe =
          b.p +
          "images/applications/appmgmt/login_mobile_auth.png?v=valveisgoodatcaching";
        var zr = b(71568),
          lr = b(64434),
          Ir = b(87883),
          Vr = b(25792),
          cr = b(179),
          Ur = b(24660),
          Tr = b(19298),
          V = b(36707),
          jr = b(9843),
          fr = b.n(jr);
        function vr(o) {
          const {
            length: t,
            value: m,
            onChange: g,
            onPaste: h,
            tone: p,
            autoFocus: B,
            disabled: z,
            loading: A,
            backupCode: _,
            allowCharacter: rr,
          } = o;
          (0, D.useEffect)(() => {
            B && ye();
          }, []);
          const wr = (0, D.useRef)([]),
            ge = () => g(wr.current.map((er) => er.value)),
            ce = (er) => {
              const ur = er.target.value;
              if (ur && rr && !rr(ur)) return;
              const pr = er.target.nextElementSibling;
              er.target.value && pr && pr.focus(), ge();
            },
            me = (er) => {
              wr.current.findIndex((ur) => !!ur.value) === -1
                ? wr.current[0]?.select()
                : er.target.select();
            },
            ye = () => {
              const er = wr.current.find((ur) => !ur.value);
              er ? er.focus() : wr.current[wr.current.length - 1].focus();
            },
            Ue = (er) => {
              const ur = er.target;
              if (er.key === "Backspace" || er.key === "Delete") {
                const pr =
                  er.key === "Backspace"
                    ? ur.previousElementSibling
                    : ur.nextElementSibling;
                ur.value === "" &&
                  pr &&
                  ((pr.value = ""), pr.focus(), er.preventDefault(), ge());
              } else if (
                er.key === "ArrowLeft" ||
                er.key === "ArrowRight" ||
                er.key === "ArrowUp" ||
                er.key === "ArrowDown"
              ) {
                const pr =
                  er.key === "ArrowLeft" || er.key === "ArrowUp"
                    ? ur.previousElementSibling
                    : ur.nextElementSibling;
                pr && (pr.focus(), er.preventDefault());
              }
            },
            yr = (er) => {
              const ur = er.clipboardData.getData("Text");
              let pr = er.target,
                fe = 0;
              for (; pr && fe < ur.length; )
                pr.focus(),
                  (pr.value = ur.charAt(fe)),
                  (pr = pr.nextElementSibling),
                  fe++;
              ge(), er.preventDefault(), h && h();
            },
            je = [];
          for (let er = 0; er < t; er++)
            je.push(
              (0, s.jsx)(
                Ur.BA,
                {
                  noFocusRing: !0,
                  type: "text",
                  maxLength: 1,
                  ref: (ur) => {
                    wr.current[er] = ur;
                  },
                  onChange: ce,
                  onFocus: me,
                  onClick: (ur) => ur.stopPropagation(),
                  onKeyDown: Ue,
                  onPaste: yr,
                  value: m[er] ? m[er][0] : "",
                  autoComplete: "none",
                  autoFocus: er === 0 && B,
                  disabled: z || A,
                  className: fr().Input,
                },
                er,
              ),
            );
          return (0, s.jsxs)(Tr.Z, {
            className: (0, V.A)(
              fr().SegmentedCharacterInput,
              p === "danger" && fr().Danger,
              z && fr().Disabled,
              _ && fr().BackupCode,
            ),
            onClick: ye,
            children: [
              A &&
                (0, s.jsx)("div", {
                  className: fr().Loading,
                  children: (0, s.jsx)(Mt, { size: "small" }),
                }),
              je,
            ],
          });
        }
        var Pr = b(36118),
          F = b(54212),
          q = b(85599),
          K = b(71421),
          v = b(18210),
          T = b(54963),
          X = b(3166),
          J = b(8059),
          Me = b(14947),
          Oe = b(94354),
          kr = b(35038),
          pe = b(65946),
          be = b(95039),
          Ve = b(13018),
          gr = b(80613),
          G = b.n(gr),
          d = b(75245);
        function Ge(o) {
          return "unknown ETwoFactorUsageType ( " + o + " )";
        }
        function Qe(o) {
          return "unknown ETwoFactorStatusFieldFlag ( " + o + " )";
        }
        class Hr extends gr.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Hr.prototype.time || d.Sg(Hr.M()),
              gr.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Hr.sm_m ||
                (Hr.sm_m = {
                  proto: Hr,
                  fields: {
                    time: { n: 1, br: d.qM.readUint32, bw: d.gp.writeUint32 },
                    usage_type: { n: 2, br: d.qM.readEnum, bw: d.gp.writeEnum },
                    confirmation_type: {
                      n: 3,
                      br: d.qM.readInt32,
                      bw: d.gp.writeInt32,
                    },
                    confirmation_action: {
                      n: 4,
                      br: d.qM.readInt32,
                      bw: d.gp.writeInt32,
                    },
                  },
                }),
              Hr.sm_m
            );
          }
          static MBF() {
            return Hr.sm_mbf || (Hr.sm_mbf = d.w0(Hr.M())), Hr.sm_mbf;
          }
          toObject(t = !1) {
            return Hr.toObject(t, this);
          }
          static toObject(t, m) {
            return d.BT(Hr.M(), t, m);
          }
          static fromObject(t) {
            return d.Uq(Hr.M(), t);
          }
          static deserializeBinary(t) {
            let m = new (G().BinaryReader)(t),
              g = new Hr();
            return Hr.deserializeBinaryFromReader(g, m);
          }
          static deserializeBinaryFromReader(t, m) {
            return d.zj(Hr.MBF(), t, m);
          }
          serializeBinary() {
            var t = new (G().BinaryWriter)();
            return Hr.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, m) {
            d.i0(Hr.M(), t, m);
          }
          serializeBase64String() {
            var t = new (G().BinaryWriter)();
            return (
              Hr.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_UsageEvent";
          }
        }
        class Dr extends gr.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Dr.prototype.sender_time || d.Sg(Dr.M()),
              gr.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Dr.sm_m ||
                (Dr.sm_m = {
                  proto: Dr,
                  fields: {
                    sender_time: {
                      n: 1,
                      br: d.qM.readUint64String,
                      bw: d.gp.writeUint64String,
                    },
                  },
                }),
              Dr.sm_m
            );
          }
          static MBF() {
            return Dr.sm_mbf || (Dr.sm_mbf = d.w0(Dr.M())), Dr.sm_mbf;
          }
          toObject(t = !1) {
            return Dr.toObject(t, this);
          }
          static toObject(t, m) {
            return d.BT(Dr.M(), t, m);
          }
          static fromObject(t) {
            return d.Uq(Dr.M(), t);
          }
          static deserializeBinary(t) {
            let m = new (G().BinaryReader)(t),
              g = new Dr();
            return Dr.deserializeBinaryFromReader(g, m);
          }
          static deserializeBinaryFromReader(t, m) {
            return d.zj(Dr.MBF(), t, m);
          }
          serializeBinary() {
            var t = new (G().BinaryWriter)();
            return Dr.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, m) {
            d.i0(Dr.M(), t, m);
          }
          serializeBase64String() {
            var t = new (G().BinaryWriter)();
            return (
              Dr.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_Time_Request";
          }
        }
        class hr extends gr.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              hr.prototype.server_time || d.Sg(hr.M()),
              gr.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              hr.sm_m ||
                (hr.sm_m = {
                  proto: hr,
                  fields: {
                    server_time: {
                      n: 1,
                      br: d.qM.readUint64String,
                      bw: d.gp.writeUint64String,
                    },
                    skew_tolerance_seconds: {
                      n: 2,
                      br: d.qM.readUint64String,
                      bw: d.gp.writeUint64String,
                    },
                    large_time_jink: {
                      n: 3,
                      br: d.qM.readUint64String,
                      bw: d.gp.writeUint64String,
                    },
                    probe_frequency_seconds: {
                      n: 4,
                      br: d.qM.readUint32,
                      bw: d.gp.writeUint32,
                    },
                    adjusted_time_probe_frequency_seconds: {
                      n: 5,
                      br: d.qM.readUint32,
                      bw: d.gp.writeUint32,
                    },
                    hint_probe_frequency_seconds: {
                      n: 6,
                      br: d.qM.readUint32,
                      bw: d.gp.writeUint32,
                    },
                    sync_timeout: {
                      n: 7,
                      br: d.qM.readUint32,
                      bw: d.gp.writeUint32,
                    },
                    try_again_seconds: {
                      n: 8,
                      br: d.qM.readUint32,
                      bw: d.gp.writeUint32,
                    },
                    max_attempts: {
                      n: 9,
                      br: d.qM.readUint32,
                      bw: d.gp.writeUint32,
                    },
                  },
                }),
              hr.sm_m
            );
          }
          static MBF() {
            return hr.sm_mbf || (hr.sm_mbf = d.w0(hr.M())), hr.sm_mbf;
          }
          toObject(t = !1) {
            return hr.toObject(t, this);
          }
          static toObject(t, m) {
            return d.BT(hr.M(), t, m);
          }
          static fromObject(t) {
            return d.Uq(hr.M(), t);
          }
          static deserializeBinary(t) {
            let m = new (G().BinaryReader)(t),
              g = new hr();
            return hr.deserializeBinaryFromReader(g, m);
          }
          static deserializeBinaryFromReader(t, m) {
            return d.zj(hr.MBF(), t, m);
          }
          serializeBinary() {
            var t = new (G().BinaryWriter)();
            return hr.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, m) {
            d.i0(hr.M(), t, m);
          }
          serializeBase64String() {
            var t = new (G().BinaryWriter)();
            return (
              hr.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_Time_Response";
          }
        }
        class Er extends gr.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Er.prototype.steamid || d.Sg(Er.M()),
              gr.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Er.sm_m ||
                (Er.sm_m = {
                  proto: Er,
                  fields: {
                    steamid: {
                      n: 1,
                      br: d.qM.readFixed64String,
                      bw: d.gp.writeFixed64String,
                    },
                    include: { n: 2, br: d.qM.readEnum, bw: d.gp.writeEnum },
                  },
                }),
              Er.sm_m
            );
          }
          static MBF() {
            return Er.sm_mbf || (Er.sm_mbf = d.w0(Er.M())), Er.sm_mbf;
          }
          toObject(t = !1) {
            return Er.toObject(t, this);
          }
          static toObject(t, m) {
            return d.BT(Er.M(), t, m);
          }
          static fromObject(t) {
            return d.Uq(Er.M(), t);
          }
          static deserializeBinary(t) {
            let m = new (G().BinaryReader)(t),
              g = new Er();
            return Er.deserializeBinaryFromReader(g, m);
          }
          static deserializeBinaryFromReader(t, m) {
            return d.zj(Er.MBF(), t, m);
          }
          serializeBinary() {
            var t = new (G().BinaryWriter)();
            return Er.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, m) {
            d.i0(Er.M(), t, m);
          }
          serializeBase64String() {
            var t = new (G().BinaryWriter)();
            return (
              Er.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_Status_Request";
          }
        }
        class tr extends gr.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              tr.prototype.state || d.Sg(tr.M()),
              gr.Message.initialize(this, t, 0, -1, [16], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              tr.sm_m ||
                (tr.sm_m = {
                  proto: tr,
                  fields: {
                    state: { n: 1, br: d.qM.readUint32, bw: d.gp.writeUint32 },
                    inactivation_reason: {
                      n: 2,
                      br: d.qM.readUint32,
                      bw: d.gp.writeUint32,
                    },
                    authenticator_type: {
                      n: 3,
                      br: d.qM.readUint32,
                      bw: d.gp.writeUint32,
                    },
                    authenticator_allowed: {
                      n: 4,
                      br: d.qM.readBool,
                      bw: d.gp.writeBool,
                    },
                    steamguard_scheme: {
                      n: 5,
                      br: d.qM.readUint32,
                      bw: d.gp.writeUint32,
                    },
                    token_gid: {
                      n: 6,
                      br: d.qM.readString,
                      bw: d.gp.writeString,
                    },
                    email_validated: {
                      n: 7,
                      br: d.qM.readBool,
                      bw: d.gp.writeBool,
                    },
                    device_identifier: {
                      n: 8,
                      br: d.qM.readString,
                      bw: d.gp.writeString,
                    },
                    time_created: {
                      n: 9,
                      br: d.qM.readUint32,
                      bw: d.gp.writeUint32,
                    },
                    revocation_attempts_remaining: {
                      n: 10,
                      br: d.qM.readUint32,
                      bw: d.gp.writeUint32,
                    },
                    classified_agent: {
                      n: 11,
                      br: d.qM.readString,
                      bw: d.gp.writeString,
                    },
                    allow_external_authenticator: {
                      n: 12,
                      br: d.qM.readBool,
                      bw: d.gp.writeBool,
                    },
                    time_transferred: {
                      n: 13,
                      br: d.qM.readUint32,
                      bw: d.gp.writeUint32,
                    },
                    version: {
                      n: 14,
                      br: d.qM.readUint32,
                      bw: d.gp.writeUint32,
                    },
                    last_seen_auth_token_id: {
                      n: 15,
                      br: d.qM.readFixed64String,
                      bw: d.gp.writeFixed64String,
                    },
                    usages: { n: 16, c: Hr, r: !0, q: !0 },
                  },
                }),
              tr.sm_m
            );
          }
          static MBF() {
            return tr.sm_mbf || (tr.sm_mbf = d.w0(tr.M())), tr.sm_mbf;
          }
          toObject(t = !1) {
            return tr.toObject(t, this);
          }
          static toObject(t, m) {
            return d.BT(tr.M(), t, m);
          }
          static fromObject(t) {
            return d.Uq(tr.M(), t);
          }
          static deserializeBinary(t) {
            let m = new (G().BinaryReader)(t),
              g = new tr();
            return tr.deserializeBinaryFromReader(g, m);
          }
          static deserializeBinaryFromReader(t, m) {
            return d.zj(tr.MBF(), t, m);
          }
          serializeBinary() {
            var t = new (G().BinaryWriter)();
            return tr.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, m) {
            d.i0(tr.M(), t, m);
          }
          serializeBase64String() {
            var t = new (G().BinaryWriter)();
            return (
              tr.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_Status_Response";
          }
        }
        class nr extends gr.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              nr.prototype.steamid || d.Sg(nr.M()),
              gr.Message.initialize(this, t, 0, -1, [7], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              nr.sm_m ||
                (nr.sm_m = {
                  proto: nr,
                  fields: {
                    steamid: {
                      n: 1,
                      br: d.qM.readFixed64String,
                      bw: d.gp.writeFixed64String,
                    },
                    authenticator_time: {
                      n: 2,
                      br: d.qM.readUint64String,
                      bw: d.gp.writeUint64String,
                    },
                    serial_number: {
                      n: 3,
                      br: d.qM.readFixed64String,
                      bw: d.gp.writeFixed64String,
                    },
                    authenticator_type: {
                      n: 4,
                      br: d.qM.readUint32,
                      bw: d.gp.writeUint32,
                    },
                    device_identifier: {
                      n: 5,
                      br: d.qM.readString,
                      bw: d.gp.writeString,
                    },
                    http_headers: {
                      n: 7,
                      r: !0,
                      q: !0,
                      br: d.qM.readString,
                      bw: d.gp.writeRepeatedString,
                    },
                    version: {
                      n: 8,
                      d: 1,
                      br: d.qM.readUint32,
                      bw: d.gp.writeUint32,
                    },
                  },
                }),
              nr.sm_m
            );
          }
          static MBF() {
            return nr.sm_mbf || (nr.sm_mbf = d.w0(nr.M())), nr.sm_mbf;
          }
          toObject(t = !1) {
            return nr.toObject(t, this);
          }
          static toObject(t, m) {
            return d.BT(nr.M(), t, m);
          }
          static fromObject(t) {
            return d.Uq(nr.M(), t);
          }
          static deserializeBinary(t) {
            let m = new (G().BinaryReader)(t),
              g = new nr();
            return nr.deserializeBinaryFromReader(g, m);
          }
          static deserializeBinaryFromReader(t, m) {
            return d.zj(nr.MBF(), t, m);
          }
          serializeBinary() {
            var t = new (G().BinaryWriter)();
            return nr.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, m) {
            d.i0(nr.M(), t, m);
          }
          serializeBase64String() {
            var t = new (G().BinaryWriter)();
            return (
              nr.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_AddAuthenticator_Request";
          }
        }
        class ir extends gr.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ir.prototype.shared_secret || d.Sg(ir.M()),
              gr.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ir.sm_m ||
                (ir.sm_m = {
                  proto: ir,
                  fields: {
                    shared_secret: {
                      n: 1,
                      br: d.qM.readBytes,
                      bw: d.gp.writeBytes,
                    },
                    serial_number: {
                      n: 2,
                      br: d.qM.readFixed64String,
                      bw: d.gp.writeFixed64String,
                    },
                    revocation_code: {
                      n: 3,
                      br: d.qM.readString,
                      bw: d.gp.writeString,
                    },
                    uri: { n: 4, br: d.qM.readString, bw: d.gp.writeString },
                    server_time: {
                      n: 5,
                      br: d.qM.readUint64String,
                      bw: d.gp.writeUint64String,
                    },
                    account_name: {
                      n: 6,
                      br: d.qM.readString,
                      bw: d.gp.writeString,
                    },
                    token_gid: {
                      n: 7,
                      br: d.qM.readString,
                      bw: d.gp.writeString,
                    },
                    identity_secret: {
                      n: 8,
                      br: d.qM.readBytes,
                      bw: d.gp.writeBytes,
                    },
                    secret_1: { n: 9, br: d.qM.readBytes, bw: d.gp.writeBytes },
                    status: { n: 10, br: d.qM.readInt32, bw: d.gp.writeInt32 },
                    phone_number_hint: {
                      n: 11,
                      br: d.qM.readString,
                      bw: d.gp.writeString,
                    },
                    confirm_type: {
                      n: 12,
                      br: d.qM.readInt32,
                      bw: d.gp.writeInt32,
                    },
                  },
                }),
              ir.sm_m
            );
          }
          static MBF() {
            return ir.sm_mbf || (ir.sm_mbf = d.w0(ir.M())), ir.sm_mbf;
          }
          toObject(t = !1) {
            return ir.toObject(t, this);
          }
          static toObject(t, m) {
            return d.BT(ir.M(), t, m);
          }
          static fromObject(t) {
            return d.Uq(ir.M(), t);
          }
          static deserializeBinary(t) {
            let m = new (G().BinaryReader)(t),
              g = new ir();
            return ir.deserializeBinaryFromReader(g, m);
          }
          static deserializeBinaryFromReader(t, m) {
            return d.zj(ir.MBF(), t, m);
          }
          serializeBinary() {
            var t = new (G().BinaryWriter)();
            return ir.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, m) {
            d.i0(ir.M(), t, m);
          }
          serializeBase64String() {
            var t = new (G().BinaryWriter)();
            return (
              ir.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_AddAuthenticator_Response";
          }
        }
        class W extends gr.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              W.prototype.steamid || d.Sg(W.M()),
              gr.Message.initialize(this, t, 0, -1, [5], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              W.sm_m ||
                (W.sm_m = {
                  proto: W,
                  fields: {
                    steamid: {
                      n: 1,
                      br: d.qM.readFixed64String,
                      bw: d.gp.writeFixed64String,
                    },
                    authenticator_code: {
                      n: 2,
                      br: d.qM.readString,
                      bw: d.gp.writeString,
                    },
                    authenticator_time: {
                      n: 3,
                      br: d.qM.readUint64String,
                      bw: d.gp.writeUint64String,
                    },
                    activation_code: {
                      n: 4,
                      br: d.qM.readString,
                      bw: d.gp.writeString,
                    },
                    http_headers: {
                      n: 5,
                      r: !0,
                      q: !0,
                      br: d.qM.readString,
                      bw: d.gp.writeRepeatedString,
                    },
                    validate_sms_code: {
                      n: 6,
                      br: d.qM.readBool,
                      bw: d.gp.writeBool,
                    },
                  },
                }),
              W.sm_m
            );
          }
          static MBF() {
            return W.sm_mbf || (W.sm_mbf = d.w0(W.M())), W.sm_mbf;
          }
          toObject(t = !1) {
            return W.toObject(t, this);
          }
          static toObject(t, m) {
            return d.BT(W.M(), t, m);
          }
          static fromObject(t) {
            return d.Uq(W.M(), t);
          }
          static deserializeBinary(t) {
            let m = new (G().BinaryReader)(t),
              g = new W();
            return W.deserializeBinaryFromReader(g, m);
          }
          static deserializeBinaryFromReader(t, m) {
            return d.zj(W.MBF(), t, m);
          }
          serializeBinary() {
            var t = new (G().BinaryWriter)();
            return W.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, m) {
            d.i0(W.M(), t, m);
          }
          serializeBase64String() {
            var t = new (G().BinaryWriter)();
            return (
              W.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_FinalizeAddAuthenticator_Request";
          }
        }
        class U extends gr.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              U.prototype.success || d.Sg(U.M()),
              gr.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              U.sm_m ||
                (U.sm_m = {
                  proto: U,
                  fields: {
                    success: { n: 1, br: d.qM.readBool, bw: d.gp.writeBool },
                    server_time: {
                      n: 3,
                      br: d.qM.readUint64String,
                      bw: d.gp.writeUint64String,
                    },
                    status: { n: 4, br: d.qM.readInt32, bw: d.gp.writeInt32 },
                  },
                }),
              U.sm_m
            );
          }
          static MBF() {
            return U.sm_mbf || (U.sm_mbf = d.w0(U.M())), U.sm_mbf;
          }
          toObject(t = !1) {
            return U.toObject(t, this);
          }
          static toObject(t, m) {
            return d.BT(U.M(), t, m);
          }
          static fromObject(t) {
            return d.Uq(U.M(), t);
          }
          static deserializeBinary(t) {
            let m = new (G().BinaryReader)(t),
              g = new U();
            return U.deserializeBinaryFromReader(g, m);
          }
          static deserializeBinaryFromReader(t, m) {
            return d.zj(U.MBF(), t, m);
          }
          serializeBinary() {
            var t = new (G().BinaryWriter)();
            return U.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, m) {
            d.i0(U.M(), t, m);
          }
          serializeBase64String() {
            var t = new (G().BinaryWriter)();
            return (
              U.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_FinalizeAddAuthenticator_Response";
          }
        }
        class Y extends gr.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Y.prototype.revocation_code || d.Sg(Y.M()),
              gr.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Y.sm_m ||
                (Y.sm_m = {
                  proto: Y,
                  fields: {
                    revocation_code: {
                      n: 2,
                      br: d.qM.readString,
                      bw: d.gp.writeString,
                    },
                    revocation_reason: {
                      n: 5,
                      br: d.qM.readUint32,
                      bw: d.gp.writeUint32,
                    },
                    steamguard_scheme: {
                      n: 6,
                      br: d.qM.readUint32,
                      bw: d.gp.writeUint32,
                    },
                    remove_all_steamguard_cookies: {
                      n: 7,
                      br: d.qM.readBool,
                      bw: d.gp.writeBool,
                    },
                  },
                }),
              Y.sm_m
            );
          }
          static MBF() {
            return Y.sm_mbf || (Y.sm_mbf = d.w0(Y.M())), Y.sm_mbf;
          }
          toObject(t = !1) {
            return Y.toObject(t, this);
          }
          static toObject(t, m) {
            return d.BT(Y.M(), t, m);
          }
          static fromObject(t) {
            return d.Uq(Y.M(), t);
          }
          static deserializeBinary(t) {
            let m = new (G().BinaryReader)(t),
              g = new Y();
            return Y.deserializeBinaryFromReader(g, m);
          }
          static deserializeBinaryFromReader(t, m) {
            return d.zj(Y.MBF(), t, m);
          }
          serializeBinary() {
            var t = new (G().BinaryWriter)();
            return Y.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, m) {
            d.i0(Y.M(), t, m);
          }
          serializeBase64String() {
            var t = new (G().BinaryWriter)();
            return (
              Y.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_RemoveAuthenticator_Request";
          }
        }
        class $ extends gr.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              $.prototype.success || d.Sg($.M()),
              gr.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $.sm_m ||
                ($.sm_m = {
                  proto: $,
                  fields: {
                    success: { n: 1, br: d.qM.readBool, bw: d.gp.writeBool },
                    server_time: {
                      n: 3,
                      br: d.qM.readUint64String,
                      bw: d.gp.writeUint64String,
                    },
                    revocation_attempts_remaining: {
                      n: 5,
                      br: d.qM.readUint32,
                      bw: d.gp.writeUint32,
                    },
                  },
                }),
              $.sm_m
            );
          }
          static MBF() {
            return $.sm_mbf || ($.sm_mbf = d.w0($.M())), $.sm_mbf;
          }
          toObject(t = !1) {
            return $.toObject(t, this);
          }
          static toObject(t, m) {
            return d.BT($.M(), t, m);
          }
          static fromObject(t) {
            return d.Uq($.M(), t);
          }
          static deserializeBinary(t) {
            let m = new (G().BinaryReader)(t),
              g = new $();
            return $.deserializeBinaryFromReader(g, m);
          }
          static deserializeBinaryFromReader(t, m) {
            return d.zj($.MBF(), t, m);
          }
          serializeBinary() {
            var t = new (G().BinaryWriter)();
            return $.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, m) {
            d.i0($.M(), t, m);
          }
          serializeBase64String() {
            var t = new (G().BinaryWriter)();
            return (
              $.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_RemoveAuthenticator_Response";
          }
        }
        class sr extends gr.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), gr.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return sr.toObject(t, this);
          }
          static toObject(t, m) {
            return t ? { $jspbMessageInstance: m } : {};
          }
          static fromObject(t) {
            return new sr();
          }
          static deserializeBinary(t) {
            let m = new (G().BinaryReader)(t),
              g = new sr();
            return sr.deserializeBinaryFromReader(g, m);
          }
          static deserializeBinaryFromReader(t, m) {
            return t;
          }
          serializeBinary() {
            var t = new (G().BinaryWriter)();
            return sr.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, m) {}
          serializeBase64String() {
            var t = new (G().BinaryWriter)();
            return (
              sr.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request";
          }
        }
        class k extends gr.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              k.prototype.success || d.Sg(k.M()),
              gr.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              k.sm_m ||
                (k.sm_m = {
                  proto: k,
                  fields: {
                    success: { n: 1, br: d.qM.readBool, bw: d.gp.writeBool },
                  },
                }),
              k.sm_m
            );
          }
          static MBF() {
            return k.sm_mbf || (k.sm_mbf = d.w0(k.M())), k.sm_mbf;
          }
          toObject(t = !1) {
            return k.toObject(t, this);
          }
          static toObject(t, m) {
            return d.BT(k.M(), t, m);
          }
          static fromObject(t) {
            return d.Uq(k.M(), t);
          }
          static deserializeBinary(t) {
            let m = new (G().BinaryReader)(t),
              g = new k();
            return k.deserializeBinaryFromReader(g, m);
          }
          static deserializeBinaryFromReader(t, m) {
            return d.zj(k.MBF(), t, m);
          }
          serializeBinary() {
            var t = new (G().BinaryWriter)();
            return k.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, m) {
            d.i0(k.M(), t, m);
          }
          serializeBase64String() {
            var t = new (G().BinaryWriter)();
            return (
              k.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response";
          }
        }
        class C extends gr.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              C.prototype.sms_code || d.Sg(C.M()),
              gr.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              C.sm_m ||
                (C.sm_m = {
                  proto: C,
                  fields: {
                    sms_code: {
                      n: 1,
                      br: d.qM.readString,
                      bw: d.gp.writeString,
                    },
                    generate_new_token: {
                      n: 2,
                      br: d.qM.readBool,
                      bw: d.gp.writeBool,
                    },
                    version: {
                      n: 3,
                      d: 1,
                      br: d.qM.readUint32,
                      bw: d.gp.writeUint32,
                    },
                  },
                }),
              C.sm_m
            );
          }
          static MBF() {
            return C.sm_mbf || (C.sm_mbf = d.w0(C.M())), C.sm_mbf;
          }
          toObject(t = !1) {
            return C.toObject(t, this);
          }
          static toObject(t, m) {
            return d.BT(C.M(), t, m);
          }
          static fromObject(t) {
            return d.Uq(C.M(), t);
          }
          static deserializeBinary(t) {
            let m = new (G().BinaryReader)(t),
              g = new C();
            return C.deserializeBinaryFromReader(g, m);
          }
          static deserializeBinaryFromReader(t, m) {
            return d.zj(C.MBF(), t, m);
          }
          serializeBinary() {
            var t = new (G().BinaryWriter)();
            return C.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, m) {
            d.i0(C.M(), t, m);
          }
          serializeBase64String() {
            var t = new (G().BinaryWriter)();
            return (
              C.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request";
          }
        }
        class or extends gr.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              or.prototype.shared_secret || d.Sg(or.M()),
              gr.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              or.sm_m ||
                (or.sm_m = {
                  proto: or,
                  fields: {
                    shared_secret: {
                      n: 1,
                      br: d.qM.readBytes,
                      bw: d.gp.writeBytes,
                    },
                    serial_number: {
                      n: 2,
                      br: d.qM.readFixed64String,
                      bw: d.gp.writeFixed64String,
                    },
                    revocation_code: {
                      n: 3,
                      br: d.qM.readString,
                      bw: d.gp.writeString,
                    },
                    uri: { n: 4, br: d.qM.readString, bw: d.gp.writeString },
                    server_time: {
                      n: 5,
                      br: d.qM.readUint64String,
                      bw: d.gp.writeUint64String,
                    },
                    account_name: {
                      n: 6,
                      br: d.qM.readString,
                      bw: d.gp.writeString,
                    },
                    token_gid: {
                      n: 7,
                      br: d.qM.readString,
                      bw: d.gp.writeString,
                    },
                    identity_secret: {
                      n: 8,
                      br: d.qM.readBytes,
                      bw: d.gp.writeBytes,
                    },
                    secret_1: { n: 9, br: d.qM.readBytes, bw: d.gp.writeBytes },
                    status: { n: 10, br: d.qM.readInt32, bw: d.gp.writeInt32 },
                    steamguard_scheme: {
                      n: 11,
                      br: d.qM.readUint32,
                      bw: d.gp.writeUint32,
                    },
                    steamid: {
                      n: 12,
                      br: d.qM.readFixed64String,
                      bw: d.gp.writeFixed64String,
                    },
                  },
                }),
              or.sm_m
            );
          }
          static MBF() {
            return or.sm_mbf || (or.sm_mbf = d.w0(or.M())), or.sm_mbf;
          }
          toObject(t = !1) {
            return or.toObject(t, this);
          }
          static toObject(t, m) {
            return d.BT(or.M(), t, m);
          }
          static fromObject(t) {
            return d.Uq(or.M(), t);
          }
          static deserializeBinary(t) {
            let m = new (G().BinaryReader)(t),
              g = new or();
            return or.deserializeBinaryFromReader(g, m);
          }
          static deserializeBinaryFromReader(t, m) {
            return d.zj(or.MBF(), t, m);
          }
          serializeBinary() {
            var t = new (G().BinaryWriter)();
            return or.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, m) {
            d.i0(or.M(), t, m);
          }
          serializeBase64String() {
            var t = new (G().BinaryWriter)();
            return (
              or.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CRemoveAuthenticatorViaChallengeContinue_Replacement_Token";
          }
        }
        class mr extends gr.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              mr.prototype.success || d.Sg(mr.M()),
              gr.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              mr.sm_m ||
                (mr.sm_m = {
                  proto: mr,
                  fields: {
                    success: { n: 1, br: d.qM.readBool, bw: d.gp.writeBool },
                    replacement_token: { n: 2, c: or },
                  },
                }),
              mr.sm_m
            );
          }
          static MBF() {
            return mr.sm_mbf || (mr.sm_mbf = d.w0(mr.M())), mr.sm_mbf;
          }
          toObject(t = !1) {
            return mr.toObject(t, this);
          }
          static toObject(t, m) {
            return d.BT(mr.M(), t, m);
          }
          static fromObject(t) {
            return d.Uq(mr.M(), t);
          }
          static deserializeBinary(t) {
            let m = new (G().BinaryReader)(t),
              g = new mr();
            return mr.deserializeBinaryFromReader(g, m);
          }
          static deserializeBinaryFromReader(t, m) {
            return d.zj(mr.MBF(), t, m);
          }
          serializeBinary() {
            var t = new (G().BinaryWriter)();
            return mr.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, m) {
            d.i0(mr.M(), t, m);
          }
          serializeBase64String() {
            var t = new (G().BinaryWriter)();
            return (
              mr.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response";
          }
        }
        class dr extends gr.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              dr.prototype.steamid || d.Sg(dr.M()),
              gr.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              dr.sm_m ||
                (dr.sm_m = {
                  proto: dr,
                  fields: {
                    steamid: {
                      n: 1,
                      br: d.qM.readFixed64String,
                      bw: d.gp.writeFixed64String,
                    },
                    version: {
                      n: 2,
                      br: d.qM.readUint32,
                      bw: d.gp.writeUint32,
                    },
                    signature: {
                      n: 3,
                      br: d.qM.readBytes,
                      bw: d.gp.writeBytes,
                    },
                  },
                }),
              dr.sm_m
            );
          }
          static MBF() {
            return dr.sm_mbf || (dr.sm_mbf = d.w0(dr.M())), dr.sm_mbf;
          }
          toObject(t = !1) {
            return dr.toObject(t, this);
          }
          static toObject(t, m) {
            return d.BT(dr.M(), t, m);
          }
          static fromObject(t) {
            return d.Uq(dr.M(), t);
          }
          static deserializeBinary(t) {
            let m = new (G().BinaryReader)(t),
              g = new dr();
            return dr.deserializeBinaryFromReader(g, m);
          }
          static deserializeBinaryFromReader(t, m) {
            return d.zj(dr.MBF(), t, m);
          }
          serializeBinary() {
            var t = new (G().BinaryWriter)();
            return dr.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, m) {
            d.i0(dr.M(), t, m);
          }
          serializeBase64String() {
            var t = new (G().BinaryWriter)();
            return (
              dr.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_UpdateTokenVersion_Request";
          }
        }
        class Br extends gr.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), gr.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return Br.toObject(t, this);
          }
          static toObject(t, m) {
            return t ? { $jspbMessageInstance: m } : {};
          }
          static fromObject(t) {
            return new Br();
          }
          static deserializeBinary(t) {
            let m = new (G().BinaryReader)(t),
              g = new Br();
            return Br.deserializeBinaryFromReader(g, m);
          }
          static deserializeBinaryFromReader(t, m) {
            return t;
          }
          serializeBinary() {
            var t = new (G().BinaryWriter)();
            return Br.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, m) {}
          serializeBase64String() {
            var t = new (G().BinaryWriter)();
            return (
              Br.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_UpdateTokenVersion_Response";
          }
        }
        var Wr;
        ((o) => {
          function t(_, rr, wr) {
            return _.SendMsg(
              "TwoFactor.QueryTime#1",
              (0, kr.I8)(Dr, rr, wr),
              hr,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          o.QueryTime = t;
          function m(_, rr, wr) {
            return _.SendMsg(
              "TwoFactor.QueryStatus#1",
              (0, kr.I8)(Er, rr, wr),
              tr,
              { ePrivilege: 1 },
            );
          }
          o.QueryStatus = m;
          function g(_, rr, wr) {
            return _.SendMsg(
              "TwoFactor.AddAuthenticator#1",
              (0, kr.I8)(nr, rr, wr),
              ir,
              { ePrivilege: 1 },
            );
          }
          o.AddAuthenticator = g;
          function h(_, rr, wr) {
            return _.SendMsg(
              "TwoFactor.FinalizeAddAuthenticator#1",
              (0, kr.I8)(W, rr, wr),
              U,
              { ePrivilege: 1 },
            );
          }
          o.FinalizeAddAuthenticator = h;
          function p(_, rr, wr) {
            return _.SendMsg(
              "TwoFactor.UpdateTokenVersion#1",
              (0, kr.I8)(dr, rr, wr),
              Br,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          o.UpdateTokenVersion = p;
          function B(_, rr, wr) {
            return _.SendMsg(
              "TwoFactor.RemoveAuthenticator#1",
              (0, kr.I8)(Y, rr, wr),
              $,
              { ePrivilege: 9 },
            );
          }
          o.RemoveAuthenticator = B;
          function z(_, rr, wr) {
            return _.SendMsg(
              "TwoFactor.RemoveAuthenticatorViaChallengeStart#1",
              (0, kr.I8)(sr, rr, wr),
              k,
              { ePrivilege: 9 },
            );
          }
          o.RemoveAuthenticatorViaChallengeStart = z;
          function A(_, rr, wr) {
            return _.SendMsg(
              "TwoFactor.RemoveAuthenticatorViaChallengeContinue#1",
              (0, kr.I8)(C, rr, wr),
              mr,
              { ePrivilege: 9 },
            );
          }
          o.RemoveAuthenticatorViaChallengeContinue = A;
        })(Wr || (Wr = {}));
        var $r = Object.defineProperty,
          Se = Object.getOwnPropertyDescriptor,
          u = (o, t, m, g) => {
            for (
              var h = g > 1 ? void 0 : g ? Se(t, m) : t, p = o.length - 1, B;
              p >= 0;
              p--
            )
              (B = o[p]) && (h = (g ? B(t, m, h) : B(h)) || h);
            return g && h && $r(t, m, h), h;
          };
        const y = 2,
          O = 0,
          I = 1,
          E = 2,
          L = 3,
          Z = 4,
          R = 5,
          ar = 6,
          Kr = 7,
          Fr = 8,
          Ar = 9,
          ue = 10,
          Lr = 11,
          ze = 12,
          Zr = 13,
          Jr = 14,
          Gr = 15,
          qr = 16;
        class Sr extends J.gf {
          m_eStatus = O;
          m_steamid;
          m_strAccountName;
          m_strConfirmationAssociatedMessage = "";
          m_bUsingCodeOverride = !1;
          m_strWeakAuthToken = "";
          m_weakAuthWebInterface;
          m_onGetMachineAuth;
          m_replacementAuthenticator;
          m_strErrorReference = "";
          m_onLoginComplete;
          constructor(t) {
            super(
              t.transport,
              (m) => this.onAuthComplete(m),
              t.onDeviceDetails,
              t.onShowAgreement,
            ),
              (0, Me.Gn)(this),
              (this.m_onLoginComplete = t.onComplete),
              (this.m_onGetMachineAuth = t.onGetMachineAuth);
          }
          async Start(t, m, g) {
            if (this.m_eStatus !== O && this.m_eStatus !== E)
              return (
                (0, lr.ZI)(
                  "Cannot start an already started auth session. Create a new session instance.",
                ),
                l.Ze
              );
            const h = t.replace(/[^\x00-\x7F]/g, ""),
              p = m.replace(/[^\x00-\x7F]/g, "").slice(0, 64);
            if (!h.length || !p.length) return l.nO;
            if (
              ((this.m_eStatus = I),
              (this.m_bUsingCodeOverride = !1),
              t == "anonymous")
            )
              return (
                this.SetFailureState(J.eF.AnonymousLogin, xr.EResult(l.FK)),
                l.FK
              );
            try {
              const B = await _r(this.m_transport, h);
              if (!B)
                return (
                  (0, lr.ZI)(
                    "Cannot start auth session without a valid RSA key",
                  ),
                  this.SetFailureState(J.eF.Network, xr.EResult(l.Sq)),
                  l.Sq
                );
              const z = (0, lr.P8)(p, B),
                A = kr.w.Init(e.iP);
              A.SetEMsg(Oe.Kec),
                A.Body().set_account_name(h),
                A.Body().set_encrypted_password(z),
                A.Body().set_encryption_timestamp(B.timestamp),
                A.Body().set_remember_login(!!g),
                A.Body().set_persistence(g ? be.nW : be.fH),
                A.Body().set_website_id(X.TS.WEBSITE_ID);
              try {
                A.Body().set_device_details(await this.GetDeviceDetails());
              } catch (rr) {
                (0, lr.ZI)("Failed to GetDeviceDetails"), (0, lr.ZI)(rr);
              }
              if (
                (A.Body().set_language((0, M.sfN)(X.TS.LANGUAGE)),
                this.m_onGetMachineAuth != null)
              ) {
                const rr = await this.m_onGetMachineAuth(h);
                rr.eresult == l.R && A.Body().set_guard_data(rr.data);
              }
              await this.m_transport.MakeReady();
              const _ = await e.kX.BeginAuthSessionViaCredentials(
                this.m_transport,
                A,
              );
              return (
                _.DEBUG_LogToConsole(),
                (0, Me.h5)(async () => {
                  const rr = _.GetEResult(),
                    wr = _.Hdr().transport_error();
                  if (rr !== l.R)
                    switch (rr) {
                      case l.Um:
                        return (this.m_eStatus = E), rr;
                      case l.Sq:
                      case l.a_:
                        return (
                          this.SetFailureState(J.eF.Network, xr.EResult(l.Sq)),
                          rr
                        );
                      case l.h_:
                        return (
                          this.SetFailureState(
                            J.eF.RateLimitExceeded,
                            xr.EResult(rr),
                          ),
                          rr
                        );
                      case l.oH:
                        if (this.m_onShowAgreement)
                          this.m_onShowAgreement(
                            _.Body().agreement_session_url(),
                          );
                        else {
                          const ur = _.Body().agreement_session_url(),
                            pr = document.location.href;
                          window.location.href = `${ur}&redir=${encodeURIComponent(pr)}`;
                        }
                        return (
                          this.m_onCompleteCallback({ bSuccess: !1 }),
                          (this.m_eStatus = O),
                          rr
                        );
                      case l.uN:
                      default:
                        return (
                          (0, lr.ZI)(
                            `Failed to start auth session. Result: ${rr} Transport: ${wr}`,
                          ),
                          this.SetFailureState(
                            J.eF.Generic,
                            xr.EResult(rr),
                            _.Body().extended_error_message(),
                          ),
                          this.m_onCompleteCallback({ bSuccess: !1 }),
                          rr
                        );
                    }
                  this.m_strAccountName = t;
                  const {
                    client_id: ge,
                    request_id: ce,
                    interval: me,
                    allowed_confirmations: ye,
                    steamid: Ue,
                    weak_token: yr,
                  } = _.Body().toObject();
                  if (
                    ((this.m_msPollInterval = me * 1e3),
                    (this.m_strClientID = ge),
                    (this.m_rgRequestID = ce),
                    (this.m_steamid = Ue),
                    (this.m_strWeakAuthToken = yr),
                    ye.find(({ confirmation_type: ur }) => ur === e.TY.ig))
                  ) {
                    const ur = new FormData();
                    ur.append("clientid", ge),
                      ur.append("steamid", this.m_steamid);
                    const pr = `${X.TS.LOGIN_BASE_URL}jwt/checkdevice/${this.m_steamid}`;
                    try {
                      if (
                        (
                          await de().post(pr, ur, {
                            headers: { "Content-Type": "multipart/form-data" },
                            withCredentials: !0,
                          })
                        ).data.result == l.R
                      )
                        return (this.m_eStatus = Z), this.StartPolling(!0), l.R;
                    } catch (fe) {
                      if (
                        ((0, lr.tG)(
                          `checkdevice ajax to ${pr} failed: ${fe.message}`,
                        ),
                        fe instanceof br.AxiosError)
                      ) {
                        const De = fe;
                        return De.response
                          ? (this.SetFailureState(
                              J.eF.Network,
                              xr.AjaxFailureWithCode(De.response.status),
                            ),
                            l.Sq)
                          : (this.SetFailureState(
                              J.eF.Network,
                              xr.AjaxFailureNoCode(),
                            ),
                            l.Sq);
                      }
                      return (
                        this.SetFailureState(J.eF.Network, xr.EResult(l.eH)),
                        l.eH
                      );
                    }
                  }
                  const je = Pe(ye.map(({ confirmation_type: ur }) => ur)),
                    er = ye.find(({ confirmation_type: ur }) => ur === je);
                  switch (
                    (er &&
                      er.associated_message &&
                      (this.m_strConfirmationAssociatedMessage =
                        er.associated_message),
                    je)
                  ) {
                    case e.TY.WM:
                      return (this.m_eStatus = Zr), this.StartPolling(), rr;
                    case e.TY.Xs:
                      this.m_eStatus = L;
                      break;
                    case e.TY.$Y:
                      (this.m_eStatus = Z), this.StartPolling(!1);
                      break;
                    case e.TY.bH:
                      (this.m_eStatus = R), this.StartPolling(!1);
                      break;
                    case e.TY.x0:
                      (this.m_eStatus = ar), this.StartPolling(!1);
                      break;
                  }
                  return rr;
                })
              );
            } catch (B) {
              return (
                (0, lr.ZI)(
                  `Failed to start auth session. Exception: ${JSON.stringify(B)}`,
                ),
                (0, lr.tG)(B),
                this.SetFailureState(J.eF.Generic, xr.FailedToStart()),
                this.m_onCompleteCallback({ bSuccess: !1 }),
                l.zi
              );
            }
          }
          Stop() {
            this.StopPolling(), (this.m_eStatus = qr);
          }
          GetStatus() {
            return this.m_eStatus;
          }
          GetConfirmationAssociatedMessage() {
            return this.m_strConfirmationAssociatedMessage;
          }
          GetAccountName() {
            return this.m_strAccountName;
          }
          GetSteamID() {
            return this.m_steamid;
          }
          GetReplacementAuthenticator() {
            return this.m_replacementAuthenticator;
          }
          GetErrorReference() {
            return this.m_strErrorReference;
          }
          async SendSteamGuardCode(t, m = !0) {
            if (t.length == 0) {
              switch (this.m_eStatus) {
                case ue:
                  this.m_eStatus = L;
                  break;
                case Lr:
                  this.m_eStatus = R;
                  break;
                case R:
                case L:
                  break;
                default:
                  throw new Error("Attempted to clear code in invalid state");
              }
              return Promise.resolve(l.R);
            }
            try {
              await this.m_transport.MakeReady();
              const g = this.m_eStatus === L || this.m_eStatus === ue,
                h = kr.w.Init(e.Qc);
              h.SetEMsg(Oe.Kec),
                h.Body().set_client_id(this.m_strClientID),
                h.Body().set_steamid(this.m_steamid),
                h.Body().set_code(t),
                h.Body().set_code_type(g ? e.TY.Xs : e.TY.bH);
              const p = await e.kX.UpdateAuthSessionWithSteamGuardCode(
                  this.m_transport,
                  h,
                ),
                B = p.GetEResult();
              if (B !== l.R) {
                if (!m)
                  return (
                    (0, lr.ZI)(
                      `Failed to automatically update session with local SG info. Result ${B}. Transport ${p.Hdr().transport_error()}`,
                    ),
                    B
                  );
                switch (B) {
                  case l.QR:
                  case l.b7:
                    return (this.m_eStatus = g ? ue : Lr), B;
                  case l.ob:
                    return (
                      this.SetFailureState(J.eF.Expired, xr.EResult(B)),
                      this.m_onCompleteCallback({ bSuccess: !1 }),
                      B
                    );
                  case l.h_:
                    return (
                      this.SetFailureState(
                        J.eF.RateLimitExceeded,
                        xr.EResult(B),
                      ),
                      this.m_onCompleteCallback({ bSuccess: !1 }),
                      B
                    );
                  case l.oH:
                    if (this.m_onShowAgreement)
                      this.m_onShowAgreement(p.Body().agreement_session_url());
                    else {
                      const z = p.Body().agreement_session_url(),
                        A = document.location.href;
                      window.location.href = `${z}&redir=${encodeURIComponent(A)}`;
                    }
                    return (
                      this.m_onCompleteCallback({ bSuccess: !1 }),
                      (this.m_eStatus = O),
                      B
                    );
                  default:
                    return (
                      (0, lr.ZI)(
                        `Failed to update auth session with SG code. Result: ${B}`,
                      ),
                      this.SetFailureState(J.eF.Generic, xr.EResult(B)),
                      this.m_onCompleteCallback({ bSuccess: !1 }),
                      B
                    );
                }
              }
              return (this.m_eStatus = Zr), this.StartPolling(), B;
            } catch (g) {
              return (
                (0, lr.ZI)(`Failed to update auth session with SG code. ${g}`),
                this.SetFailureState(J.eF.Generic, xr.FailedToAddCode()),
                this.m_onCompleteCallback({ bSuccess: !1 }),
                l.zi
              );
            }
          }
          UseCodeOverride() {
            switch (this.m_eStatus) {
              case ar:
                (this.m_bUsingCodeOverride = !0), (this.m_eStatus = R);
                return;
              case Z:
                (this.m_bUsingCodeOverride = !0), (this.m_eStatus = L);
                return;
              default:
                (0, lr.ZI)(
                  `Don't know how to UseCodeOverride from login session status ${this.m_eStatus}`,
                );
                return;
            }
          }
          CantAccessCode() {
            this.m_eStatus = Kr;
          }
          async StartMoveAuthenticator() {
            this.m_weakAuthWebInterface = new Ve.D(
              X.TS.WEBAPI_BASE_URL,
              this.m_strWeakAuthToken,
            );
            try {
              const t = kr.w.Init(sr),
                m = await Wr.RemoveAuthenticatorViaChallengeStart(
                  this.m_weakAuthWebInterface.GetServiceTransport(),
                  t,
                );
              l.R != m.GetEResult()
                ? (m.DEBUG_LogToConsole(),
                  (0, lr.ZI)(
                    "An unexpected error occured while adding an authenticator",
                    m.GetEResult(),
                  ),
                  this.SetFailureState(
                    J.eF.MoveAuthenticator,
                    xr.EResult(m.GetEResult()),
                  ))
                : (this.m_eStatus = Fr);
            } catch (t) {
              (0, lr.ZI)(
                "An unexpected error occured while moving an authenticator",
                t,
              ),
                this.SetFailureState(J.eF.MoveAuthenticator, xr.EResult(l.zi));
            }
          }
          async ResendMoveCode() {
            const t = kr.w.Init(sr),
              m = await Wr.RemoveAuthenticatorViaChallengeStart(
                this.m_weakAuthWebInterface.GetServiceTransport(),
                t,
              );
            l.R != m.GetEResult() &&
              (m.DEBUG_LogToConsole(),
              (0, lr.ZI)(
                "An unexpected error occured while adding an authenticator",
                m.GetEResult(),
              )),
              (this.m_eStatus = Fr);
          }
          async FinishMoveAuthenticator(t) {
            const m = kr.w.Init(C);
            m.Body().set_sms_code(t),
              m.Body().set_generate_new_token(!0),
              m.Body().set_version(y);
            const g = await Wr.RemoveAuthenticatorViaChallengeContinue(
              this.m_weakAuthWebInterface.GetServiceTransport(),
              m,
            );
            l.c3 == g.GetEResult()
              ? (this.m_eStatus = ze)
              : g.Body().success()
                ? (g.DEBUG_LogToConsole(),
                  (this.m_replacementAuthenticator = (0, J.FU)(
                    g.Body().replacement_token().toObject(),
                  )),
                  (this.m_eStatus = Ar),
                  (this.m_bUsingCodeOverride = !1))
                : (g.DEBUG_LogToConsole(),
                  (0, lr.ZI)(
                    "Error when calling RemoveAuthenticatorViaChallengeContinue",
                    g.GetEResult(),
                  ),
                  this.SetFailureState(
                    J.eF.MoveAuthenticator,
                    xr.EResult(g.GetEResult()),
                  ));
          }
          FinishMoveRecovery() {
            this.m_eStatus = R;
          }
          BCanGoBack() {
            switch (this.m_eStatus) {
              case R:
              case Lr:
              case L:
              case ue:
              case ar:
              case Z:
              case Kr:
              case Fr:
              case ze:
                return !0;
              default:
                return !1;
            }
          }
          GoBack() {
            switch (this.m_eStatus) {
              case ar:
              case Z:
                this.m_eStatus = O;
                break;
              case R:
              case Lr:
                this.m_eStatus = this.m_bUsingCodeOverride ? ar : O;
                break;
              case Kr:
              case Fr:
              case ze:
                this.m_eStatus = (this.m_bUsingCodeOverride, R);
                break;
              case L:
              case ue:
                this.m_eStatus = this.m_bUsingCodeOverride ? Z : O;
                break;
              default:
                (0, lr.ZI)(
                  `Don't know how to GoBack from login session status ${this.m_eStatus}`,
                );
                return;
            }
          }
          SetFailureState(t, m, g = "") {
            (this.m_eStatus = Gr),
              (this.m_eFailureState = t),
              (this.m_strErrorReference = m),
              (this.m_strExtendedErrorMessage = g);
          }
          onAuthComplete = (t) => {
            this.m_eStatus = t.bSuccess ? Jr : Gr;
            let m;
            t.bSuccess
              ? (m = {
                  ...t,
                  strAccountName: this.m_strAccountName,
                  steamid: this.m_steamid,
                })
              : (m = { bSuccess: !1 }),
              this.m_onLoginComplete && this.m_onLoginComplete(m);
          };
          SetOnLoginComplete(t) {
            this.m_onLoginComplete = t;
          }
        }
        u([Me.sH], Sr.prototype, "m_eStatus", 2),
          u([Me.sH], Sr.prototype, "m_strErrorReference", 2),
          u([T.oI], Sr.prototype, "Start", 1),
          u([T.oI], Sr.prototype, "SendSteamGuardCode", 1),
          u([T.oI], Sr.prototype, "UseCodeOverride", 1),
          u([T.oI], Sr.prototype, "CantAccessCode", 1),
          u([T.oI], Sr.prototype, "StartMoveAuthenticator", 1),
          u([T.oI], Sr.prototype, "ResendMoveCode", 1),
          u([T.oI], Sr.prototype, "FinishMoveAuthenticator", 1),
          u([T.oI], Sr.prototype, "FinishMoveRecovery", 1),
          u([T.oI], Sr.prototype, "GoBack", 1),
          u([Me.XI], Sr.prototype, "SetFailureState", 1),
          u([T.oI], Sr.prototype, "SetOnLoginComplete", 1);
        async function _r(o, t) {
          const m = kr.w.Init(e.qu);
          m.Body().set_account_name(t), m.SetEMsg(Oe.Kec);
          try {
            await o.MakeReady();
            const g = await e.kX.GetPasswordRSAPublicKey(o, m);
            if ((g.DEBUG_LogToConsole(), g.GetEResult() !== l.R))
              return (
                (0, lr.ZI)(
                  `Failed to get RSA key with EResult: ${g.GetEResult()}`,
                ),
                null
              );
            const {
              publickey_exp: h,
              publickey_mod: p,
              timestamp: B,
            } = g.Body().toObject();
            return !h || !p || !B
              ? ((0, lr.ZI)(
                  `Missing expected field in RSA Key: ${JSON.stringify({ publickey_exp: h, publickey_mod: p, timestamp: B })}`,
                ),
                null)
              : { publickey_exp: h, publickey_mod: p, timestamp: B };
          } catch (g) {
            return (
              (0, lr.ZI)(`Failed to get RSA key: ${JSON.stringify(g)}`), null
            );
          }
        }
        const Cr = [
          e.TY.x0,
          e.TY.bH,
          e.TY.Xs,
          e.TY.WM,
          e.TY.oP,
          e.TY.$Y,
        ].reduce((o, t, m) => ((o[t] = m), o), {});
        function Pe(o) {
          let t = o[0] || e.TY.oP;
          return o.length > 1 && (t = o.sort((m, g) => Cr[m] - Cr[g])[0]), t;
        }
        function re(o) {
          const [t, m] = (0, D.useState)(new Sr(o));
          return (
            (0, D.useEffect)(() => {
              t?.SetOnLoginComplete(o.onComplete);
            }, [t, o.onComplete]),
            (0, pe.q3)(() => ({
              strAccountName: t.GetAccountName(),
              steamid: t.GetSteamID(),
              eFailureState: t.GetFailureState(),
              strExtendedErrorMessage: t.GetExtendedErrorMessage(),
              strErrorReference: t.GetErrorReference(),
              strConfirmationAssociatedMessage:
                t.GetConfirmationAssociatedMessage(),
              eStatus: t.GetStatus(),
              bCanGoBack: t.BCanGoBack(),
              start: t.Start,
              addCode: t.SendSteamGuardCode,
              useCodeOverride: t.UseCodeOverride,
              cantAccessCode: t.CantAccessCode,
              startMoveAuthenticator: t.StartMoveAuthenticator,
              resendMoveCode: t.ResendMoveCode,
              finishMoveAuthenticator: t.FinishMoveAuthenticator,
              finishMoveRecovery: t.FinishMoveRecovery,
              replacementAuthenticator: t.GetReplacementAuthenticator(),
              reset: () => m(new Sr(o)),
              goBack: t.GoBack,
              setTokenToRevoke: t.SetTokenToRevoke,
            }))
          );
        }
        function Qr(o) {
          return o ? 7 : 5;
        }
        function Rr(o, t) {
          return /[23456789BCDFGHJKMNPQRTVWXY]*/g.test(o) && o.length <= Qr(t);
        }
        function We(o, t) {
          return Rr(o, t) && o.length === Qr(t);
        }
        const xr = {
          EResult: (o) => `e${o}`,
          FailedToStart: () => "c-fts",
          FailedToAddCode: () => "c-ftac",
          AjaxFailureNoCode: () => "af",
          AjaxFailureWithCode: (o) => `af-${o}`,
        };
        var ee = Object.defineProperty,
          te = Object.getOwnPropertyDescriptor,
          ie = (o, t, m, g) => {
            for (
              var h = g > 1 ? void 0 : g ? te(t, m) : t, p = o.length - 1, B;
              p >= 0;
              p--
            )
              (B = o[p]) && (h = (g ? B(t, m, h) : B(h)) || h);
            return g && h && ee(t, m, h), h;
          };
        const Xr = 0,
          Fe = 1,
          Je = 2,
          ke = 3,
          Q = 4,
          r = 5;
        class a extends J.gf {
          m_eStatus = Xr;
          constructor(t) {
            super(
              t.transport,
              (m) => {
                (this.m_eStatus = m.bSuccess ? ke : Q), t.onComplete(m);
              },
              t.onDeviceDetails,
            ),
              (0, Me.Gn)(this);
          }
          async Start() {
            if (this.m_eStatus !== Xr)
              return (
                console.error(
                  "Cannot start an already started auth session. Create a new session instance.",
                ),
                l.zi
              );
            this.m_eStatus = Fe;
            try {
              await this.m_transport.MakeReady();
              const t = kr.w.Init(e.R9);
              t.SetEMsg(Oe.Kec);
              try {
                t.Body().set_device_details(await this.GetDeviceDetails());
              } catch (_) {
                console.error("Failed to GetDeviceDetails"), console.log(_);
              }
              t.Body().set_website_id(X.TS.WEBSITE_ID);
              const m = await e.kX.BeginAuthSessionViaQR(this.m_transport, t),
                g = m.GetEResult(),
                h = m.Hdr().transport_error();
              if (g !== l.R)
                return (
                  console.error(
                    `Failed to start auth session. Result: ${g} Transport: ${h}`,
                  ),
                  (this.m_eFailureState = J.eF.Generic),
                  this.m_onCompleteCallback({ bSuccess: !1 }),
                  g
                );
              const {
                client_id: p,
                challenge_url: B,
                interval: z,
                request_id: A,
              } = m.Body().toObject();
              return (
                (this.m_strClientID = p),
                (this.m_strChallengeURL = B),
                (this.m_msPollInterval = z * 1e3),
                (this.m_rgRequestID = A),
                (this.m_eStatus = Je),
                this.StartPolling(!1),
                g
              );
            } catch (t) {
              return (
                console.error(
                  `Failed to start auth session: ${JSON.stringify(t)}`,
                ),
                (this.m_eFailureState = J.eF.Generic),
                this.m_onCompleteCallback({ bSuccess: !1 }),
                l.zi
              );
            }
          }
          Stop() {
            this.StopPolling(), (this.m_eStatus = r);
          }
          GetChallengeURL() {
            return this.m_strChallengeURL;
          }
          GetClientID() {
            return this.m_strClientID;
          }
          GetStatus() {
            return this.m_eStatus;
          }
        }
        ie([Me.sH], a.prototype, "m_eStatus", 2);
        function x(o) {
          const [t, m] = (0, D.useState)(new a(o));
          return (
            (0, D.useEffect)(
              () => (
                t.Start(),
                () => {
                  t.Stop();
                }
              ),
              [t],
            ),
            (0, pe.q3)(() => ({
              strChallengeURL: t.GetChallengeURL(),
              strClientID: t.GetClientID(),
              eFailureState: t.GetFailureState(),
              eStatus: t.GetStatus(),
              bHadRemoteInteraction: t.BHadRemoteInteraction(),
              reset: () => m(new a(o)),
              setTokenToRevoke: t.SetTokenToRevoke,
            }))
          );
        }
        var ve = b(77661),
          j = b.n(ve),
          Ie = b(56589),
          Ee = b.n(Ie),
          Le = b(71742),
          rt = b(5804),
          Ce = b.n(rt),
          Re = ((o) => (
            (o[(o.L = 1)] = "L"),
            (o[(o.M = 0)] = "M"),
            (o[(o.Q = 3)] = "Q"),
            (o[(o.H = 2)] = "H"),
            o
          ))(Re || {});
        function et(o, t, m) {
          const g = o.length,
            h = o[0].length,
            p = (g + 2) * h,
            B = new Uint8Array(40 + p);
          let z = 0;
          (B[z++] = 71),
            (B[z++] = 73),
            (B[z++] = 70),
            (B[z++] = 56),
            (B[z++] = 57),
            (B[z++] = 97),
            (B[z++] = g),
            (B[z++] = 0),
            (B[z++] = h),
            (B[z++] = 0),
            (0, Le.wT)(
              t != "transparent" || m != "transparent",
              "Trying to use transparent for both colors in QR",
            ),
            (B[z++] = 161),
            (B[z++] = 0),
            (B[z++] = 0),
            t == "transparent"
              ? ((B[z++] = 0), (B[z++] = 0), (B[z++] = 0))
              : ((B[z++] = t[0]), (B[z++] = t[1]), (B[z++] = t[2])),
            m == "transparent"
              ? ((B[z++] = 0), (B[z++] = 0), (B[z++] = 0))
              : ((B[z++] = m[0]), (B[z++] = m[1]), (B[z++] = m[2])),
            (B[z++] = 255),
            (B[z++] = 255),
            (B[z++] = 255),
            (B[z++] = 255),
            (B[z++] = 255),
            (B[z++] = 255),
            (t == "transparent" || m == "transparent") &&
              ((B[z++] = 33),
              (B[z++] = 249),
              (B[z++] = 4),
              (B[z++] = 1),
              (B[z++] = 0),
              (B[z++] = 0),
              (B[z++] = t == "transparent" ? 0 : 1),
              (B[z++] = 0)),
            (B[z++] = 44),
            (B[z++] = 0),
            (B[z++] = 0),
            (B[z++] = 0),
            (B[z++] = 0),
            (B[z++] = g),
            (B[z++] = 0),
            (B[z++] = h),
            (B[z++] = 0),
            (B[z++] = 0);
          const A = 7;
          B[z++] = A;
          for (let _ = 0; _ < o.length; _++) {
            (B[z++] = g + 1), (B[z++] = 2 ** A);
            for (let rr = 0; rr < o.length; rr++) B[z++] = o[_][rr] ? 0 : 1;
          }
          return (
            (B[z++] = 1), (B[z++] = 2 ** A + 1), (B[z++] = 0), (B[z++] = 59), B
          );
        }
        function tt(o) {
          let {
            quality: t = 0,
            children: m,
            className: g,
            activeBitColor: h = [33, 35, 40],
            inactiveBitColor: p = [255, 255, 255],
            borderWidth: B = 3,
            typeNumber: z = 6,
          } = o;
          const A = we(m, { typeNumber: z, errorCorrectLevel: t });
          if (!A) return null;
          let _ = [];
          for (let me = 0; me < B; me++)
            _.push(Array(A.length + B * 2).fill(!1));
          for (let me = 0; me < A.length; me++)
            _.push([].concat(Array(B).fill(!1), A[me], Array(B).fill(!1)));
          for (let me = 0; me < B; me++)
            _.push(Array(A.length + B * 2).fill(!1));
          const rr = et(_, h, p),
            wr = new Blob([rr], { type: "image/gif" }),
            ge = URL.createObjectURL(wr),
            ce = `rgb(${p[0]}, ${p[1]}, ${p[2]})`;
          return (0, s.jsx)("div", {
            className: (0, V.A)(Ce().QRBits, g),
            style: { "--qr-bright-color": ce },
            children: (0, s.jsx)("img", {
              className: Ce().QRImg,
              src: ge,
              alt: "",
            }),
          });
        }
        function we(o, t = {}) {
          const { typeNumber: m, errorCorrectLevel: g } = t,
            [h, p] = (0, D.useState)();
          return (
            (0, D.useEffect)(() => {
              p(Ee()(o, { typeNumber: m, errorCorrectLevel: g }).modules);
            }, [o, m, g]),
            h
          );
        }
        var Nr = b(5522),
          Mr = b.n(Nr),
          Yr = b(58534);
        function it(o) {
          const {
              transport: t,
              onComplete: m,
              onStatusChange: g,
              platform: h,
              styling: p = "default",
              activeBitValue: B = 255,
            } = o,
            z = X.TS.IN_STEAMUI ? he : xe,
            {
              eStatus: A,
              strChallengeURL: _,
              strClientID: rr,
              bHadRemoteInteraction: wr,
              reset: ge,
              setTokenToRevoke: ce,
            } = x({ transport: t, onComplete: m, onDeviceDetails: z });
          (0, D.useEffect)(() => g && g(A), [g, A]);
          const me = A === Je ? _ : X.TS.STORE_BASE_URL,
            ye = A === Xr || A === Fe || wr,
            Ue = A === Q,
            yr = A === ke,
            je = yr
              ? (0, s.jsx)(bt, {})
              : Ue
                ? (0, s.jsx)(ft, { reset: ge })
                : ye
                  ? (0, s.jsx)(ot, { size: "small" })
                  : null,
            er = ye || Ue || yr;
          (0, D.useEffect)(() => {
            o.refreshInfo?.login_token_id && ce(o.refreshInfo.login_token_id);
          }, [o.refreshInfo, ce]);
          const ur = X.TS.EUNIVERSE !== M.wLO,
            pr = `rgb(${B}, ${B}, ${B})`;
          return (0, s.jsx)("div", {
            className: Mr().Column,
            children: (0, s.jsxs)("div", {
              style: { position: "relative" },
              children: [
                (0, s.jsx)(tt, {
                  borderWidth: 0,
                  activeBitColor: [21, 23, 28],
                  inactiveBitColor: ur ? [B, 0, B] : [B, B, B],
                  quality: dt(me),
                  className: (0, V.A)(
                    Mr().LoginQR,
                    p == "deck" && Mr().QRLoginDeck,
                    p == "vr" && Mr().QRLoginVR,
                    er && Mr().Blur,
                    ur && Mr().NonPublic,
                  ),
                  children: me,
                }),
                er &&
                  (0, s.jsx)("div", {
                    className: Mr().Overlay,
                    children: (0, s.jsx)("div", {
                      className: Mr().Box,
                      style: { "--qr-bright-color": pr },
                      children: je,
                    }),
                  }),
              ],
            }),
          });
        }
        function dt(o) {
          return o.length <= 90 ? Re.Q : void 0;
        }
        function ot(o) {
          const { size: t } = o;
          return (0, s.jsx)("div", {
            className: (0, V.A)(
              Mr().Loading,
              t == "small" && Mr().Small,
              (t == "medium" || !t) && Mr().Medium,
              t == "large" && Mr().Large,
            ),
          });
        }
        function ft(o) {
          return (0, s.jsx)(Yr.$n, {
            onClick: o.reset,
            className: Mr().QRFailure,
            children: (0, s.jsx)(gt, {}),
          });
        }
        function gt(o) {
          return (0, s.jsxs)("svg", {
            version: "1.1",
            id: "Layer_2",
            xmlns: "http://www.w3.org/2000/svg",
            style: { width: "40px", height: "40px", cursor: "pointer" },
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
            children: [
              (0, s.jsx)("path", {
                fill: "none",
                stroke: "#fff",
                strokeWidth: "30",
                strokeLinecap: "round",
                strokeMiterlimit: "10",
                d: "M229.809,147.639 c-9.178,47.863-51.27,84.027-101.809,84.027c-57.253,0-103.667-46.412-103.667-103.666S70.747,24.334,128,24.334 c34.107,0,64.368,16.472,83.261,41.895",
              }),
              (0, s.jsx)("polygon", {
                points: "147.639,108.361 245.755,10.166 245.834,108.361",
                fill: "#fff",
              }),
            ],
          });
        }
        function bt() {
          return (0, s.jsx)("svg", {
            version: "1.1",
            id: "base",
            xmlns: "http://www.w3.org/2000/svg",
            style: { width: "45px", height: "45px" },
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
            children: (0, s.jsx)("polyline", {
              fill: "none",
              stroke: "#fff",
              strokeWidth: "24",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: "10",
              points: "49.5,147.75 95,210.75 206.5,45.25 ",
            }),
          });
        }
        var i = b(72609);
        const n = (0, D.createContext)(!1),
          c = () => (0, D.useContext)(n);
        function f() {
          return (0, s.jsx)("div", {
            className: j().Login,
            children: (0, s.jsx)(at, {
              reset: () => window.location.reload(),
              failure: J.eF.Generic,
            }),
          });
        }
        function w(o) {
          const t = ti(o.redirectUrl),
            m = (g) => {
              const { strRefreshToken: h } = g;
              (0, J.yp)(h).then(
                (p) => o.onComplete(p),
                () => o.onComplete(J.wI.k_PrimaryDomainFail),
              );
            };
          return t
            ? null
            : (0, s.jsx)(S, {
                ...o,
                creationRedirectUrl: o.redirectUrl,
                onSuccess: m,
                embedded: o.theme === "modal",
              });
        }
        function S(o) {
          const { embedded: t, children: m, ...g } = o;
          return (0, s.jsx)(Vr.tH, {
            children: (0, s.jsx)(n.Provider, {
              value: t ?? !1,
              children: (0, s.jsxs)("div", {
                className: j().Login,
                children: [(0, s.jsx)(He, { ...g }), m],
              }),
            }),
          });
        }
        function N(o) {
          switch (o) {
            case k_EUniverseDev:
              return "dev";
            case k_EUniverseBeta:
              return "beta";
            case k_EUniversePublic:
              return "public";
            default:
              return "unknown";
          }
        }
        function H(o) {
          if ((0, Ir.q)()) return null;
          const { variant: t } = o;
          return typeof t == "function"
            ? (0, s.jsx)(Ze, {
                onClick: t,
                children: (0, v.we)("#Login_Help_SignIn"),
              })
            : (0, s.jsx)(Ze, {
                href: `${X.TS.HELP_BASE_URL}wizard/HelpWithLogin?redir=${encodeURIComponent(document.location.href)}`,
                children: (0, v.we)("#Login_Help_SignIn"),
              });
        }
        function Or(o) {
          const { variant: t, redirectUrl: m } = o;
          if (typeof t == "function")
            return (0, s.jsx)(Ze, {
              inline: !0,
              onClick: t,
              children: (0, v.we)("#Login_CreateAccount"),
            });
          {
            const g = m ? `?redir=${encodeURIComponent(m)}` : "";
            switch (t ?? "normal") {
              default:
              case "normal":
                return (0, s.jsx)(Ze, {
                  inline: !0,
                  href: `${X.TS.STORE_BASE_URL}join/${g}`,
                  children: (0, v.we)("#Login_CreateAccount"),
                });
              case "partner":
                return (0, s.jsx)(Ze, {
                  inline: !0,
                  href: `${X.TS.PARTNER_BASE_URL}${g}`,
                  children: (0, v.we)("#Login_CreateSteamworksAccount"),
                });
              case "none":
                return null;
            }
          }
        }
        function le(o) {
          const { launcherType: t, variant: m, redirectUrl: g } = o;
          if (t === M.A2g || m == "none") return null;
          const h = t !== void 0;
          let p;
          switch (m ?? "normal") {
            default:
            case "normal":
              p = "#Login_NoSteamAccount";
              break;
            case "partner":
              p = "#Login_NoSteamworksAccount";
              break;
          }
          return (0, s.jsxs)("div", {
            className: (0, V.A)(j().AccountCreation, h && j().InClient),
            children: [
              (0, s.jsx)("span", {
                className: j().AccountCreationPrompt,
                children: (0, v.we)(p),
              }),
              (0, s.jsx)(Or, { variant: m, redirectUrl: g }),
            ],
          });
        }
        async function he() {
          const [o, t, m, g] = await Promise.all([
            SteamClient.System.GetOSType(),
            SteamClient.System.GetSystemInfo(),
            SteamClient?.Auth?.GetLocalHostname?.() ?? "",
            SteamClient?.Auth?.GetMachineID?.() ?? void 0,
          ]);
          return {
            os_type: o,
            device_friendly_name: m,
            machine_id: g,
            platform_type: e.SS.w0,
            gaming_device_type: t.eGamingDeviceType,
          };
        }
        async function xe() {
          return {
            device_friendly_name: window.navigator.userAgent,
            platform_type: e.SS.tS,
          };
        }
        function Te(o) {
          const {
              onSuccess: t,
              secureComputer: m = !0,
              isProbablySharedPC: g = !1,
            } = o,
            h = (0, D.useCallback)(
              (er) => {
                if (er.bSuccess) {
                  const {
                    strRefreshToken: ur,
                    strAccessToken: pr,
                    strAccountName: fe,
                    strNewGuardData: De,
                  } = er;
                  t({
                    strRefreshToken: ur,
                    strAccessToken: pr,
                    strAccountName: fe,
                    strNewGuardData: De,
                  });
                }
              },
              [t],
            ),
            p = re({
              transport: o.transport,
              onComplete: h,
              onDeviceDetails: o.onDeviceDetails,
              onGetMachineAuth: o.onGetMachineAuth,
              onShowAgreement: o.onShowAgreement,
            }),
            [B, z] = (0, D.useState)(Xr),
            A = "Login_RememberMeSetting",
            [_, rr] = (0, D.useState)(
              o.refreshInfo?.account_name ?? o.defaultAccountName ?? "",
            ),
            [wr, ge] = (0, D.useState)(""),
            [ce, me] = (0, D.useState)(
              m && !g && localStorage?.getItem(A) != "0",
            ),
            ye = !(p.eStatus === O || p.eStatus === I || p.eStatus === E),
            Ue = () => (!_ || !wr ? Promise.resolve(l.nO) : p.start(_, wr, ce)),
            yr = () => {
              (0, lr.tG)(`Logging in offline with username ${_}`),
                SteamClient.User.SetLoginCredentials(_, wr, ce),
                SteamClient.User.StartOffline(!0);
            };
          return (
            (0, D.useEffect)(() => {
              o.refreshInfo?.login_token_id &&
                p.setTokenToRevoke(o.refreshInfo.login_token_id);
            }, [o.refreshInfo, p]),
            {
              password: p,
              onComplete: h,
              eQRStatus: B,
              onQRStatusChange: z,
              strAccountName: _,
              onAccountNameChange: rr,
              strPassword: wr,
              onPasswordChange: ge,
              bRememberMe: ce,
              onRememberMeChange: (er) => {
                me(er), localStorage?.setItem(A, er ? "1" : "0");
              },
              onPasswordSubmit: Ue,
              bInPasswordFlow: ye,
              onTryOffline: yr,
            }
          );
        }
        function Ae() {
          const o =
            window?.location && (0, cr.f3)(window.location, "need_password");
          return o !== void 0 && o !== "false" && o !== "0";
        }
        function He(o) {
          const {
              transport: t,
              onSuccess: m,
              platform: g,
              autoFocus: h,
              refreshInfo: p,
              renderSuccess: B = () => (0, s.jsx)(ei, {}),
              lastResult: z,
              joinLinkVariant: A,
              defaultAccountName: _,
              secureComputer: rr = !0,
              isProbablySharedPC: wr = !1,
              onShowAgreement: ge,
              creationRedirectUrl: ce,
            } = o,
            me = X.TS.IN_STEAMUI ? he : xe,
            ye = X.TS.IN_STEAMUI
              ? (fe) => SteamClient.Auth.GetSteamGuardData(fe)
              : null,
            Ue = Ae(),
            yr = Te({
              transport: t,
              platform: g,
              onSuccess: m,
              refreshInfo: p,
              onDeviceDetails: me,
              onGetMachineAuth: ye,
              defaultAccountName: _,
              secureComputer: rr,
              isProbablySharedPC: wr,
              onShowAgreement: ge,
            }),
            je = c(),
            er = (0, D.useId)();
          if (z != null && z != l.R)
            return (0, s.jsx)("div", {
              className: j().Login,
              children: (0, s.jsx)(at, {
                reset: () => window.location.reload(),
                failure: J.eF.Generic,
                errorReference: z.toString(),
                extendedErrorMessage: yr.password.strExtendedErrorMessage,
              }),
            });
          const ur = !(0, X.Y2)();
          if (!yr.bInPasswordFlow) {
            const fe = (0, s.jsxs)("div", {
              className: (0, V.A)(j().SideBySide, je && j().Embedded),
              children: [
                (0, s.jsx)(Ye, {
                  strAccountName: yr.strAccountName,
                  onAccountNameChange: yr.onAccountNameChange,
                  strPassword: yr.strPassword,
                  onPasswordChange: yr.onPasswordChange,
                  bRememberMe: yr.bRememberMe,
                  onRememberMeChange: yr.onRememberMeChange,
                  onSubmit: yr.onPasswordSubmit,
                  status: yr.password.eStatus,
                  autoFocus: h,
                  secureComputer: rr,
                  refreshInfo: o.refreshInfo,
                }),
                ur &&
                  (0, s.jsx)(zt, {
                    transport: t,
                    onQRStatusChange: yr.onQRStatusChange,
                    onComplete: yr.onComplete,
                    platform: g,
                    refreshInfo: p,
                  }),
              ],
            });
            if (je) {
              const $e = X.TS.IN_STEAMUI,
                Xe = $e ? X.TS.LAUNCHER_TYPE : void 0;
              return (0, s.jsxs)(Ke, {
                className: (0, V.A)(j().EmbeddedRoot, $e && j().InClient),
                children: [
                  !$e && !1,
                  !o.refreshInfo &&
                    (0, s.jsx)(ut, {
                      realm: X.TS.EREALM,
                      launcherType: Xe,
                      className: j().HeaderLogo,
                      onBack: o.onBack,
                    }),
                  (0, s.jsx)(Ne, { refreshInfo: p }),
                  fe,
                  (0, s.jsxs)("div", {
                    className: (0, V.A)(
                      j().EmbeddedRootFooter,
                      $e && j().InClient,
                    ),
                    children: [
                      (0, s.jsx)(H, { variant: o.helpLinkVariant }),
                      (0, s.jsx)(le, {
                        launcherType: Xe,
                        variant: A,
                        redirectUrl: ce,
                      }),
                    ],
                  }),
                ],
              });
            }
            const De = (0, s.jsxs)("div", {
              style: {
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                margin: "8px 16px",
              },
              children: [
                !1,
                (0, s.jsx)("h2", {
                  className: j().PrimaryHeader,
                  id: er,
                  children: o.refreshInfo
                    ? (0, v.we)("#Login_RefreshSignIn")
                    : (0, v.we)("#Login_SignInTitle"),
                }),
                (0, s.jsx)(Ne, { refreshInfo: o.refreshInfo }),
              ],
            });
            return (0, s.jsxs)(qe, {
              title: De,
              titleId: er,
              children: [Ue && (0, s.jsx)(_e, {}), fe],
            });
          }
          const pr = yr.password.eStatus;
          switch (pr) {
            case Zr:
              return o.renderLoading
                ? (0, s.jsx)(s.Fragment, { children: o.renderLoading() })
                : (0, s.jsx)(Vt, {});
            case R:
            case Lr:
            case L:
            case ue:
              const fe = pr === R || pr === Lr;
              return (0, s.jsx)(Yt, {
                type: fe ? "mobile" : "email",
                onSubmitCode: yr.password.addCode,
                status: pr,
                associatedLabel: yr.password.strConfirmationAssociatedMessage,
                accountName: yr.password.strAccountName,
                onBack: yr.password.goBack,
                onCodeHelp: o.onCodeHelp,
              });
            case ar:
            case Z:
              const De = pr === ar;
              return (0, s.jsx)(qt, {
                type: De ? "mobile" : "email",
                accountName: yr.password.strAccountName,
                onUseCodeOverride: yr.password.useCodeOverride,
                onCodeHelp: o.onCodeHelp,
              });
            case qr:
              return (0, s.jsx)(Xt, { reset: yr.password.reset });
            case Gr:
              return (0, s.jsx)(at, {
                reset: yr.password.reset,
                failure: yr.password.eFailureState,
                onRequestOffline: yr.onTryOffline,
                errorReference: yr.password.strErrorReference,
                extendedErrorMessage: yr.password.strExtendedErrorMessage,
              });
            case Jr:
              return (0, s.jsx)(qe, { compact: !0, children: B() });
            default:
              return (
                (0, lr.ZI)(`Unknown Phase: ${pr}`),
                (0, s.jsx)(at, {
                  reset: yr.password.reset,
                  failure: J.eF.Generic,
                  onRequestOffline: yr.onTryOffline,
                  errorReference: yr.password.strErrorReference,
                  extendedErrorMessage: yr.password.strExtendedErrorMessage,
                })
              );
          }
        }
        function Ne(o) {
          if (!o.refreshInfo) return null;
          let t;
          switch (o.refreshInfo?.reason ?? l.zi) {
            case l.zi:
            case l.Vr:
            default:
              t = "#Login_RefreshReason_Generic";
              break;
            case l.KH:
              t = "#Login_RefreshReason_LoggedInElsewhere";
              break;
            case l.CF:
              t = "#Login_RefreshReason_LogonSessionReplaced";
              break;
            case l.Um:
              t = "#Login_RefreshReason_InvalidPassword";
              break;
            case l.fY:
              t = "#Login_RefreshReason_Revoked";
              break;
            case l.ob:
              t = "#Login_RefreshReason_Expired";
              break;
            case l.cr:
              t = "#Login_RefreshReason_PasswordRequiredToKickSession";
              break;
            case l.uN:
              t = "#Login_RefreshReason_AccountDisabled";
              break;
            case l.sG:
              t = "#Login_RefreshReason_ParentalControlRestricted";
              break;
            case l.h_:
              t = "#Login_RefreshReason_RateLimitExceeded";
              break;
          }
          return (0, s.jsxs)("div", {
            className: j().RefreshReasonContainer,
            children: [
              (0, s.jsx)("div", {
                className: j().RefreshTitle,
                children: (0, v.we)("#Login_RefreshSignIn"),
              }),
              (0, s.jsx)("div", {
                className: j().RefreshReason,
                children: (0, v.we)(t),
              }),
            ],
          });
        }
        function _e() {
          return (0, s.jsx)("div", {
            className: j().ConfirmCredntialsNag,
            children: (0, v.we)("#Login_ConfirmCredentials"),
          });
        }
        function Ye(o) {
          const {
              onSubmit: t,
              status: m,
              autoFocus: g,
              refreshInfo: h,
              strAccountName: p,
              onAccountNameChange: B,
              strPassword: z,
              onPasswordChange: A,
              bRememberMe: _,
              onRememberMeChange: rr,
              secureComputer: wr = !0,
            } = o,
            [ge, ce] = (0, D.useState)(!1),
            me = c(),
            ye = si(),
            Ue = () => {
              t().then(() => {
                ye() && ce(!1);
              });
            },
            yr = m === I || m === Zr,
            je = m === E && !ge,
            er = je
              ? (0, s.jsx)(Bt, {
                  children: (0, v.we)("#Login_CheckCredentials"),
                })
              : (0, s.jsx)(Bt, { children: "\xA0" }),
            ur = g && !p,
            pr = g && !!p,
            fe = !!o.refreshInfo,
            De = (0, D.useId)(),
            $e = (0, D.useId)();
          return (0, s.jsxs)(ht, {
            onSubmit: Ue,
            className: j().LoginForm,
            children: [
              (0, s.jsx)(yt, {
                tone: je ? "danger" : void 0,
                label: (0, s.jsx)(nt, {
                  highlight: !0,
                  inputId: De,
                  children: (0, v.we)("#Login_SignIn_WithAccountName"),
                }),
                value: p,
                onChange: (Xe) => {
                  ce(!0), B(Xe);
                },
                autoFocus: ur,
                disabled: fe,
                id: De,
              }),
              (0, s.jsx)(yt, {
                tone: je ? "danger" : void 0,
                label: (0, s.jsx)(nt, {
                  inputId: $e,
                  children: (0, v.we)("#Login_Password"),
                }),
                value: z,
                onChange: (Xe) => {
                  ce(!0), A(Xe);
                },
                type: "password",
                autoFocus: pr,
                id: $e,
              }),
              wr
                ? (0, s.jsx)(K.he, {
                    toolTipContent: "#Login_RememberMe_Tooltip",
                    direction: "bottom",
                    children: (0, s.jsx)(Ut, {
                      label: (0, v.we)("#Login_RememberMe_Short"),
                      value: _,
                      onChange: rr,
                    }),
                  })
                : (0, s.jsx)("div", {
                    className: j().InsecureComputer,
                    children: (0, v.we)("#Login_InsecureComputer"),
                  }),
              (0, s.jsx)(Ht, { loading: yr, refreshLogin: fe }),
              er,
              !me &&
                (0, s.jsx)(Ze, {
                  href: `${X.TS.HELP_BASE_URL}wizard/HelpWithLogin?redir=${encodeURIComponent(document.location.href)}`,
                  align: "center",
                  children: (0, v.we)("#Login_Help_SignIn"),
                }),
            ],
          });
        }
        const st = 700;
        function zt(o) {
          const t = (0, zr.R7)(),
            m = () => t.ownerWindow.screen.width < st,
            [g, h] = (0, D.useState)(m());
          return (
            (0, T.l6)(t.ownerWindow, "resize", () => {
              h(m());
            }),
            (0, s.jsx)("div", {
              className: j().QRSection,
              children: g ? (0, s.jsx)(Lt, { ...o }) : (0, s.jsx)(Et, { ...o }),
            })
          );
        }
        function It(o) {
          const t =
            X.TS.STORE_BASE_URL +
            "join/?guest=1&purchaseType=gift&checkout=1&redir=" +
            encodeURIComponent(o.redirectURL);
          return (0, s.jsx)("div", {
            className: j().GuestLayout,
            children: (0, s.jsx)(qe, {
              compact: !0,
              children: (0, s.jsxs)("div", {
                className: j().GuestContainer,
                children: [
                  (0, s.jsx)("div", {
                    className: j().GuestText,
                    children: (0, v.oW)(
                      "#Login_Guest",
                      (0, s.jsx)("a", {
                        href: `${t}`,
                        style: { textDecoration: "underline" },
                      }),
                    ),
                  }),
                  (0, s.jsx)("a", {
                    className: j().GuestLink,
                    href: `${t}`,
                    children: (0, s.jsx)("button", {
                      className: j().GuestButton,
                      children: (0, v.we)("#Login_GuestContinue"),
                    }),
                  }),
                ],
              }),
            }),
          });
        }
        function Et(o) {
          return (0, s.jsx)(wt, { ...o });
        }
        function Lt(o) {
          const [t, m] = (0, D.useState)(!1);
          return t
            ? (0, s.jsx)(wt, { ...o, bShowHideButton: !0, setShowQR: m })
            : (0, s.jsx)(Ot, { setShowQR: m });
        }
        function Ot(o) {
          return (0, s.jsxs)("div", {
            className: j().MessagingContainer,
            children: [
              (0, s.jsx)("div", {
                className: j().MessagingTag,
                children: (0, v.we)("#Login_MobileFlow_New"),
              }),
              (0, s.jsx)("div", {
                className: j().MessagingSubtitle,
                children: (0, s.jsx)("div", {
                  className: j().MessagingSubtitle,
                  children: (0, v.we)("#Login_MobileFlow_SignIn_ScanQR"),
                }),
              }),
              (0, s.jsx)("div", {
                className: j().MessagingButton,
                onClick: () => o.setShowQR(!0),
                children: (0, v.we)("#Login_MobileFlow_ShowMeQR_Button"),
              }),
              (0, s.jsx)("a", {
                href: `${X.TS.STORE_BASE_URL}mobile`,
                className: j().MessagingLink,
                children: (0, v.we)("#Login_JoinBeta_Button"),
              }),
            ],
          });
        }
        function wt(o) {
          const {
            onQRStatusChange: t,
            transport: m,
            onComplete: g,
            platform: h,
            refreshInfo: p,
            bShowHideButton: B = !1,
            setShowQR: z,
          } = o;
          return (0, s.jsxs)("div", {
            className: j().QRCodeContainer,
            children: [
              (0, s.jsx)(nt, {
                highlight: !0,
                children: (0, v.we)("#Login_SignIn_OrWithQRCode"),
              }),
              (0, s.jsx)("div", {
                className: j().QR,
                children: (0, s.jsx)(it, {
                  onStatusChange: t,
                  transport: m,
                  onComplete: g,
                  platform: h,
                  refreshInfo: p,
                }),
              }),
              B &&
                z &&
                (0, s.jsx)("div", {
                  className: j().QRHideLink,
                  onClick: () => z(!1),
                  children: (0, v.we)("#Button_Hide"),
                }),
              (0, s.jsx)("div", {
                className: j().UseMobileAppForQR,
                children: (0, v.oW)(
                  "#Login_UseMobileAppForQR_Inline",
                  (0, s.jsx)(Ze, {
                    href: `${X.TS.STORE_BASE_URL}mobile`,
                    align: "center",
                  }),
                ),
              }),
            ],
          });
        }
        function ai() {
          const o = "bShowLoginQR",
            [t, m] = useState(localStorage?.getItem(o) === "1"),
            g = useCallback((h) => {
              m(h),
                h ? localStorage?.setItem(o, "1") : localStorage?.removeItem(o);
            }, []);
          return [t, g];
        }
        function yt(o) {
          const { label: t, error: m, tone: g, autoFocus: h, id: p, ...B } = o,
            z = g ?? (m ? "danger" : void 0);
          return (0, s.jsxs)("div", {
            className: j().TextField,
            children: [
              typeof t == "string"
                ? (0, s.jsx)(nt, { inputId: p, children: t })
                : t,
              m && (0, s.jsx)(Nt, { type: "error", children: m }),
              (0, s.jsx)(Wt, { autoFocus: h, tone: z, id: p, ...B }),
            ],
          });
        }
        function nt(o) {
          const { children: t, inputId: m, highlight: g } = o;
          return (0, s.jsx)("label", {
            className: (0, V.A)(j().FieldLabel, g && j().Highlight),
            htmlFor: m,
            children: t,
          });
        }
        function Wt(o) {
          const {
            value: t,
            onChange: m,
            type: g = "text",
            tone: h,
            className: p,
            autoFocus: B,
            disabled: z,
            id: A,
          } = o;
          return (0, s.jsx)("input", {
            value: t,
            type: g,
            autoFocus: B,
            onChange: (_) => m(_.target.value),
            className: (0, V.A)(j().TextInput, h === "danger" && j().Danger, p),
            disabled: z,
            id: A,
          });
        }
        function Nt(o) {
          const { children: t, type: m } = o;
          return (0, s.jsx)("div", {
            className: (0, V.A)(j().FieldHint, m === "error" && j().Error),
            children: t,
          });
        }
        function Ut(o) {
          const { label: t, onChange: m, value: g } = o;
          let h = () => {
            m && m(!g);
          };
          const p = (0, D.useId)();
          return (0, s.jsxs)("div", {
            className: j().CheckboxField,
            onClick: h,
            onKeyPress: (B) => {
              B.key == " " && (h(), B.preventDefault());
            },
            children: [
              (0, s.jsx)(Pt, { labelledBy: p, value: g }),
              (0, s.jsx)("label", {
                id: p,
                className: j().CheckboxFieldLabel,
                children: t,
              }),
            ],
          });
        }
        function Pt(o) {
          const { value: t, labelledBy: m } = o;
          return (0, s.jsx)("div", {
            tabIndex: 0,
            className: j().Checkbox,
            "aria-labelledby": m,
            role: "checkbox",
            "aria-checked": t,
            children:
              t &&
              (0, s.jsx)("div", {
                className: j().Check,
                children: (0, s.jsx)(Pr.Jlk, { strokeWidth: 35 }),
              }),
          });
        }
        function Ht(o) {
          const { refreshLogin: t, ...m } = o;
          return t &&
            "SteamClient" in globalThis &&
            "User" in SteamClient &&
            "StartShutdown" in SteamClient.User
            ? (0, s.jsx)(Ft, {})
            : (0, s.jsx)(Dt, { ...m });
        }
        function Dt(o) {
          return (0, s.jsx)("div", {
            className: j().SignInButtonContainer,
            children: (0, s.jsx)(Zt, {
              ...o,
              children: (0, v.we)("#Login_SignIn"),
            }),
          });
        }
        function Ft() {
          const o = () => SteamClient.User.StartShutdown(!0);
          return (0, s.jsxs)("div", {
            className: j().RefreshButtonContainer,
            children: [
              (0, s.jsx)("button", {
                className: j().SubmitButton,
                type: "submit",
                children: (0, v.we)("#Login_SignIn"),
              }),
              (0, s.jsx)("button", {
                className: j().RefreshQuitButton,
                onClick: o,
                children: (0, v.we)("#Login_ExitSteam"),
              }),
            ],
          });
        }
        function Zt(o) {
          return (0, s.jsx)(jt, { type: "submit", ...o });
        }
        function jt(o) {
          const {
              className: t,
              loading: m,
              disabled: g,
              children: h,
              ...p
            } = o,
            B = g || m;
          return (0, s.jsxs)("button", {
            className: (0, V.A)(j().SubmitButton, m && j().Loading, t),
            disabled: B,
            ...p,
            children: [
              h,
              m &&
                (0, s.jsx)("div", {
                  className: j().LoadingContainer,
                  children: (0, s.jsx)(Mt, { size: "small" }),
                }),
            ],
          });
        }
        function Bt(o) {
          const t = o.children || "\xA0";
          return (0, s.jsx)("div", { className: j().FormError, children: t });
        }
        function Vt() {
          return (0, s.jsx)(qe, {
            compact: !0,
            children: (0, s.jsxs)(Ke, {
              alignItems: "center",
              className: (0, V.A)(
                j().WaitingForTokenContainer,
                X.TS.IN_STEAMUI && j().Client,
              ),
              children: [
                (0, s.jsx)(q.t, { size: "xlarge" }),
                (0, s.jsx)("div", {
                  className: (0, V.A)(j().Description),
                  children: (0, v.we)(
                    X.TS.IN_STEAMUI
                      ? "#Login_ConnectingToSteam"
                      : "#Login_LoadingAccountInfo",
                  ),
                }),
              ],
            }),
          });
        }
        function Mt(o) {
          const { size: t } = o;
          return (0, s.jsx)("div", {
            className: (0, V.A)(
              j().LoadingSpinner,
              t == "small" && j().Small,
              (t == "medium" || !t) && j().Medium,
              t == "large" && j().Large,
            ),
          });
        }
        function Tt(o) {
          return (0, s.jsx)("div", {
            className: j().OfferOffline,
            children: (0, s.jsx)("button", {
              className: j().OfferOfflineButton,
              onClick: o.onRequestOffline,
              children: (0, v.we)("#Login_GoOffline_Button"),
            }),
          });
        }
        function at(o) {
          const {
              reset: t,
              failure: m,
              onRequestOffline: g,
              errorReference: h,
              extendedErrorMessage: p,
            } = o,
            { title: B, description: z } = Kt(m, p),
            A = X.TS.IN_STEAMUI && m == J.eF.Network;
          return (0, s.jsxs)(qe, {
            compact: !0,
            children: [
              (0, s.jsxs)(Ke, {
                alignItems: "center",
                gap: 12,
                children: [
                  (0, s.jsx)("div", {
                    className: j().FailureTitle,
                    children: B,
                  }),
                  (0, s.jsx)("div", {
                    className: j().FailureDescription,
                    children: z,
                  }),
                  A &&
                    (0, s.jsx)("div", {
                      className: j().FailureDescription,
                      children: (0, v.we)("#Login_GoOffline_Description"),
                    }),
                  (0, s.jsxs)(lt, {
                    className: j().FailureButtons,
                    children: [
                      (0, s.jsx)(jt, {
                        className: j().TryAgainButton,
                        onClick: t,
                        children: (0, v.we)("#Button_Retry"),
                      }),
                      A && g && (0, s.jsx)(Tt, { onRequestOffline: g }),
                    ],
                  }),
                ],
              }),
              h &&
                (0, s.jsx)("div", {
                  className: j().MutedErrorReference,
                  children: (0, v.we)("#Login_Error_Reference", h),
                }),
            ],
          });
        }
        function Kt(o, t = "") {
          let m = { title: "", description: "" };
          switch (o) {
            case J.eF.None:
              return { title: "", description: "" };
            case J.eF.Expired:
              m = {
                title: (0, v.we)("#Login_Error_Expired_Title"),
                description: (0, v.we)("#Login_Error_Expired_Description"),
              };
              break;
            case J.eF.Network:
              m = {
                title: (0, v.we)("#Login_Error_Network_Title"),
                description: (0, v.we)("#Login_Error_Network_Description"),
              };
              break;
            case J.eF.MoveAuthenticator:
              m = {
                title: (0, v.we)("#Error_Generic"),
                description: (0, v.we)(
                  "#Login_Error_MoveAuthenticator_Description",
                ),
              };
              break;
            case J.eF.RateLimitExceeded:
              m = {
                title: (0, v.we)("#Login_Error_RateLimit_Title"),
                description: (0, v.we)("#Login_Error_RateLimit_Description"),
              };
              break;
            case J.eF.AnonymousLogin:
              m = {
                title: (0, v.we)("#Login_Error_Anonymous_Title"),
                description: (0, v.we)("#Login_Error_Anonymous_Description"),
              };
              break;
            case J.eF.Generic:
            default:
              m = {
                title: (0, v.we)("#Error_Generic"),
                description: (0, v.we)("#Login_Error_Default_Description"),
              };
              break;
          }
          return t && (m.description = t), m;
        }
        function Xt(o) {
          const { reset: t } = o;
          return (0, s.jsx)(at, { reset: t, failure: J.eF.Generic });
        }
        function Yt(o) {
          const {
              type: t,
              onSubmitCode: m,
              status: g,
              accountName: h,
              associatedLabel: p,
              onBack: B,
            } = o,
            [z, A] = (0, D.useState)([]),
            [_, rr] = (0, D.useState)(!1),
            [wr, ge] = (0, D.useState)(!1),
            [ce, me] = (0, D.useState)(!1),
            [ye, Ue] = (0, D.useState)(0),
            yr = t === "mobile",
            je = z.join(""),
            er = We(je, ce),
            ur = (mt) => {
              ge(!0),
                m(mt).then(() => {
                  rr(!1), ge(!1);
                });
            },
            pr = (mt) => {
              _ || rr(!0), A(mt);
              const pt = mt.join("");
              We(pt, ce) && ur(pt);
            },
            fe = () => {
              er && ur(je);
            },
            De = () => {
              me(!ce), A([]), m(""), Ue(ye + 1);
            },
            $e = !_ && (g === Lr || g === ue);
          let Xe, ct;
          return (
            ce
              ? t === "mobile"
                ? ((ct = (0, s.jsx)(St, {})), (Xe = "#Login_UseMobileCode"))
                : ((ct = (0, s.jsx)(St, {})), (Xe = "#Login_UseEmailCode"))
              : ((ct =
                  t === "mobile"
                    ? (0, s.jsx)($t, {})
                    : (0, s.jsx)(Jt, { emailAddress: p })),
                (Xe = "#Login_UseBackupCode")),
            (0, s.jsx)(qe, {
              title: (0, s.jsx)(ut, {}),
              compact: !0,
              children: (0, s.jsx)(ht, {
                onSubmit: fe,
                children: (0, s.jsxs)(Ke, {
                  alignItems: "center",
                  gap: 14,
                  children: [
                    (0, s.jsx)(vt, { type: t, accountName: h }),
                    (0, s.jsxs)("div", {
                      className: j().ConfirmationEntryContainer,
                      children: [
                        (0, s.jsxs)(Ke, {
                          alignItems: "center",
                          gap: 2,
                          children: [
                            $e &&
                              (0, s.jsx)(Bt, {
                                children: (0, v.we)(
                                  "#Login_IncorrectSteamGuard",
                                ),
                              }),
                            (0, s.jsx)(
                              Ct,
                              {
                                value: z,
                                onChange: pr,
                                tone: $e ? "danger" : void 0,
                                loading: wr,
                                backupCode: ce,
                              },
                              ye,
                            ),
                          ],
                        }),
                        ct,
                      ],
                    }),
                    yr &&
                      (0, s.jsx)(Ze, {
                        onClick: De,
                        align: "center",
                        children: (0, v.we)(Xe),
                      }),
                    (0, s.jsx)(xt, { type: t, onCodeHelp: o.onCodeHelp }),
                  ],
                }),
              }),
            })
          );
        }
        function xt(o) {
          if ((0, Ir.q)()) return null;
          let t, m;
          return (
            o.type === "mobile"
              ? ((t = `${X.TS.HELP_BASE_URL}wizard/HelpWithLoginInfo?lost=8&issueid=402`),
                (m = (0, v.we)("#Login_Help_AccessMobileApp")))
              : ((t = `${X.TS.HELP_BASE_URL}wizard/HelpWithSteamGuardCode`),
                (m = (0, v.we)("#Login_Help_AccessEmail"))),
            o.onCodeHelp
              ? (0, s.jsx)(Ze, {
                  onClick: () => o.onCodeHelp(t),
                  align: "center",
                  children: m,
                })
              : (0, s.jsx)(Ze, { href: t, align: "center", children: m })
          );
        }
        function St() {
          return (0, s.jsx)(lt, {
            justifyContent: "space-evenly",
            alignItems: "center",
            className: j().EnterBackupCodeContainer,
            children: (0, s.jsxs)(Ke, {
              children: [
                (0, s.jsx)("div", {
                  className: j().EnterCodeFromMobile,
                  children: (0, v.we)("#Login_EnterBackupCode"),
                }),
                (0, s.jsx)("div", {
                  className: j().Label,
                  children: (0, v.we)("#Login_EnterBackupCodeDescription"),
                }),
              ],
            }),
          });
        }
        function $t() {
          return (0, s.jsxs)(lt, {
            justifyContent: "space-evenly",
            alignItems: "center",
            className: j().EnterCodeFromMobileContainer,
            children: [
              (0, s.jsx)("div", {
                className: j().EnterCodeFromMobile,
                children: (0, v.we)("#Login_EnterMobileCode"),
              }),
              (0, s.jsx)(Qt, { className: j().AwaitingMobileConfIcon }),
            ],
          });
        }
        function Jt(o) {
          return (0, s.jsxs)(lt, {
            justifyContent: "space-evenly",
            alignItems: "center",
            className: j().EnterCodeFromEmailContainer,
            children: [
              (0, s.jsx)(Rt, {
                align: "center",
                spacing: 6,
                children: (0, s.jsx)("div", {
                  className: j().EnterCodeFromEmail,
                  children: (0, v.PP)(
                    "#Login_EnterEmailCode",
                    (0, s.jsx)("span", {
                      className: j().EnterCodeEmailAddress,
                      children: o.emailAddress,
                    }),
                  ),
                }),
              }),
              (0, s.jsx)(kt, { className: j().AwaitingEmailConfIcon }),
            ],
          });
        }
        function vt(o) {
          const { accountName: t, type: m } = o,
            g =
              m === "mobile"
                ? (0, v.we)("#Login_MobileProtectingAccount")
                : (0, v.we)("#Login_EmailProtectingAccount"),
            h = c();
          return (0, s.jsxs)("div", {
            className: j().ProtectingAccount,
            children: [
              (0, s.jsx)("div", {
                className: j().Label,
                children: (0, v.PP)(
                  "#Login_ActiveAccountName",
                  (0, s.jsx)("span", {
                    className: j().AccountName,
                    children: t,
                  }),
                ),
              }),
              !h &&
                (0, s.jsx)("div", { className: j().Description, children: g }),
            ],
          });
        }
        function Gt() {
          return (0, s.jsx)(Ke, {
            alignItems: "center",
            children: (0, s.jsxs)("div", {
              className: j().ConfirmationContainer,
              children: [
                (0, s.jsx)("img", { src: (0, i.YJ)(oe) }),
                (0, s.jsx)("div", {
                  className: j().AwaitingMobileConfText,
                  children: (0, v.oW)("#Login_AwaitingMobileConfirmation"),
                }),
              ],
            }),
          });
        }
        function Qt(o) {
          return (0, s.jsxs)("svg", {
            viewBox: "0 0 33 49",
            fill: "currentColor",
            className: o.className,
            children: [
              (0, s.jsx)("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M28 47.1106C29.1046 47.1106 30 46.2151 30 45.1106L30 3.72705C30 2.62248 29.1046 1.72705 28 1.72705L5 1.72705C3.89544 1.72705 3 2.62248 3 3.72705L3 45.1106C3 46.2151 3.89543 47.1106 5 47.1106L28 47.1106ZM5.68119 5.82741L27.3188 5.82741L27.3188 42.7772H5.68119L5.68119 5.82741ZM20.9999 44.944C20.9999 45.3429 20.6766 45.6662 20.2777 45.6662L12.7221 45.6662C12.3233 45.6662 11.9999 45.3429 11.9999 44.944C11.9999 44.5451 12.3233 44.2218 12.7221 44.2218H20.2777C20.6766 44.2218 20.9999 44.5451 20.9999 44.944ZM17.2778 4.44406C17.6767 4.44406 18 4.12071 18 3.72184C18 3.32296 17.6767 2.99962 17.2778 2.99962L15.7222 2.99962C15.3233 2.99962 15 3.32296 15 3.72184C15 4.12071 15.3233 4.44406 15.7222 4.44406L17.2778 4.44406Z",
              }),
              (0, s.jsx)("path", {
                fill: "currentColor",
                d: "M22.2456 22.4164C22.2456 21.6666 22.8127 21.0002 23.6228 21.0002C24.3519 21.0002 25 21.6666 25 22.4164C25 23.1661 24.3519 23.8325 23.6228 23.8325C22.8937 23.8325 22.2456 23.1661 22.2456 22.4164Z",
              }),
              (0, s.jsx)("path", {
                fill: "currentColor",
                d: "M18.6812 22.4164C18.6812 21.6666 19.2483 21.0002 20.0584 21.0002C20.8685 21.0002 21.5166 21.6666 21.4355 22.4164C21.4355 23.1661 20.8685 23.8325 20.0584 23.8325C19.3293 23.8325 18.6812 23.1661 18.6812 22.4164Z",
              }),
              (0, s.jsx)("path", {
                fill: "currentColor",
                d: "M15.1977 22.4164C15.1977 21.6666 15.7648 21.0002 16.5749 21.0002C17.304 21.0002 17.9521 21.6666 17.9521 22.4164C17.9521 23.1661 17.385 23.8325 16.5749 23.8325C15.8458 23.8325 15.1977 23.1661 15.1977 22.4164Z",
              }),
              (0, s.jsx)("path", {
                fill: "currentColor",
                d: "M11.7143 22.4164C11.7143 21.6666 12.2814 21.0002 13.0915 21.0002C13.8206 21.0002 14.4686 21.6666 14.4686 22.4164C14.4686 23.1661 13.9016 23.8325 13.0915 23.8325C12.3624 23.8325 11.7143 23.1661 11.7143 22.4164Z",
              }),
              (0, s.jsx)("path", {
                fill: "currentColor",
                d: "M8.14983 22.4164C8.14983 21.6666 8.7169 21.0002 9.527 21.0002C10.3371 21.0002 10.9852 21.6666 10.9042 22.4164C10.9042 23.1661 10.3371 23.8325 9.527 23.8325C8.79791 23.8325 8.14983 23.1661 8.14983 22.4164Z",
              }),
            ],
          });
        }
        function kt(o) {
          return (0, s.jsx)("svg", {
            viewBox: "0 0 58 56",
            fill: "none",
            className: o.className,
            children: (0, s.jsx)("path", {
              d: "M57.9352 24.5887C57.8463 24.233 57.8463 23.8774 57.6684 23.5217C57.4017 22.8993 57.046 22.4547 56.5125 22.0101L49.577 16.4083V10.9844C49.577 8.85041 47.8876 7.16098 45.7536 7.16098H38.1956L31.5269 1.73706C30.1042 0.581137 28.0591 0.581137 26.6364 1.73706L19.9677 7.16098H12.4097C10.2757 7.16098 8.58631 8.93932 8.58631 10.9844V16.4083L1.56188 22.0101C1.02838 22.3658 0.672713 22.8993 0.405962 23.5217V23.6106C0.228128 24.1441 0.050293 24.5887 0.050293 25.1222V52.1529C0.050293 53.2199 0.494878 54.1091 1.1173 54.8204C1.82863 55.5318 2.80672 55.8874 3.7848 55.8874H54.0228C55.0898 55.8874 55.979 55.4428 56.6903 54.8204C57.4017 54.1091 57.7573 53.131 57.7573 52.1529V25.1222C57.9352 24.8554 57.9352 24.7665 57.9352 24.5887ZM49.577 19.7872L54.7342 23.9663L49.577 28.9456V19.7872ZM28.148 3.60431C28.4148 3.42648 28.6815 3.24864 28.9483 3.24864C29.3039 3.24864 29.5707 3.33756 29.7485 3.60431L34.0165 7.07207H23.9689L28.148 3.60431ZM10.9871 10.9844C10.9871 10.2731 11.5206 9.73958 12.2319 9.73958H45.6646C46.376 9.73958 46.9095 10.362 46.9095 10.9844V31.4353L46.8206 31.5242L40.2407 37.9262H17.6558L11.076 31.5242L10.9871 31.4353V10.9844ZM8.40848 19.7872V28.9456L3.34022 23.9663L8.40848 19.7872ZM2.62888 51.6194V26.9005L15.2551 39.26L2.62888 51.6194ZM4.49614 53.3088L17.6558 40.5048H40.2407L53.4004 53.3088H4.49614ZM55.3566 51.6194L42.6415 39.1711L55.2677 26.8116V51.6194H55.3566ZM29.0372 35.3476C30.5488 35.3476 31.9715 35.0809 33.3941 34.5474C34.0165 34.2806 34.3722 33.4804 34.1055 32.858C33.8387 32.2355 33.0385 31.8799 32.416 32.1466C31.349 32.5912 30.1931 32.769 29.0372 32.769C27.3478 32.769 25.7473 32.3245 24.4135 31.5242C21.746 29.9237 20.0566 27.0784 20.0566 23.7884C20.0566 18.8091 24.0579 14.8078 29.0372 14.8078C34.0165 14.8078 38.0178 18.8091 38.0178 23.7884V24.4109C38.0178 25.4779 37.2175 26.367 36.0616 26.367C34.9946 26.367 34.1055 25.4779 34.1055 24.4109V23.7884C34.1055 20.9431 31.7936 18.6313 28.9483 18.6313C26.1029 18.6313 23.7911 20.9431 23.7911 23.7884C23.7911 26.6338 26.1029 28.9456 28.9483 28.9456C30.3709 28.9456 31.7047 28.3232 32.5939 27.434C33.3941 28.4121 34.639 28.9456 35.9727 28.9456C38.4624 28.9456 40.5075 26.9894 40.5075 24.4109V23.7884C40.5075 17.3864 35.2614 12.2292 28.9483 12.2292C22.6352 12.2292 17.3891 17.4753 17.3891 23.7884C17.3891 26.7227 18.545 29.4791 20.3233 31.5242C22.5463 33.925 25.5694 35.3476 29.0372 35.3476ZM29.0372 26.367C27.6145 26.367 26.4586 25.2111 26.4586 23.7884C26.4586 22.3658 27.6145 21.2098 29.0372 21.2098C30.4599 21.2098 31.6158 22.3658 31.6158 23.7884C31.5269 25.2111 30.371 26.367 29.0372 26.367Z",
              fill: "#1A99FF",
            }),
          });
        }
        function ni(o) {
          const [t, m] = useSvgId();
          return jsxs("svg", {
            className: o.className,
            width: "34",
            height: "52",
            viewBox: "0 0 34 52",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M0.993001 3.2C0.993001 2.0799 0.993001 1.51984 1.21099 1.09202C1.40273 0.715695 1.7087 0.409734 2.08502 0.217987C2.51284 0 3.0729 0 4.193 0H29.793C30.9131 0 31.4732 0 31.901 0.217987C32.2773 0.409734 32.5833 0.715695 32.775 1.09202C32.993 1.51984 32.993 2.0799 32.993 3.2V48.8C32.993 49.9201 32.993 50.4802 32.775 50.908C32.5833 51.2843 32.2773 51.5903 31.901 51.782C31.4732 52 30.9131 52 29.793 52H4.193C3.0729 52 2.51284 52 2.08502 51.782C1.7087 51.5903 1.40273 51.2843 1.21099 50.908C0.993001 50.4802 0.993001 49.9201 0.993001 48.8V3.2ZM33 19.2967C33 19.1328 33.1328 19 33.2967 19C33.4606 19 33.5934 19.1328 33.5934 19.2967V25.8924C33.5934 26.0563 33.4606 26.1891 33.2967 26.1891C33.1328 26.1891 33 26.0563 33 25.8924V19.2967ZM0.690255 12.8531C0.854118 12.8531 0.986956 12.986 0.986956 13.1498V14.735C0.986956 14.8988 0.854118 15.0317 0.690255 15.0317C0.526392 15.0317 0.393555 14.8988 0.393555 14.735V13.1498C0.393555 12.986 0.526392 12.8531 0.690255 12.8531ZM0.986956 23.8975C0.986956 23.7337 0.854118 23.6008 0.690255 23.6008C0.526392 23.6008 0.393555 23.7337 0.393555 23.8975V27.8064C0.393555 27.9703 0.526392 28.1031 0.690255 28.1031C0.854118 28.1031 0.986956 27.9703 0.986956 27.8064V23.8975ZM0.690255 17.3557C0.854118 17.3557 0.986956 17.4886 0.986956 17.6524V21.5613C0.986956 21.7252 0.854118 21.858 0.690255 21.858C0.526392 21.858 0.393555 21.7252 0.393555 21.5613V17.6524C0.393555 17.4886 0.526392 17.3557 0.690255 17.3557Z",
                fill: o.phoneOutlineColor ?? "currentColor",
              }),
              jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M3.10899 2.54601C3 2.75992 3 3.03995 3 3.6V48.4C3 48.9601 3 49.2401 3.10899 49.454C3.20487 49.6422 3.35785 49.7951 3.54601 49.891C3.75992 50 4.03995 50 4.6 50H29.4C29.9601 50 30.2401 50 30.454 49.891C30.6422 49.7951 30.7951 49.6422 30.891 49.454C31 49.2401 31 48.9601 31 48.4V3.6C31 3.03995 31 2.75992 30.891 2.54601C30.7951 2.35785 30.6422 2.20487 30.454 2.10899C30.2401 2 29.9601 2 29.4 2H23C22.9469 2 22.8965 2.0232 22.8562 2.06277C22.7957 2.12213 22.7857 2.22585 22.7855 2.32129C22.7839 3.09871 22.7694 3.51909 22.6437 3.85908C22.4867 4.28385 22.2109 4.63059 21.8671 4.82458C21.5561 5 21.1565 5 20.3571 5H13.6429C12.8435 5 12.4439 5 12.1329 4.82458C11.7891 4.63059 11.5133 4.28385 11.3563 3.85908C11.2306 3.51909 11.2161 3.09871 11.2145 2.32129C11.2143 2.22585 11.2043 2.12213 11.1438 2.06277C11.1035 2.0232 11.0531 2 11 2H4.6C4.03995 2 3.75992 2 3.54601 2.10899C3.35785 2.20487 3.20487 2.35785 3.10899 2.54601Z",
                fill: o.backgroundColor ?? "currentColor",
              }),
              jsx("g", {
                clipPath: m,
                children: jsx("path", {
                  d: "M24.3333 17.6667H22.5V19.5H24.3333V17.6667ZM26.1667 15.8333V21.3333H20.6667V15.8333H26.1667V15.8333ZM27.0833 26.8333H25.25C24.3333 26.8333 24.3333 26.8333 24.3333 27.75V31.4167C24.3333 32.3335 24.3333 32.3335 25.25 32.3335H27.0833C28 32.3335 28 32.3335 28 31.4167V27.75C28 26.8333 28 26.8333 27.0833 26.8333ZM21.5833 26.8333C20.6665 26.8333 20.6665 26.8333 20.6665 27.75C20.6665 28.6667 20.6665 28.6667 21.5833 28.6667C22.5 28.6667 22.5 28.6667 22.5 27.75C22.5 26.8333 22.5 26.8333 21.5833 26.8333ZM27.0833 34.1667C26.1665 34.1667 26.1665 34.1667 26.1665 35.0835C26.1665 36.0002 26.1665 36.0002 27.0833 36.0002C28 36 28 36 28 35.0833C28 34.1667 28 34.1667 27.0833 34.1667ZM16.0833 23.1667C15.1665 23.1667 15.1665 23.1667 15.1665 24.0835C15.1665 25.0002 15.1665 25.0002 16.0833 25.0002C17 25.0002 17 25 17 24.0833C17 23.1665 17 23.1667 16.0833 23.1667ZM11.5 17.6667H9.66674V19.5H11.5V17.6667ZM13.3333 15.8333V21.3333H7.83326V15.8333H13.3333V15.8333ZM14.25 14H6.91674C6 14 6 14 6 14.9167V24.0835C6 25 6 25 6.91674 25C7.83348 25 7.83348 25 7.83348 24.0833V23.1665H14.25C15.1667 23.1665 15.1667 23.1665 15.1667 22.2498V19.5H16.0835C17 19.5 17 19.5 17 18.5833C17 17.6665 17 17.6665 16.0833 17.6665H15.1665V14.9165C15.1667 14 15.1667 14 14.25 14ZM27.0833 30.5H23.4167C22.5 30.5 22.5 30.5 22.5 31.4167V34.1667H21.5833C20.6665 34.1667 20.6665 34.1667 20.6665 35.0835C20.6665 36.0002 20.6665 36.0002 21.5833 36.0002H23.4165C24.3333 36.0002 24.3333 36.0002 24.3333 35.0835V32.3335H27.0833C28 32.3335 28 32.3335 28 31.4167C28 30.5 28 30.5 27.0833 30.5ZM19.75 30.5C18.8333 30.5 18.8333 30.5 18.8333 31.4167C18.8333 32.3335 18.8333 32.3335 19.75 32.3335C20.6667 32.3335 20.6667 32.3335 20.6667 31.4167C20.6667 30.5 20.6667 30.5 19.75 30.5ZM10.5833 25C9.66652 25 9.66652 25 9.66652 25.9167V26.8335H6.91652C6 26.8333 6 26.8333 6 27.75V35.0833C6 36 6 36 6.91674 36H14.25C15.1667 36 15.1667 36 15.1667 35.0833V34.1665H17V35.0833C17 36 17 36 17.9167 36C18.8335 36 18.8335 36 18.8335 35.0833V33.25C18.8335 32.3333 18.8335 32.3333 17.9167 32.3333H15.1667V30.5H17.9167C18.8335 30.5 18.8335 30.5 18.8335 29.5833C18.8335 28.6665 18.8335 28.6665 17.9167 28.6665H15.1667V27.75C15.1667 26.8333 15.1667 26.8333 14.25 26.8333H11.5V25.9165C11.5 25 11.5 25 10.5833 25ZM13.3333 28.6667V34.1667H7.83326V28.6667H13.3333ZM11.5 30.5H9.66674V32.3333H11.5V30.5ZM27.0833 14H17.9167C17 14 17 14 17 14.9167C17 15.8335 17 15.8335 17.9167 15.8335H18.8335V22.25C18.8335 23.1667 18.8335 23.1667 19.7502 23.1667H20.667V24.0835C20.667 25.0002 20.667 25.0002 21.5837 25.0002C22.5 25 22.5 25 22.5 24.0833V23.1665H24.3333V27.75C24.3333 28.6667 24.3333 28.6667 25.25 28.6667C26.1667 28.6667 26.1667 28.6667 26.1667 27.75V23.1667H27.0835C28.0002 23.1667 28.0002 23.1667 28.0002 22.25V14.9167C28 14 28 14 27.0833 14Z",
                  fill: o.qrCodeColor ?? "currentColor",
                }),
              }),
              jsx("defs", {
                children: jsx("clipPath", {
                  id: t,
                  children: jsx("rect", {
                    width: "22",
                    height: "22",
                    fill: "currentColor",
                    transform: "translate(6 14)",
                  }),
                }),
              }),
            ],
          });
        }
        function li(o) {
          return jsxs("svg", {
            className: o.className,
            viewBox: "0 0 25 25",
            fill: "none",
            children: [
              jsx("path", {
                d: "M5.77051 0H0V5.76795H5.77051V0ZM4.83807 4.83871H0.929121V0.929245H4.83807V4.83871Z",
                fill: "currentColor",
              }),
              jsx("path", {
                d: "M4.02169 1.69238H1.63916V4.07523H4.02169V1.69238Z",
                fill: "currentColor",
              }),
              jsx("path", {
                d: "M9.6127 0H7.69141V1.92155H9.6127V0Z",
                fill: "currentColor",
              }),
              jsx("path", {
                d: "M1.92129 9.61475H0V11.5396V13.4612H1.92129V11.5396V9.61475Z",
                fill: "currentColor",
              }),
              jsx("path", {
                d: "M5.77031 9.61475H3.8457V11.5363H5.77031V9.61475Z",
                fill: "currentColor",
              }),
              jsx("path", {
                d: "M3.84268 7.69238H1.92139V9.61393H3.84268V7.69238Z",
                fill: "currentColor",
              }),
              jsx("path", {
                d: "M21.1535 9.61436V7.69282H19.2289H17.3076V9.61436H19.2289V11.5392H21.1535V13.4608H19.2289H17.3076V11.5392V9.61436H15.383V7.69282H17.3076V5.76795V3.84641H15.383V1.92155H17.3076V0H15.383H13.4617H11.5371V1.92155H13.4617V3.84641V5.76795H11.5371V7.69282H13.4617V9.61436V11.5392H11.5371V13.4608H13.4617V15.3856V17.3072H11.5371V19.232H13.4617V21.1536V23.0785H11.5371V25H13.4617H15.383H17.3076V23.0785H15.383V21.1536H17.3076V19.232V17.3072H15.383V15.3856H17.3076H19.2289V17.3072H21.1535V15.3856H23.0748V17.3072H24.9994V15.3856V13.4608H23.0748V11.5392H24.9994V9.61436H23.0748H21.1535Z",
                fill: "currentColor",
              }),
              jsx("path", {
                d: "M19.23 0V5.76795H25.0005V0H19.23ZM24.068 4.83871H20.1591V0.929245H24.068V4.83871Z",
                fill: "currentColor",
              }),
              jsx("path", {
                d: "M23.2541 1.69238H20.8716V4.07523H23.2541V1.69238Z",
                fill: "currentColor",
              }),
              jsx("path", {
                d: "M0 24.9999H5.77051V19.2319H0V24.9999ZM0.929121 20.1612H4.83807V24.0706H0.929121V20.1612Z",
                fill: "currentColor",
              }),
              jsx("path", {
                d: "M4.02169 20.9248H1.63916V23.3076H4.02169V20.9248Z",
                fill: "currentColor",
              }),
              jsx("path", {
                d: "M11.5378 19.2319H9.61319V17.307H11.5378V15.3855V13.4606H9.61319V11.5391H11.5378V9.6142H9.61319V7.69266V5.7678H11.5378V3.84625V1.92139H9.61319V3.84625H7.6919V5.7678V7.69266H5.7706V9.6142H7.6919V11.5391H5.7706V13.4606H7.6919V15.3855H5.7706V13.4606H3.846H1.92139V15.3855H3.846V17.307H5.7706H7.6919V19.2319V21.1534H9.61319V23.0783H11.5378V21.1534V19.2319Z",
                fill: "currentColor",
              }),
              jsx("path", {
                d: "M9.6127 23.0786H7.69141V25.0002H9.6127V23.0786Z",
                fill: "currentColor",
              }),
              jsx("path", {
                d: "M1.92129 15.3853H0V17.3068H1.92129V15.3853Z",
                fill: "currentColor",
              }),
              jsx("path", {
                d: "M19.23 24.9999H25.0005V19.2319H19.23V24.9999ZM20.1591 20.1612H24.068V24.0706H20.1591V20.1612Z",
                fill: "currentColor",
              }),
              jsx("path", {
                d: "M23.2541 20.9248H20.8716V23.3076H23.2541V20.9248Z",
                fill: "currentColor",
              }),
            ],
          });
        }
        function qt(o) {
          const { type: t, accountName: m, onUseCodeOverride: g } = o,
            h = c(),
            p = (0, s.jsx)(xt, { type: "mobile", onCodeHelp: o.onCodeHelp }),
            B = h
              ? (0, s.jsx)("div", {
                  style: { paddingBottom: "20px" },
                  children: (0, s.jsx)(Ze, {
                    align: "center",
                    onClick: g,
                    children: (0, v.we)("#Login_EnterCodeInstead"),
                  }),
                })
              : (0, s.jsx)("div", {
                  className: j().EnterCodeInsteadLink,
                  children: (0, s.jsx)(Ze, {
                    align: "center",
                    onClick: g,
                    children: (0, v.we)("#Login_EnterCodeInstead"),
                  }),
                });
          return (0, s.jsx)(qe, {
            title: (0, s.jsx)(ut, {}),
            compact: !0,
            children: (0, s.jsxs)(Ke, {
              gap: X.TS.IN_STEAMUI ? 24 : 40,
              children: [
                (0, s.jsx)(vt, { type: t, accountName: m }),
                (0, s.jsx)(Gt, {}),
                (0, s.jsxs)("div", {
                  className: j().LinkContainer,
                  children: [B, p],
                }),
              ],
            }),
          });
        }
        function Ze(o) {
          const { children: t, align: m, inline: g } = o,
            h = (0, V.A)(j().TextLink, m === "center" && j().TextAlignCenter);
          if ("href" in o) {
            const p = X.TS.IN_STEAMUI
              ? `steam://openurl_external/${o.href}`
              : o.href;
            return (0, s.jsx)("a", { className: h, href: p, children: t });
          } else {
            const p = g ? "span" : "div";
            return (0, s.jsx)(p, {
              className: h,
              onClick: o.onClick,
              children: t,
            });
          }
        }
        function ht(o) {
          const { onSubmit: t, children: m, className: g } = o,
            h = (p) => (p.preventDefault(), t(), !1);
          return (0, s.jsx)("form", { onSubmit: h, className: g, children: m });
        }
        function ci(o) {
          const { align: t, ...m } = o;
          return jsx("div", {
            className: classnames(styles.Text, t === "center" && styles.Center),
            ...m,
          });
        }
        function Ke(o) {
          const {
              alignItems: t,
              justifyContent: m,
              gap: g,
              className: h,
              ariaLabelledBy: p,
              children: B,
            } = o,
            z = (0, V.A)(
              j().FlexCol,
              t === "center" && j().AlignItemsCenter,
              m === "center" && j().JustifyContentCenter,
              h,
            ),
            A = g ? { gap: typeof g == "number" ? `${g}px` : g } : void 0;
          return (0, s.jsx)("section", {
            className: z,
            style: A,
            "aria-labelledby": p,
            children: B,
          });
        }
        function lt(o) {
          const {
              children: t,
              justifyContent: m,
              alignItems: g,
              className: h,
            } = o,
            p = {
              display: "flex",
              flexDirection: "row",
              justifyContent: m,
              alignItems: g,
            };
          return (0, s.jsx)("div", { style: p, className: h, children: t });
        }
        function Ct(o) {
          const { onChange: t, backupCode: m = !1, ...g } = o,
            h = (p) => {
              p = p.map((z) => z.toUpperCase());
              const B = p.join("").trim();
              Rr(B, m) && t(p);
            };
          return (0, s.jsx)(vr, {
            length: Qr(m),
            backupCode: m,
            onChange: h,
            autoFocus: !0,
            ...g,
            allowCharacter: (p) => /\w/g.test(p),
          });
        }
        function Rt(o) {
          const { children: t, spacing: m = 0, align: g } = o;
          return (0, s.jsx)(Ke, {
            alignItems: g,
            children: D.Children.map(t, (h, p) =>
              h
                ? (0, s.jsx)("div", {
                    style: p > 0 ? { paddingTop: `${m}px` } : void 0,
                    children: h,
                  })
                : null,
            )?.filter(Boolean),
          });
        }
        function qe(o) {
          const { title: t, titleId: m, children: g, compact: h } = o,
            p = c(),
            B = (0, D.useId)();
          return (0, s.jsxs)(Ke, {
            gap: X.TS.IN_STEAMUI ? 0 : 32,
            className: (0, V.A)(
              j().StandardLayout,
              p && j().Embedded,
              h && j().Compact,
              X.TS.IN_STEAMUI && "IN_CLIENT",
            ),
            ariaLabelledBy: m ?? B,
            children: [
              typeof t == "string"
                ? (0, s.jsx)("div", {
                    className: j().PrimaryHeader,
                    id: m ?? B,
                    children: t,
                  })
                : t,
              (0, s.jsx)("div", { className: j().FormContainer, children: g }),
            ],
          });
        }
        function ut(o) {
          const {
            realm: t = X.TS.EREALM,
            launcherType: m = X.TS.IN_STEAMUI ? X.TS.LAUNCHER_TYPE : void 0,
            className: g = j().HeaderLogo,
          } = o;
          return m === M.A2g
            ? (0, s.jsx)("div", { className: g })
            : (0, s.jsxs)("div", {
                className: j().LogoContainer,
                children: [
                  (0, s.jsx)(At, { onBack: o.onBack }),
                  t !== ae.TU.k_ESteamRealmChina
                    ? (0, s.jsx)(_t, { className: g })
                    : (0, s.jsx)(ri, { className: g }),
                  " ",
                ],
              });
        }
        function At(o) {
          return o.onBack
            ? (0, s.jsx)("div", {
                className: j().BackArrowContainer,
                onClick: o.onBack,
                children: (0, s.jsx)(Pr.Q38, { className: j().BackArrow }),
              })
            : null;
        }
        function _t(o) {
          return (0, s.jsxs)("svg", {
            viewBox: "0 0 153 46",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: o.className,
            children: [
              (0, s.jsx)("path", {
                d: "M22.9891 0C10.8429 0 0.93833 9.30396 0 21.1548L12.3547 26.2486C13.3973 25.5209 14.6484 25.1051 16.0037 25.1051C16.108 25.1051 16.2644 25.1051 16.3687 25.1051L21.8944 17.2045C21.8944 17.1525 21.8944 17.1525 21.8944 17.1006C21.8944 12.3186 25.8041 8.42034 30.6 8.42034C35.3959 8.42034 39.3056 12.3186 39.3056 17.1006C39.3056 21.8825 35.3959 25.7808 30.6 25.7808C30.5479 25.7808 30.4436 25.7808 30.3915 25.7808L22.5721 31.3424C22.5721 31.4463 22.5721 31.5503 22.5721 31.6542C22.5721 35.2407 19.6528 38.1514 16.0559 38.1514C12.876 38.1514 10.2695 35.9164 9.64395 32.9017L0.781942 29.2633C3.5448 38.9311 12.4068 46 22.9891 46C35.7087 46 46.0303 35.7085 46.0303 23.026C46.0303 10.2915 35.7087 0 22.9891 0Z",
                fill: "#E0E1E6",
              }),
              (0, s.jsx)("path", {
                d: "M14.44 34.8766L11.625 33.7331C12.1463 34.7726 12.9804 35.6562 14.1272 36.124C16.6294 37.1636 19.4966 35.9681 20.5391 33.4732C21.0604 32.2777 21.0604 30.9263 20.5391 29.7308C20.0178 28.5353 19.0795 27.5997 17.8805 27.08C16.6816 26.5602 15.3783 26.6122 14.2836 27.028L17.2029 28.2235C19.0274 29.0031 19.9136 31.0822 19.1316 32.9014C18.4018 34.7726 16.2645 35.6562 14.44 34.8766Z",
                fill: "#E0E1E6",
              }),
              (0, s.jsx)("path", {
                d: "M36.3857 17.0488C36.3857 13.8782 33.7793 11.2793 30.5994 11.2793C27.4195 11.2793 24.813 13.8782 24.813 17.0488C24.813 20.2194 27.4195 22.8703 30.5994 22.8703C33.7793 22.8703 36.3857 20.2714 36.3857 17.0488ZM26.2205 17.0488C26.2205 14.6578 28.1493 12.6827 30.5994 12.6827C32.9973 12.6827 34.9782 14.6058 34.9782 17.0488C34.9782 19.4397 33.0495 21.3629 30.5994 21.3629C28.2014 21.4149 26.2205 19.4397 26.2205 17.0488Z",
                fill: "#E0E1E6",
              }),
              (0, s.jsx)("path", {
                d: "M70.6879 15.7489L69.1241 18.4517C67.9251 17.6201 66.3091 17.1003 64.9016 17.1003C63.2856 17.1003 62.2951 17.776 62.2951 18.9715C62.2951 20.4269 64.0675 20.7387 66.674 21.6743C69.489 22.6619 71.105 23.8574 71.105 26.4043C71.105 29.9387 68.3421 31.9139 64.3282 31.9139C62.3994 31.9139 60.0014 31.3941 58.229 30.3026L59.3759 27.2879C60.8355 28.0675 62.6079 28.5353 64.1718 28.5353C66.3091 28.5353 67.2995 27.7557 67.2995 26.6122C67.2995 25.3127 65.7878 24.8969 63.2856 24.0653C60.4706 23.1297 58.5418 21.8822 58.5418 19.0235C58.5418 15.8009 61.1483 13.9297 64.8494 13.9297C67.4038 14.0336 69.489 14.8653 70.6879 15.7489Z",
                fill: "#E0E1E6",
              }),
              (0, s.jsx)("path", {
                d: "M82.7305 17.4643V31.6542H79.0815V17.4643H73.8164V14.3457H87.9956V17.4643H82.7305Z",
                fill: "#E0E1E6",
              }),
              (0, s.jsx)("path", {
                d: "M95.6574 17.4124V21.3107H102.643V24.4293H95.6574V28.4836H103.737V31.6022H92.0083V14.3457H103.737V17.4643H95.6574V17.4124Z",
                fill: "#E0E1E6",
              }),
              (0, s.jsx)("path", {
                d: "M111.87 28.2756L110.723 31.6542H106.917L113.434 14.3457H117.083L123.755 31.6542H119.793L118.594 28.2756H111.87ZM115.258 18.4519L112.912 25.3649H117.708L115.258 18.4519Z",
                fill: "#E0E1E6",
              }),
              (0, s.jsx)("path", {
                d: "M142.47 21.0508L137.726 31.1864H135.693L131.001 21.1547V31.7062H127.509V14.3457H131.001L136.84 26.8723L142.47 14.3457H145.963V31.6542H142.47V21.0508Z",
                fill: "#E0E1E6",
              }),
              (0, s.jsx)("path", {
                d: "M153 16.5288C153 18.0361 151.905 18.9197 150.602 18.9197C149.299 18.9197 148.204 17.9841 148.204 16.5288C148.204 15.0214 149.351 14.1378 150.602 14.1378C151.853 14.0858 153 15.0214 153 16.5288ZM148.569 16.5288C148.569 17.7762 149.455 18.5559 150.55 18.5559C151.645 18.5559 152.531 17.7762 152.531 16.5288C152.531 15.2813 151.645 14.5016 150.55 14.5016C149.455 14.5016 148.569 15.2813 148.569 16.5288ZM150.602 15.2813C151.228 15.2813 151.436 15.5932 151.436 15.957C151.436 16.2689 151.228 16.4768 151.019 16.6327L151.593 17.6723H151.123L150.654 16.7367H150.133V17.6723H149.768V15.2813H150.602ZM150.185 16.3728H150.602C150.863 16.3728 151.019 16.2169 151.019 16.009C151.019 15.8011 150.915 15.6451 150.602 15.6451H150.185V16.3728Z",
                fill: "#E0E1E6",
              }),
            ],
          });
        }
        function ri(o) {
          return (0, s.jsxs)("svg", {
            viewBox: "0 0 232.73 46.07",
            xmlns: "http://www.w3.org/2000/svg",
            className: o.className,
            fill: "#E0E1E6",
            children: [
              (0, s.jsxs)("g", {
                stroke: "null",
                id: "svg_2",
                children: [
                  (0, s.jsx)("path", {
                    stroke: "null",
                    id: "svg_3",
                    d: "m21.73862,4.25158c-10.07896,0 -18.33997,7.77507 -19.12529,17.65445l10.28722,4.25199c0.87209,-0.59441 1.92641,-0.94585 3.05883,-0.94585c0.09979,0 0.20392,0.00434 0.30371,0.00868l4.57306,-6.62964c0,-0.03037 0,-0.06074 0,-0.09545c0,-3.99167 3.2454,-7.23707 7.23707,-7.23707c3.99167,0 7.23707,3.2454 7.23707,7.23707c0,3.99167 -3.2454,7.23707 -7.23707,7.23707c-0.0564,0 -0.10847,0 -0.16487,-0.00434l-6.52551,4.65984c0.00434,0.08678 0.00868,0.16921 0.00868,0.25599c0,2.99809 -2.43839,5.43214 -5.43214,5.43214c-2.62929,0 -4.82905,-1.87869 -5.32801,-4.36046l-7.35855,-3.04148c2.27785,8.05709 9.67979,13.96216 18.4658,13.96216c10.59961,0 19.19471,-8.5951 19.19471,-19.19471c0,-10.59527 -8.5951,-19.19037 -19.19471,-19.19037",
                  }),
                  (0, s.jsx)("path", {
                    stroke: "null",
                    id: "svg_4",
                    d: "m14.64039,33.37339l-2.35595,-0.97622c0.41652,0.86775 1.1411,1.59667 2.09996,2.00017c2.07393,0.86341 4.46459,-0.12149 5.33235,-2.19542c0.41652,-1.00226 0.42086,-2.11298 0.00434,-3.11957c-0.41652,-1.00659 -1.1975,-1.79191 -2.19976,-2.21277c-0.99792,-0.41652 -2.06525,-0.39917 -3.00677,-0.04773l2.43405,1.00659c1.53159,0.6378 2.25182,2.395 1.61836,3.92659c-0.6378,1.53592 -2.395,2.25616 -3.92659,1.61836",
                  }),
                  (0, s.jsx)("path", {
                    stroke: "null",
                    id: "svg_5",
                    d: "m32.89793,18.49576c0,-2.65966 -2.16505,-4.82471 -4.82471,-4.82471c-2.65966,0 -4.82471,2.16505 -4.82471,4.82471c0,2.65966 2.16505,4.82037 4.82471,4.82037c2.65966,0.00434 4.82471,-2.16071 4.82471,-4.82037m-8.4389,-0.00434c0,-2.00017 1.6227,-3.62287 3.62287,-3.62287c2.00017,0 3.62287,1.6227 3.62287,3.62287c0,2.00017 -1.6227,3.62287 -3.62287,3.62287c-2.00017,0 -3.62287,-1.6227 -3.62287,-3.62287",
                  }),
                ],
              }),
              (0, s.jsx)("path", {
                stroke: "null",
                id: "svg_6",
                d: "m46.71333,8.08293c0,2.23529 -1.67014,3.62707 -3.5849,3.62707c-1.91476,0 -3.60177,-1.39178 -3.60177,-3.62707c0,-2.23529 1.68701,-3.6102 3.60177,-3.6102c1.91476,-0.00844 3.5849,1.37491 3.5849,3.6102m-6.64682,0c0,1.90632 1.39178,3.1041 3.05349,3.1041c1.66171,0 3.04505,-1.19778 3.04505,-3.1041c0,-1.91476 -1.38335,-3.09566 -3.04505,-3.09566c-1.65327,0 -3.05349,1.18934 -3.05349,3.09566m3.09566,-1.84728c0.95316,0 1.23152,0.49767 1.23152,1.01221c0,0.48923 -0.29523,0.8182 -0.64106,0.9869l0.83507,1.57736l-0.63263,0l-0.71698,-1.40865l-0.76759,0l0,1.40865l-0.52297,0l0,-3.56803l1.21465,0l0,-0.00844zm-0.69167,1.67858l0.65793,0c0.43019,0 0.70011,-0.27836 0.70011,-0.61576c0,-0.3374 -0.17714,-0.56515 -0.69167,-0.56515l-0.66637,0l0,1.18091z",
              }),
              (0, s.jsxs)("g", {
                id: "svg_7",
                children: [
                  (0, s.jsx)("path", {
                    id: "svg_8",
                    d: "m77.46999,20.31667c-2.27,6.12 -7.24,10.13 -13.11,12.2c-0.54,-1.12 -1.7,-2.9 -2.65,-3.76c3.6,-1.03 6.95,-3.06 9.14,-5.63l-7.24,0l0,-3.89l10.05,0l0.79,-0.12l3.02,1.2zm-15.02,20.43c1.7,-1.57 3.39,-4.01 4.47,-6l4.22,2.11c-1.2,2.03 -2.73,4.55 -4.34,6.29l-4.35,-2.4zm8.57,-29.9l-8.23,0l0,-4.26l8.23,0l0,-2.28l5.01,0l0,2.28l10.42,0l0,-2.28l5.01,0l0,2.28l8.15,0l0,4.26l-8.15,0l0,2.15l-5.01,0l0,-2.15l-10.42,0l0,2.15l-5.01,0l0,-2.15zm-2.57,19.85l24.53,0l0,4.1l-24.53,0l0,-4.1zm28.71,-9.8c-1.86,1.45 -3.85,2.81 -5.59,3.81c2.52,1.24 5.46,2.19 8.48,2.77c-1.03,0.95 -2.4,2.9 -3.1,4.14c-5.29,-1.41 -10.05,-4.14 -13.44,-7.82l0,1.99c0,2.03 -0.33,2.94 -1.78,3.52c-1.32,0.54 -3.14,0.58 -5.46,0.58c-0.25,-1.2 -0.87,-2.69 -1.41,-3.76c1.37,0.08 2.85,0.08 3.27,0.08c0.46,-0.04 0.62,-0.12 0.62,-0.58l0,-5.83c1.41,-0.62 2.85,-1.45 4.26,-2.32l-14.23,0l0,-3.72l19.28,0l0.99,-0.25l2.98,2.52c-1.9,1.49 -4.18,3.06 -6.58,4.38c0.7,0.79 1.57,1.53 2.52,2.23c1.78,-1.28 3.97,-3.06 5.25,-4.38l3.94,2.64zm-19.11,14.89c0.7,1.99 1.24,4.63 1.28,6.29l-4.88,0.75c0.04,-1.66 -0.37,-4.34 -0.95,-6.41l4.55,-0.63zm8.65,-0.54c1.16,1.86 2.27,4.3 2.61,6l-4.51,1.41c-0.29,-1.65 -1.28,-4.22 -2.36,-6.12l4.26,-1.29zm8.39,-0.54c1.86,1.82 4.05,4.38 5.09,6.21l-4.43,2.07c-0.91,-1.78 -2.98,-4.47 -4.8,-6.37l4.14,-1.91z",
                  }),
                  (0, s.jsx)("path", {
                    id: "svg_9",
                    d: "m110.14999,23.78667c-1.57,-1.12 -4.84,-2.9 -7.16,-4.09l2.61,-3.64c2.23,0.91 5.58,2.56 7.32,3.64l-2.77,4.09zm-5.79,15.14c2.03,-3.06 4.92,-8.07 7.16,-12.74l3.72,3.19c-1.94,4.22 -4.34,8.81 -6.58,12.74l-4.3,-3.19zm8.02,-26.02c-1.49,-1.28 -4.67,-3.14 -6.95,-4.38l2.73,-3.56c2.23,1.03 5.46,2.73 7.07,3.93l-2.85,4.01zm7.62,2.15c-0.91,1.32 -1.86,2.48 -2.81,3.52c-0.91,-0.87 -2.85,-2.36 -3.93,-3.02c2.98,-2.69 5.63,-6.99 7.07,-11.34l4.72,1.28c-0.41,0.99 -0.83,2.03 -1.32,3.06l18.08,0l0,4.22l-20.31,0c-0.46,0.74 -0.91,1.45 -1.41,2.15l17.95,0l0,3.97l-18.04,0l0,-3.84zm17.33,6.17c-0.08,10.05 -0.04,17.13 1.41,17.13c0.5,0 0.66,-2.23 0.7,-5.29c0.83,1.08 1.99,2.32 2.9,3.06c-0.33,4.67 -1.12,6.83 -3.97,6.87c-4.96,-0.04 -5.63,-6.87 -5.79,-17.5l-16.59,0l0,-4.3l19.28,0l0,0.04l2.06,0l0,-0.01z",
                  }),
                  (0, s.jsx)("path", {
                    id: "svg_10",
                    d: "m182.70999,29.24667l-16.26,0l0,13.65l-5.13,0l0,-13.65l-16.09,0l0,-5.01l16.09,0l0,-12.53l-13.94,0l0,-4.88l32.93,0l0,4.88l-13.86,0l0,12.53l16.26,0l0,5.01zm-28.3,-16.21c1.37,2.65 2.85,6.12 3.31,8.44l-4.8,1.49c-0.41,-2.19 -1.7,-5.83 -3.02,-8.6l4.51,-1.33zm15.35,8.6c1.32,-2.4 2.81,-6.04 3.6,-8.73l5.25,1.32c-1.49,3.19 -3.19,6.54 -4.55,8.65l-4.3,-1.24z",
                  }),
                  (0, s.jsx)("path", {
                    id: "svg_11",
                    d: "m212.48999,8.06667c3.81,3.56 8.73,8.65 10.88,12.12l-4.18,3.02c-0.54,-0.91 -1.28,-1.99 -2.15,-3.14c-21.97,1.08 -24.9,1.16 -27.09,1.9c-0.25,-0.99 -1.03,-3.43 -1.61,-4.72c1.08,-0.29 2.07,-1.08 3.43,-2.4c1.45,-1.28 5.96,-6.29 8.77,-11.25l4.96,2.11c-2.61,3.85 -5.87,7.53 -9.02,10.55l16.96,-0.54c-1.61,-1.82 -3.27,-3.56 -4.8,-5.09l3.85,-2.56zm-21.18,16.63l27.88,0l0,18.12l-5.29,0l0,-2.07l-17.54,0l0,2.11l-5.05,0l0,-18.16zm5.04,4.72l0,6.62l17.54,0l0,-6.62l-17.54,0z",
                  }),
                ],
              }),
              (0, s.jsxs)("g", {
                id: "svg_12",
                children: [
                  (0, s.jsx)("path", {
                    id: "svg_13",
                    d: "m224.05999,2.64667l-1.2,0l0,-0.43l2.92,0l0,0.43l-1.21,0l0,3.52l-0.52,0l0,-3.52l0.01,0z",
                  }),
                  (0, s.jsx)("path", {
                    id: "svg_14",
                    d: "m229.54999,4.42667c-0.03,-0.55 -0.06,-1.21 -0.06,-1.71l-0.02,0c-0.13,0.46 -0.3,0.96 -0.5,1.5l-0.7,1.92l-0.39,0l-0.64,-1.88c-0.19,-0.56 -0.35,-1.07 -0.46,-1.54l-0.01,0c-0.01,0.49 -0.04,1.15 -0.08,1.75l-0.11,1.69l-0.49,0l0.28,-3.95l0.65,0l0.67,1.91c0.16,0.49 0.3,0.92 0.4,1.33l0.02,0c0.1,-0.4 0.24,-0.83 0.42,-1.33l0.7,-1.91l0.65,0l0.25,3.95l-0.5,0l-0.08,-1.73z",
                  }),
                ],
              }),
            ],
          });
        }
        function ei() {
          return (0, s.jsx)(Ke, {
            alignItems: "center",
            justifyContent: "center",
            children: (0, s.jsx)(q.t, {}),
          });
        }
        function ti(o) {
          const t = (0, D.useRef)(o);
          t.current = o;
          const [m, g] = (0, D.useState)(!0),
            h = (0, P.zy)();
          return (
            (0, D.useEffect)(() => {
              if (new URLSearchParams(h.search).get("need_password")) {
                g(!1);
                return;
              }
              if (!t.current) {
                g(!1);
                return;
              }
              ii(t.current)
                .then((B) => {
                  g(B);
                })
                .catch((B) => {
                  (0, lr.tH)("PerformRefresh exception", B), g(!1);
                });
            }, [t, h.search]),
            m
          );
        }
        async function ii(o) {
          const t = new FormData();
          t.append("redir", o);
          const m = `${X.TS.LOGIN_BASE_URL}jwt/ajaxrefresh`,
            g = await de().post(m, t, { timeout: 1e4, withCredentials: !0 });
          if (g.status !== 200 || !g?.data?.success) return !1;
          const { success: h, login_url: p, error: B, ...z } = g.data,
            A = new FormData();
          Object.entries(z).forEach(([wr, ge]) => A.append(wr, ge));
          const _ = await de().post(p, A),
            rr = _.status === 200 && _.data.result === l.R;
          return rr && window.location.assign(o), rr;
        }
        function si() {
          const o = (0, D.useRef)(!0);
          return (
            (0, D.useEffect)(
              () => () => {
                o.current = !1;
              },
              [o],
            ),
            (0, D.useCallback)(() => o.current, [o])
          );
        }
      },
      88656: (se, Be, b) => {
        "use strict";
        b.d(Be, { A: () => ir });
        var s = b(7850),
          ae = b(90626),
          M = b(75844),
          l = b(54963),
          e = b(24660),
          br = b(19298),
          de = b(16346),
          D = b(38655),
          P = b(18210),
          oe = b(36707),
          zr = b(90024),
          lr = b.n(zr),
          Ir = b(36118),
          Vr = b(249),
          cr = b(3166);
        function Ur() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Settings, {})
            : jsx(SVG.Settings, {});
        }
        function Tr(W) {
          const U = W.filled ?? !0;
          return useInGamepadUI()
            ? U
              ? jsx(GamepadSVG.Star, {})
              : jsx(GamepadSVG.EmptyStar, {})
            : jsx(SVG.Star, {});
        }
        function V(W) {
          const U = W.filled ?? !0;
          return useInGamepadUI()
            ? U
              ? jsx(GamepadSVG.Heart, {})
              : jsx(GamepadSVG.HeartEmpty, {})
            : jsx(SVG.Heart, {});
        }
        function jr() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.ControllerStatus, {})
            : jsx(SVG.BigPicture, {});
        }
        function fr(W) {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Checkmark, { ...W })
            : jsx(SVG.Check, { ...W });
        }
        function vr() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Carat, { direction: "down" })
            : jsx(SVG.FlatArrow, { angle: 180 });
        }
        function Pr() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Information, {})
            : jsx(SVG.Information, {});
        }
        function F(W) {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Lock, {})
            : jsx(SVG.Lock, {});
        }
        function q() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Download, {})
            : jsx(SVG.Download, {});
        }
        function K() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Play, {})
            : jsx(SVG.Play, {});
        }
        function v(W) {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Achievement, {})
            : jsx(SVG.AwardIcon, {});
        }
        function T(W) {
          return useInGamepadUI()
            ? jsx(GamepadSVG.ThumbsUp, {})
            : jsx(SVG.ThumbsUpUserNews, { className: W.className });
        }
        function X(W) {
          return useInGamepadUI()
            ? jsx(GamepadSVG.ThumbsDown, {})
            : jsx(SVG.ThumbsUpUserNews, { className: W.className });
        }
        function J(W) {
          return useInGamepadUI()
            ? jsx(GamepadSVG.CommentThread, { className: W.className })
            : jsx(SVG.CommentThread, { className: W.className });
        }
        function Me() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Pause, {})
            : jsx(SVG.Pause, {});
        }
        function Oe() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Reload, {})
            : jsx(SVG.Reload, {});
        }
        function kr() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Update, {})
            : jsx(SVG.Update, {});
        }
        function pe() {
          return jsx(GamepadSVG.Globe, {});
        }
        function be() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Close, {})
            : jsx(SVG.X_Line, {});
        }
        function Ve() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Trash, {})
            : jsx(SVG.Trash, {});
        }
        function gr() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Dynamic, {})
            : jsx(SVG.DynamicCollection, {});
        }
        function G() {
          return jsx(GamepadSVG.Add, {});
        }
        function d() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Edit, {})
            : jsx(SVG.Edit, {});
        }
        function Ge() {
          return jsx(SVG.MobilePhone, {});
        }
        function Qe() {
          return (0, cr.Qn)() ? (0, s.jsx)(Vr.nl, {}) : (0, s.jsx)(Ir.jZW, {});
        }
        var Hr = b(71421),
          Dr = Object.defineProperty,
          hr = Object.getOwnPropertyDescriptor,
          Er = (W, U, Y, $) => {
            for (
              var sr = $ > 1 ? void 0 : $ ? hr(U, Y) : U, k = W.length - 1, C;
              k >= 0;
              k--
            )
              (C = W[k]) && (sr = ($ ? C(U, Y, sr) : C(sr)) || sr);
            return $ && sr && Dr(U, Y, sr), sr;
          };
        const tr = 1576780700;
        let nr = class extends ae.Component {
          OnEmoticonClick(W) {
            const {
                emoticonStore: U,
                strFlairGroupID: Y,
                SetUIDisplayPref: $,
                contextOptions: sr,
                bShowChatAddons: k,
              } = this.props,
              {
                roomEffectSettings: C,
                onRoomEffectSelected: or,
                onStickerSelected: mr,
              } = this.props;
            let dr = null;
            if (
              (k && C && or && mr
                ? (dr = (0, s.jsx)(D.Q4, {
                    emoticonStore: this.props.emoticonStore,
                    strFlairGroupID: this.props.strFlairGroupID,
                    onEmoticonSelected: (Br) =>
                      this.props.OnEmoticonSelected(Br, !1),
                    roomEffectSettings: C,
                    onRoomEffectSelected: or,
                    onStickerSelected: mr,
                  }))
                : Y && U.flair_list && U.GetFlairListByGroupID(Y)?.length > 0
                  ? (dr = (0, s.jsx)(D.CE, {
                      emoticonStore: this.props.emoticonStore,
                      strFlairGroupID: this.props.strFlairGroupID,
                      OnSelected: this.props.OnEmoticonSelected,
                    }))
                  : (dr = (0, s.jsx)(D.iY, {
                      emoticonStore: this.props.emoticonStore,
                      strFlairGroupID: this.props.strFlairGroupID,
                      OnSelected: this.props.OnEmoticonSelected,
                    })),
              (0, de.lX)(
                dr,
                W,
                sr || {
                  bOverlapHorizontal: !0,
                  bPreferPopLeft: !0,
                  bPreferPopTop: !0,
                },
              ),
              this.BHaveUnseenEmoticons() && $)
            ) {
              let Br = this.GetNewestIndicatorTime();
              (!Br || Br < tr) && (Br = tr), $("rtLastAckedNewEmoticons", Br);
            }
          }
          GetNewestIndicatorTime() {
            let W = this.props.emoticonStore,
              U = Number.MIN_SAFE_INTEGER,
              Y = W.GetTimeReceivedNewestEmoticon();
            Y && (U = Y);
            let $ = W.GetTimeReceivedForStickerOrEffect();
            return (
              (U = Math.max($, U)), U > Number.MIN_SAFE_INTEGER ? U : void 0
            );
          }
          BHaveUnseenEmoticons() {
            const { rtLastAckedNewEmoticons: W } = this.props;
            let U = this.GetNewestIndicatorTime();
            return !W || W < tr ? !0 : U && (!W || W < U);
          }
          render() {
            const {
              disabled: W,
              className: U,
              ttip: Y,
              useImg: $,
            } = this.props;
            let sr = [U],
              k = !1;
            return (
              W ? sr.push("disabled") : this.BHaveUnseenEmoticons() && (k = !0),
              Y && sr.push("ttip"),
              $
                ? (0, s.jsx)(br.Z, {
                    onClick: this.OnEmoticonClick,
                    onOKActionDescription: (0, P.we)(
                      "#ChatEntryButton_Emoticon",
                    ),
                    focusable: !0,
                    children: (0, s.jsx)(Hr.he, {
                      toolTipContent: Y,
                      children: (0, s.jsx)("img", {
                        src: this.props.useImg,
                        className: (0, oe.A)(...sr),
                        title:
                          this.props.title ||
                          (0, P.we)("#ChatEntryButton_Emoticon"),
                      }),
                    }),
                  })
                : (sr.push(lr().chatSubmitButton, lr().EmoticonPickerButton),
                  (0, s.jsx)(e.fu, {
                    className: (0, oe.A)(...sr),
                    onOKActionDescription: (0, P.we)(
                      "#ChatEntryButton_Emoticon",
                    ),
                    type: "button",
                    onClick: this.OnEmoticonClick,
                    title:
                      this.props.title ||
                      (0, P.we)("#ChatEntryButton_Emoticon"),
                    disabled: W,
                    children: (0, s.jsxs)(Hr.he, {
                      toolTipContent: Y,
                      children: [
                        this.props.buttonIcon || (0, s.jsx)(Qe, {}),
                        k && (0, s.jsx)(D.iD, {}),
                      ],
                    }),
                  }))
            );
          }
        };
        Er([l.oI], nr.prototype, "OnEmoticonClick", 1), (nr = Er([M.PA], nr));
        const ir = nr;
      },
      38655: (se, Be, b) => {
        "use strict";
        b.d(Be, { Q4: () => d, iY: () => Qe, CE: () => Hr, iD: () => C });
        var s = b(7850),
          ae = b(14947),
          M = b(75844),
          l = b(90626),
          e = b(76842),
          br = b(84676),
          de = b(99047),
          D = b(36707),
          P = b(18210);
        function oe(u, y, O = !1) {
          return `${u}economy/sticker${O ? "static" : ""}/${encodeURIComponent(y)}`;
        }
        var zr = b(3166),
          lr = b(58534),
          Ir = b(19298),
          Vr = b(64415),
          cr = b(19418);
        class Ur extends l.Component {
          constructor(y) {
            super(y), (this.state = { activeIndex: y.initialActiveIndex || 0 });
          }
          render() {
            const { config: y } = this.props,
              { activeIndex: O } = this.state,
              I = y[O],
              E = I ? I.renderContent() : null,
              L = y.length > 1,
              Z = L
                ? ({ detail: { button: R } }) => {
                    R === Vr.pR.BUMPER_LEFT
                      ? this.setState({
                          activeIndex: Math.max(0, this.state.activeIndex - 1),
                        })
                      : R === Vr.pR.BUMPER_RIGHT &&
                        this.setState({
                          activeIndex: Math.min(
                            y.length - 1,
                            this.state.activeIndex + 1,
                          ),
                        });
                  }
                : void 0;
            return (0, s.jsxs)(Ir.Z, {
              className: cr.Picker,
              onButtonDown: Z,
              children: [
                L && (0, s.jsx)(Tr, { children: this.RenderTabs() }),
                E,
              ],
            });
          }
          RenderTabs() {
            return this.props.config.map(({ renderTab: y }, O) => {
              const I = this.state.activeIndex === O;
              return (0, s.jsx)(
                jr,
                {
                  active: I,
                  onClick: () => this.setState({ activeIndex: O }),
                  children: y(I),
                },
                O,
              );
            });
          }
        }
        function Tr(u) {
          return (0, s.jsx)(Ir.Z, {
            className: cr.Tabs,
            "flow-children": "row",
            children: u.children,
          });
        }
        function V(u) {
          return (0, s.jsx)("div", {
            className: cr.Content,
            children: u.children,
          });
        }
        function jr(u) {
          const { active: y, children: O, onClick: I } = u;
          return (0, s.jsx)(Ir.Z, {
            className: (0, D.A)(cr.Tab, y && cr.Active),
            focusClassName: cr.Focus,
            onActivate: I,
            children: (0, s.jsx)("div", {
              className: (0, D.A)(cr.TabContent, y && cr.Active),
              children: O,
            }),
          });
        }
        function fr(u) {
          const {
            items: y,
            renderItem: O,
            onItemSelect: I,
            keyExtractor: E,
            renderEmpty: L,
          } = u;
          let Z = y.map((R, ar) =>
            (0, s.jsx)(
              Ir.Z,
              {
                className: cr.Item,
                onActivate: () => I(y[ar]),
                autoFocus: ar === 0,
                focusClassName: cr.Focus,
                children: O(y[ar]),
              },
              E(R),
            ),
          );
          return (
            y.length === 0 && L && (Z = L()),
            (0, s.jsx)(Ir.Z, {
              "flow-children": "grid",
              className: cr.ItemList,
              children: Z,
            })
          );
        }
        function vr(u) {
          const {
            title: y,
            onFilterChange: O,
            filter: I,
            onSubmit: E,
            ...L
          } = u;
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(V, {
                children: (0, s.jsx)(F, {
                  title: y,
                  children: (0, s.jsx)(fr, { ...L }),
                }),
              }),
              (0, s.jsx)(q, { value: I, onChange: O, onSubmit: E }),
            ],
          });
        }
        function Pr(u) {
          const { onFilterChange: y, filter: O, sections: I, title: E } = u;
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsxs)(V, {
                children: [
                  E &&
                    (0, s.jsx)("div", {
                      className: cr.SectionedPageTitle,
                      children: E,
                    }),
                  I.map(({ title: L, ...Z }) =>
                    (0, s.jsx)(
                      F,
                      { title: L, children: (0, s.jsx)(fr, { ...Z }) },
                      L,
                    ),
                  ),
                ],
              }),
              (0, s.jsx)(q, { value: O, onChange: y }),
            ],
          });
        }
        function F(u) {
          return (0, s.jsxs)("div", {
            className: cr.Section,
            children: [
              (0, s.jsx)("div", {
                className: cr.SectionTitle,
                children: u.title,
              }),
              (0, s.jsx)("div", {
                className: cr.SectionContent,
                children: u.children,
              }),
            ],
          });
        }
        function q(u) {
          const { value: y, onChange: O, onSubmit: I } = u;
          return (0, s.jsx)("div", {
            className: cr.FilterInputContainer,
            children: (0, s.jsx)(lr.pd, {
              type: "text",
              placeholder: (0, P.we)("#AddonPicker_Search"),
              className: cr.FilterInput,
              value: y,
              onChange: (E) => O(E.target.value),
              onSubmit: I,
            }),
          });
        }
        function K(u) {
          const { className: y, ...O } = u;
          return (0, s.jsx)("div", {
            className: (0, D.A)(y, cr.AddonPickerMessage),
            ...O,
          });
        }
        var v = b(42060),
          T = b.n(v),
          X = b(53107),
          J = b(96197),
          Me = Object.defineProperty,
          Oe = Object.getOwnPropertyDescriptor,
          kr = (u, y, O, I) => {
            for (
              var E = I > 1 ? void 0 : I ? Oe(y, O) : y, L = u.length - 1, Z;
              L >= 0;
              L--
            )
              (Z = u[L]) && (E = (I ? Z(y, O, E) : Z(E)) || E);
            return I && E && Me(y, O, E), E;
          };
        const pe = 1e3;
        function be(u) {
          return u.recent_emoticons;
        }
        function Ve(u) {
          return u.recent_stickers;
        }
        function gr(u) {
          return be(u).length + Ve(u).length > 0;
        }
        function G(u) {
          const [y, O] = (0, l.useState)(u.is_initialized);
          return (
            (0, l.useEffect)(() => {
              if (!u.is_initialized) {
                u.UpdateEmoticonList();
                const I = (0, ae.z7)(
                  () => u.is_initialized,
                  () => O(u.is_initialized),
                );
                return () => I();
              }
              return () => {};
            }, [u]),
            y
          );
        }
        const d = (0, M.PA)((u) => {
          const {
            emoticonStore: y,
            roomEffectSettings: O,
            strFlairGroupID: I,
            onEmoticonSelected: E,
            onRoomEffectSelected: L,
            onStickerSelected: Z,
          } = u;
          G(y);
          const R = [];
          return (
            gr(y) &&
              R.push({
                renderTab: (ar) =>
                  (0, s.jsx)("span", {
                    title: (0, P.we)("#AddonPicker_RecentlyUsed"),
                    className: (0, D.A)(
                      T().PickerTab,
                      T().Clock,
                      ar && T().ActiveTab,
                    ),
                    children: (0, s.jsx)(Se, {}),
                  }),
                renderContent: () =>
                  (0, s.jsx)(Dr, {
                    store: y,
                    onEmoticonSelect: (ar) => E(ar.name),
                    onStickerSelect: (ar) => Z(ar.name),
                    flairGroupID: I,
                  }),
              }),
            (0, s.jsx)(de.tz, {
              children: (0, s.jsx)(Ur, {
                config: [
                  ...R,
                  {
                    renderTab: (ar) =>
                      (0, s.jsx)("span", {
                        title: (0, P.we)("#AddonPicker_Emoticons"),
                        className: (0, D.A)(T().PickerTab, ar && T().ActiveTab),
                        children: (0, s.jsx)(Br, {}),
                      }),
                    renderContent: () =>
                      (0, s.jsx)(hr, {
                        store: y,
                        onItemSelect: (ar) => E(ar.name),
                        flairGroupID: I,
                      }),
                  },
                  {
                    renderTab: (ar) =>
                      (0, s.jsx)("span", {
                        title: (0, P.we)("#AddonPicker_Stickers"),
                        className: (0, D.A)(T().PickerTab, ar && T().ActiveTab),
                        children: (0, s.jsx)(mr, {}),
                      }),
                    renderContent: () =>
                      (0, s.jsx)(tr, {
                        store: y,
                        onItemSelect: (ar) => Z(ar.name),
                      }),
                  },
                  {
                    renderTab: (ar) =>
                      (0, s.jsx)("span", {
                        title: (0, P.we)("#AddonPicker_RoomEffects"),
                        className: (0, D.A)(T().PickerTab, ar && T().ActiveTab),
                        children: (0, s.jsx)($r, {}),
                      }),
                    renderContent: () =>
                      (0, s.jsx)(nr, {
                        store: y,
                        effectSettings: O,
                        onItemSelect: (ar) => L(ar.name),
                      }),
                  },
                ],
              }),
            })
          );
        });
        let Ge = class extends l.Component {
          m_disposeEmoticonStore;
          constructor(u) {
            super(u), (this.state = { strSearchText: "" });
            let y = this.props.emoticonStore;
            y.is_initialized ||
              (y.UpdateEmoticonList(),
              (this.m_disposeEmoticonStore = (0, ae.z7)(
                () => y.is_initialized,
                () => this.forceUpdate(),
              )));
          }
          componentWillUnmount() {
            this.m_disposeEmoticonStore && this.m_disposeEmoticonStore();
          }
          render() {
            const {
                emoticonStore: u,
                onEmoticonSelected: y,
                onStickerSelected: O,
                strFlairGroupID: I,
              } = this.props,
              E = [];
            return (
              gr(u) &&
                E.push({
                  renderTab: (L) =>
                    (0, s.jsx)("span", {
                      title: (0, P.we)("#AddonPicker_RecentlyUsed"),
                      className: (0, D.A)(
                        T().PickerTab,
                        T().Clock,
                        L && T().ActiveTab,
                      ),
                      children: (0, s.jsx)(Se, {}),
                    }),
                  renderContent: () =>
                    (0, s.jsx)(Dr, {
                      store: u,
                      onEmoticonSelect: (L) => y(L.name),
                      onStickerSelect: (L) => O(L.name),
                      flairGroupID: I,
                    }),
                }),
              (0, s.jsx)(de.tz, {
                children: (0, s.jsx)(Ur, {
                  config: [
                    ...E,
                    {
                      renderTab: (L) =>
                        (0, s.jsx)("span", {
                          title: (0, P.we)("#AddonPicker_Emoticons"),
                          className: (0, D.A)(
                            T().PickerTab,
                            L && T().ActiveTab,
                          ),
                          children: (0, s.jsx)(Br, {}),
                        }),
                      renderContent: () =>
                        (0, s.jsx)(hr, {
                          store: u,
                          onItemSelect: (L) => y(L.name),
                          flairGroupID: I,
                        }),
                    },
                    {
                      renderTab: (L) =>
                        (0, s.jsx)("span", {
                          title: (0, P.we)("#AddonPicker_Stickers"),
                          className: (0, D.A)(
                            T().PickerTab,
                            L && T().ActiveTab,
                          ),
                          children: (0, s.jsx)(mr, {}),
                        }),
                      renderContent: () =>
                        (0, s.jsx)(tr, {
                          store: u,
                          onItemSelect: (L) => O(L.name),
                        }),
                    },
                  ],
                }),
              })
            );
          }
        };
        Ge = kr([M.PA], Ge);
        class Qe extends l.Component {
          m_disposeEmoticonStore;
          constructor(y) {
            super(y), (this.state = { strSearchText: "" });
            let O = this.props.emoticonStore;
            O.is_initialized ||
              (O.UpdateEmoticonList(),
              (this.m_disposeEmoticonStore = (0, ae.z7)(
                () => O.is_initialized,
                () => this.forceUpdate(),
              )));
          }
          componentWillUnmount() {
            this.m_disposeEmoticonStore && this.m_disposeEmoticonStore();
          }
          render() {
            return (0, s.jsx)(de.tz, {
              children: (0, s.jsx)(Ur, {
                config: [
                  {
                    renderTab: () =>
                      (0, s.jsx)("span", {
                        title: (0, P.we)("#AddonPicker_Emoticons"),
                        className: T().PickerTab,
                        children: (0, s.jsx)(Br, {}),
                      }),
                    renderContent: () =>
                      (0, s.jsx)(ir, {
                        store: this.props.emoticonStore,
                        onItemSelect: (y) => this.props.OnSelected(y.name, !1),
                        flairGroupID: this.props.strFlairGroupID,
                      }),
                  },
                ],
              }),
            });
          }
        }
        class Hr extends l.Component {
          m_disposeEmoticonStore;
          constructor(y) {
            super(y), (this.state = { strSearchText: "" });
            let O = this.props.emoticonStore;
            O.is_initialized ||
              (O.UpdateEmoticonList(),
              (this.m_disposeEmoticonStore = (0, ae.z7)(
                () => O.is_initialized,
                () => this.forceUpdate(),
              )));
          }
          componentWillUnmount() {
            this.m_disposeEmoticonStore && this.m_disposeEmoticonStore();
          }
          render() {
            return (0, s.jsx)(de.tz, {
              children: (0, s.jsx)(Ur, {
                config: [
                  {
                    renderTab: () =>
                      (0, s.jsx)("span", {
                        title: (0, P.we)("#AddonPicker_Emoticons"),
                        className: T().PickerTab,
                        children: (0, s.jsx)(Br, {}),
                      }),
                    renderContent: () =>
                      (0, s.jsx)(W, {
                        store: this.props.emoticonStore,
                        onItemSelect: (y) => this.props.OnSelected(y.name, !1),
                        flairGroupID: this.props.strFlairGroupID,
                      }),
                  },
                ],
              }),
            });
          }
        }
        class Dr extends l.Component {
          state = { filter: "" };
          render() {
            const {
                store: y,
                onEmoticonSelect: O,
                onStickerSelect: I,
              } = this.props,
              { filter: E } = this.state,
              L = [];
            return (
              be(y) &&
                L.push({
                  title: (0, P.we)("#AddonPicker_RecentEmoticons"),
                  items: e.pN.FilterEmoticons(be(y), E),
                  onItemSelect: O,
                  renderItem: (Z) => (0, s.jsx)(U, { emoticon: Z }),
                  keyExtractor: (Z) => Z.name,
                  renderEmpty: () =>
                    (0, s.jsx)(K, {
                      children: E
                        ? (0, P.we)("#AddonPicker_NoResults")
                        : (0, P.we)(
                            "#AddonPicker_NoRecent",
                            (0, P.we)("#AddonPicker_Emoticons"),
                          ),
                    }),
                }),
              Ve(y).length &&
                L.push({
                  title: (0, P.we)("#AddonPicker_RecentStickers"),
                  items: e.pN.FilterStickers(Ve(y), E),
                  onItemSelect: I,
                  renderItem: (Z) => (0, s.jsx)(Y, { sticker: Z }),
                  keyExtractor: ({ name: Z }) => Z,
                  renderEmpty: () =>
                    (0, s.jsx)(K, {
                      children: E
                        ? (0, P.we)("#AddonPicker_NoResults")
                        : (0, P.we)(
                            "#AddonPicker_NoRecent",
                            (0, P.we)("#AddonPicker_Stickers"),
                          ),
                    }),
                }),
              (0, s.jsx)(Pr, {
                onFilterChange: (Z) => this.setState({ filter: Z }),
                filter: E,
                sections: L,
              })
            );
          }
        }
        class hr extends l.Component {
          state = { filter: "" };
          render() {
            const { store: y, onItemSelect: O, flairGroupID: I } = this.props,
              { filter: E } = this.state,
              L = !E && I ? y.GetFlairListByGroupID(I) : y.emoticon_list,
              Z = e.pN.FilterEmoticons(L, E).slice(0, pe);
            return (0, s.jsx)(vr, {
              title: (0, P.we)("#AddonPicker_Emoticons"),
              items: Z,
              onItemSelect: O,
              renderItem: (R) => (0, s.jsx)(U, { emoticon: R }),
              keyExtractor: (R) => R.name,
              onFilterChange: (R) => this.setState({ filter: R }),
              filter: E,
              onSubmit: () => O(Z[0]),
              renderEmpty: () =>
                E
                  ? (0, s.jsx)(K, {
                      children: (0, P.we)("#AddonPicker_NoResults"),
                    })
                  : (0, s.jsx)(Er, {}),
            });
          }
        }
        function Er() {
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(K, {
                children: (0, P.we)(
                  "#AddonPicker_NoneOwned",
                  (0, P.we)("#AddonPicker_Emoticons"),
                ),
              }),
              (0, s.jsx)(K, {
                children: (0, P.PP)(
                  "#AddonPicker_AcquireAtPointsShopOrMarket",
                  (0, s.jsx)(X.uU, {
                    href: `${zr.TS.STORE_BASE_URL}points/shop/c/emoticons`,
                    children: (0, P.we)(
                      "#AddonPicker_AcquireAtPointsShop_Link",
                    ),
                  }),
                  (0, s.jsx)(X.uU, {
                    href: `${zr.TS.COMMUNITY_BASE_URL}market`,
                    children: (0, P.we)(
                      "#AddonPicker_AcquireAtPointsShopOrMarket_Link",
                    ),
                  }),
                ),
              }),
            ],
          });
        }
        class tr extends l.Component {
          state = { filter: "" };
          render() {
            const { store: y, onItemSelect: O } = this.props,
              { filter: I } = this.state,
              E = e.pN.FilterStickers(y.GetStickerList(), I),
              L = () =>
                I
                  ? (0, s.jsx)(K, {
                      children: (0, P.we)("#AddonPicker_NoResults"),
                    })
                  : (0, s.jsxs)(s.Fragment, {
                      children: [
                        (0, s.jsx)(K, {
                          children: (0, P.we)(
                            "#AddonPicker_NoneOwned",
                            (0, P.we)("#AddonPicker_Stickers"),
                          ),
                        }),
                        (0, s.jsx)(K, {
                          children: (0, P.PP)(
                            "#AddonPicker_AcquireAtPointsShop",
                            (0, s.jsx)(X.uU, {
                              href: `${zr.TS.STORE_BASE_URL}points/shop/c/stickers`,
                              children: (0, P.we)(
                                "#AddonPicker_AcquireAtPointsShop_Link",
                              ),
                            }),
                          ),
                        }),
                      ],
                    });
            return (0, s.jsx)(vr, {
              title: (0, P.we)("#EmoticonPicker_StickerHeading"),
              items: E,
              onItemSelect: O,
              renderItem: (Z) => (0, s.jsx)(Y, { sticker: Z }),
              keyExtractor: ({ name: Z }) => Z,
              onFilterChange: (Z) => this.setState({ filter: Z }),
              filter: I,
              onSubmit: () => O(E[0]),
              renderEmpty: L,
            });
          }
        }
        class nr extends l.Component {
          state = { filter: "" };
          render() {
            const { store: y, effectSettings: O, onItemSelect: I } = this.props,
              { filter: E } = this.state,
              L = y.GetEffectList().filter(({ name: R }) => R.indexOf(E) > -1),
              Z = () =>
                E
                  ? (0, s.jsx)(K, {
                      children: (0, P.we)("#AddonPicker_NoResults"),
                    })
                  : (0, s.jsxs)(s.Fragment, {
                      children: [
                        (0, s.jsx)(K, {
                          children: (0, P.we)(
                            "#AddonPicker_NoneOwned",
                            (0, P.we)("#AddonPicker_RoomEffects"),
                          ),
                        }),
                        (0, s.jsx)(K, {
                          children: (0, P.PP)(
                            "#AddonPicker_AcquireAtPointsShop",
                            (0, s.jsx)(X.uU, {
                              href: `${zr.TS.STORE_BASE_URL}points/shop/c/chateffects`,
                              children: (0, P.we)(
                                "#AddonPicker_AcquireAtPointsShop_Link",
                              ),
                            }),
                          ),
                        }),
                      ],
                    });
            return (0, s.jsx)(vr, {
              title: (0, P.we)("#EmoticonPicker_EffectHeading"),
              items: L,
              onItemSelect: I,
              renderItem: (R) =>
                (0, s.jsx)(sr, { effect: R, roomEffectSettings: O }),
              keyExtractor: ({ name: R }) => R,
              onFilterChange: (R) => this.setState({ filter: R }),
              filter: E,
              onSubmit: () => I(L[0]),
              renderEmpty: Z,
            });
          }
        }
        let ir = class extends l.Component {
          state = { filter: "" };
          render() {
            const { store: u, onItemSelect: y, flairGroupID: O } = this.props,
              { filter: I } = this.state,
              E = [];
            return (
              be(u).length &&
                E.push({
                  title: (0, P.we)("#AddonPicker_RecentEmoticons"),
                  items: e.pN.FilterEmoticons(be(u), I),
                  onItemSelect: y,
                  renderItem: (L) => (0, s.jsx)(U, { emoticon: L }),
                  keyExtractor: (L) => L.name,
                  renderEmpty: () =>
                    (0, s.jsx)(K, {
                      children: I
                        ? (0, P.we)("#AddonPicker_NoResults")
                        : (0, P.we)(
                            "#AddonPicker_NoRecent",
                            (0, P.we)("#AddonPicker_Emoticons"),
                          ),
                    }),
                }),
              (0, s.jsx)(Pr, {
                onFilterChange: (L) => this.setState({ filter: L }),
                filter: I,
                sections: [
                  ...E,
                  {
                    title: (0, P.we)("#AddonPicker_AllEmoticons"),
                    items: e.pN.FilterStickers(u.emoticon_list, I).slice(0, pe),
                    onItemSelect: y,
                    renderItem: (L) => (0, s.jsx)(U, { emoticon: L }),
                    keyExtractor: (L) => L.name,
                    renderEmpty: () =>
                      I
                        ? (0, s.jsx)(K, {
                            children: (0, P.we)("#AddonPicker_NoResults"),
                          })
                        : (0, s.jsx)(Er, {}),
                  },
                ],
              })
            );
          }
        };
        ir = kr([M.PA], ir);
        let W = class extends l.Component {
          state = { filter: "" };
          render() {
            const { store: u, onItemSelect: y, flairGroupID: O } = this.props,
              { filter: I } = this.state;
            return (0, s.jsx)(Pr, {
              onFilterChange: (E) => this.setState({ filter: E }),
              filter: I,
              sections: [
                {
                  title: (0, P.we)("#ChatEntryButton_Flair"),
                  items: e.pN.FilterStickers(u.GetFlairListByGroupID(O), I),
                  onItemSelect: y,
                  renderItem: (E) => (0, s.jsx)(U, { emoticon: E }),
                  keyExtractor: (E) => E.name,
                  renderEmpty: () =>
                    I
                      ? (0, s.jsx)(K, {
                          children: (0, P.we)("#AddonPicker_NoResults"),
                        })
                      : (0, s.jsx)(Er, {}),
                },
              ],
            });
          }
        };
        W = kr([M.PA], W);
        const U = (u) => {
          const { emoticon: y, large: O } = u,
            I = !y.last_used && y.time_received;
          return (0, s.jsxs)("div", {
            className: T().EmoticonItem,
            children: [
              (0, s.jsx)(J.n, { emoticon: y.name, large: O }),
              I && (0, s.jsx)(C, {}),
            ],
          });
        };
        class Y extends l.Component {
          state = { showHover: !1 };
          m_ref = l.createRef();
          render() {
            const { sticker: y, className: O, ...I } = this.props,
              E = oe(zr.TS.COMMUNITY_CDN_URL, y.name);
            return (0, s.jsxs)("div", {
              ref: this.m_ref,
              className: (0, D.A)(O, T().StickerButton),
              onMouseOver: () => this.setState({ showHover: !0 }),
              onFocus: () => this.setState({ showHover: !0 }),
              onMouseLeave: () => this.setState({ showHover: !1 }),
              onBlur: () => this.setState({ showHover: !1 }),
              ...I,
              children: [
                (0, s.jsx)("img", { style: { width: "100%" }, src: E }),
                this.state.showHover &&
                  this.m_ref.current &&
                  (0, s.jsx)($, { target: this.m_ref.current, sticker: y }),
              ],
            });
          }
        }
        const $ = (0, M.PA)((u) => {
          const {
              target: y,
              sticker: { name: O, appid: I },
            } = u,
            [E] = (0, br.t7)(I, {});
          return (0, s.jsx)(J.c, {
            target: y,
            title: O,
            subtitle: E?.GetName(),
            children: (0, s.jsx)("img", {
              src: oe(zr.TS.COMMUNITY_CDN_URL, O),
              className: T().StickerHoverSticker,
            }),
          });
        });
        class sr extends l.Component {
          state = { showHover: !1 };
          m_ref = l.createRef();
          render() {
            const {
                effect: y,
                roomEffectSettings: O,
                className: I,
                ...E
              } = this.props,
              L = O[y.name];
            return (0, s.jsxs)("div", {
              ref: this.m_ref,
              onMouseOver: () => this.setState({ showHover: !0 }),
              onFocus: () => this.setState({ showHover: !0 }),
              onMouseLeave: () => this.setState({ showHover: !1 }),
              onBlur: () => this.setState({ showHover: !1 }),
              className: (0, D.A)(I, T().EffectButton),
              ...E,
              children: [
                L.renderEffectIcon(),
                this.state.showHover &&
                  this.m_ref.current &&
                  (0, s.jsx)(k, {
                    target: this.m_ref.current,
                    effect: y,
                    roomEffectSettings: O,
                  }),
              ],
            });
          }
        }
        const k = (0, M.PA)((u) => {
          const {
              target: y,
              effect: { name: O, appid: I },
              roomEffectSettings: E,
            } = u,
            L = E[O],
            [Z] = (0, br.t7)(I, {});
          return (0, s.jsx)(J.c, {
            target: y,
            title: O,
            subtitle: Z?.GetName(),
            children: (0, s.jsx)("div", {
              className: T().EffectHoverEffect,
              children: L.renderEffectIcon(),
            }),
          });
        });
        function C() {
          return (0, s.jsx)("div", {
            className: T().NewEmoticonIndicator,
            children: (0, s.jsx)("div", { className: T().NewEmoticonCircle }),
          });
        }
        function or(u) {
          return useInGamepadUI()
            ? jsxs("svg", {
                viewBox: "0 0 36 36",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ...u,
                children: [
                  jsx("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M8 4C5.79086 4 4 5.79086 4 8V27C4 29.2091 5.79086 31 8 31H13V20C13 16.134 16.134 13 20 13H31V8C31 5.79086 29.2091 4 27 4H8Z",
                    fill: "currentColor",
                  }),
                  jsx("path", {
                    d: "M16 20C16 17.7909 17.7909 16 20 16H31L16 31V20Z",
                    fill: "currentColor",
                  }),
                  jsx("path", {
                    d: "M29 24.0625V25C29 25.2671 28.9738 25.5282 28.9239 25.7806L30.8858 26.1688C30.9609 25.7892 31 25.3982 31 25V24.0625H29Z",
                    fill: "currentColor",
                  }),
                  jsx("path", {
                    d: "M28.3263 27.2225C28.0342 27.6587 27.6587 28.0342 27.2225 28.3263L28.3351 29.9882C28.9885 29.5507 29.5507 28.9885 29.9882 28.3351L28.3263 27.2225Z",
                    fill: "currentColor",
                  }),
                  jsx("path", {
                    d: "M21 29H22.1875V31H19L21 29Z",
                    fill: "currentColor",
                  }),
                  jsx("path", {
                    d: "M24.0625 29H25C25.2671 29 25.5282 28.9738 25.7806 28.9239L26.1688 30.8858C25.7892 30.9609 25.3981 31 25 31H24.0625V29Z",
                    fill: "currentColor",
                  }),
                  jsx("path", {
                    d: "M29 22.1875V21L31 19V22.1875H29Z",
                    fill: "currentColor",
                  }),
                ],
              })
            : jsx("svg", {
                viewBox: "0 0 59 59",
                width: "32",
                ...u,
                children: jsx("switch", {
                  children: jsx("g", {
                    children: jsx("path", {
                      d: "M58 30.2v-.1L23.4 58.5l-.2-.3-.1.1C9.9 55.4 0 43.6 0 29.5 0 13.2 13.2 0 29.5 0S59 13.2 59 29.4l-1 .8zm0-1.5c-5-2.2-16.1-4-26 4.6-9.8 8.4-10.3 18.8-9.2 23.9C10.3 54.2 1 42.9 1 29.5 1 13.8 13.8 1 29.5 1 45 1 57.6 13.3 58 28.7zm-.8.8L23.7 56.9c-1-4.8-.5-14.8 8.9-22.9 9.4-8 19.7-6.6 24.6-4.5z",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      fill: "#fff",
                    }),
                  }),
                }),
              });
        }
        function mr(u) {
          return (0, s.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 36 36",
            fill: "none",
            ...u,
            children: [
              (0, s.jsx)("path", {
                fill: "currentColor",
                d: "M8 4C5.79086 4 4 5.79086 4 8V27C4 29.2091 5.79086 31 8 31H13V20C13 16.134 16.134 13 20 13H31V8C31 5.79086 29.2091 4 27 4H8Z",
              }),
              (0, s.jsx)("path", {
                fill: "currentColor",
                d: "M16 20C16 17.7909 17.7909 16 20 16H31L16 31V20Z",
              }),
              (0, s.jsx)("path", {
                fill: "currentColor",
                d: "M29 24.0625V25C29 25.2671 28.9738 25.5282 28.9239 25.7806L30.8858 26.1688C30.9609 25.7892 31 25.3982 31 25V24.0625H29Z",
              }),
              (0, s.jsx)("path", {
                fill: "currentColor",
                d: "M28.3263 27.2225C28.0342 27.6587 27.6587 28.0342 27.2225 28.3263L28.3351 29.9882C28.9885 29.5507 29.5507 28.9885 29.9882 28.3351L28.3263 27.2225Z",
              }),
              (0, s.jsx)("path", {
                fill: "currentColor",
                d: "M21 29H22.1875V31H19L21 29Z",
              }),
              (0, s.jsx)("path", {
                fill: "currentColor",
                d: "M24.0625 29H25C25.2671 29 25.5282 28.9738 25.7806 28.9239L26.1688 30.8858C25.7892 30.9609 25.3982 31 25 31H24.0625V29Z",
              }),
              (0, s.jsx)("path", {
                fill: "currentColor",
                d: "M29 22.1875V21L31 19V22.1875H29Z",
              }),
            ],
          });
        }
        function dr(u) {
          return useInGamepadUI()
            ? jsx("svg", {
                width: "36",
                height: "36",
                viewBox: "0 0 36 36",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ...u,
                children: jsx("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M33 18C33 26.2843 26.2843 33 18 33C15.031 33 12.2636 32.1374 9.93446 30.6492L4.35707 32.4107C3.95174 32.5387 3.58168 32.1347 3.74474 31.7421L5.81718 26.7529C4.04426 24.2896 3 21.2667 3 18C3 9.71573 9.71573 3 18 3C26.2843 3 33 9.71573 33 18ZM18 9.66667C16.3518 9.66667 14.7407 10.1554 13.3703 11.0711C11.9998 11.9868 10.9317 13.2883 10.301 14.811C9.67028 16.3337 9.50525 18.0092 9.82679 19.6258C10.1483 21.2423 10.942 22.7271 12.1074 23.8926C13.2729 25.058 14.7577 25.8517 16.3743 26.1732C17.9908 26.4948 19.6663 26.3297 21.189 25.699C22.7118 25.0683 24.0132 24.0002 24.9289 22.6298C25.8446 21.2593 26.3333 19.6482 26.3333 18C26.3333 16.9057 26.1178 15.822 25.699 14.811C25.2802 13.7999 24.6664 12.8813 23.8926 12.1074C23.1187 11.3336 22.2001 10.7198 21.189 10.301C20.178 9.88222 19.0944 9.66667 18 9.66667ZM13 16.3333C13 16.0037 13.0978 15.6815 13.2809 15.4074C13.464 15.1333 13.7243 14.9197 14.0289 14.7935C14.3334 14.6674 14.6685 14.6344 14.9918 14.6987C15.3151 14.763 15.6121 14.9217 15.8452 15.1548C16.0783 15.3879 16.237 15.6849 16.3013 16.0082C16.3656 16.3315 16.3326 16.6666 16.2065 16.9711C16.0803 17.2757 15.8667 17.536 15.5926 17.7191C15.3185 17.9023 14.9963 18 14.6667 18C14.2246 18 13.8007 17.8244 13.4882 17.5118C13.1756 17.1993 13 16.7754 13 16.3333ZM21.3333 18C21.0037 18 20.6815 17.9023 20.4074 17.7191C20.1333 17.536 19.9197 17.2757 19.7935 16.9711C19.6674 16.6666 19.6344 16.3315 19.6987 16.0082C19.763 15.6849 19.9217 15.3879 20.1548 15.1548C20.3879 14.9217 20.6849 14.763 21.0082 14.6987C21.3315 14.6344 21.6666 14.6674 21.9711 14.7935C22.2757 14.9197 22.536 15.1333 22.7191 15.4074C22.9023 15.6815 23 16.0037 23 16.3333C23 16.7754 22.8244 17.1993 22.5119 17.5118C22.1993 17.8244 21.7754 18 21.3333 18ZM19.9642 22.1864C20.4851 21.6655 20.7778 20.9589 20.7778 20.2222H15.2222C15.2222 20.9589 15.5149 21.6655 16.0358 22.1864C16.5568 22.7073 17.2633 23 18 23C18.7367 23 19.4433 22.7073 19.9642 22.1864Z",
                  fill: "currentColor",
                }),
              })
            : jsx("svg", {
                viewBox: "0 -8 60 60",
                width: "32",
                ...u,
                children: jsx("path", {
                  d: "M.5 5.5C.5 2.5 3 0 6 0h48c3 0 5.5 2.5 5.5 5.5V35c0 3-2.5 5.5-5.5 5.5h-1.5c-.8 0-1.5.7-1.5 1.5v8.1c0 1.3-1.6 2-2.6 1.1L37.8 40.5H6C3 40.5.5 38 .5 35V5.5zM6 1C3.5 1 1.5 3 1.5 5.5V35c0 2.5 2 4.5 4.5 4.5h32.2l.1.1 10.8 10.8c.3.3.9.1.9-.4v-8c0-1.4 1.1-2.5 2.5-2.5H54c2.5 0 4.5-2 4.5-4.5V5.5C58.5 3 56.5 1 54 1H6zm24 31c6.6 0 12-5.4 12-12S36.6 8 30 8s-12 5.4-12 12 5.4 12 12 12zm0 1c7.2 0 13-5.8 13-13S37.2 7 30 7s-13 5.8-13 13 5.8 13 13 13zm-3.5-15c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5-1.5.7-1.5 1.5.7 1.5 1.5 1.5zm8.5-1.5c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5.7-1.5 1.5-1.5 1.5.7 1.5 1.5zM24.5 22c0 2.5 2 4.5 4.5 4.5h2c2.5 0 4.5-2 4.5-4.5h-1c0 1.9-1.6 3.5-3.5 3.5h-2c-1.9 0-3.5-1.6-3.5-3.5h-1z",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  fill: "#fff",
                }),
              });
        }
        function Br(u) {
          return (0, s.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 36 36",
            fill: "none",
            ...u,
            children: (0, s.jsx)("path", {
              fill: "currentColor",
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M18 3C15.0333 3 12.1332 3.87973 9.66645 5.52796C7.19972 7.17618 5.27713 9.51886 4.14181 12.2597C3.0065 15.0006 2.70945 18.0166 3.28823 20.9264C3.86701 23.8361 5.29562 26.5088 7.3934 28.6066C9.49119 30.7044 12.1639 32.133 15.0737 32.7118C17.9834 33.2906 20.9994 32.9935 23.7403 31.8582C26.4811 30.7229 28.8238 28.8003 30.472 26.3336C32.1203 23.8668 33 20.9667 33 18C33 16.0302 32.612 14.0796 31.8582 12.2597C31.1044 10.4399 29.9995 8.78628 28.6066 7.3934C27.2137 6.00052 25.5601 4.89563 23.7403 4.14181C21.9204 3.38799 19.9698 3 18 3ZM9.00001 15C9.00001 14.4067 9.17595 13.8266 9.5056 13.3333C9.83524 12.8399 10.3038 12.4554 10.852 12.2284C11.4001 12.0013 12.0033 11.9419 12.5853 12.0576C13.1672 12.1734 13.7018 12.4591 14.1213 12.8787C14.5409 13.2982 14.8266 13.8328 14.9424 14.4147C15.0581 14.9967 14.9987 15.5999 14.7716 16.1481C14.5446 16.6962 14.1601 17.1648 13.6667 17.4944C13.1734 17.8241 12.5934 18 12 18C11.2044 18 10.4413 17.6839 9.87869 17.1213C9.31608 16.5587 9.00001 15.7956 9.00001 15ZM24 18C23.4067 18 22.8266 17.8241 22.3333 17.4944C21.8399 17.1648 21.4554 16.6962 21.2284 16.1481C21.0013 15.5999 20.9419 14.9967 21.0576 14.4147C21.1734 13.8328 21.4591 13.2982 21.8787 12.8787C22.2982 12.4591 22.8328 12.1734 23.4147 12.0576C23.9967 11.9419 24.5999 12.0013 25.1481 12.2284C25.6962 12.4554 26.1648 12.8399 26.4944 13.3333C26.8241 13.8266 27 14.4067 27 15C27 15.7956 26.6839 16.5587 26.1213 17.1213C25.5587 17.6839 24.7957 18 24 18ZM26.3149 23.6788C26.7672 22.8295 27 21.9193 27 21H18H9C9 21.9193 9.23279 22.8295 9.68508 23.6788C10.1374 24.5281 10.8003 25.2997 11.636 25.9497C12.4718 26.5998 13.4639 27.1154 14.5558 27.4672C15.6478 27.8189 16.8181 28 18 28C19.1819 28 20.3522 27.8189 21.4442 27.4672C22.5361 27.1154 23.5282 26.5998 24.364 25.9497C25.1997 25.2997 25.8626 24.5281 26.3149 23.6788Z",
            }),
          });
        }
        function Wr(u) {
          return useInGamepadUI()
            ? jsxs("svg", {
                viewBox: "0 0 36 36",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ...u,
                children: [
                  jsx("path", {
                    d: "M14.5 7L17.2 15.37C17.5375 16.5175 18.4825 17.395 19.63 17.8L28 20.5L19.63 23.2C18.4825 23.5375 17.605 24.4825 17.2 25.63L14.5 34L11.8 25.63C11.4625 24.4825 10.5175 23.605 9.37 23.2L1 20.5L9.37 17.8C10.5175 17.4625 11.395 16.5175 11.8 15.37L14.5 7Z",
                    fill: "currentColor",
                  }),
                  jsx("path", {
                    d: "M24.9231 2L26.3077 6.33599C26.4923 6.94209 26.9538 7.40833 27.5538 7.59482L31.8462 8.99353L27.5538 10.3922C26.9538 10.5787 26.4923 11.045 26.3077 11.6511L24.9231 15.9871L23.5385 11.6511C23.3538 11.045 22.8923 10.5787 22.2923 10.3922L18 8.99353L22.2923 7.59482C22.8923 7.40833 23.3538 6.94209 23.5385 6.33599L24.9231 2Z",
                    fill: "currentColor",
                  }),
                  jsx("path", {
                    d: "M7.46154 3L8.15385 5.1913C8.24615 5.47105 8.47692 5.70416 8.75384 5.79741L10.9231 6.49676L8.75384 7.19611C8.47692 7.28936 8.24615 7.52248 8.15385 7.80222L7.46154 9.99352L6.76923 7.80222C6.67692 7.52248 6.44615 7.28936 6.16923 7.19611L4 6.49676L6.16923 5.79741C6.44615 5.70416 6.67692 5.47105 6.76923 5.1913L7.46154 3Z",
                    fill: "currentColor",
                  }),
                  jsx("path", {
                    d: "M31.4615 12L32.1538 14.1913C32.2462 14.471 32.4769 14.7042 32.7538 14.7974L34.9231 15.4968L32.7538 16.1961C32.4769 16.2894 32.2462 16.5225 32.1538 16.8022L31.4615 18.9935L30.7692 16.8022C30.6769 16.5225 30.4462 16.2894 30.1692 16.1961L28 15.4968L30.1692 14.7974C30.4462 14.7042 30.6769 14.471 30.7692 14.1913L31.4615 12Z",
                    fill: "currentColor",
                  }),
                  jsx("path", {
                    d: "M26.4615 25L27.1538 27.1913C27.2462 27.471 27.4769 27.7042 27.7538 27.7974L29.9231 28.4968L27.7538 29.1961C27.4769 29.2894 27.2462 29.5225 27.1538 29.8022L26.4615 31.9935L25.7692 29.8022C25.6769 29.5225 25.4462 29.2894 25.1692 29.1961L23 28.4968L25.1692 27.7974C25.4462 27.7042 25.6769 27.471 25.7692 27.1913L26.4615 25Z",
                    fill: "currentColor",
                  }),
                ],
              })
            : jsx("svg", {
                viewBox: "0 0 60 38",
                width: "32",
                ...u,
                children: jsx("path", {
                  d: "M16 8.9l1.9 5.1c.2.5.6 1 1.2 1.2l5.1 1.9-5.1 1.9c-.5.2-1 .6-1.2 1.2L16 25.1 14.1 20c-.2-.5-.6-1-1.2-1.2l-5-1.8 5.1-1.9c.5-.2 1-.6 1.2-1.2l1.8-5zm-.9-.4c.3-.9 1.6-.9 1.9 0l1.9 5.1c.1.3.3.5.6.6l5.1 1.9c.9.3.9 1.6 0 1.9l-5.1 1.9c-.3.1-.5.3-.6.6L17 25.6c-.3.9-1.6.9-1.9 0l-1.9-5.1c-.1-.3-.3-.5-.6-.6L7.5 18c-.9-.3-.9-1.6 0-1.9l5.1-1.9c.3-.1.5-.3.6-.6l1.9-5.1zm17.8 15.4l-1.9-5-1.9 5.1c-.2.5-.6 1-1.2 1.2l-5 1.8 5.1 1.9c.5.2 1 .6 1.2 1.2l1.9 5.1 1.9-5.1c.2-.5.6-1 1.2-1.2l5.1-1.9-5.1-1.9c-.7-.2-1.1-.6-1.3-1.2zm-1-5.4c-.3-.9-1.6-.9-1.9 0l-1.9 5.1c-.1.3-.3.5-.6.6l-5.1 1.9c-.9.3-.9 1.6 0 1.9l5.1 1.9c.3.1.5.3.6.6l1.9 5.1c.3.9 1.6.9 1.9 0l1.9-5.1c.1-.3.3-.5.6-.6l5.1-1.9c.9-.3.9-1.6 0-1.9l-5.1-1.9c-.3-.1-.5-.3-.6-.6l-1.9-5.1zM43 4.9l1.9 5.1c.2.5.6 1 1.2 1.2l5.1 1.9-5.1 1.9c-.5.2-1 .6-1.2 1.2L43 21.1 41.1 16c-.2-.5-.6-1-1.2-1.2l-5-1.8 5.1-1.9c.5-.2 1-.6 1.2-1.2l1.8-5zm-.9-.4c.3-.9 1.6-.9 1.9 0l1.9 5.1c.1.3.3.5.6.6l5.1 1.9c.9.3.9 1.6 0 1.9l-5.1 1.9c-.3.1-.5.3-.6.6L44 21.6c-.3.9-1.6.9-1.9 0l-1.9-5.1c-.1-.3-.3-.5-.6-.6L34.5 14c-.9-.3-.9-1.6 0-1.9l5.1-1.9c.3-.1.5-.3.6-.6l1.9-5.1z",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  fill: "#fff",
                }),
              });
        }
        function $r(u) {
          return (0, s.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 36 36",
            fill: "none",
            ...u,
            children: [
              (0, s.jsx)("path", {
                fill: "currentColor",
                d: "M14.7163 7.6875L17.2476 15.5344C17.564 16.6102 18.4499 17.4328 19.5257 17.8125L27.3726 20.3438L19.5257 22.875C18.4499 23.1914 17.6273 24.0773 17.2476 25.1531L14.7163 33L12.1851 25.1531C11.8687 24.0773 10.9827 23.2547 9.90696 22.875L2.06009 20.3438L9.90696 17.8125C10.9827 17.4961 11.8054 16.6102 12.1851 15.5344L14.7163 7.6875Z",
              }),
              (0, s.jsx)("path", {
                fill: "currentColor",
                d: "M24.488 3L25.7861 7.06499C25.9591 7.63321 26.3918 8.07031 26.9543 8.24514L30.9784 9.55643L26.9543 10.8677C26.3918 11.0426 25.9591 11.4796 25.7861 12.0479L24.488 16.1129L23.1899 12.0479C23.0168 11.4796 22.5841 11.0426 22.0216 10.8677L17.9976 9.55643L22.0216 8.24514C22.5841 8.07031 23.0168 7.63321 23.1899 7.06499L24.488 3Z",
              }),
              (0, s.jsx)("path", {
                fill: "currentColor",
                d: "M8.11778 3.9375L8.76682 5.99185C8.85336 6.25411 9.0697 6.47265 9.32932 6.56007L11.363 7.21571L9.32932 7.87136C9.0697 7.95878 8.85336 8.17732 8.76682 8.43958L8.11778 10.4939L7.46874 8.43958C7.3822 8.17732 7.16586 7.95878 6.90624 7.87136L4.87259 7.21571L6.90624 6.56007C7.16586 6.47265 7.3822 6.25411 7.46874 5.99185L8.11778 3.9375Z",
              }),
              (0, s.jsx)("path", {
                fill: "currentColor",
                d: "M30.6178 12.375L31.2668 14.4293C31.3534 14.6916 31.5697 14.9102 31.8293 14.9976L33.863 15.6532L31.8293 16.3089C31.5697 16.3963 31.3534 16.6148 31.2668 16.8771L30.6178 18.9314L29.9687 16.8771C29.8822 16.6148 29.6659 16.3963 29.4062 16.3089L27.3726 15.6532L29.4062 14.9976C29.6659 14.9102 29.8822 14.6916 29.9687 14.4293L30.6178 12.375Z",
              }),
              (0, s.jsx)("path", {
                fill: "currentColor",
                d: "M25.9303 24.5625L26.5793 26.6168C26.6659 26.8791 26.8822 27.0977 27.1418 27.1851L29.1755 27.8407L27.1418 28.4964C26.8822 28.5838 26.6659 28.8023 26.5793 29.0646L25.9303 31.1189L25.2812 29.0646C25.1947 28.8023 24.9784 28.5838 24.7187 28.4964L22.6851 27.8407L24.7187 27.1851C24.9784 27.0977 25.1947 26.8791 25.2812 26.6168L25.9303 24.5625Z",
              }),
            ],
          });
        }
        function Se(u) {
          const { className: y, ...O } = u;
          return (0, s.jsx)("svg", {
            className: (0, D.A)("SVGIcon_Button SVGIcon_Clock", y),
            version: "1.1",
            x: "0px",
            y: "0px",
            width: "20px",
            height: "20px",
            viewBox: "0 0 24 24",
            ...O,
            children: (0, s.jsx)("path", {
              d: "M15.999 15c-.15 0-.303-.034-.446-.105l-4-2A1.001 1.001 0 0111 12V5a1 1 0 012 0v6.382l3.447 1.724A1 1 0 0115.999 15zM12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z",
            }),
          });
        }
      },
      16085: (se, Be, b) => {
        "use strict";
        b.d(Be, { m: () => Ir });
        var s = b(7850),
          ae = b(90626),
          M = b(99412),
          l = b(48421),
          e = b(36707),
          br = b(18210),
          de = b(53113),
          D = b(72609),
          P = b(15392),
          oe = b.n(P),
          zr = b(29630),
          lr = b(16512);
        function Ir(cr) {
          const { gidEvent: Ur } = cr,
            Tr = (0, l.RR)(Ur);
          return Tr
            ? (0, s.jsx)(Vr, {
                event: Tr,
                lang: (0, M.sfN)(D.TS.LANGUAGE),
                href: (0, de.k2)((0, lr.n4)(Tr) ?? ""),
              })
            : null;
        }
        function Vr(cr) {
          const { event: Ur, lang: Tr, href: V } = cr,
            [jr, fr] = (0, ae.useMemo)(() => {
              const vr = Ur.jsondata.localized_sale_product_banner,
                Pr = Ur.jsondata.localized_sale_product_mobile_banner;
              if (vr?.length && Pr?.length) {
                const F = br.NT.GetWithFallback(vr, Tr),
                  q = br.NT.GetWithFallback(Pr, Tr);
                if (F?.length && q?.length)
                  return [
                    zr.zU.GenerateURLFromHashAndExt(Ur.clanSteamID, F),
                    zr.zU.GenerateURLFromHashAndExt(Ur.clanSteamID, q),
                  ];
              }
              return [void 0, void 0];
            }, [Ur, Tr]);
          return !jr?.length || !fr?.length
            ? null
            : (0, s.jsxs)("a", {
                href: V,
                className: P.Link,
                children: [
                  (0, s.jsx)("img", {
                    src: jr,
                    className: (0, e.A)(P.Banner, P.Big),
                  }),
                  (0, s.jsx)("img", {
                    src: fr,
                    className: (0, e.A)(P.Banner, P.Mobile),
                  }),
                ],
              });
        }
      },
      77661: (se) => {
        se.exports = {
          Login: "lat0M-V5X4uYd6Mpm1DJ1",
          SideBySide: "ZHRZ8czyqs7NaNmv65ARI",
          GuestContainer: "_3Sfbz5IM9d2jNMdOV2aFal",
          GuestLayout: "_1r_sYgW1VktkbK33MvFdMx",
          StandardLayout: "_2EuR68sQbA8eP01DlIfu6O",
          Embedded: "_2R_n2M6thAvA4On2yeR_Jd",
          GuestText: "_2gE59p3vz8NzTRZIejilUN",
          GuestLink: "_3zcmXq9FSDuc9eFPT7yj1A",
          ConfirmCredntialsNag: "_2oMvaF46xYOE6Guy0xjCAl",
          QRSection: "_3wSeH3OorL-tMzwXL55smN",
          MessagingContainer: "mFCQSE5-57z0lcZgUiE9K",
          MessagingTag: "_2vrvETim46niDklOy_kH33",
          MessagingSubtitleCtn: "_1SepN-HT3pk6WedgBgXLeB",
          MessagingIcon: "_1IIkZxuQobioLQwfUK5TcH",
          MessagingSubtitle: "_14ZzKYkQD-qXL4aLAaupwp",
          MessagingButton: "_3k-6J60Y5_Cs3sqk7SgbQU",
          MessagingLink: "_1kBrGj8mpIJs7FywIdPpik",
          ScanQRButton: "_3wGxEd3F_T8M0LIA0M9o-g",
          QRIcon: "_27u_PDLDTJ3mTS-4_TmJKk",
          QRCodeContainer: "_3ToZQDL9M9IP5o2tIhKLxH",
          QR: "_35Q-UW9L8wv2fkImoWScgQ",
          QRHideLink: "_1MIDAnpFm2LhRX7Rvb3wlY",
          HideButton: "_1kEk5_KBniai5Q7TYGCH1S",
          UseMobileAppForQR: "_3pxTSyPhDmjNqXUYDIITS-",
          InClient: "_1VAFgEYpKJDwl9aI8W5ctY",
          TextField: "_3BkiHun-mminuTO-Y-zXke",
          TextInput: "_2GBWeup5cttgbTw8FM3tfx",
          Danger: "_16BUa8w2l6LPH1otvXnwAR",
          LoginForm: "_2v60tM463fW0V7GDe92E5f",
          FieldLabel: "XrYgea66b38RASmbI3PJo",
          Highlight: "_12zBmIktqPpcwJXItTb8f9",
          CheckboxField: "_1Qku5jMXBi5-wawzqY1kzG",
          CheckboxFieldLabel: "_10bGilozn2bfCfiPfANMhC",
          Checkbox: "LBS7IDpob52Sb4ZoKobh0",
          Check: "_28MB9LhS2kVTalIp0NHDv4",
          RefreshButtonContainer: "_1Y8X98of8RkwP6ga9F92LD",
          SignInButtonContainer: "_16fbihk6Bi9CXuksG7_tLt",
          RefreshQuitButton: "_9Ig1o0jVRia2uf_FKR3rs",
          OfferOfflineButton: "_2Z68vjdOnUDA2ULQG41JVV",
          TryAgainButton: "_25eT23F0cV5lmT3tXAIA56",
          GuestButton: "_3t6QgWQmijDfZziPq3q3aQ",
          SubmitButton: "DjSvCZoKKfoNSmarsEcTS",
          Loading: "_2NVQcOnbtdGIu9O-mB9-YE",
          LoadingContainer: "_3AseUd328DeQNUMkwlq8MV",
          Text: "_1zFEayEDjKnMPSCnM-lzqE",
          Center: "_2jDjxzENzZfyd-mEASaFdZ",
          TextLink: "_1K431RbY14lkaFW6-XgSsC",
          FormError: "_1W_6HXiG4JJ0By1qN_0fGZ",
          TextAlignCenter: "_2FyQDUS2uHbW1fzoFK2jLx",
          FlexCol: "_1NOsG2PAO2rRBb8glCFM_6",
          AlignItemsCenter: "_2QHQ1DkwVuPafY7Yr1Df6w",
          JustifyContentCenter: "_2tsIiF5suAf1CC2JA9djst",
          ProtectingAccount: "_3JBYGcszFcaSNXHHSR3kCV",
          Label: "_1hKgiFuFaVR_Sq1Gj_gCnd",
          AccountName: "_31Vq4lzNWs4WikXVr9J4hz",
          Description: "_2o5mE8JpPFOyJ0HwX_y0y7",
          ConfirmationContainer: "_3zQ9hnkyXJEv7nN0oBU56M",
          AwaitingMobileConfText: "_2WgwHabhUV3cP6dHQPybw8",
          ConfirmationEntryContainer: "_3huyZ7Eoy2bX4PbCnH3p5w",
          AwaitingMobileConfIcon: "_3WvDpj9Ng6SQliygcVqlJU",
          AwaitingEmailConfIcon: "_3qdu3-d2Nbudcqe-VBrC8r",
          LinkContainer: "_3yz6xIaXDcStXAUzK4pWgE",
          EnterCodeInsteadLink: "_2YsaRupK3XuabHMh9_BfZP",
          EnterBackupCodeContainer: "DdK_Fpa32ezl3qzyYJ85d",
          EnterCodeFromMobileContainer: "_2Io_Jc8M4cRHn9cU4vHcqW",
          EnterCodeFromEmailContainer: "_1YQZI88vD5NCUw4u35tB0m",
          EnterCodeFromMobile: "_1rEWOv1g1uTXNhoWiJLQZs",
          EnterCodeFromEmail: "_3aMbj3PT-p1yxEt98UM56K",
          EnterCodeEmailAddress: "_3BKzb-aGSLOjp5jsQ8wwXK",
          CodeInputFieldContainer: "_3FIQqsD10Zd2yrvusqjP_P",
          CodeInputField: "_1gZuGaPQVYkRx3GH4wzBN3",
          SegmentContainer: "_8gteGheBcDqzR7sDIhoDN",
          Segment: "_3l55OgBEuGxUa2TRX_q6X2",
          RefreshTitle: "_3yMMwjOGjHdmMrJbYQyst3",
          RefreshReason: "_1b-mLIbA7lNlcrNICBrLu6",
          InsecureComputer: "_3onX-q5mCgAQyvYp-RXyQy",
          PrimaryHeader: "g5L61o-ZrHHmwLEugLjLI",
          FormContainer: "_3XCnc4SuTz8V8-jXVwkt_s",
          Compact: "_3FB9Kwzf1SnNWl8p2Mypu7",
          HeaderLogo: "_3v6WnuVNx1rJx0x_1AAyPp",
          LogoContainer: "_14exBrSFDthVqeknXgFh4X",
          BackArrowContainer: "_2Jkgs1ZwjavbwnJy76UgUm",
          BackArrow: "_3NHpq7ZDgg4uYEzUF9RxaQ",
          EmbeddedRoot: "_2v9dClMg2Lmn8UVv6GUeJt",
          RefreshReasonContainer: "_1kQPdUAn_5omUN8oZo_4ds",
          Universe: "yQUZitCk5gaktq9hh0r4J",
          EmbeddedRootFooter: "_27aItUQsVlk-hSm7K9UCJt",
          AccountCreation: "_3oenaAqi9EDn5VBmQS596K",
          AccountCreationPrompt: "_3dwSWEGgHCaDxQqEDOqTtN",
          FailureTitle: "_1A8Mk6QeC0d7bvHDJIoW7o",
          FailureDescription: "_3H-JHTYIWOo9uVrF0SXAX0",
          FailureButtons: "Vf2Dk5xgRdq6KGJAuoz3A",
          OfferOffline: "_2gqhnP9l70A6UQqREWHYY3",
          LoadingSpinner: "_1VLukpV8qjL4BULw7Zob_l",
          LoadAmin: "_14OTBjueEGnvcmdIsMqE2w",
          Small: "WYrJyNEVnjgAnMVZgvPeg",
          Medium: "CQ9fAVYxF10LejsSBLSz4",
          Large: "_1EIKWuekEw7VTF9EjNPV5j",
          MutedErrorReference: "J_2Q0Mk09u8np24KfSwHR",
          WaitingForTokenContainer: "_1h8nX6TBOG2MHjtSFDK79v",
          Client: "_3NSipG33PSv9wRw5VRHJGv",
        };
      },
      5522: (se) => {
        se.exports = {
          LoginQR: "xlEVpBeYO1h2tOqErt9fj",
          NonPublic: "_39rmYMz2NhzK3kuX7QQoz8",
          QRLoginDeck: "J3DO-HZVloRroBWQ4LcSK",
          QRLoginVR: "_1Drp2pvGZ46_F0XaPI7EM1",
          Blur: "_1rteFtfW8qmD6imQgrH-XM",
          Overlay: "_464mFQmvIW2e9TQypXX7W",
          Box: "_2ltn2BK4fnrPEGzNwxx6bx",
          Column: "_2u8B99t9Tx_uGgP58AcGYT",
          Loading: "_3jObIZzYUBbiU1dYHigzC_",
          LoadAmin: "_3GMW9g9sRiQQcPyKloXOxy",
          Small: "_3YZnIGSA-eyWBOOTC_4ODZ",
          Medium: "rYn6LhErVIdynPax7oCwy",
          Large: "_16VPM09Kxqdhwe3sCkvTOm",
        };
      },
      19418: (se) => {
        se.exports = {
          "duration-app-launch": "800ms",
          Picker: "tid_OE5NJWCCVJQP1PfRc",
          Tabs: "_1yVkTX9Mo_7qb2sxWhM0Cr",
          Tab: "_2CJ0LpiSgVs2JuTlwbzBM",
          Focus: "_1xH5si_KorJpS4ST2Geksh",
          TabContent: "_1mROo5bpUJSg8D8ILx7qpw",
          Active: "_1ddEQAfz6GuVRSEqk-d0r",
          Content: "dUQIH8Qg80N6kjB8UQO0P",
          ItemList: "_2OWGRbhpXNcuR3oih9IGrX",
          Item: "_1SFqyFzFrpPOEAKCrq2kKZ",
          SectionedPageTitle: "ZmsElITvVzU-7a2HXKBZI",
          SectionTitle: "_3WuFl419BivPeLqeVIC939",
          FilterInputContainer: "EuFePPYFGrcf99uLXmBYN",
          FilterInput: "_2l4z-U60lABvd9XWArGjAf",
          AddonPickerMessage: "_2wUk7QR9TZiiKB4bX_9EgD",
          BackgroundAnimation: "NB2T8xbO5KSdw1jQWC0aq",
          "ItemFocusAnim-darkerGrey-nocolor": "_1tzknOYTl338bweAg8VM66",
          "ItemFocusAnim-darkerGrey": "_321Bw1yIABWsLJup9W__Gb",
          "ItemFocusAnim-darkGreySettings": "BSoZ5uHW-lcSEjyeNZol4",
          "ItemFocusAnim-darkGrey": "_3Xhw1BWpHpkagZqxZOv8kb",
          "ItemFocusAnim-grey": "_2OnCF3hKjr89wU_tfFaWX2",
          "ItemFocusAnim-translucent-white-10": "_2uQtLVYFAkVIQ8Mzm6C5K3",
          "ItemFocusAnim-translucent-white-20": "_2vYgLWggR0AEuxE9DPEEk2",
          "ItemFocusAnimBorder-darkGrey": "PgPnyLUdsSEfTVdlxX2a9",
          "ItemFocusAnim-green": "_26b32AeDG8ENv_LcSS6SPE",
          focusAnimation: "NrCY5qgGbXyh_LeVWegvW",
          hoverAnimation: "ECWcgkTWpWeZLs6-rszlL",
        };
      },
      90024: (se) => {
        se.exports = {
          narrowWidth: "500px",
          chatEntryControls: "_3Ule3rolhZJiBN4yNNtk1s",
          chatTextarea: "_113iuw_HlE_qSgt9cGWCSv",
          chatEntryActionsGroup: "_2WfNoLBdfKwyutA6ho4aSH",
          chatEntryActionsContainer: "W0OhkJtz8zMUW8Mhu0BMO",
          minHeightZero: "_2zeehYTQ2oNY7TvjqGC_gL",
          chatSubmitButton: "RVIs84dAE6wHcjH9tkinc",
          EmbedButton: "_3zOBeq5W4cNK3lRz_7aroW",
          EmoticonPickerButton: "Aupswi7-c-w3XwNO5cp2i",
          disabled: "jaQN2IyN4P8LZXJ6P11qy",
          Inactive: "_3G-I9qj7vqOe6SOFG27ohD",
          AudioLines: "IWabakUFeIH_d5rhBZ6dG",
          Active: "_37tPtXtV-sv9XgDHjS2cnj",
        };
      },
      14256: (se) => {
        se.exports = {
          Container: "mKmrOjr9bGjKAolgp9NoD",
          VoteContainer: "_3Kelh1-_v6xHfRjF68n7NB",
          DiscussContainer: "_16xC0mtOWoLbvSQbmo_ycv",
          ShareContainer: "_3ctGqQID5-8adtd7HlZ3YM",
          InnerContainer: "_9x4Z7eMgdwfAVMr16ZaJ0",
          DiscussionButton: "rHz7G5xZ3qXUYUcBW2bzX",
          DiscussIcon: "_1HBhpUbVmEXbTls8Dx-z98",
          linkField: "_3VmknRBpalymNnqAtRNJNX",
          ShareButtonContainer: "sKjWNkv_y_-TthHlUOo0R",
          LinkInputLabel: "_3ueQruKYDysu1Q9rNA62lb",
          LinkButton: "NrgD8TK-KmZ5WoWxGcOaD",
          ShareSteamBtn: "_1G3P8wlZ4seS-hs8-P9cwE",
          ClipboardText: "ytQqTkd5AxOMJlwopd6G-",
          LinkInput: "hgGF9tJhSgdN6iw-BPD5X",
          ShareIcon: "_3qVz2p-X14nAGX6EWNC87I",
          ClipboardIcon: "_3XZsWYaYpPd4DZvwdZqRLw",
          SteamIcon: "_3PXcvKt0U1PJ2DAM8I5lLx",
          share_controls_ctn: "_3F-Ryi3XDXB3d2vL---jof",
          ShareLanguagePicker: "ydWt5IK9ePS8udoXm9X8D",
          LanguageLabel: "_1AaiWRsZdYHvteubgV4AHk",
          ShareBtn: "_22m-GVWK4oToZYpcPXpkNk",
          VoteCount: "_3csl-MPe-hKuT8hQpOqEG5",
          DiscussionCount: "QQy4BCjcpjCfAvTKAqBq3",
          DiscussionButtonText: "_3P2XeK0HGdzGWS3fRQ4_vX",
          VoteDownIcon: "_3ZqxxB_poSsEYBW1s4t1OY",
          VoteDownSelectedIcon: "_1PTQ2mq0eTaG8ifW8juu81",
          VoteUpIcon: "_2akzufsslA5YAnC95zYx0K",
          VoteUpSelectedIcon: "_34YgMAbrVXVMMfXvsZAU9_",
          VoteUpStaticIcon: "Sf3urgalDvD2sZqNjEV9i",
          VoteButtonSelected: "_2OXBSB7B1AuT3O2sUF46T9",
        };
      },
      15392: (se) => {
        se.exports = {
          Link: "-HlDBB290kjpl61uUmRed",
          Banner: "_2bT8irkKNnA5sxFG3MUXzH",
          Big: "sGy-bB7uqEt4Hoe7U5iA1",
          Mobile: "mhii5hgMCQvO2tXOUdWPQ",
        };
      },
      5804: (se) => {
        se.exports = {
          QRBits: "_3BALYLTpJdiDaC7JKmeeFJ",
          QRImg: "_5S5WqZhvbmRD1cHQT8P-l",
          Bit: "_1YVDTFYSTDWouyIbRs_hN_",
          Active: "_1zNnNw2BDhrN6ML6YxBYJE",
        };
      },
      9843: (se) => {
        se.exports = {
          SegmentedCharacterInput: "_1gzkmmy_XA39rp9MtxJfZJ",
          Disabled: "_4WrcvilhO29CHFM0pqglW",
          Danger: "_3lEvxoIfUV21o8WAfErUcA",
          BackupCode: "V5oAzFppoOFufB8_pY9sK",
          Loading: "_3khV2wP4icszbiR8o7sw37",
          Input: "_3xcXqLVteTNHmk-gh9W65d",
        };
      },
      80407: (se, Be, b) => {
        "use strict";
        b.d(Be, { A: () => bt });
        var s,
          ae = 0xdeadbeefcafe,
          M = (ae & 16777215) == 15715070;
        function l(i, n, c) {
          i != null &&
            (typeof i == "number"
              ? this.fromNumber(i, n, c)
              : n == null && typeof i != "string"
                ? this.fromString(i, 256)
                : this.fromString(i, n));
        }
        function e() {
          return new l(null);
        }
        function br(i, n, c, f, w, S) {
          for (; --S >= 0; ) {
            var N = n * this[i++] + c[f] + w;
            (w = Math.floor(N / 67108864)), (c[f++] = N & 67108863);
          }
          return w;
        }
        function de(i, n, c, f, w, S) {
          for (var N = n & 32767, H = n >> 15; --S >= 0; ) {
            var Or = this[i] & 32767,
              le = this[i++] >> 15,
              he = H * Or + le * N;
            (Or = N * Or + ((he & 32767) << 15) + c[f] + (w & 1073741823)),
              (w = (Or >>> 30) + (he >>> 15) + H * le + (w >>> 30)),
              (c[f++] = Or & 1073741823);
          }
          return w;
        }
        function D(i, n, c, f, w, S) {
          for (var N = n & 16383, H = n >> 14; --S >= 0; ) {
            var Or = this[i] & 16383,
              le = this[i++] >> 14,
              he = H * Or + le * N;
            (Or = N * Or + ((he & 16383) << 14) + c[f] + w),
              (w = (Or >> 28) + (he >> 14) + H * le),
              (c[f++] = Or & 268435455);
          }
          return w;
        }
        M && navigator.appName == "Microsoft Internet Explorer"
          ? ((l.prototype.am = de), (s = 30))
          : M && navigator.appName != "Netscape"
            ? ((l.prototype.am = br), (s = 26))
            : ((l.prototype.am = D), (s = 28)),
          (l.prototype.DB = s),
          (l.prototype.DM = (1 << s) - 1),
          (l.prototype.DV = 1 << s);
        var P = 52;
        (l.prototype.FV = Math.pow(2, P)),
          (l.prototype.F1 = P - s),
          (l.prototype.F2 = 2 * s - P);
        var oe = "0123456789abcdefghijklmnopqrstuvwxyz",
          zr = new Array(),
          lr,
          Ir;
        for (lr = 48, Ir = 0; Ir <= 9; ++Ir) zr[lr++] = Ir;
        for (lr = 97, Ir = 10; Ir < 36; ++Ir) zr[lr++] = Ir;
        for (lr = 65, Ir = 10; Ir < 36; ++Ir) zr[lr++] = Ir;
        function Vr(i) {
          return oe.charAt(i);
        }
        function cr(i, n) {
          var c = zr[i.charCodeAt(n)];
          return c ?? -1;
        }
        function Ur(i) {
          for (var n = this.t - 1; n >= 0; --n) i[n] = this[n];
          (i.t = this.t), (i.s = this.s);
        }
        function Tr(i) {
          (this.t = 1),
            (this.s = i < 0 ? -1 : 0),
            i > 0 ? (this[0] = i) : i < -1 ? (this[0] = i + DV) : (this.t = 0);
        }
        function V(i) {
          var n = e();
          return n.fromInt(i), n;
        }
        function jr(i, n) {
          var c;
          if (n == 16) c = 4;
          else if (n == 8) c = 3;
          else if (n == 256) c = 8;
          else if (n == 2) c = 1;
          else if (n == 32) c = 5;
          else if (n == 4) c = 2;
          else {
            this.fromRadix(i, n);
            return;
          }
          (this.t = 0), (this.s = 0);
          for (var f = i.length, w = !1, S = 0; --f >= 0; ) {
            var N = c == 8 ? i[f] & 255 : cr(i, f);
            if (N < 0) {
              i.charAt(f) == "-" && (w = !0);
              continue;
            }
            (w = !1),
              S == 0
                ? (this[this.t++] = N)
                : S + c > this.DB
                  ? ((this[this.t - 1] |=
                      (N & ((1 << (this.DB - S)) - 1)) << S),
                    (this[this.t++] = N >> (this.DB - S)))
                  : (this[this.t - 1] |= N << S),
              (S += c),
              S >= this.DB && (S -= this.DB);
          }
          c == 8 &&
            (i[0] & 128) != 0 &&
            ((this.s = -1),
            S > 0 && (this[this.t - 1] |= ((1 << (this.DB - S)) - 1) << S)),
            this.clamp(),
            w && l.ZERO.subTo(this, this);
        }
        function fr() {
          for (var i = this.s & this.DM; this.t > 0 && this[this.t - 1] == i; )
            --this.t;
        }
        function vr(i) {
          if (this.s < 0) return "-" + this.negate().toString(i);
          var n;
          if (i == 16) n = 4;
          else if (i == 8) n = 3;
          else if (i == 2) n = 1;
          else if (i == 32) n = 5;
          else if (i == 4) n = 2;
          else return this.toRadix(i);
          var c = (1 << n) - 1,
            f,
            w = !1,
            S = "",
            N = this.t,
            H = this.DB - ((N * this.DB) % n);
          if (N-- > 0)
            for (
              H < this.DB && (f = this[N] >> H) > 0 && ((w = !0), (S = Vr(f)));
              N >= 0;
            )
              H < n
                ? ((f = (this[N] & ((1 << H) - 1)) << (n - H)),
                  (f |= this[--N] >> (H += this.DB - n)))
                : ((f = (this[N] >> (H -= n)) & c),
                  H <= 0 && ((H += this.DB), --N)),
                f > 0 && (w = !0),
                w && (S += Vr(f));
          return w ? S : "0";
        }
        function Pr() {
          var i = e();
          return l.ZERO.subTo(this, i), i;
        }
        function F() {
          return this.s < 0 ? this.negate() : this;
        }
        function q(i) {
          var n = this.s - i.s;
          if (n != 0) return n;
          var c = this.t;
          if (((n = c - i.t), n != 0)) return n;
          for (; --c >= 0; ) if ((n = this[c] - i[c]) != 0) return n;
          return 0;
        }
        function K(i) {
          var n = 1,
            c;
          return (
            (c = i >>> 16) != 0 && ((i = c), (n += 16)),
            (c = i >> 8) != 0 && ((i = c), (n += 8)),
            (c = i >> 4) != 0 && ((i = c), (n += 4)),
            (c = i >> 2) != 0 && ((i = c), (n += 2)),
            (c = i >> 1) != 0 && ((i = c), (n += 1)),
            n
          );
        }
        function v() {
          return this.t <= 0
            ? 0
            : this.DB * (this.t - 1) + K(this[this.t - 1] ^ (this.s & this.DM));
        }
        function T(i, n) {
          var c;
          for (c = this.t - 1; c >= 0; --c) n[c + i] = this[c];
          for (c = i - 1; c >= 0; --c) n[c] = 0;
          (n.t = this.t + i), (n.s = this.s);
        }
        function X(i, n) {
          for (var c = i; c < this.t; ++c) n[c - i] = this[c];
          (n.t = Math.max(this.t - i, 0)), (n.s = this.s);
        }
        function J(i, n) {
          var c = i % this.DB,
            f = this.DB - c,
            w = (1 << f) - 1,
            S = Math.floor(i / this.DB),
            N = (this.s << c) & this.DM,
            H;
          for (H = this.t - 1; H >= 0; --H)
            (n[H + S + 1] = (this[H] >> f) | N), (N = (this[H] & w) << c);
          for (H = S - 1; H >= 0; --H) n[H] = 0;
          (n[S] = N), (n.t = this.t + S + 1), (n.s = this.s), n.clamp();
        }
        function Me(i, n) {
          n.s = this.s;
          var c = Math.floor(i / this.DB);
          if (c >= this.t) {
            n.t = 0;
            return;
          }
          var f = i % this.DB,
            w = this.DB - f,
            S = (1 << f) - 1;
          n[0] = this[c] >> f;
          for (var N = c + 1; N < this.t; ++N)
            (n[N - c - 1] |= (this[N] & S) << w), (n[N - c] = this[N] >> f);
          f > 0 && (n[this.t - c - 1] |= (this.s & S) << w),
            (n.t = this.t - c),
            n.clamp();
        }
        function Oe(i, n) {
          for (var c = 0, f = 0, w = Math.min(i.t, this.t); c < w; )
            (f += this[c] - i[c]), (n[c++] = f & this.DM), (f >>= this.DB);
          if (i.t < this.t) {
            for (f -= i.s; c < this.t; )
              (f += this[c]), (n[c++] = f & this.DM), (f >>= this.DB);
            f += this.s;
          } else {
            for (f += this.s; c < i.t; )
              (f -= i[c]), (n[c++] = f & this.DM), (f >>= this.DB);
            f -= i.s;
          }
          (n.s = f < 0 ? -1 : 0),
            f < -1 ? (n[c++] = this.DV + f) : f > 0 && (n[c++] = f),
            (n.t = c),
            n.clamp();
        }
        function kr(i, n) {
          var c = this.abs(),
            f = i.abs(),
            w = c.t;
          for (n.t = w + f.t; --w >= 0; ) n[w] = 0;
          for (w = 0; w < f.t; ++w) n[w + c.t] = c.am(0, f[w], n, w, 0, c.t);
          (n.s = 0), n.clamp(), this.s != i.s && l.ZERO.subTo(n, n);
        }
        function pe(i) {
          for (var n = this.abs(), c = (i.t = 2 * n.t); --c >= 0; ) i[c] = 0;
          for (c = 0; c < n.t - 1; ++c) {
            var f = n.am(c, n[c], i, 2 * c, 0, 1);
            (i[c + n.t] += n.am(
              c + 1,
              2 * n[c],
              i,
              2 * c + 1,
              f,
              n.t - c - 1,
            )) >= n.DV && ((i[c + n.t] -= n.DV), (i[c + n.t + 1] = 1));
          }
          i.t > 0 && (i[i.t - 1] += n.am(c, n[c], i, 2 * c, 0, 1)),
            (i.s = 0),
            i.clamp();
        }
        function be(i, n, c) {
          var f = i.abs();
          if (!(f.t <= 0)) {
            var w = this.abs();
            if (w.t < f.t) {
              n?.fromInt(0), c != null && this.copyTo(c);
              return;
            }
            c == null && (c = e());
            var S = e(),
              N = this.s,
              H = i.s,
              Or = this.DB - K(f[f.t - 1]);
            Or > 0
              ? (f.lShiftTo(Or, S), w.lShiftTo(Or, c))
              : (f.copyTo(S), w.copyTo(c));
            var le = S.t,
              he = S[le - 1];
            if (he != 0) {
              var xe =
                  he * (1 << this.F1) + (le > 1 ? S[le - 2] >> this.F2 : 0),
                Te = this.FV / xe,
                Ae = (1 << this.F1) / xe,
                He = 1 << this.F2,
                Ne = c.t,
                _e = Ne - le,
                Ye = n ?? e();
              for (
                S.dlShiftTo(_e, Ye),
                  c.compareTo(Ye) >= 0 && ((c[c.t++] = 1), c.subTo(Ye, c)),
                  l.ONE.dlShiftTo(le, Ye),
                  Ye.subTo(S, S);
                S.t < le;
              )
                S[S.t++] = 0;
              for (; --_e >= 0; ) {
                var st =
                  c[--Ne] == he
                    ? this.DM
                    : Math.floor(c[Ne] * Te + (c[Ne - 1] + He) * Ae);
                if ((c[Ne] += S.am(0, st, c, _e, 0, le)) < st)
                  for (S.dlShiftTo(_e, Ye), c.subTo(Ye, c); c[Ne] < --st; )
                    c.subTo(Ye, c);
              }
              n != null && (c.drShiftTo(le, n), N != H && l.ZERO.subTo(n, n)),
                (c.t = le),
                c.clamp(),
                Or > 0 && c.rShiftTo(Or, c),
                N < 0 && l.ZERO.subTo(c, c);
            }
          }
        }
        function Ve(i) {
          var n = e();
          return (
            this.abs().divRemTo(i, null, n),
            this.s < 0 && n.compareTo(l.ZERO) > 0 && i.subTo(n, n),
            n
          );
        }
        function gr(i) {
          this.m = i;
        }
        function G(i) {
          return i.s < 0 || i.compareTo(this.m) >= 0 ? i.mod(this.m) : i;
        }
        function d(i) {
          return i;
        }
        function Ge(i) {
          i.divRemTo(this.m, null, i);
        }
        function Qe(i, n, c) {
          i.multiplyTo(n, c), this.reduce(c);
        }
        function Hr(i, n) {
          i.squareTo(n), this.reduce(n);
        }
        (gr.prototype.convert = G),
          (gr.prototype.revert = d),
          (gr.prototype.reduce = Ge),
          (gr.prototype.mulTo = Qe),
          (gr.prototype.sqrTo = Hr);
        function Dr() {
          if (this.t < 1) return 0;
          var i = this[0];
          if ((i & 1) == 0) return 0;
          var n = i & 3;
          return (
            (n = (n * (2 - (i & 15) * n)) & 15),
            (n = (n * (2 - (i & 255) * n)) & 255),
            (n = (n * (2 - (((i & 65535) * n) & 65535))) & 65535),
            (n = (n * (2 - ((i * n) % this.DV))) % this.DV),
            n > 0 ? this.DV - n : -n
          );
        }
        function hr(i) {
          (this.m = i),
            (this.mp = i.invDigit()),
            (this.mpl = this.mp & 32767),
            (this.mph = this.mp >> 15),
            (this.um = (1 << (i.DB - 15)) - 1),
            (this.mt2 = 2 * i.t);
        }
        function Er(i) {
          var n = e();
          return (
            i.abs().dlShiftTo(this.m.t, n),
            n.divRemTo(this.m, null, n),
            i.s < 0 && n.compareTo(l.ZERO) > 0 && this.m.subTo(n, n),
            n
          );
        }
        function tr(i) {
          var n = e();
          return i.copyTo(n), this.reduce(n), n;
        }
        function nr(i) {
          for (; i.t <= this.mt2; ) i[i.t++] = 0;
          for (var n = 0; n < this.m.t; ++n) {
            var c = i[n] & 32767,
              f =
                (c * this.mpl +
                  (((c * this.mph + (i[n] >> 15) * this.mpl) & this.um) <<
                    15)) &
                i.DM;
            for (
              c = n + this.m.t, i[c] += this.m.am(0, f, i, n, 0, this.m.t);
              i[c] >= i.DV;
            )
              (i[c] -= i.DV), i[++c]++;
          }
          i.clamp(),
            i.drShiftTo(this.m.t, i),
            i.compareTo(this.m) >= 0 && i.subTo(this.m, i);
        }
        function ir(i, n) {
          i.squareTo(n), this.reduce(n);
        }
        function W(i, n, c) {
          i.multiplyTo(n, c), this.reduce(c);
        }
        (hr.prototype.convert = Er),
          (hr.prototype.revert = tr),
          (hr.prototype.reduce = nr),
          (hr.prototype.mulTo = W),
          (hr.prototype.sqrTo = ir);
        function U() {
          return (this.t > 0 ? this[0] & 1 : this.s) == 0;
        }
        function Y(i, n) {
          if (i > 4294967295 || i < 1) return l.ONE;
          var c = e(),
            f = e(),
            w = n.convert(this),
            S = K(i) - 1;
          for (w.copyTo(c); --S >= 0; )
            if ((n.sqrTo(c, f), (i & (1 << S)) > 0)) n.mulTo(f, w, c);
            else {
              var N = c;
              (c = f), (f = N);
            }
          return n.revert(c);
        }
        function $(i, n) {
          var c;
          return (
            i < 256 || n.isEven() ? (c = new gr(n)) : (c = new hr(n)),
            this.exp(i, c)
          );
        }
        (l.prototype.copyTo = Ur),
          (l.prototype.fromInt = Tr),
          (l.prototype.fromString = jr),
          (l.prototype.clamp = fr),
          (l.prototype.dlShiftTo = T),
          (l.prototype.drShiftTo = X),
          (l.prototype.lShiftTo = J),
          (l.prototype.rShiftTo = Me),
          (l.prototype.subTo = Oe),
          (l.prototype.multiplyTo = kr),
          (l.prototype.squareTo = pe),
          (l.prototype.divRemTo = be),
          (l.prototype.invDigit = Dr),
          (l.prototype.isEven = U),
          (l.prototype.exp = Y),
          (l.prototype.toString = vr),
          (l.prototype.negate = Pr),
          (l.prototype.abs = F),
          (l.prototype.compareTo = q),
          (l.prototype.bitLength = v),
          (l.prototype.mod = Ve),
          (l.prototype.modPowInt = $),
          (l.ZERO = V(0)),
          (l.ONE = V(1));
        function sr() {
          var i = e();
          return this.copyTo(i), i;
        }
        function k() {
          if (this.s < 0) {
            if (this.t == 1) return this[0] - this.DV;
            if (this.t == 0) return -1;
          } else {
            if (this.t == 1) return this[0];
            if (this.t == 0) return 0;
          }
          return ((this[1] & ((1 << (32 - this.DB)) - 1)) << this.DB) | this[0];
        }
        function C() {
          return this.t == 0 ? this.s : (this[0] << 24) >> 24;
        }
        function or() {
          return this.t == 0 ? this.s : (this[0] << 16) >> 16;
        }
        function mr(i) {
          return Math.floor((Math.LN2 * this.DB) / Math.log(i));
        }
        function dr() {
          return this.s < 0
            ? -1
            : this.t <= 0 || (this.t == 1 && this[0] <= 0)
              ? 0
              : 1;
        }
        function Br(i) {
          if ((i == null && (i = 10), this.signum() == 0 || i < 2 || i > 36))
            return "0";
          var n = this.chunkSize(i),
            c = Math.pow(i, n),
            f = V(c),
            w = e(),
            S = e(),
            N = "";
          for (this.divRemTo(f, w, S); w.signum() > 0; )
            (N = (c + S.intValue()).toString(i).substr(1) + N),
              w.divRemTo(f, w, S);
          return S.intValue().toString(i) + N;
        }
        function Wr(i, n) {
          this.fromInt(0), n == null && (n = 10);
          for (
            var c = this.chunkSize(n),
              f = Math.pow(n, c),
              w = !1,
              S = 0,
              N = 0,
              H = 0;
            H < i.length;
            ++H
          ) {
            var Or = cr(i, H);
            if (Or < 0) {
              i.charAt(H) == "-" && this.signum() == 0 && (w = !0);
              continue;
            }
            (N = n * N + Or),
              ++S >= c &&
                (this.dMultiply(f), this.dAddOffset(N, 0), (S = 0), (N = 0));
          }
          S > 0 && (this.dMultiply(Math.pow(n, S)), this.dAddOffset(N, 0)),
            w && l.ZERO.subTo(this, this);
        }
        function $r(i, n, c) {
          if (typeof n == "number")
            if (i < 2) this.fromInt(1);
            else
              for (
                this.fromNumber(i, c),
                  this.testBit(i - 1) ||
                    this.bitwiseTo(l.ONE.shiftLeft(i - 1), Z, this),
                  this.isEven() && this.dAddOffset(1, 0);
                !this.isProbablePrime(n);
              )
                this.dAddOffset(2, 0),
                  this.bitLength() > i &&
                    this.subTo(l.ONE.shiftLeft(i - 1), this);
          else {
            var f = new Array(),
              w = i & 7;
            (f.length = (i >> 3) + 1),
              n.nextBytes(f),
              w > 0 ? (f[0] &= (1 << w) - 1) : (f[0] = 0),
              this.fromString(f, 256);
          }
        }
        function Se() {
          var i = this.t,
            n = new Array();
          n[0] = this.s;
          var c = this.DB - ((i * this.DB) % 8),
            f,
            w = 0;
          if (i-- > 0)
            for (
              c < this.DB &&
              (f = this[i] >> c) != (this.s & this.DM) >> c &&
              (n[w++] = f | (this.s << (this.DB - c)));
              i >= 0;
            )
              c < 8
                ? ((f = (this[i] & ((1 << c) - 1)) << (8 - c)),
                  (f |= this[--i] >> (c += this.DB - 8)))
                : ((f = (this[i] >> (c -= 8)) & 255),
                  c <= 0 && ((c += this.DB), --i)),
                (f & 128) != 0 && (f |= -256),
                w == 0 && (this.s & 128) != (f & 128) && ++w,
                (w > 0 || f != this.s) && (n[w++] = f);
          return n;
        }
        function u(i) {
          return this.compareTo(i) == 0;
        }
        function y(i) {
          return this.compareTo(i) < 0 ? this : i;
        }
        function O(i) {
          return this.compareTo(i) > 0 ? this : i;
        }
        function I(i, n, c) {
          var f,
            w,
            S = Math.min(i.t, this.t);
          for (f = 0; f < S; ++f) c[f] = n(this[f], i[f]);
          if (i.t < this.t) {
            for (w = i.s & this.DM, f = S; f < this.t; ++f)
              c[f] = n(this[f], w);
            c.t = this.t;
          } else {
            for (w = this.s & this.DM, f = S; f < i.t; ++f) c[f] = n(w, i[f]);
            c.t = i.t;
          }
          (c.s = n(this.s, i.s)), c.clamp();
        }
        function E(i, n) {
          return i & n;
        }
        function L(i) {
          var n = e();
          return this.bitwiseTo(i, E, n), n;
        }
        function Z(i, n) {
          return i | n;
        }
        function R(i) {
          var n = e();
          return this.bitwiseTo(i, Z, n), n;
        }
        function ar(i, n) {
          return i ^ n;
        }
        function Kr(i) {
          var n = e();
          return this.bitwiseTo(i, ar, n), n;
        }
        function Fr(i, n) {
          return i & ~n;
        }
        function Ar(i) {
          var n = e();
          return this.bitwiseTo(i, Fr, n), n;
        }
        function ue() {
          for (var i = e(), n = 0; n < this.t; ++n) i[n] = this.DM & ~this[n];
          return (i.t = this.t), (i.s = ~this.s), i;
        }
        function Lr(i) {
          var n = e();
          return i < 0 ? this.rShiftTo(-i, n) : this.lShiftTo(i, n), n;
        }
        function ze(i) {
          var n = e();
          return i < 0 ? this.lShiftTo(-i, n) : this.rShiftTo(i, n), n;
        }
        function Zr(i) {
          if (i == 0) return -1;
          var n = 0;
          return (
            (i & 65535) == 0 && ((i >>= 16), (n += 16)),
            (i & 255) == 0 && ((i >>= 8), (n += 8)),
            (i & 15) == 0 && ((i >>= 4), (n += 4)),
            (i & 3) == 0 && ((i >>= 2), (n += 2)),
            (i & 1) == 0 && ++n,
            n
          );
        }
        function Jr() {
          for (var i = 0; i < this.t; ++i)
            if (this[i] != 0) return i * this.DB + Zr(this[i]);
          return this.s < 0 ? this.t * this.DB : -1;
        }
        function Gr(i) {
          for (var n = 0; i != 0; ) (i &= i - 1), ++n;
          return n;
        }
        function qr() {
          for (var i = 0, n = this.s & this.DM, c = 0; c < this.t; ++c)
            i += Gr(this[c] ^ n);
          return i;
        }
        function Sr(i) {
          var n = Math.floor(i / this.DB);
          return n >= this.t
            ? this.s != 0
            : (this[n] & (1 << (i % this.DB))) != 0;
        }
        function _r(i, n) {
          var c = l.ONE.shiftLeft(i);
          return this.bitwiseTo(c, n, c), c;
        }
        function ne(i) {
          return this.changeBit(i, Z);
        }
        function Cr(i) {
          return this.changeBit(i, Fr);
        }
        function Pe(i) {
          return this.changeBit(i, ar);
        }
        function re(i, n) {
          for (var c = 0, f = 0, w = Math.min(i.t, this.t); c < w; )
            (f += this[c] + i[c]), (n[c++] = f & this.DM), (f >>= this.DB);
          if (i.t < this.t) {
            for (f += i.s; c < this.t; )
              (f += this[c]), (n[c++] = f & this.DM), (f >>= this.DB);
            f += this.s;
          } else {
            for (f += this.s; c < i.t; )
              (f += i[c]), (n[c++] = f & this.DM), (f >>= this.DB);
            f += i.s;
          }
          (n.s = f < 0 ? -1 : 0),
            f > 0 ? (n[c++] = f) : f < -1 && (n[c++] = this.DV + f),
            (n.t = c),
            n.clamp();
        }
        function Qr(i) {
          var n = e();
          return this.addTo(i, n), n;
        }
        function Rr(i) {
          var n = e();
          return this.subTo(i, n), n;
        }
        function We(i) {
          var n = e();
          return this.multiplyTo(i, n), n;
        }
        function xr(i) {
          var n = e();
          return this.divRemTo(i, n, null), n;
        }
        function ee(i) {
          var n = e();
          return this.divRemTo(i, null, n), n;
        }
        function te(i) {
          var n = e(),
            c = e();
          return this.divRemTo(i, n, c), new Array(n, c);
        }
        function ie(i) {
          (this[this.t] = this.am(0, i - 1, this, 0, 0, this.t)),
            ++this.t,
            this.clamp();
        }
        function Xr(i, n) {
          for (; this.t <= n; ) this[this.t++] = 0;
          for (this[n] += i; this[n] >= this.DV; )
            (this[n] -= this.DV),
              ++n >= this.t && (this[this.t++] = 0),
              ++this[n];
        }
        function Fe() {}
        function Je(i) {
          return i;
        }
        function ke(i, n, c) {
          i.multiplyTo(n, c);
        }
        function Q(i, n) {
          i.squareTo(n);
        }
        (Fe.prototype.convert = Je),
          (Fe.prototype.revert = Je),
          (Fe.prototype.mulTo = ke),
          (Fe.prototype.sqrTo = Q);
        function r(i) {
          return this.exp(i, new Fe());
        }
        function a(i, n, c) {
          var f = Math.min(this.t + i.t, n);
          for (c.s = 0, c.t = f; f > 0; ) c[--f] = 0;
          var w;
          for (w = c.t - this.t; f < w; ++f)
            c[f + this.t] = this.am(0, i[f], c, f, 0, this.t);
          for (w = Math.min(i.t, n); f < w; ++f)
            this.am(0, i[f], c, f, 0, n - f);
          c.clamp();
        }
        function x(i, n, c) {
          --n;
          var f = (c.t = this.t + i.t - n);
          for (c.s = 0; --f >= 0; ) c[f] = 0;
          for (f = Math.max(n - this.t, 0); f < i.t; ++f)
            c[this.t + f - n] = this.am(n - f, i[f], c, 0, 0, this.t + f - n);
          c.clamp(), c.drShiftTo(1, c);
        }
        function ve(i) {
          (this.r2 = e()),
            (this.q3 = e()),
            l.ONE.dlShiftTo(2 * i.t, this.r2),
            (this.mu = this.r2.divide(i)),
            (this.m = i);
        }
        function j(i) {
          if (i.s < 0 || i.t > 2 * this.m.t) return i.mod(this.m);
          if (i.compareTo(this.m) < 0) return i;
          var n = e();
          return i.copyTo(n), this.reduce(n), n;
        }
        function Ie(i) {
          return i;
        }
        function Ee(i) {
          for (
            i.drShiftTo(this.m.t - 1, this.r2),
              i.t > this.m.t + 1 && ((i.t = this.m.t + 1), i.clamp()),
              this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3),
              this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2);
            i.compareTo(this.r2) < 0;
          )
            i.dAddOffset(1, this.m.t + 1);
          for (i.subTo(this.r2, i); i.compareTo(this.m) >= 0; )
            i.subTo(this.m, i);
        }
        function Le(i, n) {
          i.squareTo(n), this.reduce(n);
        }
        function rt(i, n, c) {
          i.multiplyTo(n, c), this.reduce(c);
        }
        (ve.prototype.convert = j),
          (ve.prototype.revert = Ie),
          (ve.prototype.reduce = Ee),
          (ve.prototype.mulTo = rt),
          (ve.prototype.sqrTo = Le);
        function Ce(i, n) {
          var c = i.bitLength(),
            f,
            w = V(1),
            S;
          if (c <= 0) return w;
          c < 18
            ? (f = 1)
            : c < 48
              ? (f = 3)
              : c < 144
                ? (f = 4)
                : c < 768
                  ? (f = 5)
                  : (f = 6),
            c < 8
              ? (S = new gr(n))
              : n.isEven()
                ? (S = new ve(n))
                : (S = new hr(n));
          var N = new Array(),
            H = 3,
            Or = f - 1,
            le = (1 << f) - 1;
          if (((N[1] = S.convert(this)), f > 1)) {
            var he = e();
            for (S.sqrTo(N[1], he); H <= le; )
              (N[H] = e()), S.mulTo(he, N[H - 2], N[H]), (H += 2);
          }
          var xe = i.t - 1,
            Te,
            Ae = !0,
            He = e(),
            Ne;
          for (c = K(i[xe]) - 1; xe >= 0; ) {
            for (
              c >= Or
                ? (Te = (i[xe] >> (c - Or)) & le)
                : ((Te = (i[xe] & ((1 << (c + 1)) - 1)) << (Or - c)),
                  xe > 0 && (Te |= i[xe - 1] >> (this.DB + c - Or))),
                H = f;
              (Te & 1) == 0;
            )
              (Te >>= 1), --H;
            if (((c -= H) < 0 && ((c += this.DB), --xe), Ae))
              N[Te].copyTo(w), (Ae = !1);
            else {
              for (; H > 1; ) S.sqrTo(w, He), S.sqrTo(He, w), (H -= 2);
              H > 0 ? S.sqrTo(w, He) : ((Ne = w), (w = He), (He = Ne)),
                S.mulTo(He, N[Te], w);
            }
            for (; xe >= 0 && (i[xe] & (1 << c)) == 0; )
              S.sqrTo(w, He),
                (Ne = w),
                (w = He),
                (He = Ne),
                --c < 0 && ((c = this.DB - 1), --xe);
          }
          return S.revert(w);
        }
        function Re(i) {
          var n = this.s < 0 ? this.negate() : this.clone(),
            c = i.s < 0 ? i.negate() : i.clone();
          if (n.compareTo(c) < 0) {
            var f = n;
            (n = c), (c = f);
          }
          var w = n.getLowestSetBit(),
            S = c.getLowestSetBit();
          if (S < 0) return n;
          for (
            w < S && (S = w), S > 0 && (n.rShiftTo(S, n), c.rShiftTo(S, c));
            n.signum() > 0;
          )
            (w = n.getLowestSetBit()) > 0 && n.rShiftTo(w, n),
              (w = c.getLowestSetBit()) > 0 && c.rShiftTo(w, c),
              n.compareTo(c) >= 0
                ? (n.subTo(c, n), n.rShiftTo(1, n))
                : (c.subTo(n, c), c.rShiftTo(1, c));
          return S > 0 && c.lShiftTo(S, c), c;
        }
        function et(i) {
          if (i <= 0) return 0;
          var n = this.DV % i,
            c = this.s < 0 ? i - 1 : 0;
          if (this.t > 0)
            if (n == 0) c = this[0] % i;
            else
              for (var f = this.t - 1; f >= 0; --f) c = (n * c + this[f]) % i;
          return c;
        }
        function tt(i) {
          var n = i.isEven();
          if ((this.isEven() && n) || i.signum() == 0) return l.ZERO;
          for (
            var c = i.clone(),
              f = this.clone(),
              w = V(1),
              S = V(0),
              N = V(0),
              H = V(1);
            c.signum() != 0;
          ) {
            for (; c.isEven(); )
              c.rShiftTo(1, c),
                n
                  ? ((!w.isEven() || !S.isEven()) &&
                      (w.addTo(this, w), S.subTo(i, S)),
                    w.rShiftTo(1, w))
                  : S.isEven() || S.subTo(i, S),
                S.rShiftTo(1, S);
            for (; f.isEven(); )
              f.rShiftTo(1, f),
                n
                  ? ((!N.isEven() || !H.isEven()) &&
                      (N.addTo(this, N), H.subTo(i, H)),
                    N.rShiftTo(1, N))
                  : H.isEven() || H.subTo(i, H),
                H.rShiftTo(1, H);
            c.compareTo(f) >= 0
              ? (c.subTo(f, c), n && w.subTo(N, w), S.subTo(H, S))
              : (f.subTo(c, f), n && N.subTo(w, N), H.subTo(S, H));
          }
          if (f.compareTo(l.ONE) != 0) return l.ZERO;
          if (H.compareTo(i) >= 0) return H.subtract(i);
          if (H.signum() < 0) H.addTo(i, H);
          else return H;
          return H.signum() < 0 ? H.add(i) : H;
        }
        var we = [
            2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61,
            67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137,
            139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199,
            211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277,
            281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359,
            367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439,
            443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509,
          ],
          Nr = (1 << 26) / we[we.length - 1];
        function Mr(i) {
          var n,
            c = this.abs();
          if (c.t == 1 && c[0] <= we[we.length - 1]) {
            for (n = 0; n < we.length; ++n) if (c[0] == we[n]) return !0;
            return !1;
          }
          if (c.isEven()) return !1;
          for (n = 1; n < we.length; ) {
            for (var f = we[n], w = n + 1; w < we.length && f < Nr; )
              f *= we[w++];
            for (f = c.modInt(f); n < w; ) if (f % we[n++] == 0) return !1;
          }
          return c.millerRabin(i);
        }
        function Yr(i) {
          var n = this.subtract(l.ONE),
            c = n.getLowestSetBit();
          if (c <= 0) return !1;
          var f = n.shiftRight(c);
          (i = (i + 1) >> 1), i > we.length && (i = we.length);
          for (var w = e(), S = 0; S < i; ++S) {
            w.fromInt(we[S]);
            var N = w.modPow(f, this);
            if (N.compareTo(l.ONE) != 0 && N.compareTo(n) != 0) {
              for (var H = 1; H++ < c && N.compareTo(n) != 0; )
                if (((N = N.modPowInt(2, this)), N.compareTo(l.ONE) == 0))
                  return !1;
              if (N.compareTo(n) != 0) return !1;
            }
          }
          return !0;
        }
        (l.prototype.chunkSize = mr),
          (l.prototype.toRadix = Br),
          (l.prototype.fromRadix = Wr),
          (l.prototype.fromNumber = $r),
          (l.prototype.bitwiseTo = I),
          (l.prototype.changeBit = _r),
          (l.prototype.addTo = re),
          (l.prototype.dMultiply = ie),
          (l.prototype.dAddOffset = Xr),
          (l.prototype.multiplyLowerTo = a),
          (l.prototype.multiplyUpperTo = x),
          (l.prototype.modInt = et),
          (l.prototype.millerRabin = Yr),
          (l.prototype.clone = sr),
          (l.prototype.intValue = k),
          (l.prototype.byteValue = C),
          (l.prototype.shortValue = or),
          (l.prototype.signum = dr),
          (l.prototype.toByteArray = Se),
          (l.prototype.equals = u),
          (l.prototype.min = y),
          (l.prototype.max = O),
          (l.prototype.and = L),
          (l.prototype.or = R),
          (l.prototype.xor = Kr),
          (l.prototype.andNot = Ar),
          (l.prototype.not = ue),
          (l.prototype.shiftLeft = Lr),
          (l.prototype.shiftRight = ze),
          (l.prototype.getLowestSetBit = Jr),
          (l.prototype.bitCount = qr),
          (l.prototype.testBit = Sr),
          (l.prototype.setBit = ne),
          (l.prototype.clearBit = Cr),
          (l.prototype.flipBit = Pe),
          (l.prototype.add = Qr),
          (l.prototype.subtract = Rr),
          (l.prototype.multiply = We),
          (l.prototype.divide = xr),
          (l.prototype.remainder = ee),
          (l.prototype.divideAndRemainder = te),
          (l.prototype.modPow = Ce),
          (l.prototype.modInverse = tt),
          (l.prototype.pow = r),
          (l.prototype.gcd = Re),
          (l.prototype.isProbablePrime = Mr);
        const it = l;
        var dt = function (i, n) {
            (this.modulus = new it(i, 16)),
              (this.encryptionExponent = new it(n, 16));
          },
          ot = {
            base64:
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            encode: function (i) {
              if (!i) return !1;
              var n = "",
                c,
                f,
                w,
                S,
                N,
                H,
                Or,
                le = 0;
              do
                (c = i.charCodeAt(le++)),
                  (f = i.charCodeAt(le++)),
                  (w = i.charCodeAt(le++)),
                  (S = c >> 2),
                  (N = ((c & 3) << 4) | (f >> 4)),
                  (H = ((f & 15) << 2) | (w >> 6)),
                  (Or = w & 63),
                  isNaN(f) ? (H = Or = 64) : isNaN(w) && (Or = 64),
                  (n +=
                    this.base64.charAt(S) +
                    this.base64.charAt(N) +
                    this.base64.charAt(H) +
                    this.base64.charAt(Or));
              while (le < i.length);
              return n;
            },
            decode: function (i) {
              if (!i) return !1;
              i = i.replace(/[^A-Za-z0-9\+\/\=]/g, "");
              var n = "",
                c,
                f,
                w,
                S,
                N = 0;
              do
                (c = this.base64.indexOf(i.charAt(N++))),
                  (f = this.base64.indexOf(i.charAt(N++))),
                  (w = this.base64.indexOf(i.charAt(N++))),
                  (S = this.base64.indexOf(i.charAt(N++))),
                  (n += String.fromCharCode((c << 2) | (f >> 4))),
                  w != 64 &&
                    (n += String.fromCharCode(((f & 15) << 4) | (w >> 2))),
                  S != 64 && (n += String.fromCharCode(((w & 3) << 6) | S));
              while (N < i.length);
              return n;
            },
          },
          ft = {
            hex: "0123456789abcdef",
            encode: function (i) {
              if (!i) return !1;
              var n = "",
                c,
                f = 0;
              do
                (c = i.charCodeAt(f++)),
                  (n +=
                    this.hex.charAt((c >> 4) & 15) + this.hex.charAt(c & 15));
              while (f < i.length);
              return n;
            },
            decode: function (i) {
              if (!i) return !1;
              i = i.replace(/[^0-9abcdef]/g, "");
              var n = "",
                c = 0;
              do
                n += String.fromCharCode(
                  ((this.hex.indexOf(i.charAt(c++)) << 4) & 240) |
                    (this.hex.indexOf(i.charAt(c++)) & 15),
                );
              while (c < i.length);
              return n;
            },
          },
          gt = {
            getPublicKey: function (i, n) {
              return new dt(i, n);
            },
            encrypt: function (i, n) {
              return !n ||
                ((i = this.pkcs1pad2(i, (n.modulus.bitLength() + 7) >> 3)),
                !i) ||
                ((i = i.modPowInt(n.encryptionExponent, n.modulus)), !i)
                ? !1
                : ((i = i.toString(16)),
                  (i.length & 1) == 1 && (i = "0" + i),
                  ot.encode(ft.decode(i)));
            },
            pkcs1pad2: function (i, n) {
              if (n < i.length + 11) return null;
              for (var c = [], f = i.length - 1; f >= 0 && n > 0; )
                c[--n] = i.charCodeAt(f--);
              for (c[--n] = 0; n > 2; )
                c[--n] = Math.floor(Math.random() * 254) + 1;
              return (c[--n] = 2), (c[--n] = 0), new it(c);
            },
          };
        const bt = gt;
      },
    },
  ]);
})();
