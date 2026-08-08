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
    88376: (e) => {
      e.exports = {
        ModalConfirmDialog: "_1MwR7dU-J2CeRWYt9WfUJw",
        Header: "Y9lJcGdHP6m4TRcgHnzj2",
        Buttons: "_1Wq4E7gdTa-fjWrhWFQG7b",
      };
    },
    88208: (e) => {
      e.exports = {
        PreventScroll: "ycpazsHLq6lCBFmWPCLCZ",
        ModalDialog: "_1mPKxUDAZ01x-i7612JIsL",
        ModalDialogContent: "_79d7mzfWutbJb1DCbh1Du",
      };
    },
    5598: (e) => {
      e.exports = {
        SimpleModalDialog: "_3ej4mcyhVunlvw3BjUXtel",
        SimpleModalDialogHeader: "_1w-TUMWBEOX_zsSa-BBhK8",
        SimpleModalDialogTitle: "_2tpBIlq2yGQqKcloht-UiJ",
        XButton: "RC4JznqJb34yCm04FKk0I",
        SimpleModalContentCtn: "_2yRV5HfgoGdJZqs9Fl049T",
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
      o.d(t, { F: () => n });
      var r = o(26205);
      function n(e, t, o, n) {
        let s,
          a = [];
        for (; (s = t.match(r.O)); ) {
          s.index > 0 && a.push(e.text(t.substring(0, s.index)));
          const l = (0, r.S)(s[0]),
            i = n && n(l);
          i && "default" !== i
            ? "remove" !== i && a.push(i)
            : a.push(e.text(s[0], [o.create({ href: l })])),
            (t = t.substring(s.index + s[0].length));
        }
        if (0 != a.length) return t.length && a.push(e.text(t)), a;
      }
    },
    88089: (e, t, o) => {
      "use strict";
      o.d(t, { Mw: () => i, TG: () => c, zL: () => l });
      var r = o(7850),
        n = o(52893),
        s = o(90626),
        a = o(22145);
      const l = new n.k_({
          props: {
            handlePaste(e, t, o) {
              var r;
              const n =
                null === (r = t.clipboardData) || void 0 === r
                  ? void 0
                  : r.getData("text/plain").replace(/\n/g, " ");
              if (n) {
                const t = e.state.tr.insertText(n);
                e.dispatch(t);
              }
              return !0;
            },
          },
        }),
        i = { Enter: () => !0, "Shift-Enter": () => !0, "Mod-Enter": () => !0 };
      function c(e) {
        const { nMaxChars: t } = e;
        return (
          (0, a.c$)(
            (0, s.useMemo)(() => {
              return (
                (e = t),
                new n.k_({
                  filterTransaction: (t, o) => t.doc.textContent.length <= e,
                })
              );
              var e;
            }, [t]),
          ),
          (0, r.jsx)(s.Fragment, {})
        );
      }
    },
    79497: (e, t, o) => {
      "use strict";
      o.d(t, { W: () => n });
      var r = o(57053);
      class n {
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
            n = new Map(),
            a = new Map(),
            l = t ? new Set(t) : void 0;
          for (const t in e.nodes) {
            const { bbCode: r, ...a } = e.nodes[t],
              i = s(r, l);
            i && ((o[t] = a), n.set(t, i));
          }
          const i = {};
          for (const t in e.marks) {
            const { bbCode: o, ...r } = e.marks[t];
            (l && !l.has(o.tag)) || ((i[t] = r), a.set(t, o));
          }
          (this.m_ProseMirrorSchema = new r.Sj({ nodes: o, marks: i })),
            n.forEach((t, o) => {
              var r;
              const n = this.m_ProseMirrorSchema.nodes[o],
                s = e.nodes[o],
                a = Array.isArray(t) ? t : [t];
              let l;
              "list_item+" == s.content
                ? (l = this.m_ProseMirrorSchema.nodes.list_item)
                : -1 !=
                    (null === (r = s.content) || void 0 === r
                      ? void 0
                      : r.indexOf("paragraph")) &&
                  (l = this.m_ProseMirrorSchema.nodes.paragraph),
                a.forEach(
                  ({
                    tag: e,
                    BBArgsToAttrs: t,
                    AttrsToBBArgs: o,
                    convertContentToAttr: r,
                    ...s
                  }) => {
                    this.m_mapBBCodeDictionary.set(e, {
                      Constructor: {
                        node: n,
                        BBArgsToAttrs: t,
                        convertContentToAttr: r,
                        acceptNode: l,
                      },
                      skipFollowingNewline: !0,
                      ...s,
                    });
                  },
                );
              const { tag: i, AttrsToBBArgs: c } = a[0];
              this.m_PMToBBCodeConfig.mapNodes.set(n, {
                tag: i,
                AttrsToBBArgs: c,
              });
            }),
            a.forEach((e, t) => {
              const o = this.m_ProseMirrorSchema.marks[t],
                { tag: r, BBArgsToAttrs: n, AttrsToBBArgs: s, ...a } = e;
              this.m_mapBBCodeDictionary.set(r, {
                Constructor: { mark: o, BBArgsToAttrs: n },
                ...a,
              }),
                this.m_PMToBBCodeConfig.mapMarks.set(o, {
                  tag: r,
                  AttrsToBBArgs: s,
                });
            });
        }
      }
      function s(e, t) {
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
      o.d(t, { i: () => s });
      var r = o(90626),
        n = o(90286);
      function s(e, t) {
        const { msAutosaveTimeout: o = 1e3, msMaxInterval: s = 10 * o } =
            t || {},
          [a, l] = r.useState(!1),
          i = r.useRef(0);
        return (
          (0, n.u)(
            e,
            r.useCallback(() => {
              (i.current = performance.now()), l(!0);
            }, []),
          ),
          r.useEffect(() => {
            if (!a || !e) return;
            const t = performance.now(),
              r = (a = !1) => {
                n = void 0;
                const c = performance.now(),
                  d = c - i.current;
                a || d >= o || c - t >= s
                  ? (console.log("Committing changes"),
                    e.CommitChanges(),
                    l(!1))
                  : (n = window.setTimeout(r, o - d));
              };
            let n = window.setTimeout(r, o);
            return () => {
              n && (window.clearTimeout(n), r(!0));
            };
          }, [a, e, o, s]),
          { bDirty: a }
        );
      }
    },
    69956: (e, t, o) => {
      "use strict";
      o.d(t, { M: () => h, U: () => c });
      var r = o(7850),
        n = o(91986),
        s = o(52893),
        a = o(90626),
        l = o(72739),
        i = o(22145);
      const c = a.memo(function (e) {
        const { specs: t } = e,
          [o, n] = a.useState([]),
          l = a.useRef(0),
          c = a.useCallback(
            (e) => (
              n((t) => [...t, { id: l.current++, nodeView: e }]),
              () => n((t) => t.filter((t) => t.nodeView != e))
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
              new s.k_({ props: { nodeViews: e } })
            );
          }, [t, c]);
        return (
          (0, i.c$)(h),
          o.map(({ id: e, nodeView: t }) => (0, r.jsx)(d, { nodeView: t }, e))
        );
      });
      function d(e) {
        const {
            element: t,
            spec: o,
            getProps: r,
            onPropsChanged: n,
            actions: s,
            isSelected: i,
          } = e.nodeView,
          [c, d] = a.useReducer((e) => e + 1, 0);
        return (
          a.useEffect(() => n.Register(d).Unregister, [n, d]),
          l.createPortal(
            a.createElement(o.component, { ...r(), selected: i(), ...s }),
            t,
          )
        );
      }
      class u {
        constructor(e, t, o, r, s) {
          this.node = t;
          const a = o.dom.ownerDocument.createElement(
            e.type.isInline ? "span" : "div",
          );
          this.dom = a;
          const { selection: l } = o.state;
          this.selected = r() >= l.from && r() + t.nodeSize <= l.to;
          const i = (e) => {
              const n = e(o.state.tr, t, r());
              n && o.dispatch(n);
            },
            c = {
              update: i,
              setAttrs: (e, t) => i((o, r, n) => o.setNodeMarkup(n, t, e)),
              removeNode: () => i((e, t, o) => e.delete(o, o + t.nodeSize)),
              focusView: () => {
                window.setTimeout(() => o.focus(), 1);
              },
            },
            d = new n.l();
          (this.destroy = s({
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
        n = o(12362),
        s = o(15024),
        a = o(7502),
        l = o(52893),
        i = o(90626),
        c = o(98724),
        d = o(79216),
        u = o(4188),
        h = o(37834);
      o(45772), o(74763);
      var m = o(88089);
      const p = i.createContext(void 0);
      function g(e) {
        const { view: t, pmState: o, children: n } = e,
          s = i.useMemo(() => ({ view: t, pmState: o }), [t, o]);
        return (0, r.jsx)(p.Provider, { value: s, children: n });
      }
      const f = i.memo(function (e) {
        const { schema: t, refOnUpdate: o, bSingleLine: r } = e;
        return (
          b(
            i.useMemo(
              () =>
                o &&
                new l.k_({
                  view: (e) => ({
                    update: (...e) => o.current && o.current(...e),
                  }),
                }),
              [o],
            ),
          ),
          b(i.useMemo(() => (0, a.w)(r ? m.Mw : {}), [r])),
          b(r ? m.zL : void 0),
          b(i.useMemo(() => (0, s.z)(), [])),
          b(
            i.useMemo(
              () =>
                (function (e) {
                  const { nodes: t, marks: o } = e,
                    r = (0, n.st)(
                      n.I$,
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
                    s = {
                      "Mod-z": c.tN,
                      "Mod-y": c.ZS,
                      "Shift-Mod-z": c.ZS,
                      Backspace: d.dv,
                      Escape: n.hy,
                      "Mod-Enter": r,
                      "Shift-Enter": r,
                      "Mod-b": (0, n.wh)(o.strong),
                      "Mod-i": (0, n.wh)(o.italic),
                      "Mod-u": (0, n.wh)(o.underline),
                      "Mod-Shift-x": (0, n.wh)(o.strike),
                      "Ctrl-Shift-s": (0, n.wh)(o.strike),
                      Enter: (0, u.wn)(t.list_item),
                      "Mod-[": (0, u.T2)(t.list_item),
                      "Mod-]": (0, u.$B)(t.list_item),
                      "Ctrl-Shift-1": (0, n.y_)(t.heading, { level: 1 }),
                      "Ctrl-Shift-2": (0, n.y_)(t.heading, { level: 2 }),
                      "Ctrl-Shift-3": (0, n.y_)(t.heading, { level: 3 }),
                      "Ctrl-Shift-4": (0, n.y_)(t.heading, { level: 4 }),
                      "Ctrl-Shift-5": (0, n.y_)(t.heading, { level: 5 }),
                      "Ctrl-Shift-7": (0, n.y_)(t.ordered_list),
                      "Ctrl-Shift-8": (0, n.y_)(t.bullet_list),
                      "Ctrl-Shift-0": (0, n.y_)(t.paragraph),
                    };
                  return (
                    o.code && (s["Ctrl-Shift-c"] = (0, n.wh)(o.code)),
                    t.code_block &&
                      (s["Alt-Ctrl-Shift-c"] = (0, n.y_)(t.code_block)),
                    t.horizontal_rule &&
                      (s["Mod-_"] = (e, o) => (
                        o &&
                          o(
                            e.tr
                              .replaceSelectionWith(t.horizontal_rule.create())
                              .scrollIntoView(),
                          ),
                        !0
                      )),
                    (0, a.w)(s)
                  );
                })(t),
              [t],
            ),
          ),
          b(i.useMemo(() => (0, a.w)(n.RV), [])),
          b(
            i.useMemo(
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
                        (n = t.horizontal_rule),
                        new d.fV(r, (e, t, o, r) =>
                          e.tr.replaceWith(o, r, n.create()),
                        )),
                    ].filter(Boolean),
                  });
                  var r, n;
                })(t),
              [t],
            ),
          ),
          null
        );
      });
      function b(e) {
        const { pmState: t } = i.useContext(p);
        i.useEffect(() => {
          if (t && e) return t.InstallPlugin(e);
        }, [e, t]);
      }
      function v() {
        var e;
        return null === (e = i.useContext(p)) || void 0 === e ? void 0 : e.view;
      }
    },
    55608: (e, t, o) => {
      "use strict";
      o.d(t, { BM: () => l, DQ: () => c, cI: () => d, ce: () => i });
      var r = o(4188),
        n = o(52038),
        s = o(33645),
        a = o.n(s);
      function l(e, t, o = 0) {
        return () => [e, { class: t }, o];
      }
      function i(e, t, o = 0) {
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
                const t = { class: (0, n.A)("pm_paragraph", a().Paragraph) };
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
                const { src: t, alt: o, title: r, style: s } = e.attrs;
                return [
                  "img",
                  {
                    src: t,
                    alt: o,
                    title: r,
                    class: (0, n.A)(a().Image, {
                      [a().Image_Inline]: "inline" === s,
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
                    autoplay: n,
                    controls: s,
                  } = e.attrs,
                  a = [];
                return (
                  t && a.push(["source", { src: t, type: "video/webm" }]),
                  o && a.push(["source", { src: o, type: "video/mp4" }]),
                  [
                    "video",
                    {
                      poster: r,
                      autoPlay: !!n,
                      controls: !!s,
                      loop: !s && !!n,
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
              toDOM: l("ul", a().List),
              bbCode: { tag: "list" },
            },
            ordered_list: {
              ...r.o8,
              content: "list_item+",
              group: "block",
              toDOM: l("ol", a().OrderedList),
              bbCode: { tag: "olist" },
            },
            list_item: {
              ...r.Aw,
              content: "paragraph block*",
              toDOM: l("li", a().ListItem),
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
              toDOM: l("b", (0, n.A)("BB_Bold", a().Bold)),
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
              toDOM: l("i", (0, n.A)("BB_Italic", a().Italic)),
              bbCode: { tag: "i" },
            },
            underline: {
              parseDOM: [{ tag: "u" }, { style: "text-decoration=underline" }],
              toDOM: l("u", (0, n.A)("BB_Underline", a().Underline)),
              bbCode: { tag: "u" },
            },
            strike: {
              parseDOM: [{ style: "text-decoration=line-through" }],
              toDOM: l("span", (0, n.A)("BB_Strike", a().Strike)),
              bbCode: { tag: "strike" },
            },
            code: {
              parseDOM: [{ tag: "code" }],
              toDOM: l("code", (0, n.A)("BB_Code", a().Code)),
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
                  class: (0, n.A)("BB_Color", a().Color),
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
                  class: (0, n.A)("BB_BGColor", a().BGColor),
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
        n = o(64753),
        s = o(98724),
        a = o(52893),
        l = o(49693),
        i = o(57053),
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
          const n = o && "mark" in o;
          this.m_fnProcessText = n || null == t ? void 0 : t.fnProcessText;
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
      class u extends l.Al {
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
            this.ConvertLineBreaksToParagraphs(i.FK.fromArray(t)),
          );
        }
        TryCreateNode(e, t, o) {
          let r,
            n = i.FK.from(t);
          if (
            !e.node.validContent(n) &&
            (e.node.isInline ||
              (n = i.FK.from(
                t.filter(
                  (t) =>
                    (!t.isText || !t.text.match(/^\s*$/)) &&
                    !(
                      t.type == this.schema.nodes.hard_break &&
                      !e.node.validContent(i.FK.from(t))
                    ),
                ),
              )),
            !e.node.validContent(n))
          ) {
            const t = e.acceptNode;
            r = [];
            let o = [],
              s = !1,
              a = !1;
            for (let l = 0; l < n.childCount; l++) {
              const c = n.child(l),
                d = i.FK.from(c),
                u = e.node.validContent(d);
              a || (!u && !(null == t ? void 0 : t.validContent(d)))
                ? ((a = !0), r.push(c))
                : (u || (s = !0), o.push(c));
            }
            if ((console.assert(!s || !!t), s && t)) {
              t.isBlock &&
                o.length > 1 &&
                o[o.length - 1].type == this.schema.nodes.hard_break &&
                (o = o.slice(0, -1));
              const s = this.m_mapPMBBNodes.get(t.name);
              let a;
              (0, c.wT)(
                s,
                `Indicated acceptNode type ${t.name} for ${e.node.name} missing`,
              );
              try {
                a = s
                  ? this.TryCreateNode(s, o, void 0)
                  : t.createChecked(void 0, o);
              } catch (e) {
                console.error(e), (a = []), (r = [...o, ...r]);
              }
              n = i.FK.from(a);
            } else n = i.FK.from(o);
          }
          try {
            const t = e.node.createAndFill(o, n) || e.node.createChecked(o, n);
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
                      ((n = o),
                      n
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
          var n;
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
            n = {
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
              const s = e.type == o.nodes.hard_break,
                a = i.FK.from(e);
              if (s || o.topNodeType.validContent(a)) {
                const t = s && n.nodes.length > 0;
                n.emit(),
                  s
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
                  n.accumulate(r, e);
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
                  t && n.accumulate(o.nodes.paragraph, o.text(t));
                }
              }
            }),
            (!n.nodes.length && r.length) || n.emit(!0),
            i.FK.from(r)
          );
        }
      }
      function h(e, t) {
        return m(t.pm_schema, t.pm_to_bbcode_config, e, []);
      }
      function m(e, t, o, r) {
        let n = o.marks,
          s = "";
        const a = t.mapNodes.get(o.type),
          { tag: i, args: d } = (function (e, t) {
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
          "emoticon" == i ? (s += ":") : i && (s += (0, l.CS)(i, d)),
          o.content.forEach((o) => {
            ([s, n] = p(t, n, o.marks, s)),
              ([s, n] = (function (e, t, o, r) {
                let n;
                for (const s of o)
                  if (-1 === t.indexOf(s)) {
                    n || (n = t.slice());
                    const o = e.mapMarks.get(s.type);
                    if (((0, c.wT)(o, "mark missing bbtag"), o)) {
                      n.push(s);
                      const { args: e, tag: t } = g(o, s);
                      r += (0, l.CS)(t, e);
                    }
                  }
                return [r, null != n ? n : t];
              })(t, n, o.marks, s)),
              o.type.isText
                ? (s += (0, l.vE)(o.text || ""))
                : o.type == e.nodes.hard_break
                  ? (s += "\n")
                  : (s += m(e, t, o, n));
          }),
          ([s] = p(t, n, r, s)),
          "emoticon" == i ? (s += ":") : i && (s += (0, l.op)(i)),
          s
        );
      }
      function p(e, t, o, r) {
        const n = [];
        for (const e of t) -1 === o.indexOf(e) && n.push(e);
        if (!n.length) return [r, t];
        const s = t.slice();
        for (
          ;
          n.length && ((0, c.wT)(s.length, "no marks left to close"), s.length);
        ) {
          const t = s.pop(),
            o = e.mapMarks.get(t.type),
            { tag: a } = g(o, t);
          r += (0, l.op)(a);
          const i = n.indexOf(t);
          -1 != i && n.splice(i, 1);
        }
        return [r, s];
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
        constructor(e, t, o, n) {
          (this.m_bHasUncomittedChanges = !1),
            (this.m_onStateChangedCallbacks = new r.l());
          const { parser: s } = null != n ? n : {};
          (this.m_schemaConfig = e),
            (this.m_bbcodeParser = new u(e, null != s ? s : {})),
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
            t = [(0, s.b6)(), e];
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
        (0, n.hL)(null == e ? void 0 : e.OnStateChangedCallbacks, t);
      }
    },
    37834: (e, t, o) => {
      "use strict";
      o.d(t, {
        Cd: () => s,
        OX: () => d,
        bQ: () => u,
        gj: () => i,
        vn: () => a,
        wt: () => c,
      });
      var r = o(79216),
        n = o(52893);
      function s(e, t) {
        const { from: o, $from: r, to: n, empty: s } = e.selection;
        return s
          ? !!t.isInSet(e.storedMarks || r.marks())
          : e.doc.rangeHasMark(o, n, t);
      }
      function a(e, t, o) {
        var r;
        const { parent: n } = o,
          s = n.childAfter(o.parentOffset),
          a =
            null === (r = s.node) || void 0 === r
              ? void 0
              : r.marks.find((e) => e.type == t);
        if (!a) return;
        let l = o.index() - 1,
          i = o.start() + s.offset;
        for (; l >= 0 && a.isInSet(n.child(l).marks); )
          (i -= n.child(l).nodeSize), (l -= 1);
        let c = o.index() + 1,
          d = o.start() + s.offset + s.node.nodeSize;
        for (; c < n.childCount && a.isInSet(n.child(c).marks); )
          (d += n.child(c).nodeSize), (c += 1);
        return { from: i, to: d, slice: e.doc.slice(i, d), mark: a };
      }
      function l(e, t, o) {
        if (e.type !== t) return !1;
        if (void 0 === o) return !0;
        for (const t in o) if (o[t] !== e.attrs[t]) return !1;
        return !0;
      }
      function i(e, t, o) {
        let { $from: r, to: n } = e.selection;
        for (let e = r.depth; e > 0; e--) {
          if (n > r.end(e)) return !1;
          if (l(r.node(e), t, o)) return !0;
        }
        return !1;
      }
      function c(e, t, o) {
        const { $from: r, to: n } = e.selection;
        for (let e = r.sharedDepth(n); e > 0; e--) {
          const n = r.node(e);
          if (void 0 === o ? n.type === t : n.hasMarkup(t, o))
            return r.before(e);
        }
      }
      function d(e, t, o = {}) {
        return new r.fV(e, (e, r, n, s) => {
          const a = o instanceof Function ? o(r) : o,
            l = e.tr;
          if (r[1]) {
            const e = n + r[0].indexOf(r[1]),
              t = e + r[1].length;
            t < s && l.delete(t, s),
              e > n && l.delete(n, e),
              (s = n + r[1].length);
          }
          return l.addMark(n, s, t.create(a)), l.removeStoredMark(t), l;
        });
      }
      function u(e, t, o) {
        const r = { left: t, top: o },
          s = e.posAtCoords(r);
        if (null == s ? void 0 : s.pos) {
          const t = e.state.doc.resolve(s.pos);
          e.dispatch(e.state.tr.setSelection(n.U3.near(t)));
        }
      }
    },
    38165: (e, t, o) => {
      "use strict";
      o.d(t, { s: () => h });
      var r = o(7850),
        n = o(78686),
        s = o(90626),
        a = o(61257),
        l = o(68255),
        i = o(4869),
        c = o(32754),
        d = o(27828),
        u = o.n(d);
      function h(e) {
        const { color: t, onChange: o, strTitle: d, disableAlpha: h } = e,
          [m, p] = (0, s.useState)(() => t || "rgba(255, 255, 255, 1)"),
          g = (0, s.useCallback)(async () => {
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
                console.warn(n.Z.Localize("#Sale_EyeDropperFailed"), e);
              }
            else alert(n.Z.Localize("#Sale_EyeDropperError"));
          }, [o]);
        return (0, r.jsxs)("div", {
          className: u().ColorPickerDialog,
          children: [
            Boolean(d) && (0, r.jsx)(l.JU, { children: d }),
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
                toolTipContent: n.Z.Localize("#Sale_BackgroundColorPicker"),
                children: (0, r.jsx)(l.$n, {
                  className: u().EyeDropperBtn,
                  onClick: g,
                  children: (0, r.jsx)(i.O7b, {}),
                }),
              }),
            }),
          ],
        });
      }
    },
    9024: (e, t, o) => {
      "use strict";
      o.d(t, { X: () => u, w: () => i });
      var r = o(33645),
        n = o.n(r),
        s = o(38539),
        a = o(55608),
        l = o(52038);
      const i = { NoBorder: "noborder", EqualCells: "equalcells" },
        c = s.of({
          tableGroup: "block",
          cellContent: "paragraph block*",
          cellAttributes: {
            class: {
              default: n().TableCell,
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
                (0, l.A)(
                  n().Table,
                  e.attrs.noborder && n().NoBorder,
                  e.attrs.equalcells && n().EqualCells,
                ),
                ["tbody", 0],
              ),
            attrs: {
              [i.NoBorder]: { default: !1 },
              [i.EqualCells]: { default: !0 },
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
            toDOM: (0, a.BM)("tr", n().TableRow),
            bbCode: { tag: "tr" },
          },
          table_cell: { ...c.table_cell, bbCode: { ...d, tag: "td" } },
          table_header: { ...c.table_header, bbCode: { ...d, tag: "th" } },
        };
    },
    72421: (e, t, o) => {
      "use strict";
      o.d(t, { _: () => l });
      var r = o(7850),
        n = o(90626),
        s = o(68255),
        a = o(738);
      function l(e) {
        const {
            closeModal: t,
            strTitle: o,
            onOK: l,
            strOKText: i,
            onCancel: c,
            strCancelText: d,
            bOKDisabled: u,
            bCancelDisabled: h,
            strClassNameContent: m = "GenericFormDialog",
            children: p,
          } = e,
          g = n.useCallback(() => {
            c && c(), t();
          }, [c, t]),
          f = h ? void 0 : g;
        return (0, r.jsx)(a.x_, {
          onEscKeypress: f,
          children: (0, r.jsxs)(s.U9, {
            onSubmit: l,
            classNameContent: m,
            children: [
              (0, r.jsx)(s.Y9, { children: o }),
              p,
              (0, r.jsx)(s.wi, {
                children: (0, r.jsx)(s.CB, {
                  strOKText: i,
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
    23352: (e, t, o) => {
      "use strict";
      o.d(t, { J: () => S });
      var r = o(7850),
        n = o(37834),
        s = o(52893),
        a = o(90626),
        l = o(76217),
        i = o(64238),
        c = o.n(i),
        d = o(12155),
        u = o(45699),
        h = o(85585),
        m = o(7445),
        p = o(78327),
        g = o(88208);
      const f = Object.assign(
        function (e) {
          const { children: t, className: o, ...n } = e;
          return (0, r.jsx)(f.Root, {
            ...n,
            children: (0, r.jsx)(f.Content, { className: o, children: t }),
          });
        },
        {
          Root: function (e) {
            const {
                onClose: t,
                className: o,
                navID: n,
                children: s,
                allowScrollBehind: l,
                ...i
              } = e,
              [d, u] = a.useState(!1),
              h = a.useCallback((e) => {
                e &&
                  (e.showModal(),
                  e.ownerDocument.defaultView &&
                    u(
                      e.ownerDocument.body.scrollHeight >
                        e.ownerDocument.defaultView.innerHeight,
                    ));
              }, []),
              p = a.useCallback(
                (e) => {
                  e.target == e.currentTarget && t("backdropclick");
                },
                [t],
              );
            return (0, r.jsx)(b, {
              navID: null != n ? n : "ModalDialog",
              onClose: t,
              children: (0, r.jsx)("dialog", {
                ref: h,
                className: c()(g.ModalDialog, !l && d && g.PreventScroll, o),
                onClose: () => t("onclose"),
                onClick: p,
                ...i,
                children: (0, r.jsx)(m.q, { children: s }),
              }),
            });
          },
          Content: function (e) {
            const { className: t, children: o } = e;
            return (0, r.jsx)("div", {
              className: c()(g.ModalDialogContent, t),
              onClick: (e) => e.stopPropagation(),
              children: o,
            });
          },
        },
      );
      function b(e) {
        const { navID: t, onClose: o, children: n } = e,
          s = a.useCallback(() => o("cancelbutton"), [o]),
          l = a.useRef(void 0);
        (0, u.O7)(l, !0, !0);
        return (0, p.Qn)()
          ? (0, r.jsx)(h.D6, {
              navID: null != t ? t : "ModalDialog",
              onCancelButton: s,
              modal: !0,
              navTreeRef: l,
              children: n,
            })
          : (0, r.jsx)(r.Fragment, { children: n });
      }
      var v = o(5598),
        C = o.n(v);
      function _(e) {
        const {
          onClose: t,
          className: o,
          navID: n,
          children: s,
          strTitle: a,
          ...i
        } = e;
        return (0, r.jsx)(f, {
          onClose: t,
          navID: null != n ? n : "SimpleModalDialog",
          ...i,
          children: (0, r.jsxs)("div", {
            className: c()(o, C().SimpleModalDialog),
            children: [
              " ",
              (0, r.jsxs)(l.Z, {
                className: C().SimpleModalDialogHeader,
                children: [
                  a &&
                    (0, r.jsx)("h2", {
                      className: C().SimpleModalDialogTitle,
                      children: a,
                    }),
                  (0, r.jsx)("button", {
                    onClick: (e) => (t("xclick"), e.preventDefault(), !1),
                    className: C().XButton,
                    children: (0, r.jsx)(d.tmm, {}),
                  }),
                ],
              }),
              (0, r.jsx)("div", {
                className: C().SimpleModalContentCtn,
                children: s,
              }),
            ],
          }),
        });
      }
      var k = o(38165),
        w = o(88376),
        x = o.n(w),
        y = o(55388);
      function T(e) {
        const { strOKLabel: t, strCancelLabel: o, onOK: n, onClose: s } = e;
        return (0, r.jsxs)(l.Z, {
          className: x().Buttons,
          children: [
            !!t &&
              (0, r.jsx)(y.n9, { onClick: null != n ? n : s, children: t }),
            !!o && (0, r.jsx)(y.Oh, { onClick: s, children: o }),
          ],
        });
      }
      var B = o(9154),
        A = o(61859);
      function S(e, t, o) {
        const [s, l] = a.useState(void 0),
          i = a.useRef(null),
          c = a.useCallback(
            (r) => {
              i.current = r;
              const { state: s } = r,
                a = s.selection;
              let { from: c, to: d, empty: u } = a;
              const h = t ? e.marks.color : e.marks.bgcolor;
              let m = "",
                p = "";
              const g = u ? a.$from : s.doc.resolve(c),
                f = (0, n.vn)(s, h, g),
                b = !!f;
              b
                ? ((m = f.mark.attrs.color),
                  u
                    ? ((p = f.slice.content.textBetween(
                        0,
                        f.slice.content.size,
                      )),
                      (c = f.from),
                      (d = f.to))
                    : ((c = Math.max(f.from, c)),
                      (d = Math.min(f.to, d)),
                      (p = f.slice.content.textBetween(
                        c - f.from,
                        d - f.from,
                      ))))
                : u || (p = s.doc.cut(c, d).textContent);
              let v = {};
              if (o)
                for (const e in o) {
                  const t = o[e],
                    r = f ? t.fnReadValue(f.mark) : t.defaultValue;
                  v[e] = r;
                }
              l({
                viewRef: i,
                strColor: m,
                strTargetText: p,
                bIsUpdate: b,
                addtlAttrs: o,
                addtlAttrsValues: v,
                from: c,
                to: d,
              });
            },
            [o, t, e.marks.bgcolor, e.marks.color],
          ),
          d = a.useCallback(() => {
            const e = i.current;
            window.setTimeout(() => {
              e && !e.isDestroyed && e.focus();
            }, 1),
              l(void 0);
          }, []);
        return [
          c,
          s &&
            (0, r.jsx)(B.EN, {
              active: !0,
              children: (0, r.jsx)(M, {
                schema: e,
                bColor: t,
                closeModal: d,
                ...s,
              }),
            }),
        ];
      }
      const M = a.memo(function (e) {
        const {
            schema: t,
            strColor: o,
            bIsUpdate: n,
            strTargetText: l,
            bColor: i,
            addtlAttrs: c,
            addtlAttrsValues: d,
            closeModal: u,
            viewRef: h,
            from: m,
            to: p,
          } = e,
          [g, f] = a.useState(o),
          b = a.useRef(null),
          [v, C] = a.useState(d),
          w = a.useCallback(() => {
            try {
              const e = h.current;
              if (!e || e.isDestroyed)
                return void console.warn(
                  "Editor view is destroyed; skipping color insert",
                );
              const { state: o, dispatch: r } = e,
                n = i ? t.marks.color : t.marks.bgcolor;
              if (!n) return void console.log("debug: no markType");
              if (!g || !/^#[0-9a-fA-F]{6}$/.test(g))
                return void console.log("debug: invalid color text: " + g);
              const a = Math.max(0, Math.min(m, o.doc.content.size));
              if (a > Math.max(0, Math.min(p, o.doc.content.size)))
                return void console.error("Invalid selection range:", m, p);
              const l = n.create({ color: g, ...v });
              let c = o.tr;
              m === p
                ? (c = c.addStoredMark(l))
                : ((c = c.removeMark(m, p, n)),
                  (c = c.addMark(m, p, l)),
                  (c = c.setSelection(s.U3.create(c.doc, p)))),
                r(c.scrollIntoView());
            } catch (e) {
              console.error(e);
            } finally {
              requestAnimationFrame(() => u());
            }
          }, [v, i, u, g, m, t.marks.bgcolor, t.marks.color, p, h]);
        a.useLayoutEffect(() => {
          var e, t, o;
          (
            null ===
              (t =
                null === (e = b.current) || void 0 === e ? void 0 : e.value) ||
            void 0 === t
              ? void 0
              : t.length
          )
            ? b.current.focus()
            : null === (o = b.current) || void 0 === o || o.focus();
        }, []);
        const x = (0, A.we)(
            i ? "#FormattingToolbar_Color" : "#FormattingToolbar_BgColor",
          ),
          y = n
            ? (0, A.we)("#Button_Save")
            : (0, A.we)(
                i ? "#FormattingToolbar_Color" : "#FormattingToolbar_BgColor",
              );
        return (0, r.jsxs)(_, {
          onClose: u,
          strTitle: x,
          children: [
            (0, r.jsx)(k.s, {
              color: g,
              disableAlpha: !0,
              onChange: (e) =>
                f(
                  (function (e) {
                    const t = e.match(
                      /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)$/i,
                    );
                    if (t) {
                      let [, e, o, r, n] = t;
                      return `#${((1 << 24) + (parseInt(e, 10) << 16) + (parseInt(o, 10) << 8) + parseInt(r, 10)).toString(16).slice(1)}`;
                    }
                    return "#7e3232";
                  })(e),
                ),
            }),
            (0, r.jsx)(T, {
              strOKLabel: y,
              strCancelLabel: (0, A.we)("#Button_Cancel"),
              onOK: () => {
                g && g.length > 0 && w();
              },
              onClose: u,
            }),
          ],
        });
      });
    },
    17558: (e, t, o) => {
      "use strict";
      o.d(t, { E: () => h });
      var r = o(7850),
        n = o(37834),
        s = o(52893),
        a = o(90626),
        l = o(68255),
        i = o(9154),
        c = o(72421),
        d = o(61859),
        u = o(30470);
      function h(e, t) {
        const [o, s] = a.useState(void 0),
          l = a.useCallback(
            (o) => {
              const r = o.state.selection;
              let a = "",
                l = "",
                { from: i, to: c } = r;
              const d = (0, n.vn)(o.state, e.marks.link, r.$from),
                u = !!d;
              d
                ? ((l = d.mark.attrs.href),
                  r.empty
                    ? ((a = d.slice.content.textBetween(
                        0,
                        d.slice.content.size,
                      )),
                      (i = d.from),
                      (c = d.to))
                    : ((i = Math.max(d.from, r.from)),
                      (c = Math.min(d.to, r.to)),
                      (a = d.slice.content.textBetween(
                        i - d.from,
                        c - d.from,
                      ))))
                : o.state.selection.empty ||
                  ((a = o.state.doc.cut(
                    o.state.selection.from,
                    o.state.selection.to,
                  ).textContent),
                  a.match(/^https?:\/\//) && (l = a));
              let h = {};
              if (t)
                for (const e in t) {
                  const o = t[e],
                    r = d ? o.fnReadValue(d.mark) : o.defaultValue;
                  h[e] = r;
                }
              s({
                view: o,
                strLinkText: a,
                strLinkHref: l,
                bIsUpdate: u,
                addtlAttrs: t,
                addtlAttrsValues: h,
                from: i,
                to: c,
              });
            },
            [e.marks.link, t],
          ),
          c = null == o ? void 0 : o.view,
          d = a.useCallback(() => {
            window.setTimeout(() => c.focus(), 1), s(void 0);
          }, [c]);
        return [
          l,
          o &&
            (0, r.jsx)(i.EN, {
              active: !0,
              children: (0, r.jsx)(m, { schema: e, closeModal: d, ...o }),
            }),
        ];
      }
      const m = a.memo(function (e) {
        const {
            schema: t,
            strLinkText: o,
            strLinkHref: n,
            bIsUpdate: i,
            addtlAttrs: h,
            addtlAttrsValues: m,
            closeModal: g,
            view: f,
            from: b,
            to: v,
          } = e,
          [C, _] = a.useState(o),
          [k, w] = a.useState(n),
          x = a.useRef(null),
          y = a.useRef(null),
          [T, B] = a.useState(m);
        a.useLayoutEffect(() => {
          var e, t, o, r, n;
          (
            null ===
              (t =
                null === (e = x.current) || void 0 === e ? void 0 : e.value) ||
            void 0 === t
              ? void 0
              : t.length
          )
            ? (
                null ===
                  (r =
                    null === (o = y.current) || void 0 === o
                      ? void 0
                      : o.value) || void 0 === r
                  ? void 0
                  : r.length
              )
              ? (x.current.Focus(), x.current.element.select())
              : y.current.Focus()
            : null === (n = x.current) || void 0 === n || n.Focus();
        }, []);
        const A = i
            ? (0, d.we)("#FormattingToolbar_EditLink")
            : (0, d.we)("#FormattingToolbar_InsertLink"),
          S = i
            ? (0, d.we)("#Button_Save")
            : (0, d.we)("#FormattingToolbar_InsertLink");
        return (0, r.jsxs)(c._, {
          onOK: () => {
            var e, o, r, n, a;
            let l = f.state.tr;
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
            const i = { href: k };
            for (const e in T) i[e] = T[e];
            const c =
              null === (o = t.marks.link) || void 0 === o
                ? void 0
                : o.create(i);
            if ("dev" == u.TS.WEB_UNIVERSE && !c)
              return void console.error(
                "Failed to create link mark with attrs",
                i,
              );
            const d = t.text(C || k, [c]);
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
                    null === (n = f.state.doc.slice(b, v).content) ||
                    void 0 === n
                      ? void 0
                      : n.toJSON) || void 0 === a
                  ? void 0
                  : a.call(n)) || f.state.doc.slice(b, v),
              ));
            try {
              (l = l.replaceRangeWith(b, v, d)),
                (l = l.setSelection(
                  s.U3.create(l.doc, b + d.nodeSize, b + d.nodeSize),
                )),
                f.dispatch(l);
            } catch (e) {
              console.error("Error during link insertion", e);
            }
            g();
          },
          closeModal: g,
          strTitle: A,
          strOKText: S,
          bOKDisabled: 0 == k.length,
          children: [
            (0, r.jsx)(l.pd, {
              ref: x,
              value: C,
              onChange: (e) => _(e.currentTarget.value),
              label: (0, d.we)("#FormattingToolbar_LinkText"),
            }),
            (0, r.jsx)(l.pd, {
              ref: y,
              value: k,
              placeholder: "https://",
              onChange: (e) => w(e.currentTarget.value),
              label: (0, d.we)("#FormattingToolbar_LinkAddress"),
              mustBeURL: !0,
            }),
            h && (0, r.jsx)(p, { addtlAttrs: h, values: T, setValues: B }),
          ],
        });
      });
      function p(e) {
        const { addtlAttrs: t, values: o, setValues: n } = e;
        return (0, r.jsx)(r.Fragment, {
          children: Object.keys(t).map((e) =>
            (0, r.jsx)(
              g,
              {
                attrName: e,
                fnRender: t[e].fnRenderEditor,
                value: o[e],
                setValues: n,
              },
              e,
            ),
          ),
        });
      }
      const g = a.memo(function (e) {
        const { attrName: t, fnRender: o, value: r, setValues: n } = e;
        return o(
          r,
          a.useCallback((e) => n((o) => ({ ...o, [t]: e })), [t, n]),
        );
      });
    },
    71696: (e, t, o) => {
      "use strict";
      o.d(t, { Xv: () => C, pw: () => _ });
      var r = o(7850),
        n = o(81393),
        s = o(20737),
        a = o(22145),
        l = o(52893),
        i = o(29287),
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
      function C(e) {
        const {
            children: t,
            ProcessFileUpload: o,
            FetchImageURL: n,
            bAllowImageHotLinking: s = !1,
          } = e,
          [a] = c.useState(() => ({ manager: new x(o, n, s) })),
          { manager: l } = a;
        return (
          l.SetProps(o, n, s),
          (0, r.jsxs)(y.Provider, {
            value: a,
            children: [
              (0, r.jsx)(B, { manager: l }),
              (0, r.jsx)(A, { manager: l, children: t }),
            ],
          })
        );
      }
      const _ = c.memo(function (e) {
        const { nodeType: t } = e,
          o = T(),
          {
            placeholderElements: n,
            createPlaceholder: s,
            replacePlaceholder: d,
          } = (function (e, t = "PlaceholderPlugin") {
            const [o, r] = c.useState([]),
              [n] = c.useState(
                () =>
                  new l.k_({
                    key: new l.hs(t),
                    state: {
                      init: () => i.zF.empty,
                      apply(t, o) {
                        o = o.map(t.mapping, t.doc);
                        const n = t.getMeta(this) || [];
                        for (const s of n)
                          if (null == s ? void 0 : s.add) {
                            const { id: n, data: a } = s.add,
                              l = (t, o) => {
                                const s = document.createElement(e);
                                return (
                                  r((e) => [
                                    ...e,
                                    { id: n, element: s, data: a },
                                  ]),
                                  s
                                );
                              },
                              c = (e) => {
                                r((t) => t.filter((t) => t.element != e));
                              },
                              d = i.NZ.widget(s.add.pos, l, {
                                id: n,
                                destroy: c,
                              });
                            o = o.add(t.doc, [d]);
                          } else
                            (null == s ? void 0 : s.remove) &&
                              (o = o.remove(
                                o.find(
                                  void 0,
                                  void 0,
                                  (e) => e.id == s.remove.id,
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
            (0, a.c$)(n);
            const s = (0, a.Hd)(),
              d = c.useRef(0),
              u = c.useCallback(
                (e, o, r) => {
                  const a = `${t}_${d.current++}`;
                  let l = r || s.state.tr;
                  void 0 === o &&
                    (l.selection.empty || l.deleteSelection(),
                    (o = l.selection.from));
                  const i = (null == r ? void 0 : r.getMeta(n)) || [];
                  return (
                    l.setMeta(n, [...i, { add: { id: a, pos: o, data: e } }]),
                    r || s.dispatch(l),
                    a
                  );
                },
                [n, t, s],
              ),
              h = c.useCallback(
                (e) => {
                  const t = n.getState(s.state),
                    o =
                      null == t
                        ? void 0
                        : t.find(void 0, void 0, (t) => t.id == e);
                  return (null == o ? void 0 : o.length) ? o[0].from : void 0;
                },
                [s, n],
              ),
              m = c.useCallback(
                (e, t) => {
                  const o = h(e);
                  return (
                    !!o &&
                    (t
                      ? s.dispatch(
                          s.state.tr
                            .replaceWith(o, o, t)
                            .setMeta(n, [{ remove: { id: e } }]),
                        )
                      : s.dispatch(
                          s.state.tr.setMeta(n, [{ remove: { id: e } }]),
                        ),
                    !0)
                  );
                },
                [n, h, s],
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
                new l.k_({
                  props: {
                    handlePaste(o, r, n) {
                      const s = [];
                      if (
                        (n.content.descendants((o, r) => {
                          if (o.type == t) {
                            const t = o.attrs.src;
                            (!t.startsWith("data:") &&
                              e.BAllowImageHotLinking()) ||
                              s.push({ url: t, pos: r });
                          }
                        }),
                        s.length)
                      ) {
                        let t = o.state.tr;
                        t.selection.empty || t.deleteSelection();
                        let r = t.selection.from,
                          a = 0;
                        for (const o of s) {
                          const s = n.content.cut(a, o.pos - 1);
                          t.insert(r, s),
                            (r += s.size),
                            e.QueueUploadFileByURL(o.url, r, t),
                            (a = o.pos + 1);
                        }
                        return (
                          t.insert(r, n.content.cut(a)),
                          t.scrollIntoView(),
                          o.dispatch(t),
                          !0
                        );
                      }
                      return !1;
                    },
                    handleDOMEvents: {
                      paste(t, o) {
                        var r, n;
                        if (
                          (null ===
                            (n =
                              null === (r = o.clipboardData) || void 0 === r
                                ? void 0
                                : r.files) || void 0 === n
                            ? void 0
                            : n.length) > 0
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
          c.useEffect(() => o.RegisterEditor(u, s, d), [o, u, s, d]),
          (0, r.jsx)(r.Fragment, {
            children: n.map(({ id: e, element: t, data: o }) =>
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
          n = "file" in o ? o.file : void 0,
          s = c.useMemo(() => n && URL.createObjectURL(n), [n]),
          a = "url" in o ? o.url : s,
          l = null == n ? void 0 : n.type.startsWith("video/");
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
              !l && (0, r.jsx)("img", { src: a, className: v.PendingImage }),
              l &&
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
      class x {
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
            (0, n.wT)(
              !this.m_fnFetchImageURL || !this.m_bAllowImageHotLinking,
              "Not expected to have a URL fetch function and allow hotlinking.  URL fetch function will not be called.",
            );
        }
        RegisterEditor(e, t, o) {
          return (
            (0, n.wT)(!this.m_view, "Duplicate registration"),
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
            (0, n.wT)(
              this.m_bAllowImageHotLinking,
              "A URL was posted but we don't have a fnFetchImageURL to process it",
            ),
            !1
          );
        }
        async ProcessDataURL(e, t) {
          const [o, r] = e.split(","),
            n = o.match(/^data:(?<mimetype>[^;]*);(?<encoding>.*)$/);
          if (!n || "base64" != n.groups.encoding)
            return void this.AddError(
              `Unable to data URL, unexpected format: ${o}`,
            );
          const a = null == n ? void 0 : n.groups.mimetype,
            l = (function (e) {
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
          if (!l)
            return void this.AddError(`Unsupported MIME type for image: ${a}`);
          const i = atob(r),
            c = new Uint8Array(i.length);
          for (let e = 0; e < i.length; e++) c[e] = i.charCodeAt(e);
          const d = await s.C(c.buffer),
            u = new File([c], `upload_${d}.${l}`, { type: a });
          await this.ProcessFile(u, t);
        }
        async FetchURLAndProcess(e, t) {
          var o;
          try {
            const r = new URL(e),
              n = await this.m_fnFetchImageURL(e),
              s = new File(
                [n],
                decodeURIComponent(
                  (null === (o = r.pathname) || void 0 === o
                    ? void 0
                    : o.replace(/^.*\//, "")) || "image",
                ),
                { type: n.type },
              );
            await this.ProcessFile(s, t);
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
      const y = c.createContext(void 0);
      function T() {
        return c.useContext(y).manager;
      }
      const B = c.memo(function (e) {
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
      function A(e) {
        const { manager: t, children: o } = e,
          r = c.useCallback(
            (e, o) => {
              for (const r of e)
                t.UploadFile(r, t.GetViewPosition(o.clientX, o.clientY));
            },
            [t],
          ),
          [n, s] = (0, f.hk)(r);
        return c.cloneElement(o, { ...n, ...o.props });
      }
    },
    1805: (e, t, o) => {
      "use strict";
      o.d(t, { l: () => y });
      var r = o(7850),
        n = o(76217),
        s = o(63512),
        a = o(73170),
        l = o(29287),
        i = o(22145),
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
      const C = h.memo(function (e) {
        const { schema: t } = e,
          o = !(!("table" in t.nodes) || !t.nodes.table.spec.tableRole);
        return (
          (0, i.c$)(h.useMemo(() => o && f.AL({ View: _ }), [o])),
          (0, i.c$)(h.useMemo(() => o && f.LF(), [o])),
          null
        );
      });
      class _ extends f.Qg {
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
        x = o(73309);
      const y = (0, m.Nr)(function (e) {
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
          [b, _] = h.useState(),
          [y, B] = h.useState();
        h.useEffect(() => {
          t && b && B(new l.Lz(b, { state: t.state }));
        }, [t, b]),
          h.useEffect(() => () => (null == y ? void 0 : y.destroy()), [y]),
          (0, w.D5)(u, y);
        const {
            refDiv: A,
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
                    let n = o[r],
                      s = n.offsetTop;
                    if (void 0 !== s && s >= t.current.scrollTop) {
                      let t = n.getBoundingClientRect();
                      (0, c.bQ)(e, t.left, t.top);
                      break;
                    }
                  }
                }
              }, [o, e]),
              n = h.useCallback((e) => e.currentTarget == e.target, []),
              l = (0, s.ak)(t, null, null, n);
            return { refDiv: t, onActivate: r, onGamepadDirection: l };
          })(y),
          j = (0, w.Ue)(A, _);
        if (!t) return null;
        const { schemaConfig: F, bbcodeParser: D } = t;
        return (0, r.jsxs)(i.Ot, {
          view: y,
          pmState: t,
          children: [
            (0, r.jsx)(
              n.Z,
              {
                className: (0, v.A)({
                  ["" + o]: !!o,
                  [x.Container]: !0,
                  [x.SingleLine]: !!p,
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
            (0, r.jsx)(i.KF, {
              refOnUpdate: d,
              schema: F.pm_schema,
              bSingleLine: p,
            }),
            (0, r.jsx)(T, { parser: D, schema: F.pm_schema }),
            (0, r.jsx)(C, { schema: F.pm_schema }),
            f,
          ],
        });
      });
      const T = h.memo(function (e) {
        const { parser: t, schema: o } = e;
        return (
          (0, i.c$)(
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
                        const n = e.ConvertLineBreaksToParagraphs(o.content);
                        return u.Ji.maxOpen(n);
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
        WJ: () => C,
        z9: () => w,
        C$: () => _,
        Hz: () => v,
        Nt: () => x,
        MV: () => f,
      });
      var r = o(7850),
        n = o(98724),
        s = o(4188),
        a = o(37834),
        l = o(90626),
        i = o(4869),
        c = o(17558),
        d = o(30175),
        u = o(73745);
      function h(e) {
        const { schema: t, addtlAttrs: o, children: n } = e,
          { callbacks: s, view: i } = (0, d.wU)(),
          [h, m] = l.useState(() => (0, a.Cd)(i.state, t.marks.link)),
          p = l.useCallback((e) => m((0, a.Cd)(e.state, t.marks.link)), [t]);
        (0, u.hL)(s, p);
        const [g, f] = (0, c.E)(t, o);
        return (0, r.jsxs)(r.Fragment, {
          children: [
            f,
            (0, r.jsx)(d.ff, {
              onClick: () => g(i),
              toggled: h,
              tooltip: "#FormattingToolbar_InsertLink",
              keyboardShortcut: "Mod-k",
              children: n,
            }),
          ],
        });
      }
      var m = o(30470),
        p = o(23352);
      function g(e) {
        const { schema: t, bColor: o, addtlAttrs: n, children: s } = e,
          { callbacks: i, view: c } = (0, d.wU)(),
          [h, m] = l.useState(() =>
            (0, a.Cd)(c.state, o ? t.marks.color : t.marks.bgcolor),
          ),
          g = l.useCallback(
            (e) => m((0, a.Cd)(e.state, o ? t.marks.color : t.marks.bgcolor)),
            [o, t],
          );
        (0, u.hL)(i, g);
        const [f, b] = (0, p.J)(t, o, n);
        return (0, r.jsxs)(r.Fragment, {
          children: [
            b,
            (0, r.jsx)(d.ff, {
              onClick: () => f(c),
              toggled: h,
              tooltip: o
                ? "#FormattingToolbar_Color"
                : "#FormattingToolbar_BgColor",
              children: s,
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
              command: n.tN,
              children: (0, r.jsx)(i.VnB, {}),
            }),
            (0, r.jsx)(d.cQ, {
              tooltip: "#FormattingToolbar_Redo",
              keyboardShortcut:
                "macos" == m.TS.PLATFORM ? "Mod-Shift-z" : "Mod-y",
              command: n.ZS,
              children: (0, r.jsx)(i.Bal, {}),
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
              children: (0, r.jsx)(i.l4n, {}),
            }),
            (0, r.jsx)(d.GY, {
              tooltip: "#FormattingToolbar_Italic",
              keyboardShortcut: "Mod-i",
              mark: t.marks.italic,
              children: (0, r.jsx)(i.UKJ, {}),
            }),
            (0, r.jsx)(d.GY, {
              tooltip: "#FormattingToolbar_Underline",
              keyboardShortcut: "Mod-u",
              mark: t.marks.underline,
              children: (0, r.jsx)(i.Gj3, {}),
            }),
            "strike" in t.marks &&
              (0, r.jsx)(d.GY, {
                tooltip: "#FormattingToolbar_Strike",
                keyboardShortcut: "Mod-Shift-x",
                mark: t.marks.strike,
                children: (0, r.jsx)(i.tI4, {}),
              }),
            "code" in t.marks &&
              (0, r.jsx)(d.GY, {
                tooltip: "#FormattingToolbar_InlineCode",
                keyboardShortcut: "Ctrl-Shift-c",
                mark: t.marks.code,
                children: (0, r.jsx)(i.bmT, {}),
              }),
            "color" in t.marks &&
              (0, r.jsx)(g, {
                schema: t,
                bColor: !0,
                children: (0, r.jsx)(i.r7n, {}),
              }),
            "bgcolor" in t.marks &&
              (0, r.jsx)(g, {
                schema: t,
                bColor: !1,
                children: (0, r.jsx)(i.FId, {}),
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
          children: (0, r.jsx)(i.iYj, {}),
        });
      }
      function C(e) {
        const { schema: t, maxLevel: o = 1, levels: n } = e,
          s = o + n - 1;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            o <= 1 &&
              (0, r.jsx)(d.u3, {
                tooltip: "#FormattingToolbar_HeadingLevel1",
                keyboardShortcut: "Ctrl-Shift-1",
                nodeType: t.nodes.heading,
                attrs: { level: 1 },
                children: (0, r.jsx)(i.jRw, {}),
              }),
            o <= 2 &&
              s >= 2 &&
              (0, r.jsx)(d.u3, {
                tooltip: "#FormattingToolbar_HeadingLevel2",
                keyboardShortcut: "Ctrl-Shift-2",
                nodeType: t.nodes.heading,
                attrs: { level: 2 },
                children: (0, r.jsx)(i.qOW, {}),
              }),
            o <= 3 &&
              s >= 3 &&
              (0, r.jsx)(d.u3, {
                tooltip: "#FormattingToolbar_HeadingLevel3",
                keyboardShortcut: "Ctrl-Shift-3",
                nodeType: t.nodes.heading,
                attrs: { level: 3 },
                children: (0, r.jsx)(i.x7X, {}),
              }),
            o <= 4 &&
              s >= 4 &&
              (0, r.jsx)(d.u3, {
                tooltip: "#FormattingToolbar_HeadingLevel4",
                keyboardShortcut: "Ctrl-Shift-4",
                nodeType: t.nodes.heading,
                attrs: { level: 4 },
                children: (0, r.jsx)(i.qzO, {}),
              }),
            o <= 5 &&
              s >= 5 &&
              (0, r.jsx)(d.u3, {
                tooltip: "#FormattingToolbar_HeadingLevel5",
                keyboardShortcut: "Ctrl-Shift-5",
                nodeType: t.nodes.heading,
                attrs: { level: 5 },
                children: (0, r.jsx)(i.jXA, {}),
              }),
          ],
        });
      }
      function _(e) {
        const { schema: t, showIndentButtonsAsNeeded: o = !1 } = e,
          { callbacks: n, view: a } = (0, d.wU)(),
          { bullet_list: c, ordered_list: h, list_item: m } = t.nodes,
          p = l.useMemo(() => s.T2(m), [m]),
          g = l.useMemo(() => s.$B(m), [m]),
          [f, b] = l.useState(() => p(a.state) || g(a.state));
        return (
          (0, u.hL)(
            n,
            l.useCallback(
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
                children: (0, r.jsx)(i.JPq, {}),
              }),
              h &&
                (0, r.jsx)(k, {
                  tooltip: "#FormattingToolbar_OrderedList",
                  keyboardShortcut: "Ctrl-Shift-7",
                  list_type: h,
                  list_item: m,
                  children: (0, r.jsx)(i.jE0, {}),
                }),
              (!o || f) &&
                (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)(d.cQ, {
                      tooltip: "#FormattingToolbar_OutdentList",
                      keyboardShortcut: "Mod-[",
                      command: p,
                      children: (0, r.jsx)(i.LSz, {}),
                    }),
                    (0, r.jsx)(d.cQ, {
                      tooltip: "#FormattingToolbar_IndentList",
                      keyboardShortcut: "Mod-[",
                      command: g,
                      children: (0, r.jsx)(i.ycU, {}),
                    }),
                  ],
                }),
            ],
          })
        );
      }
      function k(e) {
        const { list_type: t, list_item: o, children: n, ...i } = e,
          { callbacks: c, view: h } = (0, d.wU)(),
          m = l.useCallback((e) => void 0 !== (0, a.wt)(e.state, t), [t]),
          [p, g] = l.useState(() => m(h)),
          f = l.useMemo(() => s.Sd(t), [t]),
          b = l.useMemo(() => s.T2(o), [o]);
        return (
          (0, u.hL)(
            c,
            l.useCallback(
              (e) => {
                g(m(e));
              },
              [m],
            ),
          ),
          (0, r.jsx)(d.cQ, {
            ...i,
            toggled: p,
            command: p ? b : f,
            children: n,
          })
        );
      }
      function w(e) {
        const { schema: t, addtlAttrs: o } = e;
        return (0, r.jsx)(h, {
          schema: t,
          addtlAttrs: o,
          children: (0, r.jsx)(i.YqK, {}),
        });
      }
      function x(e) {
        const { bSpellcheckEnabled: t, setSpellcheckEnabled: o } = e;
        return (0, r.jsx)(d.ff, {
          tooltip: t
            ? "#FormattingToolbar_DisableSpellcheck"
            : "#FormattingToolbar_EnableSpellcheck",
          toggled: t,
          onClick: () => o(!t),
          children: (0, r.jsx)(i.DEV, {}),
        });
      }
    },
    30175: (e, t, o) => {
      "use strict";
      o.d(t, {
        Ez: () => k,
        GY: () => x,
        XQ: () => C,
        bI: () => b,
        cQ: () => y,
        ff: () => T,
        hK: () => _,
        u3: () => w,
        wU: () => f,
      });
      var r = o(7850),
        n = o(76217),
        s = o(37834),
        a = o(12362),
        l = o(90626),
        i = o(68255),
        c = o(32754),
        d = o(6144),
        u = o(52038),
        h = o(61859),
        m = o(73745),
        p = o(30470),
        g = o(73309);
      const f = () => l.useContext(v);
      function b(e) {
        const { view: t, refUpdateToolbar: o, children: n } = e,
          s = l.useRef(void 0);
        s.current || (s.current = new d.lu()),
          l.useEffect(
            () => (
              (0, m.cZ)(o, () => s.current.Dispatch(t)),
              () => (0, m.cZ)(o, void 0)
            ),
            [t, o],
          );
        const a = l.useMemo(() => ({ callbacks: s.current, view: t }), [t]);
        return t ? (0, r.jsx)(v.Provider, { value: a, children: n }) : null;
      }
      const v = l.createContext(void 0);
      function C() {
        return (0, r.jsx)("div", { className: g.Gap });
      }
      function _() {
        return (0, r.jsx)("div", { className: g.Spacer });
      }
      function k(e) {
        return (0, r.jsx)("div", {
          className: (0, u.A)(e.className, g.ToolbarRowOverflowContainer),
          children: (0, r.jsx)(n.Z, {
            className: g.ToolbarRow,
            "flow-children": "row",
            children: e.children,
          }),
        });
      }
      function w(e) {
        const { nodeType: t, attrs: o, children: n, ...i } = e,
          { callbacks: c, view: d } = f(),
          [u, h] = l.useState(() => (0, s.gj)(d.state, t, o)),
          p = l.useCallback((e) => h((0, s.gj)(e.state, t, o)), [t, o]);
        (0, m.hL)(c, p);
        const g = l.useMemo(() => a.y_(t, o), [o, t]);
        return (0, r.jsx)(y, { ...i, command: g, toggled: u, children: n });
      }
      function x(e) {
        const { mark: t, children: o, ...n } = e,
          { callbacks: i, view: c } = f(),
          [d, u] = l.useState(() => (0, s.Cd)(c.state, t)),
          h = l.useCallback((e) => u((0, s.Cd)(e.state, t)), [t]);
        (0, m.hL)(i, h);
        const p = l.useMemo(() => a.wh(t), [t]);
        return (0, r.jsx)(y, { ...n, command: p, toggled: d, children: o });
      }
      function y(e) {
        const { command: t, toggled: o, children: n, ...s } = e,
          { view: a, callbacks: c } = f(),
          [d, h] = l.useState(() => t(a.state));
        (0, m.hL)(
          c,
          l.useCallback((e) => h(t(e.state)), [t]),
        ),
          l.useEffect(() => h(t(a.state)), [t, a]);
        const p = !d && !o;
        return (0, r.jsx)(B, {
          ...s,
          children: (0, r.jsx)(i.$n, {
            className: (0, u.A)(g.CommandButton, o && g.Toggled),
            onMouseDown: (e) => {
              e.preventDefault(), t(a.state, a.dispatch, a);
            },
            disabled: p,
            focusable: !p,
            children: n,
          }),
        });
      }
      function T(e) {
        const {
          onClick: t,
          toggled: o,
          disabled: n,
          children: s,
          className: a,
          ...l
        } = e;
        return (0, r.jsx)(B, {
          ...l,
          children: (0, r.jsx)(i.$n, {
            className: (0, u.A)(g.CommandButton, o && g.Toggled, a),
            onMouseDown: (e) => {
              0 === e.button && (e.preventDefault(), t(e));
            },
            disabled: !0 === n,
            children: s,
          }),
        });
      }
      function B(e) {
        const { tooltip: t, keyboardShortcut: o, children: n } = e;
        if (!t) return n;
        const s = o ? (0, r.jsx)(A, { tooltip: t, keyboardShortcut: o }) : t;
        return (0, r.jsx)(c.Gq, {
          toolTipContent: s,
          direction: "bottom",
          children: n,
        });
      }
      function A(e) {
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
          n = o.pop();
        return (0, r.jsxs)(r.Fragment, {
          children: [
            o.map((e, t) =>
              (0, r.jsxs)(
                l.Fragment,
                {
                  children: [
                    (0, r.jsx)(M, { children: (0, r.jsx)(j, { modifier: e }) }),
                    " + ",
                  ],
                },
                t,
              ),
            ),
            (0, r.jsx)(M, { children: n.toUpperCase() }),
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
