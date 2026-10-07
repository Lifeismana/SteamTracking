/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [49769],
    {
      85367: (T, p, t) => {
        "use strict";
        t.d(p, { S: () => H });
        var e = t(7850),
          n = t(68031),
          o = t(30241),
          i = t(21895),
          O = t.n(i),
          D = t(64238),
          V = t.n(D),
          M = t(80549);
        function H(s) {
          const {
              checked: m,
              onChange: b,
              disabled: I,
              children: A,
              ref: Z,
              variant: y,
              color: _,
              align: F = "center",
              icon: G,
              ...R
            } = s,
            $ = m === "indeterminate",
            tt = G != null ? G : $ ? u : o.i,
            L = () => {
              I || (b && b($ ? !0 : !m));
            },
            C = (E) => {
              I ||
                (E.key === " " &&
                  (L(), E.preventDefault(), E.stopPropagation()));
            },
            l = (0, M.f)("Checkbox", y);
          return (0, e.jsxs)(n.s, {
            align: F,
            ref: Z,
            role: "checkbox",
            "aria-checked": $ ? "mixed" : m,
            "data-state": S(m),
            className: V()(i.Root, i[`Variant-${l}`], I && i.Disabled),
            onClick: L,
            tabIndex: 0,
            onKeyDown: C,
            cursor: "default",
            "aria-disabled": I,
            "data-accent-color": _,
            ...R,
            children: [
              (0, e.jsx)("div", {
                className: i.Checkbox,
                children: m && (0, e.jsx)(tt, { className: i.Icon }),
              }),
              A,
            ],
          });
        }
        function S(s) {
          return s === "indeterminate" ? s : s ? "checked" : "unchecked";
        }
        function u(s) {
          return (0, e.jsx)("svg", {
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, e.jsx)("path", {
              d: "M14.6663 7.11133H1.33301V9.33355H14.6663V7.11133Z",
              fill: "currentColor",
            }),
          });
        }
      },
      99631: (T, p, t) => {
        "use strict";
        t.d(p, { C: () => i, I: () => O });
        var e = t(7850),
          n = t(90626),
          o = t(7125);
        const i = Symbol("CoercingTextInputNotParseable");
        function O(D) {
          const {
              value: V,
              onValueChange: M,
              valueToString: H,
              valueFromString: S,
              checkValidText: u,
              onBlur: s,
              onKeyDown: m,
              ...b
            } = D,
            [I, A] = (0, n.useState)(null),
            Z = I != null ? I : V === void 0 ? "" : H(V),
            y = (R) => {
              const $ = S(R);
              $ !== i && R === H($) ? (A(null), M($)) : (!u || u(R, $)) && A(R);
            },
            _ = () => {
              if (I !== null) {
                const R = S(I);
                R !== i && M(R), A(null);
              }
            },
            F = (R) => {
              _(), s && s(R);
            },
            G = (R) => {
              R.key === "Enter" && _(), m && m(R);
            };
          return (0, e.jsx)(o.k, {
            value: Z,
            onTextChange: y,
            onKeyDown: G,
            onBlur: F,
            ...b,
          });
        }
      },
      74769: (T, p, t) => {
        "use strict";
        t.d(p, { Bp: () => P, EC: () => et, G3: () => K, PT: () => Q });
        var e = t(7850),
          n = t(90626),
          o = t(86946),
          i = t(12204),
          O = t(15252),
          D = t(7125),
          V = t(63029),
          M = t(185),
          H = t(92148),
          S = t(59366),
          u = t(60351),
          s = t(76854),
          m = t(68031),
          b = t(36707),
          I = t(39790),
          A = t(85367),
          Z = t(71742),
          y = t(82277),
          _ = t.n(y),
          F = t(80549),
          G = t(3166),
          R = t(58017),
          $ = t(64415);
        function tt(v) {
          const {
              children: h,
              state: x,
              placement: Y = "bottom-end",
              popoverWidth: nt = "dropdown",
              popoverMaxHeight: k,
              popoverPresentation: ct,
              popoverLabel: w,
              ...X
            } = v,
            [ht, ot] = (0, n.useState)(void 0);
          (0, n.useEffect)(() => ot(void 0), [x.bOpen]);
          const at = (0, G.Qn)(),
            q = (0, n.useRef)(null),
            ut = (0, n.useRef)(null),
            it = (0, n.useMemo)(
              () =>
                x.rgFilteredOptions.findIndex((st) => st === x.selectedValue),
              [x.selectedValue, x.rgFilteredOptions],
            ),
            ft = (0, M.T)({
              open: x.bOpen,
              onOpenChange: x.setOpen,
              width: nt,
              maxHeight: k,
              placement: Y,
              presentation: ct,
              gutter: "4",
              activeIndex: x.activeIndex,
              setActiveIndex: x.setActiveIndex,
              selectedIndex: it,
              setSelectedIndex: (st) =>
                x.onItemSelectionChange(x.rgFilteredOptions[st]),
              interactions: { click: !0, virtualItemFocus: !at },
              role: "combobox",
              scroll: !1,
            }),
            Et = {
              ...x,
              ...X,
              focusedValue: ht,
              onFocusChange: ot,
              refPopover: q,
              refScrollElement: ut,
              setOpen: (st) => {
                if (st) {
                  let dt = null;
                  x.multiselect
                    ? (dt = Array.isArray(x.selectedValue)
                        ? x.selectedValue[0]
                        : null)
                    : (dt = x.selectedValue),
                    ot(dt),
                    x.onInputChange("");
                }
                x.setOpen(st);
              },
              onIndexSelected: (st) => {
                const dt = ft.elementsRef.current;
                dt && dt[st] && dt[st].click();
              },
              popoverPlacement: ft.floating.placement,
              popoverPresentation: ft.presentation,
              popoverLabel: w,
            };
          return (0, e.jsx)(J.Provider, {
            value: Et,
            children: (0, e.jsx)(M.k.Root, { state: ft, children: h }),
          });
        }
        function L(v) {
          const {
              refPopover: h,
              inputValue: x,
              onInputChange: Y,
              activeIndex: nt,
              popoverPlacement: k,
              popoverPresentation: ct,
              popoverLabel: w,
              multiselect: X,
              setActiveIndex: ht,
              setOpen: ot,
              filterPlaceholder: at,
              onIndexSelected: q,
              refScrollElement: ut,
            } = xt("<Combobox.Options>"),
            it = (lt) => {
              lt && lt.focus({ preventScroll: !0 });
            },
            ft = (lt) => {
              lt.key === "Enter" &&
                nt !== null &&
                (q(nt),
                X || (ht(null), ot(!1)),
                lt.preventDefault(),
                lt.stopPropagation());
            },
            Et = ct === "anchor" && k.startsWith("top"),
            st = (0, e.jsx)(u.az, {
              overflow: "auto",
              ref: ut,
              style: { overscrollBehavior: "contain" },
              children: v.children,
            }),
            dt = (lt) => {
              (lt.key === "Home" || lt.key === "End") && lt.stopPropagation();
            };
          return (0, e.jsx)(M.k.Positioner, {
            ref: h,
            label: w,
            children: (0, e.jsxs)(m.s, {
              direction: "column",
              maxHeight: "var(--popover-max-height)",
              children: [
                Et && st,
                (0, e.jsx)(u.az, {
                  flexShrink: "0",
                  className: (0, b.A)(y.FilterBorder, Et ? y.Top : y.Bottom),
                  children: (0, e.jsx)(D.k, {
                    margin: "3",
                    variant: "inset",
                    radius: "sm",
                    value: x,
                    onTextChange: Y,
                    onKeyDown: ft,
                    onKeyDownCapture: dt,
                    placeholder: at,
                    inputRef: it,
                    autoComplete: "off",
                  }),
                }),
                !Et && st,
              ],
            }),
          });
        }
        const C = (0, n.createContext)(null);
        function l(v) {
          const { items: h, renderItem: x, overscan: Y = 5, ...nt } = v,
            {
              bOpen: k,
              refPopover: ct,
              refScrollElement: w,
            } = xt("<ComboboxVirtualizedOptions>"),
            [X, ht] = (0, n.useState)(!1),
            ot = k && !!ct.current && !!w.current;
          (0, n.useEffect)(() => {
            ot !== X && ht(ot);
          }, [ot, X]);
          const at = (0, H.Te)({
            count: X ? h.length : Math.min(h.length, 3),
            getScrollElement: () => w.current,
            enabled: k,
            measureElement: S.ZO,
            ...nt,
          });
          return (0, e.jsx)(L, {
            children: (0, e.jsx)(C, {
              value: at,
              children: (0, e.jsx)(u.az, {
                height: `${at.getTotalSize()}px`,
                position: "relative",
                width: "100%",
                children: at.getVirtualItems().map((q) => x(h[q.index], q, at)),
              }),
            }),
          });
        }
        function E(v) {
          const { virtualItem: h, children: x } = v,
            Y = (0, n.useContext)(C);
          return (
            (0, Z.wT)(Y, "Virtual item rendered outside of a virtualizer!"),
            (0, e.jsx)(u.az, {
              position: "absolute",
              width: "100%",
              style: { top: 0, left: 0, transform: `translateY(${h.start}px)` },
              ref: Y.measureElement,
              "data-index": h.index,
              children: x,
            })
          );
        }
        function d(v) {
          const { virtualItem: h, ...x } = v;
          return (0, e.jsx)(E, {
            virtualItem: h,
            children: (0, e.jsx)(g, { ...x }),
          });
        }
        function f(v) {
          const { virtualItem: h, children: x } = v;
          return (0, e.jsx)(E, { virtualItem: h, children: x });
        }
        function g(v) {
          const { value: h, children: x, disabled: Y } = v,
            {
              onItemSelectionChange: nt,
              selectedValue: k,
              multiselect: ct,
              maxSelected: w,
            } = xt("<ComboboxTrigger>");
          let X = !1,
            ht = !1;
          ct
            ? ((X = Array.isArray(k) && k.includes(h)),
              (ht = !!w && Array.isArray(k) && k.length >= w))
            : (X = h === k);
          const ot = Y || (ht && !X);
          return (0, e.jsxs)(M.k.Item, {
            onSelect: () => nt(h),
            selected: X,
            disabled: ot,
            children: [
              ct &&
                (0, e.jsxs)(m.s, {
                  gap: "2",
                  align: "center",
                  children: [
                    (0, e.jsx)(A.S, { checked: X, variant: "dark" }),
                    x,
                  ],
                }),
              !ct && x,
            ],
          });
        }
        function U(v) {
          const { children: h, beforeContent: x, render: Y } = v,
            {
              bOpen: nt,
              setOpen: k,
              inputValue: ct,
              onInputChange: w,
              selectedValue: X,
              focusedValue: ht,
              refScrollElement: ot,
              onItemSelectionChange: at,
              activeIndex: q,
              setActiveIndex: ut,
              onFocusChange: it,
              rgFilteredOptions: ft,
              onSelectionChange: Et,
              multiselect: st,
              onClear: dt,
              refPopover: lt,
              clearable: gt,
              filterPlaceholder: vt,
              onIndexSelected: rt,
              popoverPlacement: mt,
              popoverPresentation: Pt,
              popoverLabel: At,
              maxSelected: Bt,
              variant: pt,
              ...Dt
            } = xt("<ComboboxTrigger>"),
            It = { tabIndex: 0, children: h },
            Ct = st ? Array.isArray(X) && X.length > 0 : !!X,
            Ot = Ct && gt,
            Mt = Ot
              ? (0, e.jsx)(V.g, { onClick: dt, cursor: "pointer", hitSlop: !0 })
              : (0, e.jsx)(i.V, {}),
            Lt = Ot
              ? {
                  onSecondaryButton: dt,
                  actionDescriptionMap: {
                    [$.pR.SECONDARY]: R.T.Localize("#Clear"),
                  },
                }
              : void 0,
            Rt = (0, F.f)("Combobox", pt),
            jt = (0, e.jsx)(o.j, {
              beforeContent: x,
              afterContent: Mt,
              hasValue: Ct,
              cursor: "pointer",
              tabIndex: 0,
              variant: Rt,
              navProps: Lt,
              ...Dt,
            }),
            Tt = (0, s.Q)(Y, jt, It, void 0);
          return (0, e.jsx)(M.k.Anchor, { children: Tt });
        }
        function r(v) {
          return (0, e.jsx)(O.EY, {
            weight: "medium",
            truncate: !0,
            contrast: "title",
            ...v,
          });
        }
        function a(v) {
          return (0, e.jsx)(O.EY, {
            contrast: "description",
            truncate: !0,
            ...v,
          });
        }
        function c(v, h) {
          if (typeof h == "string")
            return h.toLocaleLowerCase().includes(v.toLocaleLowerCase());
          try {
            return JSON.stringify(h)
              .toLocaleLowerCase()
              .includes(v.toLocaleLowerCase());
          } catch {}
          return (
            console.error(
              "Could not use default option filter on provided Comboxbox option. Custom filter function required.",
            ),
            !1
          );
        }
        function P(v) {
          return N(v, !1);
        }
        function N(v, h) {
          const {
              rgOptions: x,
              filter: Y = c,
              filterPlaceholder: nt,
              selectedValue: k,
              onSelectionChange: ct,
              maxSelected: w,
            } = v,
            [X, ht] = (0, n.useState)(""),
            [ot, at] = (0, n.useState)(!1),
            [q, ut] = (0, n.useState)(null),
            it = (0, n.useMemo)(() => x.filter((rt) => Y(X, rt)), [X, x, Y]),
            ft = typeof q == "number",
            Et = it.length > 0,
            st = (0, n.useCallback)(
              (rt) => {
                rt && !ft && Et && ut(0), ht(rt);
              },
              [ft, Et],
            ),
            dt = (0, n.useCallback)(
              (rt) => {
                rt || st(""), at(rt);
              },
              [st],
            ),
            lt = (0, n.useCallback)(
              (rt) => {
                ct(rt), h || dt(!1);
              },
              [h, ct, dt],
            ),
            gt = (rt) => {
              lt(h ? [] : null),
                rt == null || rt.stopPropagation(),
                rt == null || rt.preventDefault();
            },
            vt = (0, n.useCallback)(
              (rt) => {
                if (!h) lt(rt);
                else if (!k) lt([rt]);
                else {
                  const mt = k,
                    Pt = mt.indexOf(rt);
                  if (Pt === -1) lt(mt.concat(rt));
                  else return lt(mt.slice(0, Pt).concat(mt.slice(Pt + 1)));
                }
              },
              [lt, k, h],
            );
          return {
            activeIndex: q,
            setActiveIndex: ut,
            rgFilteredOptions: it,
            selectedValue: k,
            onSelectionChange: lt,
            onItemSelectionChange: vt,
            onClear: gt,
            inputValue: X,
            onInputChange: st,
            bOpen: ot,
            setOpen: dt,
            filterPlaceholder: nt,
            multiselect: h,
            maxSelected: w,
          };
        }
        const W = {
          Root: tt,
          Option: g,
          Options: L,
          VirtualizedOptions: l,
          VirtualizedOption: d,
          VirtualizedContent: f,
          Trigger: U,
          DefaultOptionFilter: c,
          Value: r,
          Placeholder: a,
        };
        function j(v) {
          return v
            ? typeof v == "string"
              ? v
              : typeof v == "number"
                ? v.toString()
                : (console.error(
                    "Could not use default option labeler on Combobox option value. Custom labeler requried",
                    v,
                  ),
                  "")
            : "";
        }
        function z(v) {
          const {
              selectedValue: h,
              onSelectionChange: x,
              options: Y,
              filter: nt,
              filterPlaceholder: k,
              placeholder: ct,
              getOptionLabel: w = j,
              ...X
            } = v,
            ht = (0, n.useCallback)(
              (q, ut) => (nt ? nt(q, ut) : c(q, w(ut))),
              [nt, w],
            ),
            ot = P({
              onSelectionChange: x,
              selectedValue: h,
              rgOptions: Y,
              filter: ht,
              filterPlaceholder: k,
            }),
            at = h != null;
          return (0, e.jsxs)(K.Root, {
            state: ot,
            ...X,
            children: [
              (0, e.jsxs)(K.Trigger, {
                children: [
                  at && (0, e.jsx)(K.Value, { children: w(h) }),
                  !at && (0, e.jsx)(K.Placeholder, { children: ct }),
                ],
              }),
              (0, e.jsx)(K.Options, {
                children: ot.rgFilteredOptions.map((q) =>
                  (0, e.jsx)(g, { value: q, children: w(q) }, w(q)),
                ),
              }),
            ],
          });
        }
        const K = Object.assign(z, W);
        function et(v) {
          return N(v, !0);
        }
        function B(v) {
          const {
              selectedValue: h,
              onSelectionChange: x,
              options: Y,
              filter: nt,
              filterPlaceholder: k,
              placeholder: ct,
              getOptionLabel: w = j,
              maxSelected: X,
              ...ht
            } = v,
            ot = (0, n.useCallback)(
              (it, ft) => (nt ? nt(it, ft) : c(it, w(ft))),
              [nt, w],
            ),
            at = et({
              onSelectionChange: x,
              selectedValue: h,
              rgOptions: Y,
              filter: ot,
              filterPlaceholder: k,
              maxSelected: X,
            }),
            q = Array.isArray(h) && h.length > 0;
          let ut = "";
          if (q) {
            const it = h.map((ft) => w(ft));
            "ListFormat" in Intl
              ? (ut = new Intl.ListFormat((0, I.ZO)().strISOCode).format(it))
              : (ut = it.join(", "));
          }
          return (0, e.jsxs)(K.Root, {
            state: at,
            ...ht,
            children: [
              (0, e.jsxs)(K.Trigger, {
                children: [
                  q && (0, e.jsx)(K.Value, { children: ut }),
                  !q && (0, e.jsx)(K.Placeholder, { children: ct }),
                ],
              }),
              (0, e.jsx)(K.Options, {
                children: at.rgFilteredOptions.map((it) =>
                  (0, e.jsx)(K.Option, { value: it, children: w(it) }, w(it)),
                ),
              }),
            ],
          });
        }
        const Q = Object.assign(B, W),
          J = (0, n.createContext)(null);
        function xt(v) {
          const h = (0, n.useContext)(J);
          return (
            h || console.error(`${v} must be used within a <Combobox>!`), h
          );
        }
      },
      86946: (T, p, t) => {
        "use strict";
        t.d(p, { j: () => S, w: () => u });
        var e = t(7850),
          n = t(64238),
          o = t.n(n),
          i = t(38878),
          O = t.n(i),
          D = t(60351),
          V = t(68031),
          M = t(8928),
          H = t(69289);
        function S(s) {
          const {
              children: m,
              beforeContent: b,
              afterContent: I,
              hasValue: A,
              ...Z
            } = s,
            y = u(Z);
          return (0, e.jsxs)(V.s, {
            ...y,
            align: "center",
            "data-has-value": !!A,
            minWidth: "0",
            children: [
              b && (0, e.jsx)(V.s, { paddingRight: "2", children: b }),
              (0, e.jsx)(D.az, { flexGrow: "1", minWidth: "0", children: m }),
              I && (0, e.jsx)(V.s, { paddingLeft: "2", children: I }),
            ],
          });
        }
        function u(s) {
          const {
              variant: m = "basic",
              size: b = "2",
              radius: I,
              focusable: A = !0,
              hoverable: Z = !0,
              clickable: y = !0,
              disabled: _,
              className: F,
              status: G,
              ...R
            } = s,
            $ = m === "underline" ? "none" : I;
          return (0, H.mz)(
            {
              ...R,
              radius: $,
              "data-status": G,
              className: o()(
                i.ControlBox,
                A && !_ && i.Focusable,
                Z && !_ && i.Hoverable,
                y && !_ && i.Clickable,
                _ && i.Disabled,
                i[`Variant-${m}`],
                i[`Size-${b}`],
                F,
              ),
            },
            M.h,
          );
        }
      },
      98929: (T, p, t) => {
        "use strict";
        t.d(p, { F: () => o });
        var e = t(24089),
          n = t.n(e);
        function o() {
          return e.TextEntry;
        }
      },
      84909: (T, p, t) => {
        "use strict";
        t.d(p, { AM: () => C, Pr: () => tt });
        var e = t(7850),
          n = t(90626),
          o = t(73788),
          i = t(8083),
          O = t(94621),
          D = t(18938),
          V = t(24660),
          M = t(38566),
          H = t(54130),
          S = t(71742),
          u = t(64238),
          s = t.n(u),
          m = t(3877),
          b = t(3166),
          I = t(28020);
        const A = (0, n.createContext)(null);
        function Z(l) {
          const { children: E, ...d } = l,
            f = $(d);
          return (0, e.jsx)(A.Provider, { value: f, children: E });
        }
        function y(l) {
          const { children: E } = l,
            d = n.Children.only(E),
            f = (0, n.useContext)(A);
          return d
            ? f
              ? (0, n.cloneElement)(d, {
                  ...f.getReferenceProps(d.props),
                  ref: (0, D.XB)(d.props.ref, f.floating.refs.setReference),
                })
              : (console.error(
                  "<PopoverAnchor> must be a child of <PopoverRoot>.",
                ),
                null)
            : null;
        }
        function _(l) {
          const { children: E, className: d, ref: f, label: g } = l,
            U = (0, n.useContext)(A),
            r = (0, o.SV)([
              f,
              U == null ? void 0 : U.floating.refs.setFloating,
            ]);
          if (!U)
            return (
              console.error(
                "<Popover.Positioner> must be a child of <Popover.Root>.",
              ),
              null
            );
          if (!U.open) return null;
          let a = n.Children.only(E),
            c = n.Fragment;
          return (
            a.type == C.FocusManager &&
              ((a = n.Children.only(a.props.children)), (c = F)),
            (0, e.jsx)(c, {
              children: (0, e.jsx)(I.HF, {
                presentation: U.presentation,
                sizing: U.sizing,
                floatingRef: r,
                floatingProps: U.getFloatingProps(),
                floatingStyles: U.floating.floatingStyles,
                referenceElement: U.floating.elements.domReference,
                className: s()((0, m.T)(), d),
                label: g,
                children: a,
              }),
            })
          );
        }
        function F(l) {
          return (0, b.Qn)()
            ? (0, e.jsx)(G, { ...l })
            : (0, e.jsx)(R, { ...l });
        }
        function G(l) {
          const { children: E } = l,
            d = (0, n.useContext)(A);
          (0, S.wT)(
            !!d,
            "<Popover.Positioner> must be a child of <Popover.Root>.",
          );
          const f = () => d.floating.context.onOpenChange(!1),
            g = n.useRef(void 0);
          return (
            (0, V.O7)(g, !0, !0),
            (0, e.jsx)(M.D6, {
              navID: "Popover",
              onCancelButton: f,
              modal: !0,
              navTreeRef: g,
              children: (0, e.jsx)("div", {
                style: { display: "contents" },
                children: (0, e.jsx)(H.q, { children: E }),
              }),
            })
          );
        }
        function R(l) {
          const { children: E } = l,
            d = (0, n.useContext)(A);
          return (
            (0, S.wT)(
              !!d,
              "<Popover.Positioner> must be a child of <Popover.Root>.",
            ),
            (0, e.jsx)(o.s3, {
              context: d.floating.context,
              initialFocus: -1,
              returnFocus: !1,
              children: E,
            })
          );
        }
        function $(l) {
          const {
            open: E,
            interactions: d = {},
            width: f,
            maxHeight: g,
            gutter: U,
            scroll: r,
          } = l;
          let a = E;
          const c = (0, I.Pr)(l.presentation),
            P = tt(l, a, c),
            N = { enabled: !!d.click },
            W = typeof d.click == "function" ? d.click(N) : N,
            j = (0, o.kp)(P.context, W),
            z = { enabled: !!d.focus },
            K = typeof d.focus == "function" ? d.focus(z) : z,
            et = (0, o.iQ)(P.context, K),
            B = { handleClose: (0, o.iB)() },
            Q = typeof d.hover == "function" ? d.hover(B) : B,
            J = (0, o.Mk)(P.context, { enabled: !!d.hover, ...Q }),
            xt = (0, o.s9)(P.context),
            { getFloatingProps: v, getReferenceProps: h } = (0, o.bv)([
              j,
              et,
              J,
              xt,
            ]);
          return {
            floating: P,
            getFloatingProps: v,
            getReferenceProps: h,
            open: a,
            presentation: c,
            sizing: { width: f, maxHeight: g, gutter: U, scroll: r },
          };
        }
        function tt(l, E, d) {
          const { onOpenChange: f, placement: g } = l,
            U = d === "anchor";
          return (0, o.we)({
            open: E,
            onOpenChange: f,
            middleware: U ? L(l) : [],
            whileElementsMounted: U ? i.ll : void 0,
            placement: g && typeof g == "object" ? g.initial : g,
            strategy: "fixed",
            platform: {
              ...i.iD,
              getOffsetParent: (r) => {
                var a, c;
                return (c =
                  (a = r == null ? void 0 : r.ownerDocument) == null
                    ? void 0
                    : a.defaultView) != null
                  ? c
                  : window;
              },
            },
          });
        }
        function L(l) {
          const { gutter: E = 0, placement: d } = l,
            f = [],
            g = d && typeof d == "object";
          return (
            g && d.offset
              ? f.push((0, O.cY)(d.offset))
              : (!g || d.offset === void 0) && f.push((0, O.cY)(2)),
            g && d.flip
              ? f.push((0, O.UU)(d.flip))
              : (!g || d.flip === void 0) && f.push((0, O.UU)()),
            g && d.shift
              ? f.push((0, O.BN)(d.shift))
              : (!g || d.shift === void 0) && f.push((0, O.BN)()),
            f.push(
              (0, O.Ej)({
                apply: (U) => {
                  const { rects: r, elements: a, availableHeight: c } = U,
                    P = {
                      boxSizing: "border-box",
                      zIndex: "1",
                      "-webkit-app-region": "no-drag",
                    };
                  switch ((l.scroll && (P.overflowY = "auto"), l.width)) {
                    case "target": {
                      P.width = `${r.reference.width}px`;
                      break;
                    }
                    case "content": {
                      P.width = `${r.floating.width}px`;
                      break;
                    }
                    case "dropdown": {
                      let W = r.reference.width;
                      r.floating.width > W && W < 200 && (W = r.floating.width),
                        (P.width = `${W}px`);
                    }
                  }
                  typeof l.width == "function" &&
                    (P.width = l.width({
                      unContentWidth: r.floating.width,
                      unTargetWidth: r.reference.width,
                    }));
                  const N =
                    typeof E == "number" ? `${E}px` : `var(--spacing-${E})`;
                  typeof l.maxHeight == "function"
                    ? (P.maxHeight = l.maxHeight({
                        unAvailableHeight: c,
                        gutter: N,
                      }))
                    : typeof l.maxHeight == "number"
                      ? (P.maxHeight = `min( calc( ${c}px - ${N} ), ${l.maxHeight}px )`)
                      : typeof E == "number"
                        ? (P.maxHeight = `${c - E}px`)
                        : (P.maxHeight = `calc( ${c}px - var(--spacing-${E}) )`),
                    Object.assign(a.floating.style, P),
                    a.floating.style.setProperty(
                      "--popover-max-height",
                      P.maxHeight,
                    );
                },
              }),
            ),
            f
          );
        }
        const C = { Root: Z, Anchor: y, Positioner: _, FocusManager: F };
      },
      185: (T, p, t) => {
        "use strict";
        t.d(p, { k: () => tt, T: () => $ });
        var e = t(7850),
          n = t(90626),
          o = t(73788),
          i = t(60351),
          O = t(76854),
          D = t(48093);
        function V(L) {
          const { render: C, ...l } = L;
          return (0, O.Q)(
            C,
            (0, e.jsx)(i.az, {
              radius: "sm",
              background: "dull-8",
              className: D.ListBox,
            }),
            { role: "listbox", ...l },
          );
        }
        function M(L) {
          const {
              selected: C,
              focused: l,
              label: E = null,
              render: d,
              disabled: f,
              ...g
            } = L,
            U = C ? "true" : "false",
            r = l ? "true" : void 0;
          return (0, O.Q)(
            d,
            (0, e.jsx)(i.az, {
              focusable: !0,
              "data-selected": U,
              "data-focused": r,
              "aria-disabled": f,
              className: D.ListBoxOption,
              paddingY: "2",
              paddingX: "3",
            }),
            { role: "option", ...g },
            { selected: C, focused: l, disabled: f },
          );
        }
        const H = Object.assign(V, { Option: M });
        var S = t(84909),
          u = t(28020),
          s = t(24660),
          m = t(38566),
          b = t(3166);
        const I = (0, n.createContext)(null);
        function A(L) {
          const { children: C, state: l } = L;
          return (0, e.jsx)(I.Provider, { value: l, children: C });
        }
        function Z(L) {
          const { children: C } = L,
            l = n.Children.only(C),
            E = (0, n.useContext)(I),
            d = (0, o.SV)([
              E == null ? void 0 : E.floating.refs.setReference,
              l == null ? void 0 : l.props.ref,
            ]);
          if (!l) return null;
          if (!E)
            return (
              console.error(
                "<PopoverListAnchor> must be a child of <PopoverListRoot>.",
              ),
              null
            );
          const { ref: f, ...g } = l.props;
          return (0, n.cloneElement)(l, { ref: d, ...E.getReferenceProps(g) });
        }
        function y(L) {
          const { children: C, render: l, ref: E, label: d } = L,
            f = (0, n.useContext)(I),
            g = (0, o.SV)([
              E,
              f == null ? void 0 : f.floating.refs.setFloating,
            ]);
          return f
            ? f.open
              ? (0, e.jsx)(_, {
                  state: f,
                  children: (0, e.jsx)(u.HF, {
                    presentation: f.presentation,
                    sizing: f.sizing,
                    floatingRef: g,
                    floatingProps: f.getFloatingProps(),
                    floatingStyles: f.floating.floatingStyles,
                    referenceElement: f.floating.elements.domReference,
                    label: d,
                    children: (0, e.jsx)(H, {
                      render: l,
                      children: (0, e.jsx)(o.ph, {
                        elementsRef: f.elementsRef,
                        labelsRef: f.labelsRef,
                        children: C,
                      }),
                    }),
                  }),
                })
              : null
            : (console.error(
                "<PopoverListPositioner> must be a child of <PopoverListRoot>.",
              ),
              null);
        }
        function _(L) {
          return (0, b.Qn)()
            ? (0, e.jsx)(F, { ...L })
            : (0, e.jsx)(G, { ...L });
        }
        function F(L) {
          const { state: C, children: l } = L,
            E = () => C.floating.context.onOpenChange(!1),
            d = n.useRef(void 0);
          return (
            (0, s.O7)(d, !0, !0),
            (0, e.jsx)(m.D6, {
              navID: "PopoverList",
              onCancelButton: E,
              modal: !0,
              navTreeRef: d,
              children: l,
            })
          );
        }
        function G(L) {
          const { state: C, children: l } = L;
          return (0, e.jsx)(o.s3, {
            context: C.floating.context,
            initialFocus: C.initialFocus,
            returnFocus: !1,
            children: l,
          });
        }
        function R(L) {
          const {
              children: C,
              label: l,
              selected: E,
              onSelect: d,
              ref: f,
              disabled: g,
              ...U
            } = L,
            r = (0, n.useContext)(I),
            { ref: a, index: c } = (0, o.rm)({ label: l }),
            P = (0, o.SV)([f, a]);
          if (!r)
            return (
              console.error(
                "<PopoverListItem> must be a child of <PopoverListRoot>.",
              ),
              null
            );
          const N = c === r.activeIndex,
            W = c === r.selectedIndex || !!E;
          return (0, e.jsx)(H.Option, {
            ref: P,
            selected: W,
            focused: N,
            role: "option",
            tabIndex: 0,
            ...r.getItemProps({
              onClick: g ? void 0 : d,
              onKeyDown: (j) => {
                !g &&
                  (j.key === "Enter" ||
                    (j.key === " " && !r.typingRef.current)) &&
                  (d(j), j.preventDefault(), j.stopPropagation());
              },
              active: N,
              selected: W,
              disabled: g,
              ...U,
            }),
            children: C,
          });
        }
        function $(L) {
          const {
            open: C,
            activeIndex: l,
            setActiveIndex: E,
            selectedIndex: d,
            setSelectedIndex: f,
            interactions: g = {},
            role: U,
            width: r,
            maxHeight: a,
            gutter: c,
            scroll: P,
          } = L;
          let N = C;
          const W = (0, u.Pr)(L.presentation),
            j = (0, S.Pr)(L, N, W),
            z = (0, o.kp)(j.context, { enabled: !!g.click }),
            K = (0, o.iQ)(j.context, { enabled: !!g.focus }),
            et = (0, o.s9)(j.context),
            B = (0, n.useRef)([]),
            Q = (0, o.C1)(j.context, {
              listRef: B,
              activeIndex: l,
              selectedIndex: d,
              onNavigate: E,
              virtual: !!g.virtualItemFocus,
              loop: !0,
              focusItemOnOpen: !1,
            }),
            J = (0, n.useRef)([]),
            xt = (0, n.useRef)(!1),
            v = (0, o.lY)(j.context, {
              enabled: !!g.typeahead,
              listRef: J,
              activeIndex: l,
              selectedIndex: d,
              onMatch: N ? E : f,
              onTypingChange: (k) => (xt.current = k),
            }),
            h = (0, o.It)(j.context, { role: U }),
            {
              getFloatingProps: x,
              getReferenceProps: Y,
              getItemProps: nt,
            } = (0, o.bv)([h, z, K, et, Q, v]);
          return {
            floating: j,
            getFloatingProps: x,
            getReferenceProps: Y,
            getItemProps: nt,
            open: N,
            activeIndex: l,
            selectedIndex: d,
            setSelectedIndex: f,
            elementsRef: B,
            labelsRef: J,
            typingRef: xt,
            initialFocus: g.virtualItemFocus ? -1 : void 0,
            presentation: W,
            sizing: { width: r, maxHeight: a, gutter: c, scroll: P },
          };
        }
        const tt = { Root: A, Anchor: Z, Positioner: y, Item: R };
      },
      21663: (T, p, t) => {
        "use strict";
        t.d(p, { I: () => I });
        var e = t(7850),
          n = t(90626),
          o = t(86946),
          i = t(60351),
          O = t(71742),
          D = t(64238),
          V = t.n(D),
          M = t(53011),
          H = t.n(M),
          S = t(68031),
          u = t(80549);
        const s = (0, n.createContext)(null);
        function m(y) {
          const {
              variant: _,
              radius: F,
              size: G,
              status: R,
              children: $,
              value: tt,
              onValueChange: L,
            } = y,
            [C, l] = (0, n.useState)({}),
            E = (0, n.useCallback)((r, a) => l((c) => ({ ...c, [a]: r })), []),
            d = (0, n.useCallback)(
              (r, a) =>
                l((c) => {
                  const P = { ...c };
                  return P[a] === r && delete P[a], P;
                }),
              [],
            ),
            f = (r) => {
              let a = 0;
              switch (r.key) {
                case " ":
                case "Enter":
                case "ArrowRight":
                  a = 1;
                  break;
                case "ArrowLeft":
                  a = -1;
                  break;
              }
              if (a) {
                const c = Array.from(Object.values(C)).sort(Z);
                let P;
                if (tt === null) P = a > 0 ? 0 : c.length - 1;
                else {
                  const j = C[tt],
                    z = c.findIndex((K) => K === j);
                  (0, O.wT)(
                    typeof z == "number",
                    "Could not find current segmented value position",
                  ),
                    (P = z + a);
                }
                const N = c[P < 0 ? c.length + P : P % c.length],
                  W = Object.keys(C).find((j) => C[j] === N);
                typeof W != "string"
                  ? console.error("Could not find next segmeneted value")
                  : (L(W), r.stopPropagation(), r.preventDefault());
              }
            },
            g = (0, u.f)("SegmentedControl", _),
            U = (0, n.useMemo)(
              () => ({
                value: tt,
                onValueChange: L,
                register: E,
                unregister: d,
                radius: F,
                size: G,
              }),
              [tt, L, E, d, F, G],
            );
          return (0, e.jsx)(o.j, {
            clickable: !1,
            hoverable: !1,
            focusable: !1,
            variant: g,
            radius: F,
            size: G,
            status: R,
            className: V()(M.SegmentedControlBox, M[`Variant-${g}`]),
            tabIndex: 0,
            onKeyDown: f,
            children: (0, e.jsx)(s.Provider, {
              value: U,
              children: (0, e.jsxs)(i.az, {
                className: M.SegmentedControl,
                style: { "--outer-radius": `var(--radius-${F})` },
                children: [$, tt !== null && (0, e.jsx)(A, { radius: F })],
              }),
            }),
          });
        }
        function b(y) {
          const { value: _, children: F, disabled: G } = y,
            R = (0, n.useContext)(s),
            [$, tt] = (0, n.useState)(),
            { register: L, unregister: C } = R || {};
          if (
            ((0, n.useEffect)(
              () => (!$ || !L || !C ? () => {} : (L($, _), () => C($, _))),
              [L, C, _, $],
            ),
            !R)
          )
            return null;
          const { value: l, onValueChange: E, radius: d, size: f } = R,
            g = _ === l,
            U = (a) => {
              a.stopPropagation(), a.preventDefault(), !(g || G) && E(_);
            },
            r = F === void 0 ? _ : F;
          return (0, e.jsx)(S.s, {
            justify: "center",
            align: "center",
            ref: tt,
            onClick: U,
            "data-selected": g ? "true" : "false",
            className: V()(M.Item, f && M[`Size-${f}`], G ? M.disabled : ""),
            children: r,
          });
        }
        function I(y) {
          const { options: _, getOptionLabel: F = (R) => R, ...G } = y;
          return (0, e.jsx)(I.Root, {
            ...G,
            children: _.map((R) =>
              (0, e.jsx)(I.Item, { value: R, children: F(R) }, R),
            ),
          });
        }
        (I.Item = b), (I.Root = m);
        function A(y) {
          const { radius: _ } = y;
          return (0, e.jsx)(i.az, {
            className: M.IndicatorPosition,
            children: (0, e.jsx)("div", { className: M.Indicator }),
          });
        }
        function Z(y, _) {
          const F = y.compareDocumentPosition(_);
          return F & Node.DOCUMENT_POSITION_FOLLOWING
            ? -1
            : F & Node.DOCUMENT_POSITION_PRECEDING
              ? 1
              : 0;
        }
      },
      58952: (T, p, t) => {
        "use strict";
        t.d(p, { DL: () => l, WM: () => G, l6: () => C, uh: () => f });
        var e = t(7850),
          n = t(90626),
          o = t(185),
          i = t(86946),
          O = t(12204),
          D = t(15252),
          V = t(63029),
          M = t(76854),
          H = t(39790),
          S = t(85367),
          u = t(68031),
          s = t(80549),
          m = t(58017),
          b = t(64415);
        function I(r) {
          const {
              children: a,
              state: c,
              placement: P = "bottom-end",
              popoverWidth: N = "dropdown",
              popoverMaxHeight: W,
              popoverPresentation: j,
              popoverLabel: z,
              ...K
            } = r,
            [et, B] = (0, n.useState)(null),
            [Q, J] = (0, n.useState)(null),
            xt = (0, n.useMemo)(
              () =>
                c.rgOptions.findIndex((Y) =>
                  c.multiselect
                    ? c.selectedValue.includes(Y)
                    : Y === c.selectedValue,
                ),
              [c.selectedValue, c.rgOptions, c.multiselect],
            ),
            v = (0, n.useRef)(null),
            h = {
              ...c,
              ...K,
              focusedValue: et,
              onFocusChange: B,
              refPopover: v,
              popoverLabel: z,
              setOpen: (Y) => {
                Y && B(c.multiselect ? c.selectedValue[0] : c.selectedValue),
                  c.setOpen(Y);
              },
              focusedIndex: Q,
              onFocusedIndexChange: J,
            },
            x = (0, o.T)({
              open: c.bOpen,
              onOpenChange: c.setOpen,
              width: N,
              maxHeight: W,
              placement: P,
              presentation: j,
              selectedIndex: xt,
              setSelectedIndex: (Y) => c.onItemSelectionChange(c.rgOptions[Y]),
              activeIndex: Q,
              setActiveIndex: J,
              gutter: "4",
              interactions: { click: !0, typeahead: !0 },
              role: "select",
              scroll: !0,
            });
          return (0, e.jsx)(g.Provider, {
            value: h,
            children: (0, e.jsx)(o.k.Root, { state: x, children: a }),
          });
        }
        function A(r) {
          const { refPopover: a, popoverLabel: c } = U("<Select.Options>");
          return (0, e.jsx)(o.k.Positioner, {
            ref: a,
            label: c,
            children: r.children,
          });
        }
        function Z(r) {
          const { value: a, children: c, disabled: P, ...N } = r,
            {
              onItemSelectionChange: W,
              multiselect: j,
              selectedValue: z,
              maxSelected: K,
            } = U("<SelectTrigger>"),
            et = typeof a == "string" ? a : void 0;
          let B = !1,
            Q = !1;
          j
            ? ((B = Array.isArray(z) && z.includes(a)),
              (Q = !!K && Array.isArray(z) && z.length >= K))
            : (B = a === z);
          const J = P || (Q && !B);
          return (0, e.jsxs)(o.k.Item, {
            label: et,
            onSelect: () => W(a),
            selected: B,
            disabled: J,
            ...N,
            children: [
              j &&
                (0, e.jsxs)(u.s, {
                  gap: "2",
                  align: "center",
                  children: [
                    (0, e.jsx)(S.S, { checked: B, variant: "dark" }),
                    c,
                  ],
                }),
              !j && c,
            ],
          });
        }
        function y(r) {
          const { children: a, render: c } = r,
            {
              bOpen: P,
              setOpen: N,
              selectedValue: W,
              variant: j,
              size: z,
              radius: K,
              status: et,
              rgOptions: B,
              multiselect: Q,
              onClear: J,
              focusedValue: xt,
              onFocusChange: v,
              onSelectionChange: h,
              clearable: x,
              focusedIndex: Y,
              onItemSelectionChange: nt,
              onFocusedIndexChange: k,
              refPopover: ct,
              popoverLabel: w,
              placeholder: X,
              maxSelected: ht,
              ...ot
            } = U("<SelectTrigger>"),
            at = {
              tabIndex: 0,
              role: "combobox",
              onClick: () => N(!P),
              children: a,
            },
            q = Q ? Array.isArray(W) && W.length > 0 : !!W,
            ut = q && x,
            it = ut
              ? (0, e.jsx)(V.g, { onClick: J, cursor: "pointer", hitSlop: !0 })
              : (0, e.jsx)(O.V, {}),
            ft = ut
              ? {
                  onSecondaryButton: J,
                  actionDescriptionMap: {
                    [b.pR.SECONDARY]: m.T.Localize("#Clear"),
                  },
                }
              : void 0,
            Et = (0, s.f)("Select", j),
            st = (0, e.jsx)(i.j, {
              afterContent: it,
              variant: Et,
              size: z,
              radius: K,
              status: et,
              hasValue: q,
              tabIndex: 0,
              cursor: "pointer",
              navProps: ft,
              ...ot,
            }),
            dt = (0, M.Q)(c, st, at, void 0);
          return (0, e.jsx)(o.k.Anchor, { children: dt });
        }
        function _(r) {
          return (0, e.jsx)(D.EY, {
            weight: "medium",
            truncate: !0,
            contrast: "title",
            children: r.children,
          });
        }
        function F(r) {
          return (0, e.jsx)(D.EY, {
            contrast: "description",
            truncate: !0,
            children: r.children,
          });
        }
        function G(r) {
          return R(r, !1);
        }
        function R(r, a) {
          const { onSelectionChange: c, selectedValue: P, ...N } = r,
            [W, j] = (0, n.useState)(!1),
            z = (0, n.useCallback)(
              (B) => {
                c(B), a || j(!1);
              },
              [c, a],
            ),
            K = (0, n.useCallback)(
              (B) => {
                z(a ? [] : null),
                  B == null || B.stopPropagation(),
                  B == null || B.preventDefault();
              },
              [z, a],
            ),
            et = (0, n.useCallback)(
              (B) => {
                if (!a) z(B);
                else {
                  const Q = P,
                    J = Q.indexOf(B);
                  if (J === -1) z(Q.concat(B));
                  else return z(Q.slice(0, J).concat(Q.slice(J + 1)));
                }
              },
              [z, P, a],
            );
          return {
            onSelectionChange: z,
            onItemSelectionChange: et,
            onClear: K,
            bOpen: W,
            setOpen: j,
            multiselect: a,
            selectedValue: P,
            ...N,
          };
        }
        const $ = {
          Root: I,
          Option: Z,
          Options: A,
          Trigger: y,
          Value: _,
          Placeholder: F,
        };
        function tt(r) {
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
        function L(r) {
          const {
              selectedValue: a,
              onSelectionChange: c,
              options: P,
              placeholder: N,
              getOptionLabel: W = tt,
              ...j
            } = r,
            z = G({
              onSelectionChange: c,
              selectedValue: a,
              rgOptions: P,
              placeholder: N,
            }),
            K = a != null,
            et = K ? W(a) : "";
          return (0, e.jsxs)(C.Root, {
            state: z,
            ...j,
            children: [
              (0, e.jsxs)(C.Trigger, {
                children: [
                  K && (0, e.jsx)(C.Value, { children: et }),
                  !K && (0, e.jsx)(C.Placeholder, { children: N }),
                ],
              }),
              (0, e.jsx)(C.Options, {
                children: z.rgOptions.map((B, Q) =>
                  (0, e.jsx)(C.Option, { value: B, children: W(B) }, Q),
                ),
              }),
            ],
          });
        }
        const C = Object.assign(L, $);
        function l(r) {
          return R(r, !0);
        }
        const E = $;
        function d(r) {
          const {
              selectedValue: a,
              onSelectionChange: c,
              options: P,
              placeholder: N,
              getOptionLabel: W = tt,
              maxSelected: j,
              ...z
            } = r,
            K = l({
              onSelectionChange: c,
              selectedValue: a,
              rgOptions: P,
              placeholder: N,
              maxSelected: j,
            }),
            et = Array.isArray(a) && a.length > 0;
          let B = "";
          if (et) {
            const Q = a.map((J) => W(J));
            "ListFormat" in Intl
              ? (B = new Intl.ListFormat((0, H.ZO)().strISOCode).format(Q))
              : (B = Q.join(", "));
          }
          return (0, e.jsxs)(f.Root, {
            state: K,
            ...z,
            children: [
              (0, e.jsxs)(f.Trigger, {
                children: [
                  et && (0, e.jsx)(f.Value, { children: B }),
                  !et && (0, e.jsx)(f.Placeholder, { children: N }),
                ],
              }),
              (0, e.jsx)(f.Options, {
                children: K.rgOptions.map((Q, J) =>
                  (0, e.jsx)(f.Option, { value: Q, children: W(Q) }, J),
                ),
              }),
            ],
          });
        }
        const f = Object.assign(d, E),
          g = (0, n.createContext)(null);
        function U(r) {
          const a = (0, n.useContext)(g);
          return a || console.error(`${r} must be used within a <Select>!`), a;
        }
      },
      7125: (T, p, t) => {
        "use strict";
        t.d(p, { k: () => A });
        var e = t(7850),
          n = t(90626),
          o = t(64238),
          i = t.n(o),
          O = t(3877),
          D = t(98929),
          V = t(60351),
          M = t(86946),
          H = t(63029),
          S = t(18938),
          u = t(24660),
          s = t(80549),
          m = t(3166),
          b = t(58017),
          I = t(64415);
        function A(Z) {
          const { extracted: y, remaining: _ } = (0, V.A4)(Z),
            {
              value: F,
              onTextChange: G,
              onTextClear: R,
              clearable: $,
              onChange: tt,
              radius: L,
              variant: C,
              size: l,
              beforeContent: E,
              afterContent: d,
              inputRef: f,
              ref: g,
              disabled: U,
              gamepadFocusable: r = !0,
              status: a,
              ...c
            } = _,
            P = (0, m.Qn)(),
            N = (x) => {
              U || (G(x.target.value), tt && tt(x));
            },
            W = () => {
              G(""), R && R();
            },
            j = !!F && $,
            z = j
              ? (0, e.jsx)(H.g, { onClick: W, cursor: "pointer", hitSlop: !0 })
              : d,
            K = (0, s.f)("TextInput", C),
            et = {
              ...y,
              variant: K,
              size: l,
              radius: L,
              status: a,
              beforeContent: E,
              afterContent: z,
              ref: g,
              disabled: U,
            },
            B = (0, n.useRef)(null),
            Q = (x) => {
              B.current && x.target !== B.current && B.current.focus();
            },
            J = r && P,
            xt = J ? u.BA : "input",
            h =
              J && j && !U
                ? {
                    onSecondaryButton: W,
                    actionDescriptionMap: {
                      [I.pR.SECONDARY]: b.T.Localize("#Clear"),
                    },
                  }
                : {};
          return (0, e.jsx)(M.j, {
            cursor: "text",
            ...et,
            onClick: Q,
            children: (0, e.jsx)(xt, {
              ref: (0, S.Ue)(f, B),
              type: "text",
              "aria-disabled": U,
              readOnly: U,
              className: i()((0, O.T)(), (0, D.F)()),
              value: F || "",
              onChange: N,
              ...h,
              ...c,
            }),
          });
        }
      },
      31857: (T, p, t) => {
        "use strict";
        t.d(p, { I: () => D });
        var e = t(7850),
          n = t(69289),
          o = t(8928),
          i = t(16619),
          O = t.n(i);
        function D(u) {
          return (0, e.jsx)("svg", { ...H(u) });
        }
        const V = [
          ...o.L,
          {
            prop: "size",
            responsive: !0,
            className: (u) => i[`IconSize-${u}`],
          },
          {
            prop: "color",
            className: i.Color,
            cssProperty: (u) => ["--icon-color", M(u)],
          },
          {
            prop: "hitSlop",
            className: i.HitSlop,
            cssProperty: (u) => [
              "--hit-slop-custom",
              typeof u == "string" ? u : "",
            ],
          },
          o.h.find(({ prop: u }) => u === "cursor"),
        ];
        function M(u) {
          return !u || u[0] === "#" ? u : (0, n.w7)(u);
        }
        function H(u) {
          const { viewBox: s, ...m } = u,
            I = { className: m.size ? void 0 : i.IconSizeDefault, ...m };
          return s && (I.viewBox = S(s)), (0, n.mz)(I, V);
        }
        function S(u) {
          if (u)
            return typeof u == "number"
              ? `0 0 ${u} ${u}`
              : typeof u == "string"
                ? u
                : `0 0 ${u.width} ${u.height}`;
        }
      },
      30241: (T, p, t) => {
        "use strict";
        t.d(p, { i: () => o });
        var e = t(7850),
          n = t(31857);
        function o(i) {
          return (0, e.jsx)(n.I, {
            ...i,
            viewBox: 16,
            children: (0, e.jsx)("path", {
              d: "M13.8182 1.94629L5.77816 9.98184L2.40483 6.61296L0.835938 8.18184L5.77816 13.1285L15.387 3.51518L13.8182 1.94629Z",
              fill: "currentColor",
            }),
          });
        }
      },
      12204: (T, p, t) => {
        "use strict";
        t.d(p, { V: () => i });
        var e = t(7850),
          n = t(31857);
        const o = {
          up: "rotate( 180, 10, 10 )",
          left: "rotate( 90, 10, 10 )",
          right: "rotate( 270, 10, 10 )",
        };
        function i(O) {
          const { direction: D = "down" } = O,
            V = o[D];
          return (0, e.jsx)(n.I, {
            ...O,
            viewBox: 20,
            children: (0, e.jsx)("path", {
              transform: V,
              d: "M5.14541 6.89977L10.0063 12.2027L14.8671 6.89977C15.3557 6.36674 16.145 6.36674 16.6336 6.89977C17.1221 7.4328 17.1221 8.29385 16.6336 8.82688L10.8832 15.1002C10.3946 15.6333 9.60537 15.6333 9.11678 15.1002L3.36644 8.82688C2.87785 8.29385 2.87785 7.4328 3.36644 6.89977C3.85503 6.38041 4.65682 6.36674 5.14541 6.89977Z",
              fill: "currentColor",
            }),
          });
        }
      },
      63029: (T, p, t) => {
        "use strict";
        t.d(p, { g: () => o });
        var e = t(7850),
          n = t(31857);
        function o(i) {
          return (0, e.jsx)(n.I, {
            ...i,
            viewBox: 12,
            children: (0, e.jsx)("path", {
              d: "M10.7068 2.46964L9.53012 1.29297L6.00012 4.81964L2.47012 1.29297L1.29346 2.46964L4.82012 5.99964L1.29346 9.52964L2.47012 10.7063L6.00012 7.17964L9.53012 10.7063L10.7068 9.52964L7.18012 5.99964L10.7068 2.46964Z",
              fill: "currentColor",
            }),
          });
        }
      },
      58017: (T, p, t) => {
        "use strict";
        t.d(p, { T: () => i });
        var e = t(37901);
        const n = {};
        (n.arabic = () => t.e(47608).then(t.t.bind(t, 47608, 19))),
          (n.brazilian = () => t.e(29930).then(t.t.bind(t, 29930, 19))),
          (n.bulgarian = () => t.e(48465).then(t.t.bind(t, 48465, 19))),
          (n.czech = () => t.e(14027).then(t.t.bind(t, 14027, 19))),
          (n.danish = () => t.e(19661).then(t.t.bind(t, 19661, 19))),
          (n.dutch = () => t.e(94654).then(t.t.bind(t, 94654, 19))),
          (n.english = () => t.e(83996).then(t.t.bind(t, 83996, 19))),
          (n.finnish = () => t.e(47759).then(t.t.bind(t, 47759, 19))),
          (n.french = () => t.e(37140).then(t.t.bind(t, 37140, 19))),
          (n.german = () => t.e(81194).then(t.t.bind(t, 81194, 19))),
          (n.greek = () => t.e(71744).then(t.t.bind(t, 71744, 19))),
          (n.hungarian = () => t.e(59845).then(t.t.bind(t, 59845, 19))),
          (n.indonesian = () => t.e(30308).then(t.t.bind(t, 30308, 19))),
          (n.italian = () => t.e(51380).then(t.t.bind(t, 51380, 19))),
          (n.japanese = () => t.e(787).then(t.t.bind(t, 787, 19))),
          (n.koreana = () => t.e(36691).then(t.t.bind(t, 36691, 19))),
          (n.latam = () => t.e(21579).then(t.t.bind(t, 21579, 19))),
          (n.malay = () => t.e(83924).then(t.t.bind(t, 83924, 19))),
          (n.norwegian = () => t.e(97284).then(t.t.bind(t, 97284, 19))),
          (n.polish = () => t.e(44373).then(t.t.bind(t, 44373, 19))),
          (n.portuguese = () => t.e(32561).then(t.t.bind(t, 32561, 19))),
          (n.romanian = () => t.e(17423).then(t.t.bind(t, 17423, 19))),
          (n.russian = () => t.e(52757).then(t.t.bind(t, 52757, 19))),
          (n.sc_schinese = () => t.e(30175).then(t.t.bind(t, 30175, 19))),
          (n.schinese = () => t.e(6128).then(t.t.bind(t, 6128, 19))),
          (n.spanish = () => t.e(41052).then(t.t.bind(t, 41052, 19))),
          (n.swedish = () => t.e(95773).then(t.t.bind(t, 95773, 19))),
          (n.tchinese = () => t.e(66563).then(t.t.bind(t, 66563, 19))),
          (n.thai = () => t.e(75178).then(t.t.bind(t, 75178, 19))),
          (n.turkish = () => t.e(14028).then(t.t.bind(t, 14028, 19))),
          (n.ukrainian = () => t.e(90778).then(t.t.bind(t, 90778, 19))),
          (n.vietnamese = () => t.e(1291).then(t.t.bind(t, 1291, 19)));
        async function o(O) {
          if (n[O]) return n[O]();
        }
        const i = (0, e.l)(o);
      },
      76854: (T, p, t) => {
        "use strict";
        t.d(p, { Q: () => o });
        var e = t(90626);
        function n(i, O, D) {
          return typeof i == "function" ? i(O, D) : e.cloneElement(i, O);
        }
        function o(i, O, D, V) {
          return n(i || O, D, V);
        }
      },
      34771: (T, p, t) => {
        "use strict";
        t.d(p, { D: () => m });
        var e = t(7850),
          n = t(39049),
          o = t(8928),
          i = t(15252),
          O = t(69289),
          D = t(90626);
        function V(A) {
          const { depth: Z } = useContext(M);
          return jsx(M.Provider, {
            value: { depth: Z + 1 },
            children: jsx(Box, { ...A }),
          });
        }
        const M = D.createContext({ depth: 0 });
        function H() {
          return (0, D.useContext)(M).depth;
        }
        var S = t(3877),
          u = t(64238),
          s = t.n(u);
        function m(A) {
          const { level: Z = "auto", className: y, color: _ } = A,
            F = H(),
            G = I(Z, F);
          return (0, e.jsx)(G, {
            ...(0, O.mz)({ ...A, className: s()((0, S.T)(), n.Heading, y) }, b),
          });
        }
        const b = [
          ...i.U6,
          ...o.L,
          {
            prop: "size",
            responsive: !0,
            className: (A) => n[`HeadingSize-${A}`],
          },
        ];
        function I(A, Z) {
          if (A === "auto" && Z === 0) return "h1";
          const y = A === "auto" ? Z.toString() : A;
          return /^[1-6]$/.test(y)
            ? "h" + y
            : A === "auto"
              ? (console.error(
                  '<Section> nesting has exceeded "h6" for headings.',
                ),
                "h6")
              : (console.error(
                  `Attempt to render invalid heading level, "${y}".`,
                ),
                "h1");
        }
      },
      51596: (T, p, t) => {
        "use strict";
        t.d(p, { P: () => e });
        function e(n, o) {
          return o === void 0 ? n[""] : n[o];
        }
      },
      52574: (T, p, t) => {
        "use strict";
        t.d(p, { L: () => o });
        var e = t(7850),
          n = t(51596);
        const o = {
          b: { Constructor: i },
          i: { Constructor: O },
          u: { Constructor: D },
          c: { Constructor: V },
          strike: { Constructor: M },
          color: { Constructor: H },
        };
        function i(S) {
          return (0, e.jsx)("b", { children: S.children });
        }
        function O(S) {
          return (0, e.jsx)("i", { children: S.children });
        }
        function D(S) {
          return (0, e.jsx)("u", { children: S.children });
        }
        function V(S) {
          return (0, e.jsx)("code", { children: S.children });
        }
        function M(S) {
          return (0, e.jsx)("s", { children: S.children });
        }
        function H(S) {
          const u = (0, n.P)(S.args),
            s = {};
          return (
            u &&
              (u.match(/^#[a-fA-F0-9]+$/) || u.match(/rgba?\([0-9, ]+\)$/)) &&
              (s.color = u),
            (0, e.jsx)("span", { style: s, children: S.children })
          );
        }
      },
      91937: (T, p, t) => {
        "use strict";
        t.d(p, { F: () => i });
        var e = t(7850),
          n = t(17763),
          o = t.n(n);
        const i = {
          h1: { Constructor: O, skipFollowingNewline: !0 },
          h2: { Constructor: D, skipFollowingNewline: !0 },
          h3: { Constructor: V, skipFollowingNewline: !0 },
          code: { Constructor: M, skipFollowingNewline: !0 },
          quote: {
            Constructor: H,
            skipFollowingNewline: !0,
            skipInternalNewline: !0,
          },
          hr: { Constructor: u, skipFollowingNewline: !0 },
        };
        function O(s) {
          return (0, e.jsx)("h1", { children: s.children });
        }
        function D(s) {
          return (0, e.jsx)("h2", { children: s.children });
        }
        function V(s) {
          return (0, e.jsx)("h3", { children: s.children });
        }
        function M(s) {
          return (0, e.jsx)("pre", {
            className: o().CodeBlock,
            children: (0, e.jsx)("code", { children: s.children }),
          });
        }
        function H(s) {
          return (0, e.jsx)("blockquote", { children: s.children });
        }
        function S(s) {
          return jsxs(Fragment, {
            children: [
              jsx("div", { className: styles.ClearFloat }),
              s.children,
            ],
          });
        }
        function u(s) {
          return (0, e.jsxs)(e.Fragment, {
            children: [(0, e.jsx)("hr", {}), s.children],
          });
        }
      },
      59443: (T, p, t) => {
        "use strict";
        t.d(p, { _r: () => S, e9: () => u, rh: () => H });
        var e = t(7850),
          n = t(90626),
          o = t(43434),
          i = t(86336),
          O = t(51596),
          D = t(39414);
        function V(s) {
          const m = n.Children.toArray(s)[0];
          return typeof m == "string" ? m : void 0;
        }
        function M(s, m) {
          if (!s) return;
          const b = s.startsWith("steamcommunity.com/") ? "https://" + s : s;
          if (b.match(/^https?:\/\//))
            return {
              strURL: b,
              bFromBody: !1,
              bHasCustomText: !(m != null && m.match(/^https?:\/\//i)),
            };
        }
        function H(s) {
          var m;
          const b =
            (m = (0, O.P)(s.args)) != null ? m : (0, O.P)(s.args, "href");
          if (b) return M(b, V(s.children));
          if (typeof s.children == "string") {
            const I = s.children.trim(),
              A = D.O.exec(I);
            if ((A == null ? void 0 : A[0]) == I)
              return { strURL: I, bFromBody: !0, bHasCustomText: !1 };
          }
        }
        function S(s) {
          const m = H(s);
          if (!m) return s.children;
          if (m.bFromBody) return (0, e.jsx)(u, { strURL: m.strURL });
          const b = (0, o.p)(m.strURL) ? (0, o.E)(m.strURL) : m.strURL;
          return (0, e.jsx)(i.Y, {
            target: "_blank",
            href: b,
            underline: "auto",
            contrast: "title",
            children: s.children,
          });
        }
        function u(s) {
          const m = s.strURL.match(/^[a-z][a-z0-9+.-]*:/i)
              ? s.strURL
              : "http://" + s.strURL,
            b = (0, o.p)(m) ? (0, o.E)(m) : m;
          return (0, e.jsx)(i.Y, {
            target: "_blank",
            href: b,
            underline: "auto",
            contrast: "title",
            children: s.strURL,
          });
        }
      },
      49144: (T, p, t) => {
        "use strict";
        t.d(p, { I: () => n });
        var e = t(7850);
        const n = {
          list: {
            Constructor: o,
            skipInternalNewline: !0,
            skipFollowingNewline: !0,
          },
          olist: {
            Constructor: i,
            skipInternalNewline: !0,
            skipFollowingNewline: !0,
          },
          "*": { Constructor: O, autocloses: !0 },
        };
        function o(D) {
          return (0, e.jsx)("ul", { children: D.children });
        }
        function i(D) {
          return (0, e.jsx)("ol", { children: D.children });
        }
        function O(D) {
          return (0, e.jsx)("li", { children: D.children });
        }
      },
      39790: (T, p, t) => {
        "use strict";
        t.d(p, { ZO: () => n });
        var e = t(37901);
        function n() {
          return (0, e.A)().languages[0];
        }
      },
      21895: (T) => {
        T.exports = {
          Root: "_1kIuUssJvopWbHik1IKMG6",
          "Variant-light": "zcrlDqGBY0Lrl7faLFoJI",
          "Variant-dark": "_3b6kFRuG8ILziz88w8GESp",
          "Variant-outline": "wlcXkTKJWe-SE0fCwIRwQ",
          Disabled: "kLcGKsNxkoEqxgok6YzML",
          Checkbox: "_3babFLLB0YYBf8znrlE7Dt",
          Icon: "cngAYeP7ZvFo2pT_v3-xO",
        };
      },
      82277: (T) => {
        T.exports = {
          FilterBorder: "_3xFYpKNlOZ6xjQ529ZgRbr",
          Top: "_310cGk80jWCZr6LxeueX_5",
          Bottom: "nLYMJhpffeKLN_8VkTcD_",
        };
      },
      38878: (T) => {
        T.exports = {
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
      48093: (T) => {
        T.exports = {
          ListBox: "_1PUg8GjnBeN7rBK-dcyQFl",
          ListBoxOption: "_20oF9tLSfptitLraDOp6X6",
        };
      },
      24089: (T) => {
        T.exports = { TextEntry: "_1vE-LsK6l_D_5yjbywZV1p" };
      },
      53011: (T) => {
        T.exports = {
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
      16619: (T) => {
        T.exports = {
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
      39049: (T) => {
        T.exports = {
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
      17763: (T) => {
        T.exports = {
          CodeBlock: "OkZ2olcxw9WPWea9VGVr6",
          ClearFloat: "RRZZP47ujIKbmOpZ61w_T",
        };
      },
    },
  ]);
})();
