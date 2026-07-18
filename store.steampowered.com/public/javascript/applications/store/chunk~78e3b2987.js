/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [65949],
  {
    56854: (e, r, t) => {
      t.d(r, { KV: () => _, Bm: () => i, YK: () => z });
      var i = {};
      t.r(i), t.d(i, { Y: () => m });
      var a = t(80613),
        n = t.n(a),
        s = t(89068),
        o = t(56545);
      const m = 1;
      class l extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            l.prototype.recommendationid || s.Sg(l.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  recommendationid: {
                    n: 1,
                    br: s.qM.readUint64String,
                    bw: s.gp.writeUint64String,
                  },
                  review_text: {
                    n: 2,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  voted_up: { n: 3, br: s.qM.readBool, bw: s.gp.writeBool },
                  is_public: { n: 4, br: s.qM.readBool, bw: s.gp.writeBool },
                  language: { n: 5, br: s.qM.readString, bw: s.gp.writeString },
                  is_in_early_access: {
                    n: 6,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  received_compensation: {
                    n: 7,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  comments_disabled: {
                    n: 8,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  hide_in_steam_china: {
                    n: 9,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  saved_hardware_id: {
                    n: 10,
                    br: s.qM.readUint64String,
                    bw: s.gp.writeUint64String,
                  },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = s.w0(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(l.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(l.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new l();
          return l.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(l.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(l.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_Update_Request";
        }
      }
      class c extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new c();
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new c();
          return c.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_Update_Response";
        }
      }
      class d extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.saved_hardware_id || s.Sg(d.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  saved_hardware_id: {
                    n: 1,
                    br: s.qM.readUint64String,
                    bw: s.gp.writeUint64String,
                  },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = s.w0(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(d.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(d.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new d();
          return d.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(d.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(d.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_BackfillSavedHardware_Request";
        }
      }
      class u extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.num_backfilled || s.Sg(u.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  num_backfilled: {
                    n: 1,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = s.w0(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(u.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(u.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new u();
          return u.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(u.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(u.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_BackfillSavedHardware_Response";
        }
      }
      class b extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.reaction_type || s.Sg(b.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  reaction_type: {
                    n: 1,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  count: { n: 2, br: s.qM.readUint32, bw: s.gp.writeUint32 },
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
        static toObject(e, r) {
          return s.BT(b.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(b.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new b();
          return b.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(b.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(b.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_Recommendation_LoyaltyReaction";
        }
      }
      class w extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.id || s.Sg(w.M()),
            a.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  id: { n: 1, br: s.qM.readEnum, bw: s.gp.writeEnum },
                  ranges: { n: 2, c: g, r: !0, q: !0 },
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
        static toObject(e, r) {
          return s.BT(w.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(w.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new w();
          return w.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(w.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(w.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_Recommendation_Tag";
        }
      }
      class g extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.start || s.Sg(g.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  start: { n: 1, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                  end: { n: 2, br: s.qM.readUint32, bw: s.gp.writeUint32 },
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
        static toObject(e, r) {
          return s.BT(g.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(g.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new g();
          return g.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(g.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(g.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_Recommendation_Tag_Range";
        }
      }
      class B extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.recommendationid || s.Sg(B.M()),
            a.Message.initialize(this, e, 0, -1, [27, 40, 54], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  recommendationid: {
                    n: 1,
                    br: s.qM.readUint64String,
                    bw: s.gp.writeUint64String,
                  },
                  steamid: {
                    n: 2,
                    br: s.qM.readUint64String,
                    bw: s.gp.writeUint64String,
                  },
                  appid: { n: 3, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                  review: { n: 4, br: s.qM.readString, bw: s.gp.writeString },
                  time_created: {
                    n: 5,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  time_updated: {
                    n: 6,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  votes_up: { n: 7, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                  votes_down: {
                    n: 8,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  vote_score: { n: 9, br: s.qM.readFloat, bw: s.gp.writeFloat },
                  language: {
                    n: 10,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  comment_count: {
                    n: 11,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  voted_up: { n: 12, br: s.qM.readBool, bw: s.gp.writeBool },
                  is_public: { n: 13, br: s.qM.readBool, bw: s.gp.writeBool },
                  moderator_hidden: {
                    n: 14,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  flagged_by_developer: {
                    n: 15,
                    br: s.qM.readEnum,
                    bw: s.gp.writeEnum,
                  },
                  report_score: {
                    n: 16,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  steamid_moderator: {
                    n: 17,
                    br: s.qM.readUint64String,
                    bw: s.gp.writeUint64String,
                  },
                  steamid_developer: {
                    n: 18,
                    br: s.qM.readUint64String,
                    bw: s.gp.writeUint64String,
                  },
                  steamid_dev_responder: {
                    n: 19,
                    br: s.qM.readUint64String,
                    bw: s.gp.writeUint64String,
                  },
                  developer_response: {
                    n: 20,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  time_developer_responded: {
                    n: 21,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  developer_flag_cleared: {
                    n: 22,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  written_during_early_access: {
                    n: 23,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  votes_funny: {
                    n: 24,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  received_compensation: {
                    n: 25,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  unverified_purchase: {
                    n: 26,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  review_qualities: {
                    n: 27,
                    r: !0,
                    q: !0,
                    br: s.qM.readEnum,
                    pbr: s.qM.readPackedEnum,
                    bw: s.gp.writeRepeatedEnum,
                  },
                  weighted_vote_score: {
                    n: 28,
                    br: s.qM.readFloat,
                    bw: s.gp.writeFloat,
                  },
                  moderation_note: {
                    n: 29,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  payment_method: {
                    n: 30,
                    br: s.qM.readInt32,
                    bw: s.gp.writeInt32,
                  },
                  playtime_2weeks: {
                    n: 31,
                    br: s.qM.readInt32,
                    bw: s.gp.writeInt32,
                  },
                  playtime_forever: {
                    n: 32,
                    br: s.qM.readInt32,
                    bw: s.gp.writeInt32,
                  },
                  last_playtime: {
                    n: 33,
                    br: s.qM.readInt32,
                    bw: s.gp.writeInt32,
                  },
                  comments_disabled: {
                    n: 34,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  playtime_at_review: {
                    n: 35,
                    br: s.qM.readInt32,
                    bw: s.gp.writeInt32,
                  },
                  approved_for_china: {
                    n: 36,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  ban_check_result: {
                    n: 37,
                    br: s.qM.readEnum,
                    bw: s.gp.writeEnum,
                  },
                  refunded: { n: 38, br: s.qM.readBool, bw: s.gp.writeBool },
                  account_score_spend: {
                    n: 39,
                    br: s.qM.readInt32,
                    bw: s.gp.writeInt32,
                  },
                  reactions: { n: 40, c: b, r: !0, q: !0 },
                  ipaddress: {
                    n: 41,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  hidden_in_steam_china: {
                    n: 42,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  steam_china_location: {
                    n: 43,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  category_ascii_pct: {
                    n: 44,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  category_meme_pct: {
                    n: 45,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  category_offtopic_pct: {
                    n: 46,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  category_uninformative_pct: {
                    n: 47,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  category_votefarming_pct: {
                    n: 48,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  deck_playtime_at_review: {
                    n: 49,
                    br: s.qM.readInt32,
                    bw: s.gp.writeInt32,
                  },
                  is_bot_review_pct: {
                    n: 50,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  positivity_pct: {
                    n: 51,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  tags_with_ranges: { n: 54, c: w, r: !0, q: !0 },
                  saved_hardware_id: {
                    n: 56,
                    br: s.qM.readUint64String,
                    bw: s.gp.writeUint64String,
                  },
                  hardware_cluster_id: {
                    n: 57,
                    br: s.qM.readUint64String,
                    bw: s.gp.writeUint64String,
                  },
                },
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
        static toObject(e, r) {
          return s.BT(B.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(B.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new B();
          return B.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(B.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(B.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "RecommendationDetails";
        }
      }
      class _ extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.appid || s.Sg(_.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  appid: { n: 1, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = s.w0(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(_.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(_.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new _();
          return _.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(_.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(_.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_GetFriendsRecommendedApp_Request";
        }
      }
      class p extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.accountids_recommended || s.Sg(p.M()),
            a.Message.initialize(this, e, 0, -1, [1, 3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  accountids_recommended: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: s.qM.readUint32,
                    pbr: s.qM.readPackedUint32,
                    bw: s.gp.writeRepeatedUint32,
                  },
                  accountids_not_recommended: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: s.qM.readUint32,
                    pbr: s.qM.readPackedUint32,
                    bw: s.gp.writeRepeatedUint32,
                  },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = s.w0(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(p.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(p.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new p();
          return p.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(p.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(p.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_GetFriendsRecommendedApp_Response";
        }
      }
      class M extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.requests || s.Sg(M.M()),
            a.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: { requests: { n: 1, c: y, r: !0, q: !0 } },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = s.w0(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(M.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(M.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new M();
          return M.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(M.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(M.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_GetIndividualRecommendations_Request";
        }
      }
      class y extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.steamid || s.Sg(y.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  steamid: {
                    n: 1,
                    br: s.qM.readUint64String,
                    bw: s.gp.writeUint64String,
                  },
                  appid: { n: 2, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = s.w0(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, r) {
          return s.BT(y.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(y.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new y();
          return y.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(y.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(y.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_GetIndividualRecommendations_Request_RecommendationRequest";
        }
      }
      class f extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.recommendations || s.Sg(f.M()),
            a.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: { recommendations: { n: 1, c: B, r: !0, q: !0 } },
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
        static toObject(e, r) {
          return s.BT(f.M(), e, r);
        }
        static fromObject(e) {
          return s.Uq(f.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new f();
          return f.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.zj(f.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.i0(f.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_GetIndividualRecommendations_Response";
        }
      }
      var z;
      !(function (e) {
        (e.Update = function (e, r, t) {
          return e.SendMsg("UserReviews.Update#1", (0, o.I8)(l, r, t), c, {
            ePrivilege: 3,
          });
        }),
          (e.BackfillSavedHardware = function (e, r, t) {
            return e.SendMsg(
              "UserReviews.BackfillSavedHardware#1",
              (0, o.I8)(d, r, t),
              u,
              { ePrivilege: 1 },
            );
          }),
          (e.GetFriendsRecommendedApp = function (e, r, t) {
            return e.SendMsg(
              "UserReviews.GetFriendsRecommendedApp#1",
              (0, o.I8)(_, r, t),
              p,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetIndividualRecommendations = function (e, r, t) {
            return e.SendMsg(
              "UserReviews.GetIndividualRecommendations#1",
              (0, o.I8)(M, r, t),
              f,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          });
      })(z || (z = {}));
    },
  },
]);
