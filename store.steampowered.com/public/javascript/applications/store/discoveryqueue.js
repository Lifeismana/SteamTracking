/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [89672],
    {
      15860: (q, _, t) => {
        "use strict";
        t.d(_, { L: () => V, c: () => s });
        var e = t(27386),
          p = t(76617),
          h = t(58632),
          d = t.n(h);
        function s(C, $) {
          return new (d())(
            async (T) => {
              const L = [...T],
                P = await e.xtC.GetPlayerLinkDetails(C, { steamids: L }),
                N = new Map();
              return (
                P.Body()
                  .accounts()
                  .forEach((w) => {
                    const U = w.toObject();
                    N.set(U.public_data.steamid, U);
                  }),
                L.map((w) => N.get(w) ?? null)
              );
            },
            { maxBatchSize: 100, cache: !1, ...$ },
          );
        }
        function V(C) {
          return (0, p.V)("PlayerLinkDetails", () => s(C));
        }
      },
      9682: (q, _, t) => {
        "use strict";
        t.d(_, { KV: () => o, mJ: () => p, Bm: () => e, YK: () => b });
        var e = {};
        t.r(e), t.d(e, { Y: () => $ });
        var p = {};
        t.r(p), t.d(p, { r5: () => T, _Q: () => L, FB: () => P });
        var h = t(80613),
          d = t.n(h),
          s = t(75245),
          V = t(35038);
        const C = 0,
          $ = 1,
          T = 0,
          L = 1,
          P = 2;
        function N(W) {
          return "unknown EUserReviewFlaggedByDeveloperType ( " + W + " )";
        }
        function w(W) {
          return "unknown EUserReviewQuality ( " + W + " )";
        }
        function U(W) {
          return "unknown EUserReviewVoteTag ( " + W + " )";
        }
        function Y(W) {
          return "unknown EUserReviewAuditAction ( " + W + " )";
        }
        function ee(W) {
          return "unknown EReviewTagType ( " + W + " )";
        }
        function J(W) {
          return "unknown EUserReviewBombPeriodType ( " + W + " )";
        }
        class I extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              I.prototype.recommendationid || s.Sg(I.M()),
              h.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              I.sm_m ||
                (I.sm_m = {
                  proto: I,
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
                    language: {
                      n: 5,
                      br: s.qM.readString,
                      bw: s.gp.writeString,
                    },
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
              I.sm_m
            );
          }
          static MBF() {
            return I.sm_mbf || (I.sm_mbf = s.w0(I.M())), I.sm_mbf;
          }
          toObject(r = !1) {
            return I.toObject(r, this);
          }
          static toObject(r, c) {
            return s.BT(I.M(), r, c);
          }
          static fromObject(r) {
            return s.Uq(I.M(), r);
          }
          static deserializeBinary(r) {
            let c = new (d().BinaryReader)(r),
              K = new I();
            return I.deserializeBinaryFromReader(K, c);
          }
          static deserializeBinaryFromReader(r, c) {
            return s.zj(I.MBF(), r, c);
          }
          serializeBinary() {
            var r = new (d().BinaryWriter)();
            return I.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, c) {
            s.i0(I.M(), r, c);
          }
          serializeBase64String() {
            var r = new (d().BinaryWriter)();
            return (
              I.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserReviews_Update_Request";
          }
        }
        class H extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), h.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return H.toObject(r, this);
          }
          static toObject(r, c) {
            return r ? { $jspbMessageInstance: c } : {};
          }
          static fromObject(r) {
            return new H();
          }
          static deserializeBinary(r) {
            let c = new (d().BinaryReader)(r),
              K = new H();
            return H.deserializeBinaryFromReader(K, c);
          }
          static deserializeBinaryFromReader(r, c) {
            return r;
          }
          serializeBinary() {
            var r = new (d().BinaryWriter)();
            return H.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, c) {}
          serializeBase64String() {
            var r = new (d().BinaryWriter)();
            return (
              H.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserReviews_Update_Response";
          }
        }
        class D extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              D.prototype.saved_hardware_id || s.Sg(D.M()),
              h.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              D.sm_m ||
                (D.sm_m = {
                  proto: D,
                  fields: {
                    saved_hardware_id: {
                      n: 1,
                      br: s.qM.readUint64String,
                      bw: s.gp.writeUint64String,
                    },
                  },
                }),
              D.sm_m
            );
          }
          static MBF() {
            return D.sm_mbf || (D.sm_mbf = s.w0(D.M())), D.sm_mbf;
          }
          toObject(r = !1) {
            return D.toObject(r, this);
          }
          static toObject(r, c) {
            return s.BT(D.M(), r, c);
          }
          static fromObject(r) {
            return s.Uq(D.M(), r);
          }
          static deserializeBinary(r) {
            let c = new (d().BinaryReader)(r),
              K = new D();
            return D.deserializeBinaryFromReader(K, c);
          }
          static deserializeBinaryFromReader(r, c) {
            return s.zj(D.MBF(), r, c);
          }
          serializeBinary() {
            var r = new (d().BinaryWriter)();
            return D.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, c) {
            s.i0(D.M(), r, c);
          }
          serializeBase64String() {
            var r = new (d().BinaryWriter)();
            return (
              D.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserReviews_BackfillSavedHardware_Request";
          }
        }
        class n extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              n.prototype.num_backfilled || s.Sg(n.M()),
              h.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              n.sm_m ||
                (n.sm_m = {
                  proto: n,
                  fields: {
                    num_backfilled: {
                      n: 1,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                  },
                }),
              n.sm_m
            );
          }
          static MBF() {
            return n.sm_mbf || (n.sm_mbf = s.w0(n.M())), n.sm_mbf;
          }
          toObject(r = !1) {
            return n.toObject(r, this);
          }
          static toObject(r, c) {
            return s.BT(n.M(), r, c);
          }
          static fromObject(r) {
            return s.Uq(n.M(), r);
          }
          static deserializeBinary(r) {
            let c = new (d().BinaryReader)(r),
              K = new n();
            return n.deserializeBinaryFromReader(K, c);
          }
          static deserializeBinaryFromReader(r, c) {
            return s.zj(n.MBF(), r, c);
          }
          serializeBinary() {
            var r = new (d().BinaryWriter)();
            return n.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, c) {
            s.i0(n.M(), r, c);
          }
          serializeBase64String() {
            var r = new (d().BinaryWriter)();
            return (
              n.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserReviews_BackfillSavedHardware_Response";
          }
        }
        class l extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              l.prototype.reaction_type || s.Sg(l.M()),
              h.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              l.sm_m ||
                (l.sm_m = {
                  proto: l,
                  fields: {
                    reaction_type: {
                      n: 1,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    count: { n: 2, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                  },
                }),
              l.sm_m
            );
          }
          static MBF() {
            return l.sm_mbf || (l.sm_mbf = s.w0(l.M())), l.sm_mbf;
          }
          toObject(r = !1) {
            return l.toObject(r, this);
          }
          static toObject(r, c) {
            return s.BT(l.M(), r, c);
          }
          static fromObject(r) {
            return s.Uq(l.M(), r);
          }
          static deserializeBinary(r) {
            let c = new (d().BinaryReader)(r),
              K = new l();
            return l.deserializeBinaryFromReader(K, c);
          }
          static deserializeBinaryFromReader(r, c) {
            return s.zj(l.MBF(), r, c);
          }
          serializeBinary() {
            var r = new (d().BinaryWriter)();
            return l.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, c) {
            s.i0(l.M(), r, c);
          }
          serializeBase64String() {
            var r = new (d().BinaryWriter)();
            return (
              l.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserReviews_Recommendation_LoyaltyReaction";
          }
        }
        class i extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              i.prototype.id || s.Sg(i.M()),
              h.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              i.sm_m ||
                (i.sm_m = {
                  proto: i,
                  fields: {
                    id: { n: 1, br: s.qM.readEnum, bw: s.gp.writeEnum },
                    ranges: { n: 2, c: m, r: !0, q: !0 },
                  },
                }),
              i.sm_m
            );
          }
          static MBF() {
            return i.sm_mbf || (i.sm_mbf = s.w0(i.M())), i.sm_mbf;
          }
          toObject(r = !1) {
            return i.toObject(r, this);
          }
          static toObject(r, c) {
            return s.BT(i.M(), r, c);
          }
          static fromObject(r) {
            return s.Uq(i.M(), r);
          }
          static deserializeBinary(r) {
            let c = new (d().BinaryReader)(r),
              K = new i();
            return i.deserializeBinaryFromReader(K, c);
          }
          static deserializeBinaryFromReader(r, c) {
            return s.zj(i.MBF(), r, c);
          }
          serializeBinary() {
            var r = new (d().BinaryWriter)();
            return i.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, c) {
            s.i0(i.M(), r, c);
          }
          serializeBase64String() {
            var r = new (d().BinaryWriter)();
            return (
              i.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserReviews_Recommendation_Tag";
          }
        }
        class m extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              m.prototype.start || s.Sg(m.M()),
              h.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              m.sm_m ||
                (m.sm_m = {
                  proto: m,
                  fields: {
                    start: { n: 1, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                    end: { n: 2, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                  },
                }),
              m.sm_m
            );
          }
          static MBF() {
            return m.sm_mbf || (m.sm_mbf = s.w0(m.M())), m.sm_mbf;
          }
          toObject(r = !1) {
            return m.toObject(r, this);
          }
          static toObject(r, c) {
            return s.BT(m.M(), r, c);
          }
          static fromObject(r) {
            return s.Uq(m.M(), r);
          }
          static deserializeBinary(r) {
            let c = new (d().BinaryReader)(r),
              K = new m();
            return m.deserializeBinaryFromReader(K, c);
          }
          static deserializeBinaryFromReader(r, c) {
            return s.zj(m.MBF(), r, c);
          }
          serializeBinary() {
            var r = new (d().BinaryWriter)();
            return m.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, c) {
            s.i0(m.M(), r, c);
          }
          serializeBase64String() {
            var r = new (d().BinaryWriter)();
            return (
              m.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserReviews_Recommendation_Tag_Range";
          }
        }
        class a extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              a.prototype.recommendationid || s.Sg(a.M()),
              h.Message.initialize(this, r, 0, -1, [27, 40, 54], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              a.sm_m ||
                (a.sm_m = {
                  proto: a,
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
                    votes_up: {
                      n: 7,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    votes_down: {
                      n: 8,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    vote_score: {
                      n: 9,
                      br: s.qM.readFloat,
                      bw: s.gp.writeFloat,
                    },
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
                    reactions: { n: 40, c: l, r: !0, q: !0 },
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
                    tags_with_ranges: { n: 54, c: i, r: !0, q: !0 },
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
              a.sm_m
            );
          }
          static MBF() {
            return a.sm_mbf || (a.sm_mbf = s.w0(a.M())), a.sm_mbf;
          }
          toObject(r = !1) {
            return a.toObject(r, this);
          }
          static toObject(r, c) {
            return s.BT(a.M(), r, c);
          }
          static fromObject(r) {
            return s.Uq(a.M(), r);
          }
          static deserializeBinary(r) {
            let c = new (d().BinaryReader)(r),
              K = new a();
            return a.deserializeBinaryFromReader(K, c);
          }
          static deserializeBinaryFromReader(r, c) {
            return s.zj(a.MBF(), r, c);
          }
          serializeBinary() {
            var r = new (d().BinaryWriter)();
            return a.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, c) {
            s.i0(a.M(), r, c);
          }
          serializeBase64String() {
            var r = new (d().BinaryWriter)();
            return (
              a.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "RecommendationDetails";
          }
        }
        class o extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              o.prototype.appid || s.Sg(o.M()),
              h.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              o.sm_m ||
                (o.sm_m = {
                  proto: o,
                  fields: {
                    appid: { n: 1, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                  },
                }),
              o.sm_m
            );
          }
          static MBF() {
            return o.sm_mbf || (o.sm_mbf = s.w0(o.M())), o.sm_mbf;
          }
          toObject(r = !1) {
            return o.toObject(r, this);
          }
          static toObject(r, c) {
            return s.BT(o.M(), r, c);
          }
          static fromObject(r) {
            return s.Uq(o.M(), r);
          }
          static deserializeBinary(r) {
            let c = new (d().BinaryReader)(r),
              K = new o();
            return o.deserializeBinaryFromReader(K, c);
          }
          static deserializeBinaryFromReader(r, c) {
            return s.zj(o.MBF(), r, c);
          }
          serializeBinary() {
            var r = new (d().BinaryWriter)();
            return o.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, c) {
            s.i0(o.M(), r, c);
          }
          serializeBase64String() {
            var r = new (d().BinaryWriter)();
            return (
              o.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserReviews_GetFriendsRecommendedApp_Request";
          }
        }
        class u extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              u.prototype.accountids_recommended || s.Sg(u.M()),
              h.Message.initialize(this, r, 0, -1, [1, 3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              u.sm_m ||
                (u.sm_m = {
                  proto: u,
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
              u.sm_m
            );
          }
          static MBF() {
            return u.sm_mbf || (u.sm_mbf = s.w0(u.M())), u.sm_mbf;
          }
          toObject(r = !1) {
            return u.toObject(r, this);
          }
          static toObject(r, c) {
            return s.BT(u.M(), r, c);
          }
          static fromObject(r) {
            return s.Uq(u.M(), r);
          }
          static deserializeBinary(r) {
            let c = new (d().BinaryReader)(r),
              K = new u();
            return u.deserializeBinaryFromReader(K, c);
          }
          static deserializeBinaryFromReader(r, c) {
            return s.zj(u.MBF(), r, c);
          }
          serializeBinary() {
            var r = new (d().BinaryWriter)();
            return u.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, c) {
            s.i0(u.M(), r, c);
          }
          serializeBase64String() {
            var r = new (d().BinaryWriter)();
            return (
              u.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserReviews_GetFriendsRecommendedApp_Response";
          }
        }
        class g extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              g.prototype.requests || s.Sg(g.M()),
              h.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              g.sm_m ||
                (g.sm_m = {
                  proto: g,
                  fields: { requests: { n: 1, c: y, r: !0, q: !0 } },
                }),
              g.sm_m
            );
          }
          static MBF() {
            return g.sm_mbf || (g.sm_mbf = s.w0(g.M())), g.sm_mbf;
          }
          toObject(r = !1) {
            return g.toObject(r, this);
          }
          static toObject(r, c) {
            return s.BT(g.M(), r, c);
          }
          static fromObject(r) {
            return s.Uq(g.M(), r);
          }
          static deserializeBinary(r) {
            let c = new (d().BinaryReader)(r),
              K = new g();
            return g.deserializeBinaryFromReader(K, c);
          }
          static deserializeBinaryFromReader(r, c) {
            return s.zj(g.MBF(), r, c);
          }
          serializeBinary() {
            var r = new (d().BinaryWriter)();
            return g.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, c) {
            s.i0(g.M(), r, c);
          }
          serializeBase64String() {
            var r = new (d().BinaryWriter)();
            return (
              g.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserReviews_GetIndividualRecommendations_Request";
          }
        }
        class y extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              y.prototype.steamid || s.Sg(y.M()),
              h.Message.initialize(this, r, 0, -1, void 0, null);
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
          toObject(r = !1) {
            return y.toObject(r, this);
          }
          static toObject(r, c) {
            return s.BT(y.M(), r, c);
          }
          static fromObject(r) {
            return s.Uq(y.M(), r);
          }
          static deserializeBinary(r) {
            let c = new (d().BinaryReader)(r),
              K = new y();
            return y.deserializeBinaryFromReader(K, c);
          }
          static deserializeBinaryFromReader(r, c) {
            return s.zj(y.MBF(), r, c);
          }
          serializeBinary() {
            var r = new (d().BinaryWriter)();
            return y.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, c) {
            s.i0(y.M(), r, c);
          }
          serializeBase64String() {
            var r = new (d().BinaryWriter)();
            return (
              y.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserReviews_GetIndividualRecommendations_Request_RecommendationRequest";
          }
        }
        class S extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              S.prototype.recommendations || s.Sg(S.M()),
              h.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              S.sm_m ||
                (S.sm_m = {
                  proto: S,
                  fields: { recommendations: { n: 1, c: a, r: !0, q: !0 } },
                }),
              S.sm_m
            );
          }
          static MBF() {
            return S.sm_mbf || (S.sm_mbf = s.w0(S.M())), S.sm_mbf;
          }
          toObject(r = !1) {
            return S.toObject(r, this);
          }
          static toObject(r, c) {
            return s.BT(S.M(), r, c);
          }
          static fromObject(r) {
            return s.Uq(S.M(), r);
          }
          static deserializeBinary(r) {
            let c = new (d().BinaryReader)(r),
              K = new S();
            return S.deserializeBinaryFromReader(K, c);
          }
          static deserializeBinaryFromReader(r, c) {
            return s.zj(S.MBF(), r, c);
          }
          serializeBinary() {
            var r = new (d().BinaryWriter)();
            return S.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, c) {
            s.i0(S.M(), r, c);
          }
          serializeBase64String() {
            var r = new (d().BinaryWriter)();
            return (
              S.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserReviews_GetIndividualRecommendations_Response";
          }
        }
        var b;
        ((W) => {
          function r(fe, oe, te) {
            return fe.SendMsg("UserReviews.Update#1", (0, V.I8)(I, oe, te), H, {
              ePrivilege: 3,
            });
          }
          W.Update = r;
          function c(fe, oe, te) {
            return fe.SendMsg(
              "UserReviews.BackfillSavedHardware#1",
              (0, V.I8)(D, oe, te),
              n,
              { ePrivilege: 1 },
            );
          }
          W.BackfillSavedHardware = c;
          function K(fe, oe, te) {
            return fe.SendMsg(
              "UserReviews.GetFriendsRecommendedApp#1",
              (0, V.I8)(o, oe, te),
              u,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          W.GetFriendsRecommendedApp = K;
          function Se(fe, oe, te) {
            return fe.SendMsg(
              "UserReviews.GetIndividualRecommendations#1",
              (0, V.I8)(g, oe, te),
              S,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          W.GetIndividualRecommendations = Se;
        })(b || (b = {}));
      },
      94253: (q, _, t) => {
        "use strict";
        t.d(_, {
          t5: () => r,
          os: () => Ie,
          Qt: () => fe,
          CC: () => W,
          Oz: () => b,
          lu: () => c,
        });
        var e = t(23386),
          p = t(72609),
          h = t(68312),
          d = t(75233),
          s = t(80902),
          V = t(51614),
          C = t(90626),
          $ = t(33828),
          T = t(48491),
          L = t(67705),
          P = t(72604),
          N = t(31224),
          w = t(7112);
        const U = { bCanClaimNewItem: !1, bAlreadyClaimedCurrentItem: !1 };
        async function Y(B, M) {
          const E = await w.Qm.CanClaimItem(B, { language: M });
          if (E.GetEResult() != P.R)
            throw new Error(
              "SaleItemRewards.CanClaimItem answered " + E.GetEResult(),
            );
          const O = E.Body().toObject(),
            k = O.reward_item?.defid ? O.reward_item : void 0;
          return {
            bCanClaimNewItem: !!O.can_claim,
            bAlreadyClaimedCurrentItem: !!k,
            appid: k?.appid,
            community_item_type: k?.community_item_type,
            community_item_class: k?.community_item_class,
            rtNextClaimTime:
              (O.next_claim_time ?? 0) > 0 ? O.next_claim_time : void 0,
          };
        }
        async function ee(B, M) {
          const E = await w.Qm.ClaimItem(B, { language: M });
          if (E.GetEResult() == P.Ze) return Y(B, M);
          if (E.GetEResult() != P.R)
            throw new Error(
              "SaleItemRewards.ClaimItem answered " + E.GetEResult(),
            );
          const O = E.Body().toObject().reward_item;
          return {
            bCanClaimNewItem: !1,
            bAlreadyClaimedCurrentItem: !0,
            appid: O?.appid,
            community_item_type: O?.community_item_type,
            community_item_class: O?.community_item_class,
            rtNextClaimTime:
              (E.Body().next_claim_time() ?? 0) > 0
                ? E.Body().next_claim_time()
                : void 0,
          };
        }
        async function J(B, M) {
          const E = await N.uy.ActivateProfileModifierItem(B, {
            communityitemid: M.communityitemid,
            appid: M.appid,
            activate: !0,
          });
          if (E.GetEResult() != P.R)
            throw new Error(
              "Quest.ActivateProfileModifierItem answered " + E.GetEResult(),
            );
          return E.GetEResult();
        }
        async function I(B, M, E, O) {
          return (
            await w.Qm.GetCurrentDefinition(B, {
              sale_def_type: M,
              language: E,
              include_community_item_def: O,
            })
          )
            .Body()
            .toObject();
        }
        async function H(B, M, E, O) {
          return (
            await w.Qm.GetClaimedSaleRewards(B, {
              sale_def_type: M,
              language: E,
              include_community_item_def: O,
            })
          )
            .Body()
            .toObject();
        }
        let D;
        function n() {
          if (!D) {
            const B = (0, L.Fd)("loyalty_webapi_token", "application_config");
            D = B ? new T.D(p.TS.WEBAPI_BASE_URL, B) : (0, $.P)();
          }
          return D.GetServiceTransport();
        }
        async function l(B) {
          return Y(n(), B);
        }
        async function i(B) {
          return ee(n(), B);
        }
        async function m(B) {
          return J(n(), B);
        }
        const a = 300 * 1e3;
        let o = !1,
          u = null;
        const g = {
          appid: 2243810,
          community_item_type: 2,
          community_item_class: e.Ed,
        };
        function y(B) {
          return ["SaleItemCanClaim", B];
        }
        function S(B) {
          return {
            queryKey: y(B),
            queryFn: () => l(B),
            enabled: !o,
            staleTime: 1 / 0,
            retry: !1,
          };
        }
        function b() {
          const B = p.TS.LANGUAGE,
            M = (0, d.jE)(),
            { data: E, isLoading: O } = (0, s.I)(S(B)),
            k = E?.rtNextClaimTime;
          return (
            (0, C.useEffect)(() => {
              let de = 0;
              if (k) {
                const ce = () => {
                  const ae = k * 1e3 - Date.now();
                  if (ae <= 0) {
                    M.invalidateQueries({ queryKey: y(B) });
                    return;
                  }
                  de = window.setTimeout(ce, ae > a ? ae / 2 : ae);
                };
                ce();
              }
              return () => window.clearTimeout(de);
            }, [k, B, M]),
            { ...(E ?? U), bLoading: O }
          );
        }
        function W() {
          const B = (0, d.jE)(),
            { mutateAsync: M } = (0, V.n)({
              mutationFn: () => {
                if (u) {
                  const O = u;
                  return (u = null), Promise.resolve(O);
                }
                return o
                  ? Promise.resolve(B.getQueryData(y(p.TS.LANGUAGE)) ?? U)
                  : i(p.TS.LANGUAGE);
              },
              onSuccess: (O) => B.setQueryData(y(p.TS.LANGUAGE), O),
            });
          return { fnClaimItem: (0, C.useCallback)(() => M(), [M]) };
        }
        function r() {
          return (0, V.n)({ mutationFn: (B) => m(B) });
        }
        function c() {
          const B = (0, d.jE)();
          return {
            fnSetClaimState: (0, C.useCallback)(
              (E) => {
                (o = !0),
                  (u = E.bCanClaimNewItem
                    ? {
                        bAlreadyClaimedCurrentItem: !0,
                        bCanClaimNewItem: !1,
                        rtNextClaimTime: Math.floor(Date.now() / 1e3) + 3600,
                        ...g,
                      }
                    : null),
                  B.setQueryData(y(p.TS.LANGUAGE), E);
              },
              [B],
            ),
          };
        }
        function K(B, M, E) {
          return ["SaleRewardsGetDefinition", B, M, E];
        }
        function Se(B, M, E, O) {
          return {
            queryKey: K(M, E, O),
            queryFn: () => I(B, M, E, O),
            staleTime: 1 / 0,
          };
        }
        function fe(B, M, E) {
          const O = (0, h.KV)();
          return (0, s.I)(Se(O, B, M, E));
        }
        function oe(B, M, E, O) {
          return ["GetClaimedSaleRewards", B, M, !!E, O];
        }
        function te(B, M, E, O, k) {
          return {
            queryKey: oe(M, E, O, k),
            queryFn: () => H(B, M, E, O),
            staleTime: 1 / 0,
          };
        }
        function Ie(B, M, E, O) {
          const k = (0, h.KV)();
          return (0, s.I)(te(k, B, M, E, O));
        }
      },
      63639: (q, _, t) => {
        "use strict";
        t.d(_, { S: () => L });
        var e = t(7850),
          p = t(12997),
          h = t(90626),
          d = t(52438);
        const s = {
            name: "trailerPrefs",
            options: { path: "/", secure: !0, maxAge: 720 * 60 * 60 * 1e3 },
            preferenceControls: { isTechnicallyNecessary: !0 },
          },
          V = { flVolume: 0.8, bMuted: !0 };
        function C(P) {
          return P.flVolume === V.flVolume && P.bMuted === V.bMuted;
        }
        function $() {
          try {
            const P = (0, d.j_)(s);
            if (!P) return V;
            const N = JSON.parse(P);
            return {
              flVolume: typeof N.flVolume == "number" ? N.flVolume : V.flVolume,
              bMuted: typeof N.bMuted == "boolean" ? N.bMuted : V.bMuted,
            };
          } catch {
            return V;
          }
        }
        function T(P) {
          C(P) || Object.keys(P).length == 0
            ? (0, d.Y1)(s)
            : (0, d.eV)(s, JSON.stringify(P));
        }
        function L(P) {
          let { children: N } = P;
          const [w, U] = (0, h.useState)(() => $());
          return (
            (0, h.useEffect)(() => {
              T(w);
            }, [w]),
            (0, e.jsx)(p.v, {
              playerVolume: w.flVolume,
              setPlayerVolume: (Y) => U((ee) => ({ ...ee, flVolume: Y })),
              audioMuted: w.bMuted,
              setAudioMuted: (Y) => U((ee) => ({ ...ee, bMuted: Y })),
              children: N,
            })
          );
        }
      },
      72408: (q, _, t) => {
        "use strict";
        t.d(_, { y3: () => tt, W3: () => pt, TK: () => at, u4: () => dt });
        var e = t(7850),
          p = t(19298),
          h = t(29522),
          d = t(40358),
          s = t(72865),
          V = t(10134),
          C = t(62292),
          $ = t(80902),
          T = t(68312),
          L = t(98609),
          P = t(20125);
        async function N(F, x) {
          const G = (0, P.Am)(L.TS.STORE_BASE_URL, x, L.iA.country_code);
          return (await (await fetch(G)).json()).rgRecommendedTags || [];
        }
        function w() {
          const F = (0, T.KV)(),
            x = L.iA.accountid;
          return (0, $.I)(U(F, x));
        }
        function U(F, x) {
          return {
            queryKey: Y(x),
            queryFn: async () => (x ? await N(F, x) : []),
            staleTime: 600 * 1e3,
          };
        }
        function Y(F) {
          return ["RecommendedTag", F ?? 0];
        }
        var ee = t(54528),
          J = t(96362),
          I = t(90626),
          H = t(21690),
          D = t(36707),
          n = t(18210),
          l = t(3166),
          i = t(74732),
          m = t(31377),
          a = t(36054),
          o = t.n(a),
          u = t(63639),
          g = t(21721),
          y = t(25046),
          S = t(87249),
          b = t(50573),
          W = t(41032),
          r = t(47045),
          c = t(16412),
          K = t(36118),
          Se = t(97996),
          fe = t(57589),
          oe = t(83581),
          te = t.n(oe);
        function Ie(F, x) {
          I.useEffect(() => {
            if (!x || !x.onended || !F) return;
            let G = x.onended,
              me = setTimeout(() => {
                G();
              }, 6 * 1e3);
            return () => clearTimeout(me);
          }, [F, x]);
        }
        function B(F, x) {
          I.useEffect(() => {
            if (!F) return;
            const G = () => x(!0),
              R = () => x(!1);
            return (
              F.addEventListener("play", G),
              F.addEventListener("pause", R),
              () => {
                F.removeEventListener("play", G),
                  F.removeEventListener("pause", R);
              }
            );
          }, [x, F]);
        }
        function M(F, x, G, R) {
          return I.useCallback(() => {
            F == b.Tw
              ? x(!0)
              : F == b.g && G
                ? G.paused
                  ? G.play()
                  : G.pause()
                : F == b.Jh && R && (R.IsPaused() ? R.Play() : R.Pause());
          }, [F, G, R, x]);
        }
        function E(F, x, G, R, me, ie) {
          const [ye, De] = I.useState(!1);
          I.useEffect(() => {
            F && !ye
              ? x == b.g && G && R
                ? (G.pause(), De(!0))
                : x == b.Jh && me && ie && (me.Pause(), De(!0))
              : !F &&
                ye &&
                (x == b.g && G ? G.play() : x == b.Jh && me && me.Play(),
                De(!1));
          }, [x, F, ye, R, ie, G, me]);
        }
        var O = t(64271),
          k = t(39905);
        const de = new fe.wd("TrailerAppVideo"),
          ce = "bGameHighlightAutoplayDisabled";
        function ae(F) {
          const {
              id: x,
              bCurrentlyActive: G,
              autoPlayCookieName: R,
              trailerBaseID: me,
              showScreenshotInsteadOfMainCap: ie,
              autoplayCheckboxPosition: ye,
              refTogglePlayPause: De,
              bShowAOAutoPlayWarning: Le,
              ...Ze
            } = F,
            [Qe, $e] = I.useState(!1),
            [Fe, Ge] = I.useState(!1),
            ke = (0, W.$9)(),
            Ye = (0, y.BF)(x, me, !0, Le),
            { data: Xe } = (0, d.J$)(x),
            { data: lt } = (0, d.lv)(x),
            qe = (0, g.DT)(x),
            Be = (Le ?? !0) && Ye && !Ye.all_ages && ke == "masked",
            it = (0, W.AS)(),
            [rt, ot] = I.useState(!1),
            [st, At] = I.useState(b.Tw),
            [_e, vt] = (0, I.useState)(null),
            [Ve, St] = (0, I.useState)(null),
            { bCookieLoaded: gt } = be(R, G, $e),
            ct = gt;
          I.useEffect(() => {
            G && ct && Qe && !Be && Ge(!0);
          }, [Qe, ct, G, Be]),
            I.useEffect(() => {
              Be && Fe && Qe && it();
            }, [Fe, Be, Qe, it]);
          const ht = (Q) => {
              (0, Se.lc)(R ?? ce, String(!Q), 365 * 10), $e(Q), Ge(Q);
            },
            ut = M(st, Ge, Ve, _e);
          I.useEffect(() => {
            De && (De.current = ut);
          }, [ut, De]);
          const we =
            ie && qe && qe.length > 0
              ? (0, g.bu)(qe[0], "600x338")
              : lt
                ? (0, g.b0)(lt, "main_capsule")
                : void 0;
          return (0, e.jsxs)(p.Z, {
            className: te().AppCarouselTrailerCtn,
            onMouseEnter: () => ot(!0),
            onMouseLeave: () => ot(!1),
            children: [
              (0, e.jsx)("button", {
                onClick: ut,
                "aria-label": k.Z.Localize("#SaleTrailerCarousel_PlayPause"),
                children: (0, e.jsx)("img", {
                  className: (0, D.A)(
                    te().AppMainCap,
                    st != b.Tw && te().Hidden,
                  ),
                  src: we,
                  alt: "",
                }),
              }),
              Xe &&
                (0, e.jsx)(Ue, {
                  appID: Xe.appid,
                  bAutoplayVideos: Qe,
                  autoplayCheckboxPosition: ye,
                  fnSetAutoPlayVideos: ht,
                }),
              (0, e.jsx)(b.hj, {
                name: Xe?.name ?? "",
                trailerCategory: Ye?.trailer_category,
                trailerDisplay: st,
                mouseOver: rt,
              }),
              (0, e.jsx)(We, {
                eTrailerDisplay: st,
                setTrailerDisplay: At,
                featuredTrailer: Ye,
                fnSetMainTrailer: vt,
                fnSetMicroTrailer: St,
                loadedAndActive: ct && G,
                setVideoShouldStart: Ge,
                bMouseOverVideo: rt,
                id: x,
                fnTogglePlayPause: ut,
                bAutoplayVideos: Qe,
                bVideoShouldStart: Fe,
                ...Ze,
              }),
              Be &&
                Qe &&
                (0, e.jsxs)("div", {
                  className: te().AOWarning,
                  children: [
                    (0, e.jsx)("div", {
                      className: te().Text,
                      children: (0, n.we)("#StoreTrailer_AOWarning_1"),
                    }),
                    (0, e.jsx)("div", {
                      className: te().Text,
                      children: (0, n.we)("#StoreTrailer_AOWarning_2"),
                    }),
                  ],
                }),
            ],
          });
        }
        function he(F, x) {
          const [G, R] = I.useState(!1);
          return (
            I.useEffect(() => (F && (x(), R(!0)), () => R(!1)), [F, x]),
            { bCookieLoaded: G }
          );
        }
        function be(F, x, G) {
          const R = I.useCallback(() => {
            const me = (0, Se.VY)(F ?? ce),
              ie = !!(me && me.toLowerCase() === "true");
            G(!ie);
          }, [F, G]);
          return he(x, R);
        }
        function We(F) {
          const {
              id: x,
              featuredTrailer: G,
              bSkipMicroTrailer: R,
              nFadeRatio: me,
              fnPlayPause: ie,
              bRequestPause: ye,
              fnComplete: De,
              eTrailerDisplay: Le,
              setTrailerDisplay: Ze,
              fnSetMainTrailer: Qe,
              fnSetMicroTrailer: $e,
              loadedAndActive: Fe,
              setVideoShouldStart: Ge,
              fnTogglePlayPause: ke,
              bAutoplayVideos: Ye,
              bVideoShouldStart: Xe,
            } = F,
            [lt, qe] = I.useState(!1),
            [Be, it] = I.useState(!1),
            [rt, ot] = I.useState(!1),
            [st, At] = I.useState(!1),
            [_e, vt] = (0, I.useState)(null),
            [Ve, St] = (0, I.useState)(null),
            { data: gt } = (0, d.J$)(x),
            ct = !!G;
          I.useEffect(() => {
            let we = !1;
            Fe &&
              Be &&
              ct &&
              (we = Le === b.Tw || (Le === b.g && !rt) || (Le === b.Jh && !st)),
              qe(we),
              ie?.(Ye && we);
          }, [ie, Le, st, rt, Fe, Ye, Be, ct]),
            B(Ve, ot),
            I.useEffect(() => {
              Xe ||
                (Ze(b.Tw),
                qe(!1),
                it(!1),
                Ve && (Ve.pause(), (Ve.currentTime = 0)),
                _e && (_e.Pause(), _e.SeekToStart()));
            }, [Xe, _e, Ve, Ze]);
          const ht = I.useRef(!1);
          I.useEffect(() => {
            if (Fe && Le === b.Tw)
              if ((it(!0), Xe)) {
                if (_e) {
                  de.Debug("Starting microtrailer"), Ze(b.g);
                  const we = () => f(ht, Ze, _e);
                  R || !Ve
                    ? we()
                    : (ot(!0),
                      (Ve.onended = we),
                      He(Ve, "microtrailer", () => ot(!1)));
                }
              } else de.Debug("Showing image");
          }, [Fe, Le, R, Xe, De, Ze, _e, Ve]),
            Ie(rt, Ve),
            I.useEffect(() => {
              Fe || Ge(!1);
            }, [Fe, Ge]),
            E(!!ye, Le, Ve, rt, _e, st);
          const ut = (0, I.useCallback)((we) => {
            $e(we), St(we);
          }, []);
          return !gt || !gt.visible || !G
            ? null
            : (0, e.jsxs)(e.Fragment, {
                children: [
                  lt &&
                    (0, e.jsx)(p.Z, {
                      focusable: !0,
                      onClick: ke,
                      className: te().PlayButton,
                      children: (0, e.jsx)(K.IOc, {}),
                    }),
                  G.microtrailer &&
                    (0, e.jsx)("video", {
                      className: nt(!0, Le),
                      ref: ut,
                      preload: "auto",
                      playsInline: !0,
                      muted: !0,
                      onClick: ke,
                      children: (0, e.jsx)(S.Ck, { trailer: G }),
                    }),
                  (0, e.jsx)(Ee, {
                    trailer: G,
                    onRefChange: (we) => {
                      vt(we), Qe(we);
                    },
                    eTrailerDisplay: Le,
                    fadeRatio: me,
                    onPlayPauseChange: At,
                    onPlaybackEnd: De,
                  }),
                ],
              });
        }
        function Ee(F) {
          let {
            trailer: x,
            eTrailerDisplay: G,
            fadeRatio: R,
            onPlayPauseChange: me,
            onPlaybackEnd: ie,
            onRefChange: ye,
          } = F;
          const [De, Le] = (0, I.useState)(null);
          (0, I.useEffect)(() => {
            if (R !== void 0 && De) {
              let ke = De.GetVolume() * R;
              De.SetVolume(ke, !0);
            }
          }, [R, De]);
          let Ze = G != b.Jh,
            Qe = nt(!1, G);
          const $e = (0, I.useMemo)(() => (0, y.hg)(x), [x]),
            Fe = (0, I.useCallback)((ke) => {
              Le(ke), ye(ke);
            }, []),
            Ge = (0, I.useCallback)(() => {
              me(!0);
            }, [me]);
          return (0, e.jsx)(u.S, {
            children: (0, e.jsx)("div", {
              className: Qe,
              children: (0, e.jsx)(O.P, {
                ref: Fe,
                dashManifests: $e.rgDashTrailers,
                hlsManifest: $e.rgHlsTrailers[0],
                captionManifest: (0, y.Wv)(x),
                screenshot: "",
                altText: x.trailer_name,
                forcePause: Ze,
                muteWhenAutoplayBlocked: !0,
                onPlaybackEnd: ie,
                onPlaybackStart: Ge,
                onPlayPauseChange: me,
              }),
            }),
          });
        }
        function f(F, x, G) {
          F.current ||
            ((F.current = !0),
            de.Debug("Starting main trailer"),
            x(b.Jh),
            G.Play());
        }
        function He(F, x, G) {
          F.play().catch((R) => {
            G(), de.Warning(`Failed to play ${x}: `, R);
          });
        }
        function nt(F, x) {
          return (0, D.A)({
            [te().AppVideo]: !0,
            [te().PlayFullTrailer]: x == b.Jh,
            [te().PlayMicrotrailer]: x == b.g,
            [te().NoTrailer]: x == b.Tw,
            [te().Microtrailer]: F,
            [te().Trailer]: !F,
          });
        }
        function Ue(F) {
          const {
              appID: x,
              bAutoplayVideos: G,
              fnSetAutoPlayVideos: R,
              autoplayCheckboxPosition: me,
            } = F,
            ie = { [me || "top"]: 0 };
          return (0, e.jsx)(e.Fragment, {
            children: (0, e.jsx)("div", {
              onClick: (ye) => {
                ye.preventDefault(), ye.stopPropagation();
              },
              className: te().AutoplayCheckboxCtn,
              children: (0, e.jsx)(
                c.Yh,
                {
                  controlled: !0,
                  checked: G,
                  className: te().AutoplayCheckbox,
                  style: ie,
                  label: r.n.Localize("#StoreTrailer_AutoPlayVideos"),
                  onChange: R,
                },
                x,
              ),
            }),
          });
        }
        function tt(F) {
          const {
              appID: x,
              trailerBaseID: G,
              focused: R,
              skipMicroTrailer: me,
              autoPlayCookieName: ie,
              showAOAutoPlayWarning: ye,
              showScreenshotInsteadOfMainCap: De,
              fadeRatio: Le,
              fnPlayPause: Ze,
              refTogglePlayPause: Qe,
              bRequestPause: $e,
              fnComplete: Fe,
            } = F,
            Ge = (0, h.$5)(x),
            { data: ke } = (0, d.J$)(Ge),
            { data: Ye } = (0, d.qI)(Ge),
            { bIsIgnored: Xe } = at(x),
            { bIsWishlisted: lt } = dt(x),
            { bIsWishlisted: qe } = dt(ke?.related_items?.parent_appid),
            [Be, it] = (0, H.FD)();
          return (0, e.jsxs)(p.Z, {
            className: (0, D.A)(o().AppVideoCtn, "AppVideoCtn"),
            children: [
              (0, e.jsx)("div", {
                className: (0, D.A)(
                  o().WishlistBadge,
                  (lt || qe) && o().Active,
                ),
                children: (0, n.we)("#Sale_OnWishlist"),
              }),
              Be &&
                (0, e.jsx)(H.Ff, {
                  eDisplay: it,
                  className: o().DeckVerifiedLogo,
                  storeItemPlatform: Ye,
                }),
              (0, e.jsxs)("div", {
                className: o().VideoArea,
                children: [
                  (0, e.jsx)(ft, { appID: x }),
                  (0, e.jsx)(
                    ae,
                    {
                      id: Ge,
                      trailerBaseID: G,
                      bCurrentlyActive: R && !Xe,
                      autoplayCheckboxPosition: "top",
                      autoPlayCookieName: ie,
                      bShowAOAutoPlayWarning: ye,
                      bSkipMicroTrailer: me,
                      nFadeRatio: Le,
                      showScreenshotInsteadOfMainCap: De,
                      fnPlayPause: Ze,
                      refTogglePlayPause: Qe,
                      bRequestPause: $e,
                      fnComplete: Fe,
                    },
                    x,
                  ),
                ],
              }),
            ],
          });
        }
        function at(F) {
          const x = (0, V.BD)(F),
            G = (0, s.ru)(),
            { mutateAsync: R } = (0, C.Q)(F, !x, G);
          return { bIsIgnored: x, fnUpdateIgnored: R };
        }
        function ft(F) {
          const { appID: x } = F,
            G = (0, l.Qn)(),
            { bIsIgnored: R, fnUpdateIgnored: me } = at(x);
          return (0, e.jsx)("div", {
            className: (0, D.A)(o().IgnoredCtn, R && o().Active),
            children: (0, e.jsxs)("div", {
              className: (0, D.A)(o().IgnoredInfo, R && o().Active),
              children: [
                (0, e.jsx)("div", {
                  className: o().IgnoredTitle,
                  children: (0, n.we)("#SaleTrailerCarousel_Ignored"),
                }),
                (0, e.jsx)("div", {
                  className: o().IgnoredDescription,
                  children: (0, n.we)(
                    "#SaleTrailerCarousel_IgnoredConfirmation",
                  ),
                }),
                (0, e.jsxs)(p.Z, {
                  className: (0, D.A)(o().UndoButton, o().UndoIgnoreButton),
                  onClick: me,
                  children: [
                    G &&
                      (0, e.jsx)(m.$m, {
                        button: i.g4.X,
                        type: m.wt.Light,
                        size: m.xY.Medium,
                      }),
                    (0, n.we)("#SaleTrailerCarousel_Undo"),
                  ],
                }),
              ],
            }),
          });
        }
        function dt(F) {
          const x = !!(0, ee.bB)(F),
            G = (0, s.ru)(),
            { mutate: R } = (0, J.s)(F, !x, G);
          return { bIsWishlisted: x, fnUpdateWishlist: R };
        }
        function pt(F) {
          const { data: x } = w(),
            G = I.useMemo(
              () =>
                new Map(
                  (x || []).map((ie) => ie.tagid).map((ie, ye) => [ie, ye]),
                ),
              [x],
            ),
            R = I.useMemo(() => new Map(F.map((ie, ye) => [ie, ye])), [F]);
          return I.useMemo(
            () =>
              F.slice().sort((ie, ye) =>
                G.has(ie) && !G.has(ye)
                  ? -1
                  : !G.has(ie) && G.has(ye)
                    ? 1
                    : G.has(ie)
                      ? G.get(ie) - (G.get(ye) ?? 0)
                      : R.get(ie) - R.get(ye),
              ),
            [R, G, F],
          );
        }
      },
      76617: (q, _, t) => {
        "use strict";
        t.d(_, { V: () => $ });
        function e(T) {
          return Object.prototype.toString.call(T) === "[object Object]";
        }
        function p(T) {
          if (!e(T)) return !1;
          const L = T.constructor;
          if (typeof L > "u") return !0;
          const P = L.prototype;
          return !(
            !e(P) || !Object.prototype.hasOwnProperty.call(P, "isPrototypeOf")
          );
        }
        function h(...T) {
          return JSON.stringify(T, (L, P) => {
            if (p(P)) {
              const N = {};
              return (
                Object.keys(P)
                  .sort()
                  .forEach((w) => {
                    N[w] = P[w];
                  }),
                N
              );
            }
            return P;
          });
        }
        var d = t(90626),
          s = t(7850);
        const V = (0, d.createContext)({ instances: {}, factories: {} });
        function C(T) {
          const { name: L, fnFactory: P, children: N } = T,
            w = React.useContext(V),
            [U] = useState({}),
            Y = useMemo(
              () => ({
                instances: U,
                factories: { ...w.factories, [L]: P },
                parent: w,
              }),
              [U, L, w],
            );
          return jsx(V.Provider, { value: Y, children: N });
        }
        function $(T, L) {
          const P = (0, d.useContext)(V),
            N = typeof T == "string" ? T : h(...T);
          let w = P;
          for (; w; ) {
            if (N in w.instances) return w.instances[N];
            if (N in w.factories) break;
            w = w.parent;
          }
          const Y = (w?.factories[N] ?? L)();
          return ((w ?? P).instances[N] = Y), Y;
        }
      },
      77426: (q, _, t) => {
        "use strict";
        t.d(_, { G: () => e });
        const e = {
          include_assets: !0,
          include_trailers: !0,
          include_basic_info: !0,
          include_tag_count: 20,
          include_release: !0,
          include_platforms: !0,
          include_screenshots: !0,
          include_reviews: !0,
        };
      },
      93125: (q, _, t) => {
        "use strict";
        t.d(_, { A: () => g, D: () => u });
        var e = t(7850),
          p = t(90626),
          h = t(75844),
          d = t(18210),
          s = t(99412),
          V = t(5858),
          C = t(36707),
          $ = t(56420),
          T = t.n($),
          L = Object.defineProperty,
          P = Object.getOwnPropertyDescriptor,
          N = (y, S, b, W) => {
            for (
              var r = W > 1 ? void 0 : W ? P(S, b) : S, c = y.length - 1, K;
              c >= 0;
              c--
            )
              (K = y[c]) && (r = (W ? K(S, b, r) : K(r)) || r);
            return W && r && L(S, b, r), r;
          };
        let w = class extends p.Component {
          static get hoverClass() {
            return T().hoverParent;
          }
          render() {
            const {
              persona: y,
              animating: S,
              className: b,
              size: W,
              dim: r,
              ...c
            } = this.props;
            let K = "";
            return (
              W == "medium"
                ? (K = T().Medium)
                : W == "large" && (K = T().Large),
              (0, e.jsxs)("div", {
                className: (0, C.A)(
                  T().SnoozeContainer,
                  y.online_state,
                  b,
                  S && T().animating,
                  K,
                  r && T().Dim,
                ),
                ...c,
                children: [
                  (0, e.jsx)("div", {
                    "data-text": "Z",
                    className: (0, C.A)(T().SnoozeZ, T().Z1),
                    children: "Z",
                  }),
                  (0, e.jsx)("div", {
                    "data-text": "Z",
                    className: (0, C.A)(T().SnoozeZ, T().Z2),
                    children: "Z",
                  }),
                  (0, e.jsx)("div", {
                    "data-text": "Z",
                    className: (0, C.A)(T().SnoozeZ, T().Z3),
                    children: "Z",
                  }),
                ],
              })
            );
          }
        };
        w = N([h.PA], w);
        var U = t(88363),
          Y = t(36118),
          ee = t(70342),
          J = t.n(ee),
          I = t(75975);
        const H = (0, h.PA)((y) => {
          const { persona: S, className: b, ...W } = y;
          if (!S || !S.is_online) return null;
          const r = S.HasStateFlag(U.R$),
            c = S.HasStateFlag(U.hs),
            K = S.m_eGamingDeviceType == s.LS$,
            Se = S.m_eGamingDeviceType == s.ppM,
            fe = !K && !Se && !c && S.HasStateFlag(U.sr);
          return (0, e.jsxs)(p.Fragment, {
            children: [
              r &&
                (0, e.jsx)("div", {
                  className: (0, C.A)(
                    b,
                    J().PersonaStatusIcon,
                    J().MobilePhoneIcon,
                    (0, V.rO)(S),
                  ),
                  title: (0, d.we)("#Platform_Hint_Mobile"),
                  ...W,
                  children: (0, e.jsx)(I.rf, {}),
                }),
              c &&
                (0, e.jsx)("div", {
                  className: (0, C.A)(
                    b,
                    J().PersonaStatusIcon,
                    J().VRIcon,
                    (0, V.rO)(S),
                  ),
                  title: (0, d.we)("#Platform_Hint_VR"),
                  ...W,
                  children: (0, e.jsx)(Y.MUh, {}),
                }),
              fe &&
                (0, e.jsx)("div", {
                  className: (0, C.A)(
                    b,
                    J().PersonaStatusIcon,
                    J().BigPictureIcon,
                    (0, V.rO)(S),
                  ),
                  title: (0, d.we)("#Platform_Hint_BigPicture"),
                  ...W,
                  children: (0, e.jsx)(Y.bPr, {}),
                }),
              K &&
                (0, e.jsx)("div", {
                  className: (0, C.A)(
                    b,
                    J().PersonaStatusIcon,
                    J().SteamDeckIcon,
                    (0, V.rO)(S),
                  ),
                  title: (0, d.we)("#Platform_Hint_SteamDeck"),
                  ...W,
                  children: (0, e.jsx)(Y.DQe, {}),
                }),
              Se &&
                (0, e.jsx)("div", {
                  className: (0, C.A)(
                    b,
                    J().PersonaStatusIcon,
                    J().SteamDeckIcon,
                    (0, V.rO)(S),
                  ),
                  title: (0, d.we)("#Platform_Hint_LegionGoS"),
                  ...W,
                  children: (0, e.jsx)(Y.DQe, {}),
                }),
            ],
          });
        });
        var D = t(18828),
          n = t.n(D),
          l = t(3166),
          i = Object.defineProperty,
          m = Object.getOwnPropertyDescriptor,
          a = (y, S, b, W) => {
            for (
              var r = W > 1 ? void 0 : W ? m(S, b) : S, c = y.length - 1, K;
              c >= 0;
              c--
            )
              (K = y[c]) && (r = (W ? K(S, b, r) : K(r)) || r);
            return W && r && i(S, b, r), r;
          };
        function o(y) {
          return (0, e.jsxs)(p.Fragment, {
            children: [
              (0, e.jsx)("span", {
                className: n().partyBeaconJoin,
                children: (0, d.we)("#User_WantsToPlay"),
              }),
              "\xA0\u2013\xA0",
              y.persona.GetCurrentGameName(),
            ],
          });
        }
        let u = class extends p.Component {
          render() {
            const {
              className: y,
              onContextMenu: S,
              persona: b,
              eFriendRelationship: W,
              bIsSelf: r,
              bParenthesizeNicknames: c,
              strNickname: K,
              bCompactView: Se,
              bHideGameName: fe,
              bHideEnhancedRichPresenceLabel: oe,
              bHideSnooze: te,
              bHideStatus: Ie,
              renderStatus: B,
              renderRichPresence: M,
              bHidePersona: E,
              bDNDSet: O,
              bHasPartyBeacon: k,
              bHasGamePrivacy: de,
              bNoMask: ce,
              bEllipsisName: ae,
              bDropPadding: he,
              ...be
            } = this.props;
            let We = null,
              Ee = null,
              f = null,
              He = [
                y,
                n().personaNameAndStatusLabel,
                (0, V.rO)(b),
                Se ? n().compactView : void 0,
                ce ? n().NoMask : void 0,
              ];
            k || b.has_public_party_beacon
              ? (Ee = (0, e.jsx)(o, { persona: b }))
              : (0, s.aPS)(W)
                ? ((Ee = (0, d.we)("#PersonaStateBlocked")),
                  He.push(n().blocked))
                : b.is_ingame
                  ? (!b.is_in_nonsteam_game || r || (0, s.S$u)(W)
                      ? (Ee = b.GetCurrentGameName())
                      : (Ee = (0, d.we)("#PersonaStateInNonSteamGame")),
                    !r && !E
                      ? (f = b.GetCurrentGameRichPresence())
                      : r &&
                        b.is_awayOrSnooze &&
                        (f = (0, d.we)("#PersonaStateAway")))
                  : b.m_broadcastAccountId &&
                    (Ee = (0, d.we)("#PersonaStateWatchingBroadcast")),
              Ee || (Ee = b.GetLocalizedOnlineStatus()),
              B && (Ee = B());
            let nt = !E && !te;
            te === !1 && (nt = !0),
              b.is_awayOrSnooze && nt && (We = (0, e.jsx)(w, { persona: b }));
            let Ue = (0, e.jsx)(e.Fragment, {});
            S
              ? (Ue = (0, e.jsx)("div", {
                  className: "ContextMenuButton",
                  onClick: S,
                  children: (0, e.jsx)(Y.GB9, {}),
                }))
              : He.push(n().noContextMenu),
              E && He.push(n().hidePersona),
              M && (f = M()),
              (fe || !f) && He.push(n().twoLine);
            const tt = !b.is_ingame && !Ie,
              at = !oe && f,
              ft = Ee && (!fe || !at),
              dt = (0, s.IDH)(l.TS.LAUNCHER_TYPE);
            let pt = K && !c,
              F = pt ? K : b.m_strPlayerName,
              x = !E && (ft || tt) && at;
            return (0, e.jsxs)("div", {
              ...be,
              className: (0, C.A)(...He),
              onContextMenu: S,
              children: [
                (0, e.jsxs)("div", {
                  className: (0, C.A)(
                    n().statusAndName,
                    x ? n().threeLines : void 0,
                  ),
                  children: [
                    (0, e.jsxs)("div", {
                      className: (0, C.A)(
                        n().playerName,
                        ae ? n().EllipsisName : void 0,
                      ),
                      children: [
                        F || "\xA0",
                        c &&
                          K &&
                          (0, e.jsxs)("span", {
                            className: n().playerNickname,
                            children: ["(", K, ")"],
                          }),
                      ],
                    }),
                    O &&
                      (0, e.jsx)("div", {
                        className: n().DNDContainer,
                        title: (0, d.we)("#User_ToggleDoNotDisturb"),
                        children: (0, e.jsx)(Y.Aj0, {}),
                      }),
                    pt &&
                      (0, e.jsx)("span", {
                        className: n().playerNicknameBracket,
                        title: (0, d.we)("#isNickname"),
                        children: " *",
                      }),
                    (0, e.jsx)(H, { persona: b }),
                    We,
                    (b.m_bPlayerNamePending || b.m_bAvatarPending) &&
                      dt &&
                      (0, e.jsx)("div", {
                        className: n().PendingPersona,
                        title: (0, d.we)("#SteamChina_PendingPersonaName"),
                        children: (0, e.jsx)(Y.zD7, {}),
                      }),
                    Ue,
                  ],
                }),
                !E &&
                  (0, e.jsxs)("div", {
                    className: n().richPresenceContainer,
                    children: [
                      (ft || tt) &&
                        (0, e.jsxs)("div", {
                          className: (0, C.A)(
                            n().gameName,
                            x ? n().threeLines : void 0,
                            n().richPresenceLabel,
                            he && n().dropPadding,
                            "no-drag",
                          ),
                          children: [
                            de &&
                              (0, e.jsx)("div", {
                                className: n().gameIsPrivateIcon,
                                title: (0, d.we)("#User_GameInfoHidden"),
                                children: (0, e.jsx)(Y.jZl, {}),
                              }),
                            Ee,
                          ],
                        }),
                      at &&
                        (0, e.jsxs)("div", {
                          className: (0, C.A)(
                            n().richPresenceLabel,
                            he && n().dropPadding,
                            "no-drag",
                          ),
                          children: [f, " "],
                        }),
                    ],
                  }),
              ],
            });
          }
        };
        u = a([h.PA], u);
        const g = (0, h.PA)((y) => {
          const {
            persona: S,
            bParenthesizeNicknames: b,
            strNickname: W,
            bIgnorePersonaStatus: r,
            bDisableColoring: c,
            className: K,
            ...Se
          } = y;
          let oe = W && !b ? W : S.m_strPlayerName;
          return (0, e.jsx)("span", {
            ...Se,
            className: (0, C.A)(
              K,
              c && n().DisableColoring,
              !r && (0, V.rO)(S),
            ),
            children: (0, e.jsxs)("span", {
              className: n().playerName,
              children: [
                oe || "\xA0",
                b &&
                  W &&
                  (0, e.jsxs)("span", {
                    className: n().playerNickname,
                    children: ["(", W, ")"],
                  }),
              ],
            }),
          });
        });
      },
      46943: (q, _, t) => {
        "use strict";
        t.d(_, { Ul: () => I, xz: () => n, $Y: () => D, i8: () => H });
        var e = t(7850),
          p = t(90626),
          h = t(75844),
          d = t(5858),
          s = t(36707),
          V = t(3166),
          C = t(13465);
        const $ =
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAIAAgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/P4mW5nmllmeSR3LMzMSSc1a07R73V72KzsILi9u5TiOC2RpJHPoFGSarQ/ef6n+de4fAn9oaL4D+DfGX9i6Uf8AhO9XSKDT9eZY3WxiDZcBGByTkn0JCZBxQB41qeiX+iXslnqNtdWF3H9+3uo2jkX6q2CKpgy208MsUzxyI4ZWViCDmvsr9rrUdT1j9nb4T6h8RBbH4qXUs0zMsSxXJ04hivnKoAU5MPGBg7uM7q+NpvvJ9R/OgAh+8/1P867T4POI/iz4Mc6U+u7NZtG/suPbuu8TKfKG4hct93njnmuKIltp5opYXjkRyrKykEHNWbDVbvSr63vbKaezvLeRZYbi3ZkkidTlWVhyCCMgjpQB6l+1F411nx58dPFWpa5a3mnXaXP2ZNOvXVpLKNBhYflJUY5PB5JJ6k15LN95PqP51a1PWr7WtQnvtRuLm/vrhzJNc3TtJLIx6lmbJJ9zVQCW5nhiiheSR3CqqqSSc0Af/9k=",
          T =
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gODAK/9sAQwAGBAUGBQQGBgUGBwcGCAoQCgoJCQoUDg8MEBcUGBgXFBYWGh0lHxobIxwWFiAsICMmJykqKRkfLTAtKDAlKCko/9sAQwEHBwcKCAoTCgoTKBoWGigoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo/8AAEQgAQABAAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8Inmk8+T94/3j/EfWmedJ/z0f/vo0T/6+T/eP86ZQA/zpP8Ano//AH0aPOk/56P/AN9GmVo6Loeq65M0Wj6ddXrr94QRF9v1I6fjQBR86T/no/8A30aPOk/56P8A99GtHW/Dus6GV/tjS7yyD8K00RVW+h6GsugB/nSf89H/AO+jT4JpPPj/AHj/AHh/EfWoafB/r4/94fzoAJ/9fJ/vH+dMp8/+vk/3j/OmUAXdE099W1mw06Jgsl3PHApPYswUH9a+qPF3iHSPhF4S0+003TxK0hMcEAbZvIA3SO2OvIz6k18nW88ttcRz28jxTRMHSRGKsrA5BBHQg1b1TWdT1fy/7V1G8vfLzs+0TNJtz1xknHQUAfUXw+8c6Z8UdN1HS9V0xIpUTM1s7eYkiE43KcAgg/lxg180+NtEHhzxZqmkqxdLWcojHqUPK598EV9CfBbwpF4G8J3fiLxA4trm5hEsnmceRCOQD/tHqR9B1r568a63/wAJH4r1TVghRLqYuinqE6KD74AoAxafB/r4/wDeH86ZT4P9fH/vD+dABP8A6+T/AHj/ADplPn/18n+8f50ygArt/gtpltq/xK0e2vYxJArPMUYZDFEZhn2yBXEV0/w203VNX8YWdloOoHTtQkWQx3IZl2gISeV55AI/GgD1H9pvxPdi/s/DcDGOz8pbqfHWRizBQfYbc/U+1eD12PxW0fWtE8Tpa+I9UOqXpt0cTl2bCEthctz1B/OuOoAKfB/r4/8AeH86ZT4P9fH/ALw/nQAT/wCvk/3j/OmVNPDJ58n7t/vH+E+tM8mT/nm//fJoAZV7Q9Xv9C1KLUNJuGtryMEJIoBIyCD1BHQmqnkyf883/wC+TR5Mn/PN/wDvk0AaHiHXtT8RX4vdau2u7oIIxIygHaCSBwB6msyn+TJ/zzf/AL5NHkyf883/AO+TQAynwf6+P/eH86PJk/55v/3yafBDJ58f7t/vD+E+tAH/2Q==",
          L =
            t.p +
            "images/applications/store/avatar_default_full.jpg?v=valveisgoodatcaching";
        var P = t(43047),
          N = t.n(P),
          w = t(71742),
          U = Object.defineProperty,
          Y = Object.getOwnPropertyDescriptor,
          ee = (l, i, m, a) => {
            for (
              var o = a > 1 ? void 0 : a ? Y(i, m) : i, u = l.length - 1, g;
              u >= 0;
              u--
            )
              (g = l[u]) && (o = (a ? g(i, m, o) : g(o)) || o);
            return a && o && U(i, m, o), o;
          };
        function J(l) {
          switch (l) {
            case "X-Small":
            case "Small":
              return $;
            case "Medium":
            case "MediumLarge":
              return T;
            case "Large":
            case "X-Large":
            case "FillArea":
              return L;
            default:
              return (0, w.z_)(l, `Unhandled size ${l}`), T;
          }
        }
        const I = p.memo(function (i) {
          const {
              strAvatarURL: m,
              size: a = "Medium",
              className: o,
              statusStyle: u,
              statusPosition: g,
              children: y,
              ...S
            } = i,
            b = p.useMemo(() => {
              const W = [];
              return m && W.push(m), W.push(J(a)), W;
            }, [m, a]);
          return (0, e.jsxs)("div", {
            className: (0, s.A)(
              N().avatarHolder,
              "avatarHolder",
              "no-drag",
              a,
              o,
            ),
            ...S,
            children: [
              (0, e.jsx)("div", {
                className: (0, s.A)(N().avatarStatus, "avatarStatus", g),
                style: u,
              }),
              (0, e.jsx)(C.c, {
                className: (0, s.A)(N().avatar, "avatar"),
                rgSources: b,
                draggable: !1,
              }),
              y,
            ],
          });
        });
        let H = class extends p.Component {
          render() {
            const {
              persona: l,
              size: i = "Medium",
              animatedAvatar: m,
              className: a,
              strBackupAvatarURL: o,
              ...u
            } = this.props;
            let g = "";
            return (
              m && m.image_small && m.image_small.length != 0
                ? (g = V.TS.MEDIA_CDN_COMMUNITY_URL + "images/" + m.image_small)
                : l
                  ? ((g = l.avatar_url_medium),
                    i == "Small" || i == "X-Small"
                      ? (g = l.avatar_url)
                      : (i == "Large" || i == "X-Large" || i == "FillArea") &&
                        (g = l.avatar_url_full))
                  : o && (g = o),
              (0, e.jsx)(I, {
                strAvatarURL: g,
                size: i,
                className: (0, s.A)((0, d.rO)(l), a),
                ...u,
              })
            );
          }
        };
        H = ee([h.PA], H);
        const D = (0, h.PA)((l) => {
          const {
            profileItem: i,
            className: m,
            bDisableAnimation: a,
            ...o
          } = l;
          if (!i || !i.image_small || i.image_small.length == 0) return null;
          let u = a ? i.image_large : i.image_small;
          return (
            u || (u = i.image_small),
            u.startsWith("https://") ||
              (u = V.TS.MEDIA_CDN_COMMUNITY_URL + "images/" + u),
            (0, e.jsx)("div", {
              className: (0, s.A)(N().avatarFrame, m, "avatarFrame"),
              ...o,
              children: (0, e.jsx)("img", {
                className: N().avatarFrameImg,
                src: u,
              }),
            })
          );
        });
        let n = class extends p.Component {
          m_timer;
          constructor(l) {
            super(l),
              (this.state = { bAnimate: this.props.loopDuration != "None" }),
              (this.m_timer = 0);
          }
          componentDidMount() {
            this.props.bParentHovered || this.SetupAnimationTimer();
          }
          SetupAnimationTimer() {
            let l = 0;
            switch (this.props.loopDuration) {
              case "Short":
                l = 2500;
                break;
              case "Medium":
                l = 5e3;
                break;
              case "Long":
                l = 1e4;
                break;
            }
            l != 0 &&
              (this.setState({ bAnimate: this.props.loopDuration != "None" }),
              (this.m_timer = window.setTimeout(
                () => this.setState({ bAnimate: !1 }),
                l,
              )));
          }
          StopAnimationTimer() {
            this.m_timer &&
              (window.clearTimeout(this.m_timer), (this.m_timer = 0));
          }
          onHover() {
            this.SetupAnimationTimer();
          }
          componentWillUnmount() {
            this.StopAnimationTimer();
          }
          componentDidUpdate(l) {
            this.props.loopDuration != l.loopDuration &&
              (this.props.loopDuration == "None"
                ? (this.setState({ bAnimate: !1 }), this.StopAnimationTimer())
                : this.props.loopDuration == "Infinite"
                  ? (this.setState({ bAnimate: !0 }), this.StopAnimationTimer())
                  : (this.setState({ bAnimate: !0 }),
                    this.SetupAnimationTimer())),
              this.props.bParentHovered != l.bParentHovered &&
                (this.props.bParentHovered &&
                this.props.loopDuration != "None" &&
                this.props.loopDuration != "Infinite"
                  ? (this.setState({ bAnimate: !0 }), this.StopAnimationTimer())
                  : this.state.bAnimate && this.SetupAnimationTimer());
          }
          render() {
            let {
              loopDuration: l,
              animatedAvatar: i,
              avatarFrame: m,
              children: a,
              style: o,
              bLimitProfileFrameAnimationTime: u,
              bParentHovered: g,
              ...y
            } = this.props;
            y.onClick && (o = { ...o, cursor: "pointer" });
            const S = this.state.bAnimate ? (i ?? void 0) : void 0;
            return (0, e.jsx)("div", {
              onMouseEnter: () =>
                this.setState({ bAnimate: this.props.loopDuration != "None" }),
              onMouseLeave: () => this.SetupAnimationTimer(),
              children: (0, e.jsxs)(H, {
                animatedAvatar: S,
                ...y,
                children: [
                  a,
                  (0, e.jsx)(D, {
                    profileItem: m ?? null,
                    bDisableAnimation: u && !this.state.bAnimate,
                  }),
                ],
              }),
            });
          }
        };
        n = ee([h.PA], n);
      },
      21079: (q, _, t) => {
        "use strict";
        t.d(_, {
          Dk: () => U,
          Mu: () => J,
          Y8: () => I,
          ws: () => Y,
          zo: () => ee,
        });
        var e = t(72604),
          p = t(35038),
          h = t(83153),
          d = t(9682),
          s = t(41735),
          V = t.n(s),
          C = t(80902),
          $ = t(75233),
          T = t(68312),
          L = t(77187),
          P = t(3166),
          N = t(90626);
        function w(n) {
          return ["AppRelevanceStore", "FriendsRecommended", n];
        }
        function U(n) {
          const l = (0, T.KV)();
          return (0, C.I)({
            queryKey: w(n),
            queryFn: () => H(l, n),
            enabled: P.iA.logged_in,
          });
        }
        function Y() {
          const n = (0, $.jE)();
          return N.useCallback(
            (l, i) => {
              n.setQueryData(w(l), i);
            },
            [n],
          );
        }
        function ee(n) {
          return (0, C.I)({
            queryKey: ["AppRelevanceStore", "StoreRelevance", n],
            queryFn: () => D(n),
            enabled: P.iA.logged_in,
          });
        }
        function J() {
          return (0, L.PG)("App Relevance Store Top Sellers", {
            sort: h.Dq.Rm,
            start: 0,
            count: 100,
          });
        }
        function I() {
          const { data: n } = J();
          return n;
        }
        async function H(n, l) {
          const i = p.w.Init(d.KV);
          i.Body().set_appid(l);
          const m = await d.YK.GetFriendsRecommendedApp(n, i),
            a = m.GetEResult();
          if (a == e.R) return m.Body().toObject();
          throw `Error ${a} failed to call GetFriendsRecommendedApp ${l}`;
        }
        async function D(n) {
          let l = { appid: n },
            i = { arrSimilarPlayedApps: [], bRecommendedByIR: !1 };
          const a = (
            await V().get(
              `${P.TS.STORE_BASE_URL}explore/ajaxgetstorerelevancedata`,
              { params: l, withCredentials: !0, timeout: 1e4 },
            )
          ).data;
          return (
            a &&
              a.success == e.R &&
              (a.results.similar_played_apps &&
                (i.arrSimilarPlayedApps = a.results.similar_played_apps.map(
                  (o) => ({
                    appid: o.appid,
                    playtimeForever: o.playtime_forever,
                  }),
                )),
              a.results.recommended_by_ir && (i.bRecommendedByIR = !0)),
            i
          );
        }
      },
      57810: (q, _, t) => {
        "use strict";
        t.d(_, {
          Bk: () => J,
          IH: () => l,
          Uf: () => n,
          WX: () => i,
          aI: () => D,
          bz: () => I,
        });
        var e = t(90626),
          p = t(14947),
          h = t(72604),
          d = t(35038),
          s = t(55051),
          V = t(8323),
          C = t(30096),
          $ = t(48473),
          T = t(3166),
          L = t(64868),
          P = t(49100),
          N = t(40497),
          w = Object.defineProperty,
          U = Object.getOwnPropertyDescriptor,
          Y = (m, a, o, u) => {
            for (
              var g = u > 1 ? void 0 : u ? U(a, o) : a, y = m.length - 1, S;
              y >= 0;
              y--
            )
              (S = m[y]) && (g = (u ? S(a, o, g) : S(g)) || g);
            return u && g && w(a, o, g), g;
          };
        function ee(m, a) {
          let o = m.toString();
          if (
            a?.strContentHubType != "newreleases" &&
            a?.strContentHubType != "upcoming"
          ) {
            const u = a?.nSaleTagID,
              g = a?.strContentHubType,
              y = a?.strContentHubCategory,
              S = a?.nContentHubTagID,
              b = a?.bDiscountsOnly,
              W = a?.bPrioritizeDiscounts,
              r = a?.strOptInName,
              c = a?.nOptInTagID,
              K = a?.nPruneTagID;
            u
              ? (o += "_" + u)
              : g &&
                ((o += "_" + g),
                g === "category" && y
                  ? (o += "_" + y)
                  : g === "tags" && S && (o += "_" + S),
                b ? (o += "_d") : W && (o += "_p"),
                r && c && K && (o += "_" + r));
          }
          return o;
        }
        function J(m) {
          return (0, $.bt)(JSON.stringify(m));
        }
        function I(m) {
          return JSON.parse((0, $.he)(m));
        }
        const H = class Dt {
          m_transport;
          m_mapDiscoveryQueues = new Map();
          m_mapSkippedApps = new Map();
          m_mapSkippedAppCount = new Map();
          m_mapInClientCompleted = new Map();
          m_mapInClientCompletedCallback = new Map();
          m_setExhuasted = new Set();
          m_mapExhuastedCallback = new Map();
          GetTotalSkippedAppsForDiscoveryQueue(a, o) {
            const u = ee(a, o);
            return this.m_mapDiscoveryQueues.get(u)?.skipped ?? 0;
          }
          GetNumAppsSeenForDiscoveryQueue(a, o) {
            const u = ee(a, o);
            return this.m_mapSkippedAppCount.get(u) || 0;
          }
          GetSkippedAppKey(a, o, u) {
            const g = ee(o, u);
            return `${a}_${g}`;
          }
          GetInClientCompletedQueues(a, o) {
            const u = ee(a, o);
            return this.m_mapInClientCompleted.get(u) || 0;
          }
          GetInClientCompletedQueuesCallback(a, o) {
            const u = ee(a, o);
            return (
              this.m_mapInClientCompletedCallback.has(u) ||
                this.m_mapInClientCompletedCallback.set(u, new V.lu()),
              this.m_mapInClientCompletedCallback.get(u)
            );
          }
          GetExhaustedCallback(a, o) {
            const u = ee(a, o);
            return (
              this.m_mapExhuastedCallback.has(u) ||
                this.m_mapExhuastedCallback.set(u, (0, V.Jc)(!1)),
              this.m_mapExhuastedCallback.get(u)
            );
          }
          BIsExhausted(a, o) {
            const u = ee(a, o);
            return this.m_setExhuasted.has(u);
          }
          async LoadDiscoveryQueue(a, o, u) {
            const g = ee(a, u);
            if (!this.m_transport) return h.zi;
            try {
              const y = (0, P.cw)(this.m_transport, a, o, u);
              o && (await N.L.invalidateQueries({ queryKey: y.queryKey }));
              const S = await N.L.fetchQuery(y);
              return (
                this.m_mapDiscoveryQueues.set(g, S),
                S.exhausted
                  ? (this.m_setExhuasted.add(g),
                    this.GetExhaustedCallback(a, u).Set(!0))
                  : (this.m_setExhuasted.delete(g),
                    this.GetExhaustedCallback(a, u).Set(!1)),
                this.m_mapSkippedAppCount.set(g, S.skipped || 0),
                h.R
              );
            } catch (y) {
              return (
                console.warn(
                  "Error",
                  y,
                  "failed to get discovery queue type",
                  a,
                  "key",
                  g,
                ),
                h.zi
              );
            }
          }
          async GetDiscoveryQueueAppsOfType(a, o, u) {
            const g = ee(a, u);
            return !o && this.m_mapDiscoveryQueues.has(g)
              ? {
                  appids: this.m_mapDiscoveryQueues.get(g).appids,
                  exhausted: !!this.m_mapDiscoveryQueues.get(g).exhausted,
                }
              : (await this.LoadDiscoveryQueue(a, o, u),
                {
                  appids: this.m_mapDiscoveryQueues.get(g).appids,
                  exhausted: !!this.m_mapDiscoveryQueues.get(g).exhausted,
                });
          }
          async SkipDiscoveryQueueItem(a, o, u) {
            const g = this.GetSkippedAppKey(a, o, u);
            if (!this.m_mapSkippedApps.has(g)) {
              const y = ee(o, u),
                S = this.m_mapDiscoveryQueues.get(y)?.appids,
                b = S?.[S.length - 1] == a;
              this.m_mapSkippedApps.set(g, !0),
                this.m_mapSkippedAppCount.set(
                  y,
                  (this.m_mapSkippedAppCount.get(y) || 0) + 1,
                );
              const W = d.w.Init(s.fe);
              if (
                (W.Body().set_appid(a),
                W.Body().set_queue_type(o),
                (u?.nSaleTagID || u?.strContentHubType) &&
                  W.Body().set_store_page_filter((0, P.Jy)(u, !0)),
                !this.m_transport)
              ) {
                console.warn(
                  "Error",
                  "no transport",
                  "failed to skip appid ",
                  a,
                ),
                  this.m_mapSkippedApps.delete(g);
                return;
              }
              const c = (
                await s.nd.SkipDiscoveryQueueItem(this.m_transport, W)
              ).GetEResult();
              c != h.R && c != h.Ze
                ? (console.warn("Error", c, "failed to skip appid ", a),
                  this.m_mapSkippedApps.delete(g))
                : b && this.MarkDiscoveryQueueCompleted(o, u);
            }
          }
          MarkDiscoveryQueueCompleted(a, o) {
            const u = ee(a, o);
            if (this.m_mapInClientCompleted.has(u)) {
              const g = this.m_mapInClientCompleted.get(u) + 1;
              this.m_mapInClientCompleted.set(u, g),
                this.GetInClientCompletedQueuesCallback(a, o).Dispatch(g);
            } else
              this.m_mapInClientCompleted.set(u, 0),
                this.GetInClientCompletedQueuesCallback(a, o).Dispatch(0);
          }
          async LoadSkippedApps(a, o) {
            const u = ee(a, o),
              g = d.w.Init(s.pS);
            if (
              (g.Body().set_steamid(T.iA.steamid),
              g.Body().set_queue_type(a),
              (o?.nSaleTagID || o?.strContentHubType) &&
                g.Body().set_store_page_filter((0, P.Jy)(o, !0)),
              !this.m_transport)
            )
              return (
                console.warn(
                  "Failed to retrieve skipped apps for discovery queue, no transport.",
                  a,
                  o,
                ),
                []
              );
            const y = await s.nd.GetDiscoveryQueueSkippedApps(
              this.m_transport,
              g,
            );
            return y.GetEResult() === h.R
              ? y.Body().appids() || []
              : (console.warn(
                  "Failed to retrieve skipped apps for discovery queue.",
                  a,
                  o,
                  y.GetEResult(),
                ),
                []);
          }
          static s_DiscoveryQueueStore = null;
          static Init(a) {
            Dt.Get().m_transport = a;
          }
          static BHasTransport() {
            return !!Dt.Get().m_transport;
          }
          static Get() {
            return (
              this.s_DiscoveryQueueStore ||
                (this.s_DiscoveryQueueStore = new Dt()),
              this.s_DiscoveryQueueStore
            );
          }
          constructor() {
            (0, p.Gn)(this);
          }
        };
        Y([p.sH], H.prototype, "m_mapDiscoveryQueues", 2);
        let D = H;
        function n(m, a) {
          const [o, u] = (0, e.useState)(
            D.Get().GetInClientCompletedQueues(m, a),
          );
          return (
            (0, C.hL)(D.Get().GetInClientCompletedQueuesCallback(m, a), u), o
          );
        }
        function l(m, a) {
          return (0, L.gc)(D.Get().GetExhaustedCallback(m, a));
        }
        function i(m, a) {
          const o = e.useMemo(
            () => (0, T.Tc)("discovery_queue_name", "application_config"),
            [],
          );
          return typeof o == "string" && o.length > 0 ? o : "";
        }
      },
      35098: (q, _, t) => {
        "use strict";
        t.d(_, { DW: () => N, js: () => L, mK: () => J, tb: () => ee });
        var e = t(90626),
          p = t(80902),
          h = t(54806),
          d = t(99412),
          s = t(68312),
          V = t(15369),
          C = t(5858),
          $ = t(76559),
          T = t(15860);
        function L(n) {
          const l = (0, s.KV)(),
            i = e.useContext(Y);
          return (0, p.I)(J(i, l, n));
        }
        function P(n) {
          const l = React.useRef(void 0),
            i = L(n);
          return i.data
            ? i
            : (l.current ||
                (l.current = new CPersonaStateImpl(
                  typeof n == "string"
                    ? new CSteamID(n)
                    : CSteamID.InitFromAccountID(n),
                )),
              { ...i, data: l.current });
        }
        function N(n) {
          const l = (0, s.KV)(),
            i = e.useContext(Y);
          return (0, h.E)({ queries: n.map((m) => J(i, l, m)) });
        }
        function w(n) {
          return ReactQueryClient.getQueryData(["PlayerSummary", n]);
        }
        function U(n) {
          const { loadPersonaState: l, children: i } = n,
            m = React.useMemo(() => ({ loadPersonaState: l }), [l]);
          return React.createElement(Y.Provider, { value: m }, i);
        }
        const Y = e.createContext({
          loadPersonaState: async (n, l) => {
            if (n == null) return null;
            const i = await H(l).load(
              $.b.InitFromAccountID(n).ConvertTo64BitString(),
            );
            return D($.b.InitFromAccountID(n), i);
          },
        });
        function ee() {
          return e.useContext(Y);
        }
        function J(n, l, i) {
          const m = typeof i == "string" ? new $.b(i).GetAccountID() : i;
          return {
            queryKey: ["PlayerSummary", m],
            queryFn: () => n.loadPersonaState(m, l),
            enabled: !!m,
          };
        }
        let I;
        function H(n) {
          return (I ??= (0, T.c)(n));
        }
        function D(n, l) {
          let i = new C.Z(n);
          const m = l?.public_data,
            a = l?.private_data;
          return (
            (i.m_bInitialized = !!l),
            (i.m_ePersonaState = a?.persona_state ?? d.cU3),
            (i.m_strAvatarHash = m?.sha_digest_avatar
              ? (0, V.Kx)(m.sha_digest_avatar)
              : C.dV),
            (i.m_strPlayerName = m?.persona_name ?? n.ConvertTo64BitString()),
            (i.m_strAccountName = a?.account_name),
            a?.persona_state_flags &&
              (i.m_unPersonaStateFlags = a?.persona_state_flags),
            a?.game_id && (i.m_gameid = a?.game_id),
            a?.game_server_ip_address &&
              (i.m_unGameServerIP = a?.game_server_ip_address),
            a?.lobby_steam_id && (i.m_game_lobby_id = a?.lobby_steam_id),
            a?.game_extra_info && (i.m_strGameExtraInfo = a?.game_extra_info),
            m?.profile_url && (i.m_strProfileURL = m.profile_url),
            i
          );
        }
      },
      84676: (q, _, t) => {
        "use strict";
        t.d(_, {
          G6: () => N,
          Gg: () => Y,
          Ow: () => U,
          Sq: () => T,
          YM: () => n,
          eR: () => L,
          ik: () => P,
          mZ: () => ee,
          t7: () => w,
          zX: () => I,
        });
        var e = t(41735),
          p = t.n(e),
          h = t(90626),
          d = t(72604),
          s = t(56062),
          V = t(30096),
          C = t(10142);
        function $(l, i, m = !0) {
          const a = m
              ? CStoreItemCache.k_DataRequest_BasicInfo
              : CStoreItemCache.k_DataRequest_CommonOnly,
            o = m || CStoreItemCache.Get().BHasStoreItem(l, i, a) ? l : null,
            [u, g] = N(o, i, a),
            [y, S] = useState(null),
            [b, W] = N(y, i, a);
          useEffect(() => {
            u?.GetAppType() === EStoreAppType.k_EStoreAppType_Demo &&
              S(u.GetParentAppID());
          }, [u]);
          let r = u?.GetShortDescription()
            ? StripBBCodeTags(u.GetShortDescription())
            : "";
          (!r || r.length === 0) &&
            b &&
            (r = b?.GetShortDescription()
              ? StripBBCodeTags(b.GetShortDescription())
              : "");
          const c = g == P && (!y || W == P);
          return [r, c];
        }
        const T = 1,
          L = 2,
          P = 3;
        function N(l, i, m, a) {
          const o = (0, h.useRef)(void 0),
            u = (0, h.useRef)(void 0),
            g = (0, V.CH)();
          o.current = l;
          const [y, S] = (0, h.useState)(void 0),
            {
              include_assets: b,
              include_release: W,
              include_platforms: r,
              include_all_purchase_options: c,
              include_screenshots: K,
              include_trailers: Se,
              include_ratings: fe,
              include_tag_count: oe,
              include_reviews: te,
              include_basic_info: Ie,
              include_supported_languages: B,
              include_full_description: M,
              include_included_items: E,
              include_assets_without_overrides: O,
              apply_user_filters: k,
              include_links: de,
              include_extra_details: ce,
            } = m;
          if (
            ((0, h.useEffect)(() => {
              const he = {
                include_assets: b,
                include_release: W,
                include_platforms: r,
                include_all_purchase_options: c,
                include_screenshots: K,
                include_trailers: Se,
                include_ratings: fe,
                include_tag_count: oe,
                include_reviews: te,
                include_basic_info: Ie,
                include_supported_languages: B,
                include_full_description: M,
                include_included_items: E,
                include_assets_without_overrides: O,
                apply_user_filters: k,
                include_links: de,
                include_extra_details: ce,
              };
              let be = null;
              return (
                !l ||
                  l < 0 ||
                  C.A.Get().BHasStoreItem(l, i, he) ||
                  (y !== void 0 && a && a == u.current) ||
                  (a !== u.current && (S(void 0), (u.current = a)),
                  (be = p().CancelToken.source()),
                  C.A.Get()
                    .QueueStoreItemRequest(l, i, he)
                    .then((We) => {
                      !be?.token.reason && o.current === l && S(We == d.R), g();
                    })),
                () => be?.cancel("useStoreItemCache: unmounting")
              );
            }, [
              l,
              i,
              a,
              y,
              b,
              W,
              r,
              c,
              K,
              Se,
              fe,
              oe,
              te,
              Ie,
              B,
              M,
              E,
              O,
              k,
              de,
              ce,
              g,
            ]),
            !l)
          )
            return [null, L];
          if (y === !1) return [void 0, L];
          if (C.A.Get().BIsStoreItemMissing(l, i)) return [void 0, L];
          if (!C.A.Get().BHasStoreItem(l, i, m)) return [void 0, T];
          const ae = C.A.Get().GetStoreItemWithLegacyVisibilityCheck(l, i);
          return ae ? [ae, P] : [null, L];
        }
        function w(l, i, m) {
          return N(l, s.c6.qI, i, m);
        }
        function U(l, i, m) {
          return N(l, s.c6.xO, i, m);
        }
        function Y(l, i, m) {
          return N(l, s.c6.RD, i, m);
        }
        function ee(l, i, m) {
          const [a, o] = N(l, i, m);
          let u;
          a?.GetStoreItemType() == s.c6.RD &&
            !a.GetAssets()?.GetHeaderURL() &&
            a?.GetIncludedAppIDs().length == 1 &&
            (u = a.GetIncludedAppIDs()[0]);
          const [g, y] = w(u, m);
          return u && g?.BIsVisible() ? [g, y] : [a, o];
        }
        function J(l, i, m, a) {
          const o = (0, V.CH)(),
            {
              include_assets: u,
              include_release: g,
              include_platforms: y,
              include_all_purchase_options: S,
              include_screenshots: b,
              include_trailers: W,
              include_ratings: r,
              include_tag_count: c,
              include_reviews: K,
              include_basic_info: Se,
              include_supported_languages: fe,
              include_full_description: oe,
              include_included_items: te,
              include_assets_without_overrides: Ie,
              apply_user_filters: B,
              include_links: M,
              include_extra_details: E,
            } = m;
          return (
            (0, h.useEffect)(() => {
              if (!l || l.length == 0) return;
              const k = {
                  include_assets: u,
                  include_release: g,
                  include_platforms: y,
                  include_all_purchase_options: S,
                  include_screenshots: b,
                  include_trailers: W,
                  include_ratings: r,
                  include_tag_count: c,
                  include_reviews: K,
                  include_basic_info: Se,
                  include_supported_languages: fe,
                  include_full_description: oe,
                  include_included_items: te,
                  include_assets_without_overrides: Ie,
                  apply_user_filters: B,
                  include_links: M,
                  include_extra_details: E,
                },
                de = l.filter(
                  (he) =>
                    !(
                      C.A.Get().BHasStoreItem(he, i, k) ||
                      C.A.Get().BIsStoreItemMissing(he, i)
                    ),
                );
              if (de.length == 0) return;
              const ce = p().CancelToken.source(),
                ae = de.map((he) => C.A.Get().QueueStoreItemRequest(he, i, k));
              return (
                Promise.all(ae).then(() => {
                  ce.token.reason || o();
                }),
                () => ce.cancel("useStoreItemCacheMultiplePackages: unmounting")
              );
            }, [
              l,
              i,
              a,
              o,
              u,
              g,
              y,
              S,
              b,
              W,
              r,
              c,
              K,
              Se,
              fe,
              oe,
              te,
              Ie,
              B,
              M,
              E,
            ]),
            l
              ? l.every(
                  (k) =>
                    C.A.Get().BHasStoreItem(k, i, m) ||
                    C.A.Get().BIsStoreItemMissing(k, i),
                )
                ? l.every((k) =>
                    C.A.Get().GetStoreItemWithLegacyVisibilityCheck(k, i),
                  )
                  ? P
                  : L
                : T
              : L
          );
        }
        function I(l, i, m) {
          return J(l, s.c6.qI, i, m);
        }
        function H(l, i, m) {
          return J(l, EStoreItemType.k_EStoreItemType_Bundle, i, m);
        }
        function D(l, i, m) {
          return J(l, EStoreItemType.k_EStoreItemType_Package, i, m);
        }
        function n() {
          h.useEffect(
            () => (
              C.A.Get().SetReturnUnavailableItems(!0),
              () => C.A.Get().SetReturnUnavailableItems(!1)
            ),
            [],
          );
        }
      },
      77187: (q, _, t) => {
        "use strict";
        t.d(_, { E2: () => w, PG: () => Y });
        var e = t(7850),
          p = t(90626),
          h = t(80902),
          d = t(72604),
          s = t(35038),
          V = t(83153),
          C = t(84192),
          $ = t(10142),
          T = t(71742),
          L = t(68312);
        const P = p.createContext({}),
          N = () => p.useContext(P);
        function w(I) {
          let { defaultOptions: H, children: D } = I,
            n = p.useMemo(() => ({ defaultOptions: H || {} }), [H]);
          return (0, e.jsx)(P.Provider, { value: n, children: D });
        }
        const U = "StoreQueryStore";
        function Y(I, H, D, n) {
          let l = N();
          const i = (0, L.KV)();
          l ||
            (0, T.wT)(!1, "useStoreQuery called outside of a <StoreQueryRoot>");
          let m = l.defaultOptions;
          const a = p.useMemo(() => {
            let y = [];
            return (
              n?.content_descriptors_excluded
                ? (y = n.content_descriptors_excluded)
                : m?.content_descriptors_excluded &&
                  (y = m.content_descriptors_excluded),
              {
                ...H,
                filters: { content_descriptors_excluded: y, ...H.filters },
              }
            );
          }, [H, n, m]);
          let o;
          n?.override_country_code !== void 0
            ? (o = n.override_country_code)
            : m?.override_country_code !== void 0 &&
              (o = m.override_country_code);
          let u = { staleTime: 3600 * 1e3 };
          n?.reactQuery && (u = { ...u, ...n.reactQuery });
          const g = [U, a, D ?? {}, n ?? {}];
          return (0, h.I)({
            queryKey: g,
            queryFn: () => ee(i, I, a, D ?? {}, o),
            ...u,
          });
        }
        async function ee(I, H, D, n, l) {
          const i = s.w.Init(V.iU);
          (0, C.rV)(i),
            n && (0, C.Bn)(i, n),
            l && i.Body().set_override_country_code(l),
            i.Body().set_query(V.nu.fromObject(D)),
            i.Body().set_query_name(H);
          const m = await V.Fs.Query(I, i);
          if (m.GetEResult() != d.R)
            throw `Error executing StoreQuery "${H}", EResult: ${m.GetEResult()}`;
          return new J(m, n);
        }
        class J {
          m_Items = void 0;
          m_rgItemIDs = void 0;
          m_metadata = void 0;
          constructor(H, D) {
            this.ReadResults(H, D);
          }
          GetItems() {
            return this.m_Items;
          }
          GetItemIDs() {
            return this.m_rgItemIDs;
          }
          GetMetadata() {
            return this.m_metadata;
          }
          ReadResults(H, D) {
            this.m_Items ||
              ((0, T.wT)(
                H.Body().metadata().start() == 0,
                "Empty item list - expected to start at 0",
              ),
              (this.m_Items = []));
            const n = H.Body().ids() || [];
            if (
              ((this.m_rgItemIDs = n.map((l) => l.toObject())),
              H.Body().store_items())
            )
              for (const l of H.Body().store_items()) {
                const i = $.A.Get().ReadItem(l, D);
                i && this.m_Items.push(i);
              }
            this.m_metadata = H.Body().metadata().toObject();
          }
        }
      },
      64377: (q, _, t) => {
        "use strict";
        t.d(_, { K: () => C, _: () => V });
        var e = t(7850),
          p = t(90626),
          h = t(95892),
          d = t(19298);
        const s = p.createContext({ enabled: !0 });
        function V($) {
          const { enabled: T, children: L } = $,
            P = p.useMemo(() => ({ enabled: T }), [T]);
          return (0, e.jsx)(s.Provider, { value: P, children: L });
        }
        function C($) {
          const {
              placeholderWidth: T,
              placeholderHeight: L,
              holdGamepadFocus: P = !1,
              onRender: N,
              style: w,
              mode: U = "JustLoad",
              children: Y,
              ...ee
            } = $,
            J = p.useContext(s),
            [I, H] = p.useState(() => ({
              bRenderChildren: !J.enabled,
              nPrevRenderHeight: 0,
              nPrevRenderWidth: 0,
            })),
            D = p.useRef(null),
            n = U === "LoadAndUnload" && J.enabled,
            l = p.useCallback(
              (o) => {
                H((u) => {
                  if (u.bRenderChildren === o || (u.bRenderChildren && !n))
                    return u;
                  let g = 0,
                    y = 0;
                  if (D.current) {
                    const S = D.current.getBoundingClientRect();
                    S && ((g = S.width), (y = S.height));
                  }
                  return (
                    o && N && N(),
                    {
                      bRenderChildren: o,
                      nPrevRenderWidth: g,
                      nPrevRenderHeight: y,
                    }
                  );
                });
              },
              [n, N],
            );
          p.useEffect(() => {
            J.enabled || l(!0);
          }, [J.enabled, l]);
          let i = w;
          if (!I.bRenderChildren) {
            const o = I.nPrevRenderWidth || T,
              u = I.nPrevRenderHeight || L;
            (u !== void 0 || o !== void 0) &&
              (i = { ...w, minHeight: u, minWidth: o });
          }
          const m = n ? "repeated" : "once";
          let a = (0, e.jsx)(h.J, {
            containerRef: D,
            style: i,
            ...ee,
            onVisibilityChange: l,
            trigger: m,
            children: I.bRenderChildren && Y,
          });
          return (
            P &&
              (a = (0, e.jsx)(d.Z, {
                focusableIfEmpty: !0,
                style: { height: "100%" },
                children: a,
              })),
            a
          );
        }
      },
      6394: (q, _, t) => {
        "use strict";
        t.d(_, { g: () => W });
        var e = t(7850),
          p = t(65946),
          h = t(90626),
          d = t(83153),
          s = t(6469),
          V = t(10142),
          C = t(77187),
          $ = t(6778),
          T = t(36707),
          L = t(18210),
          P = t(3166),
          N = t(57810),
          w = t(71477),
          U = t.n(w),
          Y = t(7112),
          ee = t(94253),
          J = t(41635),
          I = t(80902),
          H = t(19298),
          D = t(95892),
          n = t(40358),
          l = t(21721),
          i = t(15830),
          m = t(86048),
          a = t(64868);
        function o(B) {
          const {
              arrDiscoveryApps: M,
              onClick: E,
              className: O,
              bDisableAnimation: k = !1,
              children: de,
              ...ce
            } = B,
            ae = (0, P.Qn)(),
            [he, be] = (0, h.useState)(!ae),
            [We, Ee] = (0, h.useState)(!1),
            f = (0, h.useRef)(Date.now()),
            He = 3e4,
            nt = h.useCallback(
              (tt) => {
                Ee(tt), ae || be(tt);
              },
              [ae],
            ),
            Ue = h.useCallback(() => {
              (f.current = Date.now()), !ae && We && be(!0);
            }, [ae, We]);
          return (
            (0, a.$$)(() => {
              Date.now() - f.current > He && !ae && be(!1);
            }, 5e3),
            (0, m.l6)(window, "scroll", Ue),
            (0, m.l6)(window, "mousemove", Ue),
            (0, e.jsx)(D.J, {
              trigger: "repeated",
              onVisibilityChange: nt,
              children: (0, e.jsxs)(H.Z, {
                focusable: !0,
                onGamepadFocus: () => be(!0),
                onMouseEnter: () => ae && be(!0),
                onGamepadBlur: () => be(!1),
                onMouseLeave: () => ae && be(!1),
                onActivate: E,
                onOKActionDescription: (0, L.we)("#DiscoveryQueue_OpenWizard"),
                className: (0, T.A)(
                  i.DiscoveryQueueWidgetCtn,
                  O,
                  M !== void 0 && i.Initialized,
                ),
                ...ce,
                children: [
                  (0, e.jsx)(g, { rgAppIDs: M, bAnimationEnabled: !k && he }),
                  de,
                ],
              }),
            })
          );
        }
        let u;
        function g(B) {
          const {
              rgAppIDs: M,
              bAnimationEnabled: E = !0,
              nCapsuleWidth: O = 320,
            } = B,
            [k, de] = h.useState(null);
          return (
            h.useEffect(() => {
              if (!E || !k) return;
              u || (u = performance.now());
              const ce = k.offsetWidth;
              let ae;
              const he = () => {
                const We =
                  (((performance.now() - u) / 40) % (ce - 3 * O - 16)) + O;
                (k.style.transform = `translateX( -${We}px )`),
                  (ae = requestAnimationFrame(he));
              };
              return (
                (ae = requestAnimationFrame(he)), () => cancelAnimationFrame(ae)
              );
            }, [k, E, O]),
            !M || !M.length
              ? null
              : (0, e.jsx)("div", {
                  className: i.AppCarouselPosition,
                  style: { "--capsule-width": `${O}px` },
                  children: (0, e.jsxs)("div", {
                    ref: de,
                    className: (0, T.A)(i.AppCarouselCtn, "vt-scrollable"),
                    style: { transform: `translateX( -${O}px )` },
                    children: [
                      M.map((ce) =>
                        (0, e.jsx)(y, { appID: ce }, "Capsule_" + ce),
                      ),
                      [...M, ...M]
                        .slice(0, 3)
                        .map((ce, ae) =>
                          (0, e.jsx)(y, { appID: ce }, `Capsule2_${ae}_${ce}`),
                        ),
                    ],
                  }),
                })
          );
        }
        function y(B) {
          const { appID: M } = B,
            E = { appid: M },
            { data: O } = (0, n.J$)(E),
            k = (0, l.pd)(M),
            de = (0, l.DT)(E) || [],
            { data: ce } = (0, n.lv)(E);
          if (!k) return null;
          let ae = de.length
            ? (0, l.bu)(de[0], "600x338")
            : ce && (0, l.b0)(ce, "main_capsule");
          const he = {
            backgroundImage: `radial-gradient(135% 125% at 100% 0%, rgba(0, 0, 0, 0) 22.5%, rgba(0, 0, 0, 1) 92.5%)${ae ? `, url('${ae}')` : ""}`,
          };
          return (0, e.jsxs)("div", {
            className: i.AppCapsuleCtn,
            style: he,
            children: [
              (0, e.jsx)("div", {
                className: (0, T.A)(i.CapsuleColumn, i.LibraryImage),
                children: (0, e.jsx)("img", { src: k, alt: O?.name }),
              }),
              (0, e.jsx)("div", {
                className: i.CapsuleColumn,
                children: (0, e.jsx)("div", {
                  className: i.AppName,
                  children: O?.name,
                }),
              }),
            ],
          });
        }
        var S = t(85742),
          b = t(32994);
        function W(B) {
          return (0, $.G)()
            ? (0, e.jsxs)(r, {
                children: [
                  (0, e.jsx)(te, {}),
                  P.iA.logged_in
                    ? (0, e.jsx)(K, { ...B })
                    : (0, e.jsx)(fe, { ...B }),
                ],
              })
            : null;
        }
        function r(B) {
          const [M, E] = (0, s.L2)();
          let O = (0, p.q3)(() => E.ExcludedContentDescriptor),
            k = h.useMemo(() => ({ content_descriptors_excluded: O }), [O]);
          return M
            ? null
            : (0, e.jsx)(C.E2, { defaultOptions: k, children: B.children });
        }
        function c(B, M) {
          const { data: E } = (0, I.I)({
            queryKey: ["DiscoveryQueueLoader", B, M],
            queryFn: async () => {
              const { appids: O, exhausted: k } = await N.aI
                .Get()
                .GetDiscoveryQueueAppsOfType(B, !1, M);
              let de = { ...S.LB, include_screenshots: !0 };
              return (
                await V.A.Get().QueueMultipleAppRequests(O ?? [], de),
                { rgDiscoveryApps: O, exhausted: k }
              );
            },
            enabled: P.iA.logged_in,
          });
          return [E?.rgDiscoveryApps, E?.exhausted];
        }
        function K(B) {
          const {
              eStoreDiscoveryQueueType: M,
              strQueueDescriptionOverride: E,
              ...O
            } = B,
            { showDiscoveryQueue: k, bQueueVisible: de } = (0, S.GV)(M, O),
            ce = (0, b.lI)(),
            [ae, he] = c(M, O.storePageFilter),
            be = de || !!ce.data?.preferences?.disable_animated_marketing,
            We = h.useCallback(() => {
              !he && k();
            }, [he, k]),
            Ee = h.useId();
          return (0, e.jsx)(e.Fragment, {
            children: (0, e.jsx)(o, {
              "aria-labelledby": Ee,
              onClick: We,
              arrDiscoveryApps: ae,
              bDisableAnimation: be,
              className: U().DiscoveryQueueWidget,
              children:
                !he &&
                (0, e.jsx)(Se, { id: Ee, strQueueDescriptionOverride: E }),
            }),
          });
        }
        function Se(B) {
          const { strQueueDescriptionOverride: M, id: E } = B,
            O = M ?? (0, L.we)("#DiscoveryQueue_WidgetHeader");
          return (0, e.jsxs)("div", {
            id: E,
            className: (0, T.A)(U().WidgetHeaderCtn, "WidgetHeaderCtn"),
            children: [
              (0, e.jsx)("div", {
                className: U().WidgetHeaderText,
                children: (0, L.we)("#DiscoveryQueue_WidgetHeader_Yours"),
              }),
              (0, e.jsx)("div", {
                className: U().WidgetHeaderSubText,
                children: O,
              }),
            ],
          });
        }
        function fe(B) {
          const M = oe(!0),
            E = h.useCallback(() => {
              window.location.href = `${P.TS.STORE_BASE_URL}login?redir=${encodeURIComponent(document.location.href)}`;
            }, []);
          return (0, e.jsx)(o, {
            onClick: E,
            arrDiscoveryApps: M ? J.Nv(M) : void 0,
            children: (0, e.jsxs)("div", {
              className: (0, T.A)(U().WidgetHeaderCtn, "WidgetHeaderCtn"),
              children: [
                (0, e.jsx)("div", {
                  className: U().WidgetHeaderText,
                  children: (0, L.we)("#DiscoveryQueue_WidgetHeader_Yours"),
                }),
                (0, e.jsx)("div", {
                  className: U().WidgetHeaderSubText,
                  children: (0, L.we)("#DiscoveryQueue_WidgetHeader_LoggedOut"),
                }),
                (0, e.jsx)("div", {
                  className: U().LoginButton,
                  children: (0, L.we)("#DiscoveryQueue_Error_Login_Title"),
                }),
              ],
            }),
          });
        }
        function oe(B) {
          let { data: M } = (0, C.PG)(
            "DiscoveryQueueWidget",
            {
              sort: d.Dq.Rm,
              start: 0,
              count: 12,
              filters: { type_filters: { include_games: !0 } },
            },
            { ...S.LB, include_screenshots: !0 },
            { reactQuery: { enabled: B, staleTime: 1 / 0 } },
          );
          return (0, h.useMemo)(
            () => M && M.GetItemIDs().map((E) => E.appid),
            [M],
          );
        }
        function te() {
          const B = (0, ee.Qt)(Y.L6.Jz, P.TS.LANGUAGE, !0),
            M = (0, P.Qn)();
          if (!B.data?.definition || (B.data?.reward_items?.length ?? 0) == 0)
            return null;
          const E = B?.data.reward_items ?? [];
          (0, J.fW)(E);
          const O = E.slice(0, 3);
          let k = null;
          return (
            P.iA.logged_in &&
              !M &&
              (k = (0, e.jsxs)(e.Fragment, {
                children: [
                  " - ",
                  (0, e.jsx)("a", {
                    href: P.TS.COMMUNITY_BASE_URL + "my/itemcollection",
                    children: (0, L.we)("#DiscoveryQueue_SaleStatus_Link"),
                  }),
                ],
              })),
            (0, e.jsxs)("div", {
              className: U().SaleTopSection,
              children: [
                (0, e.jsx)(Ie, { rgRewardItems: O }),
                (0, e.jsxs)("div", {
                  className: U().SaleTextCtn,
                  children: [
                    (0, e.jsx)("div", {
                      className: U().BoldText,
                      children: (0, L.we)("#DiscoveryQueue_Widget_SaleDesc"),
                    }),
                    (0, e.jsxs)("div", {
                      children: [
                        (0, L.we)(
                          "#DiscoveryQueue_Widget_SaleTitle",
                          (0, L._l)(
                            B.data.definition.rtime_end_time ?? 0,
                            !1,
                            !1,
                            !1,
                            !1,
                          ),
                        ),
                        k,
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        }
        function Ie(B) {
          const { rgRewardItems: M } = B,
            E = M.map((O) => {
              if (!O.community_definition || !O.community_definition.item_name)
                return null;
              const k = `${P.TS.COMMUNITY_ASSETS_BASE_URL}images/items/${O.appid}/${O.community_definition.item_image_small}`;
              return (0, e.jsx)(
                "div",
                {
                  className: U().SaleSticker,
                  children: (0, e.jsx)("img", { src: k }),
                },
                O.community_definition.item_name.toString(),
              );
            });
          return (0, e.jsx)("div", {
            className: U().StickerArrangement,
            children: J.Nv(E),
          });
        }
      },
      87192: (q, _, t) => {
        "use strict";
        t.r(_), t.d(_, { default: () => st });
        var e = t(7850),
          p = t(90626),
          h = t(24660),
          d = t(19298),
          s = t(78365),
          V = t(20169),
          C = t(7112),
          $ = t(55051),
          T = t(68312),
          L = t(37740),
          P = t(72865),
          N = t(71568),
          w = t(6469),
          U = t(94253),
          Y = t(10142),
          ee = t(84676),
          J = t(36118),
          I = t(51079),
          H = t(47689),
          D = t(36707),
          n = t(18210),
          l = t(57589),
          i = t(13854),
          m = t(41672),
          a = t(3166),
          o = t(57810),
          u = t(40594);
        function g({
          nPercent: Q,
          indeterminate: A,
          animate: v,
          className: j,
        }) {
          return jsx("div", {
            className: classnames(
              styles.ProgressBar,
              v && styles.AnimateProgress,
              A && styles.Indeterminate,
              j,
            ),
            style: { "--percent": Q / 100 },
          });
        }
        const y = ({ nPercent: Q, size: A = 120, strokeWidth: v = 20 }) => {
          const j = (A - v) / 2,
            Z = 2 * Math.PI * j,
            X = Z - (Q / 100) * Z,
            se = Q == 100;
          return (0, e.jsx)("div", {
            className: (0, D.A)({ [u.Circular]: !0, [u.Full]: se }),
            children: (0, e.jsxs)("svg", {
              width: A,
              height: A,
              style: { transform: "rotate(-90deg)" },
              children: [
                (0, e.jsx)("circle", {
                  cx: A / 2,
                  cy: A / 2,
                  r: j,
                  stroke: "#0c131d",
                  strokeWidth: v,
                  fill: "none",
                }),
                (0, e.jsx)("circle", {
                  cx: A / 2,
                  cy: A / 2,
                  r: j,
                  stroke: "#1a9fff",
                  strokeWidth: v,
                  fill: "none",
                  strokeDasharray: Z,
                  strokeDashoffset: X,
                  style: { transition: "stroke-dashoffset 0.3s ease-in-out" },
                }),
              ],
            }),
          });
        };
        var S = t(85599),
          b = t(21659),
          W = t(12742),
          r = t(62571),
          c = t(72408),
          K = t(48357),
          Se = t(80104),
          fe = t(27284),
          oe = t(31377),
          te = t(71421),
          Ie = t(53113),
          B = t(74732),
          M = t(80902),
          E = t(99412),
          O = t(46943),
          k = t(93125),
          de = t(76559),
          ce = t(813),
          ae = t(60480),
          he = t(14874),
          be = t(80702),
          We = t(21079),
          Ee = t(57834),
          f = t.n(Ee),
          He = t(35098),
          nt = t(58612),
          Ue = t(24642);
        const tt = new l.wd("AppRelevance").Debug;
        function at(Q, A) {
          const v = (0, p.useMemo)(
            () => w.Fm.Get().GetRecommendingCuratorsForApp(Q) || [],
            [Q],
          );
          return (0, M.I)({
            queryKey: ["RecommendingCurators", Q],
            queryFn: () =>
              Promise.all(v?.map((j) => ce.ac.LoadClanInfoForClanAccountID(j))),
            enabled: !!A && v && v.length > 0,
          });
        }
        function ft(Q) {
          const {
              appID: A,
              bShowAvatars: v,
              storeItem: j,
              bHideDescription: Z,
              bShowCuratorInfo: X,
              bShowCreatorInfo: se,
            } = Q,
            z = (0, nt.Nd)(A),
            re = (0, We.Dk)(A),
            pe = (0, We.zo)(A),
            xe = (0, We.Y8)(),
            ge = (0, M.I)({
              queryKey: ["SimilarPlayedAppsLoad", A],
              queryFn: () =>
                Y.A.Get().QueueMultipleAppRequests(
                  pe.data.arrSimilarPlayedApps?.map((le) => le.appid),
                  { include_basic_info: !0, include_assets: !0 },
                ),
              enabled: pe.isSuccess,
            }),
            Ke = at(A, X),
            Te = (0, p.useMemo)(() => {
              let le = [];
              return (
                j &&
                  ((le = le.concat(
                    j
                      .GetAllFranchiseCreatorClans()
                      .map((Ne) => ({ nAccountID: Ne, type: "franchise" })),
                  )),
                  (le = le.concat(
                    j
                      .GetAllDeveloperCreatorClans()
                      .map((Ne) => ({ nAccountID: Ne, type: "developer" })),
                  )),
                  (le = le.concat(
                    j
                      .GetAllPublisherCreatorClans()
                      .map((Ne) => ({ nAccountID: Ne, type: "publisher" })),
                  )),
                  (le = le.filter((Ne) =>
                    w.Fm.Get().BIsFollowingCurator(Ne.nAccountID),
                  ))),
                le
              );
            }, [j]),
            Ae = (0, M.I)({
              queryKey: ["FollowedCreators", A],
              queryFn: () =>
                ce.ac
                  .LoadClanInfoForClanAccountID(Te[0].nAccountID)
                  .then((le) => ({ clanInfo: le, type: Te[0].type })),
              enabled: !!se && Te && Te.length > 0,
            }),
            Ce = (0, M.I)({
              queryKey: ["PlayerSummaries", A, v],
              queryFn: async () => {
                let le = [],
                  Ne = [],
                  mt = [];
                const yt = v ? 10 : 1;
                for (
                  let Me = 0;
                  Me < re.data.accountids_recommended?.length && Me < yt;
                  Me++
                ) {
                  const Je = de.b.InitFromAccountID(
                    re.data.accountids_recommended[Me],
                  );
                  le.push(Je.ConvertTo64BitString());
                }
                for (
                  let Me = 0;
                  Me < z.data.in_wishlist?.length && Me < yt;
                  Me++
                ) {
                  const Je = new de.b(z.data.in_wishlist[Me].steamid);
                  Ne.push(Je.ConvertTo64BitString());
                }
                for (let Me = 0; Me < z.data.owns?.length && Me < yt; Me++) {
                  const Je = new de.b(z.data.owns[Me].steamid);
                  mt.push(Je.ConvertTo64BitString());
                }
                return {
                  rgRecommendedFriends: le,
                  rgWishlistFriends: Ne,
                  rgOwnedFriends: mt,
                };
              },
              enabled: re.isSuccess && z.isSuccess,
            });
          if (
            !xe ||
            ge.isLoading ||
            pe.isLoading ||
            re.isLoading ||
            z.isLoading ||
            Ke.isLoading ||
            Ae.isLoading ||
            Ce.isLoading
          )
            return (0, e.jsx)(S.t, { size: "medium", position: "center" });
          let ze = [];
          pe.isSuccess &&
            pe.data.arrSimilarPlayedApps &&
            pe.data.arrSimilarPlayedApps.slice(0, 2).forEach((le) => {
              const Ne = Y.A.Get().GetApp(le.appid);
              Ne
                ? ze.push(
                    (0, e.jsx)(
                      F,
                      { lifetimePlaytime: le.playtimeForever, storeItem: Ne },
                      le.appid,
                    ),
                  )
                : console.error("Failed to load store data ", A);
            });
          const je = xe.GetItemIDs().findIndex((le) => le.appid === A),
            Oe = pe.data?.bRecommendedByIR,
            Re = ze.length > 0,
            et = z.data?.owns?.length,
            ne = z.data?.in_wishlist?.length,
            Pe = re.data?.accountids_recommended?.length;
          let ve = 0;
          return (
            et > 0 && ve++,
            ne > 0 && ve++,
            Pe > 0 && ve++,
            Oe && ve++,
            je >= 0 && ve++,
            ze.length > 0 && ve++,
            X && Ke?.data?.length > 0 && ve++,
            se && Ae.data && ve++,
            tt(
              "FriendsOwned: ",
              et,
              " FriendsWishlisted: ",
              ne,
              "cRecommended: ",
              Pe,
            ),
            (0, e.jsxs)(e.Fragment, {
              children: [
                ve > 0 &&
                  (0, e.jsxs)(e.Fragment, {
                    children: [
                      (0, e.jsx)("div", {
                        className: f().WhyRelevant,
                        children: (0, n.we)("#DiscoveryQueue_WhyRelevant"),
                      }),
                      (0, e.jsxs)("div", {
                        role: "list",
                        className: f().RelevantCtn,
                        children: [
                          Re &&
                            (0, e.jsx)(ie, {
                              header: (0, n.we)("#DiscoveryQueue_SimilarGames"),
                              children: (0, e.jsx)("div", {
                                className: f().ReleventSimilarAppsCtn,
                                children: ze,
                              }),
                            }),
                          X &&
                            Ke?.data?.length > 0 &&
                            (0, e.jsx)(ie, {
                              header: (0, n.we)(
                                "#ContentHub_Recommendation_Curators",
                              ),
                              children: (0, e.jsx)("div", {
                                className: (0, D.A)(
                                  f().ReleventSimilarAppsCtn,
                                  f().RecommendingCuratorsCtn,
                                ),
                                children: Ke.data
                                  .filter(Boolean)
                                  .map((le) =>
                                    (0, e.jsx)(
                                      pt,
                                      { curator: le },
                                      "curator_" + le.clanAccountID,
                                    ),
                                  ),
                              }),
                            }),
                          se &&
                            !!Ae.data &&
                            (0, e.jsx)(dt, { creatorInfo: Ae.data }),
                          je >= 0 &&
                            (0, e.jsx)(ie, {
                              header: (0, n.um)(
                                "#DiscoveryQueue_TopSellers",
                                (0, Ue.D)(je + 1),
                                (0, e.jsx)("span", {
                                  className: f().RelevantTextBold,
                                }),
                              ),
                            }),
                          Oe &&
                            !Re &&
                            (0, e.jsx)(ie, {
                              header: (0, n.we)(
                                "#DiscoveryQueue_RecommendedByIR",
                              ),
                            }),
                          (0, e.jsx)(x, {
                            bShowAvatars: v,
                            count: re.data?.accountids_recommended?.length,
                            locToken: "#DiscoveryQueue_FriendsRecommended",
                            arrSteamIDs: Ce.data?.rgRecommendedFriends,
                          }),
                          (0, e.jsx)(x, {
                            bShowAvatars: v,
                            count: z.data?.owns?.length,
                            locToken: "#DiscoveryQueue_FriendsOwned",
                            arrSteamIDs: Ce.data?.rgOwnedFriends,
                          }),
                          (0, e.jsx)(x, {
                            bShowAvatars: v,
                            count: z.data?.in_wishlist?.length,
                            locToken: "#DiscoveryQueue_FriendsWishlisted",
                            arrSteamIDs: Ce.data?.rgWishlistFriends,
                          }),
                        ],
                      }),
                    ],
                  }),
                !Z || ve == 0
                  ? (0, e.jsx)("div", {
                      className: (0, D.A)(
                        f().AppDescription,
                        ve && f().Divider,
                      ),
                      children: j.GetShortDescription(),
                    })
                  : (0, e.jsx)("div", {
                      "aria-label": j.GetShortDescription(),
                    }),
              ],
            })
          );
        }
        function dt(Q) {
          const { creatorInfo: A } = Q;
          if (!A) return null;
          let v;
          switch (A.type) {
            case "publisher":
              v = "#ContentHub_Recommendation_FollowedPublisher";
              break;
            case "developer":
              v = "#ContentHub_Recommendation_FollowedDeveloper";
              break;
            case "franchise":
              v = "#ContentHub_Recommendation_FollowedFranchise";
              break;
          }
          return v
            ? (0, e.jsx)(ie, {
                header: (0, n.PP)(
                  v,
                  (0, e.jsx)("span", {
                    className: f().RelevantTextBold,
                    children: A.clanInfo?.group_name,
                  }),
                ),
              })
            : null;
        }
        function pt(Q) {
          const { curator: A } = Q,
            { creatorHome: v } = (0, ae.FV)(A?.clanAccountID);
          return !A || !v
            ? null
            : (0, e.jsx)(h.Ii, {
                href: v.GetCreatorHomeURL(null),
                children: (0, e.jsx)("img", { src: A.avatar_medium_url }),
              });
        }
        function F(Q) {
          const { lifetimePlaytime: A, storeItem: v } = Q,
            j = (0, he.DJ)(v);
          return (0, e.jsx)("div", {
            className: f().SimilarAppCtn,
            children: (0, e.jsx)(be.Q, {
              id: j,
              bHidePrice: !0,
              hoverProps: {
                direction: "overlay",
                nBodyAlignment: 1,
                style: { minWidth: "320px", zIndex: 5e3 },
              },
              children: (0, e.jsx)("img", {
                className: f().SimilarAppImg,
                alt: v.GetName(),
                src: v.GetAssets().GetSmallCapsuleURL(),
              }),
            }),
          });
        }
        function x(Q) {
          const { arrSteamIDs: A, count: v, locToken: j, bShowAvatars: Z } = Q;
          return v
            ? v == 1 && !Z
              ? (0, e.jsx)(ie, {
                  header: (0, n.PP)(
                    j + "_Single",
                    (0, e.jsx)(G, { steamid: A[0] }),
                  ),
                })
              : (0, e.jsx)(ie, {
                  header: (0, n.um)(
                    j,
                    v,
                    (0, e.jsx)("span", { className: f().RelevantTextBold }),
                  ),
                  children:
                    Z &&
                    A.length > 0 &&
                    (0, e.jsx)("div", {
                      className: f().FriendAvatarsCtn,
                      children:
                        v == 1
                          ? (0, e.jsx)(me, { steamid: A[0] })
                          : (0, e.jsx)(R, { arrSteamIDs: A }),
                    }),
                })
            : null;
        }
        function G(Q) {
          const { steamid: A } = Q,
            { data: v } = (0, He.js)(A);
          return !v || !v.m_bInitialized
            ? null
            : (0, e.jsx)("span", {
                "data-miniprofile": "s" + v.m_steamid.ConvertTo64BitString(),
                className: f().RelevantTextBold,
                children: v.m_strPlayerName,
              });
        }
        function R(Q) {
          const { arrSteamIDs: A } = Q,
            v = (0, He.DW)(A);
          return (0, e.jsx)(e.Fragment, {
            children: v.map(
              ({ data: j }) =>
                j &&
                (0, e.jsx)(
                  O.i8,
                  {
                    "data-miniprofile":
                      "s" + j.m_steamid.ConvertTo64BitString(),
                    persona: j,
                    size: "Small",
                    statusPosition: "right",
                  },
                  j.m_steamid.ConvertTo64BitString(),
                ),
            ),
          });
        }
        function me(Q) {
          const { steamid: A } = Q,
            { data: v } = (0, He.js)(A);
          return v
            ? (0, e.jsxs)(d.Z, {
                className: f().FriendBlockCtn,
                "data-miniprofile": "s" + A,
                children: [
                  (0, e.jsx)(O.i8, {
                    persona: v,
                    size: "Small",
                    statusPosition: "right",
                  }),
                  (0, e.jsx)(k.D, {
                    className: f().PersonaStatus,
                    persona: v,
                    eFriendRelationship: E._UC,
                    bIsSelf: !1,
                    strNickname: null,
                    bParenthesizeNicknames: !1,
                    bCompactView: !1,
                    bNoMask: !0,
                  }),
                ],
              })
            : null;
        }
        function ie(Q) {
          const { children: A, header: v } = Q;
          return (0, e.jsxs)("div", {
            className: f().RelevantItem,
            children: [
              (0, e.jsx)("div", {
                className: f().RelevantCheck,
                children: (0, e.jsx)(J.Jlk, {}),
              }),
              (0, e.jsxs)("div", {
                className: f().RelevantColumn,
                children: [
                  (0, e.jsx)("div", {
                    className: f().ReleventText,
                    children: v,
                  }),
                  A,
                ],
              }),
            ],
          });
        }
        var ye = t(29522),
          De = t(77426);
        const Le = new l.wd("DiscoveryQueueApp").Debug;
        function Ze(Q) {
          const {
              appID: A,
              nItemHeight: v,
              nItemWidth: j,
              selected: Z,
              fnFocused: X,
              eStoreDiscoveryQueueType: se,
              storePageFilter: z,
              bPreferDemoStorePage: re,
              elVideo: pe,
              elDetails: xe,
              appAriaIDs: ge,
            } = Q,
            [Ke] = (0, ee.t7)(A, De.G),
            Te = (0, a.Qn)(),
            Ce = (0, N.R7)()?.ownerWindow || window,
            ze = Qe(Ke, se, z, re),
            { bIsIgnored: je, fnUpdateIgnored: Oe } = (0, c.TK)(A),
            { bIsWishlisted: Re, fnUpdateWishlist: et } = (0, c.u4)(A),
            ne = p.useRef(void 0);
          if (
            (p.useEffect(() => {
              Z && ne.current && ne.current.focus({ preventScroll: !0 });
            }, [Z]),
            !Ke)
          )
            return (
              console.warn("Error: missing store item for appid ", A), null
            );
          const Pe = { width: j || void 0, height: v || void 0 };
          return (0, e.jsxs)(d.Z, {
            "aria-labelledby": (0, r.q)(
              ge.nameId,
              ge.tagsId,
              ge.reviewId,
              ge.relevanceId,
              ge.buttonsId,
            ),
            ref: ne,
            style: Pe,
            className: (0, D.A)(f().DiscoveryQueueApp, Z && f().Selected),
            onOptionsActionDescription: Re
              ? (0, n.we)("#DiscoveryQueue_RemoveFromWishlist")
              : (0, n.we)("#DiscoveryQueue_AddToWishlist"),
            onOptionsButton: et,
            onOKActionDescription: (0, n.we)("#DiscoveryQueue_ViewStorePage"),
            onOKButton: () => {
              Ce.location.href = ze;
            },
            onSecondaryActionDescription: je
              ? (0, n.we)("#DiscoveryQueue_Undo")
              : (0, n.we)("#DiscoveryQueue_IgnoreLink"),
            onSecondaryButton: Oe,
            fnScrollIntoViewHandler: () => (X(), !0),
            children: [
              (0, e.jsx)("div", {
                className: (0, D.A)(f().IgnoredCtn, je && f().Active),
                children: (0, e.jsxs)("div", {
                  className: (0, D.A)(f().IgnoredInfo, je && f().Active),
                  children: [
                    (0, e.jsx)("div", {
                      className: f().IgnoredTitle,
                      children: (0, n.we)("#DiscoveryQueue_Ignored"),
                    }),
                    (0, e.jsx)("div", {
                      className: f().IgnoredDescription,
                      children: (0, n.we)(
                        "#DiscoveryQueue_IgnoredConfirmation",
                      ),
                    }),
                    (0, e.jsxs)(d.Z, {
                      className: (0, D.A)(
                        f().QueueButton,
                        f().UndoIgnoreButton,
                      ),
                      onClick: Oe,
                      children: [
                        Te &&
                          (0, e.jsx)(oe.$m, {
                            button: B.g4.X,
                            type: oe.wt.Light,
                            size: oe.xY.Medium,
                          }),
                        (0, n.we)("#DiscoveryQueue_Undo"),
                      ],
                    }),
                  ],
                }),
              }),
              pe,
              xe,
            ],
          });
        }
        function Qe(Q, A, v, j) {
          const Z = (0, P.n9)();
          return p.useMemo(() => {
            if (!Q) return;
            const se = (0, o.Bk)(v),
              z = A >= $.QV.qy ? "?inqueue=" + A + (v ? "_" + se : "") : "",
              re = (0, P.bV)(Z, Q.GetStorePageURL(j) + z);
            return (0, Ie.NT)(re);
          }, [j, A, Z, Q, v]);
        }
        function $e(Q) {
          const {
              appID: A,
              bShowMinimizedDisplay: v,
              eStoreDiscoveryQueueType: j,
              storePageFilter: Z,
              bPreferDemoStorePage: X,
              appAriaIDs: se,
            } = Q,
            [z] = (0, ee.t7)(A, De.G),
            re = (0, ye.$5)(A),
            { bIsIgnored: pe, fnUpdateIgnored: xe } = (0, c.TK)(A),
            { bIsWishlisted: ge, fnUpdateWishlist: Ke } = (0, c.u4)(A),
            Te = Qe(z, j, Z, X),
            Ae = (0, a.Qn)(),
            Ce = Ae;
          if (!z) return;
          const ze = z.GetAssets().GetLibraryCapsuleURL(),
            je = z.GetAssets().GetHeaderURL();
          return (0, e.jsxs)(d.Z, {
            className: f().AppDetailsCtn,
            children: [
              (0, e.jsxs)("div", {
                className: f().AppDetailsCtnTop,
                children: [
                  ze &&
                    (0, e.jsxs)("a", {
                      className: (0, D.A)(f().CapsuleLink),
                      href: Te,
                      children: [
                        (0, e.jsx)("img", {
                          className: f().AppLibraryHero,
                          src: ze,
                        }),
                        je &&
                          (0, e.jsx)("img", {
                            className: f().AppHeader,
                            src: je,
                          }),
                      ],
                    }),
                  (0, e.jsxs)("div", {
                    id: se.nameId,
                    className: f().RightColumn,
                    children: [
                      (0, e.jsx)("a", {
                        className: (0, D.A)(f().AppName),
                        href: Te,
                        children: z.GetName(),
                      }),
                      (0, e.jsx)(K.NF, { bSingleLineMode: !0, id: re }),
                    ],
                  }),
                  (0, e.jsx)(Fe, {
                    rgTagIDs: z.GetTagIDs(),
                    ariaLabelID: se.tagsId,
                  }),
                  (0, e.jsx)("div", {
                    className: f().AppReviews,
                    id: se.reviewId,
                    children: (0, e.jsx)(Se.J, {
                      bShowTooltip: !0,
                      bTruncateTotalReviews: v,
                      id: re,
                    }),
                  }),
                  (0, e.jsx)("div", {
                    id: se.relevanceId,
                    className: f().AppRelevanceCtn,
                    children: (0, e.jsx)(ft, {
                      bHideDescription: Ae,
                      bShowAvatars: !v,
                      storeItem: z,
                      appID: A,
                    }),
                  }),
                ],
              }),
              !Ae &&
                (0, e.jsx)("div", {
                  className: f().AppActionButtonsCtn,
                  children: (0, e.jsx)("div", {
                    id: se.buttonsId,
                    className: f().AppActionJustButtonsCtn,
                    children: (0, e.jsxs)("div", {
                      className: f().ButtonsRowWrap,
                      children: [
                        z.BHasDemo() &&
                          (0, e.jsx)(fe.j, {
                            id: re,
                            className: (0, D.A)(
                              f().QueueButton,
                              f().Primary,
                              f().Launch,
                            ),
                          }),
                        (0, e.jsxs)("a", {
                          className: (0, D.A)(f().QueueButton, f().Primary),
                          href: Te,
                          children: [
                            Ce &&
                              (0, e.jsx)(oe.$m, {
                                button: B.g4.Y,
                                type: oe.wt.Light,
                                size: oe.xY.Medium,
                                additionalClassName: f().YGlyph,
                              }),
                            " ",
                            (0, n.we)("#DiscoveryQueue_ViewStorePage"),
                          ],
                        }),
                        (0, e.jsx)(te.he, {
                          toolTipContent: ge
                            ? (0, n.we)("#RemoveFromWishlist_ttip")
                            : (0, n.we)("#AddToWishlist_ttip"),
                          children: (0, e.jsxs)(d.Z, {
                            "aria-label": ge
                              ? (0, n.we)("#Sale_RemoveFromWishlist")
                              : (0, n.we)("#Sale_AddToWishlist"),
                            focusable: !0,
                            className: (0, D.A)(
                              f().QueueButton,
                              ge && f().Active,
                            ),
                            onClick: Ke,
                            children: [
                              Ce &&
                                (0, e.jsx)(oe.$m, {
                                  button: B.g4.Y,
                                  type: oe.wt.Light,
                                  size: oe.xY.Medium,
                                  additionalClassName: f().YGlyph,
                                }),
                              ge
                                ? (0, e.jsx)(J.qnF, {})
                                : (0, e.jsx)(J.T4m, {}),
                            ],
                          }),
                        }),
                        (0, e.jsx)(te.he, {
                          toolTipContent: (0, n.we)(
                            "#SaleTrailerCarousel_IgnoreLink_ttip",
                          ),
                          children: (0, e.jsx)(d.Z, {
                            "aria-label": (0, n.we)(
                              "#DiscoveryQueue_IgnoreLink",
                            ),
                            focusable: !0,
                            className: (0, D.A)(
                              f().QueueButton,
                              pe && f().Active,
                            ),
                            onClick: xe,
                            children: (0, e.jsx)(J.NtH, {}),
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
            ],
          });
        }
        function Fe(Q) {
          const { rgTagIDs: A, ariaLabelID: v } = Q,
            Z = [...(0, c.W3)(A)].slice(0, 8);
          return (0, e.jsx)("div", {
            id: v,
            role: "list",
            className: f().AppTagsCtn,
            children: Z.map((X) =>
              (0, e.jsx)(W.Fz, { className: f().TagEntry, tagID: X }, X),
            ),
          });
        }
        function Ge() {
          const Q = p.useId(),
            A = p.useId(),
            v = p.useId(),
            j = p.useId(),
            Z = p.useId();
          return {
            nameId: Q,
            tagsId: A,
            reviewId: v,
            relevanceId: j,
            buttonsId: Z,
          };
        }
        var ke = t(24245),
          Ye = t(85742),
          Xe = t(54528),
          lt = t(94162);
        const qe = new l.wd("DiscoveryQueueWizard").Debug,
          Be = 1,
          it = 1400,
          rt = "discoveryqueue2022";
        async function ot(Q, A, v, j) {
          let Z = [],
            X = !1;
          try {
            const { appids: se, exhausted: z } = await o.aI
              .Get()
              .GetDiscoveryQueueAppsOfType(Q, A, j);
            (Z = [...se]),
              (X = z),
              v && Z.findIndex((re) => re === v) === -1 && Z.unshift(v),
              await Y.A.Get().QueueMultipleAppRequests(Z, {
                ...De.G,
                ...Ye.LB,
              });
          } catch (se) {
            console.error("Failed getting discovery queue apps", se);
          }
          return { appids: Z, exhausted: X };
        }
        function st(Q) {
          const [A, v] = p.useState(!1),
            j = (0, T.KV)();
          return (
            (0, p.useEffect)(() => {
              o.aI.Init(j), v(!0);
            }, [j]),
            A ? (0, e.jsx)(At, { ...Q }) : null
          );
        }
        function At(Q) {
          const {
              eStoreDiscoveryQueueType: A,
              fnCloseModal: v,
              includeAppID: j,
              storePageFilter: Z,
              bPreferDemoStorePage: X,
              bShowAOAutoPlayWarning: se,
            } = Q,
            [z, re] = p.useState(0),
            [pe, xe] = p.useState(void 0),
            [ge, Ke] = p.useState(0),
            Ae = (0, N.R7)()?.ownerWindow || window,
            Ce = (0, P.ru)(rt),
            [ze, je] = p.useState(0),
            Oe = (0, L.b)();
          (0, m.E)("ArrowLeft", () => Pe(!1), !0, !0),
            (0, m.E)("Left", () => Pe(!1), !0, !0),
            (0, m.E)("ArrowRight", () => Pe(!0), !0, !0),
            (0, m.E)("Right", () => Pe(!0), !0, !0),
            (0, m.E)("Escape", () => v?.(), !0, !0),
            (0, m.E)("Esc", () => v?.(), !0, !0);
          const Re = p.useMemo(() => Ae.innerWidth < it, [Ae]),
            { fnGetDiscoveryQueue: et, rgAppIDs: ne } = St(A, Z, j);
          p.useEffect(() => {
            et(!0), w.Fm.Get().HintLoad();
          }, []),
            p.useEffect(() => {
              const ue = ne[z];
              ue != pe && (ue && ue != Be && Oe.AddImpression(ue, Ce), xe(ue));
            }, [Oe, z, pe, ne, Ce]);
          const Pe = (ue) => {
            const Bt = i.OQ(z + (ue ? 1 : -1), 0, ne.length - 1);
            Bt != z &&
              (re(Bt),
              qe("New selected index: ", Bt, " Prev selected index: ", z));
          };
          p.useEffect(() => {
            ne?.length &&
              ne[z] !== Be &&
              (je((ue) => ue + 1),
              o.aI
                .Get()
                .SkipDiscoveryQueueItem(ne[z], A, Z)
                .then(() => je((ue) => ue - 1)));
          }, [A, z, ne, Z]),
            p.useEffect(() => {
              ne.length != ge &&
                (Ke(ne.length), ne.length > ge && ne[z] == Be && re(z + 1));
            }, [ge, z, ne]);
          const [ve] = p.useState(new Map()),
            le = (0, o.WX)(A, Z),
            Ne = !(0, b.c5)() && z > 0,
            mt = !(0, b.c5)() && z < ne.length - 1,
            {
              refContainer: yt,
              bIsDragging: Me,
              nDragOffset: Je,
              nDragSelectedOffsetIndex: It,
              handleTouchStart: bt,
              handleTouchMove: Mt,
              handleTouchEnd: Et,
            } = vt((ue) => re(ue), ne.length),
            xt = (ue) => {
              ue.target == ue.currentTarget && (v?.(), ue.stopPropagation());
            },
            Pt = (ue) => i.W(z + ue, ne) && (i.LA(ue, -1, 1) || Me),
            Ct = (0, P.aL)(a.TS.STORE_BASE_URL + "explore?dq=widget"),
            Tt = !(0, a.Qn)() && !(0, lt.$W)() && A === $.QV.qy,
            jt = (0, P.aL)(a.TS.STORE_BASE_URL + "explore/next/" + $.QV.qy),
            Ot = ne[z] !== Be,
            { nQueueStart: Wt, nCount: Lt } = _e(z, ne);
          return (0, e.jsx)(I.Ay, {
            feature: rt,
            children: (0, e.jsx)(d.Z, {
              role: "dialog",
              focusable: !1,
              "flow-children": "column",
              className: f().DiscoveryQueueCarouselCtn,
              navEntryPreferPosition: V.iU.LAST,
              onCancelButton: () => v?.(),
              onCancelActionDescription: (0, n.we)("#Button_Close"),
              children: (0, e.jsxs)("div", {
                className: f().DiscoveryQueueWrapper,
                onClick: xt,
                children: [
                  le.length > 0 &&
                    (0, e.jsx)(d.Z, {
                      "flow-children": "row",
                      className: f().DiscoveryQueueName,
                      children: le,
                    }),
                  (0, e.jsxs)(d.Z, {
                    "flow-children": "row",
                    className: f().TopBarCtn,
                    children: [
                      (0, e.jsx)(d.Z, {
                        className: f().LearnMore,
                        children: (0, n.oW)(
                          "#DiscoveryQueue_LearnMore_Default",
                          (0, e.jsx)(h.Ii, {
                            className: f().LearnMoreLink,
                            href: (0, Ie.NT)(Ct),
                          }),
                        ),
                      }),
                      Tt &&
                        (0, e.jsx)(d.Z, {
                          className: f().ClassicQueueLink,
                          children: (0, n.oW)(
                            "#DiscoveryQueue_ClassicQueue_Link",
                            (0, e.jsx)(h.Ii, {
                              className: f().LearnMoreLink,
                              href: (0, Ie.NT)(jt),
                            }),
                          ),
                        }),
                      (0, e.jsx)(d.Z, {
                        className: f().ControlsCtn,
                        children: (0, e.jsx)(d.Z, {
                          focusable: !0,
                          className: f().QueueButton,
                          onClick: v,
                          "aria-label": (0, n.we)("#Button_Close"),
                          onActivate: () => v && v(),
                          children: (0, e.jsx)(J.X, {}),
                        }),
                      }),
                    ],
                  }),
                  (0, e.jsx)(d.Z, {
                    role: "button",
                    "aria-label": (0, n.we)("#Carousel_Next"),
                    onClick: () => Pe(!1),
                    className: (0, D.A)(
                      f().QueueNavArrow,
                      f().LeftArrow,
                      Ne && f().Enable,
                    ),
                    children: (0, e.jsx)(J.l8x, { angle: 180 }),
                  }),
                  (0, e.jsx)(d.Z, {
                    role: "button",
                    "aria-label": (0, n.we)("#Carousel_Prev"),
                    onClick: () => Pe(!0),
                    className: (0, D.A)(
                      f().QueueNavArrow,
                      f().RightArrow,
                      mt && f().Enable,
                    ),
                    children: (0, e.jsx)(J.l8x, { angle: 0 }),
                  }),
                  (0, e.jsx)(d.Z, {
                    ref: yt,
                    className: f().DiscoveryQueueItemsCtn,
                    focusable: !1,
                    onTouchStart: bt,
                    onTouchMove: Mt,
                    onTouchEnd: Et,
                    children: [-2, -1, 0, 1, 2].map((ue) =>
                      (0, e.jsx)(
                        "div",
                        {
                          className: (0, D.A)({
                            [f().DiscoveryQueueItemPositioner]: !0,
                            [f().Dragging]: Me,
                            [f().InRange]: Pt(ue),
                            [f().FarLeft]: ue == -2,
                            [f().Left]: ue == -1,
                            [f().Current]: ue == 0,
                            [f().Right]: ue == 1,
                            [f().FarRight]: ue == 2,
                            [f().Selected]: ue + It == 0,
                          }),
                          style: { "--dragOffsetX": `${Je}px` },
                          children:
                            Pt(ue) &&
                            (0, e.jsx)(Ve, {
                              eStoreDiscoveryQueueType: A,
                              storePageFilter: Z,
                              rgAppIDs: ne,
                              index: z + ue,
                              bShowMinimizedDisplay: Re,
                              selectedIndex: z,
                              bPreferDemoStorePage: !!X,
                              mapViewedAppCount: ve,
                              fnCloseModal: v,
                              fnLoadNextQueue: () => et(!1),
                              fnAdvance: Pe,
                              bSkipAppRequestPending: ze != 0,
                              showAOAutoPlayWarning: !!se,
                            }),
                        },
                        z + ue,
                      ),
                    ),
                  }),
                  (0, e.jsx)(ke.A, {
                    className: (0, D.A)(!Ot && f().ProgressHidden),
                    showPriorAsActive: !0,
                    count: Lt,
                    selectedIndex: z - Wt,
                  }),
                ],
              }),
            }),
          });
        }
        function _e(Q, A) {
          let v = 0;
          for (let X = 0; X < Q; X++) A[X] == Be && (v = X + 1);
          let j = 0;
          for (let X = Q; X < A.length; X++)
            if (A[X] == Be) {
              j = X;
              break;
            } else X == A.length - 1 && (j = A.length);
          const Z = j - v;
          return { nQueueStart: v, nQueueEnd: j, nCount: Z };
        }
        function vt(Q, A) {
          const v = p.useRef(null),
            [j, Z] = p.useState(0),
            [X, se] = p.useState(!1),
            [z, re] = p.useState(0),
            pe = p.useRef(0),
            xe = 50;
          return {
            refContainer: v,
            bIsDragging: X,
            nDragOffset: j,
            nDragSelectedOffsetIndex: z,
            handleTouchStart: (Ae) => {
              se(!0), (pe.current = Ae.touches[0].clientX), Z(0), re(0);
            },
            handleTouchMove: (Ae) => {
              if (!X) return;
              const Ce = Ae.touches[0].clientX - pe.current;
              Z(Ce), re(j > xe ? 1 : j < -xe ? -1 : 0);
            },
            handleTouchEnd: () => {
              X &&
                (se(!1),
                j > xe
                  ? Q((Ae) => Math.max(Ae - 1, 0))
                  : j < -xe && Q((Ae) => Math.min(Ae + 1, A - 1)),
                Z(0),
                re(0));
            },
          };
        }
        function Ve(Q) {
          const {
              eStoreDiscoveryQueueType: A,
              storePageFilter: v,
              rgAppIDs: j,
              index: Z,
              bShowMinimizedDisplay: X,
              selectedIndex: se,
              bPreferDemoStorePage: z,
              mapViewedAppCount: re,
              fnCloseModal: pe,
              fnLoadNextQueue: xe,
              fnAdvance: ge,
              bSkipAppRequestPending: Ke,
              showAOAutoPlayWarning: Te,
            } = Q,
            [Ae, Ce] = p.useState(!1),
            ze = Ge(),
            je = () => {
              se != Z && ge(Z > se);
            },
            Oe = se === Z,
            Re = p.useRef(Oe);
          if (
            (p.useEffect(() => {
              const ne = Re.current;
              if (((Re.current = Oe), ne && !Oe)) {
                Ce(!0);
                const Pe = setTimeout(() => Ce(!1), 500);
                return () => {
                  clearTimeout(Pe);
                };
              }
            }, [Oe]),
            j[Z] == Be)
          ) {
            let ne = 0;
            for (let ve = Z - 1; ve >= 0; ve--) j[ve] == Be && (ne += 1);
            let Pe = 0;
            for (let ve = Z - 1; ve >= 0 && j[ve] !== Be; ve--) Pe++;
            return (
              re.has(ne) ||
                re.set(
                  ne,
                  o.aI.Get().GetTotalSkippedAppsForDiscoveryQueue(A, v),
                ),
              (0, p.createElement)(gt, {
                ...Q,
                key: se,
                selected: Oe,
                lastCard: se == j.length - 1,
                fnLoadNextQueue: xe,
                fnCloseModal: pe,
                summaryCardIndex: ne,
                eStoreDiscoveryQueueType: A,
                viewedAppCount: (re.get(ne) || 0) + Pe,
                fnFocused: je,
                fnAdvance: () => ge(!0),
                bSkipAppRequestPending: Ke,
              })
            );
          }
          const et = Oe || Re.current || Ae;
          return (0, e.jsx)(Ze, {
            appAriaIDs: ze,
            eStoreDiscoveryQueueType: A,
            storePageFilter: v,
            selected: Oe,
            appID: j[Z],
            bPreferDemoStorePage: z,
            fnFocused: je,
            elVideo: (0, e.jsx)(c.y3, {
              appID: j[Z],
              focused: et,
              showAOAutoPlayWarning: Te,
              fnComplete: void 0,
            }),
            elDetails: (0, e.jsx)($e, {
              appID: j[Z],
              bShowMinimizedDisplay: X,
              eStoreDiscoveryQueueType: A,
              storePageFilter: v,
              bPreferDemoStorePage: z,
              appAriaIDs: ze,
            }),
          });
        }
        function St(Q, A, v) {
          const [j, Z] = p.useState([]),
            X = (0, H.m)("DiscoveryQueueWizard");
          return {
            fnGetDiscoveryQueue: async (z) => {
              let { appids: re } = await ot(Q, !z, z && v, A);
              if (z && !re.length) {
                let { appids: pe } = await ot(Q, !0, void 0, A);
                re = pe;
              }
              if (!X?.token?.reason) {
                const pe = [...(j ?? []), ...re, Be];
                Z(pe);
              }
              qe("Loaded new discovery queue apps: ", re);
            },
            rgAppIDs: j,
          };
        }
        function gt(Q) {
          const {
              eStoreDiscoveryQueueType: A,
              fnCloseModal: v,
              summaryCardIndex: j,
              lastCard: Z,
              selected: X,
              fnLoadNextQueue: se,
              storePageFilter: z,
              fnDisplaySummaryReward: re,
              viewedAppCount: pe,
              fnFocused: xe,
              fnAdvance: ge,
              bSkipAppRequestPending: Ke,
            } = Q,
            [Te, Ae] = p.useState(!1),
            Ce = (0, a.Qn)(),
            ze = (0, U.Qt)(C.L6.Jz, a.TS.LANGUAGE, !1),
            [je, Oe] = p.useState(0),
            [Re, et] = p.useState(0),
            { data: ne } = (0, Xe.F0)();
          p.useEffect(() => {
            X &&
              !Te &&
              ne &&
              w.Fm.Get()
                .HintLoad()
                .then(() => {
                  o.aI
                    .Get()
                    .LoadSkippedApps(A, z)
                    .then((Me) => {
                      Oe(Me.reduce((Je, It) => (ne.has(It) ? Je + 1 : Je), 0)),
                        et(
                          Me.reduce(
                            (Je, It) =>
                              w.Fm.Get().BIsGameIgnored(It) ? Je + 1 : Je,
                            0,
                          ),
                        ),
                        Ae(!0);
                    });
                });
          }, [Te, A, X, z, ne]);
          const [Pe, ve] = p.useState(!1),
            le = (0, o.IH)(A, z),
            Ne = (0, H.m)("DiscoveryQueueSummary"),
            mt = async () => {
              if (!Z) {
                ge();
                return;
              }
              Pe || (ve(!0), await se(), Ne?.token?.reason || ve(!1));
            };
          return (0, e.jsxs)(ct, {
            selected: X,
            fnFocused: xe,
            fnOnContinue: mt,
            fnCloseModal: v,
            bLoaded: Te,
            children: [
              (0, e.jsxs)("div", {
                className: f().SummaryContentCtn,
                children: [
                  (0, e.jsx)("div", {
                    className: f().SummaryTitle,
                    children: (0, n.we)("#DiscoveryQueue_SummaryTitle"),
                  }),
                  !le &&
                    X &&
                    ze.data?.definition &&
                    (0, e.jsx)(ut, {
                      bSkipAppRequestPending: Ke,
                      summaryCardIdx: j,
                    }),
                  (0, e.jsx)("div", {
                    className: f().YourStats,
                    children: (0, n.we)("#DiscoveryQueue_YourStats"),
                  }),
                  (0, e.jsxs)(d.Z, {
                    "flow-children": "row",
                    className: f().SummaryGrid,
                    children: [
                      (0, e.jsxs)("div", {
                        className: f().GridItem,
                        children: [
                          (0, e.jsx)("div", {
                            className: f().GridTitle,
                            children: (0, n.we)("#DiscoveryQueue_ViewedCaps"),
                          }),
                          (0, e.jsx)("div", {
                            className: f().GridNumber,
                            children: (0, Ue.D)(pe),
                          }),
                          (0, e.jsx)("div", {
                            className: f().GridSubTitle,
                            children: (0, n.we)("#DiscoveryQueue_Titles"),
                          }),
                        ],
                      }),
                      (0, e.jsxs)("div", {
                        className: f().GridItem,
                        children: [
                          (0, e.jsx)("div", {
                            className: f().GridTitle,
                            children: (0, n.we)(
                              "#DiscoveryQueue_WishlistedCaps",
                            ),
                          }),
                          (0, e.jsx)("div", {
                            className: f().GridNumber,
                            children: (0, Ue.D)(je),
                          }),
                          (0, e.jsx)(P.Fh, {
                            className: (0, D.A)(f().GridSubTitle, f().TextLink),
                            href: (0, Ie.NT)(a.TS.STORE_BASE_URL + "wishlist"),
                            children: (0, n.we)("#DiscoveryQueue_ViewWishlist"),
                          }),
                        ],
                      }),
                      (0, e.jsxs)("div", {
                        className: f().GridItem,
                        children: [
                          (0, e.jsx)("div", {
                            className: f().GridTitle,
                            children: (0, n.we)("#DiscoveryQueue_IgnoredCaps"),
                          }),
                          (0, e.jsx)("div", {
                            className: f().GridNumber,
                            children: (0, Ue.D)(Re),
                          }),
                          (0, e.jsx)(P.Fh, {
                            className: (0, D.A)(f().GridSubTitle, f().TextLink),
                            href: (0, Ie.NT)(
                              a.TS.STORE_BASE_URL + "account/notinterested",
                            ),
                            children: (0, n.we)("#DiscoveryQueue_ViewIgnored"),
                          }),
                        ],
                      }),
                    ],
                  }),
                  !Ce &&
                    (0, e.jsxs)(d.Z, {
                      className: f().SummaryActionButtonsCtn,
                      children: [
                        (0, e.jsx)(d.Z, {
                          className: (0, D.A)(f().QueueButton, f().Wide),
                          onClick: v,
                          children: (0, n.we)("#ActionButtonLabelDone"),
                        }),
                        !le &&
                          (0, e.jsx)(d.Z, {
                            className: (0, D.A)(
                              Pe && f().Disabled,
                              f().QueueButton,
                              f().Primary,
                              f().Wide,
                            ),
                            onClick: mt,
                            children: Pe
                              ? (0, n.we)("#Loading")
                              : (0, n.we)("#Button_Continue"),
                          }),
                      ],
                    }),
                ],
              }),
              !le && (0, e.jsx)(e.Fragment, { children: !!re && re(j + 1) }),
            ],
          });
        }
        function ct(Q) {
          const {
              children: A,
              selected: v,
              fnOnContinue: j,
              fnCloseModal: Z,
              fnFocused: X,
              bLoaded: se,
            } = Q,
            z = (0, P.aL)(a.TS.STORE_BASE_URL + "wishlist"),
            pe = (0, N.R7)()?.ownerWindow || window,
            xe = () => {
              pe.location.href = (0, Ie.NT)(z);
            },
            ge = p.useRef(void 0);
          return (
            p.useEffect(() => {
              v && ge.current && ge.current.focus({ preventScroll: !0 });
            }, [v]),
            (0, e.jsx)(s.YZ, {
              ref: ge,
              "aria-live": "polite",
              className: (0, D.A)(
                f().SummaryCtn,
                f().DiscoveryQueueApp,
                v && f().Selected,
              ),
              onOptionsActionDescription: (0, n.we)(
                "#DiscoveryQueue_ViewWishlist",
              ),
              onOptionsButton: xe,
              onOKActionDescription: (0, n.we)("#Button_Continue"),
              onOKButton: () => {
                j();
              },
              onCancelActionDescription: (0, n.we)("#ActionButtonLabelDone"),
              onCancelButton: () => Z && Z(),
              fnScrollIntoViewHandler: () => (X(), !0),
              children: se
                ? A
                : (0, e.jsx)(S.t, {
                    className: f().DiscoveryQueueThrobber,
                    msDelayAppear: 200,
                    size: "large",
                    position: "center",
                  }),
            })
          );
        }
        function ht() {
          return (0, e.jsx)(d.Z, {
            className: f().SaleRewardsCtn,
            children: (0, e.jsx)(S.t, { size: "large", position: "center" }),
          });
        }
        function ut(Q) {
          const { bSkipAppRequestPending: A, summaryCardIdx: v } = Q;
          return A ? (0, e.jsx)(ht, {}) : (0, e.jsx)(we, { summaryCardIdx: v });
        }
        function we(Q) {
          const { summaryCardIdx: A } = Q,
            v = (0, U.os)(C.L6.Jz, a.TS.LANGUAGE, !1, A.toString()),
            [j] = (0, ee.t7)(v?.data?.current_def?.appid, {}),
            Z = (0, a.Qn)();
          if (!v?.data?.current_def || !j?.GetName().length)
            return (0, e.jsx)(ht, {});
          const X = v.data.num_items_earned,
            se = v.data.current_def.num_items_per_def,
            z = se - X,
            re = (X / se) * 100;
          return (0, e.jsxs)(d.Z, {
            className: f().SaleRewardsCtn,
            children: [
              (0, e.jsx)(y, { nPercent: re, size: 70, strokeWidth: 12 }),
              (0, e.jsxs)(d.Z, {
                className: f().RewardStatusCtn,
                children: [
                  (0, e.jsx)("div", {
                    className: f().SaleRewardAppTitle,
                    children: (0, n.we)(
                      `#DiscoveryQueue_SaleStatus_Title${z ? "" : "_Complete"}`,
                      (0, Ue.D)(X),
                      j.GetName(),
                    ),
                  }),
                  z > 0 &&
                    (0, e.jsx)("div", {
                      className: f().SaleRewardAppTitle,
                      children: (0, n.we)(
                        "#DiscoveryQueue_SaleStatus_Desc",
                        (0, Ue.D)(z),
                        j.GetName(),
                      ),
                    }),
                  !Z &&
                    (0, e.jsx)("a", {
                      href: (0, Ie.NT)(
                        a.TS.COMMUNITY_BASE_URL + "my/itemcollection",
                      ),
                      children: (0, n.we)("#DiscoveryQueue_SaleStatus_Link"),
                    }),
                ],
              }),
            ],
          });
        }
      },
      6778: (q, _, t) => {
        "use strict";
        t.d(_, { G: () => V });
        var e = t(90626),
          p = t(68312),
          h = t(57810),
          d = t(6469),
          s = t(98609);
        function V() {
          const [C, $] = (0, e.useState)(!s.iA.logged_in),
            [T] = (0, d.L2)(),
            L = (0, p.KV)();
          return (
            (0, e.useEffect)(() => {
              C || (h.aI.Init(L), $(!0));
            }, [C, L]),
            C && !T
          );
        }
      },
      24245: (q, _, t) => {
        "use strict";
        t.d(_, { A: () => V });
        var e = t(7850),
          p = t(25599),
          h = t.n(p),
          d = t(19298),
          s = t(36707);
        function V(C) {
          const {
            className: $,
            showPriorAsActive: T,
            count: L,
            selectedIndex: P,
            fnNavigate: N,
          } = C;
          return (0, e.jsx)(d.Z, {
            "flow-children": "row",
            className: (0, s.A)(h().ProgressCtn, $),
            children: Array.from({ length: L }).map((w, U) =>
              (0, e.jsx)(
                "div",
                {
                  className: (0, s.A)({
                    [h().ProgressDot]: !0,
                    [h().ProgressDotActive]: T && U < P,
                    [h().ProgressDotSelected]: U == P,
                    [h().ProgressDotClickable]: !!N,
                  }),
                  onClick: N ? () => N(U) : void 0,
                },
                "dot_" + U,
              ),
            ),
          });
        }
      },
      87663: (q, _, t) => {
        "use strict";
        t.r(_), t.d(_, { default: () => Y });
        var e = t(7850),
          p = t(90626),
          h = t(19298),
          d = t(55051),
          s = t(57810),
          V = t(84676),
          C = t(179),
          $ = t(36118),
          T = t(6778),
          L = t(18210),
          P = t(71109),
          N = t.n(P),
          w = t(3166),
          U = t(85742);
        function Y(ee) {
          const { appID: J } = ee,
            I = (0, T.G)(),
            [H] = (0, C.QD)("inqueue", "" + d.QV.qy),
            [D, n] = (0, p.useState)(!1),
            [l] = (0, V.t7)(J, { include_assets: !0 }),
            i = (0, w.Qn)(),
            { eStoreDiscoveryQueueType: m, storePageFilter: a } =
              p.useMemo(() => {
                if (H?.length > 0) {
                  const y = H.split("_"),
                    S = Number(y[0]);
                  let b;
                  return (
                    y.length > 1 && (b = (0, s.bz)(y[1])),
                    { eStoreDiscoveryQueueType: S, storePageFilter: b }
                  );
                } else
                  return {
                    eStoreDiscoveryQueueType: d.QV.qy,
                    storePageFilter: void 0,
                  };
              }, [H]),
            { showDiscoveryQueue: o } = (0, U.GV)(m, {
              includeAppID: J,
              storePageFilter: a,
            }),
            u = p.useCallback(() => {
              n(!0);
            }, []),
            g = (0, s.WX)(m, a);
          return !I || !l || D
            ? null
            : (0, e.jsxs)(h.Z, {
                focusable: !0,
                className: N().DiscoveryQueueWidgetCtn,
                onSecondaryButton: u,
                onOKButton: o,
                onOKActionDescription: (0, L.we)(
                  "#DiscoveryQueue_ResumeWizard",
                ),
                onSecondaryActionDescription: (0, L.we)("#Button_Close"),
                children: [
                  (0, e.jsxs)("div", {
                    onClick: o,
                    className: N().WidgetText,
                    children: [
                      (0, e.jsx)($.mcU, {}),
                      (0, L.we)("#DiscoveryQueue_ResumeWizard"),
                      g?.length > 0 && ": " + g,
                    ],
                  }),
                  !i &&
                    (0, e.jsx)("div", {
                      className: N().CloseButton,
                      onClick: u,
                      children: (0, e.jsx)($.X, {}),
                    }),
                ],
              });
        }
      },
      10739: (q, _, t) => {
        "use strict";
        t.r(_), t.d(_, { default: () => s });
        var e = t(7850),
          p = t(55051),
          h = t(64377),
          d = t(6394);
        function s() {
          return (0, e.jsx)(h.K, {
            placeholderHeight: "200px",
            rootMargin: "0px 0px 100% 0px",
            children: (0, e.jsx)(d.g, { eStoreDiscoveryQueueType: p.QV.qy }),
          });
        }
      },
      99783: (q, _, t) => {
        "use strict";
        t.r(_), t.d(_, { default: () => P });
        var e = t(7850),
          p = t(90626),
          h = t(55051),
          d = t(18210),
          s = t(6778),
          V = t(19298),
          C = t(3166),
          $ = t(96538),
          T = t(88003),
          L = t(85742);
        function P(N) {
          const w = (0, s.G)(),
            { showDiscoveryQueue: U } = (0, L.GV)(h.QV.qy),
            Y = p.useCallback(() => {
              C.iA.logged_in
                ? U()
                : (0, T.pg)(
                    (0, e.jsx)($.KG, {
                      onOK: () => {
                        window.location.href = `${C.TS.STORE_BASE_URL}login?redir=${encodeURIComponent(document.location.href)}`;
                      },
                      strOKButtonText: (0, d.we)(
                        "#DiscoveryQueue_Error_Login_Title",
                      ),
                      strDescription: (0, d.we)("#DiscoveryQueue_Error_Login"),
                      strTitle: (0, d.we)("#DiscoveryQueue_Error_Login_Title"),
                    }),
                    window,
                  );
            }, [U]);
          return w
            ? (0, e.jsx)(V.Z, {
                children: (0, e.jsx)("a", {
                  onClick: Y,
                  className: "experiment-button",
                  children: (0, d.we)("#DiscoveryQueue_OpenWizard"),
                }),
              })
            : (0, e.jsx)("div", {
                className: "experiment-button-placeholder",
                children: "\xA0",
              });
        }
      },
      83581: (q) => {
        q.exports = {
          "duration-app-launch": "800ms",
          AppCarouselTrailerCtn: "_2O2oGi6d4q3fJxsg-26cll",
          AutoplayCheckbox: "_1sEIT3Bh71g9JRzpjKvlIo",
          AppVideo: "_2YG6k4pQ2z4jwoRGrdPhbv",
          Microtrailer: "_2HvnbxzEFWWLlYvdP-FWFN",
          PlayFullTrailer: "_1yr-ANb75ms4sc2qaXuCYM",
          "microtrailer-trans-out": "_23fHbTINXOIsUypCFWMSTa",
          PlayMicrotrailer: "_2X47xgnvmgTDpH69RCBkZ7",
          "microtrailer-trans-in": "_25FSUgigrr0CQ9eVFmOuId",
          NoTrailer: "c42wWAo7Lp6uTn6LjeaO1",
          Trailer: "_27Hm281QxYE24wJqONIP0p",
          "trailer-trans-in": "_1nwjQUxY2CTD6YmThf7xQG",
          AppMainCap: "_1S2WeY58fI6yRef-8ArnWh",
          AppMainCapFadeIn: "_3fHap4fl2kZ5StUjb1DwDJ",
          PlayButton: "OsRdwk7Q3-sApCo2CDxtN",
          PlayButtonCapFadeIn: "_2o5mPh-Zx9EWF_H-KforbU",
          AutoplayCheckboxCtn: "_2J3J__8l3sk6LI4mpUfWDT",
          AOWarning: "_2IxWvaCkHcMl0aL8NM8v6T",
          Text: "_1r5F1Fy8uG639opEIjyS5Z",
          BackgroundAnimation: "_1G9QIfwsMh2XRR-bMBE97j",
          "ItemFocusAnim-darkerGrey-nocolor": "_2bun2taA5e3StPJT3cs6jH",
          "ItemFocusAnim-darkerGrey": "_39J4X61tugDHvSmGBzKD7p",
          "ItemFocusAnim-darkGreySettings": "_13-B6AE59KUQ-ABnyKYXkP",
          "ItemFocusAnim-darkGrey": "_2xXdz148UoxpJlfyVlUo0D",
          "ItemFocusAnim-grey": "_3-Rh6nRz4sRZLRVEQKPefw",
          "ItemFocusAnim-translucent-white-10": "_1b0mYc5KheDLRLQoHqAqhU",
          "ItemFocusAnim-translucent-white-20": "_3WVHjFeBrJOv0Xsqd7X2Vp",
          "ItemFocusAnimBorder-darkGrey": "_1TaBFa6F_r2oTJvni2yNqQ",
          "ItemFocusAnim-green": "_1dPdL7c_2dvq8gAaWTSq04",
          focusAnimation: "_3BX0kUvHLGH3mZJG4BP4cc",
          hoverAnimation: "_1om-YMcnj-8DLjL_ek0CxW",
          "capsule-trans-out": "YvTbl9XD-HkAs9W3pcEgp",
        };
      },
      36054: (q) => {
        q.exports = {
          "duration-app-launch": "800ms",
          AppVideoCtn: "_3ASFJGw8T9-hDikhxRScDI",
          WishlistBadge: "_2LOILpLspWCbXnRmFuUbwx",
          Active: "-iU7fWthqJgfmhzrdV74K",
          DeckVerifiedLogo: "_2EVzMYr528F1dVAm4e88Sy",
          VideoArea: "_1otwTolVlX9PfKD2myNigb",
          IgnoredCtn: "_35ODHCvm13mJ5gOunwQzs9",
          IgnoredInfo: "_2SriIWC_6CHPZkjggKoxjb",
          IgnoredTitle: "_1D4RHomSRy25j1Qxl-dDPw",
          IgnoredDescription: "_29zcmLd8LJQ2FR33D1_Ph6",
          UndoIgnoreButton: "_1rPGVQftqLzqjH04tebuaT",
          UndoButton: "_1nz7pkRvV4rRrybZrUZu0R",
          Disabled: "_2JvEs3_qRtYncXG7WCALur",
          BackgroundAnimation: "_64dUS3S7fOwtNFhEALHhx",
          "ItemFocusAnim-darkerGrey-nocolor": "UXmjEpq-9pbtC7T5d0MPv",
          "ItemFocusAnim-darkerGrey": "_1olTI2tKYS6IUSkIpca3Qo",
          "ItemFocusAnim-darkGreySettings": "_3JjCik6ZoOCqrb2F2DUuI1",
          "ItemFocusAnim-darkGrey": "_37RRjG54p7sk3Yvb-5BDVv",
          "ItemFocusAnim-grey": "yOH4BAo3sriSZckG9yR1g",
          "ItemFocusAnim-translucent-white-10": "_1USieHqb4yVt2P3Okqs7hF",
          "ItemFocusAnim-translucent-white-20": "_2MtHgIAnILIt8d4PMuS5mi",
          "ItemFocusAnimBorder-darkGrey": "_dHmntK-X7hqNpoiZplVM",
          "ItemFocusAnim-green": "_3CT6dHnuA3SYWZrgk1Sf1Y",
          focusAnimation: "_34YOI6hVEDmEAWHAHlUXon",
          hoverAnimation: "_1UXiQtSunyxlP1LxWHXACi",
        };
      },
      15830: (q) => {
        q.exports = {
          DiscoveryQueueWidgetCtn: "_3PAP1PfUymQrLEveRsxQxP",
          WidgetHeaderCtn: "_3i8xWeKjrdNgEjml1PQRuq",
          AppCarouselPosition: "_1DaxYFphX9KPH-YWeuNTvO",
          Initialized: "gjxSD08f5aogKCSeys9k5",
          Spinner: "_3QqziF_w5iNtHF8dOkfrD0",
          AppCarouselCtn: "_2qPvUCeD7uiBSn261-Gg25",
          FadeIn: "Qc0gimNJ0GLAPE87EH3Gp",
          AppCapsuleCtn: "_3G65z75zOTQeHrXxszHO4b",
          AppName: "r6OCNSBahfTSSDTqXDVqY",
          LibraryImage: "_1QVat7gXKVzPNiStElIJCt",
          CapsuleColumn: "_3OUOaqR0a3uYqsWOZbfSSh",
        };
      },
      56420: (q) => {
        q.exports = {
          narrowWidth: "500px",
          SnoozeContainer: "_1DsumfIa3MlkzUV9EXY5W9",
          SnoozeZ: "_2n0EiKMGRP-r_BI5tDtttu",
          none: "T3Fb5KTXwIHM2B-ThTvEs",
          Medium: "_1iYPlsChibPe7Ga9B3c5Wm",
          Large: "_3BESV4eFnr4EnaSaJSdk6T",
          Dim: "rpZ9bKyFXYvNQvgtKn5GV",
          Z1: "_2hnF3M_l4xdIdQ4CkN7LYB",
          Z2: "VmQTOrz5MPOWte5C9K7YS",
          Z3: "_29mtadjX8N6pRn5TX1nA0o",
          hoverParent: "_3-8cByP2koYzHwgZqjvFA",
          animating: "_2rXc7hLg6bohWZ-JpRcYEB",
          Snoring: "_38wIVgo1WjvGqL5ZsmpmiX",
        };
      },
      18828: (q) => {
        q.exports = {
          "duration-app-launch": "800ms",
          narrowWidth: "500px",
          statusAndName: "_4ZTzGZ5TTgFyfw1DcXLXS",
          threeLines: "_1oYSXGjBe7QctQ1ikLpCMm",
          blocked: "VTxPkslK1CSpKNFMgKg7d",
          richPresenceLabel: "_2Ri005Wg_uXDTa71kdRbcN",
          playerName: "nOdcT-MoOaXGePXLyPe0H",
          playerNickname: "_2saJTAocZ9TnYXTGvnqUMC",
          EllipsisName: "_1valFgvEGxquAi_2IrAKqO",
          DisableColoring: "_3oDmKGyTBBm7i4DULjwYcC",
          playerNicknameBracket: "_3XEmWmfQy7gbYJ4KJ1N9tp",
          richPresenceContainer: "_3sxE7F1LV2IcSX68YsH9dI",
          gameName: "_1cB0qtF0paHWWyj1XNcnbG",
          dropPadding: "_3tEPYJ6xjX0d6akU-hhrs4",
          NoMask: "_2dAj6KfWRAxoYPr6tgXd6t",
          twoLine: "_1BbOegz8bYL7iPzgYpOgQI",
          DNDContainer: "_3IswZMeeD6ORStUjgv6Xh8",
          partyBeaconJoin: "_3BnDsXrefFJrt_8frF2wvB",
          hidePersona: "_3ZJkOzmqed_i-p74uF3hus",
          compactView: "_3bbRZyUiK-bfc5Qov6xukI",
          noContextMenu: "_1JE5G7_FNm2SRDEEnOWMVv",
          gameIsPrivateIcon: "_2gBKQXiTBLjeVVaqvc5QVh",
          PendingPersona: "_2sxXnGfkPxNgR6Lk1-SmfQ",
          BackgroundAnimation: "_2hlRK2hm0pHy1YSxwknFCj",
          "ItemFocusAnim-darkerGrey-nocolor": "_3Ye-Lgym31_-ibnmbFywrn",
          "ItemFocusAnim-darkerGrey": "_1klcEk0V0JFATe7imIRZ1C",
          "ItemFocusAnim-darkGreySettings": "_1o29CI_yDNVtgTV1cxDqGZ",
          "ItemFocusAnim-darkGrey": "_2BtPOA0wSbFULgc-Zh-0_x",
          "ItemFocusAnim-grey": "_24LF-yODOtVFSuejuQ_xu2",
          "ItemFocusAnim-translucent-white-10": "uTNXVgYo8JPxZgJyTl9LQ",
          "ItemFocusAnim-translucent-white-20": "ItJlj151fY2eNJEBeWVOA",
          "ItemFocusAnimBorder-darkGrey": "_2blFzc6unV1uJG63OhTkyP",
          "ItemFocusAnim-green": "_3CaU0PXdB2ThLG-Q0foVrK",
          focusAnimation: "_1EZdMwnQzoxjAOoFpXHuZ_",
          hoverAnimation: "kfeP_UGfxsZwzWvFD4ytm",
        };
      },
      70342: (q) => {
        q.exports = {
          "duration-app-launch": "800ms",
          narrowWidth: "500px",
          PersonaStatusIcon: "KxAI_M9gWx3OnKSshHOs6",
          MobilePhoneIcon: "_1iRFj5lJrMqMnRb3GZYPSw",
          SteamDeckIcon: "_2oLqcfqHHKKAK0WfzjXMg_",
          VRIcon: "_368tz9TSOLGiG2mNMLScMz",
          BackgroundAnimation: "_3EMAF_7GAyPW8G7OSt8s0z",
          "ItemFocusAnim-darkerGrey-nocolor": "_3fWOpZpfDmwOCKEdw8xcqf",
          "ItemFocusAnim-darkerGrey": "_2Tvf1f8cUg1eYlQg027B3W",
          "ItemFocusAnim-darkGreySettings": "_1tKhhjTYPWAz5_eQe91O1A",
          "ItemFocusAnim-darkGrey": "_1l7IyrCH5ez4PBO7R4h8RT",
          "ItemFocusAnim-grey": "_3X7_M9NEYzjKEgQRMQevkQ",
          "ItemFocusAnim-translucent-white-10": "_3YCxpOEfjLuLbB1hut87fZ",
          "ItemFocusAnim-translucent-white-20": "_2kvhksXgWA4vxGz5Oy1tV1",
          "ItemFocusAnimBorder-darkGrey": "_3N1wGZIJ5QySTBWgyBavuM",
          "ItemFocusAnim-green": "Vgab6fHUHvZ-iWKRJwy8h",
          focusAnimation: "GvE_FaPqTf1D0HASx1C_0",
          hoverAnimation: "_88lGefJsUDJUpRFJ3pUq7",
        };
      },
      43047: (q) => {
        q.exports = {
          narrowWidth: "500px",
          avatarHolder: "nibodjvvrm86uCfnnAn4g",
          avatarStatus: "_3xUpb5DWXPFNcHHIcv-9pe",
          avatar: "_3h-QRJGxnVOIExtHD1R0f2",
          avatarFrame: "X_mJE4BYV5StDPwZhSiAu",
          avatarFrameImg: "_3fM0F85j3aWVzr4RJM9-eu",
        };
      },
      40594: (q) => {
        q.exports = {
          ProgressBar: "_3szjUMH5QeRwtXAsLRcWt9",
          AnimateProgress: "_3DjdoQj5NoknowwV5t5JPN",
          loadingBarAnim: "_2SA1xV5w3BGirkDWosGYoX",
          Indeterminate: "_3G7KLhFOuTiHW-fGxtWtRs",
          Circular: "_3wMS41OoTPnZyEddTVwzy_",
          Full: "_3t_UEZDy1QxxcYfn3TTvD2",
        };
      },
      71477: (q) => {
        q.exports = {
          WidgetHeaderCtn: "_2-tz2hqtOXPPtMnVPHNSdx",
          LaunchAction: "xD8XE561L4OLHkp9K3UIV",
          DiscoveryQueueWidget: "aKZCakHw7WVaUN3j36Nh",
          WidgetHeaderText: "_1mKVZY4-l46AZiZvctCEmx",
          WidgetHeaderSubText: "O2jA-VCFl9bmblncfI4k2",
          LoginButton: "_3u1HeR7JRPiiuKIT78j2Cc",
          Placeholder: "_3qFL88r7vVtG3lg2enLhfi",
          SaleTopSection: "_3Xj9phC0S8zL6qrQ5T1sUJ",
          StickerArrangement: "_1hvmhK7qgdrqLwH_Duphah",
          SaleSticker: "_19psoPSyaHlg76v5Cd9H-n",
          SaleTextCtn: "cwQNGPoPuJS67rykUgZdU",
          BoldText: "_1LS-qczKUuqKzg56ll_C0A",
        };
      },
      57834: (q) => {
        q.exports = {
          "duration-app-launch": "800ms",
          DiscoveryQueueCarouselCtn: "_2u0N2gUX44_tavazJJb_QP",
          TextLink: "_3ZdNCUMz9KZMkwPZlO8zmi",
          DiscoveryQueueApp: "_1xJSMubUWBlahkrtb4IFTc",
          DiscoveryQueueWrapper: "_2BYaxM7mBfooJbZYzhEv4D",
          revealDiscoveryQueueWrapper: "brzQbY6Z8TH8Ww-rFL4E0",
          DiscoveryQueueItemsCtn: "_3q6eNRFBrPSFSGEn8uRFZ3",
          DiscoveryQueueItemPositioner: "_16tdfw6vxg9Hdy0KfCutXn",
          Selected: "_2aeAhZ2Y99YIR2-zD6l27U",
          InRange: "_1XPIeNMxObbkYolTEj0Bwh",
          Dragging: "_3fTO0TgoWEAo4zdaHOCTh0",
          FarLeft: "vkLp1smRjDnZg7XQcMqjk",
          Left: "_3gBoKuhIxMBjlxU7FZ2L3a",
          Current: "_2CgJDPFhM9rbjsq9n0c9I_",
          Right: "_1AGP_wKeaN9phzlq_2K9H7",
          FarRight: "hBGRzfrW2Obp7QpzYCi2L",
          AppDetailsCtn: "_2Zwt2P5vy4W9Ha5ePOv54U",
          AppDetailsCtnTop: "_3TkhdqIi1gqwMzexQDS8Ab",
          CapsuleLink: "_2m8YEKXvKa2bcFNjqXdJu7",
          AppLibraryHero: "_uGgOnTsOzgIVK9BHMTUV",
          AppHeader: "Vwr5XZLr5tOEaVLYbj1mZ",
          RightColumn: "VVNgZo2T-rubrTvNMPSoh",
          AppName: "_3lk6f1XI_loCIhBevOddHP",
          AppTagsCtn: "xXcRKEuacDG8kYtDXu6OH",
          TagEntry: "xmqBa8sZa4Xhgktfr43Uh",
          AppReviews: "_2alBMAZOarIyf-vIiNazRg",
          RelevantCtn: "_3sfhS6SCV1q8dTaRIpWCHB",
          RelevantColumn: "Ne2AhbYmPfTxwJVmj1FZP",
          RelevantItem: "_2OUHZGUrr0FugrwCwIm6dF",
          RelevantCheck: "_1BOH1zFTOxtlgKkeEANpYO",
          IgnoreLink: "fir3UBZYT6EAmdYWAdr3a",
          AppActionButtonsCtn: "_2IQHDn5ZvlB1ThhSb_lhX",
          AppActionJustButtonsCtn: "duAyQ1rUX78lMmmZY1V0n",
          QueueButton: "_22Bfzcdg2l-RQEn-qKSIol",
          ButtonsRowWrap: "_1plvU4aLu4hq22gYwThZnH",
          IgnoredCtn: "_3G1MYmgXVcweTUK5jtU_Ft",
          Active: "_2D_EZlAEopCvqU0_w21FdH",
          IgnoredInfo: "_2j-elz350f4ndxI9CBUbyW",
          IgnoredTitle: "_18alvCecAAMAsyM_6zCY2T",
          IgnoredDescription: "CmI-HxKbBH8PjoSk7IVPC",
          UndoIgnoreButton: "_2E3PfDDIiiKoy4iDQV7Ewl",
          AppDesc: "_3-6CubUJWYN2tbKvwS2N9n",
          YGlyph: "_3ncywKLa2mgKgbsj-g2wJi",
          SummaryContentCtn: "Tvu6zAI3kbdYjGQGbypuQ",
          SummaryTitle: "_2o4_HDWD3bRMkoJT4RfiMv",
          YourStats: "_3-iD7yn2dCmqp9AL5xuwLX",
          SummaryGrid: "_3vRcTzxpTSFxcxVm9BKrlQ",
          GridItem: "_2w3xjuBZIgZJPO9HAa5Hb0",
          GridTitle: "_7HEa84jCz03LkGTjIZa7c",
          GridNumber: "jM11lU9OD9-2Hlu3Akwtj",
          GridSubTitle: "_2n8wa2hMCjKHhvMsS0v3_k",
          SummaryActionButtonsCtn: "nqmYD9sGBA3BEmNjp6qYF",
          TopBarCtn: "_1ewUwegRciiNydBWSQRCX-",
          LearnMoreLink: "CiFk6OuYAQSbv_DGXoBSX",
          ControlsCtn: "_2Gy72TJcKqY9gqP5-TAmSk",
          Disabled: "_2xsPifNspMLcbkoUSA5Ujl",
          Primary: "_3o2jhEGrGiVndMjUbNpOw-",
          Launch: "_3SOZx68qVakLwDvAYBOPMG",
          Wide: "_1tFfTbcTKjlfSGsMOJvdf_",
          QueueNavArrow: "_2sZ7DAljYV5Xd-nbhtlmyM",
          Enable: "_2CTzbHZ-C-FfnXEtLZPv9q",
          RightArrow: "_30_0NBq3DkV-qL7Eyqva-t",
          LeftArrow: "_36Cln2gIYtwR3sPPcOi9bT",
          ReleventSimilarAppsCtn: "_2akaWEht7jMXdxPJFmf3WN",
          RecommendingCuratorsCtn: "_RZQ6JnUY6lQGmRcgHFNA",
          AppRelevanceCtn: "_367qBdIRU4xAYHt5cqhPVa",
          WhyRelevant: "_29ReJunMtLbnxbnixF6VdE",
          SimilarAppCtn: "_2fNR47HGs7tI_v1HC2-N1h",
          SimilarAppImg: "_1q8mEyt8Rp7JweHMRGm6hq",
          SimilarAppText: "YWLoeGgBPsjUtXywol3_O",
          FriendAvatarsCtn: "_2hxko0SvUWCZ30U4JH4TNn",
          RelevantTextBold: "_1Z_ek2XNBZbkZqyR-QSwlo",
          AppDescription: "_2mksBeuafFs1CMp0t5Z9gX",
          TradingCardCtn: "_13ZcoCKc8H09LSHp4C197Z",
          TradingCardImage: "_2ZB_x5Jq7JGDapJVPsCZTo",
          Bold: "_2P6WAN13LnRVRmRb-VNu_L",
          FriendBlockCtn: "_34aoCP80lDRK3cq6_V0YQ_",
          PersonaStatus: "_1AYnL3n86EbaOCKf18KKV8",
          ProgressHidden: "UdYhfFDOguxduU7c3PVpv",
          DiscoveryQueueName: "D7yeVCEwaFr6qNo_bPGCr",
          SaleRewardsCtn: "u42zSEWdGrvBDimhV4QNI",
          RewardStatusCtn: "_2C1i6xEuF431h_KHPB53zS",
          SaleRewardAppTitle: "_1-pK3SWEOk30eo-q0EKyH7",
          BackgroundAnimation: "_3tn052OQVu3Bbdx7lAg8v3",
          "ItemFocusAnim-darkerGrey-nocolor": "WFiTs9SPGUObvgDncLEFm",
          "ItemFocusAnim-darkerGrey": "_18LH9gSLwgTgUzIl1C0-pq",
          "ItemFocusAnim-darkGreySettings": "_3bomS6MjDv4c5XbYu2Caqu",
          "ItemFocusAnim-darkGrey": "_3BW-wlgbU7_7zOW8-2d7OI",
          "ItemFocusAnim-grey": "_2PCW9DVf1EkOJw0pwtlWSj",
          "ItemFocusAnim-translucent-white-10": "A-_kb_s9v8pLyRrldCupj",
          "ItemFocusAnim-translucent-white-20": "_1fugsBQAve_CPDYfcK5fou",
          "ItemFocusAnimBorder-darkGrey": "_1X5xeHixS4XJusrPGRQ4nL",
          "ItemFocusAnim-green": "guH2fAOEkfwuIvOhn0oHl",
          focusAnimation: "_2XCqyPQ8Leg6L1dwSjpULK",
          hoverAnimation: "zU1NJEk7QqOdsECL2PI2d",
        };
      },
      25599: (q) => {
        q.exports = {
          "duration-app-launch": "800ms",
          ProgressCtn: "_3ed1Al-hFnjq4HQeLo6cIT",
          ProgressDot: "_2R187sMx7MTX5XQ2KN3Xnx",
          ProgressDotActive: "_3z2pS3DFn3MEl5ZPw6lsa9",
          ProgressDotSelected: "_1qJVCZsv51RtfBGao-PV8V",
          ProgressDotClickable: "jKfeFH4S6YhaeZ7RCZ8BN",
          BackgroundAnimation: "_3B8qOyTqC7rzOP_X5kvWK-",
          "ItemFocusAnim-darkerGrey-nocolor": "_2wYIdqvoWTU_8MPGJtV4j",
          "ItemFocusAnim-darkerGrey": "_5noNLXRGVi51cgI8nYBAm",
          "ItemFocusAnim-darkGreySettings": "_3UqXfp4k1blu2wv57exkEd",
          "ItemFocusAnim-darkGrey": "_6iLF1QqShrpEW0UiF0x2o",
          "ItemFocusAnim-grey": "PuZXrV7q9vI7p-jK9x2pN",
          "ItemFocusAnim-translucent-white-10": "_2RwwslrDVdOXePDy6QCEkZ",
          "ItemFocusAnim-translucent-white-20": "_1VijReQZ-moslCOSkJYKIt",
          "ItemFocusAnimBorder-darkGrey": "_1HaTvS9ANJY56lTVTb35I3",
          "ItemFocusAnim-green": "_3mF4OtweD7vY2bcN6piLTq",
          focusAnimation: "rpa_zF1YXxbH3-m1-AI6Q",
          hoverAnimation: "_2WTZTfL3dbXnfZM3Ly10Jo",
        };
      },
      71109: (q) => {
        q.exports = {
          "duration-app-launch": "800ms",
          DiscoveryQueueWidgetCtn: "_1LXqxVtAL8Lmy7J7rLSVit",
          WidgetText: "co4IP1iV1813n9UgG3h5f",
          WidgetCapsule: "ZyOLslFdmnVjR1OGpRaue",
          CloseButton: "bfN8kdqVDI58Ly1qiSuT_",
          Y: "_1FD7rgQVEqkzjDjzYa-1BC",
          BackgroundAnimation: "_1Z5QxYX1JW3xFfBP4Olbj8",
          "ItemFocusAnim-darkerGrey-nocolor": "_2-B-maYes-hWNZaATdM3tO",
          "ItemFocusAnim-darkerGrey": "_7SrvWzxxGnhg_rsCG_oIn",
          "ItemFocusAnim-darkGreySettings": "_2XbtC6kB1lhuX_TsQSZLwO",
          "ItemFocusAnim-darkGrey": "_1eAeT6Xs-BGjbRYdD0Wir2",
          "ItemFocusAnim-grey": "_3EzLQA3urt8YNbSeiYzqLQ",
          "ItemFocusAnim-translucent-white-10": "_3dWS2PSA5ggPqUc4QB-P1Z",
          "ItemFocusAnim-translucent-white-20": "_2qWHGTZs1PRzk_FzWgYwvS",
          "ItemFocusAnimBorder-darkGrey": "_1gEGV4txNqIr0COruFARVh",
          "ItemFocusAnim-green": "_1kT_vT6X_21tgdACN3MD1r",
          focusAnimation: "_2VIlPFJOxlK-lazFTkek7v",
          hoverAnimation: "I3jGaAXmpxTOQldGALnOQ",
        };
      },
    },
  ]);
})();
