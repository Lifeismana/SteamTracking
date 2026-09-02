/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [9773],
    {
      65217: (z, H, e) => {
        "use strict";
        e.d(H, { F: () => I });
        var o = e(39414);
        function I(w, g, O, A) {
          let k = [],
            C;
          for (; (C = g.match(o.O)); ) {
            C.index > 0 && k.push(w.text(g.substring(0, C.index)));
            const L = (0, o.S)(C[0]),
              M = A && A(L);
            !M || M === "default"
              ? k.push(w.text(C[0], [O.create({ href: L })]))
              : M !== "remove" && k.push(M),
              (g = g.substring(C.index + C[0].length));
          }
          if (k.length != 0) return g.length && k.push(w.text(g)), k;
        }
      },
      8422: (z, H, e) => {
        "use strict";
        e.d(H, { Mw: () => A, TG: () => C, zL: () => O });
        var o = e(7850),
          I = e(52893),
          w = e(90626),
          g = e(19565);
        const O = new I.k_({
            props: {
              handlePaste(L, M, F) {
                var K;
                const R =
                  (K = M.clipboardData) == null
                    ? void 0
                    : K.getData("text/plain").replace(/\n/g, " ");
                if (R) {
                  const U = L.state.tr.insertText(R);
                  L.dispatch(U);
                }
                return !0;
              },
            },
          }),
          A = {
            Enter: () => !0,
            "Shift-Enter": () => !0,
            "Mod-Enter": () => !0,
          };
        function k(L) {
          return new I.k_({
            filterTransaction(M, F) {
              return M.doc.textContent.length <= L;
            },
          });
        }
        function C(L) {
          const { nMaxChars: M } = L;
          return (
            (0, g.c$)((0, w.useMemo)(() => k(M), [M])),
            (0, o.jsx)(w.Fragment, {})
          );
        }
      },
      58802: (z, H, e) => {
        "use strict";
        e.d(H, { W: () => O });
        var o = e(57053),
          I = Object.defineProperty,
          w = (k, C, L) =>
            C in k
              ? I(k, C, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: L,
                })
              : (k[C] = L),
          g = (k, C, L) => w(k, typeof C != "symbol" ? C + "" : C, L);
        class O {
          constructor(C, L) {
            g(this, "m_ProseMirrorSchema"),
              g(this, "m_mapBBCodeDictionary", new Map()),
              g(this, "m_PMToBBCodeConfig", {
                mapNodes: new Map(),
                mapMarks: new Map(),
              });
            const M = {
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
              K = new Map(),
              R = L ? new Set(L) : void 0;
            for (const P in C.nodes) {
              const { bbCode: t, ...i } = C.nodes[P],
                p = A(t, R);
              p && ((M[P] = i), F.set(P, p));
            }
            const U = {};
            for (const P in C.marks) {
              const { bbCode: t, ...i } = C.marks[P];
              (!R || R.has(t.tag)) && ((U[P] = i), K.set(P, t));
            }
            (this.m_ProseMirrorSchema = new o.Sj({ nodes: M, marks: U })),
              F.forEach((P, t) => {
                var i;
                const p = this.m_ProseMirrorSchema.nodes[t],
                  S = C.nodes[t],
                  v = Array.isArray(P) ? P : [P];
                let T;
                S.content == "list_item+"
                  ? (T = this.m_ProseMirrorSchema.nodes.list_item)
                  : ((i = S.content) == null
                      ? void 0
                      : i.indexOf("paragraph")) != -1 &&
                    (T = this.m_ProseMirrorSchema.nodes.paragraph),
                  v.forEach(
                    ({
                      tag: _,
                      BBArgsToAttrs: D,
                      AttrsToBBArgs: u,
                      convertContentToAttr: s,
                      bVerbatimArgs: c,
                      bVerbatimContent: a,
                      ...d
                    }) => {
                      this.m_mapBBCodeDictionary.set(_, {
                        Constructor: {
                          node: p,
                          BBArgsToAttrs: D,
                          convertContentToAttr: s,
                          acceptNode: T,
                        },
                        skipFollowingNewline: !0,
                        ...d,
                      });
                    },
                  );
                const {
                  tag: x,
                  AttrsToBBArgs: E,
                  bVerbatimArgs: B,
                  bVerbatimContent: f,
                } = v[0];
                this.m_PMToBBCodeConfig.mapNodes.set(p, {
                  tag: x,
                  AttrsToBBArgs: E,
                  bVerbatimArgs: B,
                  bVerbatimContent: f,
                });
              }),
              K.forEach((P, t) => {
                const i = this.m_ProseMirrorSchema.marks[t],
                  { tag: p, BBArgsToAttrs: S, AttrsToBBArgs: v, ...T } = P;
                this.m_mapBBCodeDictionary.set(p, {
                  Constructor: { mark: i, BBArgsToAttrs: S },
                  ...T,
                }),
                  this.m_PMToBBCodeConfig.mapMarks.set(i, {
                    tag: p,
                    AttrsToBBArgs: v,
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
          ConvertAttrToBBCodeArgs(C, L) {
            const M = this.m_PMToBBCodeConfig.mapNodes.get(C.type);
            return M && M.AttrsToBBArgs ? M.AttrsToBBArgs(L, C).args || {} : {};
          }
        }
        function A(k, C) {
          if (C)
            if (Array.isArray(k)) {
              const L = k.filter((M) => C.has(M.tag));
              return L.length > 0 ? L : void 0;
            } else return C.has(k.tag) ? k : void 0;
          else return k;
        }
      },
      81240: (z, H, e) => {
        "use strict";
        e.d(H, { i: () => w });
        var o = e(90626),
          I = e(8561);
        function w(g, O) {
          const { msAutosaveTimeout: A = 1e3, msMaxInterval: k = A * 10 } =
              O || {},
            [C, L] = o.useState(!1),
            M = o.useRef(0);
          return (
            (0, I.u)(
              g,
              o.useCallback(() => {
                (M.current = performance.now()), L(!0);
              }, []),
            ),
            o.useEffect(() => {
              if (!C || !g) return;
              const F = performance.now(),
                K = (U = !1) => {
                  R = void 0;
                  const P = performance.now(),
                    t = P - M.current;
                  U || t >= A || P - F >= k
                    ? (console.log("Committing changes"),
                      g.CommitChanges(),
                      L(!1))
                    : (R = window.setTimeout(K, A - t));
                };
              let R = window.setTimeout(K, A);
              return () => {
                R && (window.clearTimeout(R), K(!0));
              };
            }, [C, g, A, k]),
            { bDirty: C }
          );
        }
      },
      23569: (z, H, e) => {
        "use strict";
        e.d(H, { M: () => R, U: () => M });
        var o = e(7850),
          I = e(38585),
          w = e(52893),
          g = e(90626),
          O = e(72739),
          A = e(19565),
          k = Object.defineProperty,
          C = (U, P, t) =>
            P in U
              ? k(U, P, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: t,
                })
              : (U[P] = t),
          L = (U, P, t) => C(U, typeof P != "symbol" ? P + "" : P, t);
        const M = g.memo(function (P) {
          const { specs: t } = P,
            [i, p] = g.useState([]),
            S = g.useRef(0),
            v = g.useCallback(
              (x) => (
                p((E) => [...E, { id: S.current++, nodeView: x }]),
                () => p((E) => E.filter((B) => B.nodeView != x))
              ),
              [],
            ),
            T = g.useMemo(() => {
              const x = {};
              return (
                t
                  .filter(Boolean)
                  .forEach(
                    (E) => (x[E.type.name] = (B, f, _) => new K(E, B, f, _, v)),
                  ),
                new w.k_({ props: { nodeViews: x } })
              );
            }, [t, v]);
          return (
            (0, A.c$)(T),
            i.map(({ id: x, nodeView: E }) => (0, o.jsx)(F, { nodeView: E }, x))
          );
        });
        function F(U) {
          const {
              element: P,
              spec: t,
              getProps: i,
              onPropsChanged: p,
              actions: S,
              isSelected: v,
            } = U.nodeView,
            [T, x] = g.useReducer((E) => E + 1, 0);
          return (
            g.useEffect(() => p.Register(x).Unregister, [p, x]),
            O.createPortal(
              g.createElement(t.component, { ...i(), selected: v(), ...S }),
              P,
            )
          );
        }
        class K {
          constructor(P, t, i, p, S) {
            L(this, "dom"),
              L(this, "contentDOM"),
              L(this, "onPropsChanged"),
              L(this, "node"),
              L(this, "selected"),
              L(this, "reactHost"),
              L(this, "destroy"),
              (this.node = t);
            const v = i.dom.ownerDocument,
              T = v.createElement(P.type.isInline ? "span" : "div");
            this.dom = T;
            let x = T;
            P.bEditableContent &&
              ((x = this.reactHost =
                v.createElement(P.type.isInline ? "span" : "div")),
              (x.contentEditable = "false"),
              T.appendChild(x),
              (this.contentDOM = v.createElement(
                P.type.inlineContent ? "span" : "div",
              )),
              T.appendChild(this.contentDOM));
            const { selection: E } = i.state;
            this.selected = p() >= E.from && p() + t.nodeSize <= E.to;
            const B = (D) => {
                const u = D(i.state.tr, t, p());
                u && i.dispatch(u);
              },
              f = {
                update: B,
                setAttrs: (D, u) => B((s, c, a) => s.setNodeMarkup(a, u, D)),
                removeNode: () => B((D, u, s) => D.delete(s, s + u.nodeSize)),
                focusView: () => {
                  window.setTimeout(() => i.focus(), 1);
                },
              },
              _ = new I.l();
            (this.destroy = S({
              element: x,
              spec: P,
              getProps: () => P.readProps(this.node),
              isSelected: () => this.selected,
              onPropsChanged: _,
              actions: f,
            })),
              (this.onPropsChanged = _.Dispatch.bind(_));
          }
          update(P, t, i) {
            return P.type != this.node.type
              ? !1
              : ((this.node = P), this.onPropsChanged(), !0);
          }
          ignoreMutation(P) {
            return this.contentDOM && this.contentDOM.contains(P.target)
              ? !1
              : this.reactHost
                ? !0
                : P.type != "selection";
          }
          stopEvent(P) {
            return !!this.reactHost && this.reactHost.contains(P.target);
          }
          selectNode() {
            (this.selected = !0), this.onPropsChanged();
          }
          deselectNode() {
            (this.selected = !1), this.onPropsChanged();
          }
        }
        function R(U) {
          return (P, t, i) => P.replaceWith(i, i + t.nodeSize, U);
        }
      },
      19565: (z, H, e) => {
        "use strict";
        e.d(H, { KF: () => S, Ot: () => p, c$: () => v, Hd: () => T });
        var o = e(7850),
          I = e(12362),
          w = e(15024),
          g = e(7502),
          O = e(52893),
          A = e(90626),
          k = e(98724),
          C = e(79216),
          L = e(4188),
          M = e(74827);
        function F(x) {
          const { nodes: E, marks: B } = x,
            f = (0, I.st)(
              I.I$,
              (D, u) => (
                u &&
                  u(
                    D.tr
                      .replaceSelectionWith(E.hard_break.createChecked())
                      .scrollIntoView(),
                  ),
                !0
              ),
            ),
            _ = {
              "Mod-z": k.tN,
              "Mod-y": k.ZS,
              "Shift-Mod-z": k.ZS,
              Backspace: C.dv,
              Escape: I.hy,
              "Mod-Enter": f,
              "Shift-Enter": f,
              "Mod-b": (0, I.wh)(B.strong),
              "Mod-i": (0, I.wh)(B.italic),
              "Mod-u": (0, I.wh)(B.underline),
              "Mod-Shift-x": (0, I.wh)(B.strike),
              "Ctrl-Shift-s": (0, I.wh)(B.strike),
              Enter: (0, L.wn)(E.list_item),
              "Mod-[": (0, L.T2)(E.list_item),
              "Mod-]": (0, L.$B)(E.list_item),
              "Ctrl-Shift-1": (0, I.y_)(E.heading, { level: 1 }),
              "Ctrl-Shift-2": (0, I.y_)(E.heading, { level: 2 }),
              "Ctrl-Shift-3": (0, I.y_)(E.heading, { level: 3 }),
              "Ctrl-Shift-4": (0, I.y_)(E.heading, { level: 4 }),
              "Ctrl-Shift-5": (0, I.y_)(E.heading, { level: 5 }),
              "Ctrl-Shift-7": (0, I.y_)(E.ordered_list),
              "Ctrl-Shift-8": (0, I.y_)(E.bullet_list),
              "Ctrl-Shift-0": (0, I.y_)(E.paragraph),
            };
          return (
            B.code && (_["Ctrl-Shift-c"] = (0, I.wh)(B.code)),
            E.code_block && (_["Alt-Ctrl-Shift-c"] = (0, I.y_)(E.code_block)),
            E.horizontal_rule &&
              (_["Mod-_"] = (D, u) => (
                u &&
                  u(
                    D.tr
                      .replaceSelectionWith(E.horizontal_rule.create())
                      .scrollIntoView(),
                  ),
                !0
              )),
            (0, g.w)(_)
          );
        }
        function K(x, E) {
          return new C.fV(x, (B, f, _, D) =>
            B.tr.replaceWith(_, D, E.create()),
          );
        }
        function R(x) {
          const { nodes: E, marks: B } = x;
          return (0, C.sM)({
            rules: [
              (0, C.tG)(
                /^(\d+)\.\s$/,
                E.ordered_list,
                (f) => ({ order: parseInt(f[1]) }),
                (f, _) => _.childCount + _.attrs.order == parseInt(f[1]),
              ),
              (0, C.tG)(/^\s*([-+*])\s$/, E.bullet_list),
              (0, M.OX)(/(?<!\w)\*([^*]+)\*/, B.strong),
              (0, M.OX)(/(?<!\w)_([^_]+)_/, B.italic),
              (0, M.OX)(/(?<!\w)~([^~]+)~/, B.strike),
              (0, M.OX)(/(?<!\w)`([^`]+)`/, B.code),
              (0, C.JJ)(/^```$/, E.code_block),
              (0, C.JJ)(/^(#{1,5})\s$/, E.heading, (f) => ({
                level: f[1].length,
              })),
              E.horizontal_rule && K(/^(\*\*\*|---|___)$/, E.horizontal_rule),
            ].filter(Boolean),
          });
        }
        var U = e(45772),
          P = e(74763),
          t = e(8422);
        const i = A.createContext(void 0);
        function p(x) {
          const { view: E, pmState: B, children: f } = x,
            _ = A.useMemo(() => ({ view: E, pmState: B }), [E, B]);
          return (0, o.jsx)(i.Provider, { value: _, children: f });
        }
        const S = A.memo(function (E) {
          const { schema: B, refOnUpdate: f, bSingleLine: _ } = E;
          return (
            v(
              A.useMemo(
                () =>
                  f &&
                  new O.k_({
                    view: (D) => ({
                      update: (...u) => f.current && f.current(...u),
                    }),
                  }),
                [f],
              ),
            ),
            v(A.useMemo(() => (0, g.w)(_ ? t.Mw : {}), [_])),
            v(_ ? t.zL : void 0),
            v(A.useMemo(() => (0, w.z)(), [])),
            v(A.useMemo(() => F(B), [B])),
            v(A.useMemo(() => (0, g.w)(I.RV), [])),
            v(A.useMemo(() => R(B), [B])),
            null
          );
        });
        function v(x) {
          const { pmState: E } = A.useContext(i);
          A.useEffect(() => {
            if (!(!E || !x)) return E.InstallPlugin(x);
          }, [x, E]);
        }
        function T() {
          var x;
          return (x = A.useContext(i)) == null ? void 0 : x.view;
        }
      },
      84419: (z, H, e) => {
        "use strict";
        e.d(H, { BM: () => O, DQ: () => K, cI: () => P, ce: () => A });
        var o = e(4188),
          I = e(36707),
          w = e(33645),
          g = e.n(w);
        function O(t, i, p = 0) {
          return () => [t, { class: i }, p];
        }
        function A(t, i, p = 0) {
          return [t, { class: i }, p];
        }
        function k(t, i) {
          return () => [
            i,
            { class: bbstyles.PreservedUnsupportedTag },
            ["span", { class: bbstyles.Tag }, `[${t}]`],
            ["span", 0],
            ["span", { class: bbstyles.Tag }, `[/${t}]`],
          ];
        }
        function C(t) {
          return {
            tag: `h${t}`,
            BBArgsToAttrs: (i) => ({ level: t, align: i.align || "left" }),
            AttrsToBBArgs: (i) => {
              let p = { tag: `h${i.level}`, args: {} };
              return (
                i.align &&
                  i.align != "left" &&
                  p.args &&
                  (p.args.align = i.align),
                p
              );
            },
          };
        }
        function L(t) {
          return {
            tag: `h${t}`,
            getAttrs(i) {
              return { level: t, align: i.style.textAlign || "left" };
            },
          };
        }
        const M = {
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
                const i = { class: (0, I.A)("pm_paragraph", g().Paragraph) };
                return (
                  t.attrs.align &&
                    t.attrs.align != "left" &&
                    (i.style = `text-align: ${t.attrs.align}`),
                  ["p", i, 0]
                );
              },
              bbCode: {
                tag: "p",
                autocloses: !0,
                BBArgsToAttrs: (t) => ({ align: t.align }),
                AttrsToBBArgs: (t) => {
                  let i = { args: {} };
                  return (
                    t.align && t.align != "left" && (i.args.align = t.align), i
                  );
                },
              },
            },
            heading: {
              attrs: { level: { default: 1 }, align: { default: "left" } },
              content: "inline*",
              group: "block",
              defining: !0,
              parseDOM: [1, 2, 3, 4, 5].map(L),
              toDOM(t) {
                const i = {
                  class:
                    `BB_Header${t.attrs.level} ` +
                    g()[`Header${t.attrs.level}`],
                };
                return (
                  t.attrs.align &&
                    t.attrs.align != "left" &&
                    (i.style = `text-align: ${t.attrs.align}`),
                  ["h" + t.attrs.level, i, 0]
                );
              },
              bbCode: [1, 2, 3, 4, 5].map(C),
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
                const { src: i, alt: p, title: S, style: v } = t.attrs;
                return [
                  "img",
                  {
                    src: i,
                    alt: p,
                    title: S,
                    class: (0, I.A)(g().Image, {
                      [g().Image_Inline]: v === "inline",
                    }),
                  },
                ];
              },
              bbCode: {
                tag: "img",
                BBArgsToAttrs: (t) => {
                  var i;
                  return {
                    src: t.src,
                    style: (i = t.style) != null ? i : void 0,
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
                    const i = t;
                    let p = "",
                      S = "";
                    for (const v of i.querySelectorAll("source"))
                      v.type == "video/mp4"
                        ? (p = v.src)
                        : v.type == "video/webm" && (S = v.src);
                    return {
                      mp4: p,
                      webm: S,
                      poster: i.poster || "",
                      autoplay: !!i.autoplay,
                      controls: !!i.controls,
                    };
                  },
                },
              ],
              toDOM(t) {
                const {
                    webm: i,
                    mp4: p,
                    poster: S,
                    autoplay: v,
                    controls: T,
                  } = t.attrs,
                  x = [];
                return (
                  i && x.push(["source", { src: i, type: "video/webm" }]),
                  p && x.push(["source", { src: p, type: "video/mp4" }]),
                  [
                    "video",
                    {
                      poster: S,
                      autoPlay: !!v,
                      controls: !!T,
                      loop: !T && !!v,
                    },
                    ...x,
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
              ...o.fF,
              content: "list_item+",
              group: "block",
              toDOM: O("ul", g().List),
              bbCode: { tag: "list" },
            },
            ordered_list: {
              ...o.o8,
              content: "list_item+",
              group: "block",
              toDOM: O("ol", g().OrderedList),
              bbCode: { tag: "olist" },
            },
            list_item: {
              ...o.Aw,
              content: "paragraph block*",
              toDOM: O("li", g().ListItem),
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
                  { class: g().CodeBlock },
                  ["code", { class: g().Code }, 0],
                ];
              },
              bbCode: { tag: "code" },
            },
          },
          F = {
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
              toDOM: O("b", (0, I.A)("BB_Bold", g().Bold)),
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
              toDOM: O("i", (0, I.A)("BB_Italic", g().Italic)),
              bbCode: { tag: "i" },
            },
            underline: {
              parseDOM: [{ tag: "u" }, { style: "text-decoration=underline" }],
              toDOM: O("u", (0, I.A)("BB_Underline", g().Underline)),
              bbCode: { tag: "u" },
            },
            strike: {
              parseDOM: [{ style: "text-decoration=line-through" }],
              toDOM: O("span", (0, I.A)("BB_Strike", g().Strike)),
              bbCode: { tag: "strike" },
            },
            code: {
              parseDOM: [{ tag: "code" }],
              toDOM: O("code", (0, I.A)("BB_Code", g().Code)),
              bbCode: { tag: "c" },
            },
            link: {
              attrs: { href: {}, title: { default: null } },
              inclusive: !1,
              parseDOM: [
                {
                  tag: "a[href]",
                  getAttrs(t) {
                    return {
                      href: t.getAttribute("href"),
                      title: t.getAttribute("title"),
                    };
                  },
                },
              ],
              toDOM(t) {
                const { href: i, title: p } = t.attrs;
                return ["a", { href: i, title: p, class: "BB_Link" }, 0];
              },
              bbCode: {
                tag: "url",
                BBArgsToAttrs: (t) => ({ href: t[""] }),
                AttrsToBBArgs: (t) => ({ args: { "": t.href } }),
                convertContentToAttr: "href",
              },
            },
          },
          K = { nodes: M, marks: F },
          P = {
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
                      class: (0, I.A)("BB_Color", g().Color),
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
                      class: (0, I.A)("BB_BGColor", g().BGColor),
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
      8561: (z, H, e) => {
        "use strict";
        e.d(H, { n: () => _, u: () => D });
        var o = e(38585),
          I = e(64868),
          w = e(98724),
          g = e(52893),
          O = e(8145),
          A = e(57053),
          k = e(71742),
          C = Object.defineProperty,
          L = (u, s, c) =>
            s in u
              ? C(u, s, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: c,
                })
              : (u[s] = c),
          M = (u, s, c) => L(u, typeof s != "symbol" ? s + "" : s, c);
        class F {
          constructor(s, c, a) {
            M(this, "m_nodes", []),
              M(this, "m_schema"),
              M(this, "m_bConvertNewlinesToBR"),
              M(this, "m_fnProcessText");
            var d;
            (this.m_schema = s),
              (this.m_bConvertNewlinesToBR =
                (d = c == null ? void 0 : c.bConvertNewlinesToBR) != null
                  ? d
                  : !1);
            const h = a && "mark" in a;
            this.m_fnProcessText = h || c == null ? void 0 : c.fnProcessText;
          }
          AppendText(s, c) {
            s.length &&
              (this.m_bConvertNewlinesToBR
                ? this.m_nodes.push(...this.GenerateBreaksForNewlines(s))
                : this.m_nodes.push(...this.TextNode(s)));
          }
          AppendNode(s) {
            this.m_nodes.push(s);
          }
          GetElements() {
            return this.m_nodes;
          }
          GenerateBreaksForNewlines(s) {
            const c = [];
            let a = 0;
            for (
              let d = s.indexOf(
                `
`,
                a,
              );
              d !== -1;
              d = s.indexOf(
                `
`,
                a,
              )
            )
              a != d && c.push(...this.TextNode(s.substring(a, d))),
                c.push(this.m_schema.nodes.hard_break.createChecked()),
                (a = d + 1);
            return a < s.length && c.push(...this.TextNode(s.substring(a))), c;
          }
          TextNode(s) {
            const c = this.m_fnProcessText && this.m_fnProcessText(s);
            return c || [this.m_schema.text(s)];
          }
        }
        function K(u) {
          return u
            .filter((s) => s.isText)
            .map((s) => s.text)
            .join();
        }
        function R(u) {
          let s = "";
          return (
            u.descendants((c) => {
              c.isText && (s += c.text);
            }),
            s
          );
        }
        class U extends O.Al {
          constructor(s, c) {
            var a;
            super(s.bbcode_dictionary, (d) => {
              const h =
                (d == null ? void 0 : d.tag) && s.bbcode_dictionary.get(d.tag);
              return new F(
                s.pm_schema,
                c,
                h && "Constructor" in h ? h.Constructor : void 0,
              );
            }),
              M(this, "m_schemaConfig"),
              M(this, "m_mapPMBBNodes", new Map()),
              M(this, "m_bUseBackslashEscapes"),
              (this.m_schemaConfig = s),
              (this.m_bUseBackslashEscapes =
                (a = c == null ? void 0 : c.bUseBackslashEscapes) != null
                  ? a
                  : !0),
              this.m_schemaConfig.bbcode_dictionary.forEach((d) => {
                "node" in d.Constructor &&
                  this.m_mapPMBBNodes.set(
                    d.Constructor.node.name,
                    d.Constructor,
                  );
              });
          }
          get schema() {
            return this.m_schemaConfig.pm_schema;
          }
          ParseBBCode(s) {
            const c = this.Parse(
              s,
              this.BBNodeToPMNode.bind(this),
              this.m_bUseBackslashEscapes,
            );
            return this.m_schemaConfig.pm_schema.topNodeType.createChecked(
              {},
              this.ConvertLineBreaksToParagraphs(A.FK.fromArray(c)),
            );
          }
          TryCreateNode(s, c, a) {
            let d = A.FK.from(c),
              h;
            if (
              !s.node.validContent(d) &&
              (s.node.isInline ||
                (d = A.FK.from(
                  c.filter((r) =>
                    r.isText && r.text.match(/^\s*$/)
                      ? !1
                      : !(
                          r.type == this.schema.nodes.hard_break &&
                          !s.node.validContent(A.FK.from(r))
                        ),
                  ),
                )),
              !s.node.validContent(d))
            ) {
              const r = s.acceptNode;
              h = [];
              let n = [],
                l = !1,
                m = !1;
              for (let b = 0; b < d.childCount; b++) {
                const y = d.child(b),
                  j = A.FK.from(y),
                  N = s.node.validContent(j);
                !m && (N || (r != null && r.validContent(j)))
                  ? (N || (l = !0), n.push(y))
                  : ((m = !0), h.push(y));
              }
              if ((console.assert(!l || !!r), l && r)) {
                r.isBlock &&
                  n.length > 1 &&
                  n[n.length - 1].type == this.schema.nodes.hard_break &&
                  (n = n.slice(0, -1));
                const b = this.m_mapPMBBNodes.get(r.name);
                (0, k.wT)(
                  b,
                  `Indicated acceptNode type ${r.name} for ${s.node.name} missing`,
                );
                let y;
                try {
                  b
                    ? (y = this.TryCreateNode(b, n, void 0))
                    : (y = r.createChecked(void 0, n));
                } catch (j) {
                  console.error(j), (y = []), (h = [...n, ...h]);
                }
                d = A.FK.from(y);
              } else d = A.FK.from(n);
            }
            try {
              const r =
                s.node.createAndFill(a, d) || s.node.createChecked(a, d);
              return h ? [r, ...h] : r;
            } catch {
              return (
                (0, k.wT)(
                  !1,
                  `Invalid content for node type ${s.node.name}, removing and promoting children.`,
                ),
                c
              );
            }
          }
          BBNodeToPMNode(s, c, ...a) {
            let d = s.BBArgsToAttrs ? s.BBArgsToAttrs(c.args || {}) : void 0;
            try {
              if (
                ("convertContentToAttr" in s &&
                  s.convertContentToAttr &&
                  ((!d || !d[s.convertContentToAttr]) &&
                    (d = { ...(d || {}), [s.convertContentToAttr]: K(a) }),
                  "node" in s && (a = [])),
                "node" in s)
              )
                return this.TryCreateNode(s, a, d);
              {
                const h = s.mark.create(d);
                return a.map((r) => this.RecursivelyApplyMark(r, h));
              }
            } catch (h) {
              return (
                console.error(`Error parsing [${c.tagname}] tag: ${h}`, h), []
              );
            }
          }
          RecursivelyApplyMark(s, c) {
            if (s.isText || s.type.allowsMarkType(c.type))
              return s.mark([...s.marks, c]);
            {
              const a = [];
              return (
                s.descendants(
                  (d) => (a.push(this.RecursivelyApplyMark(d, c)), !1),
                ),
                s.type.create(s.attrs, a, s.marks)
              );
            }
          }
          ConvertLineBreaksToParagraphs(s) {
            const c = new Map(),
              a = this.m_schemaConfig.pm_schema;
            this.m_mapPMBBNodes.forEach((r) => {
              r.acceptNode && c.set(r.acceptNode.name, r.node);
            });
            const d = [],
              h = {
                nodes: [],
                nodeType: void 0,
                reset() {
                  (this.nodes = []), (this.nodeType = void 0);
                },
                accumulate(r, n) {
                  return (
                    this.nodeType && r != this.nodeType && this.emit(),
                    (this.nodeType = r),
                    this.nodes.push(n),
                    !0
                  );
                },
                emit(r = !1) {
                  const n = this.nodeType || (r ? a.nodes.paragraph : void 0);
                  n && (d.push(n.createChecked({}, this.nodes)), this.reset());
                },
              };
            return (
              s.forEach((r) => {
                const n = r.type == a.nodes.hard_break,
                  l = A.FK.from(r);
                if (n || a.topNodeType.validContent(l)) {
                  const m = n && h.nodes.length > 0;
                  h.emit(),
                    n
                      ? m || d.push(a.nodes.paragraph.createChecked())
                      : d.push(r);
                } else {
                  let m;
                  if (
                    (a.nodes.paragraph.validContent(l)
                      ? (m = a.nodes.paragraph)
                      : (m = c.get(r.type.name)),
                    m)
                  )
                    h.accumulate(m, r);
                  else {
                    (0, k.wT)(
                      !1,
                      `Couldn't accept ${r.type.name} at root of document, converting to paragraph`,
                    );
                    const b = R(r);
                    b && h.accumulate(a.nodes.paragraph, a.text(b));
                  }
                }
              }),
              (h.nodes.length || !d.length) && h.emit(!0),
              A.FK.from(d)
            );
          }
        }
        function P(u, s, c) {
          var a;
          const d = {
            schema: s.pm_schema,
            config: s.pm_to_bbcode_config,
            bUseBackslashEscapes:
              (a = c == null ? void 0 : c.bUseBackslashEscapes) != null
                ? a
                : !0,
          };
          return t(d, u, [], !1);
        }
        function t(u, s, c, a) {
          const { schema: d, config: h } = u;
          let r = s.marks,
            n = "";
          const l = h.mapNodes.get(s.type),
            { tag: m, args: b } = v(l, s);
          m == "emoticon"
            ? (n += ":")
            : m && (n += (0, O.CS)(m, b, l == null ? void 0 : l.bVerbatimArgs));
          const y = a || !!(l != null && l.bVerbatimContent);
          let j = !1;
          return (
            s.content.forEach((N) => {
              if (
                (([n, r] = p(h, r, N.marks, n)),
                ([n, r] = S(h, r, N.marks, n)),
                N.type.isText)
              ) {
                const J = N.text || "";
                n += y || !u.bUseBackslashEscapes ? J : (0, O.vE)(J);
              } else if (N.type == d.nodes.hard_break)
                n += `
`;
              else {
                const J = i(h, N);
                J &&
                  j &&
                  (n += `
`),
                  (n += t(u, N, r, y)),
                  (j = J);
                return;
              }
              j = !1;
            }),
            ([n] = p(h, r, c, n)),
            m == "emoticon" ? (n += ":") : m && (n += (0, O.op)(m)),
            n
          );
        }
        function i(u, s) {
          return s.type.isBlock && !v(u.mapNodes.get(s.type), s).tag;
        }
        function p(u, s, c, a) {
          const d = [];
          for (const r of s) c.indexOf(r) === -1 && d.push(r);
          if (!d.length) return [a, s];
          const h = s.slice();
          for (
            ;
            d.length &&
            ((0, k.wT)(h.length, "no marks left to close"), !!h.length);
          ) {
            const r = h.pop(),
              n = u.mapMarks.get(r.type),
              { tag: l } = T(n, r);
            a += (0, O.op)(l);
            const m = d.indexOf(r);
            m != -1 && d.splice(m, 1);
          }
          return [a, h];
        }
        function S(u, s, c, a) {
          let d;
          for (const h of c)
            if (s.indexOf(h) === -1) {
              d || (d = s.slice());
              const r = u.mapMarks.get(h.type);
              if (((0, k.wT)(r, "mark missing bbtag"), r)) {
                d.push(h);
                const { args: n, tag: l } = T(r, h);
                a += (0, O.CS)(l, n);
              }
            }
          return [a, d != null ? d : s];
        }
        function v(u, s) {
          if (u && u.AttrsToBBArgs) {
            const { tag: c = u.tag, args: a = {} } = u.AttrsToBBArgs(
              s.attrs,
              s,
            );
            return { tag: c, args: a };
          }
          return { tag: u == null ? void 0 : u.tag, args: {} };
        }
        function T(u, s) {
          if (u && u.AttrsToBBArgs) {
            const { tag: c = u.tag, args: a = {} } = u.AttrsToBBArgs(
              s.attrs,
              s,
            );
            return { tag: c, args: a };
          }
          return { tag: u == null ? void 0 : u.tag, args: {} };
        }
        var x = Object.defineProperty,
          E = (u, s, c) =>
            s in u
              ? x(u, s, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: c,
                })
              : (u[s] = c),
          B = (u, s, c) => E(u, typeof s != "symbol" ? s + "" : s, c);
        const f = new g.hs("CProseMirrorState - OnChange");
        class _ {
          constructor(s, c, a, d) {
            B(this, "m_bbcode"),
              B(this, "m_currentDoc"),
              B(this, "m_bHasUncomittedChanges", !1),
              B(this, "m_schemaConfig"),
              B(this, "m_bbcodeParser"),
              B(this, "m_bUseBackslashEscapes"),
              B(this, "m_onStateChangedCallbacks", new o.l()),
              B(this, "m_fnCommitChanges"),
              B(this, "m_view"),
              B(this, "m_state");
            const { parser: h, bUseBackslashEscapes: r = !0 } =
              d != null ? d : {};
            (this.m_schemaConfig = s),
              (this.m_bUseBackslashEscapes = r),
              (this.m_bbcodeParser = new U(s, {
                ...h,
                bUseBackslashEscapes: r,
              })),
              (this.m_bbcode = c),
              (this.m_fnCommitChanges = a),
              (this.m_state = this.ConstructState());
          }
          CommitChanges() {
            this.m_currentDoc &&
              this.m_bHasUncomittedChanges &&
              ((this.m_bbcode = P(this.m_currentDoc, this.m_schemaConfig, {
                bUseBackslashEscapes: this.m_bUseBackslashEscapes,
              })),
              this.m_fnCommitChanges(this.m_bbcode, this.m_currentDoc),
              (this.m_bHasUncomittedChanges = !1));
          }
          BHasUncomittedChanges() {
            return this.m_bHasUncomittedChanges;
          }
          UpdateState(s) {
            var c;
            const a = s(
              ((c = this.m_view) == null ? void 0 : c.state.tr) ||
                this.m_state.tr,
            );
            !a ||
              !a.docChanged ||
              (this.m_view
                ? this.m_view.dispatch(a)
                : (this.m_state = this.m_state.apply(a)));
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
            const s = new g.k_({
                key: f,
                view: (a) => (
                  console.assert(!this.m_view),
                  (this.m_view = a),
                  {
                    update: (d, h) => this.OnStateChange(h, d.state),
                    destroy: () => (this.m_view = void 0),
                  }
                ),
              }),
              c = [(0, w.b6)(), s];
            return g.$t.create({
              schema: this.m_schemaConfig.pm_schema,
              doc: this.m_bbcodeParser.ParseBBCode(this.m_bbcode),
              plugins: c,
            });
          }
          InstallPlugin(s) {
            var c;
            const a = this.m_view ? this.m_view.state : this.m_state;
            return (
              a.plugins.includes(s) ||
                ((this.m_state = a.reconfigure({ plugins: [...a.plugins, s] })),
                (c = this.m_view) == null || c.updateState(this.m_state)),
              () => {
                var d;
                const h = this.m_view ? this.m_view.state : this.m_state;
                (this.m_state = h.reconfigure({
                  plugins: h.plugins.filter((r) => r != s),
                })),
                  (d = this.m_view) == null || d.updateState(this.m_state);
              }
            );
          }
          OnStateChange(s, c) {
            (this.m_state = c),
              s.doc &&
                s.doc != c.doc &&
                ((this.m_currentDoc = c.doc),
                (this.m_bHasUncomittedChanges = !0),
                this.m_onStateChangedCallbacks.Dispatch(
                  this.m_currentDoc,
                  s.doc,
                ));
          }
          ReplaceDocument(s) {
            this.m_bbcode != s &&
              this.UpdateState((c) => {
                this.m_bbcode = s;
                const a = this.m_bbcodeParser.ParseBBCode(s);
                return (
                  (c = this.m_state.tr
                    .replaceWith(0, this.m_state.doc.content.size, a)
                    .scrollIntoView()),
                  c
                );
              });
          }
        }
        function D(u, s) {
          (0, I.hL)(u == null ? void 0 : u.OnStateChangedCallbacks, s);
        }
      },
      74827: (z, H, e) => {
        "use strict";
        e.d(H, {
          Cd: () => O,
          OX: () => U,
          bQ: () => P,
          gj: () => C,
          vn: () => A,
          wt: () => F,
        });
        var o = e(79216),
          I = e(52893);
        function w(t, i) {
          const p = t.state;
          if (!t.state.plugins.includes(i)) {
            const S = [...t.state.plugins, i];
            t.updateState(p.reconfigure({ plugins: S }));
          }
        }
        function g(t, i) {
          if (!t.isDestroyed) {
            const p = t.state,
              S = p.plugins.filter((v) => v !== i);
            t.updateState(p.reconfigure({ plugins: S }));
          }
        }
        function O(t, i) {
          const { from: p, $from: S, to: v, empty: T } = t.selection;
          return T
            ? !!i.isInSet(t.storedMarks || S.marks())
            : t.doc.rangeHasMark(p, v, i);
        }
        function A(t, i, p) {
          var S;
          const { parent: v } = p,
            T = v.childAfter(p.parentOffset),
            x =
              (S = T.node) == null ? void 0 : S.marks.find((u) => u.type == i);
          if (!x) return;
          let E = p.index() - 1,
            B = p.start() + T.offset;
          for (; E >= 0 && x.isInSet(v.child(E).marks); )
            (B -= v.child(E).nodeSize), (E -= 1);
          let f = p.index() + 1,
            _ = p.start() + T.offset + T.node.nodeSize;
          for (; f < v.childCount && x.isInSet(v.child(f).marks); )
            (_ += v.child(f).nodeSize), (f += 1);
          const D = t.doc.slice(B, _);
          return { from: B, to: _, slice: D, mark: x };
        }
        function k(t, i, p) {
          if (t.type !== i) return !1;
          if (p === void 0) return !0;
          for (const S in p) if (p[S] !== t.attrs[S]) return !1;
          return !0;
        }
        function C(t, i, p) {
          let { $from: S, to: v } = t.selection;
          for (let T = S.depth; T > 0; T--) {
            if (v > S.end(T)) return !1;
            const x = S.node(T);
            if (k(x, i, p)) return !0;
          }
          return !1;
        }
        function L(t, i, p) {
          for (let S of i) if (C(t, S, p)) return S;
          return null;
        }
        function M(t, i, p) {
          const { $from: S, to: v } = t.selection;
          for (let T = S.sharedDepth(v); T > 0; T--) {
            const x = S.node(T);
            if (x.type === i) return !!x.attrs[p];
          }
          return !1;
        }
        function F(t, i, p) {
          const { $from: S, to: v } = t.selection;
          for (let T = S.sharedDepth(v); T > 0; T--) {
            const x = S.node(T);
            if (p === void 0 ? x.type === i : x.hasMarkup(i, p))
              return S.before(T);
          }
        }
        function K(t, i) {
          return (p, S) => {
            const v = F(p, t);
            if (v === void 0) return !1;
            if (S) {
              const T = p.doc.nodeAt(v);
              if ((console.assert(!!T), !T)) return !1;
              S(p.tr.setNodeMarkup(v, t, { ...T.attrs, [i]: !T.attrs[i] }));
            }
            return !0;
          };
        }
        function R(t, i) {
          return (p, S) => {
            const { $from: v } = p.selection;
            let T = null,
              x = 0;
            for (let E = v.depth; E > 0; E--) {
              const B = v.node(E);
              if (t.includes(B.type)) {
                (T = B), (x = v.before(E));
                break;
              }
            }
            return T
              ? (S && S(p.tr.setNodeMarkup(x, T.type, { ...T.attrs, ...i })),
                !0)
              : !1;
          };
        }
        function U(t, i, p = {}) {
          return new o.fV(t, (S, v, T, x) => {
            const E = p instanceof Function ? p(v) : p,
              B = S.tr;
            if (v[1]) {
              const f = T + v[0].indexOf(v[1]),
                _ = f + v[1].length;
              _ < x && B.delete(_, x),
                f > T && B.delete(T, f),
                (x = T + v[1].length);
            }
            return B.addMark(T, x, i.create(E)), B.removeStoredMark(i), B;
          });
        }
        function P(t, i, p) {
          const S = { left: i, top: p },
            v = t.posAtCoords(S);
          if (v != null && v.pos) {
            const T = t.state.doc.resolve(v.pos);
            t.dispatch(t.state.tr.setSelection(I.U3.near(T)));
          }
        }
      },
      28922: (z, H, e) => {
        "use strict";
        e.d(H, { s: () => K });
        var o = e(7850),
          I = e(39905),
          w = e(90626),
          g = e(61257),
          O = e(19316),
          A = e(56718),
          k = e(71421),
          C = e(27828),
          L = e.n(C);
        function M(R) {
          return `rgba(${R.rgb.r}, ${R.rgb.g}, ${R.rgb.b}, ${R.rgb.a})`;
        }
        function F(R) {
          const U = parseInt(R.slice(1), 16),
            P = (U >> 16) & 255,
            t = (U >> 8) & 255,
            i = U & 255;
          return `rgba(${P}, ${t}, ${i}, 1)`;
        }
        function K(R) {
          const { color: U, onChange: P, strTitle: t, disableAlpha: i } = R,
            [p, S] = (0, w.useState)(() => U || "rgba(255, 255, 255, 1)"),
            v = (0, w.useCallback)(async () => {
              if (!("EyeDropper" in window)) {
                alert(I.Z.Localize("#Sale_EyeDropperError"));
                return;
              }
              try {
                const E = (await new window.EyeDropper().open()).sRGBHex,
                  B = F(E);
                S(B), P(B);
              } catch (T) {
                console.warn(I.Z.Localize("#Sale_EyeDropperFailed"), T);
              }
            }, [P]);
          return (0, o.jsxs)("div", {
            className: L().ColorPickerDialog,
            children: [
              !!t && (0, o.jsx)(O.JU, { children: t }),
              (0, o.jsx)(g.xk, {
                onChange: (T) => {
                  const x = M(T);
                  S(x), P(x);
                },
                color: p,
                disableAlpha: i,
                className: L().ColorPickerCtn,
              }),
              (0, o.jsx)("div", {
                className: L().EyeDropperCtn,
                children: (0, o.jsx)(k.Gq, {
                  toolTipContent: I.Z.Localize("#Sale_BackgroundColorPicker"),
                  children: (0, o.jsx)(O.$n, {
                    className: L().EyeDropperBtn,
                    onClick: v,
                    children: (0, o.jsx)(A.O7b, {}),
                  }),
                }),
              }),
            ],
          });
        }
      },
      81973: (z, H, e) => {
        "use strict";
        e.d(H, { X: () => L, w: () => A });
        var o = e(33645),
          I = e.n(o),
          w = e(38539),
          g = e(84419),
          O = e(36707);
        const A = { NoBorder: "noborder", EqualCells: "equalcells" },
          k = w.of({
            tableGroup: "block",
            cellContent: "paragraph block*",
            cellAttributes: {
              class: {
                default: I().TableCell,
                setDOMAttr: (M, F) => {
                  F.class = M;
                },
              },
            },
          }),
          C = {
            BBArgsToAttrs: (M) => {
              const F = {};
              return (
                M.colspan && (F.colspan = parseInt(M.colspan)),
                M.rowspan && (F.rowspan = parseInt(M.rowspan)),
                M.colwidth &&
                  (F.colwidth = M.colwidth.split(",").map((K) => parseInt(K))),
                F
              );
            },
            AttrsToBBArgs: (M) => {
              const F = {};
              return (
                M.colspan &&
                  M.colspan != 1 &&
                  (F.colspan = M.colspan.toString()),
                M.rowspan &&
                  M.rowspan != 1 &&
                  (F.rowspan = M.rowspan.toString()),
                M.colwidth && (F.colwidth = M.colwidth.join(",")),
                { args: F }
              );
            },
          },
          L = {
            table: {
              ...k.table,
              toDOM: (M) =>
                (0, g.ce)(
                  "table",
                  (0, O.A)(
                    I().Table,
                    M.attrs.noborder && I().NoBorder,
                    M.attrs.equalcells && I().EqualCells,
                  ),
                  ["tbody", 0],
                ),
              attrs: {
                [A.NoBorder]: { default: !1 },
                [A.EqualCells]: { default: !0 },
              },
              bbCode: {
                tag: "table",
                BBArgsToAttrs: (M) => ({
                  noborder: !!M.noborder,
                  equalcells: !!M.equalcells,
                }),
                AttrsToBBArgs: (M, F) => {
                  const K = {};
                  M.noborder && (K.noborder = "1"),
                    M.equalcells && (K.equalcells = "1");
                  const R = F.child(0);
                  if (R) {
                    let U = [];
                    for (let P = 0; P < R.childCount; P++) {
                      const t = R.child(P).attrs;
                      t.colwidth ? U.push(...t.colwidth) : U.push(void 0);
                    }
                    K.colwidth = U.join(",");
                  }
                  return { args: K };
                },
              },
            },
            table_row: {
              ...k.table_row,
              toDOM: (0, g.BM)("tr", I().TableRow),
              bbCode: { tag: "tr" },
            },
            table_cell: { ...k.table_cell, bbCode: { ...C, tag: "td" } },
            table_header: { ...k.table_header, bbCode: { ...C, tag: "th" } },
          };
      },
      38348: (z, H, e) => {
        "use strict";
        e.d(H, { _: () => O });
        var o = e(7850),
          I = e(90626),
          w = e(19316),
          g = e(88003);
        function O(A) {
          const {
              closeModal: k,
              strTitle: C,
              onOK: L,
              strOKText: M,
              onCancel: F,
              strCancelText: K,
              bOKDisabled: R,
              bCancelDisabled: U,
              strClassNameContent: P = "GenericFormDialog",
              children: t,
            } = A,
            i = I.useCallback(() => {
              F && F(), k();
            }, [F, k]),
            p = U ? () => {} : i;
          return (0, o.jsx)(g.x_, {
            onEscKeypress: p,
            children: (0, o.jsxs)(w.U9, {
              onSubmit: L,
              classNameContent: P,
              children: [
                (0, o.jsx)(w.Y9, { children: C }),
                t,
                (0, o.jsx)(w.wi, {
                  children: (0, o.jsx)(w.CB, {
                    strOKText: M,
                    bOKDisabled: R,
                    onCancel: p,
                    strCancelText: K,
                    bCancelDisabled: U,
                  }),
                }),
              ],
            }),
          });
        }
      },
      80556: (z, H, e) => {
        "use strict";
        e.d(H, { J: () => c });
        var o = e(7850),
          I = e(74827),
          w = e(52893),
          g = e(90626),
          O = e(19298),
          A = e(64238),
          k = e.n(A),
          C = e(36118),
          L = e(24660),
          M = e(38566),
          F = e(54130),
          K = e(3166),
          R = e(88208);
        const U = Object.assign(P, { Root: t, Content: p });
        function P(r) {
          const { children: n, className: l, ...m } = r;
          return (0, o.jsx)(U.Root, {
            ...m,
            children: (0, o.jsx)(U.Content, { className: l, children: n }),
          });
        }
        function t(r) {
          const {
              onClose: n,
              className: l,
              navID: m,
              children: b,
              allowScrollBehind: y,
              ...j
            } = r,
            [N, J] = g.useState(!1),
            V = g.useCallback((W) => {
              W &&
                (W.showModal(),
                W.ownerDocument.defaultView &&
                  J(
                    W.ownerDocument.body.scrollHeight >
                      W.ownerDocument.defaultView.innerHeight,
                  ));
            }, []),
            G = g.useCallback(
              (W) => {
                W.target == W.currentTarget && n("backdropclick");
              },
              [n],
            );
          return (0, o.jsx)(i, {
            navID: m != null ? m : "ModalDialog",
            onClose: n,
            children: (0, o.jsx)("dialog", {
              ref: V,
              className: k()(R.ModalDialog, !y && N && R.PreventScroll, l),
              onClose: () => n("onclose"),
              onClick: G,
              ...j,
              children: (0, o.jsx)(F.q, { children: b }),
            }),
          });
        }
        function i(r) {
          const { navID: n, onClose: l, children: m } = r,
            b = g.useCallback(() => l("cancelbutton"), [l]),
            y = g.useRef(void 0);
          return (
            (0, L.O7)(y, !0, !0),
            (0, K.Qn)()
              ? (0, o.jsx)(M.D6, {
                  navID: n != null ? n : "ModalDialog",
                  onCancelButton: b,
                  modal: !0,
                  navTreeRef: y,
                  children: m,
                })
              : (0, o.jsx)(o.Fragment, { children: m })
          );
        }
        function p(r) {
          const { className: n, children: l } = r;
          return (0, o.jsx)("div", {
            className: k()(R.ModalDialogContent, n),
            onClick: (m) => m.stopPropagation(),
            children: l,
          });
        }
        var S = e(5598),
          v = e.n(S);
        function T(r) {
          const {
            onClose: n,
            className: l,
            navID: m,
            children: b,
            strTitle: y,
            ...j
          } = r;
          return (0, o.jsx)(U, {
            onClose: n,
            navID: m != null ? m : "SimpleModalDialog",
            ...j,
            children: (0, o.jsxs)("div", {
              className: k()(l, v().SimpleModalDialog),
              children: [
                " ",
                (0, o.jsxs)(O.Z, {
                  className: v().SimpleModalDialogHeader,
                  children: [
                    y &&
                      (0, o.jsx)("h2", {
                        className: v().SimpleModalDialogTitle,
                        children: y,
                      }),
                    (0, o.jsx)("button", {
                      onClick: (N) => (n("xclick"), N.preventDefault(), !1),
                      className: v().XButton,
                      children: (0, o.jsx)(C.tmm, {}),
                    }),
                  ],
                }),
                (0, o.jsx)("div", {
                  className: v().SimpleModalContentCtn,
                  children: b,
                }),
              ],
            }),
          });
        }
        var x = e(28922),
          E = e(88376),
          B = e.n(E),
          f = e(66243);
        function _(r) {
          const {
            strTitle: n,
            strDescription: l,
            className: m,
            children: b,
            navID: y,
            ...j
          } = r;
          return jsxs(ModalDialog, {
            className: classNames(m, styles.ModalConfirmDialog),
            onClose: j.onClose,
            navID: y,
            children: [
              n &&
                jsxs(Panel, {
                  className: styles.Header,
                  children: [
                    jsx("h2", { children: n }),
                    jsx("button", {
                      onClick: j.onClose,
                      children: jsx(SVG.X_Line_Better, {}),
                    }),
                  ],
                }),
              l &&
                jsx(Panel, {
                  className: styles.Description,
                  children: jsx("div", { children: l }),
                }),
              b,
              jsx(D, { ...j }),
            ],
          });
        }
        function D(r) {
          const { strOKLabel: n, strCancelLabel: l, onOK: m, onClose: b } = r;
          return (0, o.jsxs)(O.Z, {
            className: B().Buttons,
            children: [
              !!n &&
                (0, o.jsx)(f.n9, { onClick: m != null ? m : b, children: n }),
              !!l && (0, o.jsx)(f.Oh, { onClick: b, children: l }),
            ],
          });
        }
        var u = e(2801),
          s = e(18210);
        function c(r, n, l) {
          const [m, b] = g.useState(void 0),
            y = g.useRef(null),
            j = g.useCallback(
              (V) => {
                y.current = V;
                const { state: G } = V,
                  W = G.selection;
                let { from: $, to: Q, empty: q } = W;
                const ot = n ? r.marks.color : r.marks.bgcolor;
                let st = "",
                  rt = "";
                const at = q ? W.$from : G.doc.resolve($),
                  Z = (0, I.vn)(G, ot, at),
                  tt = !!Z;
                tt
                  ? ((st = Z.mark.attrs.color),
                    q
                      ? ((rt = Z.slice.content.textBetween(
                          0,
                          Z.slice.content.size,
                        )),
                        ($ = Z.from),
                        (Q = Z.to))
                      : (($ = Math.max(Z.from, $)),
                        (Q = Math.min(Z.to, Q)),
                        (rt = Z.slice.content.textBetween(
                          $ - Z.from,
                          Q - Z.from,
                        ))))
                  : q || (rt = G.doc.cut($, Q).textContent);
                let X = {};
                if (l)
                  for (const et in l) {
                    const nt = l[et],
                      lt = Z ? nt.fnReadValue(Z.mark) : nt.defaultValue;
                    X[et] = lt;
                  }
                b({
                  viewRef: y,
                  strColor: st,
                  strTargetText: rt,
                  bIsUpdate: tt,
                  addtlAttrs: l,
                  addtlAttrsValues: X,
                  from: $,
                  to: Q,
                });
              },
              [l, n, r.marks.bgcolor, r.marks.color],
            ),
            N = g.useCallback(() => {
              const V = y.current;
              window.setTimeout(() => {
                V && !V.isDestroyed && V.focus();
              }, 1),
                b(void 0);
            }, []),
            J =
              m &&
              (0, o.jsx)(u.EN, {
                active: !0,
                children: (0, o.jsx)(h, {
                  schema: r,
                  bColor: n,
                  closeModal: N,
                  ...m,
                }),
              });
          return [j, J];
        }
        function a(r) {
          if (r.startsWith("rgb")) {
            const n = r.match(/\d+/g);
            if (!n || n.length < 3) return "#000000";
            const [l, m, b] = n.map(Number);
            return (
              "#" +
              [l, m, b]
                .map((y) => {
                  const j = y.toString(16);
                  return j.length === 1 ? "0" + j : j;
                })
                .join("")
            );
          }
          return r;
        }
        function d(r) {
          const n = r.match(
            /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)$/i,
          );
          if (n) {
            let [, l, m, b, y] = n;
            const j = parseInt(l, 10),
              N = parseInt(m, 10),
              J = parseInt(b, 10);
            return `#${((1 << 24) + (j << 16) + (N << 8) + J).toString(16).slice(1)}`;
          }
          return "#7e3232";
        }
        const h = g.memo(function (n) {
          const {
              schema: l,
              strColor: m,
              bIsUpdate: b,
              strTargetText: y,
              bColor: j,
              addtlAttrs: N,
              addtlAttrsValues: J,
              closeModal: V,
              viewRef: G,
              from: W,
              to: $,
            } = n,
            [Q, q] = g.useState(m),
            ot = g.useRef(null),
            [st, rt] = g.useState(J),
            at = g.useCallback(() => {
              try {
                const X = G.current;
                if (!X || X.isDestroyed) {
                  console.warn(
                    "Editor view is destroyed; skipping color insert",
                  );
                  return;
                }
                const { state: et, dispatch: nt } = X,
                  lt = j ? l.marks.color : l.marks.bgcolor;
                if (!lt) {
                  console.log("debug: no markType");
                  return;
                }
                if (!Q || !/^#[0-9a-fA-F]{6}$/.test(Q)) {
                  console.log("debug: invalid color text: " + Q);
                  return;
                }
                const ct = Math.max(0, Math.min(W, et.doc.content.size)),
                  dt = Math.max(0, Math.min($, et.doc.content.size));
                if (ct > dt) {
                  console.error("Invalid selection range:", W, $);
                  return;
                }
                const it = lt.create({ color: Q, ...st });
                let Y = et.tr;
                W === $
                  ? (Y = Y.addStoredMark(it))
                  : ((Y = Y.removeMark(W, $, lt)),
                    (Y = Y.addMark(W, $, it)),
                    (Y = Y.setSelection(w.U3.create(Y.doc, $)))),
                  nt(Y.scrollIntoView());
              } catch (X) {
                console.error(X);
              } finally {
                requestAnimationFrame(() => V());
              }
            }, [st, j, V, Q, W, l.marks.bgcolor, l.marks.color, $, G]);
          g.useLayoutEffect(() => {
            var X, et, nt;
            (et = (X = ot.current) == null ? void 0 : X.value) != null &&
            et.length
              ? ot.current.focus()
              : (nt = ot.current) == null || nt.focus();
          }, []);
          const Z = (0, s.we)(
              j ? "#FormattingToolbar_Color" : "#FormattingToolbar_BgColor",
            ),
            tt = b
              ? (0, s.we)("#Button_Save")
              : (0, s.we)(
                  j ? "#FormattingToolbar_Color" : "#FormattingToolbar_BgColor",
                );
          return (0, o.jsxs)(T, {
            onClose: V,
            strTitle: Z,
            children: [
              (0, o.jsx)(x.s, {
                color: Q,
                disableAlpha: !0,
                onChange: (X) => q(d(X)),
              }),
              (0, o.jsx)(D, {
                strOKLabel: tt,
                strCancelLabel: (0, s.we)("#Button_Cancel"),
                onOK: () => {
                  Q && Q.length > 0 && at();
                },
                onClose: V,
              }),
            ],
          });
        });
      },
      12293: (z, H, e) => {
        "use strict";
        e.d(H, { E: () => L });
        var o = e(7850),
          I = e(74827),
          w = e(52893),
          g = e(90626),
          O = e(19316),
          A = e(2801),
          k = e(38348),
          C = e(18210);
        function L(R, U) {
          const [P, t] = g.useState(void 0),
            i = g.useCallback(
              (T) => {
                const x = T.state.selection;
                let E = "",
                  B = "",
                  { from: f, to: _ } = x;
                const D = (0, I.vn)(T.state, R.marks.link, x.$from),
                  u = !!D;
                D
                  ? ((B = D.mark.attrs.href),
                    x.empty
                      ? ((E = D.slice.content.textBetween(
                          0,
                          D.slice.content.size,
                        )),
                        (f = D.from),
                        (_ = D.to))
                      : ((f = Math.max(D.from, x.from)),
                        (_ = Math.min(D.to, x.to)),
                        (E = D.slice.content.textBetween(
                          f - D.from,
                          _ - D.from,
                        ))))
                  : T.state.selection.empty ||
                    ((E = T.state.doc.cut(
                      T.state.selection.from,
                      T.state.selection.to,
                    ).textContent),
                    E.match(/^https?:\/\//) && (B = E));
                let s = {};
                if (U)
                  for (const c in U) {
                    const a = U[c],
                      d = D ? a.fnReadValue(D.mark) : a.defaultValue;
                    s[c] = d;
                  }
                t({
                  view: T,
                  strLinkText: E,
                  strLinkHref: B,
                  bIsUpdate: u,
                  addtlAttrs: U,
                  addtlAttrsValues: s,
                  from: f,
                  to: _,
                });
              },
              [R.marks.link, U],
            ),
            p = P == null ? void 0 : P.view,
            S = g.useCallback(() => {
              window.setTimeout(() => p.focus(), 1), t(void 0);
            }, [p]),
            v =
              P &&
              (0, o.jsx)(A.EN, {
                active: !0,
                children: (0, o.jsx)(M, { schema: R, closeModal: S, ...P }),
              });
          return [i, v];
        }
        const M = g.memo(function (U) {
          const {
              schema: P,
              strLinkText: t,
              strLinkHref: i,
              bIsUpdate: p,
              addtlAttrs: S,
              addtlAttrsValues: v,
              closeModal: T,
              view: x,
              from: E,
              to: B,
            } = U,
            [f, _] = g.useState(t),
            [D, u] = g.useState(i),
            s = g.useRef(null),
            c = g.useRef(null),
            [a, d] = g.useState(v),
            h = () => {
              var l;
              let m = x.state.tr;
              const b = { href: D };
              for (const N in a) b[N] = a[N];
              const y = (l = P.marks.link) == null ? void 0 : l.create(b),
                j = P.text(f || D, [y]);
              try {
                (m = m.replaceRangeWith(E, B, j)),
                  (m = m.setSelection(
                    w.U3.create(m.doc, E + j.nodeSize, E + j.nodeSize),
                  )),
                  x.dispatch(m);
              } catch (N) {
                console.error("Error during link insertion", N);
              }
              T();
            };
          g.useLayoutEffect(() => {
            var l, m, b, y, j;
            (m = (l = s.current) == null ? void 0 : l.value) != null && m.length
              ? (y = (b = c.current) == null ? void 0 : b.value) != null &&
                y.length
                ? (s.current.Focus(), s.current.element.select())
                : c.current.Focus()
              : (j = s.current) == null || j.Focus();
          }, []);
          const r = p
              ? (0, C.we)("#FormattingToolbar_EditLink")
              : (0, C.we)("#FormattingToolbar_InsertLink"),
            n = p
              ? (0, C.we)("#Button_Save")
              : (0, C.we)("#FormattingToolbar_InsertLink");
          return (0, o.jsxs)(k._, {
            onOK: h,
            closeModal: T,
            strTitle: r,
            strOKText: n,
            bOKDisabled: D.length == 0,
            children: [
              (0, o.jsx)(O.pd, {
                ref: s,
                value: f,
                onChange: (l) => _(l.currentTarget.value),
                label: (0, C.we)("#FormattingToolbar_LinkText"),
              }),
              (0, o.jsx)(O.pd, {
                ref: c,
                value: D,
                placeholder: "https://",
                onChange: (l) => u(l.currentTarget.value),
                label: (0, C.we)("#FormattingToolbar_LinkAddress"),
                mustBeURL: !0,
              }),
              S && (0, o.jsx)(F, { addtlAttrs: S, values: a, setValues: d }),
            ],
          });
        });
        function F(R) {
          const { addtlAttrs: U, values: P, setValues: t } = R;
          return (0, o.jsx)(o.Fragment, {
            children: Object.keys(U).map((i) =>
              (0, o.jsx)(
                K,
                {
                  attrName: i,
                  fnRender: U[i].fnRenderEditor,
                  value: P[i],
                  setValues: t,
                },
                i,
              ),
            ),
          });
        }
        const K = g.memo(function (U) {
          const { attrName: P, fnRender: t, value: i, setValues: p } = U,
            S = g.useCallback((v) => p((T) => ({ ...T, [P]: v })), [P, p]);
          return t(i, S);
        });
      },
      83085: (z, H, e) => {
        "use strict";
        e.d(H, { Xv: () => T, pw: () => x });
        var o = e(7850),
          I = e(71742),
          w = e(74432),
          g = e(19565),
          O = e(52893),
          A = e(29287),
          k = e(90626);
        function C(h, r = "PlaceholderPlugin") {
          const [n, l] = k.useState([]),
            [m] = k.useState(
              () =>
                new O.k_({
                  key: new O.hs(r),
                  state: {
                    init() {
                      return A.zF.empty;
                    },
                    apply(V, G) {
                      G = G.map(V.mapping, V.doc);
                      const W = V.getMeta(this) || [];
                      for (const $ of W)
                        if ($ != null && $.add) {
                          const { id: Q, data: q } = $.add,
                            ot = (at, Z) => {
                              const tt = document.createElement(h);
                              return (
                                l((X) => [
                                  ...X,
                                  { id: Q, element: tt, data: q },
                                ]),
                                tt
                              );
                            },
                            st = (at) => {
                              l((Z) => Z.filter((tt) => tt.element != at));
                            },
                            rt = A.NZ.widget($.add.pos, ot, {
                              id: Q,
                              destroy: st,
                            });
                          G = G.add(V.doc, [rt]);
                        } else
                          $ != null &&
                            $.remove &&
                            (G = G.remove(
                              G.find(
                                void 0,
                                void 0,
                                (Q) => Q.id == $.remove.id,
                              ),
                            ));
                      return G;
                    },
                  },
                  props: {
                    decorations(V) {
                      return this.getState(V);
                    },
                  },
                }),
            );
          (0, g.c$)(m);
          const b = (0, g.Hd)(),
            y = k.useRef(0),
            j = k.useCallback(
              (V, G, W) => {
                const $ = `${r}_${y.current++}`;
                let Q = W || b.state.tr;
                G === void 0 &&
                  (Q.selection.empty || Q.deleteSelection(),
                  (G = Q.selection.from));
                const q = (W == null ? void 0 : W.getMeta(m)) || [];
                return (
                  Q.setMeta(m, [...q, { add: { id: $, pos: G, data: V } }]),
                  W || b.dispatch(Q),
                  $
                );
              },
              [m, r, b],
            ),
            N = k.useCallback(
              (V) => {
                const G = m.getState(b.state),
                  W =
                    G == null
                      ? void 0
                      : G.find(void 0, void 0, ($) => $.id == V);
                return W != null && W.length ? W[0].from : void 0;
              },
              [b, m],
            ),
            J = k.useCallback(
              (V, G) => {
                const W = N(V);
                return W
                  ? (G
                      ? b.dispatch(
                          b.state.tr
                            .replaceWith(W, W, G)
                            .setMeta(m, [{ remove: { id: V } }]),
                        )
                      : b.dispatch(
                          b.state.tr.setMeta(m, [{ remove: { id: V } }]),
                        ),
                    !0)
                  : !1;
              },
              [m, N, b],
            );
          return {
            placeholderElements: n,
            createPlaceholder: j,
            findPlaceholder: N,
            replacePlaceholder: J,
          };
        }
        var L = e(72739),
          M = e(1880),
          F = e(69168),
          K = e(85599),
          R = e(8323),
          U = e(18210),
          P = e(95603),
          t = e(64868),
          i = e(73309),
          p = Object.defineProperty,
          S = (h, r, n) =>
            r in h
              ? p(h, r, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: n,
                })
              : (h[r] = n),
          v = (h, r, n) => S(h, typeof r != "symbol" ? r + "" : r, n);
        function T(h) {
          const {
              children: r,
              ProcessFileUpload: n,
              FetchImageURL: l,
              bAllowImageHotLinking: m = !1,
            } = h,
            [b] = k.useState(() => ({ manager: new _(n, l, m) })),
            { manager: y } = b;
          return (
            y.SetProps(n, l, m),
            (0, o.jsxs)(u.Provider, {
              value: b,
              children: [
                (0, o.jsx)(c, { manager: y }),
                (0, o.jsx)(a, { manager: y, children: r }),
              ],
            })
          );
        }
        const x = k.memo(function (r) {
          const { nodeType: n } = r,
            l = s(),
            {
              placeholderElements: m,
              createPlaceholder: b,
              replacePlaceholder: y,
            } = C("span", "FileUploadPlaceholder");
          d(l, n);
          const j = (0, g.Hd)();
          return (
            k.useEffect(() => l.RegisterEditor(j, b, y), [l, j, b, y]),
            (0, o.jsx)(o.Fragment, {
              children: m.map(({ id: N, element: J, data: V }) =>
                (0, o.jsx)(f, { element: J, data: V }, N),
              ),
            })
          );
        });
        function E(h, r) {
          const n = s(),
            l = React.useCallback(
              (m) => {
                for (const b of m) n.UploadFile(b);
                h && h();
              },
              [n, h],
            );
          return useBrowseForFilesDialog(l, { multiple: !0, accept: r });
        }
        class B extends Error {
          constructor(r) {
            super(r);
          }
        }
        function f(h) {
          const { element: r, data: n } = h,
            l = "file" in n ? n.file : void 0,
            m = k.useMemo(() => l && URL.createObjectURL(l), [l]),
            b = "url" in n ? n.url : m,
            y = l == null ? void 0 : l.type.startsWith("video/");
          return L.createPortal(
            (0, o.jsxs)("span", {
              className: i.FileUploadPlaceholder,
              children: [
                (0, o.jsx)("div", {
                  className: i.ThrobberCtn,
                  children: (0, o.jsxs)("div", {
                    className: i.ThrobberRow,
                    children: [
                      (0, o.jsx)("div", {
                        className: i.Throbber,
                        children: (0, o.jsx)(K.t, {
                          size: "medium",
                          position: "center",
                        }),
                      }),
                      (0, U.we)("#Prosemirror_FileUpload_Uploading"),
                    ],
                  }),
                }),
                !y && (0, o.jsx)("img", { src: b, className: i.PendingImage }),
                y &&
                  (0, o.jsx)("video", {
                    src: b,
                    className: i.PendingImage,
                    muted: !0,
                    loop: !0,
                    playsInline: !0,
                    autoPlay: !0,
                  }),
              ],
            }),
            r,
          );
        }
        class _ {
          constructor(r, n, l) {
            v(this, "m_fnProcessFileUpload"),
              v(this, "m_fnFetchImageURL"),
              v(this, "m_bAllowImageHotLinking"),
              v(this, "m_errors", (0, R.Jc)([])),
              v(this, "m_view"),
              v(this, "m_fnCreatePlaceholder"),
              v(this, "m_fnReplacePlaceholder"),
              (this.m_fnProcessFileUpload = r),
              (this.m_fnFetchImageURL = n),
              (this.m_bAllowImageHotLinking = l);
          }
          SetProps(r, n, l) {
            (this.m_fnProcessFileUpload = r),
              (this.m_fnFetchImageURL = n),
              (this.m_bAllowImageHotLinking = l),
              (0, I.wT)(
                !this.m_fnFetchImageURL || !this.m_bAllowImageHotLinking,
                "Not expected to have a URL fetch function and allow hotlinking.  URL fetch function will not be called.",
              );
          }
          RegisterEditor(r, n, l) {
            return (
              (0, I.wT)(!this.m_view, "Duplicate registration"),
              (this.m_view = r),
              (this.m_fnCreatePlaceholder = n),
              (this.m_fnReplacePlaceholder = l),
              () => {
                this.m_view == r &&
                  this.m_fnCreatePlaceholder == n &&
                  this.m_fnReplacePlaceholder == l &&
                  ((this.m_view = void 0),
                  (this.m_fnCreatePlaceholder = void 0),
                  (this.m_fnReplacePlaceholder = void 0));
              }
            );
          }
          AddError(r) {
            this.m_errors.Set([...this.m_errors.Value, r]);
          }
          GetErrors() {
            return this.m_errors;
          }
          ClearErrors() {
            this.m_errors.Set([]);
          }
          GetViewPosition(r, n) {
            var l;
            const m =
              (l = this.m_view) == null
                ? void 0
                : l.posAtCoords({ left: r, top: n });
            return m == null ? void 0 : m.pos;
          }
          async UploadFile(r, n) {
            (!this.m_fnCreatePlaceholder || !this.m_fnReplacePlaceholder) &&
              this.AddError(
                "Upload File: No editor registered to handle file upload",
              );
            const l = this.m_fnCreatePlaceholder({ file: r }, n);
            return this.ProcessFile(r, l);
          }
          BAllowImageHotLinking() {
            return this.m_bAllowImageHotLinking;
          }
          QueueUploadFileByURL(r, n, l) {
            if (
              ((!this.m_fnCreatePlaceholder || !this.m_fnReplacePlaceholder) &&
                this.AddError(
                  "QueueUploadFile: No editor registered to handle file upload",
                ),
              console.log(`QueueUploadFileByURL: ${r} at pos ${n}`),
              r.startsWith("data:"))
            ) {
              const m = this.m_fnCreatePlaceholder({ url: r }, n, l);
              return this.ProcessDataURL(r, m), !0;
            } else if (this.m_fnFetchImageURL) {
              const m = this.m_fnCreatePlaceholder({ url: r }, n, l);
              return this.FetchURLAndProcess(r, m), !0;
            } else
              return (
                (0, I.wT)(
                  this.m_bAllowImageHotLinking,
                  "A URL was posted but we don't have a fnFetchImageURL to process it",
                ),
                !1
              );
          }
          async ProcessDataURL(r, n) {
            const [l, m] = r.split(","),
              b = l.match(/^data:(?<mimetype>[^;]*);(?<encoding>.*)$/);
            if (!b || b.groups.encoding != "base64") {
              this.AddError(`Unable to data URL, unexpected format: ${l}`);
              return;
            }
            const y = b == null ? void 0 : b.groups.mimetype,
              j = D(y);
            if (!j) {
              this.AddError(`Unsupported MIME type for image: ${y}`);
              return;
            }
            const N = atob(m),
              J = new Uint8Array(N.length);
            for (let W = 0; W < N.length; W++) J[W] = N.charCodeAt(W);
            const V = await w.C(J.buffer),
              G = new File([J], `upload_${V}.${j}`, { type: y });
            await this.ProcessFile(G, n);
          }
          async FetchURLAndProcess(r, n) {
            var l;
            try {
              const m = new URL(r),
                b = await this.m_fnFetchImageURL(r),
                y = new File(
                  [b],
                  decodeURIComponent(
                    ((l = m.pathname) == null
                      ? void 0
                      : l.replace(/^.*\//, "")) || "image",
                  ),
                  { type: b.type },
                );
              await this.ProcessFile(y, n);
            } catch {
              this.AddError(`Unable to process URL: ${r}`),
                this.m_fnReplacePlaceholder(n);
            }
          }
          async ProcessFile(r, n) {
            let l;
            try {
              console.log(`Processing file upload: "${r.name}"`),
                (l = await this.m_fnProcessFileUpload(r));
            } catch (m) {
              m instanceof B
                ? this.AddError(m.message)
                : this.AddError(`Error proccessing file upload: ${m}`);
            }
            l
              ? this.m_fnReplacePlaceholder(n, l)
              : this.m_fnReplacePlaceholder(n);
          }
        }
        function D(h) {
          switch (h) {
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
        function s() {
          return k.useContext(u).manager;
        }
        const c = k.memo(function (r) {
          const { manager: n } = r,
            l = (0, t.gc)(n.GetErrors());
          return l.length
            ? (0, o.jsx)(F.E, {
                active: !0,
                children: (0, o.jsx)(M.o0, {
                  bAlertDialog: !0,
                  strTitle: (0, U.we)("#Error_Generic"),
                  strDescription: l.map((m, b) =>
                    (0, o.jsx)("div", { children: m }, b),
                  ),
                  strOKButtonText: (0, U.we)("#Button_OK"),
                  onOK: () => n.ClearErrors(),
                  onCancel: () => n.ClearErrors(),
                }),
              })
            : null;
        });
        function a(h) {
          const { manager: r, children: n } = h,
            l = k.useCallback(
              (y, j) => {
                for (const N of y)
                  r.UploadFile(N, r.GetViewPosition(j.clientX, j.clientY));
              },
              [r],
            ),
            [m, b] = (0, P.hk)(l);
          return k.cloneElement(n, { ...m, ...n.props });
        }
        function d(h, r) {
          (0, g.c$)(
            k.useMemo(
              () =>
                new O.k_({
                  props: {
                    handlePaste(n, l, m) {
                      const b = [];
                      if (
                        (m.content.descendants((y, j) => {
                          if (y.type == r) {
                            const N = y.attrs.src;
                            (N.startsWith("data:") ||
                              !h.BAllowImageHotLinking()) &&
                              b.push({ url: N, pos: j });
                          }
                        }),
                        b.length)
                      ) {
                        let y = n.state.tr;
                        y.selection.empty || y.deleteSelection();
                        let j = y.selection.from,
                          N = 0;
                        for (const J of b) {
                          const V = m.content.cut(N, J.pos - 1);
                          y.insert(j, V),
                            (j += V.size),
                            h.QueueUploadFileByURL(J.url, j, y),
                            (N = J.pos + 1);
                        }
                        return (
                          y.insert(j, m.content.cut(N)),
                          y.scrollIntoView(),
                          n.dispatch(y),
                          !0
                        );
                      }
                      return !1;
                    },
                    handleDOMEvents: {
                      paste(n, l) {
                        var m, b;
                        if (
                          ((b =
                            (m = l.clipboardData) == null ? void 0 : m.files) ==
                          null
                            ? void 0
                            : b.length) > 0
                        ) {
                          l.preventDefault();
                          for (const y of l.clipboardData.files)
                            h.UploadFile(y);
                          return !0;
                        }
                      },
                    },
                  },
                }),
              [r, h],
            ),
          );
        }
      },
      93147: (z, H, e) => {
        "use strict";
        e.d(H, { l: () => x });
        var o = e(7850),
          I = e(19298),
          w = e(52951),
          g = e(74875),
          O = e(29287),
          A = e(19565),
          k = e(74827),
          C = e(52893),
          L = e(57053),
          M = e(90626),
          F = e(25792),
          K = e(33645),
          R = e.n(K),
          U = e(38539),
          P = e(81973),
          t = e(36707);
        const i = M.memo(function (D) {
          const { schema: u } = D,
            s = !!("table" in u.nodes && u.nodes.table.spec.tableRole);
          return (
            (0, A.c$)(M.useMemo(() => (s ? U.AL({ View: p }) : void 0), [s])),
            (0, A.c$)(M.useMemo(() => (s ? U.LF() : void 0), [s])),
            null
          );
        });
        class p extends U.Qg {
          constructor(D, u) {
            super(D, u), this.SetTableClass(D);
          }
          update(D) {
            return super.update(D) ? (this.SetTableClass(D), !0) : !1;
          }
          SetTableClass(D) {
            this.table.className = (0, t.A)(
              R().Table,
              D.attrs[P.w.NoBorder] && R().NoBorder,
              D.attrs[P.w.EqualCells] && R().EqualCells,
            );
          }
        }
        var S = e(18210),
          v = e(54963),
          T = e(73309);
        const x = (0, F.Nr)(function (D) {
          const {
              pmState: u,
              className: s,
              refOnUpdate: c,
              refView: a,
              bSpellcheckEnabled: d = !0,
              bSingleLine: h,
              panelProps: r,
              children: n,
            } = D,
            [l, m] = M.useState(),
            [b, y] = M.useState();
          M.useEffect(() => {
            !u || !l || y(new O.Lz(l, { state: u.state }));
          }, [u, l]),
            M.useEffect(() => () => (b == null ? void 0 : b.destroy()), [b]),
            (0, v.D5)(a, b);
          const { refDiv: j, onActivate: N, onGamepadDirection: J } = E(b),
            V = (0, v.Ue)(j, m);
          if (!u) return null;
          const { schemaConfig: G, bbcodeParser: W } = u;
          return (0, o.jsxs)(A.Ot, {
            view: b,
            pmState: u,
            children: [
              (0, o.jsx)(
                I.Z,
                {
                  className: (0, t.A)({
                    ["" + s]: !!s,
                    [T.Container]: !0,
                    [T.SingleLine]: !!h,
                  }),
                  ref: V,
                  spellCheck: d,
                  focusable: !0,
                  onActivate: N,
                  onOKActionDescription: (0, S.we)("#UserGameNotes_Edit"),
                  onGamepadDirection: J,
                  ...r,
                },
                `editordiv_${d}`,
              ),
              (0, o.jsx)(A.KF, {
                refOnUpdate: c,
                schema: G.pm_schema,
                bSingleLine: h,
              }),
              (0, o.jsx)(B, { parser: W, schema: G.pm_schema }),
              (0, o.jsx)(i, { schema: G.pm_schema }),
              n,
            ],
          });
        });
        function E(_) {
          const D = M.useRef(null),
            u = (0, g.FN)(),
            s = M.useCallback(() => {
              var d, h;
              if ((u.ShowVirtualKeyboard(), !_)) return;
              if (!_.hasFocus()) {
                _.focus();
                let n = _.dom.childNodes,
                  l =
                    (h = (d = D.current) == null ? void 0 : d.scrollTop) != null
                      ? h
                      : 0;
                for (let m = 0; m < n.length; ++m) {
                  let b = n[m],
                    y = b.offsetTop;
                  if (y !== void 0 && y >= l) {
                    let j = b.getBoundingClientRect();
                    (0, k.bQ)(_, j.left, j.top);
                    break;
                  }
                }
              }
            }, [u, _]),
            c = M.useCallback((d) => d.currentTarget == d.target, []),
            a = (0, w.ak)(D, void 0, void 0, c);
          return { refDiv: D, onActivate: s, onGamepadDirection: a };
        }
        const B = M.memo(function (D) {
          const { parser: u, schema: s } = D;
          return (
            (0, A.c$)(
              M.useMemo(
                () =>
                  new C.k_({
                    props: {
                      transformPasted: (c, a) => f(u, s.nodes.hard_break, c),
                    },
                  }),
                [u, s],
              ),
            ),
            null
          );
        });
        function f(_, D, u) {
          let s = !1;
          if (
            (u.content.forEach((a) => {
              a.type == D && (s = !0);
            }),
            !s)
          )
            return u;
          const c = _.ConvertLineBreaksToParagraphs(u.content);
          return L.Ji.maxOpen(c);
        }
      },
      73723: (z, H, e) => {
        "use strict";
        e.d(H, {
          Km: () => P,
          WJ: () => S,
          z9: () => x,
          C$: () => v,
          Hz: () => t,
          Nt: () => E,
          MV: () => U,
        });
        var o = e(7850),
          I = e(98724),
          w = e(4188),
          g = e(74827),
          O = e(90626),
          A = e(56718),
          k = e(12293),
          C = e(50660),
          L = e(54963);
        function M(B) {
          const { schema: f, addtlAttrs: _, children: D } = B,
            { callbacks: u, view: s } = (0, C.wU)(),
            [c, a] = O.useState(() => (0, g.Cd)(s.state, f.marks.link)),
            d = O.useCallback((n) => a((0, g.Cd)(n.state, f.marks.link)), [f]);
          (0, L.hL)(u, d);
          const [h, r] = (0, k.E)(f, _);
          return (0, o.jsxs)(o.Fragment, {
            children: [
              r,
              (0, o.jsx)(C.ff, {
                onClick: () => h(s),
                toggled: c,
                tooltip: "#FormattingToolbar_InsertLink",
                keyboardShortcut: "Mod-k",
                children: D,
              }),
            ],
          });
        }
        var F = e(98609),
          K = e(80556);
        function R(B) {
          const { schema: f, bColor: _, addtlAttrs: D, children: u } = B,
            { callbacks: s, view: c } = (0, C.wU)(),
            [a, d] = O.useState(() =>
              (0, g.Cd)(c.state, _ ? f.marks.color : f.marks.bgcolor),
            ),
            h = O.useCallback(
              (l) => d((0, g.Cd)(l.state, _ ? f.marks.color : f.marks.bgcolor)),
              [_, f],
            );
          (0, L.hL)(s, h);
          const [r, n] = (0, K.J)(f, _, D);
          return (0, o.jsxs)(o.Fragment, {
            children: [
              n,
              (0, o.jsx)(C.ff, {
                onClick: () => r(c),
                toggled: a,
                tooltip: _
                  ? "#FormattingToolbar_Color"
                  : "#FormattingToolbar_BgColor",
                children: u,
              }),
            ],
          });
        }
        function U() {
          return (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)(C.cQ, {
                tooltip: "#FormattingToolbar_Undo",
                keyboardShortcut: "Mod-z",
                command: I.tN,
                children: (0, o.jsx)(A.VnB, {}),
              }),
              (0, o.jsx)(C.cQ, {
                tooltip: "#FormattingToolbar_Redo",
                keyboardShortcut:
                  F.TS.PLATFORM == "macos" ? "Mod-Shift-z" : "Mod-y",
                command: I.ZS,
                children: (0, o.jsx)(A.Bal, {}),
              }),
            ],
          });
        }
        function P(B) {
          const { schema: f } = B;
          return (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)(C.GY, {
                tooltip: "#FormattingToolbar_Bold",
                keyboardShortcut: "Mod-b",
                mark: f.marks.strong,
                children: (0, o.jsx)(A.l4n, {}),
              }),
              (0, o.jsx)(C.GY, {
                tooltip: "#FormattingToolbar_Italic",
                keyboardShortcut: "Mod-i",
                mark: f.marks.italic,
                children: (0, o.jsx)(A.UKJ, {}),
              }),
              (0, o.jsx)(C.GY, {
                tooltip: "#FormattingToolbar_Underline",
                keyboardShortcut: "Mod-u",
                mark: f.marks.underline,
                children: (0, o.jsx)(A.Gj3, {}),
              }),
              "strike" in f.marks &&
                (0, o.jsx)(C.GY, {
                  tooltip: "#FormattingToolbar_Strike",
                  keyboardShortcut: "Mod-Shift-x",
                  mark: f.marks.strike,
                  children: (0, o.jsx)(A.tI4, {}),
                }),
              "code" in f.marks &&
                (0, o.jsx)(C.GY, {
                  tooltip: "#FormattingToolbar_InlineCode",
                  keyboardShortcut: "Ctrl-Shift-c",
                  mark: f.marks.code,
                  children: (0, o.jsx)(A.bmT, {}),
                }),
              "color" in f.marks &&
                (0, o.jsx)(R, {
                  schema: f,
                  bColor: !0,
                  children: (0, o.jsx)(A.r7n, {}),
                }),
              "bgcolor" in f.marks &&
                (0, o.jsx)(R, {
                  schema: f,
                  bColor: !1,
                  children: (0, o.jsx)(A.FId, {}),
                }),
            ],
          });
        }
        function t(B) {
          const { schema: f } = B;
          return (0, o.jsx)(C.u3, {
            tooltip: "#FormattingToolbar_Paragraph",
            keyboardShortcut: "Ctrl-Shift-0",
            nodeType: f.nodes.paragraph,
            children: (0, o.jsx)(A.iYj, {}),
          });
        }
        function i(B) {
          const { nodeTypes: f, attrs: _, children: D, ...u } = B,
            { callbacks: s, view: c } = useToolbarContext(),
            [a, d] = React.useState(() => IsAnyBlockActive(c.state, f, _)),
            h = React.useCallback(
              (l) => d(IsAnyBlockActive(l.state, f, _)),
              [f, _],
            );
          useCallbackList(s, h);
          const r = React.useMemo(
              () => SetNodeAttributeCommand(f, _ != null ? _ : {}),
              [f, _],
            ),
            n = !!a;
          return jsx(CommandButton, {
            ...u,
            command: r,
            toggled: n,
            children: D,
          });
        }
        function p(B) {
          const { schema: f } = B;
          let _ = f.nodes.paragraph,
            D = f.nodes.heading;
          const u = React.useMemo(() => [_, D], [_, D]);
          return jsxs(Fragment, {
            children: [
              jsx(i, {
                tooltip: "#FormattingToolbar_AlignLeft",
                keyboardShortcut: "Ctrl-Shift-L",
                nodeTypes: u,
                attrs: { align: "left" },
                children: jsx(GamepadUISVG.TextLeftAlign, {}),
              }),
              jsx(i, {
                tooltip: "#FormattingToolbar_AlignCenter",
                keyboardShortcut: "Ctrl-Shift-E",
                nodeTypes: u,
                attrs: { align: "center" },
                children: jsx(GamepadUISVG.TextCenterAlign, {}),
              }),
              jsx(i, {
                tooltip: "#FormattingToolbar_AlignRight",
                keyboardShortcut: "Ctrl-Shift-R",
                nodeTypes: u,
                attrs: { align: "right" },
                children: jsx(GamepadUISVG.TextRightAlign, {}),
              }),
            ],
          });
        }
        function S(B) {
          const { schema: f, maxLevel: _ = 1, levels: D } = B,
            u = _ + D - 1;
          return (0, o.jsxs)(o.Fragment, {
            children: [
              _ <= 1 &&
                (0, o.jsx)(C.u3, {
                  tooltip: "#FormattingToolbar_HeadingLevel1",
                  keyboardShortcut: "Ctrl-Shift-1",
                  nodeType: f.nodes.heading,
                  attrs: { level: 1 },
                  children: (0, o.jsx)(A.jRw, {}),
                }),
              _ <= 2 &&
                u >= 2 &&
                (0, o.jsx)(C.u3, {
                  tooltip: "#FormattingToolbar_HeadingLevel2",
                  keyboardShortcut: "Ctrl-Shift-2",
                  nodeType: f.nodes.heading,
                  attrs: { level: 2 },
                  children: (0, o.jsx)(A.qOW, {}),
                }),
              _ <= 3 &&
                u >= 3 &&
                (0, o.jsx)(C.u3, {
                  tooltip: "#FormattingToolbar_HeadingLevel3",
                  keyboardShortcut: "Ctrl-Shift-3",
                  nodeType: f.nodes.heading,
                  attrs: { level: 3 },
                  children: (0, o.jsx)(A.x7X, {}),
                }),
              _ <= 4 &&
                u >= 4 &&
                (0, o.jsx)(C.u3, {
                  tooltip: "#FormattingToolbar_HeadingLevel4",
                  keyboardShortcut: "Ctrl-Shift-4",
                  nodeType: f.nodes.heading,
                  attrs: { level: 4 },
                  children: (0, o.jsx)(A.qzO, {}),
                }),
              _ <= 5 &&
                u >= 5 &&
                (0, o.jsx)(C.u3, {
                  tooltip: "#FormattingToolbar_HeadingLevel5",
                  keyboardShortcut: "Ctrl-Shift-5",
                  nodeType: f.nodes.heading,
                  attrs: { level: 5 },
                  children: (0, o.jsx)(A.jXA, {}),
                }),
            ],
          });
        }
        function v(B) {
          const { schema: f, showIndentButtonsAsNeeded: _ = !1 } = B,
            { callbacks: D, view: u } = (0, C.wU)(),
            { bullet_list: s, ordered_list: c, list_item: a } = f.nodes,
            d = O.useMemo(() => w.T2(a), [a]),
            h = O.useMemo(() => w.$B(a), [a]),
            [r, n] = O.useState(() => d(u.state) || h(u.state));
          return (
            (0, L.hL)(
              D,
              O.useCallback(
                (l) => {
                  n(d(l.state) || h(l.state));
                },
                [d, h],
              ),
            ),
            (0, o.jsxs)(o.Fragment, {
              children: [
                (0, o.jsx)(T, {
                  tooltip: "#FormattingToolbar_BulletedList",
                  keyboardShortcut: "Ctrl-Shift-8",
                  list_type: s,
                  list_item: a,
                  children: (0, o.jsx)(A.JPq, {}),
                }),
                c &&
                  (0, o.jsx)(T, {
                    tooltip: "#FormattingToolbar_OrderedList",
                    keyboardShortcut: "Ctrl-Shift-7",
                    list_type: c,
                    list_item: a,
                    children: (0, o.jsx)(A.jE0, {}),
                  }),
                (!_ || r) &&
                  (0, o.jsxs)(o.Fragment, {
                    children: [
                      (0, o.jsx)(C.cQ, {
                        tooltip: "#FormattingToolbar_OutdentList",
                        keyboardShortcut: "Mod-[",
                        command: d,
                        children: (0, o.jsx)(A.LSz, {}),
                      }),
                      (0, o.jsx)(C.cQ, {
                        tooltip: "#FormattingToolbar_IndentList",
                        keyboardShortcut: "Mod-[",
                        command: h,
                        children: (0, o.jsx)(A.ycU, {}),
                      }),
                    ],
                  }),
              ],
            })
          );
        }
        function T(B) {
          const { list_type: f, list_item: _, children: D, ...u } = B,
            { callbacks: s, view: c } = (0, C.wU)(),
            a = O.useCallback((l) => (0, g.wt)(l.state, f) !== void 0, [f]),
            [d, h] = O.useState(() => a(c)),
            r = O.useMemo(() => w.Sd(f), [f]),
            n = O.useMemo(() => w.T2(_), [_]);
          return (
            (0, L.hL)(
              s,
              O.useCallback(
                (l) => {
                  h(a(l));
                },
                [a],
              ),
            ),
            (0, o.jsx)(C.cQ, {
              ...u,
              toggled: d,
              command: d ? n : r,
              children: D,
            })
          );
        }
        function x(B) {
          const { schema: f, addtlAttrs: _ } = B;
          return (0, o.jsx)(M, {
            schema: f,
            addtlAttrs: _,
            children: (0, o.jsx)(A.YqK, {}),
          });
        }
        function E(B) {
          const { bSpellcheckEnabled: f, setSpellcheckEnabled: _ } = B;
          return (0, o.jsx)(C.ff, {
            tooltip: f
              ? "#FormattingToolbar_DisableSpellcheck"
              : "#FormattingToolbar_EnableSpellcheck",
            toggled: f,
            onClick: () => _(!f),
            children: (0, o.jsx)(A.DEV, {}),
          });
        }
      },
      50660: (z, H, e) => {
        "use strict";
        e.d(H, {
          Ez: () => v,
          GY: () => x,
          XQ: () => p,
          bI: () => t,
          cQ: () => E,
          ff: () => B,
          hK: () => S,
          u3: () => T,
          wU: () => P,
        });
        var o = e(7850),
          I = e(19298),
          w = e(74827),
          g = e(12362),
          O = e(90626),
          A = e(19316),
          k = e(71421),
          C = e(8323),
          L = e(36707),
          M = e(18210),
          F = e(54963),
          K = e(98609),
          R = e(73309),
          U = e.n(R);
        const P = () => O.useContext(i);
        function t(c) {
          const { view: a, refUpdateToolbar: d, children: h } = c,
            r = O.useRef(void 0);
          r.current || (r.current = new C.lu());
          const n = r.current;
          O.useEffect(
            () => (
              (0, F.cZ)(d, () => n.Dispatch(a)), () => (0, F.cZ)(d, void 0)
            ),
            [n, a, d],
          );
          const l = O.useMemo(() => ({ callbacks: n, view: a }), [n, a]);
          return a ? (0, o.jsx)(i.Provider, { value: l, children: h }) : null;
        }
        const i = O.createContext(void 0);
        function p() {
          return (0, o.jsx)("div", { className: R.Gap });
        }
        function S() {
          return (0, o.jsx)("div", { className: R.Spacer });
        }
        function v(c) {
          return (0, o.jsx)("div", {
            className: (0, L.A)(c.className, R.ToolbarRowOverflowContainer),
            children: (0, o.jsx)(I.Z, {
              className: R.ToolbarRow,
              "flow-children": "row",
              children: c.children,
            }),
          });
        }
        function T(c) {
          const { nodeType: a, attrs: d, children: h, ...r } = c,
            { callbacks: n, view: l } = P(),
            [m, b] = O.useState(() => (0, w.gj)(l.state, a, d)),
            y = O.useCallback((N) => b((0, w.gj)(N.state, a, d)), [a, d]);
          (0, F.hL)(n, y);
          const j = O.useMemo(() => g.y_(a, d), [d, a]);
          return (0, o.jsx)(E, { ...r, command: j, toggled: m, children: h });
        }
        function x(c) {
          const { mark: a, children: d, ...h } = c,
            { callbacks: r, view: n } = P(),
            [l, m] = O.useState(() => (0, w.Cd)(n.state, a)),
            b = O.useCallback((j) => m((0, w.Cd)(j.state, a)), [a]);
          (0, F.hL)(r, b);
          const y = O.useMemo(() => g.wh(a), [a]);
          return (0, o.jsx)(E, { ...h, command: y, toggled: l, children: d });
        }
        function E(c) {
          const { command: a, toggled: d, children: h, ...r } = c,
            { view: n, callbacks: l } = P(),
            [m, b] = O.useState(() => a(n.state));
          (0, F.hL)(
            l,
            O.useCallback((j) => b(a(j.state)), [a]),
          ),
            O.useEffect(() => b(a(n.state)), [a, n]);
          const y = !m && !d;
          return (0, o.jsx)(f, {
            ...r,
            children: (0, o.jsx)(A.$n, {
              className: (0, L.A)(R.CommandButton, d && R.Toggled),
              onMouseDown: (j) => {
                j.preventDefault(), a(n.state, n.dispatch, n);
              },
              disabled: y,
              focusable: !y,
              children: h,
            }),
          });
        }
        function B(c) {
          const {
            onClick: a,
            toggled: d,
            disabled: h,
            children: r,
            className: n,
            ...l
          } = c;
          return (0, o.jsx)(f, {
            ...l,
            children: (0, o.jsx)(A.$n, {
              className: (0, L.A)(R.CommandButton, d && R.Toggled, n),
              onMouseDown: (m) => {
                m.button === 0 && (m.preventDefault(), a(m));
              },
              disabled: h === !0,
              children: r,
            }),
          });
        }
        function f(c) {
          const { tooltip: a, keyboardShortcut: d, children: h } = c;
          if (!a) return h;
          const r = d ? (0, o.jsx)(_, { tooltip: a, keyboardShortcut: d }) : a;
          return (0, o.jsx)(k.Gq, {
            toolTipContent: r,
            direction: "bottom",
            children: h,
          });
        }
        function _(c) {
          const { tooltip: a, keyboardShortcut: d } = c;
          return (0, o.jsxs)("div", {
            className: R.TooltipWithShortcut,
            children: [
              (0, o.jsx)("div", {
                children: typeof a == "string" ? (0, M.we)(a) : a,
              }),
              (0, o.jsx)("div", {
                children: (0, o.jsx)(D, { keyboardShortcut: d }),
              }),
            ],
          });
        }
        function D(c) {
          var a;
          const { keyboardShortcut: d } = c,
            h = d.split("-"),
            r = (a = h.pop()) != null ? a : "";
          return (0, o.jsxs)(o.Fragment, {
            children: [
              h.map((n, l) =>
                (0, o.jsxs)(
                  O.Fragment,
                  {
                    children: [
                      (0, o.jsx)(u, {
                        children: (0, o.jsx)(s, { modifier: n }),
                      }),
                      " + ",
                    ],
                  },
                  l,
                ),
              ),
              (0, o.jsx)(u, { children: r.toUpperCase() }),
            ],
          });
        }
        function u(c) {
          return (0, o.jsx)("span", {
            className: R.KeyCap,
            children: c.children,
          });
        }
        function s(c) {
          const { modifier: a } = c;
          switch (a) {
            case "Mod":
              return K.TS.PLATFORM == "macos" ? "\u2318" : "Ctrl";
            case "Shift":
              return K.TS.PLATFORM == "macos", "Shift";
            case "Ctrl":
              return K.TS.PLATFORM == "macos" ? "Control" : "Ctrl";
            case "Alt":
              return K.TS.PLATFORM == "macos" ? "Option" : "Alt";
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
      88208: (z) => {
        z.exports = {
          PreventScroll: "ycpazsHLq6lCBFmWPCLCZ",
          ModalDialog: "_1mPKxUDAZ01x-i7612JIsL",
          ModalDialogContent: "_79d7mzfWutbJb1DCbh1Du",
        };
      },
      5598: (z) => {
        z.exports = {
          SimpleModalDialog: "_3ej4mcyhVunlvw3BjUXtel",
          SimpleModalDialogHeader: "_1w-TUMWBEOX_zsSa-BBhK8",
          SimpleModalDialogTitle: "_2tpBIlq2yGQqKcloht-UiJ",
          XButton: "RC4JznqJb34yCm04FKk0I",
          SimpleModalContentCtn: "_2yRV5HfgoGdJZqs9Fl049T",
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
