/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [56925],
    {
      56925: (Y, Q, y) => {
        y.d(Q, { DT: () => J, Uy: () => H, Pt: () => c, bD: () => D });
        var x = y(7414),
          S = y(35038),
          f = y(80613),
          B = y.n(f),
          t = y(75245);
        class n extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              n.prototype.appids || t.Sg(n.M()),
              f.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              n.sm_m ||
                (n.sm_m = {
                  proto: n,
                  fields: {
                    appids: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: t.qM.readInt32,
                      pbr: t.qM.readPackedInt32,
                      bw: t.gp.writeRepeatedInt32,
                    },
                  },
                }),
              n.sm_m
            );
          }
          static MBF() {
            return n.sm_mbf || (n.sm_mbf = t.w0(n.M())), n.sm_mbf;
          }
          toObject(r = !1) {
            return n.toObject(r, this);
          }
          static toObject(r, e) {
            return t.BT(n.M(), r, e);
          }
          static fromObject(r) {
            return t.Uq(n.M(), r);
          }
          static deserializeBinary(r) {
            let e = new (B().BinaryReader)(r),
              a = new n();
            return n.deserializeBinaryFromReader(a, e);
          }
          static deserializeBinaryFromReader(r, e) {
            return t.zj(n.MBF(), r, e);
          }
          serializeBinary() {
            var r = new (B().BinaryWriter)();
            return n.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, e) {
            t.i0(n.M(), r, e);
          }
          serializeBase64String() {
            var r = new (B().BinaryWriter)();
            return (
              n.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountPrivateAppList";
          }
        }
        class i extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              i.prototype.appids || t.Sg(i.M()),
              f.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              i.sm_m ||
                (i.sm_m = {
                  proto: i,
                  fields: {
                    appids: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: t.qM.readInt32,
                      pbr: t.qM.readPackedInt32,
                      bw: t.gp.writeRepeatedInt32,
                    },
                    private: { n: 2, br: t.qM.readBool, bw: t.gp.writeBool },
                  },
                }),
              i.sm_m
            );
          }
          static MBF() {
            return i.sm_mbf || (i.sm_mbf = t.w0(i.M())), i.sm_mbf;
          }
          toObject(r = !1) {
            return i.toObject(r, this);
          }
          static toObject(r, e) {
            return t.BT(i.M(), r, e);
          }
          static fromObject(r) {
            return t.Uq(i.M(), r);
          }
          static deserializeBinary(r) {
            let e = new (B().BinaryReader)(r),
              a = new i();
            return i.deserializeBinaryFromReader(a, e);
          }
          static deserializeBinaryFromReader(r, e) {
            return t.zj(i.MBF(), r, e);
          }
          serializeBinary() {
            var r = new (B().BinaryWriter)();
            return i.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, e) {
            t.i0(i.M(), r, e);
          }
          serializeBase64String() {
            var r = new (B().BinaryWriter)();
            return (
              i.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountPrivateApps_ToggleAppPrivacy_Request";
          }
        }
        class M extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), f.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return M.toObject(r, this);
          }
          static toObject(r, e) {
            return r ? { $jspbMessageInstance: e } : {};
          }
          static fromObject(r) {
            return new M();
          }
          static deserializeBinary(r) {
            let e = new (B().BinaryReader)(r),
              a = new M();
            return M.deserializeBinaryFromReader(a, e);
          }
          static deserializeBinaryFromReader(r, e) {
            return r;
          }
          serializeBinary() {
            var r = new (B().BinaryWriter)();
            return M.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, e) {}
          serializeBase64String() {
            var r = new (B().BinaryWriter)();
            return (
              M.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountPrivateApps_ToggleAppPrivacy_Response";
          }
        }
        class b extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), f.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return b.toObject(r, this);
          }
          static toObject(r, e) {
            return r ? { $jspbMessageInstance: e } : {};
          }
          static fromObject(r) {
            return new b();
          }
          static deserializeBinary(r) {
            let e = new (B().BinaryReader)(r),
              a = new b();
            return b.deserializeBinaryFromReader(a, e);
          }
          static deserializeBinaryFromReader(r, e) {
            return r;
          }
          serializeBinary() {
            var r = new (B().BinaryWriter)();
            return b.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, e) {}
          serializeBase64String() {
            var r = new (B().BinaryWriter)();
            return (
              b.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountPrivateApps_GetPrivateAppList_Request";
          }
        }
        class l extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              l.prototype.private_apps || t.Sg(l.M()),
              f.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              l.sm_m ||
                (l.sm_m = {
                  proto: l,
                  fields: { private_apps: { n: 1, c: n } },
                }),
              l.sm_m
            );
          }
          static MBF() {
            return l.sm_mbf || (l.sm_mbf = t.w0(l.M())), l.sm_mbf;
          }
          toObject(r = !1) {
            return l.toObject(r, this);
          }
          static toObject(r, e) {
            return t.BT(l.M(), r, e);
          }
          static fromObject(r) {
            return t.Uq(l.M(), r);
          }
          static deserializeBinary(r) {
            let e = new (B().BinaryReader)(r),
              a = new l();
            return l.deserializeBinaryFromReader(a, e);
          }
          static deserializeBinaryFromReader(r, e) {
            return t.zj(l.MBF(), r, e);
          }
          serializeBinary() {
            var r = new (B().BinaryWriter)();
            return l.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, e) {
            t.i0(l.M(), r, e);
          }
          serializeBase64String() {
            var r = new (B().BinaryWriter)();
            return (
              l.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountPrivateApps_GetPrivateAppList_Response";
          }
        }
        class m extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              m.prototype.private_apps || t.Sg(m.M()),
              f.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              m.sm_m ||
                (m.sm_m = {
                  proto: m,
                  fields: { private_apps: { n: 1, c: n } },
                }),
              m.sm_m
            );
          }
          static MBF() {
            return m.sm_mbf || (m.sm_mbf = t.w0(m.M())), m.sm_mbf;
          }
          toObject(r = !1) {
            return m.toObject(r, this);
          }
          static toObject(r, e) {
            return t.BT(m.M(), r, e);
          }
          static fromObject(r) {
            return t.Uq(m.M(), r);
          }
          static deserializeBinary(r) {
            let e = new (B().BinaryReader)(r),
              a = new m();
            return m.deserializeBinaryFromReader(a, e);
          }
          static deserializeBinaryFromReader(r, e) {
            return t.zj(m.MBF(), r, e);
          }
          serializeBinary() {
            var r = new (B().BinaryWriter)();
            return m.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, e) {
            t.i0(m.M(), r, e);
          }
          serializeBase64String() {
            var r = new (B().BinaryWriter)();
            return (
              m.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountPrivateApsClient_NotifyPrivateAppListChanged_Notification";
          }
        }
        var h;
        ((s) => {
          function r(a, u, d) {
            return a.SendMsg(
              "AccountPrivateApps.ToggleAppPrivacy#1",
              (0, S.I8)(i, u, d),
              M,
              { ePrivilege: 1 },
            );
          }
          s.ToggleAppPrivacy = r;
          function e(a, u, d) {
            return a.SendMsg(
              "AccountPrivateApps.GetPrivateAppList#1",
              (0, S.I8)(b, u, d),
              l,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          s.GetPrivateAppList = e;
        })(h || (h = {}));
        var O;
        ((s) => {
          s.NotifyPrivateAppListChangedHandler = {
            name: "AccountPrivateAppsClient.NotifyPrivateAppListChanged#1",
            request: m,
          };
        })(O || (O = {}));
        var j = y(72609),
          z = y(68312),
          V = y(80902),
          F = y(75233),
          U = y(51614);
        function T() {
          return "PrivateApps_" + j.iA.accountid;
        }
        function g() {
          return j.TS.IN_STEAMUI;
        }
        async function $(s) {
          const r = T();
          return await s.GetObject(r);
        }
        async function I(s, r) {
          try {
            const e = T();
            await s.StoreObject(e, r);
          } catch (e) {
            const a = new Error(
              `WritePrivateAppsToLocalCache failed with result ${e?.result}, ${e?.message}`,
            );
            (0, x.aj)().ReportError(a, { bIncludeMessageInIdentifier: !0 }),
              console.warn(a);
          }
        }
        const W = ["AccountPrivateApps"];
        function X(s) {
          const {
            transport: r,
            storage: e,
            bUseLocalCache: a,
            bEnabled: u,
          } = s;
          return {
            queryKey: W,
            queryFn: async () => {
              let d;
              a && (d = await $(e));
              const w = S.w.Init(b),
                o = await h.GetPrivateAppList(r, w);
              if (!o.BSuccess()) {
                if (d) return new Set(d);
                throw o.GetErrorMessage();
              }
              return (
                a && (await I(e, o.Body().private_apps(!0).appids())),
                new Set(o.Body().private_apps(!0).appids())
              );
            },
            enabled: u,
          };
        }
        function c() {
          const s = (0, z.KV)(),
            r = (0, z.rX)(),
            e = g();
          return (0, V.I)(
            X({
              transport: s,
              storage: r,
              bUseLocalCache: e,
              bEnabled: !!j.iA.accountid,
            }),
          );
        }
        function Z() {
          const { data: s } = c();
          return s ? s.size > 0 : void 0;
        }
        function H(s) {
          const { data: r } = c();
          return !j.iA.accountid || !s ? !1 : r ? r.has(s) : void 0;
        }
        function k(s, r = !0) {
          const { data: e } = c();
          return s ? (e ? !s.some((a) => e.has(a) != r) : void 0) : !1;
        }
        function R(s) {
          s.invalidateQueries({ queryKey: W });
        }
        function q() {
          const s = useQueryClient(),
            r = g(),
            e = useStorage();
          return useMutation({
            mutationFn: async (a) => {
              s.setQueryData(W, () => new Set(a)), r && (await I(e, a));
            },
          });
        }
        function D(s) {
          const r = (0, z.KV)(),
            e = (0, F.jE)(),
            a = g(),
            u = (0, z.rX)();
          return (0, U.n)({
            mutationFn: async (d) => E(r, [s], d),
            onSuccess: (d, w) => K(e, [s], w, a ? u : null),
          });
        }
        function J() {
          const s = (0, z.KV)(),
            r = (0, F.jE)(),
            e = g(),
            a = (0, z.rX)();
          return (0, U.n)({
            mutationFn: async (u) => {
              const { rgAppIDs: d, bPrivate: w } = u;
              return E(s, d, w);
            },
            onSuccess: (u, d) => {
              const { rgAppIDs: w, bPrivate: o } = d;
              K(r, w, o, e ? a : null);
            },
          });
        }
        async function E(s, r, e) {
          const a = S.w.Init(i);
          a.Body().set_appids(r.slice()), a.Body().set_private(e);
          const u = await h.ToggleAppPrivacy(s, a);
          if (!u.BSuccess()) throw u.GetErrorMessage();
        }
        function K(s, r, e, a) {
          s.setQueryData(W, (u) => {
            if (!u) return;
            const d = new Set(u);
            return (
              r.forEach((w) => {
                e ? d.add(w) : d.delete(w);
              }),
              a && I(a, Array.from(d.values())),
              d
            );
          });
        }
      },
    },
  ]);
})();
