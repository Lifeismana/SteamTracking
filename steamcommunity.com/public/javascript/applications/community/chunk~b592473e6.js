/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [9773],
  {
    27828: (e) => {
      e.exports = {
        EyeDropperCtn: "_5jKe2NV9CM3JA3hcMALLw",
        EyeDropperBtn: "_3afPQT_fEWmhHhFHS-WIk7",
        ColorPickerCtn: "Nn2-w0eqLuugAR-Udm--3",
        ColorPickerDialog: "_32PwNSgquR6tGAPIBcWgVq",
      };
    },
    73309: (e) => {
      e.exports = {
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
    42714: (e, t, o) => {
      "use strict";
      o.d(t, { F: () => s });
      var r = o(26205);
      function s(e, t, o, s) {
        let n,
          a = [];
        for (; (n = t.match(r.O)); ) {
          n.index > 0 && a.push(e.text(t.substring(0, n.index)));
          const i = (0, r.S)(n[0]),
            l = s && s(i);
          l && "default" !== l
            ? "remove" !== l && a.push(l)
            : a.push(e.text(n[0], [o.create({ href: i })])),
            (t = t.substring(n.index + n[0].length));
        }
        if (0 != a.length) return t.length && a.push(e.text(t)), a;
      }
    },
    88089: (e, t, o) => {
      "use strict";
      o.d(t, { Mw: () => l, TG: () => c, zL: () => i });
      var r = o(7850),
        s = o(52893),
        n = o(90626),
        a = o(22145);
      const i = new s.k_({
          props: {
            handlePaste(e, t, o) {
              var r;
              const s =
                null === (r = t.clipboardData) || void 0 === r
                  ? void 0
                  : r.getData("text/plain").replace(/\n/g, " ");
              if (s) {
                const t = e.state.tr.insertText(s);
                e.dispatch(t);
              }
              return !0;
            },
          },
        }),
        l = { Enter: () => !0, "Shift-Enter": () => !0, "Mod-Enter": () => !0 };
      function c(e) {
        const { nMaxChars: t } = e;
        return (
          (0, a.c$)(
            (0, n.useMemo)(() => {
              return (
                (e = t),
                new s.k_({
                  filterTransaction: (t, o) => t.doc.textContent.length <= e,
                })
              );
              var e;
            }, [t]),
          ),
          (0, r.jsx)(n.Fragment, {})
        );
      }
    },
    79497: (e, t, o) => {
      "use strict";
      o.d(t, { W: () => s });
      var r = o(57053);
      class s {
        get pm_schema() {
          return this.m_ProseMirrorSchema;
        }
        get bbcode_dictionary() {
          return this.m_mapBBCodeDictionary;
        }
        get pm_to_bbcode_config() {
          return this.m_PMToBBCodeConfig;
        }
        ConvertAttrToBBCodeArgs(e, t) {
          const o = this.m_PMToBBCodeConfig.mapNodes.get(e.type);
          return (o && o.AttrsToBBArgs && o.AttrsToBBArgs(t, e).args) || {};
        }
        constructor(e, t) {
          (this.m_mapBBCodeDictionary = new Map()),
            (this.m_PMToBBCodeConfig = {
              mapNodes: new Map(),
              mapMarks: new Map(),
            });
          const o = {
              doc: { content: "block+" },
              text: { group: "inline" },
              hard_break: {
                inline: !0,
                group: "inline",
                selectable: !1,
                linebreakReplacement: !0,
                parseDOM: [{ tag: "br" }],
                toDOM: () => ["br"],
              },
            },
            s = new Map(),
            a = new Map(),
            i = t ? new Set(t) : void 0;
          for (const t in e.nodes) {
            const { bbCode: r, ...a } = e.nodes[t],
              l = n(r, i);
            l && ((o[t] = a), s.set(t, l));
          }
          const l = {};
          for (const t in e.marks) {
            const { bbCode: o, ...r } = e.marks[t];
            (i && !i.has(o.tag)) || ((l[t] = r), a.set(t, o));
          }
          (this.m_ProseMirrorSchema = new r.Sj({ nodes: o, marks: l })),
            s.forEach((t, o) => {
              var r;
              const s = this.m_ProseMirrorSchema.nodes[o],
                n = e.nodes[o],
                a = Array.isArray(t) ? t : [t];
              let i;
              "list_item+" == n.content
                ? (i = this.m_ProseMirrorSchema.nodes.list_item)
                : -1 !=
                    (null === (r = n.content) || void 0 === r
                      ? void 0
                      : r.indexOf("paragraph")) &&
                  (i = this.m_ProseMirrorSchema.nodes.paragraph),
                a.forEach(
                  ({
                    tag: e,
                    BBArgsToAttrs: t,
                    AttrsToBBArgs: o,
                    convertContentToAttr: r,
                    ...n
                  }) => {
                    this.m_mapBBCodeDictionary.set(e, {
                      Constructor: {
                        node: s,
                        BBArgsToAttrs: t,
                        convertContentToAttr: r,
                        acceptNode: i,
                      },
                      skipFollowingNewline: !0,
                      ...n,
                    });
                  },
                );
              const { tag: l, AttrsToBBArgs: c } = a[0];
              this.m_PMToBBCodeConfig.mapNodes.set(s, {
                tag: l,
                AttrsToBBArgs: c,
              });
            }),
            a.forEach((e, t) => {
              const o = this.m_ProseMirrorSchema.marks[t],
                { tag: r, BBArgsToAttrs: s, AttrsToBBArgs: n, ...a } = e;
              this.m_mapBBCodeDictionary.set(r, {
                Constructor: { mark: o, BBArgsToAttrs: s },
                ...a,
              }),
                this.m_PMToBBCodeConfig.mapMarks.set(o, {
                  tag: r,
                  AttrsToBBArgs: n,
                });
            });
        }
      }
      function n(e, t) {
        if (t) {
          if (Array.isArray(e)) {
            const o = e.filter((e) => t.has(e.tag));
            return o.length > 0 ? o : void 0;
          }
          return t.has(e.tag) ? e : void 0;
        }
        return e;
      }
    },
    26555: (e, t, o) => {
      "use strict";
      o.d(t, { i: () => n });
      var r = o(90626),
        s = o(90286);
      function n(e, t) {
        const { msAutosaveTimeout: o = 1e3, msMaxInterval: n = 10 * o } =
            t || {},
          [a, i] = r.useState(!1),
          l = r.useRef(0);
        return (
          (0, s.u)(
            e,
            r.useCallback(() => {
              (l.current = performance.now()), i(!0);
            }, []),
          ),
          r.useEffect(() => {
            if (!a || !e) return;
            const t = performance.now(),
              r = (a = !1) => {
                s = void 0;
                const c = performance.now(),
                  d = c - l.current;
                a || d >= o || c - t >= n
                  ? (console.log("Committing changes"),
                    e.CommitChanges(),
                    i(!1))
                  : (s = window.setTimeout(r, o - d));
              };
            let s = window.setTimeout(r, o);
            return () => {
              s && (window.clearTimeout(s), r(!0));
            };
          }, [a, e, o, n]),
          { bDirty: a }
        );
      }
    },
    69956: (e, t, o) => {
      "use strict";
      o.d(t, { M: () => h, U: () => c });
      var r = o(7850),
        s = o(91986),
        n = o(52893),
        a = o(90626),
        i = o(72739),
        l = o(22145);
      const c = a.memo(function (e) {
        const { specs: t } = e,
          [o, s] = a.useState([]),
          i = a.useRef(0),
          c = a.useCallback(
            (e) => (
              s((t) => [...t, { id: i.current++, nodeView: e }]),
              () => s((t) => t.filter((t) => t.nodeView != e))
            ),
            [],
          ),
          h = a.useMemo(() => {
            const e = {};
            return (
              t
                .filter(Boolean)
                .forEach(
                  (t) => (e[t.type.name] = (e, o, r) => new u(t, e, o, r, c)),
                ),
              new n.k_({ props: { nodeViews: e } })
            );
          }, [t, c]);
        return (
          (0, l.c$)(h),
          o.map(({ id: e, nodeView: t }) => (0, r.jsx)(d, { nodeView: t }, e))
        );
      });
      function d(e) {
        const {
            element: t,
            spec: o,
            getProps: r,
            onPropsChanged: s,
            actions: n,
            isSelected: l,
          } = e.nodeView,
          [c, d] = a.useReducer((e) => e + 1, 0);
        return (
          a.useEffect(() => s.Register(d).Unregister, [s, d]),
          i.createPortal(
            a.createElement(o.component, { ...r(), selected: l(), ...n }),
            t,
          )
        );
      }
      class u {
        constructor(e, t, o, r, n) {
          this.node = t;
          const a = o.dom.ownerDocument.createElement(
            e.type.isInline ? "span" : "div",
          );
          this.dom = a;
          const { selection: i } = o.state;
          this.selected = r() >= i.from && r() + t.nodeSize <= i.to;
          const l = (e) => {
              const s = e(o.state.tr, t, r());
              s && o.dispatch(s);
            },
            c = {
              update: l,
              setAttrs: (e, t) => l((o, r, s) => o.setNodeMarkup(s, t, e)),
              removeNode: () => l((e, t, o) => e.delete(o, o + t.nodeSize)),
              focusView: () => {
                window.setTimeout(() => o.focus(), 1);
              },
            },
            d = new s.l();
          (this.destroy = n({
            element: a,
            spec: e,
            getProps: () => e.readProps(this.node),
            isSelected: () => this.selected,
            onPropsChanged: d,
            actions: c,
          })),
            (this.onPropsChanged = d.Dispatch.bind(d));
        }
        update(e, t, o) {
          return (
            e.type == this.node.type &&
            ((this.node = e), this.onPropsChanged(), !0)
          );
        }
        selectNode() {
          (this.selected = !0), this.onPropsChanged();
        }
        deselectNode() {
          (this.selected = !1), this.onPropsChanged();
        }
      }
      function h(e) {
        return (t, o, r) => t.replaceWith(r, r + o.nodeSize, e);
      }
    },
    22145: (e, t, o) => {
      "use strict";
      o.d(t, { KF: () => f, Ot: () => g, c$: () => b, Hd: () => v });
      var r = o(7850),
        s = o(12362),
        n = o(15024),
        a = o(7502),
        i = o(52893),
        l = o(90626),
        c = o(98724),
        d = o(79216),
        u = o(4188),
        h = o(37834);
      o(45772), o(74763);
      var m = o(88089);
      const p = l.createContext(void 0);
      function g(e) {
        const { view: t, pmState: o, children: s } = e,
          n = l.useMemo(() => ({ view: t, pmState: o }), [t, o]);
        return (0, r.jsx)(p.Provider, { value: n, children: s });
      }
      const f = l.memo(function (e) {
        const { schema: t, refOnUpdate: o, bSingleLine: r } = e;
        return (
          b(
            l.useMemo(
              () =>
                o &&
                new i.k_({
                  view: (e) => ({
                    update: (...e) => o.current && o.current(...e),
                  }),
                }),
              [o],
            ),
          ),
          b(l.useMemo(() => (0, a.w)(r ? m.Mw : {}), [r])),
          b(r ? m.zL : void 0),
          b(l.useMemo(() => (0, n.z)(), [])),
          b(
            l.useMemo(
              () =>
                (function (e) {
                  const { nodes: t, marks: o } = e,
                    r = (0, s.st)(
                      s.I$,
                      (e, o) => (
                        o &&
                          o(
                            e.tr
                              .replaceSelectionWith(
                                t.hard_break.createChecked(),
                              )
                              .scrollIntoView(),
                          ),
                        !0
                      ),
                    ),
                    n = {
                      "Mod-z": c.tN,
                      "Mod-y": c.ZS,
                      "Shift-Mod-z": c.ZS,
                      Backspace: d.dv,
                      Escape: s.hy,
                      "Mod-Enter": r,
                      "Shift-Enter": r,
                      "Mod-b": (0, s.wh)(o.strong),
                      "Mod-i": (0, s.wh)(o.italic),
                      "Mod-u": (0, s.wh)(o.underline),
                      "Mod-Shift-x": (0, s.wh)(o.strike),
                      "Ctrl-Shift-s": (0, s.wh)(o.strike),
                      Enter: (0, u.wn)(t.list_item),
                      "Mod-[": (0, u.T2)(t.list_item),
                      "Mod-]": (0, u.$B)(t.list_item),
                      "Ctrl-Shift-1": (0, s.y_)(t.heading, { level: 1 }),
                      "Ctrl-Shift-2": (0, s.y_)(t.heading, { level: 2 }),
                      "Ctrl-Shift-3": (0, s.y_)(t.heading, { level: 3 }),
                      "Ctrl-Shift-4": (0, s.y_)(t.heading, { level: 4 }),
                      "Ctrl-Shift-5": (0, s.y_)(t.heading, { level: 5 }),
                      "Ctrl-Shift-7": (0, s.y_)(t.ordered_list),
                      "Ctrl-Shift-8": (0, s.y_)(t.bullet_list),
                      "Ctrl-Shift-0": (0, s.y_)(t.paragraph),
                    };
                  return (
                    o.code && (n["Ctrl-Shift-c"] = (0, s.wh)(o.code)),
                    t.code_block &&
                      (n["Alt-Ctrl-Shift-c"] = (0, s.y_)(t.code_block)),
                    t.horizontal_rule &&
                      (n["Mod-_"] = (e, o) => (
                        o &&
                          o(
                            e.tr
                              .replaceSelectionWith(t.horizontal_rule.create())
                              .scrollIntoView(),
                          ),
                        !0
                      )),
                    (0, a.w)(n)
                  );
                })(t),
              [t],
            ),
          ),
          b(l.useMemo(() => (0, a.w)(s.RV), [])),
          b(
            l.useMemo(
              () =>
                (function (e) {
                  const { nodes: t, marks: o } = e;
                  return (0, d.sM)({
                    rules: [
                      (0, d.tG)(
                        /^(\d+)\.\s$/,
                        t.ordered_list,
                        (e) => ({ order: parseInt(e[1]) }),
                        (e, t) =>
                          t.childCount + t.attrs.order == parseInt(e[1]),
                      ),
                      (0, d.tG)(/^\s*([-+*])\s$/, t.bullet_list),
                      (0, h.OX)(/(?<!\w)\*([^*]+)\*/, o.strong),
                      (0, h.OX)(/(?<!\w)_([^_]+)_/, o.italic),
                      (0, h.OX)(/(?<!\w)~([^~]+)~/, o.strike),
                      (0, h.OX)(/(?<!\w)`([^`]+)`/, o.code),
                      (0, d.JJ)(/^```$/, t.code_block),
                      (0, d.JJ)(/^(#{1,5})\s$/, t.heading, (e) => ({
                        level: e[1].length,
                      })),
                      t.horizontal_rule &&
                        ((r = /^(\*\*\*|---|___)$/),
                        (s = t.horizontal_rule),
                        new d.fV(r, (e, t, o, r) =>
                          e.tr.replaceWith(o, r, s.create()),
                        )),
                    ].filter(Boolean),
                  });
                  var r, s;
                })(t),
              [t],
            ),
          ),
          null
        );
      });
      function b(e) {
        const { pmState: t } = l.useContext(p);
        l.useEffect(() => {
          if (t && e) return t.InstallPlugin(e);
        }, [e, t]);
      }
      function v() {
        var e;
        return null === (e = l.useContext(p)) || void 0 === e ? void 0 : e.view;
      }
    },
    55608: (e, t, o) => {
      "use strict";
      o.d(t, { BM: () => i, DQ: () => c, cI: () => d, ce: () => l });
      var r = o(4188),
        s = o(52038),
        n = o(33645),
        a = o.n(n);
      function i(e, t, o = 0) {
        return () => [e, { class: t }, o];
      }
      function l(e, t, o = 0) {
        return [e, { class: t }, o];
      }
      const c = {
          nodes: {
            paragraph: {
              attrs: { align: { default: "left" } },
              content: "inline*",
              group: "block",
              parseDOM: [
                {
                  tag: "p",
                  getAttrs: (e) => ({ align: e.style.textAlign || "left" }),
                },
              ],
              toDOM(e) {
                const t = { class: (0, s.A)("pm_paragraph", a().Paragraph) };
                return (
                  e.attrs.align &&
                    "left" != e.attrs.align &&
                    (t.style = `text-align: ${e.attrs.align}`),
                  ["p", t, 0]
                );
              },
              bbCode: {
                tag: "p",
                autocloses: !0,
                BBArgsToAttrs: (e) => ({ align: e.align }),
                AttrsToBBArgs: (e) => {
                  let t = { args: {} };
                  return (
                    e.align && "left" != e.align && (t.args.align = e.align), t
                  );
                },
              },
            },
            heading: {
              attrs: { level: { default: 1 }, align: { default: "left" } },
              content: "inline*",
              group: "block",
              defining: !0,
              parseDOM: [1, 2, 3, 4, 5].map(function (e) {
                return {
                  tag: `h${e}`,
                  getAttrs: (t) => ({
                    level: e,
                    align: t.style.textAlign || "left",
                  }),
                };
              }),
              toDOM(e) {
                const t = {
                  class:
                    `BB_Header${e.attrs.level} ` +
                    a()[`Header${e.attrs.level}`],
                };
                return (
                  e.attrs.align &&
                    "left" != e.attrs.align &&
                    (t.style = `text-align: ${e.attrs.align}`),
                  ["h" + e.attrs.level, t, 0]
                );
              },
              bbCode: [1, 2, 3, 4, 5].map(function (e) {
                return {
                  tag: `h${e}`,
                  BBArgsToAttrs: (t) => ({
                    level: e,
                    align: t.align || "left",
                  }),
                  AttrsToBBArgs: (e) => {
                    let t = { tag: `h${e.level}`, args: {} };
                    return (
                      e.align &&
                        "left" != e.align &&
                        t.args &&
                        (t.args.align = e.align),
                      t
                    );
                  },
                };
              }),
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
                  getAttrs: (e) => ({
                    src: e.getAttribute("src"),
                    title: e.getAttribute("title"),
                    alt: e.getAttribute("alt"),
                    style: e.getAttribute("style"),
                  }),
                },
              ],
              toDOM(e) {
                const { src: t, alt: o, title: r, style: n } = e.attrs;
                return [
                  "img",
                  {
                    src: t,
                    alt: o,
                    title: r,
                    class: (0, s.A)(a().Image, {
                      [a().Image_Inline]: "inline" === n,
                    }),
                  },
                ];
              },
              bbCode: {
                tag: "img",
                BBArgsToAttrs: (e) => {
                  var t;
                  return {
                    src: e.src,
                    style: null !== (t = e.style) && void 0 !== t ? t : void 0,
                  };
                },
                AttrsToBBArgs: (e) => ({
                  args: { src: e.src, ...(e.style ? { style: e.style } : {}) },
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
                  getAttrs(e) {
                    if ("video" !== e.tagName) return;
                    const t = e;
                    let o = "",
                      r = "";
                    for (const e of t.querySelectorAll("source"))
                      "video/mp4" == e.type
                        ? (o = e.src)
                        : "video/webm" == e.type && (r = e.src);
                    return {
                      mp4: o,
                      webm: r,
                      poster: t.poster || "",
                      autoplay: !!t.autoplay,
                      controls: !!t.controls,
                    };
                  },
                },
              ],
              toDOM(e) {
                const {
                    webm: t,
                    mp4: o,
                    poster: r,
                    autoplay: s,
                    controls: n,
                  } = e.attrs,
                  a = [];
                return (
                  t && a.push(["source", { src: t, type: "video/webm" }]),
                  o && a.push(["source", { src: o, type: "video/mp4" }]),
                  [
                    "video",
                    {
                      poster: r,
                      autoPlay: !!s,
                      controls: !!n,
                      loop: !n && !!s,
                    },
                    ...a,
                  ]
                );
              },
              bbCode: {
                tag: "video",
                BBArgsToAttrs: (e) => ({
                  webm: e.webm,
                  mp4: e.mp4,
                  poster: e.poster,
                  autoplay: "true" == e.autoplay,
                  controls: "true" == e.controls,
                }),
                AttrsToBBArgs: (e) => ({
                  args: {
                    webm: e.webm || "",
                    mp4: e.mp4 || "",
                    poster: e.poster || "",
                    autoplay: e.autoplay ? "true" : "false",
                    controls: e.controls ? "true" : "false",
                  },
                }),
              },
            },
            bullet_list: {
              ...r.fF,
              content: "list_item+",
              group: "block",
              toDOM: i("ul", a().List),
              bbCode: { tag: "list" },
            },
            ordered_list: {
              ...r.o8,
              content: "list_item+",
              group: "block",
              toDOM: i("ol", a().OrderedList),
              bbCode: { tag: "olist" },
            },
            list_item: {
              ...r.Aw,
              content: "paragraph block*",
              toDOM: i("li", a().ListItem),
              bbCode: { tag: "*", autocloses: !0 },
            },
            code_block: {
              content: "inline*",
              marks: "",
              group: "block",
              code: !0,
              defining: !0,
              parseDOM: [{ tag: "pre", preserveWhitespace: "full" }],
              toDOM: () => [
                "pre",
                { class: a().CodeBlock },
                ["code", { class: a().Code }, 0],
              ],
              bbCode: { tag: "code" },
            },
          },
          marks: {
            strong: {
              parseDOM: [
                { tag: "strong" },
                {
                  tag: "b",
                  getAttrs: (e) => "normal" != e.style.fontWeight && null,
                },
                {
                  style: "font-weight=400",
                  clearMark: (e) => "strong" == e.type.name,
                },
                {
                  style: "font-weight",
                  getAttrs: (e) => /^(bold(er)?|[5-9]\d{2,})$/.test(e) && null,
                },
              ],
              toDOM: i("b", (0, s.A)("BB_Bold", a().Bold)),
              bbCode: { tag: "b" },
            },
            italic: {
              parseDOM: [
                { tag: "i" },
                { tag: "em" },
                { style: "font-style=italic" },
                {
                  style: "font-style=normal",
                  clearMark: (e) => "em" == e.type.name,
                },
              ],
              toDOM: i("i", (0, s.A)("BB_Italic", a().Italic)),
              bbCode: { tag: "i" },
            },
            underline: {
              parseDOM: [{ tag: "u" }, { style: "text-decoration=underline" }],
              toDOM: i("u", (0, s.A)("BB_Underline", a().Underline)),
              bbCode: { tag: "u" },
            },
            strike: {
              parseDOM: [{ style: "text-decoration=line-through" }],
              toDOM: i("span", (0, s.A)("BB_Strike", a().Strike)),
              bbCode: { tag: "strike" },
            },
            code: {
              parseDOM: [{ tag: "code" }],
              toDOM: i("code", (0, s.A)("BB_Code", a().Code)),
              bbCode: { tag: "c" },
            },
            link: {
              attrs: { href: {}, title: { default: null } },
              inclusive: !1,
              parseDOM: [
                {
                  tag: "a[href]",
                  getAttrs: (e) => ({
                    href: e.getAttribute("href"),
                    title: e.getAttribute("title"),
                  }),
                },
              ],
              toDOM(e) {
                const { href: t, title: o } = e.attrs;
                return ["a", { href: t, title: o, class: "BB_Link" }, 0];
              },
              bbCode: {
                tag: "url",
                BBArgsToAttrs: (e) => ({ href: e[""] }),
                AttrsToBBArgs: (e) => ({ args: { "": e.href } }),
                convertContentToAttr: "href",
              },
            },
          },
        },
        d = {
          node: {},
          marks: {
            color: {
              attrs: { color: {} },
              parseDOM: [{ style: "color", getAttrs: (e) => ({ color: e }) }],
              toDOM: (e) => [
                "span",
                {
                  style: `color: ${e.attrs.color}`,
                  class: (0, s.A)("BB_Color", a().Color),
                },
                0,
              ],
              bbCode: {
                tag: "color",
                BBArgsToAttrs: (e) => ({ color: e[""] }),
                AttrsToBBArgs: (e) => ({ args: { "": e.color } }),
              },
              inclusive: !0,
              excludes: "",
            },
            bgcolor: {
              attrs: { color: {} },
              parseDOM: [{ style: "bgcolor", getAttrs: (e) => ({ color: e }) }],
              toDOM: (e) => [
                "span",
                {
                  style: `background-color: ${e.attrs.color}`,
                  class: (0, s.A)("BB_BGColor", a().BGColor),
                },
                0,
              ],
              bbCode: {
                tag: "bgcolor",
                BBArgsToAttrs: (e) => ({ color: e[""] }),
                AttrsToBBArgs: (e) => ({ args: { "": e.color } }),
              },
              inclusive: !0,
              excludes: "",
            },
          },
        };
    },
    90286: (e, t, o) => {
      "use strict";
      o.d(t, { n: () => b, u: () => v });
      var r = o(91986),
        s = o(64753),
        n = o(98724),
        a = o(52893),
        i = o(49693),
        l = o(57053),
        c = o(81393);
      class d {
        constructor(e, t, o) {
          var r;
          (this.m_nodes = []),
            (this.m_schema = e),
            (this.m_bConvertNewlinesToBR =
              null !== (r = null == t ? void 0 : t.bConvertNewlinesToBR) &&
              void 0 !== r &&
              r);
          const s = o && "mark" in o;
          this.m_fnProcessText = s || null == t ? void 0 : t.fnProcessText;
        }
        AppendText(e, t) {
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
          const t = [];
          let o = 0;
          for (let r = e.indexOf("\n", o); -1 !== r; r = e.indexOf("\n", o))
            o != r && t.push(...this.TextNode(e.substring(o, r))),
              t.push(this.m_schema.nodes.hard_break.createChecked()),
              (o = r + 1);
          return o < e.length && t.push(...this.TextNode(e.substring(o))), t;
        }
        TextNode(e) {
          const t = this.m_fnProcessText && this.m_fnProcessText(e);
          return t || [this.m_schema.text(e)];
        }
      }
      class u extends i.Al {
        constructor(e, t) {
          super(e.bbcode_dictionary, (o) => {
            const r =
              (null == o ? void 0 : o.tag) && e.bbcode_dictionary.get(o.tag);
            return new d(
              e.pm_schema,
              t,
              r && "Constructor" in r ? r.Constructor : void 0,
            );
          }),
            (this.m_mapPMBBNodes = new Map()),
            (this.m_schemaConfig = e),
            this.m_schemaConfig.bbcode_dictionary.forEach((e) => {
              "node" in e.Constructor &&
                this.m_mapPMBBNodes.set(e.Constructor.node.name, e.Constructor);
            });
        }
        get schema() {
          return this.m_schemaConfig.pm_schema;
        }
        ParseBBCode(e) {
          const t = this.Parse(e, this.BBNodeToPMNode.bind(this), !0);
          return this.m_schemaConfig.pm_schema.topNodeType.createChecked(
            {},
            this.ConvertLineBreaksToParagraphs(l.FK.fromArray(t)),
          );
        }
        TryCreateNode(e, t, o) {
          let r,
            s = l.FK.from(t);
          if (
            !e.node.validContent(s) &&
            (e.node.isInline ||
              (s = l.FK.from(
                t.filter(
                  (t) =>
                    (!t.isText || !t.text.match(/^\s*$/)) &&
                    !(
                      t.type == this.schema.nodes.hard_break &&
                      !e.node.validContent(l.FK.from(t))
                    ),
                ),
              )),
            !e.node.validContent(s))
          ) {
            const t = e.acceptNode;
            r = [];
            let o = [],
              n = !1,
              a = !1;
            for (let i = 0; i < s.childCount; i++) {
              const c = s.child(i),
                d = l.FK.from(c),
                u = e.node.validContent(d);
              a || (!u && !(null == t ? void 0 : t.validContent(d)))
                ? ((a = !0), r.push(c))
                : (u || (n = !0), o.push(c));
            }
            if ((console.assert(!n || !!t), n && t)) {
              t.isBlock &&
                o.length > 1 &&
                o[o.length - 1].type == this.schema.nodes.hard_break &&
                (o = o.slice(0, -1));
              const n = this.m_mapPMBBNodes.get(t.name);
              let a;
              (0, c.wT)(
                n,
                `Indicated acceptNode type ${t.name} for ${e.node.name} missing`,
              );
              try {
                a = n
                  ? this.TryCreateNode(n, o, void 0)
                  : t.createChecked(void 0, o);
              } catch (e) {
                console.error(e), (a = []), (r = [...o, ...r]);
              }
              s = l.FK.from(a);
            } else s = l.FK.from(o);
          }
          try {
            const t = e.node.createAndFill(o, s) || e.node.createChecked(o, s);
            return r ? [t, ...r] : t;
          } catch (o) {
            return (
              (0, c.wT)(
                !1,
                `Invalid content for node type ${e.node.name}, removing and promoting children.`,
              ),
              t
            );
          }
        }
        BBNodeToPMNode(e, t, ...o) {
          let r = e.BBArgsToAttrs ? e.BBArgsToAttrs(t.args || {}) : void 0;
          try {
            if (
              ("convertContentToAttr" in e &&
                e.convertContentToAttr &&
                ((r && r[e.convertContentToAttr]) ||
                  (r = {
                    ...(r || {}),
                    [e.convertContentToAttr]:
                      ((s = o),
                      s
                        .filter((e) => e.isText)
                        .map((e) => e.text)
                        .join()),
                  }),
                "node" in e && (o = [])),
              "node" in e)
            )
              return this.TryCreateNode(e, o, r);
            {
              const t = e.mark.create(r);
              return o.map((e) => this.RecursivelyApplyMark(e, t));
            }
          } catch (e) {
            return (
              console.error(`Error parsing [${t.tagname}] tag: ${e}`, e), []
            );
          }
          var s;
        }
        RecursivelyApplyMark(e, t) {
          if (e.isText || e.type.allowsMarkType(t.type))
            return e.mark([...e.marks, t]);
          {
            const o = [];
            return (
              e.descendants(
                (e) => (o.push(this.RecursivelyApplyMark(e, t)), !1),
              ),
              e.type.create(e.attrs, o, e.marks)
            );
          }
        }
        ConvertLineBreaksToParagraphs(e) {
          const t = new Map(),
            o = this.m_schemaConfig.pm_schema;
          this.m_mapPMBBNodes.forEach((e) => {
            e.acceptNode && t.set(e.acceptNode.name, e.node);
          });
          const r = [],
            s = {
              nodes: [],
              nodeType: void 0,
              reset() {
                (this.nodes = []), (this.nodeType = void 0);
              },
              accumulate(e, t) {
                return (
                  this.nodeType && e != this.nodeType && this.emit(),
                  (this.nodeType = e),
                  this.nodes.push(t),
                  !0
                );
              },
              emit(e = !1) {
                const t = this.nodeType || (e ? o.nodes.paragraph : void 0);
                t && (r.push(t.createChecked({}, this.nodes)), this.reset());
              },
            };
          return (
            e.forEach((e) => {
              const n = e.type == o.nodes.hard_break,
                a = l.FK.from(e);
              if (n || o.topNodeType.validContent(a)) {
                const t = n && s.nodes.length > 0;
                s.emit(),
                  n
                    ? t || r.push(o.nodes.paragraph.createChecked())
                    : r.push(e);
              } else {
                let r;
                if (
                  ((r = o.nodes.paragraph.validContent(a)
                    ? o.nodes.paragraph
                    : t.get(e.type.name)),
                  r)
                )
                  s.accumulate(r, e);
                else {
                  (0, c.wT)(
                    !1,
                    `Couldn't accept ${e.type.name} at root of document, converting to paragraph`,
                  );
                  const t = (function (e) {
                    let t = "";
                    return (
                      e.descendants((e) => {
                        e.isText && (t += e.text);
                      }),
                      t
                    );
                  })(e);
                  t && s.accumulate(o.nodes.paragraph, o.text(t));
                }
              }
            }),
            (!s.nodes.length && r.length) || s.emit(!0),
            l.FK.from(r)
          );
        }
      }
      function h(e, t) {
        return m(t.pm_schema, t.pm_to_bbcode_config, e, []);
      }
      function m(e, t, o, r) {
        let s = o.marks,
          n = "";
        const a = t.mapNodes.get(o.type),
          { tag: l, args: d } = (function (e, t) {
            if (e && e.AttrsToBBArgs) {
              const { tag: o = e.tag, args: r = {} } = e.AttrsToBBArgs(
                t.attrs,
                t,
              );
              return { tag: o, args: r };
            }
            return { tag: null == e ? void 0 : e.tag, args: {} };
          })(a, o);
        return (
          "emoticon" == l ? (n += ":") : l && (n += (0, i.CS)(l, d)),
          o.content.forEach((o) => {
            ([n, s] = p(t, s, o.marks, n)),
              ([n, s] = (function (e, t, o, r) {
                let s;
                for (const n of o)
                  if (-1 === t.indexOf(n)) {
                    s || (s = t.slice());
                    const o = e.mapMarks.get(n.type);
                    if (((0, c.wT)(o, "mark missing bbtag"), o)) {
                      s.push(n);
                      const { args: e, tag: t } = g(o, n);
                      r += (0, i.CS)(t, e);
                    }
                  }
                return [r, null != s ? s : t];
              })(t, s, o.marks, n)),
              o.type.isText
                ? (n += (0, i.vE)(o.text || ""))
                : o.type == e.nodes.hard_break
                  ? (n += "\n")
                  : (n += m(e, t, o, s));
          }),
          ([n] = p(t, s, r, n)),
          "emoticon" == l ? (n += ":") : l && (n += (0, i.op)(l)),
          n
        );
      }
      function p(e, t, o, r) {
        const s = [];
        for (const e of t) -1 === o.indexOf(e) && s.push(e);
        if (!s.length) return [r, t];
        const n = t.slice();
        for (
          ;
          s.length && ((0, c.wT)(n.length, "no marks left to close"), n.length);
        ) {
          const t = n.pop(),
            o = e.mapMarks.get(t.type),
            { tag: a } = g(o, t);
          r += (0, i.op)(a);
          const l = s.indexOf(t);
          -1 != l && s.splice(l, 1);
        }
        return [r, n];
      }
      function g(e, t) {
        if (e && e.AttrsToBBArgs) {
          const { tag: o = e.tag, args: r = {} } = e.AttrsToBBArgs(t.attrs, t);
          return { tag: o, args: r };
        }
        return { tag: null == e ? void 0 : e.tag, args: {} };
      }
      const f = new a.hs("CProseMirrorState - OnChange");
      class b {
        constructor(e, t, o, s) {
          (this.m_bHasUncomittedChanges = !1),
            (this.m_onStateChangedCallbacks = new r.l());
          const { parser: n } = null != s ? s : {};
          (this.m_schemaConfig = e),
            (this.m_bbcodeParser = new u(e, null != n ? n : {})),
            (this.m_bbcode = t),
            (this.m_fnCommitChanges = o),
            (this.m_state = this.ConstructState());
        }
        CommitChanges() {
          this.m_currentDoc &&
            this.m_bHasUncomittedChanges &&
            ((this.m_bbcode = h(this.m_currentDoc, this.m_schemaConfig)),
            this.m_fnCommitChanges(this.m_bbcode, this.m_currentDoc),
            (this.m_bHasUncomittedChanges = !1));
        }
        BHasUncomittedChanges() {
          return this.m_bHasUncomittedChanges;
        }
        UpdateState(e) {
          var t;
          const o = e(
            (null === (t = this.m_view) || void 0 === t
              ? void 0
              : t.state.tr) || this.m_state.tr,
          );
          o &&
            o.docChanged &&
            (this.m_view
              ? this.m_view.dispatch(o)
              : (this.m_state = this.m_state.apply(o)));
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
          const e = new a.k_({
              key: f,
              view: (e) => (
                console.assert(!this.m_view),
                (this.m_view = e),
                {
                  update: (e, t) => this.OnStateChange(t, e.state),
                  destroy: () => (this.m_view = void 0),
                }
              ),
            }),
            t = [(0, n.b6)(), e];
          return a.$t.create({
            schema: this.m_schemaConfig.pm_schema,
            doc: this.m_bbcodeParser.ParseBBCode(this.m_bbcode),
            plugins: t,
          });
        }
        InstallPlugin(e) {
          var t;
          const o = this.m_view ? this.m_view.state : this.m_state;
          return (
            o.plugins.includes(e) ||
              ((this.m_state = o.reconfigure({ plugins: [...o.plugins, e] })),
              null === (t = this.m_view) ||
                void 0 === t ||
                t.updateState(this.m_state)),
            () => {
              var t;
              const o = this.m_view ? this.m_view.state : this.m_state;
              (this.m_state = o.reconfigure({
                plugins: o.plugins.filter((t) => t != e),
              })),
                null === (t = this.m_view) ||
                  void 0 === t ||
                  t.updateState(this.m_state);
            }
          );
        }
        OnStateChange(e, t) {
          (this.m_state = t),
            e.doc &&
              e.doc != t.doc &&
              ((this.m_currentDoc = t.doc),
              (this.m_bHasUncomittedChanges = !0),
              this.m_onStateChangedCallbacks.Dispatch(
                this.m_currentDoc,
                e.doc,
              ));
        }
        ReplaceDocument(e) {
          this.m_bbcode != e &&
            this.UpdateState((t) => {
              this.m_bbcode = e;
              const o = this.m_bbcodeParser.ParseBBCode(e);
              return this.m_state.tr
                .replaceWith(0, this.m_state.doc.content.size, o)
                .scrollIntoView();
            });
        }
      }
      function v(e, t) {
        (0, s.hL)(null == e ? void 0 : e.OnStateChangedCallbacks, t);
      }
    },
    37834: (e, t, o) => {
      "use strict";
      o.d(t, {
        Cd: () => n,
        OX: () => d,
        bQ: () => u,
        gj: () => l,
        vn: () => a,
        wt: () => c,
      });
      var r = o(79216),
        s = o(52893);
      function n(e, t) {
        const { from: o, $from: r, to: s, empty: n } = e.selection;
        return n
          ? !!t.isInSet(e.storedMarks || r.marks())
          : e.doc.rangeHasMark(o, s, t);
      }
      function a(e, t, o) {
        var r;
        const { parent: s } = o,
          n = s.childAfter(o.parentOffset),
          a =
            null === (r = n.node) || void 0 === r
              ? void 0
              : r.marks.find((e) => e.type == t);
        if (!a) return;
        let i = o.index() - 1,
          l = o.start() + n.offset;
        for (; i >= 0 && a.isInSet(s.child(i).marks); )
          (l -= s.child(i).nodeSize), (i -= 1);
        let c = o.index() + 1,
          d = o.start() + n.offset + n.node.nodeSize;
        for (; c < s.childCount && a.isInSet(s.child(c).marks); )
          (d += s.child(c).nodeSize), (c += 1);
        return { from: l, to: d, slice: e.doc.slice(l, d), mark: a };
      }
      function i(e, t, o) {
        if (e.type !== t) return !1;
        if (void 0 === o) return !0;
        for (const t in o) if (o[t] !== e.attrs[t]) return !1;
        return !0;
      }
      function l(e, t, o) {
        let { $from: r, to: s } = e.selection;
        for (let e = r.depth; e > 0; e--) {
          if (s > r.end(e)) return !1;
          if (i(r.node(e), t, o)) return !0;
        }
        return !1;
      }
      function c(e, t, o) {
        const { $from: r, to: s } = e.selection;
        for (let e = r.sharedDepth(s); e > 0; e--) {
          const s = r.node(e);
          if (void 0 === o ? s.type === t : s.hasMarkup(t, o))
            return r.before(e);
        }
      }
      function d(e, t, o = {}) {
        return new r.fV(e, (e, r, s, n) => {
          const a = o instanceof Function ? o(r) : o,
            i = e.tr;
          if (r[1]) {
            const e = s + r[0].indexOf(r[1]),
              t = e + r[1].length;
            t < n && i.delete(t, n),
              e > s && i.delete(s, e),
              (n = s + r[1].length);
          }
          return i.addMark(s, n, t.create(a)), i.removeStoredMark(t), i;
        });
      }
      function u(e, t, o) {
        const r = { left: t, top: o },
          n = e.posAtCoords(r);
        if (null == n ? void 0 : n.pos) {
          const t = e.state.doc.resolve(n.pos);
          e.dispatch(e.state.tr.setSelection(s.U3.near(t)));
        }
      }
    },
    38165: (e, t, o) => {
      "use strict";
      o.d(t, { s: () => h });
      var r = o(7850),
        s = o(78686),
        n = o(90626),
        a = o(61257),
        i = o(68255),
        l = o(4869),
        c = o(32754),
        d = o(27828),
        u = o.n(d);
      function h(e) {
        const { color: t, onChange: o, strTitle: d, disableAlpha: h } = e,
          [m, p] = (0, n.useState)(() => t || "rgba(255, 255, 255, 1)"),
          g = (0, n.useCallback)(async () => {
            if ("EyeDropper" in window)
              try {
                const e = new window.EyeDropper(),
                  t = await e.open(),
                  r = (function (e) {
                    const t = parseInt(e.slice(1), 16);
                    return `rgba(${(t >> 16) & 255}, ${(t >> 8) & 255}, ${255 & t}, 1)`;
                  })(t.sRGBHex);
                p(r), o(r);
              } catch (e) {
                console.warn(s.Z.Localize("#Sale_EyeDropperFailed"), e);
              }
            else alert(s.Z.Localize("#Sale_EyeDropperError"));
          }, [o]);
        return (0, r.jsxs)("div", {
          className: u().ColorPickerDialog,
          children: [
            Boolean(d) && (0, r.jsx)(i.JU, { children: d }),
            (0, r.jsx)(a.xk, {
              onChange: (e) => {
                const t = (function (e) {
                  return `rgba(${e.rgb.r}, ${e.rgb.g}, ${e.rgb.b}, ${e.rgb.a})`;
                })(e);
                p(t), o(t);
              },
              color: m,
              disableAlpha: h,
              className: u().ColorPickerCtn,
            }),
            (0, r.jsx)("div", {
              className: u().EyeDropperCtn,
              children: (0, r.jsx)(c.Gq, {
                toolTipContent: s.Z.Localize("#Sale_BackgroundColorPicker"),
                children: (0, r.jsx)(i.$n, {
                  className: u().EyeDropperBtn,
                  onClick: g,
                  children: (0, r.jsx)(l.O7b, {}),
                }),
              }),
            }),
          ],
        });
      }
    },
    9024: (e, t, o) => {
      "use strict";
      o.d(t, { X: () => u, w: () => l });
      var r = o(33645),
        s = o.n(r),
        n = o(38539),
        a = o(55608),
        i = o(52038);
      const l = { NoBorder: "noborder", EqualCells: "equalcells" },
        c = n.of({
          tableGroup: "block",
          cellContent: "paragraph block*",
          cellAttributes: {
            class: {
              default: s().TableCell,
              setDOMAttr: (e, t) => {
                t.class = e;
              },
            },
          },
        }),
        d = {
          BBArgsToAttrs: (e) => {
            const t = {};
            return (
              e.colspan && (t.colspan = parseInt(e.colspan)),
              e.rowspan && (t.rowspan = parseInt(e.rowspan)),
              e.colwidth &&
                (t.colwidth = e.colwidth.split(",").map((e) => parseInt(e))),
              t
            );
          },
          AttrsToBBArgs: (e) => {
            const t = {};
            return (
              e.colspan && 1 != e.colspan && (t.colspan = e.colspan.toString()),
              e.rowspan && 1 != e.rowspan && (t.rowspan = e.rowspan.toString()),
              e.colwidth && (t.colwidth = e.colwidth.join(",")),
              { args: t }
            );
          },
        },
        u = {
          table: {
            ...c.table,
            toDOM: (e) =>
              (0, a.ce)(
                "table",
                (0, i.A)(
                  s().Table,
                  e.attrs.noborder && s().NoBorder,
                  e.attrs.equalcells && s().EqualCells,
                ),
                ["tbody", 0],
              ),
            attrs: {
              [l.NoBorder]: { default: !1 },
              [l.EqualCells]: { default: !0 },
            },
            bbCode: {
              tag: "table",
              BBArgsToAttrs: (e) => ({
                noborder: !!e.noborder,
                equalcells: !!e.equalcells,
              }),
              AttrsToBBArgs: (e, t) => {
                const o = {};
                e.noborder && (o.noborder = "1"),
                  e.equalcells && (o.equalcells = "1");
                const r = t.child(0);
                if (r) {
                  let e = [];
                  for (let t = 0; t < r.childCount; t++) {
                    const o = r.child(t).attrs;
                    o.colwidth ? e.push(...o.colwidth) : e.push(void 0);
                  }
                  o.colwidth = e.join(",");
                }
                return { args: o };
              },
            },
          },
          table_row: {
            ...c.table_row,
            toDOM: (0, a.BM)("tr", s().TableRow),
            bbCode: { tag: "tr" },
          },
          table_cell: { ...c.table_cell, bbCode: { ...d, tag: "td" } },
          table_header: { ...c.table_header, bbCode: { ...d, tag: "th" } },
        };
    },
    72421: (e, t, o) => {
      "use strict";
      o.d(t, { _: () => i });
      var r = o(7850),
        s = o(90626),
        n = o(68255),
        a = o(738);
      function i(e) {
        const {
            closeModal: t,
            strTitle: o,
            onOK: i,
            strOKText: l,
            onCancel: c,
            strCancelText: d,
            bOKDisabled: u,
            bCancelDisabled: h,
            strClassNameContent: m = "GenericFormDialog",
            children: p,
          } = e,
          g = s.useCallback(() => {
            c && c(), t();
          }, [c, t]),
          f = h ? void 0 : g;
        return (0, r.jsx)(a.x_, {
          onEscKeypress: f,
          children: (0, r.jsxs)(n.U9, {
            onSubmit: i,
            classNameContent: m,
            children: [
              (0, r.jsx)(n.Y9, { children: o }),
              p,
              (0, r.jsx)(n.wi, {
                children: (0, r.jsx)(n.CB, {
                  strOKText: l,
                  bOKDisabled: u,
                  onCancel: f,
                  strCancelText: d,
                  bCancelDisabled: h,
                }),
              }),
            ],
          }),
        });
      }
    },
    60637: (e, t, o) => {
      "use strict";
      o.d(t, { J: () => u });
      var r = o(7850),
        s = o(37834),
        n = o(52893),
        a = o(90626),
        i = o(38165),
        l = o(9154),
        c = o(72421),
        d = o(61859);
      function u(e, t, o) {
        const [n, i] = a.useState(void 0),
          c = a.useRef(null),
          d = a.useCallback(
            (r) => {
              c.current = r;
              const { state: n } = r,
                a = n.selection;
              let { from: l, to: d, empty: u } = a;
              const h = t ? e.marks.color : e.marks.bgcolor;
              let m = "",
                p = "";
              const g = u ? a.$from : n.doc.resolve(l),
                f = (0, s.vn)(n, h, g),
                b = !!f;
              b
                ? ((m = f.mark.attrs.color),
                  u
                    ? ((p = f.slice.content.textBetween(
                        0,
                        f.slice.content.size,
                      )),
                      (l = f.from),
                      (d = f.to))
                    : ((l = Math.max(f.from, l)),
                      (d = Math.min(f.to, d)),
                      (p = f.slice.content.textBetween(
                        l - f.from,
                        d - f.from,
                      ))))
                : u || (p = n.doc.cut(l, d).textContent);
              let v = {};
              if (o)
                for (const e in o) {
                  const t = o[e],
                    r = f ? t.fnReadValue(f.mark) : t.defaultValue;
                  v[e] = r;
                }
              i({
                viewRef: c,
                strColor: m,
                strTargetText: p,
                bIsUpdate: b,
                addtlAttrs: o,
                addtlAttrsValues: v,
                from: l,
                to: d,
              });
            },
            [o, t, e.marks.bgcolor, e.marks.color],
          ),
          u = a.useCallback(() => {
            const e = c.current;
            window.setTimeout(() => {
              e && !e.isDestroyed && e.focus();
            }, 1),
              i(void 0);
          }, []);
        return [
          d,
          n &&
            (0, r.jsx)(l.EN, {
              active: !0,
              children: (0, r.jsx)(h, {
                schema: e,
                bColor: t,
                closeModal: u,
                ...n,
              }),
            }),
        ];
      }
      const h = a.memo(function (e) {
        const {
            schema: t,
            strColor: o,
            bIsUpdate: s,
            strTargetText: l,
            bColor: u,
            addtlAttrs: h,
            addtlAttrsValues: m,
            closeModal: p,
            viewRef: g,
            from: f,
            to: b,
          } = e,
          [v, _] = a.useState(o),
          C = a.useRef(null),
          [k, w] = a.useState(m),
          y = a.useCallback(() => {
            try {
              const e = g.current;
              if (!e || e.isDestroyed)
                return void console.warn(
                  "Editor view is destroyed; skipping color insert",
                );
              const { state: o, dispatch: r } = e,
                s = u ? t.marks.color : t.marks.bgcolor;
              if (!s) return void console.log("debug: no markType");
              if (!v || !/^#[0-9a-fA-F]{6}$/.test(v))
                return void console.log("debug: invalid color text: " + v);
              const a = Math.max(0, Math.min(f, o.doc.content.size));
              if (a > Math.max(0, Math.min(b, o.doc.content.size)))
                return void console.error("Invalid selection range:", f, b);
              const i = s.create({ color: v, ...k });
              let l = o.tr;
              f === b
                ? (l = l.addStoredMark(i))
                : ((l = l.removeMark(f, b, s)),
                  (l = l.addMark(f, b, i)),
                  (l = l.setSelection(n.U3.create(l.doc, b)))),
                r(l.scrollIntoView());
            } catch (e) {
              console.error(e);
            } finally {
              requestAnimationFrame(() => p());
            }
          }, [k, u, p, v, f, t.marks.bgcolor, t.marks.color, b, g]);
        a.useLayoutEffect(() => {
          var e, t, o;
          (
            null ===
              (t =
                null === (e = C.current) || void 0 === e ? void 0 : e.value) ||
            void 0 === t
              ? void 0
              : t.length
          )
            ? C.current.focus()
            : null === (o = C.current) || void 0 === o || o.focus();
        }, []);
        const x = (0, d.we)(
            u ? "#FormattingToolbar_Color" : "#FormattingToolbar_BgColor",
          ),
          T = s
            ? (0, d.we)("#Button_Save")
            : (0, d.we)(
                u ? "#FormattingToolbar_Color" : "#FormattingToolbar_BgColor",
              );
        return (0, r.jsx)(c._, {
          onOK: y,
          closeModal: p,
          strTitle: x,
          strOKText: T,
          bOKDisabled: !v || 0 == v.length,
          children: (0, r.jsx)(i.s, {
            color: v,
            strTitle: x,
            disableAlpha: !0,
            onChange: (e) =>
              _(
                (function (e) {
                  const t = e.match(
                    /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)$/i,
                  );
                  if (t) {
                    let [, e, o, r, s] = t;
                    return `#${((1 << 24) + (parseInt(e, 10) << 16) + (parseInt(o, 10) << 8) + parseInt(r, 10)).toString(16).slice(1)}`;
                  }
                  return "#7e3232";
                })(e),
              ),
          }),
        });
      });
    },
    17558: (e, t, o) => {
      "use strict";
      o.d(t, { E: () => h });
      var r = o(7850),
        s = o(37834),
        n = o(52893),
        a = o(90626),
        i = o(68255),
        l = o(9154),
        c = o(72421),
        d = o(61859),
        u = o(30470);
      function h(e, t) {
        const [o, n] = a.useState(void 0),
          i = a.useCallback(
            (o) => {
              const r = o.state.selection;
              let a = "",
                i = "",
                { from: l, to: c } = r;
              const d = (0, s.vn)(o.state, e.marks.link, r.$from),
                u = !!d;
              d
                ? ((i = d.mark.attrs.href),
                  r.empty
                    ? ((a = d.slice.content.textBetween(
                        0,
                        d.slice.content.size,
                      )),
                      (l = d.from),
                      (c = d.to))
                    : ((l = Math.max(d.from, r.from)),
                      (c = Math.min(d.to, r.to)),
                      (a = d.slice.content.textBetween(
                        l - d.from,
                        c - d.from,
                      ))))
                : o.state.selection.empty ||
                  ((a = o.state.doc.cut(
                    o.state.selection.from,
                    o.state.selection.to,
                  ).textContent),
                  a.match(/^https?:\/\//) && (i = a));
              let h = {};
              if (t)
                for (const e in t) {
                  const o = t[e],
                    r = d ? o.fnReadValue(d.mark) : o.defaultValue;
                  h[e] = r;
                }
              n({
                view: o,
                strLinkText: a,
                strLinkHref: i,
                bIsUpdate: u,
                addtlAttrs: t,
                addtlAttrsValues: h,
                from: l,
                to: c,
              });
            },
            [e.marks.link, t],
          ),
          c = null == o ? void 0 : o.view,
          d = a.useCallback(() => {
            window.setTimeout(() => c.focus(), 1), n(void 0);
          }, [c]);
        return [
          i,
          o &&
            (0, r.jsx)(l.EN, {
              active: !0,
              children: (0, r.jsx)(m, { schema: e, closeModal: d, ...o }),
            }),
        ];
      }
      const m = a.memo(function (e) {
        const {
            schema: t,
            strLinkText: o,
            strLinkHref: s,
            bIsUpdate: l,
            addtlAttrs: h,
            addtlAttrsValues: m,
            closeModal: g,
            view: f,
            from: b,
            to: v,
          } = e,
          [_, C] = a.useState(o),
          [k, w] = a.useState(s),
          y = a.useRef(null),
          x = a.useRef(null),
          [T, A] = a.useState(m);
        a.useLayoutEffect(() => {
          var e, t, o, r, s;
          (
            null ===
              (t =
                null === (e = y.current) || void 0 === e ? void 0 : e.value) ||
            void 0 === t
              ? void 0
              : t.length
          )
            ? (
                null ===
                  (r =
                    null === (o = x.current) || void 0 === o
                      ? void 0
                      : o.value) || void 0 === r
                  ? void 0
                  : r.length
              )
              ? (y.current.Focus(), y.current.element.select())
              : x.current.Focus()
            : null === (s = y.current) || void 0 === s || s.Focus();
        }, []);
        const B = l
            ? (0, d.we)("#FormattingToolbar_EditLink")
            : (0, d.we)("#FormattingToolbar_InsertLink"),
          S = l
            ? (0, d.we)("#Button_Save")
            : (0, d.we)("#FormattingToolbar_InsertLink");
        return (0, r.jsxs)(c._, {
          onOK: () => {
            var e, o, r, s, a;
            let i = f.state.tr;
            if (
              !(
                "dev" != u.TS.WEB_UNIVERSE ||
                (f &&
                  null != b &&
                  null != v &&
                  (null === (e = null == t ? void 0 : t.marks) || void 0 === e
                    ? void 0
                    : e.link))
              )
            )
              return void console.warn("Missing required data in insertLink", {
                view: f,
                from: b,
                to: v,
                schema: t,
              });
            const l = { href: k };
            for (const e in T) l[e] = T[e];
            const c =
              null === (o = t.marks.link) || void 0 === o
                ? void 0
                : o.create(l);
            if ("dev" == u.TS.WEB_UNIVERSE && !c)
              return void console.error(
                "Failed to create link mark with attrs",
                l,
              );
            const d = t.text(_ || k, [c]);
            "dev" == u.TS.WEB_UNIVERSE &&
              (console.log(
                "Replacement node:",
                (null === (r = d.toJSON) || void 0 === r
                  ? void 0
                  : r.call(d)) || d,
              ),
              console.log("Transaction range from-to:", { from: b, to: v }),
              console.log(
                "Document slice at range:",
                (null ===
                  (a =
                    null === (s = f.state.doc.slice(b, v).content) ||
                    void 0 === s
                      ? void 0
                      : s.toJSON) || void 0 === a
                  ? void 0
                  : a.call(s)) || f.state.doc.slice(b, v),
              ));
            try {
              (i = i.replaceRangeWith(b, v, d)),
                (i = i.setSelection(
                  n.U3.create(i.doc, b + d.nodeSize, b + d.nodeSize),
                )),
                f.dispatch(i);
            } catch (e) {
              console.error("Error during link insertion", e);
            }
            g();
          },
          closeModal: g,
          strTitle: B,
          strOKText: S,
          bOKDisabled: 0 == k.length,
          children: [
            (0, r.jsx)(i.pd, {
              ref: y,
              value: _,
              onChange: (e) => C(e.currentTarget.value),
              label: (0, d.we)("#FormattingToolbar_LinkText"),
            }),
            (0, r.jsx)(i.pd, {
              ref: x,
              value: k,
              placeholder: "https://",
              onChange: (e) => w(e.currentTarget.value),
              label: (0, d.we)("#FormattingToolbar_LinkAddress"),
              mustBeURL: !0,
            }),
            h && (0, r.jsx)(p, { addtlAttrs: h, values: T, setValues: A }),
          ],
        });
      });
      function p(e) {
        const { addtlAttrs: t, values: o, setValues: s } = e;
        return (0, r.jsx)(r.Fragment, {
          children: Object.keys(t).map((e) =>
            (0, r.jsx)(
              g,
              {
                attrName: e,
                fnRender: t[e].fnRenderEditor,
                value: o[e],
                setValues: s,
              },
              e,
            ),
          ),
        });
      }
      const g = a.memo(function (e) {
        const { attrName: t, fnRender: o, value: r, setValues: s } = e;
        return o(
          r,
          a.useCallback((e) => s((o) => ({ ...o, [t]: e })), [t, s]),
        );
      });
    },
    71696: (e, t, o) => {
      "use strict";
      o.d(t, { Xv: () => _, pw: () => C });
      var r = o(7850),
        s = o(81393),
        n = o(20737),
        a = o(22145),
        i = o(52893),
        l = o(29287),
        c = o(90626);
      var d = o(72739),
        u = o(78395),
        h = o(21869),
        m = o(22797),
        p = o(6144),
        g = o(61859),
        f = o(27650),
        b = o(64753),
        v = o(73309);
      function _(e) {
        const {
            children: t,
            ProcessFileUpload: o,
            FetchImageURL: s,
            bAllowImageHotLinking: n = !1,
          } = e,
          [a] = c.useState(() => ({ manager: new y(o, s, n) })),
          { manager: i } = a;
        return (
          i.SetProps(o, s, n),
          (0, r.jsxs)(x.Provider, {
            value: a,
            children: [
              (0, r.jsx)(A, { manager: i }),
              (0, r.jsx)(B, { manager: i, children: t }),
            ],
          })
        );
      }
      const C = c.memo(function (e) {
        const { nodeType: t } = e,
          o = T(),
          {
            placeholderElements: s,
            createPlaceholder: n,
            replacePlaceholder: d,
          } = (function (e, t = "PlaceholderPlugin") {
            const [o, r] = c.useState([]),
              [s] = c.useState(
                () =>
                  new i.k_({
                    key: new i.hs(t),
                    state: {
                      init: () => l.zF.empty,
                      apply(t, o) {
                        o = o.map(t.mapping, t.doc);
                        const s = t.getMeta(this) || [];
                        for (const n of s)
                          if (null == n ? void 0 : n.add) {
                            const { id: s, data: a } = n.add,
                              i = (t, o) => {
                                const n = document.createElement(e);
                                return (
                                  r((e) => [
                                    ...e,
                                    { id: s, element: n, data: a },
                                  ]),
                                  n
                                );
                              },
                              c = (e) => {
                                r((t) => t.filter((t) => t.element != e));
                              },
                              d = l.NZ.widget(n.add.pos, i, {
                                id: s,
                                destroy: c,
                              });
                            o = o.add(t.doc, [d]);
                          } else
                            (null == n ? void 0 : n.remove) &&
                              (o = o.remove(
                                o.find(
                                  void 0,
                                  void 0,
                                  (e) => e.id == n.remove.id,
                                ),
                              ));
                        return o;
                      },
                    },
                    props: {
                      decorations(e) {
                        return this.getState(e);
                      },
                    },
                  }),
              );
            (0, a.c$)(s);
            const n = (0, a.Hd)(),
              d = c.useRef(0),
              u = c.useCallback(
                (e, o, r) => {
                  const a = `${t}_${d.current++}`;
                  let i = r || n.state.tr;
                  void 0 === o &&
                    (i.selection.empty || i.deleteSelection(),
                    (o = i.selection.from));
                  const l = (null == r ? void 0 : r.getMeta(s)) || [];
                  return (
                    i.setMeta(s, [...l, { add: { id: a, pos: o, data: e } }]),
                    r || n.dispatch(i),
                    a
                  );
                },
                [s, t, n],
              ),
              h = c.useCallback(
                (e) => {
                  const t = s.getState(n.state),
                    o =
                      null == t
                        ? void 0
                        : t.find(void 0, void 0, (t) => t.id == e);
                  return (null == o ? void 0 : o.length) ? o[0].from : void 0;
                },
                [n, s],
              ),
              m = c.useCallback(
                (e, t) => {
                  const o = h(e);
                  return (
                    !!o &&
                    (t
                      ? n.dispatch(
                          n.state.tr
                            .replaceWith(o, o, t)
                            .setMeta(s, [{ remove: { id: e } }]),
                        )
                      : n.dispatch(
                          n.state.tr.setMeta(s, [{ remove: { id: e } }]),
                        ),
                    !0)
                  );
                },
                [s, h, n],
              );
            return {
              placeholderElements: o,
              createPlaceholder: u,
              findPlaceholder: h,
              replacePlaceholder: m,
            };
          })("span", "FileUploadPlaceholder");
        !(function (e, t) {
          (0, a.c$)(
            c.useMemo(
              () =>
                new i.k_({
                  props: {
                    handlePaste(o, r, s) {
                      const n = [];
                      if (
                        (s.content.descendants((o, r) => {
                          if (o.type == t) {
                            const t = o.attrs.src;
                            (!t.startsWith("data:") &&
                              e.BAllowImageHotLinking()) ||
                              n.push({ url: t, pos: r });
                          }
                        }),
                        n.length)
                      ) {
                        let t = o.state.tr;
                        t.selection.empty || t.deleteSelection();
                        let r = t.selection.from,
                          a = 0;
                        for (const o of n) {
                          const n = s.content.cut(a, o.pos - 1);
                          t.insert(r, n),
                            (r += n.size),
                            e.QueueUploadFileByURL(o.url, r, t),
                            (a = o.pos + 1);
                        }
                        return (
                          t.insert(r, s.content.cut(a)),
                          t.scrollIntoView(),
                          o.dispatch(t),
                          !0
                        );
                      }
                      return !1;
                    },
                    handleDOMEvents: {
                      paste(t, o) {
                        var r, s;
                        if (
                          (null ===
                            (s =
                              null === (r = o.clipboardData) || void 0 === r
                                ? void 0
                                : r.files) || void 0 === s
                            ? void 0
                            : s.length) > 0
                        ) {
                          o.preventDefault();
                          for (const t of o.clipboardData.files)
                            e.UploadFile(t);
                          return !0;
                        }
                      },
                    },
                  },
                }),
              [t, e],
            ),
          );
        })(o, t);
        const u = (0, a.Hd)();
        return (
          c.useEffect(() => o.RegisterEditor(u, n, d), [o, u, n, d]),
          (0, r.jsx)(r.Fragment, {
            children: s.map(({ id: e, element: t, data: o }) =>
              (0, r.jsx)(w, { element: t, data: o }, e),
            ),
          })
        );
      });
      class k extends Error {
        constructor(e) {
          super(e);
        }
      }
      function w(e) {
        const { element: t, data: o } = e,
          s = "file" in o ? o.file : void 0,
          n = c.useMemo(() => s && URL.createObjectURL(s), [s]),
          a = "url" in o ? o.url : n,
          i = null == s ? void 0 : s.type.startsWith("video/");
        return d.createPortal(
          (0, r.jsxs)("span", {
            className: v.FileUploadPlaceholder,
            children: [
              (0, r.jsx)("div", {
                className: v.ThrobberCtn,
                children: (0, r.jsxs)("div", {
                  className: v.ThrobberRow,
                  children: [
                    (0, r.jsx)("div", {
                      className: v.Throbber,
                      children: (0, r.jsx)(m.t, {
                        size: "medium",
                        position: "center",
                      }),
                    }),
                    (0, g.we)("#Prosemirror_FileUpload_Uploading"),
                  ],
                }),
              }),
              !i && (0, r.jsx)("img", { src: a, className: v.PendingImage }),
              i &&
                (0, r.jsx)("video", {
                  src: a,
                  className: v.PendingImage,
                  muted: !0,
                  loop: !0,
                  playsInline: !0,
                  autoPlay: !0,
                }),
            ],
          }),
          t,
        );
      }
      class y {
        constructor(e, t, o) {
          (this.m_errors = (0, p.Jc)([])),
            (this.m_fnProcessFileUpload = e),
            (this.m_fnFetchImageURL = t),
            (this.m_bAllowImageHotLinking = o);
        }
        SetProps(e, t, o) {
          (this.m_fnProcessFileUpload = e),
            (this.m_fnFetchImageURL = t),
            (this.m_bAllowImageHotLinking = o),
            (0, s.wT)(
              !this.m_fnFetchImageURL || !this.m_bAllowImageHotLinking,
              "Not expected to have a URL fetch function and allow hotlinking.  URL fetch function will not be called.",
            );
        }
        RegisterEditor(e, t, o) {
          return (
            (0, s.wT)(!this.m_view, "Duplicate registration"),
            (this.m_view = e),
            (this.m_fnCreatePlaceholder = t),
            (this.m_fnReplacePlaceholder = o),
            () => {
              this.m_view == e &&
                this.m_fnCreatePlaceholder == t &&
                this.m_fnReplacePlaceholder == o &&
                ((this.m_view = void 0),
                (this.m_fnCreatePlaceholder = void 0),
                (this.m_fnReplacePlaceholder = void 0));
            }
          );
        }
        AddError(e) {
          this.m_errors.Set([...this.m_errors.Value, e]);
        }
        GetErrors() {
          return this.m_errors;
        }
        ClearErrors() {
          this.m_errors.Set([]);
        }
        GetViewPosition(e, t) {
          var o;
          const r =
            null === (o = this.m_view) || void 0 === o
              ? void 0
              : o.posAtCoords({ left: e, top: t });
          return null == r ? void 0 : r.pos;
        }
        async UploadFile(e, t) {
          (this.m_fnCreatePlaceholder && this.m_fnReplacePlaceholder) ||
            this.AddError(
              "Upload File: No editor registered to handle file upload",
            );
          const o = this.m_fnCreatePlaceholder({ file: e }, t);
          return this.ProcessFile(e, o);
        }
        BAllowImageHotLinking() {
          return this.m_bAllowImageHotLinking;
        }
        QueueUploadFileByURL(e, t, o) {
          if (
            ((this.m_fnCreatePlaceholder && this.m_fnReplacePlaceholder) ||
              this.AddError(
                "QueueUploadFile: No editor registered to handle file upload",
              ),
            console.log(`QueueUploadFileByURL: ${e} at pos ${t}`),
            e.startsWith("data:"))
          ) {
            const r = this.m_fnCreatePlaceholder({ url: e }, t, o);
            return this.ProcessDataURL(e, r), !0;
          }
          if (this.m_fnFetchImageURL) {
            const r = this.m_fnCreatePlaceholder({ url: e }, t, o);
            return this.FetchURLAndProcess(e, r), !0;
          }
          return (
            (0, s.wT)(
              this.m_bAllowImageHotLinking,
              "A URL was posted but we don't have a fnFetchImageURL to process it",
            ),
            !1
          );
        }
        async ProcessDataURL(e, t) {
          const [o, r] = e.split(","),
            s = o.match(/^data:(?<mimetype>[^;]*);(?<encoding>.*)$/);
          if (!s || "base64" != s.groups.encoding)
            return void this.AddError(
              `Unable to data URL, unexpected format: ${o}`,
            );
          const a = null == s ? void 0 : s.groups.mimetype,
            i = (function (e) {
              switch (e) {
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
            })(a);
          if (!i)
            return void this.AddError(`Unsupported MIME type for image: ${a}`);
          const l = atob(r),
            c = new Uint8Array(l.length);
          for (let e = 0; e < l.length; e++) c[e] = l.charCodeAt(e);
          const d = await n.C(c.buffer),
            u = new File([c], `upload_${d}.${i}`, { type: a });
          await this.ProcessFile(u, t);
        }
        async FetchURLAndProcess(e, t) {
          var o;
          try {
            const r = new URL(e),
              s = await this.m_fnFetchImageURL(e),
              n = new File(
                [s],
                decodeURIComponent(
                  (null === (o = r.pathname) || void 0 === o
                    ? void 0
                    : o.replace(/^.*\//, "")) || "image",
                ),
                { type: s.type },
              );
            await this.ProcessFile(n, t);
          } catch (o) {
            this.AddError(`Unable to process URL: ${e}`),
              this.m_fnReplacePlaceholder(t);
          }
        }
        async ProcessFile(e, t) {
          let o;
          try {
            console.log(`Processing file upload: "${e.name}"`),
              (o = await this.m_fnProcessFileUpload(e));
          } catch (e) {
            e instanceof k
              ? this.AddError(e.message)
              : this.AddError(`Error proccessing file upload: ${e}`);
          }
          o
            ? this.m_fnReplacePlaceholder(t, o)
            : this.m_fnReplacePlaceholder(t);
        }
      }
      const x = c.createContext(void 0);
      function T() {
        return c.useContext(x).manager;
      }
      const A = c.memo(function (e) {
        const { manager: t } = e,
          o = (0, b.gc)(t.GetErrors());
        return o.length
          ? (0, r.jsx)(h.E, {
              active: !0,
              children: (0, r.jsx)(u.o0, {
                bAlertDialog: !0,
                strTitle: (0, g.we)("#Error_Generic"),
                strDescription: o.map((e, t) =>
                  (0, r.jsx)("div", { children: e }, t),
                ),
                strOKButtonText: (0, g.we)("#Button_OK"),
                onOK: () => t.ClearErrors(),
                onCancel: () => t.ClearErrors(),
              }),
            })
          : null;
      });
      function B(e) {
        const { manager: t, children: o } = e,
          r = c.useCallback(
            (e, o) => {
              for (const r of e)
                t.UploadFile(r, t.GetViewPosition(o.clientX, o.clientY));
            },
            [t],
          ),
          [s, n] = (0, f.hk)(r);
        return c.cloneElement(o, { ...s, ...o.props });
      }
    },
    1805: (e, t, o) => {
      "use strict";
      o.d(t, { l: () => x });
      var r = o(7850),
        s = o(76217),
        n = o(63512),
        a = o(73170),
        i = o(29287),
        l = o(22145),
        c = o(37834),
        d = o(52893),
        u = o(57053),
        h = o(90626),
        m = o(84811),
        p = o(33645),
        g = o.n(p),
        f = o(38539),
        b = o(9024),
        v = o(52038);
      const _ = h.memo(function (e) {
        const { schema: t } = e,
          o = !(!("table" in t.nodes) || !t.nodes.table.spec.tableRole);
        return (
          (0, l.c$)(h.useMemo(() => o && f.AL({ View: C }), [o])),
          (0, l.c$)(h.useMemo(() => o && f.LF(), [o])),
          null
        );
      });
      class C extends f.Qg {
        constructor(e, t) {
          super(e, t), this.SetTableClass(e);
        }
        update(e) {
          return !!super.update(e) && (this.SetTableClass(e), !0);
        }
        SetTableClass(e) {
          this.table.className = (0, v.A)(
            g().Table,
            e.attrs[b.w.NoBorder] && g().NoBorder,
            e.attrs[b.w.EqualCells] && g().EqualCells,
          );
        }
      }
      var k = o(61859),
        w = o(73745),
        y = o(73309);
      const x = (0, m.Nr)(function (e) {
        const {
            pmState: t,
            className: o,
            refOnUpdate: d,
            refView: u,
            bSpellcheckEnabled: m = !0,
            bSingleLine: p,
            panelProps: g,
            children: f,
          } = e,
          [b, C] = h.useState(),
          [x, A] = h.useState();
        h.useEffect(() => {
          t && b && A(new i.Lz(b, { state: t.state }));
        }, [t, b]),
          h.useEffect(() => () => (null == x ? void 0 : x.destroy()), [x]),
          (0, w.D5)(u, x);
        const {
            refDiv: B,
            onActivate: S,
            onGamepadDirection: M,
          } = (function (e) {
            const t = h.useRef(void 0),
              o = (0, a.FN)(),
              r = h.useCallback(() => {
                if (
                  (o.ShowVirtualKeyboard(),
                  !(null == e ? void 0 : e.hasFocus()))
                ) {
                  e.focus();
                  let o = e.dom.childNodes;
                  for (let r = 0; r < o.length; ++r) {
                    let s = o[r],
                      n = s.offsetTop;
                    if (void 0 !== n && n >= t.current.scrollTop) {
                      let t = s.getBoundingClientRect();
                      (0, c.bQ)(e, t.left, t.top);
                      break;
                    }
                  }
                }
              }, [o, e]),
              s = h.useCallback((e) => e.currentTarget == e.target, []),
              i = (0, n.ak)(t, null, null, s);
            return { refDiv: t, onActivate: r, onGamepadDirection: i };
          })(x),
          j = (0, w.Ue)(B, C);
        if (!t) return null;
        const { schemaConfig: F, bbcodeParser: P } = t;
        return (0, r.jsxs)(l.Ot, {
          view: x,
          pmState: t,
          children: [
            (0, r.jsx)(
              s.Z,
              {
                className: (0, v.A)({
                  ["" + o]: !!o,
                  [y.Container]: !0,
                  [y.SingleLine]: !!p,
                }),
                ref: j,
                spellCheck: m,
                focusable: !0,
                onActivate: S,
                onOKActionDescription: (0, k.we)("#UserGameNotes_Edit"),
                onGamepadDirection: M,
                ...g,
              },
              `editordiv_${m}`,
            ),
            (0, r.jsx)(l.KF, {
              refOnUpdate: d,
              schema: F.pm_schema,
              bSingleLine: p,
            }),
            (0, r.jsx)(T, { parser: P, schema: F.pm_schema }),
            (0, r.jsx)(_, { schema: F.pm_schema }),
            f,
          ],
        });
      });
      const T = h.memo(function (e) {
        const { parser: t, schema: o } = e;
        return (
          (0, l.c$)(
            h.useMemo(
              () =>
                new d.k_({
                  props: {
                    transformPasted: (e, r) =>
                      (function (e, t, o) {
                        let r = !1;
                        if (
                          (o.content.forEach((e) => {
                            e.type == t && (r = !0);
                          }),
                          !r)
                        )
                          return o;
                        const s = e.ConvertLineBreaksToParagraphs(o.content);
                        return u.Ji.maxOpen(s);
                      })(t, o.nodes.hard_break, e),
                  },
                }),
              [t, o],
            ),
          ),
          null
        );
      });
    },
    36969: (e, t, o) => {
      "use strict";
      o.d(t, {
        Km: () => b,
        WJ: () => _,
        z9: () => w,
        C$: () => C,
        Hz: () => v,
        Nt: () => y,
        MV: () => f,
      });
      var r = o(7850),
        s = o(98724),
        n = o(4188),
        a = o(37834),
        i = o(90626),
        l = o(4869),
        c = o(17558),
        d = o(30175),
        u = o(73745);
      function h(e) {
        const { schema: t, addtlAttrs: o, children: s } = e,
          { callbacks: n, view: l } = (0, d.wU)(),
          [h, m] = i.useState(() => (0, a.Cd)(l.state, t.marks.link)),
          p = i.useCallback((e) => m((0, a.Cd)(e.state, t.marks.link)), [t]);
        (0, u.hL)(n, p);
        const [g, f] = (0, c.E)(t, o);
        return (0, r.jsxs)(r.Fragment, {
          children: [
            f,
            (0, r.jsx)(d.ff, {
              onClick: () => g(l),
              toggled: h,
              tooltip: "#FormattingToolbar_InsertLink",
              keyboardShortcut: "Mod-k",
              children: s,
            }),
          ],
        });
      }
      var m = o(30470),
        p = o(60637);
      function g(e) {
        const { schema: t, bColor: o, addtlAttrs: s, children: n } = e,
          { callbacks: l, view: c } = (0, d.wU)(),
          [h, m] = i.useState(() =>
            (0, a.Cd)(c.state, o ? t.marks.color : t.marks.bgcolor),
          ),
          g = i.useCallback(
            (e) => m((0, a.Cd)(e.state, o ? t.marks.color : t.marks.bgcolor)),
            [o, t],
          );
        (0, u.hL)(l, g);
        const [f, b] = (0, p.J)(t, o, s);
        return (0, r.jsxs)(r.Fragment, {
          children: [
            b,
            (0, r.jsx)(d.ff, {
              onClick: () => f(c),
              toggled: h,
              tooltip: o
                ? "#FormattingToolbar_Color"
                : "#FormattingToolbar_BgColor",
              children: n,
            }),
          ],
        });
      }
      function f() {
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(d.cQ, {
              tooltip: "#FormattingToolbar_Undo",
              keyboardShortcut: "Mod-z",
              command: s.tN,
              children: (0, r.jsx)(l.VnB, {}),
            }),
            (0, r.jsx)(d.cQ, {
              tooltip: "#FormattingToolbar_Redo",
              keyboardShortcut:
                "macos" == m.TS.PLATFORM ? "Mod-Shift-z" : "Mod-y",
              command: s.ZS,
              children: (0, r.jsx)(l.Bal, {}),
            }),
          ],
        });
      }
      function b(e) {
        const { schema: t } = e;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(d.GY, {
              tooltip: "#FormattingToolbar_Bold",
              keyboardShortcut: "Mod-b",
              mark: t.marks.strong,
              children: (0, r.jsx)(l.l4n, {}),
            }),
            (0, r.jsx)(d.GY, {
              tooltip: "#FormattingToolbar_Italic",
              keyboardShortcut: "Mod-i",
              mark: t.marks.italic,
              children: (0, r.jsx)(l.UKJ, {}),
            }),
            (0, r.jsx)(d.GY, {
              tooltip: "#FormattingToolbar_Underline",
              keyboardShortcut: "Mod-u",
              mark: t.marks.underline,
              children: (0, r.jsx)(l.Gj3, {}),
            }),
            "strike" in t.marks &&
              (0, r.jsx)(d.GY, {
                tooltip: "#FormattingToolbar_Strike",
                keyboardShortcut: "Mod-Shift-x",
                mark: t.marks.strike,
                children: (0, r.jsx)(l.tI4, {}),
              }),
            "code" in t.marks &&
              (0, r.jsx)(d.GY, {
                tooltip: "#FormattingToolbar_InlineCode",
                keyboardShortcut: "Ctrl-Shift-c",
                mark: t.marks.code,
                children: (0, r.jsx)(l.bmT, {}),
              }),
            "color" in t.marks &&
              (0, r.jsx)(g, {
                schema: t,
                bColor: !0,
                children: (0, r.jsx)(l.r7n, {}),
              }),
            "bgcolor" in t.marks &&
              (0, r.jsx)(g, {
                schema: t,
                bColor: !1,
                children: (0, r.jsx)(l.FId, {}),
              }),
          ],
        });
      }
      function v(e) {
        const { schema: t } = e;
        return (0, r.jsx)(d.u3, {
          tooltip: "#FormattingToolbar_Paragraph",
          keyboardShortcut: "Ctrl-Shift-0",
          nodeType: t.nodes.paragraph,
          children: (0, r.jsx)(l.iYj, {}),
        });
      }
      function _(e) {
        const { schema: t, maxLevel: o = 1, levels: s } = e,
          n = o + s - 1;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            o <= 1 &&
              (0, r.jsx)(d.u3, {
                tooltip: "#FormattingToolbar_HeadingLevel1",
                keyboardShortcut: "Ctrl-Shift-1",
                nodeType: t.nodes.heading,
                attrs: { level: 1 },
                children: (0, r.jsx)(l.jRw, {}),
              }),
            o <= 2 &&
              n >= 2 &&
              (0, r.jsx)(d.u3, {
                tooltip: "#FormattingToolbar_HeadingLevel2",
                keyboardShortcut: "Ctrl-Shift-2",
                nodeType: t.nodes.heading,
                attrs: { level: 2 },
                children: (0, r.jsx)(l.qOW, {}),
              }),
            o <= 3 &&
              n >= 3 &&
              (0, r.jsx)(d.u3, {
                tooltip: "#FormattingToolbar_HeadingLevel3",
                keyboardShortcut: "Ctrl-Shift-3",
                nodeType: t.nodes.heading,
                attrs: { level: 3 },
                children: (0, r.jsx)(l.x7X, {}),
              }),
            o <= 4 &&
              n >= 4 &&
              (0, r.jsx)(d.u3, {
                tooltip: "#FormattingToolbar_HeadingLevel4",
                keyboardShortcut: "Ctrl-Shift-4",
                nodeType: t.nodes.heading,
                attrs: { level: 4 },
                children: (0, r.jsx)(l.qzO, {}),
              }),
            o <= 5 &&
              n >= 5 &&
              (0, r.jsx)(d.u3, {
                tooltip: "#FormattingToolbar_HeadingLevel5",
                keyboardShortcut: "Ctrl-Shift-5",
                nodeType: t.nodes.heading,
                attrs: { level: 5 },
                children: (0, r.jsx)(l.jXA, {}),
              }),
          ],
        });
      }
      function C(e) {
        const { schema: t, showIndentButtonsAsNeeded: o = !1 } = e,
          { callbacks: s, view: a } = (0, d.wU)(),
          { bullet_list: c, ordered_list: h, list_item: m } = t.nodes,
          p = i.useMemo(() => n.T2(m), [m]),
          g = i.useMemo(() => n.$B(m), [m]),
          [f, b] = i.useState(() => p(a.state) || g(a.state));
        return (
          (0, u.hL)(
            s,
            i.useCallback(
              (e) => {
                b(p(e.state) || g(e.state));
              },
              [p, g],
            ),
          ),
          (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(k, {
                tooltip: "#FormattingToolbar_BulletedList",
                keyboardShortcut: "Ctrl-Shift-8",
                list_type: c,
                list_item: m,
                children: (0, r.jsx)(l.JPq, {}),
              }),
              h &&
                (0, r.jsx)(k, {
                  tooltip: "#FormattingToolbar_OrderedList",
                  keyboardShortcut: "Ctrl-Shift-7",
                  list_type: h,
                  list_item: m,
                  children: (0, r.jsx)(l.jE0, {}),
                }),
              (!o || f) &&
                (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)(d.cQ, {
                      tooltip: "#FormattingToolbar_OutdentList",
                      keyboardShortcut: "Mod-[",
                      command: p,
                      children: (0, r.jsx)(l.LSz, {}),
                    }),
                    (0, r.jsx)(d.cQ, {
                      tooltip: "#FormattingToolbar_IndentList",
                      keyboardShortcut: "Mod-[",
                      command: g,
                      children: (0, r.jsx)(l.ycU, {}),
                    }),
                  ],
                }),
            ],
          })
        );
      }
      function k(e) {
        const { list_type: t, list_item: o, children: s, ...l } = e,
          { callbacks: c, view: h } = (0, d.wU)(),
          m = i.useCallback((e) => void 0 !== (0, a.wt)(e.state, t), [t]),
          [p, g] = i.useState(() => m(h)),
          f = i.useMemo(() => n.Sd(t), [t]),
          b = i.useMemo(() => n.T2(o), [o]);
        return (
          (0, u.hL)(
            c,
            i.useCallback(
              (e) => {
                g(m(e));
              },
              [m],
            ),
          ),
          (0, r.jsx)(d.cQ, {
            ...l,
            toggled: p,
            command: p ? b : f,
            children: s,
          })
        );
      }
      function w(e) {
        const { schema: t, addtlAttrs: o } = e;
        return (0, r.jsx)(h, {
          schema: t,
          addtlAttrs: o,
          children: (0, r.jsx)(l.YqK, {}),
        });
      }
      function y(e) {
        const { bSpellcheckEnabled: t, setSpellcheckEnabled: o } = e;
        return (0, r.jsx)(d.ff, {
          tooltip: t
            ? "#FormattingToolbar_DisableSpellcheck"
            : "#FormattingToolbar_EnableSpellcheck",
          toggled: t,
          onClick: () => o(!t),
          children: (0, r.jsx)(l.DEV, {}),
        });
      }
    },
    30175: (e, t, o) => {
      "use strict";
      o.d(t, {
        Ez: () => k,
        GY: () => y,
        XQ: () => _,
        bI: () => b,
        cQ: () => x,
        ff: () => T,
        hK: () => C,
        u3: () => w,
        wU: () => f,
      });
      var r = o(7850),
        s = o(76217),
        n = o(37834),
        a = o(12362),
        i = o(90626),
        l = o(68255),
        c = o(32754),
        d = o(6144),
        u = o(52038),
        h = o(61859),
        m = o(73745),
        p = o(30470),
        g = o(73309);
      const f = () => i.useContext(v);
      function b(e) {
        const { view: t, refUpdateToolbar: o, children: s } = e,
          n = i.useRef(void 0);
        n.current || (n.current = new d.lu()),
          i.useEffect(
            () => (
              (0, m.cZ)(o, () => n.current.Dispatch(t)),
              () => (0, m.cZ)(o, void 0)
            ),
            [t, o],
          );
        const a = i.useMemo(() => ({ callbacks: n.current, view: t }), [t]);
        return t ? (0, r.jsx)(v.Provider, { value: a, children: s }) : null;
      }
      const v = i.createContext(void 0);
      function _() {
        return (0, r.jsx)("div", { className: g.Gap });
      }
      function C() {
        return (0, r.jsx)("div", { className: g.Spacer });
      }
      function k(e) {
        return (0, r.jsx)("div", {
          className: (0, u.A)(e.className, g.ToolbarRowOverflowContainer),
          children: (0, r.jsx)(s.Z, {
            className: g.ToolbarRow,
            "flow-children": "row",
            children: e.children,
          }),
        });
      }
      function w(e) {
        const { nodeType: t, attrs: o, children: s, ...l } = e,
          { callbacks: c, view: d } = f(),
          [u, h] = i.useState(() => (0, n.gj)(d.state, t, o)),
          p = i.useCallback((e) => h((0, n.gj)(e.state, t, o)), [t, o]);
        (0, m.hL)(c, p);
        const g = i.useMemo(() => a.y_(t, o), [o, t]);
        return (0, r.jsx)(x, { ...l, command: g, toggled: u, children: s });
      }
      function y(e) {
        const { mark: t, children: o, ...s } = e,
          { callbacks: l, view: c } = f(),
          [d, u] = i.useState(() => (0, n.Cd)(c.state, t)),
          h = i.useCallback((e) => u((0, n.Cd)(e.state, t)), [t]);
        (0, m.hL)(l, h);
        const p = i.useMemo(() => a.wh(t), [t]);
        return (0, r.jsx)(x, { ...s, command: p, toggled: d, children: o });
      }
      function x(e) {
        const { command: t, toggled: o, children: s, ...n } = e,
          { view: a, callbacks: c } = f(),
          [d, h] = i.useState(() => t(a.state));
        (0, m.hL)(
          c,
          i.useCallback((e) => h(t(e.state)), [t]),
        ),
          i.useEffect(() => h(t(a.state)), [t, a]);
        const p = !d && !o;
        return (0, r.jsx)(A, {
          ...n,
          children: (0, r.jsx)(l.$n, {
            className: (0, u.A)(g.CommandButton, o && g.Toggled),
            onMouseDown: (e) => {
              e.preventDefault(), t(a.state, a.dispatch, a);
            },
            disabled: p,
            focusable: !p,
            children: s,
          }),
        });
      }
      function T(e) {
        const {
          onClick: t,
          toggled: o,
          disabled: s,
          children: n,
          className: a,
          ...i
        } = e;
        return (0, r.jsx)(A, {
          ...i,
          children: (0, r.jsx)(l.$n, {
            className: (0, u.A)(g.CommandButton, o && g.Toggled, a),
            onMouseDown: (e) => {
              0 === e.button && (e.preventDefault(), t(e));
            },
            disabled: !0 === s,
            children: n,
          }),
        });
      }
      function A(e) {
        const { tooltip: t, keyboardShortcut: o, children: s } = e;
        if (!t) return s;
        const n = o ? (0, r.jsx)(B, { tooltip: t, keyboardShortcut: o }) : t;
        return (0, r.jsx)(c.Gq, {
          toolTipContent: n,
          direction: "bottom",
          children: s,
        });
      }
      function B(e) {
        const { tooltip: t, keyboardShortcut: o } = e;
        return (0, r.jsxs)("div", {
          className: g.TooltipWithShortcut,
          children: [
            (0, r.jsx)("div", {
              children: "string" == typeof t ? (0, h.we)(t) : t,
            }),
            (0, r.jsx)("div", {
              children: (0, r.jsx)(S, { keyboardShortcut: o }),
            }),
          ],
        });
      }
      function S(e) {
        const { keyboardShortcut: t } = e,
          o = t.split("-"),
          s = o.pop();
        return (0, r.jsxs)(r.Fragment, {
          children: [
            o.map((e, t) =>
              (0, r.jsxs)(
                i.Fragment,
                {
                  children: [
                    (0, r.jsx)(M, { children: (0, r.jsx)(j, { modifier: e }) }),
                    " + ",
                  ],
                },
                t,
              ),
            ),
            (0, r.jsx)(M, { children: s.toUpperCase() }),
          ],
        });
      }
      function M(e) {
        return (0, r.jsx)("span", {
          className: g.KeyCap,
          children: e.children,
        });
      }
      function j(e) {
        const { modifier: t } = e;
        switch (t) {
          case "Mod":
            return "macos" == p.TS.PLATFORM ? "⌘" : "Ctrl";
          case "Shift":
            return p.TS.PLATFORM, "Shift";
          case "Ctrl":
            return "macos" == p.TS.PLATFORM ? "Control" : "Ctrl";
          case "Alt":
            return "macos" == p.TS.PLATFORM ? "Option" : "Alt";
        }
        return null;
      }
    },
  },
]);
