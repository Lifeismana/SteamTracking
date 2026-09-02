/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkHelp = self.webpackChunkHelp || []).push([
    [976],
    {
      7545: (Vs, Zc, W) => {
        "use strict";
        W.r(Zc),
          W.d(Zc, {
            GreenEnvelope: () => vm,
            default: () => rB,
            useSteamNotifications: () => ac,
          });
        var d = W(7850),
          k = W(9412);
        const tB = 0,
          Hm = 0,
          kn = 1,
          En = 2,
          Jc = 3,
          Ac = 4,
          eB = 5,
          nc = 6,
          sB = 7,
          aB = 8,
          nB = 9,
          cB = 10,
          lB = 11,
          mB = 12,
          fB = 13,
          uB = 14,
          Nm = 15,
          dB = 16,
          BB = 17,
          Dc = Nm,
          os = Hm,
          gB = 0,
          wB = 1,
          bB = 2,
          zB = 3,
          yB = 4,
          MB = 5,
          hB = { locked: !1 };
        var qc = W(5946),
          V = W(626),
          ra = W(2993),
          Bn = W(9376),
          x = W(2604),
          w = W(5038),
          Ga = W(8312),
          c = W(613),
          a = W.n(c),
          t = W(5245);
        class ur extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ur.prototype.appid || t.Sg(ur.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ur.sm_m ||
                (ur.sm_m = {
                  proto: ur,
                  fields: {
                    appid: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    is_allowed: { n: 2, br: t.qM.readBool, bw: t.gp.writeBool },
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
            let i = new (a().BinaryReader)(r),
              e = new ur();
            return ur.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(ur.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ur.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(ur.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ur.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "ParentalApp";
          }
        }
        class A extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              A.prototype.allowed_time_windows || t.Sg(A.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              A.sm_m ||
                (A.sm_m = {
                  proto: A,
                  fields: {
                    allowed_time_windows: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    allowed_daily_minutes: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
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
            let i = new (a().BinaryReader)(r),
              e = new A();
            return A.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(A.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return A.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(A.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              A.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "ParentalPlaytimeDay";
          }
        }
        class Fr extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Fr.prototype.apply_playtime_restrictions || t.Sg(Fr.M()),
              c.Message.initialize(this, r, 0, -1, [15], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Fr.sm_m ||
                (Fr.sm_m = {
                  proto: Fr,
                  fields: {
                    apply_playtime_restrictions: {
                      n: 2,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    playtime_days: { n: 15, c: A, r: !0, q: !0 },
                  },
                }),
              Fr.sm_m
            );
          }
          static MBF() {
            return Fr.sm_mbf || (Fr.sm_mbf = t.w0(Fr.M())), Fr.sm_mbf;
          }
          toObject(r = !1) {
            return Fr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Fr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Fr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Fr();
            return Fr.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Fr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Fr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Fr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Fr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "ParentalPlaytimeRestrictions";
          }
        }
        class R extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              R.prototype.restrictions || t.Sg(R.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              R.sm_m ||
                (R.sm_m = {
                  proto: R,
                  fields: {
                    restrictions: { n: 1, c: A },
                    rtime_expires: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
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
            let i = new (a().BinaryReader)(r),
              e = new R();
            return R.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(R.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return R.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(R.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              R.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "ParentalTemporaryPlaytimeRestrictions";
          }
        }
        class G extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              G.prototype.steamid || t.Sg(G.M()),
              c.Message.initialize(this, r, 0, -1, [4, 5, 17, 18, 19], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              G.sm_m ||
                (G.sm_m = {
                  proto: G,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    applist_base_id: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    applist_base_description: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    applist_base: { n: 4, c: ur, r: !0, q: !0 },
                    applist_custom: { n: 5, c: ur, r: !0, q: !0 },
                    passwordhashtype: {
                      n: 6,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    salt: { n: 7, br: t.qM.readBytes, bw: t.gp.writeBytes },
                    passwordhash: {
                      n: 8,
                      br: t.qM.readBytes,
                      bw: t.gp.writeBytes,
                    },
                    is_enabled: { n: 9, br: t.qM.readBool, bw: t.gp.writeBool },
                    enabled_features: {
                      n: 10,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    recovery_email: {
                      n: 11,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    is_site_license_lock: {
                      n: 12,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    temporary_enabled_features: {
                      n: 13,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    rtime_temporary_feature_expiration: {
                      n: 14,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    playtime_restrictions: { n: 15, c: Fr },
                    temporary_playtime_restrictions: { n: 16, c: R },
                    excluded_store_content_descriptors: {
                      n: 17,
                      r: !0,
                      q: !0,
                      br: t.qM.readUint32,
                      pbr: t.qM.readPackedUint32,
                      bw: t.gp.writeRepeatedUint32,
                    },
                    excluded_community_content_descriptors: {
                      n: 18,
                      r: !0,
                      q: !0,
                      br: t.qM.readUint32,
                      pbr: t.qM.readPackedUint32,
                      bw: t.gp.writeRepeatedUint32,
                    },
                    utility_appids: {
                      n: 19,
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
            let i = new (a().BinaryReader)(r),
              e = new G();
            return G.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(G.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return G.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(G.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              G.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "ParentalSettings";
          }
        }
        class $r extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              $r.prototype.requestid || t.Sg($r.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $r.sm_m ||
                ($r.sm_m = {
                  proto: $r,
                  fields: {
                    requestid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    family_groupid: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    steamid: {
                      n: 3,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    features: {
                      n: 4,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    time_requested: {
                      n: 5,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    approved: { n: 6, br: t.qM.readBool, bw: t.gp.writeBool },
                    steamid_responder: {
                      n: 7,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    time_responded: {
                      n: 8,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              $r.sm_m
            );
          }
          static MBF() {
            return $r.sm_mbf || ($r.sm_mbf = t.w0($r.M())), $r.sm_mbf;
          }
          toObject(r = !1) {
            return $r.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT($r.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq($r.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new $r();
            return $r.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj($r.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return $r.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0($r.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              $r.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "ParentalFeatureRequest";
          }
        }
        class Qr extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Qr.prototype.requestid || t.Sg(Qr.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Qr.sm_m ||
                (Qr.sm_m = {
                  proto: Qr,
                  fields: {
                    requestid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    family_groupid: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    steamid: {
                      n: 3,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    current_playtime_restrictions: { n: 4, c: A },
                    time_expires: {
                      n: 5,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    time_requested: {
                      n: 6,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    approved: { n: 7, br: t.qM.readBool, bw: t.gp.writeBool },
                    steamid_responder: {
                      n: 8,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    time_responded: {
                      n: 9,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    restrictions_approved: { n: 10, c: R },
                  },
                }),
              Qr.sm_m
            );
          }
          static MBF() {
            return Qr.sm_mbf || (Qr.sm_mbf = t.w0(Qr.M())), Qr.sm_mbf;
          }
          toObject(r = !1) {
            return Qr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Qr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Qr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Qr();
            return Qr.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Qr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Qr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Qr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Qr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "ParentalPlaytimeRequest";
          }
        }
        class Kr extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Kr.prototype.password || t.Sg(Kr.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Kr.sm_m ||
                (Kr.sm_m = {
                  proto: Kr,
                  fields: {
                    password: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    settings: { n: 2, c: G },
                    sessionid: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    enablecode: {
                      n: 4,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    steamid: {
                      n: 10,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              Kr.sm_m
            );
          }
          static MBF() {
            return Kr.sm_mbf || (Kr.sm_mbf = t.w0(Kr.M())), Kr.sm_mbf;
          }
          toObject(r = !1) {
            return Kr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Kr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Kr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Kr();
            return Kr.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Kr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Kr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Kr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Kr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CParental_EnableParentalSettings_Request";
          }
        }
        class ia extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return ia.toObject(r, this);
          }
          static toObject(r, i) {
            return r ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(r) {
            return new ia();
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new ia();
            return ia.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ia.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ia.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CParental_EnableParentalSettings_Response";
          }
        }
        class Vr extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Vr.prototype.password || t.Sg(Vr.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Vr.sm_m ||
                (Vr.sm_m = {
                  proto: Vr,
                  fields: {
                    password: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    steamid: {
                      n: 10,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              Vr.sm_m
            );
          }
          static MBF() {
            return Vr.sm_mbf || (Vr.sm_mbf = t.w0(Vr.M())), Vr.sm_mbf;
          }
          toObject(r = !1) {
            return Vr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Vr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Vr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Vr();
            return Vr.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Vr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Vr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Vr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Vr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CParental_DisableParentalSettings_Request";
          }
        }
        class ta extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return ta.toObject(r, this);
          }
          static toObject(r, i) {
            return r ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(r) {
            return new ta();
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new ta();
            return ta.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ta.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ta.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CParental_DisableParentalSettings_Response";
          }
        }
        class dr extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              dr.prototype.steamid || t.Sg(dr.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
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
                      n: 10,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
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
            let i = new (a().BinaryReader)(r),
              e = new dr();
            return dr.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(dr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return dr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(dr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              dr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CParental_GetParentalSettings_Request";
          }
        }
        class Yr extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Yr.prototype.settings || t.Sg(Yr.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Yr.sm_m ||
                (Yr.sm_m = { proto: Yr, fields: { settings: { n: 1, c: G } } }),
              Yr.sm_m
            );
          }
          static MBF() {
            return Yr.sm_mbf || (Yr.sm_mbf = t.w0(Yr.M())), Yr.sm_mbf;
          }
          toObject(r = !1) {
            return Yr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Yr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Yr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Yr();
            return Yr.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Yr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Yr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Yr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Yr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CParental_GetParentalSettings_Response";
          }
        }
        class Lr extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Lr.prototype.priority || t.Sg(Lr.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Lr.sm_m ||
                (Lr.sm_m = {
                  proto: Lr,
                  fields: {
                    priority: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              Lr.sm_m
            );
          }
          static MBF() {
            return Lr.sm_mbf || (Lr.sm_mbf = t.w0(Lr.M())), Lr.sm_mbf;
          }
          toObject(r = !1) {
            return Lr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Lr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Lr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Lr();
            return Lr.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Lr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Lr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Lr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Lr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CParental_GetSignedParentalSettings_Request";
          }
        }
        class Xr extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Xr.prototype.serialized_settings || t.Sg(Xr.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Xr.sm_m ||
                (Xr.sm_m = {
                  proto: Xr,
                  fields: {
                    serialized_settings: {
                      n: 1,
                      br: t.qM.readBytes,
                      bw: t.gp.writeBytes,
                    },
                    signature: {
                      n: 2,
                      br: t.qM.readBytes,
                      bw: t.gp.writeBytes,
                    },
                  },
                }),
              Xr.sm_m
            );
          }
          static MBF() {
            return Xr.sm_mbf || (Xr.sm_mbf = t.w0(Xr.M())), Xr.sm_mbf;
          }
          toObject(r = !1) {
            return Xr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Xr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Xr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Xr();
            return Xr.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Xr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Xr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Xr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Xr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CParental_GetSignedParentalSettings_Response";
          }
        }
        class Zr extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Zr.prototype.password || t.Sg(Zr.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Zr.sm_m ||
                (Zr.sm_m = {
                  proto: Zr,
                  fields: {
                    password: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    settings: { n: 2, c: G },
                    new_password: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    sessionid: {
                      n: 4,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    steamid: {
                      n: 10,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              Zr.sm_m
            );
          }
          static MBF() {
            return Zr.sm_mbf || (Zr.sm_mbf = t.w0(Zr.M())), Zr.sm_mbf;
          }
          toObject(r = !1) {
            return Zr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Zr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Zr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Zr();
            return Zr.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Zr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Zr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Zr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Zr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CParental_SetParentalSettings_Request";
          }
        }
        class ea extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return ea.toObject(r, this);
          }
          static toObject(r, i) {
            return r ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(r) {
            return new ea();
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new ea();
            return ea.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ea.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ea.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CParental_SetParentalSettings_Response";
          }
        }
        class Br extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Br.prototype.unlock_token || t.Sg(Br.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Br.sm_m ||
                (Br.sm_m = {
                  proto: Br,
                  fields: {
                    unlock_token: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              Br.sm_m
            );
          }
          static MBF() {
            return Br.sm_mbf || (Br.sm_mbf = t.w0(Br.M())), Br.sm_mbf;
          }
          toObject(r = !1) {
            return Br.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Br.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Br.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Br();
            return Br.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Br.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Br.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Br.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Br.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CParental_ValidateToken_Request";
          }
        }
        class sa extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return sa.toObject(r, this);
          }
          static toObject(r, i) {
            return r ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(r) {
            return new sa();
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new sa();
            return sa.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return sa.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              sa.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CParental_ValidateToken_Response";
          }
        }
        class Jr extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Jr.prototype.password || t.Sg(Jr.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Jr.sm_m ||
                (Jr.sm_m = {
                  proto: Jr,
                  fields: {
                    password: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    session: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    send_unlock_on_success: {
                      n: 3,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              Jr.sm_m
            );
          }
          static MBF() {
            return Jr.sm_mbf || (Jr.sm_mbf = t.w0(Jr.M())), Jr.sm_mbf;
          }
          toObject(r = !1) {
            return Jr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Jr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Jr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Jr();
            return Jr.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Jr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Jr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Jr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Jr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CParental_ValidatePassword_Request";
          }
        }
        class Ar extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ar.prototype.token || t.Sg(Ar.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ar.sm_m ||
                (Ar.sm_m = {
                  proto: Ar,
                  fields: {
                    token: { n: 1, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              Ar.sm_m
            );
          }
          static MBF() {
            return Ar.sm_mbf || (Ar.sm_mbf = t.w0(Ar.M())), Ar.sm_mbf;
          }
          toObject(r = !1) {
            return Ar.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Ar.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Ar.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Ar();
            return Ar.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Ar.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Ar.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Ar.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Ar.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CParental_ValidatePassword_Response";
          }
        }
        class Dr extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Dr.prototype.session || t.Sg(Dr.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Dr.sm_m ||
                (Dr.sm_m = {
                  proto: Dr,
                  fields: {
                    session: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              Dr.sm_m
            );
          }
          static MBF() {
            return Dr.sm_mbf || (Dr.sm_mbf = t.w0(Dr.M())), Dr.sm_mbf;
          }
          toObject(r = !1) {
            return Dr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Dr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Dr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Dr();
            return Dr.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Dr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Dr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Dr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Dr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CParental_LockClient_Request";
          }
        }
        class aa extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return aa.toObject(r, this);
          }
          static toObject(r, i) {
            return r ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(r) {
            return new aa();
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new aa();
            return aa.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return aa.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              aa.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CParental_LockClient_Response";
          }
        }
        class na extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return na.toObject(r, this);
          }
          static toObject(r, i) {
            return r ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(r) {
            return new na();
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new na();
            return na.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return na.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              na.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CParental_RequestRecoveryCode_Request";
          }
        }
        class ca extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return ca.toObject(r, this);
          }
          static toObject(r, i) {
            return r ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(r) {
            return new ca();
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new ca();
            return ca.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ca.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ca.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CParental_RequestRecoveryCode_Response";
          }
        }
        class qr extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              qr.prototype.features || t.Sg(qr.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              qr.sm_m ||
                (qr.sm_m = {
                  proto: qr,
                  fields: {
                    features: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    steamid: {
                      n: 10,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              qr.sm_m
            );
          }
          static MBF() {
            return qr.sm_mbf || (qr.sm_mbf = t.w0(qr.M())), qr.sm_mbf;
          }
          toObject(r = !1) {
            return qr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(qr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(qr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new qr();
            return qr.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(qr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return qr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(qr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              qr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CParental_RequestFeatureAccess_Request";
          }
        }
        class pr extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              pr.prototype.requestid || t.Sg(pr.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              pr.sm_m ||
                (pr.sm_m = {
                  proto: pr,
                  fields: {
                    requestid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              pr.sm_m
            );
          }
          static MBF() {
            return pr.sm_mbf || (pr.sm_mbf = t.w0(pr.M())), pr.sm_mbf;
          }
          toObject(r = !1) {
            return pr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(pr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(pr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new pr();
            return pr.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(pr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return pr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(pr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              pr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CParental_RequestFeatureAccess_Response";
          }
        }
        class Pr extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Pr.prototype.approve || t.Sg(Pr.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Pr.sm_m ||
                (Pr.sm_m = {
                  proto: Pr,
                  fields: {
                    approve: { n: 1, br: t.qM.readBool, bw: t.gp.writeBool },
                    requestid: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    features: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    duration: {
                      n: 4,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    steamid: {
                      n: 10,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              Pr.sm_m
            );
          }
          static MBF() {
            return Pr.sm_mbf || (Pr.sm_mbf = t.w0(Pr.M())), Pr.sm_mbf;
          }
          toObject(r = !1) {
            return Pr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Pr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Pr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Pr();
            return Pr.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Pr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Pr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Pr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Pr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CParental_ApproveFeatureAccess_Request";
          }
        }
        class la extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return la.toObject(r, this);
          }
          static toObject(r, i) {
            return r ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(r) {
            return new la();
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new la();
            return la.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return la.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              la.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CParental_ApproveFeatureAccess_Response";
          }
        }
        class Rr extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Rr.prototype.time_expires || t.Sg(Rr.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Rr.sm_m ||
                (Rr.sm_m = {
                  proto: Rr,
                  fields: {
                    time_expires: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    current_playtime_restrictions: { n: 2, c: A },
                    steamid: {
                      n: 10,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              Rr.sm_m
            );
          }
          static MBF() {
            return Rr.sm_mbf || (Rr.sm_mbf = t.w0(Rr.M())), Rr.sm_mbf;
          }
          toObject(r = !1) {
            return Rr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Rr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Rr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Rr();
            return Rr.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Rr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Rr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Rr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Rr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CParental_RequestPlaytime_Request";
          }
        }
        class Gr extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Gr.prototype.requestid || t.Sg(Gr.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Gr.sm_m ||
                (Gr.sm_m = {
                  proto: Gr,
                  fields: {
                    requestid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              Gr.sm_m
            );
          }
          static MBF() {
            return Gr.sm_mbf || (Gr.sm_mbf = t.w0(Gr.M())), Gr.sm_mbf;
          }
          toObject(r = !1) {
            return Gr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Gr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Gr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Gr();
            return Gr.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Gr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Gr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Gr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Gr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CParental_RequestPlaytime_Response";
          }
        }
        class Cr extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Cr.prototype.approve || t.Sg(Cr.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Cr.sm_m ||
                (Cr.sm_m = {
                  proto: Cr,
                  fields: {
                    approve: { n: 1, br: t.qM.readBool, bw: t.gp.writeBool },
                    requestid: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    restrictions_approved: { n: 3, c: R },
                    steamid: {
                      n: 10,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              Cr.sm_m
            );
          }
          static MBF() {
            return Cr.sm_mbf || (Cr.sm_mbf = t.w0(Cr.M())), Cr.sm_mbf;
          }
          toObject(r = !1) {
            return Cr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Cr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Cr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Cr();
            return Cr.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Cr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Cr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Cr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Cr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CParental_ApprovePlaytime_Request";
          }
        }
        class ma extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return ma.toObject(r, this);
          }
          static toObject(r, i) {
            return r ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(r) {
            return new ma();
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new ma();
            return ma.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ma.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ma.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CParental_ApprovePlaytime_Response";
          }
        }
        class _r extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              _r.prototype.rt_include_completed_since || t.Sg(_r.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _r.sm_m ||
                (_r.sm_m = {
                  proto: _r,
                  fields: {
                    rt_include_completed_since: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    family_groupid: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              _r.sm_m
            );
          }
          static MBF() {
            return _r.sm_mbf || (_r.sm_mbf = t.w0(_r.M())), _r.sm_mbf;
          }
          toObject(r = !1) {
            return _r.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(_r.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(_r.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new _r();
            return _r.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(_r.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return _r.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(_r.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              _r.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CParental_GetRequests_Request";
          }
        }
        class ri extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ri.prototype.feature_requests || t.Sg(ri.M()),
              c.Message.initialize(this, r, 0, -1, [1, 2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ri.sm_m ||
                (ri.sm_m = {
                  proto: ri,
                  fields: {
                    feature_requests: { n: 1, c: $r, r: !0, q: !0 },
                    playtime_requests: { n: 2, c: Qr, r: !0, q: !0 },
                  },
                }),
              ri.sm_m
            );
          }
          static MBF() {
            return ri.sm_mbf || (ri.sm_mbf = t.w0(ri.M())), ri.sm_mbf;
          }
          toObject(r = !1) {
            return ri.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(ri.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(ri.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new ri();
            return ri.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(ri.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ri.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(ri.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ri.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CParental_GetRequests_Response";
          }
        }
        class ii extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ii.prototype.day_of_week || t.Sg(ii.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ii.sm_m ||
                (ii.sm_m = {
                  proto: ii,
                  fields: {
                    day_of_week: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    minutes_used: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    steamid: {
                      n: 10,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              ii.sm_m
            );
          }
          static MBF() {
            return ii.sm_mbf || (ii.sm_mbf = t.w0(ii.M())), ii.sm_mbf;
          }
          toObject(r = !1) {
            return ii.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(ii.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(ii.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new ii();
            return ii.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(ii.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ii.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(ii.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ii.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CParental_ReportPlaytimeAndNotify_Request";
          }
        }
        class fa extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return fa.toObject(r, this);
          }
          static toObject(r, i) {
            return r ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(r) {
            return new fa();
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new fa();
            return fa.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return fa.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              fa.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CParental_ReportPlaytimeAndNotify_Response";
          }
        }
        class ti extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ti.prototype.serialized_settings || t.Sg(ti.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ti.sm_m ||
                (ti.sm_m = {
                  proto: ti,
                  fields: {
                    serialized_settings: {
                      n: 1,
                      br: t.qM.readBytes,
                      bw: t.gp.writeBytes,
                    },
                    signature: {
                      n: 2,
                      br: t.qM.readBytes,
                      bw: t.gp.writeBytes,
                    },
                    password: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    sessionid: {
                      n: 4,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              ti.sm_m
            );
          }
          static MBF() {
            return ti.sm_mbf || (ti.sm_mbf = t.w0(ti.M())), ti.sm_mbf;
          }
          toObject(r = !1) {
            return ti.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(ti.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(ti.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new ti();
            return ti.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(ti.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ti.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(ti.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ti.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CParental_ParentalSettingsChange_Notification";
          }
        }
        class ei extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ei.prototype.password || t.Sg(ei.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ei.sm_m ||
                (ei.sm_m = {
                  proto: ei,
                  fields: {
                    password: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    sessionid: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              ei.sm_m
            );
          }
          static MBF() {
            return ei.sm_mbf || (ei.sm_mbf = t.w0(ei.M())), ei.sm_mbf;
          }
          toObject(r = !1) {
            return ei.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(ei.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(ei.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new ei();
            return ei.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(ei.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ei.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(ei.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ei.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CParental_ParentalUnlock_Notification";
          }
        }
        class si extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              si.prototype.sessionid || t.Sg(si.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              si.sm_m ||
                (si.sm_m = {
                  proto: si,
                  fields: {
                    sessionid: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              si.sm_m
            );
          }
          static MBF() {
            return si.sm_mbf || (si.sm_mbf = t.w0(si.M())), si.sm_mbf;
          }
          toObject(r = !1) {
            return si.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(si.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(si.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new si();
            return si.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(si.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return si.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(si.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              si.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CParental_ParentalLock_Notification";
          }
        }
        class ai extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ai.prototype.day_of_week || t.Sg(ai.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ai.sm_m ||
                (ai.sm_m = {
                  proto: ai,
                  fields: {
                    day_of_week: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    minutes_used: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              ai.sm_m
            );
          }
          static MBF() {
            return ai.sm_mbf || (ai.sm_mbf = t.w0(ai.M())), ai.sm_mbf;
          }
          toObject(r = !1) {
            return ai.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(ai.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(ai.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new ai();
            return ai.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(ai.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ai.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(ai.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ai.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CParental_PlaytimeUsed_Notification";
          }
        }
        var Fn;
        ((s) => {
          function r(z, g, O) {
            return z.SendMsg(
              "Parental.EnableParentalSettings#1",
              (0, w.I8)(Kr, g, O),
              ia,
              { ePrivilege: 1 },
            );
          }
          s.EnableParentalSettings = r;
          function i(z, g, O) {
            return z.SendMsg(
              "Parental.DisableParentalSettings#1",
              (0, w.I8)(Vr, g, O),
              ta,
              { ePrivilege: 1 },
            );
          }
          s.DisableParentalSettings = i;
          function e(z, g, O) {
            return z.SendMsg(
              "Parental.GetParentalSettings#1",
              (0, w.I8)(dr, g, O),
              Yr,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          s.GetParentalSettings = e;
          function n(z, g, O) {
            return z.SendMsg(
              "Parental.GetSignedParentalSettings#1",
              (0, w.I8)(Lr, g, O),
              Xr,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          s.GetSignedParentalSettings = n;
          function l(z, g, O) {
            return z.SendMsg(
              "Parental.SetParentalSettings#1",
              (0, w.I8)(Zr, g, O),
              ea,
              { ePrivilege: 1 },
            );
          }
          s.SetParentalSettings = l;
          function m(z, g, O) {
            return z.SendMsg(
              "Parental.ValidateToken#1",
              (0, w.I8)(Br, g, O),
              sa,
              { ePrivilege: 1 },
            );
          }
          s.ValidateToken = m;
          function f(z, g, O) {
            return z.SendMsg(
              "Parental.ValidatePassword#1",
              (0, w.I8)(Jr, g, O),
              Ar,
              { ePrivilege: 1 },
            );
          }
          s.ValidatePassword = f;
          function u(z, g, O) {
            return z.SendMsg("Parental.LockClient#1", (0, w.I8)(Dr, g, O), aa, {
              ePrivilege: 1,
            });
          }
          s.LockClient = u;
          function B(z, g, O) {
            return z.SendMsg(
              "Parental.RequestRecoveryCode#1",
              (0, w.I8)(na, g, O),
              ca,
              { ePrivilege: 1 },
            );
          }
          s.RequestRecoveryCode = B;
          function y(z, g, O) {
            return z.SendMsg(
              "Parental.RequestFeatureAccess#1",
              (0, w.I8)(qr, g, O),
              pr,
              { ePrivilege: 1 },
            );
          }
          s.RequestFeatureAccess = y;
          function T(z, g, O) {
            return z.SendMsg(
              "Parental.ApproveFeatureAccess#1",
              (0, w.I8)(Pr, g, O),
              la,
              { ePrivilege: 1 },
            );
          }
          s.ApproveFeatureAccess = T;
          function I(z, g, O) {
            return z.SendMsg(
              "Parental.RequestPlaytime#1",
              (0, w.I8)(Rr, g, O),
              Gr,
              { ePrivilege: 1 },
            );
          }
          s.RequestPlaytime = I;
          function S(z, g, O) {
            return z.SendMsg(
              "Parental.ApprovePlaytime#1",
              (0, w.I8)(Cr, g, O),
              ma,
              { ePrivilege: 1 },
            );
          }
          s.ApprovePlaytime = S;
          function E(z, g, O) {
            return z.SendMsg(
              "Parental.GetRequests#1",
              (0, w.I8)(_r, g, O),
              ri,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          s.GetRequests = E;
          function j(z, g, O) {
            return z.SendMsg(
              "Parental.ReportPlaytimeAndNotify#1",
              (0, w.I8)(ii, g, O),
              fa,
              { ePrivilege: 1 },
            );
          }
          s.ReportPlaytimeAndNotify = j;
        })(Fn || (Fn = {}));
        var pc;
        ((s) => {
          (s.NotifySettingsChangeHandler = {
            name: "ParentalClient.NotifySettingsChange#1",
            request: ti,
          }),
            (s.NotifyUnlockHandler = {
              name: "ParentalClient.NotifyUnlock#1",
              request: ei,
            }),
            (s.NotifyLockHandler = {
              name: "ParentalClient.NotifyLock#1",
              request: si,
            }),
            (s.NotifyPlaytimeUsedHandler = {
              name: "ParentalClient.NotifyPlaytimeUsed#1",
              request: ai,
            });
        })(pc || (pc = {}));
        var Ms = W(9514),
          o = W(425),
          cc = W(7996),
          Ws = W(6559);
        function gn(s) {
          return ["parentalsettings", s];
        }
        function Pc(s) {
          const r = s.applist_base.concat(s.applist_custom);
          return new Map(r.map((e) => [e.appid, e.is_allowed]));
        }
        async function Rc(s, r) {
          const i = w.w.Init(dr);
          i.Body().set_steamid(r);
          const e = await Fn.GetParentalSettings(s, i);
          if (e.GetEResult() != x.R)
            throw new Error(
              `Error from GetParentalSettings: ${e.GetEResult()}`,
            );
          const n = e.Body().settings().toObject();
          if (!n.playtime_restrictions) {
            const m = {
              apply_playtime_restrictions: !1,
              playtime_days: Array(7).fill({
                allowed_time_windows: BigInt(0xffffffffffff).toString(),
                allowed_daily_minutes: 1440,
              }),
            };
            n.playtime_restrictions = m;
          }
          const l = Pc(n);
          return { settings: n, mapAppsAllowed: l };
        }
        function km(s, r, i) {
          return {
            queryKey: gn(r),
            queryFn: () => Rc(s, r),
            placeholderData: { settings: void 0, mapAppsAllowed: void 0 },
            ...i,
          };
        }
        function lc(s) {
          const r = (0, Ga.KV)();
          return (0, Bn.I)(km(r, s));
        }
        function Em(s, r) {
          return ["validateparentaltoken", s, r];
        }
        function Fm() {
          const s = (0, cc.VY)("clientsessionid"),
            r = (0, cc.VY)("sessionid");
          return s || r;
        }
        function mc() {
          const s = (0, Ga.KV)(),
            r = (0, ra.LH)(),
            i = (0, cc.VY)("steamparental"),
            e = Fm();
          let n = i,
            l = n?.split("||") || [];
          l.length == 2 && (n = l[1]);
          const m = n && n !== "0" ? e + "||" + n : void 0,
            f = (0, Bn.I)({
              queryKey: Em(r, m),
              queryFn: async () => {
                if (!m) return x.sW;
                const u = w.w.Init(Br);
                return (
                  u.Body().set_unlock_token(m),
                  (await Fn.ValidateToken(s, u)).GetEResult()
                );
              },
            });
          return !f.isSuccess || f.data !== x.R;
        }
        function Gc(s, r, i) {
          if (r == os || r == null) return !1;
          if (!s) return !0;
          if (!s.is_enabled || !i) return !1;
          if (r == Dc) return !0;
          const e = s.enabled_features;
          return e ? (e & (1 << r)) == 0 : !0;
        }
        function $m(s, r, i, e) {
          if (!i || !e) return !0;
          if (
            !i.is_enabled ||
            !r ||
            i.applist_base_id == 0 ||
            s == 0 ||
            (s >= k_nGameIDServiceAppFirst && s <= k_nGameIDServiceAppLast) ||
            [
              k_nGameIDWinUI,
              k_nGameIDSteamVR,
              k_nGameIDSteamVRMain,
              k_nGameIDSteamVRMonitorMain,
              k_nGameIDSteamVRMonitor,
            ].indexOf(s) !== -1 ||
            i.utility_appids?.includes(s)
          )
            return !1;
          const l = e.get(s);
          return l !== void 0 ? !l : !0;
        }
        function Qm(s) {
          const r = (0, ra.LH)(),
            { settings: i } = lc(r).data ?? {},
            e = mc();
          return Gc(i, s, e);
        }
        function TB(s) {
          const r = useActiveAccount(),
            { settings: i, mapAppsAllowed: e } = lc(r).data ?? {},
            n = mc();
          return $m(s, n, i, e);
        }
        async function Cc(s, r) {
          const i = CProtoBufMsg.Init(
            CParental_DisableParentalSettings_Request,
          );
          i.Body().set_steamid(r);
          const e = await ParentalService.DisableParentalSettings(s, i);
          if (e.GetEResult() != k_EResultOK)
            throw new Error(
              `Error from DisableParentalSettings: ${e.GetErrorMessage()} (${e.GetEResult()})`,
            );
        }
        function oB(s) {
          const r = useActiveServiceTransport(),
            i = fc(),
            e = useQueryClient();
          return useMutation({
            mutationFn: async () => await Cc(r, s),
            onSuccess: () => {
              e.invalidateQueries({ queryKey: gn(s) }), i();
            },
          });
        }
        async function _c(s, r, i) {
          const e = CProtoBufMsg.Init(CParental_EnableParentalSettings_Request);
          e.Body().set_steamid(r),
            e.Body().set_settings(ParentalSettings.fromObject(i));
          const n = await ParentalService.EnableParentalSettings(s, e);
          if (n.GetEResult() != k_EResultOK)
            throw new Error(
              `Error from EnableParentalSettings: ${n.GetErrorMessage()} (${n.GetEResult()})`,
            );
        }
        function WB(s, r) {
          const i = useActiveServiceTransport(),
            e = useQueryClient();
          return useMutation({
            mutationFn: async () => await _c(i, s, r),
            onSuccess: () => {
              e.invalidateQueries({ queryKey: gn(s) });
            },
          });
        }
        async function rl(s, r, i, e = {}) {
          const n = CProtoBufMsg.Init(CParental_SetParentalSettings_Request);
          n.Body().set_steamid(r),
            n.Body().set_settings(ParentalSettings.fromObject(i));
          const { password: l, new_password: m, sessionid: f } = e;
          l && n.Body().set_password(l),
            m && n.Body().set_new_password(l),
            f && n.Body().set_sessionid(f);
          const u = await ParentalService.SetParentalSettings(s, n);
          if (u.GetEResult() != k_EResultOK)
            throw new Error(
              `Error from SetParentalSettings: ${u.GetErrorMessage()} (${u.GetEResult()})`,
            );
        }
        function jB(s) {
          const r = useActiveServiceTransport(),
            i = useQueryClient();
          return useMutation({
            mutationFn: async (e) => await rl(r, s, e),
            onSuccess: (e, n) => {
              i.setQueryData(gn(s), { settings: n, mapAppsAllowed: Pc(n) });
            },
          });
        }
        function OB() {
          const s = useActiveServiceTransport(),
            r = useQueryClient();
          return useMutation({
            mutationFn: async (i) => {
              const { steamidSrc: e, steamidDest: n } = i,
                { settings: l } = await Rc(s, e),
                m = CSteamID.InitFromString(n);
              l.steamid = m.GetAccountID().toString();
              let f = !0;
              try {
                await _c(s, n, l);
              } catch {
                f = !1;
              }
              f || (await rl(s, n, l)), l.is_enabled || (await Cc(s, n));
            },
            onSuccess: (i, e) => {
              r.invalidateQueries({ queryKey: gn(e.steamidDest) });
            },
          });
        }
        function vB(s) {
          const r = useActiveServiceTransport();
          return useQuery({
            queryKey: ["parental_ownedgames", s],
            queryFn: async () => {
              const i = CProtoBufMsg.Init(CPlayer_GetOwnedGames_Request);
              i.Body().set_steamid(s),
                i.Body().set_include_appinfo(!0),
                i.Body().set_include_free_sub(!0),
                i.Body().set_include_played_free_games(!0),
                i.Body().set_skip_unvetted_apps(!1),
                i.Body().set_language(Config.LANGUAGE);
              const e = await PlayerService.GetOwnedGames(r, i);
              if (e.GetEResult() != k_EResultOK)
                throw new Error(`Error from GetOwnedGames: ${e.GetEResult()}`);
              return e.Body();
            },
          });
        }
        function UB(s, r, i, e) {
          const n = useActiveServiceTransport();
          return useMutation({
            mutationFn: async () => {
              if (r !== k_EParentalBlockAlways && r !== k_EParentalBlockNever) {
                const l = CProtoBufMsg.Init(
                  CParental_RequestFeatureAccess_Request,
                );
                l.Body().set_steamid(s), l.Body().set_features(1 << r);
                const m = await ParentalService.RequestFeatureAccess(n, l);
                if (m.GetEResult() != k_EResultOK)
                  throw {
                    result: m.GetEResult(),
                    message: `Error from RequestFeatureAccess: ${m.GetErrorMessage()} (${m.GetEResult()})`,
                  };
              }
            },
            onSuccess: i,
            onError: e,
          });
        }
        function il() {
          return "parental_requests";
        }
        function xB(s, r) {
          const i = useActiveServiceTransport();
          return useQuery({
            queryKey: [il(), s, r],
            queryFn: async () => {
              const e = CProtoBufMsg.Init(CParental_GetRequests_Request);
              e.Body().set_family_groupid(s),
                r !== void 0 && e.Body().set_rt_include_completed_since(r);
              const n = await ParentalService.GetRequests(i, e);
              if (n.GetEResult() != k_EResultOK)
                throw new Error(
                  `Error from GetRequests: ${n.GetEResult()} ${n.GetErrorMessage()}`,
                );
              return n.Body();
            },
          });
        }
        function fc() {
          const s = useQueryClient();
          return useCallback(
            () => s.invalidateQueries({ queryKey: [il()] }),
            [s],
          );
        }
        function IB(s, r, i) {
          const e = useActiveServiceTransport(),
            n = fc();
          return useMutation({
            mutationFn: async (l) => {
              const { bApprove: m, durationSec: f } = l,
                u = CProtoBufMsg.Init(CParental_ApproveFeatureAccess_Request);
              u.Body().set_requestid(s.requestid()),
                u.Body().set_steamid(s.steamid()),
                u.Body().set_features(s.features()),
                u.Body().set_approve(m),
                u.Body().set_duration(f);
              const B = await ParentalService.ApproveFeatureAccess(e, u);
              if (B.GetEResult() != k_EResultOK)
                throw {
                  result: B.GetEResult(),
                  message: `Error from ApproveFeatureAccess: ${B.GetErrorMessage()} (${B.GetEResult()})`,
                };
            },
            onSuccess: () => {
              n(), r && r();
            },
            onError: i,
          });
        }
        function SB(s, r, i) {
          const e = useActiveServiceTransport(),
            n = fc();
          return useMutation({
            mutationFn: async (l) => {
              const { bApprove: m, restrictions: f } = l,
                u = CProtoBufMsg.Init(CParental_ApprovePlaytime_Request);
              u.Body().set_requestid(s.requestid()),
                u.Body().set_steamid(s.steamid()),
                u.Body().set_restrictions_approved(f),
                u.Body().set_approve(m);
              const B = await ParentalService.ApprovePlaytime(e, u);
              if (B.GetEResult() != k_EResultOK)
                throw {
                  result: B.GetEResult(),
                  message: `Error from ApprovePlaytime: ${B.GetErrorMessage()} (${B.GetEResult()})`,
                };
            },
            onSuccess: () => {
              n(), r && r();
            },
            onError: i,
          });
        }
        function HB(s, r, i, e) {
          const n = useActiveServiceTransport();
          return useMutation({
            mutationFn: async () => {
              const l = CProtoBufMsg.Init(CParental_RequestPlaytime_Request);
              l.Body().set_steamid(s),
                l
                  .Body()
                  .set_current_playtime_restrictions(
                    ParentalPlaytimeDay.fromObject(r),
                  );
              const m = new Date();
              m.setHours(0, 0, 0, 0),
                m.setDate(m.getDate() + 1),
                l.Body().set_time_expires(m.getTime() / 1e3);
              const f = await ParentalService.RequestPlaytime(n, l);
              if (f.GetEResult() != k_EResultOK)
                throw {
                  result: f.GetEResult(),
                  message: `Error from RequestPlaytime: ${f.GetErrorMessage()} (${f.GetEResult()})`,
                };
            },
            onSuccess: i,
            onError: e,
          });
        }
        function NB(s, r, i) {
          if (r)
            for (let e of i) {
              const n = s.applist_custom.find((l) => l.appid == e);
              n
                ? (n.is_allowed = !0)
                : s.applist_custom.push({ appid: e, is_allowed: !0 });
            }
          else {
            const e = s.applist_custom.filter((n) => !i.includes(n.appid));
            s.applist_custom = e;
          }
        }
        var Km = W(6346);
        const Vm = 0,
          Ym = 1,
          $n = 2,
          wn = 3,
          en = 4,
          Qn = 5,
          uc = 6,
          Lm = 7,
          bn = 8,
          Kn = 9,
          tl = 10,
          dc = 11,
          zn = 12,
          kB = 13,
          el = 14,
          sl = 15,
          al = 16,
          nl = 17,
          cl = 18,
          ll = 19,
          ml = 20,
          fl = 21,
          Vn = 22,
          Bc = 23,
          ul = 24,
          EB = 25,
          FB = 26,
          $B = 27,
          dl = 28,
          gc = 29,
          Yn = 30,
          Bl = 0,
          QB = 1;
        function Xm(s) {
          return "unknown ESteamNotificationType ( " + s + " )";
        }
        function KB(s) {
          return "unknown ESteamNotificationTarget ( " + s + " )";
        }
        function VB(s) {
          return "unknown ESteamNotificationTargetClientType ( " + s + " )";
        }
        class gr extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              gr.prototype.notification_id || t.Sg(gr.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              gr.sm_m ||
                (gr.sm_m = {
                  proto: gr,
                  fields: {
                    notification_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    notification_targets: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    notification_type: {
                      n: 3,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    body_data: {
                      n: 4,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    read: { n: 7, br: t.qM.readBool, bw: t.gp.writeBool },
                    timestamp: {
                      n: 8,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    hidden: { n: 9, br: t.qM.readBool, bw: t.gp.writeBool },
                    expiry: {
                      n: 10,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    viewed: {
                      n: 11,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              gr.sm_m
            );
          }
          static MBF() {
            return gr.sm_mbf || (gr.sm_mbf = t.w0(gr.M())), gr.sm_mbf;
          }
          toObject(r = !1) {
            return gr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(gr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(gr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new gr();
            return gr.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(gr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return gr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(gr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              gr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "SteamNotificationData";
          }
        }
        class wr extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              wr.prototype.include_hidden || t.Sg(wr.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              wr.sm_m ||
                (wr.sm_m = {
                  proto: wr,
                  fields: {
                    include_hidden: {
                      n: 1,
                      d: !1,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    language: {
                      n: 2,
                      d: 0,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    include_confirmation_count: {
                      n: 3,
                      d: !0,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    include_pinned_counts: {
                      n: 4,
                      d: !1,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    include_read: {
                      n: 5,
                      d: !0,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    count_only: {
                      n: 6,
                      d: !1,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              wr.sm_m
            );
          }
          static MBF() {
            return wr.sm_mbf || (wr.sm_mbf = t.w0(wr.M())), wr.sm_mbf;
          }
          toObject(r = !1) {
            return wr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(wr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(wr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new wr();
            return wr.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(wr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return wr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(wr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              wr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamNotification_GetSteamNotifications_Request";
          }
        }
        class ni extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ni.prototype.notifications || t.Sg(ni.M()),
              c.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ni.sm_m ||
                (ni.sm_m = {
                  proto: ni,
                  fields: {
                    notifications: { n: 1, c: gr, r: !0, q: !0 },
                    confirmation_count: {
                      n: 2,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    pending_gift_count: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    pending_friend_count: {
                      n: 5,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    unread_count: {
                      n: 6,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    pending_family_invite_count: {
                      n: 7,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              ni.sm_m
            );
          }
          static MBF() {
            return ni.sm_mbf || (ni.sm_mbf = t.w0(ni.M())), ni.sm_mbf;
          }
          toObject(r = !1) {
            return ni.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(ni.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(ni.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new ni();
            return ni.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(ni.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ni.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(ni.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ni.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamNotification_GetSteamNotifications_Response";
          }
        }
        class br extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              br.prototype.timestamp || t.Sg(br.M()),
              c.Message.initialize(this, r, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              br.sm_m ||
                (br.sm_m = {
                  proto: br,
                  fields: {
                    timestamp: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    notification_type: {
                      n: 2,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    notification_ids: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: t.qM.readUint64String,
                      pbr: t.qM.readPackedUint64String,
                      bw: t.gp.writeRepeatedUint64String,
                    },
                    mark_all_read: {
                      n: 4,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              br.sm_m
            );
          }
          static MBF() {
            return br.sm_mbf || (br.sm_mbf = t.w0(br.M())), br.sm_mbf;
          }
          toObject(r = !1) {
            return br.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(br.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(br.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new br();
            return br.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(br.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return br.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(br.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              br.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamNotification_MarkNotificationsRead_Notification";
          }
        }
        class zr extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              zr.prototype.remote_client_id || t.Sg(zr.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              zr.sm_m ||
                (zr.sm_m = {
                  proto: zr,
                  fields: {
                    remote_client_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    target_client_type: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              zr.sm_m
            );
          }
          static MBF() {
            return zr.sm_mbf || (zr.sm_mbf = t.w0(zr.M())), zr.sm_mbf;
          }
          toObject(r = !1) {
            return zr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(zr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(zr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new zr();
            return zr.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(zr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return zr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(zr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              zr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamNotification_MarkNotificationsViewed_Notification";
          }
        }
        class C extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              C.prototype.notification_type || t.Sg(C.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              C.sm_m ||
                (C.sm_m = {
                  proto: C,
                  fields: {
                    notification_type: {
                      n: 1,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    notification_targets: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
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
            let i = new (a().BinaryReader)(r),
              e = new C();
            return C.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(C.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return C.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(C.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              C.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "SteamNotificationPreference";
          }
        }
        class ci extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ci.prototype.preferences || t.Sg(ci.M()),
              c.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ci.sm_m ||
                (ci.sm_m = {
                  proto: ci,
                  fields: { preferences: { n: 1, c: C, r: !0, q: !0 } },
                }),
              ci.sm_m
            );
          }
          static MBF() {
            return ci.sm_mbf || (ci.sm_mbf = t.w0(ci.M())), ci.sm_mbf;
          }
          toObject(r = !1) {
            return ci.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(ci.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(ci.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new ci();
            return ci.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(ci.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ci.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(ci.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ci.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamNotification_SetPreferences_Request";
          }
        }
        class ua extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return ua.toObject(r, this);
          }
          static toObject(r, i) {
            return r ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(r) {
            return new ua();
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new ua();
            return ua.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ua.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ua.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamNotification_SetPreferences_Response";
          }
        }
        class da extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return da.toObject(r, this);
          }
          static toObject(r, i) {
            return r ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(r) {
            return new da();
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new da();
            return da.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return da.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              da.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamNotification_GetPreferences_Request";
          }
        }
        class li extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              li.prototype.preferences || t.Sg(li.M()),
              c.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              li.sm_m ||
                (li.sm_m = {
                  proto: li,
                  fields: { preferences: { n: 1, c: C, r: !0, q: !0 } },
                }),
              li.sm_m
            );
          }
          static MBF() {
            return li.sm_mbf || (li.sm_mbf = t.w0(li.M())), li.sm_mbf;
          }
          toObject(r = !1) {
            return li.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(li.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(li.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new li();
            return li.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(li.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return li.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(li.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              li.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamNotification_GetPreferences_Response";
          }
        }
        class yr extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              yr.prototype.notification_ids || t.Sg(yr.M()),
              c.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              yr.sm_m ||
                (yr.sm_m = {
                  proto: yr,
                  fields: {
                    notification_ids: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: t.qM.readUint64String,
                      pbr: t.qM.readPackedUint64String,
                      bw: t.gp.writeRepeatedUint64String,
                    },
                  },
                }),
              yr.sm_m
            );
          }
          static MBF() {
            return yr.sm_mbf || (yr.sm_mbf = t.w0(yr.M())), yr.sm_mbf;
          }
          toObject(r = !1) {
            return yr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(yr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(yr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new yr();
            return yr.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(yr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return yr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(yr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              yr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamNotification_HideNotification_Notification";
          }
        }
        class mi extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              mi.prototype.notifications || t.Sg(mi.M()),
              c.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              mi.sm_m ||
                (mi.sm_m = {
                  proto: mi,
                  fields: {
                    notifications: { n: 1, c: gr, r: !0, q: !0 },
                    pending_gift_count: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    pending_friend_count: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    pending_family_invite_count: {
                      n: 4,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              mi.sm_m
            );
          }
          static MBF() {
            return mi.sm_mbf || (mi.sm_mbf = t.w0(mi.M())), mi.sm_mbf;
          }
          toObject(r = !1) {
            return mi.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(mi.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(mi.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new mi();
            return mi.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(mi.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return mi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(mi.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              mi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamNotification_NotificationsReceived_Notification";
          }
        }
        class fi extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              fi.prototype.preferences || t.Sg(fi.M()),
              c.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              fi.sm_m ||
                (fi.sm_m = {
                  proto: fi,
                  fields: { preferences: { n: 1, c: C, r: !0, q: !0 } },
                }),
              fi.sm_m
            );
          }
          static MBF() {
            return fi.sm_mbf || (fi.sm_mbf = t.w0(fi.M())), fi.sm_mbf;
          }
          toObject(r = !1) {
            return fi.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(fi.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(fi.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new fi();
            return fi.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(fi.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return fi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(fi.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              fi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamNotification_PreferencesUpdated_Notification";
          }
        }
        var sn;
        ((s) => {
          function r(f, u, B) {
            return f.SendMsg(
              "SteamNotification.GetSteamNotifications#1",
              (0, w.I8)(wr, u, B),
              ni,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          s.GetSteamNotifications = r;
          function i(f, u) {
            return f.SendNotification(
              "SteamNotification.MarkNotificationsRead#1",
              (0, w.I8)(br, u),
              { ePrivilege: 1 },
            );
          }
          s.MarkNotificationsRead = i;
          function e(f, u) {
            return f.SendNotification(
              "SteamNotification.MarkNotificationsViewed#1",
              (0, w.I8)(zr, u),
              { ePrivilege: 1 },
            );
          }
          s.MarkNotificationsViewed = e;
          function n(f, u) {
            return f.SendNotification(
              "SteamNotification.HideNotification#1",
              (0, w.I8)(yr, u),
              { ePrivilege: 1 },
            );
          }
          s.HideNotification = n;
          function l(f, u, B) {
            return f.SendMsg(
              "SteamNotification.SetPreferences#1",
              (0, w.I8)(ci, u, B),
              ua,
              { ePrivilege: 1 },
            );
          }
          s.SetPreferences = l;
          function m(f, u, B) {
            return f.SendMsg(
              "SteamNotification.GetPreferences#1",
              (0, w.I8)(da, u, B),
              li,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          s.GetPreferences = m;
        })(sn || (sn = {}));
        var gl;
        ((s) => {
          (s.NotificationsReceivedHandler = {
            name: "SteamNotificationClient.NotificationsReceived#1",
            request: mi,
          }),
            (s.PreferencesUpdatedHandler = {
              name: "SteamNotificationClient.PreferencesUpdated#1",
              request: fi,
            });
        })(gl || (gl = {}));
        function YB(s) {
          return "unknown EMarketBucketLevel ( " + s + " )";
        }
        function LB(s) {
          return "unknown EAssetPropertyType ( " + s + " )";
        }
        function XB(s) {
          return "unknown ETradeOfferState ( " + s + " )";
        }
        function ZB(s) {
          return "unknown ETradeOfferConfirmationMethod ( " + s + " )";
        }
        class Mr extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Mr.prototype.type || t.Sg(Mr.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Mr.sm_m ||
                (Mr.sm_m = {
                  proto: Mr,
                  fields: {
                    type: { n: 1, br: t.qM.readString, bw: t.gp.writeString },
                    value: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                    color: { n: 3, br: t.qM.readString, bw: t.gp.writeString },
                    label: { n: 4, br: t.qM.readString, bw: t.gp.writeString },
                    name: { n: 5, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              Mr.sm_m
            );
          }
          static MBF() {
            return Mr.sm_mbf || (Mr.sm_mbf = t.w0(Mr.M())), Mr.sm_mbf;
          }
          toObject(r = !1) {
            return Mr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Mr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Mr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Mr();
            return Mr.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Mr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Mr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Mr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Mr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEconItem_DescriptionLine";
          }
        }
        class _ extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              _.prototype.link || t.Sg(_.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    link: { n: 1, br: t.qM.readString, bw: t.gp.writeString },
                    name: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
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
            let i = new (a().BinaryReader)(r),
              e = new _();
            return _.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(_.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return _.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(_.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEconItem_Action";
          }
        }
        class hr extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              hr.prototype.appid || t.Sg(hr.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              hr.sm_m ||
                (hr.sm_m = {
                  proto: hr,
                  fields: {
                    appid: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    category: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    internal_name: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    localized_category_name: {
                      n: 4,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    localized_tag_name: {
                      n: 5,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    color: { n: 6, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              hr.sm_m
            );
          }
          static MBF() {
            return hr.sm_mbf || (hr.sm_mbf = t.w0(hr.M())), hr.sm_mbf;
          }
          toObject(r = !1) {
            return hr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(hr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(hr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new hr();
            return hr.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(hr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return hr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(hr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              hr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEconItem_Tag";
          }
        }
        class ui extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ui.prototype.contained_items || t.Sg(ui.M()),
              c.Message.initialize(this, r, 0, -1, [1, 2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ui.sm_m ||
                (ui.sm_m = {
                  proto: ui,
                  fields: {
                    contained_items: { n: 1, c: Tr, r: !0, q: !0 },
                    search_tags: { n: 2, c: hr, r: !0, q: !0 },
                  },
                }),
              ui.sm_m
            );
          }
          static MBF() {
            return ui.sm_mbf || (ui.sm_mbf = t.w0(ui.M())), ui.sm_mbf;
          }
          toObject(r = !1) {
            return ui.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(ui.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(ui.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new ui();
            return ui.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(ui.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ui.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(ui.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ui.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEconItem_ContainerProperties";
          }
        }
        class Tr extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Tr.prototype.classid || t.Sg(Tr.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Tr.sm_m ||
                (Tr.sm_m = {
                  proto: Tr,
                  fields: {
                    classid: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    instanceid: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              Tr.sm_m
            );
          }
          static MBF() {
            return Tr.sm_mbf || (Tr.sm_mbf = t.w0(Tr.M())), Tr.sm_mbf;
          }
          toObject(r = !1) {
            return Tr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Tr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Tr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Tr();
            return Tr.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Tr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Tr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Tr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Tr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEconItem_ClassIdentifiers";
          }
        }
        class rr extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              rr.prototype.appid || t.Sg(rr.M()),
              c.Message.initialize(
                this,
                r,
                0,
                -1,
                [8, 10, 11, 12, 13, 21, 26],
                null,
              );
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              rr.sm_m ||
                (rr.sm_m = {
                  proto: rr,
                  fields: {
                    appid: { n: 1, br: t.qM.readInt32, bw: t.gp.writeInt32 },
                    classid: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    instanceid: {
                      n: 3,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    currency: { n: 4, br: t.qM.readBool, bw: t.gp.writeBool },
                    background_color: {
                      n: 5,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    icon_url: {
                      n: 6,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    icon_url_large: {
                      n: 7,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    descriptions: { n: 8, c: Mr, r: !0, q: !0 },
                    tradable: { n: 9, br: t.qM.readBool, bw: t.gp.writeBool },
                    actions: { n: 10, c: _, r: !0, q: !0 },
                    owner_descriptions: { n: 11, c: Mr, r: !0, q: !0 },
                    owner_actions: { n: 12, c: _, r: !0, q: !0 },
                    fraudwarnings: {
                      n: 13,
                      r: !0,
                      q: !0,
                      br: t.qM.readString,
                      bw: t.gp.writeRepeatedString,
                    },
                    name: { n: 14, br: t.qM.readString, bw: t.gp.writeString },
                    name_color: {
                      n: 15,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    type: { n: 16, br: t.qM.readString, bw: t.gp.writeString },
                    market_name: {
                      n: 17,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    market_hash_name: {
                      n: 18,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    market_fee: {
                      n: 19,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    market_fee_app: {
                      n: 28,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    contained_item: { n: 20, c: rr },
                    market_actions: { n: 21, c: _, r: !0, q: !0 },
                    commodity: { n: 22, br: t.qM.readBool, bw: t.gp.writeBool },
                    market_tradable_restriction: {
                      n: 23,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    market_marketable_restriction: {
                      n: 24,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    marketable: {
                      n: 25,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    tags: { n: 26, c: hr, r: !0, q: !0 },
                    item_expiration: {
                      n: 27,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    market_buy_country_restriction: {
                      n: 30,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    market_sell_country_restriction: {
                      n: 31,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    sealed: { n: 32, br: t.qM.readBool, bw: t.gp.writeBool },
                    container_properties: { n: 33, c: ui },
                    market_bucket_group_name: {
                      n: 34,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    market_bucket_group_id: {
                      n: 35,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    sealed_type: {
                      n: 37,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    market_name_inside_group: {
                      n: 38,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    market_bucket_id: {
                      n: 39,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
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
            let i = new (a().BinaryReader)(r),
              e = new rr();
            return rr.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(rr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return rr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(rr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              rr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEconItem_Description";
          }
        }
        class ir extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ir.prototype.propertyid || t.Sg(ir.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ir.sm_m ||
                (ir.sm_m = {
                  proto: ir,
                  fields: {
                    propertyid: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    int_value: {
                      n: 2,
                      br: t.qM.readInt64String,
                      bw: t.gp.writeInt64String,
                    },
                    float_value: {
                      n: 3,
                      br: t.qM.readFloat,
                      bw: t.gp.writeFloat,
                    },
                    string_value: {
                      n: 4,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
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
            let i = new (a().BinaryReader)(r),
              e = new ir();
            return ir.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(ir.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ir.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(ir.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ir.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEconItem_AssetProperty";
          }
        }
        class or extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              or.prototype.classid || t.Sg(or.M()),
              c.Message.initialize(this, r, 0, -1, [3, 4, 5], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              or.sm_m ||
                (or.sm_m = {
                  proto: or,
                  fields: {
                    classid: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    instanceid: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    standalone_properties: { n: 3, c: ir, r: !0, q: !0 },
                    parent_relationship_properties: {
                      n: 4,
                      c: ir,
                      r: !0,
                      q: !0,
                    },
                    nested_accessories: { n: 5, c: or, r: !0, q: !0 },
                  },
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
            let i = new (a().BinaryReader)(r),
              e = new or();
            return or.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(or.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return or.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(or.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              or.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEconItem_AssetAccessory";
          }
        }
        class di extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              di.prototype.appid || t.Sg(di.M()),
              c.Message.initialize(this, r, 0, -1, [4, 5], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              di.sm_m ||
                (di.sm_m = {
                  proto: di,
                  fields: {
                    appid: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    contextid: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    assetid: {
                      n: 3,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    asset_properties: { n: 4, c: ir, r: !0, q: !0 },
                    asset_accessories: { n: 5, c: or, r: !0, q: !0 },
                  },
                }),
              di.sm_m
            );
          }
          static MBF() {
            return di.sm_mbf || (di.sm_mbf = t.w0(di.M())), di.sm_mbf;
          }
          toObject(r = !1) {
            return di.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(di.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(di.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new di();
            return di.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(di.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return di.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(di.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              di.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEconItem_AssetProperties";
          }
        }
        class Bi extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Bi.prototype.id || t.Sg(Bi.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Bi.sm_m ||
                (Bi.sm_m = {
                  proto: Bi,
                  fields: {
                    id: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    name: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                    type: { n: 3, br: t.qM.readEnum, bw: t.gp.writeEnum },
                    float_min: {
                      n: 4,
                      br: t.qM.readFloat,
                      bw: t.gp.writeFloat,
                    },
                    float_max: {
                      n: 5,
                      br: t.qM.readFloat,
                      bw: t.gp.writeFloat,
                    },
                    int_min: {
                      n: 6,
                      br: t.qM.readInt64String,
                      bw: t.gp.writeInt64String,
                    },
                    int_max: {
                      n: 7,
                      br: t.qM.readInt64String,
                      bw: t.gp.writeInt64String,
                    },
                    localized_label: {
                      n: 8,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    hide_from_description: {
                      n: 9,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              Bi.sm_m
            );
          }
          static MBF() {
            return Bi.sm_mbf || (Bi.sm_mbf = t.w0(Bi.M())), Bi.sm_mbf;
          }
          toObject(r = !1) {
            return Bi.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Bi.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Bi.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Bi();
            return Bi.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Bi.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Bi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Bi.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Bi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEconItem_AssetPropertySchema";
          }
        }
        class gi extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              gi.prototype.appid || t.Sg(gi.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              gi.sm_m ||
                (gi.sm_m = {
                  proto: gi,
                  fields: {
                    appid: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    language: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              gi.sm_m
            );
          }
          static MBF() {
            return gi.sm_mbf || (gi.sm_mbf = t.w0(gi.M())), gi.sm_mbf;
          }
          toObject(r = !1) {
            return gi.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(gi.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(gi.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new gi();
            return gi.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(gi.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return gi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(gi.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              gi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetAssetPropertySchema_Request";
          }
        }
        class wi extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              wi.prototype.property_schemas || t.Sg(wi.M()),
              c.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              wi.sm_m ||
                (wi.sm_m = {
                  proto: wi,
                  fields: { property_schemas: { n: 1, c: Bi, r: !0, q: !0 } },
                }),
              wi.sm_m
            );
          }
          static MBF() {
            return wi.sm_mbf || (wi.sm_mbf = t.w0(wi.M())), wi.sm_mbf;
          }
          toObject(r = !1) {
            return wi.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(wi.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(wi.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new wi();
            return wi.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(wi.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return wi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(wi.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              wi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetAssetPropertySchema_Response";
          }
        }
        class Wr extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Wr.prototype.appid || t.Sg(Wr.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Wr.sm_m ||
                (Wr.sm_m = {
                  proto: Wr,
                  fields: {
                    appid: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    contextid: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    assetid: {
                      n: 3,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    classid: {
                      n: 4,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    instanceid: {
                      n: 5,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    currencyid: {
                      n: 6,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    amount: {
                      n: 7,
                      br: t.qM.readInt64String,
                      bw: t.gp.writeInt64String,
                    },
                    missing: { n: 8, br: t.qM.readBool, bw: t.gp.writeBool },
                    est_usd: {
                      n: 9,
                      br: t.qM.readInt64String,
                      bw: t.gp.writeInt64String,
                    },
                  },
                }),
              Wr.sm_m
            );
          }
          static MBF() {
            return Wr.sm_mbf || (Wr.sm_mbf = t.w0(Wr.M())), Wr.sm_mbf;
          }
          toObject(r = !1) {
            return Wr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Wr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Wr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Wr();
            return Wr.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Wr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Wr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Wr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Wr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_Asset";
          }
        }
        class jr extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              jr.prototype.steamid || t.Sg(jr.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              jr.sm_m ||
                (jr.sm_m = {
                  proto: jr,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    appid: { n: 2, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    contextid: {
                      n: 3,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    get_descriptions: {
                      n: 4,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    get_asset_properties: {
                      n: 11,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    for_trade_offer_verification: {
                      n: 10,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    language: {
                      n: 5,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    filters: { n: 6, c: Or },
                    start_assetid: {
                      n: 8,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    count: { n: 9, br: t.qM.readInt32, bw: t.gp.writeInt32 },
                  },
                }),
              jr.sm_m
            );
          }
          static MBF() {
            return jr.sm_mbf || (jr.sm_mbf = t.w0(jr.M())), jr.sm_mbf;
          }
          toObject(r = !1) {
            return jr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(jr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(jr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new jr();
            return jr.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(jr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return jr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(jr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              jr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetInventoryItemsWithDescriptions_Request";
          }
        }
        class Or extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Or.prototype.assetids || t.Sg(Or.M()),
              c.Message.initialize(this, r, 0, -1, [1, 2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Or.sm_m ||
                (Or.sm_m = {
                  proto: Or,
                  fields: {
                    assetids: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: t.qM.readUint64String,
                      pbr: t.qM.readPackedUint64String,
                      bw: t.gp.writeRepeatedUint64String,
                    },
                    currencyids: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: t.qM.readUint32,
                      pbr: t.qM.readPackedUint32,
                      bw: t.gp.writeRepeatedUint32,
                    },
                    tradable_only: {
                      n: 3,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    marketable_only: {
                      n: 4,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              Or.sm_m
            );
          }
          static MBF() {
            return Or.sm_mbf || (Or.sm_mbf = t.w0(Or.M())), Or.sm_mbf;
          }
          toObject(r = !1) {
            return Or.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Or.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Or.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Or();
            return Or.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Or.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Or.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Or.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Or.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetInventoryItemsWithDescriptions_Request_FilterOptions";
          }
        }
        class bi extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              bi.prototype.assets || t.Sg(bi.M()),
              c.Message.initialize(this, r, 0, -1, [1, 2, 3, 7], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              bi.sm_m ||
                (bi.sm_m = {
                  proto: bi,
                  fields: {
                    assets: { n: 1, c: Wr, r: !0, q: !0 },
                    descriptions: { n: 2, c: rr, r: !0, q: !0 },
                    missing_assets: { n: 3, c: Wr, r: !0, q: !0 },
                    asset_properties: { n: 7, c: di, r: !0, q: !0 },
                    more_items: { n: 4, br: t.qM.readBool, bw: t.gp.writeBool },
                    last_assetid: {
                      n: 5,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    total_inventory_count: {
                      n: 6,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              bi.sm_m
            );
          }
          static MBF() {
            return bi.sm_mbf || (bi.sm_mbf = t.w0(bi.M())), bi.sm_mbf;
          }
          toObject(r = !1) {
            return bi.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(bi.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(bi.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new bi();
            return bi.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(bi.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return bi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(bi.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              bi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetInventoryItemsWithDescriptions_Response";
          }
        }
        class zi extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              zi.prototype.generate_new_token || t.Sg(zi.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              zi.sm_m ||
                (zi.sm_m = {
                  proto: zi,
                  fields: {
                    generate_new_token: {
                      n: 1,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              zi.sm_m
            );
          }
          static MBF() {
            return zi.sm_mbf || (zi.sm_mbf = t.w0(zi.M())), zi.sm_mbf;
          }
          toObject(r = !1) {
            return zi.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(zi.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(zi.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new zi();
            return zi.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(zi.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return zi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(zi.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              zi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetTradeOfferAccessToken_Request";
          }
        }
        class yi extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              yi.prototype.trade_offer_access_token || t.Sg(yi.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              yi.sm_m ||
                (yi.sm_m = {
                  proto: yi,
                  fields: {
                    trade_offer_access_token: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              yi.sm_m
            );
          }
          static MBF() {
            return yi.sm_mbf || (yi.sm_mbf = t.w0(yi.M())), yi.sm_mbf;
          }
          toObject(r = !1) {
            return yi.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(yi.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(yi.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new yi();
            return yi.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(yi.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return yi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(yi.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              yi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetTradeOfferAccessToken_Response";
          }
        }
        class Mi extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Mi.prototype.return_url || t.Sg(Mi.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Mi.sm_m ||
                (Mi.sm_m = {
                  proto: Mi,
                  fields: {
                    return_url: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              Mi.sm_m
            );
          }
          static MBF() {
            return Mi.sm_mbf || (Mi.sm_mbf = t.w0(Mi.M())), Mi.sm_mbf;
          }
          toObject(r = !1) {
            return Mi.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Mi.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Mi.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Mi();
            return Mi.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Mi.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Mi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Mi.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Mi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_ClientGetItemShopOverlayAuthURL_Request";
          }
        }
        class hi extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              hi.prototype.url || t.Sg(hi.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              hi.sm_m ||
                (hi.sm_m = {
                  proto: hi,
                  fields: {
                    url: { n: 1, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              hi.sm_m
            );
          }
          static MBF() {
            return hi.sm_mbf || (hi.sm_mbf = t.w0(hi.M())), hi.sm_mbf;
          }
          toObject(r = !1) {
            return hi.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(hi.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(hi.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new hi();
            return hi.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(hi.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return hi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(hi.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              hi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_ClientGetItemShopOverlayAuthURL_Response";
          }
        }
        class Ti extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ti.prototype.language || t.Sg(Ti.M()),
              c.Message.initialize(this, r, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ti.sm_m ||
                (Ti.sm_m = {
                  proto: Ti,
                  fields: {
                    language: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    appid: { n: 2, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    classes: { n: 3, c: Tr, r: !0, q: !0 },
                    high_pri: { n: 4, br: t.qM.readBool, bw: t.gp.writeBool },
                  },
                }),
              Ti.sm_m
            );
          }
          static MBF() {
            return Ti.sm_mbf || (Ti.sm_mbf = t.w0(Ti.M())), Ti.sm_mbf;
          }
          toObject(r = !1) {
            return Ti.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Ti.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Ti.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Ti();
            return Ti.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Ti.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Ti.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Ti.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Ti.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetAssetClassInfo_Request";
          }
        }
        class oi extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              oi.prototype.descriptions || t.Sg(oi.M()),
              c.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              oi.sm_m ||
                (oi.sm_m = {
                  proto: oi,
                  fields: { descriptions: { n: 1, c: rr, r: !0, q: !0 } },
                }),
              oi.sm_m
            );
          }
          static MBF() {
            return oi.sm_mbf || (oi.sm_mbf = t.w0(oi.M())), oi.sm_mbf;
          }
          toObject(r = !1) {
            return oi.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(oi.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(oi.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new oi();
            return oi.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(oi.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return oi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(oi.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              oi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetAssetClassInfo_Response";
          }
        }
        var wc;
        ((s) => {
          function r(m, f, u) {
            return m.SendMsg(
              "Econ.GetInventoryItemsWithDescriptions#1",
              (0, w.I8)(jr, f, u),
              bi,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 2 },
            );
          }
          s.GetInventoryItemsWithDescriptions = r;
          function i(m, f, u) {
            return m.SendMsg(
              "Econ.GetTradeOfferAccessToken#1",
              (0, w.I8)(zi, f, u),
              yi,
              { ePrivilege: 1 },
            );
          }
          s.GetTradeOfferAccessToken = i;
          function e(m, f, u) {
            return m.SendMsg(
              "Econ.ClientGetItemShopOverlayAuthURL#1",
              (0, w.I8)(Mi, f, u),
              hi,
              { ePrivilege: 1 },
            );
          }
          s.ClientGetItemShopOverlayAuthURL = e;
          function n(m, f, u) {
            return m.SendMsg(
              "Econ.GetAssetClassInfo#1",
              (0, w.I8)(Ti, f, u),
              oi,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }
          s.GetAssetClassInfo = n;
          function l(m, f, u) {
            return m.SendMsg(
              "Econ.GetAssetPropertySchema#1",
              (0, w.I8)(gi, f, u),
              wi,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          s.GetAssetPropertySchema = l;
        })(wc || (wc = {}));
        var M = W(4947),
          yn = W(3852);
        const JB = 0,
          AB = 1,
          DB = 2,
          qB = 3,
          pB = 4,
          Zm = 5,
          PB = 6,
          Jm = 7,
          RB = 8,
          GB = 9,
          bc = 10,
          CB = 11,
          _B = 12,
          rg = 13,
          ig = 14,
          tg = 15,
          eg = 16,
          sg = 17,
          ag = 18,
          ng = 19,
          cg = 20,
          lg = 21,
          mg = null,
          fg = 0,
          wl = 1,
          bl = 2;
        var Ln = W(6174),
          zc = W(7589),
          F = W(404);
        const ug = 0,
          Am = 1,
          Dm = 2,
          qm = 4,
          dg = 8,
          Bg = 16,
          gg = 32,
          wg = 64,
          bg = 128,
          zg = 256,
          yg = 512,
          Mg = 1024,
          hg = 2048,
          Tg = 4096,
          og = 8192,
          Wg = 16384,
          jg = 32768,
          Og = 65536,
          pm = 1073741824,
          vg = null,
          Ug = 0,
          zl = 1,
          xg = 2,
          Ig = 3,
          Sg = 4,
          Hg = 5,
          Pm = 0,
          Ng = 1,
          kg = 2,
          Eg = 3,
          Fg = 4,
          $g = 6,
          Qg = 7,
          Kg = 8,
          Vg = 9,
          Yg = 10,
          Lg = 11,
          Xg = 12,
          Zg = 13,
          Jg = 15,
          Ag = 16,
          Dg = 17,
          qg = 18,
          pg = 19,
          Pg = 20,
          Rg = 21,
          Gg = 22,
          Cg = 23,
          _g = 24,
          rw = 25,
          iw = 26,
          tw = 27,
          ew = 28,
          sw = 29,
          aw = 30;
        function nw(s) {
          return "unknown EFamilyGroupRole ( " + s + " )";
        }
        function cw(s) {
          return "unknown EFamilyGroupMembershipRemovalReason ( " + s + " )";
        }
        function lw(s) {
          return "unknown EFamilyGroupsTwoFactorMethod ( " + s + " )";
        }
        function mw(s) {
          return "unknown EPurchaseRequestAction ( " + s + " )";
        }
        function fw(s) {
          return "unknown EFamilyGroupChangeLogType ( " + s + " )";
        }
        function uw(s) {
          return "unknown ESharedLibraryExcludeReason ( " + s + " )";
        }
        class Wi extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Wi.prototype.name || t.Sg(Wi.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Wi.sm_m ||
                (Wi.sm_m = {
                  proto: Wi,
                  fields: {
                    name: { n: 1, br: t.qM.readString, bw: t.gp.writeString },
                    steamid: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              Wi.sm_m
            );
          }
          static MBF() {
            return Wi.sm_mbf || (Wi.sm_mbf = t.w0(Wi.M())), Wi.sm_mbf;
          }
          toObject(r = !1) {
            return Wi.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Wi.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Wi.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Wi();
            return Wi.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Wi.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Wi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Wi.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Wi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_CreateFamilyGroup_Request";
          }
        }
        class ji extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ji.prototype.family_groupid || t.Sg(ji.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ji.sm_m ||
                (ji.sm_m = {
                  proto: ji,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    cooldown_skip_granted: {
                      n: 2,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              ji.sm_m
            );
          }
          static MBF() {
            return ji.sm_mbf || (ji.sm_mbf = t.w0(ji.M())), ji.sm_mbf;
          }
          toObject(r = !1) {
            return ji.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(ji.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(ji.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new ji();
            return ji.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(ji.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ji.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(ji.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ji.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_CreateFamilyGroup_Response";
          }
        }
        class Oi extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Oi.prototype.family_groupid || t.Sg(Oi.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Oi.sm_m ||
                (Oi.sm_m = {
                  proto: Oi,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    send_running_apps: {
                      n: 2,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              Oi.sm_m
            );
          }
          static MBF() {
            return Oi.sm_mbf || (Oi.sm_mbf = t.w0(Oi.M())), Oi.sm_mbf;
          }
          toObject(r = !1) {
            return Oi.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Oi.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Oi.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Oi();
            return Oi.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Oi.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Oi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Oi.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Oi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetFamilyGroup_Request";
          }
        }
        class vi extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              vi.prototype.steamid || t.Sg(vi.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              vi.sm_m ||
                (vi.sm_m = {
                  proto: vi,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    role: { n: 2, br: t.qM.readEnum, bw: t.gp.writeEnum },
                    time_joined: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    cooldown_seconds_remaining: {
                      n: 4,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              vi.sm_m
            );
          }
          static MBF() {
            return vi.sm_mbf || (vi.sm_mbf = t.w0(vi.M())), vi.sm_mbf;
          }
          toObject(r = !1) {
            return vi.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(vi.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(vi.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new vi();
            return vi.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(vi.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return vi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(vi.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              vi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "FamilyGroupMember";
          }
        }
        class Ui extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ui.prototype.steamid || t.Sg(Ui.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ui.sm_m ||
                (Ui.sm_m = {
                  proto: Ui,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    role: { n: 2, br: t.qM.readEnum, bw: t.gp.writeEnum },
                  },
                }),
              Ui.sm_m
            );
          }
          static MBF() {
            return Ui.sm_mbf || (Ui.sm_mbf = t.w0(Ui.M())), Ui.sm_mbf;
          }
          toObject(r = !1) {
            return Ui.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Ui.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Ui.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Ui();
            return Ui.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Ui.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Ui.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Ui.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Ui.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "FamilyGroupPendingInvite";
          }
        }
        class xi extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              xi.prototype.steamid || t.Sg(xi.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              xi.sm_m ||
                (xi.sm_m = {
                  proto: xi,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              xi.sm_m
            );
          }
          static MBF() {
            return xi.sm_mbf || (xi.sm_mbf = t.w0(xi.M())), xi.sm_mbf;
          }
          toObject(r = !1) {
            return xi.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(xi.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(xi.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new xi();
            return xi.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(xi.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return xi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(xi.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              xi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "FamilyGroupFormerMember";
          }
        }
        class vr extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              vr.prototype.name || t.Sg(vr.M()),
              c.Message.initialize(this, r, 0, -1, [2, 3, 7], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              vr.sm_m ||
                (vr.sm_m = {
                  proto: vr,
                  fields: {
                    name: { n: 1, br: t.qM.readString, bw: t.gp.writeString },
                    members: { n: 2, c: vi, r: !0, q: !0 },
                    pending_invites: { n: 3, c: Ui, r: !0, q: !0 },
                    free_spots: {
                      n: 4,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    country: {
                      n: 5,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    slot_cooldown_remaining_seconds: {
                      n: 6,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    former_members: { n: 7, c: xi, r: !0, q: !0 },
                    slot_cooldown_overrides: {
                      n: 8,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              vr.sm_m
            );
          }
          static MBF() {
            return vr.sm_mbf || (vr.sm_mbf = t.w0(vr.M())), vr.sm_mbf;
          }
          toObject(r = !1) {
            return vr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(vr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(vr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new vr();
            return vr.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(vr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return vr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(vr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              vr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetFamilyGroup_Response";
          }
        }
        class Ii extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ii.prototype.family_groupid || t.Sg(Ii.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ii.sm_m ||
                (Ii.sm_m = {
                  proto: Ii,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    role: { n: 2, br: t.qM.readEnum, bw: t.gp.writeEnum },
                    inviter_steamid: {
                      n: 3,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    awaiting_2fa: {
                      n: 4,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    invite_id: {
                      n: 5,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              Ii.sm_m
            );
          }
          static MBF() {
            return Ii.sm_mbf || (Ii.sm_mbf = t.w0(Ii.M())), Ii.sm_mbf;
          }
          toObject(r = !1) {
            return Ii.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Ii.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Ii.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Ii();
            return Ii.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Ii.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Ii.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Ii.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Ii.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "FamilyGroupPendingInviteForUser";
          }
        }
        class Si extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Si.prototype.steamid || t.Sg(Si.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Si.sm_m ||
                (Si.sm_m = {
                  proto: Si,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    include_family_group_response: {
                      n: 2,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              Si.sm_m
            );
          }
          static MBF() {
            return Si.sm_mbf || (Si.sm_mbf = t.w0(Si.M())), Si.sm_mbf;
          }
          toObject(r = !1) {
            return Si.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Si.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Si.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Si();
            return Si.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Si.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Si.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Si.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Si.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetFamilyGroupForUser_Request";
          }
        }
        class Hi extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Hi.prototype.family_groupid || t.Sg(Hi.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Hi.sm_m ||
                (Hi.sm_m = {
                  proto: Hi,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    rtime_joined: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    rtime_left: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    role: { n: 4, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    participated: {
                      n: 5,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              Hi.sm_m
            );
          }
          static MBF() {
            return Hi.sm_mbf || (Hi.sm_mbf = t.w0(Hi.M())), Hi.sm_mbf;
          }
          toObject(r = !1) {
            return Hi.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Hi.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Hi.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Hi();
            return Hi.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Hi.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Hi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Hi.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Hi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "FamilyGroupMembership";
          }
        }
        class Ni extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ni.prototype.family_groupid || t.Sg(Ni.M()),
              c.Message.initialize(this, r, 0, -1, [5, 10], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ni.sm_m ||
                (Ni.sm_m = {
                  proto: Ni,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    is_not_member_of_any_group: {
                      n: 2,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    latest_time_joined: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    latest_joined_family_groupid: {
                      n: 4,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    pending_group_invites: { n: 5, c: Ii, r: !0, q: !0 },
                    role: { n: 6, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    cooldown_seconds_remaining: {
                      n: 7,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    family_group: { n: 8, c: vr },
                    can_undelete_last_joined_family: {
                      n: 9,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    membership_history: { n: 10, c: Hi, r: !0, q: !0 },
                  },
                }),
              Ni.sm_m
            );
          }
          static MBF() {
            return Ni.sm_mbf || (Ni.sm_mbf = t.w0(Ni.M())), Ni.sm_mbf;
          }
          toObject(r = !1) {
            return Ni.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Ni.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Ni.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Ni();
            return Ni.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Ni.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Ni.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Ni.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Ni.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetFamilyGroupForUser_Response";
          }
        }
        class ki extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ki.prototype.family_groupid || t.Sg(ki.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ki.sm_m ||
                (ki.sm_m = {
                  proto: ki,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    name: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              ki.sm_m
            );
          }
          static MBF() {
            return ki.sm_mbf || (ki.sm_mbf = t.w0(ki.M())), ki.sm_mbf;
          }
          toObject(r = !1) {
            return ki.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(ki.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(ki.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new ki();
            return ki.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(ki.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ki.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(ki.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ki.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_ModifyFamilyGroupDetails_Request";
          }
        }
        class Ba extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Ba.toObject(r, this);
          }
          static toObject(r, i) {
            return r ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(r) {
            return new Ba();
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Ba();
            return Ba.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Ba.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Ba.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_ModifyFamilyGroupDetails_Response";
          }
        }
        class Ei extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ei.prototype.family_groupid || t.Sg(Ei.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ei.sm_m ||
                (Ei.sm_m = {
                  proto: Ei,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    receiver_steamid: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    receiver_role: {
                      n: 3,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                  },
                }),
              Ei.sm_m
            );
          }
          static MBF() {
            return Ei.sm_mbf || (Ei.sm_mbf = t.w0(Ei.M())), Ei.sm_mbf;
          }
          toObject(r = !1) {
            return Ei.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Ei.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Ei.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Ei();
            return Ei.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Ei.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Ei.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Ei.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Ei.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_InviteToFamilyGroup_Request";
          }
        }
        class Fi extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Fi.prototype.invite_id || t.Sg(Fi.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Fi.sm_m ||
                (Fi.sm_m = {
                  proto: Fi,
                  fields: {
                    invite_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    two_factor_method: {
                      n: 2,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                  },
                }),
              Fi.sm_m
            );
          }
          static MBF() {
            return Fi.sm_mbf || (Fi.sm_mbf = t.w0(Fi.M())), Fi.sm_mbf;
          }
          toObject(r = !1) {
            return Fi.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Fi.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Fi.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Fi();
            return Fi.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Fi.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Fi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Fi.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Fi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_InviteToFamilyGroup_Response";
          }
        }
        class $i extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              $i.prototype.family_groupid || t.Sg($i.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $i.sm_m ||
                ($i.sm_m = {
                  proto: $i,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    nonce: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              $i.sm_m
            );
          }
          static MBF() {
            return $i.sm_mbf || ($i.sm_mbf = t.w0($i.M())), $i.sm_mbf;
          }
          toObject(r = !1) {
            return $i.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT($i.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq($i.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new $i();
            return $i.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj($i.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return $i.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0($i.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              $i.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_JoinFamilyGroup_Request";
          }
        }
        class Qi extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Qi.prototype.two_factor_method || t.Sg(Qi.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Qi.sm_m ||
                (Qi.sm_m = {
                  proto: Qi,
                  fields: {
                    two_factor_method: {
                      n: 2,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    cooldown_skip_granted: {
                      n: 3,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    invite_already_accepted: {
                      n: 4,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    cooldown_seconds_remaining: {
                      n: 5,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              Qi.sm_m
            );
          }
          static MBF() {
            return Qi.sm_mbf || (Qi.sm_mbf = t.w0(Qi.M())), Qi.sm_mbf;
          }
          toObject(r = !1) {
            return Qi.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Qi.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Qi.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Qi();
            return Qi.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Qi.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Qi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Qi.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Qi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_JoinFamilyGroup_Response";
          }
        }
        class Ki extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ki.prototype.family_groupid || t.Sg(Ki.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ki.sm_m ||
                (Ki.sm_m = {
                  proto: Ki,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    steamid_to_remove: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              Ki.sm_m
            );
          }
          static MBF() {
            return Ki.sm_mbf || (Ki.sm_mbf = t.w0(Ki.M())), Ki.sm_mbf;
          }
          toObject(r = !1) {
            return Ki.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Ki.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Ki.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Ki();
            return Ki.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Ki.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Ki.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Ki.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Ki.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_RemoveFromFamilyGroup_Request";
          }
        }
        class ga extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return ga.toObject(r, this);
          }
          static toObject(r, i) {
            return r ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(r) {
            return new ga();
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new ga();
            return ga.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ga.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ga.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_RemoveFromFamilyGroup_Response";
          }
        }
        class Vi extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Vi.prototype.family_groupid || t.Sg(Vi.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Vi.sm_m ||
                (Vi.sm_m = {
                  proto: Vi,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    steamid_to_cancel: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              Vi.sm_m
            );
          }
          static MBF() {
            return Vi.sm_mbf || (Vi.sm_mbf = t.w0(Vi.M())), Vi.sm_mbf;
          }
          toObject(r = !1) {
            return Vi.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Vi.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Vi.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Vi();
            return Vi.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Vi.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Vi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Vi.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Vi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_CancelFamilyGroupInvite_Request";
          }
        }
        class wa extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return wa.toObject(r, this);
          }
          static toObject(r, i) {
            return r ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(r) {
            return new wa();
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new wa();
            return wa.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return wa.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              wa.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_CancelFamilyGroupInvite_Response";
          }
        }
        class Yi extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Yi.prototype.family_groupid || t.Sg(Yi.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Yi.sm_m ||
                (Yi.sm_m = {
                  proto: Yi,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              Yi.sm_m
            );
          }
          static MBF() {
            return Yi.sm_mbf || (Yi.sm_mbf = t.w0(Yi.M())), Yi.sm_mbf;
          }
          toObject(r = !1) {
            return Yi.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Yi.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Yi.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Yi();
            return Yi.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Yi.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Yi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Yi.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Yi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_DeleteFamilyGroup_Request";
          }
        }
        class ba extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return ba.toObject(r, this);
          }
          static toObject(r, i) {
            return r ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(r) {
            return new ba();
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new ba();
            return ba.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ba.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ba.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_DeleteFamilyGroup_Response";
          }
        }
        class Li extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Li.prototype.family_groupid || t.Sg(Li.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Li.sm_m ||
                (Li.sm_m = {
                  proto: Li,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    client_instance_id: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              Li.sm_m
            );
          }
          static MBF() {
            return Li.sm_mbf || (Li.sm_mbf = t.w0(Li.M())), Li.sm_mbf;
          }
          toObject(r = !1) {
            return Li.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Li.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Li.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Li();
            return Li.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Li.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Li.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Li.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Li.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetUsersSharingDevice_Request";
          }
        }
        class Xi extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Xi.prototype.users || t.Sg(Xi.M()),
              c.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Xi.sm_m ||
                (Xi.sm_m = {
                  proto: Xi,
                  fields: {
                    users: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: t.qM.readFixed64String,
                      pbr: t.qM.readPackedFixed64String,
                      bw: t.gp.writeRepeatedFixed64String,
                    },
                  },
                }),
              Xi.sm_m
            );
          }
          static MBF() {
            return Xi.sm_mbf || (Xi.sm_mbf = t.w0(Xi.M())), Xi.sm_mbf;
          }
          toObject(r = !1) {
            return Xi.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Xi.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Xi.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Xi();
            return Xi.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Xi.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Xi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Xi.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Xi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetUsersSharingDevice_Response";
          }
        }
        class Zi extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Zi.prototype.family_groupid || t.Sg(Zi.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Zi.sm_m ||
                (Zi.sm_m = {
                  proto: Zi,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    gidshoppingcart: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    store_country_code: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    use_account_cart: {
                      n: 4,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              Zi.sm_m
            );
          }
          static MBF() {
            return Zi.sm_mbf || (Zi.sm_mbf = t.w0(Zi.M())), Zi.sm_mbf;
          }
          toObject(r = !1) {
            return Zi.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Zi.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Zi.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Zi();
            return Zi.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Zi.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Zi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Zi.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Zi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_RequestPurchase_Request";
          }
        }
        class Ji extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ji.prototype.gidshoppingcart || t.Sg(Ji.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ji.sm_m ||
                (Ji.sm_m = {
                  proto: Ji,
                  fields: {
                    gidshoppingcart: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    request_id: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              Ji.sm_m
            );
          }
          static MBF() {
            return Ji.sm_mbf || (Ji.sm_mbf = t.w0(Ji.M())), Ji.sm_mbf;
          }
          toObject(r = !1) {
            return Ji.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Ji.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Ji.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Ji();
            return Ji.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Ji.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Ji.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Ji.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Ji.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_RequestPurchase_Response";
          }
        }
        class Ai extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ai.prototype.family_groupid || t.Sg(Ai.M()),
              c.Message.initialize(this, r, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ai.sm_m ||
                (Ai.sm_m = {
                  proto: Ai,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    request_ids: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: t.qM.readUint64String,
                      pbr: t.qM.readPackedUint64String,
                      bw: t.gp.writeRepeatedUint64String,
                    },
                    rt_include_completed_since: {
                      n: 4,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              Ai.sm_m
            );
          }
          static MBF() {
            return Ai.sm_mbf || (Ai.sm_mbf = t.w0(Ai.M())), Ai.sm_mbf;
          }
          toObject(r = !1) {
            return Ai.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Ai.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Ai.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Ai();
            return Ai.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Ai.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Ai.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Ai.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Ai.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetPurchaseRequests_Request";
          }
        }
        class Di extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Di.prototype.requester_steamid || t.Sg(Di.M()),
              c.Message.initialize(this, r, 0, -1, [9, 10, 11, 12], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Di.sm_m ||
                (Di.sm_m = {
                  proto: Di,
                  fields: {
                    requester_steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    gidshoppingcart: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    time_requested: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    time_responded: {
                      n: 4,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    responder_steamid: {
                      n: 5,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    response_action: {
                      n: 6,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    is_completed: {
                      n: 7,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    request_id: {
                      n: 8,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    requested_packageids: {
                      n: 9,
                      r: !0,
                      q: !0,
                      br: t.qM.readUint32,
                      pbr: t.qM.readPackedUint32,
                      bw: t.gp.writeRepeatedUint32,
                    },
                    purchased_packageids: {
                      n: 10,
                      r: !0,
                      q: !0,
                      br: t.qM.readUint32,
                      pbr: t.qM.readPackedUint32,
                      bw: t.gp.writeRepeatedUint32,
                    },
                    requested_bundleids: {
                      n: 11,
                      r: !0,
                      q: !0,
                      br: t.qM.readUint32,
                      pbr: t.qM.readPackedUint32,
                      bw: t.gp.writeRepeatedUint32,
                    },
                    purchased_bundleids: {
                      n: 12,
                      r: !0,
                      q: !0,
                      br: t.qM.readUint32,
                      pbr: t.qM.readPackedUint32,
                      bw: t.gp.writeRepeatedUint32,
                    },
                  },
                }),
              Di.sm_m
            );
          }
          static MBF() {
            return Di.sm_mbf || (Di.sm_mbf = t.w0(Di.M())), Di.sm_mbf;
          }
          toObject(r = !1) {
            return Di.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Di.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Di.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Di();
            return Di.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Di.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Di.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Di.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Di.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "PurchaseRequest";
          }
        }
        class qi extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              qi.prototype.requests || t.Sg(qi.M()),
              c.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              qi.sm_m ||
                (qi.sm_m = {
                  proto: qi,
                  fields: { requests: { n: 1, c: Di, r: !0, q: !0 } },
                }),
              qi.sm_m
            );
          }
          static MBF() {
            return qi.sm_mbf || (qi.sm_mbf = t.w0(qi.M())), qi.sm_mbf;
          }
          toObject(r = !1) {
            return qi.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(qi.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(qi.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new qi();
            return qi.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(qi.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return qi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(qi.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              qi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetPurchaseRequests_Response";
          }
        }
        class pi extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              pi.prototype.family_groupid || t.Sg(pi.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              pi.sm_m ||
                (pi.sm_m = {
                  proto: pi,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    action: { n: 3, br: t.qM.readEnum, bw: t.gp.writeEnum },
                    request_id: {
                      n: 4,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              pi.sm_m
            );
          }
          static MBF() {
            return pi.sm_mbf || (pi.sm_mbf = t.w0(pi.M())), pi.sm_mbf;
          }
          toObject(r = !1) {
            return pi.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(pi.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(pi.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new pi();
            return pi.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(pi.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return pi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(pi.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              pi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_RespondToRequestedPurchase_Request";
          }
        }
        class za extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return za.toObject(r, this);
          }
          static toObject(r, i) {
            return r ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(r) {
            return new za();
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new za();
            return za.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return za.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              za.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_RespondToRequestedPurchase_Response";
          }
        }
        class Pi extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Pi.prototype.family_groupid || t.Sg(Pi.M()),
              c.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Pi.sm_m ||
                (Pi.sm_m = {
                  proto: Pi,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    running_apps: { n: 2, c: Gi, r: !0, q: !0 },
                  },
                }),
              Pi.sm_m
            );
          }
          static MBF() {
            return Pi.sm_mbf || (Pi.sm_mbf = t.w0(Pi.M())), Pi.sm_mbf;
          }
          toObject(r = !1) {
            return Pi.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Pi.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Pi.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Pi();
            return Pi.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Pi.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Pi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Pi.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Pi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroupsClient_NotifyRunningApps_Notification";
          }
        }
        class Ri extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ri.prototype.member_steamid || t.Sg(Ri.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ri.sm_m ||
                (Ri.sm_m = {
                  proto: Ri,
                  fields: {
                    member_steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    owner_steamid: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              Ri.sm_m
            );
          }
          static MBF() {
            return Ri.sm_mbf || (Ri.sm_mbf = t.w0(Ri.M())), Ri.sm_mbf;
          }
          toObject(r = !1) {
            return Ri.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Ri.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Ri.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Ri();
            return Ri.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Ri.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Ri.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Ri.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Ri.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroupsClient_NotifyRunningApps_Notification_PlayingMember";
          }
        }
        class Gi extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Gi.prototype.appid || t.Sg(Gi.M()),
              c.Message.initialize(this, r, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Gi.sm_m ||
                (Gi.sm_m = {
                  proto: Gi,
                  fields: {
                    appid: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    playing_members: { n: 3, c: Ri, r: !0, q: !0 },
                  },
                }),
              Gi.sm_m
            );
          }
          static MBF() {
            return Gi.sm_mbf || (Gi.sm_mbf = t.w0(Gi.M())), Gi.sm_mbf;
          }
          toObject(r = !1) {
            return Gi.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Gi.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Gi.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Gi();
            return Gi.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Gi.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Gi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Gi.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Gi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroupsClient_NotifyRunningApps_Notification_RunningApp";
          }
        }
        class ya extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return ya.toObject(r, this);
          }
          static toObject(r, i) {
            return r ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(r) {
            return new ya();
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new ya();
            return ya.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ya.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ya.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroupsClient_InviteStatus_Notification";
          }
        }
        class Ci extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ci.prototype.family_groupid || t.Sg(Ci.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ci.sm_m ||
                (Ci.sm_m = {
                  proto: Ci,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              Ci.sm_m
            );
          }
          static MBF() {
            return Ci.sm_mbf || (Ci.sm_mbf = t.w0(Ci.M())), Ci.sm_mbf;
          }
          toObject(r = !1) {
            return Ci.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Ci.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Ci.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Ci();
            return Ci.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Ci.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Ci.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Ci.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Ci.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroupsClient_GroupChanged_Notification";
          }
        }
        class _i extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              _i.prototype.family_groupid || t.Sg(_i.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _i.sm_m ||
                (_i.sm_m = {
                  proto: _i,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              _i.sm_m
            );
          }
          static MBF() {
            return _i.sm_mbf || (_i.sm_mbf = t.w0(_i.M())), _i.sm_mbf;
          }
          toObject(r = !1) {
            return _i.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(_i.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(_i.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new _i();
            return _i.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(_i.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return _i.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(_i.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              _i.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetChangeLog_Request";
          }
        }
        class rt extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              rt.prototype.changes || t.Sg(rt.M()),
              c.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              rt.sm_m ||
                (rt.sm_m = {
                  proto: rt,
                  fields: { changes: { n: 1, c: it, r: !0, q: !0 } },
                }),
              rt.sm_m
            );
          }
          static MBF() {
            return rt.sm_mbf || (rt.sm_mbf = t.w0(rt.M())), rt.sm_mbf;
          }
          toObject(r = !1) {
            return rt.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(rt.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(rt.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new rt();
            return rt.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(rt.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return rt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(rt.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              rt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetChangeLog_Response";
          }
        }
        class it extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              it.prototype.timestamp || t.Sg(it.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              it.sm_m ||
                (it.sm_m = {
                  proto: it,
                  fields: {
                    timestamp: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    actor_steamid: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    type: { n: 3, br: t.qM.readEnum, bw: t.gp.writeEnum },
                    body: { n: 4, br: t.qM.readString, bw: t.gp.writeString },
                    by_support: { n: 5, br: t.qM.readBool, bw: t.gp.writeBool },
                  },
                }),
              it.sm_m
            );
          }
          static MBF() {
            return it.sm_mbf || (it.sm_mbf = t.w0(it.M())), it.sm_mbf;
          }
          toObject(r = !1) {
            return it.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(it.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(it.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new it();
            return it.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(it.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return it.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(it.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              it.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetChangeLog_Response_Change";
          }
        }
        class Ur extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ur.prototype.steamid || t.Sg(Ur.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ur.sm_m ||
                (Ur.sm_m = {
                  proto: Ur,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    appid: { n: 2, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    first_played: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    latest_played: {
                      n: 4,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    seconds_played: {
                      n: 5,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              Ur.sm_m
            );
          }
          static MBF() {
            return Ur.sm_mbf || (Ur.sm_mbf = t.w0(Ur.M())), Ur.sm_mbf;
          }
          toObject(r = !1) {
            return Ur.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Ur.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Ur.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Ur();
            return Ur.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Ur.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Ur.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Ur.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Ur.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_PlaytimeEntry";
          }
        }
        class tt extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              tt.prototype.family_groupid || t.Sg(tt.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              tt.sm_m ||
                (tt.sm_m = {
                  proto: tt,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              tt.sm_m
            );
          }
          static MBF() {
            return tt.sm_mbf || (tt.sm_mbf = t.w0(tt.M())), tt.sm_mbf;
          }
          toObject(r = !1) {
            return tt.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(tt.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(tt.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new tt();
            return tt.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(tt.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return tt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(tt.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              tt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetPlaytimeSummary_Request";
          }
        }
        class et extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              et.prototype.entries || t.Sg(et.M()),
              c.Message.initialize(this, r, 0, -1, [1, 2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              et.sm_m ||
                (et.sm_m = {
                  proto: et,
                  fields: {
                    entries: { n: 1, c: Ur, r: !0, q: !0 },
                    entries_by_owner: { n: 2, c: Ur, r: !0, q: !0 },
                  },
                }),
              et.sm_m
            );
          }
          static MBF() {
            return et.sm_mbf || (et.sm_mbf = t.w0(et.M())), et.sm_mbf;
          }
          toObject(r = !1) {
            return et.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(et.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(et.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new et();
            return et.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(et.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return et.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(et.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              et.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetPlaytimeSummary_Response";
          }
        }
        class st extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              st.prototype.family_groupid || t.Sg(st.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              st.sm_m ||
                (st.sm_m = {
                  proto: st,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    cooldown_count: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              st.sm_m
            );
          }
          static MBF() {
            return st.sm_mbf || (st.sm_mbf = t.w0(st.M())), st.sm_mbf;
          }
          toObject(r = !1) {
            return st.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(st.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(st.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new st();
            return st.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(st.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return st.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(st.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              st.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_SetFamilyCooldownOverrides_Request";
          }
        }
        class Ma extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Ma.toObject(r, this);
          }
          static toObject(r, i) {
            return r ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(r) {
            return new Ma();
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Ma();
            return Ma.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Ma.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Ma.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_SetFamilyCooldownOverrides_Response";
          }
        }
        class at extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              at.prototype.family_groupid || t.Sg(at.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              at.sm_m ||
                (at.sm_m = {
                  proto: at,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    include_own: {
                      n: 2,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    include_excluded: {
                      n: 3,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    language: {
                      n: 5,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    max_apps: {
                      n: 6,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    include_non_games: {
                      n: 7,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    steamid: {
                      n: 8,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              at.sm_m
            );
          }
          static MBF() {
            return at.sm_mbf || (at.sm_mbf = t.w0(at.M())), at.sm_mbf;
          }
          toObject(r = !1) {
            return at.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(at.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(at.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new at();
            return at.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(at.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return at.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(at.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              at.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetSharedLibraryApps_Request";
          }
        }
        class nt extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              nt.prototype.apps || t.Sg(nt.M()),
              c.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              nt.sm_m ||
                (nt.sm_m = {
                  proto: nt,
                  fields: {
                    apps: { n: 1, c: ct, r: !0, q: !0 },
                    owner_steamid: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              nt.sm_m
            );
          }
          static MBF() {
            return nt.sm_mbf || (nt.sm_mbf = t.w0(nt.M())), nt.sm_mbf;
          }
          toObject(r = !1) {
            return nt.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(nt.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(nt.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new nt();
            return nt.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(nt.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return nt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(nt.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              nt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetSharedLibraryApps_Response";
          }
        }
        class ct extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ct.prototype.appid || t.Sg(ct.M()),
              c.Message.initialize(this, r, 0, -1, [2, 15], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ct.sm_m ||
                (ct.sm_m = {
                  proto: ct,
                  fields: {
                    appid: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    owner_steamids: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: t.qM.readFixed64String,
                      pbr: t.qM.readPackedFixed64String,
                      bw: t.gp.writeRepeatedFixed64String,
                    },
                    name: { n: 6, br: t.qM.readString, bw: t.gp.writeString },
                    sort_as: {
                      n: 7,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    capsule_filename: {
                      n: 8,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    img_icon_hash: {
                      n: 9,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    exclude_reason: {
                      n: 10,
                      d: Pm,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    rt_time_acquired: {
                      n: 11,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    rt_last_played: {
                      n: 12,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    rt_playtime: {
                      n: 13,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    app_type: {
                      n: 14,
                      d: Am,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    content_descriptors: {
                      n: 15,
                      r: !0,
                      q: !0,
                      br: t.qM.readUint32,
                      pbr: t.qM.readPackedUint32,
                      bw: t.gp.writeRepeatedUint32,
                    },
                  },
                }),
              ct.sm_m
            );
          }
          static MBF() {
            return ct.sm_mbf || (ct.sm_mbf = t.w0(ct.M())), ct.sm_mbf;
          }
          toObject(r = !1) {
            return ct.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(ct.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(ct.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new ct();
            return ct.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(ct.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ct.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(ct.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ct.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetSharedLibraryApps_Response_SharedApp";
          }
        }
        class lt extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              lt.prototype.family_groupid || t.Sg(lt.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              lt.sm_m ||
                (lt.sm_m = {
                  proto: lt,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    invite_id: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    nonce: {
                      n: 3,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              lt.sm_m
            );
          }
          static MBF() {
            return lt.sm_mbf || (lt.sm_mbf = t.w0(lt.M())), lt.sm_mbf;
          }
          toObject(r = !1) {
            return lt.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(lt.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(lt.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new lt();
            return lt.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(lt.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return lt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(lt.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              lt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_ConfirmInviteToFamilyGroup_Request";
          }
        }
        class ha extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return ha.toObject(r, this);
          }
          static toObject(r, i) {
            return r ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(r) {
            return new ha();
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new ha();
            return ha.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ha.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ha.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_ConfirmInviteToFamilyGroup_Response";
          }
        }
        class mt extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              mt.prototype.family_groupid || t.Sg(mt.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              mt.sm_m ||
                (mt.sm_m = {
                  proto: mt,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    invite_id: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    nonce: {
                      n: 3,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              mt.sm_m
            );
          }
          static MBF() {
            return mt.sm_mbf || (mt.sm_mbf = t.w0(mt.M())), mt.sm_mbf;
          }
          toObject(r = !1) {
            return mt.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(mt.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(mt.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new mt();
            return mt.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(mt.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return mt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(mt.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              mt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_ConfirmJoinFamilyGroup_Request";
          }
        }
        class Ta extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Ta.toObject(r, this);
          }
          static toObject(r, i) {
            return r ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(r) {
            return new Ta();
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Ta();
            return Ta.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Ta.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Ta.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_ConfirmJoinFamilyGroup_Response";
          }
        }
        class ft extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ft.prototype.family_groupid || t.Sg(ft.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ft.sm_m ||
                (ft.sm_m = {
                  proto: ft,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    steamid: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              ft.sm_m
            );
          }
          static MBF() {
            return ft.sm_mbf || (ft.sm_mbf = t.w0(ft.M())), ft.sm_mbf;
          }
          toObject(r = !1) {
            return ft.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(ft.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(ft.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new ft();
            return ft.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(ft.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ft.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(ft.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ft.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_ResendInvitationToFamilyGroup_Request";
          }
        }
        class oa extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return oa.toObject(r, this);
          }
          static toObject(r, i) {
            return r ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(r) {
            return new oa();
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new oa();
            return oa.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return oa.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              oa.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_ResendInvitationToFamilyGroup_Response";
          }
        }
        class ut extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ut.prototype.family_groupid || t.Sg(ut.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ut.sm_m ||
                (ut.sm_m = {
                  proto: ut,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    appid: { n: 2, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    lender_steamid: {
                      n: 3,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              ut.sm_m
            );
          }
          static MBF() {
            return ut.sm_mbf || (ut.sm_mbf = t.w0(ut.M())), ut.sm_mbf;
          }
          toObject(r = !1) {
            return ut.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(ut.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(ut.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new ut();
            return ut.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(ut.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ut.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(ut.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ut.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_SetPreferredLender_Request";
          }
        }
        class Wa extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Wa.toObject(r, this);
          }
          static toObject(r, i) {
            return r ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(r) {
            return new Wa();
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Wa();
            return Wa.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Wa.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Wa.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_SetPreferredLender_Response";
          }
        }
        class dt extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              dt.prototype.family_groupid || t.Sg(dt.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              dt.sm_m ||
                (dt.sm_m = {
                  proto: dt,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              dt.sm_m
            );
          }
          static MBF() {
            return dt.sm_mbf || (dt.sm_mbf = t.w0(dt.M())), dt.sm_mbf;
          }
          toObject(r = !1) {
            return dt.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(dt.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(dt.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new dt();
            return dt.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(dt.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return dt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(dt.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              dt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetPreferredLenders_Request";
          }
        }
        class Bt extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Bt.prototype.members || t.Sg(Bt.M()),
              c.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Bt.sm_m ||
                (Bt.sm_m = {
                  proto: Bt,
                  fields: { members: { n: 1, c: gt, r: !0, q: !0 } },
                }),
              Bt.sm_m
            );
          }
          static MBF() {
            return Bt.sm_mbf || (Bt.sm_mbf = t.w0(Bt.M())), Bt.sm_mbf;
          }
          toObject(r = !1) {
            return Bt.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Bt.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Bt.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Bt();
            return Bt.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Bt.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Bt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Bt.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Bt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetPreferredLenders_Response";
          }
        }
        class gt extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              gt.prototype.steamid || t.Sg(gt.M()),
              c.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              gt.sm_m ||
                (gt.sm_m = {
                  proto: gt,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    preferred_appids: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: t.qM.readUint32,
                      pbr: t.qM.readPackedUint32,
                      bw: t.gp.writeRepeatedUint32,
                    },
                  },
                }),
              gt.sm_m
            );
          }
          static MBF() {
            return gt.sm_mbf || (gt.sm_mbf = t.w0(gt.M())), gt.sm_mbf;
          }
          toObject(r = !1) {
            return gt.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(gt.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(gt.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new gt();
            return gt.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(gt.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return gt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(gt.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              gt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetPreferredLenders_Response_FamilyMember";
          }
        }
        class wt extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              wt.prototype.family_groupid || t.Sg(wt.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              wt.sm_m ||
                (wt.sm_m = {
                  proto: wt,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              wt.sm_m
            );
          }
          static MBF() {
            return wt.sm_mbf || (wt.sm_mbf = t.w0(wt.M())), wt.sm_mbf;
          }
          toObject(r = !1) {
            return wt.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(wt.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(wt.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new wt();
            return wt.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(wt.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return wt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(wt.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              wt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_UndeleteFamilyGroup_Request";
          }
        }
        class ja extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return ja.toObject(r, this);
          }
          static toObject(r, i) {
            return r ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(r) {
            return new ja();
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new ja();
            return ja.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ja.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ja.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_UndeleteFamilyGroup_Response";
          }
        }
        class bt extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              bt.prototype.family_groupid || t.Sg(bt.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              bt.sm_m ||
                (bt.sm_m = {
                  proto: bt,
                  fields: {
                    family_groupid: {
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
              bt.sm_m
            );
          }
          static MBF() {
            return bt.sm_mbf || (bt.sm_mbf = t.w0(bt.M())), bt.sm_mbf;
          }
          toObject(r = !1) {
            return bt.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(bt.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(bt.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new bt();
            return bt.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(bt.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return bt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(bt.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              bt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_ForceAcceptInvite_Request";
          }
        }
        class Oa extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Oa.toObject(r, this);
          }
          static toObject(r, i) {
            return r ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(r) {
            return new Oa();
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Oa();
            return Oa.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Oa.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Oa.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_ForceAcceptInvite_Response";
          }
        }
        class zt extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              zt.prototype.family_groupid || t.Sg(zt.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              zt.sm_m ||
                (zt.sm_m = {
                  proto: zt,
                  fields: {
                    family_groupid: {
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
              zt.sm_m
            );
          }
          static MBF() {
            return zt.sm_mbf || (zt.sm_mbf = t.w0(zt.M())), zt.sm_mbf;
          }
          toObject(r = !1) {
            return zt.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(zt.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(zt.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new zt();
            return zt.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(zt.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return zt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(zt.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              zt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetInviteCheckResults_Request";
          }
        }
        class yt extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              yt.prototype.wallet_country_matches || t.Sg(yt.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              yt.sm_m ||
                (yt.sm_m = {
                  proto: yt,
                  fields: {
                    wallet_country_matches: {
                      n: 1,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    ip_match: { n: 2, br: t.qM.readBool, bw: t.gp.writeBool },
                    join_restriction: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              yt.sm_m
            );
          }
          static MBF() {
            return yt.sm_mbf || (yt.sm_mbf = t.w0(yt.M())), yt.sm_mbf;
          }
          toObject(r = !1) {
            return yt.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(yt.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(yt.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new yt();
            return yt.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(yt.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return yt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(yt.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              yt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetInviteCheckResults_Response";
          }
        }
        class Mt extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Mt.prototype.steamid || t.Sg(Mt.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Mt.sm_m ||
                (Mt.sm_m = {
                  proto: Mt,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    invite_id: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              Mt.sm_m
            );
          }
          static MBF() {
            return Mt.sm_mbf || (Mt.sm_mbf = t.w0(Mt.M())), Mt.sm_mbf;
          }
          toObject(r = !1) {
            return Mt.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Mt.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Mt.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Mt();
            return Mt.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Mt.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Mt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Mt.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Mt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_ClearCooldownSkip_Request";
          }
        }
        class va extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return va.toObject(r, this);
          }
          static toObject(r, i) {
            return r ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(r) {
            return new va();
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new va();
            return va.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return va.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              va.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_ClearCooldownSkip_Response";
          }
        }
        class ht extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ht.prototype.family_groupid || t.Sg(ht.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ht.sm_m ||
                (ht.sm_m = {
                  proto: ht,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    rtime32_target: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              ht.sm_m
            );
          }
          static MBF() {
            return ht.sm_mbf || (ht.sm_mbf = t.w0(ht.M())), ht.sm_mbf;
          }
          toObject(r = !1) {
            return ht.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(ht.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(ht.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new ht();
            return ht.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(ht.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ht.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(ht.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ht.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_RollbackFamilyGroup_Request";
          }
        }
        class Ua extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Ua.toObject(r, this);
          }
          static toObject(r, i) {
            return r ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(r) {
            return new Ua();
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Ua();
            return Ua.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Ua.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Ua.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_RollbackFamilyGroup_Response";
          }
        }
        var yl;
        ((s) => {
          function r(U, v, b) {
            return U.SendMsg(
              "FamilyGroups.CreateFamilyGroup#1",
              (0, w.I8)(Wi, v, b),
              ji,
              { ePrivilege: 1 },
            );
          }
          s.CreateFamilyGroup = r;
          function i(U, v, b) {
            return U.SendMsg(
              "FamilyGroups.GetFamilyGroup#1",
              (0, w.I8)(Oi, v, b),
              vr,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          s.GetFamilyGroup = i;
          function e(U, v, b) {
            return U.SendMsg(
              "FamilyGroups.GetFamilyGroupForUser#1",
              (0, w.I8)(Si, v, b),
              Ni,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          s.GetFamilyGroupForUser = e;
          function n(U, v, b) {
            return U.SendMsg(
              "FamilyGroups.ModifyFamilyGroupDetails#1",
              (0, w.I8)(ki, v, b),
              Ba,
              { ePrivilege: 1 },
            );
          }
          s.ModifyFamilyGroupDetails = n;
          function l(U, v, b) {
            return U.SendMsg(
              "FamilyGroups.InviteToFamilyGroup#1",
              (0, w.I8)(Ei, v, b),
              Fi,
              { ePrivilege: 1 },
            );
          }
          s.InviteToFamilyGroup = l;
          function m(U, v, b) {
            return U.SendMsg(
              "FamilyGroups.ConfirmInviteToFamilyGroup#1",
              (0, w.I8)(lt, v, b),
              ha,
              { ePrivilege: 1 },
            );
          }
          s.ConfirmInviteToFamilyGroup = m;
          function f(U, v, b) {
            return U.SendMsg(
              "FamilyGroups.ResendInvitationToFamilyGroup#1",
              (0, w.I8)(ft, v, b),
              oa,
              { ePrivilege: 1 },
            );
          }
          s.ResendInvitationToFamilyGroup = f;
          function u(U, v, b) {
            return U.SendMsg(
              "FamilyGroups.JoinFamilyGroup#1",
              (0, w.I8)($i, v, b),
              Qi,
              { ePrivilege: 1 },
            );
          }
          s.JoinFamilyGroup = u;
          function B(U, v, b) {
            return U.SendMsg(
              "FamilyGroups.ConfirmJoinFamilyGroup#1",
              (0, w.I8)(mt, v, b),
              Ta,
              { ePrivilege: 1 },
            );
          }
          s.ConfirmJoinFamilyGroup = B;
          function y(U, v, b) {
            return U.SendMsg(
              "FamilyGroups.RemoveFromFamilyGroup#1",
              (0, w.I8)(Ki, v, b),
              ga,
              { ePrivilege: 1 },
            );
          }
          s.RemoveFromFamilyGroup = y;
          function T(U, v, b) {
            return U.SendMsg(
              "FamilyGroups.CancelFamilyGroupInvite#1",
              (0, w.I8)(Vi, v, b),
              wa,
              { ePrivilege: 1 },
            );
          }
          s.CancelFamilyGroupInvite = T;
          function I(U, v, b) {
            return U.SendMsg(
              "FamilyGroups.GetUsersSharingDevice#1",
              (0, w.I8)(Li, v, b),
              Xi,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          s.GetUsersSharingDevice = I;
          function S(U, v, b) {
            return U.SendMsg(
              "FamilyGroups.DeleteFamilyGroup#1",
              (0, w.I8)(Yi, v, b),
              ba,
              { ePrivilege: 1 },
            );
          }
          s.DeleteFamilyGroup = S;
          function E(U, v, b) {
            return U.SendMsg(
              "FamilyGroups.UndeleteFamilyGroup#1",
              (0, w.I8)(wt, v, b),
              ja,
              { ePrivilege: 1 },
            );
          }
          s.UndeleteFamilyGroup = E;
          function j(U, v, b) {
            return U.SendMsg(
              "FamilyGroups.GetPlaytimeSummary#1",
              (0, w.I8)(tt, v, b),
              et,
              { ePrivilege: 1 },
            );
          }
          s.GetPlaytimeSummary = j;
          function z(U, v, b) {
            return U.SendMsg(
              "FamilyGroups.RequestPurchase#1",
              (0, w.I8)(Zi, v, b),
              Ji,
              { ePrivilege: 1 },
            );
          }
          s.RequestPurchase = z;
          function g(U, v, b) {
            return U.SendMsg(
              "FamilyGroups.GetPurchaseRequests#1",
              (0, w.I8)(Ai, v, b),
              qi,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          s.GetPurchaseRequests = g;
          function O(U, v, b) {
            return U.SendMsg(
              "FamilyGroups.RespondToRequestedPurchase#1",
              (0, w.I8)(pi, v, b),
              za,
              { ePrivilege: 1 },
            );
          }
          s.RespondToRequestedPurchase = O;
          function K(U, v, b) {
            return U.SendMsg(
              "FamilyGroups.GetChangeLog#1",
              (0, w.I8)(_i, v, b),
              rt,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          s.GetChangeLog = K;
          function vs(U, v, b) {
            return U.SendMsg(
              "FamilyGroups.SetFamilyCooldownOverrides#1",
              (0, w.I8)(st, v, b),
              Ma,
              { ePrivilege: 1 },
            );
          }
          s.SetFamilyCooldownOverrides = vs;
          function Cs(U, v, b) {
            return U.SendMsg(
              "FamilyGroups.GetSharedLibraryApps#1",
              (0, w.I8)(at, v, b),
              nt,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          s.GetSharedLibraryApps = Cs;
          function un(U, v, b) {
            return U.SendMsg(
              "FamilyGroups.SetPreferredLender#1",
              (0, w.I8)(ut, v, b),
              Wa,
              { ePrivilege: 1 },
            );
          }
          s.SetPreferredLender = un;
          function Pa(U, v, b) {
            return U.SendMsg(
              "FamilyGroups.GetPreferredLenders#1",
              (0, w.I8)(dt, v, b),
              Bt,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          s.GetPreferredLenders = Pa;
          function rn(U, v, b) {
            return U.SendMsg(
              "FamilyGroups.ForceAcceptInvite#1",
              (0, w.I8)(bt, v, b),
              Oa,
              { ePrivilege: 5 },
            );
          }
          s.ForceAcceptInvite = rn;
          function tn(U, v, b) {
            return U.SendMsg(
              "FamilyGroups.GetInviteCheckResults#1",
              (0, w.I8)(zt, v, b),
              yt,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }
          s.GetInviteCheckResults = tn;
          function Ra(U, v, b) {
            return U.SendMsg(
              "FamilyGroups.ClearCooldownSkip#1",
              (0, w.I8)(Mt, v, b),
              va,
              { ePrivilege: 5 },
            );
          }
          s.ClearCooldownSkip = Ra;
          function dn(U, v, b) {
            return U.SendMsg(
              "FamilyGroups.RollbackFamilyGroup#1",
              (0, w.I8)(ht, v, b),
              Ua,
              { ePrivilege: 5 },
            );
          }
          s.RollbackFamilyGroup = dn;
        })(yl || (yl = {}));
        var Ml;
        ((s) => {
          (s.NotifyRunningAppsHandler = {
            name: "FamilyGroupsClient.NotifyRunningApps#1",
            request: Pi,
          }),
            (s.NotifyInviteStatusHandler = {
              name: "FamilyGroupsClient.NotifyInviteStatus#1",
              request: ya,
            }),
            (s.NotifyGroupChangedHandler = {
              name: "FamilyGroupsClient.NotifyGroupChanged#1",
              request: Ci,
            });
        })(Ml || (Ml = {}));
        var h = W(8210);
        function dw(s) {
          return "unknown ELineItemPurchaseNotice ( " + s + " )";
        }
        class D extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              D.prototype.accountid_giftee || t.Sg(D.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              D.sm_m ||
                (D.sm_m = {
                  proto: D,
                  fields: {
                    accountid_giftee: {
                      n: 1,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    gift_message: { n: 2, c: Tt },
                    time_scheduled_send: {
                      n: 3,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    email_giftee: {
                      n: 4,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
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
            let i = new (a().BinaryReader)(r),
              e = new D();
            return D.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(D.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return D.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(D.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              D.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CartGiftInfo";
          }
        }
        class Tt extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Tt.prototype.gifteename || t.Sg(Tt.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Tt.sm_m ||
                (Tt.sm_m = {
                  proto: Tt,
                  fields: {
                    gifteename: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    message: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    sentiment: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    signature: {
                      n: 4,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              Tt.sm_m
            );
          }
          static MBF() {
            return Tt.sm_mbf || (Tt.sm_mbf = t.w0(Tt.M())), Tt.sm_mbf;
          }
          toObject(r = !1) {
            return Tt.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Tt.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Tt.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Tt();
            return Tt.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Tt.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Tt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Tt.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Tt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CartGiftMessage";
          }
        }
        class bs extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              bs.prototype.amount_in_cents || t.Sg(bs.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              bs.sm_m ||
                (bs.sm_m = {
                  proto: bs,
                  fields: {
                    amount_in_cents: {
                      n: 1,
                      br: t.qM.readInt64String,
                      bw: t.gp.writeInt64String,
                    },
                    currency_code: {
                      n: 2,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    formatted_amount: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              bs.sm_m
            );
          }
          static MBF() {
            return bs.sm_mbf || (bs.sm_mbf = t.w0(bs.M())), bs.sm_mbf;
          }
          toObject(r = !1) {
            return bs.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(bs.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(bs.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new bs();
            return bs.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(bs.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return bs.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(bs.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              bs.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CartAmount";
          }
        }
        class zs extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              zs.prototype.couponid || t.Sg(zs.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              zs.sm_m ||
                (zs.sm_m = {
                  proto: zs,
                  fields: {
                    couponid: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    gidcoupon: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    title: { n: 5, br: t.qM.readString, bw: t.gp.writeString },
                    coupon_description: {
                      n: 6,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    large_icon_url: {
                      n: 7,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    discount_pct: {
                      n: 8,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                  },
                }),
              zs.sm_m
            );
          }
          static MBF() {
            return zs.sm_mbf || (zs.sm_mbf = t.w0(zs.M())), zs.sm_mbf;
          }
          toObject(r = !1) {
            return zs.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(zs.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(zs.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new zs();
            return zs.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(zs.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return zs.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(zs.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              zs.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CartCoupon";
          }
        }
        class ot extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ot.prototype.steamid_requester || t.Sg(ot.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ot.sm_m ||
                (ot.sm_m = {
                  proto: ot,
                  fields: {
                    steamid_requester: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    purchase_request_id: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              ot.sm_m
            );
          }
          static MBF() {
            return ot.sm_mbf || (ot.sm_mbf = t.w0(ot.M())), ot.sm_mbf;
          }
          toObject(r = !1) {
            return ot.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(ot.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(ot.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new ot();
            return ot.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(ot.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ot.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(ot.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ot.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_CreateNew_Request";
          }
        }
        class Wt extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Wt.prototype.gidshoppingcart || t.Sg(Wt.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Wt.sm_m ||
                (Wt.sm_m = {
                  proto: Wt,
                  fields: {
                    gidshoppingcart: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              Wt.sm_m
            );
          }
          static MBF() {
            return Wt.sm_mbf || (Wt.sm_mbf = t.w0(Wt.M())), Wt.sm_mbf;
          }
          toObject(r = !1) {
            return Wt.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Wt.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Wt.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Wt();
            return Wt.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Wt.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Wt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Wt.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Wt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_CreateNew_Response";
          }
        }
        class xr extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              xr.prototype.amount || t.Sg(xr.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              xr.sm_m ||
                (xr.sm_m = {
                  proto: xr,
                  fields: {
                    amount: {
                      n: 1,
                      br: t.qM.readInt64String,
                      bw: t.gp.writeInt64String,
                    },
                    currencycode: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              xr.sm_m
            );
          }
          static MBF() {
            return xr.sm_mbf || (xr.sm_mbf = t.w0(xr.M())), xr.sm_mbf;
          }
          toObject(r = !1) {
            return xr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(xr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(xr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new xr();
            return xr.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(xr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return xr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(xr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              xr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_Amount";
          }
        }
        class Ir extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ir.prototype.packageid || t.Sg(Ir.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ir.sm_m ||
                (Ir.sm_m = {
                  proto: Ir,
                  fields: {
                    packageid: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    costwhenadded: { n: 2, c: xr },
                    is_gift: { n: 3, br: t.qM.readBool, bw: t.gp.writeBool },
                    gidbundle: {
                      n: 4,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    quantity: {
                      n: 5,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    gift_info: { n: 6, c: D },
                  },
                }),
              Ir.sm_m
            );
          }
          static MBF() {
            return Ir.sm_mbf || (Ir.sm_mbf = t.w0(Ir.M())), Ir.sm_mbf;
          }
          toObject(r = !1) {
            return Ir.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Ir.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Ir.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Ir();
            return Ir.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Ir.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Ir.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Ir.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Ir.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_PackageItem";
          }
        }
        class jt extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              jt.prototype.walletcredit || t.Sg(jt.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              jt.sm_m ||
                (jt.sm_m = {
                  proto: jt,
                  fields: { walletcredit: { n: 1, c: xr } },
                }),
              jt.sm_m
            );
          }
          static MBF() {
            return jt.sm_mbf || (jt.sm_mbf = t.w0(jt.M())), jt.sm_mbf;
          }
          toObject(r = !1) {
            return jt.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(jt.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(jt.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new jt();
            return jt.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(jt.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return jt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(jt.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              jt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_WalletCreditItem";
          }
        }
        class Ot extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ot.prototype.couponid || t.Sg(Ot.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ot.sm_m ||
                (Ot.sm_m = {
                  proto: Ot,
                  fields: {
                    couponid: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    gidcoupontarget: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    packageid: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    gidcoupon: {
                      n: 4,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              Ot.sm_m
            );
          }
          static MBF() {
            return Ot.sm_mbf || (Ot.sm_mbf = t.w0(Ot.M())), Ot.sm_mbf;
          }
          toObject(r = !1) {
            return Ot.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Ot.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Ot.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Ot();
            return Ot.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Ot.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Ot.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Ot.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Ot.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_CouponItem";
          }
        }
        class vt extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              vt.prototype.microtxnappid || t.Sg(vt.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              vt.sm_m ||
                (vt.sm_m = {
                  proto: vt,
                  fields: {
                    microtxnappid: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    microtxnassetclassid: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              vt.sm_m
            );
          }
          static MBF() {
            return vt.sm_mbf || (vt.sm_mbf = t.w0(vt.M())), vt.sm_mbf;
          }
          toObject(r = !1) {
            return vt.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(vt.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(vt.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new vt();
            return vt.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(vt.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return vt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(vt.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              vt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_MicroTxnAsset";
          }
        }
        class Ut extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ut.prototype.bundleid || t.Sg(Ut.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ut.sm_m ||
                (Ut.sm_m = {
                  proto: Ut,
                  fields: {
                    bundleid: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    quantity: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    is_gift: { n: 3, br: t.qM.readBool, bw: t.gp.writeBool },
                    gift_info: { n: 4, c: D },
                  },
                }),
              Ut.sm_m
            );
          }
          static MBF() {
            return Ut.sm_mbf || (Ut.sm_mbf = t.w0(Ut.M())), Ut.sm_mbf;
          }
          toObject(r = !1) {
            return Ut.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Ut.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Ut.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Ut();
            return Ut.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Ut.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Ut.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Ut.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Ut.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_BundleItem";
          }
        }
        class xt extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              xt.prototype.reward_id || t.Sg(xt.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              xt.sm_m ||
                (xt.sm_m = {
                  proto: xt,
                  fields: {
                    reward_id: {
                      n: 1,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                  },
                }),
              xt.sm_m
            );
          }
          static MBF() {
            return xt.sm_mbf || (xt.sm_mbf = t.w0(xt.M())), xt.sm_mbf;
          }
          toObject(r = !1) {
            return xt.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(xt.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(xt.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new xt();
            return xt.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(xt.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return xt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(xt.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              xt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_LoyaltyRewardItem";
          }
        }
        class Sr extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Sr.prototype.gidparent || t.Sg(Sr.M()),
              c.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Sr.sm_m ||
                (Sr.sm_m = {
                  proto: Sr,
                  fields: {
                    gidparent: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    children: { n: 2, c: Sr, r: !0, q: !0 },
                  },
                }),
              Sr.sm_m
            );
          }
          static MBF() {
            return Sr.sm_mbf || (Sr.sm_mbf = t.w0(Sr.M())), Sr.sm_mbf;
          }
          toObject(r = !1) {
            return Sr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Sr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Sr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Sr();
            return Sr.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Sr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Sr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Sr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Sr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_RelationShip";
          }
        }
        class It extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              It.prototype.couponid || t.Sg(It.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              It.sm_m ||
                (It.sm_m = {
                  proto: It,
                  fields: {
                    couponid: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    gidcoupon: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    gidlineitem: {
                      n: 3,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              It.sm_m
            );
          }
          static MBF() {
            return It.sm_mbf || (It.sm_mbf = t.w0(It.M())), It.sm_mbf;
          }
          toObject(r = !1) {
            return It.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(It.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(It.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new It();
            return It.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(It.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return It.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(It.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              It.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_AvailableCoupon";
          }
        }
        class St extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              St.prototype.gidlineitem || t.Sg(St.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              St.sm_m ||
                (St.sm_m = {
                  proto: St,
                  fields: {
                    gidlineitem: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    package_item: { n: 2, c: Ir },
                    wallet_credit_item: { n: 3, c: jt },
                    coupon_item: { n: 4, c: Ot },
                    micro_item: { n: 5, c: vt },
                    bundle_item: { n: 7, c: Ut },
                    loyalty_item: { n: 8, c: xt },
                  },
                }),
              St.sm_m
            );
          }
          static MBF() {
            return St.sm_mbf || (St.sm_mbf = t.w0(St.M())), St.sm_mbf;
          }
          toObject(r = !1) {
            return St.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(St.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(St.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new St();
            return St.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(St.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return St.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(St.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              St.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_Item";
          }
        }
        class Ht extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ht.prototype.coupons || t.Sg(Ht.M()),
              c.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ht.sm_m ||
                (Ht.sm_m = {
                  proto: Ht,
                  fields: { coupons: { n: 1, c: It, r: !0, q: !0 } },
                }),
              Ht.sm_m
            );
          }
          static MBF() {
            return Ht.sm_mbf || (Ht.sm_mbf = t.w0(Ht.M())), Ht.sm_mbf;
          }
          toObject(r = !1) {
            return Ht.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Ht.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Ht.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Ht();
            return Ht.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Ht.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Ht.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Ht.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Ht.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_Potentials";
          }
        }
        class Nt extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Nt.prototype.gidshoppingcart || t.Sg(Nt.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Nt.sm_m ||
                (Nt.sm_m = {
                  proto: Nt,
                  fields: {
                    gidshoppingcart: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              Nt.sm_m
            );
          }
          static MBF() {
            return Nt.sm_mbf || (Nt.sm_mbf = t.w0(Nt.M())), Nt.sm_mbf;
          }
          toObject(r = !1) {
            return Nt.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Nt.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Nt.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Nt();
            return Nt.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Nt.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Nt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Nt.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Nt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_GetContents_Request";
          }
        }
        class Y extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Y.prototype.lineitems || t.Sg(Y.M()),
              c.Message.initialize(this, r, 0, -1, [1, 2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Y.sm_m ||
                (Y.sm_m = {
                  proto: Y,
                  fields: {
                    lineitems: { n: 1, c: St, r: !0, q: !0 },
                    treeview: { n: 2, c: Sr, r: !0, q: !0 },
                    potentials: { n: 3, c: Ht },
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
            let i = new (a().BinaryReader)(r),
              e = new Y();
            return Y.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Y.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Y.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Y.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Y.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_Contents";
          }
        }
        class kt extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              kt.prototype.gidshoppingcart || t.Sg(kt.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              kt.sm_m ||
                (kt.sm_m = {
                  proto: kt,
                  fields: {
                    gidshoppingcart: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    contents: { n: 2, c: Y },
                    time_created: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    merged_into_account_cart: {
                      n: 4,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    steamid_requester: {
                      n: 5,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    purchase_request_id: {
                      n: 6,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              kt.sm_m
            );
          }
          static MBF() {
            return kt.sm_mbf || (kt.sm_mbf = t.w0(kt.M())), kt.sm_mbf;
          }
          toObject(r = !1) {
            return kt.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(kt.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(kt.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new kt();
            return kt.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(kt.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return kt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(kt.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              kt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_GetContents_Response";
          }
        }
        class Et extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Et.prototype.gidshoppingcart || t.Sg(Et.M()),
              c.Message.initialize(this, r, 0, -1, [4], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Et.sm_m ||
                (Et.sm_m = {
                  proto: Et,
                  fields: {
                    gidshoppingcart: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    browserid: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    cart_items: { n: 4, c: Ir, r: !0, q: !0 },
                    store_country_code: {
                      n: 5,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    beta_mode: {
                      n: 6,
                      d: !1,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              Et.sm_m
            );
          }
          static MBF() {
            return Et.sm_mbf || (Et.sm_mbf = t.w0(Et.M())), Et.sm_mbf;
          }
          toObject(r = !1) {
            return Et.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Et.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Et.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Et();
            return Et.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Et.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Et.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Et.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Et.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_AddPackages_Request";
          }
        }
        class Ft extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ft.prototype.gidshoppingcart || t.Sg(Ft.M()),
              c.Message.initialize(this, r, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ft.sm_m ||
                (Ft.sm_m = {
                  proto: Ft,
                  fields: {
                    gidshoppingcart: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    contents: { n: 2, c: Y },
                    result_details: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: t.qM.readUint32,
                      pbr: t.qM.readPackedUint32,
                      bw: t.gp.writeRepeatedUint32,
                    },
                  },
                }),
              Ft.sm_m
            );
          }
          static MBF() {
            return Ft.sm_mbf || (Ft.sm_mbf = t.w0(Ft.M())), Ft.sm_mbf;
          }
          toObject(r = !1) {
            return Ft.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Ft.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Ft.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Ft();
            return Ft.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Ft.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Ft.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Ft.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Ft.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_AddPackages_Response";
          }
        }
        class $t extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              $t.prototype.gidshoppingcart || t.Sg($t.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $t.sm_m ||
                ($t.sm_m = {
                  proto: $t,
                  fields: {
                    gidshoppingcart: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    gidlineitem: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    quantity: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              $t.sm_m
            );
          }
          static MBF() {
            return $t.sm_mbf || ($t.sm_mbf = t.w0($t.M())), $t.sm_mbf;
          }
          toObject(r = !1) {
            return $t.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT($t.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq($t.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new $t();
            return $t.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj($t.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return $t.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0($t.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              $t.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_UpdatePackageQuantity_Request";
          }
        }
        class Qt extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Qt.prototype.gidshoppingcart || t.Sg(Qt.M()),
              c.Message.initialize(this, r, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Qt.sm_m ||
                (Qt.sm_m = {
                  proto: Qt,
                  fields: {
                    gidshoppingcart: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    contents: { n: 2, c: Y },
                    result_details: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: t.qM.readUint32,
                      pbr: t.qM.readPackedUint32,
                      bw: t.gp.writeRepeatedUint32,
                    },
                  },
                }),
              Qt.sm_m
            );
          }
          static MBF() {
            return Qt.sm_mbf || (Qt.sm_mbf = t.w0(Qt.M())), Qt.sm_mbf;
          }
          toObject(r = !1) {
            return Qt.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Qt.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Qt.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Qt();
            return Qt.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Qt.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Qt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Qt.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Qt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_UpdatePackageQuantity_Response";
          }
        }
        class Kt extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Kt.prototype.gidshoppingcart || t.Sg(Kt.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Kt.sm_m ||
                (Kt.sm_m = {
                  proto: Kt,
                  fields: {
                    gidshoppingcart: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    bundleid: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    browserid: {
                      n: 3,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    store_country: {
                      n: 5,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    quantity: {
                      n: 6,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    beta_mode: {
                      n: 7,
                      d: !1,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    gift_info: { n: 8, c: D },
                  },
                }),
              Kt.sm_m
            );
          }
          static MBF() {
            return Kt.sm_mbf || (Kt.sm_mbf = t.w0(Kt.M())), Kt.sm_mbf;
          }
          toObject(r = !1) {
            return Kt.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Kt.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Kt.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Kt();
            return Kt.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Kt.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Kt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Kt.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Kt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_AddBundle_Request";
          }
        }
        class Vt extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Vt.prototype.contents || t.Sg(Vt.M()),
              c.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Vt.sm_m ||
                (Vt.sm_m = {
                  proto: Vt,
                  fields: {
                    contents: { n: 1, c: Y },
                    result_details: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: t.qM.readUint32,
                      pbr: t.qM.readPackedUint32,
                      bw: t.gp.writeRepeatedUint32,
                    },
                  },
                }),
              Vt.sm_m
            );
          }
          static MBF() {
            return Vt.sm_mbf || (Vt.sm_mbf = t.w0(Vt.M())), Vt.sm_mbf;
          }
          toObject(r = !1) {
            return Vt.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Vt.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Vt.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Vt();
            return Vt.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Vt.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Vt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Vt.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Vt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_AddBundle_Response";
          }
        }
        class Yt extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Yt.prototype.gidshoppingcart || t.Sg(Yt.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Yt.sm_m ||
                (Yt.sm_m = {
                  proto: Yt,
                  fields: {
                    gidshoppingcart: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    gidlineitem: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    gift_info: { n: 3, c: D },
                  },
                }),
              Yt.sm_m
            );
          }
          static MBF() {
            return Yt.sm_mbf || (Yt.sm_mbf = t.w0(Yt.M())), Yt.sm_mbf;
          }
          toObject(r = !1) {
            return Yt.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Yt.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Yt.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Yt();
            return Yt.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Yt.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Yt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Yt.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Yt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_ModifyLineItem_Request";
          }
        }
        class Lt extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Lt.prototype.contents || t.Sg(Lt.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Lt.sm_m ||
                (Lt.sm_m = { proto: Lt, fields: { contents: { n: 1, c: Y } } }),
              Lt.sm_m
            );
          }
          static MBF() {
            return Lt.sm_mbf || (Lt.sm_mbf = t.w0(Lt.M())), Lt.sm_mbf;
          }
          toObject(r = !1) {
            return Lt.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Lt.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Lt.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Lt();
            return Lt.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Lt.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Lt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Lt.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Lt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_ModifyLineItem_Response";
          }
        }
        class Xt extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Xt.prototype.gidshoppingcart || t.Sg(Xt.M()),
              c.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Xt.sm_m ||
                (Xt.sm_m = {
                  proto: Xt,
                  fields: {
                    gidshoppingcart: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    gidlineitems: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: t.qM.readUint64String,
                      pbr: t.qM.readPackedUint64String,
                      bw: t.gp.writeRepeatedUint64String,
                    },
                    browserid: {
                      n: 3,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              Xt.sm_m
            );
          }
          static MBF() {
            return Xt.sm_mbf || (Xt.sm_mbf = t.w0(Xt.M())), Xt.sm_mbf;
          }
          toObject(r = !1) {
            return Xt.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Xt.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Xt.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Xt();
            return Xt.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Xt.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Xt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Xt.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Xt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_RemoveLineItems_Request";
          }
        }
        class Zt extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Zt.prototype.contents || t.Sg(Zt.M()),
              c.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Zt.sm_m ||
                (Zt.sm_m = {
                  proto: Zt,
                  fields: {
                    contents: { n: 1, c: Y },
                    result_details: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: t.qM.readUint32,
                      pbr: t.qM.readPackedUint32,
                      bw: t.gp.writeRepeatedUint32,
                    },
                  },
                }),
              Zt.sm_m
            );
          }
          static MBF() {
            return Zt.sm_mbf || (Zt.sm_mbf = t.w0(Zt.M())), Zt.sm_mbf;
          }
          toObject(r = !1) {
            return Zt.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Zt.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Zt.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Zt();
            return Zt.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Zt.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Zt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Zt.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Zt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_RemoveLineItems_Response";
          }
        }
        var hl;
        ((s) => {
          function r(u, B, y) {
            return u.SendMsg(
              "ShoppingCart.CreateNewShoppingCart#1",
              (0, w.I8)(ot, B, y),
              Wt,
              { ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }
          s.CreateNewShoppingCart = r;
          function i(u, B, y) {
            return u.SendMsg(
              "ShoppingCart.GetShoppingCartContents#1",
              (0, w.I8)(Nt, B, y),
              kt,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }
          s.GetShoppingCartContents = i;
          function e(u, B, y) {
            return u.SendMsg(
              "ShoppingCart.AddPackages#1",
              (0, w.I8)(Et, B, y),
              Ft,
              { ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }
          s.AddPackages = e;
          function n(u, B, y) {
            return u.SendMsg(
              "ShoppingCart.UpdatePackageQuantity#1",
              (0, w.I8)($t, B, y),
              Qt,
              { ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }
          s.UpdatePackageQuantity = n;
          function l(u, B, y) {
            return u.SendMsg(
              "ShoppingCart.AddBundle#1",
              (0, w.I8)(Kt, B, y),
              Vt,
              { ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }
          s.AddBundle = l;
          function m(u, B, y) {
            return u.SendMsg(
              "ShoppingCart.ModifyLineItem#1",
              (0, w.I8)(Yt, B, y),
              Lt,
              { ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }
          s.ModifyLineItem = m;
          function f(u, B, y) {
            return u.SendMsg(
              "ShoppingCart.RemoveLineItems#1",
              (0, w.I8)(Xt, B, y),
              Zt,
              { ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }
          s.RemoveLineItems = f;
        })(hl || (hl = {}));
        var Bw = W(117);
        const ks = (s, r) =>
            r === void 0
              ? ["get_family_group_for_user ", s]
              : ["get_family_group_for_user ", s, r],
          Hs = (s) => ["get_family_group", s],
          Is = (s) => ["get_family_history", s],
          Rm = (s) => ["get_users_sharing_device", s],
          Gm = (s) => ["get_shopping_cart_contents", s],
          Cm = (s) => ["recent_playtime_sessions", s],
          _m = (s) => ["get_playtime_summary", s],
          rf = (s, r) => ["get_invite_check_results", s, r];
        function yc(s, r, i) {
          return i
            ? ["get_purchase_requests", s, r, i]
            : r
              ? ["get_purchase_requests", s, r]
              : ["get_purchase_requests", s];
        }
        function L(s, r) {
          if (s != k_EResultOK) throw s;
        }
        const Mc = V.createContext({ staleTimeMs: 1 / 0 });
        function gw(s) {
          const { staleTimeMs: r, children: i } = s,
            e = React.useMemo(() => ({ staleTimeMs: r ?? 3e3 }), [r]);
          return React.createElement(Mc.Provider, { value: e }, i);
        }
        function tf(s = !1) {
          return ef(useActiveAccount(), s);
        }
        function ef(s, r = !1) {
          const i = useActiveServiceTransport(),
            e = useContext(Mc).staleTimeMs;
          return useQuery({
            queryKey: ks(s, r),
            queryFn: async () => {
              const n = CProtoBufMsg.Init(
                FGS.CFamilyGroups_GetFamilyGroupForUser_Request,
              );
              n.Body().set_steamid(s),
                n.Body().set_include_family_group_response(r);
              const l = await FGS.FamilyGroupsService.GetFamilyGroupForUser(
                i,
                n,
              );
              return L(l.GetEResult(), "GetFamilyGroupForUser"), l.Body();
            },
            staleTime: e,
            enabled: !!s,
            placeholderData: s
              ? void 0
              : new FGS.CFamilyGroups_GetFamilyGroupForUser_Response(),
          });
        }
        function sf(s) {
          const r = useActiveServiceTransport(),
            i = useContext(Mc).staleTimeMs;
          return useQuery({
            queryKey: Hs(s),
            queryFn: async () => {
              if (s) {
                const e = CProtoBufMsg.Init(
                  FGS.CFamilyGroups_GetFamilyGroup_Request,
                );
                e.Body().set_family_groupid(s);
                const n = await FGS.FamilyGroupsService.GetFamilyGroup(r, e);
                return L(n.GetEResult(), "GetFamilyGroup"), n.Body();
              } else throw k_EResultNoMatch;
            },
            staleTime: i,
          });
        }
        function ww() {
          const s = useActiveServiceTransport(),
            r = useQueryClient(),
            i = useActiveAccount();
          return useMutation({
            mutationFn: async (e) => {
              const n = CProtoBufMsg.Init(
                FGS.CFamilyGroups_CreateFamilyGroup_Request,
              );
              n.Body().set_name(e);
              const l = await FGS.FamilyGroupsService.CreateFamilyGroup(s, n);
              return L(l.GetEResult(), "CreateFamilyGroup"), l.Body();
            },
            onSuccess: () => {
              r.invalidateQueries({ queryKey: ks(i) });
            },
          });
        }
        function bw(s) {
          const r = useActiveServiceTransport(),
            i = useQueryClient(),
            e = useActiveAccount();
          return useMutation({
            mutationFn: async () => {
              const n = CProtoBufMsg.Init(
                FGS.CFamilyGroups_DeleteFamilyGroup_Request,
              );
              n.Body().set_family_groupid(s);
              const l = await FGS.FamilyGroupsService.DeleteFamilyGroup(r, n);
              return L(l.GetEResult(), "DeleteFamilyGroup"), l.Body();
            },
            onSuccess: () => {
              i.invalidateQueries({ queryKey: ks(e) }),
                i.invalidateQueries({ queryKey: Hs(s) }),
                i.invalidateQueries({ queryKey: Is(s) });
            },
          });
        }
        function zw(s) {
          const r = useActiveServiceTransport(),
            i = useQueryClient();
          return useMutation({
            mutationFn: async (e) => {
              const n = CProtoBufMsg.Init(
                FGS.CFamilyGroups_ModifyFamilyGroupDetails_Request,
              );
              n.Body().set_family_groupid(s), n.Body().set_name(e);
              const l = await FGS.FamilyGroupsService.ModifyFamilyGroupDetails(
                r,
                n,
              );
              return L(l.GetEResult(), "ModifyFamilyGroupDetails"), l.Body();
            },
            onSuccess: () => {
              i.invalidateQueries({ queryKey: Hs(s) }),
                i.invalidateQueries({ queryKey: Is(s) });
            },
          });
        }
        function yw(s, r, i) {
          const e = useActiveServiceTransport(),
            n = useQueryClient();
          return useMutation({
            mutationFn: async () => {
              const l = CProtoBufMsg.Init(
                FGS.CFamilyGroups_InviteToFamilyGroup_Request,
              );
              l.Body().set_family_groupid(s),
                l.Body().set_receiver_steamid(r),
                l.Body().set_receiver_role(i);
              const m = await FGS.FamilyGroupsService.InviteToFamilyGroup(e, l);
              return L(m.GetEResult(), "InviteToFamilyGroup"), m.Body();
            },
            onSuccess: () => {
              n.invalidateQueries({ queryKey: ks(r) }),
                n.invalidateQueries({ queryKey: Hs(s) }),
                n.invalidateQueries({ queryKey: Is(s) });
            },
          });
        }
        function Mw(s) {
          const r = useActiveServiceTransport(),
            i = useActiveAccount(),
            e = useQueryClient();
          return useMutation({
            mutationFn: async () => {
              const n = CProtoBufMsg.Init(
                FGS.CFamilyGroups_JoinFamilyGroup_Request,
              );
              n.Body().set_family_groupid(s);
              const l = await FGS.FamilyGroupsService.JoinFamilyGroup(r, n);
              return L(l.GetEResult(), "JoinFamilyGroup"), l.Body();
            },
            onSuccess: () => {
              e.invalidateQueries({ queryKey: ks(i) }),
                e.invalidateQueries({ queryKey: Hs(s) }),
                e.invalidateQueries({ queryKey: Is(s) });
            },
          });
        }
        function hw(s, r) {
          const i = useActiveServiceTransport(),
            e = useQueryClient();
          return useMutation({
            mutationFn: async () => {
              const n = CProtoBufMsg.Init(
                FGS.CFamilyGroups_CancelFamilyGroupInvite_Request,
              );
              n.Body().set_family_groupid(s), n.Body().set_steamid_to_cancel(r);
              const l = await FGS.FamilyGroupsService.CancelFamilyGroupInvite(
                i,
                n,
              );
              return L(l.GetEResult(), "CancelFamilyGroupInvite"), l.Body();
            },
            onSuccess: () => {
              e.invalidateQueries({ queryKey: ks(r) }),
                e.invalidateQueries({ queryKey: Hs(s) }),
                e.invalidateQueries({ queryKey: Is(s) });
            },
          });
        }
        function Tw(s, r) {
          const i = useActiveServiceTransport(),
            e = useQueryClient();
          return useMutation({
            mutationFn: async () => {
              const n = CProtoBufMsg.Init(
                FGS.CFamilyGroups_RemoveFromFamilyGroup_Request,
              );
              n.Body().set_family_groupid(s), n.Body().set_steamid_to_remove(r);
              const l = await FGS.FamilyGroupsService.RemoveFromFamilyGroup(
                i,
                n,
              );
              return L(l.GetEResult(), "RemoveFromFamilyGroup"), l.Body();
            },
            onSuccess: () => {
              e.invalidateQueries({ queryKey: ks(r) }),
                e.invalidateQueries({ queryKey: Hs(s) }),
                e.invalidateQueries({ queryKey: Is(s) });
            },
          });
        }
        function ow(s) {
          const r = useActiveServiceTransport();
          return useQuery({
            queryKey: Rm(s),
            queryFn: async () => {
              const i = GetCookie("clientsessionid"),
                e = i && BigInt("0x" + i).toString(),
                n = CProtoBufMsg.Init(
                  FGS.CFamilyGroups_GetUsersSharingDevice_Request,
                );
              n.Body().set_family_groupid(s),
                n.Body().set_client_instance_id(e ?? void 0);
              const l = await FGS.FamilyGroupsService.GetUsersSharingDevice(
                r,
                n,
              );
              return L(l.GetEResult(), "GetUsersSharingDevice"), l.Body();
            },
          });
        }
        function Ww(s) {
          const r = useActiveAccount();
          return sf(s)
            .data?.members()
            .find((e) => e.steamid() == r)
            ?.role();
        }
        function jw(s, r) {
          const i = useActiveServiceTransport();
          return useMutation({
            mutationFn: async () => {
              const e = CProtoBufMsg.Init(
                FGS.CFamilyGroups_RequestPurchase_Request,
              );
              e.Body().set_family_groupid(s),
                e.Body().set_use_account_cart(!0),
                e.Body().set_store_country_code(r);
              const n = await FGS.FamilyGroupsService.RequestPurchase(i, e);
              return L(n.GetEResult(), "RequestPurchase"), n.Body();
            },
          });
        }
        function Ow(s, r) {
          const i = useActiveServiceTransport(),
            e = useActiveAccount();
          return useQuery({
            queryKey: yc(s, e),
            queryFn: async () => {
              const n = CProtoBufMsg.Init(
                FGS.CFamilyGroups_GetPurchaseRequests_Request,
              );
              n.Body().set_family_groupid(s),
                r !== void 0 && n.Body().set_rt_include_completed_since(r);
              const l = await FGS.FamilyGroupsService.GetPurchaseRequests(i, n);
              return L(l.GetEResult(), "GetPurchaseRequests"), l.Body();
            },
          });
        }
        function vw(s, r) {
          const i = useActiveServiceTransport(),
            e = useActiveAccount();
          return useQuery({
            queryKey: yc(s, e, r),
            queryFn: async () => {
              const n = CProtoBufMsg.Init(
                FGS.CFamilyGroups_GetPurchaseRequests_Request,
              );
              n.Body().set_family_groupid(s), n.Body().add_request_ids(r);
              const l = await FGS.FamilyGroupsService.GetPurchaseRequests(i, n);
              return L(l.GetEResult(), "GetPurchaseRequests"), l.Body();
            },
            select: (n) =>
              n.toObject().requests?.find(({ request_id: l }) => l === r),
          });
        }
        function Uw(s, r, i) {
          const e = useActiveServiceTransport(),
            n = useQueryClient();
          return useMutation({
            mutationFn: async () => {
              const l = CProtoBufMsg.Init(
                FGS.CFamilyGroups_RespondToRequestedPurchase_Request,
              );
              l.Body().set_family_groupid(s),
                l.Body().set_request_id(r),
                l.Body().set_action(i);
              const m =
                await FGS.FamilyGroupsService.RespondToRequestedPurchase(e, l);
              return L(m.GetEResult(), "RespondToRequestedPurchase"), m.Body();
            },
            onSuccess: () => {
              n.invalidateQueries({ queryKey: yc(s) }),
                n.invalidateQueries({ queryKey: Is(s) });
            },
          });
        }
        const af = (0, V.createContext)({
          errorMessage: null,
          setErrorMessage: (s) => {},
        });
        function nf(s, r) {
          return s;
        }
        var cf = ((s) => (
          (s[(s.k_EFamilyQueryNone = 0)] = "k_EFamilyQueryNone"),
          (s[(s.k_EFamilyQueryLoadFamily = 1)] = "k_EFamilyQueryLoadFamily"),
          (s[(s.k_EFamilyQueryJoinFamily = 2)] = "k_EFamilyQueryJoinFamily"),
          (s[(s.k_EFamilyQueryDeclineInvite = 3)] =
            "k_EFamilyQueryDeclineInvite"),
          (s[(s.k_EFamilyQueryInviteToFamily = 4)] =
            "k_EFamilyQueryInviteToFamily"),
          (s[(s.k_EFamilyQueryCreateFamily = 5)] =
            "k_EFamilyQueryCreateFamily"),
          (s[(s.k_EFamilyQueryDeleteFamily = 6)] =
            "k_EFamilyQueryDeleteFamily"),
          (s[(s.k_EFamilyQueryModifyFamily = 7)] =
            "k_EFamilyQueryModifyFamily"),
          (s[(s.k_EFamilyQueryRemoveFromFamily = 8)] =
            "k_EFamilyQueryRemoveFromFamily"),
          (s[(s.k_EFamilyQueryGetUsersSharingDevice = 9)] =
            "k_EFamilyQueryGetUsersSharingDevice"),
          (s[(s.k_EFamilyQueryPurchaseRequest = 10)] =
            "k_EFamilyQueryPurchaseRequest"),
          (s[(s.k_EFamilyQueryGetPurchaseRequests = 11)] =
            "k_EFamilyQueryGetPurchaseRequests"),
          (s[(s.k_EFamilyQueryDeclinePurchaseRequest = 12)] =
            "k_EFamilyQueryDeclinePurchaseRequest"),
          (s[(s.k_EFamilyQueryLoadHistory = 13)] = "k_EFamilyQueryLoadHistory"),
          (s[(s.k_EFamilyQueryLoadCart = 14)] = "k_EFamilyQueryLoadCart"),
          (s[(s.k_EFamilyQuerySetCooldownOverrides = 15)] =
            "k_EFamilyQuerySetCooldownOverrides"),
          (s[(s.k_EFamilyQueryResendInvite = 16)] =
            "k_EFamilyQueryResendInvite"),
          s
        ))(cf || {});
        const Tl = {
          [x.nO]: "#FamilyManagement_ErrorInternalServerError",
          [x.zi]: "#FamilyManagement_ErrorInternalServerError",
          [x.S7]: "#FamilyManagement_ErrorInternalServerError",
          [x.Te]: "#FamilyManagement_ErrorInternalServerError",
          [x.sW]: "#FamilyManagement_AccessDenied",
          [x.p]: "#FamilyManagement_ErrorNoMatch",
          [x.uN]: "#FamilyManagement_ErrorAccountDisabled",
          [x.$U]: "#FamilyManagement_ErrorNoActiveInvite",
          [x.ZI]: "#FamilyManagement_PartnerAccountCannotJoinAsChild",
          [x.UT]: "#FamilyManagement_ErrorFamilySizeLimitExceeded",
          [x.TE]: "#FamilyManagement_ErrorLimitExceeded",
          [x.B1]: "#FamilyManagement_ErrorAccountActivityLimitExceeded",
          [x.Nb]: "#FamilyManagement_LimitedAccount_CreateFamily",
          [x.h_]: { 5: "#FamilyManagement_RateLimitExceeded_CreateFamily" },
          [x.lG]: {
            5: "#FamilyManagement_RegionLocked_CreateFamily",
            2: "#FamilyManagement_RegionLocked_JoinFamily",
          },
          [x.zL]: { 2: "#FamilyManagement_Household_JoinFamily" },
          [x.iC]: {
            5: "#FamilyManagement_ErrorAccountLimitExceeded_CreateFamily",
            2: "#FamilyManagement_ErrorAccountLimitExceeded_JoinFamily",
            8: "#FamilyManagement_ErrorAccountLimitExceeded_RemoveFromFamily",
          },
          [x.Ze]: {
            2: "#FamilyManagement_ErrorDuplicateRequest_JoinFamily",
            4: "#FamilyManagement_ErrorDuplicateRequest_InviteToFamily",
            8: "#FamilyManagement_ErrorDuplicateRequest_RemoveFromFamily",
          },
          [x.fb]: { 4: "#FamilyManagement_ErrorFailed_NoAdditionalDetails" },
        };
        function lf(s, r, i, e) {
          let n = "";
          if (s in Tl) {
            const l = Tl[s];
            if (typeof l == "string") n = Localize(l, ...e);
            else {
              const m = l;
              i in m && (n = Localize(m[i], ...e));
            }
          }
          return nf(Localize(r, n), s);
        }
        function ol() {
          const { setErrorMessage: s } = useContext(af);
          return { setErrorMessage: s };
        }
        function xw(s, r, i) {
          const { setErrorMessage: e } = ol(),
            { isError: n, error: l } = s,
            m = tf();
          useEffect(() => {
            if (n) {
              const f = l,
                u = [];
              if (
                f === k_EResultLimitExceeded ||
                f === k_EResultAccountActivityLimitExceeded
              ) {
                let B;
                m.isSuccess &&
                  m.data &&
                  (B = m.data.cooldown_seconds_remaining()),
                  u.push(mf(B));
              }
              e(lf(f, r, i, u));
            }
          }, [e, n, l, r, i, m.isSuccess, m.data]);
        }
        function mf(s) {
          if (!s) return Localize("#FamilyManagement_LoadingPlaceholder");
          const r = {
            month: "long",
            day: "numeric",
            year: "numeric",
            weekday: void 0,
          };
          return LocalizeDateHumanReadable(Date.now() / 1e3 + s, r);
        }
        function Iw(s, r) {
          const { setErrorMessage: i } = ol();
          useEffect(() => {
            s.isError && i(Localize(r));
          }, [i, s.isError, r]);
        }
        function Sw(s) {
          const r = useActiveServiceTransport();
          return useQuery({
            queryKey: Is(s),
            queryFn: async () => {
              const i = CProtoBufMsg.Init(
                FGS.CFamilyGroups_GetChangeLog_Request,
              );
              i.Body().set_family_groupid(s);
              const e = await FGS.FamilyGroupsService.GetChangeLog(r, i);
              return (
                L(e.GetEResult(), "GetFamilyGroupChangeLog"), e.Body().changes()
              );
            },
            staleTime: 0,
          });
        }
        function Hw(s) {
          const r = useActiveServiceTransport();
          return useQuery({
            queryKey: Gm(s),
            queryFn: async () => {
              const i = CProtoBufMsg.Init(CShoppingCart_GetContents_Request);
              i.Body().set_gidshoppingcart(s);
              const e = await ShoppingCartService.GetShoppingCartContents(r, i);
              return L(e.GetEResult(), "GetShoppingCartContents"), e.Body();
            },
          });
        }
        function Nw(s) {
          const r = useActiveServiceTransport(),
            i = useQueryClient();
          return useMutation({
            mutationFn: async (e) => {
              const n = CProtoBufMsg.Init(
                FGS.CFamilyGroups_SetFamilyCooldownOverrides_Request,
              );
              n.Body().set_family_groupid(s), n.Body().set_cooldown_count(e);
              const l =
                await FGS.FamilyGroupsService.SetFamilyCooldownOverrides(r, n);
              return L(l.GetEResult(), "SetFamilyCooldownOverrides"), l.Body();
            },
            onSuccess: () => {
              i.invalidateQueries({ queryKey: Hs(s) }),
                i.invalidateQueries({ queryKey: Is(s) });
            },
          });
        }
        function ff(s, r) {
          return `${F.TS.STORE_BASE_URL}cart/purchaserequest/${s}/${r}`;
        }
        function kw(s) {
          return `${Config.STORE_BASE_URL}cart/purchaserequested/${s}`;
        }
        function Ew(s, r) {
          const i = useActiveServiceTransport(),
            e = useQueryClient();
          return useMutation({
            mutationFn: async () => {
              const n = CProtoBufMsg.Init(
                FGS.CFamilyGroups_CreateFamilyGroup_Request,
              );
              n.Body().set_steamid(s), n.Body().set_name(r);
              const l = await FGS.FamilyGroupsService.CreateFamilyGroup(i, n);
              return (
                L(l.GetEResult(), "ForceCreateFamilyGroup"),
                l.Body().family_groupid()
              );
            },
            onSuccess: () => {
              e.invalidateQueries({ queryKey: ks(s) });
            },
          });
        }
        function Wl(s, r, i, e) {
          return [
            "get_shared_library_apps",
            s,
            r?.bIncludeOwn,
            r?.bIncludeExcluded,
            r?.bIncludeNonGames,
            r?.for_account_id,
            i,
            e,
          ];
        }
        function Fw(s, r) {
          const i = useActiveAccount(),
            { settings: e, mapAppsAllowed: n } = useParentalSettings(i).data,
            l = useIsCurrentUserParentalLocked(),
            m = useActiveServiceTransport(),
            {
              bIncludeOwn: f,
              bIncludeExcluded: u,
              bIncludeNonGames: B,
              for_account_id: y,
            } = r ?? {},
            T = r?.enabled !== void 0 ? r.enabled : !0,
            I = Wl(s, r, e, l),
            S = (E) => !BIsAppBlocked(E.appid(), l, e, n);
          return useQuery({
            queryKey: I,
            queryFn: async () => {
              const E = CProtoBufMsg.Init(
                FGS.CFamilyGroups_GetSharedLibraryApps_Request,
              );
              if (
                (E.Body().set_family_groupid(s),
                E.Body().set_include_own(f),
                E.Body().set_include_excluded(u),
                E.Body().set_language(Config.LANGUAGE),
                E.Body().set_include_non_games(B),
                y)
              ) {
                const z = CSteamID.InitFromAccountID(y, Config.EUNIVERSE);
                E.Body().set_steamid(z.ConvertTo64BitString());
              }
              const j = await FGS.FamilyGroupsService.GetSharedLibraryApps(
                m,
                E,
              );
              return (
                L(j.GetEResult(), "GetSharedLibraryApps"),
                j
                  .Body()
                  .apps()
                  .filter(S)
                  .map((z) => z.toObject())
              );
            },
            enabled: !!e && T,
            placeholderData: keepPreviousData,
            select: r?.select,
          });
        }
        function $w(s, r) {
          const i = useQueryClient(),
            e = useActiveAccount(),
            { settings: n } = useParentalSettings(e).data ?? {},
            l = useIsCurrentUserParentalLocked(),
            m = Wl(s, r, n, l);
          return useCallback(() => {
            i.invalidateQueries({ queryKey: m });
          }, [i, m]);
        }
        function Xn(s, r) {
          let i = s.sort_as || s.name,
            e = r.sort_as || r.name;
          return stricmp(i, e);
        }
        function jl(s, r) {
          return r.rt_time_acquired - s.rt_time_acquired || Xn(s, r);
        }
        function uf(s, r, i) {
          if (!s && r.length === 0) return !0;
          const e = i.name?.toLocaleLowerCase(),
            n = s.toLocaleLowerCase(),
            l = e?.includes(n) || i.appid?.toString() == n;
          let m = !0;
          if (i.content_descriptors) {
            for (const f of r)
              if (!i.content_descriptors.includes(f)) {
                m = !1;
                break;
              }
          }
          return l && m;
        }
        function Qw(s, r, i, e = []) {
          const n = useMemo(
              () => s?.filter((m) => uf(i, e, m)) || [],
              [s, i, e],
            ),
            l = useCallback(
              (m, f) => {
                let u = Xn;
                switch (r) {
                  case "alpha-asc":
                    u = Xn;
                    break;
                  case "alpha-desc":
                    u = (B, y) => Xn(y, B);
                    break;
                  case "date_acquired-asc":
                    u = (B, y) => jl(y, B);
                    break;
                  case "date_acquired-desc":
                    u = jl;
                    break;
                }
                return u(m, f);
              },
              [r],
            );
          return useMemo(() => n.slice().sort(l), [n, l]);
        }
        function Kw(s, r) {
          const i = useActiveServiceTransport(),
            e = useQueryClient(),
            n = useActiveAccount();
          return useMutation({
            mutationFn: async (l) => {
              const m = CProtoBufMsg.Init(
                FGS.CFamilyGroups_ConfirmJoinFamilyGroup_Request,
              );
              m.Body().set_family_groupid(s),
                m.Body().set_invite_id(r),
                m.Body().set_nonce(l);
              const f = await FGS.FamilyGroupsService.ConfirmJoinFamilyGroup(
                i,
                m,
              );
              return L(f.GetEResult(), "ConfirmJoinFamilyGroup"), f.Body();
            },
            onSuccess: () => {
              e.invalidateQueries({ queryKey: ks(n) }),
                e.invalidateQueries({ queryKey: Hs(s) }),
                e.invalidateQueries({ queryKey: Is(s) });
            },
          });
        }
        function Vw(s, r, i) {
          const e = useActiveServiceTransport(),
            n = useQueryClient();
          return useMutation({
            mutationFn: async () => {
              const l = CProtoBufMsg.Init(
                FGS.CFamilyGroups_ConfirmInviteToFamilyGroup_Request,
              );
              l.Body().set_family_groupid(s),
                l.Body().set_invite_id(r),
                l.Body().set_nonce(i);
              const m =
                await FGS.FamilyGroupsService.ConfirmInviteToFamilyGroup(e, l);
              return L(m.GetEResult(), "ConfirmInviteToFamilyGroup"), m.Body();
            },
            onSuccess: () => {
              n.invalidateQueries({ queryKey: Hs(s) }),
                n.invalidateQueries({ queryKey: Is(s) });
            },
          });
        }
        function Yw(s, r) {
          const i = useActiveServiceTransport();
          return useMutation({
            mutationFn: async () => {
              const e = CProtoBufMsg.Init(
                FGS.CFamilyGroups_ResendInvitationToFamilyGroup_Request,
              );
              e.Body().set_family_groupid(s), e.Body().set_steamid(r);
              const n =
                await FGS.FamilyGroupsService.ResendInvitationToFamilyGroup(
                  i,
                  e,
                );
              return L(n.GetEResult(), "ResendInvitationToFamilyGroup"), n;
            },
          });
        }
        function df(s) {
          let r = [];
          s.sort((e, n) => e.time_start - n.time_start);
          let i = new Map();
          for (const e of s) {
            let n = i.get(e.appid);
            n === void 0
              ? i.set(e.appid, e)
              : e.time_start <= n.time_end
                ? (n.time_end = Math.max(n.time_end, e.time_end))
                : (r.push(n), i.set(e.appid, e));
          }
          for (const e of i.values()) r.push(e);
          return r.sort((e, n) => e.time_start - n.time_start), r;
        }
        function Lw(s) {
          const r = useActiveServiceTransport();
          return useQuery({
            queryKey: Cm(s),
            queryFn: async () => {
              const i = CProtoBufMsg.Init(
                FS.CPlayer_GetRecentPlaytimeSessionsForChild_Request,
              );
              i.Body().set_steamid(s);
              const e =
                await FS.PlayerService.GetRecentPlaytimeSessionsForChild(r, i);
              L(e.GetEResult(), "GetRecentPlaytimeSessionsForChild");
              let n = e.Body().toObject().sessions || [];
              return df(n);
            },
          });
        }
        function Xw(s) {
          const r = useActiveServiceTransport();
          return useQuery({
            queryKey: _m(s),
            queryFn: async () => {
              const i = CProtoBufMsg.Init(
                FGS.CFamilyGroups_GetPlaytimeSummary_Request,
              );
              i.Body().set_family_groupid(s);
              const e = await FGS.FamilyGroupsService.GetPlaytimeSummary(r, i);
              L(e.GetEResult(), "GetPlaytimeSummary");
              let n = e.Body().toObject().entries ?? [];
              n.sort((m, f) => f.seconds_played - m.seconds_played);
              let l = e.Body().toObject().entries_by_owner ?? [];
              return (
                l.sort((m, f) => f.seconds_played - m.seconds_played),
                { borrowed: n, loaned: l }
              );
            },
            enabled: s !== "0",
          });
        }
        function Zw(s) {
          const r = useActiveServiceTransport(),
            i = useActiveAccount(),
            e = useQueryClient();
          return useMutation({
            mutationFn: async () => {
              const n = CProtoBufMsg.Init(
                FGS.CFamilyGroups_UndeleteFamilyGroup_Request,
              );
              n.Body().set_family_groupid(s);
              const l = await FGS.FamilyGroupsService.UndeleteFamilyGroup(r, n);
              return L(l.GetEResult(), "UndeleteFamilyGroup"), l;
            },
            onSuccess: () => {
              e.invalidateQueries({ queryKey: ks(i) }),
                e.invalidateQueries({ queryKey: Hs(s) }),
                e.invalidateQueries({ queryKey: Is(s) });
            },
          });
        }
        function Jw(s, r) {
          const i = useActiveServiceTransport(),
            e = useQueryClient();
          return useMutation({
            mutationFn: async () => {
              const n = CProtoBufMsg.Init(
                FGS.CFamilyGroups_ForceAcceptInvite_Request,
              );
              n.Body().set_family_groupid(s), n.Body().set_steamid(r);
              const l = await FGS.FamilyGroupsService.ForceAcceptInvite(i, n);
              return L(l.GetEResult(), "ForceAcceptInvite"), null;
            },
            onSuccess: () => {
              e.invalidateQueries({ queryKey: ks(r) }),
                e.invalidateQueries({ queryKey: Hs(s) }),
                e.invalidateQueries({ queryKey: Is(s) });
            },
          });
        }
        function Aw(s, r) {
          const i = useActiveServiceTransport();
          return useQuery({
            queryKey: rf(s, r),
            queryFn: async () => {
              const e = CProtoBufMsg.Init(
                FGS.CFamilyGroups_GetInviteCheckResults_Request,
              );
              e.Body().set_family_groupid(s), e.Body().set_steamid(r);
              const n = await FGS.FamilyGroupsService.GetInviteCheckResults(
                i,
                e,
              );
              return (
                L(n.GetEResult(), "GetInviteCheckResults"), n.Body().toObject()
              );
            },
          });
        }
        function Dw(s, r) {
          return s.members().find((i) => i.steamid() == r);
        }
        var js = W(1742);
        const Ol = 0,
          qw = 1,
          pw = 2,
          Pw = 3,
          Rw = 0,
          Bf = 1,
          gf = 2,
          wf = 3,
          bf = 4,
          zf = 5,
          yf = 6;
        function Gw(s) {
          return "unknown EReportedContentNotificationStatus ( " + s + " )";
        }
        class Z extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Z.prototype.data || t.Sg(Z.M()),
              c.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Z.sm_m ||
                (Z.sm_m = {
                  proto: Z,
                  fields: { data: { n: 1, c: Jt, r: !0, q: !0 } },
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
            let i = new (a().BinaryReader)(r),
              e = new Z();
            return Z.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Z.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Z.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Z.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Z.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "AdditionalSubjectData";
          }
        }
        class Jt extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Jt.prototype.key || t.Sg(Jt.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Jt.sm_m ||
                (Jt.sm_m = {
                  proto: Jt,
                  fields: {
                    key: { n: 1, br: t.qM.readString, bw: t.gp.writeString },
                    value: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              Jt.sm_m
            );
          }
          static MBF() {
            return Jt.sm_mbf || (Jt.sm_mbf = t.w0(Jt.M())), Jt.sm_mbf;
          }
          toObject(r = !1) {
            return Jt.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Jt.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Jt.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Jt();
            return Jt.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Jt.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Jt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Jt.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Jt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "AdditionalSubjectData_DataEntry";
          }
        }
        class At extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              At.prototype.report_reason || t.Sg(At.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              At.sm_m ||
                (At.sm_m = {
                  proto: At,
                  fields: {
                    report_reason: {
                      n: 1,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    report_text: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    owner_steamid: {
                      n: 3,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    language: { n: 4, br: t.qM.readInt32, bw: t.gp.writeInt32 },
                    subject_type: {
                      n: 5,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    subject_group_id: {
                      n: 6,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    subject_id: {
                      n: 7,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    additional_subject_data: { n: 8, c: Z },
                    detected_by_automation: {
                      n: 9,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              At.sm_m
            );
          }
          static MBF() {
            return At.sm_mbf || (At.sm_mbf = t.w0(At.M())), At.sm_mbf;
          }
          toObject(r = !1) {
            return At.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(At.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(At.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new At();
            return At.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(At.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return At.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(At.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              At.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_CreateContentReport_Request";
          }
        }
        class Dt extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Dt.prototype.report_id || t.Sg(Dt.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Dt.sm_m ||
                (Dt.sm_m = {
                  proto: Dt,
                  fields: {
                    report_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              Dt.sm_m
            );
          }
          static MBF() {
            return Dt.sm_mbf || (Dt.sm_mbf = t.w0(Dt.M())), Dt.sm_mbf;
          }
          toObject(r = !1) {
            return Dt.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Dt.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Dt.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Dt();
            return Dt.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Dt.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Dt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Dt.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Dt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_CreateContentReport_Response";
          }
        }
        class qt extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              qt.prototype.steamid || t.Sg(qt.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              qt.sm_m ||
                (qt.sm_m = {
                  proto: qt,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    start: { n: 2, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    count: { n: 3, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                  },
                }),
              qt.sm_m
            );
          }
          static MBF() {
            return qt.sm_mbf || (qt.sm_mbf = t.w0(qt.M())), qt.sm_mbf;
          }
          toObject(r = !1) {
            return qt.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(qt.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(qt.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new qt();
            return qt.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(qt.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return qt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(qt.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              qt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetReportsSubmittedByUser_Request";
          }
        }
        class tr extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              tr.prototype.report_id || t.Sg(tr.M()),
              c.Message.initialize(this, r, 0, -1, [23, 24], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              tr.sm_m ||
                (tr.sm_m = {
                  proto: tr,
                  fields: {
                    report_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    reporter_steamid: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    time_reported: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    report_reason: {
                      n: 4,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    report_text: {
                      n: 5,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    subject_type: {
                      n: 6,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    subject_group_id: {
                      n: 7,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    subject_id: {
                      n: 8,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    resolved: { n: 9, br: t.qM.readEnum, bw: t.gp.writeEnum },
                    time_resolved: {
                      n: 10,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    resolver_steamid: {
                      n: 11,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    time_notified: {
                      n: 12,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    additional_subject_data: { n: 13, c: Z },
                    time_disputed: {
                      n: 14,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    dispute_details: {
                      n: 15,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    dispute_resolver_steamid: {
                      n: 16,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    dispute_resolved: {
                      n: 17,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    time_dispute_resolved: {
                      n: 18,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    detected_by_automation: {
                      n: 19,
                      d: !1,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    resolved_by_automation: {
                      n: 20,
                      d: Ol,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    content_moderated_reason: {
                      n: 21,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    dispute_resolved_reason: {
                      n: 22,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    sanctions_applied: { n: 23, c: X, r: !0, q: !0 },
                    sanctions_applied_on_dispute: { n: 24, c: X, r: !0, q: !0 },
                  },
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
            let i = new (a().BinaryReader)(r),
              e = new tr();
            return tr.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(tr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return tr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(tr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              tr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "ContentReport";
          }
        }
        class pt extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              pt.prototype.content_report || t.Sg(pt.M()),
              c.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              pt.sm_m ||
                (pt.sm_m = {
                  proto: pt,
                  fields: {
                    content_report: { n: 1, c: tr, r: !0, q: !0 },
                    total_count: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              pt.sm_m
            );
          }
          static MBF() {
            return pt.sm_mbf || (pt.sm_mbf = t.w0(pt.M())), pt.sm_mbf;
          }
          toObject(r = !1) {
            return pt.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(pt.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(pt.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new pt();
            return pt.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(pt.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return pt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(pt.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              pt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetReportsSubmittedByUser_Response";
          }
        }
        class Pt extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Pt.prototype.steamid || t.Sg(Pt.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Pt.sm_m ||
                (Pt.sm_m = {
                  proto: Pt,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    subject_type: {
                      n: 2,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    subject_group_id: {
                      n: 3,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    subject_id: {
                      n: 4,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              Pt.sm_m
            );
          }
          static MBF() {
            return Pt.sm_mbf || (Pt.sm_mbf = t.w0(Pt.M())), Pt.sm_mbf;
          }
          toObject(r = !1) {
            return Pt.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Pt.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Pt.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Pt();
            return Pt.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Pt.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Pt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Pt.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Pt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetOneReportSubmittedByUser_Request";
          }
        }
        class Rt extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Rt.prototype.content_report || t.Sg(Rt.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Rt.sm_m ||
                (Rt.sm_m = {
                  proto: Rt,
                  fields: { content_report: { n: 1, c: tr } },
                }),
              Rt.sm_m
            );
          }
          static MBF() {
            return Rt.sm_mbf || (Rt.sm_mbf = t.w0(Rt.M())), Rt.sm_mbf;
          }
          toObject(r = !1) {
            return Rt.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Rt.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Rt.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Rt();
            return Rt.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Rt.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Rt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Rt.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Rt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetOneReportSubmittedByUser_Response";
          }
        }
        class Gt extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Gt.prototype.steamid || t.Sg(Gt.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Gt.sm_m ||
                (Gt.sm_m = {
                  proto: Gt,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              Gt.sm_m
            );
          }
          static MBF() {
            return Gt.sm_mbf || (Gt.sm_mbf = t.w0(Gt.M())), Gt.sm_mbf;
          }
          toObject(r = !1) {
            return Gt.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Gt.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Gt.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Gt();
            return Gt.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Gt.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Gt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Gt.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Gt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetReportedSubjectsByOwner_Request";
          }
        }
        class J extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              J.prototype.subject_type || t.Sg(J.M()),
              c.Message.initialize(this, r, 0, -1, [13, 31, 32], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              J.sm_m ||
                (J.sm_m = {
                  proto: J,
                  fields: {
                    subject_type: {
                      n: 1,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    subject_group_id: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    subject_id: {
                      n: 3,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    owner_steam_id: {
                      n: 4,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    language: { n: 5, br: t.qM.readInt32, bw: t.gp.writeInt32 },
                    resolved: { n: 6, br: t.qM.readEnum, bw: t.gp.writeEnum },
                    time_resolved: {
                      n: 7,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    unresolved_report_count: {
                      n: 8,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    oldest_unresolved_report_time: {
                      n: 9,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    resolver_steamid: {
                      n: 10,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    assigned_moderator_steamid: {
                      n: 11,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    time_claimed_by_moderator: {
                      n: 12,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    reports: { n: 13, c: tr, r: !0, q: !0 },
                    additional_subject_data: { n: 14, c: Z },
                    csam_status: {
                      n: 15,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    terrorism_status: {
                      n: 16,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    content_moderated_reason: {
                      n: 17,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    unresolved_dispute_count: {
                      n: 18,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    oldest_unresolved_dispute_time: {
                      n: 19,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    owner_dispute_time: {
                      n: 24,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    owner_dispute_resolved_time: {
                      n: 25,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    owner_dispute_details: {
                      n: 26,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    required_moderator_level: {
                      n: 27,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    resolved_by_automation: {
                      n: 28,
                      d: Ol,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    detected_by_automation: {
                      n: 29,
                      d: !1,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    credible_threat_of_violence_status: {
                      n: 30,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    sanctions_applied: { n: 31, c: X, r: !0, q: !0 },
                    sanctions_applied_after_dispute: {
                      n: 32,
                      c: X,
                      r: !0,
                      q: !0,
                    },
                    decision_reversed: {
                      n: 33,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    reported_content_id: {
                      n: 34,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    coordinates: { n: 35, c: Le },
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
            let i = new (a().BinaryReader)(r),
              e = new J();
            return J.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(J.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return J.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(J.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              J.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "ContentReportSubject";
          }
        }
        class Ct extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ct.prototype.subject || t.Sg(Ct.M()),
              c.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ct.sm_m ||
                (Ct.sm_m = {
                  proto: Ct,
                  fields: { subject: { n: 1, c: J, r: !0, q: !0 } },
                }),
              Ct.sm_m
            );
          }
          static MBF() {
            return Ct.sm_mbf || (Ct.sm_mbf = t.w0(Ct.M())), Ct.sm_mbf;
          }
          toObject(r = !1) {
            return Ct.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Ct.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Ct.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Ct();
            return Ct.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Ct.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Ct.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Ct.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Ct.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetReportedSubjectsByOwner_Response";
          }
        }
        class X extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              X.prototype.sanction || t.Sg(X.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              X.sm_m ||
                (X.sm_m = {
                  proto: X,
                  fields: {
                    sanction: { n: 1, br: t.qM.readEnum, bw: t.gp.writeEnum },
                    days: { n: 2, br: t.qM.readInt32, bw: t.gp.writeInt32 },
                    escalate_to: {
                      n: 3,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
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
            let i = new (a().BinaryReader)(r),
              e = new X();
            return X.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(X.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return X.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(X.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              X.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "ContentReportSubjectSanction";
          }
        }
        class _t extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              _t.prototype.subject_type || t.Sg(_t.M()),
              c.Message.initialize(this, r, 0, -1, [9], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _t.sm_m ||
                (_t.sm_m = {
                  proto: _t,
                  fields: {
                    subject_type: {
                      n: 1,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    subject_group_id: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    subject_id: {
                      n: 3,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    resolution: { n: 4, br: t.qM.readEnum, bw: t.gp.writeEnum },
                    reason: { n: 5, br: t.qM.readEnum, bw: t.gp.writeEnum },
                    note: { n: 6, br: t.qM.readString, bw: t.gp.writeString },
                    resolved_by_automation: {
                      n: 7,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    skip_lock: { n: 8, br: t.qM.readBool, bw: t.gp.writeBool },
                    sanctions_applied: { n: 9, c: X, r: !0, q: !0 },
                  },
                }),
              _t.sm_m
            );
          }
          static MBF() {
            return _t.sm_mbf || (_t.sm_mbf = t.w0(_t.M())), _t.sm_mbf;
          }
          toObject(r = !1) {
            return _t.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(_t.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(_t.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new _t();
            return _t.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(_t.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return _t.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(_t.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              _t.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_ResolveSubject_Request";
          }
        }
        class xa extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return xa.toObject(r, this);
          }
          static toObject(r, i) {
            return r ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(r) {
            return new xa();
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new xa();
            return xa.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return xa.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              xa.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_ResolveSubject_Response";
          }
        }
        class Ia extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Ia.toObject(r, this);
          }
          static toObject(r, i) {
            return r ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(r) {
            return new Ia();
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Ia();
            return Ia.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Ia.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Ia.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetSubjectOverview_Request";
          }
        }
        class re extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              re.prototype.buckets || t.Sg(re.M()),
              c.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              re.sm_m ||
                (re.sm_m = {
                  proto: re,
                  fields: {
                    buckets: { n: 1, c: ie, r: !0, q: !0 },
                    pending_for_any_moderator: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    pending_for_supervisor: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    pending_for_valve: {
                      n: 4,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              re.sm_m
            );
          }
          static MBF() {
            return re.sm_mbf || (re.sm_mbf = t.w0(re.M())), re.sm_mbf;
          }
          toObject(r = !1) {
            return re.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(re.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(re.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new re();
            return re.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(re.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return re.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(re.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              re.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetSubjectOverview_Response";
          }
        }
        class ie extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ie.prototype.subject_type || t.Sg(ie.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ie.sm_m ||
                (ie.sm_m = {
                  proto: ie,
                  fields: {
                    subject_type: {
                      n: 1,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    unresolved_count: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    oldest_unresolved: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    unclaimed_count: {
                      n: 4,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    oldest_disputed: {
                      n: 5,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    disputed_count: {
                      n: 6,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    unclaimed_disputed_count: {
                      n: 7,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    pending_for_any_moderator: {
                      n: 8,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    pending_for_supervisor: {
                      n: 9,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    pending_for_valve: {
                      n: 10,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    oldest_unresolved_for_any_moderator: {
                      n: 11,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    oldest_unresolved_for_supervisor: {
                      n: 12,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    oldest_unresolved_for_valve: {
                      n: 13,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              ie.sm_m
            );
          }
          static MBF() {
            return ie.sm_mbf || (ie.sm_mbf = t.w0(ie.M())), ie.sm_mbf;
          }
          toObject(r = !1) {
            return ie.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(ie.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(ie.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new ie();
            return ie.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(ie.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ie.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(ie.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ie.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetSubjectOverview_Response_Bucket";
          }
        }
        class te extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              te.prototype.subject_type || t.Sg(te.M()),
              c.Message.initialize(this, r, 0, -1, [9], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              te.sm_m ||
                (te.sm_m = {
                  proto: te,
                  fields: {
                    subject_type: {
                      n: 1,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    subject_group_id: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    resolution: { n: 3, br: t.qM.readEnum, bw: t.gp.writeEnum },
                    reason: { n: 4, br: t.qM.readEnum, bw: t.gp.writeEnum },
                    note: { n: 5, br: t.qM.readString, bw: t.gp.writeString },
                    resolved_by_automation: {
                      n: 6,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    sanctions_applied: { n: 9, c: X, r: !0, q: !0 },
                  },
                }),
              te.sm_m
            );
          }
          static MBF() {
            return te.sm_mbf || (te.sm_mbf = t.w0(te.M())), te.sm_mbf;
          }
          toObject(r = !1) {
            return te.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(te.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(te.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new te();
            return te.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(te.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return te.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(te.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              te.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_ResolveSubjectGroup_Request";
          }
        }
        class Sa extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Sa.toObject(r, this);
          }
          static toObject(r, i) {
            return r ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(r) {
            return new Sa();
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Sa();
            return Sa.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Sa.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Sa.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_ResolveSubjectGroup_Response";
          }
        }
        class ee extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ee.prototype.subject_type || t.Sg(ee.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ee.sm_m ||
                (ee.sm_m = {
                  proto: ee,
                  fields: {
                    subject_type: {
                      n: 1,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    subject_group_id: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    subject_id: {
                      n: 3,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    required_level: {
                      n: 4,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    reason: { n: 5, br: t.qM.readEnum, bw: t.gp.writeEnum },
                    note: { n: 6, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              ee.sm_m
            );
          }
          static MBF() {
            return ee.sm_mbf || (ee.sm_mbf = t.w0(ee.M())), ee.sm_mbf;
          }
          toObject(r = !1) {
            return ee.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(ee.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(ee.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new ee();
            return ee.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(ee.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ee.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(ee.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ee.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_EscalateSubject_Request";
          }
        }
        class Ha extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Ha.toObject(r, this);
          }
          static toObject(r, i) {
            return r ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(r) {
            return new Ha();
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Ha();
            return Ha.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Ha.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Ha.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_EscalateSubject_Response";
          }
        }
        class se extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              se.prototype.subject_type || t.Sg(se.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              se.sm_m ||
                (se.sm_m = {
                  proto: se,
                  fields: {
                    subject_type: {
                      n: 1,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    subject_group_id: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    subject_id: {
                      n: 3,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    csam_status: {
                      n: 4,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    terrorism_status: {
                      n: 5,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    credible_threat_of_violence_status: {
                      n: 6,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    additional_subject_data: { n: 7, c: Z },
                    owner_dispute_details: {
                      n: 8,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    new_subject_id: {
                      n: 9,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              se.sm_m
            );
          }
          static MBF() {
            return se.sm_mbf || (se.sm_mbf = t.w0(se.M())), se.sm_mbf;
          }
          toObject(r = !1) {
            return se.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(se.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(se.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new se();
            return se.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(se.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return se.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(se.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              se.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_UpdateSubject_Request";
          }
        }
        class Na extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Na.toObject(r, this);
          }
          static toObject(r, i) {
            return r ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(r) {
            return new Na();
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Na();
            return Na.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Na.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Na.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_UpdateSubject_Response";
          }
        }
        class ae extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ae.prototype.subject_type || t.Sg(ae.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ae.sm_m ||
                (ae.sm_m = {
                  proto: ae,
                  fields: {
                    subject_type: {
                      n: 1,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    subject_group_id: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    additional_subject_data: { n: 3, c: Z },
                    new_subject_group_id: {
                      n: 4,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              ae.sm_m
            );
          }
          static MBF() {
            return ae.sm_mbf || (ae.sm_mbf = t.w0(ae.M())), ae.sm_mbf;
          }
          toObject(r = !1) {
            return ae.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(ae.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(ae.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new ae();
            return ae.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(ae.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ae.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(ae.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ae.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_UpdateSubjectGroup_Request";
          }
        }
        class ka extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return ka.toObject(r, this);
          }
          static toObject(r, i) {
            return r ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(r) {
            return new ka();
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new ka();
            return ka.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ka.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ka.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_UpdateSubjectGroup_Response";
          }
        }
        class ne extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ne.prototype.report_id || t.Sg(ne.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ne.sm_m ||
                (ne.sm_m = {
                  proto: ne,
                  fields: {
                    report_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    details: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    subject_type: {
                      n: 3,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    subject_group_id: {
                      n: 4,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    subject_id: {
                      n: 5,
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
          toObject(r = !1) {
            return ne.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(ne.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(ne.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new ne();
            return ne.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(ne.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ne.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(ne.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ne.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_DisputeModerationForReport_Request";
          }
        }
        class Ea extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Ea.toObject(r, this);
          }
          static toObject(r, i) {
            return r ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(r) {
            return new Ea();
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Ea();
            return Ea.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Ea.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Ea.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_DisputeModerationForReport_Response";
          }
        }
        class ce extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ce.prototype.subject_type || t.Sg(ce.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ce.sm_m ||
                (ce.sm_m = {
                  proto: ce,
                  fields: {
                    subject_type: {
                      n: 1,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    subject_group_id: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    subject_id: {
                      n: 3,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    details: {
                      n: 4,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    steamid: {
                      n: 5,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              ce.sm_m
            );
          }
          static MBF() {
            return ce.sm_mbf || (ce.sm_mbf = t.w0(ce.M())), ce.sm_mbf;
          }
          toObject(r = !1) {
            return ce.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(ce.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(ce.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new ce();
            return ce.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(ce.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ce.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(ce.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ce.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_DisputeModerationForSubject_Request";
          }
        }
        class Hr extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Hr.prototype.subject_type || t.Sg(Hr.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Hr.sm_m ||
                (Hr.sm_m = {
                  proto: Hr,
                  fields: {
                    subject_type: {
                      n: 1,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    subject_group_id: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    subject_id: {
                      n: 3,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              Hr.sm_m
            );
          }
          static MBF() {
            return Hr.sm_mbf || (Hr.sm_mbf = t.w0(Hr.M())), Hr.sm_mbf;
          }
          toObject(r = !1) {
            return Hr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Hr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Hr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Hr();
            return Hr.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Hr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Hr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Hr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Hr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "ContentReportSubjectKey";
          }
        }
        class le extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              le.prototype.subject_keys || t.Sg(le.M()),
              c.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              le.sm_m ||
                (le.sm_m = {
                  proto: le,
                  fields: { subject_keys: { n: 1, c: Hr, r: !0, q: !0 } },
                }),
              le.sm_m
            );
          }
          static MBF() {
            return le.sm_mbf || (le.sm_mbf = t.w0(le.M())), le.sm_mbf;
          }
          toObject(r = !1) {
            return le.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(le.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(le.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new le();
            return le.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(le.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return le.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(le.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              le.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_DisputeModerationForSubject_Response";
          }
        }
        class me extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              me.prototype.subject_type || t.Sg(me.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              me.sm_m ||
                (me.sm_m = {
                  proto: me,
                  fields: {
                    subject_type: {
                      n: 1,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    subject_group_id: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    subject_id: {
                      n: 3,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              me.sm_m
            );
          }
          static MBF() {
            return me.sm_mbf || (me.sm_mbf = t.w0(me.M())), me.sm_mbf;
          }
          toObject(r = !1) {
            return me.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(me.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(me.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new me();
            return me.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(me.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return me.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(me.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              me.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetContentReportSubject_Request";
          }
        }
        class fe extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              fe.prototype.subject || t.Sg(fe.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              fe.sm_m ||
                (fe.sm_m = { proto: fe, fields: { subject: { n: 1, c: J } } }),
              fe.sm_m
            );
          }
          static MBF() {
            return fe.sm_mbf || (fe.sm_mbf = t.w0(fe.M())), fe.sm_mbf;
          }
          toObject(r = !1) {
            return fe.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(fe.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(fe.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new fe();
            return fe.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(fe.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return fe.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(fe.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              fe.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetContentReportSubject_Response";
          }
        }
        class ue extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ue.prototype.subject_type || t.Sg(ue.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ue.sm_m ||
                (ue.sm_m = {
                  proto: ue,
                  fields: {
                    subject_type: {
                      n: 1,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    subject_group_id: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              ue.sm_m
            );
          }
          static MBF() {
            return ue.sm_mbf || (ue.sm_mbf = t.w0(ue.M())), ue.sm_mbf;
          }
          toObject(r = !1) {
            return ue.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(ue.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(ue.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new ue();
            return ue.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(ue.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ue.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(ue.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ue.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetContentReportSubjectGroup_Request";
          }
        }
        class de extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              de.prototype.subjects || t.Sg(de.M()),
              c.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              de.sm_m ||
                (de.sm_m = {
                  proto: de,
                  fields: { subjects: { n: 1, c: J, r: !0, q: !0 } },
                }),
              de.sm_m
            );
          }
          static MBF() {
            return de.sm_mbf || (de.sm_mbf = t.w0(de.M())), de.sm_mbf;
          }
          toObject(r = !1) {
            return de.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(de.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(de.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new de();
            return de.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(de.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return de.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(de.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              de.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetContentReportSubjectGroup_Response";
          }
        }
        class Be extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Be.prototype.steamid || t.Sg(Be.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Be.sm_m ||
                (Be.sm_m = {
                  proto: Be,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    rtime_cooldown_ends: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    acquit_unresolved_reports: {
                      n: 3,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              Be.sm_m
            );
          }
          static MBF() {
            return Be.sm_mbf || (Be.sm_mbf = t.w0(Be.M())), Be.sm_mbf;
          }
          toObject(r = !1) {
            return Be.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Be.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Be.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Be();
            return Be.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Be.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Be.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Be.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Be.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_UpdateReporterCooldown_Request";
          }
        }
        class Fa extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Fa.toObject(r, this);
          }
          static toObject(r, i) {
            return r ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(r) {
            return new Fa();
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Fa();
            return Fa.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Fa.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Fa.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_UpdateReporterCooldown_Response";
          }
        }
        class ge extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ge.prototype.steamid || t.Sg(ge.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ge.sm_m ||
                (ge.sm_m = {
                  proto: ge,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              ge.sm_m
            );
          }
          static MBF() {
            return ge.sm_mbf || (ge.sm_mbf = t.w0(ge.M())), ge.sm_mbf;
          }
          toObject(r = !1) {
            return ge.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(ge.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(ge.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new ge();
            return ge.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(ge.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ge.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(ge.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ge.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetReporterCooldown_Request";
          }
        }
        class we extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              we.prototype.rtime_cooldown_ends || t.Sg(we.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              we.sm_m ||
                (we.sm_m = {
                  proto: we,
                  fields: {
                    rtime_cooldown_ends: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              we.sm_m
            );
          }
          static MBF() {
            return we.sm_mbf || (we.sm_mbf = t.w0(we.M())), we.sm_mbf;
          }
          toObject(r = !1) {
            return we.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(we.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(we.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new we();
            return we.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(we.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return we.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(we.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              we.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetReporterCooldown_Response";
          }
        }
        class be extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              be.prototype.subject_type || t.Sg(be.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              be.sm_m ||
                (be.sm_m = {
                  proto: be,
                  fields: {
                    subject_type: {
                      n: 1,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    subject_group_id: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    subject_id: {
                      n: 3,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    action: { n: 4, br: t.qM.readEnum, bw: t.gp.writeEnum },
                    automated_action: {
                      n: 5,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    additional_json_data: {
                      n: 6,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    actor_steamid: {
                      n: 7,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              be.sm_m
            );
          }
          static MBF() {
            return be.sm_mbf || (be.sm_mbf = t.w0(be.M())), be.sm_mbf;
          }
          toObject(r = !1) {
            return be.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(be.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(be.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new be();
            return be.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(be.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return be.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(be.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              be.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_WriteToAuditLog_Request";
          }
        }
        class $a extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return $a.toObject(r, this);
          }
          static toObject(r, i) {
            return r ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(r) {
            return new $a();
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new $a();
            return $a.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return $a.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              $a.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_WriteToAuditLog_Response";
          }
        }
        class ze extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ze.prototype.subject_type || t.Sg(ze.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ze.sm_m ||
                (ze.sm_m = {
                  proto: ze,
                  fields: {
                    subject_type: {
                      n: 1,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    subject_group_id: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    subject_id: {
                      n: 3,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              ze.sm_m
            );
          }
          static MBF() {
            return ze.sm_mbf || (ze.sm_mbf = t.w0(ze.M())), ze.sm_mbf;
          }
          toObject(r = !1) {
            return ze.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(ze.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(ze.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new ze();
            return ze.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(ze.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ze.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(ze.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ze.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetAuditLog_Request";
          }
        }
        class ye extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ye.prototype.entries || t.Sg(ye.M()),
              c.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ye.sm_m ||
                (ye.sm_m = {
                  proto: ye,
                  fields: { entries: { n: 1, c: Me, r: !0, q: !0 } },
                }),
              ye.sm_m
            );
          }
          static MBF() {
            return ye.sm_mbf || (ye.sm_mbf = t.w0(ye.M())), ye.sm_mbf;
          }
          toObject(r = !1) {
            return ye.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(ye.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(ye.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new ye();
            return ye.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(ye.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ye.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(ye.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ye.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetAuditLog_Response";
          }
        }
        class Me extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Me.prototype.timestamp || t.Sg(Me.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Me.sm_m ||
                (Me.sm_m = {
                  proto: Me,
                  fields: {
                    timestamp: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    actor_steamid: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    automated_action: {
                      n: 3,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    action: { n: 4, br: t.qM.readEnum, bw: t.gp.writeEnum },
                    additional_json_data: {
                      n: 5,
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
          toObject(r = !1) {
            return Me.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Me.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Me.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Me();
            return Me.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Me.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Me.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Me.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Me.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetAuditLog_Response_AuditLogEntry";
          }
        }
        class he extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              he.prototype.steamid || t.Sg(he.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              he.sm_m ||
                (he.sm_m = {
                  proto: he,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              he.sm_m
            );
          }
          static MBF() {
            return he.sm_mbf || (he.sm_mbf = t.w0(he.M())), he.sm_mbf;
          }
          toObject(r = !1) {
            return he.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(he.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(he.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new he();
            return he.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(he.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return he.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(he.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              he.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetModeratorPreferences_Request";
          }
        }
        class Te extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Te.prototype.preferred_level || t.Sg(Te.M()),
              c.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Te.sm_m ||
                (Te.sm_m = {
                  proto: Te,
                  fields: {
                    preferred_level: {
                      n: 1,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    enabled_subject_types: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: t.qM.readEnum,
                      pbr: t.qM.readPackedEnum,
                      bw: t.gp.writeRepeatedEnum,
                    },
                  },
                }),
              Te.sm_m
            );
          }
          static MBF() {
            return Te.sm_mbf || (Te.sm_mbf = t.w0(Te.M())), Te.sm_mbf;
          }
          toObject(r = !1) {
            return Te.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Te.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Te.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Te();
            return Te.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Te.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Te.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Te.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Te.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetModeratorPreferences_Response";
          }
        }
        class oe extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              oe.prototype.preferred_level || t.Sg(oe.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              oe.sm_m ||
                (oe.sm_m = {
                  proto: oe,
                  fields: {
                    preferred_level: {
                      n: 1,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    enabled_subject_types: { n: 2, c: We },
                  },
                }),
              oe.sm_m
            );
          }
          static MBF() {
            return oe.sm_mbf || (oe.sm_mbf = t.w0(oe.M())), oe.sm_mbf;
          }
          toObject(r = !1) {
            return oe.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(oe.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(oe.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new oe();
            return oe.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(oe.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return oe.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(oe.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              oe.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_SetModeratorPreferences_Request";
          }
        }
        class We extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              We.prototype.subject_types || t.Sg(We.M()),
              c.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              We.sm_m ||
                (We.sm_m = {
                  proto: We,
                  fields: {
                    subject_types: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: t.qM.readEnum,
                      pbr: t.qM.readPackedEnum,
                      bw: t.gp.writeRepeatedEnum,
                    },
                  },
                }),
              We.sm_m
            );
          }
          static MBF() {
            return We.sm_mbf || (We.sm_mbf = t.w0(We.M())), We.sm_mbf;
          }
          toObject(r = !1) {
            return We.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(We.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(We.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new We();
            return We.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(We.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return We.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(We.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              We.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_SetModeratorPreferences_Request_SubjectTypeList";
          }
        }
        class Qa extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Qa.toObject(r, this);
          }
          static toObject(r, i) {
            return r ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(r) {
            return new Qa();
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Qa();
            return Qa.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Qa.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Qa.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_SetModeratorPreferences_Response";
          }
        }
        class je extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              je.prototype.steamid || t.Sg(je.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              je.sm_m ||
                (je.sm_m = {
                  proto: je,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    rt_start: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              je.sm_m
            );
          }
          static MBF() {
            return je.sm_mbf || (je.sm_mbf = t.w0(je.M())), je.sm_mbf;
          }
          toObject(r = !1) {
            return je.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(je.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(je.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new je();
            return je.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(je.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return je.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(je.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              je.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetModeratorActivity_Request";
          }
        }
        class Oe extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Oe.prototype.activities || t.Sg(Oe.M()),
              c.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Oe.sm_m ||
                (Oe.sm_m = {
                  proto: Oe,
                  fields: { activities: { n: 1, c: ve, r: !0, q: !0 } },
                }),
              Oe.sm_m
            );
          }
          static MBF() {
            return Oe.sm_mbf || (Oe.sm_mbf = t.w0(Oe.M())), Oe.sm_mbf;
          }
          toObject(r = !1) {
            return Oe.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Oe.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Oe.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Oe();
            return Oe.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Oe.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Oe.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Oe.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Oe.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetModeratorActivity_Response";
          }
        }
        class ve extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ve.prototype.subject_type || t.Sg(ve.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ve.sm_m ||
                (ve.sm_m = {
                  proto: ve,
                  fields: {
                    subject_type: {
                      n: 1,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    subject_group_id: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    subject_id: {
                      n: 3,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    timestamp: {
                      n: 4,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    action: { n: 5, br: t.qM.readEnum, bw: t.gp.writeEnum },
                    json_data: {
                      n: 6,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              ve.sm_m
            );
          }
          static MBF() {
            return ve.sm_mbf || (ve.sm_mbf = t.w0(ve.M())), ve.sm_mbf;
          }
          toObject(r = !1) {
            return ve.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(ve.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(ve.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new ve();
            return ve.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(ve.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ve.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(ve.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ve.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetModeratorActivity_Response_ModerationActivity";
          }
        }
        class Ue extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ue.prototype.rtime_start_date || t.Sg(Ue.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ue.sm_m ||
                (Ue.sm_m = {
                  proto: Ue,
                  fields: {
                    rtime_start_date: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    rtime_end_date: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    subject_type: {
                      n: 3,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                  },
                }),
              Ue.sm_m
            );
          }
          static MBF() {
            return Ue.sm_mbf || (Ue.sm_mbf = t.w0(Ue.M())), Ue.sm_mbf;
          }
          toObject(r = !1) {
            return Ue.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Ue.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Ue.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Ue();
            return Ue.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Ue.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Ue.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Ue.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Ue.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetDailyModerationStatistics_Request";
          }
        }
        class xe extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              xe.prototype.stats || t.Sg(xe.M()),
              c.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              xe.sm_m ||
                (xe.sm_m = {
                  proto: xe,
                  fields: { stats: { n: 2, c: Ie, r: !0, q: !0 } },
                }),
              xe.sm_m
            );
          }
          static MBF() {
            return xe.sm_mbf || (xe.sm_mbf = t.w0(xe.M())), xe.sm_mbf;
          }
          toObject(r = !1) {
            return xe.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(xe.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(xe.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new xe();
            return xe.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(xe.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return xe.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(xe.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              xe.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetDailyModerationStatistics_Response";
          }
        }
        class Ie extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ie.prototype.rtime_date || t.Sg(Ie.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ie.sm_m ||
                (Ie.sm_m = {
                  proto: Ie,
                  fields: {
                    rtime_date: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    times_unresolved: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    times_resolved: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              Ie.sm_m
            );
          }
          static MBF() {
            return Ie.sm_mbf || (Ie.sm_mbf = t.w0(Ie.M())), Ie.sm_mbf;
          }
          toObject(r = !1) {
            return Ie.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Ie.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Ie.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Ie();
            return Ie.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Ie.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Ie.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Ie.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Ie.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetDailyModerationStatistics_Response_DayStatistics";
          }
        }
        class Se extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Se.prototype.subject_type || t.Sg(Se.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Se.sm_m ||
                (Se.sm_m = {
                  proto: Se,
                  fields: {
                    subject_type: {
                      n: 1,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    count: { n: 2, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                  },
                }),
              Se.sm_m
            );
          }
          static MBF() {
            return Se.sm_mbf || (Se.sm_mbf = t.w0(Se.M())), Se.sm_mbf;
          }
          toObject(r = !1) {
            return Se.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Se.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Se.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Se();
            return Se.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Se.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Se.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Se.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Se.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetOldestUnresolvedSubjects_Request";
          }
        }
        class He extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              He.prototype.subjects || t.Sg(He.M()),
              c.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              He.sm_m ||
                (He.sm_m = {
                  proto: He,
                  fields: { subjects: { n: 1, c: Ne, r: !0, q: !0 } },
                }),
              He.sm_m
            );
          }
          static MBF() {
            return He.sm_mbf || (He.sm_mbf = t.w0(He.M())), He.sm_mbf;
          }
          toObject(r = !1) {
            return He.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(He.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(He.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new He();
            return He.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(He.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return He.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(He.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              He.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetOldestUnresolvedSubjects_Response";
          }
        }
        class Ne extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ne.prototype.subject_type || t.Sg(Ne.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ne.sm_m ||
                (Ne.sm_m = {
                  proto: Ne,
                  fields: {
                    subject_type: {
                      n: 1,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    subject_group_id: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    subject_id: {
                      n: 3,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              Ne.sm_m
            );
          }
          static MBF() {
            return Ne.sm_mbf || (Ne.sm_mbf = t.w0(Ne.M())), Ne.sm_mbf;
          }
          toObject(r = !1) {
            return Ne.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Ne.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Ne.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Ne();
            return Ne.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Ne.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Ne.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Ne.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Ne.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetOldestUnresolvedSubjects_Response_Subject";
          }
        }
        class ke extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ke.prototype.steamid || t.Sg(ke.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ke.sm_m ||
                (ke.sm_m = {
                  proto: ke,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              ke.sm_m
            );
          }
          static MBF() {
            return ke.sm_mbf || (ke.sm_mbf = t.w0(ke.M())), ke.sm_mbf;
          }
          toObject(r = !1) {
            return ke.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(ke.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(ke.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new ke();
            return ke.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(ke.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ke.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(ke.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ke.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetReporterStats_Request";
          }
        }
        class Ee extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ee.prototype.total_reports || t.Sg(Ee.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ee.sm_m ||
                (Ee.sm_m = {
                  proto: Ee,
                  fields: {
                    total_reports: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    total_acquitted_reports: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    reports_in_last_week: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    acquitted_reports_in_last_week: {
                      n: 4,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              Ee.sm_m
            );
          }
          static MBF() {
            return Ee.sm_mbf || (Ee.sm_mbf = t.w0(Ee.M())), Ee.sm_mbf;
          }
          toObject(r = !1) {
            return Ee.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Ee.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Ee.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Ee();
            return Ee.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Ee.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Ee.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Ee.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Ee.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetReporterStats_Response";
          }
        }
        class Fe extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Fe.prototype.subject_type || t.Sg(Fe.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Fe.sm_m ||
                (Fe.sm_m = {
                  proto: Fe,
                  fields: {
                    subject_type: {
                      n: 1,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    moderator_level: {
                      n: 2,
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
          toObject(r = !1) {
            return Fe.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Fe.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Fe.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Fe();
            return Fe.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Fe.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Fe.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Fe.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Fe.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_ClaimBatch_Request";
          }
        }
        class $e extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              $e.prototype.subjects || t.Sg($e.M()),
              c.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $e.sm_m ||
                ($e.sm_m = {
                  proto: $e,
                  fields: { subjects: { n: 1, c: J, r: !0, q: !0 } },
                }),
              $e.sm_m
            );
          }
          static MBF() {
            return $e.sm_mbf || ($e.sm_mbf = t.w0($e.M())), $e.sm_mbf;
          }
          toObject(r = !1) {
            return $e.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT($e.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq($e.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new $e();
            return $e.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj($e.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return $e.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0($e.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              $e.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_ClaimBatch_Response";
          }
        }
        class Qe extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Qe.prototype.steamid || t.Sg(Qe.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Qe.sm_m ||
                (Qe.sm_m = {
                  proto: Qe,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              Qe.sm_m
            );
          }
          static MBF() {
            return Qe.sm_mbf || (Qe.sm_mbf = t.w0(Qe.M())), Qe.sm_mbf;
          }
          toObject(r = !1) {
            return Qe.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Qe.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Qe.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Qe();
            return Qe.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Qe.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Qe.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Qe.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Qe.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetClaimedSubjects_Request";
          }
        }
        class Ke extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ke.prototype.subjects || t.Sg(Ke.M()),
              c.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ke.sm_m ||
                (Ke.sm_m = {
                  proto: Ke,
                  fields: { subjects: { n: 1, c: J, r: !0, q: !0 } },
                }),
              Ke.sm_m
            );
          }
          static MBF() {
            return Ke.sm_mbf || (Ke.sm_mbf = t.w0(Ke.M())), Ke.sm_mbf;
          }
          toObject(r = !1) {
            return Ke.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Ke.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Ke.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Ke();
            return Ke.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Ke.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Ke.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Ke.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Ke.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_GetClaimedSubjects_Response";
          }
        }
        class Ve extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ve.prototype.subjects_to_release || t.Sg(Ve.M()),
              c.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ve.sm_m ||
                (Ve.sm_m = {
                  proto: Ve,
                  fields: {
                    subjects_to_release: { n: 1, c: Hr, r: !0, q: !0 },
                  },
                }),
              Ve.sm_m
            );
          }
          static MBF() {
            return Ve.sm_mbf || (Ve.sm_mbf = t.w0(Ve.M())), Ve.sm_mbf;
          }
          toObject(r = !1) {
            return Ve.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Ve.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Ve.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Ve();
            return Ve.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Ve.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Ve.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Ve.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Ve.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_ReleaseSubjects_Request";
          }
        }
        class Ka extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Ka.toObject(r, this);
          }
          static toObject(r, i) {
            return r ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(r) {
            return new Ka();
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Ka();
            return Ka.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Ka.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Ka.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_ReleaseSubjects_Response";
          }
        }
        class Ye extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ye.prototype.subject_type || t.Sg(Ye.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ye.sm_m ||
                (Ye.sm_m = {
                  proto: Ye,
                  fields: {
                    subject_type: {
                      n: 1,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    subject_group_id: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    subject_id: {
                      n: 3,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              Ye.sm_m
            );
          }
          static MBF() {
            return Ye.sm_mbf || (Ye.sm_mbf = t.w0(Ye.M())), Ye.sm_mbf;
          }
          toObject(r = !1) {
            return Ye.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Ye.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Ye.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Ye();
            return Ye.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Ye.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Ye.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Ye.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Ye.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_SustainModeration_Request";
          }
        }
        class Va extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Va.toObject(r, this);
          }
          static toObject(r, i) {
            return r ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(r) {
            return new Va();
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Va();
            return Va.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Va.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Va.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_SustainModeration_Response";
          }
        }
        class Le extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Le.prototype.subject_type || t.Sg(Le.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Le.sm_m ||
                (Le.sm_m = {
                  proto: Le,
                  fields: {
                    subject_type: {
                      n: 1,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    steamid: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    forum: {
                      n: 3,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    topic: {
                      n: 4,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    comment: {
                      n: 5,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    comment_thread_id: {
                      n: 6,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    sender_account_id: {
                      n: 7,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    chat_message_rtime: {
                      n: 8,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    chat_message_ordinal: {
                      n: 9,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    chat_group_id: {
                      n: 10,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    chat_room_id: {
                      n: 11,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    receiver_account_id: {
                      n: 12,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              Le.sm_m
            );
          }
          static MBF() {
            return Le.sm_mbf || (Le.sm_mbf = t.w0(Le.M())), Le.sm_mbf;
          }
          toObject(r = !1) {
            return Le.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Le.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Le.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Le();
            return Le.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Le.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Le.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Le.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Le.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "ReportedContentCoordinates";
          }
        }
        class Xe extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Xe.prototype.reported_content_id || t.Sg(Xe.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Xe.sm_m ||
                (Xe.sm_m = {
                  proto: Xe,
                  fields: {
                    reported_content_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    report_id: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    dispute_details: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              Xe.sm_m
            );
          }
          static MBF() {
            return Xe.sm_mbf || (Xe.sm_mbf = t.w0(Xe.M())), Xe.sm_mbf;
          }
          toObject(r = !1) {
            return Xe.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Xe.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Xe.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Xe();
            return Xe.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Xe.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Xe.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Xe.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Xe.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_ReporterDisputeModeration_Request";
          }
        }
        class Ya extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Ya.toObject(r, this);
          }
          static toObject(r, i) {
            return r ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(r) {
            return new Ya();
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Ya();
            return Ya.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Ya.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Ya.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_ReporterDisputeModeration_Response";
          }
        }
        var vl;
        ((s) => {
          function r(b, H, N) {
            return b.SendMsg(
              "ContentModeration.ClaimBatch#1",
              (0, w.I8)(Fe, H, N),
              $e,
              { ePrivilege: 5 },
            );
          }
          s.ClaimBatch = r;
          function i(b, H, N) {
            return b.SendMsg(
              "ContentModeration.GetClaimedSubjects#1",
              (0, w.I8)(Qe, H, N),
              Ke,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }
          s.GetClaimedSubjects = i;
          function e(b, H, N) {
            return b.SendMsg(
              "ContentModeration.ReleaseSubjects#1",
              (0, w.I8)(Ve, H, N),
              Ka,
              { ePrivilege: 5 },
            );
          }
          s.ReleaseSubjects = e;
          function n(b, H, N) {
            return b.SendMsg(
              "ContentModeration.CreateContentReport#1",
              (0, w.I8)(At, H, N),
              Dt,
              { ePrivilege: 1 },
            );
          }
          s.CreateContentReport = n;
          function l(b, H, N) {
            return b.SendMsg(
              "ContentModeration.GetReportsSubmittedByUser#1",
              (0, w.I8)(qt, H, N),
              pt,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          s.GetReportsSubmittedByUser = l;
          function m(b, H, N) {
            return b.SendMsg(
              "ContentModeration.GetOneReportSubmittedByUser#1",
              (0, w.I8)(Pt, H, N),
              Rt,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          s.GetOneReportSubmittedByUser = m;
          function f(b, H, N) {
            return b.SendMsg(
              "ContentModeration.GetReportedSubjectsByOwner#1",
              (0, w.I8)(Gt, H, N),
              Ct,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }
          s.GetReportedSubjectsByOwner = f;
          function u(b, H, N) {
            return b.SendMsg(
              "ContentModeration.ResolveSubject#1",
              (0, w.I8)(_t, H, N),
              xa,
              { ePrivilege: 5 },
            );
          }
          s.ResolveSubject = u;
          function B(b, H, N) {
            return b.SendMsg(
              "ContentModeration.ResolveSubjectGroup#1",
              (0, w.I8)(te, H, N),
              Sa,
              { ePrivilege: 5 },
            );
          }
          s.ResolveSubjectGroup = B;
          function y(b, H, N) {
            return b.SendMsg(
              "ContentModeration.GetSubjectOverview#1",
              (0, w.I8)(Ia, H, N),
              re,
              { ePrivilege: 5 },
            );
          }
          s.GetSubjectOverview = y;
          function T(b, H, N) {
            return b.SendMsg(
              "ContentModeration.EscalateSubject#1",
              (0, w.I8)(ee, H, N),
              Ha,
              { ePrivilege: 5 },
            );
          }
          s.EscalateSubject = T;
          function I(b, H, N) {
            return b.SendMsg(
              "ContentModeration.UpdateSubject#1",
              (0, w.I8)(se, H, N),
              Na,
              { ePrivilege: 5 },
            );
          }
          s.UpdateSubject = I;
          function S(b, H, N) {
            return b.SendMsg(
              "ContentModeration.UpdateSubjectGroup#1",
              (0, w.I8)(ae, H, N),
              ka,
              { ePrivilege: 5 },
            );
          }
          s.UpdateSubjectGroup = S;
          function E(b, H, N) {
            return b.SendMsg(
              "ContentModeration.DisputeModerationForReport#1",
              (0, w.I8)(ne, H, N),
              Ea,
              { ePrivilege: 1 },
            );
          }
          s.DisputeModerationForReport = E;
          function j(b, H, N) {
            return b.SendMsg(
              "ContentModeration.DisputeModerationForSubject#1",
              (0, w.I8)(ce, H, N),
              le,
              { ePrivilege: 1 },
            );
          }
          s.DisputeModerationForSubject = j;
          function z(b, H, N) {
            return b.SendMsg(
              "ContentModeration.GetContentReportSubject#1",
              (0, w.I8)(me, H, N),
              fe,
              { ePrivilege: 1 },
            );
          }
          s.GetContentReportSubject = z;
          function g(b, H, N) {
            return b.SendMsg(
              "ContentModeration.GetContentReportSubjectGroup#1",
              (0, w.I8)(ue, H, N),
              de,
              { ePrivilege: 5 },
            );
          }
          s.GetContentReportSubjectGroup = g;
          function O(b, H, N) {
            return b.SendMsg(
              "ContentModeration.UpdateReporterCooldown#1",
              (0, w.I8)(Be, H, N),
              Fa,
              { ePrivilege: 1 },
            );
          }
          s.UpdateReporterCooldown = O;
          function K(b, H, N) {
            return b.SendMsg(
              "ContentModeration.GetReporterCooldown#1",
              (0, w.I8)(ge, H, N),
              we,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          s.GetReporterCooldown = K;
          function vs(b, H, N) {
            return b.SendMsg(
              "ContentModeration.WriteToAuditLog#1",
              (0, w.I8)(be, H, N),
              $a,
              { ePrivilege: 5 },
            );
          }
          s.WriteToAuditLog = vs;
          function Cs(b, H, N) {
            return b.SendMsg(
              "ContentModeration.GetAuditLog#1",
              (0, w.I8)(ze, H, N),
              ye,
              { ePrivilege: 5 },
            );
          }
          s.GetAuditLog = Cs;
          function un(b, H, N) {
            return b.SendMsg(
              "ContentModeration.GetModeratorPreferences#1",
              (0, w.I8)(he, H, N),
              Te,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }
          s.GetModeratorPreferences = un;
          function Pa(b, H, N) {
            return b.SendMsg(
              "ContentModeration.SetModeratorPreferences#1",
              (0, w.I8)(oe, H, N),
              Qa,
              { ePrivilege: 5 },
            );
          }
          s.SetModeratorPreferences = Pa;
          function rn(b, H, N) {
            return b.SendMsg(
              "ContentModeration.GetModeratorActivity#1",
              (0, w.I8)(je, H, N),
              Oe,
              { ePrivilege: 5 },
            );
          }
          s.GetModeratorActivity = rn;
          function tn(b, H, N) {
            return b.SendMsg(
              "ContentModeration.GetDailyModerationStatistics#1",
              (0, w.I8)(Ue, H, N),
              xe,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }
          s.GetDailyModerationStatistics = tn;
          function Ra(b, H, N) {
            return b.SendMsg(
              "ContentModeration.GetOldestUnresolvedSubjects#1",
              (0, w.I8)(Se, H, N),
              He,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }
          s.GetOldestUnresolvedSubjects = Ra;
          function dn(b, H, N) {
            return b.SendMsg(
              "ContentModeration.GetReporterStats#1",
              (0, w.I8)(ke, H, N),
              Ee,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }
          s.GetReporterStats = dn;
          function U(b, H, N) {
            return b.SendMsg(
              "ContentModeration.SustainModeration#1",
              (0, w.I8)(Ye, H, N),
              Va,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }
          s.SustainModeration = U;
          function v(b, H, N) {
            return b.SendMsg(
              "ContentModeration.ReporterDisputeModeration#1",
              (0, w.I8)(Xe, H, N),
              Ya,
              { ePrivilege: 1 },
            );
          }
          s.ReporterDisputeModeration = v;
        })(vl || (vl = {}));
        var Mf = Object.defineProperty,
          hf = Object.getOwnPropertyDescriptor,
          Mn = (s, r, i, e) => {
            for (
              var n = e > 1 ? void 0 : e ? hf(r, i) : r, l = s.length - 1, m;
              l >= 0;
              l--
            )
              (m = s[l]) && (n = (e ? m(r, i, n) : m(n)) || n);
            return e && n && Mf(r, i, n), n;
          };
        const Tf = {
          [dc]: {
            displayNameLoc: "#SteamNotification_HelpRequest_Author",
            titleLoc: "#SteamNotification_HelpRequest_Title",
            bodyLoc: (s) => ({
              locString: "#SteamNotification_HelpRequest_Body",
              params: [s.ticket],
            }),
            link: (s) => F.TS.HELP_BASE_URL + "wizard/HelpRequest/" + s.ticket,
          },
          [uc]: {
            displayNameLoc: "#SteamNotifications_MajorSale",
            titleLoc: (s) => ({ locString: s.title }),
            bodyLoc: (s) =>
              (0, o.Y2)() && s.link.includes("https://store.steampowered.com")
                ? "#SteamNotifications_MajorSale_SteamChina_Title"
                : s.body,
            image: (s) => s.image,
            link: (s) =>
              (0, o.Y2)() && s.link.includes("https://store.steampowered.com")
                ? s.link.replace(
                    "https://store.steampowered.com",
                    F.TS.STORE_BASE_URL,
                  )
                : s.link,
          },
          [tl]: {
            displayNameLoc: (s) => s.display_name,
            titleLoc: (s) => s.title,
            bodyLoc: (s) => s.body,
            image: (s) => s.image,
            link: (s) => s.link,
          },
          [el]: {
            titleLoc: "#SteamNotification_ModeratorMessage_Title",
            link: (s) =>
              F.TS.COMMUNITY_BASE_URL + "my/moderatormessages/" + s.msgid,
          },
          [dl]: {
            displayNameLoc: (s) =>
              s.is_limited_launch
                ? "#Notification_LimitedLaunchInviteTitle"
                : "#Notification_PlaytestInviteTitle",
            titleLoc: (s) =>
              s.is_limited_launch
                ? "#Notification_LimitedLaunchInviteBody"
                : "#Notification_PlaytestInviteBody",
            image: (s) => s.appid,
            link: (s) =>
              F.TS.STORE_BASE_URL + "account/gatedaccess?appid=" + s.appid,
          },
          [Yn]: {
            titleLoc: (s) => {
              switch (s.status) {
                case Bf:
                  return "#Notification_ReportedContentAction_Received";
                case gf:
                  return "#Notification_ReportedContentAction_Sanctioned";
                case wf:
                  return "#Notification_ReportedContentAction_Acquitted";
                case bf:
                  return "#Notification_ReportedContentAction_DisputeReceived";
                case zf:
                  return "#Notification_ReportedContentAction_DisputeSanctioned";
                case yf:
                  return "#Notification_ReportedContentAction_DisputeAcquitted";
                default:
                  return "#Notification_ReportedContentAction_Unknown";
              }
            },
            link: (s) =>
              `${F.TS.COMMUNITY_BASE_URL}my/reportedcontent/${s.subject_type}-${s.subject_group_id}-${s.subject_id}`,
          },
        };
        function Ul(s) {
          if (s !== void 0) return Tf[s];
        }
        function xl(s) {
          return !!Ul(s);
        }
        const of = {
          [al]: {
            steamidAttribute: "inviter",
            titleLoc: "#SteamNotifications_FamilyInviteTitle",
            bodyLoc: "#SteamNotifications_FamilyInviteBody",
            url: (s) =>
              `${F.TS.STORE_BASE_URL}account/familymanagement/join?invitation=${s.familyid}`,
          },
          [sl]: {
            steamidAttribute: "steamid",
            titleLoc: "#SteamNotifications_ParentalFeatureRequestTitle",
            bodyLoc: "#SteamNotifications_ParentalFeatureRequestBody",
            url: () =>
              `${F.TS.STORE_BASE_URL}account/familymanagement?tab=requests`,
          },
          [nl]: {
            steamidAttribute: "requestor_steamid",
            titleLoc: "#SteamNotifications_FamilyPurchaseRequestTitle",
            bodyLoc: "#SteamNotifications_FamilyPurchaseRequestBody",
            url: (s) => ff(s.familyid, s.request_id),
          },
          [ll]: {
            steamidAttribute: "responder_steamid",
            titleLoc: (s) =>
              s.action == zl
                ? "#SteamNotifications_FamilyPurchaseRequestResponseDeclinedTitle"
                : "",
            bodyLoc: (s) =>
              s.action == zl
                ? "#SteamNotifications_FamilyPurchaseRequestDeclinedBody"
                : "",
            url: () =>
              `${F.TS.STORE_BASE_URL}account/familymanagement?tab=requests`,
          },
          [cl]: {
            steamidAttribute: "steamid",
            titleLoc: "#SteamNotifications_ParentalPlaytimeRequestTitle",
            bodyLoc: "#SteamNotifications_ParentalPlaytimeRequestBody",
            url: () =>
              `${F.TS.STORE_BASE_URL}account/familymanagement?tab=requests`,
          },
          [ml]: {
            steamidAttribute: "steamid_approver",
            titleLoc: (s) =>
              s.approved
                ? "#SteamNotifications_ParentalFeatureAccessResponseTitleApproved"
                : "#SteamNotifications_ParentalFeatureAccessResponseTitleDeclined",
            bodyLoc: (s) =>
              s.approved
                ? "#SteamNotifications_ParentalFeatureAccessResponseBodyApproved"
                : "#SteamNotifications_ParentalFeatureAccessResponseBodyDeclined",
            url: () =>
              `${F.TS.STORE_BASE_URL}account/familymanagement?tab=requests`,
          },
          [fl]: {
            steamidAttribute: "steamid_approver",
            titleLoc: (s) =>
              s.approved
                ? "#SteamNotifications_ParentalPlaytimeResponseTitleApproved"
                : "#SteamNotifications_ParentalPlaytimeResponseTitleDeclined",
            bodyLoc: (s) =>
              s.approved
                ? "#SteamNotifications_ParentalPlaytimeResponseBodyApproved"
                : "#SteamNotifications_ParentalPlaytimeResponseBodyDeclined",
            url: () =>
              `${F.TS.STORE_BASE_URL}account/familymanagement?tab=requests`,
          },
        };
        function Il(s) {
          if (s !== void 0) return of[s];
        }
        function Sl(s) {
          return !!Il(s);
        }
        const Wf = [wn, Qn, $n, en, bn, Kn, zn, Vn, ul, Bc, gc];
        function Hl(s) {
          return Wf.findIndex((r) => r == s) != null;
        }
        function jf(s) {
          return s.hidden ? !1 : Of(s.notification_type) && hn(s.body_data);
        }
        function Of(s) {
          return xl(s) || Sl(s) || Hl(s);
        }
        var vf = ((s) => (
          (s[(s.New = 0)] = "New"),
          (s[(s.Update = 1)] = "Update"),
          (s[(s.Remove = 2)] = "Remove"),
          s
        ))(vf || {});
        const Cw = "Test_",
          Uf = 3600 * 48,
          xf = 600,
          Nl = !1,
          hc = new zc.wd("SteamNotificationStore"),
          Ca = hc.Debug,
          _a = hc.Error,
          If = hc.Warning;
        class an {
          constructor() {
            (0, M.Gn)(this);
          }
          m_rgNotificationRollups = [];
          m_summary = Tc();
          m_bLoaded = !1;
          m_nUnviewed = 0;
          m_rgNotifyServerRead = [];
          m_rgNotifyServerHidden = [];
          m_keyNotifyServerRead = "";
          m_keyNotifyServerHidden = "";
          m_steamid;
          m_transport;
          m_rgUnreadNotificationIDs = [];
          m_rgNewRollupIDs = new Map();
          m_rgTestNotifications = [];
          m_currentNotificationsData = null;
          m_strRemoteClientID = "";
          m_eTargetClientType = Bl;
          m_fnOnNotificationCallback = null;
          BHasNotificationsData() {
            return this.m_currentNotificationsData != null;
          }
          setTransport(r) {
            this.m_transport = r;
          }
          RegisterOnNotificationCallback(r) {
            this.m_fnOnNotificationCallback = r;
          }
          SetClientFilters(r, i = Bl) {
            (this.m_strRemoteClientID = r), (this.m_eTargetClientType = i);
          }
          NotifyServerNotificationsRead(r) {
            this.m_rgNotifyServerRead.push(...r), this.UpdateServer();
          }
          NotifyServerNotificationsHidden(r) {
            this.m_rgNotifyServerHidden.push(...r), this.UpdateServer();
          }
          BSendToCallbackAsNew(r) {
            return (
              !r.read &&
              !Yl(r) &&
              !this.m_rgUnreadNotificationIDs.includes(r.notification_id)
            );
          }
          Dev_AddTestNotification(r) {}
          Dev_UpdateTestNotificationReadState(r, i) {
            const e = this.m_rgTestNotifications.findIndex(
              (n) => n.notification_id == r,
            );
            return e !== -1 && this.m_rgTestNotifications[e].read != i
              ? ((this.m_rgTestNotifications[e].read = i), !0)
              : !1;
          }
          UpdateServer() {
            if (this.m_rgNotifyServerRead.length > 0) {
              const r = w.w.Init(br);
              r.Body().set_notification_ids(this.m_rgNotifyServerRead),
                sn.MarkNotificationsRead(this.m_transport, r) &&
                  (this.m_rgNotifyServerRead = []);
            }
            if (this.m_rgNotifyServerHidden.length > 0) {
              const r = w.w.Init(yr);
              r.Body().set_notification_ids(this.m_rgNotifyServerHidden),
                sn.HideNotification(this.m_transport, r) &&
                  (this.m_rgNotifyServerHidden = []);
            }
          }
          MarkItemRead(r, i = !1) {
            let e = this.m_rgNotificationRollups.findIndex(
              (l) => l.item.notification_id == r,
            );
            if (e === -1) {
              i
                ? this.NotifyServerNotificationsRead([r])
                : _a(
                    "Attempted to mark notification read that is not in the notification store",
                  );
              return;
            }
            let n = this.m_rgNotificationRollups[e];
            if (n.item.read) {
              _a("Attempted to mark notification read that is already read");
              return;
            }
            if (((n.item.read = !0), n.rgunread?.length > 0)) {
              this.ReduceNewTotals(n.type, n.rgunread.length);
              let l = [];
              n.rgunread.forEach((m) => {
                l.push(m);
              }),
                n.rgread.push(...n.rgunread),
                (n.rgunread = []),
                this.NotifyServerNotificationsRead(l);
            }
          }
          MarkItemHidden(r) {
            let i = this.m_rgNotificationRollups.findIndex(
              (n) => n.item.notification_id == r,
            );
            if (i === -1) {
              _a(
                "Attempted to mark notification hidden that is not in the notification store",
              );
              return;
            }
            let e = this.m_rgNotificationRollups[i];
            (e.item.hidden = !0),
              e.rgunread?.length > 0 &&
                this.ReduceNewTotals(e.type, e.rgunread?.length),
              this.NotifyServerNotificationsHidden([
                ...e.rgunread,
                ...e.rgread,
              ]);
          }
          ReduceNewTotals(r, i) {
            Vl(this.m_summary, r, -i);
          }
          MarkAllItemsViewed() {
            const r = w.w.Init(zr);
            r.Body().set_remote_client_id(this.m_strRemoteClientID),
              r.Body().set_target_client_type(this.m_eTargetClientType),
              sn.MarkNotificationsViewed(this.m_transport, r),
              (this.m_nUnviewed = 0);
          }
          MarkAllItemsRead(r) {
            let i = [],
              e = [],
              n = 0;
            const l = r ?? this.m_rgNotificationRollups;
            return (
              l.forEach((m, f) => {
                m.rgunread.length > 0 &&
                  (m.rgunread.forEach((u) => {
                    i.push(u);
                  }),
                  e.push(f));
              }),
              i.length > 0 &&
                ((this.m_summary = Object.assign(Tc(), {
                  pending_gifts: this.m_summary.pending_gifts,
                  pending_invites: this.m_summary.pending_invites,
                  pending_family_invites: this.m_summary.pending_family_invites,
                })),
                e.forEach((m) => {
                  let f = l[m];
                  (f.item.read = !0), (f.rgunread = []);
                }),
                this.NotifyServerNotificationsRead(i)),
              i.length + n
            );
          }
          ApplyNotificationsUpdate(r) {
            if (
              (Ca("ApplyNotificationsUpdate", r),
              !r ||
                (!r.notifications?.length &&
                  r.pending_friend_count === void 0 &&
                  r.pending_gift_count === void 0))
            ) {
              Ca("Error: ApplyNotificationsUpdate was called with no data");
              return;
            }
            if (!this.m_currentNotificationsData) {
              Ca(
                "Error: ApplyNotificationsUpdate was called before this.m_currentNotificationsData was set",
              );
              return;
            }
            const i = this.m_currentNotificationsData;
            r.notifications?.forEach((e) => {
              const n = i.notifications.findIndex(
                (l) => l.notification_id == e.notification_id,
              );
              n != -1
                ? Object.assign(i.notifications[n], e)
                : i.notifications.push(e);
            }),
              r.pending_friend_count !== void 0 &&
                (this.m_currentNotificationsData.pending_friend_count =
                  r.pending_friend_count),
              r.pending_gift_count !== void 0 &&
                (this.m_currentNotificationsData.pending_gift_count =
                  r.pending_gift_count),
              r.pending_family_invite_count !== void 0 &&
                (this.m_currentNotificationsData.pending_family_invite_count =
                  r.pending_family_invite_count),
              this.ProcessNotifications();
          }
          ProcessNewNotificationPayload(r) {
            (this.m_currentNotificationsData = JSON.parse(JSON.stringify(r))),
              this.ProcessNotifications();
          }
          ProcessNotifications() {
            let r = [],
              i = Tc(),
              e = 0;
            if (
              (this.m_currentNotificationsData?.notifications?.forEach((n) => {
                this.BExcludeClientTargetedNotification(n) ||
                  (this.m_rgNotifyServerHidden.length > 0 &&
                    this.m_rgNotifyServerHidden.findIndex(
                      (m) => m == n.notification_id,
                    ) !== -1 &&
                    (n.hidden = !0),
                  jf(n) &&
                    (this.m_rgNotifyServerRead.length > 0 &&
                      this.m_rgNotifyServerRead.findIndex(
                        (m) => m == n.notification_id,
                      ) !== -1 &&
                      (n.read = !0),
                    n.read || Vl(i, n.notification_type, 1),
                    n.viewed || e++,
                    this.AddNotificationToRollups(r, n)));
              }),
              r.sort((n, l) => n.timestamp - l.timestamp),
              this.m_fnOnNotificationCallback)
            ) {
              for (const n of r)
                if (n.bSendToCallbackAsNew)
                  this.m_rgNewRollupIDs.set(
                    n.rollup_key,
                    JSON.parse(JSON.stringify(n)),
                  ),
                    this.m_fnOnNotificationCallback(n, 0);
                else if (this.m_rgNewRollupIDs.has(n.rollup_key)) {
                  let l = this.m_rgNewRollupIDs.get(n.rollup_key);
                  (l.item.read != n.item.read ||
                    l.item.viewed != n.item.viewed) &&
                    (this.m_rgNewRollupIDs.set(
                      n.rollup_key,
                      JSON.parse(JSON.stringify(n)),
                    ),
                    this.m_fnOnNotificationCallback(n, 1));
                }
              for (const [n, l] of this.m_rgNewRollupIDs)
                r.findIndex((m) => m.rollup_key == n) == -1 &&
                  (this.m_fnOnNotificationCallback(l, 2),
                  this.m_rgNewRollupIDs.delete(n));
            }
            r.reverse(),
              (i.pending_gifts =
                this.m_currentNotificationsData?.pending_gift_count ?? 0),
              (i.pending_invites =
                this.m_currentNotificationsData?.pending_friend_count ?? 0),
              (i.pending_family_invites =
                this.m_currentNotificationsData?.pending_family_invite_count ??
                0),
              (this.m_rgNotificationRollups = r.slice()),
              (this.m_summary = i),
              (this.m_bLoaded = !0),
              (this.m_nUnviewed = e);
          }
          BExcludeClientTargetedNotification(r) {
            const i = hn(r.body_data);
            return i
              ? i.remote_client_id &&
                this.m_strRemoteClientID != i.remote_client_id
                ? !0
                : !!(
                    i.target_client_types &&
                    !(this.m_eTargetClientType & i.target_client_types)
                  )
              : !1;
          }
          BReplaceRollupItem(r, i) {
            return r.read != i.read
              ? i.read
              : (r.read && i.read) || i.viewed == r.viewed
                ? i.timestamp < r.timestamp
                : !r.viewed && i.viewed
                  ? !0
                  : r.viewed && i.viewed
                    ? i.viewed < r.viewed
                    : !1;
          }
          AddNotificationToRollups(r, i) {
            const e = this.BSendToCallbackAsNew(i);
            e && this.m_rgUnreadNotificationIDs.push(i.notification_id);
            let n = i.notification_type;
            switch (n) {
              case wn:
                {
                  const j = Tn(i);
                  if (!j) return;
                  const z =
                    "comment_" +
                    j.owner_steam_id?.GetAccountID() +
                    "_" +
                    j.forum_id +
                    "_" +
                    j.topic_id;
                  let g = r.findIndex((O) => O.rollup_key == z);
                  if (g == -1)
                    r.push({
                      type: n,
                      rollup_key: z,
                      item: i,
                      rollup_count: 1,
                      timestamp: i.timestamp,
                      rgunread: i.read ? [] : [i.notification_id],
                      rgread: i.read ? [i.notification_id] : [],
                      bSendToCallbackAsNew: e,
                      url: kl(j),
                    });
                  else {
                    let O = r[g];
                    this.BReplaceRollupItem(i, O.item) &&
                      ((!Nl || O.item.read) && (O.url = kl(j)),
                      (O.item = i),
                      (O.timestamp = i.timestamp),
                      (O.bSendToCallbackAsNew = e)),
                      (O.rollup_count = O.rollup_count + 1),
                      i.read
                        ? O.rgread.push(i.notification_id)
                        : O.rgunread.push(i.notification_id);
                  }
                  j.json_data?.app_id &&
                    yn.A.Get().QueueAppRequest(j.json_data.app_id, {
                      include_assets: !0,
                    });
                }
                break;
              case en:
                const l = Tn(i);
                if (l) {
                  const j = "item_" + l.appid;
                  this.AddNotificationToRollupByAppID(r, i, j, n, e, l.appid);
                }
                break;
              case zn:
                const m = Tn(i)?.appid.toString();
                if (m) {
                  const j = "asyncgame_" + m;
                  this.AddNotificationToRollupByAppID(r, i, j, n, e, m);
                }
                break;
              case Yn:
                const f = Tn(i),
                  u = f?.report_id,
                  B = f?.subject_type,
                  y = f?.subject_group_id,
                  T = f?.subject_id,
                  I = `contentreport_${u}`;
                let S = r.findIndex((j) => j.rollup_key == I);
                if (S == -1)
                  r.push({
                    type: n,
                    rollup_key: I,
                    item: i,
                    rollup_count: 1,
                    timestamp: i.timestamp,
                    rgunread: i.read ? [] : [i.notification_id],
                    rgread: i.read ? [i.notification_id] : [],
                    bSendToCallbackAsNew: e,
                    url: `${F.TS.COMMUNITY_BASE_URL}my/reportedcontent/${B}-${y}-${T}`,
                  });
                else {
                  let j = r[S];
                  this.BReplaceRollupItem(i, j.item) &&
                    ((!Nl || j.item.read) &&
                      (j.url = `${F.TS.COMMUNITY_BASE_URL}my/reportedcontent/${B}-${y}-${T}`),
                    (j.item = i),
                    (j.timestamp = i.timestamp),
                    (j.bSendToCallbackAsNew = e)),
                    (j.rollup_count = j.rollup_count + 1),
                    i.read
                      ? j.rgread.push(i.notification_id)
                      : j.rgunread.push(i.notification_id);
                }
                break;
              case bn:
                const E = Tn(i)?.appid;
                E && yn.A.Get().QueueAppRequest(E, { include_assets: !0 });
              default:
                r.push({
                  type: n,
                  rollup_key: i.notification_id,
                  item: i,
                  timestamp: i.timestamp,
                  rgunread: i.read ? [] : [i.notification_id],
                  rgread: i.read ? [i.notification_id] : [],
                  bSendToCallbackAsNew: e,
                });
                break;
            }
          }
          AddNotificationToRollupByAppID(r, i, e, n, l, m) {
            let f = r.findIndex((u) => u.rollup_key == e);
            if (f == -1)
              r.push({
                type: n,
                rollup_key: e,
                item: i,
                rollup_count: 1,
                timestamp: i.timestamp,
                rgunread: i.read ? [] : [i.notification_id],
                rgread: i.read ? [i.notification_id] : [],
                bSendToCallbackAsNew: l,
              });
            else {
              let u = r[f];
              this.BReplaceRollupItem(i, u.item) &&
                ((u.item = i),
                (u.timestamp = i.timestamp),
                (u.bSendToCallbackAsNew = l)),
                (u.rollup_count = u.rollup_count + 1),
                i.read
                  ? u.rgread.push(i.notification_id)
                  : u.rgunread.push(i.notification_id);
            }
            yn.A.Get().QueueAppRequest(parseInt(m), { include_assets: !0 });
          }
        }
        Mn([M.sH], an.prototype, "m_rgNotificationRollups", 2),
          Mn([M.sH], an.prototype, "m_summary", 2),
          Mn([M.sH], an.prototype, "m_bLoaded", 2),
          Mn([M.sH], an.prototype, "m_nUnviewed", 2),
          Mn([M.XI], an.prototype, "ProcessNotifications", 1);
        function Tc() {
          return {
            comments: 0,
            inventory_items: 0,
            invites: 0,
            gifts: 0,
            offline_messages: 0,
            trade_offers: 0,
            async_game_updates: 0,
            moderator_messages: 0,
            help_request_replies: 0,
            general: 0,
            wishlist: 0,
            pending_gifts: 0,
            pending_invites: 0,
            major_sale: 0,
            parental_feature_requests: 0,
            family_invites: 0,
            family_purchase_requests: 0,
            family_purchase_request_responses: 0,
            pending_family_invites: 0,
            parental_playtime_requests: 0,
            parental_feature_access_responses: 0,
            parental_playtime_responses: 0,
            requested_game_added: 0,
            playtest_invites: 0,
          };
        }
        async function Sf(s, r, i, e, n, l = !0, m = !1) {
          if (!r) throw new Error("Invalid steamid for GetSteamNotifications");
          const f = w.w.Init(wr);
          f.Body().set_language(i),
            f.Body().set_include_read(l),
            f.Body().set_include_pinned_counts(!0),
            f.Body().set_include_confirmation_count(m);
          const u = await sn.GetSteamNotifications(s, f);
          if (u.GetEResult() !== x.R)
            throw (
              (If(
                `Received error from GetSteamNotifications. Result ${u.GetEResult()}. Transport ${u.Hdr().transport_error()}`,
              ),
              new Error(`Error from GetSteamNotifications: ${u.GetEResult()}`))
            );
          const B = u.Body().toObject();
          return (
            e &&
              (B.notifications = B.notifications?.filter(
                (y) => !Kl(y.notification_type, e, n),
              )),
            B
          );
        }
        async function Hf(s, r) {
          if (!s || !s.steamid || !s.contextid || !s.appid || !s.assetid)
            return _a("Item notification missing required attributes"), null;
          const i = w.w.Init(jr);
          i.Body().set_steamid(s.steamid),
            i.Body().set_contextid(s.contextid),
            i.Body().set_appid(parseInt(s.appid)),
            i.Body().set_get_descriptions(!0),
            i.Body().set_language(F.TS.LANGUAGE);
          let e = new Or();
          e.add_assetids(s.assetid), i.Body().set_filters(e);
          const n = await wc.GetInventoryItemsWithDescriptions(r, i);
          if (n.GetEResult() !== x.R)
            return (
              _a(
                "Request for steam item metadata did not succeed",
                n.GetEResult(),
              ),
              null
            );
          let l = "";
          const m = await yn.A.Get().QueueAppRequest(parseInt(s.appid), {});
          return (
            m == x.R
              ? (l = yn.A.Get().GetApp(parseInt(s.appid))?.GetName())
              : _a("Failed getting app info", m),
            { app_name: l, item_data: n.Body().toObject().descriptions[0] }
          );
        }
        const Nf = "ItemMetadata";
        function kf(s) {
          return [
            `${Nf}_${s?.steamid}_${s?.appid}_${s?.contextid}_${s?.assetid}`,
          ];
        }
        async function _w(s, r) {
          if (!r) return [];
          const i = CProtoBufMsg.Init(
            CSteamNotification_GetPreferences_Request,
          );
          let e = await SteamNotificationService.GetPreferences(s, i);
          return e.GetEResult() != k_EResultOK
            ? (_a("Getting notification preferences failed " + e.GetEResult()),
              [])
            : e.Body().toObject().preferences;
        }
        function Ef(s, r, i) {
          let e = oc(en, s.body_data);
          e.steamid = r;
          let n = (0, Bn.I)({
            queryKey: kf(e),
            queryFn: async () => Hf(e, i),
            staleTime: 1 / 0,
          });
          return n.isSuccess ? n.data : null;
        }
        function kl(s) {
          let r = `comment/${s.comment_type}/bounce/${s.owner_steam_id.ConvertTo64BitString()}/${s.forum_id}/?feature2=${s.topic_id}`;
          return s.last_post > 0 && (r += "&tscn=" + (s.last_post - 1)), r;
        }
        function El(s) {
          return s.comment_type == bc;
        }
        function Fl(s) {
          return s?.bhas_friend;
        }
        function $l(s) {
          return s.comment_type == bc;
        }
        function Ff(s) {
          return El(s) || Fl(s);
        }
        function $f(s) {
          return $l(s);
        }
        function hn(s) {
          if (!s) return null;
          try {
            return JSON.parse(s);
          } catch {
            Ca("Steam notification in invalid format:", s);
          }
          return null;
        }
        function Tn(s) {
          return oc(s.notification_type, s.body_data);
        }
        function Qf(s) {
          return oc(s.type, s.item?.body_data);
        }
        function oc(s, r) {
          let i = hn(r);
          if (!i) return null;
          switch (s) {
            case $n:
              return i.gifter_account;
            case Vn:
              return {
                responder_steamid: i.responder_steamid,
                package_id: i.package_id,
                bundle_id: i.bundle_id,
              };
            case Kn:
              return parseInt(i.sender);
            case bn:
              return {
                appid: i.appid,
                count: i.count ?? 1,
                appids: i.appids ?? [],
              };
            case zn:
              return !i.appid || !i.state || (i.state != wl && i.state != bl)
                ? (Ca("Async game notification invalid data", r), null)
                : { appid: parseInt(i.appid), state: parseInt(i.state) };
            case wn:
              let e = {
                owner_steam_id: i.owner_steam_id
                  ? new Ws.b(i.owner_steam_id)
                  : null,
                bclan_account: on(i.bclan_account),
                title: i.title,
                comment: i.text,
                time: i.last_post,
                comment_type: Number(i.type),
                topic_id: i.topic_id,
                forum_id: i.forum_id,
                account_steam_id: i.account_id
                  ? Ws.b.InitFromAccountID(i.account_id)
                  : null,
                bhas_friend: on(i.bhas_friend),
                bis_forum: on(i.bis_forum),
                last_post: i.last_post,
                bsubscribed: on(i.subscribed),
                bis_owner: on(i.bis_owner),
              };
              return (
                i.json_data &&
                  (e.json_data = {
                    app_id: parseInt(i.json_data.app_id),
                    file_type: parseInt(i.json_data.file_type),
                    title: i.json_data.title,
                  }),
                e
              );
            case Qn:
              return {
                requestorID: parseInt(i.requestor_id),
                state: i.state ? parseInt(i.state) : k.abL,
              };
            case en:
              return {
                appid: parseInt(i.app_id),
                assetid: i.asset_id ?? "",
                contextid: i.context_id ?? "",
              };
            case Bc:
              return {
                url: i.url ?? "",
                strGameName: i.content_app_name ?? "",
                mediaType: i.media_type ?? "clip",
                secDuration: parseFloat(i.duration_seconds ?? 0),
                nSize: parseInt(i.file_size ?? 0),
                strMachineName: i.machine_name,
                rtExpiration: i.expiration,
                thumbnailURL: i.thumbnail_url,
              };
            case Yn:
              return {
                report_id: i.report_id ?? "",
                subject_type: i.subject_type ?? 0,
                subject_group_id: i.subject_group_id ?? "0",
                subject_id: i.subject_id ?? "0",
                status: i.status ?? 0,
              };
            default:
              return (
                Ca(
                  "GetCustomNotificationDataByType called with unexpected type:" +
                    s,
                  r,
                ),
                null
              );
          }
        }
        function on(s) {
          if (typeof s > "u") return !1;
          if (typeof s == "number") return s > 0;
          if (typeof s == "string")
            switch (s.toLowerCase()?.trim()) {
              case "true":
              case "1":
                return !0;
              default:
                return !1;
            }
          return Ca("notification contained unexpected boolean value"), !1;
        }
        function Kf(s) {
          let r = 0;
          return (
            (function (e) {
              return Object.keys(e);
            })(s).forEach((e) => {
              e != "pending_gifts" && e != "pending_invites" && (r += s[e]);
            }),
            r
          );
        }
        const Vf = {
          [Vm]: { rollup_field: void 0, eFeature: void 0 },
          [Ym]: { rollup_field: void 0, eFeature: void 0 },
          [$n]: { rollup_field: "gifts", eFeature: os },
          [wn]: { rollup_field: "comments", eFeature: En },
          [en]: { rollup_field: "inventory_items", eFeature: Jc },
          [Qn]: { rollup_field: "invites", eFeature: Ac },
          [uc]: { rollup_field: "major_sale", eFeature: kn },
          [Lm]: { rollup_field: void 0, eFeature: void 0 },
          [bn]: { rollup_field: "wishlist", eFeature: kn },
          [Kn]: { rollup_field: "trade_offers", eFeature: nc },
          [tl]: { rollup_field: "general", eFeature: os },
          [dc]: { rollup_field: "help_request_replies", eFeature: os },
          [zn]: { rollup_field: "async_game_updates", eFeature: os },
          [el]: { rollup_field: "moderator_messages", eFeature: En },
          [sl]: { rollup_field: "parental_feature_requests", eFeature: os },
          [al]: { rollup_field: "family_invites", eFeature: os },
          [nl]: { rollup_field: "family_purchase_requests", eFeature: os },
          [cl]: { rollup_field: "parental_playtime_requests", eFeature: os },
          [ll]: {
            rollup_field: "family_purchase_request_responses",
            eFeature: os,
          },
          [ml]: {
            rollup_field: "parental_feature_access_responses",
            eFeature: os,
          },
          [fl]: { rollup_field: "parental_playtime_responses", eFeature: os },
          [Vn]: { rollup_field: "requested_game_added", eFeature: os },
          [Bc]: { rollup_field: void 0, eFeature: os },
          [ul]: { rollup_field: void 0, eFeature: os },
          [dl]: { rollup_field: "playtest_invites", eFeature: kn },
          [gc]: { rollup_field: void 0, eFeature: nc },
          [Yn]: { rollup_field: void 0, eFeature: os },
        };
        function Ql(s) {
          const r = Vf[s];
          return (0, js.wT)(!!r, `Missing notification type data for ${s}`), r;
        }
        function Kl(s, r, i) {
          if (!r) return !1;
          const e = Ql(s);
          return Gc(r, e?.eFeature ?? Dc, i);
        }
        function Vl(s, r, i) {
          (0, M.h5)(() => {
            const e = Ql(r);
            e?.rollup_field &&
              (s[e.rollup_field] = Math.max(0, s[e.rollup_field] + i));
          });
        }
        function Es(s) {
          return !s.viewed || s.viewed + xf > (0, Ln._2)();
        }
        function Yl(s) {
          return s.viewed && s.viewed + Uf < (0, Ln._2)();
        }
        function rb(s) {
          return (
            Kf(s) +
              s.pending_gifts +
              s.pending_invites +
              s.pending_family_invites >
            0
          );
        }
        var Ll = W(6718),
          Q = W(6118),
          hs = W(6707),
          Yf = W(5792),
          Lf = W(9553),
          ys = W.n(Lf);
        function Wc(s) {
          if (!s) return;
          const r = typeof s == "string" ? s : s.locString,
            i = typeof s == "string" ? [] : s.params || [];
          if (r) return r[0] !== "#" ? r : (0, h.we)(r, ...i);
        }
        function Xf(s, r) {
          return V.useMemo(() => {
            if (s === void 0) return null;
            let i = Ul(s);
            const e = hn(r);
            if (!i || !e) return null;
            const n =
                typeof i.displayNameLoc != "function"
                  ? { locString: i.displayNameLoc }
                  : i.displayNameLoc(e),
              l =
                typeof i.titleLoc != "function"
                  ? { locString: i.titleLoc }
                  : i.titleLoc(e),
              m =
                typeof i.bodyLoc != "function"
                  ? { locString: i.bodyLoc }
                  : i.bodyLoc(e),
              f = typeof i.image != "function" ? i.image : i.image(e),
              u = typeof i.link != "function" ? i.link : i.link(e);
            return {
              display_name: Wc(n),
              title: Wc(l),
              body: Wc(m),
              image: f,
              link: u,
            };
          }, [r, s]);
        }
        function Zf(s, r) {
          return V.useMemo(() => {
            const e = Il(s),
              n = hn(r);
            if (!e) return null;
            const l =
                typeof e.titleLoc == "string" ? e.titleLoc : e.titleLoc(n),
              m = typeof e.bodyLoc == "string" ? e.bodyLoc : e.bodyLoc(n),
              f = typeof e.url == "string" ? e.url : e.url(n),
              u =
                typeof e.steamidAttribute == "string"
                  ? e.steamidAttribute
                  : e.steamidAttribute(n),
              B = n && n[u];
            return { strTitleLoc: l, strBodyLoc: m, strUrl: f, steamid: B };
          }, [r, s]);
        }
        function Ja(s) {
          return V.useMemo(() => (Hl(s.type) ? Qf(s) : null), [s]);
        }
        var Jf = W(7910),
          Af = W.n(Jf),
          Df = W(1347),
          qf = W(2865),
          Xl = W(5369),
          pf = W(1561);
        const Zn = "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb";
        function Jn(s, r) {
          let i = ".jpg";
          (!s || s === "0000000000000000000000000000000000000000") && (s = Zn),
            s.length == 44 && ((i = s.substr(-4)), (s = s.substr(0, 40)));
          let e = o.TS.AVATAR_BASE_URL;
          return (
            e ||
              ((e = o.TS.MEDIA_CDN_COMMUNITY_URL + "images/avatars/"),
              (e += s.substr(0, 2) + "/")),
            (e += s),
            r && r != "small" && (e += "_" + r),
            (e += i),
            e
          );
        }
        const ib = 0,
          Zl = "061818254b2c99ac49e6626adb128ed1282a392f",
          tb = "338200c5d6c4d9bdcf6632642a2aeb591fb8a5c2.gif",
          eb = "338200c5d6c4d9bdcf6632642a2aeb591fb8a5c2.gif",
          Pf = 120;
        class Wn {
          m_unAppID;
          m_bInitialized = !1;
          m_strName;
          m_strIconURL;
          m_dtUpdatedFromServer;
          m_eAppType;
          constructor(r) {
            this.m_unAppID = r;
          }
          get appid() {
            return this.m_unAppID;
          }
          get is_initialized() {
            return this.m_bInitialized;
          }
          get is_valid() {
            return this.m_bInitialized && !!this.m_strName;
          }
          get name() {
            return this.m_strName;
          }
          get icon_url_no_default() {
            return this.m_strIconURL && this.BuildAppURL(this.m_strIconURL, Zl);
          }
          get icon_url() {
            return this.BuildAppURL(this.m_strIconURL, Zl);
          }
          get time_updated_from_server() {
            return this.m_dtUpdatedFromServer;
          }
          get apptype() {
            return this.m_eAppType;
          }
          BIsApplicationOrTool() {
            return this.apptype == qm || this.apptype == Dm;
          }
          BuildAppURL(r, i) {
            return r
              ? o.TS.MEDIA_CDN_COMMUNITY_URL +
                  "images/apps/" +
                  this.appid +
                  "/" +
                  r +
                  ".jpg"
              : Jn(i);
          }
          DeserializeFromMessage(r) {
            (this.m_bInitialized = !0),
              (this.m_strName = r.name()),
              (this.m_strIconURL = r.icon()),
              (this.m_dtUpdatedFromServer = new Date()),
              (this.m_eAppType = r.app_type());
          }
          DeserializeFromAppOverview(r) {
            r.icon_hash() && r.app_type() != pm
              ? ((this.m_bInitialized = !0),
                (this.m_strName = r.display_name()),
                (this.m_strIconURL = r.icon_hash()),
                (this.m_dtUpdatedFromServer = new Date()),
                (this.m_eAppType = r.app_type()))
              : (this.m_bInitialized = !1);
          }
          DeserializeFromCacheObject(r) {
            try {
              (this.m_strName = r.strName),
                (this.m_strIconURL = r.strIconURL),
                (this.m_dtUpdatedFromServer = new Date(r.strUpdatedFromServer)),
                (this.m_eAppType = r.eAppType),
                (this.m_bInitialized = !0);
            } catch {}
          }
          SerializeToCacheObject() {
            return (
              (0, js.wT)(
                this.m_bInitialized,
                "Attempting to serialize an uninitialized AppInfo object for caching!",
              ),
              this.m_bInitialized
                ? {
                    strName: this.m_strName,
                    strIconURL: this.m_strIconURL,
                    strUpdatedFromServer: this.m_dtUpdatedFromServer.toJSON(),
                    eAppType: this.m_eAppType,
                  }
                : null
            );
          }
        }
        class sb {}
        class Rf {
          m_nLastUpdated = 0;
          m_mapLanguages = M.sH.map();
          m_appid;
          m_fetching = null;
          constructor(r) {
            this.m_appid = r;
          }
          GetAppID() {
            return this.m_appid;
          }
          GetTokenList(r) {
            return this.m_mapLanguages.has(r)
              ? this.m_mapLanguages.get(r)
              : null;
          }
          Localize(r, i) {
            let e = o.TS.LANGUAGE,
              n = this.GetTokenList(e),
              l = e != "english" ? this.GetTokenList("english") : null;
            return Jl(r, n, l, this.m_appid, i);
          }
          SubstituteParams(r, i) {
            let e = o.TS.LANGUAGE,
              n = this.GetTokenList(e),
              l = e != "english" ? this.GetTokenList("english") : null;
            return Al(r, n, l, this.m_appid, i);
          }
        }
        function Jl(s, r, i, e, n) {
          if (!s.startsWith("#"))
            return (
              console.log(
                "Token doesn't start with #:",
                s,
                "appid",
                e,
                "tokens",
                r,
              ),
              ""
            );
          let l = s;
          s = s.toLowerCase();
          let m = "";
          if (
            (r && r.has(s) && (m = r.get(s)),
            !m && i && i.has(s) && (m = i.get(s)),
            m)
          )
            m = Al(m, r, i, e, n);
          else if (
            ((r || i) &&
              console.log(
                "No loc found for appid",
                e,
                l,
                "Tokens:",
                r,
                "Fallback:",
                i,
              ),
            r && o.TS.EUNIVERSE != k.wLO)
          )
            return s;
          return m;
        }
        function Al(s, r, i, e, n) {
          let l = /{[A-za-z0-9_%#:]+}/g,
            m = s.match(l);
          if (m)
            for (let f of m) {
              let u = f.slice(1, -1),
                B = Dl(u, n),
                y = Jl(B, r, i, e, n);
              if (!y) return "";
              s = s.replace(f, y);
            }
          return (s = Dl(s, n)), s;
        }
        function Dl(s, r) {
          let i = /%[A-Za-z0-9_:]+%/g,
            e = s.match(i);
          if (e)
            for (let n of e) {
              let l = n.slice(1, -1).toLowerCase(),
                m = r.get(l);
              m == null
                ? console.log("No rich presence found for", l)
                : (s = s.replace(n, m));
            }
          return s;
        }
        var Aa = W(7474),
          Gf = W(8323),
          Cf = Object.defineProperty,
          _f = Object.getOwnPropertyDescriptor,
          ql = (s, r, i, e) => {
            for (
              var n = e > 1 ? void 0 : e ? _f(r, i) : r, l = s.length - 1, m;
              l >= 0;
              l--
            )
              (m = s[l]) && (n = (e ? m(r, i, n) : m(n)) || n);
            return e && n && Cf(r, i, n), n;
          };
        function ab(s) {
          return useObserver(() => Da.GetAppInfo(s));
        }
        function nb(s) {
          return useObserver(() => s.map((r) => Da.GetAppInfo(r)));
        }
        const ru = 3600 * 24 * 7 * 2;
        class jc {
          m_CMInterface;
          m_mapAppInfo = M.sH.map();
          m_mapRichPresenceLoc = M.sH.map();
          m_cAppInfoRequestsInFlight = 0;
          m_setPendingAppInfo = new Set();
          m_PendingAppInfoPromise;
          m_PendingAppInfoResolve;
          m_CacheStorage = null;
          m_fnCallbackOnAppInfoLoaded = new Gf.lu();
          constructor() {
            (0, M.Gn)(this);
          }
          Init(r) {
            this.m_CMInterface = r;
          }
          BHavePendingAppInfoRequests() {
            return (
              this.m_setPendingAppInfo.size > 0 ||
              this.m_cAppInfoRequestsInFlight > 0
            );
          }
          get CMInterface() {
            return this.m_CMInterface;
          }
          RegisterCallbackOnLoad(r) {
            if (!this.BHavePendingAppInfoRequests()) {
              (0, js.wT)(
                !1,
                "Registering for callback on appinfo load, but nothing queued",
              ),
                r();
              return;
            }
            this.m_fnCallbackOnAppInfoLoaded.Register(r);
          }
          IsLoadingAppID(r) {
            return this.m_setPendingAppInfo.has(r);
          }
          GetAppInfo(r) {
            if (
              ((0, js.wT)(
                this.m_CMInterface,
                "CAppInfoStore.GetAppInfo called before Init",
              ),
              !this.m_mapAppInfo.has(r))
            ) {
              let i = new Wn(r);
              this.m_mapAppInfo.set(r, i), this.QueueAppInfoRequest(r);
            }
            return this.m_mapAppInfo.get(r);
          }
          QueueAppInfoRequest(r) {
            return r
              ? (this.m_setPendingAppInfo.size ||
                  ((this.m_PendingAppInfoPromise = new Promise(
                    (i) => (this.m_PendingAppInfoResolve = i),
                  )),
                  window.setTimeout(() => this.FlushPendingAppInfo(), 25)),
                this.m_setPendingAppInfo.add(r),
                this.m_PendingAppInfoPromise)
              : Promise.resolve();
          }
          async FlushPendingAppInfo() {
            const r = this.m_PendingAppInfoResolve,
              i = Array.from(this.m_setPendingAppInfo);
            (this.m_PendingAppInfoPromise = void 0),
              (this.m_PendingAppInfoResolve = void 0),
              this.m_setPendingAppInfo.clear(),
              await this.LoadAppInfoBatch(i),
              r?.();
          }
          async LoadAppInfoBatch(r) {
            this.m_cAppInfoRequestsInFlight++;
            let i = await this.LoadAppInfoBatchFromLocalCache(r);
            if (i.length) {
              console.log("Loading batch of App Info from Steam: ", i),
                await this.m_CMInterface?.WaitUntilLoggedOn();
              let e = w.w.Init(Aa._z);
              e.Body().set_language((0, k.sfN)(o.TS.LANGUAGE));
              const n = 50;
              for (; i.length > 0; ) {
                const l = Math.min(n, i.length),
                  m = i.slice(0, l);
                (i = i.slice(l)), e.Body().set_appids(m);
                const f = await Aa.BE.GetApps(
                  this.m_CMInterface.GetServiceTransport(),
                  e,
                );
                f.GetEResult() == x.R
                  ? this.OnGetAppsResponse(f)
                  : console.error(
                      `Error when calling CommunityService.GetApps: EResult=${f.GetEResult()}, AppIDs:`,
                      m,
                    );
              }
            }
            --this.m_cAppInfoRequestsInFlight == 0 &&
              this.m_setPendingAppInfo.size == 0 &&
              (this.m_fnCallbackOnAppInfoLoaded.Dispatch(),
              this.m_fnCallbackOnAppInfoLoaded.ClearAllCallbacks());
          }
          OnGetAppsResponse(r) {
            let i = [];
            for (let e of r.Body().apps()) {
              let n = this.m_mapAppInfo.get(e.appid());
              (0, js.wT)(
                n,
                `Got AppInfo response for unrequested AppID: ${e.appid()}`,
              ),
                n &&
                  ((n = new Wn(e.appid())),
                  n.DeserializeFromMessage(e),
                  this.m_mapAppInfo.set(e.appid(), n),
                  i.push(n));
            }
            this.SaveAppInfoBatchToLocalCache(i);
          }
          OnAppOverviewChange(r) {
            for (let i of r) {
              const e = new Wn(i.appid());
              e.DeserializeFromAppOverview(i),
                e.is_initialized && this.m_mapAppInfo.set(i.appid(), e);
            }
          }
          async EnsureAppInfoForAppIDs(r) {
            let i = !1;
            return (
              r.forEach((e) => {
                let n = this.m_mapAppInfo.get(e);
                if (n) {
                  n.is_valid || (i = !0);
                  return;
                }
                (n = new Wn(e)),
                  this.m_mapAppInfo.set(e, n),
                  this.QueueAppInfoRequest(e),
                  (i = !0);
              }),
              i && this.m_PendingAppInfoPromise !== void 0
                ? this.m_PendingAppInfoPromise
                : Promise.resolve()
            );
          }
          SetCacheStorage(r) {
            this.m_CacheStorage = r;
          }
          GetCacheKeyForAppID(r) {
            return "APPINFO_" + r;
          }
          async LoadAppInfoBatchFromLocalCache(r) {
            if (!this.m_CacheStorage) return r;
            console.log("Loading batch of App Info from Local Cache: ", r);
            const i = new Date(new Date().getTime() - ru * 1e3),
              e = async (f) => {
                const u = await this.m_CacheStorage?.GetObject(
                  this.GetCacheKeyForAppID(f),
                );
                if (!u) return f;
                let B = this.m_mapAppInfo.get(f);
                return (
                  (0, js.wT)(
                    B,
                    "Didn't find AppInfo in our map when loading from cache but it should've been there?",
                  ),
                  B
                    ? ((B = new Wn(f)),
                      B.DeserializeFromCacheObject(u),
                      B.is_initialized
                        ? (this.m_mapAppInfo.set(f, B),
                          B.time_updated_from_server < i ? f : null)
                        : (console.warn(
                            "Failed to deserialize cached App Info: ",
                            f,
                            u,
                          ),
                          f))
                    : f
                );
              };
            let n = r.map((f) => e(f));
            return (await Promise.all(n)).filter((f) => f !== null);
          }
          async SaveAppInfoBatchToLocalCache(r) {
            if (this.m_CacheStorage) {
              console.log(
                "Saving batch of App Info to Local Cache: ",
                r.map((i) => i.appid),
              );
              for (const i of r) {
                const e = i.SerializeToCacheObject();
                e &&
                  this.m_CacheStorage.StoreObject(
                    this.GetCacheKeyForAppID(i.appid),
                    e,
                  );
              }
            }
          }
          Localize(r, i, e) {
            const n = this.GetRichPresenceLoc(r);
            return n
              ? n.Localize(i, e)
              : o.TS.EUNIVERSE != k.wLO
                ? (console.log(
                    `Unable to find app localization information for app ${r} token ${i}, this may not have had a chance to load yet`,
                  ),
                  i)
                : "";
          }
          GetRichPresenceLoc(r) {
            if (this.m_mapRichPresenceLoc.has(r.toString())) {
              let e = this.m_mapRichPresenceLoc.get(r.toString());
              return (
                e.m_nLastUpdated + 1e3 * 60 * Pf < Date.now() &&
                  this.QueueRichPresenceLocRequest(e),
                e
              );
            }
            let i = new Rf(r);
            return (
              this.m_mapRichPresenceLoc.set(r.toString(), i),
              this.QueueRichPresenceLocRequest(i),
              i
            );
          }
          GetRichPresenceLocAsync(r) {
            let i = this.GetRichPresenceLoc(r);
            return i.m_nLastUpdated ? Promise.resolve(i) : i.m_fetching;
          }
          OnRichPresenceLocUpdate(r, i) {
            r.m_nLastUpdated = Date.now();
            for (let e of i) {
              let n = e.language(),
                l = r.m_mapLanguages.get(n);
              l
                ? l.clear()
                : (r.m_mapLanguages.set(n, new Map()),
                  (l = r.m_mapLanguages.get(n)));
              for (let m of e.tokens())
                l?.set(m.name().toLowerCase(), m.value());
            }
          }
          QueueRichPresenceLocRequest(r) {
            return (
              r.m_fetching ||
                ((r.m_fetching = this.m_CMInterface
                  .WaitUntilLoggedOn()
                  .then(() => {
                    let i = w.w.Init(Aa.zQ);
                    return (
                      i.Body().set_appid(r.GetAppID()),
                      i.Body().set_language(o.TS.LANGUAGE),
                      Aa.BE.GetAppRichPresenceLocalization(
                        this.m_CMInterface.GetServiceTransport(),
                        i,
                      )
                    );
                  })
                  .then(
                    (i) => (
                      (r.m_fetching = null),
                      i.GetEResult() != x.R
                        ? Promise.reject()
                        : (this.OnRichPresenceLocUpdate(
                            r,
                            i.Body().token_lists(),
                          ),
                          Promise.resolve(r))
                    ),
                  )),
                r.m_fetching.catch(() => {
                  r.m_fetching = null;
                })),
              r.m_fetching
            );
          }
        }
        ql([M.XI], jc.prototype, "OnGetAppsResponse", 1),
          ql([M.XI], jc.prototype, "OnRichPresenceLocUpdate", 1);
        const Da = new jc(),
          cb = 1,
          iu = 2,
          tu = 4,
          eu = 8,
          lb = 256,
          mb = 512,
          fb = 1024,
          ub = 2048,
          db = 4096,
          Bb = 8192;
        var su = Object.defineProperty,
          au = Object.getOwnPropertyDescriptor,
          Nr = (s, r, i, e) => {
            for (
              var n = e > 1 ? void 0 : e ? au(r, i) : r, l = s.length - 1, m;
              l >= 0;
              l--
            )
              (m = s[l]) && (n = (e ? m(r, i, n) : m(n)) || n);
            return e && n && su(r, i, n), n;
          };
        function gb(s) {
          let r = "offline";
          return (
            s &&
              (s.is_ingame
                ? (r = "ingame")
                : s.m_broadcastAccountId
                  ? (r = "watchingbroadcast")
                  : s.is_online && (r = "online"),
              s.is_awayOrSnooze && (r += " awayOrSnooze")),
            r
          );
        }
        class er {
          m_steamid;
          m_bInitialized = !1;
          m_ePersonaState = k.cU3;
          m_unGamePlayedAppID = 0;
          m_gameid = "0";
          m_unPersonaStateFlags = 0;
          m_strPlayerName = "";
          m_strAvatarHash = Zn;
          m_strAccountName = "";
          m_rtLastSeenOnline = 0;
          m_strGameExtraInfo = "";
          m_unGameServerIP = 0;
          m_unGameServerPort = 0;
          m_game_lobby_id = "";
          m_bPlayerNamePending = !1;
          m_bAvatarPending = !1;
          m_broadcastId = void 0;
          m_broadcastAccountId = void 0;
          m_broadcastAppId = void 0;
          m_broadcastViewerCount = void 0;
          m_strBroadcastTitle = void 0;
          m_bCommunityBanned = void 0;
          m_eGamingDeviceType = k.eSB;
          m_mapRichPresence = M.sH.map();
          m_bNameInitialized = !1;
          m_bStatusInitialized = !1;
          m_strProfileURL = void 0;
          constructor(r) {
            (0, M.Gn)(this), (this.m_steamid = r);
          }
          Reset() {
            (this.m_ePersonaState = k.cU3),
              (this.m_unGamePlayedAppID = 0),
              (this.m_gameid = "0"),
              (this.m_strGameExtraInfo = ""),
              (this.m_unGameServerIP = 0),
              (this.m_unGameServerPort = 0),
              (this.m_game_lobby_id = ""),
              this.m_mapRichPresence.clear(),
              (this.m_broadcastId = void 0),
              (this.m_broadcastAccountId = void 0),
              (this.m_broadcastAppId = void 0),
              (this.m_broadcastViewerCount = void 0),
              (this.m_strBroadcastTitle = void 0),
              (this.m_eGamingDeviceType = k.eSB);
          }
          GetAccountID() {
            return this.m_steamid.GetAccountID();
          }
          GetSteamIDAsString() {
            return this.m_steamid.ConvertTo64BitString();
          }
          get is_online() {
            return (
              this.m_ePersonaState != k.cU3 && this.m_ePersonaState != k._3b
            );
          }
          get is_ingame() {
            return (
              this.is_online &&
              (this.m_unGamePlayedAppID != 0 || this.m_gameid != "0")
            );
          }
          get is_watchingbroadcast() {
            return !!this.m_broadcastAccountId;
          }
          get is_in_nonsteam_game() {
            return this.m_unGamePlayedAppID == 0 && this.m_gameid != "0";
          }
          get is_in_joinable_game() {
            return (
              this.has_joinable_game_flag ||
              this.is_in_valid_lobby ||
              this.has_server_ip
            );
          }
          get has_joinable_game_flag() {
            return ((this.m_unPersonaStateFlags ?? 0) & iu) != 0;
          }
          get connect_string() {
            return this.m_mapRichPresence.get("connect");
          }
          get is_in_valid_lobby() {
            return this.m_game_lobby_id != null && this.m_game_lobby_id != "0";
          }
          get has_server_ip() {
            return this.m_unGameServerIP != 0;
          }
          get is_awayOrSnooze() {
            return (
              this.m_ePersonaState == k.PrD || this.m_ePersonaState == k.vPz
            );
          }
          HasStateFlag(r) {
            return ((this.m_unPersonaStateFlags ?? 0) & r) != 0;
          }
          get last_seen_online() {
            return this.m_rtLastSeenOnline;
          }
          ClearStateOnDisconnect() {
            this.m_ePersonaState != k.cU3 && this.Reset();
          }
          get is_golden() {
            return this.HasStateFlag(tu);
          }
          GetCurrentGameName() {
            return this.m_strGameExtraInfo
              ? this.m_strGameExtraInfo
              : this.m_unGamePlayedAppID
                ? Da.GetAppInfo(this.m_unGamePlayedAppID).name
                : "";
          }
          GetCurrentGameIconURL() {
            return this.m_unGamePlayedAppID
              ? Da.GetAppInfo(this.m_unGamePlayedAppID).icon_url
              : "";
          }
          BIsAppInfoReady() {
            return this.m_unGamePlayedAppID
              ? Da.GetAppInfo(this.m_unGamePlayedAppID).is_initialized
              : !0;
          }
          HasCurrentGameRichPresence() {
            return this.m_mapRichPresence.has("steam_display");
          }
          HasRichPresenceForViewGameInfo() {
            return !!(
              this.m_mapRichPresence.has("status") ||
              this.m_mapRichPresence.has("connect") ||
              this.m_mapRichPresence.has("connect_private")
            );
          }
          GetCurrentGameRichPresence() {
            if (this.HasCurrentGameRichPresence()) {
              let r = Da.GetRichPresenceLoc(this.m_unGamePlayedAppID);
              if (r) {
                let i = this.m_mapRichPresence.get("steam_display");
                return r.Localize(i, this.m_mapRichPresence);
              }
            } else if (this.HasStateFlag(eu))
              return (0, h.we)("#PersonaStateRemotePlayTogether");
            return "";
          }
          GetCurrentGameStatus() {
            return (
              this.GetCurrentGameRichPresence() ||
              this.m_mapRichPresence.get("status") ||
              ""
            );
          }
          GetOfflineStatusUpdateRate() {
            if (this.last_seen_online == 0) return 3e4;
            const r = 60,
              i = r * 60,
              e = i * 24;
            let n = 1e3;
            const l = Da.CMInterface.GetServerRTime32() - this.last_seen_online;
            return l > e ? (n *= i) : l > 2 * i ? (n *= r) : (n *= r / 4), n;
          }
          GetOfflineStatusTime() {
            if (this.last_seen_online == 0)
              return (0, h.we)("#PersonaStateOffline");
            let r = this.GetOfflineStatusUpdateRate();
            (!o.TS.IN_MOBILE || r <= 60) && (0, pf.tB)(r);
            let i = Da.CMInterface.GetServerRTime32() - this.last_seen_online;
            return i < 60
              ? (0, h.we)("#PersonaStateLastSeen_JustNow")
              : (0, h.we)("#PersonaStateLastSeen", (0, h.Hq)(i));
          }
          GetLocalizedOnlineStatus() {
            switch (this.m_ePersonaState) {
              case k.cU3:
              case k._3b:
                return this.GetOfflineStatusTime();
              case k.UXk:
                return (0, h.we)("#PersonaStateOnline");
              case k.wcG:
                return (0, h.we)("#PersonaStateBusy");
              case k.PrD:
                return (0, h.we)("#PersonaStateAway");
              case k.vPz:
                return (0, h.we)("#PersonaStateSnooze");
              case k.Hrn:
                return (0, h.we)("#PersonaStateLookingToTrade");
              case k.HAb:
                return (0, h.we)("#PersonaStateLookingToPlay");
              default:
                return "";
            }
          }
          get has_public_party_beacon() {
            return this.m_mapRichPresence.has("__beacon") && this.is_ingame;
          }
          get player_group() {
            return this.m_mapRichPresence.has("steam_player_group")
              ? this.m_mapRichPresence.get("steam_player_group")
              : "";
          }
          get player_group_size() {
            return this.m_mapRichPresence.has("steam_player_group_size")
              ? Number.parseInt(
                  this.m_mapRichPresence.get("steam_player_group_size"),
                )
              : 0;
          }
          get online_state() {
            return this.is_online
              ? this.is_ingame
                ? "in-game"
                : this.m_broadcastAccountId
                  ? "watchingbroadcast"
                  : "online"
              : "offline";
          }
          BHasAvatarSet() {
            return this.m_strAvatarHash != Zn;
          }
          get avatar_url() {
            return Jn(this.m_strAvatarHash);
          }
          get avatar_url_medium() {
            return Jn(this.m_strAvatarHash, "medium");
          }
          get avatar_url_full() {
            return Jn(this.m_strAvatarHash, "full");
          }
          static SortStatusComparator(r, i, e) {
            if (i.has_public_party_beacon) {
              if (!e.has_public_party_beacon) return -1;
            } else {
              if (e.has_public_party_beacon) return 1;
              if (i.is_ingame)
                if (e.is_ingame)
                  if (r) {
                    if (i.is_awayOrSnooze) {
                      if (!e.is_awayOrSnooze) return 1;
                    } else if (e.is_awayOrSnooze) return -1;
                  } else return 0;
                else return -1;
              else if (e.is_ingame) return 1;
            }
            if (i.is_online) {
              if (!e.is_online) return -1;
            } else if (e.is_online) return 1;
            if (r) {
              if (i.is_awayOrSnooze) {
                if (!e.is_awayOrSnooze) return 1;
              } else if (e.is_awayOrSnooze) return -1;
            }
            return 0;
          }
          GetCommunityProfileURL() {
            return this.m_strProfileURL
              ? `${o.TS.COMMUNITY_BASE_URL}id/${this.m_strProfileURL}/`
              : `${o.TS.COMMUNITY_BASE_URL}profiles/${this.m_steamid.ConvertTo64BitString()}/`;
          }
        }
        Nr([M.sH], er.prototype, "m_bInitialized", 2),
          Nr([M.sH], er.prototype, "m_ePersonaState", 2),
          Nr([M.sH], er.prototype, "m_unGamePlayedAppID", 2),
          Nr([M.sH], er.prototype, "m_gameid", 2),
          Nr([M.sH], er.prototype, "m_unPersonaStateFlags", 2),
          Nr([M.sH], er.prototype, "m_strPlayerName", 2),
          Nr([M.sH], er.prototype, "m_strAvatarHash", 2),
          Nr([M.sH], er.prototype, "m_strAccountName", 2),
          Nr([M.sH], er.prototype, "m_rtLastSeenOnline", 2),
          Nr([M.sH], er.prototype, "m_strGameExtraInfo", 2),
          Nr([M.sH], er.prototype, "m_unGameServerIP", 2),
          Nr([M.sH], er.prototype, "m_unGameServerPort", 2),
          Nr([M.sH], er.prototype, "m_game_lobby_id", 2),
          Nr([M.sH], er.prototype, "m_bPlayerNamePending", 2),
          Nr([M.sH], er.prototype, "m_bAvatarPending", 2),
          Nr([M.sH], er.prototype, "m_broadcastId", 2),
          Nr([M.sH], er.prototype, "m_broadcastAccountId", 2),
          Nr([M.sH], er.prototype, "m_broadcastAppId", 2),
          Nr([M.sH], er.prototype, "m_broadcastViewerCount", 2),
          Nr([M.sH], er.prototype, "m_strBroadcastTitle", 2),
          Nr([M.sH], er.prototype, "m_bCommunityBanned", 2),
          Nr([M.sH], er.prototype, "m_eGamingDeviceType", 2),
          Nr([M.sH], er.prototype, "m_bNameInitialized", 2);
        var nu = W(8632),
          cu = W.n(nu);
        function pl(s, r) {
          return new (cu())(
            async (i) => {
              const e = [...i],
                n = await Ms.xtC.GetPlayerLinkDetails(s, { steamids: e }),
                l = new Map();
              return (
                n
                  .Body()
                  .accounts()
                  .forEach((m) => {
                    const f = m.toObject();
                    l.set(f.public_data.steamid, f);
                  }),
                e.map((m) => l.get(m) ?? null)
              );
            },
            { maxBatchSize: 100, cache: !1, ...r },
          );
        }
        function wb(s) {
          return useDataLoader("PlayerLinkDetails", () => pl(s));
        }
        function qa(s) {
          const r = (0, Ga.KV)(),
            i = V.useContext(An);
          return (0, Bn.I)(Pl(i, r, s));
        }
        function bb(s) {
          const r = React.useRef(void 0),
            i = qa(s);
          return i.data
            ? i
            : (r.current ||
                (r.current = new CPersonaStateImpl(
                  typeof s == "string"
                    ? new CSteamID(s)
                    : CSteamID.InitFromAccountID(s),
                )),
              { ...i, data: r.current });
        }
        function zb(s) {
          const r = useActiveServiceTransport(),
            i = React.useContext(An);
          return useQueries({ queries: s.map((e) => Pl(i, r, e)) });
        }
        function yb(s) {
          return ReactQueryClient.getQueryData(["PlayerSummary", s]);
        }
        function Mb(s) {
          const { loadPersonaState: r, children: i } = s,
            e = React.useMemo(() => ({ loadPersonaState: r }), [r]);
          return React.createElement(An.Provider, { value: e }, i);
        }
        const An = V.createContext({
          loadPersonaState: async (s, r) => {
            if (s == null) return null;
            const i = await mu(r).load(
              Ws.b.InitFromAccountID(s).ConvertTo64BitString(),
            );
            return fu(Ws.b.InitFromAccountID(s), i);
          },
        });
        function hb() {
          return React.useContext(An);
        }
        function Pl(s, r, i) {
          const e = typeof i == "string" ? new Ws.b(i).GetAccountID() : i;
          return {
            queryKey: ["PlayerSummary", e],
            queryFn: () => s.loadPersonaState(e, r),
            enabled: !!e,
          };
        }
        let lu;
        function mu(s) {
          return (lu ??= pl(s));
        }
        function fu(s, r) {
          let i = new er(s);
          const e = r?.public_data,
            n = r?.private_data;
          return (
            (i.m_bInitialized = !!r),
            (i.m_ePersonaState = n?.persona_state ?? k.cU3),
            (i.m_strAvatarHash = e?.sha_digest_avatar
              ? (0, Xl.Kx)(e.sha_digest_avatar)
              : Zn),
            (i.m_strPlayerName = e?.persona_name ?? s.ConvertTo64BitString()),
            (i.m_strAccountName = n?.account_name),
            n?.persona_state_flags &&
              (i.m_unPersonaStateFlags = n?.persona_state_flags),
            n?.game_id && (i.m_gameid = n?.game_id),
            n?.game_server_ip_address &&
              (i.m_unGameServerIP = n?.game_server_ip_address),
            n?.lobby_steam_id && (i.m_game_lobby_id = n?.lobby_steam_id),
            n?.game_extra_info && (i.m_strGameExtraInfo = n?.game_extra_info),
            e?.profile_url && (i.m_strProfileURL = e.profile_url),
            i
          );
        }
        var Ys = W(9298),
          Dn = W(2264),
          uu = W(3761),
          $ = W.n(uu);
        const du = !0;
        function Bu(s) {
          let {
              onActivate: r,
              icon: i,
              body: e,
              eUIMode: n,
              classNames: l,
            } = s,
            m = r,
            f = $().PinnedTemplate;
          return (
            n == k.ogI
              ? (f = $().PinnedTemplateDesktop)
              : n == k.yrU && (f = $().PinnedTemplateWeb),
            (f = (0, hs.A)(f, l)),
            (0, d.jsx)(Ys.Z, {
              className: f,
              onActivate: m,
              children: (0, d.jsx)("div", {
                className: $().Content,
                children: (0, d.jsxs)("div", {
                  className: $().PinnedBody,
                  children: [
                    (0, d.jsx)("span", { className: $().Icon, children: i }),
                    e,
                  ],
                }),
              }),
            })
          );
        }
        function gu(s) {
          const {
            count: r,
            icon: i,
            onActivate: e,
            strLocToken: n,
            bAlwaysShow: l,
            eUIMode: m,
            classNames: f,
            visible: u,
          } = s;
          if (!r && !l) return null;
          const B = (0, h.Yp)(n, r);
          return (0, d.jsx)(Bu, {
            icon: i,
            body: B,
            onActivate: e,
            eUIMode: m,
            classNames: f,
            visible: u,
          });
        }
        var wu = ((s) => (
          (s[(s.none = 0)] = "none"),
          (s[(s.loadingActive = 1)] = "loadingActive"),
          (s[(s.loadingComplete = 2)] = "loadingComplete"),
          s
        ))(wu || {});
        function Ls(s) {
          let {
            nUnread: r,
            location: i,
            eUIMode: e,
            bLoading: n,
            footer: l,
            bNewIndicator: m,
          } = s;
          const [f, u] = V.useState(n ? 1 : 0),
            [B, y] = V.useState(void 0);
          V.useEffect(() => {
            f == 1 && !n ? u(2) : f == 2 && n && u(1);
          }, [f, n]),
            V.useEffect(() => {
              let E =
                parseInt($().loadinganimationiterationcount) *
                parseInt($().loadinganimationduration) *
                1e3;
              const j = window.setTimeout(() => u(0), E);
              return () => window.clearTimeout(j);
            }, []),
            V.useEffect(() => {
              r && r > 0 && B !== $().Unread && i != k.miK && i != k.PN1
                ? y($().Unread)
                : !r && B == $().Unread && y($().MarkedRead);
            }, [r, i, B]);
          let T = s.onActivate;
          T || (T = () => console.log("Missing activate function")),
            f == 1 && (T = void 0);
          let I = $().StandardTemplate;
          i == k.oYe
            ? (I = $().AllNotificationsTemplate)
            : i == k.miK
              ? (I = $().DesktopToastTemplate)
              : (e == k.ogI || e == k.yrU) && (I = $().StandardTemplateDesktop);
          let S = null;
          if (f != 0 && i != k.miK && i != k.PN1) {
            let E = f == 2 ? $().Hide : null;
            S = (0, d.jsxs)("div", {
              className: (0, hs.A)($().LoadingTemplate, E),
              children: [
                (0, d.jsx)("div", {
                  className: (0, hs.A)(
                    $().StandardLogoDimensions,
                    $().ShimmerLogo,
                  ),
                }),
                (0, d.jsxs)("div", {
                  className: $().Content,
                  children: [
                    (0, d.jsx)("div", {
                      className: (0, hs.A)($().Header, $().ShimmerHeader),
                    }),
                    (0, d.jsx)("div", {
                      className: (0, hs.A)($().Body, $().ShimmerBody),
                    }),
                  ],
                }),
              ],
            });
          }
          return (0, d.jsxs)(Ys.Z, {
            onActivate: T,
            className: $().StandardTemplateContainer,
            onOptionsButton: s.onOptionsButton,
            onOptionsActionDescription: s.onOptionsButtonDesc,
            children: [
              (0, d.jsxs)("div", {
                className: (0, hs.A)(I, B),
                children: [
                  (0, d.jsx)("div", {
                    className: $().StandardLogoDimensions,
                    children: s.logo,
                  }),
                  s.personaStatus &&
                    (0, d.jsx)("div", {
                      className: (0, hs.A)($().AvatarStatus, s.personaStatus),
                    }),
                  (0, d.jsx)("div", {
                    className: $().Content,
                    children: s.children,
                  }),
                  S,
                  m && (0, d.jsx)(bu, { location: i }),
                ],
              }),
              l || null,
            ],
          });
        }
        function bu(s) {
          const { location: r } = s;
          return !du || r != k.B3I
            ? null
            : (0, d.jsx)("div", {
                className: $().NewIndicator,
                children: (0, d.jsx)(Q.jlt, {}),
              });
        }
        function Xs(s) {
          let {
            icon: r,
            title: i,
            timestamp: e,
            location: n,
            fnRenderTimestamp: l,
          } = s;
          const m = !!e && (n == k.B3I || n == k.oYe);
          let f;
          return (
            n == k.oYe ? (f = Mu) : (f = l ?? hu),
            (0, d.jsxs)("div", {
              className: $().Header,
              children: [
                (0, d.jsx)(zu, { icon: r }),
                !!i && (0, d.jsx)(yu, { title: i }),
                m && f({ timestamp: e }),
              ],
            })
          );
        }
        function zu(s) {
          return (0, d.jsxs)(d.Fragment, {
            children: [
              !!s.icon &&
                (0, d.jsx)("div", { className: $().Icon, children: s.icon }),
              " ",
            ],
          });
        }
        function yu(s) {
          return (0, d.jsx)("div", { className: $().Title, children: s.title });
        }
        function Zs(s) {
          let r = (0, hs.A)(
            $().StandardNotificationDescription,
            s.multiline && $().Multiline,
          );
          return (0, d.jsx)("div", { className: r, children: s.children });
        }
        function Js(s) {
          let r = (0, hs.A)(
            $().StandardNotificationSubText,
            s.multiline && $().Multiline,
          );
          return (0, d.jsx)("div", { className: r, children: s.children });
        }
        function Mu(s) {
          if (s.timestamp === void 0) return null;
          let r = new Date(),
            i = new Date(s.timestamp * 1e3),
            e = (0, Dn.KC)(s.timestamp);
          return (
            (0, Ln.JD)(r, i) ||
              (e = (0, Dn._l)(s.timestamp, !1, !1, !1) + " " + e),
            (0, d.jsx)("div", { className: $().Timestamp, children: e })
          );
        }
        function hu(s) {
          if (s.timestamp === void 0) return null;
          let r = new Date(),
            i = new Date(s.timestamp * 1e3),
            e = (0, Ln.JD)(r, i)
              ? (0, Dn.KC)(s.timestamp)
              : (0, Dn._l)(s.timestamp, !1, !1, !1);
          return (0, d.jsx)("div", { className: $().Timestamp, children: e });
        }
        function Tb(s) {
          const { text: r } = s;
          return jsx("div", { className: styles.BottomBar, children: r });
        }
        function ob(s) {
          let {
              playerName: r,
              nickName: i,
              parenthesizeNickNames: e,
              state: n,
            } = s,
            l = !!i,
            m = l && !e,
            f = m ? i : r,
            u = n == "ingame" ? styles.IngameTitle : styles.OnlineTitle;
          return jsxs(Fragment, {
            children: [
              jsx("span", { className: classnames(u), children: f }),
              e &&
                l &&
                jsxs("span", {
                  className: classnames(styles.PlayerNickName, styles.FullName),
                  children: ["(", i, ")"],
                }),
              m &&
                jsx("span", {
                  className: styles.PlayerNickName,
                  children: " *",
                }),
            ],
          });
        }
        function As(s) {
          return s == k.PN1;
        }
        function Tu(s, r) {
          return V.useCallback(
            (i) => {
              s && s(i), r && r();
            },
            [s, r],
          );
        }
        var ou = W(7786),
          Ds = W.n(ou);
        function qs(s) {
          let {
              onActivate: r,
              onDismiss: i,
              logo: e,
              icon: n,
              title: l,
              body: m,
              personaStatus: f,
              className: u,
              singleLineOnly: B,
              fullWidth: y,
            } = s,
            T = Tu(r, i),
            I = (S) => {
              S.button == 1 && i && i();
            };
          return (0, d.jsxs)(Ys.Z, {
            className: (0, hs.A)(Ds().ShortTemplate, !B && Ds().TwoLine, u),
            onActivate: T,
            onMouseDown: I,
            children: [
              (0, d.jsx)("div", {
                className: Ds().ShortLogoDimensions,
                children: e,
              }),
              s.personaStatus &&
                (0, d.jsx)("div", {
                  className: (0, hs.A)(Ds().AvatarStatus, f),
                }),
              (0, d.jsxs)("div", {
                className: (0, hs.A)(Ds().Content, y && Ds().FullWidth),
                children: [
                  (0, d.jsxs)("div", {
                    className: Ds().Header,
                    children: [
                      !!n &&
                        (0, d.jsx)("div", {
                          className: Ds().Icon,
                          children: n,
                        }),
                      (0, d.jsx)("div", { className: Ds().Title, children: l }),
                    ],
                  }),
                  (0, d.jsx)("div", { className: Ds().Body, children: m }),
                ],
              }),
            ],
          });
        }
        var Wu = W(2012),
          Ts = W.n(Wu),
          Rl = W(497),
          Gl = W(5233);
        function Wb(s) {
          return "unknown EAppDevsRelationship ( " + s + " )";
        }
        class kr extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              kr.prototype.appid || t.Sg(kr.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              kr.sm_m ||
                (kr.sm_m = {
                  proto: kr,
                  fields: {
                    appid: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    clan_steamid: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    relation: { n: 3, br: t.qM.readEnum, bw: t.gp.writeEnum },
                    linkname: {
                      n: 4,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    json: { n: 5, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              kr.sm_m
            );
          }
          static MBF() {
            return kr.sm_mbf || (kr.sm_mbf = t.w0(kr.M())), kr.sm_mbf;
          }
          toObject(r = !1) {
            return kr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(kr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(kr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new kr();
            return kr.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(kr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return kr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(kr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              kr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CDeveloperPageLink";
          }
        }
        class Ze extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ze.prototype.clan_account_id || t.Sg(Ze.M()),
              c.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ze.sm_m ||
                (Ze.sm_m = {
                  proto: Ze,
                  fields: {
                    clan_account_id: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
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
              Ze.sm_m
            );
          }
          static MBF() {
            return Ze.sm_mbf || (Ze.sm_mbf = t.w0(Ze.M())), Ze.sm_mbf;
          }
          toObject(r = !1) {
            return Ze.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Ze.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Ze.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Ze();
            return Ze.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Ze.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Ze.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Ze.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Ze.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CDeveloperPageToApps";
          }
        }
        class Je extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Je.prototype.appid || t.Sg(Je.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Je.sm_m ||
                (Je.sm_m = {
                  proto: Je,
                  fields: {
                    appid: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    link: { n: 2, c: kr },
                    remove: {
                      n: 3,
                      d: !1,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    update_json_only: {
                      n: 4,
                      d: !1,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    skip_clan_permissions: {
                      n: 5,
                      d: !1,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    partner_id: {
                      n: 6,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              Je.sm_m
            );
          }
          static MBF() {
            return Je.sm_mbf || (Je.sm_mbf = t.w0(Je.M())), Je.sm_mbf;
          }
          toObject(r = !1) {
            return Je.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Je.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Je.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Je();
            return Je.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Je.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Je.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Je.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Je.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCatalog_SetDevPageLink_Request";
          }
        }
        class La extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return La.toObject(r, this);
          }
          static toObject(r, i) {
            return r ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(r) {
            return new La();
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new La();
            return La.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return La.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              La.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCatalog_SetDevPageLink_Response";
          }
        }
        class Ae extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ae.prototype.appid || t.Sg(Ae.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ae.sm_m ||
                (Ae.sm_m = {
                  proto: Ae,
                  fields: {
                    appid: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                  },
                }),
              Ae.sm_m
            );
          }
          static MBF() {
            return Ae.sm_mbf || (Ae.sm_mbf = t.w0(Ae.M())), Ae.sm_mbf;
          }
          toObject(r = !1) {
            return Ae.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Ae.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Ae.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Ae();
            return Ae.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Ae.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Ae.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Ae.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Ae.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCatalog_GetDevPageLinks_Request";
          }
        }
        class De extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              De.prototype.links || t.Sg(De.M()),
              c.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              De.sm_m ||
                (De.sm_m = {
                  proto: De,
                  fields: { links: { n: 1, c: kr, r: !0, q: !0 } },
                }),
              De.sm_m
            );
          }
          static MBF() {
            return De.sm_mbf || (De.sm_mbf = t.w0(De.M())), De.sm_mbf;
          }
          toObject(r = !1) {
            return De.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(De.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(De.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new De();
            return De.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(De.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return De.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(De.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              De.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCatalog_GetDevPageLinks_Response";
          }
        }
        class qe extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              qe.prototype.clan_account_ids || t.Sg(qe.M()),
              c.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              qe.sm_m ||
                (qe.sm_m = {
                  proto: qe,
                  fields: {
                    clan_account_ids: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: t.qM.readUint32,
                      pbr: t.qM.readPackedUint32,
                      bw: t.gp.writeRepeatedUint32,
                    },
                    ignore_dlc: { n: 2, br: t.qM.readBool, bw: t.gp.writeBool },
                  },
                }),
              qe.sm_m
            );
          }
          static MBF() {
            return qe.sm_mbf || (qe.sm_mbf = t.w0(qe.M())), qe.sm_mbf;
          }
          toObject(r = !1) {
            return qe.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(qe.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(qe.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new qe();
            return qe.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(qe.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return qe.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(qe.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              qe.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCatalog_GetDevPageAllAppsLinked_Request";
          }
        }
        class pe extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              pe.prototype.results || t.Sg(pe.M()),
              c.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              pe.sm_m ||
                (pe.sm_m = {
                  proto: pe,
                  fields: { results: { n: 1, c: Ze, r: !0, q: !0 } },
                }),
              pe.sm_m
            );
          }
          static MBF() {
            return pe.sm_mbf || (pe.sm_mbf = t.w0(pe.M())), pe.sm_mbf;
          }
          toObject(r = !1) {
            return pe.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(pe.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(pe.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new pe();
            return pe.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(pe.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return pe.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(pe.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              pe.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCatalog_GetDevPageAllAppsLinked_Response";
          }
        }
        class Pe extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Pe.prototype.clan_account_id || t.Sg(Pe.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Pe.sm_m ||
                (Pe.sm_m = {
                  proto: Pe,
                  fields: {
                    clan_account_id: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    listid: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    ignore_dlc: { n: 3, br: t.qM.readBool, bw: t.gp.writeBool },
                  },
                }),
              Pe.sm_m
            );
          }
          static MBF() {
            return Pe.sm_mbf || (Pe.sm_mbf = t.w0(Pe.M())), Pe.sm_mbf;
          }
          toObject(r = !1) {
            return Pe.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Pe.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Pe.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Pe();
            return Pe.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Pe.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Pe.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Pe.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Pe.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCatalog_GetDevPageListApps_Request";
          }
        }
        class Re extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Re.prototype.apps || t.Sg(Re.M()),
              c.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Re.sm_m ||
                (Re.sm_m = {
                  proto: Re,
                  fields: { apps: { n: 1, c: Ge, r: !0, q: !0 } },
                }),
              Re.sm_m
            );
          }
          static MBF() {
            return Re.sm_mbf || (Re.sm_mbf = t.w0(Re.M())), Re.sm_mbf;
          }
          toObject(r = !1) {
            return Re.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Re.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Re.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Re();
            return Re.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Re.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Re.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Re.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Re.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCatalog_GetDevPageListApps_Response";
          }
        }
        class Ge extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ge.prototype.appid || t.Sg(Ge.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ge.sm_m ||
                (Ge.sm_m = {
                  proto: Ge,
                  fields: {
                    appid: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    sort_order: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              Ge.sm_m
            );
          }
          static MBF() {
            return Ge.sm_mbf || (Ge.sm_mbf = t.w0(Ge.M())), Ge.sm_mbf;
          }
          toObject(r = !1) {
            return Ge.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Ge.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Ge.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Ge();
            return Ge.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Ge.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Ge.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Ge.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Ge.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCatalog_GetDevPageListApps_Response_ListApp";
          }
        }
        class Ce extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ce.prototype.partnerid || t.Sg(Ce.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ce.sm_m ||
                (Ce.sm_m = {
                  proto: Ce,
                  fields: {
                    partnerid: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              Ce.sm_m
            );
          }
          static MBF() {
            return Ce.sm_mbf || (Ce.sm_mbf = t.w0(Ce.M())), Ce.sm_mbf;
          }
          toObject(r = !1) {
            return Ce.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Ce.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Ce.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Ce();
            return Ce.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Ce.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Ce.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Ce.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Ce.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCatalog_GetDevPagesForPartner_Request";
          }
        }
        class _e extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              _e.prototype.results || t.Sg(_e.M()),
              c.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _e.sm_m ||
                (_e.sm_m = {
                  proto: _e,
                  fields: { results: { n: 1, c: rs, r: !0, q: !0 } },
                }),
              _e.sm_m
            );
          }
          static MBF() {
            return _e.sm_mbf || (_e.sm_mbf = t.w0(_e.M())), _e.sm_mbf;
          }
          toObject(r = !1) {
            return _e.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(_e.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(_e.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new _e();
            return _e.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(_e.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return _e.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(_e.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              _e.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCatalog_GetDevPagesForPartner_Response";
          }
        }
        class rs extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              rs.prototype.clan_accountid || t.Sg(rs.M()),
              c.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              rs.sm_m ||
                (rs.sm_m = {
                  proto: rs,
                  fields: {
                    clan_accountid: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    linknames: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: t.qM.readString,
                      bw: t.gp.writeRepeatedString,
                    },
                  },
                }),
              rs.sm_m
            );
          }
          static MBF() {
            return rs.sm_mbf || (rs.sm_mbf = t.w0(rs.M())), rs.sm_mbf;
          }
          toObject(r = !1) {
            return rs.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(rs.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(rs.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new rs();
            return rs.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(rs.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return rs.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(rs.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              rs.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCatalog_GetDevPagesForPartner_Response_CDevPageInfo";
          }
        }
        var Cl;
        ((s) => {
          function r(m, f, u) {
            return m.SendMsg(
              "StoreCatalog.SetDevPageLink#1",
              (0, w.I8)(Je, f, u),
              La,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          s.SetDevPageLink = r;
          function i(m, f, u) {
            return m.SendMsg(
              "StoreCatalog.GetDevPageLinks#1",
              (0, w.I8)(Ae, f, u),
              De,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          s.GetDevPageLinks = i;
          function e(m, f, u) {
            return m.SendMsg(
              "StoreCatalog.GetDevPageAllAppsLinked#1",
              (0, w.I8)(qe, f, u),
              pe,
              { ePrivilege: 1 },
            );
          }
          s.GetDevPageAllAppsLinked = e;
          function n(m, f, u) {
            return m.SendMsg(
              "StoreCatalog.GetDevPageListApps#1",
              (0, w.I8)(Pe, f, u),
              Re,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          s.GetDevPageListApps = n;
          function l(m, f, u) {
            return m.SendMsg(
              "StoreCatalog.GetDevPagesForPartner#1",
              (0, w.I8)(Ce, f, u),
              _e,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          s.GetDevPagesForPartner = l;
        })(Cl || (Cl = {}));
        var Oc = W(7997);
        function jb(s) {
          return "unknown EStoreCuratorRecommendationState ( " + s + " )";
        }
        function Ob(s) {
          return "unknown EStoreCuratorListType ( " + s + " )";
        }
        function vb(s) {
          return "unknown EStoreCuratorListState ( " + s + " )";
        }
        class is extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              is.prototype.appid || t.Sg(is.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              is.sm_m ||
                (is.sm_m = {
                  proto: is,
                  fields: {
                    appid: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    clanid: { n: 2, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    link_url: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    link_text: {
                      n: 4,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    blurb: { n: 5, br: t.qM.readString, bw: t.gp.writeString },
                    time_recommended: {
                      n: 6,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    comment_count: {
                      n: 7,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    upvote_count: {
                      n: 8,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    accountid_creator: {
                      n: 9,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    recommendation_state: {
                      n: 10,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    received_compensation: {
                      n: 11,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    received_for_free: {
                      n: 12,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              is.sm_m
            );
          }
          static MBF() {
            return is.sm_mbf || (is.sm_mbf = t.w0(is.M())), is.sm_mbf;
          }
          toObject(r = !1) {
            return is.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(is.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(is.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new is();
            return is.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(is.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return is.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(is.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              is.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCuration_RecommendedApp";
          }
        }
        class Er extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Er.prototype.listid || t.Sg(Er.M()),
              c.Message.initialize(this, r, 0, -1, [10, 12, 13, 14], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Er.sm_m ||
                (Er.sm_m = {
                  proto: Er,
                  fields: {
                    listid: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    title: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                    blurb: { n: 3, br: t.qM.readString, bw: t.gp.writeString },
                    link: { n: 4, br: t.qM.readString, bw: t.gp.writeString },
                    list_state: { n: 5, br: t.qM.readEnum, bw: t.gp.writeEnum },
                    sort_order: {
                      n: 6,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    time_created: {
                      n: 7,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    time_updated: {
                      n: 8,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    accountid: {
                      n: 9,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    apps: { n: 10, c: ts, r: !0, q: !0 },
                    list_type: { n: 11, br: t.qM.readEnum, bw: t.gp.writeEnum },
                    title_localization: { n: 12, c: Oc.O2, r: !0, q: !0 },
                    blurb_localization: { n: 13, c: Oc.O2, r: !0, q: !0 },
                    link_localization: { n: 14, c: Oc.O2, r: !0, q: !0 },
                    sale_clan_steamid: {
                      n: 15,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    sale_clan_event_gid: {
                      n: 16,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    list_jsondata: {
                      n: 17,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    clan_account_id: {
                      n: 18,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              Er.sm_m
            );
          }
          static MBF() {
            return Er.sm_mbf || (Er.sm_mbf = t.w0(Er.M())), Er.sm_mbf;
          }
          toObject(r = !1) {
            return Er.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Er.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Er.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Er();
            return Er.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Er.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Er.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Er.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Er.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCuration_ListDetails";
          }
        }
        class ts extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ts.prototype.recommended_app || t.Sg(ts.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ts.sm_m ||
                (ts.sm_m = {
                  proto: ts,
                  fields: {
                    recommended_app: { n: 1, c: is },
                    blurb: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                    sort_order: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              ts.sm_m
            );
          }
          static MBF() {
            return ts.sm_mbf || (ts.sm_mbf = t.w0(ts.M())), ts.sm_mbf;
          }
          toObject(r = !1) {
            return ts.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(ts.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(ts.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new ts();
            return ts.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(ts.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ts.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(ts.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ts.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCuration_ListDetails_ListItem";
          }
        }
        class es extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              es.prototype.steamid || t.Sg(es.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              es.sm_m ||
                (es.sm_m = {
                  proto: es,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    list_state: { n: 2, br: t.qM.readEnum, bw: t.gp.writeEnum },
                    start: { n: 3, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    count: { n: 4, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    return_total_only: {
                      n: 5,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    return_metadata_only: {
                      n: 6,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    max_apps: { n: 7, br: t.qM.readInt32, bw: t.gp.writeInt32 },
                    sale_clan_event_gid: {
                      n: 8,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              es.sm_m
            );
          }
          static MBF() {
            return es.sm_mbf || (es.sm_mbf = t.w0(es.M())), es.sm_mbf;
          }
          toObject(r = !1) {
            return es.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(es.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(es.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new es();
            return es.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(es.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return es.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(es.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              es.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCuration_GetLists_Request";
          }
        }
        class ss extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ss.prototype.list_details || t.Sg(ss.M()),
              c.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ss.sm_m ||
                (ss.sm_m = {
                  proto: ss,
                  fields: {
                    list_details: { n: 1, c: Er, r: !0, q: !0 },
                    total: { n: 2, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                  },
                }),
              ss.sm_m
            );
          }
          static MBF() {
            return ss.sm_mbf || (ss.sm_mbf = t.w0(ss.M())), ss.sm_mbf;
          }
          toObject(r = !1) {
            return ss.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(ss.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(ss.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new ss();
            return ss.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(ss.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ss.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(ss.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ss.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCuration_GetLists_Response";
          }
        }
        class as extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              as.prototype.steamid || t.Sg(as.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              as.sm_m ||
                (as.sm_m = {
                  proto: as,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    listid: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              as.sm_m
            );
          }
          static MBF() {
            return as.sm_mbf || (as.sm_mbf = t.w0(as.M())), as.sm_mbf;
          }
          toObject(r = !1) {
            return as.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(as.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(as.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new as();
            return as.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(as.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return as.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(as.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              as.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCuration_GetListDetails_Request";
          }
        }
        class ns extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ns.prototype.list_details || t.Sg(ns.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ns.sm_m ||
                (ns.sm_m = {
                  proto: ns,
                  fields: { list_details: { n: 1, c: Er } },
                }),
              ns.sm_m
            );
          }
          static MBF() {
            return ns.sm_mbf || (ns.sm_mbf = t.w0(ns.M())), ns.sm_mbf;
          }
          toObject(r = !1) {
            return ns.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(ns.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(ns.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new ns();
            return ns.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(ns.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ns.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(ns.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ns.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCuration_GetListDetails_Response";
          }
        }
        var _l;
        ((s) => {
          function r(e, n, l) {
            return e.SendMsg(
              "StoreCuration.GetLists#1",
              (0, w.I8)(es, n, l),
              ss,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          s.GetLists = r;
          function i(e, n, l) {
            return e.SendMsg(
              "StoreCuration.GetListDetails#1",
              (0, w.I8)(as, n, l),
              ns,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          s.GetListDetails = i;
        })(_l || (_l = {}));
        var ju = W(1735),
          Ss = W.n(ju);
        const Ub = 0,
          rm = 1,
          vc = 2,
          im = 4,
          qn = 8,
          tm = 16,
          em = 32,
          sm = 64,
          am = 128,
          nm = 256;
        function xb(s) {
          return "unknown EClanAccountFlags ( " + s + " )";
        }
        class cs extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              cs.prototype.steamid || t.Sg(cs.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              cs.sm_m ||
                (cs.sm_m = {
                  proto: cs,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    accept: { n: 2, br: t.qM.readBool, bw: t.gp.writeBool },
                  },
                }),
              cs.sm_m
            );
          }
          static MBF() {
            return cs.sm_mbf || (cs.sm_mbf = t.w0(cs.M())), cs.sm_mbf;
          }
          toObject(r = !1) {
            return cs.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(cs.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(cs.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new cs();
            return cs.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(cs.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return cs.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(cs.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              cs.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CClan_RespondToClanInvite_Request";
          }
        }
        class Xa extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Xa.toObject(r, this);
          }
          static toObject(r, i) {
            return r ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(r) {
            return new Xa();
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Xa();
            return Xa.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Xa.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Xa.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CClan_RespondToClanInvite_Response";
          }
        }
        class ls extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ls.prototype.steamid || t.Sg(ls.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ls.sm_m ||
                (ls.sm_m = {
                  proto: ls,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    rtime_oldest_date: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              ls.sm_m
            );
          }
          static MBF() {
            return ls.sm_mbf || (ls.sm_mbf = t.w0(ls.M())), ls.sm_mbf;
          }
          toObject(r = !1) {
            return ls.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(ls.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(ls.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new ls();
            return ls.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(ls.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ls.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(ls.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ls.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CClan_GetDraftAndRecentPartnerEventSnippet_Request";
          }
        }
        class ms extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ms.prototype.snippets || t.Sg(ms.M()),
              c.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ms.sm_m ||
                (ms.sm_m = {
                  proto: ms,
                  fields: { snippets: { n: 1, c: fs, r: !0, q: !0 } },
                }),
              ms.sm_m
            );
          }
          static MBF() {
            return ms.sm_mbf || (ms.sm_mbf = t.w0(ms.M())), ms.sm_mbf;
          }
          toObject(r = !1) {
            return ms.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(ms.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(ms.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new ms();
            return ms.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(ms.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ms.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(ms.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ms.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CClan_GetDraftAndRecentPartnerEventSnippet_Response";
          }
        }
        class fs extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              fs.prototype.gid || t.Sg(fs.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              fs.sm_m ||
                (fs.sm_m = {
                  proto: fs,
                  fields: {
                    gid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    announcement_gid: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    hidden: { n: 3, br: t.qM.readBool, bw: t.gp.writeBool },
                    published: { n: 4, br: t.qM.readBool, bw: t.gp.writeBool },
                    rtime32_start_time: {
                      n: 5,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    event_name: {
                      n: 6,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    event_type: { n: 7, br: t.qM.readEnum, bw: t.gp.writeEnum },
                  },
                }),
              fs.sm_m
            );
          }
          static MBF() {
            return fs.sm_mbf || (fs.sm_mbf = t.w0(fs.M())), fs.sm_mbf;
          }
          toObject(r = !1) {
            return fs.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(fs.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(fs.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new fs();
            return fs.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(fs.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return fs.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(fs.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              fs.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CClan_GetDraftAndRecentPartnerEventSnippet_Response_CEventSnippetData";
          }
        }
        class us extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              us.prototype.requests || t.Sg(us.M()),
              c.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              us.sm_m ||
                (us.sm_m = {
                  proto: us,
                  fields: {
                    requests: { n: 1, c: ds, r: !0, q: !0 },
                    cursor: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                    count: {
                      n: 3,
                      d: 100,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              us.sm_m
            );
          }
          static MBF() {
            return us.sm_mbf || (us.sm_mbf = t.w0(us.M())), us.sm_mbf;
          }
          toObject(r = !1) {
            return us.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(us.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(us.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new us();
            return us.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(us.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return us.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(us.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              us.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CClan_GetPartnerEventsByBuildIDRange_Request";
          }
        }
        class ds extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ds.prototype.appid || t.Sg(ds.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ds.sm_m ||
                (ds.sm_m = {
                  proto: ds,
                  fields: {
                    appid: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    start_build_id: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    end_build_id: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    branch: { n: 4, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              ds.sm_m
            );
          }
          static MBF() {
            return ds.sm_mbf || (ds.sm_mbf = t.w0(ds.M())), ds.sm_mbf;
          }
          toObject(r = !1) {
            return ds.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(ds.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(ds.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new ds();
            return ds.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(ds.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ds.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(ds.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ds.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CClan_GetPartnerEventsByBuildIDRange_Request_PatchNoteRange";
          }
        }
        class Bs extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Bs.prototype.matches || t.Sg(Bs.M()),
              c.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Bs.sm_m ||
                (Bs.sm_m = {
                  proto: Bs,
                  fields: {
                    matches: { n: 1, c: gs, r: !0, q: !0 },
                    num_total_results: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    next_cursor: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              Bs.sm_m
            );
          }
          static MBF() {
            return Bs.sm_mbf || (Bs.sm_mbf = t.w0(Bs.M())), Bs.sm_mbf;
          }
          toObject(r = !1) {
            return Bs.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(Bs.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(Bs.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Bs();
            return Bs.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(Bs.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Bs.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(Bs.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Bs.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CClan_GetPartnerEventsByBuildIDRange_Response";
          }
        }
        class gs extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              gs.prototype.appid || t.Sg(gs.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              gs.sm_m ||
                (gs.sm_m = {
                  proto: gs,
                  fields: {
                    appid: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    build_id: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    branch: { n: 3, br: t.qM.readString, bw: t.gp.writeString },
                    clan_event_gid: {
                      n: 4,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    clan_account_id: {
                      n: 5,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              gs.sm_m
            );
          }
          static MBF() {
            return gs.sm_mbf || (gs.sm_mbf = t.w0(gs.M())), gs.sm_mbf;
          }
          toObject(r = !1) {
            return gs.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(gs.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(gs.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new gs();
            return gs.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(gs.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return gs.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(gs.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              gs.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CClan_GetPartnerEventsByBuildIDRange_Response_PatchNotesDesc";
          }
        }
        var cm;
        ((s) => {
          function r(n, l, m) {
            return n.SendMsg(
              "Clan.RespondToClanInvite#1",
              (0, w.I8)(cs, l, m),
              Xa,
              { ePrivilege: 1 },
            );
          }
          s.RespondToClanInvite = r;
          function i(n, l, m) {
            return n.SendMsg(
              "Clan.GetDraftAndRecentPartnerEventSnippet#1",
              (0, w.I8)(ls, l, m),
              ms,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          s.GetDraftAndRecentPartnerEventSnippet = i;
          function e(n, l, m) {
            return n.SendMsg(
              "Clan.GetPartnerEventsByBuildIDRange#1",
              (0, w.I8)(us, l, m),
              Bs,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }
          s.GetPartnerEventsByBuildIDRange = e;
        })(cm || (cm = {}));
        var Ou = Object.defineProperty,
          vu = Object.getOwnPropertyDescriptor,
          Uc = (s, r, i, e) => {
            for (
              var n = e > 1 ? void 0 : e ? vu(r, i) : r, l = s.length - 1, m;
              l >= 0;
              l--
            )
              (m = s[l]) && (n = (e ? m(r, i, n) : m(n)) || n);
            return e && n && Ou(r, i, n), n;
          };
        class nn {
          m_clanSteamID;
          m_appidList = new Array();
          m_strName = "";
          m_strAvatarURLFullSize = "";
          m_strTagLineLoc = "";
          m_nFollowers = 0;
          m_strVanity = "";
          m_webLink = void 0;
          m_linkedEvent = void 0;
          m_mapListInfo = new Map();
          m_promise;
          m_bIsLoaded = !1;
          m_bIsHidden = !1;
          m_clanAccountFlags = 0;
          constructor(r) {
            (0, M.Gn)(this), (this.m_clanSteamID = r);
          }
          Initialize(r) {
            (this.m_strName = r.name || ""),
              (this.m_strAvatarURLFullSize =
                r.avatar_url_full_size ||
                "https://avatars.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg"),
              (this.m_strTagLineLoc = r.tag_line_localized || ""),
              (this.m_nFollowers = r.followers || 0),
              (this.m_strVanity = r.vanity || void 0),
              (this.m_webLink = r.weblink),
              (this.m_bIsHidden = r.hidden || !1),
              (this.m_clanAccountFlags = r.clan_account_flags ?? 0),
              (this.m_linkedEvent = r.linked_event),
              (this.m_mapListInfo = new Map(Object.entries(r.list_info ?? {}))),
              r.appids && r.appids.forEach((i) => this.m_appidList.push(i)),
              (this.m_bIsLoaded = !0);
          }
          GetCreatorHomeIdentifier() {
            return {
              name: this.m_strName,
              clan_account_id: this.m_clanSteamID.GetAccountID(),
              type: "developer",
              hidden: this.m_bIsHidden,
            };
          }
          BIsPartnerEventEditorEnabled() {
            return !!(this.m_clanAccountFlags & qn);
          }
          BHasClanAccountFlagSet(r) {
            return !!(this.m_clanAccountFlags & r);
          }
          BIsLoaded() {
            return this.m_bIsLoaded;
          }
          GetClanSteamID() {
            return this.m_clanSteamID;
          }
          GetClanAccountID() {
            return this.m_clanSteamID.GetAccountID();
          }
          GetAppIDList() {
            return this.m_appidList;
          }
          GetName() {
            return this.m_strName;
          }
          GetAvatarURLFullSize() {
            return this.m_strAvatarURLFullSize;
          }
          GetTagLine() {
            return this.m_strTagLineLoc;
          }
          GetNumFollowers() {
            return this.m_nFollowers;
          }
          BIsHidden() {
            return this.m_bIsHidden;
          }
          GetCreatorHomeURL(r) {
            if (this.m_strVanity) {
              switch (r) {
                case "publisher":
                  return (
                    o.TS.STORE_BASE_URL + "publisher/" + this.m_strVanity + "/"
                  );
                case "franchise":
                  return (
                    o.TS.STORE_BASE_URL + "franchise/" + this.m_strVanity + "/"
                  );
              }
              return (
                o.TS.STORE_BASE_URL + "developer/" + this.m_strVanity + "/"
              );
            }
            return (
              o.TS.STORE_BASE_URL +
              "curator/" +
              this.m_clanSteamID.GetAccountID() +
              "/"
            );
          }
          BHasWebLink() {
            return this.m_webLink !== void 0;
          }
          GetWebLink() {
            return this.m_webLink;
          }
          GetVanityString() {
            return this.m_strVanity;
          }
          GetLinkedEventGID() {
            return this.m_linkedEvent;
          }
          GetListInfo() {
            return this.m_mapListInfo;
          }
          AdjustFollower(r) {
            this.m_nFollowers += r;
          }
          async EnablePartnerEventEditorFlag() {
            this.BIsPartnerEventEditorEnabled() ||
              (await this.UpdateGroupFlagsFeature([vc, qn], !0));
          }
          async UpdateGroupFlagsFeature(r, i) {
            let e = o.TS.PARTNER_BASE_URL + "sales/ajaxupdateclanaccountflags",
              n = this.m_clanAccountFlags;
            if (
              (r.forEach((u) => {
                i ? (n |= u) : (n &= ~u);
              }),
              n == this.m_clanAccountFlags)
            )
              return;
            let l = new Array();
            n & rm && l.push(rm),
              n & qn && l.push(qn),
              n & vc && l.push(vc),
              n & im && l.push(im),
              n & tm && l.push(tm),
              n & em && l.push(em),
              n & sm && l.push(sm),
              n & am && l.push(am),
              n & nm && l.push(nm);
            let m = new FormData();
            m.append("sessionid", (0, o.KC)()),
              m.append("clan_account_id", this.GetClanAccountID().toString()),
              m.append("accountflags", JSON.stringify(l));
            let f = await Ss().post(e, m);
            f &&
              f.status == 200 &&
              f.data.success == x.R &&
              (this.m_clanAccountFlags = n);
          }
        }
        Uc([M.sH], nn.prototype, "m_appidList", 2),
          Uc([M.sH], nn.prototype, "m_nFollowers", 2),
          Uc([M.sH], nn.prototype, "m_clanAccountFlags", 2);
        var Uu = W(1023),
          lm = W(7291),
          xu = Object.defineProperty,
          Iu = Object.getOwnPropertyDescriptor,
          xc = (s, r, i, e) => {
            for (
              var n = e > 1 ? void 0 : e ? Iu(r, i) : r, l = s.length - 1, m;
              l >= 0;
              l--
            )
              (m = s[l]) && (n = (e ? m(r, i, n) : m(n)) || n);
            return e && n && xu(r, i, n), n;
          };
        const pn = class Im {
          constructor() {
            (0, M.Gn)(this);
          }
          m_mapClanToCreatorHome = new Map();
          m_mapAppToCreatorIDList = new Map();
          m_bLoadedFromConfig = !1;
          m_serviceTransport = void 0;
          LazyInit() {
            if (!this.m_bLoadedFromConfig) {
              const r = (0, o.Tc)("creatorhome", "application_config");
              this.ValidateStoreDefault(r) &&
                r.forEach((e) => {
                  const n = Number(e.creator_clan_id),
                    l = Ws.b.InitFromClanID(n),
                    m = new nn(l);
                  m.Initialize(e),
                    (m.m_promise = Im.GetAsPromise(m)),
                    this.m_mapClanToCreatorHome.set(n, m);
                });
              const i = (0, o.Tc)("creatorhomeforapp", "application_config");
              this.ValidateStoreDefaultAppList(i) &&
                i.forEach((e) => {
                  e.appid !== void 0 &&
                    (this.m_mapAppToCreatorIDList.has(e.appid) ||
                      this.m_mapAppToCreatorIDList.set(e.appid, new Array()),
                    this.m_mapAppToCreatorIDList.get(e.appid).push(e));
                }),
                (this.m_bLoadedFromConfig = !0);
            }
          }
          GetServiceTransport() {
            if (!this.m_serviceTransport) {
              const r = (0, o.Tc)("loyalty_webapi_token", "application_config"),
                i = new Uu.D(o.TS.WEBAPI_BASE_URL, r || void 0);
              this.m_serviceTransport = i.GetServiceTransport();
            }
            return this.m_serviceTransport;
          }
          static async GetAsPromise(r) {
            return r;
          }
          ValidateStoreDefault(r) {
            const i = r;
            return i &&
              Array.isArray(i) &&
              i.length > 0 &&
              typeof i[0] == "object"
              ? typeof i[0].name == "string" &&
                  (typeof i[0].creator_clan_id == "string" ||
                    typeof i[0].creator_clan_id == "number")
              : !1;
          }
          ValidateStoreDefaultAppList(r) {
            const i = r;
            return i &&
              Array.isArray(i) &&
              i.length > 0 &&
              typeof i[0] == "object"
              ? typeof i[0].clan_account_id == "number" &&
                  i[0].clan_account_id > 0 &&
                  typeof i[0].appid == "number" &&
                  i[0].appid > 0
              : !1;
          }
          BHasCreatorHomeLoaded(r) {
            return (
              this.m_mapClanToCreatorHome.has(r.GetAccountID()) &&
              this.m_mapClanToCreatorHome.get(r.GetAccountID()).BIsLoaded()
            );
          }
          GetCreatorHome(r) {
            return this.m_mapClanToCreatorHome.get(r.GetAccountID());
          }
          GetCreatorHomeByID(r) {
            return this.m_mapClanToCreatorHome.get(r.clan_account_id);
          }
          async LoadCreatorHome(r, i = !1, e) {
            if (
              (this.LazyInit(),
              i || !this.m_mapClanToCreatorHome.has(r.GetAccountID()))
            ) {
              let n = new nn(r);
              (n.m_promise = this.InternalCreatorHome(n, e)),
                await n.m_promise,
                this.m_mapClanToCreatorHome.set(r.GetAccountID(), n);
            }
            return this.m_mapClanToCreatorHome.get(r.GetAccountID()).m_promise;
          }
          async InternalCreatorHome(r, i) {
            let e = { get_appids: !0, l: o.TS.LANGUAGE },
              n =
                o.TS.STORE_BASE_URL +
                "curator/" +
                r.GetClanAccountID() +
                "/ajaxgetcreatorhomeinfo",
              l = await Ss().get(n, { params: e, cancelToken: i && i.token });
            return r.Initialize(l.data), r;
          }
          async LoadCreatorHomeListForAppIncludeHiddden(r, i) {
            if ((this.LazyInit(), !this.m_mapAppToCreatorIDList.has(r))) {
              let e = { appid: r },
                n = o.TS.STORE_BASE_URL + "events/ajaxgetcreatorhomeidforapp",
                l = await Ss().get(n, {
                  params: e,
                  cancelToken: i && i.token,
                  withCredentials: !0,
                });
              this.m_mapAppToCreatorIDList.set(r, l.data.creator_list);
            }
            return this.m_mapAppToCreatorIDList.get(r);
          }
          async SearchCreatorHomeStore(r, i, e) {
            let n = `${o.TS.STORE_BASE_URL}curator/0/ajaxsearchcurators`,
              l = {
                term: r.replace(" ", "+"),
                require_creator: i,
                cc: o.TS.COUNTRY,
                l: o.TS.LANGUAGE,
                origin: self.origin,
              },
              m = new Array();
            const f = await Ss().get(n, { params: l, cancelToken: e.token });
            return (
              f.data.curators &&
                (0, M.h5)(() => {
                  f.data.curators.forEach((u) => {
                    if (!this.m_mapClanToCreatorHome.has(u.creator_clan_id)) {
                      let B = Ws.b.InitFromClanID(u.creator_clan_id),
                        y = new nn(B);
                      y.Initialize(u),
                        this.m_mapClanToCreatorHome.set(u.creator_clan_id, y);
                    }
                    m.push(this.m_mapClanToCreatorHome.get(u.creator_clan_id));
                  });
                }),
              m
            );
          }
          GetCreatorHomeListForAppIncludeHidden(r) {
            return this.m_mapAppToCreatorIDList.has(r)
              ? this.m_mapAppToCreatorIDList.get(r)
              : [];
          }
        };
        xc([M.sH], pn.prototype, "m_mapClanToCreatorHome", 2),
          xc([M.sH], pn.prototype, "m_mapAppToCreatorIDList", 2),
          xc([M.XI], pn.prototype, "LazyInit", 1);
        let Su = pn;
        const Za = new Su();
        (0, lm.V)("g_CreatorHomeStore", Za);
        function Ib(s) {
          if (!s) return null;
          const r = Za.BHasCreatorHomeLoaded(s.clanSteamID)
            ? Za.GetCreatorHome(s.clanSteamID)
            : void 0;
          return s.GetSaleURL(r?.GetCreatorHomeURL("developer"));
        }
        function Ic(s) {
          if (!s) return;
          const r = GetConfigJSON(
            "creator_home_list_info",
            "application_config",
          );
          if (r == null || typeof r != "object" || Array.isArray(r)) return;
          const i = r[s];
          if (!(!i || !i.title))
            return {
              title: i.title,
              description: i.description?.length ? i.description : void 0,
              imageUrl: i.listtileimage?.length ? i.listtileimage : void 0,
            };
        }
        function Sb(s) {
          return Ic(s)?.title;
        }
        function Hb(s) {
          return Ic(s)?.description;
        }
        function Nb(s) {
          return Ic(s)?.imageUrl;
        }
        function Hu(s) {
          const r = CSteamID.InitFromClanID(s);
          return {
            queryKey: ["CreatorHome", s],
            initialData: () => Za.GetCreatorHome(r),
            queryFn: async () => {
              const i = CSteamID.InitFromClanID(s);
              return await Za.LoadCreatorHome(i, !0);
            },
          };
        }
        function kb(s) {
          const { data: r, isFetching: i, refetch: e } = useQuery(Hu(s));
          return { creatorHome: r, isFetching: i, refetch: e };
        }
        function Eb(s, r, i) {
          const e = useQuery({
            queryKey: ["useCreateHomeLinkedApps", r, i],
            queryFn: async () => {
              const n = CProtoBufMsg.Init(
                CStoreCatalog_GetDevPageAllAppsLinked_Request,
              );
              n.Body().add_clan_account_ids(r),
                i && n.Body().set_ignore_dlc(!0);
              const l = await StoreCatalogService.GetDevPageAllAppsLinked(s, n);
              if (l.GetEResult() != k_EResultOK)
                throw new Error(
                  `Error from useCreateHomeLinkedApps: ${l.GetEResult()}`,
                );
              return l.Body().results().length == 0
                ? []
                : l.Body().results()[0].appid_list();
            },
            enabled: !!(r > 0 && s),
          });
          return e?.isLoading ? null : e.data;
        }
        function Nu(s, r, i) {
          return {
            queryKey: ["GetCreatorHomeListAppsQuery", s, r, i],
            queryFn: async () => {
              const e = Za.GetServiceTransport(),
                n = CProtoBufMsg.Init(CStoreCatalog_GetDevPageListApps_Request);
              n.Body().set_clan_account_id(s),
                n.Body().set_listid(r),
                i && n.Body().set_ignore_dlc(!0);
              const l = await StoreCatalogService.GetDevPageListApps(e, n);
              if (l.GetEResult() != k_EResultOK)
                throw new Error(
                  `Error from GetCreatorHomeListAppsQuery: ${l.GetEResult()}`,
                );
              return l
                .Body()
                .apps()
                .slice()
                .sort((m, f) => (m.sort_order() ?? 0) - (f.sort_order() ?? 0))
                .map((m) => m.appid() ?? 0)
                .filter((m) => m > 0);
            },
            enabled: !!(s > 0 && r),
          };
        }
        function Fb(s, r, i) {
          const e = useQuery(Nu(s, r, i));
          return e?.isLoading ? null : e.data;
        }
        function ku(s, r) {
          return {
            queryKey: ["GetCreatorHomeGetAllListsQuery", s, r],
            queryFn: async () => {
              const i = Za.GetServiceTransport(),
                e = CProtoBufMsg.Init(CStoreCuration_GetLists_Request);
              e
                .Body()
                .set_steamid(
                  new CSteamID(
                    s,
                    Config.EUNIVERSE,
                    k_EAccountTypeClan,
                    0,
                  ).ConvertTo64BitString(),
                ),
                e.Body().set_count(100);
              const n = await StoreCurationService.GetLists(i, e);
              return n.BSuccess()
                ? n
                    .Body()
                    .list_details()
                    .filter(
                      (l) =>
                        r ||
                        l.list_state() !=
                          EStoreCuratorListState.k_EStoreCuratorListState_Hidden,
                    )
                : null;
            },
            enabled: s > 0,
          };
        }
        function $b(s, r) {
          const { data: i, isFetching: e, refetch: n } = useQuery(ku(s, r));
          return { lists: i, isFetching: e, refetch: n };
        }
        function Eu(s, r) {
          return {
            queryKey: ["GetCreatorHomeGetListsDetailsQuery", s, r],
            queryFn: async () => {
              const i = Za.GetServiceTransport(),
                e = CProtoBufMsg.Init(CStoreCuration_GetListDetails_Request);
              e
                .Body()
                .set_steamid(
                  new CSteamID(
                    s,
                    Config.EUNIVERSE,
                    k_EAccountTypeClan,
                    0,
                  ).ConvertTo64BitString(),
                ),
                e.Body().set_listid(r);
              const n = await StoreCurationService.GetListDetails(i, e);
              return n.BSuccess() ? (n.Body().list_details() ?? null) : null;
            },
            enabled: s > 0,
          };
        }
        function Qb(s, r) {
          const { data: i, isFetching: e, refetch: n } = useQuery(Eu(s, r));
          return { list: i, isFetching: e, refetch: n };
        }
        const Fu = () => (F.TS.EUNIVERSE === k.Rv ? 2581 : 45267781);
        var mm = W(4592),
          $u = ((s) => (
            (s[(s.k_ENotifyFlagNone = 0)] = "k_ENotifyFlagNone"),
            (s[(s.k_ENotifyFlagByEmail = 1)] = "k_ENotifyFlagByEmail"),
            (s[(s.k_ENotifyFlagByPush = 2)] = "k_ENotifyFlagByPush"),
            s
          ))($u || {}),
          Qu = Object.defineProperty,
          Ku = Object.getOwnPropertyDescriptor,
          Us = (s, r, i, e) => {
            for (
              var n = e > 1 ? void 0 : e ? Ku(r, i) : r, l = s.length - 1, m;
              l >= 0;
              l--
            )
              (m = s[l]) && (n = (e ? m(r, i, n) : m(n)) || n);
            return e && n && Qu(r, i, n), n;
          };
        class Os {
          clanid = void 0;
          appid = 0;
          can_edit = !1;
          owns_app = !1;
          follows_app = !1;
          support_user = !1;
          valve_admin = !1;
          limited_user = !1;
          event_ignored = new Array();
          event_followed = new Array();
          event_followed_flags = new Array();
          constructor(r) {
            (0, M.Gn)(this), (this.clanid = r);
          }
        }
        Us([M.sH], Os.prototype, "clanid", 2),
          Us([M.sH], Os.prototype, "appid", 2),
          Us([M.sH], Os.prototype, "can_edit", 2),
          Us([M.sH], Os.prototype, "owns_app", 2),
          Us([M.sH], Os.prototype, "follows_app", 2),
          Us([M.sH], Os.prototype, "support_user", 2),
          Us([M.sH], Os.prototype, "valve_admin", 2),
          Us([M.sH], Os.prototype, "limited_user", 2),
          Us([M.sH], Os.prototype, "event_ignored", 2),
          Us([M.sH], Os.prototype, "event_followed", 2),
          Us([M.sH], Os.prototype, "event_followed_flags", 2);
        const Sc = class _s {
          constructor() {
            (0, M.Gn)(this);
          }
          m_mapClanToUserPermissions = new Map();
          m_mapAnnounceGIDToVote = new Map();
          m_cm = void 0;
          static s_EventUserStore;
          m_bIsPresentationMode = (0, o.Bu)();
          static Get() {
            return (
              (0, js.wT)(
                !!_s.s_EventUserStore,
                "Have not yet initialized global EventUserStore",
              ),
              _s.s_EventUserStore
            );
          }
          static IsInitialized() {
            return !!_s.s_EventUserStore;
          }
          static async InitGlobal(r) {
            if (!_s.s_EventUserStore) {
              const i = new _s();
              await i.Init(r), (_s.s_EventUserStore = i);
            }
          }
          static BIsInited() {
            return !!_s.s_EventUserStore;
          }
          async Init(r) {
            this.m_cm = r;
            const i = (0, o.Fd)(
              "partnereventpermissions",
              "application_config",
            );
            this.ValidateStoreDefault(i) &&
              (0, M.h5)(() => {
                i.forEach((n) => {
                  let l = new Os(n.clanid),
                    m = {
                      result: l,
                      promise: _s.RemapToPromise(l),
                      bLoaded: !0,
                    };
                  this.CopyFromResponseToTrack(m, n),
                    this.m_mapClanToUserPermissions.set(n.clanid, m);
                });
              });
            let e = (0, o.Fd)("uservotes", "application_config");
            e &&
              (0, M.h5)(() => {
                e.forEach((n) => {
                  let l = n.voted_up ? !0 : n.voted_down ? !1 : void 0;
                  this.m_mapAnnounceGIDToVote.set(n.clanAnnouncementGID, l);
                });
              });
          }
          ValidateStoreDefault(r) {
            const i = r;
            return i &&
              Array.isArray(i) &&
              i.length > 0 &&
              typeof i[0] == "object"
              ? typeof i[0].clanid == "number" && typeof i[0].appid == "number"
              : !1;
          }
          static async RemapToPromise(r) {
            return r;
          }
          BIsUserLoggedIn() {
            return o.iA.logged_in;
          }
          BIsPartnerEventPermissionsLoaded(r) {
            return (
              this.m_mapClanToUserPermissions.has(r) &&
              this.m_mapClanToUserPermissions.get(r).bLoaded
            );
          }
          GetPartnerEventPermissions(r) {
            if (!r || !r.BIsValid()) return new Os(0);
            const i = r.GetAccountID();
            return (
              this.m_mapClanToUserPermissions.has(i) ||
                this.LoadSingleAppEventPermissions(r),
              this.m_mapClanToUserPermissions.get(i).result
            );
          }
          async LoadSingleAppEventPermissions(r) {
            let i = r.GetAccountID(),
              e = this.m_mapClanToUserPermissions.get(i);
            return (
              e ||
                ((e = {
                  promise: this.InternalLoadSingleAppEventPermissions(r),
                  result: new Os(i),
                  bLoaded: !1,
                }),
                this.m_mapClanToUserPermissions.set(i, e)),
              e.promise
            );
          }
          CopyFromResponseToTrack(r, i) {
            (r.result.appid = i.appid ?? 0),
              (r.result.can_edit = !!i.can_edit),
              (r.result.clanid = i.appid),
              (r.result.event_followed = i.event_followed ?? []),
              (r.result.event_ignored = i.event_ignored ?? []),
              (r.result.event_followed_flags = i.event_followed_flags ?? []),
              (r.result.follows_app = !!i.follows_app),
              (r.result.owns_app = !!i.owns_app),
              (r.result.limited_user = !!i.limited_user),
              (i.support_user || i.valve_admin) && this.m_bIsPresentationMode
                ? ((r.result.can_edit = !0),
                  (r.result.support_user = !1),
                  (r.result.valve_admin = !1))
                : ((r.result.support_user = !!i.support_user),
                  (r.result.valve_admin = !!i.valve_admin)),
              (r.bLoaded = !0);
          }
          async InternalLoadSingleAppEventPermissions(r) {
            let i = null,
              e = r.GetAccountID(),
              n = !o.iA.logged_in;
            if (!this.m_mapClanToUserPermissions.has(e)) {
              let l = new Os(r.GetAccountID());
              this.m_mapClanToUserPermissions.set(e, {
                result: l,
                promise: _s.RemapToPromise(l),
                bLoaded: !1,
              });
            }
            try {
              if (o.iA.logged_in) {
                let l =
                    o.TS.COMMUNITY_BASE_URL +
                    "gid/" +
                    r.ConvertTo64BitString() +
                    "/ajaxgetpartnereventpermissions/",
                  m = {};
                if (
                  ((0, o.yK)() == "partnerweb"
                    ? ((l =
                        o.TS.PARTNER_BASE_URL +
                        "partnerevents/ajaxgetpartnereventpermissions"),
                      (m = { clanaccountid: r.GetAccountID() }))
                    : (0, o.yK)() == "store" &&
                      ((l =
                        o.TS.STORE_BASE_URL +
                        "events/ajaxgetpartnereventpermissions"),
                      (m = { clanaccountid: r.GetAccountID() })),
                  (i = await Ss().get(l, { params: m, withCredentials: !0 })),
                  !i || i.data.success != x.R)
                )
                  console.error(
                    "Partner Events Failed Load:" +
                      (0, mm.H)(i?.data).strErrorMsg,
                  ),
                    (n = !0);
                else {
                  let f = this.m_mapClanToUserPermissions.get(e);
                  f && this.CopyFromResponseToTrack(f, i.data);
                }
              }
            } catch (l) {
              if (
                ((i = l.response),
                (n = !0),
                !(
                  l &&
                  typeof l.response < "u" &&
                  typeof l.response.data < "u" &&
                  typeof l.response.data.success < "u" &&
                  l.response.data.success == x.Dy
                ))
              ) {
                const m = (0, mm.H)(l);
                console.error(
                  "InternalLoadSingleAppEventPermissions account: " +
                    e +
                    ": " +
                    m.strErrorMsg,
                  m,
                );
              }
            } finally {
              n &&
                (0, M.h5)(() => {
                  let l = this.m_mapClanToUserPermissions.get(e);
                  (l.result.appid = i?.data.appid ?? 0),
                    (l.result.can_edit = !1),
                    (l.result.clanid = i && i.data ? i.data.clanid : 0),
                    (l.result.event_followed = new Array()),
                    (l.result.event_ignored = new Array()),
                    (l.result.event_followed_flags = new Array()),
                    (l.result.follows_app = !1),
                    (l.result.owns_app = !1),
                    (l.result.support_user = !1),
                    (l.result.valve_admin = !1),
                    (l.result.limited_user = !1),
                    (l.bLoaded = !0);
                });
            }
            return this.m_mapClanToUserPermissions.get(e).result;
          }
          async Vote(r, i, e) {
            if (!r || !r.AnnouncementGID) return !1;
            const n = this.m_mapAnnounceGIDToVote.get(r.AnnouncementGID);
            if (n === i) return !0;
            if (
              (this.m_mapAnnounceGIDToVote.set(r.AnnouncementGID, i),
              (0, M.h5)(() => {
                n === !0 && r.UpdateVoteCount("up", -1),
                  n === !1 && r.UpdateVoteCount("down", -1),
                  i === !0 && r.UpdateVoteCount("up", 1),
                  i === !1 && r.UpdateVoteCount("down", 1);
              }),
              this.m_cm)
            ) {
              let l = w.w.Init(Aa.QU);
              return (
                l.Body().set_announcementid(r.AnnouncementGID),
                l.Body().set_vote_up(!!i),
                l.Body().set_clan_accountid(r.clanSteamID.GetAccountID()),
                (
                  await Aa.BE.RateClanAnnouncement(
                    this.m_cm.GetServiceTransport(),
                    l,
                  )
                ).GetEResult() == x.R
              );
            } else {
              const l = (0, o.yK)(),
                m =
                  l == "community" || l == "steamtv"
                    ? o.TS.COMMUNITY_BASE_URL +
                      "gid/" +
                      r.clanSteamID.ConvertTo64BitString() +
                      "/announcements/rate/" +
                      r.AnnouncementGID
                    : o.TS.STORE_BASE_URL +
                      "updated/ajaxrateupdate/" +
                      r.AnnouncementGID,
                f = new URLSearchParams();
              f.append("sessionid", (0, o.KC)()),
                f.append("voteup", i ? "1" : "0"),
                f.append("clanid", "" + r.clanSteamID.GetAccountID()),
                f.append("ajax", "1");
              const u = { withCredentials: !0, cancelToken: e.token };
              return (await Ss().post(m, f, u)).data.success == x.R;
            }
          }
          async LoadMyVote(r, i) {
            if (r?.AnnouncementGID) {
              if (this.m_mapAnnounceGIDToVote.has(r.AnnouncementGID))
                return !!this.m_mapAnnounceGIDToVote.get(r.AnnouncementGID);
              let e;
              if (this.m_cm) {
                let n = w.w.Init(Aa.$Y);
                n.Body().set_announcementid(r.AnnouncementGID);
                let l = await Aa.BE.GetClanAnnouncementVoteForUser(
                  this.m_cm.GetServiceTransport(),
                  n,
                );
                l.GetEResult() == x.R &&
                  (e = l.Body().voted_up()
                    ? !0
                    : l.Body().voted_down()
                      ? !1
                      : void 0);
              } else {
                const n = (0, o.yK)() == "store",
                  l = n
                    ? o.TS.STORE_BASE_URL + "actions/ajaxgetmyannouncementvote"
                    : o.TS.COMMUNITY_BASE_URL +
                      "gid/" +
                      r.clanSteamID.ConvertTo64BitString() +
                      "/announcements/ajaxgetmyvote/" +
                      r.AnnouncementGID,
                  m = { gid: n ? r.AnnouncementGID : void 0 },
                  f = await Ss().get(l, {
                    withCredentials: !0,
                    cancelToken: i.token,
                    params: m,
                  });
                e = f.data.voted_up ? !0 : f.data.voted_down ? !1 : void 0;
              }
              return this.m_mapAnnounceGIDToVote.set(r.AnnouncementGID, e), e;
            }
          }
          SetVote(r, i) {
            this.m_mapAnnounceGIDToVote.set(r, i);
          }
          BHasMyVote(r) {
            return r.AnnouncementGID
              ? this.m_mapAnnounceGIDToVote.has(r.AnnouncementGID)
              : !1;
          }
          GetPreviouslyLoadedVote(r) {
            return r.AnnouncementGID
              ? this.m_mapAnnounceGIDToVote.get(r.AnnouncementGID)
              : void 0;
          }
          BShowEmailEditorTab(r) {
            if (r.BHasEmailEnabled() || r.clanSteamID.GetAccountID() == Fu())
              return !0;
            let i = this.GetPartnerEventPermissions(r.clanSteamID);
            return (o.UF.IS_OGG || o.UF.IS_VALVE_GROUP) && i.valve_admin;
          }
        };
        Us([M.sH], Sc.prototype, "m_mapClanToUserPermissions", 2),
          Us([M.sH], Sc.prototype, "m_mapAnnounceGIDToVote", 2),
          Us([M.XI], Sc.prototype, "CopyFromResponseToTrack", 1);
        let jn = null;
        function Kb() {
          const [s, r] = useState(() => jn.BIsInited());
          return (
            useEffect(() => {
              s ||
                (async () => (await Promise.all([jn.InitGlobal()]), r(!0)))();
            }, [s]),
            s
          );
        }
        function Vb(s) {
          const [r, i] = useState(jn.Get().BIsPartnerEventPermissionsLoaded(s)),
            e = CSteamID.InitFromClanID(s),
            [n, l] = useState(jn.Get().GetPartnerEventPermissions(e));
          return (
            useEffect(() => {
              if (!r) {
                const m = CSteamID.InitFromClanID(s);
                jn.Get()
                  .LoadSingleAppEventPermissions(m)
                  .then((f) => {
                    l(f), i(!0);
                  });
              }
            }, [r, s]),
            n
          );
        }
        var cn = W(2609);
        async function Vu(s) {
          const r = `${cn.TS.COMMUNITY_BASE_URL}ogg/${s}/ajaxgetvanityandclanid/?origin=${Rn()}`;
          return Pn(r);
        }
        async function Yu(s) {
          const r = Ws.b.InitFromClanID(s),
            i = `${cn.TS.COMMUNITY_BASE_URL}gid/${r.ConvertTo64BitString()}/ajaxgetvanityandclanid/?origin=${Rn()}`;
          return Pn(i);
        }
        async function Lu(s) {
          const r = `${cn.TS.COMMUNITY_BASE_URL}groups/${s}/ajaxgetvanityandclanid/?origin=${Rn()}`;
          return Pn(r);
        }
        async function Xu(s) {
          const r = `${cn.TS.COMMUNITY_BASE_URL}games/${s}/ajaxgetvanityandclanid/?origin=${Rn()}`;
          return Pn(r);
        }
        async function Pn(s) {
          const r = await fetch(s, { method: "GET" });
          if (r.status == 404) return null;
          if (!r.ok) throw new Error(`Server returned ${r.status}`);
          const i = await r.json();
          return i.success != x.R ? null : i;
        }
        function Rn() {
          return typeof window < "u" && typeof self < "u"
            ? self.origin
            : "ssr_server";
        }
        function Hc(s) {
          return ["clantoclaninfo", s];
        }
        function Nc(s) {
          return ["apptoclanid", s];
        }
        function Gn(s, r = "group") {
          return ["vanitytoclanid", r, s?.toLocaleLowerCase()];
        }
        function Zu(s) {
          const r = s?.[0];
          return (
            r == "clantoclaninfo" || r == "apptoclanid" || r == "vanitytoclanid"
          );
        }
        const fm = new WeakSet();
        function Cn(s) {
          if (!fm.has(s)) {
            fm.add(s);
            for (const r of [
              ["clantoclaninfo"],
              ["apptoclanid"],
              ["vanitytoclanid"],
            ])
              s.setQueryDefaults(r, {
                staleTime: 1 / 0,
                gcTime: 1 / 0,
                retry: !1,
              });
          }
        }
        const um = new WeakMap();
        function kc(s) {
          if (!s) return null;
          let r = um.get(s);
          return (
            r ||
              ((r = {
                ...s,
                clanSteamID: s.clanSteamIDString
                  ? new Ws.b(s.clanSteamIDString)
                  : Ws.b.InitFromClanID(s.clanAccountID),
              }),
              um.set(s, r)),
            r
          );
        }
        function Ju(s) {
          const { msg: r, success: i, ...e } = s;
          return {
            ...e,
            rss_language: s.rss_language ? s.rss_language : k.Bhc,
          };
        }
        function _n(s, r) {
          if (!r) return null;
          Cn(s);
          const i = Ju(r);
          return (
            s.setQueryData(Hc(i.clanAccountID), i),
            i.appid && s.setQueryData(Nc(i.appid), i.clanAccountID),
            i.vanity_url &&
              s.setQueryData(Gn(i.vanity_url, "group"), i.clanAccountID),
            i
          );
        }
        function Ec(s, r) {
          for (const i of r) _n(s, i);
        }
        function rc(s) {
          const r = (0, Gl.jE)();
          return (0, Bn.I)(dm(s, r));
        }
        function dm(s, r) {
          return (
            Cn(r),
            {
              queryKey: Hc(s ?? null),
              queryFn: async () => (s ? _n(r, await Yu(s)) : null),
              enabled: s !== void 0,
              select: kc,
            }
          );
        }
        function Bm(s, r) {
          return (
            Cn(r),
            {
              queryKey: Nc(s),
              queryFn: async () => _n(r, await Vu(s))?.clanAccountID ?? null,
              enabled: !!s,
            }
          );
        }
        function gm(s, r, i = "group") {
          return (
            Cn(r),
            {
              queryKey: Gn(s, i),
              queryFn: async () => {
                if (i == "store") {
                  const n = r.getQueryData(Gn(s, "group"));
                  if (n) return n;
                }
                const e = i == "store" ? await Xu(s) : await Lu(s);
                return _n(r, e)?.clanAccountID ?? null;
              },
              enabled: !!s,
            }
          );
        }
        function wm(s) {
          return s.isPending ? void 0 : (s.data ?? null);
        }
        function Yb(s) {
          return rc(s.BIsClanAccount() ? s.GetAccountID() : void 0);
        }
        function Lb(s) {
          const r = useQueryClient(),
            i = useQuery(Bm(s, r));
          return rc(s ? wm(i) : void 0);
        }
        function Xb(s, r = "group") {
          const i = useQueryClient(),
            e = useQuery(gm(s, i, r));
          return rc(s ? wm(e) : void 0);
        }
        function On(s, r) {
          if (s) return kc(r.getQueryData(Hc(s))) ?? void 0;
        }
        function ic(s, r) {
          if (s) return On(r.getQueryData(Nc(s)), r);
        }
        function Au(s, r, i) {
          if (!s) return;
          const e = i ? [i] : ["store", "group"];
          for (const n of e) {
            const l = On(r.getQueryData(Gn(s, n)), r);
            if (l) return l;
          }
        }
        async function Fc(s, r) {
          return s ? kc(await r.fetchQuery(dm(s, r))) : null;
        }
        async function Du(s, r) {
          return s ? Fc(await r.fetchQuery(Bm(s, r)), r) : null;
        }
        async function bm(s, r, i = "group") {
          return s ? Fc(await r.fetchQuery(gm(s, r, i)), r) : null;
        }
        const zm = new WeakSet();
        function ym(s = Rl.L) {
          if (typeof window > "u" || zm.has(s)) return;
          const r = (0, o.Fd)("groupvanityinfo", "application_config");
          (r === void 0 && document.readyState != "complete") ||
            (zm.add(s), Mm(r) && Ec(s, r));
        }
        function Mm(s) {
          const r = s;
          return r &&
            Array.isArray(r) &&
            r.length > 0 &&
            typeof r[0] == "object"
            ? typeof r[0].clanAccountID == "number" &&
                (typeof r[0].appid == "number" ||
                  typeof r[0].vanity_url == "string")
            : !1;
        }
        function vn(s) {
          return typeof s == "string" ? parseInt(s) : s;
        }
        function Un(s) {
          return typeof s == "string" ? Number.parseInt(s) : s;
        }
        class qu {
          m_queryClient = Rl.L;
          m_boxCacheVersion = M.sH.box(0);
          m_bWatchingCache = !1;
          m_bBumpScheduled = !1;
          Init() {
            this.LazyInit();
          }
          LazyInit() {
            ym(this.m_queryClient),
              this.m_bWatchingCache ||
                ((this.m_bWatchingCache = !0),
                this.m_queryClient.getQueryCache().subscribe((r) => {
                  (r?.type != "added" &&
                    r?.type != "updated" &&
                    r?.type != "removed") ||
                    (Zu(r.query?.queryKey) && this.ScheduleCacheVersionBump());
                }));
          }
          ScheduleCacheVersionBump() {
            this.m_bBumpScheduled ||
              ((this.m_bBumpScheduled = !0),
              queueMicrotask(() => {
                (this.m_bBumpScheduled = !1),
                  (0, M.h5)(() =>
                    this.m_boxCacheVersion.set(
                      this.m_boxCacheVersion.get() + 1,
                    ),
                  );
              }));
          }
          ReadCache() {
            return (
              this.LazyInit(), this.m_boxCacheVersion.get(), this.m_queryClient
            );
          }
          AddGroupVanities(r) {
            this.LazyInit(), Mm(r) && Ec(this.m_queryClient, r);
          }
          BHasClanInfoLoaded(r) {
            return (
              (0, js.wT)(
                r.BIsValid(),
                "Clan SteamID is not valid when ClanInfo",
              ),
              (0, js.wT)(
                r.BIsClanAccount(),
                "Clan SteamID is not a clan account id when requesting clan info ",
              ),
              this.BHasClanInfoLoadedByAccountID(r.GetAccountID())
            );
          }
          BHasClanInfoLoadedByAccountID(r) {
            return !!On(Un(r), this.ReadCache());
          }
          RegisterClanData(r) {
            this.LazyInit(), Ec(this.m_queryClient, r);
          }
          async LoadOGGClanInfoForAppID(r) {
            return (
              this.LazyInit(),
              (r = vn(r)),
              (0, js.wT)(
                r != 0,
                "LoadOGGClanInfoForAppID called with appid of zero",
              ),
              r == 0 ? null : Du(r, this.m_queryClient).catch(() => null)
            );
          }
          async LoadOGGClanInfoForIdentifier(r) {
            return this.LazyInit(), bm(r, this.m_queryClient, "store");
          }
          async LoadOGGClanInfoForGroupVanity(r) {
            return this.LazyInit(), bm(r, this.m_queryClient, "group");
          }
          async LoadClanInfoForClanSteamID(r) {
            return this.LoadClanInfoForClanAccountID(r.GetAccountID());
          }
          async LoadClanInfoForClanAccountID(r) {
            return this.LazyInit(), Fc(Un(r), this.m_queryClient);
          }
          GetOGGClanInfo(r) {
            const i = this.ReadCache();
            return typeof r == "string" ? Au(r, i) : ic(r, i);
          }
          GetClanSteamIDForAppID(r) {
            const i = ic(vn(r), this.ReadCache());
            return i ? Ws.b.InitFromClanID(i.clanAccountID) : void 0;
          }
          GetClanVanityForAppID(r) {
            return ic(vn(r), this.ReadCache())?.vanity_url;
          }
          GetClanVanityForClanSteamID(r) {
            return On(r.GetAccountID(), this.ReadCache())?.vanity_url;
          }
          HasLoadedClanAccountID(r) {
            return this.BHasClanInfoLoadedByAccountID(r);
          }
          GetClanMemberCount(r) {
            return ic(vn(r), this.ReadCache())?.member_count ?? 0;
          }
          GetClanInfoByClanAccountID(r) {
            return (
              (0, js.wT)(
                !!r,
                "Unepxected clanid when requesting information. GetClanInfoByClanAccountID ",
              ),
              On(Un(r), this.ReadCache())
            );
          }
          GetCreatorStoreURL(r) {
            let i = Za.GetCreatorHome(r);
            if (i) return i.GetCreatorHomeURL("developer");
            let e = this.GetClanInfoByClanAccountID(r.GetAccountID());
            return (
              o.TS.COMMUNITY_BASE_URL +
              (e.vanity_url
                ? "groups/" + e.vanity_url
                : "gid/" + r.ConvertTo64BitString())
            );
          }
        }
        const pu = new qu();
        (0, lm.V)("g_ClanStore", pu);
        function tc() {
          const s = (0, Gl.jE)();
          return ym(s), s;
        }
        function Pu(s) {
          tc();
          const { data: r, isPending: i } = rc(s ? Un(s) : void 0);
          return [!!s && i, r ?? void 0];
        }
        function Zb(s) {
          const r = tc();
          useEffect(() => {
            s &&
              FetchClanInfoByAccountID(Un(s), r).catch((i) =>
                console.error(`Failed to hint load clan info ${s}`, i),
              );
          }, [s, r]);
        }
        function Jb(s) {
          return tc(), useClanInfoByVanityQuery(s).data ?? null;
        }
        function Ab(s) {
          tc();
          const r = s ? vn(s) : void 0,
            { data: i, isPending: e } = useClanInfoByAppIDQuery(r);
          return { bLoadingClanInfo: !!r && e, clanInfo: i ?? null };
        }
        function Db(s) {
          const r = s.BIsOGGEvent(),
            i = CEventUserStore.Get().GetPartnerEventPermissions(
              s.clanSteamID,
            ).valve_admin;
          if (r) return { bVisible: !1 };
          if (s.GetEventType() == k_EClanEventType_CreatorHome)
            return { bVisible: !1 };
          if (s.BHasSaleEnabled()) return { bVisible: !0 };
          if (
            s.jsondata.clone_from_event_gid &&
            s.jsondata.clone_from_sale_enabled
          )
            return { bVisible: !0 };
          if (s.clanSteamID.GetAccountID() == getMeetSteamClanID())
            return { bVisible: !1 };
          const e = g_CreatorHomeStore.GetCreatorHome(s.clanSteamID);
          return e &&
            e.BHasClanAccountFlagSet(
              EClanAccountFlags.k_EClanAccountFlag_AllowSalePageEditing,
            )
            ? { bVisible: !0 }
            : i
              ? { bVisible: !0, bValveOnly: !0 }
              : { bVisible: !1 };
        }
        function qb(s) {
          const r = s.BIsOGGEvent(),
            i = CEventUserStore.Get().GetPartnerEventPermissions(
              s.clanSteamID,
            ).valve_admin;
          return r
            ? s.BHasSaleEnabled()
              ? { bVisible: !0 }
              : Config.EUNIVERSE == k_EUniversePublic
                ? { bVisible: !1 }
                : i
                  ? s.GetEventType() == k_EClanEventType_MajorUpdateEvent
                    ? { bVisible: !0, bValveOnly: !0 }
                    : { bVisible: !1 }
                  : { bVisible: !1 }
            : { bVisible: !1 };
        }
        function pb(s) {
          const r = s.BIsOGGEvent(),
            i = CEventUserStore.Get().GetPartnerEventPermissions(
              s.clanSteamID,
            ).valve_admin;
          return r
            ? { bVisible: !1 }
            : s.GetEventType() != k_EClanEventType_CreatorHome
              ? { bVisible: !1 }
              : s.BHasSaleEnabled()
                ? { bVisible: !0 }
                : s.clanSteamID.GetAccountID() == getMeetSteamClanID()
                  ? { bVisible: !1 }
                  : { bVisible: !1 };
        }
        var ps = W(358);
        function $c(s, r) {
          if (s[r]) {
            if (r == "community_icon") {
              const i = s.asset_url_format
                .replace(/^steam\//, "images/")
                .replace("${FILENAME}", `${s[r]}.jpg`)
                .replace(/\?.*$/, "");
              return `${cn.TS.MEDIA_CDN_COMMUNITY_URL}${i}`;
            } else if (typeof s[r] == "string") {
              const i = s.asset_url_format.replace("${FILENAME}", s[r]);
              return `${cn.TS.STORE_ITEM_BASE_URL}${i}`;
            }
          }
        }
        function Pb(s, r = "full") {
          let i = "";
          switch (r) {
            case "thumb":
              i = ".116x65";
              break;
            case "600x338":
              i = ".600x338";
              break;
            case "1920x1080":
              i = ".1920x1080";
              break;
            case "full":
              i = "";
              break;
            default:
              AssertNever(r, `Invalid size: ${r}`);
              break;
          }
          return (
            Config.STORE_ITEM_BASE_URL +
            s.filename.replace(/\.([^.]+)(\?.*)?$/, `${i}.$1$2`)
          );
        }
        function Rb(s) {
          const { data: r } = useStoreItemScreenshots(s),
            i = useShouldShowAllAgesMediaOnly();
          if (r)
            return [
              ...(r.all_ages_screenshots || []),
              ...(!i && r.mature_content_screenshots
                ? r.mature_content_screenshots
                : []),
            ].sort((e, n) => e.ordinal - n.ordinal);
        }
        function Gb(s, r = !1) {
          const { data: i } = useStoreItemAssets({ appid: s });
          if (i !== void 0)
            return i === null
              ? null
              : r && i.library_capsule_2x
                ? $c(i, "library_capsule_2x")
                : i.library_capsule
                  ? $c(i, "library_capsule")
                  : `${Config.STORE_ITEM_BASE_URL}steam/apps/${s}/portrait.png`;
        }
        function Ru(s) {
          switch (s) {
            case uc:
              return (0, d.jsx)(Q.ilR, {});
            case dc:
              return (0, d.jsx)(Q.Cv4, {});
            default:
              return (0, d.jsx)(Q.Qte, {});
          }
        }
        function Gu(s) {
          let {
            fallbackLogo: r,
            data: i,
            location: e,
            icon: n,
            timestamp: l,
            fnRenderTimestamp: m,
            onHide: f,
          } = s;
          const u = typeof i?.image == "number",
            B = u ? { appid: i.image } : void 0,
            { data: y } = (0, ps.J$)(B),
            { data: T } = (0, ps.lv)(B),
            I = i?.display_name ?? "",
            S = i?.title ?? i?.body,
            E = i?.title ? i.body : null,
            j = As(e),
            z = B && (!y || !T),
            [g, O] = V.useState(!1),
            K = () => O(!0);
          let vs = null;
          if (u) vs = Qc(T, r, j);
          else {
            const Cs = j
              ? Ts().ShortLogoDimensions
              : Ts().StandardLogoDimensions;
            vs =
              i?.image && !g
                ? (0, d.jsx)("img", { className: Cs, src: i.image, onError: K })
                : r;
          }
          return j
            ? (0, d.jsx)(qs, { ...s, logo: vs, icon: n, title: I, body: S })
            : (0, d.jsx)(Rs, {
                children: (0, d.jsxs)(Ls, {
                  logo: vs,
                  bLoading: z,
                  ...s,
                  children: [
                    (0, d.jsx)(Xs, {
                      icon: n,
                      title: I,
                      timestamp: l,
                      location: e,
                      fnRenderTimestamp: m,
                    }),
                    (0, d.jsx)(Zs, { multiline: !E, children: S }),
                    !!E && (0, d.jsx)(Js, { children: E }),
                    f ? (0, d.jsx)(Ps, { onHide: f }) : null,
                  ],
                }),
              });
        }
        function Cu(s) {
          let {
            displayName: r,
            location: i,
            icon: e,
            timestamp: n,
            fnRenderTimestamp: l,
            onHide: m,
          } = s;
          const f = As(i),
            u = (0, h.we)("#SteamNotifications_TradeOffer_Title"),
            B = f
              ? (0, h.we)("#SteamNotifications_TradeOffer_Body_Short", r ?? "")
              : (0, h.we)("#SteamNotifications_TradeOffer_Body"),
            y = (0, h.we)(
              "#SteamNotifications_TradeOffer_Description",
              r ?? "",
            ),
            T = !r;
          return f
            ? (0, d.jsx)(qs, {
                ...s,
                logo: s.logo,
                icon: s.icon,
                title: u,
                body: B,
              })
            : (0, d.jsx)(Rs, {
                children: (0, d.jsxs)(Ls, {
                  bLoading: T,
                  ...s,
                  children: [
                    (0, d.jsx)(Xs, {
                      icon: e,
                      title: u,
                      timestamp: n,
                      location: i,
                      fnRenderTimestamp: l,
                    }),
                    (0, d.jsx)(Zs, { children: B }),
                    (0, d.jsx)(Js, { children: y }),
                    m ? (0, d.jsx)(Ps, { onHide: m }) : null,
                  ],
                }),
              });
        }
        const _u = (s) => {
          let {
            location: r,
            icon: i,
            timestamp: e,
            fnRenderTimestamp: n,
            onHide: l,
          } = s;
          const m = As(r),
            f = (0, h.we)("#SteamNotifications_TradeReversal_Title"),
            u = m
              ? (0, h.we)("#SteamNotifications_TradeReversal_Body_Short")
              : (0, h.we)("#SteamNotifications_TradeReversal_Body"),
            B = (0, h.we)("#SteamNotifications_TradeReversal_Description");
          return m
            ? (0, d.jsx)(qs, {
                ...s,
                logo: s.logo,
                icon: s.icon,
                title: f,
                body: u,
              })
            : (0, d.jsx)(Rs, {
                children: (0, d.jsxs)(Ls, {
                  ...s,
                  children: [
                    (0, d.jsx)(Xs, {
                      icon: i,
                      title: f,
                      timestamp: e,
                      location: r,
                      fnRenderTimestamp: n,
                    }),
                    (0, d.jsx)(Zs, { children: u }),
                    (0, d.jsx)(Js, { children: B }),
                    l ? (0, d.jsx)(Ps, { onHide: l }) : null,
                  ],
                }),
              });
        };
        function rd(s) {
          let {
            senderName: r,
            location: i,
            icon: e,
            timestamp: n,
            fnRenderTimestamp: l,
            onHide: m,
          } = s;
          const f = As(i),
            u = f
              ? (0, h.we)("#Notification_GiftReceived_Body_Short", r ?? "")
              : (0, h.we)("#Notification_GiftReceived_Body"),
            B = r
              ? (0, h.we)("#Notification_GiftReceived_Description", r)
              : null,
            y = (0, h.we)("#Notification_GiftReceived_Title"),
            T = !r;
          return f
            ? (0, d.jsx)(qs, {
                ...s,
                logo: s.logo,
                icon: s.icon,
                title: y,
                body: u,
              })
            : (0, d.jsx)(Rs, {
                children: (0, d.jsxs)(Ls, {
                  bLoading: T,
                  ...s,
                  children: [
                    (0, d.jsx)(Xs, {
                      icon: e,
                      title: y,
                      timestamp: n,
                      location: i,
                      fnRenderTimestamp: l,
                    }),
                    (0, d.jsx)(Zs, { multiline: !B, children: u }),
                    !!B && (0, d.jsx)(Js, { children: B }),
                    m ? (0, d.jsx)(Ps, { onHide: m }) : null,
                  ],
                }),
              });
        }
        function id(s) {
          let {
            requestorName: r,
            requestorAvatarURL: i,
            fallbackLogo: e,
            data: n,
            location: l,
            icon: m,
            timestamp: f,
            fnRenderTimestamp: u,
            onHide: B,
          } = s;
          const y = As(l);
          let T = "";
          r && n.state == k.UXi
            ? (T = (0, h.we)(
                "#SteamNotifications_FriendInvite_Description_AwaitingResponse",
              ))
            : r && n.state == k._UC
              ? (T = (0, h.we)(
                  "#SteamNotifications_FriendInvite_Description_Friends",
                ))
              : r &&
                (T = (0, h.we)("#SteamNotifications_FriendInvite_Description"));
          const [I, S] = V.useState(!1),
            E = () => S(!0);
          let j = e;
          if (i && !I) {
            const O = n.state == k._UC && l != k.PN1,
              K = y ? Ts().ShortLogoDimensions : Ts().StandardLogoDimensions;
            j = (0, d.jsxs)(Ys.Z, {
              style: { position: "relative" },
              children: [
                O && (0, d.jsx)(Q.GSe, { className: Ts().FriendIndicator }),
                (0, d.jsx)("img", { className: K, src: i, onError: E }),
              ],
            });
          }
          const z =
              r || (0, h.we)("#SteamNotifications_FriendInvite_Body_Generic"),
            g = !r;
          return y
            ? (0, d.jsx)(qs, {
                ...s,
                logo: j,
                icon: s.icon,
                title: (0, h.we)("#Notification_FriendInvite_Title"),
                body: z,
              })
            : (0, d.jsx)(Rs, {
                children: (0, d.jsxs)(Ls, {
                  logo: j,
                  bLoading: g,
                  ...s,
                  children: [
                    (0, d.jsx)(Xs, {
                      icon: m,
                      title: (0, h.we)("#Notification_FriendInvite_Title"),
                      timestamp: f,
                      location: l,
                      fnRenderTimestamp: u,
                    }),
                    (0, d.jsx)(Zs, { multiline: !T, children: z }),
                    !!T && (0, d.jsx)(Js, { children: T }),
                    B ? (0, d.jsx)(Ps, { onHide: B }) : null,
                  ],
                }),
              });
        }
        function td(s) {
          let {
            itemState: r,
            fallbackLogo: i,
            data: e,
            location: n,
            icon: l,
            timestamp: m,
            fnRenderTimestamp: f,
            nUnread: u,
            onHide: B,
          } = s;
          const [y, T] = V.useState(!1),
            I = () => T(!0),
            S = As(n);
          let E = i;
          if (r?.item_data?.icon_url && !y) {
            let K = `${o.TS.COMMUNITY_CDN_URL}economy/image/${r.item_data.icon_url}`,
              vs = r.item_data.background_color
                ? "#" + r.item_data.background_color
                : null;
            const Cs = S
              ? Ts().ShortLogoDimensions
              : Ts().StandardLogoDimensions;
            E = (0, d.jsx)(Ys.Z, {
              style: { position: "relative" },
              children: (0, d.jsx)("img", {
                className: Cs,
                style: {
                  backgroundColor: vs ?? void 0,
                  justifyContent: "center",
                },
                src: K,
                onError: I,
              }),
            });
          }
          const j = parseInt(e.appid) == 753;
          let z = null;
          if (u !== void 0 && u > 1) {
            const K = u - 1;
            j
              ? (z = (0, h.we)("#Notification_Item_RollupMore_Steam", K))
              : r?.app_name
                ? (z = (0, h.we)(
                    "#Notification_Item_RollupMore_GameName",
                    K,
                    r.app_name,
                  ))
                : (z = (0, h.we)("#Notification_Item_RollupMore", K));
          } else
            r?.app_name &&
              (z = j
                ? r.app_name
                : (0, h.we)("#Notification_Item_Single_GameName", r.app_name));
          const g = r?.item_data?.name
              ? r.item_data.name
              : (0, h.we)("#Notification_Item_Body_Generic"),
            O = !r || !r.item_data;
          if (S) {
            let K = "";
            return (
              r?.app_name
                ? (K =
                    u > 1
                      ? (0, h.we)(
                          "#Notification_Item_Body_Short_Plural",
                          r?.app_name,
                        )
                      : (0, h.we)("#Notification_Item_Body_Short", r?.app_name))
                : (K = (0, h.we)("#Notification_Item_Body_Generic")),
              (0, d.jsx)(qs, {
                ...s,
                logo: E,
                icon: s.icon,
                title: (0, h.we)("#Notification_ItemAnnouncement_Body"),
                body: K,
              })
            );
          }
          return (0, d.jsx)(Rs, {
            children: (0, d.jsxs)(Ls, {
              logo: E,
              bLoading: O,
              ...s,
              children: [
                (0, d.jsx)(Xs, {
                  icon: l,
                  title: (0, h.we)("#Notification_ItemAnnouncement_TitleLong"),
                  timestamp: m,
                  location: n,
                  fnRenderTimestamp: f,
                }),
                (0, d.jsx)(Zs, { multiline: !z, children: g }),
                !!z && (0, d.jsx)(Js, { children: z }),
                B ? (0, d.jsx)(Ps, { onHide: B }) : null,
              ],
            }),
          });
        }
        function ed(s) {
          let {
            fallbackLogo: r,
            data: i,
            location: e,
            icon: n,
            timestamp: l,
            fnRenderTimestamp: m,
            onHide: f,
          } = s;
          const u = As(e),
            B = i.appid ? { appid: i.appid } : void 0,
            { data: y } = (0, ps.J$)(B),
            { data: T } = (0, ps.lv)(B),
            I = Qc(T, r, u),
            S = B && (!y || !T);
          let E = "";
          return (
            i.state == wl
              ? (E =
                  u && y?.name
                    ? (0, h.we)(
                        "#SteamNotification_AsyncGame_Action_Short",
                        y.name,
                      )
                    : (0, h.we)("#SteamNotification_AsyncGame_Action"))
              : i.state == bl &&
                (E =
                  u && y?.name
                    ? (0, h.we)(
                        "#SteamNotification_AsyncGame_Done_Short",
                        y.name,
                      )
                    : (0, h.we)("#SteamNotification_AsyncGame_Done")),
            u
              ? (0, d.jsx)(qs, {
                  ...s,
                  logo: I,
                  icon: s.icon,
                  title: (0, h.we)("#SteamNotification_AsyncGame_Title"),
                  body: E,
                })
              : (0, d.jsx)(Rs, {
                  children: (0, d.jsxs)(Ls, {
                    logo: I,
                    bLoading: S,
                    ...s,
                    children: [
                      (0, d.jsx)(Xs, {
                        icon: n,
                        title: (0, h.we)("#SteamNotification_AsyncGame_Title"),
                        timestamp: l,
                        location: e,
                        fnRenderTimestamp: m,
                      }),
                      (0, d.jsx)(Zs, { children: E }),
                      (0, d.jsx)(Js, { children: y?.name }),
                      f ? (0, d.jsx)(Ps, { onHide: f }) : null,
                    ],
                  }),
                })
          );
        }
        function hm(s) {
          const {
              title: r,
              body: i,
              logoUrl: e,
              bDataLoading: n,
              icon: l,
              onHide: m,
              location: f,
              timestamp: u,
              fnRenderTimestamp: B,
              onActivate: y,
              personaStatus: T,
            } = s,
            I = As(f),
            S = I ? Ts().ShortLogoDimensions : Ts().StandardLogoDimensions,
            E = (0, d.jsx)(Ys.Z, {
              style: { position: "relative" },
              children: (0, d.jsx)("img", {
                className: S,
                style: { justifyContent: "center" },
                src: e,
              }),
            });
          return I
            ? (0, d.jsx)(qs, {
                logo: E,
                icon: s.icon,
                title: r,
                body: i,
                onActivate: y,
                personaStatus: T,
              })
            : (0, d.jsx)(Rs, {
                children: (0, d.jsxs)(Ls, {
                  logo: E,
                  bLoading: n,
                  onActivate: y,
                  personaStatus: T,
                  ...s,
                  children: [
                    (0, d.jsx)(Xs, {
                      icon: l,
                      title: r,
                      timestamp: u,
                      location: f,
                      fnRenderTimestamp: B,
                    }),
                    (0, d.jsx)(Zs, { multiline: !0, children: i }),
                    m ? (0, d.jsx)(Ps, { onHide: m }) : null,
                  ],
                }),
              });
        }
        function sd(s) {
          let {
              currentUserSteamID: r,
              fallbackLogo: i,
              postedByDisplayName: e,
              postedByAvatarURL: n,
              ownerDisplayName: l,
              data: m,
              location: f,
              icon: u,
              timestamp: B,
              fnRenderTimestamp: y,
              nUnread: T,
              appName: I,
              onHide: S,
              commentTitle: E,
              commentBody: j,
            } = s,
            z = E;
          const g = As(f),
            [O, K] = V.useState(!1),
            vs = () => K(!0),
            [Cs, un] = Pu(
              m.bclan_account ? m.owner_steam_id?.GetAccountID() : void 0,
            ),
            Pa = El(m) ? e : null,
            rn = $l(m) ? l : null;
          m.comment_type == bc
            ? m.owner_steam_id?.ConvertTo64BitString() == r
              ? f == k.oYe && Pa
                ? (z = (0, h.we)(
                    "#SteamNotifications_Comment_Your_Profile_By",
                    Pa,
                  ))
                : (z = (0, h.we)("#SteamNotifications_Comment_Your_Profile"))
              : rn
                ? f == k.oYe && Pa
                  ? (z = (0, h.we)(
                      "#SteamNotifications_Comment_Player_Profile_By",
                      Pa,
                      rn,
                    ))
                  : (z = (0, h.we)(
                      "#SteamNotifications_Comment_Player_Profile",
                      rn,
                    ))
                : (z = (0, h.we)("#SteamNotifications_Comment_Profile"))
            : m.comment_type == Zm && m.json_data?.file_type == k.pmA
              ? m.owner_steam_id?.ConvertTo64BitString() == r
                ? I
                  ? (z = (0, h.we)(
                      "#SteamNotifications_Comment_Your_Screenshot_Game",
                      I,
                    ))
                  : (z = (0, h.we)(
                      "#SteamNotifications_Comment_Your_Screenshot",
                    ))
                : I
                  ? (z = (0, h.we)(
                      "#SteamNotifications_Comment_Screenshot_Game",
                      I,
                    ))
                  : (z = (0, h.we)("#SteamNotifications_Comment_Screenshot"))
              : !z && m.json_data?.title && (z = m.json_data.title);
          let tn = null;
          m.comment_type == Jm && m.bis_forum && j
            ? (tn = (0, d.jsx)(Js, {
                children: (0, h.we)(
                  "#SteamNotifications_Comment_NewDiscussion",
                  j,
                ),
              }))
            : (tn = (0, d.jsxs)(Js, { children: ['"', j, '"'] }));
          let Ra = (0, h.we)("#SteamNotifications_Comment"),
            dn = null;
          if (T !== void 0 && T > 1) {
            const v = "+" + (T - 1);
            f == k.oYe
              ? (dn = (0, d.jsx)("div", {
                  className: Ts().AllNotificationsCommentPlus,
                  children: v,
                }))
              : (Ra = Ra + " " + v);
          }
          let U = i;
          if (!O) {
            const v = g
              ? Ts().ShortLogoDimensions
              : Ts().StandardLogoDimensions;
            if (n && Fl(m)) {
              const b = m.bhas_friend && f != k.PN1;
              U = (0, d.jsxs)("div", {
                style: { position: "relative" },
                children: [
                  b && (0, d.jsx)(Q.GSe, { className: Ts().FriendIndicator }),
                  (0, d.jsx)("img", { className: v, src: n, onError: vs }),
                ],
              });
            } else
              un?.avatar_medium_url &&
                (U = (0, d.jsx)("img", {
                  className: v,
                  src: un.avatar_medium_url,
                  onError: vs,
                }));
          }
          return g
            ? (0, d.jsx)(qs, {
                ...s,
                logo: U,
                icon: s.icon,
                title: Ra,
                body: z,
              })
            : (0, d.jsx)(Rs, {
                children: (0, d.jsxs)(Ls, {
                  logo: U,
                  ...s,
                  children: [
                    (0, d.jsx)(Xs, {
                      icon: u,
                      title: Ra,
                      timestamp: B,
                      location: f,
                      fnRenderTimestamp: y,
                    }),
                    (0, d.jsx)(Zs, { children: z }),
                    tn,
                    dn,
                    S ? (0, d.jsx)(Ps, { onHide: S }) : null,
                  ],
                }),
              });
        }
        function ad(s) {
          let {
            fallbackLogo: r,
            data: i,
            location: e,
            icon: n,
            timestamp: l,
            fnRenderTimestamp: m,
            onHide: f,
          } = s;
          const u = As(e),
            B = i.appid ? { appid: i.appid } : void 0,
            { data: y } = (0, ps.J$)(B),
            { data: T } = (0, ps.lv)(B),
            { data: I } = (0, ps.Q_)(B),
            S = Qc(T, r, u),
            E = B && (!y || !T || !I);
          let j = "",
            z = null;
          if (y) {
            const g = y.name ?? "";
            (j = g),
              i.count == 1
                ? u
                  ? (j = (0, h.PP)(
                      "#SteamNotifications_Wishlist_OnSale_Single_Short",
                      (0, d.jsx)("span", { children: g }),
                      (0, d.jsx)("span", {
                        style: { color: "#FFFFFF" },
                        children: I?.formatted_final_price,
                      }),
                    ))
                  : (z = (0, h.PP)(
                      "#SteamNotifications_Wishlist_OnSale_Single",
                      (0, d.jsx)("span", {
                        style: { color: "#FFFFFF" },
                        children: I?.formatted_final_price,
                      }),
                    ))
                : i.count == 2
                  ? u
                    ? (j = (0, h.we)(
                        "#SteamNotifications_Wishlist_OnSale_PlusOne_Short",
                        g,
                      ))
                    : (z = (0, h.we)(
                        "#SteamNotifications_Wishlist_OnSale_PlusOne",
                      ))
                  : u
                    ? (j = (0, h.we)(
                        "#SteamNotifications_Wishlist_OnSale_PlusMany_Short",
                        g,
                        i.count - 1,
                      ))
                    : (z = (0, h.we)(
                        "#SteamNotifications_Wishlist_OnSale_PlusMany",
                        i.count - 1,
                      ));
          } else j = (0, h.we)("#SteamNotifications_Wishlist_Generic");
          return u
            ? (0, d.jsx)(qs, {
                ...s,
                logo: S,
                icon: s.icon,
                title: (0, h.we)("#SteamNotifications_Wishlist"),
                body: j,
              })
            : (0, d.jsx)(Rs, {
                children: (0, d.jsxs)(Ls, {
                  logo: S,
                  bLoading: E,
                  ...s,
                  children: [
                    (0, d.jsx)(Xs, {
                      icon: n,
                      title: (0, h.we)("#SteamNotifications_Wishlist"),
                      timestamp: l,
                      location: e,
                      fnRenderTimestamp: m,
                    }),
                    (0, d.jsx)(Zs, { multiline: !z, children: j }),
                    !!z && (0, d.jsx)(Js, { children: z }),
                    f ? (0, d.jsx)(Ps, { onHide: f }) : null,
                  ],
                }),
              });
        }
        function Qc(s, r, i = !1) {
          const [e, n] = V.useState(!1),
            l = () => n(!0);
          if (!s || e)
            return (0, d.jsx)(Ys.Z, {
              style: { position: "relative" },
              children: r,
            });
          const m = $c(s, "community_icon");
          return i
            ? (0, d.jsx)(Ys.Z, {
                style: { position: "relative" },
                children: (0, d.jsx)("img", {
                  src: m,
                  className: Ts().ShortLogoDimensions,
                  onError: l,
                }),
              })
            : (0, d.jsxs)(Ys.Z, {
                style: { position: "relative" },
                children: [
                  (0, d.jsx)("img", {
                    className: (0, hs.A)(Ts().WishlistBlurImage),
                    src: m,
                    onError: l,
                  }),
                  (0, d.jsx)("img", {
                    src: m,
                    onError: l,
                    style: {
                      position: "absolute",
                      left: 7,
                      top: 7,
                      height: 32,
                      width: 32,
                    },
                  }),
                ],
              });
        }
        function Ps(s) {
          const r = (e) => {
              e.stopPropagation(), e.preventDefault();
            },
            i = (e) => {
              s.onHide(), e.stopPropagation(), e.preventDefault();
            };
          return (0, d.jsx)("div", {
            className: Ts().HideButton,
            onClick: i,
            onMouseDown: r,
            children: (0, d.jsx)(Q.zHo, {}),
          });
        }
        function Rs(s) {
          return (0, d.jsx)("div", {
            className: Ts().SteamNotificationWrapper,
            children: s.children,
          });
        }
        var Tm = W(1944),
          xn = W(7414);
        class nd {
          m_transport = null;
          m_registry = null;
          SetDefaultTransport(r) {
            this.m_transport != null &&
              console.error(
                "Multiple attempts to set a default WebUI transport: overriding previous",
              ),
              (this.m_transport = r);
          }
          GetDefaultTransport() {
            return this.m_transport;
          }
          SetDefaultHandlerRegistry(r) {
            this.m_registry != null &&
              console.error(
                "Multiple attempts to set a default WebUI message handler registry: overriding previous",
              ),
              (this.m_registry = r);
          }
          GetDefaultHandlerRegistry() {
            return this.m_registry;
          }
        }
        const cd = new nd();
        function ws() {
          return cd;
        }
        class q extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              q.prototype.language || t.Sg(q.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              q.sm_m ||
                (q.sm_m = {
                  proto: q,
                  fields: {
                    language: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    type: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                  },
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
            let i = new (a().BinaryReader)(r),
              e = new q();
            return q.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(q.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return q.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(q.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              q.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamEngine_UpdateTextFilterDictionary_Notification";
          }
        }
        class p extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              p.prototype.language || t.Sg(p.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              p.sm_m ||
                (p.sm_m = {
                  proto: p,
                  fields: {
                    language: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    type: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              p.sm_m
            );
          }
          static MBF() {
            return p.sm_mbf || (p.sm_mbf = t.w0(p.M())), p.sm_mbf;
          }
          toObject(r = !1) {
            return p.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(p.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(p.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new p();
            return p.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(p.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return p.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(p.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              p.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamEngine_GetTextFilterDictionary_Request";
          }
        }
        class sr extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              sr.prototype.dictionary || t.Sg(sr.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              sr.sm_m ||
                (sr.sm_m = {
                  proto: sr,
                  fields: {
                    dictionary: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              sr.sm_m
            );
          }
          static MBF() {
            return sr.sm_mbf || (sr.sm_mbf = t.w0(sr.M())), sr.sm_mbf;
          }
          toObject(r = !1) {
            return sr.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(sr.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(sr.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new sr();
            return sr.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(sr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return sr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(sr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              sr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamEngine_GetTextFilterDictionary_Response";
          }
        }
        class ar extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ar.prototype.language || t.Sg(ar.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ar.sm_m ||
                (ar.sm_m = {
                  proto: ar,
                  fields: {
                    language: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    type: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              ar.sm_m
            );
          }
          static MBF() {
            return ar.sm_mbf || (ar.sm_mbf = t.w0(ar.M())), ar.sm_mbf;
          }
          toObject(r = !1) {
            return ar.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(ar.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(ar.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new ar();
            return ar.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(ar.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ar.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(ar.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ar.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamEngine_TextFilterDictionaryChanged_Notification";
          }
        }
        class nr extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              nr.prototype.pid || t.Sg(nr.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              nr.sm_m ||
                (nr.sm_m = {
                  proto: nr,
                  fields: {
                    pid: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                  },
                }),
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
            let i = new (a().BinaryReader)(r),
              e = new nr();
            return nr.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(nr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return nr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(nr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              nr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamEngine_GetGameIDForPID_Request";
          }
        }
        class cr extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              cr.prototype.gameid || t.Sg(cr.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              cr.sm_m ||
                (cr.sm_m = {
                  proto: cr,
                  fields: {
                    gameid: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
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
            let i = new (a().BinaryReader)(r),
              e = new cr();
            return cr.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(cr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return cr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(cr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              cr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamEngine_GetGameIDForPID_Response";
          }
        }
        class lr extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              lr.prototype.gameid || t.Sg(lr.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              lr.sm_m ||
                (lr.sm_m = {
                  proto: lr,
                  fields: {
                    gameid: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    should_handle: {
                      n: 2,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
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
            let i = new (a().BinaryReader)(r),
              e = new lr();
            return lr.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(lr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return lr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(lr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              lr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamEngine_SetOverlayEscapeKeyHandling_Notification";
          }
        }
        class mr extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              mr.prototype.search_term || t.Sg(mr.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              mr.sm_m ||
                (mr.sm_m = {
                  proto: mr,
                  fields: {
                    search_term: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    max_results: {
                      n: 2,
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
            let i = new (a().BinaryReader)(r),
              e = new mr();
            return mr.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(mr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return mr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(mr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              mr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamEngine_SearchAppDataCacheByStoreKeywords_Request";
          }
        }
        class fr extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              fr.prototype.appids || t.Sg(fr.M()),
              c.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              fr.sm_m ||
                (fr.sm_m = {
                  proto: fr,
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
            let i = new (a().BinaryReader)(r),
              e = new fr();
            return fr.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(fr.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return fr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(fr.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              fr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamEngine_SearchAppDataCacheByStoreKeywords_Response";
          }
        }
        var ln;
        ((s) => {
          s.UpdateTextFilterDictionaryHandler = {
            name: "SteamEngine.UpdateTextFilterDictionary#1",
            request: q,
          };
          function r(z, g) {
            return (
              (g = g || ws().GetDefaultHandlerRegistry()),
              g == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : g.RegisterServiceNotificationHandler(
                    s.UpdateTextFilterDictionaryHandler,
                    z,
                  )
            );
          }
          s.RegisterForUpdateTextFilterDictionary = r;
          function i(z, g) {
            return (
              (g = g || ws().GetDefaultTransport()),
              g == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : g.SendNotification(
                    "SteamEngine.UpdateTextFilterDictionary#1",
                    (0, w.I8)(q, z),
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          s.UpdateTextFilterDictionary = i;
          function e(z, g) {
            return (
              (g = g || ws().GetDefaultTransport()),
              g == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : g.SendNotification(
                    "SteamEngine.UpdateTextFilterDictionary#1",
                    (0, w.I8)(q, z),
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          (s.SendMsgUpdateTextFilterDictionary = e),
            (s.GetTextFilterDictionaryHandler = {
              name: "SteamEngine.GetTextFilterDictionary#1",
              request: p,
              response: sr,
            });
          function n(z, g) {
            return (
              (g = g || ws().GetDefaultTransport()),
              g == null
                ? new Promise((O, K) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      K(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : g.SendMsg(
                    "SteamEngine.GetTextFilterDictionary#1",
                    (0, w.I8)(p, z),
                    sr,
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          s.GetTextFilterDictionary = n;
          function l(z, g) {
            return (
              (g = g || ws().GetDefaultTransport()),
              g == null
                ? new Promise((O, K) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      K(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : g.SendMsg(
                    "SteamEngine.GetTextFilterDictionary#1",
                    (0, w.I8)(p, z),
                    sr,
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          (s.SendMsgGetTextFilterDictionary = l),
            (s.NotifyTextFilterDictionaryChangedHandler = {
              name: "SteamEngine.NotifyTextFilterDictionaryChanged#1",
              request: ar,
            });
          function m(z, g) {
            return (
              (g = g || ws().GetDefaultHandlerRegistry()),
              g == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : g.RegisterServiceNotificationHandler(
                    s.NotifyTextFilterDictionaryChangedHandler,
                    z,
                  )
            );
          }
          s.RegisterForNotifyTextFilterDictionaryChanged = m;
          function f(z, g) {
            return (
              (g = g || ws().GetDefaultTransport()),
              g == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : g.SendNotification(
                    "SteamEngine.NotifyTextFilterDictionaryChanged#1",
                    (0, w.I8)(ar, z),
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          s.NotifyTextFilterDictionaryChanged = f;
          function u(z, g) {
            return (
              (g = g || ws().GetDefaultTransport()),
              g == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : g.SendNotification(
                    "SteamEngine.NotifyTextFilterDictionaryChanged#1",
                    (0, w.I8)(ar, z),
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          (s.SendMsgNotifyTextFilterDictionaryChanged = u),
            (s.GetGameIDForPIDHandler = {
              name: "SteamEngine.GetGameIDForPID#1",
              request: nr,
              response: cr,
            });
          function B(z, g) {
            return (
              (g = g || ws().GetDefaultTransport()),
              g == null
                ? new Promise((O, K) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      K(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : g.SendMsg(
                    "SteamEngine.GetGameIDForPID#1",
                    (0, w.I8)(nr, z),
                    cr,
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          s.GetGameIDForPID = B;
          function y(z, g) {
            return (
              (g = g || ws().GetDefaultTransport()),
              g == null
                ? new Promise((O, K) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      K(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : g.SendMsg(
                    "SteamEngine.GetGameIDForPID#1",
                    (0, w.I8)(nr, z),
                    cr,
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          (s.SendMsgGetGameIDForPID = y),
            (s.SetOverlayEscapeKeyHandlingHandler = {
              name: "SteamEngine.SetOverlayEscapeKeyHandling#1",
              request: lr,
            });
          function T(z, g) {
            return (
              (g = g || ws().GetDefaultHandlerRegistry()),
              g == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : g.RegisterServiceNotificationHandler(
                    s.SetOverlayEscapeKeyHandlingHandler,
                    z,
                  )
            );
          }
          s.RegisterForSetOverlayEscapeKeyHandling = T;
          function I(z, g) {
            return (
              (g = g || ws().GetDefaultTransport()),
              g == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : g.SendNotification(
                    "SteamEngine.SetOverlayEscapeKeyHandling#1",
                    (0, w.I8)(lr, z),
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          s.SetOverlayEscapeKeyHandling = I;
          function S(z, g) {
            return (
              (g = g || ws().GetDefaultTransport()),
              g == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : g.SendNotification(
                    "SteamEngine.SetOverlayEscapeKeyHandling#1",
                    (0, w.I8)(lr, z),
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          (s.SendMsgSetOverlayEscapeKeyHandling = S),
            (s.SearchAppDataCacheByStoreKeywordsHandler = {
              name: "SteamEngine.SearchAppDataCacheByStoreKeywords#1",
              request: mr,
              response: fr,
            });
          function E(z, g) {
            return (
              (g = g || ws().GetDefaultTransport()),
              g == null
                ? new Promise((O, K) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      K(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : g.SendMsg(
                    "SteamEngine.SearchAppDataCacheByStoreKeywords#1",
                    (0, w.I8)(mr, z),
                    fr,
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          s.SearchAppDataCacheByStoreKeywords = E;
          function j(z, g) {
            return (
              (g = g || ws().GetDefaultTransport()),
              g == null
                ? new Promise((O, K) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      K(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : g.SendMsg(
                    "SteamEngine.SearchAppDataCacheByStoreKeywords#1",
                    (0, w.I8)(mr, z),
                    fr,
                    { ePrivilege: 1, eClientExecutionSite: 2 },
                  )
            );
          }
          s.SendMsgSearchAppDataCacheByStoreKeywords = j;
        })(ln || (ln = {}));
        var xs = W(4963),
          ec = W(4354);
        const om = 0,
          ld = 1,
          md = 2,
          Cb = 3;
        function _b(s) {
          return "unknown EClientExecutionSite ( " + s + " )";
        }
        class pa extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return pa.toObject(r, this);
          }
          static toObject(r, i) {
            return r ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(r) {
            return new pa();
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new pa();
            return pa.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return pa.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              pa.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "WebUINoResponse";
          }
        }
        var fd = Object.defineProperty,
          ud = Object.getOwnPropertyDescriptor,
          Wm = (s, r, i, e) => {
            for (
              var n = e > 1 ? void 0 : e ? ud(r, i) : r, l = s.length - 1, m;
              l >= 0;
              l--
            )
              (m = s[l]) && (n = (e ? m(r, i, n) : m(n)) || n);
            return e && n && fd(r, i, n), n;
          };
        class Kc {
          constructor() {
            (0, M.Gn)(this);
          }
          m_mapCallbacks = new Map();
          m_rgRegisteredEMsgs = [];
          m_mapServiceMethodHandlers = new Map();
          m_rgRegisteredServiceMethodHandlers = [];
          DispatchMsgToHandlers(r, i) {
            let e = r.GetEMsg();
            if (e == ec.bSr) {
              let n = r.Hdr().target_job_name();
              if (n) {
                let l = this.m_mapServiceMethodHandlers.get(n);
                if (l) {
                  this.DEBUG_LogMessageDispatch(r, l[0]);
                  for (let m of l)
                    try {
                      m.invoke(r, i);
                    } catch (f) {
                      f instanceof Error
                        ? (0, xn.aj)().ReportError(f)
                        : console.error(
                            `MessageHandlers failed to dispatch message to handler (${n}): `,
                            f,
                          );
                    }
                  return !0;
                }
              }
            } else {
              let n = this.m_mapCallbacks.get(e);
              if (n) {
                this.DEBUG_LogMessageDispatch(r, n[0]);
                for (let l of n)
                  try {
                    l.invoke(r);
                  } catch (m) {
                    m instanceof Error
                      ? (0, xn.aj)().ReportError(m)
                      : console.error(
                          "MessageHandlers failed to dispatch message to handler: ",
                          m,
                        );
                  }
                return !0;
              }
            }
            return !1;
          }
          DEBUG_LogMessageDispatch(r, i) {}
          get emsg_list() {
            return this.m_rgRegisteredEMsgs;
          }
          get servicemethod_list() {
            return this.m_rgRegisteredServiceMethodHandlers;
          }
          AddCallback(r, i, e) {
            let n = this.m_mapCallbacks.get(r);
            return (
              n ||
                ((n = []),
                this.m_mapCallbacks.set(r, n),
                this.m_rgRegisteredEMsgs.push(r)),
              n.push({ invoke: e, msgClass: i }),
              {
                invoke: e,
                unregister: () => {
                  let l = this.m_mapCallbacks.get(r);
                  if (l)
                    for (let m = 0; m < l.length; m++)
                      l[m].invoke == e && (l.splice(m, 1), m--);
                },
              }
            );
          }
          AddServiceMethodHandler(r, i) {
            let e = (n, l) => {
              let m = w.w.InitFromMsg(r.request, n),
                f = w.w.Init(r.response, ec.kHd),
                u = i(m, f),
                B = (y) => {
                  f.Hdr().set_eresult(y), l(f);
                };
              u instanceof Promise
                ? u.then(B).catch(() => {
                    B(x.zi);
                  })
                : B(u);
            };
            return (
              this.m_mapServiceMethodHandlers.has(r.name)
                ? console.error("Duplicate registration for method " + r.name)
                : (this.m_mapServiceMethodHandlers.set(r.name, [
                    { invoke: e, msgClass: r.request },
                  ]),
                  this.m_rgRegisteredServiceMethodHandlers.push(r.name)),
              {
                invoke: e,
                unregister: () => {
                  let n = this.m_mapServiceMethodHandlers.get(r.name);
                  if (n)
                    for (let l = 0; l < n.length; l++)
                      n[l].invoke == e && (n.splice(l, 1), l--);
                },
              }
            );
          }
          AddServiceNotificationHandler(r, i) {
            let e = (l, m) => {
                let f = w.w.InitFromMsg(r.request, l);
                i(f);
              },
              n = this.m_mapServiceMethodHandlers.get(r.name);
            return (
              n ||
                ((n = []),
                this.m_mapServiceMethodHandlers.set(r.name, n),
                this.m_rgRegisteredServiceMethodHandlers.push(r.name)),
              n.push({ invoke: e, msgClass: r.request }),
              {
                invoke: e,
                unregister: () => {
                  let l = this.m_mapServiceMethodHandlers.get(r.name);
                  if (l)
                    for (let m = 0; m < l.length; m++)
                      l[m].invoke == e && (l.splice(m, 1), m--);
                },
              }
            );
          }
          RegisterBaseEMessageHandler(r, i) {
            return this.AddCallback(r, void 0, i);
          }
          RegisterEMessageHandler(r, i, e) {
            return this.AddCallback(r, i, (n) => {
              e(w.w.InitFromMsg(i, n));
            });
          }
          RegisterEMessageAction(r, i, e) {
            return this.AddCallback(r, i, (n) => {
              (0, M.h5)(() => {
                e(w.w.InitFromMsg(i, n));
              });
            });
          }
          RegisterServiceNotificationHandler(r, i) {
            return this.AddServiceNotificationHandler(r, i);
          }
          RegisterServiceNotificationHandlerAction(r, i) {
            return this.AddServiceNotificationHandler(r, (e) => {
              let n;
              return (
                (0, M.h5)(() => {
                  n = i(e);
                }),
                n
              );
            });
          }
          RegisterServiceMethodHandler(r, i) {
            return this.AddServiceMethodHandler(r, i);
          }
          RegisterServiceMethodHandlerAction(r, i) {
            return this.AddServiceMethodHandler(r, (e, n) => {
              let l;
              return (
                (0, M.h5)(() => {
                  l = i(e, n);
                }),
                l
              );
            });
          }
        }
        Wm([M.sH], Kc.prototype, "m_rgRegisteredEMsgs", 2),
          Wm([M.sH], Kc.prototype, "m_rgRegisteredServiceMethodHandlers", 2);
        class P extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              P.prototype.auth_key || t.Sg(P.M()),
              c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              P.sm_m ||
                (P.sm_m = {
                  proto: P,
                  fields: {
                    auth_key: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
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
            let i = new (a().BinaryReader)(r),
              e = new P();
            return P.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(P.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return P.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(P.M(), r, i);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              P.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CTransportAuth_Authenticate_Request";
          }
        }
        class Fs extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Fs.toObject(r, this);
          }
          static toObject(r, i) {
            return r ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(r) {
            return new Fs();
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new Fs();
            return Fs.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Fs.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Fs.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CTransportAuth_Authenticate_Response";
          }
        }
        class $s extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), c.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return $s.toObject(r, this);
          }
          static toObject(r, i) {
            return r ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(r) {
            return new $s();
          }
          static deserializeBinary(r) {
            let i = new (a().BinaryReader)(r),
              e = new $s();
            return $s.deserializeBinaryFromReader(e, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return $s.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              $s.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CTransportAuth_StartShutdown_Notification";
          }
        }
        var In;
        ((s) => {
          s.AuthenticateHandler = {
            name: "TransportAuth.Authenticate#1",
            request: P,
            response: Fs,
          };
          function r(m, f) {
            return (
              (f = f || ws().GetDefaultTransport()),
              f == null
                ? new Promise((u, B) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      B(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : f.SendMsg(
                    "TransportAuth.Authenticate#1",
                    (0, w.I8)(P, m),
                    Fs,
                    { ePrivilege: 1, eClientExecutionSite: 3 },
                  )
            );
          }
          s.Authenticate = r;
          function i(m, f) {
            return (
              (f = f || ws().GetDefaultTransport()),
              f == null
                ? new Promise((u, B) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      B(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : f.SendMsg(
                    "TransportAuth.Authenticate#1",
                    (0, w.I8)(P, m),
                    Fs,
                    { ePrivilege: 1, eClientExecutionSite: 3 },
                  )
            );
          }
          (s.SendMsgAuthenticate = i),
            (s.NotifyStartShutdownHandler = {
              name: "TransportAuth.NotifyStartShutdown#1",
              request: $s,
            });
          function e(m, f) {
            return (
              (f = f || ws().GetDefaultHandlerRegistry()),
              f == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : f.RegisterServiceNotificationHandler(
                    s.NotifyStartShutdownHandler,
                    m,
                  )
            );
          }
          s.RegisterForNotifyStartShutdown = e;
          function n(m, f) {
            return (
              (f = f || ws().GetDefaultTransport()),
              f == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : f.SendNotification(
                    "TransportAuth.NotifyStartShutdown#1",
                    (0, w.I8)($s, m),
                    { ePrivilege: 1, eClientExecutionSite: 3 },
                  )
            );
          }
          s.NotifyStartShutdown = n;
          function l(m, f) {
            return (
              (f = f || ws().GetDefaultTransport()),
              f == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : f.SendNotification(
                    "TransportAuth.NotifyStartShutdown#1",
                    (0, w.I8)($s, m),
                    { ePrivilege: 1, eClientExecutionSite: 3 },
                  )
            );
          }
          s.SendMsgNotifyStartShutdown = l;
        })(In || (In = {}));
        var dd = W(3854),
          Bd = Object.defineProperty,
          gd = Object.getOwnPropertyDescriptor,
          sc = (s, r, i, e) => {
            for (
              var n = e > 1 ? void 0 : e ? gd(r, i) : r, l = s.length - 1, m;
              l >= 0;
              l--
            )
              (m = s[l]) && (n = (e ? m(r, i, n) : m(n)) || n);
            return e && n && Bd(r, i, n), n;
          };
        class Sn {
          m_socket = null;
          m_sName;
          m_sURL;
          Log = new zc.wd("CWebSocketConnection", () => this.m_sName);
          m_bDisconnectRequested = !1;
          m_bConnecting = !1;
          m_fnOnMessageHandler;
          m_fnOnCloseHandler;
          m_fnOnReconnectStartHandler;
          m_fnOnReconnectFinishHandler;
          m_nConnectAttemptsMax;
          m_nConnectAttemptTimeoutMs;
          m_bReconnectOnFailure;
          m_nReconnectAttemptTimeoutMs;
          m_nReconnectAttemptsMax;
          constructor(r, i) {
            (this.m_sName = r),
              (this.m_fnOnMessageHandler = i.fnOnMessageHandler),
              (this.m_fnOnCloseHandler = i.fnOnCloseHandler),
              (this.m_fnOnReconnectStartHandler =
                i.fnOnReconnectStartHandler ?? (() => {})),
              (this.m_fnOnReconnectFinishHandler =
                i.fnOnReconnectFinishHandler ?? (() => {})),
              (this.m_nConnectAttemptsMax = i.nConnectAttemptsMax ?? 8),
              (this.m_nConnectAttemptTimeoutMs =
                i.nConnectAttemptTimeoutMs ?? 1e3),
              (this.m_bReconnectOnFailure = i.bReconnectOnFailure ?? !1),
              (this.m_nReconnectAttemptsMax = i.nReconnectAttemptsMax ?? 3e4),
              (this.m_nReconnectAttemptTimeoutMs =
                i.nReconnectAttemptTimeoutMs ?? 1e4);
          }
          get name() {
            return this.m_sName;
          }
          async Connect(r) {
            return (
              (this.m_sURL = r),
              this.ConnectWithRetry(
                this.m_sURL,
                this.m_nConnectAttemptsMax,
                this.m_nConnectAttemptTimeoutMs,
              )
            );
          }
          async Reconnect() {
            return this.ConnectWithRetry(
              this.m_sURL,
              this.m_nReconnectAttemptsMax,
              this.m_nReconnectAttemptTimeoutMs,
            );
          }
          GetInterAttemptBackoffMs(r) {
            return (0, dd.OQ)(r, 1, 5) * 1e3;
          }
          async ConnectWithRetry(r, i, e) {
            this.m_bConnecting = !0;
            let n = 0;
            do {
              try {
                const m = await this.ConnectToSocket(r, e);
                if (m.result == x.R) return (this.m_bConnecting = !1), m;
                this.Log.Warning(
                  `connect attempt failed: ${m.result} - ${m.message}`,
                );
              } catch (m) {
                this.Log.Warning(
                  `connect attempt failed: exception ${m.name} - ${m}`,
                );
              }
              const l = this.GetInterAttemptBackoffMs(n);
              this.Log.Info(`connect retry: attempt:${n}/${i} backoff:${l}`),
                await new Promise((m) => setTimeout(m, l)),
                (this.m_socket = null),
                (n += 1);
            } while (n < i);
            return (
              this.Log.Warning(
                `websocket connect retry: limit exceeeded, bailing - ${this.name}`,
              ),
              (this.m_bConnecting = !1),
              this.BShouldReconnect() && this.StartReconnect(),
              { result: x.zi, message: "not ready, exceeded retry count" }
            );
          }
          Disconnect() {
            this.Log.Info("disconnect requested"),
              (this.m_bDisconnectRequested = !0),
              this.m_socket.close();
          }
          PrepareForShutdown() {
            this.Log.Info("shutdown pending"),
              (this.m_bDisconnectRequested = !0);
          }
          BShouldReconnect() {
            return this.m_bConnecting || !this.m_bReconnectOnFailure
              ? !1
              : !this.m_bDisconnectRequested;
          }
          async StartReconnect() {
            if (
              (this.Log.Info("start reconnect"),
              (this.m_socket = null),
              this.m_fnOnReconnectStartHandler({ connection: this }),
              (await this.Reconnect()).result != x.R)
            ) {
              this.Log.Warning("failed to re-connect to websocket after close"),
                this.m_fnOnReconnectFinishHandler({
                  connection: this,
                  eResult: x.zi,
                }),
                this.m_fnOnCloseHandler({
                  connection: this,
                  bError: !0,
                  bIsExpectedToReconnect: !1,
                });
              return;
            }
            this.Log.Info("reconnect successful"),
              this.m_fnOnReconnectFinishHandler({
                connection: this,
                eResult: x.R,
              });
          }
          async ConnectToSocket(r, i) {
            if (this.m_socket != null)
              return this.m_socket.readyState != WebSocket.OPEN
                ? (this.Log.Error(
                    `websocket in an unexpected state: ${this.m_socket.readyState}`,
                  ),
                  { result: x.zi, message: "websocket in an unexpected state" })
                : { result: x.R, message: "ready" };
            try {
              this.m_socket = new WebSocket(r);
            } catch {
              return (
                this.Log.Warning("failed to initialize websocket connection"),
                {
                  result: x.iV,
                  message: "Failed to initialize websocket connection",
                }
              );
            }
            return (
              (this.m_socket.binaryType = "arraybuffer"),
              (this.m_socket.onerror = this.OnSocketError),
              (this.m_socket.onmessage = this.OnSocketMessage),
              (this.m_socket.onopen = this.OnSocketOpen),
              (this.m_socket.onclose = this.OnSocketClose),
              (await this.WaitForSocketOpen(this.m_socket, i))
                ? (this.Log.Info("connection ready"),
                  { result: x.R, message: "ready" })
                : (this.Log.Warning("failed to reach open state"),
                  { result: x.zi, message: "failed to reach open state" })
            );
          }
          async WaitForSocketOpen(r, i) {
            if (r.readyState != WebSocket.CONNECTING)
              return r.readyState == WebSocket.OPEN;
            const e = 100;
            let n = i / e;
            for (; r.readyState == WebSocket.CONNECTING && n > 0; )
              n--, await new Promise((l) => setTimeout(l, e));
            return r.readyState == WebSocket.OPEN;
          }
          BCanSendMessages() {
            return (
              this.m_socket != null &&
              this.m_socket.readyState == WebSocket.OPEN
            );
          }
          OnSocketError(r) {
            this.Log.Warning("websocket error");
          }
          OnSocketOpen(r) {
            this.Log.Info("websocket open");
          }
          OnSocketClose(r) {
            if (this.m_bDisconnectRequested) {
              this.Log.Info("websocket closed"),
                this.m_fnOnCloseHandler({
                  connection: this,
                  bError: !1,
                  bIsExpectedToReconnect: !1,
                });
              return;
            }
            if (this.m_bConnecting) return;
            this.Log.Warning("websocket unexpectedly closed");
            const i = this.BShouldReconnect();
            this.m_fnOnCloseHandler({
              connection: this,
              bError: !0,
              bIsExpectedToReconnect: i,
            }),
              i && this.StartReconnect();
          }
          async OnSocketMessage(r) {
            this.m_fnOnMessageHandler(r.data);
          }
          SendSerializedMessage(r) {
            try {
              return this.m_socket.send(r), x.R;
            } catch {
              return x.zi;
            }
          }
        }
        sc([xs.oI], Sn.prototype, "OnSocketError", 1),
          sc([xs.oI], Sn.prototype, "OnSocketOpen", 1),
          sc([xs.oI], Sn.prototype, "OnSocketClose", 1),
          sc([xs.oI], Sn.prototype, "OnSocketMessage", 1);
        var wd = Object.defineProperty,
          bd = Object.getOwnPropertyDescriptor,
          Hn = (s, r, i, e) => {
            for (
              var n = e > 1 ? void 0 : e ? bd(r, i) : r, l = s.length - 1, m;
              l >= 0;
              l--
            )
              (m = s[l]) && (n = (e ? m(r, i, n) : m(n)) || n);
            return e && n && wd(r, i, n), n;
          };
        const zd = "localhost",
          Qs = new zc.wd("WebUITransport");
        class mn {
          m_iMsgSeq = 1;
          m_mapPendingMethodRequests = new Map();
          m_messageHandlers = new Kc();
          m_mapServiceCallErrorCount = new Map();
          m_mapConnectionDetails = new Map();
          m_fnOnStatusEventHandler;
          m_fnOnReconnectErrorHandler;
          m_bInitialized = !1;
          m_nMaximumMsgSizeBytes = 1024;
          BIsValid() {
            return this.m_bInitialized;
          }
          GetMaximumMsgSizeBytes() {
            return this.m_nMaximumMsgSizeBytes;
          }
          TEST_GetMaximumMsgBodySizeBytes() {
            return (
              this.m_nMaximumMsgSizeBytes -
              this.TEST_GetMsgHeaderEstimatedSizeBytes()
            );
          }
          TEST_GetMsgHeaderEstimatedSizeBytes() {
            return 128;
          }
          TEST_GetExcessivelyLargeBodySize() {
            return 64 * 1024 * 1024;
          }
          ReportError(r) {
            Qs.Warning(r);
            const i = (0, xn.aj)();
            i &&
              i.ReportError(new Error(r), {
                bIncludeMessageInIdentifier: !0,
                cCallsitesToIgnore: 1,
              });
          }
          async Init() {
            if (!F.TS.IN_CLIENT) return;
            const r = await SteamClient.WebUITransport.GetTransportInfo();
            (this.m_nMaximumMsgSizeBytes = r.nMaximumMsgSizeBytes),
              this.CreateConnection(
                ld,
                "steamUI",
                r.portSteamUI,
                r.authKeySteamUI,
              ),
              this.CreateConnection(
                md,
                "clientdll",
                r.portClientdll,
                r.authKeyClientdll,
              ),
              ws().SetDefaultTransport(this),
              ws().SetDefaultHandlerRegistry(this.m_messageHandlers),
              In.RegisterForNotifyStartShutdown(this.OnStartShutdown);
          }
          get messageHandlers() {
            return this.m_messageHandlers;
          }
          SetStatusEventHandler(r) {
            this.m_fnOnStatusEventHandler = r;
          }
          SetReconnectErrorHandler(r) {
            this.m_fnOnReconnectErrorHandler = r;
          }
          CreateConnection(r, i, e, n) {
            const l = {
                bReconnectOnFailure: !0,
                fnOnMessageHandler: this.OnWebsocketMessage,
                fnOnCloseHandler: this.OnWebsocketClose,
                fnOnReconnectStartHandler: this.OnWebsocketReconnectStart,
                fnOnReconnectFinishHandler: this.OnWebsocketReconnectFinish,
                nConnectAttemptsMax: 8,
                nConnectAttemptTimeoutMs: 1e4,
                nReconnectAttemptsMax: 8,
                nReconnectAttemptTimeoutMs: 1e4,
              },
              m = {
                connection: new Sn(i, l),
                sUrl: `ws://${zd}:${e}/transportsocket/`,
                sAuthKey: n,
                eClientExecutionSite: r,
              };
            this.m_mapConnectionDetails.set(r, m);
          }
          SendMsg(r, i, e, n) {
            return new Promise((l, m) => {
              const f = n.eClientExecutionSite;
              if (f == null || f == om) {
                Qs.Error(`SendMsg: Invalid client execution site: ${f}`),
                  m(`Transport SendMsg: invalid client execution site ${f}`);
                return;
              }
              const u = this.m_mapConnectionDetails.get(f);
              if (u == null) {
                Qs.Error(
                  `SendMsg: could not find connection for execution site: ${f}`,
                ),
                  m(
                    `Transport SendMsg: could not find connection for execution site ${f}`,
                  );
                return;
              }
              const B = u.connection;
              if (!B.BCanSendMessages()) {
                const S = this.m_mapServiceCallErrorCount.get(r) ?? 1;
                this.m_mapServiceCallErrorCount.set(r, S + 1);
                const E = `SendMsg: Attempt to send message but socket wasn't ready: ${B.name} - ${r}`;
                S == 1 && this.ReportError(E),
                  Qs.Warning(E + ` error count: ${S}`),
                  m("Transport SendMsg: socket not ready");
                return;
              }
              const y = this.m_iMsgSeq++;
              i.SetEMsg(ec.bSr),
                i.Hdr().set_target_job_name(r),
                i.Hdr().set_jobid_source("" + y);
              const T = i.Serialize();
              if (T.byteLength >= this.m_nMaximumMsgSizeBytes) {
                Qs.Error(
                  `SendMsg: message exceeds maximum size: ${T.byteLength} >= ${this.m_nMaximumMsgSizeBytes}`,
                );
                const S = w.w.Init(e);
                S.Hdr().set_eresult(x.zi), l(S);
                return;
              }
              if (B.SendSerializedMessage(T) != x.R) {
                Qs.Error("SendMsg: Failed to send message"),
                  m("Transport SendMsg: failed to send message");
                return;
              }
              this.m_mapPendingMethodRequests.set(y, {
                m_iSeq: y,
                m_responseClass: e,
                m_fnCallback: l,
                m_fnError: m,
              });
            });
          }
          SendNotification(r, i, e) {
            const n = e.eClientExecutionSite;
            if (n == null || n == om)
              return (
                Qs.Error(
                  `SendNotification: Invalid client execution site: ${n}`,
                ),
                !1
              );
            const l = this.m_mapConnectionDetails.get(n);
            if (l == null)
              return (
                Qs.Error(
                  `SendNotification: could not find connection for execution site: ${n}`,
                ),
                !1
              );
            const m = l.connection;
            if (!m.BCanSendMessages()) {
              const u = this.m_mapServiceCallErrorCount.get(r) ?? 1;
              this.m_mapServiceCallErrorCount.set(r, u + 1);
              const B = `SendNotification: Attempt to send message but socket wasn't ready: ${m.name} - ${r}`;
              return (
                u == 1 && this.ReportError(B),
                Qs.Warning(B + ` error count: ${u}`),
                !1
              );
            }
            return (
              i.SetEMsg(ec.bSr),
              i.Hdr().set_target_job_name(r),
              m.SendSerializedMessage(i.Serialize()) == x.R
            );
          }
          async ConnectToSite(r) {
            const e = await r.connection.Connect(r.sUrl);
            return e.result != x.R
              ? e
              : (await this.SendAuthMessage(r)).BSuccess()
                ? { result: x.R, message: "connected" }
                : { result: x.zi, message: "client auth failed" };
          }
          async MakeReady() {
            const r = [];
            for (const [e, n] of this.m_mapConnectionDetails)
              r.push(this.ConnectToSite(n));
            const i = await Promise.all(r);
            (this.m_bInitialized = !0), this.DispatchTransportStatusUpdate();
            for (const e of i) if (e.result != x.R) return e;
            return { result: x.R, message: "ready" };
          }
          GetConnectionDetails(r) {
            for (const [i, e] of this.m_mapConnectionDetails)
              if (e.connection === r) return e;
            return (
              Qs.Error("GetConnectionDetails: failed to identify connection"),
              null
            );
          }
          DispatchTransportStatusUpdate() {
            if (!this.m_fnOnStatusEventHandler) return;
            let r = !0;
            for (const [i, e] of this.m_mapConnectionDetails)
              e.connection.BCanSendMessages() || (r = !1);
            this.m_fnOnStatusEventHandler({ bConnected: r });
          }
          OnWebsocketReconnectStart(r) {
            this.DispatchTransportStatusUpdate();
          }
          OnWebsocketReconnectFinish(r) {
            if ((this.DispatchTransportStatusUpdate(), r.eResult != x.R)) {
              Qs.Warning(
                "OnWebsocketReconnect: Failed to reconnect to steam client",
              ),
                this.m_fnOnReconnectErrorHandler?.({});
              return;
            }
            this.FailAllPendingRequests();
            const i = this.GetConnectionDetails(r.connection);
            i && this.SendAuthMessage(i);
          }
          OnWebsocketClose(r) {
            r.bIsExpectedToReconnect || this.FailAllPendingRequests();
          }
          OnWebsocketMessage(r) {
            const i = new Xl.pV(r),
              e = w.w.InitHeaderFromPacket(i);
            e.Hdr().jobid_target() && e.Hdr().jobid_target() !== k.kFb
              ? this.DispatchMethodResponse(e)
              : this.DispatchNotification(e);
          }
          DispatchMethodResponse(r) {
            const i = parseInt(r.Hdr().jobid_target()),
              e = this.m_mapPendingMethodRequests.get(i);
            if (e == null) {
              (0, js.wT)(
                !1,
                "Transport Error: no pending callback for request",
              );
              return;
            }
            (0, js.wT)(
              i == e.m_iSeq,
              "Transport Error: mistmatched request sequence",
            ),
              this.m_mapPendingMethodRequests.delete(i);
            const n = w.w.InitFromMsg(e.m_responseClass, r);
            e.m_fnCallback(n);
          }
          DispatchNotification(r) {
            const i = (e) => {
              (0, js.wT)(
                !1,
                "Transport Error: A notification should not generate a response",
              );
            };
            this.m_messageHandlers.DispatchMsgToHandlers(r, i);
          }
          FailAllPendingRequests() {
            for (const [r, i] of this.m_mapPendingMethodRequests) {
              this.ReportError(
                `FailAllPendingRequests: forcing failure for request: ${i.m_responseClass.name}`,
              );
              let e = w.w.Init(i.m_responseClass);
              e.Hdr().set_eresult(x.zi), i.m_fnCallback(e);
            }
            this.m_mapPendingMethodRequests.clear();
          }
          async SendAuthMessage(r) {
            const i = In.AuthenticateHandler.name,
              e = { eClientExecutionSite: r.eClientExecutionSite },
              n = w.w.Init(P);
            return (
              n.Hdr().set_webui_auth_key(r.sAuthKey),
              await this.SendMsg(i, n, In.AuthenticateHandler.response, e)
            );
          }
          OnStartShutdown(r) {
            for (const [i, e] of this.m_mapConnectionDetails)
              e.connection.PrepareForShutdown();
            return x.R;
          }
        }
        Hn([xs.oI], mn.prototype, "OnWebsocketReconnectStart", 1),
          Hn([xs.oI], mn.prototype, "OnWebsocketReconnectFinish", 1),
          Hn([xs.oI], mn.prototype, "OnWebsocketClose", 1),
          Hn([xs.oI], mn.prototype, "OnWebsocketMessage", 1),
          Hn([xs.oI], mn.prototype, "OnStartShutdown", 1);
        const yd = new mn();
        var Md = W(7066),
          hd = Object.defineProperty,
          Td = Object.getOwnPropertyDescriptor,
          Ks = (s, r, i, e) => {
            for (
              var n = e > 1 ? void 0 : e ? Td(r, i) : r, l = s.length - 1, m;
              l >= 0;
              l--
            )
              (m = s[l]) && (n = (e ? m(r, i, n) : m(n)) || n);
            return e && n && hd(r, i, n), n;
          };
        function fn() {
          return o.TS.IN_MOBILE ? o.NQ : (0, o.xv)();
        }
        function od(s) {
          if (s === "") return !1;
          try {
            return new RegExp("\\b(" + s + ")\\b", "ugi"), !0;
          } catch {
            return (
              console.log(
                `'${s}' is an invalid expression, removing from text filter`,
              ),
              !1
            );
          }
        }
        const Wd = 3600,
          Vc = "(1)";
        class Ns {
          m_WebUIServiceTransport;
          m_unAccountID;
          m_Transport = null;
          m_Storage = null;
          m_TextFilterPreferences = {
            eTextFilterSetting: Ms.Bx6.NS,
            bIgnoreFriends: !1,
          };
          m_TextFilterWords;
          m_mapPlayerCache = new Map();
          m_strBannedWords = "";
          m_strProfanityWords = "";
          m_strCleanWords = "";
          m_strBannedPattern = "";
          m_strCleanPattern = "";
          m_regexBannedWords = null;
          m_regexCleanWords = null;
          m_bShownFilterTip = !1;
          m_bInitialized = !1;
          m_bFilterChangedWhileLoading = !1;
          m_bOngoingLoad = !1;
          m_DataAccess;
          constructor(r) {
            (0, M.Gn)(this);
            let i = new Ms.B4H();
            (this.m_TextFilterPreferences = {
              eTextFilterSetting: i.text_filter_setting(),
              bIgnoreFriends: i.text_filter_ignore_friends(),
            }),
              (this.m_TextFilterWords = new Ms.EyI()),
              (this.m_DataAccess = r);
          }
          async Init(r = 0, i = null, e = null) {
            (this.m_bInitialized = !1),
              (this.m_WebUIServiceTransport = yd),
              (this.m_unAccountID = r),
              (this.m_Transport = i),
              (this.m_Storage = e),
              (this.m_strBannedWords = ""),
              (this.m_strProfanityWords = ""),
              (this.m_strCleanWords = ""),
              this.InitSteamEngineLanguages(),
              await this.LoadFilter(),
              await this.LoadTextFilterPreferences(),
              await this.LoadTextFilterWords(),
              await this.RequestUpdatedSettings(),
              await (0, M.z7)(() => !this.m_bOngoingLoad),
              await this.InitFiltersWithRetry();
          }
          InitSteamEngineLanguages() {
            this.m_WebUIServiceTransport.BIsValid() &&
              (this.m_WebUIServiceTransport.messageHandlers.RegisterServiceNotificationHandler(
                ln.NotifyTextFilterDictionaryChangedHandler,
                this.OnTextFilterDictionaryChanged,
              ),
              this.InitSteamEngineLanguage(o.TS.LANGUAGE),
              o.TS.LANGUAGE !== "english" &&
                this.InitSteamEngineLanguage("english"));
          }
          OnTextFilterDictionaryChanged(r) {
            return (
              this.m_bInitialized
                ? this.InitFiltersWithRetry()
                : (this.m_bFilterChangedWhileLoading = !0),
              x.R
            );
          }
          async InitFiltersWithRetry() {
            do
              (this.m_bFilterChangedWhileLoading = !1),
                (this.m_bInitialized = !1),
                (this.m_bOngoingLoad = !0),
                await this.LoadLanguages(),
                this.OnFilterDataChanged(),
                (this.m_bInitialized = !0);
            while (this.m_bFilterChangedWhileLoading);
            this.m_bOngoingLoad = !1;
          }
          InitSteamEngineLanguage(r) {
            const i = w.w.Init(q);
            i.Body().set_language(r),
              i.Body().set_type("profanity"),
              ln.SendMsgUpdateTextFilterDictionary(
                i,
                this.m_WebUIServiceTransport,
              ),
              i.Body().set_type("banned"),
              ln.SendMsgUpdateTextFilterDictionary(
                i,
                this.m_WebUIServiceTransport,
              );
          }
          GetSteamEngineTextFilterDictionary(r, i) {
            const e = w.w.Init(p);
            return (
              e.Body().set_language(r),
              e.Body().set_type(i),
              ln.SendMsgGetTextFilterDictionary(e, this.m_WebUIServiceTransport)
            );
          }
          GetStorageKey(r) {
            return r + "_" + this.m_unAccountID;
          }
          async LoadTextFilterPreferences() {
            if (this.m_Storage) {
              let r = await this.m_Storage.GetObject(
                this.GetStorageKey("CTextFilterStore_TextFilterPreferences"),
              );
              r && (this.m_TextFilterPreferences = r);
            }
          }
          SaveTextFilterPreferences() {
            this.m_Storage &&
              this.m_Storage.StoreObject(
                this.GetStorageKey("CTextFilterStore_TextFilterPreferences"),
                this.m_TextFilterPreferences,
              );
          }
          ObfuscateString(r) {
            try {
              const i = new TextEncoder().encode(Vc + r);
              return Tm.iI(i);
            } catch {
              return "";
            }
          }
          DeobfuscateString(r) {
            try {
              const i = Tm.bg(r);
              let e = new TextDecoder().decode(i);
              return e.startsWith(Vc)
                ? ((e = e.slice(Vc.length)), e)
                : (console.log(
                    "DeobfuscateString given invalid base64 data, ignoring: " +
                      r,
                  ),
                  "");
            } catch {
              return "";
            }
          }
          async LoadObfuscatedString(r) {
            if (this.m_Storage) {
              let i = await this.m_Storage.GetString(this.GetStorageKey(r));
              if (i) return this.DeobfuscateString(i);
            }
            return null;
          }
          async SaveObfuscatedString(r, i) {
            this.m_Storage &&
              this.m_Storage.StoreString(
                this.GetStorageKey(r),
                this.ObfuscateString(i),
              );
          }
          async LoadTextFilterWords() {
            let r = await this.LoadObfuscatedString(
              "CTextFilterStore_TextFilterWords",
            );
            if (r)
              try {
                this.m_TextFilterWords = Ms.EyI.fromObject(JSON.parse(r));
              } catch {
                console.warn("Error parsing cached text filter word list", r),
                  (this.m_TextFilterWords = new Ms.EyI());
              }
          }
          SaveTextFilterWords() {
            this.SaveObfuscatedString(
              "CTextFilterStore_TextFilterWords",
              JSON.stringify(this.m_TextFilterWords.toObject()),
            );
          }
          async LoadFilter() {
            let r = await this.LoadObfuscatedString(
                "CTextFilterStore_strBannedPattern",
              ),
              i = await this.LoadObfuscatedString(
                "CTextFilterStore_strCleanPattern",
              );
            r != null && i != null && this.BRebuildFilter(r, i);
          }
          SaveFilter() {
            this.SaveObfuscatedString(
              "CTextFilterStore_strBannedPattern",
              this.m_strBannedPattern,
            ),
              this.SaveObfuscatedString(
                "CTextFilterStore_strCleanPattern",
                this.m_strCleanPattern,
              );
          }
          async RequestUpdatedSettings() {
            let r = new Ms.B4H();
            if (this.m_unAccountID !== 0)
              try {
                if (this.m_Transport) {
                  let i = w.w.Init(Ms.tzK);
                  r = (
                    await Ms.xtC.GetCommunityPreferences(this.m_Transport, i)
                  )
                    .Body()
                    .preferences();
                } else {
                  let i = { sessionid: (0, o.KC)(), origin: fn() };
                  const e = await Ss().get(
                    o.TS.COMMUNITY_BASE_URL +
                      "textfilter/ajaxgetcommunitypreferences",
                    { params: i, withCredentials: !0 },
                  );
                  r = Ms.B4H.fromObject(e.data.preferences);
                }
              } catch {}
            if (
              (this.UpdateCommunityPreferences(r),
              r.text_filter_words_revision() !==
                this.m_TextFilterWords.text_filter_words_revision())
            ) {
              let i = new Ms.EyI();
              if (r.text_filter_words_revision() !== 0)
                try {
                  if (this.m_Transport) {
                    let e = w.w.Init(Ms.SCE);
                    i = (await Ms.xtC.GetTextFilterWords(this.m_Transport, e))
                      .Body()
                      .words();
                  } else {
                    let e = { sessionid: (0, o.KC)(), origin: fn() };
                    const n = await Ss().get(
                      o.TS.COMMUNITY_BASE_URL +
                        "textfilter/ajaxgettextfiltercustomwords",
                      { params: e, withCredentials: !0 },
                    );
                    i = Ms.EyI.fromObject(n.data.words);
                  }
                } catch {}
              this.UpdateTextFilterWords(i);
            }
          }
          UpdateCommunityPreferences(r) {
            let i = !1;
            r.text_filter_setting() !==
              this.m_TextFilterPreferences?.eTextFilterSetting &&
              ((this.m_TextFilterPreferences.eTextFilterSetting =
                r.text_filter_setting()),
              (i = !0)),
              r.text_filter_ignore_friends() !==
                this.m_TextFilterPreferences.bIgnoreFriends &&
                ((this.m_TextFilterPreferences.bIgnoreFriends =
                  r.text_filter_ignore_friends()),
                (i = !0)),
              i && this.SaveTextFilterPreferences();
          }
          get TextFilterPreferences() {
            return this.m_TextFilterPreferences;
          }
          UpdateTextFilterWords(r) {
            (this.m_TextFilterWords = r), this.SaveTextFilterWords();
          }
          m_nLoadLanguagesRetryTimeout = void 0;
          async LoadLanguages(r = 15) {
            (this.m_strBannedWords = ""),
              (this.m_strProfanityWords = ""),
              (this.m_strCleanWords = "");
            try {
              await this.LoadLanguage(o.TS.LANGUAGE),
                o.TS.LANGUAGE !== "english" &&
                  (await this.LoadLanguage("english"));
            } catch (i) {
              this.m_nLoadLanguagesRetryTimeout &&
                ((0, js.wT)(
                  !this.m_nLoadLanguagesRetryTimeout,
                  "Got two concurrent calls to TextFilteringStore.LoadLanguages",
                ),
                window.clearTimeout(this.m_nLoadLanguagesRetryTimeout),
                (this.m_nLoadLanguagesRetryTimeout = void 0)),
                (r = Math.min(r * 2, Wd)),
                console.warn(
                  "LoadLanguages caught",
                  i,
                  "retry in",
                  r,
                  "seconds",
                ),
                (this.m_nLoadLanguagesRetryTimeout = window.setTimeout(
                  async () => {
                    (this.m_nLoadLanguagesRetryTimeout = void 0),
                      await this.LoadLanguages(r),
                      this.OnFilterDataChanged();
                  },
                  r * 1e3,
                ));
            }
          }
          async LoadLanguage(r) {
            let i = "1",
              e = "",
              n = !1;
            if (this.m_WebUIServiceTransport.BIsValid())
              try {
                {
                  const l = await this.GetSteamEngineTextFilterDictionary(
                    r,
                    "banned",
                  );
                  this.m_strBannedWords += l.Body().dictionary();
                }
                {
                  const l = await this.GetSteamEngineTextFilterDictionary(
                    r,
                    "profanity",
                  );
                  this.m_strProfanityWords += l.Body().dictionary();
                }
                n = !0;
              } catch (l) {
                console.warn(
                  "LoadLanguage caught while loading from cache:",
                  l,
                );
              }
            if (!n) {
              e = `${o.TS.COMMUNITY_CDN_URL}textfilter/gettextfilterdictionary?type=banned&language=${r}&v=${i}&origin=${fn()}`;
              {
                const l = await Ss().get(e);
                this.m_strBannedWords += l.data;
              }
              e = `${o.TS.COMMUNITY_CDN_URL}textfilter/gettextfilterdictionary?type=profanity&language=${r}&v=${i}&origin=${fn()}`;
              {
                const l = await Ss().get(e);
                this.m_strProfanityWords += l.data;
              }
            }
            e = `${o.TS.COMMUNITY_CDN_URL}textfilter/gettextfilterdictionary?type=clean_public&language=${r}&v=${i}&origin=${fn()}`;
            {
              const l = await Ss().get(e);
              this.m_strCleanWords += l.data;
            }
          }
          CreatePattern(r) {
            let i = r.filter(function (e) {
              return od(e);
            });
            return i.length > 0 ? "\\b(" + i.join("|") + ")\\b" : "";
          }
          OnFilterDataChanged() {
            let r = new RegExp(/\s*[\r\n]+\s*/g),
              i = [],
              e = [];
            switch (this.m_TextFilterPreferences.eTextFilterSetting) {
              case Ms.Bx6.C5:
                break;
              case Ms.Bx6.NS:
                break;
              case Ms.Bx6.bf:
                i = i.concat(this.m_strBannedWords.split(r));
                break;
              default:
                i = i.concat(
                  this.m_strProfanityWords.split(r),
                  this.m_strBannedWords.split(r),
                );
                break;
            }
            (i = i.concat(
              this.m_TextFilterWords.text_filter_custom_banned_words(),
            )),
              (e = this.m_strCleanWords.split(r)),
              (e = e.concat(
                this.m_TextFilterWords.text_filter_custom_clean_words(),
              ));
            let n = this.CreatePattern(i),
              l = this.CreatePattern(e);
            l != "" && (l = "^(" + l + ")$"),
              this.BRebuildFilter(n, l) && this.SaveFilter();
          }
          BRebuildFilter(r, i) {
            if (r === this.m_strBannedPattern && i === this.m_strCleanPattern)
              return !1;
            if (
              ((this.m_regexBannedWords = null),
              (this.m_strBannedPattern = r),
              r !== "")
            )
              try {
                this.m_regexBannedWords = new RegExp(r, "ugi");
              } catch (e) {
                console.warn("Couldn't compile textfilter bannedwords regex"),
                  (0, xn.aj)().ReportError(
                    new Error(
                      `Couldn't compile textfilter bannedwords regex: ${e}`,
                    ),
                  ),
                  (this.m_strBannedPattern = "");
              }
            if (
              ((this.m_regexCleanWords = null),
              (this.m_strCleanPattern = i),
              i !== "")
            )
              try {
                this.m_regexCleanWords = new RegExp(i, "ugi");
              } catch (e) {
                console.warn("Couldn't compile textfilter cleanwords regex"),
                  (0, xn.aj)().ReportError(
                    new Error(
                      `Couldn't compile textfilter cleanwords regex: ${e}`,
                    ),
                  ),
                  (this.m_strCleanPattern = "");
              }
            return !0;
          }
          CreateProfanityReplacement(r) {
            return "\u2665".repeat(r);
          }
          BHasFilter() {
            return this.m_regexBannedWords != null;
          }
          BShownFilterTip() {
            return this.m_bShownFilterTip;
          }
          SetFilterTipShown(r) {
            this.m_bShownFilterTip = r;
          }
          FilterText(r, i) {
            if (!this.m_regexBannedWords) return i;
            let e = 0;
            return (
              typeof r == "string" && r !== ""
                ? (e = new Ws.b(r).GetAccountID())
                : typeof r == "number" && (e = r),
              !i ||
              e == this.m_unAccountID ||
              (r &&
                this.m_TextFilterPreferences.bIgnoreFriends &&
                this.m_DataAccess.BIsFriend(e))
                ? i
                : i.replace(this.m_regexBannedWords, (n) =>
                    this.m_regexCleanWords &&
                    n.search(this.m_regexCleanWords) == 0
                      ? n
                      : this.CreateProfanityReplacement(n.length),
                  )
            );
          }
        }
        Ks([M.sH], Ns.prototype, "m_TextFilterPreferences", 2),
          Ks([M.sH], Ns.prototype, "m_mapPlayerCache", 2),
          Ks([M.sH], Ns.prototype, "m_regexBannedWords", 2),
          Ks([M.sH], Ns.prototype, "m_regexCleanWords", 2),
          Ks([M.sH], Ns.prototype, "m_bInitialized", 2),
          Ks([M.sH], Ns.prototype, "m_bFilterChangedWhileLoading", 2),
          Ks([M.sH], Ns.prototype, "m_bOngoingLoad", 2),
          Ks([M.XI], Ns.prototype, "Init", 1),
          Ks([Md.o], Ns.prototype, "OnTextFilterDictionaryChanged", 1),
          Ks([M.XI], Ns.prototype, "UpdateCommunityPreferences", 1),
          Ks([M.XI], Ns.prototype, "BRebuildFilter", 1);
        let Yc;
        function jd() {
          if (!Yc) {
            const s = new Set();
            let r = { sessionid: (0, o.KC)(), origin: fn() };
            Ss()
              .get(o.TS.COMMUNITY_BASE_URL + "textfilter/ajaxgetfriendslist", {
                params: r,
                withCredentials: !0,
              })
              .then((i) => {
                for (const e of i.data.friendslist?.friends ?? [])
                  (0, k.S$u)(e.efriendrelationship) &&
                    s.add(new Ws.b(e.ulfriendid).GetAccountID());
              }),
              (Yc = (i) => s.has(i));
          }
          return Yc;
        }
        let Nn = null,
          Lc = !1;
        function Od() {
          return Nn || (Nn = new Ns({ BIsFriend: jd() })), Nn;
        }
        function vd() {
          const s = (0, Ga.KV)(),
            r = (0, Ga.rX)(),
            i = (0, qc.q3)(() => Od().m_bInitialized);
          return (
            !i &&
              !Lc &&
              ((Lc = !0),
              Nn.Init(o.iA.accountid, s, r).finally(() => (Lc = !1))),
            [i, Nn]
          );
        }
        function Ud(s) {
          let r = null;
          return Sl(s) ? (r = Nd) : xl(s) ? (r = Id) : jm[s] && (r = jm[s]), r;
        }
        function xd(s) {
          const { rollup: r, uimode: i, location: e } = s,
            n = Ud(r.type);
          return n
            ? (0, d.jsx)(Df.Ay, {
                controller: "notification",
                method: (0, k.fLp)(i),
                submethod: (0, k.ey3)(e),
                children: (0, d.jsx)(n, { ...s }),
              })
            : null;
        }
        function Id(s) {
          const {
              rollup: r,
              onNotificationClick: i,
              location: e,
              uimode: n,
              onHide: l,
            } = s,
            m = Xf(r.item.notification_type, r.item.body_data),
            f = Xm(r.type)
              .replace("k_ESteamNotificationType_", "")
              ?.toLowerCase(),
            u = (0, qf.aL)(m?.link ?? "#", f),
            B = () =>
              i(() => {
                m?.link && u && window.location.assign(u);
              }, r.item),
            y = (T) => i(() => {}, r.item, T);
          return (0, d.jsx)("a", {
            href: m?.link ? u : "#",
            onMouseDown: y,
            children: (0, d.jsx)(Gu, {
              icon: Ru(r.type),
              onActivate: B,
              fallbackLogo: (0, d.jsx)(Q.Qte, {}),
              location: e,
              eUIMode: n,
              data: m,
              timestamp: r.timestamp,
              nUnread: r.rgunread.length,
              bNewIndicator: Es(r.item),
              onHide: l,
            }),
          });
        }
        function Sd(s) {
          const {
              rollup: r,
              onNotificationClick: i,
              location: e,
              uimode: n,
              onHide: l,
            } = s,
            m = `${F.TS.COMMUNITY_BASE_URL}my/gamenotifications/`,
            f = () => i(() => window.location.assign(m), r.item),
            u = (y) => i(() => {}, r.item, y),
            B = Ja(r);
          return (0, d.jsx)("a", {
            href: m,
            onMouseDown: u,
            children: (0, d.jsx)(ed, {
              icon: (0, d.jsx)(Q.Qte, {}),
              fallbackLogo: (0, d.jsx)(Q.wC1, {}),
              onActivate: f,
              location: e,
              eUIMode: n,
              data: B,
              timestamp: r.timestamp,
              nUnread: r.rgunread.length,
              bNewIndicator: Es(r.item),
              onHide: l,
            }),
          });
        }
        function Hd(s) {
          const {
              steamid: r,
              url: i,
              strTitleLoc: e,
              strBodyLoc: n,
              rollup: l,
              onNotificationClick: m,
              location: f,
              uimode: u,
              onHide: B,
            } = s,
            { data: y } = qa(r),
            T = (z) => m(() => {}, l.item, z),
            I = () => m(() => window.location.assign(i), l.item);
          if (!n) return null;
          const S = !y,
            E = (0, h.we)(e, y?.m_strPlayerName ?? ""),
            j = (0, h.we)(n, y?.m_strPlayerName ?? "");
          return (0, d.jsx)("a", {
            href: i,
            onMouseDown: T,
            children: (0, d.jsx)(hm, {
              title: E,
              body: j,
              bDataLoading: S,
              logoUrl: y?.avatar_url_medium,
              icon: (0, d.jsx)(Q.Qte, {}),
              onActivate: I,
              location: f,
              eUIMode: u,
              timestamp: l.timestamp,
              nUnread: l.rgunread.length,
              bNewIndicator: Es(l.item),
              onHide: B,
            }),
          });
        }
        function Nd(s) {
          const r = Zf(s.rollup.type, s.rollup.item.body_data);
          if (!r) return null;
          const { strTitleLoc: i, strBodyLoc: e, strUrl: n, steamid: l } = r;
          return !l || !i || !e
            ? null
            : (0, d.jsx)(Hd, {
                steamid: l,
                url: n,
                strTitleLoc: i,
                strBodyLoc: e,
                ...s,
              });
        }
        function kd(s) {
          const {
              rollup: r,
              onNotificationClick: i,
              location: e,
              uimode: n,
              onHide: l,
            } = s,
            m = (0, ra.LH)(),
            f = Ja(r),
            u = `${F.TS.COMMUNITY_BASE_URL}profiles/${m}/tradeoffers`,
            B = () => i(() => window.location.assign(u), r.item),
            y = (S) => i(() => {}, r.item, S),
            T = Ws.b.InitFromAccountID(f),
            { data: I } = qa(T.GetAccountID());
          return (0, d.jsx)("a", {
            href: u,
            onMouseDown: y,
            children: (0, d.jsx)(Cu, {
              logo: (0, d.jsx)(Q.Qte, {}),
              icon: (0, d.jsx)(Q.h20, {}),
              onActivate: B,
              location: e,
              eUIMode: n,
              timestamp: r.timestamp,
              nUnread: r.rgunread.length,
              displayName: I?.m_strPlayerName,
              bNewIndicator: Es(r.item),
              onHide: l,
            }),
          });
        }
        const Ed = (s) => {
          const {
              rollup: r,
              onNotificationClick: i,
              location: e,
              uimode: n,
              onHide: l,
            } = s,
            m = `${F.TS.COMMUNITY_BASE_URL}my/tradehistory`,
            f = () => i(() => window.location.assign(m), r.item),
            u = (B) => i(() => {}, r.item, B);
          return (0, d.jsx)("a", {
            href: m,
            onMouseDown: u,
            children: (0, d.jsx)(_u, {
              logo: (0, d.jsx)(Q.Qte, {}),
              icon: (0, d.jsx)(Q.h20, {}),
              onActivate: f,
              location: e,
              eUIMode: n,
              timestamp: r.timestamp,
              nUnread: r.rgunread.length,
              bNewIndicator: Es(r.item),
              onHide: l,
            }),
          });
        };
        function Fd(s) {
          const {
              rollup: r,
              onNotificationClick: i,
              location: e,
              uimode: n,
              onHide: l,
            } = s,
            m = (0, ra.LH)(),
            f = `${F.TS.COMMUNITY_BASE_URL}profiles/${m}/inventory/#pending_gifts`,
            u = () => i(() => window.location.assign(f), r.item),
            B = (S) => i(() => {}, r.item, S),
            y = Ja(r),
            T = Ws.b.InitFromAccountID(y),
            { data: I } = qa(T.GetAccountID());
          return (0, d.jsx)("a", {
            href: f,
            onMouseDown: B,
            children: (0, d.jsx)(rd, {
              logo: (0, d.jsx)(Q.Qte, {}),
              icon: (0, d.jsx)(Q.pD, {}),
              onActivate: u,
              location: e,
              eUIMode: n,
              timestamp: r.timestamp,
              nUnread: r.rgunread.length,
              senderName: I?.m_strPlayerName,
              bNewIndicator: Es(r.item),
              onHide: l,
            }),
          });
        }
        function $d(s) {
          const {
              rollup: r,
              onNotificationClick: i,
              location: e,
              uimode: n,
              onHide: l,
            } = s,
            m = Ja(r),
            { data: f } = qa(m.responder_steamid),
            u =
              m.package_id > 0
                ? { packageid: m.package_id }
                : { bundleid: m.bundle_id },
            { data: B } = (0, ps.U2)(u),
            y = B ? `app/${B.appid}` : "",
            T = `${F.TS.STORE_BASE_URL}${y}`,
            I = () => i(() => window.location.assign(T), r.item),
            S = (g) => i(() => {}, r.item, g),
            E = !f || !B,
            j = (0, h.we)("#SteamNotifications_RequestedGameAddedTitle"),
            z = B
              ? (0, h.we)(
                  "#SteamNotifications_RequestedGameAddedBody",
                  B.name ?? "",
                )
              : "";
          return (0, d.jsx)("a", {
            href: T,
            onMouseDown: S,
            children: (0, d.jsx)(hm, {
              title: j,
              body: z,
              bDataLoading: E,
              logoUrl: f?.avatar_url_medium,
              icon: (0, d.jsx)(Q.Qte, {}),
              onActivate: I,
              location: e,
              eUIMode: n,
              timestamp: r.timestamp,
              nUnread: r.rgunread.length,
              bNewIndicator: Es(r.item),
              onHide: l,
            }),
          });
        }
        function Qd(s) {
          const {
              rollup: r,
              onNotificationClick: i,
              location: e,
              uimode: n,
              onHide: l,
            } = s,
            m = (0, ra.LH)(),
            f = (0, Ga.KV)(),
            u = Ef(r.item, m, f),
            B = Ja(r),
            y = `${F.TS.COMMUNITY_BASE_URL}profiles/${m}/inventory`,
            T = () => i(() => window.location.assign(y), r.item),
            I = (S) => i(() => {}, r.item, S);
          return (0, d.jsx)("a", {
            href: y,
            onMouseDown: I,
            children: (0, d.jsx)(td, {
              icon: (0, d.jsx)(Q.rI_, {}),
              fallbackLogo: (0, d.jsx)(Q.Qte, {}),
              onActivate: T,
              location: e,
              eUIMode: n,
              data: B,
              timestamp: r.timestamp,
              nUnread: r.rgunread.length,
              itemState: u,
              bNewIndicator: Es(r.item),
              onHide: l,
            }),
          });
        }
        function Kd(s) {
          const {
              rollup: r,
              onNotificationClick: i,
              location: e,
              uimode: n,
              onHide: l,
            } = s,
            m = (0, ra.LH)(),
            f = `${F.TS.COMMUNITY_BASE_URL}profiles/${m}/friends/pending`,
            u = () => i(() => window.location.assign(f), r.item),
            B = (I) => i(() => {}, r.item, I),
            y = Ja(r),
            { data: T } = qa(y.requestorID);
          return (0, d.jsx)("a", {
            href: f,
            onMouseDown: B,
            children: (0, d.jsx)(id, {
              fallbackLogo: (0, d.jsx)(Q.Gv$, {}),
              icon: (0, d.jsx)(Q.sdo, {}),
              onActivate: u,
              location: e,
              eUIMode: n,
              data: y,
              timestamp: r.timestamp,
              nUnread: r.rgunread.length,
              requestorAvatarURL: T?.avatar_url_medium,
              requestorName: T?.m_strPlayerName,
              bNewIndicator: Es(r.item),
              onHide: l,
            }),
          });
        }
        function Vd(s) {
          const {
              rollup: r,
              onNotificationClick: i,
              location: e,
              uimode: n,
              onHide: l,
            } = s,
            m = Ja(r),
            f = (0, ra.LH)(),
            u = F.TS.COMMUNITY_BASE_URL + r.url,
            B = () => i(() => window.location.assign(u), r.item),
            y = (Cs) => {
              i(() => {}, r.item, Cs);
            },
            T = Ff(m) ? m?.account_steam_id?.GetAccountID() : null,
            { data: I } = qa(T),
            S = $f(m) ? m?.owner_steam_id?.GetAccountID() : null,
            { data: E } = qa(S),
            j = m.json_data?.app_id ? { appid: m.json_data?.app_id } : void 0,
            { data: z } = (0, ps.J$)(j),
            [g, O] = vd(),
            K = g
              ? O.FilterText(m.account_steam_id.GetAccountID(), m.title)
              : "",
            vs = g
              ? O.FilterText(m.account_steam_id.GetAccountID(), m.comment)
              : "";
          return (0, d.jsx)("a", {
            href: u,
            onMouseDown: y,
            children: (0, d.jsx)(sd, {
              fallbackLogo: (0, d.jsx)(Q.Qte, {}),
              icon: (0, d.jsx)(Q.MwB, {}),
              onActivate: B,
              location: e,
              currentUserSteamID: f,
              eUIMode: n,
              data: m,
              timestamp: r.timestamp,
              nUnread: r.rgunread.length,
              postedByAvatarURL: I?.avatar_url_medium,
              postedByDisplayName: I?.m_strPlayerName,
              ownerDisplayName: E?.m_strPlayerName,
              bNewIndicator: Es(r.item),
              appName: z?.name,
              onHide: l,
              commentTitle: K,
              commentBody: vs,
              bLoading: !g,
            }),
          });
        }
        function Yd(s) {
          const {
              rollup: r,
              onNotificationClick: i,
              location: e,
              uimode: n,
              onHide: l,
            } = s,
            m = Ja(r),
            { data: f } = (0, ps.J$)({ appid: m.appid }),
            [u, B] = (0, V.useState)(""),
            y = (0, ra.LH)();
          (0, V.useEffect)(() => {
            if (m.count > 1 && m.appids?.length)
              return B(
                F.TS.STORE_BASE_URL +
                  `wishlist/profiles/${y}/?wng=${m.appids.toString()}#sort=discount`,
              );
            if (f) return B(F.TS.STORE_BASE_URL + f.store_url_path);
            const S = m.appid ? `?appid=${m.appid}` : "";
            B(
              F.TS.STORE_BASE_URL + `wishlist/profiles/${y}/${S}#sort=discount`,
            );
          }, [m, f, y]);
          const T = () => i(() => window.location.assign(u), r.item),
            I = (S) => i(() => {}, r.item, S);
          return (0, d.jsx)("a", {
            href: u,
            onMouseDown: I,
            children: (0, d.jsx)(ad, {
              fallbackLogo: (0, d.jsx)(Q.Qte, {}),
              icon: (0, d.jsx)(Q.ilR, {}),
              onActivate: T,
              location: e,
              data: m,
              timestamp: r.timestamp,
              nUnread: r.rgunread.length,
              eUIMode: n,
              bNewIndicator: Es(r.item),
              onHide: l,
            }),
          });
        }
        function Ld(s) {
          const { url: r, count: i, icon: e, strLocToken: n, eFeature: l } = s,
            m = Qm(l);
          return !i || m
            ? null
            : (0, d.jsx)("a", {
                href: r,
                className: Af().WebPinnedNotification,
                children: (0, d.jsx)(gu, {
                  icon: (0, d.jsx)(e, {}),
                  count: i,
                  onActivate: () => window.location.assign(r),
                  strLocToken: n,
                  eUIMode: k.yrU,
                  visible: !0,
                }),
              });
        }
        const jm = {
          [wn]: Vd,
          [bn]: Yd,
          [Qn]: Kd,
          [en]: Qd,
          [$n]: Fd,
          [Kn]: kd,
          [zn]: Sd,
          [Vn]: $d,
          [gc]: Ed,
        };
        var Xd = W(2734),
          Zd = Object.defineProperty,
          Jd = Object.getOwnPropertyDescriptor,
          Om = (s, r, i, e) => {
            for (
              var n = e > 1 ? void 0 : e ? Jd(r, i) : r, l = s.length - 1, m;
              l >= 0;
              l--
            )
              (m = s[l]) && (n = (e ? m(r, i, n) : m(n)) || n);
            return e && n && Zd(r, i, n), n;
          };
        const Xc = class Sm extends V.Component {
          static GetScrollableClassname() {
            return "vt-scrollable";
          }
          m_observer = null;
          m_refElement = V.createRef();
          m_elTracked = null;
          m_bPreviouslyIntersecting = !1;
          BTriggerOnce() {
            return (this.props.trigger || "once") == "once";
          }
          GetBoundingClientRect() {
            return this.m_refElement.current
              ? this.m_refElement.current.getBoundingClientRect()
              : null;
          }
          DestroyObserver() {
            this.m_observer &&
              (this.m_observer.disconnect(),
              (this.m_observer = null),
              (this.m_elTracked = null));
          }
          componentWillUnmount() {
            this.DestroyObserver();
          }
          componentDidMount() {
            this.UpdateObserver(null);
          }
          componentDidUpdate(r) {
            this.UpdateObserver(r);
          }
          UpdateObserver(r) {
            if (this.m_bPreviouslyIntersecting && this.BTriggerOnce()) return;
            this.m_observer &&
              r &&
              (r.rootMargin != this.m_observer.rootMargin ||
                r.thresholds != this.m_observer.thresholds) &&
              this.DestroyObserver();
            let i = this.m_refElement.current;
            if (
              (this.m_observer &&
                i != this.m_elTracked &&
                (this.m_elTracked &&
                  this.m_observer.unobserve(this.m_elTracked),
                (this.m_elTracked = null)),
              !this.m_observer && i)
            ) {
              let n = { root: this.FindScrollableAncestor(i) };
              this.props.rootMargin && (n.rootMargin = this.props.rootMargin),
                this.props.thresholds && (n.threshold = this.props.thresholds),
                (this.m_observer = (0, xs.md)(i, this.OnIntersection, n));
            }
            this.m_observer &&
              i &&
              i != this.m_elTracked &&
              (this.m_observer.observe(i), (this.m_elTracked = i));
          }
          FindScrollableAncestor(r) {
            return Xd.Kf(r, (i) => {
              const e = this.props.horizontal
                ? window.getComputedStyle(i).overflowX
                : window.getComputedStyle(i).overflowY;
              return !!(
                e == "scroll" ||
                e == "auto" ||
                i.classList.contains(Sm.GetScrollableClassname())
              );
            });
          }
          HandleRef(r) {
            (0, xs.cZ)(this.m_refElement, r),
              this.props.containerRef && (0, xs.cZ)(this.props.containerRef, r);
          }
          OnIntersection(r, i) {
            let e = !1;
            for (const n of r)
              if (n.isIntersecting) {
                e = !0;
                break;
              }
            this.m_bPreviouslyIntersecting != e &&
              ((this.m_bPreviouslyIntersecting = e),
              this.props.onVisibilityChange && this.props.onVisibilityChange(e),
              e && this.BTriggerOnce() && this.DestroyObserver());
          }
          render() {
            let {
              onVisibilityChange: r,
              rootMargin: i,
              trigger: e,
              horizontal: n,
              containerRef: l,
              ...m
            } = this.props;
            return (0, d.jsx)(Ys.Z, {
              ref: this.HandleRef,
              ...m,
              children: this.props.children,
            });
          }
        };
        Om([xs.oI], Xc.prototype, "HandleRef", 1),
          Om([xs.oI], Xc.prototype, "OnIntersection", 1);
        let Ad = Xc;
        const Gs = new an(),
          vm = (0, Yf.Nr)(function (r) {
            const { bResponsiveHeader: i, notifications: e } = r;
            V.useEffect(() => {
              e && !Gs.m_bLoaded && Gs.ProcessNewNotificationPayload(e);
            }, [e]);
            const n = (0, Ga.KV)();
            (0, V.useEffect)(() => {
              Gs.setTransport(n),
                (window.RefreshSteamNotifications = () => iB(n));
            }, [n]);
            const l = ac();
            return i
              ? (0, d.jsxs)(d.Fragment, {
                  children: [(0, d.jsx)(xm, {}), (0, d.jsx)(Pd, {})],
                })
              : (0, d.jsx)(Dd, { nTotalUnviewed: l.nUnviewed });
          });
        function ac() {
          return (0, qc.q3)(() => ({
            notifications: Gs.m_rgNotificationRollups,
            summary: Gs.m_summary,
            loaded: Gs.m_bLoaded,
            nUnviewed: Gs.m_nUnviewed,
          }));
        }
        function Um() {
          const s = ac(),
            r = (0, ra.LH)(),
            { data: i } = lc(r),
            e = mc(),
            n = i?.settings;
          return s.notifications.filter(
            (l) => !Kl(l.type, n, e) && !Yl(l.item),
          );
        }
        function Dd(s) {
          const { nTotalUnviewed: r } = s,
            i = V.useRef(null),
            e = Um(),
            [n, l] = V.useState(ys().AnimateBell);
          V.useEffect(() => {
            i.current ||
              ((i.current = (0, Km.lX)(
                (0, d.jsx)(qd, { popupRef: i }),
                document.getElementById("green_envelope_menu_root"),
                {
                  bPreferPopLeft: !0,
                  bOverlapHorizontal: !0,
                  strClassName: "GreenEnvelopeMenu",
                },
              )),
              i.current.Hide());
            const u = document.getElementById("header_notification_link");
            u && (u.style.cssText = "background-color: rgba(0,0,0,0)"),
              window.setTimeout(() => l(null), 2e3);
          }, []);
          const m = () => {
              i.current?.visible ||
                (i.current?.Show(),
                e.findIndex((B) => !B.item.viewed) != -1 &&
                  Gs.MarkAllItemsViewed());
            },
            f = V.useCallback(
              (u) => {
                !u && i.current?.visible && i.current.Hide();
              },
              [i],
            );
          return (0, d.jsx)(Ad, {
            trigger: "repeated",
            onVisibilityChange: f,
            children: (0, d.jsx)("button", {
              onClick: m,
              id: "green_envelope_menu_root",
              className: (0, hs.A)(
                ys().NotificationsButton,
                r ? ys().Green : ys().Grey,
                n,
              ),
              children: (0, d.jsx)(Ll.$0s, {
                className: ys().SVGNotifications,
                "aria-label": (0, h.we)("#NotificationsMenu_Title"),
              }),
            }),
          });
        }
        const qd = (s) => {
            const { popupRef: r } = s,
              i = V.useRef(null),
              [e, n] = V.useState(!1);
            V.useEffect(() => {
              n(
                i.current != null &&
                  i.current?.scrollHeight > i.current?.clientHeight,
              );
            }, [i.current?.scrollHeight, e]);
            const l = e ? void 0 : ys().MenuScrollbarHidden;
            return (0, d.jsxs)("div", {
              className: ys().NotificationsMenu,
              onClick: () => r?.current?.Hide(),
              children: [
                (0, d.jsx)(pd, {}),
                (0, d.jsxs)("div", {
                  className: (0, hs.A)(ys().NotificationsMenuScrollable, l),
                  ref: i,
                  children: [
                    (0, d.jsx)(xm, {}),
                    (0, d.jsx)(Gd, {}),
                    (0, d.jsx)(_d, {}),
                  ],
                }),
              ],
            });
          },
          pd = () => {
            const s = `${F.TS.COMMUNITY_BASE_URL}profiles/${F.iA.steamid}/notifications`;
            return (0, d.jsxs)("div", {
              className: (0, hs.A)(ys().NotificationHeader),
              children: [
                (0, d.jsx)("div", {
                  className: ys().AllNotificationsTitle,
                  children: (0, h.we)("#NotificationsMenu_Title"),
                }),
                (0, d.jsx)("a", {
                  href: s,
                  children: (0, d.jsx)("div", {
                    className: ys().AllNotificationsButton,
                    children: (0, h.we)("#NotificationsMenu_ViewAll"),
                  }),
                }),
              ],
            });
          },
          Pd = () => {
            const s = `${F.TS.COMMUNITY_BASE_URL}profiles/${F.iA.steamid}/notifications`;
            return (0, d.jsx)("div", {
              className: (0, hs.A)(
                ys().NotificationHeader,
                ys().ResponsiveViewAll,
              ),
              children: (0, d.jsx)("a", {
                href: s,
                children: (0, d.jsx)("div", {
                  className: ys().AllNotificationsButton,
                  children: (0, h.we)("#NotificationsMenu_ViewAll"),
                }),
              }),
            });
          };
        function Rd(s, r, i) {
          !r.read &&
            (!i || i.button == 0 || i.button == 1) &&
            r.notification_id &&
            Gs.MarkItemRead(r.notification_id),
            s();
        }
        function Gd() {
          const s = Um();
          return s.length == 0
            ? null
            : (0, d.jsx)("div", {
                className: ys().NotificationsMenuEntriesContainer,
                children: s.map((r, i) =>
                  (0, d.jsx)(
                    xd,
                    {
                      rollup: r,
                      onNotificationClick: Rd,
                      uimode: k.yrU,
                      location: k.B3I,
                    },
                    i,
                  ),
                ),
              });
        }
        const Cd = [
          {
            fnUrl: () =>
              `${F.TS.COMMUNITY_BASE_URL}profiles/${F.iA.steamid}/inventory/#pending_gifts`,
            countItem: "pending_gifts",
            icon: Q.pD,
            strLocToken: "#Notification_NewGiftsPinned_Body",
            feature: kn,
          },
          {
            fnUrl: () =>
              `${F.TS.COMMUNITY_BASE_URL}profiles/${F.iA.steamid}/home/invites`,
            countItem: "pending_invites",
            icon: Q.sdo,
            strLocToken: "#Notification_FriendInvitePinned_Body",
            feature: Ac,
          },
          {
            fnUrl: () =>
              `${F.TS.COMMUNITY_BASE_URL}profiles/${F.iA.steamid}/notifications#comments`,
            countItem: "comments",
            icon: Q.MwB,
            strLocToken: "#Notification_NewCommentPinned_Body",
            feature: En,
          },
          {
            fnUrl: () =>
              `${F.TS.COMMUNITY_BASE_URL}profiles/${F.iA.steamid}/inventory`,
            countItem: "inventory_items",
            icon: Q.rI_,
            strLocToken: "#Notification_NewItemAnnouncementPinned_Body",
            feature: Jc,
          },
          {
            fnUrl: () =>
              `${F.TS.COMMUNITY_BASE_URL}profiles/${F.iA.steamid}/tradeoffers`,
            countItem: "trade_offers",
            icon: Q.h20,
            strLocToken: "#Notification_NewTradeOffersPinned_Body",
            feature: nc,
          },
          {
            fnUrl: () =>
              `${F.TS.COMMUNITY_BASE_URL}profiles/${F.iA.steamid}/gamenotifications`,
            countItem: "async_game_updates",
            icon: Q.wC1,
            strLocToken: "#Notification_NewAsyncGamePinned_Body",
          },
          {
            fnUrl: () => `${F.TS.COMMUNITY_BASE_URL}my/moderatormessages`,
            countItem: "moderator_messages",
            icon: Ll.hJ4,
            strLocToken: "#Notification_NewModeratorMessagePinned_Body",
            feature: En,
          },
          {
            fnUrl: () => `${F.TS.HELP_BASE_URL}wizard/HelpRequests`,
            countItem: "help_request_replies",
            icon: Q.Cv4,
            strLocToken: "#Notification_NewHelpRequestRepliesPinned_Body",
          },
          {
            fnUrl: () =>
              `${F.TS.STORE_BASE_URL}account/familymanagement/join?ft=${F.iA.steamid}`,
            countItem: "family_invites",
            icon: Q.Qte,
            strLocToken: "#Notification_FamilyInvitePinned_Body",
          },
        ];
        function xm() {
          const s = ac();
          return (0, d.jsx)(d.Fragment, {
            children: Cd.map((r) =>
              (0, d.jsx)(
                Ld,
                {
                  url: r.fnUrl(),
                  count: s.summary[r.countItem],
                  icon: r.icon,
                  strLocToken: r.strLocToken,
                  eFeature: r.feature,
                },
                r.countItem,
              ),
            ),
          });
        }
        function _d() {
          return (0, d.jsxs)("div", {
            className: ys().EmptyNotificationsCtn,
            children: [
              (0, d.jsx)("div", {
                className: ys().EmptyNotificationsTitle,
                children: (0, h.we)("#NotificationsList_EmptyTitle_New"),
              }),
              (0, d.jsx)("div", {
                className: ys().EmptyNotificationsBody,
                children: (0, h.we)("#NotificationsList_EmptyBody"),
              }),
            ],
          });
        }
        const rB = vm;
        async function iB(s) {
          let r = null;
          try {
            r = await Sf(
              s,
              F.iA.steamid,
              (0, k.sfN)(F.TS.LANGUAGE),
              void 0,
              !1,
              !1,
            );
          } catch {}
          r && Gs.ProcessNewNotificationPayload(r);
        }
      },
      9553: (Vs) => {
        Vs.exports = {
          NotificationsMenu: "_3EPagkYPxulGbe-5invUhK",
          NotificationsMenuEntriesContainer: "m0H4PhlsBcw0NzlQje7q",
          NotificationsMenuScrollable: "_2hgxpK_sWS7mDF66uPetpF",
          MenuScrollbarHidden: "_2Qeur5RWXHnW-xneBJUfH-",
          NotificationHeader: "_1Uh_y1atXoMOUxGyUQK8vC",
          ResponsiveViewAll: "_2q-LyEsEZpxFZBbqO07xgp",
          AllNotificationsTitle: "-Dpw5WXg2gjckpFAkP_lg",
          AllNotificationsButton: "_1OH7OiFxIJo5Y7Z4Z6U6iO",
          NotificationsButton: "_1jW5_Ycv6jGKu28A1OSIQK",
          SVGNotifications: "_13fwmIK8Ajo0qndUS5zb7E",
          Grey: "_34A9kjlnmgfUWSmr16VjXE",
          Disabled: "_3h1sV2qrp20U37VwC47pM2",
          Green: "_2Hpe0_DGY0TBz45Lg0zUr9",
          AnimateBell: "_34o7mvTYzowbNAllqYUQuJ",
          NotificationBellAnimation: "_3W6ngOzFfcJJpftaQ5t9bk",
          NotificationBellUvula: "xpAr9gP3YAkKomrGUivf8",
          EmptyNotificationsCtn: "_2a4xLIvDI3rmLxVfLMQFTz",
          EmptyNotificationsTitle: "_2SIA4NMfduV_HWDptv6cAK",
          EmptyNotificationsBody: "EpEznkfiKxcqI9p52OmRx",
        };
      },
      7786: (Vs) => {
        Vs.exports = {
          "duration-app-launch": "800ms",
          loadinganimationiterationcount: "20",
          loadinganimationduration: "1s",
          StandardTemplateContainer: "_2yhmcyeUOyM8lt__Skbk9O",
          "ItemFocusAnim-darkerGrey": "_3mfiE_PUWOPy8UTDJlYI0u",
          Timestamp: "_26rvbcKFCQjLKx-pD7BhvY",
          StandardTemplate: "_3-H47wPl1Ng3lh7xGZOPIg",
          PinnedTemplate: "_3V6804k2yutEiF6IWg8axH",
          StandardLogoDimensions: "_1KIwOtwkYQUtRoPyxlh3G-",
          Content: "_2axKS7MCnzMBRXRcYLn2Is",
          Header: "_1WuK_iZ6ARkIiptCX5qd7G",
          Icon: "_2F0wqsu2mqsHxBSJcu1sPJ",
          Title: "_18PwvOcpWfW3M8j2-bEPPJ",
          StandardNotificationDescription: "_3fUrGm-WHq3qxIpSqRZDgc",
          StandardNotificationSubText: "_2yUEtF_eCucoxdu85zlOCp",
          Multiline: "_2sQoMK-0onl8u8WHHUnDdw",
          Count: "_2zZKXEnYcEZsL5OGHzkKv2",
          PinnedBody: "_1nziGc41LlyGfDufK0iQos",
          AllNotificationsTemplate: "_1xvIUtLkTrdEk2Ob1MqFcQ",
          StandardTemplateDesktop: "_1GcAugE5c4nbBUwrA4_xwS",
          DesktopToastTemplate: "_3ENh9LzRnZgfTyfxp_J2rr",
          PinnedTemplateWeb: "_2Mo87NUHyjLkjvKcPQxPRu",
          PinnedTemplateDesktop: "j9jQA6QaLJ23lyfuo9nY6",
          AppLogo: "_3mWpfn1_PDwd1gOm26RhMl",
          AppLogoBackgroundImage: "_2FcBwxd4lGOEMTXCnmxczK",
          MarkedRead: "_15_E6efeCt2NTqCgUKav1W",
          markReadBackground: "_1paPuAH6aCXNKdXvf5jv1d",
          Unread: "_1YAQHDHv4hsPaauccvAFtn",
          PlayerNickName: "_2n0ipWJFroZdQVwkXHqdJL",
          FullName: "_2EWNcLrlrl9Gx-yZH039tH",
          IngameTitle: "_3uSbhtY3vHtdj-3tpua_Pb",
          OnlineTitle: "_3bqD-bBMgrGwLsBY2L1gSL",
          GroupMessageTitle: "_3C8GdaaS-zmchnCHHiHG6n",
          GroupMessageUserName: "_2hs2ZR_wYkRHWdtlr681Z6",
          GroupMessageBody: "_3AbCrY-d5NpL5E5DUfgdQ8",
          GroupMessageIcon: "_3vDmqJBvNPH1D_p-Da_djj",
          Body: "_2jpxEWvo06efD6-NR1cplA",
          FriendInGameAppColor: "_2XSwzNWGiJvW0zTgqT0DUI",
          WishlistBlurImage: "_2HBcq6niThHlNihI9xiBSm",
          AvatarStatus: "_1mMC7Hv71CzO0jfm_66W4K",
          IncomingCallToast: "_3wNcsYlo3lQ-yamJPMco8F",
          ShortLogoDimensions: "_1-CP3jNFd252Y0uV_Ua0VE",
          LoadingTemplate: "_2mFLv5Puw95n9oUFp9OMAs",
          Hide: "_1W2rIElq16YPQi4DqoqPLM",
          ShimmerLogo: "_3QrlTtpidzjKPhrvgxFXbI",
          ShimmerBody: "_1ugrCy0x7fRJ7TyoURzzTa",
          ShimmerHeader: "_1Tp3oOeqWARWDsQDI3owRD",
          loading: "_3CI8AFu67GMoINumH6Yvax",
          BottomBar: "_2FMNpalUV1wDdi-cywGIMN",
          NewIndicator: "-B93GaGXJf0lPTNh66m4i",
          ShortTemplate: "fntOoeLPSTpmyXGGmgf99",
          TwoLine: "P1FhGdWv2NCXZXWsaKqqY",
          FullWidth: "_6EcDVXFHtdirTkETQjKOK",
          BackgroundAnimation: "_3w9sEc9GApj44Kg099SX99",
          "ItemFocusAnim-darkerGrey-nocolor": "_3zMKq0Ov9QZXkvzuZaEgKn",
          "ItemFocusAnim-darkGreySettings": "qadlYXxqgL7iZI-3WagQW",
          "ItemFocusAnim-darkGrey": "_1bS3_eEfJQL1uvh9ueXwHc",
          "ItemFocusAnim-grey": "K14jHOeux9t-cKLHsLZ_R",
          "ItemFocusAnim-translucent-white-10": "_14krbCetggqySSjN1tprjy",
          "ItemFocusAnim-translucent-white-20": "_3aWvV_8F4oUsZSPZ67nkhH",
          "ItemFocusAnimBorder-darkGrey": "_3o2RzV2UyrY6P95PvLN1XB",
          "ItemFocusAnim-green": "_3UOE3rRpe9MNf7xTX3P_FD",
          focusAnimation: "_3CquyV6pQpz_ZeEYyhu-6r",
          hoverAnimation: "X3tjvkOeBNndhakzDz7bk",
        };
      },
      3761: (Vs) => {
        Vs.exports = {
          "duration-app-launch": "800ms",
          loadinganimationiterationcount: "20",
          loadinganimationduration: "1s",
          StandardTemplateContainer: "_30fVm4Rsel-4nUKEiPJgz9",
          "ItemFocusAnim-darkerGrey": "_3z4hV832fi8W9gRRPhmC1V",
          Timestamp: "_7XKFnSNjW_tHfyxaezoD3",
          StandardTemplate: "_2h6KD6p6y4vIgO2Toxx-_K",
          PinnedTemplate: "_3oKFhPrh1lbp-WtA72Q2Yi",
          StandardLogoDimensions: "_1VRx9qVxigUC4qeM0NWNMR",
          Content: "_1SQjN025UZ0z_8AkWHCsGd",
          Header: "_3u0Sb5gUTscs0TQlKpA7WZ",
          Icon: "_2auM-VHPU-KKomAWyuWrSV",
          Title: "_2MGSmn9lIFnmLVIX49POSx",
          StandardNotificationDescription: "_26v9mHAi56x63OwY-jxett",
          StandardNotificationSubText: "_3hEeummFKRey8l5VXxZwxz",
          Multiline: "_21DVSDVmPUgGXuTkI2HqbO",
          Count: "CRYjulQaQOjokS7b_8cOH",
          PinnedBody: "h-lNlCUnCRbIcn38-Oqaw",
          AllNotificationsTemplate: "QFW0BtI4l77AFmv1xLAkx",
          StandardTemplateDesktop: "_3B8wRA4H7e_oSksYNqpSPv",
          DesktopToastTemplate: "_2NdiftmP-B3C4LPWnNGTCB",
          PinnedTemplateWeb: "_25gii5r23MmAqXvLZj24tK",
          PinnedTemplateDesktop: "_3k90ug209sE23xAMqcM74s",
          AppLogo: "_3p74fAyjLzNltNbJUf55kk",
          AppLogoBackgroundImage: "_2qpzt_PffGJwN3Vm2bkKQI",
          MarkedRead: "FMwg5OFGT6NP3h3EW89IP",
          markReadBackground: "_3eZECZ7BxfGeq4yfoKHDal",
          Unread: "_1B1XTNsfuwOaDPAkkr8M42",
          PlayerNickName: "_1YqYJ2yaHfODWbIB0abgzQ",
          FullName: "fozLrCNjCbPGiVKYi2L_M",
          IngameTitle: "rN6p14MiFEoCZvdjnfpgQ",
          OnlineTitle: "_35uWYHT2zJoSv9PE_euqxo",
          GroupMessageTitle: "_33qpBDHTkkQ4TCFB4gPGk_",
          GroupMessageUserName: "_3m94SADycX0JIk8urdZQ2X",
          GroupMessageBody: "_1XTFkmspXcukxWSFz5Fn61",
          GroupMessageIcon: "brsvX3XkZwkemQ_HM3JOP",
          Body: "_3JT9UI68R_-oZc63_NRIcA",
          FriendInGameAppColor: "_10165iFPxrqzt0kfV00tbu",
          WishlistBlurImage: "_3QLXE6SzCKiwEgK5iORZPA",
          AvatarStatus: "_1iutOH026zK2dbpsMFDmMm",
          IncomingCallToast: "j2oDsM6xV2rFx-UrisfYh",
          ShortLogoDimensions: "BNKAIWal-7E00ymauRaHg",
          LoadingTemplate: "Lakql1yamweHbP1OPuahF",
          Hide: "WnLkF0HwOQr2BIjlAlrjF",
          ShimmerLogo: "_2macs5lWMPN5NfDpGE3Iyh",
          ShimmerBody: "_3Ivl8dbxH6D6LwaSLTNTLe",
          ShimmerHeader: "_2a2loheX4ZKGZCGNEdAT3h",
          loading: "_2PdZZCNo176UV7FcPPdqTt",
          BottomBar: "_3yiWpBXwEmDLlaIupVXjUt",
          NewIndicator: "_1pIhbqWsrCVPaGGYc6fT-H",
          BackgroundAnimation: "_2THWJm_DP4_8_21tEsXSSj",
          "ItemFocusAnim-darkerGrey-nocolor": "_3TDFCqwgSFsXL90HH5PmyQ",
          "ItemFocusAnim-darkGreySettings": "_2V49icFFKCzM2imCbWVQKz",
          "ItemFocusAnim-darkGrey": "_22M7t0tCHSgmIcx2rwkyDn",
          "ItemFocusAnim-grey": "lhtmiPnDLy_PH3nWN5N8F",
          "ItemFocusAnim-translucent-white-10": "xPu5sAUAb9KZcZojHZeok",
          "ItemFocusAnim-translucent-white-20": "_35HEPLHufn9k-5gTKvZYrO",
          "ItemFocusAnimBorder-darkGrey": "TQ99CK6pDp4hhQZWjAgGz",
          "ItemFocusAnim-green": "Rxe4URLYwNKRWJ2UaiQq2",
          focusAnimation: "_1vcir9Vcuml6I0DWyCei3i",
          hoverAnimation: "_3dGxvxYZPEwyYDQfin8FOd",
        };
      },
      2012: (Vs) => {
        Vs.exports = {
          "duration-app-launch": "800ms",
          loadinganimationiterationcount: "20",
          loadinganimationduration: "1s",
          StandardTemplateContainer: "_1lqXpJpRlYvyM2fBx6beHd",
          "ItemFocusAnim-darkerGrey": "_3WRewosNPP9V6g7O3hWH5k",
          Timestamp: "w1Bf_xO8scHETzsfr2HtM",
          StandardTemplate: "_1k275cE1gk-jpZE5r-37zl",
          PinnedTemplate: "_4egmnB1wTrDll5Mc_eal8",
          StandardLogoDimensions: "_3n8vALReUk851YHiEiWEfQ",
          Content: "_3c_vhR2WnZLHuyVP2m4UO2",
          Header: "_1186NyOXeTBoB-vvWlJq1I",
          Icon: "_1piyUE09t3QXktcD3FrCwJ",
          Title: "_2x6qMHeQndH78e6sL2XHk_",
          StandardNotificationDescription: "Wh50moO-nKvfE3l4Buav",
          StandardNotificationSubText: "_2T5BxMT87QHfYWXDHFzpT1",
          Multiline: "_2fLmG6Oxk7tiZGLfH8dwXG",
          Count: "sdjVIgKSOKqyi7O2VDy70",
          PinnedBody: "_3OCMnBpXVpdYv5isBLVdJK",
          AllNotificationsTemplate: "d9RJTj9G8qU-U9-he2cQx",
          StandardTemplateDesktop: "_2uW9K6fqc6jZX1XBjnLjw",
          DesktopToastTemplate: "QbSr4hMpMfp0Qtsg4qOh5",
          PinnedTemplateWeb: "_3BvcYKoq-n7GgNwbfFgRAc",
          PinnedTemplateDesktop: "alS2LW_qAwNkYk_GPUC_3",
          AppLogo: "CA_EGBMvnnGy5ib6McPk1",
          AppLogoBackgroundImage: "_1WuzAPck-kGxa4mMIJvAzm",
          MarkedRead: "Wu9rtfDDzG6xfABpqX6oN",
          markReadBackground: "ULHzVL1tuahqUcVisVW-P",
          Unread: "_2kLHZTRgRl0POZfXPcfxks",
          PlayerNickName: "_2YpLUGZ7uC8ZZn67r0WFW_",
          FullName: "_31kBipdYxJf7OOfdvXt0_h",
          IngameTitle: "uoMiFtc9c1Qj-4N-yFmVY",
          OnlineTitle: "_1HmXUbyHRzGqMtpIXrI9-T",
          GroupMessageTitle: "_2sd1s2w2m26_3gQi1EUTR_",
          GroupMessageUserName: "gAoOCl1gHHigL5slBv_yA",
          GroupMessageBody: "_8o4Xz7dGPPQqf36w2HN--",
          GroupMessageIcon: "_15V41jl8st_uQsDMGCqnBx",
          Body: "_1bPTPIVs6QoX2gWvrhM6J-",
          FriendInGameAppColor: "_3xh1N-yvA3u7rLrq-DYZ1U",
          WishlistBlurImage: "_1GTWEgiW95vRIhUWfk6omo",
          AvatarStatus: "_2wKwJWdgy12ZO1tSjI9lXY",
          IncomingCallToast: "YukY0Anz5NHyFELGf9mPn",
          ShortLogoDimensions: "_1DaCc7OUCLHfc6VrQ3OIne",
          LoadingTemplate: "_5iNL0HazAvED5sWE9InJy",
          Hide: "_40XuJsiNG2Ls-sTWqrXG8",
          ShimmerLogo: "_1vzYeDqT7Eiy-LKfLm42sI",
          ShimmerBody: "_12dqPPvVDehwCa8i2oM-eA",
          ShimmerHeader: "_2ZzsgKvsaWmnKQRz0W83GA",
          loading: "_2qr7PO4jvslSCsJbTRFpwd",
          BottomBar: "IUPLZJhHdBex9tQTgC6Ug",
          NewIndicator: "_38yM72K6RxKmOhKZtInP2x",
          AllNotificationsCommentPlus: "WbA7y77Ujam9JOnYuGsMj",
          FriendIndicator: "_2Hphxk564S5yQHog-MFXfN",
          HideButton: "_3M-7E5Nj8iNX_jL5pAQDy_",
          SteamNotificationWrapper: "UmtNgXD92RoDeYjxKEskk",
          BackgroundAnimation: "CHduhRYQLY29chQ5oLbsR",
          "ItemFocusAnim-darkerGrey-nocolor": "_3bOlzQnTJZnV9rTU3NSxJh",
          "ItemFocusAnim-darkGreySettings": "_1bdnqXVo31tiUrXoxNB3wW",
          "ItemFocusAnim-darkGrey": "uOdBxiMFNvmWe8MWKL2vT",
          "ItemFocusAnim-grey": "_9s1knb2MNj9uD9M1SCh2u",
          "ItemFocusAnim-translucent-white-10": "_1YVG7HtpgQ26Yx-8ZWKCBi",
          "ItemFocusAnim-translucent-white-20": "_3AcQtXPws6yWb9XuDRcDvV",
          "ItemFocusAnimBorder-darkGrey": "_2pMCkkW6W_xYaepnqR1QDg",
          "ItemFocusAnim-green": "_8sFcRF04vIhk1ou7_oMSI",
          focusAnimation: "_1etMKTqAtC0g5-7msByztO",
          hoverAnimation: "_3iNzRmuVGoWKgoa3u41Fdz",
        };
      },
      7910: (Vs) => {
        Vs.exports = { WebPinnedNotification: "_34nLZDNirxRHssbsjB_dJf" };
      },
    },
  ]);
})();
