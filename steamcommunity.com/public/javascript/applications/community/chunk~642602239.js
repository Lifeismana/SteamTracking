/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [9118],
    {
      7487: (Q, K, n) => {
        "use strict";
        n.d(K, { K0: () => l, OJ: () => r, R8: () => T });
        var t = n(71742),
          y = n(90626),
          m = Object.defineProperty,
          I = (_, g, b) =>
            g in _
              ? m(_, g, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: b,
                })
              : (_[g] = b),
          j = (_, g, b) => I(_, typeof g != "symbol" ? g + "" : g, b);
        class T {
          constructor() {
            j(this, "reactNodes", []);
          }
          AppendText(g, b = !1) {
            g.length &&
              (b
                ? this.reactNodes.push(
                    y.createElement(
                      "span",
                      {
                        "data-copytext": "",
                        "data-copystyle": "merge-adjacent",
                        "bbcode-text": g,
                      },
                      g,
                    ),
                  )
                : this.reactNodes.push(g));
          }
          AppendNode(g) {
            this.reactNodes.push(g);
          }
          GetElements() {
            return this.reactNodes;
          }
        }
        class l {
          constructor(g) {
            j(this, "m_decoratedAccumulator"),
              (0, t.wT)(g, "decorated accumulator cannot be null"),
              (this.m_decoratedAccumulator = g);
          }
          AppendText(g, b = !1) {
            this.m_decoratedAccumulator.AppendText(g, b);
          }
          AppendNode(g) {
            this.m_decoratedAccumulator.AppendNode(g);
          }
          GetElements() {
            return this.m_decoratedAccumulator.GetElements();
          }
        }
        class r extends l {
          constructor(g) {
            super(g);
          }
          AppendText(g) {
            let b = g;
            const M = [];
            for (
              let S = b.indexOf(`
`);
              S !== -1;
              S = b.indexOf(`
`)
            )
              M.push(b.substr(0, S)),
                M.push(y.createElement("br")),
                (b = b.substr(S + 1));
            b.length && M.push(b),
              M.forEach((S) => {
                super.AppendNode(S);
              });
          }
        }
      },
      8145: (Q, K, n) => {
        "use strict";
        n.d(K, { op: () => M, CS: () => _, vE: () => S, Al: () => r });
        const t = 0,
          y = 1,
          m = 2,
          I = 3;
        var j = Object.defineProperty,
          T = (B, x, L) =>
            x in B
              ? j(B, x, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: L,
                })
              : (B[x] = L),
          l = (B, x, L) => T(B, typeof x != "symbol" ? x + "" : x, L);
        class r {
          constructor(x, L) {
            l(this, "m_fnAccumulatorFactory"),
              l(this, "m_dictComponents"),
              x instanceof Map
                ? (this.m_dictComponents = x)
                : (this.m_dictComponents = new Map(Object.entries(x))),
              (this.m_fnAccumulatorFactory = L);
          }
          Parse(x, L, s = !0) {
            const c = G(x || "", s);
            return this.Parse_BuildElements(c, L);
          }
          Parse_BuildElements(x, L) {
            let s = this.m_fnAccumulatorFactory(void 0);
            const c = [],
              u = () => (c.length < 1 ? void 0 : c[c.length - 1]),
              E = this.m_dictComponents,
              w = (i) => {
                var a;
                return !!(i.tag && (a = E.get(i.tag)) != null && a.autocloses);
              };
            let C = !1,
              f = !0;
            const U = (i, a) => {
              let R = a.text.toLowerCase();
              if (i && i.node.tag === R && E.get(i.node.tag)) {
                const V = E.get(i.node.tag),
                  z = {
                    tagname: i.node.tag,
                    args: i.node.args,
                    rawargs: i.node.rawargs,
                  },
                  F = L(V.Constructor, z, ...s.GetElements());
                (s = i.accumulator),
                  Array.isArray(F)
                    ? F.forEach((J) => s.AppendNode(J))
                    : s.AppendNode(F),
                  (C = !!V.skipFollowingNewline),
                  (f = i.bWrapTextForCopying);
              } else if (i) {
                const V = i.accumulator;
                V.AppendText("[" + i.node.text + "]", !1),
                  s.GetElements().forEach((z) => V.AppendNode(z)),
                  V.AppendText("[/" + a.text + "]", !1),
                  (s = V),
                  (f = i.bWrapTextForCopying);
              }
            };
            for (
              x.forEach((i, a) => {
                var R, V;
                if (i.type == y) {
                  const z = C ? i.text.replace(/^[\t\r ]*\n/g, "") : i.text;
                  s.AppendText(z, f), (C = !1);
                } else if (i.type == m) {
                  const z = E.get(i.tag);
                  if (!z) s.AppendText("[" + i.text + "]", c.length == 0);
                  else {
                    const F = u();
                    if (F !== void 0) {
                      const J = E.get(F.node.tag);
                      J &&
                        J.autocloses &&
                        i.tag === F.node.tag &&
                        U(c.pop(), F.node);
                    }
                    c.push({ accumulator: s, node: i, bWrapTextForCopying: f }),
                      (s = this.m_fnAccumulatorFactory(i)),
                      (C = !!z.skipInternalNewline),
                      (f = (R = z.allowWrapTextForCopying) != null ? R : !1);
                  }
                } else if (i.type == I) {
                  let z = i.text.toLowerCase();
                  for (; u() && u().node.tag !== z && w(u().node); ) {
                    const F = c.pop();
                    U(F, F.node);
                  }
                  if (((V = u()) == null ? void 0 : V.node.tag) == z) {
                    const F = c.pop();
                    U(F, i);
                  } else s.AppendText("[/" + i.text + "]", c.length == 0);
                }
              });
              c.length > 0;
            ) {
              const i = c.pop();
              U(i, i.node);
            }
            return s.GetElements();
          }
        }
        function _(B, x, L = !1) {
          let s = "[" + B;
          x != null && x[""] && (s += `=${L ? "" + x[""] : g("" + x[""])}`);
          for (const c in x) c !== "" && (s += ` ${b(c)}=${g("" + x[c])}`);
          return (s += "]"), s;
        }
        function g(B) {
          return `"${B.replace(/(\\|"|\])/g, "\\$1")}"`;
        }
        function b(B) {
          return B.replace(/(\\| |\])/g, "\\$1");
        }
        function M(B) {
          return `[/${B}]`;
        }
        function S(B) {
          return B.replace(/(\\|\[)/g, "\\$1");
        }
        function v(B, x, L = t) {
          const { type: s, text: c = "" } = x;
          if (s == m) {
            let u = c.indexOf("=");
            const E = c.indexOf(" ");
            E != -1 && (u == -1 || E < u) && (u = E);
            let w,
              C,
              f = "";
            u > 0
              ? ((w = c.substr(0, u).toLocaleLowerCase()),
                (f = c.substr(u)),
                (C = D(f)))
              : ((C = {}), (w = c.toLocaleLowerCase())),
              B.push({ type: s, text: c, tag: w, args: C, rawargs: f });
          } else s != t && B.push({ type: s, text: c });
          return { type: L, text: "" };
        }
        function A(B) {
          var x;
          let L = "";
          return (
            B.type == I ? (L = "[/") : B.type == m && (L = "["),
            { type: y, text: L + ((x = B.text) != null ? x : "") }
          );
        }
        function G(B, x) {
          var L, s, c;
          const u = [];
          let E = { type: t, text: "" },
            w = !1,
            C = !1,
            f = !1;
          for (let U = 0; U < B.length; U++) {
            const i = B[U];
            switch (E.type) {
              case t:
                i == "["
                  ? ((E.type = m), (C = !0))
                  : ((E.type = y), i == "\\" && x ? (w = !w) : (E.text += i));
                break;
              case m:
              case I:
                if (i == "/" && C) (E.type = I), (E.text = ""), (C = !1);
                else if (i == "[" && !w) (E = v(u, A(E), m)), (C = !0);
                else if (i == "]" && !w) {
                  const a =
                      E.type == m &&
                      ((L = E.text) == null ? void 0 : L.toLocaleLowerCase()) ==
                        "noparse",
                    R =
                      E.type == I &&
                      ((s = E.text) == null ? void 0 : s.toLocaleLowerCase()) ==
                        "noparse";
                  C || (f && !R)
                    ? ((E = A(E)), (E.text += i))
                    : a
                      ? (f = !0)
                      : R && (f = !1),
                    (E = v(u, E)),
                    (C = !1);
                } else
                  i == "\\" && x
                    ? ((E.text += i), (w = !w), (C = !1))
                    : ((E.text += i), (w = !1), (C = !1));
                break;
              case y:
                i == "[" && !w
                  ? ((E = v(u, E, m)), (C = !0))
                  : i == "\\" && x
                    ? (w && (E.text += i), (w = !w))
                    : ((E.text += i), (w = !1));
                break;
            }
          }
          return (
            E.type != t &&
              (E.type == m || E.type == I
                ? u.push(A(E))
                : u.push({
                    type: E.type,
                    text: (c = E.text) != null ? c : "",
                  })),
            u
          );
        }
        function D(B) {
          if (!B || B.length < 1) return {};
          const x = {};
          let L = "",
            s = "",
            c;
          ((C) => {
            (C[(C.PRE_NAME = 0)] = "PRE_NAME"),
              (C[(C.IN_NAME = 1)] = "IN_NAME"),
              (C[(C.POST_NAME = 2)] = "POST_NAME"),
              (C[(C.IN_VALUE = 3)] = "IN_VALUE"),
              (C[(C.IN_QUOTED_VALUE = 4)] = "IN_QUOTED_VALUE");
          })(c || (c = {}));
          let u = 0,
            E = 0;
          B[0] == "=" && (u = 2);
          let w = !1;
          for (E++; E < B.length; E++) {
            const C = B[E];
            let f = !0,
              U = !1;
            switch (u) {
              case 0:
                if (C == "=") return {};
                if (C == " ") continue;
                u = 1;
                break;
              case 1:
                (C == "=" || C == " ") &&
                  !w &&
                  (C == " " ? ((u = 0), (U = !0)) : (u = 2), (f = !1));
                break;
              case 2:
                C == " "
                  ? ((u = 0), (f = !1), (U = !0))
                  : C == '"'
                    ? ((u = 4), (f = !1))
                    : (u = 3);
                break;
              case 3:
              case 4:
                ((C == " " && u != 4 && !w) || (C == '"' && u == 4 && !w)) &&
                  ((u = 0), (f = !1), (U = !0));
                break;
            }
            if (f)
              if (C == "\\" && !w) w = !0;
              else if (((w = !1), u == 1)) L += C;
              else if (u == 3 || u == 4) s += C;
              else
                throw new Error(
                  "Not expecting to accumulate buffer in state " + u,
                );
            U && ((x[L] = s), (L = ""), (s = ""));
          }
          return u != 0 && (x[L] = s), x;
        }
      },
      96232: (Q, K, n) => {
        "use strict";
        n.d(K, { B: () => r });
        var t = n(99412),
          y = n(90626),
          m = n(7487),
          I = n(8145),
          j = Object.defineProperty,
          T = (_, g, b) =>
            g in _
              ? j(_, g, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: b,
                })
              : (_[g] = b),
          l = (_, g, b) => T(_, typeof g != "symbol" ? g + "" : g, b);
        class r extends I.Al {
          constructor(g, b, M) {
            super(g, b != null ? b : () => new m.R8()),
              l(this, "m_renderingLanguage"),
              (this.m_renderingLanguage =
                typeof M == "string" ? (0, t.sfN)(M) : M);
          }
          UpdateOverrideLanguage(g) {
            this.m_renderingLanguage = g;
          }
          ParseBBCode(g, b, M = !0) {
            let S = 0;
            const v = this.Parse(
              g,
              (A, G, ...D) =>
                y.createElement(
                  A,
                  {
                    ...G,
                    context: b,
                    language: this.m_renderingLanguage,
                    key: `bbnode_${S++}`,
                  },
                  ...D,
                ),
              M,
            );
            return v.length > 1
              ? y.createElement(y.Fragment, null, ...v)
              : v.length == 1
                ? v[0]
                : null;
          }
        }
      },
      72080: (Q, K, n) => {
        "use strict";
        n.d(K, {
          AT: () => g,
          J7: () => T,
          KN: () => j,
          MG: () => b,
          Yd: () => M,
          bv: () => l,
          gg: () => I,
          mZ: () => _,
          s4: () => S,
          zN: () => r,
        });
        var t = n(7850),
          y = n(11748),
          m = n.n(y);
        const I = {
          Box: y.DynamicLinkBox,
          Preview: y.DynamicLink_Preview,
          Type: y.DynamicLink_Type,
        };
        function j(v) {
          var A;
          return (0, t.jsx)("img", {
            className: y.DynamicLink_Preview,
            src: v.strURL,
            alt: (A = v.strAlt) != null ? A : "",
          });
        }
        function T(v) {
          return (0, t.jsx)("div", {
            className: y.DynamicLink_Content,
            children: v.children,
          });
        }
        function l(v) {
          return (0, t.jsx)("div", {
            className: y.DynamicLink_Name,
            children: v.children,
          });
        }
        function r(v) {
          return (0, t.jsx)("div", {
            className: y.DynamicLink_Author,
            children: v.children,
          });
        }
        function _(v) {
          return (0, t.jsx)("span", {
            className: y.DynamicLink_AuthorName,
            children: v.children,
          });
        }
        function g(v) {
          return (0, t.jsx)("div", {
            className: y.DynamicLink_Description,
            children: v.children,
          });
        }
        function b(v) {
          return (0, t.jsx)("span", {
            className: y.DynamicLink_Date,
            children: v.children,
          });
        }
        function M(v) {
          return (0, t.jsx)("div", {
            className: y.DynamicLink_YoutubeViews,
            children: v.children,
          });
        }
        function S(v) {
          return (0, t.jsx)("div", {
            className: y.Dynamiclink_Content,
            children: v.children,
          });
        }
      },
      80876: (Q, K, n) => {
        "use strict";
        n.d(K, {
          fp: () => Pt,
          $P: () => Tt,
          Du: () => j,
          nS: () => xt,
          oT: () => m,
          f$: () => I,
          LH: () => t,
          Fw: () => $t,
          w3: () => y,
          uy: () => gt,
        });
        var t = {};
        n.r(t), n.d(t, { Xk: () => g, ko: () => Xe });
        var y = {};
        n.r(y), n.d(y, { QI: () => qe });
        var m = {};
        n.r(m),
          n.d(m, {
            XR: () => Me,
            x7: () => rt,
            Bc: () => Ft,
            xJ: () => jt,
            QB: () => Vt,
            Bk: () => Ut,
            Ou: () => Wt,
            r: () => nt,
            PQ: () => Gt,
            W: () => Lt,
            LK: () => kt,
            zE: () => Ot,
            mj: () => Dt,
            hK: () => Nt,
          });
        var I = {};
        n.r(I), n.d(I, { rg: () => zt, kE: () => Kt });
        var j = {};
        n.r(j), n.d(j, { hu: () => Ht, yt: () => Yt });
        var T = n(80613),
          l = n.n(T),
          r = n(75245),
          _ = n(35038);
        const g = 0,
          b = 1,
          M = 2,
          S = 3,
          v = 4,
          A = 5,
          G = 6,
          D = 7,
          B = 8,
          x = 9,
          L = 10,
          s = 11,
          c = 12,
          u = 13,
          E = 14,
          w = 15,
          C = 16,
          f = 17,
          U = 18,
          i = 19,
          a = 20,
          R = 21,
          V = 22,
          z = 23,
          F = 24,
          J = 25,
          te = 26,
          Ce = 27,
          ne = 28,
          Be = 29,
          Pe = 30,
          be = 31,
          xe = 32,
          Ie = 33,
          Re = 34,
          ie = 35,
          ye = 36,
          we = 37,
          ve = 38,
          Z = 39,
          Se = 40,
          re = 41,
          Le = 42,
          Ve = 43,
          He = 44,
          Ye = 45,
          ke = 46,
          Qe = 47,
          Fe = 48,
          Ze = 49,
          Ne = 50,
          $e = 51,
          h = 52,
          O = 53,
          p = 54,
          o = 55,
          P = 56,
          N = 57,
          k = 58,
          W = 59,
          H = 60,
          q = 61,
          ee = 62,
          Ct = 63,
          Ue = 64,
          St = 65,
          vt = 66,
          yt = 67,
          It = 68,
          Mt = 69,
          Je = 70,
          Ge = 71,
          Xe = 72,
          Bt = 0,
          qe = 1,
          bt = 2,
          wt = 3,
          et = 4,
          We = 5,
          ze = 6,
          tt = 0,
          Me = 1,
          rt = 2,
          nt = 3,
          Dt = 4,
          Lt = 5,
          Ot = 6,
          jt = 7,
          Nt = 8,
          Ut = 9,
          Gt = 10,
          Vt = 11,
          kt = 12,
          Wt = 13,
          Ft = 14,
          ur = 0,
          zt = 1,
          Kt = 2,
          Ht = 1,
          dr = 2,
          Yt = 3,
          mr = 4;
        var Qt = Object.defineProperty,
          Zt = (Y, e, d) =>
            e in Y
              ? Qt(Y, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: d,
                })
              : (Y[e] = d),
          X = (Y, e, d) => Zt(Y, typeof e != "symbol" ? e + "" : e, d);
        function $t(Y) {
          return "unknown EVirtualItemRewardEvent ( " + Y + " )";
        }
        function fr(Y) {
          return "unknown EVirtualItemRewardRarity ( " + Y + " )";
        }
        function _r(Y) {
          return "unknown EGameCardDropMethod ( " + Y + " )";
        }
        function hr(Y) {
          return "unknown ECommunityItemSalienType ( " + Y + " )";
        }
        function pr(Y) {
          return "unknown ECommunityItemDropRate ( " + Y + " )";
        }
        function Er(Y) {
          return "unknown ECommunityItemAttribute ( " + Y + " )";
        }
        function gr(Y) {
          return "unknown ECommunityItemApprovalState ( " + Y + " )";
        }
        function Cr(Y) {
          return "unknown ETradabilityPreference ( " + Y + " )";
        }
        function Sr(Y) {
          return "unknown ESummerSale2017TaskType ( " + Y + " )";
        }
        function vr(Y) {
          return "unknown EWinterSale2015ARGBadge ( " + Y + " )";
        }
        function yr(Y) {
          return "unknown ESummerSale2021Genre ( " + Y + " )";
        }
        function Ir(Y) {
          return "unknown ESummerSale2021StoryChoice ( " + Y + " )";
        }
        const it = class se extends T.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              se.prototype.communityitemid || r.Sg(se.M()),
              T.Message.initialize(this, e, 0, -1, [5], null);
          }
          static M() {
            return (
              se.sm_m ||
                (se.sm_m = {
                  proto: se,
                  fields: {
                    communityitemid: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    item_type: {
                      n: 2,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    appid: { n: 3, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    owner: { n: 4, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    attributes: { n: 5, c: Xt, r: !0, q: !0 },
                    used: { n: 6, br: r.qM.readBool, bw: r.gp.writeBool },
                    owner_origin: {
                      n: 7,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    amount: {
                      n: 8,
                      br: r.qM.readInt64String,
                      bw: r.gp.writeInt64String,
                    },
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
          static toObject(e, d) {
            return r.BT(se.M(), e, d);
          }
          static fromObject(e) {
            return r.Uq(se.M(), e);
          }
          static deserializeBinary(e) {
            let d = new (l().BinaryReader)(e),
              $ = new se();
            return se.deserializeBinaryFromReader($, d);
          }
          static deserializeBinaryFromReader(e, d) {
            return r.zj(se.MBF(), e, d);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return se.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, d) {
            r.i0(se.M(), e, d);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              se.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CQuest_CommunityItem";
          }
        };
        X(it, "sm_m"), X(it, "sm_mbf");
        let Jt = it;
        const st = class ae extends T.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ae.prototype.attributeid || r.Sg(ae.M()),
              T.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              ae.sm_m ||
                (ae.sm_m = {
                  proto: ae,
                  fields: {
                    attributeid: {
                      n: 1,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    value: {
                      n: 2,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
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
          static toObject(e, d) {
            return r.BT(ae.M(), e, d);
          }
          static fromObject(e) {
            return r.Uq(ae.M(), e);
          }
          static deserializeBinary(e) {
            let d = new (l().BinaryReader)(e),
              $ = new ae();
            return ae.deserializeBinaryFromReader($, d);
          }
          static deserializeBinaryFromReader(e, d) {
            return r.zj(ae.MBF(), e, d);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, d) {
            r.i0(ae.M(), e, d);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              ae.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CQuest_CommunityItem_Attribute";
          }
        };
        X(st, "sm_m"), X(st, "sm_mbf");
        let Xt = st;
        const at = class oe extends T.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              oe.prototype.filter_appids || r.Sg(oe.M()),
              T.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              oe.sm_m ||
                (oe.sm_m = {
                  proto: oe,
                  fields: {
                    filter_appids: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: r.qM.readUint32,
                      pbr: r.qM.readPackedUint32,
                      bw: r.gp.writeRepeatedUint32,
                    },
                  },
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
          static toObject(e, d) {
            return r.BT(oe.M(), e, d);
          }
          static fromObject(e) {
            return r.Uq(oe.M(), e);
          }
          static deserializeBinary(e) {
            let d = new (l().BinaryReader)(e),
              $ = new oe();
            return oe.deserializeBinaryFromReader($, d);
          }
          static deserializeBinaryFromReader(e, d) {
            return r.zj(oe.MBF(), e, d);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, d) {
            r.i0(oe.M(), e, d);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              oe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CQuest_GetCommunityInventory_Request";
          }
        };
        X(at, "sm_m"), X(at, "sm_mbf");
        let qt = at;
        const ot = class le extends T.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              le.prototype.items || r.Sg(le.M()),
              T.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              le.sm_m ||
                (le.sm_m = {
                  proto: le,
                  fields: { items: { n: 1, c: Jt, r: !0, q: !0 } },
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
          static toObject(e, d) {
            return r.BT(le.M(), e, d);
          }
          static fromObject(e) {
            return r.Uq(le.M(), e);
          }
          static deserializeBinary(e) {
            let d = new (l().BinaryReader)(e),
              $ = new le();
            return le.deserializeBinaryFromReader($, d);
          }
          static deserializeBinaryFromReader(e, d) {
            return r.zj(le.MBF(), e, d);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return le.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, d) {
            r.i0(le.M(), e, d);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              le.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CQuest_GetCommunityInventory_Response";
          }
        };
        X(ot, "sm_m"), X(ot, "sm_mbf");
        let er = ot;
        const lt = class ce extends T.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ce.prototype.appid || r.Sg(ce.M()),
              T.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              ce.sm_m ||
                (ce.sm_m = {
                  proto: ce,
                  fields: {
                    appid: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    item_type: {
                      n: 3,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    language: {
                      n: 4,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    broadcast_channel_id: {
                      n: 5,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    keyvalues_as_json: {
                      n: 6,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
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
          static toObject(e, d) {
            return r.BT(ce.M(), e, d);
          }
          static fromObject(e) {
            return r.Uq(ce.M(), e);
          }
          static deserializeBinary(e) {
            let d = new (l().BinaryReader)(e),
              $ = new ce();
            return ce.deserializeBinaryFromReader($, d);
          }
          static deserializeBinaryFromReader(e, d) {
            return r.zj(ce.MBF(), e, d);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, d) {
            r.i0(ce.M(), e, d);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              ce.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CQuest_GetCommunityItemDefinitions_Request";
          }
        };
        X(lt, "sm_m"), X(lt, "sm_mbf");
        let tr = lt;
        const ct = class ue extends T.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ue.prototype.item_definitions || r.Sg(ue.M()),
              T.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              ue.sm_m ||
                (ue.sm_m = {
                  proto: ue,
                  fields: { item_definitions: { n: 1, c: nr, r: !0, q: !0 } },
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
          static toObject(e, d) {
            return r.BT(ue.M(), e, d);
          }
          static fromObject(e) {
            return r.Uq(ue.M(), e);
          }
          static deserializeBinary(e) {
            let d = new (l().BinaryReader)(e),
              $ = new ue();
            return ue.deserializeBinaryFromReader($, d);
          }
          static deserializeBinaryFromReader(e, d) {
            return r.zj(ue.MBF(), e, d);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, d) {
            r.i0(ue.M(), e, d);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              ue.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CQuest_GetCommunityItemDefinitions_Response";
          }
        };
        X(ct, "sm_m"), X(ct, "sm_mbf");
        let rr = ct;
        const ut = class de extends T.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              de.prototype.item_type || r.Sg(de.M()),
              T.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              de.sm_m ||
                (de.sm_m = {
                  proto: de,
                  fields: {
                    item_type: {
                      n: 1,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    appid: { n: 2, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    item_name: {
                      n: 3,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    item_title: {
                      n: 4,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    item_description: {
                      n: 5,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    item_image_small: {
                      n: 6,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    item_image_large: {
                      n: 7,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    item_key_values: {
                      n: 8,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    item_series: {
                      n: 9,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    item_class: {
                      n: 10,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    editor_accountid: {
                      n: 11,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    active: { n: 12, br: r.qM.readBool, bw: r.gp.writeBool },
                    item_image_composed: {
                      n: 13,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    item_image_composed_foil: {
                      n: 14,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    deleted: { n: 15, br: r.qM.readBool, bw: r.gp.writeBool },
                    item_last_changed: {
                      n: 16,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    broadcast_channel_id: {
                      n: 17,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    item_movie_webm: {
                      n: 18,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    item_movie_mp4: {
                      n: 19,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    item_movie_webm_small: {
                      n: 20,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    item_movie_mp4_small: {
                      n: 21,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    item_internal_name: {
                      n: 22,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
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
          static toObject(e, d) {
            return r.BT(de.M(), e, d);
          }
          static fromObject(e) {
            return r.Uq(de.M(), e);
          }
          static deserializeBinary(e) {
            let d = new (l().BinaryReader)(e),
              $ = new de();
            return de.deserializeBinaryFromReader($, d);
          }
          static deserializeBinaryFromReader(e, d) {
            return r.zj(de.MBF(), e, d);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return de.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, d) {
            r.i0(de.M(), e, d);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              de.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CQuest_GetCommunityItemDefinitions_Response_ItemDefinition";
          }
        };
        X(ut, "sm_m"), X(ut, "sm_mbf");
        let nr = ut;
        const dt = class me extends T.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              me.prototype.appid || r.Sg(me.M()),
              T.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              me.sm_m ||
                (me.sm_m = {
                  proto: me,
                  fields: {
                    appid: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    communityitemid: {
                      n: 2,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    activate: { n: 3, br: r.qM.readBool, bw: r.gp.writeBool },
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
          static toObject(e, d) {
            return r.BT(me.M(), e, d);
          }
          static fromObject(e) {
            return r.Uq(me.M(), e);
          }
          static deserializeBinary(e) {
            let d = new (l().BinaryReader)(e),
              $ = new me();
            return me.deserializeBinaryFromReader($, d);
          }
          static deserializeBinaryFromReader(e, d) {
            return r.zj(me.MBF(), e, d);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return me.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, d) {
            r.i0(me.M(), e, d);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              me.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CQuest_ActivateProfileModifierItem_Request";
          }
        };
        X(dt, "sm_m"), X(dt, "sm_mbf");
        let Pt = dt;
        class Oe extends T.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), T.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Oe.toObject(e, this);
          }
          static toObject(e, d) {
            return e ? { $jspbMessageInstance: d } : {};
          }
          static fromObject(e) {
            return new Oe();
          }
          static deserializeBinary(e) {
            let d = new (l().BinaryReader)(e),
              $ = new Oe();
            return Oe.deserializeBinaryFromReader($, d);
          }
          static deserializeBinaryFromReader(e, d) {
            return e;
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, d) {}
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Oe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CQuest_ActivateProfileModifierItem_Response";
          }
        }
        const mt = class fe extends T.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              fe.prototype.timestamp_start || r.Sg(fe.M()),
              T.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              fe.sm_m ||
                (fe.sm_m = {
                  proto: fe,
                  fields: {
                    timestamp_start: {
                      n: 1,
                      d: 0,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    timestamp_end: {
                      n: 2,
                      d: 4294967295,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
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
          static toObject(e, d) {
            return r.BT(fe.M(), e, d);
          }
          static fromObject(e) {
            return r.Uq(fe.M(), e);
          }
          static deserializeBinary(e) {
            let d = new (l().BinaryReader)(e),
              $ = new fe();
            return fe.deserializeBinaryFromReader($, d);
          }
          static deserializeBinaryFromReader(e, d) {
            return r.zj(fe.MBF(), e, d);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, d) {
            r.i0(fe.M(), e, d);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              fe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CQuest_GetNumTradingCardsEarned_Request";
          }
        };
        X(mt, "sm_m"), X(mt, "sm_mbf");
        let ir = mt;
        const ft = class _e extends T.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              _e.prototype.num_trading_cards || r.Sg(_e.M()),
              T.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              _e.sm_m ||
                (_e.sm_m = {
                  proto: _e,
                  fields: {
                    num_trading_cards: {
                      n: 1,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
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
          static toObject(e, d) {
            return r.BT(_e.M(), e, d);
          }
          static fromObject(e) {
            return r.Uq(_e.M(), e);
          }
          static deserializeBinary(e) {
            let d = new (l().BinaryReader)(e),
              $ = new _e();
            return _e.deserializeBinaryFromReader($, d);
          }
          static deserializeBinaryFromReader(e, d) {
            return r.zj(_e.MBF(), e, d);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return _e.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, d) {
            r.i0(_e.M(), e, d);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              _e.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CQuest_GetNumTradingCardsEarned_Response";
          }
        };
        X(ft, "sm_m"), X(ft, "sm_mbf");
        let sr = ft;
        const _t = class he extends T.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              he.prototype.eventid || r.Sg(he.M()),
              T.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              he.sm_m ||
                (he.sm_m = {
                  proto: he,
                  fields: {
                    eventid: { n: 1, br: r.qM.readEnum, bw: r.gp.writeEnum },
                    include_inactive: {
                      n: 2,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
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
          static toObject(e, d) {
            return r.BT(he.M(), e, d);
          }
          static fromObject(e) {
            return r.Uq(he.M(), e);
          }
          static deserializeBinary(e) {
            let d = new (l().BinaryReader)(e),
              $ = new he();
            return he.deserializeBinaryFromReader($, d);
          }
          static deserializeBinaryFromReader(e, d) {
            return r.zj(he.MBF(), e, d);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return he.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, d) {
            r.i0(he.M(), e, d);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              he.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CQuest_VirtualItemRewardDefinition_Request";
          }
        };
        X(_t, "sm_m"), X(_t, "sm_mbf");
        let xt = _t;
        const ht = class pe extends T.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              pe.prototype.eventid || r.Sg(pe.M()),
              T.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              pe.sm_m ||
                (pe.sm_m = {
                  proto: pe,
                  fields: {
                    eventid: { n: 1, br: r.qM.readEnum, bw: r.gp.writeEnum },
                    item_bucket: {
                      n: 2,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    appid: { n: 3, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    active: { n: 4, br: r.qM.readBool, bw: r.gp.writeBool },
                    rarity: { n: 5, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    package_to_grant: {
                      n: 6,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    game_item_id: {
                      n: 7,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    community_item_class: {
                      n: 8,
                      br: r.qM.readInt32,
                      bw: r.gp.writeInt32,
                    },
                    community_item_type: {
                      n: 9,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    loyalty_point_type: {
                      n: 10,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    amount: {
                      n: 11,
                      br: r.qM.readInt64String,
                      bw: r.gp.writeInt64String,
                    },
                    rtime_time_active: {
                      n: 12,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    loyalty_reward_defid: {
                      n: 13,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    user_badge_to_grant: {
                      n: 14,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    user_badge_level: {
                      n: 15,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    virtual_item_def_id: {
                      n: 16,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
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
          static toObject(e, d) {
            return r.BT(pe.M(), e, d);
          }
          static fromObject(e) {
            return r.Uq(pe.M(), e);
          }
          static deserializeBinary(e) {
            let d = new (l().BinaryReader)(e),
              $ = new pe();
            return pe.deserializeBinaryFromReader($, d);
          }
          static deserializeBinaryFromReader(e, d) {
            return r.zj(pe.MBF(), e, d);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, d) {
            r.i0(pe.M(), e, d);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              pe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CVirtualItemRewardDefinition";
          }
        };
        X(ht, "sm_m"), X(ht, "sm_mbf");
        let Rt = ht;
        const pt = class Ee extends T.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ee.prototype.rewards || r.Sg(Ee.M()),
              T.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              Ee.sm_m ||
                (Ee.sm_m = {
                  proto: Ee,
                  fields: { rewards: { n: 1, c: Rt, r: !0, q: !0 } },
                }),
              Ee.sm_m
            );
          }
          static MBF() {
            return Ee.sm_mbf || (Ee.sm_mbf = r.w0(Ee.M())), Ee.sm_mbf;
          }
          toObject(e = !1) {
            return Ee.toObject(e, this);
          }
          static toObject(e, d) {
            return r.BT(Ee.M(), e, d);
          }
          static fromObject(e) {
            return r.Uq(Ee.M(), e);
          }
          static deserializeBinary(e) {
            let d = new (l().BinaryReader)(e),
              $ = new Ee();
            return Ee.deserializeBinaryFromReader($, d);
          }
          static deserializeBinaryFromReader(e, d) {
            return r.zj(Ee.MBF(), e, d);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return Ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, d) {
            r.i0(Ee.M(), e, d);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              Ee.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CQuest_VirtualItemRewardDefinition_Response";
          }
        };
        X(pt, "sm_m"), X(pt, "sm_mbf");
        let ar = pt;
        const Et = class ge extends T.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ge.prototype.eventid || r.Sg(ge.M()),
              T.Message.initialize(this, e, 0, -1, [2], null);
          }
          static M() {
            return (
              ge.sm_m ||
                (ge.sm_m = {
                  proto: ge,
                  fields: {
                    eventid: { n: 1, br: r.qM.readEnum, bw: r.gp.writeEnum },
                    itemsdefs: { n: 2, c: Rt, r: !0, q: !0 },
                    action: { n: 3, br: r.qM.readEnum, bw: r.gp.writeEnum },
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
          static toObject(e, d) {
            return r.BT(ge.M(), e, d);
          }
          static fromObject(e) {
            return r.Uq(ge.M(), e);
          }
          static deserializeBinary(e) {
            let d = new (l().BinaryReader)(e),
              $ = new ge();
            return ge.deserializeBinaryFromReader($, d);
          }
          static deserializeBinaryFromReader(e, d) {
            return r.zj(ge.MBF(), e, d);
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, d) {
            r.i0(ge.M(), e, d);
          }
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              ge.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CQuest_SetVirtualItemRewardDefinition_Request";
          }
        };
        X(Et, "sm_m"), X(Et, "sm_mbf");
        let Tt = Et;
        function Mr(Y) {
          return (
            "unknown CQuest_SetVirtualItemRewardDefinition_Request_EActionType ( " +
            Y +
            " )"
          );
        }
        class je extends T.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), T.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return je.toObject(e, this);
          }
          static toObject(e, d) {
            return e ? { $jspbMessageInstance: d } : {};
          }
          static fromObject(e) {
            return new je();
          }
          static deserializeBinary(e) {
            let d = new (l().BinaryReader)(e),
              $ = new je();
            return je.deserializeBinaryFromReader($, d);
          }
          static deserializeBinaryFromReader(e, d) {
            return e;
          }
          serializeBinary() {
            var e = new (l().BinaryWriter)();
            return je.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, d) {}
          serializeBase64String() {
            var e = new (l().BinaryWriter)();
            return (
              je.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CQuest_SetVirtualItemRewardDefinition_Response";
          }
        }
        var gt;
        ((Y) => {
          function e(Te, Ae, De) {
            return Te.SendMsg(
              "Quest.GetCommunityInventory#1",
              (0, _.I8)(qt, Ae, De),
              er,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          Y.GetCommunityInventory = e;
          function d(Te, Ae, De) {
            return Te.SendMsg(
              "Quest.GetCommunityItemDefinitions#1",
              (0, _.I8)(tr, Ae, De),
              rr,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 4 },
            );
          }
          Y.GetCommunityItemDefinitions = d;
          function $(Te, Ae, De) {
            return Te.SendMsg(
              "Quest.ActivateProfileModifierItem#1",
              (0, _.I8)(Pt, Ae, De),
              Oe,
              { ePrivilege: 1 },
            );
          }
          Y.ActivateProfileModifierItem = $;
          function or(Te, Ae, De) {
            return Te.SendMsg(
              "Quest.GetNumTradingCardsEarned#1",
              (0, _.I8)(ir, Ae, De),
              sr,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          Y.GetNumTradingCardsEarned = or;
          function lr(Te, Ae, De) {
            return Te.SendMsg(
              "Quest.GetVirtualItemRewardDefinition#1",
              (0, _.I8)(xt, Ae, De),
              ar,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          }
          Y.GetVirtualItemRewardDefinition = lr;
          function cr(Te, Ae, De) {
            return Te.SendMsg(
              "Quest.SetVirtualItemRewardDefinition#1",
              (0, _.I8)(Tt, Ae, De),
              je,
              { ePrivilege: 4 },
            );
          }
          Y.SetVirtualItemRewardDefinition = cr;
        })(gt || (gt = {}));
      },
      37589: (Q, K, n) => {
        "use strict";
        n.d(K, { Y: () => j, j: () => T });
        var t = n(7850),
          y = n(90626),
          m = n(2259),
          I = n(18938);
        function j(l) {
          const r = (0, m.OO)(l, l.options);
          return (0, t.jsx)("span", { ref: r, style: { fontSize: 0 } });
        }
        const T = y.forwardRef(function (r, _) {
          const { onLeave: g, onEnter: b, options: M, ...S } = r,
            v = (0, m.OO)(r, r.options),
            A = (0, I.Ue)(v, _);
          return (0, t.jsx)("div", { ref: A, ...S });
        });
      },
      1123: (Q, K, n) => {
        "use strict";
        n.d(K, { Ey: () => D, Rp: () => G });
        var t = n(32093);
        const m = JSON.parse(
          `{"h":{"countries":{"AF":"Afghanistan","AX":"Aland Islands","AL":"Albania","DZ":"Algeria","AS":"American Samoa","AD":"Andorra","AO":"Angola","AI":"Anguilla","AQ":"Antarctica","AG":"Antigua and Barbuda","AR":"Argentina","AM":"Armenia","AW":"Aruba","AU":"Australia","AT":"Austria","AZ":"Azerbaijan","BS":"Bahamas","BH":"Bahrain","BD":"Bangladesh","BB":"Barbados","BY":"Belarus","BE":"Belgium","BZ":"Belize","BJ":"Benin","BM":"Bermuda","BT":"Bhutan","BO":"Bolivia","BA":"Bosnia and Herzegovina","BW":"Botswana","BV":"Bouvet Island","BR":"Brazil","IO":"British Indian Ocean Territory","BN":"Brunei Darussalam","BG":"Bulgaria","BF":"Burkina Faso","BI":"Burundi","KH":"Cambodia","CM":"Cameroon","CA":"Canada","CV":"Cabo Verde","KY":"Cayman Islands","CF":"Central African Republic","TD":"Chad","CL":"Chile","CN":"China","XC":"China","CX":"Christmas Island","CC":"Cocos (Keeling) Islands","CO":"Colombia","KM":"Comoros","CG":"Congo","CD":"Congo, the Democratic Republic of the","CK":"Cook Islands","CR":"Costa Rica","CI":"Cote d'Ivoire","HR":"Croatia","CY":"Cyprus","CZ":"Czech Republic","DK":"Denmark","DJ":"Djibouti","DM":"Dominica","DO":"Dominican Republic","EC":"Ecuador","EG":"Egypt","SV":"El Salvador","GQ":"Equatorial Guinea","ER":"Eritrea","EE":"Estonia","ET":"Ethiopia","FK":"Falkland Islands (Malvinas)","FO":"Faroe Islands","FJ":"Fiji","FI":"Finland","FR":"France","GF":"French Guiana","PF":"French Polynesia","TF":"French Southern Territories","GA":"Gabon","GM":"Gambia","GE":"Georgia","DE":"Germany","GH":"Ghana","GI":"Gibraltar","GR":"Greece","GL":"Greenland","GD":"Grenada","GP":"Guadeloupe","GU":"Guam","GT":"Guatemala","GN":"Guinea","GW":"Guinea-Bissau","GG":"Guernsey","GY":"Guyana","HT":"Haiti","HM":"Heard and Mc Donald Islands","VA":"Holy See(Vatican City State)","HN":"Honduras","HK":"Hong Kong","HU":"Hungary","IS":"Iceland","IN":"India","ID":"Indonesia","IQ":"Iraq","IE":"Ireland","IM":"Isle of Man","IL":"Israel","IT":"Italy","JM":"Jamaica","JP":"Japan","JE":"Jersey","JO":"Jordan","KZ":"Kazakhstan","KE":"Kenya","KI":"Kiribati","KR":"Korea, Republic of","KW":"Kuwait","KG":"Kyrgyzstan","LA":"Lao People's Democratic Republic","LV":"Latvia","LB":"Lebanon","LS":"Lesotho","LR":"Liberia","LI":"Liechtenstein","LT":"Lithuania","LU":"Luxembourg","LY":"Libya","MO":"Macau","MK":"North Macedonia, Republic of","MG":"Madagascar","MW":"Malawi","MY":"Malaysia","MV":"Maldives","ML":"Mali","MT":"Malta","MH":"Marshall Islands","MQ":"Martinique","MR":"Mauritania","MU":"Mauritius","YT":"Mayotte","MX":"Mexico","FM":"Micronesia, Federated States of","MD":"Moldova, Republic of","MC":"Monaco","MN":"Mongolia","ME":"Montenegro","MS":"Montserrat","MA":"Morocco","MZ":"Mozambique","MM":"Myanmar","NA":"Namibia","NR":"Nauru","NP":"Nepal","NL":"Netherlands","AN":"Netherlands Antilles","NC":"New Caledonia","NZ":"New Zealand","NI":"Nicaragua","NE":"Niger","NG":"Nigeria","NU":"Niue","NF":"Norfolk Island","MP":"Northern Mariana Islands","NO":"Norway","OM":"Oman","PK":"Pakistan","PW":"Palau","PS":"Palestinian Territory, Occupied","PA":"Panama","PG":"Papua New Guinea","PY":"Paraguay","PE":"Peru","PH":"Philippines","PN":"Pitcairn","PL":"Poland","PT":"Portugal","PR":"Puerto Rico","QA":"Qatar","RE":"Reunion","RO":"Romania","RU":"Russian Federation","RW":"Rwanda","SH":"Saint Helena","KN":"Saint Kitts and Nevis","LC":"Saint Lucia","PM":"Saint Pierre and Miquelon","VC":"Saint Vincent and the Grenadines","WS":"Samoa","SM":"San Marino","ST":"Sao Tome and Principe","SA":"Saudi Arabia","SN":"Senegal","RS":"Serbia","SC":"Seychelles","SL":"Sierra Leone","SG":"Singapore","SK":"Slovakia","SI":"Slovenia","SB":"Solomon Islands","SO":"Somalia","ZA":"South Africa","GS":"South Georgia and the South Sandwich Islands","ES":"Spain","LK":"Sri Lanka","SD":"Sudan","SR":"Suriname","SJ":"Svalbard and Jan Mayen","SY":"Syria","SZ":"Eswatini","SE":"Sweden","CH":"Switzerland","TW":"Taiwan","TJ":"Tajikistan","TZ":"Tanzania, United Republic of","TH":"Thailand","TL":"Timor-Leste","TG":"Togo","TK":"Tokelau","TO":"Tonga","TT":"Trinidad and Tobago","TN":"Tunisia","TR":"Turkey","TM":"Turkmenistan","TC":"Turks and Caicos Islands","TV":"Tuvalu","UG":"Uganda","UA":"Ukraine","AE":"United Arab Emirates","GB":"United Kingdom","US":"United States","UM":"United States Minor Outlying Islands","UY":"Uruguay","UZ":"Uzbekistan","VU":"Vanuatu","VE":"Venezuela","VN":"Viet Nam","VG":"Virgin Islands, British","VI":"Virgin Islands, U.S.","WF":"Wallis and Futuna","EH":"Western Sahara","YE":"Yemen","ZM":"Zambia","ZW":"Zimbabwe"},"eucountries":{"AT":"Austria","BE":"Belgium","BG":"Bulgaria","HR":"Croatia","CY":"Cyprus","CZ":"Czech Republic","DK":"Denmark","EE":"Estonia","FI":"Finland","FR":"France","DE":"Germany","GR":"Greece","HU":"Hungary","IE":"Ireland","IT":"Italy","LV":"Latvia","LT":"Lithuania","LU":"Luxembourg","MT":"Malta","NL":"Netherlands","PL":"Poland","PT":"Portugal","RO":"Romania","SK":"Slovakia","SI":"Slovenia","ES":"Spain","SE":"Sweden","GB":"United Kingdom"},"eeacountries":{"NO":"Norway","IS":"Iceland","LI":"Liechtenstein"},"usstates":{"AL":"Alabama","AK":"Alaska","AS":"American Samoa","AZ":"Arizona","AR":"Arkansas","CA":"California","CO":"Colorado","CT":"Connecticut","DE":"Delaware","DC":"District of Columbia","FM":"Federated States of Micronesia","FL":"Florida","GA":"Georgia","GU":"Guam","HI":"Hawaii","ID":"Idaho","IL":"Illinois","IN":"Indiana","IA":"Iowa","KS":"Kansas","KY":"Kentucky","LA":"Louisiana","ME":"Maine","MH":"Marshall Islands","MD":"Maryland","MA":"Massachusetts","MI":"Michigan","MN":"Minnesota","MS":"Mississippi","MO":"Missouri","MT":"Montana","NE":"Nebraska","NV":"Nevada","NH":"New Hampshire","NJ":"New Jersey","NM":"New Mexico","NY":"New York","NC":"North Carolina","ND":"North Dakota","MP":"Northern Mariana Islands","OH":"Ohio","OK":"Oklahoma","OR":"Oregon","PW":"Palau","PA":"Pennsylvania","PR":"Puerto Rico","RI":"Rhode Island","SC":"South Carolina","SD":"South Dakota","TN":"Tennessee","TX":"Texas","UT":"Utah","VT":"Vermont","VI":"U.S. Virgin Islands","VA":"Virginia","WA":"Washington","WV":"West Virginia","WI":"Wisconsin","WY":"Wyoming","AA":"Armed Forces Americas","AE":"Armed Forces","AP":"Armed Forces Pacific"}}}`,
        ).h;
        var I = n(79024),
          j = n(90900),
          T = n(52438);
        function l(B, x) {
          var L, s, c;
          switch (B.preference_state) {
            case I.CY.__:
            case I.CY.PK:
              return !0;
            case I.CY.rE:
              return !1;
            case I.CY.UI:
            default:
              switch (x) {
                case "youtube":
                  return (L = B.third_party_content) == null
                    ? void 0
                    : L.youtube;
                case "vimeo":
                  return (s = B.third_party_content) == null ? void 0 : s.vimeo;
                case "sketchfab":
                  return (c = B.third_party_content) == null
                    ? void 0
                    : c.sketchfab;
                case "generic":
                  return !1;
              }
          }
        }
        function r(B) {
          switch (B.preference_state) {
            case I.CY.__:
            case I.CY.PK:
              return !1;
            default:
              return !0;
          }
        }
        function _(B, x, L, s) {
          return {
            queryKey: ["CookiePreferences"],
            queryFn: () => g(B, x, L, s),
          };
        }
        async function g(B, x, L, s) {
          if ((0, t.nA)(s))
            return { version: I.ie.mO, preference_state: I.CY.__ };
          if (x) {
            const u = (await I.T4.GetCookiePreferences(B, {}))
              .Body()
              .toObject().preferences;
            if (u && u.version !== void 0 && u.version != I.ie.CL) return u;
          }
          try {
            const c = (0, T.j_)(j.J_);
            if (c) {
              const u = JSON.parse(c);
              if (u && u.version !== void 0 && u.version != I.ie.CL) return u;
            }
          } catch {}
          return L in m.eucountries || L in m.eeacountries || L === "CH"
            ? { version: I.ie.mO, preference_state: I.CY._H }
            : { version: I.ie.mO, preference_state: I.CY.__ };
        }
        var b = n(88942),
          M = n(68312),
          S = n(72609);
        function v(B) {
          return {
            queryKey: ["CookiePreferences"],
            queryFn: () => g(B, S.iA.logged_in, S.TS.COUNTRY, S.TS.EREALM),
          };
        }
        function A() {
          const B = (0, M.KV)();
          return (0, b.I)(v(B));
        }
        function G(B) {
          const { data: x } = A();
          return x ? l(x, B) : void 0;
        }
        function D() {
          const { data: B } = A();
          return B ? !r(B) : void 0;
        }
      },
      70187: (Q, K, n) => {
        "use strict";
        n.d(K, {
          B8: () => Z,
          It: () => U,
          N2: () => L,
          Pk: () => ie,
          Sz: () => R,
          Tu: () => c,
          W4: () => x,
          ZS: () => V,
          Zb: () => a,
          _J: () => Se,
          ck: () => re,
          d$: () => Ie,
          j$: () => s,
        });
        var t = n(7850),
          y = n(33645),
          m = n.n(y),
          I = n(24660),
          j = n(19298),
          T = n(71944),
          l = n(90626),
          r = n(43434),
          _ = n(83482),
          g = n(1917),
          b = n(25269),
          M = n(36118),
          S = n(71421),
          v = n(36707),
          A = n(18210),
          G = n(53113),
          D = n(98609),
          B = n(68941);
        const x = new Map([
            ["b", { Constructor: u, autocloses: !1 }],
            ["i", { Constructor: E, autocloses: !1 }],
            [
              "h1",
              { Constructor: a, autocloses: !1, skipFollowingNewline: !0 },
            ],
            [
              "h2",
              { Constructor: R, autocloses: !1, skipFollowingNewline: !0 },
            ],
            [
              "h3",
              { Constructor: V, autocloses: !1, skipFollowingNewline: !0 },
            ],
            [
              "h4",
              { Constructor: z, autocloses: !1, skipFollowingNewline: !0 },
            ],
            [
              "h5",
              { Constructor: F, autocloses: !1, skipFollowingNewline: !0 },
            ],
            ["center", { Constructor: J, autocloses: !1 }],
            [
              "smalltext",
              { Constructor: te, autocloses: !1, skipFollowingNewline: !0 },
            ],
            ["u", { Constructor: w, autocloses: !1 }],
            ["strike", { Constructor: C, autocloses: !1 }],
            ["spoiler", { Constructor: Ce, autocloses: !1 }],
            ["hr", { Constructor: ne, autocloses: !1 }],
            ["noparse", { Constructor: Le, autocloses: !1 }],
            ["url", { Constructor: be, autocloses: !1 }],
            ["quote", { Constructor: ie, autocloses: !1 }],
            ["pullquote", { Constructor: ye, autocloses: !1 }],
            ["code", { Constructor: we, autocloses: !1 }],
            ["c", { Constructor: ve, autocloses: !1 }],
            [
              "list",
              { Constructor: Z, autocloses: !1, skipInternalNewline: !0 },
            ],
            [
              "olist",
              { Constructor: Se, autocloses: !1, skipInternalNewline: !0 },
            ],
            ["*", { Constructor: re, autocloses: !0, skipInternalNewline: !0 }],
            [
              "table",
              { Constructor: Ve, autocloses: !1, skipInternalNewline: !0 },
            ],
            [
              "tr",
              {
                Constructor: Ye,
                autocloses: !1,
                skipInternalNewline: !0,
                skipFollowingNewline: !0,
              },
            ],
            [
              "th",
              {
                Constructor: Qe,
                autocloses: !1,
                skipInternalNewline: !0,
                skipFollowingNewline: !0,
              },
            ],
            [
              "td",
              {
                Constructor: Fe,
                autocloses: !1,
                skipInternalNewline: !0,
                skipFollowingNewline: !0,
              },
            ],
            [
              "expand",
              {
                Constructor: Ne,
                autocloses: !1,
                skipInternalNewline: !0,
                allowWrapTextForCopying: !0,
              },
            ],
            ["calendarevent", { Constructor: $e, autocloses: !0 }],
            ["doclink", { Constructor: xe, autocloses: !1 }],
            ["color", { Constructor: Be, autocloses: !1 }],
            ["bgcolor", { Constructor: Pe, autocloses: !1 }],
            ["p", { Constructor: f, autocloses: !1, skipFollowingNewline: !0 }],
          ]),
          L = new Map([
            ["looping_media", { Constructor: B.$A, autocloses: !1 }],
            ["video", { Constructor: B.UT, autocloses: !1 }],
            ["youtubeorvideo", { Constructor: g.Eo, autocloses: !1 }],
            ["previewyoutube", { Constructor: g.gH, autocloses: !1 }],
          ]);
        function s(h, O) {
          return O === void 0 ? h[""] : h[O];
        }
        function c(h, O) {
          return (p) => h({ ...p, className: O });
        }
        function u(h) {
          return (0, t.jsx)("b", { className: m().Bold, children: h.children });
        }
        function E(h) {
          return (0, t.jsx)("i", {
            className: (0, v.A)(m().Italic, "BB_Italic"),
            children: h.children,
          });
        }
        function w(h) {
          return (0, t.jsx)("u", {
            className: m().Underline,
            children: h.children,
          });
        }
        function C(h) {
          return (0, t.jsx)("s", {
            className: m().Strike,
            children: h.children,
          });
        }
        function f(h) {
          return (0, t.jsxs)("p", {
            className: m().Paragraph,
            children: [h.children, (0, t.jsx)("wbr", {})],
          });
        }
        function U(h) {
          return (0, t.jsxs)("div", {
            className: m().Paragraph,
            role: "paragraph",
            children: [h.children, (0, t.jsx)("wbr", {})],
          });
        }
        function i(h, O, p) {
          let o = s(O.args, "id");
          return (
            o || (o = s(O.args)),
            o &&
              typeof o == "string" &&
              o.length > 0 &&
              o[0] === "#" &&
              (o = o.substring(1)),
            (0, t.jsx)(h, {
              id: o || void 0,
              className: (0, v.A)(p, O.className),
              children: O.children,
            })
          );
        }
        function a(h) {
          return i("h1", h, (0, v.A)(m().Header1, "BB_Header1"));
        }
        function R(h) {
          return i("h2", h, (0, v.A)(m().Header2, "BB_Header2"));
        }
        function V(h) {
          return i("h3", h, (0, v.A)(m().Header3, "BB_Header3"));
        }
        function z(h) {
          return i("h4", h, (0, v.A)(m().Header4, "BB_Header4"));
        }
        function F(h) {
          return i("h5", h, (0, v.A)(m().Header5, "BB_Header5"));
        }
        function J(h) {
          let O = s(h.args, "id");
          return (
            O &&
              typeof O == "string" &&
              O.length > 0 &&
              O[0] === "#" &&
              (O = O.substring(1)),
            (0, t.jsx)("span", {
              id: O || void 0,
              className: (0, v.A)(m().CenterSpan, "BB_Center"),
              children: h.children,
            })
          );
        }
        function te(h) {
          return i("div", h, (0, v.A)(m().SmallText, "BB_SmallText"));
        }
        function Ce(h) {
          let [O, p] = l.useState(!1),
            o = l.useCallback(() => {
              p(!O);
            }, [O]);
          return (0, t.jsx)(j.Z, {
            className: (0, v.A)(m().Spoiler, O && m().Revealed),
            focusable: !0,
            onActivate: o,
            onOKActionDescription: (0, A.we)(
              O ? "#Bbcode_Spoiler_Hide" : "#Bbcode_Spoiler_Show",
            ),
            children: (0, t.jsx)("span", {
              className: m().SpoilerText,
              children: h.children,
            }),
          });
        }
        function ne(h) {
          return (0, t.jsx)("hr", { className: m().HR });
        }
        function Be(h) {
          const O = s(h.args);
          return (0, t.jsx)("span", {
            style: { color: O },
            children: h.children,
          });
        }
        function Pe(h) {
          const O = s(h.args);
          return (0, t.jsx)("span", {
            style: { backgroundColor: O },
            children: h.children,
          });
        }
        function be(h) {
          let O = (0, b.J)(s(h.args));
          if (!O) {
            const N = h.children;
            typeof N == "string" && (0, G.DZ)(N) && (O = (0, b.J)(N));
          }
          const p = s(h.args, "style") == "button" ? m().LinkButton : void 0,
            o = p && s(h.args, "buttoncolor");
          let P = s(h.args, "id");
          return (
            P &&
              typeof P == "string" &&
              P.length > 0 &&
              P[0] === "#" &&
              (P = P.substring(1)),
            O === void 0 && !P
              ? h.children || ""
              : O === void 0 ||
                  (typeof O == "string" && O.length > 0 && O[0] == "#")
                ? (0, t.jsx)("a", {
                    href: O != null ? O : null,
                    id: P,
                    children: h.children,
                  })
                : (0, t.jsx)(Ie, {
                    className: p,
                    href: O,
                    id: P,
                    style: { backgroundColor: o },
                    children: h.children,
                  })
          );
        }
        function xe(h) {
          const O = s(h.args),
            p = s(h.args, "style") == "button" ? m().LinkButton : void 0,
            o = p && s(h.args, "buttoncolor");
          return (0, t.jsx)(Ie, {
            className: p,
            style: { backgroundColor: o },
            href: `${D.TS.PARTNER_BASE_URL}doc/${O}`,
            children: h.children,
          });
        }
        const Ie = (h) => {
          const { href: O, ...p } = h;
          let o = (0, _.OZ)(O != null ? O : ""),
            P;
          (0, r.p)(o)
            ? ((o =
                (D.TS.IN_CLIENT ? "steam://openurl_external/" : "") +
                (0, r.E)(o)),
              (P = "noopener nofollow"))
            : (o = (0, G.NT)(o));
          const N =
            typeof h.children == "string" &&
            h.children.length > 0 &&
            O &&
            !O.startsWith("steam://")
              ? (0, G.Qz)(O)
              : void 0;
          return (0, t.jsx)(S.Gq, {
            toolTipContent: N,
            direction: "top",
            children: (0, t.jsx)(I.Ii, {
              ...p,
              href: o,
              rel: P,
              children: h.children,
            }),
          });
        };
        function Re(h) {
          return jsx("a", {
            className: styles.DisabledMouseEvents,
            href: s(h.args),
            children: h.children,
          });
        }
        function ie(h) {
          const O = s(h.args, "author");
          return (0, t.jsxs)("blockquote", {
            className: (0, v.A)(m().BlockQuote, h.className),
            children: [
              !!O &&
                (0, t.jsxs)("div", {
                  className: m().QuoteAuthor,
                  children: [
                    (0, A.we)("#Bbcode_Originally_Posted_By") + " ",
                    " ",
                    (0, t.jsx)("b", { children: O + ":" }),
                  ],
                }),
              h.children,
            ],
          });
        }
        function ye(h) {
          return (0, t.jsx)("div", {
            className: m().PullQuote,
            children: h.children,
          });
        }
        function we(h) {
          return (0, t.jsx)("code", {
            className: m().CodeBlock,
            children: h.children,
          });
        }
        function ve(h) {
          return (0, t.jsx)("code", {
            className: m().Code,
            children: h.children,
          });
        }
        function Z(h) {
          return (0, t.jsx)("ul", {
            className: (0, v.A)(m().List, "bullets"),
            children: h.children,
          });
        }
        function Se(h) {
          return (0, t.jsx)("ol", {
            className: m().OrderedList,
            children: h.children,
          });
        }
        function re(h) {
          let O = s(h.args, "id");
          return (
            O &&
              typeof O == "string" &&
              O.length > 0 &&
              O[0] === "#" &&
              (O = O.substring(1)),
            (0, t.jsx)("li", {
              className: m().ListItem,
              id: O || void 0,
              children: h.children,
            })
          );
        }
        function Le(h) {
          return h.children;
        }
        function Ve(h) {
          const O = s(h.args, "noborder"),
            p = s(h.args, "equalcells"),
            o = s(h.args, "colwidth");
          return (0, t.jsxs)("table", {
            className: (0, v.A)(
              m().Table,
              "BB_Table",
              O && m().NoBorder,
              p && m().EqualCells,
            ),
            children: [
              o &&
                (0, t.jsx)("colgroup", {
                  children: o
                    .split(",")
                    .map((P, N) => (0, t.jsx)(He, { width: P }, N)),
                }),
              (0, t.jsx)("tbody", { children: h.children }),
            ],
          });
        }
        function He(h) {
          const { width: O } = h;
          let p;
          return (
            O && parseInt(O) > 0 && (p = { width: `${O}px` }),
            (0, t.jsx)("col", { style: p })
          );
        }
        function Ye(h) {
          return (0, t.jsx)("tr", {
            className: (0, v.A)(m().TableRow, "BB_TableRow"),
            children: h.children,
          });
        }
        function ke(h, O) {
          const p = s(O.args, "width"),
            o = s(O.args, "colspan"),
            P = s(O.args, "rowspan"),
            N = {};
          return (
            o && parseInt(o) > 1 && (N.colSpan = parseInt(o)),
            P && parseInt(P) > 1 && (N.rowSpan = parseInt(P)),
            (0, t.jsx)(h, {
              className: (0, v.A)(m().TableCell, h == "td" && "BB_TableData"),
              ...N,
              style: p ? { width: p } : void 0,
              children: O.children,
            })
          );
        }
        function Qe(h) {
          return ke("th", h);
        }
        function Fe(h) {
          return ke("td", h);
        }
        function Ze(h, O, p, o) {
          switch (h) {
            case "details":
              return {
                collapsed: "#Bbcode_Expand_Details_Collapsed",
                expanded: "#Bbcode_Expand_Details_Expanded",
                style: m().ExpandSection_Details,
              };
            case "spoiler":
              return {
                collapsed: "#Bbcode_Expand_Spoiler_Collapsed",
                expanded: "#Bbcode_Expand_Spoiler_Expanded",
                style: m().ExpandSection_Spoiler,
              };
            case "title":
              return {
                collapsed: O || p || "#Bbcode_Expand_ShowMore_Collapsed",
                expanded: O || o || "#Bbcode_Expand_ShowMore_Expanded",
                style: m().ExpandSection_WithTitle,
              };
            default:
            case "showmore":
              return {
                collapsed: "#Bbcode_Expand_ShowMore_Collapsed",
                expanded: "#Bbcode_Expand_ShowMore_Expanded",
                style: m().ExpandSection_ShowMore,
              };
          }
        }
        function Ne(h) {
          var O;
          const p = !!s(h.args, "expanded"),
            [o, P] = l.useState(p),
            N = s(h.args, "title"),
            k = s(h.args, "collapsed_str"),
            W = s(h.args, "expanded_str"),
            H = Ze(s(h.args, "type"), N, k, W);
          return (0, t.jsxs)("div", {
            className: (0, v.A)({
              [m().ExpandSectionBlock]: !0,
              [(O = H.style) != null ? O : ""]: H.style != null,
              [m().ExpandSectionExpanded]: o,
              [m().ExpandSectionCollapsed]: !o,
              BBCodeExpanded: o,
              BBCodeCollapsed: !o,
            }),
            children: [
              (0, t.jsxs)("div", {
                className: m().ExpandSectionHeader,
                onClick: () => P(!o),
                children: [
                  (0, A.we)(o ? H.expanded : H.collapsed),
                  (0, t.jsx)("div", {
                    className: m().EmbedArrow,
                    children: (0, t.jsx)(M.DK4, { angle: o ? 180 : 0 }),
                  }),
                ],
              }),
              o &&
                (0, t.jsx)("div", {
                  className: m().ExpandSectionBody,
                  children: h.children,
                }),
            ],
          });
        }
        function $e(h) {
          var O, p, o, P, N;
          const k = s(h.args, "title"),
            W = (O = s(h.args, "start")) != null ? O : s(h.args, "datetime"),
            H = (p = s(h.args, "end")) != null ? p : s(h.args, "datetime"),
            q = (o = s(h.args, "body")) != null ? o : null,
            ee = (P = s(h.args, "location")) != null ? P : null,
            Ct = (N = s(h.args, "id")) != null ? N : "",
            Ue = new Date(W),
            St = Ue.getUTCFullYear(),
            vt = ("0" + (Ue.getUTCMonth() + 1)).slice(-2),
            yt = ("0" + Ue.getUTCDate()).slice(-2),
            It = ("0" + Ue.getUTCHours()).slice(-2),
            Mt = ("0" + Ue.getUTCMinutes()).slice(-2),
            Je = `${St}${vt}${yt}T${It}${Mt}00Z`,
            Ge = new Date(H),
            Xe = Ge.getUTCFullYear(),
            Bt = ("0" + (Ge.getUTCMonth() + 1)).slice(-2),
            qe = ("0" + Ge.getUTCDate()).slice(-2),
            bt = ("0" + Ge.getUTCHours()).slice(-2),
            wt = ("0" + Ge.getUTCMinutes()).slice(-2),
            et = `${Xe}${Bt}${qe}T${bt}${wt}00Z`;
          let We;
          try {
            let Me = `BEGIN:VCALENDAR\r
`;
            (Me += `VERSION:2.0\r
`),
              (Me += `BEGIN:VEVENT\r
`),
              (Me += `DTSTART:${Je}\r
`),
              (Me += `DTEND:${et}\r
`),
              (Me += `SUMMARY:${k.replace(
                `
`,
                "\\n",
              )}\r
`),
              q &&
                (Me += `DESCRIPTION:${q.replace(
                  `
`,
                  "\\n",
                )}\r
`),
              ee &&
                (Me += `LOCATION:${ee.replace(
                  `
`,
                  "\\n",
                )}\r
`),
              (Me += `END:VEVENT\r
`),
              (Me += `END:VCALENDAR\r
`),
              (We = `data:text/calendar;charset=utf-8;base64,${T.fromByteArray(new TextEncoder().encode(Me))}`);
          } catch (Me) {
            console.error(Me);
          }
          let ze =
            "https://calendar.google.com/calendar/render?action=TEMPLATE";
          (ze += `&text=${encodeURI(k)}`),
            (ze += `&details=${encodeURI(q)}`),
            (ze += `&dates=${encodeURI(Je + "/" + et)}`);
          const tt = (Me) => {
            if ("ReactNativeWebView" in window) {
              const rt = window.ReactNativeWebView,
                nt = {
                  event_name: "addcalendarevent",
                  tsStart: Ue.getTime(),
                  tsEnd: Ge.getTime(),
                  strTitle: k,
                  strNotes: q,
                  strLocation: ee,
                };
              rt.postMessage(JSON.stringify(nt)), Me.preventDefault();
            }
          };
          return (0, t.jsxs)("div", {
            className: (0, v.A)(
              "SaleSectionCalendarEventContainer",
              m().CalendarEventContainer,
            ),
            id: Ct,
            children: [
              We &&
                (0, t.jsx)("a", {
                  className: (0, v.A)(
                    "SaleSectionCalendarEventLink",
                    m().CalendarEventLink,
                  ),
                  href: We,
                  onClick: tt,
                  download: "calendar.ics",
                  children: "Apple",
                }),
              (0, t.jsx)("a", {
                className: (0, v.A)(
                  "SaleSectionCalendarEventLink",
                  m().CalendarEventLink,
                ),
                href: ze,
                children: "Google",
              }),
              We &&
                (0, t.jsx)("a", {
                  className: (0, v.A)(
                    "SaleSectionCalendarEventLink",
                    m().CalendarEventLink,
                  ),
                  href: We,
                  onClick: tt,
                  download: "calendar.ics",
                  children: "Outlook",
                }),
            ],
          });
        }
      },
      68941: (Q, K, n) => {
        "use strict";
        n.d(K, { $A: () => r, UT: () => _, g4: () => l });
        var t = n(7850),
          y = n(99412),
          m = n(67134),
          I = n(53113),
          j = n(98609),
          T = n(70187);
        function l(g) {
          let b = (0, T.j$)(g, "poster");
          b && (b = (0, I.L$)(b));
          const M = new Array();
          {
            const G = (0, T.j$)(g, "mp4");
            G && M.push({ sURL: (0, I.L$)(G), sFormat: "video/mp4" });
            const D = (0, T.j$)(g, "webm");
            D && M.push({ sURL: (0, I.L$)(D), sFormat: "video/webm" });
          }
          const S = (0, y.sfN)(j.TS.LANGUAGE),
            v = S != y.Bhc,
            A = new Array();
          for (let G = y.Bhc; G < y.bP9; G++) {
            const D = (0, T.j$)(g, "sub_" + (0, y.wwZ)(G));
            D &&
              A.push({
                sURL: (0, I.L$)(D),
                eLanguage: G,
                sKind: "subtitles",
                bDefault: v && G == S,
              });
            const B = (0, T.j$)(g, "cap_" + (0, y.wwZ)(G));
            B &&
              A.push({
                sURL: (0, I.L$)(B),
                eLanguage: G,
                sKind: "captions",
                bDefault: v && G == S,
              });
          }
          return { sPoster: b, rgVideoSources: M, rgVideoTracks: A };
        }
        function r(g) {
          const b = l(g.args);
          return (0, t.jsx)(m.L, {
            video: b,
            bAutoPlay: !0,
            bControls: !1,
            bLoop: !0,
          });
        }
        function _(g) {
          const b = l(g.args),
            M = g.children ? g.children.toString() : void 0;
          M &&
            M.startsWith("http") &&
            b.rgVideoSources.push({
              sURL: (0, I.L$)(M),
              sFormat: "video/webm",
            });
          const S = (0, T.j$)(g.args, "autoplay"),
            v = S !== "0" && S !== "off" && S !== "false",
            A = (0, T.j$)(g.args, "controls"),
            G = A !== "0" && A !== "off" && A !== "false",
            D = (0, T.j$)(g.args, "loop"),
            B = A !== "0" && A !== "off" && A !== "false";
          return (0, t.jsx)(m.L, {
            video: b,
            bAutoPlay: v,
            bControls: G,
            bLoop: D ? B : v,
          });
        }
      },
      43458: (Q, K, n) => {
        "use strict";
        n.d(K, { Lg: () => l, XU: () => b, jZ: () => r });
        const t = 20,
          y = /^.*youtube[^v]+v=(.{11}).*/,
          m = /^.*youtu\.be\/(.{11}).*/,
          I = /^.*youtube.*\/embed\/(.{11}).*/,
          j = /^.*[?&]t=([^&]+)(?:&|$)/,
          T = /^(?:(?:([\d]+)h)?(?:([\d]+)m)?(?:([\d]+)s)?|([\d]+))$/;
        function l(M) {
          return !!r(M);
        }
        function r(M) {
          const S =
            (M == null ? void 0 : M.length) < t
              ? void 0
              : y.exec(M) || m.exec(M) || I.exec(M);
          return S == null ? void 0 : S[1];
        }
        function _(M) {
          const S = j.exec(M);
          return S == null ? void 0 : S[1];
        }
        function g(M) {
          const S = T.exec(M);
          if (
            !(
              (S != null && S[1]) ||
              (S != null && S[2]) ||
              (S != null && S[3]) ||
              (S != null && S[4])
            )
          )
            return;
          if (S != null && S[4]) return parseInt(S == null ? void 0 : S[4]);
          let v = 0;
          return (
            S != null && S[1] && (v += 3600 * parseInt(S[1])),
            S != null && S[2] && (v += 60 * parseInt(S[2])),
            S != null && S[3] && (v += parseInt(S[3])),
            v
          );
        }
        function b(M) {
          const S = r(M);
          if (!S) return;
          const v = _(M),
            A = v ? g(v) : void 0;
          return { strVideoID: S, nStartSeconds: A };
        }
      },
      10344: (Q, K, n) => {
        "use strict";
        n.d(K, { R: () => b });
        var t = n(41735),
          y = n.n(t),
          m = n(14947),
          I = n(3166),
          j = Object.defineProperty,
          T = Object.getOwnPropertyDescriptor,
          l = (M, S, v) =>
            S in M
              ? j(M, S, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: v,
                })
              : (M[S] = v),
          r = (M, S, v, A) => {
            for (
              var G = A > 1 ? void 0 : A ? T(S, v) : S, D = M.length - 1, B;
              D >= 0;
              D--
            )
              (B = M[D]) && (G = (A ? B(S, v, G) : B(G)) || G);
            return A && G && j(S, v, G), G;
          },
          _ = (M, S, v) => l(M, typeof S != "symbol" ? S + "" : S, v);
        class g {
          constructor() {
            _(this, "m_mapYouTubeVideo", new Map()),
              _(this, "m_mapSharedFile", new Map()),
              (0, m.Gn)(this);
          }
          async LoadYouTubeDynamicData(S, v) {
            var A;
            let G = new Array(),
              D = "";
            if (
              (S.forEach((s, c) => {
                const u = this.m_mapYouTubeVideo.get(s);
                u ? G.push(u) : (D.length > 0 && (D += ","), (D += s));
              }),
              D.length == 0)
            )
              return G;
            let B = { youtubevideoids: D };
            const x = await y().get(
                I.TS.STORE_BASE_URL + "/events/ajaxgetdynamiceventmetadata",
                { params: B, cancelToken: v.token },
              ),
              L =
                (A = x == null ? void 0 : x.data) == null ? void 0 : A.youtube;
            return (
              L &&
                (0, m.h5)(() => {
                  L.forEach((s, c) => {
                    this.m_mapYouTubeVideo.set(s.videoid, s), G.push(s);
                  });
                }),
              G
            );
          }
          async LoadSharedFileDynamicData(S, v) {
            var A;
            let G = new Array(),
              D = "";
            if (
              (S.forEach((s, c) => {
                const u = this.m_mapSharedFile.get(s);
                u ? G.push(u) : (D.length > 0 && (D += ","), (D += s));
              }),
              D.length == 0)
            )
              return G;
            let B = { sharedfileids: D };
            const x = await y().get(
                I.TS.STORE_BASE_URL + "/events/ajaxgetdynamiceventmetadata",
                { params: B, cancelToken: v.token },
              ),
              L =
                (A = x == null ? void 0 : x.data) == null
                  ? void 0
                  : A.sharedfiles;
            return (
              L &&
                (0, m.h5)(() => {
                  L.forEach((s, c) => {
                    this.m_mapSharedFile.set(s.sharedfileid, s), G.push(s);
                  });
                }),
              G
            );
          }
        }
        r([m.sH], g.prototype, "m_mapYouTubeVideo", 2),
          r([m.sH], g.prototype, "m_mapSharedFile", 2);
        const b = new g();
      },
      84676: (Q, K, n) => {
        "use strict";
        n.d(K, {
          G6: () => M,
          Gg: () => A,
          Sq: () => _,
          eR: () => g,
          ik: () => b,
          mZ: () => G,
          t7: () => S,
          zX: () => B,
        });
        var t = n(41735),
          y = n.n(t),
          m = n(90626),
          I = n(72604),
          j = n(44420),
          T = n(54963),
          l = n(10142);
        function r(c, u, E = !0) {
          const w = E
              ? CStoreItemCache.k_DataRequest_BasicInfo
              : CStoreItemCache.k_DataRequest_CommonOnly,
            C = E || CStoreItemCache.Get().BHasStoreItem(c, u, w) ? c : null,
            [f, U] = M(C, u, w),
            [i, a] = useState(null),
            [R, V] = M(i, u, w);
          useEffect(() => {
            (f == null ? void 0 : f.GetAppType()) ===
              EStoreAppType.k_EStoreAppType_Demo && a(f.GetParentAppID());
          }, [f]);
          let z =
            f != null && f.GetShortDescription()
              ? StripBBCodeTags(f.GetShortDescription())
              : "";
          (!z || z.length === 0) &&
            R &&
            (z =
              R != null && R.GetShortDescription()
                ? StripBBCodeTags(R.GetShortDescription())
                : "");
          const F = U == b && (!i || V == b);
          return [z, F];
        }
        const _ = 1,
          g = 2,
          b = 3;
        function M(c, u, E, w) {
          const C = (0, m.useRef)(void 0),
            f = (0, m.useRef)(void 0),
            U = (0, T.CH)();
          C.current = c;
          const [i, a] = (0, m.useState)(void 0),
            {
              include_assets: R,
              include_release: V,
              include_platforms: z,
              include_all_purchase_options: F,
              include_screenshots: J,
              include_trailers: te,
              include_ratings: Ce,
              include_tag_count: ne,
              include_reviews: Be,
              include_basic_info: Pe,
              include_supported_languages: be,
              include_full_description: xe,
              include_included_items: Ie,
              include_assets_without_overrides: Re,
              apply_user_filters: ie,
              include_links: ye,
              include_extra_details: we,
            } = E;
          if (
            ((0, m.useEffect)(() => {
              const Z = {
                include_assets: R,
                include_release: V,
                include_platforms: z,
                include_all_purchase_options: F,
                include_screenshots: J,
                include_trailers: te,
                include_ratings: Ce,
                include_tag_count: ne,
                include_reviews: Be,
                include_basic_info: Pe,
                include_supported_languages: be,
                include_full_description: xe,
                include_included_items: Ie,
                include_assets_without_overrides: Re,
                apply_user_filters: ie,
                include_links: ye,
                include_extra_details: we,
              };
              let Se = null;
              return (
                !c ||
                  c < 0 ||
                  l.A.Get().BHasStoreItem(c, u, Z) ||
                  (i !== void 0 && w && w == f.current) ||
                  (w !== f.current && (a(void 0), (f.current = w)),
                  (Se = y().CancelToken.source()),
                  l.A.Get()
                    .QueueStoreItemRequest(c, u, Z)
                    .then((re) => {
                      !(Se != null && Se.token.reason) &&
                        C.current === c &&
                        a(re == I.R),
                        U();
                    })),
                () =>
                  Se == null
                    ? void 0
                    : Se.cancel("useStoreItemCache: unmounting")
              );
            }, [
              c,
              u,
              w,
              i,
              R,
              V,
              z,
              F,
              J,
              te,
              Ce,
              ne,
              Be,
              Pe,
              be,
              xe,
              Ie,
              Re,
              ie,
              ye,
              we,
              U,
            ]),
            !c)
          )
            return [null, g];
          if (i === !1) return [void 0, g];
          if (l.A.Get().BIsStoreItemMissing(c, u)) return [void 0, g];
          if (!l.A.Get().BHasStoreItem(c, u, E)) return [void 0, _];
          const ve = l.A.Get().GetStoreItemWithLegacyVisibilityCheck(c, u);
          return ve ? [ve, b] : [null, g];
        }
        function S(c, u, E) {
          return M(c, j.c6.qI, u, E);
        }
        function v(c, u, E) {
          return M(c, EStoreItemType.k_EStoreItemType_Bundle, u, E);
        }
        function A(c, u, E) {
          return M(c, j.c6.RD, u, E);
        }
        function G(c, u, E) {
          var w;
          const [C, f] = M(c, u, E);
          let U;
          (C == null ? void 0 : C.GetStoreItemType()) == j.c6.RD &&
            !((w = C.GetAssets()) != null && w.GetHeaderURL()) &&
            (C == null ? void 0 : C.GetIncludedAppIDs().length) == 1 &&
            (U = C.GetIncludedAppIDs()[0]);
          const [i, a] = S(U, E);
          return U && i != null && i.BIsVisible() ? [i, a] : [C, f];
        }
        function D(c, u, E, w) {
          const C = (0, T.CH)(),
            {
              include_assets: f,
              include_release: U,
              include_platforms: i,
              include_all_purchase_options: a,
              include_screenshots: R,
              include_trailers: V,
              include_ratings: z,
              include_tag_count: F,
              include_reviews: J,
              include_basic_info: te,
              include_supported_languages: Ce,
              include_full_description: ne,
              include_included_items: Be,
              include_assets_without_overrides: Pe,
              apply_user_filters: be,
              include_links: xe,
              include_extra_details: Ie,
            } = E;
          return (
            (0, m.useEffect)(() => {
              if (!c || c.length == 0) return;
              const ie = {
                  include_assets: f,
                  include_release: U,
                  include_platforms: i,
                  include_all_purchase_options: a,
                  include_screenshots: R,
                  include_trailers: V,
                  include_ratings: z,
                  include_tag_count: F,
                  include_reviews: J,
                  include_basic_info: te,
                  include_supported_languages: Ce,
                  include_full_description: ne,
                  include_included_items: Be,
                  include_assets_without_overrides: Pe,
                  apply_user_filters: be,
                  include_links: xe,
                  include_extra_details: Ie,
                },
                ye = c.filter(
                  (Z) =>
                    !(
                      l.A.Get().BHasStoreItem(Z, u, ie) ||
                      l.A.Get().BIsStoreItemMissing(Z, u)
                    ),
                );
              if (ye.length == 0) return;
              const we = y().CancelToken.source(),
                ve = ye.map((Z) => l.A.Get().QueueStoreItemRequest(Z, u, ie));
              return (
                Promise.all(ve).then(() => {
                  we.token.reason || C();
                }),
                () => we.cancel("useStoreItemCacheMultiplePackages: unmounting")
              );
            }, [
              c,
              u,
              w,
              C,
              f,
              U,
              i,
              a,
              R,
              V,
              z,
              F,
              J,
              te,
              Ce,
              ne,
              Be,
              Pe,
              be,
              xe,
              Ie,
            ]),
            c
              ? c.every(
                  (ie) =>
                    l.A.Get().BHasStoreItem(ie, u, E) ||
                    l.A.Get().BIsStoreItemMissing(ie, u),
                )
                ? c.every((ie) =>
                    l.A.Get().GetStoreItemWithLegacyVisibilityCheck(ie, u),
                  )
                  ? b
                  : g
                : _
              : g
          );
        }
        function B(c, u, E) {
          return D(c, j.c6.qI, u, E);
        }
        function x(c, u, E) {
          return D(c, EStoreItemType.k_EStoreItemType_Bundle, u, E);
        }
        function L(c, u, E) {
          return D(c, EStoreItemType.k_EStoreItemType_Package, u, E);
        }
        function s() {
          React.useEffect(
            () => (
              CStoreItemCache.Get().SetReturnUnavailableItems(!0),
              () => CStoreItemCache.Get().SetReturnUnavailableItems(!1)
            ),
            [],
          );
        }
      },
      43828: (Q, K, n) => {
        "use strict";
        n.d(K, { h: () => _ });
        var t = n(7850),
          y = n(96232),
          m = n(90626),
          I = n(70187),
          j = n(7487),
          T = n(72609);
        function l(g) {
          return new j.OJ(new j.R8());
        }
        function r() {
          return new Map([...Array.from(I.W4.entries())]);
        }
        function _(g) {
          const { text: b, languageOverride: M } = g,
            [S] = (0, m.useState)(
              new y.B(r(), l, M != null ? M : T.TS.LANGUAGE),
            );
          return (0, t.jsx)(t.Fragment, { children: S.ParseBBCode(b, {}) });
        }
      },
      1917: (Q, K, n) => {
        "use strict";
        n.d(K, { Eo: () => G, V2: () => M, gH: () => v, j6: () => A });
        var t = n(7850),
          y = n(90626),
          m = n(70187),
          I = n(68941),
          j = n(6532),
          T = n(32093),
          l = n(72609),
          r = n(73662),
          _ = n.n(r),
          g = n(43458);
        function b() {
          return l.TS.EREALM === T.TU.k_ESteamRealmChina;
        }
        var M = ((D) => (
          (D.left = "leftthumb"),
          (D.right = "rightthumb"),
          (D.full = "full"),
          (D.summary = "summary"),
          D
        ))(M || {});
        function S(D) {
          const B = D == "full" ? r.sizeFull : r.sizeThumb,
            x =
              D == "full" ? "" : D == "leftthumb" ? r.floatLeft : r.floatRight;
          return { sizeStr: B, alignStr: x };
        }
        function v(D) {
          if (b()) return null;
          let B = (0, m.j$)(D.args);
          if (B) {
            let x = B.split(";");
            if (x.length == 2) {
              let L = x[0],
                s = x[1].toLocaleLowerCase();
              const { sizeStr: c, alignStr: u } = S(s);
              return (0, t.jsx)(j.A, {
                videoID: L,
                classNameAlign: u,
                classNameSize: c,
                bShowVideoImmediately: !0,
              });
            }
          }
          return (0, t.jsx)(y.Fragment, {});
        }
        function A(D) {
          if (b()) return null;
          const B = (0, g.XU)(D);
          return (B == null ? void 0 : B.strVideoID) !== void 0
            ? (0, t.jsx)(j.A, {
                videoID: B.strVideoID,
                nStartSeconds: B.nStartSeconds,
                classNameAlign: "",
                classNameSize: r.sizeFull,
                bShowVideoImmediately: !1,
              })
            : D;
        }
        function G(D) {
          if (b() || l.TS.COUNTRY.toLocaleUpperCase() == "CN")
            return (0, I.UT)(D);
          const B = (0, m.j$)(D.args, "youtubeid"),
            x = (0, m.j$)(D.args, "size"),
            L = (0, m.j$)(D.args, "seconds"),
            { sizeStr: s, alignStr: c } = S(x);
          return (0, t.jsx)(j.A, {
            videoID: B,
            nStartSeconds: L ? Number.parseInt(L) : void 0,
            classNameAlign: c,
            classNameSize: s,
            bShowVideoImmediately: !0,
          });
        }
      },
      6532: (Q, K, n) => {
        "use strict";
        n.d(K, { A: () => A });
        var t = n(7850),
          y = n(90626),
          m = n(10344),
          I = n(85599),
          j = n(47689),
          T = n(34592),
          l = n(36707),
          r = n(18210),
          _ = n(19730),
          g = n(72609),
          b = n(32608),
          M = n(73662),
          S = n.n(M),
          v = n(72080);
        function A(G) {
          const {
              videoID: D,
              bShowVideoImmediately: B,
              bAutoPlay: x,
              nStartSeconds: L,
              classNameSize: s,
              classNameAlign: c,
            } = G,
            [u, E] = (0, y.useState)(!B),
            [w, C] = (0, y.useState)(!1),
            f = (0, j.m)("YouTubeInlineSnippet"),
            [U, i] = (0, y.useState)({
              title: (0, r.we)("#Loading"),
              description: "",
              videoid: D,
              views: "0",
            });
          if (
            ((0, y.useEffect)(() => {
              u &&
                m.R.LoadYouTubeDynamicData([D], f)
                  .then((a) => {
                    !f.token.reason && a.length > 0 && (i(a[0]), C(!0));
                  })
                  .catch((a) =>
                    console.error(
                      "YouTubeInlineSnippet: " + (0, T.H)(a).strErrorMsg,
                    ),
                  );
            }, [u, f, D]),
            u)
          ) {
            const a = U.title,
              R = U.views,
              V = U.description;
            return (0, t.jsxs)("div", {
              className: v.gg.Box,
              onClick: () => E(!1),
              children: [
                (0, t.jsx)(v.KN, {
                  strURL: "https://img.youtube.com/vi/" + D + "/0.jpg",
                }),
                (0, t.jsxs)(v.J7, {
                  children: [
                    (0, t.jsx)(v.bv, {
                      children: (0, r.we)("#EventEditor_YouTubeVideoTitle", a),
                    }),
                    (0, t.jsx)(v.Yd, {
                      children: (0, r.we)(
                        "#EventEditor_YouTubeVideoViews",
                        (0, _.Dq)(Number(R)),
                      ),
                    }),
                    (0, t.jsxs)(v.s4, {
                      children: [
                        w && V,
                        !w && (0, t.jsx)(I.t, { size: "medium" }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          } else
            return (0, t.jsx)(b.gZ, {
              video: D,
              children: (0, t.jsxs)("div", {
                className: (0, l.A)(S().PreviewYouTubeVideo, s, c),
                id: D,
                children: [
                  (0, t.jsx)("img", {
                    className: S().PlaceholderImg,
                    src:
                      g.TS.COMMUNITY_CDN_URL +
                      "public/shared/images/responsive/youtube_16x9_placeholder.gif",
                  }),
                  (0, t.jsx)(b.fm, {
                    video: D,
                    autoplay: x != null ? x : !1,
                    startSeconds: L,
                    controls: !0,
                    playsInline: !0,
                    autopause: !0,
                    showFullscreenBtn: !0,
                  }),
                ],
              }),
            });
        }
      },
      22714: (Q, K, n) => {
        "use strict";
        n.d(K, { A: () => L });
        var t = n(7850),
          y = n(90626),
          m = n(75844),
          I = n(54963),
          j = n(24660),
          T = n(19298),
          l = n(16346),
          r = n(38655),
          _ = n(18210),
          g = n(36707),
          b = n(90024),
          M = n.n(b),
          S = n(75975),
          v = n(71421),
          A = Object.defineProperty,
          G = Object.getOwnPropertyDescriptor,
          D = (s, c, u, E) => {
            for (
              var w = E > 1 ? void 0 : E ? G(c, u) : c, C = s.length - 1, f;
              C >= 0;
              C--
            )
              (f = s[C]) && (w = (E ? f(c, u, w) : f(w)) || w);
            return E && w && A(c, u, w), w;
          };
        const B = 1576780700;
        let x = class extends y.Component {
          OnEmoticonClick(s) {
            var c;
            const {
                emoticonStore: u,
                strFlairGroupID: E,
                SetUIDisplayPref: w,
                contextOptions: C,
                bShowChatAddons: f,
              } = this.props,
              {
                roomEffectSettings: U,
                onRoomEffectSelected: i,
                onStickerSelected: a,
              } = this.props;
            let R = null;
            if (
              (f && U && i && a
                ? (R = (0, t.jsx)(r.Q4, {
                    emoticonStore: this.props.emoticonStore,
                    strFlairGroupID: this.props.strFlairGroupID,
                    onEmoticonSelected: (V) =>
                      this.props.OnEmoticonSelected(V, !1),
                    roomEffectSettings: U,
                    onRoomEffectSelected: i,
                    onStickerSelected: a,
                  }))
                : E &&
                    u.flair_list &&
                    ((c = u.GetFlairListByGroupID(E)) == null
                      ? void 0
                      : c.length) > 0
                  ? (R = (0, t.jsx)(r.CE, {
                      emoticonStore: this.props.emoticonStore,
                      strFlairGroupID: this.props.strFlairGroupID,
                      OnSelected: this.props.OnEmoticonSelected,
                    }))
                  : (R = (0, t.jsx)(r.iY, {
                      emoticonStore: this.props.emoticonStore,
                      strFlairGroupID: this.props.strFlairGroupID,
                      OnSelected: this.props.OnEmoticonSelected,
                    })),
              (0, l.lX)(
                R,
                s,
                C || {
                  bOverlapHorizontal: !0,
                  bPreferPopLeft: !0,
                  bPreferPopTop: !0,
                },
              ),
              this.BHaveUnseenEmoticons() && w)
            ) {
              let V = this.GetNewestIndicatorTime();
              (!V || V < B) && (V = B), w("rtLastAckedNewEmoticons", V);
            }
          }
          GetNewestIndicatorTime() {
            let s = this.props.emoticonStore,
              c = Number.MIN_SAFE_INTEGER,
              u = s.GetTimeReceivedNewestEmoticon();
            u && (c = u);
            let E = s.GetTimeReceivedForStickerOrEffect();
            return (
              (c = Math.max(E, c)), c > Number.MIN_SAFE_INTEGER ? c : void 0
            );
          }
          BHaveUnseenEmoticons() {
            const { rtLastAckedNewEmoticons: s } = this.props;
            let c = this.GetNewestIndicatorTime();
            return !s || s < B ? !0 : c && (!s || s < c);
          }
          render() {
            const {
              disabled: s,
              className: c,
              ttip: u,
              useImg: E,
            } = this.props;
            let w = [c],
              C = !1;
            return (
              s ? w.push("disabled") : this.BHaveUnseenEmoticons() && (C = !0),
              u && w.push("ttip"),
              E
                ? (0, t.jsx)(T.Z, {
                    onClick: this.OnEmoticonClick,
                    onOKActionDescription: (0, _.we)(
                      "#ChatEntryButton_Emoticon",
                    ),
                    focusable: !0,
                    children: (0, t.jsx)(v.he, {
                      toolTipContent: u,
                      children: (0, t.jsx)("img", {
                        src: this.props.useImg,
                        className: (0, g.A)(...w),
                        title:
                          this.props.title ||
                          (0, _.we)("#ChatEntryButton_Emoticon"),
                      }),
                    }),
                  })
                : (w.push(M().chatSubmitButton, M().EmoticonPickerButton),
                  (0, t.jsx)(j.fu, {
                    className: (0, g.A)(...w),
                    onOKActionDescription: (0, _.we)(
                      "#ChatEntryButton_Emoticon",
                    ),
                    type: "button",
                    onClick: this.OnEmoticonClick,
                    title:
                      this.props.title ||
                      (0, _.we)("#ChatEntryButton_Emoticon"),
                    disabled: s,
                    children: (0, t.jsxs)(v.he, {
                      toolTipContent: u,
                      children: [
                        this.props.buttonIcon || (0, t.jsx)(S.nl, {}),
                        C && (0, t.jsx)(r.iD, {}),
                      ],
                    }),
                  }))
            );
          }
        };
        D([I.oI], x.prototype, "OnEmoticonClick", 1), (x = D([m.PA], x));
        const L = x;
      },
      38655: (Q, K, n) => {
        "use strict";
        n.d(K, { Q4: () => Pe, iY: () => xe, CE: () => Ie, iD: () => ke });
        var t = n(7850),
          y = n(14947),
          m = n(75844),
          I = n(90626),
          j = n(76842),
          T = n(84676),
          l = n(34360),
          r = n(36707),
          _ = n(18210);
        function g(p, o, P = !1) {
          return `${p}economy/sticker${P ? "static" : ""}/${encodeURIComponent(o)}`;
        }
        var b = n(3166),
          M = n(19316),
          S = n(19298),
          v = n(64415),
          A = n(19418);
        class G extends I.Component {
          constructor(o) {
            super(o), (this.state = { activeIndex: o.initialActiveIndex || 0 });
          }
          render() {
            const { config: o } = this.props,
              { activeIndex: P } = this.state,
              N = o[P],
              k = N ? N.renderContent() : null,
              W = o.length > 1,
              H = W
                ? ({ detail: { button: q } }) => {
                    q === v.pR.BUMPER_LEFT
                      ? this.setState({
                          activeIndex: Math.max(0, this.state.activeIndex - 1),
                        })
                      : q === v.pR.BUMPER_RIGHT &&
                        this.setState({
                          activeIndex: Math.min(
                            o.length - 1,
                            this.state.activeIndex + 1,
                          ),
                        });
                  }
                : void 0;
            return (0, t.jsxs)(S.Z, {
              className: A.Picker,
              onButtonDown: H,
              children: [
                W && (0, t.jsx)(D, { children: this.RenderTabs() }),
                k,
              ],
            });
          }
          RenderTabs() {
            return this.props.config.map(({ renderTab: o }, P) => {
              const N = this.state.activeIndex === P;
              return (0, t.jsx)(
                x,
                {
                  active: N,
                  onClick: () => this.setState({ activeIndex: P }),
                  children: o(N),
                },
                P,
              );
            });
          }
        }
        function D(p) {
          return (0, t.jsx)(S.Z, {
            className: A.Tabs,
            "flow-children": "row",
            children: p.children,
          });
        }
        function B(p) {
          return (0, t.jsx)("div", {
            className: A.Content,
            children: p.children,
          });
        }
        function x(p) {
          const { active: o, children: P, onClick: N } = p;
          return (0, t.jsx)(S.Z, {
            className: (0, r.A)(A.Tab, o && A.Active),
            focusClassName: A.Focus,
            onActivate: N,
            children: (0, t.jsx)("div", {
              className: (0, r.A)(A.TabContent, o && A.Active),
              children: P,
            }),
          });
        }
        function L(p) {
          const {
            items: o,
            renderItem: P,
            onItemSelect: N,
            keyExtractor: k,
            renderEmpty: W,
          } = p;
          let H = o.map((q, ee) =>
            (0, t.jsx)(
              S.Z,
              {
                className: A.Item,
                onActivate: () => N(o[ee]),
                autoFocus: ee === 0,
                focusClassName: A.Focus,
                children: P(o[ee]),
              },
              k(q),
            ),
          );
          return (
            o.length === 0 && W && (H = W()),
            (0, t.jsx)(S.Z, {
              "flow-children": "grid",
              className: A.ItemList,
              children: H,
            })
          );
        }
        function s(p) {
          const {
            title: o,
            onFilterChange: P,
            filter: N,
            onSubmit: k,
            ...W
          } = p;
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(B, {
                children: (0, t.jsx)(u, {
                  title: o,
                  children: (0, t.jsx)(L, { ...W }),
                }),
              }),
              (0, t.jsx)(E, { value: N, onChange: P, onSubmit: k }),
            ],
          });
        }
        function c(p) {
          const { onFilterChange: o, filter: P, sections: N, title: k } = p;
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsxs)(B, {
                children: [
                  k &&
                    (0, t.jsx)("div", {
                      className: A.SectionedPageTitle,
                      children: k,
                    }),
                  N.map(({ title: W, ...H }) =>
                    (0, t.jsx)(
                      u,
                      { title: W, children: (0, t.jsx)(L, { ...H }) },
                      W,
                    ),
                  ),
                ],
              }),
              (0, t.jsx)(E, { value: P, onChange: o }),
            ],
          });
        }
        function u(p) {
          return (0, t.jsxs)("div", {
            className: A.Section,
            children: [
              (0, t.jsx)("div", {
                className: A.SectionTitle,
                children: p.title,
              }),
              (0, t.jsx)("div", {
                className: A.SectionContent,
                children: p.children,
              }),
            ],
          });
        }
        function E(p) {
          const { value: o, onChange: P, onSubmit: N } = p;
          return (0, t.jsx)("div", {
            className: A.FilterInputContainer,
            children: (0, t.jsx)(M.pd, {
              type: "text",
              placeholder: (0, _.we)("#AddonPicker_Search"),
              className: A.FilterInput,
              value: o,
              onChange: (k) => P(k.target.value),
              onSubmit: N,
            }),
          });
        }
        function w(p) {
          const { className: o, ...P } = p;
          return (0, t.jsx)("div", {
            className: (0, r.A)(o, A.AddonPickerMessage),
            ...P,
          });
        }
        var C = n(42060),
          f = n.n(C),
          U = n(53107),
          i = n(96197),
          a = Object.defineProperty,
          R = Object.getOwnPropertyDescriptor,
          V = (p, o, P) =>
            o in p
              ? a(p, o, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: P,
                })
              : (p[o] = P),
          z = (p, o, P, N) => {
            for (
              var k = N > 1 ? void 0 : N ? R(o, P) : o, W = p.length - 1, H;
              W >= 0;
              W--
            )
              (H = p[W]) && (k = (N ? H(o, P, k) : H(k)) || k);
            return N && k && a(o, P, k), k;
          },
          F = (p, o, P) => V(p, typeof o != "symbol" ? o + "" : o, P);
        const J = 1e3;
        function te(p) {
          return p.recent_emoticons;
        }
        function Ce(p) {
          return p.recent_stickers;
        }
        function ne(p) {
          return te(p).length + Ce(p).length > 0;
        }
        function Be(p) {
          const [o, P] = (0, I.useState)(p.is_initialized);
          return (
            (0, I.useEffect)(() => {
              if (!p.is_initialized) {
                p.UpdateEmoticonList();
                const N = (0, y.z7)(
                  () => p.is_initialized,
                  () => P(p.is_initialized),
                );
                return () => N();
              }
              return () => {};
            }, [p]),
            o
          );
        }
        const Pe = (0, m.PA)((p) => {
          const {
            emoticonStore: o,
            roomEffectSettings: P,
            strFlairGroupID: N,
            onEmoticonSelected: k,
            onRoomEffectSelected: W,
            onStickerSelected: H,
          } = p;
          Be(o);
          const q = [];
          return (
            ne(o) &&
              q.push({
                renderTab: (ee) =>
                  (0, t.jsx)("span", {
                    title: (0, _.we)("#AddonPicker_RecentlyUsed"),
                    className: (0, r.A)(
                      f().PickerTab,
                      f().Clock,
                      ee && f().ActiveTab,
                    ),
                    children: (0, t.jsx)(O, {}),
                  }),
                renderContent: () =>
                  (0, t.jsx)(Re, {
                    store: o,
                    onEmoticonSelect: (ee) => k(ee.name),
                    onStickerSelect: (ee) => H(ee.name),
                    flairGroupID: N,
                  }),
              }),
            (0, t.jsx)(l.tz, {
              children: (0, t.jsx)(G, {
                config: [
                  ...q,
                  {
                    renderTab: (ee) =>
                      (0, t.jsx)("span", {
                        title: (0, _.we)("#AddonPicker_Emoticons"),
                        className: (0, r.A)(f().PickerTab, ee && f().ActiveTab),
                        children: (0, t.jsx)(Ne, {}),
                      }),
                    renderContent: () =>
                      (0, t.jsx)(ie, {
                        store: o,
                        onItemSelect: (ee) => k(ee.name),
                        flairGroupID: N,
                      }),
                  },
                  {
                    renderTab: (ee) =>
                      (0, t.jsx)("span", {
                        title: (0, _.we)("#AddonPicker_Stickers"),
                        className: (0, r.A)(f().PickerTab, ee && f().ActiveTab),
                        children: (0, t.jsx)(Fe, {}),
                      }),
                    renderContent: () =>
                      (0, t.jsx)(we, {
                        store: o,
                        onItemSelect: (ee) => H(ee.name),
                      }),
                  },
                  {
                    renderTab: (ee) =>
                      (0, t.jsx)("span", {
                        title: (0, _.we)("#AddonPicker_RoomEffects"),
                        className: (0, r.A)(f().PickerTab, ee && f().ActiveTab),
                        children: (0, t.jsx)(h, {}),
                      }),
                    renderContent: () =>
                      (0, t.jsx)(ve, {
                        store: o,
                        effectSettings: P,
                        onItemSelect: (ee) => W(ee.name),
                      }),
                  },
                ],
              }),
            })
          );
        });
        let be = class extends I.Component {
          constructor(p) {
            super(p),
              F(this, "m_disposeEmoticonStore"),
              (this.state = { strSearchText: "" });
            let o = this.props.emoticonStore;
            o.is_initialized ||
              (o.UpdateEmoticonList(),
              (this.m_disposeEmoticonStore = (0, y.z7)(
                () => o.is_initialized,
                () => this.forceUpdate(),
              )));
          }
          componentWillUnmount() {
            this.m_disposeEmoticonStore && this.m_disposeEmoticonStore();
          }
          render() {
            const {
                emoticonStore: p,
                onEmoticonSelected: o,
                onStickerSelected: P,
                strFlairGroupID: N,
              } = this.props,
              k = [];
            return (
              ne(p) &&
                k.push({
                  renderTab: (W) =>
                    (0, t.jsx)("span", {
                      title: (0, _.we)("#AddonPicker_RecentlyUsed"),
                      className: (0, r.A)(
                        f().PickerTab,
                        f().Clock,
                        W && f().ActiveTab,
                      ),
                      children: (0, t.jsx)(O, {}),
                    }),
                  renderContent: () =>
                    (0, t.jsx)(Re, {
                      store: p,
                      onEmoticonSelect: (W) => o(W.name),
                      onStickerSelect: (W) => P(W.name),
                      flairGroupID: N,
                    }),
                }),
              (0, t.jsx)(l.tz, {
                children: (0, t.jsx)(G, {
                  config: [
                    ...k,
                    {
                      renderTab: (W) =>
                        (0, t.jsx)("span", {
                          title: (0, _.we)("#AddonPicker_Emoticons"),
                          className: (0, r.A)(
                            f().PickerTab,
                            W && f().ActiveTab,
                          ),
                          children: (0, t.jsx)(Ne, {}),
                        }),
                      renderContent: () =>
                        (0, t.jsx)(ie, {
                          store: p,
                          onItemSelect: (W) => o(W.name),
                          flairGroupID: N,
                        }),
                    },
                    {
                      renderTab: (W) =>
                        (0, t.jsx)("span", {
                          title: (0, _.we)("#AddonPicker_Stickers"),
                          className: (0, r.A)(
                            f().PickerTab,
                            W && f().ActiveTab,
                          ),
                          children: (0, t.jsx)(Fe, {}),
                        }),
                      renderContent: () =>
                        (0, t.jsx)(we, {
                          store: p,
                          onItemSelect: (W) => P(W.name),
                        }),
                    },
                  ],
                }),
              })
            );
          }
        };
        be = z([m.PA], be);
        class xe extends I.Component {
          constructor(o) {
            super(o),
              F(this, "m_disposeEmoticonStore"),
              (this.state = { strSearchText: "" });
            let P = this.props.emoticonStore;
            P.is_initialized ||
              (P.UpdateEmoticonList(),
              (this.m_disposeEmoticonStore = (0, y.z7)(
                () => P.is_initialized,
                () => this.forceUpdate(),
              )));
          }
          componentWillUnmount() {
            this.m_disposeEmoticonStore && this.m_disposeEmoticonStore();
          }
          render() {
            return (0, t.jsx)(l.tz, {
              children: (0, t.jsx)(G, {
                config: [
                  {
                    renderTab: () =>
                      (0, t.jsx)("span", {
                        title: (0, _.we)("#AddonPicker_Emoticons"),
                        className: f().PickerTab,
                        children: (0, t.jsx)(Ne, {}),
                      }),
                    renderContent: () =>
                      (0, t.jsx)(Z, {
                        store: this.props.emoticonStore,
                        onItemSelect: (o) => this.props.OnSelected(o.name, !1),
                        flairGroupID: this.props.strFlairGroupID,
                      }),
                  },
                ],
              }),
            });
          }
        }
        class Ie extends I.Component {
          constructor(o) {
            super(o),
              F(this, "m_disposeEmoticonStore"),
              (this.state = { strSearchText: "" });
            let P = this.props.emoticonStore;
            P.is_initialized ||
              (P.UpdateEmoticonList(),
              (this.m_disposeEmoticonStore = (0, y.z7)(
                () => P.is_initialized,
                () => this.forceUpdate(),
              )));
          }
          componentWillUnmount() {
            this.m_disposeEmoticonStore && this.m_disposeEmoticonStore();
          }
          render() {
            return (0, t.jsx)(l.tz, {
              children: (0, t.jsx)(G, {
                config: [
                  {
                    renderTab: () =>
                      (0, t.jsx)("span", {
                        title: (0, _.we)("#AddonPicker_Emoticons"),
                        className: f().PickerTab,
                        children: (0, t.jsx)(Ne, {}),
                      }),
                    renderContent: () =>
                      (0, t.jsx)(Se, {
                        store: this.props.emoticonStore,
                        onItemSelect: (o) => this.props.OnSelected(o.name, !1),
                        flairGroupID: this.props.strFlairGroupID,
                      }),
                  },
                ],
              }),
            });
          }
        }
        class Re extends I.Component {
          constructor() {
            super(...arguments), F(this, "state", { filter: "" });
          }
          render() {
            const {
                store: o,
                onEmoticonSelect: P,
                onStickerSelect: N,
              } = this.props,
              { filter: k } = this.state,
              W = [];
            return (
              te(o) &&
                W.push({
                  title: (0, _.we)("#AddonPicker_RecentEmoticons"),
                  items: j.pN.FilterEmoticons(te(o), k),
                  onItemSelect: P,
                  renderItem: (H) => (0, t.jsx)(re, { emoticon: H }),
                  keyExtractor: (H) => H.name,
                  renderEmpty: () =>
                    (0, t.jsx)(w, {
                      children: k
                        ? (0, _.we)("#AddonPicker_NoResults")
                        : (0, _.we)(
                            "#AddonPicker_NoRecent",
                            (0, _.we)("#AddonPicker_Emoticons"),
                          ),
                    }),
                }),
              Ce(o).length &&
                W.push({
                  title: (0, _.we)("#AddonPicker_RecentStickers"),
                  items: j.pN.FilterStickers(Ce(o), k),
                  onItemSelect: N,
                  renderItem: (H) => (0, t.jsx)(Le, { sticker: H }),
                  keyExtractor: ({ name: H }) => H,
                  renderEmpty: () =>
                    (0, t.jsx)(w, {
                      children: k
                        ? (0, _.we)("#AddonPicker_NoResults")
                        : (0, _.we)(
                            "#AddonPicker_NoRecent",
                            (0, _.we)("#AddonPicker_Stickers"),
                          ),
                    }),
                }),
              (0, t.jsx)(c, {
                onFilterChange: (H) => this.setState({ filter: H }),
                filter: k,
                sections: W,
              })
            );
          }
        }
        class ie extends I.Component {
          constructor() {
            super(...arguments), F(this, "state", { filter: "" });
          }
          render() {
            const { store: o, onItemSelect: P, flairGroupID: N } = this.props,
              { filter: k } = this.state,
              W = !k && N ? o.GetFlairListByGroupID(N) : o.emoticon_list,
              H = j.pN.FilterEmoticons(W, k).slice(0, J);
            return (0, t.jsx)(s, {
              title: (0, _.we)("#AddonPicker_Emoticons"),
              items: H,
              onItemSelect: P,
              renderItem: (q) => (0, t.jsx)(re, { emoticon: q }),
              keyExtractor: (q) => q.name,
              onFilterChange: (q) => this.setState({ filter: q }),
              filter: k,
              onSubmit: () => P(H[0]),
              renderEmpty: () =>
                k
                  ? (0, t.jsx)(w, {
                      children: (0, _.we)("#AddonPicker_NoResults"),
                    })
                  : (0, t.jsx)(ye, {}),
            });
          }
        }
        function ye() {
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(w, {
                children: (0, _.we)(
                  "#AddonPicker_NoneOwned",
                  (0, _.we)("#AddonPicker_Emoticons"),
                ),
              }),
              (0, t.jsx)(w, {
                children: (0, _.PP)(
                  "#AddonPicker_AcquireAtPointsShopOrMarket",
                  (0, t.jsx)(U.uU, {
                    href: `${b.TS.STORE_BASE_URL}points/shop/c/emoticons`,
                    children: (0, _.we)(
                      "#AddonPicker_AcquireAtPointsShop_Link",
                    ),
                  }),
                  (0, t.jsx)(U.uU, {
                    href: `${b.TS.COMMUNITY_BASE_URL}market`,
                    children: (0, _.we)(
                      "#AddonPicker_AcquireAtPointsShopOrMarket_Link",
                    ),
                  }),
                ),
              }),
            ],
          });
        }
        class we extends I.Component {
          constructor() {
            super(...arguments), F(this, "state", { filter: "" });
          }
          render() {
            const { store: o, onItemSelect: P } = this.props,
              { filter: N } = this.state,
              k = j.pN.FilterStickers(o.GetStickerList(), N),
              W = () =>
                N
                  ? (0, t.jsx)(w, {
                      children: (0, _.we)("#AddonPicker_NoResults"),
                    })
                  : (0, t.jsxs)(t.Fragment, {
                      children: [
                        (0, t.jsx)(w, {
                          children: (0, _.we)(
                            "#AddonPicker_NoneOwned",
                            (0, _.we)("#AddonPicker_Stickers"),
                          ),
                        }),
                        (0, t.jsx)(w, {
                          children: (0, _.PP)(
                            "#AddonPicker_AcquireAtPointsShop",
                            (0, t.jsx)(U.uU, {
                              href: `${b.TS.STORE_BASE_URL}points/shop/c/stickers`,
                              children: (0, _.we)(
                                "#AddonPicker_AcquireAtPointsShop_Link",
                              ),
                            }),
                          ),
                        }),
                      ],
                    });
            return (0, t.jsx)(s, {
              title: (0, _.we)("#EmoticonPicker_StickerHeading"),
              items: k,
              onItemSelect: P,
              renderItem: (H) => (0, t.jsx)(Le, { sticker: H }),
              keyExtractor: ({ name: H }) => H,
              onFilterChange: (H) => this.setState({ filter: H }),
              filter: N,
              onSubmit: () => P(k[0]),
              renderEmpty: W,
            });
          }
        }
        class ve extends I.Component {
          constructor() {
            super(...arguments), F(this, "state", { filter: "" });
          }
          render() {
            const { store: o, effectSettings: P, onItemSelect: N } = this.props,
              { filter: k } = this.state,
              W = o.GetEffectList().filter(({ name: q }) => q.indexOf(k) > -1),
              H = () =>
                k
                  ? (0, t.jsx)(w, {
                      children: (0, _.we)("#AddonPicker_NoResults"),
                    })
                  : (0, t.jsxs)(t.Fragment, {
                      children: [
                        (0, t.jsx)(w, {
                          children: (0, _.we)(
                            "#AddonPicker_NoneOwned",
                            (0, _.we)("#AddonPicker_RoomEffects"),
                          ),
                        }),
                        (0, t.jsx)(w, {
                          children: (0, _.PP)(
                            "#AddonPicker_AcquireAtPointsShop",
                            (0, t.jsx)(U.uU, {
                              href: `${b.TS.STORE_BASE_URL}points/shop/c/chateffects`,
                              children: (0, _.we)(
                                "#AddonPicker_AcquireAtPointsShop_Link",
                              ),
                            }),
                          ),
                        }),
                      ],
                    });
            return (0, t.jsx)(s, {
              title: (0, _.we)("#EmoticonPicker_EffectHeading"),
              items: W,
              onItemSelect: N,
              renderItem: (q) =>
                (0, t.jsx)(He, { effect: q, roomEffectSettings: P }),
              keyExtractor: ({ name: q }) => q,
              onFilterChange: (q) => this.setState({ filter: q }),
              filter: k,
              onSubmit: () => N(W[0]),
              renderEmpty: H,
            });
          }
        }
        let Z = class extends I.Component {
          constructor() {
            super(...arguments), F(this, "state", { filter: "" });
          }
          render() {
            const { store: p, onItemSelect: o, flairGroupID: P } = this.props,
              { filter: N } = this.state,
              k = [];
            return (
              te(p).length &&
                k.push({
                  title: (0, _.we)("#AddonPicker_RecentEmoticons"),
                  items: j.pN.FilterEmoticons(te(p), N),
                  onItemSelect: o,
                  renderItem: (W) => (0, t.jsx)(re, { emoticon: W }),
                  keyExtractor: (W) => W.name,
                  renderEmpty: () =>
                    (0, t.jsx)(w, {
                      children: N
                        ? (0, _.we)("#AddonPicker_NoResults")
                        : (0, _.we)(
                            "#AddonPicker_NoRecent",
                            (0, _.we)("#AddonPicker_Emoticons"),
                          ),
                    }),
                }),
              (0, t.jsx)(c, {
                onFilterChange: (W) => this.setState({ filter: W }),
                filter: N,
                sections: [
                  ...k,
                  {
                    title: (0, _.we)("#AddonPicker_AllEmoticons"),
                    items: j.pN.FilterStickers(p.emoticon_list, N).slice(0, J),
                    onItemSelect: o,
                    renderItem: (W) => (0, t.jsx)(re, { emoticon: W }),
                    keyExtractor: (W) => W.name,
                    renderEmpty: () =>
                      N
                        ? (0, t.jsx)(w, {
                            children: (0, _.we)("#AddonPicker_NoResults"),
                          })
                        : (0, t.jsx)(ye, {}),
                  },
                ],
              })
            );
          }
        };
        Z = z([m.PA], Z);
        let Se = class extends I.Component {
          constructor() {
            super(...arguments), F(this, "state", { filter: "" });
          }
          render() {
            const { store: p, onItemSelect: o, flairGroupID: P } = this.props,
              { filter: N } = this.state;
            return (0, t.jsx)(c, {
              onFilterChange: (k) => this.setState({ filter: k }),
              filter: N,
              sections: [
                {
                  title: (0, _.we)("#ChatEntryButton_Flair"),
                  items: j.pN.FilterStickers(p.GetFlairListByGroupID(P), N),
                  onItemSelect: o,
                  renderItem: (k) => (0, t.jsx)(re, { emoticon: k }),
                  keyExtractor: (k) => k.name,
                  renderEmpty: () =>
                    N
                      ? (0, t.jsx)(w, {
                          children: (0, _.we)("#AddonPicker_NoResults"),
                        })
                      : (0, t.jsx)(ye, {}),
                },
              ],
            });
          }
        };
        Se = z([m.PA], Se);
        const re = (p) => {
          const { emoticon: o, large: P } = p,
            N = !o.last_used && o.time_received;
          return (0, t.jsxs)("div", {
            className: f().EmoticonItem,
            children: [
              (0, t.jsx)(i.n, { emoticon: o.name, large: P }),
              N && (0, t.jsx)(ke, {}),
            ],
          });
        };
        class Le extends I.Component {
          constructor() {
            super(...arguments),
              F(this, "state", { showHover: !1 }),
              F(this, "m_ref", I.createRef());
          }
          render() {
            const { sticker: o, className: P, ...N } = this.props,
              k = g(b.TS.COMMUNITY_CDN_URL, o.name);
            return (0, t.jsxs)("div", {
              ref: this.m_ref,
              className: (0, r.A)(P, f().StickerButton),
              onMouseOver: () => this.setState({ showHover: !0 }),
              onFocus: () => this.setState({ showHover: !0 }),
              onMouseLeave: () => this.setState({ showHover: !1 }),
              onBlur: () => this.setState({ showHover: !1 }),
              ...N,
              children: [
                (0, t.jsx)("img", { style: { width: "100%" }, src: k }),
                this.state.showHover &&
                  this.m_ref.current &&
                  (0, t.jsx)(Ve, { target: this.m_ref.current, sticker: o }),
              ],
            });
          }
        }
        const Ve = (0, m.PA)((p) => {
          const {
              target: o,
              sticker: { name: P, appid: N },
            } = p,
            [k] = (0, T.t7)(N, {});
          return (0, t.jsx)(i.c, {
            target: o,
            title: P,
            subtitle: k == null ? void 0 : k.GetName(),
            children: (0, t.jsx)("img", {
              src: g(b.TS.COMMUNITY_CDN_URL, P),
              className: f().StickerHoverSticker,
            }),
          });
        });
        class He extends I.Component {
          constructor() {
            super(...arguments),
              F(this, "state", { showHover: !1 }),
              F(this, "m_ref", I.createRef());
          }
          render() {
            const {
                effect: o,
                roomEffectSettings: P,
                className: N,
                ...k
              } = this.props,
              W = P[o.name];
            return (0, t.jsxs)("div", {
              ref: this.m_ref,
              onMouseOver: () => this.setState({ showHover: !0 }),
              onFocus: () => this.setState({ showHover: !0 }),
              onMouseLeave: () => this.setState({ showHover: !1 }),
              onBlur: () => this.setState({ showHover: !1 }),
              className: (0, r.A)(N, f().EffectButton),
              ...k,
              children: [
                W.renderEffectIcon(),
                this.state.showHover &&
                  this.m_ref.current &&
                  (0, t.jsx)(Ye, {
                    target: this.m_ref.current,
                    effect: o,
                    roomEffectSettings: P,
                  }),
              ],
            });
          }
        }
        const Ye = (0, m.PA)((p) => {
          const {
              target: o,
              effect: { name: P, appid: N },
              roomEffectSettings: k,
            } = p,
            W = k[P],
            [H] = (0, T.t7)(N, {});
          return (0, t.jsx)(i.c, {
            target: o,
            title: P,
            subtitle: H == null ? void 0 : H.GetName(),
            children: (0, t.jsx)("div", {
              className: f().EffectHoverEffect,
              children: W.renderEffectIcon(),
            }),
          });
        });
        function ke() {
          return (0, t.jsx)("div", {
            className: f().NewEmoticonIndicator,
            children: (0, t.jsx)("div", { className: f().NewEmoticonCircle }),
          });
        }
        function Qe(p) {
          return useInGamepadUI()
            ? jsxs("svg", {
                viewBox: "0 0 36 36",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ...p,
                children: [
                  jsx("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M8 4C5.79086 4 4 5.79086 4 8V27C4 29.2091 5.79086 31 8 31H13V20C13 16.134 16.134 13 20 13H31V8C31 5.79086 29.2091 4 27 4H8Z",
                    fill: "currentColor",
                  }),
                  jsx("path", {
                    d: "M16 20C16 17.7909 17.7909 16 20 16H31L16 31V20Z",
                    fill: "currentColor",
                  }),
                  jsx("path", {
                    d: "M29 24.0625V25C29 25.2671 28.9738 25.5282 28.9239 25.7806L30.8858 26.1688C30.9609 25.7892 31 25.3982 31 25V24.0625H29Z",
                    fill: "currentColor",
                  }),
                  jsx("path", {
                    d: "M28.3263 27.2225C28.0342 27.6587 27.6587 28.0342 27.2225 28.3263L28.3351 29.9882C28.9885 29.5507 29.5507 28.9885 29.9882 28.3351L28.3263 27.2225Z",
                    fill: "currentColor",
                  }),
                  jsx("path", {
                    d: "M21 29H22.1875V31H19L21 29Z",
                    fill: "currentColor",
                  }),
                  jsx("path", {
                    d: "M24.0625 29H25C25.2671 29 25.5282 28.9738 25.7806 28.9239L26.1688 30.8858C25.7892 30.9609 25.3981 31 25 31H24.0625V29Z",
                    fill: "currentColor",
                  }),
                  jsx("path", {
                    d: "M29 22.1875V21L31 19V22.1875H29Z",
                    fill: "currentColor",
                  }),
                ],
              })
            : jsx("svg", {
                viewBox: "0 0 59 59",
                width: "32",
                ...p,
                children: jsx("switch", {
                  children: jsx("g", {
                    children: jsx("path", {
                      d: "M58 30.2v-.1L23.4 58.5l-.2-.3-.1.1C9.9 55.4 0 43.6 0 29.5 0 13.2 13.2 0 29.5 0S59 13.2 59 29.4l-1 .8zm0-1.5c-5-2.2-16.1-4-26 4.6-9.8 8.4-10.3 18.8-9.2 23.9C10.3 54.2 1 42.9 1 29.5 1 13.8 13.8 1 29.5 1 45 1 57.6 13.3 58 28.7zm-.8.8L23.7 56.9c-1-4.8-.5-14.8 8.9-22.9 9.4-8 19.7-6.6 24.6-4.5z",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      fill: "#fff",
                    }),
                  }),
                }),
              });
        }
        function Fe(p) {
          return (0, t.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 36 36",
            fill: "none",
            ...p,
            children: [
              (0, t.jsx)("path", {
                fill: "currentColor",
                d: "M8 4C5.79086 4 4 5.79086 4 8V27C4 29.2091 5.79086 31 8 31H13V20C13 16.134 16.134 13 20 13H31V8C31 5.79086 29.2091 4 27 4H8Z",
              }),
              (0, t.jsx)("path", {
                fill: "currentColor",
                d: "M16 20C16 17.7909 17.7909 16 20 16H31L16 31V20Z",
              }),
              (0, t.jsx)("path", {
                fill: "currentColor",
                d: "M29 24.0625V25C29 25.2671 28.9738 25.5282 28.9239 25.7806L30.8858 26.1688C30.9609 25.7892 31 25.3982 31 25V24.0625H29Z",
              }),
              (0, t.jsx)("path", {
                fill: "currentColor",
                d: "M28.3263 27.2225C28.0342 27.6587 27.6587 28.0342 27.2225 28.3263L28.3351 29.9882C28.9885 29.5507 29.5507 28.9885 29.9882 28.3351L28.3263 27.2225Z",
              }),
              (0, t.jsx)("path", {
                fill: "currentColor",
                d: "M21 29H22.1875V31H19L21 29Z",
              }),
              (0, t.jsx)("path", {
                fill: "currentColor",
                d: "M24.0625 29H25C25.2671 29 25.5282 28.9738 25.7806 28.9239L26.1688 30.8858C25.7892 30.9609 25.3982 31 25 31H24.0625V29Z",
              }),
              (0, t.jsx)("path", {
                fill: "currentColor",
                d: "M29 22.1875V21L31 19V22.1875H29Z",
              }),
            ],
          });
        }
        function Ze(p) {
          return useInGamepadUI()
            ? jsx("svg", {
                width: "36",
                height: "36",
                viewBox: "0 0 36 36",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ...p,
                children: jsx("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M33 18C33 26.2843 26.2843 33 18 33C15.031 33 12.2636 32.1374 9.93446 30.6492L4.35707 32.4107C3.95174 32.5387 3.58168 32.1347 3.74474 31.7421L5.81718 26.7529C4.04426 24.2896 3 21.2667 3 18C3 9.71573 9.71573 3 18 3C26.2843 3 33 9.71573 33 18ZM18 9.66667C16.3518 9.66667 14.7407 10.1554 13.3703 11.0711C11.9998 11.9868 10.9317 13.2883 10.301 14.811C9.67028 16.3337 9.50525 18.0092 9.82679 19.6258C10.1483 21.2423 10.942 22.7271 12.1074 23.8926C13.2729 25.058 14.7577 25.8517 16.3743 26.1732C17.9908 26.4948 19.6663 26.3297 21.189 25.699C22.7118 25.0683 24.0132 24.0002 24.9289 22.6298C25.8446 21.2593 26.3333 19.6482 26.3333 18C26.3333 16.9057 26.1178 15.822 25.699 14.811C25.2802 13.7999 24.6664 12.8813 23.8926 12.1074C23.1187 11.3336 22.2001 10.7198 21.189 10.301C20.178 9.88222 19.0944 9.66667 18 9.66667ZM13 16.3333C13 16.0037 13.0978 15.6815 13.2809 15.4074C13.464 15.1333 13.7243 14.9197 14.0289 14.7935C14.3334 14.6674 14.6685 14.6344 14.9918 14.6987C15.3151 14.763 15.6121 14.9217 15.8452 15.1548C16.0783 15.3879 16.237 15.6849 16.3013 16.0082C16.3656 16.3315 16.3326 16.6666 16.2065 16.9711C16.0803 17.2757 15.8667 17.536 15.5926 17.7191C15.3185 17.9023 14.9963 18 14.6667 18C14.2246 18 13.8007 17.8244 13.4882 17.5118C13.1756 17.1993 13 16.7754 13 16.3333ZM21.3333 18C21.0037 18 20.6815 17.9023 20.4074 17.7191C20.1333 17.536 19.9197 17.2757 19.7935 16.9711C19.6674 16.6666 19.6344 16.3315 19.6987 16.0082C19.763 15.6849 19.9217 15.3879 20.1548 15.1548C20.3879 14.9217 20.6849 14.763 21.0082 14.6987C21.3315 14.6344 21.6666 14.6674 21.9711 14.7935C22.2757 14.9197 22.536 15.1333 22.7191 15.4074C22.9023 15.6815 23 16.0037 23 16.3333C23 16.7754 22.8244 17.1993 22.5119 17.5118C22.1993 17.8244 21.7754 18 21.3333 18ZM19.9642 22.1864C20.4851 21.6655 20.7778 20.9589 20.7778 20.2222H15.2222C15.2222 20.9589 15.5149 21.6655 16.0358 22.1864C16.5568 22.7073 17.2633 23 18 23C18.7367 23 19.4433 22.7073 19.9642 22.1864Z",
                  fill: "currentColor",
                }),
              })
            : jsx("svg", {
                viewBox: "0 -8 60 60",
                width: "32",
                ...p,
                children: jsx("path", {
                  d: "M.5 5.5C.5 2.5 3 0 6 0h48c3 0 5.5 2.5 5.5 5.5V35c0 3-2.5 5.5-5.5 5.5h-1.5c-.8 0-1.5.7-1.5 1.5v8.1c0 1.3-1.6 2-2.6 1.1L37.8 40.5H6C3 40.5.5 38 .5 35V5.5zM6 1C3.5 1 1.5 3 1.5 5.5V35c0 2.5 2 4.5 4.5 4.5h32.2l.1.1 10.8 10.8c.3.3.9.1.9-.4v-8c0-1.4 1.1-2.5 2.5-2.5H54c2.5 0 4.5-2 4.5-4.5V5.5C58.5 3 56.5 1 54 1H6zm24 31c6.6 0 12-5.4 12-12S36.6 8 30 8s-12 5.4-12 12 5.4 12 12 12zm0 1c7.2 0 13-5.8 13-13S37.2 7 30 7s-13 5.8-13 13 5.8 13 13 13zm-3.5-15c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5-1.5.7-1.5 1.5.7 1.5 1.5 1.5zm8.5-1.5c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5.7-1.5 1.5-1.5 1.5.7 1.5 1.5zM24.5 22c0 2.5 2 4.5 4.5 4.5h2c2.5 0 4.5-2 4.5-4.5h-1c0 1.9-1.6 3.5-3.5 3.5h-2c-1.9 0-3.5-1.6-3.5-3.5h-1z",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  fill: "#fff",
                }),
              });
        }
        function Ne(p) {
          return (0, t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 36 36",
            fill: "none",
            ...p,
            children: (0, t.jsx)("path", {
              fill: "currentColor",
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M18 3C15.0333 3 12.1332 3.87973 9.66645 5.52796C7.19972 7.17618 5.27713 9.51886 4.14181 12.2597C3.0065 15.0006 2.70945 18.0166 3.28823 20.9264C3.86701 23.8361 5.29562 26.5088 7.3934 28.6066C9.49119 30.7044 12.1639 32.133 15.0737 32.7118C17.9834 33.2906 20.9994 32.9935 23.7403 31.8582C26.4811 30.7229 28.8238 28.8003 30.472 26.3336C32.1203 23.8668 33 20.9667 33 18C33 16.0302 32.612 14.0796 31.8582 12.2597C31.1044 10.4399 29.9995 8.78628 28.6066 7.3934C27.2137 6.00052 25.5601 4.89563 23.7403 4.14181C21.9204 3.38799 19.9698 3 18 3ZM9.00001 15C9.00001 14.4067 9.17595 13.8266 9.5056 13.3333C9.83524 12.8399 10.3038 12.4554 10.852 12.2284C11.4001 12.0013 12.0033 11.9419 12.5853 12.0576C13.1672 12.1734 13.7018 12.4591 14.1213 12.8787C14.5409 13.2982 14.8266 13.8328 14.9424 14.4147C15.0581 14.9967 14.9987 15.5999 14.7716 16.1481C14.5446 16.6962 14.1601 17.1648 13.6667 17.4944C13.1734 17.8241 12.5934 18 12 18C11.2044 18 10.4413 17.6839 9.87869 17.1213C9.31608 16.5587 9.00001 15.7956 9.00001 15ZM24 18C23.4067 18 22.8266 17.8241 22.3333 17.4944C21.8399 17.1648 21.4554 16.6962 21.2284 16.1481C21.0013 15.5999 20.9419 14.9967 21.0576 14.4147C21.1734 13.8328 21.4591 13.2982 21.8787 12.8787C22.2982 12.4591 22.8328 12.1734 23.4147 12.0576C23.9967 11.9419 24.5999 12.0013 25.1481 12.2284C25.6962 12.4554 26.1648 12.8399 26.4944 13.3333C26.8241 13.8266 27 14.4067 27 15C27 15.7956 26.6839 16.5587 26.1213 17.1213C25.5587 17.6839 24.7957 18 24 18ZM26.3149 23.6788C26.7672 22.8295 27 21.9193 27 21H18H9C9 21.9193 9.23279 22.8295 9.68508 23.6788C10.1374 24.5281 10.8003 25.2997 11.636 25.9497C12.4718 26.5998 13.4639 27.1154 14.5558 27.4672C15.6478 27.8189 16.8181 28 18 28C19.1819 28 20.3522 27.8189 21.4442 27.4672C22.5361 27.1154 23.5282 26.5998 24.364 25.9497C25.1997 25.2997 25.8626 24.5281 26.3149 23.6788Z",
            }),
          });
        }
        function $e(p) {
          return useInGamepadUI()
            ? jsxs("svg", {
                viewBox: "0 0 36 36",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ...p,
                children: [
                  jsx("path", {
                    d: "M14.5 7L17.2 15.37C17.5375 16.5175 18.4825 17.395 19.63 17.8L28 20.5L19.63 23.2C18.4825 23.5375 17.605 24.4825 17.2 25.63L14.5 34L11.8 25.63C11.4625 24.4825 10.5175 23.605 9.37 23.2L1 20.5L9.37 17.8C10.5175 17.4625 11.395 16.5175 11.8 15.37L14.5 7Z",
                    fill: "currentColor",
                  }),
                  jsx("path", {
                    d: "M24.9231 2L26.3077 6.33599C26.4923 6.94209 26.9538 7.40833 27.5538 7.59482L31.8462 8.99353L27.5538 10.3922C26.9538 10.5787 26.4923 11.045 26.3077 11.6511L24.9231 15.9871L23.5385 11.6511C23.3538 11.045 22.8923 10.5787 22.2923 10.3922L18 8.99353L22.2923 7.59482C22.8923 7.40833 23.3538 6.94209 23.5385 6.33599L24.9231 2Z",
                    fill: "currentColor",
                  }),
                  jsx("path", {
                    d: "M7.46154 3L8.15385 5.1913C8.24615 5.47105 8.47692 5.70416 8.75384 5.79741L10.9231 6.49676L8.75384 7.19611C8.47692 7.28936 8.24615 7.52248 8.15385 7.80222L7.46154 9.99352L6.76923 7.80222C6.67692 7.52248 6.44615 7.28936 6.16923 7.19611L4 6.49676L6.16923 5.79741C6.44615 5.70416 6.67692 5.47105 6.76923 5.1913L7.46154 3Z",
                    fill: "currentColor",
                  }),
                  jsx("path", {
                    d: "M31.4615 12L32.1538 14.1913C32.2462 14.471 32.4769 14.7042 32.7538 14.7974L34.9231 15.4968L32.7538 16.1961C32.4769 16.2894 32.2462 16.5225 32.1538 16.8022L31.4615 18.9935L30.7692 16.8022C30.6769 16.5225 30.4462 16.2894 30.1692 16.1961L28 15.4968L30.1692 14.7974C30.4462 14.7042 30.6769 14.471 30.7692 14.1913L31.4615 12Z",
                    fill: "currentColor",
                  }),
                  jsx("path", {
                    d: "M26.4615 25L27.1538 27.1913C27.2462 27.471 27.4769 27.7042 27.7538 27.7974L29.9231 28.4968L27.7538 29.1961C27.4769 29.2894 27.2462 29.5225 27.1538 29.8022L26.4615 31.9935L25.7692 29.8022C25.6769 29.5225 25.4462 29.2894 25.1692 29.1961L23 28.4968L25.1692 27.7974C25.4462 27.7042 25.6769 27.471 25.7692 27.1913L26.4615 25Z",
                    fill: "currentColor",
                  }),
                ],
              })
            : jsx("svg", {
                viewBox: "0 0 60 38",
                width: "32",
                ...p,
                children: jsx("path", {
                  d: "M16 8.9l1.9 5.1c.2.5.6 1 1.2 1.2l5.1 1.9-5.1 1.9c-.5.2-1 .6-1.2 1.2L16 25.1 14.1 20c-.2-.5-.6-1-1.2-1.2l-5-1.8 5.1-1.9c.5-.2 1-.6 1.2-1.2l1.8-5zm-.9-.4c.3-.9 1.6-.9 1.9 0l1.9 5.1c.1.3.3.5.6.6l5.1 1.9c.9.3.9 1.6 0 1.9l-5.1 1.9c-.3.1-.5.3-.6.6L17 25.6c-.3.9-1.6.9-1.9 0l-1.9-5.1c-.1-.3-.3-.5-.6-.6L7.5 18c-.9-.3-.9-1.6 0-1.9l5.1-1.9c.3-.1.5-.3.6-.6l1.9-5.1zm17.8 15.4l-1.9-5-1.9 5.1c-.2.5-.6 1-1.2 1.2l-5 1.8 5.1 1.9c.5.2 1 .6 1.2 1.2l1.9 5.1 1.9-5.1c.2-.5.6-1 1.2-1.2l5.1-1.9-5.1-1.9c-.7-.2-1.1-.6-1.3-1.2zm-1-5.4c-.3-.9-1.6-.9-1.9 0l-1.9 5.1c-.1.3-.3.5-.6.6l-5.1 1.9c-.9.3-.9 1.6 0 1.9l5.1 1.9c.3.1.5.3.6.6l1.9 5.1c.3.9 1.6.9 1.9 0l1.9-5.1c.1-.3.3-.5.6-.6l5.1-1.9c.9-.3.9-1.6 0-1.9l-5.1-1.9c-.3-.1-.5-.3-.6-.6l-1.9-5.1zM43 4.9l1.9 5.1c.2.5.6 1 1.2 1.2l5.1 1.9-5.1 1.9c-.5.2-1 .6-1.2 1.2L43 21.1 41.1 16c-.2-.5-.6-1-1.2-1.2l-5-1.8 5.1-1.9c.5-.2 1-.6 1.2-1.2l1.8-5zm-.9-.4c.3-.9 1.6-.9 1.9 0l1.9 5.1c.1.3.3.5.6.6l5.1 1.9c.9.3.9 1.6 0 1.9l-5.1 1.9c-.3.1-.5.3-.6.6L44 21.6c-.3.9-1.6.9-1.9 0l-1.9-5.1c-.1-.3-.3-.5-.6-.6L34.5 14c-.9-.3-.9-1.6 0-1.9l5.1-1.9c.3-.1.5-.3.6-.6l1.9-5.1z",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  fill: "#fff",
                }),
              });
        }
        function h(p) {
          return (0, t.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 36 36",
            fill: "none",
            ...p,
            children: [
              (0, t.jsx)("path", {
                fill: "currentColor",
                d: "M14.7163 7.6875L17.2476 15.5344C17.564 16.6102 18.4499 17.4328 19.5257 17.8125L27.3726 20.3438L19.5257 22.875C18.4499 23.1914 17.6273 24.0773 17.2476 25.1531L14.7163 33L12.1851 25.1531C11.8687 24.0773 10.9827 23.2547 9.90696 22.875L2.06009 20.3438L9.90696 17.8125C10.9827 17.4961 11.8054 16.6102 12.1851 15.5344L14.7163 7.6875Z",
              }),
              (0, t.jsx)("path", {
                fill: "currentColor",
                d: "M24.488 3L25.7861 7.06499C25.9591 7.63321 26.3918 8.07031 26.9543 8.24514L30.9784 9.55643L26.9543 10.8677C26.3918 11.0426 25.9591 11.4796 25.7861 12.0479L24.488 16.1129L23.1899 12.0479C23.0168 11.4796 22.5841 11.0426 22.0216 10.8677L17.9976 9.55643L22.0216 8.24514C22.5841 8.07031 23.0168 7.63321 23.1899 7.06499L24.488 3Z",
              }),
              (0, t.jsx)("path", {
                fill: "currentColor",
                d: "M8.11778 3.9375L8.76682 5.99185C8.85336 6.25411 9.0697 6.47265 9.32932 6.56007L11.363 7.21571L9.32932 7.87136C9.0697 7.95878 8.85336 8.17732 8.76682 8.43958L8.11778 10.4939L7.46874 8.43958C7.3822 8.17732 7.16586 7.95878 6.90624 7.87136L4.87259 7.21571L6.90624 6.56007C7.16586 6.47265 7.3822 6.25411 7.46874 5.99185L8.11778 3.9375Z",
              }),
              (0, t.jsx)("path", {
                fill: "currentColor",
                d: "M30.6178 12.375L31.2668 14.4293C31.3534 14.6916 31.5697 14.9102 31.8293 14.9976L33.863 15.6532L31.8293 16.3089C31.5697 16.3963 31.3534 16.6148 31.2668 16.8771L30.6178 18.9314L29.9687 16.8771C29.8822 16.6148 29.6659 16.3963 29.4062 16.3089L27.3726 15.6532L29.4062 14.9976C29.6659 14.9102 29.8822 14.6916 29.9687 14.4293L30.6178 12.375Z",
              }),
              (0, t.jsx)("path", {
                fill: "currentColor",
                d: "M25.9303 24.5625L26.5793 26.6168C26.6659 26.8791 26.8822 27.0977 27.1418 27.1851L29.1755 27.8407L27.1418 28.4964C26.8822 28.5838 26.6659 28.8023 26.5793 29.0646L25.9303 31.1189L25.2812 29.0646C25.1947 28.8023 24.9784 28.5838 24.7187 28.4964L22.6851 27.8407L24.7187 27.1851C24.9784 27.0977 25.1947 26.8791 25.2812 26.6168L25.9303 24.5625Z",
              }),
            ],
          });
        }
        function O(p) {
          const { className: o, ...P } = p;
          return (0, t.jsx)("svg", {
            className: (0, r.A)("SVGIcon_Button SVGIcon_Clock", o),
            version: "1.1",
            x: "0px",
            y: "0px",
            width: "20px",
            height: "20px",
            viewBox: "0 0 24 24",
            ...P,
            children: (0, t.jsx)("path", {
              d: "M15.999 15c-.15 0-.303-.034-.446-.105l-4-2A1.001 1.001 0 0111 12V5a1 1 0 012 0v6.382l3.447 1.724A1 1 0 0115.999 15zM12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z",
            }),
          });
        }
      },
      96197: (Q, K, n) => {
        "use strict";
        n.d(K, { n: () => G, c: () => x });
        var t = n(7850),
          y = n(90626),
          m = n(561),
          I = n(21227),
          j = n(82734);
        function T(L) {
          const { text: s = "", style: c, children: u } = L;
          if (s == null) return (0, t.jsx)(y.Fragment, { children: u });
          let E;
          if (
            (s instanceof Array
              ? (E = s
                  .map((w) => (w ? w.toString() : ""))
                  .filter((w) => w.length > 0)
                  .join(`
`))
              : (E = s.toString()),
            y.Children.count(u) == 1)
          ) {
            let w = y.Children.only(u);
            return y.cloneElement(w, {
              "data-copystyle": c,
              "data-copytext": E,
            });
          } else
            return (
              console.log(`Error: CopyableText must be the parent of exactly one child:
	copystyle=${c} copytext=${E}`),
              (0, t.jsx)(y.Fragment, { children: u })
            );
        }
        function l(L) {
          var s;
          let c = L.cloneContents(),
            u = "",
            E = "",
            w = !1,
            f = (
              c.querySelector("[data-activechat=true]") || c
            ).querySelectorAll("[data-copytext]"),
            U = Array.from(f).map(
              (i) => i.getAttribute("data-copystyle") || "msg",
            );
          for (let i = 0; i < f.length; ++i) {
            let a = f[i],
              R = U[i];
            if (i + 1 < f.length && DOMUtils.BIsParent(a, f[i + 1])) continue;
            let V = a.tagName.toLowerCase(),
              z = R.includes("block"),
              F = R.includes("timestamp"),
              J = R.includes("server"),
              te = R.includes("invite"),
              Ce = R.includes("emote"),
              ne = R.includes("no-prefix"),
              Be = R.includes("no-suffix"),
              Pe = R.includes("allow-embedded-newlines"),
              be = R.includes("block-continue"),
              xe = R.includes("merge-adjacent"),
              Ie = R.includes("force-display"),
              Re = R.includes("prepend-innertext"),
              ie = R.includes("append-innertext"),
              ye = R.includes("prepend-newline"),
              we = R.includes("append-newline"),
              ve = R.includes("speaker");
            if (!Ie) {
              let Le = V.match(/img|iframe/) != null,
                Ve = a.querySelector("img,iframe") != null;
              if (!a.innerText && !Le && !Ve) continue;
            }
            xe &&
              (i > 0 && U[i - 1].includes("merge-adjacent") && (ne = !0),
              i + 1 < U.length &&
                U[i + 1].includes("merge-adjacent") &&
                (Be = !0)),
              ve && (w = !0);
            let Z = "",
              Se = `
`;
            !F && !ve && !J && !te && !Ce
              ? (w && (Z += "	"),
                E.includes("msg") && z && (ye = !0),
                E.includes("block") && !be && (ye = !0))
              : (u.length != 0 &&
                  (Z += `
`),
                (J || te) && (Z += "		"));
            let re = (s = a.getAttribute("data-copytext")) != null ? s : "";
            re.length == 0
              ? (re = a.innerText)
              : Re && a.innerText.length > 0
                ? (re = `${a.innerText}${
                    R.includes("-with-newline")
                      ? `
`
                      : " "
                  }${re}`)
                : ie &&
                  a.innerText.length > 0 &&
                  (re += `${
                    R.includes("-with-newline")
                      ? `
`
                      : " "
                  }${a.innerText}`),
              re.length != 0 &&
                (ye &&
                  (u += `
`),
                ne || (u += Z),
                (u += Pe ? re : re.replace(/\n/g, Se + Z)),
                Be || (u += Se),
                we &&
                  (u += `
`)),
              (E = R);
          }
          if (u.length != 0) return u;
        }
        function r(L) {
          const s = l(L);
          s != null && DOMUtils.CopyTextToClipboard(s);
        }
        function _(L) {
          const s = document.createRange();
          s.selectNode(L), r(s);
        }
        var g = n(36707),
          b = n(42060),
          M = n.n(b),
          S = n(86048),
          v = n(88942),
          A = n(98609);
        function G(L) {
          const { emoticon: s, large: c } = L,
            [u, E] = (0, S.OP)(),
            [w, C] = y.useState(null),
            f = `:${s}:`,
            U = (0, I.G)(s, c);
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(T, {
                text: f,
                style: "merge-adjacent",
                children: (0, t.jsx)("img", {
                  ...E,
                  src: U,
                  className: (0, g.A)(M().emoticon, c ? M().large : void 0),
                  "data-emoticon": s,
                  alt: s,
                  ref: C,
                }),
              }),
              u && w && (0, t.jsx)(D, { target: w, emoticon: s }),
            ],
          });
        }
        function D(L) {
          const { target: s, emoticon: c } = L,
            { data: u } = B(c);
          return (0, t.jsx)(x, {
            target: s,
            title: `:${c}:`,
            subtitle: u && u.app_name ? u.app_name : void 0,
            children: (0, t.jsx)(G, { emoticon: c, large: !0 }),
          });
        }
        function B(L) {
          return (0, v.I)({
            queryKey: ["EmoticonHover", L],
            queryFn: async () => {
              const s = `${A.TS.COMMUNITY_CDN_URL}economy/emoticonhoverjson/${encodeURIComponent(L)}?l=${encodeURIComponent(A.TS.LANGUAGE)}&origin=${self.origin}`,
                c = await fetch(s);
              if (c.status != 200)
                throw `Error fetching emoticon: ${c.status} ${c.statusText}`;
              return await c.json();
            },
          });
        }
        const x = ({ target: L, title: s, subtitle: c, children: u }) =>
          (0, t.jsxs)(m.g, {
            target: L,
            style: { zIndex: 1700 },
            className: M().EmoticonHover,
            children: [
              u,
              (0, t.jsxs)("div", {
                className: M().Info,
                children: [
                  (0, t.jsx)("div", {
                    className: M().Name,
                    children: s || (0, t.jsx)("span", { children: "\xA0" }),
                  }),
                  (0, t.jsx)("div", {
                    className: M().AppName,
                    children: c || (0, t.jsx)("span", { children: "\xA0" }),
                  }),
                ],
              }),
            ],
          });
      },
      25269: (Q, K, n) => {
        "use strict";
        n.d(K, { J: () => t });
        function t(y) {
          if (!y) return y;
          const m = y.trim(),
            I = m.toLowerCase();
          return I.startsWith("javascript:") ||
            I.startsWith("data:") ||
            I.startsWith("vbscript:")
            ? ""
            : m;
        }
      },
      67134: (Q, K, n) => {
        "use strict";
        n.d(K, { L: () => B });
        var t = n(7850),
          y = n(90626),
          m = n(99412),
          I = n(32093),
          j = n(18210),
          T = n(53113),
          l = n(72609),
          r = n(3166),
          _ = n(54963),
          g = Object.defineProperty,
          b = Object.getOwnPropertyDescriptor,
          M = (C, f, U) =>
            f in C
              ? g(C, f, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: U,
                })
              : (C[f] = U),
          S = (C, f, U, i) => {
            for (
              var a = i > 1 ? void 0 : i ? b(f, U) : f, R = C.length - 1, V;
              R >= 0;
              R--
            )
              (V = C[R]) && (a = (i ? V(f, U, a) : V(a)) || a);
            return i && a && g(f, U, a), a;
          },
          v = (C, f, U) => M(C, typeof f != "symbol" ? f + "" : f, U);
        function A(C) {
          return !(
            !(0, T.ZF)(C.sPoster) ||
            (C.rgVideoSources &&
              C.rgVideoSources.some((f) => !(0, T.ZF)(f.sURL))) ||
            (C.rgVideoTracks && C.rgVideoTracks.some((f) => !(0, T.ZF)(f.sURL)))
          );
        }
        const G = class Ke {
          constructor() {
            v(this, "m_bUserHasVolumePreference", !1),
              v(this, "m_flVolumePreference", 0);
          }
          BUserHasVolumePreference() {
            return this.m_bUserHasVolumePreference;
          }
          SetVolumePreference(f) {
            (this.m_flVolumePreference = f),
              (this.m_bUserHasVolumePreference = !0);
          }
          GetVolumePreference() {
            return this.m_flVolumePreference;
          }
          BVolumePreferenceMuted() {
            return this.m_flVolumePreference < 0.001;
          }
          static Get() {
            return (
              Ke.s_Singleton || (Ke.s_Singleton = new Ke()), Ke.s_Singleton
            );
          }
        };
        v(G, "s_Singleton"),
          S([_.oI], G.prototype, "BUserHasVolumePreference", 1),
          S([_.oI], G.prototype, "SetVolumePreference", 1);
        let D = G;
        const B = (0, y.forwardRef)(function (f, U) {
            const {
                video: i,
                bAutoPlay: a,
                bControls: R,
                bLoop: V,
                bMuted: z,
                className: F,
                mediaScale: J,
                onClick: te,
                altText: Ce,
              } = f,
              ne = (0, y.useMemo)(() => {
                var ve;
                return !!(
                  (ve = i.rgVideoTracks) != null &&
                  ve.some(
                    (Z) => Z.sKind == "subtitles" || Z.sKind == "captions",
                  )
                );
              }, [i.rgVideoTracks]),
              [Be, Pe] = y.useState(!1),
              be = s();
            if (!i.rgVideoSources || !i.rgVideoSources.length) return null;
            const xe = A(i);
            let Ie;
            (!xe || (ne && l.TS.EUNIVERSE == m.wLO)) && (Ie = "anonymous");
            const Re = z || (a && D.Get().BVolumePreferenceMuted()),
              ie = i.sPoster ? c(i.sPoster, be) : "",
              ye = (ve) => {
                const Z = ve.target,
                  Se = Z.muted ? 0 : Z.volume;
                Be && D.Get().SetVolumePreference(Se);
              },
              we = (ve) => {
                const Z = ve.target,
                  Se = Z.currentTime == 0,
                  re = D.Get().BUserHasVolumePreference();
                if ((Pe(!0), !!Se))
                  if (!re && !a) {
                    const Le = Z.muted ? 0 : Z.volume;
                    D.Get().SetVolumePreference(Le);
                  } else
                    re &&
                      ((Z.volume = D.Get().GetVolumePreference()),
                      (Z.muted = D.Get().BVolumePreferenceMuted()));
              };
            return (0, t.jsxs)("video", {
              width: "100%",
              height: "auto",
              autoPlay: a,
              muted: Re,
              playsInline: !0,
              controls: R,
              poster: ie,
              loop: V,
              crossOrigin: Ie,
              onVolumeChange: ye,
              onPlay: we,
              ref: U,
              className: F,
              onClick: te,
              "aria-label": Ce,
              style: { width: J && J >= 1 && J < 100 ? `${J}%` : void 0 },
              children: [
                (0, t.jsx)(u, { rgVideoSources: i.rgVideoSources }),
                (0, t.jsx)(E, { rgVideoTracks: i.rgVideoTracks }),
              ],
            });
          }),
          x = y.createContext(void 0);
        function L(C) {
          const { children: f, strOrigin: U } = C;
          return jsx(x.Provider, { value: U, children: f });
        }
        function s() {
          return y.useContext(x) || (0, r.xv)();
        }
        function c(C, f) {
          if (C)
            try {
              const U = new URL(C);
              return (
                (U.search = (U.search ? U.search + "&" : "?") + "origin=" + f),
                U.toString()
              );
            } catch {
              return C;
            }
        }
        function u(C) {
          const { rgVideoSources: f } = C,
            U = s();
          return f
            .filter((i) => !!i.sURL)
            .map((i) =>
              (0, t.jsx)(
                "source",
                { src: c(i.sURL, U), type: i.sFormat },
                i.sURL,
              ),
            );
        }
        function E(C) {
          const { rgVideoTracks: f } = C;
          return f
            ? f.map((U, i) => (0, t.jsx)(w, { track: U, rgVideoTracks: f }, i))
            : null;
        }
        function w(C) {
          const { track: f, rgVideoTracks: U } = C,
            i = s();
          let a = f.eLanguage;
          if (l.TS.EREALM == I.TU.k_ESteamRealmChina)
            if (j.A0.IsELanguageValidInRealm(a, I.TU.k_ESteamRealmChina))
              a = j.A0.GetELanguageFallback(a);
            else if (a === m.NFp) {
              if (U.find((R) => j.A0.GetELanguageFallback(R.eLanguage) === a))
                return null;
            } else return null;
          else if (!j.A0.IsELanguageValidInRealm(a, I.TU.k_ESteamRealmGlobal))
            return null;
          return (0, t.jsx)("track", {
            src: c(f.sURL, i),
            kind: f.sKind,
            default: f.bDefault,
            srcLang: (0, m.wwZ)(a),
            label: (0, j.uD)(a),
          });
        }
      },
      75975: (Q, K, n) => {
        "use strict";
        n.d(K, { nl: () => i, rf: () => U });
        var t = n(7850),
          y = n(36118),
          m = n(56718),
          I = n(3166);
        function j() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Settings, {})
            : jsx(SVG.Settings, {});
        }
        function T(a) {
          var R;
          const V = (R = a.filled) != null ? R : !0;
          return useInGamepadUI()
            ? V
              ? jsx(GamepadSVG.Star, {})
              : jsx(GamepadSVG.EmptyStar, {})
            : jsx(SVG.Star, {});
        }
        function l(a) {
          var R;
          const V = (R = a.filled) != null ? R : !0;
          return useInGamepadUI()
            ? V
              ? jsx(GamepadSVG.Heart, {})
              : jsx(GamepadSVG.HeartEmpty, {})
            : jsx(SVG.Heart, {});
        }
        function r() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.ControllerStatus, {})
            : jsx(SVG.BigPicture, {});
        }
        function _(a) {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Checkmark, { ...a })
            : jsx(SVG.Check, { ...a });
        }
        function g() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Carat, { direction: "down" })
            : jsx(SVG.FlatArrow, { angle: 180 });
        }
        function b() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Information, {})
            : jsx(SVG.Information, {});
        }
        function M(a) {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Lock, {})
            : jsx(SVG.Lock, {});
        }
        function S() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Download, {})
            : jsx(SVG.Download, {});
        }
        function v() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Play, {})
            : jsx(SVG.Play, {});
        }
        function A(a) {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Achievement, {})
            : jsx(SVG.AwardIcon, {});
        }
        function G(a) {
          return useInGamepadUI()
            ? jsx(GamepadSVG.ThumbsUp, {})
            : jsx(SVG.ThumbsUpUserNews, { className: a.className });
        }
        function D(a) {
          return useInGamepadUI()
            ? jsx(GamepadSVG.ThumbsDown, {})
            : jsx(SVG.ThumbsUpUserNews, { className: a.className });
        }
        function B(a) {
          return useInGamepadUI()
            ? jsx(GamepadSVG.CommentThread, { className: a.className })
            : jsx(SVG.CommentThread, { className: a.className });
        }
        function x() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Pause, {})
            : jsx(SVG.Pause, {});
        }
        function L() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Reload, {})
            : jsx(SVG.Reload, {});
        }
        function s() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Update, {})
            : jsx(SVG.Update, {});
        }
        function c() {
          return jsx(GamepadSVG.Globe, {});
        }
        function u() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Close, {})
            : jsx(SVG.X_Line, {});
        }
        function E() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Trash, {})
            : jsx(SVG.Trash, {});
        }
        function w() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Dynamic, {})
            : jsx(SVG.DynamicCollection, {});
        }
        function C() {
          return jsx(GamepadSVG.Add, {});
        }
        function f() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Edit, {})
            : jsx(SVG.Edit, {});
        }
        function U() {
          return (0, t.jsx)(y.rfv, {});
        }
        function i() {
          return (0, I.Qn)() ? (0, t.jsx)(m.nl, {}) : (0, t.jsx)(y.jZW, {});
        }
      },
      13465: (Q, K, n) => {
        "use strict";
        n.d(K, { c: () => m });
        var t = n(7850),
          y = n(90626);
        function m(I) {
          const {
              rgSources: j,
              onIncrementalError: T,
              onError: l,
              strAltText: r,
              ref: _,
              ...g
            } = I,
            b = y.useRef(null),
            [M, S] = y.useState(0),
            [v, A] = y.useState(0);
          y.useImperativeHandle(
            _,
            () => ({ imgRef: b, nSourceIndex: M, nSourceLength: j.length }),
            [b, M, j],
          );
          const G = y.useMemo(() => JSON.stringify(j), [j]);
          y.useEffect(() => {
            S(0), A((x) => x + 1);
          }, [G]);
          const D = y.useMemo(() => {
              let x = "";
              return (
                j && j.length > M && (x = j[M]),
                x ||
                  (console.warn(
                    "MultiSourceImage created with no image src",
                    I,
                    M,
                  ),
                  (x =
                    "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=")),
                x
              );
            }, [j, M, I]),
            B = y.useCallback(
              (x) => {
                T == null || T(x, j[M], M);
                const L = M + 1;
                L >= j.length && l && l(x), L < j.length && S(L);
              },
              [M, l, T, j],
            );
          return (0, t.jsx)(
            "img",
            { ref: b, ...g, src: D, onError: B, alt: r },
            v,
          );
        }
      },
      32608: (Q, K, n) => {
        "use strict";
        n.d(K, { N1: () => w, VC: () => s, fm: () => U, gZ: () => C });
        var t = n(7850),
          y = n(90626),
          m = n(41635),
          I = n(54963),
          j = n(36707),
          T = n(85599),
          l = n(1123),
          r = n(18210),
          _ = n(37589),
          g = n(18938),
          b = n(2259),
          M = Object.defineProperty,
          S = Object.getOwnPropertyDescriptor,
          v = (i, a, R) =>
            a in i
              ? M(i, a, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: R,
                })
              : (i[a] = R),
          A = (i, a, R, V) => {
            for (
              var z = V > 1 ? void 0 : V ? S(a, R) : a, F = i.length - 1, J;
              F >= 0;
              F--
            )
              (J = i[F]) && (z = (V ? J(a, R, z) : J(z)) || z);
            return V && z && M(a, R, z), z;
          },
          G = (i, a, R) => v(i, typeof a != "symbol" ? a + "" : a, R),
          D = ((i) => (
            (i[(i.NotLoaded = 0)] = "NotLoaded"),
            (i[(i.Loading = 1)] = "Loading"),
            (i[(i.Loaded = 2)] = "Loaded"),
            i
          ))(D || {});
        let B = 0,
          x = [];
        function L(i) {
          var a;
          if (B == 2) {
            i && i();
            return;
          }
          if (B == 0) {
            let R = document.createElement("script");
            R.src = "https://www.youtube.com/iframe_api";
            let V = document.getElementsByTagName("script")[0];
            (a = V.parentNode) == null || a.insertBefore(R, V),
              (window.onYouTubeIframeAPIReady = u);
          }
          i && (x.includes(i) || x.push(i));
        }
        function s(i = !0) {
          const a = (0, l.Rp)("youtube");
          (0, y.useEffect)(() => {
            a && i && L();
          }, [a, i]);
        }
        function c(i) {
          m.x9(x, i);
        }
        function u() {
          B = 2;
          for (let i of x) i();
          x = [];
        }
        const E = class At extends y.Component {
          constructor(a) {
            super(a),
              G(this, "m_strPlayerID", ""),
              G(this, "m_player", null),
              G(this, "m_playerContainer", null),
              G(this, "m_bPlayerReady", !1),
              (this.m_strPlayerID = "YoutubePlayer_" + At.s_nPlayerIndex++),
              (this.state = { bYoutubeLoaded: !1 });
          }
          componentWillUnmount() {
            this.DestroyPlayer(), c(this.OnYoutubeScriptsReady);
          }
          shouldComponentUpdate(a, R) {
            if (!this.m_player) return !1;
            const V = this.props;
            return V.autoplay != a.autoplay ||
              V.controls != a.controls ||
              V.showInfo != a.showInfo ||
              V.video != a.video
              ? (this.CreatePlayer(a), !1)
              : ((V.width != a.width || V.height != a.height) &&
                  this.m_bPlayerReady &&
                  a.width &&
                  a.height &&
                  this.m_player.setSize(a.width, a.height),
                V.forcePause != a.forcePause);
          }
          componentDidUpdate(a) {
            var R, V;
            a.forcePause != this.props.forcePause &&
              (this.props.forcePause
                ? (R = this.m_player) == null || R.pauseVideo()
                : (V = this.m_player) == null || V.playVideo());
          }
          DestroyPlayer() {
            if (this.m_player)
              try {
                this.m_player.stopVideo && this.m_player.stopVideo(),
                  this.m_player.destroy && this.m_player.destroy();
              } catch {
              } finally {
                this.m_player = null;
              }
          }
          BindPlayerContainer(a) {
            this.m_playerContainer != a &&
              ((this.m_playerContainer = a),
              this.DestroyPlayer(),
              this.m_playerContainer && L(this.OnYoutubeScriptsReady));
          }
          OnYoutubeScriptsReady() {
            this.CreatePlayer(this.props);
          }
          CreatePlayer(a) {
            if ((this.DestroyPlayer(), !this.m_playerContainer)) return;
            const R = a.autoplay === !1 ? 0 : 1,
              V = a.showInfo === !0 ? 1 : 0,
              z = a.controls === !0 ? 1 : 0,
              F = a.showFullscreenBtn === !0 ? 1 : 0,
              J = a.playsInline === !0 ? 1 : 0;
            let te = {
                width: a.width !== void 0 ? String(a.width) : void 0,
                height: a.height !== void 0 ? String(a.height) : void 0,
                videoId: a.video,
                host: "https://www.youtube-nocookie.com",
                playerVars: {
                  autoplay: R,
                  showinfo: V,
                  autohide: 1,
                  fs: F,
                  modestbranding: 1,
                  rel: 0,
                  playsinline: J,
                  iv_load_policy: 3,
                  controls: z,
                  start: a.startSeconds,
                },
                events: {
                  onReady: this.OnPlayerReady,
                  onStateChange: this.OnPlayerStateChange,
                  onError: this.OnError,
                },
              },
              Ce = this.m_playerContainer.firstElementChild;
            (this.m_bPlayerReady = !1), (this.m_player = new YT.Player(Ce, te));
          }
          OnPlayerReady(a) {
            var R, V;
            if (
              ((this.m_bPlayerReady = !0),
              this.props.onVideoInfoChanged && this.m_player)
            ) {
              let z = this.m_player.getVideoData(),
                F = { strAuthor: "", strTitle: "", strVideoID: "" };
              z.author && (F.strAuthor = z.author),
                z.title && (F.strTitle = z.title),
                z.video_id && (F.strVideoID = z.video_id),
                this.props.onVideoInfoChanged(F);
            }
            this.props.width &&
              this.props.height &&
              ((R = this.m_player) == null ||
                R.setSize(this.props.width, this.props.height)),
              this.props.autoplay &&
                ((V = this.m_player) == null || V.playVideo()),
              this.props.onPlayerReady && this.props.onPlayerReady();
          }
          OnPlayerStateChange(a) {
            switch (a.data) {
              case YT.PlayerState.UNSTARTED:
                break;
              case YT.PlayerState.BUFFERING:
                this.props.onBuffering && this.props.onBuffering();
                break;
              case YT.PlayerState.PLAYING:
                this.props.onPlaying && this.props.onPlaying();
                break;
              case YT.PlayerState.PAUSED:
                this.props.onPaused && this.props.onPaused();
                break;
              case YT.PlayerState.ENDED:
                this.props.onMovieEnd && this.props.onMovieEnd();
                break;
            }
          }
          OnError(a) {
            console.log("Youtube: Playback failed", a),
              this.props.onError && this.props.onError(a);
          }
          OnPlayerLeftView() {
            this.props.autopause &&
              this.m_player &&
              this.m_bPlayerReady &&
              this.m_player.pauseVideo();
          }
          PlayVideo(a) {
            this.m_player &&
              this.m_bPlayerReady &&
              (a && this.m_player.seekTo(0, !0), this.m_player.playVideo());
          }
          render() {
            return (0, t.jsx)(C, {
              video: this.props.video,
              children: (0, t.jsx)(
                _.j,
                {
                  onLeave: this.props.autopause
                    ? this.OnPlayerLeftView
                    : void 0,
                  ref: this.BindPlayerContainer,
                  className: (0, j.A)("YoutubePlayer", this.props.classnames),
                  children: (0, t.jsx)(T.t, {
                    className: "YoutubePlayerThrobber",
                  }),
                },
                this.m_strPlayerID,
              ),
            });
          }
        };
        G(E, "s_nPlayerIndex", 0),
          A([I.oI], E.prototype, "BindPlayerContainer", 1),
          A([I.oI], E.prototype, "OnYoutubeScriptsReady", 1),
          A([I.oI], E.prototype, "CreatePlayer", 1),
          A([I.oI], E.prototype, "OnPlayerReady", 1),
          A([I.oI], E.prototype, "OnPlayerStateChange", 1),
          A([I.oI], E.prototype, "OnError", 1),
          A([I.oI], E.prototype, "OnPlayerLeftView", 1),
          A([I.oI], E.prototype, "PlayVideo", 1);
        let w = E;
        function C(i) {
          const { video: a, children: R } = i;
          return (0, l.Rp)("youtube")
            ? R
            : (0, t.jsx)("a", {
                href: `https://www.youtube.com/watch?v=${a}`,
                children: (0, r.we)("#EventCalendar_WatchYouTubeVideo"),
              });
        }
        function f(i) {
          const a = new URLSearchParams({
            autoplay: i.autoplay ? "1" : "0",
            controls: i.controls ? "1" : "0",
            fs: i.showFullscreenBtn ? "1" : "0",
            playsinline: i.playsInline ? "1" : "0",
            rel: "0",
            iv_load_policy: "3",
            modestbranding: "1",
            enablejsapi: "1",
          });
          return (
            i.startSeconds && a.set("start", String(i.startSeconds)),
            `https://www.youtube-nocookie.com/embed/${encodeURIComponent(i.video)}?${a.toString()}`
          );
        }
        function U(i) {
          const { video: a, autopause: R, className: V } = i,
            z = y.useRef(null),
            F = y.useRef(null),
            J = y.useCallback(() => {
              var ne;
              return (ne = z.current) == null ? void 0 : ne.pauseVideo();
            }, []),
            te = (0, b.OO)({ onLeave: R ? J : void 0 }),
            Ce = (0, g.Ue)(F, te);
          return (
            y.useEffect(() => {
              const ne = () => {
                F.current && (z.current = new YT.Player(F.current, {}));
              };
              return (
                R && L(ne),
                () => {
                  c(ne), (z.current = null);
                }
              );
            }, [R]),
            (0, t.jsx)("iframe", {
              ref: Ce,
              className: V,
              src: f(i),
              title: a,
              allow: "autoplay; encrypted-media; picture-in-picture; web-share",
              allowFullScreen: !0,
              frameBorder: 0,
            })
          );
        }
      },
      47689: (Q, K, n) => {
        "use strict";
        n.d(K, { m: () => I });
        var t = n(41735),
          y = n.n(t),
          m = n(90626);
        function I(j) {
          const T = m.useRef(y().CancelToken.source());
          return (
            m.useEffect(() => {
              const l = T.current;
              return () => l.cancel(j ? `${j}: unmounting` : "unmounting");
            }, [j]),
            T.current
          );
        }
      },
      19730: (Q, K, n) => {
        "use strict";
        n.d(K, { Dq: () => j, dm: () => I });
        var t = n(84346),
          y = n(39905);
        function m(l, r) {
          const _ = r.bUseBinary1K ? 1024 : 1e3,
            g = _ * _,
            b = g * _,
            M = b * _;
          return l > M
            ? { nNum: l / M, strPrefix: "Tera" }
            : l > b
              ? { nNum: l / b, strPrefix: "Giga" }
              : l > g
                ? { nNum: l / g, strPrefix: "Mega" }
                : l > _
                  ? { nNum: l / _, strPrefix: "Kilo" }
                  : { nNum: l, strPrefix: "" };
        }
        function I(l, r, _, g) {
          let b = r;
          typeof b == "number"
            ? (b = {
                nDigitsAfterDecimal: r,
                bUseBinary1K: _ || _ === void 0,
                bValueIsInBytes: !g,
                bValueIsRate: g,
                nMinimumDigitsAfterDecimal: 0,
              })
            : (b = {
                nDigitsAfterDecimal: 2,
                bUseBinary1K: !0,
                bValueIsInBytes: !0,
                bValueIsRate: !1,
                nMinimumDigitsAfterDecimal: 0,
                ...b,
              });
          const { nNum: M, strPrefix: S } = m(l, b),
            v = `#${S}${b.bValueIsInBytes ? "bytes" : "bits"}${b.bValueIsRate ? "_PerSecond" : ""}`;
          return y.Z.Localize(
            v,
            M.toLocaleString((0, t.J)(), {
              minimumFractionDigits: b.nMinimumDigitsAfterDecimal,
              maximumFractionDigits: b.nDigitsAfterDecimal,
            }),
          );
        }
        function j(l, r = 0) {
          let _;
          return (
            r && (_ = { maximumFractionDigits: r }),
            l ? l.toLocaleString((0, t.J)(), _) : "" + l
          );
        }
        function T(l) {
          return l > 1e9
            ? Math.trunc(l / 1e9).toString() + "B"
            : l > 1e6
              ? Math.trunc(l / 1e6).toString() + "M"
              : l > 1e3
                ? Math.trunc(l / 1e3).toString() + "K"
                : l.toString();
        }
      },
      33645: (Q) => {
        Q.exports = {
          Bold: "_3cln317VYhwhE1fSeMCG48",
          Italic: "_3TPGDj4kc0QGKvO8FJmGz8",
          Paragraph: "_3lnqGBzYap-Z2T81XBiBUU",
          TemplateMediaTitle: "_DE_6XhnSqABczbJ55rNJ",
          Question: "_2Hj1tfDjpLvBVTHTqAVcYB",
          Answer: "syKgzmlrcUIJHIBfWsn4h",
          Header1: "_2LYsFAwy8wdRJQTNJOUcsT",
          Header2: "_6-VR2WCBCDupCcUN5INQM",
          Header3: "_1sGnlGwCeaGUp63h4Lx-pU",
          Header4: "_3VHY5vmO07MFpoOgTB9eOi",
          Header5: "_1Vk-9-C_y-lBA5ucPl6t8X",
          CenterSpan: "zCnp-VELUMybbfxOD-ze9",
          SmallText: "WBzrd438Bd8Z3J-j_iglW",
          Underline: "GrhFWtBdrSZP611s1UqqT",
          Strike: "_3pK7sh9FYdigMXxcUVI4DY",
          Spoiler: "_3kRr4bh8twnlt_7wcEFZr3",
          Revealed: "_3g1-8c9NBcNDwW4-6x1pM6",
          SpoilerText: "_3r66KOH_Vckmfps3XUOVrY",
          DisabledMouseEvents: "_1O62-3Y03GsnA0709QyJ_O",
          BlockQuote: "_3MQ0Cuf_h-nZ81xIubg8rh",
          QuoteAuthor: "_1MzmaZcQPMRfrTHs3k0fIZ",
          PullQuote: "_2kA0eAmv8ifh0zphoq4ntM",
          Code: "_2ODaX8lO7DKLKke76c2Wya",
          CodeBlock: "_1I3OP84ayrCIMuBrCrkosi",
          List: "_3Y-LRoi5aeZ9-3ujWjXuG3",
          OrderedList: "DojPxwyYpx3hwuPIaJPCq",
          ListItem: "_1iXxYKOlzzXiVr02E7n2Fe",
          HR: "-xPK0REpludHjRG8xQfih",
          Table: "_2CAsiFd9UHbUOqzd0e7ioe",
          NoBorder: "_1rO4D9vLxJRWz9sW4-ahSY",
          TableRow: "_3FJk0y6E6I8nSYfCIqGP8",
          TableCell: "_3rLIt0O8F7iG6B2RmC3cYa",
          EqualCells: "_1CtoyG6UPAlYp7PCGLXx8L",
          ExpandSectionBlock: "_2cmZMzZlRrszDBF97Di0cD",
          ExpandSectionHeader: "uAvfe31kBh5TZrse069d1",
          EmbedArrow: "_3tVf4GSoWxEOZrxL_PQ4iA",
          ExpandSectionBody: "_33CTl_a7XYxFIng-fm4A5K",
          ExpandSection_WithTitle: "_1dfVJUq9KmDOuhyOZ7lcXv",
          LinkButton: "_3TN0uESBGJ-kUDPWWX2YWz",
          Image: "_3K0NuxYUYncdQ-cNK7udMn",
          Image_Inline: "XEMe7ReBSARw5XHcLR6kF",
          PreservedUnsupportedTag: "_3YMzBRWJTOo7eai1uFGV7i",
          Tag: "_3SEDw4GZynd3ZmTQWlyOcS",
          CalendarEventContainer: "S-ElBHomDkV0L3K4XChxt",
          CalendarEventLink: "_106tp5gLWBvoekGEC8HXQ",
        };
      },
      11748: (Q) => {
        Q.exports = {
          DynamicLinkBox: "_3OFDUxRty2ooEGGBg8vLNM",
          DynamicLink_Preview: "_4x92ciMecfHsd6LXEp3zX",
          DynamicLink_Author: "_2CrHQnyBFUGqFf-6TbIsUA",
          DynamicLink_Description: "_1iv64lWG6UxhSX400UsU1S",
          DynamicLink_YouTubeEmbed: "_3Jd9PKMuBGuSbDBCsV03Oo",
          DynamicLink_StoreWidget: "uvn7ESAm1Jwm-SOwZmBWO",
          DynamicLink_Content: "_29vvBvtM17Ec_19L9VJZdk",
          DynamicLink_Name: "_25KAQjQwrv2EL8tnlLeTB7",
          DynamicLink_YoutubeViews: "_3ZgvwxMMqbe_8wVfRiQ9kq",
          Dynamiclink_Content: "_3UUlLNsS9oZt2zNHM5T76z",
          DynamicLink_URL: "_9135FDWNKXjIolFAo7Gub",
          DynamicLink_AuthorName: "_6R7Q24Jlkhs_t0fYUHxQx",
          DynamicLink_Date: "_15wEuEj-SyCZ4J4hJqtmgD",
        };
      },
      19418: (Q) => {
        Q.exports = {
          "duration-app-launch": "800ms",
          Picker: "tid_OE5NJWCCVJQP1PfRc",
          Tabs: "_1yVkTX9Mo_7qb2sxWhM0Cr",
          Tab: "_2CJ0LpiSgVs2JuTlwbzBM",
          Focus: "_1xH5si_KorJpS4ST2Geksh",
          TabContent: "_1mROo5bpUJSg8D8ILx7qpw",
          Active: "_1ddEQAfz6GuVRSEqk-d0r",
          Content: "dUQIH8Qg80N6kjB8UQO0P",
          ItemList: "_2OWGRbhpXNcuR3oih9IGrX",
          Item: "_1SFqyFzFrpPOEAKCrq2kKZ",
          SectionedPageTitle: "ZmsElITvVzU-7a2HXKBZI",
          SectionTitle: "_3WuFl419BivPeLqeVIC939",
          FilterInputContainer: "EuFePPYFGrcf99uLXmBYN",
          FilterInput: "_2l4z-U60lABvd9XWArGjAf",
          AddonPickerMessage: "_2wUk7QR9TZiiKB4bX_9EgD",
          BackgroundAnimation: "NB2T8xbO5KSdw1jQWC0aq",
          "ItemFocusAnim-darkerGrey-nocolor": "_1tzknOYTl338bweAg8VM66",
          "ItemFocusAnim-darkerGrey": "_321Bw1yIABWsLJup9W__Gb",
          "ItemFocusAnim-darkGreySettings": "BSoZ5uHW-lcSEjyeNZol4",
          "ItemFocusAnim-darkGrey": "_3Xhw1BWpHpkagZqxZOv8kb",
          "ItemFocusAnim-grey": "_2OnCF3hKjr89wU_tfFaWX2",
          "ItemFocusAnim-translucent-white-10": "_2uQtLVYFAkVIQ8Mzm6C5K3",
          "ItemFocusAnim-translucent-white-20": "_2vYgLWggR0AEuxE9DPEEk2",
          "ItemFocusAnimBorder-darkGrey": "PgPnyLUdsSEfTVdlxX2a9",
          "ItemFocusAnim-green": "_26b32AeDG8ENv_LcSS6SPE",
          focusAnimation: "NrCY5qgGbXyh_LeVWegvW",
          hoverAnimation: "ECWcgkTWpWeZLs6-rszlL",
        };
      },
      73662: (Q) => {
        Q.exports = {
          PreviewYouTubeVideo: "rUASsQgg0rvqoACIDRygZ",
          sizeThumb: "_3dy3KtMG10uNhU2HRfwx3A",
          sizeFull: "_14CxWorQ1RNkZvdhXYWAh-",
          PlaceholderImg: "LILNdsmSgG52f0MP1f2O3",
          floatLeft: "_2OWxr5tZIjB4gTfA3vE2Gc",
          floatRight: "om0Rs75g2ScLGnDWC76IQ",
        };
      },
      90024: (Q) => {
        Q.exports = {
          narrowWidth: "500px",
          chatEntryControls: "_3Ule3rolhZJiBN4yNNtk1s",
          chatTextarea: "_113iuw_HlE_qSgt9cGWCSv",
          chatEntryActionsGroup: "_2WfNoLBdfKwyutA6ho4aSH",
          chatEntryActionsContainer: "W0OhkJtz8zMUW8Mhu0BMO",
          minHeightZero: "_2zeehYTQ2oNY7TvjqGC_gL",
          chatSubmitButton: "RVIs84dAE6wHcjH9tkinc",
          EmbedButton: "_3zOBeq5W4cNK3lRz_7aroW",
          EmoticonPickerButton: "Aupswi7-c-w3XwNO5cp2i",
          disabled: "jaQN2IyN4P8LZXJ6P11qy",
          Inactive: "_3G-I9qj7vqOe6SOFG27ohD",
          AudioLines: "IWabakUFeIH_d5rhBZ6dG",
          Active: "_37tPtXtV-sv9XgDHjS2cnj",
        };
      },
      42060: (Q) => {
        Q.exports = {
          NewEmoticonIndicator: "_5BtHMjT9usALaSWHGugdV",
          NewEmoticonCircle: "u5Kx6dkUppvb-1qV4IIuy",
          EmoticonSelector: "_21dGPKyxoQJmk8T757A5tl",
          emoticon: "_1ZQW1wV5cNj3sDpibfbUqs",
          large: "_20l1z3ShpHQ9njRDYgy1I5",
          EmoticonSelector_Emoticons: "_1zMG_TAAO7uJ9DZvsPLfay",
          EmoticonSelector_Separator: "_2ETbIGwtl6SLfkb48DDgvG",
          EmoticonSelector_SeparatorBackground: "_3vIdbqkcpvxxyyRioKoQkz",
          EmoticonSelector_Controls: "_2ncH4xow85UXkBM0hcrY8l",
          EmoticonSelector_Item: "iSEjD9v1iZNJNbGHtDLZx",
          EmoticonSelector_Item_New: "_1C2S6Gne45ErVlr3yX0YuG",
          EffectHeading: "_1G4cTIWNmmp8hn-0UODGqo",
          StickerHeading: "_2o2L-YGgH5cNuwJW9nU9dm",
          GetFestive: "EOLiaNBZK-eUBTeiD-P4c",
          TopDivider: "xf7hAWPD4WwXxsyXYxFFo",
          BottomDivider: "_1gjpUnY8RyS8HpizGQvyFI",
          StickerButton: "_2fYj8pHe3bHHxWj4FucFvj",
          EffectButton: "_22MJpsSm-Ur5FU5WpYQKzn",
          EmoticonHover: "W_hPU2JmhTx3oUqDN9ADo",
          Info: "_29D_0UxbftoceIAKZktndo",
          Name: "_3zUR2KWg7TNWOQx2nDFyoh",
          AppName: "_2JWWOJGZuX70xQcA2QaBg",
          StickerHoverSticker: "_1HdRqbOgpBfEQzQ2py5nq5",
          EffectHoverEffect: "_1GZ-ESK0dV6oJBDhsU3RiH",
          PickerTab: "VrrpBsQE4GFseDy3cTw1Q",
          Clock: "_16xcLj__xBHmc9xDYmADhW",
          EmoticonItem: "P1aWuK_DhstDh-M08okCK",
        };
      },
    },
  ]);
})();
