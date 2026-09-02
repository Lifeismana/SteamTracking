/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [2079],
    {
      33255: (X, J, W) => {
        W.d(J, { u: () => E });
        var I = W(72604),
          x = W(72609),
          p = W(20194),
          M = W(41735),
          c = W.n(M),
          r = W(90626);
        function E(U) {
          const N = (0, p.I)({
            queryKey: ["useMilestoneByAppID", U],
            queryFn: async () => {
              const H = `${x.TS.PARTNER_BASE_URL}seasonpass/ajaxgetmilestoneinfo`,
                T = { appid: U },
                A = await c().get(H, { params: T });
              if (A?.data?.success == I.R) return A.data.milestones;
              throw new Error("failed to load milestonse for appid " + U);
            },
            enabled: !!U,
          });
          return r.useMemo(() => N?.data, [U, N.isLoading]);
        }
      },
      78653: (X, J, W) => {
        W.d(J, {
          HX: () => u,
          RE: () => B,
          ei: () => w,
          rA: () => a,
          _8: () => x,
          Qo: () => I,
          tb: () => p,
          eJ: () => $,
        });
        var I = {};
        W.r(I),
          W.d(I, {
            tb: () => N,
            MF: () => V,
            Z5: () => T,
            Wk: () => Z,
            o6: () => A,
            Jg: () => Y,
            RO: () => k,
          });
        var x = {};
        W.r(x), W.d(x, { G: () => L });
        var p = {};
        W.r(p), W.d(p, { ol: () => K });
        var M = W(80613),
          c = W.n(M),
          r = W(75245),
          E = W(35038);
        const U = 0,
          N = 1,
          H = 2,
          T = 3,
          A = 4,
          Z = 5,
          V = 6,
          q = 7,
          s = 8,
          Y = 9,
          k = 10,
          L = 0,
          e = 1,
          G = 0,
          K = 1,
          R = 2;
        function P(j) {
          return "unknown EPartnerDeadlineType ( " + j + " )";
        }
        function C(j) {
          return "unknown EPartnerDeadlineStatus ( " + j + " )";
        }
        function D(j) {
          return "unknown EPartnerDismissState ( " + j + " )";
        }
        class b extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              b.prototype.partnerid || r.Sg(b.M()),
              M.Message.initialize(this, t, 0, -1, [5], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              b.sm_m ||
                (b.sm_m = {
                  proto: b,
                  fields: {
                    partnerid: {
                      n: 1,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    accountid: {
                      n: 13,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    type: { n: 2, br: r.qM.readEnum, bw: r.gp.writeEnum },
                    status: { n: 3, br: r.qM.readEnum, bw: r.gp.writeEnum },
                    due_date: {
                      n: 4,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    email_days_before_due: {
                      n: 5,
                      r: !0,
                      q: !0,
                      br: r.qM.readUint32,
                      pbr: r.qM.readPackedUint32,
                      bw: r.gp.writeRepeatedUint32,
                    },
                    gid: {
                      n: 6,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    store_item_type: {
                      n: 7,
                      br: r.qM.readEnum,
                      bw: r.gp.writeEnum,
                    },
                    store_item_id: {
                      n: 8,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    discount_event_id: {
                      n: 9,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    required_rights: {
                      n: 11,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    description_jsondata: {
                      n: 10,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    send_email_on_creation: {
                      n: 12,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                  },
                }),
              b.sm_m
            );
          }
          static MBF() {
            return b.sm_mbf || (b.sm_mbf = r.w0(b.M())), b.sm_mbf;
          }
          toObject(t = !1) {
            return b.toObject(t, this);
          }
          static toObject(t, i) {
            return r.BT(b.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(b.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (c().BinaryReader)(t),
              f = new b();
            return b.deserializeBinaryFromReader(f, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(b.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return b.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(b.M(), t, i);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              b.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerDeadline";
          }
        }
        class o extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              o.prototype.deadlineid || r.Sg(o.M()),
              M.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              o.sm_m ||
                (o.sm_m = {
                  proto: o,
                  fields: {
                    deadlineid: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    partnerid: {
                      n: 2,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    accountid: {
                      n: 8,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    type: { n: 3, br: r.qM.readEnum, bw: r.gp.writeEnum },
                    gid: {
                      n: 4,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    store_item_type: {
                      n: 5,
                      br: r.qM.readEnum,
                      bw: r.gp.writeEnum,
                    },
                    store_item_id: {
                      n: 6,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    discount_event_id: {
                      n: 7,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              o.sm_m
            );
          }
          static MBF() {
            return o.sm_mbf || (o.sm_mbf = r.w0(o.M())), o.sm_mbf;
          }
          toObject(t = !1) {
            return o.toObject(t, this);
          }
          static toObject(t, i) {
            return r.BT(o.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(o.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (c().BinaryReader)(t),
              f = new o();
            return o.deserializeBinaryFromReader(f, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(o.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return o.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(o.M(), t, i);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              o.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerDeadlineLookUpKey";
          }
        }
        class z extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              z.prototype.partnerid || r.Sg(z.M()),
              M.Message.initialize(this, t, 0, -1, [5], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              z.sm_m ||
                (z.sm_m = {
                  proto: z,
                  fields: {
                    partnerid: {
                      n: 1,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    accountid: {
                      n: 6,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    start_date: {
                      n: 2,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    end_date: {
                      n: 3,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    include_complete: {
                      n: 4,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    lookup_key: { n: 5, c: o, r: !0, q: !0 },
                  },
                }),
              z.sm_m
            );
          }
          static MBF() {
            return z.sm_mbf || (z.sm_mbf = r.w0(z.M())), z.sm_mbf;
          }
          toObject(t = !1) {
            return z.toObject(t, this);
          }
          static toObject(t, i) {
            return r.BT(z.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(z.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (c().BinaryReader)(t),
              f = new z();
            return z.deserializeBinaryFromReader(f, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(z.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return z.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(z.M(), t, i);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              z.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerDeadline_GetDeadlinesForPartner_Request";
          }
        }
        class g extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              g.prototype.deadlines || r.Sg(g.M()),
              M.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              g.sm_m ||
                (g.sm_m = {
                  proto: g,
                  fields: { deadlines: { n: 1, c: y, r: !0, q: !0 } },
                }),
              g.sm_m
            );
          }
          static MBF() {
            return g.sm_mbf || (g.sm_mbf = r.w0(g.M())), g.sm_mbf;
          }
          toObject(t = !1) {
            return g.toObject(t, this);
          }
          static toObject(t, i) {
            return r.BT(g.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(g.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (c().BinaryReader)(t),
              f = new g();
            return g.deserializeBinaryFromReader(f, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(g.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return g.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(g.M(), t, i);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              g.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerDeadline_GetDeadlinesForPartner_Response";
          }
        }
        class y extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              y.prototype.deadlineid || r.Sg(y.M()),
              M.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              y.sm_m ||
                (y.sm_m = {
                  proto: y,
                  fields: {
                    deadlineid: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    data: { n: 2, c: b },
                  },
                }),
              y.sm_m
            );
          }
          static MBF() {
            return y.sm_mbf || (y.sm_mbf = r.w0(y.M())), y.sm_mbf;
          }
          toObject(t = !1) {
            return y.toObject(t, this);
          }
          static toObject(t, i) {
            return r.BT(y.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(y.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (c().BinaryReader)(t),
              f = new y();
            return y.deserializeBinaryFromReader(f, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(y.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return y.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(y.M(), t, i);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              y.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerDeadline_GetDeadlinesForPartner_Response_Result";
          }
        }
        class m extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              m.prototype.type || r.Sg(m.M()),
              M.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              m.sm_m ||
                (m.sm_m = {
                  proto: m,
                  fields: {
                    type: { n: 1, br: r.qM.readEnum, bw: r.gp.writeEnum },
                    start_date: {
                      n: 2,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    end_date: {
                      n: 3,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    include_complete: {
                      n: 4,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    store_item_type: {
                      n: 7,
                      br: r.qM.readEnum,
                      bw: r.gp.writeEnum,
                    },
                    store_item_id: {
                      n: 8,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              m.sm_m
            );
          }
          static MBF() {
            return m.sm_mbf || (m.sm_mbf = r.w0(m.M())), m.sm_mbf;
          }
          toObject(t = !1) {
            return m.toObject(t, this);
          }
          static toObject(t, i) {
            return r.BT(m.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(m.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (c().BinaryReader)(t),
              f = new m();
            return m.deserializeBinaryFromReader(f, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(m.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return m.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(m.M(), t, i);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              m.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerDeadline_GetDeadlineByTimeRange_Request";
          }
        }
        class l extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              l.prototype.deadlines || r.Sg(l.M()),
              M.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              l.sm_m ||
                (l.sm_m = {
                  proto: l,
                  fields: { deadlines: { n: 1, c: d, r: !0, q: !0 } },
                }),
              l.sm_m
            );
          }
          static MBF() {
            return l.sm_mbf || (l.sm_mbf = r.w0(l.M())), l.sm_mbf;
          }
          toObject(t = !1) {
            return l.toObject(t, this);
          }
          static toObject(t, i) {
            return r.BT(l.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(l.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (c().BinaryReader)(t),
              f = new l();
            return l.deserializeBinaryFromReader(f, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(l.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return l.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(l.M(), t, i);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              l.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerDeadline_GetDeadlineByTimeRange_Response";
          }
        }
        class d extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              d.prototype.deadlineid || r.Sg(d.M()),
              M.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              d.sm_m ||
                (d.sm_m = {
                  proto: d,
                  fields: {
                    deadlineid: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    data: { n: 2, c: b },
                  },
                }),
              d.sm_m
            );
          }
          static MBF() {
            return d.sm_mbf || (d.sm_mbf = r.w0(d.M())), d.sm_mbf;
          }
          toObject(t = !1) {
            return d.toObject(t, this);
          }
          static toObject(t, i) {
            return r.BT(d.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(d.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (c().BinaryReader)(t),
              f = new d();
            return d.deserializeBinaryFromReader(f, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(d.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return d.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(d.M(), t, i);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              d.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerDeadline_GetDeadlineByTimeRange_Response_Result";
          }
        }
        class u extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              u.prototype.state || r.Sg(u.M()),
              M.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              u.sm_m ||
                (u.sm_m = {
                  proto: u,
                  fields: {
                    state: { n: 1, br: r.qM.readEnum, bw: r.gp.writeEnum },
                    accountid: {
                      n: 2,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    key_json: {
                      n: 3,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    partnerid: {
                      n: 4,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    rtime_create: {
                      n: 5,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    rtime_validity: {
                      n: 6,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    dismiss_id: {
                      n: 7,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                  },
                }),
              u.sm_m
            );
          }
          static MBF() {
            return u.sm_mbf || (u.sm_mbf = r.w0(u.M())), u.sm_mbf;
          }
          toObject(t = !1) {
            return u.toObject(t, this);
          }
          static toObject(t, i) {
            return r.BT(u.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(u.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (c().BinaryReader)(t),
              f = new u();
            return u.deserializeBinaryFromReader(f, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(u.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return u.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(u.M(), t, i);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              u.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CDismissPinData";
          }
        }
        class B extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              B.prototype.dismiss_list || r.Sg(B.M()),
              M.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              B.sm_m ||
                (B.sm_m = {
                  proto: B,
                  fields: { dismiss_list: { n: 1, c: u, r: !0, q: !0 } },
                }),
              B.sm_m
            );
          }
          static MBF() {
            return B.sm_mbf || (B.sm_mbf = r.w0(B.M())), B.sm_mbf;
          }
          toObject(t = !1) {
            return B.toObject(t, this);
          }
          static toObject(t, i) {
            return r.BT(B.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(B.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (c().BinaryReader)(t),
              f = new B();
            return B.deserializeBinaryFromReader(f, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(B.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return B.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(B.M(), t, i);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              B.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerDismiss_CreateDismiss_Request";
          }
        }
        class S extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              S.prototype.dismiss_list || r.Sg(S.M()),
              M.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              S.sm_m ||
                (S.sm_m = {
                  proto: S,
                  fields: { dismiss_list: { n: 1, c: u, r: !0, q: !0 } },
                }),
              S.sm_m
            );
          }
          static MBF() {
            return S.sm_mbf || (S.sm_mbf = r.w0(S.M())), S.sm_mbf;
          }
          toObject(t = !1) {
            return S.toObject(t, this);
          }
          static toObject(t, i) {
            return r.BT(S.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(S.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (c().BinaryReader)(t),
              f = new S();
            return S.deserializeBinaryFromReader(f, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(S.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return S.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(S.M(), t, i);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              S.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerDismiss_CreateDismiss_Response";
          }
        }
        class a extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              a.prototype.partnerid || r.Sg(a.M()),
              M.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              a.sm_m ||
                (a.sm_m = {
                  proto: a,
                  fields: {
                    partnerid: {
                      n: 1,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    accountid: {
                      n: 2,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    rtime_after: {
                      n: 3,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              a.sm_m
            );
          }
          static MBF() {
            return a.sm_mbf || (a.sm_mbf = r.w0(a.M())), a.sm_mbf;
          }
          toObject(t = !1) {
            return a.toObject(t, this);
          }
          static toObject(t, i) {
            return r.BT(a.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(a.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (c().BinaryReader)(t),
              f = new a();
            return a.deserializeBinaryFromReader(f, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(a.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return a.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(a.M(), t, i);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              a.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerDismiss_GetDismissTimeRange_Request";
          }
        }
        class n extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              n.prototype.dismiss_list || r.Sg(n.M()),
              M.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              n.sm_m ||
                (n.sm_m = {
                  proto: n,
                  fields: { dismiss_list: { n: 1, c: u, r: !0, q: !0 } },
                }),
              n.sm_m
            );
          }
          static MBF() {
            return n.sm_mbf || (n.sm_mbf = r.w0(n.M())), n.sm_mbf;
          }
          toObject(t = !1) {
            return n.toObject(t, this);
          }
          static toObject(t, i) {
            return r.BT(n.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(n.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (c().BinaryReader)(t),
              f = new n();
            return n.deserializeBinaryFromReader(f, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(n.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return n.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(n.M(), t, i);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              n.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerDismiss_GetDismissTimeRange_Response";
          }
        }
        class w extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              w.prototype.dismiss_id || r.Sg(w.M()),
              M.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              w.sm_m ||
                (w.sm_m = {
                  proto: w,
                  fields: {
                    dismiss_id: {
                      n: 7,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                  },
                }),
              w.sm_m
            );
          }
          static MBF() {
            return w.sm_mbf || (w.sm_mbf = r.w0(w.M())), w.sm_mbf;
          }
          toObject(t = !1) {
            return w.toObject(t, this);
          }
          static toObject(t, i) {
            return r.BT(w.M(), t, i);
          }
          static fromObject(t) {
            return r.Uq(w.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (c().BinaryReader)(t),
              f = new w();
            return w.deserializeBinaryFromReader(f, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return r.zj(w.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return w.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            r.i0(w.M(), t, i);
          }
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              w.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerDismiss_DeleteDismiss_Request";
          }
        }
        class O extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), M.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return O.toObject(t, this);
          }
          static toObject(t, i) {
            return t ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(t) {
            return new O();
          }
          static deserializeBinary(t) {
            let i = new (c().BinaryReader)(t),
              f = new O();
            return O.deserializeBinaryFromReader(f, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return t;
          }
          serializeBinary() {
            var t = new (c().BinaryWriter)();
            return O.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {}
          serializeBase64String() {
            var t = new (c().BinaryWriter)();
            return (
              O.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerDismiss_DeleteDismiss_Response";
          }
        }
        var Q;
        ((j) => {
          function t(f, h, v) {
            return f.SendMsg(
              "PartnerDeadline.GetDeadlinesForPartner#1",
              (0, E.I8)(z, h, v),
              g,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          j.GetDeadlinesForPartner = t;
          function i(f, h, v) {
            return f.SendMsg(
              "PartnerDeadline.GetDeadlineByTimeRange#1",
              (0, E.I8)(m, h, v),
              l,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          }
          j.GetDeadlineByTimeRange = i;
        })(Q || (Q = {}));
        var $;
        ((j) => {
          function t(h, v, F) {
            return h.SendMsg(
              "PartnerDismiss.CreateDismiss#1",
              (0, E.I8)(B, v, F),
              S,
              { ePrivilege: 1 },
            );
          }
          j.CreateDismiss = t;
          function i(h, v, F) {
            return h.SendMsg(
              "PartnerDismiss.GetDismissTimeRange#1",
              (0, E.I8)(a, v, F),
              n,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          j.GetDismissTimeRange = i;
          function f(h, v, F) {
            return h.SendMsg(
              "PartnerDismiss.DeleteDismiss#1",
              (0, E.I8)(w, v, F),
              O,
              { ePrivilege: 1 },
            );
          }
          j.DeleteDismiss = f;
        })($ || ($ = {}));
      },
    },
  ]);
})();
