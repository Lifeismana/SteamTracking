/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [79139],
    {
      7487: (W, j, t) => {
        "use strict";
        t.d(j, { K0: () => M, OJ: () => S, R8: () => i });
        var e = t(71742),
          m = t(90626);
        class i {
          reactNodes = [];
          AppendText(v, O = !1) {
            v.length &&
              (O
                ? this.reactNodes.push(
                    m.createElement(
                      "span",
                      {
                        "data-copytext": "",
                        "data-copystyle": "merge-adjacent",
                        "bbcode-text": v,
                      },
                      v,
                    ),
                  )
                : this.reactNodes.push(v));
          }
          AppendNode(v) {
            this.reactNodes.push(v);
          }
          GetElements() {
            return this.reactNodes;
          }
        }
        class M {
          m_decoratedAccumulator;
          constructor(v) {
            (0, e.wT)(v, "decorated accumulator cannot be null"),
              (this.m_decoratedAccumulator = v);
          }
          AppendText(v, O = !1) {
            this.m_decoratedAccumulator.AppendText(v, O);
          }
          AppendNode(v) {
            this.m_decoratedAccumulator.AppendNode(v);
          }
          GetElements() {
            return this.m_decoratedAccumulator.GetElements();
          }
        }
        class S extends M {
          constructor(v) {
            super(v);
          }
          AppendText(v) {
            let O = v;
            const N = [];
            for (
              let x = O.indexOf(`
`);
              x !== -1;
              x = O.indexOf(`
`)
            )
              N.push(O.substr(0, x)),
                N.push(m.createElement("br")),
                (O = O.substr(x + 1));
            O.length && N.push(O),
              N.forEach((x) => {
                super.AppendNode(x);
              });
          }
        }
      },
      33770: (W, j, t) => {
        "use strict";
        t.d(j, { B: () => y });
        var e = t(99412),
          m = t(90626),
          i = t(7487);
        const M = 0,
          S = 1,
          B = 2,
          v = 3;
        class O {
          m_fnAccumulatorFactory;
          m_dictComponents;
          constructor(d, n) {
            d instanceof Map
              ? (this.m_dictComponents = d)
              : (this.m_dictComponents = new Map(Object.entries(d))),
              (this.m_fnAccumulatorFactory = n);
          }
          Parse(d, n, r = !0) {
            const u = C(d || "", r);
            return this.Parse_BuildElements(u, n);
          }
          Parse_BuildElements(d, n) {
            let r = this.m_fnAccumulatorFactory(void 0);
            const u = [],
              a = () => (u.length < 1 ? void 0 : u[u.length - 1]),
              c = this.m_dictComponents,
              h = (g) => !!(g.tag && c.get(g.tag)?.autocloses);
            let o = !1,
              E = !0;
            const p = (g, F) => {
              let w = F.text.toLowerCase();
              if (g && g.node.tag === w && c.get(g.node.tag)) {
                const U = c.get(g.node.tag),
                  G = {
                    tagname: g.node.tag,
                    args: g.node.args,
                    rawargs: g.node.rawargs,
                  },
                  z = n(U.Constructor, G, ...r.GetElements());
                (r = g.accumulator),
                  Array.isArray(z)
                    ? z.forEach((Z) => r.AppendNode(Z))
                    : r.AppendNode(z),
                  (o = !!U.skipFollowingNewline),
                  (E = g.bWrapTextForCopying);
              } else if (g) {
                const U = g.accumulator;
                U.AppendText("[" + g.node.text + "]", !1),
                  r.GetElements().forEach((G) => U.AppendNode(G)),
                  U.AppendText("[/" + F.text + "]", !1),
                  (r = U),
                  (E = g.bWrapTextForCopying);
              }
            };
            for (
              d.forEach((g, F) => {
                if (g.type == S) {
                  const w = o ? g.text.replace(/^[\t\r ]*\n/g, "") : g.text;
                  r.AppendText(w, E), (o = !1);
                } else if (g.type == B) {
                  const w = c.get(g.tag);
                  if (!w) r.AppendText("[" + g.text + "]", u.length == 0);
                  else {
                    const U = a();
                    if (U !== void 0) {
                      const G = c.get(U.node.tag);
                      G &&
                        G.autocloses &&
                        g.tag === U.node.tag &&
                        p(u.pop(), U.node);
                    }
                    u.push({ accumulator: r, node: g, bWrapTextForCopying: E }),
                      (r = this.m_fnAccumulatorFactory(g)),
                      (o = !!w.skipInternalNewline),
                      (E = w.allowWrapTextForCopying ?? !1);
                  }
                } else if (g.type == v) {
                  let w = g.text.toLowerCase();
                  for (; a() && a().node.tag !== w && h(a().node); ) {
                    const U = u.pop();
                    p(U, U.node);
                  }
                  if (a()?.node.tag == w) {
                    const U = u.pop();
                    p(U, g);
                  } else r.AppendText("[/" + g.text + "]", u.length == 0);
                }
              });
              u.length > 0;
            ) {
              const g = u.pop();
              p(g, g.node);
            }
            return r.GetElements();
          }
        }
        function N(f, d, n = !1) {
          let r = "[" + f;
          d?.[""] && (r += `=${n ? "" + d[""] : x("" + d[""])}`);
          for (const u in d) u !== "" && (r += ` ${T(u)}=${x("" + d[u])}`);
          return (r += "]"), r;
        }
        function x(f) {
          return `"${f.replace(/(\\|"|\])/g, "\\$1")}"`;
        }
        function T(f) {
          return f.replace(/(\\| |\])/g, "\\$1");
        }
        function A(f) {
          return `[/${f}]`;
        }
        function P(f) {
          return f.replace(/(\\|\[)/g, "\\$1");
        }
        function l(f, d, n = M) {
          const { type: r, text: u = "" } = d;
          if (r == B) {
            let a = u.indexOf("=");
            const c = u.indexOf(" ");
            c != -1 && (a == -1 || c < a) && (a = c);
            let h,
              o,
              E = "";
            a > 0
              ? ((h = u.substr(0, a).toLocaleLowerCase()),
                (E = u.substr(a)),
                (o = D(E)))
              : ((o = {}), (h = u.toLocaleLowerCase())),
              f.push({ type: r, text: u, tag: h, args: o, rawargs: E });
          } else r != M && f.push({ type: r, text: u });
          return { type: n, text: "" };
        }
        function L(f) {
          let d = "";
          return (
            f.type == v ? (d = "[/") : f.type == B && (d = "["),
            { type: S, text: d + (f.text ?? "") }
          );
        }
        function C(f, d) {
          const n = [];
          let r = { type: M, text: "" },
            u = !1,
            a = !1,
            c = !1;
          for (let h = 0; h < f.length; h++) {
            const o = f[h];
            switch (r.type) {
              case M:
                o == "["
                  ? ((r.type = B), (a = !0))
                  : ((r.type = S), o == "\\" && d ? (u = !u) : (r.text += o));
                break;
              case B:
              case v:
                if (o == "/" && a) (r.type = v), (r.text = ""), (a = !1);
                else if (o == "[" && !u) (r = l(n, L(r), B)), (a = !0);
                else if (o == "]" && !u) {
                  const E =
                      r.type == B && r.text?.toLocaleLowerCase() == "noparse",
                    p = r.type == v && r.text?.toLocaleLowerCase() == "noparse";
                  a || (c && !p)
                    ? ((r = L(r)), (r.text += o))
                    : E
                      ? (c = !0)
                      : p && (c = !1),
                    (r = l(n, r)),
                    (a = !1);
                } else
                  o == "\\" && d
                    ? ((r.text += o), (u = !u), (a = !1))
                    : ((r.text += o), (u = !1), (a = !1));
                break;
              case S:
                o == "[" && !u
                  ? ((r = l(n, r, B)), (a = !0))
                  : o == "\\" && d
                    ? (u && (r.text += o), (u = !u))
                    : ((r.text += o), (u = !1));
                break;
            }
          }
          return (
            r.type != M &&
              (r.type == B || r.type == v
                ? n.push(L(r))
                : n.push({ type: r.type, text: r.text ?? "" })),
            n
          );
        }
        function D(f) {
          if (!f || f.length < 1) return {};
          const d = {};
          let n = "",
            r = "",
            u;
          ((o) => {
            (o[(o.PRE_NAME = 0)] = "PRE_NAME"),
              (o[(o.IN_NAME = 1)] = "IN_NAME"),
              (o[(o.POST_NAME = 2)] = "POST_NAME"),
              (o[(o.IN_VALUE = 3)] = "IN_VALUE"),
              (o[(o.IN_QUOTED_VALUE = 4)] = "IN_QUOTED_VALUE");
          })(u || (u = {}));
          let a = 0,
            c = 0;
          f[0] == "=" && (a = 2);
          let h = !1;
          for (c++; c < f.length; c++) {
            const o = f[c];
            let E = !0,
              p = !1;
            switch (a) {
              case 0:
                if (o == "=") return {};
                if (o == " ") continue;
                a = 1;
                break;
              case 1:
                (o == "=" || o == " ") &&
                  !h &&
                  (o == " " ? ((a = 0), (p = !0)) : (a = 2), (E = !1));
                break;
              case 2:
                o == " "
                  ? ((a = 0), (E = !1), (p = !0))
                  : o == '"'
                    ? ((a = 4), (E = !1))
                    : (a = 3);
                break;
              case 3:
              case 4:
                ((o == " " && a != 4 && !h) || (o == '"' && a == 4 && !h)) &&
                  ((a = 0), (E = !1), (p = !0));
                break;
            }
            if (E)
              if (o == "\\" && !h) h = !0;
              else if (((h = !1), a == 1)) n += o;
              else if (a == 3 || a == 4) r += o;
              else
                throw new Error(
                  "Not expecting to accumulate buffer in state " + a,
                );
            p && ((d[n] = r), (n = ""), (r = ""));
          }
          return a != 0 && (d[n] = r), d;
        }
        class y extends O {
          m_renderingLanguage;
          constructor(d, n, r) {
            super(d, n ?? (() => new i.R8())),
              (this.m_renderingLanguage =
                typeof r == "string" ? (0, e.sfN)(r) : r);
          }
          UpdateOverrideLanguage(d) {
            this.m_renderingLanguage = d;
          }
          ParseBBCode(d, n, r = !0) {
            let u = 0;
            const a = this.Parse(
              d,
              (c, h, ...o) =>
                m.createElement(
                  c,
                  {
                    ...h,
                    context: n,
                    language: this.m_renderingLanguage,
                    key: `bbnode_${u++}`,
                  },
                  ...o,
                ),
              r,
            );
            return a.length > 1
              ? m.createElement(m.Fragment, null, ...a)
              : a.length == 1
                ? a[0]
                : null;
          }
        }
      },
      72080: (W, j, t) => {
        "use strict";
        t.d(j, {
          AT: () => x,
          J7: () => B,
          KN: () => S,
          MG: () => T,
          Yd: () => A,
          bv: () => v,
          gg: () => M,
          mZ: () => N,
          s4: () => P,
          zN: () => O,
        });
        var e = t(7850),
          m = t(11748),
          i = t.n(m);
        const M = {
          Box: m.DynamicLinkBox,
          Preview: m.DynamicLink_Preview,
          Type: m.DynamicLink_Type,
        };
        function S(l) {
          return (0, e.jsx)("img", {
            className: m.DynamicLink_Preview,
            src: l.strURL,
            alt: l.strAlt ?? "",
          });
        }
        function B(l) {
          return (0, e.jsx)("div", {
            className: m.DynamicLink_Content,
            children: l.children,
          });
        }
        function v(l) {
          return (0, e.jsx)("div", {
            className: m.DynamicLink_Name,
            children: l.children,
          });
        }
        function O(l) {
          return (0, e.jsx)("div", {
            className: m.DynamicLink_Author,
            children: l.children,
          });
        }
        function N(l) {
          return (0, e.jsx)("span", {
            className: m.DynamicLink_AuthorName,
            children: l.children,
          });
        }
        function x(l) {
          return (0, e.jsx)("div", {
            className: m.DynamicLink_Description,
            children: l.children,
          });
        }
        function T(l) {
          return (0, e.jsx)("span", {
            className: m.DynamicLink_Date,
            children: l.children,
          });
        }
        function A(l) {
          return (0, e.jsx)("div", {
            className: m.DynamicLink_YoutubeViews,
            children: l.children,
          });
        }
        function P(l) {
          return (0, e.jsx)("div", {
            className: m.Dynamiclink_Content,
            children: l.children,
          });
        }
      },
      70187: (W, j, t) => {
        "use strict";
        t.d(j, {
          B8: () => H,
          It: () => E,
          Pk: () => te,
          Sz: () => F,
          Tu: () => r,
          W4: () => f,
          ZS: () => w,
          Zb: () => g,
          _J: () => ne,
          ck: () => de,
          d$: () => J,
          j$: () => n,
        });
        var e = t(7850),
          m = t(33645),
          i = t.n(m),
          M = t(24660),
          S = t(19298),
          B = t(71944),
          v = t(90626),
          O = t(43434),
          N = t(83482),
          x = t(1917),
          T = t(25269),
          A = t(36118),
          P = t(71421),
          l = t(36707),
          L = t(18210),
          C = t(53113),
          D = t(98609),
          y = t(68941);
        const f = new Map([
            ["b", { Constructor: u, autocloses: !1 }],
            ["i", { Constructor: a, autocloses: !1 }],
            [
              "h1",
              { Constructor: g, autocloses: !1, skipFollowingNewline: !0 },
            ],
            [
              "h2",
              { Constructor: F, autocloses: !1, skipFollowingNewline: !0 },
            ],
            [
              "h3",
              { Constructor: w, autocloses: !1, skipFollowingNewline: !0 },
            ],
            [
              "h4",
              { Constructor: U, autocloses: !1, skipFollowingNewline: !0 },
            ],
            [
              "h5",
              { Constructor: G, autocloses: !1, skipFollowingNewline: !0 },
            ],
            ["center", { Constructor: z, autocloses: !1 }],
            [
              "smalltext",
              { Constructor: Z, autocloses: !1, skipFollowingNewline: !0 },
            ],
            ["u", { Constructor: c, autocloses: !1 }],
            ["strike", { Constructor: h, autocloses: !1 }],
            ["spoiler", { Constructor: X, autocloses: !1 }],
            ["hr", { Constructor: oe, autocloses: !1 }],
            ["noparse", { Constructor: Ce, autocloses: !1 }],
            ["url", { Constructor: q, autocloses: !1 }],
            ["quote", { Constructor: te, autocloses: !1 }],
            ["pullquote", { Constructor: $, autocloses: !1 }],
            ["code", { Constructor: V, autocloses: !1 }],
            ["c", { Constructor: Q, autocloses: !1 }],
            [
              "list",
              { Constructor: H, autocloses: !1, skipInternalNewline: !0 },
            ],
            [
              "olist",
              { Constructor: ne, autocloses: !1, skipInternalNewline: !0 },
            ],
            ["*", { Constructor: de, autocloses: !0, skipInternalNewline: !0 }],
            [
              "table",
              { Constructor: pe, autocloses: !1, skipInternalNewline: !0 },
            ],
            [
              "tr",
              {
                Constructor: xe,
                autocloses: !1,
                skipInternalNewline: !0,
                skipFollowingNewline: !0,
              },
            ],
            [
              "th",
              {
                Constructor: Pe,
                autocloses: !1,
                skipInternalNewline: !0,
                skipFollowingNewline: !0,
              },
            ],
            [
              "td",
              {
                Constructor: De,
                autocloses: !1,
                skipInternalNewline: !0,
                skipFollowingNewline: !0,
              },
            ],
            [
              "expand",
              {
                Constructor: ye,
                autocloses: !1,
                skipInternalNewline: !0,
                allowWrapTextForCopying: !0,
              },
            ],
            ["calendarevent", { Constructor: Oe, autocloses: !0 }],
            ["doclink", { Constructor: le, autocloses: !1 }],
            ["color", { Constructor: re, autocloses: !1 }],
            ["bgcolor", { Constructor: ae, autocloses: !1 }],
            ["p", { Constructor: o, autocloses: !1, skipFollowingNewline: !0 }],
          ]),
          d = new Map([
            ["looping_media", { Constructor: y.$A, autocloses: !1 }],
            ["video", { Constructor: y.UT, autocloses: !1 }],
            ["youtubeorvideo", { Constructor: x.Eo, autocloses: !1 }],
            ["previewyoutube", { Constructor: x.gH, autocloses: !1 }],
          ]);
        function n(s, _) {
          return _ === void 0 ? s[""] : s[_];
        }
        function r(s, _) {
          return (I) => s({ ...I, className: _ });
        }
        function u(s) {
          return (0, e.jsx)("b", { className: i().Bold, children: s.children });
        }
        function a(s) {
          return (0, e.jsx)("i", {
            className: (0, l.A)(i().Italic, "BB_Italic"),
            children: s.children,
          });
        }
        function c(s) {
          return (0, e.jsx)("u", {
            className: i().Underline,
            children: s.children,
          });
        }
        function h(s) {
          return (0, e.jsx)("s", {
            className: i().Strike,
            children: s.children,
          });
        }
        function o(s) {
          return (0, e.jsxs)("p", {
            className: i().Paragraph,
            children: [s.children, (0, e.jsx)("wbr", {})],
          });
        }
        function E(s) {
          return (0, e.jsxs)("div", {
            className: i().Paragraph,
            role: "paragraph",
            children: [s.children, (0, e.jsx)("wbr", {})],
          });
        }
        function p(s, _, I) {
          let b = n(_.args, "id");
          return (
            b || (b = n(_.args)),
            b &&
              typeof b == "string" &&
              b.length > 0 &&
              b[0] === "#" &&
              (b = b.substring(1)),
            (0, e.jsx)(s, {
              id: b || void 0,
              className: (0, l.A)(I, _.className),
              children: _.children,
            })
          );
        }
        function g(s) {
          return p("h1", s, (0, l.A)(i().Header1, "BB_Header1"));
        }
        function F(s) {
          return p("h2", s, (0, l.A)(i().Header2, "BB_Header2"));
        }
        function w(s) {
          return p("h3", s, (0, l.A)(i().Header3, "BB_Header3"));
        }
        function U(s) {
          return p("h4", s, (0, l.A)(i().Header4, "BB_Header4"));
        }
        function G(s) {
          return p("h5", s, (0, l.A)(i().Header5, "BB_Header5"));
        }
        function z(s) {
          let _ = n(s.args, "id");
          return (
            _ &&
              typeof _ == "string" &&
              _.length > 0 &&
              _[0] === "#" &&
              (_ = _.substring(1)),
            (0, e.jsx)("span", {
              id: _ || void 0,
              className: (0, l.A)(i().CenterSpan, "BB_Center"),
              children: s.children,
            })
          );
        }
        function Z(s) {
          return p("div", s, (0, l.A)(i().SmallText, "BB_SmallText"));
        }
        function X(s) {
          let [_, I] = v.useState(!1),
            b = v.useCallback(() => {
              I(!_);
            }, [_]);
          return (0, e.jsx)(S.Z, {
            className: (0, l.A)(i().Spoiler, _ && i().Revealed),
            focusable: !0,
            onActivate: b,
            onOKActionDescription: (0, L.we)(
              _ ? "#Bbcode_Spoiler_Hide" : "#Bbcode_Spoiler_Show",
            ),
            children: (0, e.jsx)("span", {
              className: i().SpoilerText,
              children: s.children,
            }),
          });
        }
        function oe(s) {
          return (0, e.jsx)("hr", { className: i().HR });
        }
        function re(s) {
          const _ = n(s.args);
          return (0, e.jsx)("span", {
            style: { color: _ },
            children: s.children,
          });
        }
        function ae(s) {
          const _ = n(s.args);
          return (0, e.jsx)("span", {
            style: { backgroundColor: _ },
            children: s.children,
          });
        }
        function q(s) {
          let _ = (0, T.J)(n(s.args));
          if (!_) {
            const K = s.children;
            typeof K == "string" && (0, C.DZ)(K) && (_ = (0, T.J)(K));
          }
          const I = n(s.args, "style") == "button" ? i().LinkButton : void 0,
            b = I && n(s.args, "buttoncolor");
          let R = n(s.args, "id");
          return (
            R &&
              typeof R == "string" &&
              R.length > 0 &&
              R[0] === "#" &&
              (R = R.substring(1)),
            _ === void 0 && !R
              ? s.children || ""
              : _ === void 0 ||
                  (typeof _ == "string" && _.length > 0 && _[0] == "#")
                ? (0, e.jsx)("a", {
                    href: _ ?? null,
                    id: R,
                    children: s.children,
                  })
                : (0, e.jsx)(J, {
                    className: I,
                    href: _,
                    id: R,
                    style: { backgroundColor: b },
                    children: s.children,
                  })
          );
        }
        function le(s) {
          const _ = n(s.args),
            I = n(s.args, "style") == "button" ? i().LinkButton : void 0,
            b = I && n(s.args, "buttoncolor");
          return (0, e.jsx)(J, {
            className: I,
            style: { backgroundColor: b },
            href: `${D.TS.PARTNER_BASE_URL}doc/${_}`,
            children: s.children,
          });
        }
        const J = (s) => {
          const { href: _, ...I } = s;
          let b = (0, N.OZ)(_ ?? ""),
            R;
          (0, O.p)(b)
            ? ((b =
                (D.TS.IN_CLIENT ? "steam://openurl_external/" : "") +
                (0, O.E)(b)),
              (R = "noopener nofollow"))
            : (b = (0, C.NT)(b));
          const K =
            typeof s.children == "string" &&
            s.children.length > 0 &&
            _ &&
            !_.startsWith("steam://")
              ? (0, C.Qz)(_)
              : void 0;
          return (0, e.jsx)(P.Gq, {
            toolTipContent: K,
            direction: "top",
            children: (0, e.jsx)(M.Ii, {
              ...I,
              href: b,
              rel: R,
              children: s.children,
            }),
          });
        };
        function ee(s) {
          return jsx("a", {
            className: styles.DisabledMouseEvents,
            href: n(s.args),
            children: s.children,
          });
        }
        function te(s) {
          const _ = n(s.args, "author");
          return (0, e.jsxs)("blockquote", {
            className: (0, l.A)(i().BlockQuote, s.className),
            children: [
              !!_ &&
                (0, e.jsxs)("div", {
                  className: i().QuoteAuthor,
                  children: [
                    (0, L.we)("#Bbcode_Originally_Posted_By") + " ",
                    " ",
                    (0, e.jsx)("b", { children: _ + ":" }),
                  ],
                }),
              s.children,
            ],
          });
        }
        function $(s) {
          return (0, e.jsx)("div", {
            className: i().PullQuote,
            children: s.children,
          });
        }
        function V(s) {
          return (0, e.jsx)("code", {
            className: i().CodeBlock,
            children: s.children,
          });
        }
        function Q(s) {
          return (0, e.jsx)("code", {
            className: i().Code,
            children: s.children,
          });
        }
        function H(s) {
          return (0, e.jsx)("ul", {
            className: (0, l.A)(i().List, "bullets"),
            children: s.children,
          });
        }
        function ne(s) {
          return (0, e.jsx)("ol", {
            className: i().OrderedList,
            children: s.children,
          });
        }
        function de(s) {
          let _ = n(s.args, "id");
          return (
            _ &&
              typeof _ == "string" &&
              _.length > 0 &&
              _[0] === "#" &&
              (_ = _.substring(1)),
            (0, e.jsx)("li", {
              className: i().ListItem,
              id: _ || void 0,
              children: s.children,
            })
          );
        }
        function Ce(s) {
          return s.children;
        }
        function pe(s) {
          const _ = n(s.args, "noborder"),
            I = n(s.args, "equalcells"),
            b = n(s.args, "colwidth");
          return (0, e.jsxs)("table", {
            className: (0, l.A)(
              i().Table,
              "BB_Table",
              _ && i().NoBorder,
              I && i().EqualCells,
            ),
            children: [
              b &&
                (0, e.jsx)("colgroup", {
                  children: b
                    .split(",")
                    .map((R, K) => (0, e.jsx)(ve, { width: R }, K)),
                }),
              (0, e.jsx)("tbody", { children: s.children }),
            ],
          });
        }
        function ve(s) {
          const { width: _ } = s;
          let I;
          return (
            _ && parseInt(_) > 0 && (I = { width: `${_}px` }),
            (0, e.jsx)("col", { style: I })
          );
        }
        function xe(s) {
          return (0, e.jsx)("tr", {
            className: (0, l.A)(i().TableRow, "BB_TableRow"),
            children: s.children,
          });
        }
        function fe(s, _) {
          const I = n(_.args, "width"),
            b = n(_.args, "colspan"),
            R = n(_.args, "rowspan"),
            K = {};
          return (
            b && parseInt(b) > 1 && (K.colSpan = parseInt(b)),
            R && parseInt(R) > 1 && (K.rowSpan = parseInt(R)),
            (0, e.jsx)(s, {
              className: (0, l.A)(i().TableCell, s == "td" && "BB_TableData"),
              ...K,
              style: I ? { width: I } : void 0,
              children: _.children,
            })
          );
        }
        function Pe(s) {
          return fe("th", s);
        }
        function De(s) {
          return fe("td", s);
        }
        function Te(s, _, I, b) {
          switch (s) {
            case "details":
              return {
                collapsed: "#Bbcode_Expand_Details_Collapsed",
                expanded: "#Bbcode_Expand_Details_Expanded",
                style: i().ExpandSection_Details,
              };
            case "spoiler":
              return {
                collapsed: "#Bbcode_Expand_Spoiler_Collapsed",
                expanded: "#Bbcode_Expand_Spoiler_Expanded",
                style: i().ExpandSection_Spoiler,
              };
            case "title":
              return {
                collapsed: _ || I || "#Bbcode_Expand_ShowMore_Collapsed",
                expanded: _ || b || "#Bbcode_Expand_ShowMore_Expanded",
                style: i().ExpandSection_WithTitle,
              };
            default:
            case "showmore":
              return {
                collapsed: "#Bbcode_Expand_ShowMore_Collapsed",
                expanded: "#Bbcode_Expand_ShowMore_Expanded",
                style: i().ExpandSection_ShowMore,
              };
          }
        }
        function ye(s) {
          const _ = !!n(s.args, "expanded"),
            [I, b] = v.useState(_),
            R = n(s.args, "title"),
            K = n(s.args, "collapsed_str"),
            _e = n(s.args, "expanded_str"),
            Y = Te(n(s.args, "type"), R, K, _e);
          return (0, e.jsxs)("div", {
            className: (0, l.A)({
              [i().ExpandSectionBlock]: !0,
              [Y.style ?? ""]: Y.style != null,
              [i().ExpandSectionExpanded]: I,
              [i().ExpandSectionCollapsed]: !I,
              BBCodeExpanded: I,
              BBCodeCollapsed: !I,
            }),
            children: [
              (0, e.jsxs)("div", {
                className: i().ExpandSectionHeader,
                onClick: () => b(!I),
                children: [
                  (0, L.we)(I ? Y.expanded : Y.collapsed),
                  (0, e.jsx)("div", {
                    className: i().EmbedArrow,
                    children: (0, e.jsx)(A.DK4, { angle: I ? 180 : 0 }),
                  }),
                ],
              }),
              I &&
                (0, e.jsx)("div", {
                  className: i().ExpandSectionBody,
                  children: s.children,
                }),
            ],
          });
        }
        function Oe(s) {
          const _ = n(s.args, "title"),
            I = n(s.args, "start") ?? n(s.args, "datetime"),
            b = n(s.args, "end") ?? n(s.args, "datetime"),
            R = n(s.args, "body") ?? null,
            K = n(s.args, "location") ?? null,
            _e = n(s.args, "id") ?? "",
            Y = new Date(I),
            Le = Y.getUTCFullYear(),
            Me = ("0" + (Y.getUTCMonth() + 1)).slice(-2),
            Be = ("0" + Y.getUTCDate()).slice(-2),
            Ae = ("0" + Y.getUTCHours()).slice(-2),
            Se = ("0" + Y.getUTCMinutes()).slice(-2),
            he = `${Le}${Me}${Be}T${Ae}${Se}00Z`,
            se = new Date(b),
            be = se.getUTCFullYear(),
            Ie = ("0" + (se.getUTCMonth() + 1)).slice(-2),
            Ne = ("0" + se.getUTCDate()).slice(-2),
            je = ("0" + se.getUTCHours()).slice(-2),
            Ue = ("0" + se.getUTCMinutes()).slice(-2),
            Ee = `${be}${Ie}${Ne}T${je}${Ue}00Z`;
          let ie;
          try {
            let k = `BEGIN:VCALENDAR\r
`;
            (k += `VERSION:2.0\r
`),
              (k += `BEGIN:VEVENT\r
`),
              (k += `DTSTART:${he}\r
`),
              (k += `DTEND:${Ee}\r
`),
              (k += `SUMMARY:${_.replace(
                `
`,
                "\\n",
              )}\r
`),
              R &&
                (k += `DESCRIPTION:${R.replace(
                  `
`,
                  "\\n",
                )}\r
`),
              K &&
                (k += `LOCATION:${K.replace(
                  `
`,
                  "\\n",
                )}\r
`),
              (k += `END:VEVENT\r
`),
              (k += `END:VCALENDAR\r
`),
              (ie = `data:text/calendar;charset=utf-8;base64,${B.iI(new TextEncoder().encode(k))}`);
          } catch (k) {
            console.error(k);
          }
          let ue =
            "https://calendar.google.com/calendar/render?action=TEMPLATE";
          (ue += `&text=${encodeURI(_)}`),
            (ue += `&details=${encodeURI(R)}`),
            (ue += `&dates=${encodeURI(he + "/" + Ee)}`);
          const ge = (k) => {
            if ("ReactNativeWebView" in window) {
              const Re = window.ReactNativeWebView,
                We = {
                  event_name: "addcalendarevent",
                  tsStart: Y.getTime(),
                  tsEnd: se.getTime(),
                  strTitle: _,
                  strNotes: R,
                  strLocation: K,
                };
              Re.postMessage(JSON.stringify(We)), k.preventDefault();
            }
          };
          return (0, e.jsxs)("div", {
            className: (0, l.A)(
              "SaleSectionCalendarEventContainer",
              i().CalendarEventContainer,
            ),
            id: _e,
            children: [
              ie &&
                (0, e.jsx)("a", {
                  className: (0, l.A)(
                    "SaleSectionCalendarEventLink",
                    i().CalendarEventLink,
                  ),
                  href: ie,
                  onClick: ge,
                  download: "calendar.ics",
                  children: "Apple",
                }),
              (0, e.jsx)("a", {
                className: (0, l.A)(
                  "SaleSectionCalendarEventLink",
                  i().CalendarEventLink,
                ),
                href: ue,
                children: "Google",
              }),
              ie &&
                (0, e.jsx)("a", {
                  className: (0, l.A)(
                    "SaleSectionCalendarEventLink",
                    i().CalendarEventLink,
                  ),
                  href: ie,
                  onClick: ge,
                  download: "calendar.ics",
                  children: "Outlook",
                }),
            ],
          });
        }
      },
      68941: (W, j, t) => {
        "use strict";
        t.d(j, { $A: () => O, UT: () => N, g4: () => v });
        var e = t(7850),
          m = t(99412),
          i = t(67134),
          M = t(53113),
          S = t(98609),
          B = t(70187);
        function v(x) {
          let T = (0, B.j$)(x, "poster");
          T && (T = (0, M.L$)(T));
          const A = new Array();
          {
            const C = (0, B.j$)(x, "mp4");
            C && A.push({ sURL: (0, M.L$)(C), sFormat: "video/mp4" });
            const D = (0, B.j$)(x, "webm");
            D && A.push({ sURL: (0, M.L$)(D), sFormat: "video/webm" });
          }
          const P = (0, m.sfN)(S.TS.LANGUAGE),
            l = P != m.Bhc,
            L = new Array();
          for (let C = m.Bhc; C < m.bP9; C++) {
            const D = (0, B.j$)(x, "sub_" + (0, m.wwZ)(C));
            D &&
              L.push({
                sURL: (0, M.L$)(D),
                eLanguage: C,
                sKind: "subtitles",
                bDefault: l && C == P,
              });
            const y = (0, B.j$)(x, "cap_" + (0, m.wwZ)(C));
            y &&
              L.push({
                sURL: (0, M.L$)(y),
                eLanguage: C,
                sKind: "captions",
                bDefault: l && C == P,
              });
          }
          return { sPoster: T, rgVideoSources: A, rgVideoTracks: L };
        }
        function O(x) {
          const T = v(x.args);
          return (0, e.jsx)(i.L, {
            video: T,
            bAutoPlay: !0,
            bControls: !1,
            bLoop: !0,
          });
        }
        function N(x) {
          const T = v(x.args),
            A = x.children ? x.children.toString() : void 0;
          A &&
            A.startsWith("http") &&
            T.rgVideoSources.push({
              sURL: (0, M.L$)(A),
              sFormat: "video/webm",
            });
          const P = (0, B.j$)(x.args, "autoplay"),
            l = P !== "0" && P !== "off" && P !== "false",
            L = (0, B.j$)(x.args, "controls"),
            C = L !== "0" && L !== "off" && L !== "false",
            D = (0, B.j$)(x.args, "loop"),
            y = L !== "0" && L !== "off" && L !== "false";
          return (0, e.jsx)(i.L, {
            video: T,
            bAutoPlay: l,
            bControls: C,
            bLoop: D ? y : l,
          });
        }
      },
      10344: (W, j, t) => {
        "use strict";
        t.d(j, { R: () => N });
        var e = t(41735),
          m = t.n(e),
          i = t(14947),
          M = t(3166),
          S = Object.defineProperty,
          B = Object.getOwnPropertyDescriptor,
          v = (x, T, A, P) => {
            for (
              var l = P > 1 ? void 0 : P ? B(T, A) : T, L = x.length - 1, C;
              L >= 0;
              L--
            )
              (C = x[L]) && (l = (P ? C(T, A, l) : C(l)) || l);
            return P && l && S(T, A, l), l;
          };
        class O {
          constructor() {
            (0, i.Gn)(this);
          }
          m_mapYouTubeVideo = new Map();
          m_mapSharedFile = new Map();
          async LoadYouTubeDynamicData(T, A) {
            let P = new Array(),
              l = "";
            if (
              (T.forEach((y, f) => {
                const d = this.m_mapYouTubeVideo.get(y);
                d ? P.push(d) : (l.length > 0 && (l += ","), (l += y));
              }),
              l.length == 0)
            )
              return P;
            let L = { youtubevideoids: l };
            const D = (
              await m().get(
                M.TS.STORE_BASE_URL + "/events/ajaxgetdynamiceventmetadata",
                { params: L, cancelToken: A.token },
              )
            )?.data?.youtube;
            return (
              D &&
                (0, i.h5)(() => {
                  D.forEach((y, f) => {
                    this.m_mapYouTubeVideo.set(y.videoid, y), P.push(y);
                  });
                }),
              P
            );
          }
          async LoadSharedFileDynamicData(T, A) {
            let P = new Array(),
              l = "";
            if (
              (T.forEach((y, f) => {
                const d = this.m_mapSharedFile.get(y);
                d ? P.push(d) : (l.length > 0 && (l += ","), (l += y));
              }),
              l.length == 0)
            )
              return P;
            let L = { sharedfileids: l };
            const D = (
              await m().get(
                M.TS.STORE_BASE_URL + "/events/ajaxgetdynamiceventmetadata",
                { params: L, cancelToken: A.token },
              )
            )?.data?.sharedfiles;
            return (
              D &&
                (0, i.h5)(() => {
                  D.forEach((y, f) => {
                    this.m_mapSharedFile.set(y.sharedfileid, y), P.push(y);
                  });
                }),
              P
            );
          }
        }
        v([i.sH], O.prototype, "m_mapYouTubeVideo", 2),
          v([i.sH], O.prototype, "m_mapSharedFile", 2);
        const N = new O();
      },
      43828: (W, j, t) => {
        "use strict";
        t.d(j, { h: () => N });
        var e = t(7850),
          m = t(33770),
          i = t(90626),
          M = t(70187),
          S = t(7487),
          B = t(72609);
        function v(x) {
          return new S.OJ(new S.R8());
        }
        function O() {
          return new Map([...Array.from(M.W4.entries())]);
        }
        function N(x) {
          const { text: T, languageOverride: A } = x,
            [P] = (0, i.useState)(new m.B(O(), v, A ?? B.TS.LANGUAGE));
          return (0, e.jsx)(e.Fragment, { children: P.ParseBBCode(T, {}) });
        }
      },
      1917: (W, j, t) => {
        "use strict";
        t.d(j, { Eo: () => L, V2: () => T, gH: () => P });
        var e = t(7850),
          m = t(90626),
          i = t(70187),
          M = t(68941),
          S = t(6532),
          B = t(32093),
          v = t(72609),
          O = t(73662),
          N = t.n(O);
        function x() {
          return v.TS.EREALM === B.TU.k_ESteamRealmChina;
        }
        var T = ((C) => (
          (C.left = "leftthumb"),
          (C.right = "rightthumb"),
          (C.full = "full"),
          (C.summary = "summary"),
          C
        ))(T || {});
        function A(C) {
          const D = C == "full" ? O.sizeFull : O.sizeThumb,
            y =
              C == "full" ? "" : C == "leftthumb" ? O.floatLeft : O.floatRight;
          return { sizeStr: D, alignStr: y };
        }
        function P(C) {
          if (x()) return null;
          let D = (0, i.j$)(C.args);
          if (D) {
            let y = D.split(";");
            if (y.length == 2) {
              let f = y[0],
                d = y[1].toLocaleLowerCase();
              const { sizeStr: n, alignStr: r } = A(d);
              return (0, e.jsx)(S.A, {
                videoID: f,
                classNameAlign: r,
                classNameSize: n,
                bShowVideoImmediately: !0,
              });
            }
          }
          return (0, e.jsx)(m.Fragment, {});
        }
        function l(C) {
          if (x()) return null;
          const D = GetVideoIDAndStartTimeFromYouTubeURL(C);
          return D?.strVideoID !== void 0
            ? jsx(YouTubeInlineSnippet, {
                videoID: D.strVideoID,
                nStartSeconds: D.nStartSeconds,
                classNameAlign: "",
                classNameSize: youtubestyles.sizeFull,
                bShowVideoImmediately: !1,
              })
            : C;
        }
        function L(C) {
          if (x() || v.TS.COUNTRY.toLocaleUpperCase() == "CN")
            return (0, M.UT)(C);
          const D = (0, i.j$)(C.args, "youtubeid"),
            y = (0, i.j$)(C.args, "size"),
            f = (0, i.j$)(C.args, "seconds"),
            { sizeStr: d, alignStr: n } = A(y);
          return (0, e.jsx)(S.A, {
            videoID: D,
            nStartSeconds: f ? Number.parseInt(f) : void 0,
            classNameAlign: n,
            classNameSize: d,
            bShowVideoImmediately: !0,
          });
        }
      },
      6532: (W, j, t) => {
        "use strict";
        t.d(j, { A: () => L });
        var e = t(7850),
          m = t(90626),
          i = t(10344),
          M = t(85599),
          S = t(47689),
          B = t(34592),
          v = t(36707),
          O = t(18210),
          N = t(19730),
          x = t(72609),
          T = t(32608),
          A = t(73662),
          P = t.n(A),
          l = t(72080);
        function L(C) {
          const {
              videoID: D,
              bShowVideoImmediately: y,
              bAutoPlay: f,
              nStartSeconds: d,
              classNameSize: n,
              classNameAlign: r,
            } = C,
            [u, a] = (0, m.useState)(!y),
            [c, h] = (0, m.useState)(!1),
            o = (0, S.m)("YouTubeInlineSnippet"),
            [E, p] = (0, m.useState)({
              title: (0, O.we)("#Loading"),
              description: "",
              videoid: D,
              views: "0",
            });
          if (
            ((0, m.useEffect)(() => {
              u &&
                i.R.LoadYouTubeDynamicData([D], o)
                  .then((g) => {
                    !o.token.reason && g.length > 0 && (p(g[0]), h(!0));
                  })
                  .catch((g) =>
                    console.error(
                      "YouTubeInlineSnippet: " + (0, B.H)(g).strErrorMsg,
                    ),
                  );
            }, [u, o, D]),
            u)
          ) {
            const g = E.title,
              F = E.views,
              w = E.description;
            return (0, e.jsxs)("div", {
              className: l.gg.Box,
              onClick: () => a(!1),
              children: [
                (0, e.jsx)(l.KN, {
                  strURL: "https://img.youtube.com/vi/" + D + "/0.jpg",
                }),
                (0, e.jsxs)(l.J7, {
                  children: [
                    (0, e.jsx)(l.bv, {
                      children: (0, O.we)("#EventEditor_YouTubeVideoTitle", g),
                    }),
                    (0, e.jsx)(l.Yd, {
                      children: (0, O.we)(
                        "#EventEditor_YouTubeVideoViews",
                        (0, N.Dq)(Number(F)),
                      ),
                    }),
                    (0, e.jsxs)(l.s4, {
                      children: [
                        c && w,
                        !c && (0, e.jsx)(M.t, { size: "medium" }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          } else
            return (0, e.jsx)(T.gZ, {
              video: D,
              children: (0, e.jsxs)("div", {
                className: (0, v.A)(P().PreviewYouTubeVideo, n, r),
                id: D,
                children: [
                  (0, e.jsx)("img", {
                    className: P().PlaceholderImg,
                    src:
                      x.TS.COMMUNITY_CDN_URL +
                      "public/shared/images/responsive/youtube_16x9_placeholder.gif",
                  }),
                  (0, e.jsx)(T.fm, {
                    video: D,
                    autoplay: f ?? !1,
                    startSeconds: d,
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
      96197: (W, j, t) => {
        "use strict";
        t.d(j, { n: () => L, c: () => y });
        var e = t(7850),
          m = t(90626),
          i = t(561),
          M = t(21227);
        function S(f) {
          const { text: d = "", style: n, children: r } = f;
          if (d == null) return (0, e.jsx)(m.Fragment, { children: r });
          let u;
          if (
            (d instanceof Array
              ? (u = d
                  .map((a) => (a ? a.toString() : ""))
                  .filter((a) => a.length > 0)
                  .join(`
`))
              : (u = d.toString()),
            m.Children.count(r) == 1)
          ) {
            let a = m.Children.only(r);
            return m.cloneElement(a, {
              "data-copystyle": n,
              "data-copytext": u,
            });
          } else
            return (
              console.log(`Error: CopyableText must be the parent of exactly one child:
	copystyle=${n} copytext=${u}`),
              (0, e.jsx)(m.Fragment, { children: r })
            );
        }
        function B(f) {
          let d = f.cloneContents(),
            n = "",
            r = "",
            u = !1,
            c = (
              d.querySelector("[data-activechat=true]") || d
            ).querySelectorAll("[data-copytext]"),
            h = Array.from(c).map(
              (o) => o.getAttribute("data-copystyle") || "msg",
            );
          for (let o = 0; o < c.length; ++o) {
            let E = c[o],
              p = h[o];
            if (o + 1 < c.length && DOMUtils.BIsParent(E, c[o + 1])) continue;
            let g = E.tagName.toLowerCase(),
              F = p.includes("block"),
              w = p.includes("timestamp"),
              U = p.includes("server"),
              G = p.includes("invite"),
              z = p.includes("emote"),
              Z = p.includes("no-prefix"),
              X = p.includes("no-suffix"),
              oe = p.includes("allow-embedded-newlines"),
              re = p.includes("block-continue"),
              ae = p.includes("merge-adjacent"),
              q = p.includes("force-display"),
              le = p.includes("prepend-innertext"),
              J = p.includes("append-innertext"),
              ee = p.includes("prepend-newline"),
              te = p.includes("append-newline"),
              $ = p.includes("speaker");
            if (!q) {
              let ne = g.match(/img|iframe/) != null,
                de = E.querySelector("img,iframe") != null;
              if (!E.innerText && !ne && !de) continue;
            }
            ae &&
              (o > 0 && h[o - 1].includes("merge-adjacent") && (Z = !0),
              o + 1 < h.length &&
                h[o + 1].includes("merge-adjacent") &&
                (X = !0)),
              $ && (u = !0);
            let V = "",
              Q = `
`;
            !w && !$ && !U && !G && !z
              ? (u && (V += "	"),
                r.includes("msg") && F && (ee = !0),
                r.includes("block") && !re && (ee = !0))
              : (n.length != 0 &&
                  (V += `
`),
                (U || G) && (V += "		"));
            let H = E.getAttribute("data-copytext") ?? "";
            H.length == 0
              ? (H = E.innerText)
              : le && E.innerText.length > 0
                ? (H = `${E.innerText}${
                    p.includes("-with-newline")
                      ? `
`
                      : " "
                  }${H}`)
                : J &&
                  E.innerText.length > 0 &&
                  (H += `${
                    p.includes("-with-newline")
                      ? `
`
                      : " "
                  }${E.innerText}`),
              H.length != 0 &&
                (ee &&
                  (n += `
`),
                Z || (n += V),
                (n += oe ? H : H.replace(/\n/g, Q + V)),
                X || (n += Q),
                te &&
                  (n += `
`)),
              (r = p);
          }
          if (n.length != 0) return n;
        }
        function v(f) {
          const d = B(f);
          d != null && DOMUtils.CopyTextToClipboard(d);
        }
        function O(f) {
          const d = document.createRange();
          d.selectNode(f), v(d);
        }
        var N = t(36707),
          x = t(42060),
          T = t.n(x),
          A = t(86048),
          P = t(80902),
          l = t(98609);
        function L(f) {
          const { emoticon: d, large: n } = f,
            [r, u] = (0, A.OP)(),
            [a, c] = m.useState(null),
            h = `:${d}:`,
            o = (0, M.G)(d, n);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(S, {
                text: h,
                style: "merge-adjacent",
                children: (0, e.jsx)("img", {
                  ...u,
                  src: o,
                  className: (0, N.A)(T().emoticon, n ? T().large : void 0),
                  "data-emoticon": d,
                  alt: d,
                  ref: c,
                }),
              }),
              r && a && (0, e.jsx)(C, { target: a, emoticon: d }),
            ],
          });
        }
        function C(f) {
          const { target: d, emoticon: n } = f,
            { data: r } = D(n);
          return (0, e.jsx)(y, {
            target: d,
            title: `:${n}:`,
            subtitle: r && r.app_name ? r.app_name : void 0,
            children: (0, e.jsx)(L, { emoticon: n, large: !0 }),
          });
        }
        function D(f) {
          return (0, P.I)({
            queryKey: ["EmoticonHover", f],
            queryFn: async () => {
              const d = `${l.TS.COMMUNITY_CDN_URL}economy/emoticonhoverjson/${encodeURIComponent(f)}?l=${encodeURIComponent(l.TS.LANGUAGE)}&origin=${self.origin}`,
                n = await fetch(d);
              if (n.status != 200)
                throw `Error fetching emoticon: ${n.status} ${n.statusText}`;
              return await n.json();
            },
          });
        }
        const y = ({ target: f, title: d, subtitle: n, children: r }) =>
          (0, e.jsxs)(i.g, {
            target: f,
            style: { zIndex: 1700 },
            className: T().EmoticonHover,
            children: [
              r,
              (0, e.jsxs)("div", {
                className: T().Info,
                children: [
                  (0, e.jsx)("div", {
                    className: T().Name,
                    children: d || (0, e.jsx)("span", { children: "\xA0" }),
                  }),
                  (0, e.jsx)("div", {
                    className: T().AppName,
                    children: n || (0, e.jsx)("span", { children: "\xA0" }),
                  }),
                ],
              }),
            ],
          });
      },
      25269: (W, j, t) => {
        "use strict";
        t.d(j, { J: () => e });
        function e(m) {
          if (!m) return m;
          const i = m.trim(),
            M = i.toLowerCase();
          return M.startsWith("javascript:") ||
            M.startsWith("data:") ||
            M.startsWith("vbscript:")
            ? ""
            : i;
        }
      },
      34736: (W, j, t) => {
        "use strict";
        t.d(j, { $k: () => D, S8: () => d, fI: () => f });
        var e = t(7850),
          m = t(75844),
          i = t(90626),
          M = t(29630),
          S = t(99412),
          B = t(1960),
          v = t(561),
          O = t(67344),
          N = t(30096),
          x = t(72609),
          T = t(43828),
          A = t(3246),
          P = t.n(A),
          l = Object.defineProperty,
          L = Object.getOwnPropertyDescriptor,
          C = (n, r, u, a) => {
            for (
              var c = a > 1 ? void 0 : a ? L(r, u) : r, h = n.length - 1, o;
              h >= 0;
              h--
            )
              (o = n[h]) && (c = (a ? o(r, u, c) : o(c)) || c);
            return a && c && l(r, u, c), c;
          };
        const D = (0, m.PA)((n) => {
            const r = (0, M.z5)(n.photo, (0, S.sfN)(x.TS.LANGUAGE)),
              u = r ? (typeof r == "string" ? r : r[1]) : void 0,
              a = !!n.title,
              c = !!n.company;
            return (0, e.jsxs)("div", {
              className: P().SpeakerPopup,
              onMouseLeave: n.fnClose,
              children: [
                (0, e.jsxs)("div", {
                  className: P().SpeakerInfoOuter,
                  children: [
                    n.photo && (0, e.jsx)("img", { src: u }),
                    (0, e.jsxs)("div", {
                      className: P().SpeakerInfoInner,
                      children: [
                        (0, e.jsx)("div", { children: n.name }),
                        (a || c) &&
                          (0, e.jsxs)("div", {
                            children: [
                              a &&
                                (0, e.jsx)("span", {
                                  className: P().SpeakerTitle,
                                  children: n.title,
                                }),
                              a && c && (0, e.jsx)("span", { children: ", " }),
                              c && (0, e.jsx)("span", { children: n.company }),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
                n.bio &&
                  (0, e.jsxs)("div", {
                    className: P().SpeakerBio,
                    children: [
                      n.bio,
                      n.bioString && (0, e.jsx)(T.h, { text: n.bioString }),
                    ],
                  }),
              ],
            });
          }),
          y = class me extends i.Component {
            static sm_embeddedElements = new B.MX(
              "presenter-hover-source-elements",
            );
            m_refAnchor = i.createRef();
            m_fnHidePopup = null;
            m_nScrollPosAtHoverStart = 0;
            ClosePopup() {
              (0, O.p)() ||
                (this.m_fnHidePopup &&
                  (this.m_fnHidePopup(),
                  (this.m_fnHidePopup = null),
                  window.removeEventListener("scroll", this.OnScroll)));
            }
            componentWillUnmount() {
              this.ClosePopup();
            }
            OnScroll() {
              Math.abs(window.scrollY - this.m_nScrollPosAtHoverStart) > 50 &&
                this.ClosePopup();
            }
            OnHover(r) {
              const u = this.m_refAnchor.current;
              if (!u) return;
              const a = {
                  direction: "right",
                  bEnablePointerEvents: !0,
                  style: { maxWidth: 640, minHeight: u.clientHeight },
                  target: u,
                },
                c = "presenter-hover-" + Math.floor(Math.random() * 1e8);
              (this.m_fnHidePopup = () =>
                me.sm_embeddedElements.HideElement(u.ownerDocument, c)),
                window.addEventListener("scroll", this.OnScroll),
                (this.m_nScrollPosAtHoverStart = window.scrollY),
                me.sm_embeddedElements.ShowElementDelayed(
                  u.ownerDocument,
                  150,
                  (0, e.jsx)(v.g, {
                    ...a,
                    children: (0, e.jsx)(D, {
                      ...this.props,
                      fnClose: this.OnLeave,
                    }),
                  }),
                  c,
                );
            }
            OnLeave(r) {
              this.ClosePopup();
            }
            render() {
              return (0, e.jsx)("div", {
                className: P().SpeakerHover,
                ref: this.m_refAnchor,
                onMouseEnter: this.OnHover,
                onFocus: this.OnHover,
                onMouseLeave: this.OnLeave,
                onBlur: this.OnLeave,
                children: this.props.children,
              });
            }
          };
        C([N.oI], y.prototype, "ClosePopup", 1),
          C([N.oI], y.prototype, "OnScroll", 1),
          C([N.oI], y.prototype, "OnHover", 1),
          C([N.oI], y.prototype, "OnLeave", 1);
        let f = y;
        function d(n) {
          const {
              photo: r,
              name: u,
              title: a,
              company: c,
              hidePhotoInCompactView: h,
            } = n,
            o = (0, M.z5)(r, (0, S.sfN)(x.TS.LANGUAGE)),
            E = o && !h ? (typeof o == "string" ? o : o[1]) : null,
            p = !!a,
            g = !!c;
          return (0, e.jsx)("div", {
            className: P().SpeakerOuter,
            children: (0, e.jsx)(f, {
              ...n,
              children: (0, e.jsx)("div", {
                className: P().Speaker,
                children: (0, e.jsxs)("div", {
                  className: P().SpeakerInfoOuter,
                  children: [
                    !!E && (0, e.jsx)("img", { src: E }),
                    (0, e.jsxs)("div", {
                      className: P().SpeakerInfoInner,
                      children: [
                        (0, e.jsx)("div", { children: u }),
                        (p || g) &&
                          (0, e.jsxs)("div", {
                            children: [
                              p &&
                                (0, e.jsx)("span", {
                                  className: P().SpeakerTitle,
                                  children: a,
                                }),
                              p && g && (0, e.jsx)("span", { children: ", " }),
                              g && (0, e.jsx)("span", { children: c }),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          });
        }
      },
      67134: (W, j, t) => {
        "use strict";
        t.d(j, { L: () => C });
        var e = t(7850),
          m = t(90626),
          i = t(99412),
          M = t(32093),
          S = t(18210),
          B = t(53113),
          v = t(72609),
          O = t(3166),
          N = t(30096),
          x = Object.defineProperty,
          T = Object.getOwnPropertyDescriptor,
          A = (a, c, h, o) => {
            for (
              var E = o > 1 ? void 0 : o ? T(c, h) : c, p = a.length - 1, g;
              p >= 0;
              p--
            )
              (g = a[p]) && (E = (o ? g(c, h, E) : g(E)) || E);
            return o && E && x(c, h, E), E;
          };
        function P(a) {
          return !(
            !(0, B.ZF)(a.sPoster) ||
            (a.rgVideoSources &&
              a.rgVideoSources.some((c) => !(0, B.ZF)(c.sURL))) ||
            (a.rgVideoTracks && a.rgVideoTracks.some((c) => !(0, B.ZF)(c.sURL)))
          );
        }
        const l = class ce {
          m_bUserHasVolumePreference = !1;
          m_flVolumePreference = 0;
          BUserHasVolumePreference() {
            return this.m_bUserHasVolumePreference;
          }
          SetVolumePreference(c) {
            (this.m_flVolumePreference = c),
              (this.m_bUserHasVolumePreference = !0);
          }
          GetVolumePreference() {
            return this.m_flVolumePreference;
          }
          BVolumePreferenceMuted() {
            return this.m_flVolumePreference < 0.001;
          }
          static s_Singleton;
          static Get() {
            return (
              ce.s_Singleton || (ce.s_Singleton = new ce()), ce.s_Singleton
            );
          }
        };
        A([N.oI], l.prototype, "BUserHasVolumePreference", 1),
          A([N.oI], l.prototype, "SetVolumePreference", 1);
        let L = l;
        const C = (0, m.forwardRef)(function (c, h) {
            const {
                video: o,
                bAutoPlay: E,
                bControls: p,
                bLoop: g,
                bMuted: F,
                className: w,
                mediaScale: U,
                onClick: G,
                altText: z,
              } = c,
              Z = (0, m.useMemo)(
                () =>
                  !!o.rgVideoTracks?.some(
                    ($) => $.sKind == "subtitles" || $.sKind == "captions",
                  ),
                [o.rgVideoTracks],
              ),
              [X, oe] = m.useState(!1),
              re = f();
            if (!o.rgVideoSources || !o.rgVideoSources.length) return null;
            const ae = P(o);
            let q;
            (!ae || (Z && v.TS.EUNIVERSE == i.wLO)) && (q = "anonymous");
            const le = F || (E && L.Get().BVolumePreferenceMuted()),
              J = o.sPoster ? d(o.sPoster, re) : "",
              ee = ($) => {
                const V = $.target,
                  Q = V.muted ? 0 : V.volume;
                X && L.Get().SetVolumePreference(Q);
              },
              te = ($) => {
                const V = $.target,
                  Q = V.currentTime == 0,
                  H = L.Get().BUserHasVolumePreference();
                if ((oe(!0), !!Q))
                  if (!H && !E) {
                    const ne = V.muted ? 0 : V.volume;
                    L.Get().SetVolumePreference(ne);
                  } else
                    H &&
                      ((V.volume = L.Get().GetVolumePreference()),
                      (V.muted = L.Get().BVolumePreferenceMuted()));
              };
            return (0, e.jsxs)("video", {
              width: "100%",
              height: "auto",
              autoPlay: E,
              muted: le,
              playsInline: !0,
              controls: p,
              poster: J,
              loop: g,
              crossOrigin: q,
              onVolumeChange: ee,
              onPlay: te,
              ref: h,
              className: w,
              onClick: G,
              "aria-label": z,
              style: { width: U && U >= 1 && U < 100 ? `${U}%` : void 0 },
              children: [
                (0, e.jsx)(n, { rgVideoSources: o.rgVideoSources }),
                (0, e.jsx)(r, { rgVideoTracks: o.rgVideoTracks }),
              ],
            });
          }),
          D = m.createContext(void 0);
        function y(a) {
          const { children: c, strOrigin: h } = a;
          return jsx(D.Provider, { value: h, children: c });
        }
        function f() {
          return m.useContext(D) || (0, O.xv)();
        }
        function d(a, c) {
          if (a)
            try {
              const h = new URL(a);
              return (
                (h.search = (h.search ? h.search + "&" : "?") + "origin=" + c),
                h.toString()
              );
            } catch {
              return a;
            }
        }
        function n(a) {
          const { rgVideoSources: c } = a,
            h = f();
          return c
            .filter((o) => !!o.sURL)
            .map((o) =>
              (0, e.jsx)(
                "source",
                { src: d(o.sURL, h), type: o.sFormat },
                o.sURL,
              ),
            );
        }
        function r(a) {
          const { rgVideoTracks: c } = a;
          return c
            ? c.map((h, o) => (0, e.jsx)(u, { track: h, rgVideoTracks: c }, o))
            : null;
        }
        function u(a) {
          const { track: c, rgVideoTracks: h } = a,
            o = f();
          let E = c.eLanguage;
          if (v.TS.EREALM == M.TU.k_ESteamRealmChina)
            if (S.A0.IsELanguageValidInRealm(E, M.TU.k_ESteamRealmChina))
              E = S.A0.GetELanguageFallback(E);
            else if (E === i.NFp) {
              if (h.find((p) => S.A0.GetELanguageFallback(p.eLanguage) === E))
                return null;
            } else return null;
          else if (!S.A0.IsELanguageValidInRealm(E, M.TU.k_ESteamRealmGlobal))
            return null;
          return (0, e.jsx)("track", {
            src: d(c.sURL, o),
            kind: c.sKind,
            default: c.bDefault,
            srcLang: (0, i.wwZ)(E),
            label: (0, S.uD)(E),
          });
        }
      },
      64377: (W, j, t) => {
        "use strict";
        t.d(j, { K: () => v, _: () => B });
        var e = t(7850),
          m = t(90626),
          i = t(95892),
          M = t(19298);
        const S = m.createContext({ enabled: !0 });
        function B(O) {
          const { enabled: N, children: x } = O,
            T = m.useMemo(() => ({ enabled: N }), [N]);
          return (0, e.jsx)(S.Provider, { value: T, children: x });
        }
        function v(O) {
          const {
              placeholderWidth: N,
              placeholderHeight: x,
              holdGamepadFocus: T = !1,
              onRender: A,
              style: P,
              mode: l = "JustLoad",
              children: L,
              ...C
            } = O,
            D = m.useContext(S),
            [y, f] = m.useState(() => ({
              bRenderChildren: !D.enabled,
              nPrevRenderHeight: 0,
              nPrevRenderWidth: 0,
            })),
            d = m.useRef(null),
            n = l === "LoadAndUnload" && D.enabled,
            r = m.useCallback(
              (h) => {
                f((o) => {
                  if (o.bRenderChildren === h || (o.bRenderChildren && !n))
                    return o;
                  let E = 0,
                    p = 0;
                  if (d.current) {
                    const g = d.current.getBoundingClientRect();
                    g && ((E = g.width), (p = g.height));
                  }
                  return (
                    h && A && A(),
                    {
                      bRenderChildren: h,
                      nPrevRenderWidth: E,
                      nPrevRenderHeight: p,
                    }
                  );
                });
              },
              [n, A],
            );
          m.useEffect(() => {
            D.enabled || r(!0);
          }, [D.enabled, r]);
          let u = P;
          if (!y.bRenderChildren) {
            const h = y.nPrevRenderWidth || N,
              o = y.nPrevRenderHeight || x;
            (o !== void 0 || h !== void 0) &&
              (u = { ...P, minHeight: o, minWidth: h });
          }
          const a = n ? "repeated" : "once";
          let c = (0, e.jsx)(i.J, {
            containerRef: d,
            style: u,
            ...C,
            onVisibilityChange: r,
            trigger: a,
            children: y.bRenderChildren && L,
          });
          return (
            T &&
              (c = (0, e.jsx)(M.Z, {
                focusableIfEmpty: !0,
                style: { height: "100%" },
                children: c,
              })),
            c
          );
        }
      },
      33645: (W) => {
        W.exports = {
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
      11748: (W) => {
        W.exports = {
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
      73662: (W) => {
        W.exports = {
          PreviewYouTubeVideo: "rUASsQgg0rvqoACIDRygZ",
          sizeThumb: "_3dy3KtMG10uNhU2HRfwx3A",
          sizeFull: "_14CxWorQ1RNkZvdhXYWAh-",
          PlaceholderImg: "LILNdsmSgG52f0MP1f2O3",
          floatLeft: "_2OWxr5tZIjB4gTfA3vE2Gc",
          floatRight: "om0Rs75g2ScLGnDWC76IQ",
        };
      },
      42060: (W) => {
        W.exports = {
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
      3246: (W) => {
        W.exports = {
          SpeakerOuter: "_3rRqPJdGrYx9YMtQMciIFY",
          Speaker: "_3F7-FkJu8-JstT7SouP8XJ",
          SpeakerPopup: "_3y7kVhhGmtbSgbZdte0EuV",
          SpeakerInfoOuter: "_1NC9nn23Pdd7FtZW6zM7he",
          SpeakerInfoInner: "_1bMpEcCbkVkKo1Oc02WFoJ",
          SpeakerTitle: "_2Vo0lUG19xIopljkxhtSod",
          SpeakerBio: "_2yP7s2N28D9PFHs9yUr3jD",
          SpeakerHover: "_16UyHpAXG98qQsfN8mBk3x",
        };
      },
    },
  ]);
})();
