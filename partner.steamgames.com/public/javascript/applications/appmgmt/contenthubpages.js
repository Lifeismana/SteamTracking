/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [3025],
    {
      98912: (E, N, i) => {
        "use strict";
        i.r(N), i.d(N, { ContentHubRoutes: () => V, default: () => ge });
        var e = i(7850),
          w = i(90783),
          H = i(17083),
          I = i(92757),
          v = i(85873),
          j = i(18210);
        function z(a) {
          const t = (n) =>
            (0, v.tV)() ? (0, j.we)("#Generel_Discard_Warning") : !0;
          return (0, e.jsx)(I.XG, { message: t });
        }
        var W = i(58732),
          Z = i(58952),
          g = i(18735),
          R = i(31553),
          h = i(90626),
          B = i(77411),
          J = i(45737),
          L = i.n(J),
          d = i(58534),
          k = i(2801),
          U = i(88003),
          P = i(91512),
          Y = i(36118),
          G = i(85599),
          he = i(41735),
          pe = i(3166),
          Ce = i(72609);
        const me = [g.ED, g.M, g.mx, g.T4, g.u7];
        function xe(a) {
          let t = [];
          switch (a) {
            case EContentDescriptorID.k_EContentDescriptor_AnyMatureContent:
              t.push(
                EContentDescriptorID.k_EContentDescriptor_FrequentViolenceOrGore,
              ),
                t.push(
                  EContentDescriptorID.k_EContentDescriptor_NudityOrSexualContent,
                );
            case EContentDescriptorID.k_EContentDescriptor_NudityOrSexualContent:
              t.push(
                EContentDescriptorID.k_EContentDescriptor_GratuitousSexualContent,
              );
            case EContentDescriptorID.k_EContentDescriptor_GratuitousSexualContent:
              t.push(
                EContentDescriptorID.k_EContentDescriptor_AdultOnlySexualContent,
              );
              break;
          }
          return t;
        }
        let A = new Map();
        A.set(g.M, g.ED),
          A.set(g.mx, g.ED),
          A.set(g.T4, g.mx),
          A.set(g.u7, g.T4);
        function K(a) {
          let t = [],
            n = A.get(a);
          return n && (t.push(n), t.push(...K(n))), t;
        }
        function ye(a) {
          return useQuery({
            queryKey: [
              "examples_for_content_descriptor",
              a === null ? null : a.valueOf(),
            ],
            queryFn: async () => {
              if (a === null) return [];
              const t = new URLSearchParams();
              return (
                t.append("filter", "examplesforcontentdescriptors"),
                t.append("ignore_preferences", "1"),
                t.append("category1", "992,994,998"),
                t.append("descids", a.valueOf().toString()),
                t.append("json", "1"),
                (
                  await axios({
                    url: `${Config.STORE_BASE_URL}search/results/?${t.toString()}`,
                    method: "GET",
                    responseType: "json",
                  })
                ).data.items
              );
            },
          });
        }
        function X(a) {
          let t = null;
          switch (a) {
            case g.ED:
              t = "#ContentDescriptor_GeneralMatureContent";
              break;
            case g.M:
              t = "#ContentDescriptor_FrequentViolenceOrGore";
              break;
            case g.mx:
              t = "#ContentDescriptor_NudityOrSexualContent";
              break;
            case g.T4:
              t = "#ContentDescriptor_GratuitousNudityOrSexualContent";
              break;
            case g.u7:
              t = "#ContentDescriptor_AdultOnlySexualContent";
              break;
            default:
              throw "Invalid content descriptor.";
          }
          return (0, j.we)(t);
        }
        function De(a, t = !1) {
          let n = "";
          switch (a) {
            case EContentDescriptorID.k_EContentDescriptor_AnyMatureContent:
              n += Localize(
                "#ContentDescriptor_GeneralMatureContent_Description",
              );
              break;
            case EContentDescriptorID.k_EContentDescriptor_FrequentViolenceOrGore:
              n += Localize(
                "#ContentDescriptor_FrequentViolenceOrGore_Description",
              );
              break;
            case EContentDescriptorID.k_EContentDescriptor_NudityOrSexualContent:
              n += Localize(
                "#ContentDescriptor_NudityOrSexualContent_Description",
              );
              break;
            case EContentDescriptorID.k_EContentDescriptor_GratuitousSexualContent:
              n += Localize(
                "#ContentDescriptor_GratuitousNudityOrSexualContent_Description",
              );
              break;
            case EContentDescriptorID.k_EContentDescriptor_AdultOnlySexualContent:
              n += Localize(
                "#ContentDescriptor_AdultOnlySexualContent_Description",
              );
              break;
            default:
              throw "Invalid content descriptor.";
          }
          return (
            t &&
              (a ===
                EContentDescriptorID.k_EContentDescriptor_GratuitousSexualContent ||
                a ===
                  EContentDescriptorID.k_EContentDescriptor_AdultOnlySexualContent) &&
              (n += " " + Localize("#ContentDescriptor_Affirm18YearsOld")),
            n
          );
        }
        function Q() {
          return [
            EContentDescriptorID.k_EContentDescriptor_AdultOnlySexualContent,
            EContentDescriptorID.k_EContentDescriptor_GratuitousSexualContent,
            EContentDescriptorID.k_EContentDescriptor_NudityOrSexualContent,
          ];
        }
        function fe() {
          return [
            EContentDescriptorID.k_EContentDescriptor_AdultOnlySexualContent,
            EContentDescriptorID.k_EContentDescriptor_GratuitousSexualContent,
          ];
        }
        function Se(a) {
          return !UserConfig.logged_in ||
            !a ||
            !a.content_descriptors_to_exclude
            ? Q()
            : a.content_descriptors_to_exclude.map(
                (t) => t.content_descriptorid,
              );
        }
        var F = i(22880),
          $ = i(54963),
          _ = i(98609),
          b = i(39077),
          O = i(92237),
          q = i(4940),
          C = i.n(q),
          ee = i(179);
        const te = h.memo(function () {
          const [t, n] = h.useState(),
            [s, o] = h.useState(!1),
            [c, u] = h.useState(!1),
            [l, r] = h.useState(!1);
          h.useEffect(() => {
            (0, v.GX)().then((x) => {
              n(x.rgCategories), r(x.bHasUnpublishedChanges), o(!0);
            });
          }, []);
          const m = h.useCallback((x) => {
            n(x), u(!0);
          }, []);
          return s
            ? (0, e.jsxs)("div", {
                className: L().AdminPageCtn,
                children: [
                  (0, e.jsx)("div", {
                    className: L().PageTitle,
                    children: "Content Hub Categories",
                  }),
                  (0, e.jsx)("hr", { className: C().TitleHR }),
                  (0, e.jsxs)("p", {
                    children: [
                      "This page lets you review and edit existing categories. Click on their titles.  At the bottom there is controls to create a new category. To see the hubs performance related to making a theme sale ",
                      (0, e.jsx)("a", {
                        href: `${_.TS.PARTNER_BASE_URL}promotion/planning/themes`,
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
                    className: L().PageSubTitle,
                    children: "Categories",
                  }),
                  l &&
                    (0, e.jsx)("div", {
                      className: C().UnpublishedChangesNotice,
                      children:
                        "You have unpublished changes. Click Publish below to publish and make them available to users.",
                    }),
                  (0, e.jsx)(ne, { categories: t, onUpdate: m }),
                  (0, e.jsxs)("div", {
                    className: C().ActionButtonCtn,
                    children: [
                      (0, e.jsx)(d.jn, {
                        onClick: () =>
                          (0, U.pg)(
                            (0, e.jsx)(de, {
                              categories: t,
                              onSave: () => {
                                u(!1), r(!0);
                              },
                            }),
                            window,
                          ),
                        children: c
                          ? (0, e.jsx)(e.Fragment, { children: "Save" })
                          : (0, e.jsxs)(e.Fragment, {
                              children: [(0, e.jsx)(Y.Jlk, {}), "Saved"],
                            }),
                      }),
                      (0, e.jsx)(d.$n, {
                        onClick: () =>
                          (0, U.pg)(
                            (0, e.jsx)(ue, { onPublish: () => r(!1) }),
                            window,
                          ),
                        children: "Publish",
                      }),
                    ],
                  }),
                ],
              })
            : (0, e.jsx)(G.t, { size: "medium", position: "center" });
        });
        function ne(a) {
          const { categories: t, onUpdate: n } = a,
            { rgTags: s } = (0, v.DT)(),
            [o] = (0, ee.QD)("edit");
          if (!t)
            return (0, e.jsx)("div", { children: "No categories defined." });
          const c = () => {
              n((r) => {
                let m = 0;
                for (const x of r)
                  x.id && Number(x.id) > m && (m = Number(x.id));
                return [...r, { handle: "new_category_" + t.length, id: ++m }];
              });
            },
            u = (r) => {
              n((m) => m.filter((x, p) => p != r));
            },
            l = (r) => {
              n((m) => m.map((x) => (x.id === r.id ? r : x)));
            };
          return (0, e.jsxs)("div", {
            className: C().CategoriesList,
            children: [
              (0, e.jsx)(P.A, {
                bDisabled: !0,
                items: t,
                onDelete: u,
                render: (r) =>
                  (0, e.jsx)(
                    oe,
                    {
                      item: r,
                      rgTags: s,
                      fnSaveCategory: l,
                      bOpenEditor: o?.toLowerCase() == r.handle,
                    },
                    r.id,
                  ),
              }),
              (0, e.jsx)(d.$n, { onClick: c, children: "Add Category" }),
            ],
          });
        }
        function se(a) {
          const { rgTags: t, replacesTags: n } = a,
            s = (0, h.useMemo)(
              () =>
                n
                  ?.map(
                    (o) =>
                      (t?.find((l) => l.tagid === o.id)?.name ||
                        "Unknown tag") +
                      " (" +
                      String(o.id) +
                      ")",
                  )
                  .join(", "),
              [n, t],
            );
          return s
            ? (0, e.jsx)("span", { children: "Replaces tags: " + s })
            : (0, e.jsx)("span", {});
        }
        function oe(a) {
          const { item: t, rgTags: n, fnSaveCategory: s, bOpenEditor: o } = a,
            [c, u, l] = (0, $.uD)(o),
            r = (m, x) => {
              m.preventDefault(), m.stopPropagation(), u();
            };
          return (0, e.jsx)("div", {
            className: C().CategoryCtn,
            children: (0, e.jsxs)("div", {
              className: C().Category,
              children: [
                (0, e.jsxs)("a", {
                  onClick: (m) => r(m, t),
                  children: [
                    (0, e.jsx)("b", {
                      children: t.loc_token ? (0, j.we)(t.loc_token) : "",
                    }),
                    t.loc_token ? " (" + t.handle + ")" : t.handle,
                  ],
                }),
                (0, e.jsx)("div", {
                  className: C().CategoryType,
                  children:
                    t.type === "tagids"
                      ? "Tags"
                      : t.type === "category"
                        ? "Category"
                        : t.type === "contenthub"
                          ? "Hardcoded Filter"
                          : "Special",
                }),
                (0, e.jsx)("div", {
                  className: C().ExcludedFromSearch,
                  children:
                    t.exclude_from_search === !0 ? "Excluded from search" : "",
                }),
                (0, e.jsx)("div", {
                  className: C().ReplacesTags,
                  children: (0, e.jsx)(se, {
                    rgTags: n,
                    replacesTags: t.replaces_tags,
                  }),
                }),
                (0, e.jsx)(k.EN, {
                  active: c,
                  children: (0, e.jsx)(ae, {
                    category: t,
                    fnSaveCategory: s,
                    closeModal: l,
                  }),
                }),
              ],
            }),
          });
        }
        function ae(a) {
          const { fnSaveCategory: t, closeModal: n } = a,
            [s, o] = h.useState(a.category),
            c = h.useMemo(
              () => [
                { data: "tagids", label: "Tag Hub" },
                { data: "category", label: "Categories" },
                { data: "contenthub", label: "Hardcoded Filter Hub" },
              ],
              [],
            ),
            u = h.useCallback(
              (l) => o((r) => ({ ...r, content_descriptors: l })),
              [o],
            );
          return (0, e.jsxs)(k.eV, {
            title: `Edit Category (ID ${s.id})`,
            bAllowFullSize: !0,
            onCancel: n,
            closeModal: n,
            children: [
              (0, e.jsx)(d.nB, {
                children: (0, e.jsxs)("div", {
                  className: C().CategoryEditor,
                  children: [
                    (0, e.jsx)(d.pd, {
                      label: "Handle",
                      tooltip:
                        "This forms the end of the URL. It must be unique",
                      value: s.handle,
                      onChange: (l) =>
                        o((r) => ({ ...r, handle: l.target.value })),
                    }),
                    (0, e.jsxs)("div", {
                      className: C().CategoryCtn,
                      children: [
                        (0, e.jsx)(d.pd, {
                          label: "Loc Token",
                          tooltip:
                            "Token only needed if we wish to expose this hub to customers",
                          value: s.loc_token,
                          onChange: (l) =>
                            o((r) => ({ ...r, loc_token: l.target.value })),
                        }),
                        s.loc_token &&
                          (0, e.jsx)(d.a3, {
                            children: (0, j.we)(s.loc_token),
                          }),
                        (0, e.jsx)(d.pd, {
                          label: "Description Loc Token",
                          tooltip:
                            "A localized token explaining this content hub to customers",
                          value: s.description_loc_token,
                          onChange: (l) =>
                            o((r) => ({
                              ...r,
                              description_loc_token: l.target.value,
                            })),
                        }),
                        s.description_loc_token &&
                          (0, e.jsx)(d.a3, {
                            children: (0, j.we)(s.description_loc_token),
                          }),
                      ],
                    }),
                    (0, e.jsx)(d.Yh, {
                      label: "Use As A Heading ",
                      tooltip:
                        "Only used for establishing headings used on the main store drop-down menu",
                      checked: s.heading,
                      onChange: (l) => o((r) => ({ ...r, heading: l })),
                    }),
                    (0, e.jsx)(d.Yh, {
                      label: "Exclude from search ",
                      tooltip: "Do not show this category in store search",
                      checked: s.exclude_from_search,
                      onChange: (l) =>
                        o((r) => ({ ...r, exclude_from_search: l })),
                    }),
                    (0, e.jsx)(d.pd, {
                      label: "Search aliases",
                      tooltip: "Comma separated search aliases",
                      value: s.search_alias,
                      onChange: (l) =>
                        o((r) => ({ ...r, search_alias: l.target.value })),
                    }),
                    (0, e.jsx)(d.m, {
                      label: "Type",
                      rgOptions: c,
                      selectedOption: s.type,
                      onChange: (l) => o((r) => ({ ...r, type: l.data })),
                    }),
                    (0, e.jsx)(re, {
                      rgContentDescriptors: s.content_descriptors ?? [],
                      setContentDescriptors: u,
                    }),
                    (s.type === "tagids" ||
                      s.type === "category" ||
                      s.type == "contenthub") &&
                      (0, e.jsx)(ie, { category: s, setCategory: o }),
                  ],
                }),
              }),
              (0, e.jsx)(d.wi, {
                children: (0, e.jsx)(d.CB, {
                  onCancel: n,
                  onOK: () => {
                    t(s), n();
                  },
                  strOKText: "Save",
                }),
              }),
            ],
          });
        }
        const re = h.memo(function (t) {
          const { rgContentDescriptors: n, setContentDescriptors: s } = t,
            o = h.useMemo(() => [g.M, g.mx, g.T4, g.u7], []);
          return (0, e.jsx)(d.mq, {
            label: "Content Descriptors",
            children: (0, e.jsx)(Z.uh, {
              selectedValue: n,
              onSelectionChange: s,
              options: o,
              getOptionLabel: (c) => X(c),
            }),
          });
        });
        function ie(a) {
          const { category: t, setCategory: n } = a,
            [s, o] = (0, h.useState)(!1),
            [c, u] = (0, h.useState)(0);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (t.type == "tagids" || t.type == "category") &&
                (0, e.jsx)("div", {
                  className: C().CategoryCtn,
                  children: (0, e.jsxs)("div", {
                    className: C().Category,
                    children: [
                      (0, e.jsx)(M, {
                        category: t,
                        setCategory: n,
                        list: "must",
                        title: "Must have all of these tags",
                      }),
                      (0, e.jsx)(M, {
                        category: t,
                        setCategory: n,
                        list: "any",
                        title: "Must have one of these tags",
                      }),
                      (0, e.jsx)(M, {
                        category: t,
                        setCategory: n,
                        list: "mustnot",
                        title: "Must not have any of these tags",
                      }),
                    ],
                  }),
                }),
              (t.type == "tagids" ||
                t.type == "category" ||
                t.type == "contenthub") &&
                (0, e.jsxs)("div", {
                  className: C().CategoryCtn,
                  children: [
                    (0, e.jsx)(M, {
                      category: t,
                      setCategory: n,
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
              s
                ? (0, e.jsxs)(e.Fragment, {
                    children: [
                      (0, e.jsx)(d.$n, {
                        onClick: () => u(c + 1),
                        children: "Refresh Stats",
                      }),
                      (0, e.jsx)(le, { category: t }),
                    ],
                  })
                : (0, e.jsx)(
                    d.Yh,
                    {
                      checked: s,
                      onChange: (l) => o(l),
                      label: "Show Category Sale Stats",
                    },
                    "info" + c,
                  ),
            ],
          });
        }
        function le(a) {
          const { category: t } = a,
            n = (0, R.p$)(t.must, t.any, t.mustnot);
          if (!n)
            return (0, e.jsx)(G.t, {
              string: (0, j.we)("#Loading"),
              position: "center",
              size: "medium",
            });
          const s = n.total_games > b.iT && n.total_games <= b.hp;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(d.$n, {
                onClick: () => {
                  const o = [];
                  o.push(["AppID", "Sale Rank"]),
                    n.top_games.forEach((u) => {
                      o.push(["" + u.appid, "" + u.long_term_sale_rank]);
                    });
                  const c = (t.handle || "top100").replace(" ", "_") + ".csv";
                  F.g.WriteCSVToFile(o, c);
                },
                children: "Download Top 100 Games",
              }),
              (0, e.jsx)(d.$n, {
                onClick: () => {
                  const o = [];
                  o.push(["AppID"]),
                    n.all_appid.forEach((u) => {
                      o.push(["" + u]);
                    });
                  const c = (t.handle || "allgames").replace(" ", "_") + ".csv";
                  F.g.WriteCSVToFile(o, c);
                },
                children: "Download All Games",
              }),
              (0, e.jsxs)("div", {
                className: O.ThemeRow,
                children: [
                  (0, e.jsxs)("div", {
                    className: O.ThemeDefinitionCtn,
                    children: [
                      "Summary: ",
                      (0, e.jsx)(b.KU, { nTotalGames: n.total_games }),
                      !!s && (0, e.jsx)(ce, { category: t }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: O.TopGamesCtn,
                    children: [
                      (0, e.jsx)("div", { children: "Top 10 Games non-F2P:" }),
                      (0, e.jsx)("div", {
                        className: O.GamesColumn,
                        children: n.top_games
                          ?.slice(0, 10)
                          .map((o) =>
                            (0, e.jsx)(
                              b.W7,
                              { info: o, category: t, bSaleSummary: s },
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
        function ce(a) {
          const { category: t } = a,
            n = (0, R.eX)(t.must, t.any, t.mustnot),
            s = (0, R.mg)(t.must, t.any, t.mustnot);
          return (0, e.jsx)(b.ny, { saleSummary: n, topAppSummary: s });
        }
        const M = h.memo(function (t) {
          const { category: n, setCategory: s, list: o, title: c } = t,
            { rgTags: u, rgCategories: l } = (0, v.DT)(),
            r = (p) => {
              s((D) => ({ ...D, [o]: p(D[o]) }));
            },
            m =
              u?.map((p) => ({
                value: p.tagid,
                label: `${p.name} (${p.tagid})`,
              })) || [],
            x =
              l?.map((p) => ({
                value: p.categoryid,
                label: `${p.name} (${p.categoryid})`,
              })) || [];
          return (0, e.jsxs)("div", {
            className: C().TagOrCategoryList,
            children: [
              (0, e.jsx)(d.JU, { children: c }),
              (0, e.jsx)(P.A, {
                bDisabled: !0,
                items: n[o] ?? [],
                onDelete: (p) => r((D) => D.filter((y, S) => S != p)),
                render: (p, D) =>
                  n.type === "tagids" || o === "replaces_tags"
                    ? (0, e.jsxs)("div", {
                        className: C().IDSelector,
                        children: [
                          (0, e.jsx)(d.pd, {
                            value: p.id,
                            onChange: (y) =>
                              r((S) =>
                                S.map((f, T) =>
                                  T == D
                                    ? { ...f, id: parseInt(y.target.value) }
                                    : f,
                                ),
                              ),
                          }),
                          (0, e.jsx)(B.Ay, {
                            className: "react-select-container",
                            classNamePrefix: "react-select",
                            isSearchable: !0,
                            options: m,
                            value: m.find((y) => y.value === p.id),
                            onChange: (y) =>
                              r((S) =>
                                S.map((f, T) =>
                                  T == D ? { ...f, id: y.value } : f,
                                ),
                              ),
                          }),
                        ],
                      })
                    : n.type === "category"
                      ? (0, e.jsx)("div", {
                          className: C().IDSelector,
                          children: (0, e.jsx)(B.Ay, {
                            className: "react-select-container",
                            classNamePrefix: "react-select",
                            isSearchable: !0,
                            options: x,
                            value: x.find((y) => y.value === p.id),
                            onChange: (y) =>
                              r((S) =>
                                S.map((f, T) =>
                                  T == D ? { ...f, id: y.value } : f,
                                ),
                              ),
                          }),
                        })
                      : null,
              }),
              (0, e.jsx)(d.$n, {
                onClick: () => r((p) => (p ? [...p, { id: 0 }] : [{ id: 0 }])),
                children: "Add",
              }),
            ],
          });
        });
        function de(a) {
          const { categories: t, onSave: n, closeModal: s } = a,
            [o, c] = h.useState();
          return (
            h.useEffect(() => {
              (0, v.fT)(t).then((u) => {
                u ? c(u.strErrorMsg) : (n(), s && s());
              });
            }, [t, s, n]),
            (0, e.jsx)(k.o0, {
              strTitle: "Saving",
              bAlertDialog: !0,
              bDisableBackgroundDismiss: !0,
              bHideCloseIcon: !0,
              closeModal: s,
              children: o
                ? (0, e.jsxs)("div", { children: ["Error: ", o] })
                : (0, e.jsx)(G.t, { size: "medium", position: "center" }),
            })
          );
        }
        function ue(a) {
          const { onPublish: t, closeModal: n } = a,
            [s, o] = h.useState(!1),
            [c, u] = h.useState();
          return (
            h.useEffect(() => {
              s &&
                (0, v.LD)().then((l) => {
                  l ? u(l.strErrorMsg) : (t(), o(!1), n && n());
                });
            }, [s, n, t]),
            (0, e.jsx)(k.o0, {
              strTitle: s ? "Publishing" : "Really Publish?",
              strDescription:
                !s &&
                "Publishing will make your changes immediately visible to users.",
              bAlertDialog: s,
              bDisableBackgroundDismiss: s,
              bHideCloseIcon: s,
              onOK: () => {
                s ? n && n() : o(!0);
              },
              onCancel: () => {
                n && n();
              },
              children:
                s &&
                (0, e.jsx)(e.Fragment, {
                  children: c
                    ? (0, e.jsxs)("div", { children: ["Error: ", c] })
                    : (0, e.jsx)(G.t, { size: "medium", position: "center" }),
                }),
            })
          );
        }
        const V = { ContentHubCategories: () => "/categories/" };
        function ge(a) {
          return (0, e.jsxs)(H.Kd, {
            basename: (0, W.C)() + "admin/store/contenthub/",
            children: [
              (0, e.jsx)(z, {}),
              (0, e.jsxs)(I.dO, {
                children: [
                  (0, e.jsx)(I.qh, {
                    path: V.ContentHubCategories(),
                    component: te,
                  }),
                  (0, e.jsx)(I.qh, { component: w.a }),
                ],
              }),
            ],
          });
        }
      },
      4940: (E) => {
        E.exports = {
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
      64641: (E) => {
        E.exports = {
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
      44894: (E, N, i) => {
        "use strict";
        i.d(N, { A: () => e });
        const e =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcJJREFUeNqkUz1PAkEQfStggjESejU0GozlGqn8SGywkYIYY0IsaLCwIBTQUN5fMLGm8S8QSWwslVAYjAlUBEJDhCgWwp3nzN6eHqIVl8zN7rx5b+dm9oRt25jlmcOMj59f10JAkPcBcXIGWdECyqYn6TfGdZ9S9d4K4gQYx4WCtJzE+G/sKJudwpQABUGnGSf5vKzX60jmctL8SYzz+iCdls1mEzuplMIsLSC4iSUh1ClUlpHIZGStVkM0GsVNqVRlIJZIyG63i1AohMdKpUrZRQqXz4j7LWA7VSiR/WRSNhsNRRgOh+i02wgGg3hrtRSZelLmI6cExs7nKJGVtTX50uupMn0+H157PUWmZpYDXLoWUFPo6MC87jivx4MBFtxOWZYS11VipNdT98DWDVsPh2XQNLFIMdc4xpg9OZ3JMdIpRowSXVKt36+yuXvGxn+N0XS+3zj0kG+JSPEi261H5FCLmN9lUyNWyZ+Qag54eA6Hbfa8j1A88g+2qrlqCkKIZdovbAG7m8D5E3B5D9xR7IPsk/u7DextABd14OrBwd6J23YFligQ0IPwXE7lbedXUAPya5yHMiLuq5j1d/4SYAAj3NATBGE4PgAAAABJRU5ErkJggg==";
      },
    },
  ]);
})();
