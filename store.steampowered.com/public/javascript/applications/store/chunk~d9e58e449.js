/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [88943],
    {
      31224: (Q, x, O) => {
        O.d(x, {
          fp: () => B,
          cU: () => n,
          RG: () => g,
          oT: () => k,
          f$: () => v,
          uy: () => E,
        });
        var k = {};
        O.r(k),
          O.d(k, {
            XR: () => K,
            x7: () => $,
            Bc: () => V,
            xJ: () => Y,
            QB: () => N,
            Bk: () => o,
            Ou: () => q,
            r: () => L,
            PQ: () => P,
            W: () => J,
            LK: () => A,
            zE: () => X,
            mj: () => H,
            hK: () => Z,
          });
        var v = {};
        O.r(v), O.d(v, { rg: () => G, kE: () => D });
        var t = O(80613),
          e = O.n(t),
          a = O(75245),
          m = O(35038);
        const C = 0,
          K = 1,
          $ = 2,
          L = 3,
          H = 4,
          J = 5,
          X = 6,
          Y = 7,
          Z = 8,
          o = 9,
          P = 10,
          N = 11,
          A = 12,
          q = 13,
          V = 14,
          _ = 0,
          G = 1,
          D = 2;
        function rr(c) {
          return "unknown EVirtualItemRewardEvent ( " + c + " )";
        }
        function ar(c) {
          return "unknown EVirtualItemRewardRarity ( " + c + " )";
        }
        function ir(c) {
          return "unknown EGameCardDropMethod ( " + c + " )";
        }
        function er(c) {
          return "unknown ECommunityItemSalienType ( " + c + " )";
        }
        function tr(c) {
          return "unknown ECommunityItemDropRate ( " + c + " )";
        }
        function lr(c) {
          return "unknown ECommunityItemAttribute ( " + c + " )";
        }
        function cr(c) {
          return "unknown ECommunityItemApprovalState ( " + c + " )";
        }
        function nr(c) {
          return "unknown ETradabilityPreference ( " + c + " )";
        }
        function gr(c) {
          return "unknown ESummerSale2017TaskType ( " + c + " )";
        }
        function Br(c) {
          return "unknown EWinterSale2015ARGBadge ( " + c + " )";
        }
        function br(c) {
          return "unknown ESummerSale2021Genre ( " + c + " )";
        }
        function sr(c) {
          return "unknown ESummerSale2021StoryChoice ( " + c + " )";
        }
        class s extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              s.prototype.communityitemid || a.Sg(s.M()),
              t.Message.initialize(this, r, 0, -1, [5], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              s.sm_m ||
                (s.sm_m = {
                  proto: s,
                  fields: {
                    communityitemid: {
                      n: 1,
                      br: a.qM.readUint64String,
                      bw: a.gp.writeUint64String,
                    },
                    item_type: {
                      n: 2,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    appid: { n: 3, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                    owner: { n: 4, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                    attributes: { n: 5, c: M, r: !0, q: !0 },
                    used: { n: 6, br: a.qM.readBool, bw: a.gp.writeBool },
                    owner_origin: {
                      n: 7,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    amount: {
                      n: 8,
                      br: a.qM.readInt64String,
                      bw: a.gp.writeInt64String,
                    },
                  },
                }),
              s.sm_m
            );
          }
          static MBF() {
            return s.sm_mbf || (s.sm_mbf = a.w0(s.M())), s.sm_mbf;
          }
          toObject(r = !1) {
            return s.toObject(r, this);
          }
          static toObject(r, i) {
            return a.BT(s.M(), r, i);
          }
          static fromObject(r) {
            return a.Uq(s.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              l = new s();
            return s.deserializeBinaryFromReader(l, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return a.zj(s.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return s.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            a.i0(s.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              s.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CQuest_CommunityItem";
          }
        }
        class M extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              M.prototype.attributeid || a.Sg(M.M()),
              t.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              M.sm_m ||
                (M.sm_m = {
                  proto: M,
                  fields: {
                    attributeid: {
                      n: 1,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    value: {
                      n: 2,
                      br: a.qM.readUint64String,
                      bw: a.gp.writeUint64String,
                    },
                  },
                }),
              M.sm_m
            );
          }
          static MBF() {
            return M.sm_mbf || (M.sm_mbf = a.w0(M.M())), M.sm_mbf;
          }
          toObject(r = !1) {
            return M.toObject(r, this);
          }
          static toObject(r, i) {
            return a.BT(M.M(), r, i);
          }
          static fromObject(r) {
            return a.Uq(M.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              l = new M();
            return M.deserializeBinaryFromReader(l, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return a.zj(M.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return M.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            a.i0(M.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              M.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CQuest_CommunityItem_Attribute";
          }
        }
        class n extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              n.prototype.filter_appids || a.Sg(n.M()),
              t.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              n.sm_m ||
                (n.sm_m = {
                  proto: n,
                  fields: {
                    filter_appids: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: a.qM.readUint32,
                      pbr: a.qM.readPackedUint32,
                      bw: a.gp.writeRepeatedUint32,
                    },
                  },
                }),
              n.sm_m
            );
          }
          static MBF() {
            return n.sm_mbf || (n.sm_mbf = a.w0(n.M())), n.sm_mbf;
          }
          toObject(r = !1) {
            return n.toObject(r, this);
          }
          static toObject(r, i) {
            return a.BT(n.M(), r, i);
          }
          static fromObject(r) {
            return a.Uq(n.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              l = new n();
            return n.deserializeBinaryFromReader(l, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return a.zj(n.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return n.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            a.i0(n.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              n.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CQuest_GetCommunityInventory_Request";
          }
        }
        class w extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              w.prototype.items || a.Sg(w.M()),
              t.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              w.sm_m ||
                (w.sm_m = {
                  proto: w,
                  fields: { items: { n: 1, c: s, r: !0, q: !0 } },
                }),
              w.sm_m
            );
          }
          static MBF() {
            return w.sm_mbf || (w.sm_mbf = a.w0(w.M())), w.sm_mbf;
          }
          toObject(r = !1) {
            return w.toObject(r, this);
          }
          static toObject(r, i) {
            return a.BT(w.M(), r, i);
          }
          static fromObject(r) {
            return a.Uq(w.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              l = new w();
            return w.deserializeBinaryFromReader(l, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return a.zj(w.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return w.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            a.i0(w.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              w.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CQuest_GetCommunityInventory_Response";
          }
        }
        class g extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              g.prototype.appid || a.Sg(g.M()),
              t.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              g.sm_m ||
                (g.sm_m = {
                  proto: g,
                  fields: {
                    appid: { n: 1, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                    item_type: {
                      n: 3,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    language: {
                      n: 4,
                      br: a.qM.readString,
                      bw: a.gp.writeString,
                    },
                    broadcast_channel_id: {
                      n: 5,
                      br: a.qM.readUint64String,
                      bw: a.gp.writeUint64String,
                    },
                    keyvalues_as_json: {
                      n: 6,
                      br: a.qM.readBool,
                      bw: a.gp.writeBool,
                    },
                  },
                }),
              g.sm_m
            );
          }
          static MBF() {
            return g.sm_mbf || (g.sm_mbf = a.w0(g.M())), g.sm_mbf;
          }
          toObject(r = !1) {
            return g.toObject(r, this);
          }
          static toObject(r, i) {
            return a.BT(g.M(), r, i);
          }
          static fromObject(r) {
            return a.Uq(g.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              l = new g();
            return g.deserializeBinaryFromReader(l, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return a.zj(g.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return g.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            a.i0(g.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              g.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CQuest_GetCommunityItemDefinitions_Request";
          }
        }
        class S extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              S.prototype.item_definitions || a.Sg(S.M()),
              t.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              S.sm_m ||
                (S.sm_m = {
                  proto: S,
                  fields: { item_definitions: { n: 1, c: z, r: !0, q: !0 } },
                }),
              S.sm_m
            );
          }
          static MBF() {
            return S.sm_mbf || (S.sm_mbf = a.w0(S.M())), S.sm_mbf;
          }
          toObject(r = !1) {
            return S.toObject(r, this);
          }
          static toObject(r, i) {
            return a.BT(S.M(), r, i);
          }
          static fromObject(r) {
            return a.Uq(S.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              l = new S();
            return S.deserializeBinaryFromReader(l, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return a.zj(S.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return S.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            a.i0(S.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              S.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CQuest_GetCommunityItemDefinitions_Response";
          }
        }
        class z extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              z.prototype.item_type || a.Sg(z.M()),
              t.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              z.sm_m ||
                (z.sm_m = {
                  proto: z,
                  fields: {
                    item_type: {
                      n: 1,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    appid: { n: 2, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                    item_name: {
                      n: 3,
                      br: a.qM.readString,
                      bw: a.gp.writeString,
                    },
                    item_title: {
                      n: 4,
                      br: a.qM.readString,
                      bw: a.gp.writeString,
                    },
                    item_description: {
                      n: 5,
                      br: a.qM.readString,
                      bw: a.gp.writeString,
                    },
                    item_image_small: {
                      n: 6,
                      br: a.qM.readString,
                      bw: a.gp.writeString,
                    },
                    item_image_large: {
                      n: 7,
                      br: a.qM.readString,
                      bw: a.gp.writeString,
                    },
                    item_key_values: {
                      n: 8,
                      br: a.qM.readString,
                      bw: a.gp.writeString,
                    },
                    item_series: {
                      n: 9,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    item_class: {
                      n: 10,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    editor_accountid: {
                      n: 11,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    active: { n: 12, br: a.qM.readBool, bw: a.gp.writeBool },
                    item_image_composed: {
                      n: 13,
                      br: a.qM.readString,
                      bw: a.gp.writeString,
                    },
                    item_image_composed_foil: {
                      n: 14,
                      br: a.qM.readString,
                      bw: a.gp.writeString,
                    },
                    deleted: { n: 15, br: a.qM.readBool, bw: a.gp.writeBool },
                    item_last_changed: {
                      n: 16,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    broadcast_channel_id: {
                      n: 17,
                      br: a.qM.readUint64String,
                      bw: a.gp.writeUint64String,
                    },
                    item_movie_webm: {
                      n: 18,
                      br: a.qM.readString,
                      bw: a.gp.writeString,
                    },
                    item_movie_mp4: {
                      n: 19,
                      br: a.qM.readString,
                      bw: a.gp.writeString,
                    },
                    item_movie_webm_small: {
                      n: 20,
                      br: a.qM.readString,
                      bw: a.gp.writeString,
                    },
                    item_movie_mp4_small: {
                      n: 21,
                      br: a.qM.readString,
                      bw: a.gp.writeString,
                    },
                    item_internal_name: {
                      n: 22,
                      br: a.qM.readString,
                      bw: a.gp.writeString,
                    },
                  },
                }),
              z.sm_m
            );
          }
          static MBF() {
            return z.sm_mbf || (z.sm_mbf = a.w0(z.M())), z.sm_mbf;
          }
          toObject(r = !1) {
            return z.toObject(r, this);
          }
          static toObject(r, i) {
            return a.BT(z.M(), r, i);
          }
          static fromObject(r) {
            return a.Uq(z.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              l = new z();
            return z.deserializeBinaryFromReader(l, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return a.zj(z.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return z.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            a.i0(z.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              z.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CQuest_GetCommunityItemDefinitions_Response_ItemDefinition";
          }
        }
        class B extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              B.prototype.appid || a.Sg(B.M()),
              t.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              B.sm_m ||
                (B.sm_m = {
                  proto: B,
                  fields: {
                    appid: { n: 1, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                    communityitemid: {
                      n: 2,
                      br: a.qM.readUint64String,
                      bw: a.gp.writeUint64String,
                    },
                    activate: { n: 3, br: a.qM.readBool, bw: a.gp.writeBool },
                  },
                }),
              B.sm_m
            );
          }
          static MBF() {
            return B.sm_mbf || (B.sm_mbf = a.w0(B.M())), B.sm_mbf;
          }
          toObject(r = !1) {
            return B.toObject(r, this);
          }
          static toObject(r, i) {
            return a.BT(B.M(), r, i);
          }
          static fromObject(r) {
            return a.Uq(B.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              l = new B();
            return B.deserializeBinaryFromReader(l, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return a.zj(B.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return B.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            a.i0(B.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              B.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CQuest_ActivateProfileModifierItem_Request";
          }
        }
        class F extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), t.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return F.toObject(r, this);
          }
          static toObject(r, i) {
            return r ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(r) {
            return new F();
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              l = new F();
            return F.deserializeBinaryFromReader(l, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return r;
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return F.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {}
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              F.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CQuest_ActivateProfileModifierItem_Response";
          }
        }
        class d extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              d.prototype.timestamp_start || a.Sg(d.M()),
              t.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              d.sm_m ||
                (d.sm_m = {
                  proto: d,
                  fields: {
                    timestamp_start: {
                      n: 1,
                      d: 0,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    timestamp_end: {
                      n: 2,
                      d: 4294967295,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                  },
                }),
              d.sm_m
            );
          }
          static MBF() {
            return d.sm_mbf || (d.sm_mbf = a.w0(d.M())), d.sm_mbf;
          }
          toObject(r = !1) {
            return d.toObject(r, this);
          }
          static toObject(r, i) {
            return a.BT(d.M(), r, i);
          }
          static fromObject(r) {
            return a.Uq(d.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              l = new d();
            return d.deserializeBinaryFromReader(l, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return a.zj(d.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return d.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            a.i0(d.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              d.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CQuest_GetNumTradingCardsEarned_Request";
          }
        }
        class p extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              p.prototype.num_trading_cards || a.Sg(p.M()),
              t.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              p.sm_m ||
                (p.sm_m = {
                  proto: p,
                  fields: {
                    num_trading_cards: {
                      n: 1,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                  },
                }),
              p.sm_m
            );
          }
          static MBF() {
            return p.sm_mbf || (p.sm_mbf = a.w0(p.M())), p.sm_mbf;
          }
          toObject(r = !1) {
            return p.toObject(r, this);
          }
          static toObject(r, i) {
            return a.BT(p.M(), r, i);
          }
          static fromObject(r) {
            return a.Uq(p.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              l = new p();
            return p.deserializeBinaryFromReader(l, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return a.zj(p.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return p.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            a.i0(p.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              p.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CQuest_GetNumTradingCardsEarned_Response";
          }
        }
        class j extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              j.prototype.eventid || a.Sg(j.M()),
              t.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              j.sm_m ||
                (j.sm_m = {
                  proto: j,
                  fields: {
                    eventid: { n: 1, br: a.qM.readEnum, bw: a.gp.writeEnum },
                    include_inactive: {
                      n: 2,
                      br: a.qM.readBool,
                      bw: a.gp.writeBool,
                    },
                  },
                }),
              j.sm_m
            );
          }
          static MBF() {
            return j.sm_mbf || (j.sm_mbf = a.w0(j.M())), j.sm_mbf;
          }
          toObject(r = !1) {
            return j.toObject(r, this);
          }
          static toObject(r, i) {
            return a.BT(j.M(), r, i);
          }
          static fromObject(r) {
            return a.Uq(j.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              l = new j();
            return j.deserializeBinaryFromReader(l, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return a.zj(j.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return j.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            a.i0(j.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              j.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CQuest_VirtualItemRewardDefinition_Request";
          }
        }
        class b extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              b.prototype.eventid || a.Sg(b.M()),
              t.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              b.sm_m ||
                (b.sm_m = {
                  proto: b,
                  fields: {
                    eventid: { n: 1, br: a.qM.readEnum, bw: a.gp.writeEnum },
                    item_bucket: {
                      n: 2,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    appid: { n: 3, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                    active: { n: 4, br: a.qM.readBool, bw: a.gp.writeBool },
                    rarity: { n: 5, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                    package_to_grant: {
                      n: 6,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    game_item_id: {
                      n: 7,
                      br: a.qM.readFixed64String,
                      bw: a.gp.writeFixed64String,
                    },
                    community_item_class: {
                      n: 8,
                      br: a.qM.readInt32,
                      bw: a.gp.writeInt32,
                    },
                    community_item_type: {
                      n: 9,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    loyalty_point_type: {
                      n: 10,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    amount: {
                      n: 11,
                      br: a.qM.readInt64String,
                      bw: a.gp.writeInt64String,
                    },
                    rtime_time_active: {
                      n: 12,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    loyalty_reward_defid: {
                      n: 13,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    user_badge_to_grant: {
                      n: 14,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    user_badge_level: {
                      n: 15,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                    virtual_item_def_id: {
                      n: 16,
                      br: a.qM.readUint32,
                      bw: a.gp.writeUint32,
                    },
                  },
                }),
              b.sm_m
            );
          }
          static MBF() {
            return b.sm_mbf || (b.sm_mbf = a.w0(b.M())), b.sm_mbf;
          }
          toObject(r = !1) {
            return b.toObject(r, this);
          }
          static toObject(r, i) {
            return a.BT(b.M(), r, i);
          }
          static fromObject(r) {
            return a.Uq(b.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              l = new b();
            return b.deserializeBinaryFromReader(l, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return a.zj(b.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return b.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            a.i0(b.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              b.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CVirtualItemRewardDefinition";
          }
        }
        class W extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              W.prototype.rewards || a.Sg(W.M()),
              t.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              W.sm_m ||
                (W.sm_m = {
                  proto: W,
                  fields: { rewards: { n: 1, c: b, r: !0, q: !0 } },
                }),
              W.sm_m
            );
          }
          static MBF() {
            return W.sm_mbf || (W.sm_mbf = a.w0(W.M())), W.sm_mbf;
          }
          toObject(r = !1) {
            return W.toObject(r, this);
          }
          static toObject(r, i) {
            return a.BT(W.M(), r, i);
          }
          static fromObject(r) {
            return a.Uq(W.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              l = new W();
            return W.deserializeBinaryFromReader(l, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return a.zj(W.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return W.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            a.i0(W.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              W.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CQuest_VirtualItemRewardDefinition_Response";
          }
        }
        class h extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              h.prototype.eventid || a.Sg(h.M()),
              t.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              h.sm_m ||
                (h.sm_m = {
                  proto: h,
                  fields: {
                    eventid: { n: 1, br: a.qM.readEnum, bw: a.gp.writeEnum },
                    itemsdefs: { n: 2, c: b, r: !0, q: !0 },
                    action: { n: 3, br: a.qM.readEnum, bw: a.gp.writeEnum },
                  },
                }),
              h.sm_m
            );
          }
          static MBF() {
            return h.sm_mbf || (h.sm_mbf = a.w0(h.M())), h.sm_mbf;
          }
          toObject(r = !1) {
            return h.toObject(r, this);
          }
          static toObject(r, i) {
            return a.BT(h.M(), r, i);
          }
          static fromObject(r) {
            return a.Uq(h.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              l = new h();
            return h.deserializeBinaryFromReader(l, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return a.zj(h.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return h.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            a.i0(h.M(), r, i);
          }
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              h.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CQuest_SetVirtualItemRewardDefinition_Request";
          }
        }
        function Mr(c) {
          return (
            "unknown CQuest_SetVirtualItemRewardDefinition_Request_EActionType ( " +
            c +
            " )"
          );
        }
        class T extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), t.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return T.toObject(r, this);
          }
          static toObject(r, i) {
            return r ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(r) {
            return new T();
          }
          static deserializeBinary(r) {
            let i = new (e().BinaryReader)(r),
              l = new T();
            return T.deserializeBinaryFromReader(l, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return r;
          }
          serializeBinary() {
            var r = new (e().BinaryWriter)();
            return T.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {}
          serializeBase64String() {
            var r = new (e().BinaryWriter)();
            return (
              T.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CQuest_SetVirtualItemRewardDefinition_Response";
          }
        }
        var E;
        ((c) => {
          function r(U, f, y) {
            return U.SendMsg(
              "Quest.GetCommunityInventory#1",
              (0, m.I8)(n, f, y),
              w,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          c.GetCommunityInventory = r;
          function i(U, f, y) {
            return U.SendMsg(
              "Quest.GetCommunityItemDefinitions#1",
              (0, m.I8)(g, f, y),
              S,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 4 },
            );
          }
          c.GetCommunityItemDefinitions = i;
          function l(U, f, y) {
            return U.SendMsg(
              "Quest.ActivateProfileModifierItem#1",
              (0, m.I8)(B, f, y),
              F,
              { ePrivilege: 1 },
            );
          }
          c.ActivateProfileModifierItem = l;
          function u(U, f, y) {
            return U.SendMsg(
              "Quest.GetNumTradingCardsEarned#1",
              (0, m.I8)(d, f, y),
              p,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          c.GetNumTradingCardsEarned = u;
          function I(U, f, y) {
            return U.SendMsg(
              "Quest.GetVirtualItemRewardDefinition#1",
              (0, m.I8)(j, f, y),
              W,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          }
          c.GetVirtualItemRewardDefinition = I;
          function R(U, f, y) {
            return U.SendMsg(
              "Quest.SetVirtualItemRewardDefinition#1",
              (0, m.I8)(h, f, y),
              T,
              { ePrivilege: 4 },
            );
          }
          c.SetVirtualItemRewardDefinition = R;
        })(E || (E = {}));
      },
    },
  ]);
})();
