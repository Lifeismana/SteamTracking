/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [1810],
  {
    99164: (e, t, r) => {
      r.d(t, {
        Qi: () => be,
        v5: () => le,
        Mw: () => ne,
        a9: () => U,
        KD: () => Q,
        LW: () => ae,
        Nr: () => Be,
        f0: () => O,
        ps: () => we,
        fL: () => Se,
        ZQ: () => i,
        UC: () => te,
      });
      var i = {};
      r.r(i),
        r.d(i, {
          WI: () => c,
          Si: () => B,
          xX: () => m,
          qy: () => d,
          hj: () => l,
          O0: () => u,
        });
      var n = r(80613),
        s = r.n(n),
        a = r(89068),
        o = r(56545);
      const l = 1,
        u = 2,
        c = 3,
        m = 4,
        d = 5,
        B = 6;
      class g extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.data || a.Sg(g.M()),
            n.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: { data: { n: 1, c: b, r: !0, q: !0 } },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = a.w0(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(g.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "AdditionalSubjectData";
        }
      }
      class b extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.key || a.Sg(b.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  key: { n: 1, br: a.qM.readString, bw: a.gp.writeString },
                  value: { n: 2, br: a.qM.readString, bw: a.gp.writeString },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = a.w0(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(b.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "AdditionalSubjectData_DataEntry";
        }
      }
      class M extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.steamid || a.Sg(M.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                  start: { n: 2, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                  count: { n: 3, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = a.w0(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(M.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetReportsSubmittedByUser_Request";
        }
      }
      class y extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.report_id || a.Sg(y.M()),
            n.Message.initialize(this, e, 0, -1, [23, 24], null);
        }
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  report_id: {
                    n: 1,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                  reporter_steamid: {
                    n: 2,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                  time_reported: {
                    n: 3,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  report_reason: {
                    n: 4,
                    br: a.qM.readEnum,
                    bw: a.gp.writeEnum,
                  },
                  report_text: {
                    n: 5,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                  subject_type: { n: 6, br: a.qM.readEnum, bw: a.gp.writeEnum },
                  subject_group_id: {
                    n: 7,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                  subject_id: {
                    n: 8,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                  resolved: { n: 9, br: a.qM.readEnum, bw: a.gp.writeEnum },
                  time_resolved: {
                    n: 10,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  resolver_steamid: {
                    n: 11,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                  time_notified: {
                    n: 12,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  additional_subject_data: { n: 13, c: g },
                  time_disputed: {
                    n: 14,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  dispute_details: {
                    n: 15,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                  dispute_resolver_steamid: {
                    n: 16,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                  dispute_resolved: {
                    n: 17,
                    br: a.qM.readEnum,
                    bw: a.gp.writeEnum,
                  },
                  time_dispute_resolved: {
                    n: 18,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  detected_by_automation: {
                    n: 19,
                    d: !1,
                    br: a.qM.readBool,
                    bw: a.gp.writeBool,
                  },
                  resolved_by_automation: {
                    n: 20,
                    d: 0,
                    br: a.qM.readEnum,
                    bw: a.gp.writeEnum,
                  },
                  content_moderated_reason: {
                    n: 21,
                    br: a.qM.readEnum,
                    bw: a.gp.writeEnum,
                  },
                  dispute_resolved_reason: {
                    n: 22,
                    br: a.qM.readEnum,
                    bw: a.gp.writeEnum,
                  },
                  sanctions_applied: { n: 23, c: R, r: !0, q: !0 },
                  sanctions_applied_on_dispute: { n: 24, c: R, r: !0, q: !0 },
                  reported_content_id: {
                    n: 25,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                  coordinates: { n: 26, c: te },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = a.w0(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(y.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ContentReport";
        }
      }
      class _ extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.content_report || a.Sg(_.M()),
            n.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  content_report: { n: 1, c: y, r: !0, q: !0 },
                  total_count: {
                    n: 2,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = a.w0(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(_.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetReportsSubmittedByUser_Response";
        }
      }
      class w extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.steamid || a.Sg(w.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                  subject_type: { n: 2, br: a.qM.readEnum, bw: a.gp.writeEnum },
                  subject_group_id: {
                    n: 3,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                  subject_id: {
                    n: 4,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                  reported_content_id: {
                    n: 5,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = a.w0(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(w.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetOneReportSubmittedByUser_Request";
        }
      }
      class p extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.content_report || a.Sg(p.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: { content_report: { n: 1, c: y } },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = a.w0(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(p.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetOneReportSubmittedByUser_Response";
        }
      }
      class z extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.steamid || a.Sg(z.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = a.w0(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(z.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetReportedSubjectsByOwner_Request";
        }
      }
      class f extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.subject_type || a.Sg(f.M()),
            n.Message.initialize(this, e, 0, -1, [13, 31, 32], null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  subject_type: { n: 1, br: a.qM.readEnum, bw: a.gp.writeEnum },
                  subject_group_id: {
                    n: 2,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                  subject_id: {
                    n: 3,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                  owner_steam_id: {
                    n: 4,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                  language: { n: 5, br: a.qM.readInt32, bw: a.gp.writeInt32 },
                  resolved: { n: 6, br: a.qM.readEnum, bw: a.gp.writeEnum },
                  time_resolved: {
                    n: 7,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  unresolved_report_count: {
                    n: 8,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  oldest_unresolved_report_time: {
                    n: 9,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  resolver_steamid: {
                    n: 10,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                  assigned_moderator_steamid: {
                    n: 11,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                  time_claimed_by_moderator: {
                    n: 12,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                  reports: { n: 13, c: y, r: !0, q: !0 },
                  additional_subject_data: { n: 14, c: g },
                  csam_status: { n: 15, br: a.qM.readEnum, bw: a.gp.writeEnum },
                  terrorism_status: {
                    n: 16,
                    br: a.qM.readEnum,
                    bw: a.gp.writeEnum,
                  },
                  content_moderated_reason: {
                    n: 17,
                    br: a.qM.readEnum,
                    bw: a.gp.writeEnum,
                  },
                  unresolved_dispute_count: {
                    n: 18,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  oldest_unresolved_dispute_time: {
                    n: 19,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  owner_dispute_time: {
                    n: 24,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  owner_dispute_resolved_time: {
                    n: 25,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  owner_dispute_details: {
                    n: 26,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                  required_moderator_level: {
                    n: 27,
                    br: a.qM.readEnum,
                    bw: a.gp.writeEnum,
                  },
                  resolved_by_automation: {
                    n: 28,
                    d: 0,
                    br: a.qM.readEnum,
                    bw: a.gp.writeEnum,
                  },
                  detected_by_automation: {
                    n: 29,
                    d: !1,
                    br: a.qM.readBool,
                    bw: a.gp.writeBool,
                  },
                  credible_threat_of_violence_status: {
                    n: 30,
                    br: a.qM.readEnum,
                    bw: a.gp.writeEnum,
                  },
                  sanctions_applied: { n: 31, c: R, r: !0, q: !0 },
                  sanctions_applied_after_dispute: {
                    n: 32,
                    c: R,
                    r: !0,
                    q: !0,
                  },
                  decision_reversed: {
                    n: 33,
                    br: a.qM.readBool,
                    bw: a.gp.writeBool,
                  },
                  reported_content_id: {
                    n: 34,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                  coordinates: { n: 35, c: te },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = a.w0(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(f.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ContentReportSubject";
        }
      }
      class S extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.subject || a.Sg(S.M()),
            n.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: { subject: { n: 1, c: f, r: !0, q: !0 } },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = a.w0(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(S.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetReportedSubjectsByOwner_Response";
        }
      }
      class R extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.sanction || a.Sg(R.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  sanction: { n: 1, br: a.qM.readEnum, bw: a.gp.writeEnum },
                  days: { n: 2, br: a.qM.readInt32, bw: a.gp.writeInt32 },
                  escalate_to: { n: 3, br: a.qM.readEnum, bw: a.gp.writeEnum },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = a.w0(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(R.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(R.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ContentReportSubjectSanction";
        }
      }
      class j extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new j();
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new j();
          return j.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetSubjectOverview_Request";
        }
      }
      class W extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.buckets || a.Sg(W.M()),
            n.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  buckets: { n: 1, c: h, r: !0, q: !0 },
                  pending_for_any_moderator: {
                    n: 2,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  pending_for_supervisor: {
                    n: 3,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  pending_for_valve: {
                    n: 4,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = a.w0(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(W.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(W.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new W();
          return W.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(W.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(W.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetSubjectOverview_Response";
        }
      }
      class h extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.subject_type || a.Sg(h.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  subject_type: { n: 1, br: a.qM.readEnum, bw: a.gp.writeEnum },
                  unresolved_count: {
                    n: 2,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  oldest_unresolved: {
                    n: 3,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  unclaimed_count: {
                    n: 4,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  oldest_disputed: {
                    n: 5,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  disputed_count: {
                    n: 6,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  unclaimed_disputed_count: {
                    n: 7,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  pending_for_any_moderator: {
                    n: 8,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  pending_for_supervisor: {
                    n: 9,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  pending_for_valve: {
                    n: 10,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  oldest_unresolved_for_any_moderator: {
                    n: 11,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  oldest_unresolved_for_supervisor: {
                    n: 12,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  oldest_unresolved_for_valve: {
                    n: 13,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = a.w0(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(h.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetSubjectOverview_Response_Bucket";
        }
      }
      class v extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.subject_type || a.Sg(v.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  subject_type: { n: 1, br: a.qM.readEnum, bw: a.gp.writeEnum },
                  subject_group_id: {
                    n: 2,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                  subject_id: {
                    n: 3,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                  reported_content_id: {
                    n: 4,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = a.w0(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(v.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ContentReportSubjectKey";
        }
      }
      class O extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.steamid || a.Sg(O.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.qM.readFixed64String,
                    bw: a.gp.writeFixed64String,
                  },
                  rtime_cooldown_ends: {
                    n: 2,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  acquit_unresolved_reports: {
                    n: 3,
                    br: a.qM.readBool,
                    bw: a.gp.writeBool,
                  },
                },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = a.w0(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(O.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(O.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new O();
          return O.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(O.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(O.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_UpdateReporterCooldown_Request";
        }
      }
      class q extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new q();
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new q();
          return q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_UpdateReporterCooldown_Response";
        }
      }
      class U extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            U.prototype.steamid || a.Sg(U.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.qM.readFixed64String,
                    bw: a.gp.writeFixed64String,
                  },
                },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = a.w0(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(U.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(U.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new U();
          return U.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(U.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(U.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetReporterCooldown_Request";
        }
      }
      class T extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.rtime_cooldown_ends || a.Sg(T.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  rtime_cooldown_ends: {
                    n: 1,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = a.w0(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(T.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(T.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new T();
          return T.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetReporterCooldown_Response";
        }
      }
      class C extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.steamid || a.Sg(C.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.qM.readFixed64String,
                    bw: a.gp.writeFixed64String,
                  },
                },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = a.w0(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(C.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(C.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(C.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(C.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetModeratorPreferences_Request";
        }
      }
      class F extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.preferred_level || a.Sg(F.M()),
            n.Message.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  preferred_level: {
                    n: 1,
                    br: a.qM.readEnum,
                    bw: a.gp.writeEnum,
                  },
                  enabled_subject_types: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: a.qM.readEnum,
                    pbr: a.qM.readPackedEnum,
                    bw: a.gp.writeRepeatedEnum,
                  },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = a.w0(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(F.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(F.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(F.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(F.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetModeratorPreferences_Response";
        }
      }
      class I extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.preferred_level || a.Sg(I.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  preferred_level: {
                    n: 1,
                    br: a.qM.readEnum,
                    bw: a.gp.writeEnum,
                  },
                  enabled_subject_types: { n: 2, c: E },
                },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = a.w0(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(I.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(I.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new I();
          return I.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_SetModeratorPreferences_Request";
        }
      }
      class E extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            E.prototype.subject_types || a.Sg(E.M()),
            n.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  subject_types: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: a.qM.readEnum,
                    pbr: a.qM.readPackedEnum,
                    bw: a.gp.writeRepeatedEnum,
                  },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = a.w0(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(E.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(E.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new E();
          return E.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(E.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(E.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_SetModeratorPreferences_Request_SubjectTypeList";
        }
      }
      class x extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new x();
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new x();
          return x.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_SetModeratorPreferences_Response";
        }
      }
      class N extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            N.prototype.steamid || a.Sg(N.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            N.sm_m ||
              (N.sm_m = {
                proto: N,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.qM.readFixed64String,
                    bw: a.gp.writeFixed64String,
                  },
                  rt_start: { n: 2, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                },
              }),
            N.sm_m
          );
        }
        static MBF() {
          return N.sm_mbf || (N.sm_mbf = a.w0(N.M())), N.sm_mbf;
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(N.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(N.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new N();
          return N.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(N.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(N.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetModeratorActivity_Request";
        }
      }
      class G extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            G.prototype.activities || a.Sg(G.M()),
            n.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: { activities: { n: 1, c: D, r: !0, q: !0 } },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = a.w0(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(G.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(G.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new G();
          return G.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(G.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(G.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetModeratorActivity_Response";
        }
      }
      class D extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            D.prototype.subject_type || a.Sg(D.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: {
                  subject_type: { n: 1, br: a.qM.readEnum, bw: a.gp.writeEnum },
                  subject_group_id: {
                    n: 2,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                  subject_id: {
                    n: 3,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                  timestamp: {
                    n: 4,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  action: { n: 5, br: a.qM.readEnum, bw: a.gp.writeEnum },
                  json_data: {
                    n: 6,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                  reported_content_id: {
                    n: 7,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                },
              }),
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = a.w0(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(D.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(D.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new D();
          return D.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(D.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(D.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetModeratorActivity_Response_ModerationActivity";
        }
      }
      class P extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            P.prototype.rtime_start_date || a.Sg(P.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: {
                  rtime_start_date: {
                    n: 1,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  rtime_end_date: {
                    n: 2,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  subject_type: { n: 3, br: a.qM.readEnum, bw: a.gp.writeEnum },
                },
              }),
            P.sm_m
          );
        }
        static MBF() {
          return P.sm_mbf || (P.sm_mbf = a.w0(P.M())), P.sm_mbf;
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(P.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(P.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new P();
          return P.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(P.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(P.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetDailyModerationStatistics_Request";
        }
      }
      class A extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            A.prototype.stats || a.Sg(A.M()),
            n.Message.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: { stats: { n: 2, c: k, r: !0, q: !0 } },
              }),
            A.sm_m
          );
        }
        static MBF() {
          return A.sm_mbf || (A.sm_mbf = a.w0(A.M())), A.sm_mbf;
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(A.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(A.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new A();
          return A.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(A.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(A.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetDailyModerationStatistics_Response";
        }
      }
      class k extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            k.prototype.rtime_date || a.Sg(k.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
                fields: {
                  rtime_date: {
                    n: 1,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  times_unresolved: {
                    n: 2,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  times_resolved: {
                    n: 3,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                },
              }),
            k.sm_m
          );
        }
        static MBF() {
          return k.sm_mbf || (k.sm_mbf = a.w0(k.M())), k.sm_mbf;
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(k.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(k.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new k();
          return k.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(k.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(k.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetDailyModerationStatistics_Response_DayStatistics";
        }
      }
      class L extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            L.prototype.subject_type || a.Sg(L.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
                fields: {
                  subject_type: { n: 1, br: a.qM.readEnum, bw: a.gp.writeEnum },
                  count: { n: 2, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                },
              }),
            L.sm_m
          );
        }
        static MBF() {
          return L.sm_mbf || (L.sm_mbf = a.w0(L.M())), L.sm_mbf;
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(L.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(L.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new L();
          return L.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(L.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(L.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetOldestUnresolvedSubjects_Request";
        }
      }
      class $ extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $.prototype.subjects || a.Sg($.M()),
            n.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            $.sm_m ||
              ($.sm_m = {
                proto: $,
                fields: { subjects: { n: 1, c: K, r: !0, q: !0 } },
              }),
            $.sm_m
          );
        }
        static MBF() {
          return $.sm_mbf || ($.sm_mbf = a.w0($.M())), $.sm_mbf;
        }
        toObject(e = !1) {
          return $.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT($.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq($.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new $();
          return $.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj($.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0($.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetOldestUnresolvedSubjects_Response";
        }
      }
      class K extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            K.prototype.subject_type || a.Sg(K.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            K.sm_m ||
              (K.sm_m = {
                proto: K,
                fields: {
                  subject_type: { n: 1, br: a.qM.readEnum, bw: a.gp.writeEnum },
                  subject_group_id: {
                    n: 2,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                  subject_id: {
                    n: 3,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                  reported_content_id: {
                    n: 4,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                },
              }),
            K.sm_m
          );
        }
        static MBF() {
          return K.sm_mbf || (K.sm_mbf = a.w0(K.M())), K.sm_mbf;
        }
        toObject(e = !1) {
          return K.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(K.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(K.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new K();
          return K.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(K.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(K.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return K.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetOldestUnresolvedSubjects_Response_Subject";
        }
      }
      class Q extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Q.prototype.steamid || a.Sg(Q.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Q.sm_m ||
              (Q.sm_m = {
                proto: Q,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                },
              }),
            Q.sm_m
          );
        }
        static MBF() {
          return Q.sm_mbf || (Q.sm_mbf = a.w0(Q.M())), Q.sm_mbf;
        }
        toObject(e = !1) {
          return Q.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(Q.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(Q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new Q();
          return Q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(Q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(Q.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetReporterStats_Request";
        }
      }
      class X extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            X.prototype.total_reports || a.Sg(X.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            X.sm_m ||
              (X.sm_m = {
                proto: X,
                fields: {
                  total_reports: {
                    n: 1,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  total_acquitted_reports: {
                    n: 2,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  reports_in_last_week: {
                    n: 3,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  acquitted_reports_in_last_week: {
                    n: 4,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                },
              }),
            X.sm_m
          );
        }
        static MBF() {
          return X.sm_mbf || (X.sm_mbf = a.w0(X.M())), X.sm_mbf;
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(X.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(X.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new X();
          return X.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(X.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(X.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetReporterStats_Response";
        }
      }
      class Z extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Z.prototype.subject_type || a.Sg(Z.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Z.sm_m ||
              (Z.sm_m = {
                proto: Z,
                fields: {
                  subject_type: { n: 1, br: a.qM.readEnum, bw: a.gp.writeEnum },
                  moderator_level: {
                    n: 2,
                    br: a.qM.readEnum,
                    bw: a.gp.writeEnum,
                  },
                },
              }),
            Z.sm_m
          );
        }
        static MBF() {
          return Z.sm_mbf || (Z.sm_mbf = a.w0(Z.M())), Z.sm_mbf;
        }
        toObject(e = !1) {
          return Z.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(Z.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(Z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new Z();
          return Z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(Z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(Z.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_ClaimBatch_Request";
        }
      }
      class H extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            H.prototype.subjects || a.Sg(H.M()),
            n.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            H.sm_m ||
              (H.sm_m = {
                proto: H,
                fields: { subjects: { n: 1, c: f, r: !0, q: !0 } },
              }),
            H.sm_m
          );
        }
        static MBF() {
          return H.sm_mbf || (H.sm_mbf = a.w0(H.M())), H.sm_mbf;
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(H.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(H.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new H();
          return H.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(H.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(H.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_ClaimBatch_Response";
        }
      }
      class J extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            J.prototype.steamid || a.Sg(J.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            J.sm_m ||
              (J.sm_m = {
                proto: J,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                },
              }),
            J.sm_m
          );
        }
        static MBF() {
          return J.sm_mbf || (J.sm_mbf = a.w0(J.M())), J.sm_mbf;
        }
        toObject(e = !1) {
          return J.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(J.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(J.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new J();
          return J.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(J.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(J.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetClaimedSubjects_Request";
        }
      }
      class V extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            V.prototype.subjects || a.Sg(V.M()),
            n.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            V.sm_m ||
              (V.sm_m = {
                proto: V,
                fields: { subjects: { n: 1, c: f, r: !0, q: !0 } },
              }),
            V.sm_m
          );
        }
        static MBF() {
          return V.sm_mbf || (V.sm_mbf = a.w0(V.M())), V.sm_mbf;
        }
        toObject(e = !1) {
          return V.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(V.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(V.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new V();
          return V.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(V.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(V.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetClaimedSubjects_Response";
        }
      }
      class Y extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Y.prototype.subjects_to_release || a.Sg(Y.M()),
            n.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            Y.sm_m ||
              (Y.sm_m = {
                proto: Y,
                fields: { subjects_to_release: { n: 1, c: v, r: !0, q: !0 } },
              }),
            Y.sm_m
          );
        }
        static MBF() {
          return Y.sm_mbf || (Y.sm_mbf = a.w0(Y.M())), Y.sm_mbf;
        }
        toObject(e = !1) {
          return Y.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(Y.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(Y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new Y();
          return Y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(Y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(Y.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return Y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_ReleaseSubjects_Request";
        }
      }
      class ee extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ee.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new ee();
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new ee();
          return ee.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_ReleaseSubjects_Response";
        }
      }
      class te extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            te.prototype.subject_type || a.Sg(te.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            te.sm_m ||
              (te.sm_m = {
                proto: te,
                fields: {
                  subject_type: { n: 1, br: a.qM.readEnum, bw: a.gp.writeEnum },
                  steamid: {
                    n: 2,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                  forum: {
                    n: 3,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                  topic: {
                    n: 4,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                  comment: {
                    n: 5,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                  comment_thread_id: {
                    n: 6,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                  sender_account_id: {
                    n: 7,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  chat_message_rtime: {
                    n: 8,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  chat_message_ordinal: {
                    n: 9,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  chat_group_id: {
                    n: 10,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                  chat_room_id: {
                    n: 11,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                  receiver_account_id: {
                    n: 12,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  published_file_id: {
                    n: 13,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                },
              }),
            te.sm_m
          );
        }
        static MBF() {
          return te.sm_mbf || (te.sm_mbf = a.w0(te.M())), te.sm_mbf;
        }
        toObject(e = !1) {
          return te.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(te.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(te.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new te();
          return te.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(te.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(te.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ReportedContentCoordinates";
        }
      }
      class re extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            re.prototype.reported_content_id || a.Sg(re.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            re.sm_m ||
              (re.sm_m = {
                proto: re,
                fields: {
                  reported_content_id: {
                    n: 1,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                },
              }),
            re.sm_m
          );
        }
        static MBF() {
          return re.sm_mbf || (re.sm_mbf = a.w0(re.M())), re.sm_mbf;
        }
        toObject(e = !1) {
          return re.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(re.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(re.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new re();
          return re.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(re.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(re.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetReportedContentByID_Request";
        }
      }
      class ie extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ie.prototype.subject || a.Sg(ie.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ie.sm_m ||
              (ie.sm_m = { proto: ie, fields: { subject: { n: 1, c: f } } }),
            ie.sm_m
          );
        }
        static MBF() {
          return ie.sm_mbf || (ie.sm_mbf = a.w0(ie.M())), ie.sm_mbf;
        }
        toObject(e = !1) {
          return ie.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(ie.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(ie.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new ie();
          return ie.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(ie.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(ie.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetReportedContentByID_Response";
        }
      }
      class ne extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ne.prototype.coordinates || a.Sg(ne.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ne.sm_m ||
              (ne.sm_m = {
                proto: ne,
                fields: { coordinates: { n: 1, c: te } },
              }),
            ne.sm_m
          );
        }
        static MBF() {
          return ne.sm_mbf || (ne.sm_mbf = a.w0(ne.M())), ne.sm_mbf;
        }
        toObject(e = !1) {
          return ne.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(ne.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(ne.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new ne();
          return ne.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(ne.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(ne.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetReportedContent_Request";
        }
      }
      class se extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            se.prototype.subjects || a.Sg(se.M()),
            n.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            se.sm_m ||
              (se.sm_m = {
                proto: se,
                fields: { subjects: { n: 1, c: f, r: !0, q: !0 } },
              }),
            se.sm_m
          );
        }
        static MBF() {
          return se.sm_mbf || (se.sm_mbf = a.w0(se.M())), se.sm_mbf;
        }
        toObject(e = !1) {
          return se.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(se.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(se.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new se();
          return se.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(se.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(se.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetReportedContent_Response";
        }
      }
      class ae extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ae.prototype.reported_content_id || a.Sg(ae.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ae.sm_m ||
              (ae.sm_m = {
                proto: ae,
                fields: {
                  reported_content_id: {
                    n: 1,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                  details: { n: 2, br: a.qM.readString, bw: a.gp.writeString },
                },
              }),
            ae.sm_m
          );
        }
        static MBF() {
          return ae.sm_mbf || (ae.sm_mbf = a.w0(ae.M())), ae.sm_mbf;
        }
        toObject(e = !1) {
          return ae.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(ae.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(ae.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new ae();
          return ae.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(ae.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(ae.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_OwnerDisputeModeration_Request";
        }
      }
      class oe extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return oe.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new oe();
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new oe();
          return oe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_OwnerDisputeModeration_Response";
        }
      }
      class le extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            le.prototype.reported_content_id || a.Sg(le.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            le.sm_m ||
              (le.sm_m = {
                proto: le,
                fields: {
                  reported_content_id: {
                    n: 1,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                },
              }),
            le.sm_m
          );
        }
        static MBF() {
          return le.sm_mbf || (le.sm_mbf = a.w0(le.M())), le.sm_mbf;
        }
        toObject(e = !1) {
          return le.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(le.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(le.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new le();
          return le.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(le.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(le.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetAuditLogByID_Request";
        }
      }
      class ue extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ue.prototype.entries || a.Sg(ue.M()),
            n.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            ue.sm_m ||
              (ue.sm_m = {
                proto: ue,
                fields: { entries: { n: 1, c: ce, r: !0, q: !0 } },
              }),
            ue.sm_m
          );
        }
        static MBF() {
          return ue.sm_mbf || (ue.sm_mbf = a.w0(ue.M())), ue.sm_mbf;
        }
        toObject(e = !1) {
          return ue.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(ue.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(ue.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new ue();
          return ue.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(ue.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(ue.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetAuditLogByID_Response";
        }
      }
      class ce extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ce.prototype.timestamp || a.Sg(ce.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ce.sm_m ||
              (ce.sm_m = {
                proto: ce,
                fields: {
                  timestamp: {
                    n: 1,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  actor_steamid: {
                    n: 2,
                    br: a.qM.readFixed64String,
                    bw: a.gp.writeFixed64String,
                  },
                  automated_action: {
                    n: 3,
                    br: a.qM.readBool,
                    bw: a.gp.writeBool,
                  },
                  action: { n: 4, br: a.qM.readEnum, bw: a.gp.writeEnum },
                  additional_json_data: {
                    n: 5,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                },
              }),
            ce.sm_m
          );
        }
        static MBF() {
          return ce.sm_mbf || (ce.sm_mbf = a.w0(ce.M())), ce.sm_mbf;
        }
        toObject(e = !1) {
          return ce.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(ce.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(ce.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new ce();
          return ce.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(ce.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(ce.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_GetAuditLogByID_Response_AuditLogEntry";
        }
      }
      class me extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            me.prototype.reported_content_id || a.Sg(me.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            me.sm_m ||
              (me.sm_m = {
                proto: me,
                fields: {
                  reported_content_id: {
                    n: 1,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                  report_id: {
                    n: 2,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                  dispute_details: {
                    n: 3,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                },
              }),
            me.sm_m
          );
        }
        static MBF() {
          return me.sm_mbf || (me.sm_mbf = a.w0(me.M())), me.sm_mbf;
        }
        toObject(e = !1) {
          return me.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(me.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(me.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new me();
          return me.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(me.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(me.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_ReporterDisputeModeration_Request";
        }
      }
      class de extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return de.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new de();
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new de();
          return de.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return de.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return de.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_ReporterDisputeModeration_Response";
        }
      }
      class Be extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Be.prototype.reported_content_id || a.Sg(Be.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Be.sm_m ||
              (Be.sm_m = {
                proto: Be,
                fields: {
                  reported_content_id: {
                    n: 1,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                },
              }),
            Be.sm_m
          );
        }
        static MBF() {
          return Be.sm_mbf || (Be.sm_mbf = a.w0(Be.M())), Be.sm_mbf;
        }
        toObject(e = !1) {
          return Be.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(Be.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(Be.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new Be();
          return Be.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(Be.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return Be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(Be.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return Be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_SustainModerationByID_Request";
        }
      }
      class ge extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), n.Message.initialize(this, e, 0, -1, void 0, null);
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
          let t = new (s().BinaryReader)(e),
            r = new ge();
          return ge.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return ge.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_SustainModerationByID_Response";
        }
      }
      class be extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            be.prototype.reported_content_id || a.Sg(be.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            be.sm_m ||
              (be.sm_m = {
                proto: be,
                fields: {
                  reported_content_id: {
                    n: 1,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                  new_level: { n: 2, br: a.qM.readEnum, bw: a.gp.writeEnum },
                  reason: { n: 3, br: a.qM.readEnum, bw: a.gp.writeEnum },
                  note: { n: 4, br: a.qM.readString, bw: a.gp.writeString },
                },
              }),
            be.sm_m
          );
        }
        static MBF() {
          return be.sm_mbf || (be.sm_mbf = a.w0(be.M())), be.sm_mbf;
        }
        toObject(e = !1) {
          return be.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(be.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(be.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new be();
          return be.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(be.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(be.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_EscalateSubjectByID_Request";
        }
      }
      class Me extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), n.Message.initialize(this, e, 0, -1, void 0, null);
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
          let t = new (s().BinaryReader)(e),
            r = new Me();
          return Me.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return Me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return Me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_EscalateSubjectByID_Response";
        }
      }
      class ye extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ye.prototype.reported_content_id || a.Sg(ye.M()),
            n.Message.initialize(this, e, 0, -1, [9], null);
        }
        static M() {
          return (
            ye.sm_m ||
              (ye.sm_m = {
                proto: ye,
                fields: {
                  reported_content_id: {
                    n: 1,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                  resolution: { n: 4, br: a.qM.readEnum, bw: a.gp.writeEnum },
                  reason: { n: 2, br: a.qM.readEnum, bw: a.gp.writeEnum },
                  note: { n: 3, br: a.qM.readString, bw: a.gp.writeString },
                  resolved_by_automation: {
                    n: 7,
                    br: a.qM.readEnum,
                    bw: a.gp.writeEnum,
                  },
                  sanctions_applied: { n: 9, c: R, r: !0, q: !0 },
                  skip_lock: { n: 10, br: a.qM.readBool, bw: a.gp.writeBool },
                },
              }),
            ye.sm_m
          );
        }
        static MBF() {
          return ye.sm_mbf || (ye.sm_mbf = a.w0(ye.M())), ye.sm_mbf;
        }
        toObject(e = !1) {
          return ye.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(ye.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(ye.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new ye();
          return ye.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(ye.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(ye.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return ye.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_ResolveByID_Request";
        }
      }
      class _e extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), n.Message.initialize(this, e, 0, -1, void 0, null);
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
          let t = new (s().BinaryReader)(e),
            r = new _e();
          return _e.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return _e.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return _e.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_ResolveByID_Response";
        }
      }
      class we extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            we.prototype.reported_content_id || a.Sg(we.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            we.sm_m ||
              (we.sm_m = {
                proto: we,
                fields: {
                  reported_content_id: {
                    n: 1,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                  csam_status: { n: 2, br: a.qM.readEnum, bw: a.gp.writeEnum },
                  terrorism_status: {
                    n: 3,
                    br: a.qM.readEnum,
                    bw: a.gp.writeEnum,
                  },
                  credible_threat_of_violence_status: {
                    n: 4,
                    br: a.qM.readEnum,
                    bw: a.gp.writeEnum,
                  },
                  additional_subject_data: { n: 5, c: g },
                  owner_dispute_details: {
                    n: 6,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                },
              }),
            we.sm_m
          );
        }
        static MBF() {
          return we.sm_mbf || (we.sm_mbf = a.w0(we.M())), we.sm_mbf;
        }
        toObject(e = !1) {
          return we.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(we.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(we.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new we();
          return we.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(we.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return we.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(we.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return we.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_UpdateSubjectByID_Request";
        }
      }
      class pe extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), n.Message.initialize(this, e, 0, -1, void 0, null);
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
          let t = new (s().BinaryReader)(e),
            r = new pe();
          return pe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return pe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_UpdateSubjectByID_Response";
        }
      }
      class ze extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ze.prototype.reported_content_id || a.Sg(ze.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ze.sm_m ||
              (ze.sm_m = {
                proto: ze,
                fields: {
                  reported_content_id: {
                    n: 1,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                  action: { n: 2, br: a.qM.readEnum, bw: a.gp.writeEnum },
                  automated_action: {
                    n: 3,
                    br: a.qM.readBool,
                    bw: a.gp.writeBool,
                  },
                  additional_json_data: {
                    n: 4,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                  actor_steamid: {
                    n: 5,
                    br: a.qM.readFixed64String,
                    bw: a.gp.writeFixed64String,
                  },
                },
              }),
            ze.sm_m
          );
        }
        static MBF() {
          return ze.sm_mbf || (ze.sm_mbf = a.w0(ze.M())), ze.sm_mbf;
        }
        toObject(e = !1) {
          return ze.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(ze.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(ze.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new ze();
          return ze.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(ze.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(ze.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return ze.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_WriteToAuditLogByID_Request";
        }
      }
      class fe extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return fe.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new fe();
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new fe();
          return fe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return fe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CContentModeration_WriteToAuditLogByID_Response";
        }
      }
      var Se;
      !(function (e) {
        (e.ClaimBatch = function (e, t, r) {
          return e.SendMsg(
            "ContentModeration.ClaimBatch#1",
            (0, o.I8)(Z, t, r),
            H,
            { ePrivilege: 5 },
          );
        }),
          (e.GetClaimedSubjects = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.GetClaimedSubjects#1",
              (0, o.I8)(J, t, r),
              V,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }),
          (e.ReleaseSubjects = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.ReleaseSubjects#1",
              (0, o.I8)(Y, t, r),
              ee,
              { ePrivilege: 5 },
            );
          }),
          (e.GetReportsSubmittedByUser = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.GetReportsSubmittedByUser#1",
              (0, o.I8)(M, t, r),
              _,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetOneReportSubmittedByUser = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.GetOneReportSubmittedByUser#1",
              (0, o.I8)(w, t, r),
              p,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetReportedSubjectsByOwner = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.GetReportedSubjectsByOwner#1",
              (0, o.I8)(z, t, r),
              S,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }),
          (e.GetSubjectOverview = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.GetSubjectOverview#1",
              (0, o.I8)(j, t, r),
              W,
              { ePrivilege: 5 },
            );
          }),
          (e.UpdateReporterCooldown = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.UpdateReporterCooldown#1",
              (0, o.I8)(O, t, r),
              q,
              { ePrivilege: 5 },
            );
          }),
          (e.GetReporterCooldown = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.GetReporterCooldown#1",
              (0, o.I8)(U, t, r),
              T,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetModeratorPreferences = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.GetModeratorPreferences#1",
              (0, o.I8)(C, t, r),
              F,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }),
          (e.SetModeratorPreferences = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.SetModeratorPreferences#1",
              (0, o.I8)(I, t, r),
              x,
              { ePrivilege: 5 },
            );
          }),
          (e.GetModeratorActivity = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.GetModeratorActivity#1",
              (0, o.I8)(N, t, r),
              G,
              { ePrivilege: 5 },
            );
          }),
          (e.GetDailyModerationStatistics = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.GetDailyModerationStatistics#1",
              (0, o.I8)(P, t, r),
              A,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }),
          (e.GetOldestUnresolvedSubjects = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.GetOldestUnresolvedSubjects#1",
              (0, o.I8)(L, t, r),
              $,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }),
          (e.GetReporterStats = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.GetReporterStats#1",
              (0, o.I8)(Q, t, r),
              X,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }),
          (e.GetReportedContentByID = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.GetReportedContentByID#1",
              (0, o.I8)(re, t, r),
              ie,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetReportedContent = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.GetReportedContent#1",
              (0, o.I8)(ne, t, r),
              se,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }),
          (e.OwnerDisputeModeration = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.OwnerDisputeModeration#1",
              (0, o.I8)(ae, t, r),
              oe,
              { ePrivilege: 1 },
            );
          }),
          (e.GetAuditLogByID = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.GetAuditLogByID#1",
              (0, o.I8)(le, t, r),
              ue,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }),
          (e.ReporterDisputeModeration = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.ReporterDisputeModeration#1",
              (0, o.I8)(me, t, r),
              de,
              { ePrivilege: 1 },
            );
          }),
          (e.SustainModerationByID = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.SustainModerationByID#1",
              (0, o.I8)(Be, t, r),
              ge,
              { ePrivilege: 5 },
            );
          }),
          (e.EscalateSubjectByID = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.EscalateSubjectByID#1",
              (0, o.I8)(be, t, r),
              Me,
              { ePrivilege: 5 },
            );
          }),
          (e.ResolveByID = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.ResolveByID#1",
              (0, o.I8)(ye, t, r),
              _e,
              { ePrivilege: 5 },
            );
          }),
          (e.UpdateSubjectByID = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.UpdateSubjectByID#1",
              (0, o.I8)(we, t, r),
              pe,
              { ePrivilege: 5 },
            );
          }),
          (e.WriteToAuditLogByID = function (e, t, r) {
            return e.SendMsg(
              "ContentModeration.WriteToAuditLogByID#1",
              (0, o.I8)(ze, t, r),
              fe,
              { ePrivilege: 5 },
            );
          });
      })(Se || (Se = {}));
    },
  },
]);
