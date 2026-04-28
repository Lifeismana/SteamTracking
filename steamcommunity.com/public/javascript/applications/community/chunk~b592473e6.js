/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [9773],
  {
    57361: (t) => {
      t.exports = {
        EyeDropperCtn: "_2cT7wst-UhvDbRqPOUFLHl",
        EyeDropperBtn: "_1SFKrl2Gt5OR-Nop7cqHIP",
        ColorPickerCtn: "_3qTvksxeNcdLlXlVi5T__3",
      };
    },
    73309: (t) => {
      t.exports = {
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
    88089: (t, e, o) => {
      "use strict";
      o.d(e, { Mw: () => i, TG: () => c, zL: () => l });
      var r = o(7850),
        s = o(52893),
        n = o(90626),
        a = o(22145);
      const l = new s.k_({
          props: {
            handlePaste(t, e, o) {
              var r;
              const s =
                null === (r = e.clipboardData) || void 0 === r
                  ? void 0
                  : r.getData("text/plain").replace(/\n/g, " ");
              if (s) {
                const e = t.state.tr.insertText(s);
                t.dispatch(e);
              }
              return !0;
            },
          },
        }),
        i = { Enter: () => !0, "Shift-Enter": () => !0, "Mod-Enter": () => !0 };
      function c(t) {
        const { nMaxChars: e } = t;
        return (
          (0, a.c$)(
            (0, n.useMemo)(() => {
              return (
                (t = e),
                new s.k_({
                  filterTransaction: (e, o) => e.doc.textContent.length <= t,
                })
              );
              var t;
            }, [e]),
          ),
          (0, r.jsx)(n.Fragment, {})
        );
      }
    },
    79497: (t, e, o) => {
      "use strict";
      o.d(e, { W: () => s });
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
        ConvertAttrToBBCodeArgs(t, e) {
          const o = this.m_PMToBBCodeConfig.mapNodes.get(t.type);
          return (o && o.AttrsToBBArgs && o.AttrsToBBArgs(e, t).args) || {};
        }
        constructor(t, e) {
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
            l = e ? new Set(e) : void 0;
          for (const e in t.nodes) {
            const { bbCode: r, ...a } = t.nodes[e],
              i = n(r, l);
            i && ((o[e] = a), s.set(e, i));
          }
          const i = {};
          for (const e in t.marks) {
            const { bbCode: o, ...r } = t.marks[e];
            (l && !l.has(o.tag)) || ((i[e] = r), a.set(e, o));
          }
          (this.m_ProseMirrorSchema = new r.Sj({ nodes: o, marks: i })),
            s.forEach((e, o) => {
              var r;
              const s = this.m_ProseMirrorSchema.nodes[o],
                n = t.nodes[o],
                a = Array.isArray(e) ? e : [e];
              let l;
              "list_item+" == n.content
                ? (l = this.m_ProseMirrorSchema.nodes.list_item)
                : -1 !=
                    (null === (r = n.content) || void 0 === r
                      ? void 0
                      : r.indexOf("paragraph")) &&
                  (l = this.m_ProseMirrorSchema.nodes.paragraph),
                a.forEach(
                  ({
                    tag: t,
                    BBArgsToAttrs: e,
                    AttrsToBBArgs: o,
                    convertContentToAttr: r,
                    ...n
                  }) => {
                    this.m_mapBBCodeDictionary.set(t, {
                      Constructor: {
                        node: s,
                        BBArgsToAttrs: e,
                        convertContentToAttr: r,
                        acceptNode: l,
                      },
                      skipFollowingNewline: !0,
                      ...n,
                    });
                  },
                );
              const { tag: i, AttrsToBBArgs: c } = a[0];
              this.m_PMToBBCodeConfig.mapNodes.set(s, {
                tag: i,
                AttrsToBBArgs: c,
              });
            }),
            a.forEach((t, e) => {
              const o = this.m_ProseMirrorSchema.marks[e],
                { tag: r, BBArgsToAttrs: s, AttrsToBBArgs: n, ...a } = t;
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
      function n(t, e) {
        if (e) {
          if (Array.isArray(t)) {
            const o = t.filter((t) => e.has(t.tag));
            return o.length > 0 ? o : void 0;
          }
          return e.has(t.tag) ? t : void 0;
        }
        return t;
      }
    },
    26555: (t, e, o) => {
      "use strict";
      o.d(e, { i: () => n });
      var r = o(90626),
        s = o(90286);
      function n(t, e) {
        const { msAutosaveTimeout: o = 1e3, msMaxInterval: n = 10 * o } =
            e || {},
          [a, l] = r.useState(!1),
          i = r.useRef(0);
        return (
          (0, s.u)(
            t,
            r.useCallback(() => {
              (i.current = performance.now()), l(!0);
            }, []),
          ),
          r.useEffect(() => {
            if (!a || !t) return;
            const e = performance.now(),
              r = (a = !1) => {
                s = void 0;
                const c = performance.now(),
                  d = c - i.current;
                a || d >= o || c - e >= n
                  ? (console.log("Committing changes"),
                    t.CommitChanges(),
                    l(!1))
                  : (s = window.setTimeout(r, o - d));
              };
            let s = window.setTimeout(r, o);
            return () => {
              s && (window.clearTimeout(s), r(!0));
            };
          }, [a, t, o, n]),
          { bDirty: a }
        );
      }
    },
    22145: (t, e, o) => {
      "use strict";
      o.d(e, { KF: () => f, Ot: () => p, c$: () => b, Hd: () => v });
      var r = o(7850),
        s = o(12362),
        n = o(15024),
        a = o(7502),
        l = o(52893),
        i = o(90626),
        c = o(98724),
        d = o(79216),
        u = o(4188),
        m = o(37834);
      o(45772), o(74763);
      var h = o(88089);
      const g = i.createContext(void 0);
      function p(t) {
        const { view: e, pmState: o, children: s } = t,
          n = i.useMemo(() => ({ view: e, pmState: o }), [e, o]);
        return (0, r.jsx)(g.Provider, { value: n, children: s });
      }
      const f = i.memo(function (t) {
        const { schema: e, refOnUpdate: o, bSingleLine: r } = t;
        return (
          b(
            i.useMemo(
              () =>
                o &&
                new l.k_({
                  view: (t) => ({
                    update: (...t) => o.current && o.current(...t),
                  }),
                }),
              [o],
            ),
          ),
          b(i.useMemo(() => (0, a.w)(r ? h.Mw : {}), [r])),
          b(r ? h.zL : void 0),
          b(i.useMemo(() => (0, n.z)(), [])),
          b(
            i.useMemo(
              () =>
                (function (t) {
                  const { nodes: e, marks: o } = t,
                    r = (0, s.st)(
                      s.I$,
                      (t, o) => (
                        o &&
                          o(
                            t.tr
                              .replaceSelectionWith(
                                e.hard_break.createChecked(),
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
                      Enter: (0, u.wn)(e.list_item),
                      "Mod-[": (0, u.T2)(e.list_item),
                      "Mod-]": (0, u.$B)(e.list_item),
                      "Ctrl-Shift-1": (0, s.y_)(e.heading, { level: 1 }),
                      "Ctrl-Shift-2": (0, s.y_)(e.heading, { level: 2 }),
                      "Ctrl-Shift-3": (0, s.y_)(e.heading, { level: 3 }),
                      "Ctrl-Shift-4": (0, s.y_)(e.heading, { level: 4 }),
                      "Ctrl-Shift-5": (0, s.y_)(e.heading, { level: 5 }),
                      "Ctrl-Shift-7": (0, s.y_)(e.ordered_list),
                      "Ctrl-Shift-8": (0, s.y_)(e.bullet_list),
                      "Ctrl-Shift-0": (0, s.y_)(e.paragraph),
                    };
                  return (
                    o.code && (n["Ctrl-Shift-c"] = (0, s.wh)(o.code)),
                    e.code_block &&
                      (n["Alt-Ctrl-Shift-c"] = (0, s.y_)(e.code_block)),
                    e.horizontal_rule &&
                      (n["Mod-_"] = (t, o) => (
                        o &&
                          o(
                            t.tr
                              .replaceSelectionWith(e.horizontal_rule.create())
                              .scrollIntoView(),
                          ),
                        !0
                      )),
                    (0, a.w)(n)
                  );
                })(e),
              [e],
            ),
          ),
          b(i.useMemo(() => (0, a.w)(s.RV), [])),
          b(
            i.useMemo(
              () =>
                (function (t) {
                  const { nodes: e, marks: o } = t;
                  return (0, d.sM)({
                    rules: [
                      (0, d.tG)(
                        /^(\d+)\.\s$/,
                        e.ordered_list,
                        (t) => ({ order: parseInt(t[1]) }),
                        (t, e) =>
                          e.childCount + e.attrs.order == parseInt(t[1]),
                      ),
                      (0, d.tG)(/^\s*([-+*])\s$/, e.bullet_list),
                      (0, m.OX)(/(?<!\w)\*([^*]+)\*/, o.strong),
                      (0, m.OX)(/(?<!\w)_([^_]+)_/, o.italic),
                      (0, m.OX)(/(?<!\w)~([^~]+)~/, o.strike),
                      (0, m.OX)(/(?<!\w)`([^`]+)`/, o.code),
                      (0, d.JJ)(/^```$/, e.code_block),
                      (0, d.JJ)(/^(#{1,5})\s$/, e.heading, (t) => ({
                        level: t[1].length,
                      })),
                      e.horizontal_rule &&
                        ((r = /^(\*\*\*|---|___)$/),
                        (s = e.horizontal_rule),
                        new d.fV(r, (t, e, o, r) =>
                          t.tr.replaceWith(o, r, s.create()),
                        )),
                    ].filter(Boolean),
                  });
                  var r, s;
                })(e),
              [e],
            ),
          ),
          null
        );
      });
      function b(t) {
        const { pmState: e } = i.useContext(g);
        i.useEffect(() => {
          if (e && t) return e.InstallPlugin(t);
        }, [t, e]);
      }
      function v() {
        var t;
        return null === (t = i.useContext(g)) || void 0 === t ? void 0 : t.view;
      }
    },
    55608: (t, e, o) => {
      "use strict";
      o.d(e, { BM: () => l, DQ: () => c, cI: () => d, ce: () => i });
      var r = o(33645),
        s = o.n(r),
        n = o(4188),
        a = o(52038);
      function l(t, e, o = 0) {
        return () => [t, { class: e }, o];
      }
      function i(t, e, o = 0) {
        return [t, { class: e }, o];
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
                  getAttrs: (t) => ({ align: t.style.textAlign || "left" }),
                },
              ],
              toDOM(t) {
                const e = { class: (0, a.A)("pm_paragraph", s().Paragraph) };
                return (
                  t.attrs.align &&
                    "left" != t.attrs.align &&
                    (e.style = `text-align: ${t.attrs.align}`),
                  ["p", e, 0]
                );
              },
              bbCode: {
                tag: "p",
                autocloses: !0,
                BBArgsToAttrs: (t) => ({ align: t.align }),
                AttrsToBBArgs: (t) => {
                  let e = { args: {} };
                  return (
                    t.align && "left" != t.align && (e.args.align = t.align), e
                  );
                },
              },
            },
            heading: {
              attrs: { level: { default: 1 }, align: { default: "left" } },
              content: "inline*",
              group: "block",
              defining: !0,
              parseDOM: [1, 2, 3, 4, 5].map(function (t) {
                return {
                  tag: `h${t}`,
                  getAttrs: (e) => ({
                    level: t,
                    align: e.style.textAlign || "left",
                  }),
                };
              }),
              toDOM(t) {
                const e = {
                  class:
                    `BB_Header${t.attrs.level} ` +
                    s()[`Header${t.attrs.level}`],
                };
                return (
                  t.attrs.align &&
                    "left" != t.attrs.align &&
                    (e.style = `text-align: ${t.attrs.align}`),
                  ["h" + t.attrs.level, e, 0]
                );
              },
              bbCode: [1, 2, 3, 4, 5].map(function (t) {
                return {
                  tag: `h${t}`,
                  BBArgsToAttrs: (e) => ({
                    level: t,
                    align: e.align || "left",
                  }),
                  AttrsToBBArgs: (t) => {
                    let e = { tag: `h${t.level}`, args: {} };
                    return (
                      t.align &&
                        "left" != t.align &&
                        e.args &&
                        (e.args.align = t.align),
                      e
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
              },
              group: "inline",
              draggable: !0,
              parseDOM: [
                {
                  tag: "img[src]",
                  getAttrs: (t) => ({
                    src: t.getAttribute("src"),
                    title: t.getAttribute("title"),
                    alt: t.getAttribute("alt"),
                  }),
                },
              ],
              toDOM(t) {
                const { src: e, alt: o, title: r } = t.attrs;
                return ["img", { src: e, alt: o, title: r, class: s().Image }];
              },
              bbCode: {
                tag: "img",
                BBArgsToAttrs: (t) => ({ src: t.src }),
                AttrsToBBArgs: (t) => ({ args: { src: t.src } }),
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
                    if ("video" !== t.tagName) return;
                    const e = t;
                    let o = "",
                      r = "";
                    for (const t of e.querySelectorAll("source"))
                      "video/mp4" == t.type
                        ? (o = t.src)
                        : "video/webm" == t.type && (r = t.src);
                    return {
                      mp4: o,
                      webm: r,
                      poster: e.poster || "",
                      autoplay: !!e.autoplay,
                      controls: !!e.controls,
                    };
                  },
                },
              ],
              toDOM(t) {
                const {
                    webm: e,
                    mp4: o,
                    poster: r,
                    autoplay: s,
                    controls: n,
                  } = t.attrs,
                  a = [];
                return (
                  e && a.push(["source", { src: e, type: "video/webm" }]),
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
                BBArgsToAttrs: (t) => ({
                  webm: t.webm,
                  mp4: t.mp4,
                  poster: t.poster,
                  autoplay: "true" == t.autoplay,
                  controls: "true" == t.controls,
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
              ...n.fF,
              content: "list_item+",
              group: "block",
              toDOM: l("ul", s().List),
              bbCode: { tag: "list" },
            },
            ordered_list: {
              ...n.o8,
              content: "list_item+",
              group: "block",
              toDOM: l("ol", s().OrderedList),
              bbCode: { tag: "olist" },
            },
            list_item: {
              ...n.Aw,
              content: "paragraph block*",
              toDOM: l("li", s().ListItem),
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
                { class: s().CodeBlock },
                ["code", { class: s().Code }, 0],
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
                  getAttrs: (t) => "normal" != t.style.fontWeight && null,
                },
                {
                  style: "font-weight=400",
                  clearMark: (t) => "strong" == t.type.name,
                },
                {
                  style: "font-weight",
                  getAttrs: (t) => /^(bold(er)?|[5-9]\d{2,})$/.test(t) && null,
                },
              ],
              toDOM: l("b", (0, a.A)("BB_Bold", s().Bold)),
              bbCode: { tag: "b" },
            },
            italic: {
              parseDOM: [
                { tag: "i" },
                { tag: "em" },
                { style: "font-style=italic" },
                {
                  style: "font-style=normal",
                  clearMark: (t) => "em" == t.type.name,
                },
              ],
              toDOM: l("i", (0, a.A)("BB_Italic", s().Italic)),
              bbCode: { tag: "i" },
            },
            underline: {
              parseDOM: [{ tag: "u" }, { style: "text-decoration=underline" }],
              toDOM: l("u", (0, a.A)("BB_Underline", s().Underline)),
              bbCode: { tag: "u" },
            },
            strike: {
              parseDOM: [{ style: "text-decoration=line-through" }],
              toDOM: l("span", (0, a.A)("BB_Strike", s().Strike)),
              bbCode: { tag: "strike" },
            },
            code: {
              parseDOM: [{ tag: "code" }],
              toDOM: l("code", (0, a.A)("BB_Code", s().Code)),
              bbCode: { tag: "c" },
            },
            link: {
              attrs: { href: {}, title: { default: null } },
              inclusive: !1,
              parseDOM: [
                {
                  tag: "a[href]",
                  getAttrs: (t) => ({
                    href: t.getAttribute("href"),
                    title: t.getAttribute("title"),
                  }),
                },
              ],
              toDOM(t) {
                const { href: e, title: o } = t.attrs;
                return ["a", { href: e, title: o, class: "BB_Link" }, 0];
              },
              bbCode: {
                tag: "url",
                BBArgsToAttrs: (t) => ({ href: t[""] }),
                AttrsToBBArgs: (t) => ({ args: { "": t.href } }),
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
              parseDOM: [{ style: "color", getAttrs: (t) => ({ color: t }) }],
              toDOM: (t) => [
                "span",
                {
                  style: `color: ${t.attrs.color}`,
                  class: (0, a.A)("BB_Color", s().Color),
                },
                0,
              ],
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
              parseDOM: [{ style: "bgcolor", getAttrs: (t) => ({ color: t }) }],
              toDOM: (t) => [
                "span",
                {
                  style: `background-color: ${t.attrs.color}`,
                  class: (0, a.A)("BB_BGColor", s().BGColor),
                },
                0,
              ],
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
    90286: (t, e, o) => {
      "use strict";
      o.d(e, { n: () => b, u: () => v });
      var r = o(91986),
        s = o(64753),
        n = o(98724),
        a = o(52893),
        l = o(95742),
        i = o(57053),
        c = o(81393);
      class d {
        constructor(t, e, o) {
          var r;
          (this.m_nodes = []),
            (this.m_schema = t),
            (this.m_bConvertNewlinesToBR =
              null !== (r = null == e ? void 0 : e.bConvertNewlinesToBR) &&
              void 0 !== r &&
              r);
          const s = o && "mark" in o;
          this.m_fnProcessText = s || null == e ? void 0 : e.fnProcessText;
        }
        AppendText(t, e) {
          t.length &&
            (this.m_bConvertNewlinesToBR
              ? this.m_nodes.push(...this.GenerateBreaksForNewlines(t))
              : this.m_nodes.push(...this.TextNode(t)));
        }
        AppendNode(t) {
          this.m_nodes.push(t);
        }
        GetElements() {
          return this.m_nodes;
        }
        GenerateBreaksForNewlines(t) {
          const e = [];
          let o = 0;
          for (let r = t.indexOf("\n", o); -1 !== r; r = t.indexOf("\n", o))
            o != r && e.push(...this.TextNode(t.substring(o, r))),
              e.push(this.m_schema.nodes.hard_break.createChecked()),
              (o = r + 1);
          return o < t.length && e.push(...this.TextNode(t.substring(o))), e;
        }
        TextNode(t) {
          const e = this.m_fnProcessText && this.m_fnProcessText(t);
          return e || [this.m_schema.text(t)];
        }
      }
      class u extends l.Al {
        constructor(t, e) {
          super(t.bbcode_dictionary, (o) => {
            const r =
              (null == o ? void 0 : o.tag) && t.bbcode_dictionary.get(o.tag);
            return new d(
              t.pm_schema,
              e,
              r && "Constructor" in r ? r.Constructor : void 0,
            );
          }),
            (this.m_mapPMBBNodes = new Map()),
            (this.m_schemaConfig = t),
            this.m_schemaConfig.bbcode_dictionary.forEach((t) => {
              "node" in t.Constructor &&
                this.m_mapPMBBNodes.set(t.Constructor.node.name, t.Constructor);
            });
        }
        get schema() {
          return this.m_schemaConfig.pm_schema;
        }
        ParseBBCode(t) {
          const e = this.Parse(t, this.BBNodeToPMNode.bind(this), !0);
          return this.m_schemaConfig.pm_schema.topNodeType.createChecked(
            {},
            this.ConvertLineBreaksToParagraphs(i.FK.fromArray(e)),
          );
        }
        TryCreateNode(t, e, o) {
          let r,
            s = i.FK.from(e);
          if (
            !t.node.validContent(s) &&
            (t.node.isInline ||
              (s = i.FK.from(
                e.filter(
                  (e) =>
                    (!e.isText || !e.text.match(/^\s*$/)) &&
                    !(
                      e.type == this.schema.nodes.hard_break &&
                      !t.node.validContent(i.FK.from(e))
                    ),
                ),
              )),
            !t.node.validContent(s))
          ) {
            const e = t.acceptNode;
            r = [];
            let o = [],
              n = !1,
              a = !1;
            for (let l = 0; l < s.childCount; l++) {
              const c = s.child(l),
                d = i.FK.from(c),
                u = t.node.validContent(d);
              a || (!u && !(null == e ? void 0 : e.validContent(d)))
                ? ((a = !0), r.push(c))
                : (u || (n = !0), o.push(c));
            }
            if ((console.assert(!n || e), n && e)) {
              e.isBlock &&
                o.length > 1 &&
                o[o.length - 1].type == this.schema.nodes.hard_break &&
                (o = o.slice(0, -1));
              const n = this.m_mapPMBBNodes.get(e.name);
              let a;
              (0, c.wT)(
                n,
                `Indicated acceptNode type ${e.name} for ${t.node.name} missing`,
              );
              try {
                a = n
                  ? this.TryCreateNode(n, o, void 0)
                  : e.createChecked(void 0, o);
              } catch (t) {
                console.error(t), (a = []), (r = [...o, ...r]);
              }
              s = i.FK.from(a);
            } else s = i.FK.from(o);
          }
          try {
            const e = t.node.createAndFill(o, s) || t.node.createChecked(o, s);
            return r ? [e, ...r] : e;
          } catch (o) {
            return (
              (0, c.wT)(
                !1,
                `Invalid content for node type ${t.node.name}, removing and promoting children.`,
              ),
              e
            );
          }
        }
        BBNodeToPMNode(t, e, ...o) {
          let r = t.BBArgsToAttrs ? t.BBArgsToAttrs(e.args || {}) : void 0;
          try {
            if (
              ("convertContentToAttr" in t &&
                t.convertContentToAttr &&
                ((r && r[t.convertContentToAttr]) ||
                  (r = {
                    ...(r || {}),
                    [t.convertContentToAttr]:
                      ((s = o),
                      s
                        .filter((t) => t.isText)
                        .map((t) => t.text)
                        .join()),
                  }),
                "node" in t && (o = [])),
              "node" in t)
            )
              return this.TryCreateNode(t, o, r);
            {
              const e = t.mark.create(r);
              return o.map((t) => this.RecursivelyApplyMark(t, e));
            }
          } catch (t) {
            return (
              console.error(`Error parsing [${e.tagname}] tag: ${t}`, t), []
            );
          }
          var s;
        }
        RecursivelyApplyMark(t, e) {
          if (t.isText || t.type.allowsMarkType(e.type))
            return t.mark([...t.marks, e]);
          {
            const o = [];
            return (
              t.descendants(
                (t) => (o.push(this.RecursivelyApplyMark(t, e)), !1),
              ),
              t.type.create(t.attrs, o, t.marks)
            );
          }
        }
        ConvertLineBreaksToParagraphs(t) {
          const e = new Map(),
            o = this.m_schemaConfig.pm_schema;
          this.m_mapPMBBNodes.forEach((t) => {
            t.acceptNode && e.set(t.acceptNode.name, t.node);
          });
          const r = [],
            s = {
              nodes: [],
              nodeType: void 0,
              reset() {
                (this.nodes = []), (this.nodeType = void 0);
              },
              accumulate(t, e) {
                return (
                  this.nodeType && t != this.nodeType && this.emit(),
                  (this.nodeType = t),
                  this.nodes.push(e),
                  !0
                );
              },
              emit(t = !1) {
                const e = this.nodeType || (t ? o.nodes.paragraph : void 0);
                e && (r.push(e.createChecked({}, this.nodes)), this.reset());
              },
            };
          return (
            t.forEach((t) => {
              const n = t.type == o.nodes.hard_break,
                a = i.FK.from(t);
              if (n || o.topNodeType.validContent(a)) {
                const e = n && s.nodes.length > 0;
                s.emit(),
                  n
                    ? e || r.push(o.nodes.paragraph.createChecked())
                    : r.push(t);
              } else {
                let r;
                if (
                  ((r = o.nodes.paragraph.validContent(a)
                    ? o.nodes.paragraph
                    : e.get(t.type.name)),
                  r)
                )
                  s.accumulate(r, t);
                else {
                  (0, c.wT)(
                    !1,
                    `Couldn't accept ${t.type.name} at root of document, converting to paragraph`,
                  );
                  const e = (function (t) {
                    let e = "";
                    return (
                      t.descendants((t) => {
                        t.isText && (e += t.text);
                      }),
                      e
                    );
                  })(t);
                  e && s.accumulate(o.nodes.paragraph, o.text(e));
                }
              }
            }),
            (!s.nodes.length && r.length) || s.emit(!0),
            i.FK.from(r)
          );
        }
      }
      function m(t, e) {
        return h(e.pm_schema, e.pm_to_bbcode_config, t, []);
      }
      function h(t, e, o, r) {
        let s = o.marks,
          n = "";
        const a = e.mapNodes.get(o.type),
          { tag: i, args: d } = (function (t, e) {
            if (t && t.AttrsToBBArgs) {
              const { tag: o = t.tag, args: r = {} } = t.AttrsToBBArgs(
                e.attrs,
                e,
              );
              return { tag: o, args: r };
            }
            return { tag: null == t ? void 0 : t.tag, args: {} };
          })(a, o);
        return (
          "emoticon" == i ? (n += ":") : i && (n += (0, l.CS)(i, d)),
          o.content.forEach((o) => {
            ([n, s] = g(e, s, o.marks, n)),
              ([n, s] = (function (t, e, o, r) {
                let s;
                for (const n of o)
                  if (-1 === e.indexOf(n)) {
                    s || (s = e.slice());
                    const o = t.mapMarks.get(n.type);
                    if (((0, c.wT)(o, "mark missing bbtag"), o)) {
                      s.push(n);
                      const { args: t, tag: e } = p(o, n);
                      r += (0, l.CS)(e, t);
                    }
                  }
                return [r, null != s ? s : e];
              })(e, s, o.marks, n)),
              o.type.isText
                ? (n += (0, l.vE)(o.text || ""))
                : o.type == t.nodes.hard_break
                  ? (n += "\n")
                  : (n += h(t, e, o, s));
          }),
          ([n] = g(e, s, r, n)),
          "emoticon" == i ? (n += ":") : i && (n += (0, l.op)(i)),
          n
        );
      }
      function g(t, e, o, r) {
        const s = [];
        for (const t of e) -1 === o.indexOf(t) && s.push(t);
        if (!s.length) return [r, e];
        const n = e.slice();
        for (
          ;
          s.length && ((0, c.wT)(n.length, "no marks left to close"), n.length);
        ) {
          const e = n.pop(),
            o = t.mapMarks.get(e.type),
            { tag: a } = p(o, e);
          r += (0, l.op)(a);
          const i = s.indexOf(e);
          -1 != i && s.splice(i, 1);
        }
        return [r, n];
      }
      function p(t, e) {
        if (t && t.AttrsToBBArgs) {
          const { tag: o = t.tag, args: r = {} } = t.AttrsToBBArgs(e.attrs, e);
          return { tag: o, args: r };
        }
        return { tag: null == t ? void 0 : t.tag, args: {} };
      }
      const f = new a.hs("CProseMirrorState - OnChange");
      class b {
        constructor(t, e, o, s) {
          (this.m_bHasUncomittedChanges = !1),
            (this.m_onStateChangedCallbacks = new r.l());
          const { parser: n } = null != s ? s : {};
          (this.m_schemaConfig = t),
            (this.m_bbcodeParser = new u(t, null != n ? n : {})),
            (this.m_bbcode = e),
            (this.m_fnCommitChanges = o),
            (this.m_state = this.ConstructState());
        }
        CommitChanges() {
          this.m_currentDoc &&
            this.m_bHasUncomittedChanges &&
            ((this.m_bbcode = m(this.m_currentDoc, this.m_schemaConfig)),
            this.m_fnCommitChanges(this.m_bbcode, this.m_currentDoc),
            (this.m_bHasUncomittedChanges = !1));
        }
        BHasUncomittedChanges() {
          return this.m_bHasUncomittedChanges;
        }
        UpdateState(t) {
          var e;
          const o = t(
            (null === (e = this.m_view) || void 0 === e
              ? void 0
              : e.state.tr) || this.m_state.tr,
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
          const t = new a.k_({
              key: f,
              view: (t) => (
                console.assert(!this.m_view),
                (this.m_view = t),
                {
                  update: (t, e) => this.OnStateChange(e, t.state),
                  destroy: () => (this.m_view = void 0),
                }
              ),
            }),
            e = [(0, n.b6)(), t];
          return a.$t.create({
            schema: this.m_schemaConfig.pm_schema,
            doc: this.m_bbcodeParser.ParseBBCode(this.m_bbcode),
            plugins: e,
          });
        }
        InstallPlugin(t) {
          var e;
          const o = this.m_view ? this.m_view.state : this.m_state;
          return (
            o.plugins.includes(t) ||
              ((this.m_state = o.reconfigure({ plugins: [...o.plugins, t] })),
              null === (e = this.m_view) ||
                void 0 === e ||
                e.updateState(this.m_state)),
            () => {
              var e;
              const o = this.m_view ? this.m_view.state : this.m_state;
              (this.m_state = o.reconfigure({
                plugins: o.plugins.filter((e) => e != t),
              })),
                null === (e = this.m_view) ||
                  void 0 === e ||
                  e.updateState(this.m_state);
            }
          );
        }
        OnStateChange(t, e) {
          (this.m_state = e),
            t.doc &&
              t.doc != e.doc &&
              ((this.m_currentDoc = e.doc),
              (this.m_bHasUncomittedChanges = !0),
              this.m_onStateChangedCallbacks.Dispatch(
                this.m_currentDoc,
                t.doc,
              ));
        }
        ReplaceDocument(t) {
          this.m_bbcode != t &&
            this.UpdateState((e) => {
              this.m_bbcode = t;
              const o = this.m_bbcodeParser.ParseBBCode(t);
              return this.m_state.tr
                .replaceWith(0, this.m_state.doc.content.size, o)
                .scrollIntoView();
            });
        }
      }
      function v(t, e) {
        (0, s.hL)(null == t ? void 0 : t.OnStateChangedCallbacks, e);
      }
    },
    37834: (t, e, o) => {
      "use strict";
      o.d(e, {
        Cd: () => n,
        OX: () => d,
        bQ: () => u,
        gj: () => i,
        vn: () => a,
        wt: () => c,
      });
      var r = o(79216),
        s = o(52893);
      function n(t, e) {
        const { from: o, $from: r, to: s, empty: n } = t.selection;
        return n
          ? !!e.isInSet(t.storedMarks || r.marks())
          : t.doc.rangeHasMark(o, s, e);
      }
      function a(t, e, o) {
        var r;
        const { parent: s } = o,
          n = s.childAfter(o.parentOffset),
          a =
            null === (r = n.node) || void 0 === r
              ? void 0
              : r.marks.find((t) => t.type == e);
        if (!a) return;
        let l = o.index() - 1,
          i = o.start() + n.offset;
        for (; l >= 0 && a.isInSet(s.child(l).marks); )
          (i -= s.child(l).nodeSize), (l -= 1);
        let c = o.index() + 1,
          d = o.start() + n.offset + n.node.nodeSize;
        for (; c < s.childCount && a.isInSet(s.child(c).marks); )
          (d += s.child(c).nodeSize), (c += 1);
        return { from: i, to: d, slice: t.doc.slice(i, d), mark: a };
      }
      function l(t, e, o) {
        if (t.type !== e) return !1;
        if (void 0 === o) return !0;
        for (const e in o) if (o[e] !== t.attrs[e]) return !1;
        return !0;
      }
      function i(t, e, o) {
        let { $from: r, to: s } = t.selection;
        for (let t = r.depth; t > 0; t--) {
          if (s > r.end(t)) return !1;
          if (l(r.node(t), e, o)) return !0;
        }
        return !1;
      }
      function c(t, e, o) {
        const { $from: r, to: s } = t.selection;
        for (let t = r.sharedDepth(s); t > 0; t--) {
          const s = r.node(t);
          if (void 0 === o ? s.type === e : s.hasMarkup(e, o))
            return r.before(t);
        }
      }
      function d(t, e, o = {}) {
        return new r.fV(t, (t, r, s, n) => {
          const a = o instanceof Function ? o(r) : o,
            l = t.tr;
          if (r[1]) {
            const t = s + r[0].indexOf(r[1]),
              e = t + r[1].length;
            e < n && l.delete(e, n),
              t > s && l.delete(s, t),
              (n = s + r[1].length);
          }
          return l.addMark(s, n, e.create(a)), l.removeStoredMark(e), l;
        });
      }
      function u(t, e, o) {
        const r = { left: e, top: o },
          n = t.posAtCoords(r);
        if (null == n ? void 0 : n.pos) {
          const e = t.state.doc.resolve(n.pos);
          t.dispatch(t.state.tr.setSelection(s.U3.near(e)));
        }
      }
    },
    9024: (t, e, o) => {
      "use strict";
      o.d(e, { X: () => u, w: () => i });
      var r = o(33645),
        s = o.n(r),
        n = o(38539),
        a = o(55608),
        l = o(52038);
      const i = { NoBorder: "noborder", EqualCells: "equalcells" },
        c = n.of({
          tableGroup: "block",
          cellContent: "paragraph block*",
          cellAttributes: {
            class: {
              default: s().TableCell,
              setDOMAttr: (t, e) => {
                e.class = t;
              },
            },
          },
        }),
        d = {
          BBArgsToAttrs: (t) => {
            const e = {};
            return (
              t.colspan && (e.colspan = parseInt(t.colspan)),
              t.rowspan && (e.rowspan = parseInt(t.rowspan)),
              t.colwidth &&
                (e.colwidth = t.colwidth.split(",").map((t) => parseInt(t))),
              e
            );
          },
          AttrsToBBArgs: (t) => {
            const e = {};
            return (
              t.colspan && 1 != t.colspan && (e.colspan = t.colspan.toString()),
              t.rowspan && 1 != t.rowspan && (e.rowspan = t.rowspan.toString()),
              t.colwidth && (e.colwidth = t.colwidth.join(",")),
              { args: e }
            );
          },
        },
        u = {
          table: {
            ...c.table,
            toDOM: (t) =>
              (0, a.ce)(
                "table",
                (0, l.A)(
                  s().Table,
                  t.attrs.noborder && s().NoBorder,
                  t.attrs.equalcells && s().EqualCells,
                ),
                ["tbody", 0],
              ),
            attrs: {
              [i.NoBorder]: { default: !1 },
              [i.EqualCells]: { default: !0 },
            },
            bbCode: {
              tag: "table",
              BBArgsToAttrs: (t) => ({
                noborder: !!t.noborder,
                equalcells: !!t.equalcells,
              }),
              AttrsToBBArgs: (t, e) => {
                const o = {};
                t.noborder && (o.noborder = "1"),
                  t.equalcells && (o.equalcells = "1");
                const r = e.child(0);
                if (r) {
                  let t = [];
                  for (let e = 0; e < r.childCount; e++) {
                    const o = r.child(e).attrs;
                    o.colwidth ? t.push(...o.colwidth) : t.push(void 0);
                  }
                  o.colwidth = t.join(",");
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
    64046: (t, e, o) => {
      "use strict";
      o.d(e, { s: () => m });
      var r = o(7850),
        s = o(90626),
        n = o(61257),
        a = o(68255),
        l = o(4869),
        i = o(32754),
        c = o(61859),
        d = o(57361),
        u = o.n(d);
      function m(t) {
        const { color: e, onChange: o, strTitle: d, disableAlpha: m } = t,
          [h, g] = (0, s.useState)(() => e || "rgba(255, 255, 255, 1)"),
          p = (0, s.useCallback)(async () => {
            if ("EyeDropper" in window)
              try {
                const t = new window.EyeDropper(),
                  e = await t.open(),
                  r = (function (t) {
                    const e = parseInt(t.slice(1), 16);
                    return `rgba(${(e >> 16) & 255}, ${(e >> 8) & 255}, ${255 & e}, 1)`;
                  })(e.sRGBHex);
                g(r), o(r);
              } catch (t) {
                console.warn((0, c.we)("#Sale_EyeDropperFailed"), t);
              }
            else alert((0, c.we)("#Sale_EyeDropperError"));
          }, [o]);
        return (0, r.jsxs)("div", {
          children: [
            Boolean(d) && (0, r.jsx)(a.JU, { children: d }),
            (0, r.jsx)(n.xk, {
              onChange: (t) => {
                const e = (function (t) {
                  return `rgba(${t.rgb.r}, ${t.rgb.g}, ${t.rgb.b}, ${t.rgb.a})`;
                })(t);
                g(e), o(e);
              },
              color: h,
              disableAlpha: m,
              className: u().ColorPickerCtn,
            }),
            (0, r.jsx)("div", {
              className: u().EyeDropperCtn,
              children: (0, r.jsx)(i.Gq, {
                toolTipContent: (0, c.we)("#Sale_BackgroundColorPicker"),
                children: (0, r.jsx)(a.$n, {
                  className: u().EyeDropperBtn,
                  onClick: p,
                  children: (0, r.jsx)(l.O7b, {}),
                }),
              }),
            }),
          ],
        });
      }
    },
    72421: (t, e, o) => {
      "use strict";
      o.d(e, { _: () => l });
      var r = o(7850),
        s = o(90626),
        n = o(68255),
        a = o(738);
      function l(t) {
        const {
            closeModal: e,
            strTitle: o,
            onOK: l,
            strOKText: i,
            onCancel: c,
            strCancelText: d,
            bOKDisabled: u,
            bCancelDisabled: m,
            strClassNameContent: h = "GenericFormDialog",
            children: g,
          } = t,
          p = s.useCallback(() => {
            c && c(), e();
          }, [c, e]),
          f = m ? void 0 : p;
        return (0, r.jsx)(a.x_, {
          onEscKeypress: f,
          children: (0, r.jsxs)(n.U9, {
            onSubmit: l,
            classNameContent: h,
            children: [
              (0, r.jsx)(n.Y9, { children: o }),
              g,
              (0, r.jsx)(n.wi, {
                children: (0, r.jsx)(n.CB, {
                  strOKText: i,
                  bOKDisabled: u,
                  onCancel: f,
                  strCancelText: d,
                  bCancelDisabled: m,
                }),
              }),
            ],
          }),
        });
      }
    },
    60637: (t, e, o) => {
      "use strict";
      o.d(e, { J: () => m });
      var r = o(7850),
        s = o(37834),
        n = o(52893),
        a = o(90626),
        l = o(64046),
        i = o(9154),
        c = o(72421),
        d = o(61859),
        u = o(30470);
      function m(t, e, o) {
        const [n, l] = a.useState(void 0),
          c = a.useCallback(
            (r) => {
              const { state: n, dispatch: a } = r,
                i = n.selection;
              let { from: c, to: d, empty: u } = i;
              const m = e ? t.marks.color : t.marks.bgcolor;
              let h = "",
                g = "";
              const p = u ? i.$from : n.doc.resolve(c),
                f = (0, s.vn)(n, m, p),
                b = !!f;
              b
                ? ((h = f.mark.attrs.color),
                  u
                    ? ((g = f.slice.content.textBetween(
                        0,
                        f.slice.content.size,
                      )),
                      (c = f.from),
                      (d = f.to))
                    : ((c = Math.max(f.from, c)),
                      (d = Math.min(f.to, d)),
                      (g = f.slice.content.textBetween(
                        c - f.from,
                        d - f.from,
                      ))))
                : u || (g = n.doc.cut(c, d).textContent);
              let v = {};
              if (o)
                for (const t in o) {
                  const e = o[t],
                    r = f ? e.fnReadValue(f.mark) : e.defaultValue;
                  v[t] = r;
                }
              l({
                view: r,
                strColor: h,
                strTargetText: g,
                bIsUpdate: b,
                addtlAttrs: o,
                addtlAttrsValues: v,
                from: c,
                to: d,
              });
            },
            [o, e, t.marks.bgcolor, t.marks.color],
          ),
          d = null == n ? void 0 : n.view,
          u = a.useCallback(() => {
            window.setTimeout(() => d.focus(), 1), l(void 0);
          }, [d]);
        return [
          c,
          n &&
            (0, r.jsx)(i.EN, {
              active: !0,
              children: (0, r.jsx)(h, {
                schema: t,
                bColor: e,
                closeModal: u,
                ...n,
              }),
            }),
        ];
      }
      const h = a.memo(function (t) {
        const {
            schema: e,
            strColor: o,
            bIsUpdate: s,
            strTargetText: i,
            bColor: m,
            addtlAttrs: h,
            addtlAttrsValues: g,
            closeModal: p,
            view: f,
            from: b,
            to: v,
          } = t,
          [C, _] = a.useState(o),
          k = a.useRef(null),
          [T, B] = a.useState(g),
          w = a.useCallback(() => {
            const { state: t, dispatch: o } = f,
              r = m ? e.marks.color : e.marks.bgcolor;
            if (!r) return void console.log("debug: no markType");
            if (!C || !C.startsWith("#") || 7 !== C.length)
              return void console.log("debug: invalid color text: " + C);
            if (b < 0 || v > t.doc.content.size || b > v)
              return void console.error("Invalid selection range:", b, v);
            let s;
            try {
              if (((s = r.create({ color: C, ...T })), !s))
                return void console.error(
                  "Failed to create mark — mark is null",
                );
            } catch (t) {
              return void console.error("Failed to create color mark:", t);
            }
            let a = t.tr;
            b === v
              ? (a = a.addStoredMark(s))
              : ((a = a.removeMark(b, v, r)),
                (a = a.addMark(b, v, s)),
                (a = a.setSelection(n.U3.create(a.doc, v)))),
              "dev" == u.TS.WEB_UNIVERSE &&
                console.log(
                  "Dispatching transaction:",
                  a.steps.map((t) => t.toJSON()),
                  v,
                  b,
                );
            try {
              (a.docChanged || a.steps.length > 0) && o(a);
            } catch (t) {
              console.error(t);
            } finally {
              requestAnimationFrame(() => p());
            }
          }, [T, m, p, C, b, e.marks.bgcolor, e.marks.color, v, f]);
        a.useLayoutEffect(() => {
          var t, e, o;
          (
            null ===
              (e =
                null === (t = k.current) || void 0 === t ? void 0 : t.value) ||
            void 0 === e
              ? void 0
              : e.length
          )
            ? k.current.focus()
            : null === (o = k.current) || void 0 === o || o.focus();
        }, []);
        const x = (0, d.we)(
            m ? "#FormattingToolbar_Color" : "#FormattingToolbar_BgColor",
          ),
          y = s
            ? (0, d.we)("#Button_Save")
            : (0, d.we)(
                m ? "#FormattingToolbar_Color" : "#FormattingToolbar_BgColor",
              );
        return (0, r.jsx)(c._, {
          onOK: w,
          closeModal: p,
          strTitle: x,
          strOKText: y,
          bOKDisabled: !C || 0 == C.length,
          children: (0, r.jsx)(l.s, {
            color: C,
            strTitle: x,
            disableAlpha: !0,
            onChange: (t) =>
              _(
                (function (t) {
                  const e = t.match(
                    /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)$/i,
                  );
                  if (e) {
                    let [, t, o, r, s] = e;
                    return `#${((1 << 24) + (parseInt(t, 10) << 16) + (parseInt(o, 10) << 8) + parseInt(r, 10)).toString(16).slice(1)}`;
                  }
                  return "#7e3232";
                })(t),
              ),
          }),
        });
      });
    },
    17558: (t, e, o) => {
      "use strict";
      o.d(e, { E: () => m });
      var r = o(7850),
        s = o(37834),
        n = o(52893),
        a = o(90626),
        l = o(68255),
        i = o(9154),
        c = o(72421),
        d = o(61859),
        u = o(30470);
      function m(t, e) {
        const [o, n] = a.useState(void 0),
          l = a.useCallback(
            (o) => {
              const r = o.state.selection;
              let a = "",
                l = "",
                { from: i, to: c } = r;
              const d = (0, s.vn)(o.state, t.marks.link, r.$from),
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
              let m = {};
              if (e)
                for (const t in e) {
                  const o = e[t],
                    r = d ? o.fnReadValue(d.mark) : o.defaultValue;
                  m[t] = r;
                }
              n({
                view: o,
                strLinkText: a,
                strLinkHref: l,
                bIsUpdate: u,
                addtlAttrs: e,
                addtlAttrsValues: m,
                from: i,
                to: c,
              });
            },
            [t.marks.link, e],
          ),
          c = null == o ? void 0 : o.view,
          d = a.useCallback(() => {
            window.setTimeout(() => c.focus(), 1), n(void 0);
          }, [c]);
        return [
          l,
          o &&
            (0, r.jsx)(i.EN, {
              active: !0,
              children: (0, r.jsx)(h, { schema: t, closeModal: d, ...o }),
            }),
        ];
      }
      const h = a.memo(function (t) {
        const {
            schema: e,
            strLinkText: o,
            strLinkHref: s,
            bIsUpdate: i,
            addtlAttrs: m,
            addtlAttrsValues: h,
            closeModal: p,
            view: f,
            from: b,
            to: v,
          } = t,
          [C, _] = a.useState(o),
          [k, T] = a.useState(s),
          B = a.useRef(null),
          w = a.useRef(null),
          [x, y] = a.useState(h);
        a.useLayoutEffect(() => {
          var t, e, o, r, s;
          (
            null ===
              (e =
                null === (t = B.current) || void 0 === t ? void 0 : t.value) ||
            void 0 === e
              ? void 0
              : e.length
          )
            ? (
                null ===
                  (r =
                    null === (o = w.current) || void 0 === o
                      ? void 0
                      : o.value) || void 0 === r
                  ? void 0
                  : r.length
              )
              ? (B.current.Focus(), B.current.element.select())
              : w.current.Focus()
            : null === (s = B.current) || void 0 === s || s.Focus();
        }, []);
        const A = i
            ? (0, d.we)("#FormattingToolbar_EditLink")
            : (0, d.we)("#FormattingToolbar_InsertLink"),
          S = i
            ? (0, d.we)("#Button_Save")
            : (0, d.we)("#FormattingToolbar_InsertLink");
        return (0, r.jsxs)(c._, {
          onOK: () => {
            var t, o, r, s, a;
            let l = f.state.tr;
            if (
              !(
                "dev" != u.TS.WEB_UNIVERSE ||
                (f &&
                  null != b &&
                  null != v &&
                  (null === (t = null == e ? void 0 : e.marks) || void 0 === t
                    ? void 0
                    : t.link))
              )
            )
              return void console.warn("Missing required data in insertLink", {
                view: f,
                from: b,
                to: v,
                schema: e,
              });
            const i = { href: k };
            for (const t in x) i[t] = x[t];
            const c =
              null === (o = e.marks.link) || void 0 === o
                ? void 0
                : o.create(i);
            if ("dev" == u.TS.WEB_UNIVERSE && !c)
              return void console.error(
                "Failed to create link mark with attrs",
                i,
              );
            const d = e.text(C || k, [c]);
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
              (l = l.replaceRangeWith(b, v, d)),
                (l = l.setSelection(
                  n.U3.create(l.doc, b + d.nodeSize, b + d.nodeSize),
                )),
                f.dispatch(l);
            } catch (t) {
              console.error("Error during link insertion", t);
            }
            p();
          },
          closeModal: p,
          strTitle: A,
          strOKText: S,
          bOKDisabled: 0 == k.length,
          children: [
            (0, r.jsx)(l.pd, {
              ref: B,
              value: C,
              onChange: (t) => _(t.currentTarget.value),
              label: (0, d.we)("#FormattingToolbar_LinkText"),
            }),
            (0, r.jsx)(l.pd, {
              ref: w,
              value: k,
              placeholder: "https://",
              onChange: (t) => T(t.currentTarget.value),
              label: (0, d.we)("#FormattingToolbar_LinkAddress"),
              mustBeURL: !0,
            }),
            m && (0, r.jsx)(g, { addtlAttrs: m, values: x, setValues: y }),
          ],
        });
      });
      function g(t) {
        const { addtlAttrs: e, values: o, setValues: s } = t;
        return (0, r.jsx)(r.Fragment, {
          children: Object.keys(e).map((t) =>
            (0, r.jsx)(
              p,
              {
                attrName: t,
                fnRender: e[t].fnRenderEditor,
                value: o[t],
                setValues: s,
              },
              t,
            ),
          ),
        });
      }
      const p = a.memo(function (t) {
        const { attrName: e, fnRender: o, value: r, setValues: s } = t;
        return o(
          r,
          a.useCallback((t) => s((o) => ({ ...o, [e]: t })), [e, s]),
        );
      });
    },
    1805: (t, e, o) => {
      "use strict";
      o.d(e, { l: () => w });
      var r = o(7850),
        s = o(76217),
        n = o(63512),
        a = o(73170),
        l = o(29287),
        i = o(22145),
        c = o(37834),
        d = o(52893),
        u = o(57053),
        m = o(90626),
        h = o(84811),
        g = o(33645),
        p = o.n(g),
        f = o(38539),
        b = o(9024),
        v = o(52038);
      const C = m.memo(function (t) {
        const { schema: e } = t,
          o = !(!("table" in e.nodes) || !e.nodes.table.spec.tableRole);
        return (
          (0, i.c$)(m.useMemo(() => o && f.AL({ View: _ }), [o])),
          (0, i.c$)(m.useMemo(() => o && f.LF(), [o])),
          null
        );
      });
      class _ extends f.Qg {
        constructor(t, e) {
          super(t, e), this.SetTableClass(t);
        }
        update(t) {
          return !!super.update(t) && (this.SetTableClass(t), !0);
        }
        SetTableClass(t) {
          this.table.className = (0, v.A)(
            p().Table,
            t.attrs[b.w.NoBorder] && p().NoBorder,
            t.attrs[b.w.EqualCells] && p().EqualCells,
          );
        }
      }
      var k = o(61859),
        T = o(73745),
        B = o(73309);
      const w = (0, h.Nr)(function (t) {
        const {
            pmState: e,
            className: o,
            refOnUpdate: d,
            refView: u,
            bSpellcheckEnabled: h = !0,
            bSingleLine: g,
            panelProps: p,
            children: f,
          } = t,
          [b, _] = m.useState(),
          [w, y] = m.useState();
        m.useEffect(() => {
          e && b && y(new l.Lz(b, { state: e.state }));
        }, [e, b]),
          m.useEffect(() => () => (null == w ? void 0 : w.destroy()), [w]),
          (0, T.D5)(u, w);
        const {
            refDiv: A,
            onActivate: S,
            onGamepadDirection: M,
          } = (function (t) {
            const e = m.useRef(void 0),
              o = (0, a.FN)(),
              r = m.useCallback(() => {
                if (
                  (o.ShowVirtualKeyboard(),
                  !(null == t ? void 0 : t.hasFocus()))
                ) {
                  t.focus();
                  let o = t.dom.childNodes;
                  for (let r = 0; r < o.length; ++r) {
                    let s = o[r],
                      n = s.offsetTop;
                    if (void 0 !== n && n >= e.current.scrollTop) {
                      let e = s.getBoundingClientRect();
                      (0, c.bQ)(t, e.left, e.top);
                      break;
                    }
                  }
                }
              }, [o, t]),
              s = m.useCallback((t) => t.currentTarget == t.target, []),
              l = (0, n.ak)(e, null, null, s);
            return { refDiv: e, onActivate: r, onGamepadDirection: l };
          })(w),
          j = (0, T.Ue)(A, _);
        if (!e) return null;
        const { schemaConfig: F, bbcodeParser: O } = e;
        return (0, r.jsxs)(i.Ot, {
          view: w,
          pmState: e,
          children: [
            (0, r.jsx)(
              s.Z,
              {
                className: (0, v.A)({
                  ["" + o]: !!o,
                  [B.Container]: !0,
                  [B.SingleLine]: !!g,
                }),
                ref: j,
                spellCheck: h,
                focusable: !0,
                onActivate: S,
                onOKActionDescription: (0, k.we)("#UserGameNotes_Edit"),
                onGamepadDirection: M,
                ...p,
              },
              `editordiv_${h}`,
            ),
            (0, r.jsx)(i.KF, {
              refOnUpdate: d,
              schema: F.pm_schema,
              bSingleLine: g,
            }),
            (0, r.jsx)(x, { parser: O, schema: F.pm_schema }),
            (0, r.jsx)(C, { schema: F.pm_schema }),
            f,
          ],
        });
      });
      const x = m.memo(function (t) {
        const { parser: e, schema: o } = t;
        return (
          (0, i.c$)(
            m.useMemo(
              () =>
                new d.k_({
                  props: {
                    transformPasted: (t, r) =>
                      (function (t, e, o) {
                        let r = !1;
                        if (
                          (o.content.forEach((t) => {
                            t.type == e && (r = !0);
                          }),
                          !r)
                        )
                          return o;
                        const s = t.ConvertLineBreaksToParagraphs(o.content);
                        return u.Ji.maxOpen(s);
                      })(e, o.nodes.hard_break, t),
                  },
                }),
              [e, o],
            ),
          ),
          null
        );
      });
    },
    36969: (t, e, o) => {
      "use strict";
      o.d(e, {
        Km: () => b,
        WJ: () => C,
        z9: () => T,
        C$: () => _,
        Hz: () => v,
        Nt: () => B,
        MV: () => f,
      });
      var r = o(7850),
        s = o(98724),
        n = o(4188),
        a = o(37834),
        l = o(90626),
        i = o(4869),
        c = o(17558),
        d = o(30175),
        u = o(73745);
      function m(t) {
        const { schema: e, addtlAttrs: o, children: s } = t,
          { callbacks: n, view: i } = (0, d.wU)(),
          [m, h] = l.useState(() => (0, a.Cd)(i.state, e.marks.link)),
          g = l.useCallback((t) => h((0, a.Cd)(t.state, e.marks.link)), [e]);
        (0, u.hL)(n, g);
        const [p, f] = (0, c.E)(e, o);
        return (0, r.jsxs)(r.Fragment, {
          children: [
            f,
            (0, r.jsx)(d.ff, {
              onClick: () => p(i),
              toggled: m,
              tooltip: "#FormattingToolbar_InsertLink",
              keyboardShortcut: "Mod-k",
              children: s,
            }),
          ],
        });
      }
      var h = o(30470),
        g = o(60637);
      function p(t) {
        const { schema: e, bColor: o, addtlAttrs: s, children: n } = t,
          { callbacks: i, view: c } = (0, d.wU)(),
          [m, h] = l.useState(() =>
            (0, a.Cd)(c.state, o ? e.marks.color : e.marks.bgcolor),
          ),
          p = l.useCallback(
            (t) => h((0, a.Cd)(t.state, o ? e.marks.color : e.marks.bgcolor)),
            [o, e],
          );
        (0, u.hL)(i, p);
        const [f, b] = (0, g.J)(e, o, s);
        return (0, r.jsxs)(r.Fragment, {
          children: [
            b,
            (0, r.jsx)(d.ff, {
              onClick: () => f(c),
              toggled: m,
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
              children: (0, r.jsx)(i.VnB, {}),
            }),
            (0, r.jsx)(d.cQ, {
              tooltip: "#FormattingToolbar_Redo",
              keyboardShortcut:
                "macos" == h.TS.PLATFORM ? "Mod-Shift-z" : "Mod-y",
              command: s.ZS,
              children: (0, r.jsx)(i.Bal, {}),
            }),
          ],
        });
      }
      function b(t) {
        const { schema: e } = t;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(d.GY, {
              tooltip: "#FormattingToolbar_Bold",
              keyboardShortcut: "Mod-b",
              mark: e.marks.strong,
              children: (0, r.jsx)(i.l4n, {}),
            }),
            (0, r.jsx)(d.GY, {
              tooltip: "#FormattingToolbar_Italic",
              keyboardShortcut: "Mod-i",
              mark: e.marks.italic,
              children: (0, r.jsx)(i.UKJ, {}),
            }),
            (0, r.jsx)(d.GY, {
              tooltip: "#FormattingToolbar_Underline",
              keyboardShortcut: "Mod-u",
              mark: e.marks.underline,
              children: (0, r.jsx)(i.Gj3, {}),
            }),
            "strike" in e.marks &&
              (0, r.jsx)(d.GY, {
                tooltip: "#FormattingToolbar_Strike",
                keyboardShortcut: "Mod-Shift-x",
                mark: e.marks.strike,
                children: (0, r.jsx)(i.tI4, {}),
              }),
            "code" in e.marks &&
              (0, r.jsx)(d.GY, {
                tooltip: "#FormattingToolbar_InlineCode",
                keyboardShortcut: "Ctrl-Shift-c",
                mark: e.marks.code,
                children: (0, r.jsx)(i.bmT, {}),
              }),
            "color" in e.marks &&
              (0, r.jsx)(p, {
                schema: e,
                bColor: !0,
                children: (0, r.jsx)(i.r7n, {}),
              }),
            "bgcolor" in e.marks &&
              (0, r.jsx)(p, {
                schema: e,
                bColor: !1,
                children: (0, r.jsx)(i.FId, {}),
              }),
          ],
        });
      }
      function v(t) {
        const { schema: e } = t;
        return (0, r.jsx)(d.u3, {
          tooltip: "#FormattingToolbar_Paragraph",
          keyboardShortcut: "Ctrl-Shift-0",
          nodeType: e.nodes.paragraph,
          children: (0, r.jsx)(i.iYj, {}),
        });
      }
      function C(t) {
        const { schema: e, maxLevel: o = 1, levels: s } = t,
          n = o + s - 1;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            o <= 1 &&
              (0, r.jsx)(d.u3, {
                tooltip: "#FormattingToolbar_HeadingLevel1",
                keyboardShortcut: "Ctrl-Shift-1",
                nodeType: e.nodes.heading,
                attrs: { level: 1 },
                children: (0, r.jsx)(i.jRw, {}),
              }),
            o <= 2 &&
              n >= 2 &&
              (0, r.jsx)(d.u3, {
                tooltip: "#FormattingToolbar_HeadingLevel2",
                keyboardShortcut: "Ctrl-Shift-2",
                nodeType: e.nodes.heading,
                attrs: { level: 2 },
                children: (0, r.jsx)(i.qOW, {}),
              }),
            o <= 3 &&
              n >= 3 &&
              (0, r.jsx)(d.u3, {
                tooltip: "#FormattingToolbar_HeadingLevel3",
                keyboardShortcut: "Ctrl-Shift-3",
                nodeType: e.nodes.heading,
                attrs: { level: 3 },
                children: (0, r.jsx)(i.x7X, {}),
              }),
            o <= 4 &&
              n >= 4 &&
              (0, r.jsx)(d.u3, {
                tooltip: "#FormattingToolbar_HeadingLevel4",
                keyboardShortcut: "Ctrl-Shift-4",
                nodeType: e.nodes.heading,
                attrs: { level: 4 },
                children: (0, r.jsx)(i.qzO, {}),
              }),
            o <= 5 &&
              n >= 5 &&
              (0, r.jsx)(d.u3, {
                tooltip: "#FormattingToolbar_HeadingLevel5",
                keyboardShortcut: "Ctrl-Shift-5",
                nodeType: e.nodes.heading,
                attrs: { level: 5 },
                children: (0, r.jsx)(i.jXA, {}),
              }),
          ],
        });
      }
      function _(t) {
        const { schema: e, showIndentButtonsAsNeeded: o = !1 } = t,
          { callbacks: s, view: a } = (0, d.wU)(),
          { bullet_list: c, ordered_list: m, list_item: h } = e.nodes,
          g = l.useMemo(() => n.T2(h), [h]),
          p = l.useMemo(() => n.$B(h), [h]),
          [f, b] = l.useState(() => g(a.state) || p(a.state));
        return (
          (0, u.hL)(
            s,
            l.useCallback(
              (t) => {
                b(g(t.state) || p(t.state));
              },
              [g, p],
            ),
          ),
          (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(k, {
                tooltip: "#FormattingToolbar_BulletedList",
                keyboardShortcut: "Ctrl-Shift-8",
                list_type: c,
                list_item: h,
                children: (0, r.jsx)(i.JPq, {}),
              }),
              m &&
                (0, r.jsx)(k, {
                  tooltip: "#FormattingToolbar_OrderedList",
                  keyboardShortcut: "Ctrl-Shift-7",
                  list_type: m,
                  list_item: h,
                  children: (0, r.jsx)(i.jE0, {}),
                }),
              (!o || f) &&
                (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)(d.cQ, {
                      tooltip: "#FormattingToolbar_OutdentList",
                      keyboardShortcut: "Mod-[",
                      command: g,
                      children: (0, r.jsx)(i.LSz, {}),
                    }),
                    (0, r.jsx)(d.cQ, {
                      tooltip: "#FormattingToolbar_IndentList",
                      keyboardShortcut: "Mod-[",
                      command: p,
                      children: (0, r.jsx)(i.ycU, {}),
                    }),
                  ],
                }),
            ],
          })
        );
      }
      function k(t) {
        const { list_type: e, list_item: o, children: s, ...i } = t,
          { callbacks: c, view: m } = (0, d.wU)(),
          h = l.useCallback((t) => void 0 !== (0, a.wt)(t.state, e), [e]),
          [g, p] = l.useState(() => h(m)),
          f = l.useMemo(() => n.Sd(e), [e]),
          b = l.useMemo(() => n.T2(o), [o]);
        return (
          (0, u.hL)(
            c,
            l.useCallback(
              (t) => {
                p(h(t));
              },
              [h],
            ),
          ),
          (0, r.jsx)(d.cQ, {
            ...i,
            toggled: g,
            command: g ? b : f,
            children: s,
          })
        );
      }
      function T(t) {
        const { schema: e, addtlAttrs: o } = t;
        return (0, r.jsx)(m, {
          schema: e,
          addtlAttrs: o,
          children: (0, r.jsx)(i.YqK, {}),
        });
      }
      function B(t) {
        const { bSpellcheckEnabled: e, setSpellcheckEnabled: o } = t;
        return (0, r.jsx)(d.ff, {
          tooltip: e
            ? "#FormattingToolbar_DisableSpellcheck"
            : "#FormattingToolbar_EnableSpellcheck",
          toggled: e,
          onClick: () => o(!e),
          children: (0, r.jsx)(i.DEV, {}),
        });
      }
    },
    30175: (t, e, o) => {
      "use strict";
      o.d(e, {
        Ez: () => k,
        GY: () => B,
        XQ: () => C,
        bI: () => b,
        cQ: () => w,
        ff: () => x,
        hK: () => _,
        u3: () => T,
        wU: () => f,
      });
      var r = o(7850),
        s = o(76217),
        n = o(37834),
        a = o(12362),
        l = o(90626),
        i = o(68255),
        c = o(32754),
        d = o(6144),
        u = o(52038),
        m = o(61859),
        h = o(73745),
        g = o(30470),
        p = o(73309);
      const f = () => l.useContext(v);
      function b(t) {
        const { view: e, refUpdateToolbar: o, children: s } = t,
          n = l.useRef(void 0);
        n.current || (n.current = new d.lu()),
          l.useEffect(
            () => (
              (0, h.cZ)(o, () => n.current.Dispatch(e)),
              () => (0, h.cZ)(o, void 0)
            ),
            [e, o],
          );
        const a = l.useMemo(() => ({ callbacks: n.current, view: e }), [e]);
        return e ? (0, r.jsx)(v.Provider, { value: a, children: s }) : null;
      }
      const v = l.createContext(void 0);
      function C() {
        return (0, r.jsx)("div", { className: p.Gap });
      }
      function _() {
        return (0, r.jsx)("div", { className: p.Spacer });
      }
      function k(t) {
        return (0, r.jsx)("div", {
          className: (0, u.A)(t.className, p.ToolbarRowOverflowContainer),
          children: (0, r.jsx)(s.Z, {
            className: p.ToolbarRow,
            "flow-children": "row",
            children: t.children,
          }),
        });
      }
      function T(t) {
        const { nodeType: e, attrs: o, children: s, ...i } = t,
          { callbacks: c, view: d } = f(),
          [u, m] = l.useState(() => (0, n.gj)(d.state, e, o)),
          g = l.useCallback((t) => m((0, n.gj)(t.state, e, o)), [e, o]);
        (0, h.hL)(c, g);
        const p = l.useMemo(() => a.y_(e, o), [o, e]);
        return (0, r.jsx)(w, { ...i, command: p, toggled: u, children: s });
      }
      function B(t) {
        const { mark: e, children: o, ...s } = t,
          { callbacks: i, view: c } = f(),
          [d, u] = l.useState(() => (0, n.Cd)(c.state, e)),
          m = l.useCallback((t) => u((0, n.Cd)(t.state, e)), [e]);
        (0, h.hL)(i, m);
        const g = l.useMemo(() => a.wh(e), [e]);
        return (0, r.jsx)(w, { ...s, command: g, toggled: d, children: o });
      }
      function w(t) {
        const { command: e, toggled: o, children: s, ...n } = t,
          { view: a, callbacks: c } = f(),
          [d, m] = l.useState(() => e(a.state));
        (0, h.hL)(
          c,
          l.useCallback((t) => m(e(t.state)), [e]),
        ),
          l.useEffect(() => m(e(a.state)), [e, a]);
        const g = !d && !o;
        return (0, r.jsx)(y, {
          ...n,
          children: (0, r.jsx)(i.$n, {
            className: (0, u.A)(p.CommandButton, o && p.Toggled),
            onMouseDown: (t) => {
              t.preventDefault(), e(a.state, a.dispatch, a);
            },
            disabled: g,
            focusable: !g,
            children: s,
          }),
        });
      }
      function x(t) {
        const {
          onClick: e,
          toggled: o,
          disabled: s,
          children: n,
          className: a,
          ...l
        } = t;
        return (0, r.jsx)(y, {
          ...l,
          children: (0, r.jsx)(i.$n, {
            className: (0, u.A)(p.CommandButton, o && p.Toggled, a),
            onMouseDown: (t) => {
              0 === t.button && (t.preventDefault(), e(t));
            },
            disabled: !0 === s,
            children: n,
          }),
        });
      }
      function y(t) {
        const { tooltip: e, keyboardShortcut: o, children: s } = t;
        if (!e) return s;
        const n = o ? (0, r.jsx)(A, { tooltip: e, keyboardShortcut: o }) : e;
        return (0, r.jsx)(c.Gq, {
          toolTipContent: n,
          direction: "bottom",
          children: s,
        });
      }
      function A(t) {
        const { tooltip: e, keyboardShortcut: o } = t;
        return (0, r.jsxs)("div", {
          className: p.TooltipWithShortcut,
          children: [
            (0, r.jsx)("div", {
              children: "string" == typeof e ? (0, m.we)(e) : e,
            }),
            (0, r.jsx)("div", {
              children: (0, r.jsx)(S, { keyboardShortcut: o }),
            }),
          ],
        });
      }
      function S(t) {
        const { keyboardShortcut: e } = t,
          o = e.split("-"),
          s = o.pop();
        return (0, r.jsxs)(r.Fragment, {
          children: [
            o.map((t, e) =>
              (0, r.jsxs)(
                l.Fragment,
                {
                  children: [
                    (0, r.jsx)(M, { children: (0, r.jsx)(j, { modifier: t }) }),
                    " + ",
                  ],
                },
                e,
              ),
            ),
            (0, r.jsx)(M, { children: s.toUpperCase() }),
          ],
        });
      }
      function M(t) {
        return (0, r.jsx)("span", {
          className: p.KeyCap,
          children: t.children,
        });
      }
      function j(t) {
        const { modifier: e } = t;
        switch (e) {
          case "Mod":
            return "macos" == g.TS.PLATFORM ? "⌘" : "Ctrl";
          case "Shift":
            return g.TS.PLATFORM, "Shift";
          case "Ctrl":
            return "macos" == g.TS.PLATFORM ? "Control" : "Ctrl";
          case "Alt":
            return "macos" == g.TS.PLATFORM ? "Option" : "Alt";
        }
        return null;
      }
    },
  },
]);
