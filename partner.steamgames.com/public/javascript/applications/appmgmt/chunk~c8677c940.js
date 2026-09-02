/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [8723],
    {
      64407: (Y, $, o) => {
        o.d($, {
          dC: () => W,
          fD: () => u,
          iz: () => h,
          l6: () => I,
          lO: () => B,
          w5: () => E,
        });
        var w = o(80613),
          d = o.n(w),
          i = o(75245),
          b = o(35038),
          K = o(40562);
        class W extends w.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              W.prototype.appid || i.Sg(W.M()),
              w.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              W.sm_m ||
                (W.sm_m = {
                  proto: W,
                  fields: {
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    link: { n: 2, c: K.Bf },
                    remove: {
                      n: 3,
                      d: !1,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    update_json_only: {
                      n: 4,
                      d: !1,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    skip_clan_permissions: {
                      n: 5,
                      d: !1,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    partner_id: {
                      n: 6,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              W.sm_m
            );
          }
          static MBF() {
            return W.sm_mbf || (W.sm_mbf = i.w0(W.M())), W.sm_mbf;
          }
          toObject(r = !1) {
            return W.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(W.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(W.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (d().BinaryReader)(r),
              T = new W();
            return W.deserializeBinaryFromReader(T, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(W.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (d().BinaryWriter)();
            return W.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(W.M(), r, t);
          }
          serializeBase64String() {
            var r = new (d().BinaryWriter)();
            return (
              W.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCatalog_SetDevPageLink_Request";
          }
        }
        class H extends w.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), w.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return H.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new H();
          }
          static deserializeBinary(r) {
            let t = new (d().BinaryReader)(r),
              T = new H();
            return H.deserializeBinaryFromReader(T, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (d().BinaryWriter)();
            return H.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (d().BinaryWriter)();
            return (
              H.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCatalog_SetDevPageLink_Response";
          }
        }
        class h extends w.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              h.prototype.appid || i.Sg(h.M()),
              w.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              h.sm_m ||
                (h.sm_m = {
                  proto: h,
                  fields: {
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
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
          static toObject(r, t) {
            return i.BT(h.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(h.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (d().BinaryReader)(r),
              T = new h();
            return h.deserializeBinaryFromReader(T, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(h.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (d().BinaryWriter)();
            return h.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(h.M(), r, t);
          }
          serializeBase64String() {
            var r = new (d().BinaryWriter)();
            return (
              h.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCatalog_GetDevPageLinks_Request";
          }
        }
        class f extends w.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              f.prototype.links || i.Sg(f.M()),
              w.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              f.sm_m ||
                (f.sm_m = {
                  proto: f,
                  fields: { links: { n: 1, c: K.Bf, r: !0, q: !0 } },
                }),
              f.sm_m
            );
          }
          static MBF() {
            return f.sm_mbf || (f.sm_mbf = i.w0(f.M())), f.sm_mbf;
          }
          toObject(r = !1) {
            return f.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(f.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(f.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (d().BinaryReader)(r),
              T = new f();
            return f.deserializeBinaryFromReader(T, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(f.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (d().BinaryWriter)();
            return f.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(f.M(), r, t);
          }
          serializeBase64String() {
            var r = new (d().BinaryWriter)();
            return (
              f.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCatalog_GetDevPageLinks_Response";
          }
        }
        class B extends w.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              B.prototype.clan_account_ids || i.Sg(B.M()),
              w.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              B.sm_m ||
                (B.sm_m = {
                  proto: B,
                  fields: {
                    clan_account_ids: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint32,
                      pbr: i.qM.readPackedUint32,
                      bw: i.gp.writeRepeatedUint32,
                    },
                    ignore_dlc: { n: 2, br: i.qM.readBool, bw: i.gp.writeBool },
                  },
                }),
              B.sm_m
            );
          }
          static MBF() {
            return B.sm_mbf || (B.sm_mbf = i.w0(B.M())), B.sm_mbf;
          }
          toObject(r = !1) {
            return B.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(B.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(B.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (d().BinaryReader)(r),
              T = new B();
            return B.deserializeBinaryFromReader(T, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(B.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (d().BinaryWriter)();
            return B.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(B.M(), r, t);
          }
          serializeBase64String() {
            var r = new (d().BinaryWriter)();
            return (
              B.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCatalog_GetDevPageAllAppsLinked_Request";
          }
        }
        class O extends w.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              O.prototype.results || i.Sg(O.M()),
              w.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              O.sm_m ||
                (O.sm_m = {
                  proto: O,
                  fields: { results: { n: 1, c: K.qh, r: !0, q: !0 } },
                }),
              O.sm_m
            );
          }
          static MBF() {
            return O.sm_mbf || (O.sm_mbf = i.w0(O.M())), O.sm_mbf;
          }
          toObject(r = !1) {
            return O.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(O.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(O.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (d().BinaryReader)(r),
              T = new O();
            return O.deserializeBinaryFromReader(T, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(O.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (d().BinaryWriter)();
            return O.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(O.M(), r, t);
          }
          serializeBase64String() {
            var r = new (d().BinaryWriter)();
            return (
              O.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCatalog_GetDevPageAllAppsLinked_Response";
          }
        }
        class I extends w.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              I.prototype.clan_account_id || i.Sg(I.M()),
              w.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              I.sm_m ||
                (I.sm_m = {
                  proto: I,
                  fields: {
                    clan_account_id: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    listid: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    ignore_dlc: { n: 3, br: i.qM.readBool, bw: i.gp.writeBool },
                  },
                }),
              I.sm_m
            );
          }
          static MBF() {
            return I.sm_mbf || (I.sm_mbf = i.w0(I.M())), I.sm_mbf;
          }
          toObject(r = !1) {
            return I.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(I.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(I.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (d().BinaryReader)(r),
              T = new I();
            return I.deserializeBinaryFromReader(T, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(I.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (d().BinaryWriter)();
            return I.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(I.M(), r, t);
          }
          serializeBase64String() {
            var r = new (d().BinaryWriter)();
            return (
              I.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCatalog_GetDevPageListApps_Request";
          }
        }
        class z extends w.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              z.prototype.apps || i.Sg(z.M()),
              w.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              z.sm_m ||
                (z.sm_m = {
                  proto: z,
                  fields: { apps: { n: 1, c, r: !0, q: !0 } },
                }),
              z.sm_m
            );
          }
          static MBF() {
            return z.sm_mbf || (z.sm_mbf = i.w0(z.M())), z.sm_mbf;
          }
          toObject(r = !1) {
            return z.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(z.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(z.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (d().BinaryReader)(r),
              T = new z();
            return z.deserializeBinaryFromReader(T, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(z.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (d().BinaryWriter)();
            return z.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(z.M(), r, t);
          }
          serializeBase64String() {
            var r = new (d().BinaryWriter)();
            return (
              z.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCatalog_GetDevPageListApps_Response";
          }
        }
        class c extends w.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              c.prototype.appid || i.Sg(c.M()),
              w.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              c.sm_m ||
                (c.sm_m = {
                  proto: c,
                  fields: {
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    sort_order: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              c.sm_m
            );
          }
          static MBF() {
            return c.sm_mbf || (c.sm_mbf = i.w0(c.M())), c.sm_mbf;
          }
          toObject(r = !1) {
            return c.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(c.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(c.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (d().BinaryReader)(r),
              T = new c();
            return c.deserializeBinaryFromReader(T, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(c.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (d().BinaryWriter)();
            return c.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(c.M(), r, t);
          }
          serializeBase64String() {
            var r = new (d().BinaryWriter)();
            return (
              c.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCatalog_GetDevPageListApps_Response_ListApp";
          }
        }
        class u extends w.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              u.prototype.partnerid || i.Sg(u.M()),
              w.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              u.sm_m ||
                (u.sm_m = {
                  proto: u,
                  fields: {
                    partnerid: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
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
          static toObject(r, t) {
            return i.BT(u.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(u.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (d().BinaryReader)(r),
              T = new u();
            return u.deserializeBinaryFromReader(T, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(u.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (d().BinaryWriter)();
            return u.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(u.M(), r, t);
          }
          serializeBase64String() {
            var r = new (d().BinaryWriter)();
            return (
              u.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCatalog_GetDevPagesForPartner_Request";
          }
        }
        class M extends w.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              M.prototype.results || i.Sg(M.M()),
              w.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              M.sm_m ||
                (M.sm_m = {
                  proto: M,
                  fields: { results: { n: 1, c: m, r: !0, q: !0 } },
                }),
              M.sm_m
            );
          }
          static MBF() {
            return M.sm_mbf || (M.sm_mbf = i.w0(M.M())), M.sm_mbf;
          }
          toObject(r = !1) {
            return M.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(M.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(M.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (d().BinaryReader)(r),
              T = new M();
            return M.deserializeBinaryFromReader(T, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(M.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (d().BinaryWriter)();
            return M.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(M.M(), r, t);
          }
          serializeBase64String() {
            var r = new (d().BinaryWriter)();
            return (
              M.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCatalog_GetDevPagesForPartner_Response";
          }
        }
        class m extends w.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              m.prototype.clan_accountid || i.Sg(m.M()),
              w.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              m.sm_m ||
                (m.sm_m = {
                  proto: m,
                  fields: {
                    clan_accountid: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    linknames: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: i.qM.readString,
                      bw: i.gp.writeRepeatedString,
                    },
                  },
                }),
              m.sm_m
            );
          }
          static MBF() {
            return m.sm_mbf || (m.sm_mbf = i.w0(m.M())), m.sm_mbf;
          }
          toObject(r = !1) {
            return m.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(m.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(m.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (d().BinaryReader)(r),
              T = new m();
            return m.deserializeBinaryFromReader(T, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(m.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (d().BinaryWriter)();
            return m.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(m.M(), r, t);
          }
          serializeBase64String() {
            var r = new (d().BinaryWriter)();
            return (
              m.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCatalog_GetDevPagesForPartner_Response_CDevPageInfo";
          }
        }
        var E;
        ((F) => {
          function r(U, x, V) {
            return U.SendMsg(
              "StoreCatalog.SetDevPageLink#1",
              (0, b.I8)(W, x, V),
              H,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          F.SetDevPageLink = r;
          function t(U, x, V) {
            return U.SendMsg(
              "StoreCatalog.GetDevPageLinks#1",
              (0, b.I8)(h, x, V),
              f,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          F.GetDevPageLinks = t;
          function T(U, x, V) {
            return U.SendMsg(
              "StoreCatalog.GetDevPageAllAppsLinked#1",
              (0, b.I8)(B, x, V),
              O,
              { ePrivilege: 1 },
            );
          }
          F.GetDevPageAllAppsLinked = T;
          function N(U, x, V) {
            return U.SendMsg(
              "StoreCatalog.GetDevPageListApps#1",
              (0, b.I8)(I, x, V),
              z,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          F.GetDevPageListApps = N;
          function X(U, x, V) {
            return U.SendMsg(
              "StoreCatalog.GetDevPagesForPartner#1",
              (0, b.I8)(u, x, V),
              M,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          F.GetDevPagesForPartner = X;
        })(E || (E = {}));
      },
      40562: (Y, $, o) => {
        o.d($, { Bf: () => c, qh: () => u, VY: () => w });
        var w = {};
        o.r(w), o.d(w, { wQ: () => K });
        var d = o(80613),
          i = o.n(d),
          b = o(75245);
        const K = 0,
          W = 1,
          H = 2,
          h = 3,
          f = 4,
          B = 5,
          O = 6,
          I = 7;
        function z(M) {
          return "unknown EAppDevsRelationship ( " + M + " )";
        }
        class c extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(m = null) {
            super(),
              c.prototype.appid || b.Sg(c.M()),
              d.Message.initialize(this, m, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              c.sm_m ||
                (c.sm_m = {
                  proto: c,
                  fields: {
                    appid: { n: 1, br: b.qM.readUint32, bw: b.gp.writeUint32 },
                    clan_steamid: {
                      n: 2,
                      br: b.qM.readFixed64String,
                      bw: b.gp.writeFixed64String,
                    },
                    relation: { n: 3, br: b.qM.readEnum, bw: b.gp.writeEnum },
                    linkname: {
                      n: 4,
                      br: b.qM.readString,
                      bw: b.gp.writeString,
                    },
                    json: { n: 5, br: b.qM.readString, bw: b.gp.writeString },
                  },
                }),
              c.sm_m
            );
          }
          static MBF() {
            return c.sm_mbf || (c.sm_mbf = b.w0(c.M())), c.sm_mbf;
          }
          toObject(m = !1) {
            return c.toObject(m, this);
          }
          static toObject(m, E) {
            return b.BT(c.M(), m, E);
          }
          static fromObject(m) {
            return b.Uq(c.M(), m);
          }
          static deserializeBinary(m) {
            let E = new (i().BinaryReader)(m),
              F = new c();
            return c.deserializeBinaryFromReader(F, E);
          }
          static deserializeBinaryFromReader(m, E) {
            return b.zj(c.MBF(), m, E);
          }
          serializeBinary() {
            var m = new (i().BinaryWriter)();
            return c.serializeBinaryToWriter(this, m), m.getResultBuffer();
          }
          static serializeBinaryToWriter(m, E) {
            b.i0(c.M(), m, E);
          }
          serializeBase64String() {
            var m = new (i().BinaryWriter)();
            return (
              c.serializeBinaryToWriter(this, m), m.getResultBase64String()
            );
          }
          getClassName() {
            return "CDeveloperPageLink";
          }
        }
        class u extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(m = null) {
            super(),
              u.prototype.clan_account_id || b.Sg(u.M()),
              d.Message.initialize(this, m, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              u.sm_m ||
                (u.sm_m = {
                  proto: u,
                  fields: {
                    clan_account_id: {
                      n: 1,
                      br: b.qM.readUint32,
                      bw: b.gp.writeUint32,
                    },
                    appid_list: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: b.qM.readUint32,
                      pbr: b.qM.readPackedUint32,
                      bw: b.gp.writeRepeatedUint32,
                    },
                  },
                }),
              u.sm_m
            );
          }
          static MBF() {
            return u.sm_mbf || (u.sm_mbf = b.w0(u.M())), u.sm_mbf;
          }
          toObject(m = !1) {
            return u.toObject(m, this);
          }
          static toObject(m, E) {
            return b.BT(u.M(), m, E);
          }
          static fromObject(m) {
            return b.Uq(u.M(), m);
          }
          static deserializeBinary(m) {
            let E = new (i().BinaryReader)(m),
              F = new u();
            return u.deserializeBinaryFromReader(F, E);
          }
          static deserializeBinaryFromReader(m, E) {
            return b.zj(u.MBF(), m, E);
          }
          serializeBinary() {
            var m = new (i().BinaryWriter)();
            return u.serializeBinaryToWriter(this, m), m.getResultBuffer();
          }
          static serializeBinaryToWriter(m, E) {
            b.i0(u.M(), m, E);
          }
          serializeBase64String() {
            var m = new (i().BinaryWriter)();
            return (
              u.serializeBinaryToWriter(this, m), m.getResultBase64String()
            );
          }
          getClassName() {
            return "CDeveloperPageToApps";
          }
        }
      },
      16512: (Y, $, o) => {
        o.d($, {
          GT: () => p,
          eL: () => V,
          io: () => x,
          A2: () => Z,
          n4: () => X,
          pF: () => N,
          id: () => R,
          FV: () => L,
        });
        var w = o(72604),
          d = o(35038),
          i = o(64407),
          b = o(93804),
          K = o(20194),
          W = o(41735),
          H = o.n(W),
          h = o(14947),
          f = o(33512),
          B = o(3166),
          O = Object.defineProperty,
          I = Object.getOwnPropertyDescriptor,
          z = (l, n, s, a) => {
            for (
              var e = a > 1 ? void 0 : a ? I(n, s) : n, y = l.length - 1, j;
              y >= 0;
              y--
            )
              (j = l[y]) && (e = (a ? j(n, s, e) : j(e)) || e);
            return a && e && O(n, s, e), e;
          };
        class c {
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
          constructor(n) {
            (0, h.Gn)(this), (this.m_clanSteamID = n);
          }
          Initialize(n) {
            (this.m_strName = n.name || ""),
              (this.m_strAvatarURLFullSize =
                n.avatar_url_full_size ||
                "https://avatars.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg"),
              (this.m_strTagLineLoc = n.tag_line_localized || ""),
              (this.m_nFollowers = n.followers || 0),
              (this.m_strVanity = n.vanity || void 0),
              (this.m_webLink = n.weblink),
              (this.m_bIsHidden = n.hidden || !1),
              (this.m_clanAccountFlags = n.clan_account_flags ?? 0),
              (this.m_linkedEvent = n.linked_event),
              (this.m_mapListInfo = new Map(Object.entries(n.list_info ?? {}))),
              n.appids && n.appids.forEach((s) => this.m_appidList.push(s)),
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
            return !!(this.m_clanAccountFlags & f.Wv.GH);
          }
          BHasClanAccountFlagSet(n) {
            return !!(this.m_clanAccountFlags & n);
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
          GetCreatorHomeURL(n) {
            if (this.m_strVanity) {
              switch (n) {
                case "publisher":
                  return (
                    B.TS.STORE_BASE_URL + "publisher/" + this.m_strVanity + "/"
                  );
                case "franchise":
                  return (
                    B.TS.STORE_BASE_URL + "franchise/" + this.m_strVanity + "/"
                  );
              }
              return (
                B.TS.STORE_BASE_URL + "developer/" + this.m_strVanity + "/"
              );
            }
            return (
              B.TS.STORE_BASE_URL +
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
          AdjustFollower(n) {
            this.m_nFollowers += n;
          }
          async EnablePartnerEventEditorFlag() {
            this.BIsPartnerEventEditorEnabled() ||
              (await this.UpdateGroupFlagsFeature([f.Wv.bM, f.Wv.GH], !0));
          }
          async UpdateGroupFlagsFeature(n, s) {
            let a = B.TS.PARTNER_BASE_URL + "sales/ajaxupdateclanaccountflags",
              e = this.m_clanAccountFlags;
            if (
              (n.forEach((J) => {
                s ? (e |= J) : (e &= ~J);
              }),
              e == this.m_clanAccountFlags)
            )
              return;
            let y = new Array();
            e & f.Wv._x && y.push(f.Wv._x),
              e & f.Wv.GH && y.push(f.Wv.GH),
              e & f.Wv.bM && y.push(f.Wv.bM),
              e & f.Wv.Jb && y.push(f.Wv.Jb),
              e & f.Wv.Nq && y.push(f.Wv.Nq),
              e & f.Wv.Jn && y.push(f.Wv.Jn),
              e & f.Wv.Mv && y.push(f.Wv.Mv),
              e & f.Wv.xc && y.push(f.Wv.xc),
              e & f.Wv.yl && y.push(f.Wv.yl);
            let j = new FormData();
            j.append("sessionid", (0, B.KC)()),
              j.append("clan_account_id", this.GetClanAccountID().toString()),
              j.append("accountflags", JSON.stringify(y));
            let Q = await H().post(a, j);
            Q &&
              Q.status == 200 &&
              Q.data.success == w.R &&
              (this.m_clanAccountFlags = e);
          }
        }
        z([h.sH], c.prototype, "m_appidList", 2),
          z([h.sH], c.prototype, "m_nFollowers", 2),
          z([h.sH], c.prototype, "m_clanAccountFlags", 2);
        var u = o(13018),
          M = o(76559),
          m = o(77291),
          E = Object.defineProperty,
          F = Object.getOwnPropertyDescriptor,
          r = (l, n, s, a) => {
            for (
              var e = a > 1 ? void 0 : a ? F(n, s) : n, y = l.length - 1, j;
              y >= 0;
              y--
            )
              (j = l[y]) && (e = (a ? j(n, s, e) : j(e)) || e);
            return a && e && E(n, s, e), e;
          };
        const t = class A {
          constructor() {
            (0, h.Gn)(this);
          }
          m_mapClanToCreatorHome = new Map();
          m_mapAppToCreatorIDList = new Map();
          m_bLoadedFromConfig = !1;
          m_serviceTransport = void 0;
          LazyInit() {
            if (!this.m_bLoadedFromConfig) {
              const n = (0, B.Tc)("creatorhome", "application_config");
              this.ValidateStoreDefault(n) &&
                n.forEach((a) => {
                  const e = Number(a.creator_clan_id),
                    y = M.b.InitFromClanID(e),
                    j = new c(y);
                  j.Initialize(a),
                    (j.m_promise = A.GetAsPromise(j)),
                    this.m_mapClanToCreatorHome.set(e, j);
                });
              const s = (0, B.Tc)("creatorhomeforapp", "application_config");
              this.ValidateStoreDefaultAppList(s) &&
                s.forEach((a) => {
                  a.appid !== void 0 &&
                    (this.m_mapAppToCreatorIDList.has(a.appid) ||
                      this.m_mapAppToCreatorIDList.set(a.appid, new Array()),
                    this.m_mapAppToCreatorIDList.get(a.appid).push(a));
                }),
                (this.m_bLoadedFromConfig = !0);
            }
          }
          GetServiceTransport() {
            if (!this.m_serviceTransport) {
              const n = (0, B.Tc)("loyalty_webapi_token", "application_config"),
                s = new u.D(B.TS.WEBAPI_BASE_URL, n || void 0);
              this.m_serviceTransport = s.GetServiceTransport();
            }
            return this.m_serviceTransport;
          }
          static async GetAsPromise(n) {
            return n;
          }
          ValidateStoreDefault(n) {
            const s = n;
            return s &&
              Array.isArray(s) &&
              s.length > 0 &&
              typeof s[0] == "object"
              ? typeof s[0].name == "string" &&
                  (typeof s[0].creator_clan_id == "string" ||
                    typeof s[0].creator_clan_id == "number")
              : !1;
          }
          ValidateStoreDefaultAppList(n) {
            const s = n;
            return s &&
              Array.isArray(s) &&
              s.length > 0 &&
              typeof s[0] == "object"
              ? typeof s[0].clan_account_id == "number" &&
                  s[0].clan_account_id > 0 &&
                  typeof s[0].appid == "number" &&
                  s[0].appid > 0
              : !1;
          }
          BHasCreatorHomeLoaded(n) {
            return (
              this.m_mapClanToCreatorHome.has(n.GetAccountID()) &&
              this.m_mapClanToCreatorHome.get(n.GetAccountID()).BIsLoaded()
            );
          }
          GetCreatorHome(n) {
            return this.m_mapClanToCreatorHome.get(n.GetAccountID());
          }
          GetCreatorHomeByID(n) {
            return this.m_mapClanToCreatorHome.get(n.clan_account_id);
          }
          async LoadCreatorHome(n, s = !1, a) {
            if (
              (this.LazyInit(),
              s || !this.m_mapClanToCreatorHome.has(n.GetAccountID()))
            ) {
              let e = new c(n);
              (e.m_promise = this.InternalCreatorHome(e, a)),
                await e.m_promise,
                this.m_mapClanToCreatorHome.set(n.GetAccountID(), e);
            }
            return this.m_mapClanToCreatorHome.get(n.GetAccountID()).m_promise;
          }
          async InternalCreatorHome(n, s) {
            let a = { get_appids: !0, l: B.TS.LANGUAGE },
              e =
                B.TS.STORE_BASE_URL +
                "curator/" +
                n.GetClanAccountID() +
                "/ajaxgetcreatorhomeinfo",
              y = await H().get(e, { params: a, cancelToken: s && s.token });
            return n.Initialize(y.data), n;
          }
          async LoadCreatorHomeListForAppIncludeHiddden(n, s) {
            if ((this.LazyInit(), !this.m_mapAppToCreatorIDList.has(n))) {
              let a = { appid: n },
                e = B.TS.STORE_BASE_URL + "events/ajaxgetcreatorhomeidforapp",
                y = await H().get(e, {
                  params: a,
                  cancelToken: s && s.token,
                  withCredentials: !0,
                });
              this.m_mapAppToCreatorIDList.set(n, y.data.creator_list);
            }
            return this.m_mapAppToCreatorIDList.get(n);
          }
          async SearchCreatorHomeStore(n, s, a) {
            let e = `${B.TS.STORE_BASE_URL}curator/0/ajaxsearchcurators`,
              y = {
                term: n.replace(" ", "+"),
                require_creator: s,
                cc: B.TS.COUNTRY,
                l: B.TS.LANGUAGE,
                origin: self.origin,
              },
              j = new Array();
            const Q = await H().get(e, { params: y, cancelToken: a.token });
            return (
              Q.data.curators &&
                (0, h.h5)(() => {
                  Q.data.curators.forEach((J) => {
                    if (!this.m_mapClanToCreatorHome.has(J.creator_clan_id)) {
                      let G = M.b.InitFromClanID(J.creator_clan_id),
                        q = new c(G);
                      q.Initialize(J),
                        this.m_mapClanToCreatorHome.set(J.creator_clan_id, q);
                    }
                    j.push(this.m_mapClanToCreatorHome.get(J.creator_clan_id));
                  });
                }),
              j
            );
          }
          GetCreatorHomeListForAppIncludeHidden(n) {
            return this.m_mapAppToCreatorIDList.has(n)
              ? this.m_mapAppToCreatorIDList.get(n)
              : [];
          }
        };
        r([h.sH], t.prototype, "m_mapClanToCreatorHome", 2),
          r([h.sH], t.prototype, "m_mapAppToCreatorIDList", 2),
          r([h.XI], t.prototype, "LazyInit", 1);
        let T = t;
        const N = new T();
        (0, m.V)("g_CreatorHomeStore", N);
        function X(l) {
          if (!l) return null;
          const n = N.BHasCreatorHomeLoaded(l.clanSteamID)
            ? N.GetCreatorHome(l.clanSteamID)
            : void 0;
          return l.GetSaleURL(n?.GetCreatorHomeURL("developer"));
        }
        function U(l) {
          if (!l) return;
          const n = (0, B.Tc)("creator_home_list_info", "application_config");
          if (n == null || typeof n != "object" || Array.isArray(n)) return;
          const s = n[l];
          if (!(!s || !s.title))
            return {
              title: s.title,
              description: s.description?.length ? s.description : void 0,
              imageUrl: s.listtileimage?.length ? s.listtileimage : void 0,
            };
        }
        function x(l) {
          return U(l)?.title;
        }
        function V(l) {
          return U(l)?.description;
        }
        function v(l) {
          return U(l)?.imageUrl;
        }
        function Z(l) {
          const n = M.b.InitFromClanID(l);
          return {
            queryKey: ["CreatorHome", l],
            initialData: () => N.GetCreatorHome(n),
            queryFn: async () => {
              const s = M.b.InitFromClanID(l);
              return await N.LoadCreatorHome(s, !0);
            },
          };
        }
        function L(l) {
          const { data: n, isFetching: s, refetch: a } = (0, K.I)(Z(l));
          return { creatorHome: n, isFetching: s, refetch: a };
        }
        function R(l, n, s) {
          const a = (0, K.I)({
            queryKey: ["useCreateHomeLinkedApps", n, s],
            queryFn: async () => {
              const e = d.w.Init(i.lO);
              e.Body().add_clan_account_ids(n),
                s && e.Body().set_ignore_dlc(!0);
              const y = await i.w5.GetDevPageAllAppsLinked(l, e);
              if (y.GetEResult() != w.R)
                throw new Error(
                  `Error from useCreateHomeLinkedApps: ${y.GetEResult()}`,
                );
              return y.Body().results().length == 0
                ? []
                : y.Body().results()[0].appid_list();
            },
            enabled: !!(n > 0 && l),
          });
          return a?.isLoading ? null : a.data;
        }
        function p(l, n, s) {
          return {
            queryKey: ["GetCreatorHomeListAppsQuery", l, n, s],
            queryFn: async () => {
              const a = N.GetServiceTransport(),
                e = d.w.Init(i.l6);
              e.Body().set_clan_account_id(l),
                e.Body().set_listid(n),
                s && e.Body().set_ignore_dlc(!0);
              const y = await i.w5.GetDevPageListApps(a, e);
              if (y.GetEResult() != w.R)
                throw new Error(
                  `Error from GetCreatorHomeListAppsQuery: ${y.GetEResult()}`,
                );
              return y
                .Body()
                .apps()
                .slice()
                .sort((j, Q) => (j.sort_order() ?? 0) - (Q.sort_order() ?? 0))
                .map((j) => j.appid() ?? 0)
                .filter((j) => j > 0);
            },
            enabled: !!(l > 0 && n),
          };
        }
        function g(l, n, s) {
          const a = useQuery(p(l, n, s));
          return a?.isLoading ? null : a.data;
        }
        function S(l, n) {
          return {
            queryKey: ["GetCreatorHomeGetAllListsQuery", l, n],
            queryFn: async () => {
              const s = N.GetServiceTransport(),
                a = CProtoBufMsg.Init(CStoreCuration_GetLists_Request);
              a
                .Body()
                .set_steamid(
                  new CSteamID(
                    l,
                    Config.EUNIVERSE,
                    k_EAccountTypeClan,
                    0,
                  ).ConvertTo64BitString(),
                ),
                a.Body().set_count(100);
              const e = await StoreCurationService.GetLists(s, a);
              return e.BSuccess()
                ? e
                    .Body()
                    .list_details()
                    .filter(
                      (y) =>
                        n ||
                        y.list_state() !=
                          EStoreCuratorListState.k_EStoreCuratorListState_Hidden,
                    )
                : null;
            },
            enabled: l > 0,
          };
        }
        function D(l, n) {
          const { data: s, isFetching: a, refetch: e } = useQuery(S(l, n));
          return { lists: s, isFetching: a, refetch: e };
        }
        function k(l, n) {
          return {
            queryKey: ["GetCreatorHomeGetListsDetailsQuery", l, n],
            queryFn: async () => {
              const s = N.GetServiceTransport(),
                a = CProtoBufMsg.Init(CStoreCuration_GetListDetails_Request);
              a
                .Body()
                .set_steamid(
                  new CSteamID(
                    l,
                    Config.EUNIVERSE,
                    k_EAccountTypeClan,
                    0,
                  ).ConvertTo64BitString(),
                ),
                a.Body().set_listid(n);
              const e = await StoreCurationService.GetListDetails(s, a);
              return e.BSuccess() ? (e.Body().list_details() ?? null) : null;
            },
            enabled: l > 0,
          };
        }
        function P(l, n) {
          const { data: s, isFetching: a, refetch: e } = useQuery(k(l, n));
          return { list: s, isFetching: a, refetch: e };
        }
      },
    },
  ]);
})();
