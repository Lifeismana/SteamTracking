/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [253],
    {
      95039: (Lt, rr, v) => {
        "use strict";
        v.d(rr, { fH: () => Zt, nW: () => p });
        const m = null,
          Zt = 0,
          p = 1;
      },
      94276: (Lt, rr, v) => {
        "use strict";
        v.d(rr, {
          kX: () => Ri,
          iP: () => ci,
          R9: () => li,
          tS: () => Pr,
          qu: () => ai,
          Ev: () => ui,
          Qc: () => zr,
          TY: () => m,
          SS: () => Zt,
        });
        var m = {};
        v.r(m),
          v.d(m, {
            bH: () => N,
            x0: () => ue,
            Xs: () => _t,
            $Y: () => lr,
            ig: () => ir,
            WM: () => Et,
            oP: () => Yt,
          });
        var Zt = {};
        v.r(Zt), v.d(Zt, { w0: () => W, tS: () => ce });
        var p = v(80613),
          l = v.n(p),
          t = v(75245),
          G = v(35038),
          Kt = v(95039),
          L = v(40164);
        const Yt = 0,
          Et = 1,
          _t = 2,
          N = 3,
          ue = 4,
          lr = 5,
          ir = 6,
          Ut = 7,
          yt = 0,
          W = 1,
          ce = 2,
          V = 3,
          re = 0,
          St = 1,
          ie = 2,
          Wt = 3,
          F = 4,
          S = 5,
          O = 6,
          z = 7;
        var _ = Object.defineProperty,
          ne = (j, e, n) =>
            e in j
              ? _(j, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: n,
                })
              : (j[e] = n),
          b = (j, e, n) => ne(j, typeof e != "symbol" ? e + "" : e, n);
        function oe(j) {
          return "unknown ECaptchaAnnotation ( " + j + " )";
        }
        function dr(j) {
          return "unknown EAuthSessionSecurityHistory ( " + j + " )";
        }
        function fr(j) {
          return "unknown EAuthenticationType ( " + j + " )";
        }
        function cr(j) {
          return "unknown EAuthSessionGuardType ( " + j + " )";
        }
        function k(j) {
          return "unknown EAuthTokenPlatformType ( " + j + " )";
        }
        function x(j) {
          return "unknown EAuthTokenAppType ( " + j + " )";
        }
        function u(j) {
          return "unknown ETokenRenewalType ( " + j + " )";
        }
        function Ai(j) {
          return "unknown EAuthTokenRevokeAction ( " + j + " )";
        }
        function ji(j) {
          return "unknown EAuthTokenState ( " + j + " )";
        }
        function Z(j) {
          return "unknown ECaptchaUsage ( " + j + " )";
        }
        function Oi(j) {
          return "unknown ECaptchaType ( " + j + " )";
        }
        function hr(j) {
          return "unknown ECaptchaDifficulty ( " + j + " )";
        }
        function ni(j) {
          return "unknown ERiskLevel ( " + j + " )";
        }
        function Fi(j) {
          return "unknown ETokenRiskFactor ( " + j + " )";
        }
        function si(j) {
          return "unknown EConfirmationState ( " + j + " )";
        }
        function _i(j) {
          return "unknown EConfirmationRequestType ( " + j + " )";
        }
        const gr = class fe extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              fe.prototype.account_name || t.Sg(fe.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              fe.sm_m ||
                (fe.sm_m = {
                  proto: fe,
                  fields: {
                    account_name: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
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
          static toObject(e, n) {
            return t.BT(fe.M(), e, n);
          }
          static fromObject(e) {
            return t.Uq(fe.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (l().BinaryReader)(e),
              y = new fe();
            return fe.deserializeBinaryFromReader(y, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return t.zj(fe.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            t.i0(fe.M(), e, n);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              fe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_GetPasswordRSAPublicKey_Request";
          }
        };
        b(gr, "sm_m"), b(gr, "sm_mbf");
        let ai = gr;
        const pr = class he extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              he.prototype.publickey_mod || t.Sg(he.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              he.sm_m ||
                (he.sm_m = {
                  proto: he,
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
              he.sm_m
            );
          }
          static MBF() {
            return he.sm_mbf || (he.sm_mbf = t.w0(he.M())), he.sm_mbf;
          }
          toObject(e = !1) {
            return he.toObject(e, this);
          }
          static toObject(e, n) {
            return t.BT(he.M(), e, n);
          }
          static fromObject(e) {
            return t.Uq(he.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (l().BinaryReader)(e),
              y = new he();
            return he.deserializeBinaryFromReader(y, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return t.zj(he.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return he.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            t.i0(he.M(), e, n);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              he.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_GetPasswordRSAPublicKey_Response";
          }
        };
        b(pr, "sm_m"), b(pr, "sm_mbf");
        let pi = pr;
        const br = class ge extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ge.prototype.device_friendly_name || t.Sg(ge.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              ge.sm_m ||
                (ge.sm_m = {
                  proto: ge,
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
              ge.sm_m
            );
          }
          static MBF() {
            return ge.sm_mbf || (ge.sm_mbf = t.w0(ge.M())), ge.sm_mbf;
          }
          toObject(e = !1) {
            return ge.toObject(e, this);
          }
          static toObject(e, n) {
            return t.BT(ge.M(), e, n);
          }
          static fromObject(e) {
            return t.Uq(ge.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (l().BinaryReader)(e),
              y = new ge();
            return ge.deserializeBinaryFromReader(y, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return t.zj(ge.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            t.i0(ge.M(), e, n);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              ge.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_DeviceDetails";
          }
        };
        b(br, "sm_m"), b(br, "sm_mbf");
        let Pr = br;
        const wr = class pe extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              pe.prototype.confirmation_type || t.Sg(pe.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              pe.sm_m ||
                (pe.sm_m = {
                  proto: pe,
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
              pe.sm_m
            );
          }
          static MBF() {
            return pe.sm_mbf || (pe.sm_mbf = t.w0(pe.M())), pe.sm_mbf;
          }
          toObject(e = !1) {
            return pe.toObject(e, this);
          }
          static toObject(e, n) {
            return t.BT(pe.M(), e, n);
          }
          static fromObject(e) {
            return t.Uq(pe.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (l().BinaryReader)(e),
              y = new pe();
            return pe.deserializeBinaryFromReader(y, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return t.zj(pe.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            t.i0(pe.M(), e, n);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              pe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_AllowedConfirmation";
          }
        };
        b(wr, "sm_m"), b(wr, "sm_mbf");
        let oi = wr;
        const Br = class be extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              be.prototype.device_friendly_name || t.Sg(be.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              be.sm_m ||
                (be.sm_m = {
                  proto: be,
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
                    device_details: { n: 3, c: Pr },
                    website_id: {
                      n: 4,
                      d: "Unknown",
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
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
          static toObject(e, n) {
            return t.BT(be.M(), e, n);
          }
          static fromObject(e) {
            return t.Uq(be.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (l().BinaryReader)(e),
              y = new be();
            return be.deserializeBinaryFromReader(y, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return t.zj(be.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return be.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            t.i0(be.M(), e, n);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              be.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_BeginAuthSessionViaQR_Request";
          }
        };
        b(Br, "sm_m"), b(Br, "sm_mbf");
        let li = Br;
        const yr = class we extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              we.prototype.client_id || t.Sg(we.M()),
              p.Message.initialize(this, e, 0, -1, [5], null);
          }
          static M() {
            return (
              we.sm_m ||
                (we.sm_m = {
                  proto: we,
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
                    allowed_confirmations: { n: 5, c: oi, r: !0, q: !0 },
                    version: { n: 6, br: t.qM.readInt32, bw: t.gp.writeInt32 },
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
          static toObject(e, n) {
            return t.BT(we.M(), e, n);
          }
          static fromObject(e) {
            return t.Uq(we.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (l().BinaryReader)(e),
              y = new we();
            return we.deserializeBinaryFromReader(y, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return t.zj(we.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return we.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            t.i0(we.M(), e, n);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              we.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_BeginAuthSessionViaQR_Response";
          }
        };
        b(yr, "sm_m"), b(yr, "sm_mbf");
        let bi = yr;
        const Sr = class Be extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Be.prototype.device_friendly_name || t.Sg(Be.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Be.sm_m ||
                (Be.sm_m = {
                  proto: Be,
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
                      d: Kt.nW,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    website_id: {
                      n: 8,
                      d: "Unknown",
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    device_details: { n: 9, c: Pr },
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
              Be.sm_m
            );
          }
          static MBF() {
            return Be.sm_mbf || (Be.sm_mbf = t.w0(Be.M())), Be.sm_mbf;
          }
          toObject(e = !1) {
            return Be.toObject(e, this);
          }
          static toObject(e, n) {
            return t.BT(Be.M(), e, n);
          }
          static fromObject(e) {
            return t.Uq(Be.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (l().BinaryReader)(e),
              y = new Be();
            return Be.deserializeBinaryFromReader(y, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return t.zj(Be.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Be.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            t.i0(Be.M(), e, n);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Be.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_BeginAuthSessionViaCredentials_Request";
          }
        };
        b(Sr, "sm_m"), b(Sr, "sm_mbf");
        let ci = Sr;
        const Mr = class ye extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ye.prototype.client_id || t.Sg(ye.M()),
              p.Message.initialize(this, e, 0, -1, [4], null);
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
                    interval: { n: 3, br: t.qM.readFloat, bw: t.gp.writeFloat },
                    allowed_confirmations: { n: 4, c: oi, r: !0, q: !0 },
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
              ye.sm_m
            );
          }
          static MBF() {
            return ye.sm_mbf || (ye.sm_mbf = t.w0(ye.M())), ye.sm_mbf;
          }
          toObject(e = !1) {
            return ye.toObject(e, this);
          }
          static toObject(e, n) {
            return t.BT(ye.M(), e, n);
          }
          static fromObject(e) {
            return t.Uq(ye.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (l().BinaryReader)(e),
              y = new ye();
            return ye.deserializeBinaryFromReader(y, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return t.zj(ye.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            t.i0(ye.M(), e, n);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              ye.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_BeginAuthSessionViaCredentials_Response";
          }
        };
        b(Mr, "sm_m"), b(Mr, "sm_mbf");
        let wi = Mr;
        const Cr = class Se extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Se.prototype.client_id || t.Sg(Se.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Se.sm_m ||
                (Se.sm_m = {
                  proto: Se,
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
              Se.sm_m
            );
          }
          static MBF() {
            return Se.sm_mbf || (Se.sm_mbf = t.w0(Se.M())), Se.sm_mbf;
          }
          toObject(e = !1) {
            return Se.toObject(e, this);
          }
          static toObject(e, n) {
            return t.BT(Se.M(), e, n);
          }
          static fromObject(e) {
            return t.Uq(Se.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (l().BinaryReader)(e),
              y = new Se();
            return Se.deserializeBinaryFromReader(y, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return t.zj(Se.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Se.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            t.i0(Se.M(), e, n);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Se.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_PollAuthSessionStatus_Request";
          }
        };
        b(Cr, "sm_m"), b(Cr, "sm_mbf");
        let ui = Cr;
        const Tt = class Me extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Me.prototype.new_client_id || t.Sg(Me.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Me.sm_m ||
                (Me.sm_m = {
                  proto: Me,
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
              Me.sm_m
            );
          }
          static MBF() {
            return Me.sm_mbf || (Me.sm_mbf = t.w0(Me.M())), Me.sm_mbf;
          }
          toObject(e = !1) {
            return Me.toObject(e, this);
          }
          static toObject(e, n) {
            return t.BT(Me.M(), e, n);
          }
          static fromObject(e) {
            return t.Uq(Me.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (l().BinaryReader)(e),
              y = new Me();
            return Me.deserializeBinaryFromReader(y, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return t.zj(Me.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Me.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            t.i0(Me.M(), e, n);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Me.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_PollAuthSessionStatus_Response";
          }
        };
        b(Tt, "sm_m"), b(Tt, "sm_mbf");
        let Vr = Tt;
        const Rr = class Ce extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ce.prototype.client_id || t.Sg(Ce.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Ce.sm_m ||
                (Ce.sm_m = {
                  proto: Ce,
                  fields: {
                    client_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
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
          static toObject(e, n) {
            return t.BT(Ce.M(), e, n);
          }
          static fromObject(e) {
            return t.Uq(Ce.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (l().BinaryReader)(e),
              y = new Ce();
            return Ce.deserializeBinaryFromReader(y, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return t.zj(Ce.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            t.i0(Ce.M(), e, n);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Ce.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_GetAuthSessionInfo_Request";
          }
        };
        b(Rr, "sm_m"), b(Rr, "sm_mbf");
        let Gr = Rr;
        const vr = class Re extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Re.prototype.ip || t.Sg(Re.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Re.sm_m ||
                (Re.sm_m = {
                  proto: Re,
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
              Re.sm_m
            );
          }
          static MBF() {
            return Re.sm_mbf || (Re.sm_mbf = t.w0(Re.M())), Re.sm_mbf;
          }
          toObject(e = !1) {
            return Re.toObject(e, this);
          }
          static toObject(e, n) {
            return t.BT(Re.M(), e, n);
          }
          static fromObject(e) {
            return t.Uq(Re.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (l().BinaryReader)(e),
              y = new Re();
            return Re.deserializeBinaryFromReader(y, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return t.zj(Re.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Re.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            t.i0(Re.M(), e, n);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Re.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_GetAuthSessionInfo_Response";
          }
        };
        b(vr, "sm_m"), b(vr, "sm_mbf");
        let Hr = vr;
        const Er = class ve extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ve.prototype.client_id || t.Sg(ve.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              ve.sm_m ||
                (ve.sm_m = {
                  proto: ve,
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
              ve.sm_m
            );
          }
          static MBF() {
            return ve.sm_mbf || (ve.sm_mbf = t.w0(ve.M())), ve.sm_mbf;
          }
          toObject(e = !1) {
            return ve.toObject(e, this);
          }
          static toObject(e, n) {
            return t.BT(ve.M(), e, n);
          }
          static fromObject(e) {
            return t.Uq(ve.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (l().BinaryReader)(e),
              y = new ve();
            return ve.deserializeBinaryFromReader(y, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return t.zj(ve.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            t.i0(ve.M(), e, n);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              ve.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_GetAuthSessionRiskInfo_Request";
          }
        };
        b(Er, "sm_m"), b(Er, "sm_mbf");
        let Qr = Er;
        const Zr = class Te extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Te.prototype.location_confirmer || t.Sg(Te.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Te.sm_m ||
                (Te.sm_m = {
                  proto: Te,
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
              Te.sm_m
            );
          }
          static MBF() {
            return Te.sm_mbf || (Te.sm_mbf = t.w0(Te.M())), Te.sm_mbf;
          }
          toObject(e = !1) {
            return Te.toObject(e, this);
          }
          static toObject(e, n) {
            return t.BT(Te.M(), e, n);
          }
          static fromObject(e) {
            return t.Uq(Te.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (l().BinaryReader)(e),
              y = new Te();
            return Te.deserializeBinaryFromReader(y, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return t.zj(Te.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Te.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            t.i0(Te.M(), e, n);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Te.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_GetAuthSessionRiskInfo_Response";
          }
        };
        b(Zr, "sm_m"), b(Zr, "sm_mbf");
        let Kr = Zr;
        const Yr = class ze extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ze.prototype.client_id || t.Sg(ze.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              ze.sm_m ||
                (ze.sm_m = {
                  proto: ze,
                  fields: {
                    client_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    results: { n: 2, c: mi },
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
              ze.sm_m
            );
          }
          static MBF() {
            return ze.sm_mbf || (ze.sm_mbf = t.w0(ze.M())), ze.sm_mbf;
          }
          toObject(e = !1) {
            return ze.toObject(e, this);
          }
          static toObject(e, n) {
            return t.BT(ze.M(), e, n);
          }
          static fromObject(e) {
            return t.Uq(ze.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (l().BinaryReader)(e),
              y = new ze();
            return ze.deserializeBinaryFromReader(y, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return t.zj(ze.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            t.i0(ze.M(), e, n);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              ze.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_NotifyRiskQuizResults_Notification";
          }
        };
        b(Yr, "sm_m"), b(Yr, "sm_mbf");
        let Nt = Yr;
        const nr = class Ae extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ae.prototype.platform || t.Sg(Ae.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Ae.sm_m ||
                (Ae.sm_m = {
                  proto: Ae,
                  fields: {
                    platform: { n: 1, br: t.qM.readBool, bw: t.gp.writeBool },
                    location: { n: 2, br: t.qM.readBool, bw: t.gp.writeBool },
                    action: { n: 3, br: t.qM.readBool, bw: t.gp.writeBool },
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
          static toObject(e, n) {
            return t.BT(Ae.M(), e, n);
          }
          static fromObject(e) {
            return t.Uq(Ae.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (l().BinaryReader)(e),
              y = new Ae();
            return Ae.deserializeBinaryFromReader(y, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return t.zj(Ae.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            t.i0(Ae.M(), e, n);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Ae.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_NotifyRiskQuizResults_Notification_RiskQuizResults";
          }
        };
        b(nr, "sm_m"), b(nr, "sm_mbf");
        let mi = nr;
        class Dt extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Dt.toObject(e, this);
          }
          static toObject(e, n) {
            return e ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(e) {
            return new Dt();
          }
          static deserializeBinary(e) {
            let n = new (l().BinaryReader)(e),
              y = new Dt();
            return Dt.deserializeBinaryFromReader(y, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return e;
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Dt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {}
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Dt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_GetAuthSessionsForAccount_Request";
          }
        }
        const $r = class je extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              je.prototype.client_ids || t.Sg(je.M()),
              p.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              je.sm_m ||
                (je.sm_m = {
                  proto: je,
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
              je.sm_m
            );
          }
          static MBF() {
            return je.sm_mbf || (je.sm_mbf = t.w0(je.M())), je.sm_mbf;
          }
          toObject(e = !1) {
            return je.toObject(e, this);
          }
          static toObject(e, n) {
            return t.BT(je.M(), e, n);
          }
          static fromObject(e) {
            return t.Uq(je.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (l().BinaryReader)(e),
              y = new je();
            return je.deserializeBinaryFromReader(y, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return t.zj(je.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return je.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            t.i0(je.M(), e, n);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              je.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_GetAuthSessionsForAccount_Response";
          }
        };
        b($r, "sm_m"), b($r, "sm_mbf");
        let zt = $r;
        const Rt = class Fe extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Fe.prototype.version || t.Sg(Fe.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Fe.sm_m ||
                (Fe.sm_m = {
                  proto: Fe,
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
                      d: Kt.nW,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
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
          static toObject(e, n) {
            return t.BT(Fe.M(), e, n);
          }
          static fromObject(e) {
            return t.Uq(Fe.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (l().BinaryReader)(e),
              y = new Fe();
            return Fe.deserializeBinaryFromReader(y, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return t.zj(Fe.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            t.i0(Fe.M(), e, n);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Fe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request";
          }
        };
        b(Rt, "sm_m"), b(Rt, "sm_mbf");
        let Bi = Rt;
        class Bt extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Bt.toObject(e, this);
          }
          static toObject(e, n) {
            return e ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(e) {
            return new Bt();
          }
          static deserializeBinary(e) {
            let n = new (l().BinaryReader)(e),
              y = new Bt();
            return Bt.deserializeBinaryFromReader(y, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return e;
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Bt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {}
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Bt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response";
          }
        }
        const Tr = class _e extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              _e.prototype.client_id || t.Sg(_e.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              _e.sm_m ||
                (_e.sm_m = {
                  proto: _e,
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
              _e.sm_m
            );
          }
          static MBF() {
            return _e.sm_mbf || (_e.sm_mbf = t.w0(_e.M())), _e.sm_mbf;
          }
          toObject(e = !1) {
            return _e.toObject(e, this);
          }
          static toObject(e, n) {
            return t.BT(_e.M(), e, n);
          }
          static fromObject(e) {
            return t.Uq(_e.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (l().BinaryReader)(e),
              y = new _e();
            return _e.deserializeBinaryFromReader(y, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return t.zj(_e.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return _e.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            t.i0(_e.M(), e, n);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              _e.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request";
          }
        };
        b(Tr, "sm_m"), b(Tr, "sm_mbf");
        let zr = Tr;
        const Ot = class xe extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              xe.prototype.agreement_session_url || t.Sg(xe.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              xe.sm_m ||
                (xe.sm_m = {
                  proto: xe,
                  fields: {
                    agreement_session_url: {
                      n: 7,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
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
          static toObject(e, n) {
            return t.BT(xe.M(), e, n);
          }
          static fromObject(e) {
            return t.Uq(xe.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (l().BinaryReader)(e),
              y = new xe();
            return xe.deserializeBinaryFromReader(y, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return t.zj(xe.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            t.i0(xe.M(), e, n);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              xe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response";
          }
        };
        b(Ot, "sm_m"), b(Ot, "sm_mbf");
        let sr = Ot;
        const At = class Ie extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ie.prototype.refresh_token || t.Sg(Ie.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Ie.sm_m ||
                (Ie.sm_m = {
                  proto: Ie,
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
              Ie.sm_m
            );
          }
          static MBF() {
            return Ie.sm_mbf || (Ie.sm_mbf = t.w0(Ie.M())), Ie.sm_mbf;
          }
          toObject(e = !1) {
            return Ie.toObject(e, this);
          }
          static toObject(e, n) {
            return t.BT(Ie.M(), e, n);
          }
          static fromObject(e) {
            return t.Uq(Ie.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (l().BinaryReader)(e),
              y = new Ie();
            return Ie.deserializeBinaryFromReader(y, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return t.zj(Ie.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            t.i0(Ie.M(), e, n);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Ie.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_AccessToken_GenerateForApp_Request";
          }
        };
        b(At, "sm_m"), b(At, "sm_mbf");
        let ar = At;
        const Ar = class ke extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ke.prototype.access_token || t.Sg(ke.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              ke.sm_m ||
                (ke.sm_m = {
                  proto: ke,
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
              ke.sm_m
            );
          }
          static MBF() {
            return ke.sm_mbf || (ke.sm_mbf = t.w0(ke.M())), ke.sm_mbf;
          }
          toObject(e = !1) {
            return ke.toObject(e, this);
          }
          static toObject(e, n) {
            return t.BT(ke.M(), e, n);
          }
          static fromObject(e) {
            return t.Uq(ke.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (l().BinaryReader)(e),
              y = new ke();
            return ke.deserializeBinaryFromReader(y, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return t.zj(ke.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return ke.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            t.i0(ke.M(), e, n);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              ke.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_AccessToken_GenerateForApp_Response";
          }
        };
        b(Ar, "sm_m"), b(Ar, "sm_mbf");
        let Wr = Ar;
        const Xr = class Ee extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ee.prototype.include_revoked || t.Sg(Ee.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Ee.sm_m ||
                (Ee.sm_m = {
                  proto: Ee,
                  fields: {
                    include_revoked: {
                      n: 1,
                      d: !1,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
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
          static toObject(e, n) {
            return t.BT(Ee.M(), e, n);
          }
          static fromObject(e) {
            return t.Uq(Ee.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (l().BinaryReader)(e),
              y = new Ee();
            return Ee.deserializeBinaryFromReader(y, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return t.zj(Ee.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            t.i0(Ee.M(), e, n);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Ee.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_RefreshToken_Enumerate_Request";
          }
        };
        b(Xr, "sm_m"), b(Xr, "sm_mbf");
        let It = Xr;
        const qt = class We extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              We.prototype.refresh_tokens || t.Sg(We.M()),
              p.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              We.sm_m ||
                (We.sm_m = {
                  proto: We,
                  fields: {
                    refresh_tokens: { n: 1, c: di, r: !0, q: !0 },
                    requesting_token: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
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
          static toObject(e, n) {
            return t.BT(We.M(), e, n);
          }
          static fromObject(e) {
            return t.Uq(We.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (l().BinaryReader)(e),
              y = new We();
            return We.deserializeBinaryFromReader(y, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return t.zj(We.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return We.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            t.i0(We.M(), e, n);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              We.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_RefreshToken_Enumerate_Response";
          }
        };
        b(qt, "sm_m"), b(qt, "sm_mbf");
        let Jr = qt;
        const ur = class Oe extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Oe.prototype.time || t.Sg(Oe.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Oe.sm_m ||
                (Oe.sm_m = {
                  proto: Oe,
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
              Oe.sm_m
            );
          }
          static MBF() {
            return Oe.sm_mbf || (Oe.sm_mbf = t.w0(Oe.M())), Oe.sm_mbf;
          }
          toObject(e = !1) {
            return Oe.toObject(e, this);
          }
          static toObject(e, n) {
            return t.BT(Oe.M(), e, n);
          }
          static fromObject(e) {
            return t.Uq(Oe.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (l().BinaryReader)(e),
              y = new Oe();
            return Oe.deserializeBinaryFromReader(y, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return t.zj(Oe.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            t.i0(Oe.M(), e, n);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Oe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_RefreshToken_Enumerate_Response_TokenUsageEvent";
          }
        };
        b(ur, "sm_m"), b(ur, "sm_mbf");
        let ei = ur;
        const jr = class qe extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              qe.prototype.token_id || t.Sg(qe.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              qe.sm_m ||
                (qe.sm_m = {
                  proto: qe,
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
                    first_seen: { n: 9, c: ei },
                    last_seen: { n: 10, c: ei },
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
              qe.sm_m
            );
          }
          static MBF() {
            return qe.sm_mbf || (qe.sm_mbf = t.w0(qe.M())), qe.sm_mbf;
          }
          toObject(e = !1) {
            return qe.toObject(e, this);
          }
          static toObject(e, n) {
            return t.BT(qe.M(), e, n);
          }
          static fromObject(e) {
            return t.Uq(qe.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (l().BinaryReader)(e),
              y = new qe();
            return qe.deserializeBinaryFromReader(y, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return t.zj(qe.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            t.i0(qe.M(), e, n);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              qe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_RefreshToken_Enumerate_Response_RefreshTokenDescription";
          }
        };
        b(jr, "sm_m"), b(jr, "sm_mbf");
        let di = jr;
        const se = class Le extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Le.prototype.token || t.Sg(Le.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Le.sm_m ||
                (Le.sm_m = {
                  proto: Le,
                  fields: {
                    token: { n: 1, br: t.qM.readString, bw: t.gp.writeString },
                    revoke_action: {
                      n: 2,
                      d: St,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
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
          static toObject(e, n) {
            return t.BT(Le.M(), e, n);
          }
          static fromObject(e) {
            return t.Uq(Le.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (l().BinaryReader)(e),
              y = new Le();
            return Le.deserializeBinaryFromReader(y, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return t.zj(Le.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Le.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            t.i0(Le.M(), e, n);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Le.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_Token_Revoke_Request";
          }
        };
        b(se, "sm_m"), b(se, "sm_mbf");
        let yi = se;
        class $t extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return $t.toObject(e, this);
          }
          static toObject(e, n) {
            return e ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(e) {
            return new $t();
          }
          static deserializeBinary(e) {
            let n = new (l().BinaryReader)(e),
              y = new $t();
            return $t.deserializeBinaryFromReader(y, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return e;
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return $t.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {}
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              $t.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_Token_Revoke_Response";
          }
        }
        const Or = class Ue extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ue.prototype.token_id || t.Sg(Ue.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
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
                    steamid: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    revoke_action: {
                      n: 3,
                      d: St,
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
              Ue.sm_m
            );
          }
          static MBF() {
            return Ue.sm_mbf || (Ue.sm_mbf = t.w0(Ue.M())), Ue.sm_mbf;
          }
          toObject(e = !1) {
            return Ue.toObject(e, this);
          }
          static toObject(e, n) {
            return t.BT(Ue.M(), e, n);
          }
          static fromObject(e) {
            return t.Uq(Ue.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (l().BinaryReader)(e),
              y = new Ue();
            return Ue.deserializeBinaryFromReader(y, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return t.zj(Ue.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            t.i0(Ue.M(), e, n);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Ue.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_RefreshToken_Revoke_Request";
          }
        };
        b(Or, "sm_m"), b(Or, "sm_mbf");
        let Si = Or;
        class Pt extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Pt.toObject(e, this);
          }
          static toObject(e, n) {
            return e ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(e) {
            return new Pt();
          }
          static deserializeBinary(e) {
            let n = new (l().BinaryReader)(e),
              y = new Pt();
            return Pt.deserializeBinaryFromReader(y, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return e;
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Pt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {}
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Pt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_RefreshToken_Revoke_Response";
          }
        }
        const Fr = class Ne extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ne.prototype.token_id || t.Sg(Ne.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Ne.sm_m ||
                (Ne.sm_m = {
                  proto: Ne,
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
                    first_seen: { n: 11, c: me },
                    last_seen: { n: 12, c: me },
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
          static toObject(e, n) {
            return t.BT(Ne.M(), e, n);
          }
          static fromObject(e) {
            return t.Uq(Ne.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (l().BinaryReader)(e),
              y = new Ne();
            return Ne.deserializeBinaryFromReader(y, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return t.zj(Ne.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            t.i0(Ne.M(), e, n);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Ne.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSupportRefreshTokenDescription";
          }
        };
        b(Fr, "sm_m"), b(Fr, "sm_mbf");
        let ti = Fr;
        const qr = class De extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              De.prototype.time || t.Sg(De.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              De.sm_m ||
                (De.sm_m = {
                  proto: De,
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
              De.sm_m
            );
          }
          static MBF() {
            return De.sm_mbf || (De.sm_mbf = t.w0(De.M())), De.sm_mbf;
          }
          toObject(e = !1) {
            return De.toObject(e, this);
          }
          static toObject(e, n) {
            return t.BT(De.M(), e, n);
          }
          static fromObject(e) {
            return t.Uq(De.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (l().BinaryReader)(e),
              y = new De();
            return De.deserializeBinaryFromReader(y, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return t.zj(De.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return De.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            t.i0(De.M(), e, n);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              De.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSupportRefreshTokenDescription_TokenUsageEvent";
          }
        };
        b(qr, "sm_m"), b(qr, "sm_mbf");
        let me = qr;
        const de = class Pe extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Pe.prototype.action || t.Sg(Pe.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Pe.sm_m ||
                (Pe.sm_m = {
                  proto: Pe,
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
              Pe.sm_m
            );
          }
          static MBF() {
            return Pe.sm_mbf || (Pe.sm_mbf = t.w0(Pe.M())), Pe.sm_mbf;
          }
          toObject(e = !1) {
            return Pe.toObject(e, this);
          }
          static toObject(e, n) {
            return t.BT(Pe.M(), e, n);
          }
          static fromObject(e) {
            return t.Uq(Pe.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (l().BinaryReader)(e),
              y = new Pe();
            return Pe.deserializeBinaryFromReader(y, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return t.zj(Pe.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            t.i0(Pe.M(), e, n);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Pe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSupportRefreshTokenAudit";
          }
        };
        b(de, "sm_m"), b(de, "sm_mbf");
        let Mi = de;
        const ri = class Ve extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ve.prototype.steamid || t.Sg(Ve.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Ve.sm_m ||
                (Ve.sm_m = {
                  proto: Ve,
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
              Ve.sm_m
            );
          }
          static MBF() {
            return Ve.sm_mbf || (Ve.sm_mbf = t.w0(Ve.M())), Ve.sm_mbf;
          }
          toObject(e = !1) {
            return Ve.toObject(e, this);
          }
          static toObject(e, n) {
            return t.BT(Ve.M(), e, n);
          }
          static fromObject(e) {
            return t.Uq(Ve.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (l().BinaryReader)(e),
              y = new Ve();
            return Ve.deserializeBinaryFromReader(y, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return t.zj(Ve.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            t.i0(Ve.M(), e, n);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Ve.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthenticationSupport_QueryRefreshTokensByAccount_Request";
          }
        };
        b(ri, "sm_m"), b(ri, "sm_mbf");
        let Ci = ri;
        const _r = class Ge extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ge.prototype.refresh_tokens || t.Sg(Ge.M()),
              p.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              Ge.sm_m ||
                (Ge.sm_m = {
                  proto: Ge,
                  fields: {
                    refresh_tokens: { n: 1, c: ti, r: !0, q: !0 },
                    last_token_reset: {
                      n: 2,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                  },
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
          static toObject(e, n) {
            return t.BT(Ge.M(), e, n);
          }
          static fromObject(e) {
            return t.Uq(Ge.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (l().BinaryReader)(e),
              y = new Ge();
            return Ge.deserializeBinaryFromReader(y, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return t.zj(Ge.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            t.i0(Ge.M(), e, n);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Ge.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthenticationSupport_QueryRefreshTokensByAccount_Response";
          }
        };
        b(_r, "sm_m"), b(_r, "sm_mbf");
        let Lr = _r;
        const Ur = class He extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              He.prototype.token_id || t.Sg(He.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
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
          static toObject(e, n) {
            return t.BT(He.M(), e, n);
          }
          static fromObject(e) {
            return t.Uq(He.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (l().BinaryReader)(e),
              y = new He();
            return He.deserializeBinaryFromReader(y, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return t.zj(He.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return He.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            t.i0(He.M(), e, n);
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
        b(Ur, "sm_m"), b(Ur, "sm_mbf");
        let fi = Ur;
        const Nr = class Qe extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Qe.prototype.refresh_tokens || t.Sg(Qe.M()),
              p.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              Qe.sm_m ||
                (Qe.sm_m = {
                  proto: Qe,
                  fields: { refresh_tokens: { n: 1, c: ti, r: !0, q: !0 } },
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
          static toObject(e, n) {
            return t.BT(Qe.M(), e, n);
          }
          static fromObject(e) {
            return t.Uq(Qe.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (l().BinaryReader)(e),
              y = new Qe();
            return Qe.deserializeBinaryFromReader(y, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return t.zj(Qe.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            t.i0(Qe.M(), e, n);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Qe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthenticationSupport_QueryRefreshTokenByID_Response";
          }
        };
        b(Nr, "sm_m"), b(Nr, "sm_mbf");
        let hi = Nr;
        const i = class Ze extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ze.prototype.token_id || t.Sg(Ze.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
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
                    steamid: {
                      n: 2,
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
          static toObject(e, n) {
            return t.BT(Ze.M(), e, n);
          }
          static fromObject(e) {
            return t.Uq(Ze.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (l().BinaryReader)(e),
              y = new Ze();
            return Ze.deserializeBinaryFromReader(y, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return t.zj(Ze.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            t.i0(Ze.M(), e, n);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Ze.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthenticationSupport_RevokeToken_Request";
          }
        };
        b(i, "sm_m"), b(i, "sm_mbf");
        let s = i;
        class o extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return o.toObject(e, this);
          }
          static toObject(e, n) {
            return e ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(e) {
            return new o();
          }
          static deserializeBinary(e) {
            let n = new (l().BinaryReader)(e),
              y = new o();
            return o.deserializeBinaryFromReader(y, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return e;
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {}
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
        const f = class Ke extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ke.prototype.token_id || t.Sg(Ke.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Ke.sm_m ||
                (Ke.sm_m = {
                  proto: Ke,
                  fields: {
                    token_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
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
          static toObject(e, n) {
            return t.BT(Ke.M(), e, n);
          }
          static fromObject(e) {
            return t.Uq(Ke.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (l().BinaryReader)(e),
              y = new Ke();
            return Ke.deserializeBinaryFromReader(y, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return t.zj(Ke.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Ke.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            t.i0(Ke.M(), e, n);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Ke.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthenticationSupport_GetTokenHistory_Request";
          }
        };
        b(f, "sm_m"), b(f, "sm_mbf");
        let d = f;
        const w = class Ye extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ye.prototype.history || t.Sg(Ye.M()),
              p.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              Ye.sm_m ||
                (Ye.sm_m = {
                  proto: Ye,
                  fields: { history: { n: 1, c: Mi, r: !0, q: !0 } },
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
          static toObject(e, n) {
            return t.BT(Ye.M(), e, n);
          }
          static fromObject(e) {
            return t.Uq(Ye.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (l().BinaryReader)(e),
              y = new Ye();
            return Ye.deserializeBinaryFromReader(y, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return t.zj(Ye.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            t.i0(Ye.M(), e, n);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Ye.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthenticationSupport_GetTokenHistory_Response";
          }
        };
        b(w, "sm_m"), b(w, "sm_mbf");
        let R = w;
        const T = class $e extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              $e.prototype.steamid || t.Sg($e.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              $e.sm_m ||
                ($e.sm_m = {
                  proto: $e,
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
              $e.sm_m
            );
          }
          static MBF() {
            return $e.sm_mbf || ($e.sm_mbf = t.w0($e.M())), $e.sm_mbf;
          }
          toObject(e = !1) {
            return $e.toObject(e, this);
          }
          static toObject(e, n) {
            return t.BT($e.M(), e, n);
          }
          static fromObject(e) {
            return t.Uq($e.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (l().BinaryReader)(e),
              y = new $e();
            return $e.deserializeBinaryFromReader(y, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return t.zj($e.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return $e.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            t.i0($e.M(), e, n);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              $e.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthenticationSupport_MarkTokenCompromised_Request";
          }
        };
        b(T, "sm_m"), b(T, "sm_mbf");
        let K = T;
        class H extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return H.toObject(e, this);
          }
          static toObject(e, n) {
            return e ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(e) {
            return new H();
          }
          static deserializeBinary(e) {
            let n = new (l().BinaryReader)(e),
              y = new H();
            return H.deserializeBinaryFromReader(y, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return e;
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {}
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              H.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthenticationSupport_MarkTokenCompromised_Response";
          }
        }
        const Mt = class Xe extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Xe.prototype.platform || t.Sg(Xe.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
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
                    appid: { n: 2, br: t.qM.readUint32, bw: t.gp.writeUint32 },
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
          static toObject(e, n) {
            return t.BT(Xe.M(), e, n);
          }
          static fromObject(e) {
            return t.Uq(Xe.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (l().BinaryReader)(e),
              y = new Xe();
            return Xe.deserializeBinaryFromReader(y, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return t.zj(Xe.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            t.i0(Xe.M(), e, n);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Xe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloudGaming_CreateNonce_Request";
          }
        };
        b(Mt, "sm_m"), b(Mt, "sm_mbf");
        let jt = Mt;
        const kt = class Je extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Je.prototype.nonce || t.Sg(Je.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Je.sm_m ||
                (Je.sm_m = {
                  proto: Je,
                  fields: {
                    nonce: { n: 1, br: t.qM.readString, bw: t.gp.writeString },
                    expiry: { n: 2, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                  },
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
          static toObject(e, n) {
            return t.BT(Je.M(), e, n);
          }
          static fromObject(e) {
            return t.Uq(Je.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (l().BinaryReader)(e),
              y = new Je();
            return Je.deserializeBinaryFromReader(y, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return t.zj(Je.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Je.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            t.i0(Je.M(), e, n);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Je.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloudGaming_CreateNonce_Response";
          }
        };
        b(kt, "sm_m"), b(kt, "sm_mbf");
        let Dr = kt;
        const Ft = class et extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              et.prototype.appid || t.Sg(et.M()),
              p.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              et.sm_m ||
                (et.sm_m = {
                  proto: et,
                  fields: {
                    appid: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    minutes_remaining: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              et.sm_m
            );
          }
          static MBF() {
            return et.sm_mbf || (et.sm_mbf = t.w0(et.M())), et.sm_mbf;
          }
          toObject(e = !1) {
            return et.toObject(e, this);
          }
          static toObject(e, n) {
            return t.BT(et.M(), e, n);
          }
          static fromObject(e) {
            return t.Uq(et.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (l().BinaryReader)(e),
              y = new et();
            return et.deserializeBinaryFromReader(y, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return t.zj(et.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return et.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            t.i0(et.M(), e, n);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              et.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloudGaming_TimeRemaining";
          }
        };
        b(Ft, "sm_m"), b(Ft, "sm_mbf");
        let J = Ft;
        const mr = class tt extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              tt.prototype.platform || t.Sg(tt.M()),
              p.Message.initialize(this, e, 0, -1, [2], null);
          }
          static M() {
            return (
              tt.sm_m ||
                (tt.sm_m = {
                  proto: tt,
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
              tt.sm_m
            );
          }
          static MBF() {
            return tt.sm_mbf || (tt.sm_mbf = t.w0(tt.M())), tt.sm_mbf;
          }
          toObject(e = !1) {
            return tt.toObject(e, this);
          }
          static toObject(e, n) {
            return t.BT(tt.M(), e, n);
          }
          static fromObject(e) {
            return t.Uq(tt.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (l().BinaryReader)(e),
              y = new tt();
            return tt.deserializeBinaryFromReader(y, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return t.zj(tt.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return tt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            t.i0(tt.M(), e, n);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              tt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloudGaming_GetTimeRemaining_Request";
          }
        };
        b(mr, "sm_m"), b(mr, "sm_mbf");
        let Xt = mr;
        const xr = class rt extends p.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              rt.prototype.entries || t.Sg(rt.M()),
              p.Message.initialize(this, e, 0, -1, [2], null);
          }
          static M() {
            return (
              rt.sm_m ||
                (rt.sm_m = {
                  proto: rt,
                  fields: { entries: { n: 2, c: J, r: !0, q: !0 } },
                }),
              rt.sm_m
            );
          }
          static MBF() {
            return rt.sm_mbf || (rt.sm_mbf = t.w0(rt.M())), rt.sm_mbf;
          }
          toObject(e = !1) {
            return rt.toObject(e, this);
          }
          static toObject(e, n) {
            return t.BT(rt.M(), e, n);
          }
          static fromObject(e) {
            return t.Uq(rt.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (l().BinaryReader)(e),
              y = new rt();
            return rt.deserializeBinaryFromReader(y, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return t.zj(rt.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return rt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            t.i0(rt.M(), e, n);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              rt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloudGaming_GetTimeRemaining_Response";
          }
        };
        b(xr, "sm_m"), b(xr, "sm_mbf");
        let qi = xr;
        var Ri;
        ((j) => {
          function e($, X, ee) {
            return $.SendMsg(
              "Authentication.GetPasswordRSAPublicKey#1",
              (0, G.I8)(ai, X, ee),
              pi,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          j.GetPasswordRSAPublicKey = e;
          function n($, X, ee) {
            return $.SendMsg(
              "Authentication.BeginAuthSessionViaQR#1",
              (0, G.I8)(li, X, ee),
              bi,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          j.BeginAuthSessionViaQR = n;
          function y($, X, ee) {
            return $.SendMsg(
              "Authentication.BeginAuthSessionViaCredentials#1",
              (0, G.I8)(ci, X, ee),
              wi,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          j.BeginAuthSessionViaCredentials = y;
          function Ir($, X, ee) {
            return $.SendMsg(
              "Authentication.PollAuthSessionStatus#1",
              (0, G.I8)(ui, X, ee),
              Vr,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          j.PollAuthSessionStatus = Ir;
          function kr($, X, ee) {
            return $.SendMsg(
              "Authentication.GetAuthSessionInfo#1",
              (0, G.I8)(Gr, X, ee),
              Hr,
              { ePrivilege: 1 },
            );
          }
          j.GetAuthSessionInfo = kr;
          function Jt($, X, ee) {
            return $.SendMsg(
              "Authentication.GetAuthSessionRiskInfo#1",
              (0, G.I8)(Qr, X, ee),
              Kr,
              { ePrivilege: 1 },
            );
          }
          j.GetAuthSessionRiskInfo = Jt;
          function Vt($, X) {
            return $.SendNotification(
              "Authentication.NotifyRiskQuizResults#1",
              (0, G.I8)(Nt, X),
              { ePrivilege: 1 },
            );
          }
          j.NotifyRiskQuizResults = Vt;
          function Gt($, X, ee) {
            return $.SendMsg(
              "Authentication.UpdateAuthSessionWithMobileConfirmation#1",
              (0, G.I8)(Bi, X, ee),
              Bt,
              { ePrivilege: 1 },
            );
          }
          j.UpdateAuthSessionWithMobileConfirmation = Gt;
          function Li($, X, ee) {
            return $.SendMsg(
              "Authentication.UpdateAuthSessionWithSteamGuardCode#1",
              (0, G.I8)(zr, X, ee),
              sr,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          j.UpdateAuthSessionWithSteamGuardCode = Li;
          function vi($, X, ee) {
            return $.SendMsg(
              "Authentication.GenerateAccessTokenForApp#1",
              (0, G.I8)(ar, X, ee),
              Wr,
              { ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }
          j.GenerateAccessTokenForApp = vi;
          function Ti($, X, ee) {
            return $.SendMsg(
              "Authentication.EnumerateTokens#1",
              (0, G.I8)(It, X, ee),
              Jr,
              { ePrivilege: 1 },
            );
          }
          j.EnumerateTokens = Ti;
          function Ui($, X, ee) {
            return $.SendMsg(
              "Authentication.GetAuthSessionsForAccount#1",
              (0, G.I8)(Dt, X, ee),
              zt,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          j.GetAuthSessionsForAccount = Ui;
          function Ni($, X, ee) {
            return $.SendMsg(
              "Authentication.RevokeToken#1",
              (0, G.I8)(yi, X, ee),
              $t,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          j.RevokeToken = Ni;
          function Di($, X, ee) {
            return $.SendMsg(
              "Authentication.RevokeRefreshToken#1",
              (0, G.I8)(Si, X, ee),
              Pt,
              { ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          j.RevokeRefreshToken = Di;
        })(Ri || (Ri = {}));
        var xi;
        ((j) => {
          function e(Jt, Vt, Gt) {
            return Jt.SendMsg(
              "AuthenticationSupport.QueryRefreshTokensByAccount#1",
              (0, G.I8)(Ci, Vt, Gt),
              Lr,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }
          j.QueryRefreshTokensByAccount = e;
          function n(Jt, Vt, Gt) {
            return Jt.SendMsg(
              "AuthenticationSupport.QueryRefreshTokenByID#1",
              (0, G.I8)(fi, Vt, Gt),
              hi,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }
          j.QueryRefreshTokenByID = n;
          function y(Jt, Vt, Gt) {
            return Jt.SendMsg(
              "AuthenticationSupport.RevokeToken#1",
              (0, G.I8)(s, Vt, Gt),
              o,
              { ePrivilege: 5 },
            );
          }
          j.RevokeToken = y;
          function Ir(Jt, Vt, Gt) {
            return Jt.SendMsg(
              "AuthenticationSupport.GetTokenHistory#1",
              (0, G.I8)(d, Vt, Gt),
              R,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }
          j.GetTokenHistory = Ir;
          function kr(Jt, Vt, Gt) {
            return Jt.SendMsg(
              "AuthenticationSupport.MarkTokenCompromised#1",
              (0, G.I8)(K, Vt, Gt),
              H,
              { ePrivilege: 5 },
            );
          }
          j.MarkTokenCompromised = kr;
        })(xi || (xi = {}));
        var Ii;
        ((j) => {
          function e(y, Ir, kr) {
            return y.SendMsg(
              "CloudGaming.CreateNonce#1",
              (0, G.I8)(jt, Ir, kr),
              Dr,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          j.CreateNonce = e;
          function n(y, Ir, kr) {
            return y.SendMsg(
              "CloudGaming.GetTimeRemaining#1",
              (0, G.I8)(Xt, Ir, kr),
              qi,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          j.GetTimeRemaining = n;
        })(Ii || (Ii = {}));
      },
      8059: (Lt, rr, v) => {
        "use strict";
        v.d(rr, {
          FU: () => ce,
          eF: () => W,
          gf: () => re,
          wI: () => V,
          yp: () => St,
        });
        var m = v(14947),
          Zt = v(41735),
          p = v.n(Zt),
          l = v(35038),
          t = v(27066),
          G = v(72604),
          Kt = v(99412),
          L = v(94354),
          Yt = v(3166),
          Et = v(94276),
          _t = v(71944),
          N = v(64434),
          ue = Object.defineProperty,
          lr = Object.getOwnPropertyDescriptor,
          ir = (F, S, O) =>
            S in F
              ? ue(F, S, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: O,
                })
              : (F[S] = O),
          Ut = (F, S, O, z) => {
            for (
              var _ = z > 1 ? void 0 : z ? lr(S, O) : S, ne = F.length - 1, b;
              ne >= 0;
              ne--
            )
              (b = F[ne]) && (_ = (z ? b(S, O, _) : b(_)) || _);
            return z && _ && ue(S, O, _), _;
          },
          yt = (F, S, O) => ir(F, typeof S != "symbol" ? S + "" : S, O),
          W = ((F) => (
            (F[(F.None = 0)] = "None"),
            (F[(F.Generic = 1)] = "Generic"),
            (F[(F.Expired = 2)] = "Expired"),
            (F[(F.Network = 3)] = "Network"),
            (F[(F.MoveAuthenticator = 4)] = "MoveAuthenticator"),
            (F[(F.RateLimitExceeded = 5)] = "RateLimitExceeded"),
            (F[(F.AnonymousLogin = 6)] = "AnonymousLogin"),
            F
          ))(W || {});
        function ce(F) {
          const {
            shared_secret: S,
            identity_secret: O,
            secret_1: z,
            status: _,
            uri: ne,
            server_time: b,
            ...oe
          } = F;
          return {
            shared_secret: _t.fromByteArray(S),
            identity_secret: _t.fromByteArray(O),
            secret_1: _t.fromByteArray(z),
            ...oe,
          };
        }
        var V = ((F) => (
          (F[(F.k_Success = 0)] = "k_Success"),
          (F[(F.k_PrimaryDomainFail = 1)] = "k_PrimaryDomainFail"),
          (F[(F.k_SecondaryDomainFail = 2)] = "k_SecondaryDomainFail"),
          F
        ))(V || {});
        class re {
          constructor(S, O, z, _) {
            yt(this, "m_transport"),
              yt(this, "m_strClientID"),
              yt(this, "m_msPollInterval"),
              yt(this, "m_activeTimerID"),
              yt(this, "m_rgRequestID"),
              yt(this, "m_strTokenToRevoke"),
              yt(this, "m_strChallengeURL"),
              yt(this, "m_onShowAgreement"),
              yt(this, "m_bRemoteInteraction", !1),
              yt(this, "m_onCompleteCallback"),
              yt(this, "m_eFailureState", 0),
              yt(this, "m_strExtendedErrorMessage", ""),
              yt(this, "m_onDeviceDetailsCallback"),
              (0, m.Gn)(this),
              (this.m_transport = S),
              (this.m_onCompleteCallback = O),
              (this.m_onDeviceDetailsCallback = z),
              (this.m_onShowAgreement = _);
          }
          StartPolling(S = !0) {
            this.m_activeTimerID != null && this.StopPolling(),
              S
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
              const S = l.w.Init(Et.Ev);
              S.SetEMsg(L.Kec),
                S.Body().set_client_id(this.m_strClientID),
                S.Body().set_request_id(this.m_rgRequestID),
                this.m_strTokenToRevoke &&
                  S.Body().set_token_to_revoke(this.m_strTokenToRevoke);
              const O = await Et.kX.PollAuthSessionStatus(this.m_transport, S),
                z = O.GetEResult();
              if (z !== G.R) {
                if (z === G.zi) {
                  const k = O.Hdr().transport_error();
                  if (
                    ((0, N.ZI)(
                      `Failed to poll auth session. Result ${z}. Transport Error: ${k}`,
                    ),
                    k === Kt.MhR || k === Kt.VrD)
                  )
                    return (
                      this.m_transport.MakeReady(), this.StartPolling(!1), G.R
                    );
                }
                if (z === G.Qo || z === G.ob) this.m_eFailureState = 2;
                else if (z === G.h_) this.m_eFailureState = 5;
                else if (z == G.oH) {
                  if (this.m_onShowAgreement)
                    this.m_onShowAgreement(O.Body().agreement_session_url());
                  else {
                    const k = O.Body().agreement_session_url(),
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
                new_client_id: ne,
                refresh_token: b,
                access_token: oe,
                account_name: dr,
                had_remote_interaction: fr,
                new_guard_data: cr,
              } = O.Body().toObject();
              return (
                (this.m_bRemoteInteraction = !!fr),
                b
                  ? (this.m_onCompleteCallback({
                      bSuccess: !0,
                      strRefreshToken: b,
                      strAccessToken: oe,
                      strAccountName: dr,
                      strNewGuardData: cr,
                    }),
                    z)
                  : (_ && (this.m_strChallengeURL = _),
                    ne && (this.m_strClientID = ne),
                    this.StartPolling(!1),
                    z)
              );
            } catch (S) {
              return (
                (0, N.ZI)(`Failed to poll auth session. ${S}`),
                (this.m_eFailureState = 1),
                this.m_onCompleteCallback({ bSuccess: !1 }),
                G.zi
              );
            }
          }
          SetTokenToRevoke(S) {
            this.m_strTokenToRevoke = S;
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
            const S = await this.m_onDeviceDetailsCallback();
            return Et.tS.fromObject(S);
          }
        }
        Ut([m.sH], re.prototype, "m_strChallengeURL", 2),
          Ut([m.sH], re.prototype, "m_bRemoteInteraction", 2),
          Ut([m.sH], re.prototype, "m_eFailureState", 2),
          Ut([m.sH], re.prototype, "m_strExtendedErrorMessage", 2),
          Ut([t.o], re.prototype, "PollForUpdate", 1),
          Ut([t.o], re.prototype, "SetTokenToRevoke", 1);
        function St(F) {
          const S = new FormData();
          S.append("nonce", F), S.append("sessionid", (0, Yt.KC)());
          let O = new URL(document.location.href);
          const z = new URLSearchParams(O.search);
          z.has("need_password") &&
            (z.delete("need_password"), (O.search = z.toString())),
            S.append("redir", O.toString());
          const _ = `${Yt.TS.LOGIN_BASE_URL}jwt/finalizelogin`;
          return p()
            .post(_, S, { withCredentials: !0 })
            .then(
              (ne) => {
                const { data: b } = ne;
                if (
                  !b ||
                  !b.transfer_info ||
                  !b.steamID ||
                  !Array.isArray(b.transfer_info)
                )
                  return (
                    (0, N.ZI)(
                      "Result of finalizelogin does not match expectations!",
                    ),
                    1
                  );
                const {
                  transfer_info: oe,
                  steamID: dr,
                  primary_domain: fr,
                } = b;
                return Promise.all(
                  oe.map(({ url: cr, params: k }) =>
                    Wt(cr, { ...k, steamID: dr }),
                  ),
                ).then(
                  (cr) => ie(cr, fr),
                  () => 2,
                );
              },
              () => (
                (0, N.ZI)("Failed to finalize login. Initial call failed."), 1
              ),
            );
        }
        function ie(F, S) {
          let O = 0;
          return (
            F.forEach((z) => {
              z.bSuccess ||
                (S && z.domain.toLowerCase() === S.toLowerCase()
                  ? (O = 1)
                  : O == 0 && (O = 2));
            }),
            O
          );
        }
        async function Wt(F, S) {
          const O = new URL(F);
          let z = !0;
          try {
            const _ = new FormData();
            Object.keys(S).forEach((b) => _.append(b, S[b]));
            const ne = await p().post(F, _, {
              withCredentials: !0,
              timeout: 1e4,
            });
            ne.status !== 200
              ? ((0, N.ZI)(
                  `Transfer login to ${O.host} failed with status code: ${ne.status}`,
                ),
                (z = !1))
              : ne.data.result !== G.R &&
                ((0, N.ZI)(
                  `Transfer login to ${O.host} failed with result: ${ne.data.result}`,
                ),
                (z = !1));
          } catch (_) {
            (0, N.ZI)(`Transfer login to ${O.host} failed: "${_}"`), (z = !1);
          }
          return { bSuccess: z, domain: O.host };
        }
      },
      64434: (Lt, rr, v) => {
        "use strict";
        v.d(rr, { P8: () => ir, ZI: () => Yt, tG: () => G, tH: () => L });
        var m = v(41735),
          Zt = v.n(m),
          p = v(57589);
        const l = v(80407).A,
          t = new p.wd("Login"),
          G = t.Info,
          Kt = t.Debug,
          L = t.Warning,
          Yt = t.Error;
        function Et(W, ce) {
          return W.endsWith("/") || (W += "/"), `${W}login/${ce}/`;
        }
        function _t() {
          let W = new FormData();
          return W.append("donotcache", new Date().getTime().toString()), W;
        }
        async function N(W) {
          let ce = _t(),
            V = Et(W, "refreshcaptcha"),
            re = "";
          try {
            let St = { "Content-Type": "multipart/form-data" },
              ie = await axios.post(V, ce, { headers: St });
            if (ie.status != 200) return !1;
            re = ie.data.gid;
          } catch {
            return !1;
          }
          return re;
        }
        function ue(W, ce) {
          return Et(W, "rendercaptcha") + `?gid=${ce}`;
        }
        async function lr(W, ce) {
          let V = _t();
          V.append("username", ce);
          let re = Et(W, "getrsakey"),
            St;
          try {
            let ie = { "Content-Type": "multipart/form-data" },
              Wt = await axios.post(re, V, { headers: ie });
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
            St = F;
          } catch (ie) {
            return console.log("GetRSAKey exception: "), console.log(ie), null;
          }
          return St;
        }
        function ir(W, ce) {
          let V = l.getPublicKey(ce.publickey_mod, ce.publickey_exp),
            re = l.encrypt(W, V);
          return re === !1 ? null : re;
        }
        async function Ut(W, ce, V, re) {
          const St = ir(V.strPassword, re);
          if (!St) return null;
          let ie = _t();
          ie.append("password", St),
            ie.append("username", V.strUserName),
            ie.append("twofactorcode", V.strTwoFactorCode || ""),
            ie.append("emailauth", V.strEmailAuthCode || ""),
            ie.append("loginfriendlyname", ""),
            ie.append("captchagid", V.gidCaptcha || ""),
            ie.append("captcha_text", V.strCaptchaText || ""),
            ie.append("emailsteamid", V.emailSteamID || ""),
            ie.append("rsatimestamp", re.timestamp),
            ie.append("remember_login", V.bRememberLogin ? "true" : "false");
          let Wt = {};
          ce &&
            (ie.append("oauth_client_id", ce),
            ie.append("mobile_chat_client", "true"));
          let F = Et(W, "dologin"),
            S;
          try {
            Wt.headers = { "Content-Type": "multipart/form-data" };
            let O = await axios.post(F, ie, Wt);
            if (O.status != 200) return null;
            let z = O.data;
            if (!z) return null;
            z.oauth && (z.oauth = JSON.parse(z.oauth)), (S = z);
          } catch {
            return null;
          }
          return S;
        }
        async function yt(W, ce, V) {
          if (
            ((V = Object.assign({}, V)),
            V.strUserName &&
              (V.strUserName = V.strUserName.replace(/[^\x00-\x7F]/g, "")),
            !V.strPassword ||
              V.strPassword.match(/[^\x00-\x7F]/) ||
              !V.strUserName)
          )
            return null;
          let re = await lr(W, V.strUserName);
          return re
            ? await Ut(W, ce, V, re)
            : (console.error(`Failed to get RSA key from ${W}`), null);
        }
      },
      1317: (Lt, rr, v) => {
        "use strict";
        v.d(rr, {
          P5: () => Ti,
          sW: () => vi,
          YN: () => Ir,
          Fn: () => y,
          Mk: () => rn,
          kt: () => Vi,
        });
        var m = v(7850),
          Zt = v(32093),
          p = v(99412),
          l = v(72604),
          t = v(94276),
          G = v(41735),
          Kt = v.n(G),
          L = v(90626),
          Yt = v(92757);
        const Et =
          v.p +
          "images/applications/community/login_mobile_auth.png?v=valveisgoodatcaching";
        var _t = v(71568),
          N = v(64434),
          ue = v(87883),
          lr = v(25792),
          ir = v(179),
          Ut = v(24660),
          yt = v(19298),
          W = v(36707),
          ce = v(9843),
          V = v.n(ce);
        function re(c) {
          const {
            length: r,
            value: a,
            onChange: h,
            onPaste: B,
            tone: C,
            autoFocus: g,
            disabled: M,
            loading: A,
            backupCode: E,
            allowCharacter: I,
          } = c;
          (0, L.useEffect)(() => {
            g && vt();
          }, []);
          const P = (0, L.useRef)([]),
            ae = () => h(P.current.map((q) => q.value)),
            le = (q) => {
              const U = q.target.value;
              if (U && I && !I(U)) return;
              const Q = q.target.nextElementSibling;
              q.target.value && Q && Q.focus(), ae();
            },
            te = (q) => {
              var U;
              P.current.findIndex((Q) => !!Q.value) === -1
                ? (U = P.current[0]) == null || U.select()
                : q.target.select();
            },
            vt = () => {
              const q = P.current.find((U) => !U.value);
              q ? q.focus() : P.current[P.current.length - 1].focus();
            },
            xt = (q) => {
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
              ae(), q.preventDefault(), B && B();
            },
            Ct = [];
          for (let q = 0; q < r; q++)
            Ct.push(
              (0, m.jsx)(
                Ut.BA,
                {
                  noFocusRing: !0,
                  type: "text",
                  maxLength: 1,
                  ref: (U) => {
                    P.current[q] = U;
                  },
                  onChange: le,
                  onFocus: te,
                  onClick: (U) => U.stopPropagation(),
                  onKeyDown: xt,
                  onPaste: D,
                  value: a[q] ? a[q][0] : "",
                  autoComplete: "none",
                  autoFocus: q === 0 && g,
                  disabled: M || A,
                  className: V().Input,
                },
                q,
              ),
            );
          return (0, m.jsxs)(yt.Z, {
            className: (0, W.A)(
              V().SegmentedCharacterInput,
              C === "danger" && V().Danger,
              M && V().Disabled,
              E && V().BackupCode,
            ),
            onClick: vt,
            children: [
              A &&
                (0, m.jsx)("div", {
                  className: V().Loading,
                  children: (0, m.jsx)(Vi, { size: "small" }),
                }),
              Ct,
            ],
          });
        }
        var St = v(36118),
          ie = v(54212),
          Wt = v(85599),
          F = v(71421),
          S = v(18210),
          O = v(54963),
          z = v(3166),
          _ = v(8059),
          ne = v(14947),
          b = v(94354),
          oe = v(35038),
          dr = v(65946),
          fr = v(95039),
          cr = v(13018),
          k = v(80613),
          x = v.n(k),
          u = v(75245),
          Ai = Object.defineProperty,
          ji = (c, r, a) =>
            r in c
              ? Ai(c, r, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: a,
                })
              : (c[r] = a),
          Z = (c, r, a) => ji(c, typeof r != "symbol" ? r + "" : r, a);
        function Oi(c) {
          return "unknown ETwoFactorUsageType ( " + c + " )";
        }
        function hr(c) {
          return "unknown ETwoFactorStatusFieldFlag ( " + c + " )";
        }
        const ni = class it extends k.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              it.prototype.time || u.Sg(it.M()),
              k.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static M() {
            return (
              it.sm_m ||
                (it.sm_m = {
                  proto: it,
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
            return "CTwoFactor_UsageEvent";
          }
        };
        Z(ni, "sm_m"), Z(ni, "sm_mbf");
        let Fi = ni;
        const si = class nt extends k.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              nt.prototype.sender_time || u.Sg(nt.M()),
              k.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static M() {
            return (
              nt.sm_m ||
                (nt.sm_m = {
                  proto: nt,
                  fields: {
                    sender_time: {
                      n: 1,
                      br: u.qM.readUint64String,
                      bw: u.gp.writeUint64String,
                    },
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
            return "CTwoFactor_Time_Request";
          }
        };
        Z(si, "sm_m"), Z(si, "sm_mbf");
        let _i = si;
        const gr = class st extends k.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              st.prototype.server_time || u.Sg(st.M()),
              k.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static M() {
            return (
              st.sm_m ||
                (st.sm_m = {
                  proto: st,
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
            return "CTwoFactor_Time_Response";
          }
        };
        Z(gr, "sm_m"), Z(gr, "sm_mbf");
        let ai = gr;
        const pr = class at extends k.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              at.prototype.steamid || u.Sg(at.M()),
              k.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static M() {
            return (
              at.sm_m ||
                (at.sm_m = {
                  proto: at,
                  fields: {
                    steamid: {
                      n: 1,
                      br: u.qM.readFixed64String,
                      bw: u.gp.writeFixed64String,
                    },
                    include: { n: 2, br: u.qM.readEnum, bw: u.gp.writeEnum },
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
            return "CTwoFactor_Status_Request";
          }
        };
        Z(pr, "sm_m"), Z(pr, "sm_mbf");
        let pi = pr;
        const br = class ot extends k.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ot.prototype.state || u.Sg(ot.M()),
              k.Message.initialize(this, r, 0, -1, [16], null);
          }
          static M() {
            return (
              ot.sm_m ||
                (ot.sm_m = {
                  proto: ot,
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
                    usages: { n: 16, c: Fi, r: !0, q: !0 },
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
            return "CTwoFactor_Status_Response";
          }
        };
        Z(br, "sm_m"), Z(br, "sm_mbf");
        let Pr = br;
        const wr = class lt extends k.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              lt.prototype.steamid || u.Sg(lt.M()),
              k.Message.initialize(this, r, 0, -1, [7], null);
          }
          static M() {
            return (
              lt.sm_m ||
                (lt.sm_m = {
                  proto: lt,
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
            return "CTwoFactor_AddAuthenticator_Request";
          }
        };
        Z(wr, "sm_m"), Z(wr, "sm_mbf");
        let oi = wr;
        const Br = class ct extends k.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ct.prototype.shared_secret || u.Sg(ct.M()),
              k.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static M() {
            return (
              ct.sm_m ||
                (ct.sm_m = {
                  proto: ct,
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
            return "CTwoFactor_AddAuthenticator_Response";
          }
        };
        Z(Br, "sm_m"), Z(Br, "sm_mbf");
        let li = Br;
        const yr = class ut extends k.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ut.prototype.steamid || u.Sg(ut.M()),
              k.Message.initialize(this, r, 0, -1, [5], null);
          }
          static M() {
            return (
              ut.sm_m ||
                (ut.sm_m = {
                  proto: ut,
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
            return "CTwoFactor_FinalizeAddAuthenticator_Request";
          }
        };
        Z(yr, "sm_m"), Z(yr, "sm_mbf");
        let bi = yr;
        const Sr = class mt extends k.Message {
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
                    server_time: {
                      n: 3,
                      br: u.qM.readUint64String,
                      bw: u.gp.writeUint64String,
                    },
                    status: { n: 4, br: u.qM.readInt32, bw: u.gp.writeInt32 },
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
            return "CTwoFactor_FinalizeAddAuthenticator_Response";
          }
        };
        Z(Sr, "sm_m"), Z(Sr, "sm_mbf");
        let ci = Sr;
        const Mr = class dt extends k.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              dt.prototype.revocation_code || u.Sg(dt.M()),
              k.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static M() {
            return (
              dt.sm_m ||
                (dt.sm_m = {
                  proto: dt,
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
            return "CTwoFactor_RemoveAuthenticator_Request";
          }
        };
        Z(Mr, "sm_m"), Z(Mr, "sm_mbf");
        let wi = Mr;
        const Cr = class ft extends k.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ft.prototype.success || u.Sg(ft.M()),
              k.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static M() {
            return (
              ft.sm_m ||
                (ft.sm_m = {
                  proto: ft,
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
            return "CTwoFactor_RemoveAuthenticator_Response";
          }
        };
        Z(Cr, "sm_m"), Z(Cr, "sm_mbf");
        let ui = Cr;
        class Tt extends k.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), k.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Tt.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new Tt();
          }
          static deserializeBinary(r) {
            let a = new (x().BinaryReader)(r),
              h = new Tt();
            return Tt.deserializeBinaryFromReader(h, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (x().BinaryWriter)();
            return Tt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (x().BinaryWriter)();
            return (
              Tt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request";
          }
        }
        const Vr = class ht extends k.Message {
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
            return "CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response";
          }
        };
        Z(Vr, "sm_m"), Z(Vr, "sm_mbf");
        let Rr = Vr;
        const Gr = class gt extends k.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              gt.prototype.sms_code || u.Sg(gt.M()),
              k.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static M() {
            return (
              gt.sm_m ||
                (gt.sm_m = {
                  proto: gt,
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
            return "CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request";
          }
        };
        Z(Gr, "sm_m"), Z(Gr, "sm_mbf");
        let vr = Gr;
        const Hr = class pt extends k.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              pt.prototype.shared_secret || u.Sg(pt.M()),
              k.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static M() {
            return (
              pt.sm_m ||
                (pt.sm_m = {
                  proto: pt,
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
              pt.sm_m
            );
          }
          static MBF() {
            return pt.sm_mbf || (pt.sm_mbf = u.w0(pt.M())), pt.sm_mbf;
          }
          toObject(r = !1) {
            return pt.toObject(r, this);
          }
          static toObject(r, a) {
            return u.BT(pt.M(), r, a);
          }
          static fromObject(r) {
            return u.Uq(pt.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (x().BinaryReader)(r),
              h = new pt();
            return pt.deserializeBinaryFromReader(h, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return u.zj(pt.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (x().BinaryWriter)();
            return pt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            u.i0(pt.M(), r, a);
          }
          serializeBase64String() {
            var r = new (x().BinaryWriter)();
            return (
              pt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CRemoveAuthenticatorViaChallengeContinue_Replacement_Token";
          }
        };
        Z(Hr, "sm_m"), Z(Hr, "sm_mbf");
        let Er = Hr;
        const Qr = class bt extends k.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              bt.prototype.success || u.Sg(bt.M()),
              k.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static M() {
            return (
              bt.sm_m ||
                (bt.sm_m = {
                  proto: bt,
                  fields: {
                    success: { n: 1, br: u.qM.readBool, bw: u.gp.writeBool },
                    replacement_token: { n: 2, c: Er },
                  },
                }),
              bt.sm_m
            );
          }
          static MBF() {
            return bt.sm_mbf || (bt.sm_mbf = u.w0(bt.M())), bt.sm_mbf;
          }
          toObject(r = !1) {
            return bt.toObject(r, this);
          }
          static toObject(r, a) {
            return u.BT(bt.M(), r, a);
          }
          static fromObject(r) {
            return u.Uq(bt.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (x().BinaryReader)(r),
              h = new bt();
            return bt.deserializeBinaryFromReader(h, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return u.zj(bt.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (x().BinaryWriter)();
            return bt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            u.i0(bt.M(), r, a);
          }
          serializeBase64String() {
            var r = new (x().BinaryWriter)();
            return (
              bt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response";
          }
        };
        Z(Qr, "sm_m"), Z(Qr, "sm_mbf");
        let Zr = Qr;
        const Kr = class wt extends k.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              wt.prototype.steamid || u.Sg(wt.M()),
              k.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static M() {
            return (
              wt.sm_m ||
                (wt.sm_m = {
                  proto: wt,
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
              wt.sm_m
            );
          }
          static MBF() {
            return wt.sm_mbf || (wt.sm_mbf = u.w0(wt.M())), wt.sm_mbf;
          }
          toObject(r = !1) {
            return wt.toObject(r, this);
          }
          static toObject(r, a) {
            return u.BT(wt.M(), r, a);
          }
          static fromObject(r) {
            return u.Uq(wt.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (x().BinaryReader)(r),
              h = new wt();
            return wt.deserializeBinaryFromReader(h, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return u.zj(wt.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (x().BinaryWriter)();
            return wt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            u.i0(wt.M(), r, a);
          }
          serializeBase64String() {
            var r = new (x().BinaryWriter)();
            return (
              wt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_UpdateTokenVersion_Request";
          }
        };
        Z(Kr, "sm_m"), Z(Kr, "sm_mbf");
        let Yr = Kr;
        class Nt extends k.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), k.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Nt.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new Nt();
          }
          static deserializeBinary(r) {
            let a = new (x().BinaryReader)(r),
              h = new Nt();
            return Nt.deserializeBinaryFromReader(h, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (x().BinaryWriter)();
            return Nt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (x().BinaryWriter)();
            return (
              Nt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_UpdateTokenVersion_Response";
          }
        }
        var nr;
        ((c) => {
          function r(E, I, P) {
            return E.SendMsg(
              "TwoFactor.QueryTime#1",
              (0, oe.I8)(_i, I, P),
              ai,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          c.QueryTime = r;
          function a(E, I, P) {
            return E.SendMsg(
              "TwoFactor.QueryStatus#1",
              (0, oe.I8)(pi, I, P),
              Pr,
              { ePrivilege: 1 },
            );
          }
          c.QueryStatus = a;
          function h(E, I, P) {
            return E.SendMsg(
              "TwoFactor.AddAuthenticator#1",
              (0, oe.I8)(oi, I, P),
              li,
              { ePrivilege: 1 },
            );
          }
          c.AddAuthenticator = h;
          function B(E, I, P) {
            return E.SendMsg(
              "TwoFactor.FinalizeAddAuthenticator#1",
              (0, oe.I8)(bi, I, P),
              ci,
              { ePrivilege: 1 },
            );
          }
          c.FinalizeAddAuthenticator = B;
          function C(E, I, P) {
            return E.SendMsg(
              "TwoFactor.UpdateTokenVersion#1",
              (0, oe.I8)(Yr, I, P),
              Nt,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          c.UpdateTokenVersion = C;
          function g(E, I, P) {
            return E.SendMsg(
              "TwoFactor.RemoveAuthenticator#1",
              (0, oe.I8)(wi, I, P),
              ui,
              { ePrivilege: 9 },
            );
          }
          c.RemoveAuthenticator = g;
          function M(E, I, P) {
            return E.SendMsg(
              "TwoFactor.RemoveAuthenticatorViaChallengeStart#1",
              (0, oe.I8)(Tt, I, P),
              Rr,
              { ePrivilege: 9 },
            );
          }
          c.RemoveAuthenticatorViaChallengeStart = M;
          function A(E, I, P) {
            return E.SendMsg(
              "TwoFactor.RemoveAuthenticatorViaChallengeContinue#1",
              (0, oe.I8)(vr, I, P),
              Zr,
              { ePrivilege: 9 },
            );
          }
          c.RemoveAuthenticatorViaChallengeContinue = A;
        })(nr || (nr = {}));
        var mi = Object.defineProperty,
          Dt = Object.getOwnPropertyDescriptor,
          $r = (c, r, a) =>
            r in c
              ? mi(c, r, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: a,
                })
              : (c[r] = a),
          zt = (c, r, a, h) => {
            for (
              var B = h > 1 ? void 0 : h ? Dt(r, a) : r, C = c.length - 1, g;
              C >= 0;
              C--
            )
              (g = c[C]) && (B = (h ? g(r, a, B) : g(B)) || B);
            return h && B && mi(r, a, B), B;
          },
          Rt = (c, r, a) => $r(c, typeof r != "symbol" ? r + "" : r, a);
        const Bi = 2,
          Bt = 0,
          Tr = 1,
          zr = 2,
          Ot = 3,
          sr = 4,
          At = 5,
          ar = 6,
          Ar = 7,
          Wr = 8,
          Xr = 9,
          It = 10,
          qt = 11,
          Jr = 12,
          ur = 13,
          ei = 14,
          jr = 15,
          di = 16;
        class se extends _.gf {
          constructor(r) {
            super(
              r.transport,
              (a) => this.onAuthComplete(a),
              r.onDeviceDetails,
              r.onShowAgreement,
            ),
              Rt(this, "m_eStatus", Bt),
              Rt(this, "m_steamid"),
              Rt(this, "m_strAccountName"),
              Rt(this, "m_strConfirmationAssociatedMessage", ""),
              Rt(this, "m_bUsingCodeOverride", !1),
              Rt(this, "m_strWeakAuthToken", ""),
              Rt(this, "m_weakAuthWebInterface"),
              Rt(this, "m_onGetMachineAuth"),
              Rt(this, "m_replacementAuthenticator"),
              Rt(this, "m_strErrorReference", ""),
              Rt(this, "m_onLoginComplete"),
              Rt(this, "onAuthComplete", (a) => {
                this.m_eStatus = a.bSuccess ? ei : jr;
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
              (0, ne.Gn)(this),
              (this.m_onLoginComplete = r.onComplete),
              (this.m_onGetMachineAuth = r.onGetMachineAuth);
          }
          async Start(r, a, h) {
            if (this.m_eStatus !== Bt && this.m_eStatus !== zr)
              return (
                (0, N.ZI)(
                  "Cannot start an already started auth session. Create a new session instance.",
                ),
                l.Ze
              );
            const B = r.replace(/[^\x00-\x7F]/g, ""),
              C = a.replace(/[^\x00-\x7F]/g, "").slice(0, 64);
            if (!B.length || !C.length) return l.nO;
            if (
              ((this.m_eStatus = Tr),
              (this.m_bUsingCodeOverride = !1),
              r == "anonymous")
            )
              return (
                this.SetFailureState(_.eF.AnonymousLogin, me.EResult(l.FK)),
                l.FK
              );
            try {
              const g = await yi(this.m_transport, B);
              if (!g)
                return (
                  (0, N.ZI)(
                    "Cannot start auth session without a valid RSA key",
                  ),
                  this.SetFailureState(_.eF.Network, me.EResult(l.Sq)),
                  l.Sq
                );
              const M = (0, N.P8)(C, g),
                A = oe.w.Init(t.iP);
              A.SetEMsg(b.Kec),
                A.Body().set_account_name(B),
                A.Body().set_encrypted_password(M),
                A.Body().set_encryption_timestamp(g.timestamp),
                A.Body().set_remember_login(!!h),
                A.Body().set_persistence(h ? fr.nW : fr.fH),
                A.Body().set_website_id(z.TS.WEBSITE_ID);
              try {
                A.Body().set_device_details(await this.GetDeviceDetails());
              } catch (I) {
                (0, N.ZI)("Failed to GetDeviceDetails"), (0, N.ZI)(I);
              }
              if (
                (A.Body().set_language((0, p.sfN)(z.TS.LANGUAGE)),
                this.m_onGetMachineAuth != null)
              ) {
                const I = await this.m_onGetMachineAuth(B);
                I.eresult == l.R && A.Body().set_guard_data(I.data);
              }
              await this.m_transport.MakeReady();
              const E = await t.kX.BeginAuthSessionViaCredentials(
                this.m_transport,
                A,
              );
              return (
                E.DEBUG_LogToConsole(),
                (0, ne.h5)(async () => {
                  const I = E.GetEResult(),
                    P = E.Hdr().transport_error();
                  if (I !== l.R)
                    switch (I) {
                      case l.Um:
                        return (this.m_eStatus = zr), I;
                      case l.Sq:
                      case l.a_:
                        return (
                          this.SetFailureState(_.eF.Network, me.EResult(l.Sq)),
                          I
                        );
                      case l.h_:
                        return (
                          this.SetFailureState(
                            _.eF.RateLimitExceeded,
                            me.EResult(I),
                          ),
                          I
                        );
                      case l.oH:
                        if (this.m_onShowAgreement)
                          this.m_onShowAgreement(
                            E.Body().agreement_session_url(),
                          );
                        else {
                          const U = E.Body().agreement_session_url(),
                            Q = document.location.href;
                          window.location.href = `${U}&redir=${encodeURIComponent(Q)}`;
                        }
                        return (
                          this.m_onCompleteCallback({ bSuccess: !1 }),
                          (this.m_eStatus = Bt),
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
                            me.EResult(I),
                            E.Body().extended_error_message(),
                          ),
                          this.m_onCompleteCallback({ bSuccess: !1 }),
                          I
                        );
                    }
                  this.m_strAccountName = r;
                  const {
                    client_id: ae,
                    request_id: le,
                    interval: te,
                    allowed_confirmations: vt,
                    steamid: xt,
                    weak_token: D,
                  } = E.Body().toObject();
                  if (
                    ((this.m_msPollInterval = te * 1e3),
                    (this.m_strClientID = ae),
                    (this.m_rgRequestID = le),
                    (this.m_steamid = xt),
                    (this.m_strWeakAuthToken = D),
                    vt.find(({ confirmation_type: U }) => U === t.TY.ig))
                  ) {
                    const U = new FormData();
                    U.append("clientid", ae),
                      U.append("steamid", this.m_steamid);
                    const Q = `${z.TS.LOGIN_BASE_URL}jwt/checkdevice/${this.m_steamid}`;
                    try {
                      if (
                        (
                          await Kt().post(Q, U, {
                            headers: { "Content-Type": "multipart/form-data" },
                            withCredentials: !0,
                          })
                        ).data.result == l.R
                      )
                        return (
                          (this.m_eStatus = sr), this.StartPolling(!0), l.R
                        );
                    } catch (Y) {
                      if (
                        ((0, N.tG)(
                          `checkdevice ajax to ${Q} failed: ${Y.message}`,
                        ),
                        Y instanceof G.AxiosError)
                      ) {
                        const Ht = Y;
                        return Ht.response
                          ? (this.SetFailureState(
                              _.eF.Network,
                              me.AjaxFailureWithCode(Ht.response.status),
                            ),
                            l.Sq)
                          : (this.SetFailureState(
                              _.eF.Network,
                              me.AjaxFailureNoCode(),
                            ),
                            l.Sq);
                      }
                      return (
                        this.SetFailureState(_.eF.Network, me.EResult(l.eH)),
                        l.eH
                      );
                    }
                  }
                  const Ct = Si(vt.map(({ confirmation_type: U }) => U)),
                    q = vt.find(({ confirmation_type: U }) => U === Ct);
                  switch (
                    (q &&
                      q.associated_message &&
                      (this.m_strConfirmationAssociatedMessage =
                        q.associated_message),
                    Ct)
                  ) {
                    case t.TY.WM:
                      return (this.m_eStatus = ur), this.StartPolling(), I;
                    case t.TY.Xs:
                      this.m_eStatus = Ot;
                      break;
                    case t.TY.$Y:
                      (this.m_eStatus = sr), this.StartPolling(!1);
                      break;
                    case t.TY.bH:
                      (this.m_eStatus = At), this.StartPolling(!1);
                      break;
                    case t.TY.x0:
                      (this.m_eStatus = ar), this.StartPolling(!1);
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
                this.SetFailureState(_.eF.Generic, me.FailedToStart()),
                this.m_onCompleteCallback({ bSuccess: !1 }),
                l.zi
              );
            }
          }
          Stop() {
            this.StopPolling(), (this.m_eStatus = di);
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
                case It:
                  this.m_eStatus = Ot;
                  break;
                case qt:
                  this.m_eStatus = At;
                  break;
                case At:
                case Ot:
                  break;
                default:
                  throw new Error("Attempted to clear code in invalid state");
              }
              return Promise.resolve(l.R);
            }
            try {
              await this.m_transport.MakeReady();
              const h = this.m_eStatus === Ot || this.m_eStatus === It,
                B = oe.w.Init(t.Qc);
              B.SetEMsg(b.Kec),
                B.Body().set_client_id(this.m_strClientID),
                B.Body().set_steamid(this.m_steamid),
                B.Body().set_code(r),
                B.Body().set_code_type(h ? t.TY.Xs : t.TY.bH);
              const C = await t.kX.UpdateAuthSessionWithSteamGuardCode(
                  this.m_transport,
                  B,
                ),
                g = C.GetEResult();
              if (g !== l.R) {
                if (!a)
                  return (
                    (0, N.ZI)(
                      `Failed to automatically update session with local SG info. Result ${g}. Transport ${C.Hdr().transport_error()}`,
                    ),
                    g
                  );
                switch (g) {
                  case l.QR:
                  case l.b7:
                    return (this.m_eStatus = h ? It : qt), g;
                  case l.ob:
                    return (
                      this.SetFailureState(_.eF.Expired, me.EResult(g)),
                      this.m_onCompleteCallback({ bSuccess: !1 }),
                      g
                    );
                  case l.h_:
                    return (
                      this.SetFailureState(
                        _.eF.RateLimitExceeded,
                        me.EResult(g),
                      ),
                      this.m_onCompleteCallback({ bSuccess: !1 }),
                      g
                    );
                  case l.oH:
                    if (this.m_onShowAgreement)
                      this.m_onShowAgreement(C.Body().agreement_session_url());
                    else {
                      const M = C.Body().agreement_session_url(),
                        A = document.location.href;
                      window.location.href = `${M}&redir=${encodeURIComponent(A)}`;
                    }
                    return (
                      this.m_onCompleteCallback({ bSuccess: !1 }),
                      (this.m_eStatus = Bt),
                      g
                    );
                  default:
                    return (
                      (0, N.ZI)(
                        `Failed to update auth session with SG code. Result: ${g}`,
                      ),
                      this.SetFailureState(_.eF.Generic, me.EResult(g)),
                      this.m_onCompleteCallback({ bSuccess: !1 }),
                      g
                    );
                }
              }
              return (this.m_eStatus = ur), this.StartPolling(), g;
            } catch (h) {
              return (
                (0, N.ZI)(`Failed to update auth session with SG code. ${h}`),
                this.SetFailureState(_.eF.Generic, me.FailedToAddCode()),
                this.m_onCompleteCallback({ bSuccess: !1 }),
                l.zi
              );
            }
          }
          UseCodeOverride() {
            switch (this.m_eStatus) {
              case ar:
                (this.m_bUsingCodeOverride = !0), (this.m_eStatus = At);
                return;
              case sr:
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
            this.m_eStatus = Ar;
          }
          async StartMoveAuthenticator() {
            this.m_weakAuthWebInterface = new cr.D(
              z.TS.WEBAPI_BASE_URL,
              this.m_strWeakAuthToken,
            );
            try {
              const r = oe.w.Init(Tt),
                a = await nr.RemoveAuthenticatorViaChallengeStart(
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
                    me.EResult(a.GetEResult()),
                  ))
                : (this.m_eStatus = Wr);
            } catch (r) {
              (0, N.ZI)(
                "An unexpected error occured while moving an authenticator",
                r,
              ),
                this.SetFailureState(_.eF.MoveAuthenticator, me.EResult(l.zi));
            }
          }
          async ResendMoveCode() {
            const r = oe.w.Init(Tt),
              a = await nr.RemoveAuthenticatorViaChallengeStart(
                this.m_weakAuthWebInterface.GetServiceTransport(),
                r,
              );
            l.R != a.GetEResult() &&
              (a.DEBUG_LogToConsole(),
              (0, N.ZI)(
                "An unexpected error occured while adding an authenticator",
                a.GetEResult(),
              )),
              (this.m_eStatus = Wr);
          }
          async FinishMoveAuthenticator(r) {
            const a = oe.w.Init(vr);
            a.Body().set_sms_code(r),
              a.Body().set_generate_new_token(!0),
              a.Body().set_version(Bi);
            const h = await nr.RemoveAuthenticatorViaChallengeContinue(
              this.m_weakAuthWebInterface.GetServiceTransport(),
              a,
            );
            l.c3 == h.GetEResult()
              ? (this.m_eStatus = Jr)
              : h.Body().success()
                ? (h.DEBUG_LogToConsole(),
                  (this.m_replacementAuthenticator = (0, _.FU)(
                    h.Body().replacement_token().toObject(),
                  )),
                  (this.m_eStatus = Xr),
                  (this.m_bUsingCodeOverride = !1))
                : (h.DEBUG_LogToConsole(),
                  (0, N.ZI)(
                    "Error when calling RemoveAuthenticatorViaChallengeContinue",
                    h.GetEResult(),
                  ),
                  this.SetFailureState(
                    _.eF.MoveAuthenticator,
                    me.EResult(h.GetEResult()),
                  ));
          }
          FinishMoveRecovery() {
            this.m_eStatus = At;
          }
          BCanGoBack() {
            switch (this.m_eStatus) {
              case At:
              case qt:
              case Ot:
              case It:
              case ar:
              case sr:
              case Ar:
              case Wr:
              case Jr:
                return !0;
              default:
                return !1;
            }
          }
          GoBack() {
            switch (this.m_eStatus) {
              case ar:
              case sr:
                this.m_eStatus = Bt;
                break;
              case At:
              case qt:
                this.m_eStatus = this.m_bUsingCodeOverride ? ar : Bt;
                break;
              case Ar:
              case Wr:
              case Jr:
                this.m_eStatus = (this.m_bUsingCodeOverride, At);
                break;
              case Ot:
              case It:
                this.m_eStatus = this.m_bUsingCodeOverride ? sr : Bt;
                break;
              default:
                (0, N.ZI)(
                  `Don't know how to GoBack from login session status ${this.m_eStatus}`,
                );
                return;
            }
          }
          SetFailureState(r, a, h = "") {
            (this.m_eStatus = jr),
              (this.m_eFailureState = r),
              (this.m_strErrorReference = a),
              (this.m_strExtendedErrorMessage = h);
          }
          SetOnLoginComplete(r) {
            this.m_onLoginComplete = r;
          }
        }
        zt([ne.sH], se.prototype, "m_eStatus", 2),
          zt([ne.sH], se.prototype, "m_strErrorReference", 2),
          zt([O.oI], se.prototype, "Start", 1),
          zt([O.oI], se.prototype, "SendSteamGuardCode", 1),
          zt([O.oI], se.prototype, "UseCodeOverride", 1),
          zt([O.oI], se.prototype, "CantAccessCode", 1),
          zt([O.oI], se.prototype, "StartMoveAuthenticator", 1),
          zt([O.oI], se.prototype, "ResendMoveCode", 1),
          zt([O.oI], se.prototype, "FinishMoveAuthenticator", 1),
          zt([O.oI], se.prototype, "FinishMoveRecovery", 1),
          zt([O.oI], se.prototype, "GoBack", 1),
          zt([ne.XI], se.prototype, "SetFailureState", 1),
          zt([O.oI], se.prototype, "SetOnLoginComplete", 1);
        async function yi(c, r) {
          const a = oe.w.Init(t.qu);
          a.Body().set_account_name(r), a.SetEMsg(b.Kec);
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
              publickey_exp: B,
              publickey_mod: C,
              timestamp: g,
            } = h.Body().toObject();
            return !B || !C || !g
              ? ((0, N.ZI)(
                  `Missing expected field in RSA Key: ${JSON.stringify({ publickey_exp: B, publickey_mod: C, timestamp: g })}`,
                ),
                null)
              : { publickey_exp: B, publickey_mod: C, timestamp: g };
          } catch (h) {
            return (
              (0, N.ZI)(`Failed to get RSA key: ${JSON.stringify(h)}`), null
            );
          }
        }
        const Or = [
          t.TY.x0,
          t.TY.bH,
          t.TY.Xs,
          t.TY.WM,
          t.TY.oP,
          t.TY.$Y,
        ].reduce((c, r, a) => ((c[r] = a), c), {});
        function Si(c) {
          let r = c[0] || t.TY.oP;
          return c.length > 1 && (r = c.sort((a, h) => Or[a] - Or[h])[0]), r;
        }
        function Pt(c) {
          const [r, a] = (0, L.useState)(new se(c));
          return (
            (0, L.useEffect)(() => {
              r == null || r.SetOnLoginComplete(c.onComplete);
            }, [r, c.onComplete]),
            (0, dr.q3)(() => ({
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
              reset: () => a(new se(c)),
              goBack: r.GoBack,
              setTokenToRevoke: r.SetTokenToRevoke,
            }))
          );
        }
        function Fr(c) {
          return c ? 7 : 5;
        }
        function ti(c, r) {
          return /[23456789BCDFGHJKMNPQRTVWXY]*/g.test(c) && c.length <= Fr(r);
        }
        function qr(c, r) {
          return ti(c, r) && c.length === Fr(r);
        }
        const me = {
          EResult: (c) => `e${c}`,
          FailedToStart: () => "c-fts",
          FailedToAddCode: () => "c-ftac",
          AjaxFailureNoCode: () => "af",
          AjaxFailureWithCode: (c) => `af-${c}`,
        };
        var de = Object.defineProperty,
          Mi = Object.getOwnPropertyDescriptor,
          ri = (c, r, a) =>
            r in c
              ? de(c, r, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: a,
                })
              : (c[r] = a),
          Ci = (c, r, a, h) => {
            for (
              var B = h > 1 ? void 0 : h ? Mi(r, a) : r, C = c.length - 1, g;
              C >= 0;
              C--
            )
              (g = c[C]) && (B = (h ? g(r, a, B) : g(B)) || B);
            return h && B && de(r, a, B), B;
          },
          _r = (c, r, a) => ri(c, typeof r != "symbol" ? r + "" : r, a);
        const Lr = 0,
          Ur = 1,
          fi = 2,
          Nr = 3,
          hi = 4,
          i = 5;
        class s extends _.gf {
          constructor(r) {
            super(
              r.transport,
              (a) => {
                (this.m_eStatus = a.bSuccess ? Nr : hi), r.onComplete(a);
              },
              r.onDeviceDetails,
            ),
              _r(this, "m_eStatus", Lr),
              (0, ne.Gn)(this);
          }
          async Start() {
            if (this.m_eStatus !== Lr)
              return (
                console.error(
                  "Cannot start an already started auth session. Create a new session instance.",
                ),
                l.zi
              );
            this.m_eStatus = Ur;
            try {
              await this.m_transport.MakeReady();
              const r = oe.w.Init(t.R9);
              r.SetEMsg(b.Kec);
              try {
                r.Body().set_device_details(await this.GetDeviceDetails());
              } catch (E) {
                console.error("Failed to GetDeviceDetails"), console.log(E);
              }
              r.Body().set_website_id(z.TS.WEBSITE_ID);
              const a = await t.kX.BeginAuthSessionViaQR(this.m_transport, r),
                h = a.GetEResult(),
                B = a.Hdr().transport_error();
              if (h !== l.R)
                return (
                  console.error(
                    `Failed to start auth session. Result: ${h} Transport: ${B}`,
                  ),
                  (this.m_eFailureState = _.eF.Generic),
                  this.m_onCompleteCallback({ bSuccess: !1 }),
                  h
                );
              const {
                client_id: C,
                challenge_url: g,
                interval: M,
                request_id: A,
              } = a.Body().toObject();
              return (
                (this.m_strClientID = C),
                (this.m_strChallengeURL = g),
                (this.m_msPollInterval = M * 1e3),
                (this.m_rgRequestID = A),
                (this.m_eStatus = fi),
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
        Ci([ne.sH], s.prototype, "m_eStatus", 2);
        function o(c) {
          const [r, a] = (0, L.useState)(new s(c));
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
            (0, dr.q3)(() => ({
              strChallengeURL: r.GetChallengeURL(),
              strClientID: r.GetClientID(),
              eFailureState: r.GetFailureState(),
              eStatus: r.GetStatus(),
              bHadRemoteInteraction: r.BHadRemoteInteraction(),
              reset: () => a(new s(c)),
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
          H = v.n(K),
          Mt = ((c) => (
            (c[(c.L = 1)] = "L"),
            (c[(c.M = 0)] = "M"),
            (c[(c.Q = 3)] = "Q"),
            (c[(c.H = 2)] = "H"),
            c
          ))(Mt || {});
        function jt(c, r, a) {
          const h = c.length,
            B = c[0].length,
            C = (h + 2) * B,
            g = new Uint8Array(40 + C);
          let M = 0;
          (g[M++] = 71),
            (g[M++] = 73),
            (g[M++] = 70),
            (g[M++] = 56),
            (g[M++] = 57),
            (g[M++] = 97),
            (g[M++] = h),
            (g[M++] = 0),
            (g[M++] = B),
            (g[M++] = 0),
            (0, T.wT)(
              r != "transparent" || a != "transparent",
              "Trying to use transparent for both colors in QR",
            ),
            (g[M++] = 161),
            (g[M++] = 0),
            (g[M++] = 0),
            r == "transparent"
              ? ((g[M++] = 0), (g[M++] = 0), (g[M++] = 0))
              : ((g[M++] = r[0]), (g[M++] = r[1]), (g[M++] = r[2])),
            a == "transparent"
              ? ((g[M++] = 0), (g[M++] = 0), (g[M++] = 0))
              : ((g[M++] = a[0]), (g[M++] = a[1]), (g[M++] = a[2])),
            (g[M++] = 255),
            (g[M++] = 255),
            (g[M++] = 255),
            (g[M++] = 255),
            (g[M++] = 255),
            (g[M++] = 255),
            (r == "transparent" || a == "transparent") &&
              ((g[M++] = 33),
              (g[M++] = 249),
              (g[M++] = 4),
              (g[M++] = 1),
              (g[M++] = 0),
              (g[M++] = 0),
              (g[M++] = r == "transparent" ? 0 : 1),
              (g[M++] = 0)),
            (g[M++] = 44),
            (g[M++] = 0),
            (g[M++] = 0),
            (g[M++] = 0),
            (g[M++] = 0),
            (g[M++] = h),
            (g[M++] = 0),
            (g[M++] = B),
            (g[M++] = 0),
            (g[M++] = 0);
          const A = 7;
          g[M++] = A;
          for (let E = 0; E < c.length; E++) {
            (g[M++] = h + 1), (g[M++] = 2 ** A);
            for (let I = 0; I < c.length; I++) g[M++] = c[E][I] ? 0 : 1;
          }
          return (
            (g[M++] = 1), (g[M++] = 2 ** A + 1), (g[M++] = 0), (g[M++] = 59), g
          );
        }
        function kt(c) {
          let {
            quality: r = 0,
            children: a,
            className: h,
            activeBitColor: B = [33, 35, 40],
            inactiveBitColor: C = [255, 255, 255],
            borderWidth: g = 3,
            typeNumber: M = 6,
          } = c;
          const A = Dr(a, { typeNumber: M, errorCorrectLevel: r });
          if (!A) return null;
          let E = [];
          for (let te = 0; te < g; te++)
            E.push(Array(A.length + g * 2).fill(!1));
          for (let te = 0; te < A.length; te++)
            E.push([].concat(Array(g).fill(!1), A[te], Array(g).fill(!1)));
          for (let te = 0; te < g; te++)
            E.push(Array(A.length + g * 2).fill(!1));
          const I = jt(E, B, C),
            P = new Blob([I], { type: "image/gif" }),
            ae = URL.createObjectURL(P),
            le = `rgb(${C[0]}, ${C[1]}, ${C[2]})`;
          return (0, m.jsx)("div", {
            className: (0, W.A)(H().QRBits, h),
            style: { "--qr-bright-color": le },
            children: (0, m.jsx)("img", {
              className: H().QRImg,
              src: ae,
              alt: "",
            }),
          });
        }
        function Dr(c, r = {}) {
          const { typeNumber: a, errorCorrectLevel: h } = r,
            [B, C] = (0, L.useState)();
          return (
            (0, L.useEffect)(() => {
              C(R()(c, { typeNumber: a, errorCorrectLevel: h }).modules);
            }, [c, a, h]),
            B
          );
        }
        var Ft = v(5522),
          J = v.n(Ft),
          mr = v(19316);
        function Xt(c) {
          const {
              transport: r,
              onComplete: a,
              onStatusChange: h,
              platform: B,
              styling: C = "default",
              activeBitValue: g = 255,
            } = c,
            M = z.TS.IN_STEAMUI ? vi : Ti,
            {
              eStatus: A,
              strChallengeURL: E,
              strClientID: I,
              bHadRemoteInteraction: P,
              reset: ae,
              setTokenToRevoke: le,
            } = o({ transport: r, onComplete: a, onDeviceDetails: M });
          (0, L.useEffect)(() => h && h(A), [h, A]);
          const te = A === fi ? E : z.TS.STORE_BASE_URL,
            vt = A === Lr || A === Ur || P,
            xt = A === hi,
            D = A === Nr,
            Ct = D
              ? (0, m.jsx)(Ii, {})
              : xt
                ? (0, m.jsx)(Ri, { reset: ae })
                : vt
                  ? (0, m.jsx)(qi, { size: "small" })
                  : null,
            q = vt || xt || D;
          (0, L.useEffect)(() => {
            var Y;
            (Y = c.refreshInfo) != null &&
              Y.login_token_id &&
              le(c.refreshInfo.login_token_id);
          }, [c.refreshInfo, le]);
          const U = z.TS.EUNIVERSE !== p.wLO,
            Q = `rgb(${g}, ${g}, ${g})`;
          return (0, m.jsx)("div", {
            className: J().Column,
            children: (0, m.jsxs)("div", {
              style: { position: "relative" },
              children: [
                (0, m.jsx)(kt, {
                  borderWidth: 0,
                  activeBitColor: [21, 23, 28],
                  inactiveBitColor: U ? [g, 0, g] : [g, g, g],
                  quality: xr(te),
                  className: (0, W.A)(
                    J().LoginQR,
                    C == "deck" && J().QRLoginDeck,
                    C == "vr" && J().QRLoginVR,
                    q && J().Blur,
                    U && J().NonPublic,
                  ),
                  children: te,
                }),
                q &&
                  (0, m.jsx)("div", {
                    className: J().Overlay,
                    children: (0, m.jsx)("div", {
                      className: J().Box,
                      style: { "--qr-bright-color": Q },
                      children: Ct,
                    }),
                  }),
              ],
            }),
          });
        }
        function xr(c) {
          return c.length <= 90 ? Mt.Q : void 0;
        }
        function qi(c) {
          const { size: r } = c;
          return (0, m.jsx)("div", {
            className: (0, W.A)(
              J().Loading,
              r == "small" && J().Small,
              (r == "medium" || !r) && J().Medium,
              r == "large" && J().Large,
            ),
          });
        }
        function Ri(c) {
          return (0, m.jsx)(mr.$n, {
            onClick: c.reset,
            className: J().QRFailure,
            children: (0, m.jsx)(xi, {}),
          });
        }
        function xi(c) {
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
        function Ii() {
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
        var j = v(72609);
        const e = (0, L.createContext)(!1),
          n = () => (0, L.useContext)(e);
        function y() {
          return (0, m.jsx)("div", {
            className: d().Login,
            children: (0, m.jsx)(zi, {
              reset: () => window.location.reload(),
              failure: _.eF.Generic,
            }),
          });
        }
        function Ir(c) {
          const r = xn(c.redirectUrl),
            a = (h) => {
              const { strRefreshToken: B } = h;
              (0, _.yp)(B).then(
                (C) => c.onComplete(C),
                () => c.onComplete(_.wI.k_PrimaryDomainFail),
              );
            };
          return r
            ? null
            : (0, m.jsx)(kr, {
                ...c,
                creationRedirectUrl: c.redirectUrl,
                onSuccess: a,
                embedded: c.theme === "modal",
              });
        }
        function kr(c) {
          const { embedded: r, children: a, ...h } = c;
          return (0, m.jsx)(lr.tH, {
            children: (0, m.jsx)(e.Provider, {
              value: r != null ? r : !1,
              children: (0, m.jsxs)("div", {
                className: d().Login,
                children: [(0, m.jsx)(Di, { ...h }), a],
              }),
            }),
          });
        }
        function Jt(c) {
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
        function Vt(c) {
          if ((0, ue.q)()) return null;
          const { variant: r } = c;
          return typeof r == "function"
            ? (0, m.jsx)(er, {
                onClick: r,
                children: (0, S.we)("#Login_Help_SignIn"),
              })
            : (0, m.jsx)(er, {
                href: `${z.TS.HELP_BASE_URL}wizard/HelpWithLogin?redir=${encodeURIComponent(document.location.href)}`,
                children: (0, S.we)("#Login_Help_SignIn"),
              });
        }
        function Gt(c) {
          const { variant: r, redirectUrl: a } = c;
          if (typeof r == "function")
            return (0, m.jsx)(er, {
              inline: !0,
              onClick: r,
              children: (0, S.we)("#Login_CreateAccount"),
            });
          {
            const h = a ? `?redir=${encodeURIComponent(a)}` : "";
            switch (r != null ? r : "normal") {
              default:
              case "normal":
                return (0, m.jsx)(er, {
                  inline: !0,
                  href: `${z.TS.STORE_BASE_URL}join/${h}`,
                  children: (0, S.we)("#Login_CreateAccount"),
                });
              case "partner":
                return (0, m.jsx)(er, {
                  inline: !0,
                  href: `${z.TS.PARTNER_BASE_URL}${h}`,
                  children: (0, S.we)("#Login_CreateSteamworksAccount"),
                });
              case "none":
                return null;
            }
          }
        }
        function Li(c) {
          const { launcherType: r, variant: a, redirectUrl: h } = c;
          if (r === p.A2g || a == "none") return null;
          const B = r !== void 0;
          let C;
          switch (a != null ? a : "normal") {
            default:
            case "normal":
              C = "#Login_NoSteamAccount";
              break;
            case "partner":
              C = "#Login_NoSteamworksAccount";
              break;
          }
          return (0, m.jsxs)("div", {
            className: (0, W.A)(d().AccountCreation, B && d().InClient),
            children: [
              (0, m.jsx)("span", {
                className: d().AccountCreationPrompt,
                children: (0, S.we)(C),
              }),
              (0, m.jsx)(Gt, { variant: a, redirectUrl: h }),
            ],
          });
        }
        async function vi() {
          var c, r, a, h, B, C;
          const [g, M, A, E] = await Promise.all([
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
            (C =
              (B =
                (h = SteamClient == null ? void 0 : SteamClient.Auth) == null
                  ? void 0
                  : h.GetMachineID) == null
                ? void 0
                : B.call(h)) != null
              ? C
              : void 0,
          ]);
          return {
            os_type: g,
            device_friendly_name: A,
            machine_id: E,
            platform_type: t.SS.w0,
            gaming_device_type: M.eGamingDeviceType,
          };
        }
        async function Ti() {
          return {
            device_friendly_name: window.navigator.userAgent,
            platform_type: t.SS.tS,
          };
        }
        function Ui(c) {
          var r, a, h;
          const {
              onSuccess: B,
              secureComputer: C = !0,
              isProbablySharedPC: g = !1,
            } = c,
            M = (0, L.useCallback)(
              (Y) => {
                if (Y.bSuccess) {
                  const {
                    strRefreshToken: Ht,
                    strAccessToken: tr,
                    strAccountName: Qt,
                    strNewGuardData: gi,
                  } = Y;
                  B({
                    strRefreshToken: Ht,
                    strAccessToken: tr,
                    strAccountName: Qt,
                    strNewGuardData: gi,
                  });
                }
              },
              [B],
            ),
            A = Pt({
              transport: c.transport,
              onComplete: M,
              onDeviceDetails: c.onDeviceDetails,
              onGetMachineAuth: c.onGetMachineAuth,
              onShowAgreement: c.onShowAgreement,
            }),
            [E, I] = (0, L.useState)(Lr),
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
            [te, vt] = (0, L.useState)(""),
            [xt, D] = (0, L.useState)(
              C &&
                !g &&
                (localStorage == null ? void 0 : localStorage.getItem(P)) !=
                  "0",
            ),
            Ct = !(A.eStatus === Bt || A.eStatus === Tr || A.eStatus === zr),
            q = () =>
              !ae || !te ? Promise.resolve(l.nO) : A.start(ae, te, xt),
            U = () => {
              (0, N.tG)(`Logging in offline with username ${ae}`),
                SteamClient.User.SetLoginCredentials(ae, te, xt),
                SteamClient.User.StartOffline(!0);
            };
          return (
            (0, L.useEffect)(() => {
              var Y;
              (Y = c.refreshInfo) != null &&
                Y.login_token_id &&
                A.setTokenToRevoke(c.refreshInfo.login_token_id);
            }, [c.refreshInfo, A]),
            {
              password: A,
              onComplete: M,
              eQRStatus: E,
              onQRStatusChange: I,
              strAccountName: ae,
              onAccountNameChange: le,
              strPassword: te,
              onPasswordChange: vt,
              bRememberMe: xt,
              onRememberMeChange: (Y) => {
                D(Y),
                  localStorage == null ||
                    localStorage.setItem(P, Y ? "1" : "0");
              },
              onPasswordSubmit: q,
              bInPasswordFlow: Ct,
              onTryOffline: U,
            }
          );
        }
        function Ni() {
          const c =
            (window == null ? void 0 : window.location) &&
            (0, ir.f3)(window.location, "need_password");
          return c !== void 0 && c !== "false" && c !== "0";
        }
        function Di(c) {
          const {
              transport: r,
              onSuccess: a,
              platform: h,
              autoFocus: B,
              refreshInfo: C,
              renderSuccess: g = () => (0, m.jsx)(_n, {}),
              lastResult: M,
              joinLinkVariant: A,
              defaultAccountName: E,
              secureComputer: I = !0,
              isProbablySharedPC: P = !1,
              onShowAgreement: ae,
              creationRedirectUrl: le,
            } = c,
            te = z.TS.IN_STEAMUI ? vi : Ti,
            vt = z.TS.IN_STEAMUI
              ? (Y) => SteamClient.Auth.GetSteamGuardData(Y)
              : null,
            xt = Ni(),
            D = Ui({
              transport: r,
              platform: h,
              onSuccess: a,
              refreshInfo: C,
              onDeviceDetails: te,
              onGetMachineAuth: vt,
              defaultAccountName: E,
              secureComputer: I,
              isProbablySharedPC: P,
              onShowAgreement: ae,
            }),
            Ct = n(),
            q = (0, L.useId)();
          if (M != null && M != l.R)
            return (0, m.jsx)("div", {
              className: d().Login,
              children: (0, m.jsx)(zi, {
                reset: () => window.location.reload(),
                failure: _.eF.Generic,
                errorReference: M.toString(),
                extendedErrorMessage: D.password.strExtendedErrorMessage,
              }),
            });
          const U = !(0, z.Y2)();
          if (!D.bInPasswordFlow) {
            const Y = (0, m.jsxs)("div", {
              className: (0, W.A)(d().SideBySide, Ct && d().Embedded),
              children: [
                (0, m.jsx)(ee, {
                  strAccountName: D.strAccountName,
                  onAccountNameChange: D.onAccountNameChange,
                  strPassword: D.strPassword,
                  onPasswordChange: D.onPasswordChange,
                  bRememberMe: D.bRememberMe,
                  onRememberMeChange: D.onRememberMeChange,
                  onSubmit: D.onPasswordSubmit,
                  status: D.password.eStatus,
                  autoFocus: B,
                  secureComputer: I,
                  refreshInfo: c.refreshInfo,
                }),
                U &&
                  (0, m.jsx)(tn, {
                    transport: r,
                    onQRStatusChange: D.onQRStatusChange,
                    onComplete: D.onComplete,
                    platform: h,
                    refreshInfo: C,
                  }),
              ],
            });
            if (Ct) {
              const tr = z.TS.IN_STEAMUI,
                Qt = tr ? z.TS.LAUNCHER_TYPE : void 0;
              return (0, m.jsxs)(or, {
                className: (0, W.A)(d().EmbeddedRoot, tr && d().InClient),
                children: [
                  !tr && !1,
                  !c.refreshInfo &&
                    (0, m.jsx)(Gi, {
                      realm: z.TS.EREALM,
                      launcherType: Qt,
                      className: d().HeaderLogo,
                      onBack: c.onBack,
                    }),
                  (0, m.jsx)($, { refreshInfo: C }),
                  Y,
                  (0, m.jsxs)("div", {
                    className: (0, W.A)(
                      d().EmbeddedRootFooter,
                      tr && d().InClient,
                    ),
                    children: [
                      (0, m.jsx)(Vt, { variant: c.helpLinkVariant }),
                      (0, m.jsx)(Li, {
                        launcherType: Qt,
                        variant: A,
                        redirectUrl: le,
                      }),
                    ],
                  }),
                ],
              });
            }
            const Ht = (0, m.jsxs)("div", {
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
                    ? (0, S.we)("#Login_RefreshSignIn")
                    : (0, S.we)("#Login_SignInTitle"),
                }),
                (0, m.jsx)($, { refreshInfo: c.refreshInfo }),
              ],
            });
            return (0, m.jsxs)(ii, {
              title: Ht,
              titleId: q,
              children: [xt && (0, m.jsx)(X, {}), Y],
            });
          }
          const Q = D.password.eStatus;
          switch (Q) {
            case ur:
              return c.renderLoading
                ? (0, m.jsx)(m.Fragment, { children: c.renderLoading() })
                : (0, m.jsx)(gn, {});
            case At:
            case qt:
            case Ot:
            case It:
              const Y = Q === At || Q === qt;
              return (0, m.jsx)(Bn, {
                type: Y ? "mobile" : "email",
                onSubmitCode: D.password.addCode,
                status: Q,
                associatedLabel: D.password.strConfirmationAssociatedMessage,
                accountName: D.password.strAccountName,
                onBack: D.password.goBack,
                onCodeHelp: c.onCodeHelp,
              });
            case ar:
            case sr:
              const Ht = Q === ar;
              return (0, m.jsx)(vn, {
                type: Ht ? "mobile" : "email",
                accountName: D.password.strAccountName,
                onUseCodeOverride: D.password.useCodeOverride,
                onCodeHelp: c.onCodeHelp,
              });
            case di:
              return (0, m.jsx)(wn, { reset: D.password.reset });
            case jr:
              return (0, m.jsx)(zi, {
                reset: D.password.reset,
                failure: D.password.eFailureState,
                onRequestOffline: D.onTryOffline,
                errorReference: D.password.strErrorReference,
                extendedErrorMessage: D.password.strExtendedErrorMessage,
              });
            case ei:
              return (0, m.jsx)(ii, { compact: !0, children: g() });
            default:
              return (
                (0, N.ZI)(`Unknown Phase: ${Q}`),
                (0, m.jsx)(zi, {
                  reset: D.password.reset,
                  failure: _.eF.Generic,
                  onRequestOffline: D.onTryOffline,
                  errorReference: D.password.strErrorReference,
                  extendedErrorMessage: D.password.strExtendedErrorMessage,
                })
              );
          }
        }
        function $(c) {
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
                children: (0, S.we)("#Login_RefreshSignIn"),
              }),
              (0, m.jsx)("div", {
                className: d().RefreshReason,
                children: (0, S.we)(h),
              }),
            ],
          });
        }
        function X() {
          return (0, m.jsx)("div", {
            className: d().ConfirmCredntialsNag,
            children: (0, S.we)("#Login_ConfirmCredentials"),
          });
        }
        function ee(c) {
          const {
              onSubmit: r,
              status: a,
              autoFocus: h,
              refreshInfo: B,
              strAccountName: C,
              onAccountNameChange: g,
              strPassword: M,
              onPasswordChange: A,
              bRememberMe: E,
              onRememberMeChange: I,
              secureComputer: P = !0,
            } = c,
            [ae, le] = (0, L.useState)(!1),
            te = n(),
            vt = kn(),
            xt = () => {
              r().then(() => {
                vt() && le(!1);
              });
            },
            D = a === Tr || a === ur,
            Ct = a === zr && !ae,
            q = Ct
              ? (0, m.jsx)(Pi, {
                  children: (0, S.we)("#Login_CheckCredentials"),
                })
              : (0, m.jsx)(Pi, { children: "\xA0" }),
            U = h && !C,
            Q = h && !!C,
            Y = !!c.refreshInfo,
            Ht = (0, L.useId)(),
            tr = (0, L.useId)();
          return (0, m.jsxs)(Xi, {
            onSubmit: xt,
            className: d().LoginForm,
            children: [
              (0, m.jsx)(Qi, {
                tone: Ct ? "danger" : void 0,
                label: (0, m.jsx)(ki, {
                  highlight: !0,
                  inputId: Ht,
                  children: (0, S.we)("#Login_SignIn_WithAccountName"),
                }),
                value: C,
                onChange: (Qt) => {
                  le(!0), g(Qt);
                },
                autoFocus: U,
                disabled: Y,
                id: Ht,
              }),
              (0, m.jsx)(Qi, {
                tone: Ct ? "danger" : void 0,
                label: (0, m.jsx)(ki, {
                  inputId: tr,
                  children: (0, S.we)("#Login_Password"),
                }),
                value: M,
                onChange: (Qt) => {
                  le(!0), A(Qt);
                },
                type: "password",
                autoFocus: Q,
                id: tr,
              }),
              P
                ? (0, m.jsx)(F.he, {
                    toolTipContent: "#Login_RememberMe_Tooltip",
                    direction: "bottom",
                    children: (0, m.jsx)(cn, {
                      label: (0, S.we)("#Login_RememberMe_Short"),
                      value: E,
                      onChange: I,
                    }),
                  })
                : (0, m.jsx)("div", {
                    className: d().InsecureComputer,
                    children: (0, S.we)("#Login_InsecureComputer"),
                  }),
              (0, m.jsx)(mn, { loading: D, refreshLogin: Y }),
              q,
              !te &&
                (0, m.jsx)(er, {
                  href: `${z.TS.HELP_BASE_URL}wizard/HelpWithLogin?redir=${encodeURIComponent(document.location.href)}`,
                  align: "center",
                  children: (0, S.we)("#Login_Help_SignIn"),
                }),
            ],
          });
        }
        const en = 700;
        function tn(c) {
          const r = (0, _t.R7)(),
            a = () => r.ownerWindow.screen.width < en,
            [h, B] = (0, L.useState)(a());
          return (
            (0, O.l6)(r.ownerWindow, "resize", () => {
              B(a());
            }),
            (0, m.jsx)("div", {
              className: d().QRSection,
              children: h ? (0, m.jsx)(sn, { ...c }) : (0, m.jsx)(nn, { ...c }),
            })
          );
        }
        function rn(c) {
          const r =
            z.TS.STORE_BASE_URL +
            "join/?guest=1&purchaseType=gift&checkout=1&redir=" +
            encodeURIComponent(c.redirectURL);
          return (0, m.jsx)("div", {
            className: d().GuestLayout,
            children: (0, m.jsx)(ii, {
              compact: !0,
              children: (0, m.jsxs)("div", {
                className: d().GuestContainer,
                children: [
                  (0, m.jsx)("div", {
                    className: d().GuestText,
                    children: (0, S.oW)(
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
                      children: (0, S.we)("#Login_GuestContinue"),
                    }),
                  }),
                ],
              }),
            }),
          });
        }
        function nn(c) {
          return (0, m.jsx)(Hi, { ...c });
        }
        function sn(c) {
          const [r, a] = (0, L.useState)(!1);
          return r
            ? (0, m.jsx)(Hi, { ...c, bShowHideButton: !0, setShowQR: a })
            : (0, m.jsx)(an, { setShowQR: a });
        }
        function an(c) {
          return (0, m.jsxs)("div", {
            className: d().MessagingContainer,
            children: [
              (0, m.jsx)("div", {
                className: d().MessagingTag,
                children: (0, S.we)("#Login_MobileFlow_New"),
              }),
              (0, m.jsx)("div", {
                className: d().MessagingSubtitle,
                children: (0, m.jsx)("div", {
                  className: d().MessagingSubtitle,
                  children: (0, S.we)("#Login_MobileFlow_SignIn_ScanQR"),
                }),
              }),
              (0, m.jsx)("div", {
                className: d().MessagingButton,
                onClick: () => c.setShowQR(!0),
                children: (0, S.we)("#Login_MobileFlow_ShowMeQR_Button"),
              }),
              (0, m.jsx)("a", {
                href: `${z.TS.STORE_BASE_URL}mobile`,
                className: d().MessagingLink,
                children: (0, S.we)("#Login_JoinBeta_Button"),
              }),
            ],
          });
        }
        function Hi(c) {
          const {
            onQRStatusChange: r,
            transport: a,
            onComplete: h,
            platform: B,
            refreshInfo: C,
            bShowHideButton: g = !1,
            setShowQR: M,
          } = c;
          return (0, m.jsxs)("div", {
            className: d().QRCodeContainer,
            children: [
              (0, m.jsx)(ki, {
                highlight: !0,
                children: (0, S.we)("#Login_SignIn_OrWithQRCode"),
              }),
              (0, m.jsx)("div", {
                className: d().QR,
                children: (0, m.jsx)(Xt, {
                  onStatusChange: r,
                  transport: a,
                  onComplete: h,
                  platform: B,
                  refreshInfo: C,
                }),
              }),
              g &&
                M &&
                (0, m.jsx)("div", {
                  className: d().QRHideLink,
                  onClick: () => M(!1),
                  children: (0, S.we)("#Button_Hide"),
                }),
              (0, m.jsx)("div", {
                className: d().UseMobileAppForQR,
                children: (0, S.oW)(
                  "#Login_UseMobileAppForQR_Inline",
                  (0, m.jsx)(er, {
                    href: `${z.TS.STORE_BASE_URL}mobile`,
                    align: "center",
                  }),
                ),
              }),
            ],
          });
        }
        function En() {
          const c = "bShowLoginQR",
            [r, a] = useState(
              (localStorage == null ? void 0 : localStorage.getItem(c)) === "1",
            ),
            h = useCallback((B) => {
              a(B),
                B
                  ? localStorage == null || localStorage.setItem(c, "1")
                  : localStorage == null || localStorage.removeItem(c);
            }, []);
          return [r, h];
        }
        function Qi(c) {
          const { label: r, error: a, tone: h, autoFocus: B, id: C, ...g } = c,
            M = h != null ? h : a ? "danger" : void 0;
          return (0, m.jsxs)("div", {
            className: d().TextField,
            children: [
              typeof r == "string"
                ? (0, m.jsx)(ki, { inputId: C, children: r })
                : r,
              a && (0, m.jsx)(ln, { type: "error", children: a }),
              (0, m.jsx)(on, { autoFocus: B, tone: M, id: C, ...g }),
            ],
          });
        }
        function ki(c) {
          const { children: r, inputId: a, highlight: h } = c;
          return (0, m.jsx)("label", {
            className: (0, W.A)(d().FieldLabel, h && d().Highlight),
            htmlFor: a,
            children: r,
          });
        }
        function on(c) {
          const {
            value: r,
            onChange: a,
            type: h = "text",
            tone: B,
            className: C,
            autoFocus: g,
            disabled: M,
            id: A,
          } = c;
          return (0, m.jsx)("input", {
            value: r,
            type: h,
            autoFocus: g,
            onChange: (E) => a(E.target.value),
            className: (0, W.A)(d().TextInput, B === "danger" && d().Danger, C),
            disabled: M,
            id: A,
          });
        }
        function ln(c) {
          const { children: r, type: a } = c;
          return (0, m.jsx)("div", {
            className: (0, W.A)(d().FieldHint, a === "error" && d().Error),
            children: r,
          });
        }
        function cn(c) {
          const { label: r, onChange: a, value: h } = c;
          let B = () => {
            a && a(!h);
          };
          const C = (0, L.useId)();
          return (0, m.jsxs)("div", {
            className: d().CheckboxField,
            onClick: B,
            onKeyPress: (g) => {
              g.key == " " && (B(), g.preventDefault());
            },
            children: [
              (0, m.jsx)(un, { labelledBy: C, value: h }),
              (0, m.jsx)("label", {
                id: C,
                className: d().CheckboxFieldLabel,
                children: r,
              }),
            ],
          });
        }
        function un(c) {
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
                children: (0, m.jsx)(St.Jlk, { strokeWidth: 35 }),
              }),
          });
        }
        function mn(c) {
          const { refreshLogin: r, ...a } = c;
          return r &&
            "SteamClient" in globalThis &&
            "User" in SteamClient &&
            "StartShutdown" in SteamClient.User
            ? (0, m.jsx)(fn, {})
            : (0, m.jsx)(dn, { ...a });
        }
        function dn(c) {
          return (0, m.jsx)("div", {
            className: d().SignInButtonContainer,
            children: (0, m.jsx)(hn, {
              ...c,
              children: (0, S.we)("#Login_SignIn"),
            }),
          });
        }
        function fn() {
          const c = () => SteamClient.User.StartShutdown(!0);
          return (0, m.jsxs)("div", {
            className: d().RefreshButtonContainer,
            children: [
              (0, m.jsx)("button", {
                className: d().SubmitButton,
                type: "submit",
                children: (0, S.we)("#Login_SignIn"),
              }),
              (0, m.jsx)("button", {
                className: d().RefreshQuitButton,
                onClick: c,
                children: (0, S.we)("#Login_ExitSteam"),
              }),
            ],
          });
        }
        function hn(c) {
          return (0, m.jsx)(Zi, { type: "submit", ...c });
        }
        function Zi(c) {
          const {
              className: r,
              loading: a,
              disabled: h,
              children: B,
              ...C
            } = c,
            g = h || a;
          return (0, m.jsxs)("button", {
            className: (0, W.A)(d().SubmitButton, a && d().Loading, r),
            disabled: g,
            ...C,
            children: [
              B,
              a &&
                (0, m.jsx)("div", {
                  className: d().LoadingContainer,
                  children: (0, m.jsx)(Vi, { size: "small" }),
                }),
            ],
          });
        }
        function Pi(c) {
          const r = c.children || "\xA0";
          return (0, m.jsx)("div", { className: d().FormError, children: r });
        }
        function gn() {
          return (0, m.jsx)(ii, {
            compact: !0,
            children: (0, m.jsxs)(or, {
              alignItems: "center",
              className: (0, W.A)(
                d().WaitingForTokenContainer,
                z.TS.IN_STEAMUI && d().Client,
              ),
              children: [
                (0, m.jsx)(Wt.t, { size: "xlarge" }),
                (0, m.jsx)("div", {
                  className: (0, W.A)(d().Description),
                  children: (0, S.we)(
                    z.TS.IN_STEAMUI
                      ? "#Login_ConnectingToSteam"
                      : "#Login_LoadingAccountInfo",
                  ),
                }),
              ],
            }),
          });
        }
        function Vi(c) {
          const { size: r } = c;
          return (0, m.jsx)("div", {
            className: (0, W.A)(
              d().LoadingSpinner,
              r == "small" && d().Small,
              (r == "medium" || !r) && d().Medium,
              r == "large" && d().Large,
            ),
          });
        }
        function pn(c) {
          return (0, m.jsx)("div", {
            className: d().OfferOffline,
            children: (0, m.jsx)("button", {
              className: d().OfferOfflineButton,
              onClick: c.onRequestOffline,
              children: (0, S.we)("#Login_GoOffline_Button"),
            }),
          });
        }
        function zi(c) {
          const {
              reset: r,
              failure: a,
              onRequestOffline: h,
              errorReference: B,
              extendedErrorMessage: C,
            } = c,
            { title: g, description: M } = bn(a, C),
            A = z.TS.IN_STEAMUI && a == _.eF.Network;
          return (0, m.jsxs)(ii, {
            compact: !0,
            children: [
              (0, m.jsxs)(or, {
                alignItems: "center",
                gap: 12,
                children: [
                  (0, m.jsx)("div", {
                    className: d().FailureTitle,
                    children: g,
                  }),
                  (0, m.jsx)("div", {
                    className: d().FailureDescription,
                    children: M,
                  }),
                  A &&
                    (0, m.jsx)("div", {
                      className: d().FailureDescription,
                      children: (0, S.we)("#Login_GoOffline_Description"),
                    }),
                  (0, m.jsxs)(Ei, {
                    className: d().FailureButtons,
                    children: [
                      (0, m.jsx)(Zi, {
                        className: d().TryAgainButton,
                        onClick: r,
                        children: (0, S.we)("#Button_Retry"),
                      }),
                      A && h && (0, m.jsx)(pn, { onRequestOffline: h }),
                    ],
                  }),
                ],
              }),
              B &&
                (0, m.jsx)("div", {
                  className: d().MutedErrorReference,
                  children: (0, S.we)("#Login_Error_Reference", B),
                }),
            ],
          });
        }
        function bn(c, r = "") {
          let a = { title: "", description: "" };
          switch (c) {
            case _.eF.None:
              return { title: "", description: "" };
            case _.eF.Expired:
              a = {
                title: (0, S.we)("#Login_Error_Expired_Title"),
                description: (0, S.we)("#Login_Error_Expired_Description"),
              };
              break;
            case _.eF.Network:
              a = {
                title: (0, S.we)("#Login_Error_Network_Title"),
                description: (0, S.we)("#Login_Error_Network_Description"),
              };
              break;
            case _.eF.MoveAuthenticator:
              a = {
                title: (0, S.we)("#Error_Generic"),
                description: (0, S.we)(
                  "#Login_Error_MoveAuthenticator_Description",
                ),
              };
              break;
            case _.eF.RateLimitExceeded:
              a = {
                title: (0, S.we)("#Login_Error_RateLimit_Title"),
                description: (0, S.we)("#Login_Error_RateLimit_Description"),
              };
              break;
            case _.eF.AnonymousLogin:
              a = {
                title: (0, S.we)("#Login_Error_Anonymous_Title"),
                description: (0, S.we)("#Login_Error_Anonymous_Description"),
              };
              break;
            case _.eF.Generic:
            default:
              a = {
                title: (0, S.we)("#Error_Generic"),
                description: (0, S.we)("#Login_Error_Default_Description"),
              };
              break;
          }
          return r && (a.description = r), a;
        }
        function wn(c) {
          const { reset: r } = c;
          return (0, m.jsx)(zi, { reset: r, failure: _.eF.Generic });
        }
        function Bn(c) {
          const {
              type: r,
              onSubmitCode: a,
              status: h,
              accountName: B,
              associatedLabel: C,
              onBack: g,
            } = c,
            [M, A] = (0, L.useState)([]),
            [E, I] = (0, L.useState)(!1),
            [P, ae] = (0, L.useState)(!1),
            [le, te] = (0, L.useState)(!1),
            [vt, xt] = (0, L.useState)(0),
            D = r === "mobile",
            Ct = M.join(""),
            q = qr(Ct, le),
            U = (Wi) => {
              ae(!0),
                a(Wi).then(() => {
                  I(!1), ae(!1);
                });
            },
            Q = (Wi) => {
              E || I(!0), A(Wi);
              const Ji = Wi.join("");
              qr(Ji, le) && U(Ji);
            },
            Y = () => {
              q && U(Ct);
            },
            Ht = () => {
              te(!le), A([]), a(""), xt(vt + 1);
            },
            tr = !E && (h === qt || h === It);
          let Qt, gi;
          return (
            le
              ? r === "mobile"
                ? ((gi = (0, m.jsx)(Yi, {})), (Qt = "#Login_UseMobileCode"))
                : ((gi = (0, m.jsx)(Yi, {})), (Qt = "#Login_UseEmailCode"))
              : ((gi =
                  r === "mobile"
                    ? (0, m.jsx)(yn, {})
                    : (0, m.jsx)(Sn, { emailAddress: C })),
                (Qt = "#Login_UseBackupCode")),
            (0, m.jsx)(ii, {
              title: (0, m.jsx)(Gi, {}),
              compact: !0,
              children: (0, m.jsx)(Xi, {
                onSubmit: Y,
                children: (0, m.jsxs)(or, {
                  alignItems: "center",
                  gap: 14,
                  children: [
                    (0, m.jsx)($i, { type: r, accountName: B }),
                    (0, m.jsxs)("div", {
                      className: d().ConfirmationEntryContainer,
                      children: [
                        (0, m.jsxs)(or, {
                          alignItems: "center",
                          gap: 2,
                          children: [
                            tr &&
                              (0, m.jsx)(Pi, {
                                children: (0, S.we)(
                                  "#Login_IncorrectSteamGuard",
                                ),
                              }),
                            (0, m.jsx)(
                              Tn,
                              {
                                value: M,
                                onChange: Q,
                                tone: tr ? "danger" : void 0,
                                loading: P,
                                backupCode: le,
                              },
                              vt,
                            ),
                          ],
                        }),
                        gi,
                      ],
                    }),
                    D &&
                      (0, m.jsx)(er, {
                        onClick: Ht,
                        align: "center",
                        children: (0, S.we)(Qt),
                      }),
                    (0, m.jsx)(Ki, { type: r, onCodeHelp: c.onCodeHelp }),
                  ],
                }),
              }),
            })
          );
        }
        function Ki(c) {
          if ((0, ue.q)()) return null;
          let r, a;
          return (
            c.type === "mobile"
              ? ((r = `${z.TS.HELP_BASE_URL}wizard/HelpWithLoginInfo?lost=8&issueid=402`),
                (a = (0, S.we)("#Login_Help_AccessMobileApp")))
              : ((r = `${z.TS.HELP_BASE_URL}wizard/HelpWithSteamGuardCode`),
                (a = (0, S.we)("#Login_Help_AccessEmail"))),
            c.onCodeHelp
              ? (0, m.jsx)(er, {
                  onClick: () => c.onCodeHelp(r),
                  align: "center",
                  children: a,
                })
              : (0, m.jsx)(er, { href: r, align: "center", children: a })
          );
        }
        function Yi() {
          return (0, m.jsx)(Ei, {
            justifyContent: "space-evenly",
            alignItems: "center",
            className: d().EnterBackupCodeContainer,
            children: (0, m.jsxs)(or, {
              children: [
                (0, m.jsx)("div", {
                  className: d().EnterCodeFromMobile,
                  children: (0, S.we)("#Login_EnterBackupCode"),
                }),
                (0, m.jsx)("div", {
                  className: d().Label,
                  children: (0, S.we)("#Login_EnterBackupCodeDescription"),
                }),
              ],
            }),
          });
        }
        function yn() {
          return (0, m.jsxs)(Ei, {
            justifyContent: "space-evenly",
            alignItems: "center",
            className: d().EnterCodeFromMobileContainer,
            children: [
              (0, m.jsx)("div", {
                className: d().EnterCodeFromMobile,
                children: (0, S.we)("#Login_EnterMobileCode"),
              }),
              (0, m.jsx)(Cn, { className: d().AwaitingMobileConfIcon }),
            ],
          });
        }
        function Sn(c) {
          return (0, m.jsxs)(Ei, {
            justifyContent: "space-evenly",
            alignItems: "center",
            className: d().EnterCodeFromEmailContainer,
            children: [
              (0, m.jsx)(zn, {
                align: "center",
                spacing: 6,
                children: (0, m.jsx)("div", {
                  className: d().EnterCodeFromEmail,
                  children: (0, S.PP)(
                    "#Login_EnterEmailCode",
                    (0, m.jsx)("span", {
                      className: d().EnterCodeEmailAddress,
                      children: c.emailAddress,
                    }),
                  ),
                }),
              }),
              (0, m.jsx)(Rn, { className: d().AwaitingEmailConfIcon }),
            ],
          });
        }
        function $i(c) {
          const { accountName: r, type: a } = c,
            h =
              a === "mobile"
                ? (0, S.we)("#Login_MobileProtectingAccount")
                : (0, S.we)("#Login_EmailProtectingAccount"),
            B = n();
          return (0, m.jsxs)("div", {
            className: d().ProtectingAccount,
            children: [
              (0, m.jsx)("div", {
                className: d().Label,
                children: (0, S.PP)(
                  "#Login_ActiveAccountName",
                  (0, m.jsx)("span", {
                    className: d().AccountName,
                    children: r,
                  }),
                ),
              }),
              !B &&
                (0, m.jsx)("div", { className: d().Description, children: h }),
            ],
          });
        }
        function Mn() {
          return (0, m.jsx)(or, {
            alignItems: "center",
            children: (0, m.jsxs)("div", {
              className: d().ConfirmationContainer,
              children: [
                (0, m.jsx)("img", { src: (0, j.YJ)(Et) }),
                (0, m.jsx)("div", {
                  className: d().AwaitingMobileConfText,
                  children: (0, S.oW)("#Login_AwaitingMobileConfirmation"),
                }),
              ],
            }),
          });
        }
        function Cn(c) {
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
        function Rn(c) {
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
        function Wn(c) {
          var r, a, h;
          const [B, C] = useSvgId();
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
                clipPath: C,
                children: jsx("path", {
                  d: "M24.3333 17.6667H22.5V19.5H24.3333V17.6667ZM26.1667 15.8333V21.3333H20.6667V15.8333H26.1667V15.8333ZM27.0833 26.8333H25.25C24.3333 26.8333 24.3333 26.8333 24.3333 27.75V31.4167C24.3333 32.3335 24.3333 32.3335 25.25 32.3335H27.0833C28 32.3335 28 32.3335 28 31.4167V27.75C28 26.8333 28 26.8333 27.0833 26.8333ZM21.5833 26.8333C20.6665 26.8333 20.6665 26.8333 20.6665 27.75C20.6665 28.6667 20.6665 28.6667 21.5833 28.6667C22.5 28.6667 22.5 28.6667 22.5 27.75C22.5 26.8333 22.5 26.8333 21.5833 26.8333ZM27.0833 34.1667C26.1665 34.1667 26.1665 34.1667 26.1665 35.0835C26.1665 36.0002 26.1665 36.0002 27.0833 36.0002C28 36 28 36 28 35.0833C28 34.1667 28 34.1667 27.0833 34.1667ZM16.0833 23.1667C15.1665 23.1667 15.1665 23.1667 15.1665 24.0835C15.1665 25.0002 15.1665 25.0002 16.0833 25.0002C17 25.0002 17 25 17 24.0833C17 23.1665 17 23.1667 16.0833 23.1667ZM11.5 17.6667H9.66674V19.5H11.5V17.6667ZM13.3333 15.8333V21.3333H7.83326V15.8333H13.3333V15.8333ZM14.25 14H6.91674C6 14 6 14 6 14.9167V24.0835C6 25 6 25 6.91674 25C7.83348 25 7.83348 25 7.83348 24.0833V23.1665H14.25C15.1667 23.1665 15.1667 23.1665 15.1667 22.2498V19.5H16.0835C17 19.5 17 19.5 17 18.5833C17 17.6665 17 17.6665 16.0833 17.6665H15.1665V14.9165C15.1667 14 15.1667 14 14.25 14ZM27.0833 30.5H23.4167C22.5 30.5 22.5 30.5 22.5 31.4167V34.1667H21.5833C20.6665 34.1667 20.6665 34.1667 20.6665 35.0835C20.6665 36.0002 20.6665 36.0002 21.5833 36.0002H23.4165C24.3333 36.0002 24.3333 36.0002 24.3333 35.0835V32.3335H27.0833C28 32.3335 28 32.3335 28 31.4167C28 30.5 28 30.5 27.0833 30.5ZM19.75 30.5C18.8333 30.5 18.8333 30.5 18.8333 31.4167C18.8333 32.3335 18.8333 32.3335 19.75 32.3335C20.6667 32.3335 20.6667 32.3335 20.6667 31.4167C20.6667 30.5 20.6667 30.5 19.75 30.5ZM10.5833 25C9.66652 25 9.66652 25 9.66652 25.9167V26.8335H6.91652C6 26.8333 6 26.8333 6 27.75V35.0833C6 36 6 36 6.91674 36H14.25C15.1667 36 15.1667 36 15.1667 35.0833V34.1665H17V35.0833C17 36 17 36 17.9167 36C18.8335 36 18.8335 36 18.8335 35.0833V33.25C18.8335 32.3333 18.8335 32.3333 17.9167 32.3333H15.1667V30.5H17.9167C18.8335 30.5 18.8335 30.5 18.8335 29.5833C18.8335 28.6665 18.8335 28.6665 17.9167 28.6665H15.1667V27.75C15.1667 26.8333 15.1667 26.8333 14.25 26.8333H11.5V25.9165C11.5 25 11.5 25 10.5833 25ZM13.3333 28.6667V34.1667H7.83326V28.6667H13.3333ZM11.5 30.5H9.66674V32.3333H11.5V30.5ZM27.0833 14H17.9167C17 14 17 14 17 14.9167C17 15.8335 17 15.8335 17.9167 15.8335H18.8335V22.25C18.8335 23.1667 18.8335 23.1667 19.7502 23.1667H20.667V24.0835C20.667 25.0002 20.667 25.0002 21.5837 25.0002C22.5 25 22.5 25 22.5 24.0833V23.1665H24.3333V27.75C24.3333 28.6667 24.3333 28.6667 25.25 28.6667C26.1667 28.6667 26.1667 28.6667 26.1667 27.75V23.1667H27.0835C28.0002 23.1667 28.0002 23.1667 28.0002 22.25V14.9167C28 14 28 14 27.0833 14Z",
                  fill: (h = c.qrCodeColor) != null ? h : "currentColor",
                }),
              }),
              jsx("defs", {
                children: jsx("clipPath", {
                  id: B,
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
        function On(c) {
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
        function vn(c) {
          const { type: r, accountName: a, onUseCodeOverride: h } = c,
            B = n(),
            C = (0, m.jsx)(Ki, { type: "mobile", onCodeHelp: c.onCodeHelp }),
            g = B
              ? (0, m.jsx)("div", {
                  style: { paddingBottom: "20px" },
                  children: (0, m.jsx)(er, {
                    align: "center",
                    onClick: h,
                    children: (0, S.we)("#Login_EnterCodeInstead"),
                  }),
                })
              : (0, m.jsx)("div", {
                  className: d().EnterCodeInsteadLink,
                  children: (0, m.jsx)(er, {
                    align: "center",
                    onClick: h,
                    children: (0, S.we)("#Login_EnterCodeInstead"),
                  }),
                });
          return (0, m.jsx)(ii, {
            title: (0, m.jsx)(Gi, {}),
            compact: !0,
            children: (0, m.jsxs)(or, {
              gap: z.TS.IN_STEAMUI ? 24 : 40,
              children: [
                (0, m.jsx)($i, { type: r, accountName: a }),
                (0, m.jsx)(Mn, {}),
                (0, m.jsxs)("div", {
                  className: d().LinkContainer,
                  children: [g, C],
                }),
              ],
            }),
          });
        }
        function er(c) {
          const { children: r, align: a, inline: h } = c,
            B = (0, W.A)(d().TextLink, a === "center" && d().TextAlignCenter);
          if ("href" in c) {
            const C = z.TS.IN_STEAMUI
              ? `steam://openurl_external/${c.href}`
              : c.href;
            return (0, m.jsx)("a", { className: B, href: C, children: r });
          } else {
            const C = h ? "span" : "div";
            return (0, m.jsx)(C, {
              className: B,
              onClick: c.onClick,
              children: r,
            });
          }
        }
        function Xi(c) {
          const { onSubmit: r, children: a, className: h } = c,
            B = (C) => (C.preventDefault(), r(), !1);
          return (0, m.jsx)("form", { onSubmit: B, className: h, children: a });
        }
        function qn(c) {
          const { align: r, ...a } = c;
          return jsx("div", {
            className: classnames(styles.Text, r === "center" && styles.Center),
            ...a,
          });
        }
        function or(c) {
          const {
              alignItems: r,
              justifyContent: a,
              gap: h,
              className: B,
              ariaLabelledBy: C,
              children: g,
            } = c,
            M = (0, W.A)(
              d().FlexCol,
              r === "center" && d().AlignItemsCenter,
              a === "center" && d().JustifyContentCenter,
              B,
            ),
            A = h ? { gap: typeof h == "number" ? `${h}px` : h } : void 0;
          return (0, m.jsx)("section", {
            className: M,
            style: A,
            "aria-labelledby": C,
            children: g,
          });
        }
        function Ei(c) {
          const {
              children: r,
              justifyContent: a,
              alignItems: h,
              className: B,
            } = c,
            C = {
              display: "flex",
              flexDirection: "row",
              justifyContent: a,
              alignItems: h,
            };
          return (0, m.jsx)("div", { style: C, className: B, children: r });
        }
        function Tn(c) {
          const { onChange: r, backupCode: a = !1, ...h } = c,
            B = (C) => {
              C = C.map((M) => M.toUpperCase());
              const g = C.join("").trim();
              ti(g, a) && r(C);
            };
          return (0, m.jsx)(re, {
            length: Fr(a),
            backupCode: a,
            onChange: B,
            autoFocus: !0,
            ...h,
            allowCharacter: (C) => /\w/g.test(C),
          });
        }
        function zn(c) {
          var r;
          const { children: a, spacing: h = 0, align: B } = c;
          return (0, m.jsx)(or, {
            alignItems: B,
            children:
              (r = L.Children.map(a, (C, g) =>
                C
                  ? (0, m.jsx)("div", {
                      style: g > 0 ? { paddingTop: `${h}px` } : void 0,
                      children: C,
                    })
                  : null,
              )) == null
                ? void 0
                : r.filter(Boolean),
          });
        }
        function ii(c) {
          const { title: r, titleId: a, children: h, compact: B } = c,
            C = n(),
            g = (0, L.useId)();
          return (0, m.jsxs)(or, {
            gap: z.TS.IN_STEAMUI ? 0 : 32,
            className: (0, W.A)(
              d().StandardLayout,
              C && d().Embedded,
              B && d().Compact,
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
        function Gi(c) {
          const {
            realm: r = z.TS.EREALM,
            launcherType: a = z.TS.IN_STEAMUI ? z.TS.LAUNCHER_TYPE : void 0,
            className: h = d().HeaderLogo,
          } = c;
          return a === p.A2g
            ? (0, m.jsx)("div", { className: h })
            : (0, m.jsxs)("div", {
                className: d().LogoContainer,
                children: [
                  (0, m.jsx)(An, { onBack: c.onBack }),
                  r !== Zt.TU.k_ESteamRealmChina
                    ? (0, m.jsx)(jn, { className: h })
                    : (0, m.jsx)(Fn, { className: h }),
                  " ",
                ],
              });
        }
        function An(c) {
          return c.onBack
            ? (0, m.jsx)("div", {
                className: d().BackArrowContainer,
                onClick: c.onBack,
                children: (0, m.jsx)(St.Q38, { className: d().BackArrow }),
              })
            : null;
        }
        function jn(c) {
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
        function Fn(c) {
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
        function _n() {
          return (0, m.jsx)(or, {
            alignItems: "center",
            justifyContent: "center",
            children: (0, m.jsx)(Wt.t, {}),
          });
        }
        function xn(c) {
          const r = (0, L.useRef)(c);
          r.current = c;
          const [a, h] = (0, L.useState)(!0),
            B = (0, Yt.zy)();
          return (
            (0, L.useEffect)(() => {
              if (new URLSearchParams(B.search).get("need_password")) {
                h(!1);
                return;
              }
              if (!r.current) {
                h(!1);
                return;
              }
              In(r.current)
                .then((g) => {
                  h(g);
                })
                .catch((g) => {
                  (0, N.tH)("PerformRefresh exception", g), h(!1);
                });
            }, [r, B.search]),
            a
          );
        }
        async function In(c) {
          var r;
          const a = new FormData();
          a.append("redir", c);
          const h = `${z.TS.LOGIN_BASE_URL}jwt/ajaxrefresh`,
            B = await Kt().post(h, a, { timeout: 1e4, withCredentials: !0 });
          if (
            B.status !== 200 ||
            !((r = B == null ? void 0 : B.data) != null && r.success)
          )
            return !1;
          const { success: C, login_url: g, error: M, ...A } = B.data,
            E = new FormData();
          Object.entries(A).forEach(([ae, le]) => E.append(ae, le));
          const I = await Kt().post(g, E),
            P = I.status === 200 && I.data.result === l.R;
          return P && window.location.assign(c), P;
        }
        function kn() {
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
      77661: (Lt) => {
        Lt.exports = {
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
      5522: (Lt) => {
        Lt.exports = {
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
      5804: (Lt) => {
        Lt.exports = {
          QRBits: "_3BALYLTpJdiDaC7JKmeeFJ",
          QRImg: "_5S5WqZhvbmRD1cHQT8P-l",
          Bit: "_1YVDTFYSTDWouyIbRs_hN_",
          Active: "_1zNnNw2BDhrN6ML6YxBYJE",
        };
      },
      9843: (Lt) => {
        Lt.exports = {
          SegmentedCharacterInput: "_1gzkmmy_XA39rp9MtxJfZJ",
          Disabled: "_4WrcvilhO29CHFM0pqglW",
          Danger: "_3lEvxoIfUV21o8WAfErUcA",
          BackupCode: "V5oAzFppoOFufB8_pY9sK",
          Loading: "_3khV2wP4icszbiR8o7sw37",
          Input: "_3xcXqLVteTNHmk-gh9W65d",
        };
      },
      80407: (Lt, rr, v) => {
        "use strict";
        v.d(rr, { A: () => hi });
        var m,
          Zt = 0xdeadbeefcafe,
          p = (Zt & 16777215) == 15715070;
        function l(i, s, o) {
          i != null &&
            (typeof i == "number"
              ? this.fromNumber(i, s, o)
              : s == null && typeof i != "string"
                ? this.fromString(i, 256)
                : this.fromString(i, s));
        }
        function t() {
          return new l(null);
        }
        function G(i, s, o, f, d, w) {
          for (; --w >= 0; ) {
            var R = s * this[i++] + o[f] + d;
            (d = Math.floor(R / 67108864)), (o[f++] = R & 67108863);
          }
          return d;
        }
        function Kt(i, s, o, f, d, w) {
          for (var R = s & 32767, T = s >> 15; --w >= 0; ) {
            var K = this[i] & 32767,
              H = this[i++] >> 15,
              Mt = T * K + H * R;
            (K = R * K + ((Mt & 32767) << 15) + o[f] + (d & 1073741823)),
              (d = (K >>> 30) + (Mt >>> 15) + T * H + (d >>> 30)),
              (o[f++] = K & 1073741823);
          }
          return d;
        }
        function L(i, s, o, f, d, w) {
          for (var R = s & 16383, T = s >> 14; --w >= 0; ) {
            var K = this[i] & 16383,
              H = this[i++] >> 14,
              Mt = T * K + H * R;
            (K = R * K + ((Mt & 16383) << 14) + o[f] + d),
              (d = (K >> 28) + (Mt >> 14) + T * H),
              (o[f++] = K & 268435455);
          }
          return d;
        }
        p && navigator.appName == "Microsoft Internet Explorer"
          ? ((l.prototype.am = Kt), (m = 30))
          : p && navigator.appName != "Netscape"
            ? ((l.prototype.am = G), (m = 26))
            : ((l.prototype.am = L), (m = 28)),
          (l.prototype.DB = m),
          (l.prototype.DM = (1 << m) - 1),
          (l.prototype.DV = 1 << m);
        var Yt = 52;
        (l.prototype.FV = Math.pow(2, Yt)),
          (l.prototype.F1 = Yt - m),
          (l.prototype.F2 = 2 * m - Yt);
        var Et = "0123456789abcdefghijklmnopqrstuvwxyz",
          _t = new Array(),
          N,
          ue;
        for (N = 48, ue = 0; ue <= 9; ++ue) _t[N++] = ue;
        for (N = 97, ue = 10; ue < 36; ++ue) _t[N++] = ue;
        for (N = 65, ue = 10; ue < 36; ++ue) _t[N++] = ue;
        function lr(i) {
          return Et.charAt(i);
        }
        function ir(i, s) {
          var o = _t[i.charCodeAt(s)];
          return o == null ? -1 : o;
        }
        function Ut(i) {
          for (var s = this.t - 1; s >= 0; --s) i[s] = this[s];
          (i.t = this.t), (i.s = this.s);
        }
        function yt(i) {
          (this.t = 1),
            (this.s = i < 0 ? -1 : 0),
            i > 0 ? (this[0] = i) : i < -1 ? (this[0] = i + DV) : (this.t = 0);
        }
        function W(i) {
          var s = t();
          return s.fromInt(i), s;
        }
        function ce(i, s) {
          var o;
          if (s == 16) o = 4;
          else if (s == 8) o = 3;
          else if (s == 256) o = 8;
          else if (s == 2) o = 1;
          else if (s == 32) o = 5;
          else if (s == 4) o = 2;
          else {
            this.fromRadix(i, s);
            return;
          }
          (this.t = 0), (this.s = 0);
          for (var f = i.length, d = !1, w = 0; --f >= 0; ) {
            var R = o == 8 ? i[f] & 255 : ir(i, f);
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
        function re(i) {
          if (this.s < 0) return "-" + this.negate().toString(i);
          var s;
          if (i == 16) s = 4;
          else if (i == 8) s = 3;
          else if (i == 2) s = 1;
          else if (i == 32) s = 5;
          else if (i == 4) s = 2;
          else return this.toRadix(i);
          var o = (1 << s) - 1,
            f,
            d = !1,
            w = "",
            R = this.t,
            T = this.DB - ((R * this.DB) % s);
          if (R-- > 0)
            for (
              T < this.DB && (f = this[R] >> T) > 0 && ((d = !0), (w = lr(f)));
              R >= 0;
            )
              T < s
                ? ((f = (this[R] & ((1 << T) - 1)) << (s - T)),
                  (f |= this[--R] >> (T += this.DB - s)))
                : ((f = (this[R] >> (T -= s)) & o),
                  T <= 0 && ((T += this.DB), --R)),
                f > 0 && (d = !0),
                d && (w += lr(f));
          return d ? w : "0";
        }
        function St() {
          var i = t();
          return l.ZERO.subTo(this, i), i;
        }
        function ie() {
          return this.s < 0 ? this.negate() : this;
        }
        function Wt(i) {
          var s = this.s - i.s;
          if (s != 0) return s;
          var o = this.t;
          if (((s = o - i.t), s != 0)) return s;
          for (; --o >= 0; ) if ((s = this[o] - i[o]) != 0) return s;
          return 0;
        }
        function F(i) {
          var s = 1,
            o;
          return (
            (o = i >>> 16) != 0 && ((i = o), (s += 16)),
            (o = i >> 8) != 0 && ((i = o), (s += 8)),
            (o = i >> 4) != 0 && ((i = o), (s += 4)),
            (o = i >> 2) != 0 && ((i = o), (s += 2)),
            (o = i >> 1) != 0 && ((i = o), (s += 1)),
            s
          );
        }
        function S() {
          return this.t <= 0
            ? 0
            : this.DB * (this.t - 1) + F(this[this.t - 1] ^ (this.s & this.DM));
        }
        function O(i, s) {
          var o;
          for (o = this.t - 1; o >= 0; --o) s[o + i] = this[o];
          for (o = i - 1; o >= 0; --o) s[o] = 0;
          (s.t = this.t + i), (s.s = this.s);
        }
        function z(i, s) {
          for (var o = i; o < this.t; ++o) s[o - i] = this[o];
          (s.t = Math.max(this.t - i, 0)), (s.s = this.s);
        }
        function _(i, s) {
          var o = i % this.DB,
            f = this.DB - o,
            d = (1 << f) - 1,
            w = Math.floor(i / this.DB),
            R = (this.s << o) & this.DM,
            T;
          for (T = this.t - 1; T >= 0; --T)
            (s[T + w + 1] = (this[T] >> f) | R), (R = (this[T] & d) << o);
          for (T = w - 1; T >= 0; --T) s[T] = 0;
          (s[w] = R), (s.t = this.t + w + 1), (s.s = this.s), s.clamp();
        }
        function ne(i, s) {
          s.s = this.s;
          var o = Math.floor(i / this.DB);
          if (o >= this.t) {
            s.t = 0;
            return;
          }
          var f = i % this.DB,
            d = this.DB - f,
            w = (1 << f) - 1;
          s[0] = this[o] >> f;
          for (var R = o + 1; R < this.t; ++R)
            (s[R - o - 1] |= (this[R] & w) << d), (s[R - o] = this[R] >> f);
          f > 0 && (s[this.t - o - 1] |= (this.s & w) << d),
            (s.t = this.t - o),
            s.clamp();
        }
        function b(i, s) {
          for (var o = 0, f = 0, d = Math.min(i.t, this.t); o < d; )
            (f += this[o] - i[o]), (s[o++] = f & this.DM), (f >>= this.DB);
          if (i.t < this.t) {
            for (f -= i.s; o < this.t; )
              (f += this[o]), (s[o++] = f & this.DM), (f >>= this.DB);
            f += this.s;
          } else {
            for (f += this.s; o < i.t; )
              (f -= i[o]), (s[o++] = f & this.DM), (f >>= this.DB);
            f -= i.s;
          }
          (s.s = f < 0 ? -1 : 0),
            f < -1 ? (s[o++] = this.DV + f) : f > 0 && (s[o++] = f),
            (s.t = o),
            s.clamp();
        }
        function oe(i, s) {
          var o = this.abs(),
            f = i.abs(),
            d = o.t;
          for (s.t = d + f.t; --d >= 0; ) s[d] = 0;
          for (d = 0; d < f.t; ++d) s[d + o.t] = o.am(0, f[d], s, d, 0, o.t);
          (s.s = 0), s.clamp(), this.s != i.s && l.ZERO.subTo(s, s);
        }
        function dr(i) {
          for (var s = this.abs(), o = (i.t = 2 * s.t); --o >= 0; ) i[o] = 0;
          for (o = 0; o < s.t - 1; ++o) {
            var f = s.am(o, s[o], i, 2 * o, 0, 1);
            (i[o + s.t] += s.am(
              o + 1,
              2 * s[o],
              i,
              2 * o + 1,
              f,
              s.t - o - 1,
            )) >= s.DV && ((i[o + s.t] -= s.DV), (i[o + s.t + 1] = 1));
          }
          i.t > 0 && (i[i.t - 1] += s.am(o, s[o], i, 2 * o, 0, 1)),
            (i.s = 0),
            i.clamp();
        }
        function fr(i, s, o) {
          var f = i.abs();
          if (!(f.t <= 0)) {
            var d = this.abs();
            if (d.t < f.t) {
              s != null && s.fromInt(0), o != null && this.copyTo(o);
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
            var H = w.t,
              Mt = w[H - 1];
            if (Mt != 0) {
              var jt = Mt * (1 << this.F1) + (H > 1 ? w[H - 2] >> this.F2 : 0),
                kt = this.FV / jt,
                Dr = (1 << this.F1) / jt,
                Ft = 1 << this.F2,
                J = o.t,
                mr = J - H,
                Xt = s == null ? t() : s;
              for (
                w.dlShiftTo(mr, Xt),
                  o.compareTo(Xt) >= 0 && ((o[o.t++] = 1), o.subTo(Xt, o)),
                  l.ONE.dlShiftTo(H, Xt),
                  Xt.subTo(w, w);
                w.t < H;
              )
                w[w.t++] = 0;
              for (; --mr >= 0; ) {
                var xr =
                  o[--J] == Mt
                    ? this.DM
                    : Math.floor(o[J] * kt + (o[J - 1] + Ft) * Dr);
                if ((o[J] += w.am(0, xr, o, mr, 0, H)) < xr)
                  for (w.dlShiftTo(mr, Xt), o.subTo(Xt, o); o[J] < --xr; )
                    o.subTo(Xt, o);
              }
              s != null && (o.drShiftTo(H, s), R != T && l.ZERO.subTo(s, s)),
                (o.t = H),
                o.clamp(),
                K > 0 && o.rShiftTo(K, o),
                R < 0 && l.ZERO.subTo(o, o);
            }
          }
        }
        function cr(i) {
          var s = t();
          return (
            this.abs().divRemTo(i, null, s),
            this.s < 0 && s.compareTo(l.ZERO) > 0 && i.subTo(s, s),
            s
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
        function Ai(i) {
          i.divRemTo(this.m, null, i);
        }
        function ji(i, s, o) {
          i.multiplyTo(s, o), this.reduce(o);
        }
        function Z(i, s) {
          i.squareTo(s), this.reduce(s);
        }
        (k.prototype.convert = x),
          (k.prototype.revert = u),
          (k.prototype.reduce = Ai),
          (k.prototype.mulTo = ji),
          (k.prototype.sqrTo = Z);
        function Oi() {
          if (this.t < 1) return 0;
          var i = this[0];
          if ((i & 1) == 0) return 0;
          var s = i & 3;
          return (
            (s = (s * (2 - (i & 15) * s)) & 15),
            (s = (s * (2 - (i & 255) * s)) & 255),
            (s = (s * (2 - (((i & 65535) * s) & 65535))) & 65535),
            (s = (s * (2 - ((i * s) % this.DV))) % this.DV),
            s > 0 ? this.DV - s : -s
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
        function ni(i) {
          var s = t();
          return (
            i.abs().dlShiftTo(this.m.t, s),
            s.divRemTo(this.m, null, s),
            i.s < 0 && s.compareTo(l.ZERO) > 0 && this.m.subTo(s, s),
            s
          );
        }
        function Fi(i) {
          var s = t();
          return i.copyTo(s), this.reduce(s), s;
        }
        function si(i) {
          for (; i.t <= this.mt2; ) i[i.t++] = 0;
          for (var s = 0; s < this.m.t; ++s) {
            var o = i[s] & 32767,
              f =
                (o * this.mpl +
                  (((o * this.mph + (i[s] >> 15) * this.mpl) & this.um) <<
                    15)) &
                i.DM;
            for (
              o = s + this.m.t, i[o] += this.m.am(0, f, i, s, 0, this.m.t);
              i[o] >= i.DV;
            )
              (i[o] -= i.DV), i[++o]++;
          }
          i.clamp(),
            i.drShiftTo(this.m.t, i),
            i.compareTo(this.m) >= 0 && i.subTo(this.m, i);
        }
        function _i(i, s) {
          i.squareTo(s), this.reduce(s);
        }
        function gr(i, s, o) {
          i.multiplyTo(s, o), this.reduce(o);
        }
        (hr.prototype.convert = ni),
          (hr.prototype.revert = Fi),
          (hr.prototype.reduce = si),
          (hr.prototype.mulTo = gr),
          (hr.prototype.sqrTo = _i);
        function ai() {
          return (this.t > 0 ? this[0] & 1 : this.s) == 0;
        }
        function pr(i, s) {
          if (i > 4294967295 || i < 1) return l.ONE;
          var o = t(),
            f = t(),
            d = s.convert(this),
            w = F(i) - 1;
          for (d.copyTo(o); --w >= 0; )
            if ((s.sqrTo(o, f), (i & (1 << w)) > 0)) s.mulTo(f, d, o);
            else {
              var R = o;
              (o = f), (f = R);
            }
          return s.revert(o);
        }
        function pi(i, s) {
          var o;
          return (
            i < 256 || s.isEven() ? (o = new k(s)) : (o = new hr(s)),
            this.exp(i, o)
          );
        }
        (l.prototype.copyTo = Ut),
          (l.prototype.fromInt = yt),
          (l.prototype.fromString = ce),
          (l.prototype.clamp = V),
          (l.prototype.dlShiftTo = O),
          (l.prototype.drShiftTo = z),
          (l.prototype.lShiftTo = _),
          (l.prototype.rShiftTo = ne),
          (l.prototype.subTo = b),
          (l.prototype.multiplyTo = oe),
          (l.prototype.squareTo = dr),
          (l.prototype.divRemTo = fr),
          (l.prototype.invDigit = Oi),
          (l.prototype.isEven = ai),
          (l.prototype.exp = pr),
          (l.prototype.toString = re),
          (l.prototype.negate = St),
          (l.prototype.abs = ie),
          (l.prototype.compareTo = Wt),
          (l.prototype.bitLength = S),
          (l.prototype.mod = cr),
          (l.prototype.modPowInt = pi),
          (l.ZERO = W(0)),
          (l.ONE = W(1));
        function br() {
          var i = t();
          return this.copyTo(i), i;
        }
        function Pr() {
          if (this.s < 0) {
            if (this.t == 1) return this[0] - this.DV;
            if (this.t == 0) return -1;
          } else {
            if (this.t == 1) return this[0];
            if (this.t == 0) return 0;
          }
          return ((this[1] & ((1 << (32 - this.DB)) - 1)) << this.DB) | this[0];
        }
        function wr() {
          return this.t == 0 ? this.s : (this[0] << 24) >> 24;
        }
        function oi() {
          return this.t == 0 ? this.s : (this[0] << 16) >> 16;
        }
        function Br(i) {
          return Math.floor((Math.LN2 * this.DB) / Math.log(i));
        }
        function li() {
          return this.s < 0
            ? -1
            : this.t <= 0 || (this.t == 1 && this[0] <= 0)
              ? 0
              : 1;
        }
        function yr(i) {
          if ((i == null && (i = 10), this.signum() == 0 || i < 2 || i > 36))
            return "0";
          var s = this.chunkSize(i),
            o = Math.pow(i, s),
            f = W(o),
            d = t(),
            w = t(),
            R = "";
          for (this.divRemTo(f, d, w); d.signum() > 0; )
            (R = (o + w.intValue()).toString(i).substr(1) + R),
              d.divRemTo(f, d, w);
          return w.intValue().toString(i) + R;
        }
        function bi(i, s) {
          this.fromInt(0), s == null && (s = 10);
          for (
            var o = this.chunkSize(s),
              f = Math.pow(s, o),
              d = !1,
              w = 0,
              R = 0,
              T = 0;
            T < i.length;
            ++T
          ) {
            var K = ir(i, T);
            if (K < 0) {
              i.charAt(T) == "-" && this.signum() == 0 && (d = !0);
              continue;
            }
            (R = s * R + K),
              ++w >= o &&
                (this.dMultiply(f), this.dAddOffset(R, 0), (w = 0), (R = 0));
          }
          w > 0 && (this.dMultiply(Math.pow(s, w)), this.dAddOffset(R, 0)),
            d && l.ZERO.subTo(this, this);
        }
        function Sr(i, s, o) {
          if (typeof s == "number")
            if (i < 2) this.fromInt(1);
            else
              for (
                this.fromNumber(i, o),
                  this.testBit(i - 1) ||
                    this.bitwiseTo(l.ONE.shiftLeft(i - 1), Rr, this),
                  this.isEven() && this.dAddOffset(1, 0);
                !this.isProbablePrime(s);
              )
                this.dAddOffset(2, 0),
                  this.bitLength() > i &&
                    this.subTo(l.ONE.shiftLeft(i - 1), this);
          else {
            var f = new Array(),
              d = i & 7;
            (f.length = (i >> 3) + 1),
              s.nextBytes(f),
              d > 0 ? (f[0] &= (1 << d) - 1) : (f[0] = 0),
              this.fromString(f, 256);
          }
        }
        function ci() {
          var i = this.t,
            s = new Array();
          s[0] = this.s;
          var o = this.DB - ((i * this.DB) % 8),
            f,
            d = 0;
          if (i-- > 0)
            for (
              o < this.DB &&
              (f = this[i] >> o) != (this.s & this.DM) >> o &&
              (s[d++] = f | (this.s << (this.DB - o)));
              i >= 0;
            )
              o < 8
                ? ((f = (this[i] & ((1 << o) - 1)) << (8 - o)),
                  (f |= this[--i] >> (o += this.DB - 8)))
                : ((f = (this[i] >> (o -= 8)) & 255),
                  o <= 0 && ((o += this.DB), --i)),
                (f & 128) != 0 && (f |= -256),
                d == 0 && (this.s & 128) != (f & 128) && ++d,
                (d > 0 || f != this.s) && (s[d++] = f);
          return s;
        }
        function Mr(i) {
          return this.compareTo(i) == 0;
        }
        function wi(i) {
          return this.compareTo(i) < 0 ? this : i;
        }
        function Cr(i) {
          return this.compareTo(i) > 0 ? this : i;
        }
        function ui(i, s, o) {
          var f,
            d,
            w = Math.min(i.t, this.t);
          for (f = 0; f < w; ++f) o[f] = s(this[f], i[f]);
          if (i.t < this.t) {
            for (d = i.s & this.DM, f = w; f < this.t; ++f)
              o[f] = s(this[f], d);
            o.t = this.t;
          } else {
            for (d = this.s & this.DM, f = w; f < i.t; ++f) o[f] = s(d, i[f]);
            o.t = i.t;
          }
          (o.s = s(this.s, i.s)), o.clamp();
        }
        function Tt(i, s) {
          return i & s;
        }
        function Vr(i) {
          var s = t();
          return this.bitwiseTo(i, Tt, s), s;
        }
        function Rr(i, s) {
          return i | s;
        }
        function Gr(i) {
          var s = t();
          return this.bitwiseTo(i, Rr, s), s;
        }
        function vr(i, s) {
          return i ^ s;
        }
        function Hr(i) {
          var s = t();
          return this.bitwiseTo(i, vr, s), s;
        }
        function Er(i, s) {
          return i & ~s;
        }
        function Qr(i) {
          var s = t();
          return this.bitwiseTo(i, Er, s), s;
        }
        function Zr() {
          for (var i = t(), s = 0; s < this.t; ++s) i[s] = this.DM & ~this[s];
          return (i.t = this.t), (i.s = ~this.s), i;
        }
        function Kr(i) {
          var s = t();
          return i < 0 ? this.rShiftTo(-i, s) : this.lShiftTo(i, s), s;
        }
        function Yr(i) {
          var s = t();
          return i < 0 ? this.lShiftTo(-i, s) : this.rShiftTo(i, s), s;
        }
        function Nt(i) {
          if (i == 0) return -1;
          var s = 0;
          return (
            (i & 65535) == 0 && ((i >>= 16), (s += 16)),
            (i & 255) == 0 && ((i >>= 8), (s += 8)),
            (i & 15) == 0 && ((i >>= 4), (s += 4)),
            (i & 3) == 0 && ((i >>= 2), (s += 2)),
            (i & 1) == 0 && ++s,
            s
          );
        }
        function nr() {
          for (var i = 0; i < this.t; ++i)
            if (this[i] != 0) return i * this.DB + Nt(this[i]);
          return this.s < 0 ? this.t * this.DB : -1;
        }
        function mi(i) {
          for (var s = 0; i != 0; ) (i &= i - 1), ++s;
          return s;
        }
        function Dt() {
          for (var i = 0, s = this.s & this.DM, o = 0; o < this.t; ++o)
            i += mi(this[o] ^ s);
          return i;
        }
        function $r(i) {
          var s = Math.floor(i / this.DB);
          return s >= this.t
            ? this.s != 0
            : (this[s] & (1 << (i % this.DB))) != 0;
        }
        function zt(i, s) {
          var o = l.ONE.shiftLeft(i);
          return this.bitwiseTo(o, s, o), o;
        }
        function Rt(i) {
          return this.changeBit(i, Rr);
        }
        function Bi(i) {
          return this.changeBit(i, Er);
        }
        function Bt(i) {
          return this.changeBit(i, vr);
        }
        function Tr(i, s) {
          for (var o = 0, f = 0, d = Math.min(i.t, this.t); o < d; )
            (f += this[o] + i[o]), (s[o++] = f & this.DM), (f >>= this.DB);
          if (i.t < this.t) {
            for (f += i.s; o < this.t; )
              (f += this[o]), (s[o++] = f & this.DM), (f >>= this.DB);
            f += this.s;
          } else {
            for (f += this.s; o < i.t; )
              (f += i[o]), (s[o++] = f & this.DM), (f >>= this.DB);
            f += i.s;
          }
          (s.s = f < 0 ? -1 : 0),
            f > 0 ? (s[o++] = f) : f < -1 && (s[o++] = this.DV + f),
            (s.t = o),
            s.clamp();
        }
        function zr(i) {
          var s = t();
          return this.addTo(i, s), s;
        }
        function Ot(i) {
          var s = t();
          return this.subTo(i, s), s;
        }
        function sr(i) {
          var s = t();
          return this.multiplyTo(i, s), s;
        }
        function At(i) {
          var s = t();
          return this.divRemTo(i, s, null), s;
        }
        function ar(i) {
          var s = t();
          return this.divRemTo(i, null, s), s;
        }
        function Ar(i) {
          var s = t(),
            o = t();
          return this.divRemTo(i, s, o), new Array(s, o);
        }
        function Wr(i) {
          (this[this.t] = this.am(0, i - 1, this, 0, 0, this.t)),
            ++this.t,
            this.clamp();
        }
        function Xr(i, s) {
          for (; this.t <= s; ) this[this.t++] = 0;
          for (this[s] += i; this[s] >= this.DV; )
            (this[s] -= this.DV),
              ++s >= this.t && (this[this.t++] = 0),
              ++this[s];
        }
        function It() {}
        function qt(i) {
          return i;
        }
        function Jr(i, s, o) {
          i.multiplyTo(s, o);
        }
        function ur(i, s) {
          i.squareTo(s);
        }
        (It.prototype.convert = qt),
          (It.prototype.revert = qt),
          (It.prototype.mulTo = Jr),
          (It.prototype.sqrTo = ur);
        function ei(i) {
          return this.exp(i, new It());
        }
        function jr(i, s, o) {
          var f = Math.min(this.t + i.t, s);
          for (o.s = 0, o.t = f; f > 0; ) o[--f] = 0;
          var d;
          for (d = o.t - this.t; f < d; ++f)
            o[f + this.t] = this.am(0, i[f], o, f, 0, this.t);
          for (d = Math.min(i.t, s); f < d; ++f)
            this.am(0, i[f], o, f, 0, s - f);
          o.clamp();
        }
        function di(i, s, o) {
          --s;
          var f = (o.t = this.t + i.t - s);
          for (o.s = 0; --f >= 0; ) o[f] = 0;
          for (f = Math.max(s - this.t, 0); f < i.t; ++f)
            o[this.t + f - s] = this.am(s - f, i[f], o, 0, 0, this.t + f - s);
          o.clamp(), o.drShiftTo(1, o);
        }
        function se(i) {
          (this.r2 = t()),
            (this.q3 = t()),
            l.ONE.dlShiftTo(2 * i.t, this.r2),
            (this.mu = this.r2.divide(i)),
            (this.m = i);
        }
        function yi(i) {
          if (i.s < 0 || i.t > 2 * this.m.t) return i.mod(this.m);
          if (i.compareTo(this.m) < 0) return i;
          var s = t();
          return i.copyTo(s), this.reduce(s), s;
        }
        function $t(i) {
          return i;
        }
        function Or(i) {
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
        function Si(i, s) {
          i.squareTo(s), this.reduce(s);
        }
        function Pt(i, s, o) {
          i.multiplyTo(s, o), this.reduce(o);
        }
        (se.prototype.convert = yi),
          (se.prototype.revert = $t),
          (se.prototype.reduce = Or),
          (se.prototype.mulTo = Pt),
          (se.prototype.sqrTo = Si);
        function Fr(i, s) {
          var o = i.bitLength(),
            f,
            d = W(1),
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
              ? (w = new k(s))
              : s.isEven()
                ? (w = new se(s))
                : (w = new hr(s));
          var R = new Array(),
            T = 3,
            K = f - 1,
            H = (1 << f) - 1;
          if (((R[1] = w.convert(this)), f > 1)) {
            var Mt = t();
            for (w.sqrTo(R[1], Mt); T <= H; )
              (R[T] = t()), w.mulTo(Mt, R[T - 2], R[T]), (T += 2);
          }
          var jt = i.t - 1,
            kt,
            Dr = !0,
            Ft = t(),
            J;
          for (o = F(i[jt]) - 1; jt >= 0; ) {
            for (
              o >= K
                ? (kt = (i[jt] >> (o - K)) & H)
                : ((kt = (i[jt] & ((1 << (o + 1)) - 1)) << (K - o)),
                  jt > 0 && (kt |= i[jt - 1] >> (this.DB + o - K))),
                T = f;
              (kt & 1) == 0;
            )
              (kt >>= 1), --T;
            if (((o -= T) < 0 && ((o += this.DB), --jt), Dr))
              R[kt].copyTo(d), (Dr = !1);
            else {
              for (; T > 1; ) w.sqrTo(d, Ft), w.sqrTo(Ft, d), (T -= 2);
              T > 0 ? w.sqrTo(d, Ft) : ((J = d), (d = Ft), (Ft = J)),
                w.mulTo(Ft, R[kt], d);
            }
            for (; jt >= 0 && (i[jt] & (1 << o)) == 0; )
              w.sqrTo(d, Ft),
                (J = d),
                (d = Ft),
                (Ft = J),
                --o < 0 && ((o = this.DB - 1), --jt);
          }
          return w.revert(d);
        }
        function ti(i) {
          var s = this.s < 0 ? this.negate() : this.clone(),
            o = i.s < 0 ? i.negate() : i.clone();
          if (s.compareTo(o) < 0) {
            var f = s;
            (s = o), (o = f);
          }
          var d = s.getLowestSetBit(),
            w = o.getLowestSetBit();
          if (w < 0) return s;
          for (
            d < w && (w = d), w > 0 && (s.rShiftTo(w, s), o.rShiftTo(w, o));
            s.signum() > 0;
          )
            (d = s.getLowestSetBit()) > 0 && s.rShiftTo(d, s),
              (d = o.getLowestSetBit()) > 0 && o.rShiftTo(d, o),
              s.compareTo(o) >= 0
                ? (s.subTo(o, s), s.rShiftTo(1, s))
                : (o.subTo(s, o), o.rShiftTo(1, o));
          return w > 0 && o.lShiftTo(w, o), o;
        }
        function qr(i) {
          if (i <= 0) return 0;
          var s = this.DV % i,
            o = this.s < 0 ? i - 1 : 0;
          if (this.t > 0)
            if (s == 0) o = this[0] % i;
            else
              for (var f = this.t - 1; f >= 0; --f) o = (s * o + this[f]) % i;
          return o;
        }
        function me(i) {
          var s = i.isEven();
          if ((this.isEven() && s) || i.signum() == 0) return l.ZERO;
          for (
            var o = i.clone(),
              f = this.clone(),
              d = W(1),
              w = W(0),
              R = W(0),
              T = W(1);
            o.signum() != 0;
          ) {
            for (; o.isEven(); )
              o.rShiftTo(1, o),
                s
                  ? ((!d.isEven() || !w.isEven()) &&
                      (d.addTo(this, d), w.subTo(i, w)),
                    d.rShiftTo(1, d))
                  : w.isEven() || w.subTo(i, w),
                w.rShiftTo(1, w);
            for (; f.isEven(); )
              f.rShiftTo(1, f),
                s
                  ? ((!R.isEven() || !T.isEven()) &&
                      (R.addTo(this, R), T.subTo(i, T)),
                    R.rShiftTo(1, R))
                  : T.isEven() || T.subTo(i, T),
                T.rShiftTo(1, T);
            o.compareTo(f) >= 0
              ? (o.subTo(f, o), s && d.subTo(R, d), w.subTo(T, w))
              : (f.subTo(o, f), s && R.subTo(d, R), T.subTo(w, T));
          }
          if (f.compareTo(l.ONE) != 0) return l.ZERO;
          if (T.compareTo(i) >= 0) return T.subtract(i);
          if (T.signum() < 0) T.addTo(i, T);
          else return T;
          return T.signum() < 0 ? T.add(i) : T;
        }
        var de = [
            2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61,
            67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137,
            139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199,
            211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277,
            281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359,
            367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439,
            443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509,
          ],
          Mi = (1 << 26) / de[de.length - 1];
        function ri(i) {
          var s,
            o = this.abs();
          if (o.t == 1 && o[0] <= de[de.length - 1]) {
            for (s = 0; s < de.length; ++s) if (o[0] == de[s]) return !0;
            return !1;
          }
          if (o.isEven()) return !1;
          for (s = 1; s < de.length; ) {
            for (var f = de[s], d = s + 1; d < de.length && f < Mi; )
              f *= de[d++];
            for (f = o.modInt(f); s < d; ) if (f % de[s++] == 0) return !1;
          }
          return o.millerRabin(i);
        }
        function Ci(i) {
          var s = this.subtract(l.ONE),
            o = s.getLowestSetBit();
          if (o <= 0) return !1;
          var f = s.shiftRight(o);
          (i = (i + 1) >> 1), i > de.length && (i = de.length);
          for (var d = t(), w = 0; w < i; ++w) {
            d.fromInt(de[w]);
            var R = d.modPow(f, this);
            if (R.compareTo(l.ONE) != 0 && R.compareTo(s) != 0) {
              for (var T = 1; T++ < o && R.compareTo(s) != 0; )
                if (((R = R.modPowInt(2, this)), R.compareTo(l.ONE) == 0))
                  return !1;
              if (R.compareTo(s) != 0) return !1;
            }
          }
          return !0;
        }
        (l.prototype.chunkSize = Br),
          (l.prototype.toRadix = yr),
          (l.prototype.fromRadix = bi),
          (l.prototype.fromNumber = Sr),
          (l.prototype.bitwiseTo = ui),
          (l.prototype.changeBit = zt),
          (l.prototype.addTo = Tr),
          (l.prototype.dMultiply = Wr),
          (l.prototype.dAddOffset = Xr),
          (l.prototype.multiplyLowerTo = jr),
          (l.prototype.multiplyUpperTo = di),
          (l.prototype.modInt = qr),
          (l.prototype.millerRabin = Ci),
          (l.prototype.clone = br),
          (l.prototype.intValue = Pr),
          (l.prototype.byteValue = wr),
          (l.prototype.shortValue = oi),
          (l.prototype.signum = li),
          (l.prototype.toByteArray = ci),
          (l.prototype.equals = Mr),
          (l.prototype.min = wi),
          (l.prototype.max = Cr),
          (l.prototype.and = Vr),
          (l.prototype.or = Gr),
          (l.prototype.xor = Hr),
          (l.prototype.andNot = Qr),
          (l.prototype.not = Zr),
          (l.prototype.shiftLeft = Kr),
          (l.prototype.shiftRight = Yr),
          (l.prototype.getLowestSetBit = nr),
          (l.prototype.bitCount = Dt),
          (l.prototype.testBit = $r),
          (l.prototype.setBit = Rt),
          (l.prototype.clearBit = Bi),
          (l.prototype.flipBit = Bt),
          (l.prototype.add = zr),
          (l.prototype.subtract = Ot),
          (l.prototype.multiply = sr),
          (l.prototype.divide = At),
          (l.prototype.remainder = ar),
          (l.prototype.divideAndRemainder = Ar),
          (l.prototype.modPow = Fr),
          (l.prototype.modInverse = me),
          (l.prototype.pow = ei),
          (l.prototype.gcd = ti),
          (l.prototype.isProbablePrime = ri);
        const _r = l;
        var Lr = function (i, s) {
            (this.modulus = new _r(i, 16)),
              (this.encryptionExponent = new _r(s, 16));
          },
          Ur = {
            base64:
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            encode: function (i) {
              if (!i) return !1;
              var s = "",
                o,
                f,
                d,
                w,
                R,
                T,
                K,
                H = 0;
              do
                (o = i.charCodeAt(H++)),
                  (f = i.charCodeAt(H++)),
                  (d = i.charCodeAt(H++)),
                  (w = o >> 2),
                  (R = ((o & 3) << 4) | (f >> 4)),
                  (T = ((f & 15) << 2) | (d >> 6)),
                  (K = d & 63),
                  isNaN(f) ? (T = K = 64) : isNaN(d) && (K = 64),
                  (s +=
                    this.base64.charAt(w) +
                    this.base64.charAt(R) +
                    this.base64.charAt(T) +
                    this.base64.charAt(K));
              while (H < i.length);
              return s;
            },
            decode: function (i) {
              if (!i) return !1;
              i = i.replace(/[^A-Za-z0-9\+\/\=]/g, "");
              var s = "",
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
                  (s += String.fromCharCode((o << 2) | (f >> 4))),
                  d != 64 &&
                    (s += String.fromCharCode(((f & 15) << 4) | (d >> 2))),
                  w != 64 && (s += String.fromCharCode(((d & 3) << 6) | w));
              while (R < i.length);
              return s;
            },
          },
          fi = {
            hex: "0123456789abcdef",
            encode: function (i) {
              if (!i) return !1;
              var s = "",
                o,
                f = 0;
              do
                (o = i.charCodeAt(f++)),
                  (s +=
                    this.hex.charAt((o >> 4) & 15) + this.hex.charAt(o & 15));
              while (f < i.length);
              return s;
            },
            decode: function (i) {
              if (!i) return !1;
              i = i.replace(/[^0-9abcdef]/g, "");
              var s = "",
                o = 0;
              do
                s += String.fromCharCode(
                  ((this.hex.indexOf(i.charAt(o++)) << 4) & 240) |
                    (this.hex.indexOf(i.charAt(o++)) & 15),
                );
              while (o < i.length);
              return s;
            },
          },
          Nr = {
            getPublicKey: function (i, s) {
              return new Lr(i, s);
            },
            encrypt: function (i, s) {
              return !s ||
                ((i = this.pkcs1pad2(i, (s.modulus.bitLength() + 7) >> 3)),
                !i) ||
                ((i = i.modPowInt(s.encryptionExponent, s.modulus)), !i)
                ? !1
                : ((i = i.toString(16)),
                  (i.length & 1) == 1 && (i = "0" + i),
                  Ur.encode(fi.decode(i)));
            },
            pkcs1pad2: function (i, s) {
              if (s < i.length + 11) return null;
              for (var o = [], f = i.length - 1; f >= 0 && s > 0; )
                o[--s] = i.charCodeAt(f--);
              for (o[--s] = 0; s > 2; )
                o[--s] = Math.floor(Math.random() * 254) + 1;
              return (o[--s] = 2), (o[--s] = 0), new _r(o);
            },
          };
        const hi = Nr;
      },
    },
  ]);
})();
