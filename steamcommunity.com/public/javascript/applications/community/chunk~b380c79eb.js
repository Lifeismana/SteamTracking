/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [9769],
    {
      85367: (R, C, e) => {
        "use strict";
        e.d(C, { S: () => F });
        var t = e(7850),
          n = e(68031),
          s = e(30241),
          l = e(21895),
          p = e.n(l),
          g = e(64238),
          D = e.n(g),
          v = e(80549);
        function F(o) {
          const {
              checked: _,
              onChange: j,
              disabled: E,
              children: O,
              ref: V,
              variant: W,
              color: U,
              align: b = "center",
              ...k
            } = o,
            B = _ === "indeterminate",
            Q = B ? S : s.i,
            G = () => {
              E || (j && j(B ? !0 : !_));
            },
            i = (a) => {
              E ||
                (a.key === " " &&
                  (G(), a.preventDefault(), a.stopPropagation()));
            },
            f = (0, v.f)("Checkbox", W);
          return (0, t.jsxs)(n.s, {
            align: b,
            ref: V,
            role: "checkbox",
            "aria-checked": B ? "mixed" : _,
            "data-state": I(_),
            className: D()(l.Root, l[`Variant-${f}`], E && l.Disabled),
            onClick: G,
            tabIndex: 0,
            onKeyDown: i,
            cursor: "default",
            "aria-disabled": E,
            "data-accent-color": U,
            ...k,
            children: [
              (0, t.jsx)("div", {
                className: l.Checkbox,
                children: _ && (0, t.jsx)(Q, { className: l.Icon }),
              }),
              O,
            ],
          });
        }
        function I(o) {
          return o === "indeterminate" ? o : o ? "checked" : "unchecked";
        }
        function S(o) {
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
      99631: (R, C, e) => {
        "use strict";
        e.d(C, { C: () => l, I: () => p });
        var t = e(7850),
          n = e(90626),
          s = e(7125);
        const l = Symbol("CoercingTextInputNotParseable");
        function p(g) {
          const {
              value: D,
              onValueChange: v,
              valueToString: F,
              valueFromString: I,
              checkValidText: S,
              onBlur: o,
              onKeyDown: _,
              ...j
            } = g,
            [E, O] = (0, n.useState)(null),
            V = E != null ? E : D === void 0 ? "" : F(D),
            W = (B) => {
              const Q = I(B);
              Q !== l && B === F(Q) ? (O(null), v(Q)) : (!S || S(B, Q)) && O(B);
            },
            U = () => {
              if (E !== null) {
                const B = I(E);
                B !== l && v(B), O(null);
              }
            },
            b = (B) => {
              U(), o && o(B);
            },
            k = (B) => {
              B.key === "Enter" && U(), _ && _(B);
            };
          return (0, t.jsx)(s.k, {
            value: V,
            onTextChange: W,
            onKeyDown: k,
            onBlur: b,
            ...j,
          });
        }
      },
      74769: (R, C, e) => {
        "use strict";
        e.d(C, { Bp: () => m, EC: () => N, G3: () => T, PT: () => Y });
        var t = e(7850),
          n = e(90626),
          s = e(86946),
          l = e(12204),
          p = e(15252),
          g = e(7125),
          D = e(63029),
          v = e(185),
          F = e(92148),
          I = e(59366),
          S = e(60351),
          o = e(76854),
          _ = e(68031),
          j = e(36707),
          E = e(39790),
          O = e(85367),
          V = e(71742),
          W = e(82277),
          U = e.n(W),
          b = e(80549),
          k = e(3166);
        function B(P) {
          const {
              children: x,
              state: L,
              placement: te = "bottom-end",
              popoverWidth: X = "dropdown",
              popoverMaxHeight: J,
              ...ne
            } = P,
            [w, Z] = (0, n.useState)(void 0);
          (0, n.useEffect)(() => Z(void 0), [L.bOpen]);
          const ie = (0, k.Qn)(),
            re = (0, n.useRef)(null),
            se = (0, n.useRef)(null),
            q = (0, n.useMemo)(
              () =>
                L.rgFilteredOptions.findIndex((ee) => ee === L.selectedValue),
              [L.selectedValue, L.rgFilteredOptions],
            ),
            le = (0, v.T)({
              open: L.bOpen,
              onOpenChange: L.setOpen,
              width: X,
              maxHeight: J,
              placement: te,
              gutter: "4",
              activeIndex: L.activeIndex,
              setActiveIndex: L.setActiveIndex,
              selectedIndex: q,
              setSelectedIndex: (ee) =>
                L.onItemSelectionChange(L.rgFilteredOptions[ee]),
              interactions: { click: !0, virtualItemFocus: !ie },
              role: "combobox",
              scroll: !1,
            }),
            oe = {
              ...L,
              ...ne,
              focusedValue: w,
              onFocusChange: Z,
              refPopover: re,
              refScrollElement: se,
              setOpen: (ee) => {
                if (ee) {
                  let ue = null;
                  L.multiselect
                    ? (ue = Array.isArray(L.selectedValue)
                        ? L.selectedValue[0]
                        : null)
                    : (ue = L.selectedValue),
                    Z(ue),
                    L.onInputChange("");
                }
                L.setOpen(ee);
              },
              onIndexSelected: (ee) => {
                const ue = le.elementsRef.current;
                ue && ue[ee] && ue[ee].click();
              },
              popoverPlacement: le.floating.placement,
            };
          return (0, t.jsx)($.Provider, {
            value: oe,
            children: (0, t.jsx)(v.k.Root, { state: le, children: x }),
          });
        }
        function Q(P) {
          const {
              refPopover: x,
              inputValue: L,
              onInputChange: te,
              activeIndex: X,
              popoverPlacement: J,
              multiselect: ne,
              setActiveIndex: w,
              setOpen: Z,
              filterPlaceholder: ie,
              onIndexSelected: re,
              refScrollElement: se,
            } = de("<Combobox.Options>"),
            q = (ce) => {
              ce && ce.focus({ preventScroll: !0 });
            },
            le = (ce) => {
              ce.key === "Enter" &&
                X !== null &&
                (re(X),
                ne || (w(null), Z(!1)),
                ce.preventDefault(),
                ce.stopPropagation());
            },
            oe = J.startsWith("top"),
            ee = (0, t.jsx)(S.az, {
              overflow: "auto",
              ref: se,
              style: { overscrollBehavior: "contain" },
              children: P.children,
            }),
            ue = (ce) => {
              (ce.key === "Home" || ce.key === "End") && ce.stopPropagation();
            };
          return (0, t.jsx)(v.k.Positioner, {
            ref: x,
            children: (0, t.jsxs)(_.s, {
              direction: "column",
              maxHeight: "var(--popover-max-height)",
              children: [
                oe && ee,
                (0, t.jsx)(S.az, {
                  flexShrink: "0",
                  className: (0, j.A)(W.FilterBorder, oe ? W.Top : W.Bottom),
                  children: (0, t.jsx)(g.k, {
                    margin: "3",
                    variant: "inset",
                    radius: "sm",
                    value: L,
                    onTextChange: te,
                    onKeyDown: le,
                    onKeyDownCapture: ue,
                    placeholder: ie,
                    inputRef: q,
                    autoComplete: "off",
                  }),
                }),
                !oe && ee,
              ],
            }),
          });
        }
        const G = (0, n.createContext)(null);
        function i(P) {
          const { items: x, renderItem: L, overscan: te = 5, ...X } = P,
            {
              bOpen: J,
              refPopover: ne,
              refScrollElement: w,
            } = de("<ComboboxVirtualizedOptions>"),
            [Z, ie] = (0, n.useState)(!1),
            re = J && !!ne.current && !!w.current;
          (0, n.useEffect)(() => {
            re !== Z && ie(re);
          }, [re, Z]);
          const se = (0, F.Te)({
            count: Z ? x.length : Math.min(x.length, 3),
            getScrollElement: () => w.current,
            enabled: J,
            measureElement: I.ZO,
            ...X,
          });
          return (0, t.jsx)(Q, {
            children: (0, t.jsx)(G, {
              value: se,
              children: (0, t.jsx)(S.az, {
                height: `${se.getTotalSize()}px`,
                position: "relative",
                width: "100%",
                children: se.getVirtualItems().map((q) => L(x[q.index], q, se)),
              }),
            }),
          });
        }
        function f(P) {
          const { virtualItem: x, children: L } = P,
            te = (0, n.useContext)(G);
          return (
            (0, V.wT)(te, "Virtual item rendered outside of a virtualizer!"),
            (0, t.jsx)(S.az, {
              position: "absolute",
              width: "100%",
              style: { top: 0, left: 0, transform: `translateY(${x.start}px)` },
              ref: te.measureElement,
              "data-index": x.index,
              children: L,
            })
          );
        }
        function a(P) {
          const { virtualItem: x, ...L } = P;
          return (0, t.jsx)(f, {
            virtualItem: x,
            children: (0, t.jsx)(c, { ...L }),
          });
        }
        function h(P) {
          const { virtualItem: x, children: L } = P;
          return (0, t.jsx)(f, { virtualItem: x, children: L });
        }
        function c(P) {
          const { value: x, children: L, disabled: te } = P,
            {
              onItemSelectionChange: X,
              selectedValue: J,
              multiselect: ne,
              maxSelected: w,
            } = de("<ComboboxTrigger>");
          let Z = !1,
            ie = !1;
          ne
            ? ((Z = Array.isArray(J) && J.includes(x)),
              (ie = !!w && Array.isArray(J) && J.length >= w))
            : (Z = x === J);
          const re = te || (ie && !Z);
          return (0, t.jsxs)(v.k.Item, {
            onSelect: () => X(x),
            selected: Z,
            disabled: re,
            children: [
              ne &&
                (0, t.jsxs)(_.s, {
                  gap: "2",
                  align: "center",
                  children: [
                    (0, t.jsx)(O.S, { checked: Z, variant: "dark" }),
                    L,
                  ],
                }),
              !ne && L,
            ],
          });
        }
        function z(P) {
          const { children: x, beforeContent: L, render: te } = P,
            {
              bOpen: X,
              setOpen: J,
              inputValue: ne,
              onInputChange: w,
              selectedValue: Z,
              focusedValue: ie,
              refScrollElement: re,
              onItemSelectionChange: se,
              activeIndex: q,
              setActiveIndex: le,
              onFocusChange: oe,
              rgFilteredOptions: ee,
              onSelectionChange: ue,
              multiselect: ce,
              onClear: fe,
              refPopover: _e,
              clearable: me,
              filterPlaceholder: he,
              onIndexSelected: ae,
              popoverPlacement: xe,
              maxSelected: Ee,
              variant: Pe,
              ...pe
            } = de("<ComboboxTrigger>"),
            Oe = { tabIndex: 0, children: x },
            ve = ce ? Array.isArray(Z) && Z.length > 0 : !!Z,
            Ce =
              ve && me
                ? (0, t.jsx)(D.g, {
                    onClick: fe,
                    cursor: "pointer",
                    hitSlop: !0,
                  })
                : (0, t.jsx)(l.V, {}),
            ge = (0, b.f)("Combobox", Pe),
            De = (0, t.jsx)(s.j, {
              beforeContent: L,
              afterContent: Ce,
              hasValue: ve,
              cursor: "pointer",
              tabIndex: 0,
              variant: ge,
              ...pe,
            }),
            Ie = (0, o.Q)(te, De, Oe, void 0);
          return (0, t.jsx)(v.k.Anchor, { children: Ie });
        }
        function r(P) {
          return (0, t.jsx)(p.EY, {
            weight: "medium",
            truncate: !0,
            contrast: "title",
            ...P,
          });
        }
        function d(P) {
          return (0, t.jsx)(p.EY, {
            contrast: "description",
            truncate: !0,
            ...P,
          });
        }
        function u(P, x) {
          if (typeof x == "string")
            return x.toLocaleLowerCase().includes(P.toLocaleLowerCase());
          try {
            return JSON.stringify(x)
              .toLocaleLowerCase()
              .includes(P.toLocaleLowerCase());
          } catch {}
          return (
            console.error(
              "Could not use default option filter on provided Comboxbox option. Custom filter function required.",
            ),
            !1
          );
        }
        function m(P) {
          return A(P, !1);
        }
        function A(P, x) {
          const {
              rgOptions: L,
              filter: te = u,
              filterPlaceholder: X,
              selectedValue: J,
              onSelectionChange: ne,
              maxSelected: w,
            } = P,
            [Z, ie] = (0, n.useState)(""),
            [re, se] = (0, n.useState)(!1),
            [q, le] = (0, n.useState)(null),
            oe = (0, n.useMemo)(() => L.filter((ae) => te(Z, ae)), [Z, L, te]),
            ee = typeof q == "number",
            ue = oe.length > 0,
            ce = (0, n.useCallback)(
              (ae) => {
                ae && !ee && ue && le(0), ie(ae);
              },
              [ee, ue],
            ),
            fe = (0, n.useCallback)(
              (ae) => {
                ae || ce(""), se(ae);
              },
              [ce],
            ),
            _e = (0, n.useCallback)(
              (ae) => {
                ne(ae), x || fe(!1);
              },
              [x, ne, fe],
            ),
            me = (ae) => {
              _e(x ? [] : null), ae.stopPropagation(), ae.preventDefault();
            },
            he = (0, n.useCallback)(
              (ae) => {
                if (!x) _e(ae);
                else if (!J) _e([ae]);
                else {
                  const xe = J,
                    Ee = xe.indexOf(ae);
                  if (Ee === -1) _e(xe.concat(ae));
                  else return _e(xe.slice(0, Ee).concat(xe.slice(Ee + 1)));
                }
              },
              [_e, J, x],
            );
          return {
            activeIndex: q,
            setActiveIndex: le,
            rgFilteredOptions: oe,
            selectedValue: J,
            onSelectionChange: _e,
            onItemSelectionChange: he,
            onClear: me,
            inputValue: Z,
            onInputChange: ce,
            bOpen: re,
            setOpen: fe,
            filterPlaceholder: X,
            multiselect: x,
            maxSelected: w,
          };
        }
        const M = {
          Root: B,
          Option: c,
          Options: Q,
          VirtualizedOptions: i,
          VirtualizedOption: a,
          VirtualizedContent: h,
          Trigger: z,
          DefaultOptionFilter: u,
          Value: r,
          Placeholder: d,
        };
        function H(P) {
          return P
            ? typeof P == "string"
              ? P
              : typeof P == "number"
                ? P.toString()
                : (console.error(
                    "Could not use default option labeler on Combobox option value. Custom labeler requried",
                    P,
                  ),
                  "")
            : "";
        }
        function y(P) {
          const {
              selectedValue: x,
              onSelectionChange: L,
              options: te,
              filter: X,
              filterPlaceholder: J,
              placeholder: ne,
              getOptionLabel: w = H,
              ...Z
            } = P,
            ie = (0, n.useCallback)(
              (q, le) => (X ? X(q, le) : u(q, w(le))),
              [X, w],
            ),
            re = m({
              onSelectionChange: L,
              selectedValue: x,
              rgOptions: te,
              filter: ie,
              filterPlaceholder: J,
            }),
            se = x != null;
          return (0, t.jsxs)(T.Root, {
            state: re,
            ...Z,
            children: [
              (0, t.jsxs)(T.Trigger, {
                children: [
                  se && (0, t.jsx)(T.Value, { children: w(x) }),
                  !se && (0, t.jsx)(T.Placeholder, { children: ne }),
                ],
              }),
              (0, t.jsx)(T.Options, {
                children: re.rgFilteredOptions.map((q) =>
                  (0, t.jsx)(c, { value: q, children: w(q) }, w(q)),
                ),
              }),
            ],
          });
        }
        const T = Object.assign(y, M);
        function N(P) {
          return A(P, !0);
        }
        function K(P) {
          const {
              selectedValue: x,
              onSelectionChange: L,
              options: te,
              filter: X,
              filterPlaceholder: J,
              placeholder: ne,
              getOptionLabel: w = H,
              maxSelected: Z,
              ...ie
            } = P,
            re = (0, n.useCallback)(
              (oe, ee) => (X ? X(oe, ee) : u(oe, w(ee))),
              [X, w],
            ),
            se = N({
              onSelectionChange: L,
              selectedValue: x,
              rgOptions: te,
              filter: re,
              filterPlaceholder: J,
              maxSelected: Z,
            }),
            q = Array.isArray(x) && x.length > 0;
          let le = "";
          if (q) {
            const oe = x.map((ee) => w(ee));
            "ListFormat" in Intl
              ? (le = new Intl.ListFormat((0, E.ZO)().strISOCode).format(oe))
              : (le = oe.join(", "));
          }
          return (0, t.jsxs)(T.Root, {
            state: se,
            ...ie,
            children: [
              (0, t.jsxs)(T.Trigger, {
                children: [
                  q && (0, t.jsx)(T.Value, { children: le }),
                  !q && (0, t.jsx)(T.Placeholder, { children: ne }),
                ],
              }),
              (0, t.jsx)(T.Options, {
                children: se.rgFilteredOptions.map((oe) =>
                  (0, t.jsx)(T.Option, { value: oe, children: w(oe) }, w(oe)),
                ),
              }),
            ],
          });
        }
        const Y = Object.assign(K, M),
          $ = (0, n.createContext)(null);
        function de(P) {
          const x = (0, n.useContext)($);
          return (
            x || console.error(`${P} must be used within a <Combobox>!`), x
          );
        }
      },
      86946: (R, C, e) => {
        "use strict";
        e.d(C, { j: () => I, w: () => S });
        var t = e(7850),
          n = e(64238),
          s = e.n(n),
          l = e(38878),
          p = e.n(l),
          g = e(60351),
          D = e(68031),
          v = e(8928),
          F = e(69289);
        function I(o) {
          const {
              children: _,
              beforeContent: j,
              afterContent: E,
              hasValue: O,
              ...V
            } = o,
            W = S(V);
          return (0, t.jsxs)(D.s, {
            ...W,
            align: "center",
            "data-has-value": !!O,
            children: [
              j && (0, t.jsx)(D.s, { paddingRight: "2", children: j }),
              (0, t.jsx)(g.az, { flexGrow: "1", minWidth: "0", children: _ }),
              E && (0, t.jsx)(D.s, { paddingLeft: "2", children: E }),
            ],
          });
        }
        function S(o) {
          const {
              variant: _ = "basic",
              size: j = "2",
              radius: E,
              focusable: O = !0,
              hoverable: V = !0,
              clickable: W = !0,
              disabled: U,
              className: b,
              status: k,
              ...B
            } = o,
            Q = _ === "underline" ? "none" : E;
          return (0, F.mz)(
            {
              ...B,
              radius: Q,
              "data-status": k,
              className: s()(
                l.ControlBox,
                O && !U && l.Focusable,
                V && !U && l.Hoverable,
                W && !U && l.Clickable,
                U && l.Disabled,
                l[`Variant-${_}`],
                l[`Size-${j}`],
                b,
              ),
            },
            v.h,
          );
        }
      },
      98929: (R, C, e) => {
        "use strict";
        e.d(C, { F: () => s });
        var t = e(24089),
          n = e.n(t);
        function s() {
          return t.TextEntry;
        }
      },
      84909: (R, C, e) => {
        "use strict";
        e.d(C, { A: () => G, p: () => Q });
        var t = e(7850),
          n = e(90626),
          s = e(73788),
          l = e(8083),
          p = e(94621),
          g = e(18938),
          D = e(24660),
          v = e(38566),
          F = e(54130),
          I = e(71742),
          S = e(64238),
          o = e.n(S),
          _ = e(3877),
          j = e(3166);
        const E = (0, n.createContext)(null);
        function O(i) {
          const { children: f, ...a } = i,
            h = B(a);
          return (0, t.jsx)(E.Provider, { value: h, children: f });
        }
        function V(i) {
          const { children: f } = i,
            a = n.Children.only(f),
            h = (0, n.useContext)(E);
          return a
            ? h
              ? (0, n.cloneElement)(a, {
                  ...h.getReferenceProps(a.props),
                  ref: (0, g.XB)(a.props.ref, h.floating.refs.setReference),
                })
              : (console.error(
                  "<PopoverAnchor> must be a child of <PopoverRoot>.",
                ),
                null)
            : null;
        }
        function W(i) {
          const { children: f, className: a, ref: h } = i,
            c = (0, n.useContext)(E),
            z = (0, s.SV)([
              h,
              c == null ? void 0 : c.floating.refs.setFloating,
              (m) => {
                var A;
                return (A = m == null ? void 0 : m.showPopover) == null
                  ? void 0
                  : A.call(m);
              },
            ]);
          if (!c)
            return (
              console.error(
                "<Popover.Positioner> must be a child of <Popover.Root>.",
              ),
              null
            );
          if (!c.open) return null;
          let r = n.Children.only(f),
            d = n.Fragment;
          r.type == G.FocusManager &&
            ((r = n.Children.only(r.props.children)), (d = U));
          const u = (0, n.cloneElement)(r, {
            ref: z,
            style: { ...c.floating.floatingStyles },
            className: o()((0, _.T)(), a),
            popover: "manual",
            ...c.getFloatingProps(),
          });
          return (0, t.jsx)(d, { children: u });
        }
        function U(i) {
          return (0, j.Qn)()
            ? (0, t.jsx)(b, { ...i })
            : (0, t.jsx)(k, { ...i });
        }
        function b(i) {
          const { children: f } = i,
            a = (0, n.useContext)(E);
          (0, I.wT)(
            !!a,
            "<Popover.Positioner> must be a child of <Popover.Root>.",
          );
          const h = () => a.floating.context.onOpenChange(!1),
            c = n.useRef(void 0);
          return (
            (0, D.O7)(c, !!c.current, !1),
            (0, t.jsx)(v.D6, {
              navID: "Popover",
              onCancelButton: h,
              modal: !0,
              navTreeRef: c,
              children: (0, t.jsx)("div", {
                style: { display: "contents" },
                children: (0, t.jsx)(F.q, { children: f }),
              }),
            })
          );
        }
        function k(i) {
          const { children: f } = i,
            a = (0, n.useContext)(E);
          return (
            (0, I.wT)(
              !!a,
              "<Popover.Positioner> must be a child of <Popover.Root>.",
            ),
            (0, t.jsx)(s.s3, {
              context: a.floating.context,
              initialFocus: -1,
              returnFocus: !1,
              children: f,
            })
          );
        }
        function B(i) {
          const {
            open: f,
            onOpenChange: a,
            placement: h,
            interactions: c = {},
          } = i;
          let z = f;
          const r = (0, s.we)({
              open: z,
              onOpenChange: a,
              middleware: Q(i),
              whileElementsMounted: l.ll,
              placement: h && typeof h == "object" ? h.initial : h,
              strategy: "fixed",
              platform: {
                ...l.iD,
                getOffsetParent: (de) => {
                  var P, x;
                  return (x =
                    (P = de == null ? void 0 : de.ownerDocument) == null
                      ? void 0
                      : P.defaultView) != null
                    ? x
                    : window;
                },
              },
            }),
            d = { enabled: !!c.click },
            u = typeof c.click == "function" ? c.click(d) : d,
            m = (0, s.kp)(r.context, u),
            A = { enabled: !!c.focus },
            M = typeof c.focus == "function" ? c.focus(A) : A,
            H = (0, s.iQ)(r.context, M),
            y = { handleClose: (0, s.iB)() },
            T = typeof c.hover == "function" ? c.hover(y) : y,
            N = (0, s.Mk)(r.context, { enabled: !!c.hover, ...T }),
            K = (0, s.s9)(r.context),
            { getFloatingProps: Y, getReferenceProps: $ } = (0, s.bv)([
              m,
              H,
              N,
              K,
            ]);
          return {
            floating: r,
            getFloatingProps: Y,
            getReferenceProps: $,
            open: z,
          };
        }
        function Q(i) {
          const { gutter: f = 0, placement: a } = i,
            h = [],
            c = a && typeof a == "object";
          return (
            c && a.offset
              ? h.push((0, p.cY)(a.offset))
              : (!c || a.offset === void 0) && h.push((0, p.cY)(2)),
            c && a.flip
              ? h.push((0, p.UU)(a.flip))
              : (!c || a.flip === void 0) && h.push((0, p.UU)()),
            c && a.shift
              ? h.push((0, p.BN)(a.shift))
              : (!c || a.shift === void 0) && h.push((0, p.BN)()),
            h.push(
              (0, p.Ej)({
                apply: (z) => {
                  const { rects: r, elements: d, availableHeight: u } = z,
                    m = { boxSizing: "border-box", zIndex: "1" };
                  switch ((i.scroll && (m.overflowY = "auto"), i.width)) {
                    case "target": {
                      m.width = `${r.reference.width}px`;
                      break;
                    }
                    case "content": {
                      m.width = `${r.floating.width}px`;
                      break;
                    }
                    case "dropdown": {
                      let M = r.reference.width;
                      r.floating.width > M && M < 200 && (M = r.floating.width),
                        (m.width = `${M}px`);
                    }
                  }
                  typeof i.width == "function" &&
                    (m.width = i.width({
                      unContentWidth: r.floating.width,
                      unTargetWidth: r.reference.width,
                    }));
                  const A =
                    typeof f == "number" ? `${f}px` : `var(--spacing-${f})`;
                  typeof i.maxHeight == "function"
                    ? (m.maxHeight = i.maxHeight({
                        unAvailableHeight: u,
                        gutter: A,
                      }))
                    : typeof i.maxHeight == "number"
                      ? (m.maxHeight = `min( calc( ${u}px - ${A} ), ${i.maxHeight}px )`)
                      : typeof f == "number"
                        ? (m.maxHeight = `${u - f}px`)
                        : (m.maxHeight = `calc( ${u}px - var(--spacing-${f}) )`),
                    Object.assign(d.floating.style, m),
                    d.floating.style.setProperty(
                      "--popover-max-height",
                      m.maxHeight,
                    );
                },
              }),
            ),
            h
          );
        }
        const G = { Root: O, Anchor: V, Positioner: W, FocusManager: U };
      },
      185: (R, C, e) => {
        "use strict";
        e.d(C, { k: () => G, T: () => Q });
        var t = e(7850),
          n = e(90626),
          s = e(73788),
          l = e(8083),
          p = e(60351),
          g = e(76854),
          D = e(48093);
        function v(i) {
          const { render: f, ...a } = i;
          return (0, g.Q)(
            f,
            (0, t.jsx)(p.az, {
              radius: "sm",
              background: "dull-8",
              className: D.ListBox,
            }),
            { role: "listbox", ...a },
          );
        }
        function F(i) {
          const {
              selected: f,
              focused: a,
              label: h = null,
              render: c,
              disabled: z,
              ...r
            } = i,
            d = f ? "true" : "false",
            u = a ? "true" : void 0;
          return (0, g.Q)(
            c,
            (0, t.jsx)(p.az, {
              focusable: !0,
              "data-selected": d,
              "data-focused": u,
              "aria-disabled": z,
              className: D.ListBoxOption,
              paddingY: "2",
              paddingX: "3",
            }),
            { role: "option", ...r },
            { selected: f, focused: a, disabled: z },
          );
        }
        const I = Object.assign(v, { Option: F });
        var S = e(84909),
          o = e(24660),
          _ = e(38566),
          j = e(3166);
        const E = (0, n.createContext)(null);
        function O(i) {
          const { children: f, state: a } = i;
          return (0, t.jsx)(E.Provider, { value: a, children: f });
        }
        function V(i) {
          const { children: f } = i,
            a = n.Children.only(f),
            h = (0, n.useContext)(E),
            c = (0, s.SV)([
              h == null ? void 0 : h.floating.refs.setReference,
              a == null ? void 0 : a.props.ref,
            ]);
          if (!a) return null;
          if (!h)
            return (
              console.error(
                "<PopoverListAnchor> must be a child of <PopoverListRoot>.",
              ),
              null
            );
          const { ref: z, ...r } = a.props;
          return (0, n.cloneElement)(a, { ref: c, ...h.getReferenceProps(r) });
        }
        function W(i) {
          const { children: f, render: a, ref: h } = i,
            c = (0, n.useContext)(E),
            z = (0, s.SV)([
              h,
              c == null ? void 0 : c.floating.refs.setFloating,
              (r) => {
                var d;
                return (d = r == null ? void 0 : r.showPopover) == null
                  ? void 0
                  : d.call(r);
              },
            ]);
          return c
            ? c.open
              ? (0, t.jsx)(U, {
                  state: c,
                  children: (0, t.jsx)(I, {
                    ref: z,
                    style: c.floating.floatingStyles,
                    ...c.getFloatingProps({ popover: "manual" }),
                    render: a,
                    children: (0, t.jsx)(s.ph, {
                      elementsRef: c.elementsRef,
                      labelsRef: c.labelsRef,
                      children: f,
                    }),
                  }),
                })
              : null
            : (console.error(
                "<PopoverListPositioner> must be a child of <PopoverListRoot>.",
              ),
              null);
        }
        function U(i) {
          return (0, j.Qn)()
            ? (0, t.jsx)(b, { ...i })
            : (0, t.jsx)(k, { ...i });
        }
        function b(i) {
          const { state: f, children: a } = i,
            h = () => f.floating.context.onOpenChange(!1),
            c = n.useRef(void 0);
          return (
            (0, o.O7)(c, !!c.current, !1),
            (0, t.jsx)(_.D6, {
              navID: "PopoverList",
              onCancelButton: h,
              modal: !0,
              navTreeRef: c,
              children: a,
            })
          );
        }
        function k(i) {
          const { state: f, children: a } = i;
          return (0, t.jsx)(s.s3, {
            context: f.floating.context,
            initialFocus: f.initialFocus,
            returnFocus: !1,
            children: a,
          });
        }
        function B(i) {
          const {
              children: f,
              label: a,
              selected: h,
              onSelect: c,
              ref: z,
              disabled: r,
              ...d
            } = i,
            u = (0, n.useContext)(E),
            { ref: m, index: A } = (0, s.rm)({ label: a }),
            M = (0, s.SV)([z, m]);
          if (!u)
            return (
              console.error(
                "<PopoverListItem> must be a child of <PopoverListRoot>.",
              ),
              null
            );
          const H = A === u.activeIndex,
            y = A === u.selectedIndex || !!h;
          return (0, t.jsx)(I.Option, {
            ref: M,
            selected: y,
            focused: H,
            role: "option",
            tabIndex: 0,
            ...u.getItemProps({
              onClick: r ? void 0 : c,
              onKeyDown: (T) => {
                !r &&
                  (T.key === "Enter" ||
                    (T.key === " " && !u.typingRef.current)) &&
                  (c(T), T.preventDefault(), T.stopPropagation());
              },
              active: H,
              selected: y,
              disabled: r,
              ...d,
            }),
            children: f,
          });
        }
        function Q(i) {
          const {
            open: f,
            onOpenChange: a,
            activeIndex: h,
            setActiveIndex: c,
            selectedIndex: z,
            setSelectedIndex: r,
            interactions: d = {},
            role: u,
            placement: m,
          } = i;
          let A = f;
          const M = (0, s.we)({
              open: A,
              onOpenChange: a,
              middleware: (0, S.p)(i),
              whileElementsMounted: l.ll,
              placement: m && typeof m == "object" ? m.initial : m,
              strategy: "fixed",
              platform: {
                ...l.iD,
                getOffsetParent: (X) => {
                  var J, ne;
                  return (ne =
                    (J = X == null ? void 0 : X.ownerDocument) == null
                      ? void 0
                      : J.defaultView) != null
                    ? ne
                    : window;
                },
              },
            }),
            H = (0, s.kp)(M.context, { enabled: !!d.click }),
            y = (0, s.iQ)(M.context, { enabled: !!d.focus }),
            T = (0, s.s9)(M.context),
            N = (0, n.useRef)([]),
            K = (0, s.C1)(M.context, {
              listRef: N,
              activeIndex: h,
              selectedIndex: z,
              onNavigate: c,
              virtual: !!d.virtualItemFocus,
              loop: !0,
              focusItemOnOpen: !1,
            }),
            Y = (0, n.useRef)([]),
            $ = (0, n.useRef)(!1),
            de = (0, s.lY)(M.context, {
              enabled: !!d.typeahead,
              listRef: Y,
              activeIndex: h,
              selectedIndex: z,
              onMatch: A ? c : r,
              onTypingChange: (X) => ($.current = X),
            }),
            P = (0, s.It)(M.context, { role: u }),
            {
              getFloatingProps: x,
              getReferenceProps: L,
              getItemProps: te,
            } = (0, s.bv)([P, H, y, T, K, de]);
          return {
            floating: M,
            getFloatingProps: x,
            getReferenceProps: L,
            getItemProps: te,
            open: A,
            activeIndex: h,
            selectedIndex: z,
            setSelectedIndex: r,
            elementsRef: N,
            labelsRef: Y,
            typingRef: $,
            initialFocus: d.virtualItemFocus ? -1 : void 0,
          };
        }
        const G = { Root: O, Anchor: V, Positioner: W, Item: B };
      },
      21663: (R, C, e) => {
        "use strict";
        e.d(C, { I: () => E });
        var t = e(7850),
          n = e(90626),
          s = e(86946),
          l = e(60351),
          p = e(71742),
          g = e(64238),
          D = e.n(g),
          v = e(53011),
          F = e.n(v),
          I = e(68031),
          S = e(80549);
        const o = (0, n.createContext)(null);
        function _(W) {
          const {
              variant: U,
              radius: b,
              size: k,
              status: B,
              children: Q,
              value: G,
              onValueChange: i,
            } = W,
            [f, a] = (0, n.useState)({}),
            h = (0, n.useCallback)((u, m) => a((A) => ({ ...A, [m]: u })), []),
            c = (0, n.useCallback)(
              (u, m) =>
                a((A) => {
                  const M = { ...A };
                  return M[m] === u && delete M[m], M;
                }),
              [],
            ),
            z = (u) => {
              let m = 0;
              switch (u.key) {
                case " ":
                case "Enter":
                case "ArrowRight":
                  m = 1;
                  break;
                case "ArrowLeft":
                  m = -1;
                  break;
              }
              if (m) {
                const A = Array.from(Object.values(f)).sort(V);
                let M;
                if (G === null) M = m > 0 ? 0 : A.length - 1;
                else {
                  const T = f[G],
                    N = A.findIndex((K) => K === T);
                  (0, p.wT)(
                    typeof N == "number",
                    "Could not find current segmented value position",
                  ),
                    (M = N + m);
                }
                const H = A[M < 0 ? A.length + M : M % A.length],
                  y = Object.keys(f).find((T) => f[T] === H);
                typeof y != "string"
                  ? console.error("Could not find next segmeneted value")
                  : (i(y), u.stopPropagation(), u.preventDefault());
              }
            },
            r = (0, S.f)("SegmentedControl", U),
            d = (0, n.useMemo)(
              () => ({
                value: G,
                onValueChange: i,
                register: h,
                unregister: c,
                radius: b,
                size: k,
              }),
              [G, i, h, c, b, k],
            );
          return (0, t.jsx)(s.j, {
            clickable: !1,
            hoverable: !1,
            focusable: !1,
            variant: r,
            radius: b,
            size: k,
            status: B,
            className: D()(v.SegmentedControlBox, v[`Variant-${r}`]),
            tabIndex: 0,
            onKeyDown: z,
            children: (0, t.jsx)(o.Provider, {
              value: d,
              children: (0, t.jsxs)(l.az, {
                className: v.SegmentedControl,
                style: { "--outer-radius": `var(--radius-${b})` },
                children: [Q, G !== null && (0, t.jsx)(O, { radius: b })],
              }),
            }),
          });
        }
        function j(W) {
          const { value: U, children: b, disabled: k } = W,
            B = (0, n.useContext)(o),
            [Q, G] = (0, n.useState)(),
            { register: i, unregister: f } = B || {};
          if (
            ((0, n.useEffect)(
              () => (!Q || !i || !f ? () => {} : (i(Q, U), () => f(Q, U))),
              [i, f, U, Q],
            ),
            !B)
          )
            return null;
          const { value: a, onValueChange: h, radius: c, size: z } = B,
            r = U === a,
            d = (m) => {
              m.stopPropagation(), m.preventDefault(), !(r || k) && h(U);
            },
            u = b === void 0 ? U : b;
          return (0, t.jsx)(I.s, {
            justify: "center",
            align: "center",
            ref: G,
            onClick: d,
            "data-selected": r ? "true" : "false",
            className: D()(v.Item, z && v[`Size-${z}`], k ? v.disabled : ""),
            children: u,
          });
        }
        function E(W) {
          const { options: U, getOptionLabel: b = (B) => B, ...k } = W;
          return (0, t.jsx)(E.Root, {
            ...k,
            children: U.map((B) =>
              (0, t.jsx)(E.Item, { value: B, children: b(B) }, B),
            ),
          });
        }
        (E.Item = j), (E.Root = _);
        function O(W) {
          const { radius: U } = W;
          return (0, t.jsx)(l.az, {
            className: v.IndicatorPosition,
            children: (0, t.jsx)("div", { className: v.Indicator }),
          });
        }
        function V(W, U) {
          const b = W.compareDocumentPosition(U);
          return b & Node.DOCUMENT_POSITION_FOLLOWING
            ? -1
            : b & Node.DOCUMENT_POSITION_PRECEDING
              ? 1
              : 0;
        }
      },
      58952: (R, C, e) => {
        "use strict";
        e.d(C, { DL: () => i, WM: () => U, l6: () => G, uh: () => h });
        var t = e(7850),
          n = e(90626),
          s = e(185),
          l = e(86946),
          p = e(12204),
          g = e(15252),
          D = e(63029),
          v = e(76854),
          F = e(39790),
          I = e(85367),
          S = e(68031),
          o = e(80549);
        function _(r) {
          const {
              children: d,
              state: u,
              placement: m = "bottom-end",
              popoverWidth: A = "dropdown",
              popoverMaxHeight: M,
              ...H
            } = r,
            [y, T] = (0, n.useState)(null),
            [N, K] = (0, n.useState)(null),
            Y = (0, n.useMemo)(
              () =>
                u.rgOptions.findIndex((x) =>
                  u.multiselect
                    ? u.selectedValue.includes(x)
                    : x === u.selectedValue,
                ),
              [u.selectedValue, u.rgOptions, u.multiselect],
            ),
            $ = (0, n.useRef)(null),
            de = {
              ...u,
              ...H,
              focusedValue: y,
              onFocusChange: T,
              refPopover: $,
              setOpen: (x) => {
                x && T(u.multiselect ? u.selectedValue[0] : u.selectedValue),
                  u.setOpen(x);
              },
              focusedIndex: N,
              onFocusedIndexChange: K,
            },
            P = (0, s.T)({
              open: u.bOpen,
              onOpenChange: u.setOpen,
              width: A,
              maxHeight: M,
              placement: m,
              selectedIndex: Y,
              setSelectedIndex: (x) => u.onItemSelectionChange(u.rgOptions[x]),
              activeIndex: N,
              setActiveIndex: K,
              gutter: "4",
              interactions: { click: !0, typeahead: !0 },
              role: "select",
              scroll: !0,
            });
          return (0, t.jsx)(c.Provider, {
            value: de,
            children: (0, t.jsx)(s.k.Root, { state: P, children: d }),
          });
        }
        function j(r) {
          const { refPopover: d } = z("<Select.Options>");
          return (0, t.jsx)(s.k.Positioner, { ref: d, children: r.children });
        }
        function E(r) {
          const { value: d, children: u, disabled: m, ...A } = r,
            {
              onItemSelectionChange: M,
              multiselect: H,
              selectedValue: y,
              maxSelected: T,
            } = z("<SelectTrigger>"),
            N = typeof d == "string" ? d : void 0;
          let K = !1,
            Y = !1;
          H
            ? ((K = Array.isArray(y) && y.includes(d)),
              (Y = !!T && Array.isArray(y) && y.length >= T))
            : (K = d === y);
          const $ = m || (Y && !K);
          return (0, t.jsxs)(s.k.Item, {
            label: N,
            onSelect: () => M(d),
            selected: K,
            disabled: $,
            ...A,
            children: [
              H &&
                (0, t.jsxs)(S.s, {
                  gap: "2",
                  align: "center",
                  children: [
                    (0, t.jsx)(I.S, { checked: K, variant: "dark" }),
                    u,
                  ],
                }),
              !H && u,
            ],
          });
        }
        function O(r) {
          const { children: d, render: u } = r,
            {
              bOpen: m,
              setOpen: A,
              selectedValue: M,
              variant: H,
              size: y,
              radius: T,
              status: N,
              rgOptions: K,
              multiselect: Y,
              onClear: $,
              focusedValue: de,
              onFocusChange: P,
              onSelectionChange: x,
              clearable: L,
              focusedIndex: te,
              onItemSelectionChange: X,
              onFocusedIndexChange: J,
              refPopover: ne,
              placeholder: w,
              maxSelected: Z,
              ...ie
            } = z("<SelectTrigger>"),
            re = {
              tabIndex: 0,
              role: "combobox",
              onClick: () => A(!m),
              children: d,
            },
            se = Y ? Array.isArray(M) && M.length > 0 : !!M,
            q =
              se && L
                ? (0, t.jsx)(D.g, {
                    onClick: $,
                    cursor: "pointer",
                    hitSlop: !0,
                  })
                : (0, t.jsx)(p.V, {}),
            le = (0, o.f)("Select", H),
            oe = (0, t.jsx)(l.j, {
              afterContent: q,
              variant: le,
              size: y,
              radius: T,
              status: N,
              hasValue: se,
              tabIndex: 0,
              cursor: "pointer",
              ...ie,
            }),
            ee = (0, v.Q)(u, oe, re, void 0);
          return (0, t.jsx)(s.k.Anchor, { children: ee });
        }
        function V(r) {
          return (0, t.jsx)(g.EY, {
            weight: "medium",
            truncate: !0,
            contrast: "title",
            children: r.children,
          });
        }
        function W(r) {
          return (0, t.jsx)(g.EY, {
            contrast: "description",
            truncate: !0,
            children: r.children,
          });
        }
        function U(r) {
          return b(r, !1);
        }
        function b(r, d) {
          const { onSelectionChange: u, selectedValue: m, ...A } = r,
            [M, H] = (0, n.useState)(!1),
            y = (0, n.useCallback)(
              (K) => {
                u(K), d || H(!1);
              },
              [u, d],
            ),
            T = (0, n.useCallback)(
              (K) => {
                y(d ? [] : null), K.stopPropagation(), K.preventDefault();
              },
              [y, d],
            ),
            N = (0, n.useCallback)(
              (K) => {
                if (!d) y(K);
                else {
                  const Y = m,
                    $ = Y.indexOf(K);
                  if ($ === -1) y(Y.concat(K));
                  else return y(Y.slice(0, $).concat(Y.slice($ + 1)));
                }
              },
              [y, m, d],
            );
          return {
            onSelectionChange: y,
            onItemSelectionChange: N,
            onClear: T,
            bOpen: M,
            setOpen: H,
            multiselect: d,
            selectedValue: m,
            ...A,
          };
        }
        const k = {
          Root: _,
          Option: E,
          Options: j,
          Trigger: O,
          Value: V,
          Placeholder: W,
        };
        function B(r) {
          return typeof r == "string"
            ? r
            : typeof r == "number"
              ? r.toString()
              : (console.error(
                  "Could not use default option labeler on Select option value. Custom labeler requried",
                  r,
                ),
                "");
        }
        function Q(r) {
          const {
              selectedValue: d,
              onSelectionChange: u,
              options: m,
              placeholder: A,
              getOptionLabel: M = B,
              ...H
            } = r,
            y = U({
              onSelectionChange: u,
              selectedValue: d,
              rgOptions: m,
              placeholder: A,
            }),
            T = d != null,
            N = T ? M(d) : "";
          return (0, t.jsxs)(G.Root, {
            state: y,
            ...H,
            children: [
              (0, t.jsxs)(G.Trigger, {
                children: [
                  T && (0, t.jsx)(G.Value, { children: N }),
                  !T && (0, t.jsx)(G.Placeholder, { children: A }),
                ],
              }),
              (0, t.jsx)(G.Options, {
                children: y.rgOptions.map((K, Y) =>
                  (0, t.jsx)(G.Option, { value: K, children: M(K) }, Y),
                ),
              }),
            ],
          });
        }
        const G = Object.assign(Q, k);
        function i(r) {
          return b(r, !0);
        }
        const f = k;
        function a(r) {
          const {
              selectedValue: d,
              onSelectionChange: u,
              options: m,
              placeholder: A,
              getOptionLabel: M = B,
              maxSelected: H,
              ...y
            } = r,
            T = i({
              onSelectionChange: u,
              selectedValue: d,
              rgOptions: m,
              placeholder: A,
              maxSelected: H,
            }),
            N = Array.isArray(d) && d.length > 0;
          let K = "";
          if (N) {
            const Y = d.map(($) => M($));
            "ListFormat" in Intl
              ? (K = new Intl.ListFormat((0, F.ZO)().strISOCode).format(Y))
              : (K = Y.join(", "));
          }
          return (0, t.jsxs)(h.Root, {
            state: T,
            ...y,
            children: [
              (0, t.jsxs)(h.Trigger, {
                children: [
                  N && (0, t.jsx)(h.Value, { children: K }),
                  !N && (0, t.jsx)(h.Placeholder, { children: A }),
                ],
              }),
              (0, t.jsx)(h.Options, {
                children: T.rgOptions.map((Y, $) =>
                  (0, t.jsx)(h.Option, { value: Y, children: M(Y) }, $),
                ),
              }),
            ],
          });
        }
        const h = Object.assign(a, f),
          c = (0, n.createContext)(null);
        function z(r) {
          const d = (0, n.useContext)(c);
          return d || console.error(`${r} must be used within a <Select>!`), d;
        }
      },
      7125: (R, C, e) => {
        "use strict";
        e.d(C, { k: () => j });
        var t = e(7850),
          n = e(90626),
          s = e(64238),
          l = e.n(s),
          p = e(3877),
          g = e(98929),
          D = e(60351),
          v = e(86946),
          F = e(63029),
          I = e(18938),
          S = e(24660),
          o = e(80549),
          _ = e(3166);
        function j(E) {
          const { extracted: O, remaining: V } = (0, D.A4)(E),
            {
              value: W,
              onTextChange: U,
              onTextClear: b,
              clearable: k,
              onChange: B,
              radius: Q,
              variant: G,
              size: i,
              beforeContent: f,
              afterContent: a,
              inputRef: h,
              ref: c,
              disabled: z,
              gamepadFocusable: r = !0,
              status: d,
              ...u
            } = V,
            m = (0, _.Qn)(),
            A = ($) => {
              z || (U($.target.value), B && B($));
            },
            M = () => {
              U(""), b && b();
            },
            H =
              W && k
                ? (0, t.jsx)(F.g, {
                    onClick: M,
                    cursor: "pointer",
                    hitSlop: !0,
                  })
                : a,
            y = (0, o.f)("TextInput", G),
            T = {
              ...O,
              variant: y,
              size: i,
              radius: Q,
              status: d,
              beforeContent: f,
              afterContent: H,
              ref: c,
              disabled: z,
            },
            N = (0, n.useRef)(null),
            K = ($) => {
              N.current && $.target !== N.current && N.current.focus();
            },
            Y = r && m ? S.BA : "input";
          return (0, t.jsx)(v.j, {
            cursor: "text",
            ...T,
            onClick: K,
            children: (0, t.jsx)(Y, {
              ref: (0, I.Ue)(h, N),
              type: "text",
              "aria-disabled": z,
              readOnly: z,
              className: l()((0, p.T)(), (0, g.F)()),
              value: W || "",
              onChange: A,
              ...u,
            }),
          });
        }
      },
      31857: (R, C, e) => {
        "use strict";
        e.d(C, { I: () => g });
        var t = e(7850),
          n = e(69289),
          s = e(8928),
          l = e(16619),
          p = e.n(l);
        function g(v) {
          const { viewBoxSize: F = 20, ...I } = v,
            S = I.size ? void 0 : l.IconSizeDefault;
          return (0, t.jsx)("svg", {
            viewBox: `0 0 ${F} ${F}`,
            ...(0, n.mz)({ className: S, ...I }, D),
          });
        }
        const D = [
          ...s.L,
          {
            prop: "size",
            responsive: !0,
            className: (v) => l[`IconSize-${v}`],
          },
          {
            prop: "color",
            className: l.Color,
            cssProperty: (v) => ["--icon-color", (0, n.w7)(v)],
          },
          {
            prop: "hitSlop",
            className: l.HitSlop,
            cssProperty: (v) => [
              "--hit-slop-custom",
              typeof v == "string" ? v : "",
            ],
          },
          s.h.find(({ prop: v }) => v === "cursor"),
        ];
      },
      30241: (R, C, e) => {
        "use strict";
        e.d(C, { i: () => s });
        var t = e(7850),
          n = e(31857);
        function s(l) {
          return (0, t.jsx)(n.I, {
            ...l,
            viewBoxSize: 16,
            children: (0, t.jsx)("path", {
              d: "M13.8182 1.94629L5.77816 9.98184L2.40483 6.61296L0.835938 8.18184L5.77816 13.1285L15.387 3.51518L13.8182 1.94629Z",
              fill: "currentColor",
            }),
          });
        }
      },
      12204: (R, C, e) => {
        "use strict";
        e.d(C, { V: () => l });
        var t = e(7850),
          n = e(31857);
        const s = {
          up: "rotate( 180, 10, 10 )",
          left: "rotate( 90, 10, 10 )",
          right: "rotate( 270, 10, 10 )",
        };
        function l(p) {
          const { direction: g = "down" } = p,
            D = s[g];
          return (0, t.jsx)(n.I, {
            ...p,
            children: (0, t.jsx)("path", {
              transform: D,
              d: "M5.14541 6.89977L10.0063 12.2027L14.8671 6.89977C15.3557 6.36674 16.145 6.36674 16.6336 6.89977C17.1221 7.4328 17.1221 8.29385 16.6336 8.82688L10.8832 15.1002C10.3946 15.6333 9.60537 15.6333 9.11678 15.1002L3.36644 8.82688C2.87785 8.29385 2.87785 7.4328 3.36644 6.89977C3.85503 6.38041 4.65682 6.36674 5.14541 6.89977Z",
              fill: "currentColor",
            }),
          });
        }
      },
      63029: (R, C, e) => {
        "use strict";
        e.d(C, { g: () => s });
        var t = e(7850),
          n = e(31857);
        function s(l) {
          return (0, t.jsx)(n.I, {
            ...l,
            viewBoxSize: 12,
            children: (0, t.jsx)("path", {
              d: "M10.7068 2.46964L9.53012 1.29297L6.00012 4.81964L2.47012 1.29297L1.29346 2.46964L4.82012 5.99964L1.29346 9.52964L2.47012 10.7063L6.00012 7.17964L9.53012 10.7063L10.7068 9.52964L7.18012 5.99964L10.7068 2.46964Z",
              fill: "currentColor",
            }),
          });
        }
      },
      76854: (R, C, e) => {
        "use strict";
        e.d(C, { Q: () => s });
        var t = e(90626);
        function n(l, p, g) {
          return typeof l == "function" ? l(p, g) : t.cloneElement(l, p);
        }
        function s(l, p, g, D) {
          return n(l || p, g, D);
        }
      },
      34771: (R, C, e) => {
        "use strict";
        e.d(C, { D: () => _ });
        var t = e(7850),
          n = e(39049),
          s = e(8928),
          l = e(15252),
          p = e(69289),
          g = e(90626);
        function D(O) {
          const { depth: V } = useContext(v);
          return jsx(v.Provider, {
            value: { depth: V + 1 },
            children: jsx(Box, { ...O }),
          });
        }
        const v = g.createContext({ depth: 0 });
        function F() {
          return (0, g.useContext)(v).depth;
        }
        var I = e(3877),
          S = e(64238),
          o = e.n(S);
        function _(O) {
          const { level: V = "auto", className: W, color: U } = O,
            b = F(),
            k = E(V, b);
          return (0, t.jsx)(k, {
            ...(0, p.mz)({ ...O, className: o()((0, I.T)(), n.Heading, W) }, j),
          });
        }
        const j = [
          ...l.U6,
          ...s.L,
          {
            prop: "size",
            responsive: !0,
            className: (O) => n[`HeadingSize-${O}`],
          },
        ];
        function E(O, V) {
          if (O === "auto" && V === 0) return "h1";
          const W = O === "auto" ? V.toString() : O;
          return /^[1-6]$/.test(W)
            ? "h" + W
            : O === "auto"
              ? (console.error(
                  '<Section> nesting has exceeded "h6" for headings.',
                ),
                "h6")
              : (console.error(
                  `Attempt to render invalid heading level, "${W}".`,
                ),
                "h1");
        }
      },
      15252: (R, C, e) => {
        "use strict";
        e.d(C, { Ae: () => S, EY: () => F, U6: () => I });
        var t = e(7850),
          n = e(1039),
          s = e(69289),
          l = e(8928),
          p = e(64238),
          g = e.n(p),
          D = e(65274),
          v = e.n(D);
        function F(o) {
          const { as: _ = "span", ref: j, className: E, ...O } = o,
            V = _;
          return (0, t.jsx)(V, {
            ref: j,
            ...(0, s.mz)({ ...O, className: g()(D.Text, E) }, S),
          });
        }
        const I = [
            {
              prop: "weight",
              responsive: !0,
              className: D.TextWeight,
              cssProperty: (o) => ["--text-weight", `var(--font-weight-${o})`],
            },
            {
              prop: "align",
              responsive: !0,
              className: D.TextAlign,
              cssProperty: "--text-align",
            },
            {
              prop: "color",
              responsive: !0,
              cssProperty: (o, _, j) => {
                var E;
                return [
                  "--text-color",
                  (0, s.To)(
                    o,
                    (E = (0, n.I)(_.contrast, j)) != null ? E : "body",
                  ),
                ];
              },
            },
            {
              prop: "contrast",
              responsive: !0,
              cssProperty: (o, _, j) => {
                var E;
                return [
                  "--text-color",
                  (0, s.To)(
                    (E = (0, n.I)(_.color, j)) != null ? E : "text-body",
                    o,
                  ),
                ];
              },
            },
            { prop: "truncate", className: D.Truncate },
            {
              prop: "lineClamp",
              responsive: !0,
              className: D.LineClamp,
              cssProperty: "--line-clamp",
            },
            {
              prop: "whiteSpace",
              className: D.WhiteSpace,
              cssProperty: "--white-space",
            },
          ],
          S = [
            ...I,
            ...l.L,
            {
              prop: "size",
              responsive: !0,
              className: (o) => D[`TextSize-${o}`],
            },
          ];
      },
      86336: (R, C, e) => {
        "use strict";
        e.d(C, { W: () => S, Y: () => F });
        var t = e(7850),
          n = e(50122),
          s = e.n(n),
          l = e(15252),
          p = e(69289),
          g = e(24660),
          D = e(70182),
          v = e(3166);
        function F(o) {
          var _;
          const { underline: j = "auto", focusable: E, navProps: O, ...V } = o,
            W = (0, v.Qn)(),
            U =
              (_ = E != null ? E : O == null ? void 0 : O.focusable) != null
                ? _
                : !!V.href,
            b = (0, p.mz)({ ...V, underline: j, className: n.TextLink }, I);
          return W && (U || O)
            ? (0, t.jsx)(g.Ii, { ...b, ...(O || {}), focusable: U })
            : (0, t.jsx)("a", { ...b });
        }
        const I = [
          ...l.Ae,
          { prop: "underline", className: (o) => n[`Underline-${o}`] },
        ];
        function S(o) {
          var _;
          const { underline: j = "auto", focusable: E, navProps: O, ...V } = o,
            W = (0, v.Qn)(),
            U =
              (_ = E != null ? E : O == null ? void 0 : O.focusable) != null
                ? _
                : !!V.onClick,
            b = (0, t.jsx)("span", {
              role: "button",
              ...(0, p.mz)(
                { ...V, underline: j, className: n.TextLinkButton },
                I,
              ),
            });
          return W && (U || O)
            ? (0, t.jsx)(D.J, { ...(O || {}), focusable: U, children: b })
            : b;
        }
      },
      51596: (R, C, e) => {
        "use strict";
        e.d(C, { P: () => t });
        function t(n, s) {
          return s === void 0 ? n[""] : n[s];
        }
      },
      52574: (R, C, e) => {
        "use strict";
        e.d(C, { L: () => s });
        var t = e(7850),
          n = e(51596);
        const s = {
          b: { Constructor: l },
          i: { Constructor: p },
          u: { Constructor: g },
          c: { Constructor: D },
          strike: { Constructor: v },
          color: { Constructor: F },
        };
        function l(I) {
          return (0, t.jsx)("b", { children: I.children });
        }
        function p(I) {
          return (0, t.jsx)("i", { children: I.children });
        }
        function g(I) {
          return (0, t.jsx)("u", { children: I.children });
        }
        function D(I) {
          return (0, t.jsx)("code", { children: I.children });
        }
        function v(I) {
          return (0, t.jsx)("s", { children: I.children });
        }
        function F(I) {
          const S = (0, n.P)(I.args),
            o = {};
          return (
            S &&
              (S.match(/^#[a-fA-F0-9]+$/) || S.match(/rgba?\([0-9, ]+\)$/)) &&
              (o.color = S),
            (0, t.jsx)("span", { style: o, children: I.children })
          );
        }
      },
      91937: (R, C, e) => {
        "use strict";
        e.d(C, { F: () => l });
        var t = e(7850),
          n = e(17763),
          s = e.n(n);
        const l = {
          h1: { Constructor: p, skipFollowingNewline: !0 },
          h2: { Constructor: g, skipFollowingNewline: !0 },
          h3: { Constructor: D, skipFollowingNewline: !0 },
          code: { Constructor: v, skipFollowingNewline: !0 },
          quote: {
            Constructor: F,
            skipFollowingNewline: !0,
            skipInternalNewline: !0,
          },
          hr: { Constructor: S, skipFollowingNewline: !0 },
        };
        function p(o) {
          return (0, t.jsx)("h1", { children: o.children });
        }
        function g(o) {
          return (0, t.jsx)("h2", { children: o.children });
        }
        function D(o) {
          return (0, t.jsx)("h3", { children: o.children });
        }
        function v(o) {
          return (0, t.jsx)("pre", {
            className: s().CodeBlock,
            children: (0, t.jsx)("code", { children: o.children }),
          });
        }
        function F(o) {
          return (0, t.jsx)("blockquote", { children: o.children });
        }
        function I(o) {
          return jsxs(Fragment, {
            children: [
              jsx("div", { className: styles.ClearFloat }),
              o.children,
            ],
          });
        }
        function S(o) {
          return (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)("hr", {}), o.children],
          });
        }
      },
      59443: (R, C, e) => {
        "use strict";
        e.d(C, { _r: () => I, e9: () => S, rh: () => F });
        var t = e(7850),
          n = e(90626),
          s = e(43434),
          l = e(86336),
          p = e(51596),
          g = e(39414);
        function D(o) {
          const _ = n.Children.toArray(o)[0];
          return typeof _ == "string" ? _ : void 0;
        }
        function v(o, _) {
          if (!o) return;
          const j = o.startsWith("steamcommunity.com/") ? "https://" + o : o;
          if (j.match(/^https?:\/\//))
            return {
              strURL: j,
              bFromBody: !1,
              bHasCustomText: !(_ != null && _.match(/^https?:\/\//i)),
            };
        }
        function F(o) {
          var _;
          const j =
            (_ = (0, p.P)(o.args)) != null ? _ : (0, p.P)(o.args, "href");
          if (j) return v(j, D(o.children));
          if (typeof o.children == "string") {
            const E = o.children.trim(),
              O = g.O.exec(E);
            if ((O == null ? void 0 : O[0]) == E)
              return { strURL: E, bFromBody: !0, bHasCustomText: !1 };
          }
        }
        function I(o) {
          const _ = F(o);
          if (!_) return o.children;
          if (_.bFromBody) return (0, t.jsx)(S, { strURL: _.strURL });
          const j = (0, s.p)(_.strURL) ? (0, s.E)(_.strURL) : _.strURL;
          return (0, t.jsx)(l.Y, {
            target: "_blank",
            href: j,
            underline: "auto",
            contrast: "title",
            children: o.children,
          });
        }
        function S(o) {
          const _ = o.strURL.match(/^[a-z][a-z0-9+.-]*:/i)
              ? o.strURL
              : "http://" + o.strURL,
            j = (0, s.p)(_) ? (0, s.E)(_) : _;
          return (0, t.jsx)(l.Y, {
            target: "_blank",
            href: j,
            underline: "auto",
            contrast: "title",
            children: o.strURL,
          });
        }
      },
      49144: (R, C, e) => {
        "use strict";
        e.d(C, { I: () => n });
        var t = e(7850);
        const n = {
          list: {
            Constructor: s,
            skipInternalNewline: !0,
            skipFollowingNewline: !0,
          },
          olist: {
            Constructor: l,
            skipInternalNewline: !0,
            skipFollowingNewline: !0,
          },
          "*": { Constructor: p, autocloses: !0 },
        };
        function s(g) {
          return (0, t.jsx)("ul", { children: g.children });
        }
        function l(g) {
          return (0, t.jsx)("ol", { children: g.children });
        }
        function p(g) {
          return (0, t.jsx)("li", { children: g.children });
        }
      },
      39790: (R, C, e) => {
        "use strict";
        e.d(C, { ZO: () => n });
        var t = e(31275);
        function n() {
          return (0, t.A)().languages[0];
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
      82277: (R) => {
        R.exports = {
          FilterBorder: "_3xFYpKNlOZ6xjQ529ZgRbr",
          Top: "_310cGk80jWCZr6LxeueX_5",
          Bottom: "nLYMJhpffeKLN_8VkTcD_",
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
      24089: (R) => {
        R.exports = { TextEntry: "_1vE-LsK6l_D_5yjbywZV1p" };
      },
      53011: (R) => {
        R.exports = {
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
      39049: (R) => {
        R.exports = {
          Heading: "_12ldq1_X5RuLWAAs_ODwt7",
          "HeadingSize-1": "-YHuRmP6nUp0IqPQ4F3wk",
          "HeadingSize-2": "_20m6yPkrPwQ8XwlhPdMtqu",
          "HeadingSize-3": "_2jvih9p3Mc3zUn2nnxzDv7",
          "HeadingSize-4": "_1zvMJY9dUjwMSI0j5QoEdq",
          "HeadingSize-5": "_1196Oisy8jDA4szPu-KrKP",
          "HeadingSize-6": "R1W-zMFN4WGw9JK48Yqez",
          "HeadingSize-7": "Ena8Nl7MJg7YAYsWql_jo",
          "HeadingSize-8": "jyf9-rlT4iFrHQOAVn298",
          "HeadingSize-9": "_3L0vs4_Y96AtsR3P5GUkUa",
        };
      },
      65274: (R) => {
        R.exports = {
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
      50122: (R) => {
        R.exports = {
          TextLink: "_1DLGHwAfYnbFVIwbZjO2cn",
          TextLinkButton: "_30P9kUCljAZzX5fl1DHGJe",
          Truncate: "_1FVRWG5uD8VhzoEiOZWrEo",
          "Underline-always": "_3ASRyX4FTT_eMM5S5yrkwK",
          "Underline-never": "_1gsOIvG4APXjSra-_55rdz",
          "Underline-auto": "_2OgYmw12nDHXtyT9za9yzL",
          "Underline-hover": "_3RITvcDUZq-hpnXRpiayfs",
        };
      },
      17763: (R) => {
        R.exports = {
          CodeBlock: "OkZ2olcxw9WPWea9VGVr6",
          ClearFloat: "RRZZP47ujIKbmOpZ61w_T",
        };
      },
    },
  ]);
})();
