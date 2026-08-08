/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [2006],
  {
    38924: (e, t, r) => {
      r.d(t, {
        Fj: () => i,
        R$: () => s,
        Zx: () => n,
        hs: () => l,
        o5: () => a,
        sr: () => o,
      });
      const i = 2,
        n = 4,
        a = 8,
        s = 512,
        o = 1024,
        l = 2048;
    },
    29197: (e, t, r) => {
      r.d(t, { Wv: () => i });
      var i = {};
      r.r(i),
        r.d(i, {
          bM: () => m,
          Nq: () => d,
          GH: () => u,
          Jb: () => c,
          Jn: () => p,
          Mv: () => _,
          _x: () => l,
        });
      var n = r(80613),
        a = r.n(n),
        s = r(89068),
        o = r(56545);
      const l = 1,
        m = 2,
        c = 4,
        u = 8,
        d = 16,
        p = 32,
        _ = 64;
      class g extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.steamid || s.Sg(g.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  steamid: {
                    n: 1,
                    br: s.qM.readFixed64String,
                    bw: s.gp.writeFixed64String,
                  },
                  accept: { n: 2, br: s.qM.readBool, bw: s.gp.writeBool },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = s.w0(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(g.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (a().BinaryReader)(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_RespondToClanInvite_Request";
        }
      }
      class y extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new y();
        }
        static deserializeBinary(e) {
          let t = new (a().BinaryReader)(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_RespondToClanInvite_Response";
        }
      }
      class h extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.steamid || s.Sg(h.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  steamid: {
                    n: 1,
                    br: s.qM.readFixed64String,
                    bw: s.gp.writeFixed64String,
                  },
                  rtime_oldest_date: {
                    n: 2,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = s.w0(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(h.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (a().BinaryReader)(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_GetDraftAndRecentPartnerEventSnippet_Request";
        }
      }
      class B extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.snippets || s.Sg(B.M()),
            n.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: { snippets: { n: 1, c: b, r: !0, q: !0 } },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = s.w0(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(B.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (a().BinaryReader)(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_GetDraftAndRecentPartnerEventSnippet_Response";
        }
      }
      class b extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.gid || s.Sg(b.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  gid: {
                    n: 1,
                    br: s.qM.readFixed64String,
                    bw: s.gp.writeFixed64String,
                  },
                  announcement_gid: {
                    n: 2,
                    br: s.qM.readFixed64String,
                    bw: s.gp.writeFixed64String,
                  },
                  hidden: { n: 3, br: s.qM.readBool, bw: s.gp.writeBool },
                  published: { n: 4, br: s.qM.readBool, bw: s.gp.writeBool },
                  rtime32_start_time: {
                    n: 5,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  event_name: {
                    n: 6,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  event_type: { n: 7, br: s.qM.readEnum, bw: s.gp.writeEnum },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = s.w0(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(b.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (a().BinaryReader)(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_GetDraftAndRecentPartnerEventSnippet_Response_CEventSnippetData";
        }
      }
      class f extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.requests || s.Sg(f.M()),
            n.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  requests: { n: 1, c: v, r: !0, q: !0 },
                  cursor: { n: 2, br: s.qM.readString, bw: s.gp.writeString },
                  count: {
                    n: 3,
                    d: 100,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = s.w0(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(f.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (a().BinaryReader)(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_GetPartnerEventsByBuildIDRange_Request";
        }
      }
      class v extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.appid || s.Sg(v.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  appid: { n: 1, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                  start_build_id: {
                    n: 2,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  end_build_id: {
                    n: 3,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  branch: { n: 4, br: s.qM.readString, bw: s.gp.writeString },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = s.w0(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(v.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (a().BinaryReader)(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_GetPartnerEventsByBuildIDRange_Request_PatchNoteRange";
        }
      }
      class w extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.matches || s.Sg(w.M()),
            n.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  matches: { n: 1, c: I, r: !0, q: !0 },
                  num_total_results: {
                    n: 2,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  next_cursor: {
                    n: 3,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = s.w0(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(w.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (a().BinaryReader)(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_GetPartnerEventsByBuildIDRange_Response";
        }
      }
      class I extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.appid || s.Sg(I.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  appid: { n: 1, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                  build_id: { n: 2, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                  branch: { n: 3, br: s.qM.readString, bw: s.gp.writeString },
                  clan_event_gid: {
                    n: 4,
                    br: s.qM.readFixed64String,
                    bw: s.gp.writeFixed64String,
                  },
                  clan_account_id: {
                    n: 5,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = s.w0(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(I.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(I.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (a().BinaryReader)(e),
            r = new I();
          return I.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClan_GetPartnerEventsByBuildIDRange_Response_PatchNotesDesc";
        }
      }
      var S;
      !(function (e) {
        (e.RespondToClanInvite = function (e, t, r) {
          return e.SendMsg(
            "Clan.RespondToClanInvite#1",
            (0, o.I8)(g, t, r),
            y,
            { ePrivilege: 1 },
          );
        }),
          (e.GetDraftAndRecentPartnerEventSnippet = function (e, t, r) {
            return e.SendMsg(
              "Clan.GetDraftAndRecentPartnerEventSnippet#1",
              (0, o.I8)(h, t, r),
              B,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetPartnerEventsByBuildIDRange = function (e, t, r) {
            return e.SendMsg(
              "Clan.GetPartnerEventsByBuildIDRange#1",
              (0, o.I8)(f, t, r),
              w,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          });
      })(S || (S = {}));
    },
    64087: (e, t, r) => {
      r.d(t, {
        dU: () => h,
        eh: () => g,
        eb: () => n,
        tV: () => i,
        K_: () => b,
      });
      var i = {};
      r.r(i), r.d(i, { $D: () => c });
      var n = {};
      r.r(n), r.d(n, { N0: () => u });
      var a = r(80613),
        s = r.n(a),
        o = r(89068),
        l = r(56545),
        m = r(46483);
      const c = 0,
        u = 0;
      class d extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.appid || o.Sg(d.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  appid: { n: 1, br: o.qM.readUint32, bw: o.gp.writeUint32 },
                  clanid: { n: 2, br: o.qM.readUint32, bw: o.gp.writeUint32 },
                  link_url: { n: 3, br: o.qM.readString, bw: o.gp.writeString },
                  link_text: {
                    n: 4,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                  blurb: { n: 5, br: o.qM.readString, bw: o.gp.writeString },
                  time_recommended: {
                    n: 6,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  comment_count: {
                    n: 7,
                    br: o.qM.readInt32,
                    bw: o.gp.writeInt32,
                  },
                  upvote_count: {
                    n: 8,
                    br: o.qM.readInt32,
                    bw: o.gp.writeInt32,
                  },
                  accountid_creator: {
                    n: 9,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  recommendation_state: {
                    n: 10,
                    br: o.qM.readEnum,
                    bw: o.gp.writeEnum,
                  },
                  received_compensation: {
                    n: 11,
                    br: o.qM.readBool,
                    bw: o.gp.writeBool,
                  },
                  received_for_free: {
                    n: 12,
                    br: o.qM.readBool,
                    bw: o.gp.writeBool,
                  },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = o.w0(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(d.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCuration_RecommendedApp";
        }
      }
      class p extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.listid || o.Sg(p.M()),
            a.Message.initialize(this, e, 0, -1, [10, 12, 13, 14], null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  listid: {
                    n: 1,
                    br: o.qM.readUint64String,
                    bw: o.gp.writeUint64String,
                  },
                  title: { n: 2, br: o.qM.readString, bw: o.gp.writeString },
                  blurb: { n: 3, br: o.qM.readString, bw: o.gp.writeString },
                  link: { n: 4, br: o.qM.readString, bw: o.gp.writeString },
                  list_state: { n: 5, br: o.qM.readEnum, bw: o.gp.writeEnum },
                  sort_order: {
                    n: 6,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  time_created: {
                    n: 7,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  time_updated: {
                    n: 8,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  accountid: {
                    n: 9,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  apps: { n: 10, c: _, r: !0, q: !0 },
                  list_type: { n: 11, br: o.qM.readEnum, bw: o.gp.writeEnum },
                  title_localization: { n: 12, c: m.O2, r: !0, q: !0 },
                  blurb_localization: { n: 13, c: m.O2, r: !0, q: !0 },
                  link_localization: { n: 14, c: m.O2, r: !0, q: !0 },
                  sale_clan_steamid: {
                    n: 15,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                  sale_clan_event_gid: {
                    n: 16,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                  list_jsondata: {
                    n: 17,
                    br: o.qM.readString,
                    bw: o.gp.writeString,
                  },
                  clan_account_id: {
                    n: 18,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = o.w0(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(p.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCuration_ListDetails";
        }
      }
      class _ extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.recommended_app || o.Sg(_.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  recommended_app: { n: 1, c: d },
                  blurb: { n: 2, br: o.qM.readString, bw: o.gp.writeString },
                  sort_order: {
                    n: 3,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = o.w0(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(_.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCuration_ListDetails_ListItem";
        }
      }
      class g extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.steamid || o.Sg(g.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  steamid: {
                    n: 1,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                  list_state: { n: 2, br: o.qM.readEnum, bw: o.gp.writeEnum },
                  start: { n: 3, br: o.qM.readUint32, bw: o.gp.writeUint32 },
                  count: { n: 4, br: o.qM.readUint32, bw: o.gp.writeUint32 },
                  return_total_only: {
                    n: 5,
                    br: o.qM.readBool,
                    bw: o.gp.writeBool,
                  },
                  return_metadata_only: {
                    n: 6,
                    br: o.qM.readBool,
                    bw: o.gp.writeBool,
                  },
                  max_apps: { n: 7, br: o.qM.readInt32, bw: o.gp.writeInt32 },
                  sale_clan_event_gid: {
                    n: 8,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = o.w0(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(g.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCuration_GetLists_Request";
        }
      }
      class y extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.list_details || o.Sg(y.M()),
            a.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  list_details: { n: 1, c: p, r: !0, q: !0 },
                  total: { n: 2, br: o.qM.readUint32, bw: o.gp.writeUint32 },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = o.w0(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(y.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCuration_GetLists_Response";
        }
      }
      class h extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.steamid || o.Sg(h.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  steamid: {
                    n: 1,
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                  listid: {
                    n: 2,
                    br: o.qM.readUint64String,
                    bw: o.gp.writeUint64String,
                  },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = o.w0(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(h.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCuration_GetListDetails_Request";
        }
      }
      class B extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.list_details || o.Sg(B.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = { proto: B, fields: { list_details: { n: 1, c: p } } }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = o.w0(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(B.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCuration_GetListDetails_Response";
        }
      }
      var b;
      !(function (e) {
        (e.GetLists = function (e, t, r) {
          return e.SendMsg("StoreCuration.GetLists#1", (0, l.I8)(g, t, r), y, {
            bConstMethod: !0,
            ePrivilege: 2,
            eWebAPIKeyRequirement: 1,
          });
        }),
          (e.GetListDetails = function (e, t, r) {
            return e.SendMsg(
              "StoreCuration.GetListDetails#1",
              (0, l.I8)(h, t, r),
              B,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          });
      })(b || (b = {}));
    },
    10622: (e, t, r) => {
      r.d(t, { Z: () => p, dV: () => u.d, rO: () => d, tp: () => u.t });
      var i = r(34629),
        n = r(14947),
        a = r(31561),
        s = r(51006),
        o = r(61859),
        l = r(22837),
        m = r(38924),
        c = r(78327),
        u = r(85044);
      function d(e) {
        let t = "offline";
        return (
          e &&
            (e.is_ingame
              ? (t = "ingame")
              : e.m_broadcastAccountId
                ? (t = "watchingbroadcast")
                : e.is_online && (t = "online"),
            e.is_awayOrSnooze && (t += " awayOrSnooze")),
          t
        );
      }
      class p {
        constructor(e) {
          (this.m_bInitialized = !1),
            (this.m_ePersonaState = l.cU3),
            (this.m_unGamePlayedAppID = 0),
            (this.m_gameid = "0"),
            (this.m_unPersonaStateFlags = 0),
            (this.m_strPlayerName = ""),
            (this.m_strAvatarHash = u.d),
            (this.m_strAccountName = ""),
            (this.m_rtLastSeenOnline = 0),
            (this.m_strGameExtraInfo = ""),
            (this.m_unGameServerIP = 0),
            (this.m_unGameServerPort = 0),
            (this.m_game_lobby_id = ""),
            (this.m_bPlayerNamePending = !1),
            (this.m_bAvatarPending = !1),
            (this.m_broadcastId = void 0),
            (this.m_broadcastAccountId = void 0),
            (this.m_broadcastAppId = void 0),
            (this.m_broadcastViewerCount = void 0),
            (this.m_strBroadcastTitle = void 0),
            (this.m_bCommunityBanned = void 0),
            (this.m_eGamingDeviceType = l.eSB),
            (this.m_mapRichPresence = n.sH.map()),
            (this.m_bNameInitialized = !1),
            (this.m_bStatusInitialized = !1),
            (this.m_strProfileURL = void 0),
            (0, n.Gn)(this),
            (this.m_steamid = e);
        }
        Reset() {
          (this.m_ePersonaState = l.cU3),
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
            (this.m_eGamingDeviceType = l.eSB);
        }
        GetAccountID() {
          return this.m_steamid.GetAccountID();
        }
        GetSteamIDAsString() {
          return this.m_steamid.ConvertTo64BitString();
        }
        get is_online() {
          return this.m_ePersonaState != l.cU3 && this.m_ePersonaState != l._3b;
        }
        get is_ingame() {
          return (
            this.is_online &&
            (0 != this.m_unGamePlayedAppID || "0" != this.m_gameid)
          );
        }
        get is_watchingbroadcast() {
          return !!this.m_broadcastAccountId;
        }
        get is_in_nonsteam_game() {
          return 0 == this.m_unGamePlayedAppID && "0" != this.m_gameid;
        }
        get is_in_joinable_game() {
          return (
            this.has_joinable_game_flag ||
            this.is_in_valid_lobby ||
            this.has_server_ip
          );
        }
        get has_joinable_game_flag() {
          var e;
          return (
            0 !=
            ((null !== (e = this.m_unPersonaStateFlags) && void 0 !== e
              ? e
              : 0) &
              m.Fj)
          );
        }
        get connect_string() {
          return this.m_mapRichPresence.get("connect");
        }
        get is_in_valid_lobby() {
          return null != this.m_game_lobby_id && "0" != this.m_game_lobby_id;
        }
        get has_server_ip() {
          return 0 != this.m_unGameServerIP;
        }
        get is_awayOrSnooze() {
          return this.m_ePersonaState == l.PrD || this.m_ePersonaState == l.vPz;
        }
        HasStateFlag(e) {
          var t;
          return (
            0 !=
            ((null !== (t = this.m_unPersonaStateFlags) && void 0 !== t
              ? t
              : 0) &
              e)
          );
        }
        get last_seen_online() {
          return this.m_rtLastSeenOnline;
        }
        ClearStateOnDisconnect() {
          this.m_ePersonaState != l.cU3 && this.Reset();
        }
        get is_golden() {
          return this.HasStateFlag(m.Zx);
        }
        GetCurrentGameName() {
          return this.m_strGameExtraInfo
            ? this.m_strGameExtraInfo
            : this.m_unGamePlayedAppID
              ? s.Vw.GetAppInfo(this.m_unGamePlayedAppID).name
              : "";
        }
        GetCurrentGameIconURL() {
          return this.m_unGamePlayedAppID
            ? s.Vw.GetAppInfo(this.m_unGamePlayedAppID).icon_url
            : "";
        }
        BIsAppInfoReady() {
          return (
            !this.m_unGamePlayedAppID ||
            s.Vw.GetAppInfo(this.m_unGamePlayedAppID).is_initialized
          );
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
            let e = s.Vw.GetRichPresenceLoc(this.m_unGamePlayedAppID);
            if (e) {
              let t = this.m_mapRichPresence.get("steam_display");
              return e.Localize(t, this.m_mapRichPresence);
            }
          } else if (this.HasStateFlag(m.o5))
            return (0, o.we)("#PersonaStateRemotePlayTogether");
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
          if (0 == this.last_seen_online) return 3e4;
          const e = 3600;
          let t = 1e3;
          const r = s.Vw.CMInterface.GetServerRTime32() - this.last_seen_online;
          return (t *= r > 86400 ? e : r > 7200 ? 60 : 15), t;
        }
        GetOfflineStatusTime() {
          if (0 == this.last_seen_online)
            return (0, o.we)("#PersonaStateOffline");
          let e = this.GetOfflineStatusUpdateRate();
          (!c.TS.IN_MOBILE || e <= 60) && (0, a.tB)(e);
          let t = s.Vw.CMInterface.GetServerRTime32() - this.last_seen_online;
          return t < 60
            ? (0, o.we)("#PersonaStateLastSeen_JustNow")
            : (0, o.we)("#PersonaStateLastSeen", (0, o.Hq)(t));
        }
        GetLocalizedOnlineStatus() {
          switch (this.m_ePersonaState) {
            case l.cU3:
            case l._3b:
              return this.GetOfflineStatusTime();
            case l.UXk:
              return (0, o.we)("#PersonaStateOnline");
            case l.wcG:
              return (0, o.we)("#PersonaStateBusy");
            case l.PrD:
              return (0, o.we)("#PersonaStateAway");
            case l.vPz:
              return (0, o.we)("#PersonaStateSnooze");
            case l.Hrn:
              return (0, o.we)("#PersonaStateLookingToTrade");
            case l.HAb:
              return (0, o.we)("#PersonaStateLookingToPlay");
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
          return this.m_strAvatarHash != u.d;
        }
        get avatar_url() {
          return (0, u.t)(this.m_strAvatarHash);
        }
        get avatar_url_medium() {
          return (0, u.t)(this.m_strAvatarHash, "medium");
        }
        get avatar_url_full() {
          return (0, u.t)(this.m_strAvatarHash, "full");
        }
        static SortStatusComparator(e, t, r) {
          if (t.has_public_party_beacon) {
            if (!r.has_public_party_beacon) return -1;
          } else {
            if (r.has_public_party_beacon) return 1;
            if (t.is_ingame) {
              if (!r.is_ingame) return -1;
              if (!e) return 0;
              if (t.is_awayOrSnooze) {
                if (!r.is_awayOrSnooze) return 1;
              } else if (r.is_awayOrSnooze) return -1;
            } else if (r.is_ingame) return 1;
          }
          if (t.is_online) {
            if (!r.is_online) return -1;
          } else if (r.is_online) return 1;
          if (e)
            if (t.is_awayOrSnooze) {
              if (!r.is_awayOrSnooze) return 1;
            } else if (r.is_awayOrSnooze) return -1;
          return 0;
        }
        GetCommunityProfileURL() {
          return this.m_strProfileURL
            ? `${c.TS.COMMUNITY_BASE_URL}id/${this.m_strProfileURL}/`
            : `${c.TS.COMMUNITY_BASE_URL}profiles/${this.m_steamid.ConvertTo64BitString()}/`;
        }
      }
      (0, i.Cg)([n.sH], p.prototype, "m_bInitialized", void 0),
        (0, i.Cg)([n.sH], p.prototype, "m_ePersonaState", void 0),
        (0, i.Cg)([n.sH], p.prototype, "m_unGamePlayedAppID", void 0),
        (0, i.Cg)([n.sH], p.prototype, "m_gameid", void 0),
        (0, i.Cg)([n.sH], p.prototype, "m_unPersonaStateFlags", void 0),
        (0, i.Cg)([n.sH], p.prototype, "m_strPlayerName", void 0),
        (0, i.Cg)([n.sH], p.prototype, "m_strAvatarHash", void 0),
        (0, i.Cg)([n.sH], p.prototype, "m_strAccountName", void 0),
        (0, i.Cg)([n.sH], p.prototype, "m_rtLastSeenOnline", void 0),
        (0, i.Cg)([n.sH], p.prototype, "m_strGameExtraInfo", void 0),
        (0, i.Cg)([n.sH], p.prototype, "m_unGameServerIP", void 0),
        (0, i.Cg)([n.sH], p.prototype, "m_unGameServerPort", void 0),
        (0, i.Cg)([n.sH], p.prototype, "m_game_lobby_id", void 0),
        (0, i.Cg)([n.sH], p.prototype, "m_bPlayerNamePending", void 0),
        (0, i.Cg)([n.sH], p.prototype, "m_bAvatarPending", void 0),
        (0, i.Cg)([n.sH], p.prototype, "m_broadcastId", void 0),
        (0, i.Cg)([n.sH], p.prototype, "m_broadcastAccountId", void 0),
        (0, i.Cg)([n.sH], p.prototype, "m_broadcastAppId", void 0),
        (0, i.Cg)([n.sH], p.prototype, "m_broadcastViewerCount", void 0),
        (0, i.Cg)([n.sH], p.prototype, "m_strBroadcastTitle", void 0),
        (0, i.Cg)([n.sH], p.prototype, "m_bCommunityBanned", void 0),
        (0, i.Cg)([n.sH], p.prototype, "m_eGamingDeviceType", void 0),
        (0, i.Cg)([n.sH], p.prototype, "m_bNameInitialized", void 0);
    },
    4796: (e, t, r) => {
      r.d(t, {
        Ao: () => w,
        TB: () => B,
        W$: () => b,
        Yp: () => f,
        _5: () => v,
        ac: () => h,
      });
      var i = r(34629),
        n = r(41735),
        a = r.n(n),
        s = r(14947),
        o = r(90626),
        l = r(22837),
        m = r(17720),
        c = r(81393),
        u = r(78327),
        d = r(67165),
        p = r(26161),
        _ = r(29197),
        g = r(82429);
      class y {
        constructor() {
          (this.m_mapAppIDToClanInfo = new Map()),
            (this.m_mapVanityToClanInfo = new Map()),
            (this.m_mapClanAccountIDToClanInfo = new Map()),
            (this.m_mapPromisesLoading = new Map()),
            (this.m_rgQueuedEventsClanIDs = new Array()),
            (this.m_bLoadedFromConfig = !1),
            (0, s.Gn)(this);
        }
        Init() {
          this.LazyInit();
        }
        LazyInit() {
          this.m_bLoadedFromConfig ||
            ((0, s.h5)(() => {
              let e = (0, u.Fd)("groupvanityinfo", "application_config");
              this.ValidateClanConfig(e) &&
                e.forEach((e) => {
                  this.InternalSetupValue(e);
                });
            }),
            (this.m_bLoadedFromConfig = !0));
        }
        AddGroupVanities(e) {
          (0, s.h5)(() => {
            this.ValidateClanConfig(e) &&
              e.forEach((e) => {
                this.InternalSetupValue(e);
              });
          });
        }
        ValidateClanConfig(e) {
          const t = e;
          return (
            !!(
              t &&
              Array.isArray(t) &&
              t.length > 0 &&
              "object" == typeof t[0]
            ) &&
            "number" == typeof t[0].clanAccountID &&
            ("number" == typeof t[0].appid ||
              "string" == typeof t[0].vanity_url)
          );
        }
        BHasClanInfoLoaded(e) {
          return (
            (0, c.wT)(e.BIsValid(), "Clan SteamID is not valid when ClanInfo"),
            (0, c.wT)(
              e.BIsClanAccount(),
              "Clan SteamID is not a clan account id when requesting clan info ",
            ),
            this.m_mapClanAccountIDToClanInfo.has(e.GetAccountID())
          );
        }
        BHasClanInfoLoadedByAccountID(e) {
          return this.m_mapClanAccountIDToClanInfo.has(e);
        }
        RegisterClanData(e) {
          for (const t of e) this.InternalSetupValue(t);
        }
        InternalSetupValue(e) {
          const t = {
            clanAccountID: e.clanAccountID,
            clanSteamID: new m.b(e.clanSteamIDString),
            appid: e.appid,
            vanity_url: e.vanity_url,
            member_count: e.member_count,
            is_ogg: e.is_ogg,
            is_creator_home: e.is_creator_home,
            is_curator: e.is_curator,
            has_visible_store_page: e.has_visible_store_page,
            has_rss_feed: e.has_rss_feed,
            rss_language: e.rss_language ? e.rss_language : l.Bhc,
            avatar_full_url: e.avatar_full_url,
            avatar_medium_url: e.avatar_medium_url,
            group_name: e.group_name,
            creator_page_bg_url: e.creator_page_bg_url,
            curator_title: e.curator_title,
            curator_description: e.curator_description,
            partner_events_enabled: e.partner_events_enabled,
          };
          0 != e.appid && this.m_mapAppIDToClanInfo.set(e.appid, t),
            e.vanity_url &&
              e.vanity_url.length > 0 &&
              this.m_mapVanityToClanInfo.set(
                e.vanity_url.toLocaleLowerCase(),
                t,
              ),
            this.m_mapClanAccountIDToClanInfo.set(e.clanAccountID, t);
        }
        GetRequestParam() {
          return { origin: self.origin };
        }
        async LoadOGGClanInfoForAppID(e) {
          if (
            (this.LazyInit(),
            "string" == typeof e && (e = parseInt(e)),
            (0, c.wT)(
              0 != e,
              "LoadOGGClanInfoForAppID called with appid of zero",
            ),
            0 == e)
          )
            return null;
          if (this.m_mapAppIDToClanInfo.has(e))
            return this.m_mapAppIDToClanInfo.get(e);
          let t = "appid_" + e;
          return (
            this.m_mapPromisesLoading.has(t) ||
              this.m_mapPromisesLoading.set(
                t,
                this.InternalLoadOGGClanInfoForAppID(e),
              ),
            this.m_mapPromisesLoading.get(t)
          );
        }
        async InternalLoadOGGClanInfoForAppID(e) {
          const t =
            u.TS.COMMUNITY_BASE_URL + "ogg/" + e + "/ajaxgetvanityandclanid/";
          let r = null;
          try {
            r = (await a().get(t, { params: this.GetRequestParam() })).data;
          } catch (e) {}
          return r
            ? (this.InternalSetupValue(r), this.m_mapAppIDToClanInfo.get(e))
            : null;
        }
        async LoadOGGClanInfoForIdentifier(e) {
          if (
            (this.LazyInit(),
            this.m_mapVanityToClanInfo.has(
              null == e ? void 0 : e.toLocaleLowerCase(),
            ))
          )
            return this.m_mapVanityToClanInfo.get(
              null == e ? void 0 : e.toLocaleLowerCase(),
            );
          let t = "storevanity_" + (null == e ? void 0 : e.toLocaleLowerCase());
          return (
            this.m_mapPromisesLoading.has(t) ||
              this.m_mapPromisesLoading.set(
                t,
                this.InternalLoadOGGClanInfoForIdentifier(e),
              ),
            this.m_mapPromisesLoading.get(t)
          );
        }
        async InternalLoadOGGClanInfoForIdentifier(e) {
          const t =
            u.TS.COMMUNITY_BASE_URL + "games/" + e + "/ajaxgetvanityandclanid/";
          let r = await a().get(t, { params: this.GetRequestParam() });
          return (
            this.InternalSetupValue(r.data),
            this.m_mapVanityToClanInfo.get(
              null == e ? void 0 : e.toLocaleLowerCase(),
            )
          );
        }
        async LoadOGGClanInfoForGroupVanity(e) {
          if (
            (this.LazyInit(),
            this.m_mapVanityToClanInfo.has(
              null == e ? void 0 : e.toLocaleLowerCase(),
            ))
          )
            return this.m_mapVanityToClanInfo.get(
              null == e ? void 0 : e.toLocaleLowerCase(),
            );
          let t = "community_name_" + e;
          return (
            this.m_mapPromisesLoading.has(t) ||
              this.m_mapPromisesLoading.set(
                t,
                this.InternalLoadOGGClanInfoForGroupVanity(
                  null == e ? void 0 : e.toLocaleLowerCase(),
                ),
              ),
            this.m_mapPromisesLoading.get(t)
          );
        }
        async InternalLoadOGGClanInfoForGroupVanity(e) {
          const t =
            u.TS.COMMUNITY_BASE_URL +
            "groups/" +
            e +
            "/ajaxgetvanityandclanid/";
          let r = await a().get(t, { params: this.GetRequestParam() });
          return (
            this.InternalSetupValue(r.data),
            this.m_mapVanityToClanInfo.get(
              null == e ? void 0 : e.toLocaleLowerCase(),
            )
          );
        }
        async LoadClanInfoForClanSteamID(e) {
          this.LazyInit();
          let t = e.GetAccountID();
          if (this.m_mapClanAccountIDToClanInfo.has(t))
            return this.m_mapClanAccountIDToClanInfo.get(t);
          let r = "clanaccountid_" + t;
          return (
            this.m_mapPromisesLoading.has(r) ||
              this.m_mapPromisesLoading.set(
                r,
                this.InternalLoadClanInfoForClanSteamID(e),
              ),
            this.m_mapPromisesLoading.get(r)
          );
        }
        async LoadClanInfoForClanAccountID(e) {
          const t = m.b.InitFromClanID(e);
          return this.LoadClanInfoForClanSteamID(t);
        }
        async InternalLoadClanInfoForClanSteamID(e) {
          let t = e.GetAccountID();
          const r =
            u.TS.COMMUNITY_BASE_URL +
            "gid/" +
            e.ConvertTo64BitString() +
            "/ajaxgetvanityandclanid/";
          let i = await a().get(r, { params: this.GetRequestParam() });
          return (
            this.InternalSetupValue(i.data),
            this.m_mapClanAccountIDToClanInfo.get(t)
          );
        }
        GetOGGClanInfo(e) {
          return "string" == typeof e
            ? this.m_mapVanityToClanInfo.get(
                null == e ? void 0 : e.toLocaleLowerCase(),
              )
            : this.m_mapAppIDToClanInfo.get(e);
        }
        GetClanSteamIDForAppID(e) {
          if ((this.LazyInit(), this.m_mapAppIDToClanInfo.has(e)))
            return m.b.InitFromClanID(
              this.m_mapAppIDToClanInfo.get(e).clanAccountID,
            );
        }
        GetClanVanityForAppID(e) {
          if ((this.LazyInit(), this.m_mapAppIDToClanInfo.has(e)))
            return this.m_mapAppIDToClanInfo.get(e).vanity_url;
        }
        GetClanVanityForClanSteamID(e) {
          if (
            (this.LazyInit(),
            this.m_mapClanAccountIDToClanInfo.has(e.GetAccountID()))
          )
            return this.m_mapClanAccountIDToClanInfo.get(e.GetAccountID())
              .vanity_url;
        }
        HasLoadedClanAccountID(e) {
          return this.LazyInit(), this.m_mapClanAccountIDToClanInfo.has(e);
        }
        GetClanMemberCount(e) {
          return this.m_mapAppIDToClanInfo.has(e)
            ? this.m_mapAppIDToClanInfo.get(e).member_count
            : 0;
        }
        GetClanInfoByClanAccountID(e) {
          return (
            this.LazyInit(),
            (0, c.wT)(
              !!e,
              "Unepxected clanid when requesting information. GetClanInfoByClanAccountID ",
            ),
            this.m_mapClanAccountIDToClanInfo.get(e)
          );
        }
        GetCreatorStoreURL(e) {
          let t = d.pF.GetCreatorHome(e);
          if (t) return t.GetCreatorHomeURL("developer");
          let r = this.GetClanInfoByClanAccountID(e.GetAccountID());
          return (
            u.TS.COMMUNITY_BASE_URL +
            (r.vanity_url
              ? "groups/" + r.vanity_url
              : "gid/" + e.ConvertTo64BitString())
          );
        }
      }
      (0, i.Cg)([s.sH], y.prototype, "m_mapAppIDToClanInfo", void 0),
        (0, i.Cg)([s.sH], y.prototype, "m_mapVanityToClanInfo", void 0),
        (0, i.Cg)([s.sH], y.prototype, "m_mapClanAccountIDToClanInfo", void 0),
        (0, i.Cg)([s.XI], y.prototype, "RegisterClanData", null),
        (0, i.Cg)([s.XI], y.prototype, "InternalSetupValue", null);
      const h = new y();
      function B(e) {
        const [t, r] = (0, o.useState)(
            e ? h.GetClanInfoByClanAccountID(e) : void 0,
          ),
          [i, n] = (0, o.useState)(!!e && !h.BHasClanInfoLoadedByAccountID(e));
        return (
          (0, o.useEffect)(() => {
            if (e)
              if (h.BHasClanInfoLoadedByAccountID(e))
                r(h.GetClanInfoByClanAccountID(e)), n(!1);
              else {
                n(!0);
                const t = m.b.InitFromClanID(
                  "string" == typeof e ? Number.parseInt(e) : e,
                );
                h.LoadClanInfoForClanSteamID(t)
                  .then((e) => {
                    r(null != e ? e : void 0), n(!1);
                  })
                  .catch((t) =>
                    console.error(`Failed to load clan info ${e}`, t),
                  );
              }
            else r(void 0), n(!1);
          }, [e]),
          [i, t]
        );
      }
      function b(e) {
        const [t, r] = (0, o.useState)(h.GetOGGClanInfo(e));
        return (
          (0, o.useEffect)(() => {
            t || h.LoadOGGClanInfoForGroupVanity(e).then(r);
          }, [t, e]),
          t
        );
      }
      function f(e) {
        const t = e.BIsOGGEvent(),
          r = g.KN.Get().GetPartnerEventPermissions(e.clanSteamID).valve_admin;
        if (t) return { bVisible: !1 };
        if (e.GetEventType() == l.ajI) return { bVisible: !1 };
        if (e.BHasSaleEnabled()) return { bVisible: !0 };
        if (
          e.jsondata.clone_from_event_gid &&
          e.jsondata.clone_from_sale_enabled
        )
          return { bVisible: !0 };
        if (e.clanSteamID.GetAccountID() == (0, p.H)()) return { bVisible: !1 };
        const i = d.pF.GetCreatorHome(e.clanSteamID);
        return i && i.BHasClanAccountFlagSet(_.Wv.Jn)
          ? { bVisible: !0 }
          : r
            ? { bVisible: !0, bValveOnly: !0 }
            : { bVisible: !1 };
      }
      function v(e) {
        const t = e.BIsOGGEvent(),
          r = g.KN.Get().GetPartnerEventPermissions(e.clanSteamID).valve_admin;
        return t
          ? e.BHasSaleEnabled()
            ? { bVisible: !0 }
            : u.TS.EUNIVERSE == l.wLO
              ? { bVisible: !1 }
              : r && e.GetEventType() == l.zeJ
                ? { bVisible: !0, bValveOnly: !0 }
                : { bVisible: !1 }
          : { bVisible: !1 };
      }
      function w(e) {
        const t = e.BIsOGGEvent();
        g.KN.Get().GetPartnerEventPermissions(e.clanSteamID).valve_admin;
        return t || e.GetEventType() != l.ajI
          ? { bVisible: !1 }
          : e.BHasSaleEnabled()
            ? { bVisible: !0 }
            : (e.clanSteamID.GetAccountID(), (0, p.H)(), { bVisible: !1 });
      }
      window.g_ClanStore = h;
    },
    67165: (e, t, r) => {
      r.d(t, {
        mD: () => x,
        ie: () => K,
        GT: () => V,
        eL: () => j,
        bW: () => W,
        io: () => E,
        A2: () => q,
        pF: () => U,
        FV: () => H,
        $$: () => k,
        FX: () => N,
      });
      var i,
        n = r(34629),
        a = r(37085),
        s = r(22837),
        o = r(56545),
        l = r(80613),
        m = r.n(l),
        c = r(89068);
      class u extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.appid || c.Sg(u.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  appid: { n: 1, br: c.qM.readUint32, bw: c.gp.writeUint32 },
                  clan_steamid: {
                    n: 2,
                    br: c.qM.readFixed64String,
                    bw: c.gp.writeFixed64String,
                  },
                  relation: { n: 3, br: c.qM.readEnum, bw: c.gp.writeEnum },
                  linkname: { n: 4, br: c.qM.readString, bw: c.gp.writeString },
                  json: { n: 5, br: c.qM.readString, bw: c.gp.writeString },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = c.w0(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return c.BT(u.M(), e, t);
        }
        static fromObject(e) {
          return c.Uq(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new u();
          return u.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.zj(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.i0(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CDeveloperPageLink";
        }
      }
      class d extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.clan_account_id || c.Sg(d.M()),
            l.Message.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  clan_account_id: {
                    n: 1,
                    br: c.qM.readUint32,
                    bw: c.gp.writeUint32,
                  },
                  appid_list: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: c.qM.readUint32,
                    pbr: c.qM.readPackedUint32,
                    bw: c.gp.writeRepeatedUint32,
                  },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = c.w0(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return c.BT(d.M(), e, t);
        }
        static fromObject(e) {
          return c.Uq(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.zj(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.i0(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CDeveloperPageToApps";
        }
      }
      class p extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.appid || c.Sg(p.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  appid: { n: 1, br: c.qM.readUint32, bw: c.gp.writeUint32 },
                  link: { n: 2, c: u },
                  remove: {
                    n: 3,
                    d: !1,
                    br: c.qM.readBool,
                    bw: c.gp.writeBool,
                  },
                  update_json_only: {
                    n: 4,
                    d: !1,
                    br: c.qM.readBool,
                    bw: c.gp.writeBool,
                  },
                  skip_clan_permissions: {
                    n: 5,
                    d: !1,
                    br: c.qM.readBool,
                    bw: c.gp.writeBool,
                  },
                  partner_id: {
                    n: 6,
                    br: c.qM.readUint32,
                    bw: c.gp.writeUint32,
                  },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = c.w0(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return c.BT(p.M(), e, t);
        }
        static fromObject(e) {
          return c.Uq(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.zj(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.i0(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_SetDevPageLink_Request";
        }
      }
      class _ extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.Message.initialize(this, e, 0, -1, void 0, null);
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
          let t = new (m().BinaryReader)(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_SetDevPageLink_Response";
        }
      }
      class g extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.appid || c.Sg(g.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  appid: { n: 1, br: c.qM.readUint32, bw: c.gp.writeUint32 },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = c.w0(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return c.BT(g.M(), e, t);
        }
        static fromObject(e) {
          return c.Uq(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.zj(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.i0(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPageLinks_Request";
        }
      }
      class y extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.links || c.Sg(y.M()),
            l.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: { links: { n: 1, c: u, r: !0, q: !0 } },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = c.w0(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return c.BT(y.M(), e, t);
        }
        static fromObject(e) {
          return c.Uq(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.zj(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.i0(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPageLinks_Response";
        }
      }
      class h extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.clan_account_ids || c.Sg(h.M()),
            l.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  clan_account_ids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: c.qM.readUint32,
                    pbr: c.qM.readPackedUint32,
                    bw: c.gp.writeRepeatedUint32,
                  },
                  ignore_dlc: { n: 2, br: c.qM.readBool, bw: c.gp.writeBool },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = c.w0(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return c.BT(h.M(), e, t);
        }
        static fromObject(e) {
          return c.Uq(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.zj(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.i0(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPageAllAppsLinked_Request";
        }
      }
      class B extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.results || c.Sg(B.M()),
            l.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: { results: { n: 1, c: d, r: !0, q: !0 } },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = c.w0(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return c.BT(B.M(), e, t);
        }
        static fromObject(e) {
          return c.Uq(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.zj(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.i0(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPageAllAppsLinked_Response";
        }
      }
      class b extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.clan_account_id || c.Sg(b.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  clan_account_id: {
                    n: 1,
                    br: c.qM.readUint32,
                    bw: c.gp.writeUint32,
                  },
                  listid: {
                    n: 2,
                    br: c.qM.readUint64String,
                    bw: c.gp.writeUint64String,
                  },
                  ignore_dlc: { n: 3, br: c.qM.readBool, bw: c.gp.writeBool },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = c.w0(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return c.BT(b.M(), e, t);
        }
        static fromObject(e) {
          return c.Uq(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.zj(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.i0(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPageListApps_Request";
        }
      }
      class f extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.apps || c.Sg(f.M()),
            l.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: { apps: { n: 1, c: v, r: !0, q: !0 } },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = c.w0(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return c.BT(f.M(), e, t);
        }
        static fromObject(e) {
          return c.Uq(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.zj(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.i0(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPageListApps_Response";
        }
      }
      class v extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.appid || c.Sg(v.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  appid: { n: 1, br: c.qM.readUint32, bw: c.gp.writeUint32 },
                  sort_order: {
                    n: 2,
                    br: c.qM.readUint32,
                    bw: c.gp.writeUint32,
                  },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = c.w0(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return c.BT(v.M(), e, t);
        }
        static fromObject(e) {
          return c.Uq(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.zj(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.i0(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPageListApps_Response_ListApp";
        }
      }
      class w extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.partnerid || c.Sg(w.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  partnerid: {
                    n: 1,
                    br: c.qM.readUint32,
                    bw: c.gp.writeUint32,
                  },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = c.w0(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return c.BT(w.M(), e, t);
        }
        static fromObject(e) {
          return c.Uq(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.zj(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.i0(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPagesForPartner_Request";
        }
      }
      class I extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.results || c.Sg(I.M()),
            l.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: { results: { n: 1, c: S, r: !0, q: !0 } },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = c.w0(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return c.BT(I.M(), e, t);
        }
        static fromObject(e) {
          return c.Uq(I.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new I();
          return I.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.zj(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.i0(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPagesForPartner_Response";
        }
      }
      class S extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.clan_accountid || c.Sg(S.M()),
            l.Message.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  clan_accountid: {
                    n: 1,
                    br: c.qM.readUint32,
                    bw: c.gp.writeUint32,
                  },
                  linknames: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: c.qM.readString,
                    bw: c.gp.writeRepeatedString,
                  },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = c.w0(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return c.BT(S.M(), e, t);
        }
        static fromObject(e) {
          return c.Uq(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (m().BinaryReader)(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.zj(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (m().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.i0(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new (m().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreCatalog_GetDevPagesForPartner_Response_CDevPageInfo";
        }
      }
      !(function (e) {
        (e.SetDevPageLink = function (e, t, r) {
          return e.SendMsg(
            "StoreCatalog.SetDevPageLink#1",
            (0, o.I8)(p, t, r),
            _,
            { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
          );
        }),
          (e.GetDevPageLinks = function (e, t, r) {
            return e.SendMsg(
              "StoreCatalog.GetDevPageLinks#1",
              (0, o.I8)(g, t, r),
              y,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.GetDevPageAllAppsLinked = function (e, t, r) {
            return e.SendMsg(
              "StoreCatalog.GetDevPageAllAppsLinked#1",
              (0, o.I8)(h, t, r),
              B,
              { ePrivilege: 1 },
            );
          }),
          (e.GetDevPageListApps = function (e, t, r) {
            return e.SendMsg(
              "StoreCatalog.GetDevPageListApps#1",
              (0, o.I8)(b, t, r),
              f,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetDevPagesForPartner = function (e, t, r) {
            return e.SendMsg(
              "StoreCatalog.GetDevPagesForPartner#1",
              (0, o.I8)(w, t, r),
              I,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          });
      })(i || (i = {}));
      var M = r(64087),
        C = r(88942),
        z = r(41735),
        T = r.n(z),
        R = r(14947),
        G = r(29197),
        A = r(78327);
      class D {
        constructor(e) {
          (this.m_appidList = new Array()),
            (this.m_strName = ""),
            (this.m_strAvatarURLFullSize = ""),
            (this.m_strTagLineLoc = ""),
            (this.m_nFollowers = 0),
            (this.m_strVanity = ""),
            (this.m_webLink = void 0),
            (this.m_linkedEvent = void 0),
            (this.m_mapListInfo = new Map()),
            (this.m_bIsLoaded = !1),
            (this.m_bIsHidden = !1),
            (this.m_clanAccountFlags = 0),
            (0, R.Gn)(this),
            (this.m_clanSteamID = e);
        }
        Initialize(e) {
          var t, r;
          (this.m_strName = e.name || ""),
            (this.m_strAvatarURLFullSize =
              e.avatar_url_full_size ||
              "https://avatars.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg"),
            (this.m_strTagLineLoc = e.tag_line_localized || ""),
            (this.m_nFollowers = e.followers || 0),
            (this.m_strVanity = e.vanity || void 0),
            (this.m_webLink = e.weblink),
            (this.m_bIsHidden = e.hidden || !1),
            (this.m_clanAccountFlags =
              null !== (t = e.clan_account_flags) && void 0 !== t ? t : 0),
            (this.m_linkedEvent = e.linked_event),
            (this.m_mapListInfo = new Map(
              Object.entries(
                null !== (r = e.list_info) && void 0 !== r ? r : {},
              ),
            )),
            e.appids && e.appids.forEach((e) => this.m_appidList.push(e)),
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
          return Boolean(this.m_clanAccountFlags & G.Wv.GH);
        }
        BHasClanAccountFlagSet(e) {
          return Boolean(this.m_clanAccountFlags & e);
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
        GetCreatorHomeURL(e) {
          if (this.m_strVanity) {
            switch (e) {
              case "publisher":
                return (
                  A.TS.STORE_BASE_URL + "publisher/" + this.m_strVanity + "/"
                );
              case "franchise":
                return (
                  A.TS.STORE_BASE_URL + "franchise/" + this.m_strVanity + "/"
                );
            }
            return A.TS.STORE_BASE_URL + "developer/" + this.m_strVanity + "/";
          }
          return (
            A.TS.STORE_BASE_URL +
            "curator/" +
            this.m_clanSteamID.GetAccountID() +
            "/"
          );
        }
        BHasWebLink() {
          return void 0 !== this.m_webLink;
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
        AdjustFollower(e) {
          this.m_nFollowers += e;
        }
        async EnablePartnerEventEditorFlag() {
          this.BIsPartnerEventEditorEnabled() ||
            (await this.UpdateGroupFlagsFeature([G.Wv.bM, G.Wv.GH], !0));
        }
        async UpdateGroupFlagsFeature(e, t) {
          let r = A.TS.PARTNER_BASE_URL + "sales/ajaxupdateclanaccountflags",
            i = this.m_clanAccountFlags;
          if (
            (e.forEach((e) => {
              t ? (i |= e) : (i &= ~e);
            }),
            i == this.m_clanAccountFlags)
          )
            return;
          let n = new Array();
          i & G.Wv._x && n.push(G.Wv._x),
            i & G.Wv.GH && n.push(G.Wv.GH),
            i & G.Wv.bM && n.push(G.Wv.bM),
            i & G.Wv.Jb && n.push(G.Wv.Jb),
            i & G.Wv.Nq && n.push(G.Wv.Nq),
            i & G.Wv.Jn && n.push(G.Wv.Jn),
            i & G.Wv.Mv && n.push(G.Wv.Mv);
          let s = new FormData();
          s.append("sessionid", (0, A.KC)()),
            s.append("clan_account_id", this.GetClanAccountID().toString()),
            s.append("accountflags", JSON.stringify(n));
          let o = await T().post(r, s);
          o &&
            200 == o.status &&
            o.data.success == a.R &&
            (this.m_clanAccountFlags = i);
        }
      }
      (0, n.Cg)([R.sH], D.prototype, "m_appidList", void 0),
        (0, n.Cg)([R.sH], D.prototype, "m_nFollowers", void 0),
        (0, n.Cg)([R.sH], D.prototype, "m_clanAccountFlags", void 0);
      var F = r(96059),
        L = r(17720);
      class P {
        constructor() {
          (this.m_mapClanToCreatorHome = new Map()),
            (this.m_mapAppToCreatorIDList = new Map()),
            (this.m_bLoadedFromConfig = !1),
            (this.m_serviceTransport = void 0),
            (0, R.Gn)(this);
        }
        LazyInit() {
          if (!this.m_bLoadedFromConfig) {
            const e = (0, A.Tc)("creatorhome", "application_config");
            this.ValidateStoreDefault(e) &&
              e.forEach((e) => {
                const t = Number(e.creator_clan_id),
                  r = L.b.InitFromClanID(t),
                  i = new D(r);
                i.Initialize(e),
                  (i.m_promise = P.GetAsPromise(i)),
                  this.m_mapClanToCreatorHome.set(t, i);
              });
            const t = (0, A.Tc)("creatorhomeforapp", "application_config");
            this.ValidateStoreDefaultAppList(t) &&
              t.forEach((e) => {
                void 0 !== e.appid &&
                  (this.m_mapAppToCreatorIDList.has(e.appid) ||
                    this.m_mapAppToCreatorIDList.set(e.appid, new Array()),
                  this.m_mapAppToCreatorIDList.get(e.appid).push(e));
              }),
              (this.m_bLoadedFromConfig = !0);
          }
        }
        GetServiceTransport() {
          if (!this.m_serviceTransport) {
            const e = (0, A.Tc)("loyalty_webapi_token", "application_config"),
              t = new F.D(A.TS.WEBAPI_BASE_URL, e || void 0);
            this.m_serviceTransport = t.GetServiceTransport();
          }
          return this.m_serviceTransport;
        }
        static async GetAsPromise(e) {
          return e;
        }
        ValidateStoreDefault(e) {
          const t = e;
          return (
            !!(
              t &&
              Array.isArray(t) &&
              t.length > 0 &&
              "object" == typeof t[0]
            ) &&
            "string" == typeof t[0].name &&
            ("string" == typeof t[0].creator_clan_id ||
              "number" == typeof t[0].creator_clan_id)
          );
        }
        ValidateStoreDefaultAppList(e) {
          const t = e;
          return (
            !!(
              t &&
              Array.isArray(t) &&
              t.length > 0 &&
              "object" == typeof t[0]
            ) &&
            "number" == typeof t[0].clan_account_id &&
              t[0].clan_account_id > 0 &&
              "number" == typeof t[0].appid &&
            t[0].appid > 0
          );
        }
        BHasCreatorHomeLoaded(e) {
          return (
            this.m_mapClanToCreatorHome.has(e.GetAccountID()) &&
            this.m_mapClanToCreatorHome.get(e.GetAccountID()).BIsLoaded()
          );
        }
        GetCreatorHome(e) {
          return this.m_mapClanToCreatorHome.get(e.GetAccountID());
        }
        GetCreatorHomeByID(e) {
          return this.m_mapClanToCreatorHome.get(e.clan_account_id);
        }
        async LoadCreatorHome(e, t = !1, r) {
          if (
            (this.LazyInit(),
            t || !this.m_mapClanToCreatorHome.has(e.GetAccountID()))
          ) {
            let t = new D(e);
            (t.m_promise = this.InternalCreatorHome(t, r)),
              await t.m_promise,
              this.m_mapClanToCreatorHome.set(e.GetAccountID(), t);
          }
          return this.m_mapClanToCreatorHome.get(e.GetAccountID()).m_promise;
        }
        async InternalCreatorHome(e, t) {
          let r = { get_appids: !0, l: A.TS.LANGUAGE },
            i =
              A.TS.STORE_BASE_URL +
              "curator/" +
              e.GetClanAccountID() +
              "/ajaxgetcreatorhomeinfo",
            n = await T().get(i, { params: r, cancelToken: t && t.token });
          return e.Initialize(n.data), e;
        }
        async LoadCreatorHomeListForAppIncludeHiddden(e, t) {
          if ((this.LazyInit(), !this.m_mapAppToCreatorIDList.has(e))) {
            let r = { appid: e },
              i = A.TS.STORE_BASE_URL + "events/ajaxgetcreatorhomeidforapp",
              n = await T().get(i, {
                params: r,
                cancelToken: t && t.token,
                withCredentials: !0,
              });
            this.m_mapAppToCreatorIDList.set(e, n.data.creator_list);
          }
          return this.m_mapAppToCreatorIDList.get(e);
        }
        async SearchCreatorHomeStore(e, t, r) {
          let i = `${A.TS.STORE_BASE_URL}curator/0/ajaxsearchcurators`,
            n = {
              term: e.replace(" ", "+"),
              require_creator: t,
              cc: A.TS.COUNTRY,
              l: A.TS.LANGUAGE,
              origin: self.origin,
            },
            a = new Array();
          const s = await T().get(i, { params: n, cancelToken: r.token });
          return (
            s.data.curators &&
              (0, R.h5)(() => {
                s.data.curators.forEach((e) => {
                  if (!this.m_mapClanToCreatorHome.has(e.creator_clan_id)) {
                    let t = L.b.InitFromClanID(e.creator_clan_id),
                      r = new D(t);
                    r.Initialize(e),
                      this.m_mapClanToCreatorHome.set(e.creator_clan_id, r);
                  }
                  a.push(this.m_mapClanToCreatorHome.get(e.creator_clan_id));
                });
              }),
            a
          );
        }
        GetCreatorHomeListForAppIncludeHidden(e) {
          return this.m_mapAppToCreatorIDList.has(e)
            ? this.m_mapAppToCreatorIDList.get(e)
            : [];
        }
      }
      (0, n.Cg)([R.sH], P.prototype, "m_mapClanToCreatorHome", void 0),
        (0, n.Cg)([R.sH], P.prototype, "m_mapAppToCreatorIDList", void 0),
        (0, n.Cg)([R.XI], P.prototype, "LazyInit", null);
      const U = new P();
      function O(e) {
        var t, r;
        if (!e) return;
        const i = (0, A.Tc)("creator_home_list_info", "application_config");
        if (null == i || "object" != typeof i || Array.isArray(i)) return;
        const n = i[e];
        return n && n.title
          ? {
              title: n.title,
              description: (
                null === (t = n.description) || void 0 === t
                  ? void 0
                  : t.length
              )
                ? n.description
                : void 0,
              imageUrl: (
                null === (r = n.listtileimage) || void 0 === r
                  ? void 0
                  : r.length
              )
                ? n.listtileimage
                : void 0,
            }
          : void 0;
      }
      function E(e) {
        var t;
        return null === (t = O(e)) || void 0 === t ? void 0 : t.title;
      }
      function j(e) {
        var t;
        return null === (t = O(e)) || void 0 === t ? void 0 : t.description;
      }
      function W(e) {
        var t;
        return null === (t = O(e)) || void 0 === t ? void 0 : t.imageUrl;
      }
      function q(e) {
        const t = L.b.InitFromClanID(e);
        return {
          queryKey: ["CreatorHome", e],
          initialData: () => U.GetCreatorHome(t),
          queryFn: async () => {
            const t = L.b.InitFromClanID(e);
            return await U.LoadCreatorHome(t, !0);
          },
        };
      }
      function H(e) {
        const { data: t, isFetching: r, refetch: i } = (0, C.I)(q(e));
        return { creatorHome: t, isFetching: r, refetch: i };
      }
      function V(e, t, r) {
        return {
          queryKey: ["GetCreatorHomeListAppsQuery", e, t, r],
          queryFn: async () => {
            const n = U.GetServiceTransport(),
              s = o.w.Init(b);
            s.Body().set_clan_account_id(e),
              s.Body().set_listid(t),
              r && s.Body().set_ignore_dlc(!0);
            const l = await i.GetDevPageListApps(n, s);
            if (l.GetEResult() != a.R)
              throw new Error(
                `Error from GetCreatorHomeListAppsQuery: ${l.GetEResult()}`,
              );
            return l
              .Body()
              .apps()
              .slice()
              .sort((e, t) => {
                var r, i;
                return (
                  (null !== (r = e.sort_order()) && void 0 !== r ? r : 0) -
                  (null !== (i = t.sort_order()) && void 0 !== i ? i : 0)
                );
              })
              .map((e) => {
                var t;
                return null !== (t = e.appid()) && void 0 !== t ? t : 0;
              })
              .filter((e) => e > 0);
          },
          enabled: Boolean(e > 0 && t),
        };
      }
      function N(e, t, r) {
        const i = (0, C.I)(V(e, t, r));
        return (null == i ? void 0 : i.isLoading) ? null : i.data;
      }
      function x(e, t) {
        return {
          queryKey: ["GetCreatorHomeGetAllListsQuery", e, t],
          queryFn: async () => {
            const r = U.GetServiceTransport(),
              i = o.w.Init(M.eh);
            i
              .Body()
              .set_steamid(
                new L.b(e, A.TS.EUNIVERSE, s.P3F, 0).ConvertTo64BitString(),
              ),
              i.Body().set_count(100);
            const n = await M.K_.GetLists(r, i);
            return n.BSuccess()
              ? n
                  .Body()
                  .list_details()
                  .filter((e) => t || e.list_state() != M.eb.N0)
              : null;
          },
          enabled: e > 0,
        };
      }
      function k(e, t) {
        const { data: r, isFetching: i, refetch: n } = (0, C.I)(x(e, t));
        return { lists: r, isFetching: i, refetch: n };
      }
      function K(e, t) {
        return {
          queryKey: ["GetCreatorHomeGetListsDetailsQuery", e, t],
          queryFn: async () => {
            var r;
            const i = U.GetServiceTransport(),
              n = o.w.Init(M.dU);
            n
              .Body()
              .set_steamid(
                new L.b(e, A.TS.EUNIVERSE, s.P3F, 0).ConvertTo64BitString(),
              ),
              n.Body().set_listid(t);
            const a = await M.K_.GetListDetails(i, n);
            return a.BSuccess() &&
              null !== (r = a.Body().list_details()) &&
              void 0 !== r
              ? r
              : null;
          },
          enabled: e > 0,
        };
      }
      window.g_CreatorHomeStore = U;
    },
    82429: (e, t, r) => {
      r.d(t, { Ec: () => f, KN: () => b, Nh: () => i });
      var i,
        n = r(34629),
        a = r(37085),
        s = r(33688),
        o = r(56545),
        l = r(43261),
        m = r(41735),
        c = r.n(m),
        u = r(14947),
        d = r(90626),
        p = r(17720),
        _ = r(26161),
        g = r(81393),
        y = r(68797),
        h = r(78327);
      class B {
        constructor(e) {
          (this.clanid = void 0),
            (this.appid = 0),
            (this.can_edit = !1),
            (this.owns_app = !1),
            (this.follows_app = !1),
            (this.support_user = !1),
            (this.valve_admin = !1),
            (this.limited_user = !1),
            (this.event_ignored = new Array()),
            (this.event_followed = new Array()),
            (this.event_followed_flags = new Array()),
            (0, u.Gn)(this),
            (this.clanid = e);
        }
      }
      (0, n.Cg)([u.sH], B.prototype, "clanid", void 0),
        (0, n.Cg)([u.sH], B.prototype, "appid", void 0),
        (0, n.Cg)([u.sH], B.prototype, "can_edit", void 0),
        (0, n.Cg)([u.sH], B.prototype, "owns_app", void 0),
        (0, n.Cg)([u.sH], B.prototype, "follows_app", void 0),
        (0, n.Cg)([u.sH], B.prototype, "support_user", void 0),
        (0, n.Cg)([u.sH], B.prototype, "valve_admin", void 0),
        (0, n.Cg)([u.sH], B.prototype, "limited_user", void 0),
        (0, n.Cg)([u.sH], B.prototype, "event_ignored", void 0),
        (0, n.Cg)([u.sH], B.prototype, "event_followed", void 0),
        (0, n.Cg)([u.sH], B.prototype, "event_followed_flags", void 0),
        (function (e) {
          (e[(e.k_ENotifyFlagNone = 0)] = "k_ENotifyFlagNone"),
            (e[(e.k_ENotifyFlagByEmail = 1)] = "k_ENotifyFlagByEmail"),
            (e[(e.k_ENotifyFlagByPush = 2)] = "k_ENotifyFlagByPush");
        })(i || (i = {}));
      class b {
        constructor() {
          (this.m_mapClanToUserPermissions = new Map()),
            (this.m_mapAnnounceGIDToVote = new Map()),
            (this.m_setReadEventGIDs = new Set()),
            (this.m_tracker = void 0),
            (this.m_cm = void 0),
            (this.m_bIsPresentationMode = (0, h.Bu)()),
            (0, u.Gn)(this);
        }
        static Get() {
          return (
            (0, g.wT)(
              !!b.s_EventUserStore,
              "Have not yet initialized global EventUserStore",
            ),
            b.s_EventUserStore
          );
        }
        static IsInitialized() {
          return !!b.s_EventUserStore;
        }
        static async InitGlobal(e) {
          if (!b.s_EventUserStore) {
            const t = new b();
            await t.Init(e),
              (b.s_EventUserStore = t),
              "dev" == h.TS.WEB_UNIVERSE && (window.g_EventUserStore = t);
          }
        }
        static BIsInited() {
          return Boolean(b.s_EventUserStore);
        }
        async Init(e) {
          (this.m_cm = e), (this.m_tracker = new s.e(e));
          const t = (0, h.Fd)("partnereventpermissions", "application_config");
          this.ValidateStoreDefault(t) &&
            ((0, u.h5)(() => {
              t.forEach((e) => {
                let t = new B(e.clanid),
                  r = { result: t, promise: b.RemapToPromise(t), bLoaded: !0 };
                this.CopyFromResponseToTrack(r, e),
                  this.m_mapClanToUserPermissions.set(e.clanid, r);
              });
            }),
            ("dev" != h.TS.WEB_UNIVERSE && "beta" != h.TS.WEB_UNIVERSE) ||
              console.log(
                "CEventUserStore has loaded",
                this.m_mapClanToUserPermissions.size,
                this.m_mapClanToUserPermissions,
              ));
          let r = (0, h.Fd)("uservotes", "application_config");
          r &&
            (0, u.h5)(() => {
              r.forEach((e) => {
                let t = !!e.voted_up || (!e.voted_down && void 0);
                this.m_mapAnnounceGIDToVote.set(e.clanAnnouncementGID, t);
              });
            });
        }
        GetTracker() {
          return this.m_tracker;
        }
        ValidateStoreDefault(e) {
          const t = e;
          return (
            !!(
              t &&
              Array.isArray(t) &&
              t.length > 0 &&
              "object" == typeof t[0]
            ) &&
            "number" == typeof t[0].clanid &&
            "number" == typeof t[0].appid
          );
        }
        RecordEventShown(e, t) {
          e &&
            !e.bOldAnnouncement &&
            e.GID &&
            this.m_tracker.MarkEventShown(
              e.GID,
              e.clanSteamID.GetAccountID(),
              t,
            );
        }
        RecordEventRead(e, t) {
          e &&
            !e.bOldAnnouncement &&
            e.GID &&
            (this.HasEventBeenRead(e.GID) ||
              (this.SetEventAsRead(e.GID),
              this.m_tracker.MarkEventRead(
                e.GID,
                e.clanSteamID.GetAccountID(),
                t,
              )));
        }
        SetEventAsRead(e) {
          this.m_setReadEventGIDs.add(e);
        }
        HasEventBeenRead(e) {
          return this.m_setReadEventGIDs.has(e);
        }
        static async RemapToPromise(e) {
          return e;
        }
        BIsUserLoggedIn() {
          return h.iA.logged_in;
        }
        BIsPartnerEventPermissionsLoaded(e) {
          return (
            this.m_mapClanToUserPermissions.has(e) &&
            this.m_mapClanToUserPermissions.get(e).bLoaded
          );
        }
        GetPartnerEventPermissions(e) {
          if (!e || !e.BIsValid()) return new B(0);
          const t = e.GetAccountID();
          this.m_mapClanToUserPermissions.has(t) ||
            this.LoadSingleAppEventPermissions(e);
          return this.m_mapClanToUserPermissions.get(t).result;
        }
        BFollowsEvent(e, t) {
          return (
            -1 != this.GetPartnerEventPermissions(e).event_followed.indexOf(t)
          );
        }
        BFollowsEventAndNotifiedBy(e, t, r) {
          let i = this.GetPartnerEventPermissions(e),
            n = i.event_followed.indexOf(t);
          return -1 !== n && (i.event_followed_flags[n] & r) == r;
        }
        BIgnoresEvent(e, t) {
          return (
            -1 != this.GetPartnerEventPermissions(e).event_ignored.indexOf(t)
          );
        }
        async LoadSingleAppEventPermissions(e) {
          let t = e.GetAccountID(),
            r = this.m_mapClanToUserPermissions.get(t);
          return (
            r ||
              ((r = {
                promise: this.InternalLoadSingleAppEventPermissions(e),
                result: new B(t),
                bLoaded: !1,
              }),
              this.m_mapClanToUserPermissions.set(t, r)),
            r.promise
          );
        }
        CopyFromResponseToTrack(e, t) {
          var r, i, n, a;
          (e.result.appid = null !== (r = t.appid) && void 0 !== r ? r : 0),
            (e.result.can_edit = !!t.can_edit),
            (e.result.clanid = t.appid),
            (e.result.event_followed =
              null !== (i = t.event_followed) && void 0 !== i ? i : []),
            (e.result.event_ignored =
              null !== (n = t.event_ignored) && void 0 !== n ? n : []),
            (e.result.event_followed_flags =
              null !== (a = t.event_followed_flags) && void 0 !== a ? a : []),
            (e.result.follows_app = !!t.follows_app),
            (e.result.owns_app = !!t.owns_app),
            (e.result.limited_user = !!t.limited_user),
            (t.support_user || t.valve_admin) && this.m_bIsPresentationMode
              ? ((e.result.can_edit = !0),
                (e.result.support_user = !1),
                (e.result.valve_admin = !1))
              : ((e.result.support_user = !!t.support_user),
                (e.result.valve_admin = !!t.valve_admin)),
            (e.bLoaded = !0);
        }
        async InternalLoadSingleAppEventPermissions(e) {
          let t = null,
            r = e.GetAccountID(),
            i = !Boolean(h.iA.logged_in);
          if (!this.m_mapClanToUserPermissions.has(r)) {
            let t = new B(e.GetAccountID());
            this.m_mapClanToUserPermissions.set(r, {
              result: t,
              promise: b.RemapToPromise(t),
              bLoaded: !1,
            });
          }
          try {
            if (Boolean(h.iA.logged_in)) {
              let n =
                  h.TS.COMMUNITY_BASE_URL +
                  "gid/" +
                  e.ConvertTo64BitString() +
                  "/ajaxgetpartnereventpermissions/",
                s = {};
              if (
                ("partnerweb" == (0, h.yK)()
                  ? ((n =
                      h.TS.PARTNER_BASE_URL +
                      "partnerevents/ajaxgetpartnereventpermissions"),
                    (s = { clanaccountid: e.GetAccountID() }))
                  : "store" == (0, h.yK)() &&
                    ((n =
                      h.TS.STORE_BASE_URL +
                      "events/ajaxgetpartnereventpermissions"),
                    (s = { clanaccountid: e.GetAccountID() })),
                (t = await c().get(n, { params: s, withCredentials: !0 })),
                t && t.data.success == a.R)
              ) {
                let e = this.m_mapClanToUserPermissions.get(r);
                e && this.CopyFromResponseToTrack(e, t.data);
              } else
                console.error(
                  "Partner Events Failed Load:" +
                    (0, y.H)(null == t ? void 0 : t.data).strErrorMsg,
                ),
                  (i = !0);
            }
          } catch (e) {
            if (
              ((t = e.response),
              (i = !0),
              e &&
                void 0 !== e.response &&
                void 0 !== e.response.data &&
                void 0 !== e.response.data.success &&
                e.response.data.success == a.Dy)
            );
            else {
              const t = (0, y.H)(e);
              console.error(
                "InternalLoadSingleAppEventPermissions account: " +
                  r +
                  ": " +
                  t.strErrorMsg,
                t,
              );
            }
          } finally {
            i &&
              (0, u.h5)(() => {
                var e;
                let i = this.m_mapClanToUserPermissions.get(r);
                (i.result.appid =
                  null !== (e = null == t ? void 0 : t.data.appid) &&
                  void 0 !== e
                    ? e
                    : 0),
                  (i.result.can_edit = !1),
                  (i.result.clanid = t && t.data ? t.data.clanid : 0),
                  (i.result.event_followed = new Array()),
                  (i.result.event_ignored = new Array()),
                  (i.result.event_followed_flags = new Array()),
                  (i.result.follows_app = !1),
                  (i.result.owns_app = !1),
                  (i.result.support_user = !1),
                  (i.result.valve_admin = !1),
                  (i.result.limited_user = !1),
                  (i.bLoaded = !0);
              });
          }
          return this.m_mapClanToUserPermissions.get(r).result;
        }
        async SetFollowOrUnfollowEvent(e, t, r, i, n) {
          let a = this.GetPartnerEventPermissions(r),
            s = a.event_followed.indexOf(i),
            o = 0;
          -1 !== s &&
            ((o = a.event_followed_flags[s]), e ? (n = o & ~n) : (n |= o));
          let l = 0 == n,
            m =
              ("store" === (0, h.yK)()
                ? h.TS.STORE_BASE_URL + "events"
                : h.TS.COMMUNITY_BASE_URL +
                  "/gid/" +
                  r.ConvertTo64BitString()) +
              (l ? "/unfolloworunignoreevent" : "/followorignoreevent"),
            d = new URLSearchParams();
          d.append("sessionid", (0, h.KC)()),
            d.append("ignore", "" + t),
            d.append("gid", i),
            d.append("notification_flag", "" + n),
            d.append("clan_accountid", "" + r.GetAccountID());
          await c().post(m, d, { withCredentials: !0 });
          (0, u.h5)(() => {
            let e = this.m_mapClanToUserPermissions.get(r.GetAccountID()),
              a = null,
              s = null,
              o = null,
              m = null;
            l
              ? ((a = t ? e.result.event_ignored : e.result.event_followed),
                (o = t ? null : e.result.event_followed_flags))
              : t
                ? ((a = e.result.event_followed),
                  (o = e.result.event_followed_flags),
                  (s = e.result.event_ignored))
                : ((a = e.result.event_ignored),
                  (s = e.result.event_followed),
                  (m = e.result.event_followed_flags));
            let c = a.indexOf(i);
            if ((c > -1 && (a.splice(c, 1), o && o.splice(c, 1)), s)) {
              let e = s.indexOf(i);
              -1 == e ? (s.push(i), m && m.push(n)) : m && (m[e] = n);
            }
          });
        }
        async Vote(e, t, r) {
          if (!e || !e.AnnouncementGID) return !1;
          const i = this.m_mapAnnounceGIDToVote.get(e.AnnouncementGID);
          if (i === t) return !0;
          if (
            (this.m_mapAnnounceGIDToVote.set(e.AnnouncementGID, t),
            (0, u.h5)(() => {
              !0 === i && e.UpdateVoteCount("up", -1),
                !1 === i && e.UpdateVoteCount("down", -1),
                !0 === t && e.UpdateVoteCount("up", 1),
                !1 === t && e.UpdateVoteCount("down", 1);
            }),
            this.m_cm)
          ) {
            let r = o.w.Init(l.QU);
            return (
              r.Body().set_announcementid(e.AnnouncementGID),
              r.Body().set_vote_up(!!t),
              r.Body().set_clan_accountid(e.clanSteamID.GetAccountID()),
              (
                await l.BE.RateClanAnnouncement(
                  this.m_cm.GetServiceTransport(),
                  r,
                )
              ).GetEResult() == a.R
            );
          }
          {
            const i = (0, h.yK)(),
              n =
                "community" == i || "steamtv" == i
                  ? h.TS.COMMUNITY_BASE_URL +
                    "gid/" +
                    e.clanSteamID.ConvertTo64BitString() +
                    "/announcements/rate/" +
                    e.AnnouncementGID
                  : h.TS.STORE_BASE_URL +
                    "updated/ajaxrateupdate/" +
                    e.AnnouncementGID,
              s = new URLSearchParams();
            s.append("sessionid", (0, h.KC)()),
              s.append("voteup", t ? "1" : "0"),
              s.append("clanid", "" + e.clanSteamID.GetAccountID()),
              s.append("ajax", "1");
            const o = { withCredentials: !0, cancelToken: r.token };
            return (await c().post(n, s, o)).data.success == a.R;
          }
        }
        async LoadMyVote(e, t) {
          if (null == e ? void 0 : e.AnnouncementGID) {
            if (this.m_mapAnnounceGIDToVote.has(e.AnnouncementGID))
              return !!this.m_mapAnnounceGIDToVote.get(e.AnnouncementGID);
            let r;
            if (this.m_cm) {
              let t = o.w.Init(l.$Y);
              t.Body().set_announcementid(e.AnnouncementGID);
              let i = await l.BE.GetClanAnnouncementVoteForUser(
                this.m_cm.GetServiceTransport(),
                t,
              );
              i.GetEResult() == a.R &&
                (r =
                  !!i.Body().voted_up() || (!i.Body().voted_down() && void 0));
            } else {
              const i = "store" == (0, h.yK)(),
                n = i
                  ? h.TS.STORE_BASE_URL + "actions/ajaxgetmyannouncementvote"
                  : h.TS.COMMUNITY_BASE_URL +
                    "gid/" +
                    e.clanSteamID.ConvertTo64BitString() +
                    "/announcements/ajaxgetmyvote/" +
                    e.AnnouncementGID,
                a = { gid: i ? e.AnnouncementGID : void 0 },
                s = await c().get(n, {
                  withCredentials: !0,
                  cancelToken: t.token,
                  params: a,
                });
              r = !!s.data.voted_up || (!s.data.voted_down && void 0);
            }
            return this.m_mapAnnounceGIDToVote.set(e.AnnouncementGID, r), r;
          }
        }
        SetVote(e, t) {
          this.m_mapAnnounceGIDToVote.set(e, t);
        }
        BHasMyVote(e) {
          return (
            !!e.AnnouncementGID &&
            this.m_mapAnnounceGIDToVote.has(e.AnnouncementGID)
          );
        }
        GetPreviouslyLoadedVote(e) {
          return e.AnnouncementGID
            ? this.m_mapAnnounceGIDToVote.get(e.AnnouncementGID)
            : void 0;
        }
        BShowEmailEditorTab(e) {
          if (e.BHasEmailEnabled()) return !0;
          if (e.clanSteamID.GetAccountID() == (0, _.H)()) return !0;
          let t = this.GetPartnerEventPermissions(e.clanSteamID);
          return (h.UF.IS_OGG || h.UF.IS_VALVE_GROUP) && t.valve_admin;
        }
      }
      function f(e) {
        const [t, r] = (0, d.useState)(
            b.Get().BIsPartnerEventPermissionsLoaded(e),
          ),
          i = p.b.InitFromClanID(e),
          [n, a] = (0, d.useState)(b.Get().GetPartnerEventPermissions(i));
        return (
          (0, d.useEffect)(() => {
            if (!t) {
              const t = p.b.InitFromClanID(e);
              b.Get()
                .LoadSingleAppEventPermissions(t)
                .then((e) => {
                  a(e), r(!0);
                });
            }
          }, [t, e]),
          n
        );
      }
      (0, n.Cg)([u.sH], b.prototype, "m_mapClanToUserPermissions", void 0),
        (0, n.Cg)([u.sH], b.prototype, "m_mapAnnounceGIDToVote", void 0),
        (0, n.Cg)([u.sH], b.prototype, "m_setReadEventGIDs", void 0),
        (0, n.Cg)([u.XI], b.prototype, "CopyFromResponseToTrack", null);
    },
    26161: (e, t, r) => {
      r.d(t, { H: () => a });
      var i = r(22837),
        n = r(30470);
      const a = () => (n.TS.EUNIVERSE === i.Rv ? 2581 : 45267781);
    },
  },
]);
