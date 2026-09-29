/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [4298],
  {
    31718: (e) => {
      e.exports = {
        FancyTableRow: "_36QJs1BZ3so19Xl2es3ihH",
        ExpandableRow: "g86xV6xEGOZ54uRvK3oQ4",
        FancyTableHeader: "_2mHaS291U0AFO1q99AVdLy",
        StickyHeader: "_4y4yrbyr89wNqTGLp049k",
        FancyTableCell: "_3m5AH2HSnsvjImS7uUpvxv",
        SortButton: "_2xr81ssapVQO5aalcANmCk",
        ColumnHeader: "_2XdcqH-eLWVp_qatDebc6J",
        ResizeHandle: "USh_UNRX22s8Wml0mCY3M",
        PrevResizeHandle: "_3wzyEuMO8BdQHAkXnneNRR",
        SortIndicator: "_6z0ftV9RCqbZFmC4EOzYZ",
        GroupExpandIndicator: "_3I86V1lT4xbDJ6FDjMIaMq",
        RowGroup: "_uckWydn-lyPGWjFKZ4Tm",
      };
    },
    66051: (e, t, n) => {
      "use strict";
      n.d(t, { k: () => M });
      var o = n(7850),
        r = n(8871),
        i = n(67796),
        l = n(16666),
        s = n(92148),
        a = n(59366),
        c = n(64238),
        u = n.n(c),
        d = n(90626),
        m = n(31718),
        g = n.n(m),
        f = n(76217),
        h = n(23310),
        w = n(94104),
        p = n(9646);
      const v = d.memo(function (e) {
        const {
            virtualizer: t,
            bDynamic: n,
            scrollAlign: r,
            bNativeScrollIntoView: i,
            idx: l,
            rowGap: s,
            renderItem: a,
          } = e,
          c = d.useCallback(
            (e, n, o) => (t.scrollToIndex(l, { align: r }), !0),
            [t, l, r],
          );
        return (0, o.jsx)(f.Z, {
          ref: n ? t.measureElement : void 0,
          navKey: `VirtualizedListIndex-${l}`,
          "data-index": l,
          fnScrollIntoViewHandler: i ? void 0 : c,
          scrollIntoViewWhenChildFocused: "force",
          style: { width: "100%", paddingBottom: s },
          children: a(l),
        });
      });
      function b(e, t) {
        const n = e.getBoundingClientRect().top;
        return t
          ? n - t.getBoundingClientRect().top - t.clientTop + t.scrollTop
          : n + (e.ownerDocument.defaultView?.scrollY ?? 0);
      }
      d.forwardRef(function (e, t) {
        const {
            nRows: n,
            nItemHeight: i,
            nRowGap: l,
            overscan: s,
            renderItem: a,
            bDynamic: c,
            measureElement: u,
            className: m,
            forceVirtualizeType: g,
            hintVirtualizeType: h,
            scrollAlign: p,
            bNativeScrollIntoView: v,
            bNoOverscanOffscreen: x,
            initialOffset: C,
            onOffsetChange: S,
            ...E
          } = e,
          [y, I] = (0, d.useState)(g ?? h),
          [H, O] = d.useState(),
          [T, V] = d.useState(),
          [j, M] = d.useState(),
          k = d.useRef(null),
          D = d.useCallback(
            (e) => {
              if (!e) return;
              const t = (0, w._f)(e, "y"),
                n = b(e, "window" == g ? null : t),
                o = t?.getBoundingClientRect(),
                r = () => {
                  "window" != g &&
                    (O(t || void 0),
                    V((e) => {
                      if (!o) return;
                      const t = Math.round(o.width),
                        n = Math.round(o.height);
                      return e?.width == t && e?.height == n
                        ? e
                        : { width: t, height: n };
                    })),
                    M(n),
                    g || I(t ? "element" : "window");
                };
              x ? r() : (0, d.startTransition)(r);
            },
            [g, x],
          ),
          F = d.useRef(H);
        F.current = H;
        const N = d.useCallback(() => {
            if (!k.current) return;
            const e = b(k.current, F.current);
            (0, d.startTransition)(() => {
              M(e);
            });
          }, []),
          G =
            ((P = N),
            (0, r.QS)(
              (e) => {
                if (!e) return;
                const t = new e.ownerDocument.defaultView.ResizeObserver(
                  (e) => {
                    P(e[0]);
                  },
                );
                let n = [],
                  o = e;
                for (; o && null != o; )
                  t.observe(o), n.push(o), (o = o.parentElement);
                return () => {
                  n.forEach((e) => t.unobserve(e));
                };
              },
              [P],
            ));
        var P;
        const W = (0, r.Ue)(D, k, G, t),
          $ = {
            nRows: n,
            nItemHeight: i,
            nRowGap: l,
            overscan: s,
            renderItem: a,
            bDynamic: c,
            measureElement: u,
            forceVirtualizeType: g,
            hintVirtualizeType: h,
            scrollAlign: p,
            bNativeScrollIntoView: v,
            bNoOverscanOffscreen: x,
            initialOffset: C,
            onOffsetChange: S,
          };
        return (0, o.jsx)(f.Z, {
          className: m,
          ref: W,
          ...E,
          children: (0, o.jsxs)(d.Suspense, {
            children: [
              "element" === y &&
                (0, o.jsx)(z, {
                  ...$,
                  nScrollMargin: j,
                  elScrollable: H,
                  rectScrollable: T,
                }),
              "window" === y && (0, o.jsx)(R, { ...$, nScrollMargin: j }),
            ],
          }),
        });
      });
      function x(e, t, n) {
        d.useEffect(() => {
          n ||
            (0, d.startTransition)(() => {
              e.measure();
            });
        }, [e, t, n]);
      }
      function C(e, t, n) {
        if (!t) return "first";
        const o = e.options.scrollMargin,
          r = o + e.getTotalSize(),
          i = e.scrollOffset ?? 0;
        return o > i + (e.scrollRect ?? e.options.initialRect).height + n
          ? "first"
          : r < i - n
            ? "last"
            : "all";
      }
      function S(e, t, n) {
        const [, o] = (0, d.useState)(0),
          r = d.useRef({ bPositionKnown: t, nMargin: n, eRowWindow: "all" });
        (r.current.bPositionKnown = t), (r.current.nMargin = n);
        const i = d.useCallback(
          (e, t) =>
            I(e, (n, i) => {
              t(n, i);
              const {
                bPositionKnown: l,
                nMargin: s,
                eRowWindow: a,
              } = r.current;
              C(e, l, s) != a && o((e) => e + 1);
            }),
          [],
        );
        return {
          observeElementOffset: e ? i : I,
          fnGetRowWindow: (o) => {
            const i = e ? C(o, t, n) : "all";
            return (r.current.eRowWindow = i), i;
          },
        };
      }
      function R(e) {
        const {
            nScrollMargin: t,
            nRows: n,
            nItemHeight: r,
            nRowGap: i = 10,
            overscan: l = 6,
            initialOffset: a,
            onOffsetChange: c,
            measureElement: u,
            bDynamic: m,
            bNoOverscanOffscreen: g,
          } = e,
          f = ((0, p.d)(), r + i),
          { observeElementOffset: h, fnGetRowWindow: w } = S(
            g,
            void 0 !== t,
            l * f,
          ),
          v = (0, s.XW)({
            count: n,
            scrollMargin: t,
            estimateSize: d.useCallback(() => f, [f]),
            measureElement: u,
            overscan: l,
            initialOffset: a ?? (() => window.scrollY),
            initialRect: void 0,
            observeElementOffset: h,
            observeElementRect: H,
            onChange(e, t) {
              c?.(e.scrollOffset);
            },
          });
        return (
          (v.shouldAdjustScrollPositionOnItemSizeChange = (e) =>
            void 0 !== t && e.start < (v.scrollOffset ?? 0)),
          x(v, f, m),
          (0, o.jsx)(E, { ...e, virtualizer: v, eRowWindow: w(v) })
        );
      }
      function z(e) {
        const {
            nRows: t,
            nScrollMargin: n,
            elScrollable: r,
            rectScrollable: i,
            nItemHeight: l,
            nRowGap: a = 10,
            overscan: c = 6,
            initialOffset: u,
            onOffsetChange: m,
            measureElement: g,
            bDynamic: f,
            bNoOverscanOffscreen: h,
          } = e,
          w = l + a,
          v = (0, p.d)(),
          { observeElementOffset: b, fnGetRowWindow: C } = S(
            h,
            void 0 !== r && void 0 !== n,
            c * w,
          ),
          R = (0, s.Te)({
            count: t,
            scrollMargin: n ?? 0,
            getScrollElement: () => (
              r &&
                R.scrollElement !== r &&
                void 0 === u &&
                (R.scrollOffset = r.scrollTop),
              r ?? null
            ),
            estimateSize: d.useCallback(() => w, [w]),
            measureElement: g,
            overscan: c,
            initialRect: r
              ? i
              : {
                  height: v.viewportHeight?.value ?? 1e3,
                  width: v.viewportWidth?.value ?? 1e3,
                },
            initialOffset: u,
            observeElementOffset: b,
            observeElementRect: O,
            onChange(e, t) {
              m?.(e.scrollOffset);
            },
          });
        return (
          (R.shouldAdjustScrollPositionOnItemSizeChange = (e) =>
            void 0 !== r && e.start < (R.scrollOffset ?? 0)),
          x(R, w, f),
          (0, o.jsx)(E, { ...e, virtualizer: R, eRowWindow: C(R) })
        );
      }
      function E(e) {
        const {
            virtualizer: t,
            eRowWindow: n,
            nRowGap: r,
            renderItem: i,
            bDynamic: l,
            scrollAlign: s = "center",
            bNativeScrollIntoView: a,
          } = e,
          c = t.getVirtualItems(),
          u =
            "first" == n
              ? t.measurementsCache[0]
              : t.measurementsCache[t.measurementsCache.length - 1],
          d = "all" == n ? c : u ? [u] : [],
          m = d.length ? d[0].start - t.options.scrollMargin : 0,
          g = Math.max(0, t.getTotalSize());
        return (0, o.jsx)(f.Z, {
          "flow-children": "column",
          navEntryPreferPosition: h.iU.MAINTAIN_Y,
          style: { height: `${g}px`, width: "100%", position: "relative" },
          children: (0, o.jsx)("div", {
            style: {
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              transform: `translateY( ${m}px )`,
            },
            children: d.map((e) =>
              (0, o.jsx)(
                v,
                {
                  virtualizer: t,
                  bDynamic: l,
                  scrollAlign: s,
                  bNativeScrollIntoView: a,
                  idx: e.index,
                  rowGap: r,
                  renderItem: i,
                },
                e.key,
              ),
            ),
          }),
        });
      }
      function y(e) {
        return (...t) => {
          queueMicrotask(() => {
            (0, d.startTransition)(() => {
              e(...t);
            });
          });
        };
      }
      function I(e, t) {
        const n = e.scrollElement;
        if (!n) return;
        let o;
        o = y(
          "scrollX" in n
            ? (o) => t(n[e.options.horizontal ? "scrollX" : "scrollY"], o)
            : (o) => t(n[e.options.horizontal ? "scrollLeft" : "scrollTop"], o),
        );
        const r = () => o(!0),
          i = () => o(!1);
        return (
          i(),
          n.addEventListener("scroll", r, { passive: !0 }),
          n.addEventListener("scrollend", i, { passive: !0 }),
          () => {
            n.removeEventListener("scroll", r),
              n.removeEventListener("scrollend", i);
          }
        );
      }
      function H(e, t) {
        const n = e.scrollElement;
        if (!n) return;
        const o = y(() => t({ width: n.innerWidth, height: n.innerHeight }));
        return (
          o(),
          n.addEventListener("resize", o, { passive: !0 }),
          () => {
            n.removeEventListener("resize", o);
          }
        );
      }
      function O(e, t) {
        const n = e.scrollElement;
        if (!n) return;
        const o = y((e) =>
          t({ width: Math.round(e.width), height: Math.round(e.height) }),
        );
        o(n.getBoundingClientRect());
        const r = n.ownerDocument.defaultView;
        if (!r?.ResizeObserver) return () => {};
        const i = new r.ResizeObserver((e) => {
          e[0]?.borderBoxSize[0]
            ? o({
                width: e[0].borderBoxSize[0].inlineSize,
                height: e[0].borderBoxSize[0].blockSize,
              })
            : o(n.getBoundingClientRect());
        });
        return (
          i.observe(n, { box: "border-box" }),
          () => {
            i.unobserve(n);
          }
        );
      }
      var T = n(26408);
      const V = d.createContext(void 0);
      function j(e) {
        const { table: t, setColumnSizeOverride: n } = e,
          r = (0, d.useRef)(t);
        r.current = t;
        const i = (0, d.useMemo)(
          () => ({ table: r.current, setColumnSizeOverride: n }),
          [n],
        );
        return (0, o.jsx)(V.Provider, { value: i, children: e.children });
      }
      const M = d.forwardRef(function (e, t) {
        const {
            data: n,
            columns: r,
            className: c,
            width: u,
            height: m,
            nScrollMargin: g,
            nItemHeight: f,
            nHeaderHeight: h,
            overscan: w = 6,
            stickyHeader: p,
            getRowKey: v,
            initialSorting: b,
            initialColumnFilters: x,
            initialGrouping: C,
            initialExpanded: S,
            initialColumnPinning: R,
            initialColumnVisibility: z,
            onGroupingChange: E,
            onVisibleRowsChange: y,
            renderGroup: T,
            virtualizeType: V = "element",
          } = e,
          M = (0, d.useRef)(null),
          [k, N] = (0, d.useState)({}),
          [G, P] = (0, d.useState)({}),
          W = r.map((e) =>
            "accessorKey" in e
              ? { ...e, filterFn: k[e.accessorKey] ?? e.filterFn }
              : e,
          ),
          $ = W.map((e) => {
            let t = G[e.id];
            return (
              void 0 === t && "accessorKey" in e && (t = G[e.accessorKey]),
              (t ??= e.size),
              { ...e, size: t }
            );
          }),
          A = (0, i.N4)({
            data: n,
            columns: $,
            defaultColumn: { minSize: 60, maxSize: 800 },
            initialState: {
              sorting: b,
              grouping: C ?? [],
              expanded: S,
              columnPinning: R ?? {},
              columnFilters: x,
              columnVisibility: z,
            },
            getCoreRowModel: (0, l.HT)(),
            getSortedRowModel: (0, l.h5)(),
            getFilteredRowModel: (0, l.hM)(),
            getGroupedRowModel: (0, l.cU)(),
            columnResizeMode: "onChange",
          }),
          { rows: B, flatRows: L } = A.getRowModel(),
          _ = B.flatMap((e) => (e.getIsExpanded() ? [e, ...e.subRows] : e)),
          K = A.getState().grouping;
        (0, d.useEffect)(() => {
          E?.(K);
        }, [E, K]),
          (0, d.useEffect)(() => {
            y?.(_);
          }, [y, _.length]);
        const X = (0, s.Te)({
            count: _.length,
            scrollMargin: g,
            getScrollElement: d.useCallback(
              () => ("element" === V ? ee.current : window),
              [V],
            ),
            scrollToFn: (e, t, n) =>
              "window" === V ? (0, a.e8)(e, t, n) : (0, a.Ox)(e, t, n),
            estimateSize: d.useCallback(() => f, [f]),
            overscan: w,
            initialRect: void 0,
            observeElementOffset: I,
            observeElementRect: (e, t) => ("window" === V ? H(e, t) : O(e, t)),
            getItemKey(e) {
              const t = _[e];
              return `${t.parentId ?? ""}${v(e, t.original)}`;
            },
          }),
          Y = (0, d.useRef)(0),
          Z = d.useMemo(() => {
            const e = A.getFlatHeaders(),
              t = {};
            for (let n = 0; n < e.length; n++) {
              const o = e[n];
              (t[`--header-${o.id}-size`] = `${o.getSize()}px`),
                (t[`--col-${o.column.id}-size`] = `${o.column.getSize()}px`);
            }
            return (Y.current += 1), t;
          }, [A.getState().columnSizingInfo, A.getState().columnSizing, r]);
        d.useEffect(() => {
          (0, d.startTransition)(() => {
            X.measure();
          });
        }, [X, f]);
        const q = X.getVirtualItems(),
          U = q[0]?.start ?? 0,
          Q = X.getTotalSize(),
          J = (0, s.Te)({
            estimateSize: (e) =>
              _[0]?.getVisibleCells()[e].column.getSize() ?? 0,
            count: _[0]?.getVisibleCells().length ?? 0,
            overscan: 6,
            horizontal: !0,
            getScrollElement: d.useCallback(
              () => ("element" === V ? ee.current : window),
              [V],
            ),
            scrollToFn: (e, t, n) =>
              "window" === V ? (0, a.e8)(e, t, n) : (0, a.Ox)(e, t, n),
            rangeExtractor(e) {
              const t = _[0]?.getVisibleCells() ?? [],
                n = new Set((0, a.vp)(e));
              return (
                t.forEach((e, t) => {
                  e.column.getIsPinned() && n.add(t);
                }),
                Array.from(n).sort((e, t) => e - t)
              );
            },
            observeElementOffset: I,
            observeElementRect: (e, t) => ("window" === V ? H(e, t) : O(e, t)),
          });
        (0, d.useEffect)(() => {
          J.measure();
        }, [Y.current]),
          (0, d.useImperativeHandle)(
            t,
            () => ({
              getData: () => L.map((e) => e.original),
              getVisibleRows: () => _,
              getState: A.getState,
              getColumns: A.getAllColumns,
              getColumnDefs: () => W,
              setColumnFilters: A.setColumnFilters,
              resetColumnFilters: A.resetColumnFilters,
              setColumnFilterFnOverride: N,
              getColumnFilterFnOverride: () => k,
              getContainerElement: () => ee.current,
              getTableElement: () => M.current,
              scrollToColumn(e, t) {
                J.scrollToIndex(e.getIndex(), t);
              },
            }),
            [
              L,
              _,
              A.setColumnFilters,
              A.resetColumnFilters,
              A.getState,
              A.getAllColumns,
              k,
              W,
              J,
            ],
          );
        const ee = (0, d.useRef)(null),
          te = p ? (h ?? 0) : 0;
        let ne = 0;
        const oe = _[0]?.getVisibleCells(),
          re = J.getVirtualItems(),
          ie = re[re.length - 1]?.end;
        for (const e of re) {
          const t = oe[e.index];
          t?.column.getIsPinned() && (ne += e.size);
        }
        return (0, o.jsx)(j, {
          table: A,
          setColumnSizeOverride: P,
          children: (0, o.jsx)("div", {
            className: c,
            ref: ee,
            style: {
              width: u,
              height: m,
              overflow: "element" === V ? "auto" : void 0,
              maxWidth: "fit-content",
              scrollPadding: `${te}px 0 0 ${ne}px`,
            },
            children: (0, o.jsxs)("div", {
              role: "table",
              ref: M,
              "aria-rowcount": n.length,
              style: {
                minHeight: Q,
                width: A.getTotalSize(),
                "--virtualPos": `${U}px`,
                ...Z,
              },
              children: [
                A.getHeaderGroups().map((e) =>
                  (0, o.jsx)(
                    D,
                    { group: e, sticky: p, nHeaderHeight: h },
                    e.id,
                  ),
                ),
                q.map((e) =>
                  (0, o.jsx)(
                    F,
                    {
                      row: _[e.index],
                      size: e.size,
                      rowVirtualizer: J,
                      index: e.index,
                      measureRef: X.measureElement,
                      scrollContainerRef: ee,
                      nItemHeight: f,
                      renderGroup: T,
                      rowEnd: ie,
                    },
                    e.key,
                  ),
                ),
              ],
            }),
          }),
        });
      });
      function k(e) {
        const t = e.getIsPinned();
        return {
          borderRight:
            "left" === t && e.getIsLastColumn("left")
              ? "var(--fancy-table-last-pinned-border, var(--fancy-table-cell-border, 1px solid #aaa))"
              : void 0,
          borderLeft:
            "right" === t && e.getIsFirstColumn("right")
              ? "var(--fancy-table-last-pinned-border,var(--fancy-table-cell-border, 1px solid #aaa))"
              : void 0,
          left: "left" === t ? `${e.getStart("left")}px` : void 0,
          right: "right" === t ? `${e.getAfter("right")}px` : void 0,
          position: t ? "sticky" : "relative",
          minWidth: e.getSize(),
          zIndex: t ? 1 : 0,
        };
      }
      function D(e) {
        const { group: t, sticky: n, nHeaderHeight: r } = e;
        return (0, o.jsx)("div", {
          role: "row",
          className: u()(
            g().FancyTableRow,
            g().FancyTableHeader,
            n && g().StickyHeader,
          ),
          children: t.headers.map((e, n) => {
            const i = t.headers[n - 1],
              l = {},
              s = e.column.getIsSorted();
            s &&
              !e.column.columnDef.meta?.bDisableSortButton &&
              (l["aria-sort"] = "asc" === s ? "ascending" : "descending");
            let a = "div";
            return (
              e.column.getCanSort() &&
                !e.column.columnDef.meta?.bDisableSortButton &&
                ((a = "button"),
                (l.onClick = e.column.getToggleSortingHandler())),
              (0, o.jsx)(
                P,
                {
                  header: e,
                  prevHeader: i,
                  HeaderElement: a,
                  nHeaderHeight: r,
                  sortDirection: s,
                  strTooltip: e.column.columnDef.meta?.strHeaderTooltip,
                  conditionalProps: l,
                },
                e.id,
              )
            );
          }),
        });
      }
      const F = d.memo(function (e) {
        const {
          row: t,
          size: n,
          rowVirtualizer: r,
          measureRef: i,
          index: l,
          nItemHeight: s,
          renderGroup: a,
        } = e;
        return (0, o.jsx)("div", {
          role: "row",
          className: u()(
            g().FancyTableRow,
            t.getCanExpand() && g().ExpandableRow,
          ),
          style: {
            minHeight: t.getCanExpand() ? void 0 : `${n}px`,
            transform: "translateY(var(--virtualPos))",
          },
          "data-even": l % 2 == 0,
          "data-index": l,
          ref: i,
          children: (0, o.jsx)(N, {
            row: t,
            rowVirtualizer: r,
            nItemHeight: s,
            renderGroup: a,
          }),
        });
      });
      function N(e) {
        const { row: t, rowVirtualizer: n, renderGroup: r } = e;
        if (t.getCanExpand()) {
          const e = r ?? (() => t.groupingValue);
          return (0, o.jsxs)("button", {
            className: g().RowGroup,
            "aria-expanded": t.getIsExpanded(),
            onClick: t.getToggleExpandedHandler(),
            children: [
              (0, o.jsx)("div", { className: g().GroupExpandIndicator }),
              e(t),
            ],
          });
        }
        const i = n.getVirtualItems(),
          l = t.getVisibleCells();
        let s,
          a = 0;
        return (0, o.jsx)(o.Fragment, {
          children: i.map((e) => {
            const t = l[e.index],
              r = t.column.getIsPinned();
            return (
              r ? (a += e.size) : void 0 === s && (s = e.start),
              (0, o.jsx)(
                W,
                {
                  cell: t,
                  rowVirtualizer: n,
                  index: e.index,
                  transform: r ? void 0 : `translateX(${s - a}px)`,
                },
                t.id,
              )
            );
          }),
        });
      }
      function G(e, t) {
        const n = (0, d.useContext)(V),
          o = e.columnDef.meta?.bGrowToFit,
          r = e.id,
          i = o ? e.getSize() : 0,
          l = e.getIsSorted();
        (0, d.useLayoutEffect)(() => {
          if (!o) return;
          if (!t.current) return;
          const e = t.current?.scrollWidth;
          if (!e) return;
          const l = t.current.getBoundingClientRect().width,
            s = window.getComputedStyle(t.current);
          let a = e;
          if (e > l) {
            if (s.paddingLeft) {
              let e = parseInt(s.paddingLeft);
              isNaN(e) || (a += e);
            }
            if (s.paddingRight) {
              let e = parseInt(s.paddingRight);
              isNaN(e) || (a += e);
            }
          }
          a > i &&
            n.setColumnSizeOverride((e) => (e[r] > a ? e : { ...e, [r]: a }));
        }, [o, r, n, i, t, l]);
      }
      function P(e) {
        const {
            header: t,
            prevHeader: n,
            HeaderElement: r,
            nHeaderHeight: l,
            sortDirection: s,
            strTooltip: a,
            conditionalProps: c,
          } = e,
          m = (0, d.useRef)(null);
        return (
          G(t.column, m),
          (0, o.jsxs)(
            r,
            {
              role: "columnheader",
              ref: m,
              "data-pinned": !!t.column.getIsPinned(),
              className: u()(
                g().ColumnHeader,
                "button" === r && g().SortButton,
                t.column.columnDef.meta?.headerClassname,
              ),
              style: {
                width: `var(--header-${t.id}-size)`,
                height: void 0 !== l ? `${l}px` : void 0,
                ...k(t.column),
              },
              ...c,
              children: [
                n?.column.getCanResize() &&
                  (0, o.jsx)("div", {
                    role: "presentation",
                    onDoubleClick: () => n.column.resetSize(),
                    onMouseDown: n.getResizeHandler(),
                    onTouchStart: n.getResizeHandler(),
                    onClick: (e) => e.stopPropagation(),
                    className: u()(g().ResizeHandle, g().PrevResizeHandle),
                  }),
                t.isPlaceholder
                  ? null
                  : (0, i.Kv)(t.column.columnDef.header, t.getContext()),
                a && (0, o.jsx)(T.o, { tooltip: a }),
                s &&
                  !t.column.columnDef.meta?.bDisableSortButton &&
                  (0, o.jsx)("div", { className: g().SortIndicator }),
                t.column.getCanResize() &&
                  (0, o.jsx)("div", {
                    role: "presentation",
                    onDoubleClick: () => t.column.resetSize(),
                    onMouseDown: t.getResizeHandler(),
                    onTouchStart: t.getResizeHandler(),
                    onClick: (e) => e.stopPropagation(),
                    className: u()(
                      g().ResizeHandle,
                      t.column.getIsResizing() && g().IsResizing,
                    ),
                  }),
              ],
            },
            t.id,
          )
        );
      }
      function W(e) {
        const { cell: t, rowVirtualizer: n, index: i, transform: l } = e,
          s = d.useRef(null),
          a = (0, r.XB)(s, n.measure);
        return (
          G(t.column, s),
          (0, o.jsx)("div", {
            className: u()(
              g().FancyTableCell,
              t.column.columnDef.meta?.cellClassname,
            ),
            "data-index": i,
            "data-table-column-id": t.column.id,
            ref: a,
            style: {
              width: `var(--col-${t.column.id}-size)`,
              transform: l,
              ...k(t.column),
            },
            children: (0, o.jsx)($, {
              CellComponent: t.column.columnDef.cell,
              context: t.getContext(),
            }),
          })
        );
      }
      const $ = d.memo(
        function (e) {
          return (0, i.Kv)(e.CellComponent, e.context);
        },
        (e, t) => e.context.getValue() === t.context.getValue(),
      );
    },
  },
]);
