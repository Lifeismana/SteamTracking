/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [7634],
    {
      25236: (xt, $t, F) => {
        "use strict";
        F.d($t, { GO: () => R, cf: () => j });
        const s = null,
          q = 0,
          R = 1,
          j = 2;
      },
      68495: (xt, $t, F) => {
        "use strict";
        F.d($t, { Bv: () => Zt, Dq: () => At, Yd: () => Jt });
        const s = 0,
          q = 1,
          R = 2,
          j = 3,
          m = 4,
          At = 5,
          Tt = 6,
          Zt = 7,
          D = 8,
          S = 9,
          Jt = 10,
          Bi = 11,
          bi = 12,
          qt = 13,
          gt = 14,
          Si = 15,
          Q = 16,
          d = 17,
          o = 18,
          i = 19,
          Pt = 20,
          It = 21;
      },
      48453: (xt, $t, F) => {
        "use strict";
        F.d($t, {
          GG: () => Nt,
          b$: () => Vi,
          V4: () => Qi,
          nH: () => Ki,
          rB: () => q,
          Vv: () => s,
          p$: () => ki,
          Fn: () => ti,
        });
        var s = {};
        F.r(s),
          F.d(s, {
            Y9: () => o,
            bh: () => cr,
            v_: () => S,
            Rj: () => bt,
            Cz: () => wi,
            HN: () => sr,
            pZ: () => Bi,
            e9: () => Q,
            K: () => D,
            wY: () => d,
            Jo: () => Tt,
            hW: () => Jt,
            wp: () => bi,
            oe: () => Pt,
            Sx: () => It,
            uH: () => P,
            j3: () => Li,
            JN: () => Ei,
            FK: () => ur,
            Ol: () => qt,
            Iz: () => Wt,
            YE: () => or,
            js: () => lr,
            yh: () => Zt,
            an: () => Si,
            mr: () => mr,
            XJ: () => gt,
          });
        var q = {};
        F.r(q), F.d(q, { D: () => Ut });
        var R = F(80613),
          j = F.n(R),
          m = F(75245),
          At = F(35038);
        const Tt = 0,
          Zt = 1,
          D = 2,
          S = 3,
          Jt = 4,
          Bi = 5,
          bi = 6,
          qt = 7,
          gt = 8,
          Si = 9,
          Q = 10,
          d = 11,
          o = 12,
          i = 13,
          Pt = 14,
          It = 15,
          bt = 16,
          wi = 17,
          Li = 18,
          sr = 19,
          P = 20,
          Ei = 21,
          or = 22,
          lr = 23,
          cr = 24,
          Lt = 25,
          hr = 26,
          Et = 27,
          ur = 28,
          mr = 29,
          Wt = 30,
          Ut = 0,
          Rr = 1;
        var dr = Object.defineProperty,
          Fr = (K, a, B) =>
            a in K
              ? dr(K, a, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: B,
                })
              : (K[a] = B),
          ie = (K, a, B) => Fr(K, typeof a != "symbol" ? a + "" : a, B);
        function ki(K) {
          return "unknown ESteamNotificationType ( " + K + " )";
        }
        function Di(K) {
          return "unknown ESteamNotificationTarget ( " + K + " )";
        }
        function fr(K) {
          return "unknown ESteamNotificationTargetClientType ( " + K + " )";
        }
        const Ft = class ae extends R.Message {
          static ImplementsStaticInterface() {}
          constructor(a = null) {
            super(),
              ae.prototype.notification_id || m.Sg(ae.M()),
              R.Message.initialize(this, a, 0, -1, void 0, null);
          }
          static M() {
            return (
              ae.sm_m ||
                (ae.sm_m = {
                  proto: ae,
                  fields: {
                    notification_id: {
                      n: 1,
                      br: m.qM.readUint64String,
                      bw: m.gp.writeUint64String,
                    },
                    notification_targets: {
                      n: 2,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                    notification_type: {
                      n: 3,
                      br: m.qM.readEnum,
                      bw: m.gp.writeEnum,
                    },
                    body_data: {
                      n: 4,
                      br: m.qM.readString,
                      bw: m.gp.writeString,
                    },
                    read: { n: 7, br: m.qM.readBool, bw: m.gp.writeBool },
                    timestamp: {
                      n: 8,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                    hidden: { n: 9, br: m.qM.readBool, bw: m.gp.writeBool },
                    expiry: {
                      n: 10,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                    viewed: {
                      n: 11,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                  },
                }),
              ae.sm_m
            );
          }
          static MBF() {
            return ae.sm_mbf || (ae.sm_mbf = m.w0(ae.M())), ae.sm_mbf;
          }
          toObject(a = !1) {
            return ae.toObject(a, this);
          }
          static toObject(a, B) {
            return m.BT(ae.M(), a, B);
          }
          static fromObject(a) {
            return m.Uq(ae.M(), a);
          }
          static deserializeBinary(a) {
            let B = new (j().BinaryReader)(a),
              V = new ae();
            return ae.deserializeBinaryFromReader(V, B);
          }
          static deserializeBinaryFromReader(a, B) {
            return m.zj(ae.MBF(), a, B);
          }
          serializeBinary() {
            var a = new (j().BinaryWriter)();
            return ae.serializeBinaryToWriter(this, a), a.getResultBuffer();
          }
          static serializeBinaryToWriter(a, B) {
            m.i0(ae.M(), a, B);
          }
          serializeBase64String() {
            var a = new (j().BinaryWriter)();
            return (
              ae.serializeBinaryToWriter(this, a), a.getResultBase64String()
            );
          }
          getClassName() {
            return "SteamNotificationData";
          }
        };
        ie(Ft, "sm_m"), ie(Ft, "sm_mbf");
        let Hi = Ft;
        const qi = class se extends R.Message {
          static ImplementsStaticInterface() {}
          constructor(a = null) {
            super(),
              se.prototype.include_hidden || m.Sg(se.M()),
              R.Message.initialize(this, a, 0, -1, void 0, null);
          }
          static M() {
            return (
              se.sm_m ||
                (se.sm_m = {
                  proto: se,
                  fields: {
                    include_hidden: {
                      n: 1,
                      d: !1,
                      br: m.qM.readBool,
                      bw: m.gp.writeBool,
                    },
                    language: {
                      n: 2,
                      d: 0,
                      br: m.qM.readInt32,
                      bw: m.gp.writeInt32,
                    },
                    include_confirmation_count: {
                      n: 3,
                      d: !0,
                      br: m.qM.readBool,
                      bw: m.gp.writeBool,
                    },
                    include_pinned_counts: {
                      n: 4,
                      d: !1,
                      br: m.qM.readBool,
                      bw: m.gp.writeBool,
                    },
                    include_read: {
                      n: 5,
                      d: !0,
                      br: m.qM.readBool,
                      bw: m.gp.writeBool,
                    },
                    count_only: {
                      n: 6,
                      d: !1,
                      br: m.qM.readBool,
                      bw: m.gp.writeBool,
                    },
                  },
                }),
              se.sm_m
            );
          }
          static MBF() {
            return se.sm_mbf || (se.sm_mbf = m.w0(se.M())), se.sm_mbf;
          }
          toObject(a = !1) {
            return se.toObject(a, this);
          }
          static toObject(a, B) {
            return m.BT(se.M(), a, B);
          }
          static fromObject(a) {
            return m.Uq(se.M(), a);
          }
          static deserializeBinary(a) {
            let B = new (j().BinaryReader)(a),
              V = new se();
            return se.deserializeBinaryFromReader(V, B);
          }
          static deserializeBinaryFromReader(a, B) {
            return m.zj(se.MBF(), a, B);
          }
          serializeBinary() {
            var a = new (j().BinaryWriter)();
            return se.serializeBinaryToWriter(this, a), a.getResultBuffer();
          }
          static serializeBinaryToWriter(a, B) {
            m.i0(se.M(), a, B);
          }
          serializeBase64String() {
            var a = new (j().BinaryWriter)();
            return (
              se.serializeBinaryToWriter(this, a), a.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamNotification_GetSteamNotifications_Request";
          }
        };
        ie(qi, "sm_m"), ie(qi, "sm_mbf");
        let Nt = qi;
        const _t = class oe extends R.Message {
          static ImplementsStaticInterface() {}
          constructor(a = null) {
            super(),
              oe.prototype.notifications || m.Sg(oe.M()),
              R.Message.initialize(this, a, 0, -1, [1], null);
          }
          static M() {
            return (
              oe.sm_m ||
                (oe.sm_m = {
                  proto: oe,
                  fields: {
                    notifications: { n: 1, c: Hi, r: !0, q: !0 },
                    confirmation_count: {
                      n: 2,
                      br: m.qM.readInt32,
                      bw: m.gp.writeInt32,
                    },
                    pending_gift_count: {
                      n: 3,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                    pending_friend_count: {
                      n: 5,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                    unread_count: {
                      n: 6,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                    pending_family_invite_count: {
                      n: 7,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                  },
                }),
              oe.sm_m
            );
          }
          static MBF() {
            return oe.sm_mbf || (oe.sm_mbf = m.w0(oe.M())), oe.sm_mbf;
          }
          toObject(a = !1) {
            return oe.toObject(a, this);
          }
          static toObject(a, B) {
            return m.BT(oe.M(), a, B);
          }
          static fromObject(a) {
            return m.Uq(oe.M(), a);
          }
          static deserializeBinary(a) {
            let B = new (j().BinaryReader)(a),
              V = new oe();
            return oe.deserializeBinaryFromReader(V, B);
          }
          static deserializeBinaryFromReader(a, B) {
            return m.zj(oe.MBF(), a, B);
          }
          serializeBinary() {
            var a = new (j().BinaryWriter)();
            return oe.serializeBinaryToWriter(this, a), a.getResultBuffer();
          }
          static serializeBinaryToWriter(a, B) {
            m.i0(oe.M(), a, B);
          }
          serializeBase64String() {
            var a = new (j().BinaryWriter)();
            return (
              oe.serializeBinaryToWriter(this, a), a.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamNotification_GetSteamNotifications_Response";
          }
        };
        ie(_t, "sm_m"), ie(_t, "sm_mbf");
        let yr = _t;
        const ne = class le extends R.Message {
          static ImplementsStaticInterface() {}
          constructor(a = null) {
            super(),
              le.prototype.timestamp || m.Sg(le.M()),
              R.Message.initialize(this, a, 0, -1, [3], null);
          }
          static M() {
            return (
              le.sm_m ||
                (le.sm_m = {
                  proto: le,
                  fields: {
                    timestamp: {
                      n: 1,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                    notification_type: {
                      n: 2,
                      br: m.qM.readEnum,
                      bw: m.gp.writeEnum,
                    },
                    notification_ids: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: m.qM.readUint64String,
                      pbr: m.qM.readPackedUint64String,
                      bw: m.gp.writeRepeatedUint64String,
                    },
                    mark_all_read: {
                      n: 4,
                      br: m.qM.readBool,
                      bw: m.gp.writeBool,
                    },
                  },
                }),
              le.sm_m
            );
          }
          static MBF() {
            return le.sm_mbf || (le.sm_mbf = m.w0(le.M())), le.sm_mbf;
          }
          toObject(a = !1) {
            return le.toObject(a, this);
          }
          static toObject(a, B) {
            return m.BT(le.M(), a, B);
          }
          static fromObject(a) {
            return m.Uq(le.M(), a);
          }
          static deserializeBinary(a) {
            let B = new (j().BinaryReader)(a),
              V = new le();
            return le.deserializeBinaryFromReader(V, B);
          }
          static deserializeBinaryFromReader(a, B) {
            return m.zj(le.MBF(), a, B);
          }
          serializeBinary() {
            var a = new (j().BinaryWriter)();
            return le.serializeBinaryToWriter(this, a), a.getResultBuffer();
          }
          static serializeBinaryToWriter(a, B) {
            m.i0(le.M(), a, B);
          }
          serializeBase64String() {
            var a = new (j().BinaryWriter)();
            return (
              le.serializeBinaryToWriter(this, a), a.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamNotification_MarkNotificationsRead_Notification";
          }
        };
        ie(ne, "sm_m"), ie(ne, "sm_mbf");
        let Qi = ne;
        const zt = class ce extends R.Message {
          static ImplementsStaticInterface() {}
          constructor(a = null) {
            super(),
              ce.prototype.remote_client_id || m.Sg(ce.M()),
              R.Message.initialize(this, a, 0, -1, void 0, null);
          }
          static M() {
            return (
              ce.sm_m ||
                (ce.sm_m = {
                  proto: ce,
                  fields: {
                    remote_client_id: {
                      n: 1,
                      br: m.qM.readUint64String,
                      bw: m.gp.writeUint64String,
                    },
                    target_client_type: {
                      n: 2,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                  },
                }),
              ce.sm_m
            );
          }
          static MBF() {
            return ce.sm_mbf || (ce.sm_mbf = m.w0(ce.M())), ce.sm_mbf;
          }
          toObject(a = !1) {
            return ce.toObject(a, this);
          }
          static toObject(a, B) {
            return m.BT(ce.M(), a, B);
          }
          static fromObject(a) {
            return m.Uq(ce.M(), a);
          }
          static deserializeBinary(a) {
            let B = new (j().BinaryReader)(a),
              V = new ce();
            return ce.deserializeBinaryFromReader(V, B);
          }
          static deserializeBinaryFromReader(a, B) {
            return m.zj(ce.MBF(), a, B);
          }
          serializeBinary() {
            var a = new (j().BinaryWriter)();
            return ce.serializeBinaryToWriter(this, a), a.getResultBuffer();
          }
          static serializeBinaryToWriter(a, B) {
            m.i0(ce.M(), a, B);
          }
          serializeBase64String() {
            var a = new (j().BinaryWriter)();
            return (
              ce.serializeBinaryToWriter(this, a), a.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamNotification_MarkNotificationsViewed_Notification";
          }
        };
        ie(zt, "sm_m"), ie(zt, "sm_mbf");
        let Ki = zt;
        const Ii = class ue extends R.Message {
          static ImplementsStaticInterface() {}
          constructor(a = null) {
            super(),
              ue.prototype.notification_type || m.Sg(ue.M()),
              R.Message.initialize(this, a, 0, -1, void 0, null);
          }
          static M() {
            return (
              ue.sm_m ||
                (ue.sm_m = {
                  proto: ue,
                  fields: {
                    notification_type: {
                      n: 1,
                      br: m.qM.readEnum,
                      bw: m.gp.writeEnum,
                    },
                    notification_targets: {
                      n: 2,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                  },
                }),
              ue.sm_m
            );
          }
          static MBF() {
            return ue.sm_mbf || (ue.sm_mbf = m.w0(ue.M())), ue.sm_mbf;
          }
          toObject(a = !1) {
            return ue.toObject(a, this);
          }
          static toObject(a, B) {
            return m.BT(ue.M(), a, B);
          }
          static fromObject(a) {
            return m.Uq(ue.M(), a);
          }
          static deserializeBinary(a) {
            let B = new (j().BinaryReader)(a),
              V = new ue();
            return ue.deserializeBinaryFromReader(V, B);
          }
          static deserializeBinaryFromReader(a, B) {
            return m.zj(ue.MBF(), a, B);
          }
          serializeBinary() {
            var a = new (j().BinaryWriter)();
            return ue.serializeBinaryToWriter(this, a), a.getResultBuffer();
          }
          static serializeBinaryToWriter(a, B) {
            m.i0(ue.M(), a, B);
          }
          serializeBase64String() {
            var a = new (j().BinaryWriter)();
            return (
              ue.serializeBinaryToWriter(this, a), a.getResultBase64String()
            );
          }
          getClassName() {
            return "SteamNotificationPreference";
          }
        };
        ie(Ii, "sm_m"), ie(Ii, "sm_mbf");
        let Mi = Ii;
        const vi = class me extends R.Message {
          static ImplementsStaticInterface() {}
          constructor(a = null) {
            super(),
              me.prototype.preferences || m.Sg(me.M()),
              R.Message.initialize(this, a, 0, -1, [1], null);
          }
          static M() {
            return (
              me.sm_m ||
                (me.sm_m = {
                  proto: me,
                  fields: { preferences: { n: 1, c: Mi, r: !0, q: !0 } },
                }),
              me.sm_m
            );
          }
          static MBF() {
            return me.sm_mbf || (me.sm_mbf = m.w0(me.M())), me.sm_mbf;
          }
          toObject(a = !1) {
            return me.toObject(a, this);
          }
          static toObject(a, B) {
            return m.BT(me.M(), a, B);
          }
          static fromObject(a) {
            return m.Uq(me.M(), a);
          }
          static deserializeBinary(a) {
            let B = new (j().BinaryReader)(a),
              V = new me();
            return me.deserializeBinaryFromReader(V, B);
          }
          static deserializeBinaryFromReader(a, B) {
            return m.zj(me.MBF(), a, B);
          }
          serializeBinary() {
            var a = new (j().BinaryWriter)();
            return me.serializeBinaryToWriter(this, a), a.getResultBuffer();
          }
          static serializeBinaryToWriter(a, B) {
            m.i0(me.M(), a, B);
          }
          serializeBase64String() {
            var a = new (j().BinaryWriter)();
            return (
              me.serializeBinaryToWriter(this, a), a.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamNotification_SetPreferences_Request";
          }
        };
        ie(vi, "sm_m"), ie(vi, "sm_mbf");
        let g = vi;
        class kt extends R.Message {
          static ImplementsStaticInterface() {}
          constructor(a = null) {
            super(), R.Message.initialize(this, a, 0, -1, void 0, null);
          }
          toObject(a = !1) {
            return kt.toObject(a, this);
          }
          static toObject(a, B) {
            return a ? { $jspbMessageInstance: B } : {};
          }
          static fromObject(a) {
            return new kt();
          }
          static deserializeBinary(a) {
            let B = new (j().BinaryReader)(a),
              V = new kt();
            return kt.deserializeBinaryFromReader(V, B);
          }
          static deserializeBinaryFromReader(a, B) {
            return a;
          }
          serializeBinary() {
            var a = new (j().BinaryWriter)();
            return kt.serializeBinaryToWriter(this, a), a.getResultBuffer();
          }
          static serializeBinaryToWriter(a, B) {}
          serializeBase64String() {
            var a = new (j().BinaryWriter)();
            return (
              kt.serializeBinaryToWriter(this, a), a.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamNotification_SetPreferences_Response";
          }
        }
        class Dt extends R.Message {
          static ImplementsStaticInterface() {}
          constructor(a = null) {
            super(), R.Message.initialize(this, a, 0, -1, void 0, null);
          }
          toObject(a = !1) {
            return Dt.toObject(a, this);
          }
          static toObject(a, B) {
            return a ? { $jspbMessageInstance: B } : {};
          }
          static fromObject(a) {
            return new Dt();
          }
          static deserializeBinary(a) {
            let B = new (j().BinaryReader)(a),
              V = new Dt();
            return Dt.deserializeBinaryFromReader(V, B);
          }
          static deserializeBinaryFromReader(a, B) {
            return a;
          }
          serializeBinary() {
            var a = new (j().BinaryWriter)();
            return Dt.serializeBinaryToWriter(this, a), a.getResultBuffer();
          }
          static serializeBinaryToWriter(a, B) {}
          serializeBase64String() {
            var a = new (j().BinaryWriter)();
            return (
              Dt.serializeBinaryToWriter(this, a), a.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamNotification_GetPreferences_Request";
          }
        }
        const Wi = class de extends R.Message {
          static ImplementsStaticInterface() {}
          constructor(a = null) {
            super(),
              de.prototype.preferences || m.Sg(de.M()),
              R.Message.initialize(this, a, 0, -1, [1], null);
          }
          static M() {
            return (
              de.sm_m ||
                (de.sm_m = {
                  proto: de,
                  fields: { preferences: { n: 1, c: Mi, r: !0, q: !0 } },
                }),
              de.sm_m
            );
          }
          static MBF() {
            return de.sm_mbf || (de.sm_mbf = m.w0(de.M())), de.sm_mbf;
          }
          toObject(a = !1) {
            return de.toObject(a, this);
          }
          static toObject(a, B) {
            return m.BT(de.M(), a, B);
          }
          static fromObject(a) {
            return m.Uq(de.M(), a);
          }
          static deserializeBinary(a) {
            let B = new (j().BinaryReader)(a),
              V = new de();
            return de.deserializeBinaryFromReader(V, B);
          }
          static deserializeBinaryFromReader(a, B) {
            return m.zj(de.MBF(), a, B);
          }
          serializeBinary() {
            var a = new (j().BinaryWriter)();
            return de.serializeBinaryToWriter(this, a), a.getResultBuffer();
          }
          static serializeBinaryToWriter(a, B) {
            m.i0(de.M(), a, B);
          }
          serializeBase64String() {
            var a = new (j().BinaryWriter)();
            return (
              de.serializeBinaryToWriter(this, a), a.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamNotification_GetPreferences_Response";
          }
        };
        ie(Wi, "sm_m"), ie(Wi, "sm_mbf");
        let pr = Wi;
        const hi = class fe extends R.Message {
          static ImplementsStaticInterface() {}
          constructor(a = null) {
            super(),
              fe.prototype.notification_ids || m.Sg(fe.M()),
              R.Message.initialize(this, a, 0, -1, [1], null);
          }
          static M() {
            return (
              fe.sm_m ||
                (fe.sm_m = {
                  proto: fe,
                  fields: {
                    notification_ids: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: m.qM.readUint64String,
                      pbr: m.qM.readPackedUint64String,
                      bw: m.gp.writeRepeatedUint64String,
                    },
                  },
                }),
              fe.sm_m
            );
          }
          static MBF() {
            return fe.sm_mbf || (fe.sm_mbf = m.w0(fe.M())), fe.sm_mbf;
          }
          toObject(a = !1) {
            return fe.toObject(a, this);
          }
          static toObject(a, B) {
            return m.BT(fe.M(), a, B);
          }
          static fromObject(a) {
            return m.Uq(fe.M(), a);
          }
          static deserializeBinary(a) {
            let B = new (j().BinaryReader)(a),
              V = new fe();
            return fe.deserializeBinaryFromReader(V, B);
          }
          static deserializeBinaryFromReader(a, B) {
            return m.zj(fe.MBF(), a, B);
          }
          serializeBinary() {
            var a = new (j().BinaryWriter)();
            return fe.serializeBinaryToWriter(this, a), a.getResultBuffer();
          }
          static serializeBinaryToWriter(a, B) {
            m.i0(fe.M(), a, B);
          }
          serializeBase64String() {
            var a = new (j().BinaryWriter)();
            return (
              fe.serializeBinaryToWriter(this, a), a.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamNotification_HideNotification_Notification";
          }
        };
        ie(hi, "sm_m"), ie(hi, "sm_mbf");
        let Vi = hi;
        const ei = class ye extends R.Message {
          static ImplementsStaticInterface() {}
          constructor(a = null) {
            super(),
              ye.prototype.notifications || m.Sg(ye.M()),
              R.Message.initialize(this, a, 0, -1, [1], null);
          }
          static M() {
            return (
              ye.sm_m ||
                (ye.sm_m = {
                  proto: ye,
                  fields: {
                    notifications: { n: 1, c: Hi, r: !0, q: !0 },
                    pending_gift_count: {
                      n: 2,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                    pending_friend_count: {
                      n: 3,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                    pending_family_invite_count: {
                      n: 4,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                  },
                }),
              ye.sm_m
            );
          }
          static MBF() {
            return ye.sm_mbf || (ye.sm_mbf = m.w0(ye.M())), ye.sm_mbf;
          }
          toObject(a = !1) {
            return ye.toObject(a, this);
          }
          static toObject(a, B) {
            return m.BT(ye.M(), a, B);
          }
          static fromObject(a) {
            return m.Uq(ye.M(), a);
          }
          static deserializeBinary(a) {
            let B = new (j().BinaryReader)(a),
              V = new ye();
            return ye.deserializeBinaryFromReader(V, B);
          }
          static deserializeBinaryFromReader(a, B) {
            return m.zj(ye.MBF(), a, B);
          }
          serializeBinary() {
            var a = new (j().BinaryWriter)();
            return ye.serializeBinaryToWriter(this, a), a.getResultBuffer();
          }
          static serializeBinaryToWriter(a, B) {
            m.i0(ye.M(), a, B);
          }
          serializeBase64String() {
            var a = new (j().BinaryWriter)();
            return (
              ye.serializeBinaryToWriter(this, a), a.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamNotification_NotificationsReceived_Notification";
          }
        };
        ie(ei, "sm_m"), ie(ei, "sm_mbf");
        let Ri = ei;
        const St = class pe extends R.Message {
          static ImplementsStaticInterface() {}
          constructor(a = null) {
            super(),
              pe.prototype.preferences || m.Sg(pe.M()),
              R.Message.initialize(this, a, 0, -1, [1], null);
          }
          static M() {
            return (
              pe.sm_m ||
                (pe.sm_m = {
                  proto: pe,
                  fields: { preferences: { n: 1, c: Mi, r: !0, q: !0 } },
                }),
              pe.sm_m
            );
          }
          static MBF() {
            return pe.sm_mbf || (pe.sm_mbf = m.w0(pe.M())), pe.sm_mbf;
          }
          toObject(a = !1) {
            return pe.toObject(a, this);
          }
          static toObject(a, B) {
            return m.BT(pe.M(), a, B);
          }
          static fromObject(a) {
            return m.Uq(pe.M(), a);
          }
          static deserializeBinary(a) {
            let B = new (j().BinaryReader)(a),
              V = new pe();
            return pe.deserializeBinaryFromReader(V, B);
          }
          static deserializeBinaryFromReader(a, B) {
            return m.zj(pe.MBF(), a, B);
          }
          serializeBinary() {
            var a = new (j().BinaryWriter)();
            return pe.serializeBinaryToWriter(this, a), a.getResultBuffer();
          }
          static serializeBinaryToWriter(a, B) {
            m.i0(pe.M(), a, B);
          }
          serializeBase64String() {
            var a = new (j().BinaryWriter)();
            return (
              pe.serializeBinaryToWriter(this, a), a.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamNotification_PreferencesUpdated_Notification";
          }
        };
        ie(St, "sm_m"), ie(St, "sm_mbf");
        let Gt = St;
        var ti;
        ((K) => {
          function a(Rt, Mt, ii) {
            return Rt.SendMsg(
              "SteamNotification.GetSteamNotifications#1",
              (0, At.I8)(Nt, Mt, ii),
              yr,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          K.GetSteamNotifications = a;
          function B(Rt, Mt) {
            return Rt.SendNotification(
              "SteamNotification.MarkNotificationsRead#1",
              (0, At.I8)(Qi, Mt),
              { ePrivilege: 1 },
            );
          }
          K.MarkNotificationsRead = B;
          function V(Rt, Mt) {
            return Rt.SendNotification(
              "SteamNotification.MarkNotificationsViewed#1",
              (0, At.I8)(Ki, Mt),
              { ePrivilege: 1 },
            );
          }
          K.MarkNotificationsViewed = V;
          function yi(Rt, Mt) {
            return Rt.SendNotification(
              "SteamNotification.HideNotification#1",
              (0, At.I8)(Vi, Mt),
              { ePrivilege: 1 },
            );
          }
          K.HideNotification = yi;
          function Yi(Rt, Mt, ii) {
            return Rt.SendMsg(
              "SteamNotification.SetPreferences#1",
              (0, At.I8)(g, Mt, ii),
              kt,
              { ePrivilege: 1 },
            );
          }
          K.SetPreferences = Yi;
          function _i(Rt, Mt, ii) {
            return Rt.SendMsg(
              "SteamNotification.GetPreferences#1",
              (0, At.I8)(Dt, Mt, ii),
              pr,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          K.GetPreferences = _i;
        })(ti || (ti = {}));
        var Fi;
        ((K) => {
          (K.NotificationsReceivedHandler = {
            name: "SteamNotificationClient.NotificationsReceived#1",
            request: Ri,
          }),
            (K.PreferencesUpdatedHandler = {
              name: "SteamNotificationClient.PreferencesUpdated#1",
              request: Gt,
            });
        })(Fi || (Fi = {}));
      },
      80862: (xt, $t, F) => {
        "use strict";
        F.d($t, {
          OT: () => Wa,
          iO: () => Ia,
          T4: () => Rn,
          n8: () => hn,
          hr: () => vn,
          IC: () => gn,
          V4: () => Sn,
          sR: () => bn,
          jb: () => zn,
          Rl: () => xa,
          XT: () => Tn,
          cE: () => Pi,
          V8: () => br,
          tM: () => Na,
          K9: () => pn,
          bP: () => Ua,
          aq: () => Bn,
          u5: () => Sr,
          PI: () => Fn,
          kE: () => sn,
          IL: () => qa,
        });
        var s = F(48453),
          q = F(35038),
          R = F(72604),
          j = F(99412),
          m = F(38636),
          At = F(88942),
          Tt = F(14947),
          Zt = F(76559),
          D = F(10142),
          S = F(79365),
          Jt = F(68495),
          Bi = F(25236),
          bi = F(36174),
          qt = F(57589),
          gt = F(98609),
          Si = F(3166),
          Q = F(90626),
          d = F(80613),
          o = F.n(d),
          i = F(75245),
          Pt = F(24525);
        const It = 0,
          bt = 1,
          wi = 2,
          Li = 3,
          sr = 4,
          P = 5,
          Ei = 0,
          or = 1,
          lr = 2,
          cr = 3,
          Lt = 4,
          hr = 6,
          Et = 7,
          ur = 8,
          mr = 9,
          Wt = 10,
          Ut = 11,
          Rr = 12,
          dr = 13,
          Fr = 15,
          ie = 16,
          ki = 17,
          Di = 18,
          fr = 19,
          Ft = 20,
          Hi = 21,
          qi = 22,
          Nt = 23,
          _t = 24,
          yr = 25,
          ne = 26,
          Qi = 27,
          zt = 28,
          Ki = 29,
          Ii = 30;
        var Mi = Object.defineProperty,
          vi = (r, e, t) =>
            e in r
              ? Mi(r, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: t,
                })
              : (r[e] = t),
          g = (r, e, t) => vi(r, typeof e != "symbol" ? e + "" : e, t);
        function kt(r) {
          return "unknown EFamilyGroupRole ( " + r + " )";
        }
        function Dt(r) {
          return "unknown EFamilyGroupMembershipRemovalReason ( " + r + " )";
        }
        function Wi(r) {
          return "unknown EFamilyGroupsTwoFactorMethod ( " + r + " )";
        }
        function pr(r) {
          return "unknown EPurchaseRequestAction ( " + r + " )";
        }
        function hi(r) {
          return "unknown EFamilyGroupChangeLogType ( " + r + " )";
        }
        function Vi(r) {
          return "unknown ESharedLibraryExcludeReason ( " + r + " )";
        }
        const ei = class ge extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ge.prototype.name || i.Sg(ge.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              ge.sm_m ||
                (ge.sm_m = {
                  proto: ge,
                  fields: {
                    name: { n: 1, br: i.qM.readString, bw: i.gp.writeString },
                    steamid: {
                      n: 2,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                  },
                }),
              ge.sm_m
            );
          }
          static MBF() {
            return ge.sm_mbf || (ge.sm_mbf = i.w0(ge.M())), ge.sm_mbf;
          }
          toObject(e = !1) {
            return ge.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(ge.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(ge.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new ge();
            return ge.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(ge.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(ge.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              ge.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_CreateFamilyGroup_Request";
          }
        };
        g(ei, "sm_m"), g(ei, "sm_mbf");
        let Ri = ei;
        const St = class Be extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Be.prototype.family_groupid || i.Sg(Be.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Be.sm_m ||
                (Be.sm_m = {
                  proto: Be,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    cooldown_skip_granted: {
                      n: 2,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                  },
                }),
              Be.sm_m
            );
          }
          static MBF() {
            return Be.sm_mbf || (Be.sm_mbf = i.w0(Be.M())), Be.sm_mbf;
          }
          toObject(e = !1) {
            return Be.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(Be.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(Be.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new Be();
            return Be.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(Be.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return Be.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(Be.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              Be.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_CreateFamilyGroup_Response";
          }
        };
        g(St, "sm_m"), g(St, "sm_mbf");
        let Gt = St;
        const ti = class be extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              be.prototype.family_groupid || i.Sg(be.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              be.sm_m ||
                (be.sm_m = {
                  proto: be,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    send_running_apps: {
                      n: 2,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                  },
                }),
              be.sm_m
            );
          }
          static MBF() {
            return be.sm_mbf || (be.sm_mbf = i.w0(be.M())), be.sm_mbf;
          }
          toObject(e = !1) {
            return be.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(be.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(be.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new be();
            return be.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(be.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return be.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(be.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              be.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetFamilyGroup_Request";
          }
        };
        g(ti, "sm_m"), g(ti, "sm_mbf");
        let Fi = ti;
        const K = class Se extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Se.prototype.steamid || i.Sg(Se.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Se.sm_m ||
                (Se.sm_m = {
                  proto: Se,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    role: { n: 2, br: i.qM.readEnum, bw: i.gp.writeEnum },
                    time_joined: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    cooldown_seconds_remaining: {
                      n: 4,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              Se.sm_m
            );
          }
          static MBF() {
            return Se.sm_mbf || (Se.sm_mbf = i.w0(Se.M())), Se.sm_mbf;
          }
          toObject(e = !1) {
            return Se.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(Se.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(Se.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new Se();
            return Se.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(Se.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return Se.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(Se.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              Se.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "FamilyGroupMember";
          }
        };
        g(K, "sm_m"), g(K, "sm_mbf");
        let a = K;
        const B = class we extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              we.prototype.steamid || i.Sg(we.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              we.sm_m ||
                (we.sm_m = {
                  proto: we,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    role: { n: 2, br: i.qM.readEnum, bw: i.gp.writeEnum },
                  },
                }),
              we.sm_m
            );
          }
          static MBF() {
            return we.sm_mbf || (we.sm_mbf = i.w0(we.M())), we.sm_mbf;
          }
          toObject(e = !1) {
            return we.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(we.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(we.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new we();
            return we.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(we.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return we.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(we.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              we.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "FamilyGroupPendingInvite";
          }
        };
        g(B, "sm_m"), g(B, "sm_mbf");
        let V = B;
        const yi = class Me extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Me.prototype.steamid || i.Sg(Me.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Me.sm_m ||
                (Me.sm_m = {
                  proto: Me,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                  },
                }),
              Me.sm_m
            );
          }
          static MBF() {
            return Me.sm_mbf || (Me.sm_mbf = i.w0(Me.M())), Me.sm_mbf;
          }
          toObject(e = !1) {
            return Me.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(Me.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(Me.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new Me();
            return Me.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(Me.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return Me.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(Me.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              Me.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "FamilyGroupFormerMember";
          }
        };
        g(yi, "sm_m"), g(yi, "sm_mbf");
        let Yi = yi;
        const _i = class ve extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ve.prototype.name || i.Sg(ve.M()),
              d.Message.initialize(this, e, 0, -1, [2, 3, 7], null);
          }
          static M() {
            return (
              ve.sm_m ||
                (ve.sm_m = {
                  proto: ve,
                  fields: {
                    name: { n: 1, br: i.qM.readString, bw: i.gp.writeString },
                    members: { n: 2, c: a, r: !0, q: !0 },
                    pending_invites: { n: 3, c: V, r: !0, q: !0 },
                    free_spots: {
                      n: 4,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    country: {
                      n: 5,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    slot_cooldown_remaining_seconds: {
                      n: 6,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    former_members: { n: 7, c: Yi, r: !0, q: !0 },
                    slot_cooldown_overrides: {
                      n: 8,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              ve.sm_m
            );
          }
          static MBF() {
            return ve.sm_mbf || (ve.sm_mbf = i.w0(ve.M())), ve.sm_mbf;
          }
          toObject(e = !1) {
            return ve.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(ve.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(ve.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new ve();
            return ve.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(ve.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(ve.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              ve.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetFamilyGroup_Response";
          }
        };
        g(_i, "sm_m"), g(_i, "sm_mbf");
        let Rt = _i;
        const Mt = class he extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              he.prototype.family_groupid || i.Sg(he.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              he.sm_m ||
                (he.sm_m = {
                  proto: he,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    role: { n: 2, br: i.qM.readEnum, bw: i.gp.writeEnum },
                    inviter_steamid: {
                      n: 3,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    awaiting_2fa: {
                      n: 4,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    invite_id: {
                      n: 5,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              he.sm_m
            );
          }
          static MBF() {
            return he.sm_mbf || (he.sm_mbf = i.w0(he.M())), he.sm_mbf;
          }
          toObject(e = !1) {
            return he.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(he.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(he.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new he();
            return he.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(he.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return he.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(he.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              he.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "FamilyGroupPendingInviteForUser";
          }
        };
        g(Mt, "sm_m"), g(Mt, "sm_mbf");
        let ii = Mt;
        const Ji = class Re extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Re.prototype.steamid || i.Sg(Re.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Re.sm_m ||
                (Re.sm_m = {
                  proto: Re,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    include_family_group_response: {
                      n: 2,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                  },
                }),
              Re.sm_m
            );
          }
          static MBF() {
            return Re.sm_mbf || (Re.sm_mbf = i.w0(Re.M())), Re.sm_mbf;
          }
          toObject(e = !1) {
            return Re.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(Re.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(Re.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new Re();
            return Re.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(Re.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return Re.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(Re.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              Re.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetFamilyGroupForUser_Request";
          }
        };
        g(Ji, "sm_m"), g(Ji, "sm_mbf");
        let _r = Ji;
        const Xi = class Fe extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Fe.prototype.family_groupid || i.Sg(Fe.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Fe.sm_m ||
                (Fe.sm_m = {
                  proto: Fe,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    rtime_joined: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    rtime_left: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    role: { n: 4, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    participated: {
                      n: 5,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                  },
                }),
              Fe.sm_m
            );
          }
          static MBF() {
            return Fe.sm_mbf || (Fe.sm_mbf = i.w0(Fe.M())), Fe.sm_mbf;
          }
          toObject(e = !1) {
            return Fe.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(Fe.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(Fe.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new Fe();
            return Fe.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(Fe.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return Fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(Fe.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              Fe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "FamilyGroupMembership";
          }
        };
        g(Xi, "sm_m"), g(Xi, "sm_mbf");
        let zr = Xi;
        const $i = class _e extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              _e.prototype.family_groupid || i.Sg(_e.M()),
              d.Message.initialize(this, e, 0, -1, [5, 10], null);
          }
          static M() {
            return (
              _e.sm_m ||
                (_e.sm_m = {
                  proto: _e,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    is_not_member_of_any_group: {
                      n: 2,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    latest_time_joined: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    latest_joined_family_groupid: {
                      n: 4,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    pending_group_invites: { n: 5, c: ii, r: !0, q: !0 },
                    role: { n: 6, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    cooldown_seconds_remaining: {
                      n: 7,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    family_group: { n: 8, c: Rt },
                    can_undelete_last_joined_family: {
                      n: 9,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    membership_history: { n: 10, c: zr, r: !0, q: !0 },
                  },
                }),
              _e.sm_m
            );
          }
          static MBF() {
            return _e.sm_mbf || (_e.sm_mbf = i.w0(_e.M())), _e.sm_mbf;
          }
          toObject(e = !1) {
            return _e.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(_e.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(_e.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new _e();
            return _e.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(_e.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return _e.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(_e.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              _e.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetFamilyGroupForUser_Response";
          }
        };
        g($i, "sm_m"), g($i, "sm_mbf");
        let Tr = $i;
        const Zi = class ze extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ze.prototype.family_groupid || i.Sg(ze.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              ze.sm_m ||
                (ze.sm_m = {
                  proto: ze,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    name: { n: 2, br: i.qM.readString, bw: i.gp.writeString },
                  },
                }),
              ze.sm_m
            );
          }
          static MBF() {
            return ze.sm_mbf || (ze.sm_mbf = i.w0(ze.M())), ze.sm_mbf;
          }
          toObject(e = !1) {
            return ze.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(ze.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(ze.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new ze();
            return ze.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(ze.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(ze.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              ze.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_ModifyFamilyGroupDetails_Request";
          }
        };
        g(Zi, "sm_m"), g(Zi, "sm_mbf");
        let Nr = Zi;
        class Kt extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), d.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Kt.toObject(e, this);
          }
          static toObject(e, t) {
            return e ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(e) {
            return new Kt();
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new Kt();
            return Kt.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return e;
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return Kt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {}
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              Kt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_ModifyFamilyGroupDetails_Response";
          }
        }
        const Ui = class Te extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Te.prototype.family_groupid || i.Sg(Te.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Te.sm_m ||
                (Te.sm_m = {
                  proto: Te,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    receiver_steamid: {
                      n: 2,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    receiver_role: {
                      n: 3,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                  },
                }),
              Te.sm_m
            );
          }
          static MBF() {
            return Te.sm_mbf || (Te.sm_mbf = i.w0(Te.M())), Te.sm_mbf;
          }
          toObject(e = !1) {
            return Te.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(Te.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(Te.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new Te();
            return Te.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(Te.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return Te.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(Te.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              Te.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_InviteToFamilyGroup_Request";
          }
        };
        g(Ui, "sm_m"), g(Ui, "sm_mbf");
        let l = Ui;
        const c = class Ne extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ne.prototype.invite_id || i.Sg(Ne.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Ne.sm_m ||
                (Ne.sm_m = {
                  proto: Ne,
                  fields: {
                    invite_id: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    two_factor_method: {
                      n: 2,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                  },
                }),
              Ne.sm_m
            );
          }
          static MBF() {
            return Ne.sm_mbf || (Ne.sm_mbf = i.w0(Ne.M())), Ne.sm_mbf;
          }
          toObject(e = !1) {
            return Ne.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(Ne.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(Ne.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new Ne();
            return Ne.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(Ne.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return Ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(Ne.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              Ne.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_InviteToFamilyGroup_Response";
          }
        };
        g(c, "sm_m"), g(c, "sm_mbf");
        let y = c;
        const f = class Ge extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ge.prototype.family_groupid || i.Sg(Ge.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Ge.sm_m ||
                (Ge.sm_m = {
                  proto: Ge,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    nonce: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              Ge.sm_m
            );
          }
          static MBF() {
            return Ge.sm_mbf || (Ge.sm_mbf = i.w0(Ge.M())), Ge.sm_mbf;
          }
          toObject(e = !1) {
            return Ge.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(Ge.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(Ge.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new Ge();
            return Ge.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(Ge.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return Ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(Ge.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              Ge.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_JoinFamilyGroup_Request";
          }
        };
        g(f, "sm_m"), g(f, "sm_mbf");
        let b = f;
        const h = class Ce extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ce.prototype.two_factor_method || i.Sg(Ce.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Ce.sm_m ||
                (Ce.sm_m = {
                  proto: Ce,
                  fields: {
                    two_factor_method: {
                      n: 2,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    cooldown_skip_granted: {
                      n: 3,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    invite_already_accepted: {
                      n: 4,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    cooldown_seconds_remaining: {
                      n: 5,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              Ce.sm_m
            );
          }
          static MBF() {
            return Ce.sm_mbf || (Ce.sm_mbf = i.w0(Ce.M())), Ce.sm_mbf;
          }
          toObject(e = !1) {
            return Ce.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(Ce.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(Ce.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new Ce();
            return Ce.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(Ce.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return Ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(Ce.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              Ce.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_JoinFamilyGroup_Response";
          }
        };
        g(h, "sm_m"), g(h, "sm_mbf");
        let v = h;
        const w = class je extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              je.prototype.family_groupid || i.Sg(je.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              je.sm_m ||
                (je.sm_m = {
                  proto: je,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    steamid_to_remove: {
                      n: 2,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                  },
                }),
              je.sm_m
            );
          }
          static MBF() {
            return je.sm_mbf || (je.sm_mbf = i.w0(je.M())), je.sm_mbf;
          }
          toObject(e = !1) {
            return je.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(je.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(je.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new je();
            return je.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(je.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return je.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(je.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              je.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_RemoveFromFamilyGroup_Request";
          }
        };
        g(w, "sm_m"), g(w, "sm_mbf");
        let z = w;
        class _ extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), d.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return _.toObject(e, this);
          }
          static toObject(e, t) {
            return e ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(e) {
            return new _();
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new _();
            return _.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return e;
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {}
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_RemoveFromFamilyGroup_Response";
          }
        }
        const M = class qe extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              qe.prototype.family_groupid || i.Sg(qe.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              qe.sm_m ||
                (qe.sm_m = {
                  proto: qe,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    steamid_to_cancel: {
                      n: 2,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                  },
                }),
              qe.sm_m
            );
          }
          static MBF() {
            return qe.sm_mbf || (qe.sm_mbf = i.w0(qe.M())), qe.sm_mbf;
          }
          toObject(e = !1) {
            return qe.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(qe.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(qe.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new qe();
            return qe.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(qe.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(qe.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              qe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_CancelFamilyGroupInvite_Request";
          }
        };
        g(M, "sm_m"), g(M, "sm_mbf");
        let N = M;
        class G extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), d.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return G.toObject(e, this);
          }
          static toObject(e, t) {
            return e ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(e) {
            return new G();
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new G();
            return G.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return e;
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {}
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              G.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_CancelFamilyGroupInvite_Response";
          }
        }
        const A = class Ie extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ie.prototype.family_groupid || i.Sg(Ie.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Ie.sm_m ||
                (Ie.sm_m = {
                  proto: Ie,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              Ie.sm_m
            );
          }
          static MBF() {
            return Ie.sm_mbf || (Ie.sm_mbf = i.w0(Ie.M())), Ie.sm_mbf;
          }
          toObject(e = !1) {
            return Ie.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(Ie.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(Ie.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new Ie();
            return Ie.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(Ie.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return Ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(Ie.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              Ie.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_DeleteFamilyGroup_Request";
          }
        };
        g(A, "sm_m"), g(A, "sm_mbf");
        let H = A;
        class Y extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), d.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Y.toObject(e, this);
          }
          static toObject(e, t) {
            return e ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(e) {
            return new Y();
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new Y();
            return Y.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return e;
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {}
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              Y.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_DeleteFamilyGroup_Response";
          }
        }
        const k = class We extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              We.prototype.family_groupid || i.Sg(We.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              We.sm_m ||
                (We.sm_m = {
                  proto: We,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    client_instance_id: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              We.sm_m
            );
          }
          static MBF() {
            return We.sm_mbf || (We.sm_mbf = i.w0(We.M())), We.sm_mbf;
          }
          toObject(e = !1) {
            return We.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(We.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(We.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new We();
            return We.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(We.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return We.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(We.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              We.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetUsersSharingDevice_Request";
          }
        };
        g(k, "sm_m"), g(k, "sm_mbf");
        let $ = k;
        const X = class Ue extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ue.prototype.users || i.Sg(Ue.M()),
              d.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              Ue.sm_m ||
                (Ue.sm_m = {
                  proto: Ue,
                  fields: {
                    users: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: i.qM.readFixed64String,
                      pbr: i.qM.readPackedFixed64String,
                      bw: i.gp.writeRepeatedFixed64String,
                    },
                  },
                }),
              Ue.sm_m
            );
          }
          static MBF() {
            return Ue.sm_mbf || (Ue.sm_mbf = i.w0(Ue.M())), Ue.sm_mbf;
          }
          toObject(e = !1) {
            return Ue.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(Ue.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(Ue.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new Ue();
            return Ue.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(Ue.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return Ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(Ue.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              Ue.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetUsersSharingDevice_Response";
          }
        };
        g(X, "sm_m"), g(X, "sm_mbf");
        let Vt = X;
        const Ct = class Oe extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Oe.prototype.family_groupid || i.Sg(Oe.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Oe.sm_m ||
                (Oe.sm_m = {
                  proto: Oe,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    gidshoppingcart: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    store_country_code: {
                      n: 3,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    use_account_cart: {
                      n: 4,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                  },
                }),
              Oe.sm_m
            );
          }
          static MBF() {
            return Oe.sm_mbf || (Oe.sm_mbf = i.w0(Oe.M())), Oe.sm_mbf;
          }
          toObject(e = !1) {
            return Oe.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(Oe.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(Oe.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new Oe();
            return Oe.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(Oe.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return Oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(Oe.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              Oe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_RequestPurchase_Request";
          }
        };
        g(Ct, "sm_m"), g(Ct, "sm_mbf");
        let J = Ct;
        const vt = class xe extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              xe.prototype.gidshoppingcart || i.Sg(xe.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              xe.sm_m ||
                (xe.sm_m = {
                  proto: xe,
                  fields: {
                    gidshoppingcart: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    request_id: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              xe.sm_m
            );
          }
          static MBF() {
            return xe.sm_mbf || (xe.sm_mbf = i.w0(xe.M())), xe.sm_mbf;
          }
          toObject(e = !1) {
            return xe.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(xe.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(xe.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new xe();
            return xe.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(xe.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(xe.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              xe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_RequestPurchase_Response";
          }
        };
        g(vt, "sm_m"), g(vt, "sm_mbf");
        let ri = vt;
        const zi = class Ae extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ae.prototype.family_groupid || i.Sg(Ae.M()),
              d.Message.initialize(this, e, 0, -1, [3], null);
          }
          static M() {
            return (
              Ae.sm_m ||
                (Ae.sm_m = {
                  proto: Ae,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    request_ids: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint64String,
                      pbr: i.qM.readPackedUint64String,
                      bw: i.gp.writeRepeatedUint64String,
                    },
                    rt_include_completed_since: {
                      n: 4,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              Ae.sm_m
            );
          }
          static MBF() {
            return Ae.sm_mbf || (Ae.sm_mbf = i.w0(Ae.M())), Ae.sm_mbf;
          }
          toObject(e = !1) {
            return Ae.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(Ae.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(Ae.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new Ae();
            return Ae.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(Ae.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return Ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(Ae.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              Ae.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetPurchaseRequests_Request";
          }
        };
        g(zi, "sm_m"), g(zi, "sm_mbf");
        let Oi = zi;
        const gr = class Pe extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Pe.prototype.requester_steamid || i.Sg(Pe.M()),
              d.Message.initialize(this, e, 0, -1, [9, 10, 11, 12], null);
          }
          static M() {
            return (
              Pe.sm_m ||
                (Pe.sm_m = {
                  proto: Pe,
                  fields: {
                    requester_steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    gidshoppingcart: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    time_requested: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    time_responded: {
                      n: 4,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    responder_steamid: {
                      n: 5,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    response_action: {
                      n: 6,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    is_completed: {
                      n: 7,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    request_id: {
                      n: 8,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    requested_packageids: {
                      n: 9,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint32,
                      pbr: i.qM.readPackedUint32,
                      bw: i.gp.writeRepeatedUint32,
                    },
                    purchased_packageids: {
                      n: 10,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint32,
                      pbr: i.qM.readPackedUint32,
                      bw: i.gp.writeRepeatedUint32,
                    },
                    requested_bundleids: {
                      n: 11,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint32,
                      pbr: i.qM.readPackedUint32,
                      bw: i.gp.writeRepeatedUint32,
                    },
                    purchased_bundleids: {
                      n: 12,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint32,
                      pbr: i.qM.readPackedUint32,
                      bw: i.gp.writeRepeatedUint32,
                    },
                  },
                }),
              Pe.sm_m
            );
          }
          static MBF() {
            return Pe.sm_mbf || (Pe.sm_mbf = i.w0(Pe.M())), Pe.sm_mbf;
          }
          toObject(e = !1) {
            return Pe.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(Pe.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(Pe.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new Pe();
            return Pe.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(Pe.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return Pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(Pe.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              Pe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "PurchaseRequest";
          }
        };
        g(gr, "sm_m"), g(gr, "sm_mbf");
        let er = gr;
        const pi = class Le extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Le.prototype.requests || i.Sg(Le.M()),
              d.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              Le.sm_m ||
                (Le.sm_m = {
                  proto: Le,
                  fields: { requests: { n: 1, c: er, r: !0, q: !0 } },
                }),
              Le.sm_m
            );
          }
          static MBF() {
            return Le.sm_mbf || (Le.sm_mbf = i.w0(Le.M())), Le.sm_mbf;
          }
          toObject(e = !1) {
            return Le.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(Le.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(Le.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new Le();
            return Le.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(Le.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return Le.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(Le.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              Le.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetPurchaseRequests_Response";
          }
        };
        g(pi, "sm_m"), g(pi, "sm_mbf");
        let tr = pi;
        const Ti = class Ee extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ee.prototype.family_groupid || i.Sg(Ee.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Ee.sm_m ||
                (Ee.sm_m = {
                  proto: Ee,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    action: { n: 3, br: i.qM.readEnum, bw: i.gp.writeEnum },
                    request_id: {
                      n: 4,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              Ee.sm_m
            );
          }
          static MBF() {
            return Ee.sm_mbf || (Ee.sm_mbf = i.w0(Ee.M())), Ee.sm_mbf;
          }
          toObject(e = !1) {
            return Ee.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(Ee.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(Ee.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new Ee();
            return Ee.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(Ee.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return Ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(Ee.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              Ee.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_RespondToRequestedPurchase_Request";
          }
        };
        g(Ti, "sm_m"), g(Ti, "sm_mbf");
        let xi = Ti;
        class Ht extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), d.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Ht.toObject(e, this);
          }
          static toObject(e, t) {
            return e ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(e) {
            return new Ht();
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new Ht();
            return Ht.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return e;
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return Ht.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {}
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              Ht.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_RespondToRequestedPurchase_Response";
          }
        }
        const gi = class ke extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ke.prototype.family_groupid || i.Sg(ke.M()),
              d.Message.initialize(this, e, 0, -1, [2], null);
          }
          static M() {
            return (
              ke.sm_m ||
                (ke.sm_m = {
                  proto: ke,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    running_apps: { n: 2, c: Gn, r: !0, q: !0 },
                  },
                }),
              ke.sm_m
            );
          }
          static MBF() {
            return ke.sm_mbf || (ke.sm_mbf = i.w0(ke.M())), ke.sm_mbf;
          }
          toObject(e = !1) {
            return ke.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(ke.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(ke.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new ke();
            return ke.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(ke.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return ke.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(ke.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              ke.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroupsClient_NotifyRunningApps_Notification";
          }
        };
        g(gi, "sm_m"), g(gi, "sm_mbf");
        let Ni = gi;
        const ir = class De extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              De.prototype.member_steamid || i.Sg(De.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              De.sm_m ||
                (De.sm_m = {
                  proto: De,
                  fields: {
                    member_steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    owner_steamid: {
                      n: 2,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                  },
                }),
              De.sm_m
            );
          }
          static MBF() {
            return De.sm_mbf || (De.sm_mbf = i.w0(De.M())), De.sm_mbf;
          }
          toObject(e = !1) {
            return De.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(De.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(De.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new De();
            return De.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(De.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return De.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(De.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              De.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroupsClient_NotifyRunningApps_Notification_PlayingMember";
          }
        };
        g(ir, "sm_m"), g(ir, "sm_mbf");
        let Nn = ir;
        const Gr = class He extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              He.prototype.appid || i.Sg(He.M()),
              d.Message.initialize(this, e, 0, -1, [3], null);
          }
          static M() {
            return (
              He.sm_m ||
                (He.sm_m = {
                  proto: He,
                  fields: {
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    playing_members: { n: 3, c: Nn, r: !0, q: !0 },
                  },
                }),
              He.sm_m
            );
          }
          static MBF() {
            return He.sm_mbf || (He.sm_mbf = i.w0(He.M())), He.sm_mbf;
          }
          toObject(e = !1) {
            return He.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(He.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(He.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new He();
            return He.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(He.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return He.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(He.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              He.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroupsClient_NotifyRunningApps_Notification_RunningApp";
          }
        };
        g(Gr, "sm_m"), g(Gr, "sm_mbf");
        let Gn = Gr;
        class ni extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), d.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return ni.toObject(e, this);
          }
          static toObject(e, t) {
            return e ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(e) {
            return new ni();
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new ni();
            return ni.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return e;
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return ni.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {}
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              ni.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroupsClient_InviteStatus_Notification";
          }
        }
        const Cr = class Qe extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Qe.prototype.family_groupid || i.Sg(Qe.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Qe.sm_m ||
                (Qe.sm_m = {
                  proto: Qe,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              Qe.sm_m
            );
          }
          static MBF() {
            return Qe.sm_mbf || (Qe.sm_mbf = i.w0(Qe.M())), Qe.sm_mbf;
          }
          toObject(e = !1) {
            return Qe.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(Qe.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(Qe.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new Qe();
            return Qe.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(Qe.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return Qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(Qe.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              Qe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroupsClient_GroupChanged_Notification";
          }
        };
        g(Cr, "sm_m"), g(Cr, "sm_mbf");
        let Cn = Cr;
        const jr = class Ke extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ke.prototype.family_groupid || i.Sg(Ke.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Ke.sm_m ||
                (Ke.sm_m = {
                  proto: Ke,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              Ke.sm_m
            );
          }
          static MBF() {
            return Ke.sm_mbf || (Ke.sm_mbf = i.w0(Ke.M())), Ke.sm_mbf;
          }
          toObject(e = !1) {
            return Ke.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(Ke.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(Ke.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new Ke();
            return Ke.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(Ke.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return Ke.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(Ke.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              Ke.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetChangeLog_Request";
          }
        };
        g(jr, "sm_m"), g(jr, "sm_mbf");
        let jn = jr;
        const qr = class Ve extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ve.prototype.changes || i.Sg(Ve.M()),
              d.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              Ve.sm_m ||
                (Ve.sm_m = {
                  proto: Ve,
                  fields: { changes: { n: 1, c: In, r: !0, q: !0 } },
                }),
              Ve.sm_m
            );
          }
          static MBF() {
            return Ve.sm_mbf || (Ve.sm_mbf = i.w0(Ve.M())), Ve.sm_mbf;
          }
          toObject(e = !1) {
            return Ve.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(Ve.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(Ve.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new Ve();
            return Ve.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(Ve.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return Ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(Ve.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              Ve.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetChangeLog_Response";
          }
        };
        g(qr, "sm_m"), g(qr, "sm_mbf");
        let qn = qr;
        const Ir = class Ye extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ye.prototype.timestamp || i.Sg(Ye.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Ye.sm_m ||
                (Ye.sm_m = {
                  proto: Ye,
                  fields: {
                    timestamp: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    actor_steamid: {
                      n: 2,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    type: { n: 3, br: i.qM.readEnum, bw: i.gp.writeEnum },
                    body: { n: 4, br: i.qM.readString, bw: i.gp.writeString },
                    by_support: { n: 5, br: i.qM.readBool, bw: i.gp.writeBool },
                  },
                }),
              Ye.sm_m
            );
          }
          static MBF() {
            return Ye.sm_mbf || (Ye.sm_mbf = i.w0(Ye.M())), Ye.sm_mbf;
          }
          toObject(e = !1) {
            return Ye.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(Ye.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(Ye.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new Ye();
            return Ye.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(Ye.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return Ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(Ye.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              Ye.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetChangeLog_Response_Change";
          }
        };
        g(Ir, "sm_m"), g(Ir, "sm_mbf");
        let In = Ir;
        const Wr = class Je extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Je.prototype.steamid || i.Sg(Je.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Je.sm_m ||
                (Je.sm_m = {
                  proto: Je,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    appid: { n: 2, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    first_played: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    latest_played: {
                      n: 4,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    seconds_played: {
                      n: 5,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              Je.sm_m
            );
          }
          static MBF() {
            return Je.sm_mbf || (Je.sm_mbf = i.w0(Je.M())), Je.sm_mbf;
          }
          toObject(e = !1) {
            return Je.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(Je.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(Je.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new Je();
            return Je.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(Je.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return Je.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(Je.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              Je.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_PlaytimeEntry";
          }
        };
        g(Wr, "sm_m"), g(Wr, "sm_mbf");
        let on = Wr;
        const Ur = class Xe extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Xe.prototype.family_groupid || i.Sg(Xe.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Xe.sm_m ||
                (Xe.sm_m = {
                  proto: Xe,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                  },
                }),
              Xe.sm_m
            );
          }
          static MBF() {
            return Xe.sm_mbf || (Xe.sm_mbf = i.w0(Xe.M())), Xe.sm_mbf;
          }
          toObject(e = !1) {
            return Xe.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(Xe.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(Xe.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new Xe();
            return Xe.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(Xe.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return Xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(Xe.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              Xe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetPlaytimeSummary_Request";
          }
        };
        g(Ur, "sm_m"), g(Ur, "sm_mbf");
        let Wn = Ur;
        const Or = class $e extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              $e.prototype.entries || i.Sg($e.M()),
              d.Message.initialize(this, e, 0, -1, [1, 2], null);
          }
          static M() {
            return (
              $e.sm_m ||
                ($e.sm_m = {
                  proto: $e,
                  fields: {
                    entries: { n: 1, c: on, r: !0, q: !0 },
                    entries_by_owner: { n: 2, c: on, r: !0, q: !0 },
                  },
                }),
              $e.sm_m
            );
          }
          static MBF() {
            return $e.sm_mbf || ($e.sm_mbf = i.w0($e.M())), $e.sm_mbf;
          }
          toObject(e = !1) {
            return $e.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT($e.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq($e.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new $e();
            return $e.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj($e.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return $e.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0($e.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              $e.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetPlaytimeSummary_Response";
          }
        };
        g(Or, "sm_m"), g(Or, "sm_mbf");
        let Un = Or;
        const xr = class Ze extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ze.prototype.family_groupid || i.Sg(Ze.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Ze.sm_m ||
                (Ze.sm_m = {
                  proto: Ze,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    cooldown_count: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              Ze.sm_m
            );
          }
          static MBF() {
            return Ze.sm_mbf || (Ze.sm_mbf = i.w0(Ze.M())), Ze.sm_mbf;
          }
          toObject(e = !1) {
            return Ze.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(Ze.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(Ze.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new Ze();
            return Ze.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(Ze.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return Ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(Ze.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              Ze.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_SetFamilyCooldownOverrides_Request";
          }
        };
        g(xr, "sm_m"), g(xr, "sm_mbf");
        let On = xr;
        class ai extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), d.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return ai.toObject(e, this);
          }
          static toObject(e, t) {
            return e ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(e) {
            return new ai();
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new ai();
            return ai.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return e;
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return ai.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {}
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              ai.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_SetFamilyCooldownOverrides_Response";
          }
        }
        const Ar = class et extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              et.prototype.family_groupid || i.Sg(et.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              et.sm_m ||
                (et.sm_m = {
                  proto: et,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    include_own: {
                      n: 2,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    include_excluded: {
                      n: 3,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    language: {
                      n: 5,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    max_apps: {
                      n: 6,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    include_non_games: {
                      n: 7,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    steamid: {
                      n: 8,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                  },
                }),
              et.sm_m
            );
          }
          static MBF() {
            return et.sm_mbf || (et.sm_mbf = i.w0(et.M())), et.sm_mbf;
          }
          toObject(e = !1) {
            return et.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(et.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(et.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new et();
            return et.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(et.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return et.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(et.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              et.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetSharedLibraryApps_Request";
          }
        };
        g(Ar, "sm_m"), g(Ar, "sm_mbf");
        let xn = Ar;
        const Pr = class tt extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              tt.prototype.apps || i.Sg(tt.M()),
              d.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              tt.sm_m ||
                (tt.sm_m = {
                  proto: tt,
                  fields: {
                    apps: { n: 1, c: Pn, r: !0, q: !0 },
                    owner_steamid: {
                      n: 2,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                  },
                }),
              tt.sm_m
            );
          }
          static MBF() {
            return tt.sm_mbf || (tt.sm_mbf = i.w0(tt.M())), tt.sm_mbf;
          }
          toObject(e = !1) {
            return tt.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(tt.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(tt.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new tt();
            return tt.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(tt.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return tt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(tt.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              tt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetSharedLibraryApps_Response";
          }
        };
        g(Pr, "sm_m"), g(Pr, "sm_mbf");
        let An = Pr;
        const Lr = class it extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              it.prototype.appid || i.Sg(it.M()),
              d.Message.initialize(this, e, 0, -1, [2, 15], null);
          }
          static M() {
            return (
              it.sm_m ||
                (it.sm_m = {
                  proto: it,
                  fields: {
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    owner_steamids: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: i.qM.readFixed64String,
                      pbr: i.qM.readPackedFixed64String,
                      bw: i.gp.writeRepeatedFixed64String,
                    },
                    name: { n: 6, br: i.qM.readString, bw: i.gp.writeString },
                    sort_as: {
                      n: 7,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    capsule_filename: {
                      n: 8,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    img_icon_hash: {
                      n: 9,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    exclude_reason: {
                      n: 10,
                      d: Ei,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    rt_time_acquired: {
                      n: 11,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    rt_last_played: {
                      n: 12,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    rt_playtime: {
                      n: 13,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    app_type: {
                      n: 14,
                      d: Pt.$e,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    content_descriptors: {
                      n: 15,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint32,
                      pbr: i.qM.readPackedUint32,
                      bw: i.gp.writeRepeatedUint32,
                    },
                  },
                }),
              it.sm_m
            );
          }
          static MBF() {
            return it.sm_mbf || (it.sm_mbf = i.w0(it.M())), it.sm_mbf;
          }
          toObject(e = !1) {
            return it.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(it.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(it.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new it();
            return it.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(it.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return it.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(it.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              it.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetSharedLibraryApps_Response_SharedApp";
          }
        };
        g(Lr, "sm_m"), g(Lr, "sm_mbf");
        let Pn = Lr;
        const Er = class rt extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              rt.prototype.family_groupid || i.Sg(rt.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              rt.sm_m ||
                (rt.sm_m = {
                  proto: rt,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    invite_id: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    nonce: {
                      n: 3,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              rt.sm_m
            );
          }
          static MBF() {
            return rt.sm_mbf || (rt.sm_mbf = i.w0(rt.M())), rt.sm_mbf;
          }
          toObject(e = !1) {
            return rt.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(rt.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(rt.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new rt();
            return rt.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(rt.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return rt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(rt.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              rt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_ConfirmInviteToFamilyGroup_Request";
          }
        };
        g(Er, "sm_m"), g(Er, "sm_mbf");
        let Ln = Er;
        class si extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), d.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return si.toObject(e, this);
          }
          static toObject(e, t) {
            return e ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(e) {
            return new si();
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new si();
            return si.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return e;
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return si.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {}
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              si.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_ConfirmInviteToFamilyGroup_Response";
          }
        }
        const kr = class nt extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              nt.prototype.family_groupid || i.Sg(nt.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              nt.sm_m ||
                (nt.sm_m = {
                  proto: nt,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    invite_id: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    nonce: {
                      n: 3,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              nt.sm_m
            );
          }
          static MBF() {
            return nt.sm_mbf || (nt.sm_mbf = i.w0(nt.M())), nt.sm_mbf;
          }
          toObject(e = !1) {
            return nt.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(nt.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(nt.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new nt();
            return nt.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(nt.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return nt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(nt.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              nt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_ConfirmJoinFamilyGroup_Request";
          }
        };
        g(kr, "sm_m"), g(kr, "sm_mbf");
        let En = kr;
        class oi extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), d.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return oi.toObject(e, this);
          }
          static toObject(e, t) {
            return e ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(e) {
            return new oi();
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new oi();
            return oi.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return e;
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return oi.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {}
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              oi.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_ConfirmJoinFamilyGroup_Response";
          }
        }
        const Dr = class at extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              at.prototype.family_groupid || i.Sg(at.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              at.sm_m ||
                (at.sm_m = {
                  proto: at,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    steamid: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              at.sm_m
            );
          }
          static MBF() {
            return at.sm_mbf || (at.sm_mbf = i.w0(at.M())), at.sm_mbf;
          }
          toObject(e = !1) {
            return at.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(at.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(at.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new at();
            return at.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(at.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return at.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(at.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              at.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_ResendInvitationToFamilyGroup_Request";
          }
        };
        g(Dr, "sm_m"), g(Dr, "sm_mbf");
        let kn = Dr;
        class li extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), d.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return li.toObject(e, this);
          }
          static toObject(e, t) {
            return e ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(e) {
            return new li();
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new li();
            return li.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return e;
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return li.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {}
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              li.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_ResendInvitationToFamilyGroup_Response";
          }
        }
        const Hr = class st extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              st.prototype.family_groupid || i.Sg(st.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              st.sm_m ||
                (st.sm_m = {
                  proto: st,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    appid: { n: 2, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    lender_steamid: {
                      n: 3,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                  },
                }),
              st.sm_m
            );
          }
          static MBF() {
            return st.sm_mbf || (st.sm_mbf = i.w0(st.M())), st.sm_mbf;
          }
          toObject(e = !1) {
            return st.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(st.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(st.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new st();
            return st.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(st.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return st.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(st.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              st.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_SetPreferredLender_Request";
          }
        };
        g(Hr, "sm_m"), g(Hr, "sm_mbf");
        let Dn = Hr;
        class ci extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), d.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return ci.toObject(e, this);
          }
          static toObject(e, t) {
            return e ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(e) {
            return new ci();
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new ci();
            return ci.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return e;
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return ci.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {}
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              ci.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_SetPreferredLender_Response";
          }
        }
        const Qr = class ot extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ot.prototype.family_groupid || i.Sg(ot.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              ot.sm_m ||
                (ot.sm_m = {
                  proto: ot,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              ot.sm_m
            );
          }
          static MBF() {
            return ot.sm_mbf || (ot.sm_mbf = i.w0(ot.M())), ot.sm_mbf;
          }
          toObject(e = !1) {
            return ot.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(ot.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(ot.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new ot();
            return ot.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(ot.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return ot.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(ot.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              ot.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetPreferredLenders_Request";
          }
        };
        g(Qr, "sm_m"), g(Qr, "sm_mbf");
        let Hn = Qr;
        const Kr = class lt extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              lt.prototype.members || i.Sg(lt.M()),
              d.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              lt.sm_m ||
                (lt.sm_m = {
                  proto: lt,
                  fields: { members: { n: 1, c: Kn, r: !0, q: !0 } },
                }),
              lt.sm_m
            );
          }
          static MBF() {
            return lt.sm_mbf || (lt.sm_mbf = i.w0(lt.M())), lt.sm_mbf;
          }
          toObject(e = !1) {
            return lt.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(lt.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(lt.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new lt();
            return lt.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(lt.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return lt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(lt.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              lt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetPreferredLenders_Response";
          }
        };
        g(Kr, "sm_m"), g(Kr, "sm_mbf");
        let Qn = Kr;
        const Vr = class ct extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ct.prototype.steamid || i.Sg(ct.M()),
              d.Message.initialize(this, e, 0, -1, [2], null);
          }
          static M() {
            return (
              ct.sm_m ||
                (ct.sm_m = {
                  proto: ct,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    preferred_appids: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint32,
                      pbr: i.qM.readPackedUint32,
                      bw: i.gp.writeRepeatedUint32,
                    },
                  },
                }),
              ct.sm_m
            );
          }
          static MBF() {
            return ct.sm_mbf || (ct.sm_mbf = i.w0(ct.M())), ct.sm_mbf;
          }
          toObject(e = !1) {
            return ct.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(ct.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(ct.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new ct();
            return ct.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(ct.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return ct.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(ct.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              ct.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetPreferredLenders_Response_FamilyMember";
          }
        };
        g(Vr, "sm_m"), g(Vr, "sm_mbf");
        let Kn = Vr;
        const Yr = class ut extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ut.prototype.family_groupid || i.Sg(ut.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              ut.sm_m ||
                (ut.sm_m = {
                  proto: ut,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              ut.sm_m
            );
          }
          static MBF() {
            return ut.sm_mbf || (ut.sm_mbf = i.w0(ut.M())), ut.sm_mbf;
          }
          toObject(e = !1) {
            return ut.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(ut.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(ut.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new ut();
            return ut.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(ut.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return ut.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(ut.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              ut.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_UndeleteFamilyGroup_Request";
          }
        };
        g(Yr, "sm_m"), g(Yr, "sm_mbf");
        let Vn = Yr;
        class ui extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), d.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return ui.toObject(e, this);
          }
          static toObject(e, t) {
            return e ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(e) {
            return new ui();
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new ui();
            return ui.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return e;
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return ui.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {}
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              ui.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_UndeleteFamilyGroup_Response";
          }
        }
        const Jr = class mt extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              mt.prototype.family_groupid || i.Sg(mt.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              mt.sm_m ||
                (mt.sm_m = {
                  proto: mt,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    steamid: {
                      n: 2,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                  },
                }),
              mt.sm_m
            );
          }
          static MBF() {
            return mt.sm_mbf || (mt.sm_mbf = i.w0(mt.M())), mt.sm_mbf;
          }
          toObject(e = !1) {
            return mt.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(mt.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(mt.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new mt();
            return mt.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(mt.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return mt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(mt.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              mt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_ForceAcceptInvite_Request";
          }
        };
        g(Jr, "sm_m"), g(Jr, "sm_mbf");
        let Yn = Jr;
        class mi extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), d.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return mi.toObject(e, this);
          }
          static toObject(e, t) {
            return e ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(e) {
            return new mi();
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new mi();
            return mi.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return e;
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return mi.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {}
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              mi.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_ForceAcceptInvite_Response";
          }
        }
        const Xr = class dt extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              dt.prototype.family_groupid || i.Sg(dt.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              dt.sm_m ||
                (dt.sm_m = {
                  proto: dt,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    steamid: {
                      n: 2,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                  },
                }),
              dt.sm_m
            );
          }
          static MBF() {
            return dt.sm_mbf || (dt.sm_mbf = i.w0(dt.M())), dt.sm_mbf;
          }
          toObject(e = !1) {
            return dt.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(dt.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(dt.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new dt();
            return dt.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(dt.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return dt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(dt.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              dt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetInviteCheckResults_Request";
          }
        };
        g(Xr, "sm_m"), g(Xr, "sm_mbf");
        let Jn = Xr;
        const $r = class ft extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ft.prototype.wallet_country_matches || i.Sg(ft.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              ft.sm_m ||
                (ft.sm_m = {
                  proto: ft,
                  fields: {
                    wallet_country_matches: {
                      n: 1,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    ip_match: { n: 2, br: i.qM.readBool, bw: i.gp.writeBool },
                    join_restriction: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              ft.sm_m
            );
          }
          static MBF() {
            return ft.sm_mbf || (ft.sm_mbf = i.w0(ft.M())), ft.sm_mbf;
          }
          toObject(e = !1) {
            return ft.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(ft.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(ft.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new ft();
            return ft.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(ft.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return ft.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(ft.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              ft.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_GetInviteCheckResults_Response";
          }
        };
        g($r, "sm_m"), g($r, "sm_mbf");
        let Xn = $r;
        const Zr = class yt extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              yt.prototype.steamid || i.Sg(yt.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              yt.sm_m ||
                (yt.sm_m = {
                  proto: yt,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    invite_id: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              yt.sm_m
            );
          }
          static MBF() {
            return yt.sm_mbf || (yt.sm_mbf = i.w0(yt.M())), yt.sm_mbf;
          }
          toObject(e = !1) {
            return yt.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(yt.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(yt.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new yt();
            return yt.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(yt.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return yt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(yt.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              yt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_ClearCooldownSkip_Request";
          }
        };
        g(Zr, "sm_m"), g(Zr, "sm_mbf");
        let $n = Zr;
        class di extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), d.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return di.toObject(e, this);
          }
          static toObject(e, t) {
            return e ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(e) {
            return new di();
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new di();
            return di.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return e;
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return di.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {}
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              di.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_ClearCooldownSkip_Response";
          }
        }
        const en = class pt extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              pt.prototype.family_groupid || i.Sg(pt.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              pt.sm_m ||
                (pt.sm_m = {
                  proto: pt,
                  fields: {
                    family_groupid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    rtime32_target: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              pt.sm_m
            );
          }
          static MBF() {
            return pt.sm_mbf || (pt.sm_mbf = i.w0(pt.M())), pt.sm_mbf;
          }
          toObject(e = !1) {
            return pt.toObject(e, this);
          }
          static toObject(e, t) {
            return i.BT(pt.M(), e, t);
          }
          static fromObject(e) {
            return i.Uq(pt.M(), e);
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new pt();
            return pt.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return i.zj(pt.MBF(), e, t);
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return pt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {
            i.i0(pt.M(), e, t);
          }
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              pt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_RollbackFamilyGroup_Request";
          }
        };
        g(en, "sm_m"), g(en, "sm_mbf");
        let Zn = en;
        class fi extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), d.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return fi.toObject(e, this);
          }
          static toObject(e, t) {
            return e ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(e) {
            return new fi();
          }
          static deserializeBinary(e) {
            let t = new (o().BinaryReader)(e),
              n = new fi();
            return fi.deserializeBinaryFromReader(n, t);
          }
          static deserializeBinaryFromReader(e, t) {
            return e;
          }
          serializeBinary() {
            var e = new (o().BinaryWriter)();
            return fi.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, t) {}
          serializeBase64String() {
            var e = new (o().BinaryWriter)();
            return (
              fi.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_RollbackFamilyGroup_Response";
          }
        }
        var ln;
        ((r) => {
          function e(W, U, O) {
            return W.SendMsg(
              "FamilyGroups.CreateFamilyGroup#1",
              (0, q.I8)(Ri, U, O),
              Gt,
              { ePrivilege: 1 },
            );
          }
          r.CreateFamilyGroup = e;
          function t(W, U, O) {
            return W.SendMsg(
              "FamilyGroups.GetFamilyGroup#1",
              (0, q.I8)(Fi, U, O),
              Rt,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          r.GetFamilyGroup = t;
          function n(W, U, O) {
            return W.SendMsg(
              "FamilyGroups.GetFamilyGroupForUser#1",
              (0, q.I8)(_r, U, O),
              Tr,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          r.GetFamilyGroupForUser = n;
          function u(W, U, O) {
            return W.SendMsg(
              "FamilyGroups.ModifyFamilyGroupDetails#1",
              (0, q.I8)(Nr, U, O),
              Kt,
              { ePrivilege: 1 },
            );
          }
          r.ModifyFamilyGroupDetails = u;
          function p(W, U, O) {
            return W.SendMsg(
              "FamilyGroups.InviteToFamilyGroup#1",
              (0, q.I8)(l, U, O),
              y,
              { ePrivilege: 1 },
            );
          }
          r.InviteToFamilyGroup = p;
          function T(W, U, O) {
            return W.SendMsg(
              "FamilyGroups.ConfirmInviteToFamilyGroup#1",
              (0, q.I8)(Ln, U, O),
              si,
              { ePrivilege: 1 },
            );
          }
          r.ConfirmInviteToFamilyGroup = T;
          function I(W, U, O) {
            return W.SendMsg(
              "FamilyGroups.ResendInvitationToFamilyGroup#1",
              (0, q.I8)(kn, U, O),
              li,
              { ePrivilege: 1 },
            );
          }
          r.ResendInvitationToFamilyGroup = I;
          function x(W, U, O) {
            return W.SendMsg(
              "FamilyGroups.JoinFamilyGroup#1",
              (0, q.I8)(b, U, O),
              v,
              { ePrivilege: 1 },
            );
          }
          r.JoinFamilyGroup = x;
          function L(W, U, O) {
            return W.SendMsg(
              "FamilyGroups.ConfirmJoinFamilyGroup#1",
              (0, q.I8)(En, U, O),
              oi,
              { ePrivilege: 1 },
            );
          }
          r.ConfirmJoinFamilyGroup = L;
          function te(W, U, O) {
            return W.SendMsg(
              "FamilyGroups.RemoveFromFamilyGroup#1",
              (0, q.I8)(z, U, O),
              _,
              { ePrivilege: 1 },
            );
          }
          r.RemoveFromFamilyGroup = te;
          function Bt(W, U, O) {
            return W.SendMsg(
              "FamilyGroups.CancelFamilyGroupInvite#1",
              (0, q.I8)(N, U, O),
              G,
              { ePrivilege: 1 },
            );
          }
          r.CancelFamilyGroupInvite = Bt;
          function E(W, U, O) {
            return W.SendMsg(
              "FamilyGroups.GetUsersSharingDevice#1",
              (0, q.I8)($, U, O),
              Vt,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          r.GetUsersSharingDevice = E;
          function wt(W, U, O) {
            return W.SendMsg(
              "FamilyGroups.DeleteFamilyGroup#1",
              (0, q.I8)(H, U, O),
              Y,
              { ePrivilege: 1 },
            );
          }
          r.DeleteFamilyGroup = wt;
          function re(W, U, O) {
            return W.SendMsg(
              "FamilyGroups.UndeleteFamilyGroup#1",
              (0, q.I8)(Vn, U, O),
              ui,
              { ePrivilege: 1 },
            );
          }
          r.UndeleteFamilyGroup = re;
          function Xt(W, U, O) {
            return W.SendMsg(
              "FamilyGroups.GetPlaytimeSummary#1",
              (0, q.I8)(Wn, U, O),
              Un,
              { ePrivilege: 1 },
            );
          }
          r.GetPlaytimeSummary = Xt;
          function C(W, U, O) {
            return W.SendMsg(
              "FamilyGroups.RequestPurchase#1",
              (0, q.I8)(J, U, O),
              ri,
              { ePrivilege: 1 },
            );
          }
          r.RequestPurchase = C;
          function ji(W, U, O) {
            return W.SendMsg(
              "FamilyGroups.GetPurchaseRequests#1",
              (0, q.I8)(Oi, U, O),
              tr,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          r.GetPurchaseRequests = ji;
          function wr(W, U, O) {
            return W.SendMsg(
              "FamilyGroups.RespondToRequestedPurchase#1",
              (0, q.I8)(xi, U, O),
              Ht,
              { ePrivilege: 1 },
            );
          }
          r.RespondToRequestedPurchase = wr;
          function ee(W, U, O) {
            return W.SendMsg(
              "FamilyGroups.GetChangeLog#1",
              (0, q.I8)(jn, U, O),
              qn,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          r.GetChangeLog = ee;
          function Mr(W, U, O) {
            return W.SendMsg(
              "FamilyGroups.SetFamilyCooldownOverrides#1",
              (0, q.I8)(On, U, O),
              ai,
              { ePrivilege: 1 },
            );
          }
          r.SetFamilyCooldownOverrides = Mr;
          function vr(W, U, O) {
            return W.SendMsg(
              "FamilyGroups.GetSharedLibraryApps#1",
              (0, q.I8)(xn, U, O),
              An,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          r.GetSharedLibraryApps = vr;
          function jt(W, U, O) {
            return W.SendMsg(
              "FamilyGroups.SetPreferredLender#1",
              (0, q.I8)(Dn, U, O),
              ci,
              { ePrivilege: 1 },
            );
          }
          r.SetPreferredLender = jt;
          function Aa(W, U, O) {
            return W.SendMsg(
              "FamilyGroups.GetPreferredLenders#1",
              (0, q.I8)(Hn, U, O),
              Qn,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          r.GetPreferredLenders = Aa;
          function Pa(W, U, O) {
            return W.SendMsg(
              "FamilyGroups.ForceAcceptInvite#1",
              (0, q.I8)(Yn, U, O),
              mi,
              { ePrivilege: 5 },
            );
          }
          r.ForceAcceptInvite = Pa;
          function La(W, U, O) {
            return W.SendMsg(
              "FamilyGroups.GetInviteCheckResults#1",
              (0, q.I8)(Jn, U, O),
              Xn,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }
          r.GetInviteCheckResults = La;
          function Ea(W, U, O) {
            return W.SendMsg(
              "FamilyGroups.ClearCooldownSkip#1",
              (0, q.I8)($n, U, O),
              di,
              { ePrivilege: 5 },
            );
          }
          r.ClearCooldownSkip = Ea;
          function ka(W, U, O) {
            return W.SendMsg(
              "FamilyGroups.RollbackFamilyGroup#1",
              (0, q.I8)(Zn, U, O),
              fi,
              { ePrivilege: 5 },
            );
          }
          r.RollbackFamilyGroup = ka;
        })(ln || (ln = {}));
        var cn;
        ((r) => {
          (r.NotifyRunningAppsHandler = {
            name: "FamilyGroupsClient.NotifyRunningApps#1",
            request: Ni,
          }),
            (r.NotifyInviteStatusHandler = {
              name: "FamilyGroupsClient.NotifyInviteStatus#1",
              request: ni,
            }),
            (r.NotifyGroupChangedHandler = {
              name: "FamilyGroupsClient.NotifyGroupChanged#1",
              request: Cn,
            });
        })(cn || (cn = {}));
        var Da = F(75916),
          Ha = F(18210),
          Qa = F(36053),
          ea = F(3692),
          Ka = F(20117);
        const Yt = (r, e) =>
            e === void 0
              ? ["get_family_group_for_user ", r]
              : ["get_family_group_for_user ", r, e],
          Qt = (r) => ["get_family_group", r],
          Ot = (r) => ["get_family_history", r],
          ta = (r) => ["get_users_sharing_device", r],
          ia = (r) => ["get_shopping_cart_contents", r],
          ra = (r) => ["recent_playtime_sessions", r],
          na = (r) => ["get_playtime_summary", r],
          aa = (r, e) => ["get_invite_check_results", r, e];
        function tn(r, e, t) {
          return t
            ? ["get_purchase_requests", r, e, t]
            : e
              ? ["get_purchase_requests", r, e]
              : ["get_purchase_requests", r];
        }
        function Z(r, e) {
          if (r != k_EResultOK) throw r;
        }
        const rn = Q.createContext({ staleTimeMs: 1 / 0 });
        function Va(r) {
          const { staleTimeMs: e, children: t } = r,
            n = React.useMemo(
              () => ({ staleTimeMs: e != null ? e : 3e3 }),
              [e],
            );
          return React.createElement(rn.Provider, { value: n }, t);
        }
        function sa(r = !1) {
          return oa(useActiveAccount(), r);
        }
        function oa(r, e = !1) {
          const t = useActiveServiceTransport(),
            n = useContext(rn).staleTimeMs;
          return useQuery({
            queryKey: Yt(r, e),
            queryFn: async () => {
              const u = CProtoBufMsg.Init(
                FGS.CFamilyGroups_GetFamilyGroupForUser_Request,
              );
              u.Body().set_steamid(r),
                u.Body().set_include_family_group_response(e);
              const p = await FGS.FamilyGroupsService.GetFamilyGroupForUser(
                t,
                u,
              );
              return Z(p.GetEResult(), "GetFamilyGroupForUser"), p.Body();
            },
            staleTime: n,
            enabled: !!r,
            placeholderData: r
              ? void 0
              : new FGS.CFamilyGroups_GetFamilyGroupForUser_Response(),
          });
        }
        function la(r) {
          const e = useActiveServiceTransport(),
            t = useContext(rn).staleTimeMs;
          return useQuery({
            queryKey: Qt(r),
            queryFn: async () => {
              if (r) {
                const n = CProtoBufMsg.Init(
                  FGS.CFamilyGroups_GetFamilyGroup_Request,
                );
                n.Body().set_family_groupid(r);
                const u = await FGS.FamilyGroupsService.GetFamilyGroup(e, n);
                return Z(u.GetEResult(), "GetFamilyGroup"), u.Body();
              } else throw k_EResultNoMatch;
            },
            staleTime: t,
          });
        }
        function Ya() {
          const r = useActiveServiceTransport(),
            e = useQueryClient(),
            t = useActiveAccount();
          return useMutation({
            mutationFn: async (n) => {
              const u = CProtoBufMsg.Init(
                FGS.CFamilyGroups_CreateFamilyGroup_Request,
              );
              u.Body().set_name(n);
              const p = await FGS.FamilyGroupsService.CreateFamilyGroup(r, u);
              return Z(p.GetEResult(), "CreateFamilyGroup"), p.Body();
            },
            onSuccess: () => {
              e.invalidateQueries({ queryKey: Yt(t) });
            },
          });
        }
        function Ja(r) {
          const e = useActiveServiceTransport(),
            t = useQueryClient(),
            n = useActiveAccount();
          return useMutation({
            mutationFn: async () => {
              const u = CProtoBufMsg.Init(
                FGS.CFamilyGroups_DeleteFamilyGroup_Request,
              );
              u.Body().set_family_groupid(r);
              const p = await FGS.FamilyGroupsService.DeleteFamilyGroup(e, u);
              return Z(p.GetEResult(), "DeleteFamilyGroup"), p.Body();
            },
            onSuccess: () => {
              t.invalidateQueries({ queryKey: Yt(n) }),
                t.invalidateQueries({ queryKey: Qt(r) }),
                t.invalidateQueries({ queryKey: Ot(r) });
            },
          });
        }
        function Xa(r) {
          const e = useActiveServiceTransport(),
            t = useQueryClient();
          return useMutation({
            mutationFn: async (n) => {
              const u = CProtoBufMsg.Init(
                FGS.CFamilyGroups_ModifyFamilyGroupDetails_Request,
              );
              u.Body().set_family_groupid(r), u.Body().set_name(n);
              const p = await FGS.FamilyGroupsService.ModifyFamilyGroupDetails(
                e,
                u,
              );
              return Z(p.GetEResult(), "ModifyFamilyGroupDetails"), p.Body();
            },
            onSuccess: () => {
              t.invalidateQueries({ queryKey: Qt(r) }),
                t.invalidateQueries({ queryKey: Ot(r) });
            },
          });
        }
        function $a(r, e, t) {
          const n = useActiveServiceTransport(),
            u = useQueryClient();
          return useMutation({
            mutationFn: async () => {
              const p = CProtoBufMsg.Init(
                FGS.CFamilyGroups_InviteToFamilyGroup_Request,
              );
              p.Body().set_family_groupid(r),
                p.Body().set_receiver_steamid(e),
                p.Body().set_receiver_role(t);
              const T = await FGS.FamilyGroupsService.InviteToFamilyGroup(n, p);
              return Z(T.GetEResult(), "InviteToFamilyGroup"), T.Body();
            },
            onSuccess: () => {
              u.invalidateQueries({ queryKey: Yt(e) }),
                u.invalidateQueries({ queryKey: Qt(r) }),
                u.invalidateQueries({ queryKey: Ot(r) });
            },
          });
        }
        function Za(r) {
          const e = useActiveServiceTransport(),
            t = useActiveAccount(),
            n = useQueryClient();
          return useMutation({
            mutationFn: async () => {
              const u = CProtoBufMsg.Init(
                FGS.CFamilyGroups_JoinFamilyGroup_Request,
              );
              u.Body().set_family_groupid(r);
              const p = await FGS.FamilyGroupsService.JoinFamilyGroup(e, u);
              return Z(p.GetEResult(), "JoinFamilyGroup"), p.Body();
            },
            onSuccess: () => {
              n.invalidateQueries({ queryKey: Yt(t) }),
                n.invalidateQueries({ queryKey: Qt(r) }),
                n.invalidateQueries({ queryKey: Ot(r) });
            },
          });
        }
        function es(r, e) {
          const t = useActiveServiceTransport(),
            n = useQueryClient();
          return useMutation({
            mutationFn: async () => {
              const u = CProtoBufMsg.Init(
                FGS.CFamilyGroups_CancelFamilyGroupInvite_Request,
              );
              u.Body().set_family_groupid(r), u.Body().set_steamid_to_cancel(e);
              const p = await FGS.FamilyGroupsService.CancelFamilyGroupInvite(
                t,
                u,
              );
              return Z(p.GetEResult(), "CancelFamilyGroupInvite"), p.Body();
            },
            onSuccess: () => {
              n.invalidateQueries({ queryKey: Yt(e) }),
                n.invalidateQueries({ queryKey: Qt(r) }),
                n.invalidateQueries({ queryKey: Ot(r) });
            },
          });
        }
        function ts(r, e) {
          const t = useActiveServiceTransport(),
            n = useQueryClient();
          return useMutation({
            mutationFn: async () => {
              const u = CProtoBufMsg.Init(
                FGS.CFamilyGroups_RemoveFromFamilyGroup_Request,
              );
              u.Body().set_family_groupid(r), u.Body().set_steamid_to_remove(e);
              const p = await FGS.FamilyGroupsService.RemoveFromFamilyGroup(
                t,
                u,
              );
              return Z(p.GetEResult(), "RemoveFromFamilyGroup"), p.Body();
            },
            onSuccess: () => {
              n.invalidateQueries({ queryKey: Yt(e) }),
                n.invalidateQueries({ queryKey: Qt(r) }),
                n.invalidateQueries({ queryKey: Ot(r) });
            },
          });
        }
        function is(r) {
          const e = useActiveServiceTransport();
          return useQuery({
            queryKey: ta(r),
            queryFn: async () => {
              const t = GetCookie("clientsessionid"),
                n = t && BigInt("0x" + t).toString(),
                u = CProtoBufMsg.Init(
                  FGS.CFamilyGroups_GetUsersSharingDevice_Request,
                );
              u.Body().set_family_groupid(r),
                u.Body().set_client_instance_id(n != null ? n : void 0);
              const p = await FGS.FamilyGroupsService.GetUsersSharingDevice(
                e,
                u,
              );
              return Z(p.GetEResult(), "GetUsersSharingDevice"), p.Body();
            },
          });
        }
        function rs(r) {
          var e, t;
          const n = useActiveAccount();
          return (t =
            (e = la(r).data) == null
              ? void 0
              : e.members().find((p) => p.steamid() == n)) == null
            ? void 0
            : t.role();
        }
        function ns(r, e) {
          const t = useActiveServiceTransport();
          return useMutation({
            mutationFn: async () => {
              const n = CProtoBufMsg.Init(
                FGS.CFamilyGroups_RequestPurchase_Request,
              );
              n.Body().set_family_groupid(r),
                n.Body().set_use_account_cart(!0),
                n.Body().set_store_country_code(e);
              const u = await FGS.FamilyGroupsService.RequestPurchase(t, n);
              return Z(u.GetEResult(), "RequestPurchase"), u.Body();
            },
          });
        }
        function as(r, e) {
          const t = useActiveServiceTransport(),
            n = useActiveAccount();
          return useQuery({
            queryKey: tn(r, n),
            queryFn: async () => {
              const u = CProtoBufMsg.Init(
                FGS.CFamilyGroups_GetPurchaseRequests_Request,
              );
              u.Body().set_family_groupid(r),
                e !== void 0 && u.Body().set_rt_include_completed_since(e);
              const p = await FGS.FamilyGroupsService.GetPurchaseRequests(t, u);
              return Z(p.GetEResult(), "GetPurchaseRequests"), p.Body();
            },
          });
        }
        function ss(r, e) {
          const t = useActiveServiceTransport(),
            n = useActiveAccount();
          return useQuery({
            queryKey: tn(r, n, e),
            queryFn: async () => {
              const u = CProtoBufMsg.Init(
                FGS.CFamilyGroups_GetPurchaseRequests_Request,
              );
              u.Body().set_family_groupid(r), u.Body().add_request_ids(e);
              const p = await FGS.FamilyGroupsService.GetPurchaseRequests(t, u);
              return Z(p.GetEResult(), "GetPurchaseRequests"), p.Body();
            },
            select: (u) => {
              var p;
              return (p = u.toObject().requests) == null
                ? void 0
                : p.find(({ request_id: T }) => T === e);
            },
          });
        }
        function os(r, e, t) {
          const n = useActiveServiceTransport(),
            u = useQueryClient();
          return useMutation({
            mutationFn: async () => {
              const p = CProtoBufMsg.Init(
                FGS.CFamilyGroups_RespondToRequestedPurchase_Request,
              );
              p.Body().set_family_groupid(r),
                p.Body().set_request_id(e),
                p.Body().set_action(t);
              const T =
                await FGS.FamilyGroupsService.RespondToRequestedPurchase(n, p);
              return Z(T.GetEResult(), "RespondToRequestedPurchase"), T.Body();
            },
            onSuccess: () => {
              u.invalidateQueries({ queryKey: tn(r) }),
                u.invalidateQueries({ queryKey: Ot(r) });
            },
          });
        }
        const ca = (0, Q.createContext)({
          errorMessage: null,
          setErrorMessage: (r) => {},
        });
        function ua(r, e) {
          return r;
        }
        var ma = ((r) => (
          (r[(r.k_EFamilyQueryNone = 0)] = "k_EFamilyQueryNone"),
          (r[(r.k_EFamilyQueryLoadFamily = 1)] = "k_EFamilyQueryLoadFamily"),
          (r[(r.k_EFamilyQueryJoinFamily = 2)] = "k_EFamilyQueryJoinFamily"),
          (r[(r.k_EFamilyQueryDeclineInvite = 3)] =
            "k_EFamilyQueryDeclineInvite"),
          (r[(r.k_EFamilyQueryInviteToFamily = 4)] =
            "k_EFamilyQueryInviteToFamily"),
          (r[(r.k_EFamilyQueryCreateFamily = 5)] =
            "k_EFamilyQueryCreateFamily"),
          (r[(r.k_EFamilyQueryDeleteFamily = 6)] =
            "k_EFamilyQueryDeleteFamily"),
          (r[(r.k_EFamilyQueryModifyFamily = 7)] =
            "k_EFamilyQueryModifyFamily"),
          (r[(r.k_EFamilyQueryRemoveFromFamily = 8)] =
            "k_EFamilyQueryRemoveFromFamily"),
          (r[(r.k_EFamilyQueryGetUsersSharingDevice = 9)] =
            "k_EFamilyQueryGetUsersSharingDevice"),
          (r[(r.k_EFamilyQueryPurchaseRequest = 10)] =
            "k_EFamilyQueryPurchaseRequest"),
          (r[(r.k_EFamilyQueryGetPurchaseRequests = 11)] =
            "k_EFamilyQueryGetPurchaseRequests"),
          (r[(r.k_EFamilyQueryDeclinePurchaseRequest = 12)] =
            "k_EFamilyQueryDeclinePurchaseRequest"),
          (r[(r.k_EFamilyQueryLoadHistory = 13)] = "k_EFamilyQueryLoadHistory"),
          (r[(r.k_EFamilyQueryLoadCart = 14)] = "k_EFamilyQueryLoadCart"),
          (r[(r.k_EFamilyQuerySetCooldownOverrides = 15)] =
            "k_EFamilyQuerySetCooldownOverrides"),
          (r[(r.k_EFamilyQueryResendInvite = 16)] =
            "k_EFamilyQueryResendInvite"),
          r
        ))(ma || {});
        const un = {
          [R.nO]: "#FamilyManagement_ErrorInternalServerError",
          [R.zi]: "#FamilyManagement_ErrorInternalServerError",
          [R.S7]: "#FamilyManagement_ErrorInternalServerError",
          [R.Te]: "#FamilyManagement_ErrorInternalServerError",
          [R.sW]: "#FamilyManagement_AccessDenied",
          [R.p]: "#FamilyManagement_ErrorNoMatch",
          [R.uN]: "#FamilyManagement_ErrorAccountDisabled",
          [R.$U]: "#FamilyManagement_ErrorNoActiveInvite",
          [R.ZI]: "#FamilyManagement_PartnerAccountCannotJoinAsChild",
          [R.UT]: "#FamilyManagement_ErrorFamilySizeLimitExceeded",
          [R.TE]: "#FamilyManagement_ErrorLimitExceeded",
          [R.B1]: "#FamilyManagement_ErrorAccountActivityLimitExceeded",
          [R.Nb]: "#FamilyManagement_LimitedAccount_CreateFamily",
          [R.h_]: { 5: "#FamilyManagement_RateLimitExceeded_CreateFamily" },
          [R.lG]: {
            5: "#FamilyManagement_RegionLocked_CreateFamily",
            2: "#FamilyManagement_RegionLocked_JoinFamily",
          },
          [R.zL]: { 2: "#FamilyManagement_Household_JoinFamily" },
          [R.iC]: {
            5: "#FamilyManagement_ErrorAccountLimitExceeded_CreateFamily",
            2: "#FamilyManagement_ErrorAccountLimitExceeded_JoinFamily",
            8: "#FamilyManagement_ErrorAccountLimitExceeded_RemoveFromFamily",
          },
          [R.Ze]: {
            2: "#FamilyManagement_ErrorDuplicateRequest_JoinFamily",
            4: "#FamilyManagement_ErrorDuplicateRequest_InviteToFamily",
            8: "#FamilyManagement_ErrorDuplicateRequest_RemoveFromFamily",
          },
          [R.fb]: { 4: "#FamilyManagement_ErrorFailed_NoAdditionalDetails" },
        };
        function da(r, e, t, n) {
          let u = "";
          if (r in un) {
            const p = un[r];
            if (typeof p == "string") u = Localize(p, ...n);
            else {
              const T = p;
              t in T && (u = Localize(T[t], ...n));
            }
          }
          return ua(Localize(e, u), r);
        }
        function mn() {
          const { setErrorMessage: r } = useContext(ca);
          return { setErrorMessage: r };
        }
        function ls(r, e, t) {
          const { setErrorMessage: n } = mn(),
            { isError: u, error: p } = r,
            T = sa();
          useEffect(() => {
            if (u) {
              const I = p,
                x = [];
              if (
                I === k_EResultLimitExceeded ||
                I === k_EResultAccountActivityLimitExceeded
              ) {
                let L;
                T.isSuccess &&
                  T.data &&
                  (L = T.data.cooldown_seconds_remaining()),
                  x.push(fa(L));
              }
              n(da(I, e, t, x));
            }
          }, [n, u, p, e, t, T.isSuccess, T.data]);
        }
        function fa(r) {
          if (!r) return Localize("#FamilyManagement_LoadingPlaceholder");
          const e = {
            month: "long",
            day: "numeric",
            year: "numeric",
            weekday: void 0,
          };
          return LocalizeDateHumanReadable(Date.now() / 1e3 + r, e);
        }
        function cs(r, e) {
          const { setErrorMessage: t } = mn();
          useEffect(() => {
            r.isError && t(Localize(e));
          }, [t, r.isError, e]);
        }
        function us(r) {
          const e = useActiveServiceTransport();
          return useQuery({
            queryKey: Ot(r),
            queryFn: async () => {
              const t = CProtoBufMsg.Init(
                FGS.CFamilyGroups_GetChangeLog_Request,
              );
              t.Body().set_family_groupid(r);
              const n = await FGS.FamilyGroupsService.GetChangeLog(e, t);
              return (
                Z(n.GetEResult(), "GetFamilyGroupChangeLog"), n.Body().changes()
              );
            },
            staleTime: 0,
          });
        }
        function ms(r) {
          const e = useActiveServiceTransport();
          return useQuery({
            queryKey: ia(r),
            queryFn: async () => {
              const t = CProtoBufMsg.Init(CShoppingCart_GetContents_Request);
              t.Body().set_gidshoppingcart(r);
              const n = await ShoppingCartService.GetShoppingCartContents(e, t);
              return Z(n.GetEResult(), "GetShoppingCartContents"), n.Body();
            },
          });
        }
        function ds(r) {
          const e = useActiveServiceTransport(),
            t = useQueryClient();
          return useMutation({
            mutationFn: async (n) => {
              const u = CProtoBufMsg.Init(
                FGS.CFamilyGroups_SetFamilyCooldownOverrides_Request,
              );
              u.Body().set_family_groupid(r), u.Body().set_cooldown_count(n);
              const p =
                await FGS.FamilyGroupsService.SetFamilyCooldownOverrides(e, u);
              return Z(p.GetEResult(), "SetFamilyCooldownOverrides"), p.Body();
            },
            onSuccess: () => {
              t.invalidateQueries({ queryKey: Qt(r) }),
                t.invalidateQueries({ queryKey: Ot(r) });
            },
          });
        }
        function ya(r, e) {
          return `${gt.TS.STORE_BASE_URL}cart/purchaserequest/${r}/${e}`;
        }
        function fs(r) {
          return `${Config.STORE_BASE_URL}cart/purchaserequested/${r}`;
        }
        function ys(r, e) {
          const t = useActiveServiceTransport(),
            n = useQueryClient();
          return useMutation({
            mutationFn: async () => {
              const u = CProtoBufMsg.Init(
                FGS.CFamilyGroups_CreateFamilyGroup_Request,
              );
              u.Body().set_steamid(r), u.Body().set_name(e);
              const p = await FGS.FamilyGroupsService.CreateFamilyGroup(t, u);
              return (
                Z(p.GetEResult(), "ForceCreateFamilyGroup"),
                p.Body().family_groupid()
              );
            },
            onSuccess: () => {
              n.invalidateQueries({ queryKey: Yt(r) });
            },
          });
        }
        function dn(r, e, t, n) {
          return [
            "get_shared_library_apps",
            r,
            e == null ? void 0 : e.bIncludeOwn,
            e == null ? void 0 : e.bIncludeExcluded,
            e == null ? void 0 : e.bIncludeNonGames,
            e == null ? void 0 : e.for_account_id,
            t,
            n,
          ];
        }
        function ps(r, e) {
          const t = useActiveAccount(),
            { settings: n, mapAppsAllowed: u } = useParentalSettings(t).data,
            p = useIsCurrentUserParentalLocked(),
            T = useActiveServiceTransport(),
            {
              bIncludeOwn: I,
              bIncludeExcluded: x,
              bIncludeNonGames: L,
              for_account_id: te,
            } = e != null ? e : {},
            Bt = (e == null ? void 0 : e.enabled) !== void 0 ? e.enabled : !0,
            E = dn(r, e, n, p),
            wt = (re) => !BIsAppBlocked(re.appid(), p, n, u);
          return useQuery({
            queryKey: E,
            queryFn: async () => {
              const re = CProtoBufMsg.Init(
                FGS.CFamilyGroups_GetSharedLibraryApps_Request,
              );
              if (
                (re.Body().set_family_groupid(r),
                re.Body().set_include_own(I),
                re.Body().set_include_excluded(x),
                re.Body().set_language(Config.LANGUAGE),
                re.Body().set_include_non_games(L),
                te)
              ) {
                const C = CSteamID.InitFromAccountID(te, Config.EUNIVERSE);
                re.Body().set_steamid(C.ConvertTo64BitString());
              }
              const Xt = await FGS.FamilyGroupsService.GetSharedLibraryApps(
                T,
                re,
              );
              return (
                Z(Xt.GetEResult(), "GetSharedLibraryApps"),
                Xt.Body()
                  .apps()
                  .filter(wt)
                  .map((C) => C.toObject())
              );
            },
            enabled: !!n && Bt,
            placeholderData: keepPreviousData,
            select: e == null ? void 0 : e.select,
          });
        }
        function gs(r, e) {
          var t;
          const n = useQueryClient(),
            u = useActiveAccount(),
            { settings: p } =
              (t = useParentalSettings(u).data) != null ? t : {},
            T = useIsCurrentUserParentalLocked(),
            I = dn(r, e, p, T);
          return useCallback(() => {
            n.invalidateQueries({ queryKey: I });
          }, [n, I]);
        }
        function Br(r, e) {
          let t = r.sort_as || r.name,
            n = e.sort_as || e.name;
          return stricmp(t, n);
        }
        function fn(r, e) {
          return e.rt_time_acquired - r.rt_time_acquired || Br(r, e);
        }
        function pa(r, e, t) {
          var n, u;
          if (!r && e.length === 0) return !0;
          const p = (n = t.name) == null ? void 0 : n.toLocaleLowerCase(),
            T = r.toLocaleLowerCase(),
            I =
              (p == null ? void 0 : p.includes(T)) ||
              ((u = t.appid) == null ? void 0 : u.toString()) == T;
          let x = !0;
          if (t.content_descriptors) {
            for (const L of e)
              if (!t.content_descriptors.includes(L)) {
                x = !1;
                break;
              }
          }
          return I && x;
        }
        function Bs(r, e, t, n = []) {
          const u = useMemo(
              () => (r == null ? void 0 : r.filter((T) => pa(t, n, T))) || [],
              [r, t, n],
            ),
            p = useCallback(
              (T, I) => {
                let x = Br;
                switch (e) {
                  case "alpha-asc":
                    x = Br;
                    break;
                  case "alpha-desc":
                    x = (L, te) => Br(te, L);
                    break;
                  case "date_acquired-asc":
                    x = (L, te) => fn(te, L);
                    break;
                  case "date_acquired-desc":
                    x = fn;
                    break;
                }
                return x(T, I);
              },
              [e],
            );
          return useMemo(() => u.slice().sort(p), [u, p]);
        }
        function bs(r, e) {
          const t = useActiveServiceTransport(),
            n = useQueryClient(),
            u = useActiveAccount();
          return useMutation({
            mutationFn: async (p) => {
              const T = CProtoBufMsg.Init(
                FGS.CFamilyGroups_ConfirmJoinFamilyGroup_Request,
              );
              T.Body().set_family_groupid(r),
                T.Body().set_invite_id(e),
                T.Body().set_nonce(p);
              const I = await FGS.FamilyGroupsService.ConfirmJoinFamilyGroup(
                t,
                T,
              );
              return Z(I.GetEResult(), "ConfirmJoinFamilyGroup"), I.Body();
            },
            onSuccess: () => {
              n.invalidateQueries({ queryKey: Yt(u) }),
                n.invalidateQueries({ queryKey: Qt(r) }),
                n.invalidateQueries({ queryKey: Ot(r) });
            },
          });
        }
        function Ss(r, e, t) {
          const n = useActiveServiceTransport(),
            u = useQueryClient();
          return useMutation({
            mutationFn: async () => {
              const p = CProtoBufMsg.Init(
                FGS.CFamilyGroups_ConfirmInviteToFamilyGroup_Request,
              );
              p.Body().set_family_groupid(r),
                p.Body().set_invite_id(e),
                p.Body().set_nonce(t);
              const T =
                await FGS.FamilyGroupsService.ConfirmInviteToFamilyGroup(n, p);
              return Z(T.GetEResult(), "ConfirmInviteToFamilyGroup"), T.Body();
            },
            onSuccess: () => {
              u.invalidateQueries({ queryKey: Qt(r) }),
                u.invalidateQueries({ queryKey: Ot(r) });
            },
          });
        }
        function ws(r, e) {
          const t = useActiveServiceTransport();
          return useMutation({
            mutationFn: async () => {
              const n = CProtoBufMsg.Init(
                FGS.CFamilyGroups_ResendInvitationToFamilyGroup_Request,
              );
              n.Body().set_family_groupid(r), n.Body().set_steamid(e);
              const u =
                await FGS.FamilyGroupsService.ResendInvitationToFamilyGroup(
                  t,
                  n,
                );
              return Z(u.GetEResult(), "ResendInvitationToFamilyGroup"), u;
            },
          });
        }
        function ga(r) {
          let e = [];
          r.sort((n, u) => n.time_start - u.time_start);
          let t = new Map();
          for (const n of r) {
            let u = t.get(n.appid);
            u === void 0
              ? t.set(n.appid, n)
              : n.time_start <= u.time_end
                ? (u.time_end = Math.max(u.time_end, n.time_end))
                : (e.push(u), t.set(n.appid, n));
          }
          for (const n of t.values()) e.push(n);
          return e.sort((n, u) => n.time_start - u.time_start), e;
        }
        function Ms(r) {
          const e = useActiveServiceTransport();
          return useQuery({
            queryKey: ra(r),
            queryFn: async () => {
              const t = CProtoBufMsg.Init(
                FS.CPlayer_GetRecentPlaytimeSessionsForChild_Request,
              );
              t.Body().set_steamid(r);
              const n =
                await FS.PlayerService.GetRecentPlaytimeSessionsForChild(e, t);
              Z(n.GetEResult(), "GetRecentPlaytimeSessionsForChild");
              let u = n.Body().toObject().sessions || [];
              return ga(u);
            },
          });
        }
        function vs(r) {
          const e = useActiveServiceTransport();
          return useQuery({
            queryKey: na(r),
            queryFn: async () => {
              var t, n;
              const u = CProtoBufMsg.Init(
                FGS.CFamilyGroups_GetPlaytimeSummary_Request,
              );
              u.Body().set_family_groupid(r);
              const p = await FGS.FamilyGroupsService.GetPlaytimeSummary(e, u);
              Z(p.GetEResult(), "GetPlaytimeSummary");
              let T = (t = p.Body().toObject().entries) != null ? t : [];
              T.sort((x, L) => L.seconds_played - x.seconds_played);
              let I =
                (n = p.Body().toObject().entries_by_owner) != null ? n : [];
              return (
                I.sort((x, L) => L.seconds_played - x.seconds_played),
                { borrowed: T, loaned: I }
              );
            },
            enabled: r !== "0",
          });
        }
        function hs(r) {
          const e = useActiveServiceTransport(),
            t = useActiveAccount(),
            n = useQueryClient();
          return useMutation({
            mutationFn: async () => {
              const u = CProtoBufMsg.Init(
                FGS.CFamilyGroups_UndeleteFamilyGroup_Request,
              );
              u.Body().set_family_groupid(r);
              const p = await FGS.FamilyGroupsService.UndeleteFamilyGroup(e, u);
              return Z(p.GetEResult(), "UndeleteFamilyGroup"), p;
            },
            onSuccess: () => {
              n.invalidateQueries({ queryKey: Yt(t) }),
                n.invalidateQueries({ queryKey: Qt(r) }),
                n.invalidateQueries({ queryKey: Ot(r) });
            },
          });
        }
        function Rs(r, e) {
          const t = useActiveServiceTransport(),
            n = useQueryClient();
          return useMutation({
            mutationFn: async () => {
              const u = CProtoBufMsg.Init(
                FGS.CFamilyGroups_ForceAcceptInvite_Request,
              );
              u.Body().set_family_groupid(r), u.Body().set_steamid(e);
              const p = await FGS.FamilyGroupsService.ForceAcceptInvite(t, u);
              return Z(p.GetEResult(), "ForceAcceptInvite"), null;
            },
            onSuccess: () => {
              n.invalidateQueries({ queryKey: Yt(e) }),
                n.invalidateQueries({ queryKey: Qt(r) }),
                n.invalidateQueries({ queryKey: Ot(r) });
            },
          });
        }
        function Fs(r, e) {
          const t = useActiveServiceTransport();
          return useQuery({
            queryKey: aa(r, e),
            queryFn: async () => {
              const n = CProtoBufMsg.Init(
                FGS.CFamilyGroups_GetInviteCheckResults_Request,
              );
              n.Body().set_family_groupid(r), n.Body().set_steamid(e);
              const u = await FGS.FamilyGroupsService.GetInviteCheckResults(
                t,
                n,
              );
              return (
                Z(u.GetEResult(), "GetInviteCheckResults"), u.Body().toObject()
              );
            },
          });
        }
        function _s(r, e) {
          return r.members().find((t) => t.steamid() == e);
        }
        var Ba = F(71742),
          Ai = F(16277),
          yn = Object.defineProperty,
          ba = Object.getOwnPropertyDescriptor,
          Sa = (r, e, t) =>
            e in r
              ? yn(r, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: t,
                })
              : (r[e] = t),
          rr = (r, e, t, n) => {
            for (
              var u = n > 1 ? void 0 : n ? ba(e, t) : e, p = r.length - 1, T;
              p >= 0;
              p--
            )
              (T = r[p]) && (u = (n ? T(e, t, u) : T(u)) || u);
            return n && u && yn(e, t, u), u;
          },
          ht = (r, e, t) => Sa(r, typeof e != "symbol" ? e + "" : e, t);
        const wa = {
          [s.Vv.wY]: {
            displayNameLoc: "#SteamNotification_HelpRequest_Author",
            titleLoc: "#SteamNotification_HelpRequest_Title",
            bodyLoc: (r) => ({
              locString: "#SteamNotification_HelpRequest_Body",
              params: [r.ticket],
            }),
            link: (r) => gt.TS.HELP_BASE_URL + "wizard/HelpRequest/" + r.ticket,
          },
          [s.Vv.wp]: {
            displayNameLoc: "#SteamNotifications_MajorSale",
            titleLoc: (r) => ({ locString: r.title }),
            bodyLoc: (r) =>
              (0, Si.Y2)() && r.link.includes("https://store.steampowered.com")
                ? "#SteamNotifications_MajorSale_SteamChina_Title"
                : r.body,
            image: (r) => r.image,
            link: (r) =>
              (0, Si.Y2)() && r.link.includes("https://store.steampowered.com")
                ? r.link.replace(
                    "https://store.steampowered.com",
                    gt.TS.STORE_BASE_URL,
                  )
                : r.link,
          },
          [s.Vv.e9]: {
            displayNameLoc: (r) => r.display_name,
            titleLoc: (r) => r.title,
            bodyLoc: (r) => r.body,
            image: (r) => r.image,
            link: (r) => r.link,
          },
          [s.Vv.oe]: {
            titleLoc: "#SteamNotification_ModeratorMessage_Title",
            link: (r) =>
              gt.TS.COMMUNITY_BASE_URL + "my/moderatormessages/" + r.msgid,
          },
          [s.Vv.FK]: {
            displayNameLoc: (r) =>
              r.is_limited_launch
                ? "#Notification_LimitedLaunchInviteTitle"
                : "#Notification_PlaytestInviteTitle",
            titleLoc: (r) =>
              r.is_limited_launch
                ? "#Notification_LimitedLaunchInviteBody"
                : "#Notification_PlaytestInviteBody",
            image: (r) => r.appid,
            link: (r) =>
              gt.TS.STORE_BASE_URL + "account/gatedaccess?appid=" + r.appid,
          },
          [s.Vv.Iz]: {
            titleLoc: (r) => {
              switch (r.status) {
                case Ai.ZQ.hj:
                  return "#Notification_ReportedContentAction_Received";
                case Ai.ZQ.O0:
                  return "#Notification_ReportedContentAction_Sanctioned";
                case Ai.ZQ.WI:
                  return "#Notification_ReportedContentAction_Acquitted";
                case Ai.ZQ.xX:
                  return "#Notification_ReportedContentAction_DisputeReceived";
                case Ai.ZQ.qy:
                  return "#Notification_ReportedContentAction_DisputeSanctioned";
                case Ai.ZQ.Si:
                  return "#Notification_ReportedContentAction_DisputeAcquitted";
                default:
                  return "#Notification_ReportedContentAction_Unknown";
              }
            },
            link: (r) =>
              `${gt.TS.COMMUNITY_BASE_URL}my/reportedcontent/${r.subject_type}-${r.subject_group_id}-${r.subject_id}`,
          },
        };
        function pn(r) {
          if (r !== void 0) return wa[r];
        }
        function gn(r) {
          return !!pn(r);
        }
        const Ma = {
          [s.Vv.Rj]: {
            steamidAttribute: "inviter",
            titleLoc: "#SteamNotifications_FamilyInviteTitle",
            bodyLoc: "#SteamNotifications_FamilyInviteBody",
            url: (r) =>
              `${gt.TS.STORE_BASE_URL}account/familymanagement/join?invitation=${r.familyid}`,
          },
          [s.Vv.Sx]: {
            steamidAttribute: "steamid",
            titleLoc: "#SteamNotifications_ParentalFeatureRequestTitle",
            bodyLoc: "#SteamNotifications_ParentalFeatureRequestBody",
            url: () =>
              `${gt.TS.STORE_BASE_URL}account/familymanagement?tab=requests`,
          },
          [s.Vv.Cz]: {
            steamidAttribute: "requestor_steamid",
            titleLoc: "#SteamNotifications_FamilyPurchaseRequestTitle",
            bodyLoc: "#SteamNotifications_FamilyPurchaseRequestBody",
            url: (r) => ya(r.familyid, r.request_id),
          },
          [s.Vv.HN]: {
            steamidAttribute: "responder_steamid",
            titleLoc: (r) =>
              r.action == bt
                ? "#SteamNotifications_FamilyPurchaseRequestResponseDeclinedTitle"
                : "",
            bodyLoc: (r) =>
              r.action == bt
                ? "#SteamNotifications_FamilyPurchaseRequestDeclinedBody"
                : "",
            url: () =>
              `${gt.TS.STORE_BASE_URL}account/familymanagement?tab=requests`,
          },
          [s.Vv.j3]: {
            steamidAttribute: "steamid",
            titleLoc: "#SteamNotifications_ParentalPlaytimeRequestTitle",
            bodyLoc: "#SteamNotifications_ParentalPlaytimeRequestBody",
            url: () =>
              `${gt.TS.STORE_BASE_URL}account/familymanagement?tab=requests`,
          },
          [s.Vv.uH]: {
            steamidAttribute: "steamid_approver",
            titleLoc: (r) =>
              r.approved
                ? "#SteamNotifications_ParentalFeatureAccessResponseTitleApproved"
                : "#SteamNotifications_ParentalFeatureAccessResponseTitleDeclined",
            bodyLoc: (r) =>
              r.approved
                ? "#SteamNotifications_ParentalFeatureAccessResponseBodyApproved"
                : "#SteamNotifications_ParentalFeatureAccessResponseBodyDeclined",
            url: () =>
              `${gt.TS.STORE_BASE_URL}account/familymanagement?tab=requests`,
          },
          [s.Vv.JN]: {
            steamidAttribute: "steamid_approver",
            titleLoc: (r) =>
              r.approved
                ? "#SteamNotifications_ParentalPlaytimeResponseTitleApproved"
                : "#SteamNotifications_ParentalPlaytimeResponseTitleDeclined",
            bodyLoc: (r) =>
              r.approved
                ? "#SteamNotifications_ParentalPlaytimeResponseBodyApproved"
                : "#SteamNotifications_ParentalPlaytimeResponseBodyDeclined",
            url: () =>
              `${gt.TS.STORE_BASE_URL}account/familymanagement?tab=requests`,
          },
        };
        function Bn(r) {
          if (r !== void 0) return Ma[r];
        }
        function bn(r) {
          return !!Bn(r);
        }
        const va = [
          s.Vv.v_,
          s.Vv.pZ,
          s.Vv.K,
          s.Vv.hW,
          s.Vv.XJ,
          s.Vv.an,
          s.Vv.Y9,
          s.Vv.YE,
          s.Vv.bh,
          s.Vv.js,
          s.Vv.mr,
        ];
        function Sn(r) {
          return va.findIndex((e) => e == r) != null;
        }
        function ha(r) {
          return r.hidden ? !1 : Ra(r.notification_type) && Sr(r.body_data);
        }
        function Ra(r) {
          return gn(r) || bn(r) || Sn(r);
        }
        var Fa = ((r) => (
          (r[(r.New = 0)] = "New"),
          (r[(r.Update = 1)] = "Update"),
          (r[(r.Remove = 2)] = "Remove"),
          r
        ))(Fa || {});
        const zs = "Test_",
          _a = 3600 * 48,
          za = 600,
          wn = !1,
          nn = new qt.wd("SteamNotificationStore"),
          Gi = nn.Debug,
          Ci = nn.Error,
          Ta = nn.Warning;
        class Pi {
          constructor() {
            ht(this, "m_rgNotificationRollups", []),
              ht(this, "m_summary", br()),
              ht(this, "m_bLoaded", !1),
              ht(this, "m_nUnviewed", 0),
              ht(this, "m_rgNotifyServerRead", []),
              ht(this, "m_rgNotifyServerHidden", []),
              ht(this, "m_keyNotifyServerRead", ""),
              ht(this, "m_keyNotifyServerHidden", ""),
              ht(this, "m_steamid"),
              ht(this, "m_transport"),
              ht(this, "m_rgUnreadNotificationIDs", []),
              ht(this, "m_rgNewRollupIDs", new Map()),
              ht(this, "m_rgTestNotifications", []),
              ht(this, "m_currentNotificationsData", null),
              ht(this, "m_strRemoteClientID", ""),
              ht(this, "m_eTargetClientType", s.rB.D),
              ht(this, "m_fnOnNotificationCallback", null),
              (0, Tt.Gn)(this);
          }
          BHasNotificationsData() {
            return this.m_currentNotificationsData != null;
          }
          setTransport(e) {
            this.m_transport = e;
          }
          RegisterOnNotificationCallback(e) {
            this.m_fnOnNotificationCallback = e;
          }
          SetClientFilters(e, t = s.rB.D) {
            (this.m_strRemoteClientID = e), (this.m_eTargetClientType = t);
          }
          NotifyServerNotificationsRead(e) {
            this.m_rgNotifyServerRead.push(...e), this.UpdateServer();
          }
          NotifyServerNotificationsHidden(e) {
            this.m_rgNotifyServerHidden.push(...e), this.UpdateServer();
          }
          BSendToCallbackAsNew(e) {
            return (
              !e.read &&
              !Tn(e) &&
              !this.m_rgUnreadNotificationIDs.includes(e.notification_id)
            );
          }
          Dev_AddTestNotification(e) {}
          Dev_UpdateTestNotificationReadState(e, t) {
            const n = this.m_rgTestNotifications.findIndex(
              (u) => u.notification_id == e,
            );
            return n !== -1 && this.m_rgTestNotifications[n].read != t
              ? ((this.m_rgTestNotifications[n].read = t), !0)
              : !1;
          }
          UpdateServer() {
            if (this.m_rgNotifyServerRead.length > 0) {
              const e = q.w.Init(s.V4);
              e.Body().set_notification_ids(this.m_rgNotifyServerRead),
                s.Fn.MarkNotificationsRead(this.m_transport, e) &&
                  (this.m_rgNotifyServerRead = []);
            }
            if (this.m_rgNotifyServerHidden.length > 0) {
              const e = q.w.Init(s.b$);
              e.Body().set_notification_ids(this.m_rgNotifyServerHidden),
                s.Fn.HideNotification(this.m_transport, e) &&
                  (this.m_rgNotifyServerHidden = []);
            }
          }
          MarkItemRead(e, t = !1) {
            var n;
            let u = this.m_rgNotificationRollups.findIndex(
              (T) => T.item.notification_id == e,
            );
            if (u === -1) {
              t
                ? this.NotifyServerNotificationsRead([e])
                : Ci(
                    "Attempted to mark notification read that is not in the notification store",
                  );
              return;
            }
            let p = this.m_rgNotificationRollups[u];
            if (p.item.read) {
              Ci("Attempted to mark notification read that is already read");
              return;
            }
            if (
              ((p.item.read = !0),
              ((n = p.rgunread) == null ? void 0 : n.length) > 0)
            ) {
              this.ReduceNewTotals(p.type, p.rgunread.length);
              let T = [];
              p.rgunread.forEach((I) => {
                T.push(I);
              }),
                p.rgread.push(...p.rgunread),
                (p.rgunread = []),
                this.NotifyServerNotificationsRead(T);
            }
          }
          MarkItemHidden(e) {
            var t, n;
            let u = this.m_rgNotificationRollups.findIndex(
              (T) => T.item.notification_id == e,
            );
            if (u === -1) {
              Ci(
                "Attempted to mark notification hidden that is not in the notification store",
              );
              return;
            }
            let p = this.m_rgNotificationRollups[u];
            (p.item.hidden = !0),
              ((t = p.rgunread) == null ? void 0 : t.length) > 0 &&
                this.ReduceNewTotals(
                  p.type,
                  (n = p.rgunread) == null ? void 0 : n.length,
                ),
              this.NotifyServerNotificationsHidden([
                ...p.rgunread,
                ...p.rgread,
              ]);
          }
          ReduceNewTotals(e, t) {
            sn(this.m_summary, e, -t);
          }
          MarkAllItemsViewed() {
            const e = q.w.Init(s.nH);
            e.Body().set_remote_client_id(this.m_strRemoteClientID),
              e.Body().set_target_client_type(this.m_eTargetClientType),
              s.Fn.MarkNotificationsViewed(this.m_transport, e),
              (this.m_nUnviewed = 0);
          }
          MarkAllItemsRead(e) {
            let t = [],
              n = [],
              u = 0;
            const p = e != null ? e : this.m_rgNotificationRollups;
            return (
              p.forEach((T, I) => {
                T.rgunread.length > 0 &&
                  (T.rgunread.forEach((x) => {
                    t.push(x);
                  }),
                  n.push(I));
              }),
              t.length > 0 &&
                ((this.m_summary = Object.assign(br(), {
                  pending_gifts: this.m_summary.pending_gifts,
                  pending_invites: this.m_summary.pending_invites,
                  pending_family_invites: this.m_summary.pending_family_invites,
                })),
                n.forEach((T) => {
                  let I = p[T];
                  (I.item.read = !0), (I.rgunread = []);
                }),
                this.NotifyServerNotificationsRead(t)),
              t.length + u
            );
          }
          ApplyNotificationsUpdate(e) {
            var t, n;
            if (
              (Gi("ApplyNotificationsUpdate", e),
              !e ||
                (!((t = e.notifications) != null && t.length) &&
                  e.pending_friend_count === void 0 &&
                  e.pending_gift_count === void 0))
            ) {
              Gi("Error: ApplyNotificationsUpdate was called with no data");
              return;
            }
            if (!this.m_currentNotificationsData) {
              Gi(
                "Error: ApplyNotificationsUpdate was called before this.m_currentNotificationsData was set",
              );
              return;
            }
            const u = this.m_currentNotificationsData;
            (n = e.notifications) == null ||
              n.forEach((p) => {
                const T = u.notifications.findIndex(
                  (I) => I.notification_id == p.notification_id,
                );
                T != -1
                  ? Object.assign(u.notifications[T], p)
                  : u.notifications.push(p);
              }),
              e.pending_friend_count !== void 0 &&
                (this.m_currentNotificationsData.pending_friend_count =
                  e.pending_friend_count),
              e.pending_gift_count !== void 0 &&
                (this.m_currentNotificationsData.pending_gift_count =
                  e.pending_gift_count),
              e.pending_family_invite_count !== void 0 &&
                (this.m_currentNotificationsData.pending_family_invite_count =
                  e.pending_family_invite_count),
              this.ProcessNotifications();
          }
          ProcessNewNotificationPayload(e) {
            (this.m_currentNotificationsData = JSON.parse(JSON.stringify(e))),
              this.ProcessNotifications();
          }
          ProcessNotifications() {
            var e, t, n, u, p, T, I, x;
            let L = [],
              te = br(),
              Bt = 0;
            if (
              ((t =
                (e = this.m_currentNotificationsData) == null
                  ? void 0
                  : e.notifications) == null ||
                t.forEach((E) => {
                  this.BExcludeClientTargetedNotification(E) ||
                    (this.m_rgNotifyServerHidden.length > 0 &&
                      this.m_rgNotifyServerHidden.findIndex(
                        (re) => re == E.notification_id,
                      ) !== -1 &&
                      (E.hidden = !0),
                    ha(E) &&
                      (this.m_rgNotifyServerRead.length > 0 &&
                        this.m_rgNotifyServerRead.findIndex(
                          (re) => re == E.notification_id,
                        ) !== -1 &&
                        (E.read = !0),
                      E.read || sn(te, E.notification_type, 1),
                      E.viewed || Bt++,
                      this.AddNotificationToRollups(L, E)));
                }),
              L.sort((E, wt) => E.timestamp - wt.timestamp),
              this.m_fnOnNotificationCallback)
            ) {
              for (const E of L)
                if (E.bSendToCallbackAsNew)
                  this.m_rgNewRollupIDs.set(
                    E.rollup_key,
                    JSON.parse(JSON.stringify(E)),
                  ),
                    this.m_fnOnNotificationCallback(E, 0);
                else if (this.m_rgNewRollupIDs.has(E.rollup_key)) {
                  let wt = this.m_rgNewRollupIDs.get(E.rollup_key);
                  (wt.item.read != E.item.read ||
                    wt.item.viewed != E.item.viewed) &&
                    (this.m_rgNewRollupIDs.set(
                      E.rollup_key,
                      JSON.parse(JSON.stringify(E)),
                    ),
                    this.m_fnOnNotificationCallback(E, 1));
                }
              for (const [E, wt] of this.m_rgNewRollupIDs)
                L.findIndex((re) => re.rollup_key == E) == -1 &&
                  (this.m_fnOnNotificationCallback(wt, 2),
                  this.m_rgNewRollupIDs.delete(E));
            }
            L.reverse(),
              (te.pending_gifts =
                (u =
                  (n = this.m_currentNotificationsData) == null
                    ? void 0
                    : n.pending_gift_count) != null
                  ? u
                  : 0),
              (te.pending_invites =
                (T =
                  (p = this.m_currentNotificationsData) == null
                    ? void 0
                    : p.pending_friend_count) != null
                  ? T
                  : 0),
              (te.pending_family_invites =
                (x =
                  (I = this.m_currentNotificationsData) == null
                    ? void 0
                    : I.pending_family_invite_count) != null
                  ? x
                  : 0),
              (this.m_rgNotificationRollups = L.slice()),
              (this.m_summary = te),
              (this.m_bLoaded = !0),
              (this.m_nUnviewed = Bt);
          }
          BExcludeClientTargetedNotification(e) {
            const t = Sr(e.body_data);
            return t
              ? t.remote_client_id &&
                this.m_strRemoteClientID != t.remote_client_id
                ? !0
                : !!(
                    t.target_client_types &&
                    !(this.m_eTargetClientType & t.target_client_types)
                  )
              : !1;
          }
          BReplaceRollupItem(e, t) {
            return e.read != t.read
              ? t.read
              : (e.read && t.read) || t.viewed == e.viewed
                ? t.timestamp < e.timestamp
                : !e.viewed && t.viewed
                  ? !0
                  : e.viewed && t.viewed
                    ? t.viewed < e.viewed
                    : !1;
          }
          AddNotificationToRollups(e, t) {
            var n, u, p, T;
            const I = this.BSendToCallbackAsNew(t);
            I && this.m_rgUnreadNotificationIDs.push(t.notification_id);
            let x = t.notification_type;
            switch (x) {
              case s.Vv.v_:
                {
                  const ee = nr(t);
                  if (!ee) return;
                  const Mr =
                    "comment_" +
                    ((n = ee.owner_steam_id) == null
                      ? void 0
                      : n.GetAccountID()) +
                    "_" +
                    ee.forum_id +
                    "_" +
                    ee.topic_id;
                  let vr = e.findIndex((jt) => jt.rollup_key == Mr);
                  if (vr == -1)
                    e.push({
                      type: x,
                      rollup_key: Mr,
                      item: t,
                      rollup_count: 1,
                      timestamp: t.timestamp,
                      rgunread: t.read ? [] : [t.notification_id],
                      rgread: t.read ? [t.notification_id] : [],
                      bSendToCallbackAsNew: I,
                      url: Mn(ee),
                    });
                  else {
                    let jt = e[vr];
                    this.BReplaceRollupItem(t, jt.item) &&
                      ((!wn || jt.item.read) && (jt.url = Mn(ee)),
                      (jt.item = t),
                      (jt.timestamp = t.timestamp),
                      (jt.bSendToCallbackAsNew = I)),
                      (jt.rollup_count = jt.rollup_count + 1),
                      t.read
                        ? jt.rgread.push(t.notification_id)
                        : jt.rgunread.push(t.notification_id);
                  }
                  (u = ee.json_data) != null &&
                    u.app_id &&
                    D.A.Get().QueueAppRequest(ee.json_data.app_id, {
                      include_assets: !0,
                    });
                }
                break;
              case s.Vv.hW:
                const L = nr(t);
                if (L) {
                  const ee = "item_" + L.appid;
                  this.AddNotificationToRollupByAppID(e, t, ee, x, I, L.appid);
                }
                break;
              case s.Vv.Y9:
                const te = (p = nr(t)) == null ? void 0 : p.appid.toString();
                if (te) {
                  const ee = "asyncgame_" + te;
                  this.AddNotificationToRollupByAppID(e, t, ee, x, I, te);
                }
                break;
              case s.Vv.Iz:
                const Bt = nr(t),
                  E = Bt == null ? void 0 : Bt.report_id,
                  wt = Bt == null ? void 0 : Bt.subject_type,
                  re = Bt == null ? void 0 : Bt.subject_group_id,
                  Xt = Bt == null ? void 0 : Bt.subject_id,
                  C = `contentreport_${E}`;
                let ji = e.findIndex((ee) => ee.rollup_key == C);
                if (ji == -1)
                  e.push({
                    type: x,
                    rollup_key: C,
                    item: t,
                    rollup_count: 1,
                    timestamp: t.timestamp,
                    rgunread: t.read ? [] : [t.notification_id],
                    rgread: t.read ? [t.notification_id] : [],
                    bSendToCallbackAsNew: I,
                    url: `${gt.TS.COMMUNITY_BASE_URL}my/reportedcontent/${wt}-${re}-${Xt}`,
                  });
                else {
                  let ee = e[ji];
                  this.BReplaceRollupItem(t, ee.item) &&
                    ((!wn || ee.item.read) &&
                      (ee.url = `${gt.TS.COMMUNITY_BASE_URL}my/reportedcontent/${wt}-${re}-${Xt}`),
                    (ee.item = t),
                    (ee.timestamp = t.timestamp),
                    (ee.bSendToCallbackAsNew = I)),
                    (ee.rollup_count = ee.rollup_count + 1),
                    t.read
                      ? ee.rgread.push(t.notification_id)
                      : ee.rgunread.push(t.notification_id);
                }
                break;
              case s.Vv.XJ:
                const wr = (T = nr(t)) == null ? void 0 : T.appid;
                wr && D.A.Get().QueueAppRequest(wr, { include_assets: !0 });
              default:
                e.push({
                  type: x,
                  rollup_key: t.notification_id,
                  item: t,
                  timestamp: t.timestamp,
                  rgunread: t.read ? [] : [t.notification_id],
                  rgread: t.read ? [t.notification_id] : [],
                  bSendToCallbackAsNew: I,
                });
                break;
            }
          }
          AddNotificationToRollupByAppID(e, t, n, u, p, T) {
            let I = e.findIndex((x) => x.rollup_key == n);
            if (I == -1)
              e.push({
                type: u,
                rollup_key: n,
                item: t,
                rollup_count: 1,
                timestamp: t.timestamp,
                rgunread: t.read ? [] : [t.notification_id],
                rgread: t.read ? [t.notification_id] : [],
                bSendToCallbackAsNew: p,
              });
            else {
              let x = e[I];
              this.BReplaceRollupItem(t, x.item) &&
                ((x.item = t),
                (x.timestamp = t.timestamp),
                (x.bSendToCallbackAsNew = p)),
                (x.rollup_count = x.rollup_count + 1),
                t.read
                  ? x.rgread.push(t.notification_id)
                  : x.rgunread.push(t.notification_id);
            }
            D.A.Get().QueueAppRequest(parseInt(T), { include_assets: !0 });
          }
        }
        rr([Tt.sH], Pi.prototype, "m_rgNotificationRollups", 2),
          rr([Tt.sH], Pi.prototype, "m_summary", 2),
          rr([Tt.sH], Pi.prototype, "m_bLoaded", 2),
          rr([Tt.sH], Pi.prototype, "m_nUnviewed", 2),
          rr([Tt.XI], Pi.prototype, "ProcessNotifications", 1);
        function br() {
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
        async function Na(r, e, t, n, u, p = !0, T = !1) {
          var I;
          if (!e) throw new Error("Invalid steamid for GetSteamNotifications");
          const x = q.w.Init(s.GG);
          x.Body().set_language(t),
            x.Body().set_include_read(p),
            x.Body().set_include_pinned_counts(!0),
            x.Body().set_include_confirmation_count(T);
          const L = await s.Fn.GetSteamNotifications(r, x);
          if (L.GetEResult() !== R.R)
            throw (
              (Ta(
                `Received error from GetSteamNotifications. Result ${L.GetEResult()}. Transport ${L.Hdr().transport_error()}`,
              ),
              new Error(`Error from GetSteamNotifications: ${L.GetEResult()}`))
            );
          const te = L.Body().toObject();
          return (
            n &&
              (te.notifications =
                (I = te.notifications) == null
                  ? void 0
                  : I.filter((Bt) => !zn(Bt.notification_type, n, u))),
            te
          );
        }
        async function Ga(r, e) {
          if (!r || !r.steamid || !r.contextid || !r.appid || !r.assetid)
            return Ci("Item notification missing required attributes"), null;
          const t = q.w.Init(m.z9);
          t.Body().set_steamid(r.steamid),
            t.Body().set_contextid(r.contextid),
            t.Body().set_appid(parseInt(r.appid)),
            t.Body().set_get_descriptions(!0),
            t.Body().set_language(gt.TS.LANGUAGE);
          let n = new m.ur();
          n.add_assetids(r.assetid), t.Body().set_filters(n);
          const u = await m.tB.GetInventoryItemsWithDescriptions(e, t);
          if (u.GetEResult() !== R.R)
            return (
              Ci(
                "Request for steam item metadata did not succeed",
                u.GetEResult(),
              ),
              null
            );
          let p = "";
          const T = await D.A.Get().QueueAppRequest(parseInt(r.appid), {});
          if (T == R.R) {
            const I = D.A.Get().GetApp(parseInt(r.appid));
            p = I == null ? void 0 : I.GetName();
          } else Ci("Failed getting app info", T);
          return {
            app_name: p,
            item_data: u.Body().toObject().descriptions[0],
          };
        }
        const Ca = "ItemMetadata";
        function ja(r) {
          return [
            `${Ca}_${r == null ? void 0 : r.steamid}_${r == null ? void 0 : r.appid}_${r == null ? void 0 : r.contextid}_${r == null ? void 0 : r.assetid}`,
          ];
        }
        async function Ts(r, e) {
          if (!e) return [];
          const t = CProtoBufMsg.Init(
            CSteamNotification_GetPreferences_Request,
          );
          let n = await SteamNotificationService.GetPreferences(r, t);
          return n.GetEResult() != k_EResultOK
            ? (Ci("Getting notification preferences failed " + n.GetEResult()),
              [])
            : n.Body().toObject().preferences;
        }
        function qa(r, e, t) {
          let n = an(s.Vv.hW, r.body_data);
          n.steamid = e;
          let u = (0, At.I)({
            queryKey: ja(n),
            queryFn: async () => Ga(n, t),
            staleTime: 1 / 0,
          });
          return u.isSuccess ? u.data : null;
        }
        function Mn(r) {
          let e = `comment/${r.comment_type}/bounce/${r.owner_steam_id.ConvertTo64BitString()}/${r.forum_id}/?feature2=${r.topic_id}`;
          return r.last_post > 0 && (e += "&tscn=" + (r.last_post - 1)), e;
        }
        function vn(r) {
          return r.comment_type == Jt.Yd;
        }
        function hn(r) {
          return r == null ? void 0 : r.bhas_friend;
        }
        function Rn(r) {
          return r.comment_type == Jt.Yd;
        }
        function Ia(r) {
          return vn(r) || hn(r);
        }
        function Wa(r) {
          return Rn(r);
        }
        function Sr(r) {
          if (!r) return null;
          try {
            return JSON.parse(r);
          } catch {
            Gi("Steam notification in invalid format:", r);
          }
          return null;
        }
        function nr(r) {
          return an(r.notification_type, r.body_data);
        }
        function Ua(r) {
          var e;
          return an(r.type, (e = r.item) == null ? void 0 : e.body_data);
        }
        function an(r, e) {
          var t, n, u, p, T, I, x, L, te, Bt, E, wt, re, Xt;
          let C = Sr(e);
          if (!C) return null;
          switch (r) {
            case s.Vv.K:
              return C.gifter_account;
            case s.Vv.YE:
              return {
                responder_steamid: C.responder_steamid,
                package_id: C.package_id,
                bundle_id: C.bundle_id,
              };
            case s.Vv.an:
              return parseInt(C.sender);
            case s.Vv.XJ:
              return {
                appid: C.appid,
                count: (t = C.count) != null ? t : 1,
                appids: (n = C.appids) != null ? n : [],
              };
            case s.Vv.Y9:
              return !C.appid ||
                !C.state ||
                (C.state != Bi.GO && C.state != Bi.cf)
                ? (Gi("Async game notification invalid data", e), null)
                : { appid: parseInt(C.appid), state: parseInt(C.state) };
            case s.Vv.v_:
              let ji = {
                owner_steam_id: C.owner_steam_id
                  ? new Zt.b(C.owner_steam_id)
                  : null,
                bclan_account: ar(C.bclan_account),
                title: C.title,
                comment: C.text,
                time: C.last_post,
                comment_type: Number(C.type),
                topic_id: C.topic_id,
                forum_id: C.forum_id,
                account_steam_id: C.account_id
                  ? Zt.b.InitFromAccountID(C.account_id)
                  : null,
                bhas_friend: ar(C.bhas_friend),
                bis_forum: ar(C.bis_forum),
                last_post: C.last_post,
                bsubscribed: ar(C.subscribed),
                bis_owner: ar(C.bis_owner),
              };
              return (
                C.json_data &&
                  (ji.json_data = {
                    app_id: parseInt(C.json_data.app_id),
                    file_type: parseInt(C.json_data.file_type),
                    title: C.json_data.title,
                  }),
                ji
              );
            case s.Vv.pZ:
              return {
                requestorID: parseInt(C.requestor_id),
                state: C.state ? parseInt(C.state) : j.abL,
              };
            case s.Vv.hW:
              return {
                appid: parseInt(C.app_id),
                assetid: (u = C.asset_id) != null ? u : "",
                contextid: (p = C.context_id) != null ? p : "",
              };
            case s.Vv.js:
              return {
                url: (T = C.url) != null ? T : "",
                strGameName: (I = C.content_app_name) != null ? I : "",
                mediaType: (x = C.media_type) != null ? x : "clip",
                secDuration: parseFloat(
                  (L = C.duration_seconds) != null ? L : 0,
                ),
                nSize: parseInt((te = C.file_size) != null ? te : 0),
                strMachineName: C.machine_name,
                rtExpiration: C.expiration,
                thumbnailURL: C.thumbnail_url,
              };
            case s.Vv.Iz:
              return {
                report_id: (Bt = C.report_id) != null ? Bt : "",
                subject_type: (E = C.subject_type) != null ? E : 0,
                subject_group_id: (wt = C.subject_group_id) != null ? wt : "0",
                subject_id: (re = C.subject_id) != null ? re : "0",
                status: (Xt = C.status) != null ? Xt : 0,
              };
            default:
              return (
                Gi(
                  "GetCustomNotificationDataByType called with unexpected type:" +
                    r,
                  e,
                ),
                null
              );
          }
        }
        function ar(r) {
          var e;
          if (typeof r == "undefined") return !1;
          if (typeof r == "number") return r > 0;
          if (typeof r == "string")
            switch ((e = r.toLowerCase()) == null ? void 0 : e.trim()) {
              case "true":
              case "1":
                return !0;
              default:
                return !1;
            }
          return Gi("notification contained unexpected boolean value"), !1;
        }
        function Fn(r) {
          let e = 0;
          return (
            (function (n) {
              return Object.keys(n);
            })(r).forEach((n) => {
              n != "pending_gifts" && n != "pending_invites" && (e += r[n]);
            }),
            e
          );
        }
        const Oa = {
          [s.Vv.Jo]: { rollup_field: void 0, eFeature: void 0 },
          [s.Vv.yh]: { rollup_field: void 0, eFeature: void 0 },
          [s.Vv.K]: { rollup_field: "gifts", eFeature: S.uX },
          [s.Vv.v_]: { rollup_field: "comments", eFeature: S.qR },
          [s.Vv.hW]: { rollup_field: "inventory_items", eFeature: S.WJ },
          [s.Vv.pZ]: { rollup_field: "invites", eFeature: S.M },
          [s.Vv.wp]: { rollup_field: "major_sale", eFeature: S.ip },
          [s.Vv.Ol]: { rollup_field: void 0, eFeature: void 0 },
          [s.Vv.XJ]: { rollup_field: "wishlist", eFeature: S.ip },
          [s.Vv.an]: { rollup_field: "trade_offers", eFeature: S.ut },
          [s.Vv.e9]: { rollup_field: "general", eFeature: S.uX },
          [s.Vv.wY]: { rollup_field: "help_request_replies", eFeature: S.uX },
          [s.Vv.Y9]: { rollup_field: "async_game_updates", eFeature: S.uX },
          [s.Vv.oe]: { rollup_field: "moderator_messages", eFeature: S.qR },
          [s.Vv.Sx]: {
            rollup_field: "parental_feature_requests",
            eFeature: S.uX,
          },
          [s.Vv.Rj]: { rollup_field: "family_invites", eFeature: S.uX },
          [s.Vv.Cz]: {
            rollup_field: "family_purchase_requests",
            eFeature: S.uX,
          },
          [s.Vv.j3]: {
            rollup_field: "parental_playtime_requests",
            eFeature: S.uX,
          },
          [s.Vv.HN]: {
            rollup_field: "family_purchase_request_responses",
            eFeature: S.uX,
          },
          [s.Vv.uH]: {
            rollup_field: "parental_feature_access_responses",
            eFeature: S.uX,
          },
          [s.Vv.JN]: {
            rollup_field: "parental_playtime_responses",
            eFeature: S.uX,
          },
          [s.Vv.YE]: { rollup_field: "requested_game_added", eFeature: S.uX },
          [s.Vv.js]: { rollup_field: void 0, eFeature: S.uX },
          [s.Vv.bh]: { rollup_field: void 0, eFeature: S.uX },
          [s.Vv.FK]: { rollup_field: "playtest_invites", eFeature: S.ip },
          [s.Vv.mr]: { rollup_field: void 0, eFeature: S.ut },
          [s.Vv.Iz]: { rollup_field: void 0, eFeature: S.uX },
        };
        function _n(r) {
          const e = Oa[r];
          return (0, Ba.wT)(!!e, `Missing notification type data for ${r}`), e;
        }
        function zn(r, e, t) {
          var n;
          if (!e) return !1;
          const u = _n(r);
          return (0, ea.EC)(
            e,
            (n = u == null ? void 0 : u.eFeature) != null ? n : S.JC,
            t,
          );
        }
        function sn(r, e, t) {
          (0, Tt.h5)(() => {
            const n = _n(e);
            n != null &&
              n.rollup_field &&
              (r[n.rollup_field] = Math.max(0, r[n.rollup_field] + t));
          });
        }
        function xa(r) {
          return !r.viewed || r.viewed + za > (0, bi._2)();
        }
        function Tn(r) {
          return r.viewed && r.viewed + _a < (0, bi._2)();
        }
        function Ns(r) {
          return (
            Fn(r) +
              r.pending_gifts +
              r.pending_invites +
              r.pending_family_invites >
            0
          );
        }
      },
      90297: (xt, $t, F) => {
        "use strict";
        F.d($t, { Rd: () => yi, R1: () => Yi, QR: () => Kt });
        var s = F(7850),
          q = F(90626),
          R = F(99412),
          j = F(48453),
          m = F(42993),
          At = F(3692),
          Tt = F(68312),
          Zt = F(76559),
          D = F(80862),
          S = F(18210);
        function Jt(l) {
          if (!l) return;
          const c = typeof l == "string" ? l : l.locString,
            y = typeof l == "string" ? [] : l.params || [];
          if (c) return c[0] !== "#" ? c : (0, S.we)(c, ...y);
        }
        function Bi(l, c) {
          return q.useMemo(() => {
            if (l === void 0) return null;
            let y = (0, D.K9)(l);
            const f = (0, D.u5)(c);
            if (!y || !f) return null;
            const b =
                typeof y.displayNameLoc != "function"
                  ? { locString: y.displayNameLoc }
                  : y.displayNameLoc(f),
              h =
                typeof y.titleLoc != "function"
                  ? { locString: y.titleLoc }
                  : y.titleLoc(f),
              v =
                typeof y.bodyLoc != "function"
                  ? { locString: y.bodyLoc }
                  : y.bodyLoc(f),
              w = typeof y.image != "function" ? y.image : y.image(f),
              z = typeof y.link != "function" ? y.link : y.link(f);
            return {
              display_name: Jt(b),
              title: Jt(h),
              body: Jt(v),
              image: w,
              link: z,
            };
          }, [c, l]);
        }
        function bi(l, c) {
          return q.useMemo(() => {
            const y = l,
              f = (0, D.aq)(y),
              b = (0, D.u5)(c);
            if (!f) return null;
            const h =
                typeof f.titleLoc == "string" ? f.titleLoc : f.titleLoc(b),
              v = typeof f.bodyLoc == "string" ? f.bodyLoc : f.bodyLoc(b),
              w = typeof f.url == "string" ? f.url : f.url(b),
              z =
                typeof f.steamidAttribute == "string"
                  ? f.steamidAttribute
                  : f.steamidAttribute(b),
              _ = b && b[z];
            return { strTitleLoc: h, strBodyLoc: v, strUrl: w, steamid: _ };
          }, [c, l]);
        }
        function qt(l) {
          return q.useMemo(
            () => ((0, D.V4)(l.type) ? (0, D.bP)(l) : null),
            [l],
          );
        }
        var gt = F(87910),
          Si = F.n(gt),
          Q = F(36118),
          d = F(51079),
          o = F(72865),
          i = F(98609),
          Pt = F(35098),
          It = F(19298),
          bt = F(36707),
          wi = F(92264),
          Li = F(36174),
          sr = F(93761),
          P = F.n(sr);
        const Ei = !0;
        function or(l) {
          let {
              onActivate: c,
              icon: y,
              body: f,
              eUIMode: b,
              classNames: h,
            } = l,
            v = c,
            w = P().PinnedTemplate;
          return (
            b == R.ogI
              ? (w = P().PinnedTemplateDesktop)
              : b == R.yrU && (w = P().PinnedTemplateWeb),
            (w = (0, bt.A)(w, h)),
            (0, s.jsx)(It.Z, {
              className: w,
              onActivate: v,
              children: (0, s.jsx)("div", {
                className: P().Content,
                children: (0, s.jsxs)("div", {
                  className: P().PinnedBody,
                  children: [
                    (0, s.jsx)("span", { className: P().Icon, children: y }),
                    f,
                  ],
                }),
              }),
            })
          );
        }
        function lr(l) {
          const {
            count: c,
            icon: y,
            onActivate: f,
            strLocToken: b,
            bAlwaysShow: h,
            eUIMode: v,
            classNames: w,
            visible: z,
          } = l;
          if (!c && !h) return null;
          const _ = (0, S.Yp)(b, c);
          return (0, s.jsx)(or, {
            icon: y,
            body: _,
            onActivate: f,
            eUIMode: v,
            classNames: w,
            visible: z,
          });
        }
        var cr = ((l) => (
          (l[(l.none = 0)] = "none"),
          (l[(l.loadingActive = 1)] = "loadingActive"),
          (l[(l.loadingComplete = 2)] = "loadingComplete"),
          l
        ))(cr || {});
        function Lt(l) {
          let {
            nUnread: c,
            location: y,
            eUIMode: f,
            bLoading: b,
            footer: h,
            bNewIndicator: v,
          } = l;
          const [w, z] = q.useState(b ? 1 : 0),
            [_, M] = q.useState(void 0);
          q.useEffect(() => {
            w == 1 && !b ? z(2) : w == 2 && b && z(1);
          }, [w, b]),
            q.useEffect(() => {
              let H =
                parseInt(P().loadinganimationiterationcount) *
                parseInt(P().loadinganimationduration) *
                1e3;
              const Y = window.setTimeout(() => z(0), H);
              return () => window.clearTimeout(Y);
            }, []),
            q.useEffect(() => {
              c && c > 0 && _ !== P().Unread && y != R.miK && y != R.PN1
                ? M(P().Unread)
                : !c && _ == P().Unread && M(P().MarkedRead);
            }, [c, y, _]);
          let N = l.onActivate;
          N || (N = () => console.log("Missing activate function")),
            w == 1 && (N = void 0);
          let G = P().StandardTemplate;
          y == R.oYe
            ? (G = P().AllNotificationsTemplate)
            : y == R.miK
              ? (G = P().DesktopToastTemplate)
              : (f == R.ogI || f == R.yrU) && (G = P().StandardTemplateDesktop);
          let A = null;
          if (w != 0 && y != R.miK && y != R.PN1) {
            let H = w == 2 ? P().Hide : null;
            A = (0, s.jsxs)("div", {
              className: (0, bt.A)(P().LoadingTemplate, H),
              children: [
                (0, s.jsx)("div", {
                  className: (0, bt.A)(
                    P().StandardLogoDimensions,
                    P().ShimmerLogo,
                  ),
                }),
                (0, s.jsxs)("div", {
                  className: P().Content,
                  children: [
                    (0, s.jsx)("div", {
                      className: (0, bt.A)(P().Header, P().ShimmerHeader),
                    }),
                    (0, s.jsx)("div", {
                      className: (0, bt.A)(P().Body, P().ShimmerBody),
                    }),
                  ],
                }),
              ],
            });
          }
          return (0, s.jsxs)(It.Z, {
            onActivate: N,
            className: P().StandardTemplateContainer,
            onOptionsButton: l.onOptionsButton,
            onOptionsActionDescription: l.onOptionsButtonDesc,
            children: [
              (0, s.jsxs)("div", {
                className: (0, bt.A)(G, _),
                children: [
                  (0, s.jsx)("div", {
                    className: P().StandardLogoDimensions,
                    children: l.logo,
                  }),
                  l.personaStatus &&
                    (0, s.jsx)("div", {
                      className: (0, bt.A)(P().AvatarStatus, l.personaStatus),
                    }),
                  (0, s.jsx)("div", {
                    className: P().Content,
                    children: l.children,
                  }),
                  A,
                  v && (0, s.jsx)(hr, { location: y }),
                ],
              }),
              h || null,
            ],
          });
        }
        function hr(l) {
          const { location: c } = l;
          return !Ei || c != R.B3I
            ? null
            : (0, s.jsx)("div", {
                className: P().NewIndicator,
                children: (0, s.jsx)(Q.jlt, {}),
              });
        }
        function Et(l) {
          let {
            icon: c,
            title: y,
            timestamp: f,
            location: b,
            fnRenderTimestamp: h,
          } = l;
          const v = !!f && (b == R.B3I || b == R.oYe);
          let w;
          return (
            b == R.oYe ? (w = Rr) : (w = h != null ? h : dr),
            (0, s.jsxs)("div", {
              className: P().Header,
              children: [
                (0, s.jsx)(ur, { icon: c }),
                !!y && (0, s.jsx)(mr, { title: y }),
                v && w({ timestamp: f }),
              ],
            })
          );
        }
        function ur(l) {
          return (0, s.jsxs)(s.Fragment, {
            children: [
              !!l.icon &&
                (0, s.jsx)("div", { className: P().Icon, children: l.icon }),
              " ",
            ],
          });
        }
        function mr(l) {
          return (0, s.jsx)("div", { className: P().Title, children: l.title });
        }
        function Wt(l) {
          let c = (0, bt.A)(
            P().StandardNotificationDescription,
            l.multiline && P().Multiline,
          );
          return (0, s.jsx)("div", { className: c, children: l.children });
        }
        function Ut(l) {
          let c = (0, bt.A)(
            P().StandardNotificationSubText,
            l.multiline && P().Multiline,
          );
          return (0, s.jsx)("div", { className: c, children: l.children });
        }
        function Rr(l) {
          if (l.timestamp === void 0) return null;
          let c = new Date(),
            y = new Date(l.timestamp * 1e3),
            f = (0, wi.KC)(l.timestamp);
          return (
            (0, Li.JD)(c, y) ||
              (f = (0, wi._l)(l.timestamp, !1, !1, !1) + " " + f),
            (0, s.jsx)("div", { className: P().Timestamp, children: f })
          );
        }
        function dr(l) {
          if (l.timestamp === void 0) return null;
          let c = new Date(),
            y = new Date(l.timestamp * 1e3),
            f = (0, Li.JD)(c, y)
              ? (0, wi.KC)(l.timestamp)
              : (0, wi._l)(l.timestamp, !1, !1, !1);
          return (0, s.jsx)("div", { className: P().Timestamp, children: f });
        }
        function Fr(l) {
          const { text: c } = l;
          return jsx("div", { className: styles.BottomBar, children: c });
        }
        function ie(l) {
          let {
              playerName: c,
              nickName: y,
              parenthesizeNickNames: f,
              state: b,
            } = l,
            h = !!y,
            v = h && !f,
            w = v ? y : c,
            z = b == "ingame" ? styles.IngameTitle : styles.OnlineTitle;
          return jsxs(Fragment, {
            children: [
              jsx("span", { className: classnames(z), children: w }),
              f &&
                h &&
                jsxs("span", {
                  className: classnames(styles.PlayerNickName, styles.FullName),
                  children: ["(", y, ")"],
                }),
              v &&
                jsx("span", {
                  className: styles.PlayerNickName,
                  children: " *",
                }),
            ],
          });
        }
        var ki = F(25236),
          Di = F(68495),
          fr = F(3166);
        function Ft(l) {
          return l == R.PN1;
        }
        function Hi(l, c) {
          return q.useCallback(
            (y) => {
              l && l(y), c && c();
            },
            [l, c],
          );
        }
        var qi = F(97786),
          Nt = F.n(qi);
        function _t(l) {
          let {
              onActivate: c,
              onDismiss: y,
              logo: f,
              icon: b,
              title: h,
              body: v,
              personaStatus: w,
              className: z,
              singleLineOnly: _,
              fullWidth: M,
            } = l,
            N = Hi(c, y),
            G = (A) => {
              A.button == 1 && y && y();
            };
          return (0, s.jsxs)(It.Z, {
            className: (0, bt.A)(Nt().ShortTemplate, !_ && Nt().TwoLine, z),
            onActivate: N,
            onMouseDown: G,
            children: [
              (0, s.jsx)("div", {
                className: Nt().ShortLogoDimensions,
                children: f,
              }),
              l.personaStatus &&
                (0, s.jsx)("div", {
                  className: (0, bt.A)(Nt().AvatarStatus, w),
                }),
              (0, s.jsxs)("div", {
                className: (0, bt.A)(Nt().Content, M && Nt().FullWidth),
                children: [
                  (0, s.jsxs)("div", {
                    className: Nt().Header,
                    children: [
                      !!b &&
                        (0, s.jsx)("div", {
                          className: Nt().Icon,
                          children: b,
                        }),
                      (0, s.jsx)("div", { className: Nt().Title, children: h }),
                    ],
                  }),
                  (0, s.jsx)("div", { className: Nt().Body, children: v }),
                ],
              }),
            ],
          });
        }
        var yr = F(92012),
          ne = F.n(yr),
          Qi = F(813),
          zt = F(40358),
          Ki = F(21721);
        function Ii(l) {
          switch (l) {
            case j.Vv.wp:
              return (0, s.jsx)(Q.ilR, {});
            case j.Vv.wY:
              return (0, s.jsx)(Q.Cv4, {});
            default:
              return (0, s.jsx)(Q.Qte, {});
          }
        }
        function Mi(l) {
          var c, y;
          let {
            fallbackLogo: f,
            data: b,
            location: h,
            icon: v,
            timestamp: w,
            fnRenderTimestamp: z,
            onHide: _,
          } = l;
          const M = typeof (b == null ? void 0 : b.image) == "number",
            N = M ? { appid: b.image } : void 0,
            { data: G } = (0, zt.J$)(N),
            { data: A } = (0, zt.lv)(N),
            H = (c = b == null ? void 0 : b.display_name) != null ? c : "",
            Y =
              (y = b == null ? void 0 : b.title) != null
                ? y
                : b == null
                  ? void 0
                  : b.body,
            k = b != null && b.title ? b.body : null,
            $ = Ft(h),
            X = N && (!G || !A),
            [Vt, Ct] = q.useState(!1),
            J = () => Ct(!0);
          let vt = null;
          if (M) vt = Ri(A, f, $);
          else {
            const ri = $
              ? ne().ShortLogoDimensions
              : ne().StandardLogoDimensions;
            vt =
              b != null && b.image && !Vt
                ? (0, s.jsx)("img", { className: ri, src: b.image, onError: J })
                : f;
          }
          return $
            ? (0, s.jsx)(_t, { ...l, logo: vt, icon: v, title: H, body: Y })
            : (0, s.jsx)(Gt, {
                children: (0, s.jsxs)(Lt, {
                  logo: vt,
                  bLoading: X,
                  ...l,
                  children: [
                    (0, s.jsx)(Et, {
                      icon: v,
                      title: H,
                      timestamp: w,
                      location: h,
                      fnRenderTimestamp: z,
                    }),
                    (0, s.jsx)(Wt, { multiline: !k, children: Y }),
                    !!k && (0, s.jsx)(Ut, { children: k }),
                    _ ? (0, s.jsx)(St, { onHide: _ }) : null,
                  ],
                }),
              });
        }
        function vi(l) {
          let {
            displayName: c,
            location: y,
            icon: f,
            timestamp: b,
            fnRenderTimestamp: h,
            onHide: v,
          } = l;
          const w = Ft(y),
            z = (0, S.we)("#SteamNotifications_TradeOffer_Title"),
            _ = w
              ? (0, S.we)(
                  "#SteamNotifications_TradeOffer_Body_Short",
                  c != null ? c : "",
                )
              : (0, S.we)("#SteamNotifications_TradeOffer_Body"),
            M = (0, S.we)(
              "#SteamNotifications_TradeOffer_Description",
              c != null ? c : "",
            ),
            N = !c;
          return w
            ? (0, s.jsx)(_t, {
                ...l,
                logo: l.logo,
                icon: l.icon,
                title: z,
                body: _,
              })
            : (0, s.jsx)(Gt, {
                children: (0, s.jsxs)(Lt, {
                  bLoading: N,
                  ...l,
                  children: [
                    (0, s.jsx)(Et, {
                      icon: f,
                      title: z,
                      timestamp: b,
                      location: y,
                      fnRenderTimestamp: h,
                    }),
                    (0, s.jsx)(Wt, { children: _ }),
                    (0, s.jsx)(Ut, { children: M }),
                    v ? (0, s.jsx)(St, { onHide: v }) : null,
                  ],
                }),
              });
        }
        const g = (l) => {
          let {
            location: c,
            icon: y,
            timestamp: f,
            fnRenderTimestamp: b,
            onHide: h,
          } = l;
          const v = Ft(c),
            w = (0, S.we)("#SteamNotifications_TradeReversal_Title"),
            z = v
              ? (0, S.we)("#SteamNotifications_TradeReversal_Body_Short")
              : (0, S.we)("#SteamNotifications_TradeReversal_Body"),
            _ = (0, S.we)("#SteamNotifications_TradeReversal_Description");
          return v
            ? (0, s.jsx)(_t, {
                ...l,
                logo: l.logo,
                icon: l.icon,
                title: w,
                body: z,
              })
            : (0, s.jsx)(Gt, {
                children: (0, s.jsxs)(Lt, {
                  ...l,
                  children: [
                    (0, s.jsx)(Et, {
                      icon: y,
                      title: w,
                      timestamp: f,
                      location: c,
                      fnRenderTimestamp: b,
                    }),
                    (0, s.jsx)(Wt, { children: z }),
                    (0, s.jsx)(Ut, { children: _ }),
                    h ? (0, s.jsx)(St, { onHide: h }) : null,
                  ],
                }),
              });
        };
        function kt(l) {
          let {
            senderName: c,
            location: y,
            icon: f,
            timestamp: b,
            fnRenderTimestamp: h,
            onHide: v,
          } = l;
          const w = Ft(y),
            z = w
              ? (0, S.we)(
                  "#Notification_GiftReceived_Body_Short",
                  c != null ? c : "",
                )
              : (0, S.we)("#Notification_GiftReceived_Body"),
            _ = c
              ? (0, S.we)("#Notification_GiftReceived_Description", c)
              : null,
            M = (0, S.we)("#Notification_GiftReceived_Title"),
            N = !c;
          return w
            ? (0, s.jsx)(_t, {
                ...l,
                logo: l.logo,
                icon: l.icon,
                title: M,
                body: z,
              })
            : (0, s.jsx)(Gt, {
                children: (0, s.jsxs)(Lt, {
                  bLoading: N,
                  ...l,
                  children: [
                    (0, s.jsx)(Et, {
                      icon: f,
                      title: M,
                      timestamp: b,
                      location: y,
                      fnRenderTimestamp: h,
                    }),
                    (0, s.jsx)(Wt, { multiline: !_, children: z }),
                    !!_ && (0, s.jsx)(Ut, { children: _ }),
                    v ? (0, s.jsx)(St, { onHide: v }) : null,
                  ],
                }),
              });
        }
        function Dt(l) {
          let {
            requestorName: c,
            requestorAvatarURL: y,
            fallbackLogo: f,
            data: b,
            location: h,
            icon: v,
            timestamp: w,
            fnRenderTimestamp: z,
            onHide: _,
          } = l;
          const M = Ft(h);
          let N = "";
          c && b.state == R.UXi
            ? (N = (0, S.we)(
                "#SteamNotifications_FriendInvite_Description_AwaitingResponse",
              ))
            : c && b.state == R._UC
              ? (N = (0, S.we)(
                  "#SteamNotifications_FriendInvite_Description_Friends",
                ))
              : c &&
                (N = (0, S.we)("#SteamNotifications_FriendInvite_Description"));
          const [G, A] = q.useState(!1),
            H = () => A(!0);
          let Y = f;
          if (y && !G) {
            const X = b.state == R._UC && h != R.PN1,
              Vt = M ? ne().ShortLogoDimensions : ne().StandardLogoDimensions;
            Y = (0, s.jsxs)(It.Z, {
              style: { position: "relative" },
              children: [
                X && (0, s.jsx)(Q.GSe, { className: ne().FriendIndicator }),
                (0, s.jsx)("img", { className: Vt, src: y, onError: H }),
              ],
            });
          }
          const k =
              c || (0, S.we)("#SteamNotifications_FriendInvite_Body_Generic"),
            $ = !c;
          return M
            ? (0, s.jsx)(_t, {
                ...l,
                logo: Y,
                icon: l.icon,
                title: (0, S.we)("#Notification_FriendInvite_Title"),
                body: k,
              })
            : (0, s.jsx)(Gt, {
                children: (0, s.jsxs)(Lt, {
                  logo: Y,
                  bLoading: $,
                  ...l,
                  children: [
                    (0, s.jsx)(Et, {
                      icon: v,
                      title: (0, S.we)("#Notification_FriendInvite_Title"),
                      timestamp: w,
                      location: h,
                      fnRenderTimestamp: z,
                    }),
                    (0, s.jsx)(Wt, { multiline: !N, children: k }),
                    !!N && (0, s.jsx)(Ut, { children: N }),
                    _ ? (0, s.jsx)(St, { onHide: _ }) : null,
                  ],
                }),
              });
        }
        function Wi(l) {
          var c, y;
          let {
            itemState: f,
            fallbackLogo: b,
            data: h,
            location: v,
            icon: w,
            timestamp: z,
            fnRenderTimestamp: _,
            nUnread: M,
            onHide: N,
          } = l;
          const [G, A] = q.useState(!1),
            H = () => A(!0),
            Y = Ft(v);
          let k = b;
          if (
            (c = f == null ? void 0 : f.item_data) != null &&
            c.icon_url &&
            !G
          ) {
            let J = `${fr.TS.COMMUNITY_CDN_URL}economy/image/${f.item_data.icon_url}`,
              vt = f.item_data.background_color
                ? "#" + f.item_data.background_color
                : null;
            const ri = Y
              ? ne().ShortLogoDimensions
              : ne().StandardLogoDimensions;
            k = (0, s.jsx)(It.Z, {
              style: { position: "relative" },
              children: (0, s.jsx)("img", {
                className: ri,
                style: {
                  backgroundColor: vt != null ? vt : void 0,
                  justifyContent: "center",
                },
                src: J,
                onError: H,
              }),
            });
          }
          const $ = parseInt(h.appid) == 753;
          let X = null;
          if (M !== void 0 && M > 1) {
            const J = M - 1;
            $
              ? (X = (0, S.we)("#Notification_Item_RollupMore_Steam", J))
              : f != null && f.app_name
                ? (X = (0, S.we)(
                    "#Notification_Item_RollupMore_GameName",
                    J,
                    f.app_name,
                  ))
                : (X = (0, S.we)("#Notification_Item_RollupMore", J));
          } else
            f != null &&
              f.app_name &&
              (X = $
                ? f.app_name
                : (0, S.we)("#Notification_Item_Single_GameName", f.app_name));
          const Vt =
              (y = f == null ? void 0 : f.item_data) != null && y.name
                ? f.item_data.name
                : (0, S.we)("#Notification_Item_Body_Generic"),
            Ct = !f || !f.item_data;
          if (Y) {
            let J = "";
            return (
              f != null && f.app_name
                ? (J =
                    M > 1
                      ? (0, S.we)(
                          "#Notification_Item_Body_Short_Plural",
                          f == null ? void 0 : f.app_name,
                        )
                      : (0, S.we)(
                          "#Notification_Item_Body_Short",
                          f == null ? void 0 : f.app_name,
                        ))
                : (J = (0, S.we)("#Notification_Item_Body_Generic")),
              (0, s.jsx)(_t, {
                ...l,
                logo: k,
                icon: l.icon,
                title: (0, S.we)("#Notification_ItemAnnouncement_Body"),
                body: J,
              })
            );
          }
          return (0, s.jsx)(Gt, {
            children: (0, s.jsxs)(Lt, {
              logo: k,
              bLoading: Ct,
              ...l,
              children: [
                (0, s.jsx)(Et, {
                  icon: w,
                  title: (0, S.we)("#Notification_ItemAnnouncement_TitleLong"),
                  timestamp: z,
                  location: v,
                  fnRenderTimestamp: _,
                }),
                (0, s.jsx)(Wt, { multiline: !X, children: Vt }),
                !!X && (0, s.jsx)(Ut, { children: X }),
                N ? (0, s.jsx)(St, { onHide: N }) : null,
              ],
            }),
          });
        }
        function pr(l) {
          let {
            fallbackLogo: c,
            data: y,
            location: f,
            icon: b,
            timestamp: h,
            fnRenderTimestamp: v,
            onHide: w,
          } = l;
          const z = Ft(f),
            _ = y.appid ? { appid: y.appid } : void 0,
            { data: M } = (0, zt.J$)(_),
            { data: N } = (0, zt.lv)(_),
            G = Ri(N, c, z),
            A = _ && (!M || !N);
          let H = "";
          return (
            y.state == ki.GO
              ? (H =
                  z && M != null && M.name
                    ? (0, S.we)(
                        "#SteamNotification_AsyncGame_Action_Short",
                        M.name,
                      )
                    : (0, S.we)("#SteamNotification_AsyncGame_Action"))
              : y.state == ki.cf &&
                (H =
                  z && M != null && M.name
                    ? (0, S.we)(
                        "#SteamNotification_AsyncGame_Done_Short",
                        M.name,
                      )
                    : (0, S.we)("#SteamNotification_AsyncGame_Done")),
            z
              ? (0, s.jsx)(_t, {
                  ...l,
                  logo: G,
                  icon: l.icon,
                  title: (0, S.we)("#SteamNotification_AsyncGame_Title"),
                  body: H,
                })
              : (0, s.jsx)(Gt, {
                  children: (0, s.jsxs)(Lt, {
                    logo: G,
                    bLoading: A,
                    ...l,
                    children: [
                      (0, s.jsx)(Et, {
                        icon: b,
                        title: (0, S.we)("#SteamNotification_AsyncGame_Title"),
                        timestamp: h,
                        location: f,
                        fnRenderTimestamp: v,
                      }),
                      (0, s.jsx)(Wt, { children: H }),
                      (0, s.jsx)(Ut, { children: M == null ? void 0 : M.name }),
                      w ? (0, s.jsx)(St, { onHide: w }) : null,
                    ],
                  }),
                })
          );
        }
        function hi(l) {
          const {
              title: c,
              body: y,
              logoUrl: f,
              bDataLoading: b,
              icon: h,
              onHide: v,
              location: w,
              timestamp: z,
              fnRenderTimestamp: _,
              onActivate: M,
              personaStatus: N,
            } = l,
            G = Ft(w),
            A = G ? ne().ShortLogoDimensions : ne().StandardLogoDimensions,
            H = (0, s.jsx)(It.Z, {
              style: { position: "relative" },
              children: (0, s.jsx)("img", {
                className: A,
                style: { justifyContent: "center" },
                src: f,
              }),
            });
          return G
            ? (0, s.jsx)(_t, {
                logo: H,
                icon: l.icon,
                title: c,
                body: y,
                onActivate: M,
                personaStatus: N,
              })
            : (0, s.jsx)(Gt, {
                children: (0, s.jsxs)(Lt, {
                  logo: H,
                  bLoading: b,
                  onActivate: M,
                  personaStatus: N,
                  ...l,
                  children: [
                    (0, s.jsx)(Et, {
                      icon: h,
                      title: c,
                      timestamp: z,
                      location: w,
                      fnRenderTimestamp: _,
                    }),
                    (0, s.jsx)(Wt, { multiline: !0, children: y }),
                    v ? (0, s.jsx)(St, { onHide: v }) : null,
                  ],
                }),
              });
        }
        function Vi(l) {
          var c, y, f, b, h;
          let {
              currentUserSteamID: v,
              fallbackLogo: w,
              postedByDisplayName: z,
              postedByAvatarURL: _,
              ownerDisplayName: M,
              data: N,
              location: G,
              icon: A,
              timestamp: H,
              fnRenderTimestamp: Y,
              nUnread: k,
              appName: $,
              onHide: X,
              commentTitle: Vt,
              commentBody: Ct,
            } = l,
            J = Vt;
          const vt = Ft(G),
            [ri, zi] = q.useState(!1),
            Oi = () => zi(!0),
            [gr, er] = (0, Qi.TB)(
              N.bclan_account
                ? (c = N.owner_steam_id) == null
                  ? void 0
                  : c.GetAccountID()
                : void 0,
            ),
            pi = (0, D.hr)(N) ? z : null,
            tr = (0, D.T4)(N) ? M : null;
          N.comment_type == Di.Yd
            ? ((y = N.owner_steam_id) == null
                ? void 0
                : y.ConvertTo64BitString()) == v
              ? G == R.oYe && pi
                ? (J = (0, S.we)(
                    "#SteamNotifications_Comment_Your_Profile_By",
                    pi,
                  ))
                : (J = (0, S.we)("#SteamNotifications_Comment_Your_Profile"))
              : tr
                ? G == R.oYe && pi
                  ? (J = (0, S.we)(
                      "#SteamNotifications_Comment_Player_Profile_By",
                      pi,
                      tr,
                    ))
                  : (J = (0, S.we)(
                      "#SteamNotifications_Comment_Player_Profile",
                      tr,
                    ))
                : (J = (0, S.we)("#SteamNotifications_Comment_Profile"))
            : N.comment_type == Di.Dq &&
                ((f = N.json_data) == null ? void 0 : f.file_type) == R.pmA
              ? ((b = N.owner_steam_id) == null
                  ? void 0
                  : b.ConvertTo64BitString()) == v
                ? $
                  ? (J = (0, S.we)(
                      "#SteamNotifications_Comment_Your_Screenshot_Game",
                      $,
                    ))
                  : (J = (0, S.we)(
                      "#SteamNotifications_Comment_Your_Screenshot",
                    ))
                : $
                  ? (J = (0, S.we)(
                      "#SteamNotifications_Comment_Screenshot_Game",
                      $,
                    ))
                  : (J = (0, S.we)("#SteamNotifications_Comment_Screenshot"))
              : !J &&
                (h = N.json_data) != null &&
                h.title &&
                (J = N.json_data.title);
          let Ti = null;
          N.comment_type == Di.Bv && N.bis_forum && Ct
            ? (Ti = (0, s.jsx)(Ut, {
                children: (0, S.we)(
                  "#SteamNotifications_Comment_NewDiscussion",
                  Ct,
                ),
              }))
            : (Ti = (0, s.jsxs)(Ut, { children: ['"', Ct, '"'] }));
          let xi = (0, S.we)("#SteamNotifications_Comment"),
            Ht = null;
          if (k !== void 0 && k > 1) {
            const Ni = "+" + (k - 1);
            G == R.oYe
              ? (Ht = (0, s.jsx)("div", {
                  className: ne().AllNotificationsCommentPlus,
                  children: Ni,
                }))
              : (xi = xi + " " + Ni);
          }
          let gi = w;
          if (!ri) {
            const Ni = vt
              ? ne().ShortLogoDimensions
              : ne().StandardLogoDimensions;
            if (_ && (0, D.n8)(N)) {
              const ir = N.bhas_friend && G != R.PN1;
              gi = (0, s.jsxs)("div", {
                style: { position: "relative" },
                children: [
                  ir && (0, s.jsx)(Q.GSe, { className: ne().FriendIndicator }),
                  (0, s.jsx)("img", { className: Ni, src: _, onError: Oi }),
                ],
              });
            } else
              er != null &&
                er.avatar_medium_url &&
                (gi = (0, s.jsx)("img", {
                  className: Ni,
                  src: er.avatar_medium_url,
                  onError: Oi,
                }));
          }
          return vt
            ? (0, s.jsx)(_t, {
                ...l,
                logo: gi,
                icon: l.icon,
                title: xi,
                body: J,
              })
            : (0, s.jsx)(Gt, {
                children: (0, s.jsxs)(Lt, {
                  logo: gi,
                  ...l,
                  children: [
                    (0, s.jsx)(Et, {
                      icon: A,
                      title: xi,
                      timestamp: H,
                      location: G,
                      fnRenderTimestamp: Y,
                    }),
                    (0, s.jsx)(Wt, { children: J }),
                    Ti,
                    Ht,
                    X ? (0, s.jsx)(St, { onHide: X }) : null,
                  ],
                }),
              });
        }
        function ei(l) {
          var c;
          let {
            fallbackLogo: y,
            data: f,
            location: b,
            icon: h,
            timestamp: v,
            fnRenderTimestamp: w,
            onHide: z,
          } = l;
          const _ = Ft(b),
            M = f.appid ? { appid: f.appid } : void 0,
            { data: N } = (0, zt.J$)(M),
            { data: G } = (0, zt.lv)(M),
            { data: A } = (0, zt.Q_)(M),
            H = Ri(G, y, _),
            Y = M && (!N || !G || !A);
          let k = "",
            $ = null;
          if (N) {
            const X = (c = N.name) != null ? c : "";
            (k = X),
              f.count == 1
                ? _
                  ? (k = (0, S.PP)(
                      "#SteamNotifications_Wishlist_OnSale_Single_Short",
                      (0, s.jsx)("span", { children: X }),
                      (0, s.jsx)("span", {
                        style: { color: "#FFFFFF" },
                        children: A == null ? void 0 : A.formatted_final_price,
                      }),
                    ))
                  : ($ = (0, S.PP)(
                      "#SteamNotifications_Wishlist_OnSale_Single",
                      (0, s.jsx)("span", {
                        style: { color: "#FFFFFF" },
                        children: A == null ? void 0 : A.formatted_final_price,
                      }),
                    ))
                : f.count == 2
                  ? _
                    ? (k = (0, S.we)(
                        "#SteamNotifications_Wishlist_OnSale_PlusOne_Short",
                        X,
                      ))
                    : ($ = (0, S.we)(
                        "#SteamNotifications_Wishlist_OnSale_PlusOne",
                      ))
                  : _
                    ? (k = (0, S.we)(
                        "#SteamNotifications_Wishlist_OnSale_PlusMany_Short",
                        X,
                        f.count - 1,
                      ))
                    : ($ = (0, S.we)(
                        "#SteamNotifications_Wishlist_OnSale_PlusMany",
                        f.count - 1,
                      ));
          } else k = (0, S.we)("#SteamNotifications_Wishlist_Generic");
          return _
            ? (0, s.jsx)(_t, {
                ...l,
                logo: H,
                icon: l.icon,
                title: (0, S.we)("#SteamNotifications_Wishlist"),
                body: k,
              })
            : (0, s.jsx)(Gt, {
                children: (0, s.jsxs)(Lt, {
                  logo: H,
                  bLoading: Y,
                  ...l,
                  children: [
                    (0, s.jsx)(Et, {
                      icon: h,
                      title: (0, S.we)("#SteamNotifications_Wishlist"),
                      timestamp: v,
                      location: b,
                      fnRenderTimestamp: w,
                    }),
                    (0, s.jsx)(Wt, { multiline: !$, children: k }),
                    !!$ && (0, s.jsx)(Ut, { children: $ }),
                    z ? (0, s.jsx)(St, { onHide: z }) : null,
                  ],
                }),
              });
        }
        function Ri(l, c, y = !1) {
          const [f, b] = q.useState(!1),
            h = () => b(!0);
          if (!l || f)
            return (0, s.jsx)(It.Z, {
              style: { position: "relative" },
              children: c,
            });
          const v = (0, Ki.b0)(l, "community_icon");
          return y
            ? (0, s.jsx)(It.Z, {
                style: { position: "relative" },
                children: (0, s.jsx)("img", {
                  src: v,
                  className: ne().ShortLogoDimensions,
                  onError: h,
                }),
              })
            : (0, s.jsxs)(It.Z, {
                style: { position: "relative" },
                children: [
                  (0, s.jsx)("img", {
                    className: (0, bt.A)(ne().WishlistBlurImage),
                    src: v,
                    onError: h,
                  }),
                  (0, s.jsx)("img", {
                    src: v,
                    onError: h,
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
        function St(l) {
          const c = (f) => {
              f.stopPropagation(), f.preventDefault();
            },
            y = (f) => {
              l.onHide(), f.stopPropagation(), f.preventDefault();
            };
          return (0, s.jsx)("div", {
            className: ne().HideButton,
            onClick: y,
            onMouseDown: c,
            children: (0, s.jsx)(Q.zHo, {}),
          });
        }
        function Gt(l) {
          return (0, s.jsx)("div", {
            className: ne().SteamNotificationWrapper,
            children: l.children,
          });
        }
        var ti = F(65946),
          Fi = F(24544);
        let K = null,
          a = !1;
        function B() {
          return K || (K = new Fi.s({ BIsFriend: (0, Fi.Q)() })), K;
        }
        function V() {
          const l = (0, Tt.KV)(),
            c = (0, Tt.rX)(),
            y = (0, ti.q3)(() => B().m_bInitialized);
          return (
            !y &&
              !a &&
              ((a = !0), K.Init(fr.iA.accountid, l, c).finally(() => (a = !1))),
            [y, K]
          );
        }
        function yi(l) {
          let c = null;
          return (
            (0, D.sR)(l)
              ? (c = ii)
              : (0, D.IC)(l)
                ? (c = _i)
                : Ui[l] && (c = Ui[l]),
            c
          );
        }
        function Yi(l) {
          const { rollup: c, uimode: y, location: f } = l,
            b = yi(c.type);
          return b
            ? (0, s.jsx)(d.Ay, {
                controller: "notification",
                method: (0, R.fLp)(y),
                submethod: (0, R.ey3)(f),
                children: (0, s.jsx)(b, { ...l }),
              })
            : null;
        }
        function _i(l) {
          var c, y;
          const {
              rollup: f,
              onNotificationClick: b,
              location: h,
              uimode: v,
              onHide: w,
            } = l,
            z = Bi(f.item.notification_type, f.item.body_data),
            _ =
              (c = (0, j.p$)(f.type).replace(
                "k_ESteamNotificationType_",
                "",
              )) == null
                ? void 0
                : c.toLowerCase(),
            M = (0, o.aL)(
              (y = z == null ? void 0 : z.link) != null ? y : "#",
              _,
            ),
            N = () =>
              b(() => {
                z != null && z.link && M && window.location.assign(M);
              }, f.item),
            G = (A) => b(() => {}, f.item, A);
          return (0, s.jsx)("a", {
            href: z != null && z.link ? M : "#",
            onMouseDown: G,
            children: (0, s.jsx)(Mi, {
              icon: Ii(f.type),
              onActivate: N,
              fallbackLogo: (0, s.jsx)(Q.Qte, {}),
              location: h,
              eUIMode: v,
              data: z,
              timestamp: f.timestamp,
              nUnread: f.rgunread.length,
              bNewIndicator: (0, D.Rl)(f.item),
              onHide: w,
            }),
          });
        }
        function Rt(l) {
          const {
              rollup: c,
              onNotificationClick: y,
              location: f,
              uimode: b,
              onHide: h,
            } = l,
            v = `${i.TS.COMMUNITY_BASE_URL}my/gamenotifications/`,
            w = () => y(() => window.location.assign(v), c.item),
            z = (M) => y(() => {}, c.item, M),
            _ = qt(c);
          return (0, s.jsx)("a", {
            href: v,
            onMouseDown: z,
            children: (0, s.jsx)(pr, {
              icon: (0, s.jsx)(Q.Qte, {}),
              fallbackLogo: (0, s.jsx)(Q.wC1, {}),
              onActivate: w,
              location: f,
              eUIMode: b,
              data: _,
              timestamp: c.timestamp,
              nUnread: c.rgunread.length,
              bNewIndicator: (0, D.Rl)(c.item),
              onHide: h,
            }),
          });
        }
        function Mt(l) {
          var c, y;
          const {
              steamid: f,
              url: b,
              strTitleLoc: h,
              strBodyLoc: v,
              rollup: w,
              onNotificationClick: z,
              location: _,
              uimode: M,
              onHide: N,
            } = l,
            { data: G } = (0, Pt.js)(f),
            A = (X) => z(() => {}, w.item, X),
            H = () => z(() => window.location.assign(b), w.item);
          if (!v) return null;
          const Y = !G,
            k = (0, S.we)(
              h,
              (c = G == null ? void 0 : G.m_strPlayerName) != null ? c : "",
            ),
            $ = (0, S.we)(
              v,
              (y = G == null ? void 0 : G.m_strPlayerName) != null ? y : "",
            );
          return (0, s.jsx)("a", {
            href: b,
            onMouseDown: A,
            children: (0, s.jsx)(hi, {
              title: k,
              body: $,
              bDataLoading: Y,
              logoUrl: G == null ? void 0 : G.avatar_url_medium,
              icon: (0, s.jsx)(Q.Qte, {}),
              onActivate: H,
              location: _,
              eUIMode: M,
              timestamp: w.timestamp,
              nUnread: w.rgunread.length,
              bNewIndicator: (0, D.Rl)(w.item),
              onHide: N,
            }),
          });
        }
        function ii(l) {
          const c = bi(l.rollup.type, l.rollup.item.body_data);
          if (!c) return null;
          const { strTitleLoc: y, strBodyLoc: f, strUrl: b, steamid: h } = c;
          return !h || !y || !f
            ? null
            : (0, s.jsx)(Mt, {
                steamid: h,
                url: b,
                strTitleLoc: y,
                strBodyLoc: f,
                ...l,
              });
        }
        function Ji(l) {
          const {
              rollup: c,
              onNotificationClick: y,
              location: f,
              uimode: b,
              onHide: h,
            } = l,
            v = (0, m.LH)(),
            w = qt(c),
            z = `${i.TS.COMMUNITY_BASE_URL}profiles/${v}/tradeoffers`,
            _ = () => y(() => window.location.assign(z), c.item),
            M = (A) => y(() => {}, c.item, A),
            N = Zt.b.InitFromAccountID(w),
            { data: G } = (0, Pt.js)(N.GetAccountID());
          return (0, s.jsx)("a", {
            href: z,
            onMouseDown: M,
            children: (0, s.jsx)(vi, {
              logo: (0, s.jsx)(Q.Qte, {}),
              icon: (0, s.jsx)(Q.h20, {}),
              onActivate: _,
              location: f,
              eUIMode: b,
              timestamp: c.timestamp,
              nUnread: c.rgunread.length,
              displayName: G == null ? void 0 : G.m_strPlayerName,
              bNewIndicator: (0, D.Rl)(c.item),
              onHide: h,
            }),
          });
        }
        const _r = (l) => {
          const {
              rollup: c,
              onNotificationClick: y,
              location: f,
              uimode: b,
              onHide: h,
            } = l,
            v = `${i.TS.COMMUNITY_BASE_URL}my/tradehistory`,
            w = () => y(() => window.location.assign(v), c.item),
            z = (_) => y(() => {}, c.item, _);
          return (0, s.jsx)("a", {
            href: v,
            onMouseDown: z,
            children: (0, s.jsx)(g, {
              logo: (0, s.jsx)(Q.Qte, {}),
              icon: (0, s.jsx)(Q.h20, {}),
              onActivate: w,
              location: f,
              eUIMode: b,
              timestamp: c.timestamp,
              nUnread: c.rgunread.length,
              bNewIndicator: (0, D.Rl)(c.item),
              onHide: h,
            }),
          });
        };
        function Xi(l) {
          const {
              rollup: c,
              onNotificationClick: y,
              location: f,
              uimode: b,
              onHide: h,
            } = l,
            v = (0, m.LH)(),
            w = `${i.TS.COMMUNITY_BASE_URL}profiles/${v}/inventory/#pending_gifts`,
            z = () => y(() => window.location.assign(w), c.item),
            _ = (A) => y(() => {}, c.item, A),
            M = qt(c),
            N = Zt.b.InitFromAccountID(M),
            { data: G } = (0, Pt.js)(N.GetAccountID());
          return (0, s.jsx)("a", {
            href: w,
            onMouseDown: _,
            children: (0, s.jsx)(kt, {
              logo: (0, s.jsx)(Q.Qte, {}),
              icon: (0, s.jsx)(Q.pD, {}),
              onActivate: z,
              location: f,
              eUIMode: b,
              timestamp: c.timestamp,
              nUnread: c.rgunread.length,
              senderName: G == null ? void 0 : G.m_strPlayerName,
              bNewIndicator: (0, D.Rl)(c.item),
              onHide: h,
            }),
          });
        }
        function zr(l) {
          var c;
          const {
              rollup: y,
              onNotificationClick: f,
              location: b,
              uimode: h,
              onHide: v,
            } = l,
            w = qt(y),
            { data: z } = (0, Pt.js)(w.responder_steamid),
            _ =
              w.package_id > 0
                ? { packageid: w.package_id }
                : { bundleid: w.bundle_id },
            { data: M } = (0, zt.U2)(_),
            N = M ? `app/${M.appid}` : "",
            G = `${i.TS.STORE_BASE_URL}${N}`,
            A = () => f(() => window.location.assign(G), y.item),
            H = (X) => f(() => {}, y.item, X),
            Y = !z || !M,
            k = (0, S.we)("#SteamNotifications_RequestedGameAddedTitle"),
            $ = M
              ? (0, S.we)(
                  "#SteamNotifications_RequestedGameAddedBody",
                  (c = M.name) != null ? c : "",
                )
              : "";
          return (0, s.jsx)("a", {
            href: G,
            onMouseDown: H,
            children: (0, s.jsx)(hi, {
              title: k,
              body: $,
              bDataLoading: Y,
              logoUrl: z == null ? void 0 : z.avatar_url_medium,
              icon: (0, s.jsx)(Q.Qte, {}),
              onActivate: A,
              location: b,
              eUIMode: h,
              timestamp: y.timestamp,
              nUnread: y.rgunread.length,
              bNewIndicator: (0, D.Rl)(y.item),
              onHide: v,
            }),
          });
        }
        function $i(l) {
          const {
              rollup: c,
              onNotificationClick: y,
              location: f,
              uimode: b,
              onHide: h,
            } = l,
            v = (0, m.LH)(),
            w = (0, Tt.KV)(),
            z = (0, D.IL)(c.item, v, w),
            _ = qt(c),
            M = `${i.TS.COMMUNITY_BASE_URL}profiles/${v}/inventory`,
            N = () => y(() => window.location.assign(M), c.item),
            G = (A) => y(() => {}, c.item, A);
          return (0, s.jsx)("a", {
            href: M,
            onMouseDown: G,
            children: (0, s.jsx)(Wi, {
              icon: (0, s.jsx)(Q.rI_, {}),
              fallbackLogo: (0, s.jsx)(Q.Qte, {}),
              onActivate: N,
              location: f,
              eUIMode: b,
              data: _,
              timestamp: c.timestamp,
              nUnread: c.rgunread.length,
              itemState: z,
              bNewIndicator: (0, D.Rl)(c.item),
              onHide: h,
            }),
          });
        }
        function Tr(l) {
          const {
              rollup: c,
              onNotificationClick: y,
              location: f,
              uimode: b,
              onHide: h,
            } = l,
            v = (0, m.LH)(),
            w = `${i.TS.COMMUNITY_BASE_URL}profiles/${v}/friends/pending`,
            z = () => y(() => window.location.assign(w), c.item),
            _ = (G) => y(() => {}, c.item, G),
            M = qt(c),
            { data: N } = (0, Pt.js)(M.requestorID);
          return (0, s.jsx)("a", {
            href: w,
            onMouseDown: _,
            children: (0, s.jsx)(Dt, {
              fallbackLogo: (0, s.jsx)(Q.Gv$, {}),
              icon: (0, s.jsx)(Q.sdo, {}),
              onActivate: z,
              location: f,
              eUIMode: b,
              data: M,
              timestamp: c.timestamp,
              nUnread: c.rgunread.length,
              requestorAvatarURL: N == null ? void 0 : N.avatar_url_medium,
              requestorName: N == null ? void 0 : N.m_strPlayerName,
              bNewIndicator: (0, D.Rl)(c.item),
              onHide: h,
            }),
          });
        }
        function Zi(l) {
          var c, y, f, b;
          const {
              rollup: h,
              onNotificationClick: v,
              location: w,
              uimode: z,
              onHide: _,
            } = l,
            M = qt(h),
            N = (0, m.LH)(),
            G = i.TS.COMMUNITY_BASE_URL + h.url,
            A = () => v(() => window.location.assign(G), h.item),
            H = (Oi) => {
              v(() => {}, h.item, Oi);
            },
            Y = (0, D.iO)(M)
              ? (c = M == null ? void 0 : M.account_steam_id) == null
                ? void 0
                : c.GetAccountID()
              : null,
            { data: k } = (0, Pt.js)(Y),
            $ = (0, D.OT)(M)
              ? (y = M == null ? void 0 : M.owner_steam_id) == null
                ? void 0
                : y.GetAccountID()
              : null,
            { data: X } = (0, Pt.js)($),
            Vt =
              (f = M.json_data) != null && f.app_id
                ? { appid: (b = M.json_data) == null ? void 0 : b.app_id }
                : void 0,
            { data: Ct } = (0, zt.J$)(Vt),
            [J, vt] = V(),
            ri = J
              ? vt.FilterText(M.account_steam_id.GetAccountID(), M.title)
              : "",
            zi = J
              ? vt.FilterText(M.account_steam_id.GetAccountID(), M.comment)
              : "";
          return (0, s.jsx)("a", {
            href: G,
            onMouseDown: H,
            children: (0, s.jsx)(Vi, {
              fallbackLogo: (0, s.jsx)(Q.Qte, {}),
              icon: (0, s.jsx)(Q.MwB, {}),
              onActivate: A,
              location: w,
              currentUserSteamID: N,
              eUIMode: z,
              data: M,
              timestamp: h.timestamp,
              nUnread: h.rgunread.length,
              postedByAvatarURL: k == null ? void 0 : k.avatar_url_medium,
              postedByDisplayName: k == null ? void 0 : k.m_strPlayerName,
              ownerDisplayName: X == null ? void 0 : X.m_strPlayerName,
              bNewIndicator: (0, D.Rl)(h.item),
              appName: Ct == null ? void 0 : Ct.name,
              onHide: _,
              commentTitle: ri,
              commentBody: zi,
              bLoading: !J,
            }),
          });
        }
        function Nr(l) {
          const {
              rollup: c,
              onNotificationClick: y,
              location: f,
              uimode: b,
              onHide: h,
            } = l,
            v = qt(c),
            { data: w } = (0, zt.J$)({ appid: v.appid }),
            [z, _] = (0, q.useState)(""),
            M = (0, m.LH)();
          (0, q.useEffect)(() => {
            var A;
            if (v.count > 1 && (A = v.appids) != null && A.length)
              return _(
                i.TS.STORE_BASE_URL +
                  `wishlist/profiles/${M}/?wng=${v.appids.toString()}#sort=discount`,
              );
            if (w) return _(i.TS.STORE_BASE_URL + w.store_url_path);
            const H = v.appid ? `?appid=${v.appid}` : "";
            _(
              i.TS.STORE_BASE_URL + `wishlist/profiles/${M}/${H}#sort=discount`,
            );
          }, [v, w, M]);
          const N = () => y(() => window.location.assign(z), c.item),
            G = (A) => y(() => {}, c.item, A);
          return (0, s.jsx)("a", {
            href: z,
            onMouseDown: G,
            children: (0, s.jsx)(ei, {
              fallbackLogo: (0, s.jsx)(Q.Qte, {}),
              icon: (0, s.jsx)(Q.ilR, {}),
              onActivate: N,
              location: f,
              data: v,
              timestamp: c.timestamp,
              nUnread: c.rgunread.length,
              eUIMode: b,
              bNewIndicator: (0, D.Rl)(c.item),
              onHide: h,
            }),
          });
        }
        function Kt(l) {
          const { url: c, count: y, icon: f, strLocToken: b, eFeature: h } = l,
            v = (0, At.Hw)(h);
          return !y || v
            ? null
            : (0, s.jsx)("a", {
                href: c,
                className: Si().WebPinnedNotification,
                children: (0, s.jsx)(lr, {
                  icon: (0, s.jsx)(f, {}),
                  count: y,
                  onActivate: () => window.location.assign(c),
                  strLocToken: b,
                  eUIMode: R.yrU,
                  visible: !0,
                }),
              });
        }
        const Ui = {
          [j.Vv.v_]: Zi,
          [j.Vv.XJ]: Nr,
          [j.Vv.pZ]: Tr,
          [j.Vv.hW]: $i,
          [j.Vv.K]: Xi,
          [j.Vv.an]: Ji,
          [j.Vv.Y9]: Rt,
          [j.Vv.YE]: zr,
          [j.Vv.mr]: _r,
        };
      },
      97786: (xt) => {
        xt.exports = {
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
      93761: (xt) => {
        xt.exports = {
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
      92012: (xt) => {
        xt.exports = {
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
      87910: (xt) => {
        xt.exports = { WebPinnedNotification: "_34nLZDNirxRHssbsjB_dJf" };
      },
    },
  ]);
})();
