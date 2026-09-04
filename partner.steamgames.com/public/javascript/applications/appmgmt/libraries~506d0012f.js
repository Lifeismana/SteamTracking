/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [4568],
    {
      67796: (Ve, b, D) => {
        D.d(b, { Kv: () => ee, N4: () => Z });
        var T = D(90626),
          A = D(16666); /**
         * react-table
         *
         * Copyright (c) TanStack
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE.md file in the root directory of this source tree.
         *
         * @license MIT
         */
        function ee(p, h) {
          return p ? (G(p) ? T.createElement(p, h) : p) : null;
        }
        function G(p) {
          return N(p) || typeof p == "function" || W(p);
        }
        function N(p) {
          return (
            typeof p == "function" &&
            (() => {
              const h = Object.getPrototypeOf(p);
              return h.prototype && h.prototype.isReactComponent;
            })()
          );
        }
        function W(p) {
          return (
            typeof p == "object" &&
            typeof p.$$typeof == "symbol" &&
            ["react.memo", "react.forward_ref"].includes(p.$$typeof.description)
          );
        }
        function Z(p) {
          const h = {
              state: {},
              onStateChange: () => {},
              renderFallbackValue: null,
              ...p,
            },
            [X] = T.useState(() => ({ current: (0, A.ZR)(h) })),
            [te, y] = T.useState(() => X.current.initialState);
          return (
            X.current.setOptions((q) => ({
              ...q,
              ...p,
              state: { ...te, ...p.state },
              onStateChange: (J) => {
                y(J), p.onStateChange == null || p.onStateChange(J);
              },
            })),
            X.current
          );
        }
      },
      16666: (Ve, b, D) => {
        D.d(b, {
          FB: () => T,
          HT: () => Ye,
          ZR: () => Je,
          cU: () => nt,
          h5: () => rt,
          hM: () => tt,
        }); /**
         * table-core
         *
         * Copyright (c) TanStack
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE.md file in the root directory of this source tree.
         *
         * @license MIT
         */
        function T() {
          return {
            accessor: (e, o) =>
              typeof e == "function"
                ? { ...o, accessorFn: e }
                : { ...o, accessorKey: e },
            display: (e) => e,
            group: (e) => e,
          };
        }
        function A(e, o) {
          return typeof e == "function" ? e(o) : e;
        }
        function ee() {}
        function G(e, o) {
          return (t) => {
            o.setState((n) => ({ ...n, [e]: A(t, n[e]) }));
          };
        }
        function N(e) {
          return e instanceof Function;
        }
        function W(e) {
          return Array.isArray(e) && e.every((o) => typeof o == "number");
        }
        function Z(e, o) {
          const t = [],
            n = (r) => {
              r.forEach((i) => {
                t.push(i);
                const l = o(i);
                l != null && l.length && n(l);
              });
            };
          return n(e), t;
        }
        function p(e, o, t) {
          let n = [],
            r;
          return (i) => {
            let l;
            t.key && t.debug && (l = Date.now());
            const s = e(i);
            if (!(s.length !== n.length || s.some((c, S) => n[S] !== c)))
              return r;
            n = s;
            let g;
            if (
              (t.key && t.debug && (g = Date.now()),
              (r = o(...s)),
              t == null || t.onChange == null || t.onChange(r),
              t.key && t.debug && t != null && t.debug())
            ) {
              const c = Math.round((Date.now() - l) * 100) / 100,
                S = Math.round((Date.now() - g) * 100) / 100,
                d = S / 16,
                u = (f, m) => {
                  for (f = String(f); f.length < m; ) f = " " + f;
                  return f;
                };
              console.info(
                `%c\u23F1 ${u(S, 5)} /${u(c, 5)} ms`,
                `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * d, 120))}deg 100% 31%);`,
                t?.key,
              );
            }
            return r;
          };
        }
        function h(e, o, t, n) {
          return {
            debug: () => {
              var r;
              return (r = e?.debugAll) != null ? r : e[o];
            },
            key: !1,
            onChange: n,
          };
        }
        function X(e, o, t, n) {
          const r = () => {
              var l;
              return (l = i.getValue()) != null
                ? l
                : e.options.renderFallbackValue;
            },
            i = {
              id: `${o.id}_${t.id}`,
              row: o,
              column: t,
              getValue: () => o.getValue(n),
              renderValue: r,
              getContext: p(
                () => [e, t, o, i],
                (l, s, a, g) => ({
                  table: l,
                  column: s,
                  row: a,
                  cell: g,
                  getValue: g.getValue,
                  renderValue: g.renderValue,
                }),
                h(e.options, "debugCells", "cell.getContext"),
              ),
            };
          return (
            e._features.forEach((l) => {
              l.createCell == null || l.createCell(i, t, o, e);
            }, {}),
            i
          );
        }
        function te(e, o, t, n) {
          var r, i;
          const s = { ...e._getDefaultColumnDef(), ...o },
            a = s.accessorKey;
          let g =
              (r =
                (i = s.id) != null
                  ? i
                  : a
                    ? typeof String.prototype.replaceAll == "function"
                      ? a.replaceAll(".", "_")
                      : a.replace(/\./g, "_")
                    : void 0) != null
                ? r
                : typeof s.header == "string"
                  ? s.header
                  : void 0,
            c;
          if (
            (s.accessorFn
              ? (c = s.accessorFn)
              : a &&
                (a.includes(".")
                  ? (c = (d) => {
                      let u = d;
                      for (const m of a.split(".")) {
                        var f;
                        u = (f = u) == null ? void 0 : f[m];
                      }
                      return u;
                    })
                  : (c = (d) => d[s.accessorKey])),
            !g)
          )
            throw new Error();
          let S = {
            id: `${String(g)}`,
            accessorFn: c,
            parent: n,
            depth: t,
            columnDef: s,
            columns: [],
            getFlatColumns: p(
              () => [!0],
              () => {
                var d;
                return [
                  S,
                  ...((d = S.columns) == null
                    ? void 0
                    : d.flatMap((u) => u.getFlatColumns())),
                ];
              },
              h(e.options, "debugColumns", "column.getFlatColumns"),
            ),
            getLeafColumns: p(
              () => [e._getOrderColumnsFn()],
              (d) => {
                var u;
                if ((u = S.columns) != null && u.length) {
                  let f = S.columns.flatMap((m) => m.getLeafColumns());
                  return d(f);
                }
                return [S];
              },
              h(e.options, "debugColumns", "column.getLeafColumns"),
            ),
          };
          for (const d of e._features)
            d.createColumn == null || d.createColumn(S, e);
          return S;
        }
        const y = "debugHeaders";
        function q(e, o, t) {
          var n;
          let i = {
            id: (n = t.id) != null ? n : o.id,
            column: o,
            index: t.index,
            isPlaceholder: !!t.isPlaceholder,
            placeholderId: t.placeholderId,
            depth: t.depth,
            subHeaders: [],
            colSpan: 0,
            rowSpan: 0,
            headerGroup: null,
            getLeafHeaders: () => {
              const l = [],
                s = (a) => {
                  a.subHeaders && a.subHeaders.length && a.subHeaders.map(s),
                    l.push(a);
                };
              return s(i), l;
            },
            getContext: () => ({ table: e, header: i, column: o }),
          };
          return (
            e._features.forEach((l) => {
              l.createHeader == null || l.createHeader(i, e);
            }),
            i
          );
        }
        const J = {
          createTable: (e) => {
            (e.getHeaderGroups = p(
              () => [
                e.getAllColumns(),
                e.getVisibleLeafColumns(),
                e.getState().columnPinning.left,
                e.getState().columnPinning.right,
              ],
              (o, t, n, r) => {
                var i, l;
                const s =
                    (i = n
                      ?.map((S) => t.find((d) => d.id === S))
                      .filter(Boolean)) != null
                      ? i
                      : [],
                  a =
                    (l = r
                      ?.map((S) => t.find((d) => d.id === S))
                      .filter(Boolean)) != null
                      ? l
                      : [],
                  g = t.filter(
                    (S) =>
                      !(n != null && n.includes(S.id)) &&
                      !(r != null && r.includes(S.id)),
                  );
                return Y(o, [...s, ...g, ...a], e);
              },
              h(e.options, y, "getHeaderGroups"),
            )),
              (e.getCenterHeaderGroups = p(
                () => [
                  e.getAllColumns(),
                  e.getVisibleLeafColumns(),
                  e.getState().columnPinning.left,
                  e.getState().columnPinning.right,
                ],
                (o, t, n, r) => (
                  (t = t.filter(
                    (i) =>
                      !(n != null && n.includes(i.id)) &&
                      !(r != null && r.includes(i.id)),
                  )),
                  Y(o, t, e, "center")
                ),
                h(e.options, y, "getCenterHeaderGroups"),
              )),
              (e.getLeftHeaderGroups = p(
                () => [
                  e.getAllColumns(),
                  e.getVisibleLeafColumns(),
                  e.getState().columnPinning.left,
                ],
                (o, t, n) => {
                  var r;
                  const i =
                    (r = n
                      ?.map((l) => t.find((s) => s.id === l))
                      .filter(Boolean)) != null
                      ? r
                      : [];
                  return Y(o, i, e, "left");
                },
                h(e.options, y, "getLeftHeaderGroups"),
              )),
              (e.getRightHeaderGroups = p(
                () => [
                  e.getAllColumns(),
                  e.getVisibleLeafColumns(),
                  e.getState().columnPinning.right,
                ],
                (o, t, n) => {
                  var r;
                  const i =
                    (r = n
                      ?.map((l) => t.find((s) => s.id === l))
                      .filter(Boolean)) != null
                      ? r
                      : [];
                  return Y(o, i, e, "right");
                },
                h(e.options, y, "getRightHeaderGroups"),
              )),
              (e.getFooterGroups = p(
                () => [e.getHeaderGroups()],
                (o) => [...o].reverse(),
                h(e.options, y, "getFooterGroups"),
              )),
              (e.getLeftFooterGroups = p(
                () => [e.getLeftHeaderGroups()],
                (o) => [...o].reverse(),
                h(e.options, y, "getLeftFooterGroups"),
              )),
              (e.getCenterFooterGroups = p(
                () => [e.getCenterHeaderGroups()],
                (o) => [...o].reverse(),
                h(e.options, y, "getCenterFooterGroups"),
              )),
              (e.getRightFooterGroups = p(
                () => [e.getRightHeaderGroups()],
                (o) => [...o].reverse(),
                h(e.options, y, "getRightFooterGroups"),
              )),
              (e.getFlatHeaders = p(
                () => [e.getHeaderGroups()],
                (o) => o.map((t) => t.headers).flat(),
                h(e.options, y, "getFlatHeaders"),
              )),
              (e.getLeftFlatHeaders = p(
                () => [e.getLeftHeaderGroups()],
                (o) => o.map((t) => t.headers).flat(),
                h(e.options, y, "getLeftFlatHeaders"),
              )),
              (e.getCenterFlatHeaders = p(
                () => [e.getCenterHeaderGroups()],
                (o) => o.map((t) => t.headers).flat(),
                h(e.options, y, "getCenterFlatHeaders"),
              )),
              (e.getRightFlatHeaders = p(
                () => [e.getRightHeaderGroups()],
                (o) => o.map((t) => t.headers).flat(),
                h(e.options, y, "getRightFlatHeaders"),
              )),
              (e.getCenterLeafHeaders = p(
                () => [e.getCenterFlatHeaders()],
                (o) =>
                  o.filter((t) => {
                    var n;
                    return !((n = t.subHeaders) != null && n.length);
                  }),
                h(e.options, y, "getCenterLeafHeaders"),
              )),
              (e.getLeftLeafHeaders = p(
                () => [e.getLeftFlatHeaders()],
                (o) =>
                  o.filter((t) => {
                    var n;
                    return !((n = t.subHeaders) != null && n.length);
                  }),
                h(e.options, y, "getLeftLeafHeaders"),
              )),
              (e.getRightLeafHeaders = p(
                () => [e.getRightFlatHeaders()],
                (o) =>
                  o.filter((t) => {
                    var n;
                    return !((n = t.subHeaders) != null && n.length);
                  }),
                h(e.options, y, "getRightLeafHeaders"),
              )),
              (e.getLeafHeaders = p(
                () => [
                  e.getLeftHeaderGroups(),
                  e.getCenterHeaderGroups(),
                  e.getRightHeaderGroups(),
                ],
                (o, t, n) => {
                  var r, i, l, s, a, g;
                  return [
                    ...((r = (i = o[0]) == null ? void 0 : i.headers) != null
                      ? r
                      : []),
                    ...((l = (s = t[0]) == null ? void 0 : s.headers) != null
                      ? l
                      : []),
                    ...((a = (g = n[0]) == null ? void 0 : g.headers) != null
                      ? a
                      : []),
                  ]
                    .map((c) => c.getLeafHeaders())
                    .flat();
                },
                h(e.options, y, "getLeafHeaders"),
              ));
          },
        };
        function Y(e, o, t, n) {
          var r, i;
          let l = 0;
          const s = function (d, u) {
            u === void 0 && (u = 1),
              (l = Math.max(l, u)),
              d
                .filter((f) => f.getIsVisible())
                .forEach((f) => {
                  var m;
                  (m = f.columns) != null && m.length && s(f.columns, u + 1);
                }, 0);
          };
          s(e);
          let a = [];
          const g = (d, u) => {
              const f = {
                  depth: u,
                  id: [n, `${u}`].filter(Boolean).join("_"),
                  headers: [],
                },
                m = [];
              d.forEach((C) => {
                const R = [...m].reverse()[0],
                  _ = C.column.depth === f.depth;
                let M,
                  B = !1;
                if (
                  (_ && C.column.parent
                    ? (M = C.column.parent)
                    : ((M = C.column), (B = !0)),
                  R && R?.column === M)
                )
                  R.subHeaders.push(C);
                else {
                  const P = q(t, M, {
                    id: [n, u, M.id, C?.id].filter(Boolean).join("_"),
                    isPlaceholder: B,
                    placeholderId: B
                      ? `${m.filter(($) => $.column === M).length}`
                      : void 0,
                    depth: u,
                    index: m.length,
                  });
                  P.subHeaders.push(C), m.push(P);
                }
                f.headers.push(C), (C.headerGroup = f);
              }),
                a.push(f),
                u > 0 && g(m, u - 1);
            },
            c = o.map((d, u) => q(t, d, { depth: l, index: u }));
          g(c, l - 1), a.reverse();
          const S = (d) =>
            d
              .filter((f) => f.column.getIsVisible())
              .map((f) => {
                let m = 0,
                  C = 0,
                  R = [0];
                f.subHeaders && f.subHeaders.length
                  ? ((R = []),
                    S(f.subHeaders).forEach((M) => {
                      let { colSpan: B, rowSpan: P } = M;
                      (m += B), R.push(P);
                    }))
                  : (m = 1);
                const _ = Math.min(...R);
                return (
                  (C = C + _),
                  (f.colSpan = m),
                  (f.rowSpan = C),
                  { colSpan: m, rowSpan: C }
                );
              });
          return (
            S((r = (i = a[0]) == null ? void 0 : i.headers) != null ? r : []), a
          );
        }
        const w = (e, o, t, n, r, i, l) => {
            let s = {
              id: o,
              index: n,
              original: t,
              depth: r,
              parentId: l,
              _valuesCache: {},
              _uniqueValuesCache: {},
              getValue: (a) => {
                if (s._valuesCache.hasOwnProperty(a)) return s._valuesCache[a];
                const g = e.getColumn(a);
                if (g != null && g.accessorFn)
                  return (
                    (s._valuesCache[a] = g.accessorFn(s.original, n)),
                    s._valuesCache[a]
                  );
              },
              getUniqueValues: (a) => {
                if (s._uniqueValuesCache.hasOwnProperty(a))
                  return s._uniqueValuesCache[a];
                const g = e.getColumn(a);
                if (g != null && g.accessorFn)
                  return g.columnDef.getUniqueValues
                    ? ((s._uniqueValuesCache[a] = g.columnDef.getUniqueValues(
                        s.original,
                        n,
                      )),
                      s._uniqueValuesCache[a])
                    : ((s._uniqueValuesCache[a] = [s.getValue(a)]),
                      s._uniqueValuesCache[a]);
              },
              renderValue: (a) => {
                var g;
                return (g = s.getValue(a)) != null
                  ? g
                  : e.options.renderFallbackValue;
              },
              subRows: i ?? [],
              getLeafRows: () => Z(s.subRows, (a) => a.subRows),
              getParentRow: () =>
                s.parentId ? e.getRow(s.parentId, !0) : void 0,
              getParentRows: () => {
                let a = [],
                  g = s;
                for (;;) {
                  const c = g.getParentRow();
                  if (!c) break;
                  a.push(c), (g = c);
                }
                return a.reverse();
              },
              getAllCells: p(
                () => [e.getAllLeafColumns()],
                (a) => a.map((g) => X(e, s, g, g.id)),
                h(e.options, "debugRows", "getAllCells"),
              ),
              _getAllCellsByColumnId: p(
                () => [s.getAllCells()],
                (a) => a.reduce((g, c) => ((g[c.column.id] = c), g), {}),
                h(e.options, "debugRows", "getAllCellsByColumnId"),
              ),
            };
            for (let a = 0; a < e._features.length; a++) {
              const g = e._features[a];
              g == null || g.createRow == null || g.createRow(s, e);
            }
            return s;
          },
          v = {
            createColumn: (e, o) => {
              (e._getFacetedRowModel =
                o.options.getFacetedRowModel &&
                o.options.getFacetedRowModel(o, e.id)),
                (e.getFacetedRowModel = () =>
                  e._getFacetedRowModel
                    ? e._getFacetedRowModel()
                    : o.getPreFilteredRowModel()),
                (e._getFacetedUniqueValues =
                  o.options.getFacetedUniqueValues &&
                  o.options.getFacetedUniqueValues(o, e.id)),
                (e.getFacetedUniqueValues = () =>
                  e._getFacetedUniqueValues
                    ? e._getFacetedUniqueValues()
                    : new Map()),
                (e._getFacetedMinMaxValues =
                  o.options.getFacetedMinMaxValues &&
                  o.options.getFacetedMinMaxValues(o, e.id)),
                (e.getFacetedMinMaxValues = () => {
                  if (e._getFacetedMinMaxValues)
                    return e._getFacetedMinMaxValues();
                });
            },
          },
          V = (e, o, t) => {
            var n, r;
            const i =
              t == null || (n = t.toString()) == null
                ? void 0
                : n.toLowerCase();
            return !!(
              !(
                (r = e.getValue(o)) == null ||
                (r = r.toString()) == null ||
                (r = r.toLowerCase()) == null
              ) && r.includes(i)
            );
          };
        V.autoRemove = (e) => z(e);
        const F = (e, o, t) => {
          var n;
          return !!(
            !((n = e.getValue(o)) == null || (n = n.toString()) == null) &&
            n.includes(t)
          );
        };
        F.autoRemove = (e) => z(e);
        const x = (e, o, t) => {
          var n;
          return (
            ((n = e.getValue(o)) == null || (n = n.toString()) == null
              ? void 0
              : n.toLowerCase()) === t?.toLowerCase()
          );
        };
        x.autoRemove = (e) => z(e);
        const I = (e, o, t) => {
          var n;
          return (n = e.getValue(o)) == null ? void 0 : n.includes(t);
        };
        I.autoRemove = (e) => z(e) || !(e != null && e.length);
        const L = (e, o, t) =>
          !t.some((n) => {
            var r;
            return !((r = e.getValue(o)) != null && r.includes(n));
          });
        L.autoRemove = (e) => z(e) || !(e != null && e.length);
        const O = (e, o, t) =>
          t.some((n) => {
            var r;
            return (r = e.getValue(o)) == null ? void 0 : r.includes(n);
          });
        O.autoRemove = (e) => z(e) || !(e != null && e.length);
        const E = (e, o, t) => e.getValue(o) === t;
        E.autoRemove = (e) => z(e);
        const Q = (e, o, t) => e.getValue(o) == t;
        Q.autoRemove = (e) => z(e);
        const ne = (e, o, t) => {
          let [n, r] = t;
          const i = e.getValue(o);
          return i >= n && i <= r;
        };
        (ne.resolveFilterValue = (e) => {
          let [o, t] = e,
            n = typeof o != "number" ? parseFloat(o) : o,
            r = typeof t != "number" ? parseFloat(t) : t,
            i = o === null || Number.isNaN(n) ? -1 / 0 : n,
            l = t === null || Number.isNaN(r) ? 1 / 0 : r;
          if (i > l) {
            const s = i;
            (i = l), (l = s);
          }
          return [i, l];
        }),
          (ne.autoRemove = (e) => z(e) || (z(e[0]) && z(e[1])));
        const U = {
          includesString: V,
          includesStringSensitive: F,
          equalsString: x,
          arrIncludes: I,
          arrIncludesAll: L,
          arrIncludesSome: O,
          equals: E,
          weakEquals: Q,
          inNumberRange: ne,
        };
        function z(e) {
          return e == null || e === "";
        }
        const se = {
          getDefaultColumnDef: () => ({ filterFn: "auto" }),
          getInitialState: (e) => ({ columnFilters: [], ...e }),
          getDefaultOptions: (e) => ({
            onColumnFiltersChange: G("columnFilters", e),
            filterFromLeafRows: !1,
            maxLeafRowFilterDepth: 100,
          }),
          createColumn: (e, o) => {
            (e.getAutoFilterFn = () => {
              const t = o.getCoreRowModel().flatRows[0],
                n = t?.getValue(e.id);
              return typeof n == "string"
                ? U.includesString
                : typeof n == "number"
                  ? U.inNumberRange
                  : typeof n == "boolean" ||
                      (n !== null && typeof n == "object")
                    ? U.equals
                    : Array.isArray(n)
                      ? U.arrIncludes
                      : U.weakEquals;
            }),
              (e.getFilterFn = () => {
                var t, n;
                return N(e.columnDef.filterFn)
                  ? e.columnDef.filterFn
                  : e.columnDef.filterFn === "auto"
                    ? e.getAutoFilterFn()
                    : (t =
                          (n = o.options.filterFns) == null
                            ? void 0
                            : n[e.columnDef.filterFn]) != null
                      ? t
                      : U[e.columnDef.filterFn];
              }),
              (e.getCanFilter = () => {
                var t, n, r;
                return (
                  ((t = e.columnDef.enableColumnFilter) != null ? t : !0) &&
                  ((n = o.options.enableColumnFilters) != null ? n : !0) &&
                  ((r = o.options.enableFilters) != null ? r : !0) &&
                  !!e.accessorFn
                );
              }),
              (e.getIsFiltered = () => e.getFilterIndex() > -1),
              (e.getFilterValue = () => {
                var t;
                return (t = o.getState().columnFilters) == null ||
                  (t = t.find((n) => n.id === e.id)) == null
                  ? void 0
                  : t.value;
              }),
              (e.getFilterIndex = () => {
                var t, n;
                return (t =
                  (n = o.getState().columnFilters) == null
                    ? void 0
                    : n.findIndex((r) => r.id === e.id)) != null
                  ? t
                  : -1;
              }),
              (e.setFilterValue = (t) => {
                o.setColumnFilters((n) => {
                  const r = e.getFilterFn(),
                    i = n?.find((c) => c.id === e.id),
                    l = A(t, i ? i.value : void 0);
                  if (H(r, l, e)) {
                    var s;
                    return (s = n?.filter((c) => c.id !== e.id)) != null
                      ? s
                      : [];
                  }
                  const a = { id: e.id, value: l };
                  if (i) {
                    var g;
                    return (g = n?.map((c) => (c.id === e.id ? a : c))) != null
                      ? g
                      : [];
                  }
                  return n != null && n.length ? [...n, a] : [a];
                });
              });
          },
          createRow: (e, o) => {
            (e.columnFilters = {}), (e.columnFiltersMeta = {});
          },
          createTable: (e) => {
            (e.setColumnFilters = (o) => {
              const t = e.getAllLeafColumns(),
                n = (r) => {
                  var i;
                  return (i = A(o, r)) == null
                    ? void 0
                    : i.filter((l) => {
                        const s = t.find((a) => a.id === l.id);
                        if (s) {
                          const a = s.getFilterFn();
                          if (H(a, l.value, s)) return !1;
                        }
                        return !0;
                      });
                };
              e.options.onColumnFiltersChange == null ||
                e.options.onColumnFiltersChange(n);
            }),
              (e.resetColumnFilters = (o) => {
                var t, n;
                e.setColumnFilters(
                  o
                    ? []
                    : (t =
                          (n = e.initialState) == null
                            ? void 0
                            : n.columnFilters) != null
                      ? t
                      : [],
                );
              }),
              (e.getPreFilteredRowModel = () => e.getCoreRowModel()),
              (e.getFilteredRowModel = () => (
                !e._getFilteredRowModel &&
                  e.options.getFilteredRowModel &&
                  (e._getFilteredRowModel = e.options.getFilteredRowModel(e)),
                e.options.manualFiltering || !e._getFilteredRowModel
                  ? e.getPreFilteredRowModel()
                  : e._getFilteredRowModel()
              ));
          },
        };
        function H(e, o, t) {
          return (
            (e && e.autoRemove ? e.autoRemove(o, t) : !1) ||
            typeof o > "u" ||
            (typeof o == "string" && !o)
          );
        }
        const fe = {
            sum: (e, o, t) =>
              t.reduce((n, r) => {
                const i = r.getValue(e);
                return n + (typeof i == "number" ? i : 0);
              }, 0),
            min: (e, o, t) => {
              let n;
              return (
                t.forEach((r) => {
                  const i = r.getValue(e);
                  i != null && (n > i || (n === void 0 && i >= i)) && (n = i);
                }),
                n
              );
            },
            max: (e, o, t) => {
              let n;
              return (
                t.forEach((r) => {
                  const i = r.getValue(e);
                  i != null && (n < i || (n === void 0 && i >= i)) && (n = i);
                }),
                n
              );
            },
            extent: (e, o, t) => {
              let n, r;
              return (
                t.forEach((i) => {
                  const l = i.getValue(e);
                  l != null &&
                    (n === void 0
                      ? l >= l && (n = r = l)
                      : (n > l && (n = l), r < l && (r = l)));
                }),
                [n, r]
              );
            },
            mean: (e, o) => {
              let t = 0,
                n = 0;
              if (
                (o.forEach((r) => {
                  let i = r.getValue(e);
                  i != null && (i = +i) >= i && (++t, (n += i));
                }),
                t)
              )
                return n / t;
            },
            median: (e, o) => {
              if (!o.length) return;
              const t = o.map((i) => i.getValue(e));
              if (!W(t)) return;
              if (t.length === 1) return t[0];
              const n = Math.floor(t.length / 2),
                r = t.sort((i, l) => i - l);
              return t.length % 2 !== 0 ? r[n] : (r[n - 1] + r[n]) / 2;
            },
            unique: (e, o) =>
              Array.from(new Set(o.map((t) => t.getValue(e))).values()),
            uniqueCount: (e, o) => new Set(o.map((t) => t.getValue(e))).size,
            count: (e, o) => o.length,
          },
          Ee = {
            getDefaultColumnDef: () => ({
              aggregatedCell: (e) => {
                var o, t;
                return (o =
                  (t = e.getValue()) == null || t.toString == null
                    ? void 0
                    : t.toString()) != null
                  ? o
                  : null;
              },
              aggregationFn: "auto",
            }),
            getInitialState: (e) => ({ grouping: [], ...e }),
            getDefaultOptions: (e) => ({
              onGroupingChange: G("grouping", e),
              groupedColumnMode: "reorder",
            }),
            createColumn: (e, o) => {
              (e.toggleGrouping = () => {
                o.setGrouping((t) =>
                  t != null && t.includes(e.id)
                    ? t.filter((n) => n !== e.id)
                    : [...(t ?? []), e.id],
                );
              }),
                (e.getCanGroup = () => {
                  var t, n;
                  return (
                    ((t = e.columnDef.enableGrouping) != null ? t : !0) &&
                    ((n = o.options.enableGrouping) != null ? n : !0) &&
                    (!!e.accessorFn || !!e.columnDef.getGroupingValue)
                  );
                }),
                (e.getIsGrouped = () => {
                  var t;
                  return (t = o.getState().grouping) == null
                    ? void 0
                    : t.includes(e.id);
                }),
                (e.getGroupedIndex = () => {
                  var t;
                  return (t = o.getState().grouping) == null
                    ? void 0
                    : t.indexOf(e.id);
                }),
                (e.getToggleGroupingHandler = () => {
                  const t = e.getCanGroup();
                  return () => {
                    t && e.toggleGrouping();
                  };
                }),
                (e.getAutoAggregationFn = () => {
                  const t = o.getCoreRowModel().flatRows[0],
                    n = t?.getValue(e.id);
                  if (typeof n == "number") return fe.sum;
                  if (Object.prototype.toString.call(n) === "[object Date]")
                    return fe.extent;
                }),
                (e.getAggregationFn = () => {
                  var t, n;
                  if (!e) throw new Error();
                  return N(e.columnDef.aggregationFn)
                    ? e.columnDef.aggregationFn
                    : e.columnDef.aggregationFn === "auto"
                      ? e.getAutoAggregationFn()
                      : (t =
                            (n = o.options.aggregationFns) == null
                              ? void 0
                              : n[e.columnDef.aggregationFn]) != null
                        ? t
                        : fe[e.columnDef.aggregationFn];
                });
            },
            createTable: (e) => {
              (e.setGrouping = (o) =>
                e.options.onGroupingChange == null
                  ? void 0
                  : e.options.onGroupingChange(o)),
                (e.resetGrouping = (o) => {
                  var t, n;
                  e.setGrouping(
                    o
                      ? []
                      : (t =
                            (n = e.initialState) == null
                              ? void 0
                              : n.grouping) != null
                        ? t
                        : [],
                  );
                }),
                (e.getPreGroupedRowModel = () => e.getFilteredRowModel()),
                (e.getGroupedRowModel = () => (
                  !e._getGroupedRowModel &&
                    e.options.getGroupedRowModel &&
                    (e._getGroupedRowModel = e.options.getGroupedRowModel(e)),
                  e.options.manualGrouping || !e._getGroupedRowModel
                    ? e.getPreGroupedRowModel()
                    : e._getGroupedRowModel()
                ));
            },
            createRow: (e, o) => {
              (e.getIsGrouped = () => !!e.groupingColumnId),
                (e.getGroupingValue = (t) => {
                  if (e._groupingValuesCache.hasOwnProperty(t))
                    return e._groupingValuesCache[t];
                  const n = o.getColumn(t);
                  return n != null && n.columnDef.getGroupingValue
                    ? ((e._groupingValuesCache[t] =
                        n.columnDef.getGroupingValue(e.original)),
                      e._groupingValuesCache[t])
                    : e.getValue(t);
                }),
                (e._groupingValuesCache = {});
            },
            createCell: (e, o, t, n) => {
              (e.getIsGrouped = () =>
                o.getIsGrouped() && o.id === t.groupingColumnId),
                (e.getIsPlaceholder = () =>
                  !e.getIsGrouped() && o.getIsGrouped()),
                (e.getIsAggregated = () => {
                  var r;
                  return (
                    !e.getIsGrouped() &&
                    !e.getIsPlaceholder() &&
                    !!((r = t.subRows) != null && r.length)
                  );
                });
            },
          };
        function De(e, o, t) {
          if (!(o != null && o.length) || !t) return e;
          const n = e.filter((i) => !o.includes(i.id));
          return t === "remove"
            ? n
            : [
                ...o.map((i) => e.find((l) => l.id === i)).filter(Boolean),
                ...n,
              ];
        }
        const Ge = {
            getInitialState: (e) => ({ columnOrder: [], ...e }),
            getDefaultOptions: (e) => ({
              onColumnOrderChange: G("columnOrder", e),
            }),
            createColumn: (e, o) => {
              (e.getIndex = p(
                (t) => [oe(o, t)],
                (t) => t.findIndex((n) => n.id === e.id),
                h(o.options, "debugColumns", "getIndex"),
              )),
                (e.getIsFirstColumn = (t) => {
                  var n;
                  return ((n = oe(o, t)[0]) == null ? void 0 : n.id) === e.id;
                }),
                (e.getIsLastColumn = (t) => {
                  var n;
                  const r = oe(o, t);
                  return (
                    ((n = r[r.length - 1]) == null ? void 0 : n.id) === e.id
                  );
                });
            },
            createTable: (e) => {
              (e.setColumnOrder = (o) =>
                e.options.onColumnOrderChange == null
                  ? void 0
                  : e.options.onColumnOrderChange(o)),
                (e.resetColumnOrder = (o) => {
                  var t;
                  e.setColumnOrder(
                    o ? [] : (t = e.initialState.columnOrder) != null ? t : [],
                  );
                }),
                (e._getOrderColumnsFn = p(
                  () => [
                    e.getState().columnOrder,
                    e.getState().grouping,
                    e.options.groupedColumnMode,
                  ],
                  (o, t, n) => (r) => {
                    let i = [];
                    if (!(o != null && o.length)) i = r;
                    else {
                      const l = [...o],
                        s = [...r];
                      for (; s.length && l.length; ) {
                        const a = l.shift(),
                          g = s.findIndex((c) => c.id === a);
                        g > -1 && i.push(s.splice(g, 1)[0]);
                      }
                      i = [...i, ...s];
                    }
                    return De(i, t, n);
                  },
                  h(e.options, "debugTable", "_getOrderColumnsFn"),
                ));
            },
          },
          ce = () => ({ left: [], right: [] }),
          He = {
            getInitialState: (e) => ({ columnPinning: ce(), ...e }),
            getDefaultOptions: (e) => ({
              onColumnPinningChange: G("columnPinning", e),
            }),
            createColumn: (e, o) => {
              (e.pin = (t) => {
                const n = e
                  .getLeafColumns()
                  .map((r) => r.id)
                  .filter(Boolean);
                o.setColumnPinning((r) => {
                  var i, l;
                  if (t === "right") {
                    var s, a;
                    return {
                      left: ((s = r?.left) != null ? s : []).filter(
                        (S) => !(n != null && n.includes(S)),
                      ),
                      right: [
                        ...((a = r?.right) != null ? a : []).filter(
                          (S) => !(n != null && n.includes(S)),
                        ),
                        ...n,
                      ],
                    };
                  }
                  if (t === "left") {
                    var g, c;
                    return {
                      left: [
                        ...((g = r?.left) != null ? g : []).filter(
                          (S) => !(n != null && n.includes(S)),
                        ),
                        ...n,
                      ],
                      right: ((c = r?.right) != null ? c : []).filter(
                        (S) => !(n != null && n.includes(S)),
                      ),
                    };
                  }
                  return {
                    left: ((i = r?.left) != null ? i : []).filter(
                      (S) => !(n != null && n.includes(S)),
                    ),
                    right: ((l = r?.right) != null ? l : []).filter(
                      (S) => !(n != null && n.includes(S)),
                    ),
                  };
                });
              }),
                (e.getCanPin = () =>
                  e.getLeafColumns().some((n) => {
                    var r, i, l;
                    return (
                      ((r = n.columnDef.enablePinning) != null ? r : !0) &&
                      ((i =
                        (l = o.options.enableColumnPinning) != null
                          ? l
                          : o.options.enablePinning) != null
                        ? i
                        : !0)
                    );
                  })),
                (e.getIsPinned = () => {
                  const t = e.getLeafColumns().map((s) => s.id),
                    { left: n, right: r } = o.getState().columnPinning,
                    i = t.some((s) => n?.includes(s)),
                    l = t.some((s) => r?.includes(s));
                  return i ? "left" : l ? "right" : !1;
                }),
                (e.getPinnedIndex = () => {
                  var t, n;
                  const r = e.getIsPinned();
                  return r
                    ? (t =
                        (n = o.getState().columnPinning) == null ||
                        (n = n[r]) == null
                          ? void 0
                          : n.indexOf(e.id)) != null
                      ? t
                      : -1
                    : 0;
                });
            },
            createRow: (e, o) => {
              (e.getCenterVisibleCells = p(
                () => [
                  e._getAllVisibleCells(),
                  o.getState().columnPinning.left,
                  o.getState().columnPinning.right,
                ],
                (t, n, r) => {
                  const i = [...(n ?? []), ...(r ?? [])];
                  return t.filter((l) => !i.includes(l.column.id));
                },
                h(o.options, "debugRows", "getCenterVisibleCells"),
              )),
                (e.getLeftVisibleCells = p(
                  () => [
                    e._getAllVisibleCells(),
                    o.getState().columnPinning.left,
                  ],
                  (t, n) =>
                    (n ?? [])
                      .map((i) => t.find((l) => l.column.id === i))
                      .filter(Boolean)
                      .map((i) => ({ ...i, position: "left" })),
                  h(o.options, "debugRows", "getLeftVisibleCells"),
                )),
                (e.getRightVisibleCells = p(
                  () => [
                    e._getAllVisibleCells(),
                    o.getState().columnPinning.right,
                  ],
                  (t, n) =>
                    (n ?? [])
                      .map((i) => t.find((l) => l.column.id === i))
                      .filter(Boolean)
                      .map((i) => ({ ...i, position: "right" })),
                  h(o.options, "debugRows", "getRightVisibleCells"),
                ));
            },
            createTable: (e) => {
              (e.setColumnPinning = (o) =>
                e.options.onColumnPinningChange == null
                  ? void 0
                  : e.options.onColumnPinningChange(o)),
                (e.resetColumnPinning = (o) => {
                  var t, n;
                  return e.setColumnPinning(
                    o
                      ? ce()
                      : (t =
                            (n = e.initialState) == null
                              ? void 0
                              : n.columnPinning) != null
                        ? t
                        : ce(),
                  );
                }),
                (e.getIsSomeColumnsPinned = (o) => {
                  var t;
                  const n = e.getState().columnPinning;
                  if (!o) {
                    var r, i;
                    return !!(
                      ((r = n.left) != null && r.length) ||
                      ((i = n.right) != null && i.length)
                    );
                  }
                  return !!((t = n[o]) != null && t.length);
                }),
                (e.getLeftLeafColumns = p(
                  () => [
                    e.getAllLeafColumns(),
                    e.getState().columnPinning.left,
                  ],
                  (o, t) =>
                    (t ?? [])
                      .map((n) => o.find((r) => r.id === n))
                      .filter(Boolean),
                  h(e.options, "debugColumns", "getLeftLeafColumns"),
                )),
                (e.getRightLeafColumns = p(
                  () => [
                    e.getAllLeafColumns(),
                    e.getState().columnPinning.right,
                  ],
                  (o, t) =>
                    (t ?? [])
                      .map((n) => o.find((r) => r.id === n))
                      .filter(Boolean),
                  h(e.options, "debugColumns", "getRightLeafColumns"),
                )),
                (e.getCenterLeafColumns = p(
                  () => [
                    e.getAllLeafColumns(),
                    e.getState().columnPinning.left,
                    e.getState().columnPinning.right,
                  ],
                  (o, t, n) => {
                    const r = [...(t ?? []), ...(n ?? [])];
                    return o.filter((i) => !r.includes(i.id));
                  },
                  h(e.options, "debugColumns", "getCenterLeafColumns"),
                ));
            },
          },
          ue = { size: 150, minSize: 20, maxSize: Number.MAX_SAFE_INTEGER },
          pe = () => ({
            startOffset: null,
            startSize: null,
            deltaOffset: null,
            deltaPercentage: null,
            isResizingColumn: !1,
            columnSizingStart: [],
          }),
          Le = {
            getDefaultColumnDef: () => ue,
            getInitialState: (e) => ({
              columnSizing: {},
              columnSizingInfo: pe(),
              ...e,
            }),
            getDefaultOptions: (e) => ({
              columnResizeMode: "onEnd",
              columnResizeDirection: "ltr",
              onColumnSizingChange: G("columnSizing", e),
              onColumnSizingInfoChange: G("columnSizingInfo", e),
            }),
            createColumn: (e, o) => {
              (e.getSize = () => {
                var t, n, r;
                const i = o.getState().columnSizing[e.id];
                return Math.min(
                  Math.max(
                    (t = e.columnDef.minSize) != null ? t : ue.minSize,
                    (n = i ?? e.columnDef.size) != null ? n : ue.size,
                  ),
                  (r = e.columnDef.maxSize) != null ? r : ue.maxSize,
                );
              }),
                (e.getStart = p(
                  (t) => [t, oe(o, t), o.getState().columnSizing],
                  (t, n) =>
                    n
                      .slice(0, e.getIndex(t))
                      .reduce((r, i) => r + i.getSize(), 0),
                  h(o.options, "debugColumns", "getStart"),
                )),
                (e.getAfter = p(
                  (t) => [t, oe(o, t), o.getState().columnSizing],
                  (t, n) =>
                    n
                      .slice(e.getIndex(t) + 1)
                      .reduce((r, i) => r + i.getSize(), 0),
                  h(o.options, "debugColumns", "getAfter"),
                )),
                (e.resetSize = () => {
                  o.setColumnSizing((t) => {
                    let { [e.id]: n, ...r } = t;
                    return r;
                  });
                }),
                (e.getCanResize = () => {
                  var t, n;
                  return (
                    ((t = e.columnDef.enableResizing) != null ? t : !0) &&
                    ((n = o.options.enableColumnResizing) != null ? n : !0)
                  );
                }),
                (e.getIsResizing = () =>
                  o.getState().columnSizingInfo.isResizingColumn === e.id);
            },
            createHeader: (e, o) => {
              (e.getSize = () => {
                let t = 0;
                const n = (r) => {
                  if (r.subHeaders.length) r.subHeaders.forEach(n);
                  else {
                    var i;
                    t += (i = r.column.getSize()) != null ? i : 0;
                  }
                };
                return n(e), t;
              }),
                (e.getStart = () => {
                  if (e.index > 0) {
                    const t = e.headerGroup.headers[e.index - 1];
                    return t.getStart() + t.getSize();
                  }
                  return 0;
                }),
                (e.getResizeHandler = (t) => {
                  const n = o.getColumn(e.column.id),
                    r = n?.getCanResize();
                  return (i) => {
                    if (
                      !n ||
                      !r ||
                      (i.persist == null || i.persist(),
                      me(i) && i.touches && i.touches.length > 1)
                    )
                      return;
                    const l = e.getSize(),
                      s = e
                        ? e
                            .getLeafHeaders()
                            .map((R) => [R.column.id, R.column.getSize()])
                        : [[n.id, n.getSize()]],
                      a = me(i) ? Math.round(i.touches[0].clientX) : i.clientX,
                      g = {},
                      c = (R, _) => {
                        typeof _ == "number" &&
                          (o.setColumnSizingInfo((M) => {
                            var B, P;
                            const $ =
                                o.options.columnResizeDirection === "rtl"
                                  ? -1
                                  : 1,
                              ie =
                                (_ - ((B = M?.startOffset) != null ? B : 0)) *
                                $,
                              le = Math.max(
                                ie / ((P = M?.startSize) != null ? P : 0),
                                -0.999999,
                              );
                            return (
                              M.columnSizingStart.forEach((ge) => {
                                let [it, Ie] = ge;
                                g[it] =
                                  Math.round(Math.max(Ie + Ie * le, 0) * 100) /
                                  100;
                              }),
                              { ...M, deltaOffset: ie, deltaPercentage: le }
                            );
                          }),
                          (o.options.columnResizeMode === "onChange" ||
                            R === "end") &&
                            o.setColumnSizing((M) => ({ ...M, ...g })));
                      },
                      S = (R) => c("move", R),
                      d = (R) => {
                        c("end", R),
                          o.setColumnSizingInfo((_) => ({
                            ..._,
                            isResizingColumn: !1,
                            startOffset: null,
                            startSize: null,
                            deltaOffset: null,
                            deltaPercentage: null,
                            columnSizingStart: [],
                          }));
                      },
                      u = t || typeof document < "u" ? document : null,
                      f = {
                        moveHandler: (R) => S(R.clientX),
                        upHandler: (R) => {
                          u?.removeEventListener("mousemove", f.moveHandler),
                            u?.removeEventListener("mouseup", f.upHandler),
                            d(R.clientX);
                        },
                      },
                      m = {
                        moveHandler: (R) => (
                          R.cancelable &&
                            (R.preventDefault(), R.stopPropagation()),
                          S(R.touches[0].clientX),
                          !1
                        ),
                        upHandler: (R) => {
                          var _;
                          u?.removeEventListener("touchmove", m.moveHandler),
                            u?.removeEventListener("touchend", m.upHandler),
                            R.cancelable &&
                              (R.preventDefault(), R.stopPropagation()),
                            d((_ = R.touches[0]) == null ? void 0 : _.clientX);
                        },
                      },
                      C = Ae() ? { passive: !1 } : !1;
                    me(i)
                      ? (u?.addEventListener("touchmove", m.moveHandler, C),
                        u?.addEventListener("touchend", m.upHandler, C))
                      : (u?.addEventListener("mousemove", f.moveHandler, C),
                        u?.addEventListener("mouseup", f.upHandler, C)),
                      o.setColumnSizingInfo((R) => ({
                        ...R,
                        startOffset: a,
                        startSize: l,
                        deltaOffset: 0,
                        deltaPercentage: 0,
                        columnSizingStart: s,
                        isResizingColumn: n.id,
                      }));
                  };
                });
            },
            createTable: (e) => {
              (e.setColumnSizing = (o) =>
                e.options.onColumnSizingChange == null
                  ? void 0
                  : e.options.onColumnSizingChange(o)),
                (e.setColumnSizingInfo = (o) =>
                  e.options.onColumnSizingInfoChange == null
                    ? void 0
                    : e.options.onColumnSizingInfoChange(o)),
                (e.resetColumnSizing = (o) => {
                  var t;
                  e.setColumnSizing(
                    o ? {} : (t = e.initialState.columnSizing) != null ? t : {},
                  );
                }),
                (e.resetHeaderSizeInfo = (o) => {
                  var t;
                  e.setColumnSizingInfo(
                    o
                      ? pe()
                      : (t = e.initialState.columnSizingInfo) != null
                        ? t
                        : pe(),
                  );
                }),
                (e.getTotalSize = () => {
                  var o, t;
                  return (o =
                    (t = e.getHeaderGroups()[0]) == null
                      ? void 0
                      : t.headers.reduce((n, r) => n + r.getSize(), 0)) != null
                    ? o
                    : 0;
                }),
                (e.getLeftTotalSize = () => {
                  var o, t;
                  return (o =
                    (t = e.getLeftHeaderGroups()[0]) == null
                      ? void 0
                      : t.headers.reduce((n, r) => n + r.getSize(), 0)) != null
                    ? o
                    : 0;
                }),
                (e.getCenterTotalSize = () => {
                  var o, t;
                  return (o =
                    (t = e.getCenterHeaderGroups()[0]) == null
                      ? void 0
                      : t.headers.reduce((n, r) => n + r.getSize(), 0)) != null
                    ? o
                    : 0;
                }),
                (e.getRightTotalSize = () => {
                  var o, t;
                  return (o =
                    (t = e.getRightHeaderGroups()[0]) == null
                      ? void 0
                      : t.headers.reduce((n, r) => n + r.getSize(), 0)) != null
                    ? o
                    : 0;
                });
            },
          };
        let ae = null;
        function Ae() {
          if (typeof ae == "boolean") return ae;
          let e = !1;
          try {
            const o = {
                get passive() {
                  return (e = !0), !1;
                },
              },
              t = () => {};
            window.addEventListener("test", t, o),
              window.removeEventListener("test", t);
          } catch {
            e = !1;
          }
          return (ae = e), ae;
        }
        function me(e) {
          return e.type === "touchstart";
        }
        const Oe = {
          getInitialState: (e) => ({ columnVisibility: {}, ...e }),
          getDefaultOptions: (e) => ({
            onColumnVisibilityChange: G("columnVisibility", e),
          }),
          createColumn: (e, o) => {
            (e.toggleVisibility = (t) => {
              e.getCanHide() &&
                o.setColumnVisibility((n) => ({
                  ...n,
                  [e.id]: t ?? !e.getIsVisible(),
                }));
            }),
              (e.getIsVisible = () => {
                var t, n;
                const r = e.columns;
                return (t = r.length
                  ? r.some((i) => i.getIsVisible())
                  : (n = o.getState().columnVisibility) == null
                    ? void 0
                    : n[e.id]) != null
                  ? t
                  : !0;
              }),
              (e.getCanHide = () => {
                var t, n;
                return (
                  ((t = e.columnDef.enableHiding) != null ? t : !0) &&
                  ((n = o.options.enableHiding) != null ? n : !0)
                );
              }),
              (e.getToggleVisibilityHandler = () => (t) => {
                e.toggleVisibility == null ||
                  e.toggleVisibility(t.target.checked);
              });
          },
          createRow: (e, o) => {
            (e._getAllVisibleCells = p(
              () => [e.getAllCells(), o.getState().columnVisibility],
              (t) => t.filter((n) => n.column.getIsVisible()),
              h(o.options, "debugRows", "_getAllVisibleCells"),
            )),
              (e.getVisibleCells = p(
                () => [
                  e.getLeftVisibleCells(),
                  e.getCenterVisibleCells(),
                  e.getRightVisibleCells(),
                ],
                (t, n, r) => [...t, ...n, ...r],
                h(o.options, "debugRows", "getVisibleCells"),
              ));
          },
          createTable: (e) => {
            const o = (t, n) =>
              p(
                () => [
                  n(),
                  n()
                    .filter((r) => r.getIsVisible())
                    .map((r) => r.id)
                    .join("_"),
                ],
                (r) =>
                  r.filter((i) =>
                    i.getIsVisible == null ? void 0 : i.getIsVisible(),
                  ),
                h(e.options, "debugColumns", t),
              );
            (e.getVisibleFlatColumns = o("getVisibleFlatColumns", () =>
              e.getAllFlatColumns(),
            )),
              (e.getVisibleLeafColumns = o("getVisibleLeafColumns", () =>
                e.getAllLeafColumns(),
              )),
              (e.getLeftVisibleLeafColumns = o(
                "getLeftVisibleLeafColumns",
                () => e.getLeftLeafColumns(),
              )),
              (e.getRightVisibleLeafColumns = o(
                "getRightVisibleLeafColumns",
                () => e.getRightLeafColumns(),
              )),
              (e.getCenterVisibleLeafColumns = o(
                "getCenterVisibleLeafColumns",
                () => e.getCenterLeafColumns(),
              )),
              (e.setColumnVisibility = (t) =>
                e.options.onColumnVisibilityChange == null
                  ? void 0
                  : e.options.onColumnVisibilityChange(t)),
              (e.resetColumnVisibility = (t) => {
                var n;
                e.setColumnVisibility(
                  t
                    ? {}
                    : (n = e.initialState.columnVisibility) != null
                      ? n
                      : {},
                );
              }),
              (e.toggleAllColumnsVisible = (t) => {
                var n;
                (t = (n = t) != null ? n : !e.getIsAllColumnsVisible()),
                  e.setColumnVisibility(
                    e
                      .getAllLeafColumns()
                      .reduce(
                        (r, i) => ({
                          ...r,
                          [i.id]:
                            t || !(i.getCanHide != null && i.getCanHide()),
                        }),
                        {},
                      ),
                  );
              }),
              (e.getIsAllColumnsVisible = () =>
                !e
                  .getAllLeafColumns()
                  .some((t) => !(t.getIsVisible != null && t.getIsVisible()))),
              (e.getIsSomeColumnsVisible = () =>
                e
                  .getAllLeafColumns()
                  .some((t) =>
                    t.getIsVisible == null ? void 0 : t.getIsVisible(),
                  )),
              (e.getToggleAllColumnsVisibilityHandler = () => (t) => {
                var n;
                e.toggleAllColumnsVisible(
                  (n = t.target) == null ? void 0 : n.checked,
                );
              });
          },
        };
        function oe(e, o) {
          return o
            ? o === "center"
              ? e.getCenterVisibleLeafColumns()
              : o === "left"
                ? e.getLeftVisibleLeafColumns()
                : e.getRightVisibleLeafColumns()
            : e.getVisibleLeafColumns();
        }
        const ze = {
            createTable: (e) => {
              (e._getGlobalFacetedRowModel =
                e.options.getFacetedRowModel &&
                e.options.getFacetedRowModel(e, "__global__")),
                (e.getGlobalFacetedRowModel = () =>
                  e.options.manualFiltering || !e._getGlobalFacetedRowModel
                    ? e.getPreFilteredRowModel()
                    : e._getGlobalFacetedRowModel()),
                (e._getGlobalFacetedUniqueValues =
                  e.options.getFacetedUniqueValues &&
                  e.options.getFacetedUniqueValues(e, "__global__")),
                (e.getGlobalFacetedUniqueValues = () =>
                  e._getGlobalFacetedUniqueValues
                    ? e._getGlobalFacetedUniqueValues()
                    : new Map()),
                (e._getGlobalFacetedMinMaxValues =
                  e.options.getFacetedMinMaxValues &&
                  e.options.getFacetedMinMaxValues(e, "__global__")),
                (e.getGlobalFacetedMinMaxValues = () => {
                  if (e._getGlobalFacetedMinMaxValues)
                    return e._getGlobalFacetedMinMaxValues();
                });
            },
          },
          Be = {
            getInitialState: (e) => ({ globalFilter: void 0, ...e }),
            getDefaultOptions: (e) => ({
              onGlobalFilterChange: G("globalFilter", e),
              globalFilterFn: "auto",
              getColumnCanGlobalFilter: (o) => {
                var t;
                const n =
                  (t = e.getCoreRowModel().flatRows[0]) == null ||
                  (t = t._getAllCellsByColumnId()[o.id]) == null
                    ? void 0
                    : t.getValue();
                return typeof n == "string" || typeof n == "number";
              },
            }),
            createColumn: (e, o) => {
              e.getCanGlobalFilter = () => {
                var t, n, r, i;
                return (
                  ((t = e.columnDef.enableGlobalFilter) != null ? t : !0) &&
                  ((n = o.options.enableGlobalFilter) != null ? n : !0) &&
                  ((r = o.options.enableFilters) != null ? r : !0) &&
                  ((i =
                    o.options.getColumnCanGlobalFilter == null
                      ? void 0
                      : o.options.getColumnCanGlobalFilter(e)) != null
                    ? i
                    : !0) &&
                  !!e.accessorFn
                );
              };
            },
            createTable: (e) => {
              (e.getGlobalAutoFilterFn = () => U.includesString),
                (e.getGlobalFilterFn = () => {
                  var o, t;
                  const { globalFilterFn: n } = e.options;
                  return N(n)
                    ? n
                    : n === "auto"
                      ? e.getGlobalAutoFilterFn()
                      : (o =
                            (t = e.options.filterFns) == null
                              ? void 0
                              : t[n]) != null
                        ? o
                        : U[n];
                }),
                (e.setGlobalFilter = (o) => {
                  e.options.onGlobalFilterChange == null ||
                    e.options.onGlobalFilterChange(o);
                }),
                (e.resetGlobalFilter = (o) => {
                  e.setGlobalFilter(o ? void 0 : e.initialState.globalFilter);
                });
            },
          },
          Te = {
            getInitialState: (e) => ({ expanded: {}, ...e }),
            getDefaultOptions: (e) => ({
              onExpandedChange: G("expanded", e),
              paginateExpandedRows: !0,
            }),
            createTable: (e) => {
              let o = !1,
                t = !1;
              (e._autoResetExpanded = () => {
                var n, r;
                if (!o) {
                  e._queue(() => {
                    o = !0;
                  });
                  return;
                }
                if (
                  (n =
                    (r = e.options.autoResetAll) != null
                      ? r
                      : e.options.autoResetExpanded) != null
                    ? n
                    : !e.options.manualExpanding
                ) {
                  if (t) return;
                  (t = !0),
                    e._queue(() => {
                      e.resetExpanded(), (t = !1);
                    });
                }
              }),
                (e.setExpanded = (n) =>
                  e.options.onExpandedChange == null
                    ? void 0
                    : e.options.onExpandedChange(n)),
                (e.toggleAllRowsExpanded = (n) => {
                  (n ?? !e.getIsAllRowsExpanded())
                    ? e.setExpanded(!0)
                    : e.setExpanded({});
                }),
                (e.resetExpanded = (n) => {
                  var r, i;
                  e.setExpanded(
                    n
                      ? {}
                      : (r =
                            (i = e.initialState) == null
                              ? void 0
                              : i.expanded) != null
                        ? r
                        : {},
                  );
                }),
                (e.getCanSomeRowsExpand = () =>
                  e
                    .getPrePaginationRowModel()
                    .flatRows.some((n) => n.getCanExpand())),
                (e.getToggleAllRowsExpandedHandler = () => (n) => {
                  n.persist == null || n.persist(), e.toggleAllRowsExpanded();
                }),
                (e.getIsSomeRowsExpanded = () => {
                  const n = e.getState().expanded;
                  return n === !0 || Object.values(n).some(Boolean);
                }),
                (e.getIsAllRowsExpanded = () => {
                  const n = e.getState().expanded;
                  return typeof n == "boolean"
                    ? n === !0
                    : !(
                        !Object.keys(n).length ||
                        e.getRowModel().flatRows.some((r) => !r.getIsExpanded())
                      );
                }),
                (e.getExpandedDepth = () => {
                  let n = 0;
                  return (
                    (e.getState().expanded === !0
                      ? Object.keys(e.getRowModel().rowsById)
                      : Object.keys(e.getState().expanded)
                    ).forEach((i) => {
                      const l = i.split(".");
                      n = Math.max(n, l.length);
                    }),
                    n
                  );
                }),
                (e.getPreExpandedRowModel = () => e.getSortedRowModel()),
                (e.getExpandedRowModel = () => (
                  !e._getExpandedRowModel &&
                    e.options.getExpandedRowModel &&
                    (e._getExpandedRowModel = e.options.getExpandedRowModel(e)),
                  e.options.manualExpanding || !e._getExpandedRowModel
                    ? e.getPreExpandedRowModel()
                    : e._getExpandedRowModel()
                ));
            },
            createRow: (e, o) => {
              (e.toggleExpanded = (t) => {
                o.setExpanded((n) => {
                  var r;
                  const i = n === !0 ? !0 : !!(n != null && n[e.id]);
                  let l = {};
                  if (
                    (n === !0
                      ? Object.keys(o.getRowModel().rowsById).forEach((s) => {
                          l[s] = !0;
                        })
                      : (l = n),
                    (t = (r = t) != null ? r : !i),
                    !i && t)
                  )
                    return { ...l, [e.id]: !0 };
                  if (i && !t) {
                    const { [e.id]: s, ...a } = l;
                    return a;
                  }
                  return n;
                });
              }),
                (e.getIsExpanded = () => {
                  var t;
                  const n = o.getState().expanded;
                  return !!((t =
                    o.options.getIsRowExpanded == null
                      ? void 0
                      : o.options.getIsRowExpanded(e)) != null
                    ? t
                    : n === !0 || n?.[e.id]);
                }),
                (e.getCanExpand = () => {
                  var t, n, r;
                  return (t =
                    o.options.getRowCanExpand == null
                      ? void 0
                      : o.options.getRowCanExpand(e)) != null
                    ? t
                    : ((n = o.options.enableExpanding) != null ? n : !0) &&
                        !!((r = e.subRows) != null && r.length);
                }),
                (e.getIsAllParentsExpanded = () => {
                  let t = !0,
                    n = e;
                  for (; t && n.parentId; )
                    (n = o.getRow(n.parentId, !0)), (t = n.getIsExpanded());
                  return t;
                }),
                (e.getToggleExpandedHandler = () => {
                  const t = e.getCanExpand();
                  return () => {
                    t && e.toggleExpanded();
                  };
                });
            },
          },
          Se = 0,
          he = 10,
          Re = () => ({ pageIndex: Se, pageSize: he }),
          qe = {
            getInitialState: (e) => ({
              ...e,
              pagination: { ...Re(), ...e?.pagination },
            }),
            getDefaultOptions: (e) => ({
              onPaginationChange: G("pagination", e),
            }),
            createTable: (e) => {
              let o = !1,
                t = !1;
              (e._autoResetPageIndex = () => {
                var n, r;
                if (!o) {
                  e._queue(() => {
                    o = !0;
                  });
                  return;
                }
                if (
                  (n =
                    (r = e.options.autoResetAll) != null
                      ? r
                      : e.options.autoResetPageIndex) != null
                    ? n
                    : !e.options.manualPagination
                ) {
                  if (t) return;
                  (t = !0),
                    e._queue(() => {
                      e.resetPageIndex(), (t = !1);
                    });
                }
              }),
                (e.setPagination = (n) => {
                  const r = (i) => A(n, i);
                  return e.options.onPaginationChange == null
                    ? void 0
                    : e.options.onPaginationChange(r);
                }),
                (e.resetPagination = (n) => {
                  var r;
                  e.setPagination(
                    n
                      ? Re()
                      : (r = e.initialState.pagination) != null
                        ? r
                        : Re(),
                  );
                }),
                (e.setPageIndex = (n) => {
                  e.setPagination((r) => {
                    let i = A(n, r.pageIndex);
                    const l =
                      typeof e.options.pageCount > "u" ||
                      e.options.pageCount === -1
                        ? Number.MAX_SAFE_INTEGER
                        : e.options.pageCount - 1;
                    return (
                      (i = Math.max(0, Math.min(i, l))), { ...r, pageIndex: i }
                    );
                  });
                }),
                (e.resetPageIndex = (n) => {
                  var r, i;
                  e.setPageIndex(
                    n
                      ? Se
                      : (r =
                            (i = e.initialState) == null ||
                            (i = i.pagination) == null
                              ? void 0
                              : i.pageIndex) != null
                        ? r
                        : Se,
                  );
                }),
                (e.resetPageSize = (n) => {
                  var r, i;
                  e.setPageSize(
                    n
                      ? he
                      : (r =
                            (i = e.initialState) == null ||
                            (i = i.pagination) == null
                              ? void 0
                              : i.pageSize) != null
                        ? r
                        : he,
                  );
                }),
                (e.setPageSize = (n) => {
                  e.setPagination((r) => {
                    const i = Math.max(1, A(n, r.pageSize)),
                      l = r.pageSize * r.pageIndex,
                      s = Math.floor(l / i);
                    return { ...r, pageIndex: s, pageSize: i };
                  });
                }),
                (e.setPageCount = (n) =>
                  e.setPagination((r) => {
                    var i;
                    let l = A(n, (i = e.options.pageCount) != null ? i : -1);
                    return (
                      typeof l == "number" && (l = Math.max(-1, l)),
                      { ...r, pageCount: l }
                    );
                  })),
                (e.getPageOptions = p(
                  () => [e.getPageCount()],
                  (n) => {
                    let r = [];
                    return (
                      n &&
                        n > 0 &&
                        (r = [...new Array(n)].fill(null).map((i, l) => l)),
                      r
                    );
                  },
                  h(e.options, "debugTable", "getPageOptions"),
                )),
                (e.getCanPreviousPage = () =>
                  e.getState().pagination.pageIndex > 0),
                (e.getCanNextPage = () => {
                  const { pageIndex: n } = e.getState().pagination,
                    r = e.getPageCount();
                  return r === -1 ? !0 : r === 0 ? !1 : n < r - 1;
                }),
                (e.previousPage = () => e.setPageIndex((n) => n - 1)),
                (e.nextPage = () => e.setPageIndex((n) => n + 1)),
                (e.firstPage = () => e.setPageIndex(0)),
                (e.lastPage = () => e.setPageIndex(e.getPageCount() - 1)),
                (e.getPrePaginationRowModel = () => e.getExpandedRowModel()),
                (e.getPaginationRowModel = () => (
                  !e._getPaginationRowModel &&
                    e.options.getPaginationRowModel &&
                    (e._getPaginationRowModel =
                      e.options.getPaginationRowModel(e)),
                  e.options.manualPagination || !e._getPaginationRowModel
                    ? e.getPrePaginationRowModel()
                    : e._getPaginationRowModel()
                )),
                (e.getPageCount = () => {
                  var n;
                  return (n = e.options.pageCount) != null
                    ? n
                    : Math.ceil(
                        e.getRowCount() / e.getState().pagination.pageSize,
                      );
                }),
                (e.getRowCount = () => {
                  var n;
                  return (n = e.options.rowCount) != null
                    ? n
                    : e.getPrePaginationRowModel().rows.length;
                });
            },
          },
          Ce = () => ({ top: [], bottom: [] }),
          Ue = {
            getInitialState: (e) => ({ rowPinning: Ce(), ...e }),
            getDefaultOptions: (e) => ({
              onRowPinningChange: G("rowPinning", e),
            }),
            createRow: (e, o) => {
              (e.pin = (t, n, r) => {
                const i = n
                    ? e.getLeafRows().map((a) => {
                        let { id: g } = a;
                        return g;
                      })
                    : [],
                  l = r
                    ? e.getParentRows().map((a) => {
                        let { id: g } = a;
                        return g;
                      })
                    : [],
                  s = new Set([...l, e.id, ...i]);
                o.setRowPinning((a) => {
                  var g, c;
                  if (t === "bottom") {
                    var S, d;
                    return {
                      top: ((S = a?.top) != null ? S : []).filter(
                        (m) => !(s != null && s.has(m)),
                      ),
                      bottom: [
                        ...((d = a?.bottom) != null ? d : []).filter(
                          (m) => !(s != null && s.has(m)),
                        ),
                        ...Array.from(s),
                      ],
                    };
                  }
                  if (t === "top") {
                    var u, f;
                    return {
                      top: [
                        ...((u = a?.top) != null ? u : []).filter(
                          (m) => !(s != null && s.has(m)),
                        ),
                        ...Array.from(s),
                      ],
                      bottom: ((f = a?.bottom) != null ? f : []).filter(
                        (m) => !(s != null && s.has(m)),
                      ),
                    };
                  }
                  return {
                    top: ((g = a?.top) != null ? g : []).filter(
                      (m) => !(s != null && s.has(m)),
                    ),
                    bottom: ((c = a?.bottom) != null ? c : []).filter(
                      (m) => !(s != null && s.has(m)),
                    ),
                  };
                });
              }),
                (e.getCanPin = () => {
                  var t;
                  const { enableRowPinning: n, enablePinning: r } = o.options;
                  return typeof n == "function"
                    ? n(e)
                    : (t = n ?? r) != null
                      ? t
                      : !0;
                }),
                (e.getIsPinned = () => {
                  const t = [e.id],
                    { top: n, bottom: r } = o.getState().rowPinning,
                    i = t.some((s) => n?.includes(s)),
                    l = t.some((s) => r?.includes(s));
                  return i ? "top" : l ? "bottom" : !1;
                }),
                (e.getPinnedIndex = () => {
                  var t, n;
                  const r = e.getIsPinned();
                  if (!r) return -1;
                  const i =
                    (t = r === "top" ? o.getTopRows() : o.getBottomRows()) ==
                    null
                      ? void 0
                      : t.map((l) => {
                          let { id: s } = l;
                          return s;
                        });
                  return (n = i?.indexOf(e.id)) != null ? n : -1;
                });
            },
            createTable: (e) => {
              (e.setRowPinning = (o) =>
                e.options.onRowPinningChange == null
                  ? void 0
                  : e.options.onRowPinningChange(o)),
                (e.resetRowPinning = (o) => {
                  var t, n;
                  return e.setRowPinning(
                    o
                      ? Ce()
                      : (t =
                            (n = e.initialState) == null
                              ? void 0
                              : n.rowPinning) != null
                        ? t
                        : Ce(),
                  );
                }),
                (e.getIsSomeRowsPinned = (o) => {
                  var t;
                  const n = e.getState().rowPinning;
                  if (!o) {
                    var r, i;
                    return !!(
                      ((r = n.top) != null && r.length) ||
                      ((i = n.bottom) != null && i.length)
                    );
                  }
                  return !!((t = n[o]) != null && t.length);
                }),
                (e._getPinnedRows = (o, t, n) => {
                  var r;
                  return (
                    (r = e.options.keepPinnedRows) == null || r
                      ? (t ?? []).map((l) => {
                          const s = e.getRow(l, !0);
                          return s.getIsAllParentsExpanded() ? s : null;
                        })
                      : (t ?? []).map((l) => o.find((s) => s.id === l))
                  )
                    .filter(Boolean)
                    .map((l) => ({ ...l, position: n }));
                }),
                (e.getTopRows = p(
                  () => [e.getRowModel().rows, e.getState().rowPinning.top],
                  (o, t) => e._getPinnedRows(o, t, "top"),
                  h(e.options, "debugRows", "getTopRows"),
                )),
                (e.getBottomRows = p(
                  () => [e.getRowModel().rows, e.getState().rowPinning.bottom],
                  (o, t) => e._getPinnedRows(o, t, "bottom"),
                  h(e.options, "debugRows", "getBottomRows"),
                )),
                (e.getCenterRows = p(
                  () => [
                    e.getRowModel().rows,
                    e.getState().rowPinning.top,
                    e.getState().rowPinning.bottom,
                  ],
                  (o, t, n) => {
                    const r = new Set([...(t ?? []), ...(n ?? [])]);
                    return o.filter((i) => !r.has(i.id));
                  },
                  h(e.options, "debugRows", "getCenterRows"),
                ));
            },
          },
          ke = {
            getInitialState: (e) => ({ rowSelection: {}, ...e }),
            getDefaultOptions: (e) => ({
              onRowSelectionChange: G("rowSelection", e),
              enableRowSelection: !0,
              enableMultiRowSelection: !0,
              enableSubRowSelection: !0,
            }),
            createTable: (e) => {
              (e.setRowSelection = (o) =>
                e.options.onRowSelectionChange == null
                  ? void 0
                  : e.options.onRowSelectionChange(o)),
                (e.resetRowSelection = (o) => {
                  var t;
                  return e.setRowSelection(
                    o ? {} : (t = e.initialState.rowSelection) != null ? t : {},
                  );
                }),
                (e.toggleAllRowsSelected = (o) => {
                  e.setRowSelection((t) => {
                    o = typeof o < "u" ? o : !e.getIsAllRowsSelected();
                    const n = { ...t },
                      r = e.getPreGroupedRowModel().flatRows;
                    return (
                      o
                        ? r.forEach((i) => {
                            i.getCanSelect() && (n[i.id] = !0);
                          })
                        : r.forEach((i) => {
                            delete n[i.id];
                          }),
                      n
                    );
                  });
                }),
                (e.toggleAllPageRowsSelected = (o) =>
                  e.setRowSelection((t) => {
                    const n =
                        typeof o < "u" ? o : !e.getIsAllPageRowsSelected(),
                      r = { ...t };
                    return (
                      e.getRowModel().rows.forEach((i) => {
                        we(r, i.id, n, !0, e);
                      }),
                      r
                    );
                  })),
                (e.getPreSelectedRowModel = () => e.getCoreRowModel()),
                (e.getSelectedRowModel = p(
                  () => [e.getState().rowSelection, e.getCoreRowModel()],
                  (o, t) =>
                    Object.keys(o).length
                      ? ve(e, t)
                      : { rows: [], flatRows: [], rowsById: {} },
                  h(e.options, "debugTable", "getSelectedRowModel"),
                )),
                (e.getFilteredSelectedRowModel = p(
                  () => [e.getState().rowSelection, e.getFilteredRowModel()],
                  (o, t) =>
                    Object.keys(o).length
                      ? ve(e, t)
                      : { rows: [], flatRows: [], rowsById: {} },
                  h(e.options, "debugTable", "getFilteredSelectedRowModel"),
                )),
                (e.getGroupedSelectedRowModel = p(
                  () => [e.getState().rowSelection, e.getSortedRowModel()],
                  (o, t) =>
                    Object.keys(o).length
                      ? ve(e, t)
                      : { rows: [], flatRows: [], rowsById: {} },
                  h(e.options, "debugTable", "getGroupedSelectedRowModel"),
                )),
                (e.getIsAllRowsSelected = () => {
                  const o = e.getFilteredRowModel().flatRows,
                    { rowSelection: t } = e.getState();
                  let n = !!(o.length && Object.keys(t).length);
                  return (
                    n &&
                      o.some((r) => r.getCanSelect() && !t[r.id]) &&
                      (n = !1),
                    n
                  );
                }),
                (e.getIsAllPageRowsSelected = () => {
                  const o = e
                      .getPaginationRowModel()
                      .flatRows.filter((r) => r.getCanSelect()),
                    { rowSelection: t } = e.getState();
                  let n = !!o.length;
                  return n && o.some((r) => !t[r.id]) && (n = !1), n;
                }),
                (e.getIsSomeRowsSelected = () => {
                  var o;
                  const t = Object.keys(
                    (o = e.getState().rowSelection) != null ? o : {},
                  ).length;
                  return t > 0 && t < e.getFilteredRowModel().flatRows.length;
                }),
                (e.getIsSomePageRowsSelected = () => {
                  const o = e.getPaginationRowModel().flatRows;
                  return e.getIsAllPageRowsSelected()
                    ? !1
                    : o
                        .filter((t) => t.getCanSelect())
                        .some(
                          (t) => t.getIsSelected() || t.getIsSomeSelected(),
                        );
                }),
                (e.getToggleAllRowsSelectedHandler = () => (o) => {
                  e.toggleAllRowsSelected(o.target.checked);
                }),
                (e.getToggleAllPageRowsSelectedHandler = () => (o) => {
                  e.toggleAllPageRowsSelected(o.target.checked);
                });
            },
            createRow: (e, o) => {
              (e.toggleSelected = (t, n) => {
                const r = e.getIsSelected();
                o.setRowSelection((i) => {
                  var l;
                  if (
                    ((t = typeof t < "u" ? t : !r), e.getCanSelect() && r === t)
                  )
                    return i;
                  const s = { ...i };
                  return (
                    we(s, e.id, t, (l = n?.selectChildren) != null ? l : !0, o),
                    s
                  );
                });
              }),
                (e.getIsSelected = () => {
                  const { rowSelection: t } = o.getState();
                  return _e(e, t);
                }),
                (e.getIsSomeSelected = () => {
                  const { rowSelection: t } = o.getState();
                  return Fe(e, t) === "some";
                }),
                (e.getIsAllSubRowsSelected = () => {
                  const { rowSelection: t } = o.getState();
                  return Fe(e, t) === "all";
                }),
                (e.getCanSelect = () => {
                  var t;
                  return typeof o.options.enableRowSelection == "function"
                    ? o.options.enableRowSelection(e)
                    : (t = o.options.enableRowSelection) != null
                      ? t
                      : !0;
                }),
                (e.getCanSelectSubRows = () => {
                  var t;
                  return typeof o.options.enableSubRowSelection == "function"
                    ? o.options.enableSubRowSelection(e)
                    : (t = o.options.enableSubRowSelection) != null
                      ? t
                      : !0;
                }),
                (e.getCanMultiSelect = () => {
                  var t;
                  return typeof o.options.enableMultiRowSelection == "function"
                    ? o.options.enableMultiRowSelection(e)
                    : (t = o.options.enableMultiRowSelection) != null
                      ? t
                      : !0;
                }),
                (e.getToggleSelectedHandler = () => {
                  const t = e.getCanSelect();
                  return (n) => {
                    var r;
                    t &&
                      e.toggleSelected(
                        (r = n.target) == null ? void 0 : r.checked,
                      );
                  };
                });
            },
          },
          we = (e, o, t, n, r) => {
            var i;
            const l = r.getRow(o, !0);
            t
              ? (l.getCanMultiSelect() ||
                  Object.keys(e).forEach((s) => delete e[s]),
                l.getCanSelect() && (e[o] = !0))
              : delete e[o],
              n &&
                (i = l.subRows) != null &&
                i.length &&
                l.getCanSelectSubRows() &&
                l.subRows.forEach((s) => we(e, s.id, t, n, r));
          };
        function ve(e, o) {
          const t = e.getState().rowSelection,
            n = [],
            r = {},
            i = function (l, s) {
              return l
                .map((a) => {
                  var g;
                  const c = _e(a, t);
                  if (
                    (c && (n.push(a), (r[a.id] = a)),
                    (g = a.subRows) != null &&
                      g.length &&
                      (a = { ...a, subRows: i(a.subRows) }),
                    c)
                  )
                    return a;
                })
                .filter(Boolean);
            };
          return { rows: i(o.rows), flatRows: n, rowsById: r };
        }
        function _e(e, o) {
          var t;
          return (t = o[e.id]) != null ? t : !1;
        }
        function Fe(e, o, t) {
          var n;
          if (!((n = e.subRows) != null && n.length)) return !1;
          let r = !0,
            i = !1;
          return (
            e.subRows.forEach((l) => {
              if (
                !(i && !r) &&
                (l.getCanSelect() && (_e(l, o) ? (i = !0) : (r = !1)),
                l.subRows && l.subRows.length)
              ) {
                const s = Fe(l, o);
                s === "all" ? (i = !0) : (s === "some" && (i = !0), (r = !1));
              }
            }),
            r ? "all" : i ? "some" : !1
          );
        }
        const $e = /([0-9]+)/gm,
          je = (e, o, t) =>
            Pe(K(e.getValue(t)).toLowerCase(), K(o.getValue(t)).toLowerCase()),
          Ne = (e, o, t) => Pe(K(e.getValue(t)), K(o.getValue(t))),
          Qe = (e, o, t) =>
            Me(K(e.getValue(t)).toLowerCase(), K(o.getValue(t)).toLowerCase()),
          Ke = (e, o, t) => Me(K(e.getValue(t)), K(o.getValue(t))),
          Xe = (e, o, t) => {
            const n = e.getValue(t),
              r = o.getValue(t);
            return n > r ? 1 : n < r ? -1 : 0;
          },
          We = (e, o, t) => Me(e.getValue(t), o.getValue(t));
        function Me(e, o) {
          return e === o ? 0 : e > o ? 1 : -1;
        }
        function K(e) {
          return typeof e == "number"
            ? isNaN(e) || e === 1 / 0 || e === -1 / 0
              ? ""
              : String(e)
            : typeof e == "string"
              ? e
              : "";
        }
        function Pe(e, o) {
          const t = e.split($e).filter(Boolean),
            n = o.split($e).filter(Boolean);
          for (; t.length && n.length; ) {
            const r = t.shift(),
              i = n.shift(),
              l = parseInt(r, 10),
              s = parseInt(i, 10),
              a = [l, s].sort();
            if (isNaN(a[0])) {
              if (r > i) return 1;
              if (i > r) return -1;
              continue;
            }
            if (isNaN(a[1])) return isNaN(l) ? -1 : 1;
            if (l > s) return 1;
            if (s > l) return -1;
          }
          return t.length - n.length;
        }
        const re = {
            alphanumeric: je,
            alphanumericCaseSensitive: Ne,
            text: Qe,
            textCaseSensitive: Ke,
            datetime: Xe,
            basic: We,
          },
          Ze = [
            J,
            Oe,
            Ge,
            He,
            v,
            se,
            ze,
            Be,
            {
              getInitialState: (e) => ({ sorting: [], ...e }),
              getDefaultColumnDef: () => ({
                sortingFn: "auto",
                sortUndefined: 1,
              }),
              getDefaultOptions: (e) => ({
                onSortingChange: G("sorting", e),
                isMultiSortEvent: (o) => o.shiftKey,
              }),
              createColumn: (e, o) => {
                (e.getAutoSortingFn = () => {
                  const t = o.getFilteredRowModel().flatRows.slice(10);
                  let n = !1;
                  for (const r of t) {
                    const i = r?.getValue(e.id);
                    if (Object.prototype.toString.call(i) === "[object Date]")
                      return re.datetime;
                    if (
                      typeof i == "string" &&
                      ((n = !0), i.split($e).length > 1)
                    )
                      return re.alphanumeric;
                  }
                  return n ? re.text : re.basic;
                }),
                  (e.getAutoSortDir = () => {
                    const t = o.getFilteredRowModel().flatRows[0];
                    return typeof t?.getValue(e.id) == "string"
                      ? "asc"
                      : "desc";
                  }),
                  (e.getSortingFn = () => {
                    var t, n;
                    if (!e) throw new Error();
                    return N(e.columnDef.sortingFn)
                      ? e.columnDef.sortingFn
                      : e.columnDef.sortingFn === "auto"
                        ? e.getAutoSortingFn()
                        : (t =
                              (n = o.options.sortingFns) == null
                                ? void 0
                                : n[e.columnDef.sortingFn]) != null
                          ? t
                          : re[e.columnDef.sortingFn];
                  }),
                  (e.toggleSorting = (t, n) => {
                    const r = e.getNextSortingOrder(),
                      i = typeof t < "u" && t !== null;
                    o.setSorting((l) => {
                      const s = l?.find((u) => u.id === e.id),
                        a = l?.findIndex((u) => u.id === e.id);
                      let g = [],
                        c,
                        S = i ? t : r === "desc";
                      if (
                        (l != null && l.length && e.getCanMultiSort() && n
                          ? s
                            ? (c = "toggle")
                            : (c = "add")
                          : l != null && l.length && a !== l.length - 1
                            ? (c = "replace")
                            : s
                              ? (c = "toggle")
                              : (c = "replace"),
                        c === "toggle" && (i || r || (c = "remove")),
                        c === "add")
                      ) {
                        var d;
                        (g = [...l, { id: e.id, desc: S }]),
                          g.splice(
                            0,
                            g.length -
                              ((d = o.options.maxMultiSortColCount) != null
                                ? d
                                : Number.MAX_SAFE_INTEGER),
                          );
                      } else
                        c === "toggle"
                          ? (g = l.map((u) =>
                              u.id === e.id ? { ...u, desc: S } : u,
                            ))
                          : c === "remove"
                            ? (g = l.filter((u) => u.id !== e.id))
                            : (g = [{ id: e.id, desc: S }]);
                      return g;
                    });
                  }),
                  (e.getFirstSortDir = () => {
                    var t, n;
                    return (
                      (t =
                        (n = e.columnDef.sortDescFirst) != null
                          ? n
                          : o.options.sortDescFirst) != null
                        ? t
                        : e.getAutoSortDir() === "desc"
                    )
                      ? "desc"
                      : "asc";
                  }),
                  (e.getNextSortingOrder = (t) => {
                    var n, r;
                    const i = e.getFirstSortDir(),
                      l = e.getIsSorted();
                    return l
                      ? l !== i &&
                        ((n = o.options.enableSortingRemoval) == null || n) &&
                        (!(t && (r = o.options.enableMultiRemove) != null) || r)
                        ? !1
                        : l === "desc"
                          ? "asc"
                          : "desc"
                      : i;
                  }),
                  (e.getCanSort = () => {
                    var t, n;
                    return (
                      ((t = e.columnDef.enableSorting) != null ? t : !0) &&
                      ((n = o.options.enableSorting) != null ? n : !0) &&
                      !!e.accessorFn
                    );
                  }),
                  (e.getCanMultiSort = () => {
                    var t, n;
                    return (t =
                      (n = e.columnDef.enableMultiSort) != null
                        ? n
                        : o.options.enableMultiSort) != null
                      ? t
                      : !!e.accessorFn;
                  }),
                  (e.getIsSorted = () => {
                    var t;
                    const n =
                      (t = o.getState().sorting) == null
                        ? void 0
                        : t.find((r) => r.id === e.id);
                    return n ? (n.desc ? "desc" : "asc") : !1;
                  }),
                  (e.getSortIndex = () => {
                    var t, n;
                    return (t =
                      (n = o.getState().sorting) == null
                        ? void 0
                        : n.findIndex((r) => r.id === e.id)) != null
                      ? t
                      : -1;
                  }),
                  (e.clearSorting = () => {
                    o.setSorting((t) =>
                      t != null && t.length
                        ? t.filter((n) => n.id !== e.id)
                        : [],
                    );
                  }),
                  (e.getToggleSortingHandler = () => {
                    const t = e.getCanSort();
                    return (n) => {
                      t &&
                        (n.persist == null || n.persist(),
                        e.toggleSorting == null ||
                          e.toggleSorting(
                            void 0,
                            e.getCanMultiSort()
                              ? o.options.isMultiSortEvent == null
                                ? void 0
                                : o.options.isMultiSortEvent(n)
                              : !1,
                          ));
                    };
                  });
              },
              createTable: (e) => {
                (e.setSorting = (o) =>
                  e.options.onSortingChange == null
                    ? void 0
                    : e.options.onSortingChange(o)),
                  (e.resetSorting = (o) => {
                    var t, n;
                    e.setSorting(
                      o
                        ? []
                        : (t =
                              (n = e.initialState) == null
                                ? void 0
                                : n.sorting) != null
                          ? t
                          : [],
                    );
                  }),
                  (e.getPreSortedRowModel = () => e.getGroupedRowModel()),
                  (e.getSortedRowModel = () => (
                    !e._getSortedRowModel &&
                      e.options.getSortedRowModel &&
                      (e._getSortedRowModel = e.options.getSortedRowModel(e)),
                    e.options.manualSorting || !e._getSortedRowModel
                      ? e.getPreSortedRowModel()
                      : e._getSortedRowModel()
                  ));
              },
            },
            Ee,
            Te,
            qe,
            Ue,
            ke,
            Le,
          ];
        function Je(e) {
          var o, t;
          const n = [...Ze, ...((o = e._features) != null ? o : [])];
          let r = { _features: n };
          const i = r._features.reduce(
              (d, u) =>
                Object.assign(
                  d,
                  u.getDefaultOptions == null ? void 0 : u.getDefaultOptions(r),
                ),
              {},
            ),
            l = (d) =>
              r.options.mergeOptions
                ? r.options.mergeOptions(i, d)
                : { ...i, ...d };
          let a = { ...{}, ...((t = e.initialState) != null ? t : {}) };
          r._features.forEach((d) => {
            var u;
            a =
              (u = d.getInitialState == null ? void 0 : d.getInitialState(a)) !=
              null
                ? u
                : a;
          });
          const g = [];
          let c = !1;
          const S = {
            _features: n,
            options: { ...i, ...e },
            initialState: a,
            _queue: (d) => {
              g.push(d),
                c ||
                  ((c = !0),
                  Promise.resolve()
                    .then(() => {
                      for (; g.length; ) g.shift()();
                      c = !1;
                    })
                    .catch((u) =>
                      setTimeout(() => {
                        throw u;
                      }),
                    ));
            },
            reset: () => {
              r.setState(r.initialState);
            },
            setOptions: (d) => {
              const u = A(d, r.options);
              r.options = l(u);
            },
            getState: () => r.options.state,
            setState: (d) => {
              r.options.onStateChange == null || r.options.onStateChange(d);
            },
            _getRowId: (d, u, f) => {
              var m;
              return (m =
                r.options.getRowId == null
                  ? void 0
                  : r.options.getRowId(d, u, f)) != null
                ? m
                : `${f ? [f.id, u].join(".") : u}`;
            },
            getCoreRowModel: () => (
              r._getCoreRowModel ||
                (r._getCoreRowModel = r.options.getCoreRowModel(r)),
              r._getCoreRowModel()
            ),
            getRowModel: () => r.getPaginationRowModel(),
            getRow: (d, u) => {
              let f = (u ? r.getPrePaginationRowModel() : r.getRowModel())
                .rowsById[d];
              if (!f && ((f = r.getCoreRowModel().rowsById[d]), !f))
                throw new Error();
              return f;
            },
            _getDefaultColumnDef: p(
              () => [r.options.defaultColumn],
              (d) => {
                var u;
                return (
                  (d = (u = d) != null ? u : {}),
                  {
                    header: (f) => {
                      const m = f.header.column.columnDef;
                      return m.accessorKey
                        ? m.accessorKey
                        : m.accessorFn
                          ? m.id
                          : null;
                    },
                    cell: (f) => {
                      var m, C;
                      return (m =
                        (C = f.renderValue()) == null || C.toString == null
                          ? void 0
                          : C.toString()) != null
                        ? m
                        : null;
                    },
                    ...r._features.reduce(
                      (f, m) =>
                        Object.assign(
                          f,
                          m.getDefaultColumnDef == null
                            ? void 0
                            : m.getDefaultColumnDef(),
                        ),
                      {},
                    ),
                    ...d,
                  }
                );
              },
              h(e, "debugColumns", "_getDefaultColumnDef"),
            ),
            _getColumnDefs: () => r.options.columns,
            getAllColumns: p(
              () => [r._getColumnDefs()],
              (d) => {
                const u = function (f, m, C) {
                  return (
                    C === void 0 && (C = 0),
                    f.map((R) => {
                      const _ = te(r, R, C, m),
                        M = R;
                      return (
                        (_.columns = M.columns ? u(M.columns, _, C + 1) : []), _
                      );
                    })
                  );
                };
                return u(d);
              },
              h(e, "debugColumns", "getAllColumns"),
            ),
            getAllFlatColumns: p(
              () => [r.getAllColumns()],
              (d) => d.flatMap((u) => u.getFlatColumns()),
              h(e, "debugColumns", "getAllFlatColumns"),
            ),
            _getAllFlatColumnsById: p(
              () => [r.getAllFlatColumns()],
              (d) => d.reduce((u, f) => ((u[f.id] = f), u), {}),
              h(e, "debugColumns", "getAllFlatColumnsById"),
            ),
            getAllLeafColumns: p(
              () => [r.getAllColumns(), r._getOrderColumnsFn()],
              (d, u) => {
                let f = d.flatMap((m) => m.getLeafColumns());
                return u(f);
              },
              h(e, "debugColumns", "getAllLeafColumns"),
            ),
            getColumn: (d) => r._getAllFlatColumnsById()[d],
          };
          Object.assign(r, S);
          for (let d = 0; d < r._features.length; d++) {
            const u = r._features[d];
            u == null || u.createTable == null || u.createTable(r);
          }
          return r;
        }
        function Ye() {
          return (e) =>
            p(
              () => [e.options.data],
              (o) => {
                const t = { rows: [], flatRows: [], rowsById: {} },
                  n = function (r, i, l) {
                    i === void 0 && (i = 0);
                    const s = [];
                    for (let g = 0; g < r.length; g++) {
                      const c = w(
                        e,
                        e._getRowId(r[g], g, l),
                        r[g],
                        g,
                        i,
                        void 0,
                        l?.id,
                      );
                      if (
                        (t.flatRows.push(c),
                        (t.rowsById[c.id] = c),
                        s.push(c),
                        e.options.getSubRows)
                      ) {
                        var a;
                        (c.originalSubRows = e.options.getSubRows(r[g], g)),
                          (a = c.originalSubRows) != null &&
                            a.length &&
                            (c.subRows = n(c.originalSubRows, i + 1, c));
                      }
                    }
                    return s;
                  };
                return (t.rows = n(o)), t;
              },
              h(e.options, "debugTable", "getRowModel", () =>
                e._autoResetPageIndex(),
              ),
            );
        }
        function ct() {
          return (e) =>
            p(
              () => [
                e.getState().expanded,
                e.getPreExpandedRowModel(),
                e.options.paginateExpandedRows,
              ],
              (o, t, n) =>
                !t.rows.length ||
                (o !== !0 && !Object.keys(o ?? {}).length) ||
                !n
                  ? t
                  : xe(t),
              h(e.options, "debugTable", "getExpandedRowModel"),
            );
        }
        function xe(e) {
          const o = [],
            t = (n) => {
              var r;
              o.push(n),
                (r = n.subRows) != null &&
                  r.length &&
                  n.getIsExpanded() &&
                  n.subRows.forEach(t);
            };
          return (
            e.rows.forEach(t),
            { rows: o, flatRows: e.flatRows, rowsById: e.rowsById }
          );
        }
        function pt() {
          return (e, o) =>
            p(
              () => {
                var t;
                return [
                  (t = e.getColumn(o)) == null
                    ? void 0
                    : t.getFacetedRowModel(),
                ];
              },
              (t) => {
                if (!t) return;
                const n = t.flatRows
                  .flatMap((l) => {
                    var s;
                    return (s = l.getUniqueValues(o)) != null ? s : [];
                  })
                  .map(Number)
                  .filter((l) => !Number.isNaN(l));
                if (!n.length) return;
                let r = n[0],
                  i = n[n.length - 1];
                for (const l of n) l < r ? (r = l) : l > i && (i = l);
                return [r, i];
              },
              h(e.options, "debugTable", "getFacetedMinMaxValues"),
            );
        }
        function ye(e, o, t) {
          return t.options.filterFromLeafRows ? be(e, o, t) : et(e, o, t);
        }
        function be(e, o, t) {
          var n;
          const r = [],
            i = {},
            l = (n = t.options.maxLeafRowFilterDepth) != null ? n : 100,
            s = function (a, g) {
              g === void 0 && (g = 0);
              const c = [];
              for (let d = 0; d < a.length; d++) {
                var S;
                let u = a[d];
                const f = w(
                  t,
                  u.id,
                  u.original,
                  u.index,
                  u.depth,
                  void 0,
                  u.parentId,
                );
                if (
                  ((f.columnFilters = u.columnFilters),
                  (S = u.subRows) != null && S.length && g < l)
                ) {
                  if (
                    ((f.subRows = s(u.subRows, g + 1)),
                    (u = f),
                    o(u) && !f.subRows.length)
                  ) {
                    c.push(u), (i[u.id] = u), r.push(u);
                    continue;
                  }
                  if (o(u) || f.subRows.length) {
                    c.push(u), (i[u.id] = u), r.push(u);
                    continue;
                  }
                } else (u = f), o(u) && (c.push(u), (i[u.id] = u), r.push(u));
              }
              return c;
            };
          return { rows: s(e), flatRows: r, rowsById: i };
        }
        function et(e, o, t) {
          var n;
          const r = [],
            i = {},
            l = (n = t.options.maxLeafRowFilterDepth) != null ? n : 100,
            s = function (a, g) {
              g === void 0 && (g = 0);
              const c = [];
              for (let d = 0; d < a.length; d++) {
                let u = a[d];
                if (o(u)) {
                  var S;
                  if ((S = u.subRows) != null && S.length && g < l) {
                    const m = w(
                      t,
                      u.id,
                      u.original,
                      u.index,
                      u.depth,
                      void 0,
                      u.parentId,
                    );
                    (m.subRows = s(u.subRows, g + 1)), (u = m);
                  }
                  c.push(u), r.push(u), (i[u.id] = u);
                }
              }
              return c;
            };
          return { rows: s(e), flatRows: r, rowsById: i };
        }
        function mt() {
          return (e, o) =>
            p(
              () => [
                e.getPreFilteredRowModel(),
                e.getState().columnFilters,
                e.getState().globalFilter,
                e.getFilteredRowModel(),
              ],
              (t, n, r) => {
                if (!t.rows.length || (!(n != null && n.length) && !r))
                  return t;
                const i = [
                    ...n.map((s) => s.id).filter((s) => s !== o),
                    r ? "__global__" : void 0,
                  ].filter(Boolean),
                  l = (s) => {
                    for (let a = 0; a < i.length; a++)
                      if (s.columnFilters[i[a]] === !1) return !1;
                    return !0;
                  };
                return ye(t.rows, l, e);
              },
              h(e.options, "debugTable", "getFacetedRowModel"),
            );
        }
        function St() {
          return (e, o) =>
            p(
              () => {
                var t;
                return [
                  (t = e.getColumn(o)) == null
                    ? void 0
                    : t.getFacetedRowModel(),
                ];
              },
              (t) => {
                if (!t) return new Map();
                let n = new Map();
                for (let i = 0; i < t.flatRows.length; i++) {
                  const l = t.flatRows[i].getUniqueValues(o);
                  for (let s = 0; s < l.length; s++) {
                    const a = l[s];
                    if (n.has(a)) {
                      var r;
                      n.set(a, ((r = n.get(a)) != null ? r : 0) + 1);
                    } else n.set(a, 1);
                  }
                }
                return n;
              },
              h(e.options, "debugTable", `getFacetedUniqueValues_${o}`),
            );
        }
        function tt() {
          return (e) =>
            p(
              () => [
                e.getPreFilteredRowModel(),
                e.getState().columnFilters,
                e.getState().globalFilter,
              ],
              (o, t, n) => {
                if (!o.rows.length || (!(t != null && t.length) && !n)) {
                  for (let d = 0; d < o.flatRows.length; d++)
                    (o.flatRows[d].columnFilters = {}),
                      (o.flatRows[d].columnFiltersMeta = {});
                  return o;
                }
                const r = [],
                  i = [];
                (t ?? []).forEach((d) => {
                  var u;
                  const f = e.getColumn(d.id);
                  if (!f) return;
                  const m = f.getFilterFn();
                  m &&
                    r.push({
                      id: d.id,
                      filterFn: m,
                      resolvedValue:
                        (u =
                          m.resolveFilterValue == null
                            ? void 0
                            : m.resolveFilterValue(d.value)) != null
                          ? u
                          : d.value,
                    });
                });
                const l = (t ?? []).map((d) => d.id),
                  s = e.getGlobalFilterFn(),
                  a = e
                    .getAllLeafColumns()
                    .filter((d) => d.getCanGlobalFilter());
                n &&
                  s &&
                  a.length &&
                  (l.push("__global__"),
                  a.forEach((d) => {
                    var u;
                    i.push({
                      id: d.id,
                      filterFn: s,
                      resolvedValue:
                        (u =
                          s.resolveFilterValue == null
                            ? void 0
                            : s.resolveFilterValue(n)) != null
                          ? u
                          : n,
                    });
                  }));
                let g, c;
                for (let d = 0; d < o.flatRows.length; d++) {
                  const u = o.flatRows[d];
                  if (((u.columnFilters = {}), r.length))
                    for (let f = 0; f < r.length; f++) {
                      g = r[f];
                      const m = g.id;
                      u.columnFilters[m] = g.filterFn(
                        u,
                        m,
                        g.resolvedValue,
                        (C) => {
                          u.columnFiltersMeta[m] = C;
                        },
                      );
                    }
                  if (i.length) {
                    for (let f = 0; f < i.length; f++) {
                      c = i[f];
                      const m = c.id;
                      if (
                        c.filterFn(u, m, c.resolvedValue, (C) => {
                          u.columnFiltersMeta[m] = C;
                        })
                      ) {
                        u.columnFilters.__global__ = !0;
                        break;
                      }
                    }
                    u.columnFilters.__global__ !== !0 &&
                      (u.columnFilters.__global__ = !1);
                  }
                }
                const S = (d) => {
                  for (let u = 0; u < l.length; u++)
                    if (d.columnFilters[l[u]] === !1) return !1;
                  return !0;
                };
                return ye(o.rows, S, e);
              },
              h(e.options, "debugTable", "getFilteredRowModel", () =>
                e._autoResetPageIndex(),
              ),
            );
        }
        function nt() {
          return (e) =>
            p(
              () => [e.getState().grouping, e.getPreGroupedRowModel()],
              (o, t) => {
                if (!t.rows.length || !o.length)
                  return (
                    t.rows.forEach((a) => {
                      (a.depth = 0), (a.parentId = void 0);
                    }),
                    t
                  );
                const n = o.filter((a) => e.getColumn(a)),
                  r = [],
                  i = {},
                  l = function (a, g, c) {
                    if ((g === void 0 && (g = 0), g >= n.length))
                      return a.map(
                        (f) => (
                          (f.depth = g),
                          r.push(f),
                          (i[f.id] = f),
                          f.subRows && (f.subRows = l(f.subRows, g + 1, f.id)),
                          f
                        ),
                      );
                    const S = n[g],
                      d = ot(a, S);
                    return Array.from(d.entries()).map((f, m) => {
                      let [C, R] = f,
                        _ = `${S}:${C}`;
                      _ = c ? `${c}>${_}` : _;
                      const M = l(R, g + 1, _);
                      M.forEach(($) => {
                        $.parentId = _;
                      });
                      const B = g ? Z(R, ($) => $.subRows) : R,
                        P = w(e, _, B[0].original, m, g, void 0, c);
                      return (
                        Object.assign(P, {
                          groupingColumnId: S,
                          groupingValue: C,
                          subRows: M,
                          leafRows: B,
                          getValue: ($) => {
                            if (n.includes($)) {
                              if (P._valuesCache.hasOwnProperty($))
                                return P._valuesCache[$];
                              if (R[0]) {
                                var ie;
                                P._valuesCache[$] =
                                  (ie = R[0].getValue($)) != null ? ie : void 0;
                              }
                              return P._valuesCache[$];
                            }
                            if (P._groupingValuesCache.hasOwnProperty($))
                              return P._groupingValuesCache[$];
                            const le = e.getColumn($),
                              ge = le?.getAggregationFn();
                            if (ge)
                              return (
                                (P._groupingValuesCache[$] = ge($, B, R)),
                                P._groupingValuesCache[$]
                              );
                          },
                        }),
                        M.forEach(($) => {
                          r.push($), (i[$.id] = $);
                        }),
                        P
                      );
                    });
                  },
                  s = l(t.rows, 0);
                return (
                  s.forEach((a) => {
                    r.push(a), (i[a.id] = a);
                  }),
                  { rows: s, flatRows: r, rowsById: i }
                );
              },
              h(e.options, "debugTable", "getGroupedRowModel", () => {
                e._queue(() => {
                  e._autoResetExpanded(), e._autoResetPageIndex();
                });
              }),
            );
        }
        function ot(e, o) {
          const t = new Map();
          return e.reduce((n, r) => {
            const i = `${r.getGroupingValue(o)}`,
              l = n.get(i);
            return l ? l.push(r) : n.set(i, [r]), n;
          }, t);
        }
        function ht(e) {
          return (o) =>
            p(
              () => [
                o.getState().pagination,
                o.getPrePaginationRowModel(),
                o.options.paginateExpandedRows ? void 0 : o.getState().expanded,
              ],
              (t, n) => {
                if (!n.rows.length) return n;
                const { pageSize: r, pageIndex: i } = t;
                let { rows: l, flatRows: s, rowsById: a } = n;
                const g = r * i,
                  c = g + r;
                l = l.slice(g, c);
                let S;
                o.options.paginateExpandedRows
                  ? (S = { rows: l, flatRows: s, rowsById: a })
                  : (S = xe({ rows: l, flatRows: s, rowsById: a })),
                  (S.flatRows = []);
                const d = (u) => {
                  S.flatRows.push(u), u.subRows.length && u.subRows.forEach(d);
                };
                return S.rows.forEach(d), S;
              },
              h(o.options, "debugTable", "getPaginationRowModel"),
            );
        }
        function rt() {
          return (e) =>
            p(
              () => [e.getState().sorting, e.getPreSortedRowModel()],
              (o, t) => {
                if (!t.rows.length || !(o != null && o.length)) return t;
                const n = e.getState().sorting,
                  r = [],
                  i = n.filter((a) => {
                    var g;
                    return (g = e.getColumn(a.id)) == null
                      ? void 0
                      : g.getCanSort();
                  }),
                  l = {};
                i.forEach((a) => {
                  const g = e.getColumn(a.id);
                  g &&
                    (l[a.id] = {
                      sortUndefined: g.columnDef.sortUndefined,
                      invertSorting: g.columnDef.invertSorting,
                      sortingFn: g.getSortingFn(),
                    });
                });
                const s = (a) => {
                  const g = a.map((c) => ({ ...c }));
                  return (
                    g.sort((c, S) => {
                      for (let u = 0; u < i.length; u += 1) {
                        var d;
                        const f = i[u],
                          m = l[f.id],
                          C = m.sortUndefined,
                          R = (d = f?.desc) != null ? d : !1;
                        let _ = 0;
                        if (C) {
                          const M = c.getValue(f.id),
                            B = S.getValue(f.id),
                            P = M === void 0,
                            $ = B === void 0;
                          if (P || $) {
                            if (C === "first") return P ? -1 : 1;
                            if (C === "last") return P ? 1 : -1;
                            _ = P && $ ? 0 : P ? C : -C;
                          }
                        }
                        if ((_ === 0 && (_ = m.sortingFn(c, S, f.id)), _ !== 0))
                          return (
                            R && (_ *= -1), m.invertSorting && (_ *= -1), _
                          );
                      }
                      return c.index - S.index;
                    }),
                    g.forEach((c) => {
                      var S;
                      r.push(c),
                        (S = c.subRows) != null &&
                          S.length &&
                          (c.subRows = s(c.subRows));
                    }),
                    g
                  );
                };
                return { rows: s(t.rows), flatRows: r, rowsById: t.rowsById };
              },
              h(e.options, "debugTable", "getSortedRowModel", () =>
                e._autoResetPageIndex(),
              ),
            );
        }
      },
      54806: (Ve, b, D) => {
        D.d(b, { E: () => Y });
        var T = D(90626),
          A = D(86709),
          ee = D(45747),
          G = D(74500),
          N = D(57168);
        function W(w, v) {
          return w.filter((V) => !v.includes(V));
        }
        function Z(w, v, V) {
          const F = w.slice(0);
          return (F[v] = V), F;
        }
        var p = class extends G.Q {
            #r;
            #e;
            #o;
            #i;
            #t;
            #n;
            #s;
            #u;
            constructor(w, v, V) {
              super(),
                (this.#r = w),
                (this.#i = V),
                (this.#o = []),
                (this.#t = []),
                (this.#e = []),
                this.setQueries(v);
            }
            onSubscribe() {
              this.listeners.size === 1 &&
                this.#t.forEach((w) => {
                  w.subscribe((v) => {
                    this.#d(w, v);
                  });
                });
            }
            onUnsubscribe() {
              this.listeners.size || this.destroy();
            }
            destroy() {
              (this.listeners = new Set()),
                this.#t.forEach((w) => {
                  w.destroy();
                });
            }
            setQueries(w, v, V) {
              (this.#o = w),
                (this.#i = v),
                A.j.batch(() => {
                  const F = this.#t,
                    x = this.#l(this.#o);
                  x.forEach((E) =>
                    E.observer.setOptions(E.defaultedQueryOptions, V),
                  );
                  const I = x.map((E) => E.observer),
                    L = I.map((E) => E.getCurrentResult()),
                    O = I.some((E, Q) => E !== F[Q]);
                  (F.length === I.length && !O) ||
                    ((this.#t = I),
                    (this.#e = L),
                    this.hasListeners() &&
                      (W(F, I).forEach((E) => {
                        E.destroy();
                      }),
                      W(I, F).forEach((E) => {
                        E.subscribe((Q) => {
                          this.#d(E, Q);
                        });
                      }),
                      this.#f()));
                });
            }
            getCurrentResult() {
              return this.#e;
            }
            getQueries() {
              return this.#t.map((w) => w.getCurrentQuery());
            }
            getObservers() {
              return this.#t;
            }
            getOptimisticResult(w, v) {
              const F = this.#l(w).map((x) =>
                x.observer.getOptimisticResult(x.defaultedQueryOptions),
              );
              return [F, (x) => this.#g(x ?? F, v), () => this.#a(F, w)];
            }
            #a(w, v) {
              const V = this.#l(v);
              return V.map((F, x) => {
                const I = w[x];
                return F.defaultedQueryOptions.notifyOnChangeProps
                  ? I
                  : F.observer.trackResult(I, (L) => {
                      V.forEach((O) => {
                        O.observer.trackProp(L);
                      });
                    });
              });
            }
            #g(w, v) {
              return v
                ? ((!this.#n || this.#e !== this.#u || v !== this.#s) &&
                    ((this.#s = v),
                    (this.#u = this.#e),
                    (this.#n = (0, N.BH)(this.#n, v(w)))),
                  this.#n)
                : w;
            }
            #l(w) {
              const v = new Map(this.#t.map((F) => [F.options.queryHash, F])),
                V = [];
              return (
                w.forEach((F) => {
                  const x = this.#r.defaultQueryOptions(F),
                    I = v.get(x.queryHash);
                  I
                    ? V.push({ defaultedQueryOptions: x, observer: I })
                    : V.push({
                        defaultedQueryOptions: x,
                        observer: new ee.$(this.#r, x),
                      });
                }),
                V
              );
            }
            #d(w, v) {
              const V = this.#t.indexOf(w);
              V !== -1 && ((this.#e = Z(this.#e, V, v)), this.#f());
            }
            #f() {
              if (this.hasListeners()) {
                const w = this.#n,
                  v = this.#g(this.#a(this.#e, this.#o), this.#i?.combine);
                w !== v &&
                  A.j.batch(() => {
                    this.listeners.forEach((V) => {
                      V(this.#e);
                    });
                  });
              }
            }
          },
          h = D(75233),
          X = D(22730),
          te = D(43424),
          y = D(19086),
          q = D(44407),
          J = D(19866);
        function Y({ queries: w, ...v }, V) {
          const F = (0, h.jE)(V),
            x = (0, X.w)(),
            I = (0, te.h)(),
            L = T.useMemo(
              () =>
                w.map((H) => {
                  const j = F.defaultQueryOptions(H);
                  return (
                    (j._optimisticResults = x ? "isRestoring" : "optimistic"), j
                  );
                }),
              [w, F, x],
            );
          L.forEach((H) => {
            (0, q.jv)(H), (0, y.LJ)(H, I);
          }),
            (0, y.wZ)(I);
          const [O] = T.useState(() => new p(F, L, v)),
            [E, Q, ne] = O.getOptimisticResult(L, v.combine);
          T.useSyncExternalStore(
            T.useCallback(
              (H) => (x ? J.l : O.subscribe(A.j.batchCalls(H))),
              [O, x],
            ),
            () => O.getCurrentResult(),
            () => O.getCurrentResult(),
          ),
            T.useEffect(() => {
              O.setQueries(L, v, { listeners: !1 });
            }, [L, v, O]);
          const z = E.some((H, j) => (0, q.EU)(L[j], H))
            ? E.flatMap((H, j) => {
                const k = L[j];
                if (k) {
                  const de = new ee.$(F, k);
                  if ((0, q.EU)(k, H)) return (0, q.iL)(k, de, I);
                  (0, q.nE)(H, x) && (0, q.iL)(k, de, I);
                }
                return [];
              })
            : [];
          if (z.length > 0) throw Promise.all(z);
          const se = E.find((H, j) => {
            const k = L[j];
            return (
              k &&
              (0, y.$1)({
                result: H,
                errorResetBoundary: I,
                throwOnError: k.throwOnError,
                query: F.getQueryCache().get(k.queryHash),
              })
            );
          });
          if (se?.error) throw se.error;
          return Q(ne());
        }
      },
    },
  ]);
})();
