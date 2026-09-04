/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [4262],
    {
      85795: (F, X, u) => {
        "use strict";
        u.r(X), u.d(X, { SteamMLRoutes: () => h, default: () => he });
        var t = u(7850),
          J = u(58732),
          p = u(90626),
          L = u(17083),
          v = u(92757),
          e = u(64642),
          x = u(14947),
          S = u(3166),
          Y = u(41735),
          y = u.n(Y),
          Q = Object.defineProperty,
          $ = Object.getOwnPropertyDescriptor,
          G = (a, s, i, n) => {
            for (
              var l = n > 1 ? void 0 : n ? $(s, i) : s, c = a.length - 1, m;
              c >= 0;
              c--
            )
              (m = a[c]) && (l = (n ? m(s, i, l) : m(l)) || l);
            return n && l && Q(s, i, l), l;
          },
          Z = ((a) => (
            (a[(a.Unrequested = 0)] = "Unrequested"),
            (a[(a.Pending = 1)] = "Pending"),
            (a[(a.Valid = 2)] = "Valid"),
            (a[(a.Failed = 3)] = "Failed"),
            (a[(a.Rerequest = 4)] = "Rerequest"),
            a
          ))(Z || {});
        class M {
          constructor() {
            (0, x.Gn)(this);
          }
          getData(s, i, n) {
            const l = this.eState == 1 || this.eState == 4;
            return (
              this.isExpired() &&
                !l &&
                ((this.eState = 1),
                i()
                  .then((c) => {
                    if (this.eState == 4) {
                      this.expireData(), this.getData(s, i, n);
                      return;
                    }
                    n ? (this.data = n(c)) : (this.data = c),
                      c
                        ? (this.delayNewData(s), (this.eState = 2))
                        : (this.eState = 3);
                  })
                  .catch((c) => {
                    (this.data = n(void 0)), (this.eState = 3);
                  })),
              this.data
            );
          }
          clearData() {
            (this.eState = 0), (this.data = null), (this.nExpirationTime = 0);
          }
          setDataPending() {
            this.eState = 1;
          }
          isDataPending() {
            return this.eState == 1;
          }
          setData(s, i) {
            (this.data = i), this.delayNewData(s), (this.eState = 2);
          }
          expireData() {
            this.nExpirationTime = 0;
          }
          isExpired() {
            const s = Date.now() / 1e3;
            return this.nExpirationTime < s;
          }
          delayNewData(s) {
            if (s <= 0) this.nExpirationTime = Number.MAX_SAFE_INTEGER;
            else {
              const i = Date.now() / 1e3;
              this.nExpirationTime = i + s;
            }
          }
          rerequestDataIfPending() {
            this.eState == 1 && (this.eState = 4);
          }
          getCachedData() {
            return this.data;
          }
          data = void 0;
          eState = 0;
          nExpirationTime = 0;
        }
        G([x.sH], M.prototype, "data", 2),
          G([x.sH], M.prototype, "nExpirationTime", 2);
        class R {
          constructor() {
            (0, x.Gn)(this);
          }
          getAsyncDataWrapper(s) {
            let i;
            return (
              this.m_mapKeyToDataWrapper.has(s)
                ? (i = this.m_mapKeyToDataWrapper.get(s))
                : ((i = new M()), this.m_mapKeyToDataWrapper.set(s, i)),
              i
            );
          }
          clearKey(s) {
            this.m_mapKeyToDataWrapper.has(s) &&
              this.m_mapKeyToDataWrapper.get(s).clearData(),
              this.m_mapKeyToDataWrapper.delete(s);
          }
          getAllElements() {
            return Array.from(this.m_mapKeyToDataWrapper.values()).map((s) =>
              s.getCachedData(),
            );
          }
          getAllElementsAndKeys() {
            let s = [],
              i = this.m_mapKeyToDataWrapper.entries(),
              n = i.next();
            for (; !n.done; )
              s.push({ key: n.value[0], data: n.value[1].getCachedData() }),
                (n = i.next());
            return s;
          }
          m_mapKeyToDataWrapper = new Map();
        }
        G([x.sH], R.prototype, "m_mapKeyToDataWrapper", 2);
        var ee = Object.defineProperty,
          te = Object.getOwnPropertyDescriptor,
          T = (a, s, i, n) => {
            for (
              var l = n > 1 ? void 0 : n ? te(s, i) : s, c = a.length - 1, m;
              c >= 0;
              c--
            )
              (m = a[c]) && (l = (n ? m(s, i, l) : m(l)) || l);
            return n && l && ee(s, i, l), l;
          };
        const _ = class A {
          constructor() {
            (0, x.Gn)(this);
          }
          static s_SteamMLStore;
          m_asyncSchemaList = new R();
          m_asyncSchemaDetails = new R();
          m_asyncProblemList = new M();
          m_asyncProblemDetails = new R();
          static Get() {
            return (
              A.s_SteamMLStore ||
                ((A.s_SteamMLStore = new A()), A.s_SteamMLStore.Init()),
              A.s_SteamMLStore
            );
          }
          Init() {}
          GetSchemaList(s, i) {
            const n = s + "_" + i;
            return this.m_asyncSchemaList.getAsyncDataWrapper(n).getData(
              30,
              async () =>
                await y().get(
                  `${S.TS.PARTNER_BASE_URL}steamml/get_schemas?appid=${s}&includesteammlapp=${i}&sessionid=${(0, S.KC)()}`,
                ),
              (l) => l.data.schemas,
            );
          }
          GetSchemaDetails(s, i) {
            return this.m_asyncSchemaDetails.getAsyncDataWrapper(i).getData(
              30,
              async () =>
                await y().get(
                  `${S.TS.PARTNER_BASE_URL}steamml/get_schema_details?appid=${s}&schemaid=${i}&sessionid=${(0, S.KC)()}`,
                ),
              (n) => JSON.parse(n.data.schema_description_json),
            );
          }
          GetProblemList() {
            return this.m_asyncProblemList.getData(
              30,
              async () =>
                await y().get(
                  `${S.TS.PARTNER_BASE_URL}steamml/get_problems?sessionid=${(0, S.KC)()}`,
                ),
              (s) => s.data.problems,
            );
          }
          GetProblemDetails(s) {
            return this.m_asyncProblemDetails.getAsyncDataWrapper(s).getData(
              30,
              async () =>
                await y().get(
                  `${S.TS.PARTNER_BASE_URL}steamml/get_problem_details?problemid=${s}&sessionid=${(0, S.KC)()}`,
                ),
              (i) => i.data.problem,
            );
          }
          CreateProblem(s, i, n) {
            let l = new FormData();
            return (
              l.append("sessionid", (0, S.KC)()),
              l.append("name", s),
              l.append("description", i),
              l.append("schemaids", n.join(",")),
              y()
                .post(`${S.TS.PARTNER_BASE_URL}steamml/create_problem`, l)
                .then(() => {
                  this.m_asyncProblemList.clearData();
                })
            );
          }
          EditProblemName(s, i) {
            let n = new FormData();
            n.append("name", i), this.EditProblem(s, n);
          }
          EditProblemDesc(s, i) {
            let n = new FormData();
            n.append("description", i), this.EditProblem(s, n);
          }
          EditProblemSchemas(s, i) {
            let n = new FormData();
            n.append("schemaids", i.join(",")), this.EditProblem(s, n);
          }
          EditProblem(s, i) {
            return (
              i.append("sessionid", (0, S.KC)()),
              i.append("problemid", s.toString()),
              y()
                .post(`${S.TS.PARTNER_BASE_URL}steamml/edit_problem`, i)
                .then(() => {
                  this.m_asyncProblemDetails
                    .getAsyncDataWrapper(s)
                    .expireData();
                })
            );
          }
          DeleteProblem(s) {
            let i = new FormData();
            return (
              i.append("sessionid", (0, S.KC)()),
              i.append("problemid", s.toString()),
              y()
                .post(`${S.TS.PARTNER_BASE_URL}steamml/delete_problem`, i)
                .then(() => {
                  this.m_asyncProblemList.clearData();
                })
            );
          }
        };
        T([x.sH], _.prototype, "m_asyncSchemaList", 2),
          T([x.sH], _.prototype, "m_asyncSchemaDetails", 2),
          T([x.sH], _.prototype, "m_asyncProblemList", 2),
          T([x.sH], _.prototype, "m_asyncProblemDetails", 2),
          T([x.XI], _.prototype, "Init", 1);
        let b = _;
        var E = u(75844),
          d = u(36707),
          ae = u(24642);
        const se = (0, E.PA)((a) => {
          const i = (0, v.g)().schemaid == "0",
            n = [
              { label: "816 - Dota Beta", value: "816" },
              { label: "570 - Dota", value: "570" },
              { label: "730 - CS:GO", value: "730" },
              { label: "1015410 - SteamML", value: "1015410" },
            ],
            [l, c] = (0, p.useState)(n[0].value);
          if (!i) return null;
          const m = b.Get().GetSchemaList(parseInt(l), !0);
          if (!m) return null;
          let D = [];
          for (const o of m)
            D.push(
              (0, t.jsxs)(
                L.N_,
                {
                  to: h.SteamMLSchemas(o.appid, o.schemaid),
                  className: e.SchemaElement,
                  children: [
                    (0, t.jsxs)("div", {
                      className: e.HorizontalSection,
                      children: [
                        (0, t.jsx)("div", {
                          className: e.SchemaName,
                          children: o.name,
                        }),
                        (0, t.jsxs)("div", {
                          className: e.SchemaID,
                          children: [
                            (0, t.jsx)("span", {
                              className: e.Label,
                              children: "Schema ID",
                            }),
                            " ",
                            o.schemaid,
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: e.AppID,
                      children: ["AppID ", o.appid],
                    }),
                    (0, t.jsxs)("div", {
                      className: e.HorizontalSection,
                      children: [
                        (0, t.jsxs)("div", {
                          className: e.RowCount,
                          children: [
                            (0, t.jsx)("span", {
                              className: e.Label,
                              children: "Rows:",
                            }),
                            " ",
                            o.row_count,
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          className: e.KeepCount,
                          children: [
                            (0, t.jsx)("span", {
                              className: e.Label,
                              children: "Keep Count:",
                            }),
                            " ",
                            (0, ae.D)(o.keep_count),
                          ],
                        }),
                      ],
                    }),
                  ],
                },
                o.schemaid,
              ),
            );
          return (0, t.jsxs)("div", {
            className: e.SchemaList,
            children: [
              (0, t.jsx)("select", {
                className: e.SelectAppID,
                value: l,
                onChange: (o) => c(o.target.value),
                children: n.map((o) =>
                  (0, t.jsx)(
                    "option",
                    { value: o.value, children: o.label },
                    o.value,
                  ),
                ),
              }),
              D,
            ],
          });
        });
        function z(a) {
          switch (a) {
            case 1:
              return "int32";
            case 2:
              return "int64";
            case 3:
              return "bool";
            case 4:
              return "float";
            case 5:
              return "enum";
            case 6:
              return "timestamp";
          }
          return "";
        }
        function q(a) {
          switch (a) {
            case 1:
              return e.TypeInt32;
            case 2:
              return e.TypeInt64;
            case 3:
              return e.TypeBool;
            case 4:
              return e.TypeFloat;
            case 5:
              return e.TypeEnum;
            case 6:
              return e.TypeTimestamp;
          }
          return "";
        }
        function K(a, s, i) {
          let n;
          const l = s.indexOf(a.name),
            c = l == -1 && !a.count;
          return (
            a.structure
              ? (n = (0, t.jsxs)("div", {
                  className: (0, d.A)(
                    e.SchemaDetailsElement,
                    e.SchemaDetailsStruct,
                  ),
                  children: [
                    !a.count &&
                      (0, t.jsxs)("div", {
                        className: e.SchemaDetailsStructRow,
                        onClick: () => {
                          i(
                            c
                              ? [...s, a.name]
                              : s.slice(0, l).concat(s.slice(l + 1)),
                          );
                        },
                        children: [
                          (0, t.jsx)("div", {
                            className: (0, d.A)(
                              c && e.Collapsed,
                              e.CollapseIcon,
                            ),
                            children: "\u25BC",
                          }),
                          (0, t.jsxs)("div", {
                            className: e.SchemaDetailsElementBody,
                            children: [
                              (0, t.jsx)("div", {
                                className: e.ElementName,
                                children: a.name,
                              }),
                              (0, t.jsx)("div", {
                                className: e.TypeName,
                                children: "STRUCT",
                              }),
                            ],
                          }),
                        ],
                      }),
                    a.structure.member.map((m) =>
                      (0, t.jsx)(
                        "div",
                        {
                          className: (0, d.A)(
                            c && e.IndentCollapsed,
                            e.StructIndent,
                          ),
                          children: K(m, s, i),
                        },
                        m.name,
                      ),
                    ),
                  ],
                }))
              : a.array && a.array.primitive
                ? (n = (0, t.jsx)("div", {
                    className: (0, d.A)(
                      e.SchemaDetailsElement,
                      e.SchemaDetailsArray,
                    ),
                    children: (0, t.jsxs)("div", {
                      className: (0, d.A)(
                        e.SchemaDetailsElementBody,
                        q(a.array.primitive.type_info.type),
                      ),
                      children: [
                        (0, t.jsx)("div", {
                          className: e.ElementName,
                          children: a.name,
                        }),
                        (0, t.jsxs)("div", {
                          className: e.TypeName,
                          children: [
                            z(a.array.primitive.type_info.type),
                            " [",
                            a.array.max_length,
                            "]",
                          ],
                        }),
                      ],
                    }),
                  }))
                : a.array && a.array.structure
                  ? (n = (0, t.jsxs)("div", {
                      className: (0, d.A)(
                        e.SchemaDetailsElement,
                        e.SchemaDetailsArray,
                      ),
                      children: [
                        !a.count &&
                          (0, t.jsxs)("div", {
                            className: e.SchemaDetailsStructRow,
                            onClick: () => {
                              i(
                                c
                                  ? [...s, a.name]
                                  : s.slice(0, l).concat(s.slice(l + 1)),
                              );
                            },
                            children: [
                              (0, t.jsx)("div", {
                                className: (0, d.A)(
                                  c && e.Collapsed,
                                  e.CollapseIcon,
                                ),
                                children: "\u25BC",
                              }),
                              (0, t.jsxs)("div", {
                                className: e.SchemaDetailsElementBody,
                                children: [
                                  (0, t.jsx)("div", {
                                    className: e.ElementName,
                                    children: a.name,
                                  }),
                                  (0, t.jsxs)("div", {
                                    className: e.TypeName,
                                    children: [
                                      "STRUCT [",
                                      a.array.max_length,
                                      "]",
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        a.array.structure.member.map((m) =>
                          (0, t.jsx)(
                            "div",
                            {
                              className: (0, d.A)(
                                c && e.IndentCollapsed,
                                e.StructIndent,
                              ),
                              children: K(m, s, i),
                            },
                            m.name,
                          ),
                        ),
                      ],
                    }))
                  : a.primitive &&
                    (n = (0, t.jsx)("div", {
                      className: (0, d.A)(
                        e.SchemaDetailsElement,
                        e.SchemaDetailsArray,
                      ),
                      children: (0, t.jsxs)("div", {
                        className: (0, d.A)(
                          e.SchemaDetailsElementBody,
                          q(a.primitive.type_info.type),
                        ),
                        children: [
                          (0, t.jsx)("div", {
                            className: e.ElementName,
                            children: a.name,
                          }),
                          (0, t.jsx)("div", {
                            className: e.TypeName,
                            children: z(a.primitive.type_info.type),
                          }),
                        ],
                      }),
                    })),
            n
          );
        }
        const ie = (0, E.PA)((a) => {
            const s = (0, v.g)(),
              i = s.schemaid == "0",
              [n, l] = (0, p.useState)([]);
            if (i) return null;
            const c = b.Get().GetSchemaDetails(parseInt(s.appid), s.schemaid);
            return c
              ? (console.log((0, x.HO)(c)),
                (0, t.jsxs)("div", {
                  className: e.SchemaDetails,
                  children: [
                    (0, t.jsx)(L.N_, {
                      to: h.SteamMLSchemas("0"),
                      className: e.Back,
                      children: "<< BACK",
                    }),
                    (0, t.jsx)("div", {
                      className: e.SchemaDetailsHeader,
                      children: (0, t.jsxs)("div", {
                        className: e.SchemaDetailsTitle,
                        children: [
                          (0, t.jsxs)("div", {
                            className: e.SchemaDetailsName,
                            children: ["SCHEMA ", c.name],
                          }),
                          (0, t.jsx)("div", {
                            className: e.SchemaDetailsSchemaID,
                            children: s.schemaid,
                          }),
                        ],
                      }),
                    }),
                    (0, t.jsx)("div", {
                      className: e.SchemaDetailsElements,
                      children: K(c, n, l),
                    }),
                  ],
                }))
              : null;
          }),
          ne = (0, E.PA)((a) =>
            (0, t.jsxs)("div", {
              className: e.SchemaPage,
              children: [(0, t.jsx)(se, {}), (0, t.jsx)(ie, {})],
            }),
          ),
          w = (a) =>
            (0, t.jsx)("div", {
              className: (0, d.A)(
                e.SteamMLButton,
                a.acceptStyle && e.AcceptButton,
                a.cancelStyle && e.CancelButton,
                a.disabled && e.Disabled,
              ),
              style: { minWidth: a.minWidth },
              onClick: (s) => {
                a.disabled || (a.onClick(), s.stopPropagation());
              },
              children: (0, t.jsx)("div", {
                className: e.Inner,
                children: a.children,
              }),
            }),
          le = ({ problem: a }) => (
            console.log((0, x.HO)(a)),
            (0, t.jsxs)(L.N_, {
              to: h.SteamMLProblems(a.problemid),
              className: e.ProblemEntry,
              children: [
                (0, t.jsx)("div", {
                  className: e.ProblemName,
                  children: a.name,
                }),
                !a.active &&
                  (0, t.jsx)("div", {
                    className: e.Inactive,
                    children: "Inactive",
                  }),
                (0, t.jsx)("div", {
                  className: e.ProblemDescription,
                  children: a.problem_description,
                }),
                (0, t.jsx)("div", {
                  className: e.ProblemID,
                  children: a.problemid,
                }),
                (0, t.jsxs)("div", {
                  className: e.Dates,
                  children: [
                    (0, t.jsxs)("div", {
                      className: e.CreatedDate,
                      children: [
                        "Created ",
                        new Date(a.create_time * 1e3).toLocaleDateString([
                          "en-us",
                        ]),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: e.UpdatedDate,
                      children: [
                        "Last modified ",
                        new Date(a.update_time * 1e3).toLocaleDateString([
                          "en-us",
                        ]),
                      ],
                    }),
                  ],
                }),
              ],
            })
          ),
          ce = (a) => {
            const [s, i] = (0, p.useState)(!1),
              [n, l] = (0, p.useState)(""),
              [c, m] = (0, p.useState)(""),
              [D, o] = (0, p.useState)([]),
              f = b
                .Get()
                .GetSchemaList(0, !0)
                ?.sort((N, P) => (N.name < P.name ? -1 : 1))
                ?.filter((N, P, C) => P == 0 || N.name != C[P - 1].name),
              j = n.length > 0 && c.length > 0 && D.length > 0,
              H = () => {
                b.Get().CreateProblem(n, c, D);
              };
            return (0, t.jsxs)("div", {
              className: (0, d.A)(
                e.AddNewProblem,
                !s && e.IsPrompt,
                s && e.IsHeader,
              ),
              onClick: () => i(!0),
              children: [
                (0, t.jsxs)("div", {
                  className: e.NewProblemHeader,
                  children: [
                    (0, t.jsx)("img", {
                      className: e.PlusSymbol,
                      src: `${S.TS.IMG_URL}webui/storeadmin/plus.png`,
                    }),
                    (0, t.jsx)("div", {
                      className: e.AddProblemHeader,
                      children: "Add New Problem" + (s ? "" : "?"),
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: e.NewProblemDescription,
                  children: [
                    (0, t.jsxs)("div", {
                      className: e.LabelValue,
                      children: [
                        (0, t.jsx)("div", {
                          className: e.Label,
                          children: "Name",
                        }),
                        (0, t.jsx)("input", {
                          className: e.Value,
                          type: "text",
                          value: n,
                          onChange: (N) => l(N.target.value),
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: e.LabelValue,
                      children: [
                        (0, t.jsx)("div", {
                          className: e.Label,
                          children: "Description",
                        }),
                        (0, t.jsx)("input", {
                          className: e.Value,
                          type: "text",
                          value: c,
                          onChange: (N) => m(N.target.value),
                        }),
                      ],
                    }),
                    f &&
                      (0, t.jsxs)("div", {
                        className: e.SchemaListContainer,
                        children: [
                          (0, t.jsx)("div", {
                            className: e.SchemaSelectListTitle,
                            children: "Select Schemas to Include",
                          }),
                          (0, t.jsx)("div", {
                            className: e.SchemaSelectList,
                            children: f.map((N) => {
                              const C = D.indexOf(N.schemaid) != -1;
                              return (0, t.jsx)(
                                "div",
                                {
                                  className: (0, d.A)(
                                    e.SchemaOption,
                                    C && e.Selected,
                                  ),
                                  onClick: () =>
                                    o(
                                      C
                                        ? D.filter((g) => g != N.schemaid)
                                        : D.concat(N.schemaid),
                                    ),
                                  children: N.name,
                                },
                                N.schemaid,
                              );
                            }),
                          }),
                        ],
                      }),
                    (0, t.jsxs)("div", {
                      className: e.ButtonContainer,
                      children: [
                        (0, t.jsx)(w, {
                          acceptStyle: !0,
                          minWidth: 100,
                          disabled: !j,
                          onClick: () => j && H(),
                          children: "Create",
                        }),
                        (0, t.jsx)(w, {
                          cancelStyle: !0,
                          minWidth: 100,
                          onClick: () => i(!1),
                          children: "Cancel",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          },
          re = (0, E.PA)(({ schemaid: a }) => {
            const s = b.Get().GetSchemaList(0, !0);
            let i;
            if (s) {
              const n = s.filter((l) => l.schemaid == a);
              n.length > 0 && (i = n[0]);
            }
            return (0, t.jsx)("div", {
              className: e.SchemaElement,
              children:
                i &&
                (0, t.jsx)("div", {
                  className: e.SchemaName,
                  children: i.name,
                }),
            });
          }),
          me = (a) => {
            (0, p.useEffect)(() => {
              const s = (i) => {
                i.keyCode === 27 && a();
              };
              return (
                window.addEventListener("keydown", s),
                () => {
                  window.removeEventListener("keydown", s);
                }
              );
            }, [a]);
          },
          de = (0, E.PA)(({ problem: a }) => {
            const [s, i] = (0, p.useState)(!1),
              [n, l] = (0, p.useState)(a.name),
              [c, m] = (0, p.useState)(!1),
              [D, o] = (0, p.useState)(a.problem_description),
              [I, f] = (0, p.useState)(!1),
              [j, H] = (0, p.useState)(a.schemaid),
              N = (0, v.W6)(),
              P = (0, p.useRef)(null),
              C = (0, p.useRef)(null),
              g = parseInt(a.problemid),
              V = b
                .Get()
                .GetSchemaList(0, !0)
                ?.slice()
                .sort((r, B) => (r.name < B.name ? -1 : 1))
                ?.filter((r, B, O) => B == 0 || r.name != O[B - 1].name);
            me(() => {
              W(), U(), o(a.problem_description), m(!1);
            });
            const W = () => {
                l(a.name), i(!1);
              },
              U = () => {
                o(a.problem_description), m(!1);
              },
              k = () => {
                H(a.schemaid), f(!1);
              },
              Se = () => {
                U(), k(), i(!0);
              },
              Ne = () => {
                W(), k(), m(!0);
              },
              ve = () => {
                W(), U(), f(!0);
              },
              xe = () => {
                b.Get().EditProblemName(g, n), (a.name = n), i(!1);
              },
              be = () => {
                b.Get().EditProblemDesc(g, D),
                  (a.problem_description = D),
                  m(!1);
              },
              De = () => {
                b.Get().EditProblemSchemas(g, j), (a.schemaid = j), f(!1);
              },
              je = () => {
                b.Get().DeleteProblem(g), N.push(h.SteamMLProblems(0));
              };
            return (
              s && P.current.focus(),
              c && C.current.focus(),
              (0, t.jsxs)("div", {
                className: e.ProblemDetails,
                children: [
                  (0, t.jsx)(L.N_, {
                    to: h.SteamMLProblems(0),
                    className: e.BackButton,
                    children: "<< BACK ",
                  }),
                  (0, t.jsxs)("div", {
                    className: e.ProblemDetailsHeaderContainer,
                    children: [
                      (0, t.jsx)("div", {
                        className: (0, d.A)(e.ProblemName, s && e.Hidden),
                        onClick: (r) => Se(),
                        children: a.name,
                      }),
                      (0, t.jsx)("form", {
                        className: s ? void 0 : e.Hidden,
                        onSubmit: (r) => {
                          xe(), r.preventDefault();
                        },
                        children: (0, t.jsx)("input", {
                          ref: P,
                          className: e.ProblemNameEditing,
                          type: "text",
                          value: n,
                          onBlur: () => W(),
                          onFocus: (r) => r.target.select(),
                          onChange: (r) => l(r.target.value),
                        }),
                      }),
                      (0, t.jsx)("div", {
                        className: (0, d.A)(
                          e.ProblemDescription,
                          c && e.Hidden,
                        ),
                        onClick: (r) => Ne(),
                        children: a.problem_description,
                      }),
                      (0, t.jsx)("form", {
                        className: c ? void 0 : e.Hidden,
                        onSubmit: (r) => {
                          be(), r.preventDefault();
                        },
                        children: (0, t.jsx)("input", {
                          ref: C,
                          className: e.ProblemDescEditing,
                          type: "text",
                          value: D,
                          onBlur: () => U(),
                          onFocus: (r) => r.target.select(),
                          onChange: (r) => o(r.target.value),
                        }),
                      }),
                      (0, t.jsx)("div", {
                        className: e.ProblemID,
                        children: a.problemid,
                      }),
                      (0, t.jsxs)("div", {
                        className: e.Dates,
                        children: [
                          (0, t.jsxs)("div", {
                            className: e.CreatedDate,
                            children: [
                              "Created ",
                              new Date(a.create_time * 1e3).toLocaleDateString([
                                "en-us",
                              ]),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            className: e.UpdatedDate,
                            children: [
                              "Last modified ",
                              new Date(a.update_time * 1e3).toLocaleDateString([
                                "en-us",
                              ]),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: e.SchemaListContainer,
                    children: [
                      (0, t.jsx)("div", {
                        className: e.SchemaListHeader,
                        children: "Schemas:",
                      }),
                      (0, t.jsx)("div", {
                        className: e.SchemaListEdit,
                        onClick: () => ve(),
                        children: "Edit",
                      }),
                      (0, t.jsx)("div", {
                        className: (0, d.A)(e.SchemaList, I && e.Hidden),
                        children: a.schemaid.map((r) =>
                          (0, t.jsx)(re, { schemaid: r }, r),
                        ),
                      }),
                      (0, t.jsx)("div", {
                        className: (0, d.A)(
                          e.SchemaSelectList,
                          (!I || !V) && e.Hidden,
                        ),
                        children:
                          V &&
                          V.map((r) => {
                            const O = j.indexOf(r.schemaid) != -1;
                            return (0, t.jsx)(
                              "div",
                              {
                                className: (0, d.A)(
                                  e.SchemaOption,
                                  O && e.Selected,
                                ),
                                onClick: () =>
                                  H(
                                    O
                                      ? j.filter((Le) => Le != r.schemaid)
                                      : j.concat(r.schemaid),
                                  ),
                                children: r.name,
                              },
                              r.schemaid,
                            );
                          }),
                      }),
                      I &&
                        (0, t.jsxs)("div", {
                          className: e.ButtonContainer,
                          children: [
                            (0, t.jsx)(w, {
                              minWidth: 100,
                              acceptStyle: !0,
                              disabled: j.length == 0,
                              onClick: () => De(),
                              children: "Accept",
                            }),
                            (0, t.jsx)(w, {
                              minWidth: 100,
                              cancelStyle: !0,
                              onClick: () => k(),
                              children: "Cancel",
                            }),
                          ],
                        }),
                      (0, t.jsx)("div", {
                        className: (0, d.A)(e.DeleteLink, I && e.Hidden),
                        onClick: () => je(),
                        children: "Delete Problem",
                      }),
                    ],
                  }),
                ],
              })
            );
          }),
          oe = (0, E.PA)((a) => {
            const s = (0, v.g)(),
              i = s.problemid == "0";
            let n, l;
            return (
              i
                ? (n = b.Get().GetProblemList())
                : (l = b.Get().GetProblemDetails(parseInt(s.problemid))),
              (0, t.jsxs)("div", {
                className: e.ProblemPage,
                children: [
                  i &&
                    n &&
                    (0, t.jsxs)("div", {
                      className: e.ProblemListContainer,
                      children: [
                        n.map((c) =>
                          (0, t.jsx)(le, { problem: c }, c.problemid),
                        ),
                        n.length == 0 &&
                          (0, t.jsx)("div", {
                            className: e.NoProblems,
                            children: "No Existing Problems",
                          }),
                        (0, t.jsx)(ce, {}),
                      ],
                    }),
                  !i &&
                    l &&
                    (0, t.jsx)("div", {
                      className: e.ProblemDetails,
                      children: (0, t.jsx)(de, { problem: l }),
                    }),
                ],
              })
            );
          }),
          h = {
            SteamMLBase: () => "steamml",
            SteamMLSchemas: (a, s) => `/schemas/${a ?? "0"}/${s ?? "0"}`,
            SteamMLModels: () => "/models",
            SteamMLProblems: (a) => `/problems/${a ?? "0"}`,
          };
        class he extends p.Component {
          render() {
            return (0, t.jsx)("div", {
              className: e.Background,
              children: (0, t.jsxs)(L.Kd, {
                basename: (0, J.C)() + h.SteamMLBase(),
                children: [
                  (0, t.jsx)(pe, {}),
                  (0, t.jsxs)(v.dO, {
                    children: [
                      (0, t.jsx)(v.qh, {
                        exact: !0,
                        path: h.SteamMLSchemas(":appid", ":schemaid"),
                        component: ne,
                      }),
                      (0, t.jsx)(v.qh, {
                        exact: !0,
                        path: h.SteamMLModels(),
                        component: ue,
                      }),
                      (0, t.jsx)(v.qh, {
                        exact: !0,
                        path: h.SteamMLProblems(":problemid"),
                        component: oe,
                      }),
                      (0, t.jsx)(v.qh, {
                        exact: !0,
                        path: "/",
                        children: (0, t.jsx)(v.rd, { to: h.SteamMLSchemas() }),
                      }),
                    ],
                  }),
                ],
              }),
            });
          }
        }
        const pe = (a) => {
            const s = (0, v.zy)(),
              i = (0, v.B6)(s.pathname, {
                path: h.SteamMLSchemas(":appid", ":schemaid"),
                exact: !0,
              }),
              n = (0, v.B6)(s.pathname, { path: h.SteamMLModels(), exact: !0 }),
              l = (0, v.B6)(s.pathname, {
                path: h.SteamMLProblems(":problemid"),
                exact: !0,
              });
            return (0, t.jsxs)("div", {
              className: e.Header,
              children: [
                (0, t.jsx)(L.N_, {
                  to: h.SteamMLSchemas(),
                  className: (0, d.A)(e.HeaderOption, i && e.Selected),
                  children: "SCHEMAS",
                }),
                (0, t.jsx)(L.N_, {
                  to: h.SteamMLModels(),
                  className: (0, d.A)(e.HeaderOption, n && e.Selected),
                  children: "MODELS",
                }),
                (0, t.jsx)(L.N_, {
                  to: h.SteamMLProblems(),
                  className: (0, d.A)(e.HeaderOption, l && e.Selected),
                  children: "PROBLEMS",
                }),
              ],
            });
          },
          ue = (a) => (0, t.jsx)("div", { children: "MODEL PAGE" });
      },
      64642: (F) => {
        F.exports = {
          Background: "msjGfUYNm8rJ4bLS19n2g",
          SteamMLButton: "_2yReXdObU3Ij9YBkzvgYQ7",
          AcceptButton: "_2tY__PC6O-mUh8jRVOh_S7",
          Inner: "_1Zoc2tlDWolWjsI-W18Wvf",
          CancelButton: "_2BCE0thhjq41eNyAVsDAP4",
          Disabled: "_1W_vxrkrcK4BoMnWdzcIo2",
          FullSize: "_1-nKcLiXhx0iBBulrD55Xo",
          Header: "_35ajnHTsONJ6abrtNB0tiG",
          HeaderOption: "_3KFf6Xq-7-jJ29jn3bW4PL",
          Selected: "OilN-vRxEfOtVM-aw6H4Y",
          SchemaPage: "_36OV-RyYj5N9zIaubjlkDo",
          SchemaList: "_3r0tlX7BEcUjUC0nk5CW8i",
          SelectAppID: "_3nezXM-f76hluq1iA1sBte",
          Hidden: "_1VPtlX8LmlSvqpBchxC_7s",
          SchemaElement: "_1xjli_L5ZMmh-nvw9GnUWQ",
          Label: "_3uE4kPiSHlhS4R4wHqX-fN",
          SchemaName: "_36bwAwPhrWLdDlGBGrT1k1",
          AppID: "_3UaebM6BfC-B0yVyI-eoIJ",
          HorizontalSection: "_1rTEk-J6WyXu1fqOq9PjzY",
          RowCount: "gPsPXhyVjxvOBH82Veunm",
          KeepCount: "_2RxONnczAg5Y1_Xnnd7Grt",
          SchemaDetails: "_1gFQfWKXhOQbkaNjbGVU16",
          Back: "_2m9wkgXpcf3-99TaQKL0tE",
          SchemaDetailsHeader: "cUNhZfaxsGzKaFQAx4vvf",
          SchemaDetailsBack: "_15COwPUDCRCEDUMsYujCkU",
          SchemaDetailsTitle: "_9IFURqUFtrCAO5kbHAO_U",
          SchemaDetailsName: "CblW8QTasV2DO4cRW0prn",
          SchemaDetailsSchemaID: "_16qUhwW_c8Pbmu5Z6xinEO",
          SchemaDetailsElements: "_3DsdfooA5ZsBVzHlo0spou",
          SchemaDetailsElement: "_2_-ubEumKcrrljcqkDz-nd",
          SchemaDetailsElementBody: "_1lLqQDLnUIIdV6R57346No",
          TypeInt32: "_3q6FZ-EpaofO1UX84CRKPz",
          TypeName: "_11e6zJoDlODofUVbR3Lua3",
          TypeInt64: "_1sUna6-XvlT6BdFU-xDxr_",
          TypeBool: "_3QiDC_egBPUil1L8Lxw-E6",
          TypeFloat: "DfgR36rhRvbWATh2rkEU3",
          TypeEnum: "_3w9sP-z9NZw5JwDMJvGha_",
          TypeTimestamp: "_33yo73pTOoKCyF87NLP4Io",
          ElementName: "_1v_wKNlVbQ4nQF8_Zbhiea",
          SchemaDetailsStructRow: "lWQfKVb7uqk9UKbjyyGIM",
          CollapseIcon: "_1vRxM4k_iJiVi6F1fzS1e3",
          Collapsed: "_3qRbu04vYScSY1knrHbExY",
          StructIndent: "_1bga0T4ksdggWPn8sb1tmQ",
          IndentCollapsed: "_1OU7XyPtFGtCm92v_LX-be",
          ProblemPage: "_3F8_Lyio-BwNK1Z5Pbu5vv",
          ProblemListContainer: "_35Ll4m_-B9fWDt-no-d8xp",
          ProblemListHeader: "_21PbN-aJWj8YJP-4YCaaVU",
          NoProblems: "IRyHOENJwvmX3tAY16ZaS",
          ProblemEntry: "_13BKEPL1RjPkUJgyypi6LX",
          ProblemName: "_3Hgxj-6wNEi2QJdiNmSEq8",
          Inactive: "TW09gRIZG46PUd8KEpPJM",
          ProblemDescription: "_3qnlNmBMwzicL--uJDt0xW",
          ProblemID: "_2yjPq_vUBe5vX8477Nd6Lb",
          Dates: "_3jJSRWPIEMmq_zw-n_Vmuj",
          CreatedDate: "_3nOnI7HpOqBDP7GOYro3RB",
          UpdatedDate: "_3gM54QZsU-d3rfw7v88yoF",
          ProblemSchemaList: "_2k2xZ2WqcQSptTfC2u-1WK",
          AddNewProblem: "_1IaIKe5N5mtG4ReCT5Nfnk",
          IsPrompt: "_1F_iVaudtZtIBggLz8TgsQ",
          NewProblemHeader: "_2Uxe1WauLy_WSI8HBMDmpb",
          PlusSymbol: "_2zfyC9pxT6ynYwfsxjjIcc",
          NewProblemDescription: "_3vIDf6PJy59Oae8lfCLYRT",
          IsHeader: "_1vZgEO-rIh1azL1QsqnUkE",
          AddProblemHeader: "_3dXukBGeFSKrjNRapz-vdw",
          LabelValue: "_3wqW3cCIDXXgA0L0ry28IN",
          Value: "_3RWed3mcqH6MmHhBgbkBGD",
          SchemaListContainer: "_3TzDRcTE7EvonQr-6ImEtT",
          SchemaSelectListTitle: "_37bp6yYCYbU-Aaxc6idCSh",
          ButtonContainer: "Sp68rQoQKv4sPj4vE-rm6",
          SchemaSelectList: "_3spVxRuLYDKpX2IsKvxhXN",
          SchemaOption: "_2eV2TTGJXmq22-NxPpT3eI",
          ProblemDetails: "UGqiqHtL23JkoCU_MSnsq",
          BackButton: "_1Sb8R2jk0DatSLTFo4nULP",
          ProblemDetailsHeaderContainer: "_28zUxX41jCodxcCCVF55ZH",
          ProblemNameEditing: "_2268oRWsoMSsQ4JcKBxJlp",
          ProblemDescEditing: "VSvOsoK438LYv7WiV-r91",
          SchemaListHeader: "_3rvzlEx7gsz_CuUwlLbLeL",
          SchemaListEdit: "_1Ch8t8kvrdudLjhmNW6D86",
          DeleteLink: "_2lI41nfrJhWqIcuoYAfdcC",
        };
      },
    },
  ]);
})();
