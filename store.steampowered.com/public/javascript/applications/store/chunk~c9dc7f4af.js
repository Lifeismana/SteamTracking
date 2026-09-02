/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [14237],
    {
      23386: (Vr, Fr, f) => {
        f.d(Fr, {
          EL: () => Wr,
          Ed: () => l,
          J4: () => x,
          Tl: () => N,
          jE: () => E,
          sU: () => c,
          u8: () => u,
          wK: () => a,
          xi: () => z,
          xw: () => U,
          yZ: () => T,
          zs: () => m,
        });
        const Wr = 0,
          u = 1,
          e = 2,
          c = 3,
          x = 4,
          M = 5,
          b = 6,
          i = 7,
          E = 8,
          Hr = 9,
          xr = 10,
          l = 11,
          a = 12,
          m = 13,
          z = 14,
          U = 15,
          T = 16,
          N = 17;
      },
      49288: (Vr, Fr, f) => {
        f.d(Fr, {
          RY: () => I,
          Dj: () => L,
          L: () => Nr,
          IL: () => Er,
          zq: () => y,
          Sm: () => d,
          bA: () => w,
          pt: () => Q,
          GB: () => H,
          mo: () => q,
          jK: () => D,
          P$: () => P,
          Cs: () => S,
          vT: () => x,
          Pw: () => e,
          Pk: () => u,
          kT: () => Wr,
          _h: () => c,
          l3: () => K,
          a9: () => $r,
        });
        var Wr = {};
        f.r(Wr),
          f.d(Wr, {
            Wy: () => U,
            X6: () => l,
            Mj: () => z,
            j1: () => m,
            b2: () => xr,
          });
        var u = {};
        f.r(u), f.d(u, { au: () => T });
        var e = {};
        f.r(e),
          f.d(e, {
            Zp: () => wr,
            uz: () => Ir,
            Ri: () => Sr,
            BZ: () => Dr,
            tN: () => Pr,
            j3: () => qr,
          });
        var c = {};
        f.r(c), f.d(c, { A: () => dr, h: () => Ar });
        var x = {};
        f.r(x),
          f.d(x, { FK: () => Gr, Oc: () => yr, SO: () => Lr, qY: () => or });
        var M = f(80613),
          b = f.n(M),
          i = f(75245),
          E = f(35038);
        const Hr = 0,
          xr = 1,
          l = 2,
          a = 3,
          m = 4,
          z = 5,
          U = 6,
          T = 0,
          N = 1,
          s = 2,
          F = 3,
          V = 4,
          Z = 5,
          $ = 6,
          J = 7,
          Y = 8,
          X = 9,
          A = 10,
          Zr = 11,
          Ur = 12,
          n = 13,
          B = 14,
          h = 15,
          Jr = 16,
          Yr = 17,
          Xr = 18,
          Or = 19,
          hr = 20,
          vr = 21,
          mi = 22,
          zi = 23,
          fi = 24,
          si = 25,
          li = 26,
          Ti = 27,
          ji = 28,
          Wi = 29,
          Oi = 30,
          hi = 31,
          vi = 32,
          Ui = 33,
          xi = 34,
          Ei = 35,
          Sr = 0,
          qr = 1,
          Pr = 2,
          Dr = 3,
          Ir = 4,
          wr = 5,
          Ar = 1,
          dr = 2,
          Gr = 1,
          Lr = 2,
          yr = 3,
          or = 4;
        function Ni(v) {
          return "unknown ELoyaltyRewardAuditType ( " + v + " )";
        }
        function Fi(v) {
          return "unknown ELoyaltyRewardDefinitionID ( " + v + " )";
        }
        function ki(v) {
          return "unknown ELoyaltyRewardType ( " + v + " )";
        }
        function Ki(v) {
          return "unknown ELoyaltyRewardPointTransferType ( " + v + " )";
        }
        function pi(v) {
          return "unknown ELoyaltyRewardReactionType ( " + v + " )";
        }
        function Hi(v) {
          return "unknown ELoyaltyRewardReactionTargetType ( " + v + " )";
        }
        function Vi(v) {
          return "unknown ELoyaltyRewardsQuerySort ( " + v + " )";
        }
        function Zi(v) {
          return "unknown ELoyaltyRewardQueryFilter ( " + v + " )";
        }
        class Q extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Q.prototype.steamid || i.Sg(Q.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
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
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                  },
                }),
              Q.sm_m
            );
          }
          static MBF() {
            return Q.sm_mbf || (Q.sm_mbf = i.w0(Q.M())), Q.sm_mbf;
          }
          toObject(r = !1) {
            return Q.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Q.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Q.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (b().BinaryReader)(r),
              g = new Q();
            return Q.deserializeBinaryFromReader(g, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Q.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (b().BinaryWriter)();
            return Q.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Q.M(), r, t);
          }
          serializeBase64String() {
            var r = new (b().BinaryWriter)();
            return (
              Q.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_GetSummary_Request";
          }
        }
        class o extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              o.prototype.summary || i.Sg(o.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              o.sm_m ||
                (o.sm_m = {
                  proto: o,
                  fields: {
                    summary: { n: 1, c: C },
                    timestamp_updated: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    auditid_highwater: {
                      n: 3,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
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
            let t = new (b().BinaryReader)(r),
              g = new o();
            return o.deserializeBinaryFromReader(g, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(o.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (b().BinaryWriter)();
            return o.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(o.M(), r, t);
          }
          serializeBase64String() {
            var r = new (b().BinaryWriter)();
            return (
              o.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_GetSummary_Response";
          }
        }
        class C extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              C.prototype.points || i.Sg(C.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              C.sm_m ||
                (C.sm_m = {
                  proto: C,
                  fields: {
                    points: {
                      n: 1,
                      br: i.qM.readInt64String,
                      bw: i.gp.writeInt64String,
                    },
                    points_earned: {
                      n: 2,
                      br: i.qM.readInt64String,
                      bw: i.gp.writeInt64String,
                    },
                    points_spent: {
                      n: 3,
                      br: i.qM.readInt64String,
                      bw: i.gp.writeInt64String,
                    },
                  },
                }),
              C.sm_m
            );
          }
          static MBF() {
            return C.sm_mbf || (C.sm_mbf = i.w0(C.M())), C.sm_mbf;
          }
          toObject(r = !1) {
            return C.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(C.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(C.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (b().BinaryReader)(r),
              g = new C();
            return C.deserializeBinaryFromReader(g, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(C.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (b().BinaryWriter)();
            return C.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(C.M(), r, t);
          }
          serializeBase64String() {
            var r = new (b().BinaryWriter)();
            return (
              C.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_GetSummary_Response_Summary";
          }
        }
        class R extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              R.prototype.amount || i.Sg(R.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              R.sm_m ||
                (R.sm_m = {
                  proto: R,
                  fields: {
                    amount: {
                      n: 1,
                      br: i.qM.readInt64String,
                      bw: i.gp.writeInt64String,
                    },
                    ecurrency: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              R.sm_m
            );
          }
          static MBF() {
            return R.sm_mbf || (R.sm_mbf = i.w0(R.M())), R.sm_mbf;
          }
          toObject(r = !1) {
            return R.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(R.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(R.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (b().BinaryReader)(r),
              g = new R();
            return R.deserializeBinaryFromReader(g, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(R.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (b().BinaryWriter)();
            return R.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(R.M(), r, t);
          }
          serializeBase64String() {
            var r = new (b().BinaryWriter)();
            return (
              R.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_GetPointsForSpend_Request";
          }
        }
        class _ extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              _.prototype.points || i.Sg(_.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    points: {
                      n: 1,
                      br: i.qM.readInt64String,
                      bw: i.gp.writeInt64String,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = i.w0(_.M())), _.sm_mbf;
          }
          toObject(r = !1) {
            return _.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(_.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(_.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (b().BinaryReader)(r),
              g = new _();
            return _.deserializeBinaryFromReader(g, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(_.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (b().BinaryWriter)();
            return _.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(_.M(), r, t);
          }
          serializeBase64String() {
            var r = new (b().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_GetPointsForSpend_Response";
          }
        }
        class S extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              S.prototype.defid || i.Sg(S.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              S.sm_m ||
                (S.sm_m = {
                  proto: S,
                  fields: {
                    defid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    expected_points_cost: {
                      n: 2,
                      br: i.qM.readInt64String,
                      bw: i.gp.writeInt64String,
                    },
                  },
                }),
              S.sm_m
            );
          }
          static MBF() {
            return S.sm_mbf || (S.sm_mbf = i.w0(S.M())), S.sm_mbf;
          }
          toObject(r = !1) {
            return S.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(S.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(S.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (b().BinaryReader)(r),
              g = new S();
            return S.deserializeBinaryFromReader(g, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(S.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (b().BinaryWriter)();
            return S.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(S.M(), r, t);
          }
          serializeBase64String() {
            var r = new (b().BinaryWriter)();
            return (
              S.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_RedeemPoints_Request";
          }
        }
        class q extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              q.prototype.defid || i.Sg(q.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              q.sm_m ||
                (q.sm_m = {
                  proto: q,
                  fields: {
                    defid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    num_levels: {
                      n: 2,
                      d: 1,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                  },
                }),
              q.sm_m
            );
          }
          static MBF() {
            return q.sm_mbf || (q.sm_mbf = i.w0(q.M())), q.sm_mbf;
          }
          toObject(r = !1) {
            return q.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(q.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(q.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (b().BinaryReader)(r),
              g = new q();
            return q.deserializeBinaryFromReader(g, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(q.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (b().BinaryWriter)();
            return q.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(q.M(), r, t);
          }
          serializeBase64String() {
            var r = new (b().BinaryWriter)();
            return (
              q.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_RedeemPointsForBadgeLevel_Request";
          }
        }
        class rr extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              rr.prototype.defid || i.Sg(rr.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              rr.sm_m ||
                (rr.sm_m = {
                  proto: rr,
                  fields: {
                    defid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    communityitemid: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              rr.sm_m
            );
          }
          static MBF() {
            return rr.sm_mbf || (rr.sm_mbf = i.w0(rr.M())), rr.sm_mbf;
          }
          toObject(r = !1) {
            return rr.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(rr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(rr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (b().BinaryReader)(r),
              g = new rr();
            return rr.deserializeBinaryFromReader(g, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(rr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (b().BinaryWriter)();
            return rr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(rr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (b().BinaryWriter)();
            return (
              rr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_RedeemPointsToUpgradeItem_Request";
          }
        }
        class p extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              p.prototype.communityitemid || i.Sg(p.M()),
              M.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              p.sm_m ||
                (p.sm_m = {
                  proto: p,
                  fields: {
                    communityitemid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    bundle_community_item_ids: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint64String,
                      pbr: i.qM.readPackedUint64String,
                      bw: i.gp.writeRepeatedUint64String,
                    },
                  },
                }),
              p.sm_m
            );
          }
          static MBF() {
            return p.sm_mbf || (p.sm_mbf = i.w0(p.M())), p.sm_mbf;
          }
          toObject(r = !1) {
            return p.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(p.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(p.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (b().BinaryReader)(r),
              g = new p();
            return p.deserializeBinaryFromReader(g, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(p.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (b().BinaryWriter)();
            return p.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(p.M(), r, t);
          }
          serializeBase64String() {
            var r = new (b().BinaryWriter)();
            return (
              p.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_RedeemPoints_Response";
          }
        }
        class P extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              P.prototype.customization_type || i.Sg(P.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              P.sm_m ||
                (P.sm_m = {
                  proto: P,
                  fields: {
                    customization_type: {
                      n: 1,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                  },
                }),
              P.sm_m
            );
          }
          static MBF() {
            return P.sm_mbf || (P.sm_mbf = i.w0(P.M())), P.sm_mbf;
          }
          toObject(r = !1) {
            return P.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(P.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(P.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (b().BinaryReader)(r),
              g = new P();
            return P.deserializeBinaryFromReader(g, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(P.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (b().BinaryWriter)();
            return P.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(P.M(), r, t);
          }
          serializeBase64String() {
            var r = new (b().BinaryWriter)();
            return (
              P.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_RedeemPointsForProfileCustomization_Request";
          }
        }
        class ir extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ir.prototype.purchaseid || i.Sg(ir.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ir.sm_m ||
                (ir.sm_m = {
                  proto: ir,
                  fields: {
                    purchaseid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              ir.sm_m
            );
          }
          static MBF() {
            return ir.sm_mbf || (ir.sm_mbf = i.w0(ir.M())), ir.sm_mbf;
          }
          toObject(r = !1) {
            return ir.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(ir.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(ir.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (b().BinaryReader)(r),
              g = new ir();
            return ir.deserializeBinaryFromReader(g, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(ir.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (b().BinaryWriter)();
            return ir.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(ir.M(), r, t);
          }
          serializeBase64String() {
            var r = new (b().BinaryWriter)();
            return (
              ir.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_RedeemPointsForProfileCustomization_Response";
          }
        }
        class D extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              D.prototype.customization_type || i.Sg(D.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              D.sm_m ||
                (D.sm_m = {
                  proto: D,
                  fields: {
                    customization_type: {
                      n: 1,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    new_level: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              D.sm_m
            );
          }
          static MBF() {
            return D.sm_mbf || (D.sm_mbf = i.w0(D.M())), D.sm_mbf;
          }
          toObject(r = !1) {
            return D.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(D.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(D.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (b().BinaryReader)(r),
              g = new D();
            return D.deserializeBinaryFromReader(g, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(D.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (b().BinaryWriter)();
            return D.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(D.M(), r, t);
          }
          serializeBase64String() {
            var r = new (b().BinaryWriter)();
            return (
              D.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_RedeemPointsForProfileCustomizationUpgrade_Request";
          }
        }
        class kr extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return kr.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new kr();
          }
          static deserializeBinary(r) {
            let t = new (b().BinaryReader)(r),
              g = new kr();
            return kr.deserializeBinaryFromReader(g, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (b().BinaryWriter)();
            return kr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (b().BinaryWriter)();
            return (
              kr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_RedeemPointsForProfileCustomizationUpgrade_Response";
          }
        }
        class tr extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              tr.prototype.serial_number || i.Sg(tr.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              tr.sm_m ||
                (tr.sm_m = {
                  proto: tr,
                  fields: {
                    serial_number: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    controller_code: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              tr.sm_m
            );
          }
          static MBF() {
            return tr.sm_mbf || (tr.sm_mbf = i.w0(tr.M())), tr.sm_mbf;
          }
          toObject(r = !1) {
            return tr.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(tr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(tr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (b().BinaryReader)(r),
              g = new tr();
            return tr.deserializeBinaryFromReader(g, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(tr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (b().BinaryWriter)();
            return tr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(tr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (b().BinaryWriter)();
            return (
              tr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_RegisterForSteamDeckRewards_Request";
          }
        }
        class nr extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              nr.prototype.granted_profile_modifier || i.Sg(nr.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              nr.sm_m ||
                (nr.sm_m = {
                  proto: nr,
                  fields: {
                    granted_profile_modifier: {
                      n: 1,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                  },
                }),
              nr.sm_m
            );
          }
          static MBF() {
            return nr.sm_mbf || (nr.sm_mbf = i.w0(nr.M())), nr.sm_mbf;
          }
          toObject(r = !1) {
            return nr.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(nr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(nr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (b().BinaryReader)(r),
              g = new nr();
            return nr.deserializeBinaryFromReader(g, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(nr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (b().BinaryWriter)();
            return nr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(nr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (b().BinaryWriter)();
            return (
              nr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_RegisterForSteamDeckRewards_Response";
          }
        }
        class I extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              I.prototype.target_type || i.Sg(I.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              I.sm_m ||
                (I.sm_m = {
                  proto: I,
                  fields: {
                    target_type: {
                      n: 1,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    targetid: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    reactionid: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
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
            let t = new (b().BinaryReader)(r),
              g = new I();
            return I.deserializeBinaryFromReader(g, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(I.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (b().BinaryWriter)();
            return I.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(I.M(), r, t);
          }
          serializeBase64String() {
            var r = new (b().BinaryWriter)();
            return (
              I.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_AddReaction_Request";
          }
        }
        class Kr extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Kr.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new Kr();
          }
          static deserializeBinary(r) {
            let t = new (b().BinaryReader)(r),
              g = new Kr();
            return Kr.deserializeBinaryFromReader(g, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (b().BinaryWriter)();
            return Kr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (b().BinaryWriter)();
            return (
              Kr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_AddReaction_Response";
          }
        }
        class w extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              w.prototype.target_type || i.Sg(w.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              w.sm_m ||
                (w.sm_m = {
                  proto: w,
                  fields: {
                    target_type: {
                      n: 1,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    targetid: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              w.sm_m
            );
          }
          static MBF() {
            return w.sm_mbf || (w.sm_mbf = i.w0(w.M())), w.sm_mbf;
          }
          toObject(r = !1) {
            return w.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(w.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(w.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (b().BinaryReader)(r),
              g = new w();
            return w.deserializeBinaryFromReader(g, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(w.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (b().BinaryWriter)();
            return w.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(w.M(), r, t);
          }
          serializeBase64String() {
            var r = new (b().BinaryWriter)();
            return (
              w.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_GetReactions_Request";
          }
        }
        class cr extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              cr.prototype.reactionids || i.Sg(cr.M()),
              M.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              cr.sm_m ||
                (cr.sm_m = {
                  proto: cr,
                  fields: {
                    reactionids: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint32,
                      pbr: i.qM.readPackedUint32,
                      bw: i.gp.writeRepeatedUint32,
                    },
                  },
                }),
              cr.sm_m
            );
          }
          static MBF() {
            return cr.sm_mbf || (cr.sm_mbf = i.w0(cr.M())), cr.sm_mbf;
          }
          toObject(r = !1) {
            return cr.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(cr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(cr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (b().BinaryReader)(r),
              g = new cr();
            return cr.deserializeBinaryFromReader(g, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(cr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (b().BinaryWriter)();
            return cr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(cr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (b().BinaryWriter)();
            return (
              cr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_GetReactions_Response";
          }
        }
        class br extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              br.prototype.steamid || i.Sg(br.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              br.sm_m ||
                (br.sm_m = {
                  proto: br,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                  },
                }),
              br.sm_m
            );
          }
          static MBF() {
            return br.sm_mbf || (br.sm_mbf = i.w0(br.M())), br.sm_mbf;
          }
          toObject(r = !1) {
            return br.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(br.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(br.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (b().BinaryReader)(r),
              g = new br();
            return br.deserializeBinaryFromReader(g, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(br.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (b().BinaryWriter)();
            return br.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(br.M(), r, t);
          }
          serializeBase64String() {
            var r = new (b().BinaryWriter)();
            return (
              br.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_GetReactionsSummaryForUser_Request";
          }
        }
        class Br extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Br.prototype.total || i.Sg(Br.M()),
              M.Message.initialize(this, r, 0, -1, [1, 2, 3, 4, 5, 6], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Br.sm_m ||
                (Br.sm_m = {
                  proto: Br,
                  fields: {
                    total: { n: 1, c: k, r: !0, q: !0 },
                    user_reviews: { n: 2, c: k, r: !0, q: !0 },
                    ugc: { n: 3, c: k, r: !0, q: !0 },
                    profile: { n: 4, c: k, r: !0, q: !0 },
                    forum_topics: { n: 5, c: k, r: !0, q: !0 },
                    comments: { n: 6, c: k, r: !0, q: !0 },
                    total_given: {
                      n: 7,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    total_received: {
                      n: 8,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    total_points_given: {
                      n: 9,
                      br: i.qM.readInt64String,
                      bw: i.gp.writeInt64String,
                    },
                    total_points_received: {
                      n: 10,
                      br: i.qM.readInt64String,
                      bw: i.gp.writeInt64String,
                    },
                  },
                }),
              Br.sm_m
            );
          }
          static MBF() {
            return Br.sm_mbf || (Br.sm_mbf = i.w0(Br.M())), Br.sm_mbf;
          }
          toObject(r = !1) {
            return Br.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Br.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Br.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (b().BinaryReader)(r),
              g = new Br();
            return Br.deserializeBinaryFromReader(g, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Br.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (b().BinaryWriter)();
            return Br.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Br.M(), r, t);
          }
          serializeBase64String() {
            var r = new (b().BinaryWriter)();
            return (
              Br.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_GetReactionsSummaryForUser_Response";
          }
        }
        class k extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              k.prototype.reactionid || i.Sg(k.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              k.sm_m ||
                (k.sm_m = {
                  proto: k,
                  fields: {
                    reactionid: { n: 1, br: i.qM.readEnum, bw: i.gp.writeEnum },
                    given: { n: 2, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    received: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    points_given: {
                      n: 4,
                      br: i.qM.readInt64String,
                      bw: i.gp.writeInt64String,
                    },
                    points_received: {
                      n: 5,
                      br: i.qM.readInt64String,
                      bw: i.gp.writeInt64String,
                    },
                    purchaseable: {
                      n: 6,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                  },
                }),
              k.sm_m
            );
          }
          static MBF() {
            return k.sm_mbf || (k.sm_mbf = i.w0(k.M())), k.sm_mbf;
          }
          toObject(r = !1) {
            return k.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(k.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(k.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (b().BinaryReader)(r),
              g = new k();
            return k.deserializeBinaryFromReader(g, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(k.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (b().BinaryWriter)();
            return k.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(k.M(), r, t);
          }
          serializeBase64String() {
            var r = new (b().BinaryWriter)();
            return (
              k.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_GetReactionsSummaryForUser_Response_Breakdown";
          }
        }
        class d extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              d.prototype.elanguage || i.Sg(d.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              d.sm_m ||
                (d.sm_m = {
                  proto: d,
                  fields: {
                    elanguage: {
                      n: 1,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                  },
                }),
              d.sm_m
            );
          }
          static MBF() {
            return d.sm_mbf || (d.sm_mbf = i.w0(d.M())), d.sm_mbf;
          }
          toObject(r = !1) {
            return d.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(d.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(d.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (b().BinaryReader)(r),
              g = new d();
            return d.deserializeBinaryFromReader(g, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(d.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (b().BinaryWriter)();
            return d.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(d.M(), r, t);
          }
          serializeBase64String() {
            var r = new (b().BinaryWriter)();
            return (
              d.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_GetReactionConfig_Request";
          }
        }
        class Mr extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Mr.prototype.reactions || i.Sg(Mr.M()),
              M.Message.initialize(this, r, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Mr.sm_m ||
                (Mr.sm_m = {
                  proto: Mr,
                  fields: { reactions: { n: 3, c: gr, r: !0, q: !0 } },
                }),
              Mr.sm_m
            );
          }
          static MBF() {
            return Mr.sm_mbf || (Mr.sm_mbf = i.w0(Mr.M())), Mr.sm_mbf;
          }
          toObject(r = !1) {
            return Mr.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Mr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Mr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (b().BinaryReader)(r),
              g = new Mr();
            return Mr.deserializeBinaryFromReader(g, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Mr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (b().BinaryWriter)();
            return Mr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Mr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (b().BinaryWriter)();
            return (
              Mr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_GetReactionConfig_Response";
          }
        }
        class gr extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              gr.prototype.reactionid || i.Sg(gr.M()),
              M.Message.initialize(this, r, 0, -1, [4, 5], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              gr.sm_m ||
                (gr.sm_m = {
                  proto: gr,
                  fields: {
                    reactionid: { n: 1, br: i.qM.readEnum, bw: i.gp.writeEnum },
                    points_cost: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    points_transferred: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    valid_target_types: {
                      n: 4,
                      r: !0,
                      q: !0,
                      br: i.qM.readEnum,
                      pbr: i.qM.readPackedEnum,
                      bw: i.gp.writeRepeatedEnum,
                    },
                    valid_ugc_types: {
                      n: 5,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint32,
                      pbr: i.qM.readPackedUint32,
                      bw: i.gp.writeRepeatedUint32,
                    },
                    purchaseable: {
                      n: 6,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    localized_title: {
                      n: 7,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    localized_desc: {
                      n: 8,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    available_until: {
                      n: 9,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              gr.sm_m
            );
          }
          static MBF() {
            return gr.sm_mbf || (gr.sm_mbf = i.w0(gr.M())), gr.sm_mbf;
          }
          toObject(r = !1) {
            return gr.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(gr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(gr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (b().BinaryReader)(r),
              g = new gr();
            return gr.deserializeBinaryFromReader(g, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(gr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (b().BinaryWriter)();
            return gr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(gr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (b().BinaryWriter)();
            return (
              gr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_GetReactionConfig_Response_ReactionConfig";
          }
        }
        class pr extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return pr.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new pr();
          }
          static deserializeBinary(r) {
            let t = new (b().BinaryReader)(r),
              g = new pr();
            return pr.deserializeBinaryFromReader(g, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (b().BinaryWriter)();
            return pr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (b().BinaryWriter)();
            return (
              pr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_GetProfileCustomizationsConfig_Request";
          }
        }
        class er extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              er.prototype.points_cost || i.Sg(er.M()),
              M.Message.initialize(this, r, 0, -1, [3, 4], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              er.sm_m ||
                (er.sm_m = {
                  proto: er,
                  fields: {
                    points_cost: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    upgrade_points_cost: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    purchasable_customization_types: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: i.qM.readEnum,
                      pbr: i.qM.readPackedEnum,
                      bw: i.gp.writeRepeatedEnum,
                    },
                    upgradable_customization_types: {
                      n: 4,
                      r: !0,
                      q: !0,
                      br: i.qM.readEnum,
                      pbr: i.qM.readPackedEnum,
                      bw: i.gp.writeRepeatedEnum,
                    },
                    max_slots_per_type: {
                      n: 5,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    max_upgradable_level: {
                      n: 6,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              er.sm_m
            );
          }
          static MBF() {
            return er.sm_mbf || (er.sm_mbf = i.w0(er.M())), er.sm_mbf;
          }
          toObject(r = !1) {
            return er.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(er.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(er.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (b().BinaryReader)(r),
              g = new er();
            return er.deserializeBinaryFromReader(g, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(er.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (b().BinaryWriter)();
            return er.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(er.M(), r, t);
          }
          serializeBase64String() {
            var r = new (b().BinaryWriter)();
            return (
              er.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_GetProfileCustomizationsConfig_Response";
          }
        }
        class Er extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Er.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new Er();
          }
          static deserializeBinary(r) {
            let t = new (b().BinaryReader)(r),
              g = new Er();
            return Er.deserializeBinaryFromReader(g, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (b().BinaryWriter)();
            return Er.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (b().BinaryWriter)();
            return (
              Er.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_GetEligibleApps_Request";
          }
        }
        class ur extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ur.prototype.apps || i.Sg(ur.M()),
              M.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ur.sm_m ||
                (ur.sm_m = {
                  proto: ur,
                  fields: { apps: { n: 1, c: ar, r: !0, q: !0 } },
                }),
              ur.sm_m
            );
          }
          static MBF() {
            return ur.sm_mbf || (ur.sm_mbf = i.w0(ur.M())), ur.sm_mbf;
          }
          toObject(r = !1) {
            return ur.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(ur.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(ur.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (b().BinaryReader)(r),
              g = new ur();
            return ur.deserializeBinaryFromReader(g, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(ur.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (b().BinaryWriter)();
            return ur.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(ur.M(), r, t);
          }
          serializeBase64String() {
            var r = new (b().BinaryWriter)();
            return (
              ur.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_GetEligibleApps_Response";
          }
        }
        class ar extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ar.prototype.appid || i.Sg(ar.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ar.sm_m ||
                (ar.sm_m = {
                  proto: ar,
                  fields: {
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    has_items_anyone_can_purchase: {
                      n: 2,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    event_app: { n: 3, br: i.qM.readBool, bw: i.gp.writeBool },
                    hero_carousel_image: {
                      n: 4,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    owned: { n: 5, br: i.qM.readBool, bw: i.gp.writeBool },
                  },
                }),
              ar.sm_m
            );
          }
          static MBF() {
            return ar.sm_mbf || (ar.sm_mbf = i.w0(ar.M())), ar.sm_mbf;
          }
          toObject(r = !1) {
            return ar.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(ar.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(ar.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (b().BinaryReader)(r),
              g = new ar();
            return ar.deserializeBinaryFromReader(g, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(ar.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (b().BinaryWriter)();
            return ar.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(ar.M(), r, t);
          }
          serializeBase64String() {
            var r = new (b().BinaryWriter)();
            return (
              ar.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_GetEligibleApps_Response_EligibleApp";
          }
        }
        class K extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              K.prototype.appid || i.Sg(K.M()),
              M.Message.initialize(this, r, 0, -1, [15], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              K.sm_m ||
                (K.sm_m = {
                  proto: K,
                  fields: {
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    defid: { n: 2, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    type: { n: 3, br: i.qM.readEnum, bw: i.gp.writeEnum },
                    community_item_class: {
                      n: 4,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                    community_item_type: {
                      n: 5,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    point_cost: {
                      n: 6,
                      br: i.qM.readInt64String,
                      bw: i.gp.writeInt64String,
                    },
                    timestamp_created: {
                      n: 7,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    timestamp_updated: {
                      n: 8,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    timestamp_available: {
                      n: 9,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    timestamp_available_end: {
                      n: 14,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    quantity: {
                      n: 10,
                      br: i.qM.readInt64String,
                      bw: i.gp.writeInt64String,
                    },
                    internal_description: {
                      n: 11,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    active: { n: 12, br: i.qM.readBool, bw: i.gp.writeBool },
                    community_item_data: { n: 13, c: mr },
                    bundle_defids: {
                      n: 15,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint32,
                      pbr: i.qM.readPackedUint32,
                      bw: i.gp.writeRepeatedUint32,
                    },
                    usable_duration: {
                      n: 16,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    bundle_discount: {
                      n: 17,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    timestamp_free_until: {
                      n: 18,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              K.sm_m
            );
          }
          static MBF() {
            return K.sm_mbf || (K.sm_mbf = i.w0(K.M())), K.sm_mbf;
          }
          toObject(r = !1) {
            return K.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(K.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(K.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (b().BinaryReader)(r),
              g = new K();
            return K.deserializeBinaryFromReader(g, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(K.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (b().BinaryWriter)();
            return K.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(K.M(), r, t);
          }
          serializeBase64String() {
            var r = new (b().BinaryWriter)();
            return (
              K.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "LoyaltyRewardDefinition";
          }
        }
        class mr extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              mr.prototype.item_name || i.Sg(mr.M()),
              M.Message.initialize(this, r, 0, -1, [9], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              mr.sm_m ||
                (mr.sm_m = {
                  proto: mr,
                  fields: {
                    item_name: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    item_title: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    item_description: {
                      n: 3,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    item_image_small: {
                      n: 4,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    item_image_large: {
                      n: 5,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    item_movie_webm: {
                      n: 6,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    item_movie_mp4: {
                      n: 7,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    item_movie_webm_small: {
                      n: 10,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    item_movie_mp4_small: {
                      n: 11,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    animated: { n: 8, br: i.qM.readBool, bw: i.gp.writeBool },
                    badge_data: { n: 9, c: zr, r: !0, q: !0 },
                    profile_theme_id: {
                      n: 12,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    tiled: { n: 13, br: i.qM.readBool, bw: i.gp.writeBool },
                  },
                }),
              mr.sm_m
            );
          }
          static MBF() {
            return mr.sm_mbf || (mr.sm_mbf = i.w0(mr.M())), mr.sm_mbf;
          }
          toObject(r = !1) {
            return mr.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(mr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(mr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (b().BinaryReader)(r),
              g = new mr();
            return mr.deserializeBinaryFromReader(g, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(mr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (b().BinaryWriter)();
            return mr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(mr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (b().BinaryWriter)();
            return (
              mr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "LoyaltyRewardDefinition_CommunityItemData";
          }
        }
        class zr extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              zr.prototype.level || i.Sg(zr.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              zr.sm_m ||
                (zr.sm_m = {
                  proto: zr,
                  fields: {
                    level: { n: 1, br: i.qM.readInt32, bw: i.gp.writeInt32 },
                    image: { n: 2, br: i.qM.readString, bw: i.gp.writeString },
                  },
                }),
              zr.sm_m
            );
          }
          static MBF() {
            return zr.sm_mbf || (zr.sm_mbf = i.w0(zr.M())), zr.sm_mbf;
          }
          toObject(r = !1) {
            return zr.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(zr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(zr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (b().BinaryReader)(r),
              g = new zr();
            return zr.deserializeBinaryFromReader(g, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(zr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (b().BinaryWriter)();
            return zr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(zr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (b().BinaryWriter)();
            return (
              zr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "LoyaltyRewardDefinition_BadgeData";
          }
        }
        class fr extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              fr.prototype.bonusid || i.Sg(fr.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              fr.sm_m ||
                (fr.sm_m = {
                  proto: fr,
                  fields: {
                    bonusid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    appid: { n: 2, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    active: { n: 3, br: i.qM.readBool, bw: i.gp.writeBool },
                    points: { n: 4, br: i.qM.readInt32, bw: i.gp.writeInt32 },
                    timestamp_start: {
                      n: 5,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    timestamp_end: {
                      n: 6,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    internal_description: {
                      n: 7,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              fr.sm_m
            );
          }
          static MBF() {
            return fr.sm_mbf || (fr.sm_mbf = i.w0(fr.M())), fr.sm_mbf;
          }
          toObject(r = !1) {
            return fr.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(fr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(fr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (b().BinaryReader)(r),
              g = new fr();
            return fr.deserializeBinaryFromReader(g, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(fr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (b().BinaryWriter)();
            return fr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(fr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (b().BinaryWriter)();
            return (
              fr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "LoyaltyRewardPurchaseBonus";
          }
        }
        class Nr extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Nr.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new Nr();
          }
          static deserializeBinary(r) {
            let t = new (b().BinaryReader)(r),
              g = new Nr();
            return Nr.deserializeBinaryFromReader(g, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (b().BinaryWriter)();
            return Nr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (b().BinaryWriter)();
            return (
              Nr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_GetActivePurchaseBonuses_Request";
          }
        }
        class sr extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              sr.prototype.bonuses || i.Sg(sr.M()),
              M.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              sr.sm_m ||
                (sr.sm_m = {
                  proto: sr,
                  fields: { bonuses: { n: 1, c: fr, r: !0, q: !0 } },
                }),
              sr.sm_m
            );
          }
          static MBF() {
            return sr.sm_mbf || (sr.sm_mbf = i.w0(sr.M())), sr.sm_mbf;
          }
          toObject(r = !1) {
            return sr.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(sr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(sr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (b().BinaryReader)(r),
              g = new sr();
            return sr.deserializeBinaryFromReader(g, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(sr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (b().BinaryWriter)();
            return sr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(sr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (b().BinaryWriter)();
            return (
              sr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_GetActivePurchaseBonuses_Response";
          }
        }
        class H extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              H.prototype.appids || i.Sg(H.M()),
              M.Message.initialize(
                this,
                r,
                0,
                -1,
                [1, 3, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20],
                null,
              );
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              H.sm_m ||
                (H.sm_m = {
                  proto: H,
                  fields: {
                    appids: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint32,
                      pbr: i.qM.readPackedUint32,
                      bw: i.gp.writeRepeatedUint32,
                    },
                    time_available: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    community_item_classes: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: i.qM.readInt32,
                      pbr: i.qM.readPackedInt32,
                      bw: i.gp.writeRepeatedInt32,
                    },
                    language: {
                      n: 4,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    count: { n: 5, br: i.qM.readInt32, bw: i.gp.writeInt32 },
                    cursor: { n: 6, br: i.qM.readString, bw: i.gp.writeString },
                    sort: {
                      n: 7,
                      d: Ar,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    sort_descending: {
                      n: 8,
                      d: !0,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    reward_types: {
                      n: 9,
                      r: !0,
                      q: !0,
                      br: i.qM.readEnum,
                      pbr: i.qM.readPackedEnum,
                      bw: i.gp.writeRepeatedEnum,
                    },
                    excluded_community_item_classes: {
                      n: 10,
                      r: !0,
                      q: !0,
                      br: i.qM.readInt32,
                      pbr: i.qM.readPackedInt32,
                      bw: i.gp.writeRepeatedInt32,
                    },
                    definitionids: {
                      n: 11,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint32,
                      pbr: i.qM.readPackedUint32,
                      bw: i.gp.writeRepeatedUint32,
                    },
                    filters: {
                      n: 12,
                      r: !0,
                      q: !0,
                      br: i.qM.readEnum,
                      pbr: i.qM.readPackedEnum,
                      bw: i.gp.writeRepeatedEnum,
                    },
                    filter_match_all_category_tags: {
                      n: 13,
                      r: !0,
                      q: !0,
                      br: i.qM.readString,
                      bw: i.gp.writeRepeatedString,
                    },
                    filter_match_any_category_tags: {
                      n: 14,
                      r: !0,
                      q: !0,
                      br: i.qM.readString,
                      bw: i.gp.writeRepeatedString,
                    },
                    contains_definitionids: {
                      n: 15,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint32,
                      pbr: i.qM.readPackedUint32,
                      bw: i.gp.writeRepeatedUint32,
                    },
                    include_direct_purchase_disabled: {
                      n: 16,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    excluded_content_descriptors: {
                      n: 17,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint32,
                      pbr: i.qM.readPackedUint32,
                      bw: i.gp.writeRepeatedUint32,
                    },
                    excluded_appids: {
                      n: 18,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint32,
                      pbr: i.qM.readPackedUint32,
                      bw: i.gp.writeRepeatedUint32,
                    },
                    excluded_store_tagids: {
                      n: 19,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint32,
                      pbr: i.qM.readPackedUint32,
                      bw: i.gp.writeRepeatedUint32,
                    },
                    store_tagids: {
                      n: 20,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint32,
                      pbr: i.qM.readPackedUint32,
                      bw: i.gp.writeRepeatedUint32,
                    },
                    search_term: {
                      n: 21,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              H.sm_m
            );
          }
          static MBF() {
            return H.sm_mbf || (H.sm_mbf = i.w0(H.M())), H.sm_mbf;
          }
          toObject(r = !1) {
            return H.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(H.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(H.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (b().BinaryReader)(r),
              g = new H();
            return H.deserializeBinaryFromReader(g, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(H.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (b().BinaryWriter)();
            return H.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(H.M(), r, t);
          }
          serializeBase64String() {
            var r = new (b().BinaryWriter)();
            return (
              H.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_QueryRewardItems_Request";
          }
        }
        class G extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              G.prototype.definitions || i.Sg(G.M()),
              M.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              G.sm_m ||
                (G.sm_m = {
                  proto: G,
                  fields: {
                    definitions: { n: 1, c: K, r: !0, q: !0 },
                    total_count: {
                      n: 2,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                    count: { n: 3, br: i.qM.readInt32, bw: i.gp.writeInt32 },
                    next_cursor: {
                      n: 4,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              G.sm_m
            );
          }
          static MBF() {
            return G.sm_mbf || (G.sm_mbf = i.w0(G.M())), G.sm_mbf;
          }
          toObject(r = !1) {
            return G.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(G.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(G.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (b().BinaryReader)(r),
              g = new G();
            return G.deserializeBinaryFromReader(g, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(G.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (b().BinaryWriter)();
            return G.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(G.M(), r, t);
          }
          serializeBase64String() {
            var r = new (b().BinaryWriter)();
            return (
              G.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_QueryRewardItems_Response";
          }
        }
        class L extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              L.prototype.requests || i.Sg(L.M()),
              M.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              L.sm_m ||
                (L.sm_m = {
                  proto: L,
                  fields: { requests: { n: 1, c: H, r: !0, q: !0 } },
                }),
              L.sm_m
            );
          }
          static MBF() {
            return L.sm_mbf || (L.sm_mbf = i.w0(L.M())), L.sm_mbf;
          }
          toObject(r = !1) {
            return L.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(L.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(L.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (b().BinaryReader)(r),
              g = new L();
            return L.deserializeBinaryFromReader(g, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(L.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (b().BinaryWriter)();
            return L.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(L.M(), r, t);
          }
          serializeBase64String() {
            var r = new (b().BinaryWriter)();
            return (
              L.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_BatchedQueryRewardItems_Request";
          }
        }
        class lr extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              lr.prototype.responses || i.Sg(lr.M()),
              M.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              lr.sm_m ||
                (lr.sm_m = {
                  proto: lr,
                  fields: { responses: { n: 1, c: Tr, r: !0, q: !0 } },
                }),
              lr.sm_m
            );
          }
          static MBF() {
            return lr.sm_mbf || (lr.sm_mbf = i.w0(lr.M())), lr.sm_mbf;
          }
          toObject(r = !1) {
            return lr.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(lr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(lr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (b().BinaryReader)(r),
              g = new lr();
            return lr.deserializeBinaryFromReader(g, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(lr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (b().BinaryWriter)();
            return lr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(lr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (b().BinaryWriter)();
            return (
              lr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_BatchedQueryRewardItems_Response";
          }
        }
        class Tr extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Tr.prototype.eresult || i.Sg(Tr.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Tr.sm_m ||
                (Tr.sm_m = {
                  proto: Tr,
                  fields: {
                    eresult: { n: 1, br: i.qM.readInt32, bw: i.gp.writeInt32 },
                    response: { n: 2, c: G },
                  },
                }),
              Tr.sm_m
            );
          }
          static MBF() {
            return Tr.sm_mbf || (Tr.sm_mbf = i.w0(Tr.M())), Tr.sm_mbf;
          }
          toObject(r = !1) {
            return Tr.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Tr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Tr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (b().BinaryReader)(r),
              g = new Tr();
            return Tr.deserializeBinaryFromReader(g, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Tr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (b().BinaryWriter)();
            return Tr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Tr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (b().BinaryWriter)();
            return (
              Tr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_BatchedQueryRewardItems_Response_Response";
          }
        }
        class y extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              y.prototype.steamid || i.Sg(y.M()),
              M.Message.initialize(this, r, 0, -1, void 0, null);
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
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    language: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
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
            let t = new (b().BinaryReader)(r),
              g = new y();
            return y.deserializeBinaryFromReader(g, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(y.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (b().BinaryWriter)();
            return y.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(y.M(), r, t);
          }
          serializeBase64String() {
            var r = new (b().BinaryWriter)();
            return (
              y.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_GetEquippedProfileItems_Request";
          }
        }
        class jr extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              jr.prototype.active_definitions || i.Sg(jr.M()),
              M.Message.initialize(this, r, 0, -1, [1, 2, 3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              jr.sm_m ||
                (jr.sm_m = {
                  proto: jr,
                  fields: {
                    active_definitions: { n: 1, c: K, r: !0, q: !0 },
                    inactive_definitions: { n: 2, c: K, r: !0, q: !0 },
                    bundle_definitions: { n: 3, c: K, r: !0, q: !0 },
                  },
                }),
              jr.sm_m
            );
          }
          static MBF() {
            return jr.sm_mbf || (jr.sm_mbf = i.w0(jr.M())), jr.sm_mbf;
          }
          toObject(r = !1) {
            return jr.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(jr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(jr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (b().BinaryReader)(r),
              g = new jr();
            return jr.deserializeBinaryFromReader(g, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(jr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (b().BinaryWriter)();
            return jr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(jr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (b().BinaryWriter)();
            return (
              jr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CLoyaltyRewards_GetEquippedProfileItems_Response";
          }
        }
        var $r;
        ((v) => {
          function r(j, W, O) {
            return j.SendMsg(
              "LoyaltyRewards.GetPointsForSpend#1",
              (0, E.I8)(R, W, O),
              _,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          v.GetPointsForSpend = r;
          function t(j, W, O) {
            return j.SendMsg(
              "LoyaltyRewards.GetSummary#1",
              (0, E.I8)(Q, W, O),
              o,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          v.GetSummary = t;
          function g(j, W, O) {
            return j.SendMsg(
              "LoyaltyRewards.RedeemPoints#1",
              (0, E.I8)(S, W, O),
              p,
              { ePrivilege: 1 },
            );
          }
          v.RedeemPoints = g;
          function Cr(j, W, O) {
            return j.SendMsg(
              "LoyaltyRewards.RedeemPointsForBadgeLevel#1",
              (0, E.I8)(q, W, O),
              p,
              { ePrivilege: 1 },
            );
          }
          v.RedeemPointsForBadgeLevel = Cr;
          function Rr(j, W, O) {
            return j.SendMsg(
              "LoyaltyRewards.RedeemPointsToUpgradeItem#1",
              (0, E.I8)(rr, W, O),
              p,
              { ePrivilege: 1 },
            );
          }
          v.RedeemPointsToUpgradeItem = Rr;
          function _r(j, W, O) {
            return j.SendMsg(
              "LoyaltyRewards.RedeemPointsForProfileCustomization#1",
              (0, E.I8)(P, W, O),
              ir,
              { ePrivilege: 1 },
            );
          }
          v.RedeemPointsForProfileCustomization = _r;
          function ri(j, W, O) {
            return j.SendMsg(
              "LoyaltyRewards.RedeemPointsForProfileCustomizationUpgrade#1",
              (0, E.I8)(D, W, O),
              kr,
              { ePrivilege: 1 },
            );
          }
          v.RedeemPointsForProfileCustomizationUpgrade = ri;
          function ii(j, W, O) {
            return j.SendMsg(
              "LoyaltyRewards.RegisterForSteamDeckRewards#1",
              (0, E.I8)(tr, W, O),
              nr,
              { ePrivilege: 1 },
            );
          }
          v.RegisterForSteamDeckRewards = ii;
          function ti(j, W, O) {
            return j.SendMsg(
              "LoyaltyRewards.AddReaction#1",
              (0, E.I8)(I, W, O),
              Kr,
              { ePrivilege: 1 },
            );
          }
          v.AddReaction = ti;
          function ni(j, W, O) {
            return j.SendMsg(
              "LoyaltyRewards.GetReactions#1",
              (0, E.I8)(w, W, O),
              cr,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          v.GetReactions = ni;
          function ci(j, W, O) {
            return j.SendMsg(
              "LoyaltyRewards.GetReactionsSummaryForUser#1",
              (0, E.I8)(br, W, O),
              Br,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          v.GetReactionsSummaryForUser = ci;
          function bi(j, W, O) {
            return j.SendMsg(
              "LoyaltyRewards.GetReactionConfig#1",
              (0, E.I8)(d, W, O),
              Mr,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          v.GetReactionConfig = bi;
          function Bi(j, W, O) {
            return j.SendMsg(
              "LoyaltyRewards.GetProfileCustomizationsConfig#1",
              (0, E.I8)(pr, W, O),
              er,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          v.GetProfileCustomizationsConfig = Bi;
          function Mi(j, W, O) {
            return j.SendMsg(
              "LoyaltyRewards.GetEligibleApps#1",
              (0, E.I8)(Er, W, O),
              ur,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          v.GetEligibleApps = Mi;
          function gi(j, W, O) {
            return j.SendMsg(
              "LoyaltyRewards.GetActivePurchaseBonuses#1",
              (0, E.I8)(Nr, W, O),
              sr,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          v.GetActivePurchaseBonuses = gi;
          function ei(j, W, O) {
            return j.SendMsg(
              "LoyaltyRewards.QueryRewardItems#1",
              (0, E.I8)(H, W, O),
              G,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          v.QueryRewardItems = ei;
          function ui(j, W, O) {
            return j.SendMsg(
              "LoyaltyRewards.BatchedQueryRewardItems#1",
              (0, E.I8)(L, W, O),
              lr,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          v.BatchedQueryRewardItems = ui;
          function ai(j, W, O) {
            return j.SendMsg(
              "LoyaltyRewards.GetEquippedProfileItems#1",
              (0, E.I8)(y, W, O),
              jr,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          v.GetEquippedProfileItems = ai;
        })($r || ($r = {}));
      },
      7112: (Vr, Fr, f) => {
        f.d(Fr, { c3: () => T, wt: () => z, L6: () => Wr, Qm: () => Zr });
        var Wr = {};
        f.r(Wr), f.d(Wr, { Jz: () => Hr });
        var u = f(80613),
          e = f.n(u),
          c = f(75245),
          x = f(35038),
          M = f(49288);
        class b extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              b.prototype.item_type || c.Sg(b.M()),
              u.Message.initialize(this, n, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              b.sm_m ||
                (b.sm_m = {
                  proto: b,
                  fields: {
                    item_type: {
                      n: 1,
                      br: c.qM.readUint32,
                      bw: c.gp.writeUint32,
                    },
                    appid: { n: 2, br: c.qM.readUint32, bw: c.gp.writeUint32 },
                    item_name: {
                      n: 3,
                      br: c.qM.readString,
                      bw: c.gp.writeString,
                    },
                    item_title: {
                      n: 4,
                      br: c.qM.readString,
                      bw: c.gp.writeString,
                    },
                    item_description: {
                      n: 5,
                      br: c.qM.readString,
                      bw: c.gp.writeString,
                    },
                    item_image_small: {
                      n: 6,
                      br: c.qM.readString,
                      bw: c.gp.writeString,
                    },
                    item_image_large: {
                      n: 7,
                      br: c.qM.readString,
                      bw: c.gp.writeString,
                    },
                    item_key_values: {
                      n: 8,
                      br: c.qM.readString,
                      bw: c.gp.writeString,
                    },
                    item_series: {
                      n: 9,
                      br: c.qM.readUint32,
                      bw: c.gp.writeUint32,
                    },
                    item_class: {
                      n: 10,
                      br: c.qM.readUint32,
                      bw: c.gp.writeUint32,
                    },
                    editor_accountid: {
                      n: 11,
                      br: c.qM.readUint32,
                      bw: c.gp.writeUint32,
                    },
                    active: { n: 12, br: c.qM.readBool, bw: c.gp.writeBool },
                    item_image_composed: {
                      n: 13,
                      br: c.qM.readString,
                      bw: c.gp.writeString,
                    },
                    item_image_composed_foil: {
                      n: 14,
                      br: c.qM.readString,
                      bw: c.gp.writeString,
                    },
                    deleted: { n: 15, br: c.qM.readBool, bw: c.gp.writeBool },
                    item_last_changed: {
                      n: 16,
                      br: c.qM.readUint32,
                      bw: c.gp.writeUint32,
                    },
                    broadcast_channel_id: {
                      n: 17,
                      br: c.qM.readUint64String,
                      bw: c.gp.writeUint64String,
                    },
                    item_movie_webm: {
                      n: 18,
                      br: c.qM.readString,
                      bw: c.gp.writeString,
                    },
                    item_movie_mp4: {
                      n: 19,
                      br: c.qM.readString,
                      bw: c.gp.writeString,
                    },
                    item_movie_webm_small: {
                      n: 20,
                      br: c.qM.readString,
                      bw: c.gp.writeString,
                    },
                    item_movie_mp4_small: {
                      n: 21,
                      br: c.qM.readString,
                      bw: c.gp.writeString,
                    },
                    item_internal_name: {
                      n: 22,
                      br: c.qM.readString,
                      bw: c.gp.writeString,
                    },
                  },
                }),
              b.sm_m
            );
          }
          static MBF() {
            return b.sm_mbf || (b.sm_mbf = c.w0(b.M())), b.sm_mbf;
          }
          toObject(n = !1) {
            return b.toObject(n, this);
          }
          static toObject(n, B) {
            return c.BT(b.M(), n, B);
          }
          static fromObject(n) {
            return c.Uq(b.M(), n);
          }
          static deserializeBinary(n) {
            let B = new (e().BinaryReader)(n),
              h = new b();
            return b.deserializeBinaryFromReader(h, B);
          }
          static deserializeBinaryFromReader(n, B) {
            return c.zj(b.MBF(), n, B);
          }
          serializeBinary() {
            var n = new (e().BinaryWriter)();
            return b.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, B) {
            c.i0(b.M(), n, B);
          }
          serializeBase64String() {
            var n = new (e().BinaryWriter)();
            return (
              b.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CommunityItemDefinition";
          }
        }
        const i = 0,
          E = 1,
          Hr = 2;
        function xr(Ur) {
          return "unknown ESaleRewardDefType ( " + Ur + " )";
        }
        function l(Ur) {
          return "unknown ERewardDefinitionsAction ( " + Ur + " )";
        }
        class a extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              a.prototype.appid || c.Sg(a.M()),
              u.Message.initialize(this, n, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              a.sm_m ||
                (a.sm_m = {
                  proto: a,
                  fields: {
                    appid: { n: 1, br: c.qM.readUint32, bw: c.gp.writeUint32 },
                    community_item_type: {
                      n: 2,
                      br: c.qM.readUint32,
                      bw: c.gp.writeUint32,
                    },
                    community_item_class: {
                      n: 3,
                      br: c.qM.readUint32,
                      bw: c.gp.writeUint32,
                    },
                    community_definition: { n: 4, c: b },
                  },
                }),
              a.sm_m
            );
          }
          static MBF() {
            return a.sm_mbf || (a.sm_mbf = c.w0(a.M())), a.sm_mbf;
          }
          toObject(n = !1) {
            return a.toObject(n, this);
          }
          static toObject(n, B) {
            return c.BT(a.M(), n, B);
          }
          static fromObject(n) {
            return c.Uq(a.M(), n);
          }
          static deserializeBinary(n) {
            let B = new (e().BinaryReader)(n),
              h = new a();
            return a.deserializeBinaryFromReader(h, B);
          }
          static deserializeBinaryFromReader(n, B) {
            return c.zj(a.MBF(), n, B);
          }
          serializeBinary() {
            var n = new (e().BinaryWriter)();
            return a.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, B) {
            c.i0(a.M(), n, B);
          }
          serializeBase64String() {
            var n = new (e().BinaryWriter)();
            return (
              a.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "SaleReward_ItemDefinition";
          }
        }
        class m extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              m.prototype.communityitemid || c.Sg(m.M()),
              u.Message.initialize(this, n, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              m.sm_m ||
                (m.sm_m = {
                  proto: m,
                  fields: {
                    communityitemid: {
                      n: 1,
                      br: c.qM.readUint64String,
                      bw: c.gp.writeUint64String,
                    },
                    time_granted: {
                      n: 2,
                      br: c.qM.readUint32,
                      bw: c.gp.writeUint32,
                    },
                    item_definition: { n: 3, c: a },
                  },
                }),
              m.sm_m
            );
          }
          static MBF() {
            return m.sm_mbf || (m.sm_mbf = c.w0(m.M())), m.sm_mbf;
          }
          toObject(n = !1) {
            return m.toObject(n, this);
          }
          static toObject(n, B) {
            return c.BT(m.M(), n, B);
          }
          static fromObject(n) {
            return c.Uq(m.M(), n);
          }
          static deserializeBinary(n) {
            let B = new (e().BinaryReader)(n),
              h = new m();
            return m.deserializeBinaryFromReader(h, B);
          }
          static deserializeBinaryFromReader(n, B) {
            return c.zj(m.MBF(), n, B);
          }
          serializeBinary() {
            var n = new (e().BinaryWriter)();
            return m.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, B) {
            c.i0(m.M(), n, B);
          }
          serializeBase64String() {
            var n = new (e().BinaryWriter)();
            return (
              m.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "SaleItemRewardGrant";
          }
        }
        class z extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              z.prototype.language || c.Sg(z.M()),
              u.Message.initialize(this, n, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              z.sm_m ||
                (z.sm_m = {
                  proto: z,
                  fields: {
                    language: {
                      n: 1,
                      br: c.qM.readString,
                      bw: c.gp.writeString,
                    },
                  },
                }),
              z.sm_m
            );
          }
          static MBF() {
            return z.sm_mbf || (z.sm_mbf = c.w0(z.M())), z.sm_mbf;
          }
          toObject(n = !1) {
            return z.toObject(n, this);
          }
          static toObject(n, B) {
            return c.BT(z.M(), n, B);
          }
          static fromObject(n) {
            return c.Uq(z.M(), n);
          }
          static deserializeBinary(n) {
            let B = new (e().BinaryReader)(n),
              h = new z();
            return z.deserializeBinaryFromReader(h, B);
          }
          static deserializeBinaryFromReader(n, B) {
            return c.zj(z.MBF(), n, B);
          }
          serializeBinary() {
            var n = new (e().BinaryWriter)();
            return z.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, B) {
            c.i0(z.M(), n, B);
          }
          serializeBase64String() {
            var n = new (e().BinaryWriter)();
            return (
              z.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleItemRewards_ClaimItem_Request";
          }
        }
        class U extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              U.prototype.communityitemid || c.Sg(U.M()),
              u.Message.initialize(this, n, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              U.sm_m ||
                (U.sm_m = {
                  proto: U,
                  fields: {
                    communityitemid: {
                      n: 1,
                      br: c.qM.readUint64String,
                      bw: c.gp.writeUint64String,
                    },
                    next_claim_time: {
                      n: 2,
                      br: c.qM.readUint32,
                      bw: c.gp.writeUint32,
                    },
                    reward_item: { n: 3, c: M.l3 },
                  },
                }),
              U.sm_m
            );
          }
          static MBF() {
            return U.sm_mbf || (U.sm_mbf = c.w0(U.M())), U.sm_mbf;
          }
          toObject(n = !1) {
            return U.toObject(n, this);
          }
          static toObject(n, B) {
            return c.BT(U.M(), n, B);
          }
          static fromObject(n) {
            return c.Uq(U.M(), n);
          }
          static deserializeBinary(n) {
            let B = new (e().BinaryReader)(n),
              h = new U();
            return U.deserializeBinaryFromReader(h, B);
          }
          static deserializeBinaryFromReader(n, B) {
            return c.zj(U.MBF(), n, B);
          }
          serializeBinary() {
            var n = new (e().BinaryWriter)();
            return U.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, B) {
            c.i0(U.M(), n, B);
          }
          serializeBase64String() {
            var n = new (e().BinaryWriter)();
            return (
              U.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleItemRewards_ClaimItem_Response";
          }
        }
        class T extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              T.prototype.language || c.Sg(T.M()),
              u.Message.initialize(this, n, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              T.sm_m ||
                (T.sm_m = {
                  proto: T,
                  fields: {
                    language: {
                      n: 1,
                      br: c.qM.readString,
                      bw: c.gp.writeString,
                    },
                  },
                }),
              T.sm_m
            );
          }
          static MBF() {
            return T.sm_mbf || (T.sm_mbf = c.w0(T.M())), T.sm_mbf;
          }
          toObject(n = !1) {
            return T.toObject(n, this);
          }
          static toObject(n, B) {
            return c.BT(T.M(), n, B);
          }
          static fromObject(n) {
            return c.Uq(T.M(), n);
          }
          static deserializeBinary(n) {
            let B = new (e().BinaryReader)(n),
              h = new T();
            return T.deserializeBinaryFromReader(h, B);
          }
          static deserializeBinaryFromReader(n, B) {
            return c.zj(T.MBF(), n, B);
          }
          serializeBinary() {
            var n = new (e().BinaryWriter)();
            return T.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, B) {
            c.i0(T.M(), n, B);
          }
          serializeBase64String() {
            var n = new (e().BinaryWriter)();
            return (
              T.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleItemRewards_CanClaimItem_Request";
          }
        }
        class N extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              N.prototype.can_claim || c.Sg(N.M()),
              u.Message.initialize(this, n, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              N.sm_m ||
                (N.sm_m = {
                  proto: N,
                  fields: {
                    can_claim: { n: 1, br: c.qM.readBool, bw: c.gp.writeBool },
                    next_claim_time: {
                      n: 2,
                      br: c.qM.readUint32,
                      bw: c.gp.writeUint32,
                    },
                    reward_item: { n: 3, c: M.l3 },
                  },
                }),
              N.sm_m
            );
          }
          static MBF() {
            return N.sm_mbf || (N.sm_mbf = c.w0(N.M())), N.sm_mbf;
          }
          toObject(n = !1) {
            return N.toObject(n, this);
          }
          static toObject(n, B) {
            return c.BT(N.M(), n, B);
          }
          static fromObject(n) {
            return c.Uq(N.M(), n);
          }
          static deserializeBinary(n) {
            let B = new (e().BinaryReader)(n),
              h = new N();
            return N.deserializeBinaryFromReader(h, B);
          }
          static deserializeBinaryFromReader(n, B) {
            return c.zj(N.MBF(), n, B);
          }
          serializeBinary() {
            var n = new (e().BinaryWriter)();
            return N.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, B) {
            c.i0(N.M(), n, B);
          }
          serializeBase64String() {
            var n = new (e().BinaryWriter)();
            return (
              N.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleItemRewards_CanClaimItem_Response";
          }
        }
        class s extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              s.prototype.sale_reward_def_id || c.Sg(s.M()),
              u.Message.initialize(this, n, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              s.sm_m ||
                (s.sm_m = {
                  proto: s,
                  fields: {
                    sale_reward_def_id: {
                      n: 1,
                      br: c.qM.readUint32,
                      bw: c.gp.writeUint32,
                    },
                    appid: { n: 2, br: c.qM.readUint32, bw: c.gp.writeUint32 },
                    virtual_item_reward_event_id: {
                      n: 3,
                      br: c.qM.readUint32,
                      bw: c.gp.writeUint32,
                    },
                    rtime_start_time: {
                      n: 4,
                      br: c.qM.readUint32,
                      bw: c.gp.writeUint32,
                    },
                    rtime_end_time: {
                      n: 5,
                      br: c.qM.readUint32,
                      bw: c.gp.writeUint32,
                    },
                    num_items_per_def: {
                      n: 6,
                      br: c.qM.readUint32,
                      bw: c.gp.writeUint32,
                    },
                    reward_def_type: {
                      n: 7,
                      br: c.qM.readEnum,
                      bw: c.gp.writeEnum,
                    },
                  },
                }),
              s.sm_m
            );
          }
          static MBF() {
            return s.sm_mbf || (s.sm_mbf = c.w0(s.M())), s.sm_mbf;
          }
          toObject(n = !1) {
            return s.toObject(n, this);
          }
          static toObject(n, B) {
            return c.BT(s.M(), n, B);
          }
          static fromObject(n) {
            return c.Uq(s.M(), n);
          }
          static deserializeBinary(n) {
            let B = new (e().BinaryReader)(n),
              h = new s();
            return s.deserializeBinaryFromReader(h, B);
          }
          static deserializeBinaryFromReader(n, B) {
            return c.zj(s.MBF(), n, B);
          }
          serializeBinary() {
            var n = new (e().BinaryWriter)();
            return s.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, B) {
            c.i0(s.M(), n, B);
          }
          serializeBase64String() {
            var n = new (e().BinaryWriter)();
            return (
              s.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamItemRewardDefinition";
          }
        }
        class F extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              F.prototype.virtual_item_reward_event_id || c.Sg(F.M()),
              u.Message.initialize(this, n, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              F.sm_m ||
                (F.sm_m = {
                  proto: F,
                  fields: {
                    virtual_item_reward_event_id: {
                      n: 1,
                      br: c.qM.readUint32,
                      bw: c.gp.writeUint32,
                    },
                  },
                }),
              F.sm_m
            );
          }
          static MBF() {
            return F.sm_mbf || (F.sm_mbf = c.w0(F.M())), F.sm_mbf;
          }
          toObject(n = !1) {
            return F.toObject(n, this);
          }
          static toObject(n, B) {
            return c.BT(F.M(), n, B);
          }
          static fromObject(n) {
            return c.Uq(F.M(), n);
          }
          static deserializeBinary(n) {
            let B = new (e().BinaryReader)(n),
              h = new F();
            return F.deserializeBinaryFromReader(h, B);
          }
          static deserializeBinaryFromReader(n, B) {
            return c.zj(F.MBF(), n, B);
          }
          serializeBinary() {
            var n = new (e().BinaryWriter)();
            return F.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, B) {
            c.i0(F.M(), n, B);
          }
          serializeBase64String() {
            var n = new (e().BinaryWriter)();
            return (
              F.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleItemRewards_GetRewardDefinitions_Request";
          }
        }
        class V extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              V.prototype.definitions || c.Sg(V.M()),
              u.Message.initialize(this, n, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              V.sm_m ||
                (V.sm_m = {
                  proto: V,
                  fields: { definitions: { n: 1, c: s, r: !0, q: !0 } },
                }),
              V.sm_m
            );
          }
          static MBF() {
            return V.sm_mbf || (V.sm_mbf = c.w0(V.M())), V.sm_mbf;
          }
          toObject(n = !1) {
            return V.toObject(n, this);
          }
          static toObject(n, B) {
            return c.BT(V.M(), n, B);
          }
          static fromObject(n) {
            return c.Uq(V.M(), n);
          }
          static deserializeBinary(n) {
            let B = new (e().BinaryReader)(n),
              h = new V();
            return V.deserializeBinaryFromReader(h, B);
          }
          static deserializeBinaryFromReader(n, B) {
            return c.zj(V.MBF(), n, B);
          }
          serializeBinary() {
            var n = new (e().BinaryWriter)();
            return V.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, B) {
            c.i0(V.M(), n, B);
          }
          serializeBase64String() {
            var n = new (e().BinaryWriter)();
            return (
              V.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleItemRewards_GetRewardDefinitions_Response";
          }
        }
        class Z extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              Z.prototype.definitions || c.Sg(Z.M()),
              u.Message.initialize(this, n, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Z.sm_m ||
                (Z.sm_m = {
                  proto: Z,
                  fields: {
                    definitions: { n: 1, c: s, r: !0, q: !0 },
                    action: { n: 2, br: c.qM.readEnum, bw: c.gp.writeEnum },
                  },
                }),
              Z.sm_m
            );
          }
          static MBF() {
            return Z.sm_mbf || (Z.sm_mbf = c.w0(Z.M())), Z.sm_mbf;
          }
          toObject(n = !1) {
            return Z.toObject(n, this);
          }
          static toObject(n, B) {
            return c.BT(Z.M(), n, B);
          }
          static fromObject(n) {
            return c.Uq(Z.M(), n);
          }
          static deserializeBinary(n) {
            let B = new (e().BinaryReader)(n),
              h = new Z();
            return Z.deserializeBinaryFromReader(h, B);
          }
          static deserializeBinaryFromReader(n, B) {
            return c.zj(Z.MBF(), n, B);
          }
          serializeBinary() {
            var n = new (e().BinaryWriter)();
            return Z.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, B) {
            c.i0(Z.M(), n, B);
          }
          serializeBase64String() {
            var n = new (e().BinaryWriter)();
            return (
              Z.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleItemRewards_SetRewardDefinitions_Request";
          }
        }
        class $ extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              $.prototype.definitions || c.Sg($.M()),
              u.Message.initialize(this, n, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $.sm_m ||
                ($.sm_m = {
                  proto: $,
                  fields: { definitions: { n: 1, c: s, r: !0, q: !0 } },
                }),
              $.sm_m
            );
          }
          static MBF() {
            return $.sm_mbf || ($.sm_mbf = c.w0($.M())), $.sm_mbf;
          }
          toObject(n = !1) {
            return $.toObject(n, this);
          }
          static toObject(n, B) {
            return c.BT($.M(), n, B);
          }
          static fromObject(n) {
            return c.Uq($.M(), n);
          }
          static deserializeBinary(n) {
            let B = new (e().BinaryReader)(n),
              h = new $();
            return $.deserializeBinaryFromReader(h, B);
          }
          static deserializeBinaryFromReader(n, B) {
            return c.zj($.MBF(), n, B);
          }
          serializeBinary() {
            var n = new (e().BinaryWriter)();
            return $.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, B) {
            c.i0($.M(), n, B);
          }
          serializeBase64String() {
            var n = new (e().BinaryWriter)();
            return (
              $.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleItemRewards_SetRewardDefinitions_Response";
          }
        }
        class J extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              J.prototype.sale_def_type || c.Sg(J.M()),
              u.Message.initialize(this, n, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              J.sm_m ||
                (J.sm_m = {
                  proto: J,
                  fields: {
                    sale_def_type: {
                      n: 1,
                      br: c.qM.readEnum,
                      bw: c.gp.writeEnum,
                    },
                    language: {
                      n: 2,
                      br: c.qM.readString,
                      bw: c.gp.writeString,
                    },
                    include_community_item_def: {
                      n: 3,
                      br: c.qM.readBool,
                      bw: c.gp.writeBool,
                    },
                  },
                }),
              J.sm_m
            );
          }
          static MBF() {
            return J.sm_mbf || (J.sm_mbf = c.w0(J.M())), J.sm_mbf;
          }
          toObject(n = !1) {
            return J.toObject(n, this);
          }
          static toObject(n, B) {
            return c.BT(J.M(), n, B);
          }
          static fromObject(n) {
            return c.Uq(J.M(), n);
          }
          static deserializeBinary(n) {
            let B = new (e().BinaryReader)(n),
              h = new J();
            return J.deserializeBinaryFromReader(h, B);
          }
          static deserializeBinaryFromReader(n, B) {
            return c.zj(J.MBF(), n, B);
          }
          serializeBinary() {
            var n = new (e().BinaryWriter)();
            return J.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, B) {
            c.i0(J.M(), n, B);
          }
          serializeBase64String() {
            var n = new (e().BinaryWriter)();
            return (
              J.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleItemRewards_GetClaimedSaleRewards_Request";
          }
        }
        class Y extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              Y.prototype.num_items_granted || c.Sg(Y.M()),
              u.Message.initialize(this, n, 0, -1, [4], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Y.sm_m ||
                (Y.sm_m = {
                  proto: Y,
                  fields: {
                    num_items_granted: {
                      n: 1,
                      br: c.qM.readInt32,
                      bw: c.gp.writeInt32,
                    },
                    num_items_earned: {
                      n: 2,
                      br: c.qM.readInt32,
                      bw: c.gp.writeInt32,
                    },
                    current_def: { n: 3, c: s },
                    reward_items: { n: 4, c: m, r: !0, q: !0 },
                  },
                }),
              Y.sm_m
            );
          }
          static MBF() {
            return Y.sm_mbf || (Y.sm_mbf = c.w0(Y.M())), Y.sm_mbf;
          }
          toObject(n = !1) {
            return Y.toObject(n, this);
          }
          static toObject(n, B) {
            return c.BT(Y.M(), n, B);
          }
          static fromObject(n) {
            return c.Uq(Y.M(), n);
          }
          static deserializeBinary(n) {
            let B = new (e().BinaryReader)(n),
              h = new Y();
            return Y.deserializeBinaryFromReader(h, B);
          }
          static deserializeBinaryFromReader(n, B) {
            return c.zj(Y.MBF(), n, B);
          }
          serializeBinary() {
            var n = new (e().BinaryWriter)();
            return Y.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, B) {
            c.i0(Y.M(), n, B);
          }
          serializeBase64String() {
            var n = new (e().BinaryWriter)();
            return (
              Y.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleItemRewards_GetClaimedSaleRewards_Response";
          }
        }
        class X extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              X.prototype.sale_def_type || c.Sg(X.M()),
              u.Message.initialize(this, n, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              X.sm_m ||
                (X.sm_m = {
                  proto: X,
                  fields: {
                    sale_def_type: {
                      n: 1,
                      br: c.qM.readEnum,
                      bw: c.gp.writeEnum,
                    },
                    language: {
                      n: 2,
                      br: c.qM.readString,
                      bw: c.gp.writeString,
                    },
                    include_community_item_def: {
                      n: 3,
                      br: c.qM.readBool,
                      bw: c.gp.writeBool,
                    },
                  },
                }),
              X.sm_m
            );
          }
          static MBF() {
            return X.sm_mbf || (X.sm_mbf = c.w0(X.M())), X.sm_mbf;
          }
          toObject(n = !1) {
            return X.toObject(n, this);
          }
          static toObject(n, B) {
            return c.BT(X.M(), n, B);
          }
          static fromObject(n) {
            return c.Uq(X.M(), n);
          }
          static deserializeBinary(n) {
            let B = new (e().BinaryReader)(n),
              h = new X();
            return X.deserializeBinaryFromReader(h, B);
          }
          static deserializeBinaryFromReader(n, B) {
            return c.zj(X.MBF(), n, B);
          }
          serializeBinary() {
            var n = new (e().BinaryWriter)();
            return X.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, B) {
            c.i0(X.M(), n, B);
          }
          serializeBase64String() {
            var n = new (e().BinaryWriter)();
            return (
              X.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleItemRewards_GetCurrentDefinition_Request";
          }
        }
        class A extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              A.prototype.definition || c.Sg(A.M()),
              u.Message.initialize(this, n, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              A.sm_m ||
                (A.sm_m = {
                  proto: A,
                  fields: {
                    definition: { n: 1, c: s },
                    reward_items: { n: 2, c: a, r: !0, q: !0 },
                  },
                }),
              A.sm_m
            );
          }
          static MBF() {
            return A.sm_mbf || (A.sm_mbf = c.w0(A.M())), A.sm_mbf;
          }
          toObject(n = !1) {
            return A.toObject(n, this);
          }
          static toObject(n, B) {
            return c.BT(A.M(), n, B);
          }
          static fromObject(n) {
            return c.Uq(A.M(), n);
          }
          static deserializeBinary(n) {
            let B = new (e().BinaryReader)(n),
              h = new A();
            return A.deserializeBinaryFromReader(h, B);
          }
          static deserializeBinaryFromReader(n, B) {
            return c.zj(A.MBF(), n, B);
          }
          serializeBinary() {
            var n = new (e().BinaryWriter)();
            return A.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, B) {
            c.i0(A.M(), n, B);
          }
          serializeBase64String() {
            var n = new (e().BinaryWriter)();
            return (
              A.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleItemRewards_GetCurrentDefinition_Response";
          }
        }
        var Zr;
        ((Ur) => {
          function n(Or, hr, vr) {
            return Or.SendMsg(
              "SaleItemRewards.ClaimItem#1",
              (0, x.I8)(z, hr, vr),
              U,
              { ePrivilege: 1 },
            );
          }
          Ur.ClaimItem = n;
          function B(Or, hr, vr) {
            return Or.SendMsg(
              "SaleItemRewards.CanClaimItem#1",
              (0, x.I8)(T, hr, vr),
              N,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          Ur.CanClaimItem = B;
          function h(Or, hr, vr) {
            return Or.SendMsg(
              "SaleItemRewards.GetRewardDefinitions#1",
              (0, x.I8)(F, hr, vr),
              V,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          }
          Ur.GetRewardDefinitions = h;
          function Jr(Or, hr, vr) {
            return Or.SendMsg(
              "SaleItemRewards.SetRewardDefinitions#1",
              (0, x.I8)(Z, hr, vr),
              $,
              { ePrivilege: 4 },
            );
          }
          Ur.SetRewardDefinitions = Jr;
          function Yr(Or, hr, vr) {
            return Or.SendMsg(
              "SaleItemRewards.GetClaimedSaleRewards#1",
              (0, x.I8)(J, hr, vr),
              Y,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          Ur.GetClaimedSaleRewards = Yr;
          function Xr(Or, hr, vr) {
            return Or.SendMsg(
              "SaleItemRewards.GetCurrentDefinition#1",
              (0, x.I8)(X, hr, vr),
              A,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          Ur.GetCurrentDefinition = Xr;
        })(Zr || (Zr = {}));
      },
      13465: (Vr, Fr, f) => {
        f.d(Fr, { c: () => e });
        var Wr = f(7850),
          u = f(90626);
        function e(c) {
          const {
              rgSources: x,
              onIncrementalError: M,
              onError: b,
              strAltText: i,
              ref: E,
              ...Hr
            } = c,
            xr = u.useRef(null),
            [l, a] = u.useState(0),
            [m, z] = u.useState(0);
          u.useImperativeHandle(
            E,
            () => ({ imgRef: xr, nSourceIndex: l, nSourceLength: x.length }),
            [xr, l, x],
          );
          const U = u.useMemo(() => JSON.stringify(x), [x]);
          u.useEffect(() => {
            a(0), z((s) => s + 1);
          }, [U]);
          const T = u.useMemo(() => {
              let s = "";
              return (
                x && x.length > l && (s = x[l]),
                s ||
                  (console.warn(
                    "MultiSourceImage created with no image src",
                    c,
                    l,
                  ),
                  (s =
                    "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=")),
                s
              );
            }, [x, l, c]),
            N = u.useCallback(
              (s) => {
                M?.(s, x[l], l);
                const F = l + 1;
                F >= x.length && b && b(s), F < x.length && a(F);
              },
              [l, b, M, x],
            );
          return (0, Wr.jsx)(
            "img",
            { ref: xr, ...Hr, src: T, onError: N, alt: i },
            m,
          );
        }
      },
      95892: (Vr, Fr, f) => {
        f.d(Fr, { J: () => Hr });
        var Wr = f(7850),
          u = f(19298),
          e = f(90626),
          c = f(82734),
          x = f(30096),
          M = Object.defineProperty,
          b = Object.getOwnPropertyDescriptor,
          i = (xr, l, a, m) => {
            for (
              var z = m > 1 ? void 0 : m ? b(l, a) : l, U = xr.length - 1, T;
              U >= 0;
              U--
            )
              (T = xr[U]) && (z = (m ? T(l, a, z) : T(z)) || z);
            return m && z && M(l, a, z), z;
          };
        const E = class Qr extends e.Component {
          static GetScrollableClassname() {
            return "vt-scrollable";
          }
          m_observer = null;
          m_refElement = e.createRef();
          m_elTracked = null;
          m_bPreviouslyIntersecting = !1;
          BTriggerOnce() {
            return (this.props.trigger || "once") == "once";
          }
          GetBoundingClientRect() {
            return this.m_refElement.current
              ? this.m_refElement.current.getBoundingClientRect()
              : null;
          }
          DestroyObserver() {
            this.m_observer &&
              (this.m_observer.disconnect(),
              (this.m_observer = null),
              (this.m_elTracked = null));
          }
          componentWillUnmount() {
            this.DestroyObserver();
          }
          componentDidMount() {
            this.UpdateObserver(null);
          }
          componentDidUpdate(l) {
            this.UpdateObserver(l);
          }
          UpdateObserver(l) {
            if (this.m_bPreviouslyIntersecting && this.BTriggerOnce()) return;
            this.m_observer &&
              l &&
              (l.rootMargin != this.m_observer.rootMargin ||
                l.thresholds != this.m_observer.thresholds) &&
              this.DestroyObserver();
            let a = this.m_refElement.current;
            if (
              (this.m_observer &&
                a != this.m_elTracked &&
                (this.m_elTracked &&
                  this.m_observer.unobserve(this.m_elTracked),
                (this.m_elTracked = null)),
              !this.m_observer && a)
            ) {
              let z = { root: this.FindScrollableAncestor(a) };
              this.props.rootMargin && (z.rootMargin = this.props.rootMargin),
                this.props.thresholds && (z.threshold = this.props.thresholds),
                (this.m_observer = (0, x.md)(a, this.OnIntersection, z));
            }
            this.m_observer &&
              a &&
              a != this.m_elTracked &&
              (this.m_observer.observe(a), (this.m_elTracked = a));
          }
          FindScrollableAncestor(l) {
            return c.Kf(l, (a) => {
              const m = this.props.horizontal
                ? window.getComputedStyle(a).overflowX
                : window.getComputedStyle(a).overflowY;
              return !!(
                m == "scroll" ||
                m == "auto" ||
                a.classList.contains(Qr.GetScrollableClassname())
              );
            });
          }
          HandleRef(l) {
            (0, x.cZ)(this.m_refElement, l),
              this.props.containerRef && (0, x.cZ)(this.props.containerRef, l);
          }
          OnIntersection(l, a) {
            let m = !1;
            for (const z of l)
              if (z.isIntersecting) {
                m = !0;
                break;
              }
            this.m_bPreviouslyIntersecting != m &&
              ((this.m_bPreviouslyIntersecting = m),
              this.props.onVisibilityChange && this.props.onVisibilityChange(m),
              m && this.BTriggerOnce() && this.DestroyObserver());
          }
          render() {
            let {
              onVisibilityChange: l,
              rootMargin: a,
              trigger: m,
              horizontal: z,
              containerRef: U,
              ...T
            } = this.props;
            return (0, Wr.jsx)(u.Z, {
              ref: this.HandleRef,
              ...T,
              children: this.props.children,
            });
          }
        };
        i([x.oI], E.prototype, "HandleRef", 1),
          i([x.oI], E.prototype, "OnIntersection", 1);
        let Hr = E;
      },
    },
  ]);
})();
