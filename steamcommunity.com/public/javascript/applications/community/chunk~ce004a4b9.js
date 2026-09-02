/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [8024],
    {
      55483: (Bt, it, B) => {
        B.d(it, {
          yT: () => $,
          MR: () => I,
          AB: () => x,
          Rc: () => m,
          Gt: () => mt,
          ko: () => S,
          fy: () => f,
          ec: () => p,
          aA: () => Y,
          TB: () => j,
          W$: () => q,
        });
        var b = B(99412),
          d = B(76559),
          r = B(29385),
          u = B(88942),
          s = B(72604),
          l = B(72609);
        async function Q(o) {
          const i = `${l.TS.COMMUNITY_BASE_URL}ogg/${o}/ajaxgetvanityandclanid/?origin=${A()}`;
          return O(i);
        }
        async function R(o) {
          const i = d.b.InitFromClanID(o),
            g = `${l.TS.COMMUNITY_BASE_URL}gid/${i.ConvertTo64BitString()}/ajaxgetvanityandclanid/?origin=${A()}`;
          return O(g);
        }
        async function L(o) {
          const i = `${l.TS.COMMUNITY_BASE_URL}groups/${o}/ajaxgetvanityandclanid/?origin=${A()}`;
          return O(i);
        }
        async function G(o) {
          const i = `${l.TS.COMMUNITY_BASE_URL}games/${o}/ajaxgetvanityandclanid/?origin=${A()}`;
          return O(i);
        }
        async function O(o) {
          const i = await fetch(o, { method: "GET" });
          if (i.status == 404) return null;
          if (!i.ok) throw new Error(`Server returned ${i.status}`);
          const g = await i.json();
          return g.success != s.R ? null : g;
        }
        function A() {
          return typeof window != "undefined" && typeof self != "undefined"
            ? self.origin
            : "ssr_server";
        }
        function U(o) {
          return ["clantoclaninfo", o];
        }
        function nt(o) {
          return ["apptoclanid", o];
        }
        function at(o, i = "group") {
          return [
            "vanitytoclanid",
            i,
            o == null ? void 0 : o.toLocaleLowerCase(),
          ];
        }
        function $(o) {
          const i = o == null ? void 0 : o[0];
          return (
            i == "clantoclaninfo" || i == "apptoclanid" || i == "vanitytoclanid"
          );
        }
        const c = new WeakSet();
        function M(o) {
          if (!c.has(o)) {
            c.add(o);
            for (const i of [
              ["clantoclaninfo"],
              ["apptoclanid"],
              ["vanitytoclanid"],
            ])
              o.setQueryDefaults(i, {
                staleTime: 1 / 0,
                gcTime: 1 / 0,
                retry: !1,
              });
          }
        }
        const D = new WeakMap();
        function N(o) {
          if (!o) return null;
          let i = D.get(o);
          return (
            i ||
              ((i = {
                ...o,
                clanSteamID: o.clanSteamIDString
                  ? new d.b(o.clanSteamIDString)
                  : d.b.InitFromClanID(o.clanAccountID),
              }),
              D.set(o, i)),
            i
          );
        }
        function H(o) {
          const { msg: i, success: g, ...F } = o;
          return {
            ...F,
            rss_language: o.rss_language ? o.rss_language : b.Bhc,
          };
        }
        function K(o, i) {
          if (!i) return null;
          M(o);
          const g = H(i);
          return (
            o.setQueryData(U(g.clanAccountID), g),
            g.appid && o.setQueryData(nt(g.appid), g.clanAccountID),
            g.vanity_url &&
              o.setQueryData(at(g.vanity_url, "group"), g.clanAccountID),
            g
          );
        }
        function Y(o, i) {
          for (const g of i) K(o, g);
        }
        function j(o) {
          const i = (0, r.jE)();
          return (0, u.I)(p(o, i));
        }
        function p(o, i) {
          return (
            M(i),
            {
              queryKey: U(o != null ? o : null),
              queryFn: async () => (o ? K(i, await R(o)) : null),
              enabled: o !== void 0,
              select: N,
            }
          );
        }
        function C(o, i) {
          return (
            M(i),
            {
              queryKey: nt(o),
              queryFn: async () => {
                var g, F;
                return (F =
                  (g = K(i, await Q(o))) == null ? void 0 : g.clanAccountID) !=
                  null
                  ? F
                  : null;
              },
              enabled: !!o,
            }
          );
        }
        function _(o, i, g = "group") {
          return (
            M(i),
            {
              queryKey: at(o, g),
              queryFn: async () => {
                var F, st;
                if (g == "store") {
                  const gt = i.getQueryData(at(o, "group"));
                  if (gt) return gt;
                }
                const ot = g == "store" ? await G(o) : await L(o);
                return (st =
                  (F = K(i, ot)) == null ? void 0 : F.clanAccountID) != null
                  ? st
                  : null;
              },
              enabled: !!o,
            }
          );
        }
        function T(o) {
          var i;
          return o.isPending ? void 0 : (i = o.data) != null ? i : null;
        }
        function v(o) {
          return j(o.BIsClanAccount() ? o.GetAccountID() : void 0);
        }
        function W(o) {
          const i = useQueryClient(),
            g = useQuery(C(o, i));
          return j(o ? T(g) : void 0);
        }
        function q(o, i = "group") {
          const g = (0, r.jE)(),
            F = (0, u.I)(_(o, g, i));
          return j(o ? T(F) : void 0);
        }
        function mt(o, i) {
          var g;
          if (o) return (g = N(i.getQueryData(U(o)))) != null ? g : void 0;
        }
        function S(o, i) {
          if (o) return mt(i.getQueryData(nt(o)), i);
        }
        function f(o, i, g) {
          if (!o) return;
          const F = g ? [g] : ["store", "group"];
          for (const st of F) {
            const ot = mt(i.getQueryData(at(o, st)), i);
            if (ot) return ot;
          }
        }
        async function I(o, i) {
          return o ? N(await i.fetchQuery(p(o, i))) : null;
        }
        async function x(o, i) {
          return o ? I(await i.fetchQuery(C(o, i)), i) : null;
        }
        async function m(o, i, g = "group") {
          return o ? I(await i.fetchQuery(_(o, i, g)), i) : null;
        }
      },
      18025: (Bt, it, B) => {
        B.d(it, { $z: () => L, HX: () => at, Hi: () => U });
        var b = B(80613),
          d = B.n(b),
          r = B(75245),
          u = Object.defineProperty,
          s = ($, c, M) =>
            c in $
              ? u($, c, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: M,
                })
              : ($[c] = M),
          l = ($, c, M) => s($, typeof c != "symbol" ? c + "" : c, M);
        function Q($) {
          return "unknown ELineItemPurchaseNotice ( " + $ + " )";
        }
        const R = class ee extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(c = null) {
            super(),
              ee.prototype.accountid_giftee || r.Sg(ee.M()),
              b.Message.initialize(this, c, 0, -1, void 0, null);
          }
          static M() {
            return (
              ee.sm_m ||
                (ee.sm_m = {
                  proto: ee,
                  fields: {
                    accountid_giftee: {
                      n: 1,
                      br: r.qM.readInt32,
                      bw: r.gp.writeInt32,
                    },
                    gift_message: { n: 2, c: O },
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
              ee.sm_m
            );
          }
          static MBF() {
            return ee.sm_mbf || (ee.sm_mbf = r.w0(ee.M())), ee.sm_mbf;
          }
          toObject(c = !1) {
            return ee.toObject(c, this);
          }
          static toObject(c, M) {
            return r.BT(ee.M(), c, M);
          }
          static fromObject(c) {
            return r.Uq(ee.M(), c);
          }
          static deserializeBinary(c) {
            let M = new (d().BinaryReader)(c),
              D = new ee();
            return ee.deserializeBinaryFromReader(D, M);
          }
          static deserializeBinaryFromReader(c, M) {
            return r.zj(ee.MBF(), c, M);
          }
          serializeBinary() {
            var c = new (d().BinaryWriter)();
            return ee.serializeBinaryToWriter(this, c), c.getResultBuffer();
          }
          static serializeBinaryToWriter(c, M) {
            r.i0(ee.M(), c, M);
          }
          serializeBase64String() {
            var c = new (d().BinaryWriter)();
            return (
              ee.serializeBinaryToWriter(this, c), c.getResultBase64String()
            );
          }
          getClassName() {
            return "CartGiftInfo";
          }
        };
        l(R, "sm_m"), l(R, "sm_mbf");
        let L = R;
        const G = class te extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(c = null) {
            super(),
              te.prototype.gifteename || r.Sg(te.M()),
              b.Message.initialize(this, c, 0, -1, void 0, null);
          }
          static M() {
            return (
              te.sm_m ||
                (te.sm_m = {
                  proto: te,
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
              te.sm_m
            );
          }
          static MBF() {
            return te.sm_mbf || (te.sm_mbf = r.w0(te.M())), te.sm_mbf;
          }
          toObject(c = !1) {
            return te.toObject(c, this);
          }
          static toObject(c, M) {
            return r.BT(te.M(), c, M);
          }
          static fromObject(c) {
            return r.Uq(te.M(), c);
          }
          static deserializeBinary(c) {
            let M = new (d().BinaryReader)(c),
              D = new te();
            return te.deserializeBinaryFromReader(D, M);
          }
          static deserializeBinaryFromReader(c, M) {
            return r.zj(te.MBF(), c, M);
          }
          serializeBinary() {
            var c = new (d().BinaryWriter)();
            return te.serializeBinaryToWriter(this, c), c.getResultBuffer();
          }
          static serializeBinaryToWriter(c, M) {
            r.i0(te.M(), c, M);
          }
          serializeBase64String() {
            var c = new (d().BinaryWriter)();
            return (
              te.serializeBinaryToWriter(this, c), c.getResultBase64String()
            );
          }
          getClassName() {
            return "CartGiftMessage";
          }
        };
        l(G, "sm_m"), l(G, "sm_mbf");
        let O = G;
        const A = class re extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(c = null) {
            super(),
              re.prototype.amount_in_cents || r.Sg(re.M()),
              b.Message.initialize(this, c, 0, -1, void 0, null);
          }
          static M() {
            return (
              re.sm_m ||
                (re.sm_m = {
                  proto: re,
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
              re.sm_m
            );
          }
          static MBF() {
            return re.sm_mbf || (re.sm_mbf = r.w0(re.M())), re.sm_mbf;
          }
          toObject(c = !1) {
            return re.toObject(c, this);
          }
          static toObject(c, M) {
            return r.BT(re.M(), c, M);
          }
          static fromObject(c) {
            return r.Uq(re.M(), c);
          }
          static deserializeBinary(c) {
            let M = new (d().BinaryReader)(c),
              D = new re();
            return re.deserializeBinaryFromReader(D, M);
          }
          static deserializeBinaryFromReader(c, M) {
            return r.zj(re.MBF(), c, M);
          }
          serializeBinary() {
            var c = new (d().BinaryWriter)();
            return re.serializeBinaryToWriter(this, c), c.getResultBuffer();
          }
          static serializeBinaryToWriter(c, M) {
            r.i0(re.M(), c, M);
          }
          serializeBase64String() {
            var c = new (d().BinaryWriter)();
            return (
              re.serializeBinaryToWriter(this, c), c.getResultBase64String()
            );
          }
          getClassName() {
            return "CartAmount";
          }
        };
        l(A, "sm_m"), l(A, "sm_mbf");
        let U = A;
        const nt = class ie extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(c = null) {
            super(),
              ie.prototype.couponid || r.Sg(ie.M()),
              b.Message.initialize(this, c, 0, -1, void 0, null);
          }
          static M() {
            return (
              ie.sm_m ||
                (ie.sm_m = {
                  proto: ie,
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
              ie.sm_m
            );
          }
          static MBF() {
            return ie.sm_mbf || (ie.sm_mbf = r.w0(ie.M())), ie.sm_mbf;
          }
          toObject(c = !1) {
            return ie.toObject(c, this);
          }
          static toObject(c, M) {
            return r.BT(ie.M(), c, M);
          }
          static fromObject(c) {
            return r.Uq(ie.M(), c);
          }
          static deserializeBinary(c) {
            let M = new (d().BinaryReader)(c),
              D = new ie();
            return ie.deserializeBinaryFromReader(D, M);
          }
          static deserializeBinaryFromReader(c, M) {
            return r.zj(ie.MBF(), c, M);
          }
          serializeBinary() {
            var c = new (d().BinaryWriter)();
            return ie.serializeBinaryToWriter(this, c), c.getResultBuffer();
          }
          static serializeBinaryToWriter(c, M) {
            r.i0(ie.M(), c, M);
          }
          serializeBase64String() {
            var c = new (d().BinaryWriter)();
            return (
              ie.serializeBinaryToWriter(this, c), c.getResultBase64String()
            );
          }
          getClassName() {
            return "CartCoupon";
          }
        };
        l(nt, "sm_m"), l(nt, "sm_mbf");
        let at = nt;
      },
      33512: (Bt, it, B) => {
        B.d(it, { Wv: () => b });
        var b = {};
        B.r(b),
          B.d(b, {
            bM: () => R,
            Nq: () => O,
            xc: () => nt,
            GH: () => G,
            Jb: () => L,
            Jn: () => A,
            Mv: () => U,
            yl: () => at,
            _x: () => Q,
          });
        var d = B(80613),
          r = B.n(d),
          u = B(75245),
          s = B(35038);
        const l = 0,
          Q = 1,
          R = 2,
          L = 4,
          G = 8,
          O = 16,
          A = 32,
          U = 64,
          nt = 128,
          at = 256;
        var $ = Object.defineProperty,
          c = (o, i, g) =>
            i in o
              ? $(o, i, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: g,
                })
              : (o[i] = g),
          M = (o, i, g) => c(o, typeof i != "symbol" ? i + "" : i, g);
        function D(o) {
          return "unknown EClanAccountFlags ( " + o + " )";
        }
        const N = class ne extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              ne.prototype.steamid || u.Sg(ne.M()),
              d.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static M() {
            return (
              ne.sm_m ||
                (ne.sm_m = {
                  proto: ne,
                  fields: {
                    steamid: {
                      n: 1,
                      br: u.qM.readFixed64String,
                      bw: u.gp.writeFixed64String,
                    },
                    accept: { n: 2, br: u.qM.readBool, bw: u.gp.writeBool },
                  },
                }),
              ne.sm_m
            );
          }
          static MBF() {
            return ne.sm_mbf || (ne.sm_mbf = u.w0(ne.M())), ne.sm_mbf;
          }
          toObject(i = !1) {
            return ne.toObject(i, this);
          }
          static toObject(i, g) {
            return u.BT(ne.M(), i, g);
          }
          static fromObject(i) {
            return u.Uq(ne.M(), i);
          }
          static deserializeBinary(i) {
            let g = new (r().BinaryReader)(i),
              F = new ne();
            return ne.deserializeBinaryFromReader(F, g);
          }
          static deserializeBinaryFromReader(i, g) {
            return u.zj(ne.MBF(), i, g);
          }
          serializeBinary() {
            var i = new (r().BinaryWriter)();
            return ne.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, g) {
            u.i0(ne.M(), i, g);
          }
          serializeBase64String() {
            var i = new (r().BinaryWriter)();
            return (
              ne.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CClan_RespondToClanInvite_Request";
          }
        };
        M(N, "sm_m"), M(N, "sm_mbf");
        let H = N;
        class K extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(), d.Message.initialize(this, i, 0, -1, void 0, null);
          }
          toObject(i = !1) {
            return K.toObject(i, this);
          }
          static toObject(i, g) {
            return i ? { $jspbMessageInstance: g } : {};
          }
          static fromObject(i) {
            return new K();
          }
          static deserializeBinary(i) {
            let g = new (r().BinaryReader)(i),
              F = new K();
            return K.deserializeBinaryFromReader(F, g);
          }
          static deserializeBinaryFromReader(i, g) {
            return i;
          }
          serializeBinary() {
            var i = new (r().BinaryWriter)();
            return K.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, g) {}
          serializeBase64String() {
            var i = new (r().BinaryWriter)();
            return (
              K.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CClan_RespondToClanInvite_Response";
          }
        }
        const Y = class ae extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              ae.prototype.steamid || u.Sg(ae.M()),
              d.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static M() {
            return (
              ae.sm_m ||
                (ae.sm_m = {
                  proto: ae,
                  fields: {
                    steamid: {
                      n: 1,
                      br: u.qM.readFixed64String,
                      bw: u.gp.writeFixed64String,
                    },
                    rtime_oldest_date: {
                      n: 2,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                  },
                }),
              ae.sm_m
            );
          }
          static MBF() {
            return ae.sm_mbf || (ae.sm_mbf = u.w0(ae.M())), ae.sm_mbf;
          }
          toObject(i = !1) {
            return ae.toObject(i, this);
          }
          static toObject(i, g) {
            return u.BT(ae.M(), i, g);
          }
          static fromObject(i) {
            return u.Uq(ae.M(), i);
          }
          static deserializeBinary(i) {
            let g = new (r().BinaryReader)(i),
              F = new ae();
            return ae.deserializeBinaryFromReader(F, g);
          }
          static deserializeBinaryFromReader(i, g) {
            return u.zj(ae.MBF(), i, g);
          }
          serializeBinary() {
            var i = new (r().BinaryWriter)();
            return ae.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, g) {
            u.i0(ae.M(), i, g);
          }
          serializeBase64String() {
            var i = new (r().BinaryWriter)();
            return (
              ae.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CClan_GetDraftAndRecentPartnerEventSnippet_Request";
          }
        };
        M(Y, "sm_m"), M(Y, "sm_mbf");
        let j = Y;
        const p = class se extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              se.prototype.snippets || u.Sg(se.M()),
              d.Message.initialize(this, i, 0, -1, [1], null);
          }
          static M() {
            return (
              se.sm_m ||
                (se.sm_m = {
                  proto: se,
                  fields: { snippets: { n: 1, c: T, r: !0, q: !0 } },
                }),
              se.sm_m
            );
          }
          static MBF() {
            return se.sm_mbf || (se.sm_mbf = u.w0(se.M())), se.sm_mbf;
          }
          toObject(i = !1) {
            return se.toObject(i, this);
          }
          static toObject(i, g) {
            return u.BT(se.M(), i, g);
          }
          static fromObject(i) {
            return u.Uq(se.M(), i);
          }
          static deserializeBinary(i) {
            let g = new (r().BinaryReader)(i),
              F = new se();
            return se.deserializeBinaryFromReader(F, g);
          }
          static deserializeBinaryFromReader(i, g) {
            return u.zj(se.MBF(), i, g);
          }
          serializeBinary() {
            var i = new (r().BinaryWriter)();
            return se.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, g) {
            u.i0(se.M(), i, g);
          }
          serializeBase64String() {
            var i = new (r().BinaryWriter)();
            return (
              se.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CClan_GetDraftAndRecentPartnerEventSnippet_Response";
          }
        };
        M(p, "sm_m"), M(p, "sm_mbf");
        let C = p;
        const _ = class oe extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              oe.prototype.gid || u.Sg(oe.M()),
              d.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static M() {
            return (
              oe.sm_m ||
                (oe.sm_m = {
                  proto: oe,
                  fields: {
                    gid: {
                      n: 1,
                      br: u.qM.readFixed64String,
                      bw: u.gp.writeFixed64String,
                    },
                    announcement_gid: {
                      n: 2,
                      br: u.qM.readFixed64String,
                      bw: u.gp.writeFixed64String,
                    },
                    hidden: { n: 3, br: u.qM.readBool, bw: u.gp.writeBool },
                    published: { n: 4, br: u.qM.readBool, bw: u.gp.writeBool },
                    rtime32_start_time: {
                      n: 5,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                    event_name: {
                      n: 6,
                      br: u.qM.readString,
                      bw: u.gp.writeString,
                    },
                    event_type: { n: 7, br: u.qM.readEnum, bw: u.gp.writeEnum },
                  },
                }),
              oe.sm_m
            );
          }
          static MBF() {
            return oe.sm_mbf || (oe.sm_mbf = u.w0(oe.M())), oe.sm_mbf;
          }
          toObject(i = !1) {
            return oe.toObject(i, this);
          }
          static toObject(i, g) {
            return u.BT(oe.M(), i, g);
          }
          static fromObject(i) {
            return u.Uq(oe.M(), i);
          }
          static deserializeBinary(i) {
            let g = new (r().BinaryReader)(i),
              F = new oe();
            return oe.deserializeBinaryFromReader(F, g);
          }
          static deserializeBinaryFromReader(i, g) {
            return u.zj(oe.MBF(), i, g);
          }
          serializeBinary() {
            var i = new (r().BinaryWriter)();
            return oe.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, g) {
            u.i0(oe.M(), i, g);
          }
          serializeBase64String() {
            var i = new (r().BinaryWriter)();
            return (
              oe.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CClan_GetDraftAndRecentPartnerEventSnippet_Response_CEventSnippetData";
          }
        };
        M(_, "sm_m"), M(_, "sm_mbf");
        let T = _;
        const v = class le extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              le.prototype.requests || u.Sg(le.M()),
              d.Message.initialize(this, i, 0, -1, [1], null);
          }
          static M() {
            return (
              le.sm_m ||
                (le.sm_m = {
                  proto: le,
                  fields: {
                    requests: { n: 1, c: mt, r: !0, q: !0 },
                    cursor: { n: 2, br: u.qM.readString, bw: u.gp.writeString },
                    count: {
                      n: 3,
                      d: 100,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                  },
                }),
              le.sm_m
            );
          }
          static MBF() {
            return le.sm_mbf || (le.sm_mbf = u.w0(le.M())), le.sm_mbf;
          }
          toObject(i = !1) {
            return le.toObject(i, this);
          }
          static toObject(i, g) {
            return u.BT(le.M(), i, g);
          }
          static fromObject(i) {
            return u.Uq(le.M(), i);
          }
          static deserializeBinary(i) {
            let g = new (r().BinaryReader)(i),
              F = new le();
            return le.deserializeBinaryFromReader(F, g);
          }
          static deserializeBinaryFromReader(i, g) {
            return u.zj(le.MBF(), i, g);
          }
          serializeBinary() {
            var i = new (r().BinaryWriter)();
            return le.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, g) {
            u.i0(le.M(), i, g);
          }
          serializeBase64String() {
            var i = new (r().BinaryWriter)();
            return (
              le.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CClan_GetPartnerEventsByBuildIDRange_Request";
          }
        };
        M(v, "sm_m"), M(v, "sm_mbf");
        let W = v;
        const q = class ue extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              ue.prototype.appid || u.Sg(ue.M()),
              d.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static M() {
            return (
              ue.sm_m ||
                (ue.sm_m = {
                  proto: ue,
                  fields: {
                    appid: { n: 1, br: u.qM.readUint32, bw: u.gp.writeUint32 },
                    start_build_id: {
                      n: 2,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                    end_build_id: {
                      n: 3,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                    branch: { n: 4, br: u.qM.readString, bw: u.gp.writeString },
                  },
                }),
              ue.sm_m
            );
          }
          static MBF() {
            return ue.sm_mbf || (ue.sm_mbf = u.w0(ue.M())), ue.sm_mbf;
          }
          toObject(i = !1) {
            return ue.toObject(i, this);
          }
          static toObject(i, g) {
            return u.BT(ue.M(), i, g);
          }
          static fromObject(i) {
            return u.Uq(ue.M(), i);
          }
          static deserializeBinary(i) {
            let g = new (r().BinaryReader)(i),
              F = new ue();
            return ue.deserializeBinaryFromReader(F, g);
          }
          static deserializeBinaryFromReader(i, g) {
            return u.zj(ue.MBF(), i, g);
          }
          serializeBinary() {
            var i = new (r().BinaryWriter)();
            return ue.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, g) {
            u.i0(ue.M(), i, g);
          }
          serializeBase64String() {
            var i = new (r().BinaryWriter)();
            return (
              ue.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CClan_GetPartnerEventsByBuildIDRange_Request_PatchNoteRange";
          }
        };
        M(q, "sm_m"), M(q, "sm_mbf");
        let mt = q;
        const S = class me extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              me.prototype.matches || u.Sg(me.M()),
              d.Message.initialize(this, i, 0, -1, [1], null);
          }
          static M() {
            return (
              me.sm_m ||
                (me.sm_m = {
                  proto: me,
                  fields: {
                    matches: { n: 1, c: x, r: !0, q: !0 },
                    num_total_results: {
                      n: 2,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                    next_cursor: {
                      n: 3,
                      br: u.qM.readString,
                      bw: u.gp.writeString,
                    },
                  },
                }),
              me.sm_m
            );
          }
          static MBF() {
            return me.sm_mbf || (me.sm_mbf = u.w0(me.M())), me.sm_mbf;
          }
          toObject(i = !1) {
            return me.toObject(i, this);
          }
          static toObject(i, g) {
            return u.BT(me.M(), i, g);
          }
          static fromObject(i) {
            return u.Uq(me.M(), i);
          }
          static deserializeBinary(i) {
            let g = new (r().BinaryReader)(i),
              F = new me();
            return me.deserializeBinaryFromReader(F, g);
          }
          static deserializeBinaryFromReader(i, g) {
            return u.zj(me.MBF(), i, g);
          }
          serializeBinary() {
            var i = new (r().BinaryWriter)();
            return me.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, g) {
            u.i0(me.M(), i, g);
          }
          serializeBase64String() {
            var i = new (r().BinaryWriter)();
            return (
              me.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CClan_GetPartnerEventsByBuildIDRange_Response";
          }
        };
        M(S, "sm_m"), M(S, "sm_mbf");
        let f = S;
        const I = class ce extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              ce.prototype.appid || u.Sg(ce.M()),
              d.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static M() {
            return (
              ce.sm_m ||
                (ce.sm_m = {
                  proto: ce,
                  fields: {
                    appid: { n: 1, br: u.qM.readUint32, bw: u.gp.writeUint32 },
                    build_id: {
                      n: 2,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                    branch: { n: 3, br: u.qM.readString, bw: u.gp.writeString },
                    clan_event_gid: {
                      n: 4,
                      br: u.qM.readFixed64String,
                      bw: u.gp.writeFixed64String,
                    },
                    clan_account_id: {
                      n: 5,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                  },
                }),
              ce.sm_m
            );
          }
          static MBF() {
            return ce.sm_mbf || (ce.sm_mbf = u.w0(ce.M())), ce.sm_mbf;
          }
          toObject(i = !1) {
            return ce.toObject(i, this);
          }
          static toObject(i, g) {
            return u.BT(ce.M(), i, g);
          }
          static fromObject(i) {
            return u.Uq(ce.M(), i);
          }
          static deserializeBinary(i) {
            let g = new (r().BinaryReader)(i),
              F = new ce();
            return ce.deserializeBinaryFromReader(F, g);
          }
          static deserializeBinaryFromReader(i, g) {
            return u.zj(ce.MBF(), i, g);
          }
          serializeBinary() {
            var i = new (r().BinaryWriter)();
            return ce.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, g) {
            u.i0(ce.M(), i, g);
          }
          serializeBase64String() {
            var i = new (r().BinaryWriter)();
            return (
              ce.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CClan_GetPartnerEventsByBuildIDRange_Response_PatchNotesDesc";
          }
        };
        M(I, "sm_m"), M(I, "sm_mbf");
        let x = I;
        var m;
        ((o) => {
          function i(st, ot, gt) {
            return st.SendMsg(
              "Clan.RespondToClanInvite#1",
              (0, s.I8)(H, ot, gt),
              K,
              { ePrivilege: 1 },
            );
          }
          o.RespondToClanInvite = i;
          function g(st, ot, gt) {
            return st.SendMsg(
              "Clan.GetDraftAndRecentPartnerEventSnippet#1",
              (0, s.I8)(j, ot, gt),
              C,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          o.GetDraftAndRecentPartnerEventSnippet = g;
          function F(st, ot, gt) {
            return st.SendMsg(
              "Clan.GetPartnerEventsByBuildIDRange#1",
              (0, s.I8)(W, ot, gt),
              f,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }
          o.GetPartnerEventsByBuildIDRange = F;
        })(m || (m = {}));
      },
      36053: (Bt, it, B) => {
        var b = B(80613),
          d = B.n(b),
          r = B(75245),
          u = B(35038),
          s = B(18025),
          l = Object.defineProperty,
          Q = (ut, e, n) =>
            e in ut
              ? l(ut, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: n,
                })
              : (ut[e] = n),
          R = (ut, e, n) => Q(ut, typeof e != "symbol" ? e + "" : e, n);
        const L = class de extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              de.prototype.steamid_requester || r.Sg(de.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              de.sm_m ||
                (de.sm_m = {
                  proto: de,
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
              de.sm_m
            );
          }
          static MBF() {
            return de.sm_mbf || (de.sm_mbf = r.w0(de.M())), de.sm_mbf;
          }
          toObject(e = !1) {
            return de.toObject(e, this);
          }
          static toObject(e, n) {
            return r.BT(de.M(), e, n);
          }
          static fromObject(e) {
            return r.Uq(de.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (d().BinaryReader)(e),
              z = new de();
            return de.deserializeBinaryFromReader(z, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return r.zj(de.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return de.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            r.i0(de.M(), e, n);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              de.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_CreateNew_Request";
          }
        };
        R(L, "sm_m"), R(L, "sm_mbf");
        let G = L;
        const O = class pe extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              pe.prototype.gidshoppingcart || r.Sg(pe.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              pe.sm_m ||
                (pe.sm_m = {
                  proto: pe,
                  fields: {
                    gidshoppingcart: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
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
          static toObject(e, n) {
            return r.BT(pe.M(), e, n);
          }
          static fromObject(e) {
            return r.Uq(pe.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (d().BinaryReader)(e),
              z = new pe();
            return pe.deserializeBinaryFromReader(z, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return r.zj(pe.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            r.i0(pe.M(), e, n);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              pe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_CreateNew_Response";
          }
        };
        R(O, "sm_m"), R(O, "sm_mbf");
        let A = O;
        const U = class ge extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ge.prototype.amount || r.Sg(ge.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              ge.sm_m ||
                (ge.sm_m = {
                  proto: ge,
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
              ge.sm_m
            );
          }
          static MBF() {
            return ge.sm_mbf || (ge.sm_mbf = r.w0(ge.M())), ge.sm_mbf;
          }
          toObject(e = !1) {
            return ge.toObject(e, this);
          }
          static toObject(e, n) {
            return r.BT(ge.M(), e, n);
          }
          static fromObject(e) {
            return r.Uq(ge.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (d().BinaryReader)(e),
              z = new ge();
            return ge.deserializeBinaryFromReader(z, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return r.zj(ge.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            r.i0(ge.M(), e, n);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              ge.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_Amount";
          }
        };
        R(U, "sm_m"), R(U, "sm_mbf");
        let nt = U;
        const at = class fe extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              fe.prototype.packageid || r.Sg(fe.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              fe.sm_m ||
                (fe.sm_m = {
                  proto: fe,
                  fields: {
                    packageid: {
                      n: 1,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    costwhenadded: { n: 2, c: nt },
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
                    gift_info: { n: 6, c: s.$z },
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
          static toObject(e, n) {
            return r.BT(fe.M(), e, n);
          }
          static fromObject(e) {
            return r.Uq(fe.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (d().BinaryReader)(e),
              z = new fe();
            return fe.deserializeBinaryFromReader(z, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return r.zj(fe.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            r.i0(fe.M(), e, n);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              fe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_PackageItem";
          }
        };
        R(at, "sm_m"), R(at, "sm_mbf");
        let $ = at;
        const c = class Be extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Be.prototype.walletcredit || r.Sg(Be.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Be.sm_m ||
                (Be.sm_m = {
                  proto: Be,
                  fields: { walletcredit: { n: 1, c: nt } },
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
          static toObject(e, n) {
            return r.BT(Be.M(), e, n);
          }
          static fromObject(e) {
            return r.Uq(Be.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (d().BinaryReader)(e),
              z = new Be();
            return Be.deserializeBinaryFromReader(z, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return r.zj(Be.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Be.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            r.i0(Be.M(), e, n);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Be.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_WalletCreditItem";
          }
        };
        R(c, "sm_m"), R(c, "sm_mbf");
        let M = c;
        const D = class be extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              be.prototype.couponid || r.Sg(be.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              be.sm_m ||
                (be.sm_m = {
                  proto: be,
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
              be.sm_m
            );
          }
          static MBF() {
            return be.sm_mbf || (be.sm_mbf = r.w0(be.M())), be.sm_mbf;
          }
          toObject(e = !1) {
            return be.toObject(e, this);
          }
          static toObject(e, n) {
            return r.BT(be.M(), e, n);
          }
          static fromObject(e) {
            return r.Uq(be.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (d().BinaryReader)(e),
              z = new be();
            return be.deserializeBinaryFromReader(z, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return r.zj(be.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return be.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            r.i0(be.M(), e, n);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              be.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_CouponItem";
          }
        };
        R(D, "sm_m"), R(D, "sm_mbf");
        let N = D;
        const H = class ye extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ye.prototype.microtxnappid || r.Sg(ye.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              ye.sm_m ||
                (ye.sm_m = {
                  proto: ye,
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
              ye.sm_m
            );
          }
          static MBF() {
            return ye.sm_mbf || (ye.sm_mbf = r.w0(ye.M())), ye.sm_mbf;
          }
          toObject(e = !1) {
            return ye.toObject(e, this);
          }
          static toObject(e, n) {
            return r.BT(ye.M(), e, n);
          }
          static fromObject(e) {
            return r.Uq(ye.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (d().BinaryReader)(e),
              z = new ye();
            return ye.deserializeBinaryFromReader(z, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return r.zj(ye.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            r.i0(ye.M(), e, n);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              ye.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_MicroTxnAsset";
          }
        };
        R(H, "sm_m"), R(H, "sm_mbf");
        let K = H;
        const Y = class Me extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Me.prototype.bundleid || r.Sg(Me.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Me.sm_m ||
                (Me.sm_m = {
                  proto: Me,
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
                    gift_info: { n: 4, c: s.$z },
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
          static toObject(e, n) {
            return r.BT(Me.M(), e, n);
          }
          static fromObject(e) {
            return r.Uq(Me.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (d().BinaryReader)(e),
              z = new Me();
            return Me.deserializeBinaryFromReader(z, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return r.zj(Me.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Me.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            r.i0(Me.M(), e, n);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Me.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_BundleItem";
          }
        };
        R(Y, "sm_m"), R(Y, "sm_mbf");
        let j = Y;
        const p = class Ce extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ce.prototype.reward_id || r.Sg(Ce.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Ce.sm_m ||
                (Ce.sm_m = {
                  proto: Ce,
                  fields: {
                    reward_id: {
                      n: 1,
                      br: r.qM.readInt32,
                      bw: r.gp.writeInt32,
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
          static toObject(e, n) {
            return r.BT(Ce.M(), e, n);
          }
          static fromObject(e) {
            return r.Uq(Ce.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (d().BinaryReader)(e),
              z = new Ce();
            return Ce.deserializeBinaryFromReader(z, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return r.zj(Ce.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            r.i0(Ce.M(), e, n);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Ce.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_LoyaltyRewardItem";
          }
        };
        R(p, "sm_m"), R(p, "sm_mbf");
        let C = p;
        const _ = class k extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              k.prototype.gidparent || r.Sg(k.M()),
              b.Message.initialize(this, e, 0, -1, [2], null);
          }
          static M() {
            return (
              k.sm_m ||
                (k.sm_m = {
                  proto: k,
                  fields: {
                    gidparent: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    children: { n: 2, c: k, r: !0, q: !0 },
                  },
                }),
              k.sm_m
            );
          }
          static MBF() {
            return k.sm_mbf || (k.sm_mbf = r.w0(k.M())), k.sm_mbf;
          }
          toObject(e = !1) {
            return k.toObject(e, this);
          }
          static toObject(e, n) {
            return r.BT(k.M(), e, n);
          }
          static fromObject(e) {
            return r.Uq(k.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (d().BinaryReader)(e),
              z = new k();
            return k.deserializeBinaryFromReader(z, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return r.zj(k.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            r.i0(k.M(), e, n);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              k.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_RelationShip";
          }
        };
        R(_, "sm_m"), R(_, "sm_mbf");
        let T = _;
        const v = class we extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              we.prototype.couponid || r.Sg(we.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              we.sm_m ||
                (we.sm_m = {
                  proto: we,
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
              we.sm_m
            );
          }
          static MBF() {
            return we.sm_mbf || (we.sm_mbf = r.w0(we.M())), we.sm_mbf;
          }
          toObject(e = !1) {
            return we.toObject(e, this);
          }
          static toObject(e, n) {
            return r.BT(we.M(), e, n);
          }
          static fromObject(e) {
            return r.Uq(we.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (d().BinaryReader)(e),
              z = new we();
            return we.deserializeBinaryFromReader(z, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return r.zj(we.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return we.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            r.i0(we.M(), e, n);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              we.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_AvailableCoupon";
          }
        };
        R(v, "sm_m"), R(v, "sm_mbf");
        let W = v;
        const q = class Se extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Se.prototype.gidlineitem || r.Sg(Se.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Se.sm_m ||
                (Se.sm_m = {
                  proto: Se,
                  fields: {
                    gidlineitem: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    package_item: { n: 2, c: $ },
                    wallet_credit_item: { n: 3, c: M },
                    coupon_item: { n: 4, c: N },
                    micro_item: { n: 5, c: K },
                    bundle_item: { n: 7, c: j },
                    loyalty_item: { n: 8, c: C },
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
          static toObject(e, n) {
            return r.BT(Se.M(), e, n);
          }
          static fromObject(e) {
            return r.Uq(Se.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (d().BinaryReader)(e),
              z = new Se();
            return Se.deserializeBinaryFromReader(z, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return r.zj(Se.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Se.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            r.i0(Se.M(), e, n);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Se.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_Item";
          }
        };
        R(q, "sm_m"), R(q, "sm_mbf");
        let mt = q;
        const S = class he extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              he.prototype.coupons || r.Sg(he.M()),
              b.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              he.sm_m ||
                (he.sm_m = {
                  proto: he,
                  fields: { coupons: { n: 1, c: W, r: !0, q: !0 } },
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
          static toObject(e, n) {
            return r.BT(he.M(), e, n);
          }
          static fromObject(e) {
            return r.Uq(he.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (d().BinaryReader)(e),
              z = new he();
            return he.deserializeBinaryFromReader(z, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return r.zj(he.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return he.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            r.i0(he.M(), e, n);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              he.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_Potentials";
          }
        };
        R(S, "sm_m"), R(S, "sm_mbf");
        let f = S;
        const I = class Re extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Re.prototype.gidshoppingcart || r.Sg(Re.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
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
          static toObject(e, n) {
            return r.BT(Re.M(), e, n);
          }
          static fromObject(e) {
            return r.Uq(Re.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (d().BinaryReader)(e),
              z = new Re();
            return Re.deserializeBinaryFromReader(z, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return r.zj(Re.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Re.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            r.i0(Re.M(), e, n);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Re.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_GetContents_Request";
          }
        };
        R(I, "sm_m"), R(I, "sm_mbf");
        let x = I;
        const m = class ve extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ve.prototype.lineitems || r.Sg(ve.M()),
              b.Message.initialize(this, e, 0, -1, [1, 2], null);
          }
          static M() {
            return (
              ve.sm_m ||
                (ve.sm_m = {
                  proto: ve,
                  fields: {
                    lineitems: { n: 1, c: mt, r: !0, q: !0 },
                    treeview: { n: 2, c: T, r: !0, q: !0 },
                    potentials: { n: 3, c: f },
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
          static toObject(e, n) {
            return r.BT(ve.M(), e, n);
          }
          static fromObject(e) {
            return r.Uq(ve.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (d().BinaryReader)(e),
              z = new ve();
            return ve.deserializeBinaryFromReader(z, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return r.zj(ve.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            r.i0(ve.M(), e, n);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              ve.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_Contents";
          }
        };
        R(m, "sm_m"), R(m, "sm_mbf");
        let o = m;
        const i = class ze extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ze.prototype.gidshoppingcart || r.Sg(ze.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              ze.sm_m ||
                (ze.sm_m = {
                  proto: ze,
                  fields: {
                    gidshoppingcart: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    contents: { n: 2, c: o },
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
              ze.sm_m
            );
          }
          static MBF() {
            return ze.sm_mbf || (ze.sm_mbf = r.w0(ze.M())), ze.sm_mbf;
          }
          toObject(e = !1) {
            return ze.toObject(e, this);
          }
          static toObject(e, n) {
            return r.BT(ze.M(), e, n);
          }
          static fromObject(e) {
            return r.Uq(ze.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (d().BinaryReader)(e),
              z = new ze();
            return ze.deserializeBinaryFromReader(z, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return r.zj(ze.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            r.i0(ze.M(), e, n);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              ze.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_GetContents_Response";
          }
        };
        R(i, "sm_m"), R(i, "sm_mbf");
        let g = i;
        const F = class Ie extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ie.prototype.gidshoppingcart || r.Sg(Ie.M()),
              b.Message.initialize(this, e, 0, -1, [4], null);
          }
          static M() {
            return (
              Ie.sm_m ||
                (Ie.sm_m = {
                  proto: Ie,
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
                    cart_items: { n: 4, c: $, r: !0, q: !0 },
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
              Ie.sm_m
            );
          }
          static MBF() {
            return Ie.sm_mbf || (Ie.sm_mbf = r.w0(Ie.M())), Ie.sm_mbf;
          }
          toObject(e = !1) {
            return Ie.toObject(e, this);
          }
          static toObject(e, n) {
            return r.BT(Ie.M(), e, n);
          }
          static fromObject(e) {
            return r.Uq(Ie.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (d().BinaryReader)(e),
              z = new Ie();
            return Ie.deserializeBinaryFromReader(z, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return r.zj(Ie.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            r.i0(Ie.M(), e, n);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Ie.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_AddPackages_Request";
          }
        };
        R(F, "sm_m"), R(F, "sm_mbf");
        let st = F;
        const ot = class _e extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              _e.prototype.gidshoppingcart || r.Sg(_e.M()),
              b.Message.initialize(this, e, 0, -1, [3], null);
          }
          static M() {
            return (
              _e.sm_m ||
                (_e.sm_m = {
                  proto: _e,
                  fields: {
                    gidshoppingcart: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    contents: { n: 2, c: o },
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
              _e.sm_m
            );
          }
          static MBF() {
            return _e.sm_mbf || (_e.sm_mbf = r.w0(_e.M())), _e.sm_mbf;
          }
          toObject(e = !1) {
            return _e.toObject(e, this);
          }
          static toObject(e, n) {
            return r.BT(_e.M(), e, n);
          }
          static fromObject(e) {
            return r.Uq(_e.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (d().BinaryReader)(e),
              z = new _e();
            return _e.deserializeBinaryFromReader(z, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return r.zj(_e.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return _e.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            r.i0(_e.M(), e, n);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              _e.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_AddPackages_Response";
          }
        };
        R(ot, "sm_m"), R(ot, "sm_mbf");
        let gt = ot;
        const yt = class Te extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Te.prototype.gidshoppingcart || r.Sg(Te.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Te.sm_m ||
                (Te.sm_m = {
                  proto: Te,
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
              Te.sm_m
            );
          }
          static MBF() {
            return Te.sm_mbf || (Te.sm_mbf = r.w0(Te.M())), Te.sm_mbf;
          }
          toObject(e = !1) {
            return Te.toObject(e, this);
          }
          static toObject(e, n) {
            return r.BT(Te.M(), e, n);
          }
          static fromObject(e) {
            return r.Uq(Te.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (d().BinaryReader)(e),
              z = new Te();
            return Te.deserializeBinaryFromReader(z, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return r.zj(Te.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Te.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            r.i0(Te.M(), e, n);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Te.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_UpdatePackageQuantity_Request";
          }
        };
        R(yt, "sm_m"), R(yt, "sm_mbf");
        let ft = yt;
        const V = class We extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              We.prototype.gidshoppingcart || r.Sg(We.M()),
              b.Message.initialize(this, e, 0, -1, [3], null);
          }
          static M() {
            return (
              We.sm_m ||
                (We.sm_m = {
                  proto: We,
                  fields: {
                    gidshoppingcart: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    contents: { n: 2, c: o },
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
              We.sm_m
            );
          }
          static MBF() {
            return We.sm_mbf || (We.sm_mbf = r.w0(We.M())), We.sm_mbf;
          }
          toObject(e = !1) {
            return We.toObject(e, this);
          }
          static toObject(e, n) {
            return r.BT(We.M(), e, n);
          }
          static fromObject(e) {
            return r.Uq(We.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (d().BinaryReader)(e),
              z = new We();
            return We.deserializeBinaryFromReader(z, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return r.zj(We.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return We.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            r.i0(We.M(), e, n);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              We.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_UpdatePackageQuantity_Response";
          }
        };
        R(V, "sm_m"), R(V, "sm_mbf");
        let J = V;
        const wt = class Ae extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ae.prototype.gidshoppingcart || r.Sg(Ae.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Ae.sm_m ||
                (Ae.sm_m = {
                  proto: Ae,
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
                    gift_info: { n: 8, c: s.$z },
                  },
                }),
              Ae.sm_m
            );
          }
          static MBF() {
            return Ae.sm_mbf || (Ae.sm_mbf = r.w0(Ae.M())), Ae.sm_mbf;
          }
          toObject(e = !1) {
            return Ae.toObject(e, this);
          }
          static toObject(e, n) {
            return r.BT(Ae.M(), e, n);
          }
          static fromObject(e) {
            return r.Uq(Ae.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (d().BinaryReader)(e),
              z = new Ae();
            return Ae.deserializeBinaryFromReader(z, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return r.zj(Ae.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            r.i0(Ae.M(), e, n);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Ae.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_AddBundle_Request";
          }
        };
        R(wt, "sm_m"), R(wt, "sm_mbf");
        let At = wt;
        const ht = class Fe extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Fe.prototype.contents || r.Sg(Fe.M()),
              b.Message.initialize(this, e, 0, -1, [2], null);
          }
          static M() {
            return (
              Fe.sm_m ||
                (Fe.sm_m = {
                  proto: Fe,
                  fields: {
                    contents: { n: 1, c: o },
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
              Fe.sm_m
            );
          }
          static MBF() {
            return Fe.sm_mbf || (Fe.sm_mbf = r.w0(Fe.M())), Fe.sm_mbf;
          }
          toObject(e = !1) {
            return Fe.toObject(e, this);
          }
          static toObject(e, n) {
            return r.BT(Fe.M(), e, n);
          }
          static fromObject(e) {
            return r.Uq(Fe.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (d().BinaryReader)(e),
              z = new Fe();
            return Fe.deserializeBinaryFromReader(z, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return r.zj(Fe.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            r.i0(Fe.M(), e, n);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Fe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_AddBundle_Response";
          }
        };
        R(ht, "sm_m"), R(ht, "sm_mbf");
        let Rt = ht;
        const lt = class Pe extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Pe.prototype.gidshoppingcart || r.Sg(Pe.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Pe.sm_m ||
                (Pe.sm_m = {
                  proto: Pe,
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
                    gift_info: { n: 3, c: s.$z },
                  },
                }),
              Pe.sm_m
            );
          }
          static MBF() {
            return Pe.sm_mbf || (Pe.sm_mbf = r.w0(Pe.M())), Pe.sm_mbf;
          }
          toObject(e = !1) {
            return Pe.toObject(e, this);
          }
          static toObject(e, n) {
            return r.BT(Pe.M(), e, n);
          }
          static fromObject(e) {
            return r.Uq(Pe.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (d().BinaryReader)(e),
              z = new Pe();
            return Pe.deserializeBinaryFromReader(z, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return r.zj(Pe.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            r.i0(Pe.M(), e, n);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Pe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_ModifyLineItem_Request";
          }
        };
        R(lt, "sm_m"), R(lt, "sm_mbf");
        let Mt = lt;
        const vt = class Oe extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Oe.prototype.contents || r.Sg(Oe.M()),
              b.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Oe.sm_m ||
                (Oe.sm_m = { proto: Oe, fields: { contents: { n: 1, c: o } } }),
              Oe.sm_m
            );
          }
          static MBF() {
            return Oe.sm_mbf || (Oe.sm_mbf = r.w0(Oe.M())), Oe.sm_mbf;
          }
          toObject(e = !1) {
            return Oe.toObject(e, this);
          }
          static toObject(e, n) {
            return r.BT(Oe.M(), e, n);
          }
          static fromObject(e) {
            return r.Uq(Oe.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (d().BinaryReader)(e),
              z = new Oe();
            return Oe.deserializeBinaryFromReader(z, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return r.zj(Oe.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            r.i0(Oe.M(), e, n);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Oe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_ModifyLineItem_Response";
          }
        };
        R(vt, "sm_m"), R(vt, "sm_mbf");
        let Ct = vt;
        const zt = class Ue extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ue.prototype.gidshoppingcart || r.Sg(Ue.M()),
              b.Message.initialize(this, e, 0, -1, [2], null);
          }
          static M() {
            return (
              Ue.sm_m ||
                (Ue.sm_m = {
                  proto: Ue,
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
              Ue.sm_m
            );
          }
          static MBF() {
            return Ue.sm_mbf || (Ue.sm_mbf = r.w0(Ue.M())), Ue.sm_mbf;
          }
          toObject(e = !1) {
            return Ue.toObject(e, this);
          }
          static toObject(e, n) {
            return r.BT(Ue.M(), e, n);
          }
          static fromObject(e) {
            return r.Uq(Ue.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (d().BinaryReader)(e),
              z = new Ue();
            return Ue.deserializeBinaryFromReader(z, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return r.zj(Ue.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return Ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            r.i0(Ue.M(), e, n);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              Ue.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_RemoveLineItems_Request";
          }
        };
        R(zt, "sm_m"), R(zt, "sm_mbf");
        let Tt = zt;
        const It = class De extends b.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              De.prototype.contents || r.Sg(De.M()),
              b.Message.initialize(this, e, 0, -1, [2], null);
          }
          static M() {
            return (
              De.sm_m ||
                (De.sm_m = {
                  proto: De,
                  fields: {
                    contents: { n: 1, c: o },
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
              De.sm_m
            );
          }
          static MBF() {
            return De.sm_mbf || (De.sm_mbf = r.w0(De.M())), De.sm_mbf;
          }
          toObject(e = !1) {
            return De.toObject(e, this);
          }
          static toObject(e, n) {
            return r.BT(De.M(), e, n);
          }
          static fromObject(e) {
            return r.Uq(De.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (d().BinaryReader)(e),
              z = new De();
            return De.deserializeBinaryFromReader(z, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return r.zj(De.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (d().BinaryWriter)();
            return De.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            r.i0(De.M(), e, n);
          }
          serializeBase64String() {
            var e = new (d().BinaryWriter)();
            return (
              De.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_RemoveLineItems_Response";
          }
        };
        R(It, "sm_m"), R(It, "sm_mbf");
        let Ft = It;
        var St;
        ((ut) => {
          function e(dt, ct, pt) {
            return dt.SendMsg(
              "ShoppingCart.CreateNewShoppingCart#1",
              (0, u.I8)(G, ct, pt),
              A,
              { ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }
          ut.CreateNewShoppingCart = e;
          function n(dt, ct, pt) {
            return dt.SendMsg(
              "ShoppingCart.GetShoppingCartContents#1",
              (0, u.I8)(x, ct, pt),
              g,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }
          ut.GetShoppingCartContents = n;
          function z(dt, ct, pt) {
            return dt.SendMsg(
              "ShoppingCart.AddPackages#1",
              (0, u.I8)(st, ct, pt),
              gt,
              { ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }
          ut.AddPackages = z;
          function Pt(dt, ct, pt) {
            return dt.SendMsg(
              "ShoppingCart.UpdatePackageQuantity#1",
              (0, u.I8)(ft, ct, pt),
              J,
              { ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }
          ut.UpdatePackageQuantity = Pt;
          function _t(dt, ct, pt) {
            return dt.SendMsg(
              "ShoppingCart.AddBundle#1",
              (0, u.I8)(At, ct, pt),
              Rt,
              { ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }
          ut.AddBundle = _t;
          function Ot(dt, ct, pt) {
            return dt.SendMsg(
              "ShoppingCart.ModifyLineItem#1",
              (0, u.I8)(Mt, ct, pt),
              Ct,
              { ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }
          ut.ModifyLineItem = Ot;
          function Ut(dt, ct, pt) {
            return dt.SendMsg(
              "ShoppingCart.RemoveLineItems#1",
              (0, u.I8)(Tt, ct, pt),
              Ft,
              { ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }
          ut.RemoveLineItems = Ut;
        })(St || (St = {}));
      },
      60001: (Bt, it, B) => {
        B.d(it, {
          dU: () => mt,
          eh: () => T,
          eb: () => d,
          tV: () => b,
          K_: () => I,
        });
        var b = {};
        B.r(b), B.d(b, { $D: () => R });
        var d = {};
        B.r(d), B.d(d, { N0: () => A });
        var r = B(80613),
          u = B.n(r),
          s = B(75245),
          l = B(35038),
          Q = B(40164);
        const R = 0,
          L = 1,
          G = 2,
          O = 3,
          A = 0,
          U = 1,
          nt = 2;
        var at = Object.defineProperty,
          $ = (x, m, o) =>
            m in x
              ? at(x, m, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: o,
                })
              : (x[m] = o),
          c = (x, m, o) => $(x, typeof m != "symbol" ? m + "" : m, o);
        function M(x) {
          return "unknown EStoreCuratorRecommendationState ( " + x + " )";
        }
        function D(x) {
          return "unknown EStoreCuratorListType ( " + x + " )";
        }
        function N(x) {
          return "unknown EStoreCuratorListState ( " + x + " )";
        }
        const H = class Ee extends r.Message {
          static ImplementsStaticInterface() {}
          constructor(m = null) {
            super(),
              Ee.prototype.appid || s.Sg(Ee.M()),
              r.Message.initialize(this, m, 0, -1, void 0, null);
          }
          static M() {
            return (
              Ee.sm_m ||
                (Ee.sm_m = {
                  proto: Ee,
                  fields: {
                    appid: { n: 1, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                    clanid: { n: 2, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                    link_url: {
                      n: 3,
                      br: s.qM.readString,
                      bw: s.gp.writeString,
                    },
                    link_text: {
                      n: 4,
                      br: s.qM.readString,
                      bw: s.gp.writeString,
                    },
                    blurb: { n: 5, br: s.qM.readString, bw: s.gp.writeString },
                    time_recommended: {
                      n: 6,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    comment_count: {
                      n: 7,
                      br: s.qM.readInt32,
                      bw: s.gp.writeInt32,
                    },
                    upvote_count: {
                      n: 8,
                      br: s.qM.readInt32,
                      bw: s.gp.writeInt32,
                    },
                    accountid_creator: {
                      n: 9,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    recommendation_state: {
                      n: 10,
                      br: s.qM.readEnum,
                      bw: s.gp.writeEnum,
                    },
                    received_compensation: {
                      n: 11,
                      br: s.qM.readBool,
                      bw: s.gp.writeBool,
                    },
                    received_for_free: {
                      n: 12,
                      br: s.qM.readBool,
                      bw: s.gp.writeBool,
                    },
                  },
                }),
              Ee.sm_m
            );
          }
          static MBF() {
            return Ee.sm_mbf || (Ee.sm_mbf = s.w0(Ee.M())), Ee.sm_mbf;
          }
          toObject(m = !1) {
            return Ee.toObject(m, this);
          }
          static toObject(m, o) {
            return s.BT(Ee.M(), m, o);
          }
          static fromObject(m) {
            return s.Uq(Ee.M(), m);
          }
          static deserializeBinary(m) {
            let o = new (u().BinaryReader)(m),
              i = new Ee();
            return Ee.deserializeBinaryFromReader(i, o);
          }
          static deserializeBinaryFromReader(m, o) {
            return s.zj(Ee.MBF(), m, o);
          }
          serializeBinary() {
            var m = new (u().BinaryWriter)();
            return Ee.serializeBinaryToWriter(this, m), m.getResultBuffer();
          }
          static serializeBinaryToWriter(m, o) {
            s.i0(Ee.M(), m, o);
          }
          serializeBase64String() {
            var m = new (u().BinaryWriter)();
            return (
              Ee.serializeBinaryToWriter(this, m), m.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCuration_RecommendedApp";
          }
        };
        c(H, "sm_m"), c(H, "sm_mbf");
        let K = H;
        const Y = class je extends r.Message {
          static ImplementsStaticInterface() {}
          constructor(m = null) {
            super(),
              je.prototype.listid || s.Sg(je.M()),
              r.Message.initialize(this, m, 0, -1, [10, 12, 13, 14], null);
          }
          static M() {
            return (
              je.sm_m ||
                (je.sm_m = {
                  proto: je,
                  fields: {
                    listid: {
                      n: 1,
                      br: s.qM.readUint64String,
                      bw: s.gp.writeUint64String,
                    },
                    title: { n: 2, br: s.qM.readString, bw: s.gp.writeString },
                    blurb: { n: 3, br: s.qM.readString, bw: s.gp.writeString },
                    link: { n: 4, br: s.qM.readString, bw: s.gp.writeString },
                    list_state: { n: 5, br: s.qM.readEnum, bw: s.gp.writeEnum },
                    sort_order: {
                      n: 6,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    time_created: {
                      n: 7,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    time_updated: {
                      n: 8,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    accountid: {
                      n: 9,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    apps: { n: 10, c: C, r: !0, q: !0 },
                    list_type: { n: 11, br: s.qM.readEnum, bw: s.gp.writeEnum },
                    title_localization: { n: 12, c: Q.O2, r: !0, q: !0 },
                    blurb_localization: { n: 13, c: Q.O2, r: !0, q: !0 },
                    link_localization: { n: 14, c: Q.O2, r: !0, q: !0 },
                    sale_clan_steamid: {
                      n: 15,
                      br: s.qM.readFixed64String,
                      bw: s.gp.writeFixed64String,
                    },
                    sale_clan_event_gid: {
                      n: 16,
                      br: s.qM.readFixed64String,
                      bw: s.gp.writeFixed64String,
                    },
                    list_jsondata: {
                      n: 17,
                      br: s.qM.readString,
                      bw: s.gp.writeString,
                    },
                    clan_account_id: {
                      n: 18,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                  },
                }),
              je.sm_m
            );
          }
          static MBF() {
            return je.sm_mbf || (je.sm_mbf = s.w0(je.M())), je.sm_mbf;
          }
          toObject(m = !1) {
            return je.toObject(m, this);
          }
          static toObject(m, o) {
            return s.BT(je.M(), m, o);
          }
          static fromObject(m) {
            return s.Uq(je.M(), m);
          }
          static deserializeBinary(m) {
            let o = new (u().BinaryReader)(m),
              i = new je();
            return je.deserializeBinaryFromReader(i, o);
          }
          static deserializeBinaryFromReader(m, o) {
            return s.zj(je.MBF(), m, o);
          }
          serializeBinary() {
            var m = new (u().BinaryWriter)();
            return je.serializeBinaryToWriter(this, m), m.getResultBuffer();
          }
          static serializeBinaryToWriter(m, o) {
            s.i0(je.M(), m, o);
          }
          serializeBase64String() {
            var m = new (u().BinaryWriter)();
            return (
              je.serializeBinaryToWriter(this, m), m.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCuration_ListDetails";
          }
        };
        c(Y, "sm_m"), c(Y, "sm_mbf");
        let j = Y;
        const p = class Le extends r.Message {
          static ImplementsStaticInterface() {}
          constructor(m = null) {
            super(),
              Le.prototype.recommended_app || s.Sg(Le.M()),
              r.Message.initialize(this, m, 0, -1, void 0, null);
          }
          static M() {
            return (
              Le.sm_m ||
                (Le.sm_m = {
                  proto: Le,
                  fields: {
                    recommended_app: { n: 1, c: K },
                    blurb: { n: 2, br: s.qM.readString, bw: s.gp.writeString },
                    sort_order: {
                      n: 3,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                  },
                }),
              Le.sm_m
            );
          }
          static MBF() {
            return Le.sm_mbf || (Le.sm_mbf = s.w0(Le.M())), Le.sm_mbf;
          }
          toObject(m = !1) {
            return Le.toObject(m, this);
          }
          static toObject(m, o) {
            return s.BT(Le.M(), m, o);
          }
          static fromObject(m) {
            return s.Uq(Le.M(), m);
          }
          static deserializeBinary(m) {
            let o = new (u().BinaryReader)(m),
              i = new Le();
            return Le.deserializeBinaryFromReader(i, o);
          }
          static deserializeBinaryFromReader(m, o) {
            return s.zj(Le.MBF(), m, o);
          }
          serializeBinary() {
            var m = new (u().BinaryWriter)();
            return Le.serializeBinaryToWriter(this, m), m.getResultBuffer();
          }
          static serializeBinaryToWriter(m, o) {
            s.i0(Le.M(), m, o);
          }
          serializeBase64String() {
            var m = new (u().BinaryWriter)();
            return (
              Le.serializeBinaryToWriter(this, m), m.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCuration_ListDetails_ListItem";
          }
        };
        c(p, "sm_m"), c(p, "sm_mbf");
        let C = p;
        const _ = class Ge extends r.Message {
          static ImplementsStaticInterface() {}
          constructor(m = null) {
            super(),
              Ge.prototype.steamid || s.Sg(Ge.M()),
              r.Message.initialize(this, m, 0, -1, void 0, null);
          }
          static M() {
            return (
              Ge.sm_m ||
                (Ge.sm_m = {
                  proto: Ge,
                  fields: {
                    steamid: {
                      n: 1,
                      br: s.qM.readFixed64String,
                      bw: s.gp.writeFixed64String,
                    },
                    list_state: { n: 2, br: s.qM.readEnum, bw: s.gp.writeEnum },
                    start: { n: 3, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                    count: { n: 4, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                    return_total_only: {
                      n: 5,
                      br: s.qM.readBool,
                      bw: s.gp.writeBool,
                    },
                    return_metadata_only: {
                      n: 6,
                      br: s.qM.readBool,
                      bw: s.gp.writeBool,
                    },
                    max_apps: { n: 7, br: s.qM.readInt32, bw: s.gp.writeInt32 },
                    sale_clan_event_gid: {
                      n: 8,
                      br: s.qM.readFixed64String,
                      bw: s.gp.writeFixed64String,
                    },
                  },
                }),
              Ge.sm_m
            );
          }
          static MBF() {
            return Ge.sm_mbf || (Ge.sm_mbf = s.w0(Ge.M())), Ge.sm_mbf;
          }
          toObject(m = !1) {
            return Ge.toObject(m, this);
          }
          static toObject(m, o) {
            return s.BT(Ge.M(), m, o);
          }
          static fromObject(m) {
            return s.Uq(Ge.M(), m);
          }
          static deserializeBinary(m) {
            let o = new (u().BinaryReader)(m),
              i = new Ge();
            return Ge.deserializeBinaryFromReader(i, o);
          }
          static deserializeBinaryFromReader(m, o) {
            return s.zj(Ge.MBF(), m, o);
          }
          serializeBinary() {
            var m = new (u().BinaryWriter)();
            return Ge.serializeBinaryToWriter(this, m), m.getResultBuffer();
          }
          static serializeBinaryToWriter(m, o) {
            s.i0(Ge.M(), m, o);
          }
          serializeBase64String() {
            var m = new (u().BinaryWriter)();
            return (
              Ge.serializeBinaryToWriter(this, m), m.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCuration_GetLists_Request";
          }
        };
        c(_, "sm_m"), c(_, "sm_mbf");
        let T = _;
        const v = class qe extends r.Message {
          static ImplementsStaticInterface() {}
          constructor(m = null) {
            super(),
              qe.prototype.list_details || s.Sg(qe.M()),
              r.Message.initialize(this, m, 0, -1, [1], null);
          }
          static M() {
            return (
              qe.sm_m ||
                (qe.sm_m = {
                  proto: qe,
                  fields: {
                    list_details: { n: 1, c: j, r: !0, q: !0 },
                    total: { n: 2, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                  },
                }),
              qe.sm_m
            );
          }
          static MBF() {
            return qe.sm_mbf || (qe.sm_mbf = s.w0(qe.M())), qe.sm_mbf;
          }
          toObject(m = !1) {
            return qe.toObject(m, this);
          }
          static toObject(m, o) {
            return s.BT(qe.M(), m, o);
          }
          static fromObject(m) {
            return s.Uq(qe.M(), m);
          }
          static deserializeBinary(m) {
            let o = new (u().BinaryReader)(m),
              i = new qe();
            return qe.deserializeBinaryFromReader(i, o);
          }
          static deserializeBinaryFromReader(m, o) {
            return s.zj(qe.MBF(), m, o);
          }
          serializeBinary() {
            var m = new (u().BinaryWriter)();
            return qe.serializeBinaryToWriter(this, m), m.getResultBuffer();
          }
          static serializeBinaryToWriter(m, o) {
            s.i0(qe.M(), m, o);
          }
          serializeBase64String() {
            var m = new (u().BinaryWriter)();
            return (
              qe.serializeBinaryToWriter(this, m), m.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCuration_GetLists_Response";
          }
        };
        c(v, "sm_m"), c(v, "sm_mbf");
        let W = v;
        const q = class xe extends r.Message {
          static ImplementsStaticInterface() {}
          constructor(m = null) {
            super(),
              xe.prototype.steamid || s.Sg(xe.M()),
              r.Message.initialize(this, m, 0, -1, void 0, null);
          }
          static M() {
            return (
              xe.sm_m ||
                (xe.sm_m = {
                  proto: xe,
                  fields: {
                    steamid: {
                      n: 1,
                      br: s.qM.readFixed64String,
                      bw: s.gp.writeFixed64String,
                    },
                    listid: {
                      n: 2,
                      br: s.qM.readUint64String,
                      bw: s.gp.writeUint64String,
                    },
                  },
                }),
              xe.sm_m
            );
          }
          static MBF() {
            return xe.sm_mbf || (xe.sm_mbf = s.w0(xe.M())), xe.sm_mbf;
          }
          toObject(m = !1) {
            return xe.toObject(m, this);
          }
          static toObject(m, o) {
            return s.BT(xe.M(), m, o);
          }
          static fromObject(m) {
            return s.Uq(xe.M(), m);
          }
          static deserializeBinary(m) {
            let o = new (u().BinaryReader)(m),
              i = new xe();
            return xe.deserializeBinaryFromReader(i, o);
          }
          static deserializeBinaryFromReader(m, o) {
            return s.zj(xe.MBF(), m, o);
          }
          serializeBinary() {
            var m = new (u().BinaryWriter)();
            return xe.serializeBinaryToWriter(this, m), m.getResultBuffer();
          }
          static serializeBinaryToWriter(m, o) {
            s.i0(xe.M(), m, o);
          }
          serializeBase64String() {
            var m = new (u().BinaryWriter)();
            return (
              xe.serializeBinaryToWriter(this, m), m.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCuration_GetListDetails_Request";
          }
        };
        c(q, "sm_m"), c(q, "sm_mbf");
        let mt = q;
        const S = class Ne extends r.Message {
          static ImplementsStaticInterface() {}
          constructor(m = null) {
            super(),
              Ne.prototype.list_details || s.Sg(Ne.M()),
              r.Message.initialize(this, m, 0, -1, void 0, null);
          }
          static M() {
            return (
              Ne.sm_m ||
                (Ne.sm_m = {
                  proto: Ne,
                  fields: { list_details: { n: 1, c: j } },
                }),
              Ne.sm_m
            );
          }
          static MBF() {
            return Ne.sm_mbf || (Ne.sm_mbf = s.w0(Ne.M())), Ne.sm_mbf;
          }
          toObject(m = !1) {
            return Ne.toObject(m, this);
          }
          static toObject(m, o) {
            return s.BT(Ne.M(), m, o);
          }
          static fromObject(m) {
            return s.Uq(Ne.M(), m);
          }
          static deserializeBinary(m) {
            let o = new (u().BinaryReader)(m),
              i = new Ne();
            return Ne.deserializeBinaryFromReader(i, o);
          }
          static deserializeBinaryFromReader(m, o) {
            return s.zj(Ne.MBF(), m, o);
          }
          serializeBinary() {
            var m = new (u().BinaryWriter)();
            return Ne.serializeBinaryToWriter(this, m), m.getResultBuffer();
          }
          static serializeBinaryToWriter(m, o) {
            s.i0(Ne.M(), m, o);
          }
          serializeBase64String() {
            var m = new (u().BinaryWriter)();
            return (
              Ne.serializeBinaryToWriter(this, m), m.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCuration_GetListDetails_Response";
          }
        };
        c(S, "sm_m"), c(S, "sm_mbf");
        let f = S;
        var I;
        ((x) => {
          function m(i, g, F) {
            return i.SendMsg(
              "StoreCuration.GetLists#1",
              (0, l.I8)(T, g, F),
              W,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          x.GetLists = m;
          function o(i, g, F) {
            return i.SendMsg(
              "StoreCuration.GetListDetails#1",
              (0, l.I8)(mt, g, F),
              f,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          x.GetListDetails = o;
        })(I || (I = {}));
      },
      21721: (Bt, it, B) => {
        B.d(it, { DT: () => Q, b0: () => s, bu: () => l, pd: () => R });
        var b = B(72609),
          d = B(40358),
          r = B(71742),
          u = B(41032);
        function s(L, G) {
          if (L[G]) {
            if (G == "community_icon") {
              const O = L.asset_url_format
                .replace(/^steam\//, "images/")
                .replace("${FILENAME}", `${L[G]}.jpg`)
                .replace(/\?.*$/, "");
              return `${b.TS.MEDIA_CDN_COMMUNITY_URL}${O}`;
            } else if (typeof L[G] == "string") {
              const O = L.asset_url_format.replace("${FILENAME}", L[G]);
              return `${b.TS.STORE_ITEM_BASE_URL}${O}`;
            }
          }
        }
        function l(L, G = "full") {
          let O = "";
          switch (G) {
            case "thumb":
              O = ".116x65";
              break;
            case "600x338":
              O = ".600x338";
              break;
            case "1920x1080":
              O = ".1920x1080";
              break;
            case "full":
              O = "";
              break;
            default:
              (0, r.z_)(G, `Invalid size: ${G}`);
              break;
          }
          return (
            b.TS.STORE_ITEM_BASE_URL +
            L.filename.replace(/\.([^.]+)(\?.*)?$/, `${O}.$1$2`)
          );
        }
        function Q(L) {
          const { data: G } = (0, d.j4)(L),
            O = (0, u.dy)();
          if (G)
            return [
              ...(G.all_ages_screenshots || []),
              ...(!O && G.mature_content_screenshots
                ? G.mature_content_screenshots
                : []),
            ].sort((A, U) => A.ordinal - U.ordinal);
        }
        function R(L, G = !1) {
          const { data: O } = (0, d.lv)({ appid: L });
          if (O !== void 0)
            return O === null
              ? null
              : G && O.library_capsule_2x
                ? s(O, "library_capsule_2x")
                : O.library_capsule
                  ? s(O, "library_capsule")
                  : `${b.TS.STORE_ITEM_BASE_URL}steam/apps/${L}/portrait.png`;
        }
      },
      813: (Bt, it, B) => {
        B.d(it, {
          $5: () => _,
          Ao: () => mt,
          TB: () => C,
          W$: () => T,
          Yp: () => W,
          _5: () => q,
          ac: () => j,
        });
        var b = B(99412),
          d = B(40497),
          r = B(29385),
          u = B(14947),
          s = B(90626),
          l = B(76559),
          Q = B(71742),
          R = B(3166),
          L = B(60480),
          G = B(49628),
          O = B(33512),
          A = B(7638),
          U = B(55483),
          nt = B(77291),
          at = Object.defineProperty,
          $ = (S, f, I) =>
            f in S
              ? at(S, f, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: I,
                })
              : (S[f] = I),
          c = (S, f, I) => $(S, typeof f != "symbol" ? f + "" : f, I);
        const M = new WeakSet();
        function D(S = d.L) {
          if (typeof window == "undefined" || M.has(S)) return;
          const f = (0, R.Fd)("groupvanityinfo", "application_config");
          (f === void 0 && document.readyState != "complete") ||
            (M.add(S), N(f) && (0, U.aA)(S, f));
        }
        function N(S) {
          const f = S;
          return f &&
            Array.isArray(f) &&
            f.length > 0 &&
            typeof f[0] == "object"
            ? typeof f[0].clanAccountID == "number" &&
                (typeof f[0].appid == "number" ||
                  typeof f[0].vanity_url == "string")
            : !1;
        }
        function H(S) {
          return typeof S == "string" ? parseInt(S) : S;
        }
        function K(S) {
          return typeof S == "string" ? Number.parseInt(S) : S;
        }
        class Y {
          constructor() {
            c(this, "m_queryClient", d.L),
              c(this, "m_boxCacheVersion", u.sH.box(0)),
              c(this, "m_bWatchingCache", !1),
              c(this, "m_bBumpScheduled", !1);
          }
          Init() {
            this.LazyInit();
          }
          LazyInit() {
            D(this.m_queryClient),
              this.m_bWatchingCache ||
                ((this.m_bWatchingCache = !0),
                this.m_queryClient.getQueryCache().subscribe((f) => {
                  var I;
                  ((f == null ? void 0 : f.type) != "added" &&
                    (f == null ? void 0 : f.type) != "updated" &&
                    (f == null ? void 0 : f.type) != "removed") ||
                    ((0, U.yT)((I = f.query) == null ? void 0 : I.queryKey) &&
                      this.ScheduleCacheVersionBump());
                }));
          }
          ScheduleCacheVersionBump() {
            this.m_bBumpScheduled ||
              ((this.m_bBumpScheduled = !0),
              queueMicrotask(() => {
                (this.m_bBumpScheduled = !1),
                  (0, u.h5)(() =>
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
          AddGroupVanities(f) {
            this.LazyInit(), N(f) && (0, U.aA)(this.m_queryClient, f);
          }
          BHasClanInfoLoaded(f) {
            return (
              (0, Q.wT)(
                f.BIsValid(),
                "Clan SteamID is not valid when ClanInfo",
              ),
              (0, Q.wT)(
                f.BIsClanAccount(),
                "Clan SteamID is not a clan account id when requesting clan info ",
              ),
              this.BHasClanInfoLoadedByAccountID(f.GetAccountID())
            );
          }
          BHasClanInfoLoadedByAccountID(f) {
            return !!(0, U.Gt)(K(f), this.ReadCache());
          }
          RegisterClanData(f) {
            this.LazyInit(), (0, U.aA)(this.m_queryClient, f);
          }
          async LoadOGGClanInfoForAppID(f) {
            return (
              this.LazyInit(),
              (f = H(f)),
              (0, Q.wT)(
                f != 0,
                "LoadOGGClanInfoForAppID called with appid of zero",
              ),
              f == 0 ? null : (0, U.AB)(f, this.m_queryClient).catch(() => null)
            );
          }
          async LoadOGGClanInfoForIdentifier(f) {
            return this.LazyInit(), (0, U.Rc)(f, this.m_queryClient, "store");
          }
          async LoadOGGClanInfoForGroupVanity(f) {
            return this.LazyInit(), (0, U.Rc)(f, this.m_queryClient, "group");
          }
          async LoadClanInfoForClanSteamID(f) {
            return this.LoadClanInfoForClanAccountID(f.GetAccountID());
          }
          async LoadClanInfoForClanAccountID(f) {
            return this.LazyInit(), (0, U.MR)(K(f), this.m_queryClient);
          }
          GetOGGClanInfo(f) {
            const I = this.ReadCache();
            return typeof f == "string" ? (0, U.fy)(f, I) : (0, U.ko)(f, I);
          }
          GetClanSteamIDForAppID(f) {
            const I = (0, U.ko)(H(f), this.ReadCache());
            return I ? l.b.InitFromClanID(I.clanAccountID) : void 0;
          }
          GetClanVanityForAppID(f) {
            var I;
            return (I = (0, U.ko)(H(f), this.ReadCache())) == null
              ? void 0
              : I.vanity_url;
          }
          GetClanVanityForClanSteamID(f) {
            var I;
            return (I = (0, U.Gt)(f.GetAccountID(), this.ReadCache())) == null
              ? void 0
              : I.vanity_url;
          }
          HasLoadedClanAccountID(f) {
            return this.BHasClanInfoLoadedByAccountID(f);
          }
          GetClanMemberCount(f) {
            var I, x;
            return (x =
              (I = (0, U.ko)(H(f), this.ReadCache())) == null
                ? void 0
                : I.member_count) != null
              ? x
              : 0;
          }
          GetClanInfoByClanAccountID(f) {
            return (
              (0, Q.wT)(
                !!f,
                "Unepxected clanid when requesting information. GetClanInfoByClanAccountID ",
              ),
              (0, U.Gt)(K(f), this.ReadCache())
            );
          }
          GetCreatorStoreURL(f) {
            let I = L.pF.GetCreatorHome(f);
            if (I) return I.GetCreatorHomeURL("developer");
            let x = this.GetClanInfoByClanAccountID(f.GetAccountID());
            return (
              R.TS.COMMUNITY_BASE_URL +
              (x.vanity_url
                ? "groups/" + x.vanity_url
                : "gid/" + f.ConvertTo64BitString())
            );
          }
        }
        const j = new Y();
        (0, nt.V)("g_ClanStore", j);
        function p() {
          const S = (0, r.jE)();
          return D(S), S;
        }
        function C(S) {
          p();
          const { data: f, isPending: I } = (0, U.TB)(S ? K(S) : void 0);
          return [!!S && I, f != null ? f : void 0];
        }
        function _(S) {
          const f = p();
          (0, s.useEffect)(() => {
            S &&
              (0, U.MR)(K(S), f).catch((I) =>
                console.error(`Failed to hint load clan info ${S}`, I),
              );
          }, [S, f]);
        }
        function T(S) {
          var f;
          return p(), (f = (0, U.W$)(S).data) != null ? f : null;
        }
        function v(S) {
          p();
          const f = S ? H(S) : void 0,
            { data: I, isPending: x } = useClanInfoByAppIDQuery(f);
          return { bLoadingClanInfo: !!f && x, clanInfo: I != null ? I : null };
        }
        function W(S) {
          const f = S.BIsOGGEvent(),
            I = A.KN.Get().GetPartnerEventPermissions(
              S.clanSteamID,
            ).valve_admin;
          if (f) return { bVisible: !1 };
          if (S.GetEventType() == b.ajI) return { bVisible: !1 };
          if (S.BHasSaleEnabled()) return { bVisible: !0 };
          if (
            S.jsondata.clone_from_event_gid &&
            S.jsondata.clone_from_sale_enabled
          )
            return { bVisible: !0 };
          if (S.clanSteamID.GetAccountID() == (0, G.H)())
            return { bVisible: !1 };
          const x = L.pF.GetCreatorHome(S.clanSteamID);
          return x && x.BHasClanAccountFlagSet(O.Wv.Jn)
            ? { bVisible: !0 }
            : I
              ? { bVisible: !0, bValveOnly: !0 }
              : { bVisible: !1 };
        }
        function q(S) {
          const f = S.BIsOGGEvent(),
            I = A.KN.Get().GetPartnerEventPermissions(
              S.clanSteamID,
            ).valve_admin;
          return f
            ? S.BHasSaleEnabled()
              ? { bVisible: !0 }
              : R.TS.EUNIVERSE == b.wLO
                ? { bVisible: !1 }
                : I
                  ? S.GetEventType() == b.zeJ
                    ? { bVisible: !0, bValveOnly: !0 }
                    : { bVisible: !1 }
                  : { bVisible: !1 }
            : { bVisible: !1 };
        }
        function mt(S) {
          const f = S.BIsOGGEvent(),
            I = A.KN.Get().GetPartnerEventPermissions(
              S.clanSteamID,
            ).valve_admin;
          return f
            ? { bVisible: !1 }
            : S.GetEventType() != b.ajI
              ? { bVisible: !1 }
              : S.BHasSaleEnabled()
                ? { bVisible: !0 }
                : S.clanSteamID.GetAccountID() == (0, G.H)()
                  ? { bVisible: !1 }
                  : { bVisible: !1 };
        }
      },
      60480: (Bt, it, B) => {
        B.d(it, {
          mD: () => Et,
          ie: () => jt,
          GT: () => Dt,
          eL: () => Ut,
          bW: () => dt,
          io: () => Ot,
          A2: () => ct,
          n4: () => Pt,
          pF: () => z,
          FV: () => pt,
          $$: () => xt,
          FX: () => qt,
        });
        var b = B(72604),
          d = B(99412),
          r = B(35038),
          u = B(80613),
          s = B.n(u),
          l = B(75245),
          Q = Object.defineProperty,
          R = (w, t, a) =>
            t in w
              ? Q(w, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: a,
                })
              : (w[t] = a),
          L = (w, t, a) => R(w, typeof t != "symbol" ? t + "" : t, a);
        function G(w) {
          return "unknown EAppDevsRelationship ( " + w + " )";
        }
        const O = class He extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              He.prototype.appid || l.Sg(He.M()),
              u.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static M() {
            return (
              He.sm_m ||
                (He.sm_m = {
                  proto: He,
                  fields: {
                    appid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                    clan_steamid: {
                      n: 2,
                      br: l.qM.readFixed64String,
                      bw: l.gp.writeFixed64String,
                    },
                    relation: { n: 3, br: l.qM.readEnum, bw: l.gp.writeEnum },
                    linkname: {
                      n: 4,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    json: { n: 5, br: l.qM.readString, bw: l.gp.writeString },
                  },
                }),
              He.sm_m
            );
          }
          static MBF() {
            return He.sm_mbf || (He.sm_mbf = l.w0(He.M())), He.sm_mbf;
          }
          toObject(t = !1) {
            return He.toObject(t, this);
          }
          static toObject(t, a) {
            return l.BT(He.M(), t, a);
          }
          static fromObject(t) {
            return l.Uq(He.M(), t);
          }
          static deserializeBinary(t) {
            let a = new (s().BinaryReader)(t),
              y = new He();
            return He.deserializeBinaryFromReader(y, a);
          }
          static deserializeBinaryFromReader(t, a) {
            return l.zj(He.MBF(), t, a);
          }
          serializeBinary() {
            var t = new (s().BinaryWriter)();
            return He.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, a) {
            l.i0(He.M(), t, a);
          }
          serializeBase64String() {
            var t = new (s().BinaryWriter)();
            return (
              He.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CDeveloperPageLink";
          }
        };
        L(O, "sm_m"), L(O, "sm_mbf");
        let A = O;
        const U = class Ke extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Ke.prototype.clan_account_id || l.Sg(Ke.M()),
              u.Message.initialize(this, t, 0, -1, [2], null);
          }
          static M() {
            return (
              Ke.sm_m ||
                (Ke.sm_m = {
                  proto: Ke,
                  fields: {
                    clan_account_id: {
                      n: 1,
                      br: l.qM.readUint32,
                      bw: l.gp.writeUint32,
                    },
                    appid_list: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: l.qM.readUint32,
                      pbr: l.qM.readPackedUint32,
                      bw: l.gp.writeRepeatedUint32,
                    },
                  },
                }),
              Ke.sm_m
            );
          }
          static MBF() {
            return Ke.sm_mbf || (Ke.sm_mbf = l.w0(Ke.M())), Ke.sm_mbf;
          }
          toObject(t = !1) {
            return Ke.toObject(t, this);
          }
          static toObject(t, a) {
            return l.BT(Ke.M(), t, a);
          }
          static fromObject(t) {
            return l.Uq(Ke.M(), t);
          }
          static deserializeBinary(t) {
            let a = new (s().BinaryReader)(t),
              y = new Ke();
            return Ke.deserializeBinaryFromReader(y, a);
          }
          static deserializeBinaryFromReader(t, a) {
            return l.zj(Ke.MBF(), t, a);
          }
          serializeBinary() {
            var t = new (s().BinaryWriter)();
            return Ke.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, a) {
            l.i0(Ke.M(), t, a);
          }
          serializeBase64String() {
            var t = new (s().BinaryWriter)();
            return (
              Ke.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CDeveloperPageToApps";
          }
        };
        L(U, "sm_m"), L(U, "sm_mbf");
        let nt = U;
        var at = Object.defineProperty,
          $ = (w, t, a) =>
            t in w
              ? at(w, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: a,
                })
              : (w[t] = a),
          c = (w, t, a) => $(w, typeof t != "symbol" ? t + "" : t, a);
        const M = class Ve extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Ve.prototype.appid || l.Sg(Ve.M()),
              u.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static M() {
            return (
              Ve.sm_m ||
                (Ve.sm_m = {
                  proto: Ve,
                  fields: {
                    appid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                    link: { n: 2, c: A },
                    remove: {
                      n: 3,
                      d: !1,
                      br: l.qM.readBool,
                      bw: l.gp.writeBool,
                    },
                    update_json_only: {
                      n: 4,
                      d: !1,
                      br: l.qM.readBool,
                      bw: l.gp.writeBool,
                    },
                    skip_clan_permissions: {
                      n: 5,
                      d: !1,
                      br: l.qM.readBool,
                      bw: l.gp.writeBool,
                    },
                    partner_id: {
                      n: 6,
                      br: l.qM.readUint32,
                      bw: l.gp.writeUint32,
                    },
                  },
                }),
              Ve.sm_m
            );
          }
          static MBF() {
            return Ve.sm_mbf || (Ve.sm_mbf = l.w0(Ve.M())), Ve.sm_mbf;
          }
          toObject(t = !1) {
            return Ve.toObject(t, this);
          }
          static toObject(t, a) {
            return l.BT(Ve.M(), t, a);
          }
          static fromObject(t) {
            return l.Uq(Ve.M(), t);
          }
          static deserializeBinary(t) {
            let a = new (s().BinaryReader)(t),
              y = new Ve();
            return Ve.deserializeBinaryFromReader(y, a);
          }
          static deserializeBinaryFromReader(t, a) {
            return l.zj(Ve.MBF(), t, a);
          }
          serializeBinary() {
            var t = new (s().BinaryWriter)();
            return Ve.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, a) {
            l.i0(Ve.M(), t, a);
          }
          serializeBase64String() {
            var t = new (s().BinaryWriter)();
            return (
              Ve.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCatalog_SetDevPageLink_Request";
          }
        };
        c(M, "sm_m"), c(M, "sm_mbf");
        let D = M;
        class N extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), u.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return N.toObject(t, this);
          }
          static toObject(t, a) {
            return t ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(t) {
            return new N();
          }
          static deserializeBinary(t) {
            let a = new (s().BinaryReader)(t),
              y = new N();
            return N.deserializeBinaryFromReader(y, a);
          }
          static deserializeBinaryFromReader(t, a) {
            return t;
          }
          serializeBinary() {
            var t = new (s().BinaryWriter)();
            return N.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, a) {}
          serializeBase64String() {
            var t = new (s().BinaryWriter)();
            return (
              N.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCatalog_SetDevPageLink_Response";
          }
        }
        const H = class Qe extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Qe.prototype.appid || l.Sg(Qe.M()),
              u.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static M() {
            return (
              Qe.sm_m ||
                (Qe.sm_m = {
                  proto: Qe,
                  fields: {
                    appid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  },
                }),
              Qe.sm_m
            );
          }
          static MBF() {
            return Qe.sm_mbf || (Qe.sm_mbf = l.w0(Qe.M())), Qe.sm_mbf;
          }
          toObject(t = !1) {
            return Qe.toObject(t, this);
          }
          static toObject(t, a) {
            return l.BT(Qe.M(), t, a);
          }
          static fromObject(t) {
            return l.Uq(Qe.M(), t);
          }
          static deserializeBinary(t) {
            let a = new (s().BinaryReader)(t),
              y = new Qe();
            return Qe.deserializeBinaryFromReader(y, a);
          }
          static deserializeBinaryFromReader(t, a) {
            return l.zj(Qe.MBF(), t, a);
          }
          serializeBinary() {
            var t = new (s().BinaryWriter)();
            return Qe.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, a) {
            l.i0(Qe.M(), t, a);
          }
          serializeBase64String() {
            var t = new (s().BinaryWriter)();
            return (
              Qe.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCatalog_GetDevPageLinks_Request";
          }
        };
        c(H, "sm_m"), c(H, "sm_mbf");
        let K = H;
        const Y = class $e extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              $e.prototype.links || l.Sg($e.M()),
              u.Message.initialize(this, t, 0, -1, [1], null);
          }
          static M() {
            return (
              $e.sm_m ||
                ($e.sm_m = {
                  proto: $e,
                  fields: { links: { n: 1, c: A, r: !0, q: !0 } },
                }),
              $e.sm_m
            );
          }
          static MBF() {
            return $e.sm_mbf || ($e.sm_mbf = l.w0($e.M())), $e.sm_mbf;
          }
          toObject(t = !1) {
            return $e.toObject(t, this);
          }
          static toObject(t, a) {
            return l.BT($e.M(), t, a);
          }
          static fromObject(t) {
            return l.Uq($e.M(), t);
          }
          static deserializeBinary(t) {
            let a = new (s().BinaryReader)(t),
              y = new $e();
            return $e.deserializeBinaryFromReader(y, a);
          }
          static deserializeBinaryFromReader(t, a) {
            return l.zj($e.MBF(), t, a);
          }
          serializeBinary() {
            var t = new (s().BinaryWriter)();
            return $e.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, a) {
            l.i0($e.M(), t, a);
          }
          serializeBase64String() {
            var t = new (s().BinaryWriter)();
            return (
              $e.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCatalog_GetDevPageLinks_Response";
          }
        };
        c(Y, "sm_m"), c(Y, "sm_mbf");
        let j = Y;
        const p = class ke extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ke.prototype.clan_account_ids || l.Sg(ke.M()),
              u.Message.initialize(this, t, 0, -1, [1], null);
          }
          static M() {
            return (
              ke.sm_m ||
                (ke.sm_m = {
                  proto: ke,
                  fields: {
                    clan_account_ids: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: l.qM.readUint32,
                      pbr: l.qM.readPackedUint32,
                      bw: l.gp.writeRepeatedUint32,
                    },
                    ignore_dlc: { n: 2, br: l.qM.readBool, bw: l.gp.writeBool },
                  },
                }),
              ke.sm_m
            );
          }
          static MBF() {
            return ke.sm_mbf || (ke.sm_mbf = l.w0(ke.M())), ke.sm_mbf;
          }
          toObject(t = !1) {
            return ke.toObject(t, this);
          }
          static toObject(t, a) {
            return l.BT(ke.M(), t, a);
          }
          static fromObject(t) {
            return l.Uq(ke.M(), t);
          }
          static deserializeBinary(t) {
            let a = new (s().BinaryReader)(t),
              y = new ke();
            return ke.deserializeBinaryFromReader(y, a);
          }
          static deserializeBinaryFromReader(t, a) {
            return l.zj(ke.MBF(), t, a);
          }
          serializeBinary() {
            var t = new (s().BinaryWriter)();
            return ke.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, a) {
            l.i0(ke.M(), t, a);
          }
          serializeBase64String() {
            var t = new (s().BinaryWriter)();
            return (
              ke.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCatalog_GetDevPageAllAppsLinked_Request";
          }
        };
        c(p, "sm_m"), c(p, "sm_mbf");
        let C = p;
        const _ = class Ye extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Ye.prototype.results || l.Sg(Ye.M()),
              u.Message.initialize(this, t, 0, -1, [1], null);
          }
          static M() {
            return (
              Ye.sm_m ||
                (Ye.sm_m = {
                  proto: Ye,
                  fields: { results: { n: 1, c: nt, r: !0, q: !0 } },
                }),
              Ye.sm_m
            );
          }
          static MBF() {
            return Ye.sm_mbf || (Ye.sm_mbf = l.w0(Ye.M())), Ye.sm_mbf;
          }
          toObject(t = !1) {
            return Ye.toObject(t, this);
          }
          static toObject(t, a) {
            return l.BT(Ye.M(), t, a);
          }
          static fromObject(t) {
            return l.Uq(Ye.M(), t);
          }
          static deserializeBinary(t) {
            let a = new (s().BinaryReader)(t),
              y = new Ye();
            return Ye.deserializeBinaryFromReader(y, a);
          }
          static deserializeBinaryFromReader(t, a) {
            return l.zj(Ye.MBF(), t, a);
          }
          serializeBinary() {
            var t = new (s().BinaryWriter)();
            return Ye.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, a) {
            l.i0(Ye.M(), t, a);
          }
          serializeBase64String() {
            var t = new (s().BinaryWriter)();
            return (
              Ye.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCatalog_GetDevPageAllAppsLinked_Response";
          }
        };
        c(_, "sm_m"), c(_, "sm_mbf");
        let T = _;
        const v = class Je extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Je.prototype.clan_account_id || l.Sg(Je.M()),
              u.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static M() {
            return (
              Je.sm_m ||
                (Je.sm_m = {
                  proto: Je,
                  fields: {
                    clan_account_id: {
                      n: 1,
                      br: l.qM.readUint32,
                      bw: l.gp.writeUint32,
                    },
                    listid: {
                      n: 2,
                      br: l.qM.readUint64String,
                      bw: l.gp.writeUint64String,
                    },
                    ignore_dlc: { n: 3, br: l.qM.readBool, bw: l.gp.writeBool },
                  },
                }),
              Je.sm_m
            );
          }
          static MBF() {
            return Je.sm_mbf || (Je.sm_mbf = l.w0(Je.M())), Je.sm_mbf;
          }
          toObject(t = !1) {
            return Je.toObject(t, this);
          }
          static toObject(t, a) {
            return l.BT(Je.M(), t, a);
          }
          static fromObject(t) {
            return l.Uq(Je.M(), t);
          }
          static deserializeBinary(t) {
            let a = new (s().BinaryReader)(t),
              y = new Je();
            return Je.deserializeBinaryFromReader(y, a);
          }
          static deserializeBinaryFromReader(t, a) {
            return l.zj(Je.MBF(), t, a);
          }
          serializeBinary() {
            var t = new (s().BinaryWriter)();
            return Je.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, a) {
            l.i0(Je.M(), t, a);
          }
          serializeBase64String() {
            var t = new (s().BinaryWriter)();
            return (
              Je.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCatalog_GetDevPageListApps_Request";
          }
        };
        c(v, "sm_m"), c(v, "sm_mbf");
        let W = v;
        const q = class Xe extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Xe.prototype.apps || l.Sg(Xe.M()),
              u.Message.initialize(this, t, 0, -1, [1], null);
          }
          static M() {
            return (
              Xe.sm_m ||
                (Xe.sm_m = {
                  proto: Xe,
                  fields: { apps: { n: 1, c: f, r: !0, q: !0 } },
                }),
              Xe.sm_m
            );
          }
          static MBF() {
            return Xe.sm_mbf || (Xe.sm_mbf = l.w0(Xe.M())), Xe.sm_mbf;
          }
          toObject(t = !1) {
            return Xe.toObject(t, this);
          }
          static toObject(t, a) {
            return l.BT(Xe.M(), t, a);
          }
          static fromObject(t) {
            return l.Uq(Xe.M(), t);
          }
          static deserializeBinary(t) {
            let a = new (s().BinaryReader)(t),
              y = new Xe();
            return Xe.deserializeBinaryFromReader(y, a);
          }
          static deserializeBinaryFromReader(t, a) {
            return l.zj(Xe.MBF(), t, a);
          }
          serializeBinary() {
            var t = new (s().BinaryWriter)();
            return Xe.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, a) {
            l.i0(Xe.M(), t, a);
          }
          serializeBase64String() {
            var t = new (s().BinaryWriter)();
            return (
              Xe.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCatalog_GetDevPageListApps_Response";
          }
        };
        c(q, "sm_m"), c(q, "sm_mbf");
        let mt = q;
        const S = class Ze extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Ze.prototype.appid || l.Sg(Ze.M()),
              u.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static M() {
            return (
              Ze.sm_m ||
                (Ze.sm_m = {
                  proto: Ze,
                  fields: {
                    appid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                    sort_order: {
                      n: 2,
                      br: l.qM.readUint32,
                      bw: l.gp.writeUint32,
                    },
                  },
                }),
              Ze.sm_m
            );
          }
          static MBF() {
            return Ze.sm_mbf || (Ze.sm_mbf = l.w0(Ze.M())), Ze.sm_mbf;
          }
          toObject(t = !1) {
            return Ze.toObject(t, this);
          }
          static toObject(t, a) {
            return l.BT(Ze.M(), t, a);
          }
          static fromObject(t) {
            return l.Uq(Ze.M(), t);
          }
          static deserializeBinary(t) {
            let a = new (s().BinaryReader)(t),
              y = new Ze();
            return Ze.deserializeBinaryFromReader(y, a);
          }
          static deserializeBinaryFromReader(t, a) {
            return l.zj(Ze.MBF(), t, a);
          }
          serializeBinary() {
            var t = new (s().BinaryWriter)();
            return Ze.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, a) {
            l.i0(Ze.M(), t, a);
          }
          serializeBase64String() {
            var t = new (s().BinaryWriter)();
            return (
              Ze.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCatalog_GetDevPageListApps_Response_ListApp";
          }
        };
        c(S, "sm_m"), c(S, "sm_mbf");
        let f = S;
        const I = class et extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              et.prototype.partnerid || l.Sg(et.M()),
              u.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static M() {
            return (
              et.sm_m ||
                (et.sm_m = {
                  proto: et,
                  fields: {
                    partnerid: {
                      n: 1,
                      br: l.qM.readUint32,
                      bw: l.gp.writeUint32,
                    },
                  },
                }),
              et.sm_m
            );
          }
          static MBF() {
            return et.sm_mbf || (et.sm_mbf = l.w0(et.M())), et.sm_mbf;
          }
          toObject(t = !1) {
            return et.toObject(t, this);
          }
          static toObject(t, a) {
            return l.BT(et.M(), t, a);
          }
          static fromObject(t) {
            return l.Uq(et.M(), t);
          }
          static deserializeBinary(t) {
            let a = new (s().BinaryReader)(t),
              y = new et();
            return et.deserializeBinaryFromReader(y, a);
          }
          static deserializeBinaryFromReader(t, a) {
            return l.zj(et.MBF(), t, a);
          }
          serializeBinary() {
            var t = new (s().BinaryWriter)();
            return et.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, a) {
            l.i0(et.M(), t, a);
          }
          serializeBase64String() {
            var t = new (s().BinaryWriter)();
            return (
              et.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCatalog_GetDevPagesForPartner_Request";
          }
        };
        c(I, "sm_m"), c(I, "sm_mbf");
        let x = I;
        const m = class tt extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              tt.prototype.results || l.Sg(tt.M()),
              u.Message.initialize(this, t, 0, -1, [1], null);
          }
          static M() {
            return (
              tt.sm_m ||
                (tt.sm_m = {
                  proto: tt,
                  fields: { results: { n: 1, c: g, r: !0, q: !0 } },
                }),
              tt.sm_m
            );
          }
          static MBF() {
            return tt.sm_mbf || (tt.sm_mbf = l.w0(tt.M())), tt.sm_mbf;
          }
          toObject(t = !1) {
            return tt.toObject(t, this);
          }
          static toObject(t, a) {
            return l.BT(tt.M(), t, a);
          }
          static fromObject(t) {
            return l.Uq(tt.M(), t);
          }
          static deserializeBinary(t) {
            let a = new (s().BinaryReader)(t),
              y = new tt();
            return tt.deserializeBinaryFromReader(y, a);
          }
          static deserializeBinaryFromReader(t, a) {
            return l.zj(tt.MBF(), t, a);
          }
          serializeBinary() {
            var t = new (s().BinaryWriter)();
            return tt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, a) {
            l.i0(tt.M(), t, a);
          }
          serializeBase64String() {
            var t = new (s().BinaryWriter)();
            return (
              tt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCatalog_GetDevPagesForPartner_Response";
          }
        };
        c(m, "sm_m"), c(m, "sm_mbf");
        let o = m;
        const i = class rt extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              rt.prototype.clan_accountid || l.Sg(rt.M()),
              u.Message.initialize(this, t, 0, -1, [2], null);
          }
          static M() {
            return (
              rt.sm_m ||
                (rt.sm_m = {
                  proto: rt,
                  fields: {
                    clan_accountid: {
                      n: 1,
                      br: l.qM.readUint32,
                      bw: l.gp.writeUint32,
                    },
                    linknames: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: l.qM.readString,
                      bw: l.gp.writeRepeatedString,
                    },
                  },
                }),
              rt.sm_m
            );
          }
          static MBF() {
            return rt.sm_mbf || (rt.sm_mbf = l.w0(rt.M())), rt.sm_mbf;
          }
          toObject(t = !1) {
            return rt.toObject(t, this);
          }
          static toObject(t, a) {
            return l.BT(rt.M(), t, a);
          }
          static fromObject(t) {
            return l.Uq(rt.M(), t);
          }
          static deserializeBinary(t) {
            let a = new (s().BinaryReader)(t),
              y = new rt();
            return rt.deserializeBinaryFromReader(y, a);
          }
          static deserializeBinaryFromReader(t, a) {
            return l.zj(rt.MBF(), t, a);
          }
          serializeBinary() {
            var t = new (s().BinaryWriter)();
            return rt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, a) {
            l.i0(rt.M(), t, a);
          }
          serializeBase64String() {
            var t = new (s().BinaryWriter)();
            return (
              rt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCatalog_GetDevPagesForPartner_Response_CDevPageInfo";
          }
        };
        c(i, "sm_m"), c(i, "sm_mbf");
        let g = i;
        var F;
        ((w) => {
          function t(E, X, Z) {
            return E.SendMsg(
              "StoreCatalog.SetDevPageLink#1",
              (0, r.I8)(D, X, Z),
              N,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          w.SetDevPageLink = t;
          function a(E, X, Z) {
            return E.SendMsg(
              "StoreCatalog.GetDevPageLinks#1",
              (0, r.I8)(K, X, Z),
              j,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          w.GetDevPageLinks = a;
          function y(E, X, Z) {
            return E.SendMsg(
              "StoreCatalog.GetDevPageAllAppsLinked#1",
              (0, r.I8)(C, X, Z),
              T,
              { ePrivilege: 1 },
            );
          }
          w.GetDevPageAllAppsLinked = y;
          function h(E, X, Z) {
            return E.SendMsg(
              "StoreCatalog.GetDevPageListApps#1",
              (0, r.I8)(W, X, Z),
              mt,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          w.GetDevPageListApps = h;
          function P(E, X, Z) {
            return E.SendMsg(
              "StoreCatalog.GetDevPagesForPartner#1",
              (0, r.I8)(x, X, Z),
              o,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          w.GetDevPagesForPartner = P;
        })(F || (F = {}));
        var st = B(60001),
          ot = B(88942),
          gt = B(41735),
          yt = B.n(gt),
          ft = B(14947),
          V = B(33512),
          J = B(3166),
          wt = Object.defineProperty,
          At = Object.getOwnPropertyDescriptor,
          ht = (w, t, a) =>
            t in w
              ? wt(w, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: a,
                })
              : (w[t] = a),
          Rt = (w, t, a, y) => {
            for (
              var h = y > 1 ? void 0 : y ? At(t, a) : t, P = w.length - 1, E;
              P >= 0;
              P--
            )
              (E = w[P]) && (h = (y ? E(t, a, h) : E(h)) || h);
            return y && h && wt(t, a, h), h;
          },
          lt = (w, t, a) => ht(w, typeof t != "symbol" ? t + "" : t, a);
        class Mt {
          constructor(t) {
            lt(this, "m_clanSteamID"),
              lt(this, "m_appidList", new Array()),
              lt(this, "m_strName", ""),
              lt(this, "m_strAvatarURLFullSize", ""),
              lt(this, "m_strTagLineLoc", ""),
              lt(this, "m_nFollowers", 0),
              lt(this, "m_strVanity", ""),
              lt(this, "m_webLink"),
              lt(this, "m_linkedEvent"),
              lt(this, "m_mapListInfo", new Map()),
              lt(this, "m_promise"),
              lt(this, "m_bIsLoaded", !1),
              lt(this, "m_bIsHidden", !1),
              lt(this, "m_clanAccountFlags", 0),
              (0, ft.Gn)(this),
              (this.m_clanSteamID = t);
          }
          Initialize(t) {
            var a, y;
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
                (a = t.clan_account_flags) != null ? a : 0),
              (this.m_linkedEvent = t.linked_event),
              (this.m_mapListInfo = new Map(
                Object.entries((y = t.list_info) != null ? y : {}),
              )),
              t.appids && t.appids.forEach((h) => this.m_appidList.push(h)),
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
            return !!(this.m_clanAccountFlags & V.Wv.GH);
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
                    J.TS.STORE_BASE_URL + "publisher/" + this.m_strVanity + "/"
                  );
                case "franchise":
                  return (
                    J.TS.STORE_BASE_URL + "franchise/" + this.m_strVanity + "/"
                  );
              }
              return (
                J.TS.STORE_BASE_URL + "developer/" + this.m_strVanity + "/"
              );
            }
            return (
              J.TS.STORE_BASE_URL +
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
              (await this.UpdateGroupFlagsFeature([V.Wv.bM, V.Wv.GH], !0));
          }
          async UpdateGroupFlagsFeature(t, a) {
            let y = J.TS.PARTNER_BASE_URL + "sales/ajaxupdateclanaccountflags",
              h = this.m_clanAccountFlags;
            if (
              (t.forEach((Z) => {
                a ? (h |= Z) : (h &= ~Z);
              }),
              h == this.m_clanAccountFlags)
            )
              return;
            let P = new Array();
            h & V.Wv._x && P.push(V.Wv._x),
              h & V.Wv.GH && P.push(V.Wv.GH),
              h & V.Wv.bM && P.push(V.Wv.bM),
              h & V.Wv.Jb && P.push(V.Wv.Jb),
              h & V.Wv.Nq && P.push(V.Wv.Nq),
              h & V.Wv.Jn && P.push(V.Wv.Jn),
              h & V.Wv.Mv && P.push(V.Wv.Mv),
              h & V.Wv.xc && P.push(V.Wv.xc),
              h & V.Wv.yl && P.push(V.Wv.yl);
            let E = new FormData();
            E.append("sessionid", (0, J.KC)()),
              E.append("clan_account_id", this.GetClanAccountID().toString()),
              E.append("accountflags", JSON.stringify(P));
            let X = await yt().post(y, E);
            X &&
              X.status == 200 &&
              X.data.success == b.R &&
              (this.m_clanAccountFlags = h);
          }
        }
        Rt([ft.sH], Mt.prototype, "m_appidList", 2),
          Rt([ft.sH], Mt.prototype, "m_nFollowers", 2),
          Rt([ft.sH], Mt.prototype, "m_clanAccountFlags", 2);
        var vt = B(13018),
          Ct = B(76559),
          zt = B(77291),
          Tt = Object.defineProperty,
          It = Object.getOwnPropertyDescriptor,
          Ft = (w, t, a) =>
            t in w
              ? Tt(w, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: a,
                })
              : (w[t] = a),
          St = (w, t, a, y) => {
            for (
              var h = y > 1 ? void 0 : y ? It(t, a) : t, P = w.length - 1, E;
              P >= 0;
              P--
            )
              (E = w[P]) && (h = (y ? E(t, a, h) : E(h)) || h);
            return y && h && Tt(t, a, h), h;
          },
          ut = (w, t, a) => Ft(w, typeof t != "symbol" ? t + "" : t, a);
        const e = class Gt {
          constructor() {
            ut(this, "m_mapClanToCreatorHome", new Map()),
              ut(this, "m_mapAppToCreatorIDList", new Map()),
              ut(this, "m_bLoadedFromConfig", !1),
              ut(this, "m_serviceTransport"),
              (0, ft.Gn)(this);
          }
          LazyInit() {
            if (!this.m_bLoadedFromConfig) {
              const t = (0, J.Tc)("creatorhome", "application_config");
              this.ValidateStoreDefault(t) &&
                t.forEach((y) => {
                  const h = Number(y.creator_clan_id),
                    P = Ct.b.InitFromClanID(h),
                    E = new Mt(P);
                  E.Initialize(y),
                    (E.m_promise = Gt.GetAsPromise(E)),
                    this.m_mapClanToCreatorHome.set(h, E);
                });
              const a = (0, J.Tc)("creatorhomeforapp", "application_config");
              this.ValidateStoreDefaultAppList(a) &&
                a.forEach((y) => {
                  y.appid !== void 0 &&
                    (this.m_mapAppToCreatorIDList.has(y.appid) ||
                      this.m_mapAppToCreatorIDList.set(y.appid, new Array()),
                    this.m_mapAppToCreatorIDList.get(y.appid).push(y));
                }),
                (this.m_bLoadedFromConfig = !0);
            }
          }
          GetServiceTransport() {
            if (!this.m_serviceTransport) {
              const t = (0, J.Tc)("loyalty_webapi_token", "application_config"),
                a = new vt.D(J.TS.WEBAPI_BASE_URL, t || void 0);
              this.m_serviceTransport = a.GetServiceTransport();
            }
            return this.m_serviceTransport;
          }
          static async GetAsPromise(t) {
            return t;
          }
          ValidateStoreDefault(t) {
            const a = t;
            return a &&
              Array.isArray(a) &&
              a.length > 0 &&
              typeof a[0] == "object"
              ? typeof a[0].name == "string" &&
                  (typeof a[0].creator_clan_id == "string" ||
                    typeof a[0].creator_clan_id == "number")
              : !1;
          }
          ValidateStoreDefaultAppList(t) {
            const a = t;
            return a &&
              Array.isArray(a) &&
              a.length > 0 &&
              typeof a[0] == "object"
              ? typeof a[0].clan_account_id == "number" &&
                  a[0].clan_account_id > 0 &&
                  typeof a[0].appid == "number" &&
                  a[0].appid > 0
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
          async LoadCreatorHome(t, a = !1, y) {
            if (
              (this.LazyInit(),
              a || !this.m_mapClanToCreatorHome.has(t.GetAccountID()))
            ) {
              let h = new Mt(t);
              (h.m_promise = this.InternalCreatorHome(h, y)),
                await h.m_promise,
                this.m_mapClanToCreatorHome.set(t.GetAccountID(), h);
            }
            return this.m_mapClanToCreatorHome.get(t.GetAccountID()).m_promise;
          }
          async InternalCreatorHome(t, a) {
            let y = { get_appids: !0, l: J.TS.LANGUAGE },
              h =
                J.TS.STORE_BASE_URL +
                "curator/" +
                t.GetClanAccountID() +
                "/ajaxgetcreatorhomeinfo",
              P = await yt().get(h, { params: y, cancelToken: a && a.token });
            return t.Initialize(P.data), t;
          }
          async LoadCreatorHomeListForAppIncludeHiddden(t, a) {
            if ((this.LazyInit(), !this.m_mapAppToCreatorIDList.has(t))) {
              let y = { appid: t },
                h = J.TS.STORE_BASE_URL + "events/ajaxgetcreatorhomeidforapp",
                P = await yt().get(h, {
                  params: y,
                  cancelToken: a && a.token,
                  withCredentials: !0,
                });
              this.m_mapAppToCreatorIDList.set(t, P.data.creator_list);
            }
            return this.m_mapAppToCreatorIDList.get(t);
          }
          async SearchCreatorHomeStore(t, a, y) {
            let h = `${J.TS.STORE_BASE_URL}curator/0/ajaxsearchcurators`,
              P = {
                term: t.replace(" ", "+"),
                require_creator: a,
                cc: J.TS.COUNTRY,
                l: J.TS.LANGUAGE,
                origin: self.origin,
              },
              E = new Array();
            const X = await yt().get(h, { params: P, cancelToken: y.token });
            return (
              X.data.curators &&
                (0, ft.h5)(() => {
                  X.data.curators.forEach((Z) => {
                    if (!this.m_mapClanToCreatorHome.has(Z.creator_clan_id)) {
                      let Wt = Ct.b.InitFromClanID(Z.creator_clan_id),
                        Lt = new Mt(Wt);
                      Lt.Initialize(Z),
                        this.m_mapClanToCreatorHome.set(Z.creator_clan_id, Lt);
                    }
                    E.push(this.m_mapClanToCreatorHome.get(Z.creator_clan_id));
                  });
                }),
              E
            );
          }
          GetCreatorHomeListForAppIncludeHidden(t) {
            return this.m_mapAppToCreatorIDList.has(t)
              ? this.m_mapAppToCreatorIDList.get(t)
              : [];
          }
        };
        St([ft.sH], e.prototype, "m_mapClanToCreatorHome", 2),
          St([ft.sH], e.prototype, "m_mapAppToCreatorIDList", 2),
          St([ft.XI], e.prototype, "LazyInit", 1);
        let n = e;
        const z = new n();
        (0, zt.V)("g_CreatorHomeStore", z);
        function Pt(w) {
          if (!w) return null;
          const t = z.BHasCreatorHomeLoaded(w.clanSteamID)
            ? z.GetCreatorHome(w.clanSteamID)
            : void 0;
          return w.GetSaleURL(
            t == null ? void 0 : t.GetCreatorHomeURL("developer"),
          );
        }
        function _t(w) {
          var t, a;
          if (!w) return;
          const y = (0, J.Tc)("creator_home_list_info", "application_config");
          if (y == null || typeof y != "object" || Array.isArray(y)) return;
          const h = y[w];
          if (!(!h || !h.title))
            return {
              title: h.title,
              description:
                (t = h.description) != null && t.length
                  ? h.description
                  : void 0,
              imageUrl:
                (a = h.listtileimage) != null && a.length
                  ? h.listtileimage
                  : void 0,
            };
        }
        function Ot(w) {
          var t;
          return (t = _t(w)) == null ? void 0 : t.title;
        }
        function Ut(w) {
          var t;
          return (t = _t(w)) == null ? void 0 : t.description;
        }
        function dt(w) {
          var t;
          return (t = _t(w)) == null ? void 0 : t.imageUrl;
        }
        function ct(w) {
          const t = Ct.b.InitFromClanID(w);
          return {
            queryKey: ["CreatorHome", w],
            initialData: () => z.GetCreatorHome(t),
            queryFn: async () => {
              const a = Ct.b.InitFromClanID(w);
              return await z.LoadCreatorHome(a, !0);
            },
          };
        }
        function pt(w) {
          const { data: t, isFetching: a, refetch: y } = (0, ot.I)(ct(w));
          return { creatorHome: t, isFetching: a, refetch: y };
        }
        function Nt(w, t, a) {
          const y = useQuery({
            queryKey: ["useCreateHomeLinkedApps", t, a],
            queryFn: async () => {
              const h = CProtoBufMsg.Init(
                CStoreCatalog_GetDevPageAllAppsLinked_Request,
              );
              h.Body().add_clan_account_ids(t),
                a && h.Body().set_ignore_dlc(!0);
              const P = await StoreCatalogService.GetDevPageAllAppsLinked(w, h);
              if (P.GetEResult() != k_EResultOK)
                throw new Error(
                  `Error from useCreateHomeLinkedApps: ${P.GetEResult()}`,
                );
              return P.Body().results().length == 0
                ? []
                : P.Body().results()[0].appid_list();
            },
            enabled: !!(t > 0 && w),
          });
          return y != null && y.isLoading ? null : y.data;
        }
        function Dt(w, t, a) {
          return {
            queryKey: ["GetCreatorHomeListAppsQuery", w, t, a],
            queryFn: async () => {
              const y = z.GetServiceTransport(),
                h = r.w.Init(W);
              h.Body().set_clan_account_id(w),
                h.Body().set_listid(t),
                a && h.Body().set_ignore_dlc(!0);
              const P = await F.GetDevPageListApps(y, h);
              if (P.GetEResult() != b.R)
                throw new Error(
                  `Error from GetCreatorHomeListAppsQuery: ${P.GetEResult()}`,
                );
              return P.Body()
                .apps()
                .slice()
                .sort((E, X) => {
                  var Z, Wt;
                  return (
                    ((Z = E.sort_order()) != null ? Z : 0) -
                    ((Wt = X.sort_order()) != null ? Wt : 0)
                  );
                })
                .map((E) => {
                  var X;
                  return (X = E.appid()) != null ? X : 0;
                })
                .filter((E) => E > 0);
            },
            enabled: !!(w > 0 && t),
          };
        }
        function qt(w, t, a) {
          const y = (0, ot.I)(Dt(w, t, a));
          return y != null && y.isLoading ? null : y.data;
        }
        function Et(w, t) {
          return {
            queryKey: ["GetCreatorHomeGetAllListsQuery", w, t],
            queryFn: async () => {
              const a = z.GetServiceTransport(),
                y = r.w.Init(st.eh);
              y
                .Body()
                .set_steamid(
                  new Ct.b(w, J.TS.EUNIVERSE, d.P3F, 0).ConvertTo64BitString(),
                ),
                y.Body().set_count(100);
              const h = await st.K_.GetLists(a, y);
              return h.BSuccess()
                ? h
                    .Body()
                    .list_details()
                    .filter((P) => t || P.list_state() != st.eb.N0)
                : null;
            },
            enabled: w > 0,
          };
        }
        function xt(w, t) {
          const { data: a, isFetching: y, refetch: h } = (0, ot.I)(Et(w, t));
          return { lists: a, isFetching: y, refetch: h };
        }
        function jt(w, t) {
          return {
            queryKey: ["GetCreatorHomeGetListsDetailsQuery", w, t],
            queryFn: async () => {
              var a;
              const y = z.GetServiceTransport(),
                h = r.w.Init(st.dU);
              h
                .Body()
                .set_steamid(
                  new Ct.b(w, J.TS.EUNIVERSE, d.P3F, 0).ConvertTo64BitString(),
                ),
                h.Body().set_listid(t);
              const P = await st.K_.GetListDetails(y, h);
              return P.BSuccess() && (a = P.Body().list_details()) != null
                ? a
                : null;
            },
            enabled: w > 0,
          };
        }
        function Ht(w, t) {
          const { data: a, isFetching: y, refetch: h } = useQuery(jt(w, t));
          return { list: a, isFetching: y, refetch: h };
        }
      },
      57698: (Bt, it, B) => {
        B.d(it, { N: () => b });
        var b = ((d) => (
          (d[(d.k_ENotifyFlagNone = 0)] = "k_ENotifyFlagNone"),
          (d[(d.k_ENotifyFlagByEmail = 1)] = "k_ENotifyFlagByEmail"),
          (d[(d.k_ENotifyFlagByPush = 2)] = "k_ENotifyFlagByPush"),
          d
        ))(b || {});
      },
      7638: (Bt, it, B) => {
        B.d(it, { Ec: () => Y, KN: () => H });
        var b = B(72604),
          d = B(35038),
          r = B(98112),
          u = B(41735),
          s = B.n(u),
          l = B(14947),
          Q = B(90626),
          R = B(76559),
          L = B(49628),
          G = B(71742),
          O = B(34592),
          A = B(3166),
          U = B(57698),
          nt = Object.defineProperty,
          at = Object.getOwnPropertyDescriptor,
          $ = (j, p, C) =>
            p in j
              ? nt(j, p, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: C,
                })
              : (j[p] = C),
          c = (j, p, C, _) => {
            for (
              var T = _ > 1 ? void 0 : _ ? at(p, C) : p, v = j.length - 1, W;
              v >= 0;
              v--
            )
              (W = j[v]) && (T = (_ ? W(p, C, T) : W(T)) || T);
            return _ && T && nt(p, C, T), T;
          },
          M = (j, p, C) => $(j, typeof p != "symbol" ? p + "" : p, C);
        class D {
          constructor(p) {
            M(this, "clanid"),
              M(this, "appid", 0),
              M(this, "can_edit", !1),
              M(this, "owns_app", !1),
              M(this, "follows_app", !1),
              M(this, "support_user", !1),
              M(this, "valve_admin", !1),
              M(this, "limited_user", !1),
              M(this, "event_ignored", new Array()),
              M(this, "event_followed", new Array()),
              M(this, "event_followed_flags", new Array()),
              (0, l.Gn)(this),
              (this.clanid = p);
          }
        }
        c([l.sH], D.prototype, "clanid", 2),
          c([l.sH], D.prototype, "appid", 2),
          c([l.sH], D.prototype, "can_edit", 2),
          c([l.sH], D.prototype, "owns_app", 2),
          c([l.sH], D.prototype, "follows_app", 2),
          c([l.sH], D.prototype, "support_user", 2),
          c([l.sH], D.prototype, "valve_admin", 2),
          c([l.sH], D.prototype, "limited_user", 2),
          c([l.sH], D.prototype, "event_ignored", 2),
          c([l.sH], D.prototype, "event_followed", 2),
          c([l.sH], D.prototype, "event_followed_flags", 2);
        const N = class bt {
          constructor() {
            M(this, "m_mapClanToUserPermissions", new Map()),
              M(this, "m_mapAnnounceGIDToVote", new Map()),
              M(this, "m_cm"),
              M(this, "m_bIsPresentationMode", (0, A.Bu)()),
              (0, l.Gn)(this);
          }
          static Get() {
            return (
              (0, G.wT)(
                !!bt.s_EventUserStore,
                "Have not yet initialized global EventUserStore",
              ),
              bt.s_EventUserStore
            );
          }
          static IsInitialized() {
            return !!bt.s_EventUserStore;
          }
          static async InitGlobal(p) {
            if (!bt.s_EventUserStore) {
              const C = new bt();
              await C.Init(p), (bt.s_EventUserStore = C);
            }
          }
          static BIsInited() {
            return !!bt.s_EventUserStore;
          }
          async Init(p) {
            this.m_cm = p;
            const C = (0, A.Fd)(
              "partnereventpermissions",
              "application_config",
            );
            this.ValidateStoreDefault(C) &&
              (0, l.h5)(() => {
                C.forEach((T) => {
                  let v = new D(T.clanid),
                    W = {
                      result: v,
                      promise: bt.RemapToPromise(v),
                      bLoaded: !0,
                    };
                  this.CopyFromResponseToTrack(W, T),
                    this.m_mapClanToUserPermissions.set(T.clanid, W);
                });
              });
            let _ = (0, A.Fd)("uservotes", "application_config");
            _ &&
              (0, l.h5)(() => {
                _.forEach((T) => {
                  let v = T.voted_up ? !0 : T.voted_down ? !1 : void 0;
                  this.m_mapAnnounceGIDToVote.set(T.clanAnnouncementGID, v);
                });
              });
          }
          ValidateStoreDefault(p) {
            const C = p;
            return C &&
              Array.isArray(C) &&
              C.length > 0 &&
              typeof C[0] == "object"
              ? typeof C[0].clanid == "number" && typeof C[0].appid == "number"
              : !1;
          }
          static async RemapToPromise(p) {
            return p;
          }
          BIsUserLoggedIn() {
            return A.iA.logged_in;
          }
          BIsPartnerEventPermissionsLoaded(p) {
            return (
              this.m_mapClanToUserPermissions.has(p) &&
              this.m_mapClanToUserPermissions.get(p).bLoaded
            );
          }
          GetPartnerEventPermissions(p) {
            if (!p || !p.BIsValid()) return new D(0);
            const C = p.GetAccountID();
            return (
              this.m_mapClanToUserPermissions.has(C) ||
                this.LoadSingleAppEventPermissions(p),
              this.m_mapClanToUserPermissions.get(C).result
            );
          }
          async LoadSingleAppEventPermissions(p) {
            let C = p.GetAccountID(),
              _ = this.m_mapClanToUserPermissions.get(C);
            return (
              _ ||
                ((_ = {
                  promise: this.InternalLoadSingleAppEventPermissions(p),
                  result: new D(C),
                  bLoaded: !1,
                }),
                this.m_mapClanToUserPermissions.set(C, _)),
              _.promise
            );
          }
          CopyFromResponseToTrack(p, C) {
            var _, T, v, W;
            (p.result.appid = (_ = C.appid) != null ? _ : 0),
              (p.result.can_edit = !!C.can_edit),
              (p.result.clanid = C.appid),
              (p.result.event_followed =
                (T = C.event_followed) != null ? T : []),
              (p.result.event_ignored = (v = C.event_ignored) != null ? v : []),
              (p.result.event_followed_flags =
                (W = C.event_followed_flags) != null ? W : []),
              (p.result.follows_app = !!C.follows_app),
              (p.result.owns_app = !!C.owns_app),
              (p.result.limited_user = !!C.limited_user),
              (C.support_user || C.valve_admin) && this.m_bIsPresentationMode
                ? ((p.result.can_edit = !0),
                  (p.result.support_user = !1),
                  (p.result.valve_admin = !1))
                : ((p.result.support_user = !!C.support_user),
                  (p.result.valve_admin = !!C.valve_admin)),
              (p.bLoaded = !0);
          }
          async InternalLoadSingleAppEventPermissions(p) {
            let C = null,
              _ = p.GetAccountID(),
              T = !A.iA.logged_in;
            if (!this.m_mapClanToUserPermissions.has(_)) {
              let v = new D(p.GetAccountID());
              this.m_mapClanToUserPermissions.set(_, {
                result: v,
                promise: bt.RemapToPromise(v),
                bLoaded: !1,
              });
            }
            try {
              if (A.iA.logged_in) {
                let v =
                    A.TS.COMMUNITY_BASE_URL +
                    "gid/" +
                    p.ConvertTo64BitString() +
                    "/ajaxgetpartnereventpermissions/",
                  W = {};
                if (
                  ((0, A.yK)() == "partnerweb"
                    ? ((v =
                        A.TS.PARTNER_BASE_URL +
                        "partnerevents/ajaxgetpartnereventpermissions"),
                      (W = { clanaccountid: p.GetAccountID() }))
                    : (0, A.yK)() == "store" &&
                      ((v =
                        A.TS.STORE_BASE_URL +
                        "events/ajaxgetpartnereventpermissions"),
                      (W = { clanaccountid: p.GetAccountID() })),
                  (C = await s().get(v, { params: W, withCredentials: !0 })),
                  !C || C.data.success != b.R)
                )
                  console.error(
                    "Partner Events Failed Load:" +
                      (0, O.H)(C == null ? void 0 : C.data).strErrorMsg,
                  ),
                    (T = !0);
                else {
                  let q = this.m_mapClanToUserPermissions.get(_);
                  q && this.CopyFromResponseToTrack(q, C.data);
                }
              }
            } catch (v) {
              if (
                ((C = v.response),
                (T = !0),
                !(
                  v &&
                  typeof v.response != "undefined" &&
                  typeof v.response.data != "undefined" &&
                  typeof v.response.data.success != "undefined" &&
                  v.response.data.success == b.Dy
                ))
              ) {
                const W = (0, O.H)(v);
                console.error(
                  "InternalLoadSingleAppEventPermissions account: " +
                    _ +
                    ": " +
                    W.strErrorMsg,
                  W,
                );
              }
            } finally {
              T &&
                (0, l.h5)(() => {
                  var v;
                  let W = this.m_mapClanToUserPermissions.get(_);
                  (W.result.appid =
                    (v = C == null ? void 0 : C.data.appid) != null ? v : 0),
                    (W.result.can_edit = !1),
                    (W.result.clanid = C && C.data ? C.data.clanid : 0),
                    (W.result.event_followed = new Array()),
                    (W.result.event_ignored = new Array()),
                    (W.result.event_followed_flags = new Array()),
                    (W.result.follows_app = !1),
                    (W.result.owns_app = !1),
                    (W.result.support_user = !1),
                    (W.result.valve_admin = !1),
                    (W.result.limited_user = !1),
                    (W.bLoaded = !0);
                });
            }
            return this.m_mapClanToUserPermissions.get(_).result;
          }
          async Vote(p, C, _) {
            if (!p || !p.AnnouncementGID) return !1;
            const T = this.m_mapAnnounceGIDToVote.get(p.AnnouncementGID);
            if (T === C) return !0;
            if (
              (this.m_mapAnnounceGIDToVote.set(p.AnnouncementGID, C),
              (0, l.h5)(() => {
                T === !0 && p.UpdateVoteCount("up", -1),
                  T === !1 && p.UpdateVoteCount("down", -1),
                  C === !0 && p.UpdateVoteCount("up", 1),
                  C === !1 && p.UpdateVoteCount("down", 1);
              }),
              this.m_cm)
            ) {
              let v = d.w.Init(r.QU);
              return (
                v.Body().set_announcementid(p.AnnouncementGID),
                v.Body().set_vote_up(!!C),
                v.Body().set_clan_accountid(p.clanSteamID.GetAccountID()),
                (
                  await r.BE.RateClanAnnouncement(
                    this.m_cm.GetServiceTransport(),
                    v,
                  )
                ).GetEResult() == b.R
              );
            } else {
              const v = (0, A.yK)(),
                W =
                  v == "community" || v == "steamtv"
                    ? A.TS.COMMUNITY_BASE_URL +
                      "gid/" +
                      p.clanSteamID.ConvertTo64BitString() +
                      "/announcements/rate/" +
                      p.AnnouncementGID
                    : A.TS.STORE_BASE_URL +
                      "updated/ajaxrateupdate/" +
                      p.AnnouncementGID,
                q = new URLSearchParams();
              q.append("sessionid", (0, A.KC)()),
                q.append("voteup", C ? "1" : "0"),
                q.append("clanid", "" + p.clanSteamID.GetAccountID()),
                q.append("ajax", "1");
              const mt = { withCredentials: !0, cancelToken: _.token };
              return (await s().post(W, q, mt)).data.success == b.R;
            }
          }
          async LoadMyVote(p, C) {
            if (p != null && p.AnnouncementGID) {
              if (this.m_mapAnnounceGIDToVote.has(p.AnnouncementGID))
                return !!this.m_mapAnnounceGIDToVote.get(p.AnnouncementGID);
              let _;
              if (this.m_cm) {
                let T = d.w.Init(r.$Y);
                T.Body().set_announcementid(p.AnnouncementGID);
                let v = await r.BE.GetClanAnnouncementVoteForUser(
                  this.m_cm.GetServiceTransport(),
                  T,
                );
                v.GetEResult() == b.R &&
                  (_ = v.Body().voted_up()
                    ? !0
                    : v.Body().voted_down()
                      ? !1
                      : void 0);
              } else {
                const T = (0, A.yK)() == "store",
                  v = T
                    ? A.TS.STORE_BASE_URL + "actions/ajaxgetmyannouncementvote"
                    : A.TS.COMMUNITY_BASE_URL +
                      "gid/" +
                      p.clanSteamID.ConvertTo64BitString() +
                      "/announcements/ajaxgetmyvote/" +
                      p.AnnouncementGID,
                  W = { gid: T ? p.AnnouncementGID : void 0 },
                  q = await s().get(v, {
                    withCredentials: !0,
                    cancelToken: C.token,
                    params: W,
                  });
                _ = q.data.voted_up ? !0 : q.data.voted_down ? !1 : void 0;
              }
              return this.m_mapAnnounceGIDToVote.set(p.AnnouncementGID, _), _;
            }
          }
          SetVote(p, C) {
            this.m_mapAnnounceGIDToVote.set(p, C);
          }
          BHasMyVote(p) {
            return p.AnnouncementGID
              ? this.m_mapAnnounceGIDToVote.has(p.AnnouncementGID)
              : !1;
          }
          GetPreviouslyLoadedVote(p) {
            return p.AnnouncementGID
              ? this.m_mapAnnounceGIDToVote.get(p.AnnouncementGID)
              : void 0;
          }
          BShowEmailEditorTab(p) {
            if (
              p.BHasEmailEnabled() ||
              p.clanSteamID.GetAccountID() == (0, L.H)()
            )
              return !0;
            let C = this.GetPartnerEventPermissions(p.clanSteamID);
            return (A.UF.IS_OGG || A.UF.IS_VALVE_GROUP) && C.valve_admin;
          }
        };
        M(N, "s_EventUserStore"),
          c([l.sH], N.prototype, "m_mapClanToUserPermissions", 2),
          c([l.sH], N.prototype, "m_mapAnnounceGIDToVote", 2),
          c([l.XI], N.prototype, "CopyFromResponseToTrack", 1);
        let H = N;
        function K() {
          const [j, p] = useState(() => H.BIsInited());
          return (
            useEffect(() => {
              j || (async () => (await Promise.all([H.InitGlobal()]), p(!0)))();
            }, [j]),
            j
          );
        }
        function Y(j) {
          const [p, C] = (0, Q.useState)(
              H.Get().BIsPartnerEventPermissionsLoaded(j),
            ),
            _ = R.b.InitFromClanID(j),
            [T, v] = (0, Q.useState)(H.Get().GetPartnerEventPermissions(_));
          return (
            (0, Q.useEffect)(() => {
              if (!p) {
                const W = R.b.InitFromClanID(j);
                H.Get()
                  .LoadSingleAppEventPermissions(W)
                  .then((q) => {
                    v(q), C(!0);
                  });
              }
            }, [p, j]),
            T
          );
        }
      },
      49628: (Bt, it, B) => {
        B.d(it, { H: () => r });
        var b = B(99412),
          d = B(98609);
        const r = () => (d.TS.EUNIVERSE === b.Rv ? 2581 : 45267781);
      },
    },
  ]);
})();
