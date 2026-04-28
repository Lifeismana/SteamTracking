/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [9855],
  {
    54736: (e) => {
      e.exports = {
        DisplayAdminPanel_Spacer: "_3TzVFi3VdHXUk1AerBpZc-",
        EventEditorTopBarContainer: "_1Afx7wzva3-ghxcAy6EQhs",
        EventEditorBottomBar: "_1noS58WsfHN3KuGVDzlv9r",
        EventPublished: "_3zTXCKuKmaCdEoxSBTzPAa",
        EventUnPublished: "pjxnm0P9LLWFXCwsaDKUa",
        AdditionalContent: "_2fUl5vCnrlT9P7kskRIiWx",
      };
    },
    91126: (e) => {
      e.exports = {
        ValveCrowdInSyncCtn: "_8MIrt7rQXkA0xE5sAjOee",
        ValveCrowdInSyncLabel: "_22b0C1Xi03QNdTFKsYypHR",
        SyncPanelError: "yn_yu2EaUigYFm9QQAD7o",
      };
    },
    96471: (e) => {
      e.exports = {
        Label: "_1LhItwhLHspVcQdfcbd2Sg",
        ImportLocSampleButtonCtn: "D-1dlROLVuva-sb6tFgwU",
        SampleTitle: "_9189ilzQ3YES-a-6DyBhR",
        ImportButton: "WyfyxbGrKQq8cKMK5kfxE",
      };
    },
    42519: (e, t, a) => {
      "use strict";
      a.d(t, { p: () => _, s: () => p });
      var o = a(7850),
        n = a(90626),
        i = a(68255),
        l = a(95695),
        r = a.n(l),
        s = a(64846),
        c = a(26408),
        d = a(61859),
        g = a(91126),
        u = a.n(g),
        m = a(41756),
        L = a(22837),
        h = a(28015),
        E = a(22797),
        A = a(12155);
      function p(e) {
        var t, a;
        const { editModel: g } = e,
          [p, w] = n.useState(1),
          [v, C] = n.useState(!1),
          [S, f] = n.useState(null),
          x = g.GetClanSteamID(),
          z = g.GetGID(),
          I = (0, m.Wj)(x, z),
          [, j] = n.useReducer((e) => e + 1, 0),
          D =
            I.isSuccess &&
            (null === (t = I.data) || void 0 === t
              ? void 0
              : t.crowdin_project_id) &&
            (null === (a = I.data) || void 0 === a ? void 0 : a.crowdin_file_id)
              ? `https://valve.crowdin.com/editor/${I.data.crowdin_project_id}/${I.data.crowdin_file_id}`
              : null,
          G = (0, m.IW)(x.ConvertTo64BitString(), z, p);
        return I.isLoading
          ? null
          : (0, o.jsxs)(s.E, {
              clanSteamID: e.editModel.GetClanSteamID(),
              children: [
                (0, o.jsx)(h.mt, { active: v, children: (0, o.jsx)(E.t, {}) }),
                (0, o.jsxs)("div", {
                  className: u().ValveCrowdInSyncCtn,
                  children: [
                    (0, o.jsx)(i.J0, {
                      value: g.BPushUpdatesToCrowdInAutomatically(),
                      onChange: (e) => {
                        g.SetPushSourceToCrowdInAutomatically(e), j();
                      },
                    }),
                    (0, o.jsxs)("div", {
                      className: u().ValveCrowdInSyncLabel,
                      children: [
                        (0, d.we)(
                          "#EventEditor_Localization_AutomaticallyPushChangesToCrowdIn",
                        ),
                        " (",
                        D
                          ? (0, o.jsx)("a", { href: D, children: D })
                          : (0, d.we)(
                              "#EventEditor_Localization_NotMappedToCrowdIn",
                            ),
                        ")",
                        (0, o.jsx)(c.o, {
                          tooltip: (0, d.we)(
                            "#EventEditor_Localization_Tooltip",
                          ),
                          className: l.tooltip_Ctn,
                        }),
                        (0, o.jsx)("br", {}),
                        (0, o.jsx)("span", {
                          children: (0, d.we)(
                            "#EventEditor_Localization_RememberToSave",
                          ),
                        }),
                      ],
                    }),
                    (0, o.jsx)(_, {
                      onChange: (e) => {
                        const t = e.target.value;
                        if ("all" === t) w(-1);
                        else {
                          const e = (0, L.sf)(t);
                          w(e);
                        }
                      },
                    }),
                    (0, o.jsx)("div", {
                      className: r().EditPreviewButton,
                      onClick: () => {
                        C(!0),
                          G.mutateAsync()
                            .then(() => window.location.reload())
                            .catch((e) => {
                              f(e.toString()), C(!1);
                            })
                            .then(() => {
                              f(null);
                            });
                      },
                      children: (0, d.we)(
                        "#EventEditor_Localization_FetchLocalization",
                      ),
                    }),
                  ],
                }),
                S &&
                  (0, o.jsx)(o.Fragment, {
                    children: (0, o.jsxs)("div", {
                      className: u().SyncPanelError,
                      children: [(0, o.jsx)(A.X, {}), " ", S],
                    }),
                  }),
              ],
            });
      }
      function _(e) {
        const t = (0, d.O9)(!1);
        let a = Array.from(t.entries());
        a.sort((e, t) => e[1].localeCompare(t[1]));
        const n = a.map(([e, t]) =>
          "english" !== e
            ? (0, o.jsx)("option", { value: e, children: t }, e)
            : "",
        );
        return (0, o.jsxs)("select", {
          onChange: e.onChange,
          children: [
            (0, o.jsx)("option", {
              value: "all",
              children: (0, d.we)("#EventEditor_Localization_AllLanguages"),
            }),
            n,
          ],
        });
      }
    },
    25228: (e, t, a) => {
      "use strict";
      a.d(t, { Yg: () => v, t3: () => C });
      var o = a(7850),
        n = a(40323),
        i = a.n(n),
        l = a(90626),
        r = a(22837),
        s = a(2160),
        c = a(69343),
        d = a(68255),
        g = a(95695),
        u = a(9154),
        m = a(738),
        L = a(22797),
        h = a(68797),
        E = a(52038),
        A = a(61859),
        p = a(87669),
        _ = a(32754),
        w = a(96471);
      const v = (e) => {
          const t = (t, a) => {
            t.preventDefault();
            const {
                fnGetLocData: o,
                closeModal: n,
                strFileNamePrefix: i,
                lang: l,
              } = e,
              s = o(),
              c = new p.s();
            let d = i ? i + "_localization" : "localization";
            switch (a) {
              case "csv_row":
                c.WriteLocalizationData_CSV_LanguageRows(s, d + ".csv");
                break;
              case "csv_column":
                c.WriteLocalizationData_CSV_LanguageColumns(s, d + ".csv");
                break;
              case "csv_token":
                c.WriteLocalizationData_CSV_TokenAndLanguageColumns(
                  s,
                  d + ".csv",
                );
                break;
              case "xml":
                c.WriteLocalizationData_XML_SingleLanguage(
                  s,
                  l,
                  d + "_" + (0, r.x6)((0, r.Lg)(l)) + ".xml",
                );
            }
            n && n();
          };
          return (0, o.jsxs)(o.Fragment, {
            children: [
              Boolean(e.bShowCSV) &&
                (0, o.jsxs)(l.Fragment, {
                  children: [
                    (0, o.jsx)(d.jn, {
                      onClick: (e) => t(e, "csv_row"),
                      children: (0, A.we)(
                        "#Localization_Export_Btn_RowLanguages",
                      ),
                    }),
                    (0, o.jsx)(d.jn, {
                      onClick: (e) => t(e, "csv_column"),
                      children: (0, A.we)(
                        "#Localization_Export_Btn_ColumnLanguages",
                      ),
                    }),
                    (0, o.jsx)(d.jn, {
                      onClick: (e) => t(e, "csv_token"),
                      children: (0, A.we)(
                        "#Localization_Export_Btn_TokenLanguages",
                      ),
                    }),
                  ],
                }),
              Boolean(e.bShowXML) &&
                (0, o.jsx)(d.jn, {
                  onClick: (e) => t(e, "xml"),
                  children: (0, A.we)("#Localization_Export_Btn_XML"),
                }),
            ],
          });
        },
        C = (e) => {
          const [t, a] = (0, l.useState)(!1),
            n = (e, t) => {
              a(!1),
                console.log(
                  "ImportLocalizationAction: On Handle Parse error: " +
                    e.message,
                  e,
                ),
                (0, m.pg)(
                  (0, o.jsx)(u.KG, {
                    children: (0, o.jsxs)("div", {
                      children: [
                        (0, o.jsx)("p", {
                          children: (0, A.we)("#Localization_Error_Input"),
                        }),
                        (0, o.jsx)("p", { children: e.message }),
                      ],
                    }),
                  }),
                  window,
                );
            },
            d = (e) => {
              a(!1);
              let t = "";
              e.forEach((e) => {
                t.length > 0 && (t += ", "),
                  (t += (0, A.we)("#Language_" + (0, r.Lg)(e)));
              }),
                (0, m.pg)(
                  (0, o.jsx)(u.o0, {
                    strTitle: (0, A.we)("#EventDisplay_Share_Success"),
                    bAlertDialog: !0,
                    children: (0, o.jsx)("div", {
                      children:
                        0 == t.length
                          ? (0, A.we)(
                              "#Localization_Success_ImportComplete_NoChange",
                            )
                          : (0, A.we)(
                              "#Localization_Success_ImportComplete",
                              t,
                            ),
                    }),
                  }),
                  window,
                );
            },
            v = async (t) => {
              let o = t.target.files;
              if (o && o.length > 0) {
                a(!0);
                let t = new Array(),
                  l = new p.s();
                for (let a = 0; a < o.length; ++a)
                  if (o[a]) {
                    if (o[a].name.toLocaleLowerCase().endsWith(".csv"))
                      return void i().parse(o[0], {
                        header: !0,
                        complete: (t) => {
                          let a = new p.s().DetectAndFormatCSV(t);
                          if (!a)
                            return void n({
                              code: "",
                              message: "",
                              row: 0,
                              type: "filenameerror",
                            });
                          const o = A.A0.GetLanguageListForRealms([
                              s.TU.k_ESteamRealmGlobal,
                            ]),
                            i = e.fnOnImportLocData(a, o);
                          d(i);
                        },
                        error: n,
                      });
                    if (o[a].name.toLocaleLowerCase().endsWith(".xml")) {
                      let { language: i } = (0, c.jj)(o[a].name, -1);
                      if (null == i || -1 == i)
                        return void n({
                          code: "",
                          message: (0, A.we)(
                            "#Localization_Error_FileLangauage",
                            o[a].name,
                          ),
                          row: 0,
                          type: "filenameerror",
                        });
                      try {
                        const n =
                          await l.ReadLocalizationData_XML_SingleLanguage(
                            o[a],
                            i,
                          );
                        e.fnOnImportLocData(n, [i]).forEach((e) => {
                          -1 == t.indexOf(e) && t.push(e);
                        });
                      } catch (e) {
                        let t = (0, h.H)(e);
                        return void n({
                          code: "",
                          message: (0, A.we)(
                            "#Localization_Error_XMLParseError",
                            t.strErrorMsg,
                          ),
                          row: 0,
                          type: "parseerror",
                        });
                      }
                    } else
                      n({
                        code: "",
                        message: (0, A.we)(
                          "#Localization_Error_FileExtention",
                          o[a].name,
                        ),
                        row: 0,
                        type: "filenameerror",
                      });
                  }
                d(t);
              }
            };
          return (0, o.jsx)(_.he, {
            className: (0, E.A)(
              e.className ? e.className : g.EditPreviewButton,
            ),
            toolTipContent: e.strToolTip,
            children: (0, o.jsxs)("label", {
              className: w.ImportButton,
              htmlFor: "importlocalization",
              children: [
                t && (0, o.jsx)(L.t, { size: "small" }),
                (0, o.jsx)("div", {
                  className: w.Label,
                  children: (0, A.we)(
                    e.strLabel ? e.strLabel : "#Localization_Import_Btn",
                  ),
                }),
                (0, o.jsx)("input", {
                  id: "importlocalization",
                  className: w.ImportButton,
                  style: { display: "none" },
                  type: "file",
                  onSubmit: v,
                  onChange: v,
                  multiple: !0,
                }),
              ],
            }),
          });
        };
    },
    87669: (e, t, a) => {
      "use strict";
      a.d(t, { G: () => s, s: () => c });
      var o = a(22837),
        n = a(2160),
        i = a(62490),
        l = a(9161),
        r = a(61859);
      class s {
        constructor() {
          this.m_mapTokens = new Map();
        }
        GetLocalization(e, t) {
          const a = this.m_mapTokens.get(e);
          if (a && a[t]) return a[t];
        }
        SetLocalization(e, t, a) {
          let o = this.m_mapTokens.get(e);
          o || ((o = (0, i.$Y)([], 31, null)), this.m_mapTokens.set(e, o)),
            (o[t] = a);
        }
        GetSortedTokenList() {
          let e = [];
          return (
            this.m_mapTokens.forEach((t, a) => e.push(a)),
            e.sort((e, t) => e.localeCompare(t)),
            e
          );
        }
        GetLanguagesWithTokens() {
          let e = new Map();
          this.m_mapTokens.forEach((t) => {
            for (let a = 0; a < t.length; ++a)
              !e.has(a) &&
                null !== t[a] &&
                void 0 !== t[a] &&
                t[a].trim().length > 0 &&
                e.set(a, !0);
          });
          let t = new Array();
          return (
            e.forEach((e, a) => {
              e && t.push(a);
            }),
            t
          );
        }
        ClearLanguagesTokens(e) {
          e.forEach((e) => {
            this.m_mapTokens.forEach((t, a) => {
              e < t.length && null !== t[e] && (t[e] = null);
            });
          });
        }
        DebugPrintData() {
          const e = new Array();
          return (
            this.m_mapTokens.forEach((t, a) => e.push(`${a}=${t.join(",")}`)),
            e.join("\n")
          );
        }
      }
      class c {
        DetectAndFormatCSV(e) {
          var t, a, n, i, l, r;
          let s = null;
          return (
            (null ===
              (a =
                null === (t = null == e ? void 0 : e.meta) || void 0 === t
                  ? void 0
                  : t.fields) || void 0 === a
              ? void 0
              : a.length) >= 3 &&
            "field" === e.meta.fields[0] &&
            "language" === e.meta.fields[1] &&
            "value" === e.meta.fields[2]
              ? (s = this.ReadLocalizationData_CSV_TokenLanguageList(e))
              : (null ===
                    (i =
                      null === (n = null == e ? void 0 : e.meta) || void 0 === n
                        ? void 0
                        : n.fields) || void 0 === i
                    ? void 0
                    : i.length) >= 2 &&
                  "field" === e.meta.fields[0] &&
                  -1 != (0, o.sf)(e.meta.fields[1], -1)
                ? (s = this.ReadLocalizationData_CSV_LanguageColumns(e))
                : (null ===
                    (r =
                      null === (l = null == e ? void 0 : e.meta) || void 0 === l
                        ? void 0
                        : l.fields) || void 0 === r
                    ? void 0
                    : r.length) >= 2 &&
                  "language" === e.meta.fields[0] &&
                  (s = this.ReadLocalizationData_CSV_LanguageRows(e)),
            s
          );
        }
        async ReadLocalizationData_XML_SingleLanguage(e, t) {
          let a = new s(),
            o = new DOMParser(),
            n = await l.g.ReadFile(e),
            i = o.parseFromString(n.toString(), "application/xml");
          for (let e = 0; e < i.documentElement.children.length; ++e) {
            const o = i.documentElement.children.item(e);
            if (!o.getAttribute("id"))
              throw "Can not find id for element. Probably malformed XML";
            const n = o.getAttribute("id").toLocaleLowerCase(),
              l = o.textContent;
            a.SetLocalization(n, t, l);
          }
          return a;
        }
        ReadLocalizationData_CSV_TokenLanguageList(e) {
          const t = new s();
          return (
            e.data.forEach((e) => {
              const a = e.field,
                n = (0, o.sf)(e.language);
              t.SetLocalization(a, n, e.value);
            }),
            t
          );
        }
        ReadLocalizationData_CSV_LanguageColumns(e) {
          const t = new s();
          return (
            e.data.forEach((e) => {
              const a = e.field;
              for (let n = 0; n < 31; ++n) {
                const i = (0, o.x6)((0, o.Lg)(n));
                t.SetLocalization(a, n, e[i]);
              }
            }),
            t
          );
        }
        ReadLocalizationData_CSV_LanguageRows(e) {
          const t = new s();
          return (
            e.data.forEach((e) => {
              const a = (0, o.sf)(e.language, 31);
              if (31 !== a)
                for (const [o, n] of Object.entries(e))
                  "language" !== o &&
                    "string" == typeof n &&
                    t.SetLocalization(o, a, n);
            }),
            t
          );
        }
        GetExportLanguages() {
          return r.A0.GetLanguageListForRealms([n.TU.k_ESteamRealmGlobal]);
        }
        WriteLocalizationData_CSV_TokenAndLanguageColumns(e, t) {
          let a = new Array();
          e.GetSortedTokenList().forEach((t) => {
            for (const n of this.GetExportLanguages()) {
              let i = { field: t };
              (i.language = (0, o.x6)((0, o.Lg)(n))),
                (i.value = e.GetLocalization(t, n)),
                a.push(i);
            }
          }),
            l.g.WriteCSVToFile(a, t);
        }
        WriteLocalizationData_CSV_LanguageColumns(e, t) {
          let a = new Array();
          e.GetSortedTokenList().forEach((t) => {
            let n = { field: t };
            for (const a of this.GetExportLanguages())
              n[(0, o.x6)((0, o.Lg)(a))] = e.GetLocalization(t, a);
            a.push(n);
          }),
            l.g.WriteCSVToFile(a, t);
        }
        WriteLocalizationData_CSV_LanguageRows(e, t) {
          let a = new Array();
          for (const e of this.GetExportLanguages())
            a.length <= e - 1 && a.push({ language: "" }),
              a.push({ language: (0, o.x6)((0, o.Lg)(e)) });
          e.GetSortedTokenList().forEach((t) => {
            for (const o of this.GetExportLanguages()) {
              const n = e.GetLocalization(t, o);
              a[o][t] = n;
            }
          }),
            l.g.WriteCSVToFile(a, t);
        }
        WriteLocalizationData_XML_SingleLanguage(e, t, a) {
          let o = document.implementation.createDocument(null, "content", null);
          e.GetSortedTokenList().forEach((a) => {
            let n = o.createElement("string");
            n.setAttribute("id", a),
              n.appendChild(o.createTextNode(e.GetLocalization(a, t) || "")),
              o.documentElement.append(n);
          }),
            l.g.WriteXMLToFile(o, a);
        }
      }
    },
    26759: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => o });
      const o =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAFo9M/3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzcyREYxMUExREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzcyREYxMUIxREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NzJERjExODFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NzJERjExOTFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pmk/vzIAAAFiSURBVHjaYnz79i0DCDAB8X8gVgUIIEaoSBmIIQRkvAMIIBADJMUIxBVArI0sAAYAAQTTAwNlTEgcXZDpLFDOHCC+A8Sd6FoEAAIIJBAOZKxAEoTZmAPEKSxQSZitFVCz10D5O1iQdE4AYgsouwOKBUBWvAEyRKF+RQa+QLwFIIDQHYUM/gAxC8hfb6C6QTgLKvkaiGtAikBuUAHiD0g6QZJzob5gYUEz9jXUPU+AWAYWETDwG+o9mGQGLLAFoFbcBGJFIGaDagDHCrIV6ti8ArLCFoc3wf4HCDB84YANVEC9HwPEU4B4EiycQKEqgAUjx+F3INYHYkOoZh6YC0CeEUQLS2Qbi4HYCYgvQ8P8AhC3QOMaJRjRNf4C4m3QcP8ODd4QqM0dyIGEDgKgCtmgUf8dypeBamSERoEALi8sAuUnID4AxIegbHQA18OCRTKOlGgBeSECmuH+E4nfQPWAXQwAHbJ3VkYR2TIAAAAASUVORK5CYII=";
    },
  },
]);
