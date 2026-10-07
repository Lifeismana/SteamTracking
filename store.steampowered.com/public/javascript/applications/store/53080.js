/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [53080],
    {
      53080: (H, w, t) => {
        "use strict";
        t.d(w, { l6: () => P, WM: () => K });
        var s = t(7850),
          x = t(90626),
          S = t(73788),
          E = t(60351),
          F = t(76854),
          G = t(48093);
        function q(n) {
          const { render: o, ...e } = n;
          return (0, F.Q)(
            o,
            (0, s.jsx)(E.az, {
              radius: "sm",
              background: "dull-8",
              className: G.ListBox,
            }),
            { role: "listbox", ...e },
          );
        }
        function _(n) {
          const {
              selected: o,
              focused: e,
              label: f = null,
              render: a,
              disabled: l,
              ...c
            } = n,
            r = o ? "true" : "false",
            h = e ? "true" : void 0;
          return (0, F.Q)(
            a,
            (0, s.jsx)(E.az, {
              focusable: !0,
              "data-selected": r,
              "data-focused": h,
              "aria-disabled": l,
              className: G.ListBoxOption,
              paddingY: "2",
              paddingX: "3",
            }),
            { role: "option", ...c },
            { selected: o, focused: e, disabled: l },
          );
        }
        const N = Object.assign(q, { Option: _ });
        var tt = t(84909),
          Q = t(28020),
          nt = t(24660),
          et = t(38566),
          ot = t(3166);
        const O = (0, x.createContext)(null);
        function st(n) {
          const { children: o, state: e } = n;
          return (0, s.jsx)(O.Provider, { value: e, children: o });
        }
        function lt(n) {
          const { children: o } = n,
            e = x.Children.only(o),
            f = (0, x.useContext)(O),
            a = (0, S.SV)([f?.floating.refs.setReference, e?.props.ref]);
          if (!e) return null;
          if (!f)
            return (
              console.error(
                "<PopoverListAnchor> must be a child of <PopoverListRoot>.",
              ),
              null
            );
          const { ref: l, ...c } = e.props;
          return (0, x.cloneElement)(e, { ref: a, ...f.getReferenceProps(c) });
        }
        function it(n) {
          const { children: o, render: e, ref: f, label: a } = n,
            l = (0, x.useContext)(O),
            c = (0, S.SV)([f, l?.floating.refs.setFloating]);
          return l
            ? l.open
              ? (0, s.jsx)(ct, {
                  state: l,
                  children: (0, s.jsx)(Q.HF, {
                    presentation: l.presentation,
                    sizing: l.sizing,
                    floatingRef: c,
                    floatingProps: l.getFloatingProps(),
                    floatingStyles: l.floating.floatingStyles,
                    referenceElement: l.floating.elements.domReference,
                    label: a,
                    children: (0, s.jsx)(N, {
                      render: e,
                      children: (0, s.jsx)(S.ph, {
                        elementsRef: l.elementsRef,
                        labelsRef: l.labelsRef,
                        children: o,
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
        function ct(n) {
          return (0, ot.Qn)()
            ? (0, s.jsx)(dt, { ...n })
            : (0, s.jsx)(at, { ...n });
        }
        function dt(n) {
          const { state: o, children: e } = n,
            f = () => o.floating.context.onOpenChange(!1),
            a = x.useRef(void 0);
          return (
            (0, nt.O7)(a, !0, !0),
            (0, s.jsx)(et.D6, {
              navID: "PopoverList",
              onCancelButton: f,
              modal: !0,
              navTreeRef: a,
              children: e,
            })
          );
        }
        function at(n) {
          const { state: o, children: e } = n;
          return (0, s.jsx)(S.s3, {
            context: o.floating.context,
            initialFocus: o.initialFocus,
            returnFocus: !1,
            children: e,
          });
        }
        function rt(n) {
          const {
              children: o,
              label: e,
              selected: f,
              onSelect: a,
              ref: l,
              disabled: c,
              ...r
            } = n,
            h = (0, x.useContext)(O),
            { ref: v, index: d } = (0, S.rm)({ label: e }),
            g = (0, S.SV)([l, v]);
          if (!h)
            return (
              console.error(
                "<PopoverListItem> must be a child of <PopoverListRoot>.",
              ),
              null
            );
          const u = d === h.activeIndex,
            L = d === h.selectedIndex || !!f;
          return (0, s.jsx)(N.Option, {
            ref: g,
            selected: L,
            focused: u,
            role: "option",
            tabIndex: 0,
            ...h.getItemProps({
              onClick: c ? void 0 : a,
              onKeyDown: (m) => {
                !c &&
                  (m.key === "Enter" ||
                    (m.key === " " && !h.typingRef.current)) &&
                  (a(m), m.preventDefault(), m.stopPropagation());
              },
              active: u,
              selected: L,
              disabled: c,
              ...r,
            }),
            children: o,
          });
        }
        function ft(n) {
          const {
            open: o,
            activeIndex: e,
            setActiveIndex: f,
            selectedIndex: a,
            setSelectedIndex: l,
            interactions: c = {},
            role: r,
            width: h,
            maxHeight: v,
            gutter: d,
            scroll: g,
          } = n;
          let u = o;
          const L = (0, Q.Pr)(n.presentation),
            m = (0, tt.Pr)(n, u, L),
            R = (0, S.kp)(m.context, { enabled: !!c.click }),
            I = (0, S.iQ)(m.context, { enabled: !!c.focus }),
            C = (0, S.s9)(m.context),
            B = (0, x.useRef)([]),
            J = (0, S.C1)(m.context, {
              listRef: B,
              activeIndex: e,
              selectedIndex: a,
              onNavigate: f,
              virtual: !!c.virtualItemFocus,
              loop: !0,
              focusItemOnOpen: !1,
            }),
            z = (0, x.useRef)([]),
            D = (0, x.useRef)(!1),
            b = (0, S.lY)(m.context, {
              enabled: !!c.typeahead,
              listRef: z,
              activeIndex: e,
              selectedIndex: a,
              onMatch: u ? f : l,
              onTypingChange: (V) => (D.current = V),
            }),
            k = (0, S.It)(m.context, { role: r }),
            {
              getFloatingProps: T,
              getReferenceProps: M,
              getItemProps: y,
            } = (0, S.bv)([k, R, I, C, J, b]);
          return {
            floating: m,
            getFloatingProps: T,
            getReferenceProps: M,
            getItemProps: y,
            open: u,
            activeIndex: e,
            selectedIndex: a,
            setSelectedIndex: l,
            elementsRef: B,
            labelsRef: z,
            typingRef: D,
            initialFocus: c.virtualItemFocus ? -1 : void 0,
            presentation: L,
            sizing: { width: h, maxHeight: v, gutter: d, scroll: g },
          };
        }
        const p = { Root: st, Anchor: lt, Positioner: it, Item: rt };
        var ht = t(86946),
          gt = t(12204),
          U = t(15252),
          ut = t(31857);
        function xt(n) {
          return (0, s.jsx)(ut.I, {
            ...n,
            viewBox: 12,
            children: (0, s.jsx)("path", {
              d: "M10.7068 2.46964L9.53012 1.29297L6.00012 4.81964L2.47012 1.29297L1.29346 2.46964L4.82012 5.99964L1.29346 9.52964L2.47012 10.7063L6.00012 7.17964L9.53012 10.7063L10.7068 9.52964L7.18012 5.99964L10.7068 2.46964Z",
              fill: "currentColor",
            }),
          });
        }
        var Y = t(37901);
        function vt() {
          return (0, Y.A)().languages[0];
        }
        var mt = t(94381),
          St = t(68031),
          Ct = t(80549);
        const i = {};
        (i.arabic = () => t.e(47608).then(t.t.bind(t, 47608, 19))),
          (i.brazilian = () => t.e(29930).then(t.t.bind(t, 29930, 19))),
          (i.bulgarian = () => t.e(48465).then(t.t.bind(t, 48465, 19))),
          (i.czech = () => t.e(14027).then(t.t.bind(t, 14027, 19))),
          (i.danish = () => t.e(19661).then(t.t.bind(t, 19661, 19))),
          (i.dutch = () => t.e(94654).then(t.t.bind(t, 94654, 19))),
          (i.english = () => t.e(83996).then(t.t.bind(t, 83996, 19))),
          (i.finnish = () => t.e(47759).then(t.t.bind(t, 47759, 19))),
          (i.french = () => t.e(37140).then(t.t.bind(t, 37140, 19))),
          (i.german = () => t.e(81194).then(t.t.bind(t, 81194, 19))),
          (i.greek = () => t.e(71744).then(t.t.bind(t, 71744, 19))),
          (i.hungarian = () => t.e(59845).then(t.t.bind(t, 59845, 19))),
          (i.indonesian = () => t.e(30308).then(t.t.bind(t, 30308, 19))),
          (i.italian = () => t.e(51380).then(t.t.bind(t, 51380, 19))),
          (i.japanese = () => t.e(787).then(t.t.bind(t, 787, 19))),
          (i.koreana = () => t.e(36691).then(t.t.bind(t, 36691, 19))),
          (i.latam = () => t.e(21579).then(t.t.bind(t, 21579, 19))),
          (i.malay = () => t.e(83924).then(t.t.bind(t, 83924, 19))),
          (i.norwegian = () => t.e(97284).then(t.t.bind(t, 97284, 19))),
          (i.polish = () => t.e(44373).then(t.t.bind(t, 44373, 19))),
          (i.portuguese = () => t.e(32561).then(t.t.bind(t, 32561, 19))),
          (i.romanian = () => t.e(17423).then(t.t.bind(t, 17423, 19))),
          (i.russian = () => t.e(52757).then(t.t.bind(t, 52757, 19))),
          (i.sc_schinese = () => t.e(30175).then(t.t.bind(t, 30175, 19))),
          (i.schinese = () => t.e(6128).then(t.t.bind(t, 6128, 19))),
          (i.spanish = () => t.e(41052).then(t.t.bind(t, 41052, 19))),
          (i.swedish = () => t.e(95773).then(t.t.bind(t, 95773, 19))),
          (i.tchinese = () => t.e(66563).then(t.t.bind(t, 66563, 19))),
          (i.thai = () => t.e(75178).then(t.t.bind(t, 75178, 19))),
          (i.turkish = () => t.e(14028).then(t.t.bind(t, 14028, 19))),
          (i.ukrainian = () => t.e(90778).then(t.t.bind(t, 90778, 19))),
          (i.vietnamese = () => t.e(1291).then(t.t.bind(t, 1291, 19)));
        async function Lt(n) {
          if (i[n]) return i[n]();
        }
        const Pt = (0, Y.l)(Lt);
        var jt = t(64415);
        function It(n) {
          const {
              children: o,
              state: e,
              placement: f = "bottom-end",
              popoverWidth: a = "dropdown",
              popoverMaxHeight: l,
              popoverPresentation: c,
              popoverLabel: r,
              ...h
            } = n,
            [v, d] = (0, x.useState)(null),
            [g, u] = (0, x.useState)(null),
            L = (0, x.useMemo)(
              () =>
                e.rgOptions.findIndex((C) =>
                  e.multiselect
                    ? e.selectedValue.includes(C)
                    : C === e.selectedValue,
                ),
              [e.selectedValue, e.rgOptions, e.multiselect],
            ),
            m = (0, x.useRef)(null),
            R = {
              ...e,
              ...h,
              focusedValue: v,
              onFocusChange: d,
              refPopover: m,
              popoverLabel: r,
              setOpen: (C) => {
                C && d(e.multiselect ? e.selectedValue[0] : e.selectedValue),
                  e.setOpen(C);
              },
              focusedIndex: g,
              onFocusedIndexChange: u,
            },
            I = ft({
              open: e.bOpen,
              onOpenChange: e.setOpen,
              width: a,
              maxHeight: l,
              placement: f,
              presentation: c,
              selectedIndex: L,
              setSelectedIndex: (C) => e.onItemSelectionChange(e.rgOptions[C]),
              activeIndex: g,
              setActiveIndex: u,
              gutter: "4",
              interactions: { click: !0, typeahead: !0 },
              role: "select",
              scroll: !0,
            });
          return (0, s.jsx)($.Provider, {
            value: R,
            children: (0, s.jsx)(p.Root, { state: I, children: o }),
          });
        }
        function Ot(n) {
          const { refPopover: o, popoverLabel: e } = A("<Select.Options>");
          return (0, s.jsx)(p.Positioner, {
            ref: o,
            label: e,
            children: n.children,
          });
        }
        function pt(n) {
          const { value: o, children: e, disabled: f, ...a } = n,
            {
              onItemSelectionChange: l,
              multiselect: c,
              selectedValue: r,
              maxSelected: h,
            } = A("<SelectTrigger>"),
            v = typeof o == "string" ? o : void 0;
          let d = !1,
            g = !1;
          c
            ? ((d = Array.isArray(r) && r.includes(o)),
              (g = !!h && Array.isArray(r) && r.length >= h))
            : (d = o === r);
          const u = f || (g && !d);
          return (0, s.jsxs)(p.Item, {
            label: v,
            onSelect: () => l(o),
            selected: d,
            disabled: u,
            ...a,
            children: [
              c &&
                (0, s.jsxs)(St.s, {
                  gap: "2",
                  align: "center",
                  children: [
                    (0, s.jsx)(mt.S, { checked: d, variant: "dark" }),
                    e,
                  ],
                }),
              !c && e,
            ],
          });
        }
        function Rt(n) {
          const { children: o, render: e } = n,
            {
              bOpen: f,
              setOpen: a,
              selectedValue: l,
              variant: c,
              size: r,
              radius: h,
              status: v,
              rgOptions: d,
              multiselect: g,
              onClear: u,
              focusedValue: L,
              onFocusChange: m,
              onSelectionChange: R,
              clearable: I,
              focusedIndex: C,
              onItemSelectionChange: B,
              onFocusedIndexChange: J,
              refPopover: z,
              popoverLabel: D,
              placeholder: b,
              maxSelected: k,
              ...T
            } = A("<SelectTrigger>"),
            M = {
              tabIndex: 0,
              role: "combobox",
              onClick: () => a(!f),
              children: o,
            },
            y = g ? Array.isArray(l) && l.length > 0 : !!l,
            V = y && I,
            Dt = V
              ? (0, s.jsx)(xt, { onClick: u, cursor: "pointer", hitSlop: !0 })
              : (0, s.jsx)(gt.V, {}),
            Tt = V
              ? {
                  onSecondaryButton: u,
                  actionDescriptionMap: {
                    [jt.pR.SECONDARY]: Pt.Localize("#Clear"),
                  },
                }
              : void 0,
            Mt = (0, Ct.f)("Select", c),
            Ht = (0, s.jsx)(ht.j, {
              afterContent: Dt,
              variant: Mt,
              size: r,
              radius: h,
              status: v,
              hasValue: y,
              tabIndex: 0,
              cursor: "pointer",
              navProps: Tt,
              ...T,
            }),
            Et = (0, F.Q)(e, Ht, M, void 0);
          return (0, s.jsx)(p.Anchor, { children: Et });
        }
        function yt(n) {
          return (0, s.jsx)(U.EY, {
            weight: "medium",
            truncate: !0,
            contrast: "title",
            children: n.children,
          });
        }
        function Vt(n) {
          return (0, s.jsx)(U.EY, {
            contrast: "description",
            truncate: !0,
            children: n.children,
          });
        }
        function K(n) {
          return W(n, !1);
        }
        function W(n, o) {
          const { onSelectionChange: e, selectedValue: f, ...a } = n,
            [l, c] = (0, x.useState)(!1),
            r = (0, x.useCallback)(
              (d) => {
                e(d), o || c(!1);
              },
              [e, o],
            ),
            h = (0, x.useCallback)(
              (d) => {
                r(o ? [] : null), d?.stopPropagation(), d?.preventDefault();
              },
              [r, o],
            ),
            v = (0, x.useCallback)(
              (d) => {
                if (!o) r(d);
                else {
                  const g = f,
                    u = g.indexOf(d);
                  if (u === -1) r(g.concat(d));
                  else return r(g.slice(0, u).concat(g.slice(u + 1)));
                }
              },
              [r, f, o],
            );
          return {
            onSelectionChange: r,
            onItemSelectionChange: v,
            onClear: h,
            bOpen: l,
            setOpen: c,
            multiselect: o,
            selectedValue: f,
            ...a,
          };
        }
        const X = {
          Root: It,
          Option: pt,
          Options: Ot,
          Trigger: Rt,
          Value: yt,
          Placeholder: Vt,
        };
        function Z(n) {
          return typeof n == "string"
            ? n
            : typeof n == "number"
              ? n.toString()
              : (console.error(
                  "Could not use default option labeler on Select option value. Custom labeler requried",
                  n,
                ),
                "");
        }
        function Ft(n) {
          const {
              selectedValue: o,
              onSelectionChange: e,
              options: f,
              placeholder: a,
              getOptionLabel: l = Z,
              ...c
            } = n,
            r = K({
              onSelectionChange: e,
              selectedValue: o,
              rgOptions: f,
              placeholder: a,
            }),
            h = o != null,
            v = h ? l(o) : "";
          return (0, s.jsxs)(P.Root, {
            state: r,
            ...c,
            children: [
              (0, s.jsxs)(P.Trigger, {
                children: [
                  h && (0, s.jsx)(P.Value, { children: v }),
                  !h && (0, s.jsx)(P.Placeholder, { children: a }),
                ],
              }),
              (0, s.jsx)(P.Options, {
                children: r.rgOptions.map((d, g) =>
                  (0, s.jsx)(P.Option, { value: d, children: l(d) }, g),
                ),
              }),
            ],
          });
        }
        const P = Object.assign(Ft, X);
        function At(n) {
          return W(n, !0);
        }
        const Bt = X;
        function zt(n) {
          const {
              selectedValue: o,
              onSelectionChange: e,
              options: f,
              placeholder: a,
              getOptionLabel: l = Z,
              maxSelected: c,
              ...r
            } = n,
            h = At({
              onSelectionChange: e,
              selectedValue: o,
              rgOptions: f,
              placeholder: a,
              maxSelected: c,
            }),
            v = Array.isArray(o) && o.length > 0;
          let d = "";
          if (v) {
            const g = o.map((u) => l(u));
            "ListFormat" in Intl
              ? (d = new Intl.ListFormat(vt().strISOCode).format(g))
              : (d = g.join(", "));
          }
          return (0, s.jsxs)(j.Root, {
            state: h,
            ...r,
            children: [
              (0, s.jsxs)(j.Trigger, {
                children: [
                  v && (0, s.jsx)(j.Value, { children: d }),
                  !v && (0, s.jsx)(j.Placeholder, { children: a }),
                ],
              }),
              (0, s.jsx)(j.Options, {
                children: h.rgOptions.map((g, u) =>
                  (0, s.jsx)(j.Option, { value: g, children: l(g) }, u),
                ),
              }),
            ],
          });
        }
        const j = Object.assign(zt, Bt),
          $ = (0, x.createContext)(null);
        function A(n) {
          const o = (0, x.useContext)($);
          return o || console.error(`${n} must be used within a <Select>!`), o;
        }
      },
      48093: (H) => {
        H.exports = {
          ListBox: "_1PUg8GjnBeN7rBK-dcyQFl",
          ListBoxOption: "_20oF9tLSfptitLraDOp6X6",
        };
      },
    },
  ]);
})();
