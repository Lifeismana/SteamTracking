/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [7845],
    {
      94381: (R, D, e) => {
        "use strict";
        e.d(D, { S: () => b });
        var n = e(7850),
          l = e(68031),
          c = e(31857);
        function h(_) {
          return (0, n.jsx)(c.I, {
            ..._,
            viewBoxSize: 16,
            children: (0, n.jsx)("path", {
              d: "M13.8182 1.94629L5.77816 9.98184L2.40483 6.61296L0.835938 8.18184L5.77816 13.1285L15.387 3.51518L13.8182 1.94629Z",
              fill: "currentColor",
            }),
          });
        }
        var x = e(21895),
          m = e(64238),
          v = e.n(m),
          u = e(80549);
        function b(_) {
          const {
              checked: A,
              onChange: U,
              disabled: F,
              children: G,
              ref: Y,
              variant: k,
              color: H,
              align: Q = "center",
              ...z
            } = _,
            N = A === "indeterminate",
            Z = N ? E : h,
            K = () => {
              F || (U && U(N ? !0 : !A));
            },
            te = (q) => {
              F ||
                (q.key === " " &&
                  (K(), q.preventDefault(), q.stopPropagation()));
            },
            se = (0, u.f)("Checkbox", k);
          return (0, n.jsxs)(l.s, {
            align: Q,
            ref: Y,
            role: "checkbox",
            "aria-checked": N ? "mixed" : A,
            "data-state": B(A),
            className: v()(x.Root, x[`Variant-${se}`], F && x.Disabled),
            onClick: K,
            tabIndex: 0,
            onKeyDown: te,
            cursor: "default",
            "aria-disabled": F,
            "data-accent-color": H,
            ...z,
            children: [
              (0, n.jsx)("div", {
                className: x.Checkbox,
                children: A && (0, n.jsx)(Z, { className: x.Icon }),
              }),
              G,
            ],
          });
        }
        function B(_) {
          return _ === "indeterminate" ? _ : _ ? "checked" : "unchecked";
        }
        function E(_) {
          return (0, n.jsx)("svg", {
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, n.jsx)("path", {
              d: "M14.6663 7.11133H1.33301V9.33355H14.6663V7.11133Z",
              fill: "currentColor",
            }),
          });
        }
      },
      86946: (R, D, e) => {
        "use strict";
        e.d(D, { j: () => B, w: () => E });
        var n = e(7850),
          l = e(64238),
          c = e.n(l),
          h = e(38878),
          x = e.n(h),
          m = e(60351),
          v = e(68031),
          u = e(8928),
          b = e(69289);
        function B(_) {
          const {
              children: A,
              beforeContent: U,
              afterContent: F,
              hasValue: G,
              ...Y
            } = _,
            k = E(Y);
          return (0, n.jsxs)(v.s, {
            ...k,
            align: "center",
            "data-has-value": !!G,
            children: [
              U && (0, n.jsx)(v.s, { paddingRight: "2", children: U }),
              (0, n.jsx)(m.az, { flexGrow: "1", minWidth: "0", children: A }),
              F && (0, n.jsx)(v.s, { paddingLeft: "2", children: F }),
            ],
          });
        }
        function E(_) {
          const {
              variant: A = "basic",
              size: U = "2",
              radius: F,
              focusable: G = !0,
              hoverable: Y = !0,
              clickable: k = !0,
              disabled: H,
              className: Q,
              status: z,
              ...N
            } = _,
            Z = A === "underline" ? "none" : F;
          return (0, b.mz)(
            {
              ...N,
              radius: Z,
              "data-status": z,
              className: c()(
                h.ControlBox,
                G && !H && h.Focusable,
                Y && !H && h.Hoverable,
                k && !H && h.Clickable,
                H && h.Disabled,
                h[`Variant-${A}`],
                h[`Size-${U}`],
                Q,
              ),
            },
            u.h,
          );
        }
      },
      92142: (R, D, e) => {
        "use strict";
        e.d(D, { k: () => y, T: () => L });
        var n = e(7850),
          l = e(90626),
          c = e(73788),
          h = e(8083),
          x = e(60351),
          m = e(76854),
          v = e(48093);
        function u(t) {
          const { render: s, ...o } = t;
          return (0, m.Q)(
            s,
            (0, n.jsx)(x.az, {
              radius: "sm",
              background: "dull-8",
              className: v.ListBox,
            }),
            { role: "listbox", ...o },
          );
        }
        function b(t) {
          const {
              selected: s,
              focused: o,
              label: a = null,
              render: r,
              disabled: g,
              ...f
            } = t,
            C = s ? "true" : "false",
            I = o ? "true" : void 0;
          return (0, m.Q)(
            r,
            (0, n.jsx)(x.az, {
              focusable: !0,
              "data-selected": C,
              "data-focused": I,
              "aria-disabled": g,
              className: v.ListBoxOption,
              paddingY: "2",
              paddingX: "3",
            }),
            { role: "option", ...f },
            { selected: s, focused: o, disabled: g },
          );
        }
        const B = Object.assign(u, { Option: b });
        var E = e(94621),
          _ = e(18938),
          A = e(24660),
          U = e(38566),
          F = e(54130),
          G = e(71742),
          Y = e(64238),
          k = e.n(Y),
          H = e(3877),
          Q = e(3166);
        const z = (0, l.createContext)(null);
        function N(t) {
          const { children: s, ...o } = t,
            a = $(o);
          return (0, n.jsx)(z.Provider, { value: a, children: s });
        }
        function Z(t) {
          const { children: s } = t,
            o = l.Children.only(s),
            a = (0, l.useContext)(z);
          return o
            ? a
              ? (0, l.cloneElement)(o, {
                  ...a.getReferenceProps(o.props),
                  ref: (0, _.XB)(o.props.ref, a.floating.refs.setReference),
                })
              : (console.error(
                  "<PopoverAnchor> must be a child of <PopoverRoot>.",
                ),
                null)
            : null;
        }
        function K(t) {
          const { children: s, className: o, ref: a } = t,
            r = (0, l.useContext)(z),
            g = (0, c.SV)([
              a,
              r?.floating.refs.setFloating,
              (O) => O?.showPopover?.(),
            ]);
          if (!r)
            return (
              console.error(
                "<Popover.Positioner> must be a child of <Popover.Root>.",
              ),
              null
            );
          if (!r.open) return null;
          let f = l.Children.only(s),
            C = l.Fragment;
          f.type == le.FocusManager &&
            ((f = l.Children.only(f.props.children)), (C = te));
          const I = (0, l.cloneElement)(f, {
            ref: g,
            style: { ...r.floating.floatingStyles },
            className: k()((0, H.T)(), o),
            popover: "manual",
            ...r.getFloatingProps(),
          });
          return (0, n.jsx)(C, { children: I });
        }
        function te(t) {
          return (0, Q.Qn)()
            ? (0, n.jsx)(se, { ...t })
            : (0, n.jsx)(q, { ...t });
        }
        function se(t) {
          const { children: s } = t,
            o = (0, l.useContext)(z);
          (0, G.wT)(
            !!o,
            "<Popover.Positioner> must be a child of <Popover.Root>.",
          );
          const a = () => o.floating.context.onOpenChange(!1),
            r = l.useRef(void 0);
          return (
            (0, A.O7)(r, !!r.current, !1),
            (0, n.jsx)(U.D6, {
              navID: "Popover",
              onCancelButton: a,
              modal: !0,
              navTreeRef: r,
              children: (0, n.jsx)("div", {
                style: { display: "contents" },
                children: (0, n.jsx)(F.q, { children: s }),
              }),
            })
          );
        }
        function q(t) {
          const { children: s } = t,
            o = (0, l.useContext)(z);
          return (
            (0, G.wT)(
              !!o,
              "<Popover.Positioner> must be a child of <Popover.Root>.",
            ),
            (0, n.jsx)(c.s3, {
              context: o.floating.context,
              initialFocus: -1,
              returnFocus: !1,
              children: s,
            })
          );
        }
        function $(t) {
          const {
            open: s,
            onOpenChange: o,
            placement: a,
            interactions: r = {},
          } = t;
          let g = s;
          const f = (0, c.we)({
              open: g,
              onOpenChange: o,
              middleware: re(t),
              whileElementsMounted: h.ll,
              placement: a && typeof a == "object" ? a.initial : a,
              strategy: "fixed",
              platform: {
                ...h.iD,
                getOffsetParent: (ae) =>
                  ae?.ownerDocument?.defaultView ?? window,
              },
            }),
            C = { enabled: !!r.click },
            I = typeof r.click == "function" ? r.click(C) : C,
            O = (0, c.kp)(f.context, I),
            W = { enabled: !!r.focus },
            S = typeof r.focus == "function" ? r.focus(W) : W,
            X = (0, c.iQ)(f.context, S),
            J = { handleClose: (0, c.iB)() },
            w = typeof r.hover == "function" ? r.hover(J) : J,
            ee = (0, c.Mk)(f.context, { enabled: !!r.hover, ...w }),
            ce = (0, c.s9)(f.context),
            { getFloatingProps: ne, getReferenceProps: oe } = (0, c.bv)([
              O,
              X,
              ee,
              ce,
            ]);
          return {
            floating: f,
            getFloatingProps: ne,
            getReferenceProps: oe,
            open: g,
          };
        }
        function re(t) {
          const { gutter: s = 0, placement: o } = t,
            a = [],
            r = o && typeof o == "object";
          return (
            r && o.offset
              ? a.push((0, E.cY)(o.offset))
              : (!r || o.offset === void 0) && a.push((0, E.cY)(2)),
            r && o.flip
              ? a.push((0, E.UU)(o.flip))
              : (!r || o.flip === void 0) && a.push((0, E.UU)()),
            r && o.shift
              ? a.push((0, E.BN)(o.shift))
              : (!r || o.shift === void 0) && a.push((0, E.BN)()),
            a.push(
              (0, E.Ej)({
                apply: (g) => {
                  const { rects: f, elements: C, availableHeight: I } = g,
                    O = { boxSizing: "border-box", zIndex: "1" };
                  switch ((t.scroll && (O.overflowY = "auto"), t.width)) {
                    case "target": {
                      O.width = `${f.reference.width}px`;
                      break;
                    }
                    case "content": {
                      O.width = `${f.floating.width}px`;
                      break;
                    }
                    case "dropdown": {
                      let S = f.reference.width;
                      f.floating.width > S && S < 200 && (S = f.floating.width),
                        (O.width = `${S}px`);
                    }
                  }
                  typeof t.width == "function" &&
                    (O.width = t.width({
                      unContentWidth: f.floating.width,
                      unTargetWidth: f.reference.width,
                    }));
                  const W =
                    typeof s == "number" ? `${s}px` : `var(--spacing-${s})`;
                  typeof t.maxHeight == "function"
                    ? (O.maxHeight = t.maxHeight({
                        unAvailableHeight: I,
                        gutter: W,
                      }))
                    : typeof t.maxHeight == "number"
                      ? (O.maxHeight = `min( calc( ${I}px - ${W} ), ${t.maxHeight}px )`)
                      : typeof s == "number"
                        ? (O.maxHeight = `${I - s}px`)
                        : (O.maxHeight = `calc( ${I}px - var(--spacing-${s}) )`),
                    Object.assign(C.floating.style, O),
                    C.floating.style.setProperty(
                      "--popover-max-height",
                      O.maxHeight,
                    );
                },
              }),
            ),
            a
          );
        }
        const le = { Root: N, Anchor: Z, Positioner: K, FocusManager: te },
          i = (0, l.createContext)(null);
        function d(t) {
          const { children: s, state: o } = t;
          return (0, n.jsx)(i.Provider, { value: o, children: s });
        }
        function p(t) {
          const { children: s } = t,
            o = l.Children.only(s),
            a = (0, l.useContext)(i),
            r = (0, c.SV)([a?.floating.refs.setReference, o?.props.ref]);
          if (!o) return null;
          if (!a)
            return (
              console.error(
                "<PopoverListAnchor> must be a child of <PopoverListRoot>.",
              ),
              null
            );
          const { ref: g, ...f } = o.props;
          return (0, l.cloneElement)(o, { ref: r, ...a.getReferenceProps(f) });
        }
        function T(t) {
          const { children: s, render: o, ref: a } = t,
            r = (0, l.useContext)(i),
            g = (0, c.SV)([
              a,
              r?.floating.refs.setFloating,
              (f) => f?.showPopover?.(),
            ]);
          return r
            ? r.open
              ? (0, n.jsx)(V, {
                  state: r,
                  children: (0, n.jsx)(B, {
                    ref: g,
                    style: r.floating.floatingStyles,
                    ...r.getFloatingProps({ popover: "manual" }),
                    render: o,
                    children: (0, n.jsx)(c.ph, {
                      elementsRef: r.elementsRef,
                      labelsRef: r.labelsRef,
                      children: s,
                    }),
                  }),
                })
              : null
            : (console.error(
                "<PopoverListPositioner> must be a child of <PopoverListRoot>.",
              ),
              null);
        }
        function V(t) {
          return (0, Q.Qn)()
            ? (0, n.jsx)(M, { ...t })
            : (0, n.jsx)(j, { ...t });
        }
        function M(t) {
          const { state: s, children: o } = t,
            a = () => s.floating.context.onOpenChange(!1),
            r = l.useRef(void 0);
          return (
            (0, A.O7)(r, !!r.current, !1),
            (0, n.jsx)(U.D6, {
              navID: "PopoverList",
              onCancelButton: a,
              modal: !0,
              navTreeRef: r,
              children: o,
            })
          );
        }
        function j(t) {
          const { state: s, children: o } = t;
          return (0, n.jsx)(c.s3, {
            context: s.floating.context,
            initialFocus: s.initialFocus,
            returnFocus: !1,
            children: o,
          });
        }
        function P(t) {
          const {
              children: s,
              label: o,
              selected: a,
              onSelect: r,
              ref: g,
              disabled: f,
              ...C
            } = t,
            I = (0, l.useContext)(i),
            { ref: O, index: W } = (0, c.rm)({ label: o }),
            S = (0, c.SV)([g, O]);
          if (!I)
            return (
              console.error(
                "<PopoverListItem> must be a child of <PopoverListRoot>.",
              ),
              null
            );
          const X = W === I.activeIndex,
            J = W === I.selectedIndex || !!a;
          return (0, n.jsx)(B.Option, {
            ref: S,
            selected: J,
            focused: X,
            role: "option",
            tabIndex: 0,
            ...I.getItemProps({
              onClick: f ? void 0 : r,
              onKeyDown: (w) => {
                !f &&
                  (w.key === "Enter" ||
                    (w.key === " " && !I.typingRef.current)) &&
                  (r(w), w.preventDefault(), w.stopPropagation());
              },
              active: X,
              selected: J,
              disabled: f,
              ...C,
            }),
            children: s,
          });
        }
        function L(t) {
          const {
            open: s,
            onOpenChange: o,
            activeIndex: a,
            setActiveIndex: r,
            selectedIndex: g,
            setSelectedIndex: f,
            interactions: C = {},
            role: I,
            placement: O,
          } = t;
          let W = s;
          const S = (0, c.we)({
              open: W,
              onOpenChange: o,
              middleware: re(t),
              whileElementsMounted: h.ll,
              placement: O && typeof O == "object" ? O.initial : O,
              strategy: "fixed",
              platform: {
                ...h.iD,
                getOffsetParent: (ie) =>
                  ie?.ownerDocument?.defaultView ?? window,
              },
            }),
            X = (0, c.kp)(S.context, { enabled: !!C.click }),
            J = (0, c.iQ)(S.context, { enabled: !!C.focus }),
            w = (0, c.s9)(S.context),
            ee = (0, l.useRef)([]),
            ce = (0, c.C1)(S.context, {
              listRef: ee,
              activeIndex: a,
              selectedIndex: g,
              onNavigate: r,
              virtual: !!C.virtualItemFocus,
              loop: !0,
              focusItemOnOpen: !1,
            }),
            ne = (0, l.useRef)([]),
            oe = (0, l.useRef)(!1),
            ae = (0, c.lY)(S.context, {
              enabled: !!C.typeahead,
              listRef: ne,
              activeIndex: a,
              selectedIndex: g,
              onMatch: W ? r : f,
              onTypingChange: (ie) => (oe.current = ie),
            }),
            de = (0, c.It)(S.context, { role: I }),
            {
              getFloatingProps: ue,
              getReferenceProps: fe,
              getItemProps: pe,
            } = (0, c.bv)([de, X, J, w, ce, ae]);
          return {
            floating: S,
            getFloatingProps: ue,
            getReferenceProps: fe,
            getItemProps: pe,
            open: W,
            activeIndex: a,
            selectedIndex: g,
            setSelectedIndex: f,
            elementsRef: ee,
            labelsRef: ne,
            typingRef: oe,
            initialFocus: C.virtualItemFocus ? -1 : void 0,
          };
        }
        const y = { Root: d, Anchor: p, Positioner: T, Item: P };
      },
      58952: (R, D, e) => {
        "use strict";
        e.d(D, { WM: () => H, l6: () => K, uh: () => $ });
        var n = e(7850),
          l = e(90626),
          c = e(92142),
          h = e(86946),
          x = e(12204),
          m = e(15252),
          v = e(63029),
          u = e(76854),
          b = e(39790),
          B = e(94381),
          E = e(68031),
          _ = e(80549);
        function A(i) {
          const {
              children: d,
              state: p,
              placement: T = "bottom-end",
              popoverWidth: V = "dropdown",
              popoverMaxHeight: M,
              ...j
            } = i,
            [P, L] = (0, l.useState)(null),
            [y, t] = (0, l.useState)(null),
            s = (0, l.useMemo)(
              () =>
                p.rgOptions.findIndex((g) =>
                  p.multiselect
                    ? p.selectedValue.includes(g)
                    : g === p.selectedValue,
                ),
              [p.selectedValue, p.rgOptions, p.multiselect],
            ),
            o = (0, l.useRef)(null),
            a = {
              ...p,
              ...j,
              focusedValue: P,
              onFocusChange: L,
              refPopover: o,
              setOpen: (g) => {
                g && L(p.multiselect ? p.selectedValue[0] : p.selectedValue),
                  p.setOpen(g);
              },
              focusedIndex: y,
              onFocusedIndexChange: t,
            },
            r = (0, c.T)({
              open: p.bOpen,
              onOpenChange: p.setOpen,
              width: V,
              maxHeight: M,
              placement: T,
              selectedIndex: s,
              setSelectedIndex: (g) => p.onItemSelectionChange(p.rgOptions[g]),
              activeIndex: y,
              setActiveIndex: t,
              gutter: "4",
              interactions: { click: !0, typeahead: !0 },
              role: "select",
              scroll: !0,
            });
          return (0, n.jsx)(re.Provider, {
            value: a,
            children: (0, n.jsx)(c.k.Root, { state: r, children: d }),
          });
        }
        function U(i) {
          const { refPopover: d } = le("<Select.Options>");
          return (0, n.jsx)(c.k.Positioner, { ref: d, children: i.children });
        }
        function F(i) {
          const { value: d, children: p, disabled: T, ...V } = i,
            {
              onItemSelectionChange: M,
              multiselect: j,
              selectedValue: P,
              maxSelected: L,
            } = le("<SelectTrigger>"),
            y = typeof d == "string" ? d : void 0;
          let t = !1,
            s = !1;
          j
            ? ((t = Array.isArray(P) && P.includes(d)),
              (s = !!L && Array.isArray(P) && P.length >= L))
            : (t = d === P);
          const o = T || (s && !t);
          return (0, n.jsxs)(c.k.Item, {
            label: y,
            onSelect: () => M(d),
            selected: t,
            disabled: o,
            ...V,
            children: [
              j &&
                (0, n.jsxs)(E.s, {
                  gap: "2",
                  align: "center",
                  children: [
                    (0, n.jsx)(B.S, { checked: t, variant: "dark" }),
                    p,
                  ],
                }),
              !j && p,
            ],
          });
        }
        function G(i) {
          const { children: d, render: p } = i,
            {
              bOpen: T,
              setOpen: V,
              selectedValue: M,
              variant: j,
              size: P,
              radius: L,
              status: y,
              rgOptions: t,
              multiselect: s,
              onClear: o,
              focusedValue: a,
              onFocusChange: r,
              onSelectionChange: g,
              clearable: f,
              focusedIndex: C,
              onItemSelectionChange: I,
              onFocusedIndexChange: O,
              refPopover: W,
              placeholder: S,
              maxSelected: X,
              ...J
            } = le("<SelectTrigger>"),
            w = {
              tabIndex: 0,
              role: "combobox",
              onClick: () => V(!T),
              children: d,
            },
            ee = s ? Array.isArray(M) && M.length > 0 : !!M,
            ce =
              ee && f
                ? (0, n.jsx)(v.g, {
                    onClick: o,
                    cursor: "pointer",
                    hitSlop: !0,
                  })
                : (0, n.jsx)(x.V, {}),
            ne = (0, _.f)("Select", j),
            oe = (0, n.jsx)(h.j, {
              afterContent: ce,
              variant: ne,
              size: P,
              radius: L,
              status: y,
              hasValue: ee,
              tabIndex: 0,
              cursor: "pointer",
              ...J,
            }),
            ae = (0, u.Q)(p, oe, w, void 0);
          return (0, n.jsx)(c.k.Anchor, { children: ae });
        }
        function Y(i) {
          return (0, n.jsx)(m.EY, {
            weight: "medium",
            truncate: !0,
            contrast: "title",
            children: i.children,
          });
        }
        function k(i) {
          return (0, n.jsx)(m.EY, {
            contrast: "description",
            truncate: !0,
            children: i.children,
          });
        }
        function H(i) {
          return Q(i, !1);
        }
        function Q(i, d) {
          const { onSelectionChange: p, selectedValue: T, ...V } = i,
            [M, j] = (0, l.useState)(!1),
            P = (0, l.useCallback)(
              (t) => {
                p(t), d || j(!1);
              },
              [p, d],
            ),
            L = (0, l.useCallback)(
              (t) => {
                P(d ? [] : null), t.stopPropagation(), t.preventDefault();
              },
              [P, d],
            ),
            y = (0, l.useCallback)(
              (t) => {
                if (!d) P(t);
                else {
                  const s = T,
                    o = s.indexOf(t);
                  if (o === -1) P(s.concat(t));
                  else return P(s.slice(0, o).concat(s.slice(o + 1)));
                }
              },
              [P, T, d],
            );
          return {
            onSelectionChange: P,
            onItemSelectionChange: y,
            onClear: L,
            bOpen: M,
            setOpen: j,
            multiselect: d,
            selectedValue: T,
            ...V,
          };
        }
        const z = {
          Root: A,
          Option: F,
          Options: U,
          Trigger: G,
          Value: Y,
          Placeholder: k,
        };
        function N(i) {
          return typeof i == "string"
            ? i
            : typeof i == "number"
              ? i.toString()
              : (console.error(
                  "Could not use default option labeler on Select option value. Custom labeler requried",
                  i,
                ),
                "");
        }
        function Z(i) {
          const {
              selectedValue: d,
              onSelectionChange: p,
              options: T,
              placeholder: V,
              getOptionLabel: M = N,
              ...j
            } = i,
            P = H({
              onSelectionChange: p,
              selectedValue: d,
              rgOptions: T,
              placeholder: V,
            }),
            L = d != null,
            y = L ? M(d) : "";
          return (0, n.jsxs)(K.Root, {
            state: P,
            ...j,
            children: [
              (0, n.jsxs)(K.Trigger, {
                children: [
                  L && (0, n.jsx)(K.Value, { children: y }),
                  !L && (0, n.jsx)(K.Placeholder, { children: V }),
                ],
              }),
              (0, n.jsx)(K.Options, {
                children: P.rgOptions.map((t, s) =>
                  (0, n.jsx)(K.Option, { value: t, children: M(t) }, s),
                ),
              }),
            ],
          });
        }
        const K = Object.assign(Z, z);
        function te(i) {
          return Q(i, !0);
        }
        const se = z;
        function q(i) {
          const {
              selectedValue: d,
              onSelectionChange: p,
              options: T,
              placeholder: V,
              getOptionLabel: M = N,
              maxSelected: j,
              ...P
            } = i,
            L = te({
              onSelectionChange: p,
              selectedValue: d,
              rgOptions: T,
              placeholder: V,
              maxSelected: j,
            }),
            y = Array.isArray(d) && d.length > 0;
          let t = "";
          if (y) {
            const s = d.map((o) => M(o));
            "ListFormat" in Intl
              ? (t = new Intl.ListFormat((0, b.ZO)().strISOCode).format(s))
              : (t = s.join(", "));
          }
          return (0, n.jsxs)($.Root, {
            state: L,
            ...P,
            children: [
              (0, n.jsxs)($.Trigger, {
                children: [
                  y && (0, n.jsx)($.Value, { children: t }),
                  !y && (0, n.jsx)($.Placeholder, { children: V }),
                ],
              }),
              (0, n.jsx)($.Options, {
                children: L.rgOptions.map((s, o) =>
                  (0, n.jsx)($.Option, { value: s, children: M(s) }, o),
                ),
              }),
            ],
          });
        }
        const $ = Object.assign(q, se),
          re = (0, l.createContext)(null);
        function le(i) {
          const d = (0, l.useContext)(re);
          return d || console.error(`${i} must be used within a <Select>!`), d;
        }
      },
      31857: (R, D, e) => {
        "use strict";
        e.d(D, { I: () => m });
        var n = e(7850),
          l = e(69289),
          c = e(8928),
          h = e(16619),
          x = e.n(h);
        function m(u) {
          const { viewBoxSize: b = 20, ...B } = u,
            E = B.size ? void 0 : h.IconSizeDefault;
          return (0, n.jsx)("svg", {
            viewBox: `0 0 ${b} ${b}`,
            ...(0, l.mz)({ className: E, ...B }, v),
          });
        }
        const v = [
          ...c.L,
          {
            prop: "size",
            responsive: !0,
            className: (u) => h[`IconSize-${u}`],
          },
          {
            prop: "color",
            className: h.Color,
            cssProperty: (u) => ["--icon-color", (0, l.w7)(u)],
          },
          {
            prop: "hitSlop",
            className: h.HitSlop,
            cssProperty: (u) => [
              "--hit-slop-custom",
              typeof u == "string" ? u : "",
            ],
          },
          c.h.find(({ prop: u }) => u === "cursor"),
        ];
      },
      12204: (R, D, e) => {
        "use strict";
        e.d(D, { V: () => h });
        var n = e(7850),
          l = e(31857);
        const c = {
          up: "rotate( 180, 10, 10 )",
          left: "rotate( 90, 10, 10 )",
          right: "rotate( 270, 10, 10 )",
        };
        function h(x) {
          const { direction: m = "down" } = x,
            v = c[m];
          return (0, n.jsx)(l.I, {
            ...x,
            children: (0, n.jsx)("path", {
              transform: v,
              d: "M5.14541 6.89977L10.0063 12.2027L14.8671 6.89977C15.3557 6.36674 16.145 6.36674 16.6336 6.89977C17.1221 7.4328 17.1221 8.29385 16.6336 8.82688L10.8832 15.1002C10.3946 15.6333 9.60537 15.6333 9.11678 15.1002L3.36644 8.82688C2.87785 8.29385 2.87785 7.4328 3.36644 6.89977C3.85503 6.38041 4.65682 6.36674 5.14541 6.89977Z",
              fill: "currentColor",
            }),
          });
        }
      },
      63029: (R, D, e) => {
        "use strict";
        e.d(D, { g: () => c });
        var n = e(7850),
          l = e(31857);
        function c(h) {
          return (0, n.jsx)(l.I, {
            ...h,
            viewBoxSize: 12,
            children: (0, n.jsx)("path", {
              d: "M10.7068 2.46964L9.53012 1.29297L6.00012 4.81964L2.47012 1.29297L1.29346 2.46964L4.82012 5.99964L1.29346 9.52964L2.47012 10.7063L6.00012 7.17964L9.53012 10.7063L10.7068 9.52964L7.18012 5.99964L10.7068 2.46964Z",
              fill: "currentColor",
            }),
          });
        }
      },
      39790: (R, D, e) => {
        "use strict";
        e.d(D, { ZO: () => l });
        var n = e(31275);
        function l() {
          return (0, n.A)().languages[0];
        }
      },
      22880: (R, D, e) => {
        "use strict";
        e.d(D, { g: () => c });
        var n = e(40323),
          l = e.n(n);
        class c {
          static ParseCSVFile(x, m) {
            return new Promise((v, u) => {
              const B = {
                header: !0,
                skipEmptyLines: "greedy",
                complete: v,
                error: (E) => u({ errors: [E] }),
                transformHeader: m,
              };
              l().parse(x, B);
            });
          }
          static ReadFile(x) {
            return new Promise((m, v) => {
              const u = new FileReader();
              (u.onload = (b) => m(u.result)), u.readAsText(x);
            });
          }
          static WriteFile(x, m) {
            let v = document.createElement("a");
            if (navigator.msSaveBlob) navigator.msSaveBlob(x, m);
            else {
              const u = window.URL.createObjectURL(x);
              v.href = u;
            }
            v.setAttribute("download", m), v.click();
            try {
              document.removeChild(v);
            } catch {}
          }
          static WriteCSVToFile(x, m, v, u) {
            const b = u
                ? l().unparse({ fields: u, data: x }, { header: !0 })
                : l().unparse(x, { header: !0 }),
              B = v == !0 ? ["\uFEFF" + b] : [b];
            c.WriteFile(new Blob(B, { type: "text/csv:charset=utf-8;" }), m);
          }
          static m_DummyValueForQuestionHack = 0;
          static WriteXMLToFile(x, m) {
            const v = () =>
              this.m_DummyValueForQuestionHack ? "never returned" : "?";
            let u =
              "<" +
              v() +
              'xml version="1.0" encoding="UTF-8" ' +
              v() +
              `>
`;
            (u += new XMLSerializer().serializeToString(x)),
              c.WriteFile(
                new Blob([u], { type: "application/xml:charset=utf-8;" }),
                m,
              );
          }
        }
      },
      21895: (R) => {
        R.exports = {
          Root: "_1kIuUssJvopWbHik1IKMG6",
          "Variant-light": "zcrlDqGBY0Lrl7faLFoJI",
          "Variant-dark": "_3b6kFRuG8ILziz88w8GESp",
          "Variant-outline": "wlcXkTKJWe-SE0fCwIRwQ",
          Disabled: "kLcGKsNxkoEqxgok6YzML",
          Checkbox: "_3babFLLB0YYBf8znrlE7Dt",
          Icon: "cngAYeP7ZvFo2pT_v3-xO",
        };
      },
      38878: (R) => {
        R.exports = {
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
      48093: (R) => {
        R.exports = {
          ListBox: "_1PUg8GjnBeN7rBK-dcyQFl",
          ListBoxOption: "_20oF9tLSfptitLraDOp6X6",
        };
      },
      16619: (R) => {
        R.exports = {
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
    },
  ]);
})();
