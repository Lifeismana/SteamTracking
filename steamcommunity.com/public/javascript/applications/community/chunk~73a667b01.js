/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [40253],
    {
      95039: (Ut, tr, v) => {
        "use strict";
        v.d(tr, { fH: () => Kt, nW: () => b });
        const m = null,
          Kt = 0,
          b = 1;
      },
      94276: (Ut, tr, v) => {
        "use strict";
        v.d(tr, {
          kX: () => oe,
          iP: () => ai,
          R9: () => si,
          tS: () => Lr,
          qu: () => ii,
          Ev: () => oi,
          Qc: () => vr,
          TY: () => m,
          SS: () => Kt,
        });
        var m = {};
        v.r(m),
          v.d(m, {
            bH: () => N,
            x0: () => ce,
            Xs: () => Ft,
            $Y: () => or,
            ig: () => rr,
            WM: () => Et,
            oP: () => $t,
          });
        var Kt = {};
        v.r(Kt), v.d(Kt, { w0: () => E, tS: () => se });
        var b = v(80613),
          l = v.n(b),
          t = v(75245),
          H = v(35038),
          Yt = v(95039),
          L = v(40164);
        const $t = 0,
          Et = 1,
          Ft = 2,
          N = 3,
          ce = 4,
          or = 5,
          rr = 6,
          Nt = 7,
          bt = 0,
          E = 1,
          se = 2,
          V = 3,
          ee = 0,
          wt = 1,
          te = 2,
          Wt = 3,
          F = 4,
          y = 5,
          W = 6,
          z = 7;
        var _ = Object.defineProperty,
          re = (A, e, s) =>
            e in A
              ? _(A, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: s,
                })
              : (A[e] = s),
          S = (A, e, s) => re(A, typeof e != "symbol" ? e + "" : e, s);
        function ne(A) {
          return "unknown ECaptchaAnnotation ( " + A + " )";
        }
        function ur(A) {
          return "unknown EAuthSessionSecurityHistory ( " + A + " )";
        }
        function mr(A) {
          return "unknown EAuthenticationType ( " + A + " )";
        }
        function lr(A) {
          return "unknown EAuthSessionGuardType ( " + A + " )";
        }
        function k(A) {
          return "unknown EAuthTokenPlatformType ( " + A + " )";
        }
        function x(A) {
          return "unknown EAuthTokenAppType ( " + A + " )";
        }
        function u(A) {
          return "unknown ETokenRenewalType ( " + A + " )";
        }
        function Ci(A) {
          return "unknown EAuthTokenRevokeAction ( " + A + " )";
        }
        function Ri(A) {
          return "unknown EAuthTokenState ( " + A + " )";
        }
        function Z(A) {
          return "unknown ECaptchaUsage ( " + A + " )";
        }
        function Fi(A) {
          return "unknown ECaptchaType ( " + A + " )";
        }
        function dr(A) {
          return "unknown ECaptchaDifficulty ( " + A + " )";
        }
        function ti(A) {
          return "unknown ERiskLevel ( " + A + " )";
        }
        function vi(A) {
          return "unknown ETokenRiskFactor ( " + A + " )";
        }
        function ri(A) {
          return "unknown EConfirmationState ( " + A + " )";
        }
        function Ti(A) {
          return "unknown EConfirmationRequestType ( " + A + " )";
        }
        const fr = class de extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              de.prototype.account_name || t.Sg(de.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              de.sm_m ||
                (de.sm_m = {
                  proto: de,
                  fields: {
                    account_name: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              de.sm_m
            );
          }
          static MBF() {
            return de.sm_mbf || (de.sm_mbf = t.w0(de.M())), de.sm_mbf;
          }
          toObject(e = !1) {
            return de.toObject(e, this);
          }
          static toObject(e, s) {
            return t.BT(de.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(de.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new de();
            return de.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(de.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return de.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(de.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              de.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_GetPasswordRSAPublicKey_Request";
          }
        };
        S(fr, "sm_m"), S(fr, "sm_mbf");
        let ii = fr;
        const hr = class fe extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              fe.prototype.publickey_mod || t.Sg(fe.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              fe.sm_m ||
                (fe.sm_m = {
                  proto: fe,
                  fields: {
                    publickey_mod: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    publickey_exp: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    timestamp: {
                      n: 3,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              fe.sm_m
            );
          }
          static MBF() {
            return fe.sm_mbf || (fe.sm_mbf = t.w0(fe.M())), fe.sm_mbf;
          }
          toObject(e = !1) {
            return fe.toObject(e, this);
          }
          static toObject(e, s) {
            return t.BT(fe.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(fe.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new fe();
            return fe.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(fe.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(fe.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              fe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_GetPasswordRSAPublicKey_Response";
          }
        };
        S(hr, "sm_m"), S(hr, "sm_mbf");
        let fi = hr;
        const gr = class he extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              he.prototype.device_friendly_name || t.Sg(he.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              he.sm_m ||
                (he.sm_m = {
                  proto: he,
                  fields: {
                    device_friendly_name: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    platform_type: {
                      n: 2,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    os_type: { n: 3, br: t.qM.readInt32, bw: t.gp.writeInt32 },
                    gaming_device_type: {
                      n: 4,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    client_count: {
                      n: 5,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    machine_id: {
                      n: 6,
                      br: t.qM.readBytes,
                      bw: t.gp.writeBytes,
                    },
                    app_type: { n: 7, br: t.qM.readEnum, bw: t.gp.writeEnum },
                  },
                }),
              he.sm_m
            );
          }
          static MBF() {
            return he.sm_mbf || (he.sm_mbf = t.w0(he.M())), he.sm_mbf;
          }
          toObject(e = !1) {
            return he.toObject(e, this);
          }
          static toObject(e, s) {
            return t.BT(he.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(he.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new he();
            return he.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(he.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return he.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(he.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              he.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_DeviceDetails";
          }
        };
        S(gr, "sm_m"), S(gr, "sm_mbf");
        let Lr = gr;
        const pr = class ge extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ge.prototype.confirmation_type || t.Sg(ge.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              ge.sm_m ||
                (ge.sm_m = {
                  proto: ge,
                  fields: {
                    confirmation_type: {
                      n: 1,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    associated_message: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              ge.sm_m
            );
          }
          static MBF() {
            return ge.sm_mbf || (ge.sm_mbf = t.w0(ge.M())), ge.sm_mbf;
          }
          toObject(e = !1) {
            return ge.toObject(e, this);
          }
          static toObject(e, s) {
            return t.BT(ge.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(ge.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new ge();
            return ge.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(ge.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(ge.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              ge.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_AllowedConfirmation";
          }
        };
        S(pr, "sm_m"), S(pr, "sm_mbf");
        let ni = pr;
        const br = class pe extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              pe.prototype.device_friendly_name || t.Sg(pe.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              pe.sm_m ||
                (pe.sm_m = {
                  proto: pe,
                  fields: {
                    device_friendly_name: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    platform_type: {
                      n: 2,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    device_details: { n: 3, c: Lr },
                    website_id: {
                      n: 4,
                      d: "Unknown",
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              pe.sm_m
            );
          }
          static MBF() {
            return pe.sm_mbf || (pe.sm_mbf = t.w0(pe.M())), pe.sm_mbf;
          }
          toObject(e = !1) {
            return pe.toObject(e, this);
          }
          static toObject(e, s) {
            return t.BT(pe.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(pe.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new pe();
            return pe.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(pe.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(pe.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              pe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_BeginAuthSessionViaQR_Request";
          }
        };
        S(br, "sm_m"), S(br, "sm_mbf");
        let si = br;
        const wr = class be extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              be.prototype.client_id || t.Sg(be.M()),
              b.Message.initialize(this, e, 0, -1, [5], null);
          }
          static M() {
            return (
              be.sm_m ||
                (be.sm_m = {
                  proto: be,
                  fields: {
                    client_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    challenge_url: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    request_id: {
                      n: 3,
                      br: t.qM.readBytes,
                      bw: t.gp.writeBytes,
                    },
                    interval: { n: 4, br: t.qM.readFloat, bw: t.gp.writeFloat },
                    allowed_confirmations: { n: 5, c: ni, r: !0, q: !0 },
                    version: { n: 6, br: t.qM.readInt32, bw: t.gp.writeInt32 },
                  },
                }),
              be.sm_m
            );
          }
          static MBF() {
            return be.sm_mbf || (be.sm_mbf = t.w0(be.M())), be.sm_mbf;
          }
          toObject(e = !1) {
            return be.toObject(e, this);
          }
          static toObject(e, s) {
            return t.BT(be.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(be.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new be();
            return be.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(be.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return be.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(be.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              be.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_BeginAuthSessionViaQR_Response";
          }
        };
        S(wr, "sm_m"), S(wr, "sm_mbf");
        let hi = wr;
        const Br = class we extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              we.prototype.device_friendly_name || t.Sg(we.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              we.sm_m ||
                (we.sm_m = {
                  proto: we,
                  fields: {
                    device_friendly_name: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    account_name: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    encrypted_password: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    encryption_timestamp: {
                      n: 4,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    remember_login: {
                      n: 5,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    platform_type: {
                      n: 6,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    persistence: {
                      n: 7,
                      d: Yt.nW,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    website_id: {
                      n: 8,
                      d: "Unknown",
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    device_details: { n: 9, c: Lr },
                    guard_data: {
                      n: 10,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    language: {
                      n: 11,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    qos_level: {
                      n: 12,
                      d: 2,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                  },
                }),
              we.sm_m
            );
          }
          static MBF() {
            return we.sm_mbf || (we.sm_mbf = t.w0(we.M())), we.sm_mbf;
          }
          toObject(e = !1) {
            return we.toObject(e, this);
          }
          static toObject(e, s) {
            return t.BT(we.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(we.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new we();
            return we.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(we.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return we.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(we.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              we.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_BeginAuthSessionViaCredentials_Request";
          }
        };
        S(Br, "sm_m"), S(Br, "sm_mbf");
        let ai = Br;
        const yr = class Be extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Be.prototype.client_id || t.Sg(Be.M()),
              b.Message.initialize(this, e, 0, -1, [4], null);
          }
          static M() {
            return (
              Be.sm_m ||
                (Be.sm_m = {
                  proto: Be,
                  fields: {
                    client_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    request_id: {
                      n: 2,
                      br: t.qM.readBytes,
                      bw: t.gp.writeBytes,
                    },
                    interval: { n: 3, br: t.qM.readFloat, bw: t.gp.writeFloat },
                    allowed_confirmations: { n: 4, c: ni, r: !0, q: !0 },
                    steamid: {
                      n: 5,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    weak_token: {
                      n: 6,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    agreement_session_url: {
                      n: 7,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    extended_error_message: {
                      n: 8,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              Be.sm_m
            );
          }
          static MBF() {
            return Be.sm_mbf || (Be.sm_mbf = t.w0(Be.M())), Be.sm_mbf;
          }
          toObject(e = !1) {
            return Be.toObject(e, this);
          }
          static toObject(e, s) {
            return t.BT(Be.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(Be.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new Be();
            return Be.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(Be.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Be.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(Be.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Be.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_BeginAuthSessionViaCredentials_Response";
          }
        };
        S(yr, "sm_m"), S(yr, "sm_mbf");
        let gi = yr;
        const Sr = class ye extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ye.prototype.client_id || t.Sg(ye.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              ye.sm_m ||
                (ye.sm_m = {
                  proto: ye,
                  fields: {
                    client_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    request_id: {
                      n: 2,
                      br: t.qM.readBytes,
                      bw: t.gp.writeBytes,
                    },
                    token_to_revoke: {
                      n: 3,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              ye.sm_m
            );
          }
          static MBF() {
            return ye.sm_mbf || (ye.sm_mbf = t.w0(ye.M())), ye.sm_mbf;
          }
          toObject(e = !1) {
            return ye.toObject(e, this);
          }
          static toObject(e, s) {
            return t.BT(ye.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(ye.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new ye();
            return ye.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(ye.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(ye.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              ye.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_PollAuthSessionStatus_Request";
          }
        };
        S(Sr, "sm_m"), S(Sr, "sm_mbf");
        let oi = Sr;
        const Ct = class Se extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Se.prototype.new_client_id || t.Sg(Se.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Se.sm_m ||
                (Se.sm_m = {
                  proto: Se,
                  fields: {
                    new_client_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    new_challenge_url: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    refresh_token: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    access_token: {
                      n: 4,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    had_remote_interaction: {
                      n: 5,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    account_name: {
                      n: 6,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    new_guard_data: {
                      n: 7,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    agreement_session_url: {
                      n: 8,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              Se.sm_m
            );
          }
          static MBF() {
            return Se.sm_mbf || (Se.sm_mbf = t.w0(Se.M())), Se.sm_mbf;
          }
          toObject(e = !1) {
            return Se.toObject(e, this);
          }
          static toObject(e, s) {
            return t.BT(Se.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(Se.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new Se();
            return Se.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(Se.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Se.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(Se.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Se.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_PollAuthSessionStatus_Response";
          }
        };
        S(Ct, "sm_m"), S(Ct, "sm_mbf");
        let Ur = Ct;
        const Mr = class Me extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Me.prototype.client_id || t.Sg(Me.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Me.sm_m ||
                (Me.sm_m = {
                  proto: Me,
                  fields: {
                    client_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              Me.sm_m
            );
          }
          static MBF() {
            return Me.sm_mbf || (Me.sm_mbf = t.w0(Me.M())), Me.sm_mbf;
          }
          toObject(e = !1) {
            return Me.toObject(e, this);
          }
          static toObject(e, s) {
            return t.BT(Me.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(Me.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new Me();
            return Me.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(Me.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Me.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(Me.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Me.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_GetAuthSessionInfo_Request";
          }
        };
        S(Mr, "sm_m"), S(Mr, "sm_mbf");
        let Nr = Mr;
        const Cr = class Ce extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ce.prototype.ip || t.Sg(Ce.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Ce.sm_m ||
                (Ce.sm_m = {
                  proto: Ce,
                  fields: {
                    ip: { n: 1, br: t.qM.readString, bw: t.gp.writeString },
                    geoloc: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                    city: { n: 3, br: t.qM.readString, bw: t.gp.writeString },
                    state: { n: 4, br: t.qM.readString, bw: t.gp.writeString },
                    country: {
                      n: 5,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    platform_type: {
                      n: 6,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    device_friendly_name: {
                      n: 7,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    version: { n: 8, br: t.qM.readInt32, bw: t.gp.writeInt32 },
                    login_history: {
                      n: 9,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    requestor_location_mismatch: {
                      n: 10,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    high_usage_login: {
                      n: 11,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    requested_persistence: {
                      n: 12,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    device_trust: {
                      n: 13,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    app_type: { n: 14, br: t.qM.readEnum, bw: t.gp.writeEnum },
                  },
                }),
              Ce.sm_m
            );
          }
          static MBF() {
            return Ce.sm_mbf || (Ce.sm_mbf = t.w0(Ce.M())), Ce.sm_mbf;
          }
          toObject(e = !1) {
            return Ce.toObject(e, this);
          }
          static toObject(e, s) {
            return t.BT(Ce.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(Ce.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new Ce();
            return Ce.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(Ce.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(Ce.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Ce.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_GetAuthSessionInfo_Response";
          }
        };
        S(Cr, "sm_m"), S(Cr, "sm_mbf");
        let Dr = Cr;
        const Fr = class Re extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Re.prototype.client_id || t.Sg(Re.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Re.sm_m ||
                (Re.sm_m = {
                  proto: Re,
                  fields: {
                    client_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    language: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              Re.sm_m
            );
          }
          static MBF() {
            return Re.sm_mbf || (Re.sm_mbf = t.w0(Re.M())), Re.sm_mbf;
          }
          toObject(e = !1) {
            return Re.toObject(e, this);
          }
          static toObject(e, s) {
            return t.BT(Re.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(Re.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new Re();
            return Re.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(Re.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Re.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(Re.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Re.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_GetAuthSessionRiskInfo_Request";
          }
        };
        S(Fr, "sm_m"), S(Fr, "sm_mbf");
        let Pr = Fr;
        const Vr = class ve extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ve.prototype.location_confirmer || t.Sg(ve.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              ve.sm_m ||
                (ve.sm_m = {
                  proto: ve,
                  fields: {
                    location_confirmer: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    location_requestor: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    location_other: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    platform_type: {
                      n: 4,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                  },
                }),
              ve.sm_m
            );
          }
          static MBF() {
            return ve.sm_mbf || (ve.sm_mbf = t.w0(ve.M())), ve.sm_mbf;
          }
          toObject(e = !1) {
            return ve.toObject(e, this);
          }
          static toObject(e, s) {
            return t.BT(ve.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(ve.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new ve();
            return ve.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(ve.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(ve.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              ve.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_GetAuthSessionRiskInfo_Response";
          }
        };
        S(Vr, "sm_m"), S(Vr, "sm_mbf");
        let Hr = Vr;
        const Gr = class Te extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Te.prototype.client_id || t.Sg(Te.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Te.sm_m ||
                (Te.sm_m = {
                  proto: Te,
                  fields: {
                    client_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    results: { n: 2, c: li },
                    selected_action: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    did_confirm_login: {
                      n: 4,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              Te.sm_m
            );
          }
          static MBF() {
            return Te.sm_mbf || (Te.sm_mbf = t.w0(Te.M())), Te.sm_mbf;
          }
          toObject(e = !1) {
            return Te.toObject(e, this);
          }
          static toObject(e, s) {
            return t.BT(Te.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(Te.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new Te();
            return Te.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(Te.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Te.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(Te.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Te.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_NotifyRiskQuizResults_Notification";
          }
        };
        S(Gr, "sm_m"), S(Gr, "sm_mbf");
        let Dt = Gr;
        const ir = class ze extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ze.prototype.platform || t.Sg(ze.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              ze.sm_m ||
                (ze.sm_m = {
                  proto: ze,
                  fields: {
                    platform: { n: 1, br: t.qM.readBool, bw: t.gp.writeBool },
                    location: { n: 2, br: t.qM.readBool, bw: t.gp.writeBool },
                    action: { n: 3, br: t.qM.readBool, bw: t.gp.writeBool },
                  },
                }),
              ze.sm_m
            );
          }
          static MBF() {
            return ze.sm_mbf || (ze.sm_mbf = t.w0(ze.M())), ze.sm_mbf;
          }
          toObject(e = !1) {
            return ze.toObject(e, this);
          }
          static toObject(e, s) {
            return t.BT(ze.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(ze.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new ze();
            return ze.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(ze.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(ze.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              ze.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_NotifyRiskQuizResults_Notification_RiskQuizResults";
          }
        };
        S(ir, "sm_m"), S(ir, "sm_mbf");
        let li = ir;
        class Pt extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Pt.toObject(e, this);
          }
          static toObject(e, s) {
            return e ? { $jspbMessageInstance: s } : {};
          }
          static fromObject(e) {
            return new Pt();
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new Pt();
            return Pt.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return e;
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Pt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {}
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Pt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_GetAuthSessionsForAccount_Request";
          }
        }
        const Qr = class Ae extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ae.prototype.client_ids || t.Sg(Ae.M()),
              b.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              Ae.sm_m ||
                (Ae.sm_m = {
                  proto: Ae,
                  fields: {
                    client_ids: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: t.qM.readUint64String,
                      pbr: t.qM.readPackedUint64String,
                      bw: t.gp.writeRepeatedUint64String,
                    },
                  },
                }),
              Ae.sm_m
            );
          }
          static MBF() {
            return Ae.sm_mbf || (Ae.sm_mbf = t.w0(Ae.M())), Ae.sm_mbf;
          }
          toObject(e = !1) {
            return Ae.toObject(e, this);
          }
          static toObject(e, s) {
            return t.BT(Ae.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(Ae.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new Ae();
            return Ae.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(Ae.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(Ae.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Ae.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_GetAuthSessionsForAccount_Response";
          }
        };
        S(Qr, "sm_m"), S(Qr, "sm_mbf");
        let Rt = Qr;
        const St = class je extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              je.prototype.version || t.Sg(je.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              je.sm_m ||
                (je.sm_m = {
                  proto: je,
                  fields: {
                    version: { n: 1, br: t.qM.readInt32, bw: t.gp.writeInt32 },
                    client_id: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    steamid: {
                      n: 3,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    signature: {
                      n: 4,
                      br: t.qM.readBytes,
                      bw: t.gp.writeBytes,
                    },
                    confirm: {
                      n: 5,
                      d: !1,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    persistence: {
                      n: 6,
                      d: Yt.nW,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                  },
                }),
              je.sm_m
            );
          }
          static MBF() {
            return je.sm_mbf || (je.sm_mbf = t.w0(je.M())), je.sm_mbf;
          }
          toObject(e = !1) {
            return je.toObject(e, this);
          }
          static toObject(e, s) {
            return t.BT(je.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(je.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new je();
            return je.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(je.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return je.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(je.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              je.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request";
          }
        };
        S(St, "sm_m"), S(St, "sm_mbf");
        let pi = St;
        class pt extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return pt.toObject(e, this);
          }
          static toObject(e, s) {
            return e ? { $jspbMessageInstance: s } : {};
          }
          static fromObject(e) {
            return new pt();
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new pt();
            return pt.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return e;
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return pt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {}
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              pt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response";
          }
        }
        const Rr = class Fe extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Fe.prototype.client_id || t.Sg(Fe.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Fe.sm_m ||
                (Fe.sm_m = {
                  proto: Fe,
                  fields: {
                    client_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    steamid: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    code: { n: 3, br: t.qM.readString, bw: t.gp.writeString },
                    code_type: { n: 4, br: t.qM.readEnum, bw: t.gp.writeEnum },
                  },
                }),
              Fe.sm_m
            );
          }
          static MBF() {
            return Fe.sm_mbf || (Fe.sm_mbf = t.w0(Fe.M())), Fe.sm_mbf;
          }
          toObject(e = !1) {
            return Fe.toObject(e, this);
          }
          static toObject(e, s) {
            return t.BT(Fe.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(Fe.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new Fe();
            return Fe.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(Fe.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(Fe.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Fe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request";
          }
        };
        S(Rr, "sm_m"), S(Rr, "sm_mbf");
        let vr = Rr;
        const Ot = class _e extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              _e.prototype.agreement_session_url || t.Sg(_e.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              _e.sm_m ||
                (_e.sm_m = {
                  proto: _e,
                  fields: {
                    agreement_session_url: {
                      n: 7,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              _e.sm_m
            );
          }
          static MBF() {
            return _e.sm_mbf || (_e.sm_mbf = t.w0(_e.M())), _e.sm_mbf;
          }
          toObject(e = !1) {
            return _e.toObject(e, this);
          }
          static toObject(e, s) {
            return t.BT(_e.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(_e.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new _e();
            return _e.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(_e.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return _e.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(_e.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              _e.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response";
          }
        };
        S(Ot, "sm_m"), S(Ot, "sm_mbf");
        let nr = Ot;
        const vt = class xe extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              xe.prototype.refresh_token || t.Sg(xe.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              xe.sm_m ||
                (xe.sm_m = {
                  proto: xe,
                  fields: {
                    refresh_token: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    steamid: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    renewal_type: {
                      n: 3,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                  },
                }),
              xe.sm_m
            );
          }
          static MBF() {
            return xe.sm_mbf || (xe.sm_mbf = t.w0(xe.M())), xe.sm_mbf;
          }
          toObject(e = !1) {
            return xe.toObject(e, this);
          }
          static toObject(e, s) {
            return t.BT(xe.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(xe.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new xe();
            return xe.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(xe.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(xe.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              xe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_AccessToken_GenerateForApp_Request";
          }
        };
        S(vt, "sm_m"), S(vt, "sm_mbf");
        let sr = vt;
        const Tr = class Ie extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ie.prototype.access_token || t.Sg(Ie.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Ie.sm_m ||
                (Ie.sm_m = {
                  proto: Ie,
                  fields: {
                    access_token: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    refresh_token: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              Ie.sm_m
            );
          }
          static MBF() {
            return Ie.sm_mbf || (Ie.sm_mbf = t.w0(Ie.M())), Ie.sm_mbf;
          }
          toObject(e = !1) {
            return Ie.toObject(e, this);
          }
          static toObject(e, s) {
            return t.BT(Ie.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(Ie.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new Ie();
            return Ie.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(Ie.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(Ie.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Ie.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_AccessToken_GenerateForApp_Response";
          }
        };
        S(Tr, "sm_m"), S(Tr, "sm_mbf");
        let _r = Tr;
        const Zr = class ke extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ke.prototype.include_revoked || t.Sg(ke.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              ke.sm_m ||
                (ke.sm_m = {
                  proto: ke,
                  fields: {
                    include_revoked: {
                      n: 1,
                      d: !1,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              ke.sm_m
            );
          }
          static MBF() {
            return ke.sm_mbf || (ke.sm_mbf = t.w0(ke.M())), ke.sm_mbf;
          }
          toObject(e = !1) {
            return ke.toObject(e, this);
          }
          static toObject(e, s) {
            return t.BT(ke.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(ke.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new ke();
            return ke.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(ke.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return ke.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(ke.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              ke.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_RefreshToken_Enumerate_Request";
          }
        };
        S(Zr, "sm_m"), S(Zr, "sm_mbf");
        let xt = Zr;
        const qt = class Ee extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ee.prototype.refresh_tokens || t.Sg(Ee.M()),
              b.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              Ee.sm_m ||
                (Ee.sm_m = {
                  proto: Ee,
                  fields: {
                    refresh_tokens: { n: 1, c: ci, r: !0, q: !0 },
                    requesting_token: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              Ee.sm_m
            );
          }
          static MBF() {
            return Ee.sm_mbf || (Ee.sm_mbf = t.w0(Ee.M())), Ee.sm_mbf;
          }
          toObject(e = !1) {
            return Ee.toObject(e, this);
          }
          static toObject(e, s) {
            return t.BT(Ee.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(Ee.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new Ee();
            return Ee.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(Ee.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(Ee.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Ee.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_RefreshToken_Enumerate_Response";
          }
        };
        S(qt, "sm_m"), S(qt, "sm_mbf");
        let Kr = qt;
        const cr = class We extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              We.prototype.time || t.Sg(We.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              We.sm_m ||
                (We.sm_m = {
                  proto: We,
                  fields: {
                    time: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    ip: { n: 2, c: L.kK },
                    locale: { n: 3, br: t.qM.readString, bw: t.gp.writeString },
                    country: {
                      n: 4,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    state: { n: 5, br: t.qM.readString, bw: t.gp.writeString },
                    city: { n: 6, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              We.sm_m
            );
          }
          static MBF() {
            return We.sm_mbf || (We.sm_mbf = t.w0(We.M())), We.sm_mbf;
          }
          toObject(e = !1) {
            return We.toObject(e, this);
          }
          static toObject(e, s) {
            return t.BT(We.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(We.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new We();
            return We.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(We.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return We.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(We.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              We.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_RefreshToken_Enumerate_Response_TokenUsageEvent";
          }
        };
        S(cr, "sm_m"), S(cr, "sm_mbf");
        let Yr = cr;
        const zr = class Oe extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Oe.prototype.token_id || t.Sg(Oe.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Oe.sm_m ||
                (Oe.sm_m = {
                  proto: Oe,
                  fields: {
                    token_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    token_description: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    time_updated: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    platform_type: {
                      n: 4,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    logged_in: { n: 5, br: t.qM.readBool, bw: t.gp.writeBool },
                    os_platform: {
                      n: 6,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    auth_type: {
                      n: 7,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    gaming_device_type: {
                      n: 8,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    first_seen: { n: 9, c: Yr },
                    last_seen: { n: 10, c: Yr },
                    os_type: { n: 11, br: t.qM.readInt32, bw: t.gp.writeInt32 },
                    authentication_type: {
                      n: 12,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    effective_token_state: {
                      n: 13,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                  },
                }),
              Oe.sm_m
            );
          }
          static MBF() {
            return Oe.sm_mbf || (Oe.sm_mbf = t.w0(Oe.M())), Oe.sm_mbf;
          }
          toObject(e = !1) {
            return Oe.toObject(e, this);
          }
          static toObject(e, s) {
            return t.BT(Oe.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(Oe.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new Oe();
            return Oe.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(Oe.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(Oe.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Oe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_RefreshToken_Enumerate_Response_RefreshTokenDescription";
          }
        };
        S(zr, "sm_m"), S(zr, "sm_mbf");
        let ci = zr;
        const ie = class qe extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              qe.prototype.token || t.Sg(qe.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              qe.sm_m ||
                (qe.sm_m = {
                  proto: qe,
                  fields: {
                    token: { n: 1, br: t.qM.readString, bw: t.gp.writeString },
                    revoke_action: {
                      n: 2,
                      d: wt,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                  },
                }),
              qe.sm_m
            );
          }
          static MBF() {
            return qe.sm_mbf || (qe.sm_mbf = t.w0(qe.M())), qe.sm_mbf;
          }
          toObject(e = !1) {
            return qe.toObject(e, this);
          }
          static toObject(e, s) {
            return t.BT(qe.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(qe.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new qe();
            return qe.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(qe.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(qe.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              qe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_Token_Revoke_Request";
          }
        };
        S(ie, "sm_m"), S(ie, "sm_mbf");
        let bi = ie;
        class Xt extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Xt.toObject(e, this);
          }
          static toObject(e, s) {
            return e ? { $jspbMessageInstance: s } : {};
          }
          static fromObject(e) {
            return new Xt();
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new Xt();
            return Xt.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return e;
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Xt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {}
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Xt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_Token_Revoke_Response";
          }
        }
        const xr = class Le extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Le.prototype.token_id || t.Sg(Le.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Le.sm_m ||
                (Le.sm_m = {
                  proto: Le,
                  fields: {
                    token_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    steamid: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    revoke_action: {
                      n: 3,
                      d: wt,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    signature: {
                      n: 4,
                      br: t.qM.readBytes,
                      bw: t.gp.writeBytes,
                    },
                  },
                }),
              Le.sm_m
            );
          }
          static MBF() {
            return Le.sm_mbf || (Le.sm_mbf = t.w0(Le.M())), Le.sm_mbf;
          }
          toObject(e = !1) {
            return Le.toObject(e, this);
          }
          static toObject(e, s) {
            return t.BT(Le.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(Le.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new Le();
            return Le.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(Le.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Le.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(Le.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Le.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_RefreshToken_Revoke_Request";
          }
        };
        S(xr, "sm_m"), S(xr, "sm_mbf");
        let wi = xr;
        class Vt extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Vt.toObject(e, this);
          }
          static toObject(e, s) {
            return e ? { $jspbMessageInstance: s } : {};
          }
          static fromObject(e) {
            return new Vt();
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new Vt();
            return Vt.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return e;
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Vt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {}
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Vt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_RefreshToken_Revoke_Response";
          }
        }
        const Ar = class Ue extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ue.prototype.token_id || t.Sg(Ue.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Ue.sm_m ||
                (Ue.sm_m = {
                  proto: Ue,
                  fields: {
                    token_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    token_description: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    time_updated: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    platform_type: {
                      n: 4,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    token_state: {
                      n: 5,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    owner_steamid: {
                      n: 6,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    os_platform: {
                      n: 7,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    os_type: { n: 8, br: t.qM.readInt32, bw: t.gp.writeInt32 },
                    auth_type: {
                      n: 9,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    gaming_device_type: {
                      n: 10,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    first_seen: { n: 11, c: ue },
                    last_seen: { n: 12, c: ue },
                  },
                }),
              Ue.sm_m
            );
          }
          static MBF() {
            return Ue.sm_mbf || (Ue.sm_mbf = t.w0(Ue.M())), Ue.sm_mbf;
          }
          toObject(e = !1) {
            return Ue.toObject(e, this);
          }
          static toObject(e, s) {
            return t.BT(Ue.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(Ue.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new Ue();
            return Ue.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(Ue.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(Ue.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Ue.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSupportRefreshTokenDescription";
          }
        };
        S(Ar, "sm_m"), S(Ar, "sm_mbf");
        let $r = Ar;
        const Ir = class Ne extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ne.prototype.time || t.Sg(Ne.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Ne.sm_m ||
                (Ne.sm_m = {
                  proto: Ne,
                  fields: {
                    time: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    ip: { n: 2, c: L.kK },
                    country: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    state: { n: 4, br: t.qM.readString, bw: t.gp.writeString },
                    city: { n: 5, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              Ne.sm_m
            );
          }
          static MBF() {
            return Ne.sm_mbf || (Ne.sm_mbf = t.w0(Ne.M())), Ne.sm_mbf;
          }
          toObject(e = !1) {
            return Ne.toObject(e, this);
          }
          static toObject(e, s) {
            return t.BT(Ne.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(Ne.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new Ne();
            return Ne.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(Ne.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(Ne.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Ne.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSupportRefreshTokenDescription_TokenUsageEvent";
          }
        };
        S(Ir, "sm_m"), S(Ir, "sm_mbf");
        let ue = Ir;
        const me = class De extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              De.prototype.action || t.Sg(De.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              De.sm_m ||
                (De.sm_m = {
                  proto: De,
                  fields: {
                    action: { n: 1, br: t.qM.readInt32, bw: t.gp.writeInt32 },
                    time: { n: 2, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    ip: { n: 3, c: L.kK },
                    actor: {
                      n: 4,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              De.sm_m
            );
          }
          static MBF() {
            return De.sm_mbf || (De.sm_mbf = t.w0(De.M())), De.sm_mbf;
          }
          toObject(e = !1) {
            return De.toObject(e, this);
          }
          static toObject(e, s) {
            return t.BT(De.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(De.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new De();
            return De.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(De.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return De.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(De.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              De.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSupportRefreshTokenAudit";
          }
        };
        S(me, "sm_m"), S(me, "sm_mbf");
        let Bi = me;
        const Xr = class Pe extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Pe.prototype.steamid || t.Sg(Pe.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Pe.sm_m ||
                (Pe.sm_m = {
                  proto: Pe,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    include_revoked_tokens: {
                      n: 2,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              Pe.sm_m
            );
          }
          static MBF() {
            return Pe.sm_mbf || (Pe.sm_mbf = t.w0(Pe.M())), Pe.sm_mbf;
          }
          toObject(e = !1) {
            return Pe.toObject(e, this);
          }
          static toObject(e, s) {
            return t.BT(Pe.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(Pe.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new Pe();
            return Pe.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(Pe.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(Pe.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Pe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthenticationSupport_QueryRefreshTokensByAccount_Request";
          }
        };
        S(Xr, "sm_m"), S(Xr, "sm_mbf");
        let yi = Xr;
        const jr = class Ve extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ve.prototype.refresh_tokens || t.Sg(Ve.M()),
              b.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              Ve.sm_m ||
                (Ve.sm_m = {
                  proto: Ve,
                  fields: {
                    refresh_tokens: { n: 1, c: $r, r: !0, q: !0 },
                    last_token_reset: {
                      n: 2,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                  },
                }),
              Ve.sm_m
            );
          }
          static MBF() {
            return Ve.sm_mbf || (Ve.sm_mbf = t.w0(Ve.M())), Ve.sm_mbf;
          }
          toObject(e = !1) {
            return Ve.toObject(e, this);
          }
          static toObject(e, s) {
            return t.BT(Ve.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(Ve.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new Ve();
            return Ve.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(Ve.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(Ve.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Ve.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthenticationSupport_QueryRefreshTokensByAccount_Response";
          }
        };
        S(jr, "sm_m"), S(jr, "sm_mbf");
        let kr = jr;
        const Er = class He extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              He.prototype.token_id || t.Sg(He.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              He.sm_m ||
                (He.sm_m = {
                  proto: He,
                  fields: {
                    token_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              He.sm_m
            );
          }
          static MBF() {
            return He.sm_mbf || (He.sm_mbf = t.w0(He.M())), He.sm_mbf;
          }
          toObject(e = !1) {
            return He.toObject(e, this);
          }
          static toObject(e, s) {
            return t.BT(He.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(He.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new He();
            return He.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(He.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return He.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(He.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              He.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthenticationSupport_QueryRefreshTokenByID_Request";
          }
        };
        S(Er, "sm_m"), S(Er, "sm_mbf");
        let ui = Er;
        const Wr = class Ge extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ge.prototype.refresh_tokens || t.Sg(Ge.M()),
              b.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              Ge.sm_m ||
                (Ge.sm_m = {
                  proto: Ge,
                  fields: { refresh_tokens: { n: 1, c: $r, r: !0, q: !0 } },
                }),
              Ge.sm_m
            );
          }
          static MBF() {
            return Ge.sm_mbf || (Ge.sm_mbf = t.w0(Ge.M())), Ge.sm_mbf;
          }
          toObject(e = !1) {
            return Ge.toObject(e, this);
          }
          static toObject(e, s) {
            return t.BT(Ge.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(Ge.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new Ge();
            return Ge.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(Ge.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(Ge.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Ge.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthenticationSupport_QueryRefreshTokenByID_Response";
          }
        };
        S(Wr, "sm_m"), S(Wr, "sm_mbf");
        let mi = Wr;
        const i = class Qe extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Qe.prototype.token_id || t.Sg(Qe.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Qe.sm_m ||
                (Qe.sm_m = {
                  proto: Qe,
                  fields: {
                    token_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    steamid: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              Qe.sm_m
            );
          }
          static MBF() {
            return Qe.sm_mbf || (Qe.sm_mbf = t.w0(Qe.M())), Qe.sm_mbf;
          }
          toObject(e = !1) {
            return Qe.toObject(e, this);
          }
          static toObject(e, s) {
            return t.BT(Qe.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(Qe.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new Qe();
            return Qe.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(Qe.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(Qe.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Qe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthenticationSupport_RevokeToken_Request";
          }
        };
        S(i, "sm_m"), S(i, "sm_mbf");
        let n = i;
        class o extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return o.toObject(e, this);
          }
          static toObject(e, s) {
            return e ? { $jspbMessageInstance: s } : {};
          }
          static fromObject(e) {
            return new o();
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new o();
            return o.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return e;
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {}
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              o.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthenticationSupport_RevokeToken_Response";
          }
        }
        const f = class Ze extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ze.prototype.token_id || t.Sg(Ze.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Ze.sm_m ||
                (Ze.sm_m = {
                  proto: Ze,
                  fields: {
                    token_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              Ze.sm_m
            );
          }
          static MBF() {
            return Ze.sm_mbf || (Ze.sm_mbf = t.w0(Ze.M())), Ze.sm_mbf;
          }
          toObject(e = !1) {
            return Ze.toObject(e, this);
          }
          static toObject(e, s) {
            return t.BT(Ze.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(Ze.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new Ze();
            return Ze.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(Ze.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(Ze.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Ze.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthenticationSupport_GetTokenHistory_Request";
          }
        };
        S(f, "sm_m"), S(f, "sm_mbf");
        let d = f;
        const w = class Ke extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ke.prototype.history || t.Sg(Ke.M()),
              b.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              Ke.sm_m ||
                (Ke.sm_m = {
                  proto: Ke,
                  fields: { history: { n: 1, c: Bi, r: !0, q: !0 } },
                }),
              Ke.sm_m
            );
          }
          static MBF() {
            return Ke.sm_mbf || (Ke.sm_mbf = t.w0(Ke.M())), Ke.sm_mbf;
          }
          toObject(e = !1) {
            return Ke.toObject(e, this);
          }
          static toObject(e, s) {
            return t.BT(Ke.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(Ke.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new Ke();
            return Ke.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(Ke.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Ke.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(Ke.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Ke.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthenticationSupport_GetTokenHistory_Response";
          }
        };
        S(w, "sm_m"), S(w, "sm_mbf");
        let R = w;
        const T = class Ye extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ye.prototype.steamid || t.Sg(Ye.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Ye.sm_m ||
                (Ye.sm_m = {
                  proto: Ye,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    token_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              Ye.sm_m
            );
          }
          static MBF() {
            return Ye.sm_mbf || (Ye.sm_mbf = t.w0(Ye.M())), Ye.sm_mbf;
          }
          toObject(e = !1) {
            return Ye.toObject(e, this);
          }
          static toObject(e, s) {
            return t.BT(Ye.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(Ye.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new Ye();
            return Ye.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(Ye.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(Ye.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Ye.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthenticationSupport_MarkTokenCompromised_Request";
          }
        };
        S(T, "sm_m"), S(T, "sm_mbf");
        let K = T;
        class G extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return G.toObject(e, this);
          }
          static toObject(e, s) {
            return e ? { $jspbMessageInstance: s } : {};
          }
          static fromObject(e) {
            return new G();
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new G();
            return G.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return e;
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {}
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              G.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthenticationSupport_MarkTokenCompromised_Response";
          }
        }
        const Bt = class $e extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              $e.prototype.appid || t.Sg($e.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              $e.sm_m ||
                ($e.sm_m = {
                  proto: $e,
                  fields: {
                    appid: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    minutes_remaining: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              $e.sm_m
            );
          }
          static MBF() {
            return $e.sm_mbf || ($e.sm_mbf = t.w0($e.M())), $e.sm_mbf;
          }
          toObject(e = !1) {
            return $e.toObject(e, this);
          }
          static toObject(e, s) {
            return t.BT($e.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq($e.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new $e();
            return $e.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj($e.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return $e.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0($e.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              $e.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloudGaming_TimeRemaining";
          }
        };
        S(Bt, "sm_m"), S(Bt, "sm_mbf");
        let Tt = Bt;
        const It = class Xe extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Xe.prototype.platform || t.Sg(Xe.M()),
              b.Message.initialize(this, e, 0, -1, [2], null);
          }
          static M() {
            return (
              Xe.sm_m ||
                (Xe.sm_m = {
                  proto: Xe,
                  fields: {
                    platform: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    appid_list: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: t.qM.readUint32,
                      pbr: t.qM.readPackedUint32,
                      bw: t.gp.writeRepeatedUint32,
                    },
                  },
                }),
              Xe.sm_m
            );
          }
          static MBF() {
            return Xe.sm_mbf || (Xe.sm_mbf = t.w0(Xe.M())), Xe.sm_mbf;
          }
          toObject(e = !1) {
            return Xe.toObject(e, this);
          }
          static toObject(e, s) {
            return t.BT(Xe.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(Xe.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new Xe();
            return Xe.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(Xe.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(Xe.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Xe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloudGaming_GetTimeRemaining_Request";
          }
        };
        S(It, "sm_m"), S(It, "sm_mbf");
        let Or = It;
        const zt = class Je extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Je.prototype.entries || t.Sg(Je.M()),
              b.Message.initialize(this, e, 0, -1, [2], null);
          }
          static M() {
            return (
              Je.sm_m ||
                (Je.sm_m = {
                  proto: Je,
                  fields: { entries: { n: 2, c: Tt, r: !0, q: !0 } },
                }),
              Je.sm_m
            );
          }
          static MBF() {
            return Je.sm_mbf || (Je.sm_mbf = t.w0(Je.M())), Je.sm_mbf;
          }
          toObject(e = !1) {
            return Je.toObject(e, this);
          }
          static toObject(e, s) {
            return t.BT(Je.M(), e, s);
          }
          static fromObject(e) {
            return t.Uq(Je.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (l().BinaryReader)(e),
              C = new Je();
            return Je.deserializeBinaryFromReader(C, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return t.zj(Je.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Je.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            t.i0(Je.M(), e, s);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Je.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloudGaming_GetTimeRemaining_Response";
          }
        };
        S(zt, "sm_m"), S(zt, "sm_mbf");
        let kt = zt;
        var oe;
        ((A) => {
          function e($, X, J) {
            return $.SendMsg(
              "Authentication.GetPasswordRSAPublicKey#1",
              (0, H.I8)(ii, X, J),
              fi,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          A.GetPasswordRSAPublicKey = e;
          function s($, X, J) {
            return $.SendMsg(
              "Authentication.BeginAuthSessionViaQR#1",
              (0, H.I8)(si, X, J),
              hi,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          A.BeginAuthSessionViaQR = s;
          function C($, X, J) {
            return $.SendMsg(
              "Authentication.BeginAuthSessionViaCredentials#1",
              (0, H.I8)(ai, X, J),
              gi,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          A.BeginAuthSessionViaCredentials = C;
          function Jr($, X, J) {
            return $.SendMsg(
              "Authentication.PollAuthSessionStatus#1",
              (0, H.I8)(oi, X, J),
              Ur,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          A.PollAuthSessionStatus = Jr;
          function Si($, X, J) {
            return $.SendMsg(
              "Authentication.GetAuthSessionInfo#1",
              (0, H.I8)(Nr, X, J),
              Dr,
              { ePrivilege: 1 },
            );
          }
          A.GetAuthSessionInfo = Si;
          function Lt($, X, J) {
            return $.SendMsg(
              "Authentication.GetAuthSessionRiskInfo#1",
              (0, H.I8)(Pr, X, J),
              Hr,
              { ePrivilege: 1 },
            );
          }
          A.GetAuthSessionRiskInfo = Lt;
          function At($, X) {
            return $.SendNotification(
              "Authentication.NotifyRiskQuizResults#1",
              (0, H.I8)(Dt, X),
              { ePrivilege: 1 },
            );
          }
          A.NotifyRiskQuizResults = At;
          function Gt($, X, J) {
            return $.SendMsg(
              "Authentication.UpdateAuthSessionWithMobileConfirmation#1",
              (0, H.I8)(pi, X, J),
              pt,
              { ePrivilege: 1 },
            );
          }
          A.UpdateAuthSessionWithMobileConfirmation = Gt;
          function _i($, X, J) {
            return $.SendMsg(
              "Authentication.UpdateAuthSessionWithSteamGuardCode#1",
              (0, H.I8)(vr, X, J),
              nr,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          A.UpdateAuthSessionWithSteamGuardCode = _i;
          function xi($, X, J) {
            return $.SendMsg(
              "Authentication.GenerateAccessTokenForApp#1",
              (0, H.I8)(sr, X, J),
              _r,
              { ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }
          A.GenerateAccessTokenForApp = xi;
          function Li($, X, J) {
            return $.SendMsg(
              "Authentication.EnumerateTokens#1",
              (0, H.I8)(xt, X, J),
              Kr,
              { ePrivilege: 1 },
            );
          }
          A.EnumerateTokens = Li;
          function Ii($, X, J) {
            return $.SendMsg(
              "Authentication.GetAuthSessionsForAccount#1",
              (0, H.I8)(Pt, X, J),
              Rt,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          A.GetAuthSessionsForAccount = Ii;
          function ki($, X, J) {
            return $.SendMsg(
              "Authentication.RevokeToken#1",
              (0, H.I8)(bi, X, J),
              Xt,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          A.RevokeToken = ki;
          function Ei($, X, J) {
            return $.SendMsg(
              "Authentication.RevokeRefreshToken#1",
              (0, H.I8)(wi, X, J),
              Vt,
              { ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          A.RevokeRefreshToken = Ei;
        })(oe || (oe = {}));
        var Ht;
        ((A) => {
          function e(Lt, At, Gt) {
            return Lt.SendMsg(
              "AuthenticationSupport.QueryRefreshTokensByAccount#1",
              (0, H.I8)(yi, At, Gt),
              kr,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }
          A.QueryRefreshTokensByAccount = e;
          function s(Lt, At, Gt) {
            return Lt.SendMsg(
              "AuthenticationSupport.QueryRefreshTokenByID#1",
              (0, H.I8)(ui, At, Gt),
              mi,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }
          A.QueryRefreshTokenByID = s;
          function C(Lt, At, Gt) {
            return Lt.SendMsg(
              "AuthenticationSupport.RevokeToken#1",
              (0, H.I8)(n, At, Gt),
              o,
              { ePrivilege: 5 },
            );
          }
          A.RevokeToken = C;
          function Jr(Lt, At, Gt) {
            return Lt.SendMsg(
              "AuthenticationSupport.GetTokenHistory#1",
              (0, H.I8)(d, At, Gt),
              R,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }
          A.GetTokenHistory = Jr;
          function Si(Lt, At, Gt) {
            return Lt.SendMsg(
              "AuthenticationSupport.MarkTokenCompromised#1",
              (0, H.I8)(K, At, Gt),
              G,
              { ePrivilege: 5 },
            );
          }
          A.MarkTokenCompromised = Si;
        })(Ht || (Ht = {}));
        var qr;
        ((A) => {
          function e(s, C, Jr) {
            return s.SendMsg(
              "CloudGaming.GetTimeRemaining#1",
              (0, H.I8)(Or, C, Jr),
              kt,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          A.GetTimeRemaining = e;
        })(qr || (qr = {}));
      },
      8059: (Ut, tr, v) => {
        "use strict";
        v.d(tr, {
          FU: () => se,
          eF: () => E,
          gf: () => ee,
          wI: () => V,
          yp: () => wt,
        });
        var m = v(14947),
          Kt = v(41735),
          b = v.n(Kt),
          l = v(35038),
          t = v(27066),
          H = v(72604),
          Yt = v(99412),
          L = v(94354),
          $t = v(3166),
          Et = v(94276),
          Ft = v(71944),
          N = v(64434),
          ce = Object.defineProperty,
          or = Object.getOwnPropertyDescriptor,
          rr = (F, y, W) =>
            y in F
              ? ce(F, y, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: W,
                })
              : (F[y] = W),
          Nt = (F, y, W, z) => {
            for (
              var _ = z > 1 ? void 0 : z ? or(y, W) : y, re = F.length - 1, S;
              re >= 0;
              re--
            )
              (S = F[re]) && (_ = (z ? S(y, W, _) : S(_)) || _);
            return z && _ && ce(y, W, _), _;
          },
          bt = (F, y, W) => rr(F, typeof y != "symbol" ? y + "" : y, W),
          E = ((F) => (
            (F[(F.None = 0)] = "None"),
            (F[(F.Generic = 1)] = "Generic"),
            (F[(F.Expired = 2)] = "Expired"),
            (F[(F.Network = 3)] = "Network"),
            (F[(F.MoveAuthenticator = 4)] = "MoveAuthenticator"),
            (F[(F.RateLimitExceeded = 5)] = "RateLimitExceeded"),
            (F[(F.AnonymousLogin = 6)] = "AnonymousLogin"),
            F
          ))(E || {});
        function se(F) {
          const {
            shared_secret: y,
            identity_secret: W,
            secret_1: z,
            status: _,
            uri: re,
            server_time: S,
            ...ne
          } = F;
          return {
            shared_secret: Ft.fromByteArray(y),
            identity_secret: Ft.fromByteArray(W),
            secret_1: Ft.fromByteArray(z),
            ...ne,
          };
        }
        var V = ((F) => (
          (F[(F.k_Success = 0)] = "k_Success"),
          (F[(F.k_PrimaryDomainFail = 1)] = "k_PrimaryDomainFail"),
          (F[(F.k_SecondaryDomainFail = 2)] = "k_SecondaryDomainFail"),
          F
        ))(V || {});
        class ee {
          constructor(y, W, z, _) {
            bt(this, "m_transport"),
              bt(this, "m_strClientID"),
              bt(this, "m_msPollInterval"),
              bt(this, "m_activeTimerID"),
              bt(this, "m_rgRequestID"),
              bt(this, "m_strTokenToRevoke"),
              bt(this, "m_strChallengeURL"),
              bt(this, "m_onShowAgreement"),
              bt(this, "m_bRemoteInteraction", !1),
              bt(this, "m_onCompleteCallback"),
              bt(this, "m_eFailureState", 0),
              bt(this, "m_strExtendedErrorMessage", ""),
              bt(this, "m_onDeviceDetailsCallback"),
              (0, m.Gn)(this),
              (this.m_transport = y),
              (this.m_onCompleteCallback = W),
              (this.m_onDeviceDetailsCallback = z),
              (this.m_onShowAgreement = _);
          }
          StartPolling(y = !0) {
            this.m_activeTimerID != null && this.StopPolling(),
              y
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
              const y = l.w.Init(Et.Ev);
              y.SetEMsg(L.Kec),
                y.Body().set_client_id(this.m_strClientID),
                y.Body().set_request_id(this.m_rgRequestID),
                this.m_strTokenToRevoke &&
                  y.Body().set_token_to_revoke(this.m_strTokenToRevoke);
              const W = await Et.kX.PollAuthSessionStatus(this.m_transport, y),
                z = W.GetEResult();
              if (z !== H.R) {
                if (z === H.zi) {
                  const k = W.Hdr().transport_error();
                  if (
                    ((0, N.ZI)(
                      `Failed to poll auth session. Result ${z}. Transport Error: ${k}`,
                    ),
                    k === Yt.MhR || k === Yt.VrD)
                  )
                    return (
                      this.m_transport.MakeReady(), this.StartPolling(!1), H.R
                    );
                }
                if (z === H.Qo || z === H.ob) this.m_eFailureState = 2;
                else if (z === H.h_) this.m_eFailureState = 5;
                else if (z == H.oH) {
                  if (this.m_onShowAgreement)
                    this.m_onShowAgreement(W.Body().agreement_session_url());
                  else {
                    const k = W.Body().agreement_session_url(),
                      x = document.location.href;
                    window.location.href = `${k}&redir=${encodeURIComponent(x)}`;
                  }
                  return this.m_onCompleteCallback({ bSuccess: !1 }), z;
                } else
                  (0, N.ZI)(`Failed to poll auth session. Result: ${z}`),
                    (this.m_eFailureState = 1);
                return this.m_onCompleteCallback({ bSuccess: !1 }), z;
              }
              const {
                new_challenge_url: _,
                new_client_id: re,
                refresh_token: S,
                access_token: ne,
                account_name: ur,
                had_remote_interaction: mr,
                new_guard_data: lr,
              } = W.Body().toObject();
              return (
                (this.m_bRemoteInteraction = !!mr),
                S
                  ? (this.m_onCompleteCallback({
                      bSuccess: !0,
                      strRefreshToken: S,
                      strAccessToken: ne,
                      strAccountName: ur,
                      strNewGuardData: lr,
                    }),
                    z)
                  : (_ && (this.m_strChallengeURL = _),
                    re && (this.m_strClientID = re),
                    this.StartPolling(!1),
                    z)
              );
            } catch (y) {
              return (
                (0, N.ZI)(`Failed to poll auth session. ${y}`),
                (this.m_eFailureState = 1),
                this.m_onCompleteCallback({ bSuccess: !1 }),
                H.zi
              );
            }
          }
          SetTokenToRevoke(y) {
            this.m_strTokenToRevoke = y;
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
            const y = await this.m_onDeviceDetailsCallback();
            return Et.tS.fromObject(y);
          }
        }
        Nt([m.sH], ee.prototype, "m_strChallengeURL", 2),
          Nt([m.sH], ee.prototype, "m_bRemoteInteraction", 2),
          Nt([m.sH], ee.prototype, "m_eFailureState", 2),
          Nt([m.sH], ee.prototype, "m_strExtendedErrorMessage", 2),
          Nt([t.o], ee.prototype, "PollForUpdate", 1),
          Nt([t.o], ee.prototype, "SetTokenToRevoke", 1);
        function wt(F) {
          const y = new FormData();
          y.append("nonce", F), y.append("sessionid", (0, $t.KC)());
          let W = new URL(document.location.href);
          const z = new URLSearchParams(W.search);
          z.has("need_password") &&
            (z.delete("need_password"), (W.search = z.toString())),
            y.append("redir", W.toString());
          const _ = `${$t.TS.LOGIN_BASE_URL}jwt/finalizelogin`;
          return b()
            .post(_, y, { withCredentials: !0 })
            .then(
              (re) => {
                const { data: S } = re;
                if (
                  !S ||
                  !S.transfer_info ||
                  !S.steamID ||
                  !Array.isArray(S.transfer_info)
                )
                  return (
                    (0, N.ZI)(
                      "Result of finalizelogin does not match expectations!",
                    ),
                    1
                  );
                const {
                  transfer_info: ne,
                  steamID: ur,
                  primary_domain: mr,
                } = S;
                return Promise.all(
                  ne.map(({ url: lr, params: k }) =>
                    Wt(lr, { ...k, steamID: ur }),
                  ),
                ).then(
                  (lr) => te(lr, mr),
                  () => 2,
                );
              },
              () => (
                (0, N.ZI)("Failed to finalize login. Initial call failed."), 1
              ),
            );
        }
        function te(F, y) {
          let W = 0;
          return (
            F.forEach((z) => {
              z.bSuccess ||
                (y && z.domain.toLowerCase() === y.toLowerCase()
                  ? (W = 1)
                  : W == 0 && (W = 2));
            }),
            W
          );
        }
        async function Wt(F, y) {
          const W = new URL(F);
          let z = !0;
          try {
            const _ = new FormData();
            Object.keys(y).forEach((S) => _.append(S, y[S]));
            const re = await b().post(F, _, {
              withCredentials: !0,
              timeout: 1e4,
            });
            re.status !== 200
              ? ((0, N.ZI)(
                  `Transfer login to ${W.host} failed with status code: ${re.status}`,
                ),
                (z = !1))
              : re.data.result !== H.R &&
                ((0, N.ZI)(
                  `Transfer login to ${W.host} failed with result: ${re.data.result}`,
                ),
                (z = !1));
          } catch (_) {
            (0, N.ZI)(`Transfer login to ${W.host} failed: "${_}"`), (z = !1);
          }
          return { bSuccess: z, domain: W.host };
        }
      },
      64434: (Ut, tr, v) => {
        "use strict";
        v.d(tr, { P8: () => rr, ZI: () => $t, tG: () => H, tH: () => L });
        var m = v(41735),
          Kt = v.n(m),
          b = v(57589);
        const l = v(80407).A,
          t = new b.wd("Login"),
          H = t.Info,
          Yt = t.Debug,
          L = t.Warning,
          $t = t.Error;
        function Et(E, se) {
          return E.endsWith("/") || (E += "/"), `${E}login/${se}/`;
        }
        function Ft() {
          let E = new FormData();
          return E.append("donotcache", new Date().getTime().toString()), E;
        }
        async function N(E) {
          let se = Ft(),
            V = Et(E, "refreshcaptcha"),
            ee = "";
          try {
            let wt = { "Content-Type": "multipart/form-data" },
              te = await axios.post(V, se, { headers: wt });
            if (te.status != 200) return !1;
            ee = te.data.gid;
          } catch {
            return !1;
          }
          return ee;
        }
        function ce(E, se) {
          return Et(E, "rendercaptcha") + `?gid=${se}`;
        }
        async function or(E, se) {
          let V = Ft();
          V.append("username", se);
          let ee = Et(E, "getrsakey"),
            wt;
          try {
            let te = { "Content-Type": "multipart/form-data" },
              Wt = await axios.post(ee, V, { headers: te });
            if (Wt.status != 200)
              return (
                console.log("GetRSAKey failure: "), console.log(Wt.status), null
              );
            let F = Wt.data;
            if (
              !F ||
              !F.success ||
              !F.publickey_mod ||
              !F.publickey_exp ||
              !F.timestamp
            )
              return console.log("GetRSAKey failure: "), console.log(F), null;
            wt = F;
          } catch (te) {
            return console.log("GetRSAKey exception: "), console.log(te), null;
          }
          return wt;
        }
        function rr(E, se) {
          let V = l.getPublicKey(se.publickey_mod, se.publickey_exp),
            ee = l.encrypt(E, V);
          return ee === !1 ? null : ee;
        }
        async function Nt(E, se, V, ee) {
          const wt = rr(V.strPassword, ee);
          if (!wt) return null;
          let te = Ft();
          te.append("password", wt),
            te.append("username", V.strUserName),
            te.append("twofactorcode", V.strTwoFactorCode || ""),
            te.append("emailauth", V.strEmailAuthCode || ""),
            te.append("loginfriendlyname", ""),
            te.append("captchagid", V.gidCaptcha || ""),
            te.append("captcha_text", V.strCaptchaText || ""),
            te.append("emailsteamid", V.emailSteamID || ""),
            te.append("rsatimestamp", ee.timestamp),
            te.append("remember_login", V.bRememberLogin ? "true" : "false");
          let Wt = {};
          se &&
            (te.append("oauth_client_id", se),
            te.append("mobile_chat_client", "true"));
          let F = Et(E, "dologin"),
            y;
          try {
            Wt.headers = { "Content-Type": "multipart/form-data" };
            let W = await axios.post(F, te, Wt);
            if (W.status != 200) return null;
            let z = W.data;
            if (!z) return null;
            z.oauth && (z.oauth = JSON.parse(z.oauth)), (y = z);
          } catch {
            return null;
          }
          return y;
        }
        async function bt(E, se, V) {
          if (
            ((V = Object.assign({}, V)),
            V.strUserName &&
              (V.strUserName = V.strUserName.replace(/[^\x00-\x7F]/g, "")),
            !V.strPassword ||
              V.strPassword.match(/[^\x00-\x7F]/) ||
              !V.strUserName)
          )
            return null;
          let ee = await or(E, V.strUserName);
          return ee
            ? await Nt(E, se, V, ee)
            : (console.error(`Failed to get RSA key from ${E}`), null);
        }
      },
      1317: (Ut, tr, v) => {
        "use strict";
        v.d(tr, {
          P5: () => X,
          sW: () => $,
          YN: () => _i,
          Fn: () => Gt,
          Mk: () => tn,
          kt: () => Oi,
        });
        var m = v(7850),
          Kt = v(32093),
          b = v(99412),
          l = v(72604),
          t = v(94276),
          H = v(41735),
          Yt = v.n(H),
          L = v(90626),
          $t = v(92757);
        const Et =
          v.p +
          "images/applications/community/login_mobile_auth.png?v=valveisgoodatcaching";
        var Ft = v(71568),
          N = v(64434),
          ce = v(87883),
          or = v(25792),
          rr = v(179),
          Nt = v(24660),
          bt = v(19298),
          E = v(36707),
          se = v(9843),
          V = v.n(se);
        function ee(c) {
          const {
            length: r,
            value: a,
            onChange: h,
            onPaste: p,
            tone: M,
            autoFocus: g,
            disabled: B,
            loading: j,
            backupCode: O,
            allowCharacter: I,
          } = c;
          (0, L.useEffect)(() => {
            g && Mt();
          }, []);
          const P = (0, L.useRef)([]),
            ae = () => h(P.current.map((q) => q.value)),
            le = (q) => {
              const U = q.target.value;
              if (U && I && !I(U)) return;
              const Q = q.target.nextElementSibling;
              q.target.value && Q && Q.focus(), ae();
            },
            jt = (q) => {
              var U;
              P.current.findIndex((Q) => !!Q.value) === -1
                ? (U = P.current[0]) == null || U.select()
                : q.target.select();
            },
            Mt = () => {
              const q = P.current.find((U) => !U.value);
              q ? q.focus() : P.current[P.current.length - 1].focus();
            },
            _t = (q) => {
              const U = q.target;
              if (q.key === "Backspace" || q.key === "Delete") {
                const Q =
                  q.key === "Backspace"
                    ? U.previousElementSibling
                    : U.nextElementSibling;
                U.value === "" &&
                  Q &&
                  ((Q.value = ""), Q.focus(), q.preventDefault(), ae());
              } else if (
                q.key === "ArrowLeft" ||
                q.key === "ArrowRight" ||
                q.key === "ArrowUp" ||
                q.key === "ArrowDown"
              ) {
                const Q =
                  q.key === "ArrowLeft" || q.key === "ArrowUp"
                    ? U.previousElementSibling
                    : U.nextElementSibling;
                Q && (Q.focus(), q.preventDefault());
              }
            },
            D = (q) => {
              const U = q.clipboardData.getData("Text");
              let Q = q.target,
                Y = 0;
              for (; Q && Y < U.length; )
                Q.focus(),
                  (Q.value = U.charAt(Y)),
                  (Q = Q.nextElementSibling),
                  Y++;
              ae(), q.preventDefault(), p && p();
            },
            yt = [];
          for (let q = 0; q < r; q++)
            yt.push(
              (0, m.jsx)(
                Nt.BA,
                {
                  noFocusRing: !0,
                  type: "text",
                  maxLength: 1,
                  ref: (U) => {
                    P.current[q] = U;
                  },
                  onChange: le,
                  onFocus: jt,
                  onClick: (U) => U.stopPropagation(),
                  onKeyDown: _t,
                  onPaste: D,
                  value: a[q] ? a[q][0] : "",
                  autoComplete: "none",
                  autoFocus: q === 0 && g,
                  disabled: B || j,
                  className: V().Input,
                },
                q,
              ),
            );
          return (0, m.jsxs)(bt.Z, {
            className: (0, E.A)(
              V().SegmentedCharacterInput,
              M === "danger" && V().Danger,
              B && V().Disabled,
              O && V().BackupCode,
            ),
            onClick: Mt,
            children: [
              j &&
                (0, m.jsx)("div", {
                  className: V().Loading,
                  children: (0, m.jsx)(Oi, { size: "small" }),
                }),
              yt,
            ],
          });
        }
        var wt = v(36118),
          te = v(54212),
          Wt = v(85599),
          F = v(71421),
          y = v(18210),
          W = v(54963),
          z = v(3166),
          _ = v(8059),
          re = v(14947),
          S = v(94354),
          ne = v(35038),
          ur = v(65946),
          mr = v(95039),
          lr = v(13018),
          k = v(80613),
          x = v.n(k),
          u = v(75245),
          Ci = Object.defineProperty,
          Ri = (c, r, a) =>
            r in c
              ? Ci(c, r, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: a,
                })
              : (c[r] = a),
          Z = (c, r, a) => Ri(c, typeof r != "symbol" ? r + "" : r, a);
        function Fi(c) {
          return "unknown ETwoFactorUsageType ( " + c + " )";
        }
        function dr(c) {
          return "unknown ETwoFactorStatusFieldFlag ( " + c + " )";
        }
        const ti = class et extends k.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              et.prototype.time || u.Sg(et.M()),
              k.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static M() {
            return (
              et.sm_m ||
                (et.sm_m = {
                  proto: et,
                  fields: {
                    time: { n: 1, br: u.qM.readUint32, bw: u.gp.writeUint32 },
                    usage_type: { n: 2, br: u.qM.readEnum, bw: u.gp.writeEnum },
                    confirmation_type: {
                      n: 3,
                      br: u.qM.readInt32,
                      bw: u.gp.writeInt32,
                    },
                    confirmation_action: {
                      n: 4,
                      br: u.qM.readInt32,
                      bw: u.gp.writeInt32,
                    },
                  },
                }),
              et.sm_m
            );
          }
          static MBF() {
            return et.sm_mbf || (et.sm_mbf = u.w0(et.M())), et.sm_mbf;
          }
          toObject(r = !1) {
            return et.toObject(r, this);
          }
          static toObject(r, a) {
            return u.BT(et.M(), r, a);
          }
          static fromObject(r) {
            return u.Uq(et.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (x().BinaryReader)(r),
              h = new et();
            return et.deserializeBinaryFromReader(h, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return u.zj(et.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (x().BinaryWriter)();
            return et.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            u.i0(et.M(), r, a);
          }
          serializeBase64String() {
            var r = new (x().BinaryWriter)();
            return (
              et.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_UsageEvent";
          }
        };
        Z(ti, "sm_m"), Z(ti, "sm_mbf");
        let vi = ti;
        const ri = class tt extends k.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              tt.prototype.sender_time || u.Sg(tt.M()),
              k.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static M() {
            return (
              tt.sm_m ||
                (tt.sm_m = {
                  proto: tt,
                  fields: {
                    sender_time: {
                      n: 1,
                      br: u.qM.readUint64String,
                      bw: u.gp.writeUint64String,
                    },
                  },
                }),
              tt.sm_m
            );
          }
          static MBF() {
            return tt.sm_mbf || (tt.sm_mbf = u.w0(tt.M())), tt.sm_mbf;
          }
          toObject(r = !1) {
            return tt.toObject(r, this);
          }
          static toObject(r, a) {
            return u.BT(tt.M(), r, a);
          }
          static fromObject(r) {
            return u.Uq(tt.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (x().BinaryReader)(r),
              h = new tt();
            return tt.deserializeBinaryFromReader(h, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return u.zj(tt.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (x().BinaryWriter)();
            return tt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            u.i0(tt.M(), r, a);
          }
          serializeBase64String() {
            var r = new (x().BinaryWriter)();
            return (
              tt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_Time_Request";
          }
        };
        Z(ri, "sm_m"), Z(ri, "sm_mbf");
        let Ti = ri;
        const fr = class rt extends k.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              rt.prototype.server_time || u.Sg(rt.M()),
              k.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static M() {
            return (
              rt.sm_m ||
                (rt.sm_m = {
                  proto: rt,
                  fields: {
                    server_time: {
                      n: 1,
                      br: u.qM.readUint64String,
                      bw: u.gp.writeUint64String,
                    },
                    skew_tolerance_seconds: {
                      n: 2,
                      br: u.qM.readUint64String,
                      bw: u.gp.writeUint64String,
                    },
                    large_time_jink: {
                      n: 3,
                      br: u.qM.readUint64String,
                      bw: u.gp.writeUint64String,
                    },
                    probe_frequency_seconds: {
                      n: 4,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                    adjusted_time_probe_frequency_seconds: {
                      n: 5,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                    hint_probe_frequency_seconds: {
                      n: 6,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                    sync_timeout: {
                      n: 7,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                    try_again_seconds: {
                      n: 8,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                    max_attempts: {
                      n: 9,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                  },
                }),
              rt.sm_m
            );
          }
          static MBF() {
            return rt.sm_mbf || (rt.sm_mbf = u.w0(rt.M())), rt.sm_mbf;
          }
          toObject(r = !1) {
            return rt.toObject(r, this);
          }
          static toObject(r, a) {
            return u.BT(rt.M(), r, a);
          }
          static fromObject(r) {
            return u.Uq(rt.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (x().BinaryReader)(r),
              h = new rt();
            return rt.deserializeBinaryFromReader(h, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return u.zj(rt.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (x().BinaryWriter)();
            return rt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            u.i0(rt.M(), r, a);
          }
          serializeBase64String() {
            var r = new (x().BinaryWriter)();
            return (
              rt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_Time_Response";
          }
        };
        Z(fr, "sm_m"), Z(fr, "sm_mbf");
        let ii = fr;
        const hr = class it extends k.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              it.prototype.steamid || u.Sg(it.M()),
              k.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static M() {
            return (
              it.sm_m ||
                (it.sm_m = {
                  proto: it,
                  fields: {
                    steamid: {
                      n: 1,
                      br: u.qM.readFixed64String,
                      bw: u.gp.writeFixed64String,
                    },
                    include: { n: 2, br: u.qM.readEnum, bw: u.gp.writeEnum },
                  },
                }),
              it.sm_m
            );
          }
          static MBF() {
            return it.sm_mbf || (it.sm_mbf = u.w0(it.M())), it.sm_mbf;
          }
          toObject(r = !1) {
            return it.toObject(r, this);
          }
          static toObject(r, a) {
            return u.BT(it.M(), r, a);
          }
          static fromObject(r) {
            return u.Uq(it.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (x().BinaryReader)(r),
              h = new it();
            return it.deserializeBinaryFromReader(h, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return u.zj(it.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (x().BinaryWriter)();
            return it.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            u.i0(it.M(), r, a);
          }
          serializeBase64String() {
            var r = new (x().BinaryWriter)();
            return (
              it.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_Status_Request";
          }
        };
        Z(hr, "sm_m"), Z(hr, "sm_mbf");
        let fi = hr;
        const gr = class nt extends k.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              nt.prototype.state || u.Sg(nt.M()),
              k.Message.initialize(this, r, 0, -1, [16], null);
          }
          static M() {
            return (
              nt.sm_m ||
                (nt.sm_m = {
                  proto: nt,
                  fields: {
                    state: { n: 1, br: u.qM.readUint32, bw: u.gp.writeUint32 },
                    inactivation_reason: {
                      n: 2,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                    authenticator_type: {
                      n: 3,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                    authenticator_allowed: {
                      n: 4,
                      br: u.qM.readBool,
                      bw: u.gp.writeBool,
                    },
                    steamguard_scheme: {
                      n: 5,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                    token_gid: {
                      n: 6,
                      br: u.qM.readString,
                      bw: u.gp.writeString,
                    },
                    email_validated: {
                      n: 7,
                      br: u.qM.readBool,
                      bw: u.gp.writeBool,
                    },
                    device_identifier: {
                      n: 8,
                      br: u.qM.readString,
                      bw: u.gp.writeString,
                    },
                    time_created: {
                      n: 9,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                    revocation_attempts_remaining: {
                      n: 10,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                    classified_agent: {
                      n: 11,
                      br: u.qM.readString,
                      bw: u.gp.writeString,
                    },
                    allow_external_authenticator: {
                      n: 12,
                      br: u.qM.readBool,
                      bw: u.gp.writeBool,
                    },
                    time_transferred: {
                      n: 13,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                    version: {
                      n: 14,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                    last_seen_auth_token_id: {
                      n: 15,
                      br: u.qM.readFixed64String,
                      bw: u.gp.writeFixed64String,
                    },
                    usages: { n: 16, c: vi, r: !0, q: !0 },
                  },
                }),
              nt.sm_m
            );
          }
          static MBF() {
            return nt.sm_mbf || (nt.sm_mbf = u.w0(nt.M())), nt.sm_mbf;
          }
          toObject(r = !1) {
            return nt.toObject(r, this);
          }
          static toObject(r, a) {
            return u.BT(nt.M(), r, a);
          }
          static fromObject(r) {
            return u.Uq(nt.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (x().BinaryReader)(r),
              h = new nt();
            return nt.deserializeBinaryFromReader(h, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return u.zj(nt.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (x().BinaryWriter)();
            return nt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            u.i0(nt.M(), r, a);
          }
          serializeBase64String() {
            var r = new (x().BinaryWriter)();
            return (
              nt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_Status_Response";
          }
        };
        Z(gr, "sm_m"), Z(gr, "sm_mbf");
        let Lr = gr;
        const pr = class st extends k.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              st.prototype.steamid || u.Sg(st.M()),
              k.Message.initialize(this, r, 0, -1, [7], null);
          }
          static M() {
            return (
              st.sm_m ||
                (st.sm_m = {
                  proto: st,
                  fields: {
                    steamid: {
                      n: 1,
                      br: u.qM.readFixed64String,
                      bw: u.gp.writeFixed64String,
                    },
                    authenticator_time: {
                      n: 2,
                      br: u.qM.readUint64String,
                      bw: u.gp.writeUint64String,
                    },
                    serial_number: {
                      n: 3,
                      br: u.qM.readFixed64String,
                      bw: u.gp.writeFixed64String,
                    },
                    authenticator_type: {
                      n: 4,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                    device_identifier: {
                      n: 5,
                      br: u.qM.readString,
                      bw: u.gp.writeString,
                    },
                    http_headers: {
                      n: 7,
                      r: !0,
                      q: !0,
                      br: u.qM.readString,
                      bw: u.gp.writeRepeatedString,
                    },
                    version: {
                      n: 8,
                      d: 1,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                  },
                }),
              st.sm_m
            );
          }
          static MBF() {
            return st.sm_mbf || (st.sm_mbf = u.w0(st.M())), st.sm_mbf;
          }
          toObject(r = !1) {
            return st.toObject(r, this);
          }
          static toObject(r, a) {
            return u.BT(st.M(), r, a);
          }
          static fromObject(r) {
            return u.Uq(st.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (x().BinaryReader)(r),
              h = new st();
            return st.deserializeBinaryFromReader(h, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return u.zj(st.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (x().BinaryWriter)();
            return st.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            u.i0(st.M(), r, a);
          }
          serializeBase64String() {
            var r = new (x().BinaryWriter)();
            return (
              st.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_AddAuthenticator_Request";
          }
        };
        Z(pr, "sm_m"), Z(pr, "sm_mbf");
        let ni = pr;
        const br = class at extends k.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              at.prototype.shared_secret || u.Sg(at.M()),
              k.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static M() {
            return (
              at.sm_m ||
                (at.sm_m = {
                  proto: at,
                  fields: {
                    shared_secret: {
                      n: 1,
                      br: u.qM.readBytes,
                      bw: u.gp.writeBytes,
                    },
                    serial_number: {
                      n: 2,
                      br: u.qM.readFixed64String,
                      bw: u.gp.writeFixed64String,
                    },
                    revocation_code: {
                      n: 3,
                      br: u.qM.readString,
                      bw: u.gp.writeString,
                    },
                    uri: { n: 4, br: u.qM.readString, bw: u.gp.writeString },
                    server_time: {
                      n: 5,
                      br: u.qM.readUint64String,
                      bw: u.gp.writeUint64String,
                    },
                    account_name: {
                      n: 6,
                      br: u.qM.readString,
                      bw: u.gp.writeString,
                    },
                    token_gid: {
                      n: 7,
                      br: u.qM.readString,
                      bw: u.gp.writeString,
                    },
                    identity_secret: {
                      n: 8,
                      br: u.qM.readBytes,
                      bw: u.gp.writeBytes,
                    },
                    secret_1: { n: 9, br: u.qM.readBytes, bw: u.gp.writeBytes },
                    status: { n: 10, br: u.qM.readInt32, bw: u.gp.writeInt32 },
                    phone_number_hint: {
                      n: 11,
                      br: u.qM.readString,
                      bw: u.gp.writeString,
                    },
                    confirm_type: {
                      n: 12,
                      br: u.qM.readInt32,
                      bw: u.gp.writeInt32,
                    },
                  },
                }),
              at.sm_m
            );
          }
          static MBF() {
            return at.sm_mbf || (at.sm_mbf = u.w0(at.M())), at.sm_mbf;
          }
          toObject(r = !1) {
            return at.toObject(r, this);
          }
          static toObject(r, a) {
            return u.BT(at.M(), r, a);
          }
          static fromObject(r) {
            return u.Uq(at.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (x().BinaryReader)(r),
              h = new at();
            return at.deserializeBinaryFromReader(h, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return u.zj(at.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (x().BinaryWriter)();
            return at.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            u.i0(at.M(), r, a);
          }
          serializeBase64String() {
            var r = new (x().BinaryWriter)();
            return (
              at.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_AddAuthenticator_Response";
          }
        };
        Z(br, "sm_m"), Z(br, "sm_mbf");
        let si = br;
        const wr = class ot extends k.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ot.prototype.steamid || u.Sg(ot.M()),
              k.Message.initialize(this, r, 0, -1, [5], null);
          }
          static M() {
            return (
              ot.sm_m ||
                (ot.sm_m = {
                  proto: ot,
                  fields: {
                    steamid: {
                      n: 1,
                      br: u.qM.readFixed64String,
                      bw: u.gp.writeFixed64String,
                    },
                    authenticator_code: {
                      n: 2,
                      br: u.qM.readString,
                      bw: u.gp.writeString,
                    },
                    authenticator_time: {
                      n: 3,
                      br: u.qM.readUint64String,
                      bw: u.gp.writeUint64String,
                    },
                    activation_code: {
                      n: 4,
                      br: u.qM.readString,
                      bw: u.gp.writeString,
                    },
                    http_headers: {
                      n: 5,
                      r: !0,
                      q: !0,
                      br: u.qM.readString,
                      bw: u.gp.writeRepeatedString,
                    },
                    validate_sms_code: {
                      n: 6,
                      br: u.qM.readBool,
                      bw: u.gp.writeBool,
                    },
                  },
                }),
              ot.sm_m
            );
          }
          static MBF() {
            return ot.sm_mbf || (ot.sm_mbf = u.w0(ot.M())), ot.sm_mbf;
          }
          toObject(r = !1) {
            return ot.toObject(r, this);
          }
          static toObject(r, a) {
            return u.BT(ot.M(), r, a);
          }
          static fromObject(r) {
            return u.Uq(ot.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (x().BinaryReader)(r),
              h = new ot();
            return ot.deserializeBinaryFromReader(h, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return u.zj(ot.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (x().BinaryWriter)();
            return ot.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            u.i0(ot.M(), r, a);
          }
          serializeBase64String() {
            var r = new (x().BinaryWriter)();
            return (
              ot.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_FinalizeAddAuthenticator_Request";
          }
        };
        Z(wr, "sm_m"), Z(wr, "sm_mbf");
        let hi = wr;
        const Br = class lt extends k.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              lt.prototype.success || u.Sg(lt.M()),
              k.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static M() {
            return (
              lt.sm_m ||
                (lt.sm_m = {
                  proto: lt,
                  fields: {
                    success: { n: 1, br: u.qM.readBool, bw: u.gp.writeBool },
                    server_time: {
                      n: 3,
                      br: u.qM.readUint64String,
                      bw: u.gp.writeUint64String,
                    },
                    status: { n: 4, br: u.qM.readInt32, bw: u.gp.writeInt32 },
                  },
                }),
              lt.sm_m
            );
          }
          static MBF() {
            return lt.sm_mbf || (lt.sm_mbf = u.w0(lt.M())), lt.sm_mbf;
          }
          toObject(r = !1) {
            return lt.toObject(r, this);
          }
          static toObject(r, a) {
            return u.BT(lt.M(), r, a);
          }
          static fromObject(r) {
            return u.Uq(lt.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (x().BinaryReader)(r),
              h = new lt();
            return lt.deserializeBinaryFromReader(h, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return u.zj(lt.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (x().BinaryWriter)();
            return lt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            u.i0(lt.M(), r, a);
          }
          serializeBase64String() {
            var r = new (x().BinaryWriter)();
            return (
              lt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_FinalizeAddAuthenticator_Response";
          }
        };
        Z(Br, "sm_m"), Z(Br, "sm_mbf");
        let ai = Br;
        const yr = class ct extends k.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ct.prototype.revocation_code || u.Sg(ct.M()),
              k.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static M() {
            return (
              ct.sm_m ||
                (ct.sm_m = {
                  proto: ct,
                  fields: {
                    revocation_code: {
                      n: 2,
                      br: u.qM.readString,
                      bw: u.gp.writeString,
                    },
                    revocation_reason: {
                      n: 5,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                    steamguard_scheme: {
                      n: 6,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                    remove_all_steamguard_cookies: {
                      n: 7,
                      br: u.qM.readBool,
                      bw: u.gp.writeBool,
                    },
                  },
                }),
              ct.sm_m
            );
          }
          static MBF() {
            return ct.sm_mbf || (ct.sm_mbf = u.w0(ct.M())), ct.sm_mbf;
          }
          toObject(r = !1) {
            return ct.toObject(r, this);
          }
          static toObject(r, a) {
            return u.BT(ct.M(), r, a);
          }
          static fromObject(r) {
            return u.Uq(ct.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (x().BinaryReader)(r),
              h = new ct();
            return ct.deserializeBinaryFromReader(h, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return u.zj(ct.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (x().BinaryWriter)();
            return ct.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            u.i0(ct.M(), r, a);
          }
          serializeBase64String() {
            var r = new (x().BinaryWriter)();
            return (
              ct.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_RemoveAuthenticator_Request";
          }
        };
        Z(yr, "sm_m"), Z(yr, "sm_mbf");
        let gi = yr;
        const Sr = class ut extends k.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ut.prototype.success || u.Sg(ut.M()),
              k.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static M() {
            return (
              ut.sm_m ||
                (ut.sm_m = {
                  proto: ut,
                  fields: {
                    success: { n: 1, br: u.qM.readBool, bw: u.gp.writeBool },
                    server_time: {
                      n: 3,
                      br: u.qM.readUint64String,
                      bw: u.gp.writeUint64String,
                    },
                    revocation_attempts_remaining: {
                      n: 5,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                  },
                }),
              ut.sm_m
            );
          }
          static MBF() {
            return ut.sm_mbf || (ut.sm_mbf = u.w0(ut.M())), ut.sm_mbf;
          }
          toObject(r = !1) {
            return ut.toObject(r, this);
          }
          static toObject(r, a) {
            return u.BT(ut.M(), r, a);
          }
          static fromObject(r) {
            return u.Uq(ut.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (x().BinaryReader)(r),
              h = new ut();
            return ut.deserializeBinaryFromReader(h, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return u.zj(ut.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (x().BinaryWriter)();
            return ut.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            u.i0(ut.M(), r, a);
          }
          serializeBase64String() {
            var r = new (x().BinaryWriter)();
            return (
              ut.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_RemoveAuthenticator_Response";
          }
        };
        Z(Sr, "sm_m"), Z(Sr, "sm_mbf");
        let oi = Sr;
        class Ct extends k.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), k.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Ct.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new Ct();
          }
          static deserializeBinary(r) {
            let a = new (x().BinaryReader)(r),
              h = new Ct();
            return Ct.deserializeBinaryFromReader(h, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (x().BinaryWriter)();
            return Ct.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (x().BinaryWriter)();
            return (
              Ct.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request";
          }
        }
        const Ur = class mt extends k.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              mt.prototype.success || u.Sg(mt.M()),
              k.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static M() {
            return (
              mt.sm_m ||
                (mt.sm_m = {
                  proto: mt,
                  fields: {
                    success: { n: 1, br: u.qM.readBool, bw: u.gp.writeBool },
                  },
                }),
              mt.sm_m
            );
          }
          static MBF() {
            return mt.sm_mbf || (mt.sm_mbf = u.w0(mt.M())), mt.sm_mbf;
          }
          toObject(r = !1) {
            return mt.toObject(r, this);
          }
          static toObject(r, a) {
            return u.BT(mt.M(), r, a);
          }
          static fromObject(r) {
            return u.Uq(mt.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (x().BinaryReader)(r),
              h = new mt();
            return mt.deserializeBinaryFromReader(h, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return u.zj(mt.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (x().BinaryWriter)();
            return mt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            u.i0(mt.M(), r, a);
          }
          serializeBase64String() {
            var r = new (x().BinaryWriter)();
            return (
              mt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response";
          }
        };
        Z(Ur, "sm_m"), Z(Ur, "sm_mbf");
        let Mr = Ur;
        const Nr = class dt extends k.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              dt.prototype.sms_code || u.Sg(dt.M()),
              k.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static M() {
            return (
              dt.sm_m ||
                (dt.sm_m = {
                  proto: dt,
                  fields: {
                    sms_code: {
                      n: 1,
                      br: u.qM.readString,
                      bw: u.gp.writeString,
                    },
                    generate_new_token: {
                      n: 2,
                      br: u.qM.readBool,
                      bw: u.gp.writeBool,
                    },
                    version: {
                      n: 3,
                      d: 1,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                  },
                }),
              dt.sm_m
            );
          }
          static MBF() {
            return dt.sm_mbf || (dt.sm_mbf = u.w0(dt.M())), dt.sm_mbf;
          }
          toObject(r = !1) {
            return dt.toObject(r, this);
          }
          static toObject(r, a) {
            return u.BT(dt.M(), r, a);
          }
          static fromObject(r) {
            return u.Uq(dt.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (x().BinaryReader)(r),
              h = new dt();
            return dt.deserializeBinaryFromReader(h, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return u.zj(dt.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (x().BinaryWriter)();
            return dt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            u.i0(dt.M(), r, a);
          }
          serializeBase64String() {
            var r = new (x().BinaryWriter)();
            return (
              dt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request";
          }
        };
        Z(Nr, "sm_m"), Z(Nr, "sm_mbf");
        let Cr = Nr;
        const Dr = class ft extends k.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ft.prototype.shared_secret || u.Sg(ft.M()),
              k.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static M() {
            return (
              ft.sm_m ||
                (ft.sm_m = {
                  proto: ft,
                  fields: {
                    shared_secret: {
                      n: 1,
                      br: u.qM.readBytes,
                      bw: u.gp.writeBytes,
                    },
                    serial_number: {
                      n: 2,
                      br: u.qM.readFixed64String,
                      bw: u.gp.writeFixed64String,
                    },
                    revocation_code: {
                      n: 3,
                      br: u.qM.readString,
                      bw: u.gp.writeString,
                    },
                    uri: { n: 4, br: u.qM.readString, bw: u.gp.writeString },
                    server_time: {
                      n: 5,
                      br: u.qM.readUint64String,
                      bw: u.gp.writeUint64String,
                    },
                    account_name: {
                      n: 6,
                      br: u.qM.readString,
                      bw: u.gp.writeString,
                    },
                    token_gid: {
                      n: 7,
                      br: u.qM.readString,
                      bw: u.gp.writeString,
                    },
                    identity_secret: {
                      n: 8,
                      br: u.qM.readBytes,
                      bw: u.gp.writeBytes,
                    },
                    secret_1: { n: 9, br: u.qM.readBytes, bw: u.gp.writeBytes },
                    status: { n: 10, br: u.qM.readInt32, bw: u.gp.writeInt32 },
                    steamguard_scheme: {
                      n: 11,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                    steamid: {
                      n: 12,
                      br: u.qM.readFixed64String,
                      bw: u.gp.writeFixed64String,
                    },
                  },
                }),
              ft.sm_m
            );
          }
          static MBF() {
            return ft.sm_mbf || (ft.sm_mbf = u.w0(ft.M())), ft.sm_mbf;
          }
          toObject(r = !1) {
            return ft.toObject(r, this);
          }
          static toObject(r, a) {
            return u.BT(ft.M(), r, a);
          }
          static fromObject(r) {
            return u.Uq(ft.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (x().BinaryReader)(r),
              h = new ft();
            return ft.deserializeBinaryFromReader(h, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return u.zj(ft.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (x().BinaryWriter)();
            return ft.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            u.i0(ft.M(), r, a);
          }
          serializeBase64String() {
            var r = new (x().BinaryWriter)();
            return (
              ft.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CRemoveAuthenticatorViaChallengeContinue_Replacement_Token";
          }
        };
        Z(Dr, "sm_m"), Z(Dr, "sm_mbf");
        let Fr = Dr;
        const Pr = class ht extends k.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ht.prototype.success || u.Sg(ht.M()),
              k.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static M() {
            return (
              ht.sm_m ||
                (ht.sm_m = {
                  proto: ht,
                  fields: {
                    success: { n: 1, br: u.qM.readBool, bw: u.gp.writeBool },
                    replacement_token: { n: 2, c: Fr },
                  },
                }),
              ht.sm_m
            );
          }
          static MBF() {
            return ht.sm_mbf || (ht.sm_mbf = u.w0(ht.M())), ht.sm_mbf;
          }
          toObject(r = !1) {
            return ht.toObject(r, this);
          }
          static toObject(r, a) {
            return u.BT(ht.M(), r, a);
          }
          static fromObject(r) {
            return u.Uq(ht.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (x().BinaryReader)(r),
              h = new ht();
            return ht.deserializeBinaryFromReader(h, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return u.zj(ht.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (x().BinaryWriter)();
            return ht.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            u.i0(ht.M(), r, a);
          }
          serializeBase64String() {
            var r = new (x().BinaryWriter)();
            return (
              ht.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response";
          }
        };
        Z(Pr, "sm_m"), Z(Pr, "sm_mbf");
        let Vr = Pr;
        const Hr = class gt extends k.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              gt.prototype.steamid || u.Sg(gt.M()),
              k.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static M() {
            return (
              gt.sm_m ||
                (gt.sm_m = {
                  proto: gt,
                  fields: {
                    steamid: {
                      n: 1,
                      br: u.qM.readFixed64String,
                      bw: u.gp.writeFixed64String,
                    },
                    version: {
                      n: 2,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                    signature: {
                      n: 3,
                      br: u.qM.readBytes,
                      bw: u.gp.writeBytes,
                    },
                  },
                }),
              gt.sm_m
            );
          }
          static MBF() {
            return gt.sm_mbf || (gt.sm_mbf = u.w0(gt.M())), gt.sm_mbf;
          }
          toObject(r = !1) {
            return gt.toObject(r, this);
          }
          static toObject(r, a) {
            return u.BT(gt.M(), r, a);
          }
          static fromObject(r) {
            return u.Uq(gt.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (x().BinaryReader)(r),
              h = new gt();
            return gt.deserializeBinaryFromReader(h, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return u.zj(gt.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (x().BinaryWriter)();
            return gt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            u.i0(gt.M(), r, a);
          }
          serializeBase64String() {
            var r = new (x().BinaryWriter)();
            return (
              gt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_UpdateTokenVersion_Request";
          }
        };
        Z(Hr, "sm_m"), Z(Hr, "sm_mbf");
        let Gr = Hr;
        class Dt extends k.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), k.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Dt.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new Dt();
          }
          static deserializeBinary(r) {
            let a = new (x().BinaryReader)(r),
              h = new Dt();
            return Dt.deserializeBinaryFromReader(h, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (x().BinaryWriter)();
            return Dt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (x().BinaryWriter)();
            return (
              Dt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_UpdateTokenVersion_Response";
          }
        }
        var ir;
        ((c) => {
          function r(O, I, P) {
            return O.SendMsg(
              "TwoFactor.QueryTime#1",
              (0, ne.I8)(Ti, I, P),
              ii,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          c.QueryTime = r;
          function a(O, I, P) {
            return O.SendMsg(
              "TwoFactor.QueryStatus#1",
              (0, ne.I8)(fi, I, P),
              Lr,
              { ePrivilege: 1 },
            );
          }
          c.QueryStatus = a;
          function h(O, I, P) {
            return O.SendMsg(
              "TwoFactor.AddAuthenticator#1",
              (0, ne.I8)(ni, I, P),
              si,
              { ePrivilege: 1 },
            );
          }
          c.AddAuthenticator = h;
          function p(O, I, P) {
            return O.SendMsg(
              "TwoFactor.FinalizeAddAuthenticator#1",
              (0, ne.I8)(hi, I, P),
              ai,
              { ePrivilege: 1 },
            );
          }
          c.FinalizeAddAuthenticator = p;
          function M(O, I, P) {
            return O.SendMsg(
              "TwoFactor.UpdateTokenVersion#1",
              (0, ne.I8)(Gr, I, P),
              Dt,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          c.UpdateTokenVersion = M;
          function g(O, I, P) {
            return O.SendMsg(
              "TwoFactor.RemoveAuthenticator#1",
              (0, ne.I8)(gi, I, P),
              oi,
              { ePrivilege: 9 },
            );
          }
          c.RemoveAuthenticator = g;
          function B(O, I, P) {
            return O.SendMsg(
              "TwoFactor.RemoveAuthenticatorViaChallengeStart#1",
              (0, ne.I8)(Ct, I, P),
              Mr,
              { ePrivilege: 9 },
            );
          }
          c.RemoveAuthenticatorViaChallengeStart = B;
          function j(O, I, P) {
            return O.SendMsg(
              "TwoFactor.RemoveAuthenticatorViaChallengeContinue#1",
              (0, ne.I8)(Cr, I, P),
              Vr,
              { ePrivilege: 9 },
            );
          }
          c.RemoveAuthenticatorViaChallengeContinue = j;
        })(ir || (ir = {}));
        var li = Object.defineProperty,
          Pt = Object.getOwnPropertyDescriptor,
          Qr = (c, r, a) =>
            r in c
              ? li(c, r, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: a,
                })
              : (c[r] = a),
          Rt = (c, r, a, h) => {
            for (
              var p = h > 1 ? void 0 : h ? Pt(r, a) : r, M = c.length - 1, g;
              M >= 0;
              M--
            )
              (g = c[M]) && (p = (h ? g(r, a, p) : g(p)) || p);
            return h && p && li(r, a, p), p;
          },
          St = (c, r, a) => Qr(c, typeof r != "symbol" ? r + "" : r, a);
        const pi = 2,
          pt = 0,
          Rr = 1,
          vr = 2,
          Ot = 3,
          nr = 4,
          vt = 5,
          sr = 6,
          Tr = 7,
          _r = 8,
          Zr = 9,
          xt = 10,
          qt = 11,
          Kr = 12,
          cr = 13,
          Yr = 14,
          zr = 15,
          ci = 16;
        class ie extends _.gf {
          constructor(r) {
            super(
              r.transport,
              (a) => this.onAuthComplete(a),
              r.onDeviceDetails,
              r.onShowAgreement,
            ),
              St(this, "m_eStatus", pt),
              St(this, "m_steamid"),
              St(this, "m_strAccountName"),
              St(this, "m_strConfirmationAssociatedMessage", ""),
              St(this, "m_bUsingCodeOverride", !1),
              St(this, "m_strWeakAuthToken", ""),
              St(this, "m_weakAuthWebInterface"),
              St(this, "m_onGetMachineAuth"),
              St(this, "m_replacementAuthenticator"),
              St(this, "m_strErrorReference", ""),
              St(this, "m_onLoginComplete"),
              St(this, "onAuthComplete", (a) => {
                this.m_eStatus = a.bSuccess ? Yr : zr;
                let h;
                a.bSuccess
                  ? (h = {
                      ...a,
                      strAccountName: this.m_strAccountName,
                      steamid: this.m_steamid,
                    })
                  : (h = { bSuccess: !1 }),
                  this.m_onLoginComplete && this.m_onLoginComplete(h);
              }),
              (0, re.Gn)(this),
              (this.m_onLoginComplete = r.onComplete),
              (this.m_onGetMachineAuth = r.onGetMachineAuth);
          }
          async Start(r, a, h) {
            if (this.m_eStatus !== pt && this.m_eStatus !== vr)
              return (
                (0, N.ZI)(
                  "Cannot start an already started auth session. Create a new session instance.",
                ),
                l.Ze
              );
            const p = r.replace(/[^\x00-\x7F]/g, ""),
              M = a.replace(/[^\x00-\x7F]/g, "").slice(0, 64);
            if (!p.length || !M.length) return l.nO;
            if (
              ((this.m_eStatus = Rr),
              (this.m_bUsingCodeOverride = !1),
              r == "anonymous")
            )
              return (
                this.SetFailureState(_.eF.AnonymousLogin, ue.EResult(l.FK)),
                l.FK
              );
            try {
              const g = await bi(this.m_transport, p);
              if (!g)
                return (
                  (0, N.ZI)(
                    "Cannot start auth session without a valid RSA key",
                  ),
                  this.SetFailureState(_.eF.Network, ue.EResult(l.Sq)),
                  l.Sq
                );
              const B = (0, N.P8)(M, g),
                j = ne.w.Init(t.iP);
              j.SetEMsg(S.Kec),
                j.Body().set_account_name(p),
                j.Body().set_encrypted_password(B),
                j.Body().set_encryption_timestamp(g.timestamp),
                j.Body().set_remember_login(!!h),
                j.Body().set_persistence(h ? mr.nW : mr.fH),
                j.Body().set_website_id(z.TS.WEBSITE_ID);
              try {
                j.Body().set_device_details(await this.GetDeviceDetails());
              } catch (I) {
                (0, N.ZI)("Failed to GetDeviceDetails"), (0, N.ZI)(I);
              }
              if (
                (j.Body().set_language((0, b.sfN)(z.TS.LANGUAGE)),
                this.m_onGetMachineAuth != null)
              ) {
                const I = await this.m_onGetMachineAuth(p);
                I.eresult == l.R && j.Body().set_guard_data(I.data);
              }
              await this.m_transport.MakeReady();
              const O = await t.kX.BeginAuthSessionViaCredentials(
                this.m_transport,
                j,
              );
              return (
                O.DEBUG_LogToConsole(),
                (0, re.h5)(async () => {
                  const I = O.GetEResult(),
                    P = O.Hdr().transport_error();
                  if (I !== l.R)
                    switch (I) {
                      case l.Um:
                        return (this.m_eStatus = vr), I;
                      case l.Sq:
                      case l.a_:
                        return (
                          this.SetFailureState(_.eF.Network, ue.EResult(l.Sq)),
                          I
                        );
                      case l.h_:
                        return (
                          this.SetFailureState(
                            _.eF.RateLimitExceeded,
                            ue.EResult(I),
                          ),
                          I
                        );
                      case l.oH:
                        if (this.m_onShowAgreement)
                          this.m_onShowAgreement(
                            O.Body().agreement_session_url(),
                          );
                        else {
                          const U = O.Body().agreement_session_url(),
                            Q = document.location.href;
                          window.location.href = `${U}&redir=${encodeURIComponent(Q)}`;
                        }
                        return (
                          this.m_onCompleteCallback({ bSuccess: !1 }),
                          (this.m_eStatus = pt),
                          I
                        );
                      case l.uN:
                      default:
                        return (
                          (0, N.ZI)(
                            `Failed to start auth session. Result: ${I} Transport: ${P}`,
                          ),
                          this.SetFailureState(
                            _.eF.Generic,
                            ue.EResult(I),
                            O.Body().extended_error_message(),
                          ),
                          this.m_onCompleteCallback({ bSuccess: !1 }),
                          I
                        );
                    }
                  this.m_strAccountName = r;
                  const {
                    client_id: ae,
                    request_id: le,
                    interval: jt,
                    allowed_confirmations: Mt,
                    steamid: _t,
                    weak_token: D,
                  } = O.Body().toObject();
                  if (
                    ((this.m_msPollInterval = jt * 1e3),
                    (this.m_strClientID = ae),
                    (this.m_rgRequestID = le),
                    (this.m_steamid = _t),
                    (this.m_strWeakAuthToken = D),
                    Mt.find(({ confirmation_type: U }) => U === t.TY.ig))
                  ) {
                    const U = new FormData();
                    U.append("clientid", ae),
                      U.append("steamid", this.m_steamid);
                    const Q = `${z.TS.LOGIN_BASE_URL}jwt/checkdevice/${this.m_steamid}`;
                    try {
                      if (
                        (
                          await Yt().post(Q, U, {
                            headers: { "Content-Type": "multipart/form-data" },
                            withCredentials: !0,
                          })
                        ).data.result == l.R
                      )
                        return (
                          (this.m_eStatus = nr), this.StartPolling(!0), l.R
                        );
                    } catch (Y) {
                      if (
                        ((0, N.tG)(
                          `checkdevice ajax to ${Q} failed: ${Y.message}`,
                        ),
                        Y instanceof H.AxiosError)
                      ) {
                        const Qt = Y;
                        return Qt.response
                          ? (this.SetFailureState(
                              _.eF.Network,
                              ue.AjaxFailureWithCode(Qt.response.status),
                            ),
                            l.Sq)
                          : (this.SetFailureState(
                              _.eF.Network,
                              ue.AjaxFailureNoCode(),
                            ),
                            l.Sq);
                      }
                      return (
                        this.SetFailureState(_.eF.Network, ue.EResult(l.eH)),
                        l.eH
                      );
                    }
                  }
                  const yt = wi(Mt.map(({ confirmation_type: U }) => U)),
                    q = Mt.find(({ confirmation_type: U }) => U === yt);
                  switch (
                    (q &&
                      q.associated_message &&
                      (this.m_strConfirmationAssociatedMessage =
                        q.associated_message),
                    yt)
                  ) {
                    case t.TY.WM:
                      return (this.m_eStatus = cr), this.StartPolling(), I;
                    case t.TY.Xs:
                      this.m_eStatus = Ot;
                      break;
                    case t.TY.$Y:
                      (this.m_eStatus = nr), this.StartPolling(!1);
                      break;
                    case t.TY.bH:
                      (this.m_eStatus = vt), this.StartPolling(!1);
                      break;
                    case t.TY.x0:
                      (this.m_eStatus = sr), this.StartPolling(!1);
                      break;
                  }
                  return I;
                })
              );
            } catch (g) {
              return (
                (0, N.ZI)(
                  `Failed to start auth session. Exception: ${JSON.stringify(g)}`,
                ),
                (0, N.tG)(g),
                this.SetFailureState(_.eF.Generic, ue.FailedToStart()),
                this.m_onCompleteCallback({ bSuccess: !1 }),
                l.zi
              );
            }
          }
          Stop() {
            this.StopPolling(), (this.m_eStatus = ci);
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
          async SendSteamGuardCode(r, a = !0) {
            if (r.length == 0) {
              switch (this.m_eStatus) {
                case xt:
                  this.m_eStatus = Ot;
                  break;
                case qt:
                  this.m_eStatus = vt;
                  break;
                case vt:
                case Ot:
                  break;
                default:
                  throw new Error("Attempted to clear code in invalid state");
              }
              return Promise.resolve(l.R);
            }
            try {
              await this.m_transport.MakeReady();
              const h = this.m_eStatus === Ot || this.m_eStatus === xt,
                p = ne.w.Init(t.Qc);
              p.SetEMsg(S.Kec),
                p.Body().set_client_id(this.m_strClientID),
                p.Body().set_steamid(this.m_steamid),
                p.Body().set_code(r),
                p.Body().set_code_type(h ? t.TY.Xs : t.TY.bH);
              const M = await t.kX.UpdateAuthSessionWithSteamGuardCode(
                  this.m_transport,
                  p,
                ),
                g = M.GetEResult();
              if (g !== l.R) {
                if (!a)
                  return (
                    (0, N.ZI)(
                      `Failed to automatically update session with local SG info. Result ${g}. Transport ${M.Hdr().transport_error()}`,
                    ),
                    g
                  );
                switch (g) {
                  case l.QR:
                  case l.b7:
                    return (this.m_eStatus = h ? xt : qt), g;
                  case l.ob:
                    return (
                      this.SetFailureState(_.eF.Expired, ue.EResult(g)),
                      this.m_onCompleteCallback({ bSuccess: !1 }),
                      g
                    );
                  case l.h_:
                    return (
                      this.SetFailureState(
                        _.eF.RateLimitExceeded,
                        ue.EResult(g),
                      ),
                      this.m_onCompleteCallback({ bSuccess: !1 }),
                      g
                    );
                  case l.oH:
                    if (this.m_onShowAgreement)
                      this.m_onShowAgreement(M.Body().agreement_session_url());
                    else {
                      const B = M.Body().agreement_session_url(),
                        j = document.location.href;
                      window.location.href = `${B}&redir=${encodeURIComponent(j)}`;
                    }
                    return (
                      this.m_onCompleteCallback({ bSuccess: !1 }),
                      (this.m_eStatus = pt),
                      g
                    );
                  default:
                    return (
                      (0, N.ZI)(
                        `Failed to update auth session with SG code. Result: ${g}`,
                      ),
                      this.SetFailureState(_.eF.Generic, ue.EResult(g)),
                      this.m_onCompleteCallback({ bSuccess: !1 }),
                      g
                    );
                }
              }
              return (this.m_eStatus = cr), this.StartPolling(), g;
            } catch (h) {
              return (
                (0, N.ZI)(`Failed to update auth session with SG code. ${h}`),
                this.SetFailureState(_.eF.Generic, ue.FailedToAddCode()),
                this.m_onCompleteCallback({ bSuccess: !1 }),
                l.zi
              );
            }
          }
          UseCodeOverride() {
            switch (this.m_eStatus) {
              case sr:
                (this.m_bUsingCodeOverride = !0), (this.m_eStatus = vt);
                return;
              case nr:
                (this.m_bUsingCodeOverride = !0), (this.m_eStatus = Ot);
                return;
              default:
                (0, N.ZI)(
                  `Don't know how to UseCodeOverride from login session status ${this.m_eStatus}`,
                );
                return;
            }
          }
          CantAccessCode() {
            this.m_eStatus = Tr;
          }
          async StartMoveAuthenticator() {
            this.m_weakAuthWebInterface = new lr.D(
              z.TS.WEBAPI_BASE_URL,
              this.m_strWeakAuthToken,
            );
            try {
              const r = ne.w.Init(Ct),
                a = await ir.RemoveAuthenticatorViaChallengeStart(
                  this.m_weakAuthWebInterface.GetServiceTransport(),
                  r,
                );
              l.R != a.GetEResult()
                ? (a.DEBUG_LogToConsole(),
                  (0, N.ZI)(
                    "An unexpected error occured while adding an authenticator",
                    a.GetEResult(),
                  ),
                  this.SetFailureState(
                    _.eF.MoveAuthenticator,
                    ue.EResult(a.GetEResult()),
                  ))
                : (this.m_eStatus = _r);
            } catch (r) {
              (0, N.ZI)(
                "An unexpected error occured while moving an authenticator",
                r,
              ),
                this.SetFailureState(_.eF.MoveAuthenticator, ue.EResult(l.zi));
            }
          }
          async ResendMoveCode() {
            const r = ne.w.Init(Ct),
              a = await ir.RemoveAuthenticatorViaChallengeStart(
                this.m_weakAuthWebInterface.GetServiceTransport(),
                r,
              );
            l.R != a.GetEResult() &&
              (a.DEBUG_LogToConsole(),
              (0, N.ZI)(
                "An unexpected error occured while adding an authenticator",
                a.GetEResult(),
              )),
              (this.m_eStatus = _r);
          }
          async FinishMoveAuthenticator(r) {
            const a = ne.w.Init(Cr);
            a.Body().set_sms_code(r),
              a.Body().set_generate_new_token(!0),
              a.Body().set_version(pi);
            const h = await ir.RemoveAuthenticatorViaChallengeContinue(
              this.m_weakAuthWebInterface.GetServiceTransport(),
              a,
            );
            l.c3 == h.GetEResult()
              ? (this.m_eStatus = Kr)
              : h.Body().success()
                ? (h.DEBUG_LogToConsole(),
                  (this.m_replacementAuthenticator = (0, _.FU)(
                    h.Body().replacement_token().toObject(),
                  )),
                  (this.m_eStatus = Zr),
                  (this.m_bUsingCodeOverride = !1))
                : (h.DEBUG_LogToConsole(),
                  (0, N.ZI)(
                    "Error when calling RemoveAuthenticatorViaChallengeContinue",
                    h.GetEResult(),
                  ),
                  this.SetFailureState(
                    _.eF.MoveAuthenticator,
                    ue.EResult(h.GetEResult()),
                  ));
          }
          FinishMoveRecovery() {
            this.m_eStatus = vt;
          }
          BCanGoBack() {
            switch (this.m_eStatus) {
              case vt:
              case qt:
              case Ot:
              case xt:
              case sr:
              case nr:
              case Tr:
              case _r:
              case Kr:
                return !0;
              default:
                return !1;
            }
          }
          GoBack() {
            switch (this.m_eStatus) {
              case sr:
              case nr:
                this.m_eStatus = pt;
                break;
              case vt:
              case qt:
                this.m_eStatus = this.m_bUsingCodeOverride ? sr : pt;
                break;
              case Tr:
              case _r:
              case Kr:
                this.m_eStatus = (this.m_bUsingCodeOverride, vt);
                break;
              case Ot:
              case xt:
                this.m_eStatus = this.m_bUsingCodeOverride ? nr : pt;
                break;
              default:
                (0, N.ZI)(
                  `Don't know how to GoBack from login session status ${this.m_eStatus}`,
                );
                return;
            }
          }
          SetFailureState(r, a, h = "") {
            (this.m_eStatus = zr),
              (this.m_eFailureState = r),
              (this.m_strErrorReference = a),
              (this.m_strExtendedErrorMessage = h);
          }
          SetOnLoginComplete(r) {
            this.m_onLoginComplete = r;
          }
        }
        Rt([re.sH], ie.prototype, "m_eStatus", 2),
          Rt([re.sH], ie.prototype, "m_strErrorReference", 2),
          Rt([W.oI], ie.prototype, "Start", 1),
          Rt([W.oI], ie.prototype, "SendSteamGuardCode", 1),
          Rt([W.oI], ie.prototype, "UseCodeOverride", 1),
          Rt([W.oI], ie.prototype, "CantAccessCode", 1),
          Rt([W.oI], ie.prototype, "StartMoveAuthenticator", 1),
          Rt([W.oI], ie.prototype, "ResendMoveCode", 1),
          Rt([W.oI], ie.prototype, "FinishMoveAuthenticator", 1),
          Rt([W.oI], ie.prototype, "FinishMoveRecovery", 1),
          Rt([W.oI], ie.prototype, "GoBack", 1),
          Rt([re.XI], ie.prototype, "SetFailureState", 1),
          Rt([W.oI], ie.prototype, "SetOnLoginComplete", 1);
        async function bi(c, r) {
          const a = ne.w.Init(t.qu);
          a.Body().set_account_name(r), a.SetEMsg(S.Kec);
          try {
            await c.MakeReady();
            const h = await t.kX.GetPasswordRSAPublicKey(c, a);
            if ((h.DEBUG_LogToConsole(), h.GetEResult() !== l.R))
              return (
                (0, N.ZI)(
                  `Failed to get RSA key with EResult: ${h.GetEResult()}`,
                ),
                null
              );
            const {
              publickey_exp: p,
              publickey_mod: M,
              timestamp: g,
            } = h.Body().toObject();
            return !p || !M || !g
              ? ((0, N.ZI)(
                  `Missing expected field in RSA Key: ${JSON.stringify({ publickey_exp: p, publickey_mod: M, timestamp: g })}`,
                ),
                null)
              : { publickey_exp: p, publickey_mod: M, timestamp: g };
          } catch (h) {
            return (
              (0, N.ZI)(`Failed to get RSA key: ${JSON.stringify(h)}`), null
            );
          }
        }
        const xr = [
          t.TY.x0,
          t.TY.bH,
          t.TY.Xs,
          t.TY.WM,
          t.TY.oP,
          t.TY.$Y,
        ].reduce((c, r, a) => ((c[r] = a), c), {});
        function wi(c) {
          let r = c[0] || t.TY.oP;
          return c.length > 1 && (r = c.sort((a, h) => xr[a] - xr[h])[0]), r;
        }
        function Vt(c) {
          const [r, a] = (0, L.useState)(new ie(c));
          return (
            (0, L.useEffect)(() => {
              r == null || r.SetOnLoginComplete(c.onComplete);
            }, [r, c.onComplete]),
            (0, ur.q3)(() => ({
              strAccountName: r.GetAccountName(),
              steamid: r.GetSteamID(),
              eFailureState: r.GetFailureState(),
              strExtendedErrorMessage: r.GetExtendedErrorMessage(),
              strErrorReference: r.GetErrorReference(),
              strConfirmationAssociatedMessage:
                r.GetConfirmationAssociatedMessage(),
              eStatus: r.GetStatus(),
              bCanGoBack: r.BCanGoBack(),
              start: r.Start,
              addCode: r.SendSteamGuardCode,
              useCodeOverride: r.UseCodeOverride,
              cantAccessCode: r.CantAccessCode,
              startMoveAuthenticator: r.StartMoveAuthenticator,
              resendMoveCode: r.ResendMoveCode,
              finishMoveAuthenticator: r.FinishMoveAuthenticator,
              finishMoveRecovery: r.FinishMoveRecovery,
              replacementAuthenticator: r.GetReplacementAuthenticator(),
              reset: () => a(new ie(c)),
              goBack: r.GoBack,
              setTokenToRevoke: r.SetTokenToRevoke,
            }))
          );
        }
        function Ar(c) {
          return c ? 7 : 5;
        }
        function $r(c, r) {
          return /[23456789BCDFGHJKMNPQRTVWXY]*/g.test(c) && c.length <= Ar(r);
        }
        function Ir(c, r) {
          return $r(c, r) && c.length === Ar(r);
        }
        const ue = {
          EResult: (c) => `e${c}`,
          FailedToStart: () => "c-fts",
          FailedToAddCode: () => "c-ftac",
          AjaxFailureNoCode: () => "af",
          AjaxFailureWithCode: (c) => `af-${c}`,
        };
        var me = Object.defineProperty,
          Bi = Object.getOwnPropertyDescriptor,
          Xr = (c, r, a) =>
            r in c
              ? me(c, r, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: a,
                })
              : (c[r] = a),
          yi = (c, r, a, h) => {
            for (
              var p = h > 1 ? void 0 : h ? Bi(r, a) : r, M = c.length - 1, g;
              M >= 0;
              M--
            )
              (g = c[M]) && (p = (h ? g(r, a, p) : g(p)) || p);
            return h && p && me(r, a, p), p;
          },
          jr = (c, r, a) => Xr(c, typeof r != "symbol" ? r + "" : r, a);
        const kr = 0,
          Er = 1,
          ui = 2,
          Wr = 3,
          mi = 4,
          i = 5;
        class n extends _.gf {
          constructor(r) {
            super(
              r.transport,
              (a) => {
                (this.m_eStatus = a.bSuccess ? Wr : mi), r.onComplete(a);
              },
              r.onDeviceDetails,
            ),
              jr(this, "m_eStatus", kr),
              (0, re.Gn)(this);
          }
          async Start() {
            if (this.m_eStatus !== kr)
              return (
                console.error(
                  "Cannot start an already started auth session. Create a new session instance.",
                ),
                l.zi
              );
            this.m_eStatus = Er;
            try {
              await this.m_transport.MakeReady();
              const r = ne.w.Init(t.R9);
              r.SetEMsg(S.Kec);
              try {
                r.Body().set_device_details(await this.GetDeviceDetails());
              } catch (O) {
                console.error("Failed to GetDeviceDetails"), console.log(O);
              }
              r.Body().set_website_id(z.TS.WEBSITE_ID);
              const a = await t.kX.BeginAuthSessionViaQR(this.m_transport, r),
                h = a.GetEResult(),
                p = a.Hdr().transport_error();
              if (h !== l.R)
                return (
                  console.error(
                    `Failed to start auth session. Result: ${h} Transport: ${p}`,
                  ),
                  (this.m_eFailureState = _.eF.Generic),
                  this.m_onCompleteCallback({ bSuccess: !1 }),
                  h
                );
              const {
                client_id: M,
                challenge_url: g,
                interval: B,
                request_id: j,
              } = a.Body().toObject();
              return (
                (this.m_strClientID = M),
                (this.m_strChallengeURL = g),
                (this.m_msPollInterval = B * 1e3),
                (this.m_rgRequestID = j),
                (this.m_eStatus = ui),
                this.StartPolling(!1),
                h
              );
            } catch (r) {
              return (
                console.error(
                  `Failed to start auth session: ${JSON.stringify(r)}`,
                ),
                (this.m_eFailureState = _.eF.Generic),
                this.m_onCompleteCallback({ bSuccess: !1 }),
                l.zi
              );
            }
          }
          Stop() {
            this.StopPolling(), (this.m_eStatus = i);
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
        yi([re.sH], n.prototype, "m_eStatus", 2);
        function o(c) {
          const [r, a] = (0, L.useState)(new n(c));
          return (
            (0, L.useEffect)(
              () => (
                r.Start(),
                () => {
                  r.Stop();
                }
              ),
              [r],
            ),
            (0, ur.q3)(() => ({
              strChallengeURL: r.GetChallengeURL(),
              strClientID: r.GetClientID(),
              eFailureState: r.GetFailureState(),
              eStatus: r.GetStatus(),
              bHadRemoteInteraction: r.BHadRemoteInteraction(),
              reset: () => a(new n(c)),
              setTokenToRevoke: r.SetTokenToRevoke,
            }))
          );
        }
        var f = v(77661),
          d = v.n(f),
          w = v(56589),
          R = v.n(w),
          T = v(71742),
          K = v(5804),
          G = v.n(K),
          Bt = ((c) => (
            (c[(c.L = 1)] = "L"),
            (c[(c.M = 0)] = "M"),
            (c[(c.Q = 3)] = "Q"),
            (c[(c.H = 2)] = "H"),
            c
          ))(Bt || {});
        function Tt(c, r, a) {
          const h = c.length,
            p = c[0].length,
            M = (h + 2) * p,
            g = new Uint8Array(40 + M);
          let B = 0;
          (g[B++] = 71),
            (g[B++] = 73),
            (g[B++] = 70),
            (g[B++] = 56),
            (g[B++] = 57),
            (g[B++] = 97),
            (g[B++] = h),
            (g[B++] = 0),
            (g[B++] = p),
            (g[B++] = 0),
            (0, T.wT)(
              r != "transparent" || a != "transparent",
              "Trying to use transparent for both colors in QR",
            ),
            (g[B++] = 161),
            (g[B++] = 0),
            (g[B++] = 0),
            r == "transparent"
              ? ((g[B++] = 0), (g[B++] = 0), (g[B++] = 0))
              : ((g[B++] = r[0]), (g[B++] = r[1]), (g[B++] = r[2])),
            a == "transparent"
              ? ((g[B++] = 0), (g[B++] = 0), (g[B++] = 0))
              : ((g[B++] = a[0]), (g[B++] = a[1]), (g[B++] = a[2])),
            (g[B++] = 255),
            (g[B++] = 255),
            (g[B++] = 255),
            (g[B++] = 255),
            (g[B++] = 255),
            (g[B++] = 255),
            (r == "transparent" || a == "transparent") &&
              ((g[B++] = 33),
              (g[B++] = 249),
              (g[B++] = 4),
              (g[B++] = 1),
              (g[B++] = 0),
              (g[B++] = 0),
              (g[B++] = r == "transparent" ? 0 : 1),
              (g[B++] = 0)),
            (g[B++] = 44),
            (g[B++] = 0),
            (g[B++] = 0),
            (g[B++] = 0),
            (g[B++] = 0),
            (g[B++] = h),
            (g[B++] = 0),
            (g[B++] = p),
            (g[B++] = 0),
            (g[B++] = 0);
          const j = 7;
          g[B++] = j;
          for (let O = 0; O < c.length; O++) {
            (g[B++] = h + 1), (g[B++] = 2 ** j);
            for (let I = 0; I < c.length; I++) g[B++] = c[O][I] ? 0 : 1;
          }
          return (
            (g[B++] = 1), (g[B++] = 2 ** j + 1), (g[B++] = 0), (g[B++] = 59), g
          );
        }
        function It(
          c,
          {
            activeBitColor: r = [33, 35, 40],
            inactiveBitColor: a = [255, 255, 255],
            borderWidth: h = 3,
          } = {},
          p = {},
        ) {
          const M = R()(c, p).modules;
          if (!M) return null;
          let g = [];
          for (let B = 0; B < h; B++) g.push(Array(M.length + h * 2).fill(!1));
          for (let B = 0; B < M.length; B++)
            g.push([
              ...Array.from({ length: h }, () => !1),
              ...M[B],
              ...Array.from({ length: h }, () => !1),
            ]);
          for (let B = 0; B < h; B++) g.push(Array(M.length + h * 2).fill(!1));
          return Tt(g, r, a);
        }
        function Or(c) {
          let {
            quality: r = 0,
            children: a,
            className: h,
            activeBitColor: p = [33, 35, 40],
            inactiveBitColor: M = [255, 255, 255],
            borderWidth: g = 3,
            typeNumber: B = 6,
          } = c;
          const j = zt(a, {
            typeNumber: B,
            errorCorrectLevel: r,
            activeBitColor: p,
            inactiveBitColor: M,
            borderWidth: g,
          });
          if (!j) return null;
          const O = new Blob([j], { type: "image/gif" }),
            I = URL.createObjectURL(O),
            P = `rgb(${M[0]}, ${M[1]}, ${M[2]})`;
          return (0, m.jsx)("div", {
            className: (0, E.A)(G().QRBits, h),
            style: { "--qr-bright-color": P },
            children: (0, m.jsx)("img", {
              className: G().QRImg,
              src: I,
              alt: "",
            }),
          });
        }
        function zt(c, r) {
          const {
            typeNumber: a,
            errorCorrectLevel: h,
            activeBitColor: p,
            inactiveBitColor: M,
            borderWidth: g,
          } = r;
          return (0, L.useMemo)(
            () =>
              It(
                c,
                { activeBitColor: p, inactiveBitColor: M, borderWidth: g },
                { typeNumber: a, errorCorrectLevel: h },
              ),
            [c, a, h, p, M, g],
          );
        }
        var kt = v(5522),
          oe = v.n(kt),
          Ht = v(19316);
        function qr(c) {
          const {
              transport: r,
              onComplete: a,
              onStatusChange: h,
              platform: p,
              styling: M = "default",
              activeBitValue: g = 255,
            } = c,
            B = z.TS.IN_STEAMUI ? $ : X,
            {
              eStatus: j,
              strChallengeURL: O,
              strClientID: I,
              bHadRemoteInteraction: P,
              reset: ae,
              setTokenToRevoke: le,
            } = o({ transport: r, onComplete: a, onDeviceDetails: B });
          (0, L.useEffect)(() => h && h(j), [h, j]);
          const jt = j === ui ? O : z.TS.STORE_BASE_URL,
            Mt = j === kr || j === Er || P,
            _t = j === mi,
            D = j === Wr,
            yt = D
              ? (0, m.jsx)(Jr, {})
              : _t
                ? (0, m.jsx)(s, { reset: ae })
                : Mt
                  ? (0, m.jsx)(e, { size: "small" })
                  : null,
            q = Mt || _t || D;
          (0, L.useEffect)(() => {
            var Y;
            (Y = c.refreshInfo) != null &&
              Y.login_token_id &&
              le(c.refreshInfo.login_token_id);
          }, [c.refreshInfo, le]);
          const U = z.TS.EUNIVERSE !== b.wLO,
            Q = `rgb(${g}, ${g}, ${g})`;
          return (0, m.jsx)("div", {
            className: oe().Column,
            children: (0, m.jsxs)("div", {
              style: { position: "relative" },
              children: [
                (0, m.jsx)(Or, {
                  borderWidth: 0,
                  activeBitColor: [21, 23, 28],
                  inactiveBitColor: U ? [g, 0, g] : [g, g, g],
                  quality: A(jt),
                  className: (0, E.A)(
                    oe().LoginQR,
                    M == "deck" && oe().QRLoginDeck,
                    M == "vr" && oe().QRLoginVR,
                    q && oe().Blur,
                    U && oe().NonPublic,
                  ),
                  children: jt,
                }),
                q &&
                  (0, m.jsx)("div", {
                    className: oe().Overlay,
                    children: (0, m.jsx)("div", {
                      className: oe().Box,
                      style: { "--qr-bright-color": Q },
                      children: yt,
                    }),
                  }),
              ],
            }),
          });
        }
        function A(c) {
          return c.length <= 90 ? Bt.Q : void 0;
        }
        function e(c) {
          const { size: r } = c;
          return (0, m.jsx)("div", {
            className: (0, E.A)(
              oe().Loading,
              r == "small" && oe().Small,
              (r == "medium" || !r) && oe().Medium,
              r == "large" && oe().Large,
            ),
          });
        }
        function s(c) {
          return (0, m.jsx)(Ht.$n, {
            onClick: c.reset,
            className: oe().QRFailure,
            children: (0, m.jsx)(C, {}),
          });
        }
        function C(c) {
          return (0, m.jsxs)("svg", {
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
              (0, m.jsx)("path", {
                fill: "none",
                stroke: "#fff",
                strokeWidth: "30",
                strokeLinecap: "round",
                strokeMiterlimit: "10",
                d: "M229.809,147.639 c-9.178,47.863-51.27,84.027-101.809,84.027c-57.253,0-103.667-46.412-103.667-103.666S70.747,24.334,128,24.334 c34.107,0,64.368,16.472,83.261,41.895",
              }),
              (0, m.jsx)("polygon", {
                points: "147.639,108.361 245.755,10.166 245.834,108.361",
                fill: "#fff",
              }),
            ],
          });
        }
        function Jr() {
          return (0, m.jsx)("svg", {
            version: "1.1",
            id: "base",
            xmlns: "http://www.w3.org/2000/svg",
            style: { width: "45px", height: "45px" },
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
            children: (0, m.jsx)("polyline", {
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
        var Si = v(72609);
        const Lt = (0, L.createContext)(!1),
          At = () => (0, L.useContext)(Lt);
        function Gt() {
          return (0, m.jsx)("div", {
            className: d().Login,
            children: (0, m.jsx)(Mi, {
              reset: () => window.location.reload(),
              failure: _.eF.Generic,
            }),
          });
        }
        function _i(c) {
          const r = _n(c.redirectUrl),
            a = (h) => {
              const { strRefreshToken: p } = h;
              (0, _.yp)(p).then(
                (M) => c.onComplete(M),
                () => c.onComplete(_.wI.k_PrimaryDomainFail),
              );
            };
          return r
            ? null
            : (0, m.jsx)(xi, {
                ...c,
                creationRedirectUrl: c.redirectUrl,
                onSuccess: a,
                embedded: c.theme === "modal",
              });
        }
        function xi(c) {
          const { embedded: r, children: a, ...h } = c;
          return (0, m.jsx)(or.tH, {
            children: (0, m.jsx)(Lt.Provider, {
              value: r != null ? r : !1,
              children: (0, m.jsxs)("div", {
                className: d().Login,
                children: [(0, m.jsx)(Yi, { ...h }), a],
              }),
            }),
          });
        }
        function Li(c) {
          switch (c) {
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
        function Ii(c) {
          if ((0, ce.q)()) return null;
          const { variant: r } = c;
          return typeof r == "function"
            ? (0, m.jsx)(Jt, {
                onClick: r,
                children: (0, y.we)("#Login_Help_SignIn"),
              })
            : (0, m.jsx)(Jt, {
                href: `${z.TS.HELP_BASE_URL}wizard/HelpWithLogin?redir=${encodeURIComponent(document.location.href)}`,
                children: (0, y.we)("#Login_Help_SignIn"),
              });
        }
        function ki(c) {
          const { variant: r, redirectUrl: a } = c;
          if (typeof r == "function")
            return (0, m.jsx)(Jt, {
              inline: !0,
              onClick: r,
              children: (0, y.we)("#Login_CreateAccount"),
            });
          {
            const h = a ? `?redir=${encodeURIComponent(a)}` : "";
            switch (r != null ? r : "normal") {
              default:
              case "normal":
                return (0, m.jsx)(Jt, {
                  inline: !0,
                  href: `${z.TS.STORE_BASE_URL}join/${h}`,
                  children: (0, y.we)("#Login_CreateAccount"),
                });
              case "partner":
                return (0, m.jsx)(Jt, {
                  inline: !0,
                  href: `${z.TS.PARTNER_BASE_URL}${h}`,
                  children: (0, y.we)("#Login_CreateSteamworksAccount"),
                });
              case "none":
                return null;
            }
          }
        }
        function Ei(c) {
          const { launcherType: r, variant: a, redirectUrl: h } = c;
          if (r === b.A2g || a == "none") return null;
          const p = r !== void 0;
          let M;
          switch (a != null ? a : "normal") {
            default:
            case "normal":
              M = "#Login_NoSteamAccount";
              break;
            case "partner":
              M = "#Login_NoSteamworksAccount";
              break;
          }
          return (0, m.jsxs)("div", {
            className: (0, E.A)(d().AccountCreation, p && d().InClient),
            children: [
              (0, m.jsx)("span", {
                className: d().AccountCreationPrompt,
                children: (0, y.we)(M),
              }),
              (0, m.jsx)(ki, { variant: a, redirectUrl: h }),
            ],
          });
        }
        async function $() {
          var c, r, a, h, p, M;
          const [g, B, j, O] = await Promise.all([
            SteamClient.System.GetOSType(),
            SteamClient.System.GetSystemInfo(),
            (a =
              (r =
                (c = SteamClient == null ? void 0 : SteamClient.Auth) == null
                  ? void 0
                  : c.GetLocalHostname) == null
                ? void 0
                : r.call(c)) != null
              ? a
              : "",
            (M =
              (p =
                (h = SteamClient == null ? void 0 : SteamClient.Auth) == null
                  ? void 0
                  : h.GetMachineID) == null
                ? void 0
                : p.call(h)) != null
              ? M
              : void 0,
          ]);
          return {
            os_type: g,
            device_friendly_name: j,
            machine_id: O,
            platform_type: t.SS.w0,
            gaming_device_type: B.eGamingDeviceType,
          };
        }
        async function X() {
          return {
            device_friendly_name: window.navigator.userAgent,
            platform_type: t.SS.tS,
          };
        }
        function J(c) {
          var r, a, h;
          const {
              onSuccess: p,
              secureComputer: M = !0,
              isProbablySharedPC: g = !1,
            } = c,
            B = (0, L.useCallback)(
              (Y) => {
                if (Y.bSuccess) {
                  const {
                    strRefreshToken: Qt,
                    strAccessToken: er,
                    strAccountName: Zt,
                    strNewGuardData: di,
                  } = Y;
                  p({
                    strRefreshToken: Qt,
                    strAccessToken: er,
                    strAccountName: Zt,
                    strNewGuardData: di,
                  });
                }
              },
              [p],
            ),
            j = Vt({
              transport: c.transport,
              onComplete: B,
              onDeviceDetails: c.onDeviceDetails,
              onGetMachineAuth: c.onGetMachineAuth,
              onShowAgreement: c.onShowAgreement,
            }),
            [O, I] = (0, L.useState)(kr),
            P = "Login_RememberMeSetting",
            [ae, le] = (0, L.useState)(
              (h =
                (a = (r = c.refreshInfo) == null ? void 0 : r.account_name) !=
                null
                  ? a
                  : c.defaultAccountName) != null
                ? h
                : "",
            ),
            [jt, Mt] = (0, L.useState)(""),
            [_t, D] = (0, L.useState)(
              M &&
                !g &&
                (localStorage == null ? void 0 : localStorage.getItem(P)) !=
                  "0",
            ),
            yt = !(j.eStatus === pt || j.eStatus === Rr || j.eStatus === vr),
            q = () =>
              !ae || !jt ? Promise.resolve(l.nO) : j.start(ae, jt, _t),
            U = () => {
              (0, N.tG)(`Logging in offline with username ${ae}`),
                SteamClient.User.SetLoginCredentials(ae, jt, _t),
                SteamClient.User.StartOffline(!0);
            };
          return (
            (0, L.useEffect)(() => {
              var Y;
              (Y = c.refreshInfo) != null &&
                Y.login_token_id &&
                j.setTokenToRevoke(c.refreshInfo.login_token_id);
            }, [c.refreshInfo, j]),
            {
              password: j,
              onComplete: B,
              eQRStatus: O,
              onQRStatusChange: I,
              strAccountName: ae,
              onAccountNameChange: le,
              strPassword: jt,
              onPasswordChange: Mt,
              bRememberMe: _t,
              onRememberMeChange: (Y) => {
                D(Y),
                  localStorage == null ||
                    localStorage.setItem(P, Y ? "1" : "0");
              },
              onPasswordSubmit: q,
              bInPasswordFlow: yt,
              onTryOffline: U,
            }
          );
        }
        function Ki() {
          const c =
            (window == null ? void 0 : window.location) &&
            (0, rr.f3)(window.location, "need_password");
          return c !== void 0 && c !== "false" && c !== "0";
        }
        function Yi(c) {
          const {
              transport: r,
              onSuccess: a,
              platform: h,
              autoFocus: p,
              refreshInfo: M,
              renderSuccess: g = () => (0, m.jsx)(Fn, {}),
              lastResult: B,
              joinLinkVariant: j,
              defaultAccountName: O,
              secureComputer: I = !0,
              isProbablySharedPC: P = !1,
              onShowAgreement: ae,
              creationRedirectUrl: le,
            } = c,
            jt = z.TS.IN_STEAMUI ? $ : X,
            Mt = z.TS.IN_STEAMUI
              ? (Y) => SteamClient.Auth.GetSteamGuardData(Y)
              : null,
            _t = Ki(),
            D = J({
              transport: r,
              platform: h,
              onSuccess: a,
              refreshInfo: M,
              onDeviceDetails: jt,
              onGetMachineAuth: Mt,
              defaultAccountName: O,
              secureComputer: I,
              isProbablySharedPC: P,
              onShowAgreement: ae,
            }),
            yt = At(),
            q = (0, L.useId)();
          if (B != null && B != l.R)
            return (0, m.jsx)("div", {
              className: d().Login,
              children: (0, m.jsx)(Mi, {
                reset: () => window.location.reload(),
                failure: _.eF.Generic,
                errorReference: B.toString(),
                extendedErrorMessage: D.password.strExtendedErrorMessage,
              }),
            });
          const U = !(0, z.Y2)();
          if (!D.bInPasswordFlow) {
            const Y = (0, m.jsxs)("div", {
              className: (0, E.A)(d().SideBySide, yt && d().Embedded),
              children: [
                (0, m.jsx)(Xi, {
                  strAccountName: D.strAccountName,
                  onAccountNameChange: D.onAccountNameChange,
                  strPassword: D.strPassword,
                  onPasswordChange: D.onPasswordChange,
                  bRememberMe: D.bRememberMe,
                  onRememberMeChange: D.onRememberMeChange,
                  onSubmit: D.onPasswordSubmit,
                  status: D.password.eStatus,
                  autoFocus: p,
                  secureComputer: I,
                  refreshInfo: c.refreshInfo,
                }),
                U &&
                  (0, m.jsx)(en, {
                    transport: r,
                    onQRStatusChange: D.onQRStatusChange,
                    onComplete: D.onComplete,
                    platform: h,
                    refreshInfo: M,
                  }),
              ],
            });
            if (yt) {
              const er = z.TS.IN_STEAMUI,
                Zt = er ? z.TS.LAUNCHER_TYPE : void 0;
              return (0, m.jsxs)(ar, {
                className: (0, E.A)(d().EmbeddedRoot, er && d().InClient),
                children: [
                  !er && !1,
                  !c.refreshInfo &&
                    (0, m.jsx)(qi, {
                      realm: z.TS.EREALM,
                      launcherType: Zt,
                      className: d().HeaderLogo,
                      onBack: c.onBack,
                    }),
                  (0, m.jsx)(Ui, { refreshInfo: M }),
                  Y,
                  (0, m.jsxs)("div", {
                    className: (0, E.A)(
                      d().EmbeddedRootFooter,
                      er && d().InClient,
                    ),
                    children: [
                      (0, m.jsx)(Ii, { variant: c.helpLinkVariant }),
                      (0, m.jsx)(Ei, {
                        launcherType: Zt,
                        variant: j,
                        redirectUrl: le,
                      }),
                    ],
                  }),
                ],
              });
            }
            const Qt = (0, m.jsxs)("div", {
              style: {
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                margin: "8px 16px",
              },
              children: [
                !1,
                (0, m.jsx)("h2", {
                  className: d().PrimaryHeader,
                  id: q,
                  children: c.refreshInfo
                    ? (0, y.we)("#Login_RefreshSignIn")
                    : (0, y.we)("#Login_SignInTitle"),
                }),
                (0, m.jsx)(Ui, { refreshInfo: c.refreshInfo }),
              ],
            });
            return (0, m.jsxs)(ei, {
              title: Qt,
              titleId: q,
              children: [_t && (0, m.jsx)($i, {}), Y],
            });
          }
          const Q = D.password.eStatus;
          switch (Q) {
            case cr:
              return c.renderLoading
                ? (0, m.jsx)(m.Fragment, { children: c.renderLoading() })
                : (0, m.jsx)(hn, {});
            case vt:
            case qt:
            case Ot:
            case xt:
              const Y = Q === vt || Q === qt;
              return (0, m.jsx)(wn, {
                type: Y ? "mobile" : "email",
                onSubmitCode: D.password.addCode,
                status: Q,
                associatedLabel: D.password.strConfirmationAssociatedMessage,
                accountName: D.password.strAccountName,
                onBack: D.password.goBack,
                onCodeHelp: c.onCodeHelp,
              });
            case sr:
            case nr:
              const Qt = Q === sr;
              return (0, m.jsx)(Rn, {
                type: Qt ? "mobile" : "email",
                accountName: D.password.strAccountName,
                onUseCodeOverride: D.password.useCodeOverride,
                onCodeHelp: c.onCodeHelp,
              });
            case ci:
              return (0, m.jsx)(bn, { reset: D.password.reset });
            case zr:
              return (0, m.jsx)(Mi, {
                reset: D.password.reset,
                failure: D.password.eFailureState,
                onRequestOffline: D.onTryOffline,
                errorReference: D.password.strErrorReference,
                extendedErrorMessage: D.password.strExtendedErrorMessage,
              });
            case Yr:
              return (0, m.jsx)(ei, { compact: !0, children: g() });
            default:
              return (
                (0, N.ZI)(`Unknown Phase: ${Q}`),
                (0, m.jsx)(Mi, {
                  reset: D.password.reset,
                  failure: _.eF.Generic,
                  onRequestOffline: D.onTryOffline,
                  errorReference: D.password.strErrorReference,
                  extendedErrorMessage: D.password.strExtendedErrorMessage,
                })
              );
          }
        }
        function Ui(c) {
          var r, a;
          if (!c.refreshInfo) return null;
          let h;
          switch (
            (a = (r = c.refreshInfo) == null ? void 0 : r.reason) != null
              ? a
              : l.zi
          ) {
            case l.zi:
            case l.Vr:
            default:
              h = "#Login_RefreshReason_Generic";
              break;
            case l.KH:
              h = "#Login_RefreshReason_LoggedInElsewhere";
              break;
            case l.CF:
              h = "#Login_RefreshReason_LogonSessionReplaced";
              break;
            case l.Um:
              h = "#Login_RefreshReason_InvalidPassword";
              break;
            case l.fY:
              h = "#Login_RefreshReason_Revoked";
              break;
            case l.ob:
              h = "#Login_RefreshReason_Expired";
              break;
            case l.cr:
              h = "#Login_RefreshReason_PasswordRequiredToKickSession";
              break;
            case l.uN:
              h = "#Login_RefreshReason_AccountDisabled";
              break;
            case l.sG:
              h = "#Login_RefreshReason_ParentalControlRestricted";
              break;
            case l.h_:
              h = "#Login_RefreshReason_RateLimitExceeded";
              break;
          }
          return (0, m.jsxs)("div", {
            className: d().RefreshReasonContainer,
            children: [
              (0, m.jsx)("div", {
                className: d().RefreshTitle,
                children: (0, y.we)("#Login_RefreshSignIn"),
              }),
              (0, m.jsx)("div", {
                className: d().RefreshReason,
                children: (0, y.we)(h),
              }),
            ],
          });
        }
        function $i() {
          return (0, m.jsx)("div", {
            className: d().ConfirmCredntialsNag,
            children: (0, y.we)("#Login_ConfirmCredentials"),
          });
        }
        function Xi(c) {
          const {
              onSubmit: r,
              status: a,
              autoFocus: h,
              refreshInfo: p,
              strAccountName: M,
              onAccountNameChange: g,
              strPassword: B,
              onPasswordChange: j,
              bRememberMe: O,
              onRememberMeChange: I,
              secureComputer: P = !0,
            } = c,
            [ae, le] = (0, L.useState)(!1),
            jt = At(),
            Mt = In(),
            _t = () => {
              r().then(() => {
                Mt() && le(!1);
              });
            },
            D = a === Rr || a === cr,
            yt = a === vr && !ae,
            q = yt
              ? (0, m.jsx)(Wi, {
                  children: (0, y.we)("#Login_CheckCredentials"),
                })
              : (0, m.jsx)(Wi, { children: "\xA0" }),
            U = h && !M,
            Q = h && !!M,
            Y = !!c.refreshInfo,
            Qt = (0, L.useId)(),
            er = (0, L.useId)();
          return (0, m.jsxs)(Qi, {
            onSubmit: _t,
            className: d().LoginForm,
            children: [
              (0, m.jsx)(Di, {
                tone: yt ? "danger" : void 0,
                label: (0, m.jsx)(zi, {
                  highlight: !0,
                  inputId: Qt,
                  children: (0, y.we)("#Login_SignIn_WithAccountName"),
                }),
                value: M,
                onChange: (Zt) => {
                  le(!0), g(Zt);
                },
                autoFocus: U,
                disabled: Y,
                id: Qt,
              }),
              (0, m.jsx)(Di, {
                tone: yt ? "danger" : void 0,
                label: (0, m.jsx)(zi, {
                  inputId: er,
                  children: (0, y.we)("#Login_Password"),
                }),
                value: B,
                onChange: (Zt) => {
                  le(!0), j(Zt);
                },
                type: "password",
                autoFocus: Q,
                id: er,
              }),
              P
                ? (0, m.jsx)(F.he, {
                    toolTipContent: "#Login_RememberMe_Tooltip",
                    direction: "bottom",
                    children: (0, m.jsx)(ln, {
                      label: (0, y.we)("#Login_RememberMe_Short"),
                      value: O,
                      onChange: I,
                    }),
                  })
                : (0, m.jsx)("div", {
                    className: d().InsecureComputer,
                    children: (0, y.we)("#Login_InsecureComputer"),
                  }),
              (0, m.jsx)(un, { loading: D, refreshLogin: Y }),
              q,
              !jt &&
                (0, m.jsx)(Jt, {
                  href: `${z.TS.HELP_BASE_URL}wizard/HelpWithLogin?redir=${encodeURIComponent(document.location.href)}`,
                  align: "center",
                  children: (0, y.we)("#Login_Help_SignIn"),
                }),
            ],
          });
        }
        const Ji = 700;
        function en(c) {
          const r = (0, Ft.R7)(),
            a = () => r.ownerWindow.screen.width < Ji,
            [h, p] = (0, L.useState)(a());
          return (
            (0, W.l6)(r.ownerWindow, "resize", () => {
              p(a());
            }),
            (0, m.jsx)("div", {
              className: d().QRSection,
              children: h ? (0, m.jsx)(nn, { ...c }) : (0, m.jsx)(rn, { ...c }),
            })
          );
        }
        function tn(c) {
          const r =
            z.TS.STORE_BASE_URL +
            "join/?guest=1&purchaseType=gift&checkout=1&redir=" +
            encodeURIComponent(c.redirectURL);
          return (0, m.jsx)("div", {
            className: d().GuestLayout,
            children: (0, m.jsx)(ei, {
              compact: !0,
              children: (0, m.jsxs)("div", {
                className: d().GuestContainer,
                children: [
                  (0, m.jsx)("div", {
                    className: d().GuestText,
                    children: (0, y.oW)(
                      "#Login_Guest",
                      (0, m.jsx)("a", {
                        href: `${r}`,
                        style: { textDecoration: "underline" },
                      }),
                    ),
                  }),
                  (0, m.jsx)("a", {
                    className: d().GuestLink,
                    href: `${r}`,
                    children: (0, m.jsx)("button", {
                      className: d().GuestButton,
                      children: (0, y.we)("#Login_GuestContinue"),
                    }),
                  }),
                ],
              }),
            }),
          });
        }
        function rn(c) {
          return (0, m.jsx)(Ni, { ...c });
        }
        function nn(c) {
          const [r, a] = (0, L.useState)(!1);
          return r
            ? (0, m.jsx)(Ni, { ...c, bShowHideButton: !0, setShowQR: a })
            : (0, m.jsx)(sn, { setShowQR: a });
        }
        function sn(c) {
          return (0, m.jsxs)("div", {
            className: d().MessagingContainer,
            children: [
              (0, m.jsx)("div", {
                className: d().MessagingTag,
                children: (0, y.we)("#Login_MobileFlow_New"),
              }),
              (0, m.jsx)("div", {
                className: d().MessagingSubtitle,
                children: (0, m.jsx)("div", {
                  className: d().MessagingSubtitle,
                  children: (0, y.we)("#Login_MobileFlow_SignIn_ScanQR"),
                }),
              }),
              (0, m.jsx)("div", {
                className: d().MessagingButton,
                onClick: () => c.setShowQR(!0),
                children: (0, y.we)("#Login_MobileFlow_ShowMeQR_Button"),
              }),
              (0, m.jsx)("a", {
                href: `${z.TS.STORE_BASE_URL}mobile`,
                className: d().MessagingLink,
                children: (0, y.we)("#Login_JoinBeta_Button"),
              }),
            ],
          });
        }
        function Ni(c) {
          const {
            onQRStatusChange: r,
            transport: a,
            onComplete: h,
            platform: p,
            refreshInfo: M,
            bShowHideButton: g = !1,
            setShowQR: B,
          } = c;
          return (0, m.jsxs)("div", {
            className: d().QRCodeContainer,
            children: [
              (0, m.jsx)(zi, {
                highlight: !0,
                children: (0, y.we)("#Login_SignIn_OrWithQRCode"),
              }),
              (0, m.jsx)("div", {
                className: d().QR,
                children: (0, m.jsx)(qr, {
                  onStatusChange: r,
                  transport: a,
                  onComplete: h,
                  platform: p,
                  refreshInfo: M,
                }),
              }),
              g &&
                B &&
                (0, m.jsx)("div", {
                  className: d().QRHideLink,
                  onClick: () => B(!1),
                  children: (0, y.we)("#Button_Hide"),
                }),
              (0, m.jsx)("div", {
                className: d().UseMobileAppForQR,
                children: (0, y.oW)(
                  "#Login_UseMobileAppForQR_Inline",
                  (0, m.jsx)(Jt, {
                    href: `${z.TS.STORE_BASE_URL}mobile`,
                    align: "center",
                  }),
                ),
              }),
            ],
          });
        }
        function kn() {
          const c = "bShowLoginQR",
            [r, a] = useState(
              (localStorage == null ? void 0 : localStorage.getItem(c)) === "1",
            ),
            h = useCallback((p) => {
              a(p),
                p
                  ? localStorage == null || localStorage.setItem(c, "1")
                  : localStorage == null || localStorage.removeItem(c);
            }, []);
          return [r, h];
        }
        function Di(c) {
          const { label: r, error: a, tone: h, autoFocus: p, id: M, ...g } = c,
            B = h != null ? h : a ? "danger" : void 0;
          return (0, m.jsxs)("div", {
            className: d().TextField,
            children: [
              typeof r == "string"
                ? (0, m.jsx)(zi, { inputId: M, children: r })
                : r,
              a && (0, m.jsx)(on, { type: "error", children: a }),
              (0, m.jsx)(an, { autoFocus: p, tone: B, id: M, ...g }),
            ],
          });
        }
        function zi(c) {
          const { children: r, inputId: a, highlight: h } = c;
          return (0, m.jsx)("label", {
            className: (0, E.A)(d().FieldLabel, h && d().Highlight),
            htmlFor: a,
            children: r,
          });
        }
        function an(c) {
          const {
            value: r,
            onChange: a,
            type: h = "text",
            tone: p,
            className: M,
            autoFocus: g,
            disabled: B,
            id: j,
          } = c;
          return (0, m.jsx)("input", {
            value: r,
            type: h,
            autoFocus: g,
            onChange: (O) => a(O.target.value),
            className: (0, E.A)(d().TextInput, p === "danger" && d().Danger, M),
            disabled: B,
            id: j,
          });
        }
        function on(c) {
          const { children: r, type: a } = c;
          return (0, m.jsx)("div", {
            className: (0, E.A)(d().FieldHint, a === "error" && d().Error),
            children: r,
          });
        }
        function ln(c) {
          const { label: r, onChange: a, value: h } = c;
          let p = () => {
            a && a(!h);
          };
          const M = (0, L.useId)();
          return (0, m.jsxs)("div", {
            className: d().CheckboxField,
            onClick: p,
            onKeyPress: (g) => {
              g.key == " " && (p(), g.preventDefault());
            },
            children: [
              (0, m.jsx)(cn, { labelledBy: M, value: h }),
              (0, m.jsx)("label", {
                id: M,
                className: d().CheckboxFieldLabel,
                children: r,
              }),
            ],
          });
        }
        function cn(c) {
          const { value: r, labelledBy: a } = c;
          return (0, m.jsx)("div", {
            tabIndex: 0,
            className: d().Checkbox,
            "aria-labelledby": a,
            role: "checkbox",
            "aria-checked": r,
            children:
              r &&
              (0, m.jsx)("div", {
                className: d().Check,
                children: (0, m.jsx)(wt.Jlk, { strokeWidth: 35 }),
              }),
          });
        }
        function un(c) {
          const { refreshLogin: r, ...a } = c;
          return r &&
            "SteamClient" in globalThis &&
            "User" in SteamClient &&
            "StartShutdown" in SteamClient.User
            ? (0, m.jsx)(dn, {})
            : (0, m.jsx)(mn, { ...a });
        }
        function mn(c) {
          return (0, m.jsx)("div", {
            className: d().SignInButtonContainer,
            children: (0, m.jsx)(fn, {
              ...c,
              children: (0, y.we)("#Login_SignIn"),
            }),
          });
        }
        function dn() {
          const c = () => SteamClient.User.StartShutdown(!0);
          return (0, m.jsxs)("div", {
            className: d().RefreshButtonContainer,
            children: [
              (0, m.jsx)("button", {
                className: d().SubmitButton,
                type: "submit",
                children: (0, y.we)("#Login_SignIn"),
              }),
              (0, m.jsx)("button", {
                className: d().RefreshQuitButton,
                onClick: c,
                children: (0, y.we)("#Login_ExitSteam"),
              }),
            ],
          });
        }
        function fn(c) {
          return (0, m.jsx)(Pi, { type: "submit", ...c });
        }
        function Pi(c) {
          const {
              className: r,
              loading: a,
              disabled: h,
              children: p,
              ...M
            } = c,
            g = h || a;
          return (0, m.jsxs)("button", {
            className: (0, E.A)(d().SubmitButton, a && d().Loading, r),
            disabled: g,
            ...M,
            children: [
              p,
              a &&
                (0, m.jsx)("div", {
                  className: d().LoadingContainer,
                  children: (0, m.jsx)(Oi, { size: "small" }),
                }),
            ],
          });
        }
        function Wi(c) {
          const r = c.children || "\xA0";
          return (0, m.jsx)("div", { className: d().FormError, children: r });
        }
        function hn() {
          return (0, m.jsx)(ei, {
            compact: !0,
            children: (0, m.jsxs)(ar, {
              alignItems: "center",
              className: (0, E.A)(
                d().WaitingForTokenContainer,
                z.TS.IN_STEAMUI && d().Client,
              ),
              children: [
                (0, m.jsx)(Wt.t, { size: "xlarge" }),
                (0, m.jsx)("div", {
                  className: (0, E.A)(d().Description),
                  children: (0, y.we)(
                    z.TS.IN_STEAMUI
                      ? "#Login_ConnectingToSteam"
                      : "#Login_LoadingAccountInfo",
                  ),
                }),
              ],
            }),
          });
        }
        function Oi(c) {
          const { size: r } = c;
          return (0, m.jsx)("div", {
            className: (0, E.A)(
              d().LoadingSpinner,
              r == "small" && d().Small,
              (r == "medium" || !r) && d().Medium,
              r == "large" && d().Large,
            ),
          });
        }
        function gn(c) {
          return (0, m.jsx)("div", {
            className: d().OfferOffline,
            children: (0, m.jsx)("button", {
              className: d().OfferOfflineButton,
              onClick: c.onRequestOffline,
              children: (0, y.we)("#Login_GoOffline_Button"),
            }),
          });
        }
        function Mi(c) {
          const {
              reset: r,
              failure: a,
              onRequestOffline: h,
              errorReference: p,
              extendedErrorMessage: M,
            } = c,
            { title: g, description: B } = pn(a, M),
            j = z.TS.IN_STEAMUI && a == _.eF.Network;
          return (0, m.jsxs)(ei, {
            compact: !0,
            children: [
              (0, m.jsxs)(ar, {
                alignItems: "center",
                gap: 12,
                children: [
                  (0, m.jsx)("div", {
                    className: d().FailureTitle,
                    children: g,
                  }),
                  (0, m.jsx)("div", {
                    className: d().FailureDescription,
                    children: B,
                  }),
                  j &&
                    (0, m.jsx)("div", {
                      className: d().FailureDescription,
                      children: (0, y.we)("#Login_GoOffline_Description"),
                    }),
                  (0, m.jsxs)(Ai, {
                    className: d().FailureButtons,
                    children: [
                      (0, m.jsx)(Pi, {
                        className: d().TryAgainButton,
                        onClick: r,
                        children: (0, y.we)("#Button_Retry"),
                      }),
                      j && h && (0, m.jsx)(gn, { onRequestOffline: h }),
                    ],
                  }),
                ],
              }),
              p &&
                (0, m.jsx)("div", {
                  className: d().MutedErrorReference,
                  children: (0, y.we)("#Login_Error_Reference", p),
                }),
            ],
          });
        }
        function pn(c, r = "") {
          let a = { title: "", description: "" };
          switch (c) {
            case _.eF.None:
              return { title: "", description: "" };
            case _.eF.Expired:
              a = {
                title: (0, y.we)("#Login_Error_Expired_Title"),
                description: (0, y.we)("#Login_Error_Expired_Description"),
              };
              break;
            case _.eF.Network:
              a = {
                title: (0, y.we)("#Login_Error_Network_Title"),
                description: (0, y.we)("#Login_Error_Network_Description"),
              };
              break;
            case _.eF.MoveAuthenticator:
              a = {
                title: (0, y.we)("#Error_Generic"),
                description: (0, y.we)(
                  "#Login_Error_MoveAuthenticator_Description",
                ),
              };
              break;
            case _.eF.RateLimitExceeded:
              a = {
                title: (0, y.we)("#Login_Error_RateLimit_Title"),
                description: (0, y.we)("#Login_Error_RateLimit_Description"),
              };
              break;
            case _.eF.AnonymousLogin:
              a = {
                title: (0, y.we)("#Login_Error_Anonymous_Title"),
                description: (0, y.we)("#Login_Error_Anonymous_Description"),
              };
              break;
            case _.eF.Generic:
            default:
              a = {
                title: (0, y.we)("#Error_Generic"),
                description: (0, y.we)("#Login_Error_Default_Description"),
              };
              break;
          }
          return r && (a.description = r), a;
        }
        function bn(c) {
          const { reset: r } = c;
          return (0, m.jsx)(Mi, { reset: r, failure: _.eF.Generic });
        }
        function wn(c) {
          const {
              type: r,
              onSubmitCode: a,
              status: h,
              accountName: p,
              associatedLabel: M,
              onBack: g,
            } = c,
            [B, j] = (0, L.useState)([]),
            [O, I] = (0, L.useState)(!1),
            [P, ae] = (0, L.useState)(!1),
            [le, jt] = (0, L.useState)(!1),
            [Mt, _t] = (0, L.useState)(0),
            D = r === "mobile",
            yt = B.join(""),
            q = Ir(yt, le),
            U = (ji) => {
              ae(!0),
                a(ji).then(() => {
                  I(!1), ae(!1);
                });
            },
            Q = (ji) => {
              O || I(!0), j(ji);
              const Zi = ji.join("");
              Ir(Zi, le) && U(Zi);
            },
            Y = () => {
              q && U(yt);
            },
            Qt = () => {
              jt(!le), j([]), a(""), _t(Mt + 1);
            },
            er = !O && (h === qt || h === xt);
          let Zt, di;
          return (
            le
              ? r === "mobile"
                ? ((di = (0, m.jsx)(Hi, {})), (Zt = "#Login_UseMobileCode"))
                : ((di = (0, m.jsx)(Hi, {})), (Zt = "#Login_UseEmailCode"))
              : ((di =
                  r === "mobile"
                    ? (0, m.jsx)(Bn, {})
                    : (0, m.jsx)(yn, { emailAddress: M })),
                (Zt = "#Login_UseBackupCode")),
            (0, m.jsx)(ei, {
              title: (0, m.jsx)(qi, {}),
              compact: !0,
              children: (0, m.jsx)(Qi, {
                onSubmit: Y,
                children: (0, m.jsxs)(ar, {
                  alignItems: "center",
                  gap: 14,
                  children: [
                    (0, m.jsx)(Gi, { type: r, accountName: p }),
                    (0, m.jsxs)("div", {
                      className: d().ConfirmationEntryContainer,
                      children: [
                        (0, m.jsxs)(ar, {
                          alignItems: "center",
                          gap: 2,
                          children: [
                            er &&
                              (0, m.jsx)(Wi, {
                                children: (0, y.we)(
                                  "#Login_IncorrectSteamGuard",
                                ),
                              }),
                            (0, m.jsx)(
                              vn,
                              {
                                value: B,
                                onChange: Q,
                                tone: er ? "danger" : void 0,
                                loading: P,
                                backupCode: le,
                              },
                              Mt,
                            ),
                          ],
                        }),
                        di,
                      ],
                    }),
                    D &&
                      (0, m.jsx)(Jt, {
                        onClick: Qt,
                        align: "center",
                        children: (0, y.we)(Zt),
                      }),
                    (0, m.jsx)(Vi, { type: r, onCodeHelp: c.onCodeHelp }),
                  ],
                }),
              }),
            })
          );
        }
        function Vi(c) {
          if ((0, ce.q)()) return null;
          let r, a;
          return (
            c.type === "mobile"
              ? ((r = `${z.TS.HELP_BASE_URL}wizard/HelpWithLoginInfo?lost=8&issueid=402`),
                (a = (0, y.we)("#Login_Help_AccessMobileApp")))
              : ((r = `${z.TS.HELP_BASE_URL}wizard/HelpWithSteamGuardCode`),
                (a = (0, y.we)("#Login_Help_AccessEmail"))),
            c.onCodeHelp
              ? (0, m.jsx)(Jt, {
                  onClick: () => c.onCodeHelp(r),
                  align: "center",
                  children: a,
                })
              : (0, m.jsx)(Jt, { href: r, align: "center", children: a })
          );
        }
        function Hi() {
          return (0, m.jsx)(Ai, {
            justifyContent: "space-evenly",
            alignItems: "center",
            className: d().EnterBackupCodeContainer,
            children: (0, m.jsxs)(ar, {
              children: [
                (0, m.jsx)("div", {
                  className: d().EnterCodeFromMobile,
                  children: (0, y.we)("#Login_EnterBackupCode"),
                }),
                (0, m.jsx)("div", {
                  className: d().Label,
                  children: (0, y.we)("#Login_EnterBackupCodeDescription"),
                }),
              ],
            }),
          });
        }
        function Bn() {
          return (0, m.jsxs)(Ai, {
            justifyContent: "space-evenly",
            alignItems: "center",
            className: d().EnterCodeFromMobileContainer,
            children: [
              (0, m.jsx)("div", {
                className: d().EnterCodeFromMobile,
                children: (0, y.we)("#Login_EnterMobileCode"),
              }),
              (0, m.jsx)(Mn, { className: d().AwaitingMobileConfIcon }),
            ],
          });
        }
        function yn(c) {
          return (0, m.jsxs)(Ai, {
            justifyContent: "space-evenly",
            alignItems: "center",
            className: d().EnterCodeFromEmailContainer,
            children: [
              (0, m.jsx)(Tn, {
                align: "center",
                spacing: 6,
                children: (0, m.jsx)("div", {
                  className: d().EnterCodeFromEmail,
                  children: (0, y.PP)(
                    "#Login_EnterEmailCode",
                    (0, m.jsx)("span", {
                      className: d().EnterCodeEmailAddress,
                      children: c.emailAddress,
                    }),
                  ),
                }),
              }),
              (0, m.jsx)(Cn, { className: d().AwaitingEmailConfIcon }),
            ],
          });
        }
        function Gi(c) {
          const { accountName: r, type: a } = c,
            h =
              a === "mobile"
                ? (0, y.we)("#Login_MobileProtectingAccount")
                : (0, y.we)("#Login_EmailProtectingAccount"),
            p = At();
          return (0, m.jsxs)("div", {
            className: d().ProtectingAccount,
            children: [
              (0, m.jsx)("div", {
                className: d().Label,
                children: (0, y.PP)(
                  "#Login_ActiveAccountName",
                  (0, m.jsx)("span", {
                    className: d().AccountName,
                    children: r,
                  }),
                ),
              }),
              !p &&
                (0, m.jsx)("div", { className: d().Description, children: h }),
            ],
          });
        }
        function Sn() {
          return (0, m.jsx)(ar, {
            alignItems: "center",
            children: (0, m.jsxs)("div", {
              className: d().ConfirmationContainer,
              children: [
                (0, m.jsx)("img", { src: (0, Si.YJ)(Et) }),
                (0, m.jsx)("div", {
                  className: d().AwaitingMobileConfText,
                  children: (0, y.oW)("#Login_AwaitingMobileConfirmation"),
                }),
              ],
            }),
          });
        }
        function Mn(c) {
          return (0, m.jsxs)("svg", {
            viewBox: "0 0 33 49",
            fill: "currentColor",
            className: c.className,
            children: [
              (0, m.jsx)("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M28 47.1106C29.1046 47.1106 30 46.2151 30 45.1106L30 3.72705C30 2.62248 29.1046 1.72705 28 1.72705L5 1.72705C3.89544 1.72705 3 2.62248 3 3.72705L3 45.1106C3 46.2151 3.89543 47.1106 5 47.1106L28 47.1106ZM5.68119 5.82741L27.3188 5.82741L27.3188 42.7772H5.68119L5.68119 5.82741ZM20.9999 44.944C20.9999 45.3429 20.6766 45.6662 20.2777 45.6662L12.7221 45.6662C12.3233 45.6662 11.9999 45.3429 11.9999 44.944C11.9999 44.5451 12.3233 44.2218 12.7221 44.2218H20.2777C20.6766 44.2218 20.9999 44.5451 20.9999 44.944ZM17.2778 4.44406C17.6767 4.44406 18 4.12071 18 3.72184C18 3.32296 17.6767 2.99962 17.2778 2.99962L15.7222 2.99962C15.3233 2.99962 15 3.32296 15 3.72184C15 4.12071 15.3233 4.44406 15.7222 4.44406L17.2778 4.44406Z",
              }),
              (0, m.jsx)("path", {
                fill: "currentColor",
                d: "M22.2456 22.4164C22.2456 21.6666 22.8127 21.0002 23.6228 21.0002C24.3519 21.0002 25 21.6666 25 22.4164C25 23.1661 24.3519 23.8325 23.6228 23.8325C22.8937 23.8325 22.2456 23.1661 22.2456 22.4164Z",
              }),
              (0, m.jsx)("path", {
                fill: "currentColor",
                d: "M18.6812 22.4164C18.6812 21.6666 19.2483 21.0002 20.0584 21.0002C20.8685 21.0002 21.5166 21.6666 21.4355 22.4164C21.4355 23.1661 20.8685 23.8325 20.0584 23.8325C19.3293 23.8325 18.6812 23.1661 18.6812 22.4164Z",
              }),
              (0, m.jsx)("path", {
                fill: "currentColor",
                d: "M15.1977 22.4164C15.1977 21.6666 15.7648 21.0002 16.5749 21.0002C17.304 21.0002 17.9521 21.6666 17.9521 22.4164C17.9521 23.1661 17.385 23.8325 16.5749 23.8325C15.8458 23.8325 15.1977 23.1661 15.1977 22.4164Z",
              }),
              (0, m.jsx)("path", {
                fill: "currentColor",
                d: "M11.7143 22.4164C11.7143 21.6666 12.2814 21.0002 13.0915 21.0002C13.8206 21.0002 14.4686 21.6666 14.4686 22.4164C14.4686 23.1661 13.9016 23.8325 13.0915 23.8325C12.3624 23.8325 11.7143 23.1661 11.7143 22.4164Z",
              }),
              (0, m.jsx)("path", {
                fill: "currentColor",
                d: "M8.14983 22.4164C8.14983 21.6666 8.7169 21.0002 9.527 21.0002C10.3371 21.0002 10.9852 21.6666 10.9042 22.4164C10.9042 23.1661 10.3371 23.8325 9.527 23.8325C8.79791 23.8325 8.14983 23.1661 8.14983 22.4164Z",
              }),
            ],
          });
        }
        function Cn(c) {
          return (0, m.jsx)("svg", {
            viewBox: "0 0 58 56",
            fill: "none",
            className: c.className,
            children: (0, m.jsx)("path", {
              d: "M57.9352 24.5887C57.8463 24.233 57.8463 23.8774 57.6684 23.5217C57.4017 22.8993 57.046 22.4547 56.5125 22.0101L49.577 16.4083V10.9844C49.577 8.85041 47.8876 7.16098 45.7536 7.16098H38.1956L31.5269 1.73706C30.1042 0.581137 28.0591 0.581137 26.6364 1.73706L19.9677 7.16098H12.4097C10.2757 7.16098 8.58631 8.93932 8.58631 10.9844V16.4083L1.56188 22.0101C1.02838 22.3658 0.672713 22.8993 0.405962 23.5217V23.6106C0.228128 24.1441 0.050293 24.5887 0.050293 25.1222V52.1529C0.050293 53.2199 0.494878 54.1091 1.1173 54.8204C1.82863 55.5318 2.80672 55.8874 3.7848 55.8874H54.0228C55.0898 55.8874 55.979 55.4428 56.6903 54.8204C57.4017 54.1091 57.7573 53.131 57.7573 52.1529V25.1222C57.9352 24.8554 57.9352 24.7665 57.9352 24.5887ZM49.577 19.7872L54.7342 23.9663L49.577 28.9456V19.7872ZM28.148 3.60431C28.4148 3.42648 28.6815 3.24864 28.9483 3.24864C29.3039 3.24864 29.5707 3.33756 29.7485 3.60431L34.0165 7.07207H23.9689L28.148 3.60431ZM10.9871 10.9844C10.9871 10.2731 11.5206 9.73958 12.2319 9.73958H45.6646C46.376 9.73958 46.9095 10.362 46.9095 10.9844V31.4353L46.8206 31.5242L40.2407 37.9262H17.6558L11.076 31.5242L10.9871 31.4353V10.9844ZM8.40848 19.7872V28.9456L3.34022 23.9663L8.40848 19.7872ZM2.62888 51.6194V26.9005L15.2551 39.26L2.62888 51.6194ZM4.49614 53.3088L17.6558 40.5048H40.2407L53.4004 53.3088H4.49614ZM55.3566 51.6194L42.6415 39.1711L55.2677 26.8116V51.6194H55.3566ZM29.0372 35.3476C30.5488 35.3476 31.9715 35.0809 33.3941 34.5474C34.0165 34.2806 34.3722 33.4804 34.1055 32.858C33.8387 32.2355 33.0385 31.8799 32.416 32.1466C31.349 32.5912 30.1931 32.769 29.0372 32.769C27.3478 32.769 25.7473 32.3245 24.4135 31.5242C21.746 29.9237 20.0566 27.0784 20.0566 23.7884C20.0566 18.8091 24.0579 14.8078 29.0372 14.8078C34.0165 14.8078 38.0178 18.8091 38.0178 23.7884V24.4109C38.0178 25.4779 37.2175 26.367 36.0616 26.367C34.9946 26.367 34.1055 25.4779 34.1055 24.4109V23.7884C34.1055 20.9431 31.7936 18.6313 28.9483 18.6313C26.1029 18.6313 23.7911 20.9431 23.7911 23.7884C23.7911 26.6338 26.1029 28.9456 28.9483 28.9456C30.3709 28.9456 31.7047 28.3232 32.5939 27.434C33.3941 28.4121 34.639 28.9456 35.9727 28.9456C38.4624 28.9456 40.5075 26.9894 40.5075 24.4109V23.7884C40.5075 17.3864 35.2614 12.2292 28.9483 12.2292C22.6352 12.2292 17.3891 17.4753 17.3891 23.7884C17.3891 26.7227 18.545 29.4791 20.3233 31.5242C22.5463 33.925 25.5694 35.3476 29.0372 35.3476ZM29.0372 26.367C27.6145 26.367 26.4586 25.2111 26.4586 23.7884C26.4586 22.3658 27.6145 21.2098 29.0372 21.2098C30.4599 21.2098 31.6158 22.3658 31.6158 23.7884C31.5269 25.2111 30.371 26.367 29.0372 26.367Z",
              fill: "#1A99FF",
            }),
          });
        }
        function En(c) {
          var r, a, h;
          const [p, M] = useSvgId();
          return jsxs("svg", {
            className: c.className,
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
                fill: (r = c.phoneOutlineColor) != null ? r : "currentColor",
              }),
              jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M3.10899 2.54601C3 2.75992 3 3.03995 3 3.6V48.4C3 48.9601 3 49.2401 3.10899 49.454C3.20487 49.6422 3.35785 49.7951 3.54601 49.891C3.75992 50 4.03995 50 4.6 50H29.4C29.9601 50 30.2401 50 30.454 49.891C30.6422 49.7951 30.7951 49.6422 30.891 49.454C31 49.2401 31 48.9601 31 48.4V3.6C31 3.03995 31 2.75992 30.891 2.54601C30.7951 2.35785 30.6422 2.20487 30.454 2.10899C30.2401 2 29.9601 2 29.4 2H23C22.9469 2 22.8965 2.0232 22.8562 2.06277C22.7957 2.12213 22.7857 2.22585 22.7855 2.32129C22.7839 3.09871 22.7694 3.51909 22.6437 3.85908C22.4867 4.28385 22.2109 4.63059 21.8671 4.82458C21.5561 5 21.1565 5 20.3571 5H13.6429C12.8435 5 12.4439 5 12.1329 4.82458C11.7891 4.63059 11.5133 4.28385 11.3563 3.85908C11.2306 3.51909 11.2161 3.09871 11.2145 2.32129C11.2143 2.22585 11.2043 2.12213 11.1438 2.06277C11.1035 2.0232 11.0531 2 11 2H4.6C4.03995 2 3.75992 2 3.54601 2.10899C3.35785 2.20487 3.20487 2.35785 3.10899 2.54601Z",
                fill: (a = c.backgroundColor) != null ? a : "currentColor",
              }),
              jsx("g", {
                clipPath: M,
                children: jsx("path", {
                  d: "M24.3333 17.6667H22.5V19.5H24.3333V17.6667ZM26.1667 15.8333V21.3333H20.6667V15.8333H26.1667V15.8333ZM27.0833 26.8333H25.25C24.3333 26.8333 24.3333 26.8333 24.3333 27.75V31.4167C24.3333 32.3335 24.3333 32.3335 25.25 32.3335H27.0833C28 32.3335 28 32.3335 28 31.4167V27.75C28 26.8333 28 26.8333 27.0833 26.8333ZM21.5833 26.8333C20.6665 26.8333 20.6665 26.8333 20.6665 27.75C20.6665 28.6667 20.6665 28.6667 21.5833 28.6667C22.5 28.6667 22.5 28.6667 22.5 27.75C22.5 26.8333 22.5 26.8333 21.5833 26.8333ZM27.0833 34.1667C26.1665 34.1667 26.1665 34.1667 26.1665 35.0835C26.1665 36.0002 26.1665 36.0002 27.0833 36.0002C28 36 28 36 28 35.0833C28 34.1667 28 34.1667 27.0833 34.1667ZM16.0833 23.1667C15.1665 23.1667 15.1665 23.1667 15.1665 24.0835C15.1665 25.0002 15.1665 25.0002 16.0833 25.0002C17 25.0002 17 25 17 24.0833C17 23.1665 17 23.1667 16.0833 23.1667ZM11.5 17.6667H9.66674V19.5H11.5V17.6667ZM13.3333 15.8333V21.3333H7.83326V15.8333H13.3333V15.8333ZM14.25 14H6.91674C6 14 6 14 6 14.9167V24.0835C6 25 6 25 6.91674 25C7.83348 25 7.83348 25 7.83348 24.0833V23.1665H14.25C15.1667 23.1665 15.1667 23.1665 15.1667 22.2498V19.5H16.0835C17 19.5 17 19.5 17 18.5833C17 17.6665 17 17.6665 16.0833 17.6665H15.1665V14.9165C15.1667 14 15.1667 14 14.25 14ZM27.0833 30.5H23.4167C22.5 30.5 22.5 30.5 22.5 31.4167V34.1667H21.5833C20.6665 34.1667 20.6665 34.1667 20.6665 35.0835C20.6665 36.0002 20.6665 36.0002 21.5833 36.0002H23.4165C24.3333 36.0002 24.3333 36.0002 24.3333 35.0835V32.3335H27.0833C28 32.3335 28 32.3335 28 31.4167C28 30.5 28 30.5 27.0833 30.5ZM19.75 30.5C18.8333 30.5 18.8333 30.5 18.8333 31.4167C18.8333 32.3335 18.8333 32.3335 19.75 32.3335C20.6667 32.3335 20.6667 32.3335 20.6667 31.4167C20.6667 30.5 20.6667 30.5 19.75 30.5ZM10.5833 25C9.66652 25 9.66652 25 9.66652 25.9167V26.8335H6.91652C6 26.8333 6 26.8333 6 27.75V35.0833C6 36 6 36 6.91674 36H14.25C15.1667 36 15.1667 36 15.1667 35.0833V34.1665H17V35.0833C17 36 17 36 17.9167 36C18.8335 36 18.8335 36 18.8335 35.0833V33.25C18.8335 32.3333 18.8335 32.3333 17.9167 32.3333H15.1667V30.5H17.9167C18.8335 30.5 18.8335 30.5 18.8335 29.5833C18.8335 28.6665 18.8335 28.6665 17.9167 28.6665H15.1667V27.75C15.1667 26.8333 15.1667 26.8333 14.25 26.8333H11.5V25.9165C11.5 25 11.5 25 10.5833 25ZM13.3333 28.6667V34.1667H7.83326V28.6667H13.3333ZM11.5 30.5H9.66674V32.3333H11.5V30.5ZM27.0833 14H17.9167C17 14 17 14 17 14.9167C17 15.8335 17 15.8335 17.9167 15.8335H18.8335V22.25C18.8335 23.1667 18.8335 23.1667 19.7502 23.1667H20.667V24.0835C20.667 25.0002 20.667 25.0002 21.5837 25.0002C22.5 25 22.5 25 22.5 24.0833V23.1665H24.3333V27.75C24.3333 28.6667 24.3333 28.6667 25.25 28.6667C26.1667 28.6667 26.1667 28.6667 26.1667 27.75V23.1667H27.0835C28.0002 23.1667 28.0002 23.1667 28.0002 22.25V14.9167C28 14 28 14 27.0833 14Z",
                  fill: (h = c.qrCodeColor) != null ? h : "currentColor",
                }),
              }),
              jsx("defs", {
                children: jsx("clipPath", {
                  id: p,
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
        function Wn(c) {
          return jsxs("svg", {
            className: c.className,
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
        function Rn(c) {
          const { type: r, accountName: a, onUseCodeOverride: h } = c,
            p = At(),
            M = (0, m.jsx)(Vi, { type: "mobile", onCodeHelp: c.onCodeHelp }),
            g = p
              ? (0, m.jsx)("div", {
                  style: { paddingBottom: "20px" },
                  children: (0, m.jsx)(Jt, {
                    align: "center",
                    onClick: h,
                    children: (0, y.we)("#Login_EnterCodeInstead"),
                  }),
                })
              : (0, m.jsx)("div", {
                  className: d().EnterCodeInsteadLink,
                  children: (0, m.jsx)(Jt, {
                    align: "center",
                    onClick: h,
                    children: (0, y.we)("#Login_EnterCodeInstead"),
                  }),
                });
          return (0, m.jsx)(ei, {
            title: (0, m.jsx)(qi, {}),
            compact: !0,
            children: (0, m.jsxs)(ar, {
              gap: z.TS.IN_STEAMUI ? 24 : 40,
              children: [
                (0, m.jsx)(Gi, { type: r, accountName: a }),
                (0, m.jsx)(Sn, {}),
                (0, m.jsxs)("div", {
                  className: d().LinkContainer,
                  children: [g, M],
                }),
              ],
            }),
          });
        }
        function Jt(c) {
          const { children: r, align: a, inline: h } = c,
            p = (0, E.A)(d().TextLink, a === "center" && d().TextAlignCenter);
          if ("href" in c) {
            const M = z.TS.IN_STEAMUI
              ? `steam://openurl_external/${c.href}`
              : c.href;
            return (0, m.jsx)("a", { className: p, href: M, children: r });
          } else {
            const M = h ? "span" : "div";
            return (0, m.jsx)(M, {
              className: p,
              onClick: c.onClick,
              children: r,
            });
          }
        }
        function Qi(c) {
          const { onSubmit: r, children: a, className: h } = c,
            p = (M) => (M.preventDefault(), r(), !1);
          return (0, m.jsx)("form", { onSubmit: p, className: h, children: a });
        }
        function On(c) {
          const { align: r, ...a } = c;
          return jsx("div", {
            className: classnames(styles.Text, r === "center" && styles.Center),
            ...a,
          });
        }
        function ar(c) {
          const {
              alignItems: r,
              justifyContent: a,
              gap: h,
              className: p,
              ariaLabelledBy: M,
              children: g,
            } = c,
            B = (0, E.A)(
              d().FlexCol,
              r === "center" && d().AlignItemsCenter,
              a === "center" && d().JustifyContentCenter,
              p,
            ),
            j = h ? { gap: typeof h == "number" ? `${h}px` : h } : void 0;
          return (0, m.jsx)("section", {
            className: B,
            style: j,
            "aria-labelledby": M,
            children: g,
          });
        }
        function Ai(c) {
          const {
              children: r,
              justifyContent: a,
              alignItems: h,
              className: p,
            } = c,
            M = {
              display: "flex",
              flexDirection: "row",
              justifyContent: a,
              alignItems: h,
            };
          return (0, m.jsx)("div", { style: M, className: p, children: r });
        }
        function vn(c) {
          const { onChange: r, backupCode: a = !1, ...h } = c,
            p = (M) => {
              M = M.map((B) => B.toUpperCase());
              const g = M.join("").trim();
              $r(g, a) && r(M);
            };
          return (0, m.jsx)(ee, {
            length: Ar(a),
            backupCode: a,
            onChange: p,
            autoFocus: !0,
            ...h,
            allowCharacter: (M) => /\w/g.test(M),
          });
        }
        function Tn(c) {
          var r;
          const { children: a, spacing: h = 0, align: p } = c;
          return (0, m.jsx)(ar, {
            alignItems: p,
            children:
              (r = L.Children.map(a, (M, g) =>
                M
                  ? (0, m.jsx)("div", {
                      style: g > 0 ? { paddingTop: `${h}px` } : void 0,
                      children: M,
                    })
                  : null,
              )) == null
                ? void 0
                : r.filter(Boolean),
          });
        }
        function ei(c) {
          const { title: r, titleId: a, children: h, compact: p } = c,
            M = At(),
            g = (0, L.useId)();
          return (0, m.jsxs)(ar, {
            gap: z.TS.IN_STEAMUI ? 0 : 32,
            className: (0, E.A)(
              d().StandardLayout,
              M && d().Embedded,
              p && d().Compact,
              z.TS.IN_STEAMUI && "IN_CLIENT",
            ),
            ariaLabelledBy: a != null ? a : g,
            children: [
              typeof r == "string"
                ? (0, m.jsx)("div", {
                    className: d().PrimaryHeader,
                    id: a != null ? a : g,
                    children: r,
                  })
                : r,
              (0, m.jsx)("div", { className: d().FormContainer, children: h }),
            ],
          });
        }
        function qi(c) {
          const {
            realm: r = z.TS.EREALM,
            launcherType: a = z.TS.IN_STEAMUI ? z.TS.LAUNCHER_TYPE : void 0,
            className: h = d().HeaderLogo,
          } = c;
          return a === b.A2g
            ? (0, m.jsx)("div", { className: h })
            : (0, m.jsxs)("div", {
                className: d().LogoContainer,
                children: [
                  (0, m.jsx)(zn, { onBack: c.onBack }),
                  r !== Kt.TU.k_ESteamRealmChina
                    ? (0, m.jsx)(An, { className: h })
                    : (0, m.jsx)(jn, { className: h }),
                  " ",
                ],
              });
        }
        function zn(c) {
          return c.onBack
            ? (0, m.jsx)("div", {
                className: d().BackArrowContainer,
                onClick: c.onBack,
                children: (0, m.jsx)(wt.Q38, { className: d().BackArrow }),
              })
            : null;
        }
        function An(c) {
          return (0, m.jsxs)("svg", {
            viewBox: "0 0 153 46",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: c.className,
            children: [
              (0, m.jsx)("path", {
                d: "M22.9891 0C10.8429 0 0.93833 9.30396 0 21.1548L12.3547 26.2486C13.3973 25.5209 14.6484 25.1051 16.0037 25.1051C16.108 25.1051 16.2644 25.1051 16.3687 25.1051L21.8944 17.2045C21.8944 17.1525 21.8944 17.1525 21.8944 17.1006C21.8944 12.3186 25.8041 8.42034 30.6 8.42034C35.3959 8.42034 39.3056 12.3186 39.3056 17.1006C39.3056 21.8825 35.3959 25.7808 30.6 25.7808C30.5479 25.7808 30.4436 25.7808 30.3915 25.7808L22.5721 31.3424C22.5721 31.4463 22.5721 31.5503 22.5721 31.6542C22.5721 35.2407 19.6528 38.1514 16.0559 38.1514C12.876 38.1514 10.2695 35.9164 9.64395 32.9017L0.781942 29.2633C3.5448 38.9311 12.4068 46 22.9891 46C35.7087 46 46.0303 35.7085 46.0303 23.026C46.0303 10.2915 35.7087 0 22.9891 0Z",
                fill: "#E0E1E6",
              }),
              (0, m.jsx)("path", {
                d: "M14.44 34.8766L11.625 33.7331C12.1463 34.7726 12.9804 35.6562 14.1272 36.124C16.6294 37.1636 19.4966 35.9681 20.5391 33.4732C21.0604 32.2777 21.0604 30.9263 20.5391 29.7308C20.0178 28.5353 19.0795 27.5997 17.8805 27.08C16.6816 26.5602 15.3783 26.6122 14.2836 27.028L17.2029 28.2235C19.0274 29.0031 19.9136 31.0822 19.1316 32.9014C18.4018 34.7726 16.2645 35.6562 14.44 34.8766Z",
                fill: "#E0E1E6",
              }),
              (0, m.jsx)("path", {
                d: "M36.3857 17.0488C36.3857 13.8782 33.7793 11.2793 30.5994 11.2793C27.4195 11.2793 24.813 13.8782 24.813 17.0488C24.813 20.2194 27.4195 22.8703 30.5994 22.8703C33.7793 22.8703 36.3857 20.2714 36.3857 17.0488ZM26.2205 17.0488C26.2205 14.6578 28.1493 12.6827 30.5994 12.6827C32.9973 12.6827 34.9782 14.6058 34.9782 17.0488C34.9782 19.4397 33.0495 21.3629 30.5994 21.3629C28.2014 21.4149 26.2205 19.4397 26.2205 17.0488Z",
                fill: "#E0E1E6",
              }),
              (0, m.jsx)("path", {
                d: "M70.6879 15.7489L69.1241 18.4517C67.9251 17.6201 66.3091 17.1003 64.9016 17.1003C63.2856 17.1003 62.2951 17.776 62.2951 18.9715C62.2951 20.4269 64.0675 20.7387 66.674 21.6743C69.489 22.6619 71.105 23.8574 71.105 26.4043C71.105 29.9387 68.3421 31.9139 64.3282 31.9139C62.3994 31.9139 60.0014 31.3941 58.229 30.3026L59.3759 27.2879C60.8355 28.0675 62.6079 28.5353 64.1718 28.5353C66.3091 28.5353 67.2995 27.7557 67.2995 26.6122C67.2995 25.3127 65.7878 24.8969 63.2856 24.0653C60.4706 23.1297 58.5418 21.8822 58.5418 19.0235C58.5418 15.8009 61.1483 13.9297 64.8494 13.9297C67.4038 14.0336 69.489 14.8653 70.6879 15.7489Z",
                fill: "#E0E1E6",
              }),
              (0, m.jsx)("path", {
                d: "M82.7305 17.4643V31.6542H79.0815V17.4643H73.8164V14.3457H87.9956V17.4643H82.7305Z",
                fill: "#E0E1E6",
              }),
              (0, m.jsx)("path", {
                d: "M95.6574 17.4124V21.3107H102.643V24.4293H95.6574V28.4836H103.737V31.6022H92.0083V14.3457H103.737V17.4643H95.6574V17.4124Z",
                fill: "#E0E1E6",
              }),
              (0, m.jsx)("path", {
                d: "M111.87 28.2756L110.723 31.6542H106.917L113.434 14.3457H117.083L123.755 31.6542H119.793L118.594 28.2756H111.87ZM115.258 18.4519L112.912 25.3649H117.708L115.258 18.4519Z",
                fill: "#E0E1E6",
              }),
              (0, m.jsx)("path", {
                d: "M142.47 21.0508L137.726 31.1864H135.693L131.001 21.1547V31.7062H127.509V14.3457H131.001L136.84 26.8723L142.47 14.3457H145.963V31.6542H142.47V21.0508Z",
                fill: "#E0E1E6",
              }),
              (0, m.jsx)("path", {
                d: "M153 16.5288C153 18.0361 151.905 18.9197 150.602 18.9197C149.299 18.9197 148.204 17.9841 148.204 16.5288C148.204 15.0214 149.351 14.1378 150.602 14.1378C151.853 14.0858 153 15.0214 153 16.5288ZM148.569 16.5288C148.569 17.7762 149.455 18.5559 150.55 18.5559C151.645 18.5559 152.531 17.7762 152.531 16.5288C152.531 15.2813 151.645 14.5016 150.55 14.5016C149.455 14.5016 148.569 15.2813 148.569 16.5288ZM150.602 15.2813C151.228 15.2813 151.436 15.5932 151.436 15.957C151.436 16.2689 151.228 16.4768 151.019 16.6327L151.593 17.6723H151.123L150.654 16.7367H150.133V17.6723H149.768V15.2813H150.602ZM150.185 16.3728H150.602C150.863 16.3728 151.019 16.2169 151.019 16.009C151.019 15.8011 150.915 15.6451 150.602 15.6451H150.185V16.3728Z",
                fill: "#E0E1E6",
              }),
            ],
          });
        }
        function jn(c) {
          return (0, m.jsxs)("svg", {
            viewBox: "0 0 232.73 46.07",
            xmlns: "http://www.w3.org/2000/svg",
            className: c.className,
            fill: "#E0E1E6",
            children: [
              (0, m.jsxs)("g", {
                stroke: "null",
                id: "svg_2",
                children: [
                  (0, m.jsx)("path", {
                    stroke: "null",
                    id: "svg_3",
                    d: "m21.73862,4.25158c-10.07896,0 -18.33997,7.77507 -19.12529,17.65445l10.28722,4.25199c0.87209,-0.59441 1.92641,-0.94585 3.05883,-0.94585c0.09979,0 0.20392,0.00434 0.30371,0.00868l4.57306,-6.62964c0,-0.03037 0,-0.06074 0,-0.09545c0,-3.99167 3.2454,-7.23707 7.23707,-7.23707c3.99167,0 7.23707,3.2454 7.23707,7.23707c0,3.99167 -3.2454,7.23707 -7.23707,7.23707c-0.0564,0 -0.10847,0 -0.16487,-0.00434l-6.52551,4.65984c0.00434,0.08678 0.00868,0.16921 0.00868,0.25599c0,2.99809 -2.43839,5.43214 -5.43214,5.43214c-2.62929,0 -4.82905,-1.87869 -5.32801,-4.36046l-7.35855,-3.04148c2.27785,8.05709 9.67979,13.96216 18.4658,13.96216c10.59961,0 19.19471,-8.5951 19.19471,-19.19471c0,-10.59527 -8.5951,-19.19037 -19.19471,-19.19037",
                  }),
                  (0, m.jsx)("path", {
                    stroke: "null",
                    id: "svg_4",
                    d: "m14.64039,33.37339l-2.35595,-0.97622c0.41652,0.86775 1.1411,1.59667 2.09996,2.00017c2.07393,0.86341 4.46459,-0.12149 5.33235,-2.19542c0.41652,-1.00226 0.42086,-2.11298 0.00434,-3.11957c-0.41652,-1.00659 -1.1975,-1.79191 -2.19976,-2.21277c-0.99792,-0.41652 -2.06525,-0.39917 -3.00677,-0.04773l2.43405,1.00659c1.53159,0.6378 2.25182,2.395 1.61836,3.92659c-0.6378,1.53592 -2.395,2.25616 -3.92659,1.61836",
                  }),
                  (0, m.jsx)("path", {
                    stroke: "null",
                    id: "svg_5",
                    d: "m32.89793,18.49576c0,-2.65966 -2.16505,-4.82471 -4.82471,-4.82471c-2.65966,0 -4.82471,2.16505 -4.82471,4.82471c0,2.65966 2.16505,4.82037 4.82471,4.82037c2.65966,0.00434 4.82471,-2.16071 4.82471,-4.82037m-8.4389,-0.00434c0,-2.00017 1.6227,-3.62287 3.62287,-3.62287c2.00017,0 3.62287,1.6227 3.62287,3.62287c0,2.00017 -1.6227,3.62287 -3.62287,3.62287c-2.00017,0 -3.62287,-1.6227 -3.62287,-3.62287",
                  }),
                ],
              }),
              (0, m.jsx)("path", {
                stroke: "null",
                id: "svg_6",
                d: "m46.71333,8.08293c0,2.23529 -1.67014,3.62707 -3.5849,3.62707c-1.91476,0 -3.60177,-1.39178 -3.60177,-3.62707c0,-2.23529 1.68701,-3.6102 3.60177,-3.6102c1.91476,-0.00844 3.5849,1.37491 3.5849,3.6102m-6.64682,0c0,1.90632 1.39178,3.1041 3.05349,3.1041c1.66171,0 3.04505,-1.19778 3.04505,-3.1041c0,-1.91476 -1.38335,-3.09566 -3.04505,-3.09566c-1.65327,0 -3.05349,1.18934 -3.05349,3.09566m3.09566,-1.84728c0.95316,0 1.23152,0.49767 1.23152,1.01221c0,0.48923 -0.29523,0.8182 -0.64106,0.9869l0.83507,1.57736l-0.63263,0l-0.71698,-1.40865l-0.76759,0l0,1.40865l-0.52297,0l0,-3.56803l1.21465,0l0,-0.00844zm-0.69167,1.67858l0.65793,0c0.43019,0 0.70011,-0.27836 0.70011,-0.61576c0,-0.3374 -0.17714,-0.56515 -0.69167,-0.56515l-0.66637,0l0,1.18091z",
              }),
              (0, m.jsxs)("g", {
                id: "svg_7",
                children: [
                  (0, m.jsx)("path", {
                    id: "svg_8",
                    d: "m77.46999,20.31667c-2.27,6.12 -7.24,10.13 -13.11,12.2c-0.54,-1.12 -1.7,-2.9 -2.65,-3.76c3.6,-1.03 6.95,-3.06 9.14,-5.63l-7.24,0l0,-3.89l10.05,0l0.79,-0.12l3.02,1.2zm-15.02,20.43c1.7,-1.57 3.39,-4.01 4.47,-6l4.22,2.11c-1.2,2.03 -2.73,4.55 -4.34,6.29l-4.35,-2.4zm8.57,-29.9l-8.23,0l0,-4.26l8.23,0l0,-2.28l5.01,0l0,2.28l10.42,0l0,-2.28l5.01,0l0,2.28l8.15,0l0,4.26l-8.15,0l0,2.15l-5.01,0l0,-2.15l-10.42,0l0,2.15l-5.01,0l0,-2.15zm-2.57,19.85l24.53,0l0,4.1l-24.53,0l0,-4.1zm28.71,-9.8c-1.86,1.45 -3.85,2.81 -5.59,3.81c2.52,1.24 5.46,2.19 8.48,2.77c-1.03,0.95 -2.4,2.9 -3.1,4.14c-5.29,-1.41 -10.05,-4.14 -13.44,-7.82l0,1.99c0,2.03 -0.33,2.94 -1.78,3.52c-1.32,0.54 -3.14,0.58 -5.46,0.58c-0.25,-1.2 -0.87,-2.69 -1.41,-3.76c1.37,0.08 2.85,0.08 3.27,0.08c0.46,-0.04 0.62,-0.12 0.62,-0.58l0,-5.83c1.41,-0.62 2.85,-1.45 4.26,-2.32l-14.23,0l0,-3.72l19.28,0l0.99,-0.25l2.98,2.52c-1.9,1.49 -4.18,3.06 -6.58,4.38c0.7,0.79 1.57,1.53 2.52,2.23c1.78,-1.28 3.97,-3.06 5.25,-4.38l3.94,2.64zm-19.11,14.89c0.7,1.99 1.24,4.63 1.28,6.29l-4.88,0.75c0.04,-1.66 -0.37,-4.34 -0.95,-6.41l4.55,-0.63zm8.65,-0.54c1.16,1.86 2.27,4.3 2.61,6l-4.51,1.41c-0.29,-1.65 -1.28,-4.22 -2.36,-6.12l4.26,-1.29zm8.39,-0.54c1.86,1.82 4.05,4.38 5.09,6.21l-4.43,2.07c-0.91,-1.78 -2.98,-4.47 -4.8,-6.37l4.14,-1.91z",
                  }),
                  (0, m.jsx)("path", {
                    id: "svg_9",
                    d: "m110.14999,23.78667c-1.57,-1.12 -4.84,-2.9 -7.16,-4.09l2.61,-3.64c2.23,0.91 5.58,2.56 7.32,3.64l-2.77,4.09zm-5.79,15.14c2.03,-3.06 4.92,-8.07 7.16,-12.74l3.72,3.19c-1.94,4.22 -4.34,8.81 -6.58,12.74l-4.3,-3.19zm8.02,-26.02c-1.49,-1.28 -4.67,-3.14 -6.95,-4.38l2.73,-3.56c2.23,1.03 5.46,2.73 7.07,3.93l-2.85,4.01zm7.62,2.15c-0.91,1.32 -1.86,2.48 -2.81,3.52c-0.91,-0.87 -2.85,-2.36 -3.93,-3.02c2.98,-2.69 5.63,-6.99 7.07,-11.34l4.72,1.28c-0.41,0.99 -0.83,2.03 -1.32,3.06l18.08,0l0,4.22l-20.31,0c-0.46,0.74 -0.91,1.45 -1.41,2.15l17.95,0l0,3.97l-18.04,0l0,-3.84zm17.33,6.17c-0.08,10.05 -0.04,17.13 1.41,17.13c0.5,0 0.66,-2.23 0.7,-5.29c0.83,1.08 1.99,2.32 2.9,3.06c-0.33,4.67 -1.12,6.83 -3.97,6.87c-4.96,-0.04 -5.63,-6.87 -5.79,-17.5l-16.59,0l0,-4.3l19.28,0l0,0.04l2.06,0l0,-0.01z",
                  }),
                  (0, m.jsx)("path", {
                    id: "svg_10",
                    d: "m182.70999,29.24667l-16.26,0l0,13.65l-5.13,0l0,-13.65l-16.09,0l0,-5.01l16.09,0l0,-12.53l-13.94,0l0,-4.88l32.93,0l0,4.88l-13.86,0l0,12.53l16.26,0l0,5.01zm-28.3,-16.21c1.37,2.65 2.85,6.12 3.31,8.44l-4.8,1.49c-0.41,-2.19 -1.7,-5.83 -3.02,-8.6l4.51,-1.33zm15.35,8.6c1.32,-2.4 2.81,-6.04 3.6,-8.73l5.25,1.32c-1.49,3.19 -3.19,6.54 -4.55,8.65l-4.3,-1.24z",
                  }),
                  (0, m.jsx)("path", {
                    id: "svg_11",
                    d: "m212.48999,8.06667c3.81,3.56 8.73,8.65 10.88,12.12l-4.18,3.02c-0.54,-0.91 -1.28,-1.99 -2.15,-3.14c-21.97,1.08 -24.9,1.16 -27.09,1.9c-0.25,-0.99 -1.03,-3.43 -1.61,-4.72c1.08,-0.29 2.07,-1.08 3.43,-2.4c1.45,-1.28 5.96,-6.29 8.77,-11.25l4.96,2.11c-2.61,3.85 -5.87,7.53 -9.02,10.55l16.96,-0.54c-1.61,-1.82 -3.27,-3.56 -4.8,-5.09l3.85,-2.56zm-21.18,16.63l27.88,0l0,18.12l-5.29,0l0,-2.07l-17.54,0l0,2.11l-5.05,0l0,-18.16zm5.04,4.72l0,6.62l17.54,0l0,-6.62l-17.54,0z",
                  }),
                ],
              }),
              (0, m.jsxs)("g", {
                id: "svg_12",
                children: [
                  (0, m.jsx)("path", {
                    id: "svg_13",
                    d: "m224.05999,2.64667l-1.2,0l0,-0.43l2.92,0l0,0.43l-1.21,0l0,3.52l-0.52,0l0,-3.52l0.01,0z",
                  }),
                  (0, m.jsx)("path", {
                    id: "svg_14",
                    d: "m229.54999,4.42667c-0.03,-0.55 -0.06,-1.21 -0.06,-1.71l-0.02,0c-0.13,0.46 -0.3,0.96 -0.5,1.5l-0.7,1.92l-0.39,0l-0.64,-1.88c-0.19,-0.56 -0.35,-1.07 -0.46,-1.54l-0.01,0c-0.01,0.49 -0.04,1.15 -0.08,1.75l-0.11,1.69l-0.49,0l0.28,-3.95l0.65,0l0.67,1.91c0.16,0.49 0.3,0.92 0.4,1.33l0.02,0c0.1,-0.4 0.24,-0.83 0.42,-1.33l0.7,-1.91l0.65,0l0.25,3.95l-0.5,0l-0.08,-1.73z",
                  }),
                ],
              }),
            ],
          });
        }
        function Fn() {
          return (0, m.jsx)(ar, {
            alignItems: "center",
            justifyContent: "center",
            children: (0, m.jsx)(Wt.t, {}),
          });
        }
        function _n(c) {
          const r = (0, L.useRef)(c);
          r.current = c;
          const [a, h] = (0, L.useState)(!0),
            p = (0, $t.zy)();
          return (
            (0, L.useEffect)(() => {
              if (new URLSearchParams(p.search).get("need_password")) {
                h(!1);
                return;
              }
              if (!r.current) {
                h(!1);
                return;
              }
              xn(r.current)
                .then((g) => {
                  h(g);
                })
                .catch((g) => {
                  (0, N.tH)("PerformRefresh exception", g), h(!1);
                });
            }, [r, p.search]),
            a
          );
        }
        async function xn(c) {
          var r;
          const a = new FormData();
          a.append("redir", c);
          const h = `${z.TS.LOGIN_BASE_URL}jwt/ajaxrefresh`,
            p = await Yt().post(h, a, { timeout: 1e4, withCredentials: !0 });
          if (
            p.status !== 200 ||
            !((r = p == null ? void 0 : p.data) != null && r.success)
          )
            return !1;
          const { success: M, login_url: g, error: B, ...j } = p.data,
            O = new FormData();
          Object.entries(j).forEach(([ae, le]) => O.append(ae, le));
          const I = await Yt().post(g, O),
            P = I.status === 200 && I.data.result === l.R;
          return P && window.location.assign(c), P;
        }
        function In() {
          const c = (0, L.useRef)(!0);
          return (
            (0, L.useEffect)(
              () => () => {
                c.current = !1;
              },
              [c],
            ),
            (0, L.useCallback)(() => c.current, [c])
          );
        }
      },
      77661: (Ut) => {
        Ut.exports = {
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
      5522: (Ut) => {
        Ut.exports = {
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
      5804: (Ut) => {
        Ut.exports = {
          QRBits: "_3BALYLTpJdiDaC7JKmeeFJ",
          QRImg: "_5S5WqZhvbmRD1cHQT8P-l",
          Bit: "_1YVDTFYSTDWouyIbRs_hN_",
          Active: "_1zNnNw2BDhrN6ML6YxBYJE",
        };
      },
      9843: (Ut) => {
        Ut.exports = {
          SegmentedCharacterInput: "_1gzkmmy_XA39rp9MtxJfZJ",
          Disabled: "_4WrcvilhO29CHFM0pqglW",
          Danger: "_3lEvxoIfUV21o8WAfErUcA",
          BackupCode: "V5oAzFppoOFufB8_pY9sK",
          Loading: "_3khV2wP4icszbiR8o7sw37",
          Input: "_3xcXqLVteTNHmk-gh9W65d",
        };
      },
      80407: (Ut, tr, v) => {
        "use strict";
        v.d(tr, { A: () => mi });
        var m,
          Kt = 0xdeadbeefcafe,
          b = (Kt & 16777215) == 15715070;
        function l(i, n, o) {
          i != null &&
            (typeof i == "number"
              ? this.fromNumber(i, n, o)
              : n == null && typeof i != "string"
                ? this.fromString(i, 256)
                : this.fromString(i, n));
        }
        function t() {
          return new l(null);
        }
        function H(i, n, o, f, d, w) {
          for (; --w >= 0; ) {
            var R = n * this[i++] + o[f] + d;
            (d = Math.floor(R / 67108864)), (o[f++] = R & 67108863);
          }
          return d;
        }
        function Yt(i, n, o, f, d, w) {
          for (var R = n & 32767, T = n >> 15; --w >= 0; ) {
            var K = this[i] & 32767,
              G = this[i++] >> 15,
              Bt = T * K + G * R;
            (K = R * K + ((Bt & 32767) << 15) + o[f] + (d & 1073741823)),
              (d = (K >>> 30) + (Bt >>> 15) + T * G + (d >>> 30)),
              (o[f++] = K & 1073741823);
          }
          return d;
        }
        function L(i, n, o, f, d, w) {
          for (var R = n & 16383, T = n >> 14; --w >= 0; ) {
            var K = this[i] & 16383,
              G = this[i++] >> 14,
              Bt = T * K + G * R;
            (K = R * K + ((Bt & 16383) << 14) + o[f] + d),
              (d = (K >> 28) + (Bt >> 14) + T * G),
              (o[f++] = K & 268435455);
          }
          return d;
        }
        b && navigator.appName == "Microsoft Internet Explorer"
          ? ((l.prototype.am = Yt), (m = 30))
          : b && navigator.appName != "Netscape"
            ? ((l.prototype.am = H), (m = 26))
            : ((l.prototype.am = L), (m = 28)),
          (l.prototype.DB = m),
          (l.prototype.DM = (1 << m) - 1),
          (l.prototype.DV = 1 << m);
        var $t = 52;
        (l.prototype.FV = Math.pow(2, $t)),
          (l.prototype.F1 = $t - m),
          (l.prototype.F2 = 2 * m - $t);
        var Et = "0123456789abcdefghijklmnopqrstuvwxyz",
          Ft = new Array(),
          N,
          ce;
        for (N = 48, ce = 0; ce <= 9; ++ce) Ft[N++] = ce;
        for (N = 97, ce = 10; ce < 36; ++ce) Ft[N++] = ce;
        for (N = 65, ce = 10; ce < 36; ++ce) Ft[N++] = ce;
        function or(i) {
          return Et.charAt(i);
        }
        function rr(i, n) {
          var o = Ft[i.charCodeAt(n)];
          return o == null ? -1 : o;
        }
        function Nt(i) {
          for (var n = this.t - 1; n >= 0; --n) i[n] = this[n];
          (i.t = this.t), (i.s = this.s);
        }
        function bt(i) {
          (this.t = 1),
            (this.s = i < 0 ? -1 : 0),
            i > 0 ? (this[0] = i) : i < -1 ? (this[0] = i + DV) : (this.t = 0);
        }
        function E(i) {
          var n = t();
          return n.fromInt(i), n;
        }
        function se(i, n) {
          var o;
          if (n == 16) o = 4;
          else if (n == 8) o = 3;
          else if (n == 256) o = 8;
          else if (n == 2) o = 1;
          else if (n == 32) o = 5;
          else if (n == 4) o = 2;
          else {
            this.fromRadix(i, n);
            return;
          }
          (this.t = 0), (this.s = 0);
          for (var f = i.length, d = !1, w = 0; --f >= 0; ) {
            var R = o == 8 ? i[f] & 255 : rr(i, f);
            if (R < 0) {
              i.charAt(f) == "-" && (d = !0);
              continue;
            }
            (d = !1),
              w == 0
                ? (this[this.t++] = R)
                : w + o > this.DB
                  ? ((this[this.t - 1] |=
                      (R & ((1 << (this.DB - w)) - 1)) << w),
                    (this[this.t++] = R >> (this.DB - w)))
                  : (this[this.t - 1] |= R << w),
              (w += o),
              w >= this.DB && (w -= this.DB);
          }
          o == 8 &&
            (i[0] & 128) != 0 &&
            ((this.s = -1),
            w > 0 && (this[this.t - 1] |= ((1 << (this.DB - w)) - 1) << w)),
            this.clamp(),
            d && l.ZERO.subTo(this, this);
        }
        function V() {
          for (var i = this.s & this.DM; this.t > 0 && this[this.t - 1] == i; )
            --this.t;
        }
        function ee(i) {
          if (this.s < 0) return "-" + this.negate().toString(i);
          var n;
          if (i == 16) n = 4;
          else if (i == 8) n = 3;
          else if (i == 2) n = 1;
          else if (i == 32) n = 5;
          else if (i == 4) n = 2;
          else return this.toRadix(i);
          var o = (1 << n) - 1,
            f,
            d = !1,
            w = "",
            R = this.t,
            T = this.DB - ((R * this.DB) % n);
          if (R-- > 0)
            for (
              T < this.DB && (f = this[R] >> T) > 0 && ((d = !0), (w = or(f)));
              R >= 0;
            )
              T < n
                ? ((f = (this[R] & ((1 << T) - 1)) << (n - T)),
                  (f |= this[--R] >> (T += this.DB - n)))
                : ((f = (this[R] >> (T -= n)) & o),
                  T <= 0 && ((T += this.DB), --R)),
                f > 0 && (d = !0),
                d && (w += or(f));
          return d ? w : "0";
        }
        function wt() {
          var i = t();
          return l.ZERO.subTo(this, i), i;
        }
        function te() {
          return this.s < 0 ? this.negate() : this;
        }
        function Wt(i) {
          var n = this.s - i.s;
          if (n != 0) return n;
          var o = this.t;
          if (((n = o - i.t), n != 0)) return n;
          for (; --o >= 0; ) if ((n = this[o] - i[o]) != 0) return n;
          return 0;
        }
        function F(i) {
          var n = 1,
            o;
          return (
            (o = i >>> 16) != 0 && ((i = o), (n += 16)),
            (o = i >> 8) != 0 && ((i = o), (n += 8)),
            (o = i >> 4) != 0 && ((i = o), (n += 4)),
            (o = i >> 2) != 0 && ((i = o), (n += 2)),
            (o = i >> 1) != 0 && ((i = o), (n += 1)),
            n
          );
        }
        function y() {
          return this.t <= 0
            ? 0
            : this.DB * (this.t - 1) + F(this[this.t - 1] ^ (this.s & this.DM));
        }
        function W(i, n) {
          var o;
          for (o = this.t - 1; o >= 0; --o) n[o + i] = this[o];
          for (o = i - 1; o >= 0; --o) n[o] = 0;
          (n.t = this.t + i), (n.s = this.s);
        }
        function z(i, n) {
          for (var o = i; o < this.t; ++o) n[o - i] = this[o];
          (n.t = Math.max(this.t - i, 0)), (n.s = this.s);
        }
        function _(i, n) {
          var o = i % this.DB,
            f = this.DB - o,
            d = (1 << f) - 1,
            w = Math.floor(i / this.DB),
            R = (this.s << o) & this.DM,
            T;
          for (T = this.t - 1; T >= 0; --T)
            (n[T + w + 1] = (this[T] >> f) | R), (R = (this[T] & d) << o);
          for (T = w - 1; T >= 0; --T) n[T] = 0;
          (n[w] = R), (n.t = this.t + w + 1), (n.s = this.s), n.clamp();
        }
        function re(i, n) {
          n.s = this.s;
          var o = Math.floor(i / this.DB);
          if (o >= this.t) {
            n.t = 0;
            return;
          }
          var f = i % this.DB,
            d = this.DB - f,
            w = (1 << f) - 1;
          n[0] = this[o] >> f;
          for (var R = o + 1; R < this.t; ++R)
            (n[R - o - 1] |= (this[R] & w) << d), (n[R - o] = this[R] >> f);
          f > 0 && (n[this.t - o - 1] |= (this.s & w) << d),
            (n.t = this.t - o),
            n.clamp();
        }
        function S(i, n) {
          for (var o = 0, f = 0, d = Math.min(i.t, this.t); o < d; )
            (f += this[o] - i[o]), (n[o++] = f & this.DM), (f >>= this.DB);
          if (i.t < this.t) {
            for (f -= i.s; o < this.t; )
              (f += this[o]), (n[o++] = f & this.DM), (f >>= this.DB);
            f += this.s;
          } else {
            for (f += this.s; o < i.t; )
              (f -= i[o]), (n[o++] = f & this.DM), (f >>= this.DB);
            f -= i.s;
          }
          (n.s = f < 0 ? -1 : 0),
            f < -1 ? (n[o++] = this.DV + f) : f > 0 && (n[o++] = f),
            (n.t = o),
            n.clamp();
        }
        function ne(i, n) {
          var o = this.abs(),
            f = i.abs(),
            d = o.t;
          for (n.t = d + f.t; --d >= 0; ) n[d] = 0;
          for (d = 0; d < f.t; ++d) n[d + o.t] = o.am(0, f[d], n, d, 0, o.t);
          (n.s = 0), n.clamp(), this.s != i.s && l.ZERO.subTo(n, n);
        }
        function ur(i) {
          for (var n = this.abs(), o = (i.t = 2 * n.t); --o >= 0; ) i[o] = 0;
          for (o = 0; o < n.t - 1; ++o) {
            var f = n.am(o, n[o], i, 2 * o, 0, 1);
            (i[o + n.t] += n.am(
              o + 1,
              2 * n[o],
              i,
              2 * o + 1,
              f,
              n.t - o - 1,
            )) >= n.DV && ((i[o + n.t] -= n.DV), (i[o + n.t + 1] = 1));
          }
          i.t > 0 && (i[i.t - 1] += n.am(o, n[o], i, 2 * o, 0, 1)),
            (i.s = 0),
            i.clamp();
        }
        function mr(i, n, o) {
          var f = i.abs();
          if (!(f.t <= 0)) {
            var d = this.abs();
            if (d.t < f.t) {
              n != null && n.fromInt(0), o != null && this.copyTo(o);
              return;
            }
            o == null && (o = t());
            var w = t(),
              R = this.s,
              T = i.s,
              K = this.DB - F(f[f.t - 1]);
            K > 0
              ? (f.lShiftTo(K, w), d.lShiftTo(K, o))
              : (f.copyTo(w), d.copyTo(o));
            var G = w.t,
              Bt = w[G - 1];
            if (Bt != 0) {
              var Tt = Bt * (1 << this.F1) + (G > 1 ? w[G - 2] >> this.F2 : 0),
                It = this.FV / Tt,
                Or = (1 << this.F1) / Tt,
                zt = 1 << this.F2,
                kt = o.t,
                oe = kt - G,
                Ht = n == null ? t() : n;
              for (
                w.dlShiftTo(oe, Ht),
                  o.compareTo(Ht) >= 0 && ((o[o.t++] = 1), o.subTo(Ht, o)),
                  l.ONE.dlShiftTo(G, Ht),
                  Ht.subTo(w, w);
                w.t < G;
              )
                w[w.t++] = 0;
              for (; --oe >= 0; ) {
                var qr =
                  o[--kt] == Bt
                    ? this.DM
                    : Math.floor(o[kt] * It + (o[kt - 1] + zt) * Or);
                if ((o[kt] += w.am(0, qr, o, oe, 0, G)) < qr)
                  for (w.dlShiftTo(oe, Ht), o.subTo(Ht, o); o[kt] < --qr; )
                    o.subTo(Ht, o);
              }
              n != null && (o.drShiftTo(G, n), R != T && l.ZERO.subTo(n, n)),
                (o.t = G),
                o.clamp(),
                K > 0 && o.rShiftTo(K, o),
                R < 0 && l.ZERO.subTo(o, o);
            }
          }
        }
        function lr(i) {
          var n = t();
          return (
            this.abs().divRemTo(i, null, n),
            this.s < 0 && n.compareTo(l.ZERO) > 0 && i.subTo(n, n),
            n
          );
        }
        function k(i) {
          this.m = i;
        }
        function x(i) {
          return i.s < 0 || i.compareTo(this.m) >= 0 ? i.mod(this.m) : i;
        }
        function u(i) {
          return i;
        }
        function Ci(i) {
          i.divRemTo(this.m, null, i);
        }
        function Ri(i, n, o) {
          i.multiplyTo(n, o), this.reduce(o);
        }
        function Z(i, n) {
          i.squareTo(n), this.reduce(n);
        }
        (k.prototype.convert = x),
          (k.prototype.revert = u),
          (k.prototype.reduce = Ci),
          (k.prototype.mulTo = Ri),
          (k.prototype.sqrTo = Z);
        function Fi() {
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
        function dr(i) {
          (this.m = i),
            (this.mp = i.invDigit()),
            (this.mpl = this.mp & 32767),
            (this.mph = this.mp >> 15),
            (this.um = (1 << (i.DB - 15)) - 1),
            (this.mt2 = 2 * i.t);
        }
        function ti(i) {
          var n = t();
          return (
            i.abs().dlShiftTo(this.m.t, n),
            n.divRemTo(this.m, null, n),
            i.s < 0 && n.compareTo(l.ZERO) > 0 && this.m.subTo(n, n),
            n
          );
        }
        function vi(i) {
          var n = t();
          return i.copyTo(n), this.reduce(n), n;
        }
        function ri(i) {
          for (; i.t <= this.mt2; ) i[i.t++] = 0;
          for (var n = 0; n < this.m.t; ++n) {
            var o = i[n] & 32767,
              f =
                (o * this.mpl +
                  (((o * this.mph + (i[n] >> 15) * this.mpl) & this.um) <<
                    15)) &
                i.DM;
            for (
              o = n + this.m.t, i[o] += this.m.am(0, f, i, n, 0, this.m.t);
              i[o] >= i.DV;
            )
              (i[o] -= i.DV), i[++o]++;
          }
          i.clamp(),
            i.drShiftTo(this.m.t, i),
            i.compareTo(this.m) >= 0 && i.subTo(this.m, i);
        }
        function Ti(i, n) {
          i.squareTo(n), this.reduce(n);
        }
        function fr(i, n, o) {
          i.multiplyTo(n, o), this.reduce(o);
        }
        (dr.prototype.convert = ti),
          (dr.prototype.revert = vi),
          (dr.prototype.reduce = ri),
          (dr.prototype.mulTo = fr),
          (dr.prototype.sqrTo = Ti);
        function ii() {
          return (this.t > 0 ? this[0] & 1 : this.s) == 0;
        }
        function hr(i, n) {
          if (i > 4294967295 || i < 1) return l.ONE;
          var o = t(),
            f = t(),
            d = n.convert(this),
            w = F(i) - 1;
          for (d.copyTo(o); --w >= 0; )
            if ((n.sqrTo(o, f), (i & (1 << w)) > 0)) n.mulTo(f, d, o);
            else {
              var R = o;
              (o = f), (f = R);
            }
          return n.revert(o);
        }
        function fi(i, n) {
          var o;
          return (
            i < 256 || n.isEven() ? (o = new k(n)) : (o = new dr(n)),
            this.exp(i, o)
          );
        }
        (l.prototype.copyTo = Nt),
          (l.prototype.fromInt = bt),
          (l.prototype.fromString = se),
          (l.prototype.clamp = V),
          (l.prototype.dlShiftTo = W),
          (l.prototype.drShiftTo = z),
          (l.prototype.lShiftTo = _),
          (l.prototype.rShiftTo = re),
          (l.prototype.subTo = S),
          (l.prototype.multiplyTo = ne),
          (l.prototype.squareTo = ur),
          (l.prototype.divRemTo = mr),
          (l.prototype.invDigit = Fi),
          (l.prototype.isEven = ii),
          (l.prototype.exp = hr),
          (l.prototype.toString = ee),
          (l.prototype.negate = wt),
          (l.prototype.abs = te),
          (l.prototype.compareTo = Wt),
          (l.prototype.bitLength = y),
          (l.prototype.mod = lr),
          (l.prototype.modPowInt = fi),
          (l.ZERO = E(0)),
          (l.ONE = E(1));
        function gr() {
          var i = t();
          return this.copyTo(i), i;
        }
        function Lr() {
          if (this.s < 0) {
            if (this.t == 1) return this[0] - this.DV;
            if (this.t == 0) return -1;
          } else {
            if (this.t == 1) return this[0];
            if (this.t == 0) return 0;
          }
          return ((this[1] & ((1 << (32 - this.DB)) - 1)) << this.DB) | this[0];
        }
        function pr() {
          return this.t == 0 ? this.s : (this[0] << 24) >> 24;
        }
        function ni() {
          return this.t == 0 ? this.s : (this[0] << 16) >> 16;
        }
        function br(i) {
          return Math.floor((Math.LN2 * this.DB) / Math.log(i));
        }
        function si() {
          return this.s < 0
            ? -1
            : this.t <= 0 || (this.t == 1 && this[0] <= 0)
              ? 0
              : 1;
        }
        function wr(i) {
          if ((i == null && (i = 10), this.signum() == 0 || i < 2 || i > 36))
            return "0";
          var n = this.chunkSize(i),
            o = Math.pow(i, n),
            f = E(o),
            d = t(),
            w = t(),
            R = "";
          for (this.divRemTo(f, d, w); d.signum() > 0; )
            (R = (o + w.intValue()).toString(i).substr(1) + R),
              d.divRemTo(f, d, w);
          return w.intValue().toString(i) + R;
        }
        function hi(i, n) {
          this.fromInt(0), n == null && (n = 10);
          for (
            var o = this.chunkSize(n),
              f = Math.pow(n, o),
              d = !1,
              w = 0,
              R = 0,
              T = 0;
            T < i.length;
            ++T
          ) {
            var K = rr(i, T);
            if (K < 0) {
              i.charAt(T) == "-" && this.signum() == 0 && (d = !0);
              continue;
            }
            (R = n * R + K),
              ++w >= o &&
                (this.dMultiply(f), this.dAddOffset(R, 0), (w = 0), (R = 0));
          }
          w > 0 && (this.dMultiply(Math.pow(n, w)), this.dAddOffset(R, 0)),
            d && l.ZERO.subTo(this, this);
        }
        function Br(i, n, o) {
          if (typeof n == "number")
            if (i < 2) this.fromInt(1);
            else
              for (
                this.fromNumber(i, o),
                  this.testBit(i - 1) ||
                    this.bitwiseTo(l.ONE.shiftLeft(i - 1), Mr, this),
                  this.isEven() && this.dAddOffset(1, 0);
                !this.isProbablePrime(n);
              )
                this.dAddOffset(2, 0),
                  this.bitLength() > i &&
                    this.subTo(l.ONE.shiftLeft(i - 1), this);
          else {
            var f = new Array(),
              d = i & 7;
            (f.length = (i >> 3) + 1),
              n.nextBytes(f),
              d > 0 ? (f[0] &= (1 << d) - 1) : (f[0] = 0),
              this.fromString(f, 256);
          }
        }
        function ai() {
          var i = this.t,
            n = new Array();
          n[0] = this.s;
          var o = this.DB - ((i * this.DB) % 8),
            f,
            d = 0;
          if (i-- > 0)
            for (
              o < this.DB &&
              (f = this[i] >> o) != (this.s & this.DM) >> o &&
              (n[d++] = f | (this.s << (this.DB - o)));
              i >= 0;
            )
              o < 8
                ? ((f = (this[i] & ((1 << o) - 1)) << (8 - o)),
                  (f |= this[--i] >> (o += this.DB - 8)))
                : ((f = (this[i] >> (o -= 8)) & 255),
                  o <= 0 && ((o += this.DB), --i)),
                (f & 128) != 0 && (f |= -256),
                d == 0 && (this.s & 128) != (f & 128) && ++d,
                (d > 0 || f != this.s) && (n[d++] = f);
          return n;
        }
        function yr(i) {
          return this.compareTo(i) == 0;
        }
        function gi(i) {
          return this.compareTo(i) < 0 ? this : i;
        }
        function Sr(i) {
          return this.compareTo(i) > 0 ? this : i;
        }
        function oi(i, n, o) {
          var f,
            d,
            w = Math.min(i.t, this.t);
          for (f = 0; f < w; ++f) o[f] = n(this[f], i[f]);
          if (i.t < this.t) {
            for (d = i.s & this.DM, f = w; f < this.t; ++f)
              o[f] = n(this[f], d);
            o.t = this.t;
          } else {
            for (d = this.s & this.DM, f = w; f < i.t; ++f) o[f] = n(d, i[f]);
            o.t = i.t;
          }
          (o.s = n(this.s, i.s)), o.clamp();
        }
        function Ct(i, n) {
          return i & n;
        }
        function Ur(i) {
          var n = t();
          return this.bitwiseTo(i, Ct, n), n;
        }
        function Mr(i, n) {
          return i | n;
        }
        function Nr(i) {
          var n = t();
          return this.bitwiseTo(i, Mr, n), n;
        }
        function Cr(i, n) {
          return i ^ n;
        }
        function Dr(i) {
          var n = t();
          return this.bitwiseTo(i, Cr, n), n;
        }
        function Fr(i, n) {
          return i & ~n;
        }
        function Pr(i) {
          var n = t();
          return this.bitwiseTo(i, Fr, n), n;
        }
        function Vr() {
          for (var i = t(), n = 0; n < this.t; ++n) i[n] = this.DM & ~this[n];
          return (i.t = this.t), (i.s = ~this.s), i;
        }
        function Hr(i) {
          var n = t();
          return i < 0 ? this.rShiftTo(-i, n) : this.lShiftTo(i, n), n;
        }
        function Gr(i) {
          var n = t();
          return i < 0 ? this.lShiftTo(-i, n) : this.rShiftTo(i, n), n;
        }
        function Dt(i) {
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
        function ir() {
          for (var i = 0; i < this.t; ++i)
            if (this[i] != 0) return i * this.DB + Dt(this[i]);
          return this.s < 0 ? this.t * this.DB : -1;
        }
        function li(i) {
          for (var n = 0; i != 0; ) (i &= i - 1), ++n;
          return n;
        }
        function Pt() {
          for (var i = 0, n = this.s & this.DM, o = 0; o < this.t; ++o)
            i += li(this[o] ^ n);
          return i;
        }
        function Qr(i) {
          var n = Math.floor(i / this.DB);
          return n >= this.t
            ? this.s != 0
            : (this[n] & (1 << (i % this.DB))) != 0;
        }
        function Rt(i, n) {
          var o = l.ONE.shiftLeft(i);
          return this.bitwiseTo(o, n, o), o;
        }
        function St(i) {
          return this.changeBit(i, Mr);
        }
        function pi(i) {
          return this.changeBit(i, Fr);
        }
        function pt(i) {
          return this.changeBit(i, Cr);
        }
        function Rr(i, n) {
          for (var o = 0, f = 0, d = Math.min(i.t, this.t); o < d; )
            (f += this[o] + i[o]), (n[o++] = f & this.DM), (f >>= this.DB);
          if (i.t < this.t) {
            for (f += i.s; o < this.t; )
              (f += this[o]), (n[o++] = f & this.DM), (f >>= this.DB);
            f += this.s;
          } else {
            for (f += this.s; o < i.t; )
              (f += i[o]), (n[o++] = f & this.DM), (f >>= this.DB);
            f += i.s;
          }
          (n.s = f < 0 ? -1 : 0),
            f > 0 ? (n[o++] = f) : f < -1 && (n[o++] = this.DV + f),
            (n.t = o),
            n.clamp();
        }
        function vr(i) {
          var n = t();
          return this.addTo(i, n), n;
        }
        function Ot(i) {
          var n = t();
          return this.subTo(i, n), n;
        }
        function nr(i) {
          var n = t();
          return this.multiplyTo(i, n), n;
        }
        function vt(i) {
          var n = t();
          return this.divRemTo(i, n, null), n;
        }
        function sr(i) {
          var n = t();
          return this.divRemTo(i, null, n), n;
        }
        function Tr(i) {
          var n = t(),
            o = t();
          return this.divRemTo(i, n, o), new Array(n, o);
        }
        function _r(i) {
          (this[this.t] = this.am(0, i - 1, this, 0, 0, this.t)),
            ++this.t,
            this.clamp();
        }
        function Zr(i, n) {
          for (; this.t <= n; ) this[this.t++] = 0;
          for (this[n] += i; this[n] >= this.DV; )
            (this[n] -= this.DV),
              ++n >= this.t && (this[this.t++] = 0),
              ++this[n];
        }
        function xt() {}
        function qt(i) {
          return i;
        }
        function Kr(i, n, o) {
          i.multiplyTo(n, o);
        }
        function cr(i, n) {
          i.squareTo(n);
        }
        (xt.prototype.convert = qt),
          (xt.prototype.revert = qt),
          (xt.prototype.mulTo = Kr),
          (xt.prototype.sqrTo = cr);
        function Yr(i) {
          return this.exp(i, new xt());
        }
        function zr(i, n, o) {
          var f = Math.min(this.t + i.t, n);
          for (o.s = 0, o.t = f; f > 0; ) o[--f] = 0;
          var d;
          for (d = o.t - this.t; f < d; ++f)
            o[f + this.t] = this.am(0, i[f], o, f, 0, this.t);
          for (d = Math.min(i.t, n); f < d; ++f)
            this.am(0, i[f], o, f, 0, n - f);
          o.clamp();
        }
        function ci(i, n, o) {
          --n;
          var f = (o.t = this.t + i.t - n);
          for (o.s = 0; --f >= 0; ) o[f] = 0;
          for (f = Math.max(n - this.t, 0); f < i.t; ++f)
            o[this.t + f - n] = this.am(n - f, i[f], o, 0, 0, this.t + f - n);
          o.clamp(), o.drShiftTo(1, o);
        }
        function ie(i) {
          (this.r2 = t()),
            (this.q3 = t()),
            l.ONE.dlShiftTo(2 * i.t, this.r2),
            (this.mu = this.r2.divide(i)),
            (this.m = i);
        }
        function bi(i) {
          if (i.s < 0 || i.t > 2 * this.m.t) return i.mod(this.m);
          if (i.compareTo(this.m) < 0) return i;
          var n = t();
          return i.copyTo(n), this.reduce(n), n;
        }
        function Xt(i) {
          return i;
        }
        function xr(i) {
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
        function wi(i, n) {
          i.squareTo(n), this.reduce(n);
        }
        function Vt(i, n, o) {
          i.multiplyTo(n, o), this.reduce(o);
        }
        (ie.prototype.convert = bi),
          (ie.prototype.revert = Xt),
          (ie.prototype.reduce = xr),
          (ie.prototype.mulTo = Vt),
          (ie.prototype.sqrTo = wi);
        function Ar(i, n) {
          var o = i.bitLength(),
            f,
            d = E(1),
            w;
          if (o <= 0) return d;
          o < 18
            ? (f = 1)
            : o < 48
              ? (f = 3)
              : o < 144
                ? (f = 4)
                : o < 768
                  ? (f = 5)
                  : (f = 6),
            o < 8
              ? (w = new k(n))
              : n.isEven()
                ? (w = new ie(n))
                : (w = new dr(n));
          var R = new Array(),
            T = 3,
            K = f - 1,
            G = (1 << f) - 1;
          if (((R[1] = w.convert(this)), f > 1)) {
            var Bt = t();
            for (w.sqrTo(R[1], Bt); T <= G; )
              (R[T] = t()), w.mulTo(Bt, R[T - 2], R[T]), (T += 2);
          }
          var Tt = i.t - 1,
            It,
            Or = !0,
            zt = t(),
            kt;
          for (o = F(i[Tt]) - 1; Tt >= 0; ) {
            for (
              o >= K
                ? (It = (i[Tt] >> (o - K)) & G)
                : ((It = (i[Tt] & ((1 << (o + 1)) - 1)) << (K - o)),
                  Tt > 0 && (It |= i[Tt - 1] >> (this.DB + o - K))),
                T = f;
              (It & 1) == 0;
            )
              (It >>= 1), --T;
            if (((o -= T) < 0 && ((o += this.DB), --Tt), Or))
              R[It].copyTo(d), (Or = !1);
            else {
              for (; T > 1; ) w.sqrTo(d, zt), w.sqrTo(zt, d), (T -= 2);
              T > 0 ? w.sqrTo(d, zt) : ((kt = d), (d = zt), (zt = kt)),
                w.mulTo(zt, R[It], d);
            }
            for (; Tt >= 0 && (i[Tt] & (1 << o)) == 0; )
              w.sqrTo(d, zt),
                (kt = d),
                (d = zt),
                (zt = kt),
                --o < 0 && ((o = this.DB - 1), --Tt);
          }
          return w.revert(d);
        }
        function $r(i) {
          var n = this.s < 0 ? this.negate() : this.clone(),
            o = i.s < 0 ? i.negate() : i.clone();
          if (n.compareTo(o) < 0) {
            var f = n;
            (n = o), (o = f);
          }
          var d = n.getLowestSetBit(),
            w = o.getLowestSetBit();
          if (w < 0) return n;
          for (
            d < w && (w = d), w > 0 && (n.rShiftTo(w, n), o.rShiftTo(w, o));
            n.signum() > 0;
          )
            (d = n.getLowestSetBit()) > 0 && n.rShiftTo(d, n),
              (d = o.getLowestSetBit()) > 0 && o.rShiftTo(d, o),
              n.compareTo(o) >= 0
                ? (n.subTo(o, n), n.rShiftTo(1, n))
                : (o.subTo(n, o), o.rShiftTo(1, o));
          return w > 0 && o.lShiftTo(w, o), o;
        }
        function Ir(i) {
          if (i <= 0) return 0;
          var n = this.DV % i,
            o = this.s < 0 ? i - 1 : 0;
          if (this.t > 0)
            if (n == 0) o = this[0] % i;
            else
              for (var f = this.t - 1; f >= 0; --f) o = (n * o + this[f]) % i;
          return o;
        }
        function ue(i) {
          var n = i.isEven();
          if ((this.isEven() && n) || i.signum() == 0) return l.ZERO;
          for (
            var o = i.clone(),
              f = this.clone(),
              d = E(1),
              w = E(0),
              R = E(0),
              T = E(1);
            o.signum() != 0;
          ) {
            for (; o.isEven(); )
              o.rShiftTo(1, o),
                n
                  ? ((!d.isEven() || !w.isEven()) &&
                      (d.addTo(this, d), w.subTo(i, w)),
                    d.rShiftTo(1, d))
                  : w.isEven() || w.subTo(i, w),
                w.rShiftTo(1, w);
            for (; f.isEven(); )
              f.rShiftTo(1, f),
                n
                  ? ((!R.isEven() || !T.isEven()) &&
                      (R.addTo(this, R), T.subTo(i, T)),
                    R.rShiftTo(1, R))
                  : T.isEven() || T.subTo(i, T),
                T.rShiftTo(1, T);
            o.compareTo(f) >= 0
              ? (o.subTo(f, o), n && d.subTo(R, d), w.subTo(T, w))
              : (f.subTo(o, f), n && R.subTo(d, R), T.subTo(w, T));
          }
          if (f.compareTo(l.ONE) != 0) return l.ZERO;
          if (T.compareTo(i) >= 0) return T.subtract(i);
          if (T.signum() < 0) T.addTo(i, T);
          else return T;
          return T.signum() < 0 ? T.add(i) : T;
        }
        var me = [
            2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61,
            67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137,
            139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199,
            211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277,
            281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359,
            367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439,
            443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509,
          ],
          Bi = (1 << 26) / me[me.length - 1];
        function Xr(i) {
          var n,
            o = this.abs();
          if (o.t == 1 && o[0] <= me[me.length - 1]) {
            for (n = 0; n < me.length; ++n) if (o[0] == me[n]) return !0;
            return !1;
          }
          if (o.isEven()) return !1;
          for (n = 1; n < me.length; ) {
            for (var f = me[n], d = n + 1; d < me.length && f < Bi; )
              f *= me[d++];
            for (f = o.modInt(f); n < d; ) if (f % me[n++] == 0) return !1;
          }
          return o.millerRabin(i);
        }
        function yi(i) {
          var n = this.subtract(l.ONE),
            o = n.getLowestSetBit();
          if (o <= 0) return !1;
          var f = n.shiftRight(o);
          (i = (i + 1) >> 1), i > me.length && (i = me.length);
          for (var d = t(), w = 0; w < i; ++w) {
            d.fromInt(me[w]);
            var R = d.modPow(f, this);
            if (R.compareTo(l.ONE) != 0 && R.compareTo(n) != 0) {
              for (var T = 1; T++ < o && R.compareTo(n) != 0; )
                if (((R = R.modPowInt(2, this)), R.compareTo(l.ONE) == 0))
                  return !1;
              if (R.compareTo(n) != 0) return !1;
            }
          }
          return !0;
        }
        (l.prototype.chunkSize = br),
          (l.prototype.toRadix = wr),
          (l.prototype.fromRadix = hi),
          (l.prototype.fromNumber = Br),
          (l.prototype.bitwiseTo = oi),
          (l.prototype.changeBit = Rt),
          (l.prototype.addTo = Rr),
          (l.prototype.dMultiply = _r),
          (l.prototype.dAddOffset = Zr),
          (l.prototype.multiplyLowerTo = zr),
          (l.prototype.multiplyUpperTo = ci),
          (l.prototype.modInt = Ir),
          (l.prototype.millerRabin = yi),
          (l.prototype.clone = gr),
          (l.prototype.intValue = Lr),
          (l.prototype.byteValue = pr),
          (l.prototype.shortValue = ni),
          (l.prototype.signum = si),
          (l.prototype.toByteArray = ai),
          (l.prototype.equals = yr),
          (l.prototype.min = gi),
          (l.prototype.max = Sr),
          (l.prototype.and = Ur),
          (l.prototype.or = Nr),
          (l.prototype.xor = Dr),
          (l.prototype.andNot = Pr),
          (l.prototype.not = Vr),
          (l.prototype.shiftLeft = Hr),
          (l.prototype.shiftRight = Gr),
          (l.prototype.getLowestSetBit = ir),
          (l.prototype.bitCount = Pt),
          (l.prototype.testBit = Qr),
          (l.prototype.setBit = St),
          (l.prototype.clearBit = pi),
          (l.prototype.flipBit = pt),
          (l.prototype.add = vr),
          (l.prototype.subtract = Ot),
          (l.prototype.multiply = nr),
          (l.prototype.divide = vt),
          (l.prototype.remainder = sr),
          (l.prototype.divideAndRemainder = Tr),
          (l.prototype.modPow = Ar),
          (l.prototype.modInverse = ue),
          (l.prototype.pow = Yr),
          (l.prototype.gcd = $r),
          (l.prototype.isProbablePrime = Xr);
        const jr = l;
        var kr = function (i, n) {
            (this.modulus = new jr(i, 16)),
              (this.encryptionExponent = new jr(n, 16));
          },
          Er = {
            base64:
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            encode: function (i) {
              if (!i) return !1;
              var n = "",
                o,
                f,
                d,
                w,
                R,
                T,
                K,
                G = 0;
              do
                (o = i.charCodeAt(G++)),
                  (f = i.charCodeAt(G++)),
                  (d = i.charCodeAt(G++)),
                  (w = o >> 2),
                  (R = ((o & 3) << 4) | (f >> 4)),
                  (T = ((f & 15) << 2) | (d >> 6)),
                  (K = d & 63),
                  isNaN(f) ? (T = K = 64) : isNaN(d) && (K = 64),
                  (n +=
                    this.base64.charAt(w) +
                    this.base64.charAt(R) +
                    this.base64.charAt(T) +
                    this.base64.charAt(K));
              while (G < i.length);
              return n;
            },
            decode: function (i) {
              if (!i) return !1;
              i = i.replace(/[^A-Za-z0-9\+\/\=]/g, "");
              var n = "",
                o,
                f,
                d,
                w,
                R = 0;
              do
                (o = this.base64.indexOf(i.charAt(R++))),
                  (f = this.base64.indexOf(i.charAt(R++))),
                  (d = this.base64.indexOf(i.charAt(R++))),
                  (w = this.base64.indexOf(i.charAt(R++))),
                  (n += String.fromCharCode((o << 2) | (f >> 4))),
                  d != 64 &&
                    (n += String.fromCharCode(((f & 15) << 4) | (d >> 2))),
                  w != 64 && (n += String.fromCharCode(((d & 3) << 6) | w));
              while (R < i.length);
              return n;
            },
          },
          ui = {
            hex: "0123456789abcdef",
            encode: function (i) {
              if (!i) return !1;
              var n = "",
                o,
                f = 0;
              do
                (o = i.charCodeAt(f++)),
                  (n +=
                    this.hex.charAt((o >> 4) & 15) + this.hex.charAt(o & 15));
              while (f < i.length);
              return n;
            },
            decode: function (i) {
              if (!i) return !1;
              i = i.replace(/[^0-9abcdef]/g, "");
              var n = "",
                o = 0;
              do
                n += String.fromCharCode(
                  ((this.hex.indexOf(i.charAt(o++)) << 4) & 240) |
                    (this.hex.indexOf(i.charAt(o++)) & 15),
                );
              while (o < i.length);
              return n;
            },
          },
          Wr = {
            getPublicKey: function (i, n) {
              return new kr(i, n);
            },
            encrypt: function (i, n) {
              return !n ||
                ((i = this.pkcs1pad2(i, (n.modulus.bitLength() + 7) >> 3)),
                !i) ||
                ((i = i.modPowInt(n.encryptionExponent, n.modulus)), !i)
                ? !1
                : ((i = i.toString(16)),
                  (i.length & 1) == 1 && (i = "0" + i),
                  Er.encode(ui.decode(i)));
            },
            pkcs1pad2: function (i, n) {
              if (n < i.length + 11) return null;
              for (var o = [], f = i.length - 1; f >= 0 && n > 0; )
                o[--n] = i.charCodeAt(f--);
              for (o[--n] = 0; n > 2; )
                o[--n] = Math.floor(Math.random() * 254) + 1;
              return (o[--n] = 2), (o[--n] = 0), new jr(o);
            },
          };
        const mi = Wr;
      },
    },
  ]);
})();
