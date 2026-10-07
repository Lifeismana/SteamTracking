/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [69773],
    {
      65217: (z, W, o) => {
        "use strict";
        o.d(W, { F: () => S });
        var r = o(39414);
        function S(w, D, y, B) {
          let k = [],
            P;
          for (; (P = D.match(r.O)); ) {
            P.index > 0 && k.push(w.text(D.substring(0, P.index)));
            const I = (0, r.S)(P[0]),
              E = B && B(I);
            !E || E === "default"
              ? k.push(w.text(P[0], [y.create({ href: I })]))
              : E !== "remove" && k.push(E),
              (D = D.substring(P.index + P[0].length));
          }
          if (k.length != 0) return D.length && k.push(w.text(D)), k;
        }
      },
      8422: (z, W, o) => {
        "use strict";
        o.d(W, { Mw: () => B, TG: () => P, zL: () => y });
        var r = o(7850),
          S = o(52893),
          w = o(90626),
          D = o(19565);
        const y = new S.k_({
            props: {
              handlePaste(I, E, F) {
                var N;
                const j =
                  (N = E.clipboardData) == null
                    ? void 0
                    : N.getData("text/plain").replace(/\n/g, " ");
                if (j) {
                  const R = I.state.tr.insertText(j);
                  I.dispatch(R);
                }
                return !0;
              },
            },
          }),
          B = {
            Enter: () => !0,
            "Shift-Enter": () => !0,
            "Mod-Enter": () => !0,
          };
        function k(I) {
          return new S.k_({
            filterTransaction(E, F) {
              return E.doc.textContent.length <= I;
            },
          });
        }
        function P(I) {
          const { nMaxChars: E } = I;
          return (
            (0, D.c$)((0, w.useMemo)(() => k(E), [E])),
            (0, r.jsx)(w.Fragment, {})
          );
        }
      },
      58802: (z, W, o) => {
        "use strict";
        o.d(W, { W: () => y });
        var r = o(57053),
          S = Object.defineProperty,
          w = (k, P, I) =>
            P in k
              ? S(k, P, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: I,
                })
              : (k[P] = I),
          D = (k, P, I) => w(k, typeof P != "symbol" ? P + "" : P, I);
        class y {
          constructor(P, I) {
            D(this, "m_ProseMirrorSchema"),
              D(this, "m_mapBBCodeDictionary", new Map()),
              D(this, "m_PMToBBCodeConfig", {
                mapNodes: new Map(),
                mapMarks: new Map(),
              });
            const E = {
                doc: { content: "block+" },
                text: { group: "inline" },
                hard_break: {
                  inline: !0,
                  group: "inline",
                  selectable: !1,
                  linebreakReplacement: !0,
                  parseDOM: [{ tag: "br" }],
                  toDOM() {
                    return ["br"];
                  },
                },
              },
              F = new Map(),
              N = new Map(),
              j = I ? new Set(I) : void 0;
            for (const T in P.nodes) {
              const { bbCode: p, ...t } = P.nodes[T],
                d = B(p, j);
              d && ((E[T] = t), F.set(T, d));
            }
            const R = {};
            for (const T in P.marks) {
              const { bbCode: p, ...t } = P.marks[T];
              (!j || j.has(p.tag)) && ((R[T] = t), N.set(T, p));
            }
            (this.m_ProseMirrorSchema = new r.Sj({ nodes: E, marks: R })),
              F.forEach((T, p) => {
                var t;
                const d = this.m_ProseMirrorSchema.nodes[p],
                  x = P.nodes[p],
                  A = Array.isArray(T) ? T : [T];
                let f;
                x.content == "list_item+"
                  ? (f = this.m_ProseMirrorSchema.nodes.list_item)
                  : ((t = x.content) == null
                      ? void 0
                      : t.indexOf("paragraph")) != -1 &&
                    (f = this.m_ProseMirrorSchema.nodes.paragraph),
                  A.forEach(
                    ({
                      tag: C,
                      BBArgsToAttrs: M,
                      AttrsToBBArgs: u,
                      convertContentToAttr: e,
                      bVerbatimArgs: a,
                      bVerbatimContent: n,
                      ...i
                    }) => {
                      this.m_mapBBCodeDictionary.set(C, {
                        Constructor: {
                          node: d,
                          BBArgsToAttrs: M,
                          convertContentToAttr: e,
                          acceptNode: f,
                        },
                        skipFollowingNewline: !0,
                        ...i,
                      });
                    },
                  );
                const {
                  tag: b,
                  AttrsToBBArgs: g,
                  bVerbatimArgs: v,
                  bVerbatimContent: m,
                } = A[0];
                this.m_PMToBBCodeConfig.mapNodes.set(d, {
                  tag: b,
                  AttrsToBBArgs: g,
                  bVerbatimArgs: v,
                  bVerbatimContent: m,
                });
              }),
              N.forEach((T, p) => {
                const t = this.m_ProseMirrorSchema.marks[p],
                  { tag: d, BBArgsToAttrs: x, AttrsToBBArgs: A, ...f } = T;
                this.m_mapBBCodeDictionary.set(d, {
                  Constructor: { mark: t, BBArgsToAttrs: x },
                  ...f,
                }),
                  this.m_PMToBBCodeConfig.mapMarks.set(t, {
                    tag: d,
                    AttrsToBBArgs: A,
                  });
              });
          }
          get pm_schema() {
            return this.m_ProseMirrorSchema;
          }
          get bbcode_dictionary() {
            return this.m_mapBBCodeDictionary;
          }
          get pm_to_bbcode_config() {
            return this.m_PMToBBCodeConfig;
          }
          ConvertAttrToBBCodeArgs(P, I) {
            const E = this.m_PMToBBCodeConfig.mapNodes.get(P.type);
            return E && E.AttrsToBBArgs ? E.AttrsToBBArgs(I, P).args || {} : {};
          }
        }
        function B(k, P) {
          if (P)
            if (Array.isArray(k)) {
              const I = k.filter((E) => P.has(E.tag));
              return I.length > 0 ? I : void 0;
            } else return P.has(k.tag) ? k : void 0;
          else return k;
        }
      },
      81240: (z, W, o) => {
        "use strict";
        o.d(W, { i: () => w });
        var r = o(90626),
          S = o(8561);
        function w(D, y) {
          const { msAutosaveTimeout: B = 1e3, msMaxInterval: k = B * 10 } =
              y || {},
            [P, I] = r.useState(!1),
            E = r.useRef(0);
          return (
            (0, S.u)(
              D,
              r.useCallback(() => {
                (E.current = performance.now()), I(!0);
              }, []),
            ),
            r.useEffect(() => {
              if (!P || !D) return;
              const F = performance.now(),
                N = (R = !1) => {
                  j = void 0;
                  const T = performance.now(),
                    p = T - E.current;
                  R || p >= B || T - F >= k
                    ? (console.log("Committing changes"),
                      D.CommitChanges(),
                      I(!1))
                    : (j = window.setTimeout(N, B - p));
                };
              let j = window.setTimeout(N, B);
              return () => {
                j && (window.clearTimeout(j), N(!0));
              };
            }, [P, D, B, k]),
            { bDirty: P }
          );
        }
      },
      23569: (z, W, o) => {
        "use strict";
        o.d(W, { M: () => j, U: () => E });
        var r = o(7850),
          S = o(38585),
          w = o(52893),
          D = o(90626),
          y = o(72739),
          B = o(19565),
          k = Object.defineProperty,
          P = (R, T, p) =>
            T in R
              ? k(R, T, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: p,
                })
              : (R[T] = p),
          I = (R, T, p) => P(R, typeof T != "symbol" ? T + "" : T, p);
        const E = D.memo(function (T) {
          const { specs: p } = T,
            [t, d] = D.useState([]),
            x = D.useRef(0),
            A = D.useCallback(
              (b) => (
                d((g) => [...g, { id: x.current++, nodeView: b }]),
                () => d((g) => g.filter((v) => v.nodeView != b))
              ),
              [],
            ),
            f = D.useMemo(() => {
              const b = {};
              return (
                p
                  .filter(Boolean)
                  .forEach(
                    (g) => (b[g.type.name] = (v, m, C) => new N(g, v, m, C, A)),
                  ),
                new w.k_({ props: { nodeViews: b } })
              );
            }, [p, A]);
          return (
            (0, B.c$)(f),
            t.map(({ id: b, nodeView: g }) => (0, r.jsx)(F, { nodeView: g }, b))
          );
        });
        function F(R) {
          const {
              element: T,
              spec: p,
              getProps: t,
              onPropsChanged: d,
              actions: x,
              isSelected: A,
            } = R.nodeView,
            [f, b] = D.useReducer((g) => g + 1, 0);
          return (
            D.useEffect(() => d.Register(b).Unregister, [d, b]),
            y.createPortal(
              D.createElement(p.component, { ...t(), selected: A(), ...x }),
              T,
            )
          );
        }
        class N {
          constructor(T, p, t, d, x) {
            I(this, "dom"),
              I(this, "contentDOM"),
              I(this, "onPropsChanged"),
              I(this, "node"),
              I(this, "selected"),
              I(this, "reactHost"),
              I(this, "destroy"),
              (this.node = p);
            const A = t.dom.ownerDocument,
              f = A.createElement(T.type.isInline ? "span" : "div");
            this.dom = f;
            let b = f;
            T.bEditableContent &&
              ((b = this.reactHost =
                A.createElement(T.type.isInline ? "span" : "div")),
              (b.contentEditable = "false"),
              f.appendChild(b),
              (this.contentDOM = A.createElement(
                T.type.inlineContent ? "span" : "div",
              )),
              f.appendChild(this.contentDOM));
            const { selection: g } = t.state;
            this.selected = d() >= g.from && d() + p.nodeSize <= g.to;
            const v = (M) => {
                const u = M(t.state.tr, p, d());
                u && t.dispatch(u);
              },
              m = {
                update: v,
                setAttrs: (M, u) => v((e, a, n) => e.setNodeMarkup(n, u, M)),
                removeNode: () => v((M, u, e) => M.delete(e, e + u.nodeSize)),
                focusView: () => {
                  window.setTimeout(() => t.focus(), 1);
                },
              },
              C = new S.l();
            (this.destroy = x({
              element: b,
              spec: T,
              getProps: () => T.readProps(this.node),
              isSelected: () => this.selected,
              onPropsChanged: C,
              actions: m,
            })),
              (this.onPropsChanged = C.Dispatch.bind(C));
          }
          update(T, p, t) {
            return T.type != this.node.type
              ? !1
              : ((this.node = T), this.onPropsChanged(), !0);
          }
          ignoreMutation(T) {
            return this.contentDOM && this.contentDOM.contains(T.target)
              ? !1
              : this.reactHost
                ? !0
                : T.type != "selection";
          }
          stopEvent(T) {
            return !!this.reactHost && this.reactHost.contains(T.target);
          }
          selectNode() {
            (this.selected = !0), this.onPropsChanged();
          }
          deselectNode() {
            (this.selected = !1), this.onPropsChanged();
          }
        }
        function j(R) {
          return (T, p, t) => T.replaceWith(t, t + p.nodeSize, R);
        }
      },
      19565: (z, W, o) => {
        "use strict";
        o.d(W, { KF: () => x, Ot: () => d, c$: () => A, Hd: () => f });
        var r = o(7850),
          S = o(12362),
          w = o(15024),
          D = o(7502),
          y = o(52893),
          B = o(90626),
          k = o(98724),
          P = o(79216),
          I = o(4188),
          E = o(74827);
        function F(b) {
          const { nodes: g, marks: v } = b,
            m = (0, S.st)(
              S.I$,
              (M, u) => (
                u &&
                  u(
                    M.tr
                      .replaceSelectionWith(g.hard_break.createChecked())
                      .scrollIntoView(),
                  ),
                !0
              ),
            ),
            C = {
              "Mod-z": k.tN,
              "Mod-y": k.ZS,
              "Shift-Mod-z": k.ZS,
              Backspace: P.dv,
              Escape: S.hy,
              "Mod-Enter": m,
              "Shift-Enter": m,
              "Mod-b": (0, S.wh)(v.strong),
              "Mod-i": (0, S.wh)(v.italic),
              "Mod-u": (0, S.wh)(v.underline),
              "Mod-Shift-x": (0, S.wh)(v.strike),
              "Ctrl-Shift-s": (0, S.wh)(v.strike),
              Enter: (0, I.wn)(g.list_item),
              "Mod-[": (0, I.T2)(g.list_item),
              "Mod-]": (0, I.$B)(g.list_item),
              "Ctrl-Shift-1": (0, S.y_)(g.heading, { level: 1 }),
              "Ctrl-Shift-2": (0, S.y_)(g.heading, { level: 2 }),
              "Ctrl-Shift-3": (0, S.y_)(g.heading, { level: 3 }),
              "Ctrl-Shift-4": (0, S.y_)(g.heading, { level: 4 }),
              "Ctrl-Shift-5": (0, S.y_)(g.heading, { level: 5 }),
              "Ctrl-Shift-7": (0, S.y_)(g.ordered_list),
              "Ctrl-Shift-8": (0, S.y_)(g.bullet_list),
              "Ctrl-Shift-0": (0, S.y_)(g.paragraph),
            };
          return (
            v.code && (C["Ctrl-Shift-c"] = (0, S.wh)(v.code)),
            g.code_block && (C["Alt-Ctrl-Shift-c"] = (0, S.y_)(g.code_block)),
            g.horizontal_rule &&
              (C["Mod-_"] = (M, u) => (
                u &&
                  u(
                    M.tr
                      .replaceSelectionWith(g.horizontal_rule.create())
                      .scrollIntoView(),
                  ),
                !0
              )),
            (0, D.w)(C)
          );
        }
        function N(b, g) {
          return new P.fV(b, (v, m, C, M) =>
            v.tr.replaceWith(C, M, g.create()),
          );
        }
        function j(b) {
          const { nodes: g, marks: v } = b;
          return (0, P.sM)({
            rules: [
              (0, P.tG)(
                /^(\d+)\.\s$/,
                g.ordered_list,
                (m) => ({ order: parseInt(m[1]) }),
                (m, C) => C.childCount + C.attrs.order == parseInt(m[1]),
              ),
              (0, P.tG)(/^\s*([-+*])\s$/, g.bullet_list),
              (0, E.OX)(/(?<!\w)\*([^*]+)\*/, v.strong),
              (0, E.OX)(/(?<!\w)_([^_]+)_/, v.italic),
              (0, E.OX)(/(?<!\w)~([^~]+)~/, v.strike),
              (0, E.OX)(/(?<!\w)`([^`]+)`/, v.code),
              (0, P.JJ)(/^```$/, g.code_block),
              (0, P.JJ)(/^(#{1,5})\s$/, g.heading, (m) => ({
                level: m[1].length,
              })),
              g.horizontal_rule && N(/^(\*\*\*|---|___)$/, g.horizontal_rule),
            ].filter(Boolean),
          });
        }
        var R = o(45772),
          T = o(74763),
          p = o(8422);
        const t = B.createContext(void 0);
        function d(b) {
          const { view: g, pmState: v, children: m } = b,
            C = B.useMemo(() => ({ view: g, pmState: v }), [g, v]);
          return (0, r.jsx)(t.Provider, { value: C, children: m });
        }
        const x = B.memo(function (g) {
          const { schema: v, refOnUpdate: m, bSingleLine: C } = g;
          return (
            A(
              B.useMemo(
                () =>
                  m &&
                  new y.k_({
                    view: (M) => ({
                      update: (...u) => m.current && m.current(...u),
                    }),
                  }),
                [m],
              ),
            ),
            A(B.useMemo(() => (0, D.w)(C ? p.Mw : {}), [C])),
            A(C ? p.zL : void 0),
            A(B.useMemo(() => (0, w.z)(), [])),
            A(B.useMemo(() => F(v), [v])),
            A(B.useMemo(() => (0, D.w)(S.RV), [])),
            A(B.useMemo(() => j(v), [v])),
            null
          );
        });
        function A(b) {
          const { pmState: g } = B.useContext(t);
          B.useEffect(() => {
            if (!(!g || !b)) return g.InstallPlugin(b);
          }, [b, g]);
        }
        function f() {
          var b;
          return (b = B.useContext(t)) == null ? void 0 : b.view;
        }
      },
      84419: (z, W, o) => {
        "use strict";
        o.d(W, { BM: () => B, DQ: () => j, cI: () => p, ce: () => k });
        var r = o(4188),
          S = o(36707),
          w = o(29950),
          D = o(33645),
          y = o.n(D);
        function B(t, d, x = 0) {
          return () => [t, { class: d }, x];
        }
        function k(t, d, x = 0) {
          return [t, { class: d }, x];
        }
        function P(t, d) {
          return () => [
            d,
            { class: bbstyles.PreservedUnsupportedTag },
            ["span", { class: bbstyles.Tag }, `[${t}]`],
            ["span", 0],
            ["span", { class: bbstyles.Tag }, `[/${t}]`],
          ];
        }
        function I(t) {
          return {
            tag: `h${t}`,
            BBArgsToAttrs: (d) => ({ level: t, align: d.align || "left" }),
            AttrsToBBArgs: (d) => {
              let x = { tag: `h${d.level}`, args: {} };
              return (
                d.align &&
                  d.align != "left" &&
                  x.args &&
                  (x.args.align = d.align),
                x
              );
            },
          };
        }
        function E(t) {
          return {
            tag: `h${t}`,
            getAttrs(d) {
              return { level: t, align: d.style.textAlign || "left" };
            },
          };
        }
        const F = {
            paragraph: {
              attrs: { align: { default: "left" } },
              content: "inline*",
              group: "block",
              parseDOM: [
                {
                  tag: "p",
                  getAttrs(t) {
                    return { align: t.style.textAlign || "left" };
                  },
                },
              ],
              toDOM(t) {
                const d = { class: (0, S.A)("pm_paragraph", y().Paragraph) };
                return (
                  t.attrs.align &&
                    t.attrs.align != "left" &&
                    (d.style = `text-align: ${t.attrs.align}`),
                  ["p", d, 0]
                );
              },
              bbCode: {
                tag: "p",
                autocloses: !0,
                BBArgsToAttrs: (t) => ({ align: t.align }),
                AttrsToBBArgs: (t) => {
                  let d = { args: {} };
                  return (
                    t.align && t.align != "left" && (d.args.align = t.align), d
                  );
                },
              },
            },
            heading: {
              attrs: { level: { default: 1 }, align: { default: "left" } },
              content: "inline*",
              group: "block",
              defining: !0,
              parseDOM: [1, 2, 3, 4, 5].map(E),
              toDOM(t) {
                const d = {
                  class:
                    `BB_Header${t.attrs.level} ` +
                    y()[`Header${t.attrs.level}`],
                };
                return (
                  t.attrs.align &&
                    t.attrs.align != "left" &&
                    (d.style = `text-align: ${t.attrs.align}`),
                  ["h" + t.attrs.level, d, 0]
                );
              },
              bbCode: [1, 2, 3, 4, 5].map(I),
            },
            image: {
              inline: !0,
              attrs: {
                src: {},
                alt: { default: null },
                title: { default: null },
                style: { default: void 0 },
              },
              group: "inline",
              draggable: !0,
              parseDOM: [
                {
                  tag: "img[src]",
                  getAttrs(t) {
                    return {
                      src: t.getAttribute("src"),
                      title: t.getAttribute("title"),
                      alt: t.getAttribute("alt"),
                      style: t.getAttribute("style"),
                    };
                  },
                },
              ],
              toDOM(t) {
                const { src: d, alt: x, title: A, style: f } = t.attrs;
                return [
                  "img",
                  {
                    src: (0, w.J)(d),
                    alt: x,
                    title: A,
                    class: (0, S.A)(y().Image, {
                      [y().Image_Inline]: f === "inline",
                    }),
                  },
                ];
              },
              bbCode: {
                tag: "img",
                BBArgsToAttrs: (t) => {
                  var d;
                  return {
                    src: t.src,
                    style: (d = t.style) != null ? d : void 0,
                  };
                },
                AttrsToBBArgs: (t) => ({
                  args: { src: t.src, ...(t.style ? { style: t.style } : {}) },
                }),
                convertContentToAttr: "src",
              },
            },
            video: {
              inline: !0,
              attrs: {
                webm: { default: "" },
                mp4: { default: "" },
                poster: { default: "" },
                autoplay: { default: !0 },
                controls: { default: !1 },
              },
              group: "inline",
              draggable: !0,
              parseDOM: [
                {
                  tag: "video",
                  getAttrs(t) {
                    if (t.tagName !== "video") return;
                    const d = t;
                    let x = "",
                      A = "";
                    for (const f of d.querySelectorAll("source"))
                      f.type == "video/mp4"
                        ? (x = f.src)
                        : f.type == "video/webm" && (A = f.src);
                    return {
                      mp4: x,
                      webm: A,
                      poster: d.poster || "",
                      autoplay: !!d.autoplay,
                      controls: !!d.controls,
                    };
                  },
                },
              ],
              toDOM(t) {
                const {
                    webm: d,
                    mp4: x,
                    poster: A,
                    autoplay: f,
                    controls: b,
                  } = t.attrs,
                  g = [];
                return (
                  d &&
                    g.push([
                      "source",
                      { src: (0, w.J)(d), type: "video/webm" },
                    ]),
                  x &&
                    g.push(["source", { src: (0, w.J)(x), type: "video/mp4" }]),
                  [
                    "video",
                    {
                      poster: (0, w.J)(A),
                      autoPlay: !!f,
                      controls: !!b,
                      loop: !b && !!f,
                    },
                    ...g,
                  ]
                );
              },
              bbCode: {
                tag: "video",
                BBArgsToAttrs: (t) => ({
                  webm: t.webm,
                  mp4: t.mp4,
                  poster: t.poster,
                  autoplay: t.autoplay == "true",
                  controls: t.controls == "true",
                }),
                AttrsToBBArgs: (t) => ({
                  args: {
                    webm: t.webm || "",
                    mp4: t.mp4 || "",
                    poster: t.poster || "",
                    autoplay: t.autoplay ? "true" : "false",
                    controls: t.controls ? "true" : "false",
                  },
                }),
              },
            },
            bullet_list: {
              ...r.fF,
              content: "list_item+",
              group: "block",
              toDOM: B("ul", y().List),
              bbCode: { tag: "list" },
            },
            ordered_list: {
              ...r.o8,
              content: "list_item+",
              group: "block",
              toDOM: B("ol", y().OrderedList),
              bbCode: { tag: "olist" },
            },
            list_item: {
              ...r.Aw,
              content: "paragraph block*",
              toDOM: B("li", y().ListItem),
              bbCode: { tag: "*", autocloses: !0 },
            },
            code_block: {
              content: "inline*",
              marks: "",
              group: "block",
              code: !0,
              defining: !0,
              parseDOM: [{ tag: "pre", preserveWhitespace: "full" }],
              toDOM() {
                return [
                  "pre",
                  { class: y().CodeBlock },
                  ["code", { class: y().Code }, 0],
                ];
              },
              bbCode: { tag: "code" },
            },
          },
          N = {
            strong: {
              parseDOM: [
                { tag: "strong" },
                {
                  tag: "b",
                  getAttrs: (t) => t.style.fontWeight != "normal" && null,
                },
                {
                  style: "font-weight=400",
                  clearMark: (t) => t.type.name == "strong",
                },
                {
                  style: "font-weight",
                  getAttrs: (t) => /^(bold(er)?|[5-9]\d{2,})$/.test(t) && null,
                },
              ],
              toDOM: B("b", (0, S.A)("BB_Bold", y().Bold)),
              bbCode: { tag: "b" },
            },
            italic: {
              parseDOM: [
                { tag: "i" },
                { tag: "em" },
                { style: "font-style=italic" },
                {
                  style: "font-style=normal",
                  clearMark: (t) => t.type.name == "em",
                },
              ],
              toDOM: B("i", (0, S.A)("BB_Italic", y().Italic)),
              bbCode: { tag: "i" },
            },
            underline: {
              parseDOM: [{ tag: "u" }, { style: "text-decoration=underline" }],
              toDOM: B("u", (0, S.A)("BB_Underline", y().Underline)),
              bbCode: { tag: "u" },
            },
            strike: {
              parseDOM: [{ style: "text-decoration=line-through" }],
              toDOM: B("span", (0, S.A)("BB_Strike", y().Strike)),
              bbCode: { tag: "strike" },
            },
            code: {
              parseDOM: [{ tag: "code" }],
              toDOM: B("code", (0, S.A)("BB_Code", y().Code)),
              bbCode: { tag: "c" },
            },
            link: {
              attrs: { href: {}, title: { default: null } },
              inclusive: !1,
              parseDOM: [
                {
                  tag: "a[href]",
                  getAttrs(t) {
                    var d;
                    return {
                      href: (0, w.J)(
                        (d = t.getAttribute("href")) != null ? d : "",
                      ),
                      title: t.getAttribute("title"),
                    };
                  },
                },
              ],
              toDOM(t) {
                const { href: d, title: x } = t.attrs;
                return [
                  "a",
                  { href: (0, w.J)(d), title: x, class: "BB_Link" },
                  0,
                ];
              },
              bbCode: {
                tag: "url",
                BBArgsToAttrs: (t) => ({ href: t[""] }),
                AttrsToBBArgs: (t) => ({ args: { "": t.href } }),
                convertContentToAttr: "href",
              },
            },
          },
          j = { nodes: F, marks: N },
          p = {
            node: {},
            marks: {
              color: {
                attrs: { color: {} },
                parseDOM: [{ style: "color", getAttrs: (t) => ({ color: t }) }],
                toDOM(t) {
                  return [
                    "span",
                    {
                      style: `color: ${t.attrs.color}`,
                      class: (0, S.A)("BB_Color", y().Color),
                    },
                    0,
                  ];
                },
                bbCode: {
                  tag: "color",
                  BBArgsToAttrs: (t) => ({ color: t[""] }),
                  AttrsToBBArgs: (t) => ({ args: { "": t.color } }),
                },
                inclusive: !0,
                excludes: "",
              },
              bgcolor: {
                attrs: { color: {} },
                parseDOM: [
                  { style: "bgcolor", getAttrs: (t) => ({ color: t }) },
                ],
                toDOM(t) {
                  return [
                    "span",
                    {
                      style: `background-color: ${t.attrs.color}`,
                      class: (0, S.A)("BB_BGColor", y().BGColor),
                    },
                    0,
                  ];
                },
                bbCode: {
                  tag: "bgcolor",
                  BBArgsToAttrs: (t) => ({ color: t[""] }),
                  AttrsToBBArgs: (t) => ({ args: { "": t.color } }),
                },
                inclusive: !0,
                excludes: "",
              },
            },
          };
      },
      8561: (z, W, o) => {
        "use strict";
        o.d(W, { n: () => C, u: () => M });
        var r = o(38585),
          S = o(64868),
          w = o(98724),
          D = o(52893),
          y = o(8145),
          B = o(57053),
          k = o(71742),
          P = Object.defineProperty,
          I = (u, e, a) =>
            e in u
              ? P(u, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: a,
                })
              : (u[e] = a),
          E = (u, e, a) => I(u, typeof e != "symbol" ? e + "" : e, a);
        class F {
          constructor(e, a, n) {
            E(this, "m_nodes", []),
              E(this, "m_schema"),
              E(this, "m_bConvertNewlinesToBR"),
              E(this, "m_fnProcessText");
            var i;
            (this.m_schema = e),
              (this.m_bConvertNewlinesToBR =
                (i = a == null ? void 0 : a.bConvertNewlinesToBR) != null
                  ? i
                  : !1);
            const c = n && "mark" in n;
            this.m_fnProcessText = c || a == null ? void 0 : a.fnProcessText;
          }
          AppendText(e, a) {
            e.length &&
              (this.m_bConvertNewlinesToBR
                ? this.m_nodes.push(...this.GenerateBreaksForNewlines(e))
                : this.m_nodes.push(...this.TextNode(e)));
          }
          AppendNode(e) {
            this.m_nodes.push(e);
          }
          GetElements() {
            return this.m_nodes;
          }
          GenerateBreaksForNewlines(e) {
            const a = [];
            let n = 0;
            for (
              let i = e.indexOf(
                `
`,
                n,
              );
              i !== -1;
              i = e.indexOf(
                `
`,
                n,
              )
            )
              n != i && a.push(...this.TextNode(e.substring(n, i))),
                a.push(this.m_schema.nodes.hard_break.createChecked()),
                (n = i + 1);
            return n < e.length && a.push(...this.TextNode(e.substring(n))), a;
          }
          TextNode(e) {
            const a = this.m_fnProcessText && this.m_fnProcessText(e);
            return a || [this.m_schema.text(e)];
          }
        }
        function N(u) {
          return u
            .filter((e) => e.isText)
            .map((e) => e.text)
            .join();
        }
        function j(u) {
          let e = "";
          return (
            u.descendants((a) => {
              a.isText && (e += a.text);
            }),
            e
          );
        }
        class R extends y.Al {
          constructor(e, a) {
            var n;
            super(e.bbcode_dictionary, (i) => {
              const c =
                (i == null ? void 0 : i.tag) && e.bbcode_dictionary.get(i.tag);
              return new F(
                e.pm_schema,
                a,
                c && "Constructor" in c ? c.Constructor : void 0,
              );
            }),
              E(this, "m_schemaConfig"),
              E(this, "m_mapPMBBNodes", new Map()),
              E(this, "m_bUseBackslashEscapes"),
              (this.m_schemaConfig = e),
              (this.m_bUseBackslashEscapes =
                (n = a == null ? void 0 : a.bUseBackslashEscapes) != null
                  ? n
                  : !0),
              this.m_schemaConfig.bbcode_dictionary.forEach((i) => {
                "node" in i.Constructor &&
                  this.m_mapPMBBNodes.set(
                    i.Constructor.node.name,
                    i.Constructor,
                  );
              });
          }
          get schema() {
            return this.m_schemaConfig.pm_schema;
          }
          ParseBBCode(e) {
            const a = this.Parse(
              e,
              this.BBNodeToPMNode.bind(this),
              this.m_bUseBackslashEscapes,
            );
            return this.m_schemaConfig.pm_schema.topNodeType.createChecked(
              {},
              this.ConvertLineBreaksToParagraphs(B.FK.fromArray(a)),
            );
          }
          TryCreateNode(e, a, n) {
            let i = B.FK.from(a),
              c;
            if (
              !e.node.validContent(i) &&
              (e.node.isInline ||
                (i = B.FK.from(
                  a.filter((s) =>
                    s.isText && s.text.match(/^\s*$/)
                      ? !1
                      : !(
                          s.type == this.schema.nodes.hard_break &&
                          !e.node.validContent(B.FK.from(s))
                        ),
                  ),
                )),
              !e.node.validContent(i))
            ) {
              const s = e.acceptNode;
              c = [];
              let l = [],
                h = !1,
                _ = !1;
              for (let O = 0; O < i.childCount; O++) {
                const L = i.child(O),
                  U = B.FK.from(L),
                  K = e.node.validContent(U);
                !_ && (K || (s != null && s.validContent(U)))
                  ? (K || (h = !0), l.push(L))
                  : ((_ = !0), c.push(L));
              }
              if ((console.assert(!h || !!s), h && s)) {
                s.isBlock &&
                  l.length > 1 &&
                  l[l.length - 1].type == this.schema.nodes.hard_break &&
                  (l = l.slice(0, -1));
                const O = this.m_mapPMBBNodes.get(s.name);
                (0, k.wT)(
                  O,
                  `Indicated acceptNode type ${s.name} for ${e.node.name} missing`,
                );
                let L;
                try {
                  O
                    ? (L = this.TryCreateNode(O, l, void 0))
                    : (L = s.createChecked(void 0, l));
                } catch (U) {
                  console.error(U), (L = []), (c = [...l, ...c]);
                }
                i = B.FK.from(L);
              } else i = B.FK.from(l);
            }
            try {
              const s =
                e.node.createAndFill(n, i) || e.node.createChecked(n, i);
              return c ? [s, ...c] : s;
            } catch {
              return (
                (0, k.wT)(
                  !1,
                  `Invalid content for node type ${e.node.name}, removing and promoting children.`,
                ),
                a
              );
            }
          }
          BBNodeToPMNode(e, a, ...n) {
            let i = e.BBArgsToAttrs ? e.BBArgsToAttrs(a.args || {}) : void 0;
            try {
              if (
                ("convertContentToAttr" in e &&
                  e.convertContentToAttr &&
                  ((!i || !i[e.convertContentToAttr]) &&
                    (i = { ...(i || {}), [e.convertContentToAttr]: N(n) }),
                  "node" in e && (n = [])),
                "node" in e)
              )
                return this.TryCreateNode(e, n, i);
              {
                const c = e.mark.create(i);
                return n.map((s) => this.RecursivelyApplyMark(s, c));
              }
            } catch (c) {
              return (
                console.error(`Error parsing [${a.tagname}] tag: ${c}`, c), []
              );
            }
          }
          RecursivelyApplyMark(e, a) {
            if (e.isText || e.type.allowsMarkType(a.type))
              return e.mark([...e.marks, a]);
            {
              const n = [];
              return (
                e.descendants(
                  (i) => (n.push(this.RecursivelyApplyMark(i, a)), !1),
                ),
                e.type.create(e.attrs, n, e.marks)
              );
            }
          }
          ConvertLineBreaksToParagraphs(e) {
            const a = new Map(),
              n = this.m_schemaConfig.pm_schema;
            this.m_mapPMBBNodes.forEach((s) => {
              s.acceptNode && a.set(s.acceptNode.name, s.node);
            });
            const i = [],
              c = {
                nodes: [],
                nodeType: void 0,
                reset() {
                  (this.nodes = []), (this.nodeType = void 0);
                },
                accumulate(s, l) {
                  return (
                    this.nodeType && s != this.nodeType && this.emit(),
                    (this.nodeType = s),
                    this.nodes.push(l),
                    !0
                  );
                },
                emit(s = !1) {
                  const l = this.nodeType || (s ? n.nodes.paragraph : void 0);
                  l && (i.push(l.createChecked({}, this.nodes)), this.reset());
                },
              };
            return (
              e.forEach((s) => {
                const l = s.type == n.nodes.hard_break,
                  h = B.FK.from(s);
                if (l || n.topNodeType.validContent(h)) {
                  const _ = l && c.nodes.length > 0;
                  c.emit(),
                    l
                      ? _ || i.push(n.nodes.paragraph.createChecked())
                      : i.push(s);
                } else {
                  let _;
                  if (
                    (n.nodes.paragraph.validContent(h)
                      ? (_ = n.nodes.paragraph)
                      : (_ = a.get(s.type.name)),
                    _)
                  )
                    c.accumulate(_, s);
                  else {
                    (0, k.wT)(
                      !1,
                      `Couldn't accept ${s.type.name} at root of document, converting to paragraph`,
                    );
                    const O = j(s);
                    O && c.accumulate(n.nodes.paragraph, n.text(O));
                  }
                }
              }),
              (c.nodes.length || !i.length) && c.emit(!0),
              B.FK.from(i)
            );
          }
        }
        function T(u, e, a) {
          var n;
          const i = {
            schema: e.pm_schema,
            config: e.pm_to_bbcode_config,
            bUseBackslashEscapes:
              (n = a == null ? void 0 : a.bUseBackslashEscapes) != null
                ? n
                : !0,
          };
          return p(i, u, [], !1);
        }
        function p(u, e, a, n) {
          const { schema: i, config: c } = u;
          let s = e.marks,
            l = "";
          const h = c.mapNodes.get(e.type),
            { tag: _, args: O } = A(h, e);
          _ == "emoticon"
            ? (l += ":")
            : _ && (l += (0, y.CS)(_, O, h == null ? void 0 : h.bVerbatimArgs));
          const L = n || !!(h != null && h.bVerbatimContent);
          let U = !1;
          return (
            e.content.forEach((K) => {
              if (
                (([l, s] = d(c, s, K.marks, l)),
                ([l, s] = x(c, s, K.marks, l)),
                K.type.isText)
              ) {
                const V = K.text || "";
                l += L || !u.bUseBackslashEscapes ? V : (0, y.vE)(V);
              } else if (K.type == i.nodes.hard_break)
                l += `
`;
              else {
                const V = t(c, K);
                V &&
                  U &&
                  (l += `
`),
                  (l += p(u, K, s, L)),
                  (U = V);
                return;
              }
              U = !1;
            }),
            ([l] = d(c, s, a, l)),
            _ == "emoticon" ? (l += ":") : _ && (l += (0, y.op)(_)),
            l
          );
        }
        function t(u, e) {
          return e.type.isBlock && !A(u.mapNodes.get(e.type), e).tag;
        }
        function d(u, e, a, n) {
          const i = [];
          for (const s of e) a.indexOf(s) === -1 && i.push(s);
          if (!i.length) return [n, e];
          const c = e.slice();
          for (
            ;
            i.length &&
            ((0, k.wT)(c.length, "no marks left to close"), !!c.length);
          ) {
            const s = c.pop(),
              l = u.mapMarks.get(s.type),
              { tag: h } = f(l, s);
            n += (0, y.op)(h);
            const _ = i.indexOf(s);
            _ != -1 && i.splice(_, 1);
          }
          return [n, c];
        }
        function x(u, e, a, n) {
          let i;
          for (const c of a)
            if (e.indexOf(c) === -1) {
              i || (i = e.slice());
              const s = u.mapMarks.get(c.type);
              if (((0, k.wT)(s, "mark missing bbtag"), s)) {
                i.push(c);
                const { args: l, tag: h } = f(s, c);
                n += (0, y.CS)(h, l);
              }
            }
          return [n, i != null ? i : e];
        }
        function A(u, e) {
          if (u && u.AttrsToBBArgs) {
            const { tag: a = u.tag, args: n = {} } = u.AttrsToBBArgs(
              e.attrs,
              e,
            );
            return { tag: a, args: n };
          }
          return { tag: u == null ? void 0 : u.tag, args: {} };
        }
        function f(u, e) {
          if (u && u.AttrsToBBArgs) {
            const { tag: a = u.tag, args: n = {} } = u.AttrsToBBArgs(
              e.attrs,
              e,
            );
            return { tag: a, args: n };
          }
          return { tag: u == null ? void 0 : u.tag, args: {} };
        }
        var b = Object.defineProperty,
          g = (u, e, a) =>
            e in u
              ? b(u, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: a,
                })
              : (u[e] = a),
          v = (u, e, a) => g(u, typeof e != "symbol" ? e + "" : e, a);
        const m = new D.hs("CProseMirrorState - OnChange");
        class C {
          constructor(e, a, n, i) {
            v(this, "m_bbcode"),
              v(this, "m_currentDoc"),
              v(this, "m_bHasUncomittedChanges", !1),
              v(this, "m_schemaConfig"),
              v(this, "m_bbcodeParser"),
              v(this, "m_bUseBackslashEscapes"),
              v(this, "m_onStateChangedCallbacks", new r.l()),
              v(this, "m_fnCommitChanges"),
              v(this, "m_view"),
              v(this, "m_state");
            const { parser: c, bUseBackslashEscapes: s = !0 } =
              i != null ? i : {};
            (this.m_schemaConfig = e),
              (this.m_bUseBackslashEscapes = s),
              (this.m_bbcodeParser = new R(e, {
                ...c,
                bUseBackslashEscapes: s,
              })),
              (this.m_bbcode = a),
              (this.m_fnCommitChanges = n),
              (this.m_state = this.ConstructState());
          }
          CommitChanges() {
            this.m_currentDoc &&
              this.m_bHasUncomittedChanges &&
              ((this.m_bbcode = T(this.m_currentDoc, this.m_schemaConfig, {
                bUseBackslashEscapes: this.m_bUseBackslashEscapes,
              })),
              this.m_fnCommitChanges(this.m_bbcode, this.m_currentDoc),
              (this.m_bHasUncomittedChanges = !1));
          }
          BHasUncomittedChanges() {
            return this.m_bHasUncomittedChanges;
          }
          UpdateState(e) {
            var a;
            const n = e(
              ((a = this.m_view) == null ? void 0 : a.state.tr) ||
                this.m_state.tr,
            );
            !n ||
              !n.docChanged ||
              (this.m_view
                ? this.m_view.dispatch(n)
                : (this.m_state = this.m_state.apply(n)));
          }
          get state() {
            return this.m_state;
          }
          get schemaConfig() {
            return this.m_schemaConfig;
          }
          get bbcodeParser() {
            return this.m_bbcodeParser;
          }
          get OnStateChangedCallbacks() {
            return this.m_onStateChangedCallbacks;
          }
          ConstructState() {
            const e = new D.k_({
                key: m,
                view: (n) => (
                  console.assert(!this.m_view),
                  (this.m_view = n),
                  {
                    update: (i, c) => this.OnStateChange(c, i.state),
                    destroy: () => (this.m_view = void 0),
                  }
                ),
              }),
              a = [(0, w.b6)(), e];
            return D.$t.create({
              schema: this.m_schemaConfig.pm_schema,
              doc: this.m_bbcodeParser.ParseBBCode(this.m_bbcode),
              plugins: a,
            });
          }
          InstallPlugin(e) {
            var a;
            const n = this.m_view ? this.m_view.state : this.m_state;
            return (
              n.plugins.includes(e) ||
                ((this.m_state = n.reconfigure({ plugins: [...n.plugins, e] })),
                (a = this.m_view) == null || a.updateState(this.m_state)),
              () => {
                var i;
                const c = this.m_view ? this.m_view.state : this.m_state;
                (this.m_state = c.reconfigure({
                  plugins: c.plugins.filter((s) => s != e),
                })),
                  (i = this.m_view) == null || i.updateState(this.m_state);
              }
            );
          }
          OnStateChange(e, a) {
            (this.m_state = a),
              e.doc &&
                e.doc != a.doc &&
                ((this.m_currentDoc = a.doc),
                (this.m_bHasUncomittedChanges = !0),
                this.m_onStateChangedCallbacks.Dispatch(
                  this.m_currentDoc,
                  e.doc,
                ));
          }
          ReplaceDocument(e) {
            this.m_bbcode != e &&
              this.UpdateState((a) => {
                this.m_bbcode = e;
                const n = this.m_bbcodeParser.ParseBBCode(e);
                return (
                  (a = this.m_state.tr
                    .replaceWith(0, this.m_state.doc.content.size, n)
                    .scrollIntoView()),
                  a
                );
              });
          }
        }
        function M(u, e) {
          (0, S.hL)(u == null ? void 0 : u.OnStateChangedCallbacks, e);
        }
      },
      74827: (z, W, o) => {
        "use strict";
        o.d(W, {
          Cd: () => y,
          OX: () => R,
          bQ: () => T,
          gj: () => P,
          vn: () => B,
          wt: () => F,
        });
        var r = o(79216),
          S = o(52893);
        function w(p, t) {
          const d = p.state;
          if (!p.state.plugins.includes(t)) {
            const x = [...p.state.plugins, t];
            p.updateState(d.reconfigure({ plugins: x }));
          }
        }
        function D(p, t) {
          if (!p.isDestroyed) {
            const d = p.state,
              x = d.plugins.filter((A) => A !== t);
            p.updateState(d.reconfigure({ plugins: x }));
          }
        }
        function y(p, t) {
          const { from: d, $from: x, to: A, empty: f } = p.selection;
          return f
            ? !!t.isInSet(p.storedMarks || x.marks())
            : p.doc.rangeHasMark(d, A, t);
        }
        function B(p, t, d) {
          var x;
          const { parent: A } = d,
            f = A.childAfter(d.parentOffset),
            b =
              (x = f.node) == null ? void 0 : x.marks.find((u) => u.type == t);
          if (!b) return;
          let g = d.index() - 1,
            v = d.start() + f.offset;
          for (; g >= 0 && b.isInSet(A.child(g).marks); )
            (v -= A.child(g).nodeSize), (g -= 1);
          let m = d.index() + 1,
            C = d.start() + f.offset + f.node.nodeSize;
          for (; m < A.childCount && b.isInSet(A.child(m).marks); )
            (C += A.child(m).nodeSize), (m += 1);
          const M = p.doc.slice(v, C);
          return { from: v, to: C, slice: M, mark: b };
        }
        function k(p, t, d) {
          if (p.type !== t) return !1;
          if (d === void 0) return !0;
          for (const x in d) if (d[x] !== p.attrs[x]) return !1;
          return !0;
        }
        function P(p, t, d) {
          let { $from: x, to: A } = p.selection;
          for (let f = x.depth; f > 0; f--) {
            if (A > x.end(f)) return !1;
            const b = x.node(f);
            if (k(b, t, d)) return !0;
          }
          return !1;
        }
        function I(p, t, d) {
          for (let x of t) if (P(p, x, d)) return x;
          return null;
        }
        function E(p, t, d) {
          const { $from: x, to: A } = p.selection;
          for (let f = x.sharedDepth(A); f > 0; f--) {
            const b = x.node(f);
            if (b.type === t) return !!b.attrs[d];
          }
          return !1;
        }
        function F(p, t, d) {
          const { $from: x, to: A } = p.selection;
          for (let f = x.sharedDepth(A); f > 0; f--) {
            const b = x.node(f);
            if (d === void 0 ? b.type === t : b.hasMarkup(t, d))
              return x.before(f);
          }
        }
        function N(p, t) {
          return (d, x) => {
            const A = F(d, p);
            if (A === void 0) return !1;
            if (x) {
              const f = d.doc.nodeAt(A);
              if ((console.assert(!!f), !f)) return !1;
              x(d.tr.setNodeMarkup(A, p, { ...f.attrs, [t]: !f.attrs[t] }));
            }
            return !0;
          };
        }
        function j(p, t) {
          return (d, x) => {
            const { $from: A } = d.selection;
            let f = null,
              b = 0;
            for (let g = A.depth; g > 0; g--) {
              const v = A.node(g);
              if (p.includes(v.type)) {
                (f = v), (b = A.before(g));
                break;
              }
            }
            return f
              ? (x && x(d.tr.setNodeMarkup(b, f.type, { ...f.attrs, ...t })),
                !0)
              : !1;
          };
        }
        function R(p, t, d = {}) {
          return new r.fV(p, (x, A, f, b) => {
            const g = d instanceof Function ? d(A) : d,
              v = x.tr;
            if (A[1]) {
              const m = f + A[0].indexOf(A[1]),
                C = m + A[1].length;
              C < b && v.delete(C, b),
                m > f && v.delete(f, m),
                (b = f + A[1].length);
            }
            return v.addMark(f, b, t.create(g)), v.removeStoredMark(t), v;
          });
        }
        function T(p, t, d) {
          const x = { left: t, top: d },
            A = p.posAtCoords(x);
          if (A != null && A.pos) {
            const f = p.state.doc.resolve(A.pos);
            p.dispatch(p.state.tr.setSelection(S.U3.near(f)));
          }
        }
      },
      28922: (z, W, o) => {
        "use strict";
        o.d(W, { s: () => N });
        var r = o(7850),
          S = o(39905),
          w = o(90626),
          D = o(61257),
          y = o(19316),
          B = o(56718),
          k = o(71421),
          P = o(27828),
          I = o.n(P);
        function E(j) {
          return `rgba(${j.rgb.r}, ${j.rgb.g}, ${j.rgb.b}, ${j.rgb.a})`;
        }
        function F(j) {
          const R = parseInt(j.slice(1), 16),
            T = (R >> 16) & 255,
            p = (R >> 8) & 255,
            t = R & 255;
          return `rgba(${T}, ${p}, ${t}, 1)`;
        }
        function N(j) {
          const { color: R, onChange: T, strTitle: p, disableAlpha: t } = j,
            [d, x] = (0, w.useState)(() => R || "rgba(255, 255, 255, 1)"),
            A = (0, w.useCallback)(async () => {
              if (!("EyeDropper" in window)) {
                alert(S.Z.Localize("#Sale_EyeDropperError"));
                return;
              }
              try {
                const g = (await new window.EyeDropper().open()).sRGBHex,
                  v = F(g);
                x(v), T(v);
              } catch (f) {
                console.warn(S.Z.Localize("#Sale_EyeDropperFailed"), f);
              }
            }, [T]);
          return (0, r.jsxs)("div", {
            className: I().ColorPickerDialog,
            children: [
              !!p && (0, r.jsx)(y.JU, { children: p }),
              (0, r.jsx)(D.xk, {
                onChange: (f) => {
                  const b = E(f);
                  x(b), T(b);
                },
                color: d,
                disableAlpha: t,
                className: I().ColorPickerCtn,
              }),
              (0, r.jsx)("div", {
                className: I().EyeDropperCtn,
                children: (0, r.jsx)(k.Gq, {
                  toolTipContent: S.Z.Localize("#Sale_BackgroundColorPicker"),
                  children: (0, r.jsx)(y.$n, {
                    className: I().EyeDropperBtn,
                    onClick: A,
                    children: (0, r.jsx)(B.O7b, {}),
                  }),
                }),
              }),
            ],
          });
        }
      },
      81973: (z, W, o) => {
        "use strict";
        o.d(W, { X: () => I, w: () => B });
        var r = o(33645),
          S = o.n(r),
          w = o(38539),
          D = o(84419),
          y = o(36707);
        const B = { NoBorder: "noborder", EqualCells: "equalcells" },
          k = w.of({
            tableGroup: "block",
            cellContent: "paragraph block*",
            cellAttributes: {
              class: {
                default: S().TableCell,
                setDOMAttr: (E, F) => {
                  F.class = E;
                },
              },
            },
          }),
          P = {
            BBArgsToAttrs: (E) => {
              const F = {};
              return (
                E.colspan && (F.colspan = parseInt(E.colspan)),
                E.rowspan && (F.rowspan = parseInt(E.rowspan)),
                E.colwidth &&
                  (F.colwidth = E.colwidth.split(",").map((N) => parseInt(N))),
                F
              );
            },
            AttrsToBBArgs: (E) => {
              const F = {};
              return (
                E.colspan &&
                  E.colspan != 1 &&
                  (F.colspan = E.colspan.toString()),
                E.rowspan &&
                  E.rowspan != 1 &&
                  (F.rowspan = E.rowspan.toString()),
                E.colwidth && (F.colwidth = E.colwidth.join(",")),
                { args: F }
              );
            },
          },
          I = {
            table: {
              ...k.table,
              toDOM: (E) =>
                (0, D.ce)(
                  "table",
                  (0, y.A)(
                    S().Table,
                    E.attrs.noborder && S().NoBorder,
                    E.attrs.equalcells && S().EqualCells,
                  ),
                  ["tbody", 0],
                ),
              attrs: {
                [B.NoBorder]: { default: !1 },
                [B.EqualCells]: { default: !0 },
              },
              bbCode: {
                tag: "table",
                BBArgsToAttrs: (E) => ({
                  noborder: !!E.noborder,
                  equalcells: !!E.equalcells,
                }),
                AttrsToBBArgs: (E, F) => {
                  const N = {};
                  E.noborder && (N.noborder = "1"),
                    E.equalcells && (N.equalcells = "1");
                  const j = F.child(0);
                  if (j) {
                    let R = [];
                    for (let T = 0; T < j.childCount; T++) {
                      const p = j.child(T).attrs;
                      p.colwidth ? R.push(...p.colwidth) : R.push(void 0);
                    }
                    N.colwidth = R.join(",");
                  }
                  return { args: N };
                },
              },
            },
            table_row: {
              ...k.table_row,
              toDOM: (0, D.BM)("tr", S().TableRow),
              bbCode: { tag: "tr" },
            },
            table_cell: { ...k.table_cell, bbCode: { ...P, tag: "td" } },
            table_header: { ...k.table_header, bbCode: { ...P, tag: "th" } },
          };
      },
      38348: (z, W, o) => {
        "use strict";
        o.d(W, { _: () => y });
        var r = o(7850),
          S = o(90626),
          w = o(19316),
          D = o(88003);
        function y(B) {
          const {
              closeModal: k,
              strTitle: P,
              onOK: I,
              strOKText: E,
              onCancel: F,
              strCancelText: N,
              bOKDisabled: j,
              bCancelDisabled: R,
              strClassNameContent: T = "GenericFormDialog",
              children: p,
            } = B,
            t = S.useCallback(() => {
              F && F(), k();
            }, [F, k]),
            d = R ? () => {} : t;
          return (0, r.jsx)(D.x_, {
            onEscKeypress: d,
            children: (0, r.jsxs)(w.U9, {
              onSubmit: I,
              classNameContent: T,
              children: [
                (0, r.jsx)(w.Y9, { children: P }),
                p,
                (0, r.jsx)(w.wi, {
                  children: (0, r.jsx)(w.CB, {
                    strOKText: E,
                    bOKDisabled: j,
                    onCancel: d,
                    strCancelText: N,
                    bCancelDisabled: R,
                  }),
                }),
              ],
            }),
          });
        }
      },
      15210: (z, W, o) => {
        "use strict";
        o.d(W, { J: () => t });
        var r = o(7850),
          S = o(74827),
          w = o(52893),
          D = o(90626),
          y = o(64388),
          B = o(28922),
          k = o(19298),
          P = o(64238),
          I = o(88376),
          E = o.n(I),
          F = o(66243),
          N = o(36118);
        function j(f) {
          const {
            strTitle: b,
            strDescription: g,
            className: v,
            children: m,
            navID: C,
            ...M
          } = f;
          return jsxs(ModalDialog, {
            className: classNames(v, styles.ModalConfirmDialog),
            onClose: M.onClose,
            navID: C,
            children: [
              b &&
                jsxs(Panel, {
                  className: styles.Header,
                  children: [
                    jsx("h2", { children: b }),
                    jsx("button", {
                      onClick: M.onClose,
                      children: jsx(SVG.X_Line_Better, {}),
                    }),
                  ],
                }),
              g &&
                jsx(Panel, {
                  className: styles.Description,
                  children: jsx("div", { children: g }),
                }),
              m,
              jsx(R, { ...M }),
            ],
          });
        }
        function R(f) {
          const { strOKLabel: b, strCancelLabel: g, onOK: v, onClose: m } = f;
          return (0, r.jsxs)(k.Z, {
            className: E().Buttons,
            children: [
              !!b &&
                (0, r.jsx)(F.n9, { onClick: v != null ? v : m, children: b }),
              !!g && (0, r.jsx)(F.Oh, { onClick: m, children: g }),
            ],
          });
        }
        var T = o(2801),
          p = o(18210);
        function t(f, b, g) {
          const [v, m] = D.useState(void 0),
            C = D.useRef(null),
            M = D.useCallback(
              (a) => {
                C.current = a;
                const { state: n } = a,
                  i = n.selection;
                let { from: c, to: s, empty: l } = i;
                const h = b ? f.marks.color : f.marks.bgcolor;
                let _ = "",
                  O = "";
                const L = l ? i.$from : n.doc.resolve(c),
                  U = (0, S.vn)(n, h, L),
                  K = !!U;
                K
                  ? ((_ = U.mark.attrs.color),
                    l
                      ? ((O = U.slice.content.textBetween(
                          0,
                          U.slice.content.size,
                        )),
                        (c = U.from),
                        (s = U.to))
                      : ((c = Math.max(U.from, c)),
                        (s = Math.min(U.to, s)),
                        (O = U.slice.content.textBetween(
                          c - U.from,
                          s - U.from,
                        ))))
                  : l || (O = n.doc.cut(c, s).textContent);
                let V = {};
                if (g)
                  for (const H in g) {
                    const $ = g[H],
                      G = U ? $.fnReadValue(U.mark) : $.defaultValue;
                    V[H] = G;
                  }
                m({
                  viewRef: C,
                  strColor: _,
                  strTargetText: O,
                  bIsUpdate: K,
                  addtlAttrs: g,
                  addtlAttrsValues: V,
                  from: c,
                  to: s,
                });
              },
              [g, b, f.marks.bgcolor, f.marks.color],
            ),
            u = D.useCallback(() => {
              const a = C.current;
              window.setTimeout(() => {
                a && !a.isDestroyed && a.focus();
              }, 1),
                m(void 0);
            }, []),
            e =
              v &&
              (0, r.jsx)(T.EN, {
                active: !0,
                children: (0, r.jsx)(A, {
                  schema: f,
                  bColor: b,
                  closeModal: u,
                  ...v,
                }),
              });
          return [M, e];
        }
        function d(f) {
          if (f.startsWith("rgb")) {
            const b = f.match(/\d+/g);
            if (!b || b.length < 3) return "#000000";
            const [g, v, m] = b.map(Number);
            return (
              "#" +
              [g, v, m]
                .map((C) => {
                  const M = C.toString(16);
                  return M.length === 1 ? "0" + M : M;
                })
                .join("")
            );
          }
          return f;
        }
        function x(f) {
          const b = f.match(
            /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)$/i,
          );
          if (b) {
            let [, g, v, m, C] = b;
            const M = parseInt(g, 10),
              u = parseInt(v, 10),
              e = parseInt(m, 10);
            return `#${((1 << 24) + (M << 16) + (u << 8) + e).toString(16).slice(1)}`;
          }
          return "#7e3232";
        }
        const A = D.memo(function (b) {
          const {
              schema: g,
              strColor: v,
              bIsUpdate: m,
              strTargetText: C,
              bColor: M,
              addtlAttrs: u,
              addtlAttrsValues: e,
              closeModal: a,
              viewRef: n,
              from: i,
              to: c,
            } = b,
            [s, l] = D.useState(v),
            h = D.useRef(null),
            [_, O] = D.useState(e),
            L = D.useCallback(() => {
              try {
                const V = n.current;
                if (!V || V.isDestroyed) {
                  console.warn(
                    "Editor view is destroyed; skipping color insert",
                  );
                  return;
                }
                const { state: H, dispatch: $ } = V,
                  G = M ? g.marks.color : g.marks.bgcolor;
                if (!G) {
                  console.log("debug: no markType");
                  return;
                }
                if (!s || !/^#[0-9a-fA-F]{6}$/.test(s)) {
                  console.log("debug: invalid color text: " + s);
                  return;
                }
                const J = Math.max(0, Math.min(i, H.doc.content.size)),
                  Q = Math.max(0, Math.min(c, H.doc.content.size));
                if (J > Q) {
                  console.error("Invalid selection range:", i, c);
                  return;
                }
                const Y = G.create({ color: s, ..._ });
                let Z = H.tr;
                i === c
                  ? (Z = Z.addStoredMark(Y))
                  : ((Z = Z.removeMark(i, c, G)),
                    (Z = Z.addMark(i, c, Y)),
                    (Z = Z.setSelection(w.U3.create(Z.doc, c)))),
                  $(Z.scrollIntoView());
              } catch (V) {
                console.error(V);
              } finally {
                requestAnimationFrame(() => a());
              }
            }, [_, M, a, s, i, g.marks.bgcolor, g.marks.color, c, n]);
          D.useLayoutEffect(() => {
            var V, H, $;
            (H = (V = h.current) == null ? void 0 : V.value) != null && H.length
              ? h.current.focus()
              : ($ = h.current) == null || $.focus();
          }, []);
          const U = (0, p.we)(
              M ? "#FormattingToolbar_Color" : "#FormattingToolbar_BgColor",
            ),
            K = m
              ? (0, p.we)("#Button_Save")
              : (0, p.we)(
                  M ? "#FormattingToolbar_Color" : "#FormattingToolbar_BgColor",
                );
          return (0, r.jsxs)(y.s, {
            onClose: a,
            strTitle: U,
            children: [
              (0, r.jsx)(B.s, {
                color: s,
                disableAlpha: !0,
                onChange: (V) => l(x(V)),
              }),
              (0, r.jsx)(R, {
                strOKLabel: K,
                strCancelLabel: (0, p.we)("#Button_Cancel"),
                onOK: () => {
                  s && s.length > 0 && L();
                },
                onClose: a,
              }),
            ],
          });
        });
      },
      12293: (z, W, o) => {
        "use strict";
        o.d(W, { E: () => I });
        var r = o(7850),
          S = o(74827),
          w = o(52893),
          D = o(90626),
          y = o(19316),
          B = o(2801),
          k = o(38348),
          P = o(18210);
        function I(j, R) {
          const [T, p] = D.useState(void 0),
            t = D.useCallback(
              (f) => {
                const b = f.state.selection;
                let g = "",
                  v = "",
                  { from: m, to: C } = b;
                const M = (0, S.vn)(f.state, j.marks.link, b.$from),
                  u = !!M;
                M
                  ? ((v = M.mark.attrs.href),
                    b.empty
                      ? ((g = M.slice.content.textBetween(
                          0,
                          M.slice.content.size,
                        )),
                        (m = M.from),
                        (C = M.to))
                      : ((m = Math.max(M.from, b.from)),
                        (C = Math.min(M.to, b.to)),
                        (g = M.slice.content.textBetween(
                          m - M.from,
                          C - M.from,
                        ))))
                  : f.state.selection.empty ||
                    ((g = f.state.doc.cut(
                      f.state.selection.from,
                      f.state.selection.to,
                    ).textContent),
                    g.match(/^https?:\/\//) && (v = g));
                let e = {};
                if (R)
                  for (const a in R) {
                    const n = R[a],
                      i = M ? n.fnReadValue(M.mark) : n.defaultValue;
                    e[a] = i;
                  }
                p({
                  view: f,
                  strLinkText: g,
                  strLinkHref: v,
                  bIsUpdate: u,
                  addtlAttrs: R,
                  addtlAttrsValues: e,
                  from: m,
                  to: C,
                });
              },
              [j.marks.link, R],
            ),
            d = T == null ? void 0 : T.view,
            x = D.useCallback(() => {
              window.setTimeout(() => d.focus(), 1), p(void 0);
            }, [d]),
            A =
              T &&
              (0, r.jsx)(B.EN, {
                active: !0,
                children: (0, r.jsx)(E, { schema: j, closeModal: x, ...T }),
              });
          return [t, A];
        }
        const E = D.memo(function (R) {
          const {
              schema: T,
              strLinkText: p,
              strLinkHref: t,
              bIsUpdate: d,
              addtlAttrs: x,
              addtlAttrsValues: A,
              closeModal: f,
              view: b,
              from: g,
              to: v,
            } = R,
            [m, C] = D.useState(p),
            [M, u] = D.useState(t),
            e = D.useRef(null),
            a = D.useRef(null),
            [n, i] = D.useState(A),
            c = () => {
              var h;
              let _ = b.state.tr;
              const O = { href: M };
              for (const K in n) O[K] = n[K];
              const L = (h = T.marks.link) == null ? void 0 : h.create(O),
                U = T.text(m || M, [L]);
              try {
                (_ = _.replaceRangeWith(g, v, U)),
                  (_ = _.setSelection(
                    w.U3.create(_.doc, g + U.nodeSize, g + U.nodeSize),
                  )),
                  b.dispatch(_);
              } catch (K) {
                console.error("Error during link insertion", K);
              }
              f();
            };
          D.useLayoutEffect(() => {
            var h, _, O, L, U;
            (_ = (h = e.current) == null ? void 0 : h.value) != null && _.length
              ? (L = (O = a.current) == null ? void 0 : O.value) != null &&
                L.length
                ? (e.current.Focus(), e.current.element.select())
                : a.current.Focus()
              : (U = e.current) == null || U.Focus();
          }, []);
          const s = d
              ? (0, P.we)("#FormattingToolbar_EditLink")
              : (0, P.we)("#FormattingToolbar_InsertLink"),
            l = d
              ? (0, P.we)("#Button_Save")
              : (0, P.we)("#FormattingToolbar_InsertLink");
          return (0, r.jsxs)(k._, {
            onOK: c,
            closeModal: f,
            strTitle: s,
            strOKText: l,
            bOKDisabled: M.length == 0,
            children: [
              (0, r.jsx)(y.pd, {
                ref: e,
                value: m,
                onChange: (h) => C(h.currentTarget.value),
                label: (0, P.we)("#FormattingToolbar_LinkText"),
              }),
              (0, r.jsx)(y.pd, {
                ref: a,
                value: M,
                placeholder: "https://",
                onChange: (h) => u(h.currentTarget.value),
                label: (0, P.we)("#FormattingToolbar_LinkAddress"),
                mustBeURL: !0,
              }),
              x && (0, r.jsx)(F, { addtlAttrs: x, values: n, setValues: i }),
            ],
          });
        });
        function F(j) {
          const { addtlAttrs: R, values: T, setValues: p } = j;
          return (0, r.jsx)(r.Fragment, {
            children: Object.keys(R).map((t) =>
              (0, r.jsx)(
                N,
                {
                  attrName: t,
                  fnRender: R[t].fnRenderEditor,
                  value: T[t],
                  setValues: p,
                },
                t,
              ),
            ),
          });
        }
        const N = D.memo(function (R) {
          const { attrName: T, fnRender: p, value: t, setValues: d } = R,
            x = D.useCallback((A) => d((f) => ({ ...f, [T]: A })), [T, d]);
          return p(t, x);
        });
      },
      83085: (z, W, o) => {
        "use strict";
        o.d(W, { Xv: () => f, pw: () => b });
        var r = o(7850),
          S = o(71742),
          w = o(74432),
          D = o(19565),
          y = o(52893),
          B = o(29287),
          k = o(90626);
        function P(c, s = "PlaceholderPlugin") {
          const [l, h] = k.useState([]),
            [_] = k.useState(
              () =>
                new y.k_({
                  key: new y.hs(s),
                  state: {
                    init() {
                      return B.zF.empty;
                    },
                    apply(H, $) {
                      $ = $.map(H.mapping, H.doc);
                      const G = H.getMeta(this) || [];
                      for (const J of G)
                        if (J != null && J.add) {
                          const { id: Q, data: Y } = J.add,
                            Z = (q, tt) => {
                              const X = document.createElement(c);
                              return (
                                h((st) => [
                                  ...st,
                                  { id: Q, element: X, data: Y },
                                ]),
                                X
                              );
                            },
                            et = (q) => {
                              h((tt) => tt.filter((X) => X.element != q));
                            },
                            ot = B.NZ.widget(J.add.pos, Z, {
                              id: Q,
                              destroy: et,
                            });
                          $ = $.add(H.doc, [ot]);
                        } else
                          J != null &&
                            J.remove &&
                            ($ = $.remove(
                              $.find(
                                void 0,
                                void 0,
                                (Q) => Q.id == J.remove.id,
                              ),
                            ));
                      return $;
                    },
                  },
                  props: {
                    decorations(H) {
                      return this.getState(H);
                    },
                  },
                }),
            );
          (0, D.c$)(_);
          const O = (0, D.Hd)(),
            L = k.useRef(0),
            U = k.useCallback(
              (H, $, G) => {
                const J = `${s}_${L.current++}`;
                let Q = G || O.state.tr;
                $ === void 0 &&
                  (Q.selection.empty || Q.deleteSelection(),
                  ($ = Q.selection.from));
                const Y = (G == null ? void 0 : G.getMeta(_)) || [];
                return (
                  Q.setMeta(_, [...Y, { add: { id: J, pos: $, data: H } }]),
                  G || O.dispatch(Q),
                  J
                );
              },
              [_, s, O],
            ),
            K = k.useCallback(
              (H) => {
                const $ = _.getState(O.state),
                  G =
                    $ == null
                      ? void 0
                      : $.find(void 0, void 0, (J) => J.id == H);
                return G != null && G.length ? G[0].from : void 0;
              },
              [O, _],
            ),
            V = k.useCallback(
              (H, $) => {
                const G = K(H);
                return G
                  ? ($
                      ? O.dispatch(
                          O.state.tr
                            .replaceWith(G, G, $)
                            .setMeta(_, [{ remove: { id: H } }]),
                        )
                      : O.dispatch(
                          O.state.tr.setMeta(_, [{ remove: { id: H } }]),
                        ),
                    !0)
                  : !1;
              },
              [_, K, O],
            );
          return {
            placeholderElements: l,
            createPlaceholder: U,
            findPlaceholder: K,
            replacePlaceholder: V,
          };
        }
        var I = o(72739),
          E = o(1880),
          F = o(69168),
          N = o(85599),
          j = o(8323),
          R = o(18210),
          T = o(95603),
          p = o(64868),
          t = o(73309),
          d = Object.defineProperty,
          x = (c, s, l) =>
            s in c
              ? d(c, s, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: l,
                })
              : (c[s] = l),
          A = (c, s, l) => x(c, typeof s != "symbol" ? s + "" : s, l);
        function f(c) {
          const {
              children: s,
              ProcessFileUpload: l,
              FetchImageURL: h,
              bAllowImageHotLinking: _ = !1,
            } = c,
            [O] = k.useState(() => ({ manager: new C(l, h, _) })),
            { manager: L } = O;
          return (
            L.SetProps(l, h, _),
            (0, r.jsxs)(u.Provider, {
              value: O,
              children: [
                (0, r.jsx)(a, { manager: L }),
                (0, r.jsx)(n, { manager: L, children: s }),
              ],
            })
          );
        }
        const b = k.memo(function (s) {
          const { nodeType: l } = s,
            h = e(),
            {
              placeholderElements: _,
              createPlaceholder: O,
              replacePlaceholder: L,
            } = P("span", "FileUploadPlaceholder");
          i(h, l);
          const U = (0, D.Hd)();
          return (
            k.useEffect(() => h.RegisterEditor(U, O, L), [h, U, O, L]),
            (0, r.jsx)(r.Fragment, {
              children: _.map(({ id: K, element: V, data: H }) =>
                (0, r.jsx)(m, { element: V, data: H }, K),
              ),
            })
          );
        });
        function g(c, s) {
          const l = e(),
            h = React.useCallback(
              (_) => {
                for (const O of _) l.UploadFile(O);
                c && c();
              },
              [l, c],
            );
          return useBrowseForFilesDialog(h, { multiple: !0, accept: s });
        }
        class v extends Error {
          constructor(s) {
            super(s);
          }
        }
        function m(c) {
          const { element: s, data: l } = c,
            h = "file" in l ? l.file : void 0,
            _ = k.useMemo(() => h && URL.createObjectURL(h), [h]),
            O = "url" in l ? l.url : _,
            L = h == null ? void 0 : h.type.startsWith("video/");
          return I.createPortal(
            (0, r.jsxs)("span", {
              className: t.FileUploadPlaceholder,
              children: [
                (0, r.jsx)("div", {
                  className: t.ThrobberCtn,
                  children: (0, r.jsxs)("div", {
                    className: t.ThrobberRow,
                    children: [
                      (0, r.jsx)("div", {
                        className: t.Throbber,
                        children: (0, r.jsx)(N.t, {
                          size: "medium",
                          position: "center",
                        }),
                      }),
                      (0, R.we)("#Prosemirror_FileUpload_Uploading"),
                    ],
                  }),
                }),
                !L && (0, r.jsx)("img", { src: O, className: t.PendingImage }),
                L &&
                  (0, r.jsx)("video", {
                    src: O,
                    className: t.PendingImage,
                    muted: !0,
                    loop: !0,
                    playsInline: !0,
                    autoPlay: !0,
                  }),
              ],
            }),
            s,
          );
        }
        class C {
          constructor(s, l, h) {
            A(this, "m_fnProcessFileUpload"),
              A(this, "m_fnFetchImageURL"),
              A(this, "m_bAllowImageHotLinking"),
              A(this, "m_errors", (0, j.Jc)([])),
              A(this, "m_view"),
              A(this, "m_fnCreatePlaceholder"),
              A(this, "m_fnReplacePlaceholder"),
              (this.m_fnProcessFileUpload = s),
              (this.m_fnFetchImageURL = l),
              (this.m_bAllowImageHotLinking = h);
          }
          SetProps(s, l, h) {
            (this.m_fnProcessFileUpload = s),
              (this.m_fnFetchImageURL = l),
              (this.m_bAllowImageHotLinking = h),
              (0, S.wT)(
                !this.m_fnFetchImageURL || !this.m_bAllowImageHotLinking,
                "Not expected to have a URL fetch function and allow hotlinking.  URL fetch function will not be called.",
              );
          }
          RegisterEditor(s, l, h) {
            return (
              (0, S.wT)(!this.m_view, "Duplicate registration"),
              (this.m_view = s),
              (this.m_fnCreatePlaceholder = l),
              (this.m_fnReplacePlaceholder = h),
              () => {
                this.m_view == s &&
                  this.m_fnCreatePlaceholder == l &&
                  this.m_fnReplacePlaceholder == h &&
                  ((this.m_view = void 0),
                  (this.m_fnCreatePlaceholder = void 0),
                  (this.m_fnReplacePlaceholder = void 0));
              }
            );
          }
          AddError(s) {
            this.m_errors.Set([...this.m_errors.Value, s]);
          }
          GetErrors() {
            return this.m_errors;
          }
          ClearErrors() {
            this.m_errors.Set([]);
          }
          GetViewPosition(s, l) {
            var h;
            const _ =
              (h = this.m_view) == null
                ? void 0
                : h.posAtCoords({ left: s, top: l });
            return _ == null ? void 0 : _.pos;
          }
          async UploadFile(s, l) {
            (!this.m_fnCreatePlaceholder || !this.m_fnReplacePlaceholder) &&
              this.AddError(
                "Upload File: No editor registered to handle file upload",
              );
            const h = this.m_fnCreatePlaceholder({ file: s }, l);
            return this.ProcessFile(s, h);
          }
          BAllowImageHotLinking() {
            return this.m_bAllowImageHotLinking;
          }
          QueueUploadFileByURL(s, l, h) {
            if (
              ((!this.m_fnCreatePlaceholder || !this.m_fnReplacePlaceholder) &&
                this.AddError(
                  "QueueUploadFile: No editor registered to handle file upload",
                ),
              console.log(`QueueUploadFileByURL: ${s} at pos ${l}`),
              s.startsWith("data:"))
            ) {
              const _ = this.m_fnCreatePlaceholder({ url: s }, l, h);
              return this.ProcessDataURL(s, _), !0;
            } else if (this.m_fnFetchImageURL) {
              const _ = this.m_fnCreatePlaceholder({ url: s }, l, h);
              return this.FetchURLAndProcess(s, _), !0;
            } else
              return (
                (0, S.wT)(
                  this.m_bAllowImageHotLinking,
                  "A URL was posted but we don't have a fnFetchImageURL to process it",
                ),
                !1
              );
          }
          async ProcessDataURL(s, l) {
            const [h, _] = s.split(","),
              O = h.match(/^data:(?<mimetype>[^;]*);(?<encoding>.*)$/);
            if (!O || O.groups.encoding != "base64") {
              this.AddError(`Unable to data URL, unexpected format: ${h}`);
              return;
            }
            const L = O == null ? void 0 : O.groups.mimetype,
              U = M(L);
            if (!U) {
              this.AddError(`Unsupported MIME type for image: ${L}`);
              return;
            }
            const K = atob(_),
              V = new Uint8Array(K.length);
            for (let G = 0; G < K.length; G++) V[G] = K.charCodeAt(G);
            const H = await w.C(V.buffer),
              $ = new File([V], `upload_${H}.${U}`, { type: L });
            await this.ProcessFile($, l);
          }
          async FetchURLAndProcess(s, l) {
            var h;
            try {
              const _ = new URL(s),
                O = await this.m_fnFetchImageURL(s),
                L = new File(
                  [O],
                  decodeURIComponent(
                    ((h = _.pathname) == null
                      ? void 0
                      : h.replace(/^.*\//, "")) || "image",
                  ),
                  { type: O.type },
                );
              await this.ProcessFile(L, l);
            } catch {
              this.AddError(`Unable to process URL: ${s}`),
                this.m_fnReplacePlaceholder(l);
            }
          }
          async ProcessFile(s, l) {
            let h;
            try {
              console.log(`Processing file upload: "${s.name}"`),
                (h = await this.m_fnProcessFileUpload(s));
            } catch (_) {
              _ instanceof v
                ? this.AddError(_.message)
                : this.AddError(`Error proccessing file upload: ${_}`);
            }
            h
              ? this.m_fnReplacePlaceholder(l, h)
              : this.m_fnReplacePlaceholder(l);
          }
        }
        function M(c) {
          switch (c) {
            case "image/jpeg":
              return "jpg";
            case "image/png":
              return "png";
            case "image/gif":
              return "gif";
            case "image/webp":
              return "webp";
            case "video/mp4":
              return "mp4";
            case "video/webm":
              return "webm";
            default:
              return;
          }
        }
        const u = k.createContext(void 0);
        function e() {
          return k.useContext(u).manager;
        }
        const a = k.memo(function (s) {
          const { manager: l } = s,
            h = (0, p.gc)(l.GetErrors());
          return h.length
            ? (0, r.jsx)(F.E, {
                active: !0,
                children: (0, r.jsx)(E.o0, {
                  bAlertDialog: !0,
                  strTitle: (0, R.we)("#Error_Generic"),
                  strDescription: h.map((_, O) =>
                    (0, r.jsx)("div", { children: _ }, O),
                  ),
                  strOKButtonText: (0, R.we)("#Button_OK"),
                  onOK: () => l.ClearErrors(),
                  onCancel: () => l.ClearErrors(),
                }),
              })
            : null;
        });
        function n(c) {
          const { manager: s, children: l } = c,
            h = k.useCallback(
              (L, U) => {
                for (const K of L)
                  s.UploadFile(K, s.GetViewPosition(U.clientX, U.clientY));
              },
              [s],
            ),
            [_, O] = (0, T.hk)(h);
          return k.cloneElement(l, { ..._, ...l.props });
        }
        function i(c, s) {
          (0, D.c$)(
            k.useMemo(
              () =>
                new y.k_({
                  props: {
                    handlePaste(l, h, _) {
                      const O = [];
                      if (
                        (_.content.descendants((L, U) => {
                          if (L.type == s) {
                            const K = L.attrs.src;
                            (K.startsWith("data:") ||
                              !c.BAllowImageHotLinking()) &&
                              O.push({ url: K, pos: U });
                          }
                        }),
                        O.length)
                      ) {
                        let L = l.state.tr;
                        L.selection.empty || L.deleteSelection();
                        let U = L.selection.from,
                          K = 0;
                        for (const V of O) {
                          const H = _.content.cut(K, V.pos - 1);
                          L.insert(U, H),
                            (U += H.size),
                            c.QueueUploadFileByURL(V.url, U, L),
                            (K = V.pos + 1);
                        }
                        return (
                          L.insert(U, _.content.cut(K)),
                          L.scrollIntoView(),
                          l.dispatch(L),
                          !0
                        );
                      }
                      return !1;
                    },
                    handleDOMEvents: {
                      paste(l, h) {
                        var _, O;
                        if (
                          ((O =
                            (_ = h.clipboardData) == null ? void 0 : _.files) ==
                          null
                            ? void 0
                            : O.length) > 0
                        ) {
                          h.preventDefault();
                          for (const L of h.clipboardData.files)
                            c.UploadFile(L);
                          return !0;
                        }
                      },
                    },
                  },
                }),
              [s, c],
            ),
          );
        }
      },
      93147: (z, W, o) => {
        "use strict";
        o.d(W, { l: () => b });
        var r = o(7850),
          S = o(19298),
          w = o(52951),
          D = o(74875),
          y = o(29287),
          B = o(19565),
          k = o(74827),
          P = o(52893),
          I = o(57053),
          E = o(90626),
          F = o(25792),
          N = o(33645),
          j = o.n(N),
          R = o(38539),
          T = o(81973),
          p = o(36707);
        const t = E.memo(function (M) {
          const { schema: u } = M,
            e = !!("table" in u.nodes && u.nodes.table.spec.tableRole);
          return (
            (0, B.c$)(E.useMemo(() => (e ? R.AL({ View: d }) : void 0), [e])),
            (0, B.c$)(E.useMemo(() => (e ? R.LF() : void 0), [e])),
            null
          );
        });
        class d extends R.Qg {
          constructor(M, u) {
            super(M, u), this.SetTableClass(M);
          }
          update(M) {
            return super.update(M) ? (this.SetTableClass(M), !0) : !1;
          }
          SetTableClass(M) {
            this.table.className = (0, p.A)(
              j().Table,
              M.attrs[T.w.NoBorder] && j().NoBorder,
              M.attrs[T.w.EqualCells] && j().EqualCells,
            );
          }
        }
        var x = o(18210),
          A = o(54963),
          f = o(73309);
        const b = (0, F.Nr)(function (M) {
          const {
              pmState: u,
              className: e,
              refOnUpdate: a,
              refView: n,
              bSpellcheckEnabled: i = !0,
              bSingleLine: c,
              panelProps: s,
              children: l,
            } = M,
            [h, _] = E.useState(),
            [O, L] = E.useState();
          E.useEffect(() => {
            !u || !h || L(new y.Lz(h, { state: u.state }));
          }, [u, h]),
            E.useEffect(() => () => (O == null ? void 0 : O.destroy()), [O]),
            (0, A.D5)(n, O);
          const { refDiv: U, onActivate: K, onGamepadDirection: V } = g(O),
            H = (0, A.Ue)(U, _);
          if (!u) return null;
          const { schemaConfig: $, bbcodeParser: G } = u;
          return (0, r.jsxs)(B.Ot, {
            view: O,
            pmState: u,
            children: [
              (0, r.jsx)(
                S.Z,
                {
                  className: (0, p.A)({
                    ["" + e]: !!e,
                    [f.Container]: !0,
                    [f.SingleLine]: !!c,
                  }),
                  ref: H,
                  spellCheck: i,
                  focusable: !0,
                  onActivate: K,
                  onOKActionDescription: (0, x.we)("#UserGameNotes_Edit"),
                  onGamepadDirection: V,
                  ...s,
                },
                `editordiv_${i}`,
              ),
              (0, r.jsx)(B.KF, {
                refOnUpdate: a,
                schema: $.pm_schema,
                bSingleLine: c,
              }),
              (0, r.jsx)(v, { parser: G, schema: $.pm_schema }),
              (0, r.jsx)(t, { schema: $.pm_schema }),
              l,
            ],
          });
        });
        function g(C) {
          const M = E.useRef(null),
            u = (0, D.FN)(),
            e = E.useCallback(() => {
              var i, c;
              if ((u.ShowVirtualKeyboard(), !C)) return;
              if (!C.hasFocus()) {
                C.focus();
                let l = C.dom.childNodes,
                  h =
                    (c = (i = M.current) == null ? void 0 : i.scrollTop) != null
                      ? c
                      : 0;
                for (let _ = 0; _ < l.length; ++_) {
                  let O = l[_],
                    L = O.offsetTop;
                  if (L !== void 0 && L >= h) {
                    let U = O.getBoundingClientRect();
                    (0, k.bQ)(C, U.left, U.top);
                    break;
                  }
                }
              }
            }, [u, C]),
            a = E.useCallback((i) => i.currentTarget == i.target, []),
            n = (0, w.ak)(M, void 0, void 0, a);
          return { refDiv: M, onActivate: e, onGamepadDirection: n };
        }
        const v = E.memo(function (M) {
          const { parser: u, schema: e } = M;
          return (
            (0, B.c$)(
              E.useMemo(
                () =>
                  new P.k_({
                    props: {
                      transformPasted: (a, n) => m(u, e.nodes.hard_break, a),
                    },
                  }),
                [u, e],
              ),
            ),
            null
          );
        });
        function m(C, M, u) {
          let e = !1;
          if (
            (u.content.forEach((n) => {
              n.type == M && (e = !0);
            }),
            !e)
          )
            return u;
          const a = C.ConvertLineBreaksToParagraphs(u.content);
          return I.Ji.maxOpen(a);
        }
      },
      73723: (z, W, o) => {
        "use strict";
        o.d(W, {
          Km: () => T,
          WJ: () => x,
          z9: () => b,
          C$: () => A,
          Hz: () => p,
          Nt: () => g,
          MV: () => R,
        });
        var r = o(7850),
          S = o(98724),
          w = o(4188),
          D = o(74827),
          y = o(90626),
          B = o(56718),
          k = o(12293),
          P = o(50660),
          I = o(54963);
        function E(v) {
          const { schema: m, addtlAttrs: C, children: M } = v,
            { callbacks: u, view: e } = (0, P.wU)(),
            [a, n] = y.useState(() => (0, D.Cd)(e.state, m.marks.link)),
            i = y.useCallback((l) => n((0, D.Cd)(l.state, m.marks.link)), [m]);
          (0, I.hL)(u, i);
          const [c, s] = (0, k.E)(m, C);
          return (0, r.jsxs)(r.Fragment, {
            children: [
              s,
              (0, r.jsx)(P.ff, {
                onClick: () => c(e),
                toggled: a,
                tooltip: "#FormattingToolbar_InsertLink",
                keyboardShortcut: "Mod-k",
                children: M,
              }),
            ],
          });
        }
        var F = o(98609),
          N = o(15210);
        function j(v) {
          const { schema: m, bColor: C, addtlAttrs: M, children: u } = v,
            { callbacks: e, view: a } = (0, P.wU)(),
            [n, i] = y.useState(() =>
              (0, D.Cd)(a.state, C ? m.marks.color : m.marks.bgcolor),
            ),
            c = y.useCallback(
              (h) => i((0, D.Cd)(h.state, C ? m.marks.color : m.marks.bgcolor)),
              [C, m],
            );
          (0, I.hL)(e, c);
          const [s, l] = (0, N.J)(m, C, M);
          return (0, r.jsxs)(r.Fragment, {
            children: [
              l,
              (0, r.jsx)(P.ff, {
                onClick: () => s(a),
                toggled: n,
                tooltip: C
                  ? "#FormattingToolbar_Color"
                  : "#FormattingToolbar_BgColor",
                children: u,
              }),
            ],
          });
        }
        function R() {
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(P.cQ, {
                tooltip: "#FormattingToolbar_Undo",
                keyboardShortcut: "Mod-z",
                command: S.tN,
                children: (0, r.jsx)(B.VnB, {}),
              }),
              (0, r.jsx)(P.cQ, {
                tooltip: "#FormattingToolbar_Redo",
                keyboardShortcut:
                  F.TS.PLATFORM == "macos" ? "Mod-Shift-z" : "Mod-y",
                command: S.ZS,
                children: (0, r.jsx)(B.Bal, {}),
              }),
            ],
          });
        }
        function T(v) {
          const { schema: m } = v;
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(P.GY, {
                tooltip: "#FormattingToolbar_Bold",
                keyboardShortcut: "Mod-b",
                mark: m.marks.strong,
                children: (0, r.jsx)(B.l4n, {}),
              }),
              (0, r.jsx)(P.GY, {
                tooltip: "#FormattingToolbar_Italic",
                keyboardShortcut: "Mod-i",
                mark: m.marks.italic,
                children: (0, r.jsx)(B.UKJ, {}),
              }),
              (0, r.jsx)(P.GY, {
                tooltip: "#FormattingToolbar_Underline",
                keyboardShortcut: "Mod-u",
                mark: m.marks.underline,
                children: (0, r.jsx)(B.Gj3, {}),
              }),
              "strike" in m.marks &&
                (0, r.jsx)(P.GY, {
                  tooltip: "#FormattingToolbar_Strike",
                  keyboardShortcut: "Mod-Shift-x",
                  mark: m.marks.strike,
                  children: (0, r.jsx)(B.tI4, {}),
                }),
              "code" in m.marks &&
                (0, r.jsx)(P.GY, {
                  tooltip: "#FormattingToolbar_InlineCode",
                  keyboardShortcut: "Ctrl-Shift-c",
                  mark: m.marks.code,
                  children: (0, r.jsx)(B.bmT, {}),
                }),
              "color" in m.marks &&
                (0, r.jsx)(j, {
                  schema: m,
                  bColor: !0,
                  children: (0, r.jsx)(B.r7n, {}),
                }),
              "bgcolor" in m.marks &&
                (0, r.jsx)(j, {
                  schema: m,
                  bColor: !1,
                  children: (0, r.jsx)(B.FId, {}),
                }),
            ],
          });
        }
        function p(v) {
          const { schema: m } = v;
          return (0, r.jsx)(P.u3, {
            tooltip: "#FormattingToolbar_Paragraph",
            keyboardShortcut: "Ctrl-Shift-0",
            nodeType: m.nodes.paragraph,
            children: (0, r.jsx)(B.iYj, {}),
          });
        }
        function t(v) {
          const { nodeTypes: m, attrs: C, children: M, ...u } = v,
            { callbacks: e, view: a } = useToolbarContext(),
            [n, i] = React.useState(() => IsAnyBlockActive(a.state, m, C)),
            c = React.useCallback(
              (h) => i(IsAnyBlockActive(h.state, m, C)),
              [m, C],
            );
          useCallbackList(e, c);
          const s = React.useMemo(
              () => SetNodeAttributeCommand(m, C != null ? C : {}),
              [m, C],
            ),
            l = !!n;
          return jsx(CommandButton, {
            ...u,
            command: s,
            toggled: l,
            children: M,
          });
        }
        function d(v) {
          const { schema: m } = v;
          let C = m.nodes.paragraph,
            M = m.nodes.heading;
          const u = React.useMemo(() => [C, M], [C, M]);
          return jsxs(Fragment, {
            children: [
              jsx(t, {
                tooltip: "#FormattingToolbar_AlignLeft",
                keyboardShortcut: "Ctrl-Shift-L",
                nodeTypes: u,
                attrs: { align: "left" },
                children: jsx(GamepadUISVG.TextLeftAlign, {}),
              }),
              jsx(t, {
                tooltip: "#FormattingToolbar_AlignCenter",
                keyboardShortcut: "Ctrl-Shift-E",
                nodeTypes: u,
                attrs: { align: "center" },
                children: jsx(GamepadUISVG.TextCenterAlign, {}),
              }),
              jsx(t, {
                tooltip: "#FormattingToolbar_AlignRight",
                keyboardShortcut: "Ctrl-Shift-R",
                nodeTypes: u,
                attrs: { align: "right" },
                children: jsx(GamepadUISVG.TextRightAlign, {}),
              }),
            ],
          });
        }
        function x(v) {
          const { schema: m, maxLevel: C = 1, levels: M } = v,
            u = C + M - 1;
          return (0, r.jsxs)(r.Fragment, {
            children: [
              C <= 1 &&
                (0, r.jsx)(P.u3, {
                  tooltip: "#FormattingToolbar_HeadingLevel1",
                  keyboardShortcut: "Ctrl-Shift-1",
                  nodeType: m.nodes.heading,
                  attrs: { level: 1 },
                  children: (0, r.jsx)(B.jRw, {}),
                }),
              C <= 2 &&
                u >= 2 &&
                (0, r.jsx)(P.u3, {
                  tooltip: "#FormattingToolbar_HeadingLevel2",
                  keyboardShortcut: "Ctrl-Shift-2",
                  nodeType: m.nodes.heading,
                  attrs: { level: 2 },
                  children: (0, r.jsx)(B.qOW, {}),
                }),
              C <= 3 &&
                u >= 3 &&
                (0, r.jsx)(P.u3, {
                  tooltip: "#FormattingToolbar_HeadingLevel3",
                  keyboardShortcut: "Ctrl-Shift-3",
                  nodeType: m.nodes.heading,
                  attrs: { level: 3 },
                  children: (0, r.jsx)(B.x7X, {}),
                }),
              C <= 4 &&
                u >= 4 &&
                (0, r.jsx)(P.u3, {
                  tooltip: "#FormattingToolbar_HeadingLevel4",
                  keyboardShortcut: "Ctrl-Shift-4",
                  nodeType: m.nodes.heading,
                  attrs: { level: 4 },
                  children: (0, r.jsx)(B.qzO, {}),
                }),
              C <= 5 &&
                u >= 5 &&
                (0, r.jsx)(P.u3, {
                  tooltip: "#FormattingToolbar_HeadingLevel5",
                  keyboardShortcut: "Ctrl-Shift-5",
                  nodeType: m.nodes.heading,
                  attrs: { level: 5 },
                  children: (0, r.jsx)(B.jXA, {}),
                }),
            ],
          });
        }
        function A(v) {
          const { schema: m, showIndentButtonsAsNeeded: C = !1 } = v,
            { callbacks: M, view: u } = (0, P.wU)(),
            { bullet_list: e, ordered_list: a, list_item: n } = m.nodes,
            i = y.useMemo(() => w.T2(n), [n]),
            c = y.useMemo(() => w.$B(n), [n]),
            [s, l] = y.useState(() => i(u.state) || c(u.state));
          return (
            (0, I.hL)(
              M,
              y.useCallback(
                (h) => {
                  l(i(h.state) || c(h.state));
                },
                [i, c],
              ),
            ),
            (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)(f, {
                  tooltip: "#FormattingToolbar_BulletedList",
                  keyboardShortcut: "Ctrl-Shift-8",
                  list_type: e,
                  list_item: n,
                  children: (0, r.jsx)(B.JPq, {}),
                }),
                a &&
                  (0, r.jsx)(f, {
                    tooltip: "#FormattingToolbar_OrderedList",
                    keyboardShortcut: "Ctrl-Shift-7",
                    list_type: a,
                    list_item: n,
                    children: (0, r.jsx)(B.jE0, {}),
                  }),
                (!C || s) &&
                  (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)(P.cQ, {
                        tooltip: "#FormattingToolbar_OutdentList",
                        keyboardShortcut: "Mod-[",
                        command: i,
                        children: (0, r.jsx)(B.LSz, {}),
                      }),
                      (0, r.jsx)(P.cQ, {
                        tooltip: "#FormattingToolbar_IndentList",
                        keyboardShortcut: "Mod-[",
                        command: c,
                        children: (0, r.jsx)(B.ycU, {}),
                      }),
                    ],
                  }),
              ],
            })
          );
        }
        function f(v) {
          const { list_type: m, list_item: C, children: M, ...u } = v,
            { callbacks: e, view: a } = (0, P.wU)(),
            n = y.useCallback((h) => (0, D.wt)(h.state, m) !== void 0, [m]),
            [i, c] = y.useState(() => n(a)),
            s = y.useMemo(() => w.Sd(m), [m]),
            l = y.useMemo(() => w.T2(C), [C]);
          return (
            (0, I.hL)(
              e,
              y.useCallback(
                (h) => {
                  c(n(h));
                },
                [n],
              ),
            ),
            (0, r.jsx)(P.cQ, {
              ...u,
              toggled: i,
              command: i ? l : s,
              children: M,
            })
          );
        }
        function b(v) {
          const { schema: m, addtlAttrs: C } = v;
          return (0, r.jsx)(E, {
            schema: m,
            addtlAttrs: C,
            children: (0, r.jsx)(B.YqK, {}),
          });
        }
        function g(v) {
          const { bSpellcheckEnabled: m, setSpellcheckEnabled: C } = v;
          return (0, r.jsx)(P.ff, {
            tooltip: m
              ? "#FormattingToolbar_DisableSpellcheck"
              : "#FormattingToolbar_EnableSpellcheck",
            toggled: m,
            onClick: () => C(!m),
            children: (0, r.jsx)(B.DEV, {}),
          });
        }
      },
      50660: (z, W, o) => {
        "use strict";
        o.d(W, {
          Ez: () => A,
          GY: () => b,
          XQ: () => d,
          bI: () => p,
          cQ: () => g,
          ff: () => v,
          hK: () => x,
          u3: () => f,
          wU: () => T,
        });
        var r = o(7850),
          S = o(19298),
          w = o(74827),
          D = o(12362),
          y = o(90626),
          B = o(19316),
          k = o(71421),
          P = o(8323),
          I = o(36707),
          E = o(18210),
          F = o(54963),
          N = o(98609),
          j = o(73309),
          R = o.n(j);
        const T = () => y.useContext(t);
        function p(a) {
          const { view: n, refUpdateToolbar: i, children: c } = a,
            s = y.useRef(void 0);
          s.current || (s.current = new P.lu());
          const l = s.current;
          y.useEffect(
            () => (
              (0, F.cZ)(i, () => l.Dispatch(n)), () => (0, F.cZ)(i, void 0)
            ),
            [l, n, i],
          );
          const h = y.useMemo(() => ({ callbacks: l, view: n }), [l, n]);
          return n ? (0, r.jsx)(t.Provider, { value: h, children: c }) : null;
        }
        const t = y.createContext(void 0);
        function d() {
          return (0, r.jsx)("div", { className: j.Gap });
        }
        function x() {
          return (0, r.jsx)("div", { className: j.Spacer });
        }
        function A(a) {
          return (0, r.jsx)("div", {
            className: (0, I.A)(a.className, j.ToolbarRowOverflowContainer),
            children: (0, r.jsx)(S.Z, {
              className: j.ToolbarRow,
              "flow-children": "row",
              children: a.children,
            }),
          });
        }
        function f(a) {
          const { nodeType: n, attrs: i, children: c, ...s } = a,
            { callbacks: l, view: h } = T(),
            [_, O] = y.useState(() => (0, w.gj)(h.state, n, i)),
            L = y.useCallback((K) => O((0, w.gj)(K.state, n, i)), [n, i]);
          (0, F.hL)(l, L);
          const U = y.useMemo(() => D.y_(n, i), [i, n]);
          return (0, r.jsx)(g, { ...s, command: U, toggled: _, children: c });
        }
        function b(a) {
          const { mark: n, children: i, ...c } = a,
            { callbacks: s, view: l } = T(),
            [h, _] = y.useState(() => (0, w.Cd)(l.state, n)),
            O = y.useCallback((U) => _((0, w.Cd)(U.state, n)), [n]);
          (0, F.hL)(s, O);
          const L = y.useMemo(() => D.wh(n), [n]);
          return (0, r.jsx)(g, { ...c, command: L, toggled: h, children: i });
        }
        function g(a) {
          const { command: n, toggled: i, children: c, ...s } = a,
            { view: l, callbacks: h } = T(),
            [_, O] = y.useState(() => n(l.state));
          (0, F.hL)(
            h,
            y.useCallback((U) => O(n(U.state)), [n]),
          ),
            y.useEffect(() => O(n(l.state)), [n, l]);
          const L = !_ && !i;
          return (0, r.jsx)(m, {
            ...s,
            children: (0, r.jsx)(B.$n, {
              className: (0, I.A)(j.CommandButton, i && j.Toggled),
              onMouseDown: (U) => {
                U.preventDefault(), n(l.state, l.dispatch, l);
              },
              disabled: L,
              focusable: !L,
              children: c,
            }),
          });
        }
        function v(a) {
          const {
            onClick: n,
            toggled: i,
            disabled: c,
            children: s,
            className: l,
            ...h
          } = a;
          return (0, r.jsx)(m, {
            ...h,
            children: (0, r.jsx)(B.$n, {
              className: (0, I.A)(j.CommandButton, i && j.Toggled, l),
              onMouseDown: (_) => {
                _.button === 0 && (_.preventDefault(), n(_));
              },
              disabled: c === !0,
              children: s,
            }),
          });
        }
        function m(a) {
          const { tooltip: n, keyboardShortcut: i, children: c } = a;
          if (!n) return c;
          const s = i ? (0, r.jsx)(C, { tooltip: n, keyboardShortcut: i }) : n;
          return (0, r.jsx)(k.Gq, {
            toolTipContent: s,
            direction: "bottom",
            children: c,
          });
        }
        function C(a) {
          const { tooltip: n, keyboardShortcut: i } = a;
          return (0, r.jsxs)("div", {
            className: j.TooltipWithShortcut,
            children: [
              (0, r.jsx)("div", {
                children: typeof n == "string" ? (0, E.we)(n) : n,
              }),
              (0, r.jsx)("div", {
                children: (0, r.jsx)(M, { keyboardShortcut: i }),
              }),
            ],
          });
        }
        function M(a) {
          var n;
          const { keyboardShortcut: i } = a,
            c = i.split("-"),
            s = (n = c.pop()) != null ? n : "";
          return (0, r.jsxs)(r.Fragment, {
            children: [
              c.map((l, h) =>
                (0, r.jsxs)(
                  y.Fragment,
                  {
                    children: [
                      (0, r.jsx)(u, {
                        children: (0, r.jsx)(e, { modifier: l }),
                      }),
                      " + ",
                    ],
                  },
                  h,
                ),
              ),
              (0, r.jsx)(u, { children: s.toUpperCase() }),
            ],
          });
        }
        function u(a) {
          return (0, r.jsx)("span", {
            className: j.KeyCap,
            children: a.children,
          });
        }
        function e(a) {
          const { modifier: n } = a;
          switch (n) {
            case "Mod":
              return N.TS.PLATFORM == "macos" ? "\u2318" : "Ctrl";
            case "Shift":
              return N.TS.PLATFORM == "macos", "Shift";
            case "Ctrl":
              return N.TS.PLATFORM == "macos" ? "Control" : "Ctrl";
            case "Alt":
              return N.TS.PLATFORM == "macos" ? "Option" : "Alt";
          }
          return null;
        }
      },
      27828: (z) => {
        z.exports = {
          EyeDropperCtn: "_5jKe2NV9CM3JA3hcMALLw",
          EyeDropperBtn: "_3afPQT_fEWmhHhFHS-WIk7",
          ColorPickerCtn: "Nn2-w0eqLuugAR-Udm--3",
          ColorPickerDialog: "_32PwNSgquR6tGAPIBcWgVq",
        };
      },
      88376: (z) => {
        z.exports = {
          ModalConfirmDialog: "_1MwR7dU-J2CeRWYt9WfUJw",
          Header: "Y9lJcGdHP6m4TRcgHnzj2",
          Buttons: "_1Wq4E7gdTa-fjWrhWFQG7b",
        };
      },
      73309: (z) => {
        z.exports = {
          "duration-app-launch": "800ms",
          narrowWidth: "500px",
          Container: "_30v-6zb_axOypIUr5VRHE1",
          SingleLine: "_2i9qH2AM6Wg5660Tkf_fTt",
          ToolbarRowOverflowContainer: "nXEH21nf47u2OH7BjQKei",
          ToolbarRow: "LCeIT0gmFTY8fdfaVgk4j",
          Gap: "_19z0fjj7o0n9vAjVjvYZNU",
          Spacer: "_2m1BBIp5Ewr1TI-BkqFGLM",
          CommandButton: "_1dEi5qzSDdPOzoOQXYbNLN",
          Toggled: "_1Iw5xoXQXfmRjgjWTKbm_G",
          FileUploadPlaceholder: "_2P-FBc3tZWGeeBFplDSb9g",
          ThrobberCtn: "_3QpIkO3kkVZmnulwmiZRHH",
          ThrobberRow: "VIY8ZV4g4NpEMnF-_pHOh",
          Throbber: "_12t6JmDCFT6MqtNVrSi5NJ",
          PendingImage: "_2HezQYTfmFfdRmuB8l9QPI",
          FileUploadDragDrop: "_1WRaNQqBKcUp67ntgoyEeQ",
          FileUploadDropFilesMessage: "I2CE9X_I0GBNYbJf7VYBg",
          TooltipWithShortcut: "zT2msZmm-jBeLe4Dt7smo",
          KeyCap: "_3mZEV9CXrIn4FITvJk3Xy-",
          BackgroundAnimation: "_32I7Uh1ZWySd7VGW50f5IC",
          "ItemFocusAnim-darkerGrey-nocolor": "_3dzJEyM6opBkmIeARAGlYr",
          "ItemFocusAnim-darkerGrey": "_2dbsn-sR5AlFKEgCU0FBbT",
          "ItemFocusAnim-darkGreySettings": "_2gCU5HJBuDk1vxRMJhwFGE",
          "ItemFocusAnim-darkGrey": "_39KmlfhlZwkINJt9fdyKbw",
          "ItemFocusAnim-grey": "_1X5Siupo5N_ZVuGesoYV0t",
          "ItemFocusAnim-translucent-white-10": "_3aZcpOjRI-YzMZmhCRiFjd",
          "ItemFocusAnim-translucent-white-20": "_310j_Q-iB-at4-cmQSi1Mt",
          "ItemFocusAnimBorder-darkGrey": "_38WlDUfHs-IiaRcWKFpWyA",
          "ItemFocusAnim-green": "_3Hq7gKwAuHvmYuBWXBx8mC",
          focusAnimation: "_1k4kLxHBHs5edlnWmN-Cos",
          hoverAnimation: "_3OZh2Bm4JsNC3bNfskysCA",
        };
      },
    },
  ]);
})();
