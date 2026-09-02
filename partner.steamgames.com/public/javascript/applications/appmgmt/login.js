/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [6966],
    {
      37812: (je, ze, x) => {
        "use strict";
        x.r(ze), x.d(ze, { default: () => ge });
        var d = x(7850),
          fe = x(90626),
          M = x(88003),
          m = x(2801),
          e = x(1317),
          ar = x(94276),
          ve = x(13018),
          P = x(3166),
          Se = x(8059);
        function ge() {
          return (
            (0, fe.useEffect)(
              () => (
                (window.g_ShowLoginDialog = (T) =>
                  (0, M.pg)((0, d.jsx)(ae, { redirectUrl: T }), window, {
                    popupWidth: 700,
                    popupHeight: 440,
                  })),
                () => {
                  delete window.g_ShowLoginDialog;
                }
              ),
              [],
            ),
            null
          );
        }
        function ae(T) {
          const { redirectUrl: Rr = P.TS.PARTNER_BASE_URL, closeModal: Ue } = T,
            ne = (0, fe.useRef)(
              new ve.D(P.TS.WEBAPI_BASE_URL).GetServiceTransport(),
            ).current,
            [Fe, Xe] = (0, fe.useState)(!1),
            F = (ur) => {
              ur == Se.wI.k_PrimaryDomainFail
                ? Xe(!0)
                : window.location.assign(Rr);
            };
          return (0, d.jsx)(m.x_, {
            onEscKeypress: Ue,
            hideTopBar: !0,
            bDisableBackgroundDismiss: !0,
            children: Fe
              ? (0, d.jsx)(e.Fn, {})
              : (0, d.jsx)(e.YN, {
                  platform: ar.SS.tS,
                  transport: ne,
                  onComplete: F,
                  autoFocus: !0,
                  theme: "modal",
                  redirectUrl: Rr,
                }),
          });
        }
      },
      95039: (je, ze, x) => {
        "use strict";
        x.d(ze, { fH: () => fe, nW: () => M });
        const d = null,
          fe = 0,
          M = 1;
      },
      94276: (je, ze, x) => {
        "use strict";
        x.d(ze, {
          kX: () => Ne,
          iP: () => $,
          R9: () => K,
          tS: () => Z,
          qu: () => V,
          Ev: () => X,
          Qc: () => pr,
          TY: () => d,
          SS: () => fe,
        });
        var d = {};
        x.r(d),
          x.d(d, {
            bH: () => T,
            x0: () => Rr,
            Xs: () => ae,
            $Y: () => Ue,
            ig: () => ne,
            WM: () => ge,
            oP: () => Se,
          });
        var fe = {};
        x.r(fe), x.d(fe, { w0: () => F, tS: () => ur });
        var M = x(80613),
          m = x.n(M),
          e = x(75245),
          ar = x(35038),
          ve = x(95039),
          P = x(47997);
        const Se = 0,
          ge = 1,
          ae = 2,
          T = 3,
          Rr = 4,
          Ue = 5,
          ne = 6,
          Fe = 7,
          Xe = 0,
          F = 1,
          ur = 2,
          mr = 3,
          ee = 0,
          ie = 1,
          I = 2,
          R = 3,
          _ = 4,
          v = 5,
          lr = 6,
          E = 7;
        function D(h) {
          return "unknown ECaptchaAnnotation ( " + h + " )";
        }
        function be(h) {
          return "unknown EAuthSessionSecurityHistory ( " + h + " )";
        }
        function De(h) {
          return "unknown EAuthenticationType ( " + h + " )";
        }
        function Ar(h) {
          return "unknown EAuthSessionGuardType ( " + h + " )";
        }
        function Pe(h) {
          return "unknown EAuthTokenPlatformType ( " + h + " )";
        }
        function Ie(h) {
          return "unknown EAuthTokenAppType ( " + h + " )";
        }
        function qe(h) {
          return "unknown ETokenRenewalType ( " + h + " )";
        }
        function A(h) {
          return "unknown EAuthTokenRevokeAction ( " + h + " )";
        }
        function W(h) {
          return "unknown EAuthTokenState ( " + h + " )";
        }
        function c(h) {
          return "unknown ECaptchaUsage ( " + h + " )";
        }
        function mt(h) {
          return "unknown ECaptchaType ( " + h + " )";
        }
        function dt(h) {
          return "unknown ECaptchaDifficulty ( " + h + " )";
        }
        function Jr(h) {
          return "unknown ERiskLevel ( " + h + " )";
        }
        function Tr(h) {
          return "unknown ETokenRiskFactor ( " + h + " )";
        }
        function jr(h) {
          return "unknown EConfirmationState ( " + h + " )";
        }
        function Qr(h) {
          return "unknown EConfirmationRequestType ( " + h + " )";
        }
        class V extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              V.prototype.account_name || e.Sg(V.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              V.sm_m ||
                (V.sm_m = {
                  proto: V,
                  fields: {
                    account_name: {
                      n: 1,
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
          static toObject(r, s) {
            return e.BT(V.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(V.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (m().BinaryReader)(r),
              y = new V();
            return V.deserializeBinaryFromReader(y, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(V.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return V.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(V.M(), r, s);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              V.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_GetPasswordRSAPublicKey_Request";
          }
        }
        class Q extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Q.prototype.publickey_mod || e.Sg(Q.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Q.sm_m ||
                (Q.sm_m = {
                  proto: Q,
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
              Q.sm_m
            );
          }
          static MBF() {
            return Q.sm_mbf || (Q.sm_mbf = e.w0(Q.M())), Q.sm_mbf;
          }
          toObject(r = !1) {
            return Q.toObject(r, this);
          }
          static toObject(r, s) {
            return e.BT(Q.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(Q.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (m().BinaryReader)(r),
              y = new Q();
            return Q.deserializeBinaryFromReader(y, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(Q.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Q.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(Q.M(), r, s);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Q.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_GetPasswordRSAPublicKey_Response";
          }
        }
        class Z extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Z.prototype.device_friendly_name || e.Sg(Z.M()),
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
              Z.sm_m
            );
          }
          static MBF() {
            return Z.sm_mbf || (Z.sm_mbf = e.w0(Z.M())), Z.sm_mbf;
          }
          toObject(r = !1) {
            return Z.toObject(r, this);
          }
          static toObject(r, s) {
            return e.BT(Z.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(Z.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (m().BinaryReader)(r),
              y = new Z();
            return Z.deserializeBinaryFromReader(y, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(Z.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Z.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(Z.M(), r, s);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Z.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_DeviceDetails";
          }
        }
        class Y extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Y.prototype.confirmation_type || e.Sg(Y.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Y.sm_m ||
                (Y.sm_m = {
                  proto: Y,
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
              Y.sm_m
            );
          }
          static MBF() {
            return Y.sm_mbf || (Y.sm_mbf = e.w0(Y.M())), Y.sm_mbf;
          }
          toObject(r = !1) {
            return Y.toObject(r, this);
          }
          static toObject(r, s) {
            return e.BT(Y.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(Y.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (m().BinaryReader)(r),
              y = new Y();
            return Y.deserializeBinaryFromReader(y, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(Y.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Y.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(Y.M(), r, s);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Y.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_AllowedConfirmation";
          }
        }
        class K extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              K.prototype.device_friendly_name || e.Sg(K.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              K.sm_m ||
                (K.sm_m = {
                  proto: K,
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
                    device_details: { n: 3, c: Z },
                    website_id: {
                      n: 4,
                      d: "Unknown",
                      br: e.qM.readString,
                      bw: e.gp.writeString,
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
          static toObject(r, s) {
            return e.BT(K.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(K.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (m().BinaryReader)(r),
              y = new K();
            return K.deserializeBinaryFromReader(y, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(K.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return K.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(K.M(), r, s);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              K.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_BeginAuthSessionViaQR_Request";
          }
        }
        class q extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              q.prototype.client_id || e.Sg(q.M()),
              M.Message.initialize(this, r, 0, -1, [5], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              q.sm_m ||
                (q.sm_m = {
                  proto: q,
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
                    allowed_confirmations: { n: 5, c: Y, r: !0, q: !0 },
                    version: { n: 6, br: e.qM.readInt32, bw: e.gp.writeInt32 },
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
          static toObject(r, s) {
            return e.BT(q.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(q.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (m().BinaryReader)(r),
              y = new q();
            return q.deserializeBinaryFromReader(y, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(q.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return q.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(q.M(), r, s);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              q.serializeBinaryToWriter(this, r), r.getResultBase64String()
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
                      d: ve.nW,
                      br: e.qM.readEnum,
                      bw: e.gp.writeEnum,
                    },
                    website_id: {
                      n: 8,
                      d: "Unknown",
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    device_details: { n: 9, c: Z },
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
          static toObject(r, s) {
            return e.BT($.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq($.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (m().BinaryReader)(r),
              y = new $();
            return $.deserializeBinaryFromReader(y, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj($.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return $.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0($.M(), r, s);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              $.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_BeginAuthSessionViaCredentials_Request";
          }
        }
        class cr extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              cr.prototype.client_id || e.Sg(cr.M()),
              M.Message.initialize(this, r, 0, -1, [4], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              cr.sm_m ||
                (cr.sm_m = {
                  proto: cr,
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
                    allowed_confirmations: { n: 4, c: Y, r: !0, q: !0 },
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
              cr.sm_m
            );
          }
          static MBF() {
            return cr.sm_mbf || (cr.sm_mbf = e.w0(cr.M())), cr.sm_mbf;
          }
          toObject(r = !1) {
            return cr.toObject(r, this);
          }
          static toObject(r, s) {
            return e.BT(cr.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(cr.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (m().BinaryReader)(r),
              y = new cr();
            return cr.deserializeBinaryFromReader(y, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(cr.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return cr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(cr.M(), r, s);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              cr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_BeginAuthSessionViaCredentials_Response";
          }
        }
        class X extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              X.prototype.client_id || e.Sg(X.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              X.sm_m ||
                (X.sm_m = {
                  proto: X,
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
              X.sm_m
            );
          }
          static MBF() {
            return X.sm_mbf || (X.sm_mbf = e.w0(X.M())), X.sm_mbf;
          }
          toObject(r = !1) {
            return X.toObject(r, this);
          }
          static toObject(r, s) {
            return e.BT(X.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(X.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (m().BinaryReader)(r),
              y = new X();
            return X.deserializeBinaryFromReader(y, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(X.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return X.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(X.M(), r, s);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              X.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_PollAuthSessionStatus_Request";
          }
        }
        class J extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              J.prototype.new_client_id || e.Sg(J.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              J.sm_m ||
                (J.sm_m = {
                  proto: J,
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
              J.sm_m
            );
          }
          static MBF() {
            return J.sm_mbf || (J.sm_mbf = e.w0(J.M())), J.sm_mbf;
          }
          toObject(r = !1) {
            return J.toObject(r, this);
          }
          static toObject(r, s) {
            return e.BT(J.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(J.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (m().BinaryReader)(r),
              y = new J();
            return J.deserializeBinaryFromReader(y, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(J.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return J.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(J.M(), r, s);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              J.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_PollAuthSessionStatus_Response";
          }
        }
        class G extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              G.prototype.client_id || e.Sg(G.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              G.sm_m ||
                (G.sm_m = {
                  proto: G,
                  fields: {
                    client_id: {
                      n: 1,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
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
          static toObject(r, s) {
            return e.BT(G.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(G.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (m().BinaryReader)(r),
              y = new G();
            return G.deserializeBinaryFromReader(y, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(G.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return G.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(G.M(), r, s);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              G.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_GetAuthSessionInfo_Request";
          }
        }
        class k extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              k.prototype.ip || e.Sg(k.M()),
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
              k.sm_m
            );
          }
          static MBF() {
            return k.sm_mbf || (k.sm_mbf = e.w0(k.M())), k.sm_mbf;
          }
          toObject(r = !1) {
            return k.toObject(r, this);
          }
          static toObject(r, s) {
            return e.BT(k.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(k.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (m().BinaryReader)(r),
              y = new k();
            return k.deserializeBinaryFromReader(y, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(k.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return k.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(k.M(), r, s);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              k.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_GetAuthSessionInfo_Response";
          }
        }
        class C extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              C.prototype.client_id || e.Sg(C.M()),
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
              C.sm_m
            );
          }
          static MBF() {
            return C.sm_mbf || (C.sm_mbf = e.w0(C.M())), C.sm_mbf;
          }
          toObject(r = !1) {
            return C.toObject(r, this);
          }
          static toObject(r, s) {
            return e.BT(C.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(C.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (m().BinaryReader)(r),
              y = new C();
            return C.deserializeBinaryFromReader(y, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(C.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return C.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(C.M(), r, s);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              C.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_GetAuthSessionRiskInfo_Request";
          }
        }
        class br extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              br.prototype.location_confirmer || e.Sg(br.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              br.sm_m ||
                (br.sm_m = {
                  proto: br,
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
              br.sm_m
            );
          }
          static MBF() {
            return br.sm_mbf || (br.sm_mbf = e.w0(br.M())), br.sm_mbf;
          }
          toObject(r = !1) {
            return br.toObject(r, this);
          }
          static toObject(r, s) {
            return e.BT(br.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(br.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (m().BinaryReader)(r),
              y = new br();
            return br.deserializeBinaryFromReader(y, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(br.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return br.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(br.M(), r, s);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              br.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_GetAuthSessionRiskInfo_Response";
          }
        }
        class vr extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              vr.prototype.client_id || e.Sg(vr.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              vr.sm_m ||
                (vr.sm_m = {
                  proto: vr,
                  fields: {
                    client_id: {
                      n: 1,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    results: { n: 2, c: Dr },
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
              vr.sm_m
            );
          }
          static MBF() {
            return vr.sm_mbf || (vr.sm_mbf = e.w0(vr.M())), vr.sm_mbf;
          }
          toObject(r = !1) {
            return vr.toObject(r, this);
          }
          static toObject(r, s) {
            return e.BT(vr.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(vr.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (m().BinaryReader)(r),
              y = new vr();
            return vr.deserializeBinaryFromReader(y, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(vr.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return vr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(vr.M(), r, s);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              vr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_NotifyRiskQuizResults_Notification";
          }
        }
        class Dr extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Dr.prototype.platform || e.Sg(Dr.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Dr.sm_m ||
                (Dr.sm_m = {
                  proto: Dr,
                  fields: {
                    platform: { n: 1, br: e.qM.readBool, bw: e.gp.writeBool },
                    location: { n: 2, br: e.qM.readBool, bw: e.gp.writeBool },
                    action: { n: 3, br: e.qM.readBool, bw: e.gp.writeBool },
                  },
                }),
              Dr.sm_m
            );
          }
          static MBF() {
            return Dr.sm_mbf || (Dr.sm_mbf = e.w0(Dr.M())), Dr.sm_mbf;
          }
          toObject(r = !1) {
            return Dr.toObject(r, this);
          }
          static toObject(r, s) {
            return e.BT(Dr.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(Dr.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (m().BinaryReader)(r),
              y = new Dr();
            return Dr.deserializeBinaryFromReader(y, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(Dr.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Dr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(Dr.M(), r, s);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Dr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_NotifyRiskQuizResults_Notification_RiskQuizResults";
          }
        }
        class he extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return he.toObject(r, this);
          }
          static toObject(r, s) {
            return r ? { $jspbMessageInstance: s } : {};
          }
          static fromObject(r) {
            return new he();
          }
          static deserializeBinary(r) {
            let s = new (m().BinaryReader)(r),
              y = new he();
            return he.deserializeBinaryFromReader(y, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return r;
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return he.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {}
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              he.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_GetAuthSessionsForAccount_Request";
          }
        }
        class dr extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              dr.prototype.client_ids || e.Sg(dr.M()),
              M.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              dr.sm_m ||
                (dr.sm_m = {
                  proto: dr,
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
              dr.sm_m
            );
          }
          static MBF() {
            return dr.sm_mbf || (dr.sm_mbf = e.w0(dr.M())), dr.sm_mbf;
          }
          toObject(r = !1) {
            return dr.toObject(r, this);
          }
          static toObject(r, s) {
            return e.BT(dr.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(dr.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (m().BinaryReader)(r),
              y = new dr();
            return dr.deserializeBinaryFromReader(y, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(dr.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return dr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(dr.M(), r, s);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              dr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_GetAuthSessionsForAccount_Response";
          }
        }
        class Pr extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Pr.prototype.version || e.Sg(Pr.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Pr.sm_m ||
                (Pr.sm_m = {
                  proto: Pr,
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
                      d: ve.nW,
                      br: e.qM.readEnum,
                      bw: e.gp.writeEnum,
                    },
                  },
                }),
              Pr.sm_m
            );
          }
          static MBF() {
            return Pr.sm_mbf || (Pr.sm_mbf = e.w0(Pr.M())), Pr.sm_mbf;
          }
          toObject(r = !1) {
            return Pr.toObject(r, this);
          }
          static toObject(r, s) {
            return e.BT(Pr.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(Pr.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (m().BinaryReader)(r),
              y = new Pr();
            return Pr.deserializeBinaryFromReader(y, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(Pr.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Pr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(Pr.M(), r, s);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Pr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request";
          }
        }
        class te extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return te.toObject(r, this);
          }
          static toObject(r, s) {
            return r ? { $jspbMessageInstance: s } : {};
          }
          static fromObject(r) {
            return new te();
          }
          static deserializeBinary(r) {
            let s = new (m().BinaryReader)(r),
              y = new te();
            return te.deserializeBinaryFromReader(y, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return r;
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return te.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {}
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              te.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response";
          }
        }
        class pr extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              pr.prototype.client_id || e.Sg(pr.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              pr.sm_m ||
                (pr.sm_m = {
                  proto: pr,
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
              pr.sm_m
            );
          }
          static MBF() {
            return pr.sm_mbf || (pr.sm_mbf = e.w0(pr.M())), pr.sm_mbf;
          }
          toObject(r = !1) {
            return pr.toObject(r, this);
          }
          static toObject(r, s) {
            return e.BT(pr.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(pr.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (m().BinaryReader)(r),
              y = new pr();
            return pr.deserializeBinaryFromReader(y, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(pr.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return pr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(pr.M(), r, s);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              pr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request";
          }
        }
        class Or extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Or.prototype.agreement_session_url || e.Sg(Or.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Or.sm_m ||
                (Or.sm_m = {
                  proto: Or,
                  fields: {
                    agreement_session_url: {
                      n: 7,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
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
          static toObject(r, s) {
            return e.BT(Or.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(Or.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (m().BinaryReader)(r),
              y = new Or();
            return Or.deserializeBinaryFromReader(y, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(Or.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Or.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(Or.M(), r, s);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Or.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response";
          }
        }
        class or extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              or.prototype.refresh_token || e.Sg(or.M()),
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
              or.sm_m
            );
          }
          static MBF() {
            return or.sm_mbf || (or.sm_mbf = e.w0(or.M())), or.sm_mbf;
          }
          toObject(r = !1) {
            return or.toObject(r, this);
          }
          static toObject(r, s) {
            return e.BT(or.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(or.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (m().BinaryReader)(r),
              y = new or();
            return or.deserializeBinaryFromReader(y, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(or.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return or.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(or.M(), r, s);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              or.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_AccessToken_GenerateForApp_Request";
          }
        }
        class Br extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Br.prototype.access_token || e.Sg(Br.M()),
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
              Br.sm_m
            );
          }
          static MBF() {
            return Br.sm_mbf || (Br.sm_mbf = e.w0(Br.M())), Br.sm_mbf;
          }
          toObject(r = !1) {
            return Br.toObject(r, this);
          }
          static toObject(r, s) {
            return e.BT(Br.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(Br.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (m().BinaryReader)(r),
              y = new Br();
            return Br.deserializeBinaryFromReader(y, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(Br.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Br.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(Br.M(), r, s);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Br.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_AccessToken_GenerateForApp_Response";
          }
        }
        class fr extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              fr.prototype.include_revoked || e.Sg(fr.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              fr.sm_m ||
                (fr.sm_m = {
                  proto: fr,
                  fields: {
                    include_revoked: {
                      n: 1,
                      d: !1,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
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
          static toObject(r, s) {
            return e.BT(fr.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(fr.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (m().BinaryReader)(r),
              y = new fr();
            return fr.deserializeBinaryFromReader(y, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(fr.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return fr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(fr.M(), r, s);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              fr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_RefreshToken_Enumerate_Request";
          }
        }
        class Mr extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Mr.prototype.refresh_tokens || e.Sg(Mr.M()),
              M.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Mr.sm_m ||
                (Mr.sm_m = {
                  proto: Mr,
                  fields: {
                    refresh_tokens: { n: 1, c: Sr, r: !0, q: !0 },
                    requesting_token: {
                      n: 2,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
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
          static toObject(r, s) {
            return e.BT(Mr.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(Mr.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (m().BinaryReader)(r),
              y = new Mr();
            return Mr.deserializeBinaryFromReader(y, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(Mr.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Mr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(Mr.M(), r, s);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Mr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_RefreshToken_Enumerate_Response";
          }
        }
        class Ir extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ir.prototype.time || e.Sg(Ir.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ir.sm_m ||
                (Ir.sm_m = {
                  proto: Ir,
                  fields: {
                    time: { n: 1, br: e.qM.readUint32, bw: e.gp.writeUint32 },
                    ip: { n: 2, c: P.kK },
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
              Ir.sm_m
            );
          }
          static MBF() {
            return Ir.sm_mbf || (Ir.sm_mbf = e.w0(Ir.M())), Ir.sm_mbf;
          }
          toObject(r = !1) {
            return Ir.toObject(r, this);
          }
          static toObject(r, s) {
            return e.BT(Ir.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(Ir.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (m().BinaryReader)(r),
              y = new Ir();
            return Ir.deserializeBinaryFromReader(y, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(Ir.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Ir.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(Ir.M(), r, s);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Ir.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_RefreshToken_Enumerate_Response_TokenUsageEvent";
          }
        }
        class Sr extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Sr.prototype.token_id || e.Sg(Sr.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Sr.sm_m ||
                (Sr.sm_m = {
                  proto: Sr,
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
                    first_seen: { n: 9, c: Ir },
                    last_seen: { n: 10, c: Ir },
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
              Sr.sm_m
            );
          }
          static MBF() {
            return Sr.sm_mbf || (Sr.sm_mbf = e.w0(Sr.M())), Sr.sm_mbf;
          }
          toObject(r = !1) {
            return Sr.toObject(r, this);
          }
          static toObject(r, s) {
            return e.BT(Sr.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(Sr.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (m().BinaryReader)(r),
              y = new Sr();
            return Sr.deserializeBinaryFromReader(y, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(Sr.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Sr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(Sr.M(), r, s);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Sr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_RefreshToken_Enumerate_Response_RefreshTokenDescription";
          }
        }
        class Zr extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Zr.prototype.token || e.Sg(Zr.M()),
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
                    token: { n: 1, br: e.qM.readString, bw: e.gp.writeString },
                    revoke_action: {
                      n: 2,
                      d: ie,
                      br: e.qM.readEnum,
                      bw: e.gp.writeEnum,
                    },
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
          static toObject(r, s) {
            return e.BT(Zr.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(Zr.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (m().BinaryReader)(r),
              y = new Zr();
            return Zr.deserializeBinaryFromReader(y, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(Zr.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Zr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(Zr.M(), r, s);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Zr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_Token_Revoke_Request";
          }
        }
        class se extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return se.toObject(r, this);
          }
          static toObject(r, s) {
            return r ? { $jspbMessageInstance: s } : {};
          }
          static fromObject(r) {
            return new se();
          }
          static deserializeBinary(r) {
            let s = new (m().BinaryReader)(r),
              y = new se();
            return se.deserializeBinaryFromReader(y, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return r;
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return se.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {}
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              se.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_Token_Revoke_Response";
          }
        }
        class wr extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              wr.prototype.token_id || e.Sg(wr.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
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
                      d: ie,
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
              wr.sm_m
            );
          }
          static MBF() {
            return wr.sm_mbf || (wr.sm_mbf = e.w0(wr.M())), wr.sm_mbf;
          }
          toObject(r = !1) {
            return wr.toObject(r, this);
          }
          static toObject(r, s) {
            return e.BT(wr.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(wr.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (m().BinaryReader)(r),
              y = new wr();
            return wr.deserializeBinaryFromReader(y, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(wr.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return wr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(wr.M(), r, s);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              wr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_RefreshToken_Revoke_Request";
          }
        }
        class Me extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Me.toObject(r, this);
          }
          static toObject(r, s) {
            return r ? { $jspbMessageInstance: s } : {};
          }
          static fromObject(r) {
            return new Me();
          }
          static deserializeBinary(r) {
            let s = new (m().BinaryReader)(r),
              y = new Me();
            return Me.deserializeBinaryFromReader(y, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return r;
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Me.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {}
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Me.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthentication_RefreshToken_Revoke_Response";
          }
        }
        class xr extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              xr.prototype.token_id || e.Sg(xr.M()),
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
                    first_seen: { n: 11, c: Lr },
                    last_seen: { n: 12, c: Lr },
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
          static toObject(r, s) {
            return e.BT(xr.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(xr.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (m().BinaryReader)(r),
              y = new xr();
            return xr.deserializeBinaryFromReader(y, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(xr.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return xr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(xr.M(), r, s);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              xr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSupportRefreshTokenDescription";
          }
        }
        class Lr extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Lr.prototype.time || e.Sg(Lr.M()),
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
                    time: { n: 1, br: e.qM.readUint32, bw: e.gp.writeUint32 },
                    ip: { n: 2, c: P.kK },
                    country: {
                      n: 3,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    state: { n: 4, br: e.qM.readString, bw: e.gp.writeString },
                    city: { n: 5, br: e.qM.readString, bw: e.gp.writeString },
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
          static toObject(r, s) {
            return e.BT(Lr.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(Lr.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (m().BinaryReader)(r),
              y = new Lr();
            return Lr.deserializeBinaryFromReader(y, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(Lr.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Lr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(Lr.M(), r, s);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Lr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSupportRefreshTokenDescription_TokenUsageEvent";
          }
        }
        class Wr extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Wr.prototype.action || e.Sg(Wr.M()),
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
                    action: { n: 1, br: e.qM.readInt32, bw: e.gp.writeInt32 },
                    time: { n: 2, br: e.qM.readUint32, bw: e.gp.writeUint32 },
                    ip: { n: 3, c: P.kK },
                    actor: {
                      n: 4,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
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
          static toObject(r, s) {
            return e.BT(Wr.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(Wr.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (m().BinaryReader)(r),
              y = new Wr();
            return Wr.deserializeBinaryFromReader(y, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(Wr.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Wr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(Wr.M(), r, s);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Wr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSupportRefreshTokenAudit";
          }
        }
        class Nr extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Nr.prototype.steamid || e.Sg(Nr.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Nr.sm_m ||
                (Nr.sm_m = {
                  proto: Nr,
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
              Nr.sm_m
            );
          }
          static MBF() {
            return Nr.sm_mbf || (Nr.sm_mbf = e.w0(Nr.M())), Nr.sm_mbf;
          }
          toObject(r = !1) {
            return Nr.toObject(r, this);
          }
          static toObject(r, s) {
            return e.BT(Nr.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(Nr.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (m().BinaryReader)(r),
              y = new Nr();
            return Nr.deserializeBinaryFromReader(y, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(Nr.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Nr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(Nr.M(), r, s);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Nr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthenticationSupport_QueryRefreshTokensByAccount_Request";
          }
        }
        class nr extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              nr.prototype.refresh_tokens || e.Sg(nr.M()),
              M.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              nr.sm_m ||
                (nr.sm_m = {
                  proto: nr,
                  fields: {
                    refresh_tokens: { n: 1, c: xr, r: !0, q: !0 },
                    last_token_reset: {
                      n: 2,
                      br: e.qM.readInt32,
                      bw: e.gp.writeInt32,
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
          static toObject(r, s) {
            return e.BT(nr.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(nr.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (m().BinaryReader)(r),
              y = new nr();
            return nr.deserializeBinaryFromReader(y, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(nr.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return nr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(nr.M(), r, s);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              nr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthenticationSupport_QueryRefreshTokensByAccount_Response";
          }
        }
        class Vr extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Vr.prototype.token_id || e.Sg(Vr.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Vr.sm_m ||
                (Vr.sm_m = {
                  proto: Vr,
                  fields: {
                    token_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
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
          static toObject(r, s) {
            return e.BT(Vr.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(Vr.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (m().BinaryReader)(r),
              y = new Vr();
            return Vr.deserializeBinaryFromReader(y, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(Vr.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Vr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(Vr.M(), r, s);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Vr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthenticationSupport_QueryRefreshTokenByID_Request";
          }
        }
        class qr extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              qr.prototype.refresh_tokens || e.Sg(qr.M()),
              M.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              qr.sm_m ||
                (qr.sm_m = {
                  proto: qr,
                  fields: { refresh_tokens: { n: 1, c: xr, r: !0, q: !0 } },
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
          static toObject(r, s) {
            return e.BT(qr.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(qr.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (m().BinaryReader)(r),
              y = new qr();
            return qr.deserializeBinaryFromReader(y, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(qr.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return qr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(qr.M(), r, s);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              qr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthenticationSupport_QueryRefreshTokenByID_Response";
          }
        }
        class Hr extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Hr.prototype.token_id || e.Sg(Hr.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Hr.sm_m ||
                (Hr.sm_m = {
                  proto: Hr,
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
              Hr.sm_m
            );
          }
          static MBF() {
            return Hr.sm_mbf || (Hr.sm_mbf = e.w0(Hr.M())), Hr.sm_mbf;
          }
          toObject(r = !1) {
            return Hr.toObject(r, this);
          }
          static toObject(r, s) {
            return e.BT(Hr.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(Hr.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (m().BinaryReader)(r),
              y = new Hr();
            return Hr.deserializeBinaryFromReader(y, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(Hr.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Hr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(Hr.M(), r, s);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Hr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthenticationSupport_RevokeToken_Request";
          }
        }
        class Ee extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Ee.toObject(r, this);
          }
          static toObject(r, s) {
            return r ? { $jspbMessageInstance: s } : {};
          }
          static fromObject(r) {
            return new Ee();
          }
          static deserializeBinary(r) {
            let s = new (m().BinaryReader)(r),
              y = new Ee();
            return Ee.deserializeBinaryFromReader(y, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return r;
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Ee.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {}
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Ee.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthenticationSupport_RevokeToken_Response";
          }
        }
        class Yr extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Yr.prototype.token_id || e.Sg(Yr.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Yr.sm_m ||
                (Yr.sm_m = {
                  proto: Yr,
                  fields: {
                    token_id: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                  },
                }),
              Yr.sm_m
            );
          }
          static MBF() {
            return Yr.sm_mbf || (Yr.sm_mbf = e.w0(Yr.M())), Yr.sm_mbf;
          }
          toObject(r = !1) {
            return Yr.toObject(r, this);
          }
          static toObject(r, s) {
            return e.BT(Yr.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(Yr.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (m().BinaryReader)(r),
              y = new Yr();
            return Yr.deserializeBinaryFromReader(y, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(Yr.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Yr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(Yr.M(), r, s);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Yr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthenticationSupport_GetTokenHistory_Request";
          }
        }
        class Ur extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ur.prototype.history || e.Sg(Ur.M()),
              M.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ur.sm_m ||
                (Ur.sm_m = {
                  proto: Ur,
                  fields: { history: { n: 1, c: Wr, r: !0, q: !0 } },
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
          static toObject(r, s) {
            return e.BT(Ur.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(Ur.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (m().BinaryReader)(r),
              y = new Ur();
            return Ur.deserializeBinaryFromReader(y, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(Ur.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Ur.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(Ur.M(), r, s);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Ur.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthenticationSupport_GetTokenHistory_Response";
          }
        }
        class Fr extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Fr.prototype.steamid || e.Sg(Fr.M()),
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
              Fr.sm_m
            );
          }
          static MBF() {
            return Fr.sm_mbf || (Fr.sm_mbf = e.w0(Fr.M())), Fr.sm_mbf;
          }
          toObject(r = !1) {
            return Fr.toObject(r, this);
          }
          static toObject(r, s) {
            return e.BT(Fr.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(Fr.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (m().BinaryReader)(r),
              y = new Fr();
            return Fr.deserializeBinaryFromReader(y, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(Fr.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Fr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(Fr.M(), r, s);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Fr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthenticationSupport_MarkTokenCompromised_Request";
          }
        }
        class xe extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return xe.toObject(r, this);
          }
          static toObject(r, s) {
            return r ? { $jspbMessageInstance: s } : {};
          }
          static fromObject(r) {
            return new xe();
          }
          static deserializeBinary(r) {
            let s = new (m().BinaryReader)(r),
              y = new xe();
            return xe.deserializeBinaryFromReader(y, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return r;
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return xe.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {}
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              xe.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAuthenticationSupport_MarkTokenCompromised_Response";
          }
        }
        class sr extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              sr.prototype.platform || e.Sg(sr.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              sr.sm_m ||
                (sr.sm_m = {
                  proto: sr,
                  fields: {
                    platform: {
                      n: 1,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    appid: { n: 2, br: e.qM.readUint32, bw: e.gp.writeUint32 },
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
          static toObject(r, s) {
            return e.BT(sr.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(sr.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (m().BinaryReader)(r),
              y = new sr();
            return sr.deserializeBinaryFromReader(y, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(sr.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return sr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(sr.M(), r, s);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              sr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloudGaming_CreateNonce_Request";
          }
        }
        class Kr extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Kr.prototype.nonce || e.Sg(Kr.M()),
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
                    nonce: { n: 1, br: e.qM.readString, bw: e.gp.writeString },
                    expiry: { n: 2, br: e.qM.readUint32, bw: e.gp.writeUint32 },
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
          static toObject(r, s) {
            return e.BT(Kr.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(Kr.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (m().BinaryReader)(r),
              y = new Kr();
            return Kr.deserializeBinaryFromReader(y, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(Kr.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Kr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(Kr.M(), r, s);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Kr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloudGaming_CreateNonce_Response";
          }
        }
        class $r extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              $r.prototype.appid || e.Sg($r.M()),
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
                    appid: { n: 1, br: e.qM.readUint32, bw: e.gp.writeUint32 },
                    minutes_remaining: {
                      n: 2,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
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
          static toObject(r, s) {
            return e.BT($r.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq($r.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (m().BinaryReader)(r),
              y = new $r();
            return $r.deserializeBinaryFromReader(y, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj($r.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return $r.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0($r.M(), r, s);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              $r.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloudGaming_TimeRemaining";
          }
        }
        class Xr extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Xr.prototype.platform || e.Sg(Xr.M()),
              M.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Xr.sm_m ||
                (Xr.sm_m = {
                  proto: Xr,
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
              Xr.sm_m
            );
          }
          static MBF() {
            return Xr.sm_mbf || (Xr.sm_mbf = e.w0(Xr.M())), Xr.sm_mbf;
          }
          toObject(r = !1) {
            return Xr.toObject(r, this);
          }
          static toObject(r, s) {
            return e.BT(Xr.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(Xr.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (m().BinaryReader)(r),
              y = new Xr();
            return Xr.deserializeBinaryFromReader(y, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(Xr.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return Xr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(Xr.M(), r, s);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              Xr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloudGaming_GetTimeRemaining_Request";
          }
        }
        class hr extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              hr.prototype.entries || e.Sg(hr.M()),
              M.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              hr.sm_m ||
                (hr.sm_m = {
                  proto: hr,
                  fields: { entries: { n: 2, c: $r, r: !0, q: !0 } },
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
          static toObject(r, s) {
            return e.BT(hr.M(), r, s);
          }
          static fromObject(r) {
            return e.Uq(hr.M(), r);
          }
          static deserializeBinary(r) {
            let s = new (m().BinaryReader)(r),
              y = new hr();
            return hr.deserializeBinaryFromReader(y, s);
          }
          static deserializeBinaryFromReader(r, s) {
            return e.zj(hr.MBF(), r, s);
          }
          serializeBinary() {
            var r = new (m().BinaryWriter)();
            return hr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, s) {
            e.i0(hr.M(), r, s);
          }
          serializeBase64String() {
            var r = new (m().BinaryWriter)();
            return (
              hr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CCloudGaming_GetTimeRemaining_Response";
          }
        }
        var Ne;
        ((h) => {
          function r(zr, rr, Er) {
            return zr.SendMsg(
              "Authentication.GetPasswordRSAPublicKey#1",
              (0, ar.I8)(V, rr, Er),
              Q,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          h.GetPasswordRSAPublicKey = r;
          function s(zr, rr, Er) {
            return zr.SendMsg(
              "Authentication.BeginAuthSessionViaQR#1",
              (0, ar.I8)(K, rr, Er),
              q,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          h.BeginAuthSessionViaQR = s;
          function y(zr, rr, Er) {
            return zr.SendMsg(
              "Authentication.BeginAuthSessionViaCredentials#1",
              (0, ar.I8)($, rr, Er),
              cr,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          h.BeginAuthSessionViaCredentials = y;
          function Be(zr, rr, Er) {
            return zr.SendMsg(
              "Authentication.PollAuthSessionStatus#1",
              (0, ar.I8)(X, rr, Er),
              J,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          h.PollAuthSessionStatus = Be;
          function w(zr, rr, Er) {
            return zr.SendMsg(
              "Authentication.GetAuthSessionInfo#1",
              (0, ar.I8)(G, rr, Er),
              k,
              { ePrivilege: 1 },
            );
          }
          h.GetAuthSessionInfo = w;
          function we(zr, rr, Er) {
            return zr.SendMsg(
              "Authentication.GetAuthSessionRiskInfo#1",
              (0, ar.I8)(C, rr, Er),
              br,
              { ePrivilege: 1 },
            );
          }
          h.GetAuthSessionRiskInfo = we;
          function ye(zr, rr) {
            return zr.SendNotification(
              "Authentication.NotifyRiskQuizResults#1",
              (0, ar.I8)(vr, rr),
              { ePrivilege: 1 },
            );
          }
          h.NotifyRiskQuizResults = ye;
          function ue(zr, rr, Er) {
            return zr.SendMsg(
              "Authentication.UpdateAuthSessionWithMobileConfirmation#1",
              (0, ar.I8)(Pr, rr, Er),
              te,
              { ePrivilege: 1 },
            );
          }
          h.UpdateAuthSessionWithMobileConfirmation = ue;
          function Ae(zr, rr, Er) {
            return zr.SendMsg(
              "Authentication.UpdateAuthSessionWithSteamGuardCode#1",
              (0, ar.I8)(pr, rr, Er),
              Or,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          h.UpdateAuthSessionWithSteamGuardCode = Ae;
          function Ge(zr, rr, Er) {
            return zr.SendMsg(
              "Authentication.GenerateAccessTokenForApp#1",
              (0, ar.I8)(or, rr, Er),
              Br,
              { ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }
          h.GenerateAccessTokenForApp = Ge;
          function ke(zr, rr, Er) {
            return zr.SendMsg(
              "Authentication.EnumerateTokens#1",
              (0, ar.I8)(fr, rr, Er),
              Mr,
              { ePrivilege: 1 },
            );
          }
          h.EnumerateTokens = ke;
          function _e(zr, rr, Er) {
            return zr.SendMsg(
              "Authentication.GetAuthSessionsForAccount#1",
              (0, ar.I8)(he, rr, Er),
              dr,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          h.GetAuthSessionsForAccount = _e;
          function rt(zr, rr, Er) {
            return zr.SendMsg(
              "Authentication.RevokeToken#1",
              (0, ar.I8)(Zr, rr, Er),
              se,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          h.RevokeToken = rt;
          function le(zr, rr, Er) {
            return zr.SendMsg(
              "Authentication.RevokeRefreshToken#1",
              (0, ar.I8)(wr, rr, Er),
              Me,
              { ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          h.RevokeRefreshToken = le;
        })(Ne || (Ne = {}));
        var Je;
        ((h) => {
          function r(we, ye, ue) {
            return we.SendMsg(
              "AuthenticationSupport.QueryRefreshTokensByAccount#1",
              (0, ar.I8)(Nr, ye, ue),
              nr,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }
          h.QueryRefreshTokensByAccount = r;
          function s(we, ye, ue) {
            return we.SendMsg(
              "AuthenticationSupport.QueryRefreshTokenByID#1",
              (0, ar.I8)(Vr, ye, ue),
              qr,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }
          h.QueryRefreshTokenByID = s;
          function y(we, ye, ue) {
            return we.SendMsg(
              "AuthenticationSupport.RevokeToken#1",
              (0, ar.I8)(Hr, ye, ue),
              Ee,
              { ePrivilege: 5 },
            );
          }
          h.RevokeToken = y;
          function Be(we, ye, ue) {
            return we.SendMsg(
              "AuthenticationSupport.GetTokenHistory#1",
              (0, ar.I8)(Yr, ye, ue),
              Ur,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }
          h.GetTokenHistory = Be;
          function w(we, ye, ue) {
            return we.SendMsg(
              "AuthenticationSupport.MarkTokenCompromised#1",
              (0, ar.I8)(Fr, ye, ue),
              xe,
              { ePrivilege: 5 },
            );
          }
          h.MarkTokenCompromised = w;
        })(Je || (Je = {}));
        var Te;
        ((h) => {
          function r(y, Be, w) {
            return y.SendMsg(
              "CloudGaming.CreateNonce#1",
              (0, ar.I8)(sr, Be, w),
              Kr,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          h.CreateNonce = r;
          function s(y, Be, w) {
            return y.SendMsg(
              "CloudGaming.GetTimeRemaining#1",
              (0, ar.I8)(Xr, Be, w),
              hr,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          h.GetTimeRemaining = s;
        })(Te || (Te = {}));
      },
      8059: (je, ze, x) => {
        "use strict";
        x.d(ze, {
          FU: () => Xe,
          eF: () => Fe,
          gf: () => ur,
          wI: () => F,
          yp: () => mr,
        });
        var d = x(14947),
          fe = x(41735),
          M = x.n(fe),
          m = x(35038),
          e = x(27066),
          ar = x(72604),
          ve = x(99412),
          P = x(94354),
          Se = x(3166),
          ge = x(94276),
          ae = x(71944),
          T = x(64434),
          Rr = Object.defineProperty,
          Ue = Object.getOwnPropertyDescriptor,
          ne = (I, R, _, v) => {
            for (
              var lr = v > 1 ? void 0 : v ? Ue(R, _) : R, E = I.length - 1, D;
              E >= 0;
              E--
            )
              (D = I[E]) && (lr = (v ? D(R, _, lr) : D(lr)) || lr);
            return v && lr && Rr(R, _, lr), lr;
          },
          Fe = ((I) => (
            (I[(I.None = 0)] = "None"),
            (I[(I.Generic = 1)] = "Generic"),
            (I[(I.Expired = 2)] = "Expired"),
            (I[(I.Network = 3)] = "Network"),
            (I[(I.MoveAuthenticator = 4)] = "MoveAuthenticator"),
            (I[(I.RateLimitExceeded = 5)] = "RateLimitExceeded"),
            (I[(I.AnonymousLogin = 6)] = "AnonymousLogin"),
            I
          ))(Fe || {});
        function Xe(I) {
          const {
            shared_secret: R,
            identity_secret: _,
            secret_1: v,
            status: lr,
            uri: E,
            server_time: D,
            ...be
          } = I;
          return {
            shared_secret: ae.fromByteArray(R),
            identity_secret: ae.fromByteArray(_),
            secret_1: ae.fromByteArray(v),
            ...be,
          };
        }
        var F = ((I) => (
          (I[(I.k_Success = 0)] = "k_Success"),
          (I[(I.k_PrimaryDomainFail = 1)] = "k_PrimaryDomainFail"),
          (I[(I.k_SecondaryDomainFail = 2)] = "k_SecondaryDomainFail"),
          I
        ))(F || {});
        class ur {
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
          constructor(R, _, v, lr) {
            (0, d.Gn)(this),
              (this.m_transport = R),
              (this.m_onCompleteCallback = _),
              (this.m_onDeviceDetailsCallback = v),
              (this.m_onShowAgreement = lr);
          }
          StartPolling(R = !0) {
            this.m_activeTimerID != null && this.StopPolling(),
              R
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
              const R = m.w.Init(ge.Ev);
              R.SetEMsg(P.Kec),
                R.Body().set_client_id(this.m_strClientID),
                R.Body().set_request_id(this.m_rgRequestID),
                this.m_strTokenToRevoke &&
                  R.Body().set_token_to_revoke(this.m_strTokenToRevoke);
              const _ = await ge.kX.PollAuthSessionStatus(this.m_transport, R),
                v = _.GetEResult();
              if (v !== ar.R) {
                if (v === ar.zi) {
                  const Ie = _.Hdr().transport_error();
                  if (
                    ((0, T.ZI)(
                      `Failed to poll auth session. Result ${v}. Transport Error: ${Ie}`,
                    ),
                    Ie === ve.MhR || Ie === ve.VrD)
                  )
                    return (
                      this.m_transport.MakeReady(), this.StartPolling(!1), ar.R
                    );
                }
                if (v === ar.Qo || v === ar.ob) this.m_eFailureState = 2;
                else if (v === ar.h_) this.m_eFailureState = 5;
                else if (v == ar.oH) {
                  if (this.m_onShowAgreement)
                    this.m_onShowAgreement(_.Body().agreement_session_url());
                  else {
                    const Ie = _.Body().agreement_session_url(),
                      qe = document.location.href;
                    window.location.href = `${Ie}&redir=${encodeURIComponent(qe)}`;
                  }
                  return this.m_onCompleteCallback({ bSuccess: !1 }), v;
                } else
                  (0, T.ZI)(`Failed to poll auth session. Result: ${v}`),
                    (this.m_eFailureState = 1);
                return this.m_onCompleteCallback({ bSuccess: !1 }), v;
              }
              const {
                new_challenge_url: lr,
                new_client_id: E,
                refresh_token: D,
                access_token: be,
                account_name: De,
                had_remote_interaction: Ar,
                new_guard_data: Pe,
              } = _.Body().toObject();
              return (
                (this.m_bRemoteInteraction = !!Ar),
                D
                  ? (this.m_onCompleteCallback({
                      bSuccess: !0,
                      strRefreshToken: D,
                      strAccessToken: be,
                      strAccountName: De,
                      strNewGuardData: Pe,
                    }),
                    v)
                  : (lr && (this.m_strChallengeURL = lr),
                    E && (this.m_strClientID = E),
                    this.StartPolling(!1),
                    v)
              );
            } catch (R) {
              return (
                (0, T.ZI)(`Failed to poll auth session. ${R}`),
                (this.m_eFailureState = 1),
                this.m_onCompleteCallback({ bSuccess: !1 }),
                ar.zi
              );
            }
          }
          SetTokenToRevoke(R) {
            this.m_strTokenToRevoke = R;
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
            const R = await this.m_onDeviceDetailsCallback();
            return ge.tS.fromObject(R);
          }
        }
        ne([d.sH], ur.prototype, "m_strChallengeURL", 2),
          ne([d.sH], ur.prototype, "m_bRemoteInteraction", 2),
          ne([d.sH], ur.prototype, "m_eFailureState", 2),
          ne([d.sH], ur.prototype, "m_strExtendedErrorMessage", 2),
          ne([e.o], ur.prototype, "PollForUpdate", 1),
          ne([e.o], ur.prototype, "SetTokenToRevoke", 1);
        function mr(I) {
          const R = new FormData();
          R.append("nonce", I), R.append("sessionid", (0, Se.KC)());
          let _ = new URL(document.location.href);
          const v = new URLSearchParams(_.search);
          v.has("need_password") &&
            (v.delete("need_password"), (_.search = v.toString())),
            R.append("redir", _.toString());
          const lr = `${Se.TS.LOGIN_BASE_URL}jwt/finalizelogin`;
          return M()
            .post(lr, R, { withCredentials: !0 })
            .then(
              (E) => {
                const { data: D } = E;
                if (
                  !D ||
                  !D.transfer_info ||
                  !D.steamID ||
                  !Array.isArray(D.transfer_info)
                )
                  return (
                    (0, T.ZI)(
                      "Result of finalizelogin does not match expectations!",
                    ),
                    1
                  );
                const {
                  transfer_info: be,
                  steamID: De,
                  primary_domain: Ar,
                } = D;
                return Promise.all(
                  be.map(({ url: Pe, params: Ie }) =>
                    ie(Pe, { ...Ie, steamID: De }),
                  ),
                ).then(
                  (Pe) => ee(Pe, Ar),
                  () => 2,
                );
              },
              () => (
                (0, T.ZI)("Failed to finalize login. Initial call failed."), 1
              ),
            );
        }
        function ee(I, R) {
          let _ = 0;
          return (
            I.forEach((v) => {
              v.bSuccess ||
                (R && v.domain.toLowerCase() === R.toLowerCase()
                  ? (_ = 1)
                  : _ == 0 && (_ = 2));
            }),
            _
          );
        }
        async function ie(I, R) {
          const _ = new URL(I);
          let v = !0;
          try {
            const lr = new FormData();
            Object.keys(R).forEach((D) => lr.append(D, R[D]));
            const E = await M().post(I, lr, {
              withCredentials: !0,
              timeout: 1e4,
            });
            E.status !== 200
              ? ((0, T.ZI)(
                  `Transfer login to ${_.host} failed with status code: ${E.status}`,
                ),
                (v = !1))
              : E.data.result !== ar.R &&
                ((0, T.ZI)(
                  `Transfer login to ${_.host} failed with result: ${E.data.result}`,
                ),
                (v = !1));
          } catch (lr) {
            (0, T.ZI)(`Transfer login to ${_.host} failed: "${lr}"`), (v = !1);
          }
          return { bSuccess: v, domain: _.host };
        }
      },
      64434: (je, ze, x) => {
        "use strict";
        x.d(ze, { P8: () => ne, ZI: () => Se, tG: () => ar, tH: () => P });
        var d = x(41735),
          fe = x.n(d),
          M = x(57589);
        const m = x(80407).A,
          e = new M.wd("Login"),
          ar = e.Info,
          ve = e.Debug,
          P = e.Warning,
          Se = e.Error;
        function ge(F, ur) {
          return F.endsWith("/") || (F += "/"), `${F}login/${ur}/`;
        }
        function ae() {
          let F = new FormData();
          return F.append("donotcache", new Date().getTime().toString()), F;
        }
        async function T(F) {
          let ur = ae(),
            mr = ge(F, "refreshcaptcha"),
            ee = "";
          try {
            let ie = { "Content-Type": "multipart/form-data" },
              I = await axios.post(mr, ur, { headers: ie });
            if (I.status != 200) return !1;
            ee = I.data.gid;
          } catch {
            return !1;
          }
          return ee;
        }
        function Rr(F, ur) {
          return ge(F, "rendercaptcha") + `?gid=${ur}`;
        }
        async function Ue(F, ur) {
          let mr = ae();
          mr.append("username", ur);
          let ee = ge(F, "getrsakey"),
            ie;
          try {
            let I = { "Content-Type": "multipart/form-data" },
              R = await axios.post(ee, mr, { headers: I });
            if (R.status != 200)
              return (
                console.log("GetRSAKey failure: "), console.log(R.status), null
              );
            let _ = R.data;
            if (
              !_ ||
              !_.success ||
              !_.publickey_mod ||
              !_.publickey_exp ||
              !_.timestamp
            )
              return console.log("GetRSAKey failure: "), console.log(_), null;
            ie = _;
          } catch (I) {
            return console.log("GetRSAKey exception: "), console.log(I), null;
          }
          return ie;
        }
        function ne(F, ur) {
          let mr = m.getPublicKey(ur.publickey_mod, ur.publickey_exp),
            ee = m.encrypt(F, mr);
          return ee === !1 ? null : ee;
        }
        async function Fe(F, ur, mr, ee) {
          const ie = ne(mr.strPassword, ee);
          if (!ie) return null;
          let I = ae();
          I.append("password", ie),
            I.append("username", mr.strUserName),
            I.append("twofactorcode", mr.strTwoFactorCode || ""),
            I.append("emailauth", mr.strEmailAuthCode || ""),
            I.append("loginfriendlyname", ""),
            I.append("captchagid", mr.gidCaptcha || ""),
            I.append("captcha_text", mr.strCaptchaText || ""),
            I.append("emailsteamid", mr.emailSteamID || ""),
            I.append("rsatimestamp", ee.timestamp),
            I.append("remember_login", mr.bRememberLogin ? "true" : "false");
          let R = {};
          ur &&
            (I.append("oauth_client_id", ur),
            I.append("mobile_chat_client", "true"));
          let _ = ge(F, "dologin"),
            v;
          try {
            R.headers = { "Content-Type": "multipart/form-data" };
            let lr = await axios.post(_, I, R);
            if (lr.status != 200) return null;
            let E = lr.data;
            if (!E) return null;
            E.oauth && (E.oauth = JSON.parse(E.oauth)), (v = E);
          } catch {
            return null;
          }
          return v;
        }
        async function Xe(F, ur, mr) {
          if (
            ((mr = Object.assign({}, mr)),
            mr.strUserName &&
              (mr.strUserName = mr.strUserName.replace(/[^\x00-\x7F]/g, "")),
            !mr.strPassword ||
              mr.strPassword.match(/[^\x00-\x7F]/) ||
              !mr.strUserName)
          )
            return null;
          let ee = await Ue(F, mr.strUserName);
          return ee
            ? await Fe(F, ur, mr, ee)
            : (console.error(`Failed to get RSA key from ${F}`), null);
        }
      },
      1317: (je, ze, x) => {
        "use strict";
        x.d(ze, {
          P5: () => ce,
          sW: () => oe,
          YN: () => o,
          Fn: () => g,
          Mk: () => It,
          kt: () => Mt,
        });
        var d = x(7850),
          fe = x(32093),
          M = x(99412),
          m = x(72604),
          e = x(94276),
          ar = x(41735),
          ve = x.n(ar),
          P = x(90626),
          Se = x(92757);
        const ge =
          x.p +
          "images/applications/appmgmt/login_mobile_auth.png?v=valveisgoodatcaching";
        var ae = x(71568),
          T = x(64434),
          Rr = x(87883),
          Ue = x(25792),
          ne = x(179),
          Fe = x(24660),
          Xe = x(19298),
          F = x(36707),
          ur = x(9843),
          mr = x.n(ur);
        function ee(f) {
          const {
            length: t,
            value: l,
            onChange: b,
            onPaste: j,
            tone: z,
            autoFocus: B,
            disabled: S,
            loading: L,
            backupCode: U,
            allowCharacter: N,
          } = f;
          (0, P.useEffect)(() => {
            B && me();
          }, []);
          const tr = (0, P.useRef)([]),
            re = () => b(tr.current.map((H) => H.value)),
            kr = (H) => {
              const er = H.target.value;
              if (er && N && !N(er)) return;
              const gr = H.target.nextElementSibling;
              H.target.value && gr && gr.focus(), re();
            },
            Cr = (H) => {
              tr.current.findIndex((er) => !!er.value) === -1
                ? tr.current[0]?.select()
                : H.target.select();
            },
            me = () => {
              const H = tr.current.find((er) => !er.value);
              H ? H.focus() : tr.current[tr.current.length - 1].focus();
            },
            Oe = (H) => {
              const er = H.target;
              if (H.key === "Backspace" || H.key === "Delete") {
                const gr =
                  H.key === "Backspace"
                    ? er.previousElementSibling
                    : er.nextElementSibling;
                er.value === "" &&
                  gr &&
                  ((gr.value = ""), gr.focus(), H.preventDefault(), re());
              } else if (
                H.key === "ArrowLeft" ||
                H.key === "ArrowRight" ||
                H.key === "ArrowUp" ||
                H.key === "ArrowDown"
              ) {
                const gr =
                  H.key === "ArrowLeft" || H.key === "ArrowUp"
                    ? er.previousElementSibling
                    : er.nextElementSibling;
                gr && (gr.focus(), H.preventDefault());
              }
            },
            ir = (H) => {
              const er = H.clipboardData.getData("Text");
              let gr = H.target,
                _r = 0;
              for (; gr && _r < er.length; )
                gr.focus(),
                  (gr.value = er.charAt(_r)),
                  (gr = gr.nextElementSibling),
                  _r++;
              re(), H.preventDefault(), j && j();
            },
            de = [];
          for (let H = 0; H < t; H++)
            de.push(
              (0, d.jsx)(
                Fe.BA,
                {
                  noFocusRing: !0,
                  type: "text",
                  maxLength: 1,
                  ref: (er) => {
                    tr.current[H] = er;
                  },
                  onChange: kr,
                  onFocus: Cr,
                  onClick: (er) => er.stopPropagation(),
                  onKeyDown: Oe,
                  onPaste: ir,
                  value: l[H] ? l[H][0] : "",
                  autoComplete: "none",
                  autoFocus: H === 0 && B,
                  disabled: S || L,
                  className: mr().Input,
                },
                H,
              ),
            );
          return (0, d.jsxs)(Xe.Z, {
            className: (0, F.A)(
              mr().SegmentedCharacterInput,
              z === "danger" && mr().Danger,
              S && mr().Disabled,
              U && mr().BackupCode,
            ),
            onClick: me,
            children: [
              L &&
                (0, d.jsx)("div", {
                  className: mr().Loading,
                  children: (0, d.jsx)(Mt, { size: "small" }),
                }),
              de,
            ],
          });
        }
        var ie = x(36118),
          I = x(54212),
          R = x(85599),
          _ = x(71421),
          v = x(18210),
          lr = x(54963),
          E = x(3166),
          D = x(8059),
          be = x(14947),
          De = x(94354),
          Ar = x(35038),
          Pe = x(65946),
          Ie = x(95039),
          qe = x(13018),
          A = x(80613),
          W = x.n(A),
          c = x(75245);
        function mt(f) {
          return "unknown ETwoFactorUsageType ( " + f + " )";
        }
        function dt(f) {
          return "unknown ETwoFactorStatusFieldFlag ( " + f + " )";
        }
        class Jr extends A.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Jr.prototype.time || c.Sg(Jr.M()),
              A.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Jr.sm_m ||
                (Jr.sm_m = {
                  proto: Jr,
                  fields: {
                    time: { n: 1, br: c.qM.readUint32, bw: c.gp.writeUint32 },
                    usage_type: { n: 2, br: c.qM.readEnum, bw: c.gp.writeEnum },
                    confirmation_type: {
                      n: 3,
                      br: c.qM.readInt32,
                      bw: c.gp.writeInt32,
                    },
                    confirmation_action: {
                      n: 4,
                      br: c.qM.readInt32,
                      bw: c.gp.writeInt32,
                    },
                  },
                }),
              Jr.sm_m
            );
          }
          static MBF() {
            return Jr.sm_mbf || (Jr.sm_mbf = c.w0(Jr.M())), Jr.sm_mbf;
          }
          toObject(t = !1) {
            return Jr.toObject(t, this);
          }
          static toObject(t, l) {
            return c.BT(Jr.M(), t, l);
          }
          static fromObject(t) {
            return c.Uq(Jr.M(), t);
          }
          static deserializeBinary(t) {
            let l = new (W().BinaryReader)(t),
              b = new Jr();
            return Jr.deserializeBinaryFromReader(b, l);
          }
          static deserializeBinaryFromReader(t, l) {
            return c.zj(Jr.MBF(), t, l);
          }
          serializeBinary() {
            var t = new (W().BinaryWriter)();
            return Jr.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, l) {
            c.i0(Jr.M(), t, l);
          }
          serializeBase64String() {
            var t = new (W().BinaryWriter)();
            return (
              Jr.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_UsageEvent";
          }
        }
        class Tr extends A.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Tr.prototype.sender_time || c.Sg(Tr.M()),
              A.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Tr.sm_m ||
                (Tr.sm_m = {
                  proto: Tr,
                  fields: {
                    sender_time: {
                      n: 1,
                      br: c.qM.readUint64String,
                      bw: c.gp.writeUint64String,
                    },
                  },
                }),
              Tr.sm_m
            );
          }
          static MBF() {
            return Tr.sm_mbf || (Tr.sm_mbf = c.w0(Tr.M())), Tr.sm_mbf;
          }
          toObject(t = !1) {
            return Tr.toObject(t, this);
          }
          static toObject(t, l) {
            return c.BT(Tr.M(), t, l);
          }
          static fromObject(t) {
            return c.Uq(Tr.M(), t);
          }
          static deserializeBinary(t) {
            let l = new (W().BinaryReader)(t),
              b = new Tr();
            return Tr.deserializeBinaryFromReader(b, l);
          }
          static deserializeBinaryFromReader(t, l) {
            return c.zj(Tr.MBF(), t, l);
          }
          serializeBinary() {
            var t = new (W().BinaryWriter)();
            return Tr.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, l) {
            c.i0(Tr.M(), t, l);
          }
          serializeBase64String() {
            var t = new (W().BinaryWriter)();
            return (
              Tr.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_Time_Request";
          }
        }
        class jr extends A.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              jr.prototype.server_time || c.Sg(jr.M()),
              A.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              jr.sm_m ||
                (jr.sm_m = {
                  proto: jr,
                  fields: {
                    server_time: {
                      n: 1,
                      br: c.qM.readUint64String,
                      bw: c.gp.writeUint64String,
                    },
                    skew_tolerance_seconds: {
                      n: 2,
                      br: c.qM.readUint64String,
                      bw: c.gp.writeUint64String,
                    },
                    large_time_jink: {
                      n: 3,
                      br: c.qM.readUint64String,
                      bw: c.gp.writeUint64String,
                    },
                    probe_frequency_seconds: {
                      n: 4,
                      br: c.qM.readUint32,
                      bw: c.gp.writeUint32,
                    },
                    adjusted_time_probe_frequency_seconds: {
                      n: 5,
                      br: c.qM.readUint32,
                      bw: c.gp.writeUint32,
                    },
                    hint_probe_frequency_seconds: {
                      n: 6,
                      br: c.qM.readUint32,
                      bw: c.gp.writeUint32,
                    },
                    sync_timeout: {
                      n: 7,
                      br: c.qM.readUint32,
                      bw: c.gp.writeUint32,
                    },
                    try_again_seconds: {
                      n: 8,
                      br: c.qM.readUint32,
                      bw: c.gp.writeUint32,
                    },
                    max_attempts: {
                      n: 9,
                      br: c.qM.readUint32,
                      bw: c.gp.writeUint32,
                    },
                  },
                }),
              jr.sm_m
            );
          }
          static MBF() {
            return jr.sm_mbf || (jr.sm_mbf = c.w0(jr.M())), jr.sm_mbf;
          }
          toObject(t = !1) {
            return jr.toObject(t, this);
          }
          static toObject(t, l) {
            return c.BT(jr.M(), t, l);
          }
          static fromObject(t) {
            return c.Uq(jr.M(), t);
          }
          static deserializeBinary(t) {
            let l = new (W().BinaryReader)(t),
              b = new jr();
            return jr.deserializeBinaryFromReader(b, l);
          }
          static deserializeBinaryFromReader(t, l) {
            return c.zj(jr.MBF(), t, l);
          }
          serializeBinary() {
            var t = new (W().BinaryWriter)();
            return jr.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, l) {
            c.i0(jr.M(), t, l);
          }
          serializeBase64String() {
            var t = new (W().BinaryWriter)();
            return (
              jr.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_Time_Response";
          }
        }
        class Qr extends A.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Qr.prototype.steamid || c.Sg(Qr.M()),
              A.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Qr.sm_m ||
                (Qr.sm_m = {
                  proto: Qr,
                  fields: {
                    steamid: {
                      n: 1,
                      br: c.qM.readFixed64String,
                      bw: c.gp.writeFixed64String,
                    },
                    include: { n: 2, br: c.qM.readEnum, bw: c.gp.writeEnum },
                  },
                }),
              Qr.sm_m
            );
          }
          static MBF() {
            return Qr.sm_mbf || (Qr.sm_mbf = c.w0(Qr.M())), Qr.sm_mbf;
          }
          toObject(t = !1) {
            return Qr.toObject(t, this);
          }
          static toObject(t, l) {
            return c.BT(Qr.M(), t, l);
          }
          static fromObject(t) {
            return c.Uq(Qr.M(), t);
          }
          static deserializeBinary(t) {
            let l = new (W().BinaryReader)(t),
              b = new Qr();
            return Qr.deserializeBinaryFromReader(b, l);
          }
          static deserializeBinaryFromReader(t, l) {
            return c.zj(Qr.MBF(), t, l);
          }
          serializeBinary() {
            var t = new (W().BinaryWriter)();
            return Qr.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, l) {
            c.i0(Qr.M(), t, l);
          }
          serializeBase64String() {
            var t = new (W().BinaryWriter)();
            return (
              Qr.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_Status_Request";
          }
        }
        class V extends A.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              V.prototype.state || c.Sg(V.M()),
              A.Message.initialize(this, t, 0, -1, [16], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              V.sm_m ||
                (V.sm_m = {
                  proto: V,
                  fields: {
                    state: { n: 1, br: c.qM.readUint32, bw: c.gp.writeUint32 },
                    inactivation_reason: {
                      n: 2,
                      br: c.qM.readUint32,
                      bw: c.gp.writeUint32,
                    },
                    authenticator_type: {
                      n: 3,
                      br: c.qM.readUint32,
                      bw: c.gp.writeUint32,
                    },
                    authenticator_allowed: {
                      n: 4,
                      br: c.qM.readBool,
                      bw: c.gp.writeBool,
                    },
                    steamguard_scheme: {
                      n: 5,
                      br: c.qM.readUint32,
                      bw: c.gp.writeUint32,
                    },
                    token_gid: {
                      n: 6,
                      br: c.qM.readString,
                      bw: c.gp.writeString,
                    },
                    email_validated: {
                      n: 7,
                      br: c.qM.readBool,
                      bw: c.gp.writeBool,
                    },
                    device_identifier: {
                      n: 8,
                      br: c.qM.readString,
                      bw: c.gp.writeString,
                    },
                    time_created: {
                      n: 9,
                      br: c.qM.readUint32,
                      bw: c.gp.writeUint32,
                    },
                    revocation_attempts_remaining: {
                      n: 10,
                      br: c.qM.readUint32,
                      bw: c.gp.writeUint32,
                    },
                    classified_agent: {
                      n: 11,
                      br: c.qM.readString,
                      bw: c.gp.writeString,
                    },
                    allow_external_authenticator: {
                      n: 12,
                      br: c.qM.readBool,
                      bw: c.gp.writeBool,
                    },
                    time_transferred: {
                      n: 13,
                      br: c.qM.readUint32,
                      bw: c.gp.writeUint32,
                    },
                    version: {
                      n: 14,
                      br: c.qM.readUint32,
                      bw: c.gp.writeUint32,
                    },
                    last_seen_auth_token_id: {
                      n: 15,
                      br: c.qM.readFixed64String,
                      bw: c.gp.writeFixed64String,
                    },
                    usages: { n: 16, c: Jr, r: !0, q: !0 },
                  },
                }),
              V.sm_m
            );
          }
          static MBF() {
            return V.sm_mbf || (V.sm_mbf = c.w0(V.M())), V.sm_mbf;
          }
          toObject(t = !1) {
            return V.toObject(t, this);
          }
          static toObject(t, l) {
            return c.BT(V.M(), t, l);
          }
          static fromObject(t) {
            return c.Uq(V.M(), t);
          }
          static deserializeBinary(t) {
            let l = new (W().BinaryReader)(t),
              b = new V();
            return V.deserializeBinaryFromReader(b, l);
          }
          static deserializeBinaryFromReader(t, l) {
            return c.zj(V.MBF(), t, l);
          }
          serializeBinary() {
            var t = new (W().BinaryWriter)();
            return V.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, l) {
            c.i0(V.M(), t, l);
          }
          serializeBase64String() {
            var t = new (W().BinaryWriter)();
            return (
              V.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_Status_Response";
          }
        }
        class Q extends A.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Q.prototype.steamid || c.Sg(Q.M()),
              A.Message.initialize(this, t, 0, -1, [7], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Q.sm_m ||
                (Q.sm_m = {
                  proto: Q,
                  fields: {
                    steamid: {
                      n: 1,
                      br: c.qM.readFixed64String,
                      bw: c.gp.writeFixed64String,
                    },
                    authenticator_time: {
                      n: 2,
                      br: c.qM.readUint64String,
                      bw: c.gp.writeUint64String,
                    },
                    serial_number: {
                      n: 3,
                      br: c.qM.readFixed64String,
                      bw: c.gp.writeFixed64String,
                    },
                    authenticator_type: {
                      n: 4,
                      br: c.qM.readUint32,
                      bw: c.gp.writeUint32,
                    },
                    device_identifier: {
                      n: 5,
                      br: c.qM.readString,
                      bw: c.gp.writeString,
                    },
                    http_headers: {
                      n: 7,
                      r: !0,
                      q: !0,
                      br: c.qM.readString,
                      bw: c.gp.writeRepeatedString,
                    },
                    version: {
                      n: 8,
                      d: 1,
                      br: c.qM.readUint32,
                      bw: c.gp.writeUint32,
                    },
                  },
                }),
              Q.sm_m
            );
          }
          static MBF() {
            return Q.sm_mbf || (Q.sm_mbf = c.w0(Q.M())), Q.sm_mbf;
          }
          toObject(t = !1) {
            return Q.toObject(t, this);
          }
          static toObject(t, l) {
            return c.BT(Q.M(), t, l);
          }
          static fromObject(t) {
            return c.Uq(Q.M(), t);
          }
          static deserializeBinary(t) {
            let l = new (W().BinaryReader)(t),
              b = new Q();
            return Q.deserializeBinaryFromReader(b, l);
          }
          static deserializeBinaryFromReader(t, l) {
            return c.zj(Q.MBF(), t, l);
          }
          serializeBinary() {
            var t = new (W().BinaryWriter)();
            return Q.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, l) {
            c.i0(Q.M(), t, l);
          }
          serializeBase64String() {
            var t = new (W().BinaryWriter)();
            return (
              Q.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_AddAuthenticator_Request";
          }
        }
        class Z extends A.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Z.prototype.shared_secret || c.Sg(Z.M()),
              A.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Z.sm_m ||
                (Z.sm_m = {
                  proto: Z,
                  fields: {
                    shared_secret: {
                      n: 1,
                      br: c.qM.readBytes,
                      bw: c.gp.writeBytes,
                    },
                    serial_number: {
                      n: 2,
                      br: c.qM.readFixed64String,
                      bw: c.gp.writeFixed64String,
                    },
                    revocation_code: {
                      n: 3,
                      br: c.qM.readString,
                      bw: c.gp.writeString,
                    },
                    uri: { n: 4, br: c.qM.readString, bw: c.gp.writeString },
                    server_time: {
                      n: 5,
                      br: c.qM.readUint64String,
                      bw: c.gp.writeUint64String,
                    },
                    account_name: {
                      n: 6,
                      br: c.qM.readString,
                      bw: c.gp.writeString,
                    },
                    token_gid: {
                      n: 7,
                      br: c.qM.readString,
                      bw: c.gp.writeString,
                    },
                    identity_secret: {
                      n: 8,
                      br: c.qM.readBytes,
                      bw: c.gp.writeBytes,
                    },
                    secret_1: { n: 9, br: c.qM.readBytes, bw: c.gp.writeBytes },
                    status: { n: 10, br: c.qM.readInt32, bw: c.gp.writeInt32 },
                    phone_number_hint: {
                      n: 11,
                      br: c.qM.readString,
                      bw: c.gp.writeString,
                    },
                    confirm_type: {
                      n: 12,
                      br: c.qM.readInt32,
                      bw: c.gp.writeInt32,
                    },
                  },
                }),
              Z.sm_m
            );
          }
          static MBF() {
            return Z.sm_mbf || (Z.sm_mbf = c.w0(Z.M())), Z.sm_mbf;
          }
          toObject(t = !1) {
            return Z.toObject(t, this);
          }
          static toObject(t, l) {
            return c.BT(Z.M(), t, l);
          }
          static fromObject(t) {
            return c.Uq(Z.M(), t);
          }
          static deserializeBinary(t) {
            let l = new (W().BinaryReader)(t),
              b = new Z();
            return Z.deserializeBinaryFromReader(b, l);
          }
          static deserializeBinaryFromReader(t, l) {
            return c.zj(Z.MBF(), t, l);
          }
          serializeBinary() {
            var t = new (W().BinaryWriter)();
            return Z.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, l) {
            c.i0(Z.M(), t, l);
          }
          serializeBase64String() {
            var t = new (W().BinaryWriter)();
            return (
              Z.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_AddAuthenticator_Response";
          }
        }
        class Y extends A.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Y.prototype.steamid || c.Sg(Y.M()),
              A.Message.initialize(this, t, 0, -1, [5], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Y.sm_m ||
                (Y.sm_m = {
                  proto: Y,
                  fields: {
                    steamid: {
                      n: 1,
                      br: c.qM.readFixed64String,
                      bw: c.gp.writeFixed64String,
                    },
                    authenticator_code: {
                      n: 2,
                      br: c.qM.readString,
                      bw: c.gp.writeString,
                    },
                    authenticator_time: {
                      n: 3,
                      br: c.qM.readUint64String,
                      bw: c.gp.writeUint64String,
                    },
                    activation_code: {
                      n: 4,
                      br: c.qM.readString,
                      bw: c.gp.writeString,
                    },
                    http_headers: {
                      n: 5,
                      r: !0,
                      q: !0,
                      br: c.qM.readString,
                      bw: c.gp.writeRepeatedString,
                    },
                    validate_sms_code: {
                      n: 6,
                      br: c.qM.readBool,
                      bw: c.gp.writeBool,
                    },
                  },
                }),
              Y.sm_m
            );
          }
          static MBF() {
            return Y.sm_mbf || (Y.sm_mbf = c.w0(Y.M())), Y.sm_mbf;
          }
          toObject(t = !1) {
            return Y.toObject(t, this);
          }
          static toObject(t, l) {
            return c.BT(Y.M(), t, l);
          }
          static fromObject(t) {
            return c.Uq(Y.M(), t);
          }
          static deserializeBinary(t) {
            let l = new (W().BinaryReader)(t),
              b = new Y();
            return Y.deserializeBinaryFromReader(b, l);
          }
          static deserializeBinaryFromReader(t, l) {
            return c.zj(Y.MBF(), t, l);
          }
          serializeBinary() {
            var t = new (W().BinaryWriter)();
            return Y.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, l) {
            c.i0(Y.M(), t, l);
          }
          serializeBase64String() {
            var t = new (W().BinaryWriter)();
            return (
              Y.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_FinalizeAddAuthenticator_Request";
          }
        }
        class K extends A.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              K.prototype.success || c.Sg(K.M()),
              A.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              K.sm_m ||
                (K.sm_m = {
                  proto: K,
                  fields: {
                    success: { n: 1, br: c.qM.readBool, bw: c.gp.writeBool },
                    server_time: {
                      n: 3,
                      br: c.qM.readUint64String,
                      bw: c.gp.writeUint64String,
                    },
                    status: { n: 4, br: c.qM.readInt32, bw: c.gp.writeInt32 },
                  },
                }),
              K.sm_m
            );
          }
          static MBF() {
            return K.sm_mbf || (K.sm_mbf = c.w0(K.M())), K.sm_mbf;
          }
          toObject(t = !1) {
            return K.toObject(t, this);
          }
          static toObject(t, l) {
            return c.BT(K.M(), t, l);
          }
          static fromObject(t) {
            return c.Uq(K.M(), t);
          }
          static deserializeBinary(t) {
            let l = new (W().BinaryReader)(t),
              b = new K();
            return K.deserializeBinaryFromReader(b, l);
          }
          static deserializeBinaryFromReader(t, l) {
            return c.zj(K.MBF(), t, l);
          }
          serializeBinary() {
            var t = new (W().BinaryWriter)();
            return K.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, l) {
            c.i0(K.M(), t, l);
          }
          serializeBase64String() {
            var t = new (W().BinaryWriter)();
            return (
              K.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_FinalizeAddAuthenticator_Response";
          }
        }
        class q extends A.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              q.prototype.revocation_code || c.Sg(q.M()),
              A.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              q.sm_m ||
                (q.sm_m = {
                  proto: q,
                  fields: {
                    revocation_code: {
                      n: 2,
                      br: c.qM.readString,
                      bw: c.gp.writeString,
                    },
                    revocation_reason: {
                      n: 5,
                      br: c.qM.readUint32,
                      bw: c.gp.writeUint32,
                    },
                    steamguard_scheme: {
                      n: 6,
                      br: c.qM.readUint32,
                      bw: c.gp.writeUint32,
                    },
                    remove_all_steamguard_cookies: {
                      n: 7,
                      br: c.qM.readBool,
                      bw: c.gp.writeBool,
                    },
                  },
                }),
              q.sm_m
            );
          }
          static MBF() {
            return q.sm_mbf || (q.sm_mbf = c.w0(q.M())), q.sm_mbf;
          }
          toObject(t = !1) {
            return q.toObject(t, this);
          }
          static toObject(t, l) {
            return c.BT(q.M(), t, l);
          }
          static fromObject(t) {
            return c.Uq(q.M(), t);
          }
          static deserializeBinary(t) {
            let l = new (W().BinaryReader)(t),
              b = new q();
            return q.deserializeBinaryFromReader(b, l);
          }
          static deserializeBinaryFromReader(t, l) {
            return c.zj(q.MBF(), t, l);
          }
          serializeBinary() {
            var t = new (W().BinaryWriter)();
            return q.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, l) {
            c.i0(q.M(), t, l);
          }
          serializeBase64String() {
            var t = new (W().BinaryWriter)();
            return (
              q.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_RemoveAuthenticator_Request";
          }
        }
        class $ extends A.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              $.prototype.success || c.Sg($.M()),
              A.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $.sm_m ||
                ($.sm_m = {
                  proto: $,
                  fields: {
                    success: { n: 1, br: c.qM.readBool, bw: c.gp.writeBool },
                    server_time: {
                      n: 3,
                      br: c.qM.readUint64String,
                      bw: c.gp.writeUint64String,
                    },
                    revocation_attempts_remaining: {
                      n: 5,
                      br: c.qM.readUint32,
                      bw: c.gp.writeUint32,
                    },
                  },
                }),
              $.sm_m
            );
          }
          static MBF() {
            return $.sm_mbf || ($.sm_mbf = c.w0($.M())), $.sm_mbf;
          }
          toObject(t = !1) {
            return $.toObject(t, this);
          }
          static toObject(t, l) {
            return c.BT($.M(), t, l);
          }
          static fromObject(t) {
            return c.Uq($.M(), t);
          }
          static deserializeBinary(t) {
            let l = new (W().BinaryReader)(t),
              b = new $();
            return $.deserializeBinaryFromReader(b, l);
          }
          static deserializeBinaryFromReader(t, l) {
            return c.zj($.MBF(), t, l);
          }
          serializeBinary() {
            var t = new (W().BinaryWriter)();
            return $.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, l) {
            c.i0($.M(), t, l);
          }
          serializeBase64String() {
            var t = new (W().BinaryWriter)();
            return (
              $.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_RemoveAuthenticator_Response";
          }
        }
        class cr extends A.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), A.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return cr.toObject(t, this);
          }
          static toObject(t, l) {
            return t ? { $jspbMessageInstance: l } : {};
          }
          static fromObject(t) {
            return new cr();
          }
          static deserializeBinary(t) {
            let l = new (W().BinaryReader)(t),
              b = new cr();
            return cr.deserializeBinaryFromReader(b, l);
          }
          static deserializeBinaryFromReader(t, l) {
            return t;
          }
          serializeBinary() {
            var t = new (W().BinaryWriter)();
            return cr.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, l) {}
          serializeBase64String() {
            var t = new (W().BinaryWriter)();
            return (
              cr.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request";
          }
        }
        class X extends A.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              X.prototype.success || c.Sg(X.M()),
              A.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              X.sm_m ||
                (X.sm_m = {
                  proto: X,
                  fields: {
                    success: { n: 1, br: c.qM.readBool, bw: c.gp.writeBool },
                  },
                }),
              X.sm_m
            );
          }
          static MBF() {
            return X.sm_mbf || (X.sm_mbf = c.w0(X.M())), X.sm_mbf;
          }
          toObject(t = !1) {
            return X.toObject(t, this);
          }
          static toObject(t, l) {
            return c.BT(X.M(), t, l);
          }
          static fromObject(t) {
            return c.Uq(X.M(), t);
          }
          static deserializeBinary(t) {
            let l = new (W().BinaryReader)(t),
              b = new X();
            return X.deserializeBinaryFromReader(b, l);
          }
          static deserializeBinaryFromReader(t, l) {
            return c.zj(X.MBF(), t, l);
          }
          serializeBinary() {
            var t = new (W().BinaryWriter)();
            return X.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, l) {
            c.i0(X.M(), t, l);
          }
          serializeBase64String() {
            var t = new (W().BinaryWriter)();
            return (
              X.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response";
          }
        }
        class J extends A.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              J.prototype.sms_code || c.Sg(J.M()),
              A.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              J.sm_m ||
                (J.sm_m = {
                  proto: J,
                  fields: {
                    sms_code: {
                      n: 1,
                      br: c.qM.readString,
                      bw: c.gp.writeString,
                    },
                    generate_new_token: {
                      n: 2,
                      br: c.qM.readBool,
                      bw: c.gp.writeBool,
                    },
                    version: {
                      n: 3,
                      d: 1,
                      br: c.qM.readUint32,
                      bw: c.gp.writeUint32,
                    },
                  },
                }),
              J.sm_m
            );
          }
          static MBF() {
            return J.sm_mbf || (J.sm_mbf = c.w0(J.M())), J.sm_mbf;
          }
          toObject(t = !1) {
            return J.toObject(t, this);
          }
          static toObject(t, l) {
            return c.BT(J.M(), t, l);
          }
          static fromObject(t) {
            return c.Uq(J.M(), t);
          }
          static deserializeBinary(t) {
            let l = new (W().BinaryReader)(t),
              b = new J();
            return J.deserializeBinaryFromReader(b, l);
          }
          static deserializeBinaryFromReader(t, l) {
            return c.zj(J.MBF(), t, l);
          }
          serializeBinary() {
            var t = new (W().BinaryWriter)();
            return J.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, l) {
            c.i0(J.M(), t, l);
          }
          serializeBase64String() {
            var t = new (W().BinaryWriter)();
            return (
              J.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request";
          }
        }
        class G extends A.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              G.prototype.shared_secret || c.Sg(G.M()),
              A.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              G.sm_m ||
                (G.sm_m = {
                  proto: G,
                  fields: {
                    shared_secret: {
                      n: 1,
                      br: c.qM.readBytes,
                      bw: c.gp.writeBytes,
                    },
                    serial_number: {
                      n: 2,
                      br: c.qM.readFixed64String,
                      bw: c.gp.writeFixed64String,
                    },
                    revocation_code: {
                      n: 3,
                      br: c.qM.readString,
                      bw: c.gp.writeString,
                    },
                    uri: { n: 4, br: c.qM.readString, bw: c.gp.writeString },
                    server_time: {
                      n: 5,
                      br: c.qM.readUint64String,
                      bw: c.gp.writeUint64String,
                    },
                    account_name: {
                      n: 6,
                      br: c.qM.readString,
                      bw: c.gp.writeString,
                    },
                    token_gid: {
                      n: 7,
                      br: c.qM.readString,
                      bw: c.gp.writeString,
                    },
                    identity_secret: {
                      n: 8,
                      br: c.qM.readBytes,
                      bw: c.gp.writeBytes,
                    },
                    secret_1: { n: 9, br: c.qM.readBytes, bw: c.gp.writeBytes },
                    status: { n: 10, br: c.qM.readInt32, bw: c.gp.writeInt32 },
                    steamguard_scheme: {
                      n: 11,
                      br: c.qM.readUint32,
                      bw: c.gp.writeUint32,
                    },
                    steamid: {
                      n: 12,
                      br: c.qM.readFixed64String,
                      bw: c.gp.writeFixed64String,
                    },
                  },
                }),
              G.sm_m
            );
          }
          static MBF() {
            return G.sm_mbf || (G.sm_mbf = c.w0(G.M())), G.sm_mbf;
          }
          toObject(t = !1) {
            return G.toObject(t, this);
          }
          static toObject(t, l) {
            return c.BT(G.M(), t, l);
          }
          static fromObject(t) {
            return c.Uq(G.M(), t);
          }
          static deserializeBinary(t) {
            let l = new (W().BinaryReader)(t),
              b = new G();
            return G.deserializeBinaryFromReader(b, l);
          }
          static deserializeBinaryFromReader(t, l) {
            return c.zj(G.MBF(), t, l);
          }
          serializeBinary() {
            var t = new (W().BinaryWriter)();
            return G.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, l) {
            c.i0(G.M(), t, l);
          }
          serializeBase64String() {
            var t = new (W().BinaryWriter)();
            return (
              G.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CRemoveAuthenticatorViaChallengeContinue_Replacement_Token";
          }
        }
        class k extends A.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              k.prototype.success || c.Sg(k.M()),
              A.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              k.sm_m ||
                (k.sm_m = {
                  proto: k,
                  fields: {
                    success: { n: 1, br: c.qM.readBool, bw: c.gp.writeBool },
                    replacement_token: { n: 2, c: G },
                  },
                }),
              k.sm_m
            );
          }
          static MBF() {
            return k.sm_mbf || (k.sm_mbf = c.w0(k.M())), k.sm_mbf;
          }
          toObject(t = !1) {
            return k.toObject(t, this);
          }
          static toObject(t, l) {
            return c.BT(k.M(), t, l);
          }
          static fromObject(t) {
            return c.Uq(k.M(), t);
          }
          static deserializeBinary(t) {
            let l = new (W().BinaryReader)(t),
              b = new k();
            return k.deserializeBinaryFromReader(b, l);
          }
          static deserializeBinaryFromReader(t, l) {
            return c.zj(k.MBF(), t, l);
          }
          serializeBinary() {
            var t = new (W().BinaryWriter)();
            return k.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, l) {
            c.i0(k.M(), t, l);
          }
          serializeBase64String() {
            var t = new (W().BinaryWriter)();
            return (
              k.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response";
          }
        }
        class C extends A.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              C.prototype.steamid || c.Sg(C.M()),
              A.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              C.sm_m ||
                (C.sm_m = {
                  proto: C,
                  fields: {
                    steamid: {
                      n: 1,
                      br: c.qM.readFixed64String,
                      bw: c.gp.writeFixed64String,
                    },
                    version: {
                      n: 2,
                      br: c.qM.readUint32,
                      bw: c.gp.writeUint32,
                    },
                    signature: {
                      n: 3,
                      br: c.qM.readBytes,
                      bw: c.gp.writeBytes,
                    },
                  },
                }),
              C.sm_m
            );
          }
          static MBF() {
            return C.sm_mbf || (C.sm_mbf = c.w0(C.M())), C.sm_mbf;
          }
          toObject(t = !1) {
            return C.toObject(t, this);
          }
          static toObject(t, l) {
            return c.BT(C.M(), t, l);
          }
          static fromObject(t) {
            return c.Uq(C.M(), t);
          }
          static deserializeBinary(t) {
            let l = new (W().BinaryReader)(t),
              b = new C();
            return C.deserializeBinaryFromReader(b, l);
          }
          static deserializeBinaryFromReader(t, l) {
            return c.zj(C.MBF(), t, l);
          }
          serializeBinary() {
            var t = new (W().BinaryWriter)();
            return C.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, l) {
            c.i0(C.M(), t, l);
          }
          serializeBase64String() {
            var t = new (W().BinaryWriter)();
            return (
              C.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_UpdateTokenVersion_Request";
          }
        }
        class br extends A.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), A.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return br.toObject(t, this);
          }
          static toObject(t, l) {
            return t ? { $jspbMessageInstance: l } : {};
          }
          static fromObject(t) {
            return new br();
          }
          static deserializeBinary(t) {
            let l = new (W().BinaryReader)(t),
              b = new br();
            return br.deserializeBinaryFromReader(b, l);
          }
          static deserializeBinaryFromReader(t, l) {
            return t;
          }
          serializeBinary() {
            var t = new (W().BinaryWriter)();
            return br.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, l) {}
          serializeBase64String() {
            var t = new (W().BinaryWriter)();
            return (
              br.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CTwoFactor_UpdateTokenVersion_Response";
          }
        }
        var vr;
        ((f) => {
          function t(U, N, tr) {
            return U.SendMsg(
              "TwoFactor.QueryTime#1",
              (0, Ar.I8)(Tr, N, tr),
              jr,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          f.QueryTime = t;
          function l(U, N, tr) {
            return U.SendMsg(
              "TwoFactor.QueryStatus#1",
              (0, Ar.I8)(Qr, N, tr),
              V,
              { ePrivilege: 1 },
            );
          }
          f.QueryStatus = l;
          function b(U, N, tr) {
            return U.SendMsg(
              "TwoFactor.AddAuthenticator#1",
              (0, Ar.I8)(Q, N, tr),
              Z,
              { ePrivilege: 1 },
            );
          }
          f.AddAuthenticator = b;
          function j(U, N, tr) {
            return U.SendMsg(
              "TwoFactor.FinalizeAddAuthenticator#1",
              (0, Ar.I8)(Y, N, tr),
              K,
              { ePrivilege: 1 },
            );
          }
          f.FinalizeAddAuthenticator = j;
          function z(U, N, tr) {
            return U.SendMsg(
              "TwoFactor.UpdateTokenVersion#1",
              (0, Ar.I8)(C, N, tr),
              br,
              { ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          f.UpdateTokenVersion = z;
          function B(U, N, tr) {
            return U.SendMsg(
              "TwoFactor.RemoveAuthenticator#1",
              (0, Ar.I8)(q, N, tr),
              $,
              { ePrivilege: 9 },
            );
          }
          f.RemoveAuthenticator = B;
          function S(U, N, tr) {
            return U.SendMsg(
              "TwoFactor.RemoveAuthenticatorViaChallengeStart#1",
              (0, Ar.I8)(cr, N, tr),
              X,
              { ePrivilege: 9 },
            );
          }
          f.RemoveAuthenticatorViaChallengeStart = S;
          function L(U, N, tr) {
            return U.SendMsg(
              "TwoFactor.RemoveAuthenticatorViaChallengeContinue#1",
              (0, Ar.I8)(J, N, tr),
              k,
              { ePrivilege: 9 },
            );
          }
          f.RemoveAuthenticatorViaChallengeContinue = L;
        })(vr || (vr = {}));
        var Dr = Object.defineProperty,
          he = Object.getOwnPropertyDescriptor,
          dr = (f, t, l, b) => {
            for (
              var j = b > 1 ? void 0 : b ? he(t, l) : t, z = f.length - 1, B;
              z >= 0;
              z--
            )
              (B = f[z]) && (j = (b ? B(t, l, j) : B(j)) || j);
            return b && j && Dr(t, l, j), j;
          };
        const Pr = 2,
          te = 0,
          pr = 1,
          Or = 2,
          or = 3,
          Br = 4,
          fr = 5,
          Mr = 6,
          Ir = 7,
          Sr = 8,
          Zr = 9,
          se = 10,
          wr = 11,
          Me = 12,
          xr = 13,
          Lr = 14,
          Wr = 15,
          Nr = 16;
        class nr extends D.gf {
          m_eStatus = te;
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
              (l) => this.onAuthComplete(l),
              t.onDeviceDetails,
              t.onShowAgreement,
            ),
              (0, be.Gn)(this),
              (this.m_onLoginComplete = t.onComplete),
              (this.m_onGetMachineAuth = t.onGetMachineAuth);
          }
          async Start(t, l, b) {
            if (this.m_eStatus !== te && this.m_eStatus !== Or)
              return (
                (0, T.ZI)(
                  "Cannot start an already started auth session. Create a new session instance.",
                ),
                m.Ze
              );
            const j = t.replace(/[^\x00-\x7F]/g, ""),
              z = l.replace(/[^\x00-\x7F]/g, "").slice(0, 64);
            if (!j.length || !z.length) return m.nO;
            if (
              ((this.m_eStatus = pr),
              (this.m_bUsingCodeOverride = !1),
              t == "anonymous")
            )
              return (
                this.SetFailureState(D.eF.AnonymousLogin, sr.EResult(m.FK)),
                m.FK
              );
            try {
              const B = await Vr(this.m_transport, j);
              if (!B)
                return (
                  (0, T.ZI)(
                    "Cannot start auth session without a valid RSA key",
                  ),
                  this.SetFailureState(D.eF.Network, sr.EResult(m.Sq)),
                  m.Sq
                );
              const S = (0, T.P8)(z, B),
                L = Ar.w.Init(e.iP);
              L.SetEMsg(De.Kec),
                L.Body().set_account_name(j),
                L.Body().set_encrypted_password(S),
                L.Body().set_encryption_timestamp(B.timestamp),
                L.Body().set_remember_login(!!b),
                L.Body().set_persistence(b ? Ie.nW : Ie.fH),
                L.Body().set_website_id(E.TS.WEBSITE_ID);
              try {
                L.Body().set_device_details(await this.GetDeviceDetails());
              } catch (N) {
                (0, T.ZI)("Failed to GetDeviceDetails"), (0, T.ZI)(N);
              }
              if (
                (L.Body().set_language((0, M.sfN)(E.TS.LANGUAGE)),
                this.m_onGetMachineAuth != null)
              ) {
                const N = await this.m_onGetMachineAuth(j);
                N.eresult == m.R && L.Body().set_guard_data(N.data);
              }
              await this.m_transport.MakeReady();
              const U = await e.kX.BeginAuthSessionViaCredentials(
                this.m_transport,
                L,
              );
              return (
                U.DEBUG_LogToConsole(),
                (0, be.h5)(async () => {
                  const N = U.GetEResult(),
                    tr = U.Hdr().transport_error();
                  if (N !== m.R)
                    switch (N) {
                      case m.Um:
                        return (this.m_eStatus = Or), N;
                      case m.Sq:
                      case m.a_:
                        return (
                          this.SetFailureState(D.eF.Network, sr.EResult(m.Sq)),
                          N
                        );
                      case m.h_:
                        return (
                          this.SetFailureState(
                            D.eF.RateLimitExceeded,
                            sr.EResult(N),
                          ),
                          N
                        );
                      case m.oH:
                        if (this.m_onShowAgreement)
                          this.m_onShowAgreement(
                            U.Body().agreement_session_url(),
                          );
                        else {
                          const er = U.Body().agreement_session_url(),
                            gr = document.location.href;
                          window.location.href = `${er}&redir=${encodeURIComponent(gr)}`;
                        }
                        return (
                          this.m_onCompleteCallback({ bSuccess: !1 }),
                          (this.m_eStatus = te),
                          N
                        );
                      case m.uN:
                      default:
                        return (
                          (0, T.ZI)(
                            `Failed to start auth session. Result: ${N} Transport: ${tr}`,
                          ),
                          this.SetFailureState(
                            D.eF.Generic,
                            sr.EResult(N),
                            U.Body().extended_error_message(),
                          ),
                          this.m_onCompleteCallback({ bSuccess: !1 }),
                          N
                        );
                    }
                  this.m_strAccountName = t;
                  const {
                    client_id: re,
                    request_id: kr,
                    interval: Cr,
                    allowed_confirmations: me,
                    steamid: Oe,
                    weak_token: ir,
                  } = U.Body().toObject();
                  if (
                    ((this.m_msPollInterval = Cr * 1e3),
                    (this.m_strClientID = re),
                    (this.m_rgRequestID = kr),
                    (this.m_steamid = Oe),
                    (this.m_strWeakAuthToken = ir),
                    me.find(({ confirmation_type: er }) => er === e.TY.ig))
                  ) {
                    const er = new FormData();
                    er.append("clientid", re),
                      er.append("steamid", this.m_steamid);
                    const gr = `${E.TS.LOGIN_BASE_URL}jwt/checkdevice/${this.m_steamid}`;
                    try {
                      if (
                        (
                          await ve().post(gr, er, {
                            headers: { "Content-Type": "multipart/form-data" },
                            withCredentials: !0,
                          })
                        ).data.result == m.R
                      )
                        return (
                          (this.m_eStatus = Br), this.StartPolling(!0), m.R
                        );
                    } catch (_r) {
                      if (
                        ((0, T.tG)(
                          `checkdevice ajax to ${gr} failed: ${_r.message}`,
                        ),
                        _r instanceof ar.AxiosError)
                      ) {
                        const We = _r;
                        return We.response
                          ? (this.SetFailureState(
                              D.eF.Network,
                              sr.AjaxFailureWithCode(We.response.status),
                            ),
                            m.Sq)
                          : (this.SetFailureState(
                              D.eF.Network,
                              sr.AjaxFailureNoCode(),
                            ),
                            m.Sq);
                      }
                      return (
                        this.SetFailureState(D.eF.Network, sr.EResult(m.eH)),
                        m.eH
                      );
                    }
                  }
                  const de = Ee(me.map(({ confirmation_type: er }) => er)),
                    H = me.find(({ confirmation_type: er }) => er === de);
                  switch (
                    (H &&
                      H.associated_message &&
                      (this.m_strConfirmationAssociatedMessage =
                        H.associated_message),
                    de)
                  ) {
                    case e.TY.WM:
                      return (this.m_eStatus = xr), this.StartPolling(), N;
                    case e.TY.Xs:
                      this.m_eStatus = or;
                      break;
                    case e.TY.$Y:
                      (this.m_eStatus = Br), this.StartPolling(!1);
                      break;
                    case e.TY.bH:
                      (this.m_eStatus = fr), this.StartPolling(!1);
                      break;
                    case e.TY.x0:
                      (this.m_eStatus = Mr), this.StartPolling(!1);
                      break;
                  }
                  return N;
                })
              );
            } catch (B) {
              return (
                (0, T.ZI)(
                  `Failed to start auth session. Exception: ${JSON.stringify(B)}`,
                ),
                (0, T.tG)(B),
                this.SetFailureState(D.eF.Generic, sr.FailedToStart()),
                this.m_onCompleteCallback({ bSuccess: !1 }),
                m.zi
              );
            }
          }
          Stop() {
            this.StopPolling(), (this.m_eStatus = Nr);
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
          async SendSteamGuardCode(t, l = !0) {
            if (t.length == 0) {
              switch (this.m_eStatus) {
                case se:
                  this.m_eStatus = or;
                  break;
                case wr:
                  this.m_eStatus = fr;
                  break;
                case fr:
                case or:
                  break;
                default:
                  throw new Error("Attempted to clear code in invalid state");
              }
              return Promise.resolve(m.R);
            }
            try {
              await this.m_transport.MakeReady();
              const b = this.m_eStatus === or || this.m_eStatus === se,
                j = Ar.w.Init(e.Qc);
              j.SetEMsg(De.Kec),
                j.Body().set_client_id(this.m_strClientID),
                j.Body().set_steamid(this.m_steamid),
                j.Body().set_code(t),
                j.Body().set_code_type(b ? e.TY.Xs : e.TY.bH);
              const z = await e.kX.UpdateAuthSessionWithSteamGuardCode(
                  this.m_transport,
                  j,
                ),
                B = z.GetEResult();
              if (B !== m.R) {
                if (!l)
                  return (
                    (0, T.ZI)(
                      `Failed to automatically update session with local SG info. Result ${B}. Transport ${z.Hdr().transport_error()}`,
                    ),
                    B
                  );
                switch (B) {
                  case m.QR:
                  case m.b7:
                    return (this.m_eStatus = b ? se : wr), B;
                  case m.ob:
                    return (
                      this.SetFailureState(D.eF.Expired, sr.EResult(B)),
                      this.m_onCompleteCallback({ bSuccess: !1 }),
                      B
                    );
                  case m.h_:
                    return (
                      this.SetFailureState(
                        D.eF.RateLimitExceeded,
                        sr.EResult(B),
                      ),
                      this.m_onCompleteCallback({ bSuccess: !1 }),
                      B
                    );
                  case m.oH:
                    if (this.m_onShowAgreement)
                      this.m_onShowAgreement(z.Body().agreement_session_url());
                    else {
                      const S = z.Body().agreement_session_url(),
                        L = document.location.href;
                      window.location.href = `${S}&redir=${encodeURIComponent(L)}`;
                    }
                    return (
                      this.m_onCompleteCallback({ bSuccess: !1 }),
                      (this.m_eStatus = te),
                      B
                    );
                  default:
                    return (
                      (0, T.ZI)(
                        `Failed to update auth session with SG code. Result: ${B}`,
                      ),
                      this.SetFailureState(D.eF.Generic, sr.EResult(B)),
                      this.m_onCompleteCallback({ bSuccess: !1 }),
                      B
                    );
                }
              }
              return (this.m_eStatus = xr), this.StartPolling(), B;
            } catch (b) {
              return (
                (0, T.ZI)(`Failed to update auth session with SG code. ${b}`),
                this.SetFailureState(D.eF.Generic, sr.FailedToAddCode()),
                this.m_onCompleteCallback({ bSuccess: !1 }),
                m.zi
              );
            }
          }
          UseCodeOverride() {
            switch (this.m_eStatus) {
              case Mr:
                (this.m_bUsingCodeOverride = !0), (this.m_eStatus = fr);
                return;
              case Br:
                (this.m_bUsingCodeOverride = !0), (this.m_eStatus = or);
                return;
              default:
                (0, T.ZI)(
                  `Don't know how to UseCodeOverride from login session status ${this.m_eStatus}`,
                );
                return;
            }
          }
          CantAccessCode() {
            this.m_eStatus = Ir;
          }
          async StartMoveAuthenticator() {
            this.m_weakAuthWebInterface = new qe.D(
              E.TS.WEBAPI_BASE_URL,
              this.m_strWeakAuthToken,
            );
            try {
              const t = Ar.w.Init(cr),
                l = await vr.RemoveAuthenticatorViaChallengeStart(
                  this.m_weakAuthWebInterface.GetServiceTransport(),
                  t,
                );
              m.R != l.GetEResult()
                ? (l.DEBUG_LogToConsole(),
                  (0, T.ZI)(
                    "An unexpected error occured while adding an authenticator",
                    l.GetEResult(),
                  ),
                  this.SetFailureState(
                    D.eF.MoveAuthenticator,
                    sr.EResult(l.GetEResult()),
                  ))
                : (this.m_eStatus = Sr);
            } catch (t) {
              (0, T.ZI)(
                "An unexpected error occured while moving an authenticator",
                t,
              ),
                this.SetFailureState(D.eF.MoveAuthenticator, sr.EResult(m.zi));
            }
          }
          async ResendMoveCode() {
            const t = Ar.w.Init(cr),
              l = await vr.RemoveAuthenticatorViaChallengeStart(
                this.m_weakAuthWebInterface.GetServiceTransport(),
                t,
              );
            m.R != l.GetEResult() &&
              (l.DEBUG_LogToConsole(),
              (0, T.ZI)(
                "An unexpected error occured while adding an authenticator",
                l.GetEResult(),
              )),
              (this.m_eStatus = Sr);
          }
          async FinishMoveAuthenticator(t) {
            const l = Ar.w.Init(J);
            l.Body().set_sms_code(t),
              l.Body().set_generate_new_token(!0),
              l.Body().set_version(Pr);
            const b = await vr.RemoveAuthenticatorViaChallengeContinue(
              this.m_weakAuthWebInterface.GetServiceTransport(),
              l,
            );
            m.c3 == b.GetEResult()
              ? (this.m_eStatus = Me)
              : b.Body().success()
                ? (b.DEBUG_LogToConsole(),
                  (this.m_replacementAuthenticator = (0, D.FU)(
                    b.Body().replacement_token().toObject(),
                  )),
                  (this.m_eStatus = Zr),
                  (this.m_bUsingCodeOverride = !1))
                : (b.DEBUG_LogToConsole(),
                  (0, T.ZI)(
                    "Error when calling RemoveAuthenticatorViaChallengeContinue",
                    b.GetEResult(),
                  ),
                  this.SetFailureState(
                    D.eF.MoveAuthenticator,
                    sr.EResult(b.GetEResult()),
                  ));
          }
          FinishMoveRecovery() {
            this.m_eStatus = fr;
          }
          BCanGoBack() {
            switch (this.m_eStatus) {
              case fr:
              case wr:
              case or:
              case se:
              case Mr:
              case Br:
              case Ir:
              case Sr:
              case Me:
                return !0;
              default:
                return !1;
            }
          }
          GoBack() {
            switch (this.m_eStatus) {
              case Mr:
              case Br:
                this.m_eStatus = te;
                break;
              case fr:
              case wr:
                this.m_eStatus = this.m_bUsingCodeOverride ? Mr : te;
                break;
              case Ir:
              case Sr:
              case Me:
                this.m_eStatus = (this.m_bUsingCodeOverride, fr);
                break;
              case or:
              case se:
                this.m_eStatus = this.m_bUsingCodeOverride ? Br : te;
                break;
              default:
                (0, T.ZI)(
                  `Don't know how to GoBack from login session status ${this.m_eStatus}`,
                );
                return;
            }
          }
          SetFailureState(t, l, b = "") {
            (this.m_eStatus = Wr),
              (this.m_eFailureState = t),
              (this.m_strErrorReference = l),
              (this.m_strExtendedErrorMessage = b);
          }
          onAuthComplete = (t) => {
            this.m_eStatus = t.bSuccess ? Lr : Wr;
            let l;
            t.bSuccess
              ? (l = {
                  ...t,
                  strAccountName: this.m_strAccountName,
                  steamid: this.m_steamid,
                })
              : (l = { bSuccess: !1 }),
              this.m_onLoginComplete && this.m_onLoginComplete(l);
          };
          SetOnLoginComplete(t) {
            this.m_onLoginComplete = t;
          }
        }
        dr([be.sH], nr.prototype, "m_eStatus", 2),
          dr([be.sH], nr.prototype, "m_strErrorReference", 2),
          dr([lr.oI], nr.prototype, "Start", 1),
          dr([lr.oI], nr.prototype, "SendSteamGuardCode", 1),
          dr([lr.oI], nr.prototype, "UseCodeOverride", 1),
          dr([lr.oI], nr.prototype, "CantAccessCode", 1),
          dr([lr.oI], nr.prototype, "StartMoveAuthenticator", 1),
          dr([lr.oI], nr.prototype, "ResendMoveCode", 1),
          dr([lr.oI], nr.prototype, "FinishMoveAuthenticator", 1),
          dr([lr.oI], nr.prototype, "FinishMoveRecovery", 1),
          dr([lr.oI], nr.prototype, "GoBack", 1),
          dr([be.XI], nr.prototype, "SetFailureState", 1),
          dr([lr.oI], nr.prototype, "SetOnLoginComplete", 1);
        async function Vr(f, t) {
          const l = Ar.w.Init(e.qu);
          l.Body().set_account_name(t), l.SetEMsg(De.Kec);
          try {
            await f.MakeReady();
            const b = await e.kX.GetPasswordRSAPublicKey(f, l);
            if ((b.DEBUG_LogToConsole(), b.GetEResult() !== m.R))
              return (
                (0, T.ZI)(
                  `Failed to get RSA key with EResult: ${b.GetEResult()}`,
                ),
                null
              );
            const {
              publickey_exp: j,
              publickey_mod: z,
              timestamp: B,
            } = b.Body().toObject();
            return !j || !z || !B
              ? ((0, T.ZI)(
                  `Missing expected field in RSA Key: ${JSON.stringify({ publickey_exp: j, publickey_mod: z, timestamp: B })}`,
                ),
                null)
              : { publickey_exp: j, publickey_mod: z, timestamp: B };
          } catch (b) {
            return (
              (0, T.ZI)(`Failed to get RSA key: ${JSON.stringify(b)}`), null
            );
          }
        }
        const Hr = [
          e.TY.x0,
          e.TY.bH,
          e.TY.Xs,
          e.TY.WM,
          e.TY.oP,
          e.TY.$Y,
        ].reduce((f, t, l) => ((f[t] = l), f), {});
        function Ee(f) {
          let t = f[0] || e.TY.oP;
          return f.length > 1 && (t = f.sort((l, b) => Hr[l] - Hr[b])[0]), t;
        }
        function Yr(f) {
          const [t, l] = (0, P.useState)(new nr(f));
          return (
            (0, P.useEffect)(() => {
              t?.SetOnLoginComplete(f.onComplete);
            }, [t, f.onComplete]),
            (0, Pe.q3)(() => ({
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
              reset: () => l(new nr(f)),
              goBack: t.GoBack,
              setTokenToRevoke: t.SetTokenToRevoke,
            }))
          );
        }
        function Ur(f) {
          return f ? 7 : 5;
        }
        function Fr(f, t) {
          return /[23456789BCDFGHJKMNPQRTVWXY]*/g.test(f) && f.length <= Ur(t);
        }
        function xe(f, t) {
          return Fr(f, t) && f.length === Ur(t);
        }
        const sr = {
          EResult: (f) => `e${f}`,
          FailedToStart: () => "c-fts",
          FailedToAddCode: () => "c-ftac",
          AjaxFailureNoCode: () => "af",
          AjaxFailureWithCode: (f) => `af-${f}`,
        };
        var Kr = Object.defineProperty,
          $r = Object.getOwnPropertyDescriptor,
          Xr = (f, t, l, b) => {
            for (
              var j = b > 1 ? void 0 : b ? $r(t, l) : t, z = f.length - 1, B;
              z >= 0;
              z--
            )
              (B = f[z]) && (j = (b ? B(t, l, j) : B(j)) || j);
            return b && j && Kr(t, l, j), j;
          };
        const hr = 0,
          Ne = 1,
          Je = 2,
          Te = 3,
          h = 4,
          r = 5;
        class s extends D.gf {
          m_eStatus = hr;
          constructor(t) {
            super(
              t.transport,
              (l) => {
                (this.m_eStatus = l.bSuccess ? Te : h), t.onComplete(l);
              },
              t.onDeviceDetails,
            ),
              (0, be.Gn)(this);
          }
          async Start() {
            if (this.m_eStatus !== hr)
              return (
                console.error(
                  "Cannot start an already started auth session. Create a new session instance.",
                ),
                m.zi
              );
            this.m_eStatus = Ne;
            try {
              await this.m_transport.MakeReady();
              const t = Ar.w.Init(e.R9);
              t.SetEMsg(De.Kec);
              try {
                t.Body().set_device_details(await this.GetDeviceDetails());
              } catch (U) {
                console.error("Failed to GetDeviceDetails"), console.log(U);
              }
              t.Body().set_website_id(E.TS.WEBSITE_ID);
              const l = await e.kX.BeginAuthSessionViaQR(this.m_transport, t),
                b = l.GetEResult(),
                j = l.Hdr().transport_error();
              if (b !== m.R)
                return (
                  console.error(
                    `Failed to start auth session. Result: ${b} Transport: ${j}`,
                  ),
                  (this.m_eFailureState = D.eF.Generic),
                  this.m_onCompleteCallback({ bSuccess: !1 }),
                  b
                );
              const {
                client_id: z,
                challenge_url: B,
                interval: S,
                request_id: L,
              } = l.Body().toObject();
              return (
                (this.m_strClientID = z),
                (this.m_strChallengeURL = B),
                (this.m_msPollInterval = S * 1e3),
                (this.m_rgRequestID = L),
                (this.m_eStatus = Je),
                this.StartPolling(!1),
                b
              );
            } catch (t) {
              return (
                console.error(
                  `Failed to start auth session: ${JSON.stringify(t)}`,
                ),
                (this.m_eFailureState = D.eF.Generic),
                this.m_onCompleteCallback({ bSuccess: !1 }),
                m.zi
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
        Xr([be.sH], s.prototype, "m_eStatus", 2);
        function y(f) {
          const [t, l] = (0, P.useState)(new s(f));
          return (
            (0, P.useEffect)(
              () => (
                t.Start(),
                () => {
                  t.Stop();
                }
              ),
              [t],
            ),
            (0, Pe.q3)(() => ({
              strChallengeURL: t.GetChallengeURL(),
              strClientID: t.GetClientID(),
              eFailureState: t.GetFailureState(),
              eStatus: t.GetStatus(),
              bHadRemoteInteraction: t.BHadRemoteInteraction(),
              reset: () => l(new s(f)),
              setTokenToRevoke: t.SetTokenToRevoke,
            }))
          );
        }
        var Be = x(77661),
          w = x.n(Be),
          we = x(56589),
          ye = x.n(we),
          ue = x(71742),
          Ae = x(5804),
          Ge = x.n(Ae),
          ke = ((f) => (
            (f[(f.L = 1)] = "L"),
            (f[(f.M = 0)] = "M"),
            (f[(f.Q = 3)] = "Q"),
            (f[(f.H = 2)] = "H"),
            f
          ))(ke || {});
        function _e(f, t, l) {
          const b = f.length,
            j = f[0].length,
            z = (b + 2) * j,
            B = new Uint8Array(40 + z);
          let S = 0;
          (B[S++] = 71),
            (B[S++] = 73),
            (B[S++] = 70),
            (B[S++] = 56),
            (B[S++] = 57),
            (B[S++] = 97),
            (B[S++] = b),
            (B[S++] = 0),
            (B[S++] = j),
            (B[S++] = 0),
            (0, ue.wT)(
              t != "transparent" || l != "transparent",
              "Trying to use transparent for both colors in QR",
            ),
            (B[S++] = 161),
            (B[S++] = 0),
            (B[S++] = 0),
            t == "transparent"
              ? ((B[S++] = 0), (B[S++] = 0), (B[S++] = 0))
              : ((B[S++] = t[0]), (B[S++] = t[1]), (B[S++] = t[2])),
            l == "transparent"
              ? ((B[S++] = 0), (B[S++] = 0), (B[S++] = 0))
              : ((B[S++] = l[0]), (B[S++] = l[1]), (B[S++] = l[2])),
            (B[S++] = 255),
            (B[S++] = 255),
            (B[S++] = 255),
            (B[S++] = 255),
            (B[S++] = 255),
            (B[S++] = 255),
            (t == "transparent" || l == "transparent") &&
              ((B[S++] = 33),
              (B[S++] = 249),
              (B[S++] = 4),
              (B[S++] = 1),
              (B[S++] = 0),
              (B[S++] = 0),
              (B[S++] = t == "transparent" ? 0 : 1),
              (B[S++] = 0)),
            (B[S++] = 44),
            (B[S++] = 0),
            (B[S++] = 0),
            (B[S++] = 0),
            (B[S++] = 0),
            (B[S++] = b),
            (B[S++] = 0),
            (B[S++] = j),
            (B[S++] = 0),
            (B[S++] = 0);
          const L = 7;
          B[S++] = L;
          for (let U = 0; U < f.length; U++) {
            (B[S++] = b + 1), (B[S++] = 2 ** L);
            for (let N = 0; N < f.length; N++) B[S++] = f[U][N] ? 0 : 1;
          }
          return (
            (B[S++] = 1), (B[S++] = 2 ** L + 1), (B[S++] = 0), (B[S++] = 59), B
          );
        }
        function rt(f) {
          let {
            quality: t = 0,
            children: l,
            className: b,
            activeBitColor: j = [33, 35, 40],
            inactiveBitColor: z = [255, 255, 255],
            borderWidth: B = 3,
            typeNumber: S = 6,
          } = f;
          const L = le(l, { typeNumber: S, errorCorrectLevel: t });
          if (!L) return null;
          let U = [];
          for (let Cr = 0; Cr < B; Cr++)
            U.push(Array(L.length + B * 2).fill(!1));
          for (let Cr = 0; Cr < L.length; Cr++)
            U.push([].concat(Array(B).fill(!1), L[Cr], Array(B).fill(!1)));
          for (let Cr = 0; Cr < B; Cr++)
            U.push(Array(L.length + B * 2).fill(!1));
          const N = _e(U, j, z),
            tr = new Blob([N], { type: "image/gif" }),
            re = URL.createObjectURL(tr),
            kr = `rgb(${z[0]}, ${z[1]}, ${z[2]})`;
          return (0, d.jsx)("div", {
            className: (0, F.A)(Ge().QRBits, b),
            style: { "--qr-bright-color": kr },
            children: (0, d.jsx)("img", {
              className: Ge().QRImg,
              src: re,
              alt: "",
            }),
          });
        }
        function le(f, t = {}) {
          const { typeNumber: l, errorCorrectLevel: b } = t,
            [j, z] = (0, P.useState)();
          return (
            (0, P.useEffect)(() => {
              z(ye()(f, { typeNumber: l, errorCorrectLevel: b }).modules);
            }, [f, l, b]),
            j
          );
        }
        var zr = x(5522),
          rr = x.n(zr),
          Er = x(58534);
        function et(f) {
          const {
              transport: t,
              onComplete: l,
              onStatusChange: b,
              platform: j,
              styling: z = "default",
              activeBitValue: B = 255,
            } = f,
            S = E.TS.IN_STEAMUI ? oe : ce,
            {
              eStatus: L,
              strChallengeURL: U,
              strClientID: N,
              bHadRemoteInteraction: tr,
              reset: re,
              setTokenToRevoke: kr,
            } = y({ transport: t, onComplete: l, onDeviceDetails: S });
          (0, P.useEffect)(() => b && b(L), [b, L]);
          const Cr = L === Je ? U : E.TS.STORE_BASE_URL,
            me = L === hr || L === Ne || tr,
            Oe = L === h,
            ir = L === Te,
            de = ir
              ? (0, d.jsx)(Bt, {})
              : Oe
                ? (0, d.jsx)(gt, { reset: re })
                : me
                  ? (0, d.jsx)(ft, { size: "small" })
                  : null,
            H = me || Oe || ir;
          (0, P.useEffect)(() => {
            f.refreshInfo?.login_token_id && kr(f.refreshInfo.login_token_id);
          }, [f.refreshInfo, kr]);
          const er = E.TS.EUNIVERSE !== M.wLO,
            gr = `rgb(${B}, ${B}, ${B})`;
          return (0, d.jsx)("div", {
            className: rr().Column,
            children: (0, d.jsxs)("div", {
              style: { position: "relative" },
              children: [
                (0, d.jsx)(rt, {
                  borderWidth: 0,
                  activeBitColor: [21, 23, 28],
                  inactiveBitColor: er ? [B, 0, B] : [B, B, B],
                  quality: ct(Cr),
                  className: (0, F.A)(
                    rr().LoginQR,
                    z == "deck" && rr().QRLoginDeck,
                    z == "vr" && rr().QRLoginVR,
                    H && rr().Blur,
                    er && rr().NonPublic,
                  ),
                  children: Cr,
                }),
                H &&
                  (0, d.jsx)("div", {
                    className: rr().Overlay,
                    children: (0, d.jsx)("div", {
                      className: rr().Box,
                      style: { "--qr-bright-color": gr },
                      children: de,
                    }),
                  }),
              ],
            }),
          });
        }
        function ct(f) {
          return f.length <= 90 ? ke.Q : void 0;
        }
        function ft(f) {
          const { size: t } = f;
          return (0, d.jsx)("div", {
            className: (0, F.A)(
              rr().Loading,
              t == "small" && rr().Small,
              (t == "medium" || !t) && rr().Medium,
              t == "large" && rr().Large,
            ),
          });
        }
        function gt(f) {
          return (0, d.jsx)(Er.$n, {
            onClick: f.reset,
            className: rr().QRFailure,
            children: (0, d.jsx)(bt, {}),
          });
        }
        function bt(f) {
          return (0, d.jsxs)("svg", {
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
              (0, d.jsx)("path", {
                fill: "none",
                stroke: "#fff",
                strokeWidth: "30",
                strokeLinecap: "round",
                strokeMiterlimit: "10",
                d: "M229.809,147.639 c-9.178,47.863-51.27,84.027-101.809,84.027c-57.253,0-103.667-46.412-103.667-103.666S70.747,24.334,128,24.334 c34.107,0,64.368,16.472,83.261,41.895",
              }),
              (0, d.jsx)("polygon", {
                points: "147.639,108.361 245.755,10.166 245.834,108.361",
                fill: "#fff",
              }),
            ],
          });
        }
        function Bt() {
          return (0, d.jsx)("svg", {
            version: "1.1",
            id: "base",
            xmlns: "http://www.w3.org/2000/svg",
            style: { width: "45px", height: "45px" },
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
            children: (0, d.jsx)("polyline", {
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
        var i = x(72609);
        const a = (0, P.createContext)(!1),
          n = () => (0, P.useContext)(a);
        function g() {
          return (0, d.jsx)("div", {
            className: w().Login,
            children: (0, d.jsx)(it, {
              reset: () => window.location.reload(),
              failure: D.eF.Generic,
            }),
          });
        }
        function o(f) {
          const t = ti(f.redirectUrl),
            l = (b) => {
              const { strRefreshToken: j } = b;
              (0, D.yp)(j).then(
                (z) => f.onComplete(z),
                () => f.onComplete(D.wI.k_PrimaryDomainFail),
              );
            };
          return t
            ? null
            : (0, d.jsx)(u, {
                ...f,
                creationRedirectUrl: f.redirectUrl,
                onSuccess: l,
                embedded: f.theme === "modal",
              });
        }
        function u(f) {
          const { embedded: t, children: l, ...b } = f;
          return (0, d.jsx)(Ue.tH, {
            children: (0, d.jsx)(a.Provider, {
              value: t ?? !1,
              children: (0, d.jsxs)("div", {
                className: w().Login,
                children: [(0, d.jsx)(Le, { ...b }), l],
              }),
            }),
          });
        }
        function p(f) {
          switch (f) {
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
        function O(f) {
          if ((0, Rr.q)()) return null;
          const { variant: t } = f;
          return typeof t == "function"
            ? (0, d.jsx)(He, {
                onClick: t,
                children: (0, v.we)("#Login_Help_SignIn"),
              })
            : (0, d.jsx)(He, {
                href: `${E.TS.HELP_BASE_URL}wizard/HelpWithLogin?redir=${encodeURIComponent(document.location.href)}`,
                children: (0, v.we)("#Login_Help_SignIn"),
              });
        }
        function yr(f) {
          const { variant: t, redirectUrl: l } = f;
          if (typeof t == "function")
            return (0, d.jsx)(He, {
              inline: !0,
              onClick: t,
              children: (0, v.we)("#Login_CreateAccount"),
            });
          {
            const b = l ? `?redir=${encodeURIComponent(l)}` : "";
            switch (t ?? "normal") {
              default:
              case "normal":
                return (0, d.jsx)(He, {
                  inline: !0,
                  href: `${E.TS.STORE_BASE_URL}join/${b}`,
                  children: (0, v.we)("#Login_CreateAccount"),
                });
              case "partner":
                return (0, d.jsx)(He, {
                  inline: !0,
                  href: `${E.TS.PARTNER_BASE_URL}${b}`,
                  children: (0, v.we)("#Login_CreateSteamworksAccount"),
                });
              case "none":
                return null;
            }
          }
        }
        function Gr(f) {
          const { launcherType: t, variant: l, redirectUrl: b } = f;
          if (t === M.A2g || l == "none") return null;
          const j = t !== void 0;
          let z;
          switch (l ?? "normal") {
            default:
            case "normal":
              z = "#Login_NoSteamAccount";
              break;
            case "partner":
              z = "#Login_NoSteamworksAccount";
              break;
          }
          return (0, d.jsxs)("div", {
            className: (0, F.A)(w().AccountCreation, j && w().InClient),
            children: [
              (0, d.jsx)("span", {
                className: w().AccountCreationPrompt,
                children: (0, v.we)(z),
              }),
              (0, d.jsx)(yr, { variant: l, redirectUrl: b }),
            ],
          });
        }
        async function oe() {
          const [f, t, l, b] = await Promise.all([
            SteamClient.System.GetOSType(),
            SteamClient.System.GetSystemInfo(),
            SteamClient?.Auth?.GetLocalHostname?.() ?? "",
            SteamClient?.Auth?.GetMachineID?.() ?? void 0,
          ]);
          return {
            os_type: f,
            device_friendly_name: l,
            machine_id: b,
            platform_type: e.SS.w0,
            gaming_device_type: t.eGamingDeviceType,
          };
        }
        async function ce() {
          return {
            device_friendly_name: window.navigator.userAgent,
            platform_type: e.SS.tS,
          };
        }
        function Ze(f) {
          const {
              onSuccess: t,
              secureComputer: l = !0,
              isProbablySharedPC: b = !1,
            } = f,
            j = (0, P.useCallback)(
              (H) => {
                if (H.bSuccess) {
                  const {
                    strRefreshToken: er,
                    strAccessToken: gr,
                    strAccountName: _r,
                    strNewGuardData: We,
                  } = H;
                  t({
                    strRefreshToken: er,
                    strAccessToken: gr,
                    strAccountName: _r,
                    strNewGuardData: We,
                  });
                }
              },
              [t],
            ),
            z = Yr({
              transport: f.transport,
              onComplete: j,
              onDeviceDetails: f.onDeviceDetails,
              onGetMachineAuth: f.onGetMachineAuth,
              onShowAgreement: f.onShowAgreement,
            }),
            [B, S] = (0, P.useState)(hr),
            L = "Login_RememberMeSetting",
            [U, N] = (0, P.useState)(
              f.refreshInfo?.account_name ?? f.defaultAccountName ?? "",
            ),
            [tr, re] = (0, P.useState)(""),
            [kr, Cr] = (0, P.useState)(
              l && !b && localStorage?.getItem(L) != "0",
            ),
            me = !(z.eStatus === te || z.eStatus === pr || z.eStatus === Or),
            Oe = () => (!U || !tr ? Promise.resolve(m.nO) : z.start(U, tr, kr)),
            ir = () => {
              (0, T.tG)(`Logging in offline with username ${U}`),
                SteamClient.User.SetLoginCredentials(U, tr, kr),
                SteamClient.User.StartOffline(!0);
            };
          return (
            (0, P.useEffect)(() => {
              f.refreshInfo?.login_token_id &&
                z.setTokenToRevoke(f.refreshInfo.login_token_id);
            }, [f.refreshInfo, z]),
            {
              password: z,
              onComplete: j,
              eQRStatus: B,
              onQRStatusChange: S,
              strAccountName: U,
              onAccountNameChange: N,
              strPassword: tr,
              onPasswordChange: re,
              bRememberMe: kr,
              onRememberMeChange: (H) => {
                Cr(H), localStorage?.setItem(L, H ? "1" : "0");
              },
              onPasswordSubmit: Oe,
              bInPasswordFlow: me,
              onTryOffline: ir,
            }
          );
        }
        function Ce() {
          const f =
            window?.location && (0, ne.f3)(window.location, "need_password");
          return f !== void 0 && f !== "false" && f !== "0";
        }
        function Le(f) {
          const {
              transport: t,
              onSuccess: l,
              platform: b,
              autoFocus: j,
              refreshInfo: z,
              renderSuccess: B = () => (0, d.jsx)(ei, {}),
              lastResult: S,
              joinLinkVariant: L,
              defaultAccountName: U,
              secureComputer: N = !0,
              isProbablySharedPC: tr = !1,
              onShowAgreement: re,
              creationRedirectUrl: kr,
            } = f,
            Cr = E.TS.IN_STEAMUI ? oe : ce,
            me = E.TS.IN_STEAMUI
              ? (_r) => SteamClient.Auth.GetSteamGuardData(_r)
              : null,
            Oe = Ce(),
            ir = Ze({
              transport: t,
              platform: b,
              onSuccess: l,
              refreshInfo: z,
              onDeviceDetails: Cr,
              onGetMachineAuth: me,
              defaultAccountName: U,
              secureComputer: N,
              isProbablySharedPC: tr,
              onShowAgreement: re,
            }),
            de = n(),
            H = (0, P.useId)();
          if (S != null && S != m.R)
            return (0, d.jsx)("div", {
              className: w().Login,
              children: (0, d.jsx)(it, {
                reset: () => window.location.reload(),
                failure: D.eF.Generic,
                errorReference: S.toString(),
                extendedErrorMessage: ir.password.strExtendedErrorMessage,
              }),
            });
          const er = !(0, E.Y2)();
          if (!ir.bInPasswordFlow) {
            const _r = (0, d.jsxs)("div", {
              className: (0, F.A)(w().SideBySide, de && w().Embedded),
              children: [
                (0, d.jsx)(Ke, {
                  strAccountName: ir.strAccountName,
                  onAccountNameChange: ir.onAccountNameChange,
                  strPassword: ir.strPassword,
                  onPasswordChange: ir.onPasswordChange,
                  bRememberMe: ir.bRememberMe,
                  onRememberMeChange: ir.onRememberMeChange,
                  onSubmit: ir.onPasswordSubmit,
                  status: ir.password.eStatus,
                  autoFocus: j,
                  secureComputer: N,
                  refreshInfo: f.refreshInfo,
                }),
                er &&
                  (0, d.jsx)(Ot, {
                    transport: t,
                    onQRStatusChange: ir.onQRStatusChange,
                    onComplete: ir.onComplete,
                    platform: b,
                    refreshInfo: z,
                  }),
              ],
            });
            if (de) {
              const $e = E.TS.IN_STEAMUI,
                Ye = $e ? E.TS.LAUNCHER_TYPE : void 0;
              return (0, d.jsxs)(Ve, {
                className: (0, F.A)(w().EmbeddedRoot, $e && w().InClient),
                children: [
                  !$e && !1,
                  !f.refreshInfo &&
                    (0, d.jsx)(wt, {
                      realm: E.TS.EREALM,
                      launcherType: Ye,
                      className: w().HeaderLogo,
                      onBack: f.onBack,
                    }),
                  (0, d.jsx)(pe, { refreshInfo: z }),
                  _r,
                  (0, d.jsxs)("div", {
                    className: (0, F.A)(
                      w().EmbeddedRootFooter,
                      $e && w().InClient,
                    ),
                    children: [
                      (0, d.jsx)(O, { variant: f.helpLinkVariant }),
                      (0, d.jsx)(Gr, {
                        launcherType: Ye,
                        variant: L,
                        redirectUrl: kr,
                      }),
                    ],
                  }),
                ],
              });
            }
            const We = (0, d.jsxs)("div", {
              style: {
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                margin: "8px 16px",
              },
              children: [
                !1,
                (0, d.jsx)("h2", {
                  className: w().PrimaryHeader,
                  id: H,
                  children: f.refreshInfo
                    ? (0, v.we)("#Login_RefreshSignIn")
                    : (0, v.we)("#Login_SignInTitle"),
                }),
                (0, d.jsx)(pe, { refreshInfo: f.refreshInfo }),
              ],
            });
            return (0, d.jsxs)(Qe, {
              title: We,
              titleId: H,
              children: [Oe && (0, d.jsx)(Re, {}), _r],
            });
          }
          const gr = ir.password.eStatus;
          switch (gr) {
            case xr:
              return f.renderLoading
                ? (0, d.jsx)(d.Fragment, { children: f.renderLoading() })
                : (0, d.jsx)(Vt, {});
            case fr:
            case wr:
            case or:
            case se:
              const _r = gr === fr || gr === wr;
              return (0, d.jsx)(Xt, {
                type: _r ? "mobile" : "email",
                onSubmitCode: ir.password.addCode,
                status: gr,
                associatedLabel: ir.password.strConfirmationAssociatedMessage,
                accountName: ir.password.strAccountName,
                onBack: ir.password.goBack,
                onCodeHelp: f.onCodeHelp,
              });
            case Mr:
            case Br:
              const We = gr === Mr;
              return (0, d.jsx)(kt, {
                type: We ? "mobile" : "email",
                accountName: ir.password.strAccountName,
                onUseCodeOverride: ir.password.useCodeOverride,
                onCodeHelp: f.onCodeHelp,
              });
            case Nr:
              return (0, d.jsx)($t, { reset: ir.password.reset });
            case Wr:
              return (0, d.jsx)(it, {
                reset: ir.password.reset,
                failure: ir.password.eFailureState,
                onRequestOffline: ir.onTryOffline,
                errorReference: ir.password.strErrorReference,
                extendedErrorMessage: ir.password.strExtendedErrorMessage,
              });
            case Lr:
              return (0, d.jsx)(Qe, { compact: !0, children: B() });
            default:
              return (
                (0, T.ZI)(`Unknown Phase: ${gr}`),
                (0, d.jsx)(it, {
                  reset: ir.password.reset,
                  failure: D.eF.Generic,
                  onRequestOffline: ir.onTryOffline,
                  errorReference: ir.password.strErrorReference,
                  extendedErrorMessage: ir.password.strExtendedErrorMessage,
                })
              );
          }
        }
        function pe(f) {
          if (!f.refreshInfo) return null;
          let t;
          switch (f.refreshInfo?.reason ?? m.zi) {
            case m.zi:
            case m.Vr:
            default:
              t = "#Login_RefreshReason_Generic";
              break;
            case m.KH:
              t = "#Login_RefreshReason_LoggedInElsewhere";
              break;
            case m.CF:
              t = "#Login_RefreshReason_LogonSessionReplaced";
              break;
            case m.Um:
              t = "#Login_RefreshReason_InvalidPassword";
              break;
            case m.fY:
              t = "#Login_RefreshReason_Revoked";
              break;
            case m.ob:
              t = "#Login_RefreshReason_Expired";
              break;
            case m.cr:
              t = "#Login_RefreshReason_PasswordRequiredToKickSession";
              break;
            case m.uN:
              t = "#Login_RefreshReason_AccountDisabled";
              break;
            case m.sG:
              t = "#Login_RefreshReason_ParentalControlRestricted";
              break;
            case m.h_:
              t = "#Login_RefreshReason_RateLimitExceeded";
              break;
          }
          return (0, d.jsxs)("div", {
            className: w().RefreshReasonContainer,
            children: [
              (0, d.jsx)("div", {
                className: w().RefreshTitle,
                children: (0, v.we)("#Login_RefreshSignIn"),
              }),
              (0, d.jsx)("div", {
                className: w().RefreshReason,
                children: (0, v.we)(t),
              }),
            ],
          });
        }
        function Re() {
          return (0, d.jsx)("div", {
            className: w().ConfirmCredntialsNag,
            children: (0, v.we)("#Login_ConfirmCredentials"),
          });
        }
        function Ke(f) {
          const {
              onSubmit: t,
              status: l,
              autoFocus: b,
              refreshInfo: j,
              strAccountName: z,
              onAccountNameChange: B,
              strPassword: S,
              onPasswordChange: L,
              bRememberMe: U,
              onRememberMeChange: N,
              secureComputer: tr = !0,
            } = f,
            [re, kr] = (0, P.useState)(!1),
            Cr = n(),
            me = si(),
            Oe = () => {
              t().then(() => {
                me() && kr(!1);
              });
            },
            ir = l === pr || l === xr,
            de = l === Or && !re,
            H = de
              ? (0, d.jsx)(ot, {
                  children: (0, v.we)("#Login_CheckCredentials"),
                })
              : (0, d.jsx)(ot, { children: "\xA0" }),
            er = b && !z,
            gr = b && !!z,
            _r = !!f.refreshInfo,
            We = (0, P.useId)(),
            $e = (0, P.useId)();
          return (0, d.jsxs)(xt, {
            onSubmit: Oe,
            className: w().LoginForm,
            children: [
              (0, d.jsx)(ut, {
                tone: de ? "danger" : void 0,
                label: (0, d.jsx)(st, {
                  highlight: !0,
                  inputId: We,
                  children: (0, v.we)("#Login_SignIn_WithAccountName"),
                }),
                value: z,
                onChange: (Ye) => {
                  kr(!0), B(Ye);
                },
                autoFocus: er,
                disabled: _r,
                id: We,
              }),
              (0, d.jsx)(ut, {
                tone: de ? "danger" : void 0,
                label: (0, d.jsx)(st, {
                  inputId: $e,
                  children: (0, v.we)("#Login_Password"),
                }),
                value: S,
                onChange: (Ye) => {
                  kr(!0), L(Ye);
                },
                type: "password",
                autoFocus: gr,
                id: $e,
              }),
              tr
                ? (0, d.jsx)(_.he, {
                    toolTipContent: "#Login_RememberMe_Tooltip",
                    direction: "bottom",
                    children: (0, d.jsx)(Nt, {
                      label: (0, v.we)("#Login_RememberMe_Short"),
                      value: U,
                      onChange: N,
                    }),
                  })
                : (0, d.jsx)("div", {
                    className: w().InsecureComputer,
                    children: (0, v.we)("#Login_InsecureComputer"),
                  }),
              (0, d.jsx)(Ft, { loading: ir, refreshLogin: _r }),
              H,
              !Cr &&
                (0, d.jsx)(He, {
                  href: `${E.TS.HELP_BASE_URL}wizard/HelpWithLogin?redir=${encodeURIComponent(document.location.href)}`,
                  align: "center",
                  children: (0, v.we)("#Login_Help_SignIn"),
                }),
            ],
          });
        }
        const tt = 700;
        function Ot(f) {
          const t = (0, ae.R7)(),
            l = () => t.ownerWindow.screen.width < tt,
            [b, j] = (0, P.useState)(l());
          return (
            (0, lr.l6)(t.ownerWindow, "resize", () => {
              j(l());
            }),
            (0, d.jsx)("div", {
              className: w().QRSection,
              children: b ? (0, d.jsx)(Et, { ...f }) : (0, d.jsx)(ht, { ...f }),
            })
          );
        }
        function It(f) {
          const t =
            E.TS.STORE_BASE_URL +
            "join/?guest=1&purchaseType=gift&checkout=1&redir=" +
            encodeURIComponent(f.redirectURL);
          return (0, d.jsx)("div", {
            className: w().GuestLayout,
            children: (0, d.jsx)(Qe, {
              compact: !0,
              children: (0, d.jsxs)("div", {
                className: w().GuestContainer,
                children: [
                  (0, d.jsx)("div", {
                    className: w().GuestText,
                    children: (0, v.oW)(
                      "#Login_Guest",
                      (0, d.jsx)("a", {
                        href: `${t}`,
                        style: { textDecoration: "underline" },
                      }),
                    ),
                  }),
                  (0, d.jsx)("a", {
                    className: w().GuestLink,
                    href: `${t}`,
                    children: (0, d.jsx)("button", {
                      className: w().GuestButton,
                      children: (0, v.we)("#Login_GuestContinue"),
                    }),
                  }),
                ],
              }),
            }),
          });
        }
        function ht(f) {
          return (0, d.jsx)(yt, { ...f });
        }
        function Et(f) {
          const [t, l] = (0, P.useState)(!1);
          return t
            ? (0, d.jsx)(yt, { ...f, bShowHideButton: !0, setShowQR: l })
            : (0, d.jsx)(Lt, { setShowQR: l });
        }
        function Lt(f) {
          return (0, d.jsxs)("div", {
            className: w().MessagingContainer,
            children: [
              (0, d.jsx)("div", {
                className: w().MessagingTag,
                children: (0, v.we)("#Login_MobileFlow_New"),
              }),
              (0, d.jsx)("div", {
                className: w().MessagingSubtitle,
                children: (0, d.jsx)("div", {
                  className: w().MessagingSubtitle,
                  children: (0, v.we)("#Login_MobileFlow_SignIn_ScanQR"),
                }),
              }),
              (0, d.jsx)("div", {
                className: w().MessagingButton,
                onClick: () => f.setShowQR(!0),
                children: (0, v.we)("#Login_MobileFlow_ShowMeQR_Button"),
              }),
              (0, d.jsx)("a", {
                href: `${E.TS.STORE_BASE_URL}mobile`,
                className: w().MessagingLink,
                children: (0, v.we)("#Login_JoinBeta_Button"),
              }),
            ],
          });
        }
        function yt(f) {
          const {
            onQRStatusChange: t,
            transport: l,
            onComplete: b,
            platform: j,
            refreshInfo: z,
            bShowHideButton: B = !1,
            setShowQR: S,
          } = f;
          return (0, d.jsxs)("div", {
            className: w().QRCodeContainer,
            children: [
              (0, d.jsx)(st, {
                highlight: !0,
                children: (0, v.we)("#Login_SignIn_OrWithQRCode"),
              }),
              (0, d.jsx)("div", {
                className: w().QR,
                children: (0, d.jsx)(et, {
                  onStatusChange: t,
                  transport: l,
                  onComplete: b,
                  platform: j,
                  refreshInfo: z,
                }),
              }),
              B &&
                S &&
                (0, d.jsx)("div", {
                  className: w().QRHideLink,
                  onClick: () => S(!1),
                  children: (0, v.we)("#Button_Hide"),
                }),
              (0, d.jsx)("div", {
                className: w().UseMobileAppForQR,
                children: (0, v.oW)(
                  "#Login_UseMobileAppForQR_Inline",
                  (0, d.jsx)(He, {
                    href: `${E.TS.STORE_BASE_URL}mobile`,
                    align: "center",
                  }),
                ),
              }),
            ],
          });
        }
        function ai() {
          const f = "bShowLoginQR",
            [t, l] = useState(localStorage?.getItem(f) === "1"),
            b = useCallback((j) => {
              l(j),
                j ? localStorage?.setItem(f, "1") : localStorage?.removeItem(f);
            }, []);
          return [t, b];
        }
        function ut(f) {
          const { label: t, error: l, tone: b, autoFocus: j, id: z, ...B } = f,
            S = b ?? (l ? "danger" : void 0);
          return (0, d.jsxs)("div", {
            className: w().TextField,
            children: [
              typeof t == "string"
                ? (0, d.jsx)(st, { inputId: z, children: t })
                : t,
              l && (0, d.jsx)(Ut, { type: "error", children: l }),
              (0, d.jsx)(Wt, { autoFocus: j, tone: S, id: z, ...B }),
            ],
          });
        }
        function st(f) {
          const { children: t, inputId: l, highlight: b } = f;
          return (0, d.jsx)("label", {
            className: (0, F.A)(w().FieldLabel, b && w().Highlight),
            htmlFor: l,
            children: t,
          });
        }
        function Wt(f) {
          const {
            value: t,
            onChange: l,
            type: b = "text",
            tone: j,
            className: z,
            autoFocus: B,
            disabled: S,
            id: L,
          } = f;
          return (0, d.jsx)("input", {
            value: t,
            type: b,
            autoFocus: B,
            onChange: (U) => l(U.target.value),
            className: (0, F.A)(w().TextInput, j === "danger" && w().Danger, z),
            disabled: S,
            id: L,
          });
        }
        function Ut(f) {
          const { children: t, type: l } = f;
          return (0, d.jsx)("div", {
            className: (0, F.A)(w().FieldHint, l === "error" && w().Error),
            children: t,
          });
        }
        function Nt(f) {
          const { label: t, onChange: l, value: b } = f;
          let j = () => {
            l && l(!b);
          };
          const z = (0, P.useId)();
          return (0, d.jsxs)("div", {
            className: w().CheckboxField,
            onClick: j,
            onKeyPress: (B) => {
              B.key == " " && (j(), B.preventDefault());
            },
            children: [
              (0, d.jsx)(Ht, { labelledBy: z, value: b }),
              (0, d.jsx)("label", {
                id: z,
                className: w().CheckboxFieldLabel,
                children: t,
              }),
            ],
          });
        }
        function Ht(f) {
          const { value: t, labelledBy: l } = f;
          return (0, d.jsx)("div", {
            tabIndex: 0,
            className: w().Checkbox,
            "aria-labelledby": l,
            role: "checkbox",
            "aria-checked": t,
            children:
              t &&
              (0, d.jsx)("div", {
                className: w().Check,
                children: (0, d.jsx)(ie.Jlk, { strokeWidth: 35 }),
              }),
          });
        }
        function Ft(f) {
          const { refreshLogin: t, ...l } = f;
          return t &&
            "SteamClient" in globalThis &&
            "User" in SteamClient &&
            "StartShutdown" in SteamClient.User
            ? (0, d.jsx)(Pt, {})
            : (0, d.jsx)(Dt, { ...l });
        }
        function Dt(f) {
          return (0, d.jsx)("div", {
            className: w().SignInButtonContainer,
            children: (0, d.jsx)(Zt, {
              ...f,
              children: (0, v.we)("#Login_SignIn"),
            }),
          });
        }
        function Pt() {
          const f = () => SteamClient.User.StartShutdown(!0);
          return (0, d.jsxs)("div", {
            className: w().RefreshButtonContainer,
            children: [
              (0, d.jsx)("button", {
                className: w().SubmitButton,
                type: "submit",
                children: (0, v.we)("#Login_SignIn"),
              }),
              (0, d.jsx)("button", {
                className: w().RefreshQuitButton,
                onClick: f,
                children: (0, v.we)("#Login_ExitSteam"),
              }),
            ],
          });
        }
        function Zt(f) {
          return (0, d.jsx)(jt, { type: "submit", ...f });
        }
        function jt(f) {
          const {
              className: t,
              loading: l,
              disabled: b,
              children: j,
              ...z
            } = f,
            B = b || l;
          return (0, d.jsxs)("button", {
            className: (0, F.A)(w().SubmitButton, l && w().Loading, t),
            disabled: B,
            ...z,
            children: [
              j,
              l &&
                (0, d.jsx)("div", {
                  className: w().LoadingContainer,
                  children: (0, d.jsx)(Mt, { size: "small" }),
                }),
            ],
          });
        }
        function ot(f) {
          const t = f.children || "\xA0";
          return (0, d.jsx)("div", { className: w().FormError, children: t });
        }
        function Vt() {
          return (0, d.jsx)(Qe, {
            compact: !0,
            children: (0, d.jsxs)(Ve, {
              alignItems: "center",
              className: (0, F.A)(
                w().WaitingForTokenContainer,
                E.TS.IN_STEAMUI && w().Client,
              ),
              children: [
                (0, d.jsx)(R.t, { size: "xlarge" }),
                (0, d.jsx)("div", {
                  className: (0, F.A)(w().Description),
                  children: (0, v.we)(
                    E.TS.IN_STEAMUI
                      ? "#Login_ConnectingToSteam"
                      : "#Login_LoadingAccountInfo",
                  ),
                }),
              ],
            }),
          });
        }
        function Mt(f) {
          const { size: t } = f;
          return (0, d.jsx)("div", {
            className: (0, F.A)(
              w().LoadingSpinner,
              t == "small" && w().Small,
              (t == "medium" || !t) && w().Medium,
              t == "large" && w().Large,
            ),
          });
        }
        function Yt(f) {
          return (0, d.jsx)("div", {
            className: w().OfferOffline,
            children: (0, d.jsx)("button", {
              className: w().OfferOfflineButton,
              onClick: f.onRequestOffline,
              children: (0, v.we)("#Login_GoOffline_Button"),
            }),
          });
        }
        function it(f) {
          const {
              reset: t,
              failure: l,
              onRequestOffline: b,
              errorReference: j,
              extendedErrorMessage: z,
            } = f,
            { title: B, description: S } = Kt(l, z),
            L = E.TS.IN_STEAMUI && l == D.eF.Network;
          return (0, d.jsxs)(Qe, {
            compact: !0,
            children: [
              (0, d.jsxs)(Ve, {
                alignItems: "center",
                gap: 12,
                children: [
                  (0, d.jsx)("div", {
                    className: w().FailureTitle,
                    children: B,
                  }),
                  (0, d.jsx)("div", {
                    className: w().FailureDescription,
                    children: S,
                  }),
                  L &&
                    (0, d.jsx)("div", {
                      className: w().FailureDescription,
                      children: (0, v.we)("#Login_GoOffline_Description"),
                    }),
                  (0, d.jsxs)(at, {
                    className: w().FailureButtons,
                    children: [
                      (0, d.jsx)(jt, {
                        className: w().TryAgainButton,
                        onClick: t,
                        children: (0, v.we)("#Button_Retry"),
                      }),
                      L && b && (0, d.jsx)(Yt, { onRequestOffline: b }),
                    ],
                  }),
                ],
              }),
              j &&
                (0, d.jsx)("div", {
                  className: w().MutedErrorReference,
                  children: (0, v.we)("#Login_Error_Reference", j),
                }),
            ],
          });
        }
        function Kt(f, t = "") {
          let l = { title: "", description: "" };
          switch (f) {
            case D.eF.None:
              return { title: "", description: "" };
            case D.eF.Expired:
              l = {
                title: (0, v.we)("#Login_Error_Expired_Title"),
                description: (0, v.we)("#Login_Error_Expired_Description"),
              };
              break;
            case D.eF.Network:
              l = {
                title: (0, v.we)("#Login_Error_Network_Title"),
                description: (0, v.we)("#Login_Error_Network_Description"),
              };
              break;
            case D.eF.MoveAuthenticator:
              l = {
                title: (0, v.we)("#Error_Generic"),
                description: (0, v.we)(
                  "#Login_Error_MoveAuthenticator_Description",
                ),
              };
              break;
            case D.eF.RateLimitExceeded:
              l = {
                title: (0, v.we)("#Login_Error_RateLimit_Title"),
                description: (0, v.we)("#Login_Error_RateLimit_Description"),
              };
              break;
            case D.eF.AnonymousLogin:
              l = {
                title: (0, v.we)("#Login_Error_Anonymous_Title"),
                description: (0, v.we)("#Login_Error_Anonymous_Description"),
              };
              break;
            case D.eF.Generic:
            default:
              l = {
                title: (0, v.we)("#Error_Generic"),
                description: (0, v.we)("#Login_Error_Default_Description"),
              };
              break;
          }
          return t && (l.description = t), l;
        }
        function $t(f) {
          const { reset: t } = f;
          return (0, d.jsx)(it, { reset: t, failure: D.eF.Generic });
        }
        function Xt(f) {
          const {
              type: t,
              onSubmitCode: l,
              status: b,
              accountName: j,
              associatedLabel: z,
              onBack: B,
            } = f,
            [S, L] = (0, P.useState)([]),
            [U, N] = (0, P.useState)(!1),
            [tr, re] = (0, P.useState)(!1),
            [kr, Cr] = (0, P.useState)(!1),
            [me, Oe] = (0, P.useState)(0),
            ir = t === "mobile",
            de = S.join(""),
            H = xe(de, kr),
            er = (lt) => {
              re(!0),
                l(lt).then(() => {
                  N(!1), re(!1);
                });
            },
            gr = (lt) => {
              U || N(!0), L(lt);
              const pt = lt.join("");
              xe(pt, kr) && er(pt);
            },
            _r = () => {
              H && er(de);
            },
            We = () => {
              Cr(!kr), L([]), l(""), Oe(me + 1);
            },
            $e = !U && (b === wr || b === se);
          let Ye, nt;
          return (
            kr
              ? t === "mobile"
                ? ((nt = (0, d.jsx)(vt, {})), (Ye = "#Login_UseMobileCode"))
                : ((nt = (0, d.jsx)(vt, {})), (Ye = "#Login_UseEmailCode"))
              : ((nt =
                  t === "mobile"
                    ? (0, d.jsx)(Jt, {})
                    : (0, d.jsx)(Tt, { emailAddress: z })),
                (Ye = "#Login_UseBackupCode")),
            (0, d.jsx)(Qe, {
              title: (0, d.jsx)(wt, {}),
              compact: !0,
              children: (0, d.jsx)(xt, {
                onSubmit: _r,
                children: (0, d.jsxs)(Ve, {
                  alignItems: "center",
                  gap: 14,
                  children: [
                    (0, d.jsx)(St, { type: t, accountName: j }),
                    (0, d.jsxs)("div", {
                      className: w().ConfirmationEntryContainer,
                      children: [
                        (0, d.jsxs)(Ve, {
                          alignItems: "center",
                          gap: 2,
                          children: [
                            $e &&
                              (0, d.jsx)(ot, {
                                children: (0, v.we)(
                                  "#Login_IncorrectSteamGuard",
                                ),
                              }),
                            (0, d.jsx)(
                              Ct,
                              {
                                value: S,
                                onChange: gr,
                                tone: $e ? "danger" : void 0,
                                loading: tr,
                                backupCode: kr,
                              },
                              me,
                            ),
                          ],
                        }),
                        nt,
                      ],
                    }),
                    ir &&
                      (0, d.jsx)(He, {
                        onClick: We,
                        align: "center",
                        children: (0, v.we)(Ye),
                      }),
                    (0, d.jsx)(zt, { type: t, onCodeHelp: f.onCodeHelp }),
                  ],
                }),
              }),
            })
          );
        }
        function zt(f) {
          if ((0, Rr.q)()) return null;
          let t, l;
          return (
            f.type === "mobile"
              ? ((t = `${E.TS.HELP_BASE_URL}wizard/HelpWithLoginInfo?lost=8&issueid=402`),
                (l = (0, v.we)("#Login_Help_AccessMobileApp")))
              : ((t = `${E.TS.HELP_BASE_URL}wizard/HelpWithSteamGuardCode`),
                (l = (0, v.we)("#Login_Help_AccessEmail"))),
            f.onCodeHelp
              ? (0, d.jsx)(He, {
                  onClick: () => f.onCodeHelp(t),
                  align: "center",
                  children: l,
                })
              : (0, d.jsx)(He, { href: t, align: "center", children: l })
          );
        }
        function vt() {
          return (0, d.jsx)(at, {
            justifyContent: "space-evenly",
            alignItems: "center",
            className: w().EnterBackupCodeContainer,
            children: (0, d.jsxs)(Ve, {
              children: [
                (0, d.jsx)("div", {
                  className: w().EnterCodeFromMobile,
                  children: (0, v.we)("#Login_EnterBackupCode"),
                }),
                (0, d.jsx)("div", {
                  className: w().Label,
                  children: (0, v.we)("#Login_EnterBackupCodeDescription"),
                }),
              ],
            }),
          });
        }
        function Jt() {
          return (0, d.jsxs)(at, {
            justifyContent: "space-evenly",
            alignItems: "center",
            className: w().EnterCodeFromMobileContainer,
            children: [
              (0, d.jsx)("div", {
                className: w().EnterCodeFromMobile,
                children: (0, v.we)("#Login_EnterMobileCode"),
              }),
              (0, d.jsx)(qt, { className: w().AwaitingMobileConfIcon }),
            ],
          });
        }
        function Tt(f) {
          return (0, d.jsxs)(at, {
            justifyContent: "space-evenly",
            alignItems: "center",
            className: w().EnterCodeFromEmailContainer,
            children: [
              (0, d.jsx)(Rt, {
                align: "center",
                spacing: 6,
                children: (0, d.jsx)("div", {
                  className: w().EnterCodeFromEmail,
                  children: (0, v.PP)(
                    "#Login_EnterEmailCode",
                    (0, d.jsx)("span", {
                      className: w().EnterCodeEmailAddress,
                      children: f.emailAddress,
                    }),
                  ),
                }),
              }),
              (0, d.jsx)(Gt, { className: w().AwaitingEmailConfIcon }),
            ],
          });
        }
        function St(f) {
          const { accountName: t, type: l } = f,
            b =
              l === "mobile"
                ? (0, v.we)("#Login_MobileProtectingAccount")
                : (0, v.we)("#Login_EmailProtectingAccount"),
            j = n();
          return (0, d.jsxs)("div", {
            className: w().ProtectingAccount,
            children: [
              (0, d.jsx)("div", {
                className: w().Label,
                children: (0, v.PP)(
                  "#Login_ActiveAccountName",
                  (0, d.jsx)("span", {
                    className: w().AccountName,
                    children: t,
                  }),
                ),
              }),
              !j &&
                (0, d.jsx)("div", { className: w().Description, children: b }),
            ],
          });
        }
        function Qt() {
          return (0, d.jsx)(Ve, {
            alignItems: "center",
            children: (0, d.jsxs)("div", {
              className: w().ConfirmationContainer,
              children: [
                (0, d.jsx)("img", { src: (0, i.YJ)(ge) }),
                (0, d.jsx)("div", {
                  className: w().AwaitingMobileConfText,
                  children: (0, v.oW)("#Login_AwaitingMobileConfirmation"),
                }),
              ],
            }),
          });
        }
        function qt(f) {
          return (0, d.jsxs)("svg", {
            viewBox: "0 0 33 49",
            fill: "currentColor",
            className: f.className,
            children: [
              (0, d.jsx)("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M28 47.1106C29.1046 47.1106 30 46.2151 30 45.1106L30 3.72705C30 2.62248 29.1046 1.72705 28 1.72705L5 1.72705C3.89544 1.72705 3 2.62248 3 3.72705L3 45.1106C3 46.2151 3.89543 47.1106 5 47.1106L28 47.1106ZM5.68119 5.82741L27.3188 5.82741L27.3188 42.7772H5.68119L5.68119 5.82741ZM20.9999 44.944C20.9999 45.3429 20.6766 45.6662 20.2777 45.6662L12.7221 45.6662C12.3233 45.6662 11.9999 45.3429 11.9999 44.944C11.9999 44.5451 12.3233 44.2218 12.7221 44.2218H20.2777C20.6766 44.2218 20.9999 44.5451 20.9999 44.944ZM17.2778 4.44406C17.6767 4.44406 18 4.12071 18 3.72184C18 3.32296 17.6767 2.99962 17.2778 2.99962L15.7222 2.99962C15.3233 2.99962 15 3.32296 15 3.72184C15 4.12071 15.3233 4.44406 15.7222 4.44406L17.2778 4.44406Z",
              }),
              (0, d.jsx)("path", {
                fill: "currentColor",
                d: "M22.2456 22.4164C22.2456 21.6666 22.8127 21.0002 23.6228 21.0002C24.3519 21.0002 25 21.6666 25 22.4164C25 23.1661 24.3519 23.8325 23.6228 23.8325C22.8937 23.8325 22.2456 23.1661 22.2456 22.4164Z",
              }),
              (0, d.jsx)("path", {
                fill: "currentColor",
                d: "M18.6812 22.4164C18.6812 21.6666 19.2483 21.0002 20.0584 21.0002C20.8685 21.0002 21.5166 21.6666 21.4355 22.4164C21.4355 23.1661 20.8685 23.8325 20.0584 23.8325C19.3293 23.8325 18.6812 23.1661 18.6812 22.4164Z",
              }),
              (0, d.jsx)("path", {
                fill: "currentColor",
                d: "M15.1977 22.4164C15.1977 21.6666 15.7648 21.0002 16.5749 21.0002C17.304 21.0002 17.9521 21.6666 17.9521 22.4164C17.9521 23.1661 17.385 23.8325 16.5749 23.8325C15.8458 23.8325 15.1977 23.1661 15.1977 22.4164Z",
              }),
              (0, d.jsx)("path", {
                fill: "currentColor",
                d: "M11.7143 22.4164C11.7143 21.6666 12.2814 21.0002 13.0915 21.0002C13.8206 21.0002 14.4686 21.6666 14.4686 22.4164C14.4686 23.1661 13.9016 23.8325 13.0915 23.8325C12.3624 23.8325 11.7143 23.1661 11.7143 22.4164Z",
              }),
              (0, d.jsx)("path", {
                fill: "currentColor",
                d: "M8.14983 22.4164C8.14983 21.6666 8.7169 21.0002 9.527 21.0002C10.3371 21.0002 10.9852 21.6666 10.9042 22.4164C10.9042 23.1661 10.3371 23.8325 9.527 23.8325C8.79791 23.8325 8.14983 23.1661 8.14983 22.4164Z",
              }),
            ],
          });
        }
        function Gt(f) {
          return (0, d.jsx)("svg", {
            viewBox: "0 0 58 56",
            fill: "none",
            className: f.className,
            children: (0, d.jsx)("path", {
              d: "M57.9352 24.5887C57.8463 24.233 57.8463 23.8774 57.6684 23.5217C57.4017 22.8993 57.046 22.4547 56.5125 22.0101L49.577 16.4083V10.9844C49.577 8.85041 47.8876 7.16098 45.7536 7.16098H38.1956L31.5269 1.73706C30.1042 0.581137 28.0591 0.581137 26.6364 1.73706L19.9677 7.16098H12.4097C10.2757 7.16098 8.58631 8.93932 8.58631 10.9844V16.4083L1.56188 22.0101C1.02838 22.3658 0.672713 22.8993 0.405962 23.5217V23.6106C0.228128 24.1441 0.050293 24.5887 0.050293 25.1222V52.1529C0.050293 53.2199 0.494878 54.1091 1.1173 54.8204C1.82863 55.5318 2.80672 55.8874 3.7848 55.8874H54.0228C55.0898 55.8874 55.979 55.4428 56.6903 54.8204C57.4017 54.1091 57.7573 53.131 57.7573 52.1529V25.1222C57.9352 24.8554 57.9352 24.7665 57.9352 24.5887ZM49.577 19.7872L54.7342 23.9663L49.577 28.9456V19.7872ZM28.148 3.60431C28.4148 3.42648 28.6815 3.24864 28.9483 3.24864C29.3039 3.24864 29.5707 3.33756 29.7485 3.60431L34.0165 7.07207H23.9689L28.148 3.60431ZM10.9871 10.9844C10.9871 10.2731 11.5206 9.73958 12.2319 9.73958H45.6646C46.376 9.73958 46.9095 10.362 46.9095 10.9844V31.4353L46.8206 31.5242L40.2407 37.9262H17.6558L11.076 31.5242L10.9871 31.4353V10.9844ZM8.40848 19.7872V28.9456L3.34022 23.9663L8.40848 19.7872ZM2.62888 51.6194V26.9005L15.2551 39.26L2.62888 51.6194ZM4.49614 53.3088L17.6558 40.5048H40.2407L53.4004 53.3088H4.49614ZM55.3566 51.6194L42.6415 39.1711L55.2677 26.8116V51.6194H55.3566ZM29.0372 35.3476C30.5488 35.3476 31.9715 35.0809 33.3941 34.5474C34.0165 34.2806 34.3722 33.4804 34.1055 32.858C33.8387 32.2355 33.0385 31.8799 32.416 32.1466C31.349 32.5912 30.1931 32.769 29.0372 32.769C27.3478 32.769 25.7473 32.3245 24.4135 31.5242C21.746 29.9237 20.0566 27.0784 20.0566 23.7884C20.0566 18.8091 24.0579 14.8078 29.0372 14.8078C34.0165 14.8078 38.0178 18.8091 38.0178 23.7884V24.4109C38.0178 25.4779 37.2175 26.367 36.0616 26.367C34.9946 26.367 34.1055 25.4779 34.1055 24.4109V23.7884C34.1055 20.9431 31.7936 18.6313 28.9483 18.6313C26.1029 18.6313 23.7911 20.9431 23.7911 23.7884C23.7911 26.6338 26.1029 28.9456 28.9483 28.9456C30.3709 28.9456 31.7047 28.3232 32.5939 27.434C33.3941 28.4121 34.639 28.9456 35.9727 28.9456C38.4624 28.9456 40.5075 26.9894 40.5075 24.4109V23.7884C40.5075 17.3864 35.2614 12.2292 28.9483 12.2292C22.6352 12.2292 17.3891 17.4753 17.3891 23.7884C17.3891 26.7227 18.545 29.4791 20.3233 31.5242C22.5463 33.925 25.5694 35.3476 29.0372 35.3476ZM29.0372 26.367C27.6145 26.367 26.4586 25.2111 26.4586 23.7884C26.4586 22.3658 27.6145 21.2098 29.0372 21.2098C30.4599 21.2098 31.6158 22.3658 31.6158 23.7884C31.5269 25.2111 30.371 26.367 29.0372 26.367Z",
              fill: "#1A99FF",
            }),
          });
        }
        function ni(f) {
          const [t, l] = useSvgId();
          return jsxs("svg", {
            className: f.className,
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
                fill: f.phoneOutlineColor ?? "currentColor",
              }),
              jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M3.10899 2.54601C3 2.75992 3 3.03995 3 3.6V48.4C3 48.9601 3 49.2401 3.10899 49.454C3.20487 49.6422 3.35785 49.7951 3.54601 49.891C3.75992 50 4.03995 50 4.6 50H29.4C29.9601 50 30.2401 50 30.454 49.891C30.6422 49.7951 30.7951 49.6422 30.891 49.454C31 49.2401 31 48.9601 31 48.4V3.6C31 3.03995 31 2.75992 30.891 2.54601C30.7951 2.35785 30.6422 2.20487 30.454 2.10899C30.2401 2 29.9601 2 29.4 2H23C22.9469 2 22.8965 2.0232 22.8562 2.06277C22.7957 2.12213 22.7857 2.22585 22.7855 2.32129C22.7839 3.09871 22.7694 3.51909 22.6437 3.85908C22.4867 4.28385 22.2109 4.63059 21.8671 4.82458C21.5561 5 21.1565 5 20.3571 5H13.6429C12.8435 5 12.4439 5 12.1329 4.82458C11.7891 4.63059 11.5133 4.28385 11.3563 3.85908C11.2306 3.51909 11.2161 3.09871 11.2145 2.32129C11.2143 2.22585 11.2043 2.12213 11.1438 2.06277C11.1035 2.0232 11.0531 2 11 2H4.6C4.03995 2 3.75992 2 3.54601 2.10899C3.35785 2.20487 3.20487 2.35785 3.10899 2.54601Z",
                fill: f.backgroundColor ?? "currentColor",
              }),
              jsx("g", {
                clipPath: l,
                children: jsx("path", {
                  d: "M24.3333 17.6667H22.5V19.5H24.3333V17.6667ZM26.1667 15.8333V21.3333H20.6667V15.8333H26.1667V15.8333ZM27.0833 26.8333H25.25C24.3333 26.8333 24.3333 26.8333 24.3333 27.75V31.4167C24.3333 32.3335 24.3333 32.3335 25.25 32.3335H27.0833C28 32.3335 28 32.3335 28 31.4167V27.75C28 26.8333 28 26.8333 27.0833 26.8333ZM21.5833 26.8333C20.6665 26.8333 20.6665 26.8333 20.6665 27.75C20.6665 28.6667 20.6665 28.6667 21.5833 28.6667C22.5 28.6667 22.5 28.6667 22.5 27.75C22.5 26.8333 22.5 26.8333 21.5833 26.8333ZM27.0833 34.1667C26.1665 34.1667 26.1665 34.1667 26.1665 35.0835C26.1665 36.0002 26.1665 36.0002 27.0833 36.0002C28 36 28 36 28 35.0833C28 34.1667 28 34.1667 27.0833 34.1667ZM16.0833 23.1667C15.1665 23.1667 15.1665 23.1667 15.1665 24.0835C15.1665 25.0002 15.1665 25.0002 16.0833 25.0002C17 25.0002 17 25 17 24.0833C17 23.1665 17 23.1667 16.0833 23.1667ZM11.5 17.6667H9.66674V19.5H11.5V17.6667ZM13.3333 15.8333V21.3333H7.83326V15.8333H13.3333V15.8333ZM14.25 14H6.91674C6 14 6 14 6 14.9167V24.0835C6 25 6 25 6.91674 25C7.83348 25 7.83348 25 7.83348 24.0833V23.1665H14.25C15.1667 23.1665 15.1667 23.1665 15.1667 22.2498V19.5H16.0835C17 19.5 17 19.5 17 18.5833C17 17.6665 17 17.6665 16.0833 17.6665H15.1665V14.9165C15.1667 14 15.1667 14 14.25 14ZM27.0833 30.5H23.4167C22.5 30.5 22.5 30.5 22.5 31.4167V34.1667H21.5833C20.6665 34.1667 20.6665 34.1667 20.6665 35.0835C20.6665 36.0002 20.6665 36.0002 21.5833 36.0002H23.4165C24.3333 36.0002 24.3333 36.0002 24.3333 35.0835V32.3335H27.0833C28 32.3335 28 32.3335 28 31.4167C28 30.5 28 30.5 27.0833 30.5ZM19.75 30.5C18.8333 30.5 18.8333 30.5 18.8333 31.4167C18.8333 32.3335 18.8333 32.3335 19.75 32.3335C20.6667 32.3335 20.6667 32.3335 20.6667 31.4167C20.6667 30.5 20.6667 30.5 19.75 30.5ZM10.5833 25C9.66652 25 9.66652 25 9.66652 25.9167V26.8335H6.91652C6 26.8333 6 26.8333 6 27.75V35.0833C6 36 6 36 6.91674 36H14.25C15.1667 36 15.1667 36 15.1667 35.0833V34.1665H17V35.0833C17 36 17 36 17.9167 36C18.8335 36 18.8335 36 18.8335 35.0833V33.25C18.8335 32.3333 18.8335 32.3333 17.9167 32.3333H15.1667V30.5H17.9167C18.8335 30.5 18.8335 30.5 18.8335 29.5833C18.8335 28.6665 18.8335 28.6665 17.9167 28.6665H15.1667V27.75C15.1667 26.8333 15.1667 26.8333 14.25 26.8333H11.5V25.9165C11.5 25 11.5 25 10.5833 25ZM13.3333 28.6667V34.1667H7.83326V28.6667H13.3333ZM11.5 30.5H9.66674V32.3333H11.5V30.5ZM27.0833 14H17.9167C17 14 17 14 17 14.9167C17 15.8335 17 15.8335 17.9167 15.8335H18.8335V22.25C18.8335 23.1667 18.8335 23.1667 19.7502 23.1667H20.667V24.0835C20.667 25.0002 20.667 25.0002 21.5837 25.0002C22.5 25 22.5 25 22.5 24.0833V23.1665H24.3333V27.75C24.3333 28.6667 24.3333 28.6667 25.25 28.6667C26.1667 28.6667 26.1667 28.6667 26.1667 27.75V23.1667H27.0835C28.0002 23.1667 28.0002 23.1667 28.0002 22.25V14.9167C28 14 28 14 27.0833 14Z",
                  fill: f.qrCodeColor ?? "currentColor",
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
        function li(f) {
          return jsxs("svg", {
            className: f.className,
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
        function kt(f) {
          const { type: t, accountName: l, onUseCodeOverride: b } = f,
            j = n(),
            z = (0, d.jsx)(zt, { type: "mobile", onCodeHelp: f.onCodeHelp }),
            B = j
              ? (0, d.jsx)("div", {
                  style: { paddingBottom: "20px" },
                  children: (0, d.jsx)(He, {
                    align: "center",
                    onClick: b,
                    children: (0, v.we)("#Login_EnterCodeInstead"),
                  }),
                })
              : (0, d.jsx)("div", {
                  className: w().EnterCodeInsteadLink,
                  children: (0, d.jsx)(He, {
                    align: "center",
                    onClick: b,
                    children: (0, v.we)("#Login_EnterCodeInstead"),
                  }),
                });
          return (0, d.jsx)(Qe, {
            title: (0, d.jsx)(wt, {}),
            compact: !0,
            children: (0, d.jsxs)(Ve, {
              gap: E.TS.IN_STEAMUI ? 24 : 40,
              children: [
                (0, d.jsx)(St, { type: t, accountName: l }),
                (0, d.jsx)(Qt, {}),
                (0, d.jsxs)("div", {
                  className: w().LinkContainer,
                  children: [B, z],
                }),
              ],
            }),
          });
        }
        function He(f) {
          const { children: t, align: l, inline: b } = f,
            j = (0, F.A)(w().TextLink, l === "center" && w().TextAlignCenter);
          if ("href" in f) {
            const z = E.TS.IN_STEAMUI
              ? `steam://openurl_external/${f.href}`
              : f.href;
            return (0, d.jsx)("a", { className: j, href: z, children: t });
          } else {
            const z = b ? "span" : "div";
            return (0, d.jsx)(z, {
              className: j,
              onClick: f.onClick,
              children: t,
            });
          }
        }
        function xt(f) {
          const { onSubmit: t, children: l, className: b } = f,
            j = (z) => (z.preventDefault(), t(), !1);
          return (0, d.jsx)("form", { onSubmit: j, className: b, children: l });
        }
        function mi(f) {
          const { align: t, ...l } = f;
          return jsx("div", {
            className: classnames(styles.Text, t === "center" && styles.Center),
            ...l,
          });
        }
        function Ve(f) {
          const {
              alignItems: t,
              justifyContent: l,
              gap: b,
              className: j,
              ariaLabelledBy: z,
              children: B,
            } = f,
            S = (0, F.A)(
              w().FlexCol,
              t === "center" && w().AlignItemsCenter,
              l === "center" && w().JustifyContentCenter,
              j,
            ),
            L = b ? { gap: typeof b == "number" ? `${b}px` : b } : void 0;
          return (0, d.jsx)("section", {
            className: S,
            style: L,
            "aria-labelledby": z,
            children: B,
          });
        }
        function at(f) {
          const {
              children: t,
              justifyContent: l,
              alignItems: b,
              className: j,
            } = f,
            z = {
              display: "flex",
              flexDirection: "row",
              justifyContent: l,
              alignItems: b,
            };
          return (0, d.jsx)("div", { style: z, className: j, children: t });
        }
        function Ct(f) {
          const { onChange: t, backupCode: l = !1, ...b } = f,
            j = (z) => {
              z = z.map((S) => S.toUpperCase());
              const B = z.join("").trim();
              Fr(B, l) && t(z);
            };
          return (0, d.jsx)(ee, {
            length: Ur(l),
            backupCode: l,
            onChange: j,
            autoFocus: !0,
            ...b,
            allowCharacter: (z) => /\w/g.test(z),
          });
        }
        function Rt(f) {
          const { children: t, spacing: l = 0, align: b } = f;
          return (0, d.jsx)(Ve, {
            alignItems: b,
            children: P.Children.map(t, (j, z) =>
              j
                ? (0, d.jsx)("div", {
                    style: z > 0 ? { paddingTop: `${l}px` } : void 0,
                    children: j,
                  })
                : null,
            )?.filter(Boolean),
          });
        }
        function Qe(f) {
          const { title: t, titleId: l, children: b, compact: j } = f,
            z = n(),
            B = (0, P.useId)();
          return (0, d.jsxs)(Ve, {
            gap: E.TS.IN_STEAMUI ? 0 : 32,
            className: (0, F.A)(
              w().StandardLayout,
              z && w().Embedded,
              j && w().Compact,
              E.TS.IN_STEAMUI && "IN_CLIENT",
            ),
            ariaLabelledBy: l ?? B,
            children: [
              typeof t == "string"
                ? (0, d.jsx)("div", {
                    className: w().PrimaryHeader,
                    id: l ?? B,
                    children: t,
                  })
                : t,
              (0, d.jsx)("div", { className: w().FormContainer, children: b }),
            ],
          });
        }
        function wt(f) {
          const {
            realm: t = E.TS.EREALM,
            launcherType: l = E.TS.IN_STEAMUI ? E.TS.LAUNCHER_TYPE : void 0,
            className: b = w().HeaderLogo,
          } = f;
          return l === M.A2g
            ? (0, d.jsx)("div", { className: b })
            : (0, d.jsxs)("div", {
                className: w().LogoContainer,
                children: [
                  (0, d.jsx)(At, { onBack: f.onBack }),
                  t !== fe.TU.k_ESteamRealmChina
                    ? (0, d.jsx)(_t, { className: b })
                    : (0, d.jsx)(ri, { className: b }),
                  " ",
                ],
              });
        }
        function At(f) {
          return f.onBack
            ? (0, d.jsx)("div", {
                className: w().BackArrowContainer,
                onClick: f.onBack,
                children: (0, d.jsx)(ie.Q38, { className: w().BackArrow }),
              })
            : null;
        }
        function _t(f) {
          return (0, d.jsxs)("svg", {
            viewBox: "0 0 153 46",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: f.className,
            children: [
              (0, d.jsx)("path", {
                d: "M22.9891 0C10.8429 0 0.93833 9.30396 0 21.1548L12.3547 26.2486C13.3973 25.5209 14.6484 25.1051 16.0037 25.1051C16.108 25.1051 16.2644 25.1051 16.3687 25.1051L21.8944 17.2045C21.8944 17.1525 21.8944 17.1525 21.8944 17.1006C21.8944 12.3186 25.8041 8.42034 30.6 8.42034C35.3959 8.42034 39.3056 12.3186 39.3056 17.1006C39.3056 21.8825 35.3959 25.7808 30.6 25.7808C30.5479 25.7808 30.4436 25.7808 30.3915 25.7808L22.5721 31.3424C22.5721 31.4463 22.5721 31.5503 22.5721 31.6542C22.5721 35.2407 19.6528 38.1514 16.0559 38.1514C12.876 38.1514 10.2695 35.9164 9.64395 32.9017L0.781942 29.2633C3.5448 38.9311 12.4068 46 22.9891 46C35.7087 46 46.0303 35.7085 46.0303 23.026C46.0303 10.2915 35.7087 0 22.9891 0Z",
                fill: "#E0E1E6",
              }),
              (0, d.jsx)("path", {
                d: "M14.44 34.8766L11.625 33.7331C12.1463 34.7726 12.9804 35.6562 14.1272 36.124C16.6294 37.1636 19.4966 35.9681 20.5391 33.4732C21.0604 32.2777 21.0604 30.9263 20.5391 29.7308C20.0178 28.5353 19.0795 27.5997 17.8805 27.08C16.6816 26.5602 15.3783 26.6122 14.2836 27.028L17.2029 28.2235C19.0274 29.0031 19.9136 31.0822 19.1316 32.9014C18.4018 34.7726 16.2645 35.6562 14.44 34.8766Z",
                fill: "#E0E1E6",
              }),
              (0, d.jsx)("path", {
                d: "M36.3857 17.0488C36.3857 13.8782 33.7793 11.2793 30.5994 11.2793C27.4195 11.2793 24.813 13.8782 24.813 17.0488C24.813 20.2194 27.4195 22.8703 30.5994 22.8703C33.7793 22.8703 36.3857 20.2714 36.3857 17.0488ZM26.2205 17.0488C26.2205 14.6578 28.1493 12.6827 30.5994 12.6827C32.9973 12.6827 34.9782 14.6058 34.9782 17.0488C34.9782 19.4397 33.0495 21.3629 30.5994 21.3629C28.2014 21.4149 26.2205 19.4397 26.2205 17.0488Z",
                fill: "#E0E1E6",
              }),
              (0, d.jsx)("path", {
                d: "M70.6879 15.7489L69.1241 18.4517C67.9251 17.6201 66.3091 17.1003 64.9016 17.1003C63.2856 17.1003 62.2951 17.776 62.2951 18.9715C62.2951 20.4269 64.0675 20.7387 66.674 21.6743C69.489 22.6619 71.105 23.8574 71.105 26.4043C71.105 29.9387 68.3421 31.9139 64.3282 31.9139C62.3994 31.9139 60.0014 31.3941 58.229 30.3026L59.3759 27.2879C60.8355 28.0675 62.6079 28.5353 64.1718 28.5353C66.3091 28.5353 67.2995 27.7557 67.2995 26.6122C67.2995 25.3127 65.7878 24.8969 63.2856 24.0653C60.4706 23.1297 58.5418 21.8822 58.5418 19.0235C58.5418 15.8009 61.1483 13.9297 64.8494 13.9297C67.4038 14.0336 69.489 14.8653 70.6879 15.7489Z",
                fill: "#E0E1E6",
              }),
              (0, d.jsx)("path", {
                d: "M82.7305 17.4643V31.6542H79.0815V17.4643H73.8164V14.3457H87.9956V17.4643H82.7305Z",
                fill: "#E0E1E6",
              }),
              (0, d.jsx)("path", {
                d: "M95.6574 17.4124V21.3107H102.643V24.4293H95.6574V28.4836H103.737V31.6022H92.0083V14.3457H103.737V17.4643H95.6574V17.4124Z",
                fill: "#E0E1E6",
              }),
              (0, d.jsx)("path", {
                d: "M111.87 28.2756L110.723 31.6542H106.917L113.434 14.3457H117.083L123.755 31.6542H119.793L118.594 28.2756H111.87ZM115.258 18.4519L112.912 25.3649H117.708L115.258 18.4519Z",
                fill: "#E0E1E6",
              }),
              (0, d.jsx)("path", {
                d: "M142.47 21.0508L137.726 31.1864H135.693L131.001 21.1547V31.7062H127.509V14.3457H131.001L136.84 26.8723L142.47 14.3457H145.963V31.6542H142.47V21.0508Z",
                fill: "#E0E1E6",
              }),
              (0, d.jsx)("path", {
                d: "M153 16.5288C153 18.0361 151.905 18.9197 150.602 18.9197C149.299 18.9197 148.204 17.9841 148.204 16.5288C148.204 15.0214 149.351 14.1378 150.602 14.1378C151.853 14.0858 153 15.0214 153 16.5288ZM148.569 16.5288C148.569 17.7762 149.455 18.5559 150.55 18.5559C151.645 18.5559 152.531 17.7762 152.531 16.5288C152.531 15.2813 151.645 14.5016 150.55 14.5016C149.455 14.5016 148.569 15.2813 148.569 16.5288ZM150.602 15.2813C151.228 15.2813 151.436 15.5932 151.436 15.957C151.436 16.2689 151.228 16.4768 151.019 16.6327L151.593 17.6723H151.123L150.654 16.7367H150.133V17.6723H149.768V15.2813H150.602ZM150.185 16.3728H150.602C150.863 16.3728 151.019 16.2169 151.019 16.009C151.019 15.8011 150.915 15.6451 150.602 15.6451H150.185V16.3728Z",
                fill: "#E0E1E6",
              }),
            ],
          });
        }
        function ri(f) {
          return (0, d.jsxs)("svg", {
            viewBox: "0 0 232.73 46.07",
            xmlns: "http://www.w3.org/2000/svg",
            className: f.className,
            fill: "#E0E1E6",
            children: [
              (0, d.jsxs)("g", {
                stroke: "null",
                id: "svg_2",
                children: [
                  (0, d.jsx)("path", {
                    stroke: "null",
                    id: "svg_3",
                    d: "m21.73862,4.25158c-10.07896,0 -18.33997,7.77507 -19.12529,17.65445l10.28722,4.25199c0.87209,-0.59441 1.92641,-0.94585 3.05883,-0.94585c0.09979,0 0.20392,0.00434 0.30371,0.00868l4.57306,-6.62964c0,-0.03037 0,-0.06074 0,-0.09545c0,-3.99167 3.2454,-7.23707 7.23707,-7.23707c3.99167,0 7.23707,3.2454 7.23707,7.23707c0,3.99167 -3.2454,7.23707 -7.23707,7.23707c-0.0564,0 -0.10847,0 -0.16487,-0.00434l-6.52551,4.65984c0.00434,0.08678 0.00868,0.16921 0.00868,0.25599c0,2.99809 -2.43839,5.43214 -5.43214,5.43214c-2.62929,0 -4.82905,-1.87869 -5.32801,-4.36046l-7.35855,-3.04148c2.27785,8.05709 9.67979,13.96216 18.4658,13.96216c10.59961,0 19.19471,-8.5951 19.19471,-19.19471c0,-10.59527 -8.5951,-19.19037 -19.19471,-19.19037",
                  }),
                  (0, d.jsx)("path", {
                    stroke: "null",
                    id: "svg_4",
                    d: "m14.64039,33.37339l-2.35595,-0.97622c0.41652,0.86775 1.1411,1.59667 2.09996,2.00017c2.07393,0.86341 4.46459,-0.12149 5.33235,-2.19542c0.41652,-1.00226 0.42086,-2.11298 0.00434,-3.11957c-0.41652,-1.00659 -1.1975,-1.79191 -2.19976,-2.21277c-0.99792,-0.41652 -2.06525,-0.39917 -3.00677,-0.04773l2.43405,1.00659c1.53159,0.6378 2.25182,2.395 1.61836,3.92659c-0.6378,1.53592 -2.395,2.25616 -3.92659,1.61836",
                  }),
                  (0, d.jsx)("path", {
                    stroke: "null",
                    id: "svg_5",
                    d: "m32.89793,18.49576c0,-2.65966 -2.16505,-4.82471 -4.82471,-4.82471c-2.65966,0 -4.82471,2.16505 -4.82471,4.82471c0,2.65966 2.16505,4.82037 4.82471,4.82037c2.65966,0.00434 4.82471,-2.16071 4.82471,-4.82037m-8.4389,-0.00434c0,-2.00017 1.6227,-3.62287 3.62287,-3.62287c2.00017,0 3.62287,1.6227 3.62287,3.62287c0,2.00017 -1.6227,3.62287 -3.62287,3.62287c-2.00017,0 -3.62287,-1.6227 -3.62287,-3.62287",
                  }),
                ],
              }),
              (0, d.jsx)("path", {
                stroke: "null",
                id: "svg_6",
                d: "m46.71333,8.08293c0,2.23529 -1.67014,3.62707 -3.5849,3.62707c-1.91476,0 -3.60177,-1.39178 -3.60177,-3.62707c0,-2.23529 1.68701,-3.6102 3.60177,-3.6102c1.91476,-0.00844 3.5849,1.37491 3.5849,3.6102m-6.64682,0c0,1.90632 1.39178,3.1041 3.05349,3.1041c1.66171,0 3.04505,-1.19778 3.04505,-3.1041c0,-1.91476 -1.38335,-3.09566 -3.04505,-3.09566c-1.65327,0 -3.05349,1.18934 -3.05349,3.09566m3.09566,-1.84728c0.95316,0 1.23152,0.49767 1.23152,1.01221c0,0.48923 -0.29523,0.8182 -0.64106,0.9869l0.83507,1.57736l-0.63263,0l-0.71698,-1.40865l-0.76759,0l0,1.40865l-0.52297,0l0,-3.56803l1.21465,0l0,-0.00844zm-0.69167,1.67858l0.65793,0c0.43019,0 0.70011,-0.27836 0.70011,-0.61576c0,-0.3374 -0.17714,-0.56515 -0.69167,-0.56515l-0.66637,0l0,1.18091z",
              }),
              (0, d.jsxs)("g", {
                id: "svg_7",
                children: [
                  (0, d.jsx)("path", {
                    id: "svg_8",
                    d: "m77.46999,20.31667c-2.27,6.12 -7.24,10.13 -13.11,12.2c-0.54,-1.12 -1.7,-2.9 -2.65,-3.76c3.6,-1.03 6.95,-3.06 9.14,-5.63l-7.24,0l0,-3.89l10.05,0l0.79,-0.12l3.02,1.2zm-15.02,20.43c1.7,-1.57 3.39,-4.01 4.47,-6l4.22,2.11c-1.2,2.03 -2.73,4.55 -4.34,6.29l-4.35,-2.4zm8.57,-29.9l-8.23,0l0,-4.26l8.23,0l0,-2.28l5.01,0l0,2.28l10.42,0l0,-2.28l5.01,0l0,2.28l8.15,0l0,4.26l-8.15,0l0,2.15l-5.01,0l0,-2.15l-10.42,0l0,2.15l-5.01,0l0,-2.15zm-2.57,19.85l24.53,0l0,4.1l-24.53,0l0,-4.1zm28.71,-9.8c-1.86,1.45 -3.85,2.81 -5.59,3.81c2.52,1.24 5.46,2.19 8.48,2.77c-1.03,0.95 -2.4,2.9 -3.1,4.14c-5.29,-1.41 -10.05,-4.14 -13.44,-7.82l0,1.99c0,2.03 -0.33,2.94 -1.78,3.52c-1.32,0.54 -3.14,0.58 -5.46,0.58c-0.25,-1.2 -0.87,-2.69 -1.41,-3.76c1.37,0.08 2.85,0.08 3.27,0.08c0.46,-0.04 0.62,-0.12 0.62,-0.58l0,-5.83c1.41,-0.62 2.85,-1.45 4.26,-2.32l-14.23,0l0,-3.72l19.28,0l0.99,-0.25l2.98,2.52c-1.9,1.49 -4.18,3.06 -6.58,4.38c0.7,0.79 1.57,1.53 2.52,2.23c1.78,-1.28 3.97,-3.06 5.25,-4.38l3.94,2.64zm-19.11,14.89c0.7,1.99 1.24,4.63 1.28,6.29l-4.88,0.75c0.04,-1.66 -0.37,-4.34 -0.95,-6.41l4.55,-0.63zm8.65,-0.54c1.16,1.86 2.27,4.3 2.61,6l-4.51,1.41c-0.29,-1.65 -1.28,-4.22 -2.36,-6.12l4.26,-1.29zm8.39,-0.54c1.86,1.82 4.05,4.38 5.09,6.21l-4.43,2.07c-0.91,-1.78 -2.98,-4.47 -4.8,-6.37l4.14,-1.91z",
                  }),
                  (0, d.jsx)("path", {
                    id: "svg_9",
                    d: "m110.14999,23.78667c-1.57,-1.12 -4.84,-2.9 -7.16,-4.09l2.61,-3.64c2.23,0.91 5.58,2.56 7.32,3.64l-2.77,4.09zm-5.79,15.14c2.03,-3.06 4.92,-8.07 7.16,-12.74l3.72,3.19c-1.94,4.22 -4.34,8.81 -6.58,12.74l-4.3,-3.19zm8.02,-26.02c-1.49,-1.28 -4.67,-3.14 -6.95,-4.38l2.73,-3.56c2.23,1.03 5.46,2.73 7.07,3.93l-2.85,4.01zm7.62,2.15c-0.91,1.32 -1.86,2.48 -2.81,3.52c-0.91,-0.87 -2.85,-2.36 -3.93,-3.02c2.98,-2.69 5.63,-6.99 7.07,-11.34l4.72,1.28c-0.41,0.99 -0.83,2.03 -1.32,3.06l18.08,0l0,4.22l-20.31,0c-0.46,0.74 -0.91,1.45 -1.41,2.15l17.95,0l0,3.97l-18.04,0l0,-3.84zm17.33,6.17c-0.08,10.05 -0.04,17.13 1.41,17.13c0.5,0 0.66,-2.23 0.7,-5.29c0.83,1.08 1.99,2.32 2.9,3.06c-0.33,4.67 -1.12,6.83 -3.97,6.87c-4.96,-0.04 -5.63,-6.87 -5.79,-17.5l-16.59,0l0,-4.3l19.28,0l0,0.04l2.06,0l0,-0.01z",
                  }),
                  (0, d.jsx)("path", {
                    id: "svg_10",
                    d: "m182.70999,29.24667l-16.26,0l0,13.65l-5.13,0l0,-13.65l-16.09,0l0,-5.01l16.09,0l0,-12.53l-13.94,0l0,-4.88l32.93,0l0,4.88l-13.86,0l0,12.53l16.26,0l0,5.01zm-28.3,-16.21c1.37,2.65 2.85,6.12 3.31,8.44l-4.8,1.49c-0.41,-2.19 -1.7,-5.83 -3.02,-8.6l4.51,-1.33zm15.35,8.6c1.32,-2.4 2.81,-6.04 3.6,-8.73l5.25,1.32c-1.49,3.19 -3.19,6.54 -4.55,8.65l-4.3,-1.24z",
                  }),
                  (0, d.jsx)("path", {
                    id: "svg_11",
                    d: "m212.48999,8.06667c3.81,3.56 8.73,8.65 10.88,12.12l-4.18,3.02c-0.54,-0.91 -1.28,-1.99 -2.15,-3.14c-21.97,1.08 -24.9,1.16 -27.09,1.9c-0.25,-0.99 -1.03,-3.43 -1.61,-4.72c1.08,-0.29 2.07,-1.08 3.43,-2.4c1.45,-1.28 5.96,-6.29 8.77,-11.25l4.96,2.11c-2.61,3.85 -5.87,7.53 -9.02,10.55l16.96,-0.54c-1.61,-1.82 -3.27,-3.56 -4.8,-5.09l3.85,-2.56zm-21.18,16.63l27.88,0l0,18.12l-5.29,0l0,-2.07l-17.54,0l0,2.11l-5.05,0l0,-18.16zm5.04,4.72l0,6.62l17.54,0l0,-6.62l-17.54,0z",
                  }),
                ],
              }),
              (0, d.jsxs)("g", {
                id: "svg_12",
                children: [
                  (0, d.jsx)("path", {
                    id: "svg_13",
                    d: "m224.05999,2.64667l-1.2,0l0,-0.43l2.92,0l0,0.43l-1.21,0l0,3.52l-0.52,0l0,-3.52l0.01,0z",
                  }),
                  (0, d.jsx)("path", {
                    id: "svg_14",
                    d: "m229.54999,4.42667c-0.03,-0.55 -0.06,-1.21 -0.06,-1.71l-0.02,0c-0.13,0.46 -0.3,0.96 -0.5,1.5l-0.7,1.92l-0.39,0l-0.64,-1.88c-0.19,-0.56 -0.35,-1.07 -0.46,-1.54l-0.01,0c-0.01,0.49 -0.04,1.15 -0.08,1.75l-0.11,1.69l-0.49,0l0.28,-3.95l0.65,0l0.67,1.91c0.16,0.49 0.3,0.92 0.4,1.33l0.02,0c0.1,-0.4 0.24,-0.83 0.42,-1.33l0.7,-1.91l0.65,0l0.25,3.95l-0.5,0l-0.08,-1.73z",
                  }),
                ],
              }),
            ],
          });
        }
        function ei() {
          return (0, d.jsx)(Ve, {
            alignItems: "center",
            justifyContent: "center",
            children: (0, d.jsx)(R.t, {}),
          });
        }
        function ti(f) {
          const t = (0, P.useRef)(f);
          t.current = f;
          const [l, b] = (0, P.useState)(!0),
            j = (0, Se.zy)();
          return (
            (0, P.useEffect)(() => {
              if (new URLSearchParams(j.search).get("need_password")) {
                b(!1);
                return;
              }
              if (!t.current) {
                b(!1);
                return;
              }
              ii(t.current)
                .then((B) => {
                  b(B);
                })
                .catch((B) => {
                  (0, T.tH)("PerformRefresh exception", B), b(!1);
                });
            }, [t, j.search]),
            l
          );
        }
        async function ii(f) {
          const t = new FormData();
          t.append("redir", f);
          const l = `${E.TS.LOGIN_BASE_URL}jwt/ajaxrefresh`,
            b = await ve().post(l, t, { timeout: 1e4, withCredentials: !0 });
          if (b.status !== 200 || !b?.data?.success) return !1;
          const { success: j, login_url: z, error: B, ...S } = b.data,
            L = new FormData();
          Object.entries(S).forEach(([tr, re]) => L.append(tr, re));
          const U = await ve().post(z, L),
            N = U.status === 200 && U.data.result === m.R;
          return N && window.location.assign(f), N;
        }
        function si() {
          const f = (0, P.useRef)(!0);
          return (
            (0, P.useEffect)(
              () => () => {
                f.current = !1;
              },
              [f],
            ),
            (0, P.useCallback)(() => f.current, [f])
          );
        }
      },
      77661: (je) => {
        je.exports = {
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
      5522: (je) => {
        je.exports = {
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
      5804: (je) => {
        je.exports = {
          QRBits: "_3BALYLTpJdiDaC7JKmeeFJ",
          QRImg: "_5S5WqZhvbmRD1cHQT8P-l",
          Bit: "_1YVDTFYSTDWouyIbRs_hN_",
          Active: "_1zNnNw2BDhrN6ML6YxBYJE",
        };
      },
      9843: (je) => {
        je.exports = {
          SegmentedCharacterInput: "_1gzkmmy_XA39rp9MtxJfZJ",
          Disabled: "_4WrcvilhO29CHFM0pqglW",
          Danger: "_3lEvxoIfUV21o8WAfErUcA",
          BackupCode: "V5oAzFppoOFufB8_pY9sK",
          Loading: "_3khV2wP4icszbiR8o7sw37",
          Input: "_3xcXqLVteTNHmk-gh9W65d",
        };
      },
      80407: (je, ze, x) => {
        "use strict";
        x.d(ze, { A: () => Bt });
        var d,
          fe = 0xdeadbeefcafe,
          M = (fe & 16777215) == 15715070;
        function m(i, a, n) {
          i != null &&
            (typeof i == "number"
              ? this.fromNumber(i, a, n)
              : a == null && typeof i != "string"
                ? this.fromString(i, 256)
                : this.fromString(i, a));
        }
        function e() {
          return new m(null);
        }
        function ar(i, a, n, g, o, u) {
          for (; --u >= 0; ) {
            var p = a * this[i++] + n[g] + o;
            (o = Math.floor(p / 67108864)), (n[g++] = p & 67108863);
          }
          return o;
        }
        function ve(i, a, n, g, o, u) {
          for (var p = a & 32767, O = a >> 15; --u >= 0; ) {
            var yr = this[i] & 32767,
              Gr = this[i++] >> 15,
              oe = O * yr + Gr * p;
            (yr = p * yr + ((oe & 32767) << 15) + n[g] + (o & 1073741823)),
              (o = (yr >>> 30) + (oe >>> 15) + O * Gr + (o >>> 30)),
              (n[g++] = yr & 1073741823);
          }
          return o;
        }
        function P(i, a, n, g, o, u) {
          for (var p = a & 16383, O = a >> 14; --u >= 0; ) {
            var yr = this[i] & 16383,
              Gr = this[i++] >> 14,
              oe = O * yr + Gr * p;
            (yr = p * yr + ((oe & 16383) << 14) + n[g] + o),
              (o = (yr >> 28) + (oe >> 14) + O * Gr),
              (n[g++] = yr & 268435455);
          }
          return o;
        }
        M && navigator.appName == "Microsoft Internet Explorer"
          ? ((m.prototype.am = ve), (d = 30))
          : M && navigator.appName != "Netscape"
            ? ((m.prototype.am = ar), (d = 26))
            : ((m.prototype.am = P), (d = 28)),
          (m.prototype.DB = d),
          (m.prototype.DM = (1 << d) - 1),
          (m.prototype.DV = 1 << d);
        var Se = 52;
        (m.prototype.FV = Math.pow(2, Se)),
          (m.prototype.F1 = Se - d),
          (m.prototype.F2 = 2 * d - Se);
        var ge = "0123456789abcdefghijklmnopqrstuvwxyz",
          ae = new Array(),
          T,
          Rr;
        for (T = 48, Rr = 0; Rr <= 9; ++Rr) ae[T++] = Rr;
        for (T = 97, Rr = 10; Rr < 36; ++Rr) ae[T++] = Rr;
        for (T = 65, Rr = 10; Rr < 36; ++Rr) ae[T++] = Rr;
        function Ue(i) {
          return ge.charAt(i);
        }
        function ne(i, a) {
          var n = ae[i.charCodeAt(a)];
          return n ?? -1;
        }
        function Fe(i) {
          for (var a = this.t - 1; a >= 0; --a) i[a] = this[a];
          (i.t = this.t), (i.s = this.s);
        }
        function Xe(i) {
          (this.t = 1),
            (this.s = i < 0 ? -1 : 0),
            i > 0 ? (this[0] = i) : i < -1 ? (this[0] = i + DV) : (this.t = 0);
        }
        function F(i) {
          var a = e();
          return a.fromInt(i), a;
        }
        function ur(i, a) {
          var n;
          if (a == 16) n = 4;
          else if (a == 8) n = 3;
          else if (a == 256) n = 8;
          else if (a == 2) n = 1;
          else if (a == 32) n = 5;
          else if (a == 4) n = 2;
          else {
            this.fromRadix(i, a);
            return;
          }
          (this.t = 0), (this.s = 0);
          for (var g = i.length, o = !1, u = 0; --g >= 0; ) {
            var p = n == 8 ? i[g] & 255 : ne(i, g);
            if (p < 0) {
              i.charAt(g) == "-" && (o = !0);
              continue;
            }
            (o = !1),
              u == 0
                ? (this[this.t++] = p)
                : u + n > this.DB
                  ? ((this[this.t - 1] |=
                      (p & ((1 << (this.DB - u)) - 1)) << u),
                    (this[this.t++] = p >> (this.DB - u)))
                  : (this[this.t - 1] |= p << u),
              (u += n),
              u >= this.DB && (u -= this.DB);
          }
          n == 8 &&
            (i[0] & 128) != 0 &&
            ((this.s = -1),
            u > 0 && (this[this.t - 1] |= ((1 << (this.DB - u)) - 1) << u)),
            this.clamp(),
            o && m.ZERO.subTo(this, this);
        }
        function mr() {
          for (var i = this.s & this.DM; this.t > 0 && this[this.t - 1] == i; )
            --this.t;
        }
        function ee(i) {
          if (this.s < 0) return "-" + this.negate().toString(i);
          var a;
          if (i == 16) a = 4;
          else if (i == 8) a = 3;
          else if (i == 2) a = 1;
          else if (i == 32) a = 5;
          else if (i == 4) a = 2;
          else return this.toRadix(i);
          var n = (1 << a) - 1,
            g,
            o = !1,
            u = "",
            p = this.t,
            O = this.DB - ((p * this.DB) % a);
          if (p-- > 0)
            for (
              O < this.DB && (g = this[p] >> O) > 0 && ((o = !0), (u = Ue(g)));
              p >= 0;
            )
              O < a
                ? ((g = (this[p] & ((1 << O) - 1)) << (a - O)),
                  (g |= this[--p] >> (O += this.DB - a)))
                : ((g = (this[p] >> (O -= a)) & n),
                  O <= 0 && ((O += this.DB), --p)),
                g > 0 && (o = !0),
                o && (u += Ue(g));
          return o ? u : "0";
        }
        function ie() {
          var i = e();
          return m.ZERO.subTo(this, i), i;
        }
        function I() {
          return this.s < 0 ? this.negate() : this;
        }
        function R(i) {
          var a = this.s - i.s;
          if (a != 0) return a;
          var n = this.t;
          if (((a = n - i.t), a != 0)) return a;
          for (; --n >= 0; ) if ((a = this[n] - i[n]) != 0) return a;
          return 0;
        }
        function _(i) {
          var a = 1,
            n;
          return (
            (n = i >>> 16) != 0 && ((i = n), (a += 16)),
            (n = i >> 8) != 0 && ((i = n), (a += 8)),
            (n = i >> 4) != 0 && ((i = n), (a += 4)),
            (n = i >> 2) != 0 && ((i = n), (a += 2)),
            (n = i >> 1) != 0 && ((i = n), (a += 1)),
            a
          );
        }
        function v() {
          return this.t <= 0
            ? 0
            : this.DB * (this.t - 1) + _(this[this.t - 1] ^ (this.s & this.DM));
        }
        function lr(i, a) {
          var n;
          for (n = this.t - 1; n >= 0; --n) a[n + i] = this[n];
          for (n = i - 1; n >= 0; --n) a[n] = 0;
          (a.t = this.t + i), (a.s = this.s);
        }
        function E(i, a) {
          for (var n = i; n < this.t; ++n) a[n - i] = this[n];
          (a.t = Math.max(this.t - i, 0)), (a.s = this.s);
        }
        function D(i, a) {
          var n = i % this.DB,
            g = this.DB - n,
            o = (1 << g) - 1,
            u = Math.floor(i / this.DB),
            p = (this.s << n) & this.DM,
            O;
          for (O = this.t - 1; O >= 0; --O)
            (a[O + u + 1] = (this[O] >> g) | p), (p = (this[O] & o) << n);
          for (O = u - 1; O >= 0; --O) a[O] = 0;
          (a[u] = p), (a.t = this.t + u + 1), (a.s = this.s), a.clamp();
        }
        function be(i, a) {
          a.s = this.s;
          var n = Math.floor(i / this.DB);
          if (n >= this.t) {
            a.t = 0;
            return;
          }
          var g = i % this.DB,
            o = this.DB - g,
            u = (1 << g) - 1;
          a[0] = this[n] >> g;
          for (var p = n + 1; p < this.t; ++p)
            (a[p - n - 1] |= (this[p] & u) << o), (a[p - n] = this[p] >> g);
          g > 0 && (a[this.t - n - 1] |= (this.s & u) << o),
            (a.t = this.t - n),
            a.clamp();
        }
        function De(i, a) {
          for (var n = 0, g = 0, o = Math.min(i.t, this.t); n < o; )
            (g += this[n] - i[n]), (a[n++] = g & this.DM), (g >>= this.DB);
          if (i.t < this.t) {
            for (g -= i.s; n < this.t; )
              (g += this[n]), (a[n++] = g & this.DM), (g >>= this.DB);
            g += this.s;
          } else {
            for (g += this.s; n < i.t; )
              (g -= i[n]), (a[n++] = g & this.DM), (g >>= this.DB);
            g -= i.s;
          }
          (a.s = g < 0 ? -1 : 0),
            g < -1 ? (a[n++] = this.DV + g) : g > 0 && (a[n++] = g),
            (a.t = n),
            a.clamp();
        }
        function Ar(i, a) {
          var n = this.abs(),
            g = i.abs(),
            o = n.t;
          for (a.t = o + g.t; --o >= 0; ) a[o] = 0;
          for (o = 0; o < g.t; ++o) a[o + n.t] = n.am(0, g[o], a, o, 0, n.t);
          (a.s = 0), a.clamp(), this.s != i.s && m.ZERO.subTo(a, a);
        }
        function Pe(i) {
          for (var a = this.abs(), n = (i.t = 2 * a.t); --n >= 0; ) i[n] = 0;
          for (n = 0; n < a.t - 1; ++n) {
            var g = a.am(n, a[n], i, 2 * n, 0, 1);
            (i[n + a.t] += a.am(
              n + 1,
              2 * a[n],
              i,
              2 * n + 1,
              g,
              a.t - n - 1,
            )) >= a.DV && ((i[n + a.t] -= a.DV), (i[n + a.t + 1] = 1));
          }
          i.t > 0 && (i[i.t - 1] += a.am(n, a[n], i, 2 * n, 0, 1)),
            (i.s = 0),
            i.clamp();
        }
        function Ie(i, a, n) {
          var g = i.abs();
          if (!(g.t <= 0)) {
            var o = this.abs();
            if (o.t < g.t) {
              a?.fromInt(0), n != null && this.copyTo(n);
              return;
            }
            n == null && (n = e());
            var u = e(),
              p = this.s,
              O = i.s,
              yr = this.DB - _(g[g.t - 1]);
            yr > 0
              ? (g.lShiftTo(yr, u), o.lShiftTo(yr, n))
              : (g.copyTo(u), o.copyTo(n));
            var Gr = u.t,
              oe = u[Gr - 1];
            if (oe != 0) {
              var ce =
                  oe * (1 << this.F1) + (Gr > 1 ? u[Gr - 2] >> this.F2 : 0),
                Ze = this.FV / ce,
                Ce = (1 << this.F1) / ce,
                Le = 1 << this.F2,
                pe = n.t,
                Re = pe - Gr,
                Ke = a ?? e();
              for (
                u.dlShiftTo(Re, Ke),
                  n.compareTo(Ke) >= 0 && ((n[n.t++] = 1), n.subTo(Ke, n)),
                  m.ONE.dlShiftTo(Gr, Ke),
                  Ke.subTo(u, u);
                u.t < Gr;
              )
                u[u.t++] = 0;
              for (; --Re >= 0; ) {
                var tt =
                  n[--pe] == oe
                    ? this.DM
                    : Math.floor(n[pe] * Ze + (n[pe - 1] + Le) * Ce);
                if ((n[pe] += u.am(0, tt, n, Re, 0, Gr)) < tt)
                  for (u.dlShiftTo(Re, Ke), n.subTo(Ke, n); n[pe] < --tt; )
                    n.subTo(Ke, n);
              }
              a != null && (n.drShiftTo(Gr, a), p != O && m.ZERO.subTo(a, a)),
                (n.t = Gr),
                n.clamp(),
                yr > 0 && n.rShiftTo(yr, n),
                p < 0 && m.ZERO.subTo(n, n);
            }
          }
        }
        function qe(i) {
          var a = e();
          return (
            this.abs().divRemTo(i, null, a),
            this.s < 0 && a.compareTo(m.ZERO) > 0 && i.subTo(a, a),
            a
          );
        }
        function A(i) {
          this.m = i;
        }
        function W(i) {
          return i.s < 0 || i.compareTo(this.m) >= 0 ? i.mod(this.m) : i;
        }
        function c(i) {
          return i;
        }
        function mt(i) {
          i.divRemTo(this.m, null, i);
        }
        function dt(i, a, n) {
          i.multiplyTo(a, n), this.reduce(n);
        }
        function Jr(i, a) {
          i.squareTo(a), this.reduce(a);
        }
        (A.prototype.convert = W),
          (A.prototype.revert = c),
          (A.prototype.reduce = mt),
          (A.prototype.mulTo = dt),
          (A.prototype.sqrTo = Jr);
        function Tr() {
          if (this.t < 1) return 0;
          var i = this[0];
          if ((i & 1) == 0) return 0;
          var a = i & 3;
          return (
            (a = (a * (2 - (i & 15) * a)) & 15),
            (a = (a * (2 - (i & 255) * a)) & 255),
            (a = (a * (2 - (((i & 65535) * a) & 65535))) & 65535),
            (a = (a * (2 - ((i * a) % this.DV))) % this.DV),
            a > 0 ? this.DV - a : -a
          );
        }
        function jr(i) {
          (this.m = i),
            (this.mp = i.invDigit()),
            (this.mpl = this.mp & 32767),
            (this.mph = this.mp >> 15),
            (this.um = (1 << (i.DB - 15)) - 1),
            (this.mt2 = 2 * i.t);
        }
        function Qr(i) {
          var a = e();
          return (
            i.abs().dlShiftTo(this.m.t, a),
            a.divRemTo(this.m, null, a),
            i.s < 0 && a.compareTo(m.ZERO) > 0 && this.m.subTo(a, a),
            a
          );
        }
        function V(i) {
          var a = e();
          return i.copyTo(a), this.reduce(a), a;
        }
        function Q(i) {
          for (; i.t <= this.mt2; ) i[i.t++] = 0;
          for (var a = 0; a < this.m.t; ++a) {
            var n = i[a] & 32767,
              g =
                (n * this.mpl +
                  (((n * this.mph + (i[a] >> 15) * this.mpl) & this.um) <<
                    15)) &
                i.DM;
            for (
              n = a + this.m.t, i[n] += this.m.am(0, g, i, a, 0, this.m.t);
              i[n] >= i.DV;
            )
              (i[n] -= i.DV), i[++n]++;
          }
          i.clamp(),
            i.drShiftTo(this.m.t, i),
            i.compareTo(this.m) >= 0 && i.subTo(this.m, i);
        }
        function Z(i, a) {
          i.squareTo(a), this.reduce(a);
        }
        function Y(i, a, n) {
          i.multiplyTo(a, n), this.reduce(n);
        }
        (jr.prototype.convert = Qr),
          (jr.prototype.revert = V),
          (jr.prototype.reduce = Q),
          (jr.prototype.mulTo = Y),
          (jr.prototype.sqrTo = Z);
        function K() {
          return (this.t > 0 ? this[0] & 1 : this.s) == 0;
        }
        function q(i, a) {
          if (i > 4294967295 || i < 1) return m.ONE;
          var n = e(),
            g = e(),
            o = a.convert(this),
            u = _(i) - 1;
          for (o.copyTo(n); --u >= 0; )
            if ((a.sqrTo(n, g), (i & (1 << u)) > 0)) a.mulTo(g, o, n);
            else {
              var p = n;
              (n = g), (g = p);
            }
          return a.revert(n);
        }
        function $(i, a) {
          var n;
          return (
            i < 256 || a.isEven() ? (n = new A(a)) : (n = new jr(a)),
            this.exp(i, n)
          );
        }
        (m.prototype.copyTo = Fe),
          (m.prototype.fromInt = Xe),
          (m.prototype.fromString = ur),
          (m.prototype.clamp = mr),
          (m.prototype.dlShiftTo = lr),
          (m.prototype.drShiftTo = E),
          (m.prototype.lShiftTo = D),
          (m.prototype.rShiftTo = be),
          (m.prototype.subTo = De),
          (m.prototype.multiplyTo = Ar),
          (m.prototype.squareTo = Pe),
          (m.prototype.divRemTo = Ie),
          (m.prototype.invDigit = Tr),
          (m.prototype.isEven = K),
          (m.prototype.exp = q),
          (m.prototype.toString = ee),
          (m.prototype.negate = ie),
          (m.prototype.abs = I),
          (m.prototype.compareTo = R),
          (m.prototype.bitLength = v),
          (m.prototype.mod = qe),
          (m.prototype.modPowInt = $),
          (m.ZERO = F(0)),
          (m.ONE = F(1));
        function cr() {
          var i = e();
          return this.copyTo(i), i;
        }
        function X() {
          if (this.s < 0) {
            if (this.t == 1) return this[0] - this.DV;
            if (this.t == 0) return -1;
          } else {
            if (this.t == 1) return this[0];
            if (this.t == 0) return 0;
          }
          return ((this[1] & ((1 << (32 - this.DB)) - 1)) << this.DB) | this[0];
        }
        function J() {
          return this.t == 0 ? this.s : (this[0] << 24) >> 24;
        }
        function G() {
          return this.t == 0 ? this.s : (this[0] << 16) >> 16;
        }
        function k(i) {
          return Math.floor((Math.LN2 * this.DB) / Math.log(i));
        }
        function C() {
          return this.s < 0
            ? -1
            : this.t <= 0 || (this.t == 1 && this[0] <= 0)
              ? 0
              : 1;
        }
        function br(i) {
          if ((i == null && (i = 10), this.signum() == 0 || i < 2 || i > 36))
            return "0";
          var a = this.chunkSize(i),
            n = Math.pow(i, a),
            g = F(n),
            o = e(),
            u = e(),
            p = "";
          for (this.divRemTo(g, o, u); o.signum() > 0; )
            (p = (n + u.intValue()).toString(i).substr(1) + p),
              o.divRemTo(g, o, u);
          return u.intValue().toString(i) + p;
        }
        function vr(i, a) {
          this.fromInt(0), a == null && (a = 10);
          for (
            var n = this.chunkSize(a),
              g = Math.pow(a, n),
              o = !1,
              u = 0,
              p = 0,
              O = 0;
            O < i.length;
            ++O
          ) {
            var yr = ne(i, O);
            if (yr < 0) {
              i.charAt(O) == "-" && this.signum() == 0 && (o = !0);
              continue;
            }
            (p = a * p + yr),
              ++u >= n &&
                (this.dMultiply(g), this.dAddOffset(p, 0), (u = 0), (p = 0));
          }
          u > 0 && (this.dMultiply(Math.pow(a, u)), this.dAddOffset(p, 0)),
            o && m.ZERO.subTo(this, this);
        }
        function Dr(i, a, n) {
          if (typeof a == "number")
            if (i < 2) this.fromInt(1);
            else
              for (
                this.fromNumber(i, n),
                  this.testBit(i - 1) ||
                    this.bitwiseTo(m.ONE.shiftLeft(i - 1), Br, this),
                  this.isEven() && this.dAddOffset(1, 0);
                !this.isProbablePrime(a);
              )
                this.dAddOffset(2, 0),
                  this.bitLength() > i &&
                    this.subTo(m.ONE.shiftLeft(i - 1), this);
          else {
            var g = new Array(),
              o = i & 7;
            (g.length = (i >> 3) + 1),
              a.nextBytes(g),
              o > 0 ? (g[0] &= (1 << o) - 1) : (g[0] = 0),
              this.fromString(g, 256);
          }
        }
        function he() {
          var i = this.t,
            a = new Array();
          a[0] = this.s;
          var n = this.DB - ((i * this.DB) % 8),
            g,
            o = 0;
          if (i-- > 0)
            for (
              n < this.DB &&
              (g = this[i] >> n) != (this.s & this.DM) >> n &&
              (a[o++] = g | (this.s << (this.DB - n)));
              i >= 0;
            )
              n < 8
                ? ((g = (this[i] & ((1 << n) - 1)) << (8 - n)),
                  (g |= this[--i] >> (n += this.DB - 8)))
                : ((g = (this[i] >> (n -= 8)) & 255),
                  n <= 0 && ((n += this.DB), --i)),
                (g & 128) != 0 && (g |= -256),
                o == 0 && (this.s & 128) != (g & 128) && ++o,
                (o > 0 || g != this.s) && (a[o++] = g);
          return a;
        }
        function dr(i) {
          return this.compareTo(i) == 0;
        }
        function Pr(i) {
          return this.compareTo(i) < 0 ? this : i;
        }
        function te(i) {
          return this.compareTo(i) > 0 ? this : i;
        }
        function pr(i, a, n) {
          var g,
            o,
            u = Math.min(i.t, this.t);
          for (g = 0; g < u; ++g) n[g] = a(this[g], i[g]);
          if (i.t < this.t) {
            for (o = i.s & this.DM, g = u; g < this.t; ++g)
              n[g] = a(this[g], o);
            n.t = this.t;
          } else {
            for (o = this.s & this.DM, g = u; g < i.t; ++g) n[g] = a(o, i[g]);
            n.t = i.t;
          }
          (n.s = a(this.s, i.s)), n.clamp();
        }
        function Or(i, a) {
          return i & a;
        }
        function or(i) {
          var a = e();
          return this.bitwiseTo(i, Or, a), a;
        }
        function Br(i, a) {
          return i | a;
        }
        function fr(i) {
          var a = e();
          return this.bitwiseTo(i, Br, a), a;
        }
        function Mr(i, a) {
          return i ^ a;
        }
        function Ir(i) {
          var a = e();
          return this.bitwiseTo(i, Mr, a), a;
        }
        function Sr(i, a) {
          return i & ~a;
        }
        function Zr(i) {
          var a = e();
          return this.bitwiseTo(i, Sr, a), a;
        }
        function se() {
          for (var i = e(), a = 0; a < this.t; ++a) i[a] = this.DM & ~this[a];
          return (i.t = this.t), (i.s = ~this.s), i;
        }
        function wr(i) {
          var a = e();
          return i < 0 ? this.rShiftTo(-i, a) : this.lShiftTo(i, a), a;
        }
        function Me(i) {
          var a = e();
          return i < 0 ? this.lShiftTo(-i, a) : this.rShiftTo(i, a), a;
        }
        function xr(i) {
          if (i == 0) return -1;
          var a = 0;
          return (
            (i & 65535) == 0 && ((i >>= 16), (a += 16)),
            (i & 255) == 0 && ((i >>= 8), (a += 8)),
            (i & 15) == 0 && ((i >>= 4), (a += 4)),
            (i & 3) == 0 && ((i >>= 2), (a += 2)),
            (i & 1) == 0 && ++a,
            a
          );
        }
        function Lr() {
          for (var i = 0; i < this.t; ++i)
            if (this[i] != 0) return i * this.DB + xr(this[i]);
          return this.s < 0 ? this.t * this.DB : -1;
        }
        function Wr(i) {
          for (var a = 0; i != 0; ) (i &= i - 1), ++a;
          return a;
        }
        function Nr() {
          for (var i = 0, a = this.s & this.DM, n = 0; n < this.t; ++n)
            i += Wr(this[n] ^ a);
          return i;
        }
        function nr(i) {
          var a = Math.floor(i / this.DB);
          return a >= this.t
            ? this.s != 0
            : (this[a] & (1 << (i % this.DB))) != 0;
        }
        function Vr(i, a) {
          var n = m.ONE.shiftLeft(i);
          return this.bitwiseTo(n, a, n), n;
        }
        function qr(i) {
          return this.changeBit(i, Br);
        }
        function Hr(i) {
          return this.changeBit(i, Sr);
        }
        function Ee(i) {
          return this.changeBit(i, Mr);
        }
        function Yr(i, a) {
          for (var n = 0, g = 0, o = Math.min(i.t, this.t); n < o; )
            (g += this[n] + i[n]), (a[n++] = g & this.DM), (g >>= this.DB);
          if (i.t < this.t) {
            for (g += i.s; n < this.t; )
              (g += this[n]), (a[n++] = g & this.DM), (g >>= this.DB);
            g += this.s;
          } else {
            for (g += this.s; n < i.t; )
              (g += i[n]), (a[n++] = g & this.DM), (g >>= this.DB);
            g += i.s;
          }
          (a.s = g < 0 ? -1 : 0),
            g > 0 ? (a[n++] = g) : g < -1 && (a[n++] = this.DV + g),
            (a.t = n),
            a.clamp();
        }
        function Ur(i) {
          var a = e();
          return this.addTo(i, a), a;
        }
        function Fr(i) {
          var a = e();
          return this.subTo(i, a), a;
        }
        function xe(i) {
          var a = e();
          return this.multiplyTo(i, a), a;
        }
        function sr(i) {
          var a = e();
          return this.divRemTo(i, a, null), a;
        }
        function Kr(i) {
          var a = e();
          return this.divRemTo(i, null, a), a;
        }
        function $r(i) {
          var a = e(),
            n = e();
          return this.divRemTo(i, a, n), new Array(a, n);
        }
        function Xr(i) {
          (this[this.t] = this.am(0, i - 1, this, 0, 0, this.t)),
            ++this.t,
            this.clamp();
        }
        function hr(i, a) {
          for (; this.t <= a; ) this[this.t++] = 0;
          for (this[a] += i; this[a] >= this.DV; )
            (this[a] -= this.DV),
              ++a >= this.t && (this[this.t++] = 0),
              ++this[a];
        }
        function Ne() {}
        function Je(i) {
          return i;
        }
        function Te(i, a, n) {
          i.multiplyTo(a, n);
        }
        function h(i, a) {
          i.squareTo(a);
        }
        (Ne.prototype.convert = Je),
          (Ne.prototype.revert = Je),
          (Ne.prototype.mulTo = Te),
          (Ne.prototype.sqrTo = h);
        function r(i) {
          return this.exp(i, new Ne());
        }
        function s(i, a, n) {
          var g = Math.min(this.t + i.t, a);
          for (n.s = 0, n.t = g; g > 0; ) n[--g] = 0;
          var o;
          for (o = n.t - this.t; g < o; ++g)
            n[g + this.t] = this.am(0, i[g], n, g, 0, this.t);
          for (o = Math.min(i.t, a); g < o; ++g)
            this.am(0, i[g], n, g, 0, a - g);
          n.clamp();
        }
        function y(i, a, n) {
          --a;
          var g = (n.t = this.t + i.t - a);
          for (n.s = 0; --g >= 0; ) n[g] = 0;
          for (g = Math.max(a - this.t, 0); g < i.t; ++g)
            n[this.t + g - a] = this.am(a - g, i[g], n, 0, 0, this.t + g - a);
          n.clamp(), n.drShiftTo(1, n);
        }
        function Be(i) {
          (this.r2 = e()),
            (this.q3 = e()),
            m.ONE.dlShiftTo(2 * i.t, this.r2),
            (this.mu = this.r2.divide(i)),
            (this.m = i);
        }
        function w(i) {
          if (i.s < 0 || i.t > 2 * this.m.t) return i.mod(this.m);
          if (i.compareTo(this.m) < 0) return i;
          var a = e();
          return i.copyTo(a), this.reduce(a), a;
        }
        function we(i) {
          return i;
        }
        function ye(i) {
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
        function ue(i, a) {
          i.squareTo(a), this.reduce(a);
        }
        function Ae(i, a, n) {
          i.multiplyTo(a, n), this.reduce(n);
        }
        (Be.prototype.convert = w),
          (Be.prototype.revert = we),
          (Be.prototype.reduce = ye),
          (Be.prototype.mulTo = Ae),
          (Be.prototype.sqrTo = ue);
        function Ge(i, a) {
          var n = i.bitLength(),
            g,
            o = F(1),
            u;
          if (n <= 0) return o;
          n < 18
            ? (g = 1)
            : n < 48
              ? (g = 3)
              : n < 144
                ? (g = 4)
                : n < 768
                  ? (g = 5)
                  : (g = 6),
            n < 8
              ? (u = new A(a))
              : a.isEven()
                ? (u = new Be(a))
                : (u = new jr(a));
          var p = new Array(),
            O = 3,
            yr = g - 1,
            Gr = (1 << g) - 1;
          if (((p[1] = u.convert(this)), g > 1)) {
            var oe = e();
            for (u.sqrTo(p[1], oe); O <= Gr; )
              (p[O] = e()), u.mulTo(oe, p[O - 2], p[O]), (O += 2);
          }
          var ce = i.t - 1,
            Ze,
            Ce = !0,
            Le = e(),
            pe;
          for (n = _(i[ce]) - 1; ce >= 0; ) {
            for (
              n >= yr
                ? (Ze = (i[ce] >> (n - yr)) & Gr)
                : ((Ze = (i[ce] & ((1 << (n + 1)) - 1)) << (yr - n)),
                  ce > 0 && (Ze |= i[ce - 1] >> (this.DB + n - yr))),
                O = g;
              (Ze & 1) == 0;
            )
              (Ze >>= 1), --O;
            if (((n -= O) < 0 && ((n += this.DB), --ce), Ce))
              p[Ze].copyTo(o), (Ce = !1);
            else {
              for (; O > 1; ) u.sqrTo(o, Le), u.sqrTo(Le, o), (O -= 2);
              O > 0 ? u.sqrTo(o, Le) : ((pe = o), (o = Le), (Le = pe)),
                u.mulTo(Le, p[Ze], o);
            }
            for (; ce >= 0 && (i[ce] & (1 << n)) == 0; )
              u.sqrTo(o, Le),
                (pe = o),
                (o = Le),
                (Le = pe),
                --n < 0 && ((n = this.DB - 1), --ce);
          }
          return u.revert(o);
        }
        function ke(i) {
          var a = this.s < 0 ? this.negate() : this.clone(),
            n = i.s < 0 ? i.negate() : i.clone();
          if (a.compareTo(n) < 0) {
            var g = a;
            (a = n), (n = g);
          }
          var o = a.getLowestSetBit(),
            u = n.getLowestSetBit();
          if (u < 0) return a;
          for (
            o < u && (u = o), u > 0 && (a.rShiftTo(u, a), n.rShiftTo(u, n));
            a.signum() > 0;
          )
            (o = a.getLowestSetBit()) > 0 && a.rShiftTo(o, a),
              (o = n.getLowestSetBit()) > 0 && n.rShiftTo(o, n),
              a.compareTo(n) >= 0
                ? (a.subTo(n, a), a.rShiftTo(1, a))
                : (n.subTo(a, n), n.rShiftTo(1, n));
          return u > 0 && n.lShiftTo(u, n), n;
        }
        function _e(i) {
          if (i <= 0) return 0;
          var a = this.DV % i,
            n = this.s < 0 ? i - 1 : 0;
          if (this.t > 0)
            if (a == 0) n = this[0] % i;
            else
              for (var g = this.t - 1; g >= 0; --g) n = (a * n + this[g]) % i;
          return n;
        }
        function rt(i) {
          var a = i.isEven();
          if ((this.isEven() && a) || i.signum() == 0) return m.ZERO;
          for (
            var n = i.clone(),
              g = this.clone(),
              o = F(1),
              u = F(0),
              p = F(0),
              O = F(1);
            n.signum() != 0;
          ) {
            for (; n.isEven(); )
              n.rShiftTo(1, n),
                a
                  ? ((!o.isEven() || !u.isEven()) &&
                      (o.addTo(this, o), u.subTo(i, u)),
                    o.rShiftTo(1, o))
                  : u.isEven() || u.subTo(i, u),
                u.rShiftTo(1, u);
            for (; g.isEven(); )
              g.rShiftTo(1, g),
                a
                  ? ((!p.isEven() || !O.isEven()) &&
                      (p.addTo(this, p), O.subTo(i, O)),
                    p.rShiftTo(1, p))
                  : O.isEven() || O.subTo(i, O),
                O.rShiftTo(1, O);
            n.compareTo(g) >= 0
              ? (n.subTo(g, n), a && o.subTo(p, o), u.subTo(O, u))
              : (g.subTo(n, g), a && p.subTo(o, p), O.subTo(u, O));
          }
          if (g.compareTo(m.ONE) != 0) return m.ZERO;
          if (O.compareTo(i) >= 0) return O.subtract(i);
          if (O.signum() < 0) O.addTo(i, O);
          else return O;
          return O.signum() < 0 ? O.add(i) : O;
        }
        var le = [
            2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61,
            67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137,
            139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199,
            211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277,
            281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359,
            367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439,
            443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509,
          ],
          zr = (1 << 26) / le[le.length - 1];
        function rr(i) {
          var a,
            n = this.abs();
          if (n.t == 1 && n[0] <= le[le.length - 1]) {
            for (a = 0; a < le.length; ++a) if (n[0] == le[a]) return !0;
            return !1;
          }
          if (n.isEven()) return !1;
          for (a = 1; a < le.length; ) {
            for (var g = le[a], o = a + 1; o < le.length && g < zr; )
              g *= le[o++];
            for (g = n.modInt(g); a < o; ) if (g % le[a++] == 0) return !1;
          }
          return n.millerRabin(i);
        }
        function Er(i) {
          var a = this.subtract(m.ONE),
            n = a.getLowestSetBit();
          if (n <= 0) return !1;
          var g = a.shiftRight(n);
          (i = (i + 1) >> 1), i > le.length && (i = le.length);
          for (var o = e(), u = 0; u < i; ++u) {
            o.fromInt(le[u]);
            var p = o.modPow(g, this);
            if (p.compareTo(m.ONE) != 0 && p.compareTo(a) != 0) {
              for (var O = 1; O++ < n && p.compareTo(a) != 0; )
                if (((p = p.modPowInt(2, this)), p.compareTo(m.ONE) == 0))
                  return !1;
              if (p.compareTo(a) != 0) return !1;
            }
          }
          return !0;
        }
        (m.prototype.chunkSize = k),
          (m.prototype.toRadix = br),
          (m.prototype.fromRadix = vr),
          (m.prototype.fromNumber = Dr),
          (m.prototype.bitwiseTo = pr),
          (m.prototype.changeBit = Vr),
          (m.prototype.addTo = Yr),
          (m.prototype.dMultiply = Xr),
          (m.prototype.dAddOffset = hr),
          (m.prototype.multiplyLowerTo = s),
          (m.prototype.multiplyUpperTo = y),
          (m.prototype.modInt = _e),
          (m.prototype.millerRabin = Er),
          (m.prototype.clone = cr),
          (m.prototype.intValue = X),
          (m.prototype.byteValue = J),
          (m.prototype.shortValue = G),
          (m.prototype.signum = C),
          (m.prototype.toByteArray = he),
          (m.prototype.equals = dr),
          (m.prototype.min = Pr),
          (m.prototype.max = te),
          (m.prototype.and = or),
          (m.prototype.or = fr),
          (m.prototype.xor = Ir),
          (m.prototype.andNot = Zr),
          (m.prototype.not = se),
          (m.prototype.shiftLeft = wr),
          (m.prototype.shiftRight = Me),
          (m.prototype.getLowestSetBit = Lr),
          (m.prototype.bitCount = Nr),
          (m.prototype.testBit = nr),
          (m.prototype.setBit = qr),
          (m.prototype.clearBit = Hr),
          (m.prototype.flipBit = Ee),
          (m.prototype.add = Ur),
          (m.prototype.subtract = Fr),
          (m.prototype.multiply = xe),
          (m.prototype.divide = sr),
          (m.prototype.remainder = Kr),
          (m.prototype.divideAndRemainder = $r),
          (m.prototype.modPow = Ge),
          (m.prototype.modInverse = rt),
          (m.prototype.pow = r),
          (m.prototype.gcd = ke),
          (m.prototype.isProbablePrime = rr);
        const et = m;
        var ct = function (i, a) {
            (this.modulus = new et(i, 16)),
              (this.encryptionExponent = new et(a, 16));
          },
          ft = {
            base64:
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            encode: function (i) {
              if (!i) return !1;
              var a = "",
                n,
                g,
                o,
                u,
                p,
                O,
                yr,
                Gr = 0;
              do
                (n = i.charCodeAt(Gr++)),
                  (g = i.charCodeAt(Gr++)),
                  (o = i.charCodeAt(Gr++)),
                  (u = n >> 2),
                  (p = ((n & 3) << 4) | (g >> 4)),
                  (O = ((g & 15) << 2) | (o >> 6)),
                  (yr = o & 63),
                  isNaN(g) ? (O = yr = 64) : isNaN(o) && (yr = 64),
                  (a +=
                    this.base64.charAt(u) +
                    this.base64.charAt(p) +
                    this.base64.charAt(O) +
                    this.base64.charAt(yr));
              while (Gr < i.length);
              return a;
            },
            decode: function (i) {
              if (!i) return !1;
              i = i.replace(/[^A-Za-z0-9\+\/\=]/g, "");
              var a = "",
                n,
                g,
                o,
                u,
                p = 0;
              do
                (n = this.base64.indexOf(i.charAt(p++))),
                  (g = this.base64.indexOf(i.charAt(p++))),
                  (o = this.base64.indexOf(i.charAt(p++))),
                  (u = this.base64.indexOf(i.charAt(p++))),
                  (a += String.fromCharCode((n << 2) | (g >> 4))),
                  o != 64 &&
                    (a += String.fromCharCode(((g & 15) << 4) | (o >> 2))),
                  u != 64 && (a += String.fromCharCode(((o & 3) << 6) | u));
              while (p < i.length);
              return a;
            },
          },
          gt = {
            hex: "0123456789abcdef",
            encode: function (i) {
              if (!i) return !1;
              var a = "",
                n,
                g = 0;
              do
                (n = i.charCodeAt(g++)),
                  (a +=
                    this.hex.charAt((n >> 4) & 15) + this.hex.charAt(n & 15));
              while (g < i.length);
              return a;
            },
            decode: function (i) {
              if (!i) return !1;
              i = i.replace(/[^0-9abcdef]/g, "");
              var a = "",
                n = 0;
              do
                a += String.fromCharCode(
                  ((this.hex.indexOf(i.charAt(n++)) << 4) & 240) |
                    (this.hex.indexOf(i.charAt(n++)) & 15),
                );
              while (n < i.length);
              return a;
            },
          },
          bt = {
            getPublicKey: function (i, a) {
              return new ct(i, a);
            },
            encrypt: function (i, a) {
              return !a ||
                ((i = this.pkcs1pad2(i, (a.modulus.bitLength() + 7) >> 3)),
                !i) ||
                ((i = i.modPowInt(a.encryptionExponent, a.modulus)), !i)
                ? !1
                : ((i = i.toString(16)),
                  (i.length & 1) == 1 && (i = "0" + i),
                  ft.encode(gt.decode(i)));
            },
            pkcs1pad2: function (i, a) {
              if (a < i.length + 11) return null;
              for (var n = [], g = i.length - 1; g >= 0 && a > 0; )
                n[--a] = i.charCodeAt(g--);
              for (n[--a] = 0; a > 2; )
                n[--a] = Math.floor(Math.random() * 254) + 1;
              return (n[--a] = 2), (n[--a] = 0), new et(n);
            },
          };
        const Bt = bt;
      },
    },
  ]);
})();
