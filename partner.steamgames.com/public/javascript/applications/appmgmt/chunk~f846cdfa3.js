/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [4017],
  {
    40139: (e) => {
      e.exports = { profile_color_preview: "_2VqhO10AlkJOsh7sPoqPcp" };
    },
    93542: (e) => {
      e.exports = {
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
    46595: (e) => {
      e.exports = {
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
    51780: (e) => {
      e.exports = {
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
    92528: (e, t, i) => {
      "use strict";
      i.d(t, { Y: () => d });
      var n = i(7850),
        a = i(90626),
        s = i(95893),
        r = i(40139),
        o = i.n(r);
      function d(e) {
        const { rgGameProfileColorDefs: t } = e,
          i = t.map((e) =>
            (0, n.jsxs)(
              "div",
              {
                className: "form_row_flex",
                children: [
                  (0, n.jsxs)("div", {
                    className: "form_label_flex",
                    children: ["*", e.strProfileColorLabel],
                  }),
                  (0, n.jsx)("div", {
                    className: "form_data_flex",
                    children: c(e),
                  }),
                ],
              },
              e.strProfileColorKey,
            ),
          );
        return (0, n.jsx)("div", {
          className: o().profile_colors_ctn,
          children: i,
        });
      }
      function l(e) {
        const t = e.match(/rgba?\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/i);
        if (!t) return null;
        const [, i, n, a] = t;
        return `${i},${n},${a}`;
      }
      function c(e) {
        const { strKVPrepend: t, bWriteAsRGBOnly: i } = e;
        let [r, d] = a.useState(e.strCurrentColor);
        const c = a.useRef(void 0),
          { openColorPicker: p } = (0, s.p)();
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)("input", {
              ref: c,
              type: "text",
              name: `${t || "item[profile_colors]"}[${e.strProfileColorKey}]`,
              onChange: () => {
                d(c.current.value);
              },
              placeholder: i ? "255,255,255" : "rgba(255, 255, 255, .5)",
              size: 20,
              value: i ? l(r) : r,
              readOnly: !0,
            }),
            (0, n.jsx)("div", {
              className: o().profile_color_preview,
              style: { backgroundColor: `${r}` },
              onClick: (e) => {
                p(e, { color: r, onChange: d, disableAlpha: i });
              },
            }),
          ],
        });
      }
    },
    35863: (e, t, i) => {
      "use strict";
      i.d(t, { H: () => j });
      var n = i(7850),
        a = i(90626),
        s = i(93542),
        r = i(61859),
        o = i(21869),
        d = i(10411),
        l = i(52038),
        c = i(51614),
        p = i(41735),
        m = i.n(p),
        g = i(22797),
        _ = i(78327),
        h = i(12155);
      const u = 748,
        x = 896;
      class E {
        rgSet = new Set();
        constructor(e) {
          for (const t of e) this.rgSet.add(JSON.stringify(t));
        }
        has(e) {
          const t = JSON.stringify(e);
          return this.rgSet.has(t);
        }
        add(e) {
          const t = JSON.stringify(e);
          return this.rgSet.add(t), this;
        }
        delete(e) {
          const t = JSON.stringify(e);
          return this.rgSet.delete(t);
        }
        get size() {
          return this.rgSet.size;
        }
        *[Symbol.iterator]() {
          for (const e of this.rgSet) yield JSON.parse(e);
        }
      }
      function j(e) {
        const [t, i] = (0, a.useState)("closed"),
          p = e.rgEditions,
          [u, x] = (0, a.useState)(new E(p)),
          j = new Map();
        for (const t of Object.keys(e.rgEditionsComparisonGraphics))
          j.set(t, e.rgEditionsComparisonGraphics[t]);
        const [S, f] = (0, a.useState)(() => {
            const t = new Map();
            for (const i of Object.keys(e.rgEditionsAltText))
              t.set(i, e.rgEditionsAltText[i]);
            return t;
          }),
          [A, D] = (0, a.useState)(j),
          w = Object.keys(e.rgEditionsComparisonGraphics).length > 0,
          R = (function (e, t) {
            return (0, c.n)({
              mutationFn: async (i) => {
                const {
                    rgEditionsToSave: n,
                    rgGraphicsToDelete: a,
                    mapGraphicsToUpload: s,
                    mapAltText: r,
                  } = i,
                  o = new FormData();
                o.append("sessionid", (0, _.KC)());
                const d = Math.max(t.length, n.length);
                for (let e = 0; e < d; e++)
                  e >= n.length
                    ? (o.append(
                        `app[related_items][editions][${e}][packageid]`,
                        "",
                      ),
                      o.append(
                        `app[related_items][editions][${e}][bundleid]`,
                        "",
                      ))
                    : n[e].packageid
                      ? (o.append(
                          `app[related_items][editions][${e}][packageid]`,
                          "" + n[e].packageid,
                        ),
                        o.append(
                          `app[related_items][editions][${e}][bundleid]`,
                          "",
                        ))
                      : n[e].bundleid
                        ? (o.append(
                            `app[related_items][editions][${e}][packageid]`,
                            "",
                          ),
                          o.append(
                            `app[related_items][editions][${e}][bundleid]`,
                            "" + n[e].bundleid,
                          ))
                        : console.log(
                            "Tried to save an edition with neither packageid or bundleid.",
                          );
                s.forEach((e, t) => {
                  o.append(
                    `edition_comparison|edition_comparision|assets|edition_comparison|image|${t}`,
                    e,
                  );
                });
                for (const e of a)
                  o.append(`app[assets][edition_comparison][image][${e}]`, "");
                r.forEach((e, t) => {
                  o.append(
                    `app[assets][edition_comparison][image_alt_text][${t}]`,
                    e,
                  );
                });
                const l = `${_.TS.PARTNER_BASE_URL}admin/game/quickupdateajax/${e}`;
                return m().post(l, o);
              },
            });
          })(e.nItemId, p),
          v = new Map();
        for (const t of e.rgCandidates) v.set(t.nId, t);
        let N = null;
        if (
          u.size > 0 &&
          -1 !== e.nBasePackageId &&
          !u.has({ packageid: e.nBasePackageId })
        ) {
          const t = e.rgCandidates.find((t) => t.nId === e.nBasePackageId);
          N = (0, r.we)(
            "#StoreAdmin_EditEditions_MustIncludeCheapestBasePageError",
            t?.strName,
            e.nBasePackageId,
          );
        }
        const k = a.useId();
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(o.E, {
              active: "editor" === t || "alert" === t,
              children: (0, n.jsxs)(d.eV, {
                "aria-labelledby": k,
                closeModal: () => i("closed"),
                children: [
                  "editor" === t &&
                    (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsxs)("div", {
                          className: s.EditionsEditorContents,
                          children: [
                            (0, n.jsx)("h2", {
                              id: k,
                              children: (0, r.we)(
                                "#StoreAdmin_EditEditions_DialogTitle",
                              ),
                            }),
                            R.isPending && (0, n.jsx)(g.t, {}),
                            !R.isPending &&
                              (0, n.jsxs)(n.Fragment, {
                                children: [
                                  null !== N &&
                                    (0, n.jsxs)("div", {
                                      className: s.ErrorBox,
                                      children: [
                                        (0, n.jsx)(h.X, {}),
                                        (0, n.jsx)("div", { children: N }),
                                      ],
                                    }),
                                  (0, n.jsx)(b, {
                                    rgEditions: u,
                                    rgCandidates: e.rgCandidates,
                                    setEditions: x,
                                  }),
                                  (0, n.jsx)("div", {
                                    className: s.EditionPickerHr,
                                  }),
                                  (0, n.jsx)(C, {
                                    mapOriginalImages: j,
                                    mapImages: A,
                                    setImages: D,
                                    mapAltText: S,
                                    setAltText: f,
                                    bAppHasSteamChinaToolsEnabled:
                                      e.bAppHasSteamChinaToolsEnabled,
                                  }),
                                ],
                              }),
                          ],
                        }),
                        (0, n.jsxs)("div", {
                          className: s.EditionsEditorDialogButtons,
                          children: [
                            (0, n.jsx)("button", {
                              className: "btn_green_white_innerfade",
                              disabled: null !== N,
                              onClick: async () => {
                                const e = new Map();
                                A.forEach((t, i) => {
                                  t instanceof File && e.set(i, t);
                                });
                                const t = [];
                                j.forEach((e, i) => {
                                  A.has(i) || t.push(i);
                                }),
                                  R.mutate({
                                    rgEditionsToSave: Array.from(u),
                                    mapGraphicsToUpload: e,
                                    mapAltText: S,
                                    rgGraphicsToDelete: t,
                                  }),
                                  i("alert");
                              },
                              children: (0, r.we)(
                                "#StoreAdmin_EditEditions_SaveButton",
                              ),
                            }),
                            (0, n.jsx)("button", {
                              onClick: () => {
                                x(new E(p)), i("closed");
                              },
                              children: (0, r.we)(
                                "#StoreAdmin_EditEditions_CancelButton",
                              ),
                            }),
                          ],
                        }),
                        (0, n.jsx)("p", {
                          className: s.NeedToPublishNotification,
                          children: (0, r.oW)(
                            "#StoreAdmin_EditEditions_NeedToPublishNotice",
                            (0, n.jsx)("a", {
                              target: "_blank",
                              href: `${_.TS.PARTNER_BASE_URL}admin/game/edit/${e.nItemId}?activetab=tab_publish`,
                            }),
                          ),
                        }),
                      ],
                    }),
                  "alert" === t &&
                    (0, n.jsx)(n.Fragment, {
                      children: (0, n.jsxs)("div", {
                        className: s.EditionEditorContents,
                        children: [
                          (0, n.jsx)("h2", {
                            children: (0, r.we)(
                              "#StoreAdmin_EditEditions_SavingTitle",
                            ),
                          }),
                          (0, n.jsxs)("div", {
                            className: s.EditionsEditorSaveStatus,
                            children: [
                              R.isPending &&
                                (0, n.jsxs)(n.Fragment, {
                                  children: [
                                    (0, n.jsx)(g.t, {}),
                                    " ",
                                    (0, r.we)(
                                      "#StoreAdmin_EditEditions_Saving",
                                    ),
                                  ],
                                }),
                              !R.isPending &&
                                (0, n.jsx)("span", {
                                  children: (0, r.we)(
                                    "#StoreAdmin_EditEditions_Saved",
                                  ),
                                }),
                            ],
                          }),
                          (0, n.jsx)("span", {
                            className: s.PublishReminder,
                            children: (0, r.oW)(
                              "#StoreAdmin_EditEditions_NeedToPublishAlert",
                              (0, n.jsx)("a", {
                                target: "_blank",
                                href: `${_.TS.PARTNER_BASE_URL}admin/game/edit/${e.nItemId}?activetab=tab_publish`,
                              }),
                            ),
                          }),
                          (0, n.jsx)("div", {
                            className: s.EditionsEditorDialogButtons,
                            children: (0, n.jsx)("button", {
                              onClick: () => {
                                i("refreshing"), window.location.reload();
                              },
                              children: (0, r.we)(
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
            (e.rgCandidates.length > 1 || e.rgEditions.length > 0) &&
              (0, n.jsx)(n.Fragment, {
                children: (0, n.jsxs)("div", {
                  className: (0, l.A)(
                    s.EditionsEditorRow,
                    w && s.ImageProvided,
                  ),
                  children: [
                    "closed" === t &&
                      (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsx)("button", {
                            className: s.OpenEditorButton,
                            onClick: () => i("editor"),
                            children: (0, r.we)(
                              "#StoreAdmin_EditEditions_ManageEditionsButton",
                            ),
                          }),
                          u?.size > 0
                            ? (0, n.jsx)("span", {
                                children: (0, r.we)(
                                  "#StoreAdmin_EditEditions_ManageEditionsDescription",
                                  u.size,
                                ),
                              })
                            : (0, n.jsx)("span", {
                                children: (0, r.we)(
                                  "#StoreAdmin_EditEditions_GroupEditionsDescription",
                                ),
                              }),
                          (0, n.jsx)("span", {
                            children: w
                              ? (0, n.jsx)("span", {
                                  className: (0, l.A)(
                                    s.TaskDone,
                                    "icon_check_green",
                                  ),
                                  children: (0, r.we)(
                                    "#StoreAdmin_EditEditions_ManageEditions_HasComparisonGraphic",
                                  ),
                                })
                              : (0, r.we)(
                                  "#StoreAdmin_EditEditions_ManageEditions_NoComparisonGraphic",
                                ),
                          }),
                        ],
                      }),
                    "refreshing" === t &&
                      (0, n.jsx)(n.Fragment, {
                        children: (0, n.jsx)(g.t, { size: "small" }),
                      }),
                  ],
                }),
              }),
          ],
        });
      }
      const S = (e) =>
        "bundle" === e.eType ? { bundleid: e.nId } : { packageid: e.nId };
      function b(e) {
        const { rgEditions: t, rgCandidates: i, setEditions: o } = e,
          d = new Map();
        for (const t of e.rgCandidates) d.set(t.nId, t);
        const [c, p] = (0, a.useState)(""),
          m = i.filter(
            (e) => -1 !== e.strName.toLowerCase().indexOf(c.toLowerCase()),
          );
        return (0, n.jsxs)("div", {
          className: s.EditionPicker,
          children: [
            (0, n.jsx)("p", {
              children: (0, r.oW)(
                "#StoreAdmin_EditEditions_GroupEditionsIntro",
                (0, n.jsx)("a", {
                  target: "_blank",
                  href: `${_.TS.PARTNER_BASE_URL}doc/store/manageeditions`,
                }),
              ),
            }),
            (0, n.jsx)("br", {}),
            (0, n.jsx)("h3", {
              children: (0, r.we)("#StoreAdmin_EditEditions_StepNumber1"),
            }),
            (0, n.jsx)("p", {
              children: (0, r.we)(
                "#StoreAdmin_EditEditions_SelectEditionsDescription",
              ),
            }),
            (0, n.jsx)("div", {
              className: s.EditionPickerFilterBox,
              children: (0, n.jsx)("input", {
                type: "text",
                placeholder: (0, r.we)(
                  "#StoreAdmin_EditEditions_FilterDescription",
                ),
                value: c,
                onChange: (e) => {
                  const t = e.target.value;
                  p(t);
                },
              }),
            }),
            (0, n.jsxs)("table", {
              children: [
                (0, n.jsx)("thead", {
                  children: (0, n.jsxs)("tr", {
                    children: [
                      (0, n.jsx)("td", {
                        children: (0, r.we)(
                          "#StoreAdmin_EditEditions_ColumnEdition",
                        ),
                      }),
                      (0, n.jsx)("td", {
                        children: (0, r.we)(
                          "#StoreAdmin_EditEditions_ColumnPackageTitle",
                        ),
                      }),
                      (0, n.jsx)("td", {
                        children: (0, r.we)(
                          "#StoreAdmin_EditEditions_ColumnState",
                        ),
                      }),
                      (0, n.jsx)("td", {
                        children: (0, r.we)(
                          "#StoreAdmin_EditEditions_ColumnPrice",
                        ),
                      }),
                    ],
                  }),
                }),
                (0, n.jsx)("tbody", {
                  children: m.map((e) => {
                    const i = t.has(S(e));
                    let a = s.HiddenColor;
                    return (
                      "Released" === e.strReleaseState
                        ? (a = s.ReleasedColor)
                        : "Prepurchase" === e.strReleaseState
                          ? (a = s.PrepurchaseColor)
                          : "Beta" === e.strReleaseState && (a = s.BetaColor),
                      (0, n.jsxs)(
                        "tr",
                        {
                          className: (0, l.A)(a, s.EditionPickerRow),
                          children: [
                            (0, n.jsx)("td", {
                              children: (0, n.jsx)("input", {
                                type: "checkbox",
                                onChange:
                                  ((r = e.eType),
                                  (d = e.nId),
                                  (e) => {
                                    const i = new E(t);
                                    e.target.checked
                                      ? i.add(
                                          "package" === r
                                            ? { packageid: d }
                                            : { bundleid: d },
                                        )
                                      : i.delete(
                                          "package" === r
                                            ? { packageid: d }
                                            : { bundleid: d },
                                        ),
                                      o(i);
                                  }),
                                checked: i,
                              }),
                            }),
                            (0, n.jsx)("td", { children: e.strName }),
                            (0, n.jsx)("td", {
                              children: e.strLocalizedReleaseState,
                            }),
                            (0, n.jsx)("td", {
                              dangerouslySetInnerHTML: { __html: e.strPricing },
                            }),
                          ],
                        },
                        e.nId,
                      )
                    );
                    var r, d;
                  }),
                }),
              ],
            }),
          ],
        });
      }
      function C(e) {
        const {
            mapOriginalImages: t,
            mapImages: i,
            setImages: o,
            mapAltText: d,
            setAltText: l,
            bAppHasSteamChinaToolsEnabled: c,
          } = e,
          [p, m] = (0, a.useState)(null),
          g = (0, r.O9)(e.bAppHasSteamChinaToolsEnabled),
          [_, E] = (0, a.useState)("english"),
          j = (0, a.useRef)(null);
        let S = null,
          b = "missing";
        if (i.has(_)) {
          const e = i.get(_);
          e instanceof File
            ? ((S = URL.createObjectURL(e)), (b = "uploaded"))
            : ((S = e), (b = "exists"));
        }
        const C = (e) =>
          i.has(e) && i.get(e) instanceof File
            ? s.UploadedImageOption
            : i.has(e)
              ? s.ExistsImageOption
              : s.MissingImageOption;
        return (0, n.jsxs)("div", {
          className: s.LocalizedImageSelector,
          children: [
            (0, n.jsx)("h3", {
              children: (0, r.we)("#StoreAdmin_EditEditions_StepNumber2"),
            }),
            (0, n.jsx)("p", {
              children: (0, r.we)(
                "#StoreAdmin_EditEditions_UploadComparisonGraphicsDescription",
                u,
                x,
              ),
            }),
            (0, n.jsxs)("div", {
              className: s.Header,
              children: [
                (0, n.jsx)("input", {
                  type: "file",
                  ref: j,
                  onChange: async (e) => {
                    if (e.target.files && e.target.files[0]) {
                      const t = e.target.files[0],
                        n = await createImageBitmap(t);
                      if (n.width !== u || n.height !== x)
                        return void m(
                          (0, r.we)(
                            "#StoreAdmin_EditEditions_ImageSizeError",
                            u,
                            x,
                            n.width,
                            n.height,
                          ),
                        );
                      const a = new Map(i);
                      a.set(_, t), o(a), m(null);
                    }
                  },
                  style: { display: "none" },
                }),
                (0, n.jsx)("select", {
                  onChange: (e) => {
                    E(e.target.value), m(null);
                  },
                  className: C(_),
                  children: (0, r.vR)(g, (e, t) =>
                    (0, n.jsx)(
                      "option",
                      { value: t, className: C(t), children: e },
                      t,
                    ),
                  ),
                }),
              ],
            }),
            (0, n.jsx)("p", {
              className: s.ErrorBox,
              children:
                null !== p &&
                (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(h.X, {}), p] }),
            }),
            (0, n.jsx)("div", {
              className: s.ImageDropPane,
              onClick: () => j.current?.click(),
              onDragOver: (e) => e.preventDefault(),
              onDrop: async (e) => {
                if (
                  (e.preventDefault(),
                  e.dataTransfer.files && e.dataTransfer.files[0])
                ) {
                  const t = e.dataTransfer.files[0],
                    n = await createImageBitmap(t);
                  if (n.width !== u || n.height !== x)
                    return void m(
                      (0, r.we)(
                        "#StoreAdmin_EditEditions_ImageSizeError",
                        u,
                        x,
                        n.width,
                        n.height,
                      ),
                    );
                  const a = new Map(i);
                  a.set(_, t), o(a), m(null);
                }
              },
              children: S
                ? (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsx)("div", {
                        className: s.DragAndDropDescriptionWithImage,
                        children: (0, r.we)(
                          "#StoreAdmin_EditEditions_DragAndDropToReplace",
                        ),
                      }),
                      (0, n.jsx)("img", { src: S }),
                      (0, n.jsx)("div", {
                        className: s.DeleteLink,
                        children: (0, n.jsx)("a", {
                          onClick: () => {
                            if (i.has(_)) {
                              const e = new Map(i);
                              e.delete(_), o(e), m(null);
                            }
                          },
                          children: (0, r.we)(
                            "#StoreAdmin_EditEditions_Delete",
                          ),
                        }),
                      }),
                    ],
                  })
                : (0, n.jsx)("div", {
                    className: s.DragAndDropDescriptionWithoutImage,
                    children: (0, r.we)(
                      "#StoreAdmin_EditEditions_DragAndDropHere",
                    ),
                  }),
            }),
            (0, n.jsx)("h3", {
              children: (0, r.we)("#StoreAdmin_EditEditions_StepNumber3"),
            }),
            (0, n.jsx)("label", {
              htmlFor: "altTextArea",
              children: (0, n.jsx)("p", {
                children: (0, r.we)(
                  "#StoreAdmin_EditEditions_AltTextDescription",
                ),
              }),
            }),
            (0, n.jsx)("textarea", {
              id: "altTextArea",
              className: s.AltTextArea,
              onChange: (e) => {
                const t = new Map(d);
                t.set(_, e.target.value), l(t);
              },
              value: d.get(_) ?? "",
            }),
          ],
        });
      }
    },
    39679: (e, t, i) => {
      "use strict";
      i.d(t, { Ll: () => c, ut: () => l });
      var n = i(7850),
        a = i(90626),
        s = i(63369),
        r = i(16676),
        o = i(61859);
      const d = [
          "date_full",
          "date_month",
          "date_quarter",
          "date_year",
          "text_comingsoon",
          "text_tba",
        ],
        l = ["date_full", "date_month", "date_quarter"];
      function c(e) {
        const {
            rtSteamReleaseDate: t,
            value: i,
            onChange: l,
            rgComingSoonOptionOverride: c,
            bExpandedDisplay: p,
          } = e,
          m = !!t,
          g = a.useMemo(
            () =>
              (c || d).map((e) => ({
                label: (0, s.M)(e, t, null, p),
                data: e,
              })),
            [t, c, p],
          ),
          _ = a.useCallback(
            (e) => {
              l(e.data);
            },
            [l],
          ),
          h = t
            ? (0, o.we)("#GameEdit_ComingSoon_SelectAnOption")
            : (0, o.we)("#App_Landing_NoDateSelected");
        return (0, n.jsx)(r.ZU, {
          disabled: !m,
          strDefaultLabel: h,
          rgOptions: g,
          selectedOption: m ? i : null,
          onChange: _,
        });
      }
    },
    67045: (e, t, i) => {
      "use strict";
      i.d(t, { M: () => F });
      var n = i(7850),
        a = i(90626),
        s = i(63369),
        r = i(61859),
        o = i(91675),
        d = i(46595),
        l = i(12155),
        c = i(41735),
        p = i.n(c),
        m = i(70986),
        g = i(20194),
        _ = i(37085),
        h = i(16676),
        u = i(99637),
        x = i(9154),
        E = i(22797),
        j = i(7860),
        S = i(61336),
        b = i(78327),
        C = i(39679),
        f = i(51780);
      function A(e) {
        const { appid: t, onClose: i, onCommit: s } = e,
          [o, d] = a.useState(null),
          {
            data: l,
            isLoading: c,
            isLoadingError: m,
          } = (function (e) {
            return (0, g.I)({
              queryKey: ["ReleaseRequest", e],
              queryFn: async () => {
                const t = await p().get(
                  `${b.TS.PARTNER_BASE_URL}apprelease/ajaxgetreleaserequest/${e}`,
                );
                if ("string" == typeof t.data)
                  throw "Error loading release status";
                return { appid: e, ...t?.data };
              },
            });
          })(t),
          _ = "prerelease" == l?.strReleaseState,
          h = a.useCallback(
            (e, i) => {
              j.L.invalidateQueries({ queryKey: ["ReleaseRequest", t] }),
                s(e, i, _);
            },
            [t, s, _],
          );
        let u = (0, n.jsx)(R, { setOnOKButton: d, onCommit: h });
        return (
          m
            ? (u = (0, n.jsx)(v, {
                strError: (0, r.we)("#Error_ErrorCommunicatingWithNetwork"),
              }))
            : (!c && l) || (u = (0, n.jsx)(E.t, {})),
          (0, n.jsx)(D.Provider, {
            value: l,
            children: (0, n.jsx)(k, {
              fnSubmit: o,
              fnCloseModal: i,
              children: u,
            }),
          })
        );
      }
      const D = a.createContext(null);
      function w() {
        return a.useContext(D);
      }
      const R = a.memo(function (e) {
        const {
            appid: t,
            bCanUpdateComingSoonDate: i,
            rtReleaseDate: s,
            strComingSoonDisplay: o,
          } = w(),
          { setOnOKButton: d, onCommit: l } = e,
          [c, m] = a.useState(s),
          [g, u] = a.useState(o || void 0),
          [x, E] = a.useState("none"),
          [j, A] = a.useState(),
          D = a.useCallback((e) => {
            A(e), E("none");
          }, []),
          R = a.useCallback(() => {
            if (c)
              if (g) {
                E("submitting"), A(null);
                (async function (e) {
                  const {
                      unAppID: t,
                      rtReleaseDate: i,
                      strComingSoonDisplay: n,
                    } = e,
                    a = `${b.TS.PARTNER_BASE_URL}apprelease/ajaxupdatereleaserequest/${t}`,
                    s = new FormData();
                  s.append("sessionid", (0, b.KC)()),
                    i && s.append("release_date", i.toString());
                  s.append("coming_soon_display", n);
                  const o = await p().post(a, s);
                  if (!o.data || o.data.success != _.R)
                    throw (0, r.we)(
                      "#Error_Description",
                      o.data?.success,
                      o.data?.error_message || "unknown",
                    );
                })({
                  unAppID: t,
                  rtReleaseDate: i ? c : null,
                  strComingSoonDisplay: g,
                })
                  .then(() => {
                    E("refreshing"), l(c, g);
                  })
                  .catch((e) => {
                    D(e);
                  });
              } else
                D(
                  (0, r.we)("#App_Landing_ReleaseDate_Error_ComingSoonDisplay"),
                );
            else D((0, r.we)("#App_Landing_ReleaseDate_Error_NoDate"));
          }, [t, c, g, i, l, D]);
        return (
          a.useEffect(() => {
            d("none" == x ? () => R : null);
          }, [R, i, x, d]),
          (0, n.jsxs)(n.Fragment, {
            children: [
              j && (0, n.jsx)(v, { strError: j }),
              (0, n.jsx)(N, {}),
              (0, n.jsxs)(h.dR, {
                children: [
                  (0, n.jsxs)(T, {
                    label: (0, r.we)("#App_Landing_IntendedReleaseDateTitle"),
                    children: [
                      (0, n.jsx)(P, { rtSelectedDate: c, setSelectedDate: m }),
                      (0, n.jsx)(L, {}),
                    ],
                  }),
                  (0, n.jsxs)(T, {
                    label: (0, r.we)("#App_Landing_PublicDateDisplayTitle"),
                    children: [
                      (0, n.jsx)(C.Ll, {
                        rtSteamReleaseDate: c,
                        value: g,
                        onChange: u,
                      }),
                      (0, n.jsx)("p", {
                        children: (0, r.we)(
                          "#App_Landing_ReleaseDateStorePage",
                        ),
                      }),
                      (0, n.jsx)("p", {
                        children: (0, r.we)(
                          "#App_Landing_ReleaseDateStoreListing",
                        ),
                      }),
                    ],
                  }),
                ],
              }),
              (0, n.jsx)("div", {
                className: f.ReleaseColumnFooter,
                children: (0, r.oW)(
                  "#App_Landing_NeedHelpWithReleaseDates",
                  (0, n.jsx)("a", {
                    target: "_blank",
                    href: `${b.TS.PARTNER_BASE_URL}doc/store/coming_soon`,
                  }),
                  (0, n.jsx)("a", {
                    target: "_blank",
                    href: `${(0, S.GX)()}wizard/HelpWithPublishing`,
                  }),
                ),
              }),
              (0, n.jsx)(I, {}),
            ],
          })
        );
      });
      function v(e) {
        const { strError: t } = e;
        return (0, n.jsx)("div", { className: f.ErrorBox, children: t });
      }
      function N() {
        const {
          bIsComingSoon: e,
          bIsStorePageReviewed: t,
          bIsWaitingForBuildReview: i,
          bIsFirstSelfPublishingApp: a,
          rtEarliestDate: s,
          bRequiresReleaseWaitingPeriod: o,
        } = w();
        return e && t
          ? i
            ? (0, n.jsx)(B, {
                children: (0, r.we)(
                  "#App_Landing_Release_EarliestDate_BuildReview",
                ),
              })
            : (0, n.jsx)(B, {
                children: (0, r.we)(
                  "#App_Landing_Release_EarliestDate",
                  (0, r.$z)(s),
                ),
              })
          : a && o
            ? (0, n.jsx)(B, {
                children: (0, r.we)(
                  "#App_Landing_Release_EarliestDate_TwoWeeks30Days",
                ),
              })
            : o
              ? (0, n.jsx)(B, {
                  children: (0, r.we)(
                    "#App_Landing_Release_EarliestDate_TwoWeeks",
                  ),
                })
              : null;
      }
      function k(e) {
        const { fnCloseModal: t, fnSubmit: i, children: a } = e,
          { bCanUpdateComingSoonDate: s } = w() || {
            bCanUpdateComingSoonDate: !0,
          };
        return (0, n.jsxs)(x.mt, {
          active: !0,
          className: f.ReleaseDateModal,
          onDismiss: t,
          children: [
            (0, n.jsx)(h.Y9, {
              children: (0, r.we)(
                s
                  ? "#App_Landing_Set_Release_Date"
                  : "#App_Landing_Change_Release_Date",
              ),
            }),
            (0, n.jsx)(h.nB, {
              className: f.ReleaseDateRequestBody,
              children: a,
            }),
            (0, n.jsx)(h.CB, {
              bOKDisabled: !i,
              onCancel: t,
              strCancelText: (0, r.we)("#App_Landing_Requested_Date_Cancel"),
              onOK: i,
              strOKText: (0, r.we)("#App_Landing_Requested_Date_Update"),
            }),
          ],
        });
      }
      function T(e) {
        const { label: t, children: i } = e;
        return (0, n.jsxs)(h.VP, {
          className: f.Column,
          children: [
            (0, n.jsxs)("div", {
              className: f.ColumnLabel,
              children: [t, ":"],
            }),
            (0, n.jsx)("div", { className: f.ColumnContent, children: i }),
          ],
        });
      }
      function P(e) {
        const { rtSelectedDate: t, setSelectedDate: i } = e,
          { bCanUpdateComingSoonDate: a, rtEarliestDate: s } = w();
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsx)(u.K, {
            bWeekdaysOnly: !0,
            bNoDefaultDate: !0,
            disabled: !a,
            nEarliestTime: s,
            fnGetTimeToUpdate: () => t,
            fnSetTimeToUpdate: i,
            className: f.DatePicker,
            bShowTimeZone: !0,
            strAlsoShowTimeZone: m.o,
          }),
        });
      }
      function L(e) {
        const { bCanUpdateComingSoonDate: t, rtReleaseDate: i } = w();
        return t
          ? (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsx)("p", {
                  children: (0, r.we)(
                    "#App_Landing_Set_Release_Date_SetIntended",
                  ),
                }),
                (0, n.jsx)("p", {
                  children: (0, r.we)("#App_Landing_Set_Release_Date_Weekends"),
                }),
                (0, n.jsx)("p", {
                  children: (0, r.we)(
                    "#App_Landing_Set_Release_Date_PacificTime",
                  ),
                }),
              ],
            })
          : (0, n.jsx)("p", {
              children: (0, r.oW)(
                (0, r.we)(
                  "#App_Landing_Set_Release_Date_ComingSoonWarning_CantSet_Desc",
                  (0, r.$z)(i),
                ),
                (0, n.jsx)("a", {
                  href: `${(0, S.GX)()}wizard/HelpWithPublishing?issueid=905`,
                }),
              ),
            });
      }
      function B(e) {
        return (0, n.jsx)("span", {
          className: f.BlueNote,
          children: e.children,
        });
      }
      function I(e) {
        const {
          rtEarliestDate: t,
          strReleaseState: i,
          bCanUpdateComingSoonDate: a,
        } = w();
        return "prerelease" != i || a
          ? null
          : (0, n.jsx)("div", {
              className: f.PublishNowWarning,
              children: (0, r.we)(
                "#App_Landing_Set_Release_Date_ComingSoonWarning_CantSet_Note",
                (0, r.$z)(t),
              ),
            });
      }
      var y = i(52038),
        O = i(96409);
      function F(e) {
        const {
            bIsGameEdit: t,
            unAppID: i,
            rgEarliestAdvancedAccessDate: o,
          } = e,
          [c, p] = a.useState(e.rtReleaseDate),
          [m, g] = a.useState(e.strComingSoonDisplay),
          [_, h] = a.useState(!1),
          [u, x] = a.useState(!1),
          E = a.useCallback(() => h(!0), []),
          j = a.useCallback(() => h(!1), []),
          S = a.useCallback((e, t, i) => {
            p(e), g(t), h(!1), i && x(!0);
          }, []);
        return (0, n.jsxs)(n.Fragment, {
          children: [
            _ && (0, n.jsx)(A, { appid: i, onClose: j, onCommit: S }),
            u &&
              (0, n.jsx)(U, {
                appid: i,
                bIsGameEdit: t,
                closeModal: () => x(!1),
              }),
            (0, n.jsxs)("div", {
              className: (0, y.A)(d.ReleaseDateInfoCtn, t && d.GameEditCtn),
              children: [
                (0, n.jsxs)("div", {
                  className: d.ReleaseDateContent,
                  children: [
                    (0, n.jsx)($, {
                      label: (0, r.we)("#App_Landing_SpecifiedReleaseDate"),
                      children: (0, n.jsx)(M, { rtReleaseDate: c }),
                    }),
                    (0, n.jsx)($, {
                      label: (0, r.we)("#App_Landing_CustomersSeeReleaseDate"),
                      children: (0, n.jsx)("div", {
                        className: (0, y.A)(d.BigField, m ? d.Set : d.Unset),
                        children: m
                          ? (0, s.M)(m, c)
                          : (0, r.we)("#App_Landing_UnsetReleaseDate"),
                      }),
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: d.EditButton,
                  onClick: E,
                  children: [
                    (0, n.jsx)("div", { className: (0, y.A)(d.Spacer, d.Top) }),
                    (0, n.jsx)("div", {
                      className: d.EditButtonIcon,
                      children: (0, n.jsx)(l.ffu, {}),
                    }),
                    (0, n.jsx)("div", {
                      className: (0, y.A)(d.Spacer, d.Bottom),
                    }),
                  ],
                }),
              ],
            }),
            1e3 * o > new Date().getTime() &&
              (0, n.jsx)($, {
                label: (0, r.we)("#App_Landing_EarliestAdvancedAccessDate"),
                children: (0, n.jsx)(M, { rtReleaseDate: o }),
              }),
          ],
        });
      }
      function M(e) {
        const { rtReleaseDate: t } = e;
        return t
          ? (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsx)("div", {
                  className: (0, y.A)(d.BigField, d.Set),
                  children: (0, r.$z)(t),
                }),
                (0, n.jsx)("div", {
                  className: (0, y.A)(d.SubField, d.Set),
                  children: (0, o.KC)(t, {}, { timeZoneName: "short" }),
                }),
              ],
            })
          : (0, n.jsx)("div", {
              className: (0, y.A)(d.BigField, d.Unset),
              children: (0, r.we)("#App_Landing_UnsetReleaseDate"),
            });
      }
      function $(e) {
        return (0, n.jsxs)("div", {
          className: d.LabelField,
          children: [
            (0, n.jsx)("div", { className: d.Label, children: e.label }),
            e.children,
          ],
        });
      }
      function U(e) {
        const { appid: t, bIsGameEdit: i, closeModal: s } = e,
          o = a.useCallback(() => {
            i
              ? (window.TabSelect("tab_publish"), window.scrollTo(0, 0))
              : (window.location.href =
                  O.bI.GameEditByAppID(t.toString()) +
                  "?activetab=tab_publish"),
              s();
          }, [t, i, s]);
        return (0, n.jsx)(x.EN, {
          active: !0,
          children: (0, n.jsx)(x.o0, {
            strTitle: (0, r.we)("#App_Landing_ReleaseDate_ChangesSaved"),
            strDescription: (0, r.we)(
              "#App_Landing_Release_PublishStorePrompt",
            ),
            strOKButtonText: (0, r.we)("#App_Landing_Release_PrepareToPublish"),
            onOK: o,
            strCancelButtonText: (0, r.we)("#Button_OK"),
            closeModal: s,
          }),
        });
      }
    },
    96409: (e, t, i) => {
      "use strict";
      i.d(t, { Cg: () => r, _h: () => s, a3: () => a, bI: () => n });
      let n = {
        GameEdit: (e, t) => `/admin/game/${e}/${t}`,
        PackageEdit: (e, t) => `/admin/store/${e}/${t}`,
        BundleEdit: (e, t) => `/bundles/${e}/${t}`,
        GameEditByAppID: (e) => `/admin/game/editbyappid/${e}`,
        ReviewPriceProposals: () => "/admin/reviewpricesubmissions/",
        PackagePricingComparison: () => "/admin/packagepricingcomparison/",
        PackageLanding: (e) => `/store/packagelanding/${e}`,
        FrontPageEdit: (e) => `/admin/store/pageclusteredit/frontpage/${e}`,
        FrontPageSteamChinaEdit: (e) =>
          `/admin/store/pageclusteredit/frontpage_china/${e}`,
        ContentHubEditor: (e, t) =>
          `/admin/store/pageclusteredit/content_hub_${t}/${e}`,
        StoreAdminCreatorHome: () => "/admin/creatorhome",
      };
      const a = ["edit", "diff", "revert", "prepare", "publish"],
        s = [
          "package",
          "packagesave",
          "packagediff",
          "packagerevert",
          "packageprepare",
          "packagepublish",
        ],
        r = ["view", "preparestore", "revertstore", "savestore", "publish"];
    },
  },
]);
