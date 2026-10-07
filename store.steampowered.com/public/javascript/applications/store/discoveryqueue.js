/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [89672],
    {
      15860: (ee, J, e) => {
        "use strict";
        e.d(J, { L: () => G, c: () => r });
        var t = e(27386),
          p = e(76617),
          A = e(58632),
          d = e.n(A);
        function r(V, Y) {
          return new (d())(
            async (K) => {
              const b = [...K],
                D = await t.xtC.GetPlayerLinkDetails(V, { steamids: b }),
                L = new Map();
              return (
                D.Body()
                  .accounts()
                  .forEach((N) => {
                    const z = N.toObject();
                    L.set(z.public_data.steamid, z);
                  }),
                b.map((N) => L.get(N) ?? null)
              );
            },
            { maxBatchSize: 100, cache: !1, ...Y },
          );
        }
        function G(V) {
          return (0, p.V)("PlayerLinkDetails", () => r(V));
        }
      },
      9682: (ee, J, e) => {
        "use strict";
        e.d(J, { KV: () => v, mJ: () => p, Bm: () => t, YK: () => Ae });
        var t = {};
        e.r(t), e.d(t, { Y: () => Y });
        var p = {};
        e.r(p), e.d(p, { r5: () => K, _Q: () => b, FB: () => D });
        var A = e(80613),
          d = e.n(A),
          r = e(75245),
          G = e(35038);
        const V = 0,
          Y = 1,
          K = 0,
          b = 1,
          D = 2;
        function L(oe) {
          return "unknown EUserReviewFlaggedByDeveloperType ( " + oe + " )";
        }
        function N(oe) {
          return "unknown EUserReviewQuality ( " + oe + " )";
        }
        function z(oe) {
          return "unknown EUserReviewVoteTag ( " + oe + " )";
        }
        function X(oe) {
          return "unknown EUserReviewAuditAction ( " + oe + " )";
        }
        function Z(oe) {
          return "unknown EUserReviewsAppReviewsFilter ( " + oe + " )";
        }
        function R(oe) {
          return "unknown EUserReviewsReviewType ( " + oe + " )";
        }
        function ae(oe) {
          return "unknown EUserReviewsPurchaseType ( " + oe + " )";
        }
        function I(oe) {
          return "unknown EReviewTagType ( " + oe + " )";
        }
        function W(oe) {
          return "unknown EUserReviewBombPeriodType ( " + oe + " )";
        }
        class i extends A.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              i.prototype.recommendationid || r.Sg(i.M()),
              A.Message.initialize(this, n, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              i.sm_m ||
                (i.sm_m = {
                  proto: i,
                  fields: {
                    recommendationid: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    review_text: {
                      n: 2,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    voted_up: { n: 3, br: r.qM.readBool, bw: r.gp.writeBool },
                    is_public: { n: 4, br: r.qM.readBool, bw: r.gp.writeBool },
                    language: {
                      n: 5,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    is_in_early_access: {
                      n: 6,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    received_compensation: {
                      n: 7,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    comments_disabled: {
                      n: 8,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    hide_in_steam_china: {
                      n: 9,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    saved_hardware_id: {
                      n: 10,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              i.sm_m
            );
          }
          static MBF() {
            return i.sm_mbf || (i.sm_mbf = r.w0(i.M())), i.sm_mbf;
          }
          toObject(n = !1) {
            return i.toObject(n, this);
          }
          static toObject(n, m) {
            return r.BT(i.M(), n, m);
          }
          static fromObject(n) {
            return r.Uq(i.M(), n);
          }
          static deserializeBinary(n) {
            let m = new (d().BinaryReader)(n),
              k = new i();
            return i.deserializeBinaryFromReader(k, m);
          }
          static deserializeBinaryFromReader(n, m) {
            return r.zj(i.MBF(), n, m);
          }
          serializeBinary() {
            var n = new (d().BinaryWriter)();
            return i.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, m) {
            r.i0(i.M(), n, m);
          }
          serializeBase64String() {
            var n = new (d().BinaryWriter)();
            return (
              i.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserReviews_Update_Request";
          }
        }
        class g extends A.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(), A.Message.initialize(this, n, 0, -1, void 0, null);
          }
          toObject(n = !1) {
            return g.toObject(n, this);
          }
          static toObject(n, m) {
            return n ? { $jspbMessageInstance: m } : {};
          }
          static fromObject(n) {
            return new g();
          }
          static deserializeBinary(n) {
            let m = new (d().BinaryReader)(n),
              k = new g();
            return g.deserializeBinaryFromReader(k, m);
          }
          static deserializeBinaryFromReader(n, m) {
            return n;
          }
          serializeBinary() {
            var n = new (d().BinaryWriter)();
            return g.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, m) {}
          serializeBase64String() {
            var n = new (d().BinaryWriter)();
            return (
              g.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserReviews_Update_Response";
          }
        }
        class u extends A.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              u.prototype.saved_hardware_id || r.Sg(u.M()),
              A.Message.initialize(this, n, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              u.sm_m ||
                (u.sm_m = {
                  proto: u,
                  fields: {
                    saved_hardware_id: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              u.sm_m
            );
          }
          static MBF() {
            return u.sm_mbf || (u.sm_mbf = r.w0(u.M())), u.sm_mbf;
          }
          toObject(n = !1) {
            return u.toObject(n, this);
          }
          static toObject(n, m) {
            return r.BT(u.M(), n, m);
          }
          static fromObject(n) {
            return r.Uq(u.M(), n);
          }
          static deserializeBinary(n) {
            let m = new (d().BinaryReader)(n),
              k = new u();
            return u.deserializeBinaryFromReader(k, m);
          }
          static deserializeBinaryFromReader(n, m) {
            return r.zj(u.MBF(), n, m);
          }
          serializeBinary() {
            var n = new (d().BinaryWriter)();
            return u.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, m) {
            r.i0(u.M(), n, m);
          }
          serializeBase64String() {
            var n = new (d().BinaryWriter)();
            return (
              u.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserReviews_BackfillSavedHardware_Request";
          }
        }
        class y extends A.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              y.prototype.num_backfilled || r.Sg(y.M()),
              A.Message.initialize(this, n, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              y.sm_m ||
                (y.sm_m = {
                  proto: y,
                  fields: {
                    num_backfilled: {
                      n: 1,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              y.sm_m
            );
          }
          static MBF() {
            return y.sm_mbf || (y.sm_mbf = r.w0(y.M())), y.sm_mbf;
          }
          toObject(n = !1) {
            return y.toObject(n, this);
          }
          static toObject(n, m) {
            return r.BT(y.M(), n, m);
          }
          static fromObject(n) {
            return r.Uq(y.M(), n);
          }
          static deserializeBinary(n) {
            let m = new (d().BinaryReader)(n),
              k = new y();
            return y.deserializeBinaryFromReader(k, m);
          }
          static deserializeBinaryFromReader(n, m) {
            return r.zj(y.MBF(), n, m);
          }
          serializeBinary() {
            var n = new (d().BinaryWriter)();
            return y.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, m) {
            r.i0(y.M(), n, m);
          }
          serializeBase64String() {
            var n = new (d().BinaryWriter)();
            return (
              y.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserReviews_BackfillSavedHardware_Response";
          }
        }
        class o extends A.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              o.prototype.reaction_type || r.Sg(o.M()),
              A.Message.initialize(this, n, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              o.sm_m ||
                (o.sm_m = {
                  proto: o,
                  fields: {
                    reaction_type: {
                      n: 1,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    count: { n: 2, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                  },
                }),
              o.sm_m
            );
          }
          static MBF() {
            return o.sm_mbf || (o.sm_mbf = r.w0(o.M())), o.sm_mbf;
          }
          toObject(n = !1) {
            return o.toObject(n, this);
          }
          static toObject(n, m) {
            return r.BT(o.M(), n, m);
          }
          static fromObject(n) {
            return r.Uq(o.M(), n);
          }
          static deserializeBinary(n) {
            let m = new (d().BinaryReader)(n),
              k = new o();
            return o.deserializeBinaryFromReader(k, m);
          }
          static deserializeBinaryFromReader(n, m) {
            return r.zj(o.MBF(), n, m);
          }
          serializeBinary() {
            var n = new (d().BinaryWriter)();
            return o.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, m) {
            r.i0(o.M(), n, m);
          }
          serializeBase64String() {
            var n = new (d().BinaryWriter)();
            return (
              o.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserReviews_Recommendation_LoyaltyReaction";
          }
        }
        class l extends A.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              l.prototype.id || r.Sg(l.M()),
              A.Message.initialize(this, n, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              l.sm_m ||
                (l.sm_m = {
                  proto: l,
                  fields: {
                    id: { n: 1, br: r.qM.readEnum, bw: r.gp.writeEnum },
                    ranges: { n: 2, c: s, r: !0, q: !0 },
                  },
                }),
              l.sm_m
            );
          }
          static MBF() {
            return l.sm_mbf || (l.sm_mbf = r.w0(l.M())), l.sm_mbf;
          }
          toObject(n = !1) {
            return l.toObject(n, this);
          }
          static toObject(n, m) {
            return r.BT(l.M(), n, m);
          }
          static fromObject(n) {
            return r.Uq(l.M(), n);
          }
          static deserializeBinary(n) {
            let m = new (d().BinaryReader)(n),
              k = new l();
            return l.deserializeBinaryFromReader(k, m);
          }
          static deserializeBinaryFromReader(n, m) {
            return r.zj(l.MBF(), n, m);
          }
          serializeBinary() {
            var n = new (d().BinaryWriter)();
            return l.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, m) {
            r.i0(l.M(), n, m);
          }
          serializeBase64String() {
            var n = new (d().BinaryWriter)();
            return (
              l.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserReviews_Recommendation_Tag";
          }
        }
        class s extends A.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              s.prototype.start || r.Sg(s.M()),
              A.Message.initialize(this, n, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              s.sm_m ||
                (s.sm_m = {
                  proto: s,
                  fields: {
                    start: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    end: { n: 2, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                  },
                }),
              s.sm_m
            );
          }
          static MBF() {
            return s.sm_mbf || (s.sm_mbf = r.w0(s.M())), s.sm_mbf;
          }
          toObject(n = !1) {
            return s.toObject(n, this);
          }
          static toObject(n, m) {
            return r.BT(s.M(), n, m);
          }
          static fromObject(n) {
            return r.Uq(s.M(), n);
          }
          static deserializeBinary(n) {
            let m = new (d().BinaryReader)(n),
              k = new s();
            return s.deserializeBinaryFromReader(k, m);
          }
          static deserializeBinaryFromReader(n, m) {
            return r.zj(s.MBF(), n, m);
          }
          serializeBinary() {
            var n = new (d().BinaryWriter)();
            return s.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, m) {
            r.i0(s.M(), n, m);
          }
          serializeBase64String() {
            var n = new (d().BinaryWriter)();
            return (
              s.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserReviews_Recommendation_Tag_Range";
          }
        }
        class a extends A.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              a.prototype.recommendationid || r.Sg(a.M()),
              A.Message.initialize(this, n, 0, -1, [27, 40, 54], null);
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
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    steamid: {
                      n: 2,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    appid: { n: 3, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    review: { n: 4, br: r.qM.readString, bw: r.gp.writeString },
                    time_created: {
                      n: 5,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    time_updated: {
                      n: 6,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    votes_up: {
                      n: 7,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    votes_down: {
                      n: 8,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    vote_score: {
                      n: 9,
                      br: r.qM.readFloat,
                      bw: r.gp.writeFloat,
                    },
                    language: {
                      n: 10,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    comment_count: {
                      n: 11,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    voted_up: { n: 12, br: r.qM.readBool, bw: r.gp.writeBool },
                    is_public: { n: 13, br: r.qM.readBool, bw: r.gp.writeBool },
                    moderator_hidden: {
                      n: 14,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    flagged_by_developer: {
                      n: 15,
                      br: r.qM.readEnum,
                      bw: r.gp.writeEnum,
                    },
                    report_score: {
                      n: 16,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    steamid_moderator: {
                      n: 17,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    steamid_developer: {
                      n: 18,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    steamid_dev_responder: {
                      n: 19,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    developer_response: {
                      n: 20,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    time_developer_responded: {
                      n: 21,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    developer_flag_cleared: {
                      n: 22,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    written_during_early_access: {
                      n: 23,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    votes_funny: {
                      n: 24,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    received_compensation: {
                      n: 25,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    unverified_purchase: {
                      n: 26,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    review_qualities: {
                      n: 27,
                      r: !0,
                      q: !0,
                      br: r.qM.readEnum,
                      pbr: r.qM.readPackedEnum,
                      bw: r.gp.writeRepeatedEnum,
                    },
                    weighted_vote_score: {
                      n: 28,
                      br: r.qM.readFloat,
                      bw: r.gp.writeFloat,
                    },
                    moderation_note: {
                      n: 29,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    payment_method: {
                      n: 30,
                      br: r.qM.readInt32,
                      bw: r.gp.writeInt32,
                    },
                    playtime_2weeks: {
                      n: 31,
                      br: r.qM.readInt32,
                      bw: r.gp.writeInt32,
                    },
                    playtime_forever: {
                      n: 32,
                      br: r.qM.readInt32,
                      bw: r.gp.writeInt32,
                    },
                    last_playtime: {
                      n: 33,
                      br: r.qM.readInt32,
                      bw: r.gp.writeInt32,
                    },
                    comments_disabled: {
                      n: 34,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    playtime_at_review: {
                      n: 35,
                      br: r.qM.readInt32,
                      bw: r.gp.writeInt32,
                    },
                    approved_for_china: {
                      n: 36,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    ban_check_result: {
                      n: 37,
                      br: r.qM.readEnum,
                      bw: r.gp.writeEnum,
                    },
                    refunded: { n: 38, br: r.qM.readBool, bw: r.gp.writeBool },
                    account_score_spend: {
                      n: 39,
                      br: r.qM.readInt32,
                      bw: r.gp.writeInt32,
                    },
                    reactions: { n: 40, c: o, r: !0, q: !0 },
                    ipaddress: {
                      n: 41,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    hidden_in_steam_china: {
                      n: 42,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    steam_china_location: {
                      n: 43,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    category_ascii_pct: {
                      n: 44,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    category_meme_pct: {
                      n: 45,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    category_offtopic_pct: {
                      n: 46,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    category_uninformative_pct: {
                      n: 47,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    category_votefarming_pct: {
                      n: 48,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    deck_playtime_at_review: {
                      n: 49,
                      br: r.qM.readInt32,
                      bw: r.gp.writeInt32,
                    },
                    is_bot_review_pct: {
                      n: 50,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    positivity_pct: {
                      n: 51,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    tags_with_ranges: { n: 54, c: l, r: !0, q: !0 },
                    saved_hardware_id: {
                      n: 56,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    hardware_cluster_id: {
                      n: 57,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              a.sm_m
            );
          }
          static MBF() {
            return a.sm_mbf || (a.sm_mbf = r.w0(a.M())), a.sm_mbf;
          }
          toObject(n = !1) {
            return a.toObject(n, this);
          }
          static toObject(n, m) {
            return r.BT(a.M(), n, m);
          }
          static fromObject(n) {
            return r.Uq(a.M(), n);
          }
          static deserializeBinary(n) {
            let m = new (d().BinaryReader)(n),
              k = new a();
            return a.deserializeBinaryFromReader(k, m);
          }
          static deserializeBinaryFromReader(n, m) {
            return r.zj(a.MBF(), n, m);
          }
          serializeBinary() {
            var n = new (d().BinaryWriter)();
            return a.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, m) {
            r.i0(a.M(), n, m);
          }
          serializeBase64String() {
            var n = new (d().BinaryWriter)();
            return (
              a.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "RecommendationDetails";
          }
        }
        class v extends A.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              v.prototype.appid || r.Sg(v.M()),
              A.Message.initialize(this, n, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              v.sm_m ||
                (v.sm_m = {
                  proto: v,
                  fields: {
                    appid: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                  },
                }),
              v.sm_m
            );
          }
          static MBF() {
            return v.sm_mbf || (v.sm_mbf = r.w0(v.M())), v.sm_mbf;
          }
          toObject(n = !1) {
            return v.toObject(n, this);
          }
          static toObject(n, m) {
            return r.BT(v.M(), n, m);
          }
          static fromObject(n) {
            return r.Uq(v.M(), n);
          }
          static deserializeBinary(n) {
            let m = new (d().BinaryReader)(n),
              k = new v();
            return v.deserializeBinaryFromReader(k, m);
          }
          static deserializeBinaryFromReader(n, m) {
            return r.zj(v.MBF(), n, m);
          }
          serializeBinary() {
            var n = new (d().BinaryWriter)();
            return v.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, m) {
            r.i0(v.M(), n, m);
          }
          serializeBase64String() {
            var n = new (d().BinaryWriter)();
            return (
              v.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserReviews_GetFriendsRecommendedApp_Request";
          }
        }
        class T extends A.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              T.prototype.accountids_recommended || r.Sg(T.M()),
              A.Message.initialize(this, n, 0, -1, [1, 3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              T.sm_m ||
                (T.sm_m = {
                  proto: T,
                  fields: {
                    accountids_recommended: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: r.qM.readUint32,
                      pbr: r.qM.readPackedUint32,
                      bw: r.gp.writeRepeatedUint32,
                    },
                    accountids_not_recommended: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: r.qM.readUint32,
                      pbr: r.qM.readPackedUint32,
                      bw: r.gp.writeRepeatedUint32,
                    },
                  },
                }),
              T.sm_m
            );
          }
          static MBF() {
            return T.sm_mbf || (T.sm_mbf = r.w0(T.M())), T.sm_mbf;
          }
          toObject(n = !1) {
            return T.toObject(n, this);
          }
          static toObject(n, m) {
            return r.BT(T.M(), n, m);
          }
          static fromObject(n) {
            return r.Uq(T.M(), n);
          }
          static deserializeBinary(n) {
            let m = new (d().BinaryReader)(n),
              k = new T();
            return T.deserializeBinaryFromReader(k, m);
          }
          static deserializeBinaryFromReader(n, m) {
            return r.zj(T.MBF(), n, m);
          }
          serializeBinary() {
            var n = new (d().BinaryWriter)();
            return T.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, m) {
            r.i0(T.M(), n, m);
          }
          serializeBase64String() {
            var n = new (d().BinaryWriter)();
            return (
              T.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserReviews_GetFriendsRecommendedApp_Response";
          }
        }
        class _ extends A.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              _.prototype.requests || r.Sg(_.M()),
              A.Message.initialize(this, n, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: { requests: { n: 1, c: w, r: !0, q: !0 } },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = r.w0(_.M())), _.sm_mbf;
          }
          toObject(n = !1) {
            return _.toObject(n, this);
          }
          static toObject(n, m) {
            return r.BT(_.M(), n, m);
          }
          static fromObject(n) {
            return r.Uq(_.M(), n);
          }
          static deserializeBinary(n) {
            let m = new (d().BinaryReader)(n),
              k = new _();
            return _.deserializeBinaryFromReader(k, m);
          }
          static deserializeBinaryFromReader(n, m) {
            return r.zj(_.MBF(), n, m);
          }
          serializeBinary() {
            var n = new (d().BinaryWriter)();
            return _.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, m) {
            r.i0(_.M(), n, m);
          }
          serializeBase64String() {
            var n = new (d().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserReviews_GetIndividualRecommendations_Request";
          }
        }
        class w extends A.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              w.prototype.steamid || r.Sg(w.M()),
              A.Message.initialize(this, n, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              w.sm_m ||
                (w.sm_m = {
                  proto: w,
                  fields: {
                    steamid: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    appid: { n: 2, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                  },
                }),
              w.sm_m
            );
          }
          static MBF() {
            return w.sm_mbf || (w.sm_mbf = r.w0(w.M())), w.sm_mbf;
          }
          toObject(n = !1) {
            return w.toObject(n, this);
          }
          static toObject(n, m) {
            return r.BT(w.M(), n, m);
          }
          static fromObject(n) {
            return r.Uq(w.M(), n);
          }
          static deserializeBinary(n) {
            let m = new (d().BinaryReader)(n),
              k = new w();
            return w.deserializeBinaryFromReader(k, m);
          }
          static deserializeBinaryFromReader(n, m) {
            return r.zj(w.MBF(), n, m);
          }
          serializeBinary() {
            var n = new (d().BinaryWriter)();
            return w.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, m) {
            r.i0(w.M(), n, m);
          }
          serializeBase64String() {
            var n = new (d().BinaryWriter)();
            return (
              w.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserReviews_GetIndividualRecommendations_Request_RecommendationRequest";
          }
        }
        class ne extends A.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              ne.prototype.recommendations || r.Sg(ne.M()),
              A.Message.initialize(this, n, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ne.sm_m ||
                (ne.sm_m = {
                  proto: ne,
                  fields: { recommendations: { n: 1, c: a, r: !0, q: !0 } },
                }),
              ne.sm_m
            );
          }
          static MBF() {
            return ne.sm_mbf || (ne.sm_mbf = r.w0(ne.M())), ne.sm_mbf;
          }
          toObject(n = !1) {
            return ne.toObject(n, this);
          }
          static toObject(n, m) {
            return r.BT(ne.M(), n, m);
          }
          static fromObject(n) {
            return r.Uq(ne.M(), n);
          }
          static deserializeBinary(n) {
            let m = new (d().BinaryReader)(n),
              k = new ne();
            return ne.deserializeBinaryFromReader(k, m);
          }
          static deserializeBinaryFromReader(n, m) {
            return r.zj(ne.MBF(), n, m);
          }
          serializeBinary() {
            var n = new (d().BinaryWriter)();
            return ne.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, m) {
            r.i0(ne.M(), n, m);
          }
          serializeBase64String() {
            var n = new (d().BinaryWriter)();
            return (
              ne.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserReviews_GetIndividualRecommendations_Response";
          }
        }
        var Ae;
        ((oe) => {
          function n(se, S, B) {
            return se.SendMsg("UserReviews.Update#1", (0, G.I8)(i, S, B), g, {
              ePrivilege: 3,
            });
          }
          oe.Update = n;
          function m(se, S, B) {
            return se.SendMsg(
              "UserReviews.BackfillSavedHardware#1",
              (0, G.I8)(u, S, B),
              y,
              { ePrivilege: 1 },
            );
          }
          oe.BackfillSavedHardware = m;
          function k(se, S, B) {
            return se.SendMsg(
              "UserReviews.GetFriendsRecommendedApp#1",
              (0, G.I8)(v, S, B),
              T,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          oe.GetFriendsRecommendedApp = k;
          function $e(se, S, B) {
            return se.SendMsg(
              "UserReviews.GetIndividualRecommendations#1",
              (0, G.I8)(_, S, B),
              ne,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          oe.GetIndividualRecommendations = $e;
        })(Ae || (Ae = {}));
      },
      94253: (ee, J, e) => {
        "use strict";
        e.d(J, {
          t5: () => ne,
          os: () => se,
          Qt: () => m,
          CC: () => w,
          Oz: () => _,
          lu: () => Ae,
        });
        var t = e(23386),
          p = e(72609),
          A = e(68312),
          d = e(75233),
          r = e(80902),
          G = e(51614),
          V = e(90626),
          Y = e(33828),
          K = e(48491),
          b = e(67705),
          D = e(72604),
          L = e(31224),
          N = e(7112);
        const z = { bCanClaimNewItem: !1, bAlreadyClaimedCurrentItem: !1 };
        async function X(S, B) {
          const P = await N.Qm.CanClaimItem(S, { language: B });
          if (P.GetEResult() != D.R)
            throw new Error(
              "SaleItemRewards.CanClaimItem answered " + P.GetEResult(),
            );
          const x = P.Body().toObject(),
            $ = x.reward_item?.defid ? x.reward_item : void 0;
          return {
            bCanClaimNewItem: !!x.can_claim,
            bAlreadyClaimedCurrentItem: !!$,
            appid: $?.appid,
            community_item_type: $?.community_item_type,
            community_item_class: $?.community_item_class,
            rtNextClaimTime:
              (x.next_claim_time ?? 0) > 0 ? x.next_claim_time : void 0,
          };
        }
        async function Z(S, B) {
          const P = await N.Qm.ClaimItem(S, { language: B });
          if (P.GetEResult() == D.Ze) return X(S, B);
          if (P.GetEResult() != D.R)
            throw new Error(
              "SaleItemRewards.ClaimItem answered " + P.GetEResult(),
            );
          const x = P.Body().toObject().reward_item;
          return {
            bCanClaimNewItem: !1,
            bAlreadyClaimedCurrentItem: !0,
            appid: x?.appid,
            community_item_type: x?.community_item_type,
            community_item_class: x?.community_item_class,
            rtNextClaimTime:
              (P.Body().next_claim_time() ?? 0) > 0
                ? P.Body().next_claim_time()
                : void 0,
          };
        }
        async function R(S, B) {
          const P = await L.uy.ActivateProfileModifierItem(S, {
            communityitemid: B.communityitemid,
            appid: B.appid,
            activate: !0,
          });
          if (P.GetEResult() != D.R)
            throw new Error(
              "Quest.ActivateProfileModifierItem answered " + P.GetEResult(),
            );
          return P.GetEResult();
        }
        async function ae(S, B, P, x) {
          return (
            await N.Qm.GetCurrentDefinition(S, {
              sale_def_type: B,
              language: P,
              include_community_item_def: x,
            })
          )
            .Body()
            .toObject();
        }
        async function I(S, B, P, x) {
          return (
            await N.Qm.GetClaimedSaleRewards(S, {
              sale_def_type: B,
              language: P,
              include_community_item_def: x,
            })
          )
            .Body()
            .toObject();
        }
        let W;
        function i() {
          if (!W) {
            const S = (0, b.Fd)("loyalty_webapi_token", "application_config");
            W = S ? new K.D(p.TS.WEBAPI_BASE_URL, S) : (0, Y.P)();
          }
          return W.GetServiceTransport();
        }
        async function g(S) {
          return X(i(), S);
        }
        async function u(S) {
          return Z(i(), S);
        }
        async function y(S) {
          return R(i(), S);
        }
        const o = 300 * 1e3;
        let l = !1,
          s = null;
        const a = {
          appid: 2243810,
          community_item_type: 2,
          community_item_class: t.Ed,
        };
        function v(S) {
          return ["SaleItemCanClaim", S];
        }
        function T(S) {
          return {
            queryKey: v(S),
            queryFn: () => g(S),
            enabled: !l,
            staleTime: 1 / 0,
            retry: !1,
          };
        }
        function _() {
          const S = p.TS.LANGUAGE,
            B = (0, d.jE)(),
            { data: P, isLoading: x } = (0, r.I)(T(S)),
            $ = P?.rtNextClaimTime;
          return (
            (0, V.useEffect)(() => {
              let Ie = 0;
              if ($) {
                const ge = () => {
                  const ce = $ * 1e3 - Date.now();
                  if (ce <= 0) {
                    B.invalidateQueries({ queryKey: v(S) });
                    return;
                  }
                  Ie = window.setTimeout(ge, ce > o ? ce / 2 : ce);
                };
                ge();
              }
              return () => window.clearTimeout(Ie);
            }, [$, S, B]),
            { ...(P ?? z), bLoading: x }
          );
        }
        function w() {
          const S = (0, d.jE)(),
            { mutateAsync: B } = (0, G.n)({
              mutationFn: () => {
                if (s) {
                  const x = s;
                  return (s = null), Promise.resolve(x);
                }
                return l
                  ? Promise.resolve(S.getQueryData(v(p.TS.LANGUAGE)) ?? z)
                  : u(p.TS.LANGUAGE);
              },
              onSuccess: (x) => S.setQueryData(v(p.TS.LANGUAGE), x),
            });
          return { fnClaimItem: (0, V.useCallback)(() => B(), [B]) };
        }
        function ne() {
          return (0, G.n)({ mutationFn: (S) => y(S) });
        }
        function Ae() {
          const S = (0, d.jE)();
          return {
            fnSetClaimState: (0, V.useCallback)(
              (P) => {
                (l = !0),
                  (s = P.bCanClaimNewItem
                    ? {
                        bAlreadyClaimedCurrentItem: !0,
                        bCanClaimNewItem: !1,
                        rtNextClaimTime: Math.floor(Date.now() / 1e3) + 3600,
                        ...a,
                      }
                    : null),
                  S.setQueryData(v(p.TS.LANGUAGE), P);
              },
              [S],
            ),
          };
        }
        function oe(S, B, P) {
          return ["SaleRewardsGetDefinition", S, B, P];
        }
        function n(S, B, P, x) {
          return {
            queryKey: oe(B, P, x),
            queryFn: () => ae(S, B, P, x),
            staleTime: 1 / 0,
          };
        }
        function m(S, B, P) {
          const x = (0, A.KV)();
          return (0, r.I)(n(x, S, B, P));
        }
        function k(S, B, P, x) {
          return ["GetClaimedSaleRewards", S, B, !!P, x];
        }
        function $e(S, B, P, x, $) {
          return {
            queryKey: k(B, P, x, $),
            queryFn: () => I(S, B, P, x),
            staleTime: 1 / 0,
          };
        }
        function se(S, B, P, x) {
          const $ = (0, A.KV)();
          return (0, r.I)($e($, S, B, P, x));
        }
      },
      63639: (ee, J, e) => {
        "use strict";
        e.d(J, { S: () => b });
        var t = e(7850),
          p = e(12997),
          A = e(90626),
          d = e(52438);
        const r = {
            name: "trailerPrefs",
            options: { path: "/", secure: !0, maxAge: 720 * 60 * 60 * 1e3 },
            preferenceControls: { isTechnicallyNecessary: !0 },
          },
          G = { flVolume: 0.8, bMuted: !0 };
        function V(D) {
          return D.flVolume === G.flVolume && D.bMuted === G.bMuted;
        }
        function Y() {
          try {
            const D = (0, d.j_)(r);
            if (!D) return G;
            const L = JSON.parse(D);
            return {
              flVolume: typeof L.flVolume == "number" ? L.flVolume : G.flVolume,
              bMuted: typeof L.bMuted == "boolean" ? L.bMuted : G.bMuted,
            };
          } catch {
            return G;
          }
        }
        function K(D) {
          V(D) || Object.keys(D).length == 0
            ? (0, d.Y1)(r)
            : (0, d.eV)(r, JSON.stringify(D));
        }
        function b(D) {
          let { children: L } = D;
          const [N, z] = (0, A.useState)(() => Y());
          return (
            (0, A.useEffect)(() => {
              K(N);
            }, [N]),
            (0, t.jsx)(p.v, {
              playerVolume: N.flVolume,
              setPlayerVolume: (X) => z((Z) => ({ ...Z, flVolume: X })),
              audioMuted: N.bMuted,
              setAudioMuted: (X) => z((Z) => ({ ...Z, bMuted: X })),
              children: L,
            })
          );
        }
      },
      72408: (ee, J, e) => {
        "use strict";
        e.d(J, { y3: () => St, W3: () => Dt, TK: () => mt, u4: () => ft });
        var t = e(7850),
          p = e(19298),
          A = e(29522),
          d = e(40358),
          r = e(72865),
          G = e(10134),
          V = e(62292),
          Y = e(80902),
          K = e(68312),
          b = e(72609),
          D = e(20125),
          L = e(98609);
        async function N(j, M) {
          const Q = (0, D.Am)(L.TS.STORE_BASE_URL, M, L.iA.country_code);
          return (await (await fetch(Q)).json()).rgRecommendedTags || [];
        }
        function z() {
          const j = (0, K.KV)(),
            M = b.iA.accountid;
          return (0, Y.I)(X(j, M));
        }
        function X(j, M) {
          return {
            queryKey: Z(M),
            queryFn: async () => (M ? await N(j, M) : []),
            staleTime: 600 * 1e3,
          };
        }
        function Z(j) {
          return ["RecommendedTag", j ?? 0];
        }
        var R = e(54528),
          ae = e(96362),
          I = e(90626),
          W = e(21690),
          i = e(36707),
          g = e(18210),
          u = e(3166),
          y = e(74732),
          o = e(31377),
          l = e(36054),
          s = e.n(l),
          a = e(63639),
          v = e(21721),
          T = e(25046),
          _ = e(87249),
          w = e(50573),
          ne = e(41032),
          Ae = e(47045),
          oe = e(16412),
          n = e(36118),
          m = e(97996),
          k = e(57589),
          $e = e(83581),
          se = e.n($e);
        function S(j, M) {
          I.useEffect(() => {
            if (!M || !M.onended || !j) return;
            let Q = M.onended,
              ie = setTimeout(() => {
                Q();
              }, 6 * 1e3);
            return () => clearTimeout(ie);
          }, [j, M]);
        }
        function B(j, M) {
          I.useEffect(() => {
            if (!j) return;
            const Q = () => M(!0),
              H = () => M(!1);
            return (
              j.addEventListener("play", Q),
              j.addEventListener("pause", H),
              () => {
                j.removeEventListener("play", Q),
                  j.removeEventListener("pause", H);
              }
            );
          }, [M, j]);
        }
        function P(j, M, Q, H) {
          return I.useCallback(() => {
            j == w.Tw
              ? M(!0)
              : j == w.g && Q
                ? Q.paused
                  ? Q.play()
                  : Q.pause()
                : j == w.Jh && H && (H.IsPaused() ? H.Play() : H.Pause());
          }, [j, Q, H, M]);
        }
        function x(j, M, Q, H, ie, de) {
          const [me, be] = I.useState(!1);
          I.useEffect(() => {
            j && !me
              ? M == w.g && Q && H
                ? (Q.pause(), be(!0))
                : M == w.Jh && ie && de && (ie.Pause(), be(!0))
              : !j &&
                me &&
                (M == w.g && Q ? Q.play() : M == w.Jh && ie && ie.Play(),
                be(!1));
          }, [M, j, me, H, de, Q, ie]);
        }
        var $ = e(64271),
          Ie = e(39905);
        const ge = new k.wd("TrailerAppVideo"),
          ce = "bGameHighlightAutoplayDisabled";
        function we(j) {
          const {
              id: M,
              bCurrentlyActive: Q,
              autoPlayCookieName: H,
              trailerBaseID: ie,
              showScreenshotInsteadOfMainCap: de,
              autoplayCheckboxPosition: me,
              refTogglePlayPause: be,
              bShowAOAutoPlayWarning: Ee,
              ...Ke
            } = j,
            [We, ke] = I.useState(!1),
            [je, Qe] = I.useState(!1),
            ze = (0, ne.$9)(),
            He = (0, T.BF)(M, ie, !0, Ee),
            { data: Ze } = (0, d.J$)(M),
            { data: tt } = (0, d.lv)(M),
            De = (0, v.DT)(M),
            Je = (Ee ?? !0) && He && !He.all_ages && ze == "masked",
            Re = (0, ne.AS)(),
            [qe, st] = I.useState(!1),
            [et, pt] = I.useState(w.Tw),
            [Ye, gt] = (0, I.useState)(null),
            [Ne, yt] = (0, I.useState)(null),
            { bCookieLoaded: ut } = Ve(H, Q, ke),
            rt = ut;
          I.useEffect(() => {
            Q && rt && We && !Je && Qe(!0);
          }, [We, rt, Q, Je]),
            I.useEffect(() => {
              Je && je && We && Re();
            }, [je, Je, We, Re]);
          const ht = (f) => {
              (0, m.lc)(H ?? ce, String(!f), 365 * 10), ke(f), Qe(f);
            },
            at = P(et, Qe, Ne, Ye);
          I.useEffect(() => {
            be && (be.current = at);
          }, [at, be]);
          const C =
            de && De && De.length > 0
              ? (0, v.bu)(De[0], "600x338")
              : tt
                ? (0, v.b0)(tt, "main_capsule")
                : void 0;
          return (0, t.jsxs)(p.Z, {
            className: se().AppCarouselTrailerCtn,
            onMouseEnter: () => st(!0),
            onMouseLeave: () => st(!1),
            children: [
              (0, t.jsx)("button", {
                onClick: at,
                "aria-label": Ie.Z.Localize("#SaleTrailerCarousel_PlayPause"),
                children: (0, t.jsx)("img", {
                  className: (0, i.A)(
                    se().AppMainCap,
                    et != w.Tw && se().Hidden,
                  ),
                  src: C,
                  alt: "",
                }),
              }),
              Ze &&
                (0, t.jsx)(ot, {
                  appID: Ze.appid,
                  bAutoplayVideos: We,
                  autoplayCheckboxPosition: me,
                  fnSetAutoPlayVideos: ht,
                }),
              (0, t.jsx)(w.hj, {
                name: Ze?.name ?? "",
                trailerCategory: He?.trailer_category,
                trailerDisplay: et,
                mouseOver: qe,
              }),
              (0, t.jsx)(nt, {
                eTrailerDisplay: et,
                setTrailerDisplay: pt,
                featuredTrailer: He,
                fnSetMainTrailer: gt,
                fnSetMicroTrailer: yt,
                loadedAndActive: rt && Q,
                setVideoShouldStart: Qe,
                bMouseOverVideo: qe,
                id: M,
                fnTogglePlayPause: at,
                bAutoplayVideos: We,
                bVideoShouldStart: je,
                ...Ke,
              }),
              Je &&
                We &&
                (0, t.jsxs)("div", {
                  className: se().AOWarning,
                  children: [
                    (0, t.jsx)("div", {
                      className: se().Text,
                      children: (0, g.we)("#StoreTrailer_AOWarning_1"),
                    }),
                    (0, t.jsx)("div", {
                      className: se().Text,
                      children: (0, g.we)("#StoreTrailer_AOWarning_2"),
                    }),
                  ],
                }),
            ],
          });
        }
        function Fe(j, M) {
          const [Q, H] = I.useState(!1);
          return (
            I.useEffect(() => (j && (M(), H(!0)), () => H(!1)), [j, M]),
            { bCookieLoaded: Q }
          );
        }
        function Ve(j, M, Q) {
          const H = I.useCallback(() => {
            const ie = (0, m.VY)(j ?? ce),
              de = !!(ie && ie.toLowerCase() === "true");
            Q(!de);
          }, [j, Q]);
          return Fe(M, H);
        }
        function nt(j) {
          const {
              id: M,
              featuredTrailer: Q,
              bSkipMicroTrailer: H,
              nFadeRatio: ie,
              fnPlayPause: de,
              bRequestPause: me,
              fnComplete: be,
              eTrailerDisplay: Ee,
              setTrailerDisplay: Ke,
              fnSetMainTrailer: We,
              fnSetMicroTrailer: ke,
              loadedAndActive: je,
              setVideoShouldStart: Qe,
              fnTogglePlayPause: ze,
              bAutoplayVideos: He,
              bVideoShouldStart: Ze,
            } = j,
            [tt, De] = I.useState(!1),
            [Je, Re] = I.useState(!1),
            [qe, st] = I.useState(!1),
            [et, pt] = I.useState(!1),
            [Ye, gt] = (0, I.useState)(null),
            [Ne, yt] = (0, I.useState)(null),
            { data: ut } = (0, d.J$)(M),
            rt = !!Q;
          I.useEffect(() => {
            let C = !1;
            je &&
              Je &&
              rt &&
              (C = Ee === w.Tw || (Ee === w.g && !qe) || (Ee === w.Jh && !et)),
              De(C),
              de?.(He && C);
          }, [de, Ee, et, qe, je, He, Je, rt]),
            B(Ne, st),
            I.useEffect(() => {
              Ze ||
                (Ke(w.Tw),
                De(!1),
                Re(!1),
                Ne && (Ne.pause(), (Ne.currentTime = 0)),
                Ye && (Ye.Pause(), Ye.SeekToStart()));
            }, [Ze, Ye, Ne, Ke]);
          const ht = I.useRef(!1);
          I.useEffect(() => {
            if (je && Ee === w.Tw)
              if ((Re(!0), Ze)) {
                if (Ye) {
                  ge.Debug("Starting microtrailer"), Ke(w.g);
                  const C = () => it(ht, Ke, Ye);
                  H || !Ne
                    ? C()
                    : (st(!0),
                      (Ne.onended = C),
                      dt(Ne, "microtrailer", () => st(!1)));
                }
              } else ge.Debug("Showing image");
          }, [je, Ee, H, Ze, be, Ke, Ye, Ne]),
            S(qe, Ne),
            I.useEffect(() => {
              je || Qe(!1);
            }, [je, Qe]),
            x(!!me, Ee, Ne, qe, Ye, et);
          const at = (0, I.useCallback)((C) => {
            ke(C), yt(C);
          }, []);
          return !ut || !ut.visible || !Q
            ? null
            : (0, t.jsxs)(t.Fragment, {
                children: [
                  tt &&
                    (0, t.jsx)(p.Z, {
                      focusable: !0,
                      onClick: ze,
                      className: se().PlayButton,
                      children: (0, t.jsx)(n.IOc, {}),
                    }),
                  Q.microtrailer &&
                    (0, t.jsx)("video", {
                      className: Ue(!0, Ee),
                      ref: at,
                      preload: "auto",
                      playsInline: !0,
                      muted: !0,
                      onClick: ze,
                      children: (0, t.jsx)(_.Ck, { trailer: Q }),
                    }),
                  (0, t.jsx)(c, {
                    trailer: Q,
                    onRefChange: (C) => {
                      gt(C), We(C);
                    },
                    eTrailerDisplay: Ee,
                    fadeRatio: ie,
                    onPlayPauseChange: pt,
                    onPlaybackEnd: be,
                  }),
                ],
              });
        }
        function c(j) {
          let {
            trailer: M,
            eTrailerDisplay: Q,
            fadeRatio: H,
            onPlayPauseChange: ie,
            onPlaybackEnd: de,
            onRefChange: me,
          } = j;
          const [be, Ee] = (0, I.useState)(null);
          (0, I.useEffect)(() => {
            if (H !== void 0 && be) {
              let ze = be.GetVolume() * H;
              be.SetVolume(ze, !0);
            }
          }, [H, be]);
          let Ke = Q != w.Jh,
            We = Ue(!1, Q);
          const ke = (0, I.useMemo)(() => (0, T.hg)(M), [M]),
            je = (0, I.useCallback)((ze) => {
              Ee(ze), me(ze);
            }, []),
            Qe = (0, I.useCallback)(() => {
              ie(!0);
            }, [ie]);
          return (0, t.jsx)(a.S, {
            children: (0, t.jsx)("div", {
              className: We,
              children: (0, t.jsx)($.P, {
                ref: je,
                dashManifests: ke.rgDashTrailers,
                hlsManifest: ke.rgHlsTrailers[0],
                captionManifest: (0, T.Wv)(M),
                screenshot: "",
                altText: M.trailer_name,
                forcePause: Ke,
                muteWhenAutoplayBlocked: !0,
                onPlaybackEnd: de,
                onPlaybackStart: Qe,
                onPlayPauseChange: ie,
              }),
            }),
          });
        }
        function it(j, M, Q) {
          j.current ||
            ((j.current = !0),
            ge.Debug("Starting main trailer"),
            M(w.Jh),
            Q.Play());
        }
        function dt(j, M, Q) {
          j.play().catch((H) => {
            Q(), ge.Warning(`Failed to play ${M}: `, H);
          });
        }
        function Ue(j, M) {
          return (0, i.A)({
            [se().AppVideo]: !0,
            [se().PlayFullTrailer]: M == w.Jh,
            [se().PlayMicrotrailer]: M == w.g,
            [se().NoTrailer]: M == w.Tw,
            [se().Microtrailer]: j,
            [se().Trailer]: !j,
          });
        }
        function ot(j) {
          const {
              appID: M,
              bAutoplayVideos: Q,
              fnSetAutoPlayVideos: H,
              autoplayCheckboxPosition: ie,
            } = j,
            de = { [ie || "top"]: 0 };
          return (0, t.jsx)(t.Fragment, {
            children: (0, t.jsx)("div", {
              onClick: (me) => {
                me.preventDefault(), me.stopPropagation();
              },
              className: se().AutoplayCheckboxCtn,
              children: (0, t.jsx)(
                oe.Yh,
                {
                  controlled: !0,
                  checked: Q,
                  className: se().AutoplayCheckbox,
                  style: de,
                  label: Ae.n.Localize("#StoreTrailer_AutoPlayVideos"),
                  onChange: H,
                },
                M,
              ),
            }),
          });
        }
        function St(j) {
          const {
              appID: M,
              trailerBaseID: Q,
              focused: H,
              skipMicroTrailer: ie,
              autoPlayCookieName: de,
              showAOAutoPlayWarning: me,
              showScreenshotInsteadOfMainCap: be,
              fadeRatio: Ee,
              fnPlayPause: Ke,
              refTogglePlayPause: We,
              bRequestPause: ke,
              fnComplete: je,
            } = j,
            Qe = (0, A.$5)(M),
            { data: ze } = (0, d.J$)(Qe),
            { data: He } = (0, d.qI)(Qe),
            { bIsIgnored: Ze } = mt(M),
            { bIsWishlisted: tt } = ft(M),
            { bIsWishlisted: De } = ft(ze?.related_items?.parent_appid),
            [Je, Re] = (0, W.FD)();
          return (0, t.jsxs)(p.Z, {
            className: (0, i.A)(s().AppVideoCtn, "AppVideoCtn"),
            children: [
              (0, t.jsx)("div", {
                className: (0, i.A)(
                  s().WishlistBadge,
                  (tt || De) && s().Active,
                ),
                children: (0, g.we)("#Sale_OnWishlist"),
              }),
              Je &&
                (0, t.jsx)(W.Ff, {
                  eDisplay: Re,
                  className: s().DeckVerifiedLogo,
                  storeItemPlatform: He,
                }),
              (0, t.jsxs)("div", {
                className: s().VideoArea,
                children: [
                  (0, t.jsx)(It, { appID: M }),
                  (0, t.jsx)(
                    we,
                    {
                      id: Qe,
                      trailerBaseID: Q,
                      bCurrentlyActive: H && !Ze,
                      autoplayCheckboxPosition: "top",
                      autoPlayCookieName: de,
                      bShowAOAutoPlayWarning: me,
                      bSkipMicroTrailer: ie,
                      nFadeRatio: Ee,
                      showScreenshotInsteadOfMainCap: be,
                      fnPlayPause: Ke,
                      refTogglePlayPause: We,
                      bRequestPause: ke,
                      fnComplete: je,
                    },
                    M,
                  ),
                ],
              }),
            ],
          });
        }
        function mt(j) {
          const M = (0, G.BD)(j),
            Q = (0, r.ru)(),
            { mutateAsync: H } = (0, V.Q)(j, !M, Q);
          return { bIsIgnored: M, fnUpdateIgnored: H };
        }
        function It(j) {
          const { appID: M } = j,
            Q = (0, u.Qn)(),
            { bIsIgnored: H, fnUpdateIgnored: ie } = mt(M);
          return (0, t.jsx)("div", {
            className: (0, i.A)(s().IgnoredCtn, H && s().Active),
            children: (0, t.jsxs)("div", {
              className: (0, i.A)(s().IgnoredInfo, H && s().Active),
              children: [
                (0, t.jsx)("div", {
                  className: s().IgnoredTitle,
                  children: (0, g.we)("#SaleTrailerCarousel_Ignored"),
                }),
                (0, t.jsx)("div", {
                  className: s().IgnoredDescription,
                  children: (0, g.we)(
                    "#SaleTrailerCarousel_IgnoredConfirmation",
                  ),
                }),
                (0, t.jsxs)(p.Z, {
                  className: (0, i.A)(s().UndoButton, s().UndoIgnoreButton),
                  onClick: ie,
                  children: [
                    Q &&
                      (0, t.jsx)(o.$m, {
                        button: y.g4.X,
                        type: o.wt.Light,
                        size: o.xY.Medium,
                      }),
                    (0, g.we)("#SaleTrailerCarousel_Undo"),
                  ],
                }),
              ],
            }),
          });
        }
        function ft(j) {
          const M = !!(0, R.bB)(j),
            Q = (0, r.ru)(),
            { mutate: H } = (0, ae.s)(j, !M, Q);
          return { bIsWishlisted: M, fnUpdateWishlist: H };
        }
        function Dt(j) {
          const { data: M } = z(),
            Q = I.useMemo(
              () =>
                new Map(
                  (M || []).map((de) => de.tagid).map((de, me) => [de, me]),
                ),
              [M],
            ),
            H = I.useMemo(() => new Map(j.map((de, me) => [de, me])), [j]);
          return I.useMemo(
            () =>
              j
                .slice()
                .sort((de, me) =>
                  Q.has(de) && !Q.has(me)
                    ? -1
                    : !Q.has(de) && Q.has(me)
                      ? 1
                      : Q.has(de)
                        ? Q.get(de) - (Q.get(me) ?? 0)
                        : H.get(de) - H.get(me),
                ),
            [H, Q, j],
          );
        }
      },
      76617: (ee, J, e) => {
        "use strict";
        e.d(J, { V: () => Y });
        function t(K) {
          return Object.prototype.toString.call(K) === "[object Object]";
        }
        function p(K) {
          if (!t(K)) return !1;
          const b = K.constructor;
          if (typeof b > "u") return !0;
          const D = b.prototype;
          return !(
            !t(D) || !Object.prototype.hasOwnProperty.call(D, "isPrototypeOf")
          );
        }
        function A(...K) {
          return JSON.stringify(K, (b, D) => {
            if (p(D)) {
              const L = {};
              return (
                Object.keys(D)
                  .sort()
                  .forEach((N) => {
                    L[N] = D[N];
                  }),
                L
              );
            }
            return D;
          });
        }
        var d = e(90626),
          r = e(7850);
        const G = (0, d.createContext)({ instances: {}, factories: {} });
        function V(K) {
          const { name: b, fnFactory: D, children: L } = K,
            N = React.useContext(G),
            [z] = useState({}),
            X = useMemo(
              () => ({
                instances: z,
                factories: { ...N.factories, [b]: D },
                parent: N,
              }),
              [z, b, N],
            );
          return jsx(G.Provider, { value: X, children: L });
        }
        function Y(K, b) {
          const D = (0, d.useContext)(G),
            L = typeof K == "string" ? K : A(...K);
          let N = D;
          for (; N; ) {
            if (L in N.instances) return N.instances[L];
            if (L in N.factories) break;
            N = N.parent;
          }
          const X = (N?.factories[L] ?? b)();
          return ((N ?? D).instances[L] = X), X;
        }
      },
      90405: (ee, J, e) => {
        "use strict";
        e.d(J, { K: () => V, _: () => G });
        var t = e(7850),
          p = e(90626),
          A = e(81944),
          d = e(19298);
        const r = p.createContext({ enabled: !0 });
        function G(Y) {
          const { enabled: K, children: b } = Y,
            D = p.useMemo(() => ({ enabled: K }), [K]);
          return (0, t.jsx)(r.Provider, { value: D, children: b });
        }
        function V(Y) {
          const {
              placeholderWidth: K,
              placeholderHeight: b,
              holdGamepadFocus: D = !1,
              onRender: L,
              style: N,
              mode: z = "JustLoad",
              children: X,
              ...Z
            } = Y,
            R = p.useContext(r),
            [ae, I] = p.useState(() => ({
              bRenderChildren: !R.enabled,
              nPrevRenderHeight: 0,
              nPrevRenderWidth: 0,
            })),
            W = p.useRef(null),
            i = z === "LoadAndUnload" && R.enabled,
            g = p.useCallback(
              (l) => {
                I((s) => {
                  if (s.bRenderChildren === l || (s.bRenderChildren && !i))
                    return s;
                  let a = 0,
                    v = 0;
                  if (W.current) {
                    const T = W.current.getBoundingClientRect();
                    T && ((a = T.width), (v = T.height));
                  }
                  return (
                    l && L && L(),
                    {
                      bRenderChildren: l,
                      nPrevRenderWidth: a,
                      nPrevRenderHeight: v,
                    }
                  );
                });
              },
              [i, L],
            );
          p.useEffect(() => {
            R.enabled || g(!0);
          }, [R.enabled, g]);
          let u = N;
          if (!ae.bRenderChildren) {
            const l = ae.nPrevRenderWidth || K,
              s = ae.nPrevRenderHeight || b;
            (s !== void 0 || l !== void 0) &&
              (u = { ...N, minHeight: s, minWidth: l });
          }
          const y = i ? "repeated" : "once";
          let o = (0, t.jsx)(A.J, {
            containerRef: W,
            style: u,
            ...Z,
            onVisibilityChange: g,
            trigger: y,
            children: ae.bRenderChildren && X,
          });
          return (
            D &&
              (o = (0, t.jsx)(d.Z, {
                focusableIfEmpty: !0,
                style: { height: "100%" },
                children: o,
              })),
            o
          );
        }
      },
      66825: (ee, J, e) => {
        "use strict";
        e.r(J), e.d(J, { default: () => X });
        var t = e(7850),
          p = e(90626),
          A = e(19298),
          d = e(55051),
          r = e(57810),
          G = e(84676),
          V = e(179),
          Y = e(36118),
          K = e(6778),
          b = e(18210),
          D = e(56649),
          L = e.n(D),
          N = e(3166),
          z = e(85742);
        function X(Z) {
          const { appID: R } = Z,
            ae = (0, K.G)(),
            [I] = (0, V.QD)("inqueue", "" + d.QV.qy),
            [W, i] = (0, p.useState)(!1),
            [g] = (0, G.t7)(R, { include_assets: !0 }),
            u = (0, N.Qn)(),
            { eStoreDiscoveryQueueType: y, storePageFilter: o } =
              p.useMemo(() => {
                if (I?.length > 0) {
                  const v = I.split("_"),
                    T = Number(v[0]);
                  let _;
                  return (
                    v.length > 1 && (_ = (0, r.bz)(v[1])),
                    { eStoreDiscoveryQueueType: T, storePageFilter: _ }
                  );
                } else
                  return {
                    eStoreDiscoveryQueueType: d.QV.qy,
                    storePageFilter: void 0,
                  };
              }, [I]),
            { showDiscoveryQueue: l } = (0, z.GV)(y, {
              includeAppID: R,
              storePageFilter: o,
            }),
            s = p.useCallback(() => {
              i(!0);
            }, []),
            a = (0, r.WX)(y, o);
          return !ae || !g || W
            ? null
            : (0, t.jsxs)(A.Z, {
                focusable: !0,
                className: L().DiscoveryQueueWidgetCtn,
                onSecondaryButton: s,
                onOKButton: l,
                onOKActionDescription: (0, b.we)(
                  "#DiscoveryQueue_ResumeWizard",
                ),
                onSecondaryActionDescription: (0, b.we)("#Button_Close"),
                children: [
                  (0, t.jsxs)("div", {
                    onClick: l,
                    className: L().WidgetText,
                    children: [
                      (0, t.jsx)(Y.mcU, {}),
                      (0, b.we)("#DiscoveryQueue_ResumeWizard"),
                      a?.length > 0 && ": " + a,
                    ],
                  }),
                  !u &&
                    (0, t.jsx)("div", {
                      className: L().CloseButton,
                      onClick: s,
                      children: (0, t.jsx)(Y.X, {}),
                    }),
                ],
              });
        }
      },
      77426: (ee, J, e) => {
        "use strict";
        e.d(J, { G: () => t });
        const t = {
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
      46943: (ee, J, e) => {
        "use strict";
        e.d(J, { Ul: () => ae, xz: () => i, $Y: () => W, i8: () => I });
        var t = e(7850),
          p = e(90626),
          A = e(75844),
          d = e(5858),
          r = e(36707),
          G = e(3166),
          V = e(13465);
        const Y =
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAIAAgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/P4mW5nmllmeSR3LMzMSSc1a07R73V72KzsILi9u5TiOC2RpJHPoFGSarQ/ef6n+de4fAn9oaL4D+DfGX9i6Uf8AhO9XSKDT9eZY3WxiDZcBGByTkn0JCZBxQB41qeiX+iXslnqNtdWF3H9+3uo2jkX6q2CKpgy208MsUzxyI4ZWViCDmvsr9rrUdT1j9nb4T6h8RBbH4qXUs0zMsSxXJ04hivnKoAU5MPGBg7uM7q+NpvvJ9R/OgAh+8/1P867T4POI/iz4Mc6U+u7NZtG/suPbuu8TKfKG4hct93njnmuKIltp5opYXjkRyrKykEHNWbDVbvSr63vbKaezvLeRZYbi3ZkkidTlWVhyCCMgjpQB6l+1F411nx58dPFWpa5a3mnXaXP2ZNOvXVpLKNBhYflJUY5PB5JJ6k15LN95PqP51a1PWr7WtQnvtRuLm/vrhzJNc3TtJLIx6lmbJJ9zVQCW5nhiiheSR3CqqqSSc0Af/9k=",
          K =
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gODAK/9sAQwAGBAUGBQQGBgUGBwcGCAoQCgoJCQoUDg8MEBcUGBgXFBYWGh0lHxobIxwWFiAsICMmJykqKRkfLTAtKDAlKCko/9sAQwEHBwcKCAoTCgoTKBoWGigoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo/8AAEQgAQABAAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8Inmk8+T94/3j/EfWmedJ/z0f/vo0T/6+T/eP86ZQA/zpP8Ano//AH0aPOk/56P/AN9GmVo6Loeq65M0Wj6ddXrr94QRF9v1I6fjQBR86T/no/8A30aPOk/56P8A99GtHW/Dus6GV/tjS7yyD8K00RVW+h6GsugB/nSf89H/AO+jT4JpPPj/AHj/AHh/EfWoafB/r4/94fzoAJ/9fJ/vH+dMp8/+vk/3j/OmUAXdE099W1mw06Jgsl3PHApPYswUH9a+qPF3iHSPhF4S0+003TxK0hMcEAbZvIA3SO2OvIz6k18nW88ttcRz28jxTRMHSRGKsrA5BBHQg1b1TWdT1fy/7V1G8vfLzs+0TNJtz1xknHQUAfUXw+8c6Z8UdN1HS9V0xIpUTM1s7eYkiE43KcAgg/lxg180+NtEHhzxZqmkqxdLWcojHqUPK598EV9CfBbwpF4G8J3fiLxA4trm5hEsnmceRCOQD/tHqR9B1r568a63/wAJH4r1TVghRLqYuinqE6KD74AoAxafB/r4/wDeH86ZT4P9fH/vD+dABP8A6+T/AHj/ADplPn/18n+8f50ygArt/gtpltq/xK0e2vYxJArPMUYZDFEZhn2yBXEV0/w203VNX8YWdloOoHTtQkWQx3IZl2gISeV55AI/GgD1H9pvxPdi/s/DcDGOz8pbqfHWRizBQfYbc/U+1eD12PxW0fWtE8Tpa+I9UOqXpt0cTl2bCEthctz1B/OuOoAKfB/r4/8AeH86ZT4P9fH/ALw/nQAT/wCvk/3j/OmVNPDJ58n7t/vH+E+tM8mT/nm//fJoAZV7Q9Xv9C1KLUNJuGtryMEJIoBIyCD1BHQmqnkyf883/wC+TR5Mn/PN/wDvk0AaHiHXtT8RX4vdau2u7oIIxIygHaCSBwB6msyn+TJ/zzf/AL5NHkyf883/AO+TQAynwf6+P/eH86PJk/55v/3yafBDJ58f7t/vD+E+tAH/2Q==",
          b =
            e.p +
            "images/applications/store/avatar_default_full.jpg?v=valveisgoodatcaching";
        var D = e(43047),
          L = e.n(D),
          N = e(71742),
          z = Object.defineProperty,
          X = Object.getOwnPropertyDescriptor,
          Z = (g, u, y, o) => {
            for (
              var l = o > 1 ? void 0 : o ? X(u, y) : u, s = g.length - 1, a;
              s >= 0;
              s--
            )
              (a = g[s]) && (l = (o ? a(u, y, l) : a(l)) || l);
            return o && l && z(u, y, l), l;
          };
        function R(g) {
          switch (g) {
            case "X-Small":
            case "Small":
              return Y;
            case "Medium":
            case "MediumLarge":
              return K;
            case "Large":
            case "X-Large":
            case "FillArea":
              return b;
            default:
              return (0, N.z_)(g, `Unhandled size ${g}`), K;
          }
        }
        const ae = p.memo(function (u) {
          const {
              strAvatarURL: y,
              size: o = "Medium",
              className: l,
              statusStyle: s,
              statusPosition: a,
              children: v,
              ...T
            } = u,
            _ = p.useMemo(() => {
              const w = [];
              return y && w.push(y), w.push(R(o)), w;
            }, [y, o]);
          return (0, t.jsxs)("div", {
            className: (0, r.A)(
              L().avatarHolder,
              "avatarHolder",
              "no-drag",
              o,
              l,
            ),
            ...T,
            children: [
              (0, t.jsx)("div", {
                className: (0, r.A)(L().avatarStatus, "avatarStatus", a),
                style: s,
              }),
              (0, t.jsx)(V.c, {
                className: (0, r.A)(L().avatar, "avatar"),
                rgSources: _,
                draggable: !1,
              }),
              v,
            ],
          });
        });
        let I = class extends p.Component {
          render() {
            const {
              persona: g,
              size: u = "Medium",
              animatedAvatar: y,
              className: o,
              strBackupAvatarURL: l,
              ...s
            } = this.props;
            let a = "";
            return (
              y && y.image_small && y.image_small.length != 0
                ? (a = G.TS.MEDIA_CDN_COMMUNITY_URL + "images/" + y.image_small)
                : g
                  ? ((a = g.avatar_url_medium),
                    u == "Small" || u == "X-Small"
                      ? (a = g.avatar_url)
                      : (u == "Large" || u == "X-Large" || u == "FillArea") &&
                        (a = g.avatar_url_full))
                  : l && (a = l),
              (0, t.jsx)(ae, {
                strAvatarURL: a,
                size: u,
                className: (0, r.A)((0, d.rO)(g), o),
                ...s,
              })
            );
          }
        };
        I = Z([A.PA], I);
        const W = (0, A.PA)((g) => {
          const {
            profileItem: u,
            className: y,
            bDisableAnimation: o,
            ...l
          } = g;
          if (!u || !u.image_small || u.image_small.length == 0) return null;
          let s = o ? u.image_large : u.image_small;
          return (
            s || (s = u.image_small),
            s.startsWith("https://") ||
              (s = G.TS.MEDIA_CDN_COMMUNITY_URL + "images/" + s),
            (0, t.jsx)("div", {
              className: (0, r.A)(L().avatarFrame, y, "avatarFrame"),
              ...l,
              children: (0, t.jsx)("img", {
                className: L().avatarFrameImg,
                src: s,
              }),
            })
          );
        });
        let i = class extends p.Component {
          m_timer;
          constructor(g) {
            super(g),
              (this.state = { bAnimate: this.props.loopDuration != "None" }),
              (this.m_timer = 0);
          }
          componentDidMount() {
            this.props.bParentHovered || this.SetupAnimationTimer();
          }
          SetupAnimationTimer() {
            let g = 0;
            switch (this.props.loopDuration) {
              case "Short":
                g = 2500;
                break;
              case "Medium":
                g = 5e3;
                break;
              case "Long":
                g = 1e4;
                break;
            }
            g != 0 &&
              (this.setState({ bAnimate: this.props.loopDuration != "None" }),
              (this.m_timer = window.setTimeout(
                () => this.setState({ bAnimate: !1 }),
                g,
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
          componentDidUpdate(g) {
            this.props.loopDuration != g.loopDuration &&
              (this.props.loopDuration == "None"
                ? (this.setState({ bAnimate: !1 }), this.StopAnimationTimer())
                : this.props.loopDuration == "Infinite"
                  ? (this.setState({ bAnimate: !0 }), this.StopAnimationTimer())
                  : (this.setState({ bAnimate: !0 }),
                    this.SetupAnimationTimer())),
              this.props.bParentHovered != g.bParentHovered &&
                (this.props.bParentHovered &&
                this.props.loopDuration != "None" &&
                this.props.loopDuration != "Infinite"
                  ? (this.setState({ bAnimate: !0 }), this.StopAnimationTimer())
                  : this.state.bAnimate && this.SetupAnimationTimer());
          }
          render() {
            let {
              loopDuration: g,
              animatedAvatar: u,
              avatarFrame: y,
              children: o,
              style: l,
              bLimitProfileFrameAnimationTime: s,
              bParentHovered: a,
              ...v
            } = this.props;
            v.onClick && (l = { ...l, cursor: "pointer" });
            const T = this.state.bAnimate ? (u ?? void 0) : void 0;
            return (0, t.jsx)("div", {
              onMouseEnter: () =>
                this.setState({ bAnimate: this.props.loopDuration != "None" }),
              onMouseLeave: () => this.SetupAnimationTimer(),
              children: (0, t.jsxs)(I, {
                animatedAvatar: T,
                ...v,
                children: [
                  o,
                  (0, t.jsx)(W, {
                    profileItem: y ?? null,
                    bDisableAnimation: s && !this.state.bAnimate,
                  }),
                ],
              }),
            });
          }
        };
        i = Z([A.PA], i);
      },
      21079: (ee, J, e) => {
        "use strict";
        e.d(J, {
          Dk: () => z,
          Mu: () => R,
          Y8: () => ae,
          ws: () => X,
          zo: () => Z,
        });
        var t = e(72604),
          p = e(35038),
          A = e(83153),
          d = e(9682),
          r = e(41735),
          G = e.n(r),
          V = e(80902),
          Y = e(75233),
          K = e(68312),
          b = e(77187),
          D = e(3166),
          L = e(90626);
        function N(i) {
          return ["AppRelevanceStore", "FriendsRecommended", i];
        }
        function z(i) {
          const g = (0, K.KV)();
          return (0, V.I)({
            queryKey: N(i),
            queryFn: () => I(g, i),
            enabled: D.iA.logged_in,
          });
        }
        function X() {
          const i = (0, Y.jE)();
          return L.useCallback(
            (g, u) => {
              i.setQueryData(N(g), u);
            },
            [i],
          );
        }
        function Z(i) {
          return (0, V.I)({
            queryKey: ["AppRelevanceStore", "StoreRelevance", i],
            queryFn: () => W(i),
            enabled: D.iA.logged_in,
          });
        }
        function R() {
          return (0, b.PG)("App Relevance Store Top Sellers", {
            sort: A.Dq.Rm,
            start: 0,
            count: 100,
          });
        }
        function ae() {
          const { data: i } = R();
          return i;
        }
        async function I(i, g) {
          const u = p.w.Init(d.KV);
          u.Body().set_appid(g);
          const y = await d.YK.GetFriendsRecommendedApp(i, u),
            o = y.GetEResult();
          if (o == t.R) return y.Body().toObject();
          throw `Error ${o} failed to call GetFriendsRecommendedApp ${g}`;
        }
        async function W(i) {
          let g = { appid: i },
            u = { arrSimilarPlayedApps: [], bRecommendedByIR: !1 };
          const o = (
            await G().get(
              `${D.TS.STORE_BASE_URL}explore/ajaxgetstorerelevancedata`,
              { params: g, withCredentials: !0, timeout: 1e4 },
            )
          ).data;
          return (
            o &&
              o.success == t.R &&
              (o.results.similar_played_apps &&
                (u.arrSimilarPlayedApps = o.results.similar_played_apps.map(
                  (l) => ({
                    appid: l.appid,
                    playtimeForever: l.playtime_forever,
                  }),
                )),
              o.results.recommended_by_ir && (u.bRecommendedByIR = !0)),
            u
          );
        }
      },
      813: (ee, J, e) => {
        "use strict";
        e.d(J, { $5: () => i, TB: () => W, ac: () => ae });
        var t = e(40497),
          p = e(75233),
          A = e(14947),
          d = e(90626),
          r = e(76559),
          G = e(71742),
          V = e(3166),
          Y = e(60480),
          K = e(33512),
          b = e(55483),
          D = e(77291);
        const L = new WeakSet();
        function N(s = t.L) {
          if (typeof window > "u" || typeof document > "u" || L.has(s)) return;
          const a = (0, V.Fd)("groupvanityinfo", "application_config");
          (a === void 0 && document.readyState != "complete") ||
            (L.add(s), z(a) && (0, b.aA)(s, a));
        }
        function z(s) {
          const a = s;
          return a &&
            Array.isArray(a) &&
            a.length > 0 &&
            typeof a[0] == "object"
            ? typeof a[0].clanAccountID == "number" &&
                (typeof a[0].appid == "number" ||
                  typeof a[0].vanity_url == "string")
            : !1;
        }
        function X(s) {
          return typeof s == "string" ? parseInt(s) : s;
        }
        function Z(s) {
          return typeof s == "string" ? Number.parseInt(s) : s;
        }
        class R {
          m_queryClient = t.L;
          m_boxCacheVersion = A.sH.box(0);
          m_bWatchingCache = !1;
          m_bBumpScheduled = !1;
          Init() {
            this.LazyInit();
          }
          LazyInit() {
            N(this.m_queryClient),
              this.m_bWatchingCache ||
                ((this.m_bWatchingCache = !0),
                this.m_queryClient.getQueryCache().subscribe((a) => {
                  (a?.type != "added" &&
                    a?.type != "updated" &&
                    a?.type != "removed") ||
                    ((0, b.yT)(a.query?.queryKey) &&
                      this.ScheduleCacheVersionBump());
                }));
          }
          ScheduleCacheVersionBump() {
            this.m_bBumpScheduled ||
              ((this.m_bBumpScheduled = !0),
              queueMicrotask(() => {
                (this.m_bBumpScheduled = !1),
                  (0, A.h5)(() =>
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
          AddGroupVanities(a) {
            this.LazyInit(), z(a) && (0, b.aA)(this.m_queryClient, a);
          }
          BHasClanInfoLoaded(a) {
            return (
              (0, G.wT)(
                a.BIsValid(),
                "Clan SteamID is not valid when ClanInfo",
              ),
              (0, G.wT)(
                a.BIsClanAccount(),
                "Clan SteamID is not a clan account id when requesting clan info ",
              ),
              this.BHasClanInfoLoadedByAccountID(a.GetAccountID())
            );
          }
          BHasClanInfoLoadedByAccountID(a) {
            return !!(0, b.Gt)(Z(a), this.ReadCache());
          }
          RegisterClanData(a) {
            this.LazyInit(), (0, b.aA)(this.m_queryClient, a);
          }
          async LoadOGGClanInfoForAppID(a) {
            return (
              this.LazyInit(),
              (a = X(a)),
              (0, G.wT)(
                a != 0,
                "LoadOGGClanInfoForAppID called with appid of zero",
              ),
              a == 0 ? null : (0, b.AB)(a, this.m_queryClient).catch(() => null)
            );
          }
          async LoadOGGClanInfoForIdentifier(a) {
            return this.LazyInit(), (0, b.Rc)(a, this.m_queryClient, "store");
          }
          async LoadOGGClanInfoForGroupVanity(a) {
            return this.LazyInit(), (0, b.Rc)(a, this.m_queryClient, "group");
          }
          async LoadClanInfoForClanSteamID(a) {
            return this.LoadClanInfoForClanAccountID(a.GetAccountID());
          }
          async LoadClanInfoForClanAccountID(a) {
            return this.LazyInit(), (0, b.MR)(Z(a), this.m_queryClient);
          }
          GetOGGClanInfo(a) {
            const v = this.ReadCache();
            return typeof a == "string" ? (0, b.fy)(a, v) : (0, b.ko)(a, v);
          }
          GetClanSteamIDForAppID(a) {
            const v = (0, b.ko)(X(a), this.ReadCache());
            return v ? r.b.InitFromClanID(v.clanAccountID) : void 0;
          }
          GetClanVanityForAppID(a) {
            return (0, b.ko)(X(a), this.ReadCache())?.vanity_url;
          }
          GetClanVanityForClanSteamID(a) {
            return (0, b.Gt)(a.GetAccountID(), this.ReadCache())?.vanity_url;
          }
          HasLoadedClanAccountID(a) {
            return this.BHasClanInfoLoadedByAccountID(a);
          }
          GetClanMemberCount(a) {
            return (0, b.ko)(X(a), this.ReadCache())?.member_count ?? 0;
          }
          GetClanInfoByClanAccountID(a) {
            return (
              (0, G.wT)(
                !!a,
                "Unepxected clanid when requesting information. GetClanInfoByClanAccountID ",
              ),
              (0, b.Gt)(Z(a), this.ReadCache())
            );
          }
          GetCreatorStoreURL(a) {
            let v = Y.pF.GetCreatorHome(a);
            if (v) return v.GetCreatorHomeURL("developer");
            let T = this.GetClanInfoByClanAccountID(a.GetAccountID());
            return (
              V.TS.COMMUNITY_BASE_URL +
              (T.vanity_url
                ? "groups/" + T.vanity_url
                : "gid/" + a.ConvertTo64BitString())
            );
          }
        }
        const ae = new R();
        (0, D.V)("g_ClanStore", ae);
        function I() {
          const s = (0, p.jE)();
          return N(s), s;
        }
        function W(s) {
          I();
          const { data: a, isPending: v } = (0, b.TB)(s ? Z(s) : void 0);
          return [!!s && v, a ?? void 0];
        }
        function i(s) {
          const a = I();
          (0, d.useEffect)(() => {
            s &&
              (0, b.MR)(Z(s), a).catch((v) =>
                console.error(`Failed to hint load clan info ${s}`, v),
              );
          }, [s, a]);
        }
        function g(s) {
          return I(), useClanInfoByVanityQuery(s).data ?? null;
        }
        function u(s) {
          I();
          const a = s ? X(s) : void 0,
            { data: v, isPending: T } = useClanInfoByAppIDQuery(a);
          return { bLoadingClanInfo: !!a && T, clanInfo: v ?? null };
        }
        function y(s, a) {
          if (s.BIsOGGEvent()) return { bVisible: !1 };
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
          const T = g_CreatorHomeStore.GetCreatorHome(s.clanSteamID);
          return T &&
            T.BHasClanAccountFlagSet(
              EClanAccountFlags.k_EClanAccountFlag_AllowSalePageEditing,
            )
            ? { bVisible: !0 }
            : a
              ? { bVisible: !0, bValveOnly: !0 }
              : { bVisible: !1 };
        }
        function o(s, a) {
          return s.BIsOGGEvent()
            ? s.BHasSaleEnabled()
              ? { bVisible: !0 }
              : Config.EUNIVERSE == k_EUniversePublic
                ? { bVisible: !1 }
                : a
                  ? s.GetEventType() == k_EClanEventType_MajorUpdateEvent
                    ? { bVisible: !0, bValveOnly: !0 }
                    : { bVisible: !1 }
                  : { bVisible: !1 }
            : { bVisible: !1 };
        }
        function l(s) {
          return s.BIsOGGEvent()
            ? { bVisible: !1 }
            : s.GetEventType() != k_EClanEventType_CreatorHome
              ? { bVisible: !1 }
              : s.BHasSaleEnabled()
                ? { bVisible: !0 }
                : s.clanSteamID.GetAccountID() == getMeetSteamClanID()
                  ? { bVisible: !1 }
                  : { bVisible: !1 };
        }
      },
      57810: (ee, J, e) => {
        "use strict";
        e.d(J, {
          Bk: () => R,
          IH: () => g,
          Uf: () => i,
          WX: () => u,
          aI: () => W,
          bz: () => ae,
        });
        var t = e(90626),
          p = e(14947),
          A = e(72604),
          d = e(35038),
          r = e(55051),
          G = e(8323),
          V = e(30096),
          Y = e(48473),
          K = e(3166),
          b = e(64868),
          D = e(49100),
          L = e(40497),
          N = Object.defineProperty,
          z = Object.getOwnPropertyDescriptor,
          X = (y, o, l, s) => {
            for (
              var a = s > 1 ? void 0 : s ? z(o, l) : o, v = y.length - 1, T;
              v >= 0;
              v--
            )
              (T = y[v]) && (a = (s ? T(o, l, a) : T(a)) || a);
            return s && a && N(o, l, a), a;
          };
        function Z(y, o) {
          let l = y.toString();
          if (
            o?.strContentHubType != "newreleases" &&
            o?.strContentHubType != "upcoming"
          ) {
            const s = o?.nSaleTagID,
              a = o?.strContentHubType,
              v = o?.strContentHubCategory,
              T = o?.nContentHubTagID,
              _ = o?.bDiscountsOnly,
              w = o?.bPrioritizeDiscounts,
              ne = o?.strOptInName,
              Ae = o?.nOptInTagID,
              oe = o?.nPruneTagID;
            s
              ? (l += "_" + s)
              : a &&
                ((l += "_" + a),
                a === "category" && v
                  ? (l += "_" + v)
                  : a === "tags" && T && (l += "_" + T),
                _ ? (l += "_d") : w && (l += "_p"),
                ne && Ae && oe && (l += "_" + ne));
          }
          return l;
        }
        function R(y) {
          return (0, Y.bt)(JSON.stringify(y));
        }
        function ae(y) {
          return JSON.parse((0, Y.he)(y));
        }
        const I = class vt {
          m_transport;
          m_mapDiscoveryQueues = new Map();
          m_mapSkippedApps = new Map();
          m_mapSkippedAppCount = new Map();
          m_mapInClientCompleted = new Map();
          m_mapInClientCompletedCallback = new Map();
          m_setExhuasted = new Set();
          m_mapExhuastedCallback = new Map();
          GetTotalSkippedAppsForDiscoveryQueue(o, l) {
            const s = Z(o, l);
            return this.m_mapDiscoveryQueues.get(s)?.skipped ?? 0;
          }
          GetNumAppsSeenForDiscoveryQueue(o, l) {
            const s = Z(o, l);
            return this.m_mapSkippedAppCount.get(s) || 0;
          }
          GetSkippedAppKey(o, l, s) {
            const a = Z(l, s);
            return `${o}_${a}`;
          }
          GetInClientCompletedQueues(o, l) {
            const s = Z(o, l);
            return this.m_mapInClientCompleted.get(s) || 0;
          }
          GetInClientCompletedQueuesCallback(o, l) {
            const s = Z(o, l);
            return (
              this.m_mapInClientCompletedCallback.has(s) ||
                this.m_mapInClientCompletedCallback.set(s, new G.lu()),
              this.m_mapInClientCompletedCallback.get(s)
            );
          }
          GetExhaustedCallback(o, l) {
            const s = Z(o, l);
            return (
              this.m_mapExhuastedCallback.has(s) ||
                this.m_mapExhuastedCallback.set(s, (0, G.Jc)(!1)),
              this.m_mapExhuastedCallback.get(s)
            );
          }
          BIsExhausted(o, l) {
            const s = Z(o, l);
            return this.m_setExhuasted.has(s);
          }
          async LoadDiscoveryQueue(o, l, s) {
            const a = Z(o, s);
            if (!this.m_transport) return A.zi;
            try {
              const v = (0, D.cw)(this.m_transport, o, l, s);
              l && (await L.L.invalidateQueries({ queryKey: v.queryKey }));
              const T = await L.L.fetchQuery(v);
              return (
                this.m_mapDiscoveryQueues.set(a, T),
                T.exhausted
                  ? (this.m_setExhuasted.add(a),
                    this.GetExhaustedCallback(o, s).Set(!0))
                  : (this.m_setExhuasted.delete(a),
                    this.GetExhaustedCallback(o, s).Set(!1)),
                this.m_mapSkippedAppCount.set(a, T.skipped || 0),
                A.R
              );
            } catch (v) {
              return (
                console.warn(
                  "Error",
                  v,
                  "failed to get discovery queue type",
                  o,
                  "key",
                  a,
                ),
                A.zi
              );
            }
          }
          async GetDiscoveryQueueAppsOfType(o, l, s) {
            const a = Z(o, s);
            return !l && this.m_mapDiscoveryQueues.has(a)
              ? {
                  appids: this.m_mapDiscoveryQueues.get(a).appids,
                  exhausted: !!this.m_mapDiscoveryQueues.get(a).exhausted,
                }
              : (await this.LoadDiscoveryQueue(o, l, s),
                {
                  appids: this.m_mapDiscoveryQueues.get(a).appids,
                  exhausted: !!this.m_mapDiscoveryQueues.get(a).exhausted,
                });
          }
          async SkipDiscoveryQueueItem(o, l, s) {
            const a = this.GetSkippedAppKey(o, l, s);
            if (!this.m_mapSkippedApps.has(a)) {
              const v = Z(l, s),
                T = this.m_mapDiscoveryQueues.get(v)?.appids,
                _ = T?.[T.length - 1] == o;
              this.m_mapSkippedApps.set(a, !0),
                this.m_mapSkippedAppCount.set(
                  v,
                  (this.m_mapSkippedAppCount.get(v) || 0) + 1,
                );
              const w = d.w.Init(r.fe);
              if (
                (w.Body().set_appid(o),
                w.Body().set_queue_type(l),
                (s?.nSaleTagID || s?.strContentHubType) &&
                  w.Body().set_store_page_filter((0, D.Jy)(s, !0)),
                !this.m_transport)
              ) {
                console.warn(
                  "Error",
                  "no transport",
                  "failed to skip appid ",
                  o,
                ),
                  this.m_mapSkippedApps.delete(a);
                return;
              }
              const Ae = (
                await r.nd.SkipDiscoveryQueueItem(this.m_transport, w)
              ).GetEResult();
              Ae != A.R && Ae != A.Ze
                ? (console.warn("Error", Ae, "failed to skip appid ", o),
                  this.m_mapSkippedApps.delete(a))
                : _ && this.MarkDiscoveryQueueCompleted(l, s);
            }
          }
          MarkDiscoveryQueueCompleted(o, l) {
            const s = Z(o, l);
            if (this.m_mapInClientCompleted.has(s)) {
              const a = this.m_mapInClientCompleted.get(s) + 1;
              this.m_mapInClientCompleted.set(s, a),
                this.GetInClientCompletedQueuesCallback(o, l).Dispatch(a);
            } else
              this.m_mapInClientCompleted.set(s, 0),
                this.GetInClientCompletedQueuesCallback(o, l).Dispatch(0);
          }
          async LoadSkippedApps(o, l) {
            const s = Z(o, l),
              a = d.w.Init(r.pS);
            if (
              (a.Body().set_steamid(K.iA.steamid),
              a.Body().set_queue_type(o),
              (l?.nSaleTagID || l?.strContentHubType) &&
                a.Body().set_store_page_filter((0, D.Jy)(l, !0)),
              !this.m_transport)
            )
              return (
                console.warn(
                  "Failed to retrieve skipped apps for discovery queue, no transport.",
                  o,
                  l,
                ),
                []
              );
            const v = await r.nd.GetDiscoveryQueueSkippedApps(
              this.m_transport,
              a,
            );
            return v.GetEResult() === A.R
              ? v.Body().appids() || []
              : (console.warn(
                  "Failed to retrieve skipped apps for discovery queue.",
                  o,
                  l,
                  v.GetEResult(),
                ),
                []);
          }
          static s_DiscoveryQueueStore = null;
          static Init(o) {
            vt.Get().m_transport = o;
          }
          static BHasTransport() {
            return !!vt.Get().m_transport;
          }
          static Get() {
            return (
              this.s_DiscoveryQueueStore ||
                (this.s_DiscoveryQueueStore = new vt()),
              this.s_DiscoveryQueueStore
            );
          }
          constructor() {
            (0, p.Gn)(this);
          }
        };
        X([p.sH], I.prototype, "m_mapDiscoveryQueues", 2);
        let W = I;
        function i(y, o) {
          const [l, s] = (0, t.useState)(
            W.Get().GetInClientCompletedQueues(y, o),
          );
          return (
            (0, V.hL)(W.Get().GetInClientCompletedQueuesCallback(y, o), s), l
          );
        }
        function g(y, o) {
          return (0, b.gc)(W.Get().GetExhaustedCallback(y, o));
        }
        function u(y, o) {
          const l = t.useMemo(
            () => (0, K.Tc)("discovery_queue_name", "application_config"),
            [],
          );
          return typeof l == "string" && l.length > 0 ? l : "";
        }
      },
      35098: (ee, J, e) => {
        "use strict";
        e.d(J, { DW: () => L, js: () => b, mK: () => R, tb: () => Z });
        var t = e(90626),
          p = e(80902),
          A = e(54806),
          d = e(99412),
          r = e(68312),
          G = e(15369),
          V = e(5858),
          Y = e(76559),
          K = e(15860);
        function b(i) {
          const g = (0, r.KV)(),
            u = t.useContext(X);
          return (0, p.I)(R(u, g, i));
        }
        function D(i) {
          const g = React.useRef(void 0),
            u = b(i);
          return u.data
            ? u
            : (g.current ||
                (g.current = new CPersonaStateImpl(
                  typeof i == "string"
                    ? new CSteamID(i)
                    : CSteamID.InitFromAccountID(i),
                )),
              { ...u, data: g.current });
        }
        function L(i) {
          const g = (0, r.KV)(),
            u = t.useContext(X);
          return (0, A.E)({ queries: i.map((y) => R(u, g, y)) });
        }
        function N(i) {
          return ReactQueryClient.getQueryData(["PlayerSummary", i]);
        }
        function z(i) {
          const { loadPersonaState: g, children: u } = i,
            y = React.useMemo(() => ({ loadPersonaState: g }), [g]);
          return React.createElement(X.Provider, { value: y }, u);
        }
        const X = t.createContext({
          loadPersonaState: async (i, g) => {
            if (i == null) return null;
            const u = await I(g).load(
              Y.b.InitFromAccountID(i).ConvertTo64BitString(),
            );
            return W(Y.b.InitFromAccountID(i), u);
          },
        });
        function Z() {
          return t.useContext(X);
        }
        function R(i, g, u) {
          const y = typeof u == "string" ? new Y.b(u).GetAccountID() : u;
          return {
            queryKey: ["PlayerSummary", y],
            queryFn: () => i.loadPersonaState(y, g),
            enabled: !!y,
          };
        }
        let ae;
        function I(i) {
          return (ae ??= (0, K.c)(i));
        }
        function W(i, g) {
          let u = new V.Z(i);
          const y = g?.public_data,
            o = g?.private_data;
          return (
            (u.m_bInitialized = !!g),
            (u.m_ePersonaState = o?.persona_state ?? d.cU3),
            (u.m_strAvatarHash = y?.sha_digest_avatar
              ? (0, G.Kx)(y.sha_digest_avatar)
              : V.dV),
            (u.m_strPlayerName = y?.persona_name ?? i.ConvertTo64BitString()),
            (u.m_strAccountName = o?.account_name),
            o?.persona_state_flags &&
              (u.m_unPersonaStateFlags = o?.persona_state_flags),
            o?.game_id && (u.m_gameid = o?.game_id),
            o?.game_server_ip_address &&
              (u.m_unGameServerIP = o?.game_server_ip_address),
            o?.lobby_steam_id && (u.m_game_lobby_id = o?.lobby_steam_id),
            o?.game_extra_info && (u.m_strGameExtraInfo = o?.game_extra_info),
            y?.profile_url && (u.m_strProfileURL = y.profile_url),
            u
          );
        }
      },
      77187: (ee, J, e) => {
        "use strict";
        e.d(J, { E2: () => N, PG: () => X });
        var t = e(7850),
          p = e(90626),
          A = e(80902),
          d = e(72604),
          r = e(35038),
          G = e(83153),
          V = e(84192),
          Y = e(10142),
          K = e(71742),
          b = e(68312);
        const D = p.createContext({}),
          L = () => p.useContext(D);
        function N(ae) {
          let { defaultOptions: I, children: W } = ae,
            i = p.useMemo(() => ({ defaultOptions: I || {} }), [I]);
          return (0, t.jsx)(D.Provider, { value: i, children: W });
        }
        const z = "StoreQueryStore";
        function X(ae, I, W, i) {
          let g = L();
          const u = (0, b.KV)();
          g ||
            (0, K.wT)(!1, "useStoreQuery called outside of a <StoreQueryRoot>");
          let y = g.defaultOptions;
          const o = p.useMemo(() => {
            let v = [];
            return (
              i?.content_descriptors_excluded
                ? (v = i.content_descriptors_excluded)
                : y?.content_descriptors_excluded &&
                  (v = y.content_descriptors_excluded),
              {
                ...I,
                filters: { content_descriptors_excluded: v, ...I.filters },
              }
            );
          }, [I, i, y]);
          let l;
          i?.override_country_code !== void 0
            ? (l = i.override_country_code)
            : y?.override_country_code !== void 0 &&
              (l = y.override_country_code);
          let s = { staleTime: 3600 * 1e3 };
          i?.reactQuery && (s = { ...s, ...i.reactQuery });
          const a = [z, o, W ?? {}, i ?? {}];
          return (0, A.I)({
            queryKey: a,
            queryFn: () => Z(u, ae, o, W ?? {}, l),
            ...s,
          });
        }
        async function Z(ae, I, W, i, g) {
          const u = r.w.Init(G.iU);
          (0, V.rV)(u),
            i && (0, V.Bn)(u, i),
            g && u.Body().set_override_country_code(g),
            u.Body().set_query(G.nu.fromObject(W)),
            u.Body().set_query_name(I);
          const y = await G.Fs.Query(ae, u);
          if (y.GetEResult() != d.R)
            throw `Error executing StoreQuery "${I}", EResult: ${y.GetEResult()}`;
          return new R(y, i);
        }
        class R {
          m_Items = void 0;
          m_rgItemIDs = void 0;
          m_metadata = void 0;
          constructor(I, W) {
            this.ReadResults(I, W);
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
          ReadResults(I, W) {
            this.m_Items ||
              ((0, K.wT)(
                I.Body().metadata().start() == 0,
                "Empty item list - expected to start at 0",
              ),
              (this.m_Items = []));
            const i = I.Body().ids() || [];
            if (
              ((this.m_rgItemIDs = i.map((g) => g.toObject())),
              I.Body().store_items())
            )
              for (const g of I.Body().store_items()) {
                const u = Y.A.Get().ReadItem(g, W);
                u && this.m_Items.push(u);
              }
            this.m_metadata = I.Body().metadata().toObject();
          }
        }
      },
      6394: (ee, J, e) => {
        "use strict";
        e.d(J, { g: () => w });
        var t = e(7850),
          p = e(65946),
          A = e(90626),
          d = e(83153),
          r = e(6469),
          G = e(10142),
          V = e(77187),
          Y = e(6778),
          K = e(36707),
          b = e(18210),
          D = e(3166),
          L = e(57810),
          N = e(71477),
          z = e.n(N),
          X = e(7112),
          Z = e(94253),
          R = e(41635),
          ae = e(80902),
          I = e(19298),
          W = e(81944),
          i = e(40358),
          g = e(21721),
          u = e(15830),
          y = e(86048),
          o = e(64868);
        function l(S) {
          const {
              arrDiscoveryApps: B,
              onClick: P,
              className: x,
              bDisableAnimation: $ = !1,
              children: Ie,
              ...ge
            } = S,
            ce = (0, D.Qn)(),
            [we, Fe] = (0, A.useState)(!ce),
            [Ve, nt] = (0, A.useState)(!1),
            c = (0, A.useRef)(Date.now()),
            it = 3e4,
            dt = A.useCallback(
              (ot) => {
                nt(ot), ce || Fe(ot);
              },
              [ce],
            ),
            Ue = A.useCallback(() => {
              (c.current = Date.now()), !ce && Ve && Fe(!0);
            }, [ce, Ve]);
          return (
            (0, o.$$)(() => {
              Date.now() - c.current > it && !ce && Fe(!1);
            }, 5e3),
            (0, y.l6)(window, "scroll", Ue),
            (0, y.l6)(window, "mousemove", Ue),
            (0, t.jsx)(W.J, {
              trigger: "repeated",
              onVisibilityChange: dt,
              children: (0, t.jsxs)(I.Z, {
                focusable: !0,
                onGamepadFocus: () => Fe(!0),
                onMouseEnter: () => ce && Fe(!0),
                onGamepadBlur: () => Fe(!1),
                onMouseLeave: () => ce && Fe(!1),
                onActivate: P,
                onOKActionDescription: (0, b.we)("#DiscoveryQueue_OpenWizard"),
                className: (0, K.A)(
                  u.DiscoveryQueueWidgetCtn,
                  x,
                  B !== void 0 && u.Initialized,
                ),
                ...ge,
                children: [
                  (0, t.jsx)(a, { rgAppIDs: B, bAnimationEnabled: !$ && we }),
                  Ie,
                ],
              }),
            })
          );
        }
        let s;
        function a(S) {
          const {
              rgAppIDs: B,
              bAnimationEnabled: P = !0,
              nCapsuleWidth: x = 320,
            } = S,
            [$, Ie] = A.useState(null);
          return (
            A.useEffect(() => {
              if (!P || !$) return;
              s || (s = performance.now());
              const ge = $.offsetWidth;
              let ce;
              const we = () => {
                const Ve =
                  (((performance.now() - s) / 40) % (ge - 3 * x - 16)) + x;
                ($.style.transform = `translateX( -${Ve}px )`),
                  (ce = requestAnimationFrame(we));
              };
              return (
                (ce = requestAnimationFrame(we)), () => cancelAnimationFrame(ce)
              );
            }, [$, P, x]),
            !B || !B.length
              ? null
              : (0, t.jsx)("div", {
                  className: u.AppCarouselPosition,
                  style: { "--capsule-width": `${x}px` },
                  children: (0, t.jsxs)("div", {
                    ref: Ie,
                    className: (0, K.A)(u.AppCarouselCtn, "vt-scrollable"),
                    style: { transform: `translateX( -${x}px )` },
                    children: [
                      B.map((ge) =>
                        (0, t.jsx)(v, { appID: ge }, "Capsule_" + ge),
                      ),
                      [...B, ...B]
                        .slice(0, 3)
                        .map((ge, ce) =>
                          (0, t.jsx)(v, { appID: ge }, `Capsule2_${ce}_${ge}`),
                        ),
                    ],
                  }),
                })
          );
        }
        function v(S) {
          const { appID: B } = S,
            P = { appid: B },
            { data: x } = (0, i.J$)(P),
            $ = (0, g.pd)(B),
            Ie = (0, g.DT)(P) || [],
            { data: ge } = (0, i.lv)(P);
          if (!$) return null;
          let ce = Ie.length
            ? (0, g.bu)(Ie[0], "600x338")
            : ge && (0, g.b0)(ge, "main_capsule");
          const we = {
            backgroundImage: `radial-gradient(135% 125% at 100% 0%, rgba(0, 0, 0, 0) 22.5%, rgba(0, 0, 0, 1) 92.5%)${ce ? `, url('${ce}')` : ""}`,
          };
          return (0, t.jsxs)("div", {
            className: u.AppCapsuleCtn,
            style: we,
            children: [
              (0, t.jsx)("div", {
                className: (0, K.A)(u.CapsuleColumn, u.LibraryImage),
                children: (0, t.jsx)("img", { src: $, alt: x?.name }),
              }),
              (0, t.jsx)("div", {
                className: u.CapsuleColumn,
                children: (0, t.jsx)("div", {
                  className: u.AppName,
                  children: x?.name,
                }),
              }),
            ],
          });
        }
        var T = e(85742),
          _ = e(32994);
        function w(S) {
          return (0, Y.G)()
            ? (0, t.jsxs)(ne, {
                children: [
                  (0, t.jsx)($e, {}),
                  D.iA.logged_in
                    ? (0, t.jsx)(oe, { ...S })
                    : (0, t.jsx)(m, { ...S }),
                ],
              })
            : null;
        }
        function ne(S) {
          const [B, P] = (0, r.L2)();
          let x = (0, p.q3)(() => P.ExcludedContentDescriptor),
            $ = A.useMemo(() => ({ content_descriptors_excluded: x }), [x]);
          return B
            ? null
            : (0, t.jsx)(V.E2, { defaultOptions: $, children: S.children });
        }
        function Ae(S, B) {
          const { data: P } = (0, ae.I)({
            queryKey: ["DiscoveryQueueLoader", S, B],
            queryFn: async () => {
              const { appids: x, exhausted: $ } = await L.aI
                .Get()
                .GetDiscoveryQueueAppsOfType(S, !1, B);
              let Ie = { ...T.LB, include_screenshots: !0 };
              return (
                await G.A.Get().QueueMultipleAppRequests(x ?? [], Ie),
                { rgDiscoveryApps: x, exhausted: $ }
              );
            },
            enabled: D.iA.logged_in,
          });
          return [P?.rgDiscoveryApps, P?.exhausted];
        }
        function oe(S) {
          const {
              eStoreDiscoveryQueueType: B,
              strQueueDescriptionOverride: P,
              ...x
            } = S,
            { showDiscoveryQueue: $, bQueueVisible: Ie } = (0, T.GV)(B, x),
            ge = (0, _.lI)(),
            [ce, we] = Ae(B, x.storePageFilter),
            Fe = Ie || !!ge.data?.preferences?.disable_animated_marketing,
            Ve = A.useCallback(() => {
              !we && $();
            }, [we, $]),
            nt = A.useId();
          return (0, t.jsx)(t.Fragment, {
            children: (0, t.jsx)(l, {
              "aria-labelledby": nt,
              onClick: Ve,
              arrDiscoveryApps: ce,
              bDisableAnimation: Fe,
              className: z().DiscoveryQueueWidget,
              children:
                !we &&
                (0, t.jsx)(n, { id: nt, strQueueDescriptionOverride: P }),
            }),
          });
        }
        function n(S) {
          const { strQueueDescriptionOverride: B, id: P } = S,
            x = B ?? (0, b.we)("#DiscoveryQueue_WidgetHeader");
          return (0, t.jsxs)("div", {
            id: P,
            className: (0, K.A)(z().WidgetHeaderCtn, "WidgetHeaderCtn"),
            children: [
              (0, t.jsx)("div", {
                className: z().WidgetHeaderText,
                children: (0, b.we)("#DiscoveryQueue_WidgetHeader_Yours"),
              }),
              (0, t.jsx)("div", {
                className: z().WidgetHeaderSubText,
                children: x,
              }),
            ],
          });
        }
        function m(S) {
          const B = k(!0),
            P = A.useCallback(() => {
              window.location.href = `${D.TS.STORE_BASE_URL}login?redir=${encodeURIComponent(document.location.href)}`;
            }, []);
          return (0, t.jsx)(l, {
            onClick: P,
            arrDiscoveryApps: B ? R.Nv(B) : void 0,
            children: (0, t.jsxs)("div", {
              className: (0, K.A)(z().WidgetHeaderCtn, "WidgetHeaderCtn"),
              children: [
                (0, t.jsx)("div", {
                  className: z().WidgetHeaderText,
                  children: (0, b.we)("#DiscoveryQueue_WidgetHeader_Yours"),
                }),
                (0, t.jsx)("div", {
                  className: z().WidgetHeaderSubText,
                  children: (0, b.we)("#DiscoveryQueue_WidgetHeader_LoggedOut"),
                }),
                (0, t.jsx)("div", {
                  className: z().LoginButton,
                  children: (0, b.we)("#DiscoveryQueue_Error_Login_Title"),
                }),
              ],
            }),
          });
        }
        function k(S) {
          let { data: B } = (0, V.PG)(
            "DiscoveryQueueWidget",
            {
              sort: d.Dq.Rm,
              start: 0,
              count: 12,
              filters: { type_filters: { include_games: !0 } },
            },
            { ...T.LB, include_screenshots: !0 },
            { reactQuery: { enabled: S, staleTime: 1 / 0 } },
          );
          return (0, A.useMemo)(
            () => B && B.GetItemIDs().map((P) => P.appid),
            [B],
          );
        }
        function $e() {
          const S = (0, Z.Qt)(X.L6.Jz, D.TS.LANGUAGE, !0),
            B = (0, D.Qn)();
          if (!S.data?.definition || (S.data?.reward_items?.length ?? 0) == 0)
            return null;
          const P = S?.data.reward_items ?? [];
          (0, R.fW)(P);
          const x = P.slice(0, 3);
          let $ = null;
          return (
            D.iA.logged_in &&
              !B &&
              ($ = (0, t.jsxs)(t.Fragment, {
                children: [
                  " - ",
                  (0, t.jsx)("a", {
                    href: D.TS.COMMUNITY_BASE_URL + "my/itemcollection",
                    children: (0, b.we)("#DiscoveryQueue_SaleStatus_Link"),
                  }),
                ],
              })),
            (0, t.jsxs)("div", {
              className: z().SaleTopSection,
              children: [
                (0, t.jsx)(se, { rgRewardItems: x }),
                (0, t.jsxs)("div", {
                  className: z().SaleTextCtn,
                  children: [
                    (0, t.jsx)("div", {
                      className: z().BoldText,
                      children: (0, b.we)("#DiscoveryQueue_Widget_SaleDesc"),
                    }),
                    (0, t.jsxs)("div", {
                      children: [
                        (0, b.we)(
                          "#DiscoveryQueue_Widget_SaleTitle",
                          (0, b._l)(
                            S.data.definition.rtime_end_time ?? 0,
                            !1,
                            !1,
                            !1,
                            !1,
                          ),
                        ),
                        $,
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        }
        function se(S) {
          const { rgRewardItems: B } = S,
            P = B.map((x) => {
              if (!x.community_definition || !x.community_definition.item_name)
                return null;
              const $ = `${D.TS.COMMUNITY_ASSETS_BASE_URL}images/items/${x.appid}/${x.community_definition.item_image_small}`;
              return (0, t.jsx)(
                "div",
                {
                  className: z().SaleSticker,
                  children: (0, t.jsx)("img", { src: $ }),
                },
                x.community_definition.item_name.toString(),
              );
            });
          return (0, t.jsx)("div", {
            className: z().StickerArrangement,
            children: R.Nv(P),
          });
        }
      },
      87192: (ee, J, e) => {
        "use strict";
        e.r(J), e.d(J, { default: () => st });
        var t = e(7850),
          p = e(90626),
          A = e(24660),
          d = e(19298),
          r = e(78365),
          G = e(20169),
          V = e(7112),
          Y = e(55051),
          K = e(68312),
          b = e(37740),
          D = e(72865),
          L = e(71568),
          N = e(6469),
          z = e(94253),
          X = e(10142),
          Z = e(84676),
          R = e(36118),
          ae = e(51079),
          I = e(47689),
          W = e(36707),
          i = e(18210),
          g = e(57589),
          u = e(13854),
          y = e(41672),
          o = e(3166),
          l = e(57810),
          s = e(40594);
        function a({
          nPercent: C,
          indeterminate: f,
          animate: h,
          className: E,
        }) {
          return jsx("div", {
            className: classnames(
              styles.ProgressBar,
              h && styles.AnimateProgress,
              f && styles.Indeterminate,
              E,
            ),
            style: { "--percent": C / 100 },
          });
        }
        const v = ({ nPercent: C, size: f = 120, strokeWidth: h = 20 }) => {
          const E = (f - h) / 2,
            F = 2 * Math.PI * E,
            U = F - (C / 100) * F,
            te = C == 100;
          return (0, t.jsx)("div", {
            className: (0, W.A)({ [s.Circular]: !0, [s.Full]: te }),
            children: (0, t.jsxs)("svg", {
              width: f,
              height: f,
              style: { transform: "rotate(-90deg)" },
              children: [
                (0, t.jsx)("circle", {
                  cx: f / 2,
                  cy: f / 2,
                  r: E,
                  stroke: "#0c131d",
                  strokeWidth: h,
                  fill: "none",
                }),
                (0, t.jsx)("circle", {
                  cx: f / 2,
                  cy: f / 2,
                  r: E,
                  stroke: "#1a9fff",
                  strokeWidth: h,
                  fill: "none",
                  strokeDasharray: F,
                  strokeDashoffset: U,
                  style: { transition: "stroke-dashoffset 0.3s ease-in-out" },
                }),
              ],
            }),
          });
        };
        var T = e(85599),
          _ = e(21659),
          w = e(12742),
          ne = e(62571),
          Ae = e(72408),
          oe = e(48357),
          n = e(80104),
          m = e(27284),
          k = e(31377),
          $e = e(71421),
          se = e(53113),
          S = e(74732),
          B = e(80902),
          P = e(99412),
          x = e(46943),
          $ = e(93125),
          Ie = e(76559),
          ge = e(813),
          ce = e(60480),
          we = e(14874),
          Fe = e(80702),
          Ve = e(21079),
          nt = e(57834),
          c = e.n(nt),
          it = e(35098),
          dt = e(58612),
          Ue = e(24642);
        const ot = new g.wd("AppRelevance").Debug;
        function St(C, f) {
          const h = (0, p.useMemo)(
            () => N.Fm.Get().GetRecommendingCuratorsForApp(C) || [],
            [C],
          );
          return (0, B.I)({
            queryKey: ["RecommendingCurators", C],
            queryFn: () =>
              Promise.all(h?.map((E) => ge.ac.LoadClanInfoForClanAccountID(E))),
            enabled: !!f && h && h.length > 0,
          });
        }
        function mt(C) {
          const {
              appID: f,
              bShowAvatars: h,
              storeItem: E,
              bHideDescription: F,
              bShowCuratorInfo: U,
              bShowCreatorInfo: te,
            } = C,
            O = (0, dt.Nd)(f),
            q = (0, Ve.Dk)(f),
            fe = (0, Ve.zo)(f),
            Be = (0, Ve.Y8)(),
            pe = (0, B.I)({
              queryKey: ["SimilarPlayedAppsLoad", f],
              queryFn: () =>
                X.A.Get().QueueMultipleAppRequests(
                  fe.data.arrSimilarPlayedApps?.map((le) => le.appid),
                  { include_basic_info: !0, include_assets: !0 },
                ),
              enabled: fe.isSuccess,
            }),
            Oe = St(f, U),
            Me = (0, p.useMemo)(() => {
              let le = [];
              return (
                E &&
                  ((le = le.concat(
                    E.GetAllFranchiseCreatorClans().map((xe) => ({
                      nAccountID: xe,
                      type: "franchise",
                    })),
                  )),
                  (le = le.concat(
                    E.GetAllDeveloperCreatorClans().map((xe) => ({
                      nAccountID: xe,
                      type: "developer",
                    })),
                  )),
                  (le = le.concat(
                    E.GetAllPublisherCreatorClans().map((xe) => ({
                      nAccountID: xe,
                      type: "publisher",
                    })),
                  )),
                  (le = le.filter((xe) =>
                    N.Fm.Get().BIsFollowingCurator(xe.nAccountID),
                  ))),
                le
              );
            }, [E]),
            ye = (0, B.I)({
              queryKey: ["FollowedCreators", f],
              queryFn: () =>
                ge.ac
                  .LoadClanInfoForClanAccountID(Me[0].nAccountID)
                  .then((le) => ({ clanInfo: le, type: Me[0].type })),
              enabled: !!te && Me && Me.length > 0,
            }),
            Ce = (0, B.I)({
              queryKey: ["PlayerSummaries", f, h],
              queryFn: async () => {
                let le = [],
                  xe = [],
                  lt = [];
                const ct = h ? 10 : 1;
                for (
                  let Se = 0;
                  Se < q.data.accountids_recommended?.length && Se < ct;
                  Se++
                ) {
                  const Ge = Ie.b.InitFromAccountID(
                    q.data.accountids_recommended[Se],
                  );
                  le.push(Ge.ConvertTo64BitString());
                }
                for (
                  let Se = 0;
                  Se < O.data.in_wishlist?.length && Se < ct;
                  Se++
                ) {
                  const Ge = new Ie.b(O.data.in_wishlist[Se].steamid);
                  xe.push(Ge.ConvertTo64BitString());
                }
                for (let Se = 0; Se < O.data.owns?.length && Se < ct; Se++) {
                  const Ge = new Ie.b(O.data.owns[Se].steamid);
                  lt.push(Ge.ConvertTo64BitString());
                }
                return {
                  rgRecommendedFriends: le,
                  rgWishlistFriends: xe,
                  rgOwnedFriends: lt,
                };
              },
              enabled: q.isSuccess && O.isSuccess,
            });
          if (
            !Be ||
            pe.isLoading ||
            fe.isLoading ||
            q.isLoading ||
            O.isLoading ||
            Oe.isLoading ||
            ye.isLoading ||
            Ce.isLoading
          )
            return (0, t.jsx)(T.t, { size: "medium", position: "center" });
          let Le = [];
          fe.isSuccess &&
            fe.data.arrSimilarPlayedApps &&
            fe.data.arrSimilarPlayedApps.slice(0, 2).forEach((le) => {
              const xe = X.A.Get().GetApp(le.appid);
              xe
                ? Le.push(
                    (0, t.jsx)(
                      Dt,
                      { lifetimePlaytime: le.playtimeForever, storeItem: xe },
                      le.appid,
                    ),
                  )
                : console.error("Failed to load store data ", f);
            });
          const Pe = Be.GetItemIDs().findIndex((le) => le.appid === f),
            Te = fe.data?.bRecommendedByIR,
            Xe = Le.length > 0,
            _e = O.data?.owns?.length,
            re = O.data?.in_wishlist?.length,
            ve = q.data?.accountids_recommended?.length;
          let he = 0;
          return (
            _e > 0 && he++,
            re > 0 && he++,
            ve > 0 && he++,
            Te && he++,
            Pe >= 0 && he++,
            Le.length > 0 && he++,
            U && Oe?.data?.length > 0 && he++,
            te && ye.data && he++,
            ot(
              "FriendsOwned: ",
              _e,
              " FriendsWishlisted: ",
              re,
              "cRecommended: ",
              ve,
            ),
            (0, t.jsxs)(t.Fragment, {
              children: [
                he > 0 &&
                  (0, t.jsxs)(t.Fragment, {
                    children: [
                      (0, t.jsx)("div", {
                        className: c().WhyRelevant,
                        children: (0, i.we)("#DiscoveryQueue_WhyRelevant"),
                      }),
                      (0, t.jsxs)("div", {
                        role: "list",
                        className: c().RelevantCtn,
                        children: [
                          Xe &&
                            (0, t.jsx)(ie, {
                              header: (0, i.we)("#DiscoveryQueue_SimilarGames"),
                              children: (0, t.jsx)("div", {
                                className: c().ReleventSimilarAppsCtn,
                                children: Le,
                              }),
                            }),
                          U &&
                            Oe?.data?.length > 0 &&
                            (0, t.jsx)(ie, {
                              header: (0, i.we)(
                                "#ContentHub_Recommendation_Curators",
                              ),
                              children: (0, t.jsx)("div", {
                                className: (0, W.A)(
                                  c().ReleventSimilarAppsCtn,
                                  c().RecommendingCuratorsCtn,
                                ),
                                children: Oe.data
                                  .filter(Boolean)
                                  .map((le) =>
                                    (0, t.jsx)(
                                      ft,
                                      { curator: le },
                                      "curator_" + le.clanAccountID,
                                    ),
                                  ),
                              }),
                            }),
                          te &&
                            !!ye.data &&
                            (0, t.jsx)(It, { creatorInfo: ye.data }),
                          Pe >= 0 &&
                            (0, t.jsx)(ie, {
                              header: (0, i.um)(
                                "#DiscoveryQueue_TopSellers",
                                (0, Ue.D)(Pe + 1),
                                (0, t.jsx)("span", {
                                  className: c().RelevantTextBold,
                                }),
                              ),
                            }),
                          Te &&
                            !Xe &&
                            (0, t.jsx)(ie, {
                              header: (0, i.we)(
                                "#DiscoveryQueue_RecommendedByIR",
                              ),
                            }),
                          (0, t.jsx)(j, {
                            bShowAvatars: h,
                            count: q.data?.accountids_recommended?.length,
                            locToken: "#DiscoveryQueue_FriendsRecommended",
                            arrSteamIDs: Ce.data?.rgRecommendedFriends,
                          }),
                          (0, t.jsx)(j, {
                            bShowAvatars: h,
                            count: O.data?.owns?.length,
                            locToken: "#DiscoveryQueue_FriendsOwned",
                            arrSteamIDs: Ce.data?.rgOwnedFriends,
                          }),
                          (0, t.jsx)(j, {
                            bShowAvatars: h,
                            count: O.data?.in_wishlist?.length,
                            locToken: "#DiscoveryQueue_FriendsWishlisted",
                            arrSteamIDs: Ce.data?.rgWishlistFriends,
                          }),
                        ],
                      }),
                    ],
                  }),
                !F || he == 0
                  ? (0, t.jsx)("div", {
                      className: (0, W.A)(
                        c().AppDescription,
                        he && c().Divider,
                      ),
                      children: E.GetShortDescription(),
                    })
                  : (0, t.jsx)("div", {
                      "aria-label": E.GetShortDescription(),
                    }),
              ],
            })
          );
        }
        function It(C) {
          const { creatorInfo: f } = C;
          if (!f) return null;
          let h;
          switch (f.type) {
            case "publisher":
              h = "#ContentHub_Recommendation_FollowedPublisher";
              break;
            case "developer":
              h = "#ContentHub_Recommendation_FollowedDeveloper";
              break;
            case "franchise":
              h = "#ContentHub_Recommendation_FollowedFranchise";
              break;
          }
          return h
            ? (0, t.jsx)(ie, {
                header: (0, i.PP)(
                  h,
                  (0, t.jsx)("span", {
                    className: c().RelevantTextBold,
                    children: f.clanInfo?.group_name,
                  }),
                ),
              })
            : null;
        }
        function ft(C) {
          const { curator: f } = C,
            { creatorHome: h } = (0, ce.FV)(f?.clanAccountID);
          return !f || !h
            ? null
            : (0, t.jsx)(A.Ii, {
                href: h.GetCreatorHomeURL(null),
                children: (0, t.jsx)("img", { src: f.avatar_medium_url }),
              });
        }
        function Dt(C) {
          const { lifetimePlaytime: f, storeItem: h } = C,
            E = (0, we.DJ)(h);
          return (0, t.jsx)("div", {
            className: c().SimilarAppCtn,
            children: (0, t.jsx)(Fe.Q, {
              id: E,
              bHidePrice: !0,
              hoverProps: {
                direction: "overlay",
                nBodyAlignment: 1,
                style: { minWidth: "320px", zIndex: 5e3 },
              },
              children: (0, t.jsx)("img", {
                className: c().SimilarAppImg,
                alt: h.GetName(),
                src: h.GetAssets().GetSmallCapsuleURL(),
              }),
            }),
          });
        }
        function j(C) {
          const { arrSteamIDs: f, count: h, locToken: E, bShowAvatars: F } = C;
          return h
            ? h == 1 && !F
              ? (0, t.jsx)(ie, {
                  header: (0, i.PP)(
                    E + "_Single",
                    (0, t.jsx)(M, { steamid: f[0] }),
                  ),
                })
              : (0, t.jsx)(ie, {
                  header: (0, i.um)(
                    E,
                    h,
                    (0, t.jsx)("span", { className: c().RelevantTextBold }),
                  ),
                  children:
                    F &&
                    f.length > 0 &&
                    (0, t.jsx)("div", {
                      className: c().FriendAvatarsCtn,
                      children:
                        h == 1
                          ? (0, t.jsx)(H, { steamid: f[0] })
                          : (0, t.jsx)(Q, { arrSteamIDs: f }),
                    }),
                })
            : null;
        }
        function M(C) {
          const { steamid: f } = C,
            { data: h } = (0, it.js)(f);
          return !h || !h.m_bInitialized
            ? null
            : (0, t.jsx)("span", {
                "data-miniprofile": "s" + h.m_steamid.ConvertTo64BitString(),
                className: c().RelevantTextBold,
                children: h.m_strPlayerName,
              });
        }
        function Q(C) {
          const { arrSteamIDs: f } = C,
            h = (0, it.DW)(f);
          return (0, t.jsx)(t.Fragment, {
            children: h.map(
              ({ data: E }) =>
                E &&
                (0, t.jsx)(
                  x.i8,
                  {
                    "data-miniprofile":
                      "s" + E.m_steamid.ConvertTo64BitString(),
                    persona: E,
                    size: "Small",
                    statusPosition: "right",
                  },
                  E.m_steamid.ConvertTo64BitString(),
                ),
            ),
          });
        }
        function H(C) {
          const { steamid: f } = C,
            { data: h } = (0, it.js)(f);
          return h
            ? (0, t.jsxs)(d.Z, {
                className: c().FriendBlockCtn,
                "data-miniprofile": "s" + f,
                children: [
                  (0, t.jsx)(x.i8, {
                    persona: h,
                    size: "Small",
                    statusPosition: "right",
                  }),
                  (0, t.jsx)($.D, {
                    className: c().PersonaStatus,
                    persona: h,
                    eFriendRelationship: P._UC,
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
        function ie(C) {
          const { children: f, header: h } = C;
          return (0, t.jsxs)("div", {
            className: c().RelevantItem,
            children: [
              (0, t.jsx)("div", {
                className: c().RelevantCheck,
                children: (0, t.jsx)(R.Jlk, {}),
              }),
              (0, t.jsxs)("div", {
                className: c().RelevantColumn,
                children: [
                  (0, t.jsx)("div", {
                    className: c().ReleventText,
                    children: h,
                  }),
                  f,
                ],
              }),
            ],
          });
        }
        var de = e(29522),
          me = e(77426);
        const be = new g.wd("DiscoveryQueueApp").Debug;
        function Ee(C) {
          const {
              appID: f,
              nItemHeight: h,
              nItemWidth: E,
              selected: F,
              fnFocused: U,
              eStoreDiscoveryQueueType: te,
              storePageFilter: O,
              bPreferDemoStorePage: q,
              elVideo: fe,
              elDetails: Be,
              appAriaIDs: pe,
            } = C,
            [Oe] = (0, Z.t7)(f, me.G),
            Me = (0, o.Qn)(),
            Ce = (0, L.R7)()?.ownerWindow || window,
            Le = Ke(Oe, te, O, q),
            { bIsIgnored: Pe, fnUpdateIgnored: Te } = (0, Ae.TK)(f),
            { bIsWishlisted: Xe, fnUpdateWishlist: _e } = (0, Ae.u4)(f),
            re = p.useRef(void 0);
          if (
            (p.useEffect(() => {
              F && re.current && re.current.focus({ preventScroll: !0 });
            }, [F]),
            !Oe)
          )
            return (
              console.warn("Error: missing store item for appid ", f), null
            );
          const ve = { width: E || void 0, height: h || void 0 };
          return (0, t.jsxs)(d.Z, {
            "aria-labelledby": (0, ne.q)(
              pe.nameId,
              pe.tagsId,
              pe.reviewId,
              pe.relevanceId,
              pe.buttonsId,
            ),
            ref: re,
            style: ve,
            className: (0, W.A)(c().DiscoveryQueueApp, F && c().Selected),
            onOptionsActionDescription: Xe
              ? (0, i.we)("#DiscoveryQueue_RemoveFromWishlist")
              : (0, i.we)("#DiscoveryQueue_AddToWishlist"),
            onOptionsButton: _e,
            onOKActionDescription: (0, i.we)("#DiscoveryQueue_ViewStorePage"),
            onOKButton: () => {
              Ce.location.href = Le;
            },
            onSecondaryActionDescription: Pe
              ? (0, i.we)("#DiscoveryQueue_Undo")
              : (0, i.we)("#DiscoveryQueue_IgnoreLink"),
            onSecondaryButton: Te,
            fnScrollIntoViewHandler: () => (U(), !0),
            children: [
              (0, t.jsx)("div", {
                className: (0, W.A)(c().IgnoredCtn, Pe && c().Active),
                children: (0, t.jsxs)("div", {
                  className: (0, W.A)(c().IgnoredInfo, Pe && c().Active),
                  children: [
                    (0, t.jsx)("div", {
                      className: c().IgnoredTitle,
                      children: (0, i.we)("#DiscoveryQueue_Ignored"),
                    }),
                    (0, t.jsx)("div", {
                      className: c().IgnoredDescription,
                      children: (0, i.we)(
                        "#DiscoveryQueue_IgnoredConfirmation",
                      ),
                    }),
                    (0, t.jsxs)(d.Z, {
                      className: (0, W.A)(
                        c().QueueButton,
                        c().UndoIgnoreButton,
                      ),
                      onClick: Te,
                      children: [
                        Me &&
                          (0, t.jsx)(k.$m, {
                            button: S.g4.X,
                            type: k.wt.Light,
                            size: k.xY.Medium,
                          }),
                        (0, i.we)("#DiscoveryQueue_Undo"),
                      ],
                    }),
                  ],
                }),
              }),
              fe,
              Be,
            ],
          });
        }
        function Ke(C, f, h, E) {
          const F = (0, D.n9)();
          return p.useMemo(() => {
            if (!C) return;
            const te = (0, l.Bk)(h),
              O = f >= Y.QV.qy ? "?inqueue=" + f + (h ? "_" + te : "") : "",
              q = (0, D.bV)(F, C.GetStorePageURL(E) + O);
            return (0, se.NT)(q);
          }, [E, f, F, C, h]);
        }
        function We(C) {
          const {
              appID: f,
              bShowMinimizedDisplay: h,
              eStoreDiscoveryQueueType: E,
              storePageFilter: F,
              bPreferDemoStorePage: U,
              appAriaIDs: te,
            } = C,
            [O] = (0, Z.t7)(f, me.G),
            q = (0, de.$5)(f),
            { bIsIgnored: fe, fnUpdateIgnored: Be } = (0, Ae.TK)(f),
            { bIsWishlisted: pe, fnUpdateWishlist: Oe } = (0, Ae.u4)(f),
            Me = Ke(O, E, F, U),
            ye = (0, o.Qn)(),
            Ce = ye;
          if (!O) return;
          const Le = O.GetAssets().GetLibraryCapsuleURL(),
            Pe = O.GetAssets().GetHeaderURL();
          return (0, t.jsxs)(d.Z, {
            className: c().AppDetailsCtn,
            children: [
              (0, t.jsxs)("div", {
                className: c().AppDetailsCtnTop,
                children: [
                  Le &&
                    (0, t.jsxs)("a", {
                      className: (0, W.A)(c().CapsuleLink),
                      href: Me,
                      children: [
                        (0, t.jsx)("img", {
                          className: c().AppLibraryHero,
                          src: Le,
                        }),
                        Pe &&
                          (0, t.jsx)("img", {
                            className: c().AppHeader,
                            src: Pe,
                          }),
                      ],
                    }),
                  (0, t.jsxs)("div", {
                    id: te.nameId,
                    className: c().RightColumn,
                    children: [
                      (0, t.jsx)("a", {
                        className: (0, W.A)(c().AppName),
                        href: Me,
                        children: O.GetName(),
                      }),
                      (0, t.jsx)(oe.NF, { bSingleLineMode: !0, id: q }),
                    ],
                  }),
                  (0, t.jsx)(ke, {
                    rgTagIDs: O.GetTagIDs(),
                    ariaLabelID: te.tagsId,
                  }),
                  (0, t.jsx)("div", {
                    className: c().AppReviews,
                    id: te.reviewId,
                    children: (0, t.jsx)(n.J, {
                      bShowTooltip: !0,
                      bTruncateTotalReviews: h,
                      id: q,
                    }),
                  }),
                  (0, t.jsx)("div", {
                    id: te.relevanceId,
                    className: c().AppRelevanceCtn,
                    children: (0, t.jsx)(mt, {
                      bHideDescription: ye,
                      bShowAvatars: !h,
                      storeItem: O,
                      appID: f,
                    }),
                  }),
                ],
              }),
              !ye &&
                (0, t.jsx)("div", {
                  className: c().AppActionButtonsCtn,
                  children: (0, t.jsx)("div", {
                    id: te.buttonsId,
                    className: c().AppActionJustButtonsCtn,
                    children: (0, t.jsxs)("div", {
                      className: c().ButtonsRowWrap,
                      children: [
                        O.BHasDemo() &&
                          (0, t.jsx)(m.j, {
                            id: q,
                            className: (0, W.A)(
                              c().QueueButton,
                              c().Primary,
                              c().Launch,
                            ),
                          }),
                        (0, t.jsxs)("a", {
                          className: (0, W.A)(c().QueueButton, c().Primary),
                          href: Me,
                          children: [
                            Ce &&
                              (0, t.jsx)(k.$m, {
                                button: S.g4.Y,
                                type: k.wt.Light,
                                size: k.xY.Medium,
                                additionalClassName: c().YGlyph,
                              }),
                            " ",
                            (0, i.we)("#DiscoveryQueue_ViewStorePage"),
                          ],
                        }),
                        (0, t.jsx)($e.he, {
                          toolTipContent: pe
                            ? (0, i.we)("#RemoveFromWishlist_ttip")
                            : (0, i.we)("#AddToWishlist_ttip"),
                          children: (0, t.jsxs)(d.Z, {
                            "aria-label": pe
                              ? (0, i.we)("#Sale_RemoveFromWishlist")
                              : (0, i.we)("#Sale_AddToWishlist"),
                            focusable: !0,
                            className: (0, W.A)(
                              c().QueueButton,
                              pe && c().Active,
                            ),
                            onClick: Oe,
                            children: [
                              Ce &&
                                (0, t.jsx)(k.$m, {
                                  button: S.g4.Y,
                                  type: k.wt.Light,
                                  size: k.xY.Medium,
                                  additionalClassName: c().YGlyph,
                                }),
                              pe
                                ? (0, t.jsx)(R.qnF, {})
                                : (0, t.jsx)(R.T4m, {}),
                            ],
                          }),
                        }),
                        (0, t.jsx)($e.he, {
                          toolTipContent: (0, i.we)(
                            "#SaleTrailerCarousel_IgnoreLink_ttip",
                          ),
                          children: (0, t.jsx)(d.Z, {
                            "aria-label": (0, i.we)(
                              "#DiscoveryQueue_IgnoreLink",
                            ),
                            focusable: !0,
                            className: (0, W.A)(
                              c().QueueButton,
                              fe && c().Active,
                            ),
                            onClick: Be,
                            children: (0, t.jsx)(R.NtH, {}),
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
            ],
          });
        }
        function ke(C) {
          const { rgTagIDs: f, ariaLabelID: h } = C,
            F = [...(0, Ae.W3)(f)].slice(0, 8);
          return (0, t.jsx)("div", {
            id: h,
            role: "list",
            className: c().AppTagsCtn,
            children: F.map((U) =>
              (0, t.jsx)(w.Fz, { className: c().TagEntry, tagID: U }, U),
            ),
          });
        }
        function je() {
          const C = p.useId(),
            f = p.useId(),
            h = p.useId(),
            E = p.useId(),
            F = p.useId();
          return {
            nameId: C,
            tagsId: f,
            reviewId: h,
            relevanceId: E,
            buttonsId: F,
          };
        }
        var Qe = e(24245),
          ze = e(85742),
          He = e(54528),
          Ze = e(94162);
        const tt = new g.wd("DiscoveryQueueWizard").Debug,
          De = 1,
          Je = 1400,
          Re = "discoveryqueue2022";
        async function qe(C, f, h, E) {
          let F = [],
            U = !1;
          try {
            const { appids: te, exhausted: O } = await l.aI
              .Get()
              .GetDiscoveryQueueAppsOfType(C, f, E);
            (F = [...te]),
              (U = O),
              h && F.findIndex((q) => q === h) === -1 && F.unshift(h),
              await X.A.Get().QueueMultipleAppRequests(F, {
                ...me.G,
                ...ze.LB,
              });
          } catch (te) {
            console.error("Failed getting discovery queue apps", te);
          }
          return { appids: F, exhausted: U };
        }
        function st(C) {
          const [f, h] = p.useState(!1),
            E = (0, K.KV)();
          return (
            (0, p.useEffect)(() => {
              l.aI.Init(E), h(!0);
            }, [E]),
            f ? (0, t.jsx)(et, { ...C }) : null
          );
        }
        function et(C) {
          const {
              eStoreDiscoveryQueueType: f,
              fnCloseModal: h,
              includeAppID: E,
              storePageFilter: F,
              bPreferDemoStorePage: U,
              bShowAOAutoPlayWarning: te,
            } = C,
            [O, q] = p.useState(0),
            [fe, Be] = p.useState(void 0),
            [pe, Oe] = p.useState(0),
            ye = (0, L.R7)()?.ownerWindow || window,
            Ce = (0, D.ru)(Re),
            [Le, Pe] = p.useState(0),
            Te = (0, b.b)();
          (0, y.E)("ArrowLeft", () => ve(!1), !0, !0),
            (0, y.E)("Left", () => ve(!1), !0, !0),
            (0, y.E)("ArrowRight", () => ve(!0), !0, !0),
            (0, y.E)("Right", () => ve(!0), !0, !0),
            (0, y.E)("Escape", () => h?.(), !0, !0),
            (0, y.E)("Esc", () => h?.(), !0, !0);
          const Xe = p.useMemo(() => ye.innerWidth < Je, [ye]),
            { fnGetDiscoveryQueue: _e, rgAppIDs: re } = Ne(f, F, E);
          p.useEffect(() => {
            _e(!0), N.Fm.Get().HintLoad();
          }, []),
            p.useEffect(() => {
              const ue = re[O];
              ue != fe && (ue && ue != De && Te.AddImpression(ue, Ce), Be(ue));
            }, [Te, O, fe, re, Ce]);
          const ve = (ue) => {
            const Bt = u.OQ(O + (ue ? 1 : -1), 0, re.length - 1);
            Bt != O &&
              (q(Bt),
              tt("New selected index: ", Bt, " Prev selected index: ", O));
          };
          p.useEffect(() => {
            re?.length &&
              re[O] !== De &&
              (Pe((ue) => ue + 1),
              l.aI
                .Get()
                .SkipDiscoveryQueueItem(re[O], f, F)
                .then(() => Pe((ue) => ue - 1)));
          }, [f, O, re, F]),
            p.useEffect(() => {
              re.length != pe &&
                (Oe(re.length), re.length > pe && re[O] == De && q(O + 1));
            }, [pe, O, re]);
          const [he] = p.useState(new Map()),
            le = (0, l.WX)(f, F),
            xe = !(0, _.c5)() && O > 0,
            lt = !(0, _.c5)() && O < re.length - 1,
            {
              refContainer: ct,
              bIsDragging: Se,
              nDragOffset: Ge,
              nDragSelectedOffsetIndex: At,
              handleTouchStart: bt,
              handleTouchMove: Et,
              handleTouchEnd: Mt,
            } = Ye((ue) => q(ue), re.length),
            Pt = (ue) => {
              ue.target == ue.currentTarget && (h?.(), ue.stopPropagation());
            },
            Ct = (ue) => u.W(O + ue, re) && (u.LA(ue, -1, 1) || Se),
            Tt = (0, D.aL)(o.TS.STORE_BASE_URL + "explore?dq=widget"),
            xt = !(0, o.Qn)() && !(0, Ze.$W)() && f === Y.QV.qy,
            jt = (0, D.aL)(o.TS.STORE_BASE_URL + "explore/next/" + Y.QV.qy),
            Ot = re[O] !== De,
            { nQueueStart: Lt, nCount: Wt } = pt(O, re);
          return (0, t.jsx)(ae.Ay, {
            feature: Re,
            children: (0, t.jsx)(d.Z, {
              role: "dialog",
              focusable: !1,
              "flow-children": "column",
              className: c().DiscoveryQueueCarouselCtn,
              navEntryPreferPosition: G.iU.LAST,
              onCancelButton: () => h?.(),
              onCancelActionDescription: (0, i.we)("#Button_Close"),
              children: (0, t.jsxs)("div", {
                className: c().DiscoveryQueueWrapper,
                onClick: Pt,
                children: [
                  le.length > 0 &&
                    (0, t.jsx)(d.Z, {
                      "flow-children": "row",
                      className: c().DiscoveryQueueName,
                      children: le,
                    }),
                  (0, t.jsxs)(d.Z, {
                    "flow-children": "row",
                    className: c().TopBarCtn,
                    children: [
                      (0, t.jsx)(d.Z, {
                        className: c().LearnMore,
                        children: (0, i.oW)(
                          "#DiscoveryQueue_LearnMore_Default",
                          (0, t.jsx)(A.Ii, {
                            className: c().LearnMoreLink,
                            href: (0, se.NT)(Tt),
                          }),
                        ),
                      }),
                      xt &&
                        (0, t.jsx)(d.Z, {
                          className: c().ClassicQueueLink,
                          children: (0, i.oW)(
                            "#DiscoveryQueue_ClassicQueue_Link",
                            (0, t.jsx)(A.Ii, {
                              className: c().LearnMoreLink,
                              href: (0, se.NT)(jt),
                            }),
                          ),
                        }),
                      (0, t.jsx)(d.Z, {
                        className: c().ControlsCtn,
                        children: (0, t.jsx)(d.Z, {
                          focusable: !0,
                          className: c().QueueButton,
                          onClick: h,
                          "aria-label": (0, i.we)("#Button_Close"),
                          onActivate: () => h && h(),
                          children: (0, t.jsx)(R.X, {}),
                        }),
                      }),
                    ],
                  }),
                  (0, t.jsx)(d.Z, {
                    role: "button",
                    "aria-label": (0, i.we)("#Carousel_Next"),
                    onClick: () => ve(!1),
                    className: (0, W.A)(
                      c().QueueNavArrow,
                      c().LeftArrow,
                      xe && c().Enable,
                    ),
                    children: (0, t.jsx)(R.l8x, { angle: 180 }),
                  }),
                  (0, t.jsx)(d.Z, {
                    role: "button",
                    "aria-label": (0, i.we)("#Carousel_Prev"),
                    onClick: () => ve(!0),
                    className: (0, W.A)(
                      c().QueueNavArrow,
                      c().RightArrow,
                      lt && c().Enable,
                    ),
                    children: (0, t.jsx)(R.l8x, { angle: 0 }),
                  }),
                  (0, t.jsx)(d.Z, {
                    ref: ct,
                    className: c().DiscoveryQueueItemsCtn,
                    focusable: !1,
                    onTouchStart: bt,
                    onTouchMove: Et,
                    onTouchEnd: Mt,
                    children: [-2, -1, 0, 1, 2].map((ue) =>
                      (0, t.jsx)(
                        "div",
                        {
                          className: (0, W.A)({
                            [c().DiscoveryQueueItemPositioner]: !0,
                            [c().Dragging]: Se,
                            [c().InRange]: Ct(ue),
                            [c().FarLeft]: ue == -2,
                            [c().Left]: ue == -1,
                            [c().Current]: ue == 0,
                            [c().Right]: ue == 1,
                            [c().FarRight]: ue == 2,
                            [c().Selected]: ue + At == 0,
                          }),
                          style: { "--dragOffsetX": `${Ge}px` },
                          children:
                            Ct(ue) &&
                            (0, t.jsx)(gt, {
                              eStoreDiscoveryQueueType: f,
                              storePageFilter: F,
                              rgAppIDs: re,
                              index: O + ue,
                              bShowMinimizedDisplay: Xe,
                              selectedIndex: O,
                              bPreferDemoStorePage: !!U,
                              mapViewedAppCount: he,
                              fnCloseModal: h,
                              fnLoadNextQueue: () => _e(!1),
                              fnAdvance: ve,
                              bSkipAppRequestPending: Le != 0,
                              showAOAutoPlayWarning: !!te,
                            }),
                        },
                        O + ue,
                      ),
                    ),
                  }),
                  (0, t.jsx)(Qe.A, {
                    className: (0, W.A)(!Ot && c().ProgressHidden),
                    showPriorAsActive: !0,
                    count: Wt,
                    selectedIndex: O - Lt,
                  }),
                ],
              }),
            }),
          });
        }
        function pt(C, f) {
          let h = 0;
          for (let U = 0; U < C; U++) f[U] == De && (h = U + 1);
          let E = 0;
          for (let U = C; U < f.length; U++)
            if (f[U] == De) {
              E = U;
              break;
            } else U == f.length - 1 && (E = f.length);
          const F = E - h;
          return { nQueueStart: h, nQueueEnd: E, nCount: F };
        }
        function Ye(C, f) {
          const h = p.useRef(null),
            [E, F] = p.useState(0),
            [U, te] = p.useState(!1),
            [O, q] = p.useState(0),
            fe = p.useRef(0),
            Be = 50;
          return {
            refContainer: h,
            bIsDragging: U,
            nDragOffset: E,
            nDragSelectedOffsetIndex: O,
            handleTouchStart: (ye) => {
              te(!0), (fe.current = ye.touches[0].clientX), F(0), q(0);
            },
            handleTouchMove: (ye) => {
              if (!U) return;
              const Ce = ye.touches[0].clientX - fe.current;
              F(Ce), q(E > Be ? 1 : E < -Be ? -1 : 0);
            },
            handleTouchEnd: () => {
              U &&
                (te(!1),
                E > Be
                  ? C((ye) => Math.max(ye - 1, 0))
                  : E < -Be && C((ye) => Math.min(ye + 1, f - 1)),
                F(0),
                q(0));
            },
          };
        }
        function gt(C) {
          const {
              eStoreDiscoveryQueueType: f,
              storePageFilter: h,
              rgAppIDs: E,
              index: F,
              bShowMinimizedDisplay: U,
              selectedIndex: te,
              bPreferDemoStorePage: O,
              mapViewedAppCount: q,
              fnCloseModal: fe,
              fnLoadNextQueue: Be,
              fnAdvance: pe,
              bSkipAppRequestPending: Oe,
              showAOAutoPlayWarning: Me,
            } = C,
            [ye, Ce] = p.useState(!1),
            Le = je(),
            Pe = () => {
              te != F && pe(F > te);
            },
            Te = te === F,
            Xe = p.useRef(Te);
          if (
            (p.useEffect(() => {
              const re = Xe.current;
              if (((Xe.current = Te), re && !Te)) {
                Ce(!0);
                const ve = setTimeout(() => Ce(!1), 500);
                return () => {
                  clearTimeout(ve);
                };
              }
            }, [Te]),
            E[F] == De)
          ) {
            let re = 0;
            for (let he = F - 1; he >= 0; he--) E[he] == De && (re += 1);
            let ve = 0;
            for (let he = F - 1; he >= 0 && E[he] !== De; he--) ve++;
            return (
              q.has(re) ||
                q.set(
                  re,
                  l.aI.Get().GetTotalSkippedAppsForDiscoveryQueue(f, h),
                ),
              (0, p.createElement)(yt, {
                ...C,
                key: te,
                selected: Te,
                lastCard: te == E.length - 1,
                fnLoadNextQueue: Be,
                fnCloseModal: fe,
                summaryCardIndex: re,
                eStoreDiscoveryQueueType: f,
                viewedAppCount: (q.get(re) || 0) + ve,
                fnFocused: Pe,
                fnAdvance: () => pe(!0),
                bSkipAppRequestPending: Oe,
              })
            );
          }
          const _e = Te || Xe.current || ye;
          return (0, t.jsx)(Ee, {
            appAriaIDs: Le,
            eStoreDiscoveryQueueType: f,
            storePageFilter: h,
            selected: Te,
            appID: E[F],
            bPreferDemoStorePage: O,
            fnFocused: Pe,
            elVideo: (0, t.jsx)(Ae.y3, {
              appID: E[F],
              focused: _e,
              showAOAutoPlayWarning: Me,
              fnComplete: void 0,
            }),
            elDetails: (0, t.jsx)(We, {
              appID: E[F],
              bShowMinimizedDisplay: U,
              eStoreDiscoveryQueueType: f,
              storePageFilter: h,
              bPreferDemoStorePage: O,
              appAriaIDs: Le,
            }),
          });
        }
        function Ne(C, f, h) {
          const [E, F] = p.useState([]),
            U = (0, I.m)("DiscoveryQueueWizard");
          return {
            fnGetDiscoveryQueue: async (O) => {
              let { appids: q } = await qe(C, !O, O && h, f);
              if (O && !q.length) {
                let { appids: fe } = await qe(C, !0, void 0, f);
                q = fe;
              }
              if (!U?.token?.reason) {
                const fe = [...(E ?? []), ...q, De];
                F(fe);
              }
              tt("Loaded new discovery queue apps: ", q);
            },
            rgAppIDs: E,
          };
        }
        function yt(C) {
          const {
              eStoreDiscoveryQueueType: f,
              fnCloseModal: h,
              summaryCardIndex: E,
              lastCard: F,
              selected: U,
              fnLoadNextQueue: te,
              storePageFilter: O,
              fnDisplaySummaryReward: q,
              viewedAppCount: fe,
              fnFocused: Be,
              fnAdvance: pe,
              bSkipAppRequestPending: Oe,
            } = C,
            [Me, ye] = p.useState(!1),
            Ce = (0, o.Qn)(),
            Le = (0, z.Qt)(V.L6.Jz, o.TS.LANGUAGE, !1),
            [Pe, Te] = p.useState(0),
            [Xe, _e] = p.useState(0),
            { data: re } = (0, He.F0)();
          p.useEffect(() => {
            U &&
              !Me &&
              re &&
              N.Fm.Get()
                .HintLoad()
                .then(() => {
                  l.aI
                    .Get()
                    .LoadSkippedApps(f, O)
                    .then((Se) => {
                      Te(Se.reduce((Ge, At) => (re.has(At) ? Ge + 1 : Ge), 0)),
                        _e(
                          Se.reduce(
                            (Ge, At) =>
                              N.Fm.Get().BIsGameIgnored(At) ? Ge + 1 : Ge,
                            0,
                          ),
                        ),
                        ye(!0);
                    });
                });
          }, [Me, f, U, O, re]);
          const [ve, he] = p.useState(!1),
            le = (0, l.IH)(f, O),
            xe = (0, I.m)("DiscoveryQueueSummary"),
            lt = async () => {
              if (!F) {
                pe();
                return;
              }
              ve || (he(!0), await te(), xe?.token?.reason || he(!1));
            };
          return (0, t.jsxs)(ut, {
            selected: U,
            fnFocused: Be,
            fnOnContinue: lt,
            fnCloseModal: h,
            bLoaded: Me,
            children: [
              (0, t.jsxs)("div", {
                className: c().SummaryContentCtn,
                children: [
                  (0, t.jsx)("div", {
                    className: c().SummaryTitle,
                    children: (0, i.we)("#DiscoveryQueue_SummaryTitle"),
                  }),
                  !le &&
                    U &&
                    Le.data?.definition &&
                    (0, t.jsx)(ht, {
                      bSkipAppRequestPending: Oe,
                      summaryCardIdx: E,
                    }),
                  (0, t.jsx)("div", {
                    className: c().YourStats,
                    children: (0, i.we)("#DiscoveryQueue_YourStats"),
                  }),
                  (0, t.jsxs)(d.Z, {
                    "flow-children": "row",
                    className: c().SummaryGrid,
                    children: [
                      (0, t.jsxs)("div", {
                        className: c().GridItem,
                        children: [
                          (0, t.jsx)("div", {
                            className: c().GridTitle,
                            children: (0, i.we)("#DiscoveryQueue_ViewedCaps"),
                          }),
                          (0, t.jsx)("div", {
                            className: c().GridNumber,
                            children: (0, Ue.D)(fe),
                          }),
                          (0, t.jsx)("div", {
                            className: c().GridSubTitle,
                            children: (0, i.we)("#DiscoveryQueue_Titles"),
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: c().GridItem,
                        children: [
                          (0, t.jsx)("div", {
                            className: c().GridTitle,
                            children: (0, i.we)(
                              "#DiscoveryQueue_WishlistedCaps",
                            ),
                          }),
                          (0, t.jsx)("div", {
                            className: c().GridNumber,
                            children: (0, Ue.D)(Pe),
                          }),
                          (0, t.jsx)(D.Fh, {
                            className: (0, W.A)(c().GridSubTitle, c().TextLink),
                            href: (0, se.NT)(o.TS.STORE_BASE_URL + "wishlist"),
                            children: (0, i.we)("#DiscoveryQueue_ViewWishlist"),
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: c().GridItem,
                        children: [
                          (0, t.jsx)("div", {
                            className: c().GridTitle,
                            children: (0, i.we)("#DiscoveryQueue_IgnoredCaps"),
                          }),
                          (0, t.jsx)("div", {
                            className: c().GridNumber,
                            children: (0, Ue.D)(Xe),
                          }),
                          (0, t.jsx)(D.Fh, {
                            className: (0, W.A)(c().GridSubTitle, c().TextLink),
                            href: (0, se.NT)(
                              o.TS.STORE_BASE_URL + "account/notinterested",
                            ),
                            children: (0, i.we)("#DiscoveryQueue_ViewIgnored"),
                          }),
                        ],
                      }),
                    ],
                  }),
                  !Ce &&
                    (0, t.jsxs)(d.Z, {
                      className: c().SummaryActionButtonsCtn,
                      children: [
                        (0, t.jsx)(d.Z, {
                          className: (0, W.A)(c().QueueButton, c().Wide),
                          onClick: h,
                          children: (0, i.we)("#ActionButtonLabelDone"),
                        }),
                        !le &&
                          (0, t.jsx)(d.Z, {
                            className: (0, W.A)(
                              ve && c().Disabled,
                              c().QueueButton,
                              c().Primary,
                              c().Wide,
                            ),
                            onClick: lt,
                            children: ve
                              ? (0, i.we)("#Loading")
                              : (0, i.we)("#Button_Continue"),
                          }),
                      ],
                    }),
                ],
              }),
              !le && (0, t.jsx)(t.Fragment, { children: !!q && q(E + 1) }),
            ],
          });
        }
        function ut(C) {
          const {
              children: f,
              selected: h,
              fnOnContinue: E,
              fnCloseModal: F,
              fnFocused: U,
              bLoaded: te,
            } = C,
            O = (0, D.aL)(o.TS.STORE_BASE_URL + "wishlist"),
            fe = (0, L.R7)()?.ownerWindow || window,
            Be = () => {
              fe.location.href = (0, se.NT)(O);
            },
            pe = p.useRef(void 0);
          return (
            p.useEffect(() => {
              h && pe.current && pe.current.focus({ preventScroll: !0 });
            }, [h]),
            (0, t.jsx)(r.YZ, {
              ref: pe,
              "aria-live": "polite",
              className: (0, W.A)(
                c().SummaryCtn,
                c().DiscoveryQueueApp,
                h && c().Selected,
              ),
              onOptionsActionDescription: (0, i.we)(
                "#DiscoveryQueue_ViewWishlist",
              ),
              onOptionsButton: Be,
              onOKActionDescription: (0, i.we)("#Button_Continue"),
              onOKButton: () => {
                E();
              },
              onCancelActionDescription: (0, i.we)("#ActionButtonLabelDone"),
              onCancelButton: () => F && F(),
              fnScrollIntoViewHandler: () => (U(), !0),
              children: te
                ? f
                : (0, t.jsx)(T.t, {
                    className: c().DiscoveryQueueThrobber,
                    msDelayAppear: 200,
                    size: "large",
                    position: "center",
                  }),
            })
          );
        }
        function rt() {
          return (0, t.jsx)(d.Z, {
            className: c().SaleRewardsCtn,
            children: (0, t.jsx)(T.t, { size: "large", position: "center" }),
          });
        }
        function ht(C) {
          const { bSkipAppRequestPending: f, summaryCardIdx: h } = C;
          return f ? (0, t.jsx)(rt, {}) : (0, t.jsx)(at, { summaryCardIdx: h });
        }
        function at(C) {
          const { summaryCardIdx: f } = C,
            h = (0, z.os)(V.L6.Jz, o.TS.LANGUAGE, !1, f.toString()),
            [E] = (0, Z.t7)(h?.data?.current_def?.appid, {}),
            F = (0, o.Qn)();
          if (!h?.data?.current_def || !E?.GetName().length)
            return (0, t.jsx)(rt, {});
          const U = h.data.num_items_earned,
            te = h.data.current_def.num_items_per_def,
            O = te - U,
            q = (U / te) * 100;
          return (0, t.jsxs)(d.Z, {
            className: c().SaleRewardsCtn,
            children: [
              (0, t.jsx)(v, { nPercent: q, size: 70, strokeWidth: 12 }),
              (0, t.jsxs)(d.Z, {
                className: c().RewardStatusCtn,
                children: [
                  (0, t.jsx)("div", {
                    className: c().SaleRewardAppTitle,
                    children: (0, i.we)(
                      `#DiscoveryQueue_SaleStatus_Title${O ? "" : "_Complete"}`,
                      (0, Ue.D)(U),
                      E.GetName(),
                    ),
                  }),
                  O > 0 &&
                    (0, t.jsx)("div", {
                      className: c().SaleRewardAppTitle,
                      children: (0, i.we)(
                        "#DiscoveryQueue_SaleStatus_Desc",
                        (0, Ue.D)(O),
                        E.GetName(),
                      ),
                    }),
                  !F &&
                    (0, t.jsx)("a", {
                      href: (0, se.NT)(
                        o.TS.COMMUNITY_BASE_URL + "my/itemcollection",
                      ),
                      children: (0, i.we)("#DiscoveryQueue_SaleStatus_Link"),
                    }),
                ],
              }),
            ],
          });
        }
      },
      6778: (ee, J, e) => {
        "use strict";
        e.d(J, { G: () => G });
        var t = e(90626),
          p = e(68312),
          A = e(57810),
          d = e(6469),
          r = e(98609);
        function G() {
          const [V, Y] = (0, t.useState)(!r.iA.logged_in),
            [K] = (0, d.L2)(),
            b = (0, p.KV)();
          return (
            (0, t.useEffect)(() => {
              V || (A.aI.Init(b), Y(!0));
            }, [V, b]),
            V && !K
          );
        }
      },
      24245: (ee, J, e) => {
        "use strict";
        e.d(J, { A: () => G });
        var t = e(7850),
          p = e(25599),
          A = e.n(p),
          d = e(19298),
          r = e(36707);
        function G(V) {
          const {
            className: Y,
            showPriorAsActive: K,
            count: b,
            selectedIndex: D,
            fnNavigate: L,
          } = V;
          return (0, t.jsx)(d.Z, {
            "flow-children": "row",
            className: (0, r.A)(A().ProgressCtn, Y),
            children: Array.from({ length: b }).map((N, z) =>
              (0, t.jsx)(
                "div",
                {
                  className: (0, r.A)({
                    [A().ProgressDot]: !0,
                    [A().ProgressDotActive]: K && z < D,
                    [A().ProgressDotSelected]: z == D,
                    [A().ProgressDotClickable]: !!L,
                  }),
                  onClick: L ? () => L(z) : void 0,
                },
                "dot_" + z,
              ),
            ),
          });
        }
      },
      10739: (ee, J, e) => {
        "use strict";
        e.r(J), e.d(J, { default: () => r });
        var t = e(7850),
          p = e(55051),
          A = e(90405),
          d = e(6394);
        function r() {
          return (0, t.jsx)(A.K, {
            placeholderHeight: "200px",
            rootMargin: "0px 0px 100% 0px",
            children: (0, t.jsx)(d.g, { eStoreDiscoveryQueueType: p.QV.qy }),
          });
        }
      },
      99783: (ee, J, e) => {
        "use strict";
        e.r(J), e.d(J, { default: () => D });
        var t = e(7850),
          p = e(90626),
          A = e(55051),
          d = e(18210),
          r = e(6778),
          G = e(19298),
          V = e(3166),
          Y = e(96538),
          K = e(88003),
          b = e(85742);
        function D(L) {
          const N = (0, r.G)(),
            { showDiscoveryQueue: z } = (0, b.GV)(A.QV.qy),
            X = p.useCallback(() => {
              V.iA.logged_in
                ? z()
                : (0, K.pg)(
                    (0, t.jsx)(Y.KG, {
                      onOK: () => {
                        window.location.href = `${V.TS.STORE_BASE_URL}login?redir=${encodeURIComponent(document.location.href)}`;
                      },
                      strOKButtonText: (0, d.we)(
                        "#DiscoveryQueue_Error_Login_Title",
                      ),
                      strDescription: (0, d.we)("#DiscoveryQueue_Error_Login"),
                      strTitle: (0, d.we)("#DiscoveryQueue_Error_Login_Title"),
                    }),
                    window,
                  );
            }, [z]);
          return N
            ? (0, t.jsx)(G.Z, {
                children: (0, t.jsx)("a", {
                  onClick: X,
                  className: "experiment-button",
                  children: (0, d.we)("#DiscoveryQueue_OpenWizard"),
                }),
              })
            : (0, t.jsx)("div", {
                className: "experiment-button-placeholder",
                children: "\xA0",
              });
        }
      },
      83581: (ee) => {
        ee.exports = {
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
      36054: (ee) => {
        ee.exports = {
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
      56649: (ee) => {
        ee.exports = {
          "duration-app-launch": "800ms",
          DiscoveryQueueWidgetCtn: "_2H-U0RGd3Y9d6UKdhsGJgZ",
          WidgetText: "-B2PBNVH5puz13sQ8u0Qv",
          WidgetCapsule: "_1Bk7kRLnGpX5NKJgUqayYy",
          CloseButton: "VqFB0E0yCOFJ7UdleH5Nl",
          Y: "_31u523-OYDU23urGjLmZMv",
          BackgroundAnimation: "_1Xi-pSFWHdnqUZoL9mamhN",
          "ItemFocusAnim-darkerGrey-nocolor": "_30Zb423phvCDs3xM0hkaEE",
          "ItemFocusAnim-darkerGrey": "_1Mo4iXhlaRXgVjaGtq25YK",
          "ItemFocusAnim-darkGreySettings": "_2aBd-VP3SEE24KKFVyFsXv",
          "ItemFocusAnim-darkGrey": "_1D2t7t4aiQ0ispLkkxifr6",
          "ItemFocusAnim-grey": "_1xesYd5e59XN1JMVEsnIMY",
          "ItemFocusAnim-translucent-white-10": "_3z6L5JKa2Pwmh3aybbPsQa",
          "ItemFocusAnim-translucent-white-20": "_2q3ozadFkqcmuym9HPNbMO",
          "ItemFocusAnimBorder-darkGrey": "_1_c11GGKP0higc2_MkDCPO",
          "ItemFocusAnim-green": "_2-IPzUY6n_ibf285Pd6tDB",
          focusAnimation: "_39M5pNzI36diq2nKXni--u",
          hoverAnimation: "-rg5cQ0xDoWfXZW4k4Rug",
        };
      },
      15830: (ee) => {
        ee.exports = {
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
      43047: (ee) => {
        ee.exports = {
          narrowWidth: "500px",
          avatarHolder: "nibodjvvrm86uCfnnAn4g",
          avatarStatus: "_3xUpb5DWXPFNcHHIcv-9pe",
          avatar: "_3h-QRJGxnVOIExtHD1R0f2",
          avatarFrame: "X_mJE4BYV5StDPwZhSiAu",
          avatarFrameImg: "_3fM0F85j3aWVzr4RJM9-eu",
        };
      },
      40594: (ee) => {
        ee.exports = {
          ProgressBar: "_3szjUMH5QeRwtXAsLRcWt9",
          AnimateProgress: "_3DjdoQj5NoknowwV5t5JPN",
          loadingBarAnim: "_2SA1xV5w3BGirkDWosGYoX",
          Indeterminate: "_3G7KLhFOuTiHW-fGxtWtRs",
          Circular: "_3wMS41OoTPnZyEddTVwzy_",
          Full: "_3t_UEZDy1QxxcYfn3TTvD2",
        };
      },
      71477: (ee) => {
        ee.exports = {
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
      57834: (ee) => {
        ee.exports = {
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
      25599: (ee) => {
        ee.exports = {
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
    },
  ]);
})();
