/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [33615],
  {
    56284: (e, t, r) => {
      r.d(t, { h: () => u });
      var i = r(66418),
        n = r(75233),
        a = r(80902),
        s = r(24484),
        o = r(17720),
        l = r(78327);
      async function c(e, t, r) {
        const n = (0, s.Fd)("partnereventpermissions", "application_config");
        if (
          (function (e) {
            const t = e;
            if (
              t &&
              Array.isArray(t) &&
              t.length > 0 &&
              "object" == typeof t[0]
            )
              return (
                "number" == typeof t[0].clanid && "number" == typeof t[0].appid
              );
            return !1;
          })(n)
        ) {
          const t = n.find((t) => (t.clanid = e));
          if (t) {
            let { success: e, warn_msg: r, err_msg: i, ...n } = t;
            return n;
          }
        }
        if (i.iA.logged_in) {
          const t = o.b.InitFromClanID(e);
          let r = `${i.TS.COMMUNITY_BASE_URL}gid/${t.ConvertTo64BitString()}/ajaxgetpartnereventpermissions/`;
          "partnerweb" == (0, l.yK)()
            ? (r = `${i.TS.PARTNER_BASE_URL}partnerevents/ajaxgetpartnereventpermissions?clanaccountid=${e}`)
            : "store" == (0, l.yK)() &&
              (r = `${i.TS.STORE_BASE_URL}events/ajaxgetpartnereventpermissions?clanaccountid=${e}`);
          const n = await fetch(r, { method: "GET", credentials: "include" });
          if (200 == n.status) {
            const e = await n.json();
            if (e) {
              let { success: t, warn_msg: r, err_msg: i, ...n } = e;
              return n;
            }
          }
        }
        return (function (e, t) {
          return {
            clanid: e,
            appid: t,
            can_edit: !1,
            owns_app: !1,
            event_followed: [],
            event_followed_flags: [],
            event_ignored: [],
            follows_app: !1,
            valve_admin: !1,
            support_user: !1,
            limited_user: !0,
          };
        })(e, void 0);
      }
      var m = r(23809);
      function u(e) {
        (0, n.jE)(), (0, m.KV)();
        return (0, a.I)(
          (function (e) {
            return {
              queryKey: d(e),
              queryFn: async () => await c(e),
              enabled: !!e,
            };
          })(e),
        );
      }
      function d(e) {
        return ["useEventUserPermissions", i.iA.accountid, e];
      }
    },
    60092: (e, t, r) => {
      r.d(t, { g: () => Pt });
      var i,
        n,
        a,
        s = r(7850),
        o = r(22837),
        l = r(65946),
        c = r(90626),
        m = r(62641),
        u = r(39733),
        d = r(37085),
        g = r(81393),
        B = r(56545),
        _ = r(80613),
        b = r.n(_),
        p = r(89068);
      class y extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.promotion_id || p.Sg(y.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  promotion_id: {
                    n: 1,
                    br: p.qM.readFixed64String,
                    bw: p.gp.writeFixed64String,
                  },
                  admin_jsondata: {
                    n: 2,
                    br: p.qM.readString,
                    bw: p.gp.writeString,
                  },
                  partner_jsondata: {
                    n: 3,
                    br: p.qM.readString,
                    bw: p.gp.writeString,
                  },
                  input_jsondata: {
                    n: 4,
                    br: p.qM.readString,
                    bw: p.gp.writeString,
                  },
                  partner_readonly_jsondata: {
                    n: 10,
                    br: p.qM.readString,
                    bw: p.gp.writeString,
                  },
                  partner_writable_jsondata: {
                    n: 11,
                    br: p.qM.readString,
                    bw: p.gp.writeString,
                  },
                  assets_readonly_jsondata: {
                    n: 12,
                    br: p.qM.readString,
                    bw: p.gp.writeString,
                  },
                  assets_writable_jsondata: {
                    n: 13,
                    br: p.qM.readString,
                    bw: p.gp.writeString,
                  },
                  rtime32_start_time: {
                    n: 5,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  rtime32_end_time: {
                    n: 6,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  partner_id: {
                    n: 7,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  input_access_key: {
                    n: 8,
                    br: p.qM.readString,
                    bw: p.gp.writeString,
                  },
                  last_update_time: {
                    n: 9,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = p.w0(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(y.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlan";
        }
      }
      class M extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.plan || p.Sg(M.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            M.sm_m || (M.sm_m = { proto: M, fields: { plan: { n: 1, c: y } } }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = p.w0(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(M.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_CreatePlan_Request";
        }
      }
      class w extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.promotion_id || p.Sg(w.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  promotion_id: {
                    n: 1,
                    br: p.qM.readFixed64String,
                    bw: p.gp.writeFixed64String,
                  },
                  input_access_key: {
                    n: 2,
                    br: p.qM.readString,
                    bw: p.gp.writeString,
                  },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = p.w0(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(w.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_CreatePlan_Response";
        }
      }
      class f extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.plan || p.Sg(f.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  plan: { n: 1, c: y },
                  promotion_id: {
                    n: 2,
                    br: p.qM.readFixed64String,
                    bw: p.gp.writeFixed64String,
                  },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = p.w0(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(f.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_UpdatePlan_Request";
        }
      }
      class z extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new z();
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_UpdatePlan_Response";
        }
      }
      class S extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.promotion_id || p.Sg(S.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  promotion_id: {
                    n: 1,
                    br: p.qM.readFixed64String,
                    bw: p.gp.writeFixed64String,
                  },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = p.w0(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(S.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPlan_Request";
        }
      }
      class h extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.plan || p.Sg(h.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            h.sm_m || (h.sm_m = { proto: h, fields: { plan: { n: 1, c: y } } }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = p.w0(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(h.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPlan_Response";
        }
      }
      class R extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new R();
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetAllActivePlan_Request";
        }
      }
      class v extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.plan || p.Sg(v.M()),
            _.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: { plan: { n: 1, c: y, r: !0, q: !0 } },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = p.w0(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(v.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetAllActivePlan_Response";
        }
      }
      class j extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.oldest_rtime || p.Sg(j.M()),
            _.Message.initialize(this, e, 0, -1, [3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  oldest_rtime: {
                    n: 1,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  newest_rtime: {
                    n: 2,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  promotion_types: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: p.qM.readString,
                    bw: p.gp.writeRepeatedString,
                  },
                },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = p.w0(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(j.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(j.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new j();
          return j.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(j.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(j.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPlanCompletedInDateRange_Request";
        }
      }
      class F extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.plans || p.Sg(F.M()),
            _.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: { plans: { n: 1, c: y, r: !0, q: !0 } },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = p.w0(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(F.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(F.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(F.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(F.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPlanCompletedInDateRange_Response";
        }
      }
      class P extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            P.prototype.type || p.Sg(P.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: {
                  type: { n: 1, br: p.qM.readEnum, bw: p.gp.writeEnum },
                  gid: {
                    n: 2,
                    br: p.qM.readFixed64String,
                    bw: p.gp.writeFixed64String,
                  },
                  promotion_planid: {
                    n: 3,
                    br: p.qM.readFixed64String,
                    bw: p.gp.writeFixed64String,
                  },
                },
              }),
            P.sm_m
          );
        }
        static MBF() {
          return P.sm_mbf || (P.sm_mbf = p.w0(P.M())), P.sm_mbf;
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(P.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(P.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new P();
          return P.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(P.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(P.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromoAssociation";
        }
      }
      class W extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.requested || p.Sg(W.M()),
            _.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: { requested: { n: 1, c: P, r: !0, q: !0 } },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = p.w0(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(W.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(W.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new W();
          return W.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(W.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(W.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPlanByAssociationID_Request";
        }
      }
      class q extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            q.prototype.matching || p.Sg(q.M()),
            _.Message.initialize(this, e, 0, -1, [1, 2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: {
                  matching: { n: 1, c: P, r: !0, q: !0 },
                  plans: { n: 2, c: y, r: !0, q: !0 },
                },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = p.w0(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(q.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new q();
          return q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(q.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPlanByAssociationID_Response";
        }
      }
      class T extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.rtime || p.Sg(T.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  rtime: { n: 1, br: p.qM.readUint32, bw: p.gp.writeUint32 },
                  upto_rtime: {
                    n: 2,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = p.w0(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(T.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(T.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new T();
          return T.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPlansUpdatedSince_Request";
        }
      }
      class O extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.plans || p.Sg(O.M()),
            _.Message.initialize(this, e, 0, -1, [1, 2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: {
                  plans: { n: 1, c: y, r: !0, q: !0 },
                  deleted_plan_ids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: p.qM.readFixed64String,
                    pbr: p.qM.readPackedFixed64String,
                    bw: p.gp.writeRepeatedFixed64String,
                  },
                },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = p.w0(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(O.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(O.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new O();
          return O.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(O.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(O.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPlansUpdatedSince_Response";
        }
      }
      class I extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.promotion_id || p.Sg(I.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  promotion_id: {
                    n: 1,
                    br: p.qM.readFixed64String,
                    bw: p.gp.writeFixed64String,
                  },
                },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = p.w0(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(I.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(I.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new I();
          return I.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_DeletePlan_Request";
        }
      }
      class U extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new U();
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new U();
          return U.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_DeletePlan_Response";
        }
      }
      class C extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.token || p.Sg(C.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  token: { n: 1, br: p.qM.readString, bw: p.gp.writeString },
                },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = p.w0(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(C.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(C.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(C.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(C.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_SearchPlan_Request";
        }
      }
      class x extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            x.prototype.plan || p.Sg(x.M()),
            _.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: { plan: { n: 1, c: y, r: !0, q: !0 } },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = p.w0(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(x.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(x.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new x();
          return x.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(x.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(x.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_SearchPlan_Response";
        }
      }
      class A extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            A.prototype.appids || p.Sg(A.M()),
            _.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: {
                  appids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: p.qM.readUint32,
                    pbr: p.qM.readPackedUint32,
                    bw: p.gp.writeRepeatedUint32,
                  },
                  exclude_sales: {
                    n: 2,
                    br: p.qM.readBool,
                    bw: p.gp.writeBool,
                  },
                  exclude_direct_featuring: {
                    n: 3,
                    br: p.qM.readBool,
                    bw: p.gp.writeBool,
                  },
                },
              }),
            A.sm_m
          );
        }
        static MBF() {
          return A.sm_mbf || (A.sm_mbf = p.w0(A.M())), A.sm_mbf;
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(A.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(A.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new A();
          return A.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(A.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(A.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetAllPlansForApps_Request";
        }
      }
      class D extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            D.prototype.plans || p.Sg(D.M()),
            _.Message.initialize(this, e, 0, -1, [1, 2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: {
                  plans: { n: 1, c: y, r: !0, q: !0 },
                  apps_included_in_sales: { n: 2, c: E, r: !0, q: !0 },
                },
              }),
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = p.w0(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(D.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(D.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new D();
          return D.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(D.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(D.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetAllPlansForApps_Response";
        }
      }
      class E extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            E.prototype.appids || p.Sg(E.M()),
            _.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  appids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: p.qM.readUint32,
                    pbr: p.qM.readPackedUint32,
                    bw: p.gp.writeRepeatedUint32,
                  },
                  clan_event_gid: {
                    n: 2,
                    br: p.qM.readFixed64String,
                    bw: p.gp.writeFixed64String,
                  },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = p.w0(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(E.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(E.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new E();
          return E.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(E.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(E.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetAllPlansForApps_Response_CAppIncludedInSales";
        }
      }
      class N extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            N.prototype.partnerid || p.Sg(N.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            N.sm_m ||
              (N.sm_m = {
                proto: N,
                fields: {
                  partnerid: {
                    n: 1,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  start_date: {
                    n: 5,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  end_date: { n: 6, br: p.qM.readUint32, bw: p.gp.writeUint32 },
                  show_hidden: { n: 4, br: p.qM.readBool, bw: p.gp.writeBool },
                },
              }),
            N.sm_m
          );
        }
        static MBF() {
          return N.sm_mbf || (N.sm_mbf = p.w0(N.M())), N.sm_mbf;
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(N.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(N.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new N();
          return N.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(N.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(N.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetAllPlansForPartner_Request";
        }
      }
      class G extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            G.prototype.plans || p.Sg(G.M()),
            _.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: { plans: { n: 1, c: y, r: !0, q: !0 } },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = p.w0(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(G.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(G.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new G();
          return G.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(G.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(G.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetAllPlansForPartner_Response";
        }
      }
      class k extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            k.prototype.input_access_key || p.Sg(k.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
                fields: {
                  input_access_key: {
                    n: 1,
                    br: p.qM.readString,
                    bw: p.gp.writeString,
                  },
                },
              }),
            k.sm_m
          );
        }
        static MBF() {
          return k.sm_mbf || (k.sm_mbf = p.w0(k.M())), k.sm_mbf;
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(k.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(k.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new k();
          return k.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(k.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(k.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPlanByInputAccessKey_Request";
        }
      }
      class L extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            L.prototype.plan || p.Sg(L.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            L.sm_m || (L.sm_m = { proto: L, fields: { plan: { n: 1, c: y } } }),
            L.sm_m
          );
        }
        static MBF() {
          return L.sm_mbf || (L.sm_mbf = p.w0(L.M())), L.sm_mbf;
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(L.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(L.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new L();
          return L.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(L.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(L.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPlanByInputAccessKey_Response";
        }
      }
      class V extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            V.prototype.promotion_id || p.Sg(V.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            V.sm_m ||
              (V.sm_m = {
                proto: V,
                fields: {
                  promotion_id: {
                    n: 1,
                    br: p.qM.readFixed64String,
                    bw: p.gp.writeFixed64String,
                  },
                  value: { n: 2, br: p.qM.readBool, bw: p.gp.writeBool },
                },
              }),
            V.sm_m
          );
        }
        static MBF() {
          return V.sm_mbf || (V.sm_mbf = p.w0(V.M())), V.sm_mbf;
        }
        toObject(e = !1) {
          return V.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(V.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(V.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new V();
          return V.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(V.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(V.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_MarkLocalizationAssetComplete_Request";
        }
      }
      class K extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return K.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new K();
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new K();
          return K.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return K.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_MarkLocalizationAssetComplete_Response";
        }
      }
      class H extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            H.prototype.promotion_id || p.Sg(H.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            H.sm_m ||
              (H.sm_m = {
                proto: H,
                fields: {
                  promotion_id: {
                    n: 1,
                    br: p.qM.readFixed64String,
                    bw: p.gp.writeFixed64String,
                  },
                  notification_type: {
                    n: 2,
                    br: p.qM.readEnum,
                    bw: p.gp.writeEnum,
                  },
                  only_explicit_email_addresses: {
                    n: 3,
                    br: p.qM.readBool,
                    bw: p.gp.writeBool,
                  },
                },
              }),
            H.sm_m
          );
        }
        static MBF() {
          return H.sm_mbf || (H.sm_mbf = p.w0(H.M())), H.sm_mbf;
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(H.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(H.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new H();
          return H.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(H.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(H.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_SendNotification_Request";
        }
      }
      class $ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return $.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new $();
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new $();
          return $.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_SendNotification_Response";
        }
      }
      class Y extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Y.prototype.promotion_id || p.Sg(Y.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Y.sm_m ||
              (Y.sm_m = {
                proto: Y,
                fields: {
                  promotion_id: {
                    n: 1,
                    br: p.qM.readFixed64String,
                    bw: p.gp.writeFixed64String,
                  },
                  notification_id: {
                    n: 2,
                    br: p.qM.readFixed64String,
                    bw: p.gp.writeFixed64String,
                  },
                },
              }),
            Y.sm_m
          );
        }
        static MBF() {
          return Y.sm_mbf || (Y.sm_mbf = p.w0(Y.M())), Y.sm_mbf;
        }
        toObject(e = !1) {
          return Y.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(Y.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(Y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new Y();
          return Y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(Y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(Y.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return Y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetSentNotification_Request";
        }
      }
      class J extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            J.prototype.results || p.Sg(J.M()),
            _.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            J.sm_m ||
              (J.sm_m = {
                proto: J,
                fields: { results: { n: 1, c: X, r: !0, q: !0 } },
              }),
            J.sm_m
          );
        }
        static MBF() {
          return J.sm_mbf || (J.sm_mbf = p.w0(J.M())), J.sm_mbf;
        }
        toObject(e = !1) {
          return J.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(J.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(J.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new J();
          return J.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(J.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(J.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetSentNotification_Response";
        }
      }
      class X extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            X.prototype.notification_id || p.Sg(X.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            X.sm_m ||
              (X.sm_m = {
                proto: X,
                fields: {
                  notification_id: {
                    n: 1,
                    br: p.qM.readFixed64String,
                    bw: p.gp.writeFixed64String,
                  },
                  tracking_id: {
                    n: 2,
                    br: p.qM.readFixed64String,
                    bw: p.gp.writeFixed64String,
                  },
                  email_address: {
                    n: 3,
                    br: p.qM.readString,
                    bw: p.gp.writeString,
                  },
                  accountid: {
                    n: 4,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  status: { n: 5, br: p.qM.readUint32, bw: p.gp.writeUint32 },
                  type: { n: 6, br: p.qM.readEnum, bw: p.gp.writeEnum },
                  rt_send_time: {
                    n: 7,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                },
              }),
            X.sm_m
          );
        }
        static MBF() {
          return X.sm_mbf || (X.sm_mbf = p.w0(X.M())), X.sm_mbf;
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(X.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(X.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new X();
          return X.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(X.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(X.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionNotificationResults";
        }
      }
      class Z extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Z.prototype.promotion_id || p.Sg(Z.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Z.sm_m ||
              (Z.sm_m = {
                proto: Z,
                fields: {
                  promotion_id: {
                    n: 1,
                    br: p.qM.readFixed64String,
                    bw: p.gp.writeFixed64String,
                  },
                  notification_id: {
                    n: 2,
                    br: p.qM.readFixed64String,
                    bw: p.gp.writeFixed64String,
                  },
                },
              }),
            Z.sm_m
          );
        }
        static MBF() {
          return Z.sm_mbf || (Z.sm_mbf = p.w0(Z.M())), Z.sm_mbf;
        }
        toObject(e = !1) {
          return Z.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(Z.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(Z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new Z();
          return Z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(Z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(Z.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_ResendNotification_Request";
        }
      }
      class Q extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Q.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Q();
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new Q();
          return Q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_ResendNotification_Response";
        }
      }
      class ee extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ee.prototype.promotion_id || p.Sg(ee.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ee.sm_m ||
              (ee.sm_m = {
                proto: ee,
                fields: {
                  promotion_id: {
                    n: 1,
                    br: p.qM.readFixed64String,
                    bw: p.gp.writeFixed64String,
                  },
                  add: { n: 2, br: p.qM.readBool, bw: p.gp.writeBool },
                  email_address: {
                    n: 3,
                    br: p.qM.readString,
                    bw: p.gp.writeString,
                  },
                },
              }),
            ee.sm_m
          );
        }
        static MBF() {
          return ee.sm_mbf || (ee.sm_mbf = p.w0(ee.M())), ee.sm_mbf;
        }
        toObject(e = !1) {
          return ee.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(ee.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(ee.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new ee();
          return ee.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(ee.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(ee.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_SetPromotionEmailTarget_Request";
        }
      }
      class te extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return te.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new te();
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new te();
          return te.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_SetPromotionEmailTarget_Response";
        }
      }
      class re extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            re.prototype.clan_account_id || p.Sg(re.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            re.sm_m ||
              (re.sm_m = {
                proto: re,
                fields: {
                  clan_account_id: {
                    n: 1,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  clan_event_gid: {
                    n: 2,
                    br: p.qM.readFixed64String,
                    bw: p.gp.writeFixed64String,
                  },
                  rtime_sale_start: {
                    n: 3,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  rtime_sale_end: {
                    n: 4,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  daily_deal_gid: {
                    n: 5,
                    br: p.qM.readFixed64String,
                    bw: p.gp.writeFixed64String,
                  },
                  promotion_gid: {
                    n: 6,
                    br: p.qM.readFixed64String,
                    bw: p.gp.writeFixed64String,
                  },
                  create_asset_request: {
                    n: 7,
                    br: p.qM.readBool,
                    bw: p.gp.writeBool,
                  },
                  partner_id: {
                    n: 8,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  advertising_appid: {
                    n: 9,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                },
              }),
            re.sm_m
          );
        }
        static MBF() {
          return re.sm_mbf || (re.sm_mbf = p.w0(re.M())), re.sm_mbf;
        }
        toObject(e = !1) {
          return re.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(re.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(re.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new re();
          return re.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(re.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(re.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlan_CreateSalePageForPromo_Request";
        }
      }
      class ie extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ie.prototype.clan_account_id || p.Sg(ie.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ie.sm_m ||
              (ie.sm_m = {
                proto: ie,
                fields: {
                  clan_account_id: {
                    n: 1,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  clan_event_gid: {
                    n: 2,
                    br: p.qM.readFixed64String,
                    bw: p.gp.writeFixed64String,
                  },
                  daily_deal_gid: {
                    n: 3,
                    br: p.qM.readFixed64String,
                    bw: p.gp.writeFixed64String,
                  },
                  promotion_gid: {
                    n: 4,
                    br: p.qM.readFixed64String,
                    bw: p.gp.writeFixed64String,
                  },
                  asset_request_gid: {
                    n: 5,
                    br: p.qM.readFixed64String,
                    bw: p.gp.writeFixed64String,
                  },
                  advertising_appid: {
                    n: 6,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                },
              }),
            ie.sm_m
          );
        }
        static MBF() {
          return ie.sm_mbf || (ie.sm_mbf = p.w0(ie.M())), ie.sm_mbf;
        }
        toObject(e = !1) {
          return ie.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(ie.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(ie.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new ie();
          return ie.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(ie.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(ie.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlan_CreateSalePageForPromo_Response";
        }
      }
      class ne extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ne.prototype.total_gross_sales_usdx100 || p.Sg(ne.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ne.sm_m ||
              (ne.sm_m = {
                proto: ne,
                fields: {
                  total_gross_sales_usdx100: {
                    n: 1,
                    br: p.qM.readInt64String,
                    bw: p.gp.writeInt64String,
                  },
                  total_gross_returns_usdx100: {
                    n: 2,
                    br: p.qM.readInt64String,
                    bw: p.gp.writeInt64String,
                  },
                  total_net_tax_usdx100: {
                    n: 3,
                    br: p.qM.readInt64String,
                    bw: p.gp.writeInt64String,
                  },
                  steam_gross_sales_usdx100: {
                    n: 4,
                    br: p.qM.readInt64String,
                    bw: p.gp.writeInt64String,
                  },
                  steam_gross_returns_usdx100: {
                    n: 5,
                    br: p.qM.readInt64String,
                    bw: p.gp.writeInt64String,
                  },
                  steam_net_tax_usdx100: {
                    n: 6,
                    br: p.qM.readInt64String,
                    bw: p.gp.writeInt64String,
                  },
                  in_game_gross_sales_usdx100: {
                    n: 7,
                    br: p.qM.readInt64String,
                    bw: p.gp.writeInt64String,
                  },
                  in_game_gross_returns_usdx100: {
                    n: 8,
                    br: p.qM.readInt64String,
                    bw: p.gp.writeInt64String,
                  },
                  in_game_net_tax_usdx100: {
                    n: 9,
                    br: p.qM.readInt64String,
                    bw: p.gp.writeInt64String,
                  },
                  total_net_sales_usdx100: {
                    n: 10,
                    br: p.qM.readInt64String,
                    bw: p.gp.writeInt64String,
                  },
                  steam_net_sales_usdx100: {
                    n: 11,
                    br: p.qM.readInt64String,
                    bw: p.gp.writeInt64String,
                  },
                  in_game_net_sales_usdx100: {
                    n: 12,
                    br: p.qM.readInt64String,
                    bw: p.gp.writeInt64String,
                  },
                  steam_gross_units_sold: {
                    n: 13,
                    br: p.qM.readInt64String,
                    bw: p.gp.writeInt64String,
                  },
                  steam_gross_units_returned: {
                    n: 14,
                    br: p.qM.readInt64String,
                    bw: p.gp.writeInt64String,
                  },
                  gross_units_activated: {
                    n: 15,
                    br: p.qM.readInt64String,
                    bw: p.gp.writeInt64String,
                  },
                },
              }),
            ne.sm_m
          );
        }
        static MBF() {
          return ne.sm_mbf || (ne.sm_mbf = p.w0(ne.M())), ne.sm_mbf;
        }
        toObject(e = !1) {
          return ne.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(ne.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(ne.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new ne();
          return ne.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(ne.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(ne.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlan_SummarySaleResult";
        }
      }
      class ae extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ae.prototype.promotionids || p.Sg(ae.M()),
            _.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ae.sm_m ||
              (ae.sm_m = {
                proto: ae,
                fields: {
                  promotionids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: p.qM.readUint64String,
                    pbr: p.qM.readPackedUint64String,
                    bw: p.gp.writeRepeatedUint64String,
                  },
                  partnerid: {
                    n: 2,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                },
              }),
            ae.sm_m
          );
        }
        static MBF() {
          return ae.sm_mbf || (ae.sm_mbf = p.w0(ae.M())), ae.sm_mbf;
        }
        toObject(e = !1) {
          return ae.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(ae.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(ae.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new ae();
          return ae.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(ae.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(ae.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlan_GetPromotionPlanSalesDaily_Request";
        }
      }
      class se extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            se.prototype.sales || p.Sg(se.M()),
            _.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            se.sm_m ||
              (se.sm_m = {
                proto: se,
                fields: {
                  sales: { n: 1, c: ce, r: !0, q: !0 },
                  partial_access: {
                    n: 2,
                    br: p.qM.readBool,
                    bw: p.gp.writeBool,
                  },
                },
              }),
            se.sm_m
          );
        }
        static MBF() {
          return se.sm_mbf || (se.sm_mbf = p.w0(se.M())), se.sm_mbf;
        }
        toObject(e = !1) {
          return se.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(se.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(se.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new se();
          return se.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(se.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(se.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlan_GetPromotionPlanSalesDaily_Response";
        }
      }
      class oe extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            oe.prototype.rtime_date || p.Sg(oe.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            oe.sm_m ||
              (oe.sm_m = {
                proto: oe,
                fields: {
                  rtime_date: {
                    n: 1,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  date: { n: 2, br: p.qM.readString, bw: p.gp.writeString },
                  summary_sales: { n: 3, c: ne },
                },
              }),
            oe.sm_m
          );
        }
        static MBF() {
          return oe.sm_mbf || (oe.sm_mbf = p.w0(oe.M())), oe.sm_mbf;
        }
        toObject(e = !1) {
          return oe.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(oe.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(oe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new oe();
          return oe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(oe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(oe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlan_GetPromotionPlanSalesDaily_Response_DailyPromotionSales";
        }
      }
      class le extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            le.prototype.appid || p.Sg(le.M()),
            _.Message.initialize(this, e, 0, -1, [5], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            le.sm_m ||
              (le.sm_m = {
                proto: le,
                fields: {
                  appid: { n: 1, br: p.qM.readUint32, bw: p.gp.writeUint32 },
                  packageid: {
                    n: 2,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  secondary_product_id: {
                    n: 3,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  summary_sales: { n: 4, c: ne },
                  daily_promo_sales: { n: 5, c: oe, r: !0, q: !0 },
                  package_billing_type: {
                    n: 6,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                },
              }),
            le.sm_m
          );
        }
        static MBF() {
          return le.sm_mbf || (le.sm_mbf = p.w0(le.M())), le.sm_mbf;
        }
        toObject(e = !1) {
          return le.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(le.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(le.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new le();
          return le.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(le.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(le.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlan_GetPromotionPlanSalesDaily_Response_Product";
        }
      }
      class ce extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ce.prototype.promotionid || p.Sg(ce.M()),
            _.Message.initialize(this, e, 0, -1, [2, 4], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ce.sm_m ||
              (ce.sm_m = {
                proto: ce,
                fields: {
                  promotionid: {
                    n: 1,
                    br: p.qM.readUint64String,
                    bw: p.gp.writeUint64String,
                  },
                  daily_promo_sales: { n: 2, c: oe, r: !0, q: !0 },
                  summary_sales: { n: 3, c: ne },
                  products: { n: 4, c: le, r: !0, q: !0 },
                  products_missing_user_rights: {
                    n: 5,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                },
              }),
            ce.sm_m
          );
        }
        static MBF() {
          return ce.sm_mbf || (ce.sm_mbf = p.w0(ce.M())), ce.sm_mbf;
        }
        toObject(e = !1) {
          return ce.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(ce.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(ce.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new ce();
          return ce.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(ce.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(ce.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlan_GetPromotionPlanSalesDaily_Response_PromotionSaleData";
        }
      }
      class me extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            me.prototype.request_list || p.Sg(me.M()),
            _.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            me.sm_m ||
              (me.sm_m = {
                proto: me,
                fields: { request_list: { n: 1, c: ue, r: !0, q: !0 } },
              }),
            me.sm_m
          );
        }
        static MBF() {
          return me.sm_mbf || (me.sm_mbf = p.w0(me.M())), me.sm_mbf;
        }
        toObject(e = !1) {
          return me.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(me.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(me.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new me();
          return me.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(me.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(me.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPromotionPlanForSalePages_Request";
        }
      }
      class ue extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ue.prototype.clan_account_id || p.Sg(ue.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ue.sm_m ||
              (ue.sm_m = {
                proto: ue,
                fields: {
                  clan_account_id: {
                    n: 1,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  gid_clan_event: {
                    n: 2,
                    br: p.qM.readFixed64String,
                    bw: p.gp.writeFixed64String,
                  },
                },
              }),
            ue.sm_m
          );
        }
        static MBF() {
          return ue.sm_mbf || (ue.sm_mbf = p.w0(ue.M())), ue.sm_mbf;
        }
        toObject(e = !1) {
          return ue.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(ue.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(ue.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new ue();
          return ue.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(ue.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(ue.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPromotionPlanForSalePages_Request_CSalePage";
        }
      }
      class de extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            de.prototype.plans || p.Sg(de.M()),
            _.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            de.sm_m ||
              (de.sm_m = {
                proto: de,
                fields: { plans: { n: 1, c: y, r: !0, q: !0 } },
              }),
            de.sm_m
          );
        }
        static MBF() {
          return de.sm_mbf || (de.sm_mbf = p.w0(de.M())), de.sm_mbf;
        }
        toObject(e = !1) {
          return de.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(de.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(de.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new de();
          return de.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(de.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return de.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(de.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return de.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetPromotionPlanForSalePages_Response";
        }
      }
      class ge extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ge.prototype.rtstart || p.Sg(ge.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ge.sm_m ||
              (ge.sm_m = {
                proto: ge,
                fields: {
                  rtstart: { n: 1, br: p.qM.readUint32, bw: p.gp.writeUint32 },
                  rtend: { n: 2, br: p.qM.readUint32, bw: p.gp.writeUint32 },
                  include_packages: {
                    n: 3,
                    br: p.qM.readBool,
                    bw: p.gp.writeBool,
                  },
                  filter_modified_sales_rank: {
                    n: 4,
                    d: !0,
                    br: p.qM.readBool,
                    bw: p.gp.writeBool,
                  },
                },
              }),
            ge.sm_m
          );
        }
        static MBF() {
          return ge.sm_mbf || (ge.sm_mbf = p.w0(ge.M())), ge.sm_mbf;
        }
        toObject(e = !1) {
          return ge.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(ge.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(ge.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new ge();
          return ge.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(ge.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(ge.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return ge.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetUpcomingScheduledDiscounts_Request";
        }
      }
      class Be extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Be.prototype.package_details || p.Sg(Be.M()),
            _.Message.initialize(this, e, 0, -1, [1, 2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Be.sm_m ||
              (Be.sm_m = {
                proto: Be,
                fields: {
                  package_details: { n: 1, c: _e, r: !0, q: !0 },
                  app_details: { n: 2, c: be, r: !0, q: !0 },
                },
              }),
            Be.sm_m
          );
        }
        static MBF() {
          return Be.sm_mbf || (Be.sm_mbf = p.w0(Be.M())), Be.sm_mbf;
        }
        toObject(e = !1) {
          return Be.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(Be.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(Be.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new Be();
          return Be.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(Be.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return Be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(Be.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return Be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetUpcomingScheduledDiscounts_Response";
        }
      }
      class _e extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _e.prototype.package_id || p.Sg(_e.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _e.sm_m ||
              (_e.sm_m = {
                proto: _e,
                fields: {
                  package_id: {
                    n: 1,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  discount_id: {
                    n: 2,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  discount_name: {
                    n: 3,
                    br: p.qM.readString,
                    bw: p.gp.writeString,
                  },
                  discount_percentage: {
                    n: 4,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  original_price_usd: {
                    n: 5,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  discount_price_usd: {
                    n: 6,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  rtime_discount_start: {
                    n: 7,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  rtime_discount_end: {
                    n: 8,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                },
              }),
            _e.sm_m
          );
        }
        static MBF() {
          return _e.sm_mbf || (_e.sm_mbf = p.w0(_e.M())), _e.sm_mbf;
        }
        toObject(e = !1) {
          return _e.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(_e.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(_e.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new _e();
          return _e.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(_e.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return _e.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(_e.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return _e.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetUpcomingScheduledDiscounts_Response_CUpcomingPackageDiscountInfo";
        }
      }
      class be extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            be.prototype.appid || p.Sg(be.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            be.sm_m ||
              (be.sm_m = {
                proto: be,
                fields: {
                  appid: { n: 1, br: p.qM.readUint32, bw: p.gp.writeUint32 },
                  cheapest_package_id: {
                    n: 3,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  cheapest_discount_id: {
                    n: 4,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  cheapest_discount_name: {
                    n: 5,
                    br: p.qM.readString,
                    bw: p.gp.writeString,
                  },
                  package_original_price_usd: {
                    n: 6,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  discounted_price_usd: {
                    n: 7,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  discount_percentage: {
                    n: 8,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  rtime_discount_start: {
                    n: 9,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  rtime_discount_end: {
                    n: 10,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  num_discounted_packages: {
                    n: 11,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  modified_sales_rank: {
                    n: 12,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                },
              }),
            be.sm_m
          );
        }
        static MBF() {
          return be.sm_mbf || (be.sm_mbf = p.w0(be.M())), be.sm_mbf;
        }
        toObject(e = !1) {
          return be.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(be.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(be.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new be();
          return be.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(be.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(be.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetUpcomingScheduledDiscounts_Response_CUpcomingAppDiscountInfo";
        }
      }
      class pe extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            pe.prototype.account_id || p.Sg(pe.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            pe.sm_m ||
              (pe.sm_m = {
                proto: pe,
                fields: {
                  account_id: {
                    n: 1,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  include_published: {
                    n: 2,
                    br: p.qM.readBool,
                    bw: p.gp.writeBool,
                  },
                },
              }),
            pe.sm_m
          );
        }
        static MBF() {
          return pe.sm_mbf || (pe.sm_mbf = p.w0(pe.M())), pe.sm_mbf;
        }
        toObject(e = !1) {
          return pe.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(pe.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(pe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new pe();
          return pe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(pe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(pe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return pe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetSalePageCandidatesForPromo_Request";
        }
      }
      class ye extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ye.prototype.clans || p.Sg(ye.M()),
            _.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ye.sm_m ||
              (ye.sm_m = {
                proto: ye,
                fields: { clans: { n: 1, c: we, r: !0, q: !0 } },
              }),
            ye.sm_m
          );
        }
        static MBF() {
          return ye.sm_mbf || (ye.sm_mbf = p.w0(ye.M())), ye.sm_mbf;
        }
        toObject(e = !1) {
          return ye.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(ye.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(ye.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new ye();
          return ye.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(ye.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(ye.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return ye.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetSalePageCandidatesForPromo_Response";
        }
      }
      class Me extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Me.prototype.clan_account_id || p.Sg(Me.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Me.sm_m ||
              (Me.sm_m = {
                proto: Me,
                fields: {
                  clan_account_id: {
                    n: 1,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  gid_clan_event: {
                    n: 2,
                    br: p.qM.readFixed64String,
                    bw: p.gp.writeFixed64String,
                  },
                  name: { n: 3, br: p.qM.readString, bw: p.gp.writeString },
                  published: { n: 4, br: p.qM.readBool, bw: p.gp.writeBool },
                  start_time: {
                    n: 5,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  end_time: { n: 6, br: p.qM.readUint32, bw: p.gp.writeUint32 },
                  external_sale_event_type: {
                    n: 7,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                },
              }),
            Me.sm_m
          );
        }
        static MBF() {
          return Me.sm_mbf || (Me.sm_mbf = p.w0(Me.M())), Me.sm_mbf;
        }
        toObject(e = !1) {
          return Me.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(Me.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(Me.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new Me();
          return Me.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(Me.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return Me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(Me.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return Me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetSalePageCandidatesForPromo_Response_salepage";
        }
      }
      class we extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            we.prototype.clan_account_id || p.Sg(we.M()),
            _.Message.initialize(this, e, 0, -1, [4], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            we.sm_m ||
              (we.sm_m = {
                proto: we,
                fields: {
                  clan_account_id: {
                    n: 1,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  clan_name: {
                    n: 2,
                    br: p.qM.readString,
                    bw: p.gp.writeString,
                  },
                  is_creator_home: {
                    n: 3,
                    br: p.qM.readBool,
                    bw: p.gp.writeBool,
                  },
                  sale_pages: { n: 4, c: Me, r: !0, q: !0 },
                },
              }),
            we.sm_m
          );
        }
        static MBF() {
          return we.sm_mbf || (we.sm_mbf = p.w0(we.M())), we.sm_mbf;
        }
        toObject(e = !1) {
          return we.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(we.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(we.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new we();
          return we.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(we.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return we.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(we.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return we.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetSalePageCandidatesForPromo_Response_clan";
        }
      }
      class fe extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            fe.prototype.partner_id || p.Sg(fe.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            fe.sm_m ||
              (fe.sm_m = {
                proto: fe,
                fields: {
                  partner_id: {
                    n: 1,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                },
              }),
            fe.sm_m
          );
        }
        static MBF() {
          return fe.sm_mbf || (fe.sm_mbf = p.w0(fe.M())), fe.sm_mbf;
        }
        toObject(e = !1) {
          return fe.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(fe.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(fe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new fe();
          return fe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(fe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(fe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return fe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetAdvertisingAppsForPartner_Request";
        }
      }
      class ze extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ze.prototype.advertising_apps || p.Sg(ze.M()),
            _.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ze.sm_m ||
              (ze.sm_m = {
                proto: ze,
                fields: { advertising_apps: { n: 1, c: Se, r: !0, q: !0 } },
              }),
            ze.sm_m
          );
        }
        static MBF() {
          return ze.sm_mbf || (ze.sm_mbf = p.w0(ze.M())), ze.sm_mbf;
        }
        toObject(e = !1) {
          return ze.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(ze.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(ze.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new ze();
          return ze.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(ze.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(ze.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return ze.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetAdvertisingAppsForPartner_Response";
        }
      }
      class Se extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Se.prototype.appid || p.Sg(Se.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Se.sm_m ||
              (Se.sm_m = {
                proto: Se,
                fields: {
                  appid: { n: 1, br: p.qM.readUint32, bw: p.gp.writeUint32 },
                  app_name: { n: 2, br: p.qM.readString, bw: p.gp.writeString },
                  itemid: { n: 3, br: p.qM.readUint32, bw: p.gp.writeUint32 },
                },
              }),
            Se.sm_m
          );
        }
        static MBF() {
          return Se.sm_mbf || (Se.sm_mbf = p.w0(Se.M())), Se.sm_mbf;
        }
        toObject(e = !1) {
          return Se.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(Se.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(Se.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new Se();
          return Se.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(Se.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return Se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(Se.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return Se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionPlanning_GetAdvertisingAppsForPartner_Response_advertising_app";
        }
      }
      class he extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            he.prototype.spotlight_due_date || p.Sg(he.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            he.sm_m ||
              (he.sm_m = {
                proto: he,
                fields: {
                  spotlight_due_date: {
                    n: 1,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  marketing_message_due_date: {
                    n: 2,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  discount_event_due_date: {
                    n: 3,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                },
              }),
            he.sm_m
          );
        }
        static MBF() {
          return he.sm_mbf || (he.sm_mbf = p.w0(he.M())), he.sm_mbf;
        }
        toObject(e = !1) {
          return he.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(he.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(he.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new he();
          return he.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(he.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return he.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(he.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return he.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionRequirements";
        }
      }
      class Re extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Re.prototype.inviteid || p.Sg(Re.M()),
            _.Message.initialize(this, e, 0, -1, [16], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Re.sm_m ||
              (Re.sm_m = {
                proto: Re,
                fields: {
                  inviteid: {
                    n: 1,
                    br: p.qM.readFixed64String,
                    bw: p.gp.writeFixed64String,
                  },
                  appid: { n: 2, br: p.qM.readUint32, bw: p.gp.writeUint32 },
                  invite_account: {
                    n: 3,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  rtinvitetime: {
                    n: 4,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  rtexpiretime: {
                    n: 5,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  type: { n: 6, br: p.qM.readEnum, bw: p.gp.writeEnum },
                  accept_account: {
                    n: 7,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  rtaccepttime: {
                    n: 8,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  rtdatechosen: {
                    n: 9,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  discount_eventid: {
                    n: 10,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  packageid: {
                    n: 11,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  bundleid: {
                    n: 12,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  primary_partnerid: {
                    n: 13,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  deadlines: { n: 14, c: he },
                  notify_partner: {
                    n: 15,
                    br: p.qM.readBool,
                    bw: p.gp.writeBool,
                  },
                  additional_email: {
                    n: 16,
                    r: !0,
                    q: !0,
                    br: p.qM.readString,
                    bw: p.gp.writeRepeatedString,
                  },
                  promotion_id: {
                    n: 17,
                    br: p.qM.readString,
                    bw: p.gp.writeString,
                  },
                  cancelled: { n: 18, br: p.qM.readBool, bw: p.gp.writeBool },
                  rtime32_cancel_time: {
                    n: 19,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  require_sale_page: {
                    n: 20,
                    br: p.qM.readBool,
                    bw: p.gp.writeBool,
                  },
                  require_sale_page_type: {
                    n: 21,
                    br: p.qM.readEnum,
                    bw: p.gp.writeEnum,
                  },
                  admin_notes: {
                    n: 22,
                    br: p.qM.readString,
                    bw: p.gp.writeString,
                  },
                  partner_notes: {
                    n: 23,
                    br: p.qM.readString,
                    bw: p.gp.writeString,
                  },
                },
              }),
            Re.sm_m
          );
        }
        static MBF() {
          return Re.sm_mbf || (Re.sm_mbf = p.w0(Re.M())), Re.sm_mbf;
        }
        toObject(e = !1) {
          return Re.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(Re.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(Re.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new Re();
          return Re.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(Re.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return Re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(Re.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return Re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvitation";
        }
      }
      class ve extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ve.prototype.invite || p.Sg(ve.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ve.sm_m ||
              (ve.sm_m = {
                proto: ve,
                fields: {
                  invite: { n: 1, c: Re },
                  queue_email_to_send: {
                    n: 2,
                    br: p.qM.readBool,
                    bw: p.gp.writeBool,
                  },
                },
              }),
            ve.sm_m
          );
        }
        static MBF() {
          return ve.sm_mbf || (ve.sm_mbf = p.w0(ve.M())), ve.sm_mbf;
        }
        toObject(e = !1) {
          return ve.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(ve.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(ve.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new ve();
          return ve.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(ve.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(ve.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return ve.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_SetInvite_Request";
        }
      }
      class je extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            je.prototype.inviteid || p.Sg(je.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            je.sm_m ||
              (je.sm_m = {
                proto: je,
                fields: {
                  inviteid: {
                    n: 1,
                    br: p.qM.readFixed64String,
                    bw: p.gp.writeFixed64String,
                  },
                },
              }),
            je.sm_m
          );
        }
        static MBF() {
          return je.sm_mbf || (je.sm_mbf = p.w0(je.M())), je.sm_mbf;
        }
        toObject(e = !1) {
          return je.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(je.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(je.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new je();
          return je.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(je.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return je.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(je.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return je.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_SetInvite_Response";
        }
      }
      class Fe extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Fe.prototype.inviteid || p.Sg(Fe.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Fe.sm_m ||
              (Fe.sm_m = {
                proto: Fe,
                fields: {
                  inviteid: {
                    n: 1,
                    br: p.qM.readFixed64String,
                    bw: p.gp.writeFixed64String,
                  },
                  appid: { n: 2, br: p.qM.readUint32, bw: p.gp.writeUint32 },
                  packageid: {
                    n: 3,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  bundleid: { n: 4, br: p.qM.readUint32, bw: p.gp.writeUint32 },
                  partnerid: {
                    n: 5,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  promotion_id: {
                    n: 6,
                    br: p.qM.readString,
                    bw: p.gp.writeString,
                  },
                },
              }),
            Fe.sm_m
          );
        }
        static MBF() {
          return Fe.sm_mbf || (Fe.sm_mbf = p.w0(Fe.M())), Fe.sm_mbf;
        }
        toObject(e = !1) {
          return Fe.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(Fe.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(Fe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new Fe();
          return Fe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(Fe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return Fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(Fe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return Fe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_GetInvite_Request";
        }
      }
      class Pe extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Pe.prototype.invites || p.Sg(Pe.M()),
            _.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Pe.sm_m ||
              (Pe.sm_m = {
                proto: Pe,
                fields: { invites: { n: 1, c: Re, r: !0, q: !0 } },
              }),
            Pe.sm_m
          );
        }
        static MBF() {
          return Pe.sm_mbf || (Pe.sm_mbf = p.w0(Pe.M())), Pe.sm_mbf;
        }
        toObject(e = !1) {
          return Pe.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(Pe.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(Pe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new Pe();
          return Pe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(Pe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return Pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(Pe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return Pe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_GetInvite_Response";
        }
      }
      class We extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            We.prototype.inviteid || p.Sg(We.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            We.sm_m ||
              (We.sm_m = {
                proto: We,
                fields: {
                  inviteid: {
                    n: 1,
                    br: p.qM.readFixed64String,
                    bw: p.gp.writeFixed64String,
                  },
                  only_notify_additional_email: {
                    n: 2,
                    br: p.qM.readBool,
                    bw: p.gp.writeBool,
                  },
                },
              }),
            We.sm_m
          );
        }
        static MBF() {
          return We.sm_mbf || (We.sm_mbf = p.w0(We.M())), We.sm_mbf;
        }
        toObject(e = !1) {
          return We.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(We.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(We.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new We();
          return We.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(We.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return We.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(We.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return We.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_ResendEmailInvite_Request";
        }
      }
      class qe extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return qe.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new qe();
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new qe();
          return qe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return qe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_ResendEmailInvite_Response";
        }
      }
      class Te extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Te.prototype.inviteid || p.Sg(Te.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Te.sm_m ||
              (Te.sm_m = {
                proto: Te,
                fields: {
                  inviteid: {
                    n: 1,
                    br: p.qM.readFixed64String,
                    bw: p.gp.writeFixed64String,
                  },
                },
              }),
            Te.sm_m
          );
        }
        static MBF() {
          return Te.sm_mbf || (Te.sm_mbf = p.w0(Te.M())), Te.sm_mbf;
        }
        toObject(e = !1) {
          return Te.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(Te.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(Te.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new Te();
          return Te.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(Te.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return Te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(Te.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return Te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_GetEmailTargets_Request";
        }
      }
      class Oe extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Oe.prototype.accountid || p.Sg(Oe.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Oe.sm_m ||
              (Oe.sm_m = {
                proto: Oe,
                fields: {
                  accountid: {
                    n: 1,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  partnerid: {
                    n: 2,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  email_address: {
                    n: 3,
                    br: p.qM.readString,
                    bw: p.gp.writeString,
                  },
                },
              }),
            Oe.sm_m
          );
        }
        static MBF() {
          return Oe.sm_mbf || (Oe.sm_mbf = p.w0(Oe.M())), Oe.sm_mbf;
        }
        toObject(e = !1) {
          return Oe.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(Oe.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(Oe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new Oe();
          return Oe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(Oe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return Oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(Oe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return Oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInviteReceive";
        }
      }
      class Ie extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ie.prototype.targets || p.Sg(Ie.M()),
            _.Message.initialize(this, e, 0, -1, [1, 2, 3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ie.sm_m ||
              (Ie.sm_m = {
                proto: Ie,
                fields: {
                  targets: { n: 1, c: Oe, r: !0, q: !0 },
                  additional_email_address: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: p.qM.readString,
                    bw: p.gp.writeRepeatedString,
                  },
                  valve_account_ids: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: p.qM.readUint32,
                    pbr: p.qM.readPackedUint32,
                    bw: p.gp.writeRepeatedUint32,
                  },
                  operation_email: {
                    n: 4,
                    br: p.qM.readString,
                    bw: p.gp.writeString,
                  },
                },
              }),
            Ie.sm_m
          );
        }
        static MBF() {
          return Ie.sm_mbf || (Ie.sm_mbf = p.w0(Ie.M())), Ie.sm_mbf;
        }
        toObject(e = !1) {
          return Ie.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(Ie.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(Ie.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new Ie();
          return Ie.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(Ie.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return Ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(Ie.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return Ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_GetEmailTargets_Response";
        }
      }
      class Ue extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ue.prototype.inviteid || p.Sg(Ue.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ue.sm_m ||
              (Ue.sm_m = {
                proto: Ue,
                fields: {
                  inviteid: {
                    n: 1,
                    br: p.qM.readFixed64String,
                    bw: p.gp.writeFixed64String,
                  },
                  rtdatechosen: {
                    n: 2,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  discount_days: {
                    n: 3,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  discount_info: {
                    n: 4,
                    br: p.qM.readString,
                    bw: p.gp.writeString,
                  },
                  skip_discount_event: {
                    n: 5,
                    br: p.qM.readBool,
                    bw: p.gp.writeBool,
                  },
                },
              }),
            Ue.sm_m
          );
        }
        static MBF() {
          return Ue.sm_mbf || (Ue.sm_mbf = p.w0(Ue.M())), Ue.sm_mbf;
        }
        toObject(e = !1) {
          return Ue.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(Ue.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(Ue.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new Ue();
          return Ue.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(Ue.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return Ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(Ue.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return Ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_AcceptInvite_Request";
        }
      }
      class Ce extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ce.prototype.gid || p.Sg(Ce.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ce.sm_m ||
              (Ce.sm_m = {
                proto: Ce,
                fields: {
                  gid: {
                    n: 1,
                    br: p.qM.readFixed64String,
                    bw: p.gp.writeFixed64String,
                  },
                },
              }),
            Ce.sm_m
          );
        }
        static MBF() {
          return Ce.sm_mbf || (Ce.sm_mbf = p.w0(Ce.M())), Ce.sm_mbf;
        }
        toObject(e = !1) {
          return Ce.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(Ce.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(Ce.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new Ce();
          return Ce.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(Ce.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return Ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(Ce.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return Ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_AcceptInvite_Response";
        }
      }
      class xe extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            xe.prototype.inviteid || p.Sg(xe.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            xe.sm_m ||
              (xe.sm_m = {
                proto: xe,
                fields: {
                  inviteid: {
                    n: 1,
                    br: p.qM.readFixed64String,
                    bw: p.gp.writeFixed64String,
                  },
                },
              }),
            xe.sm_m
          );
        }
        static MBF() {
          return xe.sm_mbf || (xe.sm_mbf = p.w0(xe.M())), xe.sm_mbf;
        }
        toObject(e = !1) {
          return xe.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(xe.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(xe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new xe();
          return xe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(xe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(xe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return xe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_CancelInvite_Request";
        }
      }
      class Ae extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Ae.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Ae();
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new Ae();
          return Ae.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return Ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return Ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionEventInvites_CancelInvite_Response";
        }
      }
      class De extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            De.prototype.opt_in_name || p.Sg(De.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            De.sm_m ||
              (De.sm_m = {
                proto: De,
                fields: {
                  opt_in_name: {
                    n: 1,
                    br: p.qM.readString,
                    bw: p.gp.writeString,
                  },
                  partner_id: {
                    n: 2,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                },
              }),
            De.sm_m
          );
        }
        static MBF() {
          return De.sm_mbf || (De.sm_mbf = p.w0(De.M())), De.sm_mbf;
        }
        toObject(e = !1) {
          return De.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(De.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(De.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new De();
          return De.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(De.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return De.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(De.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return De.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionStats_GetOptInDemoStats_Request";
        }
      }
      class Ee extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ee.prototype.stats || p.Sg(Ee.M()),
            _.Message.initialize(this, e, 0, -1, [1, 2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ee.sm_m ||
              (Ee.sm_m = {
                proto: Ee,
                fields: {
                  stats: { n: 1, c: Ne, r: !0, q: !0 },
                  appid_without_permissions: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: p.qM.readUint32,
                    pbr: p.qM.readPackedUint32,
                    bw: p.gp.writeRepeatedUint32,
                  },
                },
              }),
            Ee.sm_m
          );
        }
        static MBF() {
          return Ee.sm_mbf || (Ee.sm_mbf = p.w0(Ee.M())), Ee.sm_mbf;
        }
        toObject(e = !1) {
          return Ee.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(Ee.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(Ee.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new Ee();
          return Ee.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(Ee.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return Ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(Ee.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return Ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionStats_GetOptInDemoStats_Response";
        }
      }
      class Ne extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ne.prototype.appid || p.Sg(Ne.M()),
            _.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ne.sm_m ||
              (Ne.sm_m = {
                proto: Ne,
                fields: {
                  appid: { n: 1, br: p.qM.readUint32, bw: p.gp.writeUint32 },
                  demo_appid: {
                    n: 2,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  rt_start_time: {
                    n: 3,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  rt_end_time: {
                    n: 4,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  demo_player_count: {
                    n: 5,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  wishlist_count: {
                    n: 6,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  player_wishlist_count: {
                    n: 7,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                  rt_last_update_time: {
                    n: 9,
                    br: p.qM.readUint32,
                    bw: p.gp.writeUint32,
                  },
                },
              }),
            Ne.sm_m
          );
        }
        static MBF() {
          return Ne.sm_mbf || (Ne.sm_mbf = p.w0(Ne.M())), Ne.sm_mbf;
        }
        toObject(e = !1) {
          return Ne.toObject(e, this);
        }
        static toObject(e, t) {
          return p.BT(Ne.M(), e, t);
        }
        static fromObject(e) {
          return p.Uq(Ne.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (b().BinaryReader)(e),
            r = new Ne();
          return Ne.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return p.zj(Ne.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (b().BinaryWriter)();
          return Ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          p.i0(Ne.M(), e, t);
        }
        serializeBase64String() {
          var e = new (b().BinaryWriter)();
          return Ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPromotionStats_GetOptInDemoStats_Response_PerAppStats";
        }
      }
      !(function (e) {
        (e.CreatePlan = function (e, t, r) {
          return e.SendMsg(
            "PromotionPlanning.CreatePlan#1",
            (0, B.I8)(M, t, r),
            w,
            { ePrivilege: 1 },
          );
        }),
          (e.CreateTentativePlan = function (e, t, r) {
            return e.SendMsg(
              "PromotionPlanning.CreateTentativePlan#1",
              (0, B.I8)(M, t, r),
              w,
              { ePrivilege: 1 },
            );
          }),
          (e.UpdatePlan = function (e, t, r) {
            return e.SendMsg(
              "PromotionPlanning.UpdatePlan#1",
              (0, B.I8)(f, t, r),
              z,
              { ePrivilege: 1 },
            );
          }),
          (e.UpdatePlanPartnerInfo = function (e, t, r) {
            return e.SendMsg(
              "PromotionPlanning.UpdatePlanPartnerInfo#1",
              (0, B.I8)(f, t, r),
              z,
              { ePrivilege: 1 },
            );
          }),
          (e.UpdatePlanInputData = function (e, t, r) {
            return e.SendMsg(
              "PromotionPlanning.UpdatePlanInputData#1",
              (0, B.I8)(f, t, r),
              z,
              { ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.DeletePlan = function (e, t, r) {
            return e.SendMsg(
              "PromotionPlanning.DeletePlan#1",
              (0, B.I8)(I, t, r),
              U,
              { ePrivilege: 1 },
            );
          }),
          (e.GetPlan = function (e, t, r) {
            return e.SendMsg(
              "PromotionPlanning.GetPlan#1",
              (0, B.I8)(S, t, r),
              h,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetAllActivePlan = function (e, t, r) {
            return e.SendMsg(
              "PromotionPlanning.GetAllActivePlan#1",
              (0, B.I8)(R, t, r),
              v,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetPlanCompletedInDateRange = function (e, t, r) {
            return e.SendMsg(
              "PromotionPlanning.GetPlanCompletedInDateRange#1",
              (0, B.I8)(j, t, r),
              F,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetPlanByAssociationID = function (e, t, r) {
            return e.SendMsg(
              "PromotionPlanning.GetPlanByAssociationID#1",
              (0, B.I8)(W, t, r),
              q,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetPlansUpdatedSince = function (e, t, r) {
            return e.SendMsg(
              "PromotionPlanning.GetPlansUpdatedSince#1",
              (0, B.I8)(T, t, r),
              O,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.SearchPlan = function (e, t, r) {
            return e.SendMsg(
              "PromotionPlanning.SearchPlan#1",
              (0, B.I8)(C, t, r),
              x,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetAllPlansForApps = function (e, t, r) {
            return e.SendMsg(
              "PromotionPlanning.GetAllPlansForApps#1",
              (0, B.I8)(A, t, r),
              D,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          }),
          (e.GetAllPlansForPartner = function (e, t, r) {
            return e.SendMsg(
              "PromotionPlanning.GetAllPlansForPartner#1",
              (0, B.I8)(N, t, r),
              G,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetPlanByInputAccessKey = function (e, t, r) {
            return e.SendMsg(
              "PromotionPlanning.GetPlanByInputAccessKey#1",
              (0, B.I8)(k, t, r),
              L,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.MarkLocalizationAssetComplete = function (e, t, r) {
            return e.SendMsg(
              "PromotionPlanning.MarkLocalizationAssetComplete#1",
              (0, B.I8)(V, t, r),
              K,
              { ePrivilege: 1 },
            );
          }),
          (e.SendNotification = function (e, t, r) {
            return e.SendMsg(
              "PromotionPlanning.SendNotification#1",
              (0, B.I8)(H, t, r),
              $,
              { ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetSentNotification = function (e, t, r) {
            return e.SendMsg(
              "PromotionPlanning.GetSentNotification#1",
              (0, B.I8)(Y, t, r),
              J,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.ResendNotification = function (e, t, r) {
            return e.SendMsg(
              "PromotionPlanning.ResendNotification#1",
              (0, B.I8)(Z, t, r),
              Q,
              { ePrivilege: 1 },
            );
          }),
          (e.SetPromotionEmailTarget = function (e, t, r) {
            return e.SendMsg(
              "PromotionPlanning.SetPromotionEmailTarget#1",
              (0, B.I8)(ee, t, r),
              te,
              { ePrivilege: 1 },
            );
          }),
          (e.GetPromotionPlanSalesDaily = function (e, t, r) {
            return e.SendMsg(
              "PromotionPlanning.GetPromotionPlanSalesDaily#1",
              (0, B.I8)(ae, t, r),
              se,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetPromotionPlanForSalePages = function (e, t, r) {
            return e.SendMsg(
              "PromotionPlanning.GetPromotionPlanForSalePages#1",
              (0, B.I8)(me, t, r),
              de,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          }),
          (e.CreateSalePageForPromo = function (e, t, r) {
            return e.SendMsg(
              "PromotionPlanning.CreateSalePageForPromo#1",
              (0, B.I8)(re, t, r),
              ie,
              { ePrivilege: 1 },
            );
          }),
          (e.GetUpcomingScheduledDiscounts = function (e, t, r) {
            return e.SendMsg(
              "PromotionPlanning.GetUpcomingScheduledDiscounts#1",
              (0, B.I8)(ge, t, r),
              Be,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          }),
          (e.GetSalePageCandidatesForPromo = function (e, t, r) {
            return e.SendMsg(
              "PromotionPlanning.GetSalePageCandidatesForPromo#1",
              (0, B.I8)(pe, t, r),
              ye,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetAdvertisingAppsForPartner = function (e, t, r) {
            return e.SendMsg(
              "PromotionPlanning.GetAdvertisingAppsForPartner#1",
              (0, B.I8)(fe, t, r),
              ze,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          });
      })(i || (i = {})),
        (function (e) {
          (e.SetInvite = function (e, t, r) {
            return e.SendMsg(
              "PromotionEventInvites.SetInvite#1",
              (0, B.I8)(ve, t, r),
              je,
              { ePrivilege: 4 },
            );
          }),
            (e.GetInvite = function (e, t, r) {
              return e.SendMsg(
                "PromotionEventInvites.GetInvite#1",
                (0, B.I8)(Fe, t, r),
                Pe,
                { bConstMethod: !0, ePrivilege: 1 },
              );
            }),
            (e.AcceptInvite = function (e, t, r) {
              return e.SendMsg(
                "PromotionEventInvites.AcceptInvite#1",
                (0, B.I8)(Ue, t, r),
                Ce,
                { ePrivilege: 1 },
              );
            }),
            (e.CancelInvite = function (e, t, r) {
              return e.SendMsg(
                "PromotionEventInvites.CancelInvite#1",
                (0, B.I8)(xe, t, r),
                Ae,
                { ePrivilege: 4 },
              );
            }),
            (e.ResendEmailInvite = function (e, t, r) {
              return e.SendMsg(
                "PromotionEventInvites.ResendEmailInvite#1",
                (0, B.I8)(We, t, r),
                qe,
                { ePrivilege: 4 },
              );
            }),
            (e.GetEmailTargets = function (e, t, r) {
              return e.SendMsg(
                "PromotionEventInvites.GetEmailTargets#1",
                (0, B.I8)(Te, t, r),
                Ie,
                { ePrivilege: 4 },
              );
            });
        })(n || (n = {})),
        (function (e) {
          e.GetOptInDemoStats = function (e, t, r) {
            return e.SendMsg(
              "PromotionStats.GetOptInDemoStats#1",
              (0, B.I8)(De, t, r),
              Ee,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          };
        })(a || (a = {}));
      var Ge = r(80902),
        ke = r(72034),
        Le = r(30470),
        Ve = r(24484);
      function Ke(e, t) {
        const [r] = (0, c.useState)(() =>
          (function () {
            const e = (0, Ve.Tc)(
              "promotion_operation_token",
              "application_config",
            );
            return (
              (0, g.wT)(
                e,
                "GetPromotionWriteAccess: promotion operation token is missing",
              ),
              e
                ? new ke.D(Le.TS.WEBAPI_BASE_URL, e).GetServiceTransport()
                : null
            );
          })(),
        );
        return (0, Ge.I)({
          queryKey: ["usePromotionPlanBySalePage", t],
          queryFn: async () => {
            if (!r) return null;
            const n = B.w.Init(me),
              a = new ue();
            a.set_clan_account_id(e),
              a.set_gid_clan_event(t),
              n.Body().add_request_list(a);
            const s = await i.GetPromotionPlanForSalePages(r, n);
            if (s.GetEResult() != d.R)
              throw new Error(
                `Error from PromotionPlanBySalePage: ${s.GetEResult()}`,
              );
            return s
              .Body()
              .plans()
              .map((e) => e.promotion_id());
          },
          placeholderData: null,
          enabled: Boolean(r),
        }).data;
      }
      var He = r(82429),
        $e = r(56283),
        Ye = r(84811),
        Je = r(34629),
        Xe = r(74568),
        Ze = r(61859),
        Qe = r(84933),
        et = r(56330),
        tt = r.n(et),
        rt = r(22797),
        it = r(78327),
        nt = r(68797),
        at = r(41735),
        st = r.n(at);
      const ot = new (class {
        async DeleteForumTopic(e, t, r, i, n) {
          let a =
            it.TS.COMMUNITY_BASE_URL +
            "forum/" +
            e.GetAccountID() +
            "/" +
            t +
            "/deletetopic/";
          null != r && "" != r && (a += r + "/");
          const s = new FormData();
          s.append("sessionid", (0, it.KC)()), s.append("gidforumtopic", i);
          let o = await st().post(a, s, {
            withCredentials: !0,
            cancelToken: n.token,
          });
          if (o.data.success != d.R) throw o.data;
          return o.data;
        }
      })();
      class lt extends c.Component {
        static m_uniqueError = 0;
        m_forumTopicGID;
        m_clanSteamID;
        m_cancelSignal = st().CancelToken.source();
        constructor(e) {
          super(e),
            (this.state = {
              dialogState: this.props.bNoConfirmationNeeded
                ? "waiting"
                : "confirmation",
              bDeleteCommentThread: !1,
            });
        }
        componentDidMount() {
          this.props.bNoConfirmationNeeded && this.OnDelete();
        }
        OnDeleteEventSuccessCallback() {
          this.props.partnerEventStore.ResetModel(),
            this.state.bDeleteCommentThread
              ? ot
                  .DeleteForumTopic(
                    this.m_clanSteamID,
                    "Event",
                    void 0,
                    this.m_forumTopicGID,
                    this.m_cancelSignal,
                  )
                  .then(this.OnDeleteForumTopicSuccessCallback)
                  .catch(this.OnDeleteForumTopicFailureCallback)
              : this.setState({ dialogState: "success" });
        }
        OnDeleteForumTopicSuccessCallback() {
          this.setState({ dialogState: "success" });
        }
        componentWillUnmount() {
          this.m_cancelSignal.cancel("component unmounted");
        }
        OnDeleteEventFailureCallback(e) {
          this.setState({ dialogState: "error", ...(0, nt.H)(e) });
        }
        OnDeleteForumTopicFailureCallback(e) {
          this.setState({
            dialogState: "failed_thread_delete",
            ...(0, nt.H)(e),
          });
        }
        SetToWaiting() {
          "waiting" != this.state.dialogState &&
            this.setState({ dialogState: "waiting" });
        }
        OnDelete() {
          const { eventModel: e, partnerEventStore: t } = this.props;
          let r = e.clanSteamID,
            i = e.GID,
            n = e.AnnouncementGID;
          (this.m_forumTopicGID = e.forumTopicGID),
            (this.m_clanSteamID = r),
            !this.props.eventModel.bOldAnnouncement &&
            i &&
            "0" != i &&
            i != o.kFb
              ? (this.SetToWaiting(),
                t
                  .DeleteClanEvent(r, i)
                  .then(this.OnDeleteEventSuccessCallback)
                  .catch(this.OnDeleteEventFailureCallback))
              : this.props.eventModel.bOldAnnouncement
                ? (this.SetToWaiting(),
                  t
                    .DeleteOldAnnouncement(r, n)
                    .then(this.OnDeleteEventSuccessCallback)
                    .catch(this.OnDeleteEventFailureCallback))
                : (t.ResetModel(), this.setState({ dialogState: "success" }));
        }
        OnChangeDeleteForum() {
          this.setState({
            bDeleteCommentThread: !this.state.bDeleteCommentThread,
          });
        }
        render() {
          let e = this.props.eventModel,
            t = this.props.closeModal,
            r = "",
            i = new Array();
          switch (this.state.dialogState) {
            case "confirmation":
              let n = e.GetNameWithFallback((0, o.sfN)(it.TS.LANGUAGE)),
                a = e.BIsVisibleEvent()
                  ? "#EventDisplay_AreYouSure_Visible"
                  : "#EventDisplay_AreYouSure";
              (r = (0, Ze.we)(a, n)),
                (t = this.OnDelete),
                e.BHasForumTopicGID() &&
                  i.push(
                    (0, s.jsxs)(
                      "div",
                      {
                        className: tt().Padding,
                        children: [
                          (0, s.jsx)("input", {
                            type: "checkbox",
                            id: "del_cmt_post",
                            name: "del_cmt_post",
                            defaultChecked: this.state.bDeleteCommentThread,
                            onChange: this.OnChangeDeleteForum,
                          }),
                          (0, s.jsx)("label", {
                            htmlFor: "del_cmt_post",
                            children: (0, Ze.we)(
                              "#EventDisplay_DeleteEvent_Comment",
                            ),
                          }),
                        ],
                      },
                      "WantToDeleteCmtThread",
                    ),
                  );
              break;
            case "waiting":
              (r = (0, Ze.we)("#EventDisplay_DeleteEvent_InProgress")),
                i.push((0, s.jsx)(rt.t, {}, "throbber"));
              break;
            case "error":
              (r = (0, Ze.we)("#EventDisplay_DeleteEvent_Error")),
                i.push(
                  (0, s.jsx)(
                    "div",
                    {
                      className: tt().ErrorStyles,
                      children: this.state.strErrorMsg,
                    },
                    "deleteerror_" + ++lt.m_uniqueError,
                  ),
                );
              break;
            case "failed_thread_delete":
              (r = (0, Ze.we)("#EventDisplay_DeleteEvent_ForumTopicError")),
                i.push(
                  (0, s.jsx)(
                    "div",
                    {
                      className: tt().ErrorStyles,
                      children: this.state.strErrorMsg,
                    },
                    "deleteerror_" + ++lt.m_uniqueError,
                  ),
                ),
                this.props.onDeleteSuccessAndCloseDialog &&
                  (t = () => {
                    this.props.onDeleteSuccessAndCloseDialog(),
                      this.props.closeModal();
                  });
              break;
            case "success":
              (r = (0, Ze.we)("#EventDisplay_DeleteEvent_Success")),
                this.props.onDeleteSuccessAndCloseDialog &&
                  (t = () => {
                    this.props.onDeleteSuccessAndCloseDialog(),
                      this.props.closeModal();
                  });
          }
          return (0, s.jsx)(Xe.o0, {
            strTitle: (0, Ze.we)("#EventDisplay_DeleteEvent"),
            strDescription: r,
            onCancel: this.props.closeModal,
            onOK: t,
            bAlertDialog: "confirmation" != this.state.dialogState,
            bOKDisabled: "waiting" == this.state.dialogState,
            bDestructiveWarning: "error" == this.state.dialogState,
            children: i,
          });
        }
      }
      (0, Je.Cg)([Qe.oI], lt.prototype, "OnDeleteEventSuccessCallback", null),
        (0, Je.Cg)(
          [Qe.oI],
          lt.prototype,
          "OnDeleteForumTopicSuccessCallback",
          null,
        ),
        (0, Je.Cg)([Qe.oI], lt.prototype, "OnDeleteEventFailureCallback", null),
        (0, Je.Cg)(
          [Qe.oI],
          lt.prototype,
          "OnDeleteForumTopicFailureCallback",
          null,
        ),
        (0, Je.Cg)([Qe.oI], lt.prototype, "SetToWaiting", null),
        (0, Je.Cg)([Qe.oI], lt.prototype, "OnDelete", null),
        (0, Je.Cg)([Qe.oI], lt.prototype, "OnChangeDeleteForum", null);
      var ct = r(32803),
        mt = r(60860),
        ut = r(95695),
        dt = r(738),
        gt = r(52038),
        Bt = r(56011),
        _t = r(64846),
        bt = r(14947),
        pt = r(1501),
        yt = r(35400),
        Mt = r(36735),
        wt = r(90316);
      function ft(e) {
        const { eventModel: t } = e,
          r = (0, l.q3)(() => t.jsondata.sale_sections);
        return (0, c.useMemo)(
          () =>
            r?.some(
              (e) =>
                ("quiz" == e.section_type &&
                  e.quiz?.track_with_cozy_cottage_doors) ||
                "quest" == e.section_type ||
                "rewards" == e.section_type,
            ),
          [r],
        )
          ? (0, s.jsx)(St, { ...e })
          : null;
      }
      const zt = "Answered as: ";
      function St(e) {
        const { eventModel: t } = e,
          [r, i] = (0, c.useState)(!1),
          n = (0, yt.Tn)();
        if (
          ((0, c.useEffect)(() => {
            yt.hH
              .Get()
              .LoadDoorData()
              .then(() => i(!0));
          }, []),
          !r)
        )
          return null;
        const a = t.GetSaleSectionsByType("quiz"),
          o = [],
          l =
            1 == a?.length &&
            ("scenario" == a[0].quiz.quiz_type ||
              "branching" == a[0].quiz.quiz_type) &&
            a[0].quiz.answer_categories?.length > 0;
        if (l)
          o.push({ label: "State: Reset the Quiz", data: -1 }),
            o.push(
              ...a[0].quiz.answer_categories.map((e) => ({
                label: zt + e.category_name,
                data: e.door_index,
              })),
            ),
            o.push(
              ...a[0].quiz.answer_categories.map((e) => ({
                label: "Rewarded as: " + e.category_name,
                data: e.door_index,
              })),
            );
        else {
          const e = yt.hH.Get().GetMaxDoor();
          for (let t = -1; t <= e; ++t)
            o.push({ label: "Doors Opened " + (t + 1), data: t });
        }
        const m = t.GetSaleSectionsByType("rewards"),
          u = m?.length > 0 ? m[0] : null;
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)("a", {
              className: (0, gt.A)(ut.Button, wt.AdminButton),
              onClick: (e) => {
                (0, dt.pg)(
                  (0, s.jsx)(Xe.o0, {
                    strTitle: (0, Ze.we)("#Dialog_AreYouSure"),
                    strDescription:
                      "Reload page after you hit OK; will not grant virtual reward items a second itme",
                    onOK: () => yt.hH.Get().CloseAllDoors(it.UF.CLANACCOUNTID),
                  }),
                  (0, Bt.uX)(e),
                );
              },
              children: "Reset All Doors",
            }),
            (0, s.jsx)($e.m, {
              strDropDownClassName: (0, gt.A)(ut.DropDownScroll),
              rgOptions: o,
              selectedOption: n,
              label: "Minigame States:",
              onChange: (e) => {
                const t = new Array();
                if (l)
                  (0, bt.h5)(() => {
                    if (
                      ((0, yt.Sp)(-1),
                      pt.N.Get().ClearAnswersAndCategories(),
                      -1 != e.data)
                    ) {
                      const r = a[0].quiz.answer_categories.find(
                        (t) => t.door_index == e.data,
                      );
                      r &&
                        a[0].quiz.questions
                          .filter((e) => e.answers?.length > 0)
                          .forEach((e, t) => {
                            let i = e.answers.findIndex((e) =>
                              e.category_ids?.includes(r.category_id),
                            );
                            i < 0 && (i = 0),
                              pt.N.Get().SetAnswerCategory(
                                t,
                                e.answers[i].category_ids,
                              ),
                              pt.N.Get().SetAnswer(t, e.answers[i]);
                          }),
                        e.label.toString().startsWith(zt) ||
                          ((0, yt.my)(0, !0),
                          (0, yt.my)(e.data, !0),
                          t.push(0),
                          t.push(e.data));
                    }
                  });
                else {
                  for (let r = 0; r <= e.data; ++r) t.push(r);
                  (0, yt.Sp)(e.data);
                }
                if (
                  u &&
                  u.rewards?.reward_items?.length > 0 &&
                  e.data > -1 &&
                  !e.label.toString().startsWith(zt)
                ) {
                  const e = t
                      .map((e) =>
                        (function (e, t) {
                          if (e && "rewards" == e.section_type) {
                            const r = e.rewards.reward_items?.filter(
                              (e) => e.item_bucket == t,
                            );
                            if (r?.length > 0)
                              return r.map((e) => ({
                                appid: e.appid,
                                item_type: e.community_item_type,
                                amount: "1",
                              }));
                          }
                          return null;
                        })(u, e),
                      )
                      .filter(Boolean),
                    r = new Array();
                  e.forEach((e) => r.push(...e)),
                    (0, Mt.l5)(u.rewards?.reward_items[0].appid, r);
                }
              },
            }),
          ],
        });
      }
      var ht = r(12155),
        Rt = r(32754),
        vt = r(77021),
        jt = r(67165),
        Ft = r(27939);
      function Pt(e) {
        const {
            eventModel: t,
            partnerEventStore: r,
            addtionalAdminButtons: i,
            fnOnUpdateSaleDayIndex: n,
            bSupportsSticky: a = !1,
          } = e,
          u = (0, it.Qn)(),
          d = (0, mt.MU)(),
          [g, B] = c.useState(!1),
          _ = (0, l.q3)(() =>
            (function (e) {
              let t;
              e?.BHasSaleEnabled() &&
                (e.GetSaleSectionCount() > 0 &&
                  e.GetSaleSections().forEach((e) => {
                    (0, m.ye)(e.section_type) &&
                      !(0, m.CU)(e) &&
                      e.capsules.forEach((e) => {
                        void 0 !== e.visibility_index &&
                          (void 0 === t || t < e.visibility_index) &&
                          (t = e.visibility_index);
                      });
                  }),
                e.jsondata.sale_num_headers > 1 &&
                  (void 0 === t || t < e.jsondata.sale_num_headers) &&
                  (t = e.jsondata.sale_num_headers));
              return t;
            })(t),
          ),
          [b, p] = c.useState(t ? t.GetDayIndexFromEventStart() : 0),
          [y, M, w, f] = (0, l.q3)(() => [
            t.visibility_state,
            t.jsondata.bSaleEnabled,
            t.GID,
            t.clanSteamID.GetAccountID(),
          ]),
          z = (0, He.Ec)(f),
          [S, h] = c.useState(a),
          { bVisible: R, ref: v } = (0, Qe.hd)(),
          j = (e) => {
            (0, dt.pg)(
              (0, s.jsx)(lt, {
                eventModel: t,
                onDeleteSuccessAndCloseDialog: () => B(!0),
                partnerEventStore: r,
              }),
              (0, Bt.uX)(e),
            );
          },
          F = (0, vt.ty)(),
          { creatorHome: P } = (0, jt.FV)(f);
        if (g)
          return (0, s.jsx)(ct.OG, {
            eventModel: t,
            route: ct.PH.k_eCommunityAdminPage,
          });
        if ((z.can_edit || z.support_user) && !u && !F) {
          const e = [];
          if (void 0 !== _)
            for (let t = 0; t <= _; ++t)
              e.push({
                label: (0, Ze.we)("#SalePage_Admin_SaleEventDay", t + 1),
                data: t,
              });
          const l = (0, it.yK)(),
            u = "community" == l,
            g = "store" == l,
            B = it.iA.is_support && (0, _t.m)(t.clanSteamID, !0),
            z = S && !R,
            F = t.GetEventType() == o.ajI,
            W = F && P?.GetLinkedEventGID() == t.GID,
            q =
              (y == m.zv.k_EEventStateVisible ||
                y == m.zv.k_EEventStateUnlisted) &&
              (!F || W),
            T = y == m.zv.k_EEventStateStaged;
          return (0, s.jsxs)(Ye.tH, {
            children: [
              (0, s.jsx)("div", {
                className: (0, gt.A)(
                  wt.DisplayAdminPanel_TopSpacer,
                  z && wt.Sticky,
                ),
              }),
              (0, s.jsxs)("div", {
                className: (0, gt.A)({
                  [wt.DisplayAdminPanel]: !0,
                  [wt.Locked]: u,
                  [wt.Sticky]: z,
                }),
                children: [
                  (0, s.jsx)("span", {
                    className: wt.DisplayAdminPanel_Title,
                    children: (0, Ze.we)("#EventDisplay_Admin_Title"),
                  }),
                  (0, s.jsxs)("div", {
                    className: (0, gt.A)(
                      wt.DisplayAdminPanel_ctn,
                      z && wt.Sticky,
                    ),
                    children: [
                      i,
                      i &&
                        (0, s.jsx)("span", {
                          className: wt.DisplayAdminPanel_Spacer,
                          children: " ",
                        }),
                      (0, s.jsx)(ct.tj, {
                        eventModel: t,
                        route: ct.PH.k_eCommunityEdit,
                        className: (0, gt.A)(ut.Button, wt.AdminButton),
                        children: F
                          ? (0, Ze.we)("#EventEditor_Edit_Page")
                          : (0, Ze.we)("#EventEditor_Edit"),
                      }),
                      Boolean(r && "community" == (0, it.yK)()) &&
                        (0, s.jsx)("span", {
                          className: ut.Button + " " + wt.AdminButton,
                          onClick: j,
                          children: (0, Ze.we)("#EventDisplay_DeleteEvent"),
                        }),
                      !q &&
                        (0, s.jsx)(c.Fragment, {
                          children: (0, s.jsx)(ct.tj, {
                            eventModel: t,
                            route: ct.PH.k_eCommunityPublish,
                            className: (0, gt.A)(ut.Button, wt.AdminButton),
                            children: (0, Ze.we)(
                              T
                                ? "#EventEditor_Publish_VisibleNow"
                                : "#Button_Publish",
                            ),
                          }),
                        }),
                      (0, s.jsx)(ct.tj, {
                        eventModel: t,
                        route: ct.PH.k_eCommunityAdminPage,
                        className: (0, gt.A)(ut.Button, wt.AdminButton),
                        children: (0, Ze.we)("#EventDisplay_Events"),
                      }),
                      Boolean(void 0 !== _ && e.length > 0) &&
                        (0, s.jsx)($e.m, {
                          strDropDownClassName: ut.DropDownScroll,
                          rgOptions: e,
                          selectedOption: Math.min(_, b),
                          onChange: (e) => {
                            p(e.data), n(e.data);
                          },
                          bDisableMouseOverlay: !0,
                          contextMenuPositionOptions: {
                            bDisableMouseOverlay: !0,
                          },
                        }),
                      Boolean(t.jsondata.bSaleEnabled && d && !F) &&
                        (0, s.jsx)(ct.tj, {
                          eventModel: t,
                          route: ct.PH.k_eStoreSalePage,
                          className: (0, gt.A)(ut.Button, wt.AdminButton),
                          children: (0, Ze.we)("#EventDisplay_SalesPage"),
                        }),
                      Boolean(M && it.iA.is_support && w) &&
                        (0, s.jsx)("a", {
                          href:
                            it.TS.STATS_BASE_URL +
                            "sales/details/?gid=" +
                            w +
                            "&clanid=" +
                            f,
                          target: it.TS.IN_CLIENT ? "" : "_blank",
                          className: (0, gt.A)(
                            ut.Button,
                            wt.AdminButton,
                            ut.ValveOnlyBackground,
                          ),
                          children: (0, Ze.we)("#EventDisplay_StatsPage"),
                        }),
                      Boolean(M && it.iA.is_support && w && !F) &&
                        (0, s.jsx)("a", {
                          href:
                            it.TS.PARTNER_BASE_URL +
                            "promotion/invitationplanner/dashboard?saleclaneventgid=" +
                            w +
                            "&saleclanaccountid=" +
                            f,
                          target: it.TS.IN_CLIENT ? "" : "_blank",
                          className: (0, gt.A)(
                            ut.Button,
                            wt.AdminButton,
                            ut.ValveOnlyBackground,
                          ),
                          children: (0, Ze.we)(
                            "#EventDisplay_InvitationPlannerPage",
                          ),
                        }),
                      Boolean(M && B && w) &&
                        (0, s.jsx)(Tt, {
                          clanAccountID: t.clanSteamID.GetAccountID(),
                          gidClanEvent: w,
                        }),
                      Boolean(
                        M && B && Ft.bv == f && t.GetContentHubCategory(),
                      ) &&
                        (0, s.jsx)("a", {
                          href: `${it.TS.PARTNER_BASE_URL}admin/store/contenthub/categories?edit=${t.GetContentHubCategory()}`,
                          target: it.TS.IN_CLIENT ? "" : "_blank",
                          className: (0, gt.A)(
                            ut.Button,
                            wt.AdminButton,
                            ut.ValveOnlyBackground,
                          ),
                          children: (0, Ze.we)("#EventDisplay_CategoryEditor"),
                        }),
                      Boolean(q && (g || (d && !u))) &&
                        (0, s.jsx)(ct.tj, {
                          eventModel: t,
                          route: M
                            ? ct.PH.k_eCommunityPreviewSale
                            : ct.PH.k_eCommunityView,
                          className: (0, gt.A)(ut.Button, wt.AdminButton),
                          children: (0, Ze.we)(
                            M
                              ? "#EventDisplay_PreviewOnCommunity"
                              : "#EventDisplay_ViewOnCommunity",
                          ),
                        }),
                      Boolean(q && u) &&
                        (0, s.jsx)(ct.tj, {
                          eventModel: t,
                          route: ct.PH.k_eStoreView,
                          className: (0, gt.A)(ut.Button, wt.AdminButton),
                          children: (0, Ze.we)("#EventDisplay_ViewOnStore"),
                        }),
                      (0, s.jsx)(ft, { eventModel: t }),
                      (0, s.jsx)(Wt, { eventModel: t }),
                      z &&
                        (0, s.jsx)("div", {
                          className: wt.DisplayAdminPanelClose,
                          onClick: () => h(!1),
                          children: (0, s.jsx)(Rt.Gq, {
                            toolTipContent: (0, Ze.we)(
                              "#EventDisplay_Admin_Close_ttip",
                            ),
                            children: (0, s.jsx)(ht.X, {}),
                          }),
                        }),
                      !S &&
                        a &&
                        (0, s.jsx)("div", {
                          className: wt.DisplayAdminPanelClose,
                          onClick: () => h(!0),
                          children: (0, s.jsx)(Rt.Gq, {
                            toolTipContent: (0, Ze.we)(
                              "#EventDisplay_Admin_Reopen_ttip",
                            ),
                            children: (0, s.jsx)(ht.i3G, { angle: 0 }),
                          }),
                        }),
                    ],
                  }),
                ],
              }),
              (0, s.jsx)("div", {
                className: wt.DisplayAdminPanelMarker,
                ref: v,
              }),
            ],
          });
        }
        return (0, s.jsx)("span", {});
      }
      function Wt(e) {
        const { eventModel: t } = e,
          r = (0, l.q3)(() => t.jsondata.sale_sections),
          i = (0, c.useMemo)(
            () => r?.find((e) => "badge_progress" == e.section_type),
            [r],
          );
        return i?.badge_progress?.levels?.length > 0 && it.iA.is_support
          ? (0, s.jsx)(qt, { section: i })
          : null;
      }
      function qt(e) {
        const { section: t } = e,
          r = (0, u.fy)(t.badge_progress?.event_badgeid),
          i = (0, l.q3)(() => t.badge_progress.levels),
          n = Math.max(...i.map((e) => e.level));
        if (!r) return null;
        const a = [];
        for (let e = 0; e <= n; ++e) a.push({ label: "Level " + e, data: e });
        return (0, s.jsx)($e.m, {
          strDropDownClassName: (0, gt.A)(
            ut.DropDownScroll,
            ut.ValveOnlyBackground,
          ),
          rgOptions: a,
          selectedOption: r.level,
          onChange: (e) =>
            (0, u.Du)({
              badgeid: t.badge_progress?.event_badgeid,
              level: e.data,
            }),
        });
      }
      function Tt(e) {
        const { clanAccountID: t, gidClanEvent: r } = e,
          i = Ke(t, r);
        return i
          ? (0, s.jsx)(s.Fragment, {
              children: i.map((e) =>
                (0, s.jsx)(
                  "a",
                  {
                    href: `${it.TS.PARTNER_BASE_URL}promotion/planning/edit/${e}`,
                    target: it.TS.IN_CLIENT ? "" : "_blank",
                    className: (0, gt.A)(
                      ut.Button,
                      wt.AdminButton,
                      ut.ValveOnlyBackground,
                    ),
                    children: (0, Ze.we)("#EventDisplay_PromotionEditor"),
                  },
                  e,
                ),
              ),
            })
          : null;
      }
    },
    64846: (e, t, r) => {
      r.d(t, { E: () => l, m: () => o });
      var i = r(7850),
        n = r(82429),
        a = r(95695),
        s = r(52038);
      function o(e, t) {
        if (!e || !e.BIsClanAccount()) return !1;
        const r = n.KN.Get().GetPartnerEventPermissions(e);
        return !!r && (t ? r.valve_admin : r.valve_admin || r.support_user);
      }
      function l(e) {
        const { clanSteamID: t, id: r } = e;
        return o(t, e.requireAdmin)
          ? (0, i.jsx)("div", {
              id: r,
              className: (0, s.A)(
                e.className,
                e.requireAdmin
                  ? a.ValveOnlyAdminBackground
                  : a.ValveOnlyBackground,
              ),
              children: e.children,
            })
          : null;
      }
    },
    44894: (e, t, r) => {
      r.d(t, { A: () => i });
      const i =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcJJREFUeNqkUz1PAkEQfStggjESejU0GozlGqn8SGywkYIYY0IsaLCwIBTQUN5fMLGm8S8QSWwslVAYjAlUBEJDhCgWwp3nzN6eHqIVl8zN7rx5b+dm9oRt25jlmcOMj59f10JAkPcBcXIGWdECyqYn6TfGdZ9S9d4K4gQYx4WCtJzE+G/sKJudwpQABUGnGSf5vKzX60jmctL8SYzz+iCdls1mEzuplMIsLSC4iSUh1ClUlpHIZGStVkM0GsVNqVRlIJZIyG63i1AohMdKpUrZRQqXz4j7LWA7VSiR/WRSNhsNRRgOh+i02wgGg3hrtRSZelLmI6cExs7nKJGVtTX50uupMn0+H157PUWmZpYDXLoWUFPo6MC87jivx4MBFtxOWZYS11VipNdT98DWDVsPh2XQNLFIMdc4xpg9OZ3JMdIpRowSXVKt36+yuXvGxn+N0XS+3zj0kG+JSPEi261H5FCLmN9lUyNWyZ+Qag54eA6Hbfa8j1A88g+2qrlqCkKIZdovbAG7m8D5E3B5D9xR7IPsk/u7DextABd14OrBwd6J23YFligQ0IPwXE7lbedXUAPya5yHMiLuq5j1d/4SYAAj3NATBGE4PgAAAABJRU5ErkJggg==";
    },
  },
]);
