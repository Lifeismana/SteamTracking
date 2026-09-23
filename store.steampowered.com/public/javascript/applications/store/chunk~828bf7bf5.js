/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [65050],
  {
    37621: (e, t, r) => {
      r.d(t, {
        EL: () => i,
        Ed: () => m,
        J4: () => a,
        Tl: () => g,
        jE: () => l,
        sU: () => s,
        u8: () => n,
        wK: () => c,
        xi: () => o,
        xw: () => d,
        yZ: () => _,
        zs: () => u,
      });
      const i = 0,
        n = 1,
        s = 3,
        a = 4,
        l = 8,
        m = 11,
        c = 12,
        u = 13,
        o = 14,
        d = 15,
        _ = 16,
        g = 17;
    },
    46371: (e, t, r) => {
      r.d(t, { c3: () => B, wt: () => _, L6: () => i, Qm: () => h });
      var i = {};
      r.r(i), r.d(i, { Jz: () => u });
      var n = r(80613),
        s = r.n(n),
        a = r(89068),
        l = r(56545),
        m = r(71698);
      class c extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            c.prototype.item_type || a.Sg(c.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
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
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = a.w0(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(c.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new c();
          return c.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CommunityItemDefinition";
        }
      }
      const u = 2;
      class o extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            o.prototype.appid || a.Sg(o.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  appid: { n: 1, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                  community_item_type: {
                    n: 2,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  community_item_class: {
                    n: 3,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  community_definition: { n: 4, c },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = a.w0(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(o.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(o.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new o();
          return o.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(o.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(o.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "SaleReward_ItemDefinition";
        }
      }
      class d extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.communityitemid || a.Sg(d.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                  time_granted: {
                    n: 2,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  item_definition: { n: 3, c: o },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = a.w0(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(d.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "SaleItemRewardGrant";
        }
      }
      class _ extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.language || a.Sg(_.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  language: { n: 1, br: a.qM.readString, bw: a.gp.writeString },
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
          return "CSaleItemRewards_ClaimItem_Request";
        }
      }
      class g extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.communityitemid || a.Sg(g.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                  next_claim_time: {
                    n: 2,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  reward_item: { n: 3, c: m.l3 },
                },
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
          return "CSaleItemRewards_ClaimItem_Response";
        }
      }
      class B extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.language || a.Sg(B.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  language: { n: 1, br: a.qM.readString, bw: a.gp.writeString },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = a.w0(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(B.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (s().BinaryReader)(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSaleItemRewards_CanClaimItem_Request";
        }
      }
      class b extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.can_claim || a.Sg(b.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  can_claim: { n: 1, br: a.qM.readBool, bw: a.gp.writeBool },
                  next_claim_time: {
                    n: 2,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  reward_item: { n: 3, c: m.l3 },
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
          return "CSaleItemRewards_CanClaimItem_Response";
        }
      }
      class w extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.sale_reward_def_id || a.Sg(w.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  sale_reward_def_id: {
                    n: 1,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  appid: { n: 2, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                  virtual_item_reward_event_id: {
                    n: 3,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  rtime_start_time: {
                    n: 4,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  rtime_end_time: {
                    n: 5,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  num_items_per_def: {
                    n: 6,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  reward_def_type: {
                    n: 7,
                    br: a.qM.readEnum,
                    bw: a.gp.writeEnum,
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
          return "CSteamItemRewardDefinition";
        }
      }
      class f extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.virtual_item_reward_event_id || a.Sg(f.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
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
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
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
          return "CSaleItemRewards_GetRewardDefinitions_Request";
        }
      }
      class M extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.definitions || a.Sg(M.M()),
            n.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: { definitions: { n: 1, c: w, r: !0, q: !0 } },
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
          return "CSaleItemRewards_GetRewardDefinitions_Response";
        }
      }
      class y extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.definitions || a.Sg(y.M()),
            n.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  definitions: { n: 1, c: w, r: !0, q: !0 },
                  action: { n: 2, br: a.qM.readEnum, bw: a.gp.writeEnum },
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
          return "CSaleItemRewards_SetRewardDefinitions_Request";
        }
      }
      class p extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.definitions || a.Sg(p.M()),
            n.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: { definitions: { n: 1, c: w, r: !0, q: !0 } },
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
          return "CSaleItemRewards_SetRewardDefinitions_Response";
        }
      }
      class z extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.sale_def_type || a.Sg(z.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  sale_def_type: {
                    n: 1,
                    br: a.qM.readEnum,
                    bw: a.gp.writeEnum,
                  },
                  language: { n: 2, br: a.qM.readString, bw: a.gp.writeString },
                  include_community_item_def: {
                    n: 3,
                    br: a.qM.readBool,
                    bw: a.gp.writeBool,
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
          return "CSaleItemRewards_GetClaimedSaleRewards_Request";
        }
      }
      class S extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.num_items_granted || a.Sg(S.M()),
            n.Message.initialize(this, e, 0, -1, [4], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  num_items_granted: {
                    n: 1,
                    br: a.qM.readInt32,
                    bw: a.gp.writeInt32,
                  },
                  num_items_earned: {
                    n: 2,
                    br: a.qM.readInt32,
                    bw: a.gp.writeInt32,
                  },
                  current_def: { n: 3, c: w },
                  reward_items: { n: 4, c: d, r: !0, q: !0 },
                },
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
          return "CSaleItemRewards_GetClaimedSaleRewards_Response";
        }
      }
      class R extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.sale_def_type || a.Sg(R.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  sale_def_type: {
                    n: 1,
                    br: a.qM.readEnum,
                    bw: a.gp.writeEnum,
                  },
                  language: { n: 2, br: a.qM.readString, bw: a.gp.writeString },
                  include_community_item_def: {
                    n: 3,
                    br: a.qM.readBool,
                    bw: a.gp.writeBool,
                  },
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
          return "CSaleItemRewards_GetCurrentDefinition_Request";
        }
      }
      class I extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.definition || a.Sg(I.M()),
            n.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  definition: { n: 1, c: w },
                  reward_items: { n: 2, c: o, r: !0, q: !0 },
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
          return "CSaleItemRewards_GetCurrentDefinition_Response";
        }
      }
      var h;
      !(function (e) {
        (e.ClaimItem = function (e, t, r) {
          return e.SendMsg(
            "SaleItemRewards.ClaimItem#1",
            (0, l.I8)(_, t, r),
            g,
            { ePrivilege: 1 },
          );
        }),
          (e.CanClaimItem = function (e, t, r) {
            return e.SendMsg(
              "SaleItemRewards.CanClaimItem#1",
              (0, l.I8)(B, t, r),
              b,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetRewardDefinitions = function (e, t, r) {
            return e.SendMsg(
              "SaleItemRewards.GetRewardDefinitions#1",
              (0, l.I8)(f, t, r),
              M,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          }),
          (e.SetRewardDefinitions = function (e, t, r) {
            return e.SendMsg(
              "SaleItemRewards.SetRewardDefinitions#1",
              (0, l.I8)(y, t, r),
              p,
              { ePrivilege: 4 },
            );
          }),
          (e.GetClaimedSaleRewards = function (e, t, r) {
            return e.SendMsg(
              "SaleItemRewards.GetClaimedSaleRewards#1",
              (0, l.I8)(z, t, r),
              S,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetCurrentDefinition = function (e, t, r) {
            return e.SendMsg(
              "SaleItemRewards.GetCurrentDefinition#1",
              (0, l.I8)(R, t, r),
              I,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          });
      })(h || (h = {}));
    },
    55263: (e, t, r) => {
      r.d(t, {
        G6: () => _,
        Gg: () => b,
        Ow: () => B,
        Sq: () => u,
        YM: () => y,
        eR: () => o,
        ik: () => d,
        mZ: () => w,
        t7: () => g,
        zX: () => M,
      });
      var i = r(41735),
        n = r.n(i),
        s = r(90626),
        a = r(37085),
        l = r(95578),
        m = r(84933),
        c = r(16021);
      const u = 1,
        o = 2,
        d = 3;
      function _(e, t, r, i) {
        const l = (0, s.useRef)(void 0),
          _ = (0, s.useRef)(void 0),
          g = (0, m.CH)();
        l.current = e;
        const [B, b] = (0, s.useState)(void 0),
          {
            include_assets: w,
            include_release: f,
            include_platforms: M,
            include_all_purchase_options: y,
            include_screenshots: p,
            include_trailers: z,
            include_ratings: S,
            include_tag_count: R,
            include_reviews: I,
            include_basic_info: h,
            include_supported_languages: v,
            include_full_description: q,
            include_included_items: W,
            include_assets_without_overrides: j,
            apply_user_filters: T,
            include_links: O,
            include_extra_details: C,
            include_optin_registration_tags: F,
          } = r;
        if (
          ((0, s.useEffect)(() => {
            const r = {
              include_assets: w,
              include_release: f,
              include_platforms: M,
              include_all_purchase_options: y,
              include_screenshots: p,
              include_trailers: z,
              include_ratings: S,
              include_tag_count: R,
              include_reviews: I,
              include_basic_info: h,
              include_supported_languages: v,
              include_full_description: q,
              include_included_items: W,
              include_assets_without_overrides: j,
              apply_user_filters: T,
              include_links: O,
              include_extra_details: C,
              include_optin_registration_tags: F,
            };
            let s = null;
            return (
              !e ||
                e < 0 ||
                c.A.Get().BHasStoreItem(e, t, r) ||
                (void 0 !== B && i && i == _.current) ||
                (i !== _.current && (b(void 0), (_.current = i)),
                (s = n().CancelToken.source()),
                c.A.Get()
                  .QueueStoreItemRequest(e, t, r)
                  .then((t) => {
                    s?.token.reason || l.current !== e || b(t == a.R), g();
                  })),
              () => s?.cancel("useStoreItemCache: unmounting")
            );
          }, [
            e,
            t,
            i,
            B,
            w,
            f,
            M,
            y,
            p,
            z,
            S,
            R,
            I,
            h,
            v,
            q,
            W,
            j,
            T,
            O,
            C,
            F,
            g,
          ]),
          !e)
        )
          return [null, o];
        if (!1 === B) return [void 0, o];
        if (c.A.Get().BIsStoreItemMissing(e, t)) return [void 0, o];
        if (!c.A.Get().BHasStoreItem(e, t, r)) return [void 0, u];
        const U = c.A.Get().GetStoreItemWithLegacyVisibilityCheck(e, t);
        return U ? [U, d] : [null, o];
      }
      function g(e, t, r) {
        return _(e, l.c6.qI, t, r);
      }
      function B(e, t, r) {
        return _(e, l.c6.xO, t, r);
      }
      function b(e, t, r) {
        return _(e, l.c6.RD, t, r);
      }
      function w(e, t, r) {
        const [i, n] = _(e, t, r);
        let s;
        i?.GetStoreItemType() != l.c6.RD ||
          i.GetAssets()?.GetHeaderURL() ||
          1 != i?.GetIncludedAppIDs().length ||
          (s = i.GetIncludedAppIDs()[0]);
        const [a, m] = g(s, r);
        return s && a?.BIsVisible() ? [a, m] : [i, n];
      }
      function f(e, t, r, i) {
        const a = (0, m.CH)(),
          {
            include_assets: l,
            include_release: _,
            include_platforms: g,
            include_all_purchase_options: B,
            include_screenshots: b,
            include_trailers: w,
            include_ratings: f,
            include_tag_count: M,
            include_reviews: y,
            include_basic_info: p,
            include_supported_languages: z,
            include_full_description: S,
            include_included_items: R,
            include_assets_without_overrides: I,
            apply_user_filters: h,
            include_links: v,
            include_extra_details: q,
            include_optin_registration_tags: W,
          } = r;
        if (
          ((0, s.useEffect)(() => {
            if (!e || 0 == e.length) return;
            const r = {
                include_assets: l,
                include_release: _,
                include_platforms: g,
                include_all_purchase_options: B,
                include_screenshots: b,
                include_trailers: w,
                include_ratings: f,
                include_tag_count: M,
                include_reviews: y,
                include_basic_info: p,
                include_supported_languages: z,
                include_full_description: S,
                include_included_items: R,
                include_assets_without_overrides: I,
                apply_user_filters: h,
                include_links: v,
                include_extra_details: q,
                include_optin_registration_tags: W,
              },
              i = e.filter(
                (e) =>
                  !(
                    c.A.Get().BHasStoreItem(e, t, r) ||
                    c.A.Get().BIsStoreItemMissing(e, t)
                  ),
              );
            if (0 == i.length) return;
            const s = n().CancelToken.source(),
              m = i.map((e) => c.A.Get().QueueStoreItemRequest(e, t, r));
            return (
              Promise.all(m).then(() => {
                s.token.reason || a();
              }),
              () => s.cancel("useStoreItemCacheMultiplePackages: unmounting")
            );
          }, [
            e,
            t,
            i,
            a,
            l,
            _,
            g,
            B,
            b,
            w,
            f,
            M,
            y,
            p,
            z,
            S,
            R,
            I,
            h,
            v,
            q,
            W,
          ]),
          !e)
        )
          return o;
        if (
          !e.every(
            (e) =>
              c.A.Get().BHasStoreItem(e, t, r) ||
              c.A.Get().BIsStoreItemMissing(e, t),
          )
        )
          return u;
        return e.every((e) =>
          c.A.Get().GetStoreItemWithLegacyVisibilityCheck(e, t),
        )
          ? d
          : o;
      }
      function M(e, t, r) {
        return f(e, l.c6.qI, t, r);
      }
      function y() {
        s.useEffect(
          () => (
            c.A.Get().SetReturnUnavailableItems(!0),
            () => c.A.Get().SetReturnUnavailableItems(!1)
          ),
          [],
        );
      }
    },
  },
]);
