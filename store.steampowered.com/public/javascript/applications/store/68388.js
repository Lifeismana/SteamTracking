/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [68388],
    {
      94381: (j, E, r) => {
        "use strict";
        r.d(E, { S: () => A });
        var o = r(7850),
          p = r(68031),
          h = r(31857);
        function I(S) {
          return (0, o.jsx)(h.I, {
            ...S,
            viewBoxSize: 16,
            children: (0, o.jsx)("path", {
              d: "M13.8182 1.94629L5.77816 9.98184L2.40483 6.61296L0.835938 8.18184L5.77816 13.1285L15.387 3.51518L13.8182 1.94629Z",
              fill: "currentColor",
            }),
          });
        }
        var L = r(21895),
          O = r(64238),
          z = r.n(O),
          v = r(80549);
        function A(S) {
          const {
              checked: R,
              onChange: G,
              disabled: P,
              children: K,
              ref: N,
              variant: U,
              color: Y,
              align: W = "center",
              ...Q
            } = S,
            B = R === "indeterminate",
            w = B ? F : I,
            y = () => {
              P || (G && G(B ? !0 : !R));
            },
            Z = (T) => {
              P ||
                (T.key === " " &&
                  (y(), T.preventDefault(), T.stopPropagation()));
            },
            H = (0, v.f)("Checkbox", U);
          return (0, o.jsxs)(p.s, {
            align: W,
            ref: N,
            role: "checkbox",
            "aria-checked": B ? "mixed" : R,
            "data-state": b(R),
            className: z()(L.Root, L[`Variant-${H}`], P && L.Disabled),
            onClick: y,
            tabIndex: 0,
            onKeyDown: Z,
            cursor: "default",
            "aria-disabled": P,
            "data-accent-color": Y,
            ...Q,
            children: [
              (0, o.jsx)("div", {
                className: L.Checkbox,
                children: R && (0, o.jsx)(w, { className: L.Icon }),
              }),
              K,
            ],
          });
        }
        function b(S) {
          return S === "indeterminate" ? S : S ? "checked" : "unchecked";
        }
        function F(S) {
          return (0, o.jsx)("svg", {
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, o.jsx)("path", {
              d: "M14.6663 7.11133H1.33301V9.33355H14.6663V7.11133Z",
              fill: "currentColor",
            }),
          });
        }
      },
      68388: (j, E, r) => {
        "use strict";
        r.d(E, { l6: () => V, WM: () => te });
        var o = r(7850),
          p = r(90626),
          h = r(73788),
          I = r(8083),
          L = r(60351),
          O = r(76854),
          z = r(48093);
        function v(e) {
          const { render: t, ...n } = e;
          return (0, O.Q)(
            t,
            (0, o.jsx)(L.az, {
              radius: "sm",
              background: "dull-8",
              className: z.ListBox,
            }),
            { role: "listbox", ...n },
          );
        }
        function A(e) {
          const {
              selected: t,
              focused: n,
              label: a = null,
              render: s,
              disabled: d,
              ...u
            } = e,
            c = t ? "true" : "false",
            f = n ? "true" : void 0;
          return (0, O.Q)(
            s,
            (0, o.jsx)(L.az, {
              focusable: !0,
              "data-selected": c,
              "data-focused": f,
              "aria-disabled": d,
              className: z.ListBoxOption,
              paddingY: "2",
              paddingX: "3",
            }),
            { role: "option", ...u },
            { selected: t, focused: n, disabled: d },
          );
        }
        const b = Object.assign(v, { Option: A });
        var F = r(84909),
          S = r(24660),
          R = r(38566),
          G = r(3166);
        const P = (0, p.createContext)(null);
        function K(e) {
          const { children: t, state: n } = e;
          return (0, o.jsx)(P.Provider, { value: n, children: t });
        }
        function N(e) {
          const { children: t } = e,
            n = p.Children.only(t),
            a = (0, p.useContext)(P),
            s = (0, h.SV)([a?.floating.refs.setReference, n?.props.ref]);
          if (!n) return null;
          if (!a)
            return (
              console.error(
                "<PopoverListAnchor> must be a child of <PopoverListRoot>.",
              ),
              null
            );
          const { ref: d, ...u } = n.props;
          return (0, p.cloneElement)(n, { ref: s, ...a.getReferenceProps(u) });
        }
        function U(e) {
          const { children: t, render: n, ref: a } = e,
            s = (0, p.useContext)(P),
            d = (0, h.SV)([
              a,
              s?.floating.refs.setFloating,
              (u) => u?.showPopover?.(),
            ]);
          return s
            ? s.open
              ? (0, o.jsx)(Y, {
                  state: s,
                  children: (0, o.jsx)(b, {
                    ref: d,
                    style: s.floating.floatingStyles,
                    ...s.getFloatingProps({ popover: "manual" }),
                    render: n,
                    children: (0, o.jsx)(h.ph, {
                      elementsRef: s.elementsRef,
                      labelsRef: s.labelsRef,
                      children: t,
                    }),
                  }),
                })
              : null
            : (console.error(
                "<PopoverListPositioner> must be a child of <PopoverListRoot>.",
              ),
              null);
        }
        function Y(e) {
          return (0, G.Qn)()
            ? (0, o.jsx)(W, { ...e })
            : (0, o.jsx)(Q, { ...e });
        }
        function W(e) {
          const { state: t, children: n } = e,
            a = () => t.floating.context.onOpenChange(!1),
            s = p.useRef(void 0);
          return (
            (0, S.O7)(s, !!s.current, !1),
            (0, o.jsx)(R.D6, {
              navID: "PopoverList",
              onCancelButton: a,
              modal: !0,
              navTreeRef: s,
              children: n,
            })
          );
        }
        function Q(e) {
          const { state: t, children: n } = e;
          return (0, o.jsx)(h.s3, {
            context: t.floating.context,
            initialFocus: t.initialFocus,
            returnFocus: !1,
            children: n,
          });
        }
        function B(e) {
          const {
              children: t,
              label: n,
              selected: a,
              onSelect: s,
              ref: d,
              disabled: u,
              ...c
            } = e,
            f = (0, p.useContext)(P),
            { ref: x, index: l } = (0, h.rm)({ label: n }),
            i = (0, h.SV)([d, x]);
          if (!f)
            return (
              console.error(
                "<PopoverListItem> must be a child of <PopoverListRoot>.",
              ),
              null
            );
          const g = l === f.activeIndex,
            D = l === f.selectedIndex || !!a;
          return (0, o.jsx)(b.Option, {
            ref: i,
            selected: D,
            focused: g,
            role: "option",
            tabIndex: 0,
            ...f.getItemProps({
              onClick: u ? void 0 : s,
              onKeyDown: (C) => {
                !u &&
                  (C.key === "Enter" ||
                    (C.key === " " && !f.typingRef.current)) &&
                  (s(C), C.preventDefault(), C.stopPropagation());
              },
              active: g,
              selected: D,
              disabled: u,
              ...c,
            }),
            children: t,
          });
        }
        function w(e) {
          const {
            open: t,
            onOpenChange: n,
            activeIndex: a,
            setActiveIndex: s,
            selectedIndex: d,
            setSelectedIndex: u,
            interactions: c = {},
            role: f,
            placement: x,
          } = e;
          let l = t;
          const i = (0, h.we)({
              open: l,
              onOpenChange: n,
              middleware: (0, F.p)(e),
              whileElementsMounted: I.ll,
              placement: x && typeof x == "object" ? x.initial : x,
              strategy: "fixed",
              platform: {
                ...I.iD,
                getOffsetParent: (k) => k?.ownerDocument?.defaultView ?? window,
              },
            }),
            g = (0, h.kp)(i.context, { enabled: !!c.click }),
            D = (0, h.iQ)(i.context, { enabled: !!c.focus }),
            C = (0, h.s9)(i.context),
            m = (0, p.useRef)([]),
            X = (0, h.C1)(i.context, {
              listRef: m,
              activeIndex: a,
              selectedIndex: d,
              onNavigate: s,
              virtual: !!c.virtualItemFocus,
              loop: !0,
              focusItemOnOpen: !1,
            }),
            $ = (0, p.useRef)([]),
            q = (0, p.useRef)(!1),
            ce = (0, h.lY)(i.context, {
              enabled: !!c.typeahead,
              listRef: $,
              activeIndex: a,
              selectedIndex: d,
              onMatch: l ? s : u,
              onTypingChange: (k) => (q.current = k),
            }),
            le = (0, h.It)(i.context, { role: f }),
            {
              getFloatingProps: ie,
              getReferenceProps: ae,
              getItemProps: _,
            } = (0, h.bv)([le, g, D, C, X, ce]);
          return {
            floating: i,
            getFloatingProps: ie,
            getReferenceProps: ae,
            getItemProps: _,
            open: l,
            activeIndex: a,
            selectedIndex: d,
            setSelectedIndex: u,
            elementsRef: m,
            labelsRef: $,
            typingRef: q,
            initialFocus: c.virtualItemFocus ? -1 : void 0,
          };
        }
        const y = { Root: K, Anchor: N, Positioner: U, Item: B };
        var Z = r(86946),
          H = r(31857);
        const T = {
          up: "rotate( 180, 10, 10 )",
          left: "rotate( 90, 10, 10 )",
          right: "rotate( 270, 10, 10 )",
        };
        function ue(e) {
          const { direction: t = "down" } = e,
            n = T[t];
          return (0, o.jsx)(H.I, {
            ...e,
            children: (0, o.jsx)("path", {
              transform: n,
              d: "M5.14541 6.89977L10.0063 12.2027L14.8671 6.89977C15.3557 6.36674 16.145 6.36674 16.6336 6.89977C17.1221 7.4328 17.1221 8.29385 16.6336 8.82688L10.8832 15.1002C10.3946 15.6333 9.60537 15.6333 9.11678 15.1002L3.36644 8.82688C2.87785 8.29385 2.87785 7.4328 3.36644 6.89977C3.85503 6.38041 4.65682 6.36674 5.14541 6.89977Z",
              fill: "currentColor",
            }),
          });
        }
        var ee = r(15252);
        function fe(e) {
          return (0, o.jsx)(H.I, {
            ...e,
            viewBoxSize: 12,
            children: (0, o.jsx)("path", {
              d: "M10.7068 2.46964L9.53012 1.29297L6.00012 4.81964L2.47012 1.29297L1.29346 2.46964L4.82012 5.99964L1.29346 9.52964L2.47012 10.7063L6.00012 7.17964L9.53012 10.7063L10.7068 9.52964L7.18012 5.99964L10.7068 2.46964Z",
              fill: "currentColor",
            }),
          });
        }
        var pe = r(31275);
        function xe() {
          return (0, pe.A)().languages[0];
        }
        var he = r(94381),
          ge = r(68031),
          ve = r(80549);
        function me(e) {
          const {
              children: t,
              state: n,
              placement: a = "bottom-end",
              popoverWidth: s = "dropdown",
              popoverMaxHeight: d,
              ...u
            } = e,
            [c, f] = (0, p.useState)(null),
            [x, l] = (0, p.useState)(null),
            i = (0, p.useMemo)(
              () =>
                n.rgOptions.findIndex((m) =>
                  n.multiselect
                    ? n.selectedValue.includes(m)
                    : m === n.selectedValue,
                ),
              [n.selectedValue, n.rgOptions, n.multiselect],
            ),
            g = (0, p.useRef)(null),
            D = {
              ...n,
              ...u,
              focusedValue: c,
              onFocusChange: f,
              refPopover: g,
              setOpen: (m) => {
                m && f(n.multiselect ? n.selectedValue[0] : n.selectedValue),
                  n.setOpen(m);
              },
              focusedIndex: x,
              onFocusedIndexChange: l,
            },
            C = w({
              open: n.bOpen,
              onOpenChange: n.setOpen,
              width: s,
              maxHeight: d,
              placement: a,
              selectedIndex: i,
              setSelectedIndex: (m) => n.onItemSelectionChange(n.rgOptions[m]),
              activeIndex: x,
              setActiveIndex: l,
              gutter: "4",
              interactions: { click: !0, typeahead: !0 },
              role: "select",
              scroll: !0,
            });
          return (0, o.jsx)(re.Provider, {
            value: D,
            children: (0, o.jsx)(y.Root, { state: C, children: t }),
          });
        }
        function Ie(e) {
          const { refPopover: t } = J("<Select.Options>");
          return (0, o.jsx)(y.Positioner, { ref: t, children: e.children });
        }
        function Se(e) {
          const { value: t, children: n, disabled: a, ...s } = e,
            {
              onItemSelectionChange: d,
              multiselect: u,
              selectedValue: c,
              maxSelected: f,
            } = J("<SelectTrigger>"),
            x = typeof t == "string" ? t : void 0;
          let l = !1,
            i = !1;
          u
            ? ((l = Array.isArray(c) && c.includes(t)),
              (i = !!f && Array.isArray(c) && c.length >= f))
            : (l = t === c);
          const g = a || (i && !l);
          return (0, o.jsxs)(y.Item, {
            label: x,
            onSelect: () => d(t),
            selected: l,
            disabled: g,
            ...s,
            children: [
              u &&
                (0, o.jsxs)(ge.s, {
                  gap: "2",
                  align: "center",
                  children: [
                    (0, o.jsx)(he.S, { checked: l, variant: "dark" }),
                    n,
                  ],
                }),
              !u && n,
            ],
          });
        }
        function Ce(e) {
          const { children: t, render: n } = e,
            {
              bOpen: a,
              setOpen: s,
              selectedValue: d,
              variant: u,
              size: c,
              radius: f,
              status: x,
              rgOptions: l,
              multiselect: i,
              onClear: g,
              focusedValue: D,
              onFocusChange: C,
              onSelectionChange: m,
              clearable: X,
              focusedIndex: $,
              onItemSelectionChange: q,
              onFocusedIndexChange: ce,
              refPopover: le,
              placeholder: ie,
              maxSelected: ae,
              ..._
            } = J("<SelectTrigger>"),
            k = {
              tabIndex: 0,
              role: "combobox",
              onClick: () => s(!a),
              children: t,
            },
            de = i ? Array.isArray(d) && d.length > 0 : !!d,
            ye =
              de && X
                ? (0, o.jsx)(fe, { onClick: g, cursor: "pointer", hitSlop: !0 })
                : (0, o.jsx)(ue, {}),
            Ve = (0, ve.f)("Select", u),
            De = (0, o.jsx)(Z.j, {
              afterContent: ye,
              variant: Ve,
              size: c,
              radius: f,
              status: x,
              hasValue: de,
              tabIndex: 0,
              cursor: "pointer",
              ..._,
            }),
            ze = (0, O.Q)(n, De, k, void 0);
          return (0, o.jsx)(y.Anchor, { children: ze });
        }
        function Le(e) {
          return (0, o.jsx)(ee.EY, {
            weight: "medium",
            truncate: !0,
            contrast: "title",
            children: e.children,
          });
        }
        function Pe(e) {
          return (0, o.jsx)(ee.EY, {
            contrast: "description",
            truncate: !0,
            children: e.children,
          });
        }
        function te(e) {
          return ne(e, !1);
        }
        function ne(e, t) {
          const { onSelectionChange: n, selectedValue: a, ...s } = e,
            [d, u] = (0, p.useState)(!1),
            c = (0, p.useCallback)(
              (l) => {
                n(l), t || u(!1);
              },
              [n, t],
            ),
            f = (0, p.useCallback)(
              (l) => {
                c(t ? [] : null), l.stopPropagation(), l.preventDefault();
              },
              [c, t],
            ),
            x = (0, p.useCallback)(
              (l) => {
                if (!t) c(l);
                else {
                  const i = a,
                    g = i.indexOf(l);
                  if (g === -1) c(i.concat(l));
                  else return c(i.slice(0, g).concat(i.slice(g + 1)));
                }
              },
              [c, a, t],
            );
          return {
            onSelectionChange: c,
            onItemSelectionChange: x,
            onClear: f,
            bOpen: d,
            setOpen: u,
            multiselect: t,
            selectedValue: a,
            ...s,
          };
        }
        const oe = {
          Root: me,
          Option: Se,
          Options: Ie,
          Trigger: Ce,
          Value: Le,
          Placeholder: Pe,
        };
        function se(e) {
          return typeof e == "string"
            ? e
            : typeof e == "number"
              ? e.toString()
              : (console.error(
                  "Could not use default option labeler on Select option value. Custom labeler requried",
                  e,
                ),
                "");
        }
        function je(e) {
          const {
              selectedValue: t,
              onSelectionChange: n,
              options: a,
              placeholder: s,
              getOptionLabel: d = se,
              ...u
            } = e,
            c = te({
              onSelectionChange: n,
              selectedValue: t,
              rgOptions: a,
              placeholder: s,
            }),
            f = t != null,
            x = f ? d(t) : "";
          return (0, o.jsxs)(V.Root, {
            state: c,
            ...u,
            children: [
              (0, o.jsxs)(V.Trigger, {
                children: [
                  f && (0, o.jsx)(V.Value, { children: x }),
                  !f && (0, o.jsx)(V.Placeholder, { children: s }),
                ],
              }),
              (0, o.jsx)(V.Options, {
                children: c.rgOptions.map((l, i) =>
                  (0, o.jsx)(V.Option, { value: l, children: d(l) }, i),
                ),
              }),
            ],
          });
        }
        const V = Object.assign(je, oe);
        function Oe(e) {
          return ne(e, !0);
        }
        const be = oe;
        function Re(e) {
          const {
              selectedValue: t,
              onSelectionChange: n,
              options: a,
              placeholder: s,
              getOptionLabel: d = se,
              maxSelected: u,
              ...c
            } = e,
            f = Oe({
              onSelectionChange: n,
              selectedValue: t,
              rgOptions: a,
              placeholder: s,
              maxSelected: u,
            }),
            x = Array.isArray(t) && t.length > 0;
          let l = "";
          if (x) {
            const i = t.map((g) => d(g));
            "ListFormat" in Intl
              ? (l = new Intl.ListFormat(xe().strISOCode).format(i))
              : (l = i.join(", "));
          }
          return (0, o.jsxs)(M.Root, {
            state: f,
            ...c,
            children: [
              (0, o.jsxs)(M.Trigger, {
                children: [
                  x && (0, o.jsx)(M.Value, { children: l }),
                  !x && (0, o.jsx)(M.Placeholder, { children: s }),
                ],
              }),
              (0, o.jsx)(M.Options, {
                children: f.rgOptions.map((i, g) =>
                  (0, o.jsx)(M.Option, { value: i, children: d(i) }, g),
                ),
              }),
            ],
          });
        }
        const M = Object.assign(Re, be),
          re = (0, p.createContext)(null);
        function J(e) {
          const t = (0, p.useContext)(re);
          return t || console.error(`${e} must be used within a <Select>!`), t;
        }
      },
      31857: (j, E, r) => {
        "use strict";
        r.d(E, { I: () => O });
        var o = r(7850),
          p = r(69289),
          h = r(8928),
          I = r(16619),
          L = r.n(I);
        function O(v) {
          const { viewBoxSize: A = 20, ...b } = v,
            F = b.size ? void 0 : I.IconSizeDefault;
          return (0, o.jsx)("svg", {
            viewBox: `0 0 ${A} ${A}`,
            ...(0, p.mz)({ className: F, ...b }, z),
          });
        }
        const z = [
          ...h.L,
          {
            prop: "size",
            responsive: !0,
            className: (v) => I[`IconSize-${v}`],
          },
          {
            prop: "color",
            className: I.Color,
            cssProperty: (v) => ["--icon-color", (0, p.w7)(v)],
          },
          {
            prop: "hitSlop",
            className: I.HitSlop,
            cssProperty: (v) => [
              "--hit-slop-custom",
              typeof v == "string" ? v : "",
            ],
          },
          h.h.find(({ prop: v }) => v === "cursor"),
        ];
      },
      21895: (j) => {
        j.exports = {
          Root: "_1kIuUssJvopWbHik1IKMG6",
          "Variant-light": "zcrlDqGBY0Lrl7faLFoJI",
          "Variant-dark": "_3b6kFRuG8ILziz88w8GESp",
          "Variant-outline": "wlcXkTKJWe-SE0fCwIRwQ",
          Disabled: "kLcGKsNxkoEqxgok6YzML",
          Checkbox: "_3babFLLB0YYBf8znrlE7Dt",
          Icon: "cngAYeP7ZvFo2pT_v3-xO",
        };
      },
      48093: (j) => {
        j.exports = {
          ListBox: "_1PUg8GjnBeN7rBK-dcyQFl",
          ListBoxOption: "_20oF9tLSfptitLraDOp6X6",
        };
      },
      16619: (j) => {
        j.exports = {
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
