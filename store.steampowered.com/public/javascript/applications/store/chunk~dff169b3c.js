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
        GG: () => k,
        b$: () => X,
        V4: () => A,
        nH: () => D,
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
          Cz: () => h,
          HN: () => v,
          pZ: () => B,
          e9: () => f,
          K: () => u,
          wY: () => M,
          Jo: () => l,
          hW: () => _,
          wp: () => g,
          oe: () => z,
          Sx: () => S,
          uH: () => q,
          j3: () => j,
          JN: () => W,
          FK: () => U,
          Ol: () => b,
          Iz: () => C,
          YE: () => T,
          js: () => O,
          yh: () => m,
          an: () => y,
          mr: () => I,
          XJ: () => p,
        });
      var n = {};
      r.r(n), r.d(n, { D: () => N });
      var a = r(80613),
        s = r.n(a),
        o = r(89068),
        c = r(56545);
      const l = 0,
        m = 1,
        u = 2,
        d = 3,
        _ = 4,
        B = 5,
        g = 6,
        b = 7,
        p = 8,
        y = 9,
        f = 10,
        M = 11,
        w = 12,
        z = 14,
        S = 15,
        R = 16,
        h = 17,
        j = 18,
        v = 19,
        q = 20,
        W = 21,
        T = 22,
        O = 23,
        F = 24,
        U = 28,
        I = 29,
        C = 30,
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
      class k extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            k.prototype.include_hidden || o.Sg(k.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
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
          return "CSteamNotification_GetSteamNotifications_Request";
        }
      }
      class G extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            G.prototype.notifications || o.Sg(G.M()),
            a.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
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
          return "CSteamNotification_GetSteamNotifications_Response";
        }
      }
      class A extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            A.prototype.timestamp || o.Sg(A.M()),
            a.Message.initialize(this, e, 0, -1, [3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
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
          return "CSteamNotification_MarkNotificationsRead_Notification";
        }
      }
      class D extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            D.prototype.remote_client_id || o.Sg(D.M()),
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
          return "CSteamNotification_MarkNotificationsViewed_Notification";
        }
      }
      class P extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            P.prototype.notification_type || o.Sg(P.M()),
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
          return "SteamNotificationPreference";
        }
      }
      class V extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            V.prototype.preferences || o.Sg(V.M()),
            a.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            V.sm_m ||
              (V.sm_m = {
                proto: V,
                fields: { preferences: { n: 1, c: P, r: !0, q: !0 } },
              }),
            V.sm_m
          );
        }
        static MBF() {
          return V.sm_mbf || (V.sm_mbf = o.w0(V.M())), V.sm_mbf;
        }
        toObject(e = !1) {
          return V.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(V.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(V.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new V();
          return V.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(V.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(V.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamNotification_SetPreferences_Request";
        }
      }
      class L extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new L();
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new L();
          return L.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
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
                fields: { preferences: { n: 1, c: P, r: !0, q: !0 } },
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
                fields: { preferences: { n: 1, c: P, r: !0, q: !0 } },
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
            (0, c.I8)(k, t, r),
            G,
            { bConstMethod: !0, ePrivilege: 1 },
          );
        }),
          (e.MarkNotificationsRead = function (e, t) {
            return e.SendNotification(
              "SteamNotification.MarkNotificationsRead#1",
              (0, c.I8)(A, t),
              { ePrivilege: 1 },
            );
          }),
          (e.MarkNotificationsViewed = function (e, t) {
            return e.SendNotification(
              "SteamNotification.MarkNotificationsViewed#1",
              (0, c.I8)(D, t),
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
              (0, c.I8)(V, t, r),
              L,
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
        OT: () => Ot,
        iO: () => Tt,
        T4: () => Wt,
        n8: () => qt,
        hr: () => vt,
        IC: () => ot,
        V4: () => dt,
        sR: () => mt,
        jb: () => kt,
        Rl: () => At,
        XT: () => Dt,
        cE: () => wt,
        tM: () => zt,
        K9: () => st,
        bP: () => It,
        aq: () => lt,
        u5: () => Ft,
        IL: () => ht,
      });
      var i,
        n = r(34629),
        a = r(37340),
        s = r(56545),
        o = r(37085),
        c = r(22837),
        l = r(80613),
        m = r.n(l),
        u = r(89068);
      class d extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.type || u.Sg(d.M()),
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
                  type: { n: 1, br: u.qM.readString, bw: u.gp.writeString },
                  value: { n: 2, br: u.qM.readString, bw: u.gp.writeString },
                  color: { n: 3, br: u.qM.readString, bw: u.gp.writeString },
                  label: { n: 4, br: u.qM.readString, bw: u.gp.writeString },
                  name: { n: 5, br: u.qM.readString, bw: u.gp.writeString },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = u.w0(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(d.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
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
            _.prototype.link || u.Sg(_.M()),
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
                  link: { n: 1, br: u.qM.readString, bw: u.gp.writeString },
                  name: { n: 2, br: u.qM.readString, bw: u.gp.writeString },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = u.w0(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(_.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
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
            B.prototype.appid || u.Sg(B.M()),
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
                  appid: { n: 1, br: u.qM.readUint32, bw: u.gp.writeUint32 },
                  category: { n: 2, br: u.qM.readString, bw: u.gp.writeString },
                  internal_name: {
                    n: 3,
                    br: u.qM.readString,
                    bw: u.gp.writeString,
                  },
                  localized_category_name: {
                    n: 4,
                    br: u.qM.readString,
                    bw: u.gp.writeString,
                  },
                  localized_tag_name: {
                    n: 5,
                    br: u.qM.readString,
                    bw: u.gp.writeString,
                  },
                  color: { n: 6, br: u.qM.readString, bw: u.gp.writeString },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = u.w0(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(B.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
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
            g.prototype.contained_items || u.Sg(g.M()),
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
          return g.sm_mbf || (g.sm_mbf = u.w0(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(g.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
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
            b.prototype.classid || u.Sg(b.M()),
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
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  instanceid: {
                    n: 2,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = u.w0(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(b.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
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
            p.prototype.appid || u.Sg(p.M()),
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
                  appid: { n: 1, br: u.qM.readInt32, bw: u.gp.writeInt32 },
                  classid: {
                    n: 2,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  instanceid: {
                    n: 3,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  currency: { n: 4, br: u.qM.readBool, bw: u.gp.writeBool },
                  background_color: {
                    n: 5,
                    br: u.qM.readString,
                    bw: u.gp.writeString,
                  },
                  icon_url: { n: 6, br: u.qM.readString, bw: u.gp.writeString },
                  icon_url_large: {
                    n: 7,
                    br: u.qM.readString,
                    bw: u.gp.writeString,
                  },
                  descriptions: { n: 8, c: d, r: !0, q: !0 },
                  tradable: { n: 9, br: u.qM.readBool, bw: u.gp.writeBool },
                  actions: { n: 10, c: _, r: !0, q: !0 },
                  owner_descriptions: { n: 11, c: d, r: !0, q: !0 },
                  owner_actions: { n: 12, c: _, r: !0, q: !0 },
                  fraudwarnings: {
                    n: 13,
                    r: !0,
                    q: !0,
                    br: u.qM.readString,
                    bw: u.gp.writeRepeatedString,
                  },
                  name: { n: 14, br: u.qM.readString, bw: u.gp.writeString },
                  name_color: {
                    n: 15,
                    br: u.qM.readString,
                    bw: u.gp.writeString,
                  },
                  type: { n: 16, br: u.qM.readString, bw: u.gp.writeString },
                  market_name: {
                    n: 17,
                    br: u.qM.readString,
                    bw: u.gp.writeString,
                  },
                  market_hash_name: {
                    n: 18,
                    br: u.qM.readString,
                    bw: u.gp.writeString,
                  },
                  market_fee: {
                    n: 19,
                    br: u.qM.readString,
                    bw: u.gp.writeString,
                  },
                  market_fee_app: {
                    n: 28,
                    br: u.qM.readInt32,
                    bw: u.gp.writeInt32,
                  },
                  contained_item: { n: 20, c: p },
                  market_actions: { n: 21, c: _, r: !0, q: !0 },
                  commodity: { n: 22, br: u.qM.readBool, bw: u.gp.writeBool },
                  market_tradable_restriction: {
                    n: 23,
                    br: u.qM.readInt32,
                    bw: u.gp.writeInt32,
                  },
                  market_marketable_restriction: {
                    n: 24,
                    br: u.qM.readInt32,
                    bw: u.gp.writeInt32,
                  },
                  marketable: { n: 25, br: u.qM.readBool, bw: u.gp.writeBool },
                  tags: { n: 26, c: B, r: !0, q: !0 },
                  item_expiration: {
                    n: 27,
                    br: u.qM.readString,
                    bw: u.gp.writeString,
                  },
                  market_buy_country_restriction: {
                    n: 30,
                    br: u.qM.readString,
                    bw: u.gp.writeString,
                  },
                  market_sell_country_restriction: {
                    n: 31,
                    br: u.qM.readString,
                    bw: u.gp.writeString,
                  },
                  sealed: { n: 32, br: u.qM.readBool, bw: u.gp.writeBool },
                  container_properties: { n: 33, c: g },
                  market_bucket_group_name: {
                    n: 34,
                    br: u.qM.readString,
                    bw: u.gp.writeString,
                  },
                  market_bucket_group_id: {
                    n: 35,
                    br: u.qM.readString,
                    bw: u.gp.writeString,
                  },
                  sealed_type: {
                    n: 37,
                    br: u.qM.readUint32,
                    bw: u.gp.writeUint32,
                  },
                  market_name_inside_group: {
                    n: 38,
                    br: u.qM.readString,
                    bw: u.gp.writeString,
                  },
                  market_bucket_id: {
                    n: 39,
                    br: u.qM.readString,
                    bw: u.gp.writeString,
                  },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = u.w0(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(p.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
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
            y.prototype.propertyid || u.Sg(y.M()),
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
                    br: u.qM.readUint32,
                    bw: u.gp.writeUint32,
                  },
                  int_value: {
                    n: 2,
                    br: u.qM.readInt64String,
                    bw: u.gp.writeInt64String,
                  },
                  float_value: {
                    n: 3,
                    br: u.qM.readFloat,
                    bw: u.gp.writeFloat,
                  },
                  string_value: {
                    n: 4,
                    br: u.qM.readString,
                    bw: u.gp.writeString,
                  },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = u.w0(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(y.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEconItem_AssetProperty";
        }
      }
      class f extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.classid || u.Sg(f.M()),
            l.Message.initialize(this, e, 0, -1, [3, 4, 5], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  classid: {
                    n: 1,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  instanceid: {
                    n: 2,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  standalone_properties: { n: 3, c: y, r: !0, q: !0 },
                  parent_relationship_properties: { n: 4, c: y, r: !0, q: !0 },
                  nested_accessories: { n: 5, c: f, r: !0, q: !0 },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = u.w0(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(f.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEconItem_AssetAccessory";
        }
      }
      class M extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.appid || u.Sg(M.M()),
            l.Message.initialize(this, e, 0, -1, [4, 5], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  appid: { n: 1, br: u.qM.readUint32, bw: u.gp.writeUint32 },
                  contextid: {
                    n: 2,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  assetid: {
                    n: 3,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  asset_properties: { n: 4, c: y, r: !0, q: !0 },
                  asset_accessories: { n: 5, c: f, r: !0, q: !0 },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = u.w0(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(M.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEconItem_AssetProperties";
        }
      }
      class w extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.id || u.Sg(w.M()),
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
                  id: { n: 1, br: u.qM.readUint32, bw: u.gp.writeUint32 },
                  name: { n: 2, br: u.qM.readString, bw: u.gp.writeString },
                  type: { n: 3, br: u.qM.readEnum, bw: u.gp.writeEnum },
                  float_min: { n: 4, br: u.qM.readFloat, bw: u.gp.writeFloat },
                  float_max: { n: 5, br: u.qM.readFloat, bw: u.gp.writeFloat },
                  int_min: {
                    n: 6,
                    br: u.qM.readInt64String,
                    bw: u.gp.writeInt64String,
                  },
                  int_max: {
                    n: 7,
                    br: u.qM.readInt64String,
                    bw: u.gp.writeInt64String,
                  },
                  localized_label: {
                    n: 8,
                    br: u.qM.readString,
                    bw: u.gp.writeString,
                  },
                  hide_from_description: {
                    n: 9,
                    br: u.qM.readBool,
                    bw: u.gp.writeBool,
                  },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = u.w0(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(w.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
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
            z.prototype.appid || u.Sg(z.M()),
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
                  appid: { n: 1, br: u.qM.readUint32, bw: u.gp.writeUint32 },
                  language: { n: 2, br: u.qM.readString, bw: u.gp.writeString },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = u.w0(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(z.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
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
            S.prototype.property_schemas || u.Sg(S.M()),
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
          return S.sm_mbf || (S.sm_mbf = u.w0(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(S.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
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
            R.prototype.appid || u.Sg(R.M()),
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
                  appid: { n: 1, br: u.qM.readUint32, bw: u.gp.writeUint32 },
                  contextid: {
                    n: 2,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  assetid: {
                    n: 3,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  classid: {
                    n: 4,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  instanceid: {
                    n: 5,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  currencyid: {
                    n: 6,
                    br: u.qM.readUint32,
                    bw: u.gp.writeUint32,
                  },
                  amount: {
                    n: 7,
                    br: u.qM.readInt64String,
                    bw: u.gp.writeInt64String,
                  },
                  missing: { n: 8, br: u.qM.readBool, bw: u.gp.writeBool },
                  est_usd: {
                    n: 9,
                    br: u.qM.readInt64String,
                    bw: u.gp.writeInt64String,
                  },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = u.w0(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(R.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(R.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_Asset";
        }
      }
      class h extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.steamid || u.Sg(h.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  steamid: {
                    n: 1,
                    br: u.qM.readFixed64String,
                    bw: u.gp.writeFixed64String,
                  },
                  appid: { n: 2, br: u.qM.readUint32, bw: u.gp.writeUint32 },
                  contextid: {
                    n: 3,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  get_descriptions: {
                    n: 4,
                    br: u.qM.readBool,
                    bw: u.gp.writeBool,
                  },
                  get_asset_properties: {
                    n: 11,
                    br: u.qM.readBool,
                    bw: u.gp.writeBool,
                  },
                  for_trade_offer_verification: {
                    n: 10,
                    br: u.qM.readBool,
                    bw: u.gp.writeBool,
                  },
                  language: { n: 5, br: u.qM.readString, bw: u.gp.writeString },
                  filters: { n: 6, c: j },
                  start_assetid: {
                    n: 8,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  count: { n: 9, br: u.qM.readInt32, bw: u.gp.writeInt32 },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = u.w0(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(h.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_GetInventoryItemsWithDescriptions_Request";
        }
      }
      class j extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.assetids || u.Sg(j.M()),
            l.Message.initialize(this, e, 0, -1, [1, 2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  assetids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: u.qM.readUint64String,
                    pbr: u.qM.readPackedUint64String,
                    bw: u.gp.writeRepeatedUint64String,
                  },
                  currencyids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: u.qM.readUint32,
                    pbr: u.qM.readPackedUint32,
                    bw: u.gp.writeRepeatedUint32,
                  },
                  tradable_only: {
                    n: 3,
                    br: u.qM.readBool,
                    bw: u.gp.writeBool,
                  },
                  marketable_only: {
                    n: 4,
                    br: u.qM.readBool,
                    bw: u.gp.writeBool,
                  },
                },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = u.w0(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(j.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(j.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new j();
          return j.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(j.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(j.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_GetInventoryItemsWithDescriptions_Request_FilterOptions";
        }
      }
      class v extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.assets || u.Sg(v.M()),
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
                  asset_properties: { n: 7, c: M, r: !0, q: !0 },
                  more_items: { n: 4, br: u.qM.readBool, bw: u.gp.writeBool },
                  last_assetid: {
                    n: 5,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  total_inventory_count: {
                    n: 6,
                    br: u.qM.readUint32,
                    bw: u.gp.writeUint32,
                  },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = u.w0(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(v.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_GetInventoryItemsWithDescriptions_Response";
        }
      }
      class q extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            q.prototype.generate_new_token || u.Sg(q.M()),
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
                  generate_new_token: {
                    n: 1,
                    br: u.qM.readBool,
                    bw: u.gp.writeBool,
                  },
                },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = u.w0(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(q.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new q();
          return q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(q.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_GetTradeOfferAccessToken_Request";
        }
      }
      class W extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.trade_offer_access_token || u.Sg(W.M()),
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
                  trade_offer_access_token: {
                    n: 1,
                    br: u.qM.readString,
                    bw: u.gp.writeString,
                  },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = u.w0(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(W.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(W.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new W();
          return W.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(W.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(W.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CEcon_GetTradeOfferAccessToken_Response";
        }
      }
      class T extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.return_url || u.Sg(T.M()),
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
                    br: u.qM.readString,
                    bw: u.gp.writeString,
                  },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = u.w0(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(T.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(T.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new T();
          return T.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
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
            O.prototype.url || u.Sg(O.M()),
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
                  url: { n: 1, br: u.qM.readString, bw: u.gp.writeString },
                },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = u.w0(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(O.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(O.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new O();
          return O.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(O.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(O.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
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
            F.prototype.language || u.Sg(F.M()),
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
                  language: { n: 1, br: u.qM.readString, bw: u.gp.writeString },
                  appid: { n: 2, br: u.qM.readUint32, bw: u.gp.writeUint32 },
                  classes: { n: 3, c: b, r: !0, q: !0 },
                  high_pri: { n: 4, br: u.qM.readBool, bw: u.gp.writeBool },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = u.w0(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(F.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(F.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(F.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(F.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
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
            U.prototype.descriptions || u.Sg(U.M()),
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
          return U.sm_mbf || (U.sm_mbf = u.w0(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(U.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(U.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new U();
          return U.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(U.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(U.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
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
            (0, s.I8)(h, t, r),
            v,
            { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 2 },
          );
        }),
          (e.GetTradeOfferAccessToken = function (e, t, r) {
            return e.SendMsg(
              "Econ.GetTradeOfferAccessToken#1",
              (0, s.I8)(q, t, r),
              W,
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
      var I = r(80902),
        C = r(14947),
        N = r(17720),
        E = r(9344),
        x = r(37226),
        k = r(96305),
        G = r(14771),
        A = r(60778),
        D = r(30470),
        P = r(78327),
        V = r(30925),
        L = r(35850),
        $ = r(81393),
        H = r(15419);
      class X extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            X.prototype.data || u.Sg(X.M()),
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
          return X.sm_mbf || (X.sm_mbf = u.w0(X.M())), X.sm_mbf;
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(X.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(X.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new X();
          return X.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(X.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(X.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
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
            Y.prototype.key || u.Sg(Y.M()),
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
                  key: { n: 1, br: u.qM.readString, bw: u.gp.writeString },
                  value: { n: 2, br: u.qM.readString, bw: u.gp.writeString },
                },
              }),
            Y.sm_m
          );
        }
        static MBF() {
          return Y.sm_mbf || (Y.sm_mbf = u.w0(Y.M())), Y.sm_mbf;
        }
        toObject(e = !1) {
          return Y.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(Y.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(Y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new Y();
          return Y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(Y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(Y.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
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
            J.prototype.steamid || u.Sg(J.M()),
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
                  steamid: {
                    n: 1,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  start: { n: 2, br: u.qM.readUint32, bw: u.gp.writeUint32 },
                  count: { n: 3, br: u.qM.readUint32, bw: u.gp.writeUint32 },
                },
              }),
            J.sm_m
          );
        }
        static MBF() {
          return J.sm_mbf || (J.sm_mbf = u.w0(J.M())), J.sm_mbf;
        }
        toObject(e = !1) {
          return J.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(J.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(J.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new J();
          return J.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(J.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(J.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetReportsSubmittedByUser_Request";
        }
      }
      class K extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            K.prototype.report_id || u.Sg(K.M()),
            l.Message.initialize(this, e, 0, -1, [23, 24], null);
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
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  reporter_steamid: {
                    n: 2,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  time_reported: {
                    n: 3,
                    br: u.qM.readUint32,
                    bw: u.gp.writeUint32,
                  },
                  report_reason: {
                    n: 4,
                    br: u.qM.readEnum,
                    bw: u.gp.writeEnum,
                  },
                  report_text: {
                    n: 5,
                    br: u.qM.readString,
                    bw: u.gp.writeString,
                  },
                  subject_type: { n: 6, br: u.qM.readEnum, bw: u.gp.writeEnum },
                  subject_group_id: {
                    n: 7,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  subject_id: {
                    n: 8,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  resolved: { n: 9, br: u.qM.readEnum, bw: u.gp.writeEnum },
                  time_resolved: {
                    n: 10,
                    br: u.qM.readUint32,
                    bw: u.gp.writeUint32,
                  },
                  resolver_steamid: {
                    n: 11,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  time_notified: {
                    n: 12,
                    br: u.qM.readUint32,
                    bw: u.gp.writeUint32,
                  },
                  additional_subject_data: { n: 13, c: X },
                  time_disputed: {
                    n: 14,
                    br: u.qM.readUint32,
                    bw: u.gp.writeUint32,
                  },
                  dispute_details: {
                    n: 15,
                    br: u.qM.readString,
                    bw: u.gp.writeString,
                  },
                  dispute_resolver_steamid: {
                    n: 16,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  dispute_resolved: {
                    n: 17,
                    br: u.qM.readEnum,
                    bw: u.gp.writeEnum,
                  },
                  time_dispute_resolved: {
                    n: 18,
                    br: u.qM.readUint32,
                    bw: u.gp.writeUint32,
                  },
                  detected_by_automation: {
                    n: 19,
                    d: !1,
                    br: u.qM.readBool,
                    bw: u.gp.writeBool,
                  },
                  resolved_by_automation: {
                    n: 20,
                    d: 0,
                    br: u.qM.readEnum,
                    bw: u.gp.writeEnum,
                  },
                  content_moderated_reason: {
                    n: 21,
                    br: u.qM.readEnum,
                    bw: u.gp.writeEnum,
                  },
                  dispute_resolved_reason: {
                    n: 22,
                    br: u.qM.readEnum,
                    bw: u.gp.writeEnum,
                  },
                  sanctions_applied: { n: 23, c: ne, r: !0, q: !0 },
                  sanctions_applied_on_dispute: { n: 24, c: ne, r: !0, q: !0 },
                  reported_content_id: {
                    n: 25,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  coordinates: { n: 26, c: Ce },
                },
              }),
            K.sm_m
          );
        }
        static MBF() {
          return K.sm_mbf || (K.sm_mbf = u.w0(K.M())), K.sm_mbf;
        }
        toObject(e = !1) {
          return K.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(K.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(K.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new K();
          return K.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(K.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(K.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return K.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ContentReport";
        }
      }
      class Z extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Z.prototype.content_report || u.Sg(Z.M()),
            l.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Z.sm_m ||
              (Z.sm_m = {
                proto: Z,
                fields: {
                  content_report: { n: 1, c: K, r: !0, q: !0 },
                  total_count: {
                    n: 2,
                    br: u.qM.readUint32,
                    bw: u.gp.writeUint32,
                  },
                },
              }),
            Z.sm_m
          );
        }
        static MBF() {
          return Z.sm_mbf || (Z.sm_mbf = u.w0(Z.M())), Z.sm_mbf;
        }
        toObject(e = !1) {
          return Z.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(Z.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(Z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new Z();
          return Z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(Z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(Z.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetReportsSubmittedByUser_Response";
        }
      }
      class Q extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Q.prototype.steamid || u.Sg(Q.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
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
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  subject_type: { n: 2, br: u.qM.readEnum, bw: u.gp.writeEnum },
                  subject_group_id: {
                    n: 3,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  subject_id: {
                    n: 4,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  reported_content_id: {
                    n: 5,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                },
              }),
            Q.sm_m
          );
        }
        static MBF() {
          return Q.sm_mbf || (Q.sm_mbf = u.w0(Q.M())), Q.sm_mbf;
        }
        toObject(e = !1) {
          return Q.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(Q.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(Q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new Q();
          return Q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(Q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(Q.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetOneReportSubmittedByUser_Request";
        }
      }
      class ee extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ee.prototype.content_report || u.Sg(ee.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ee.sm_m ||
              (ee.sm_m = {
                proto: ee,
                fields: { content_report: { n: 1, c: K } },
              }),
            ee.sm_m
          );
        }
        static MBF() {
          return ee.sm_mbf || (ee.sm_mbf = u.w0(ee.M())), ee.sm_mbf;
        }
        toObject(e = !1) {
          return ee.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(ee.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(ee.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new ee();
          return ee.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(ee.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(ee.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetOneReportSubmittedByUser_Response";
        }
      }
      class te extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            te.prototype.steamid || u.Sg(te.M()),
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
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                },
              }),
            te.sm_m
          );
        }
        static MBF() {
          return te.sm_mbf || (te.sm_mbf = u.w0(te.M())), te.sm_mbf;
        }
        toObject(e = !1) {
          return te.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(te.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(te.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new te();
          return te.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(te.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(te.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetReportedSubjectsByOwner_Request";
        }
      }
      class re extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            re.prototype.subject_type || u.Sg(re.M()),
            l.Message.initialize(this, e, 0, -1, [13, 31, 32], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            re.sm_m ||
              (re.sm_m = {
                proto: re,
                fields: {
                  subject_type: { n: 1, br: u.qM.readEnum, bw: u.gp.writeEnum },
                  subject_group_id: {
                    n: 2,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  subject_id: {
                    n: 3,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  owner_steam_id: {
                    n: 4,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  language: { n: 5, br: u.qM.readInt32, bw: u.gp.writeInt32 },
                  resolved: { n: 6, br: u.qM.readEnum, bw: u.gp.writeEnum },
                  time_resolved: {
                    n: 7,
                    br: u.qM.readUint32,
                    bw: u.gp.writeUint32,
                  },
                  unresolved_report_count: {
                    n: 8,
                    br: u.qM.readUint32,
                    bw: u.gp.writeUint32,
                  },
                  oldest_unresolved_report_time: {
                    n: 9,
                    br: u.qM.readUint32,
                    bw: u.gp.writeUint32,
                  },
                  resolver_steamid: {
                    n: 10,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  assigned_moderator_steamid: {
                    n: 11,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  time_claimed_by_moderator: {
                    n: 12,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  reports: { n: 13, c: K, r: !0, q: !0 },
                  additional_subject_data: { n: 14, c: X },
                  csam_status: { n: 15, br: u.qM.readEnum, bw: u.gp.writeEnum },
                  terrorism_status: {
                    n: 16,
                    br: u.qM.readEnum,
                    bw: u.gp.writeEnum,
                  },
                  content_moderated_reason: {
                    n: 17,
                    br: u.qM.readEnum,
                    bw: u.gp.writeEnum,
                  },
                  unresolved_dispute_count: {
                    n: 18,
                    br: u.qM.readUint32,
                    bw: u.gp.writeUint32,
                  },
                  oldest_unresolved_dispute_time: {
                    n: 19,
                    br: u.qM.readUint32,
                    bw: u.gp.writeUint32,
                  },
                  owner_dispute_time: {
                    n: 24,
                    br: u.qM.readUint32,
                    bw: u.gp.writeUint32,
                  },
                  owner_dispute_resolved_time: {
                    n: 25,
                    br: u.qM.readUint32,
                    bw: u.gp.writeUint32,
                  },
                  owner_dispute_details: {
                    n: 26,
                    br: u.qM.readString,
                    bw: u.gp.writeString,
                  },
                  required_moderator_level: {
                    n: 27,
                    br: u.qM.readEnum,
                    bw: u.gp.writeEnum,
                  },
                  resolved_by_automation: {
                    n: 28,
                    d: 0,
                    br: u.qM.readEnum,
                    bw: u.gp.writeEnum,
                  },
                  detected_by_automation: {
                    n: 29,
                    d: !1,
                    br: u.qM.readBool,
                    bw: u.gp.writeBool,
                  },
                  credible_threat_of_violence_status: {
                    n: 30,
                    br: u.qM.readEnum,
                    bw: u.gp.writeEnum,
                  },
                  sanctions_applied: { n: 31, c: ne, r: !0, q: !0 },
                  sanctions_applied_after_dispute: {
                    n: 32,
                    c: ne,
                    r: !0,
                    q: !0,
                  },
                  decision_reversed: {
                    n: 33,
                    br: u.qM.readBool,
                    bw: u.gp.writeBool,
                  },
                  reported_content_id: {
                    n: 34,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  coordinates: { n: 35, c: Ce },
                },
              }),
            re.sm_m
          );
        }
        static MBF() {
          return re.sm_mbf || (re.sm_mbf = u.w0(re.M())), re.sm_mbf;
        }
        toObject(e = !1) {
          return re.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(re.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(re.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new re();
          return re.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(re.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(re.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ContentReportSubject";
        }
      }
      class ie extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ie.prototype.subject || u.Sg(ie.M()),
            l.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ie.sm_m ||
              (ie.sm_m = {
                proto: ie,
                fields: { subject: { n: 1, c: re, r: !0, q: !0 } },
              }),
            ie.sm_m
          );
        }
        static MBF() {
          return ie.sm_mbf || (ie.sm_mbf = u.w0(ie.M())), ie.sm_mbf;
        }
        toObject(e = !1) {
          return ie.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(ie.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(ie.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new ie();
          return ie.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(ie.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(ie.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetReportedSubjectsByOwner_Response";
        }
      }
      class ne extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ne.prototype.sanction || u.Sg(ne.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ne.sm_m ||
              (ne.sm_m = {
                proto: ne,
                fields: {
                  sanction: { n: 1, br: u.qM.readEnum, bw: u.gp.writeEnum },
                  days: { n: 2, br: u.qM.readInt32, bw: u.gp.writeInt32 },
                  escalate_to: { n: 3, br: u.qM.readEnum, bw: u.gp.writeEnum },
                },
              }),
            ne.sm_m
          );
        }
        static MBF() {
          return ne.sm_mbf || (ne.sm_mbf = u.w0(ne.M())), ne.sm_mbf;
        }
        toObject(e = !1) {
          return ne.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(ne.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(ne.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new ne();
          return ne.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(ne.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(ne.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ContentReportSubjectSanction";
        }
      }
      class ae extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ae.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new ae();
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new ae();
          return ae.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetSubjectOverview_Request";
        }
      }
      class se extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            se.prototype.buckets || u.Sg(se.M()),
            l.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            se.sm_m ||
              (se.sm_m = {
                proto: se,
                fields: {
                  buckets: { n: 1, c: oe, r: !0, q: !0 },
                  pending_for_any_moderator: {
                    n: 2,
                    br: u.qM.readUint32,
                    bw: u.gp.writeUint32,
                  },
                  pending_for_supervisor: {
                    n: 3,
                    br: u.qM.readUint32,
                    bw: u.gp.writeUint32,
                  },
                  pending_for_valve: {
                    n: 4,
                    br: u.qM.readUint32,
                    bw: u.gp.writeUint32,
                  },
                },
              }),
            se.sm_m
          );
        }
        static MBF() {
          return se.sm_mbf || (se.sm_mbf = u.w0(se.M())), se.sm_mbf;
        }
        toObject(e = !1) {
          return se.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(se.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(se.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new se();
          return se.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(se.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(se.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetSubjectOverview_Response";
        }
      }
      class oe extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            oe.prototype.subject_type || u.Sg(oe.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            oe.sm_m ||
              (oe.sm_m = {
                proto: oe,
                fields: {
                  subject_type: { n: 1, br: u.qM.readEnum, bw: u.gp.writeEnum },
                  unresolved_count: {
                    n: 2,
                    br: u.qM.readUint32,
                    bw: u.gp.writeUint32,
                  },
                  oldest_unresolved: {
                    n: 3,
                    br: u.qM.readUint32,
                    bw: u.gp.writeUint32,
                  },
                  unclaimed_count: {
                    n: 4,
                    br: u.qM.readUint32,
                    bw: u.gp.writeUint32,
                  },
                  oldest_disputed: {
                    n: 5,
                    br: u.qM.readUint32,
                    bw: u.gp.writeUint32,
                  },
                  disputed_count: {
                    n: 6,
                    br: u.qM.readUint32,
                    bw: u.gp.writeUint32,
                  },
                  unclaimed_disputed_count: {
                    n: 7,
                    br: u.qM.readUint32,
                    bw: u.gp.writeUint32,
                  },
                  pending_for_any_moderator: {
                    n: 8,
                    br: u.qM.readUint32,
                    bw: u.gp.writeUint32,
                  },
                  pending_for_supervisor: {
                    n: 9,
                    br: u.qM.readUint32,
                    bw: u.gp.writeUint32,
                  },
                  pending_for_valve: {
                    n: 10,
                    br: u.qM.readUint32,
                    bw: u.gp.writeUint32,
                  },
                  oldest_unresolved_for_any_moderator: {
                    n: 11,
                    br: u.qM.readUint32,
                    bw: u.gp.writeUint32,
                  },
                  oldest_unresolved_for_supervisor: {
                    n: 12,
                    br: u.qM.readUint32,
                    bw: u.gp.writeUint32,
                  },
                  oldest_unresolved_for_valve: {
                    n: 13,
                    br: u.qM.readUint32,
                    bw: u.gp.writeUint32,
                  },
                },
              }),
            oe.sm_m
          );
        }
        static MBF() {
          return oe.sm_mbf || (oe.sm_mbf = u.w0(oe.M())), oe.sm_mbf;
        }
        toObject(e = !1) {
          return oe.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(oe.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(oe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new oe();
          return oe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(oe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(oe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetSubjectOverview_Response_Bucket";
        }
      }
      class ce extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ce.prototype.subject_type || u.Sg(ce.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ce.sm_m ||
              (ce.sm_m = {
                proto: ce,
                fields: {
                  subject_type: { n: 1, br: u.qM.readEnum, bw: u.gp.writeEnum },
                  subject_group_id: {
                    n: 2,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  subject_id: {
                    n: 3,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  reported_content_id: {
                    n: 4,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                },
              }),
            ce.sm_m
          );
        }
        static MBF() {
          return ce.sm_mbf || (ce.sm_mbf = u.w0(ce.M())), ce.sm_mbf;
        }
        toObject(e = !1) {
          return ce.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(ce.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(ce.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new ce();
          return ce.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(ce.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(ce.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ContentReportSubjectKey";
        }
      }
      class le extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            le.prototype.steamid || u.Sg(le.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            le.sm_m ||
              (le.sm_m = {
                proto: le,
                fields: {
                  steamid: {
                    n: 1,
                    br: u.qM.readFixed64String,
                    bw: u.gp.writeFixed64String,
                  },
                  rtime_cooldown_ends: {
                    n: 2,
                    br: u.qM.readUint32,
                    bw: u.gp.writeUint32,
                  },
                  acquit_unresolved_reports: {
                    n: 3,
                    br: u.qM.readBool,
                    bw: u.gp.writeBool,
                  },
                },
              }),
            le.sm_m
          );
        }
        static MBF() {
          return le.sm_mbf || (le.sm_mbf = u.w0(le.M())), le.sm_mbf;
        }
        toObject(e = !1) {
          return le.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(le.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(le.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new le();
          return le.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(le.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(le.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_UpdateReporterCooldown_Request";
        }
      }
      class me extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return me.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new me();
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new me();
          return me.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_UpdateReporterCooldown_Response";
        }
      }
      class ue extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ue.prototype.steamid || u.Sg(ue.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ue.sm_m ||
              (ue.sm_m = {
                proto: ue,
                fields: {
                  steamid: {
                    n: 1,
                    br: u.qM.readFixed64String,
                    bw: u.gp.writeFixed64String,
                  },
                },
              }),
            ue.sm_m
          );
        }
        static MBF() {
          return ue.sm_mbf || (ue.sm_mbf = u.w0(ue.M())), ue.sm_mbf;
        }
        toObject(e = !1) {
          return ue.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(ue.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(ue.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new ue();
          return ue.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(ue.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(ue.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetReporterCooldown_Request";
        }
      }
      class de extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            de.prototype.rtime_cooldown_ends || u.Sg(de.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            de.sm_m ||
              (de.sm_m = {
                proto: de,
                fields: {
                  rtime_cooldown_ends: {
                    n: 1,
                    br: u.qM.readUint32,
                    bw: u.gp.writeUint32,
                  },
                },
              }),
            de.sm_m
          );
        }
        static MBF() {
          return de.sm_mbf || (de.sm_mbf = u.w0(de.M())), de.sm_mbf;
        }
        toObject(e = !1) {
          return de.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(de.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(de.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new de();
          return de.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(de.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return de.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(de.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return de.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetReporterCooldown_Response";
        }
      }
      class _e extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _e.prototype.steamid || u.Sg(_e.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _e.sm_m ||
              (_e.sm_m = {
                proto: _e,
                fields: {
                  steamid: {
                    n: 1,
                    br: u.qM.readFixed64String,
                    bw: u.gp.writeFixed64String,
                  },
                },
              }),
            _e.sm_m
          );
        }
        static MBF() {
          return _e.sm_mbf || (_e.sm_mbf = u.w0(_e.M())), _e.sm_mbf;
        }
        toObject(e = !1) {
          return _e.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(_e.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(_e.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new _e();
          return _e.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(_e.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return _e.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(_e.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return _e.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetModeratorPreferences_Request";
        }
      }
      class Be extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Be.prototype.preferred_level || u.Sg(Be.M()),
            l.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Be.sm_m ||
              (Be.sm_m = {
                proto: Be,
                fields: {
                  preferred_level: {
                    n: 1,
                    br: u.qM.readEnum,
                    bw: u.gp.writeEnum,
                  },
                  enabled_subject_types: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: u.qM.readEnum,
                    pbr: u.qM.readPackedEnum,
                    bw: u.gp.writeRepeatedEnum,
                  },
                },
              }),
            Be.sm_m
          );
        }
        static MBF() {
          return Be.sm_mbf || (Be.sm_mbf = u.w0(Be.M())), Be.sm_mbf;
        }
        toObject(e = !1) {
          return Be.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(Be.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(Be.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new Be();
          return Be.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(Be.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return Be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(Be.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return Be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetModeratorPreferences_Response";
        }
      }
      class ge extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ge.prototype.preferred_level || u.Sg(ge.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ge.sm_m ||
              (ge.sm_m = {
                proto: ge,
                fields: {
                  preferred_level: {
                    n: 1,
                    br: u.qM.readEnum,
                    bw: u.gp.writeEnum,
                  },
                  enabled_subject_types: { n: 2, c: be },
                },
              }),
            ge.sm_m
          );
        }
        static MBF() {
          return ge.sm_mbf || (ge.sm_mbf = u.w0(ge.M())), ge.sm_mbf;
        }
        toObject(e = !1) {
          return ge.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(ge.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(ge.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new ge();
          return ge.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(ge.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(ge.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return ge.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_SetModeratorPreferences_Request";
        }
      }
      class be extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            be.prototype.subject_types || u.Sg(be.M()),
            l.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            be.sm_m ||
              (be.sm_m = {
                proto: be,
                fields: {
                  subject_types: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: u.qM.readEnum,
                    pbr: u.qM.readPackedEnum,
                    bw: u.gp.writeRepeatedEnum,
                  },
                },
              }),
            be.sm_m
          );
        }
        static MBF() {
          return be.sm_mbf || (be.sm_mbf = u.w0(be.M())), be.sm_mbf;
        }
        toObject(e = !1) {
          return be.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(be.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(be.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new be();
          return be.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(be.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(be.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_SetModeratorPreferences_Request_SubjectTypeList";
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
          let t = new (m().BinaryReader)(e),
            r = new pe();
          return pe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return pe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_SetModeratorPreferences_Response";
        }
      }
      class ye extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ye.prototype.steamid || u.Sg(ye.M()),
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
                  steamid: {
                    n: 1,
                    br: u.qM.readFixed64String,
                    bw: u.gp.writeFixed64String,
                  },
                  rt_start: { n: 2, br: u.qM.readUint32, bw: u.gp.writeUint32 },
                },
              }),
            ye.sm_m
          );
        }
        static MBF() {
          return ye.sm_mbf || (ye.sm_mbf = u.w0(ye.M())), ye.sm_mbf;
        }
        toObject(e = !1) {
          return ye.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(ye.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(ye.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new ye();
          return ye.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(ye.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(ye.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return ye.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetModeratorActivity_Request";
        }
      }
      class fe extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            fe.prototype.activities || u.Sg(fe.M()),
            l.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            fe.sm_m ||
              (fe.sm_m = {
                proto: fe,
                fields: { activities: { n: 1, c: Me, r: !0, q: !0 } },
              }),
            fe.sm_m
          );
        }
        static MBF() {
          return fe.sm_mbf || (fe.sm_mbf = u.w0(fe.M())), fe.sm_mbf;
        }
        toObject(e = !1) {
          return fe.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(fe.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(fe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new fe();
          return fe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(fe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(fe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return fe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetModeratorActivity_Response";
        }
      }
      class Me extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Me.prototype.subject_type || u.Sg(Me.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Me.sm_m ||
              (Me.sm_m = {
                proto: Me,
                fields: {
                  subject_type: { n: 1, br: u.qM.readEnum, bw: u.gp.writeEnum },
                  subject_group_id: {
                    n: 2,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  subject_id: {
                    n: 3,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  timestamp: {
                    n: 4,
                    br: u.qM.readUint32,
                    bw: u.gp.writeUint32,
                  },
                  action: { n: 5, br: u.qM.readEnum, bw: u.gp.writeEnum },
                  json_data: {
                    n: 6,
                    br: u.qM.readString,
                    bw: u.gp.writeString,
                  },
                  reported_content_id: {
                    n: 7,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                },
              }),
            Me.sm_m
          );
        }
        static MBF() {
          return Me.sm_mbf || (Me.sm_mbf = u.w0(Me.M())), Me.sm_mbf;
        }
        toObject(e = !1) {
          return Me.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(Me.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(Me.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new Me();
          return Me.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(Me.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return Me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(Me.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return Me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetModeratorActivity_Response_ModerationActivity";
        }
      }
      class we extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            we.prototype.rtime_start_date || u.Sg(we.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            we.sm_m ||
              (we.sm_m = {
                proto: we,
                fields: {
                  rtime_start_date: {
                    n: 1,
                    br: u.qM.readUint32,
                    bw: u.gp.writeUint32,
                  },
                  rtime_end_date: {
                    n: 2,
                    br: u.qM.readUint32,
                    bw: u.gp.writeUint32,
                  },
                  subject_type: { n: 3, br: u.qM.readEnum, bw: u.gp.writeEnum },
                },
              }),
            we.sm_m
          );
        }
        static MBF() {
          return we.sm_mbf || (we.sm_mbf = u.w0(we.M())), we.sm_mbf;
        }
        toObject(e = !1) {
          return we.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(we.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(we.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new we();
          return we.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(we.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return we.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(we.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return we.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetDailyModerationStatistics_Request";
        }
      }
      class ze extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ze.prototype.stats || u.Sg(ze.M()),
            l.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ze.sm_m ||
              (ze.sm_m = {
                proto: ze,
                fields: { stats: { n: 2, c: Se, r: !0, q: !0 } },
              }),
            ze.sm_m
          );
        }
        static MBF() {
          return ze.sm_mbf || (ze.sm_mbf = u.w0(ze.M())), ze.sm_mbf;
        }
        toObject(e = !1) {
          return ze.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(ze.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(ze.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new ze();
          return ze.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(ze.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(ze.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return ze.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetDailyModerationStatistics_Response";
        }
      }
      class Se extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Se.prototype.rtime_date || u.Sg(Se.M()),
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
                  rtime_date: {
                    n: 1,
                    br: u.qM.readUint32,
                    bw: u.gp.writeUint32,
                  },
                  times_unresolved: {
                    n: 2,
                    br: u.qM.readUint32,
                    bw: u.gp.writeUint32,
                  },
                  times_resolved: {
                    n: 3,
                    br: u.qM.readUint32,
                    bw: u.gp.writeUint32,
                  },
                },
              }),
            Se.sm_m
          );
        }
        static MBF() {
          return Se.sm_mbf || (Se.sm_mbf = u.w0(Se.M())), Se.sm_mbf;
        }
        toObject(e = !1) {
          return Se.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(Se.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(Se.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new Se();
          return Se.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(Se.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return Se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(Se.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return Se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetDailyModerationStatistics_Response_DayStatistics";
        }
      }
      class Re extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Re.prototype.subject_type || u.Sg(Re.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Re.sm_m ||
              (Re.sm_m = {
                proto: Re,
                fields: {
                  subject_type: { n: 1, br: u.qM.readEnum, bw: u.gp.writeEnum },
                  count: { n: 2, br: u.qM.readUint32, bw: u.gp.writeUint32 },
                },
              }),
            Re.sm_m
          );
        }
        static MBF() {
          return Re.sm_mbf || (Re.sm_mbf = u.w0(Re.M())), Re.sm_mbf;
        }
        toObject(e = !1) {
          return Re.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(Re.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(Re.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new Re();
          return Re.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(Re.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return Re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(Re.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return Re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetOldestUnresolvedSubjects_Request";
        }
      }
      class he extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            he.prototype.subjects || u.Sg(he.M()),
            l.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            he.sm_m ||
              (he.sm_m = {
                proto: he,
                fields: { subjects: { n: 1, c: je, r: !0, q: !0 } },
              }),
            he.sm_m
          );
        }
        static MBF() {
          return he.sm_mbf || (he.sm_mbf = u.w0(he.M())), he.sm_mbf;
        }
        toObject(e = !1) {
          return he.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(he.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(he.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new he();
          return he.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(he.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return he.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(he.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return he.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetOldestUnresolvedSubjects_Response";
        }
      }
      class je extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            je.prototype.subject_type || u.Sg(je.M()),
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
                  subject_type: { n: 1, br: u.qM.readEnum, bw: u.gp.writeEnum },
                  subject_group_id: {
                    n: 2,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  subject_id: {
                    n: 3,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  reported_content_id: {
                    n: 4,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                },
              }),
            je.sm_m
          );
        }
        static MBF() {
          return je.sm_mbf || (je.sm_mbf = u.w0(je.M())), je.sm_mbf;
        }
        toObject(e = !1) {
          return je.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(je.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(je.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new je();
          return je.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(je.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return je.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(je.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return je.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetOldestUnresolvedSubjects_Response_Subject";
        }
      }
      class ve extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ve.prototype.steamid || u.Sg(ve.M()),
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
                  steamid: {
                    n: 1,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                },
              }),
            ve.sm_m
          );
        }
        static MBF() {
          return ve.sm_mbf || (ve.sm_mbf = u.w0(ve.M())), ve.sm_mbf;
        }
        toObject(e = !1) {
          return ve.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(ve.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(ve.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new ve();
          return ve.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(ve.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(ve.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return ve.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetReporterStats_Request";
        }
      }
      class qe extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            qe.prototype.total_reports || u.Sg(qe.M()),
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
                  total_reports: {
                    n: 1,
                    br: u.qM.readUint32,
                    bw: u.gp.writeUint32,
                  },
                  total_acquitted_reports: {
                    n: 2,
                    br: u.qM.readUint32,
                    bw: u.gp.writeUint32,
                  },
                  reports_in_last_week: {
                    n: 3,
                    br: u.qM.readUint32,
                    bw: u.gp.writeUint32,
                  },
                  acquitted_reports_in_last_week: {
                    n: 4,
                    br: u.qM.readUint32,
                    bw: u.gp.writeUint32,
                  },
                },
              }),
            qe.sm_m
          );
        }
        static MBF() {
          return qe.sm_mbf || (qe.sm_mbf = u.w0(qe.M())), qe.sm_mbf;
        }
        toObject(e = !1) {
          return qe.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(qe.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(qe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new qe();
          return qe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(qe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(qe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return qe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetReporterStats_Response";
        }
      }
      class We extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            We.prototype.subject_type || u.Sg(We.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            We.sm_m ||
              (We.sm_m = {
                proto: We,
                fields: {
                  subject_type: { n: 1, br: u.qM.readEnum, bw: u.gp.writeEnum },
                  moderator_level: {
                    n: 2,
                    br: u.qM.readEnum,
                    bw: u.gp.writeEnum,
                  },
                },
              }),
            We.sm_m
          );
        }
        static MBF() {
          return We.sm_mbf || (We.sm_mbf = u.w0(We.M())), We.sm_mbf;
        }
        toObject(e = !1) {
          return We.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(We.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(We.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new We();
          return We.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(We.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return We.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(We.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return We.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_ClaimBatch_Request";
        }
      }
      class Te extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Te.prototype.subjects || u.Sg(Te.M()),
            l.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Te.sm_m ||
              (Te.sm_m = {
                proto: Te,
                fields: { subjects: { n: 1, c: re, r: !0, q: !0 } },
              }),
            Te.sm_m
          );
        }
        static MBF() {
          return Te.sm_mbf || (Te.sm_mbf = u.w0(Te.M())), Te.sm_mbf;
        }
        toObject(e = !1) {
          return Te.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(Te.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(Te.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new Te();
          return Te.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(Te.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return Te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(Te.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return Te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_ClaimBatch_Response";
        }
      }
      class Oe extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Oe.prototype.steamid || u.Sg(Oe.M()),
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
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                },
              }),
            Oe.sm_m
          );
        }
        static MBF() {
          return Oe.sm_mbf || (Oe.sm_mbf = u.w0(Oe.M())), Oe.sm_mbf;
        }
        toObject(e = !1) {
          return Oe.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(Oe.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(Oe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new Oe();
          return Oe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(Oe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return Oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(Oe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return Oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetClaimedSubjects_Request";
        }
      }
      class Fe extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Fe.prototype.subjects || u.Sg(Fe.M()),
            l.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Fe.sm_m ||
              (Fe.sm_m = {
                proto: Fe,
                fields: { subjects: { n: 1, c: re, r: !0, q: !0 } },
              }),
            Fe.sm_m
          );
        }
        static MBF() {
          return Fe.sm_mbf || (Fe.sm_mbf = u.w0(Fe.M())), Fe.sm_mbf;
        }
        toObject(e = !1) {
          return Fe.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(Fe.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(Fe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new Fe();
          return Fe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(Fe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return Fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(Fe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return Fe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetClaimedSubjects_Response";
        }
      }
      class Ue extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ue.prototype.subjects_to_release || u.Sg(Ue.M()),
            l.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ue.sm_m ||
              (Ue.sm_m = {
                proto: Ue,
                fields: { subjects_to_release: { n: 1, c: ce, r: !0, q: !0 } },
              }),
            Ue.sm_m
          );
        }
        static MBF() {
          return Ue.sm_mbf || (Ue.sm_mbf = u.w0(Ue.M())), Ue.sm_mbf;
        }
        toObject(e = !1) {
          return Ue.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(Ue.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(Ue.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new Ue();
          return Ue.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(Ue.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return Ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(Ue.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return Ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_ReleaseSubjects_Request";
        }
      }
      class Ie extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Ie.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Ie();
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new Ie();
          return Ie.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return Ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return Ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_ReleaseSubjects_Response";
        }
      }
      class Ce extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ce.prototype.subject_type || u.Sg(Ce.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ce.sm_m ||
              (Ce.sm_m = {
                proto: Ce,
                fields: {
                  subject_type: { n: 1, br: u.qM.readEnum, bw: u.gp.writeEnum },
                  steamid: {
                    n: 2,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  forum: {
                    n: 3,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  topic: {
                    n: 4,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  comment: {
                    n: 5,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  comment_thread_id: {
                    n: 6,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  sender_account_id: {
                    n: 7,
                    br: u.qM.readUint32,
                    bw: u.gp.writeUint32,
                  },
                  chat_message_rtime: {
                    n: 8,
                    br: u.qM.readUint32,
                    bw: u.gp.writeUint32,
                  },
                  chat_message_ordinal: {
                    n: 9,
                    br: u.qM.readUint32,
                    bw: u.gp.writeUint32,
                  },
                  chat_group_id: {
                    n: 10,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  chat_room_id: {
                    n: 11,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  receiver_account_id: {
                    n: 12,
                    br: u.qM.readUint32,
                    bw: u.gp.writeUint32,
                  },
                  published_file_id: {
                    n: 13,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                },
              }),
            Ce.sm_m
          );
        }
        static MBF() {
          return Ce.sm_mbf || (Ce.sm_mbf = u.w0(Ce.M())), Ce.sm_mbf;
        }
        toObject(e = !1) {
          return Ce.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(Ce.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(Ce.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new Ce();
          return Ce.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(Ce.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return Ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(Ce.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return Ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ReportedContentCoordinates";
        }
      }
      class Ne extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ne.prototype.reported_content_id || u.Sg(Ne.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ne.sm_m ||
              (Ne.sm_m = {
                proto: Ne,
                fields: {
                  reported_content_id: {
                    n: 1,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                },
              }),
            Ne.sm_m
          );
        }
        static MBF() {
          return Ne.sm_mbf || (Ne.sm_mbf = u.w0(Ne.M())), Ne.sm_mbf;
        }
        toObject(e = !1) {
          return Ne.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(Ne.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(Ne.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new Ne();
          return Ne.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(Ne.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return Ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(Ne.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return Ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetReportedContentByID_Request";
        }
      }
      class Ee extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ee.prototype.subject || u.Sg(Ee.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ee.sm_m ||
              (Ee.sm_m = { proto: Ee, fields: { subject: { n: 1, c: re } } }),
            Ee.sm_m
          );
        }
        static MBF() {
          return Ee.sm_mbf || (Ee.sm_mbf = u.w0(Ee.M())), Ee.sm_mbf;
        }
        toObject(e = !1) {
          return Ee.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(Ee.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(Ee.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new Ee();
          return Ee.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(Ee.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return Ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(Ee.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return Ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetReportedContentByID_Response";
        }
      }
      class xe extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            xe.prototype.coordinates || u.Sg(xe.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            xe.sm_m ||
              (xe.sm_m = {
                proto: xe,
                fields: { coordinates: { n: 1, c: Ce } },
              }),
            xe.sm_m
          );
        }
        static MBF() {
          return xe.sm_mbf || (xe.sm_mbf = u.w0(xe.M())), xe.sm_mbf;
        }
        toObject(e = !1) {
          return xe.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(xe.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(xe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new xe();
          return xe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(xe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(xe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return xe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetReportedContent_Request";
        }
      }
      class ke extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ke.prototype.subjects || u.Sg(ke.M()),
            l.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ke.sm_m ||
              (ke.sm_m = {
                proto: ke,
                fields: { subjects: { n: 1, c: re, r: !0, q: !0 } },
              }),
            ke.sm_m
          );
        }
        static MBF() {
          return ke.sm_mbf || (ke.sm_mbf = u.w0(ke.M())), ke.sm_mbf;
        }
        toObject(e = !1) {
          return ke.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(ke.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(ke.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new ke();
          return ke.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(ke.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return ke.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(ke.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return ke.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetReportedContent_Response";
        }
      }
      class Ge extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ge.prototype.reported_content_id || u.Sg(Ge.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ge.sm_m ||
              (Ge.sm_m = {
                proto: Ge,
                fields: {
                  reported_content_id: {
                    n: 1,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  details: { n: 2, br: u.qM.readString, bw: u.gp.writeString },
                },
              }),
            Ge.sm_m
          );
        }
        static MBF() {
          return Ge.sm_mbf || (Ge.sm_mbf = u.w0(Ge.M())), Ge.sm_mbf;
        }
        toObject(e = !1) {
          return Ge.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(Ge.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(Ge.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new Ge();
          return Ge.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(Ge.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return Ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(Ge.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return Ge.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_OwnerDisputeModeration_Request";
        }
      }
      class Ae extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Ae.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Ae();
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new Ae();
          return Ae.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return Ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return Ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_OwnerDisputeModeration_Response";
        }
      }
      class De extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            De.prototype.reported_content_id || u.Sg(De.M()),
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
                  reported_content_id: {
                    n: 1,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                },
              }),
            De.sm_m
          );
        }
        static MBF() {
          return De.sm_mbf || (De.sm_mbf = u.w0(De.M())), De.sm_mbf;
        }
        toObject(e = !1) {
          return De.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(De.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(De.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new De();
          return De.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(De.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return De.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(De.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return De.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetAuditLogByID_Request";
        }
      }
      class Pe extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Pe.prototype.entries || u.Sg(Pe.M()),
            l.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Pe.sm_m ||
              (Pe.sm_m = {
                proto: Pe,
                fields: { entries: { n: 1, c: Ve, r: !0, q: !0 } },
              }),
            Pe.sm_m
          );
        }
        static MBF() {
          return Pe.sm_mbf || (Pe.sm_mbf = u.w0(Pe.M())), Pe.sm_mbf;
        }
        toObject(e = !1) {
          return Pe.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(Pe.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(Pe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new Pe();
          return Pe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(Pe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return Pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(Pe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return Pe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetAuditLogByID_Response";
        }
      }
      class Ve extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ve.prototype.timestamp || u.Sg(Ve.M()),
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
                  timestamp: {
                    n: 1,
                    br: u.qM.readUint32,
                    bw: u.gp.writeUint32,
                  },
                  actor_steamid: {
                    n: 2,
                    br: u.qM.readFixed64String,
                    bw: u.gp.writeFixed64String,
                  },
                  automated_action: {
                    n: 3,
                    br: u.qM.readBool,
                    bw: u.gp.writeBool,
                  },
                  action: { n: 4, br: u.qM.readEnum, bw: u.gp.writeEnum },
                  additional_json_data: {
                    n: 5,
                    br: u.qM.readString,
                    bw: u.gp.writeString,
                  },
                },
              }),
            Ve.sm_m
          );
        }
        static MBF() {
          return Ve.sm_mbf || (Ve.sm_mbf = u.w0(Ve.M())), Ve.sm_mbf;
        }
        toObject(e = !1) {
          return Ve.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(Ve.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(Ve.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new Ve();
          return Ve.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(Ve.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return Ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(Ve.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return Ve.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetAuditLogByID_Response_AuditLogEntry";
        }
      }
      class Le extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Le.prototype.reported_content_id || u.Sg(Le.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Le.sm_m ||
              (Le.sm_m = {
                proto: Le,
                fields: {
                  reported_content_id: {
                    n: 1,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  report_id: {
                    n: 2,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  dispute_details: {
                    n: 3,
                    br: u.qM.readString,
                    bw: u.gp.writeString,
                  },
                },
              }),
            Le.sm_m
          );
        }
        static MBF() {
          return Le.sm_mbf || (Le.sm_mbf = u.w0(Le.M())), Le.sm_mbf;
        }
        toObject(e = !1) {
          return Le.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(Le.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(Le.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new Le();
          return Le.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(Le.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return Le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(Le.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return Le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_ReporterDisputeModeration_Request";
        }
      }
      class $e extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return $e.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new $e();
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new $e();
          return $e.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return $e.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return $e.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_ReporterDisputeModeration_Response";
        }
      }
      class He extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            He.prototype.reported_content_id || u.Sg(He.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            He.sm_m ||
              (He.sm_m = {
                proto: He,
                fields: {
                  reported_content_id: {
                    n: 1,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                },
              }),
            He.sm_m
          );
        }
        static MBF() {
          return He.sm_mbf || (He.sm_mbf = u.w0(He.M())), He.sm_mbf;
        }
        toObject(e = !1) {
          return He.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(He.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(He.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new He();
          return He.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(He.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return He.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(He.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return He.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_SustainModerationByID_Request";
        }
      }
      class Xe extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Xe.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Xe();
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new Xe();
          return Xe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return Xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return Xe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_SustainModerationByID_Response";
        }
      }
      class Ye extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ye.prototype.reported_content_id || u.Sg(Ye.M()),
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
                  reported_content_id: {
                    n: 1,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  new_level: { n: 2, br: u.qM.readEnum, bw: u.gp.writeEnum },
                  reason: { n: 3, br: u.qM.readEnum, bw: u.gp.writeEnum },
                  note: { n: 4, br: u.qM.readString, bw: u.gp.writeString },
                },
              }),
            Ye.sm_m
          );
        }
        static MBF() {
          return Ye.sm_mbf || (Ye.sm_mbf = u.w0(Ye.M())), Ye.sm_mbf;
        }
        toObject(e = !1) {
          return Ye.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(Ye.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(Ye.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new Ye();
          return Ye.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(Ye.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return Ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(Ye.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return Ye.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_EscalateSubjectByID_Request";
        }
      }
      class Je extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Je.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Je();
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new Je();
          return Je.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return Je.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return Je.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_EscalateSubjectByID_Response";
        }
      }
      class Ke extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ke.prototype.reported_content_id || u.Sg(Ke.M()),
            l.Message.initialize(this, e, 0, -1, [9], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ke.sm_m ||
              (Ke.sm_m = {
                proto: Ke,
                fields: {
                  reported_content_id: {
                    n: 1,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  resolution: { n: 4, br: u.qM.readEnum, bw: u.gp.writeEnum },
                  reason: { n: 2, br: u.qM.readEnum, bw: u.gp.writeEnum },
                  note: { n: 3, br: u.qM.readString, bw: u.gp.writeString },
                  resolved_by_automation: {
                    n: 7,
                    br: u.qM.readEnum,
                    bw: u.gp.writeEnum,
                  },
                  sanctions_applied: { n: 9, c: ne, r: !0, q: !0 },
                  skip_lock: { n: 10, br: u.qM.readBool, bw: u.gp.writeBool },
                },
              }),
            Ke.sm_m
          );
        }
        static MBF() {
          return Ke.sm_mbf || (Ke.sm_mbf = u.w0(Ke.M())), Ke.sm_mbf;
        }
        toObject(e = !1) {
          return Ke.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(Ke.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(Ke.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new Ke();
          return Ke.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(Ke.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return Ke.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(Ke.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return Ke.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_ResolveByID_Request";
        }
      }
      class Ze extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Ze.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Ze();
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new Ze();
          return Ze.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return Ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return Ze.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_ResolveByID_Response";
        }
      }
      class Qe extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Qe.prototype.reported_content_id || u.Sg(Qe.M()),
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
                  reported_content_id: {
                    n: 1,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  csam_status: { n: 2, br: u.qM.readEnum, bw: u.gp.writeEnum },
                  terrorism_status: {
                    n: 3,
                    br: u.qM.readEnum,
                    bw: u.gp.writeEnum,
                  },
                  credible_threat_of_violence_status: {
                    n: 4,
                    br: u.qM.readEnum,
                    bw: u.gp.writeEnum,
                  },
                  additional_subject_data: { n: 5, c: X },
                  owner_dispute_details: {
                    n: 6,
                    br: u.qM.readString,
                    bw: u.gp.writeString,
                  },
                },
              }),
            Qe.sm_m
          );
        }
        static MBF() {
          return Qe.sm_mbf || (Qe.sm_mbf = u.w0(Qe.M())), Qe.sm_mbf;
        }
        toObject(e = !1) {
          return Qe.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(Qe.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(Qe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new Qe();
          return Qe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(Qe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return Qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(Qe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return Qe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_UpdateSubjectByID_Request";
        }
      }
      class et extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return et.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new et();
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new et();
          return et.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return et.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return et.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_UpdateSubjectByID_Response";
        }
      }
      class tt extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            tt.prototype.reported_content_id || u.Sg(tt.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            tt.sm_m ||
              (tt.sm_m = {
                proto: tt,
                fields: {
                  reported_content_id: {
                    n: 1,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                  action: { n: 2, br: u.qM.readEnum, bw: u.gp.writeEnum },
                  automated_action: {
                    n: 3,
                    br: u.qM.readBool,
                    bw: u.gp.writeBool,
                  },
                  additional_json_data: {
                    n: 4,
                    br: u.qM.readString,
                    bw: u.gp.writeString,
                  },
                  actor_steamid: {
                    n: 5,
                    br: u.qM.readFixed64String,
                    bw: u.gp.writeFixed64String,
                  },
                },
              }),
            tt.sm_m
          );
        }
        static MBF() {
          return tt.sm_mbf || (tt.sm_mbf = u.w0(tt.M())), tt.sm_mbf;
        }
        toObject(e = !1) {
          return tt.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(tt.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(tt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new tt();
          return tt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(tt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return tt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(tt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return tt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_WriteToAuditLogByID_Request";
        }
      }
      class rt extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return rt.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new rt();
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new rt();
          return rt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return rt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return rt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_WriteToAuditLogByID_Response";
        }
      }
      var it;
      function nt(e) {
        const t = e?.reported_content_id
          ? e.reported_content_id
          : `${e?.subject_type}-${e?.subject_group_id}-${e?.subject_id}`;
        return `${D.TS.COMMUNITY_BASE_URL}my/reportedcontent/${t}`;
      }
      !(function (e) {
        (e.ClaimBatch = function (e, t, r) {
          return e.SendMsg(
            "ContentModeration.ClaimBatch#1",
            (0, s.I8)(We, t, r),
            Te,
            { ePrivilege: 5 },
          );
        }),
          (e.GetClaimedSubjects = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.GetClaimedSubjects#1",
              (0, s.I8)(Oe, t, r),
              Fe,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }),
          (e.ReleaseSubjects = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.ReleaseSubjects#1",
              (0, s.I8)(Ue, t, r),
              Ie,
              { ePrivilege: 5 },
            );
          }),
          (e.GetReportsSubmittedByUser = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.GetReportsSubmittedByUser#1",
              (0, s.I8)(J, t, r),
              Z,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetOneReportSubmittedByUser = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.GetOneReportSubmittedByUser#1",
              (0, s.I8)(Q, t, r),
              ee,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetReportedSubjectsByOwner = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.GetReportedSubjectsByOwner#1",
              (0, s.I8)(te, t, r),
              ie,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }),
          (e.GetSubjectOverview = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.GetSubjectOverview#1",
              (0, s.I8)(ae, t, r),
              se,
              { ePrivilege: 5 },
            );
          }),
          (e.UpdateReporterCooldown = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.UpdateReporterCooldown#1",
              (0, s.I8)(le, t, r),
              me,
              { ePrivilege: 5 },
            );
          }),
          (e.GetReporterCooldown = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.GetReporterCooldown#1",
              (0, s.I8)(ue, t, r),
              de,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetModeratorPreferences = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.GetModeratorPreferences#1",
              (0, s.I8)(_e, t, r),
              Be,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }),
          (e.SetModeratorPreferences = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.SetModeratorPreferences#1",
              (0, s.I8)(ge, t, r),
              pe,
              { ePrivilege: 5 },
            );
          }),
          (e.GetModeratorActivity = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.GetModeratorActivity#1",
              (0, s.I8)(ye, t, r),
              fe,
              { ePrivilege: 5 },
            );
          }),
          (e.GetDailyModerationStatistics = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.GetDailyModerationStatistics#1",
              (0, s.I8)(we, t, r),
              ze,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }),
          (e.GetOldestUnresolvedSubjects = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.GetOldestUnresolvedSubjects#1",
              (0, s.I8)(Re, t, r),
              he,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }),
          (e.GetReporterStats = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.GetReporterStats#1",
              (0, s.I8)(ve, t, r),
              qe,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }),
          (e.GetReportedContentByID = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.GetReportedContentByID#1",
              (0, s.I8)(Ne, t, r),
              Ee,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetReportedContent = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.GetReportedContent#1",
              (0, s.I8)(xe, t, r),
              ke,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }),
          (e.OwnerDisputeModeration = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.OwnerDisputeModeration#1",
              (0, s.I8)(Ge, t, r),
              Ae,
              { ePrivilege: 1 },
            );
          }),
          (e.GetAuditLogByID = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.GetAuditLogByID#1",
              (0, s.I8)(De, t, r),
              Pe,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }),
          (e.ReporterDisputeModeration = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.ReporterDisputeModeration#1",
              (0, s.I8)(Le, t, r),
              $e,
              { ePrivilege: 1 },
            );
          }),
          (e.SustainModerationByID = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.SustainModerationByID#1",
              (0, s.I8)(He, t, r),
              Xe,
              { ePrivilege: 5 },
            );
          }),
          (e.EscalateSubjectByID = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.EscalateSubjectByID#1",
              (0, s.I8)(Ye, t, r),
              Je,
              { ePrivilege: 5 },
            );
          }),
          (e.ResolveByID = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.ResolveByID#1",
              (0, s.I8)(Ke, t, r),
              Ze,
              { ePrivilege: 5 },
            );
          }),
          (e.UpdateSubjectByID = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.UpdateSubjectByID#1",
              (0, s.I8)(Qe, t, r),
              et,
              { ePrivilege: 5 },
            );
          }),
          (e.WriteToAuditLogByID = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.WriteToAuditLogByID#1",
              (0, s.I8)(tt, t, r),
              rt,
              { ePrivilege: 5 },
            );
          });
      })(it || (it = {}));
      const at = {
        [a.Vv.wY]: {
          displayNameLoc: "#SteamNotification_HelpRequest_Author",
          titleLoc: "#SteamNotification_HelpRequest_Title",
          bodyLoc: (e) => ({
            locString: "#SteamNotification_HelpRequest_Body",
            params: [e.ticket],
          }),
          link: (e) => D.TS.HELP_BASE_URL + "wizard/HelpRequest/" + e.ticket,
        },
        [a.Vv.wp]: {
          displayNameLoc: "#SteamNotifications_MajorSale",
          titleLoc: (e) => ({ locString: e.title }),
          bodyLoc: (e) =>
            (0, P.Y2)() && e.link.includes("https://store.steampowered.com")
              ? "#SteamNotifications_MajorSale_SteamChina_Title"
              : e.body,
          image: (e) => e.image,
          link: (e) =>
            (0, P.Y2)() && e.link.includes("https://store.steampowered.com")
              ? e.link.replace(
                  "https://store.steampowered.com",
                  D.TS.STORE_BASE_URL,
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
            D.TS.COMMUNITY_BASE_URL + "my/moderatormessages/" + e.msgid,
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
            D.TS.STORE_BASE_URL + "account/gatedaccess?appid=" + e.appid,
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
          link: (e) => nt(e),
        },
      };
      function st(e) {
        if (void 0 !== e) return at[e];
      }
      function ot(e) {
        return !!st(e);
      }
      const ct = {
        [a.Vv.Rj]: {
          steamidAttribute: "inviter",
          titleLoc: "#SteamNotifications_FamilyInviteTitle",
          bodyLoc: "#SteamNotifications_FamilyInviteBody",
          url: (e) =>
            `${D.TS.STORE_BASE_URL}account/familymanagement/join?invitation=${e.familyid}`,
        },
        [a.Vv.Sx]: {
          steamidAttribute: "steamid",
          titleLoc: "#SteamNotifications_ParentalFeatureRequestTitle",
          bodyLoc: "#SteamNotifications_ParentalFeatureRequestBody",
          url: () =>
            `${D.TS.STORE_BASE_URL}account/familymanagement?tab=requests`,
        },
        [a.Vv.Cz]: {
          steamidAttribute: "requestor_steamid",
          titleLoc: "#SteamNotifications_FamilyPurchaseRequestTitle",
          bodyLoc: "#SteamNotifications_FamilyPurchaseRequestBody",
          url: (e) => (0, V.w1)(e.familyid, e.request_id),
        },
        [a.Vv.HN]: {
          steamidAttribute: "responder_steamid",
          titleLoc: (e) =>
            e.action == L.IG.DP
              ? "#SteamNotifications_FamilyPurchaseRequestResponseDeclinedTitle"
              : "",
          bodyLoc: (e) =>
            e.action == L.IG.DP
              ? "#SteamNotifications_FamilyPurchaseRequestDeclinedBody"
              : "",
          url: () =>
            `${D.TS.STORE_BASE_URL}account/familymanagement?tab=requests`,
        },
        [a.Vv.j3]: {
          steamidAttribute: "steamid",
          titleLoc: "#SteamNotifications_ParentalPlaytimeRequestTitle",
          bodyLoc: "#SteamNotifications_ParentalPlaytimeRequestBody",
          url: () =>
            `${D.TS.STORE_BASE_URL}account/familymanagement?tab=requests`,
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
            `${D.TS.STORE_BASE_URL}account/familymanagement?tab=requests`,
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
            `${D.TS.STORE_BASE_URL}account/familymanagement?tab=requests`,
        },
      };
      function lt(e) {
        if (void 0 !== e) return ct[e];
      }
      function mt(e) {
        return !!lt(e);
      }
      const ut = [
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
      function dt(e) {
        return null != ut.findIndex((t) => t == e);
      }
      function _t(e) {
        return (
          !e.hidden &&
          (ot((t = e.notification_type)) || mt(t) || dt(t)) &&
          Ft(e.body_data)
        );
        var t;
      }
      var Bt;
      !(function (e) {
        (e[(e.New = 0)] = "New"),
          (e[(e.Update = 1)] = "Update"),
          (e[(e.Remove = 2)] = "Remove");
      })(Bt || (Bt = {}));
      const gt = 172800,
        bt = 600,
        pt = new A.wd("SteamNotificationStore"),
        yt = pt.Debug,
        ft = pt.Error,
        Mt = pt.Warning;
      class wt {
        constructor() {
          (0, C.Gn)(this);
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
            !Dt(e) &&
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
              : ft(
                  "Attempted to mark notification read that is not in the notification store",
                ));
          let i = this.m_rgNotificationRollups[r];
          if (i.item.read)
            ft("Attempted to mark notification read that is already read");
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
            return void ft(
              "Attempted to mark notification hidden that is not in the notification store",
            );
          let r = this.m_rgNotificationRollups[t];
          (r.item.hidden = !0),
            r.rgunread?.length > 0 &&
              this.ReduceNewTotals(r.type, r.rgunread?.length),
            this.NotifyServerNotificationsHidden([...r.rgunread, ...r.rgread]);
        }
        ReduceNewTotals(e, t) {
          Gt(this.m_summary, e, -t);
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
            (yt("ApplyNotificationsUpdate", e),
            !e ||
              (!e.notifications?.length &&
                void 0 === e.pending_friend_count &&
                void 0 === e.pending_gift_count))
          )
            return void yt(
              "Error: ApplyNotificationsUpdate was called with no data",
            );
          if (!this.m_currentNotificationsData)
            return void yt(
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
                if (_t(i)) {
                  if (this.m_rgNotifyServerRead.length > 0) {
                    -1 !==
                      this.m_rgNotifyServerRead.findIndex(
                        (e) => e == i.notification_id,
                      ) && (i.read = !0);
                  }
                  i.read || Gt(t, i.notification_type, 1),
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
                  this.m_fnOnNotificationCallback(t, Bt.New);
              else if (this.m_rgNewRollupIDs.has(t.rollup_key)) {
                let e = this.m_rgNewRollupIDs.get(t.rollup_key);
                (e.item.read == t.item.read &&
                  e.item.viewed == t.item.viewed) ||
                  (this.m_rgNewRollupIDs.set(
                    t.rollup_key,
                    JSON.parse(JSON.stringify(t)),
                  ),
                  this.m_fnOnNotificationCallback(t, Bt.Update));
              }
            for (const [t, r] of this.m_rgNewRollupIDs)
              -1 == e.findIndex((e) => e.rollup_key == t) &&
                (this.m_fnOnNotificationCallback(r, Bt.Remove),
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
          const t = Ft(e.body_data);
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
                const n = Ut(t);
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
                    url: jt(n),
                  });
                else {
                  let i = e[s];
                  this.BReplaceRollupItem(t, i.item) &&
                    ((i.url = jt(n)),
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
              const n = Ut(t);
              if (n) {
                const a = "item_" + n.appid;
                this.AddNotificationToRollupByAppID(e, t, a, i, r, n.appid);
              }
              break;
            case a.Vv.Y9:
              const s = Ut(t)?.appid.toString();
              if (s) {
                const n = "asyncgame_" + s;
                this.AddNotificationToRollupByAppID(e, t, n, i, r, s);
              }
              break;
            case a.Vv.Iz:
              const o = Ut(t),
                c = o?.report_id,
                l = nt(o),
                m = `contentreport_${c}`;
              let u = e.findIndex((e) => e.rollup_key == m);
              if (-1 == u)
                e.push({
                  type: i,
                  rollup_key: m,
                  item: t,
                  rollup_count: 1,
                  timestamp: t.timestamp,
                  rgunread: t.read ? [] : [t.notification_id],
                  rgread: t.read ? [t.notification_id] : [],
                  bSendToCallbackAsNew: r,
                  url: l,
                });
              else {
                let i = e[u];
                this.BReplaceRollupItem(t, i.item) &&
                  ((i.url = l),
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
      async function zt(e, t, r, i, n, c = !0, l = !1) {
        if (!t) throw new Error("Invalid steamid for GetSteamNotifications");
        const m = s.w.Init(a.GG);
        m.Body().set_language(r),
          m.Body().set_include_read(c),
          m.Body().set_include_pinned_counts(!0),
          m.Body().set_include_confirmation_count(l);
        const u = await a.Fn.GetSteamNotifications(e, m);
        if (u.GetEResult() !== o.R)
          throw (
            (Mt(
              `Received error from GetSteamNotifications. Result ${u.GetEResult()}. Transport ${u.Hdr().transport_error()}`,
            ),
            new Error(`Error from GetSteamNotifications: ${u.GetEResult()}`))
          );
        const d = u.Body().toObject();
        return (
          i &&
            (d.notifications = d.notifications?.filter(
              (e) => !kt(e.notification_type, i, n),
            )),
          d
        );
      }
      (0, n.Cg)([C.sH], wt.prototype, "m_rgNotificationRollups", void 0),
        (0, n.Cg)([C.sH], wt.prototype, "m_summary", void 0),
        (0, n.Cg)([C.sH], wt.prototype, "m_bLoaded", void 0),
        (0, n.Cg)([C.sH], wt.prototype, "m_nUnviewed", void 0),
        (0, n.Cg)([C.XI], wt.prototype, "ProcessNotifications", null);
      const St = "ItemMetadata";
      function Rt(e) {
        return [
          `${St}_${e?.steamid}_${e?.appid}_${e?.contextid}_${e?.assetid}`,
        ];
      }
      function ht(e, t, r) {
        let n = Ct(a.Vv.hW, e.body_data);
        n.steamid = t;
        let c = (0, I.I)({
          queryKey: Rt(n),
          queryFn: async () =>
            (async function (e, t) {
              if (!(e && e.steamid && e.contextid && e.appid && e.assetid))
                return (
                  ft("Item notification missing required attributes"), null
                );
              const r = s.w.Init(h);
              r.Body().set_steamid(e.steamid),
                r.Body().set_contextid(e.contextid),
                r.Body().set_appid(parseInt(e.appid)),
                r.Body().set_get_descriptions(!0),
                r.Body().set_language(D.TS.LANGUAGE);
              let n = new j();
              n.add_assetids(e.assetid), r.Body().set_filters(n);
              const a = await i.GetInventoryItemsWithDescriptions(t, r);
              return a.GetEResult() !== o.R
                ? (ft(
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
      function jt(e) {
        let t = `comment/${e.comment_type}/bounce/${e.owner_steam_id.ConvertTo64BitString()}/${e.forum_id}/?feature2=${e.topic_id}`;
        return e.last_post > 0 && (t += "&tscn=" + (e.last_post - 1)), t;
      }
      function vt(e) {
        return e.comment_type == x.Yd;
      }
      function qt(e) {
        return e?.bhas_friend;
      }
      function Wt(e) {
        return e.comment_type == x.Yd;
      }
      function Tt(e) {
        return vt(e) || qt(e);
      }
      function Ot(e) {
        return Wt(e);
      }
      function Ft(e) {
        if (!e) return null;
        try {
          return JSON.parse(e);
        } catch (t) {
          yt("Steam notification in invalid format:", e);
        }
        return null;
      }
      function Ut(e) {
        return Ct(e.notification_type, e.body_data);
      }
      function It(e) {
        return Ct(e.type, e.item?.body_data);
      }
      function Ct(e, t) {
        let r = Ft(t);
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
            return !r.appid || !r.state || (r.state != k.GO && r.state != k.cf)
              ? (yt("Async game notification invalid data", t), null)
              : { appid: parseInt(r.appid), state: parseInt(r.state) };
          case a.Vv.v_:
            let i = {
              owner_steam_id: r.owner_steam_id
                ? new N.b(r.owner_steam_id)
                : null,
              bclan_account: Nt(r.bclan_account),
              title: r.title,
              comment: r.text,
              time: r.last_post,
              comment_type: Number(r.type),
              topic_id: r.topic_id,
              forum_id: r.forum_id,
              account_steam_id: r.account_id
                ? N.b.InitFromAccountID(r.account_id)
                : null,
              bhas_friend: Nt(r.bhas_friend),
              bis_forum: Nt(r.bis_forum),
              last_post: r.last_post,
              bsubscribed: Nt(r.subscribed),
              bis_owner: Nt(r.bis_owner),
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
              reported_content_id: r.reported_content_id ?? "",
              subject_type: r.subject_type ?? 0,
              subject_group_id: r.subject_group_id ?? "0",
              subject_id: r.subject_id ?? "0",
              status: r.status ?? 0,
            };
          default:
            return (
              yt(
                "GetCustomNotificationDataByType called with unexpected type:" +
                  e,
                t,
              ),
              null
            );
        }
      }
      function Nt(e) {
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
        return yt("notification contained unexpected boolean value"), !1;
      }
      const Et = {
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
      function xt(e) {
        const t = Et[e];
        return (0, $.wT)(!!t, `Missing notification type data for ${e}`), t;
      }
      function kt(e, t, r) {
        if (!t) return !1;
        const i = xt(e);
        return (0, H.EC)(t, i?.eFeature ?? E.JC, r);
      }
      function Gt(e, t, r) {
        (0, C.h5)(() => {
          const i = xt(t);
          i?.rollup_field &&
            (e[i.rollup_field] = Math.max(0, e[i.rollup_field] + r));
        });
      }
      function At(e) {
        return !e.viewed || e.viewed + bt > (0, G._2)();
      }
      function Dt(e) {
        return e.viewed && e.viewed + gt < (0, G._2)();
      }
    },
  },
]);
