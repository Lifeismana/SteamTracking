/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [58024],
    {
      55483: (yt, rt, y) => {
        y.d(rt, {
          yT: () => Xe,
          MR: () => z,
          AB: () => j,
          Rc: () => _,
          Gt: () => $e,
          ko: () => S,
          fy: () => g,
          ec: () => Ye,
          aA: () => E,
          TB: () => x,
          W$: () => dt,
        });
        var f = y(99412),
          c = y(76559),
          r = y(29385),
          l = y(88942),
          o = y(72604),
          m = y(72609);
        async function Je(i) {
          const u = `${m.TS.COMMUNITY_BASE_URL}ogg/${i}/ajaxgetvanityandclanid/?origin=${location.origin}`;
          return T(u);
        }
        async function w(i) {
          const u = c.b.InitFromClanID(i),
            n = `${m.TS.COMMUNITY_BASE_URL}gid/${u.ConvertTo64BitString()}/ajaxgetvanityandclanid/?origin=${location.origin}`;
          return T(n);
        }
        async function Qe(i) {
          const u = `${m.TS.COMMUNITY_BASE_URL}groups/${i}/ajaxgetvanityandclanid/?origin=${location.origin}`;
          return T(u);
        }
        async function F(i) {
          const u = `${m.TS.COMMUNITY_BASE_URL}games/${i}/ajaxgetvanityandclanid/?origin=${location.origin}`;
          return T(u);
        }
        async function T(i) {
          const u = await fetch(i, { method: "GET" });
          if (u.status == 404) return null;
          if (!u.ok) throw new Error(`Server returned ${u.status}`);
          const n = await u.json();
          return n.success != o.R ? null : n;
        }
        function h(i) {
          return ["clantoclaninfo", i];
        }
        function D(i) {
          return ["apptoclanid", i];
        }
        function U(i, u = "group") {
          return [
            "vanitytoclanid",
            u,
            i == null ? void 0 : i.toLocaleLowerCase(),
          ];
        }
        function Xe(i) {
          const u = i == null ? void 0 : i[0];
          return (
            u == "clantoclaninfo" || u == "apptoclanid" || u == "vanitytoclanid"
          );
        }
        const A = new WeakSet();
        function d(i) {
          if (!A.has(i)) {
            A.add(i);
            for (const u of [
              ["clantoclaninfo"],
              ["apptoclanid"],
              ["vanitytoclanid"],
            ])
              i.setQueryDefaults(u, {
                staleTime: 1 / 0,
                gcTime: 1 / 0,
                retry: !1,
              });
          }
        }
        const b = new WeakMap();
        function P(i) {
          if (!i) return null;
          let u = b.get(i);
          return (
            u ||
              ((u = {
                ...i,
                clanSteamID: i.clanSteamIDString
                  ? new c.b(i.clanSteamIDString)
                  : c.b.InitFromClanID(i.clanAccountID),
              }),
              b.set(i, u)),
            u
          );
        }
        function it(i) {
          const { msg: u, success: n, ...p } = i;
          return {
            ...p,
            rss_language: i.rss_language ? i.rss_language : f.Bhc,
          };
        }
        function O(i, u) {
          if (!u) return null;
          d(i);
          const n = it(u);
          return (
            i.setQueryData(h(n.clanAccountID), n),
            n.appid && i.setQueryData(D(n.appid), n.clanAccountID),
            n.vanity_url &&
              i.setQueryData(U(n.vanity_url, "group"), n.clanAccountID),
            n
          );
        }
        function E(i, u) {
          for (const n of u) O(i, n);
        }
        function x(i) {
          const u = (0, r.jE)();
          return (0, l.I)(Ye(i, u));
        }
        function Ye(i, u) {
          return (
            d(u),
            {
              queryKey: h(i != null ? i : null),
              queryFn: async () => (i ? O(u, await w(i)) : null),
              enabled: i !== void 0,
              select: P,
            }
          );
        }
        function Ze(i, u) {
          return (
            d(u),
            {
              queryKey: D(i),
              queryFn: async () => {
                var n, p;
                return (p =
                  (n = O(u, await Je(i))) == null ? void 0 : n.clanAccountID) !=
                  null
                  ? p
                  : null;
              },
              enabled: !!i,
            }
          );
        }
        function ct(i, u, n = "group") {
          return (
            d(u),
            {
              queryKey: U(i, n),
              queryFn: async () => {
                var p, W;
                if (n == "store") {
                  const tt = u.getQueryData(U(i, "group"));
                  if (tt) return tt;
                }
                const at = n == "store" ? await F(i) : await Qe(i);
                return (W =
                  (p = O(u, at)) == null ? void 0 : p.clanAccountID) != null
                  ? W
                  : null;
              },
              enabled: !!i,
            }
          );
        }
        function et(i) {
          var u;
          return i.isPending ? void 0 : (u = i.data) != null ? u : null;
        }
        function pt(i) {
          return x(i.BIsClanAccount() ? i.GetAccountID() : void 0);
        }
        function nt(i) {
          const u = useQueryClient(),
            n = useQuery(Ze(i, u));
          return x(i ? et(n) : void 0);
        }
        function dt(i, u = "group") {
          const n = (0, r.jE)(),
            p = (0, l.I)(ct(i, n, u));
          return x(i ? et(p) : void 0);
        }
        function $e(i, u) {
          var n;
          if (i) return (n = P(u.getQueryData(h(i)))) != null ? n : void 0;
        }
        function S(i, u) {
          if (i) return $e(u.getQueryData(D(i)), u);
        }
        function g(i, u, n) {
          if (!i) return;
          const p = n ? [n] : ["store", "group"];
          for (const W of p) {
            const at = $e(u.getQueryData(U(i, W)), u);
            if (at) return at;
          }
        }
        async function z(i, u) {
          return i ? P(await u.fetchQuery(Ye(i, u))) : null;
        }
        async function j(i, u) {
          return i ? z(await u.fetchQuery(Ze(i, u)), u) : null;
        }
        async function _(i, u, n = "group") {
          return i ? z(await u.fetchQuery(ct(i, u, n)), u) : null;
        }
      },
      16369: (yt, rt, y) => {
        y.d(rt, { H: () => r });
        var f = y(99412),
          c = y(72609);
        const r = () => (c.TS.EUNIVERSE === f.Rv ? 2581 : 45267781);
      },
      18025: (yt, rt, y) => {
        y.d(rt, { $z: () => Qe, HX: () => Xe, Hi: () => D });
        var f = y(80613),
          c = y.n(f),
          r = y(75245),
          l = Object.defineProperty,
          o = (A, d, b) =>
            d in A
              ? l(A, d, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: b,
                })
              : (A[d] = b),
          m = (A, d, b) => o(A, typeof d != "symbol" ? d + "" : d, b);
        function Je(A) {
          return "unknown ELineItemPurchaseNotice ( " + A + " )";
        }
        const w = class K extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(d = null) {
            super(),
              K.prototype.accountid_giftee || r.Sg(K.M()),
              f.Message.initialize(this, d, 0, -1, void 0, null);
          }
          static M() {
            return (
              K.sm_m ||
                (K.sm_m = {
                  proto: K,
                  fields: {
                    accountid_giftee: {
                      n: 1,
                      br: r.qM.readInt32,
                      bw: r.gp.writeInt32,
                    },
                    gift_message: { n: 2, c: T },
                    time_scheduled_send: {
                      n: 3,
                      br: r.qM.readInt32,
                      bw: r.gp.writeInt32,
                    },
                    email_giftee: {
                      n: 4,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                  },
                }),
              K.sm_m
            );
          }
          static MBF() {
            return K.sm_mbf || (K.sm_mbf = r.w0(K.M())), K.sm_mbf;
          }
          toObject(d = !1) {
            return K.toObject(d, this);
          }
          static toObject(d, b) {
            return r.BT(K.M(), d, b);
          }
          static fromObject(d) {
            return r.Uq(K.M(), d);
          }
          static deserializeBinary(d) {
            let b = new (c().BinaryReader)(d),
              P = new K();
            return K.deserializeBinaryFromReader(P, b);
          }
          static deserializeBinaryFromReader(d, b) {
            return r.zj(K.MBF(), d, b);
          }
          serializeBinary() {
            var d = new (c().BinaryWriter)();
            return K.serializeBinaryToWriter(this, d), d.getResultBuffer();
          }
          static serializeBinaryToWriter(d, b) {
            r.i0(K.M(), d, b);
          }
          serializeBase64String() {
            var d = new (c().BinaryWriter)();
            return (
              K.serializeBinaryToWriter(this, d), d.getResultBase64String()
            );
          }
          getClassName() {
            return "CartGiftInfo";
          }
        };
        m(w, "sm_m"), m(w, "sm_mbf");
        let Qe = w;
        const F = class V extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(d = null) {
            super(),
              V.prototype.gifteename || r.Sg(V.M()),
              f.Message.initialize(this, d, 0, -1, void 0, null);
          }
          static M() {
            return (
              V.sm_m ||
                (V.sm_m = {
                  proto: V,
                  fields: {
                    gifteename: {
                      n: 1,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    message: {
                      n: 2,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    sentiment: {
                      n: 3,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    signature: {
                      n: 4,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                  },
                }),
              V.sm_m
            );
          }
          static MBF() {
            return V.sm_mbf || (V.sm_mbf = r.w0(V.M())), V.sm_mbf;
          }
          toObject(d = !1) {
            return V.toObject(d, this);
          }
          static toObject(d, b) {
            return r.BT(V.M(), d, b);
          }
          static fromObject(d) {
            return r.Uq(V.M(), d);
          }
          static deserializeBinary(d) {
            let b = new (c().BinaryReader)(d),
              P = new V();
            return V.deserializeBinaryFromReader(P, b);
          }
          static deserializeBinaryFromReader(d, b) {
            return r.zj(V.MBF(), d, b);
          }
          serializeBinary() {
            var d = new (c().BinaryWriter)();
            return V.serializeBinaryToWriter(this, d), d.getResultBuffer();
          }
          static serializeBinaryToWriter(d, b) {
            r.i0(V.M(), d, b);
          }
          serializeBase64String() {
            var d = new (c().BinaryWriter)();
            return (
              V.serializeBinaryToWriter(this, d), d.getResultBase64String()
            );
          }
          getClassName() {
            return "CartGiftMessage";
          }
        };
        m(F, "sm_m"), m(F, "sm_mbf");
        let T = F;
        const h = class k extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(d = null) {
            super(),
              k.prototype.amount_in_cents || r.Sg(k.M()),
              f.Message.initialize(this, d, 0, -1, void 0, null);
          }
          static M() {
            return (
              k.sm_m ||
                (k.sm_m = {
                  proto: k,
                  fields: {
                    amount_in_cents: {
                      n: 1,
                      br: r.qM.readInt64String,
                      bw: r.gp.writeInt64String,
                    },
                    currency_code: {
                      n: 2,
                      br: r.qM.readInt32,
                      bw: r.gp.writeInt32,
                    },
                    formatted_amount: {
                      n: 3,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                  },
                }),
              k.sm_m
            );
          }
          static MBF() {
            return k.sm_mbf || (k.sm_mbf = r.w0(k.M())), k.sm_mbf;
          }
          toObject(d = !1) {
            return k.toObject(d, this);
          }
          static toObject(d, b) {
            return r.BT(k.M(), d, b);
          }
          static fromObject(d) {
            return r.Uq(k.M(), d);
          }
          static deserializeBinary(d) {
            let b = new (c().BinaryReader)(d),
              P = new k();
            return k.deserializeBinaryFromReader(P, b);
          }
          static deserializeBinaryFromReader(d, b) {
            return r.zj(k.MBF(), d, b);
          }
          serializeBinary() {
            var d = new (c().BinaryWriter)();
            return k.serializeBinaryToWriter(this, d), d.getResultBuffer();
          }
          static serializeBinaryToWriter(d, b) {
            r.i0(k.M(), d, b);
          }
          serializeBase64String() {
            var d = new (c().BinaryWriter)();
            return (
              k.serializeBinaryToWriter(this, d), d.getResultBase64String()
            );
          }
          getClassName() {
            return "CartAmount";
          }
        };
        m(h, "sm_m"), m(h, "sm_mbf");
        let D = h;
        const U = class Q extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(d = null) {
            super(),
              Q.prototype.couponid || r.Sg(Q.M()),
              f.Message.initialize(this, d, 0, -1, void 0, null);
          }
          static M() {
            return (
              Q.sm_m ||
                (Q.sm_m = {
                  proto: Q,
                  fields: {
                    couponid: {
                      n: 1,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    gidcoupon: {
                      n: 2,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    title: { n: 5, br: r.qM.readString, bw: r.gp.writeString },
                    coupon_description: {
                      n: 6,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    large_icon_url: {
                      n: 7,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    discount_pct: {
                      n: 8,
                      br: r.qM.readInt32,
                      bw: r.gp.writeInt32,
                    },
                  },
                }),
              Q.sm_m
            );
          }
          static MBF() {
            return Q.sm_mbf || (Q.sm_mbf = r.w0(Q.M())), Q.sm_mbf;
          }
          toObject(d = !1) {
            return Q.toObject(d, this);
          }
          static toObject(d, b) {
            return r.BT(Q.M(), d, b);
          }
          static fromObject(d) {
            return r.Uq(Q.M(), d);
          }
          static deserializeBinary(d) {
            let b = new (c().BinaryReader)(d),
              P = new Q();
            return Q.deserializeBinaryFromReader(P, b);
          }
          static deserializeBinaryFromReader(d, b) {
            return r.zj(Q.MBF(), d, b);
          }
          serializeBinary() {
            var d = new (c().BinaryWriter)();
            return Q.serializeBinaryToWriter(this, d), d.getResultBuffer();
          }
          static serializeBinaryToWriter(d, b) {
            r.i0(Q.M(), d, b);
          }
          serializeBase64String() {
            var d = new (c().BinaryWriter)();
            return (
              Q.serializeBinaryToWriter(this, d), d.getResultBase64String()
            );
          }
          getClassName() {
            return "CartCoupon";
          }
        };
        m(U, "sm_m"), m(U, "sm_mbf");
        let Xe = U;
      },
      33512: (yt, rt, y) => {
        y.d(rt, { Wv: () => f });
        var f = {};
        y.r(f),
          y.d(f, {
            bM: () => w,
            Nq: () => T,
            xc: () => U,
            GH: () => F,
            Jb: () => Qe,
            Jn: () => h,
            Mv: () => D,
            yl: () => Xe,
            _x: () => Je,
          });
        var c = y(80613),
          r = y.n(c),
          l = y(75245),
          o = y(35038);
        const m = 0,
          Je = 1,
          w = 2,
          Qe = 4,
          F = 8,
          T = 16,
          h = 32,
          D = 64,
          U = 128,
          Xe = 256;
        var A = Object.defineProperty,
          d = (u, n, p) =>
            n in u
              ? A(u, n, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: p,
                })
              : (u[n] = p),
          b = (u, n, p) => d(u, typeof n != "symbol" ? n + "" : n, p);
        function P(u) {
          return "unknown EClanAccountFlags ( " + u + " )";
        }
        const it = class $ extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              $.prototype.steamid || l.Sg($.M()),
              c.Message.initialize(this, n, 0, -1, void 0, null);
          }
          static M() {
            return (
              $.sm_m ||
                ($.sm_m = {
                  proto: $,
                  fields: {
                    steamid: {
                      n: 1,
                      br: l.qM.readFixed64String,
                      bw: l.gp.writeFixed64String,
                    },
                    accept: { n: 2, br: l.qM.readBool, bw: l.gp.writeBool },
                  },
                }),
              $.sm_m
            );
          }
          static MBF() {
            return $.sm_mbf || ($.sm_mbf = l.w0($.M())), $.sm_mbf;
          }
          toObject(n = !1) {
            return $.toObject(n, this);
          }
          static toObject(n, p) {
            return l.BT($.M(), n, p);
          }
          static fromObject(n) {
            return l.Uq($.M(), n);
          }
          static deserializeBinary(n) {
            let p = new (r().BinaryReader)(n),
              W = new $();
            return $.deserializeBinaryFromReader(W, p);
          }
          static deserializeBinaryFromReader(n, p) {
            return l.zj($.MBF(), n, p);
          }
          serializeBinary() {
            var n = new (r().BinaryWriter)();
            return $.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, p) {
            l.i0($.M(), n, p);
          }
          serializeBase64String() {
            var n = new (r().BinaryWriter)();
            return (
              $.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CClan_RespondToClanInvite_Request";
          }
        };
        b(it, "sm_m"), b(it, "sm_mbf");
        let O = it;
        class E extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(), c.Message.initialize(this, n, 0, -1, void 0, null);
          }
          toObject(n = !1) {
            return E.toObject(n, this);
          }
          static toObject(n, p) {
            return n ? { $jspbMessageInstance: p } : {};
          }
          static fromObject(n) {
            return new E();
          }
          static deserializeBinary(n) {
            let p = new (r().BinaryReader)(n),
              W = new E();
            return E.deserializeBinaryFromReader(W, p);
          }
          static deserializeBinaryFromReader(n, p) {
            return n;
          }
          serializeBinary() {
            var n = new (r().BinaryWriter)();
            return E.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, p) {}
          serializeBase64String() {
            var n = new (r().BinaryWriter)();
            return (
              E.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CClan_RespondToClanInvite_Response";
          }
        }
        const x = class J extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              J.prototype.steamid || l.Sg(J.M()),
              c.Message.initialize(this, n, 0, -1, void 0, null);
          }
          static M() {
            return (
              J.sm_m ||
                (J.sm_m = {
                  proto: J,
                  fields: {
                    steamid: {
                      n: 1,
                      br: l.qM.readFixed64String,
                      bw: l.gp.writeFixed64String,
                    },
                    rtime_oldest_date: {
                      n: 2,
                      br: l.qM.readUint32,
                      bw: l.gp.writeUint32,
                    },
                  },
                }),
              J.sm_m
            );
          }
          static MBF() {
            return J.sm_mbf || (J.sm_mbf = l.w0(J.M())), J.sm_mbf;
          }
          toObject(n = !1) {
            return J.toObject(n, this);
          }
          static toObject(n, p) {
            return l.BT(J.M(), n, p);
          }
          static fromObject(n) {
            return l.Uq(J.M(), n);
          }
          static deserializeBinary(n) {
            let p = new (r().BinaryReader)(n),
              W = new J();
            return J.deserializeBinaryFromReader(W, p);
          }
          static deserializeBinaryFromReader(n, p) {
            return l.zj(J.MBF(), n, p);
          }
          serializeBinary() {
            var n = new (r().BinaryWriter)();
            return J.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, p) {
            l.i0(J.M(), n, p);
          }
          serializeBase64String() {
            var n = new (r().BinaryWriter)();
            return (
              J.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CClan_GetDraftAndRecentPartnerEventSnippet_Request";
          }
        };
        b(x, "sm_m"), b(x, "sm_mbf");
        let Ye = x;
        const Ze = class Y extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              Y.prototype.snippets || l.Sg(Y.M()),
              c.Message.initialize(this, n, 0, -1, [1], null);
          }
          static M() {
            return (
              Y.sm_m ||
                (Y.sm_m = {
                  proto: Y,
                  fields: { snippets: { n: 1, c: pt, r: !0, q: !0 } },
                }),
              Y.sm_m
            );
          }
          static MBF() {
            return Y.sm_mbf || (Y.sm_mbf = l.w0(Y.M())), Y.sm_mbf;
          }
          toObject(n = !1) {
            return Y.toObject(n, this);
          }
          static toObject(n, p) {
            return l.BT(Y.M(), n, p);
          }
          static fromObject(n) {
            return l.Uq(Y.M(), n);
          }
          static deserializeBinary(n) {
            let p = new (r().BinaryReader)(n),
              W = new Y();
            return Y.deserializeBinaryFromReader(W, p);
          }
          static deserializeBinaryFromReader(n, p) {
            return l.zj(Y.MBF(), n, p);
          }
          serializeBinary() {
            var n = new (r().BinaryWriter)();
            return Y.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, p) {
            l.i0(Y.M(), n, p);
          }
          serializeBase64String() {
            var n = new (r().BinaryWriter)();
            return (
              Y.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CClan_GetDraftAndRecentPartnerEventSnippet_Response";
          }
        };
        b(Ze, "sm_m"), b(Ze, "sm_mbf");
        let ct = Ze;
        const et = class X extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              X.prototype.gid || l.Sg(X.M()),
              c.Message.initialize(this, n, 0, -1, void 0, null);
          }
          static M() {
            return (
              X.sm_m ||
                (X.sm_m = {
                  proto: X,
                  fields: {
                    gid: {
                      n: 1,
                      br: l.qM.readFixed64String,
                      bw: l.gp.writeFixed64String,
                    },
                    announcement_gid: {
                      n: 2,
                      br: l.qM.readFixed64String,
                      bw: l.gp.writeFixed64String,
                    },
                    hidden: { n: 3, br: l.qM.readBool, bw: l.gp.writeBool },
                    published: { n: 4, br: l.qM.readBool, bw: l.gp.writeBool },
                    rtime32_start_time: {
                      n: 5,
                      br: l.qM.readUint32,
                      bw: l.gp.writeUint32,
                    },
                    event_name: {
                      n: 6,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    event_type: { n: 7, br: l.qM.readEnum, bw: l.gp.writeEnum },
                  },
                }),
              X.sm_m
            );
          }
          static MBF() {
            return X.sm_mbf || (X.sm_mbf = l.w0(X.M())), X.sm_mbf;
          }
          toObject(n = !1) {
            return X.toObject(n, this);
          }
          static toObject(n, p) {
            return l.BT(X.M(), n, p);
          }
          static fromObject(n) {
            return l.Uq(X.M(), n);
          }
          static deserializeBinary(n) {
            let p = new (r().BinaryReader)(n),
              W = new X();
            return X.deserializeBinaryFromReader(W, p);
          }
          static deserializeBinaryFromReader(n, p) {
            return l.zj(X.MBF(), n, p);
          }
          serializeBinary() {
            var n = new (r().BinaryWriter)();
            return X.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, p) {
            l.i0(X.M(), n, p);
          }
          serializeBase64String() {
            var n = new (r().BinaryWriter)();
            return (
              X.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CClan_GetDraftAndRecentPartnerEventSnippet_Response_CEventSnippetData";
          }
        };
        b(et, "sm_m"), b(et, "sm_mbf");
        let pt = et;
        const nt = class Z extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              Z.prototype.requests || l.Sg(Z.M()),
              c.Message.initialize(this, n, 0, -1, [1], null);
          }
          static M() {
            return (
              Z.sm_m ||
                (Z.sm_m = {
                  proto: Z,
                  fields: {
                    requests: { n: 1, c: S, r: !0, q: !0 },
                    cursor: { n: 2, br: l.qM.readString, bw: l.gp.writeString },
                    count: {
                      n: 3,
                      d: 100,
                      br: l.qM.readUint32,
                      bw: l.gp.writeUint32,
                    },
                  },
                }),
              Z.sm_m
            );
          }
          static MBF() {
            return Z.sm_mbf || (Z.sm_mbf = l.w0(Z.M())), Z.sm_mbf;
          }
          toObject(n = !1) {
            return Z.toObject(n, this);
          }
          static toObject(n, p) {
            return l.BT(Z.M(), n, p);
          }
          static fromObject(n) {
            return l.Uq(Z.M(), n);
          }
          static deserializeBinary(n) {
            let p = new (r().BinaryReader)(n),
              W = new Z();
            return Z.deserializeBinaryFromReader(W, p);
          }
          static deserializeBinaryFromReader(n, p) {
            return l.zj(Z.MBF(), n, p);
          }
          serializeBinary() {
            var n = new (r().BinaryWriter)();
            return Z.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, p) {
            l.i0(Z.M(), n, p);
          }
          serializeBase64String() {
            var n = new (r().BinaryWriter)();
            return (
              Z.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CClan_GetPartnerEventsByBuildIDRange_Request";
          }
        };
        b(nt, "sm_m"), b(nt, "sm_mbf");
        let dt = nt;
        const $e = class ee extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              ee.prototype.appid || l.Sg(ee.M()),
              c.Message.initialize(this, n, 0, -1, void 0, null);
          }
          static M() {
            return (
              ee.sm_m ||
                (ee.sm_m = {
                  proto: ee,
                  fields: {
                    appid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                    start_build_id: {
                      n: 2,
                      br: l.qM.readUint32,
                      bw: l.gp.writeUint32,
                    },
                    end_build_id: {
                      n: 3,
                      br: l.qM.readUint32,
                      bw: l.gp.writeUint32,
                    },
                    branch: { n: 4, br: l.qM.readString, bw: l.gp.writeString },
                  },
                }),
              ee.sm_m
            );
          }
          static MBF() {
            return ee.sm_mbf || (ee.sm_mbf = l.w0(ee.M())), ee.sm_mbf;
          }
          toObject(n = !1) {
            return ee.toObject(n, this);
          }
          static toObject(n, p) {
            return l.BT(ee.M(), n, p);
          }
          static fromObject(n) {
            return l.Uq(ee.M(), n);
          }
          static deserializeBinary(n) {
            let p = new (r().BinaryReader)(n),
              W = new ee();
            return ee.deserializeBinaryFromReader(W, p);
          }
          static deserializeBinaryFromReader(n, p) {
            return l.zj(ee.MBF(), n, p);
          }
          serializeBinary() {
            var n = new (r().BinaryWriter)();
            return ee.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, p) {
            l.i0(ee.M(), n, p);
          }
          serializeBase64String() {
            var n = new (r().BinaryWriter)();
            return (
              ee.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CClan_GetPartnerEventsByBuildIDRange_Request_PatchNoteRange";
          }
        };
        b($e, "sm_m"), b($e, "sm_mbf");
        let S = $e;
        const g = class te extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              te.prototype.matches || l.Sg(te.M()),
              c.Message.initialize(this, n, 0, -1, [1], null);
          }
          static M() {
            return (
              te.sm_m ||
                (te.sm_m = {
                  proto: te,
                  fields: {
                    matches: { n: 1, c: _, r: !0, q: !0 },
                    num_total_results: {
                      n: 2,
                      br: l.qM.readUint32,
                      bw: l.gp.writeUint32,
                    },
                    next_cursor: {
                      n: 3,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                  },
                }),
              te.sm_m
            );
          }
          static MBF() {
            return te.sm_mbf || (te.sm_mbf = l.w0(te.M())), te.sm_mbf;
          }
          toObject(n = !1) {
            return te.toObject(n, this);
          }
          static toObject(n, p) {
            return l.BT(te.M(), n, p);
          }
          static fromObject(n) {
            return l.Uq(te.M(), n);
          }
          static deserializeBinary(n) {
            let p = new (r().BinaryReader)(n),
              W = new te();
            return te.deserializeBinaryFromReader(W, p);
          }
          static deserializeBinaryFromReader(n, p) {
            return l.zj(te.MBF(), n, p);
          }
          serializeBinary() {
            var n = new (r().BinaryWriter)();
            return te.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, p) {
            l.i0(te.M(), n, p);
          }
          serializeBase64String() {
            var n = new (r().BinaryWriter)();
            return (
              te.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CClan_GetPartnerEventsByBuildIDRange_Response";
          }
        };
        b(g, "sm_m"), b(g, "sm_mbf");
        let z = g;
        const j = class re extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(n = null) {
            super(),
              re.prototype.appid || l.Sg(re.M()),
              c.Message.initialize(this, n, 0, -1, void 0, null);
          }
          static M() {
            return (
              re.sm_m ||
                (re.sm_m = {
                  proto: re,
                  fields: {
                    appid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                    build_id: {
                      n: 2,
                      br: l.qM.readUint32,
                      bw: l.gp.writeUint32,
                    },
                    branch: { n: 3, br: l.qM.readString, bw: l.gp.writeString },
                    clan_event_gid: {
                      n: 4,
                      br: l.qM.readFixed64String,
                      bw: l.gp.writeFixed64String,
                    },
                    clan_account_id: {
                      n: 5,
                      br: l.qM.readUint32,
                      bw: l.gp.writeUint32,
                    },
                  },
                }),
              re.sm_m
            );
          }
          static MBF() {
            return re.sm_mbf || (re.sm_mbf = l.w0(re.M())), re.sm_mbf;
          }
          toObject(n = !1) {
            return re.toObject(n, this);
          }
          static toObject(n, p) {
            return l.BT(re.M(), n, p);
          }
          static fromObject(n) {
            return l.Uq(re.M(), n);
          }
          static deserializeBinary(n) {
            let p = new (r().BinaryReader)(n),
              W = new re();
            return re.deserializeBinaryFromReader(W, p);
          }
          static deserializeBinaryFromReader(n, p) {
            return l.zj(re.MBF(), n, p);
          }
          serializeBinary() {
            var n = new (r().BinaryWriter)();
            return re.serializeBinaryToWriter(this, n), n.getResultBuffer();
          }
          static serializeBinaryToWriter(n, p) {
            l.i0(re.M(), n, p);
          }
          serializeBase64String() {
            var n = new (r().BinaryWriter)();
            return (
              re.serializeBinaryToWriter(this, n), n.getResultBase64String()
            );
          }
          getClassName() {
            return "CClan_GetPartnerEventsByBuildIDRange_Response_PatchNotesDesc";
          }
        };
        b(j, "sm_m"), b(j, "sm_mbf");
        let _ = j;
        var i;
        ((u) => {
          function n(at, tt, ft) {
            return at.SendMsg(
              "Clan.RespondToClanInvite#1",
              (0, o.I8)(O, tt, ft),
              E,
              { ePrivilege: 1 },
            );
          }
          u.RespondToClanInvite = n;
          function p(at, tt, ft) {
            return at.SendMsg(
              "Clan.GetDraftAndRecentPartnerEventSnippet#1",
              (0, o.I8)(Ye, tt, ft),
              ct,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          u.GetDraftAndRecentPartnerEventSnippet = p;
          function W(at, tt, ft) {
            return at.SendMsg(
              "Clan.GetPartnerEventsByBuildIDRange#1",
              (0, o.I8)(dt, tt, ft),
              z,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }
          u.GetPartnerEventsByBuildIDRange = W;
        })(i || (i = {}));
      },
      36053: (yt, rt, y) => {
        var f = y(80613),
          c = y.n(f),
          r = y(75245),
          l = y(35038),
          o = y(18025),
          m = Object.defineProperty,
          Je = (ot, e, a) =>
            e in ot
              ? m(ot, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: a,
                })
              : (ot[e] = a),
          w = (ot, e, a) => Je(ot, typeof e != "symbol" ? e + "" : e, a);
        const Qe = class ie extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ie.prototype.steamid_requester || r.Sg(ie.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              ie.sm_m ||
                (ie.sm_m = {
                  proto: ie,
                  fields: {
                    steamid_requester: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    purchase_request_id: {
                      n: 2,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              ie.sm_m
            );
          }
          static MBF() {
            return ie.sm_mbf || (ie.sm_mbf = r.w0(ie.M())), ie.sm_mbf;
          }
          toObject(e = !1) {
            return ie.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(ie.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(ie.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (c().BinaryReader)(e),
              R = new ie();
            return ie.deserializeBinaryFromReader(R, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(ie.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(ie.M(), e, a);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              ie.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_CreateNew_Request";
          }
        };
        w(Qe, "sm_m"), w(Qe, "sm_mbf");
        let F = Qe;
        const T = class ne extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ne.prototype.gidshoppingcart || r.Sg(ne.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              ne.sm_m ||
                (ne.sm_m = {
                  proto: ne,
                  fields: {
                    gidshoppingcart: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              ne.sm_m
            );
          }
          static MBF() {
            return ne.sm_mbf || (ne.sm_mbf = r.w0(ne.M())), ne.sm_mbf;
          }
          toObject(e = !1) {
            return ne.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(ne.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(ne.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (c().BinaryReader)(e),
              R = new ne();
            return ne.deserializeBinaryFromReader(R, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(ne.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(ne.M(), e, a);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              ne.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_CreateNew_Response";
          }
        };
        w(T, "sm_m"), w(T, "sm_mbf");
        let h = T;
        const D = class ae extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ae.prototype.amount || r.Sg(ae.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              ae.sm_m ||
                (ae.sm_m = {
                  proto: ae,
                  fields: {
                    amount: {
                      n: 1,
                      br: r.qM.readInt64String,
                      bw: r.gp.writeInt64String,
                    },
                    currencycode: {
                      n: 2,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              ae.sm_m
            );
          }
          static MBF() {
            return ae.sm_mbf || (ae.sm_mbf = r.w0(ae.M())), ae.sm_mbf;
          }
          toObject(e = !1) {
            return ae.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(ae.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(ae.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (c().BinaryReader)(e),
              R = new ae();
            return ae.deserializeBinaryFromReader(R, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(ae.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(ae.M(), e, a);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              ae.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_Amount";
          }
        };
        w(D, "sm_m"), w(D, "sm_mbf");
        let U = D;
        const Xe = class se extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              se.prototype.packageid || r.Sg(se.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              se.sm_m ||
                (se.sm_m = {
                  proto: se,
                  fields: {
                    packageid: {
                      n: 1,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    costwhenadded: { n: 2, c: U },
                    is_gift: { n: 3, br: r.qM.readBool, bw: r.gp.writeBool },
                    gidbundle: {
                      n: 4,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    quantity: {
                      n: 5,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    gift_info: { n: 6, c: o.$z },
                  },
                }),
              se.sm_m
            );
          }
          static MBF() {
            return se.sm_mbf || (se.sm_mbf = r.w0(se.M())), se.sm_mbf;
          }
          toObject(e = !1) {
            return se.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(se.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(se.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (c().BinaryReader)(e),
              R = new se();
            return se.deserializeBinaryFromReader(R, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(se.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return se.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(se.M(), e, a);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              se.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_PackageItem";
          }
        };
        w(Xe, "sm_m"), w(Xe, "sm_mbf");
        let A = Xe;
        const d = class oe extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              oe.prototype.walletcredit || r.Sg(oe.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              oe.sm_m ||
                (oe.sm_m = {
                  proto: oe,
                  fields: { walletcredit: { n: 1, c: U } },
                }),
              oe.sm_m
            );
          }
          static MBF() {
            return oe.sm_mbf || (oe.sm_mbf = r.w0(oe.M())), oe.sm_mbf;
          }
          toObject(e = !1) {
            return oe.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(oe.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(oe.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (c().BinaryReader)(e),
              R = new oe();
            return oe.deserializeBinaryFromReader(R, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(oe.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(oe.M(), e, a);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              oe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_WalletCreditItem";
          }
        };
        w(d, "sm_m"), w(d, "sm_mbf");
        let b = d;
        const P = class le extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              le.prototype.couponid || r.Sg(le.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              le.sm_m ||
                (le.sm_m = {
                  proto: le,
                  fields: {
                    couponid: {
                      n: 1,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    gidcoupontarget: {
                      n: 2,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    packageid: {
                      n: 3,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    gidcoupon: {
                      n: 4,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              le.sm_m
            );
          }
          static MBF() {
            return le.sm_mbf || (le.sm_mbf = r.w0(le.M())), le.sm_mbf;
          }
          toObject(e = !1) {
            return le.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(le.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(le.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (c().BinaryReader)(e),
              R = new le();
            return le.deserializeBinaryFromReader(R, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(le.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return le.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(le.M(), e, a);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              le.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_CouponItem";
          }
        };
        w(P, "sm_m"), w(P, "sm_mbf");
        let it = P;
        const O = class ue extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ue.prototype.microtxnappid || r.Sg(ue.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              ue.sm_m ||
                (ue.sm_m = {
                  proto: ue,
                  fields: {
                    microtxnappid: {
                      n: 1,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    microtxnassetclassid: {
                      n: 2,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              ue.sm_m
            );
          }
          static MBF() {
            return ue.sm_mbf || (ue.sm_mbf = r.w0(ue.M())), ue.sm_mbf;
          }
          toObject(e = !1) {
            return ue.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(ue.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(ue.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (c().BinaryReader)(e),
              R = new ue();
            return ue.deserializeBinaryFromReader(R, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(ue.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(ue.M(), e, a);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              ue.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_MicroTxnAsset";
          }
        };
        w(O, "sm_m"), w(O, "sm_mbf");
        let E = O;
        const x = class me extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              me.prototype.bundleid || r.Sg(me.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              me.sm_m ||
                (me.sm_m = {
                  proto: me,
                  fields: {
                    bundleid: {
                      n: 1,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    quantity: {
                      n: 2,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    is_gift: { n: 3, br: r.qM.readBool, bw: r.gp.writeBool },
                    gift_info: { n: 4, c: o.$z },
                  },
                }),
              me.sm_m
            );
          }
          static MBF() {
            return me.sm_mbf || (me.sm_mbf = r.w0(me.M())), me.sm_mbf;
          }
          toObject(e = !1) {
            return me.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(me.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(me.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (c().BinaryReader)(e),
              R = new me();
            return me.deserializeBinaryFromReader(R, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(me.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return me.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(me.M(), e, a);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              me.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_BundleItem";
          }
        };
        w(x, "sm_m"), w(x, "sm_mbf");
        let Ye = x;
        const Ze = class ce extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ce.prototype.reward_id || r.Sg(ce.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              ce.sm_m ||
                (ce.sm_m = {
                  proto: ce,
                  fields: {
                    reward_id: {
                      n: 1,
                      br: r.qM.readInt32,
                      bw: r.gp.writeInt32,
                    },
                  },
                }),
              ce.sm_m
            );
          }
          static MBF() {
            return ce.sm_mbf || (ce.sm_mbf = r.w0(ce.M())), ce.sm_mbf;
          }
          toObject(e = !1) {
            return ce.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(ce.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(ce.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (c().BinaryReader)(e),
              R = new ce();
            return ce.deserializeBinaryFromReader(R, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(ce.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(ce.M(), e, a);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              ce.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_LoyaltyRewardItem";
          }
        };
        w(Ze, "sm_m"), w(Ze, "sm_mbf");
        let ct = Ze;
        const et = class G extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              G.prototype.gidparent || r.Sg(G.M()),
              f.Message.initialize(this, e, 0, -1, [2], null);
          }
          static M() {
            return (
              G.sm_m ||
                (G.sm_m = {
                  proto: G,
                  fields: {
                    gidparent: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    children: { n: 2, c: G, r: !0, q: !0 },
                  },
                }),
              G.sm_m
            );
          }
          static MBF() {
            return G.sm_mbf || (G.sm_mbf = r.w0(G.M())), G.sm_mbf;
          }
          toObject(e = !1) {
            return G.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(G.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(G.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (c().BinaryReader)(e),
              R = new G();
            return G.deserializeBinaryFromReader(R, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(G.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(G.M(), e, a);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              G.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_RelationShip";
          }
        };
        w(et, "sm_m"), w(et, "sm_mbf");
        let pt = et;
        const nt = class de extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              de.prototype.couponid || r.Sg(de.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              de.sm_m ||
                (de.sm_m = {
                  proto: de,
                  fields: {
                    couponid: {
                      n: 1,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    gidcoupon: {
                      n: 2,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    gidlineitem: {
                      n: 3,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              de.sm_m
            );
          }
          static MBF() {
            return de.sm_mbf || (de.sm_mbf = r.w0(de.M())), de.sm_mbf;
          }
          toObject(e = !1) {
            return de.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(de.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(de.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (c().BinaryReader)(e),
              R = new de();
            return de.deserializeBinaryFromReader(R, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(de.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return de.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(de.M(), e, a);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              de.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_AvailableCoupon";
          }
        };
        w(nt, "sm_m"), w(nt, "sm_mbf");
        let dt = nt;
        const $e = class ge extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ge.prototype.gidlineitem || r.Sg(ge.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              ge.sm_m ||
                (ge.sm_m = {
                  proto: ge,
                  fields: {
                    gidlineitem: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    package_item: { n: 2, c: A },
                    wallet_credit_item: { n: 3, c: b },
                    coupon_item: { n: 4, c: it },
                    micro_item: { n: 5, c: E },
                    bundle_item: { n: 7, c: Ye },
                    loyalty_item: { n: 8, c: ct },
                  },
                }),
              ge.sm_m
            );
          }
          static MBF() {
            return ge.sm_mbf || (ge.sm_mbf = r.w0(ge.M())), ge.sm_mbf;
          }
          toObject(e = !1) {
            return ge.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(ge.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(ge.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (c().BinaryReader)(e),
              R = new ge();
            return ge.deserializeBinaryFromReader(R, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(ge.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(ge.M(), e, a);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              ge.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_Item";
          }
        };
        w($e, "sm_m"), w($e, "sm_mbf");
        let S = $e;
        const g = class pe extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              pe.prototype.coupons || r.Sg(pe.M()),
              f.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              pe.sm_m ||
                (pe.sm_m = {
                  proto: pe,
                  fields: { coupons: { n: 1, c: dt, r: !0, q: !0 } },
                }),
              pe.sm_m
            );
          }
          static MBF() {
            return pe.sm_mbf || (pe.sm_mbf = r.w0(pe.M())), pe.sm_mbf;
          }
          toObject(e = !1) {
            return pe.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(pe.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(pe.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (c().BinaryReader)(e),
              R = new pe();
            return pe.deserializeBinaryFromReader(R, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(pe.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(pe.M(), e, a);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              pe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_Potentials";
          }
        };
        w(g, "sm_m"), w(g, "sm_mbf");
        let z = g;
        const j = class fe extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              fe.prototype.gidshoppingcart || r.Sg(fe.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              fe.sm_m ||
                (fe.sm_m = {
                  proto: fe,
                  fields: {
                    gidshoppingcart: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              fe.sm_m
            );
          }
          static MBF() {
            return fe.sm_mbf || (fe.sm_mbf = r.w0(fe.M())), fe.sm_mbf;
          }
          toObject(e = !1) {
            return fe.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(fe.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(fe.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (c().BinaryReader)(e),
              R = new fe();
            return fe.deserializeBinaryFromReader(R, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(fe.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(fe.M(), e, a);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              fe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_GetContents_Request";
          }
        };
        w(j, "sm_m"), w(j, "sm_mbf");
        let _ = j;
        const i = class Be extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Be.prototype.lineitems || r.Sg(Be.M()),
              f.Message.initialize(this, e, 0, -1, [1, 2], null);
          }
          static M() {
            return (
              Be.sm_m ||
                (Be.sm_m = {
                  proto: Be,
                  fields: {
                    lineitems: { n: 1, c: S, r: !0, q: !0 },
                    treeview: { n: 2, c: pt, r: !0, q: !0 },
                    potentials: { n: 3, c: z },
                  },
                }),
              Be.sm_m
            );
          }
          static MBF() {
            return Be.sm_mbf || (Be.sm_mbf = r.w0(Be.M())), Be.sm_mbf;
          }
          toObject(e = !1) {
            return Be.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(Be.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(Be.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (c().BinaryReader)(e),
              R = new Be();
            return Be.deserializeBinaryFromReader(R, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(Be.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return Be.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(Be.M(), e, a);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              Be.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_Contents";
          }
        };
        w(i, "sm_m"), w(i, "sm_mbf");
        let u = i;
        const n = class be extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              be.prototype.gidshoppingcart || r.Sg(be.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              be.sm_m ||
                (be.sm_m = {
                  proto: be,
                  fields: {
                    gidshoppingcart: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    contents: { n: 2, c: u },
                    time_created: {
                      n: 3,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    merged_into_account_cart: {
                      n: 4,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    steamid_requester: {
                      n: 5,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    purchase_request_id: {
                      n: 6,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              be.sm_m
            );
          }
          static MBF() {
            return be.sm_mbf || (be.sm_mbf = r.w0(be.M())), be.sm_mbf;
          }
          toObject(e = !1) {
            return be.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(be.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(be.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (c().BinaryReader)(e),
              R = new be();
            return be.deserializeBinaryFromReader(R, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(be.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return be.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(be.M(), e, a);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              be.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_GetContents_Response";
          }
        };
        w(n, "sm_m"), w(n, "sm_mbf");
        let p = n;
        const W = class ye extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ye.prototype.gidshoppingcart || r.Sg(ye.M()),
              f.Message.initialize(this, e, 0, -1, [4], null);
          }
          static M() {
            return (
              ye.sm_m ||
                (ye.sm_m = {
                  proto: ye,
                  fields: {
                    gidshoppingcart: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    browserid: {
                      n: 2,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    cart_items: { n: 4, c: A, r: !0, q: !0 },
                    store_country_code: {
                      n: 5,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    beta_mode: {
                      n: 6,
                      d: !1,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                  },
                }),
              ye.sm_m
            );
          }
          static MBF() {
            return ye.sm_mbf || (ye.sm_mbf = r.w0(ye.M())), ye.sm_mbf;
          }
          toObject(e = !1) {
            return ye.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(ye.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(ye.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (c().BinaryReader)(e),
              R = new ye();
            return ye.deserializeBinaryFromReader(R, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(ye.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(ye.M(), e, a);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              ye.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_AddPackages_Request";
          }
        };
        w(W, "sm_m"), w(W, "sm_mbf");
        let at = W;
        const tt = class Me extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Me.prototype.gidshoppingcart || r.Sg(Me.M()),
              f.Message.initialize(this, e, 0, -1, [3], null);
          }
          static M() {
            return (
              Me.sm_m ||
                (Me.sm_m = {
                  proto: Me,
                  fields: {
                    gidshoppingcart: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    contents: { n: 2, c: u },
                    result_details: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: r.qM.readUint32,
                      pbr: r.qM.readPackedUint32,
                      bw: r.gp.writeRepeatedUint32,
                    },
                  },
                }),
              Me.sm_m
            );
          }
          static MBF() {
            return Me.sm_mbf || (Me.sm_mbf = r.w0(Me.M())), Me.sm_mbf;
          }
          toObject(e = !1) {
            return Me.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(Me.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(Me.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (c().BinaryReader)(e),
              R = new Me();
            return Me.deserializeBinaryFromReader(R, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(Me.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return Me.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(Me.M(), e, a);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              Me.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_AddPackages_Response";
          }
        };
        w(tt, "sm_m"), w(tt, "sm_mbf");
        let ft = tt;
        const St = class Ce extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ce.prototype.gidshoppingcart || r.Sg(Ce.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Ce.sm_m ||
                (Ce.sm_m = {
                  proto: Ce,
                  fields: {
                    gidshoppingcart: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    gidlineitem: {
                      n: 2,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    quantity: {
                      n: 3,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              Ce.sm_m
            );
          }
          static MBF() {
            return Ce.sm_mbf || (Ce.sm_mbf = r.w0(Ce.M())), Ce.sm_mbf;
          }
          toObject(e = !1) {
            return Ce.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(Ce.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(Ce.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (c().BinaryReader)(e),
              R = new Ce();
            return Ce.deserializeBinaryFromReader(R, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(Ce.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return Ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(Ce.M(), e, a);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              Ce.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_UpdatePackageQuantity_Request";
          }
        };
        w(St, "sm_m"), w(St, "sm_mbf");
        let wt = St;
        const gt = class we extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              we.prototype.gidshoppingcart || r.Sg(we.M()),
              f.Message.initialize(this, e, 0, -1, [3], null);
          }
          static M() {
            return (
              we.sm_m ||
                (we.sm_m = {
                  proto: we,
                  fields: {
                    gidshoppingcart: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    contents: { n: 2, c: u },
                    result_details: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: r.qM.readUint32,
                      pbr: r.qM.readPackedUint32,
                      bw: r.gp.writeRepeatedUint32,
                    },
                  },
                }),
              we.sm_m
            );
          }
          static MBF() {
            return we.sm_mbf || (we.sm_mbf = r.w0(we.M())), we.sm_mbf;
          }
          toObject(e = !1) {
            return we.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(we.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(we.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (c().BinaryReader)(e),
              R = new we();
            return we.deserializeBinaryFromReader(R, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(we.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return we.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(we.M(), e, a);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              we.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_UpdatePackageQuantity_Response";
          }
        };
        w(gt, "sm_m"), w(gt, "sm_mbf");
        let q = gt;
        const L = class Se extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Se.prototype.gidshoppingcart || r.Sg(Se.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Se.sm_m ||
                (Se.sm_m = {
                  proto: Se,
                  fields: {
                    gidshoppingcart: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    bundleid: {
                      n: 2,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    browserid: {
                      n: 3,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    store_country: {
                      n: 5,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    quantity: {
                      n: 6,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    beta_mode: {
                      n: 7,
                      d: !1,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    gift_info: { n: 8, c: o.$z },
                  },
                }),
              Se.sm_m
            );
          }
          static MBF() {
            return Se.sm_mbf || (Se.sm_mbf = r.w0(Se.M())), Se.sm_mbf;
          }
          toObject(e = !1) {
            return Se.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(Se.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(Se.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (c().BinaryReader)(e),
              R = new Se();
            return Se.deserializeBinaryFromReader(R, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(Se.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return Se.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(Se.M(), e, a);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              Se.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_AddBundle_Request";
          }
        };
        w(L, "sm_m"), w(L, "sm_mbf");
        let It = L;
        const ht = class he extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              he.prototype.contents || r.Sg(he.M()),
              f.Message.initialize(this, e, 0, -1, [2], null);
          }
          static M() {
            return (
              he.sm_m ||
                (he.sm_m = {
                  proto: he,
                  fields: {
                    contents: { n: 1, c: u },
                    result_details: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: r.qM.readUint32,
                      pbr: r.qM.readPackedUint32,
                      bw: r.gp.writeRepeatedUint32,
                    },
                  },
                }),
              he.sm_m
            );
          }
          static MBF() {
            return he.sm_mbf || (he.sm_mbf = r.w0(he.M())), he.sm_mbf;
          }
          toObject(e = !1) {
            return he.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(he.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(he.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (c().BinaryReader)(e),
              R = new he();
            return he.deserializeBinaryFromReader(R, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(he.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return he.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(he.M(), e, a);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              he.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_AddBundle_Response";
          }
        };
        w(ht, "sm_m"), w(ht, "sm_mbf");
        let Ot = ht;
        const Ct = class Re extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Re.prototype.gidshoppingcart || r.Sg(Re.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Re.sm_m ||
                (Re.sm_m = {
                  proto: Re,
                  fields: {
                    gidshoppingcart: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    gidlineitem: {
                      n: 2,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    gift_info: { n: 3, c: o.$z },
                  },
                }),
              Re.sm_m
            );
          }
          static MBF() {
            return Re.sm_mbf || (Re.sm_mbf = r.w0(Re.M())), Re.sm_mbf;
          }
          toObject(e = !1) {
            return Re.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(Re.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(Re.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (c().BinaryReader)(e),
              R = new Re();
            return Re.deserializeBinaryFromReader(R, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(Re.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return Re.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(Re.M(), e, a);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              Re.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_ModifyLineItem_Request";
          }
        };
        w(Ct, "sm_m"), w(Ct, "sm_mbf");
        let st = Ct;
        const bt = class ze extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ze.prototype.contents || r.Sg(ze.M()),
              f.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              ze.sm_m ||
                (ze.sm_m = { proto: ze, fields: { contents: { n: 1, c: u } } }),
              ze.sm_m
            );
          }
          static MBF() {
            return ze.sm_mbf || (ze.sm_mbf = r.w0(ze.M())), ze.sm_mbf;
          }
          toObject(e = !1) {
            return ze.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(ze.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(ze.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (c().BinaryReader)(e),
              R = new ze();
            return ze.deserializeBinaryFromReader(R, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(ze.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(ze.M(), e, a);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              ze.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_ModifyLineItem_Response";
          }
        };
        w(bt, "sm_m"), w(bt, "sm_mbf");
        let jt = bt;
        const Rt = class ve extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ve.prototype.gidshoppingcart || r.Sg(ve.M()),
              f.Message.initialize(this, e, 0, -1, [2], null);
          }
          static M() {
            return (
              ve.sm_m ||
                (ve.sm_m = {
                  proto: ve,
                  fields: {
                    gidshoppingcart: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    gidlineitems: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: r.qM.readUint64String,
                      pbr: r.qM.readPackedUint64String,
                      bw: r.gp.writeRepeatedUint64String,
                    },
                    browserid: {
                      n: 3,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              ve.sm_m
            );
          }
          static MBF() {
            return ve.sm_mbf || (ve.sm_mbf = r.w0(ve.M())), ve.sm_mbf;
          }
          toObject(e = !1) {
            return ve.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(ve.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(ve.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (c().BinaryReader)(e),
              R = new ve();
            return ve.deserializeBinaryFromReader(R, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(ve.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(ve.M(), e, a);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              ve.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_RemoveLineItems_Request";
          }
        };
        w(Rt, "sm_m"), w(Rt, "sm_mbf");
        let Mt = Rt;
        const zt = class Ie extends f.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ie.prototype.contents || r.Sg(Ie.M()),
              f.Message.initialize(this, e, 0, -1, [2], null);
          }
          static M() {
            return (
              Ie.sm_m ||
                (Ie.sm_m = {
                  proto: Ie,
                  fields: {
                    contents: { n: 1, c: u },
                    result_details: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: r.qM.readUint32,
                      pbr: r.qM.readPackedUint32,
                      bw: r.gp.writeRepeatedUint32,
                    },
                  },
                }),
              Ie.sm_m
            );
          }
          static MBF() {
            return Ie.sm_mbf || (Ie.sm_mbf = r.w0(Ie.M())), Ie.sm_mbf;
          }
          toObject(e = !1) {
            return Ie.toObject(e, this);
          }
          static toObject(e, a) {
            return r.BT(Ie.M(), e, a);
          }
          static fromObject(e) {
            return r.Uq(Ie.M(), e);
          }
          static deserializeBinary(e) {
            let a = new (c().BinaryReader)(e),
              R = new Ie();
            return Ie.deserializeBinaryFromReader(R, a);
          }
          static deserializeBinaryFromReader(e, a) {
            return r.zj(Ie.MBF(), e, a);
          }
          serializeBinary() {
            var e = new (c().BinaryWriter)();
            return Ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, a) {
            r.i0(Ie.M(), e, a);
          }
          serializeBase64String() {
            var e = new (c().BinaryWriter)();
            return (
              Ie.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_RemoveLineItems_Response";
          }
        };
        w(zt, "sm_m"), w(zt, "sm_mbf");
        let Tt = zt;
        var Wt;
        ((ot) => {
          function e(lt, ut, mt) {
            return lt.SendMsg(
              "ShoppingCart.CreateNewShoppingCart#1",
              (0, l.I8)(F, ut, mt),
              h,
              { ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }
          ot.CreateNewShoppingCart = e;
          function a(lt, ut, mt) {
            return lt.SendMsg(
              "ShoppingCart.GetShoppingCartContents#1",
              (0, l.I8)(_, ut, mt),
              p,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }
          ot.GetShoppingCartContents = a;
          function R(lt, ut, mt) {
            return lt.SendMsg(
              "ShoppingCart.AddPackages#1",
              (0, l.I8)(at, ut, mt),
              ft,
              { ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }
          ot.AddPackages = R;
          function Ut(lt, ut, mt) {
            return lt.SendMsg(
              "ShoppingCart.UpdatePackageQuantity#1",
              (0, l.I8)(wt, ut, mt),
              q,
              { ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }
          ot.UpdatePackageQuantity = Ut;
          function Bt(lt, ut, mt) {
            return lt.SendMsg(
              "ShoppingCart.AddBundle#1",
              (0, l.I8)(It, ut, mt),
              Ot,
              { ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }
          ot.AddBundle = Bt;
          function At(lt, ut, mt) {
            return lt.SendMsg(
              "ShoppingCart.ModifyLineItem#1",
              (0, l.I8)(st, ut, mt),
              jt,
              { ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }
          ot.ModifyLineItem = At;
          function vt(lt, ut, mt) {
            return lt.SendMsg(
              "ShoppingCart.RemoveLineItems#1",
              (0, l.I8)(Mt, ut, mt),
              Tt,
              { ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }
          ot.RemoveLineItems = vt;
        })(Wt || (Wt = {}));
      },
      60001: (yt, rt, y) => {
        y.d(rt, {
          dU: () => S,
          eh: () => pt,
          eb: () => c,
          tV: () => f,
          K_: () => j,
        });
        var f = {};
        y.r(f), y.d(f, { $D: () => w });
        var c = {};
        y.r(c), y.d(c, { N0: () => h });
        var r = y(80613),
          l = y.n(r),
          o = y(75245),
          m = y(35038),
          Je = y(40164);
        const w = 0,
          Qe = 1,
          F = 2,
          T = 3,
          h = 0,
          D = 1,
          U = 2;
        var Xe = Object.defineProperty,
          A = (_, i, u) =>
            i in _
              ? Xe(_, i, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: u,
                })
              : (_[i] = u),
          d = (_, i, u) => A(_, typeof i != "symbol" ? i + "" : i, u);
        function b(_) {
          return "unknown EStoreCuratorRecommendationState ( " + _ + " )";
        }
        function P(_) {
          return "unknown EStoreCuratorListType ( " + _ + " )";
        }
        function it(_) {
          return "unknown EStoreCuratorListState ( " + _ + " )";
        }
        const O = class Te extends r.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Te.prototype.appid || o.Sg(Te.M()),
              r.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static M() {
            return (
              Te.sm_m ||
                (Te.sm_m = {
                  proto: Te,
                  fields: {
                    appid: { n: 1, br: o.qM.readUint32, bw: o.gp.writeUint32 },
                    clanid: { n: 2, br: o.qM.readUint32, bw: o.gp.writeUint32 },
                    link_url: {
                      n: 3,
                      br: o.qM.readString,
                      bw: o.gp.writeString,
                    },
                    link_text: {
                      n: 4,
                      br: o.qM.readString,
                      bw: o.gp.writeString,
                    },
                    blurb: { n: 5, br: o.qM.readString, bw: o.gp.writeString },
                    time_recommended: {
                      n: 6,
                      br: o.qM.readUint32,
                      bw: o.gp.writeUint32,
                    },
                    comment_count: {
                      n: 7,
                      br: o.qM.readInt32,
                      bw: o.gp.writeInt32,
                    },
                    upvote_count: {
                      n: 8,
                      br: o.qM.readInt32,
                      bw: o.gp.writeInt32,
                    },
                    accountid_creator: {
                      n: 9,
                      br: o.qM.readUint32,
                      bw: o.gp.writeUint32,
                    },
                    recommendation_state: {
                      n: 10,
                      br: o.qM.readEnum,
                      bw: o.gp.writeEnum,
                    },
                    received_compensation: {
                      n: 11,
                      br: o.qM.readBool,
                      bw: o.gp.writeBool,
                    },
                    received_for_free: {
                      n: 12,
                      br: o.qM.readBool,
                      bw: o.gp.writeBool,
                    },
                  },
                }),
              Te.sm_m
            );
          }
          static MBF() {
            return Te.sm_mbf || (Te.sm_mbf = o.w0(Te.M())), Te.sm_mbf;
          }
          toObject(i = !1) {
            return Te.toObject(i, this);
          }
          static toObject(i, u) {
            return o.BT(Te.M(), i, u);
          }
          static fromObject(i) {
            return o.Uq(Te.M(), i);
          }
          static deserializeBinary(i) {
            let u = new (l().BinaryReader)(i),
              n = new Te();
            return Te.deserializeBinaryFromReader(n, u);
          }
          static deserializeBinaryFromReader(i, u) {
            return o.zj(Te.MBF(), i, u);
          }
          serializeBinary() {
            var i = new (l().BinaryWriter)();
            return Te.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, u) {
            o.i0(Te.M(), i, u);
          }
          serializeBase64String() {
            var i = new (l().BinaryWriter)();
            return (
              Te.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCuration_RecommendedApp";
          }
        };
        d(O, "sm_m"), d(O, "sm_mbf");
        let E = O;
        const x = class We extends r.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              We.prototype.listid || o.Sg(We.M()),
              r.Message.initialize(this, i, 0, -1, [10, 12, 13, 14], null);
          }
          static M() {
            return (
              We.sm_m ||
                (We.sm_m = {
                  proto: We,
                  fields: {
                    listid: {
                      n: 1,
                      br: o.qM.readUint64String,
                      bw: o.gp.writeUint64String,
                    },
                    title: { n: 2, br: o.qM.readString, bw: o.gp.writeString },
                    blurb: { n: 3, br: o.qM.readString, bw: o.gp.writeString },
                    link: { n: 4, br: o.qM.readString, bw: o.gp.writeString },
                    list_state: { n: 5, br: o.qM.readEnum, bw: o.gp.writeEnum },
                    sort_order: {
                      n: 6,
                      br: o.qM.readUint32,
                      bw: o.gp.writeUint32,
                    },
                    time_created: {
                      n: 7,
                      br: o.qM.readUint32,
                      bw: o.gp.writeUint32,
                    },
                    time_updated: {
                      n: 8,
                      br: o.qM.readUint32,
                      bw: o.gp.writeUint32,
                    },
                    accountid: {
                      n: 9,
                      br: o.qM.readUint32,
                      bw: o.gp.writeUint32,
                    },
                    apps: { n: 10, c: ct, r: !0, q: !0 },
                    list_type: { n: 11, br: o.qM.readEnum, bw: o.gp.writeEnum },
                    title_localization: { n: 12, c: Je.O2, r: !0, q: !0 },
                    blurb_localization: { n: 13, c: Je.O2, r: !0, q: !0 },
                    link_localization: { n: 14, c: Je.O2, r: !0, q: !0 },
                    sale_clan_steamid: {
                      n: 15,
                      br: o.qM.readFixed64String,
                      bw: o.gp.writeFixed64String,
                    },
                    sale_clan_event_gid: {
                      n: 16,
                      br: o.qM.readFixed64String,
                      bw: o.gp.writeFixed64String,
                    },
                    list_jsondata: {
                      n: 17,
                      br: o.qM.readString,
                      bw: o.gp.writeString,
                    },
                    clan_account_id: {
                      n: 18,
                      br: o.qM.readUint32,
                      bw: o.gp.writeUint32,
                    },
                  },
                }),
              We.sm_m
            );
          }
          static MBF() {
            return We.sm_mbf || (We.sm_mbf = o.w0(We.M())), We.sm_mbf;
          }
          toObject(i = !1) {
            return We.toObject(i, this);
          }
          static toObject(i, u) {
            return o.BT(We.M(), i, u);
          }
          static fromObject(i) {
            return o.Uq(We.M(), i);
          }
          static deserializeBinary(i) {
            let u = new (l().BinaryReader)(i),
              n = new We();
            return We.deserializeBinaryFromReader(n, u);
          }
          static deserializeBinaryFromReader(i, u) {
            return o.zj(We.MBF(), i, u);
          }
          serializeBinary() {
            var i = new (l().BinaryWriter)();
            return We.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, u) {
            o.i0(We.M(), i, u);
          }
          serializeBase64String() {
            var i = new (l().BinaryWriter)();
            return (
              We.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCuration_ListDetails";
          }
        };
        d(x, "sm_m"), d(x, "sm_mbf");
        let Ye = x;
        const Ze = class Fe extends r.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Fe.prototype.recommended_app || o.Sg(Fe.M()),
              r.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static M() {
            return (
              Fe.sm_m ||
                (Fe.sm_m = {
                  proto: Fe,
                  fields: {
                    recommended_app: { n: 1, c: E },
                    blurb: { n: 2, br: o.qM.readString, bw: o.gp.writeString },
                    sort_order: {
                      n: 3,
                      br: o.qM.readUint32,
                      bw: o.gp.writeUint32,
                    },
                  },
                }),
              Fe.sm_m
            );
          }
          static MBF() {
            return Fe.sm_mbf || (Fe.sm_mbf = o.w0(Fe.M())), Fe.sm_mbf;
          }
          toObject(i = !1) {
            return Fe.toObject(i, this);
          }
          static toObject(i, u) {
            return o.BT(Fe.M(), i, u);
          }
          static fromObject(i) {
            return o.Uq(Fe.M(), i);
          }
          static deserializeBinary(i) {
            let u = new (l().BinaryReader)(i),
              n = new Fe();
            return Fe.deserializeBinaryFromReader(n, u);
          }
          static deserializeBinaryFromReader(i, u) {
            return o.zj(Fe.MBF(), i, u);
          }
          serializeBinary() {
            var i = new (l().BinaryWriter)();
            return Fe.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, u) {
            o.i0(Fe.M(), i, u);
          }
          serializeBase64String() {
            var i = new (l().BinaryWriter)();
            return (
              Fe.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCuration_ListDetails_ListItem";
          }
        };
        d(Ze, "sm_m"), d(Ze, "sm_mbf");
        let ct = Ze;
        const et = class Oe extends r.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Oe.prototype.steamid || o.Sg(Oe.M()),
              r.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static M() {
            return (
              Oe.sm_m ||
                (Oe.sm_m = {
                  proto: Oe,
                  fields: {
                    steamid: {
                      n: 1,
                      br: o.qM.readFixed64String,
                      bw: o.gp.writeFixed64String,
                    },
                    list_state: { n: 2, br: o.qM.readEnum, bw: o.gp.writeEnum },
                    start: { n: 3, br: o.qM.readUint32, bw: o.gp.writeUint32 },
                    count: { n: 4, br: o.qM.readUint32, bw: o.gp.writeUint32 },
                    return_total_only: {
                      n: 5,
                      br: o.qM.readBool,
                      bw: o.gp.writeBool,
                    },
                    return_metadata_only: {
                      n: 6,
                      br: o.qM.readBool,
                      bw: o.gp.writeBool,
                    },
                    max_apps: { n: 7, br: o.qM.readInt32, bw: o.gp.writeInt32 },
                    sale_clan_event_gid: {
                      n: 8,
                      br: o.qM.readFixed64String,
                      bw: o.gp.writeFixed64String,
                    },
                  },
                }),
              Oe.sm_m
            );
          }
          static MBF() {
            return Oe.sm_mbf || (Oe.sm_mbf = o.w0(Oe.M())), Oe.sm_mbf;
          }
          toObject(i = !1) {
            return Oe.toObject(i, this);
          }
          static toObject(i, u) {
            return o.BT(Oe.M(), i, u);
          }
          static fromObject(i) {
            return o.Uq(Oe.M(), i);
          }
          static deserializeBinary(i) {
            let u = new (l().BinaryReader)(i),
              n = new Oe();
            return Oe.deserializeBinaryFromReader(n, u);
          }
          static deserializeBinaryFromReader(i, u) {
            return o.zj(Oe.MBF(), i, u);
          }
          serializeBinary() {
            var i = new (l().BinaryWriter)();
            return Oe.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, u) {
            o.i0(Oe.M(), i, u);
          }
          serializeBase64String() {
            var i = new (l().BinaryWriter)();
            return (
              Oe.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCuration_GetLists_Request";
          }
        };
        d(et, "sm_m"), d(et, "sm_mbf");
        let pt = et;
        const nt = class je extends r.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              je.prototype.list_details || o.Sg(je.M()),
              r.Message.initialize(this, i, 0, -1, [1], null);
          }
          static M() {
            return (
              je.sm_m ||
                (je.sm_m = {
                  proto: je,
                  fields: {
                    list_details: { n: 1, c: Ye, r: !0, q: !0 },
                    total: { n: 2, br: o.qM.readUint32, bw: o.gp.writeUint32 },
                  },
                }),
              je.sm_m
            );
          }
          static MBF() {
            return je.sm_mbf || (je.sm_mbf = o.w0(je.M())), je.sm_mbf;
          }
          toObject(i = !1) {
            return je.toObject(i, this);
          }
          static toObject(i, u) {
            return o.BT(je.M(), i, u);
          }
          static fromObject(i) {
            return o.Uq(je.M(), i);
          }
          static deserializeBinary(i) {
            let u = new (l().BinaryReader)(i),
              n = new je();
            return je.deserializeBinaryFromReader(n, u);
          }
          static deserializeBinaryFromReader(i, u) {
            return o.zj(je.MBF(), i, u);
          }
          serializeBinary() {
            var i = new (l().BinaryWriter)();
            return je.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, u) {
            o.i0(je.M(), i, u);
          }
          serializeBase64String() {
            var i = new (l().BinaryWriter)();
            return (
              je.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCuration_GetLists_Response";
          }
        };
        d(nt, "sm_m"), d(nt, "sm_mbf");
        let dt = nt;
        const $e = class Ue extends r.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Ue.prototype.steamid || o.Sg(Ue.M()),
              r.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static M() {
            return (
              Ue.sm_m ||
                (Ue.sm_m = {
                  proto: Ue,
                  fields: {
                    steamid: {
                      n: 1,
                      br: o.qM.readFixed64String,
                      bw: o.gp.writeFixed64String,
                    },
                    listid: {
                      n: 2,
                      br: o.qM.readUint64String,
                      bw: o.gp.writeUint64String,
                    },
                  },
                }),
              Ue.sm_m
            );
          }
          static MBF() {
            return Ue.sm_mbf || (Ue.sm_mbf = o.w0(Ue.M())), Ue.sm_mbf;
          }
          toObject(i = !1) {
            return Ue.toObject(i, this);
          }
          static toObject(i, u) {
            return o.BT(Ue.M(), i, u);
          }
          static fromObject(i) {
            return o.Uq(Ue.M(), i);
          }
          static deserializeBinary(i) {
            let u = new (l().BinaryReader)(i),
              n = new Ue();
            return Ue.deserializeBinaryFromReader(n, u);
          }
          static deserializeBinaryFromReader(i, u) {
            return o.zj(Ue.MBF(), i, u);
          }
          serializeBinary() {
            var i = new (l().BinaryWriter)();
            return Ue.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, u) {
            o.i0(Ue.M(), i, u);
          }
          serializeBase64String() {
            var i = new (l().BinaryWriter)();
            return (
              Ue.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCuration_GetListDetails_Request";
          }
        };
        d($e, "sm_m"), d($e, "sm_mbf");
        let S = $e;
        const g = class Ae extends r.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Ae.prototype.list_details || o.Sg(Ae.M()),
              r.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static M() {
            return (
              Ae.sm_m ||
                (Ae.sm_m = {
                  proto: Ae,
                  fields: { list_details: { n: 1, c: Ye } },
                }),
              Ae.sm_m
            );
          }
          static MBF() {
            return Ae.sm_mbf || (Ae.sm_mbf = o.w0(Ae.M())), Ae.sm_mbf;
          }
          toObject(i = !1) {
            return Ae.toObject(i, this);
          }
          static toObject(i, u) {
            return o.BT(Ae.M(), i, u);
          }
          static fromObject(i) {
            return o.Uq(Ae.M(), i);
          }
          static deserializeBinary(i) {
            let u = new (l().BinaryReader)(i),
              n = new Ae();
            return Ae.deserializeBinaryFromReader(n, u);
          }
          static deserializeBinaryFromReader(i, u) {
            return o.zj(Ae.MBF(), i, u);
          }
          serializeBinary() {
            var i = new (l().BinaryWriter)();
            return Ae.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, u) {
            o.i0(Ae.M(), i, u);
          }
          serializeBase64String() {
            var i = new (l().BinaryWriter)();
            return (
              Ae.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCuration_GetListDetails_Response";
          }
        };
        d(g, "sm_m"), d(g, "sm_mbf");
        let z = g;
        var j;
        ((_) => {
          function i(n, p, W) {
            return n.SendMsg(
              "StoreCuration.GetLists#1",
              (0, m.I8)(pt, p, W),
              dt,
              {
                bConstMethod: !0,
                ePrivilege: 2,
                eWebAPIKeyRequirement: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          _.GetLists = i;
          function u(n, p, W) {
            return n.SendMsg(
              "StoreCuration.GetListDetails#1",
              (0, m.I8)(S, p, W),
              z,
              {
                bConstMethod: !0,
                ePrivilege: 2,
                eWebAPIKeyRequirement: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          _.GetListDetails = u;
        })(j || (j = {}));
      },
      21721: (yt, rt, y) => {
        y.d(rt, {
          DT: () => Je,
          ZD: () => Qe,
          b0: () => o,
          bu: () => m,
          pd: () => w,
        });
        var f = y(72609),
          c = y(40358),
          r = y(71742),
          l = y(41032);
        function o(F, T) {
          if (F[T]) {
            if (T == "community_icon") {
              const h = F.asset_url_format
                .replace(/^steam\//, "images/")
                .replace("${FILENAME}", `${F[T]}.jpg`)
                .replace(/\?.*$/, "");
              return `${f.TS.MEDIA_CDN_COMMUNITY_URL}${h}`;
            } else if (typeof F[T] == "string") {
              const h = F.asset_url_format.replace("${FILENAME}", F[T]);
              return `${f.TS.STORE_ITEM_BASE_URL}${h}`;
            }
          }
        }
        function m(F, T = "full") {
          let h = "";
          switch (T) {
            case "thumb":
              h = ".116x65";
              break;
            case "600x338":
              h = ".600x338";
              break;
            case "1920x1080":
              h = ".1920x1080";
              break;
            case "full":
              h = "";
              break;
            default:
              (0, r.z_)(T, `Invalid size: ${T}`);
              break;
          }
          return (
            f.TS.STORE_ITEM_BASE_URL +
            F.filename.replace(/\.([^.]+)(\?.*)?$/, `${h}.$1$2`)
          );
        }
        function Je(F) {
          const { data: T } = (0, c.j4)(F),
            h = (0, l.dy)();
          if (T)
            return [
              ...(T.all_ages_screenshots || []),
              ...(!h && T.mature_content_screenshots
                ? T.mature_content_screenshots
                : []),
            ].sort((D, U) => D.ordinal - U.ordinal);
        }
        function w(F, T = !1) {
          const { data: h } = (0, c.lv)({ appid: F });
          if (h !== void 0)
            return h === null
              ? null
              : T && h.library_capsule_2x
                ? o(h, "library_capsule_2x")
                : h.library_capsule
                  ? o(h, "library_capsule")
                  : `${f.TS.STORE_ITEM_BASE_URL}steam/apps/${F}/portrait.png`;
        }
        function Qe(F, ...T) {
          const { data: h } = (0, c.lv)(F);
          if (!(h != null && h.asset_url_format)) return;
          const D = T.find((U) => {
            const Xe = h[U];
            return typeof Xe == "string" && Xe.trim() !== "";
          });
          return D && o(h, D);
        }
      },
      813: (yt, rt, y) => {
        y.d(rt, {
          $5: () => ct,
          Ao: () => $e,
          TB: () => Ze,
          W$: () => et,
          Yp: () => nt,
          _5: () => dt,
          ac: () => x,
        });
        var f = y(99412),
          c = y(40497),
          r = y(29385),
          l = y(14947),
          o = y(90626),
          m = y(76559),
          Je = y(71742),
          w = y(3166),
          Qe = y(60480),
          F = y(16369),
          T = y(33512),
          h = y(55483),
          D = y(77291),
          U = Object.defineProperty,
          Xe = (S, g, z) =>
            g in S
              ? U(S, g, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: z,
                })
              : (S[g] = z),
          A = (S, g, z) => Xe(S, typeof g != "symbol" ? g + "" : g, z);
        const d = new WeakSet();
        function b(S = c.L) {
          if (
            typeof window == "undefined" ||
            typeof document == "undefined" ||
            d.has(S)
          )
            return;
          const g = (0, w.Fd)("groupvanityinfo", "application_config");
          (g === void 0 && document.readyState != "complete") ||
            (d.add(S), P(g) && (0, h.aA)(S, g));
        }
        function P(S) {
          const g = S;
          return g &&
            Array.isArray(g) &&
            g.length > 0 &&
            typeof g[0] == "object"
            ? typeof g[0].clanAccountID == "number" &&
                (typeof g[0].appid == "number" ||
                  typeof g[0].vanity_url == "string")
            : !1;
        }
        function it(S) {
          return typeof S == "string" ? parseInt(S) : S;
        }
        function O(S) {
          return typeof S == "string" ? Number.parseInt(S) : S;
        }
        class E {
          constructor() {
            A(this, "m_queryClient", c.L),
              A(this, "m_boxCacheVersion", l.sH.box(0)),
              A(this, "m_bWatchingCache", !1),
              A(this, "m_bBumpScheduled", !1);
          }
          Init() {
            this.LazyInit();
          }
          LazyInit() {
            b(this.m_queryClient),
              this.m_bWatchingCache ||
                ((this.m_bWatchingCache = !0),
                this.m_queryClient.getQueryCache().subscribe((g) => {
                  var z;
                  ((g == null ? void 0 : g.type) != "added" &&
                    (g == null ? void 0 : g.type) != "updated" &&
                    (g == null ? void 0 : g.type) != "removed") ||
                    ((0, h.yT)((z = g.query) == null ? void 0 : z.queryKey) &&
                      this.ScheduleCacheVersionBump());
                }));
          }
          ScheduleCacheVersionBump() {
            this.m_bBumpScheduled ||
              ((this.m_bBumpScheduled = !0),
              queueMicrotask(() => {
                (this.m_bBumpScheduled = !1),
                  (0, l.h5)(() =>
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
          AddGroupVanities(g) {
            this.LazyInit(), P(g) && (0, h.aA)(this.m_queryClient, g);
          }
          BHasClanInfoLoaded(g) {
            return (
              (0, Je.wT)(
                g.BIsValid(),
                "Clan SteamID is not valid when ClanInfo",
              ),
              (0, Je.wT)(
                g.BIsClanAccount(),
                "Clan SteamID is not a clan account id when requesting clan info ",
              ),
              this.BHasClanInfoLoadedByAccountID(g.GetAccountID())
            );
          }
          BHasClanInfoLoadedByAccountID(g) {
            return !!(0, h.Gt)(O(g), this.ReadCache());
          }
          RegisterClanData(g) {
            this.LazyInit(), (0, h.aA)(this.m_queryClient, g);
          }
          async LoadOGGClanInfoForAppID(g) {
            return (
              this.LazyInit(),
              (g = it(g)),
              (0, Je.wT)(
                g != 0,
                "LoadOGGClanInfoForAppID called with appid of zero",
              ),
              g == 0 ? null : (0, h.AB)(g, this.m_queryClient).catch(() => null)
            );
          }
          async LoadOGGClanInfoForIdentifier(g) {
            return this.LazyInit(), (0, h.Rc)(g, this.m_queryClient, "store");
          }
          async LoadOGGClanInfoForGroupVanity(g) {
            return this.LazyInit(), (0, h.Rc)(g, this.m_queryClient, "group");
          }
          async LoadClanInfoForClanSteamID(g) {
            return this.LoadClanInfoForClanAccountID(g.GetAccountID());
          }
          async LoadClanInfoForClanAccountID(g) {
            return this.LazyInit(), (0, h.MR)(O(g), this.m_queryClient);
          }
          GetOGGClanInfo(g) {
            const z = this.ReadCache();
            return typeof g == "string" ? (0, h.fy)(g, z) : (0, h.ko)(g, z);
          }
          GetClanSteamIDForAppID(g) {
            const z = (0, h.ko)(it(g), this.ReadCache());
            return z ? m.b.InitFromClanID(z.clanAccountID) : void 0;
          }
          GetClanVanityForAppID(g) {
            var z;
            return (z = (0, h.ko)(it(g), this.ReadCache())) == null
              ? void 0
              : z.vanity_url;
          }
          GetClanVanityForClanSteamID(g) {
            var z;
            return (z = (0, h.Gt)(g.GetAccountID(), this.ReadCache())) == null
              ? void 0
              : z.vanity_url;
          }
          HasLoadedClanAccountID(g) {
            return this.BHasClanInfoLoadedByAccountID(g);
          }
          GetClanMemberCount(g) {
            var z, j;
            return (j =
              (z = (0, h.ko)(it(g), this.ReadCache())) == null
                ? void 0
                : z.member_count) != null
              ? j
              : 0;
          }
          GetClanInfoByClanAccountID(g) {
            return (
              (0, Je.wT)(
                !!g,
                "Unepxected clanid when requesting information. GetClanInfoByClanAccountID ",
              ),
              (0, h.Gt)(O(g), this.ReadCache())
            );
          }
          GetCreatorStoreURL(g) {
            let z = Qe.pF.GetCreatorHome(g);
            if (z) return z.GetCreatorHomeURL("developer");
            let j = this.GetClanInfoByClanAccountID(g.GetAccountID());
            return (
              w.TS.COMMUNITY_BASE_URL +
              (j.vanity_url
                ? "groups/" + j.vanity_url
                : "gid/" + g.ConvertTo64BitString())
            );
          }
        }
        const x = new E();
        (0, D.V)("g_ClanStore", x);
        function Ye() {
          const S = (0, r.jE)();
          return b(S), S;
        }
        function Ze(S) {
          Ye();
          const { data: g, isPending: z } = (0, h.TB)(S ? O(S) : void 0);
          return [!!S && z, g != null ? g : void 0];
        }
        function ct(S) {
          const g = Ye();
          (0, o.useEffect)(() => {
            S &&
              (0, h.MR)(O(S), g).catch((z) =>
                console.error(`Failed to hint load clan info ${S}`, z),
              );
          }, [S, g]);
        }
        function et(S) {
          var g;
          return Ye(), (g = (0, h.W$)(S).data) != null ? g : null;
        }
        function pt(S) {
          Ye();
          const g = S ? it(S) : void 0,
            { data: z, isPending: j } = useClanInfoByAppIDQuery(g);
          return { bLoadingClanInfo: !!g && j, clanInfo: z != null ? z : null };
        }
        function nt(S, g) {
          if (S.BIsOGGEvent()) return { bVisible: !1 };
          if (S.GetEventType() == f.ajI) return { bVisible: !1 };
          if (S.BHasSaleEnabled()) return { bVisible: !0 };
          if (
            S.jsondata.clone_from_event_gid &&
            S.jsondata.clone_from_sale_enabled
          )
            return { bVisible: !0 };
          if (S.clanSteamID.GetAccountID() == (0, F.H)())
            return { bVisible: !1 };
          const j = Qe.pF.GetCreatorHome(S.clanSteamID);
          return j && j.BHasClanAccountFlagSet(T.Wv.Jn)
            ? { bVisible: !0 }
            : g
              ? { bVisible: !0, bValveOnly: !0 }
              : { bVisible: !1 };
        }
        function dt(S, g) {
          return S.BIsOGGEvent()
            ? S.BHasSaleEnabled()
              ? { bVisible: !0 }
              : w.TS.EUNIVERSE == f.wLO
                ? { bVisible: !1 }
                : g
                  ? S.GetEventType() == f.zeJ
                    ? { bVisible: !0, bValveOnly: !0 }
                    : { bVisible: !1 }
                  : { bVisible: !1 }
            : { bVisible: !1 };
        }
        function $e(S) {
          return S.BIsOGGEvent()
            ? { bVisible: !1 }
            : S.GetEventType() != f.ajI
              ? { bVisible: !1 }
              : S.BHasSaleEnabled()
                ? { bVisible: !0 }
                : S.clanSteamID.GetAccountID() == (0, F.H)()
                  ? { bVisible: !1 }
                  : { bVisible: !1 };
        }
      },
      60480: (yt, rt, y) => {
        y.d(rt, {
          mD: () => qt,
          ie: () => Lt,
          GT: () => _t,
          eL: () => ut,
          bW: () => mt,
          io: () => lt,
          A2: () => Pt,
          n4: () => At,
          pF: () => Bt,
          FV: () => Et,
          $$: () => Nt,
          FX: () => xt,
        });
        var f = y(72604),
          c = y(99412),
          r = y(35038),
          l = y(80613),
          o = y.n(l),
          m = y(75245),
          Je = Object.defineProperty,
          w = (M, t, s) =>
            t in M
              ? Je(M, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: s,
                })
              : (M[t] = s),
          Qe = (M, t, s) => w(M, typeof t != "symbol" ? t + "" : t, s);
        function F(M) {
          return "unknown EAppDevsRelationship ( " + M + " )";
        }
        function T(M) {
          return "unknown ECreatorHomeLinkRole ( " + M + " )";
        }
        const h = class Pe extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Pe.prototype.appid || m.Sg(Pe.M()),
              l.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static M() {
            return (
              Pe.sm_m ||
                (Pe.sm_m = {
                  proto: Pe,
                  fields: {
                    appid: { n: 1, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                    clan_steamid: {
                      n: 2,
                      br: m.qM.readFixed64String,
                      bw: m.gp.writeFixed64String,
                    },
                    relation: { n: 3, br: m.qM.readEnum, bw: m.gp.writeEnum },
                    linkname: {
                      n: 4,
                      br: m.qM.readString,
                      bw: m.gp.writeString,
                    },
                    json: { n: 5, br: m.qM.readString, bw: m.gp.writeString },
                  },
                }),
              Pe.sm_m
            );
          }
          static MBF() {
            return Pe.sm_mbf || (Pe.sm_mbf = m.w0(Pe.M())), Pe.sm_mbf;
          }
          toObject(t = !1) {
            return Pe.toObject(t, this);
          }
          static toObject(t, s) {
            return m.BT(Pe.M(), t, s);
          }
          static fromObject(t) {
            return m.Uq(Pe.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (o().BinaryReader)(t),
              B = new Pe();
            return Pe.deserializeBinaryFromReader(B, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return m.zj(Pe.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (o().BinaryWriter)();
            return Pe.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            m.i0(Pe.M(), t, s);
          }
          serializeBase64String() {
            var t = new (o().BinaryWriter)();
            return (
              Pe.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CDeveloperPageLink";
          }
        };
        Qe(h, "sm_m"), Qe(h, "sm_mbf");
        let D = h;
        const U = class _e extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              _e.prototype.clan_account_id || m.Sg(_e.M()),
              l.Message.initialize(this, t, 0, -1, [2], null);
          }
          static M() {
            return (
              _e.sm_m ||
                (_e.sm_m = {
                  proto: _e,
                  fields: {
                    clan_account_id: {
                      n: 1,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                    appid_list: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: m.qM.readUint32,
                      pbr: m.qM.readPackedUint32,
                      bw: m.gp.writeRepeatedUint32,
                    },
                  },
                }),
              _e.sm_m
            );
          }
          static MBF() {
            return _e.sm_mbf || (_e.sm_mbf = m.w0(_e.M())), _e.sm_mbf;
          }
          toObject(t = !1) {
            return _e.toObject(t, this);
          }
          static toObject(t, s) {
            return m.BT(_e.M(), t, s);
          }
          static fromObject(t) {
            return m.Uq(_e.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (o().BinaryReader)(t),
              B = new _e();
            return _e.deserializeBinaryFromReader(B, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return m.zj(_e.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (o().BinaryWriter)();
            return _e.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            m.i0(_e.M(), t, s);
          }
          serializeBase64String() {
            var t = new (o().BinaryWriter)();
            return (
              _e.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CDeveloperPageToApps";
          }
        };
        Qe(U, "sm_m"), Qe(U, "sm_mbf");
        let Xe = U;
        var A = Object.defineProperty,
          d = (M, t, s) =>
            t in M
              ? A(M, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: s,
                })
              : (M[t] = s),
          b = (M, t, s) => d(M, typeof t != "symbol" ? t + "" : t, s);
        const P = class qe extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              qe.prototype.appid || m.Sg(qe.M()),
              l.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static M() {
            return (
              qe.sm_m ||
                (qe.sm_m = {
                  proto: qe,
                  fields: {
                    appid: { n: 1, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                    link: { n: 2, c: D },
                    remove: {
                      n: 3,
                      d: !1,
                      br: m.qM.readBool,
                      bw: m.gp.writeBool,
                    },
                    update_json_only: {
                      n: 4,
                      d: !1,
                      br: m.qM.readBool,
                      bw: m.gp.writeBool,
                    },
                    skip_clan_permissions: {
                      n: 5,
                      d: !1,
                      br: m.qM.readBool,
                      bw: m.gp.writeBool,
                    },
                    partner_id: {
                      n: 6,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                  },
                }),
              qe.sm_m
            );
          }
          static MBF() {
            return qe.sm_mbf || (qe.sm_mbf = m.w0(qe.M())), qe.sm_mbf;
          }
          toObject(t = !1) {
            return qe.toObject(t, this);
          }
          static toObject(t, s) {
            return m.BT(qe.M(), t, s);
          }
          static fromObject(t) {
            return m.Uq(qe.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (o().BinaryReader)(t),
              B = new qe();
            return qe.deserializeBinaryFromReader(B, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return m.zj(qe.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (o().BinaryWriter)();
            return qe.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            m.i0(qe.M(), t, s);
          }
          serializeBase64String() {
            var t = new (o().BinaryWriter)();
            return (
              qe.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCatalog_SetDevPageLink_Request";
          }
        };
        b(P, "sm_m"), b(P, "sm_mbf");
        let it = P;
        class O extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), l.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return O.toObject(t, this);
          }
          static toObject(t, s) {
            return t ? { $jspbMessageInstance: s } : {};
          }
          static fromObject(t) {
            return new O();
          }
          static deserializeBinary(t) {
            let s = new (o().BinaryReader)(t),
              B = new O();
            return O.deserializeBinaryFromReader(B, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return t;
          }
          serializeBinary() {
            var t = new (o().BinaryWriter)();
            return O.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {}
          serializeBase64String() {
            var t = new (o().BinaryWriter)();
            return (
              O.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCatalog_SetDevPageLink_Response";
          }
        }
        const E = class Le extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Le.prototype.appid || m.Sg(Le.M()),
              l.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static M() {
            return (
              Le.sm_m ||
                (Le.sm_m = {
                  proto: Le,
                  fields: {
                    appid: { n: 1, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                  },
                }),
              Le.sm_m
            );
          }
          static MBF() {
            return Le.sm_mbf || (Le.sm_mbf = m.w0(Le.M())), Le.sm_mbf;
          }
          toObject(t = !1) {
            return Le.toObject(t, this);
          }
          static toObject(t, s) {
            return m.BT(Le.M(), t, s);
          }
          static fromObject(t) {
            return m.Uq(Le.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (o().BinaryReader)(t),
              B = new Le();
            return Le.deserializeBinaryFromReader(B, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return m.zj(Le.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (o().BinaryWriter)();
            return Le.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            m.i0(Le.M(), t, s);
          }
          serializeBase64String() {
            var t = new (o().BinaryWriter)();
            return (
              Le.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCatalog_GetDevPageLinks_Request";
          }
        };
        b(E, "sm_m"), b(E, "sm_mbf");
        let x = E;
        const Ye = class De extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              De.prototype.links || m.Sg(De.M()),
              l.Message.initialize(this, t, 0, -1, [1], null);
          }
          static M() {
            return (
              De.sm_m ||
                (De.sm_m = {
                  proto: De,
                  fields: { links: { n: 1, c: D, r: !0, q: !0 } },
                }),
              De.sm_m
            );
          }
          static MBF() {
            return De.sm_mbf || (De.sm_mbf = m.w0(De.M())), De.sm_mbf;
          }
          toObject(t = !1) {
            return De.toObject(t, this);
          }
          static toObject(t, s) {
            return m.BT(De.M(), t, s);
          }
          static fromObject(t) {
            return m.Uq(De.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (o().BinaryReader)(t),
              B = new De();
            return De.deserializeBinaryFromReader(B, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return m.zj(De.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (o().BinaryWriter)();
            return De.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            m.i0(De.M(), t, s);
          }
          serializeBase64String() {
            var t = new (o().BinaryWriter)();
            return (
              De.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCatalog_GetDevPageLinks_Response";
          }
        };
        b(Ye, "sm_m"), b(Ye, "sm_mbf");
        let Ze = Ye;
        const ct = class Ge extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Ge.prototype.clan_account_ids || m.Sg(Ge.M()),
              l.Message.initialize(this, t, 0, -1, [1], null);
          }
          static M() {
            return (
              Ge.sm_m ||
                (Ge.sm_m = {
                  proto: Ge,
                  fields: {
                    clan_account_ids: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: m.qM.readUint32,
                      pbr: m.qM.readPackedUint32,
                      bw: m.gp.writeRepeatedUint32,
                    },
                    ignore_dlc: { n: 2, br: m.qM.readBool, bw: m.gp.writeBool },
                  },
                }),
              Ge.sm_m
            );
          }
          static MBF() {
            return Ge.sm_mbf || (Ge.sm_mbf = m.w0(Ge.M())), Ge.sm_mbf;
          }
          toObject(t = !1) {
            return Ge.toObject(t, this);
          }
          static toObject(t, s) {
            return m.BT(Ge.M(), t, s);
          }
          static fromObject(t) {
            return m.Uq(Ge.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (o().BinaryReader)(t),
              B = new Ge();
            return Ge.deserializeBinaryFromReader(B, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return m.zj(Ge.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (o().BinaryWriter)();
            return Ge.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            m.i0(Ge.M(), t, s);
          }
          serializeBase64String() {
            var t = new (o().BinaryWriter)();
            return (
              Ge.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCatalog_GetDevPageAllAppsLinked_Request";
          }
        };
        b(ct, "sm_m"), b(ct, "sm_mbf");
        let et = ct;
        const pt = class Ee extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Ee.prototype.results || m.Sg(Ee.M()),
              l.Message.initialize(this, t, 0, -1, [1], null);
          }
          static M() {
            return (
              Ee.sm_m ||
                (Ee.sm_m = {
                  proto: Ee,
                  fields: { results: { n: 1, c: Xe, r: !0, q: !0 } },
                }),
              Ee.sm_m
            );
          }
          static MBF() {
            return Ee.sm_mbf || (Ee.sm_mbf = m.w0(Ee.M())), Ee.sm_mbf;
          }
          toObject(t = !1) {
            return Ee.toObject(t, this);
          }
          static toObject(t, s) {
            return m.BT(Ee.M(), t, s);
          }
          static fromObject(t) {
            return m.Uq(Ee.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (o().BinaryReader)(t),
              B = new Ee();
            return Ee.deserializeBinaryFromReader(B, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return m.zj(Ee.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (o().BinaryWriter)();
            return Ee.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            m.i0(Ee.M(), t, s);
          }
          serializeBase64String() {
            var t = new (o().BinaryWriter)();
            return (
              Ee.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCatalog_GetDevPageAllAppsLinked_Response";
          }
        };
        b(pt, "sm_m"), b(pt, "sm_mbf");
        let nt = pt;
        const dt = class xe extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              xe.prototype.clan_account_id || m.Sg(xe.M()),
              l.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static M() {
            return (
              xe.sm_m ||
                (xe.sm_m = {
                  proto: xe,
                  fields: {
                    clan_account_id: {
                      n: 1,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                    listid: {
                      n: 2,
                      br: m.qM.readUint64String,
                      bw: m.gp.writeUint64String,
                    },
                    ignore_dlc: { n: 3, br: m.qM.readBool, bw: m.gp.writeBool },
                  },
                }),
              xe.sm_m
            );
          }
          static MBF() {
            return xe.sm_mbf || (xe.sm_mbf = m.w0(xe.M())), xe.sm_mbf;
          }
          toObject(t = !1) {
            return xe.toObject(t, this);
          }
          static toObject(t, s) {
            return m.BT(xe.M(), t, s);
          }
          static fromObject(t) {
            return m.Uq(xe.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (o().BinaryReader)(t),
              B = new xe();
            return xe.deserializeBinaryFromReader(B, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return m.zj(xe.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (o().BinaryWriter)();
            return xe.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            m.i0(xe.M(), t, s);
          }
          serializeBase64String() {
            var t = new (o().BinaryWriter)();
            return (
              xe.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCatalog_GetDevPageListApps_Request";
          }
        };
        b(dt, "sm_m"), b(dt, "sm_mbf");
        let $e = dt;
        const S = class Ne extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Ne.prototype.apps || m.Sg(Ne.M()),
              l.Message.initialize(this, t, 0, -1, [1], null);
          }
          static M() {
            return (
              Ne.sm_m ||
                (Ne.sm_m = {
                  proto: Ne,
                  fields: { apps: { n: 1, c: j, r: !0, q: !0 } },
                }),
              Ne.sm_m
            );
          }
          static MBF() {
            return Ne.sm_mbf || (Ne.sm_mbf = m.w0(Ne.M())), Ne.sm_mbf;
          }
          toObject(t = !1) {
            return Ne.toObject(t, this);
          }
          static toObject(t, s) {
            return m.BT(Ne.M(), t, s);
          }
          static fromObject(t) {
            return m.Uq(Ne.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (o().BinaryReader)(t),
              B = new Ne();
            return Ne.deserializeBinaryFromReader(B, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return m.zj(Ne.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (o().BinaryWriter)();
            return Ne.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            m.i0(Ne.M(), t, s);
          }
          serializeBase64String() {
            var t = new (o().BinaryWriter)();
            return (
              Ne.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCatalog_GetDevPageListApps_Response";
          }
        };
        b(S, "sm_m"), b(S, "sm_mbf");
        let g = S;
        const z = class He extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              He.prototype.appid || m.Sg(He.M()),
              l.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static M() {
            return (
              He.sm_m ||
                (He.sm_m = {
                  proto: He,
                  fields: {
                    appid: { n: 1, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                    sort_order: {
                      n: 2,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                  },
                }),
              He.sm_m
            );
          }
          static MBF() {
            return He.sm_mbf || (He.sm_mbf = m.w0(He.M())), He.sm_mbf;
          }
          toObject(t = !1) {
            return He.toObject(t, this);
          }
          static toObject(t, s) {
            return m.BT(He.M(), t, s);
          }
          static fromObject(t) {
            return m.Uq(He.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (o().BinaryReader)(t),
              B = new He();
            return He.deserializeBinaryFromReader(B, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return m.zj(He.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (o().BinaryWriter)();
            return He.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            m.i0(He.M(), t, s);
          }
          serializeBase64String() {
            var t = new (o().BinaryWriter)();
            return (
              He.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCatalog_GetDevPageListApps_Response_ListApp";
          }
        };
        b(z, "sm_m"), b(z, "sm_mbf");
        let j = z;
        const _ = class Ke extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Ke.prototype.partnerid || m.Sg(Ke.M()),
              l.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static M() {
            return (
              Ke.sm_m ||
                (Ke.sm_m = {
                  proto: Ke,
                  fields: {
                    partnerid: {
                      n: 1,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                  },
                }),
              Ke.sm_m
            );
          }
          static MBF() {
            return Ke.sm_mbf || (Ke.sm_mbf = m.w0(Ke.M())), Ke.sm_mbf;
          }
          toObject(t = !1) {
            return Ke.toObject(t, this);
          }
          static toObject(t, s) {
            return m.BT(Ke.M(), t, s);
          }
          static fromObject(t) {
            return m.Uq(Ke.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (o().BinaryReader)(t),
              B = new Ke();
            return Ke.deserializeBinaryFromReader(B, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return m.zj(Ke.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (o().BinaryWriter)();
            return Ke.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            m.i0(Ke.M(), t, s);
          }
          serializeBase64String() {
            var t = new (o().BinaryWriter)();
            return (
              Ke.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCatalog_GetDevPagesForPartner_Request";
          }
        };
        b(_, "sm_m"), b(_, "sm_mbf");
        let i = _;
        const u = class Ve extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Ve.prototype.results || m.Sg(Ve.M()),
              l.Message.initialize(this, t, 0, -1, [1], null);
          }
          static M() {
            return (
              Ve.sm_m ||
                (Ve.sm_m = {
                  proto: Ve,
                  fields: { results: { n: 1, c: W, r: !0, q: !0 } },
                }),
              Ve.sm_m
            );
          }
          static MBF() {
            return Ve.sm_mbf || (Ve.sm_mbf = m.w0(Ve.M())), Ve.sm_mbf;
          }
          toObject(t = !1) {
            return Ve.toObject(t, this);
          }
          static toObject(t, s) {
            return m.BT(Ve.M(), t, s);
          }
          static fromObject(t) {
            return m.Uq(Ve.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (o().BinaryReader)(t),
              B = new Ve();
            return Ve.deserializeBinaryFromReader(B, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return m.zj(Ve.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (o().BinaryWriter)();
            return Ve.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            m.i0(Ve.M(), t, s);
          }
          serializeBase64String() {
            var t = new (o().BinaryWriter)();
            return (
              Ve.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCatalog_GetDevPagesForPartner_Response";
          }
        };
        b(u, "sm_m"), b(u, "sm_mbf");
        let n = u;
        const p = class ke extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ke.prototype.clan_accountid || m.Sg(ke.M()),
              l.Message.initialize(this, t, 0, -1, [2], null);
          }
          static M() {
            return (
              ke.sm_m ||
                (ke.sm_m = {
                  proto: ke,
                  fields: {
                    clan_accountid: {
                      n: 1,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                    linknames: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: m.qM.readString,
                      bw: m.gp.writeRepeatedString,
                    },
                  },
                }),
              ke.sm_m
            );
          }
          static MBF() {
            return ke.sm_mbf || (ke.sm_mbf = m.w0(ke.M())), ke.sm_mbf;
          }
          toObject(t = !1) {
            return ke.toObject(t, this);
          }
          static toObject(t, s) {
            return m.BT(ke.M(), t, s);
          }
          static fromObject(t) {
            return m.Uq(ke.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (o().BinaryReader)(t),
              B = new ke();
            return ke.deserializeBinaryFromReader(B, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return m.zj(ke.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (o().BinaryWriter)();
            return ke.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            m.i0(ke.M(), t, s);
          }
          serializeBase64String() {
            var t = new (o().BinaryWriter)();
            return (
              ke.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCatalog_GetDevPagesForPartner_Response_CDevPageInfo";
          }
        };
        b(p, "sm_m"), b(p, "sm_mbf");
        let W = p;
        var at;
        ((M) => {
          function t(I, N, H) {
            return I.SendMsg(
              "StoreCatalog.SetDevPageLink#1",
              (0, r.I8)(it, N, H),
              O,
              {
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          M.SetDevPageLink = t;
          function s(I, N, H) {
            return I.SendMsg(
              "StoreCatalog.GetDevPageLinks#1",
              (0, r.I8)(x, N, H),
              Ze,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          M.GetDevPageLinks = s;
          function B(I, N, H) {
            return I.SendMsg(
              "StoreCatalog.GetDevPageAllAppsLinked#1",
              (0, r.I8)(et, N, H),
              nt,
              { ePrivilege: 1, rgBrowserAPISites: ["partner"] },
            );
          }
          M.GetDevPageAllAppsLinked = B;
          function C(I, N, H) {
            return I.SendMsg(
              "StoreCatalog.GetDevPageListApps#1",
              (0, r.I8)($e, N, H),
              g,
              {
                bConstMethod: !0,
                ePrivilege: 2,
                eWebAPIKeyRequirement: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          M.GetDevPageListApps = C;
          function v(I, N, H) {
            return I.SendMsg(
              "StoreCatalog.GetDevPagesForPartner#1",
              (0, r.I8)(i, N, H),
              n,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          M.GetDevPagesForPartner = v;
        })(at || (at = {}));
        var tt = y(60001),
          ft = y(88942),
          St = y(41735),
          wt = y.n(St),
          gt = y(14947),
          q = y(33512),
          L = y(3166),
          It = Object.defineProperty,
          ht = Object.getOwnPropertyDescriptor,
          Ot = (M, t, s) =>
            t in M
              ? It(M, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: s,
                })
              : (M[t] = s),
          Ct = (M, t, s, B) => {
            for (
              var C = B > 1 ? void 0 : B ? ht(t, s) : t, v = M.length - 1, I;
              v >= 0;
              v--
            )
              (I = M[v]) && (C = (B ? I(t, s, C) : I(C)) || C);
            return B && C && It(t, s, C), C;
          },
          st = (M, t, s) => Ot(M, typeof t != "symbol" ? t + "" : t, s);
        class bt {
          constructor(t) {
            st(this, "m_clanSteamID"),
              st(this, "m_appidList", new Array()),
              st(this, "m_strName", ""),
              st(this, "m_strAvatarURLFullSize", ""),
              st(this, "m_strTagLineLoc", ""),
              st(this, "m_nFollowers", 0),
              st(this, "m_strVanity", ""),
              st(this, "m_webLink"),
              st(this, "m_linkedEvent"),
              st(this, "m_mapListInfo", new Map()),
              st(this, "m_promise"),
              st(this, "m_bIsLoaded", !1),
              st(this, "m_bIsHidden", !1),
              st(this, "m_clanAccountFlags", 0),
              (0, gt.Gn)(this),
              (this.m_clanSteamID = t);
          }
          Initialize(t) {
            var s, B;
            (this.m_strName = t.name || ""),
              (this.m_strAvatarURLFullSize =
                t.avatar_url_full_size ||
                "https://avatars.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg"),
              (this.m_strTagLineLoc = t.tag_line_localized || ""),
              (this.m_nFollowers = t.followers || 0),
              (this.m_strVanity = t.vanity || void 0),
              (this.m_webLink = t.weblink),
              (this.m_bIsHidden = t.hidden || !1),
              (this.m_clanAccountFlags =
                (s = t.clan_account_flags) != null ? s : 0),
              (this.m_linkedEvent = t.linked_event),
              (this.m_mapListInfo = new Map(
                Object.entries((B = t.list_info) != null ? B : {}),
              )),
              t.appids && t.appids.forEach((C) => this.m_appidList.push(C)),
              (this.m_bIsLoaded = !0);
          }
          GetCreatorHomeIdentifier() {
            return {
              name: this.m_strName,
              clan_account_id: this.m_clanSteamID.GetAccountID(),
              type: "developer",
              hidden: this.m_bIsHidden,
            };
          }
          BIsPartnerEventEditorEnabled() {
            return !!(this.m_clanAccountFlags & q.Wv.GH);
          }
          BHasClanAccountFlagSet(t) {
            return !!(this.m_clanAccountFlags & t);
          }
          BIsLoaded() {
            return this.m_bIsLoaded;
          }
          GetClanSteamID() {
            return this.m_clanSteamID;
          }
          GetClanAccountID() {
            return this.m_clanSteamID.GetAccountID();
          }
          GetAppIDList() {
            return this.m_appidList;
          }
          GetName() {
            return this.m_strName;
          }
          GetAvatarURLFullSize() {
            return this.m_strAvatarURLFullSize;
          }
          GetTagLine() {
            return this.m_strTagLineLoc;
          }
          GetNumFollowers() {
            return this.m_nFollowers;
          }
          BIsHidden() {
            return this.m_bIsHidden;
          }
          GetCreatorHomeURL(t) {
            if (this.m_strVanity) {
              switch (t) {
                case "publisher":
                  return (
                    L.TS.STORE_BASE_URL + "publisher/" + this.m_strVanity + "/"
                  );
                case "franchise":
                  return (
                    L.TS.STORE_BASE_URL + "franchise/" + this.m_strVanity + "/"
                  );
              }
              return (
                L.TS.STORE_BASE_URL + "developer/" + this.m_strVanity + "/"
              );
            }
            return (
              L.TS.STORE_BASE_URL +
              "curator/" +
              this.m_clanSteamID.GetAccountID() +
              "/"
            );
          }
          BHasWebLink() {
            return this.m_webLink !== void 0;
          }
          GetWebLink() {
            return this.m_webLink;
          }
          GetVanityString() {
            return this.m_strVanity;
          }
          GetLinkedEventGID() {
            return this.m_linkedEvent;
          }
          GetListInfo() {
            return this.m_mapListInfo;
          }
          AdjustFollower(t) {
            this.m_nFollowers += t;
          }
          async EnablePartnerEventEditorFlag() {
            this.BIsPartnerEventEditorEnabled() ||
              (await this.UpdateGroupFlagsFeature([q.Wv.bM, q.Wv.GH], !0));
          }
          async UpdateGroupFlagsFeature(t, s) {
            let B = L.TS.PARTNER_BASE_URL + "sales/ajaxupdateclanaccountflags",
              C = this.m_clanAccountFlags;
            if (
              (t.forEach((H) => {
                s ? (C |= H) : (C &= ~H);
              }),
              C == this.m_clanAccountFlags)
            )
              return;
            let v = new Array();
            C & q.Wv._x && v.push(q.Wv._x),
              C & q.Wv.GH && v.push(q.Wv.GH),
              C & q.Wv.bM && v.push(q.Wv.bM),
              C & q.Wv.Jb && v.push(q.Wv.Jb),
              C & q.Wv.Nq && v.push(q.Wv.Nq),
              C & q.Wv.Jn && v.push(q.Wv.Jn),
              C & q.Wv.Mv && v.push(q.Wv.Mv),
              C & q.Wv.xc && v.push(q.Wv.xc),
              C & q.Wv.yl && v.push(q.Wv.yl);
            let I = new FormData();
            I.append("sessionid", (0, L.KC)()),
              I.append("clan_account_id", this.GetClanAccountID().toString()),
              I.append("accountflags", JSON.stringify(v));
            let N = await wt().post(B, I);
            N &&
              N.status == 200 &&
              N.data.success == f.R &&
              (this.m_clanAccountFlags = C);
          }
        }
        Ct([gt.sH], bt.prototype, "m_appidList", 2),
          Ct([gt.sH], bt.prototype, "m_nFollowers", 2),
          Ct([gt.sH], bt.prototype, "m_clanAccountFlags", 2);
        var jt = y(13018),
          Rt = y(60298),
          Mt = y(76559),
          zt = y(77291),
          Tt = Object.defineProperty,
          Wt = Object.getOwnPropertyDescriptor,
          ot = (M, t, s) =>
            t in M
              ? Tt(M, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: s,
                })
              : (M[t] = s),
          e = (M, t, s, B) => {
            for (
              var C = B > 1 ? void 0 : B ? Wt(t, s) : t, v = M.length - 1, I;
              v >= 0;
              v--
            )
              (I = M[v]) && (C = (B ? I(t, s, C) : I(C)) || C);
            return B && C && Tt(t, s, C), C;
          },
          a = (M, t, s) => ot(M, typeof t != "symbol" ? t + "" : t, s);
        const R = class Gt {
          constructor() {
            a(this, "m_mapClanToCreatorHome", new Map()),
              a(this, "m_mapAppToCreatorIDList", new Map()),
              a(this, "m_bLoadedFromConfig", !1),
              a(this, "m_serviceTransport"),
              (0, gt.Gn)(this);
          }
          LazyInit() {
            if (!this.m_bLoadedFromConfig) {
              const t = (0, L.Tc)("creatorhome", "application_config");
              this.ValidateStoreDefault(t) &&
                t.forEach((B) => {
                  const C = Number(B.creator_clan_id),
                    v = Mt.b.InitFromClanID(C),
                    I = new bt(v);
                  I.Initialize(B),
                    (I.m_promise = Gt.GetAsPromise(I)),
                    this.m_mapClanToCreatorHome.set(C, I);
                });
              const s = (0, L.Tc)("creatorhomeforapp", "application_config");
              this.ValidateStoreDefaultAppList(s) &&
                s.forEach((B) => {
                  B.appid !== void 0 &&
                    (this.m_mapAppToCreatorIDList.has(B.appid) ||
                      this.m_mapAppToCreatorIDList.set(B.appid, new Array()),
                    this.m_mapAppToCreatorIDList.get(B.appid).push(B));
                }),
                (this.m_bLoadedFromConfig = !0);
            }
          }
          GetServiceTransport() {
            if (!this.m_serviceTransport) {
              const t = (0, L.Tc)("loyalty_webapi_token", "application_config"),
                s = (0, Rt.p)(new jt.D(L.TS.WEBAPI_BASE_URL, t || void 0));
              this.m_serviceTransport = s.GetServiceTransport();
            }
            return this.m_serviceTransport;
          }
          static async GetAsPromise(t) {
            return t;
          }
          ValidateStoreDefault(t) {
            const s = t;
            return s &&
              Array.isArray(s) &&
              s.length > 0 &&
              typeof s[0] == "object"
              ? typeof s[0].name == "string" &&
                  (typeof s[0].creator_clan_id == "string" ||
                    typeof s[0].creator_clan_id == "number")
              : !1;
          }
          ValidateStoreDefaultAppList(t) {
            const s = t;
            return s &&
              Array.isArray(s) &&
              s.length > 0 &&
              typeof s[0] == "object"
              ? typeof s[0].clan_account_id == "number" &&
                  s[0].clan_account_id > 0 &&
                  typeof s[0].appid == "number" &&
                  s[0].appid > 0
              : !1;
          }
          BHasCreatorHomeLoaded(t) {
            return (
              this.m_mapClanToCreatorHome.has(t.GetAccountID()) &&
              this.m_mapClanToCreatorHome.get(t.GetAccountID()).BIsLoaded()
            );
          }
          GetCreatorHome(t) {
            return this.m_mapClanToCreatorHome.get(t.GetAccountID());
          }
          GetCreatorHomeByID(t) {
            return this.m_mapClanToCreatorHome.get(t.clan_account_id);
          }
          async LoadCreatorHome(t, s = !1, B) {
            if (
              (this.LazyInit(),
              s || !this.m_mapClanToCreatorHome.has(t.GetAccountID()))
            ) {
              let C = new bt(t);
              (C.m_promise = this.InternalCreatorHome(C, B)),
                await C.m_promise,
                this.m_mapClanToCreatorHome.set(t.GetAccountID(), C);
            }
            return this.m_mapClanToCreatorHome.get(t.GetAccountID()).m_promise;
          }
          async InternalCreatorHome(t, s) {
            let B = { get_appids: !0, l: L.TS.LANGUAGE },
              C =
                L.TS.STORE_BASE_URL +
                "curator/" +
                t.GetClanAccountID() +
                "/ajaxgetcreatorhomeinfo",
              v = await wt().get(C, { params: B, cancelToken: s && s.token });
            return t.Initialize(v.data), t;
          }
          async LoadCreatorHomeListForAppIncludeHiddden(t, s) {
            if ((this.LazyInit(), !this.m_mapAppToCreatorIDList.has(t))) {
              let B = { appid: t },
                C = L.TS.STORE_BASE_URL + "events/ajaxgetcreatorhomeidforapp",
                v = await wt().get(C, {
                  params: B,
                  cancelToken: s && s.token,
                  withCredentials: !0,
                });
              this.m_mapAppToCreatorIDList.set(t, v.data.creator_list);
            }
            return this.m_mapAppToCreatorIDList.get(t);
          }
          async SearchCreatorHomeStore(t, s, B) {
            let C = `${L.TS.STORE_BASE_URL}curator/0/ajaxsearchcurators`,
              v = {
                term: t.replace(" ", "+"),
                require_creator: s,
                cc: L.TS.COUNTRY,
                l: L.TS.LANGUAGE,
                origin: self.origin,
              },
              I = new Array();
            const N = await wt().get(C, { params: v, cancelToken: B.token });
            return (
              N.data.curators &&
                (0, gt.h5)(() => {
                  N.data.curators.forEach((H) => {
                    if (!this.m_mapClanToCreatorHome.has(H.creator_clan_id)) {
                      let Ft = Mt.b.InitFromClanID(H.creator_clan_id),
                        Dt = new bt(Ft);
                      Dt.Initialize(H),
                        this.m_mapClanToCreatorHome.set(H.creator_clan_id, Dt);
                    }
                    I.push(this.m_mapClanToCreatorHome.get(H.creator_clan_id));
                  });
                }),
              I
            );
          }
          GetCreatorHomeListForAppIncludeHidden(t) {
            return this.m_mapAppToCreatorIDList.has(t)
              ? this.m_mapAppToCreatorIDList.get(t)
              : [];
          }
        };
        e([gt.sH], R.prototype, "m_mapClanToCreatorHome", 2),
          e([gt.sH], R.prototype, "m_mapAppToCreatorIDList", 2),
          e([gt.XI], R.prototype, "LazyInit", 1);
        let Ut = R;
        const Bt = new Ut();
        (0, zt.V)("g_CreatorHomeStore", Bt);
        function At(M) {
          if (!M) return null;
          const t = Bt.BHasCreatorHomeLoaded(M.clanSteamID)
            ? Bt.GetCreatorHome(M.clanSteamID)
            : void 0;
          return M.GetSaleURL(
            t == null ? void 0 : t.GetCreatorHomeURL("developer"),
          );
        }
        function vt(M) {
          var t, s;
          if (!M) return;
          const B = (0, L.Tc)("creator_home_list_info", "application_config");
          if (B == null || typeof B != "object" || Array.isArray(B)) return;
          const C = B[M];
          if (!(!C || !C.title))
            return {
              title: C.title,
              description:
                (t = C.description) != null && t.length
                  ? C.description
                  : void 0,
              imageUrl:
                (s = C.listtileimage) != null && s.length
                  ? C.listtileimage
                  : void 0,
            };
        }
        function lt(M) {
          var t;
          return (t = vt(M)) == null ? void 0 : t.title;
        }
        function ut(M) {
          var t;
          return (t = vt(M)) == null ? void 0 : t.description;
        }
        function mt(M) {
          var t;
          return (t = vt(M)) == null ? void 0 : t.imageUrl;
        }
        function Pt(M) {
          const t = Mt.b.InitFromClanID(M);
          return {
            queryKey: ["CreatorHome", M],
            initialData: () => Bt.GetCreatorHome(t),
            queryFn: async () => {
              const s = Mt.b.InitFromClanID(M);
              return await Bt.LoadCreatorHome(s, !0);
            },
          };
        }
        function Et(M) {
          const { data: t, isFetching: s, refetch: B } = (0, ft.I)(Pt(M));
          return { creatorHome: t, isFetching: s, refetch: B };
        }
        function Ht(M, t, s) {
          const B = useQuery({
            queryKey: ["useCreateHomeLinkedApps", t, s],
            queryFn: async () => {
              const C = CProtoBufMsg.Init(
                CStoreCatalog_GetDevPageAllAppsLinked_Request,
              );
              C.Body().add_clan_account_ids(t),
                s && C.Body().set_ignore_dlc(!0);
              const v = await StoreCatalogService.GetDevPageAllAppsLinked(M, C);
              if (v.GetEResult() != k_EResultOK)
                throw new Error(
                  `Error from useCreateHomeLinkedApps: ${v.GetEResult()}`,
                );
              return v.Body().results().length == 0
                ? []
                : v.Body().results()[0].appid_list();
            },
            enabled: !!(t > 0 && M),
          });
          return B != null && B.isLoading ? null : B.data;
        }
        function _t(M, t, s) {
          return {
            queryKey: ["GetCreatorHomeListAppsQuery", M, t, s],
            queryFn: async () => {
              const B = Bt.GetServiceTransport(),
                C = r.w.Init($e);
              C.Body().set_clan_account_id(M),
                C.Body().set_listid(t),
                s && C.Body().set_ignore_dlc(!0);
              const v = await at.GetDevPageListApps(B, C);
              if (v.GetEResult() != f.R)
                throw new Error(
                  `Error from GetCreatorHomeListAppsQuery: ${v.GetEResult()}`,
                );
              return v
                .Body()
                .apps()
                .slice()
                .sort((I, N) => {
                  var H, Ft;
                  return (
                    ((H = I.sort_order()) != null ? H : 0) -
                    ((Ft = N.sort_order()) != null ? Ft : 0)
                  );
                })
                .map((I) => {
                  var N;
                  return (N = I.appid()) != null ? N : 0;
                })
                .filter((I) => I > 0);
            },
            enabled: !!(M > 0 && t),
          };
        }
        function xt(M, t, s) {
          const B = (0, ft.I)(_t(M, t, s));
          return B != null && B.isLoading ? null : B.data;
        }
        function qt(M, t) {
          return {
            queryKey: ["GetCreatorHomeGetAllListsQuery", M, t],
            queryFn: async () => {
              const s = Bt.GetServiceTransport(),
                B = r.w.Init(tt.eh);
              B.Body().set_steamid(
                new Mt.b(M, L.TS.EUNIVERSE, c.P3F, 0).ConvertTo64BitString(),
              ),
                B.Body().set_count(100);
              const C = await tt.K_.GetLists(s, B);
              return C.BSuccess()
                ? C.Body()
                    .list_details()
                    .filter((v) => t || v.list_state() != tt.eb.N0)
                : null;
            },
            enabled: M > 0,
          };
        }
        function Nt(M, t) {
          const { data: s, isFetching: B, refetch: C } = (0, ft.I)(qt(M, t));
          return { lists: s, isFetching: B, refetch: C };
        }
        function Lt(M, t) {
          return {
            queryKey: ["GetCreatorHomeGetListsDetailsQuery", M, t],
            queryFn: async () => {
              var s;
              const B = Bt.GetServiceTransport(),
                C = r.w.Init(tt.dU);
              C.Body().set_steamid(
                new Mt.b(M, L.TS.EUNIVERSE, c.P3F, 0).ConvertTo64BitString(),
              ),
                C.Body().set_listid(t);
              const v = await tt.K_.GetListDetails(B, C);
              return v.BSuccess() && (s = v.Body().list_details()) != null
                ? s
                : null;
            },
            enabled: M > 0,
          };
        }
        function Kt(M, t) {
          const { data: s, isFetching: B, refetch: C } = useQuery(Lt(M, t));
          return { list: s, isFetching: B, refetch: C };
        }
      },
    },
  ]);
})();
