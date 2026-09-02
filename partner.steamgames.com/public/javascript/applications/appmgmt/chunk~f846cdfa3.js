/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [4017],
    {
      82791: (B, K, s) => {
        "use strict";
        s.d(K, { Y: () => m });
        var e = s(7850),
          d = s(90626),
          l = s(76846),
          o = s(40139),
          t = s.n(o);
        function m(b) {
          const { rgGameProfileColorDefs: N } = b,
            A = N.map((S) =>
              (0, e.jsxs)(
                "div",
                {
                  className: "form_row_flex",
                  children: [
                    (0, e.jsxs)("div", {
                      className: "form_label_flex",
                      children: ["*", S.strProfileColorLabel],
                    }),
                    (0, e.jsx)("div", {
                      className: "form_data_flex",
                      children: G(S),
                    }),
                  ],
                },
                S.strProfileColorKey,
              ),
            );
          return (0, e.jsx)("div", {
            className: t().profile_colors_ctn,
            children: A,
          });
        }
        function Y(b) {
          const N = b.match(/rgba?\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/i);
          if (!N) return null;
          const [, A, S, f] = N;
          return `${A},${S},${f}`;
        }
        function G(b) {
          const { strKVPrepend: N, bWriteAsRGBOnly: A } = b;
          let [S, f] = d.useState(b.strCurrentColor);
          const w = d.useRef(void 0),
            { openColorPicker: v } = (0, l.p)(),
            T = (F) => {
              v(F, { color: S, onChange: f, disableAlpha: A });
            },
            $ = () => {
              f(w.current.value);
            };
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("input", {
                ref: w,
                type: "text",
                name: `${N || "item[profile_colors]"}[${b.strProfileColorKey}]`,
                onChange: $,
                placeholder: A ? "255,255,255" : "rgba(255, 255, 255, .5)",
                size: 20,
                value: A ? Y(S) : S,
                readOnly: !0,
              }),
              (0, e.jsx)("div", {
                className: t().profile_color_preview,
                style: { backgroundColor: `${S}` },
                onClick: T,
              }),
            ],
          });
        }
      },
      64916: (B, K, s) => {
        "use strict";
        s.d(K, { H: () => V });
        var e = s(7850),
          d = s(90626),
          l = s(93542),
          o = s.n(l),
          t = s(18210),
          m = s(69168),
          Y = s(90506),
          G = s(36707),
          b = s(51614),
          N = s(41735),
          A = s.n(N),
          S = s(85599),
          f = s(3166),
          w = s(36118);
        const v = 748,
          T = 896;
        function $(c, g) {
          return (0, b.n)({
            mutationFn: async (p) => {
              const {
                  rgEditionsToSave: D,
                  rgGraphicsToDelete: P,
                  mapGraphicsToUpload: y,
                  mapAltText: U,
                } = p,
                E = new FormData();
              E.append("sessionid", (0, f.KC)());
              const L = Math.max(g.length, D.length);
              for (let n = 0; n < L; n++)
                n >= D.length
                  ? (E.append(
                      `app[related_items][editions][${n}][packageid]`,
                      "",
                    ),
                    E.append(
                      `app[related_items][editions][${n}][bundleid]`,
                      "",
                    ))
                  : D[n].packageid
                    ? (E.append(
                        `app[related_items][editions][${n}][packageid]`,
                        "" + D[n].packageid,
                      ),
                      E.append(
                        `app[related_items][editions][${n}][bundleid]`,
                        "",
                      ))
                    : D[n].bundleid
                      ? (E.append(
                          `app[related_items][editions][${n}][packageid]`,
                          "",
                        ),
                        E.append(
                          `app[related_items][editions][${n}][bundleid]`,
                          "" + D[n].bundleid,
                        ))
                      : console.log(
                          "Tried to save an edition with neither packageid or bundleid.",
                        );
              y.forEach((n, x) => {
                E.append(
                  `edition_comparison|edition_comparision|assets|edition_comparison|image|${x}`,
                  n,
                );
              });
              for (const n of P)
                E.append(`app[assets][edition_comparison][image][${n}]`, "");
              U.forEach((n, x) => {
                E.append(
                  `app[assets][edition_comparison][image_alt_text][${x}]`,
                  n,
                );
              });
              const k = `${f.TS.PARTNER_BASE_URL}admin/game/quickupdateajax/${c}`;
              return A().post(k, E);
            },
          });
        }
        class F {
          rgSet = new Set();
          constructor(g) {
            for (const p of g) this.rgSet.add(JSON.stringify(p));
          }
          has(g) {
            const p = JSON.stringify(g);
            return this.rgSet.has(p);
          }
          add(g) {
            const p = JSON.stringify(g);
            return this.rgSet.add(p), this;
          }
          delete(g) {
            const p = JSON.stringify(g);
            return this.rgSet.delete(p);
          }
          get size() {
            return this.rgSet.size;
          }
          *[Symbol.iterator]() {
            for (const g of this.rgSet) yield JSON.parse(g);
          }
        }
        function V(c) {
          const [g, p] = (0, d.useState)("closed"),
            D = c.rgEditions,
            [P, y] = (0, d.useState)(new F(D)),
            U = new Map();
          for (const j of Object.keys(c.rgEditionsComparisonGraphics))
            U.set(j, c.rgEditionsComparisonGraphics[j]);
          const [E, L] = (0, d.useState)(() => {
              const j = new Map();
              for (const i of Object.keys(c.rgEditionsAltText))
                j.set(i, c.rgEditionsAltText[i]);
              return j;
            }),
            [k, n] = (0, d.useState)(U),
            x = Object.keys(c.rgEditionsComparisonGraphics).length > 0,
            R = $(c.nItemId, D),
            M = new Map();
          for (const j of c.rgCandidates) M.set(j.nId, j);
          let O = null;
          if (
            P.size > 0 &&
            c.nBasePackageId !== -1 &&
            !P.has({ packageid: c.nBasePackageId })
          ) {
            const j = c.rgCandidates.find((i) => i.nId === c.nBasePackageId);
            O = (0, t.we)(
              "#StoreAdmin_EditEditions_MustIncludeCheapestBasePageError",
              j?.strName,
              c.nBasePackageId,
            );
          }
          const ne = async () => {
              const j = new Map();
              k.forEach((r, u) => {
                r instanceof File && j.set(u, r);
              });
              const i = [];
              U.forEach((r, u) => {
                k.has(u) || i.push(u);
              }),
                R.mutate({
                  rgEditionsToSave: Array.from(P),
                  mapGraphicsToUpload: j,
                  mapAltText: E,
                  rgGraphicsToDelete: i,
                }),
                p("alert");
            },
            ae = () => {
              y(new F(D)), p("closed");
            },
            q = () => {
              p("refreshing"), window.location.reload();
            },
            z = d.useId();
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(m.E, {
                active: g === "editor" || g === "alert",
                children: (0, e.jsxs)(Y.eV, {
                  "aria-labelledby": z,
                  closeModal: () => p("closed"),
                  children: [
                    g === "editor" &&
                      (0, e.jsxs)(e.Fragment, {
                        children: [
                          (0, e.jsxs)("div", {
                            className: l.EditionsEditorContents,
                            children: [
                              (0, e.jsx)("h2", {
                                id: z,
                                children: (0, t.we)(
                                  "#StoreAdmin_EditEditions_DialogTitle",
                                ),
                              }),
                              R.isPending && (0, e.jsx)(S.t, {}),
                              !R.isPending &&
                                (0, e.jsxs)(e.Fragment, {
                                  children: [
                                    O !== null &&
                                      (0, e.jsxs)("div", {
                                        className: l.ErrorBox,
                                        children: [
                                          (0, e.jsx)(w.X, {}),
                                          (0, e.jsx)("div", { children: O }),
                                        ],
                                      }),
                                    (0, e.jsx)(I, {
                                      rgEditions: P,
                                      rgCandidates: c.rgCandidates,
                                      setEditions: y,
                                    }),
                                    (0, e.jsx)("div", {
                                      className: l.EditionPickerHr,
                                    }),
                                    (0, e.jsx)(le, {
                                      mapOriginalImages: U,
                                      mapImages: k,
                                      setImages: n,
                                      mapAltText: E,
                                      setAltText: L,
                                      bAppHasSteamChinaToolsEnabled:
                                        c.bAppHasSteamChinaToolsEnabled,
                                    }),
                                  ],
                                }),
                            ],
                          }),
                          (0, e.jsxs)("div", {
                            className: l.EditionsEditorDialogButtons,
                            children: [
                              (0, e.jsx)("button", {
                                className: "btn_green_white_innerfade",
                                disabled: O !== null,
                                onClick: ne,
                                children: (0, t.we)(
                                  "#StoreAdmin_EditEditions_SaveButton",
                                ),
                              }),
                              (0, e.jsx)("button", {
                                onClick: ae,
                                children: (0, t.we)(
                                  "#StoreAdmin_EditEditions_CancelButton",
                                ),
                              }),
                            ],
                          }),
                          (0, e.jsx)("p", {
                            className: l.NeedToPublishNotification,
                            children: (0, t.oW)(
                              "#StoreAdmin_EditEditions_NeedToPublishNotice",
                              (0, e.jsx)("a", {
                                target: "_blank",
                                href: `${f.TS.PARTNER_BASE_URL}admin/game/edit/${c.nItemId}?activetab=tab_publish`,
                              }),
                            ),
                          }),
                        ],
                      }),
                    g === "alert" &&
                      (0, e.jsx)(e.Fragment, {
                        children: (0, e.jsxs)("div", {
                          className: l.EditionEditorContents,
                          children: [
                            (0, e.jsx)("h2", {
                              children: (0, t.we)(
                                "#StoreAdmin_EditEditions_SavingTitle",
                              ),
                            }),
                            (0, e.jsxs)("div", {
                              className: l.EditionsEditorSaveStatus,
                              children: [
                                R.isPending &&
                                  (0, e.jsxs)(e.Fragment, {
                                    children: [
                                      (0, e.jsx)(S.t, {}),
                                      " ",
                                      (0, t.we)(
                                        "#StoreAdmin_EditEditions_Saving",
                                      ),
                                    ],
                                  }),
                                !R.isPending &&
                                  (0, e.jsx)("span", {
                                    children: (0, t.we)(
                                      "#StoreAdmin_EditEditions_Saved",
                                    ),
                                  }),
                              ],
                            }),
                            (0, e.jsx)("span", {
                              className: l.PublishReminder,
                              children: (0, t.oW)(
                                "#StoreAdmin_EditEditions_NeedToPublishAlert",
                                (0, e.jsx)("a", {
                                  target: "_blank",
                                  href: `${f.TS.PARTNER_BASE_URL}admin/game/edit/${c.nItemId}?activetab=tab_publish`,
                                }),
                              ),
                            }),
                            (0, e.jsx)("div", {
                              className: l.EditionsEditorDialogButtons,
                              children: (0, e.jsx)("button", {
                                onClick: q,
                                children: (0, t.we)(
                                  "#StoreAdmin_EditEditions_OK",
                                ),
                              }),
                            }),
                          ],
                        }),
                      }),
                  ],
                }),
              }),
              (c.rgCandidates.length > 1 || c.rgEditions.length > 0) &&
                (0, e.jsx)(e.Fragment, {
                  children: (0, e.jsxs)("div", {
                    className: (0, G.A)(
                      l.EditionsEditorRow,
                      x && l.ImageProvided,
                    ),
                    children: [
                      g === "closed" &&
                        (0, e.jsxs)(e.Fragment, {
                          children: [
                            (0, e.jsx)("button", {
                              className: l.OpenEditorButton,
                              onClick: () => p("editor"),
                              children: (0, t.we)(
                                "#StoreAdmin_EditEditions_ManageEditionsButton",
                              ),
                            }),
                            P?.size > 0
                              ? (0, e.jsx)("span", {
                                  children: (0, t.we)(
                                    "#StoreAdmin_EditEditions_ManageEditionsDescription",
                                    P.size,
                                  ),
                                })
                              : (0, e.jsx)("span", {
                                  children: (0, t.we)(
                                    "#StoreAdmin_EditEditions_GroupEditionsDescription",
                                  ),
                                }),
                            (0, e.jsx)("span", {
                              children: x
                                ? (0, e.jsx)("span", {
                                    className: (0, G.A)(
                                      l.TaskDone,
                                      "icon_check_green",
                                    ),
                                    children: (0, t.we)(
                                      "#StoreAdmin_EditEditions_ManageEditions_HasComparisonGraphic",
                                    ),
                                  })
                                : (0, t.we)(
                                    "#StoreAdmin_EditEditions_ManageEditions_NoComparisonGraphic",
                                  ),
                            }),
                          ],
                        }),
                      g === "refreshing" &&
                        (0, e.jsx)(e.Fragment, {
                          children: (0, e.jsx)(S.t, { size: "small" }),
                        }),
                    ],
                  }),
                }),
            ],
          });
        }
        const X = (c) =>
          c.eType === "bundle" ? { bundleid: c.nId } : { packageid: c.nId };
        function I(c) {
          const { rgEditions: g, rgCandidates: p, setEditions: D } = c,
            P = new Map();
          for (const n of c.rgCandidates) P.set(n.nId, n);
          const [y, U] = (0, d.useState)(""),
            E = (n, x) => (R) => {
              const M = new F(g);
              R.target.checked
                ? M.add(n === "package" ? { packageid: x } : { bundleid: x })
                : M.delete(
                    n === "package" ? { packageid: x } : { bundleid: x },
                  ),
                D(M);
            },
            L = (n) => {
              const x = n.target.value;
              U(x);
            },
            k = p.filter(
              (n) => n.strName.toLowerCase().indexOf(y.toLowerCase()) !== -1,
            );
          return (0, e.jsxs)("div", {
            className: l.EditionPicker,
            children: [
              (0, e.jsx)("p", {
                children: (0, t.oW)(
                  "#StoreAdmin_EditEditions_GroupEditionsIntro",
                  (0, e.jsx)("a", {
                    target: "_blank",
                    href: `${f.TS.PARTNER_BASE_URL}doc/store/manageeditions`,
                  }),
                ),
              }),
              (0, e.jsx)("br", {}),
              (0, e.jsx)("h3", {
                children: (0, t.we)("#StoreAdmin_EditEditions_StepNumber1"),
              }),
              (0, e.jsx)("p", {
                children: (0, t.we)(
                  "#StoreAdmin_EditEditions_SelectEditionsDescription",
                ),
              }),
              (0, e.jsx)("div", {
                className: l.EditionPickerFilterBox,
                children: (0, e.jsx)("input", {
                  type: "text",
                  placeholder: (0, t.we)(
                    "#StoreAdmin_EditEditions_FilterDescription",
                  ),
                  value: y,
                  onChange: L,
                }),
              }),
              (0, e.jsxs)("table", {
                children: [
                  (0, e.jsx)("thead", {
                    children: (0, e.jsxs)("tr", {
                      children: [
                        (0, e.jsx)("td", {
                          children: (0, t.we)(
                            "#StoreAdmin_EditEditions_ColumnEdition",
                          ),
                        }),
                        (0, e.jsx)("td", {
                          children: (0, t.we)(
                            "#StoreAdmin_EditEditions_ColumnPackageTitle",
                          ),
                        }),
                        (0, e.jsx)("td", {
                          children: (0, t.we)(
                            "#StoreAdmin_EditEditions_ColumnState",
                          ),
                        }),
                        (0, e.jsx)("td", {
                          children: (0, t.we)(
                            "#StoreAdmin_EditEditions_ColumnPrice",
                          ),
                        }),
                      ],
                    }),
                  }),
                  (0, e.jsx)("tbody", {
                    children: k.map((n) => {
                      const x = g.has(X(n));
                      let R = l.HiddenColor;
                      return (
                        n.strReleaseState === "Released"
                          ? (R = l.ReleasedColor)
                          : n.strReleaseState === "Prepurchase"
                            ? (R = l.PrepurchaseColor)
                            : n.strReleaseState === "Beta" && (R = l.BetaColor),
                        (0, e.jsxs)(
                          "tr",
                          {
                            className: (0, G.A)(R, l.EditionPickerRow),
                            children: [
                              (0, e.jsx)("td", {
                                children: (0, e.jsx)("input", {
                                  type: "checkbox",
                                  onChange: E(n.eType, n.nId),
                                  checked: x,
                                }),
                              }),
                              (0, e.jsx)("td", { children: n.strName }),
                              (0, e.jsx)("td", {
                                children: n.strLocalizedReleaseState,
                              }),
                              (0, e.jsx)("td", {
                                dangerouslySetInnerHTML: {
                                  __html: n.strPricing,
                                },
                              }),
                            ],
                          },
                          n.nId,
                        )
                      );
                    }),
                  }),
                ],
              }),
            ],
          });
        }
        function le(c) {
          const {
              mapOriginalImages: g,
              mapImages: p,
              setImages: D,
              mapAltText: P,
              setAltText: y,
              bAppHasSteamChinaToolsEnabled: U,
            } = c,
            [E, L] = (0, d.useState)(null),
            k = (0, t.O9)(c.bAppHasSteamChinaToolsEnabled),
            [n, x] = (0, d.useState)("english"),
            R = (0, d.useRef)(null);
          let M = null,
            O = "missing";
          if (p.has(n)) {
            const a = p.get(n);
            a instanceof File
              ? ((M = URL.createObjectURL(a)), (O = "uploaded"))
              : ((M = a), (O = "exists"));
          }
          const ne = async (a) => {
              if (a.target.files && a.target.files[0]) {
                const h = a.target.files[0],
                  _ = await createImageBitmap(h);
                if (_.width !== v || _.height !== T) {
                  L(
                    (0, t.we)(
                      "#StoreAdmin_EditEditions_ImageSizeError",
                      v,
                      T,
                      _.width,
                      _.height,
                    ),
                  );
                  return;
                }
                const C = new Map(p);
                C.set(n, h), D(C), L(null);
              }
            },
            ae = (a) => {
              const h = new Map(P);
              h.set(n, a.target.value), y(h);
            },
            q = (a) => {
              x(a.target.value), L(null);
            },
            z = () => {
              if (p.has(n)) {
                const a = new Map(p);
                a.delete(n), D(a), L(null);
              }
            },
            j = (a) =>
              p.has(a) && p.get(a) instanceof File
                ? l.UploadedImageOption
                : p.has(a)
                  ? l.ExistsImageOption
                  : l.MissingImageOption,
            i = () => R.current?.click(),
            r = (a) => a.preventDefault(),
            u = async (a) => {
              if (
                (a.preventDefault(),
                a.dataTransfer.files && a.dataTransfer.files[0])
              ) {
                const h = a.dataTransfer.files[0],
                  _ = await createImageBitmap(h);
                if (_.width !== v || _.height !== T) {
                  L(
                    (0, t.we)(
                      "#StoreAdmin_EditEditions_ImageSizeError",
                      v,
                      T,
                      _.width,
                      _.height,
                    ),
                  );
                  return;
                }
                const C = new Map(p);
                C.set(n, h), D(C), L(null);
              }
            };
          return (0, e.jsxs)("div", {
            className: l.LocalizedImageSelector,
            children: [
              (0, e.jsx)("h3", {
                children: (0, t.we)("#StoreAdmin_EditEditions_StepNumber2"),
              }),
              (0, e.jsx)("p", {
                children: (0, t.we)(
                  "#StoreAdmin_EditEditions_UploadComparisonGraphicsDescription",
                  v,
                  T,
                ),
              }),
              (0, e.jsxs)("div", {
                className: l.Header,
                children: [
                  (0, e.jsx)("input", {
                    type: "file",
                    ref: R,
                    onChange: ne,
                    style: { display: "none" },
                  }),
                  (0, e.jsx)("select", {
                    onChange: q,
                    className: j(n),
                    children: (0, t.vR)(k, (a, h) =>
                      (0, e.jsx)(
                        "option",
                        { value: h, className: j(h), children: a },
                        h,
                      ),
                    ),
                  }),
                ],
              }),
              (0, e.jsx)("p", {
                className: l.ErrorBox,
                children:
                  E !== null &&
                  (0, e.jsxs)(e.Fragment, {
                    children: [(0, e.jsx)(w.X, {}), E],
                  }),
              }),
              (0, e.jsx)("div", {
                className: l.ImageDropPane,
                onClick: i,
                onDragOver: r,
                onDrop: u,
                children: M
                  ? (0, e.jsxs)(e.Fragment, {
                      children: [
                        (0, e.jsx)("div", {
                          className: l.DragAndDropDescriptionWithImage,
                          children: (0, t.we)(
                            "#StoreAdmin_EditEditions_DragAndDropToReplace",
                          ),
                        }),
                        (0, e.jsx)("img", { src: M }),
                        (0, e.jsx)("div", {
                          className: l.DeleteLink,
                          children: (0, e.jsx)("a", {
                            onClick: z,
                            children: (0, t.we)(
                              "#StoreAdmin_EditEditions_Delete",
                            ),
                          }),
                        }),
                      ],
                    })
                  : (0, e.jsx)("div", {
                      className: l.DragAndDropDescriptionWithoutImage,
                      children: (0, t.we)(
                        "#StoreAdmin_EditEditions_DragAndDropHere",
                      ),
                    }),
              }),
              (0, e.jsx)("h3", {
                children: (0, t.we)("#StoreAdmin_EditEditions_StepNumber3"),
              }),
              (0, e.jsx)("label", {
                htmlFor: "altTextArea",
                children: (0, e.jsx)("p", {
                  children: (0, t.we)(
                    "#StoreAdmin_EditEditions_AltTextDescription",
                  ),
                }),
              }),
              (0, e.jsx)("textarea", {
                id: "altTextArea",
                className: l.AltTextArea,
                onChange: ae,
                value: P.get(n) ?? "",
              }),
            ],
          });
        }
      },
      35102: (B, K, s) => {
        "use strict";
        s.d(K, { Ll: () => b, ut: () => G });
        var e = s(7850),
          d = s(90626),
          l = s(11512),
          o = s(58534),
          t = s(18210);
        function m(N) {
          const {
              appid: A,
              release_info: { steam_release_date: S, coming_soon_display: f },
            } = N,
            [w, v] = React.useState(f || "date_full"),
            T = parseInt(S),
            $ = !!T;
          return jsxs(Fragment, {
            children: [
              $ &&
                jsx("input", {
                  type: "hidden",
                  name: "app[release][coming_soon_display]",
                  value: w,
                }),
              jsx("div", {
                children: Localize("#GameEdit_ComingSoonDisplayEntry"),
              }),
              jsx("div", {
                style: { maxWidth: "400px", marginTop: "4px" },
                children: jsx(b, {
                  value: w,
                  onChange: v,
                  rtSteamReleaseDate: T,
                }),
              }),
            ],
          });
        }
        const Y = [
            "date_full",
            "date_month",
            "date_quarter",
            "date_year",
            "text_comingsoon",
            "text_tba",
          ],
          G = ["date_full", "date_month", "date_quarter"];
        function b(N) {
          const {
              rtSteamReleaseDate: A,
              value: S,
              onChange: f,
              rgComingSoonOptionOverride: w,
              bExpandedDisplay: v,
            } = N,
            T = !!A,
            $ = d.useMemo(
              () =>
                (w || Y).map((I) => ({
                  label: (0, l.M)(I, A, null, v),
                  data: I,
                })),
              [A, w, v],
            ),
            F = d.useCallback(
              (X) => {
                f(X.data);
              },
              [f],
            ),
            V = A
              ? (0, t.we)("#GameEdit_ComingSoon_SelectAnOption")
              : (0, t.we)("#App_Landing_NoDateSelected");
          return (0, e.jsx)(o.ZU, {
            disabled: !T,
            strDefaultLabel: V,
            rgOptions: $,
            selectedOption: T ? S : null,
            onChange: F,
          });
        }
      },
      65596: (B, K, s) => {
        "use strict";
        s.d(K, { M: () => ae });
        var e = s(7850),
          d = s(90626),
          l = s(11512),
          o = s(18210),
          t = s(92264),
          m = s(46595),
          Y = s(36118),
          G = s(41735),
          b = s.n(G),
          N = s(28763),
          A = s(20194),
          S = s(72604),
          f = s(58534),
          w = s(43308),
          v = s(2801),
          T = s(85599),
          $ = s(40497),
          F = s(53113),
          V = s(3166),
          X = s(35102),
          I = s(51780);
        function le(i) {
          const { appid: r, onClose: u, onCommit: a } = i,
            [h, _] = d.useState(null),
            { data: C, isLoading: ee, isLoadingError: W } = p(r),
            Q = C?.strReleaseState == "prerelease",
            H = d.useCallback(
              (te, J) => {
                $.L.invalidateQueries({ queryKey: ["ReleaseRequest", r] }),
                  a(te, J, Q);
              },
              [r, a, Q],
            );
          let Z = (0, e.jsx)(D, { setOnOKButton: _, onCommit: H });
          return (
            W
              ? (Z = (0, e.jsx)(P, {
                  strError: (0, o.we)("#Error_ErrorCommunicatingWithNetwork"),
                }))
              : (ee || !C) && (Z = (0, e.jsx)(T.t, {})),
            (0, e.jsx)(c.Provider, {
              value: C,
              children: (0, e.jsx)(U, {
                fnSubmit: h,
                fnCloseModal: u,
                children: Z,
              }),
            })
          );
        }
        const c = d.createContext(null);
        function g() {
          return d.useContext(c);
        }
        function p(i) {
          return (0, A.I)({
            queryKey: ["ReleaseRequest", i],
            queryFn: async () => {
              const r = await b().get(
                `${V.TS.PARTNER_BASE_URL}apprelease/ajaxgetreleaserequest/${i}`,
              );
              if (typeof r.data == "string")
                throw "Error loading release status";
              return { appid: i, ...r?.data };
            },
          });
        }
        const D = d.memo(function (r) {
          const {
              appid: u,
              bCanUpdateComingSoonDate: a,
              rtReleaseDate: h,
              strComingSoonDisplay: _,
            } = g(),
            { setOnOKButton: C, onCommit: ee } = r,
            [W, Q] = d.useState(h),
            [H, Z] = d.useState(_ || void 0),
            [te, J] = d.useState("none"),
            [ie, oe] = d.useState(),
            se = d.useCallback((de) => {
              oe(de), J("none");
            }, []),
            re = d.useCallback(() => {
              W
                ? H
                  ? (J("submitting"),
                    oe(null),
                    M({
                      unAppID: u,
                      rtReleaseDate: a ? W : null,
                      strComingSoonDisplay: H,
                    })
                      .then(() => {
                        J("refreshing"), ee(W, H);
                      })
                      .catch((ce) => {
                        se(ce);
                      }))
                  : se(
                      (0, o.we)(
                        "#App_Landing_ReleaseDate_Error_ComingSoonDisplay",
                      ),
                    )
                : se((0, o.we)("#App_Landing_ReleaseDate_Error_NoDate"));
            }, [u, W, H, a, ee, se]);
          return (
            d.useEffect(() => {
              C(te == "none" ? () => re : null);
            }, [re, a, te, C]),
            (0, e.jsxs)(e.Fragment, {
              children: [
                ie && (0, e.jsx)(P, { strError: ie }),
                (0, e.jsx)(y, {}),
                (0, e.jsxs)(f.dR, {
                  children: [
                    (0, e.jsxs)(E, {
                      label: (0, o.we)("#App_Landing_IntendedReleaseDateTitle"),
                      children: [
                        (0, e.jsx)(L, {
                          rtSelectedDate: W,
                          setSelectedDate: Q,
                        }),
                        (0, e.jsx)(k, {}),
                      ],
                    }),
                    (0, e.jsxs)(E, {
                      label: (0, o.we)("#App_Landing_PublicDateDisplayTitle"),
                      children: [
                        (0, e.jsx)(X.Ll, {
                          rtSteamReleaseDate: W,
                          value: H,
                          onChange: Z,
                        }),
                        (0, e.jsx)("p", {
                          children: (0, o.we)(
                            "#App_Landing_ReleaseDateStorePage",
                          ),
                        }),
                        (0, e.jsx)("p", {
                          children: (0, o.we)(
                            "#App_Landing_ReleaseDateStoreListing",
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, e.jsx)("div", {
                  className: I.ReleaseColumnFooter,
                  children: (0, o.oW)(
                    "#App_Landing_NeedHelpWithReleaseDates",
                    (0, e.jsx)("a", {
                      target: "_blank",
                      href: `${V.TS.PARTNER_BASE_URL}doc/store/coming_soon`,
                    }),
                    (0, e.jsx)("a", {
                      target: "_blank",
                      href: `${(0, F.GX)()}wizard/HelpWithPublishing`,
                    }),
                  ),
                }),
                (0, e.jsx)(R, {}),
              ],
            })
          );
        });
        function P(i) {
          const { strError: r } = i;
          return (0, e.jsx)("div", { className: I.ErrorBox, children: r });
        }
        function y() {
          const {
            bIsComingSoon: i,
            bIsStorePageReviewed: r,
            bIsWaitingForBuildReview: u,
            bIsFirstSelfPublishingApp: a,
            rtEarliestDate: h,
            bRequiresReleaseWaitingPeriod: _,
          } = g();
          return i && r
            ? u
              ? (0, e.jsx)(x, {
                  children: (0, o.we)(
                    "#App_Landing_Release_EarliestDate_BuildReview",
                  ),
                })
              : (0, e.jsx)(x, {
                  children: (0, o.we)(
                    "#App_Landing_Release_EarliestDate",
                    (0, o.$z)(h),
                  ),
                })
            : a && _
              ? (0, e.jsx)(x, {
                  children: (0, o.we)(
                    "#App_Landing_Release_EarliestDate_TwoWeeks30Days",
                  ),
                })
              : _
                ? (0, e.jsx)(x, {
                    children: (0, o.we)(
                      "#App_Landing_Release_EarliestDate_TwoWeeks",
                    ),
                  })
                : null;
        }
        function U(i) {
          const { fnCloseModal: r, fnSubmit: u, children: a } = i,
            { bCanUpdateComingSoonDate: h } = g() || {
              bCanUpdateComingSoonDate: !0,
            };
          return (0, e.jsxs)(v.mt, {
            active: !0,
            className: I.ReleaseDateModal,
            onDismiss: r,
            children: [
              (0, e.jsx)(f.Y9, {
                children: (0, o.we)(
                  h
                    ? "#App_Landing_Set_Release_Date"
                    : "#App_Landing_Change_Release_Date",
                ),
              }),
              (0, e.jsx)(f.nB, {
                className: I.ReleaseDateRequestBody,
                children: a,
              }),
              (0, e.jsx)(f.CB, {
                bOKDisabled: !u,
                onCancel: r,
                strCancelText: (0, o.we)("#App_Landing_Requested_Date_Cancel"),
                onOK: u,
                strOKText: (0, o.we)("#App_Landing_Requested_Date_Update"),
              }),
            ],
          });
        }
        function E(i) {
          const { label: r, children: u } = i;
          return (0, e.jsxs)(f.VP, {
            className: I.Column,
            children: [
              (0, e.jsxs)("div", {
                className: I.ColumnLabel,
                children: [r, ":"],
              }),
              (0, e.jsx)("div", { className: I.ColumnContent, children: u }),
            ],
          });
        }
        function L(i) {
          const { rtSelectedDate: r, setSelectedDate: u } = i,
            { bCanUpdateComingSoonDate: a, rtEarliestDate: h } = g();
          return (0, e.jsx)(e.Fragment, {
            children: (0, e.jsx)(w.K, {
              bWeekdaysOnly: !0,
              bNoDefaultDate: !0,
              disabled: !a,
              nEarliestTime: h,
              fnGetTimeToUpdate: () => r,
              fnSetTimeToUpdate: u,
              className: I.DatePicker,
              bShowTimeZone: !0,
              strAlsoShowTimeZone: N.o,
            }),
          });
        }
        function k(i) {
          const { bCanUpdateComingSoonDate: r, rtReleaseDate: u } = g();
          return r
            ? (0, e.jsxs)(e.Fragment, {
                children: [
                  (0, e.jsx)("p", {
                    children: (0, o.we)(
                      "#App_Landing_Set_Release_Date_SetIntended",
                    ),
                  }),
                  (0, e.jsx)("p", {
                    children: (0, o.we)(
                      "#App_Landing_Set_Release_Date_Weekends",
                    ),
                  }),
                  (0, e.jsx)("p", {
                    children: (0, o.we)(
                      "#App_Landing_Set_Release_Date_PacificTime",
                    ),
                  }),
                ],
              })
            : (0, e.jsx)("p", {
                children: (0, o.oW)(
                  (0, o.we)(
                    "#App_Landing_Set_Release_Date_ComingSoonWarning_CantSet_Desc",
                    (0, o.$z)(u),
                  ),
                  (0, e.jsx)("a", {
                    href: `${(0, F.GX)()}wizard/HelpWithPublishing?issueid=905`,
                  }),
                ),
              });
        }
        function n(i) {
          return jsx("span", {
            className: styles.YellowNote,
            children: i.children,
          });
        }
        function x(i) {
          return (0, e.jsx)("span", {
            className: I.BlueNote,
            children: i.children,
          });
        }
        function R(i) {
          const {
            rtEarliestDate: r,
            strReleaseState: u,
            bCanUpdateComingSoonDate: a,
          } = g();
          return u != "prerelease" || a
            ? null
            : (0, e.jsx)("div", {
                className: I.PublishNowWarning,
                children: (0, o.we)(
                  "#App_Landing_Set_Release_Date_ComingSoonWarning_CantSet_Note",
                  (0, o.$z)(r),
                ),
              });
        }
        async function M(i) {
          const { unAppID: r, rtReleaseDate: u, strComingSoonDisplay: a } = i,
            h = `${V.TS.PARTNER_BASE_URL}apprelease/ajaxupdatereleaserequest/${r}`,
            _ = new FormData();
          _.append("sessionid", (0, V.KC)()),
            u && _.append("release_date", u.toString()),
            _.append("coming_soon_display", a);
          const C = await b().post(h, _);
          if (!C.data || C.data.success != S.R)
            throw (0, o.we)(
              "#Error_Description",
              C.data?.success,
              C.data?.error_message || "unknown",
            );
        }
        var O = s(36707),
          ne = s(65620);
        function ae(i) {
          const {
              bIsGameEdit: r,
              unAppID: u,
              rgEarliestAdvancedAccessDate: a,
            } = i,
            [h, _] = d.useState(i.rtReleaseDate),
            [C, ee] = d.useState(i.strComingSoonDisplay),
            [W, Q] = d.useState(!1),
            [H, Z] = d.useState(!1),
            te = d.useCallback(() => Q(!0), []),
            J = d.useCallback(() => Q(!1), []),
            ie = d.useCallback((oe, se, re) => {
              _(oe), ee(se), Q(!1), re && Z(!0);
            }, []);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              W && (0, e.jsx)(le, { appid: u, onClose: J, onCommit: ie }),
              H &&
                (0, e.jsx)(j, {
                  appid: u,
                  bIsGameEdit: r,
                  closeModal: () => Z(!1),
                }),
              (0, e.jsxs)("div", {
                className: (0, O.A)(m.ReleaseDateInfoCtn, r && m.GameEditCtn),
                children: [
                  (0, e.jsxs)("div", {
                    className: m.ReleaseDateContent,
                    children: [
                      (0, e.jsx)(z, {
                        label: (0, o.we)("#App_Landing_SpecifiedReleaseDate"),
                        children: (0, e.jsx)(q, { rtReleaseDate: h }),
                      }),
                      (0, e.jsx)(z, {
                        label: (0, o.we)(
                          "#App_Landing_CustomersSeeReleaseDate",
                        ),
                        children: (0, e.jsx)("div", {
                          className: (0, O.A)(m.BigField, C ? m.Set : m.Unset),
                          children: C
                            ? (0, l.M)(C, h)
                            : (0, o.we)("#App_Landing_UnsetReleaseDate"),
                        }),
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: m.EditButton,
                    onClick: te,
                    children: [
                      (0, e.jsx)("div", {
                        className: (0, O.A)(m.Spacer, m.Top),
                      }),
                      (0, e.jsx)("div", {
                        className: m.EditButtonIcon,
                        children: (0, e.jsx)(Y.ffu, {}),
                      }),
                      (0, e.jsx)("div", {
                        className: (0, O.A)(m.Spacer, m.Bottom),
                      }),
                    ],
                  }),
                ],
              }),
              a * 1e3 > new Date().getTime() &&
                (0, e.jsx)(z, {
                  label: (0, o.we)("#App_Landing_EarliestAdvancedAccessDate"),
                  children: (0, e.jsx)(q, { rtReleaseDate: a }),
                }),
            ],
          });
        }
        function q(i) {
          const { rtReleaseDate: r } = i;
          return r
            ? (0, e.jsxs)(e.Fragment, {
                children: [
                  (0, e.jsx)("div", {
                    className: (0, O.A)(m.BigField, m.Set),
                    children: (0, o.$z)(r),
                  }),
                  (0, e.jsx)("div", {
                    className: (0, O.A)(m.SubField, m.Set),
                    children: (0, t.KC)(r, {}, { timeZoneName: "short" }),
                  }),
                ],
              })
            : (0, e.jsx)("div", {
                className: (0, O.A)(m.BigField, m.Unset),
                children: (0, o.we)("#App_Landing_UnsetReleaseDate"),
              });
        }
        function z(i) {
          return (0, e.jsxs)("div", {
            className: m.LabelField,
            children: [
              (0, e.jsx)("div", { className: m.Label, children: i.label }),
              i.children,
            ],
          });
        }
        function j(i) {
          const { appid: r, bIsGameEdit: u, closeModal: a } = i,
            h = d.useCallback(() => {
              u
                ? (window.TabSelect("tab_publish"), window.scrollTo(0, 0))
                : (window.location.href =
                    ne.bI.GameEditByAppID(r.toString()) +
                    "?activetab=tab_publish"),
                a();
            }, [r, u, a]);
          return (0, e.jsx)(v.EN, {
            active: !0,
            children: (0, e.jsx)(v.o0, {
              strTitle: (0, o.we)("#App_Landing_ReleaseDate_ChangesSaved"),
              strDescription: (0, o.we)(
                "#App_Landing_Release_PublishStorePrompt",
              ),
              strOKButtonText: (0, o.we)(
                "#App_Landing_Release_PrepareToPublish",
              ),
              onOK: h,
              strCancelButtonText: (0, o.we)("#Button_OK"),
              closeModal: a,
            }),
          });
        }
      },
      65620: (B, K, s) => {
        "use strict";
        s.d(K, { Cg: () => o, _h: () => l, a3: () => d, bI: () => e });
        let e = {
          GameEdit: (t, m) => `/admin/game/${t}/${m}`,
          PackageEdit: (t, m) => `/admin/store/${t}/${m}`,
          BundleEdit: (t, m) => `/bundles/${t}/${m}`,
          GameEditByAppID: (t) => `/admin/game/editbyappid/${t}`,
          ReviewPriceProposals: () => "/admin/reviewpricesubmissions/",
          PackageLanding: (t) => `/store/packagelanding/${t}`,
          FrontPageEdit: (t) => `/admin/store/pageclusteredit/frontpage/${t}`,
          FrontPageSteamChinaEdit: (t) =>
            `/admin/store/pageclusteredit/frontpage_china/${t}`,
          ContentHubEditor: (t, m) =>
            `/admin/store/pageclusteredit/content_hub_${m}/${t}`,
          StoreAdminCreatorHome: () => "/admin/creatorhome",
        };
        const d = ["edit", "diff", "revert", "prepare", "publish"],
          l = [
            "package",
            "packagesave",
            "packagediff",
            "packagerevert",
            "packageprepare",
            "packagepublish",
          ],
          o = ["view", "preparestore", "revertstore", "savestore", "publish"];
      },
      40139: (B) => {
        B.exports = { profile_color_preview: "_2VqhO10AlkJOsh7sPoqPcp" };
      },
      93542: (B) => {
        B.exports = {
          EditionPickerHr: "_2N7bWzRE2_6yMlW8HoWwKL",
          NeedToPublishNotification: "_1YyjMfNhBo6lWsvunbhkmG",
          EditionsEditorRow: "_1kVAFKlQN-iaGJNQM64lbU",
          ImageProvided: "_3acPE1-7PEV9Fv1BIkpb1d",
          PublishReminder: "_2bw5Zr8a6ik4-NIjVgcZSn",
          TaskDone: "_3cgXyLkVbKXYv6hxcrj0P9",
          EditionsEditorContents: "WKVcCeIwShQXxr0XjInT9",
          ErrorList: "_34AP-LqjTCmVO7oQmBRksn",
          ErrorListItems: "_3OPqG7OUgCU252R-DdB0Qj",
          EditionsEditorDialogButtons: "zHZhZ_cYU43MhqpRkvAuR",
          EditionPicker: "N1f8Ye9Eude7K2vJSL7AZ",
          EditionPickerFilterBox: "WLQyL6JRweNM6PHgWKRaB",
          HiddenColor: "_1YtkUWpJ0G7lnnX5bj8X7_",
          ReleasedColor: "_1_2YmmBAHhhpvApS2NQe-r",
          PrepurchaseColor: "_2o-Djga-h_lkGoTFS-PjlF",
          BetaColor: "_29O7AlK2wwhmKjrCxAPIRk",
          EditionsEditorSaveStatus: "_21ABdLhAaZ1KIV7osV-RYV",
          LocalizedImageSelector: "_1K9mhqXjo6xi6qVHMBwcTQ",
          Header: "_3oC7Qb8-E-MF_hxZKzOPyQ",
          UploadedImageOption: "_2F05QhQ_9_rf7qryFDLsh6",
          ExistsImageOption: "_2DTeKovr7g8Z4rrBjVNTZb",
          MissingImageOption: "_29pcde0Q7kd7ClgWo9w5NB",
          ImageDropPane: "_1RWj0soRG2Y-mtoq_nOEe3",
          DragAndDropDescriptionWithImage: "_3-2d6qJPYFImAjNB825gPq",
          DragAndDropDescriptionWithoutImage: "_2FAmjUnpcILnVdO29vdLn6",
          DeleteLink: "D_kqKamsBe39qbMqcuino",
          ErrorBox: "_20-2lEQLGnc64V46i5khL-",
          AltTextArea: "_20wBVZiv8PNqku4mQTONkN",
        };
      },
      46595: (B) => {
        B.exports = {
          ReleaseDateInfoCtn: "_2mHXbGuTlraXe_Q1JYKmJZ",
          GameEditCtn: "_2JigUHOJ_OTCRjbohXgz9q",
          ReleaseDateContent: "AVZgMOcgNdb95embDq8g1",
          EditButton: "_1R5w2idIf5H3xZh7C6ObQL",
          Spacer: "_3TcEpA8cfRVBTd8q_vvFWu",
          Top: "kNcnUbYODwtyQ3AZp_VUM",
          Bottom: "_2TBzK4oRpgLv5hHxtojPq5",
          EditButtonIcon: "_22a0aPwQVuTJx58YZQWYBd",
          LabelField: "_1olrpCNFeNf7UfruKHLVhY",
          Label: "M3h38e4KnwYsDvQP72dg0",
          BigField: "_4jS-jBGyvj3mr8jkJ46Gc",
          Set: "eEhAf6mE-OR6VCf4eHEkC",
        };
      },
      51780: (B) => {
        B.exports = {
          ReleaseDateModal: "RKE7g5McLhANBdiTzm-ai",
          ReleaseDateRequestBody: "_32CdqVuKRqrf1SR8Hday6v",
          Column: "_gUUe9JABsRpGmdkooO11",
          ColumnLabel: "xebmA68ybtGEgyG_oVMM0",
          ReleaseColumnFooter: "_3egfk1DBae-OZSZtcwrDDq",
          ColumnContent: "eZhskcRU_Ejw5kmSBLRTU",
          BlueNote: "_1iIVgx9LfomTs6Ycj6qYgV",
          PublishNowWarning: "_2-dra08qCgH_F_0T756AwP",
          ErrorBox: "_27JIJRbunDgYqS_xDV7Xha",
          HTMLErrorBoxAppear: "bXT6nAG7o3DqMjoZ_zWJ",
        };
      },
    },
  ]);
})();
