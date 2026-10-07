/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [65050],
    {
      23386: (L, x, p) => {
        p.d(x, {
          EL: () => k,
          Ed: () => J,
          J4: () => m,
          Tl: () => z,
          jE: () => A,
          sU: () => i,
          u8: () => n,
          wK: () => B,
          xi: () => b,
          xw: () => y,
          yZ: () => M,
          zs: () => u,
        });
        const k = 0,
          n = 1,
          c = 2,
          i = 3,
          m = 4,
          N = 5,
          o = 6,
          Q = 7,
          A = 8,
          K = 9,
          Z = 10,
          J = 11,
          B = 12,
          u = 13,
          b = 14,
          y = 15,
          M = 16,
          z = 17;
      },
      7112: (L, x, p) => {
        p.d(x, { c3: () => M, wt: () => b, L6: () => k, Qm: () => P });
        var k = {};
        p.r(k), p.d(k, { Jz: () => K });
        var n = p(80613),
          c = p.n(n),
          i = p(75245),
          m = p(35038),
          N = p(49288);
        class o extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              o.prototype.item_type || i.Sg(o.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              o.sm_m ||
                (o.sm_m = {
                  proto: o,
                  fields: {
                    item_type: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    appid: { n: 2, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    item_name: {
                      n: 3,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    item_title: {
                      n: 4,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    item_description: {
                      n: 5,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    item_image_small: {
                      n: 6,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    item_image_large: {
                      n: 7,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    item_key_values: {
                      n: 8,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    item_series: {
                      n: 9,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    item_class: {
                      n: 10,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    editor_accountid: {
                      n: 11,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    active: { n: 12, br: i.qM.readBool, bw: i.gp.writeBool },
                    item_image_composed: {
                      n: 13,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    item_image_composed_foil: {
                      n: 14,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    deleted: { n: 15, br: i.qM.readBool, bw: i.gp.writeBool },
                    item_last_changed: {
                      n: 16,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    broadcast_channel_id: {
                      n: 17,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    item_movie_webm: {
                      n: 18,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    item_movie_mp4: {
                      n: 19,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    item_movie_webm_small: {
                      n: 20,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    item_movie_mp4_small: {
                      n: 21,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    item_internal_name: {
                      n: 22,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              o.sm_m
            );
          }
          static MBF() {
            return o.sm_mbf || (o.sm_mbf = i.w0(o.M())), o.sm_mbf;
          }
          toObject(r = !1) {
            return o.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(o.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(o.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (c().BinaryReader)(r),
              s = new o();
            return o.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(o.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return o.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(o.M(), r, t);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              o.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CommunityItemDefinition";
          }
        }
        const Q = 0,
          A = 1,
          K = 2;
        function Z(E) {
          return "unknown ESaleRewardDefType ( " + E + " )";
        }
        function J(E) {
          return "unknown ERewardDefinitionsAction ( " + E + " )";
        }
        class B extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              B.prototype.appid || i.Sg(B.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              B.sm_m ||
                (B.sm_m = {
                  proto: B,
                  fields: {
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    community_item_type: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    community_item_class: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    community_definition: { n: 4, c: o },
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
            let t = new (c().BinaryReader)(r),
              s = new B();
            return B.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(B.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return B.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(B.M(), r, t);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              B.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "SaleReward_ItemDefinition";
          }
        }
        class u extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              u.prototype.communityitemid || i.Sg(u.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              u.sm_m ||
                (u.sm_m = {
                  proto: u,
                  fields: {
                    communityitemid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    time_granted: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    item_definition: { n: 3, c: B },
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
            let t = new (c().BinaryReader)(r),
              s = new u();
            return u.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(u.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return u.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(u.M(), r, t);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              u.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "SaleItemRewardGrant";
          }
        }
        class b extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              b.prototype.language || i.Sg(b.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              b.sm_m ||
                (b.sm_m = {
                  proto: b,
                  fields: {
                    language: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              b.sm_m
            );
          }
          static MBF() {
            return b.sm_mbf || (b.sm_mbf = i.w0(b.M())), b.sm_mbf;
          }
          toObject(r = !1) {
            return b.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(b.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(b.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (c().BinaryReader)(r),
              s = new b();
            return b.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(b.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return b.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(b.M(), r, t);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              b.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleItemRewards_ClaimItem_Request";
          }
        }
        class y extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              y.prototype.communityitemid || i.Sg(y.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              y.sm_m ||
                (y.sm_m = {
                  proto: y,
                  fields: {
                    communityitemid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    next_claim_time: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    reward_item: { n: 3, c: N.l3 },
                  },
                }),
              y.sm_m
            );
          }
          static MBF() {
            return y.sm_mbf || (y.sm_mbf = i.w0(y.M())), y.sm_mbf;
          }
          toObject(r = !1) {
            return y.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(y.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(y.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (c().BinaryReader)(r),
              s = new y();
            return y.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(y.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return y.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(y.M(), r, t);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              y.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleItemRewards_ClaimItem_Response";
          }
        }
        class M extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              M.prototype.language || i.Sg(M.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              M.sm_m ||
                (M.sm_m = {
                  proto: M,
                  fields: {
                    language: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
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
            let t = new (c().BinaryReader)(r),
              s = new M();
            return M.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(M.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return M.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(M.M(), r, t);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              M.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleItemRewards_CanClaimItem_Request";
          }
        }
        class z extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              z.prototype.can_claim || i.Sg(z.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              z.sm_m ||
                (z.sm_m = {
                  proto: z,
                  fields: {
                    can_claim: { n: 1, br: i.qM.readBool, bw: i.gp.writeBool },
                    next_claim_time: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    reward_item: { n: 3, c: N.l3 },
                  },
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
            let t = new (c().BinaryReader)(r),
              s = new z();
            return z.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(z.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return z.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(z.M(), r, t);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              z.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleItemRewards_CanClaimItem_Response";
          }
        }
        class g extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              g.prototype.sale_reward_def_id || i.Sg(g.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              g.sm_m ||
                (g.sm_m = {
                  proto: g,
                  fields: {
                    sale_reward_def_id: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    appid: { n: 2, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    virtual_item_reward_event_id: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    rtime_start_time: {
                      n: 4,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    rtime_end_time: {
                      n: 5,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    num_items_per_def: {
                      n: 6,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    reward_def_type: {
                      n: 7,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                  },
                }),
              g.sm_m
            );
          }
          static MBF() {
            return g.sm_mbf || (g.sm_mbf = i.w0(g.M())), g.sm_mbf;
          }
          toObject(r = !1) {
            return g.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(g.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(g.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (c().BinaryReader)(r),
              s = new g();
            return g.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(g.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return g.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(g.M(), r, t);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              g.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamItemRewardDefinition";
          }
        }
        class f extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              f.prototype.virtual_item_reward_event_id || i.Sg(f.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              f.sm_m ||
                (f.sm_m = {
                  proto: f,
                  fields: {
                    virtual_item_reward_event_id: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
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
            let t = new (c().BinaryReader)(r),
              s = new f();
            return f.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(f.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return f.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(f.M(), r, t);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              f.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleItemRewards_GetRewardDefinitions_Request";
          }
        }
        class a extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              a.prototype.definitions || i.Sg(a.M()),
              n.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              a.sm_m ||
                (a.sm_m = {
                  proto: a,
                  fields: { definitions: { n: 1, c: g, r: !0, q: !0 } },
                }),
              a.sm_m
            );
          }
          static MBF() {
            return a.sm_mbf || (a.sm_mbf = i.w0(a.M())), a.sm_mbf;
          }
          toObject(r = !1) {
            return a.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(a.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(a.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (c().BinaryReader)(r),
              s = new a();
            return a.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(a.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return a.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(a.M(), r, t);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              a.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleItemRewards_GetRewardDefinitions_Response";
          }
        }
        class j extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              j.prototype.definitions || i.Sg(j.M()),
              n.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              j.sm_m ||
                (j.sm_m = {
                  proto: j,
                  fields: {
                    definitions: { n: 1, c: g, r: !0, q: !0 },
                    action: { n: 2, br: i.qM.readEnum, bw: i.gp.writeEnum },
                  },
                }),
              j.sm_m
            );
          }
          static MBF() {
            return j.sm_mbf || (j.sm_mbf = i.w0(j.M())), j.sm_mbf;
          }
          toObject(r = !1) {
            return j.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(j.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(j.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (c().BinaryReader)(r),
              s = new j();
            return j.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(j.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return j.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(j.M(), r, t);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              j.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleItemRewards_SetRewardDefinitions_Request";
          }
        }
        class W extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              W.prototype.definitions || i.Sg(W.M()),
              n.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              W.sm_m ||
                (W.sm_m = {
                  proto: W,
                  fields: { definitions: { n: 1, c: g, r: !0, q: !0 } },
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
            let t = new (c().BinaryReader)(r),
              s = new W();
            return W.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(W.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return W.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(W.M(), r, t);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              W.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleItemRewards_SetRewardDefinitions_Response";
          }
        }
        class h extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              h.prototype.sale_def_type || i.Sg(h.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              h.sm_m ||
                (h.sm_m = {
                  proto: h,
                  fields: {
                    sale_def_type: {
                      n: 1,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    language: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    include_community_item_def: {
                      n: 3,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
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
            let t = new (c().BinaryReader)(r),
              s = new h();
            return h.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(h.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return h.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(h.M(), r, t);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              h.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleItemRewards_GetClaimedSaleRewards_Request";
          }
        }
        class T extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              T.prototype.num_items_granted || i.Sg(T.M()),
              n.Message.initialize(this, r, 0, -1, [4], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              T.sm_m ||
                (T.sm_m = {
                  proto: T,
                  fields: {
                    num_items_granted: {
                      n: 1,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                    num_items_earned: {
                      n: 2,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                    current_def: { n: 3, c: g },
                    reward_items: { n: 4, c: u, r: !0, q: !0 },
                  },
                }),
              T.sm_m
            );
          }
          static MBF() {
            return T.sm_mbf || (T.sm_mbf = i.w0(T.M())), T.sm_mbf;
          }
          toObject(r = !1) {
            return T.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(T.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(T.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (c().BinaryReader)(r),
              s = new T();
            return T.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(T.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return T.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(T.M(), r, t);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              T.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleItemRewards_GetClaimedSaleRewards_Response";
          }
        }
        class l extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              l.prototype.sale_def_type || i.Sg(l.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              l.sm_m ||
                (l.sm_m = {
                  proto: l,
                  fields: {
                    sale_def_type: {
                      n: 1,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    language: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    include_community_item_def: {
                      n: 3,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                  },
                }),
              l.sm_m
            );
          }
          static MBF() {
            return l.sm_mbf || (l.sm_mbf = i.w0(l.M())), l.sm_mbf;
          }
          toObject(r = !1) {
            return l.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(l.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(l.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (c().BinaryReader)(r),
              s = new l();
            return l.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(l.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return l.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(l.M(), r, t);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              l.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleItemRewards_GetCurrentDefinition_Request";
          }
        }
        class v extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              v.prototype.definition || i.Sg(v.M()),
              n.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              v.sm_m ||
                (v.sm_m = {
                  proto: v,
                  fields: {
                    definition: { n: 1, c: g },
                    reward_items: { n: 2, c: B, r: !0, q: !0 },
                  },
                }),
              v.sm_m
            );
          }
          static MBF() {
            return v.sm_mbf || (v.sm_mbf = i.w0(v.M())), v.sm_mbf;
          }
          toObject(r = !1) {
            return v.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(v.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(v.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (c().BinaryReader)(r),
              s = new v();
            return v.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(v.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (c().BinaryWriter)();
            return v.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(v.M(), r, t);
          }
          serializeBase64String() {
            var r = new (c().BinaryWriter)();
            return (
              v.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleItemRewards_GetCurrentDefinition_Response";
          }
        }
        var P;
        ((E) => {
          function r(F, O, U) {
            return F.SendMsg(
              "SaleItemRewards.ClaimItem#1",
              (0, m.I8)(b, O, U),
              y,
              { ePrivilege: 1 },
            );
          }
          E.ClaimItem = r;
          function t(F, O, U) {
            return F.SendMsg(
              "SaleItemRewards.CanClaimItem#1",
              (0, m.I8)(M, O, U),
              z,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          E.CanClaimItem = t;
          function s(F, O, U) {
            return F.SendMsg(
              "SaleItemRewards.GetRewardDefinitions#1",
              (0, m.I8)(f, O, U),
              a,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          }
          E.GetRewardDefinitions = s;
          function H(F, O, U) {
            return F.SendMsg(
              "SaleItemRewards.SetRewardDefinitions#1",
              (0, m.I8)(j, O, U),
              W,
              { ePrivilege: 4 },
            );
          }
          E.SetRewardDefinitions = H;
          function V(F, O, U) {
            return F.SendMsg(
              "SaleItemRewards.GetClaimedSaleRewards#1",
              (0, m.I8)(h, O, U),
              T,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          E.GetClaimedSaleRewards = V;
          function X(F, O, U) {
            return F.SendMsg(
              "SaleItemRewards.GetCurrentDefinition#1",
              (0, m.I8)(l, O, U),
              v,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          E.GetCurrentDefinition = X;
        })(P || (P = {}));
      },
    },
  ]);
})();
