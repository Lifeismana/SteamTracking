/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [28310],
  {
    96305: (e, t, r) => {
      r.d(t, { GO: () => i, cf: () => n });
      const i = 1,
        n = 2;
    },
    37226: (e, t, r) => {
      r.d(t, { Bv: () => n, Dq: () => i, Yd: () => a });
      const i = 5,
        n = 7,
        a = 10;
    },
    37340: (e, t, r) => {
      r.d(t, {
        GG: () => G,
        b$: () => X,
        V4: () => k,
        nH: () => P,
        rB: () => n,
        Vv: () => i,
        p$: () => E,
        Fn: () => K,
      });
      var i = {};
      r.r(i),
        r.d(i, {
          Y9: () => w,
          bh: () => F,
          v_: () => d,
          Rj: () => R,
          Cz: () => j,
          HN: () => v,
          pZ: () => B,
          e9: () => M,
          K: () => m,
          wY: () => f,
          Jo: () => l,
          hW: () => _,
          wp: () => g,
          oe: () => z,
          Sx: () => S,
          uH: () => W,
          j3: () => h,
          JN: () => q,
          FK: () => U,
          Ol: () => b,
          Iz: () => I,
          YE: () => T,
          js: () => O,
          yh: () => u,
          an: () => y,
          mr: () => C,
          XJ: () => p,
        });
      var n = {};
      r.r(n), r.d(n, { D: () => N });
      var a = r(80613),
        s = r.n(a),
        o = r(89068),
        c = r(56545);
      const l = 0,
        u = 1,
        m = 2,
        d = 3,
        _ = 4,
        B = 5,
        g = 6,
        b = 7,
        p = 8,
        y = 9,
        M = 10,
        f = 11,
        w = 12,
        z = 14,
        S = 15,
        R = 16,
        j = 17,
        h = 18,
        v = 19,
        W = 20,
        q = 21,
        T = 22,
        O = 23,
        F = 24,
        U = 28,
        C = 29,
        I = 30,
        N = 0;
      function E(e) {
        return "unknown ESteamNotificationType ( " + e + " )";
      }
      class x extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            x.prototype.notification_id || o.Sg(x.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: {
                  notification_id: {
                    n: 1,
                    br: o.qM.readUint64String,
                    bw: o.gp.writeUint64String,
                  },
                  notification_targets: {
                    n: 2,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  notification_type: {
                    n: 3,
                    br: o.qM.readEnum,
                    bw: o.gp.writeEnum,
                  },
                  body_data: {
                    n: 4,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                  read: { n: 7, br: o.qM.readBool, bw: o.gp.writeBool },
                  timestamp: {
                    n: 8,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  hidden: { n: 9, br: o.qM.readBool, bw: o.gp.writeBool },
                  expiry: { n: 10, br: o.qM.readUint32, bw: o.gp.writeUint32 },
                  viewed: { n: 11, br: o.qM.readUint32, bw: o.gp.writeUint32 },
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
        static toObject(e, t) {
          return o.BT(x.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(x.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new x();
          return x.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(x.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(x.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "SteamNotificationData";
        }
      }
      class G extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            G.prototype.include_hidden || o.Sg(G.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: {
                  include_hidden: {
                    n: 1,
                    d: !1,
                    br: o.qM.readBool,
                    bw: o.gp.writeBool,
                  },
                  language: {
                    n: 2,
                    d: 0,
                    br: o.qM.readInt32,
                    bw: o.gp.writeInt32,
                  },
                  include_confirmation_count: {
                    n: 3,
                    d: !0,
                    br: o.qM.readBool,
                    bw: o.gp.writeBool,
                  },
                  include_pinned_counts: {
                    n: 4,
                    d: !1,
                    br: o.qM.readBool,
                    bw: o.gp.writeBool,
                  },
                  include_read: {
                    n: 5,
                    d: !0,
                    br: o.qM.readBool,
                    bw: o.gp.writeBool,
                  },
                  count_only: {
                    n: 6,
                    d: !1,
                    br: o.qM.readBool,
                    bw: o.gp.writeBool,
                  },
                },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = o.w0(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(G.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(G.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new G();
          return G.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(G.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(G.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamNotification_GetSteamNotifications_Request";
        }
      }
      class A extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            A.prototype.notifications || o.Sg(A.M()),
            a.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: {
                  notifications: { n: 1, c: x, r: !0, q: !0 },
                  confirmation_count: {
                    n: 2,
                    br: o.qM.readInt32,
                    bw: o.gp.writeInt32,
                  },
                  pending_gift_count: {
                    n: 3,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  pending_friend_count: {
                    n: 5,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  unread_count: {
                    n: 6,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  pending_family_invite_count: {
                    n: 7,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                },
              }),
            A.sm_m
          );
        }
        static MBF() {
          return A.sm_mbf || (A.sm_mbf = o.w0(A.M())), A.sm_mbf;
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(A.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(A.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new A();
          return A.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(A.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(A.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamNotification_GetSteamNotifications_Response";
        }
      }
      class k extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            k.prototype.timestamp || o.Sg(k.M()),
            a.Message.initialize(this, e, 0, -1, [3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
                fields: {
                  timestamp: {
                    n: 1,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  notification_type: {
                    n: 2,
                    br: o.qM.readEnum,
                    bw: o.gp.writeEnum,
                  },
                  notification_ids: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: o.qM.readUint64String,
                    pbr: o.qM.readPackedUint64String,
                    bw: o.gp.writeRepeatedUint64String,
                  },
                  mark_all_read: {
                    n: 4,
                    br: o.qM.readBool,
                    bw: o.gp.writeBool,
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
        static toObject(e, t) {
          return o.BT(k.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(k.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new k();
          return k.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(k.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(k.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamNotification_MarkNotificationsRead_Notification";
        }
      }
      class P extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            P.prototype.remote_client_id || o.Sg(P.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: {
                  remote_client_id: {
                    n: 1,
                    br: o.qM.readUint64String,
                    bw: o.gp.writeUint64String,
                  },
                  target_client_type: {
                    n: 2,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
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
        static toObject(e, t) {
          return o.BT(P.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(P.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new P();
          return P.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(P.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(P.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamNotification_MarkNotificationsViewed_Notification";
        }
      }
      class D extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            D.prototype.notification_type || o.Sg(D.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: {
                  notification_type: {
                    n: 1,
                    br: o.qM.readEnum,
                    bw: o.gp.writeEnum,
                  },
                  notification_targets: {
                    n: 2,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
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
        static toObject(e, t) {
          return o.BT(D.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(D.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new D();
          return D.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(D.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(D.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "SteamNotificationPreference";
        }
      }
      class L extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            L.prototype.preferences || o.Sg(L.M()),
            a.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
                fields: { preferences: { n: 1, c: D, r: !0, q: !0 } },
              }),
            L.sm_m
          );
        }
        static MBF() {
          return L.sm_mbf || (L.sm_mbf = o.w0(L.M())), L.sm_mbf;
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(L.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(L.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new L();
          return L.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(L.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(L.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamNotification_SetPreferences_Request";
        }
      }
      class V extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return V.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new V();
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new V();
          return V.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamNotification_SetPreferences_Response";
        }
      }
      class $ extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return $.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new $();
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new $();
          return $.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamNotification_GetPreferences_Request";
        }
      }
      class H extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            H.prototype.preferences || o.Sg(H.M()),
            a.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            H.sm_m ||
              (H.sm_m = {
                proto: H,
                fields: { preferences: { n: 1, c: D, r: !0, q: !0 } },
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
        static toObject(e, t) {
          return o.BT(H.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(H.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new H();
          return H.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(H.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(H.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamNotification_GetPreferences_Response";
        }
      }
      class X extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            X.prototype.notification_ids || o.Sg(X.M()),
            a.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            X.sm_m ||
              (X.sm_m = {
                proto: X,
                fields: {
                  notification_ids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: o.qM.readUint64String,
                    pbr: o.qM.readPackedUint64String,
                    bw: o.gp.writeRepeatedUint64String,
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
        static toObject(e, t) {
          return o.BT(X.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(X.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new X();
          return X.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(X.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(X.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamNotification_HideNotification_Notification";
        }
      }
      class Y extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Y.prototype.notifications || o.Sg(Y.M()),
            a.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Y.sm_m ||
              (Y.sm_m = {
                proto: Y,
                fields: {
                  notifications: { n: 1, c: x, r: !0, q: !0 },
                  pending_gift_count: {
                    n: 2,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  pending_friend_count: {
                    n: 3,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  pending_family_invite_count: {
                    n: 4,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                },
              }),
            Y.sm_m
          );
        }
        static MBF() {
          return Y.sm_mbf || (Y.sm_mbf = o.w0(Y.M())), Y.sm_mbf;
        }
        toObject(e = !1) {
          return Y.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(Y.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(Y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new Y();
          return Y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(Y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(Y.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return Y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamNotification_NotificationsReceived_Notification";
        }
      }
      class J extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            J.prototype.preferences || o.Sg(J.M()),
            a.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            J.sm_m ||
              (J.sm_m = {
                proto: J,
                fields: { preferences: { n: 1, c: D, r: !0, q: !0 } },
              }),
            J.sm_m
          );
        }
        static MBF() {
          return J.sm_mbf || (J.sm_mbf = o.w0(J.M())), J.sm_mbf;
        }
        toObject(e = !1) {
          return J.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(J.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(J.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new J();
          return J.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(J.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(J.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamNotification_PreferencesUpdated_Notification";
        }
      }
      var K, Z;
      !(function (e) {
        (e.GetSteamNotifications = function (e, t, r) {
          return e.SendMsg(
            "SteamNotification.GetSteamNotifications#1",
            (0, c.I8)(G, t, r),
            A,
            { bConstMethod: !0, ePrivilege: 1 },
          );
        }),
          (e.MarkNotificationsRead = function (e, t) {
            return e.SendNotification(
              "SteamNotification.MarkNotificationsRead#1",
              (0, c.I8)(k, t),
              { ePrivilege: 1 },
            );
          }),
          (e.MarkNotificationsViewed = function (e, t) {
            return e.SendNotification(
              "SteamNotification.MarkNotificationsViewed#1",
              (0, c.I8)(P, t),
              { ePrivilege: 1 },
            );
          }),
          (e.HideNotification = function (e, t) {
            return e.SendNotification(
              "SteamNotification.HideNotification#1",
              (0, c.I8)(X, t),
              { ePrivilege: 1 },
            );
          }),
          (e.SetPreferences = function (e, t, r) {
            return e.SendMsg(
              "SteamNotification.SetPreferences#1",
              (0, c.I8)(L, t, r),
              V,
              { ePrivilege: 1 },
            );
          }),
          (e.GetPreferences = function (e, t, r) {
            return e.SendMsg(
              "SteamNotification.GetPreferences#1",
              (0, c.I8)($, t, r),
              H,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          });
      })(K || (K = {})),
        (function (e) {
          (e.NotificationsReceivedHandler = {
            name: "SteamNotificationClient.NotificationsReceived#1",
            request: Y,
          }),
            (e.PreferencesUpdatedHandler = {
              name: "SteamNotificationClient.PreferencesUpdated#1",
              request: J,
            });
        })(Z || (Z = {}));
    },
    46120: (e, t, r) => {
      r.d(t, {
        OT: () => ir,
        iO: () => rr,
        T4: () => tr,
        n8: () => er,
        hr: () => Qt,
        IC: () => Ut,
        V4: () => xt,
        sR: () => Nt,
        jb: () => mr,
        Rl: () => _r,
        XT: () => Br,
        cE: () => Ht,
        tM: () => Xt,
        K9: () => Ft,
        bP: () => sr,
        aq: () => It,
        u5: () => nr,
        IL: () => Kt,
      });
      var i,
        n = r(34629),
        a = r(37340),
        s = r(56545),
        o = r(37085),
        c = r(22837),
        l = r(80613),
        u = r.n(l),
        m = r(89068);
      class d extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.type || m.Sg(d.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  type: { n: 1, br: m.qM.readString, bw: m.gp.writeString },
                  value: { n: 2, br: m.qM.readString, bw: m.gp.writeString },
                  color: { n: 3, br: m.qM.readString, bw: m.gp.writeString },
                  label: { n: 4, br: m.qM.readString, bw: m.gp.writeString },
                  name: { n: 5, br: m.qM.readString, bw: m.gp.writeString },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = m.w0(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(d.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEconItem_DescriptionLine";
        }
      }
      class _ extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.link || m.Sg(_.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  link: { n: 1, br: m.qM.readString, bw: m.gp.writeString },
                  name: { n: 2, br: m.qM.readString, bw: m.gp.writeString },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = m.w0(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(_.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEconItem_Action";
        }
      }
      class B extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.appid || m.Sg(B.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  appid: { n: 1, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                  category: { n: 2, br: m.qM.readString, bw: m.gp.writeString },
                  internal_name: {
                    n: 3,
                    br: m.qM.readString,
                    bw: m.gp.writeString,
                  },
                  localized_category_name: {
                    n: 4,
                    br: m.qM.readString,
                    bw: m.gp.writeString,
                  },
                  localized_tag_name: {
                    n: 5,
                    br: m.qM.readString,
                    bw: m.gp.writeString,
                  },
                  color: { n: 6, br: m.qM.readString, bw: m.gp.writeString },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = m.w0(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(B.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEconItem_Tag";
        }
      }
      class g extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.contained_items || m.Sg(g.M()),
            l.Message.initialize(this, e, 0, -1, [1, 2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  contained_items: { n: 1, c: b, r: !0, q: !0 },
                  search_tags: { n: 2, c: B, r: !0, q: !0 },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = m.w0(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(g.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEconItem_ContainerProperties";
        }
      }
      class b extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.classid || m.Sg(b.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  classid: {
                    n: 1,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  instanceid: {
                    n: 2,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = m.w0(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(b.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEconItem_ClassIdentifiers";
        }
      }
      class p extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.appid || m.Sg(p.M()),
            l.Message.initialize(
              this,
              e,
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
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  appid: { n: 1, br: m.qM.readInt32, bw: m.gp.writeInt32 },
                  classid: {
                    n: 2,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  instanceid: {
                    n: 3,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  currency: { n: 4, br: m.qM.readBool, bw: m.gp.writeBool },
                  background_color: {
                    n: 5,
                    br: m.qM.readString,
                    bw: m.gp.writeString,
                  },
                  icon_url: { n: 6, br: m.qM.readString, bw: m.gp.writeString },
                  icon_url_large: {
                    n: 7,
                    br: m.qM.readString,
                    bw: m.gp.writeString,
                  },
                  descriptions: { n: 8, c: d, r: !0, q: !0 },
                  tradable: { n: 9, br: m.qM.readBool, bw: m.gp.writeBool },
                  actions: { n: 10, c: _, r: !0, q: !0 },
                  owner_descriptions: { n: 11, c: d, r: !0, q: !0 },
                  owner_actions: { n: 12, c: _, r: !0, q: !0 },
                  fraudwarnings: {
                    n: 13,
                    r: !0,
                    q: !0,
                    br: m.qM.readString,
                    bw: m.gp.writeRepeatedString,
                  },
                  name: { n: 14, br: m.qM.readString, bw: m.gp.writeString },
                  name_color: {
                    n: 15,
                    br: m.qM.readString,
                    bw: m.gp.writeString,
                  },
                  type: { n: 16, br: m.qM.readString, bw: m.gp.writeString },
                  market_name: {
                    n: 17,
                    br: m.qM.readString,
                    bw: m.gp.writeString,
                  },
                  market_hash_name: {
                    n: 18,
                    br: m.qM.readString,
                    bw: m.gp.writeString,
                  },
                  market_fee: {
                    n: 19,
                    br: m.qM.readString,
                    bw: m.gp.writeString,
                  },
                  market_fee_app: {
                    n: 28,
                    br: m.qM.readInt32,
                    bw: m.gp.writeInt32,
                  },
                  contained_item: { n: 20, c: p },
                  market_actions: { n: 21, c: _, r: !0, q: !0 },
                  commodity: { n: 22, br: m.qM.readBool, bw: m.gp.writeBool },
                  market_tradable_restriction: {
                    n: 23,
                    br: m.qM.readInt32,
                    bw: m.gp.writeInt32,
                  },
                  market_marketable_restriction: {
                    n: 24,
                    br: m.qM.readInt32,
                    bw: m.gp.writeInt32,
                  },
                  marketable: { n: 25, br: m.qM.readBool, bw: m.gp.writeBool },
                  tags: { n: 26, c: B, r: !0, q: !0 },
                  item_expiration: {
                    n: 27,
                    br: m.qM.readString,
                    bw: m.gp.writeString,
                  },
                  market_buy_country_restriction: {
                    n: 30,
                    br: m.qM.readString,
                    bw: m.gp.writeString,
                  },
                  market_sell_country_restriction: {
                    n: 31,
                    br: m.qM.readString,
                    bw: m.gp.writeString,
                  },
                  sealed: { n: 32, br: m.qM.readBool, bw: m.gp.writeBool },
                  container_properties: { n: 33, c: g },
                  market_bucket_group_name: {
                    n: 34,
                    br: m.qM.readString,
                    bw: m.gp.writeString,
                  },
                  market_bucket_group_id: {
                    n: 35,
                    br: m.qM.readString,
                    bw: m.gp.writeString,
                  },
                  sealed_type: {
                    n: 37,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  market_name_inside_group: {
                    n: 38,
                    br: m.qM.readString,
                    bw: m.gp.writeString,
                  },
                  market_bucket_id: {
                    n: 39,
                    br: m.qM.readString,
                    bw: m.gp.writeString,
                  },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = m.w0(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(p.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEconItem_Description";
        }
      }
      class y extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.propertyid || m.Sg(y.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  propertyid: {
                    n: 1,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  int_value: {
                    n: 2,
                    br: m.qM.readInt64String,
                    bw: m.gp.writeInt64String,
                  },
                  float_value: {
                    n: 3,
                    br: m.qM.readFloat,
                    bw: m.gp.writeFloat,
                  },
                  string_value: {
                    n: 4,
                    br: m.qM.readString,
                    bw: m.gp.writeString,
                  },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = m.w0(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(y.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEconItem_AssetProperty";
        }
      }
      class M extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.classid || m.Sg(M.M()),
            l.Message.initialize(this, e, 0, -1, [3, 4, 5], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  classid: {
                    n: 1,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  instanceid: {
                    n: 2,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  standalone_properties: { n: 3, c: y, r: !0, q: !0 },
                  parent_relationship_properties: { n: 4, c: y, r: !0, q: !0 },
                  nested_accessories: { n: 5, c: M, r: !0, q: !0 },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = m.w0(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(M.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEconItem_AssetAccessory";
        }
      }
      class f extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.appid || m.Sg(f.M()),
            l.Message.initialize(this, e, 0, -1, [4, 5], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  appid: { n: 1, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                  contextid: {
                    n: 2,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  assetid: {
                    n: 3,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  asset_properties: { n: 4, c: y, r: !0, q: !0 },
                  asset_accessories: { n: 5, c: M, r: !0, q: !0 },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = m.w0(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(f.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEconItem_AssetProperties";
        }
      }
      class w extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.id || m.Sg(w.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  id: { n: 1, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                  name: { n: 2, br: m.qM.readString, bw: m.gp.writeString },
                  type: { n: 3, br: m.qM.readEnum, bw: m.gp.writeEnum },
                  float_min: { n: 4, br: m.qM.readFloat, bw: m.gp.writeFloat },
                  float_max: { n: 5, br: m.qM.readFloat, bw: m.gp.writeFloat },
                  int_min: {
                    n: 6,
                    br: m.qM.readInt64String,
                    bw: m.gp.writeInt64String,
                  },
                  int_max: {
                    n: 7,
                    br: m.qM.readInt64String,
                    bw: m.gp.writeInt64String,
                  },
                  localized_label: {
                    n: 8,
                    br: m.qM.readString,
                    bw: m.gp.writeString,
                  },
                  hide_from_description: {
                    n: 9,
                    br: m.qM.readBool,
                    bw: m.gp.writeBool,
                  },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = m.w0(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(w.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEconItem_AssetPropertySchema";
        }
      }
      class z extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.appid || m.Sg(z.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  appid: { n: 1, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                  language: { n: 2, br: m.qM.readString, bw: m.gp.writeString },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = m.w0(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(z.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_GetAssetPropertySchema_Request";
        }
      }
      class S extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.property_schemas || m.Sg(S.M()),
            l.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: { property_schemas: { n: 1, c: w, r: !0, q: !0 } },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = m.w0(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(S.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_GetAssetPropertySchema_Response";
        }
      }
      class R extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.appid || m.Sg(R.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  appid: { n: 1, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                  contextid: {
                    n: 2,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  assetid: {
                    n: 3,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  classid: {
                    n: 4,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  instanceid: {
                    n: 5,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  currencyid: {
                    n: 6,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  amount: {
                    n: 7,
                    br: m.qM.readInt64String,
                    bw: m.gp.writeInt64String,
                  },
                  missing: { n: 8, br: m.qM.readBool, bw: m.gp.writeBool },
                  est_usd: {
                    n: 9,
                    br: m.qM.readInt64String,
                    bw: m.gp.writeInt64String,
                  },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = m.w0(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(R.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(R.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_Asset";
        }
      }
      class j extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.steamid || m.Sg(j.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  steamid: {
                    n: 1,
                    br: m.qM.readFixed64String,
                    bw: m.gp.writeFixed64String,
                  },
                  appid: { n: 2, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                  contextid: {
                    n: 3,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  get_descriptions: {
                    n: 4,
                    br: m.qM.readBool,
                    bw: m.gp.writeBool,
                  },
                  get_asset_properties: {
                    n: 11,
                    br: m.qM.readBool,
                    bw: m.gp.writeBool,
                  },
                  for_trade_offer_verification: {
                    n: 10,
                    br: m.qM.readBool,
                    bw: m.gp.writeBool,
                  },
                  language: { n: 5, br: m.qM.readString, bw: m.gp.writeString },
                  filters: { n: 6, c: h },
                  start_assetid: {
                    n: 8,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  count: { n: 9, br: m.qM.readInt32, bw: m.gp.writeInt32 },
                },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = m.w0(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(j.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(j.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new j();
          return j.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(j.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(j.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_GetInventoryItemsWithDescriptions_Request";
        }
      }
      class h extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.assetids || m.Sg(h.M()),
            l.Message.initialize(this, e, 0, -1, [1, 2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  assetids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: m.qM.readUint64String,
                    pbr: m.qM.readPackedUint64String,
                    bw: m.gp.writeRepeatedUint64String,
                  },
                  currencyids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: m.qM.readUint32,
                    pbr: m.qM.readPackedUint32,
                    bw: m.gp.writeRepeatedUint32,
                  },
                  tradable_only: {
                    n: 3,
                    br: m.qM.readBool,
                    bw: m.gp.writeBool,
                  },
                  marketable_only: {
                    n: 4,
                    br: m.qM.readBool,
                    bw: m.gp.writeBool,
                  },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = m.w0(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(h.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_GetInventoryItemsWithDescriptions_Request_FilterOptions";
        }
      }
      class v extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.assets || m.Sg(v.M()),
            l.Message.initialize(this, e, 0, -1, [1, 2, 3, 7], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  assets: { n: 1, c: R, r: !0, q: !0 },
                  descriptions: { n: 2, c: p, r: !0, q: !0 },
                  missing_assets: { n: 3, c: R, r: !0, q: !0 },
                  asset_properties: { n: 7, c: f, r: !0, q: !0 },
                  more_items: { n: 4, br: m.qM.readBool, bw: m.gp.writeBool },
                  last_assetid: {
                    n: 5,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  total_inventory_count: {
                    n: 6,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = m.w0(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(v.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_GetInventoryItemsWithDescriptions_Response";
        }
      }
      class W extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.generate_new_token || m.Sg(W.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  generate_new_token: {
                    n: 1,
                    br: m.qM.readBool,
                    bw: m.gp.writeBool,
                  },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = m.w0(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(W.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(W.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new W();
          return W.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(W.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(W.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_GetTradeOfferAccessToken_Request";
        }
      }
      class q extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            q.prototype.trade_offer_access_token || m.Sg(q.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: {
                  trade_offer_access_token: {
                    n: 1,
                    br: m.qM.readString,
                    bw: m.gp.writeString,
                  },
                },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = m.w0(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(q.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new q();
          return q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(q.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_GetTradeOfferAccessToken_Response";
        }
      }
      class T extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.return_url || m.Sg(T.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  return_url: {
                    n: 1,
                    br: m.qM.readString,
                    bw: m.gp.writeString,
                  },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = m.w0(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(T.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(T.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new T();
          return T.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_ClientGetItemShopOverlayAuthURL_Request";
        }
      }
      class O extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.url || m.Sg(O.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: {
                  url: { n: 1, br: m.qM.readString, bw: m.gp.writeString },
                },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = m.w0(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(O.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(O.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new O();
          return O.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(O.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(O.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_ClientGetItemShopOverlayAuthURL_Response";
        }
      }
      class F extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.language || m.Sg(F.M()),
            l.Message.initialize(this, e, 0, -1, [3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  language: { n: 1, br: m.qM.readString, bw: m.gp.writeString },
                  appid: { n: 2, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                  classes: { n: 3, c: b, r: !0, q: !0 },
                  high_pri: { n: 4, br: m.qM.readBool, bw: m.gp.writeBool },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = m.w0(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(F.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(F.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(F.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(F.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_GetAssetClassInfo_Request";
        }
      }
      class U extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            U.prototype.descriptions || m.Sg(U.M()),
            l.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: { descriptions: { n: 1, c: p, r: !0, q: !0 } },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = m.w0(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(U.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(U.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new U();
          return U.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(U.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(U.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_GetAssetClassInfo_Response";
        }
      }
      !(function (e) {
        (e.GetInventoryItemsWithDescriptions = function (e, t, r) {
          return e.SendMsg(
            "Econ.GetInventoryItemsWithDescriptions#1",
            (0, s.I8)(j, t, r),
            v,
            { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 2 },
          );
        }),
          (e.GetTradeOfferAccessToken = function (e, t, r) {
            return e.SendMsg(
              "Econ.GetTradeOfferAccessToken#1",
              (0, s.I8)(W, t, r),
              q,
              { ePrivilege: 1 },
            );
          }),
          (e.ClientGetItemShopOverlayAuthURL = function (e, t, r) {
            return e.SendMsg(
              "Econ.ClientGetItemShopOverlayAuthURL#1",
              (0, s.I8)(T, t, r),
              O,
              { ePrivilege: 1 },
            );
          }),
          (e.GetAssetClassInfo = function (e, t, r) {
            return e.SendMsg(
              "Econ.GetAssetClassInfo#1",
              (0, s.I8)(F, t, r),
              U,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetAssetPropertySchema = function (e, t, r) {
            return e.SendMsg(
              "Econ.GetAssetPropertySchema#1",
              (0, s.I8)(z, t, r),
              S,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          });
      })(i || (i = {}));
      var C = r(80902),
        I = r(14947),
        N = r(17720),
        E = r(9344),
        x = r(37226),
        G = r(96305),
        A = r(14771),
        k = r(60778),
        P = r(30470),
        D = r(78327),
        L = r(30925),
        V = r(35850),
        $ = r(81393),
        H = r(15419);
      class X extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            X.prototype.data || m.Sg(X.M()),
            l.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            X.sm_m ||
              (X.sm_m = {
                proto: X,
                fields: { data: { n: 1, c: Y, r: !0, q: !0 } },
              }),
            X.sm_m
          );
        }
        static MBF() {
          return X.sm_mbf || (X.sm_mbf = m.w0(X.M())), X.sm_mbf;
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(X.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(X.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new X();
          return X.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(X.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(X.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "AdditionalSubjectData";
        }
      }
      class Y extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Y.prototype.key || m.Sg(Y.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Y.sm_m ||
              (Y.sm_m = {
                proto: Y,
                fields: {
                  key: { n: 1, br: m.qM.readString, bw: m.gp.writeString },
                  value: { n: 2, br: m.qM.readString, bw: m.gp.writeString },
                },
              }),
            Y.sm_m
          );
        }
        static MBF() {
          return Y.sm_mbf || (Y.sm_mbf = m.w0(Y.M())), Y.sm_mbf;
        }
        toObject(e = !1) {
          return Y.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(Y.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(Y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new Y();
          return Y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(Y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(Y.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return Y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "AdditionalSubjectData_DataEntry";
        }
      }
      class J extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            J.prototype.report_reason || m.Sg(J.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            J.sm_m ||
              (J.sm_m = {
                proto: J,
                fields: {
                  report_reason: {
                    n: 1,
                    br: m.qM.readEnum,
                    bw: m.gp.writeEnum,
                  },
                  report_text: {
                    n: 2,
                    br: m.qM.readString,
                    bw: m.gp.writeString,
                  },
                  owner_steamid: {
                    n: 3,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  language: { n: 4, br: m.qM.readInt32, bw: m.gp.writeInt32 },
                  subject_type: { n: 5, br: m.qM.readEnum, bw: m.gp.writeEnum },
                  subject_group_id: {
                    n: 6,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  subject_id: {
                    n: 7,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  additional_subject_data: { n: 8, c: X },
                  detected_by_automation: {
                    n: 9,
                    br: m.qM.readBool,
                    bw: m.gp.writeBool,
                  },
                },
              }),
            J.sm_m
          );
        }
        static MBF() {
          return J.sm_mbf || (J.sm_mbf = m.w0(J.M())), J.sm_mbf;
        }
        toObject(e = !1) {
          return J.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(J.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(J.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new J();
          return J.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(J.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(J.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_CreateContentReport_Request";
        }
      }
      class K extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            K.prototype.report_id || m.Sg(K.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            K.sm_m ||
              (K.sm_m = {
                proto: K,
                fields: {
                  report_id: {
                    n: 1,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                },
              }),
            K.sm_m
          );
        }
        static MBF() {
          return K.sm_mbf || (K.sm_mbf = m.w0(K.M())), K.sm_mbf;
        }
        toObject(e = !1) {
          return K.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(K.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(K.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new K();
          return K.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(K.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(K.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return K.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_CreateContentReport_Response";
        }
      }
      class Z extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Z.prototype.steamid || m.Sg(Z.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Z.sm_m ||
              (Z.sm_m = {
                proto: Z,
                fields: {
                  steamid: {
                    n: 1,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  start: { n: 2, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                  count: { n: 3, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                },
              }),
            Z.sm_m
          );
        }
        static MBF() {
          return Z.sm_mbf || (Z.sm_mbf = m.w0(Z.M())), Z.sm_mbf;
        }
        toObject(e = !1) {
          return Z.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(Z.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(Z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new Z();
          return Z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(Z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(Z.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetReportsSubmittedByUser_Request";
        }
      }
      class Q extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Q.prototype.report_id || m.Sg(Q.M()),
            l.Message.initialize(this, e, 0, -1, [23, 24], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Q.sm_m ||
              (Q.sm_m = {
                proto: Q,
                fields: {
                  report_id: {
                    n: 1,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  reporter_steamid: {
                    n: 2,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  time_reported: {
                    n: 3,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  report_reason: {
                    n: 4,
                    br: m.qM.readEnum,
                    bw: m.gp.writeEnum,
                  },
                  report_text: {
                    n: 5,
                    br: m.qM.readString,
                    bw: m.gp.writeString,
                  },
                  subject_type: { n: 6, br: m.qM.readEnum, bw: m.gp.writeEnum },
                  subject_group_id: {
                    n: 7,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  subject_id: {
                    n: 8,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  resolved: { n: 9, br: m.qM.readEnum, bw: m.gp.writeEnum },
                  time_resolved: {
                    n: 10,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  resolver_steamid: {
                    n: 11,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  time_notified: {
                    n: 12,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  additional_subject_data: { n: 13, c: X },
                  time_disputed: {
                    n: 14,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  dispute_details: {
                    n: 15,
                    br: m.qM.readString,
                    bw: m.gp.writeString,
                  },
                  dispute_resolver_steamid: {
                    n: 16,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  dispute_resolved: {
                    n: 17,
                    br: m.qM.readEnum,
                    bw: m.gp.writeEnum,
                  },
                  time_dispute_resolved: {
                    n: 18,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  detected_by_automation: {
                    n: 19,
                    d: !1,
                    br: m.qM.readBool,
                    bw: m.gp.writeBool,
                  },
                  resolved_by_automation: {
                    n: 20,
                    d: 0,
                    br: m.qM.readEnum,
                    bw: m.gp.writeEnum,
                  },
                  content_moderated_reason: {
                    n: 21,
                    br: m.qM.readEnum,
                    bw: m.gp.writeEnum,
                  },
                  dispute_resolved_reason: {
                    n: 22,
                    br: m.qM.readEnum,
                    bw: m.gp.writeEnum,
                  },
                  sanctions_applied: { n: 23, c: se, r: !0, q: !0 },
                  sanctions_applied_on_dispute: { n: 24, c: se, r: !0, q: !0 },
                  reported_content_id: {
                    n: 25,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                },
              }),
            Q.sm_m
          );
        }
        static MBF() {
          return Q.sm_mbf || (Q.sm_mbf = m.w0(Q.M())), Q.sm_mbf;
        }
        toObject(e = !1) {
          return Q.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(Q.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(Q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new Q();
          return Q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(Q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(Q.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ContentReport";
        }
      }
      class ee extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ee.prototype.content_report || m.Sg(ee.M()),
            l.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ee.sm_m ||
              (ee.sm_m = {
                proto: ee,
                fields: {
                  content_report: { n: 1, c: Q, r: !0, q: !0 },
                  total_count: {
                    n: 2,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                },
              }),
            ee.sm_m
          );
        }
        static MBF() {
          return ee.sm_mbf || (ee.sm_mbf = m.w0(ee.M())), ee.sm_mbf;
        }
        toObject(e = !1) {
          return ee.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(ee.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(ee.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new ee();
          return ee.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(ee.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(ee.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetReportsSubmittedByUser_Response";
        }
      }
      class te extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            te.prototype.steamid || m.Sg(te.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            te.sm_m ||
              (te.sm_m = {
                proto: te,
                fields: {
                  steamid: {
                    n: 1,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  subject_type: { n: 2, br: m.qM.readEnum, bw: m.gp.writeEnum },
                  subject_group_id: {
                    n: 3,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  subject_id: {
                    n: 4,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  reported_content_id: {
                    n: 5,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                },
              }),
            te.sm_m
          );
        }
        static MBF() {
          return te.sm_mbf || (te.sm_mbf = m.w0(te.M())), te.sm_mbf;
        }
        toObject(e = !1) {
          return te.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(te.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(te.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new te();
          return te.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(te.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(te.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetOneReportSubmittedByUser_Request";
        }
      }
      class re extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            re.prototype.content_report || m.Sg(re.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            re.sm_m ||
              (re.sm_m = {
                proto: re,
                fields: { content_report: { n: 1, c: Q } },
              }),
            re.sm_m
          );
        }
        static MBF() {
          return re.sm_mbf || (re.sm_mbf = m.w0(re.M())), re.sm_mbf;
        }
        toObject(e = !1) {
          return re.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(re.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(re.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new re();
          return re.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(re.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(re.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetOneReportSubmittedByUser_Response";
        }
      }
      class ie extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ie.prototype.steamid || m.Sg(ie.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ie.sm_m ||
              (ie.sm_m = {
                proto: ie,
                fields: {
                  steamid: {
                    n: 1,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                },
              }),
            ie.sm_m
          );
        }
        static MBF() {
          return ie.sm_mbf || (ie.sm_mbf = m.w0(ie.M())), ie.sm_mbf;
        }
        toObject(e = !1) {
          return ie.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(ie.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(ie.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new ie();
          return ie.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(ie.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(ie.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetReportedSubjectsByOwner_Request";
        }
      }
      class ne extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ne.prototype.subject_type || m.Sg(ne.M()),
            l.Message.initialize(this, e, 0, -1, [13, 31, 32], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ne.sm_m ||
              (ne.sm_m = {
                proto: ne,
                fields: {
                  subject_type: { n: 1, br: m.qM.readEnum, bw: m.gp.writeEnum },
                  subject_group_id: {
                    n: 2,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  subject_id: {
                    n: 3,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  owner_steam_id: {
                    n: 4,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  language: { n: 5, br: m.qM.readInt32, bw: m.gp.writeInt32 },
                  resolved: { n: 6, br: m.qM.readEnum, bw: m.gp.writeEnum },
                  time_resolved: {
                    n: 7,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  unresolved_report_count: {
                    n: 8,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  oldest_unresolved_report_time: {
                    n: 9,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  resolver_steamid: {
                    n: 10,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  assigned_moderator_steamid: {
                    n: 11,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  time_claimed_by_moderator: {
                    n: 12,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  reports: { n: 13, c: Q, r: !0, q: !0 },
                  additional_subject_data: { n: 14, c: X },
                  csam_status: { n: 15, br: m.qM.readEnum, bw: m.gp.writeEnum },
                  terrorism_status: {
                    n: 16,
                    br: m.qM.readEnum,
                    bw: m.gp.writeEnum,
                  },
                  content_moderated_reason: {
                    n: 17,
                    br: m.qM.readEnum,
                    bw: m.gp.writeEnum,
                  },
                  unresolved_dispute_count: {
                    n: 18,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  oldest_unresolved_dispute_time: {
                    n: 19,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  owner_dispute_time: {
                    n: 24,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  owner_dispute_resolved_time: {
                    n: 25,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  owner_dispute_details: {
                    n: 26,
                    br: m.qM.readString,
                    bw: m.gp.writeString,
                  },
                  required_moderator_level: {
                    n: 27,
                    br: m.qM.readEnum,
                    bw: m.gp.writeEnum,
                  },
                  resolved_by_automation: {
                    n: 28,
                    d: 0,
                    br: m.qM.readEnum,
                    bw: m.gp.writeEnum,
                  },
                  detected_by_automation: {
                    n: 29,
                    d: !1,
                    br: m.qM.readBool,
                    bw: m.gp.writeBool,
                  },
                  credible_threat_of_violence_status: {
                    n: 30,
                    br: m.qM.readEnum,
                    bw: m.gp.writeEnum,
                  },
                  sanctions_applied: { n: 31, c: se, r: !0, q: !0 },
                  sanctions_applied_after_dispute: {
                    n: 32,
                    c: se,
                    r: !0,
                    q: !0,
                  },
                  decision_reversed: {
                    n: 33,
                    br: m.qM.readBool,
                    bw: m.gp.writeBool,
                  },
                  reported_content_id: {
                    n: 34,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  coordinates: { n: 35, c: ct },
                },
              }),
            ne.sm_m
          );
        }
        static MBF() {
          return ne.sm_mbf || (ne.sm_mbf = m.w0(ne.M())), ne.sm_mbf;
        }
        toObject(e = !1) {
          return ne.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(ne.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(ne.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new ne();
          return ne.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(ne.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(ne.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ContentReportSubject";
        }
      }
      class ae extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ae.prototype.subject || m.Sg(ae.M()),
            l.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ae.sm_m ||
              (ae.sm_m = {
                proto: ae,
                fields: { subject: { n: 1, c: ne, r: !0, q: !0 } },
              }),
            ae.sm_m
          );
        }
        static MBF() {
          return ae.sm_mbf || (ae.sm_mbf = m.w0(ae.M())), ae.sm_mbf;
        }
        toObject(e = !1) {
          return ae.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(ae.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(ae.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new ae();
          return ae.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(ae.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(ae.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetReportedSubjectsByOwner_Response";
        }
      }
      class se extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            se.prototype.sanction || m.Sg(se.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            se.sm_m ||
              (se.sm_m = {
                proto: se,
                fields: {
                  sanction: { n: 1, br: m.qM.readEnum, bw: m.gp.writeEnum },
                  days: { n: 2, br: m.qM.readInt32, bw: m.gp.writeInt32 },
                  escalate_to: { n: 3, br: m.qM.readEnum, bw: m.gp.writeEnum },
                },
              }),
            se.sm_m
          );
        }
        static MBF() {
          return se.sm_mbf || (se.sm_mbf = m.w0(se.M())), se.sm_mbf;
        }
        toObject(e = !1) {
          return se.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(se.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(se.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new se();
          return se.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(se.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(se.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ContentReportSubjectSanction";
        }
      }
      class oe extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            oe.prototype.subject_type || m.Sg(oe.M()),
            l.Message.initialize(this, e, 0, -1, [9], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            oe.sm_m ||
              (oe.sm_m = {
                proto: oe,
                fields: {
                  subject_type: { n: 1, br: m.qM.readEnum, bw: m.gp.writeEnum },
                  subject_group_id: {
                    n: 2,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  subject_id: {
                    n: 3,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  resolution: { n: 4, br: m.qM.readEnum, bw: m.gp.writeEnum },
                  reason: { n: 5, br: m.qM.readEnum, bw: m.gp.writeEnum },
                  note: { n: 6, br: m.qM.readString, bw: m.gp.writeString },
                  resolved_by_automation: {
                    n: 7,
                    br: m.qM.readEnum,
                    bw: m.gp.writeEnum,
                  },
                  skip_lock: { n: 8, br: m.qM.readBool, bw: m.gp.writeBool },
                  sanctions_applied: { n: 9, c: se, r: !0, q: !0 },
                },
              }),
            oe.sm_m
          );
        }
        static MBF() {
          return oe.sm_mbf || (oe.sm_mbf = m.w0(oe.M())), oe.sm_mbf;
        }
        toObject(e = !1) {
          return oe.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(oe.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(oe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new oe();
          return oe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(oe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(oe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_ResolveSubject_Request";
        }
      }
      class ce extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ce.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new ce();
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new ce();
          return ce.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_ResolveSubject_Response";
        }
      }
      class le extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return le.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new le();
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new le();
          return le.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetSubjectOverview_Request";
        }
      }
      class ue extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ue.prototype.buckets || m.Sg(ue.M()),
            l.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ue.sm_m ||
              (ue.sm_m = {
                proto: ue,
                fields: {
                  buckets: { n: 1, c: me, r: !0, q: !0 },
                  pending_for_any_moderator: {
                    n: 2,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  pending_for_supervisor: {
                    n: 3,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  pending_for_valve: {
                    n: 4,
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
        toObject(e = !1) {
          return ue.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(ue.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(ue.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new ue();
          return ue.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(ue.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(ue.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetSubjectOverview_Response";
        }
      }
      class me extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            me.prototype.subject_type || m.Sg(me.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            me.sm_m ||
              (me.sm_m = {
                proto: me,
                fields: {
                  subject_type: { n: 1, br: m.qM.readEnum, bw: m.gp.writeEnum },
                  unresolved_count: {
                    n: 2,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  oldest_unresolved: {
                    n: 3,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  unclaimed_count: {
                    n: 4,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  oldest_disputed: {
                    n: 5,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  disputed_count: {
                    n: 6,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  unclaimed_disputed_count: {
                    n: 7,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  pending_for_any_moderator: {
                    n: 8,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  pending_for_supervisor: {
                    n: 9,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  pending_for_valve: {
                    n: 10,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  oldest_unresolved_for_any_moderator: {
                    n: 11,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  oldest_unresolved_for_supervisor: {
                    n: 12,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  oldest_unresolved_for_valve: {
                    n: 13,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                },
              }),
            me.sm_m
          );
        }
        static MBF() {
          return me.sm_mbf || (me.sm_mbf = m.w0(me.M())), me.sm_mbf;
        }
        toObject(e = !1) {
          return me.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(me.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(me.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new me();
          return me.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(me.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(me.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetSubjectOverview_Response_Bucket";
        }
      }
      class de extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            de.prototype.subject_type || m.Sg(de.M()),
            l.Message.initialize(this, e, 0, -1, [9], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            de.sm_m ||
              (de.sm_m = {
                proto: de,
                fields: {
                  subject_type: { n: 1, br: m.qM.readEnum, bw: m.gp.writeEnum },
                  subject_group_id: {
                    n: 2,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  resolution: { n: 3, br: m.qM.readEnum, bw: m.gp.writeEnum },
                  reason: { n: 4, br: m.qM.readEnum, bw: m.gp.writeEnum },
                  note: { n: 5, br: m.qM.readString, bw: m.gp.writeString },
                  resolved_by_automation: {
                    n: 6,
                    br: m.qM.readEnum,
                    bw: m.gp.writeEnum,
                  },
                  sanctions_applied: { n: 9, c: se, r: !0, q: !0 },
                },
              }),
            de.sm_m
          );
        }
        static MBF() {
          return de.sm_mbf || (de.sm_mbf = m.w0(de.M())), de.sm_mbf;
        }
        toObject(e = !1) {
          return de.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(de.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(de.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new de();
          return de.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(de.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return de.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(de.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return de.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_ResolveSubjectGroup_Request";
        }
      }
      class _e extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return _e.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new _e();
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new _e();
          return _e.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return _e.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return _e.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_ResolveSubjectGroup_Response";
        }
      }
      class Be extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Be.prototype.subject_type || m.Sg(Be.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Be.sm_m ||
              (Be.sm_m = {
                proto: Be,
                fields: {
                  subject_type: { n: 1, br: m.qM.readEnum, bw: m.gp.writeEnum },
                  subject_group_id: {
                    n: 2,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  subject_id: {
                    n: 3,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  required_level: {
                    n: 4,
                    br: m.qM.readEnum,
                    bw: m.gp.writeEnum,
                  },
                  reason: { n: 5, br: m.qM.readEnum, bw: m.gp.writeEnum },
                  note: { n: 6, br: m.qM.readString, bw: m.gp.writeString },
                },
              }),
            Be.sm_m
          );
        }
        static MBF() {
          return Be.sm_mbf || (Be.sm_mbf = m.w0(Be.M())), Be.sm_mbf;
        }
        toObject(e = !1) {
          return Be.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(Be.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(Be.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new Be();
          return Be.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(Be.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return Be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(Be.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return Be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_EscalateSubject_Request";
        }
      }
      class ge extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ge.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new ge();
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new ge();
          return ge.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return ge.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_EscalateSubject_Response";
        }
      }
      class be extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            be.prototype.subject_type || m.Sg(be.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            be.sm_m ||
              (be.sm_m = {
                proto: be,
                fields: {
                  subject_type: { n: 1, br: m.qM.readEnum, bw: m.gp.writeEnum },
                  subject_group_id: {
                    n: 2,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  subject_id: {
                    n: 3,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  csam_status: { n: 4, br: m.qM.readEnum, bw: m.gp.writeEnum },
                  terrorism_status: {
                    n: 5,
                    br: m.qM.readEnum,
                    bw: m.gp.writeEnum,
                  },
                  credible_threat_of_violence_status: {
                    n: 6,
                    br: m.qM.readEnum,
                    bw: m.gp.writeEnum,
                  },
                  additional_subject_data: { n: 7, c: X },
                  owner_dispute_details: {
                    n: 8,
                    br: m.qM.readString,
                    bw: m.gp.writeString,
                  },
                  new_subject_id: {
                    n: 9,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                },
              }),
            be.sm_m
          );
        }
        static MBF() {
          return be.sm_mbf || (be.sm_mbf = m.w0(be.M())), be.sm_mbf;
        }
        toObject(e = !1) {
          return be.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(be.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(be.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new be();
          return be.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(be.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(be.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_UpdateSubject_Request";
        }
      }
      class pe extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return pe.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new pe();
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new pe();
          return pe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return pe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_UpdateSubject_Response";
        }
      }
      class ye extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ye.prototype.subject_type || m.Sg(ye.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ye.sm_m ||
              (ye.sm_m = {
                proto: ye,
                fields: {
                  subject_type: { n: 1, br: m.qM.readEnum, bw: m.gp.writeEnum },
                  subject_group_id: {
                    n: 2,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  additional_subject_data: { n: 3, c: X },
                  new_subject_group_id: {
                    n: 4,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                },
              }),
            ye.sm_m
          );
        }
        static MBF() {
          return ye.sm_mbf || (ye.sm_mbf = m.w0(ye.M())), ye.sm_mbf;
        }
        toObject(e = !1) {
          return ye.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(ye.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(ye.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new ye();
          return ye.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(ye.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(ye.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return ye.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_UpdateSubjectGroup_Request";
        }
      }
      class Me extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Me.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Me();
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new Me();
          return Me.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return Me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return Me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_UpdateSubjectGroup_Response";
        }
      }
      class fe extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            fe.prototype.report_id || m.Sg(fe.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            fe.sm_m ||
              (fe.sm_m = {
                proto: fe,
                fields: {
                  report_id: {
                    n: 1,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  details: { n: 2, br: m.qM.readString, bw: m.gp.writeString },
                  subject_type: { n: 3, br: m.qM.readEnum, bw: m.gp.writeEnum },
                  subject_group_id: {
                    n: 4,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  subject_id: {
                    n: 5,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                },
              }),
            fe.sm_m
          );
        }
        static MBF() {
          return fe.sm_mbf || (fe.sm_mbf = m.w0(fe.M())), fe.sm_mbf;
        }
        toObject(e = !1) {
          return fe.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(fe.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(fe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new fe();
          return fe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(fe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(fe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return fe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_DisputeModerationForReport_Request";
        }
      }
      class we extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return we.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new we();
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new we();
          return we.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return we.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return we.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_DisputeModerationForReport_Response";
        }
      }
      class ze extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ze.prototype.subject_type || m.Sg(ze.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ze.sm_m ||
              (ze.sm_m = {
                proto: ze,
                fields: {
                  subject_type: { n: 1, br: m.qM.readEnum, bw: m.gp.writeEnum },
                  subject_group_id: {
                    n: 2,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  subject_id: {
                    n: 3,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  details: { n: 4, br: m.qM.readString, bw: m.gp.writeString },
                  steamid: {
                    n: 5,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                },
              }),
            ze.sm_m
          );
        }
        static MBF() {
          return ze.sm_mbf || (ze.sm_mbf = m.w0(ze.M())), ze.sm_mbf;
        }
        toObject(e = !1) {
          return ze.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(ze.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(ze.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new ze();
          return ze.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(ze.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(ze.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return ze.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_DisputeModerationForSubject_Request";
        }
      }
      class Se extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Se.prototype.subject_type || m.Sg(Se.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Se.sm_m ||
              (Se.sm_m = {
                proto: Se,
                fields: {
                  subject_type: { n: 1, br: m.qM.readEnum, bw: m.gp.writeEnum },
                  subject_group_id: {
                    n: 2,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  subject_id: {
                    n: 3,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  reported_content_id: {
                    n: 4,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                },
              }),
            Se.sm_m
          );
        }
        static MBF() {
          return Se.sm_mbf || (Se.sm_mbf = m.w0(Se.M())), Se.sm_mbf;
        }
        toObject(e = !1) {
          return Se.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(Se.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(Se.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new Se();
          return Se.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(Se.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return Se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(Se.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return Se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ContentReportSubjectKey";
        }
      }
      class Re extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Re.prototype.subject_keys || m.Sg(Re.M()),
            l.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Re.sm_m ||
              (Re.sm_m = {
                proto: Re,
                fields: { subject_keys: { n: 1, c: Se, r: !0, q: !0 } },
              }),
            Re.sm_m
          );
        }
        static MBF() {
          return Re.sm_mbf || (Re.sm_mbf = m.w0(Re.M())), Re.sm_mbf;
        }
        toObject(e = !1) {
          return Re.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(Re.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(Re.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new Re();
          return Re.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(Re.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return Re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(Re.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return Re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_DisputeModerationForSubject_Response";
        }
      }
      class je extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            je.prototype.subject_type || m.Sg(je.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            je.sm_m ||
              (je.sm_m = {
                proto: je,
                fields: {
                  subject_type: { n: 1, br: m.qM.readEnum, bw: m.gp.writeEnum },
                  subject_group_id: {
                    n: 2,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  subject_id: {
                    n: 3,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                },
              }),
            je.sm_m
          );
        }
        static MBF() {
          return je.sm_mbf || (je.sm_mbf = m.w0(je.M())), je.sm_mbf;
        }
        toObject(e = !1) {
          return je.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(je.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(je.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new je();
          return je.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(je.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return je.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(je.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return je.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetContentReportSubject_Request";
        }
      }
      class he extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            he.prototype.subject || m.Sg(he.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            he.sm_m ||
              (he.sm_m = { proto: he, fields: { subject: { n: 1, c: ne } } }),
            he.sm_m
          );
        }
        static MBF() {
          return he.sm_mbf || (he.sm_mbf = m.w0(he.M())), he.sm_mbf;
        }
        toObject(e = !1) {
          return he.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(he.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(he.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new he();
          return he.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(he.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return he.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(he.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return he.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetContentReportSubject_Response";
        }
      }
      class ve extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ve.prototype.subject_type || m.Sg(ve.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ve.sm_m ||
              (ve.sm_m = {
                proto: ve,
                fields: {
                  subject_type: { n: 1, br: m.qM.readEnum, bw: m.gp.writeEnum },
                  subject_group_id: {
                    n: 2,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                },
              }),
            ve.sm_m
          );
        }
        static MBF() {
          return ve.sm_mbf || (ve.sm_mbf = m.w0(ve.M())), ve.sm_mbf;
        }
        toObject(e = !1) {
          return ve.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(ve.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(ve.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new ve();
          return ve.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(ve.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(ve.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return ve.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetContentReportSubjectGroup_Request";
        }
      }
      class We extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            We.prototype.subjects || m.Sg(We.M()),
            l.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            We.sm_m ||
              (We.sm_m = {
                proto: We,
                fields: { subjects: { n: 1, c: ne, r: !0, q: !0 } },
              }),
            We.sm_m
          );
        }
        static MBF() {
          return We.sm_mbf || (We.sm_mbf = m.w0(We.M())), We.sm_mbf;
        }
        toObject(e = !1) {
          return We.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(We.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(We.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new We();
          return We.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(We.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return We.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(We.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return We.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetContentReportSubjectGroup_Response";
        }
      }
      class qe extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            qe.prototype.steamid || m.Sg(qe.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            qe.sm_m ||
              (qe.sm_m = {
                proto: qe,
                fields: {
                  steamid: {
                    n: 1,
                    br: m.qM.readFixed64String,
                    bw: m.gp.writeFixed64String,
                  },
                  rtime_cooldown_ends: {
                    n: 2,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  acquit_unresolved_reports: {
                    n: 3,
                    br: m.qM.readBool,
                    bw: m.gp.writeBool,
                  },
                },
              }),
            qe.sm_m
          );
        }
        static MBF() {
          return qe.sm_mbf || (qe.sm_mbf = m.w0(qe.M())), qe.sm_mbf;
        }
        toObject(e = !1) {
          return qe.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(qe.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(qe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new qe();
          return qe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(qe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(qe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return qe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_UpdateReporterCooldown_Request";
        }
      }
      class Te extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Te.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Te();
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new Te();
          return Te.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return Te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return Te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_UpdateReporterCooldown_Response";
        }
      }
      class Oe extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Oe.prototype.steamid || m.Sg(Oe.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Oe.sm_m ||
              (Oe.sm_m = {
                proto: Oe,
                fields: {
                  steamid: {
                    n: 1,
                    br: m.qM.readFixed64String,
                    bw: m.gp.writeFixed64String,
                  },
                },
              }),
            Oe.sm_m
          );
        }
        static MBF() {
          return Oe.sm_mbf || (Oe.sm_mbf = m.w0(Oe.M())), Oe.sm_mbf;
        }
        toObject(e = !1) {
          return Oe.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(Oe.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(Oe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new Oe();
          return Oe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(Oe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return Oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(Oe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return Oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetReporterCooldown_Request";
        }
      }
      class Fe extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Fe.prototype.rtime_cooldown_ends || m.Sg(Fe.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Fe.sm_m ||
              (Fe.sm_m = {
                proto: Fe,
                fields: {
                  rtime_cooldown_ends: {
                    n: 1,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                },
              }),
            Fe.sm_m
          );
        }
        static MBF() {
          return Fe.sm_mbf || (Fe.sm_mbf = m.w0(Fe.M())), Fe.sm_mbf;
        }
        toObject(e = !1) {
          return Fe.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(Fe.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(Fe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new Fe();
          return Fe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(Fe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return Fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(Fe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return Fe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetReporterCooldown_Response";
        }
      }
      class Ue extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ue.prototype.subject_type || m.Sg(Ue.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ue.sm_m ||
              (Ue.sm_m = {
                proto: Ue,
                fields: {
                  subject_type: { n: 1, br: m.qM.readEnum, bw: m.gp.writeEnum },
                  subject_group_id: {
                    n: 2,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  subject_id: {
                    n: 3,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  action: { n: 4, br: m.qM.readEnum, bw: m.gp.writeEnum },
                  automated_action: {
                    n: 5,
                    br: m.qM.readBool,
                    bw: m.gp.writeBool,
                  },
                  additional_json_data: {
                    n: 6,
                    br: m.qM.readString,
                    bw: m.gp.writeString,
                  },
                  actor_steamid: {
                    n: 7,
                    br: m.qM.readFixed64String,
                    bw: m.gp.writeFixed64String,
                  },
                },
              }),
            Ue.sm_m
          );
        }
        static MBF() {
          return Ue.sm_mbf || (Ue.sm_mbf = m.w0(Ue.M())), Ue.sm_mbf;
        }
        toObject(e = !1) {
          return Ue.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(Ue.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(Ue.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new Ue();
          return Ue.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(Ue.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return Ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(Ue.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return Ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_WriteToAuditLog_Request";
        }
      }
      class Ce extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Ce.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Ce();
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new Ce();
          return Ce.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return Ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return Ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_WriteToAuditLog_Response";
        }
      }
      class Ie extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ie.prototype.subject_type || m.Sg(Ie.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ie.sm_m ||
              (Ie.sm_m = {
                proto: Ie,
                fields: {
                  subject_type: { n: 1, br: m.qM.readEnum, bw: m.gp.writeEnum },
                  subject_group_id: {
                    n: 2,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  subject_id: {
                    n: 3,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                },
              }),
            Ie.sm_m
          );
        }
        static MBF() {
          return Ie.sm_mbf || (Ie.sm_mbf = m.w0(Ie.M())), Ie.sm_mbf;
        }
        toObject(e = !1) {
          return Ie.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(Ie.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(Ie.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new Ie();
          return Ie.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(Ie.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return Ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(Ie.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return Ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetAuditLog_Request";
        }
      }
      class Ne extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ne.prototype.entries || m.Sg(Ne.M()),
            l.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ne.sm_m ||
              (Ne.sm_m = {
                proto: Ne,
                fields: { entries: { n: 1, c: Ee, r: !0, q: !0 } },
              }),
            Ne.sm_m
          );
        }
        static MBF() {
          return Ne.sm_mbf || (Ne.sm_mbf = m.w0(Ne.M())), Ne.sm_mbf;
        }
        toObject(e = !1) {
          return Ne.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(Ne.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(Ne.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new Ne();
          return Ne.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(Ne.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return Ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(Ne.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return Ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetAuditLog_Response";
        }
      }
      class Ee extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ee.prototype.timestamp || m.Sg(Ee.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ee.sm_m ||
              (Ee.sm_m = {
                proto: Ee,
                fields: {
                  timestamp: {
                    n: 1,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  actor_steamid: {
                    n: 2,
                    br: m.qM.readFixed64String,
                    bw: m.gp.writeFixed64String,
                  },
                  automated_action: {
                    n: 3,
                    br: m.qM.readBool,
                    bw: m.gp.writeBool,
                  },
                  action: { n: 4, br: m.qM.readEnum, bw: m.gp.writeEnum },
                  additional_json_data: {
                    n: 5,
                    br: m.qM.readString,
                    bw: m.gp.writeString,
                  },
                },
              }),
            Ee.sm_m
          );
        }
        static MBF() {
          return Ee.sm_mbf || (Ee.sm_mbf = m.w0(Ee.M())), Ee.sm_mbf;
        }
        toObject(e = !1) {
          return Ee.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(Ee.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(Ee.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new Ee();
          return Ee.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(Ee.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return Ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(Ee.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return Ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetAuditLog_Response_AuditLogEntry";
        }
      }
      class xe extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            xe.prototype.steamid || m.Sg(xe.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            xe.sm_m ||
              (xe.sm_m = {
                proto: xe,
                fields: {
                  steamid: {
                    n: 1,
                    br: m.qM.readFixed64String,
                    bw: m.gp.writeFixed64String,
                  },
                },
              }),
            xe.sm_m
          );
        }
        static MBF() {
          return xe.sm_mbf || (xe.sm_mbf = m.w0(xe.M())), xe.sm_mbf;
        }
        toObject(e = !1) {
          return xe.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(xe.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(xe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new xe();
          return xe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(xe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(xe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return xe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetModeratorPreferences_Request";
        }
      }
      class Ge extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ge.prototype.preferred_level || m.Sg(Ge.M()),
            l.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ge.sm_m ||
              (Ge.sm_m = {
                proto: Ge,
                fields: {
                  preferred_level: {
                    n: 1,
                    br: m.qM.readEnum,
                    bw: m.gp.writeEnum,
                  },
                  enabled_subject_types: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: m.qM.readEnum,
                    pbr: m.qM.readPackedEnum,
                    bw: m.gp.writeRepeatedEnum,
                  },
                },
              }),
            Ge.sm_m
          );
        }
        static MBF() {
          return Ge.sm_mbf || (Ge.sm_mbf = m.w0(Ge.M())), Ge.sm_mbf;
        }
        toObject(e = !1) {
          return Ge.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(Ge.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(Ge.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new Ge();
          return Ge.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(Ge.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return Ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(Ge.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return Ge.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetModeratorPreferences_Response";
        }
      }
      class Ae extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ae.prototype.preferred_level || m.Sg(Ae.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ae.sm_m ||
              (Ae.sm_m = {
                proto: Ae,
                fields: {
                  preferred_level: {
                    n: 1,
                    br: m.qM.readEnum,
                    bw: m.gp.writeEnum,
                  },
                  enabled_subject_types: { n: 2, c: ke },
                },
              }),
            Ae.sm_m
          );
        }
        static MBF() {
          return Ae.sm_mbf || (Ae.sm_mbf = m.w0(Ae.M())), Ae.sm_mbf;
        }
        toObject(e = !1) {
          return Ae.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(Ae.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(Ae.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new Ae();
          return Ae.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(Ae.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return Ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(Ae.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return Ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_SetModeratorPreferences_Request";
        }
      }
      class ke extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ke.prototype.subject_types || m.Sg(ke.M()),
            l.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ke.sm_m ||
              (ke.sm_m = {
                proto: ke,
                fields: {
                  subject_types: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: m.qM.readEnum,
                    pbr: m.qM.readPackedEnum,
                    bw: m.gp.writeRepeatedEnum,
                  },
                },
              }),
            ke.sm_m
          );
        }
        static MBF() {
          return ke.sm_mbf || (ke.sm_mbf = m.w0(ke.M())), ke.sm_mbf;
        }
        toObject(e = !1) {
          return ke.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(ke.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(ke.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new ke();
          return ke.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(ke.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return ke.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(ke.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return ke.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_SetModeratorPreferences_Request_SubjectTypeList";
        }
      }
      class Pe extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Pe.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Pe();
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new Pe();
          return Pe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return Pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return Pe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_SetModeratorPreferences_Response";
        }
      }
      class De extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            De.prototype.steamid || m.Sg(De.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            De.sm_m ||
              (De.sm_m = {
                proto: De,
                fields: {
                  steamid: {
                    n: 1,
                    br: m.qM.readFixed64String,
                    bw: m.gp.writeFixed64String,
                  },
                  rt_start: { n: 2, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                },
              }),
            De.sm_m
          );
        }
        static MBF() {
          return De.sm_mbf || (De.sm_mbf = m.w0(De.M())), De.sm_mbf;
        }
        toObject(e = !1) {
          return De.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(De.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(De.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new De();
          return De.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(De.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return De.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(De.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return De.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetModeratorActivity_Request";
        }
      }
      class Le extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Le.prototype.activities || m.Sg(Le.M()),
            l.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Le.sm_m ||
              (Le.sm_m = {
                proto: Le,
                fields: { activities: { n: 1, c: Ve, r: !0, q: !0 } },
              }),
            Le.sm_m
          );
        }
        static MBF() {
          return Le.sm_mbf || (Le.sm_mbf = m.w0(Le.M())), Le.sm_mbf;
        }
        toObject(e = !1) {
          return Le.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(Le.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(Le.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new Le();
          return Le.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(Le.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return Le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(Le.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return Le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetModeratorActivity_Response";
        }
      }
      class Ve extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ve.prototype.subject_type || m.Sg(Ve.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ve.sm_m ||
              (Ve.sm_m = {
                proto: Ve,
                fields: {
                  subject_type: { n: 1, br: m.qM.readEnum, bw: m.gp.writeEnum },
                  subject_group_id: {
                    n: 2,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  subject_id: {
                    n: 3,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  timestamp: {
                    n: 4,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  action: { n: 5, br: m.qM.readEnum, bw: m.gp.writeEnum },
                  json_data: {
                    n: 6,
                    br: m.qM.readString,
                    bw: m.gp.writeString,
                  },
                  reported_content_id: {
                    n: 7,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                },
              }),
            Ve.sm_m
          );
        }
        static MBF() {
          return Ve.sm_mbf || (Ve.sm_mbf = m.w0(Ve.M())), Ve.sm_mbf;
        }
        toObject(e = !1) {
          return Ve.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(Ve.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(Ve.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new Ve();
          return Ve.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(Ve.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return Ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(Ve.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return Ve.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetModeratorActivity_Response_ModerationActivity";
        }
      }
      class $e extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $e.prototype.rtime_start_date || m.Sg($e.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            $e.sm_m ||
              ($e.sm_m = {
                proto: $e,
                fields: {
                  rtime_start_date: {
                    n: 1,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  rtime_end_date: {
                    n: 2,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  subject_type: { n: 3, br: m.qM.readEnum, bw: m.gp.writeEnum },
                },
              }),
            $e.sm_m
          );
        }
        static MBF() {
          return $e.sm_mbf || ($e.sm_mbf = m.w0($e.M())), $e.sm_mbf;
        }
        toObject(e = !1) {
          return $e.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT($e.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq($e.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new $e();
          return $e.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj($e.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return $e.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0($e.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return $e.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetDailyModerationStatistics_Request";
        }
      }
      class He extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            He.prototype.stats || m.Sg(He.M()),
            l.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            He.sm_m ||
              (He.sm_m = {
                proto: He,
                fields: { stats: { n: 2, c: Xe, r: !0, q: !0 } },
              }),
            He.sm_m
          );
        }
        static MBF() {
          return He.sm_mbf || (He.sm_mbf = m.w0(He.M())), He.sm_mbf;
        }
        toObject(e = !1) {
          return He.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(He.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(He.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new He();
          return He.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(He.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return He.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(He.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return He.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetDailyModerationStatistics_Response";
        }
      }
      class Xe extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Xe.prototype.rtime_date || m.Sg(Xe.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Xe.sm_m ||
              (Xe.sm_m = {
                proto: Xe,
                fields: {
                  rtime_date: {
                    n: 1,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  times_unresolved: {
                    n: 2,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  times_resolved: {
                    n: 3,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                },
              }),
            Xe.sm_m
          );
        }
        static MBF() {
          return Xe.sm_mbf || (Xe.sm_mbf = m.w0(Xe.M())), Xe.sm_mbf;
        }
        toObject(e = !1) {
          return Xe.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(Xe.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(Xe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new Xe();
          return Xe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(Xe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return Xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(Xe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return Xe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetDailyModerationStatistics_Response_DayStatistics";
        }
      }
      class Ye extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ye.prototype.subject_type || m.Sg(Ye.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ye.sm_m ||
              (Ye.sm_m = {
                proto: Ye,
                fields: {
                  subject_type: { n: 1, br: m.qM.readEnum, bw: m.gp.writeEnum },
                  count: { n: 2, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                },
              }),
            Ye.sm_m
          );
        }
        static MBF() {
          return Ye.sm_mbf || (Ye.sm_mbf = m.w0(Ye.M())), Ye.sm_mbf;
        }
        toObject(e = !1) {
          return Ye.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(Ye.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(Ye.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new Ye();
          return Ye.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(Ye.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return Ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(Ye.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return Ye.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetOldestUnresolvedSubjects_Request";
        }
      }
      class Je extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Je.prototype.subjects || m.Sg(Je.M()),
            l.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Je.sm_m ||
              (Je.sm_m = {
                proto: Je,
                fields: { subjects: { n: 1, c: Ke, r: !0, q: !0 } },
              }),
            Je.sm_m
          );
        }
        static MBF() {
          return Je.sm_mbf || (Je.sm_mbf = m.w0(Je.M())), Je.sm_mbf;
        }
        toObject(e = !1) {
          return Je.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(Je.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(Je.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new Je();
          return Je.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(Je.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return Je.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(Je.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return Je.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetOldestUnresolvedSubjects_Response";
        }
      }
      class Ke extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ke.prototype.subject_type || m.Sg(Ke.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ke.sm_m ||
              (Ke.sm_m = {
                proto: Ke,
                fields: {
                  subject_type: { n: 1, br: m.qM.readEnum, bw: m.gp.writeEnum },
                  subject_group_id: {
                    n: 2,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  subject_id: {
                    n: 3,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  reported_content_id: {
                    n: 4,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                },
              }),
            Ke.sm_m
          );
        }
        static MBF() {
          return Ke.sm_mbf || (Ke.sm_mbf = m.w0(Ke.M())), Ke.sm_mbf;
        }
        toObject(e = !1) {
          return Ke.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(Ke.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(Ke.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new Ke();
          return Ke.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(Ke.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return Ke.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(Ke.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return Ke.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetOldestUnresolvedSubjects_Response_Subject";
        }
      }
      class Ze extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ze.prototype.steamid || m.Sg(Ze.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ze.sm_m ||
              (Ze.sm_m = {
                proto: Ze,
                fields: {
                  steamid: {
                    n: 1,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                },
              }),
            Ze.sm_m
          );
        }
        static MBF() {
          return Ze.sm_mbf || (Ze.sm_mbf = m.w0(Ze.M())), Ze.sm_mbf;
        }
        toObject(e = !1) {
          return Ze.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(Ze.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(Ze.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new Ze();
          return Ze.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(Ze.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return Ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(Ze.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return Ze.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetReporterStats_Request";
        }
      }
      class Qe extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Qe.prototype.total_reports || m.Sg(Qe.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Qe.sm_m ||
              (Qe.sm_m = {
                proto: Qe,
                fields: {
                  total_reports: {
                    n: 1,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  total_acquitted_reports: {
                    n: 2,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  reports_in_last_week: {
                    n: 3,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  acquitted_reports_in_last_week: {
                    n: 4,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                },
              }),
            Qe.sm_m
          );
        }
        static MBF() {
          return Qe.sm_mbf || (Qe.sm_mbf = m.w0(Qe.M())), Qe.sm_mbf;
        }
        toObject(e = !1) {
          return Qe.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(Qe.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(Qe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new Qe();
          return Qe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(Qe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return Qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(Qe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return Qe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetReporterStats_Response";
        }
      }
      class et extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            et.prototype.subject_type || m.Sg(et.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            et.sm_m ||
              (et.sm_m = {
                proto: et,
                fields: {
                  subject_type: { n: 1, br: m.qM.readEnum, bw: m.gp.writeEnum },
                  moderator_level: {
                    n: 2,
                    br: m.qM.readEnum,
                    bw: m.gp.writeEnum,
                  },
                },
              }),
            et.sm_m
          );
        }
        static MBF() {
          return et.sm_mbf || (et.sm_mbf = m.w0(et.M())), et.sm_mbf;
        }
        toObject(e = !1) {
          return et.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(et.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(et.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new et();
          return et.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(et.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return et.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(et.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return et.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_ClaimBatch_Request";
        }
      }
      class tt extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            tt.prototype.subjects || m.Sg(tt.M()),
            l.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            tt.sm_m ||
              (tt.sm_m = {
                proto: tt,
                fields: { subjects: { n: 1, c: ne, r: !0, q: !0 } },
              }),
            tt.sm_m
          );
        }
        static MBF() {
          return tt.sm_mbf || (tt.sm_mbf = m.w0(tt.M())), tt.sm_mbf;
        }
        toObject(e = !1) {
          return tt.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(tt.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(tt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new tt();
          return tt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(tt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return tt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(tt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return tt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_ClaimBatch_Response";
        }
      }
      class rt extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            rt.prototype.steamid || m.Sg(rt.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            rt.sm_m ||
              (rt.sm_m = {
                proto: rt,
                fields: {
                  steamid: {
                    n: 1,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                },
              }),
            rt.sm_m
          );
        }
        static MBF() {
          return rt.sm_mbf || (rt.sm_mbf = m.w0(rt.M())), rt.sm_mbf;
        }
        toObject(e = !1) {
          return rt.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(rt.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(rt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new rt();
          return rt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(rt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return rt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(rt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return rt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetClaimedSubjects_Request";
        }
      }
      class it extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            it.prototype.subjects || m.Sg(it.M()),
            l.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            it.sm_m ||
              (it.sm_m = {
                proto: it,
                fields: { subjects: { n: 1, c: ne, r: !0, q: !0 } },
              }),
            it.sm_m
          );
        }
        static MBF() {
          return it.sm_mbf || (it.sm_mbf = m.w0(it.M())), it.sm_mbf;
        }
        toObject(e = !1) {
          return it.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(it.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(it.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new it();
          return it.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(it.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return it.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(it.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return it.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetClaimedSubjects_Response";
        }
      }
      class nt extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            nt.prototype.subjects_to_release || m.Sg(nt.M()),
            l.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            nt.sm_m ||
              (nt.sm_m = {
                proto: nt,
                fields: { subjects_to_release: { n: 1, c: Se, r: !0, q: !0 } },
              }),
            nt.sm_m
          );
        }
        static MBF() {
          return nt.sm_mbf || (nt.sm_mbf = m.w0(nt.M())), nt.sm_mbf;
        }
        toObject(e = !1) {
          return nt.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(nt.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(nt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new nt();
          return nt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(nt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return nt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(nt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return nt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_ReleaseSubjects_Request";
        }
      }
      class at extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return at.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new at();
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new at();
          return at.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return at.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return at.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_ReleaseSubjects_Response";
        }
      }
      class st extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            st.prototype.subject_type || m.Sg(st.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            st.sm_m ||
              (st.sm_m = {
                proto: st,
                fields: {
                  subject_type: { n: 1, br: m.qM.readEnum, bw: m.gp.writeEnum },
                  subject_group_id: {
                    n: 2,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  subject_id: {
                    n: 3,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                },
              }),
            st.sm_m
          );
        }
        static MBF() {
          return st.sm_mbf || (st.sm_mbf = m.w0(st.M())), st.sm_mbf;
        }
        toObject(e = !1) {
          return st.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(st.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(st.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new st();
          return st.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(st.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return st.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(st.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return st.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_SustainModeration_Request";
        }
      }
      class ot extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ot.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new ot();
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new ot();
          return ot.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return ot.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return ot.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_SustainModeration_Response";
        }
      }
      class ct extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ct.prototype.subject_type || m.Sg(ct.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ct.sm_m ||
              (ct.sm_m = {
                proto: ct,
                fields: {
                  subject_type: { n: 1, br: m.qM.readEnum, bw: m.gp.writeEnum },
                  steamid: {
                    n: 2,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  forum: {
                    n: 3,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  topic: {
                    n: 4,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  comment: {
                    n: 5,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  comment_thread_id: {
                    n: 6,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  sender_account_id: {
                    n: 7,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  chat_message_rtime: {
                    n: 8,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  chat_message_ordinal: {
                    n: 9,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  chat_group_id: {
                    n: 10,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  chat_room_id: {
                    n: 11,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  receiver_account_id: {
                    n: 12,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  published_file_id: {
                    n: 13,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                },
              }),
            ct.sm_m
          );
        }
        static MBF() {
          return ct.sm_mbf || (ct.sm_mbf = m.w0(ct.M())), ct.sm_mbf;
        }
        toObject(e = !1) {
          return ct.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(ct.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(ct.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new ct();
          return ct.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(ct.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return ct.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(ct.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return ct.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ReportedContentCoordinates";
        }
      }
      class lt extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            lt.prototype.reported_content_id || m.Sg(lt.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            lt.sm_m ||
              (lt.sm_m = {
                proto: lt,
                fields: {
                  reported_content_id: {
                    n: 1,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                },
              }),
            lt.sm_m
          );
        }
        static MBF() {
          return lt.sm_mbf || (lt.sm_mbf = m.w0(lt.M())), lt.sm_mbf;
        }
        toObject(e = !1) {
          return lt.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(lt.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(lt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new lt();
          return lt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(lt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return lt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(lt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return lt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetReportedContentByID_Request";
        }
      }
      class ut extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ut.prototype.subject || m.Sg(ut.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ut.sm_m ||
              (ut.sm_m = { proto: ut, fields: { subject: { n: 1, c: ne } } }),
            ut.sm_m
          );
        }
        static MBF() {
          return ut.sm_mbf || (ut.sm_mbf = m.w0(ut.M())), ut.sm_mbf;
        }
        toObject(e = !1) {
          return ut.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(ut.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(ut.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new ut();
          return ut.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(ut.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return ut.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(ut.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return ut.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetReportedContentByID_Response";
        }
      }
      class mt extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            mt.prototype.coordinates || m.Sg(mt.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            mt.sm_m ||
              (mt.sm_m = {
                proto: mt,
                fields: { coordinates: { n: 1, c: ct } },
              }),
            mt.sm_m
          );
        }
        static MBF() {
          return mt.sm_mbf || (mt.sm_mbf = m.w0(mt.M())), mt.sm_mbf;
        }
        toObject(e = !1) {
          return mt.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(mt.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(mt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new mt();
          return mt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(mt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return mt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(mt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return mt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetReportedContent_Request";
        }
      }
      class dt extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            dt.prototype.subjects || m.Sg(dt.M()),
            l.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            dt.sm_m ||
              (dt.sm_m = {
                proto: dt,
                fields: { subjects: { n: 1, c: ne, r: !0, q: !0 } },
              }),
            dt.sm_m
          );
        }
        static MBF() {
          return dt.sm_mbf || (dt.sm_mbf = m.w0(dt.M())), dt.sm_mbf;
        }
        toObject(e = !1) {
          return dt.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(dt.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(dt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new dt();
          return dt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(dt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return dt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(dt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return dt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetReportedContent_Response";
        }
      }
      class _t extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _t.prototype.reported_content_id || m.Sg(_t.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _t.sm_m ||
              (_t.sm_m = {
                proto: _t,
                fields: {
                  reported_content_id: {
                    n: 1,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  details: { n: 2, br: m.qM.readString, bw: m.gp.writeString },
                },
              }),
            _t.sm_m
          );
        }
        static MBF() {
          return _t.sm_mbf || (_t.sm_mbf = m.w0(_t.M())), _t.sm_mbf;
        }
        toObject(e = !1) {
          return _t.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(_t.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(_t.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new _t();
          return _t.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(_t.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return _t.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(_t.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return _t.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_OwnerDisputeModeration_Request";
        }
      }
      class Bt extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Bt.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Bt();
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new Bt();
          return Bt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return Bt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return Bt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_OwnerDisputeModeration_Response";
        }
      }
      class gt extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            gt.prototype.reported_content_id || m.Sg(gt.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            gt.sm_m ||
              (gt.sm_m = {
                proto: gt,
                fields: {
                  reported_content_id: {
                    n: 1,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                },
              }),
            gt.sm_m
          );
        }
        static MBF() {
          return gt.sm_mbf || (gt.sm_mbf = m.w0(gt.M())), gt.sm_mbf;
        }
        toObject(e = !1) {
          return gt.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(gt.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(gt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new gt();
          return gt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(gt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return gt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(gt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return gt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetAuditLogByID_Request";
        }
      }
      class bt extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            bt.prototype.entries || m.Sg(bt.M()),
            l.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            bt.sm_m ||
              (bt.sm_m = {
                proto: bt,
                fields: { entries: { n: 1, c: pt, r: !0, q: !0 } },
              }),
            bt.sm_m
          );
        }
        static MBF() {
          return bt.sm_mbf || (bt.sm_mbf = m.w0(bt.M())), bt.sm_mbf;
        }
        toObject(e = !1) {
          return bt.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(bt.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(bt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new bt();
          return bt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(bt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return bt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(bt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return bt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetAuditLogByID_Response";
        }
      }
      class pt extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            pt.prototype.timestamp || m.Sg(pt.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            pt.sm_m ||
              (pt.sm_m = {
                proto: pt,
                fields: {
                  timestamp: {
                    n: 1,
                    br: m.qM.readUint32,
                    bw: m.gp.writeUint32,
                  },
                  actor_steamid: {
                    n: 2,
                    br: m.qM.readFixed64String,
                    bw: m.gp.writeFixed64String,
                  },
                  automated_action: {
                    n: 3,
                    br: m.qM.readBool,
                    bw: m.gp.writeBool,
                  },
                  action: { n: 4, br: m.qM.readEnum, bw: m.gp.writeEnum },
                  additional_json_data: {
                    n: 5,
                    br: m.qM.readString,
                    bw: m.gp.writeString,
                  },
                },
              }),
            pt.sm_m
          );
        }
        static MBF() {
          return pt.sm_mbf || (pt.sm_mbf = m.w0(pt.M())), pt.sm_mbf;
        }
        toObject(e = !1) {
          return pt.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(pt.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(pt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new pt();
          return pt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(pt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return pt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(pt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return pt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetAuditLogByID_Response_AuditLogEntry";
        }
      }
      class yt extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            yt.prototype.reported_content_id || m.Sg(yt.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            yt.sm_m ||
              (yt.sm_m = {
                proto: yt,
                fields: {
                  reported_content_id: {
                    n: 1,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  report_id: {
                    n: 2,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  dispute_details: {
                    n: 3,
                    br: m.qM.readString,
                    bw: m.gp.writeString,
                  },
                },
              }),
            yt.sm_m
          );
        }
        static MBF() {
          return yt.sm_mbf || (yt.sm_mbf = m.w0(yt.M())), yt.sm_mbf;
        }
        toObject(e = !1) {
          return yt.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(yt.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(yt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new yt();
          return yt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(yt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return yt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(yt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return yt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_ReporterDisputeModeration_Request";
        }
      }
      class Mt extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Mt.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Mt();
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new Mt();
          return Mt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return Mt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return Mt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_ReporterDisputeModeration_Response";
        }
      }
      class ft extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ft.prototype.reported_content_id || m.Sg(ft.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ft.sm_m ||
              (ft.sm_m = {
                proto: ft,
                fields: {
                  reported_content_id: {
                    n: 1,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                },
              }),
            ft.sm_m
          );
        }
        static MBF() {
          return ft.sm_mbf || (ft.sm_mbf = m.w0(ft.M())), ft.sm_mbf;
        }
        toObject(e = !1) {
          return ft.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(ft.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(ft.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new ft();
          return ft.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(ft.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return ft.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(ft.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return ft.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_SustainModerationByID_Request";
        }
      }
      class wt extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return wt.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new wt();
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new wt();
          return wt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return wt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return wt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_SustainModerationByID_Response";
        }
      }
      class zt extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            zt.prototype.reported_content_id || m.Sg(zt.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            zt.sm_m ||
              (zt.sm_m = {
                proto: zt,
                fields: {
                  reported_content_id: {
                    n: 1,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  new_level: { n: 2, br: m.qM.readEnum, bw: m.gp.writeEnum },
                  reason: { n: 3, br: m.qM.readEnum, bw: m.gp.writeEnum },
                  note: { n: 4, br: m.qM.readString, bw: m.gp.writeString },
                },
              }),
            zt.sm_m
          );
        }
        static MBF() {
          return zt.sm_mbf || (zt.sm_mbf = m.w0(zt.M())), zt.sm_mbf;
        }
        toObject(e = !1) {
          return zt.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(zt.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(zt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new zt();
          return zt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(zt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return zt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(zt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return zt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_EscalateSubjectByID_Request";
        }
      }
      class St extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return St.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new St();
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new St();
          return St.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return St.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return St.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_EscalateSubjectByID_Response";
        }
      }
      class Rt extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Rt.prototype.reported_content_id || m.Sg(Rt.M()),
            l.Message.initialize(this, e, 0, -1, [9], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Rt.sm_m ||
              (Rt.sm_m = {
                proto: Rt,
                fields: {
                  reported_content_id: {
                    n: 1,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  resolution: { n: 4, br: m.qM.readEnum, bw: m.gp.writeEnum },
                  reason: { n: 2, br: m.qM.readEnum, bw: m.gp.writeEnum },
                  note: { n: 3, br: m.qM.readString, bw: m.gp.writeString },
                  resolved_by_automation: {
                    n: 7,
                    br: m.qM.readEnum,
                    bw: m.gp.writeEnum,
                  },
                  sanctions_applied: { n: 9, c: se, r: !0, q: !0 },
                  skip_lock: { n: 10, br: m.qM.readBool, bw: m.gp.writeBool },
                },
              }),
            Rt.sm_m
          );
        }
        static MBF() {
          return Rt.sm_mbf || (Rt.sm_mbf = m.w0(Rt.M())), Rt.sm_mbf;
        }
        toObject(e = !1) {
          return Rt.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(Rt.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(Rt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new Rt();
          return Rt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(Rt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return Rt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(Rt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return Rt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_ResolveByID_Request";
        }
      }
      class jt extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return jt.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new jt();
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new jt();
          return jt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return jt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return jt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_ResolveByID_Response";
        }
      }
      class ht extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ht.prototype.reported_content_id || m.Sg(ht.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ht.sm_m ||
              (ht.sm_m = {
                proto: ht,
                fields: {
                  reported_content_id: {
                    n: 1,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  csam_status: { n: 2, br: m.qM.readEnum, bw: m.gp.writeEnum },
                  terrorism_status: {
                    n: 3,
                    br: m.qM.readEnum,
                    bw: m.gp.writeEnum,
                  },
                  credible_threat_of_violence_status: {
                    n: 4,
                    br: m.qM.readEnum,
                    bw: m.gp.writeEnum,
                  },
                  additional_subject_data: { n: 5, c: X },
                  owner_dispute_details: {
                    n: 6,
                    br: m.qM.readString,
                    bw: m.gp.writeString,
                  },
                },
              }),
            ht.sm_m
          );
        }
        static MBF() {
          return ht.sm_mbf || (ht.sm_mbf = m.w0(ht.M())), ht.sm_mbf;
        }
        toObject(e = !1) {
          return ht.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(ht.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(ht.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new ht();
          return ht.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(ht.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return ht.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(ht.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return ht.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_UpdateSubjectByID_Request";
        }
      }
      class vt extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return vt.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new vt();
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new vt();
          return vt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return vt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return vt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_UpdateSubjectByID_Response";
        }
      }
      class Wt extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Wt.prototype.reported_content_id || m.Sg(Wt.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Wt.sm_m ||
              (Wt.sm_m = {
                proto: Wt,
                fields: {
                  reported_content_id: {
                    n: 1,
                    br: m.qM.readUint64String,
                    bw: m.gp.writeUint64String,
                  },
                  action: { n: 2, br: m.qM.readEnum, bw: m.gp.writeEnum },
                  automated_action: {
                    n: 3,
                    br: m.qM.readBool,
                    bw: m.gp.writeBool,
                  },
                  additional_json_data: {
                    n: 4,
                    br: m.qM.readString,
                    bw: m.gp.writeString,
                  },
                  actor_steamid: {
                    n: 5,
                    br: m.qM.readFixed64String,
                    bw: m.gp.writeFixed64String,
                  },
                },
              }),
            Wt.sm_m
          );
        }
        static MBF() {
          return Wt.sm_mbf || (Wt.sm_mbf = m.w0(Wt.M())), Wt.sm_mbf;
        }
        toObject(e = !1) {
          return Wt.toObject(e, this);
        }
        static toObject(e, t) {
          return m.BT(Wt.M(), e, t);
        }
        static fromObject(e) {
          return m.Uq(Wt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new Wt();
          return Wt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return m.zj(Wt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return Wt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          m.i0(Wt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return Wt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_WriteToAuditLogByID_Request";
        }
      }
      class qt extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return qt.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new qt();
        }
        static deserializeBinary(e) {
          let t = new (u().BinaryReader)(e),
            r = new qt();
          return qt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (u().BinaryWriter)();
          return qt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (u().BinaryWriter)();
          return qt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_WriteToAuditLogByID_Response";
        }
      }
      var Tt;
      !(function (e) {
        (e.ClaimBatch = function (e, t, r) {
          return e.SendMsg(
            "ContentModeration.ClaimBatch#1",
            (0, s.I8)(et, t, r),
            tt,
            { ePrivilege: 5 },
          );
        }),
          (e.GetClaimedSubjects = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.GetClaimedSubjects#1",
              (0, s.I8)(rt, t, r),
              it,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }),
          (e.ReleaseSubjects = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.ReleaseSubjects#1",
              (0, s.I8)(nt, t, r),
              at,
              { ePrivilege: 5 },
            );
          }),
          (e.CreateContentReport = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.CreateContentReport#1",
              (0, s.I8)(J, t, r),
              K,
              { ePrivilege: 1 },
            );
          }),
          (e.GetReportsSubmittedByUser = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.GetReportsSubmittedByUser#1",
              (0, s.I8)(Z, t, r),
              ee,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetOneReportSubmittedByUser = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.GetOneReportSubmittedByUser#1",
              (0, s.I8)(te, t, r),
              re,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetReportedSubjectsByOwner = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.GetReportedSubjectsByOwner#1",
              (0, s.I8)(ie, t, r),
              ae,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }),
          (e.ResolveSubject = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.ResolveSubject#1",
              (0, s.I8)(oe, t, r),
              ce,
              { ePrivilege: 5 },
            );
          }),
          (e.ResolveSubjectGroup = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.ResolveSubjectGroup#1",
              (0, s.I8)(de, t, r),
              _e,
              { ePrivilege: 5 },
            );
          }),
          (e.GetSubjectOverview = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.GetSubjectOverview#1",
              (0, s.I8)(le, t, r),
              ue,
              { ePrivilege: 5 },
            );
          }),
          (e.EscalateSubject = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.EscalateSubject#1",
              (0, s.I8)(Be, t, r),
              ge,
              { ePrivilege: 5 },
            );
          }),
          (e.UpdateSubject = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.UpdateSubject#1",
              (0, s.I8)(be, t, r),
              pe,
              { ePrivilege: 5 },
            );
          }),
          (e.UpdateSubjectGroup = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.UpdateSubjectGroup#1",
              (0, s.I8)(ye, t, r),
              Me,
              { ePrivilege: 5 },
            );
          }),
          (e.DisputeModerationForReport = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.DisputeModerationForReport#1",
              (0, s.I8)(fe, t, r),
              we,
              { ePrivilege: 1 },
            );
          }),
          (e.DisputeModerationForSubject = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.DisputeModerationForSubject#1",
              (0, s.I8)(ze, t, r),
              Re,
              { ePrivilege: 1 },
            );
          }),
          (e.GetContentReportSubject = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.GetContentReportSubject#1",
              (0, s.I8)(je, t, r),
              he,
              { ePrivilege: 1 },
            );
          }),
          (e.GetContentReportSubjectGroup = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.GetContentReportSubjectGroup#1",
              (0, s.I8)(ve, t, r),
              We,
              { ePrivilege: 5 },
            );
          }),
          (e.UpdateReporterCooldown = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.UpdateReporterCooldown#1",
              (0, s.I8)(qe, t, r),
              Te,
              { ePrivilege: 5 },
            );
          }),
          (e.GetReporterCooldown = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.GetReporterCooldown#1",
              (0, s.I8)(Oe, t, r),
              Fe,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.WriteToAuditLog = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.WriteToAuditLog#1",
              (0, s.I8)(Ue, t, r),
              Ce,
              { ePrivilege: 5 },
            );
          }),
          (e.GetAuditLog = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.GetAuditLog#1",
              (0, s.I8)(Ie, t, r),
              Ne,
              { ePrivilege: 5 },
            );
          }),
          (e.GetModeratorPreferences = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.GetModeratorPreferences#1",
              (0, s.I8)(xe, t, r),
              Ge,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }),
          (e.SetModeratorPreferences = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.SetModeratorPreferences#1",
              (0, s.I8)(Ae, t, r),
              Pe,
              { ePrivilege: 5 },
            );
          }),
          (e.GetModeratorActivity = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.GetModeratorActivity#1",
              (0, s.I8)(De, t, r),
              Le,
              { ePrivilege: 5 },
            );
          }),
          (e.GetDailyModerationStatistics = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.GetDailyModerationStatistics#1",
              (0, s.I8)($e, t, r),
              He,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }),
          (e.GetOldestUnresolvedSubjects = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.GetOldestUnresolvedSubjects#1",
              (0, s.I8)(Ye, t, r),
              Je,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }),
          (e.GetReporterStats = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.GetReporterStats#1",
              (0, s.I8)(Ze, t, r),
              Qe,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }),
          (e.SustainModeration = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.SustainModeration#1",
              (0, s.I8)(st, t, r),
              ot,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }),
          (e.GetReportedContentByID = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.GetReportedContentByID#1",
              (0, s.I8)(lt, t, r),
              ut,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetReportedContent = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.GetReportedContent#1",
              (0, s.I8)(mt, t, r),
              dt,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }),
          (e.OwnerDisputeModeration = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.OwnerDisputeModeration#1",
              (0, s.I8)(_t, t, r),
              Bt,
              { ePrivilege: 1 },
            );
          }),
          (e.GetAuditLogByID = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.GetAuditLogByID#1",
              (0, s.I8)(gt, t, r),
              bt,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }),
          (e.ReporterDisputeModeration = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.ReporterDisputeModeration#1",
              (0, s.I8)(yt, t, r),
              Mt,
              { ePrivilege: 1 },
            );
          }),
          (e.SustainModerationByID = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.SustainModerationByID#1",
              (0, s.I8)(ft, t, r),
              wt,
              { ePrivilege: 5 },
            );
          }),
          (e.EscalateSubjectByID = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.EscalateSubjectByID#1",
              (0, s.I8)(zt, t, r),
              St,
              { ePrivilege: 5 },
            );
          }),
          (e.ResolveByID = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.ResolveByID#1",
              (0, s.I8)(Rt, t, r),
              jt,
              { ePrivilege: 5 },
            );
          }),
          (e.UpdateSubjectByID = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.UpdateSubjectByID#1",
              (0, s.I8)(ht, t, r),
              vt,
              { ePrivilege: 5 },
            );
          }),
          (e.WriteToAuditLogByID = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.WriteToAuditLogByID#1",
              (0, s.I8)(Wt, t, r),
              qt,
              { ePrivilege: 5 },
            );
          });
      })(Tt || (Tt = {}));
      const Ot = {
        [a.Vv.wY]: {
          displayNameLoc: "#SteamNotification_HelpRequest_Author",
          titleLoc: "#SteamNotification_HelpRequest_Title",
          bodyLoc: (e) => ({
            locString: "#SteamNotification_HelpRequest_Body",
            params: [e.ticket],
          }),
          link: (e) => P.TS.HELP_BASE_URL + "wizard/HelpRequest/" + e.ticket,
        },
        [a.Vv.wp]: {
          displayNameLoc: "#SteamNotifications_MajorSale",
          titleLoc: (e) => ({ locString: e.title }),
          bodyLoc: (e) =>
            (0, D.Y2)() && e.link.includes("https://store.steampowered.com")
              ? "#SteamNotifications_MajorSale_SteamChina_Title"
              : e.body,
          image: (e) => e.image,
          link: (e) =>
            (0, D.Y2)() && e.link.includes("https://store.steampowered.com")
              ? e.link.replace(
                  "https://store.steampowered.com",
                  P.TS.STORE_BASE_URL,
                )
              : e.link,
        },
        [a.Vv.e9]: {
          displayNameLoc: (e) => e.display_name,
          titleLoc: (e) => e.title,
          bodyLoc: (e) => e.body,
          image: (e) => e.image,
          link: (e) => e.link,
        },
        [a.Vv.oe]: {
          titleLoc: "#SteamNotification_ModeratorMessage_Title",
          link: (e) =>
            P.TS.COMMUNITY_BASE_URL + "my/moderatormessages/" + e.msgid,
        },
        [a.Vv.FK]: {
          displayNameLoc: (e) =>
            e.is_limited_launch
              ? "#Notification_LimitedLaunchInviteTitle"
              : "#Notification_PlaytestInviteTitle",
          titleLoc: (e) =>
            e.is_limited_launch
              ? "#Notification_LimitedLaunchInviteBody"
              : "#Notification_PlaytestInviteBody",
          image: (e) => e.appid,
          link: (e) =>
            P.TS.STORE_BASE_URL + "account/gatedaccess?appid=" + e.appid,
        },
        [a.Vv.Iz]: {
          titleLoc: (e) => {
            switch (e.status) {
              case 1:
                return "#Notification_ReportedContentAction_Received";
              case 2:
                return "#Notification_ReportedContentAction_Sanctioned";
              case 3:
                return "#Notification_ReportedContentAction_Acquitted";
              case 4:
                return "#Notification_ReportedContentAction_DisputeReceived";
              case 5:
                return "#Notification_ReportedContentAction_DisputeSanctioned";
              case 6:
                return "#Notification_ReportedContentAction_DisputeAcquitted";
              default:
                return "#Notification_ReportedContentAction_Unknown";
            }
          },
          link: (e) =>
            `${P.TS.COMMUNITY_BASE_URL}my/reportedcontent/${e.subject_type}-${e.subject_group_id}-${e.subject_id}`,
        },
      };
      function Ft(e) {
        if (void 0 !== e) return Ot[e];
      }
      function Ut(e) {
        return !!Ft(e);
      }
      const Ct = {
        [a.Vv.Rj]: {
          steamidAttribute: "inviter",
          titleLoc: "#SteamNotifications_FamilyInviteTitle",
          bodyLoc: "#SteamNotifications_FamilyInviteBody",
          url: (e) =>
            `${P.TS.STORE_BASE_URL}account/familymanagement/join?invitation=${e.familyid}`,
        },
        [a.Vv.Sx]: {
          steamidAttribute: "steamid",
          titleLoc: "#SteamNotifications_ParentalFeatureRequestTitle",
          bodyLoc: "#SteamNotifications_ParentalFeatureRequestBody",
          url: () =>
            `${P.TS.STORE_BASE_URL}account/familymanagement?tab=requests`,
        },
        [a.Vv.Cz]: {
          steamidAttribute: "requestor_steamid",
          titleLoc: "#SteamNotifications_FamilyPurchaseRequestTitle",
          bodyLoc: "#SteamNotifications_FamilyPurchaseRequestBody",
          url: (e) => (0, L.w1)(e.familyid, e.request_id),
        },
        [a.Vv.HN]: {
          steamidAttribute: "responder_steamid",
          titleLoc: (e) =>
            e.action == V.IG.DP
              ? "#SteamNotifications_FamilyPurchaseRequestResponseDeclinedTitle"
              : "",
          bodyLoc: (e) =>
            e.action == V.IG.DP
              ? "#SteamNotifications_FamilyPurchaseRequestDeclinedBody"
              : "",
          url: () =>
            `${P.TS.STORE_BASE_URL}account/familymanagement?tab=requests`,
        },
        [a.Vv.j3]: {
          steamidAttribute: "steamid",
          titleLoc: "#SteamNotifications_ParentalPlaytimeRequestTitle",
          bodyLoc: "#SteamNotifications_ParentalPlaytimeRequestBody",
          url: () =>
            `${P.TS.STORE_BASE_URL}account/familymanagement?tab=requests`,
        },
        [a.Vv.uH]: {
          steamidAttribute: "steamid_approver",
          titleLoc: (e) =>
            e.approved
              ? "#SteamNotifications_ParentalFeatureAccessResponseTitleApproved"
              : "#SteamNotifications_ParentalFeatureAccessResponseTitleDeclined",
          bodyLoc: (e) =>
            e.approved
              ? "#SteamNotifications_ParentalFeatureAccessResponseBodyApproved"
              : "#SteamNotifications_ParentalFeatureAccessResponseBodyDeclined",
          url: () =>
            `${P.TS.STORE_BASE_URL}account/familymanagement?tab=requests`,
        },
        [a.Vv.JN]: {
          steamidAttribute: "steamid_approver",
          titleLoc: (e) =>
            e.approved
              ? "#SteamNotifications_ParentalPlaytimeResponseTitleApproved"
              : "#SteamNotifications_ParentalPlaytimeResponseTitleDeclined",
          bodyLoc: (e) =>
            e.approved
              ? "#SteamNotifications_ParentalPlaytimeResponseBodyApproved"
              : "#SteamNotifications_ParentalPlaytimeResponseBodyDeclined",
          url: () =>
            `${P.TS.STORE_BASE_URL}account/familymanagement?tab=requests`,
        },
      };
      function It(e) {
        if (void 0 !== e) return Ct[e];
      }
      function Nt(e) {
        return !!It(e);
      }
      const Et = [
        a.Vv.v_,
        a.Vv.pZ,
        a.Vv.K,
        a.Vv.hW,
        a.Vv.XJ,
        a.Vv.an,
        a.Vv.Y9,
        a.Vv.YE,
        a.Vv.bh,
        a.Vv.js,
        a.Vv.mr,
      ];
      function xt(e) {
        return null != Et.findIndex((t) => t == e);
      }
      function Gt(e) {
        return (
          !e.hidden &&
          (Ut((t = e.notification_type)) || Nt(t) || xt(t)) &&
          nr(e.body_data)
        );
        var t;
      }
      var At;
      !(function (e) {
        (e[(e.New = 0)] = "New"),
          (e[(e.Update = 1)] = "Update"),
          (e[(e.Remove = 2)] = "Remove");
      })(At || (At = {}));
      const kt = 172800,
        Pt = 600,
        Dt = new k.wd("SteamNotificationStore"),
        Lt = Dt.Debug,
        Vt = Dt.Error,
        $t = Dt.Warning;
      class Ht {
        constructor() {
          (0, I.Gn)(this);
        }
        m_rgNotificationRollups = [];
        m_summary = {
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
        m_eTargetClientType = a.rB.D;
        m_fnOnNotificationCallback = null;
        BHasNotificationsData() {
          return null != this.m_currentNotificationsData;
        }
        setTransport(e) {
          this.m_transport = e;
        }
        RegisterOnNotificationCallback(e) {
          this.m_fnOnNotificationCallback = e;
        }
        SetClientFilters(e, t = a.rB.D) {
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
            !Br(e) &&
            !this.m_rgUnreadNotificationIDs.includes(e.notification_id)
          );
        }
        Dev_AddTestNotification(e) {}
        Dev_UpdateTestNotificationReadState(e, t) {
          const r = this.m_rgTestNotifications.findIndex(
            (t) => t.notification_id == e,
          );
          return (
            -1 !== r &&
            this.m_rgTestNotifications[r].read != t &&
            ((this.m_rgTestNotifications[r].read = t), !0)
          );
        }
        UpdateServer() {
          if (this.m_rgNotifyServerRead.length > 0) {
            const e = s.w.Init(a.V4);
            e.Body().set_notification_ids(this.m_rgNotifyServerRead),
              a.Fn.MarkNotificationsRead(this.m_transport, e) &&
                (this.m_rgNotifyServerRead = []);
          }
          if (this.m_rgNotifyServerHidden.length > 0) {
            const e = s.w.Init(a.b$);
            e.Body().set_notification_ids(this.m_rgNotifyServerHidden),
              a.Fn.HideNotification(this.m_transport, e) &&
                (this.m_rgNotifyServerHidden = []);
          }
        }
        MarkItemRead(e, t = !1) {
          let r = this.m_rgNotificationRollups.findIndex(
            (t) => t.item.notification_id == e,
          );
          if (-1 === r)
            return void (t
              ? this.NotifyServerNotificationsRead([e])
              : Vt(
                  "Attempted to mark notification read that is not in the notification store",
                ));
          let i = this.m_rgNotificationRollups[r];
          if (i.item.read)
            Vt("Attempted to mark notification read that is already read");
          else if (((i.item.read = !0), i.rgunread?.length > 0)) {
            this.ReduceNewTotals(i.type, i.rgunread.length);
            let e = [];
            i.rgunread.forEach((t) => {
              e.push(t);
            }),
              i.rgread.push(...i.rgunread),
              (i.rgunread = []),
              this.NotifyServerNotificationsRead(e);
          }
        }
        MarkItemHidden(e) {
          let t = this.m_rgNotificationRollups.findIndex(
            (t) => t.item.notification_id == e,
          );
          if (-1 === t)
            return void Vt(
              "Attempted to mark notification hidden that is not in the notification store",
            );
          let r = this.m_rgNotificationRollups[t];
          (r.item.hidden = !0),
            r.rgunread?.length > 0 &&
              this.ReduceNewTotals(r.type, r.rgunread?.length),
            this.NotifyServerNotificationsHidden([...r.rgunread, ...r.rgread]);
        }
        ReduceNewTotals(e, t) {
          dr(this.m_summary, e, -t);
        }
        MarkAllItemsViewed() {
          const e = s.w.Init(a.nH);
          e.Body().set_remote_client_id(this.m_strRemoteClientID),
            e.Body().set_target_client_type(this.m_eTargetClientType),
            a.Fn.MarkNotificationsViewed(this.m_transport, e),
            (this.m_nUnviewed = 0);
        }
        MarkAllItemsRead(e) {
          let t = [],
            r = [];
          const i = e ?? this.m_rgNotificationRollups;
          return (
            i.forEach((e, i) => {
              e.rgunread.length > 0 &&
                (e.rgunread.forEach((e) => {
                  t.push(e);
                }),
                r.push(i));
            }),
            t.length > 0 &&
              ((this.m_summary = Object.assign(
                {
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
                },
                {
                  pending_gifts: this.m_summary.pending_gifts,
                  pending_invites: this.m_summary.pending_invites,
                  pending_family_invites: this.m_summary.pending_family_invites,
                },
              )),
              r.forEach((e) => {
                let t = i[e];
                (t.item.read = !0), (t.rgunread = []);
              }),
              this.NotifyServerNotificationsRead(t)),
            t.length + 0
          );
        }
        ApplyNotificationsUpdate(e) {
          if (
            (Lt("ApplyNotificationsUpdate", e),
            !e ||
              (!e.notifications?.length &&
                void 0 === e.pending_friend_count &&
                void 0 === e.pending_gift_count))
          )
            return void Lt(
              "Error: ApplyNotificationsUpdate was called with no data",
            );
          if (!this.m_currentNotificationsData)
            return void Lt(
              "Error: ApplyNotificationsUpdate was called before this.m_currentNotificationsData was set",
            );
          const t = this.m_currentNotificationsData;
          e.notifications?.forEach((e) => {
            const r = t.notifications.findIndex(
              (t) => t.notification_id == e.notification_id,
            );
            -1 != r
              ? Object.assign(t.notifications[r], e)
              : t.notifications.push(e);
          }),
            void 0 !== e.pending_friend_count &&
              (this.m_currentNotificationsData.pending_friend_count =
                e.pending_friend_count),
            void 0 !== e.pending_gift_count &&
              (this.m_currentNotificationsData.pending_gift_count =
                e.pending_gift_count),
            void 0 !== e.pending_family_invite_count &&
              (this.m_currentNotificationsData.pending_family_invite_count =
                e.pending_family_invite_count),
            this.ProcessNotifications();
        }
        ProcessNewNotificationPayload(e) {
          (this.m_currentNotificationsData = JSON.parse(JSON.stringify(e))),
            this.ProcessNotifications();
        }
        ProcessNotifications() {
          let e = [],
            t = {
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
            },
            r = 0;
          if (
            (this.m_currentNotificationsData?.notifications?.forEach((i) => {
              if (!this.BExcludeClientTargetedNotification(i)) {
                if (this.m_rgNotifyServerHidden.length > 0) {
                  -1 !==
                    this.m_rgNotifyServerHidden.findIndex(
                      (e) => e == i.notification_id,
                    ) && (i.hidden = !0);
                }
                if (Gt(i)) {
                  if (this.m_rgNotifyServerRead.length > 0) {
                    -1 !==
                      this.m_rgNotifyServerRead.findIndex(
                        (e) => e == i.notification_id,
                      ) && (i.read = !0);
                  }
                  i.read || dr(t, i.notification_type, 1),
                    i.viewed || r++,
                    this.AddNotificationToRollups(e, i);
                }
              }
            }),
            e.sort((e, t) => e.timestamp - t.timestamp),
            this.m_fnOnNotificationCallback)
          ) {
            for (const t of e)
              if (t.bSendToCallbackAsNew)
                this.m_rgNewRollupIDs.set(
                  t.rollup_key,
                  JSON.parse(JSON.stringify(t)),
                ),
                  this.m_fnOnNotificationCallback(t, At.New);
              else if (this.m_rgNewRollupIDs.has(t.rollup_key)) {
                let e = this.m_rgNewRollupIDs.get(t.rollup_key);
                (e.item.read == t.item.read &&
                  e.item.viewed == t.item.viewed) ||
                  (this.m_rgNewRollupIDs.set(
                    t.rollup_key,
                    JSON.parse(JSON.stringify(t)),
                  ),
                  this.m_fnOnNotificationCallback(t, At.Update));
              }
            for (const [t, r] of this.m_rgNewRollupIDs)
              -1 == e.findIndex((e) => e.rollup_key == t) &&
                (this.m_fnOnNotificationCallback(r, At.Remove),
                this.m_rgNewRollupIDs.delete(t));
          }
          e.reverse(),
            (t.pending_gifts =
              this.m_currentNotificationsData?.pending_gift_count ?? 0),
            (t.pending_invites =
              this.m_currentNotificationsData?.pending_friend_count ?? 0),
            (t.pending_family_invites =
              this.m_currentNotificationsData?.pending_family_invite_count ??
              0),
            (this.m_rgNotificationRollups = e.slice()),
            (this.m_summary = t),
            (this.m_bLoaded = !0),
            (this.m_nUnviewed = r);
        }
        BExcludeClientTargetedNotification(e) {
          const t = nr(e.body_data);
          return (
            !!t &&
            (!(
              !t.remote_client_id ||
              this.m_strRemoteClientID == t.remote_client_id
            ) ||
              !(
                !t.target_client_types ||
                this.m_eTargetClientType & t.target_client_types
              ))
          );
        }
        BReplaceRollupItem(e, t) {
          return e.read != t.read
            ? t.read
            : (e.read && t.read) || t.viewed == e.viewed
              ? t.timestamp < e.timestamp
              : !(e.viewed || !t.viewed) ||
                (!(!e.viewed || !t.viewed) && t.viewed < e.viewed);
        }
        AddNotificationToRollups(e, t) {
          const r = this.BSendToCallbackAsNew(t);
          r && this.m_rgUnreadNotificationIDs.push(t.notification_id);
          let i = t.notification_type;
          switch (i) {
            case a.Vv.v_:
              {
                const n = ar(t);
                if (!n) return;
                const a =
                  "comment_" +
                  n.owner_steam_id?.GetAccountID() +
                  "_" +
                  n.forum_id +
                  "_" +
                  n.topic_id;
                let s = e.findIndex((e) => e.rollup_key == a);
                if (-1 == s)
                  e.push({
                    type: i,
                    rollup_key: a,
                    item: t,
                    rollup_count: 1,
                    timestamp: t.timestamp,
                    rgunread: t.read ? [] : [t.notification_id],
                    rgread: t.read ? [t.notification_id] : [],
                    bSendToCallbackAsNew: r,
                    url: Zt(n),
                  });
                else {
                  let i = e[s];
                  this.BReplaceRollupItem(t, i.item) &&
                    ((i.url = Zt(n)),
                    (i.item = t),
                    (i.timestamp = t.timestamp),
                    (i.bSendToCallbackAsNew = r)),
                    (i.rollup_count = i.rollup_count + 1),
                    t.read
                      ? i.rgread.push(t.notification_id)
                      : i.rgunread.push(t.notification_id);
                }
              }
              break;
            case a.Vv.hW:
              const n = ar(t);
              if (n) {
                const a = "item_" + n.appid;
                this.AddNotificationToRollupByAppID(e, t, a, i, r, n.appid);
              }
              break;
            case a.Vv.Y9:
              const s = ar(t)?.appid.toString();
              if (s) {
                const n = "asyncgame_" + s;
                this.AddNotificationToRollupByAppID(e, t, n, i, r, s);
              }
              break;
            case a.Vv.Iz:
              const o = ar(t),
                c = o?.report_id,
                l = o?.subject_type,
                u = o?.subject_group_id,
                m = o?.subject_id,
                d = `contentreport_${c}`;
              let _ = e.findIndex((e) => e.rollup_key == d);
              if (-1 == _)
                e.push({
                  type: i,
                  rollup_key: d,
                  item: t,
                  rollup_count: 1,
                  timestamp: t.timestamp,
                  rgunread: t.read ? [] : [t.notification_id],
                  rgread: t.read ? [t.notification_id] : [],
                  bSendToCallbackAsNew: r,
                  url: `${P.TS.COMMUNITY_BASE_URL}my/reportedcontent/${l}-${u}-${m}`,
                });
              else {
                let i = e[_];
                this.BReplaceRollupItem(t, i.item) &&
                  ((i.url = `${P.TS.COMMUNITY_BASE_URL}my/reportedcontent/${l}-${u}-${m}`),
                  (i.item = t),
                  (i.timestamp = t.timestamp),
                  (i.bSendToCallbackAsNew = r)),
                  (i.rollup_count = i.rollup_count + 1),
                  t.read
                    ? i.rgread.push(t.notification_id)
                    : i.rgunread.push(t.notification_id);
              }
              break;
            default:
              e.push({
                type: i,
                rollup_key: t.notification_id,
                item: t,
                timestamp: t.timestamp,
                rgunread: t.read ? [] : [t.notification_id],
                rgread: t.read ? [t.notification_id] : [],
                bSendToCallbackAsNew: r,
              });
          }
        }
        AddNotificationToRollupByAppID(e, t, r, i, n, a) {
          let s = e.findIndex((e) => e.rollup_key == r);
          if (-1 == s)
            e.push({
              type: i,
              rollup_key: r,
              item: t,
              rollup_count: 1,
              timestamp: t.timestamp,
              rgunread: t.read ? [] : [t.notification_id],
              rgread: t.read ? [t.notification_id] : [],
              bSendToCallbackAsNew: n,
            });
          else {
            let r = e[s];
            this.BReplaceRollupItem(t, r.item) &&
              ((r.item = t),
              (r.timestamp = t.timestamp),
              (r.bSendToCallbackAsNew = n)),
              (r.rollup_count = r.rollup_count + 1),
              t.read
                ? r.rgread.push(t.notification_id)
                : r.rgunread.push(t.notification_id);
          }
        }
      }
      async function Xt(e, t, r, i, n, c = !0, l = !1) {
        if (!t) throw new Error("Invalid steamid for GetSteamNotifications");
        const u = s.w.Init(a.GG);
        u.Body().set_language(r),
          u.Body().set_include_read(c),
          u.Body().set_include_pinned_counts(!0),
          u.Body().set_include_confirmation_count(l);
        const m = await a.Fn.GetSteamNotifications(e, u);
        if (m.GetEResult() !== o.R)
          throw (
            ($t(
              `Received error from GetSteamNotifications. Result ${m.GetEResult()}. Transport ${m.Hdr().transport_error()}`,
            ),
            new Error(`Error from GetSteamNotifications: ${m.GetEResult()}`))
          );
        const d = m.Body().toObject();
        return (
          i &&
            (d.notifications = d.notifications?.filter(
              (e) => !mr(e.notification_type, i, n),
            )),
          d
        );
      }
      (0, n.Cg)([I.sH], Ht.prototype, "m_rgNotificationRollups", void 0),
        (0, n.Cg)([I.sH], Ht.prototype, "m_summary", void 0),
        (0, n.Cg)([I.sH], Ht.prototype, "m_bLoaded", void 0),
        (0, n.Cg)([I.sH], Ht.prototype, "m_nUnviewed", void 0),
        (0, n.Cg)([I.XI], Ht.prototype, "ProcessNotifications", null);
      const Yt = "ItemMetadata";
      function Jt(e) {
        return [
          `${Yt}_${e?.steamid}_${e?.appid}_${e?.contextid}_${e?.assetid}`,
        ];
      }
      function Kt(e, t, r) {
        let n = or(a.Vv.hW, e.body_data);
        n.steamid = t;
        let c = (0, C.I)({
          queryKey: Jt(n),
          queryFn: async () =>
            (async function (e, t) {
              if (!(e && e.steamid && e.contextid && e.appid && e.assetid))
                return (
                  Vt("Item notification missing required attributes"), null
                );
              const r = s.w.Init(j);
              r.Body().set_steamid(e.steamid),
                r.Body().set_contextid(e.contextid),
                r.Body().set_appid(parseInt(e.appid)),
                r.Body().set_get_descriptions(!0),
                r.Body().set_language(P.TS.LANGUAGE);
              let n = new h();
              n.add_assetids(e.assetid), r.Body().set_filters(n);
              const a = await i.GetInventoryItemsWithDescriptions(t, r);
              return a.GetEResult() !== o.R
                ? (Vt(
                    "Request for steam item metadata did not succeed",
                    a.GetEResult(),
                  ),
                  null)
                : (a.Body().toObject().descriptions[0] ?? null);
            })(n, r),
          staleTime: 1 / 0,
        });
        return c.isSuccess ? c.data : null;
      }
      function Zt(e) {
        let t = `comment/${e.comment_type}/bounce/${e.owner_steam_id.ConvertTo64BitString()}/${e.forum_id}/?feature2=${e.topic_id}`;
        return e.last_post > 0 && (t += "&tscn=" + (e.last_post - 1)), t;
      }
      function Qt(e) {
        return e.comment_type == x.Yd;
      }
      function er(e) {
        return e?.bhas_friend;
      }
      function tr(e) {
        return e.comment_type == x.Yd;
      }
      function rr(e) {
        return Qt(e) || er(e);
      }
      function ir(e) {
        return tr(e);
      }
      function nr(e) {
        if (!e) return null;
        try {
          return JSON.parse(e);
        } catch (t) {
          Lt("Steam notification in invalid format:", e);
        }
        return null;
      }
      function ar(e) {
        return or(e.notification_type, e.body_data);
      }
      function sr(e) {
        return or(e.type, e.item?.body_data);
      }
      function or(e, t) {
        let r = nr(t);
        if (!r) return null;
        switch (e) {
          case a.Vv.K:
            return r.gifter_account;
          case a.Vv.YE:
            return {
              responder_steamid: r.responder_steamid,
              package_id: r.package_id,
              bundle_id: r.bundle_id,
            };
          case a.Vv.an:
            return parseInt(r.sender);
          case a.Vv.XJ:
            return {
              appid: r.appid,
              count: r.count ?? 1,
              appids: r.appids ?? [],
            };
          case a.Vv.Y9:
            return !r.appid || !r.state || (r.state != G.GO && r.state != G.cf)
              ? (Lt("Async game notification invalid data", t), null)
              : { appid: parseInt(r.appid), state: parseInt(r.state) };
          case a.Vv.v_:
            let i = {
              owner_steam_id: r.owner_steam_id
                ? new N.b(r.owner_steam_id)
                : null,
              bclan_account: cr(r.bclan_account),
              title: r.title,
              comment: r.text,
              time: r.last_post,
              comment_type: Number(r.type),
              topic_id: r.topic_id,
              forum_id: r.forum_id,
              account_steam_id: r.account_id
                ? N.b.InitFromAccountID(r.account_id)
                : null,
              bhas_friend: cr(r.bhas_friend),
              bis_forum: cr(r.bis_forum),
              last_post: r.last_post,
              bsubscribed: cr(r.subscribed),
              bis_owner: cr(r.bis_owner),
            };
            return (
              r.json_data &&
                (i.json_data = {
                  app_id: parseInt(r.json_data.app_id),
                  file_type: parseInt(r.json_data.file_type),
                  title: r.json_data.title,
                }),
              i
            );
          case a.Vv.pZ:
            return {
              requestorID: parseInt(r.requestor_id),
              state: r.state ? parseInt(r.state) : c.abL,
            };
          case a.Vv.hW:
            return {
              appid: parseInt(r.app_id),
              assetid: r.asset_id ?? "",
              contextid: r.context_id ?? "",
            };
          case a.Vv.js:
            return {
              url: r.url ?? "",
              strGameName: r.content_app_name ?? "",
              mediaType: r.media_type ?? "clip",
              secDuration: parseFloat(r.duration_seconds ?? 0),
              nSize: parseInt(r.file_size ?? 0),
              strMachineName: r.machine_name,
              rtExpiration: r.expiration,
              thumbnailURL: r.thumbnail_url,
            };
          case a.Vv.Iz:
            return {
              report_id: r.report_id ?? "",
              subject_type: r.subject_type ?? 0,
              subject_group_id: r.subject_group_id ?? "0",
              subject_id: r.subject_id ?? "0",
              status: r.status ?? 0,
            };
          default:
            return (
              Lt(
                "GetCustomNotificationDataByType called with unexpected type:" +
                  e,
                t,
              ),
              null
            );
        }
      }
      function cr(e) {
        if (void 0 === e) return !1;
        if ("number" == typeof e) return e > 0;
        if ("string" == typeof e)
          switch (e.toLowerCase()?.trim()) {
            case "true":
            case "1":
              return !0;
            default:
              return !1;
          }
        return Lt("notification contained unexpected boolean value"), !1;
      }
      const lr = {
        [a.Vv.Jo]: { rollup_field: void 0, eFeature: void 0 },
        [a.Vv.yh]: { rollup_field: void 0, eFeature: void 0 },
        [a.Vv.K]: { rollup_field: "gifts", eFeature: E.uX },
        [a.Vv.v_]: { rollup_field: "comments", eFeature: E.qR },
        [a.Vv.hW]: { rollup_field: "inventory_items", eFeature: E.WJ },
        [a.Vv.pZ]: { rollup_field: "invites", eFeature: E.M },
        [a.Vv.wp]: { rollup_field: "major_sale", eFeature: E.ip },
        [a.Vv.Ol]: { rollup_field: void 0, eFeature: void 0 },
        [a.Vv.XJ]: { rollup_field: "wishlist", eFeature: E.ip },
        [a.Vv.an]: { rollup_field: "trade_offers", eFeature: E.ut },
        [a.Vv.e9]: { rollup_field: "general", eFeature: E.uX },
        [a.Vv.wY]: { rollup_field: "help_request_replies", eFeature: E.uX },
        [a.Vv.Y9]: { rollup_field: "async_game_updates", eFeature: E.uX },
        [a.Vv.oe]: { rollup_field: "moderator_messages", eFeature: E.qR },
        [a.Vv.Sx]: {
          rollup_field: "parental_feature_requests",
          eFeature: E.uX,
        },
        [a.Vv.Rj]: { rollup_field: "family_invites", eFeature: E.uX },
        [a.Vv.Cz]: { rollup_field: "family_purchase_requests", eFeature: E.uX },
        [a.Vv.j3]: {
          rollup_field: "parental_playtime_requests",
          eFeature: E.uX,
        },
        [a.Vv.HN]: {
          rollup_field: "family_purchase_request_responses",
          eFeature: E.uX,
        },
        [a.Vv.uH]: {
          rollup_field: "parental_feature_access_responses",
          eFeature: E.uX,
        },
        [a.Vv.JN]: {
          rollup_field: "parental_playtime_responses",
          eFeature: E.uX,
        },
        [a.Vv.YE]: { rollup_field: "requested_game_added", eFeature: E.uX },
        [a.Vv.js]: { rollup_field: void 0, eFeature: E.uX },
        [a.Vv.bh]: { rollup_field: void 0, eFeature: E.uX },
        [a.Vv.FK]: { rollup_field: "playtest_invites", eFeature: E.ip },
        [a.Vv.mr]: { rollup_field: void 0, eFeature: E.ut },
        [a.Vv.Iz]: { rollup_field: void 0, eFeature: E.uX },
      };
      function ur(e) {
        const t = lr[e];
        return (0, $.wT)(!!t, `Missing notification type data for ${e}`), t;
      }
      function mr(e, t, r) {
        if (!t) return !1;
        const i = ur(e);
        return (0, H.EC)(t, i?.eFeature ?? E.JC, r);
      }
      function dr(e, t, r) {
        (0, I.h5)(() => {
          const i = ur(t);
          i?.rollup_field &&
            (e[i.rollup_field] = Math.max(0, e[i.rollup_field] + r));
        });
      }
      function _r(e) {
        return !e.viewed || e.viewed + Pt > (0, A._2)();
      }
      function Br(e) {
        return e.viewed && e.viewed + kt < (0, A._2)();
      }
    },
  },
]);
