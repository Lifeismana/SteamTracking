/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [29456],
    {
      86946: (ne, re, r) => {
        "use strict";
        r.d(re, { j: () => q });
        var t = r(7850),
          L = r(64238),
          O = r.n(L),
          D = r(38878),
          E = r.n(D),
          f = r(60351),
          N = r(68031),
          J = r(8928),
          me = r(69289);
        function q(M) {
          const {
              children: z,
              beforeContent: T,
              afterContent: R,
              hasValue: P,
              ...ee
            } = M,
            H = Y(ee);
          return (0, t.jsxs)(N.s, {
            ...H,
            align: "center",
            "data-has-value": !!P,
            children: [
              T && (0, t.jsx)(N.s, { paddingRight: "2", children: T }),
              (0, t.jsx)(f.az, { flexGrow: "1", minWidth: "0", children: z }),
              R && (0, t.jsx)(N.s, { paddingLeft: "2", children: R }),
            ],
          });
        }
        function Y(M) {
          const {
              variant: z = "basic",
              size: T = "2",
              radius: R,
              focusable: P = !0,
              hoverable: ee = !0,
              clickable: H = !0,
              disabled: g,
              className: l,
              status: j,
              ...d
            } = M,
            a = z === "underline" ? "none" : R;
          return (0, me.mz)(
            {
              ...d,
              radius: a,
              "data-status": j,
              className: O()(
                D.ControlBox,
                P && !g && D.Focusable,
                ee && !g && D.Hoverable,
                H && !g && D.Clickable,
                g && D.Disabled,
                D[`Variant-${z}`],
                D[`Size-${T}`],
                l,
              ),
            },
            J.h,
          );
        }
      },
      84909: (ne, re, r) => {
        "use strict";
        r.d(re, { A: () => s, p: () => a });
        var t = r(7850),
          L = r(90626),
          O = r(73788),
          D = r(8083),
          E = r(94621),
          f = r(18938),
          N = r(24660),
          J = r(38566),
          me = r(54130),
          q = r(71742),
          Y = r(64238),
          M = r.n(Y),
          z = r(3877),
          T = r(3166);
        const R = (0, L.createContext)(null);
        function P(o) {
          const { children: i, ...m } = o,
            x = d(m);
          return (0, t.jsx)(R.Provider, { value: x, children: i });
        }
        function ee(o) {
          const { children: i } = o,
            m = L.Children.only(i),
            x = (0, L.useContext)(R);
          return m
            ? x
              ? (0, L.cloneElement)(m, {
                  ...x.getReferenceProps(m.props),
                  ref: (0, f.XB)(m.props.ref, x.floating.refs.setReference),
                })
              : (console.error(
                  "<PopoverAnchor> must be a child of <PopoverRoot>.",
                ),
                null)
            : null;
        }
        function H(o) {
          const { children: i, className: m, ref: x } = o,
            v = (0, L.useContext)(R),
            I = (0, O.SV)([
              x,
              v?.floating.refs.setFloating,
              (y) => y?.showPopover?.(),
            ]);
          if (!v)
            return (
              console.error(
                "<Popover.Positioner> must be a child of <Popover.Root>.",
              ),
              null
            );
          if (!v.open) return null;
          let b = L.Children.only(i),
            B = L.Fragment;
          b.type == s.FocusManager &&
            ((b = L.Children.only(b.props.children)), (B = g));
          const A = (0, L.cloneElement)(b, {
            ref: I,
            style: { ...v.floating.floatingStyles },
            className: M()((0, z.T)(), m),
            popover: "manual",
            ...v.getFloatingProps(),
          });
          return (0, t.jsx)(B, { children: A });
        }
        function g(o) {
          return (0, T.Qn)()
            ? (0, t.jsx)(l, { ...o })
            : (0, t.jsx)(j, { ...o });
        }
        function l(o) {
          const { children: i } = o,
            m = (0, L.useContext)(R);
          (0, q.wT)(
            !!m,
            "<Popover.Positioner> must be a child of <Popover.Root>.",
          );
          const x = () => m.floating.context.onOpenChange(!1),
            v = L.useRef(void 0);
          return (
            (0, N.O7)(v, !!v.current, !1),
            (0, t.jsx)(J.D6, {
              navID: "Popover",
              onCancelButton: x,
              modal: !0,
              navTreeRef: v,
              children: (0, t.jsx)("div", {
                style: { display: "contents" },
                children: (0, t.jsx)(me.q, { children: i }),
              }),
            })
          );
        }
        function j(o) {
          const { children: i } = o,
            m = (0, L.useContext)(R);
          return (
            (0, q.wT)(
              !!m,
              "<Popover.Positioner> must be a child of <Popover.Root>.",
            ),
            (0, t.jsx)(O.s3, {
              context: m.floating.context,
              initialFocus: -1,
              returnFocus: !1,
              children: i,
            })
          );
        }
        function d(o) {
          const {
            open: i,
            onOpenChange: m,
            placement: x,
            interactions: v = {},
          } = o;
          let I = i;
          const b = (0, O.we)({
              open: I,
              onOpenChange: m,
              middleware: a(o),
              whileElementsMounted: D.ll,
              placement: x && typeof x == "object" ? x.initial : x,
              strategy: "fixed",
              platform: {
                ...D.iD,
                getOffsetParent: (Le) =>
                  Le?.ownerDocument?.defaultView ?? window,
              },
            }),
            B = { enabled: !!v.click },
            A = typeof v.click == "function" ? v.click(B) : B,
            y = (0, O.kp)(b.context, A),
            V = { enabled: !!v.focus },
            F = typeof v.focus == "function" ? v.focus(V) : V,
            oe = (0, O.iQ)(b.context, F),
            k = { handleClose: (0, O.iB)() },
            w = typeof v.hover == "function" ? v.hover(k) : k,
            u = (0, O.Mk)(b.context, { enabled: !!v.hover, ...w }),
            he = (0, O.s9)(b.context),
            { getFloatingProps: ve, getReferenceProps: xe } = (0, O.bv)([
              y,
              oe,
              u,
              he,
            ]);
          return {
            floating: b,
            getFloatingProps: ve,
            getReferenceProps: xe,
            open: I,
          };
        }
        function a(o) {
          const { gutter: i = 0, placement: m } = o,
            x = [],
            v = m && typeof m == "object";
          return (
            v && m.offset
              ? x.push((0, E.cY)(m.offset))
              : (!v || m.offset === void 0) && x.push((0, E.cY)(2)),
            v && m.flip
              ? x.push((0, E.UU)(m.flip))
              : (!v || m.flip === void 0) && x.push((0, E.UU)()),
            v && m.shift
              ? x.push((0, E.BN)(m.shift))
              : (!v || m.shift === void 0) && x.push((0, E.BN)()),
            x.push(
              (0, E.Ej)({
                apply: (I) => {
                  const { rects: b, elements: B, availableHeight: A } = I,
                    y = { boxSizing: "border-box", zIndex: "1" };
                  switch ((o.scroll && (y.overflowY = "auto"), o.width)) {
                    case "target": {
                      y.width = `${b.reference.width}px`;
                      break;
                    }
                    case "content": {
                      y.width = `${b.floating.width}px`;
                      break;
                    }
                    case "dropdown": {
                      let F = b.reference.width;
                      b.floating.width > F && F < 200 && (F = b.floating.width),
                        (y.width = `${F}px`);
                    }
                  }
                  typeof o.width == "function" &&
                    (y.width = o.width({
                      unContentWidth: b.floating.width,
                      unTargetWidth: b.reference.width,
                    }));
                  const V =
                    typeof i == "number" ? `${i}px` : `var(--spacing-${i})`;
                  typeof o.maxHeight == "function"
                    ? (y.maxHeight = o.maxHeight({
                        unAvailableHeight: A,
                        gutter: V,
                      }))
                    : typeof o.maxHeight == "number"
                      ? (y.maxHeight = `min( calc( ${A}px - ${V} ), ${o.maxHeight}px )`)
                      : typeof i == "number"
                        ? (y.maxHeight = `${A - i}px`)
                        : (y.maxHeight = `calc( ${A}px - var(--spacing-${i}) )`),
                    Object.assign(B.floating.style, y),
                    B.floating.style.setProperty(
                      "--popover-max-height",
                      y.maxHeight,
                    );
                },
              }),
            ),
            x
          );
        }
        const s = { Root: P, Anchor: ee, Positioner: H, FocusManager: g };
      },
      21663: (ne, re, r) => {
        "use strict";
        r.d(re, { I: () => R });
        var t = r(7850),
          L = r(90626),
          O = r(86946),
          D = r(60351),
          E = r(71742),
          f = r(64238),
          N = r.n(f),
          J = r(53011),
          me = r.n(J),
          q = r(68031),
          Y = r(80549);
        const M = (0, L.createContext)(null);
        function z(H) {
          const {
              variant: g,
              radius: l,
              size: j,
              status: d,
              children: a,
              value: s,
              onValueChange: o,
            } = H,
            [i, m] = (0, L.useState)({}),
            x = (0, L.useCallback)((A, y) => m((V) => ({ ...V, [y]: A })), []),
            v = (0, L.useCallback)(
              (A, y) =>
                m((V) => {
                  const F = { ...V };
                  return F[y] === A && delete F[y], F;
                }),
              [],
            ),
            I = (A) => {
              let y = 0;
              switch (A.key) {
                case " ":
                case "Enter":
                case "ArrowRight":
                  y = 1;
                  break;
                case "ArrowLeft":
                  y = -1;
                  break;
              }
              if (y) {
                const V = Array.from(Object.values(i)).sort(ee);
                let F;
                if (s === null) F = y > 0 ? 0 : V.length - 1;
                else {
                  const w = i[s],
                    u = V.findIndex((he) => he === w);
                  (0, E.wT)(
                    typeof u == "number",
                    "Could not find current segmented value position",
                  ),
                    (F = u + y);
                }
                const oe = V[F < 0 ? V.length + F : F % V.length],
                  k = Object.keys(i).find((w) => i[w] === oe);
                typeof k != "string"
                  ? console.error("Could not find next segmeneted value")
                  : (o(k), A.stopPropagation(), A.preventDefault());
              }
            },
            b = (0, Y.f)("SegmentedControl", g),
            B = (0, L.useMemo)(
              () => ({
                value: s,
                onValueChange: o,
                register: x,
                unregister: v,
                radius: l,
                size: j,
              }),
              [s, o, x, v, l, j],
            );
          return (0, t.jsx)(O.j, {
            clickable: !1,
            hoverable: !1,
            focusable: !1,
            variant: b,
            radius: l,
            size: j,
            status: d,
            className: N()(J.SegmentedControlBox, J[`Variant-${b}`]),
            tabIndex: 0,
            onKeyDown: I,
            children: (0, t.jsx)(M.Provider, {
              value: B,
              children: (0, t.jsxs)(D.az, {
                className: J.SegmentedControl,
                style: { "--outer-radius": `var(--radius-${l})` },
                children: [a, s !== null && (0, t.jsx)(P, { radius: l })],
              }),
            }),
          });
        }
        function T(H) {
          const { value: g, children: l, disabled: j } = H,
            d = (0, L.useContext)(M),
            [a, s] = (0, L.useState)(),
            { register: o, unregister: i } = d || {};
          if (
            ((0, L.useEffect)(
              () => (!a || !o || !i ? () => {} : (o(a, g), () => i(a, g))),
              [o, i, g, a],
            ),
            !d)
          )
            return null;
          const { value: m, onValueChange: x, radius: v, size: I } = d,
            b = g === m,
            B = (y) => {
              y.stopPropagation(), y.preventDefault(), !(b || j) && x(g);
            },
            A = l === void 0 ? g : l;
          return (0, t.jsx)(q.s, {
            justify: "center",
            align: "center",
            ref: s,
            onClick: B,
            "data-selected": b ? "true" : "false",
            className: N()(J.Item, I && J[`Size-${I}`], j ? J.disabled : ""),
            children: A,
          });
        }
        function R(H) {
          const { options: g, getOptionLabel: l = (d) => d, ...j } = H;
          return (0, t.jsx)(R.Root, {
            ...j,
            children: g.map((d) =>
              (0, t.jsx)(R.Item, { value: d, children: l(d) }, d),
            ),
          });
        }
        (R.Item = T), (R.Root = z);
        function P(H) {
          const { radius: g } = H;
          return (0, t.jsx)(D.az, {
            className: J.IndicatorPosition,
            children: (0, t.jsx)("div", { className: J.Indicator }),
          });
        }
        function ee(H, g) {
          const l = H.compareDocumentPosition(g);
          return l & Node.DOCUMENT_POSITION_FOLLOWING
            ? -1
            : l & Node.DOCUMENT_POSITION_PRECEDING
              ? 1
              : 0;
        }
      },
      87275: (ne, re, r) => {
        "use strict";
        r.d(re, { A: () => J, F: () => q });
        var t = r(7850),
          L = r(90626),
          O = r(71742),
          D = r(13854),
          E = r(75),
          f = r.n(E),
          N = r(76854);
        const J = Object.assign(me, { Root: M, Track: T, Range: R, Handle: P });
        function me(l) {
          const {
              value: j,
              onValueChange: d,
              onValueSettled: a,
              min: s,
              ...o
            } = l,
            i = [j],
            m = (0, L.useCallback)((v) => d(v[0]), [d]),
            x = (0, L.useCallback)((v) => a?.(v[0]), [a]);
          return (0, t.jsxs)(M, {
            ...o,
            min: s,
            onValueChange: m,
            onValueSettled: x,
            value: i,
            children: [
              (0, t.jsx)(T, { children: (0, t.jsx)(R, { start: s, end: j }) }),
              (0, t.jsx)(P, {}),
            ],
          });
        }
        function q(l) {
          const { value: j } = l;
          return (0, t.jsxs)(M, {
            ...l,
            children: [
              (0, t.jsx)(T, {
                children: (0, t.jsx)(R, { start: j[0], end: j[1] }),
              }),
              (0, t.jsx)(P, {}),
              (0, t.jsx)(P, {}),
            ],
          });
        }
        const Y = (0, L.createContext)(null);
        function M(l) {
          const { children: j, color: d, ...a } = l,
            {
              min: s,
              max: o,
              onValueChange: i,
              value: m,
              step: x = 1,
              onValueSettled: v,
            } = l,
            I = (0, L.useRef)(null),
            b = (0, L.useRef)(null),
            [B] = (0, L.useState)(() => new Set()),
            [A, y] = (0, L.useState)(!1);
          return (0, t.jsx)(Y.Provider, {
            value: { ...a, handles: B, bDragActive: A },
            children: (0, t.jsx)("div", {
              className: E.SliderRoot,
              "data-accent-color": d,
              ref: I,
              onPointerDown: (V) => {
                if (I.current) {
                  if (
                    (V.target.setPointerCapture(V.pointerId),
                    typeof m != "number")
                  ) {
                    const F = I.current.getBoundingClientRect(),
                      oe = ee(V.clientX - F.left, [0, F.width], [s, o]);
                    b.current = { activeValueIndex: z(m, oe), bMoved: !1 };
                  } else b.current = { activeValueIndex: 0, bMoved: !1 };
                  y(!0);
                }
              },
              onPointerUp: (V) => {
                const F = V.target;
                F.hasPointerCapture(V.pointerId) &&
                  (F.releasePointerCapture(V.pointerId),
                  v && b.current?.bMoved && v(m),
                  y(!1));
              },
              onPointerMove: (V) => {
                if (
                  V.target.hasPointerCapture(V.pointerId) &&
                  I.current &&
                  b.current
                ) {
                  const oe = I.current.getBoundingClientRect(),
                    k = ee(V.clientX - oe.left, [0, oe.width], [s, o]),
                    w = H({ value: k, min: s, max: o, step: x }),
                    u = [...m];
                  (u[b.current.activeValueIndex] = w),
                    u.sort((he, ve) => he - ve),
                    (b.current.activeValueIndex = u.indexOf(w)),
                    (b.current.bMoved = !0),
                    i(u);
                }
              },
              onClick: (V) => {
                if (!I.current || b.current?.bMoved) return;
                const F = I.current.getBoundingClientRect(),
                  oe = ee(V.clientX - F.left, [0, F.width], [s, o]),
                  k = H({ value: oe, min: s, max: o, step: x }),
                  w = z(m, oe),
                  u = [...m];
                (u[w] = k), i(u), v && v(u);
              },
              children: (0, t.jsx)("div", { className: E.Inner, children: j }),
            }),
          });
        }
        function z(l, j) {
          if (l.length <= 1) return l.length - 1;
          let d = 0,
            a = Math.abs(j - l[0]);
          for (let s = 1; s < l.length; s++) {
            const o = Math.abs(l[s] - j);
            o < a && ((d = s), (a = o));
          }
          return d;
        }
        function T(l) {
          const { render: j, ...d } = l;
          return (0, N.Q)(
            j,
            (0, t.jsx)("div", { className: E.SliderTrack }),
            d,
            void 0,
          );
        }
        function R(l) {
          const { start: j, end: d, render: a } = l,
            s = (0, L.useContext)(Y);
          (0, O.wT)(s, "SliderRange must be used within a SliderRoot!");
          const { min: o, max: i } = s,
            m = g(j, o, i),
            x = 100 - g(d, o, i);
          return (0, N.Q)(
            a,
            (0, t.jsx)("div", {
              className: E.SliderRange,
              style: { "--pct-left": `${m}%`, "--pct-right": `${x}%` },
            }),
            {},
            void 0,
          );
        }
        function P(l) {
          const { render: j } = l,
            d = (0, L.useContext)(Y);
          (0, O.wT)(d, "SliderHandle must be used within a SliderRoot!");
          const {
              min: a,
              max: s,
              handles: o,
              value: i,
              step: m = 1,
              onValueChange: x,
              onValueSettled: v,
            } = d,
            [I, b] = (0, L.useState)(null),
            [B, A] = (0, L.useState)(-1);
          (0, L.useEffect)(
            () => (I ? (o.add(I), A(o.size - 1), () => o.delete(I)) : () => {}),
            [I, o],
          );
          const y = B > -1,
            F = { "--handle-pct": `${g(y ? i[B] : a, a, s)}%` },
            oe = (w) => {
              switch (w.key) {
                case "ArrowRight":
                case "ArrowUp":
                case "ArrowLeft":
                case "ArrowDown": {
                  const u = w.key === "ArrowRight" || w.key === "ArrowUp",
                    he = m * (u ? 1 : -1),
                    ve = H({ value: i[B] + he, min: a, max: s, step: m }),
                    xe = [...i];
                  (xe[B] = ve),
                    x(xe),
                    v && v(xe),
                    w.preventDefault(),
                    w.stopPropagation();
                  break;
                }
                case "PageUp":
                case "PageDown": {
                  const u = w.key === "PageUp",
                    he = Math.round((s - a) / 10) * (u ? 1 : -1),
                    ve = H({ value: i[B] + he, min: a, max: s, step: m }),
                    xe = [...i];
                  (xe[B] = ve),
                    x(xe),
                    v && v(xe),
                    w.preventDefault(),
                    w.stopPropagation();
                  break;
                }
              }
            };
          y || (F.display = "none");
          const k = {
            ref: b,
            role: "slider",
            "aria-valuenow": i[B],
            "aria-valuemin": a,
            "aria-valuemax": s,
            tabIndex: 0,
            onKeyDown: oe,
          };
          return (0, N.Q)(
            j,
            (0, t.jsx)("span", { className: E.SliderHandle, style: F }),
            k,
            { value: i[B], bDragActive: d.bDragActive },
          );
        }
        function ee(l, j, d) {
          if (j[0] === j[1] || d[0] === d[1]) return d[0];
          const s = ((d[1] - d[0]) / (j[1] - j[0])) * (l - j[0]) + d[0];
          return D.OQ(s, d[0], d[1]);
        }
        function H(l) {
          const { value: j, min: d, max: a, step: s } = l,
            i = Math.round((j - d) / s) / (1 / s);
          return D.OQ(i + d, d, a);
        }
        function g(l, j, d) {
          return ((l - j) / (d - j)) * 100;
        }
      },
      76854: (ne, re, r) => {
        "use strict";
        r.d(re, { Q: () => O });
        var t = r(90626);
        function L(D, E, f) {
          return typeof D == "function" ? D(E, f) : t.cloneElement(D, E);
        }
        function O(D, E, f, N) {
          return L(D || E, f, N);
        }
      },
      15252: (ne, re, r) => {
        "use strict";
        r.d(re, { Ae: () => Y, EY: () => me, U6: () => q });
        var t = r(7850),
          L = r(1039),
          O = r(69289),
          D = r(8928),
          E = r(64238),
          f = r.n(E),
          N = r(65274),
          J = r.n(N);
        function me(M) {
          const { as: z = "span", ref: T, className: R, ...P } = M,
            ee = z;
          return (0, t.jsx)(ee, {
            ref: T,
            ...(0, O.mz)({ ...P, className: f()(N.Text, R) }, Y),
          });
        }
        const q = [
            {
              prop: "weight",
              responsive: !0,
              className: N.TextWeight,
              cssProperty: (M) => ["--text-weight", `var(--font-weight-${M})`],
            },
            {
              prop: "align",
              responsive: !0,
              className: N.TextAlign,
              cssProperty: "--text-align",
            },
            {
              prop: "color",
              responsive: !0,
              cssProperty: (M, z, T) => [
                "--text-color",
                (0, O.To)(M, (0, L.I)(z.contrast, T) ?? "body"),
              ],
            },
            {
              prop: "contrast",
              responsive: !0,
              cssProperty: (M, z, T) => [
                "--text-color",
                (0, O.To)((0, L.I)(z.color, T) ?? "text-body", M),
              ],
            },
            { prop: "truncate", className: N.Truncate },
            {
              prop: "lineClamp",
              responsive: !0,
              className: N.LineClamp,
              cssProperty: "--line-clamp",
            },
            {
              prop: "whiteSpace",
              className: N.WhiteSpace,
              cssProperty: "--white-space",
            },
          ],
          Y = [
            ...q,
            ...D.L,
            {
              prop: "size",
              responsive: !0,
              className: (M) => N[`TextSize-${M}`],
            },
          ];
      },
      24805: (ne, re, r) => {
        "use strict";
        r.d(re, { Xh: () => J, cU: () => me, tf: () => Y, wl: () => q });
        var t = r(99412),
          L = r(18735),
          O = r(56062),
          D = r(6469),
          E = r(10142),
          f = r(10349),
          N = r(3166);
        const J = {
          include_assets: !0,
          include_release: !0,
          include_platforms: !0,
          include_tag_count: 20,
          include_basic_info: !0,
          include_trailers: !0,
          include_reviews: !0,
          include_screenshots: !0,
          include_supported_languages: !0,
        };
        class me {
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
        const q = 4;
        function Y(g, l, j, d, a, s) {
          const o = new Array(),
            i = new Array(),
            m = new Array(),
            x = new Array();
          if (!g || g.length == 0) return o;
          const v = [
            f.by.k_RejectSupportedLanguage,
            f.by.k_RejectAlreadyDisplayed,
            f.by.k_RejectNoTrailer,
          ];
          for (let I of g) {
            let b = I.id,
              B = f.by.k_NotRejected;
            switch (I.item_type) {
              case "sub":
                const A = E.A.Get().GetPackage(b);
                if (A?.GetIncludedAppIDs()?.length !== 1) {
                  B = ee(b, l, d, !0);
                  break;
                }
                b = A.GetIncludedAppIDs()[0];
              case "app":
                B = R(b, l, j, d, !0);
                break;
              case "bundle":
                B = H(b, l, d, !0);
                break;
            }
            if (
              (B == f.by.k_NotRejected
                ? ((I.rejected = f.by.k_NotRejected),
                  o.push({ ...I, priority: 1 }))
                : v.includes(B)
                  ? ((I.rejected = f.by.k_NotRejected), i.push(I))
                  : ((I.rejected = B),
                    B == f.by.k_RejectIgnoredGame ? m.push(I) : x.push(I)),
              o.length > a)
            )
              break;
          }
          return (
            o.length < a &&
              (M(o, i, s, 2),
              o.length < s &&
                l.enforce_minimum &&
                (M(o, m, s, 3), M(o, x, s, q))),
            o
          );
        }
        function M(g, l, j, d) {
          for (let a = 0; g.length < j && a < l.length; ++a)
            g.push({ ...l[a], priority: d });
        }
        function z(g, l) {
          const j = D.Fm.Get();
          if (
            l.only_current_platform &&
            j.BHasPlatformPreferenceSet() &&
            !(
              (g.GetPlatforms()?.windows && j.BIsPreferredPlatform("win")) ||
              (g.GetPlatforms()?.mac && j.BIsPreferredPlatform("mac")) ||
              (g.GetPlatforms()?.steamos_linux &&
                j.BIsPreferredPlatform("linux"))
            )
          )
            return f.by.k_RejectWrongPlatform;
          if (!l.prepurchase && g.BIsComingSoon())
            return f.by.k_RejectNoComingSoon;
          const d = g.GetPlatforms();
          return !l.virtual_reality &&
            d &&
            d.vr_support &&
            d.vr_support.vrhmd_only
            ? f.by.k_RejectNoVR
            : g.GetAllCreatorClanIDs()?.some((a) => j.BIsIgnoringCurator(a))
              ? f.by.k_RejectCreatorClan
              : f.by.k_NotRejected;
        }
        function T(g, l) {
          if (l.localized) {
            const j = (0, t.sfN)(N.TS.LANGUAGE);
            if (!g.GetAllLanguagesWithSomeSupport()?.includes(j))
              return f.by.k_RejectSupportedLanguage;
          }
          return f.by.k_NotRejected;
        }
        function R(g, l, j, d, a) {
          const s = E.A.Get().GetApp(g);
          if (!s) return f.by.k_RejectNotLoaded;
          const o = z(s, l);
          if (o != f.by.k_NotRejected) return o;
          const i = D.Fm.Get();
          if (i.BIsGameIgnored(g)) return f.by.k_RejectIgnoredGame;
          if (i.BExcludeTagIDs(s.GetTagIDs()))
            return f.by.k_RejectIgnoreGameTags;
          if (i.BExcludesContentDescriptor(s.GetContentDescriptorIDs()))
            return f.by.k_RejectIgnoreContentDescriptors;
          if (!l.early_access && s.BIsEarlyAccess())
            return f.by.k_RejectEarlyAccess;
          const m = s.GetAppType();
          if (!l.software && m == O.uE.Sv) return f.by.k_RejectSoftware;
          if (l.games_already_in_library && i.BIsGameOwned(g))
            return f.by.k_RejectInLibrary;
          if (l.games_not_in_library && !i.BIsGameOwned(g))
            return f.by.k_RejectNotInLibrary;
          if (!l.video && [O.uE.Wz, O.uE.gQ, O.uE.ID].includes(m))
            return f.by.k_RejectVideo;
          if (l.has_discount) {
            const x = s.GetBestPurchaseOption();
            if (!x || !x.discount_pct) return f.by.k_RejectNoDiscount;
          }
          return j != "adultonly" &&
            l.no_ao_content &&
            (s.HasContentDescriptorID(L.u7) || s.HasContentDescriptorID(L.T4))
            ? f.by.k_RejectAO
            : m == O.uE.ue &&
                l.games_already_in_library &&
                i.BIsGameOwned(s.GetParentAppID() || 0)
              ? f.by.k_RejectInLibrary
              : a
                ? (m == O.uE.ue && d.BHasAppID(s.GetParentAppID() || 0)) ||
                  d.BHasAppID(g)
                  ? f.by.k_RejectAlreadyDisplayed
                  : l.has_trailer && !s.BHasTrailers(!1)
                    ? f.by.k_RejectNoTrailer
                    : T(s, l)
                : f.by.k_NotRejected;
        }
        function P(g, l) {
          const j = D.Fm.Get();
          let d = !1;
          for (let a of g) {
            if (j.BIsGameIgnored(a)) return f.by.k_RejectIgnoredGame;
            j.BIsGameOwned(a) && (d = !0);
          }
          return l.games_not_in_library && d
            ? f.by.k_RejectInLibrary
            : l.games_not_in_library && !d
              ? f.by.k_RejectNotInLibrary
              : f.by.k_NotRejected;
        }
        function ee(g, l, j, d) {
          const a = E.A.Get().GetPackage(g);
          if (!a) return f.by.k_RejectNotLoaded;
          const s = z(a, l);
          if (s != f.by.k_NotRejected) return s;
          const o = P(a.GetIncludedAppIDs(), l);
          if (o != f.by.k_NotRejected) return o;
          const i = D.Fm.Get();
          return l.games_already_in_library && i.BOwnsPackage(g)
            ? f.by.k_RejectInLibrary
            : i.BIsPackageIgnored(g)
              ? f.by.k_RejectIgnoredGame
              : d
                ? j.BHasPackageID(g)
                  ? f.by.k_RejectAlreadyDisplayed
                  : T(a, l)
                : f.by.k_NotRejected;
        }
        function H(g, l, j, d) {
          const a = E.A.Get().GetBundle(g);
          if (!a) return f.by.k_RejectNotLoaded;
          const s = z(a, l);
          if (s != f.by.k_NotRejected) return s;
          const o = P(a.GetIncludedAppIDs(), l);
          return o != f.by.k_NotRejected
            ? o
            : d
              ? j.BHasBundleID(g)
                ? f.by.k_RejectAlreadyDisplayed
                : T(a, l)
              : f.by.k_NotRejected;
        }
      },
      85528: (ne, re, r) => {
        "use strict";
        r.d(re, { Vw: () => j });
        var t = r(14947),
          L = r(99412),
          O = r(72604),
          D = r(35038),
          E = r(67529),
          f = r(3166);
        class N {
          m_nLastUpdated = 0;
          m_mapLanguages = t.sH.map();
          m_appid;
          m_fetching = null;
          constructor(a) {
            this.m_appid = a;
          }
          GetAppID() {
            return this.m_appid;
          }
          GetTokenList(a) {
            return this.m_mapLanguages.has(a)
              ? this.m_mapLanguages.get(a)
              : null;
          }
          Localize(a, s) {
            let o = f.TS.LANGUAGE,
              i = this.GetTokenList(o),
              m = o != "english" ? this.GetTokenList("english") : null;
            return J(a, i, m, this.m_appid, s);
          }
          SubstituteParams(a, s) {
            let o = f.TS.LANGUAGE,
              i = this.GetTokenList(o),
              m = o != "english" ? this.GetTokenList("english") : null;
            return me(a, i, m, this.m_appid, s);
          }
        }
        function J(d, a, s, o, i) {
          if (!d.startsWith("#"))
            return (
              console.log(
                "Token doesn't start with #:",
                d,
                "appid",
                o,
                "tokens",
                a,
              ),
              ""
            );
          let m = d;
          d = d.toLowerCase();
          let x = "";
          if (
            (a && a.has(d) && (x = a.get(d)),
            !x && s && s.has(d) && (x = s.get(d)),
            x)
          )
            x = me(x, a, s, o, i);
          else if (
            ((a || s) &&
              console.log(
                "No loc found for appid",
                o,
                m,
                "Tokens:",
                a,
                "Fallback:",
                s,
              ),
            a && f.TS.EUNIVERSE != L.wLO)
          )
            return d;
          return x;
        }
        function me(d, a, s, o, i) {
          let m = /{[A-za-z0-9_%#:]+}/g,
            x = d.match(m);
          if (x)
            for (let v of x) {
              let I = v.slice(1, -1),
                b = q(I, i),
                B = J(b, a, s, o, i);
              if (!B) return "";
              d = d.replace(v, B);
            }
          return (d = q(d, i)), d;
        }
        function q(d, a) {
          let s = /%[A-Za-z0-9_:]+%/g,
            o = d.match(s);
          if (o)
            for (let i of o) {
              let m = i.slice(1, -1).toLowerCase(),
                x = a.get(m);
              x == null
                ? console.log("No rich presence found for", m)
                : (d = d.replace(i, x));
            }
          return d;
        }
        var Y = r(72849),
          M = r(71742),
          z = r(8323),
          T = Object.defineProperty,
          R = Object.getOwnPropertyDescriptor,
          P = (d, a, s, o) => {
            for (
              var i = o > 1 ? void 0 : o ? R(a, s) : a, m = d.length - 1, x;
              m >= 0;
              m--
            )
              (x = d[m]) && (i = (o ? x(a, s, i) : x(i)) || i);
            return o && i && T(a, s, i), i;
          };
        function ee(d) {
          return useObserver(() => j.GetAppInfo(d));
        }
        function H(d) {
          return useObserver(() => d.map((a) => j.GetAppInfo(a)));
        }
        const g = 3600 * 24 * 7 * 2;
        class l {
          m_CMInterface;
          m_mapAppInfo = t.sH.map();
          m_mapRichPresenceLoc = t.sH.map();
          m_cAppInfoRequestsInFlight = 0;
          m_setPendingAppInfo = new Set();
          m_PendingAppInfoPromise;
          m_PendingAppInfoResolve;
          m_CacheStorage = null;
          m_fnCallbackOnAppInfoLoaded = new z.lu();
          constructor() {
            (0, t.Gn)(this);
          }
          Init(a) {
            this.m_CMInterface = a;
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
          RegisterCallbackOnLoad(a) {
            if (!this.BHavePendingAppInfoRequests()) {
              (0, M.wT)(
                !1,
                "Registering for callback on appinfo load, but nothing queued",
              ),
                a();
              return;
            }
            this.m_fnCallbackOnAppInfoLoaded.Register(a);
          }
          IsLoadingAppID(a) {
            return this.m_setPendingAppInfo.has(a);
          }
          GetAppInfo(a) {
            if (
              ((0, M.wT)(
                this.m_CMInterface,
                "CAppInfoStore.GetAppInfo called before Init",
              ),
              !this.m_mapAppInfo.has(a))
            ) {
              let s = new E.by(a);
              this.m_mapAppInfo.set(a, s), this.QueueAppInfoRequest(a);
            }
            return this.m_mapAppInfo.get(a);
          }
          QueueAppInfoRequest(a) {
            return a
              ? (this.m_setPendingAppInfo.size ||
                  ((this.m_PendingAppInfoPromise = new Promise(
                    (s) => (this.m_PendingAppInfoResolve = s),
                  )),
                  window.setTimeout(() => this.FlushPendingAppInfo(), 25)),
                this.m_setPendingAppInfo.add(a),
                this.m_PendingAppInfoPromise)
              : Promise.resolve();
          }
          async FlushPendingAppInfo() {
            const a = this.m_PendingAppInfoResolve,
              s = Array.from(this.m_setPendingAppInfo);
            (this.m_PendingAppInfoPromise = void 0),
              (this.m_PendingAppInfoResolve = void 0),
              this.m_setPendingAppInfo.clear(),
              await this.LoadAppInfoBatch(s),
              a?.();
          }
          async LoadAppInfoBatch(a) {
            this.m_cAppInfoRequestsInFlight++;
            let s = await this.LoadAppInfoBatchFromLocalCache(a);
            if (s.length) {
              console.log("Loading batch of App Info from Steam: ", s),
                await this.m_CMInterface?.WaitUntilLoggedOn();
              let o = D.w.Init(Y._z);
              o.Body().set_language((0, L.sfN)(f.TS.LANGUAGE));
              const i = 50;
              for (; s.length > 0; ) {
                const m = Math.min(i, s.length),
                  x = s.slice(0, m);
                (s = s.slice(m)), o.Body().set_appids(x);
                const v = await Y.BE.GetApps(
                  this.m_CMInterface.GetServiceTransport(),
                  o,
                );
                v.GetEResult() == O.R
                  ? this.OnGetAppsResponse(v)
                  : console.error(
                      `Error when calling CommunityService.GetApps: EResult=${v.GetEResult()}, AppIDs:`,
                      x,
                    );
              }
            }
            --this.m_cAppInfoRequestsInFlight == 0 &&
              this.m_setPendingAppInfo.size == 0 &&
              (this.m_fnCallbackOnAppInfoLoaded.Dispatch(),
              this.m_fnCallbackOnAppInfoLoaded.ClearAllCallbacks());
          }
          OnGetAppsResponse(a) {
            let s = [];
            for (let o of a.Body().apps()) {
              let i = this.m_mapAppInfo.get(o.appid());
              (0, M.wT)(
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
          OnAppOverviewChange(a) {
            for (let s of a) {
              const o = new E.by(s.appid());
              o.DeserializeFromAppOverview(s),
                o.is_initialized && this.m_mapAppInfo.set(s.appid(), o);
            }
          }
          async EnsureAppInfoForAppIDs(a) {
            let s = !1;
            return (
              a.forEach((o) => {
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
          SetCacheStorage(a) {
            this.m_CacheStorage = a;
          }
          GetCacheKeyForAppID(a) {
            return "APPINFO_" + a;
          }
          async LoadAppInfoBatchFromLocalCache(a) {
            if (!this.m_CacheStorage) return a;
            console.log("Loading batch of App Info from Local Cache: ", a);
            const s = new Date(new Date().getTime() - g * 1e3),
              o = async (v) => {
                const I = await this.m_CacheStorage?.GetObject(
                  this.GetCacheKeyForAppID(v),
                );
                if (!I) return v;
                let b = this.m_mapAppInfo.get(v);
                return (
                  (0, M.wT)(
                    b,
                    "Didn't find AppInfo in our map when loading from cache but it should've been there?",
                  ),
                  b
                    ? ((b = new E.by(v)),
                      b.DeserializeFromCacheObject(I),
                      b.is_initialized
                        ? (this.m_mapAppInfo.set(v, b),
                          b.time_updated_from_server < s ? v : null)
                        : (console.warn(
                            "Failed to deserialize cached App Info: ",
                            v,
                            I,
                          ),
                          v))
                    : v
                );
              };
            let i = a.map((v) => o(v));
            return (await Promise.all(i)).filter((v) => v !== null);
          }
          async SaveAppInfoBatchToLocalCache(a) {
            if (this.m_CacheStorage) {
              console.log(
                "Saving batch of App Info to Local Cache: ",
                a.map((s) => s.appid),
              );
              for (const s of a) {
                const o = s.SerializeToCacheObject();
                o &&
                  this.m_CacheStorage.StoreObject(
                    this.GetCacheKeyForAppID(s.appid),
                    o,
                  );
              }
            }
          }
          Localize(a, s, o) {
            const i = this.GetRichPresenceLoc(a);
            return i
              ? i.Localize(s, o)
              : f.TS.EUNIVERSE != L.wLO
                ? (console.log(
                    `Unable to find app localization information for app ${a} token ${s}, this may not have had a chance to load yet`,
                  ),
                  s)
                : "";
          }
          GetRichPresenceLoc(a) {
            if (this.m_mapRichPresenceLoc.has(a.toString())) {
              let o = this.m_mapRichPresenceLoc.get(a.toString());
              return (
                o.m_nLastUpdated + 1e3 * 60 * E.IU < Date.now() &&
                  this.QueueRichPresenceLocRequest(o),
                o
              );
            }
            let s = new N(a);
            return (
              this.m_mapRichPresenceLoc.set(a.toString(), s),
              this.QueueRichPresenceLocRequest(s),
              s
            );
          }
          GetRichPresenceLocAsync(a) {
            let s = this.GetRichPresenceLoc(a);
            return s.m_nLastUpdated ? Promise.resolve(s) : s.m_fetching;
          }
          OnRichPresenceLocUpdate(a, s) {
            a.m_nLastUpdated = Date.now();
            for (let o of s) {
              let i = o.language(),
                m = a.m_mapLanguages.get(i);
              m
                ? m.clear()
                : (a.m_mapLanguages.set(i, new Map()),
                  (m = a.m_mapLanguages.get(i)));
              for (let x of o.tokens())
                m?.set(x.name().toLowerCase(), x.value());
            }
          }
          QueueRichPresenceLocRequest(a) {
            return (
              a.m_fetching ||
                ((a.m_fetching = this.m_CMInterface
                  .WaitUntilLoggedOn()
                  .then(() => {
                    let s = D.w.Init(Y.zQ);
                    return (
                      s.Body().set_appid(a.GetAppID()),
                      s.Body().set_language(f.TS.LANGUAGE),
                      Y.BE.GetAppRichPresenceLocalization(
                        this.m_CMInterface.GetServiceTransport(),
                        s,
                      )
                    );
                  })
                  .then(
                    (s) => (
                      (a.m_fetching = null),
                      s.GetEResult() != O.R
                        ? Promise.reject()
                        : (this.OnRichPresenceLocUpdate(
                            a,
                            s.Body().token_lists(),
                          ),
                          Promise.resolve(a))
                    ),
                  )),
                a.m_fetching.catch(() => {
                  a.m_fetching = null;
                })),
              a.m_fetching
            );
          }
        }
        P([t.XI], l.prototype, "OnGetAppsResponse", 1),
          P([t.XI], l.prototype, "OnRichPresenceLocUpdate", 1);
        const j = new l();
      },
      84676: (ne, re, r) => {
        "use strict";
        r.d(re, {
          G6: () => M,
          Gg: () => R,
          Ow: () => T,
          Sq: () => me,
          YM: () => j,
          eR: () => q,
          ik: () => Y,
          mZ: () => P,
          t7: () => z,
          zX: () => H,
        });
        var t = r(41735),
          L = r.n(t),
          O = r(90626),
          D = r(72604),
          E = r(56062),
          f = r(30096),
          N = r(10142);
        function J(d, a, s = !0) {
          const o = s
              ? CStoreItemCache.k_DataRequest_BasicInfo
              : CStoreItemCache.k_DataRequest_CommonOnly,
            i = s || CStoreItemCache.Get().BHasStoreItem(d, a, o) ? d : null,
            [m, x] = M(i, a, o),
            [v, I] = useState(null),
            [b, B] = M(v, a, o);
          useEffect(() => {
            m?.GetAppType() === EStoreAppType.k_EStoreAppType_Demo &&
              I(m.GetParentAppID());
          }, [m]);
          let A = m?.GetShortDescription()
            ? StripBBCodeTags(m.GetShortDescription())
            : "";
          (!A || A.length === 0) &&
            b &&
            (A = b?.GetShortDescription()
              ? StripBBCodeTags(b.GetShortDescription())
              : "");
          const y = x == Y && (!v || B == Y);
          return [A, y];
        }
        const me = 1,
          q = 2,
          Y = 3;
        function M(d, a, s, o) {
          const i = (0, O.useRef)(void 0),
            m = (0, O.useRef)(void 0),
            x = (0, f.CH)();
          i.current = d;
          const [v, I] = (0, O.useState)(void 0),
            {
              include_assets: b,
              include_release: B,
              include_platforms: A,
              include_all_purchase_options: y,
              include_screenshots: V,
              include_trailers: F,
              include_ratings: oe,
              include_tag_count: k,
              include_reviews: w,
              include_basic_info: u,
              include_supported_languages: he,
              include_full_description: ve,
              include_included_items: xe,
              include_assets_without_overrides: Le,
              apply_user_filters: _,
              include_links: G,
              include_extra_details: Z,
            } = s;
          if (
            ((0, O.useEffect)(() => {
              const K = {
                include_assets: b,
                include_release: B,
                include_platforms: A,
                include_all_purchase_options: y,
                include_screenshots: V,
                include_trailers: F,
                include_ratings: oe,
                include_tag_count: k,
                include_reviews: w,
                include_basic_info: u,
                include_supported_languages: he,
                include_full_description: ve,
                include_included_items: xe,
                include_assets_without_overrides: Le,
                apply_user_filters: _,
                include_links: G,
                include_extra_details: Z,
              };
              let le = null;
              return (
                !d ||
                  d < 0 ||
                  N.A.Get().BHasStoreItem(d, a, K) ||
                  (v !== void 0 && o && o == m.current) ||
                  (o !== m.current && (I(void 0), (m.current = o)),
                  (le = L().CancelToken.source()),
                  N.A.Get()
                    .QueueStoreItemRequest(d, a, K)
                    .then((De) => {
                      !le?.token.reason && i.current === d && I(De == D.R), x();
                    })),
                () => le?.cancel("useStoreItemCache: unmounting")
              );
            }, [
              d,
              a,
              o,
              v,
              b,
              B,
              A,
              y,
              V,
              F,
              oe,
              k,
              w,
              u,
              he,
              ve,
              xe,
              Le,
              _,
              G,
              Z,
              x,
            ]),
            !d)
          )
            return [null, q];
          if (v === !1) return [void 0, q];
          if (N.A.Get().BIsStoreItemMissing(d, a)) return [void 0, q];
          if (!N.A.Get().BHasStoreItem(d, a, s)) return [void 0, me];
          const U = N.A.Get().GetStoreItemWithLegacyVisibilityCheck(d, a);
          return U ? [U, Y] : [null, q];
        }
        function z(d, a, s) {
          return M(d, E.c6.qI, a, s);
        }
        function T(d, a, s) {
          return M(d, E.c6.xO, a, s);
        }
        function R(d, a, s) {
          return M(d, E.c6.RD, a, s);
        }
        function P(d, a, s) {
          const [o, i] = M(d, a, s);
          let m;
          o?.GetStoreItemType() == E.c6.RD &&
            !o.GetAssets()?.GetHeaderURL() &&
            o?.GetIncludedAppIDs().length == 1 &&
            (m = o.GetIncludedAppIDs()[0]);
          const [x, v] = z(m, s);
          return m && x?.BIsVisible() ? [x, v] : [o, i];
        }
        function ee(d, a, s, o) {
          const i = (0, f.CH)(),
            {
              include_assets: m,
              include_release: x,
              include_platforms: v,
              include_all_purchase_options: I,
              include_screenshots: b,
              include_trailers: B,
              include_ratings: A,
              include_tag_count: y,
              include_reviews: V,
              include_basic_info: F,
              include_supported_languages: oe,
              include_full_description: k,
              include_included_items: w,
              include_assets_without_overrides: u,
              apply_user_filters: he,
              include_links: ve,
              include_extra_details: xe,
            } = s;
          return (
            (0, O.useEffect)(() => {
              if (!d || d.length == 0) return;
              const _ = {
                  include_assets: m,
                  include_release: x,
                  include_platforms: v,
                  include_all_purchase_options: I,
                  include_screenshots: b,
                  include_trailers: B,
                  include_ratings: A,
                  include_tag_count: y,
                  include_reviews: V,
                  include_basic_info: F,
                  include_supported_languages: oe,
                  include_full_description: k,
                  include_included_items: w,
                  include_assets_without_overrides: u,
                  apply_user_filters: he,
                  include_links: ve,
                  include_extra_details: xe,
                },
                G = d.filter(
                  (K) =>
                    !(
                      N.A.Get().BHasStoreItem(K, a, _) ||
                      N.A.Get().BIsStoreItemMissing(K, a)
                    ),
                );
              if (G.length == 0) return;
              const Z = L().CancelToken.source(),
                U = G.map((K) => N.A.Get().QueueStoreItemRequest(K, a, _));
              return (
                Promise.all(U).then(() => {
                  Z.token.reason || i();
                }),
                () => Z.cancel("useStoreItemCacheMultiplePackages: unmounting")
              );
            }, [
              d,
              a,
              o,
              i,
              m,
              x,
              v,
              I,
              b,
              B,
              A,
              y,
              V,
              F,
              oe,
              k,
              w,
              u,
              he,
              ve,
              xe,
            ]),
            d
              ? d.every(
                  (_) =>
                    N.A.Get().BHasStoreItem(_, a, s) ||
                    N.A.Get().BIsStoreItemMissing(_, a),
                )
                ? d.every((_) =>
                    N.A.Get().GetStoreItemWithLegacyVisibilityCheck(_, a),
                  )
                  ? Y
                  : q
                : me
              : q
          );
        }
        function H(d, a, s) {
          return ee(d, E.c6.qI, a, s);
        }
        function g(d, a, s) {
          return ee(d, EStoreItemType.k_EStoreItemType_Bundle, a, s);
        }
        function l(d, a, s) {
          return ee(d, EStoreItemType.k_EStoreItemType_Package, a, s);
        }
        function j() {
          O.useEffect(
            () => (
              N.A.Get().SetReturnUnavailableItems(!0),
              () => N.A.Get().SetReturnUnavailableItems(!1)
            ),
            [],
          );
        }
      },
      19681: (ne, re, r) => {
        "use strict";
        r.d(re, { l: () => L });
        var t = r(98609);
        function L(O, D) {
          if (!(!O?.asset_url_format || typeof O[D] != "string"))
            return (
              t.TS.BASE_URL_SHARED_CDN +
              "/store_item_assets/" +
              O.asset_url_format.replace("${FILENAME}", O[D])
            );
        }
      },
      86390: (ne, re, r) => {
        "use strict";
        r.d(re, { Cg: () => M, pZ: () => T, vg: () => z });
        var t = r(7850),
          L = r(90626),
          O = r(88003),
          D = r(18210),
          E = r(3166),
          f = r(34004),
          N = r(6740),
          J = r(3685),
          me = r(8059),
          q = r(96538);
        function Y(P) {
          return (0, t.jsx)(O.x_, {
            onEscKeypress: P.closeModal,
            bDisableBackgroundDismiss: !0,
            children: (0, t.jsx)(R, {
              redirectURL: P.redirectURL,
              guestOption: P.guestOption,
            }),
          });
        }
        function M(P) {
          const { redirectURL: ee = window.location.href } = P;
          return (0, t.jsx)(q.EN, {
            active: !0,
            children: (0, t.jsx)(Y, { redirectURL: ee }),
          });
        }
        function z() {
          (0, O.pg)(
            (0, t.jsx)(Y, {
              ownerWin: window,
              redirectURL: window.location.href,
            }),
            window,
            { strTitle: (0, D.we)("#Login_SignInTitle") },
          );
        }
        function T(P, ee) {
          (0, O.pg)(
            (0, t.jsx)(Y, {
              ownerWin: window,
              redirectURL: P,
              guestOption: ee,
            }),
            window,
            { strTitle: (0, D.we)("#Login_SignInTitle") },
          );
        }
        function R(P) {
          const { redirectURL: ee, guestOption: H } = P,
            [g] = (0, L.useState)(
              new J.D(E.TS.WEBAPI_BASE_URL).GetAnonymousServiceTransport(),
            ),
            [l, j] = (0, L.useState)(!1),
            d = (a) => {
              a == me.wI.k_PrimaryDomainFail
                ? j(!0)
                : window.location.assign(ee);
            };
          return (0, t.jsx)("div", {
            children: l
              ? (0, t.jsx)(f.Fn, {})
              : (0, t.jsx)(f.YN, {
                  autoFocus: !0,
                  transport: g,
                  platform: N.SS.tS,
                  onComplete: d,
                  redirectUrl: ee,
                  theme: "modal",
                  children: H && (0, t.jsx)(f.Mk, { redirectURL: ee }),
                }),
          });
        }
      },
      96533: (ne, re, r) => {
        "use strict";
        r.r(re), r.d(re, { default: () => Le });
        var t = r(7850),
          L = r(41735),
          O = r.n(L),
          D = r(3166),
          E = r(80902);
        function f(_, G, Z, U, K) {
          return (0, E.I)(N(_, G, Z, U, K));
        }
        function N(_, G, Z, U, K) {
          return {
            queryKey: ["gamemixer", _, G, Z, U, K],
            queryFn: async () => {
              let le = {
                appids: _.join(","),
                appweights: G.join(","),
                sessionid: (0, D.KC)(),
                selffactor: Z,
                popularity: K ? 0 : U,
                scoperange: K ? 100 : 0,
                scopedecayrange: K ? 1e3 : 0,
                scopedecaystrength: K ? 20 : 0,
              };
              const De = await O().get(
                `${D.TS.STORE_BASE_URL}gameexplorer/exploreapplist`,
                { params: le, withCredentials: !0, timeout: 1e4 },
              );
              if (De.data)
                return Object.entries(De.data)
                  .map(([je, Me]) => ({
                    nAppID: Number(je),
                    fDistance: Number(Me),
                  }))
                  .filter((je) => je.fDistance > 0 && !_.includes(je.nAppID))
                  .sort((je, Me) => Me.fDistance - je.fDistance);
              throw "Failed FetchAppValues";
            },
            placeholderData: (le) => le,
          };
        }
        function J() {
          return (0, E.I)(me());
        }
        function me() {
          return {
            queryKey: ["gamemixerplayed"],
            queryFn: async () => {
              let _ = { sessionid: (0, D.KC)() };
              const G = await O().get(
                `${D.TS.STORE_BASE_URL}gameexplorer/exploreplayedlist`,
                { params: _, withCredentials: !0, timeout: 1e4 },
              );
              if (G.data) return G.data;
              throw "Failed FetchAppValues";
            },
            placeholderData: (_) => _,
          };
        }
        var q = r(1418),
          Y = r(79611),
          M = r(87275),
          z = r(21663),
          T = r(68388),
          R = r(90626),
          P = r(86390),
          ee = r(51079),
          H = r(36707),
          g = r(18210),
          l = r(41526),
          j = r(19298),
          d = r(84676),
          a = r(47385),
          s = r(96117),
          o = r(92757),
          i = r(56062),
          m = r(24805);
        const x = {
          arrSelectedAppInfos: [],
          nSelfFactor: 0,
          nPopularity: 0,
          bSimilar: !0,
        };
        function v(_) {
          const G =
              _.arrSelectedAppInfos.length == 0
                ? "0"
                : _.arrSelectedAppInfos.map((U) => U.nAppID).join(),
            Z =
              _.arrSelectedAppInfos.length == 0
                ? "0"
                : _.arrSelectedAppInfos.map((U) => U.nWeight.toFixed(0)).join();
          return `/gameexplorer/${G}/${Z}/${_.nSelfFactor}/${_.nPopularity}/${_.bSimilar}`;
        }
        function I(_) {
          const G = _.appids?.split(",").filter((U) => U != "0") ?? [],
            Z = _.weights?.split(",").filter((U) => U != "0") ?? [];
          return {
            arrSelectedAppInfos: G.map((U) => Number(U)).map((U, K) => ({
              nAppID: U,
              nWeight: Number(Z[K]),
            })),
            nSelfFactor: Number(_?.selffactor ?? "0"),
            nPopularity: Number(_?.popularity ?? "0"),
            bSimilar: _?.similar == "true",
          };
        }
        function b() {
          const _ = (0, o.g)(),
            G = I(_),
            [Z, U] = R.useState(G),
            [K, le] = R.useState(G),
            De = (0, o.W6)(),
            je = f(
              K.arrSelectedAppInfos.map((se) => se.nAppID),
              K.arrSelectedAppInfos.map((se) => se.nWeight),
              K.nSelfFactor,
              K.nPopularity,
              K.bSimilar,
            ),
            Me = (se, ae) => {
              U(se), ae && (De.push(v(se)), le(se));
            },
            ce = (se) => {
              const ae = {
                ...K,
                arrSelectedAppInfos: [{ nAppID: se, nWeight: 100 }],
              };
              U(ae), De.push(v(ae)), le(ae);
            };
          return (0, t.jsx)(ee.Ay, {
            controller: "gameexplorer",
            method: "default",
            feature: "capsule",
            children: (0, t.jsx)(q.Y, {
              children: (0, t.jsx)(j.Z, {
                className: (0, H.A)(
                  l.GameExplorerApp,
                  je.isFetching && l.Refreshing,
                ),
                children: (0, t.jsxs)(j.Z, {
                  className: l.GameExplorerContainer,
                  children: [
                    (0, t.jsx)(B, {}),
                    !D.iA.steamid && (0, t.jsx)(w, {}),
                    (0, t.jsx)(F, { state: Z, onChange: Me }),
                    je.data &&
                      (0, t.jsx)(k, {
                        arrNearApps: je.data,
                        bIsPending: je.isFetching,
                        fnSetApp: ce,
                      }),
                  ],
                }),
              }),
            }),
          });
        }
        function B() {
          return (0, t.jsxs)(j.Z, {
            className: l.GameExplorerHeader,
            children: [
              (0, t.jsx)(j.Z, {
                className: l.GameExplorerTitle,
                children: "Game Explorer",
              }),
              (0, t.jsx)(j.Z, {
                className: l.GameExplorerDescription,
                children: "Explore and Mix Games",
              }),
            ],
          });
        }
        function A(_) {
          const [G] = (0, d.t7)(_.selectedAppInfo.nAppID, {
            include_basic_info: !0,
            include_assets_without_overrides: !0,
          });
          if (!G) return null;
          const Z = G.GetAssetsWithoutOverrides().GetMainCapsuleURL();
          return (0, t.jsxs)("div", {
            className: l.SelectedApp,
            children: [
              (0, t.jsx)("div", {
                className: l.RemoveButttonContainer,
                children: (0, t.jsx)(Y.$, {
                  size: "1",
                  color: "red",
                  onClick: () => _.onRemove(_.selectedAppInfo.nAppID),
                  children: "X",
                }),
              }),
              (0, t.jsx)("img", { className: l.CapsuleImage, src: Z }),
              (0, t.jsx)("div", {
                className: l.WeightContainer,
                children:
                  _.nNumSelected > 1 &&
                  (0, t.jsx)(M.A, {
                    value: _.selectedAppInfo.nWeight,
                    min: 0,
                    max: 100,
                    onValueChange: (U) =>
                      _.onWeightChange(_.selectedAppInfo.nAppID, U, !1),
                    onValueSettled: (U) =>
                      _.onWeightChange(_.selectedAppInfo.nAppID, U, !0),
                  }),
              }),
            ],
          });
        }
        function y(_) {
          if (_.bSimilar) return "Similar";
          switch (_.nPopularity) {
            case 0:
              return "Any";
            case 40:
              return "Popular";
            case 130:
              return "Niche";
          }
          return "";
        }
        function V(_) {
          switch (_.nSelfFactor) {
            case 0:
              return "None";
            case 20:
              return "Some";
            case 40:
              return "Lots";
          }
          return "";
        }
        function F(_) {
          const [G, Z] = R.useState(y(_.state)),
            [U, K] = R.useState(V(_.state)),
            le = (W, ie, ue) => {
              let Q = _.state.arrSelectedAppInfos.slice();
              Q.find(($) => $.nAppID == W) == null &&
                ((ie = 100 / (Q.length + 1)),
                Q.push({ nAppID: W, nWeight: ie }));
              let de = !1;
              if (
                (ie == -1 &&
                  ((ie = 0), (Q = Q.filter(($) => $.nAppID != W)), (de = !0)),
                Q.length > 1)
              ) {
                const $ = Q.map((Se) =>
                    Se.nAppID != W ? Se.nWeight : null,
                  ).filter((Se) => Se != null),
                  He = $.reduce((Se, Re) => Se + Re, 0);
                let Ne = (100 - ie - He) / (Q.length - (de ? 0 : 1));
                const Ve = $.reduce(
                    (Se, Re) => Se + Math.max(0, Re + Ne - 100),
                    0,
                  ),
                  ke = $.reduce((Se, Re) => Se + Math.min(0, Re + Ne), 0);
                (Ne += Math.floor(Ve / (Q.length - 1))),
                  (Ne += Math.floor(ke / (Q.length - 1))),
                  (Q = Q.map((Se) => ({
                    nAppID: Se.nAppID,
                    nWeight:
                      Se.nAppID == W
                        ? ie
                        : Math.max(0, Math.min(100, Se.nWeight + Ne)),
                  }))),
                  _.onChange({ ..._.state, arrSelectedAppInfos: Q }, ue);
              } else _.onChange({ ..._.state, arrSelectedAppInfos: Q }, ue);
            },
            De = (W) => {
              le(W, 100, !0);
            },
            je = (W) => {
              le(W, -1, !0);
            },
            Me = (W) => {
              switch (W) {
                case "None":
                  _.onChange({ ..._.state, nSelfFactor: 0 }, !0);
                  break;
                case "Some":
                  _.onChange({ ..._.state, nSelfFactor: 20 }, !0);
                  break;
                case "Lots":
                  _.onChange({ ..._.state, nSelfFactor: 40 }, !0);
                  break;
              }
              K(W);
            },
            ce = (W) => {
              switch (W) {
                case "Similar":
                  _.onChange({ ..._.state, nPopularity: 0, bSimilar: !0 }, !0);
                  break;
                case "Any":
                  _.onChange({ ..._.state, nPopularity: 0, bSimilar: !1 }, !0);
                  break;
                case "Popular":
                  _.onChange({ ..._.state, nPopularity: 40, bSimilar: !1 }, !0);
                  break;
                case "Niche":
                  _.onChange(
                    { ..._.state, nPopularity: 130, bSimilar: !1 },
                    !0,
                  );
                  break;
              }
              Z(W);
            },
            se = ["Similar", "Any", "Popular", "Niche"],
            ae = ["None", "Some", "Lots"];
          return (0, t.jsx)("div", {
            className: l.GameExplorerKnobs,
            children: (0, t.jsxs)("div", {
              className: l.AppList,
              children: [
                (0, t.jsxs)("div", {
                  className: l.AppRow,
                  children: [
                    _.state.arrSelectedAppInfos.length == 0 &&
                      (0, t.jsx)("div", {
                        className: l.Empty,
                        children: "Add games to start exploring",
                      }),
                    _.state.arrSelectedAppInfos.map((W) =>
                      (0, t.jsx)(
                        A,
                        {
                          selectedAppInfo: W,
                          onWeightChange: le,
                          onRemove: je,
                          nNumSelected: _.state.arrSelectedAppInfos.length,
                        },
                        W.nAppID,
                      ),
                    ),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: l.AppSelectors,
                  children: [
                    (0, t.jsx)(ve, {
                      fnSelectAppID: De,
                      arrSelectedAppIDs: _.state.arrSelectedAppInfos.map(
                        (W) => W.nAppID,
                      ),
                    }),
                    (0, t.jsx)(xe, {
                      fnSelectAppID: De,
                      arrSelectedAppIDs: _.state.arrSelectedAppInfos.map(
                        (W) => W.nAppID,
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
                        (0, t.jsx)(z.I, {
                          options: se,
                          value: G,
                          onValueChange: (W) => ce(W),
                          radius: "sm",
                        }),
                        (0, t.jsxs)("div", {
                          className: l.ControlDescription,
                          children: [
                            G == "Similar" &&
                              "Games with similar popularity to your input games",
                            G == "Any" &&
                              "No popularity restrictions, can be noisy",
                            G == "Popular" && "Higher popularity games",
                            G == "Niche" &&
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
                        (0, t.jsx)(z.I, {
                          options: ae,
                          value: U,
                          onValueChange: (W) => Me(W),
                          radius: "sm",
                        }),
                        (0, t.jsxs)("div", {
                          className: l.ControlDescription,
                          children: [
                            U == "None" &&
                              "Your game preferences are not factored in",
                            U == "Some" &&
                              "A bit of your game preferences are mixed in",
                            U == "Lots" &&
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
        function oe(_) {
          const [G] = (0, d.G6)(_.nAppID, i.c6.qI, m.Xh);
          return G
            ? (0, t.jsxs)("div", {
                className: l.CapsuleContainer,
                children: [
                  (0, t.jsx)(s.W, {
                    capsule: { id: _.nAppID },
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
                      `${(_.fDistance * 100).toFixed(2)}%`,
                      (0, t.jsx)("div", {
                        className: l.StartExplore,
                        children: (0, t.jsx)(Y.$, {
                          size: "1",
                          color: "green",
                          onClick: () => _.fnSetApp(_.nAppID),
                          children: "Go",
                        }),
                      }),
                    ],
                  }),
                ],
              })
            : null;
        }
        function k(_) {
          return _.arrNearApps.length == 0
            ? null
            : (0, t.jsx)("div", {
                className: (0, H.A)(
                  l.GameExplorerResults,
                  _.bIsPending && l.Pending,
                ),
                children: _.arrNearApps?.map((G) =>
                  (0, t.jsx)(
                    oe,
                    {
                      nAppID: G.nAppID,
                      fDistance: G.fDistance,
                      fnSetApp: _.fnSetApp,
                    },
                    G.nAppID,
                  ),
                ),
              });
        }
        function w() {
          return (0, t.jsxs)(j.Z, {
            className: l.PersonalCalendarLoginPrompt,
            children: [
              (0, g.we)("#PersonalCalendar_LoginPrompt"),
              (0, t.jsx)("button", {
                onClick: P.vg,
                className: l.LoginButton,
                children: (0, g.we)("#Login_SignIn"),
              }),
            ],
          });
        }
        function u(_) {
          const [G] = (0, d.t7)(_.nAppID, {
            include_basic_info: !0,
            include_assets_without_overrides: !0,
          });
          if (!G) return null;
          const Z = G.GetAssetsWithoutOverrides().GetSmallCapsuleURL();
          return (0, t.jsxs)("div", {
            className: l.AppSelectorResult,
            onPointerDown: () => _.onClick(_.nAppID),
            children: [
              (0, t.jsx)("img", { className: l.Logo, src: Z }),
              (0, t.jsx)("div", {
                className: l.RightSide,
                children: G.GetName(),
              }),
            ],
          });
        }
        const he = R.forwardRef(function (G, Z) {
            const U = (0, a.T3)(G.strSearch, null, 10),
              K = G.fnSetResultApps;
            return (
              R.useEffect(() => {
                K(U.data?.rgItemIDs.map((le) => le.appid));
              }, [K, U.data]),
              (0, t.jsx)("div", {
                className: (0, H.A)(
                  l.AppSelectorResults,
                  U.data?.rgItemIDs.length > 0 && l.Show,
                ),
                ref: Z,
                children: U.data?.rgItemIDs
                  .filter((le) => !G.arrIgnoreAppIDs.includes(le.appid))
                  .map((le) =>
                    (0, t.jsx)(
                      u,
                      { nAppID: le.appid, onClick: G.fnClickApp },
                      le.appid,
                    ),
                  ),
              })
            );
          }),
          ve = (_) => {
            const [G, Z] = R.useState(""),
              [U, K] = R.useState(0),
              [le, De] = R.useState(0),
              [je, Me] = R.useState([]),
              ce = R.useRef(U),
              se = R.useRef(null),
              ae = 300;
            R.useEffect(() => {
              ce.current = U;
            }, [U]);
            const W = () => {
                Date.now() - ce.current < ae || (De(0), Me([]));
              },
              ie = ($) => {
                $ != G && (Z($), K(Date.now()), setTimeout(W, ae));
              },
              ue = ($) => {
                _.fnSelectAppID($), Z(""), De(0), Me([]), K(Date.now());
              },
              Q = ($) => {
                switch ($) {
                  case "Enter": {
                    je.length > 0 && ue(je[0]);
                    break;
                  }
                  case "Escape": {
                    Z("");
                    break;
                  }
                }
              },
              de = _.arrSelectedAppIDs.length >= 3;
            return (0, t.jsxs)("div", {
              className: l.AppSelector,
              children: [
                (0, t.jsx)("input", {
                  type: "text",
                  className: (0, H.A)(l.ValueInput, de && l.Disabled),
                  value: G,
                  onChange: ($) => ie($.target.value),
                  onKeyDown: ($) => Q($.key),
                  onBlur: ($) => Z(""),
                  placeholder: de ? "Max three games" : "Type any game name",
                  disabled: de,
                }),
                (0, t.jsx)(he, {
                  strSearch: G,
                  nSelectedResult: le,
                  fnSetResultApps: Me,
                  fnClickApp: ue,
                  arrIgnoreAppIDs: _.arrSelectedAppIDs,
                  ref: se,
                }),
              ],
            });
          },
          xe = (_) => {
            const Z = J().data,
              U = Z?.appids ?? [];
            return (0, t.jsx)("div", {
              className: l.AppPlayedSelector,
              children: (0, t.jsx)(T.l6, {
                options: U,
                size: "1",
                selectedValue: 0,
                onSelectionChange: (K) => _.fnSelectAppID(K),
                getOptionLabel: (K) =>
                  K == 0
                    ? "Select a recent game to add it"
                    : Z?.names[Z?.appids.indexOf(K)],
              }),
            });
          },
          Le = b;
      },
      64849: (ne, re, r) => {
        "use strict";
        r.r(re), r.d(re, { default: () => _t });
        var t = r(7850),
          L = r(58732),
          O = r(85528),
          D = r(3166),
          E = r(14947),
          f = r(30096),
          N = r(41735),
          J = r.n(N),
          me = Object.defineProperty,
          q = Object.getOwnPropertyDescriptor,
          Y = (c, e, n, p) => {
            for (
              var h = p > 1 ? void 0 : p ? q(e, n) : e, C = c.length - 1, S;
              C >= 0;
              C--
            )
              (S = c[C]) && (h = (p ? S(e, n, h) : S(h)) || h);
            return p && h && me(e, n, h), h;
          };
        class M {
          rgModelNames = [];
          constructor() {
            (0, E.Gn)(this);
          }
          Init(e) {
            O.Vw.Init(e);
            const n = `${D.TS.STORE_BASE_URL}labs/ajaxgetsimilaritymodelnames`;
            J()
              .get(n)
              .then((p) => {
                if (p.data) {
                  let h = [];
                  for (const C of p.data) C != "default" && h.push(C);
                  h.sort(), (h = ["default", ...h]), (this.rgModelNames = h);
                }
              });
          }
          async ComputePathBetweenApps(e, n, p, h, C, S, te) {
            const ge = Math.acos(p);
            let fe = async (Oe) => {
                let _e = await this.GetNeighbors(Oe),
                  be = [];
                for (let Ie = 0; Ie < _e.length; Ie++) {
                  const pe = _e[Ie];
                  if (
                    (!h || be.length > h) &&
                    (pe.cost > ge || (C && be.length >= C))
                  )
                    break;
                  be.push(pe);
                }
                return be;
              },
              Ce = await new T(
                fe,
                this.EstimateCosts,
                (Oe, _e) => Oe == _e,
                te,
              ).FindPath(e, n, S || 10);
            if (Ce.path) {
              let Oe = [],
                _e = 0;
              for (let be = 0; be < Ce.path.length; be++) {
                const Ie = Ce.path[be],
                  pe = Ie.cost - _e;
                (_e = Ie.cost),
                  Oe.push({ appid: Ie.node, similarity: Math.cos(pe) });
              }
              return Oe;
            } else throw new Error("Unable to compute path.");
          }
          async GetNeighbors(e) {
            const n = `${D.TS.STORE_BASE_URL}labs/ajaxgetsimilarapps?appid=${e}`;
            let p = await J().get(n),
              h = [];
            if (p.data && p.data.appid == e)
              for (let C = 0; C < p.data.similar_appids.length; C++)
                h.push({
                  node: p.data.similar_appids[C],
                  cost: Math.acos(p.data.similarity_scores[C]),
                });
            return h;
          }
          async EstimateCosts(e, n) {
            const p = `${D.TS.STORE_BASE_URL}labs/ajaxgetappsimilarities?appidtarget=${n}&${e.map((C) => "appid[]=" + C.toString()).join("&")}`;
            let h = await J().get(p);
            if (h.data && h.data.similarity_scores)
              return h.data.similarity_scores.map((C) =>
                Math.acos(parseFloat(C)),
              );
            throw new Error("Unable to fetch cost estimates");
          }
        }
        Y([E.sH], M.prototype, "rgModelNames", 2),
          Y([f.oI], M.prototype, "GetNeighbors", 1),
          Y([f.oI], M.prototype, "EstimateCosts", 1);
        class z {
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
            for (let n = 0; n < this.m_Length; n++)
              if (e(this.m_Heap[n]))
                return { index: n, element: this.m_Heap[n] };
          }
          LowerPriorityOfElement(e, n) {
            (this.m_Heap[e] = n), this.BubbleUp(e);
          }
          BubbleDown() {
            let e = 0;
            do {
              const n = e * 2 + 1,
                p = e * 2 + 2;
              let h = e;
              if (
                (n < this.m_Length &&
                  this.m_fnCompare(this.m_Heap[h], this.m_Heap[n]) > 0 &&
                  (h = n),
                p < this.m_Length &&
                  this.m_fnCompare(this.m_Heap[h], this.m_Heap[p]) > 0 &&
                  (h = p),
                h != e)
              ) {
                const C = this.m_Heap[e];
                (this.m_Heap[e] = this.m_Heap[h]),
                  (this.m_Heap[h] = C),
                  (e = h);
              } else break;
            } while (e < this.m_Length);
          }
          BubbleUp(e) {
            let n = e || this.m_Length - 1;
            for (; n > 0; ) {
              const p = (n - 1) >> 1;
              if (this.m_fnCompare(this.m_Heap[p], this.m_Heap[n]) > 0) {
                const h = this.m_Heap[p];
                (this.m_Heap[p] = this.m_Heap[n]),
                  (this.m_Heap[n] = h),
                  (n = p);
              } else break;
            }
          }
        }
        class T {
          m_fnGetNeighbors;
          m_fnEstimateCosts;
          m_fnEquality;
          m_fnIterationCallback;
          constructor(e, n, p, h) {
            (this.m_fnGetNeighbors = e),
              (this.m_fnEstimateCosts = n),
              (this.m_fnEquality = p),
              (this.m_fnIterationCallback = h);
          }
          async FindPath(e, n, p) {
            let h = new z((Ce, Oe) => Ce.cost - Oe.cost),
              C = new Set();
            h.Push({ node: e, cost: 0 });
            let S = new Map(),
              te = new Map(),
              ge = new Map(),
              fe = (await this.m_fnEstimateCosts([e], n))[0];
            S.set(e, fe), te.set(e, 0);
            let ye = 0;
            for (; h.length > 0 && ye < p; ) {
              let Ce = h.Pop();
              if (this.m_fnEquality(Ce.node, n)) {
                let _e = [],
                  be = Ce.node;
                for (; ge.has(be); ) _e.push(be), (be = ge.get(be));
                let Ie = [];
                for (let pe = _e.length - 1; pe >= 0; pe--)
                  Ie.push({ node: _e[pe], cost: te.get(_e[pe]) });
                return { path: Ie };
              }
              C.add(Ce.node);
              let Oe = await this.m_fnGetNeighbors(Ce.node);
              if (Oe.length > 0) {
                let _e = await this.m_fnEstimateCosts(
                  Oe.map((Ie) => Ie.node),
                  n,
                );
                if (_e.length != Oe.length)
                  return (
                    console.warn(
                      "Failed to fetch expected number of cost estimates. Failing pathfinding.",
                    ),
                    {}
                  );
                let be = te.get(Ce.node);
                for (let Ie = 0; Ie < Oe.length; Ie++) {
                  const pe = Oe[Ie];
                  let Be = be + pe.cost;
                  if (
                    (!te.has(pe.node) || Be < te.get(pe.node)) &&
                    (ge.set(pe.node, Ce.node),
                    te.set(pe.node, Be),
                    S.set(pe.node, pe.cost + _e[Ie]),
                    !C.has(pe.node))
                  ) {
                    const Ke = pe.cost + _e[Ie];
                    let Qe = h.FindElement((It) => It.node == pe.node);
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
              ye++, this.m_fnIterationCallback && this.m_fnIterationCallback();
            }
            throw new Error("No path found.");
          }
        }
        const R = new M();
        window.g_LabsSandbox = R;
        var P = r(90626),
          ee = r(17083),
          H = r(92757),
          g = r(62139),
          l = r(16412),
          j = r(32093),
          d = r(75844),
          a = r(36707),
          s = Object.defineProperty,
          o = Object.getOwnPropertyDescriptor,
          i = (c, e, n, p) => {
            for (
              var h = p > 1 ? void 0 : p ? o(e, n) : e, C = c.length - 1, S;
              C >= 0;
              C--
            )
              (S = c[C]) && (h = (p ? S(e, n, h) : S(h)) || h);
            return p && h && s(e, n, h), h;
          };
        class m extends P.Component {
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
                (O.Vw.EnsureAppInfoForAppIDs([this.props.appidInitial]).then(
                  () => {
                    const n = O.Vw.GetAppInfo(this.props.appidInitial);
                    this.setState({
                      appid: this.props.appidInitial,
                      appinfo: O.Vw.GetAppInfo(this.props.appidInitial),
                    });
                  },
                ),
                (this.state.appid = this.props.appidInitial));
          }
          OnDisplayClicked() {
            this.setState({ mode: "select" });
          }
          async UpdateAppSuggestions(e) {
            const n = e.target.value && e.target.value.trim();
            if (!n?.length) {
              this.setState({ strSearch: "", rgSuggestions: null });
              return;
            }
            window.clearTimeout(this.m_currentRequest),
              (this.m_currentRequest = window.setTimeout(async () => {
                const p = {
                    cc: D.TS.COUNTRY,
                    l: D.TS.LANGUAGE,
                    realm: j.TU.k_ESteamRealmGlobal,
                    origin: self.origin,
                    f: "jsonfull",
                    term: n.replace(" ", "+"),
                    require_type: "game",
                    excluded_tags: [],
                    excluded_content_descriptors: [],
                  },
                  h = `${D.TS.STORE_BASE_URL}search/suggest`,
                  C = await J().get(h, { params: p, withCredentials: !0 });
                let S;
                C?.data?.length
                  ? (S = C.data.map((te) =>
                      (0, t.jsxs)(
                        "div",
                        {
                          className: g.Suggestion,
                          onClickCapture: () =>
                            this.SetSelectedApp(parseInt(te.id)),
                          children: [
                            (0, t.jsx)("img", {
                              src: te.img,
                              className: g.LogoImage,
                            }),
                            (0, t.jsx)("div", {
                              className: g.AppName,
                              children:
                                te.name +
                                (this.props.showAppIds ? ` (${te.id})` : ""),
                            }),
                          ],
                        },
                        `suggestion-${te.id}`,
                      ),
                    ))
                  : (S = []),
                  this.setState({ strSearch: n, rgSuggestions: S });
              }, 250));
          }
          SetSelectedApp(e) {
            e && e != 0
              ? O.Vw.EnsureAppInfoForAppIDs([e]).then(() => {
                  const n = O.Vw.GetAppInfo(e);
                  this.setState({
                    appid: e,
                    appinfo: O.Vw.GetAppInfo(e),
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
            const e = this.props.classOverride ?? g.AppSelector;
            let n = null;
            const p = (0, t.jsx)(l.pd, {
              type: "text",
              onChange: this.UpdateAppSuggestions,
            });
            if (this.state.mode == "display") {
              const h = this.state.appinfo
                ? this.state.appinfo.name +
                  (this.props.showAppIds ? ` (${this.state.appid})` : "")
                : (this.props.strPrompt ?? "Select game");
              n = (0, t.jsx)("div", {
                className: g.AppDisplay,
                children: (0, t.jsx)("div", {
                  className: g.AppName,
                  children: h,
                }),
              });
            } else if (this.state.mode == "select") {
              const h = this.state.strSearch.length > 0;
              n = (0, t.jsxs)("div", {
                className: g.AppSelect,
                children: [
                  p,
                  h &&
                    (0, t.jsx)("div", {
                      className: g.Suggestions,
                      children: this.state.rgSuggestions,
                    }),
                ],
              });
            }
            return (0, t.jsx)("div", {
              className: e,
              onClick: this.OnDisplayClicked,
              onKeyUpCapture: this.OnKeyUp,
              children: n,
            });
          }
        }
        i([f.oI], m.prototype, "OnDisplayClicked", 1),
          i([f.oI], m.prototype, "UpdateAppSuggestions", 1),
          i([f.oI], m.prototype, "OnKeyUp", 1);
        class x extends P.Component {
          render() {
            if (this.props.appid == 0)
              return (0, t.jsx)("div", { className: g.SimilarApp });
            {
              const e = O.Vw.GetAppInfo(this.props.appid);
              if (!e || !e.is_valid)
                return (0, t.jsx)("div", { className: g.SimilarApp });
              let n = [];
              if (this.props.score) {
                n.push(
                  (0, t.jsx)("div", { className: g.Spacer }, "score-spacer"),
                );
                const C = Math.round(this.props.score * 100).toString() + "%";
                n.push(
                  (0, t.jsx)(
                    "div",
                    { className: g.Score, children: C },
                    "score-value",
                  ),
                );
              }
              const p = e.name + " (" + this.props.appid.toString() + ")",
                h = this.props.fnOnSelected
                  ? this.props.fnOnSelected
                  : (C) => {};
              return (0, t.jsxs)("div", {
                className: g.SimilarApp,
                onClick: () => h(this.props.appid),
                children: [
                  (0, t.jsx)("div", { className: g.AppName, children: p }),
                  n,
                ],
              });
            }
          }
        }
        class v extends P.Component {
          state = {};
          ref_app_a = P.createRef();
          ref_app_b = P.createRef();
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
                n = this.ref_app_b.current.state.appid,
                p = `${D.TS.STORE_BASE_URL}labs/ajaxgetappsimilarities?appidtarget=${e}&appid[]=${n}`;
              J()
                .get(p)
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
              className: g.LabsSimilarity,
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
                (0, t.jsx)("div", { className: g.HorizontalSpacer }),
                (0, t.jsx)("div", { className: g.Score, children: e }),
                (0, t.jsx)("div", { className: g.HorizontalSpacer }),
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
        i([f.oI], v.prototype, "OnAppSelected", 1);
        let I = class extends P.Component {
          selected_app = 0;
          similar_apps = [];
          similarity_scores = [];
          similarity_model = "default";
          app_selector_ref = P.createRef();
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
              const n = `${D.TS.STORE_BASE_URL}labs/ajaxgetsimilarapps?appid=${c}&model=${this.similarity_model}`;
              J()
                .get(n)
                .then((p) => {
                  if (p.data && p.data.appid == this.selected_app) {
                    let h = new Set(
                      p.data.similar_appids.slice(0, this.props.max_similar),
                    );
                    h.add(p.data.appid),
                      O.Vw.EnsureAppInfoForAppIDs(h).then(() => {
                        (this.similar_apps = p.data.similar_appids),
                          (this.similarity_scores = p.data.similarity_scores);
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
            const n = Math.min(
              this.similar_apps.length,
              this.similarity_scores.length,
              this.props.max_similar,
            );
            for (e = 0; e < n; e++) {
              const h = this.similar_apps[e],
                C = this.similarity_scores[e];
              c.push(
                (0, t.jsx)(
                  x,
                  { appid: h, score: C, fnOnSelected: this.SetSelectedApp },
                  h,
                ),
              );
            }
            let p = [];
            for (const h of R.rgModelNames) {
              let C = { label: (0, t.jsx)("div", { children: h }, h), data: h };
              p.push(C);
            }
            return (0, t.jsxs)("div", {
              className: g.LabsSimilarGames,
              children: [
                (0, t.jsx)(l.m, {
                  rgOptions: p,
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
                (0, t.jsx)("div", { className: g.SimilarApps, children: c }),
              ],
            });
          }
        };
        i([E.sH], I.prototype, "selected_app", 2),
          i([E.sH], I.prototype, "similar_apps", 2),
          i([E.sH], I.prototype, "similarity_scores", 2),
          i([E.sH], I.prototype, "similarity_model", 2),
          i([f.oI], I.prototype, "OnSelectedApp", 1),
          i([f.oI], I.prototype, "SetSelectedApp", 1),
          i([f.oI], I.prototype, "OnModelChanged", 1),
          (I = i([d.PA], I));
        let b = class extends P.Component {
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
              className: g.Operand,
              children: [
                (0, t.jsx)("div", {
                  className: g.OperatorSelect,
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
        i([E.sH], b.prototype, "selected_app", 2),
          i([E.sH], b.prototype, "selected_operator", 2),
          i([f.oI], b.prototype, "OnSelectedApp", 1),
          i([f.oI], b.prototype, "OnSelectedOperator", 1),
          (b = i([d.PA], b));
        let B = class extends P.Component {
          operands = [];
          similarity_model = "default";
          similar_apps = [];
          similarity_scores = [];
          operand_refs;
          constructor(c) {
            super(c), (0, E.Gn)(this), (this.operand_refs = []);
            for (let e = 0; e < c.max_operands; e++)
              this.operand_refs.push(P.createRef());
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
            const c = this.operands.map((n) => "appid[]=" + n.app.toString()),
              e = `${D.TS.STORE_BASE_URL}labs/ajaxgetappvectors?${c.join("&")}&model=${this.similarity_model}`;
            J()
              .get(e)
              .then((n) => {
                if (
                  ((this.similar_apps = []),
                  (this.similarity_scores = []),
                  n.data && n.data.length == this.operands.length)
                ) {
                  let p = n.data[0].components.map((S) => parseFloat(S));
                  for (let S = 1; S < this.operands.length; S++) {
                    const te = n.data[S].components.map((ge) => parseFloat(ge));
                    this.operands[S].operator == "Plus"
                      ? (p = p.map((ge, fe) => ge + te[fe]))
                      : this.operands[S].operator == "Minus"
                        ? (p = p.map((ge, fe) => ge - te[fe]))
                        : console.log(
                            "Unexpected operator " + this.operands[S].operator,
                          );
                  }
                  const h = p.map((S) => S * S).reduce((S, te) => S + te, 0),
                    C = Math.sqrt(h);
                  if (C > 1e-4) {
                    const te = p
                        .map((fe) => fe / C)
                        .map((fe) => "x[]=" + fe)
                        .join("&"),
                      ge = `${D.TS.STORE_BASE_URL}labs/ajaxgetmostsimilarappstovector?${te}&model=${this.similarity_model}`;
                    J()
                      .get(ge)
                      .then((fe) => {
                        let ye = new Set(
                          fe.data.similar_appids.slice(
                            0,
                            this.props.max_similar,
                          ),
                        );
                        O.Vw.EnsureAppInfoForAppIDs(ye).then(() => {
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
            for (const S of R.rgModelNames) {
              let te = {
                label: (0, t.jsx)("div", { children: S }, S),
                data: S,
              };
              c.push(te);
            }
            let e = [],
              n = 0;
            for (const S of this.operands)
              e.push(
                (0, t.jsx)(
                  b,
                  {
                    app: S.app,
                    operator: S.operator,
                    fnOnChange: this.OnOperandChanged,
                    ref: this.operand_refs[n],
                  },
                  n,
                ),
              ),
                n++;
            let p = null;
            this.operands.length < this.props.max_operands &&
              (p = (0, t.jsx)("div", {
                className: g.AddOperand,
                onClick: this.OnAddOperand,
                children: "+",
              }));
            let h = [];
            const C = Math.min(
              this.similar_apps.length,
              this.similarity_scores.length,
              this.props.max_similar,
            );
            for (let S = 0; S < C; S++) {
              const te = this.similar_apps[S],
                ge = this.similarity_scores[S];
              h.push((0, t.jsx)(x, { appid: te, score: ge }, te));
            }
            return (0, t.jsxs)("div", {
              className: g.LabsMixer,
              children: [
                (0, t.jsx)(l.m, {
                  rgOptions: c,
                  onChange: this.OnModelChanged,
                  selectedOption: "default",
                }),
                (0, t.jsx)("h1", { children: "Mixture" }),
                e,
                p,
                (0, t.jsx)("h1", { children: "Games similar to mixture" }),
                (0, t.jsx)("div", { className: g.SimilarApps, children: h }),
              ],
            });
          }
        };
        i([E.sH], B.prototype, "operands", 2),
          i([E.sH], B.prototype, "similarity_model", 2),
          i([E.sH], B.prototype, "similar_apps", 2),
          i([E.sH], B.prototype, "similarity_scores", 2),
          i([f.oI], B.prototype, "OnModelChanged", 1),
          i([f.oI], B.prototype, "OnAddOperand", 1),
          i([f.oI], B.prototype, "OnOperandChanged", 1),
          (B = i([d.PA], B));
        let A = class extends P.Component {
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
              R.ComputePathBetweenApps(
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
                    O.Vw.EnsureAppInfoForAppIDs(c.map((e) => e.appid)).then(
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
            O.Vw.EnsureAppInfoForAppIDs([c]).then(() => {
              this.app_start = c;
            });
          }
          OnSelectedEndApp(c) {
            O.Vw.EnsureAppInfoForAppIDs([c]).then(() => {
              this.app_end = c;
            });
          }
          render() {
            const c =
                this.app_start != 0 &&
                this.app_end != 0 &&
                !this.in_progress &&
                this.app_start != this.app_end,
              e = c ? g.ComputeButton : (0, a.A)(g.ComputeButton, g.Disable);
            let n = null;
            this.in_progress
              ? (n = (0, t.jsx)("div", {
                  className: g.ProgressMessage,
                  children: "Finding path, step " + this.progress_iteration,
                }))
              : this.found_path
                ? (n = (0, t.jsx)("div", {
                    className: g.ProgressMessage,
                    children: "Found path",
                  }))
                : (n = (0, t.jsx)("div", {
                    className: g.ProgressMessage,
                    children: "No path found",
                  }));
            let p = [];
            if (this.found_path)
              for (let h = 0; h < this.found_path.length; h++) {
                const C = this.found_path[h];
                p.push(
                  (0, t.jsx)(
                    x,
                    { appid: C.appid, score: C.similarity },
                    "pathstep" + h,
                  ),
                );
              }
            return (0, t.jsxs)("div", {
              className: g.LabsPathfinder,
              children: [
                (0, t.jsxs)("div", {
                  className: g.SelectEndpoints,
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
                n,
                (0, t.jsx)("div", { className: g.Path, children: p }),
              ],
            });
          }
        };
        i([E.sH], A.prototype, "app_start", 2),
          i([E.sH], A.prototype, "app_end", 2),
          i([E.sH], A.prototype, "in_progress", 2),
          i([E.sH], A.prototype, "progress_iteration", 2),
          i([E.sH], A.prototype, "found_path", 2),
          i([f.oI], A.prototype, "IterationCallback", 1),
          i([f.oI], A.prototype, "Pathfind", 1),
          i([f.oI], A.prototype, "OnSelectedStartApp", 1),
          i([f.oI], A.prototype, "OnSelectedEndApp", 1),
          (A = i([d.PA], A));
        function y() {
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)("h1", { children: "Similar Games" }),
              (0, t.jsx)(I, { max_similar: 10 }),
              (0, t.jsx)("div", { className: g.Spacer }),
              (0, t.jsx)("h1", { children: "Similarity" }),
              (0, t.jsx)(v, {}),
              (0, t.jsx)("div", { className: g.Spacer }),
              (0, t.jsx)("h1", { children: "Mixer" }),
              (0, t.jsx)(B, { max_similar: 10, max_operands: 6 }),
              (0, t.jsx)("div", { className: g.Spacer }),
              (0, t.jsx)("h1", { children: "Pathfinder" }),
              (0, t.jsx)(A, {}),
            ],
          });
        }
        var V = r(76559),
          F = r(8323),
          oe = r(35038),
          k = r(80613),
          w = r.n(k),
          u = r(75245),
          he = r(56062);
        const ve = 0,
          xe = 1,
          Le = 2,
          _ = 3,
          G = 4,
          Z = 5,
          U = 0,
          K = 1,
          le = 2,
          De = 3;
        function je(c) {
          return "unknown EStoreAppSimilarityPopularityFactor ( " + c + " )";
        }
        function Me(c) {
          return "unknown EClustersFromPlaytimeSort ( " + c + " )";
        }
        class ce extends k.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ce.prototype.tag_score_factor || u.Sg(ce.M()),
              k.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ce.sm_m ||
                (ce.sm_m = {
                  proto: ce,
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
              ce.sm_m
            );
          }
          static MBF() {
            return ce.sm_mbf || (ce.sm_mbf = u.w0(ce.M())), ce.sm_mbf;
          }
          toObject(e = !1) {
            return ce.toObject(e, this);
          }
          static toObject(e, n) {
            return u.BT(ce.M(), e, n);
          }
          static fromObject(e) {
            return u.Uq(ce.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (w().BinaryReader)(e),
              p = new ce();
            return ce.deserializeBinaryFromReader(p, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return u.zj(ce.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (w().BinaryWriter)();
            return ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            u.i0(ce.M(), e, n);
          }
          serializeBase64String() {
            var e = new (w().BinaryWriter)();
            return (
              ce.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "StoreAppSimilarityPriorityOptions";
          }
        }
        class se extends k.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              se.prototype.steamid || u.Sg(se.M()),
              k.Message.initialize(this, e, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              se.sm_m ||
                (se.sm_m = {
                  proto: se,
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
                    options: { n: 4, c: ce },
                    debug: { n: 5, br: u.qM.readBool, bw: u.gp.writeBool },
                    include_owned_games: {
                      n: 6,
                      br: u.qM.readBool,
                      bw: u.gp.writeBool,
                    },
                  },
                }),
              se.sm_m
            );
          }
          static MBF() {
            return se.sm_mbf || (se.sm_mbf = u.w0(se.M())), se.sm_mbf;
          }
          toObject(e = !1) {
            return se.toObject(e, this);
          }
          static toObject(e, n) {
            return u.BT(se.M(), e, n);
          }
          static fromObject(e) {
            return u.Uq(se.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (w().BinaryReader)(e),
              p = new se();
            return se.deserializeBinaryFromReader(p, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return u.zj(se.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (w().BinaryWriter)();
            return se.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            u.i0(se.M(), e, n);
          }
          serializeBase64String() {
            var e = new (w().BinaryWriter)();
            return (
              se.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreAppSimilarity_PrioritizeAppsForUser_Request";
          }
        }
        class ae extends k.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ae.prototype.items || u.Sg(ae.M()),
              k.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ae.sm_m ||
                (ae.sm_m = {
                  proto: ae,
                  fields: { items: { n: 1, c: W, r: !0, q: !0 } },
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
          static toObject(e, n) {
            return u.BT(ae.M(), e, n);
          }
          static fromObject(e) {
            return u.Uq(ae.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (w().BinaryReader)(e),
              p = new ae();
            return ae.deserializeBinaryFromReader(p, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return u.zj(ae.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (w().BinaryWriter)();
            return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            u.i0(ae.M(), e, n);
          }
          serializeBase64String() {
            var e = new (w().BinaryWriter)();
            return (
              ae.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreAppSimilarity_PrioritizeAppsForUser_Response";
          }
        }
        class W extends k.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              W.prototype.id || u.Sg(W.M()),
              k.Message.initialize(this, e, 0, -1, [50], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              W.sm_m ||
                (W.sm_m = {
                  proto: W,
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
                    debug_matches: { n: 50, c: ie, r: !0, q: !0 },
                    debug_popularity: { n: 51, c: ue },
                  },
                }),
              W.sm_m
            );
          }
          static MBF() {
            return W.sm_mbf || (W.sm_mbf = u.w0(W.M())), W.sm_mbf;
          }
          toObject(e = !1) {
            return W.toObject(e, this);
          }
          static toObject(e, n) {
            return u.BT(W.M(), e, n);
          }
          static fromObject(e) {
            return u.Uq(W.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (w().BinaryReader)(e),
              p = new W();
            return W.deserializeBinaryFromReader(p, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return u.zj(W.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (w().BinaryWriter)();
            return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            u.i0(W.M(), e, n);
          }
          serializeBase64String() {
            var e = new (w().BinaryWriter)();
            return (
              W.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreAppSimilarity_PrioritizeAppsForUser_Response_ResultItem";
          }
        }
        class ie extends k.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ie.prototype.source_app || u.Sg(ie.M()),
              k.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ie.sm_m ||
                (ie.sm_m = {
                  proto: ie,
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
              ie.sm_m
            );
          }
          static MBF() {
            return ie.sm_mbf || (ie.sm_mbf = u.w0(ie.M())), ie.sm_mbf;
          }
          toObject(e = !1) {
            return ie.toObject(e, this);
          }
          static toObject(e, n) {
            return u.BT(ie.M(), e, n);
          }
          static fromObject(e) {
            return u.Uq(ie.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (w().BinaryReader)(e),
              p = new ie();
            return ie.deserializeBinaryFromReader(p, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return u.zj(ie.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (w().BinaryWriter)();
            return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            u.i0(ie.M(), e, n);
          }
          serializeBase64String() {
            var e = new (w().BinaryWriter)();
            return (
              ie.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreAppSimilarity_PrioritizeAppsForUser_Response_ResultItem_MatchDebugInfo";
          }
        }
        class ue extends k.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ue.prototype.rank || u.Sg(ue.M()),
              k.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ue.sm_m ||
                (ue.sm_m = {
                  proto: ue,
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
              ue.sm_m
            );
          }
          static MBF() {
            return ue.sm_mbf || (ue.sm_mbf = u.w0(ue.M())), ue.sm_mbf;
          }
          toObject(e = !1) {
            return ue.toObject(e, this);
          }
          static toObject(e, n) {
            return u.BT(ue.M(), e, n);
          }
          static fromObject(e) {
            return u.Uq(ue.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (w().BinaryReader)(e),
              p = new ue();
            return ue.deserializeBinaryFromReader(p, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return u.zj(ue.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (w().BinaryWriter)();
            return ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            u.i0(ue.M(), e, n);
          }
          serializeBase64String() {
            var e = new (w().BinaryWriter)();
            return (
              ue.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreAppSimilarity_PrioritizeAppsForUser_Response_ResultItem_PopularityDebugInfo";
          }
        }
        class Q extends k.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Q.prototype.steamid || u.Sg(Q.M()),
              k.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Q.sm_m ||
                (Q.sm_m = {
                  proto: Q,
                  fields: {
                    steamid: {
                      n: 1,
                      br: u.qM.readFixed64String,
                      bw: u.gp.writeFixed64String,
                    },
                    sort: { n: 2, d: K, br: u.qM.readEnum, bw: u.gp.writeEnum },
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
              Q.sm_m
            );
          }
          static MBF() {
            return Q.sm_mbf || (Q.sm_mbf = u.w0(Q.M())), Q.sm_mbf;
          }
          toObject(e = !1) {
            return Q.toObject(e, this);
          }
          static toObject(e, n) {
            return u.BT(Q.M(), e, n);
          }
          static fromObject(e) {
            return u.Uq(Q.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (w().BinaryReader)(e),
              p = new Q();
            return Q.deserializeBinaryFromReader(p, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return u.zj(Q.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (w().BinaryWriter)();
            return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            u.i0(Q.M(), e, n);
          }
          serializeBase64String() {
            var e = new (w().BinaryWriter)();
            return (
              Q.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreAppSimilarity_IdentifyClustersFromPlaytime_Request";
          }
        }
        class de extends k.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              de.prototype.clusters || u.Sg(de.M()),
              k.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              de.sm_m ||
                (de.sm_m = {
                  proto: de,
                  fields: { clusters: { n: 1, c: $, r: !0, q: !0 } },
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
          static toObject(e, n) {
            return u.BT(de.M(), e, n);
          }
          static fromObject(e) {
            return u.Uq(de.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (w().BinaryReader)(e),
              p = new de();
            return de.deserializeBinaryFromReader(p, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return u.zj(de.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (w().BinaryWriter)();
            return de.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            u.i0(de.M(), e, n);
          }
          serializeBase64String() {
            var e = new (w().BinaryWriter)();
            return (
              de.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreAppSimilarity_IdentifyClustersFromPlaytime_Response";
          }
        }
        class $ extends k.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              $.prototype.cluster_id || u.Sg($.M()),
              k.Message.initialize(this, e, 0, -1, [5, 6, 7], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $.sm_m ||
                ($.sm_m = {
                  proto: $,
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
              $.sm_m
            );
          }
          static MBF() {
            return $.sm_mbf || ($.sm_mbf = u.w0($.M())), $.sm_mbf;
          }
          toObject(e = !1) {
            return $.toObject(e, this);
          }
          static toObject(e, n) {
            return u.BT($.M(), e, n);
          }
          static fromObject(e) {
            return u.Uq($.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (w().BinaryReader)(e),
              p = new $();
            return $.deserializeBinaryFromReader(p, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return u.zj($.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (w().BinaryWriter)();
            return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            u.i0($.M(), e, n);
          }
          serializeBase64String() {
            var e = new (w().BinaryWriter)();
            return (
              $.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreAppSimilarity_IdentifyClustersFromPlaytime_Response_Cluster";
          }
        }
        var He;
        ((c) => {
          function e(p, h, C) {
            return p.SendMsg(
              "StoreAppSimilarity.PrioritizeAppsForUser#1",
              (0, oe.I8)(se, h, C),
              ae,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 2 },
            );
          }
          c.PrioritizeAppsForUser = e;
          function n(p, h, C) {
            return p.SendMsg(
              "StoreAppSimilarity.IdentifyClustersFromPlaytime#1",
              (0, oe.I8)(Q, h, C),
              de,
              { ePrivilege: 2, eWebAPIKeyRequirement: 2 },
            );
          }
          c.IdentifyClustersFromPlaytime = n;
        })(He || (He = {}));
        var Ne = r(84192),
          Ve = r(10142);
        class ke {
          m_SteamInterface;
          constructor(e) {
            this.m_SteamInterface = e;
          }
          LoadPlaytimeClusters(e, n, p, h) {
            return new Se(this.m_SteamInterface, e, n, p, h);
          }
        }
        class Se {
          m_callbacksLoaded = new F.lu();
          m_rgClusters;
          constructor(e, n, p, h, C) {
            const S = oe.w.Init(Q);
            (0, Ne.rV)(S),
              C && (0, Ne.Bn)(S, C),
              S.Body().set_steamid(n || D.iA.steamid),
              h && S.Body().set_clusters_to_return(h),
              S.Body().set_sort(p),
              He.IdentifyClustersFromPlaytime(e.GetServiceTransport(), S).then(
                (te) => {
                  const ge = te.Body();
                  this.m_rgClusters = [];
                  for (const fe of ge.clusters())
                    this.m_rgClusters.push(this.ReadCluster(fe, C));
                  this.m_callbacksLoaded.Dispatch(this.m_rgClusters);
                },
              );
          }
          ReadCluster(e, n) {
            let p;
            return (
              n &&
                (p = e.similar_items().map((h) => Ve.A.Get().ReadItem(h, n))),
              {
                nClusterID: e.cluster_id(),
                nPlaytimeMinutes: e.playtime_forever(),
                nPlaytimeMinutes2Weeks: e.playtime_2weeks(),
                rtLastPlayed: e.last_played(),
                rgAppIDsPlayed: e.played_appids(),
                rgSimilarItems: p.filter((h) => !!h),
                rgSimilarAppIDs: e.similar_items_appids(),
                flPopularityScore: e.similar_item_popularity_score(),
              }
            );
          }
          RegisterOnReadyCallback(e) {
            const n = this.m_callbacksLoaded.Register(e);
            return (
              this.m_rgClusters !== void 0 &&
                window.setTimeout(() => e(this.m_rgClusters), 0),
              n
            );
          }
        }
        function Re(c, e, n, p = K, h = null, C = []) {
          const [S, te] = P.useState(null);
          return (
            P.useEffect(
              () => (
                te(null),
                n
                  ? c
                      .LoadPlaytimeClusters(n, p, h, e)
                      .RegisterOnReadyCallback(te).Unregister
                  : void 0
              ),
              [n, p, h, ...C],
            ),
            S
          );
        }
        var Je = r(85599),
          Ee = r(18210),
          Ge = r(21082),
          st = r(84676),
          ze = r(25792),
          at = r(2259);
        function nt(c) {
          const { SteamInterface: e } = c,
            n = P.useRef(void 0);
          return (
            n.current || (n.current = new ke(e)),
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
                (0, t.jsx)(rt, { SimilarityStore: n.current }),
              ],
            })
          );
        }
        const Xe = {
          [De]: "Total Playtime",
          [le]: "Number of Played Games",
          [K]: "Most Recently Played",
        };
        function rt(c) {
          const { SimilarityStore: e } = c,
            [n, p] = P.useState(D.iA.steamid),
            [h, C] = P.useState("10"),
            [S, te] = P.useState(K),
            ge = P.useCallback((Be) => p(Be.currentTarget.value), [p]),
            fe = P.useCallback((Be) => C(Be.currentTarget.value), [C]),
            ye = P.useCallback((Be) => te(Be.data), [te]);
          let Ce = !1;
          const Oe = P.useRef(D.iA.steamid),
            _e = n && new V.b(n);
          _e &&
            _e.BIsValid() &&
            _e.BIsIndividualAccount() &&
            ((Oe.current = _e.ConvertTo64BitString()), (Ce = !0));
          let be;
          h && !isNaN(parseInt(h)) && (be = parseInt(h));
          const Ie = P.useMemo(() => {
              let Be = [];
              for (let Ke in Xe) Be.push({ data: Number(Ke), label: Xe[Ke] });
              return Be;
            }, []),
            pe = Re(
              e,
              { include_assets: !0, include_basic_info: !0 },
              Oe.current,
              S,
              be,
            );
          return (0, t.jsxs)("div", {
            children: [
              (0, t.jsxs)(l.nB, {
                className: Ge.ClusterConfig,
                children: [
                  (0, t.jsx)(l.pd, {
                    label: "SteamID",
                    type: "text",
                    value: n,
                    onChange: ge,
                    description: !Ce && "Invalid SteamID",
                  }),
                  (0, t.jsx)(l.pd, {
                    label: "Clusters to return (Set to blank for all clusters)",
                    type: "text",
                    value: h,
                    onChange: fe,
                  }),
                  (0, t.jsx)(l.m, {
                    label: "Sort clusters by",
                    rgOptions: Ie,
                    selectedOption: S,
                    onChange: ye,
                  }),
                ],
              }),
              Ce && !pe && (0, t.jsx)(Je.t, {}),
              pe && (0, t.jsx)(ot, { rgPlaytimeClusters: pe }),
            ],
          });
        }
        function ot(c) {
          const { rgPlaytimeClusters: e } = c;
          return (0, t.jsx)("div", {
            children: e.map((n) =>
              (0, t.jsx)(
                ze.tH,
                { children: (0, t.jsx)(it, { cluster: n }) },
                n.nClusterID,
              ),
            ),
          });
        }
        function it(c) {
          const { cluster: e } = c,
            [n, p] = P.useState(!1),
            h = P.useCallback(() => p(!0), [p]),
            [C, S] = P.useState(!1),
            te = P.useCallback(() => S(!0), [S]),
            ge = (0, at.OO)({ onEnter: te });
          return (0, t.jsxs)("div", {
            ref: ge,
            className: Ge.PlaytimeCluster,
            children: [
              (0, t.jsxs)("div", {
                className: Ge.ClusterInfo,
                children: [
                  (0, t.jsxs)("h1", { children: ["Cluster ", e.nClusterID] }),
                  (0, t.jsx)(ze.tH, {
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
                            (0, Ee.$z)(e.rtLastPlayed),
                            " ",
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          children: [
                            (0, t.jsx)("b", { children: "Games played:" }),
                            " ",
                            C &&
                              e.rgAppIDsPlayed.map((fe) =>
                                (0, t.jsxs)(
                                  P.Fragment,
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
                  (0, t.jsx)(ze.tH, {
                    children: (0, t.jsx)("ul", {
                      children: e.rgSimilarItems.map((fe, ye) =>
                        n || ye < 4
                          ? (0, t.jsx)(
                              "li",
                              { children: (0, t.jsx)(dt, { item: fe }) },
                              fe.GetUniqueID(),
                            )
                          : null,
                      ),
                    }),
                  }),
                  !n &&
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
            [n] = (0, st.t7)(e, lt);
          return n
            ? (0, t.jsx)("a", {
                className: Ge.PlayedGame,
                href: n.GetStorePageURL(),
                children: n.GetName(),
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
        var Ye = r(36118),
          ut = r(73236),
          X = r.n(ut),
          $e = r(64434),
          mt = r(27066),
          ht = Object.defineProperty,
          pt = Object.getOwnPropertyDescriptor,
          we = (c, e, n, p) => {
            for (
              var h = p > 1 ? void 0 : p ? pt(e, n) : e, C = c.length - 1, S;
              C >= 0;
              C--
            )
              (S = c[C]) && (h = (p ? S(e, n, h) : S(h)) || h);
            return p && h && ht(e, n, h), h;
          };
        const qe = "-1";
        var Ae = ((c) => (
            (c[(c.Invalid = 0)] = "Invalid"),
            (c[(c.AccountName = 1)] = "AccountName"),
            (c[(c.EmailCode = 2)] = "EmailCode"),
            (c[(c.TwoFactorCode = 3)] = "TwoFactorCode"),
            (c[(c.Complete = 4)] = "Complete"),
            c
          ))(Ae || {}),
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
          constructor(e, n) {
            (0, E.Gn)(this),
              (this.m_strBaseURL = e),
              (this.m_strOAuthClientID = n),
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
                (this.m_strErrorMessage = (0, Ee.we)(
                  "#ConnectionTrouble_FailedToConnect",
                ));
              return;
            }
            if (e.login_complete) {
              if (((this.m_eCurrentStep = 4), this.m_fnLoginComplete)) {
                let n = {
                  steamID: e.oauth ? e.oauth.steamid : "",
                  strAccountName: e.oauth ? e.oauth.account_name : "",
                  strOAuthToken: e.oauth ? e.oauth.oauth_token : "",
                };
                this.m_fnLoginComplete(n);
              }
              return;
            }
            (this.m_strErrorMessage = e.message || ""),
              (this.m_eSteamGuardCodeError = 0),
              e.requires_twofactor
                ? (this.UpdateCaptchaURL(qe),
                  this.m_eCurrentStep == 3 &&
                    !this.m_strErrorMessage &&
                    ((this.m_strErrorMessage = (0, Ee.we)(
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
                        ((this.m_strErrorMessage = (0, Ee.we)(
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
        we([E.sH], Te.prototype, "m_bRequestInFlight", 2),
          we([E.sH], Te.prototype, "m_userFields", 2),
          we([E.sH], Te.prototype, "m_eCurrentStep", 2),
          we([E.sH], Te.prototype, "m_strErrorMessage", 2),
          we([E.sH], Te.prototype, "m_strEmailDomain", 2),
          we([E.sH], Te.prototype, "m_strCaptchaURL", 2),
          we([E.sH], Te.prototype, "m_eSteamGuardCodeError", 2),
          we([mt.o], Te.prototype, "DoLogin", 1),
          we([E.XI.bound], Te.prototype, "UpdateCaptchaURL", 1);
        var ft = Object.defineProperty,
          gt = Object.getOwnPropertyDescriptor,
          Pe = (c, e, n, p) => {
            for (
              var h = p > 1 ? void 0 : p ? gt(e, n) : e, C = c.length - 1, S;
              C >= 0;
              C--
            )
              (S = c[C]) && (h = (p ? S(e, n, h) : S(h)) || h);
            return p && h && ft(e, n, h), h;
          };
        let Ze = class extends P.Component {
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
                className: n,
                ...p
              } = this.props,
              h = (0, a.A)(X().LoginDialog, n),
              C = this.m_manager.GetCurrentStep(),
              S = this.m_manager.GetErrorMessage();
            return (0, t.jsxs)("div", {
              className: h,
              ...p,
              children: [
                (0, t.jsx)("div", {
                  className: X().LoginPanelBackground,
                  children: (0, t.jsx)(Ye.Qte, {}),
                }),
                (0, t.jsxs)("div", {
                  className: X().LoginPanelContent,
                  children: [
                    S && (0, t.jsx)(vt, { text: S }),
                    C == Ae.AccountName &&
                      (0, t.jsx)(We, {
                        manager: this.m_manager,
                        autoFocus: this.props.autoFocus,
                      }),
                    C == Ae.TwoFactorCode &&
                      (0, t.jsx)(Ue, {
                        manager: this.m_manager,
                        authtype: Ae.TwoFactorCode,
                      }),
                    C == Ae.EmailCode &&
                      (0, t.jsx)(Ue, {
                        manager: this.m_manager,
                        authtype: Ae.EmailCode,
                      }),
                    C == Ae.Complete &&
                      (0, t.jsx)("div", {
                        className: X().LoginComplete,
                        children: (0, t.jsx)(Je.t, {}),
                      }),
                  ],
                }),
              ],
            });
          }
        };
        Ze = Pe([d.PA], Ze);
        function vt(c) {
          return (0, t.jsx)("div", {
            className: X().ErrorMessage,
            children: c.text,
          });
        }
        let We = class extends P.Component {
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
              n;
            return (
              this.state.nPassSize == 1
                ? (n = X().MedPass)
                : this.state.nPassSize == 2
                  ? (n = X().LargePass)
                  : (n = X().DefaultPass),
              this.state.nNameSize == 1
                ? (e = X().MedName)
                : this.state.nNameSize == 2
                  ? (e = X().LargeName)
                  : (e = X().DefaultNAme),
              (0, t.jsxs)("div", {
                className: X().AccountPasswordPanel,
                children: [
                  (0, t.jsx)("div", {
                    className: X().SigninTitle,
                    children: (0, Ee.we)("#Login_SignInTitle"),
                  }),
                  (0, t.jsxs)("form", {
                    className: X().AccountPasswordForm,
                    onSubmit: this.OnSubmit,
                    children: [
                      (0, t.jsx)(l.pd, {
                        autoFocus: this.props.autoFocus,
                        className: (0, a.A)(X().AccountNameLabel, e),
                        label: (0, Ee.we)("#Login_AccountName"),
                        type: "text",
                        value: c.GetUserName(),
                        focusOnMount: !0,
                        maxLength: 64,
                        onChange: this.OnChangeName,
                      }),
                      (0, t.jsx)(l.pd, {
                        className: (0, a.A)(X().PasswordDots, n),
                        label: (0, Ee.we)("#Login_Password"),
                        type: "password",
                        autoComplete: "off",
                        maxLength: 64,
                        size: 64,
                        value: c.GetPassword(),
                        onChange: this.OnChangePassword,
                      }),
                      (0, t.jsx)(l.Yh, {
                        className: X().RememberMeCheck,
                        label: (0, Ee.we)("#Login_RememberMe"),
                        disabled: !1,
                        onChange: () => this.OnChangeRememberPass,
                        checked: c.GetRememberPassword(),
                      }),
                      c.GetCaptchaURL() && (0, t.jsx)(Fe, { manager: c }),
                      (0, t.jsx)(l.jn, {
                        disabled: this.props.manager.IsRequestInFlight(),
                        children: (0, Ee.we)(
                          "#Login_SignIn",
                        ).toLocaleUpperCase(),
                      }),
                    ],
                  }),
                  (0, t.jsx)("a", {
                    className: X().NeedHelpLink,
                    href: D.TS.HELP_BASE_URL,
                    children: (0, Ee.we)("#Login_ForgotPassword"),
                  }),
                  (0, t.jsx)("div", { className: X().LoginCreateSeperator }),
                  (0, t.jsxs)("div", {
                    className: X().SteamUpsellContainer,
                    children: [
                      (0, t.jsx)("div", {
                        className: X().SteamUpsell,
                        children: (0, Ee.we)("#Login_NoSteamAccount"),
                      }),
                      (0, t.jsx)("div", {
                        className: X().CreateAccountLink,
                        children: (0, t.jsx)("a", {
                          href: `${D.TS.STORE_BASE_URL}join/`,
                          children: (0, Ee.we)("#Login_CreateAccount"),
                        }),
                      }),
                    ],
                  }),
                ],
              })
            );
          }
        };
        Pe([f.oI], We.prototype, "OnSubmit", 1),
          Pe([f.oI], We.prototype, "OnChangeName", 1),
          Pe([f.oI], We.prototype, "OnChangePassword", 1),
          Pe([f.oI], We.prototype, "OnChangeRememberPass", 1),
          (We = Pe([d.PA], We));
        let Fe = class extends P.Component {
          OnCaptchaText(c) {
            this.props.manager.SetCaptchaText(c.target.value);
          }
          RefreshCaptcha(c) {
            this.props.manager.RefreshCaptcha();
          }
          render() {
            let c = this.props.manager;
            return (0, t.jsxs)("div", {
              className: X().CaptchaContainer,
              children: [
                (0, t.jsxs)("div", {
                  className: X().CaptchaBlock,
                  children: [
                    (0, t.jsxs)("div", {
                      className: X().CaptchaImageAndInput,
                      children: [
                        (0, t.jsx)("div", {
                          className: X().CaptchaImageBox,
                          children: (0, t.jsx)("img", {
                            className: X().CaptchaImage,
                            src: c.GetCaptchaURL(),
                          }),
                        }),
                        (0, t.jsx)(l.pd, {
                          className: X().CaptchaInput,
                          type: "text",
                          autoComplete: "off",
                          maxLength: 6,
                          value: c.GetCaptchaText(),
                          onChange: this.OnCaptchaText,
                        }),
                      ],
                    }),
                    (0, t.jsx)("div", {
                      className: X().ErrorMessage,
                      children: (0, Ee.we)("#Login_CaptchaVerification"),
                    }),
                  ],
                }),
                (0, t.jsx)("div", {
                  children: (0, t.jsx)("span", {
                    className: X().RefreshCaptchaText,
                    onClick: this.RefreshCaptcha,
                    children: (0, Ee.we)("#Login_RefreshCaptcha"),
                  }),
                }),
              ],
            });
          }
        };
        Pe([f.oI], Fe.prototype, "OnCaptchaText", 1),
          Pe([f.oI], Fe.prototype, "RefreshCaptcha", 1),
          (Fe = Pe([d.PA], Fe));
        let Ue = class extends P.Component {
          OnSubmit(c) {
            c.preventDefault(), this.props.manager.DoLogin();
          }
          OnChangeAuthCode(c) {
            this.props.authtype == Ae.TwoFactorCode
              ? this.props.manager.SetTwoFactorCode(c.target.value)
              : this.props.manager.SetEmailAuthCode(c.target.value);
          }
          render() {
            let c = this.props.manager,
              e = "",
              n = null,
              p = "",
              h,
              C = c.GetSteamGuardCodeError() == et.InvalidCode;
            switch (this.props.authtype) {
              case Ae.TwoFactorCode:
                (e = c.GetTwoFactorCode()),
                  (n = (0, Ee.we)("#Login_Enter2FA")),
                  (h = (0, t.jsx)(Ye.kaY, {})),
                  (p = (0, Ee.we)("#Login_Enter2FAHelp"));
                break;
              case Ae.EmailCode:
                (e = c.GetEmailAuthCode()),
                  (n = (0, Ee.PP)(
                    "#Login_SentSteamguard",
                    (0, t.jsxs)("span", {
                      className: X().Highlight,
                      children: ["@", c.GetEmailDomain()],
                    }),
                  )),
                  (p = (0, Ee.we)("#Login_EnterSteamguard")),
                  (h = (0, t.jsx)(Ye.Lh2, {}));
                break;
              default:
                break;
            }
            return (0, t.jsxs)("div", {
              className: X().AuthenticationPanel,
              children: [
                (0, t.jsx)(l.JU, { children: (0, Ee.we)("#Login_SigningIn") }),
                (0, t.jsx)("div", {
                  className: X().SigningInAccountName,
                  children: c.GetUserName(),
                }),
                (0, t.jsx)(l.a3, { children: n }),
                (0, t.jsxs)("div", {
                  className: X().AuthenticatorInputcontainer,
                  children: [
                    h,
                    (0, t.jsxs)("form", {
                      className: X().AccountPasswordForm,
                      onSubmit: this.OnSubmit,
                      children: [
                        (0, t.jsx)(l.pd, {
                          className: (0, a.A)(X().AccountName),
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
                          children: (0, Ee.we)(
                            "#Login_SteamguardSubmit",
                          ).toLocaleUpperCase(),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, t.jsx)("a", {
                  className: (0, a.A)(
                    X().NeedHelpLink,
                    C ? X().NeedHelpHighlight : null,
                  ),
                  href: "http://help.steampowered.com/",
                  children: p,
                }),
              ],
            });
          }
        };
        Pe([f.oI], Ue.prototype, "OnSubmit", 1),
          Pe([f.oI], Ue.prototype, "OnChangeAuthCode", 1),
          (Ue = Pe([d.PA], Ue));
        var xt = r(68312);
        const tt = [
          {
            path: "similarity",
            render: () => (0, t.jsx)(y, {}),
            name: "ML Similarity",
          },
          {
            path: "clustering",
            render: (c) => (0, t.jsx)(nt, { SteamInterface: c.SteamInterface }),
            name: "Tag Clustering",
            requires_login: !0,
          },
        ];
        function _t(c) {
          const [e, n] = P.useState(!1),
            p = D.iA.logged_in,
            h = (0, xt.TR)();
          if (
            ((0, P.useEffect)(() => {
              R.Init(h), n(!0);
            }, [h]),
            !e)
          )
            return (0, t.jsx)("div", { className: g.App });
          const C = { SteamInterface: h };
          return (0, t.jsx)("div", {
            className: g.App,
            children: (0, t.jsxs)("div", {
              className: g.Container,
              children: [
                (0, t.jsxs)("div", {
                  className: g.TopSection,
                  children: [
                    (0, t.jsx)("div", {
                      className: g.Header,
                      children: "Labs Sandbox",
                    }),
                    (0, t.jsx)("div", {
                      className: g.Body,
                      children:
                        "Internal testbed page for Steam Labs experiments",
                    }),
                  ],
                }),
                (0, t.jsx)("div", {
                  className: g.Tabs,
                  children: tt.map((S) =>
                    (0, t.jsx)(
                      ee.k2,
                      {
                        to: `${L.B.LabsSandbox()}/${S.path}`,
                        className: g.Tab,
                        activeClassName: g.Active,
                        children: S.name,
                      },
                      S.path,
                    ),
                  ),
                }),
                (0, t.jsx)("div", {
                  className: g.SandboxSection,
                  children: (0, t.jsx)(ze.tH, {
                    children: (0, t.jsx)(H.dO, {
                      children: tt.map((S, te) =>
                        (0, t.jsx)(
                          H.qh,
                          {
                            path: `${L.B.LabsSandbox()}/${S.path}`,
                            render: (ge) =>
                              !S.requires_login || p
                                ? S.render({ ...ge, ...C })
                                : (0, t.jsx)(Et, {}),
                          },
                          S.path,
                        ),
                      ),
                    }),
                  }),
                }),
              ],
            }),
          });
        }
        function Et() {
          return (0, t.jsxs)("div", {
            children: [
              (0, t.jsx)("h3", { children: "Please login to view this page." }),
              (0, t.jsx)(Ze, {
                baseURL: D.TS.STORE_BASE_URL,
                onLoginComplete: () => window.location.reload(),
              }),
            ],
          });
        }
      },
      25996: (ne, re, r) => {
        "use strict";
        r.r(re), r.d(re, { default: () => d });
        var t = r(7850),
          L = r(29522),
          O = r(40358),
          D = r(41735),
          E = r.n(D),
          f = r(90626),
          N = r(19681),
          J = r(86390),
          me = r(95414),
          q = r(51079),
          Y = r(36707),
          M = r(18210),
          z = r(3166),
          T = r(32792),
          R = r.n(T),
          P = r(16412);
        const ee = (a) => {
            const s = (0, L.$5)(a.nAppID),
              o = (0, O.lv)(s),
              i = (0, O.J$)(s);
            if (!o.data || !i.data) return null;
            const m = (0, N.l)(o.data, "header");
            return (0, t.jsxs)("div", {
              className: T.AppCapsule,
              children: [
                (0, t.jsx)(me.u, {
                  id: s,
                  children: (0, t.jsx)("img", { className: T.Image, src: m }),
                }),
                (0, t.jsxs)("div", {
                  className: T.UnderInfo,
                  children: [
                    (0, t.jsx)("div", {
                      className: T.Name,
                      children: i.data.name,
                    }),
                    a.fWeight &&
                      (0, t.jsx)("div", {
                        className: T.Weight,
                        children: `${(a.fWeight * 100).toFixed(2)}%`,
                      }),
                  ],
                }),
              ],
            });
          },
          H = (a) => {
            const [s, o] = f.useState([]),
              [i, m] = f.useState([]);
            return (
              f.useEffect(() => {
                (async () => {
                  const v = {
                    rec: a.strName,
                    max: 40,
                    exclude: a.bExclude ? 1 : 0,
                    accountid: a.nAccountID,
                  };
                  try {
                    const I = await E().get(
                      `${z.TS.STORE_BASE_URL}recommenderdemos/getlist`,
                      { params: v, timeout: 1e4 },
                    );
                    o(I.data.appids), m(I.data.weights);
                  } catch (I) {
                    console.error("Error fetching data", I);
                  }
                })();
              }, [a.strName, a.nAccountID, a.bExclude]),
              (0, t.jsxs)("div", {
                className: T.RecommenderList,
                children: [
                  (0, t.jsx)("div", {
                    className: T.Title,
                    children: a.strTitle,
                  }),
                  (0, t.jsx)("div", {
                    className: T.SubTitle,
                    children: a.strSubtitle,
                  }),
                  (0, t.jsx)("div", {
                    className: T.CapsuleList,
                    children: s?.map((x, v) =>
                      (0, t.jsx)(
                        ee,
                        { nAppID: x, fWeight: i[v] },
                        `${a.strName}_${v}`,
                      ),
                    ),
                  }),
                ],
              })
            );
          },
          g = (a) =>
            (0, t.jsxs)("div", {
              className: T.RecommenderList,
              children: [
                (0, t.jsx)("div", { className: T.Title, children: a.strName }),
                (0, t.jsx)("div", {
                  className: T.SubTitle,
                  children: (0, M.we)("#RecommenderDemos_ReleasedGames"),
                }),
                (0, t.jsx)("div", {
                  className: T.CapsuleList,
                  children: a.arrPlaytimeAppIDs.map((s, o) =>
                    (0, t.jsx)(ee, { nAppID: s }, `${a.strName}_${o}`),
                  ),
                }),
                (0, t.jsx)("div", { className: T.Spacer }),
                (0, t.jsx)("div", {
                  className: T.SubTitle,
                  children: (0, M.we)("#RecommenderDemos_UnreleasedGames"),
                }),
                (0, t.jsx)("div", {
                  className: T.CapsuleList,
                  children: a.arrWishlistAppIDs.map((s, o) =>
                    (0, t.jsx)(ee, { nAppID: s }, `${a.strName}_${o}`),
                  ),
                }),
              ],
            }),
          l = (a) => {
            const [s, o] = f.useState(void 0);
            return (
              f.useEffect(() => {
                (async () => {
                  const m = {
                    max: 40,
                    exclude: a.bExclude ? 1 : 0,
                    accountid: a.nAccountID,
                  };
                  try {
                    const x = await E().get(
                      `${z.TS.STORE_BASE_URL}recommenderdemos/getfests`,
                      { params: m, timeout: 1e4 },
                    );
                    o(x.data);
                  } catch (x) {
                    console.error("Error fetching data", x);
                  }
                })();
              }, [a.bExclude, a.nAccountID]),
              (0, t.jsx)("div", {
                className: T.RecommenderFests,
                children: s?.map((i) =>
                  (0, t.jsx)(
                    g,
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
            const [a, s] = f.useState(!1),
              [o, i] = f.useState(0),
              [m, x] = f.useState(""),
              [v, I] = f.useState(!0);
            if (!z.iA.logged_in)
              return (0, t.jsx)("div", {
                className: T.App,
                children: (0, t.jsxs)("div", {
                  className: T.Login,
                  children: [
                    (0, t.jsx)("div", {
                      className: T.Text,
                      children: (0, M.we)("#LoginText"),
                    }),
                    (0, t.jsx)("div", {
                      className: (0, Y.A)(
                        "btn_green_white_innerfade",
                        " btn_medium",
                      ),
                      onClick: J.vg,
                      children: (0, t.jsx)("span", {
                        children: (0, M.we)("#LoginButton"),
                      }),
                    }),
                  ],
                }),
              });
            const b = () => {
                isNaN(parseInt(m)) || (s(!0), i(parseInt(m)));
              },
              B = () => {
                s(!1), i(0), x("");
              };
            return (0, t.jsx)(q.Ay, {
              controller: "recommenderdemos",
              method: "default",
              feature: "capsule",
              children: (0, t.jsxs)("div", {
                className: T.RecommenderDemosApp,
                children: [
                  (0, t.jsx)("div", {
                    className: T.ValveOnly,
                    children: "(Valve-Only)",
                  }),
                  (0, t.jsxs)("div", {
                    className: T.TopControls,
                    children: [
                      (0, t.jsxs)("div", {
                        className: T.AccountIDControl,
                        children: [
                          (0, t.jsx)("input", {
                            type: "text",
                            value: m,
                            onChange: (A) => x(A.target.value),
                          }),
                          (0, t.jsx)(P.$n, {
                            className: T.RecDemoButton,
                            onClick: b,
                            children: "Use AccountID",
                          }),
                          (0, t.jsx)(P.$n, {
                            disabled: !a,
                            className: T.RecDemoButton,
                            onClick: B,
                            children: "Clear",
                          }),
                        ],
                      }),
                      a &&
                        (0, t.jsxs)("div", {
                          className: T.AccountIDOverride,
                          children: [
                            (0, M.we)("#RecommenderDemos_OverrideAccountID"),
                            (0, t.jsx)("div", {
                              className: T.AccountID,
                              children: o,
                            }),
                          ],
                        }),
                      (0, t.jsxs)("div", {
                        className: T.CheckBox,
                        children: [
                          (0, t.jsx)("input", {
                            type: "checkbox",
                            id: "exclude_owned_wishlisted",
                            checked: v,
                            onChange: () => I(!v),
                          }),
                          (0, t.jsx)("label", {
                            htmlFor: "exclude_owned_wishlisted",
                            children: (0, M.we)("#RecommenderDemos_Exclude"),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsx)(H, {
                    nAccountID: o,
                    bExclude: v,
                    strName: "WishlistsOneWeek",
                    strTitle: (0, M.we)("#RecommenderDemos_HotWishlists"),
                    strSubtitle: (0, M.we)(
                      "#RecommenderDemos_HotWishlists_Desc",
                    ),
                  }),
                  (0, t.jsx)(H, {
                    nAccountID: o,
                    bExclude: v,
                    strName: "NextFest",
                    strTitle: (0, M.we)("#RecommenderDemos_NextFest"),
                    strSubtitle: (0, M.we)("#RecommenderDemos_NextFestDesc"),
                  }),
                  (0, t.jsx)(l, { nAccountID: o, bExclude: v }),
                  (0, t.jsx)(H, {
                    nAccountID: o,
                    bExclude: v,
                    strName: "RecAllTime",
                    strTitle: (0, M.we)("#RecommenderDemos_RecAllTime"),
                    strSubtitle: (0, M.we)("#RecommenderDemos_Rec_Desc"),
                  }),
                  (0, t.jsx)(H, {
                    nAccountID: o,
                    bExclude: v,
                    strName: "RecFiveYear",
                    strTitle: (0, M.we)("#RecommenderDemos_RecFiveYear"),
                    strSubtitle: (0, M.we)("#RecommenderDemos_Rec_Desc"),
                  }),
                  (0, t.jsx)(H, {
                    nAccountID: o,
                    bExclude: v,
                    strName: "RecTwoYear",
                    strTitle: (0, M.we)("#RecommenderDemos_RecTwoYear"),
                    strSubtitle: (0, M.we)("#RecommenderDemos_Rec_Desc"),
                  }),
                  (0, t.jsx)(H, {
                    nAccountID: o,
                    bExclude: v,
                    strName: "RecOneYear",
                    strTitle: (0, M.we)("#RecommenderDemos_RecOneYear"),
                    strSubtitle: (0, M.we)("#RecommenderDemos_Rec_Desc"),
                  }),
                  (0, t.jsx)(H, {
                    nAccountID: o,
                    bExclude: v,
                    strName: "RecSixMonths",
                    strTitle: (0, M.we)("#RecommenderDemos_RecSixMonths"),
                    strSubtitle: (0, M.we)("#RecommenderDemos_Rec_Desc"),
                  }),
                  (0, t.jsx)(H, {
                    nAccountID: o,
                    bExclude: v,
                    strName: "RecEmbedding",
                    strTitle: (0, M.we)("#RecommenderDemos_RecEmbedding"),
                    strSubtitle: "",
                  }),
                ],
              }),
            });
          };
      },
      38878: (ne) => {
        ne.exports = {
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
      53011: (ne) => {
        ne.exports = {
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
      75: (ne) => {
        ne.exports = {
          SliderRoot: "Ib6RCjwueJUjl7aWNipFW",
          Inner: "-nNjOur8lh62cpxs1Jnth",
          SliderTrack: "_32V6MAuLhIp8s5_OPJxur1",
          SliderRange: "_1S38a0lsWaX1bdlroIEyXQ",
          SliderHandle: "_1VoJsIZhjVss7lO_vZxCFC",
        };
      },
      65274: (ne) => {
        ne.exports = {
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
      73236: (ne) => {
        ne.exports = {
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
      41526: (ne) => {
        ne.exports = {
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
      62139: (ne) => {
        ne.exports = {
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
      21082: (ne) => {
        ne.exports = {
          EntryError: "_1UGoDpJ7HCnew3ISiLQi2r",
          ClusterConfig: "_3Qp2uY9UVYYKnJ-ptgEj0R",
          PlaytimeCluster: "_2qGfqWVATJJ7JZzV8beQLg",
          ClusterInfo: "_20dmpyf2P2BqcyJ1-ACi27",
          ClusterMembers: "VeQtFevYOvbG2bHTuR6U2",
          SimilarTitle: "gRxJTbzwDdBRGFpeDab1C",
        };
      },
      32792: (ne) => {
        ne.exports = {
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
      17083: (ne, re, r) => {
        "use strict";
        r.d(re, { N_: () => P, k2: () => d });
        var t = r(92757),
          L = r(42891),
          O = r(90626),
          D = r(29248),
          E = r(58584),
          f = r(81115),
          N = r(68841),
          J = (function (s) {
            (0, L.A)(o, s);
            function o() {
              for (
                var m, x = arguments.length, v = new Array(x), I = 0;
                I < x;
                I++
              )
                v[I] = arguments[I];
              return (
                (m = s.call.apply(s, [this].concat(v)) || this),
                (m.history = (0, D.zR)(m.props)),
                m
              );
            }
            var i = o.prototype;
            return (
              (i.render = function () {
                return O.createElement(t.Ix, {
                  history: this.history,
                  children: this.props.children,
                });
              }),
              o
            );
          })(O.Component),
          me = (function (s) {
            (0, L.A)(o, s);
            function o() {
              for (
                var m, x = arguments.length, v = new Array(x), I = 0;
                I < x;
                I++
              )
                v[I] = arguments[I];
              return (
                (m = s.call.apply(s, [this].concat(v)) || this),
                (m.history = (0, D.TM)(m.props)),
                m
              );
            }
            var i = o.prototype;
            return (
              (i.render = function () {
                return O.createElement(t.Ix, {
                  history: this.history,
                  children: this.props.children,
                });
              }),
              o
            );
          })(O.Component),
          q = function (o, i) {
            return typeof o == "function" ? o(i) : o;
          },
          Y = function (o, i) {
            return typeof o == "string" ? (0, D.yJ)(o, null, null, i) : o;
          },
          M = function (o) {
            return o;
          },
          z = O.forwardRef;
        typeof z > "u" && (z = M);
        function T(s) {
          return !!(s.metaKey || s.altKey || s.ctrlKey || s.shiftKey);
        }
        var R = z(function (s, o) {
            var i = s.innerRef,
              m = s.navigate,
              x = s.onClick,
              v = (0, f.A)(s, ["innerRef", "navigate", "onClick"]),
              I = v.target,
              b = (0, E.A)({}, v, {
                onClick: function (A) {
                  try {
                    x && x(A);
                  } catch (y) {
                    throw (A.preventDefault(), y);
                  }
                  !A.defaultPrevented &&
                    A.button === 0 &&
                    (!I || I === "_self") &&
                    !T(A) &&
                    (A.preventDefault(), m());
                },
              });
            return (
              M !== z ? (b.ref = o || i) : (b.ref = i), O.createElement("a", b)
            );
          }),
          P = z(function (s, o) {
            var i = s.component,
              m = i === void 0 ? R : i,
              x = s.replace,
              v = s.to,
              I = s.innerRef,
              b = (0, f.A)(s, ["component", "replace", "to", "innerRef"]);
            return O.createElement(t.XZ.Consumer, null, function (B) {
              B || (0, N.A)(!1);
              var A = B.history,
                y = Y(q(v, B.location), B.location),
                V = y ? A.createHref(y) : "",
                F = (0, E.A)({}, b, {
                  href: V,
                  navigate: function () {
                    var k = q(v, B.location),
                      w = (0, D.AO)(B.location) === (0, D.AO)(Y(k)),
                      u = x || w ? A.replace : A.push;
                    u(k);
                  },
                });
              return (
                M !== z ? (F.ref = o || I) : (F.innerRef = I),
                O.createElement(m, F)
              );
            });
          });
        if (0) var ee, H;
        var g = function (o) {
            return o;
          },
          l = O.forwardRef;
        typeof l > "u" && (l = g);
        function j() {
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
            v = x === void 0 ? "active" : x,
            I = s.activeStyle,
            b = s.className,
            B = s.exact,
            A = s.isActive,
            y = s.location,
            V = s.sensitive,
            F = s.strict,
            oe = s.style,
            k = s.to,
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
          return O.createElement(t.XZ.Consumer, null, function (he) {
            he || (0, N.A)(!1);
            var ve = y || he.location,
              xe = Y(q(k, ve), ve),
              Le = xe.pathname,
              _ = Le && Le.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"),
              G = _
                ? (0, t.B6)(ve.pathname, {
                    path: _,
                    exact: B,
                    sensitive: V,
                    strict: F,
                  })
                : null,
              Z = !!(A ? A(G, ve) : G),
              U = typeof b == "function" ? b(Z) : b,
              K = typeof oe == "function" ? oe(Z) : oe;
            Z && ((U = j(U, v)), (K = (0, E.A)({}, K, I)));
            var le = (0, E.A)(
              {
                "aria-current": (Z && m) || null,
                className: U,
                style: K,
                to: xe,
              },
              u,
            );
            return (
              g !== l ? (le.ref = o || w) : (le.innerRef = w),
              O.createElement(P, le)
            );
          });
        });
        if (0) var a;
      },
    },
  ]);
})();
