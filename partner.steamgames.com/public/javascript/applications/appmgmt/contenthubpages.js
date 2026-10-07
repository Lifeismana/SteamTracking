/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [23025],
    {
      98912: (H, U, r) => {
        "use strict";
        r.r(U), r.d(U, { ContentHubRoutes: () => de, default: () => xe });
        var e = r(7850),
          d = r(90783),
          G = r(17083),
          Y = r(92757),
          y = r(85873),
          E = r(18210);
        function c(i) {
          const s = (t) =>
            (0, y.tV)() ? (0, E.we)("#Generel_Discard_Warning") : !0;
          return (0, e.jsx)(Y.XG, { message: s });
        }
        var a = r(58732),
          b = r(58952),
          h = r(18735),
          O = r(31553),
          x = r(90626),
          ee = r(77411),
          ie = r(45737),
          k = r.n(ie),
          S = r(58534),
          $ = r(2801),
          te = r(88003),
          F = r(91512),
          ge = r(36118),
          w = r(85599),
          le = r(41735),
          he = r(3166),
          me = r(72609);
        const ne = null;
        function K() {
          return ne.includes(UserConfig.country_code);
        }
        const q = [h.ED, h.M, h.mx, h.T4, h.u7];
        function Ce(i) {
          let s = [];
          switch (i) {
            case EContentDescriptorID.k_EContentDescriptor_AnyMatureContent:
              s.push(
                EContentDescriptorID.k_EContentDescriptor_FrequentViolenceOrGore,
              ),
                s.push(
                  EContentDescriptorID.k_EContentDescriptor_NudityOrSexualContent,
                );
            case EContentDescriptorID.k_EContentDescriptor_NudityOrSexualContent:
              s.push(
                EContentDescriptorID.k_EContentDescriptor_GratuitousSexualContent,
              );
            case EContentDescriptorID.k_EContentDescriptor_GratuitousSexualContent:
              s.push(
                EContentDescriptorID.k_EContentDescriptor_AdultOnlySexualContent,
              );
              break;
          }
          return s;
        }
        let J = new Map();
        J.set(h.M, h.ED),
          J.set(h.mx, h.ED),
          J.set(h.T4, h.mx),
          J.set(h.u7, h.T4);
        function _(i) {
          let s = [],
            t = J.get(i);
          return t && (s.push(t), s.push(..._(t))), s;
        }
        function pe(i) {
          return useQuery({
            queryKey: [
              "examples_for_content_descriptor",
              i === null ? null : i.valueOf(),
            ],
            queryFn: async () => {
              if (i === null) return [];
              const s = new URLSearchParams();
              return (
                s.append("filter", "examplesforcontentdescriptors"),
                s.append("ignore_preferences", "1"),
                s.append("category1", "992,994,998"),
                s.append("descids", i.valueOf().toString()),
                s.append("json", "1"),
                (
                  await axios({
                    url: `${Config.STORE_BASE_URL}search/results/?${s.toString()}`,
                    method: "GET",
                    responseType: "json",
                  })
                ).data.items
              );
            },
          });
        }
        function ce(i) {
          let s = null;
          switch (i) {
            case h.ED:
              s = "#ContentDescriptor_GeneralMatureContent";
              break;
            case h.M:
              s = "#ContentDescriptor_FrequentViolenceOrGore";
              break;
            case h.mx:
              s = "#ContentDescriptor_NudityOrSexualContent";
              break;
            case h.T4:
              s = "#ContentDescriptor_GratuitousNudityOrSexualContent";
              break;
            case h.u7:
              s = "#ContentDescriptor_AdultOnlySexualContent";
              break;
            default:
              throw "Invalid content descriptor.";
          }
          return (0, E.we)(s);
        }
        function g(i, s = !1) {
          let t = "";
          switch (i) {
            case EContentDescriptorID.k_EContentDescriptor_AnyMatureContent:
              t += Localize(
                "#ContentDescriptor_GeneralMatureContent_Description",
              );
              break;
            case EContentDescriptorID.k_EContentDescriptor_FrequentViolenceOrGore:
              t += Localize(
                "#ContentDescriptor_FrequentViolenceOrGore_Description",
              );
              break;
            case EContentDescriptorID.k_EContentDescriptor_NudityOrSexualContent:
              t += Localize(
                "#ContentDescriptor_NudityOrSexualContent_Description",
              );
              break;
            case EContentDescriptorID.k_EContentDescriptor_GratuitousSexualContent:
              t += Localize(
                "#ContentDescriptor_GratuitousNudityOrSexualContent_Description",
              );
              break;
            case EContentDescriptorID.k_EContentDescriptor_AdultOnlySexualContent:
              t += Localize(
                "#ContentDescriptor_AdultOnlySexualContent_Description",
              );
              break;
            default:
              throw "Invalid content descriptor.";
          }
          return (
            s &&
              (i ===
                EContentDescriptorID.k_EContentDescriptor_GratuitousSexualContent ||
                i ===
                  EContentDescriptorID.k_EContentDescriptor_AdultOnlySexualContent) &&
              (t += " " + Localize("#ContentDescriptor_Affirm18YearsOld")),
            t
          );
        }
        function C() {
          return [
            EContentDescriptorID.k_EContentDescriptor_AdultOnlySexualContent,
            EContentDescriptorID.k_EContentDescriptor_GratuitousSexualContent,
            EContentDescriptorID.k_EContentDescriptor_NudityOrSexualContent,
          ];
        }
        function m() {
          return [
            EContentDescriptorID.k_EContentDescriptor_AdultOnlySexualContent,
            EContentDescriptorID.k_EContentDescriptor_GratuitousSexualContent,
          ];
        }
        function P(i) {
          return !UserConfig.logged_in ||
            !i ||
            !i.content_descriptors_to_exclude
            ? C()
            : i.content_descriptors_to_exclude.map(
                (s) => s.content_descriptorid,
              );
        }
        var B = r(22880),
          M = r(54963),
          N = r(98609),
          v = r(39077),
          I = r(92237),
          T = r(4940),
          l = r.n(T),
          A = r(179);
        const j = x.memo(function () {
          const [s, t] = x.useState(),
            [n, o] = x.useState(!1),
            [p, D] = x.useState(!1),
            [f, u] = x.useState(!1);
          x.useEffect(() => {
            (0, y.GX)().then((W) => {
              t(W.rgCategories), u(W.bHasUnpublishedChanges), o(!0);
            });
          }, []);
          const L = x.useCallback((W) => {
            t(W), D(!0);
          }, []);
          return n
            ? (0, e.jsxs)("div", {
                className: k().AdminPageCtn,
                children: [
                  (0, e.jsx)("div", {
                    className: k().PageTitle,
                    children: "Content Hub Categories",
                  }),
                  (0, e.jsx)("hr", { className: l().TitleHR }),
                  (0, e.jsxs)("p", {
                    children: [
                      "This page lets you review and edit existing categories. Click on their titles.  At the bottom there is controls to create a new category. To see the hubs performance related to making a theme sale ",
                      (0, e.jsx)("a", {
                        href: `${N.TS.PARTNER_BASE_URL}promotion/planning/themes`,
                        children: "here.",
                      }),
                    ],
                  }),
                  (0, e.jsx)("a", {
                    href: "https://grafana.valve.org/steam/d/RoUHA6bWk/tag-hubs?orgId=2&refresh=5m",
                    target: "_blank",
                    children: "Content Hub Graphana Stats Page",
                  }),
                  (0, e.jsx)("div", {
                    className: k().PageSubTitle,
                    children: "Categories",
                  }),
                  f &&
                    (0, e.jsx)("div", {
                      className: l().UnpublishedChangesNotice,
                      children:
                        "You have unpublished changes. Click Publish below to publish and make them available to users.",
                    }),
                  (0, e.jsx)(z, { categories: s, onUpdate: L }),
                  (0, e.jsxs)("div", {
                    className: l().ActionButtonCtn,
                    children: [
                      (0, e.jsx)(S.jn, {
                        onClick: () =>
                          (0, te.pg)(
                            (0, e.jsx)(Ae, {
                              categories: s,
                              onSave: () => {
                                D(!1), u(!0);
                              },
                            }),
                            window,
                          ),
                        children: p
                          ? (0, e.jsx)(e.Fragment, { children: "Save" })
                          : (0, e.jsxs)(e.Fragment, {
                              children: [(0, e.jsx)(ge.Jlk, {}), "Saved"],
                            }),
                      }),
                      (0, e.jsx)(S.$n, {
                        onClick: () =>
                          (0, te.pg)(
                            (0, e.jsx)(ye, { onPublish: () => u(!1) }),
                            window,
                          ),
                        children: "Publish",
                      }),
                    ],
                  }),
                ],
              })
            : (0, e.jsx)(w.t, { size: "medium", position: "center" });
        });
        function z(i) {
          const { categories: s, onUpdate: t } = i,
            { rgTags: n } = (0, y.DT)(),
            [o] = (0, A.QD)("edit");
          if (!s)
            return (0, e.jsx)("div", { children: "No categories defined." });
          const p = () => {
              t((u) => {
                let L = 0;
                for (const W of u)
                  W.id && Number(W.id) > L && (L = Number(W.id));
                return [...u, { handle: "new_category_" + s.length, id: ++L }];
              });
            },
            D = (u) => {
              t((L) => L.filter((W, R) => R != u));
            },
            f = (u) => {
              t((L) => L.map((W) => (W.id === u.id ? u : W)));
            };
          return (0, e.jsxs)("div", {
            className: l().CategoriesList,
            children: [
              (0, e.jsx)(F.A, {
                bDisabled: !0,
                items: s,
                onDelete: D,
                render: (u) =>
                  (0, e.jsx)(
                    Q,
                    {
                      item: u,
                      rgTags: n,
                      fnSaveCategory: f,
                      bOpenEditor: o?.toLowerCase() == u.handle,
                    },
                    u.id,
                  ),
              }),
              (0, e.jsx)(S.$n, { onClick: p, children: "Add Category" }),
            ],
          });
        }
        function X(i) {
          const { rgTags: s, replacesTags: t } = i,
            n = (0, x.useMemo)(
              () =>
                t
                  ?.map(
                    (o) =>
                      (s?.find((f) => f.tagid === o.id)?.name ||
                        "Unknown tag") +
                      " (" +
                      String(o.id) +
                      ")",
                  )
                  .join(", "),
              [t, s],
            );
          return n
            ? (0, e.jsx)("span", { children: "Replaces tags: " + n })
            : (0, e.jsx)("span", {});
        }
        function Q(i) {
          const { item: s, rgTags: t, fnSaveCategory: n, bOpenEditor: o } = i,
            [p, D, f] = (0, M.uD)(o),
            u = (L, W) => {
              L.preventDefault(), L.stopPropagation(), D();
            };
          return (0, e.jsx)("div", {
            className: l().CategoryCtn,
            children: (0, e.jsxs)("div", {
              className: l().Category,
              children: [
                (0, e.jsxs)("a", {
                  onClick: (L) => u(L, s),
                  children: [
                    (0, e.jsx)("b", {
                      children: s.loc_token ? (0, E.we)(s.loc_token) : "",
                    }),
                    s.loc_token ? " (" + s.handle + ")" : s.handle,
                  ],
                }),
                (0, e.jsx)("div", {
                  className: l().CategoryType,
                  children:
                    s.type === "tagids"
                      ? "Tags"
                      : s.type === "category"
                        ? "Category"
                        : s.type === "contenthub"
                          ? "Hardcoded Filter"
                          : "Special",
                }),
                (0, e.jsx)("div", {
                  className: l().ExcludedFromSearch,
                  children:
                    s.exclude_from_search === !0 ? "Excluded from search" : "",
                }),
                (0, e.jsx)("div", {
                  className: l().ReplacesTags,
                  children: (0, e.jsx)(X, {
                    rgTags: t,
                    replacesTags: s.replaces_tags,
                  }),
                }),
                (0, e.jsx)($.EN, {
                  active: p,
                  children: (0, e.jsx)(se, {
                    category: s,
                    fnSaveCategory: n,
                    closeModal: f,
                  }),
                }),
              ],
            }),
          });
        }
        function se(i) {
          const { fnSaveCategory: s, closeModal: t } = i,
            [n, o] = x.useState(i.category),
            p = x.useMemo(
              () => [
                { data: "tagids", label: "Tag Hub" },
                { data: "category", label: "Categories" },
                { data: "contenthub", label: "Hardcoded Filter Hub" },
              ],
              [],
            ),
            D = x.useCallback(
              (f) => o((u) => ({ ...u, content_descriptors: f })),
              [o],
            );
          return (0, e.jsxs)($.eV, {
            title: `Edit Category (ID ${n.id})`,
            bAllowFullSize: !0,
            onCancel: t,
            closeModal: t,
            children: [
              (0, e.jsx)(S.nB, {
                children: (0, e.jsxs)("div", {
                  className: l().CategoryEditor,
                  children: [
                    (0, e.jsx)(S.pd, {
                      label: "Handle",
                      tooltip:
                        "This forms the end of the URL. It must be unique",
                      value: n.handle,
                      onChange: (f) =>
                        o((u) => ({ ...u, handle: f.target.value })),
                    }),
                    (0, e.jsxs)("div", {
                      className: l().CategoryCtn,
                      children: [
                        (0, e.jsx)(S.pd, {
                          label: "Loc Token",
                          tooltip:
                            "Token only needed if we wish to expose this hub to customers",
                          value: n.loc_token,
                          onChange: (f) =>
                            o((u) => ({ ...u, loc_token: f.target.value })),
                        }),
                        n.loc_token &&
                          (0, e.jsx)(S.a3, {
                            children: (0, E.we)(n.loc_token),
                          }),
                        (0, e.jsx)(S.pd, {
                          label: "Description Loc Token",
                          tooltip:
                            "A localized token explaining this content hub to customers",
                          value: n.description_loc_token,
                          onChange: (f) =>
                            o((u) => ({
                              ...u,
                              description_loc_token: f.target.value,
                            })),
                        }),
                        n.description_loc_token &&
                          (0, e.jsx)(S.a3, {
                            children: (0, E.we)(n.description_loc_token),
                          }),
                      ],
                    }),
                    (0, e.jsx)(S.Yh, {
                      label: "Use As A Heading ",
                      tooltip:
                        "Only used for establishing headings used on the main store drop-down menu",
                      checked: n.heading,
                      onChange: (f) => o((u) => ({ ...u, heading: f })),
                    }),
                    (0, e.jsx)(S.Yh, {
                      label: "Exclude from search ",
                      tooltip: "Do not show this category in store search",
                      checked: n.exclude_from_search,
                      onChange: (f) =>
                        o((u) => ({ ...u, exclude_from_search: f })),
                    }),
                    (0, e.jsx)(S.pd, {
                      label: "Search aliases",
                      tooltip: "Comma separated search aliases",
                      value: n.search_alias,
                      onChange: (f) =>
                        o((u) => ({ ...u, search_alias: f.target.value })),
                    }),
                    (0, e.jsx)(S.m, {
                      label: "Type",
                      rgOptions: p,
                      selectedOption: n.type,
                      onChange: (f) => o((u) => ({ ...u, type: f.data })),
                    }),
                    (0, e.jsx)(V, {
                      rgContentDescriptors: n.content_descriptors ?? [],
                      setContentDescriptors: D,
                    }),
                    (n.type === "tagids" ||
                      n.type === "category" ||
                      n.type == "contenthub") &&
                      (0, e.jsx)(fe, { category: n, setCategory: o }),
                  ],
                }),
              }),
              (0, e.jsx)(S.wi, {
                children: (0, e.jsx)(S.CB, {
                  onCancel: t,
                  onOK: () => {
                    s(n), t();
                  },
                  strOKText: "Save",
                }),
              }),
            ],
          });
        }
        const V = x.memo(function (s) {
          const { rgContentDescriptors: t, setContentDescriptors: n } = s,
            o = x.useMemo(() => [h.M, h.mx, h.T4, h.u7], []);
          return (0, e.jsx)(S.mq, {
            label: "Content Descriptors",
            children: (0, e.jsx)(b.uh, {
              selectedValue: t,
              onSelectionChange: n,
              options: o,
              getOptionLabel: (p) => ce(p),
            }),
          });
        });
        function fe(i) {
          const { category: s, setCategory: t } = i,
            [n, o] = (0, x.useState)(!1),
            [p, D] = (0, x.useState)(0);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (s.type == "tagids" || s.type == "category") &&
                (0, e.jsx)("div", {
                  className: l().CategoryCtn,
                  children: (0, e.jsxs)("div", {
                    className: l().Category,
                    children: [
                      (0, e.jsx)(oe, {
                        category: s,
                        setCategory: t,
                        list: "must",
                        title: "Must have all of these tags",
                      }),
                      (0, e.jsx)(oe, {
                        category: s,
                        setCategory: t,
                        list: "any",
                        title: "Must have one of these tags",
                      }),
                      (0, e.jsx)(oe, {
                        category: s,
                        setCategory: t,
                        list: "mustnot",
                        title: "Must not have any of these tags",
                      }),
                    ],
                  }),
                }),
              (s.type == "tagids" ||
                s.type == "category" ||
                s.type == "contenthub") &&
                (0, e.jsxs)("div", {
                  className: l().CategoryCtn,
                  children: [
                    (0, e.jsx)(oe, {
                      category: s,
                      setCategory: t,
                      list: "replaces_tags",
                      title:
                        "The following Tags should redirect to this category page",
                    }),
                    (0, e.jsx)("p", {
                      children:
                        'This is only needed if this category is similar in name to an existing tag, such as "Sports" where the category is better than the individual tag.',
                    }),
                  ],
                }),
              n
                ? (0, e.jsxs)(e.Fragment, {
                    children: [
                      (0, e.jsx)(S.$n, {
                        onClick: () => D(p + 1),
                        children: "Refresh Stats",
                      }),
                      (0, e.jsx)(De, { category: s }),
                    ],
                  })
                : (0, e.jsx)(
                    S.Yh,
                    {
                      checked: n,
                      onChange: (f) => o(f),
                      label: "Show Category Sale Stats",
                    },
                    "info" + p,
                  ),
            ],
          });
        }
        function De(i) {
          const { category: s } = i,
            t = (0, O.p$)(s.must, s.any, s.mustnot);
          if (!t)
            return (0, e.jsx)(w.t, {
              string: (0, E.we)("#Loading"),
              position: "center",
              size: "medium",
            });
          const n = t.total_games > v.iT && t.total_games <= v.hp;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(S.$n, {
                onClick: () => {
                  const o = [];
                  o.push(["AppID", "Sale Rank"]),
                    t.top_games.forEach((D) => {
                      o.push(["" + D.appid, "" + D.long_term_sale_rank]);
                    });
                  const p = (s.handle || "top100").replace(" ", "_") + ".csv";
                  B.g.WriteCSVToFile(o, p);
                },
                children: "Download Top 100 Games",
              }),
              (0, e.jsx)(S.$n, {
                onClick: () => {
                  const o = [];
                  o.push(["AppID"]),
                    t.all_appid.forEach((D) => {
                      o.push(["" + D]);
                    });
                  const p = (s.handle || "allgames").replace(" ", "_") + ".csv";
                  B.g.WriteCSVToFile(o, p);
                },
                children: "Download All Games",
              }),
              (0, e.jsxs)("div", {
                className: I.ThemeRow,
                children: [
                  (0, e.jsxs)("div", {
                    className: I.ThemeDefinitionCtn,
                    children: [
                      "Summary: ",
                      (0, e.jsx)(v.KU, { nTotalGames: t.total_games }),
                      !!n && (0, e.jsx)(Se, { category: s }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: I.TopGamesCtn,
                    children: [
                      (0, e.jsx)("div", { children: "Top 10 Games non-F2P:" }),
                      (0, e.jsx)("div", {
                        className: I.GamesColumn,
                        children: t.top_games
                          ?.slice(0, 10)
                          .map((o) =>
                            (0, e.jsx)(
                              v.W7,
                              { info: o, category: s, bSaleSummary: n },
                              o.appid,
                            ),
                          ),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        function Se(i) {
          const { category: s } = i,
            t = (0, O.eX)(s.must, s.any, s.mustnot),
            n = (0, O.mg)(s.must, s.any, s.mustnot);
          return (0, e.jsx)(v.ny, { saleSummary: t, topAppSummary: n });
        }
        const oe = x.memo(function (s) {
          const { category: t, setCategory: n, list: o, title: p } = s,
            { rgTags: D, rgCategories: f } = (0, y.DT)(),
            u = (R) => {
              n((re) => ({ ...re, [o]: R(re[o]) }));
            },
            L =
              D?.map((R) => ({
                value: R.tagid,
                label: `${R.name} (${R.tagid})`,
              })) || [],
            W =
              f?.map((R) => ({
                value: R.categoryid,
                label: `${R.name} (${R.categoryid})`,
              })) || [];
          return (0, e.jsxs)("div", {
            className: l().TagOrCategoryList,
            children: [
              (0, e.jsx)(S.JU, { children: p }),
              (0, e.jsx)(F.A, {
                bDisabled: !0,
                items: t[o] ?? [],
                onDelete: (R) => u((re) => re.filter((Z, ue) => ue != R)),
                render: (R, re) =>
                  t.type === "tagids" || o === "replaces_tags"
                    ? (0, e.jsxs)("div", {
                        className: l().IDSelector,
                        children: [
                          (0, e.jsx)(S.pd, {
                            value: R.id,
                            onChange: (Z) =>
                              u((ue) =>
                                ue.map((ae, ve) =>
                                  ve == re
                                    ? { ...ae, id: parseInt(Z.target.value) }
                                    : ae,
                                ),
                              ),
                          }),
                          (0, e.jsx)(ee.Ay, {
                            className: "react-select-container",
                            classNamePrefix: "react-select",
                            isSearchable: !0,
                            options: L,
                            value: L.find((Z) => Z.value === R.id),
                            onChange: (Z) =>
                              u((ue) =>
                                ue.map((ae, ve) =>
                                  ve == re ? { ...ae, id: Z.value } : ae,
                                ),
                              ),
                          }),
                        ],
                      })
                    : t.type === "category"
                      ? (0, e.jsx)("div", {
                          className: l().IDSelector,
                          children: (0, e.jsx)(ee.Ay, {
                            className: "react-select-container",
                            classNamePrefix: "react-select",
                            isSearchable: !0,
                            options: W,
                            value: W.find((Z) => Z.value === R.id),
                            onChange: (Z) =>
                              u((ue) =>
                                ue.map((ae, ve) =>
                                  ve == re ? { ...ae, id: Z.value } : ae,
                                ),
                              ),
                          }),
                        })
                      : null,
              }),
              (0, e.jsx)(S.$n, {
                onClick: () => u((R) => (R ? [...R, { id: 0 }] : [{ id: 0 }])),
                children: "Add",
              }),
            ],
          });
        });
        function Ae(i) {
          const { categories: s, onSave: t, closeModal: n } = i,
            [o, p] = x.useState();
          return (
            x.useEffect(() => {
              (0, y.fT)(s).then((D) => {
                D ? p(D.strErrorMsg) : (t(), n && n());
              });
            }, [s, n, t]),
            (0, e.jsx)($.o0, {
              strTitle: "Saving",
              bAlertDialog: !0,
              bDisableBackgroundDismiss: !0,
              bHideCloseIcon: !0,
              closeModal: n,
              children: o
                ? (0, e.jsxs)("div", { children: ["Error: ", o] })
                : (0, e.jsx)(w.t, { size: "medium", position: "center" }),
            })
          );
        }
        function ye(i) {
          const { onPublish: s, closeModal: t } = i,
            [n, o] = x.useState(!1),
            [p, D] = x.useState();
          return (
            x.useEffect(() => {
              n &&
                (0, y.LD)().then((f) => {
                  f ? D(f.strErrorMsg) : (s(), o(!1), t && t());
                });
            }, [n, t, s]),
            (0, e.jsx)($.o0, {
              strTitle: n ? "Publishing" : "Really Publish?",
              strDescription:
                !n &&
                "Publishing will make your changes immediately visible to users.",
              bAlertDialog: n,
              bDisableBackgroundDismiss: n,
              bHideCloseIcon: n,
              onOK: () => {
                n ? t && t() : o(!0);
              },
              onCancel: () => {
                t && t();
              },
              children:
                n &&
                (0, e.jsx)(e.Fragment, {
                  children: p
                    ? (0, e.jsxs)("div", { children: ["Error: ", p] })
                    : (0, e.jsx)(w.t, { size: "medium", position: "center" }),
                }),
            })
          );
        }
        const de = { ContentHubCategories: () => "/categories/" };
        function xe(i) {
          return (0, e.jsxs)(G.Kd, {
            basename: (0, a.C)() + "admin/store/contenthub/",
            children: [
              (0, e.jsx)(c, {}),
              (0, e.jsxs)(Y.dO, {
                children: [
                  (0, e.jsx)(Y.qh, {
                    path: de.ContentHubCategories(),
                    component: j,
                  }),
                  (0, e.jsx)(Y.qh, { component: d.a }),
                ],
              }),
            ],
          });
        }
      },
      58952: (H, U, r) => {
        "use strict";
        r.d(U, { WM: () => w, l6: () => K, uh: () => _ });
        var e = r(7850),
          d = r(90626),
          G = r(92142),
          Y = r(86946),
          y = r(12204),
          E = r(15252),
          c = r(63029),
          a = r(76854),
          b = r(39790),
          h = r(85367),
          O = r(68031),
          x = r(80549),
          ee = r(58017),
          ie = r(64415);
        function k(g) {
          const {
              children: C,
              state: m,
              placement: P = "bottom-end",
              popoverWidth: B = "dropdown",
              popoverMaxHeight: M,
              popoverPresentation: N,
              popoverLabel: v,
              ...I
            } = g,
            [T, l] = (0, d.useState)(null),
            [A, j] = (0, d.useState)(null),
            z = (0, d.useMemo)(
              () =>
                m.rgOptions.findIndex((V) =>
                  m.multiselect
                    ? m.selectedValue.includes(V)
                    : V === m.selectedValue,
                ),
              [m.selectedValue, m.rgOptions, m.multiselect],
            ),
            X = (0, d.useRef)(null),
            Q = {
              ...m,
              ...I,
              focusedValue: T,
              onFocusChange: l,
              refPopover: X,
              popoverLabel: v,
              setOpen: (V) => {
                V && l(m.multiselect ? m.selectedValue[0] : m.selectedValue),
                  m.setOpen(V);
              },
              focusedIndex: A,
              onFocusedIndexChange: j,
            },
            se = (0, G.T)({
              open: m.bOpen,
              onOpenChange: m.setOpen,
              width: B,
              maxHeight: M,
              placement: P,
              presentation: N,
              selectedIndex: z,
              setSelectedIndex: (V) => m.onItemSelectionChange(m.rgOptions[V]),
              activeIndex: A,
              setActiveIndex: j,
              gutter: "4",
              interactions: { click: !0, typeahead: !0 },
              role: "select",
              scroll: !0,
            });
          return (0, e.jsx)(pe.Provider, {
            value: Q,
            children: (0, e.jsx)(G.k.Root, { state: se, children: C }),
          });
        }
        function S(g) {
          const { refPopover: C, popoverLabel: m } = ce("<Select.Options>");
          return (0, e.jsx)(G.k.Positioner, {
            ref: C,
            label: m,
            children: g.children,
          });
        }
        function $(g) {
          const { value: C, children: m, disabled: P, ...B } = g,
            {
              onItemSelectionChange: M,
              multiselect: N,
              selectedValue: v,
              maxSelected: I,
            } = ce("<SelectTrigger>"),
            T = typeof C == "string" ? C : void 0;
          let l = !1,
            A = !1;
          N
            ? ((l = Array.isArray(v) && v.includes(C)),
              (A = !!I && Array.isArray(v) && v.length >= I))
            : (l = C === v);
          const j = P || (A && !l);
          return (0, e.jsxs)(G.k.Item, {
            label: T,
            onSelect: () => M(C),
            selected: l,
            disabled: j,
            ...B,
            children: [
              N &&
                (0, e.jsxs)(O.s, {
                  gap: "2",
                  align: "center",
                  children: [
                    (0, e.jsx)(h.S, { checked: l, variant: "dark" }),
                    m,
                  ],
                }),
              !N && m,
            ],
          });
        }
        function te(g) {
          const { children: C, render: m } = g,
            {
              bOpen: P,
              setOpen: B,
              selectedValue: M,
              variant: N,
              size: v,
              radius: I,
              status: T,
              rgOptions: l,
              multiselect: A,
              onClear: j,
              focusedValue: z,
              onFocusChange: X,
              onSelectionChange: Q,
              clearable: se,
              focusedIndex: V,
              onItemSelectionChange: fe,
              onFocusedIndexChange: De,
              refPopover: Se,
              popoverLabel: oe,
              placeholder: Ae,
              maxSelected: ye,
              ...de
            } = ce("<SelectTrigger>"),
            xe = {
              tabIndex: 0,
              role: "combobox",
              onClick: () => B(!P),
              children: C,
            },
            i = A ? Array.isArray(M) && M.length > 0 : !!M,
            s = i && se,
            t = s
              ? (0, e.jsx)(c.g, { onClick: j, cursor: "pointer", hitSlop: !0 })
              : (0, e.jsx)(y.V, {}),
            n = s
              ? {
                  onSecondaryButton: j,
                  actionDescriptionMap: {
                    [ie.pR.SECONDARY]: ee.T.Localize("#Clear"),
                  },
                }
              : void 0,
            o = (0, x.f)("Select", N),
            p = (0, e.jsx)(Y.j, {
              afterContent: t,
              variant: o,
              size: v,
              radius: I,
              status: T,
              hasValue: i,
              tabIndex: 0,
              cursor: "pointer",
              navProps: n,
              ...de,
            }),
            D = (0, a.Q)(m, p, xe, void 0);
          return (0, e.jsx)(G.k.Anchor, { children: D });
        }
        function F(g) {
          return (0, e.jsx)(E.EY, {
            weight: "medium",
            truncate: !0,
            contrast: "title",
            children: g.children,
          });
        }
        function ge(g) {
          return (0, e.jsx)(E.EY, {
            contrast: "description",
            truncate: !0,
            children: g.children,
          });
        }
        function w(g) {
          return le(g, !1);
        }
        function le(g, C) {
          const { onSelectionChange: m, selectedValue: P, ...B } = g,
            [M, N] = (0, d.useState)(!1),
            v = (0, d.useCallback)(
              (l) => {
                m(l), C || N(!1);
              },
              [m, C],
            ),
            I = (0, d.useCallback)(
              (l) => {
                v(C ? [] : null), l?.stopPropagation(), l?.preventDefault();
              },
              [v, C],
            ),
            T = (0, d.useCallback)(
              (l) => {
                if (!C) v(l);
                else {
                  const A = P,
                    j = A.indexOf(l);
                  if (j === -1) v(A.concat(l));
                  else return v(A.slice(0, j).concat(A.slice(j + 1)));
                }
              },
              [v, P, C],
            );
          return {
            onSelectionChange: v,
            onItemSelectionChange: T,
            onClear: I,
            bOpen: M,
            setOpen: N,
            multiselect: C,
            selectedValue: P,
            ...B,
          };
        }
        const he = {
          Root: k,
          Option: $,
          Options: S,
          Trigger: te,
          Value: F,
          Placeholder: ge,
        };
        function me(g) {
          return typeof g == "string"
            ? g
            : typeof g == "number"
              ? g.toString()
              : (console.error(
                  "Could not use default option labeler on Select option value. Custom labeler requried",
                  g,
                ),
                "");
        }
        function ne(g) {
          const {
              selectedValue: C,
              onSelectionChange: m,
              options: P,
              placeholder: B,
              getOptionLabel: M = me,
              ...N
            } = g,
            v = w({
              onSelectionChange: m,
              selectedValue: C,
              rgOptions: P,
              placeholder: B,
            }),
            I = C != null,
            T = I ? M(C) : "";
          return (0, e.jsxs)(K.Root, {
            state: v,
            ...N,
            children: [
              (0, e.jsxs)(K.Trigger, {
                children: [
                  I && (0, e.jsx)(K.Value, { children: T }),
                  !I && (0, e.jsx)(K.Placeholder, { children: B }),
                ],
              }),
              (0, e.jsx)(K.Options, {
                children: v.rgOptions.map((l, A) =>
                  (0, e.jsx)(K.Option, { value: l, children: M(l) }, A),
                ),
              }),
            ],
          });
        }
        const K = Object.assign(ne, he);
        function q(g) {
          return le(g, !0);
        }
        const Ce = he;
        function J(g) {
          const {
              selectedValue: C,
              onSelectionChange: m,
              options: P,
              placeholder: B,
              getOptionLabel: M = me,
              maxSelected: N,
              ...v
            } = g,
            I = q({
              onSelectionChange: m,
              selectedValue: C,
              rgOptions: P,
              placeholder: B,
              maxSelected: N,
            }),
            T = Array.isArray(C) && C.length > 0;
          let l = "";
          if (T) {
            const A = C.map((j) => M(j));
            "ListFormat" in Intl
              ? (l = new Intl.ListFormat((0, b.ZO)().strISOCode).format(A))
              : (l = A.join(", "));
          }
          return (0, e.jsxs)(_.Root, {
            state: I,
            ...v,
            children: [
              (0, e.jsxs)(_.Trigger, {
                children: [
                  T && (0, e.jsx)(_.Value, { children: l }),
                  !T && (0, e.jsx)(_.Placeholder, { children: B }),
                ],
              }),
              (0, e.jsx)(_.Options, {
                children: I.rgOptions.map((A, j) =>
                  (0, e.jsx)(_.Option, { value: A, children: M(A) }, j),
                ),
              }),
            ],
          });
        }
        const _ = Object.assign(J, Ce),
          pe = (0, d.createContext)(null);
        function ce(g) {
          const C = (0, d.useContext)(pe);
          return C || console.error(`${g} must be used within a <Select>!`), C;
        }
      },
      91512: (H, U, r) => {
        "use strict";
        r.d(U, { A: () => S });
        var e = r(7850),
          d = r(90626),
          G = r(54963);
        const Y =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAeCAYAAAAo5+5WAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4gEEFRg0nBijuQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAw0lEQVRIx+2WMQqDMBSG/xedEnCp3kFzh56gN+iN7SrFLsEDmElwDHGyFNEYlQyF/FPgvXx5fMsL3R9P+CRJEgsAxhjy6We+UClLSFl+H7gMnqGcC3AuvOHMFzrHF86OQI/A062CMYaa5o2zYQiUNMsyGwRcVWWQicOpaNsPooqoIqqIKvYmrusX/dXE4VS4lqkQwnl5HMfND4xzmRbFzeZ5sVrXuscwDHRKhVIdad2vQpXq6JLjJdwH6lSxhAOwP+fdTHcfVDuVWnTzAAAAAElFTkSuQmCC";
        var y = r(44894),
          E = r(41635),
          c = r(41609),
          a = r.n(c),
          b = r(64641),
          h = r.n(b),
          O = r(36118),
          x = r(41735),
          ee = r.n(x),
          ie = r(13854),
          k = r(36707);
        function S(te) {
          const {
              items: F,
              render: ge,
              onDelete: w,
              onEdit: le,
              onReorder: he,
              onMove: me,
              bDisabled: ne,
              rowClassName: K,
            } = te,
            [q, Ce] = d.useState(!1),
            [J, _] = d.useState(void 0),
            [pe, ce] = d.useState(void 0),
            [g, C] = d.useState(-1),
            [m, P] = d.useState(void 0),
            [B, M] = d.useState(0),
            [N, v] = d.useState(0),
            [I, T] = d.useState(void 0),
            [l, A] = d.useState(""),
            j = d.useRef(void 0),
            z = d.useRef([]),
            X = d.useRef([]),
            Q = d.useMemo(() => ee().CancelToken.source(), []),
            se = () => {
              j.current?.firstElementChild &&
                (M(j.current.firstElementChild.getBoundingClientRect().height),
                v(j.current.firstElementChild.getBoundingClientRect().width));
            };
          d.useEffect(() => {
            se();
          }, []),
            d.useEffect(
              () => () => Q.cancel("ReorderableList unmounting"),
              [Q],
            );
          const V = (t, n) => {
              const o = z.current[t]?.current;
              if (!o) {
                console.error(
                  "start element grab missing element at index " + t,
                );
                return;
              }
              Ce(!0), C(t), T(void 0), P(t);
              const p = n.clientX - o.getBoundingClientRect().left;
              _(p);
              const D = n.clientY - o.getBoundingClientRect().top;
              ce(D),
                (o.style.position = "fixed"),
                (o.style.left = n.clientX - p + "px"),
                (o.style.top = n.clientY - D + "px"),
                (o.style.zIndex = "1");
            },
            fe = d.useCallback(
              (t) => {
                const n = z.current[g]?.current;
                if (!n) {
                  console.error("update grab element missing element");
                  return;
                }
                (n.style.left = t.clientX - J + "px"),
                  (n.style.top = t.clientY - pe + "px");
              },
              [g, J, pe],
            ),
            De = d.useCallback(() => {
              const t = z.current[g]?.current;
              t
                ? ((t.style.position = ""), (t.style.zIndex = ""))
                : console.error("end element drag missing element"),
                Ce(!1),
                C(-1),
                T(void 0),
                P(void 0);
            }, [g]),
            Se = (t, n) => {
              Q.token.reason ||
                (j.current.firstElementChild?.getBoundingClientRect().height >
                  0 &&
                  B !=
                    j.current.firstElementChild.getBoundingClientRect()
                      .height &&
                  se(),
                V(n, t),
                t.preventDefault());
            },
            oe = (t, n) => {
              const o = ie.OQ(n > t ? n - 1 : n, 0, F.length - 1);
              t != o && (me ? me(t, o) : (0, E.yY)(F, t, o), s(o), he && he(F));
            },
            Ae = (t) => {
              !q || Q.token.reason || (De(), oe(g, m));
            },
            ye = d.useCallback(
              (t) => {
                if (!q || Q.token.reason) return;
                const n = t.clientY;
                let o;
                for (let p = 0; p < X.current.length; p++) {
                  const D = X.current[p].current.getBoundingClientRect().top,
                    f = X.current[p].current.getBoundingClientRect().bottom,
                    u = (D + f * 2) / 3;
                  if (n < u) {
                    o = p;
                    break;
                  }
                }
                P(o ?? X.current.length), fe(t);
              },
              [q, Q, fe],
            );
          (0, G.l6)(window, "mousemove", q ? ye : void 0),
            (0, G.l6)(window, "mouseup", q ? Ae : void 0),
            d.useEffect(() => {
              for (let t = z.current.length; t < F.length; t++)
                z.current.push(d.createRef()), X.current.push(d.createRef());
            }, [F.length]);
          const de = (t) => {
              T(void 0);
              const n = l?.trim(),
                o = Number.parseInt(n);
              if (n.length == 0 || isNaN(o)) return;
              const p = o - 1;
              t != p && oe(t, p);
            },
            xe = (t, n) => {
              t.key === "Enter" && (de(n), t.currentTarget.blur());
            },
            [i, s] = d.useState(void 0);
          return (0, e.jsx)("div", {
            className: a().WhitelistCtn,
            ref: j,
            children: F.map((t, n) =>
              (0, e.jsxs)(
                "div",
                {
                  ref: X.current[n],
                  children: [
                    n == m && (0, e.jsx)($, { width: N }),
                    (0, e.jsx)("div", {
                      ref: z.current[n],
                      className: a().DragGhost,
                      children:
                        n == g &&
                        (0, e.jsxs)("div", {
                          className: (0, k.A)(a().WhitelistRow, K),
                          children: [
                            (0, e.jsx)("img", {
                              className: (0, k.A)(
                                a().WhitelistAvatar,
                                a().Grabbing,
                              ),
                              src: Y,
                            }),
                            (0, e.jsx)("input", {
                              className: (0, k.A)(
                                a().WhitelistNumber,
                                a().Disabled,
                                a().Grabbing,
                              ),
                              type: "text",
                              value: (m > n ? m - 1 : m) + 1,
                              disabled: !0,
                            }),
                            ge(t, n),
                          ],
                        }),
                    }),
                    (0, e.jsxs)("div", {
                      className: (0, k.A)(
                        a().WhitelistRow,
                        K,
                        q && a().DragActive,
                        n == g && a().BeingDragged,
                        i == n && a().Dropped,
                      ),
                      onAnimationEnd: () => s(void 0),
                      children: [
                        (0, e.jsx)("img", {
                          className: (0, k.A)(
                            a().WhitelistAvatar,
                            a().Grabbable,
                            ne && a().DisabledGrab,
                          ),
                          src: Y,
                          onMouseDown: ne ? void 0 : (o) => Se(o, n),
                        }),
                        (0, e.jsx)("input", {
                          className: (0, k.A)(
                            a().WhitelistNumber,
                            ne && a().Disabled,
                          ),
                          type: "text",
                          value: I == n ? l : n + 1,
                          disabled: ne || n == g,
                          onChange: (o) => A(o.target.value),
                          onKeyDown: (o) => xe(o, n),
                          onFocus: (o) => {
                            T(n), A(o.target.value);
                          },
                          onBlur: () => de(n),
                        }),
                        ge(t, n),
                        n != g &&
                          !!(le || w) &&
                          (0, e.jsxs)("div", {
                            className: a().ButtonCtn,
                            children: [
                              !!le &&
                                (0, e.jsx)("div", {
                                  className: h().RemoveIcon,
                                  onClick: (o) => le(n, o),
                                  children: (0, e.jsx)(O.ffu, {}),
                                }),
                              !!w &&
                                (0, e.jsx)("img", {
                                  className: h().RemoveIcon,
                                  src: y.A,
                                  onClick: (o) => w(n, o),
                                }),
                            ],
                          }),
                      ],
                    }),
                    m == F.length &&
                      n == F.length - 1 &&
                      (0, e.jsx)($, { width: N }),
                  ],
                },
                n,
              ),
            ),
          });
        }
        function $(te) {
          const { width: F } = te;
          return (0, e.jsx)("div", {
            className: a().DragHighlightContainer,
            children: (0, e.jsx)("div", {
              className: a().DragHighlight,
              style: { width: F },
            }),
          });
        }
      },
      22880: (H, U, r) => {
        "use strict";
        r.d(U, { g: () => G });
        var e = r(40323),
          d = r.n(e);
        class G {
          static ParseCSVFile(y, E) {
            return new Promise((c, a) => {
              const h = {
                header: !0,
                skipEmptyLines: "greedy",
                complete: c,
                error: (O) => a({ errors: [O] }),
                transformHeader: E,
              };
              d().parse(y, h);
            });
          }
          static ReadFile(y) {
            return new Promise((E, c) => {
              const a = new FileReader();
              (a.onload = (b) => E(a.result)), a.readAsText(y);
            });
          }
          static WriteFile(y, E) {
            let c = document.createElement("a");
            if (navigator.msSaveBlob) navigator.msSaveBlob(y, E);
            else {
              const a = window.URL.createObjectURL(y);
              c.href = a;
            }
            c.setAttribute("download", E), c.click();
            try {
              document.removeChild(c);
            } catch {}
          }
          static WriteCSVToFile(y, E, c, a) {
            const b = a
                ? d().unparse({ fields: a, data: y }, { header: !0 })
                : d().unparse(y, { header: !0 }),
              h = c == !0 ? ["\uFEFF" + b] : [b];
            G.WriteFile(new Blob(h, { type: "text/csv:charset=utf-8;" }), E);
          }
          static m_DummyValueForQuestionHack = 0;
          static WriteXMLToFile(y, E) {
            const c = () =>
              this.m_DummyValueForQuestionHack ? "never returned" : "?";
            let a =
              "<" +
              c() +
              'xml version="1.0" encoding="UTF-8" ' +
              c() +
              `>
`;
            (a += new XMLSerializer().serializeToString(y)),
              G.WriteFile(
                new Blob([a], { type: "application/xml:charset=utf-8;" }),
                E,
              );
          }
        }
      },
      19730: (H, U, r) => {
        "use strict";
        r.d(U, { Dq: () => y, NO: () => E, dm: () => Y });
        var e = r(84346),
          d = r(39905);
        function G(c, a) {
          const b = a.bUseBinary1K ? 1024 : 1e3,
            h = b * b,
            O = h * b,
            x = O * b;
          return c > x
            ? { nNum: c / x, strPrefix: "Tera" }
            : c > O
              ? { nNum: c / O, strPrefix: "Giga" }
              : c > h
                ? { nNum: c / h, strPrefix: "Mega" }
                : c > b
                  ? { nNum: c / b, strPrefix: "Kilo" }
                  : { nNum: c, strPrefix: "" };
        }
        function Y(c, a, b, h) {
          let O = a;
          typeof O == "number"
            ? (O = {
                nDigitsAfterDecimal: a,
                bUseBinary1K: b || b === void 0,
                bValueIsInBytes: !h,
                bValueIsRate: h,
                nMinimumDigitsAfterDecimal: 0,
              })
            : (O = {
                nDigitsAfterDecimal: 2,
                bUseBinary1K: !0,
                bValueIsInBytes: !0,
                bValueIsRate: !1,
                nMinimumDigitsAfterDecimal: 0,
                ...O,
              });
          const { nNum: x, strPrefix: ee } = G(c, O),
            ie = `#${ee}${O.bValueIsInBytes ? "bytes" : "bits"}${O.bValueIsRate ? "_PerSecond" : ""}`;
          return d.Z.Localize(
            ie,
            x.toLocaleString((0, e.J)(), {
              minimumFractionDigits: O.nMinimumDigitsAfterDecimal,
              maximumFractionDigits: O.nDigitsAfterDecimal,
            }),
          );
        }
        function y(c, a = 0) {
          let b;
          return (
            a && (b = { maximumFractionDigits: a }),
            c ? c.toLocaleString((0, e.J)(), b) : "" + c
          );
        }
        function E(c) {
          return c > 1e9
            ? Math.trunc(c / 1e9).toString() + "B"
            : c > 1e6
              ? Math.trunc(c / 1e6).toString() + "M"
              : c > 1e3
                ? Math.trunc(c / 1e3).toString() + "K"
                : c.toString();
        }
      },
      4940: (H) => {
        H.exports = {
          TitleHR: "_1rdzNwXOoo1-LmnB-gVa8L",
          ActionButtonCtn: "_7a7-wklt6L9bHpSe8uw95",
          CategoriesList: "YMtVaSAftRDKdmUzno1V-",
          CategoryCtn: "_1vjux5UePGI2QR8pgGS5s9",
          Category: "_12BB3TMamY8yT5zyDnNr5Y",
          CategoryType: "_2rg93RSnGgt35AemsbS3XN",
          ExcludedFromSearch: "_1qSt9f_EVF7MmpIxINFOnq",
          ReplacesTags: "_2VMbzBly9fJ6k58VPyo5Dw",
          CategoryEditor: "hDZX9jvA2yVDsxIl25krT",
          TagOrCategoryList: "_33SvLrTusAraXr9O6rG1RK",
          IDSelector: "_1COCuEUNPkqoSthDBf5dKb",
          CategorySummary: "_1h-LQnwvNcayOGn1YjEAw8",
          Clause: "_17Lm214eZBjzdDsBlWCP0y",
          Item: "uZOnNO-9GSMjuZg73yUDz",
          UnpublishedChangesNotice: "_3IZil2pI21oJCdU0WQn6Z3",
        };
      },
      41609: (H) => {
        H.exports = {
          WhitelistCtn: "_1UhmxrINvvaNnHzhCPoill",
          WhitelistRow: "_28TC1EYm0jlWPjyk89xXCL",
          WhitelistNumber: "IY3dF3eWXX1OmE8oYcQKp",
          Disabled: "_2VzE-3UQEHXyAext8t7gLW",
          Grabbing: "_1vSZ5gJndAOamRhVGni8HG",
          DragActive: "_31uDZXKZQlYMd8FK9xdaJb",
          Dropped: "_3bfDVSvzMDkk4s1j0Vw8jI",
          JumpToSection: "oABTo2lkoYYI5YMYaeq_Q",
          BeingDragged: "_3y7I4DL9Hua5OhZ4HgcBB5",
          DragGhost: "_61nYWo98IhSjR8PWtQX9O",
          Grabbable: "riuelIz655g_IBddWfLQ-",
          DisabledGrab: "_2K0C_m1AZvB6yeNaEXXjDD",
          WhitelistAvatar: "_3DGjmH9KW9BAXsEYwH1WpE",
          ButtonCtn: "_1hSqlvDTyj9P6eWTHXutUt",
          DragHighlightContainer: "_2jRMC5JVSK6dsktYus9Gjf",
          DragHighlight: "Y9ryg1Npznt3dpkr7BGp1",
        };
      },
      64641: (H) => {
        H.exports = {
          v6: "_2LxgdMcpWJRjkxZKbmeEEb",
          SubText: "vg0EOhKTLB3tLvshHMr7l",
          AvatarImageContainer: "_33hdFBTwBs64Fcp-bPdf4E",
          GameImageContainer: "_2OYADGuBPiyF7h50OJ0P1B",
          AvatarImage: "_2CQYcCggCXwVzZj2GWng5-",
          STV_HomeGridPreviewDetails: "Yncr-T63YFSJ46cq4Z2BJ",
          ChatAvatarImage: "_1cUR_vD8IvfJgOK1r89j4o",
          EditButton: "VsZ-bdWSNpnM9Vg6gkSyD",
          Small: "_3M4j828iWSVEZZAkypcBi1",
          FlexCenter: "_1R3ycnbAGUAy01o0TW7NNo",
          ThrobberCtn: "_3m7p67FD1Ynjm3BnyyjSSS",
          MarkdownLink: "_1WqumifyJucGDxm2oI6yRQ",
          SummaryTextArea: "cNMZ-dcMVhaQJFes_Ivwo",
          RemoveIcon: "_3NeLW5LAka4S9__PaMFE_J",
        };
      },
      44894: (H, U, r) => {
        "use strict";
        r.d(U, { A: () => e });
        const e =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcJJREFUeNqkUz1PAkEQfStggjESejU0GozlGqn8SGywkYIYY0IsaLCwIBTQUN5fMLGm8S8QSWwslVAYjAlUBEJDhCgWwp3nzN6eHqIVl8zN7rx5b+dm9oRt25jlmcOMj59f10JAkPcBcXIGWdECyqYn6TfGdZ9S9d4K4gQYx4WCtJzE+G/sKJudwpQABUGnGSf5vKzX60jmctL8SYzz+iCdls1mEzuplMIsLSC4iSUh1ClUlpHIZGStVkM0GsVNqVRlIJZIyG63i1AohMdKpUrZRQqXz4j7LWA7VSiR/WRSNhsNRRgOh+i02wgGg3hrtRSZelLmI6cExs7nKJGVtTX50uupMn0+H157PUWmZpYDXLoWUFPo6MC87jivx4MBFtxOWZYS11VipNdT98DWDVsPh2XQNLFIMdc4xpg9OZ3JMdIpRowSXVKt36+yuXvGxn+N0XS+3zj0kG+JSPEi261H5FCLmN9lUyNWyZ+Qag54eA6Hbfa8j1A88g+2qrlqCkKIZdovbAG7m8D5E3B5D9xR7IPsk/u7DextABd14OrBwd6J23YFligQ0IPwXE7lbedXUAPya5yHMiLuq5j1d/4SYAAj3NATBGE4PgAAAABJRU5ErkJggg==";
      },
    },
  ]);
})();
