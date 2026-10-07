/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [29456],
    {
      94381: (q, te, a) => {
        "use strict";
        a.d(te, { S: () => ce });
        var t = a(7850),
          A = a(68031),
          b = a(31857);
        function O(j) {
          return (0, t.jsx)(b.I, {
            ...j,
            viewBox: 16,
            children: (0, t.jsx)("path", {
              d: "M13.8182 1.94629L5.77816 9.98184L2.40483 6.61296L0.835938 8.18184L5.77816 13.1285L15.387 3.51518L13.8182 1.94629Z",
              fill: "currentColor",
            }),
          });
        }
        var E = a(21895),
          f = a(64238),
          R = a.n(f),
          $ = a(80549);
        function ce(j) {
          const {
              checked: U,
              onChange: y,
              disabled: G,
              children: D,
              ref: ee,
              variant: k,
              color: v,
              align: l = "center",
              icon: S,
              ...d
            } = j,
            n = U === "indeterminate",
            s = S ?? (n ? B : O),
            o = () => {
              G || (y && y(n ? !0 : !U));
            },
            i = (x) => {
              G ||
                (x.key === " " &&
                  (o(), x.preventDefault(), x.stopPropagation()));
            },
            m = (0, $.f)("Checkbox", k);
          return (0, t.jsxs)(A.s, {
            align: l,
            ref: ee,
            role: "checkbox",
            "aria-checked": n ? "mixed" : U,
            "data-state": J(U),
            className: R()(E.Root, E[`Variant-${m}`], G && E.Disabled),
            onClick: o,
            tabIndex: 0,
            onKeyDown: i,
            cursor: "default",
            "aria-disabled": G,
            "data-accent-color": v,
            ...d,
            children: [
              (0, t.jsx)("div", {
                className: E.Checkbox,
                children: U && (0, t.jsx)(s, { className: E.Icon }),
              }),
              D,
            ],
          });
        }
        function J(j) {
          return j === "indeterminate" ? j : j ? "checked" : "unchecked";
        }
        function B(j) {
          return (0, t.jsx)("svg", {
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, t.jsx)("path", {
              d: "M14.6663 7.11133H1.33301V9.33355H14.6663V7.11133Z",
              fill: "currentColor",
            }),
          });
        }
      },
      86946: (q, te, a) => {
        "use strict";
        a.d(te, { j: () => J, w: () => B });
        var t = a(7850),
          A = a(64238),
          b = a.n(A),
          O = a(38878),
          E = a.n(O),
          f = a(60351),
          R = a(68031),
          $ = a(8928),
          ce = a(69289);
        function J(j) {
          const {
              children: U,
              beforeContent: y,
              afterContent: G,
              hasValue: D,
              ...ee
            } = j,
            k = B(ee);
          return (0, t.jsxs)(R.s, {
            ...k,
            align: "center",
            "data-has-value": !!D,
            minWidth: "0",
            children: [
              y && (0, t.jsx)(R.s, { paddingRight: "2", children: y }),
              (0, t.jsx)(f.az, { flexGrow: "1", minWidth: "0", children: U }),
              G && (0, t.jsx)(R.s, { paddingLeft: "2", children: G }),
            ],
          });
        }
        function B(j) {
          const {
              variant: U = "basic",
              size: y = "2",
              radius: G,
              focusable: D = !0,
              hoverable: ee = !0,
              clickable: k = !0,
              disabled: v,
              className: l,
              status: S,
              ...d
            } = j,
            n = U === "underline" ? "none" : G;
          return (0, ce.mz)(
            {
              ...d,
              radius: n,
              "data-status": S,
              className: b()(
                O.ControlBox,
                D && !v && O.Focusable,
                ee && !v && O.Hoverable,
                k && !v && O.Clickable,
                v && O.Disabled,
                O[`Variant-${U}`],
                O[`Size-${y}`],
                l,
              ),
            },
            $.h,
          );
        }
      },
      84909: (q, te, a) => {
        "use strict";
        a.d(te, { AM: () => i, Pr: () => s });
        var t = a(7850),
          A = a(90626),
          b = a(73788),
          O = a(8083),
          E = a(94621),
          f = a(18938),
          R = a(24660),
          $ = a(38566),
          ce = a(54130),
          J = a(71742),
          B = a(64238),
          j = a.n(B),
          U = a(3877),
          y = a(3166),
          G = a(28020);
        const D = (0, A.createContext)(null);
        function ee(m) {
          const { children: x, ...p } = m,
            _ = n(p);
          return (0, t.jsx)(D.Provider, { value: _, children: x });
        }
        function k(m) {
          const { children: x } = m,
            p = A.Children.only(x),
            _ = (0, A.useContext)(D);
          return p
            ? _
              ? (0, A.cloneElement)(p, {
                  ..._.getReferenceProps(p.props),
                  ref: (0, f.XB)(p.props.ref, _.floating.refs.setReference),
                })
              : (console.error(
                  "<PopoverAnchor> must be a child of <PopoverRoot>.",
                ),
                null)
            : null;
        }
        function v(m) {
          const { children: x, className: p, ref: _, label: C } = m,
            L = (0, A.useContext)(D),
            T = (0, b.SV)([_, L?.floating.refs.setFloating]);
          if (!L)
            return (
              console.error(
                "<Popover.Positioner> must be a child of <Popover.Root>.",
              ),
              null
            );
          if (!L.open) return null;
          let z = A.Children.only(x),
            F = A.Fragment;
          return (
            z.type == i.FocusManager &&
              ((z = A.Children.only(z.props.children)), (F = l)),
            (0, t.jsx)(F, {
              children: (0, t.jsx)(G.HF, {
                presentation: L.presentation,
                sizing: L.sizing,
                floatingRef: T,
                floatingProps: L.getFloatingProps(),
                floatingStyles: L.floating.floatingStyles,
                referenceElement: L.floating.elements.domReference,
                className: j()((0, U.T)(), p),
                label: C,
                children: z,
              }),
            })
          );
        }
        function l(m) {
          return (0, y.Qn)()
            ? (0, t.jsx)(S, { ...m })
            : (0, t.jsx)(d, { ...m });
        }
        function S(m) {
          const { children: x } = m,
            p = (0, A.useContext)(D);
          (0, J.wT)(
            !!p,
            "<Popover.Positioner> must be a child of <Popover.Root>.",
          );
          const _ = () => p.floating.context.onOpenChange(!1),
            C = A.useRef(void 0);
          return (
            (0, R.O7)(C, !0, !0),
            (0, t.jsx)($.D6, {
              navID: "Popover",
              onCancelButton: _,
              modal: !0,
              navTreeRef: C,
              children: (0, t.jsx)("div", {
                style: { display: "contents" },
                children: (0, t.jsx)(ce.q, { children: x }),
              }),
            })
          );
        }
        function d(m) {
          const { children: x } = m,
            p = (0, A.useContext)(D);
          return (
            (0, J.wT)(
              !!p,
              "<Popover.Positioner> must be a child of <Popover.Root>.",
            ),
            (0, t.jsx)(b.s3, {
              context: p.floating.context,
              initialFocus: -1,
              returnFocus: !1,
              children: x,
            })
          );
        }
        function n(m) {
          const {
            open: x,
            interactions: p = {},
            width: _,
            maxHeight: C,
            gutter: L,
            scroll: T,
          } = m;
          let z = x;
          const F = (0, G.Pr)(m.presentation),
            W = s(m, z, F),
            re = { enabled: !!p.click },
            V = typeof p.click == "function" ? p.click(re) : re,
            w = (0, b.kp)(W.context, V),
            u = { enabled: !!p.focus },
            he = typeof p.focus == "function" ? p.focus(u) : u,
            xe = (0, b.iQ)(W.context, he),
            ve = { handleClose: (0, b.iB)() },
            Me = typeof p.hover == "function" ? p.hover(ve) : ve,
            I = (0, b.Mk)(W.context, { enabled: !!p.hover, ...Me }),
            N = (0, b.s9)(W.context),
            { getFloatingProps: Z, getReferenceProps: K } = (0, b.bv)([
              w,
              xe,
              I,
              N,
            ]);
          return {
            floating: W,
            getFloatingProps: Z,
            getReferenceProps: K,
            open: z,
            presentation: F,
            sizing: { width: _, maxHeight: C, gutter: L, scroll: T },
          };
        }
        function s(m, x, p) {
          const { onOpenChange: _, placement: C } = m,
            L = p === "anchor";
          return (0, b.we)({
            open: x,
            onOpenChange: _,
            middleware: L ? o(m) : [],
            whileElementsMounted: L ? O.ll : void 0,
            placement: C && typeof C == "object" ? C.initial : C,
            strategy: "fixed",
            platform: {
              ...O.iD,
              getOffsetParent: (T) => T?.ownerDocument?.defaultView ?? window,
            },
          });
        }
        function o(m) {
          const { gutter: x = 0, placement: p } = m,
            _ = [],
            C = p && typeof p == "object";
          return (
            C && p.offset
              ? _.push((0, E.cY)(p.offset))
              : (!C || p.offset === void 0) && _.push((0, E.cY)(2)),
            C && p.flip
              ? _.push((0, E.UU)(p.flip))
              : (!C || p.flip === void 0) && _.push((0, E.UU)()),
            C && p.shift
              ? _.push((0, E.BN)(p.shift))
              : (!C || p.shift === void 0) && _.push((0, E.BN)()),
            _.push(
              (0, E.Ej)({
                apply: (L) => {
                  const { rects: T, elements: z, availableHeight: F } = L,
                    W = {
                      boxSizing: "border-box",
                      zIndex: "1",
                      "-webkit-app-region": "no-drag",
                    };
                  switch ((m.scroll && (W.overflowY = "auto"), m.width)) {
                    case "target": {
                      W.width = `${T.reference.width}px`;
                      break;
                    }
                    case "content": {
                      W.width = `${T.floating.width}px`;
                      break;
                    }
                    case "dropdown": {
                      let V = T.reference.width;
                      T.floating.width > V && V < 200 && (V = T.floating.width),
                        (W.width = `${V}px`);
                    }
                  }
                  typeof m.width == "function" &&
                    (W.width = m.width({
                      unContentWidth: T.floating.width,
                      unTargetWidth: T.reference.width,
                    }));
                  const re =
                    typeof x == "number" ? `${x}px` : `var(--spacing-${x})`;
                  typeof m.maxHeight == "function"
                    ? (W.maxHeight = m.maxHeight({
                        unAvailableHeight: F,
                        gutter: re,
                      }))
                    : typeof m.maxHeight == "number"
                      ? (W.maxHeight = `min( calc( ${F}px - ${re} ), ${m.maxHeight}px )`)
                      : typeof x == "number"
                        ? (W.maxHeight = `${F - x}px`)
                        : (W.maxHeight = `calc( ${F}px - var(--spacing-${x}) )`),
                    Object.assign(z.floating.style, W),
                    z.floating.style.setProperty(
                      "--popover-max-height",
                      W.maxHeight,
                    );
                },
              }),
            ),
            _
          );
        }
        const i = { Root: ee, Anchor: k, Positioner: v, FocusManager: l };
      },
      21663: (q, te, a) => {
        "use strict";
        a.d(te, { I: () => G });
        var t = a(7850),
          A = a(90626),
          b = a(86946),
          O = a(60351),
          E = a(71742),
          f = a(64238),
          R = a.n(f),
          $ = a(53011),
          ce = a.n($),
          J = a(68031),
          B = a(80549);
        const j = (0, A.createContext)(null);
        function U(k) {
          const {
              variant: v,
              radius: l,
              size: S,
              status: d,
              children: n,
              value: s,
              onValueChange: o,
            } = k,
            [i, m] = (0, A.useState)({}),
            x = (0, A.useCallback)((T, z) => m((F) => ({ ...F, [z]: T })), []),
            p = (0, A.useCallback)(
              (T, z) =>
                m((F) => {
                  const W = { ...F };
                  return W[z] === T && delete W[z], W;
                }),
              [],
            ),
            _ = (T) => {
              let z = 0;
              switch (T.key) {
                case " ":
                case "Enter":
                case "ArrowRight":
                  z = 1;
                  break;
                case "ArrowLeft":
                  z = -1;
                  break;
              }
              if (z) {
                const F = Array.from(Object.values(i)).sort(ee);
                let W;
                if (s === null) W = z > 0 ? 0 : F.length - 1;
                else {
                  const w = i[s],
                    u = F.findIndex((he) => he === w);
                  (0, E.wT)(
                    typeof u == "number",
                    "Could not find current segmented value position",
                  ),
                    (W = u + z);
                }
                const re = F[W < 0 ? F.length + W : W % F.length],
                  V = Object.keys(i).find((w) => i[w] === re);
                typeof V != "string"
                  ? console.error("Could not find next segmeneted value")
                  : (o(V), T.stopPropagation(), T.preventDefault());
              }
            },
            C = (0, B.f)("SegmentedControl", v),
            L = (0, A.useMemo)(
              () => ({
                value: s,
                onValueChange: o,
                register: x,
                unregister: p,
                radius: l,
                size: S,
              }),
              [s, o, x, p, l, S],
            );
          return (0, t.jsx)(b.j, {
            clickable: !1,
            hoverable: !1,
            focusable: !1,
            variant: C,
            radius: l,
            size: S,
            status: d,
            className: R()($.SegmentedControlBox, $[`Variant-${C}`]),
            tabIndex: 0,
            onKeyDown: _,
            children: (0, t.jsx)(j.Provider, {
              value: L,
              children: (0, t.jsxs)(O.az, {
                className: $.SegmentedControl,
                style: { "--outer-radius": `var(--radius-${l})` },
                children: [n, s !== null && (0, t.jsx)(D, { radius: l })],
              }),
            }),
          });
        }
        function y(k) {
          const { value: v, children: l, disabled: S } = k,
            d = (0, A.useContext)(j),
            [n, s] = (0, A.useState)(),
            { register: o, unregister: i } = d || {};
          if (
            ((0, A.useEffect)(
              () => (!n || !o || !i ? () => {} : (o(n, v), () => i(n, v))),
              [o, i, v, n],
            ),
            !d)
          )
            return null;
          const { value: m, onValueChange: x, radius: p, size: _ } = d,
            C = v === m,
            L = (z) => {
              z.stopPropagation(), z.preventDefault(), !(C || S) && x(v);
            },
            T = l === void 0 ? v : l;
          return (0, t.jsx)(J.s, {
            justify: "center",
            align: "center",
            ref: s,
            onClick: L,
            "data-selected": C ? "true" : "false",
            className: R()($.Item, _ && $[`Size-${_}`], S ? $.disabled : ""),
            children: T,
          });
        }
        function G(k) {
          const { options: v, getOptionLabel: l = (d) => d, ...S } = k;
          return (0, t.jsx)(G.Root, {
            ...S,
            children: v.map((d) =>
              (0, t.jsx)(G.Item, { value: d, children: l(d) }, d),
            ),
          });
        }
        (G.Item = y), (G.Root = U);
        function D(k) {
          const { radius: v } = k;
          return (0, t.jsx)(O.az, {
            className: $.IndicatorPosition,
            children: (0, t.jsx)("div", { className: $.Indicator }),
          });
        }
        function ee(k, v) {
          const l = k.compareDocumentPosition(v);
          return l & Node.DOCUMENT_POSITION_FOLLOWING
            ? -1
            : l & Node.DOCUMENT_POSITION_PRECEDING
              ? 1
              : 0;
        }
      },
      87275: (q, te, a) => {
        "use strict";
        a.d(te, { A: () => $, F: () => J });
        var t = a(7850),
          A = a(90626),
          b = a(71742),
          O = a(13854),
          E = a(75),
          f = a.n(E),
          R = a(76854);
        const $ = Object.assign(ce, { Root: j, Track: y, Range: G, Handle: D });
        function ce(l) {
          const {
              value: S,
              onValueChange: d,
              onValueSettled: n,
              min: s,
              ...o
            } = l,
            i = [S],
            m = (0, A.useCallback)((p) => d(p[0]), [d]),
            x = (0, A.useCallback)((p) => n?.(p[0]), [n]);
          return (0, t.jsxs)(j, {
            ...o,
            min: s,
            onValueChange: m,
            onValueSettled: x,
            value: i,
            children: [
              (0, t.jsx)(y, { children: (0, t.jsx)(G, { start: s, end: S }) }),
              (0, t.jsx)(D, {}),
            ],
          });
        }
        function J(l) {
          const { value: S } = l;
          return (0, t.jsxs)(j, {
            ...l,
            children: [
              (0, t.jsx)(y, {
                children: (0, t.jsx)(G, { start: S[0], end: S[1] }),
              }),
              (0, t.jsx)(D, {}),
              (0, t.jsx)(D, {}),
            ],
          });
        }
        const B = (0, A.createContext)(null);
        function j(l) {
          const { children: S, color: d, ...n } = l,
            {
              min: s,
              max: o,
              onValueChange: i,
              value: m,
              step: x = 1,
              onValueSettled: p,
            } = l,
            _ = (0, A.useRef)(null),
            C = (0, A.useRef)(null),
            [L] = (0, A.useState)(() => new Set()),
            [T, z] = (0, A.useState)(!1);
          return (0, t.jsx)(B.Provider, {
            value: { ...n, handles: L, bDragActive: T },
            children: (0, t.jsx)("div", {
              className: E.SliderRoot,
              "data-accent-color": d,
              ref: _,
              onPointerDown: (F) => {
                if (_.current) {
                  if (
                    (F.target.setPointerCapture(F.pointerId),
                    typeof m != "number")
                  ) {
                    const W = _.current.getBoundingClientRect(),
                      re = ee(F.clientX - W.left, [0, W.width], [s, o]);
                    C.current = { activeValueIndex: U(m, re), bMoved: !1 };
                  } else C.current = { activeValueIndex: 0, bMoved: !1 };
                  z(!0);
                }
              },
              onPointerUp: (F) => {
                const W = F.target;
                W.hasPointerCapture(F.pointerId) &&
                  (W.releasePointerCapture(F.pointerId),
                  p && C.current?.bMoved && p(m),
                  z(!1));
              },
              onPointerMove: (F) => {
                if (
                  F.target.hasPointerCapture(F.pointerId) &&
                  _.current &&
                  C.current
                ) {
                  const re = _.current.getBoundingClientRect(),
                    V = ee(F.clientX - re.left, [0, re.width], [s, o]),
                    w = k({ value: V, min: s, max: o, step: x }),
                    u = [...m];
                  (u[C.current.activeValueIndex] = w),
                    u.sort((he, xe) => he - xe),
                    (C.current.activeValueIndex = u.indexOf(w)),
                    (C.current.bMoved = !0),
                    i(u);
                }
              },
              onClick: (F) => {
                if (!_.current || C.current?.bMoved) return;
                const W = _.current.getBoundingClientRect(),
                  re = ee(F.clientX - W.left, [0, W.width], [s, o]),
                  V = k({ value: re, min: s, max: o, step: x }),
                  w = U(m, re),
                  u = [...m];
                (u[w] = V), i(u), p && p(u);
              },
              children: (0, t.jsx)("div", { className: E.Inner, children: S }),
            }),
          });
        }
        function U(l, S) {
          if (l.length <= 1) return l.length - 1;
          let d = 0,
            n = Math.abs(S - l[0]);
          for (let s = 1; s < l.length; s++) {
            const o = Math.abs(l[s] - S);
            o < n && ((d = s), (n = o));
          }
          return d;
        }
        function y(l) {
          const { render: S, ...d } = l;
          return (0, R.Q)(
            S,
            (0, t.jsx)("div", { className: E.SliderTrack }),
            d,
            void 0,
          );
        }
        function G(l) {
          const { start: S, end: d, render: n } = l,
            s = (0, A.useContext)(B);
          (0, b.wT)(s, "SliderRange must be used within a SliderRoot!");
          const { min: o, max: i } = s,
            m = v(S, o, i),
            x = 100 - v(d, o, i);
          return (0, R.Q)(
            n,
            (0, t.jsx)("div", {
              className: E.SliderRange,
              style: { "--pct-left": `${m}%`, "--pct-right": `${x}%` },
            }),
            {},
            void 0,
          );
        }
        function D(l) {
          const { render: S } = l,
            d = (0, A.useContext)(B);
          (0, b.wT)(d, "SliderHandle must be used within a SliderRoot!");
          const {
              min: n,
              max: s,
              handles: o,
              value: i,
              step: m = 1,
              onValueChange: x,
              onValueSettled: p,
            } = d,
            [_, C] = (0, A.useState)(null),
            [L, T] = (0, A.useState)(-1);
          (0, A.useEffect)(
            () => (_ ? (o.add(_), T(o.size - 1), () => o.delete(_)) : () => {}),
            [_, o],
          );
          const z = L > -1,
            W = { "--handle-pct": `${v(z ? i[L] : n, n, s)}%` },
            re = (w) => {
              switch (w.key) {
                case "ArrowRight":
                case "ArrowUp":
                case "ArrowLeft":
                case "ArrowDown": {
                  const u = w.key === "ArrowRight" || w.key === "ArrowUp",
                    he = m * (u ? 1 : -1),
                    xe = k({ value: i[L] + he, min: n, max: s, step: m }),
                    ve = [...i];
                  (ve[L] = xe),
                    x(ve),
                    p && p(ve),
                    w.preventDefault(),
                    w.stopPropagation();
                  break;
                }
                case "PageUp":
                case "PageDown": {
                  const u = w.key === "PageUp",
                    he = Math.round((s - n) / 10) * (u ? 1 : -1),
                    xe = k({ value: i[L] + he, min: n, max: s, step: m }),
                    ve = [...i];
                  (ve[L] = xe),
                    x(ve),
                    p && p(ve),
                    w.preventDefault(),
                    w.stopPropagation();
                  break;
                }
              }
            };
          z || (W.display = "none");
          const V = {
            ref: C,
            role: "slider",
            "aria-valuenow": i[L],
            "aria-valuemin": n,
            "aria-valuemax": s,
            tabIndex: 0,
            onKeyDown: re,
          };
          return (0, R.Q)(
            S,
            (0, t.jsx)("span", { className: E.SliderHandle, style: W }),
            V,
            { value: i[L], bDragActive: d.bDragActive },
          );
        }
        function ee(l, S, d) {
          if (S[0] === S[1] || d[0] === d[1]) return d[0];
          const s = ((d[1] - d[0]) / (S[1] - S[0])) * (l - S[0]) + d[0];
          return O.OQ(s, d[0], d[1]);
        }
        function k(l) {
          const { value: S, min: d, max: n, step: s } = l,
            i = Math.round((S - d) / s) / (1 / s);
          return O.OQ(i + d, d, n);
        }
        function v(l, S, d) {
          return ((l - S) / (d - S)) * 100;
        }
      },
      31857: (q, te, a) => {
        "use strict";
        a.d(te, { I: () => f });
        var t = a(7850),
          A = a(69289),
          b = a(8928),
          O = a(16619),
          E = a.n(O);
        function f(B) {
          return (0, t.jsx)("svg", { ...ce(B) });
        }
        const R = [
          ...b.L,
          {
            prop: "size",
            responsive: !0,
            className: (B) => O[`IconSize-${B}`],
          },
          {
            prop: "color",
            className: O.Color,
            cssProperty: (B) => ["--icon-color", $(B)],
          },
          {
            prop: "hitSlop",
            className: O.HitSlop,
            cssProperty: (B) => [
              "--hit-slop-custom",
              typeof B == "string" ? B : "",
            ],
          },
          b.h.find(({ prop: B }) => B === "cursor"),
        ];
        function $(B) {
          return !B || B[0] === "#" ? B : (0, A.w7)(B);
        }
        function ce(B) {
          const { viewBox: j, ...U } = B,
            G = { className: U.size ? void 0 : O.IconSizeDefault, ...U };
          return j && (G.viewBox = J(j)), (0, A.mz)(G, R);
        }
        function J(B) {
          if (B)
            return typeof B == "number"
              ? `0 0 ${B} ${B}`
              : typeof B == "string"
                ? B
                : `0 0 ${B.width} ${B.height}`;
        }
      },
      12204: (q, te, a) => {
        "use strict";
        a.d(te, { V: () => O });
        var t = a(7850),
          A = a(31857);
        const b = {
          up: "rotate( 180, 10, 10 )",
          left: "rotate( 90, 10, 10 )",
          right: "rotate( 270, 10, 10 )",
        };
        function O(E) {
          const { direction: f = "down" } = E,
            R = b[f];
          return (0, t.jsx)(A.I, {
            ...E,
            viewBox: 20,
            children: (0, t.jsx)("path", {
              transform: R,
              d: "M5.14541 6.89977L10.0063 12.2027L14.8671 6.89977C15.3557 6.36674 16.145 6.36674 16.6336 6.89977C17.1221 7.4328 17.1221 8.29385 16.6336 8.82688L10.8832 15.1002C10.3946 15.6333 9.60537 15.6333 9.11678 15.1002L3.36644 8.82688C2.87785 8.29385 2.87785 7.4328 3.36644 6.89977C3.85503 6.38041 4.65682 6.36674 5.14541 6.89977Z",
              fill: "currentColor",
            }),
          });
        }
      },
      76854: (q, te, a) => {
        "use strict";
        a.d(te, { Q: () => b });
        var t = a(90626);
        function A(O, E, f) {
          return typeof O == "function" ? O(E, f) : t.cloneElement(O, E);
        }
        function b(O, E, f, R) {
          return A(O || E, f, R);
        }
      },
      15252: (q, te, a) => {
        "use strict";
        a.d(te, { Ae: () => B, EY: () => ce, U6: () => J });
        var t = a(7850),
          A = a(1039),
          b = a(69289),
          O = a(8928),
          E = a(64238),
          f = a.n(E),
          R = a(65274),
          $ = a.n(R);
        function ce(j) {
          const { as: U = "span", ref: y, className: G, ...D } = j,
            ee = U;
          return (0, t.jsx)(ee, {
            ref: y,
            ...(0, b.mz)({ ...D, className: f()(R.Text, G) }, B),
          });
        }
        const J = [
            {
              prop: "weight",
              responsive: !0,
              className: R.TextWeight,
              cssProperty: (j) => ["--text-weight", `var(--font-weight-${j})`],
            },
            {
              prop: "align",
              responsive: !0,
              className: R.TextAlign,
              cssProperty: "--text-align",
            },
            {
              prop: "color",
              responsive: !0,
              cssProperty: (j, U, y) => [
                "--text-color",
                (0, b.To)(j, (0, A.I)(U.contrast, y) ?? "body"),
              ],
            },
            {
              prop: "contrast",
              responsive: !0,
              cssProperty: (j, U, y) => [
                "--text-color",
                (0, b.To)((0, A.I)(U.color, y) ?? "text-body", j),
              ],
            },
            { prop: "truncate", className: R.Truncate },
            {
              prop: "lineClamp",
              responsive: !0,
              className: R.LineClamp,
              cssProperty: "--line-clamp",
            },
            {
              prop: "whiteSpace",
              className: R.WhiteSpace,
              cssProperty: "--white-space",
            },
          ],
          B = [
            ...J,
            ...O.L,
            {
              prop: "size",
              responsive: !0,
              className: (j) => R[`TextSize-${j}`],
            },
          ];
      },
      24805: (q, te, a) => {
        "use strict";
        a.d(te, { Xh: () => $, cU: () => ce, tf: () => B, wl: () => J });
        var t = a(99412),
          A = a(18735),
          b = a(78192),
          O = a(6469),
          E = a(10142),
          f = a(10349),
          R = a(3166);
        const $ = {
          include_assets: !0,
          include_release: !0,
          include_platforms: !0,
          include_tag_count: 20,
          include_basic_info: !0,
          include_optin_registration_tags: !0,
          include_trailers: !0,
          include_reviews: !0,
          include_screenshots: !0,
          include_supported_languages: !0,
        };
        class ce {
          m_setAlreadyAdded = new Set();
          Reset() {
            this.m_setAlreadyAdded = new Set();
          }
          BHasAppID(l) {
            return this.m_setAlreadyAdded.has("a" + l);
          }
          BHasPackageID(l) {
            return this.m_setAlreadyAdded.has("s" + l);
          }
          BHasBundleID(l) {
            return this.m_setAlreadyAdded.has("b" + l);
          }
          BHasStoreItemKey(l) {
            return this.m_setAlreadyAdded.has(
              this.ConvertStoreItemKeyToUniqueKey(l),
            );
          }
          AddStoreItemKey(l) {
            this.m_setAlreadyAdded.add(this.ConvertStoreItemKeyToUniqueKey(l));
          }
          ConvertStoreItemKeyToUniqueKey(l) {
            switch (l.item_type) {
              default:
              case "app":
                return "a" + l.id;
              case "sub":
                return "s" + l.id;
              case "bundle":
                return "b" + l.id;
            }
          }
        }
        const J = 4;
        function B(v, l, S, d, n, s) {
          const o = new Array(),
            i = new Array(),
            m = new Array(),
            x = new Array();
          if (!v || v.length == 0) return o;
          const p = [
            f.by.k_RejectSupportedLanguage,
            f.by.k_RejectAlreadyDisplayed,
            f.by.k_RejectNoTrailer,
          ];
          for (let _ of v) {
            let C = _.id,
              L = f.by.k_NotRejected;
            switch (_.item_type) {
              case "sub":
                const T = E.A.Get().GetPackage(C);
                if (T?.GetIncludedAppIDs()?.length !== 1) {
                  L = ee(C, l, d, !0);
                  break;
                }
                C = T.GetIncludedAppIDs()[0];
              case "app":
                L = G(C, l, S, d, !0);
                break;
              case "bundle":
                L = k(C, l, d, !0);
                break;
            }
            if (
              (L == f.by.k_NotRejected
                ? ((_.rejected = f.by.k_NotRejected),
                  o.push({ ..._, priority: 1 }))
                : p.includes(L)
                  ? ((_.rejected = f.by.k_NotRejected), i.push(_))
                  : ((_.rejected = L),
                    L == f.by.k_RejectIgnoredGame ? m.push(_) : x.push(_)),
              o.length > n)
            )
              break;
          }
          return (
            o.length < n &&
              (j(o, i, s, 2),
              o.length < s &&
                l.enforce_minimum &&
                (j(o, m, s, 3), j(o, x, s, J))),
            o
          );
        }
        function j(v, l, S, d) {
          for (let n = 0; v.length < S && n < l.length; ++n)
            v.push({ ...l[n], priority: d });
        }
        function U(v, l) {
          const S = O.Fm.Get();
          if (
            l.only_current_platform &&
            S.BHasPlatformPreferenceSet() &&
            !(
              (v.GetPlatforms()?.windows && S.BIsPreferredPlatform("win")) ||
              (v.GetPlatforms()?.mac && S.BIsPreferredPlatform("mac")) ||
              (v.GetPlatforms()?.steamos_linux &&
                S.BIsPreferredPlatform("linux"))
            )
          )
            return f.by.k_RejectWrongPlatform;
          if (!l.prepurchase && v.BIsComingSoon())
            return f.by.k_RejectNoComingSoon;
          const d = v.GetPlatforms();
          return !l.virtual_reality &&
            d &&
            d.vr_support &&
            d.vr_support.vrhmd_only
            ? f.by.k_RejectNoVR
            : v.GetAllCreatorClanIDs()?.some((n) => S.BIsIgnoringCurator(n))
              ? f.by.k_RejectCreatorClan
              : f.by.k_NotRejected;
        }
        function y(v, l) {
          if (l.localized) {
            const S = (0, t.sfN)(R.TS.LANGUAGE);
            if (!v.GetAllLanguagesWithSomeSupport()?.includes(S))
              return f.by.k_RejectSupportedLanguage;
          }
          return f.by.k_NotRejected;
        }
        function G(v, l, S, d, n) {
          const s = E.A.Get().GetApp(v);
          if (!s) return f.by.k_RejectNotLoaded;
          const o = U(s, l);
          if (o != f.by.k_NotRejected) return o;
          const i = O.Fm.Get();
          if (i.BIsGameIgnored(v)) return f.by.k_RejectIgnoredGame;
          if (i.BExcludeTagIDs(s.GetTagIDs()))
            return f.by.k_RejectIgnoreGameTags;
          if (i.BExcludesContentDescriptor(s.GetContentDescriptorIDs()))
            return f.by.k_RejectIgnoreContentDescriptors;
          if (!l.early_access && s.BIsEarlyAccess())
            return f.by.k_RejectEarlyAccess;
          const m = s.GetAppType();
          if (!l.software && m == b.uE.Sv) return f.by.k_RejectSoftware;
          if (l.games_already_in_library && i.BIsGameOwned(v))
            return f.by.k_RejectInLibrary;
          if (l.games_not_in_library && !i.BIsGameOwned(v))
            return f.by.k_RejectNotInLibrary;
          if (!l.video && [b.uE.Wz, b.uE.gQ, b.uE.ID].includes(m))
            return f.by.k_RejectVideo;
          if (l.has_discount) {
            const x = s.GetBestPurchaseOption();
            if (!x || !x.discount_pct) return f.by.k_RejectNoDiscount;
          }
          return S != "adultonly" &&
            l.no_ao_content &&
            (s.HasContentDescriptorID(A.u7) || s.HasContentDescriptorID(A.T4))
            ? f.by.k_RejectAO
            : m == b.uE.ue &&
                l.games_already_in_library &&
                i.BIsGameOwned(s.GetParentAppID() || 0)
              ? f.by.k_RejectInLibrary
              : n
                ? (m == b.uE.ue && d.BHasAppID(s.GetParentAppID() || 0)) ||
                  d.BHasAppID(v)
                  ? f.by.k_RejectAlreadyDisplayed
                  : l.has_trailer && !s.BHasTrailers(!1)
                    ? f.by.k_RejectNoTrailer
                    : y(s, l)
                : f.by.k_NotRejected;
        }
        function D(v, l) {
          const S = O.Fm.Get();
          let d = !1;
          for (let n of v) {
            if (S.BIsGameIgnored(n)) return f.by.k_RejectIgnoredGame;
            S.BIsGameOwned(n) && (d = !0);
          }
          return l.games_not_in_library && d
            ? f.by.k_RejectInLibrary
            : l.games_not_in_library && !d
              ? f.by.k_RejectNotInLibrary
              : f.by.k_NotRejected;
        }
        function ee(v, l, S, d) {
          const n = E.A.Get().GetPackage(v);
          if (!n) return f.by.k_RejectNotLoaded;
          const s = U(n, l);
          if (s != f.by.k_NotRejected) return s;
          const o = D(n.GetIncludedAppIDs(), l);
          if (o != f.by.k_NotRejected) return o;
          const i = O.Fm.Get();
          return l.games_already_in_library && i.BOwnsPackage(v)
            ? f.by.k_RejectInLibrary
            : i.BIsPackageIgnored(v)
              ? f.by.k_RejectIgnoredGame
              : d
                ? S.BHasPackageID(v)
                  ? f.by.k_RejectAlreadyDisplayed
                  : y(n, l)
                : f.by.k_NotRejected;
        }
        function k(v, l, S, d) {
          const n = E.A.Get().GetBundle(v);
          if (!n) return f.by.k_RejectNotLoaded;
          const s = U(n, l);
          if (s != f.by.k_NotRejected) return s;
          const o = D(n.GetIncludedAppIDs(), l);
          return o != f.by.k_NotRejected
            ? o
            : d
              ? S.BHasBundleID(v)
                ? f.by.k_RejectAlreadyDisplayed
                : y(n, l)
              : f.by.k_NotRejected;
        }
      },
      85528: (q, te, a) => {
        "use strict";
        a.d(te, { Vw: () => S });
        var t = a(14947),
          A = a(99412),
          b = a(72604),
          O = a(35038),
          E = a(67529),
          f = a(3166);
        class R {
          m_nLastUpdated = 0;
          m_mapLanguages = t.sH.map();
          m_appid;
          m_fetching = null;
          constructor(n) {
            this.m_appid = n;
          }
          GetAppID() {
            return this.m_appid;
          }
          GetTokenList(n) {
            return this.m_mapLanguages.has(n)
              ? this.m_mapLanguages.get(n)
              : null;
          }
          Localize(n, s) {
            let o = f.TS.LANGUAGE,
              i = this.GetTokenList(o),
              m = o != "english" ? this.GetTokenList("english") : null;
            return $(n, i, m, this.m_appid, s);
          }
          SubstituteParams(n, s) {
            let o = f.TS.LANGUAGE,
              i = this.GetTokenList(o),
              m = o != "english" ? this.GetTokenList("english") : null;
            return ce(n, i, m, this.m_appid, s);
          }
        }
        function $(d, n, s, o, i) {
          if (!d.startsWith("#"))
            return (
              console.log(
                "Token doesn't start with #:",
                d,
                "appid",
                o,
                "tokens",
                n,
              ),
              ""
            );
          let m = d;
          d = d.toLowerCase();
          let x = "";
          if (
            (n && n.has(d) && (x = n.get(d)),
            !x && s && s.has(d) && (x = s.get(d)),
            x)
          )
            x = ce(x, n, s, o, i);
          else if (
            ((n || s) &&
              console.log(
                "No loc found for appid",
                o,
                m,
                "Tokens:",
                n,
                "Fallback:",
                s,
              ),
            n && f.TS.EUNIVERSE != A.wLO)
          )
            return d;
          return x;
        }
        function ce(d, n, s, o, i) {
          let m = /{[A-za-z0-9_%#:]+}/g,
            x = d.match(m);
          if (x)
            for (let p of x) {
              let _ = p.slice(1, -1),
                C = J(_, i),
                L = $(C, n, s, o, i);
              if (!L) return "";
              d = d.replace(p, L);
            }
          return (d = J(d, i)), d;
        }
        function J(d, n) {
          let s = /%[A-Za-z0-9_:]+%/g,
            o = d.match(s);
          if (o)
            for (let i of o) {
              let m = i.slice(1, -1).toLowerCase(),
                x = n.get(m);
              x == null
                ? console.log("No rich presence found for", m)
                : (d = d.replace(i, x));
            }
          return d;
        }
        var B = a(72849),
          j = a(71742),
          U = a(8323),
          y = Object.defineProperty,
          G = Object.getOwnPropertyDescriptor,
          D = (d, n, s, o) => {
            for (
              var i = o > 1 ? void 0 : o ? G(n, s) : n, m = d.length - 1, x;
              m >= 0;
              m--
            )
              (x = d[m]) && (i = (o ? x(n, s, i) : x(i)) || i);
            return o && i && y(n, s, i), i;
          };
        function ee(d) {
          return useObserver(() => S.GetAppInfo(d));
        }
        function k(d) {
          return useObserver(() => d.map((n) => S.GetAppInfo(n)));
        }
        const v = 3600 * 24 * 7 * 2;
        class l {
          m_CMInterface;
          m_mapAppInfo = t.sH.map();
          m_mapRichPresenceLoc = t.sH.map();
          m_cAppInfoRequestsInFlight = 0;
          m_setPendingAppInfo = new Set();
          m_PendingAppInfoPromise;
          m_PendingAppInfoResolve;
          m_CacheStorage = null;
          m_fnCallbackOnAppInfoLoaded = new U.lu();
          constructor() {
            (0, t.Gn)(this);
          }
          Init(n) {
            this.m_CMInterface = n;
          }
          BHavePendingAppInfoRequests() {
            return (
              this.m_setPendingAppInfo.size > 0 ||
              this.m_cAppInfoRequestsInFlight > 0
            );
          }
          get CMInterface() {
            return this.m_CMInterface;
          }
          RegisterCallbackOnLoad(n) {
            if (!this.BHavePendingAppInfoRequests()) {
              (0, j.wT)(
                !1,
                "Registering for callback on appinfo load, but nothing queued",
              ),
                n();
              return;
            }
            this.m_fnCallbackOnAppInfoLoaded.Register(n);
          }
          IsLoadingAppID(n) {
            return this.m_setPendingAppInfo.has(n);
          }
          GetAppInfo(n) {
            if (
              ((0, j.wT)(
                this.m_CMInterface,
                "CAppInfoStore.GetAppInfo called before Init",
              ),
              !this.m_mapAppInfo.has(n))
            ) {
              let s = new E.by(n);
              this.m_mapAppInfo.set(n, s), this.QueueAppInfoRequest(n);
            }
            return this.m_mapAppInfo.get(n);
          }
          QueueAppInfoRequest(n) {
            return n
              ? (this.m_setPendingAppInfo.size ||
                  ((this.m_PendingAppInfoPromise = new Promise(
                    (s) => (this.m_PendingAppInfoResolve = s),
                  )),
                  window.setTimeout(() => this.FlushPendingAppInfo(), 25)),
                this.m_setPendingAppInfo.add(n),
                this.m_PendingAppInfoPromise)
              : Promise.resolve();
          }
          async FlushPendingAppInfo() {
            const n = this.m_PendingAppInfoResolve,
              s = Array.from(this.m_setPendingAppInfo);
            (this.m_PendingAppInfoPromise = void 0),
              (this.m_PendingAppInfoResolve = void 0),
              this.m_setPendingAppInfo.clear(),
              await this.LoadAppInfoBatch(s),
              n?.();
          }
          async LoadAppInfoBatch(n) {
            this.m_cAppInfoRequestsInFlight++;
            let s = await this.LoadAppInfoBatchFromLocalCache(n);
            if (s.length) {
              console.log("Loading batch of App Info from Steam: ", s),
                await this.m_CMInterface?.WaitUntilLoggedOn();
              let o = O.w.Init(B._z);
              o.Body().set_language((0, A.sfN)(f.TS.LANGUAGE));
              const i = 50;
              for (; s.length > 0; ) {
                const m = Math.min(i, s.length),
                  x = s.slice(0, m);
                (s = s.slice(m)), o.Body().set_appids(x);
                const p = await B.BE.GetApps(
                  this.m_CMInterface.GetServiceTransport(),
                  o,
                );
                p.GetEResult() == b.R
                  ? this.OnGetAppsResponse(p)
                  : console.error(
                      `Error when calling CommunityService.GetApps: EResult=${p.GetEResult()}, AppIDs:`,
                      x,
                    );
              }
            }
            --this.m_cAppInfoRequestsInFlight == 0 &&
              this.m_setPendingAppInfo.size == 0 &&
              (this.m_fnCallbackOnAppInfoLoaded.Dispatch(),
              this.m_fnCallbackOnAppInfoLoaded.ClearAllCallbacks());
          }
          OnGetAppsResponse(n) {
            let s = [];
            for (let o of n.Body().apps()) {
              let i = this.m_mapAppInfo.get(o.appid());
              (0, j.wT)(
                i,
                `Got AppInfo response for unrequested AppID: ${o.appid()}`,
              ),
                i &&
                  ((i = new E.by(o.appid())),
                  i.DeserializeFromMessage(o),
                  this.m_mapAppInfo.set(o.appid(), i),
                  s.push(i));
            }
            this.SaveAppInfoBatchToLocalCache(s);
          }
          OnAppOverviewChange(n) {
            for (let s of n) {
              const o = new E.by(s.appid());
              o.DeserializeFromAppOverview(s),
                o.is_initialized && this.m_mapAppInfo.set(s.appid(), o);
            }
          }
          async EnsureAppInfoForAppIDs(n) {
            let s = !1;
            return (
              n.forEach((o) => {
                let i = this.m_mapAppInfo.get(o);
                if (i) {
                  i.is_valid || (s = !0);
                  return;
                }
                (i = new E.by(o)),
                  this.m_mapAppInfo.set(o, i),
                  this.QueueAppInfoRequest(o),
                  (s = !0);
              }),
              s && this.m_PendingAppInfoPromise !== void 0
                ? this.m_PendingAppInfoPromise
                : Promise.resolve()
            );
          }
          SetCacheStorage(n) {
            this.m_CacheStorage = n;
          }
          GetCacheKeyForAppID(n) {
            return "APPINFO_" + n;
          }
          async LoadAppInfoBatchFromLocalCache(n) {
            if (!this.m_CacheStorage) return n;
            console.log("Loading batch of App Info from Local Cache: ", n);
            const s = new Date(new Date().getTime() - v * 1e3),
              o = async (p) => {
                const _ = await this.m_CacheStorage?.GetObject(
                  this.GetCacheKeyForAppID(p),
                );
                if (!_) return p;
                let C = this.m_mapAppInfo.get(p);
                return (
                  (0, j.wT)(
                    C,
                    "Didn't find AppInfo in our map when loading from cache but it should've been there?",
                  ),
                  C
                    ? ((C = new E.by(p)),
                      C.DeserializeFromCacheObject(_),
                      C.is_initialized
                        ? (this.m_mapAppInfo.set(p, C),
                          C.time_updated_from_server < s ? p : null)
                        : (console.warn(
                            "Failed to deserialize cached App Info: ",
                            p,
                            _,
                          ),
                          p))
                    : p
                );
              };
            let i = n.map((p) => o(p));
            return (await Promise.all(i)).filter((p) => p !== null);
          }
          async SaveAppInfoBatchToLocalCache(n) {
            if (this.m_CacheStorage) {
              console.log(
                "Saving batch of App Info to Local Cache: ",
                n.map((s) => s.appid),
              );
              for (const s of n) {
                const o = s.SerializeToCacheObject();
                o &&
                  this.m_CacheStorage.StoreObject(
                    this.GetCacheKeyForAppID(s.appid),
                    o,
                  );
              }
            }
          }
          Localize(n, s, o) {
            const i = this.GetRichPresenceLoc(n);
            return i
              ? i.Localize(s, o)
              : f.TS.EUNIVERSE != A.wLO
                ? (console.log(
                    `Unable to find app localization information for app ${n} token ${s}, this may not have had a chance to load yet`,
                  ),
                  s)
                : "";
          }
          GetRichPresenceLoc(n) {
            if (this.m_mapRichPresenceLoc.has(n.toString())) {
              let o = this.m_mapRichPresenceLoc.get(n.toString());
              return (
                o.m_nLastUpdated + 1e3 * 60 * E.IU < Date.now() &&
                  this.QueueRichPresenceLocRequest(o),
                o
              );
            }
            let s = new R(n);
            return (
              this.m_mapRichPresenceLoc.set(n.toString(), s),
              this.QueueRichPresenceLocRequest(s),
              s
            );
          }
          GetRichPresenceLocAsync(n) {
            let s = this.GetRichPresenceLoc(n);
            return s.m_nLastUpdated ? Promise.resolve(s) : s.m_fetching;
          }
          OnRichPresenceLocUpdate(n, s) {
            n.m_nLastUpdated = Date.now();
            for (let o of s) {
              let i = o.language(),
                m = n.m_mapLanguages.get(i);
              m
                ? m.clear()
                : (n.m_mapLanguages.set(i, new Map()),
                  (m = n.m_mapLanguages.get(i)));
              for (let x of o.tokens())
                m?.set(x.name().toLowerCase(), x.value());
            }
          }
          QueueRichPresenceLocRequest(n) {
            return (
              n.m_fetching ||
                ((n.m_fetching = this.m_CMInterface
                  .WaitUntilLoggedOn()
                  .then(() => {
                    let s = O.w.Init(B.zQ);
                    return (
                      s.Body().set_appid(n.GetAppID()),
                      s.Body().set_language(f.TS.LANGUAGE),
                      B.BE.GetAppRichPresenceLocalization(
                        this.m_CMInterface.GetServiceTransport(),
                        s,
                      )
                    );
                  })
                  .then(
                    (s) => (
                      (n.m_fetching = null),
                      s.GetEResult() != b.R
                        ? Promise.reject()
                        : (this.OnRichPresenceLocUpdate(
                            n,
                            s.Body().token_lists(),
                          ),
                          Promise.resolve(n))
                    ),
                  )),
                n.m_fetching.catch(() => {
                  n.m_fetching = null;
                })),
              n.m_fetching
            );
          }
        }
        D([t.XI], l.prototype, "OnGetAppsResponse", 1),
          D([t.XI], l.prototype, "OnRichPresenceLocUpdate", 1);
        const S = new l();
      },
      84676: (q, te, a) => {
        "use strict";
        a.d(te, {
          G6: () => j,
          Gg: () => G,
          Ow: () => y,
          Sq: () => ce,
          YM: () => S,
          eR: () => J,
          ik: () => B,
          mZ: () => D,
          t7: () => U,
          zX: () => k,
        });
        var t = a(41735),
          A = a.n(t),
          b = a(90626),
          O = a(72604),
          E = a(78192),
          f = a(30096),
          R = a(10142);
        function $(d, n, s = !0) {
          const o = s
              ? CStoreItemCache.k_DataRequest_BasicInfo
              : CStoreItemCache.k_DataRequest_CommonOnly,
            i = s || CStoreItemCache.Get().BHasStoreItem(d, n, o) ? d : null,
            [m, x] = j(i, n, o),
            [p, _] = useState(null),
            [C, L] = j(p, n, o);
          useEffect(() => {
            m?.GetAppType() === EStoreAppType.k_EStoreAppType_Demo &&
              _(m.GetParentAppID());
          }, [m]);
          let T = m?.GetShortDescription()
            ? StripBBCodeTags(m.GetShortDescription())
            : "";
          (!T || T.length === 0) &&
            C &&
            (T = C?.GetShortDescription()
              ? StripBBCodeTags(C.GetShortDescription())
              : "");
          const z = x == B && (!p || L == B);
          return [T, z];
        }
        const ce = 1,
          J = 2,
          B = 3;
        function j(d, n, s, o) {
          const i = (0, b.useRef)(void 0),
            m = (0, b.useRef)(void 0),
            x = (0, f.CH)();
          i.current = d;
          const [p, _] = (0, b.useState)(void 0),
            {
              include_assets: C,
              include_release: L,
              include_platforms: T,
              include_all_purchase_options: z,
              include_screenshots: F,
              include_trailers: W,
              include_ratings: re,
              include_tag_count: V,
              include_reviews: w,
              include_basic_info: u,
              include_supported_languages: he,
              include_full_description: xe,
              include_included_items: ve,
              include_assets_without_overrides: Me,
              apply_user_filters: I,
              include_links: N,
              include_extra_details: Z,
              include_optin_registration_tags: K,
            } = s;
          if (
            ((0, b.useEffect)(() => {
              const oe = {
                include_assets: C,
                include_release: L,
                include_platforms: T,
                include_all_purchase_options: z,
                include_screenshots: F,
                include_trailers: W,
                include_ratings: re,
                include_tag_count: V,
                include_reviews: w,
                include_basic_info: u,
                include_supported_languages: he,
                include_full_description: xe,
                include_included_items: ve,
                include_assets_without_overrides: Me,
                apply_user_filters: I,
                include_links: N,
                include_extra_details: Z,
                include_optin_registration_tags: K,
              };
              let Oe = null;
              return (
                !d ||
                  d < 0 ||
                  R.A.Get().BHasStoreItem(d, n, oe) ||
                  (p !== void 0 && o && o == m.current) ||
                  (o !== m.current && (_(void 0), (m.current = o)),
                  (Oe = A().CancelToken.source()),
                  R.A.Get()
                    .QueueStoreItemRequest(d, n, oe)
                    .then((be) => {
                      !Oe?.token.reason && i.current === d && _(be == O.R), x();
                    })),
                () => Oe?.cancel("useStoreItemCache: unmounting")
              );
            }, [
              d,
              n,
              o,
              p,
              C,
              L,
              T,
              z,
              F,
              W,
              re,
              V,
              w,
              u,
              he,
              xe,
              ve,
              Me,
              I,
              N,
              Z,
              K,
              x,
            ]),
            !d)
          )
            return [null, J];
          if (p === !1) return [void 0, J];
          if (R.A.Get().BIsStoreItemMissing(d, n)) return [void 0, J];
          if (!R.A.Get().BHasStoreItem(d, n, s)) return [void 0, ce];
          const Y = R.A.Get().GetStoreItemWithLegacyVisibilityCheck(d, n);
          return Y ? [Y, B] : [null, J];
        }
        function U(d, n, s) {
          return j(d, E.c6.qI, n, s);
        }
        function y(d, n, s) {
          return j(d, E.c6.xO, n, s);
        }
        function G(d, n, s) {
          return j(d, E.c6.RD, n, s);
        }
        function D(d, n, s) {
          const [o, i] = j(d, n, s);
          let m;
          o?.GetStoreItemType() == E.c6.RD &&
            !o.GetAssets()?.GetHeaderURL() &&
            o?.GetIncludedAppIDs().length == 1 &&
            (m = o.GetIncludedAppIDs()[0]);
          const [x, p] = U(m, s);
          return m && x?.BIsVisible() ? [x, p] : [o, i];
        }
        function ee(d, n, s, o) {
          const i = (0, f.CH)(),
            {
              include_assets: m,
              include_release: x,
              include_platforms: p,
              include_all_purchase_options: _,
              include_screenshots: C,
              include_trailers: L,
              include_ratings: T,
              include_tag_count: z,
              include_reviews: F,
              include_basic_info: W,
              include_supported_languages: re,
              include_full_description: V,
              include_included_items: w,
              include_assets_without_overrides: u,
              apply_user_filters: he,
              include_links: xe,
              include_extra_details: ve,
              include_optin_registration_tags: Me,
            } = s;
          return (
            (0, b.useEffect)(() => {
              if (!d || d.length == 0) return;
              const N = {
                  include_assets: m,
                  include_release: x,
                  include_platforms: p,
                  include_all_purchase_options: _,
                  include_screenshots: C,
                  include_trailers: L,
                  include_ratings: T,
                  include_tag_count: z,
                  include_reviews: F,
                  include_basic_info: W,
                  include_supported_languages: re,
                  include_full_description: V,
                  include_included_items: w,
                  include_assets_without_overrides: u,
                  apply_user_filters: he,
                  include_links: xe,
                  include_extra_details: ve,
                  include_optin_registration_tags: Me,
                },
                Z = d.filter(
                  (oe) =>
                    !(
                      R.A.Get().BHasStoreItem(oe, n, N) ||
                      R.A.Get().BIsStoreItemMissing(oe, n)
                    ),
                );
              if (Z.length == 0) return;
              const K = A().CancelToken.source(),
                Y = Z.map((oe) => R.A.Get().QueueStoreItemRequest(oe, n, N));
              return (
                Promise.all(Y).then(() => {
                  K.token.reason || i();
                }),
                () => K.cancel("useStoreItemCacheMultiplePackages: unmounting")
              );
            }, [
              d,
              n,
              o,
              i,
              m,
              x,
              p,
              _,
              C,
              L,
              T,
              z,
              F,
              W,
              re,
              V,
              w,
              u,
              he,
              xe,
              ve,
              Me,
            ]),
            d
              ? d.every(
                  (N) =>
                    R.A.Get().BHasStoreItem(N, n, s) ||
                    R.A.Get().BIsStoreItemMissing(N, n),
                )
                ? d.every((N) =>
                    R.A.Get().GetStoreItemWithLegacyVisibilityCheck(N, n),
                  )
                  ? B
                  : J
                : ce
              : J
          );
        }
        function k(d, n, s) {
          return ee(d, E.c6.qI, n, s);
        }
        function v(d, n, s) {
          return ee(d, EStoreItemType.k_EStoreItemType_Bundle, n, s);
        }
        function l(d, n, s) {
          return ee(d, EStoreItemType.k_EStoreItemType_Package, n, s);
        }
        function S() {
          b.useEffect(
            () => (
              R.A.Get().SetReturnUnavailableItems(!0),
              () => R.A.Get().SetReturnUnavailableItems(!1)
            ),
            [],
          );
        }
      },
      19681: (q, te, a) => {
        "use strict";
        a.d(te, { l: () => A });
        var t = a(98609);
        function A(b, O) {
          if (!(!b?.asset_url_format || typeof b[O] != "string"))
            return (
              t.TS.BASE_URL_SHARED_CDN +
              "/store_item_assets/" +
              b.asset_url_format.replace("${FILENAME}", b[O])
            );
        }
      },
      86390: (q, te, a) => {
        "use strict";
        a.d(te, { Cg: () => j, pZ: () => y, vg: () => U });
        var t = a(7850),
          A = a(90626),
          b = a(88003),
          O = a(18210),
          E = a(3166),
          f = a(34004),
          R = a(6740),
          $ = a(3685),
          ce = a(8059),
          J = a(96538);
        function B(D) {
          return (0, t.jsx)(b.x_, {
            onEscKeypress: D.closeModal,
            bDisableBackgroundDismiss: !0,
            children: (0, t.jsx)(G, {
              redirectURL: D.redirectURL,
              guestOption: D.guestOption,
            }),
          });
        }
        function j(D) {
          const { redirectURL: ee = window.location.href } = D;
          return (0, t.jsx)(J.EN, {
            active: !0,
            children: (0, t.jsx)(B, { redirectURL: ee }),
          });
        }
        function U() {
          (0, b.pg)(
            (0, t.jsx)(B, {
              ownerWin: window,
              redirectURL: window.location.href,
            }),
            window,
            { strTitle: (0, O.we)("#Login_SignInTitle") },
          );
        }
        function y(D, ee) {
          (0, b.pg)(
            (0, t.jsx)(B, {
              ownerWin: window,
              redirectURL: D,
              guestOption: ee,
            }),
            window,
            { strTitle: (0, O.we)("#Login_SignInTitle") },
          );
        }
        function G(D) {
          const { redirectURL: ee, guestOption: k } = D,
            [v] = (0, A.useState)(
              new $.D(E.TS.WEBAPI_BASE_URL).GetAnonymousServiceTransport(),
            ),
            [l, S] = (0, A.useState)(!1),
            d = (n) => {
              n == ce.wI.k_PrimaryDomainFail
                ? S(!0)
                : window.location.assign(ee);
            };
          return (0, t.jsx)("div", {
            children: l
              ? (0, t.jsx)(f.Fn, {})
              : (0, t.jsx)(f.YN, {
                  autoFocus: !0,
                  transport: v,
                  platform: R.SS.tS,
                  onComplete: d,
                  redirectUrl: ee,
                  theme: "modal",
                  children: k && (0, t.jsx)(f.Mk, { redirectURL: ee }),
                }),
          });
        }
      },
      96533: (q, te, a) => {
        "use strict";
        a.r(te), a.d(te, { default: () => Me });
        var t = a(7850),
          A = a(41735),
          b = a.n(A),
          O = a(3166),
          E = a(80902);
        function f(I, N, Z, K, Y) {
          return (0, E.I)(R(I, N, Z, K, Y));
        }
        function R(I, N, Z, K, Y) {
          return {
            queryKey: ["gamemixer", I, N, Z, K, Y],
            queryFn: async () => {
              let oe = {
                appids: I.join(","),
                appweights: N.join(","),
                sessionid: (0, O.KC)(),
                selffactor: Z,
                popularity: Y ? 0 : K,
                scoperange: Y ? 100 : 0,
                scopedecayrange: Y ? 1e3 : 0,
                scopedecaystrength: Y ? 20 : 0,
              };
              const Oe = await b().get(
                `${O.TS.STORE_BASE_URL}gameexplorer/exploreapplist`,
                { params: oe, withCredentials: !0, timeout: 1e4 },
              );
              if (Oe.data)
                return Object.entries(Oe.data)
                  .map(([be, Pe]) => ({
                    nAppID: Number(be),
                    fDistance: Number(Pe),
                  }))
                  .filter((be) => be.fDistance > 0 && !I.includes(be.nAppID))
                  .sort((be, Pe) => Pe.fDistance - be.fDistance);
              throw "Failed FetchAppValues";
            },
            placeholderData: (oe) => oe,
          };
        }
        function $() {
          return (0, E.I)(ce());
        }
        function ce() {
          return {
            queryKey: ["gamemixerplayed"],
            queryFn: async () => {
              let I = { sessionid: (0, O.KC)() };
              const N = await b().get(
                `${O.TS.STORE_BASE_URL}gameexplorer/exploreplayedlist`,
                { params: I, withCredentials: !0, timeout: 1e4 },
              );
              if (N.data) return N.data;
              throw "Failed FetchAppValues";
            },
            placeholderData: (I) => I,
          };
        }
        var J = a(1418),
          B = a(8892),
          j = a(87275),
          U = a(21663),
          y = a(53080),
          G = a(90626),
          D = a(86390),
          ee = a(51079),
          k = a(36707),
          v = a(18210),
          l = a(41526),
          S = a(19298),
          d = a(84676),
          n = a(47385),
          s = a(96117),
          o = a(92757),
          i = a(78192),
          m = a(24805);
        const x = {
          arrSelectedAppInfos: [],
          nSelfFactor: 0,
          nPopularity: 0,
          bSimilar: !0,
        };
        function p(I) {
          const N =
              I.arrSelectedAppInfos.length == 0
                ? "0"
                : I.arrSelectedAppInfos.map((K) => K.nAppID).join(),
            Z =
              I.arrSelectedAppInfos.length == 0
                ? "0"
                : I.arrSelectedAppInfos.map((K) => K.nWeight.toFixed(0)).join();
          return `/gameexplorer/${N}/${Z}/${I.nSelfFactor}/${I.nPopularity}/${I.bSimilar}`;
        }
        function _(I) {
          const N = I.appids?.split(",").filter((K) => K != "0") ?? [],
            Z = I.weights?.split(",").filter((K) => K != "0") ?? [];
          return {
            arrSelectedAppInfos: N.map((K) => Number(K)).map((K, Y) => ({
              nAppID: K,
              nWeight: Number(Z[Y]),
            })),
            nSelfFactor: Number(I?.selffactor ?? "0"),
            nPopularity: Number(I?.popularity ?? "0"),
            bSimilar: I?.similar == "true",
          };
        }
        function C() {
          const I = (0, o.g)(),
            N = _(I),
            [Z, K] = G.useState(N),
            [Y, oe] = G.useState(N),
            Oe = (0, o.W6)(),
            be = f(
              Y.arrSelectedAppInfos.map((ae) => ae.nAppID),
              Y.arrSelectedAppInfos.map((ae) => ae.nWeight),
              Y.nSelfFactor,
              Y.nPopularity,
              Y.bSimilar,
            ),
            Pe = (ae, ie) => {
              K(ae), ie && (Oe.push(p(ae)), oe(ae));
            },
            de = (ae) => {
              const ie = {
                ...Y,
                arrSelectedAppInfos: [{ nAppID: ae, nWeight: 100 }],
              };
              K(ie), Oe.push(p(ie)), oe(ie);
            };
          return (0, t.jsx)(ee.Ay, {
            controller: "gameexplorer",
            method: "default",
            feature: "capsule",
            children: (0, t.jsx)(J.Y, {
              children: (0, t.jsx)(S.Z, {
                className: (0, k.A)(
                  l.GameExplorerApp,
                  be.isFetching && l.Refreshing,
                ),
                children: (0, t.jsxs)(S.Z, {
                  className: l.GameExplorerContainer,
                  children: [
                    (0, t.jsx)(L, {}),
                    !O.iA.steamid && (0, t.jsx)(w, {}),
                    (0, t.jsx)(W, { state: Z, onChange: Pe }),
                    be.data &&
                      (0, t.jsx)(V, {
                        arrNearApps: be.data,
                        bIsPending: be.isFetching,
                        fnSetApp: de,
                      }),
                  ],
                }),
              }),
            }),
          });
        }
        function L() {
          return (0, t.jsxs)(S.Z, {
            className: l.GameExplorerHeader,
            children: [
              (0, t.jsx)(S.Z, {
                className: l.GameExplorerTitle,
                children: "Game Explorer",
              }),
              (0, t.jsx)(S.Z, {
                className: l.GameExplorerDescription,
                children: "Explore and Mix Games",
              }),
            ],
          });
        }
        function T(I) {
          const [N] = (0, d.t7)(I.selectedAppInfo.nAppID, {
            include_basic_info: !0,
            include_assets_without_overrides: !0,
          });
          if (!N) return null;
          const Z = N.GetAssetsWithoutOverrides().GetMainCapsuleURL();
          return (0, t.jsxs)("div", {
            className: l.SelectedApp,
            children: [
              (0, t.jsx)("div", {
                className: l.RemoveButttonContainer,
                children: (0, t.jsx)(B.$, {
                  size: "1",
                  color: "red",
                  onClick: () => I.onRemove(I.selectedAppInfo.nAppID),
                  children: "X",
                }),
              }),
              (0, t.jsx)("img", { className: l.CapsuleImage, src: Z }),
              (0, t.jsx)("div", {
                className: l.WeightContainer,
                children:
                  I.nNumSelected > 1 &&
                  (0, t.jsx)(j.A, {
                    value: I.selectedAppInfo.nWeight,
                    min: 0,
                    max: 100,
                    onValueChange: (K) =>
                      I.onWeightChange(I.selectedAppInfo.nAppID, K, !1),
                    onValueSettled: (K) =>
                      I.onWeightChange(I.selectedAppInfo.nAppID, K, !0),
                  }),
              }),
            ],
          });
        }
        function z(I) {
          if (I.bSimilar) return "Similar";
          switch (I.nPopularity) {
            case 0:
              return "Any";
            case 40:
              return "Popular";
            case 130:
              return "Niche";
          }
          return "";
        }
        function F(I) {
          switch (I.nSelfFactor) {
            case 0:
              return "None";
            case 20:
              return "Some";
            case 40:
              return "Lots";
          }
          return "";
        }
        function W(I) {
          const [N, Z] = G.useState(z(I.state)),
            [K, Y] = G.useState(F(I.state)),
            oe = (H, le, me) => {
              let X = I.state.arrSelectedAppInfos.slice();
              X.find((Q) => Q.nAppID == H) == null &&
                ((le = 100 / (X.length + 1)),
                X.push({ nAppID: H, nWeight: le }));
              let ue = !1;
              if (
                (le == -1 &&
                  ((le = 0), (X = X.filter((Q) => Q.nAppID != H)), (ue = !0)),
                X.length > 1)
              ) {
                const Q = X.map((Ce) =>
                    Ce.nAppID != H ? Ce.nWeight : null,
                  ).filter((Ce) => Ce != null),
                  He = Q.reduce((Ce, Re) => Ce + Re, 0);
                let Ne = (100 - le - He) / (X.length - (ue ? 0 : 1));
                const Ve = Q.reduce(
                    (Ce, Re) => Ce + Math.max(0, Re + Ne - 100),
                    0,
                  ),
                  ke = Q.reduce((Ce, Re) => Ce + Math.min(0, Re + Ne), 0);
                (Ne += Math.floor(Ve / (X.length - 1))),
                  (Ne += Math.floor(ke / (X.length - 1))),
                  (X = X.map((Ce) => ({
                    nAppID: Ce.nAppID,
                    nWeight:
                      Ce.nAppID == H
                        ? le
                        : Math.max(0, Math.min(100, Ce.nWeight + Ne)),
                  }))),
                  I.onChange({ ...I.state, arrSelectedAppInfos: X }, me);
              } else I.onChange({ ...I.state, arrSelectedAppInfos: X }, me);
            },
            Oe = (H) => {
              oe(H, 100, !0);
            },
            be = (H) => {
              oe(H, -1, !0);
            },
            Pe = (H) => {
              switch (H) {
                case "None":
                  I.onChange({ ...I.state, nSelfFactor: 0 }, !0);
                  break;
                case "Some":
                  I.onChange({ ...I.state, nSelfFactor: 20 }, !0);
                  break;
                case "Lots":
                  I.onChange({ ...I.state, nSelfFactor: 40 }, !0);
                  break;
              }
              Y(H);
            },
            de = (H) => {
              switch (H) {
                case "Similar":
                  I.onChange({ ...I.state, nPopularity: 0, bSimilar: !0 }, !0);
                  break;
                case "Any":
                  I.onChange({ ...I.state, nPopularity: 0, bSimilar: !1 }, !0);
                  break;
                case "Popular":
                  I.onChange({ ...I.state, nPopularity: 40, bSimilar: !1 }, !0);
                  break;
                case "Niche":
                  I.onChange(
                    { ...I.state, nPopularity: 130, bSimilar: !1 },
                    !0,
                  );
                  break;
              }
              Z(H);
            },
            ae = ["Similar", "Any", "Popular", "Niche"],
            ie = ["None", "Some", "Lots"];
          return (0, t.jsx)("div", {
            className: l.GameExplorerKnobs,
            children: (0, t.jsxs)("div", {
              className: l.AppList,
              children: [
                (0, t.jsxs)("div", {
                  className: l.AppRow,
                  children: [
                    I.state.arrSelectedAppInfos.length == 0 &&
                      (0, t.jsx)("div", {
                        className: l.Empty,
                        children: "Add games to start exploring",
                      }),
                    I.state.arrSelectedAppInfos.map((H) =>
                      (0, t.jsx)(
                        T,
                        {
                          selectedAppInfo: H,
                          onWeightChange: oe,
                          onRemove: be,
                          nNumSelected: I.state.arrSelectedAppInfos.length,
                        },
                        H.nAppID,
                      ),
                    ),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: l.AppSelectors,
                  children: [
                    (0, t.jsx)(xe, {
                      fnSelectAppID: Oe,
                      arrSelectedAppIDs: I.state.arrSelectedAppInfos.map(
                        (H) => H.nAppID,
                      ),
                    }),
                    (0, t.jsx)(ve, {
                      fnSelectAppID: Oe,
                      arrSelectedAppIDs: I.state.arrSelectedAppInfos.map(
                        (H) => H.nAppID,
                      ),
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: l.OtherControls,
                  children: [
                    (0, t.jsxs)("div", {
                      className: l.OtherControl,
                      children: [
                        (0, t.jsx)("div", {
                          className: l.ControlTitle,
                          children: "Popularity",
                        }),
                        (0, t.jsx)(U.I, {
                          options: ae,
                          value: N,
                          onValueChange: (H) => de(H),
                          radius: "sm",
                        }),
                        (0, t.jsxs)("div", {
                          className: l.ControlDescription,
                          children: [
                            N == "Similar" &&
                              "Games with similar popularity to your input games",
                            N == "Any" &&
                              "No popularity restrictions, can be noisy",
                            N == "Popular" && "Higher popularity games",
                            N == "Niche" &&
                              "Lower popularity games, can be noisy",
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: l.OtherControl,
                      children: [
                        (0, t.jsx)("div", {
                          className: l.ControlTitle,
                          children: "Self Factor",
                        }),
                        (0, t.jsx)(U.I, {
                          options: ie,
                          value: K,
                          onValueChange: (H) => Pe(H),
                          radius: "sm",
                        }),
                        (0, t.jsxs)("div", {
                          className: l.ControlDescription,
                          children: [
                            K == "None" &&
                              "Your game preferences are not factored in",
                            K == "Some" &&
                              "A bit of your game preferences are mixed in",
                            K == "Lots" &&
                              "Significantly biased towards your game preferences",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        function re(I) {
          const [N] = (0, d.G6)(I.nAppID, i.c6.qI, m.Xh);
          return N
            ? (0, t.jsxs)("div", {
                className: l.CapsuleContainer,
                children: [
                  (0, t.jsx)(s.W, {
                    capsule: { id: I.nAppID },
                    imageType: "library",
                    nWidthMultiplier: 2,
                    bShowName: !1,
                    bHidePlatforms: !0,
                    bHidePrice: !0,
                    bHideStatusBanners: !0,
                    bShowIgnoreButton: !0,
                    bShowDescriptionInHover: !0,
                    bPreferAssetWithoutOverride: !1,
                  }),
                  (0, t.jsxs)("div", {
                    className: l.Distance,
                    children: [
                      `${(I.fDistance * 100).toFixed(2)}%`,
                      (0, t.jsx)("div", {
                        className: l.StartExplore,
                        children: (0, t.jsx)(B.$, {
                          size: "1",
                          color: "green",
                          onClick: () => I.fnSetApp(I.nAppID),
                          children: "Go",
                        }),
                      }),
                    ],
                  }),
                ],
              })
            : null;
        }
        function V(I) {
          return I.arrNearApps.length == 0
            ? null
            : (0, t.jsx)("div", {
                className: (0, k.A)(
                  l.GameExplorerResults,
                  I.bIsPending && l.Pending,
                ),
                children: I.arrNearApps?.map((N) =>
                  (0, t.jsx)(
                    re,
                    {
                      nAppID: N.nAppID,
                      fDistance: N.fDistance,
                      fnSetApp: I.fnSetApp,
                    },
                    N.nAppID,
                  ),
                ),
              });
        }
        function w() {
          return (0, t.jsxs)(S.Z, {
            className: l.PersonalCalendarLoginPrompt,
            children: [
              (0, v.we)("#PersonalCalendar_LoginPrompt"),
              (0, t.jsx)("button", {
                onClick: D.vg,
                className: l.LoginButton,
                children: (0, v.we)("#Login_SignIn"),
              }),
            ],
          });
        }
        function u(I) {
          const [N] = (0, d.t7)(I.nAppID, {
            include_basic_info: !0,
            include_assets_without_overrides: !0,
          });
          if (!N) return null;
          const Z = N.GetAssetsWithoutOverrides().GetSmallCapsuleURL();
          return (0, t.jsxs)("div", {
            className: l.AppSelectorResult,
            onPointerDown: () => I.onClick(I.nAppID),
            children: [
              (0, t.jsx)("img", { className: l.Logo, src: Z }),
              (0, t.jsx)("div", {
                className: l.RightSide,
                children: N.GetName(),
              }),
            ],
          });
        }
        const he = G.forwardRef(function (N, Z) {
            const K = (0, n.T3)(N.strSearch, null, 10),
              Y = N.fnSetResultApps;
            return (
              G.useEffect(() => {
                Y(K.data?.rgItemIDs.map((oe) => oe.appid));
              }, [Y, K.data]),
              (0, t.jsx)("div", {
                className: (0, k.A)(
                  l.AppSelectorResults,
                  K.data?.rgItemIDs.length > 0 && l.Show,
                ),
                ref: Z,
                children: K.data?.rgItemIDs
                  .filter((oe) => !N.arrIgnoreAppIDs.includes(oe.appid))
                  .map((oe) =>
                    (0, t.jsx)(
                      u,
                      { nAppID: oe.appid, onClick: N.fnClickApp },
                      oe.appid,
                    ),
                  ),
              })
            );
          }),
          xe = (I) => {
            const [N, Z] = G.useState(""),
              [K, Y] = G.useState(0),
              [oe, Oe] = G.useState(0),
              [be, Pe] = G.useState([]),
              de = G.useRef(K),
              ae = G.useRef(null),
              ie = 300;
            G.useEffect(() => {
              de.current = K;
            }, [K]);
            const H = () => {
                Date.now() - de.current < ie || (Oe(0), Pe([]));
              },
              le = (Q) => {
                Q != N && (Z(Q), Y(Date.now()), setTimeout(H, ie));
              },
              me = (Q) => {
                I.fnSelectAppID(Q), Z(""), Oe(0), Pe([]), Y(Date.now());
              },
              X = (Q) => {
                switch (Q) {
                  case "Enter": {
                    be.length > 0 && me(be[0]);
                    break;
                  }
                  case "Escape": {
                    Z("");
                    break;
                  }
                }
              },
              ue = I.arrSelectedAppIDs.length >= 3;
            return (0, t.jsxs)("div", {
              className: l.AppSelector,
              children: [
                (0, t.jsx)("input", {
                  type: "text",
                  className: (0, k.A)(l.ValueInput, ue && l.Disabled),
                  value: N,
                  onChange: (Q) => le(Q.target.value),
                  onKeyDown: (Q) => X(Q.key),
                  onBlur: (Q) => Z(""),
                  placeholder: ue ? "Max three games" : "Type any game name",
                  disabled: ue,
                }),
                (0, t.jsx)(he, {
                  strSearch: N,
                  nSelectedResult: oe,
                  fnSetResultApps: Pe,
                  fnClickApp: me,
                  arrIgnoreAppIDs: I.arrSelectedAppIDs,
                  ref: ae,
                }),
              ],
            });
          },
          ve = (I) => {
            const Z = $().data,
              K = Z?.appids ?? [];
            return (0, t.jsx)("div", {
              className: l.AppPlayedSelector,
              children: (0, t.jsx)(y.l6, {
                options: K,
                size: "1",
                selectedValue: 0,
                onSelectionChange: (Y) => I.fnSelectAppID(Y),
                getOptionLabel: (Y) =>
                  Y == 0
                    ? "Select a recent game to add it"
                    : Z?.names[Z?.appids.indexOf(Y)],
              }),
            });
          },
          Me = C;
      },
      64849: (q, te, a) => {
        "use strict";
        a.r(te), a.d(te, { default: () => _t });
        var t = a(7850),
          A = a(58732),
          b = a(85528),
          O = a(3166),
          E = a(14947),
          f = a(30096),
          R = a(41735),
          $ = a.n(R),
          ce = Object.defineProperty,
          J = Object.getOwnPropertyDescriptor,
          B = (c, e, r, g) => {
            for (
              var h = g > 1 ? void 0 : g ? J(e, r) : e, P = c.length - 1, M;
              P >= 0;
              P--
            )
              (M = c[P]) && (h = (g ? M(e, r, h) : M(h)) || h);
            return g && h && ce(e, r, h), h;
          };
        class j {
          rgModelNames = [];
          constructor() {
            (0, E.Gn)(this);
          }
          Init(e) {
            b.Vw.Init(e);
            const r = `${O.TS.STORE_BASE_URL}labs/ajaxgetsimilaritymodelnames`;
            $()
              .get(r)
              .then((g) => {
                if (g.data) {
                  let h = [];
                  for (const P of g.data) P != "default" && h.push(P);
                  h.sort(), (h = ["default", ...h]), (this.rgModelNames = h);
                }
              });
          }
          async ComputePathBetweenApps(e, r, g, h, P, M, ne) {
            const ge = Math.acos(g);
            let fe = async (Se) => {
                let _e = await this.GetNeighbors(Se),
                  je = [];
                for (let Ee = 0; Ee < _e.length; Ee++) {
                  const pe = _e[Ee];
                  if (
                    (!h || je.length > h) &&
                    (pe.cost > ge || (P && je.length >= P))
                  )
                    break;
                  je.push(pe);
                }
                return je;
              },
              De = await new y(
                fe,
                this.EstimateCosts,
                (Se, _e) => Se == _e,
                ne,
              ).FindPath(e, r, M || 10);
            if (De.path) {
              let Se = [],
                _e = 0;
              for (let je = 0; je < De.path.length; je++) {
                const Ee = De.path[je],
                  pe = Ee.cost - _e;
                (_e = Ee.cost),
                  Se.push({ appid: Ee.node, similarity: Math.cos(pe) });
              }
              return Se;
            } else throw new Error("Unable to compute path.");
          }
          async GetNeighbors(e) {
            const r = `${O.TS.STORE_BASE_URL}labs/ajaxgetsimilarapps?appid=${e}`;
            let g = await $().get(r),
              h = [];
            if (g.data && g.data.appid == e)
              for (let P = 0; P < g.data.similar_appids.length; P++)
                h.push({
                  node: g.data.similar_appids[P],
                  cost: Math.acos(g.data.similarity_scores[P]),
                });
            return h;
          }
          async EstimateCosts(e, r) {
            const g = `${O.TS.STORE_BASE_URL}labs/ajaxgetappsimilarities?appidtarget=${r}&${e.map((P) => "appid[]=" + P.toString()).join("&")}`;
            let h = await $().get(g);
            if (h.data && h.data.similarity_scores)
              return h.data.similarity_scores.map((P) =>
                Math.acos(parseFloat(P)),
              );
            throw new Error("Unable to fetch cost estimates");
          }
        }
        B([E.sH], j.prototype, "rgModelNames", 2),
          B([f.oI], j.prototype, "GetNeighbors", 1),
          B([f.oI], j.prototype, "EstimateCosts", 1);
        class U {
          m_fnCompare;
          m_Heap = [];
          m_Length = 0;
          constructor(e) {
            this.m_fnCompare = e;
          }
          get length() {
            return this.m_Length;
          }
          Clear() {
            (this.m_Heap = []), (this.m_Length = 0);
          }
          Peek() {
            if (this.m_Length > 0) return this.m_Heap[0];
          }
          Pop() {
            if (this.m_Length != 0) {
              const e = this.m_Heap[0];
              return (
                (this.m_Heap[0] = this.m_Heap[this.m_Length - 1]),
                this.m_Length--,
                this.BubbleDown(),
                e
              );
            }
          }
          Push(e) {
            this.m_Heap.length == this.m_Length
              ? this.m_Heap.push(e)
              : (this.m_Heap[this.m_Length] = e),
              this.m_Length++,
              this.BubbleUp();
          }
          FindElement(e) {
            for (let r = 0; r < this.m_Length; r++)
              if (e(this.m_Heap[r]))
                return { index: r, element: this.m_Heap[r] };
          }
          LowerPriorityOfElement(e, r) {
            (this.m_Heap[e] = r), this.BubbleUp(e);
          }
          BubbleDown() {
            let e = 0;
            do {
              const r = e * 2 + 1,
                g = e * 2 + 2;
              let h = e;
              if (
                (r < this.m_Length &&
                  this.m_fnCompare(this.m_Heap[h], this.m_Heap[r]) > 0 &&
                  (h = r),
                g < this.m_Length &&
                  this.m_fnCompare(this.m_Heap[h], this.m_Heap[g]) > 0 &&
                  (h = g),
                h != e)
              ) {
                const P = this.m_Heap[e];
                (this.m_Heap[e] = this.m_Heap[h]),
                  (this.m_Heap[h] = P),
                  (e = h);
              } else break;
            } while (e < this.m_Length);
          }
          BubbleUp(e) {
            let r = e || this.m_Length - 1;
            for (; r > 0; ) {
              const g = (r - 1) >> 1;
              if (this.m_fnCompare(this.m_Heap[g], this.m_Heap[r]) > 0) {
                const h = this.m_Heap[g];
                (this.m_Heap[g] = this.m_Heap[r]),
                  (this.m_Heap[r] = h),
                  (r = g);
              } else break;
            }
          }
        }
        class y {
          m_fnGetNeighbors;
          m_fnEstimateCosts;
          m_fnEquality;
          m_fnIterationCallback;
          constructor(e, r, g, h) {
            (this.m_fnGetNeighbors = e),
              (this.m_fnEstimateCosts = r),
              (this.m_fnEquality = g),
              (this.m_fnIterationCallback = h);
          }
          async FindPath(e, r, g) {
            let h = new U((De, Se) => De.cost - Se.cost),
              P = new Set();
            h.Push({ node: e, cost: 0 });
            let M = new Map(),
              ne = new Map(),
              ge = new Map(),
              fe = (await this.m_fnEstimateCosts([e], r))[0];
            M.set(e, fe), ne.set(e, 0);
            let we = 0;
            for (; h.length > 0 && we < g; ) {
              let De = h.Pop();
              if (this.m_fnEquality(De.node, r)) {
                let _e = [],
                  je = De.node;
                for (; ge.has(je); ) _e.push(je), (je = ge.get(je));
                let Ee = [];
                for (let pe = _e.length - 1; pe >= 0; pe--)
                  Ee.push({ node: _e[pe], cost: ne.get(_e[pe]) });
                return { path: Ee };
              }
              P.add(De.node);
              let Se = await this.m_fnGetNeighbors(De.node);
              if (Se.length > 0) {
                let _e = await this.m_fnEstimateCosts(
                  Se.map((Ee) => Ee.node),
                  r,
                );
                if (_e.length != Se.length)
                  return (
                    console.warn(
                      "Failed to fetch expected number of cost estimates. Failing pathfinding.",
                    ),
                    {}
                  );
                let je = ne.get(De.node);
                for (let Ee = 0; Ee < Se.length; Ee++) {
                  const pe = Se[Ee];
                  let Ae = je + pe.cost;
                  if (
                    (!ne.has(pe.node) || Ae < ne.get(pe.node)) &&
                    (ge.set(pe.node, De.node),
                    ne.set(pe.node, Ae),
                    M.set(pe.node, pe.cost + _e[Ee]),
                    !P.has(pe.node))
                  ) {
                    const Ke = pe.cost + _e[Ee];
                    let Qe = h.FindElement((Et) => Et.node == pe.node);
                    Qe
                      ? Qe.element.cost > Ke &&
                        h.LowerPriorityOfElement(Qe.index, {
                          node: pe.node,
                          cost: Ke,
                        })
                      : h.Push({ node: pe.node, cost: Ke });
                  }
                }
              }
              we++, this.m_fnIterationCallback && this.m_fnIterationCallback();
            }
            throw new Error("No path found.");
          }
        }
        const G = new j();
        window.g_LabsSandbox = G;
        var D = a(90626),
          ee = a(17083),
          k = a(92757),
          v = a(62139),
          l = a(16412),
          S = a(32093),
          d = a(75844),
          n = a(36707),
          s = Object.defineProperty,
          o = Object.getOwnPropertyDescriptor,
          i = (c, e, r, g) => {
            for (
              var h = g > 1 ? void 0 : g ? o(e, r) : e, P = c.length - 1, M;
              P >= 0;
              P--
            )
              (M = c[P]) && (h = (g ? M(e, r, h) : M(h)) || h);
            return g && h && s(e, r, h), h;
          };
        class m extends D.Component {
          state = {
            appid: 0,
            appinfo: null,
            mode: "display",
            strSearch: "",
            rgSuggestions: [],
          };
          m_currentRequest = 0;
          constructor(e) {
            super(e),
              this.props.appidInitial &&
                (b.Vw.EnsureAppInfoForAppIDs([this.props.appidInitial]).then(
                  () => {
                    const r = b.Vw.GetAppInfo(this.props.appidInitial);
                    this.setState({
                      appid: this.props.appidInitial,
                      appinfo: b.Vw.GetAppInfo(this.props.appidInitial),
                    });
                  },
                ),
                (this.state.appid = this.props.appidInitial));
          }
          OnDisplayClicked() {
            this.setState({ mode: "select" });
          }
          async UpdateAppSuggestions(e) {
            const r = e.target.value && e.target.value.trim();
            if (!r?.length) {
              this.setState({ strSearch: "", rgSuggestions: null });
              return;
            }
            window.clearTimeout(this.m_currentRequest),
              (this.m_currentRequest = window.setTimeout(async () => {
                const g = {
                    cc: O.TS.COUNTRY,
                    l: O.TS.LANGUAGE,
                    realm: S.TU.k_ESteamRealmGlobal,
                    origin: self.origin,
                    f: "jsonfull",
                    term: r.replace(" ", "+"),
                    require_type: "game",
                    excluded_tags: [],
                    excluded_content_descriptors: [],
                  },
                  h = `${O.TS.STORE_BASE_URL}search/suggest`,
                  P = await $().get(h, { params: g, withCredentials: !0 });
                let M;
                P?.data?.length
                  ? (M = P.data.map((ne) =>
                      (0, t.jsxs)(
                        "div",
                        {
                          className: v.Suggestion,
                          onClickCapture: () =>
                            this.SetSelectedApp(parseInt(ne.id)),
                          children: [
                            (0, t.jsx)("img", {
                              src: ne.img,
                              className: v.LogoImage,
                            }),
                            (0, t.jsx)("div", {
                              className: v.AppName,
                              children:
                                ne.name +
                                (this.props.showAppIds ? ` (${ne.id})` : ""),
                            }),
                          ],
                        },
                        `suggestion-${ne.id}`,
                      ),
                    ))
                  : (M = []),
                  this.setState({ strSearch: r, rgSuggestions: M });
              }, 250));
          }
          SetSelectedApp(e) {
            e && e != 0
              ? b.Vw.EnsureAppInfoForAppIDs([e]).then(() => {
                  const r = b.Vw.GetAppInfo(e);
                  this.setState({
                    appid: e,
                    appinfo: b.Vw.GetAppInfo(e),
                    mode: "display",
                  }),
                    this.props.fnOnSelection &&
                      this.props.fnOnSelection(e, this);
                })
              : this.setState({ appid: 0, appinfo: null, mode: "display" });
          }
          OnKeyUp(e) {
            e.keyCode == 27 && this.setState({ mode: "display" });
          }
          render() {
            const e = this.props.classOverride ?? v.AppSelector;
            let r = null;
            const g = (0, t.jsx)(l.pd, {
              type: "text",
              onChange: this.UpdateAppSuggestions,
            });
            if (this.state.mode == "display") {
              const h = this.state.appinfo
                ? this.state.appinfo.name +
                  (this.props.showAppIds ? ` (${this.state.appid})` : "")
                : (this.props.strPrompt ?? "Select game");
              r = (0, t.jsx)("div", {
                className: v.AppDisplay,
                children: (0, t.jsx)("div", {
                  className: v.AppName,
                  children: h,
                }),
              });
            } else if (this.state.mode == "select") {
              const h = this.state.strSearch.length > 0;
              r = (0, t.jsxs)("div", {
                className: v.AppSelect,
                children: [
                  g,
                  h &&
                    (0, t.jsx)("div", {
                      className: v.Suggestions,
                      children: this.state.rgSuggestions,
                    }),
                ],
              });
            }
            return (0, t.jsx)("div", {
              className: e,
              onClick: this.OnDisplayClicked,
              onKeyUpCapture: this.OnKeyUp,
              children: r,
            });
          }
        }
        i([f.oI], m.prototype, "OnDisplayClicked", 1),
          i([f.oI], m.prototype, "UpdateAppSuggestions", 1),
          i([f.oI], m.prototype, "OnKeyUp", 1);
        class x extends D.Component {
          render() {
            if (this.props.appid == 0)
              return (0, t.jsx)("div", { className: v.SimilarApp });
            {
              const e = b.Vw.GetAppInfo(this.props.appid);
              if (!e || !e.is_valid)
                return (0, t.jsx)("div", { className: v.SimilarApp });
              let r = [];
              if (this.props.score) {
                r.push(
                  (0, t.jsx)("div", { className: v.Spacer }, "score-spacer"),
                );
                const P = Math.round(this.props.score * 100).toString() + "%";
                r.push(
                  (0, t.jsx)(
                    "div",
                    { className: v.Score, children: P },
                    "score-value",
                  ),
                );
              }
              const g = e.name + " (" + this.props.appid.toString() + ")",
                h = this.props.fnOnSelected
                  ? this.props.fnOnSelected
                  : (P) => {};
              return (0, t.jsxs)("div", {
                className: v.SimilarApp,
                onClick: () => h(this.props.appid),
                children: [
                  (0, t.jsx)("div", { className: v.AppName, children: g }),
                  r,
                ],
              });
            }
          }
        }
        class p extends D.Component {
          state = {};
          ref_app_a = D.createRef();
          ref_app_b = D.createRef();
          componentDidMount() {
            this.OnAppSelected();
          }
          OnAppSelected() {
            if (
              this.ref_app_a.current &&
              this.ref_app_b.current &&
              this.ref_app_a.current.state.appid &&
              this.ref_app_b.current.state.appid
            ) {
              const e = this.ref_app_a.current.state.appid,
                r = this.ref_app_b.current.state.appid,
                g = `${O.TS.STORE_BASE_URL}labs/ajaxgetappsimilarities?appidtarget=${e}&appid[]=${r}`;
              $()
                .get(g)
                .then((h) => {
                  h.data && h.data.similarity_scores
                    ? this.setState({ score: h.data.similarity_scores[0] })
                    : this.setState({ score: null });
                });
            }
          }
          render() {
            const e = this.state.score
              ? (this.state.score * 100).toFixed(1) + "%"
              : "";
            return (0, t.jsxs)("div", {
              className: v.LabsSimilarity,
              children: [
                (0, t.jsx)(
                  m,
                  {
                    fnOnSelection: this.OnAppSelected,
                    ref: this.ref_app_a,
                    showAppIds: !0,
                    appidInitial: 268500,
                  },
                  "similar_app_a",
                ),
                (0, t.jsx)("div", { className: v.HorizontalSpacer }),
                (0, t.jsx)("div", { className: v.Score, children: e }),
                (0, t.jsx)("div", { className: v.HorizontalSpacer }),
                (0, t.jsx)(
                  m,
                  {
                    fnOnSelection: this.OnAppSelected,
                    ref: this.ref_app_b,
                    showAppIds: !0,
                    appidInitial: 200510,
                  },
                  "similar_app_b",
                ),
              ],
            });
          }
        }
        i([f.oI], p.prototype, "OnAppSelected", 1);
        let _ = class extends D.Component {
          selected_app = 0;
          similar_apps = [];
          similarity_scores = [];
          similarity_model = "default";
          app_selector_ref = D.createRef();
          constructor(c) {
            super(c),
              (0, E.Gn)(this),
              c.default_app && this.SetSelectedApp(c.default_app);
          }
          componentDidMount() {
            this.app_selector_ref.current &&
              this.SetSelectedApp(this.app_selector_ref.current.state.appid);
          }
          OnSelectedApp(c) {
            c && this.SetSelectedApp(c);
          }
          SetSelectedApp(c, e) {
            if (e || c != this.selected_app) {
              (this.similar_apps = []),
                (this.selected_app = c),
                this.app_selector_ref.current &&
                  this.app_selector_ref.current.SetSelectedApp(c);
              const r = `${O.TS.STORE_BASE_URL}labs/ajaxgetsimilarapps?appid=${c}&model=${this.similarity_model}`;
              $()
                .get(r)
                .then((g) => {
                  if (g.data && g.data.appid == this.selected_app) {
                    let h = new Set(
                      g.data.similar_appids.slice(0, this.props.max_similar),
                    );
                    h.add(g.data.appid),
                      b.Vw.EnsureAppInfoForAppIDs(h).then(() => {
                        (this.similar_apps = g.data.similar_appids),
                          (this.similarity_scores = g.data.similarity_scores);
                      });
                  }
                });
            }
          }
          OnModelChanged(c, e) {
            (this.similarity_model = c.data),
              this.SetSelectedApp(this.selected_app, !0);
          }
          render() {
            let c = [],
              e;
            const r = Math.min(
              this.similar_apps.length,
              this.similarity_scores.length,
              this.props.max_similar,
            );
            for (e = 0; e < r; e++) {
              const h = this.similar_apps[e],
                P = this.similarity_scores[e];
              c.push(
                (0, t.jsx)(
                  x,
                  { appid: h, score: P, fnOnSelected: this.SetSelectedApp },
                  h,
                ),
              );
            }
            let g = [];
            for (const h of G.rgModelNames) {
              let P = { label: (0, t.jsx)("div", { children: h }, h), data: h };
              g.push(P);
            }
            return (0, t.jsxs)("div", {
              className: v.LabsSimilarGames,
              children: [
                (0, t.jsx)(l.m, {
                  rgOptions: g,
                  onChange: this.OnModelChanged,
                  selectedOption: "default",
                }),
                (0, t.jsx)("h1", { children: "Games similar to:" }),
                (0, t.jsx)(m, {
                  fnOnSelection: this.OnSelectedApp,
                  ref: this.app_selector_ref,
                  appidInitial: 268500,
                  showAppIds: !0,
                }),
                (0, t.jsx)("div", { className: v.SimilarApps, children: c }),
              ],
            });
          }
        };
        i([E.sH], _.prototype, "selected_app", 2),
          i([E.sH], _.prototype, "similar_apps", 2),
          i([E.sH], _.prototype, "similarity_scores", 2),
          i([E.sH], _.prototype, "similarity_model", 2),
          i([f.oI], _.prototype, "OnSelectedApp", 1),
          i([f.oI], _.prototype, "SetSelectedApp", 1),
          i([f.oI], _.prototype, "OnModelChanged", 1),
          (_ = i([d.PA], _));
        let C = class extends D.Component {
          selected_app = void 0;
          selected_operator = void 0;
          constructor(c) {
            super(c),
              (0, E.Gn)(this),
              (this.selected_app = c.app),
              (this.selected_operator = c.operator);
          }
          OnSelectedApp(c) {
            c &&
              c != this.selected_app &&
              ((this.selected_app = c),
              this.props.fnOnChange && this.props.fnOnChange());
          }
          OnSelectedOperator(c, e) {
            (this.selected_operator = c.data),
              this.props.fnOnChange && this.props.fnOnChange();
          }
          render() {
            let c = [
              {
                label: (0, t.jsx)("div", { children: "Plus" }, "Plus"),
                data: "Plus",
              },
              {
                label: (0, t.jsx)("div", { children: "Minus" }, "Minus"),
                data: "Minus",
              },
            ];
            return (0, t.jsxs)("div", {
              className: v.Operand,
              children: [
                (0, t.jsx)("div", {
                  className: v.OperatorSelect,
                  children: (0, t.jsx)(l.m, {
                    rgOptions: c,
                    onChange: this.OnSelectedOperator,
                    selectedOption: "Plus",
                  }),
                }),
                (0, t.jsx)(m, { fnOnSelection: this.OnSelectedApp }),
              ],
            });
          }
        };
        i([E.sH], C.prototype, "selected_app", 2),
          i([E.sH], C.prototype, "selected_operator", 2),
          i([f.oI], C.prototype, "OnSelectedApp", 1),
          i([f.oI], C.prototype, "OnSelectedOperator", 1),
          (C = i([d.PA], C));
        let L = class extends D.Component {
          operands = [];
          similarity_model = "default";
          similar_apps = [];
          similarity_scores = [];
          operand_refs;
          constructor(c) {
            super(c), (0, E.Gn)(this), (this.operand_refs = []);
            for (let e = 0; e < c.max_operands; e++)
              this.operand_refs.push(D.createRef());
          }
          OnModelChanged(c, e) {
            (this.similarity_model = c.data), this.RecomputeExpression();
          }
          OnAddOperand() {
            this.operands.length < this.props.max_operands &&
              this.operands.push({
                app: 0,
                operator: this.operands.length > 0 ? "Plus" : void 0,
              });
          }
          OnOperandChanged() {
            for (let c = 0; c < this.operands.length; c++) {
              const e = this.operand_refs[c].current;
              (this.operands[c].app = e.selected_app),
                (this.operands[c].operator = e.selected_operator);
            }
            this.RecomputeExpression();
          }
          RecomputeExpression() {
            if (this.operands.length == 0) return;
            const c = this.operands.map((r) => "appid[]=" + r.app.toString()),
              e = `${O.TS.STORE_BASE_URL}labs/ajaxgetappvectors?${c.join("&")}&model=${this.similarity_model}`;
            $()
              .get(e)
              .then((r) => {
                if (
                  ((this.similar_apps = []),
                  (this.similarity_scores = []),
                  r.data && r.data.length == this.operands.length)
                ) {
                  let g = r.data[0].components.map((M) => parseFloat(M));
                  for (let M = 1; M < this.operands.length; M++) {
                    const ne = r.data[M].components.map((ge) => parseFloat(ge));
                    this.operands[M].operator == "Plus"
                      ? (g = g.map((ge, fe) => ge + ne[fe]))
                      : this.operands[M].operator == "Minus"
                        ? (g = g.map((ge, fe) => ge - ne[fe]))
                        : console.log(
                            "Unexpected operator " + this.operands[M].operator,
                          );
                  }
                  const h = g.map((M) => M * M).reduce((M, ne) => M + ne, 0),
                    P = Math.sqrt(h);
                  if (P > 1e-4) {
                    const ne = g
                        .map((fe) => fe / P)
                        .map((fe) => "x[]=" + fe)
                        .join("&"),
                      ge = `${O.TS.STORE_BASE_URL}labs/ajaxgetmostsimilarappstovector?${ne}&model=${this.similarity_model}`;
                    $()
                      .get(ge)
                      .then((fe) => {
                        let we = new Set(
                          fe.data.similar_appids.slice(
                            0,
                            this.props.max_similar,
                          ),
                        );
                        b.Vw.EnsureAppInfoForAppIDs(we).then(() => {
                          (this.similar_apps = fe.data.similar_appids),
                            (this.similarity_scores =
                              fe.data.similarity_scores);
                        });
                      });
                  }
                }
              });
          }
          render() {
            let c = [];
            for (const M of G.rgModelNames) {
              let ne = {
                label: (0, t.jsx)("div", { children: M }, M),
                data: M,
              };
              c.push(ne);
            }
            let e = [],
              r = 0;
            for (const M of this.operands)
              e.push(
                (0, t.jsx)(
                  C,
                  {
                    app: M.app,
                    operator: M.operator,
                    fnOnChange: this.OnOperandChanged,
                    ref: this.operand_refs[r],
                  },
                  r,
                ),
              ),
                r++;
            let g = null;
            this.operands.length < this.props.max_operands &&
              (g = (0, t.jsx)("div", {
                className: v.AddOperand,
                onClick: this.OnAddOperand,
                children: "+",
              }));
            let h = [];
            const P = Math.min(
              this.similar_apps.length,
              this.similarity_scores.length,
              this.props.max_similar,
            );
            for (let M = 0; M < P; M++) {
              const ne = this.similar_apps[M],
                ge = this.similarity_scores[M];
              h.push((0, t.jsx)(x, { appid: ne, score: ge }, ne));
            }
            return (0, t.jsxs)("div", {
              className: v.LabsMixer,
              children: [
                (0, t.jsx)(l.m, {
                  rgOptions: c,
                  onChange: this.OnModelChanged,
                  selectedOption: "default",
                }),
                (0, t.jsx)("h1", { children: "Mixture" }),
                e,
                g,
                (0, t.jsx)("h1", { children: "Games similar to mixture" }),
                (0, t.jsx)("div", { className: v.SimilarApps, children: h }),
              ],
            });
          }
        };
        i([E.sH], L.prototype, "operands", 2),
          i([E.sH], L.prototype, "similarity_model", 2),
          i([E.sH], L.prototype, "similar_apps", 2),
          i([E.sH], L.prototype, "similarity_scores", 2),
          i([f.oI], L.prototype, "OnModelChanged", 1),
          i([f.oI], L.prototype, "OnAddOperand", 1),
          i([f.oI], L.prototype, "OnOperandChanged", 1),
          (L = i([d.PA], L));
        let T = class extends D.Component {
          constructor(c) {
            super(c), (0, E.Gn)(this);
          }
          app_start = 0;
          app_end = 0;
          in_progress = !1;
          progress_iteration = 0;
          found_path = void 0;
          IterationCallback() {
            this.progress_iteration++;
          }
          Pathfind() {
            this.in_progress ||
              ((this.in_progress = !0),
              (this.progress_iteration = 0),
              (this.found_path = void 0),
              G.ComputePathBetweenApps(
                this.app_start,
                this.app_end,
                0.75,
                3,
                10,
                200,
                this.IterationCallback,
              )
                .then((c) => {
                  (this.in_progress = !1),
                    b.Vw.EnsureAppInfoForAppIDs(c.map((e) => e.appid)).then(
                      () => {
                        this.found_path = c;
                      },
                    );
                })
                .catch((c) => {
                  console.warn(
                    "Caught pathfinding failure because: " + c.toString(),
                  ),
                    (this.in_progress = !1),
                    (this.found_path = void 0);
                }));
          }
          OnSelectedStartApp(c) {
            b.Vw.EnsureAppInfoForAppIDs([c]).then(() => {
              this.app_start = c;
            });
          }
          OnSelectedEndApp(c) {
            b.Vw.EnsureAppInfoForAppIDs([c]).then(() => {
              this.app_end = c;
            });
          }
          render() {
            const c =
                this.app_start != 0 &&
                this.app_end != 0 &&
                !this.in_progress &&
                this.app_start != this.app_end,
              e = c ? v.ComputeButton : (0, n.A)(v.ComputeButton, v.Disable);
            let r = null;
            this.in_progress
              ? (r = (0, t.jsx)("div", {
                  className: v.ProgressMessage,
                  children: "Finding path, step " + this.progress_iteration,
                }))
              : this.found_path
                ? (r = (0, t.jsx)("div", {
                    className: v.ProgressMessage,
                    children: "Found path",
                  }))
                : (r = (0, t.jsx)("div", {
                    className: v.ProgressMessage,
                    children: "No path found",
                  }));
            let g = [];
            if (this.found_path)
              for (let h = 0; h < this.found_path.length; h++) {
                const P = this.found_path[h];
                g.push(
                  (0, t.jsx)(
                    x,
                    { appid: P.appid, score: P.similarity },
                    "pathstep" + h,
                  ),
                );
              }
            return (0, t.jsxs)("div", {
              className: v.LabsPathfinder,
              children: [
                (0, t.jsxs)("div", {
                  className: v.SelectEndpoints,
                  children: [
                    (0, t.jsx)(m, {
                      fnOnSelection: this.OnSelectedStartApp,
                      strPrompt: "Select start game",
                    }),
                    (0, t.jsx)(m, {
                      fnOnSelection: this.OnSelectedEndApp,
                      strPrompt: "Select end game",
                    }),
                  ],
                }),
                (0, t.jsx)("div", {
                  className: e,
                  onClick: c ? this.Pathfind : () => {},
                  children: "Pathfind!",
                }),
                r,
                (0, t.jsx)("div", { className: v.Path, children: g }),
              ],
            });
          }
        };
        i([E.sH], T.prototype, "app_start", 2),
          i([E.sH], T.prototype, "app_end", 2),
          i([E.sH], T.prototype, "in_progress", 2),
          i([E.sH], T.prototype, "progress_iteration", 2),
          i([E.sH], T.prototype, "found_path", 2),
          i([f.oI], T.prototype, "IterationCallback", 1),
          i([f.oI], T.prototype, "Pathfind", 1),
          i([f.oI], T.prototype, "OnSelectedStartApp", 1),
          i([f.oI], T.prototype, "OnSelectedEndApp", 1),
          (T = i([d.PA], T));
        function z() {
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)("h1", { children: "Similar Games" }),
              (0, t.jsx)(_, { max_similar: 10 }),
              (0, t.jsx)("div", { className: v.Spacer }),
              (0, t.jsx)("h1", { children: "Similarity" }),
              (0, t.jsx)(p, {}),
              (0, t.jsx)("div", { className: v.Spacer }),
              (0, t.jsx)("h1", { children: "Mixer" }),
              (0, t.jsx)(L, { max_similar: 10, max_operands: 6 }),
              (0, t.jsx)("div", { className: v.Spacer }),
              (0, t.jsx)("h1", { children: "Pathfinder" }),
              (0, t.jsx)(T, {}),
            ],
          });
        }
        var F = a(76559),
          W = a(8323),
          re = a(35038),
          V = a(80613),
          w = a.n(V),
          u = a(75245),
          he = a(78192);
        const xe = 0,
          ve = 1,
          Me = 2,
          I = 3,
          N = 4,
          Z = 5,
          K = 0,
          Y = 1,
          oe = 2,
          Oe = 3;
        function be(c) {
          return "unknown EStoreAppSimilarityPopularityFactor ( " + c + " )";
        }
        function Pe(c) {
          return "unknown EClustersFromPlaytimeSort ( " + c + " )";
        }
        class de extends V.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              de.prototype.tag_score_factor || u.Sg(de.M()),
              V.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              de.sm_m ||
                (de.sm_m = {
                  proto: de,
                  fields: {
                    tag_score_factor: {
                      n: 1,
                      d: 1,
                      br: u.qM.readDouble,
                      bw: u.gp.writeDouble,
                    },
                    playtime_max_seconds: {
                      n: 10,
                      d: 36e4,
                      br: u.qM.readInt32,
                      bw: u.gp.writeInt32,
                    },
                    playtime_max_games: {
                      n: 11,
                      d: 3,
                      br: u.qM.readInt32,
                      bw: u.gp.writeInt32,
                    },
                    playtime_score_factor: {
                      n: 12,
                      d: 0.9,
                      br: u.qM.readDouble,
                      bw: u.gp.writeDouble,
                    },
                    popularity_factor: {
                      n: 20,
                      d: Z,
                      br: u.qM.readEnum,
                      bw: u.gp.writeEnum,
                    },
                    popularity_reciprocal: {
                      n: 21,
                      d: 1e4,
                      br: u.qM.readInt32,
                      bw: u.gp.writeInt32,
                    },
                    popularity_base_score: {
                      n: 22,
                      d: "5000000",
                      br: u.qM.readInt64String,
                      bw: u.gp.writeInt64String,
                    },
                    played_since: {
                      n: 23,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                  },
                }),
              de.sm_m
            );
          }
          static MBF() {
            return de.sm_mbf || (de.sm_mbf = u.w0(de.M())), de.sm_mbf;
          }
          toObject(e = !1) {
            return de.toObject(e, this);
          }
          static toObject(e, r) {
            return u.BT(de.M(), e, r);
          }
          static fromObject(e) {
            return u.Uq(de.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (w().BinaryReader)(e),
              g = new de();
            return de.deserializeBinaryFromReader(g, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return u.zj(de.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (w().BinaryWriter)();
            return de.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            u.i0(de.M(), e, r);
          }
          serializeBase64String() {
            var e = new (w().BinaryWriter)();
            return (
              de.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "StoreAppSimilarityPriorityOptions";
          }
        }
        class ae extends V.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ae.prototype.steamid || u.Sg(ae.M()),
              V.Message.initialize(this, e, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ae.sm_m ||
                (ae.sm_m = {
                  proto: ae,
                  fields: {
                    steamid: {
                      n: 1,
                      br: u.qM.readFixed64String,
                      bw: u.gp.writeFixed64String,
                    },
                    country_code: {
                      n: 2,
                      br: u.qM.readString,
                      bw: u.gp.writeString,
                    },
                    ids: { n: 3, c: he.O4, r: !0, q: !0 },
                    options: { n: 4, c: de },
                    debug: { n: 5, br: u.qM.readBool, bw: u.gp.writeBool },
                    include_owned_games: {
                      n: 6,
                      br: u.qM.readBool,
                      bw: u.gp.writeBool,
                    },
                  },
                }),
              ae.sm_m
            );
          }
          static MBF() {
            return ae.sm_mbf || (ae.sm_mbf = u.w0(ae.M())), ae.sm_mbf;
          }
          toObject(e = !1) {
            return ae.toObject(e, this);
          }
          static toObject(e, r) {
            return u.BT(ae.M(), e, r);
          }
          static fromObject(e) {
            return u.Uq(ae.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (w().BinaryReader)(e),
              g = new ae();
            return ae.deserializeBinaryFromReader(g, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return u.zj(ae.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (w().BinaryWriter)();
            return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            u.i0(ae.M(), e, r);
          }
          serializeBase64String() {
            var e = new (w().BinaryWriter)();
            return (
              ae.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreAppSimilarity_PrioritizeAppsForUser_Request";
          }
        }
        class ie extends V.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ie.prototype.items || u.Sg(ie.M()),
              V.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ie.sm_m ||
                (ie.sm_m = {
                  proto: ie,
                  fields: { items: { n: 1, c: H, r: !0, q: !0 } },
                }),
              ie.sm_m
            );
          }
          static MBF() {
            return ie.sm_mbf || (ie.sm_mbf = u.w0(ie.M())), ie.sm_mbf;
          }
          toObject(e = !1) {
            return ie.toObject(e, this);
          }
          static toObject(e, r) {
            return u.BT(ie.M(), e, r);
          }
          static fromObject(e) {
            return u.Uq(ie.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (w().BinaryReader)(e),
              g = new ie();
            return ie.deserializeBinaryFromReader(g, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return u.zj(ie.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (w().BinaryWriter)();
            return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            u.i0(ie.M(), e, r);
          }
          serializeBase64String() {
            var e = new (w().BinaryWriter)();
            return (
              ie.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreAppSimilarity_PrioritizeAppsForUser_Response";
          }
        }
        class H extends V.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              H.prototype.id || u.Sg(H.M()),
              V.Message.initialize(this, e, 0, -1, [50], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              H.sm_m ||
                (H.sm_m = {
                  proto: H,
                  fields: {
                    id: { n: 1, c: he.O4 },
                    already_owned: {
                      n: 2,
                      br: u.qM.readBool,
                      bw: u.gp.writeBool,
                    },
                    weight: { n: 3, br: u.qM.readDouble, bw: u.gp.writeDouble },
                    weight_before_dedupe: {
                      n: 4,
                      br: u.qM.readDouble,
                      bw: u.gp.writeDouble,
                    },
                    debug_matches: { n: 50, c: le, r: !0, q: !0 },
                    debug_popularity: { n: 51, c: me },
                  },
                }),
              H.sm_m
            );
          }
          static MBF() {
            return H.sm_mbf || (H.sm_mbf = u.w0(H.M())), H.sm_mbf;
          }
          toObject(e = !1) {
            return H.toObject(e, this);
          }
          static toObject(e, r) {
            return u.BT(H.M(), e, r);
          }
          static fromObject(e) {
            return u.Uq(H.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (w().BinaryReader)(e),
              g = new H();
            return H.deserializeBinaryFromReader(g, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return u.zj(H.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (w().BinaryWriter)();
            return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            u.i0(H.M(), e, r);
          }
          serializeBase64String() {
            var e = new (w().BinaryWriter)();
            return (
              H.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreAppSimilarity_PrioritizeAppsForUser_Response_ResultItem";
          }
        }
        class le extends V.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              le.prototype.source_app || u.Sg(le.M()),
              V.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              le.sm_m ||
                (le.sm_m = {
                  proto: le,
                  fields: {
                    source_app: {
                      n: 1,
                      br: u.qM.readInt32,
                      bw: u.gp.writeInt32,
                    },
                    weight: { n: 2, br: u.qM.readDouble, bw: u.gp.writeDouble },
                    similarity: {
                      n: 3,
                      br: u.qM.readDouble,
                      bw: u.gp.writeDouble,
                    },
                  },
                }),
              le.sm_m
            );
          }
          static MBF() {
            return le.sm_mbf || (le.sm_mbf = u.w0(le.M())), le.sm_mbf;
          }
          toObject(e = !1) {
            return le.toObject(e, this);
          }
          static toObject(e, r) {
            return u.BT(le.M(), e, r);
          }
          static fromObject(e) {
            return u.Uq(le.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (w().BinaryReader)(e),
              g = new le();
            return le.deserializeBinaryFromReader(g, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return u.zj(le.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (w().BinaryWriter)();
            return le.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            u.i0(le.M(), e, r);
          }
          serializeBase64String() {
            var e = new (w().BinaryWriter)();
            return (
              le.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreAppSimilarity_PrioritizeAppsForUser_Response_ResultItem_MatchDebugInfo";
          }
        }
        class me extends V.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              me.prototype.rank || u.Sg(me.M()),
              V.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              me.sm_m ||
                (me.sm_m = {
                  proto: me,
                  fields: {
                    rank: { n: 1, br: u.qM.readUint32, bw: u.gp.writeUint32 },
                    popularity_factor: {
                      n: 2,
                      br: u.qM.readDouble,
                      bw: u.gp.writeDouble,
                    },
                    weight_before_popularity: {
                      n: 3,
                      br: u.qM.readDouble,
                      bw: u.gp.writeDouble,
                    },
                  },
                }),
              me.sm_m
            );
          }
          static MBF() {
            return me.sm_mbf || (me.sm_mbf = u.w0(me.M())), me.sm_mbf;
          }
          toObject(e = !1) {
            return me.toObject(e, this);
          }
          static toObject(e, r) {
            return u.BT(me.M(), e, r);
          }
          static fromObject(e) {
            return u.Uq(me.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (w().BinaryReader)(e),
              g = new me();
            return me.deserializeBinaryFromReader(g, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return u.zj(me.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (w().BinaryWriter)();
            return me.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            u.i0(me.M(), e, r);
          }
          serializeBase64String() {
            var e = new (w().BinaryWriter)();
            return (
              me.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreAppSimilarity_PrioritizeAppsForUser_Response_ResultItem_PopularityDebugInfo";
          }
        }
        class X extends V.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              X.prototype.steamid || u.Sg(X.M()),
              V.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              X.sm_m ||
                (X.sm_m = {
                  proto: X,
                  fields: {
                    steamid: {
                      n: 1,
                      br: u.qM.readFixed64String,
                      bw: u.gp.writeFixed64String,
                    },
                    sort: { n: 2, d: Y, br: u.qM.readEnum, bw: u.gp.writeEnum },
                    clusters_to_return: {
                      n: 3,
                      br: u.qM.readInt32,
                      bw: u.gp.writeInt32,
                    },
                    cluster_index: {
                      n: 4,
                      br: u.qM.readInt32,
                      bw: u.gp.writeInt32,
                    },
                    context: { n: 10, c: he.TS },
                    data_request: { n: 11, c: he.gn },
                  },
                }),
              X.sm_m
            );
          }
          static MBF() {
            return X.sm_mbf || (X.sm_mbf = u.w0(X.M())), X.sm_mbf;
          }
          toObject(e = !1) {
            return X.toObject(e, this);
          }
          static toObject(e, r) {
            return u.BT(X.M(), e, r);
          }
          static fromObject(e) {
            return u.Uq(X.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (w().BinaryReader)(e),
              g = new X();
            return X.deserializeBinaryFromReader(g, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return u.zj(X.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (w().BinaryWriter)();
            return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            u.i0(X.M(), e, r);
          }
          serializeBase64String() {
            var e = new (w().BinaryWriter)();
            return (
              X.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreAppSimilarity_IdentifyClustersFromPlaytime_Request";
          }
        }
        class ue extends V.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ue.prototype.clusters || u.Sg(ue.M()),
              V.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ue.sm_m ||
                (ue.sm_m = {
                  proto: ue,
                  fields: { clusters: { n: 1, c: Q, r: !0, q: !0 } },
                }),
              ue.sm_m
            );
          }
          static MBF() {
            return ue.sm_mbf || (ue.sm_mbf = u.w0(ue.M())), ue.sm_mbf;
          }
          toObject(e = !1) {
            return ue.toObject(e, this);
          }
          static toObject(e, r) {
            return u.BT(ue.M(), e, r);
          }
          static fromObject(e) {
            return u.Uq(ue.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (w().BinaryReader)(e),
              g = new ue();
            return ue.deserializeBinaryFromReader(g, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return u.zj(ue.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (w().BinaryWriter)();
            return ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            u.i0(ue.M(), e, r);
          }
          serializeBase64String() {
            var e = new (w().BinaryWriter)();
            return (
              ue.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreAppSimilarity_IdentifyClustersFromPlaytime_Response";
          }
        }
        class Q extends V.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Q.prototype.cluster_id || u.Sg(Q.M()),
              V.Message.initialize(this, e, 0, -1, [5, 6, 7], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Q.sm_m ||
                (Q.sm_m = {
                  proto: Q,
                  fields: {
                    cluster_id: {
                      n: 1,
                      br: u.qM.readInt32,
                      bw: u.gp.writeInt32,
                    },
                    playtime_forever: {
                      n: 2,
                      br: u.qM.readInt32,
                      bw: u.gp.writeInt32,
                    },
                    playtime_2weeks: {
                      n: 3,
                      br: u.qM.readInt32,
                      bw: u.gp.writeInt32,
                    },
                    last_played: {
                      n: 4,
                      br: u.qM.readUint32,
                      bw: u.gp.writeUint32,
                    },
                    played_appids: {
                      n: 5,
                      r: !0,
                      q: !0,
                      br: u.qM.readInt32,
                      pbr: u.qM.readPackedInt32,
                      bw: u.gp.writeRepeatedInt32,
                    },
                    similar_items_appids: {
                      n: 6,
                      r: !0,
                      q: !0,
                      br: u.qM.readInt32,
                      pbr: u.qM.readPackedInt32,
                      bw: u.gp.writeRepeatedInt32,
                    },
                    similar_items: { n: 7, c: he.vB, r: !0, q: !0 },
                    similar_item_popularity_score: {
                      n: 8,
                      br: u.qM.readDouble,
                      bw: u.gp.writeDouble,
                    },
                  },
                }),
              Q.sm_m
            );
          }
          static MBF() {
            return Q.sm_mbf || (Q.sm_mbf = u.w0(Q.M())), Q.sm_mbf;
          }
          toObject(e = !1) {
            return Q.toObject(e, this);
          }
          static toObject(e, r) {
            return u.BT(Q.M(), e, r);
          }
          static fromObject(e) {
            return u.Uq(Q.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (w().BinaryReader)(e),
              g = new Q();
            return Q.deserializeBinaryFromReader(g, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return u.zj(Q.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (w().BinaryWriter)();
            return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            u.i0(Q.M(), e, r);
          }
          serializeBase64String() {
            var e = new (w().BinaryWriter)();
            return (
              Q.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreAppSimilarity_IdentifyClustersFromPlaytime_Response_Cluster";
          }
        }
        var He;
        ((c) => {
          function e(g, h, P) {
            return g.SendMsg(
              "StoreAppSimilarity.PrioritizeAppsForUser#1",
              (0, re.I8)(ae, h, P),
              ie,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 2 },
            );
          }
          c.PrioritizeAppsForUser = e;
          function r(g, h, P) {
            return g.SendMsg(
              "StoreAppSimilarity.IdentifyClustersFromPlaytime#1",
              (0, re.I8)(X, h, P),
              ue,
              { ePrivilege: 2, eWebAPIKeyRequirement: 2 },
            );
          }
          c.IdentifyClustersFromPlaytime = r;
        })(He || (He = {}));
        var Ne = a(84192),
          Ve = a(10142);
        class ke {
          m_SteamInterface;
          constructor(e) {
            this.m_SteamInterface = e;
          }
          LoadPlaytimeClusters(e, r, g, h) {
            return new Ce(this.m_SteamInterface, e, r, g, h);
          }
        }
        class Ce {
          m_callbacksLoaded = new W.lu();
          m_rgClusters;
          constructor(e, r, g, h, P) {
            const M = re.w.Init(X);
            (0, Ne.rV)(M),
              P && (0, Ne.Bn)(M, P),
              M.Body().set_steamid(r || O.iA.steamid),
              h && M.Body().set_clusters_to_return(h),
              M.Body().set_sort(g),
              He.IdentifyClustersFromPlaytime(e.GetServiceTransport(), M).then(
                (ne) => {
                  const ge = ne.Body();
                  this.m_rgClusters = [];
                  for (const fe of ge.clusters())
                    this.m_rgClusters.push(this.ReadCluster(fe, P));
                  this.m_callbacksLoaded.Dispatch(this.m_rgClusters);
                },
              );
          }
          ReadCluster(e, r) {
            let g;
            return (
              r &&
                (g = e.similar_items().map((h) => Ve.A.Get().ReadItem(h, r))),
              {
                nClusterID: e.cluster_id(),
                nPlaytimeMinutes: e.playtime_forever(),
                nPlaytimeMinutes2Weeks: e.playtime_2weeks(),
                rtLastPlayed: e.last_played(),
                rgAppIDsPlayed: e.played_appids(),
                rgSimilarItems: g.filter((h) => !!h),
                rgSimilarAppIDs: e.similar_items_appids(),
                flPopularityScore: e.similar_item_popularity_score(),
              }
            );
          }
          RegisterOnReadyCallback(e) {
            const r = this.m_callbacksLoaded.Register(e);
            return (
              this.m_rgClusters !== void 0 &&
                window.setTimeout(() => e(this.m_rgClusters), 0),
              r
            );
          }
        }
        function Re(c, e, r, g = Y, h = null, P = []) {
          const [M, ne] = D.useState(null);
          return (
            D.useEffect(
              () => (
                ne(null),
                r
                  ? c
                      .LoadPlaytimeClusters(r, g, h, e)
                      .RegisterOnReadyCallback(ne).Unregister
                  : void 0
              ),
              [r, g, h, ...P],
            ),
            M
          );
        }
        var Je = a(85599),
          Ie = a(18210),
          Ge = a(21082),
          st = a(84676),
          Fe = a(25792),
          nt = a(2259);
        function at(c) {
          const { SteamInterface: e } = c,
            r = D.useRef(void 0);
          return (
            r.current || (r.current = new ke(e)),
            (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsxs)("div", {
                  children: [
                    (0, t.jsx)("p", {
                      children:
                        "This data is generated by analyzing games based on similar tags, and generating clusters from that.  We then look at your playtime history to see what games are in clusters together, and suggest other popular games in those clusters.",
                    }),
                    (0, t.jsxs)("p", {
                      children: [
                        "You can also ",
                        (0, t.jsx)("a", {
                          href: "http://store-tc.k.steam.net/graph",
                          target: "_blank",
                          children: "browse the cluster data graphically",
                        }),
                        " (requires Rack VPN).",
                      ],
                    }),
                  ],
                }),
                (0, t.jsx)(rt, { SimilarityStore: r.current }),
              ],
            })
          );
        }
        const Xe = {
          [Oe]: "Total Playtime",
          [oe]: "Number of Played Games",
          [Y]: "Most Recently Played",
        };
        function rt(c) {
          const { SimilarityStore: e } = c,
            [r, g] = D.useState(O.iA.steamid),
            [h, P] = D.useState("10"),
            [M, ne] = D.useState(Y),
            ge = D.useCallback((Ae) => g(Ae.currentTarget.value), [g]),
            fe = D.useCallback((Ae) => P(Ae.currentTarget.value), [P]),
            we = D.useCallback((Ae) => ne(Ae.data), [ne]);
          let De = !1;
          const Se = D.useRef(O.iA.steamid),
            _e = r && new F.b(r);
          _e &&
            _e.BIsValid() &&
            _e.BIsIndividualAccount() &&
            ((Se.current = _e.ConvertTo64BitString()), (De = !0));
          let je;
          h && !isNaN(parseInt(h)) && (je = parseInt(h));
          const Ee = D.useMemo(() => {
              let Ae = [];
              for (let Ke in Xe) Ae.push({ data: Number(Ke), label: Xe[Ke] });
              return Ae;
            }, []),
            pe = Re(
              e,
              { include_assets: !0, include_basic_info: !0 },
              Se.current,
              M,
              je,
            );
          return (0, t.jsxs)("div", {
            children: [
              (0, t.jsxs)(l.nB, {
                className: Ge.ClusterConfig,
                children: [
                  (0, t.jsx)(l.pd, {
                    label: "SteamID",
                    type: "text",
                    value: r,
                    onChange: ge,
                    description: !De && "Invalid SteamID",
                  }),
                  (0, t.jsx)(l.pd, {
                    label: "Clusters to return (Set to blank for all clusters)",
                    type: "text",
                    value: h,
                    onChange: fe,
                  }),
                  (0, t.jsx)(l.m, {
                    label: "Sort clusters by",
                    rgOptions: Ee,
                    selectedOption: M,
                    onChange: we,
                  }),
                ],
              }),
              De && !pe && (0, t.jsx)(Je.t, {}),
              pe && (0, t.jsx)(ot, { rgPlaytimeClusters: pe }),
            ],
          });
        }
        function ot(c) {
          const { rgPlaytimeClusters: e } = c;
          return (0, t.jsx)("div", {
            children: e.map((r) =>
              (0, t.jsx)(
                Fe.tH,
                { children: (0, t.jsx)(it, { cluster: r }) },
                r.nClusterID,
              ),
            ),
          });
        }
        function it(c) {
          const { cluster: e } = c,
            [r, g] = D.useState(!1),
            h = D.useCallback(() => g(!0), [g]),
            [P, M] = D.useState(!1),
            ne = D.useCallback(() => M(!0), [M]),
            ge = (0, nt.OO)({ onEnter: ne });
          return (0, t.jsxs)("div", {
            ref: ge,
            className: Ge.PlaytimeCluster,
            children: [
              (0, t.jsxs)("div", {
                className: Ge.ClusterInfo,
                children: [
                  (0, t.jsxs)("h1", { children: ["Cluster ", e.nClusterID] }),
                  (0, t.jsx)(Fe.tH, {
                    children: (0, t.jsxs)("div", {
                      className: Ge.Overview,
                      children: [
                        (0, t.jsxs)("div", {
                          children: [
                            (0, t.jsx)("b", { children: "Total Playtime:" }),
                            " ",
                            Math.floor(e.nPlaytimeMinutes / 6) / 10,
                            "hr",
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          children: [
                            (0, t.jsx)("b", { children: "Last Played:" }),
                            " ",
                            (0, Ie.$z)(e.rtLastPlayed),
                            " ",
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          children: [
                            (0, t.jsx)("b", { children: "Games played:" }),
                            " ",
                            P &&
                              e.rgAppIDsPlayed.map((fe) =>
                                (0, t.jsxs)(
                                  D.Fragment,
                                  {
                                    children: [
                                      (0, t.jsx)(ct, { appid: fe }),
                                      ", ",
                                    ],
                                  },
                                  fe,
                                ),
                              ),
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          children: [
                            (0, t.jsx)("b", { children: "Popularity Score:" }),
                            " ",
                            Math.floor(e.flPopularityScore * 100),
                            "% \xA0",
                            (0, t.jsx)("span", {
                              title:
                                "Based on the top four items; we might decide not to show clusters if this score is less than some threshold, maybe 90%",
                              style: { cursor: "default" },
                              children: "(?)",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                className: Ge.ClusterMembers,
                children: [
                  (0, t.jsx)("h3", { children: "Similar titles:" }),
                  (0, t.jsx)(Fe.tH, {
                    children: (0, t.jsx)("ul", {
                      children: e.rgSimilarItems.map((fe, we) =>
                        r || we < 4
                          ? (0, t.jsx)(
                              "li",
                              { children: (0, t.jsx)(dt, { item: fe }) },
                              fe.GetUniqueID(),
                            )
                          : null,
                      ),
                    }),
                  }),
                  !r &&
                    (0, t.jsxs)(l.$n, {
                      onClick: h,
                      children: ["Show all ", e.rgSimilarItems.length],
                    }),
                ],
              }),
            ],
          });
        }
        const lt = {};
        function ct(c) {
          const { appid: e } = c,
            [r] = (0, st.t7)(e, lt);
          return r
            ? (0, t.jsx)("a", {
                className: Ge.PlayedGame,
                href: r.GetStorePageURL(),
                children: r.GetName(),
              })
            : null;
        }
        function dt(c) {
          const { item: e } = c;
          return (0, t.jsxs)("a", {
            className: Ge.SimilarTitle,
            href: e.GetStorePageURL(),
            children: [
              (0, t.jsx)("img", {
                src: e.GetAssets().GetSmallCapsuleURL(),
                loading: "lazy",
              }),
              e.GetName(),
            ],
          });
        }
        var Ye = a(36118),
          ut = a(73236),
          se = a.n(ut),
          $e = a(64434),
          mt = a(27066),
          ht = Object.defineProperty,
          pt = Object.getOwnPropertyDescriptor,
          ye = (c, e, r, g) => {
            for (
              var h = g > 1 ? void 0 : g ? pt(e, r) : e, P = c.length - 1, M;
              P >= 0;
              P--
            )
              (M = c[P]) && (h = (g ? M(e, r, h) : M(h)) || h);
            return g && h && ht(e, r, h), h;
          };
        const qe = "-1";
        var Be = ((c) => (
            (c[(c.Invalid = 0)] = "Invalid"),
            (c[(c.AccountName = 1)] = "AccountName"),
            (c[(c.EmailCode = 2)] = "EmailCode"),
            (c[(c.TwoFactorCode = 3)] = "TwoFactorCode"),
            (c[(c.Complete = 4)] = "Complete"),
            c
          ))(Be || {}),
          et = ((c) => (
            (c[(c.None = 0)] = "None"),
            (c[(c.InvalidCode = 1)] = "InvalidCode"),
            c
          ))(et || {});
        class Te {
          m_strBaseURL = "";
          m_strOAuthClientID = "";
          m_fnLoginComplete = null;
          m_bRequestInFlight = !1;
          m_userFields = void 0;
          m_eCurrentStep = 1;
          m_strErrorMessage = "";
          m_strEmailDomain = "";
          m_strCaptchaURL = "";
          m_eSteamGuardCodeError = 0;
          constructor(e, r) {
            (0, E.Gn)(this),
              (this.m_strBaseURL = e),
              (this.m_strOAuthClientID = r),
              (this.m_userFields = {
                strUserName: "",
                strPassword: "",
                strTwoFactorCode: "",
                strEmailAuthCode: "",
                emailSteamID: "",
                gidCaptcha: "",
                strCaptchaText: "",
                bRememberLogin: !1,
              });
          }
          Shutdown() {
            this.m_fnLoginComplete = null;
          }
          SetLoginCompleteCallback(e) {
            this.m_fnLoginComplete = e;
          }
          SetUserName(e) {
            this.m_userFields.strUserName = e;
          }
          GetUserName() {
            return this.m_userFields.strUserName;
          }
          SetPassword(e) {
            this.m_userFields.strPassword = e;
          }
          GetPassword() {
            return this.m_userFields.strPassword;
          }
          SetRememberPassword(e) {
            this.m_userFields.bRememberLogin = e;
          }
          GetRememberPassword() {
            return this.m_userFields.bRememberLogin;
          }
          SetEmailAuthCode(e) {
            this.m_userFields.strEmailAuthCode = e;
          }
          GetEmailAuthCode() {
            return this.m_userFields.strEmailAuthCode;
          }
          GetEmailDomain() {
            return this.m_strEmailDomain;
          }
          SetTwoFactorCode(e) {
            this.m_userFields.strTwoFactorCode = e;
          }
          GetTwoFactorCode() {
            return this.m_userFields.strTwoFactorCode;
          }
          SetCaptchaText(e) {
            this.m_userFields.strCaptchaText = e;
          }
          GetCaptchaText() {
            return this.m_userFields.strCaptchaText;
          }
          IsRequestInFlight() {
            return this.m_bRequestInFlight;
          }
          GetCurrentStep() {
            return this.m_eCurrentStep;
          }
          GetErrorMessage() {
            return this.m_strErrorMessage;
          }
          SetInitialErrorMessage(e) {
            this.m_strErrorMessage = e;
          }
          GetSteamGuardCodeError() {
            return this.m_eSteamGuardCodeError;
          }
          GetCaptchaURL() {
            return this.m_strCaptchaURL;
          }
          async DoLogin() {
            if (this.m_bRequestInFlight) return;
            (0, E.h5)(() => {
              (this.m_bRequestInFlight = !0), (this.m_strErrorMessage = "");
            });
            let e = await (0, $e.ZC)(
              this.m_strBaseURL,
              this.m_strOAuthClientID,
              this.m_userFields,
            );
            (0, E.h5)(() => {
              (this.m_bRequestInFlight = !1), this.UpdateLoginResult(e);
            });
          }
          UpdateLoginResult(e) {
            if (!e) {
              console.log("Login timeout"),
                (this.m_strErrorMessage = (0, Ie.we)(
                  "#ConnectionTrouble_FailedToConnect",
                ));
              return;
            }
            if (e.login_complete) {
              if (((this.m_eCurrentStep = 4), this.m_fnLoginComplete)) {
                let r = {
                  steamID: e.oauth ? e.oauth.steamid : "",
                  strAccountName: e.oauth ? e.oauth.account_name : "",
                  strOAuthToken: e.oauth ? e.oauth.oauth_token : "",
                };
                this.m_fnLoginComplete(r);
              }
              return;
            }
            (this.m_strErrorMessage = e.message || ""),
              (this.m_eSteamGuardCodeError = 0),
              e.requires_twofactor
                ? (this.UpdateCaptchaURL(qe),
                  this.m_eCurrentStep == 3 &&
                    !this.m_strErrorMessage &&
                    ((this.m_strErrorMessage = (0, Ie.we)(
                      "#MobileLogin_IncorrectSteamGuard",
                    )),
                    (this.m_eSteamGuardCodeError = 1),
                    (this.m_userFields.strTwoFactorCode = "")),
                  (this.m_eCurrentStep = 3))
                : e.captcha_needed && e.captcha_gid
                  ? ((this.m_eCurrentStep = 1),
                    this.UpdateCaptchaURL(e.captcha_gid))
                  : e.emailauth_needed
                    ? (e.emaildomain && (this.m_strEmailDomain = e.emaildomain),
                      e.emailsteamid &&
                        (this.m_userFields.emailSteamID = e.emailsteamid),
                      this.m_eCurrentStep == 2 &&
                        !this.m_strErrorMessage &&
                        ((this.m_strErrorMessage = (0, Ie.we)(
                          "#MobileLogin_IncorrectSteamGuard",
                        )),
                        (this.m_eSteamGuardCodeError = 1),
                        (this.m_userFields.strEmailAuthCode = "")),
                      (this.m_eCurrentStep = 2))
                    : e.agreement_session_url
                      ? (this.Shutdown(),
                        console.log(window.location.href),
                        (window.location.href =
                          e.agreement_session_url +
                          "&redir=" +
                          window.location.href))
                      : console.log("Unhandled login error");
          }
          async RefreshCaptcha() {
            let e = await (0, $e.Cr)(this.m_strBaseURL);
            if (!e) {
              console.log("Failed to get captcha");
              return;
            }
            this.UpdateCaptchaURL(e);
          }
          UpdateCaptchaURL(e) {
            if (
              ((this.m_userFields.gidCaptcha = e),
              (this.m_userFields.strCaptchaText = ""),
              e == qe)
            ) {
              this.m_strCaptchaURL = "";
              return;
            }
            this.m_strCaptchaURL = (0, $e.Ok)(this.m_strBaseURL, e);
          }
        }
        ye([E.sH], Te.prototype, "m_bRequestInFlight", 2),
          ye([E.sH], Te.prototype, "m_userFields", 2),
          ye([E.sH], Te.prototype, "m_eCurrentStep", 2),
          ye([E.sH], Te.prototype, "m_strErrorMessage", 2),
          ye([E.sH], Te.prototype, "m_strEmailDomain", 2),
          ye([E.sH], Te.prototype, "m_strCaptchaURL", 2),
          ye([E.sH], Te.prototype, "m_eSteamGuardCodeError", 2),
          ye([mt.o], Te.prototype, "DoLogin", 1),
          ye([E.XI.bound], Te.prototype, "UpdateCaptchaURL", 1);
        var ft = Object.defineProperty,
          gt = Object.getOwnPropertyDescriptor,
          Le = (c, e, r, g) => {
            for (
              var h = g > 1 ? void 0 : g ? gt(e, r) : e, P = c.length - 1, M;
              P >= 0;
              P--
            )
              (M = c[P]) && (h = (g ? M(e, r, h) : M(h)) || h);
            return g && h && ft(e, r, h), h;
          };
        let Ze = class extends D.Component {
          m_manager;
          constructor(c) {
            super(c),
              (this.m_manager = new Te(this.props.baseURL)),
              this.props.onLoginComplete &&
                this.m_manager.SetLoginCompleteCallback(
                  this.props.onLoginComplete,
                );
          }
          componentWillUnmount() {
            this.m_manager.Shutdown();
          }
          render() {
            let {
                baseURL: c,
                onLoginComplete: e,
                className: r,
                ...g
              } = this.props,
              h = (0, n.A)(se().LoginDialog, r),
              P = this.m_manager.GetCurrentStep(),
              M = this.m_manager.GetErrorMessage();
            return (0, t.jsxs)("div", {
              className: h,
              ...g,
              children: [
                (0, t.jsx)("div", {
                  className: se().LoginPanelBackground,
                  children: (0, t.jsx)(Ye.Qte, {}),
                }),
                (0, t.jsxs)("div", {
                  className: se().LoginPanelContent,
                  children: [
                    M && (0, t.jsx)(vt, { text: M }),
                    P == Be.AccountName &&
                      (0, t.jsx)(We, {
                        manager: this.m_manager,
                        autoFocus: this.props.autoFocus,
                      }),
                    P == Be.TwoFactorCode &&
                      (0, t.jsx)(Ue, {
                        manager: this.m_manager,
                        authtype: Be.TwoFactorCode,
                      }),
                    P == Be.EmailCode &&
                      (0, t.jsx)(Ue, {
                        manager: this.m_manager,
                        authtype: Be.EmailCode,
                      }),
                    P == Be.Complete &&
                      (0, t.jsx)("div", {
                        className: se().LoginComplete,
                        children: (0, t.jsx)(Je.t, {}),
                      }),
                  ],
                }),
              ],
            });
          }
        };
        Ze = Le([d.PA], Ze);
        function vt(c) {
          return (0, t.jsx)("div", {
            className: se().ErrorMessage,
            children: c.text,
          });
        }
        let We = class extends D.Component {
          constructor(c) {
            super(c), (this.state = { nNameSize: 0, nPassSize: 0 });
          }
          OnSubmit(c) {
            c.preventDefault(), this.props.manager.DoLogin();
          }
          OnChangeName(c) {
            let e = c.target.value || "";
            this.props.manager.SetUserName(c.target.value),
              e.length > 24 && e.length < 39
                ? this.setState({ nNameSize: 1 })
                : e.length > 38
                  ? this.setState({ nNameSize: 2 })
                  : this.setState({ nNameSize: 0 });
          }
          OnChangePassword(c) {
            let e = c.target.value || "";
            (e = e.replace(/[^\x00-\x7F]/g, "")),
              this.props.manager.SetPassword(e),
              e.length > 19 && e.length < 39
                ? this.setState({ nPassSize: 1 })
                : e.length > 38
                  ? this.setState({ nPassSize: 2 })
                  : this.setState({ nPassSize: 0 });
          }
          OnChangeRememberPass(c) {
            this.props.manager.SetRememberPassword(c.target.checked);
          }
          render() {
            let c = this.props.manager,
              e,
              r;
            return (
              this.state.nPassSize == 1
                ? (r = se().MedPass)
                : this.state.nPassSize == 2
                  ? (r = se().LargePass)
                  : (r = se().DefaultPass),
              this.state.nNameSize == 1
                ? (e = se().MedName)
                : this.state.nNameSize == 2
                  ? (e = se().LargeName)
                  : (e = se().DefaultNAme),
              (0, t.jsxs)("div", {
                className: se().AccountPasswordPanel,
                children: [
                  (0, t.jsx)("div", {
                    className: se().SigninTitle,
                    children: (0, Ie.we)("#Login_SignInTitle"),
                  }),
                  (0, t.jsxs)("form", {
                    className: se().AccountPasswordForm,
                    onSubmit: this.OnSubmit,
                    children: [
                      (0, t.jsx)(l.pd, {
                        autoFocus: this.props.autoFocus,
                        className: (0, n.A)(se().AccountNameLabel, e),
                        label: (0, Ie.we)("#Login_AccountName"),
                        type: "text",
                        value: c.GetUserName(),
                        focusOnMount: !0,
                        maxLength: 64,
                        onChange: this.OnChangeName,
                      }),
                      (0, t.jsx)(l.pd, {
                        className: (0, n.A)(se().PasswordDots, r),
                        label: (0, Ie.we)("#Login_Password"),
                        type: "password",
                        autoComplete: "off",
                        maxLength: 64,
                        size: 64,
                        value: c.GetPassword(),
                        onChange: this.OnChangePassword,
                      }),
                      (0, t.jsx)(l.Yh, {
                        className: se().RememberMeCheck,
                        label: (0, Ie.we)("#Login_RememberMe"),
                        disabled: !1,
                        onChange: () => this.OnChangeRememberPass,
                        checked: c.GetRememberPassword(),
                      }),
                      c.GetCaptchaURL() && (0, t.jsx)(ze, { manager: c }),
                      (0, t.jsx)(l.jn, {
                        disabled: this.props.manager.IsRequestInFlight(),
                        children: (0, Ie.we)(
                          "#Login_SignIn",
                        ).toLocaleUpperCase(),
                      }),
                    ],
                  }),
                  (0, t.jsx)("a", {
                    className: se().NeedHelpLink,
                    href: O.TS.HELP_BASE_URL,
                    children: (0, Ie.we)("#Login_ForgotPassword"),
                  }),
                  (0, t.jsx)("div", { className: se().LoginCreateSeperator }),
                  (0, t.jsxs)("div", {
                    className: se().SteamUpsellContainer,
                    children: [
                      (0, t.jsx)("div", {
                        className: se().SteamUpsell,
                        children: (0, Ie.we)("#Login_NoSteamAccount"),
                      }),
                      (0, t.jsx)("div", {
                        className: se().CreateAccountLink,
                        children: (0, t.jsx)("a", {
                          href: `${O.TS.STORE_BASE_URL}join/`,
                          children: (0, Ie.we)("#Login_CreateAccount"),
                        }),
                      }),
                    ],
                  }),
                ],
              })
            );
          }
        };
        Le([f.oI], We.prototype, "OnSubmit", 1),
          Le([f.oI], We.prototype, "OnChangeName", 1),
          Le([f.oI], We.prototype, "OnChangePassword", 1),
          Le([f.oI], We.prototype, "OnChangeRememberPass", 1),
          (We = Le([d.PA], We));
        let ze = class extends D.Component {
          OnCaptchaText(c) {
            this.props.manager.SetCaptchaText(c.target.value);
          }
          RefreshCaptcha(c) {
            this.props.manager.RefreshCaptcha();
          }
          render() {
            let c = this.props.manager;
            return (0, t.jsxs)("div", {
              className: se().CaptchaContainer,
              children: [
                (0, t.jsxs)("div", {
                  className: se().CaptchaBlock,
                  children: [
                    (0, t.jsxs)("div", {
                      className: se().CaptchaImageAndInput,
                      children: [
                        (0, t.jsx)("div", {
                          className: se().CaptchaImageBox,
                          children: (0, t.jsx)("img", {
                            className: se().CaptchaImage,
                            src: c.GetCaptchaURL(),
                          }),
                        }),
                        (0, t.jsx)(l.pd, {
                          className: se().CaptchaInput,
                          type: "text",
                          autoComplete: "off",
                          maxLength: 6,
                          value: c.GetCaptchaText(),
                          onChange: this.OnCaptchaText,
                        }),
                      ],
                    }),
                    (0, t.jsx)("div", {
                      className: se().ErrorMessage,
                      children: (0, Ie.we)("#Login_CaptchaVerification"),
                    }),
                  ],
                }),
                (0, t.jsx)("div", {
                  children: (0, t.jsx)("span", {
                    className: se().RefreshCaptchaText,
                    onClick: this.RefreshCaptcha,
                    children: (0, Ie.we)("#Login_RefreshCaptcha"),
                  }),
                }),
              ],
            });
          }
        };
        Le([f.oI], ze.prototype, "OnCaptchaText", 1),
          Le([f.oI], ze.prototype, "RefreshCaptcha", 1),
          (ze = Le([d.PA], ze));
        let Ue = class extends D.Component {
          OnSubmit(c) {
            c.preventDefault(), this.props.manager.DoLogin();
          }
          OnChangeAuthCode(c) {
            this.props.authtype == Be.TwoFactorCode
              ? this.props.manager.SetTwoFactorCode(c.target.value)
              : this.props.manager.SetEmailAuthCode(c.target.value);
          }
          render() {
            let c = this.props.manager,
              e = "",
              r = null,
              g = "",
              h,
              P = c.GetSteamGuardCodeError() == et.InvalidCode;
            switch (this.props.authtype) {
              case Be.TwoFactorCode:
                (e = c.GetTwoFactorCode()),
                  (r = (0, Ie.we)("#Login_Enter2FA")),
                  (h = (0, t.jsx)(Ye.kaY, {})),
                  (g = (0, Ie.we)("#Login_Enter2FAHelp"));
                break;
              case Be.EmailCode:
                (e = c.GetEmailAuthCode()),
                  (r = (0, Ie.PP)(
                    "#Login_SentSteamguard",
                    (0, t.jsxs)("span", {
                      className: se().Highlight,
                      children: ["@", c.GetEmailDomain()],
                    }),
                  )),
                  (g = (0, Ie.we)("#Login_EnterSteamguard")),
                  (h = (0, t.jsx)(Ye.Lh2, {}));
                break;
              default:
                break;
            }
            return (0, t.jsxs)("div", {
              className: se().AuthenticationPanel,
              children: [
                (0, t.jsx)(l.JU, { children: (0, Ie.we)("#Login_SigningIn") }),
                (0, t.jsx)("div", {
                  className: se().SigningInAccountName,
                  children: c.GetUserName(),
                }),
                (0, t.jsx)(l.a3, { children: r }),
                (0, t.jsxs)("div", {
                  className: se().AuthenticatorInputcontainer,
                  children: [
                    h,
                    (0, t.jsxs)("form", {
                      className: se().AccountPasswordForm,
                      onSubmit: this.OnSubmit,
                      children: [
                        (0, t.jsx)(l.pd, {
                          className: (0, n.A)(se().AccountName),
                          label: "Steam Guard Code",
                          type: "text",
                          autoComplete: "off",
                          focusOnMount: !0,
                          maxLength: 64,
                          value: e,
                          onChange: this.OnChangeAuthCode,
                        }),
                        (0, t.jsx)(l.jn, {
                          disabled: this.props.manager.IsRequestInFlight(),
                          children: (0, Ie.we)(
                            "#Login_SteamguardSubmit",
                          ).toLocaleUpperCase(),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, t.jsx)("a", {
                  className: (0, n.A)(
                    se().NeedHelpLink,
                    P ? se().NeedHelpHighlight : null,
                  ),
                  href: "http://help.steampowered.com/",
                  children: g,
                }),
              ],
            });
          }
        };
        Le([f.oI], Ue.prototype, "OnSubmit", 1),
          Le([f.oI], Ue.prototype, "OnChangeAuthCode", 1),
          (Ue = Le([d.PA], Ue));
        var xt = a(68312);
        const tt = [
          {
            path: "similarity",
            render: () => (0, t.jsx)(z, {}),
            name: "ML Similarity",
          },
          {
            path: "clustering",
            render: (c) => (0, t.jsx)(at, { SteamInterface: c.SteamInterface }),
            name: "Tag Clustering",
            requires_login: !0,
          },
        ];
        function _t(c) {
          const [e, r] = D.useState(!1),
            g = O.iA.logged_in,
            h = (0, xt.TR)();
          if (
            ((0, D.useEffect)(() => {
              G.Init(h), r(!0);
            }, [h]),
            !e)
          )
            return (0, t.jsx)("div", { className: v.App });
          const P = { SteamInterface: h };
          return (0, t.jsx)("div", {
            className: v.App,
            children: (0, t.jsxs)("div", {
              className: v.Container,
              children: [
                (0, t.jsxs)("div", {
                  className: v.TopSection,
                  children: [
                    (0, t.jsx)("div", {
                      className: v.Header,
                      children: "Labs Sandbox",
                    }),
                    (0, t.jsx)("div", {
                      className: v.Body,
                      children:
                        "Internal testbed page for Steam Labs experiments",
                    }),
                  ],
                }),
                (0, t.jsx)("div", {
                  className: v.Tabs,
                  children: tt.map((M) =>
                    (0, t.jsx)(
                      ee.k2,
                      {
                        to: `${A.B.LabsSandbox()}/${M.path}`,
                        className: v.Tab,
                        activeClassName: v.Active,
                        children: M.name,
                      },
                      M.path,
                    ),
                  ),
                }),
                (0, t.jsx)("div", {
                  className: v.SandboxSection,
                  children: (0, t.jsx)(Fe.tH, {
                    children: (0, t.jsx)(k.dO, {
                      children: tt.map((M, ne) =>
                        (0, t.jsx)(
                          k.qh,
                          {
                            path: `${A.B.LabsSandbox()}/${M.path}`,
                            render: (ge) =>
                              !M.requires_login || g
                                ? M.render({ ...ge, ...P })
                                : (0, t.jsx)(It, {}),
                          },
                          M.path,
                        ),
                      ),
                    }),
                  }),
                }),
              ],
            }),
          });
        }
        function It() {
          return (0, t.jsxs)("div", {
            children: [
              (0, t.jsx)("h3", { children: "Please login to view this page." }),
              (0, t.jsx)(Ze, {
                baseURL: O.TS.STORE_BASE_URL,
                onLoginComplete: () => window.location.reload(),
              }),
            ],
          });
        }
      },
      25996: (q, te, a) => {
        "use strict";
        a.r(te), a.d(te, { default: () => d });
        var t = a(7850),
          A = a(29522),
          b = a(40358),
          O = a(41735),
          E = a.n(O),
          f = a(90626),
          R = a(19681),
          $ = a(86390),
          ce = a(95414),
          J = a(51079),
          B = a(36707),
          j = a(18210),
          U = a(3166),
          y = a(32792),
          G = a.n(y),
          D = a(16412);
        const ee = (n) => {
            const s = (0, A.$5)(n.nAppID),
              o = (0, b.lv)(s),
              i = (0, b.J$)(s);
            if (!o.data || !i.data) return null;
            const m = (0, R.l)(o.data, "header");
            return (0, t.jsxs)("div", {
              className: y.AppCapsule,
              children: [
                (0, t.jsx)(ce.u, {
                  id: s,
                  children: (0, t.jsx)("img", { className: y.Image, src: m }),
                }),
                (0, t.jsxs)("div", {
                  className: y.UnderInfo,
                  children: [
                    (0, t.jsx)("div", {
                      className: y.Name,
                      children: i.data.name,
                    }),
                    n.fWeight &&
                      (0, t.jsx)("div", {
                        className: y.Weight,
                        children: `${(n.fWeight * 100).toFixed(2)}%`,
                      }),
                  ],
                }),
              ],
            });
          },
          k = (n) => {
            const [s, o] = f.useState([]),
              [i, m] = f.useState([]);
            return (
              f.useEffect(() => {
                (async () => {
                  const p = {
                    rec: n.strName,
                    max: 40,
                    exclude: n.bExclude ? 1 : 0,
                    accountid: n.nAccountID,
                  };
                  try {
                    const _ = await E().get(
                      `${U.TS.STORE_BASE_URL}recommenderdemos/getlist`,
                      { params: p, timeout: 1e4 },
                    );
                    o(_.data.appids), m(_.data.weights);
                  } catch (_) {
                    console.error("Error fetching data", _);
                  }
                })();
              }, [n.strName, n.nAccountID, n.bExclude]),
              (0, t.jsxs)("div", {
                className: y.RecommenderList,
                children: [
                  (0, t.jsx)("div", {
                    className: y.Title,
                    children: n.strTitle,
                  }),
                  (0, t.jsx)("div", {
                    className: y.SubTitle,
                    children: n.strSubtitle,
                  }),
                  (0, t.jsx)("div", {
                    className: y.CapsuleList,
                    children: s?.map((x, p) =>
                      (0, t.jsx)(
                        ee,
                        { nAppID: x, fWeight: i[p] },
                        `${n.strName}_${p}`,
                      ),
                    ),
                  }),
                ],
              })
            );
          },
          v = (n) =>
            (0, t.jsxs)("div", {
              className: y.RecommenderList,
              children: [
                (0, t.jsx)("div", { className: y.Title, children: n.strName }),
                (0, t.jsx)("div", {
                  className: y.SubTitle,
                  children: (0, j.we)("#RecommenderDemos_ReleasedGames"),
                }),
                (0, t.jsx)("div", {
                  className: y.CapsuleList,
                  children: n.arrPlaytimeAppIDs.map((s, o) =>
                    (0, t.jsx)(ee, { nAppID: s }, `${n.strName}_${o}`),
                  ),
                }),
                (0, t.jsx)("div", { className: y.Spacer }),
                (0, t.jsx)("div", {
                  className: y.SubTitle,
                  children: (0, j.we)("#RecommenderDemos_UnreleasedGames"),
                }),
                (0, t.jsx)("div", {
                  className: y.CapsuleList,
                  children: n.arrWishlistAppIDs.map((s, o) =>
                    (0, t.jsx)(ee, { nAppID: s }, `${n.strName}_${o}`),
                  ),
                }),
              ],
            }),
          l = (n) => {
            const [s, o] = f.useState(void 0);
            return (
              f.useEffect(() => {
                (async () => {
                  const m = {
                    max: 40,
                    exclude: n.bExclude ? 1 : 0,
                    accountid: n.nAccountID,
                  };
                  try {
                    const x = await E().get(
                      `${U.TS.STORE_BASE_URL}recommenderdemos/getfests`,
                      { params: m, timeout: 1e4 },
                    );
                    o(x.data);
                  } catch (x) {
                    console.error("Error fetching data", x);
                  }
                })();
              }, [n.bExclude, n.nAccountID]),
              (0, t.jsx)("div", {
                className: y.RecommenderFests,
                children: s?.map((i) =>
                  (0, t.jsx)(
                    v,
                    {
                      strName: i.title,
                      nStartTime: i.start_date,
                      nEndTime: i.end_date,
                      arrPlaytimeAppIDs: i.playtime_appids,
                      arrWishlistAppIDs: i.wishlist_appids,
                    },
                    `Fest_${i.name}`,
                  ),
                ),
              })
            );
          },
          d = () => {
            const [n, s] = f.useState(!1),
              [o, i] = f.useState(0),
              [m, x] = f.useState(""),
              [p, _] = f.useState(!0);
            if (!U.iA.logged_in)
              return (0, t.jsx)("div", {
                className: y.App,
                children: (0, t.jsxs)("div", {
                  className: y.Login,
                  children: [
                    (0, t.jsx)("div", {
                      className: y.Text,
                      children: (0, j.we)("#LoginText"),
                    }),
                    (0, t.jsx)("div", {
                      className: (0, B.A)(
                        "btn_green_white_innerfade",
                        " btn_medium",
                      ),
                      onClick: $.vg,
                      children: (0, t.jsx)("span", {
                        children: (0, j.we)("#LoginButton"),
                      }),
                    }),
                  ],
                }),
              });
            const C = () => {
                isNaN(parseInt(m)) || (s(!0), i(parseInt(m)));
              },
              L = () => {
                s(!1), i(0), x("");
              };
            return (0, t.jsx)(J.Ay, {
              controller: "recommenderdemos",
              method: "default",
              feature: "capsule",
              children: (0, t.jsxs)("div", {
                className: y.RecommenderDemosApp,
                children: [
                  (0, t.jsx)("div", {
                    className: y.ValveOnly,
                    children: "(Valve-Only)",
                  }),
                  (0, t.jsxs)("div", {
                    className: y.TopControls,
                    children: [
                      (0, t.jsxs)("div", {
                        className: y.AccountIDControl,
                        children: [
                          (0, t.jsx)("input", {
                            type: "text",
                            value: m,
                            onChange: (T) => x(T.target.value),
                          }),
                          (0, t.jsx)(D.$n, {
                            className: y.RecDemoButton,
                            onClick: C,
                            children: "Use AccountID",
                          }),
                          (0, t.jsx)(D.$n, {
                            disabled: !n,
                            className: y.RecDemoButton,
                            onClick: L,
                            children: "Clear",
                          }),
                        ],
                      }),
                      n &&
                        (0, t.jsxs)("div", {
                          className: y.AccountIDOverride,
                          children: [
                            (0, j.we)("#RecommenderDemos_OverrideAccountID"),
                            (0, t.jsx)("div", {
                              className: y.AccountID,
                              children: o,
                            }),
                          ],
                        }),
                      (0, t.jsxs)("div", {
                        className: y.CheckBox,
                        children: [
                          (0, t.jsx)("input", {
                            type: "checkbox",
                            id: "exclude_owned_wishlisted",
                            checked: p,
                            onChange: () => _(!p),
                          }),
                          (0, t.jsx)("label", {
                            htmlFor: "exclude_owned_wishlisted",
                            children: (0, j.we)("#RecommenderDemos_Exclude"),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsx)(k, {
                    nAccountID: o,
                    bExclude: p,
                    strName: "WishlistsOneWeek",
                    strTitle: (0, j.we)("#RecommenderDemos_HotWishlists"),
                    strSubtitle: (0, j.we)(
                      "#RecommenderDemos_HotWishlists_Desc",
                    ),
                  }),
                  (0, t.jsx)(k, {
                    nAccountID: o,
                    bExclude: p,
                    strName: "NextFest",
                    strTitle: (0, j.we)("#RecommenderDemos_NextFest"),
                    strSubtitle: (0, j.we)("#RecommenderDemos_NextFestDesc"),
                  }),
                  (0, t.jsx)(l, { nAccountID: o, bExclude: p }),
                  (0, t.jsx)(k, {
                    nAccountID: o,
                    bExclude: p,
                    strName: "RecAllTime",
                    strTitle: (0, j.we)("#RecommenderDemos_RecAllTime"),
                    strSubtitle: (0, j.we)("#RecommenderDemos_Rec_Desc"),
                  }),
                  (0, t.jsx)(k, {
                    nAccountID: o,
                    bExclude: p,
                    strName: "RecFiveYear",
                    strTitle: (0, j.we)("#RecommenderDemos_RecFiveYear"),
                    strSubtitle: (0, j.we)("#RecommenderDemos_Rec_Desc"),
                  }),
                  (0, t.jsx)(k, {
                    nAccountID: o,
                    bExclude: p,
                    strName: "RecTwoYear",
                    strTitle: (0, j.we)("#RecommenderDemos_RecTwoYear"),
                    strSubtitle: (0, j.we)("#RecommenderDemos_Rec_Desc"),
                  }),
                  (0, t.jsx)(k, {
                    nAccountID: o,
                    bExclude: p,
                    strName: "RecOneYear",
                    strTitle: (0, j.we)("#RecommenderDemos_RecOneYear"),
                    strSubtitle: (0, j.we)("#RecommenderDemos_Rec_Desc"),
                  }),
                  (0, t.jsx)(k, {
                    nAccountID: o,
                    bExclude: p,
                    strName: "RecSixMonths",
                    strTitle: (0, j.we)("#RecommenderDemos_RecSixMonths"),
                    strSubtitle: (0, j.we)("#RecommenderDemos_Rec_Desc"),
                  }),
                  (0, t.jsx)(k, {
                    nAccountID: o,
                    bExclude: p,
                    strName: "RecEmbedding",
                    strTitle: (0, j.we)("#RecommenderDemos_RecEmbedding"),
                    strSubtitle: "",
                  }),
                ],
              }),
            });
          };
      },
      21895: (q) => {
        q.exports = {
          Root: "_1kIuUssJvopWbHik1IKMG6",
          "Variant-light": "zcrlDqGBY0Lrl7faLFoJI",
          "Variant-dark": "_3b6kFRuG8ILziz88w8GESp",
          "Variant-outline": "wlcXkTKJWe-SE0fCwIRwQ",
          Disabled: "kLcGKsNxkoEqxgok6YzML",
          Checkbox: "_3babFLLB0YYBf8znrlE7Dt",
          Icon: "cngAYeP7ZvFo2pT_v3-xO",
        };
      },
      38878: (q) => {
        q.exports = {
          "Variant-basic": "xqG5GdDEeYauX2ots2DLl",
          "Size-3": "_1K_Ve980-qBq8l1-cZJdw1",
          "Variant-inset": "_2Z-Zr4UW8-jHrU5olM_rpn",
          "Variant-inset-focus": "_2RYWJyn7v0tvoY5cR63QuI",
          Focusable: "_1cd-wdIp5lIWsydAxII-vY",
          "Variant-inset-glass": "_32JdL4FubsmwHfHXm6OB9I",
          "Variant-underline": "yV_Aq5WutzzittgbOJ1R-",
          "Variant-dim": "_2qQgKJgeeqc9lEI-i7HdsM",
          "Variant-highlight": "EFvA4gLIikUE06LDGCqg5",
          "Variant-bare": "_3vxqpebgJYIYNTcigTXx21",
          ControlBox: "_2gL71Yq-HzVI9oOGyWu3jH",
          Hoverable: "_8JNTStqpIYaMWQJx6g6hK",
          Clickable: "_1KONo9A0HE0_NOK2F6uvXy",
          Disabled: "_2I6xXve3oCxh8fra7SWTnq",
          "Size-1": "_2e1xlPghh48rkP13ydQOPb",
          "Size-2": "B7HtDxiiORArIRcBR9kVB",
        };
      },
      53011: (q) => {
        q.exports = {
          SegmentedControlBox: "_3tuJ3SHrhBu16Q7GZBtKyt",
          Indicator: "_2OvUYpkiij1e7K-4vW8i9W",
          SegmentedControl: "_3XFGk1-WmLNC9KlGi7IYtN",
          IndicatorPosition: "_1Dgxrv7wtUW1EViSgrdMlA",
          Item: "_2aNlsjcdOdHOtP8uACA3bM",
          "Size-1": "_2Y43gK-c1jI0x35n45iZ0",
          "Size-3": "_3ohjaEz8PkzSzIrIZKEdt9",
          disabled: "_3gVhaCZ4k3QSnF9WhRZk5m",
          "Variant-basic": "d2NNa31iY_ztalFCMja9O",
          "Variant-inset": "_1FRhoIifZWCKbnl4jrnmG2",
          "Variant-inset-glass": "_1gVVovvLBjwCxSH4wWUabt",
          "Variant-dim": "_3qc1Re1q3AH_JYfN49uj8r",
        };
      },
      75: (q) => {
        q.exports = {
          SliderRoot: "Ib6RCjwueJUjl7aWNipFW",
          Inner: "-nNjOur8lh62cpxs1Jnth",
          SliderTrack: "_32V6MAuLhIp8s5_OPJxur1",
          SliderRange: "_1S38a0lsWaX1bdlroIEyXQ",
          SliderHandle: "_1VoJsIZhjVss7lO_vZxCFC",
        };
      },
      16619: (q) => {
        q.exports = {
          Color: "_2Vc3a-PM4tOhJcD72NEq1U",
          IconSizeDefault: "_20lX82QaoUw-iHboSsmZBI",
          "IconSize-1": "_1zRMg9IjPqEIAejKQDDLYW",
          "IconSize-2": "_3dn_hJnXYKfl38rjqz4y91",
          "IconSize-3": "_2aoIykgGddbEHeCGgMR79l",
          "IconSize-4": "_1Ypu_MleveHHMyLy8PVNy",
          "IconSize-5": "e8vp9esm_uAhUEdfq5zjr",
          "IconSize-6": "hXAsxCohKrk8qBq6Enfgt",
          "IconSize-7": "_5TifSVb5dMP2wAaHIDqM_",
          "IconSize-8": "_32KP-QSJpecoxuWZfWkqmy",
          "IconSize-9": "_3TcYJ4xwprVIVhcdzwF17m",
          HitSlop: "_1tiFDvBjIAQRZDbVwz8k2u",
        };
      },
      65274: (q) => {
        q.exports = {
          Text: "f6hU22EA7Z8peFWZVBJU",
          Truncate: "_2tXpWMxzSX3lf_9_EFUzmJ",
          "TextSize-1": "NUSSU36hkPXb7VdM8HFef",
          "TextSize-2": "_1HTEiDPVrmM0RUnp3DzkXW",
          "TextSize-3": "_1maNP9UvDekHzld1kwwQnw",
          "TextSize-4": "mGlMCg85s0ULA8kYCZzMB",
          "TextSize-5": "_2MGI1O3WXMHKcWkSFCf6Bz",
          "TextSize-6": "_3kpvs1OYmjREjAE9RONmZm",
          "TextSize-7": "_3RzzHMo4NUK3RIl__o-aYU",
          "TextSize-8": "_3KRhxZU1kR1ArBuZyY_ib3",
          "TextSize-9": "_3O17p9mMWHcy_sU-_IPM6R",
          TextWeight: "_3KfHV-wUo5sKXQAsJZO5Uw",
          TextAlign: "_310d_LkZp2K-i9ZY8r2B_c",
          LineClamp: "_3z4FSJhGOOHIOqRI6ZqJ_H",
          WhiteSpace: "FYJ4NYxpWeIha0N1-jUcm",
        };
      },
      73236: (q) => {
        q.exports = {
          LoginDialog: "_2Hj3a-BYR5A9d6Y6eTxf8I",
          AccountPasswordPanel: "_2LBKJjcyeeAER6uxAwF9VE",
          LoginPanelBackground: "_3Xp1HnNhHklf3nBxkQQrb7",
          LoginPanelContent: "UB5zID6zZyeYdo-h0Bvu4",
          ErrorMessage: "_3oDNF1ifw_JtcirOe7AGyh",
          AccountPasswordForm: "_2Mp7X_oS3ZCKkh1ZTF3bHM",
          AuthenticationPanel: "ApHu0QG3MlAA5pqo21-O2",
          AccountNameLabel: "_1WzDFzNss_PsfLbmsjMU6S",
          MedName: "_3V1uwLCqLwTY_zSH-rXgsC",
          LargeName: "_142CN0dD9Eao-3iX9ivMbZ",
          PasswordDots: "_1Xbz8g2o51UqV4DtJPj0hk",
          MedPass: "_2pUx4MzP1cOpmGrRyBWxjY",
          LargePass: "_3268nsJ4zxGvIOXnx6jH8L",
          AccountFieldHeader: "_2bLG3D_fmLYYr2bi7l9LYm",
          PasswordFieldHeader: "a3a45KMiAsgNFqNRn_q7W",
          NeedHelpLink: "_1Mi1lBerTs-M-thiecGA1l",
          NeedHelpHighlight: "_2RCec4CXzaWlw2Uf_YFDfE",
          CreateAccountLink: "x0CzniV8WOa1AUPRUHqQh",
          LoginCreateSeperator: "_TANIZGgITd9i_qKPHgvC",
          RefreshCaptchaText: "_1_C2PVNjSqHnFim6o1ZK0R",
          SigningInAccountName: "_2Tg37XxB9T4pq5VU2WlA2c",
          SigninTitle: "xJ2mRuljDUhf2a5fPUnIq",
          RememberMeCheck: "_1caeWNoZH6AeHjpb1OOeMY",
          SteamUpsellContainer: "_2Ge6aNfzBcM9sht2FBND1o",
          SteamUpsell: "_3r5LWZO4CCHaIeZbOAv_T4",
          CaptchaContainer: "_1waDjGmo6ZK85qbhzJrXqg",
          CaptchaBlock: "_1ltax2W2FWryYCSN0l-AxZ",
          CaptchaImageAndInput: "_3HUT29ELL8dnbkaS4kthbw",
          CaptchaImageBox: "dzf2fULDUt9ZuS8EBBesQ",
          CaptchaImage: "_3I-c16h7_cyh2s6MKplxCr",
          CaptchaInput: "FnbIIpLdCsi4E5dFejm-s",
          AuthenticatorInputcontainer: "_2_2v6YtNznSTXPdd4Sbe7n",
          Highlight: "_1tsysfOlsIWIDxj2Pbecpa",
          LoginComplete: "_2aP2Xz4mSeEEiQgMmrxzqj",
        };
      },
      41526: (q) => {
        q.exports = {
          GameExplorerApp: "_2YcjZUwjuk8bOScBI3CVix",
          GameExplorerContainer: "_2kqrC47lN71rDA7qxkvL7_",
          GameExplorerHeader: "_1WmCPc_AXRMWszlD7_0M_R",
          GameExplorerTitle: "_1_GGYKaf1G0MFTbrsZVM5x",
          GameExplorerDescription: "_3-0-0bjJzzp0wfZm6ObSXB",
          AppSelectors: "_1w_B8c3g-Xsw9heb2BTnCe",
          AppSelector: "_2D5U16jQrYU81Ch4jVymz7",
          ValueInput: "ihYu1w0pq4dUgUnGycLAk",
          Disabled: "_1Lbg7xK-rfphRUEsyWlxyS",
          AppSelectorResults: "_1pSCVPfk-I7z5cbU-qD7W6",
          Show: "_3MxGERvYfz6dfYOEqyGZma",
          AppSelectorResult: "MaxWBJJButh54DgnMY7TN",
          Logo: "_1TVDEYVA-ckujFOOVEdYm",
          RightSide: "_2qVSpkO1TYHXyYes3TgXLv",
          GameExplorerKnobs: "_1DrliTdL4oqZrcVy0JvPRT",
          AppList: "EMVrWDjVq2HuZkDTLZAP1",
          AppRow: "PQTV5wUjtOMlNoZq9OsoB",
          OtherControls: "_87nwNPJlVpkWBsBVupwAa",
          OtherControl: "_9nG2DtrSmTLKkooDe3Qj3",
          ControlTitle: "_203QCiIvvdFK5KOzd-OjLx",
          ControlDescription: "_3SJWSctED3DIUsdAb55J-y",
          Empty: "_8nGWcDkZ_reQznWJdiy-U",
          SelectedApp: "Wg6n7Ab6nMu1ZJe0yuSLV",
          WeightContainer: "_3iB_ItjvKnG544Uo3sEzl0",
          RemoveButttonContainer: "_2OgYrDkvm0p7Zlj9z-YBO6",
          GameExplorerResults: "_2SQb_tBJWtFz5SIeGyc-kp",
          Pending: "_3EGRvr5Jj24mLnonIcR5-B",
          CapsuleContainer: "_3OpOkSMqPjZSJIm_M3ZP-T",
          Distance: "_3FraUXDt867xR543irvayh",
          StartExplore: "_1DP_jO_QaoNtSbLKbZe9Cq",
        };
      },
      62139: (q) => {
        q.exports = {
          AppSelector: "_2Fikzdx2lTWapJ8oB4VH_E",
          AppDisplay: "_3m6Shao1IRPuuFr0l_7k9l",
          LogoImage: "_3l4Ih5v0fiCKKodcEeMBx6",
          AppName: "_3kXBTGAEHZo3GGTE00v7fR",
          AppSelect: "_2VQ8j1BdC_eQDU74NrrgUf",
          Suggestions: "_102W4ows0_RdyFP6UygrQQ",
          Suggestion: "_3VfDLdhp_ip5SSQIxRvaP1",
          SimilarApp: "_3yV0M5fd6S0GJGbQUVr8v3",
          Spacer: "_1lpCSiBFFQ4eBhiy7uq863",
          Score: "_14zV9TivPpwwriU27MDzcJ",
          App: "_3xv8nd-XJp9gt6KQvKZz1e",
          Container: "_3r507eIQieIortWRpL_p-",
          TopSection: "ZS7SfmqvYN35Oo34Nulf3",
          Header: "_3PXzQH1cJBNzpq8n3h9tLj",
          Body: "LfOIb2hPYOsOlKu2fmCFl",
          SandboxSection: "-FZSwdssB08COThIQfMK8",
          LabsSimilarGames: "_3OMnQ2qb57wpm5YKWrF4mm",
          AppSelection: "_1U3311x5ZUGW7vJEJuzEH2",
          SimilarApps: "_3RByYPiaYU6aep4DLeH_TE",
          LabsSimilarity: "_32kTJnPnuMfAoOdT68EFxE",
          HorizontalSpacer: "_1FnF8c6Og53-dJM6GBdLWa",
          LabsPathfinder: "_1w-DUXN6LIasN_6v55P0_Y",
          SelectEndpoints: "_3QMIIB-guv958P7vast3i_",
          ComputeButton: "_230zDsKb1Xla9fd990J5-j",
          Disabled: "_3o1uEPeXS7kmhPp5j0fXKJ",
          ProgressMessage: "_2IvW-N7lSTGREjL8L5k6XC",
          Path: "V_RIvT-OYDPkuCbfdK2G2",
          LabsMixer: "_1Cns3SI2_c6tbhS9Ib5ZVE",
          Operand: "hILAxewgNwvhHBnXev-nT",
          OperatorSelect: "EM51KAc64W5DNP-imMK-P",
          AddOperand: "tZPTBtDnIu5m3W0blxApx",
          Tabs: "_3Uckh2jP7zKyhdyy5hM3LG",
          Tab: "_16ebkTYinAkWPZmoHK2c9y",
          Active: "_2J9KxT9Uk8my9bIJ76ab_v",
        };
      },
      21082: (q) => {
        q.exports = {
          EntryError: "_1UGoDpJ7HCnew3ISiLQi2r",
          ClusterConfig: "_3Qp2uY9UVYYKnJ-ptgEj0R",
          PlaytimeCluster: "_2qGfqWVATJJ7JZzV8beQLg",
          ClusterInfo: "_20dmpyf2P2BqcyJ1-ACi27",
          ClusterMembers: "VeQtFevYOvbG2bHTuR6U2",
          SimilarTitle: "gRxJTbzwDdBRGFpeDab1C",
        };
      },
      32792: (q) => {
        q.exports = {
          smallentrywidth: "600px",
          optionswrapwidth: "777px",
          ValveOnly: "_3BlEI-AzJaZZmX2NYANWUM",
          RecommenderDemosApp: "Yd0GQ7ZuwBZvFndfWls_V",
          TopControls: "_3pk8aklP1QvRisTxx7jKBk",
          AccountIDControl: "NHix7NSJXYUhKUfq37DfV",
          AccountIDOverride: "i650fxK7SwDP8ncETkWfc",
          AccountID: "_1KvFAONiSWym2s89il4uOT",
          RecDemoButton: "_1-j6-lkyQZPPLjcvFUqtRg",
          RecommenderList: "_2SWgrCnfJv-YVMkRUaHonC",
          Title: "_1sEvnBlkzKtI80ZZnT4MVY",
          SubTitle: "_1jf-uvxuqKuz8FYMHvlhIm",
          CheckBox: "_5aGW9oecPhpwTUVGvj3lg",
          Spacer: "_1kIkFPfBO9A3hDohTT_hoK",
          CapsuleList: "iWS569Edm4Rgt09fYlY2v",
          AppCapsule: "_2ZKToqUzsdeaKKdDTtGZkD",
          UnderInfo: "_3pPpZh7mj-S7Lxj6yU4Fzl",
          Name: "_1EvKcr6zM__ELCD8Hf9S8y",
          Weight: "_2akgNsqkbts6rIO2OMHPNR",
          Image: "_3VtsIJqlIPDKUx2pCA9kyh",
        };
      },
      17083: (q, te, a) => {
        "use strict";
        a.d(te, { N_: () => D, k2: () => d });
        var t = a(92757),
          A = a(42891),
          b = a(90626),
          O = a(29248),
          E = a(58584),
          f = a(81115),
          R = a(68841),
          $ = (function (s) {
            (0, A.A)(o, s);
            function o() {
              for (
                var m, x = arguments.length, p = new Array(x), _ = 0;
                _ < x;
                _++
              )
                p[_] = arguments[_];
              return (
                (m = s.call.apply(s, [this].concat(p)) || this),
                (m.history = (0, O.zR)(m.props)),
                m
              );
            }
            var i = o.prototype;
            return (
              (i.render = function () {
                return b.createElement(t.Ix, {
                  history: this.history,
                  children: this.props.children,
                });
              }),
              o
            );
          })(b.Component),
          ce = (function (s) {
            (0, A.A)(o, s);
            function o() {
              for (
                var m, x = arguments.length, p = new Array(x), _ = 0;
                _ < x;
                _++
              )
                p[_] = arguments[_];
              return (
                (m = s.call.apply(s, [this].concat(p)) || this),
                (m.history = (0, O.TM)(m.props)),
                m
              );
            }
            var i = o.prototype;
            return (
              (i.render = function () {
                return b.createElement(t.Ix, {
                  history: this.history,
                  children: this.props.children,
                });
              }),
              o
            );
          })(b.Component),
          J = function (o, i) {
            return typeof o == "function" ? o(i) : o;
          },
          B = function (o, i) {
            return typeof o == "string" ? (0, O.yJ)(o, null, null, i) : o;
          },
          j = function (o) {
            return o;
          },
          U = b.forwardRef;
        typeof U > "u" && (U = j);
        function y(s) {
          return !!(s.metaKey || s.altKey || s.ctrlKey || s.shiftKey);
        }
        var G = U(function (s, o) {
            var i = s.innerRef,
              m = s.navigate,
              x = s.onClick,
              p = (0, f.A)(s, ["innerRef", "navigate", "onClick"]),
              _ = p.target,
              C = (0, E.A)({}, p, {
                onClick: function (T) {
                  try {
                    x && x(T);
                  } catch (z) {
                    throw (T.preventDefault(), z);
                  }
                  !T.defaultPrevented &&
                    T.button === 0 &&
                    (!_ || _ === "_self") &&
                    !y(T) &&
                    (T.preventDefault(), m());
                },
              });
            return (
              j !== U ? (C.ref = o || i) : (C.ref = i), b.createElement("a", C)
            );
          }),
          D = U(function (s, o) {
            var i = s.component,
              m = i === void 0 ? G : i,
              x = s.replace,
              p = s.to,
              _ = s.innerRef,
              C = (0, f.A)(s, ["component", "replace", "to", "innerRef"]);
            return b.createElement(t.XZ.Consumer, null, function (L) {
              L || (0, R.A)(!1);
              var T = L.history,
                z = B(J(p, L.location), L.location),
                F = z ? T.createHref(z) : "",
                W = (0, E.A)({}, C, {
                  href: F,
                  navigate: function () {
                    var V = J(p, L.location),
                      w = (0, O.AO)(L.location) === (0, O.AO)(B(V)),
                      u = x || w ? T.replace : T.push;
                    u(V);
                  },
                });
              return (
                j !== U ? (W.ref = o || _) : (W.innerRef = _),
                b.createElement(m, W)
              );
            });
          });
        if (0) var ee, k;
        var v = function (o) {
            return o;
          },
          l = b.forwardRef;
        typeof l > "u" && (l = v);
        function S() {
          for (var s = arguments.length, o = new Array(s), i = 0; i < s; i++)
            o[i] = arguments[i];
          return o
            .filter(function (m) {
              return m;
            })
            .join(" ");
        }
        var d = l(function (s, o) {
          var i = s["aria-current"],
            m = i === void 0 ? "page" : i,
            x = s.activeClassName,
            p = x === void 0 ? "active" : x,
            _ = s.activeStyle,
            C = s.className,
            L = s.exact,
            T = s.isActive,
            z = s.location,
            F = s.sensitive,
            W = s.strict,
            re = s.style,
            V = s.to,
            w = s.innerRef,
            u = (0, f.A)(s, [
              "aria-current",
              "activeClassName",
              "activeStyle",
              "className",
              "exact",
              "isActive",
              "location",
              "sensitive",
              "strict",
              "style",
              "to",
              "innerRef",
            ]);
          return b.createElement(t.XZ.Consumer, null, function (he) {
            he || (0, R.A)(!1);
            var xe = z || he.location,
              ve = B(J(V, xe), xe),
              Me = ve.pathname,
              I = Me && Me.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"),
              N = I
                ? (0, t.B6)(xe.pathname, {
                    path: I,
                    exact: L,
                    sensitive: F,
                    strict: W,
                  })
                : null,
              Z = !!(T ? T(N, xe) : N),
              K = typeof C == "function" ? C(Z) : C,
              Y = typeof re == "function" ? re(Z) : re;
            Z && ((K = S(K, p)), (Y = (0, E.A)({}, Y, _)));
            var oe = (0, E.A)(
              {
                "aria-current": (Z && m) || null,
                className: K,
                style: Y,
                to: ve,
              },
              u,
            );
            return (
              v !== l ? (oe.ref = o || w) : (oe.innerRef = w),
              b.createElement(D, oe)
            );
          });
        });
        if (0) var n;
      },
    },
  ]);
})();
