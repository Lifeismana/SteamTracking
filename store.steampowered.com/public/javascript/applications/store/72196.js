/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [72196],
  {
    21895: (e) => {
      e.exports = {
        Root: "_1kIuUssJvopWbHik1IKMG6",
        "Variant-light": "zcrlDqGBY0Lrl7faLFoJI",
        "Variant-dark": "_3b6kFRuG8ILziz88w8GESp",
        "Variant-outline": "wlcXkTKJWe-SE0fCwIRwQ",
        Disabled: "kLcGKsNxkoEqxgok6YzML",
        Checkbox: "_3babFLLB0YYBf8znrlE7Dt",
        Icon: "cngAYeP7ZvFo2pT_v3-xO",
      };
    },
    48093: (e) => {
      e.exports = {
        ListBox: "_1PUg8GjnBeN7rBK-dcyQFl",
        ListBoxOption: "_20oF9tLSfptitLraDOp6X6",
      };
    },
    16619: (e) => {
      e.exports = {
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
    57757: (e, t, n) => {
      "use strict";
      n.d(t, { S: () => u });
      var o = n(7850),
        r = n(83392),
        i = n(40704);
      function s(e) {
        return (0, o.jsx)(i.I, {
          ...e,
          viewBoxSize: 16,
          children: (0, o.jsx)("path", {
            d: "M13.8182 1.94629L5.77816 9.98184L2.40483 6.61296L0.835938 8.18184L5.77816 13.1285L15.387 3.51518L13.8182 1.94629Z",
            fill: "currentColor",
          }),
        });
      }
      var l = n(21895),
        c = n(64238),
        a = n.n(c),
        d = n(66922);
      function u(e) {
        const {
            checked: t,
            onChange: n,
            disabled: i,
            children: c,
            ref: u,
            variant: h,
            color: x,
            align: g = "center",
            ...v
          } = e,
          m = "indeterminate" === t,
          b = m ? f : s,
          w = () => {
            i || (n && n(!!m || !t));
          },
          j = (0, d.f)("Checkbox", h);
        return (0, o.jsxs)(r.s, {
          align: g,
          ref: u,
          role: "checkbox",
          "aria-checked": m ? "mixed" : t,
          "data-state": p(t),
          className: a()(l.Root, l[`Variant-${j}`], i && l.Disabled),
          onClick: w,
          tabIndex: 0,
          onKeyDown: (e) => {
            i ||
              (" " === e.key && (w(), e.preventDefault(), e.stopPropagation()));
          },
          cursor: "default",
          "aria-disabled": i,
          "data-accent-color": x,
          ...v,
          children: [
            (0, o.jsx)("div", {
              className: l.Checkbox,
              children: t && (0, o.jsx)(b, { className: l.Icon }),
            }),
            c,
          ],
        });
      }
      function p(e) {
        return "indeterminate" === e ? e : e ? "checked" : "unchecked";
      }
      function f(e) {
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
    49560: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => S, p: () => j });
      var o = n(7850),
        r = n(90626),
        i = n(73788),
        s = n(8083),
        l = n(94621),
        c = n(8871),
        a = n(45699),
        d = n(85585),
        u = n(7445),
        p = n(81393),
        f = n(64238),
        h = n.n(f),
        x = n(11820),
        g = n(78327);
      const v = (0, r.createContext)(null);
      function m(e) {
        return (0, g.Qn)() ? (0, o.jsx)(b, { ...e }) : (0, o.jsx)(w, { ...e });
      }
      function b(e) {
        const { children: t } = e,
          n = (0, r.useContext)(v);
        (0, p.wT)(
          !!n,
          "<Popover.Positioner> must be a child of <Popover.Root>.",
        );
        const i = r.useRef(void 0);
        return (
          (0, a.O7)(i, !!i.current, !1),
          (0, o.jsx)(d.D6, {
            navID: "Popover",
            onCancelButton: () => n.floating.context.onOpenChange(!1),
            modal: !0,
            navTreeRef: i,
            children: (0, o.jsx)("div", {
              style: { display: "contents" },
              children: (0, o.jsx)(u.q, { children: t }),
            }),
          })
        );
      }
      function w(e) {
        const { children: t } = e,
          n = (0, r.useContext)(v);
        return (
          (0, p.wT)(
            !!n,
            "<Popover.Positioner> must be a child of <Popover.Root>.",
          ),
          (0, o.jsx)(i.s3, {
            context: n.floating.context,
            initialFocus: -1,
            returnFocus: !1,
            children: t,
          })
        );
      }
      function j(e) {
        const { gutter: t = 0, placement: n } = e,
          o = [],
          r = n && "object" == typeof n;
        return (
          r && n.offset
            ? o.push((0, l.cY)(n.offset))
            : (r && void 0 !== n.offset) || o.push((0, l.cY)(2)),
          r && n.flip
            ? o.push((0, l.UU)(n.flip))
            : (r && void 0 !== n.flip) || o.push((0, l.UU)()),
          r && n.shift
            ? o.push((0, l.BN)(n.shift))
            : (r && void 0 !== n.shift) || o.push((0, l.BN)()),
          o.push(
            (0, l.Ej)({
              apply: (n) => {
                const { rects: o, elements: r, availableHeight: i } = n,
                  s = { boxSizing: "border-box", zIndex: "1" };
                switch ((e.scroll && (s.overflowY = "auto"), e.width)) {
                  case "target":
                    s.width = `${o.reference.width}px`;
                    break;
                  case "content":
                    s.width = `${o.floating.width}px`;
                    break;
                  case "dropdown": {
                    let e = o.reference.width;
                    o.floating.width > e && e < 200 && (e = o.floating.width),
                      (s.width = `${e}px`);
                  }
                }
                "function" == typeof e.width &&
                  (s.width = e.width({
                    unContentWidth: o.floating.width,
                    unTargetWidth: o.reference.width,
                  }));
                const l =
                  "number" == typeof t ? `${t}px` : `var(--spacing-${t})`;
                "function" == typeof e.maxHeight
                  ? (s.maxHeight = e.maxHeight({
                      unAvailableHeight: i,
                      gutter: l,
                    }))
                  : "number" == typeof e.maxHeight
                    ? (s.maxHeight = `min( calc( ${i}px - ${l} ), ${e.maxHeight}px )`)
                    : (s.maxHeight =
                        "number" == typeof t
                          ? i - t + "px"
                          : `calc( ${i}px - var(--spacing-${t}) )`),
                  Object.assign(r.floating.style, s),
                  r.floating.style.setProperty(
                    "--popover-max-height",
                    s.maxHeight,
                  );
              },
            }),
          ),
          o
        );
      }
      const S = {
        Root: function (e) {
          const { children: t, ...n } = e,
            r = (function (e) {
              const {
                open: t,
                onOpenChange: n,
                placement: o,
                interactions: r = {},
              } = e;
              let l = t;
              0;
              const c = (0, i.we)({
                  open: l,
                  onOpenChange: n,
                  middleware: j(e),
                  whileElementsMounted: s.ll,
                  placement: o && "object" == typeof o ? o.initial : o,
                  strategy: "fixed",
                  platform: {
                    ...s.iD,
                    getOffsetParent: (e) =>
                      e?.ownerDocument?.defaultView ?? window,
                  },
                }),
                a = { enabled: !!r.click },
                d = "function" == typeof r.click ? r.click(a) : a,
                u = (0, i.kp)(c.context, d),
                p = { enabled: !!r.focus },
                f = "function" == typeof r.focus ? r.focus(p) : p,
                h = (0, i.iQ)(c.context, f),
                x = { handleClose: (0, i.iB)() },
                g = "function" == typeof r.hover ? r.hover(x) : x,
                v = (0, i.Mk)(c.context, { enabled: !!r.hover, ...g }),
                m = (0, i.s9)(c.context),
                { getFloatingProps: b, getReferenceProps: w } = (0, i.bv)([
                  u,
                  h,
                  v,
                  m,
                ]);
              return {
                floating: c,
                getFloatingProps: b,
                getReferenceProps: w,
                open: l,
              };
            })(n);
          return (0, o.jsx)(v.Provider, { value: r, children: t });
        },
        Anchor: function (e) {
          const { children: t } = e,
            n = r.Children.only(t),
            o = (0, r.useContext)(v);
          return n
            ? o
              ? (0, r.cloneElement)(n, {
                  ...o.getReferenceProps(n.props),
                  ref: (0, c.XB)(n.props.ref, o.floating.refs.setReference),
                })
              : (console.error(
                  "<PopoverAnchor> must be a child of <PopoverRoot>.",
                ),
                null)
            : null;
        },
        Positioner: function (e) {
          const { children: t, className: n, ref: s } = e,
            l = (0, r.useContext)(v),
            c = (0, i.SV)([
              s,
              l?.floating.refs.setFloating,
              (e) => e?.showPopover?.(),
            ]);
          if (!l)
            return (
              console.error(
                "<Popover.Positioner> must be a child of <Popover.Root>.",
              ),
              null
            );
          if (!l.open) return null;
          let a = r.Children.only(t),
            d = r.Fragment;
          a.type == S.FocusManager &&
            ((a = r.Children.only(a.props.children)), (d = m));
          const u = (0, r.cloneElement)(a, {
            ref: c,
            style: { ...l.floating.floatingStyles },
            className: h()((0, x.T)(), n),
            popover: "manual",
            ...l.getFloatingProps(),
          });
          return (0, o.jsx)(d, { children: u });
        },
        FocusManager: m,
      };
    },
    71232: (e, t, n) => {
      "use strict";
      n.d(t, { l6: () => B, WM: () => z });
      var o = n(7850),
        r = n(90626),
        i = n(73788),
        s = n(8083),
        l = n(90534),
        c = n(80797),
        a = n(48093);
      const d = Object.assign(
        function (e) {
          const { render: t, ...n } = e;
          return (0, c.Q)(
            t,
            (0, o.jsx)(l.az, {
              radius: "sm",
              background: "dull-8",
              className: a.ListBox,
            }),
            { role: "listbox", ...n },
          );
        },
        {
          Option: function (e) {
            const {
                selected: t,
                focused: n,
                label: r = null,
                render: i,
                disabled: s,
                ...d
              } = e,
              u = t ? "true" : "false",
              p = n ? "true" : void 0;
            return (0, c.Q)(
              i,
              (0, o.jsx)(l.az, {
                focusable: !0,
                "data-selected": u,
                "data-focused": p,
                "aria-disabled": s,
                className: a.ListBoxOption,
                paddingY: "2",
                paddingX: "3",
              }),
              { role: "option", ...d },
              { selected: t, focused: n, disabled: s },
            );
          },
        },
      );
      var u = n(49560),
        p = n(45699),
        f = n(85585),
        h = n(78327);
      const x = (0, r.createContext)(null);
      function g(e) {
        return (0, h.Qn)() ? (0, o.jsx)(v, { ...e }) : (0, o.jsx)(m, { ...e });
      }
      function v(e) {
        const { state: t, children: n } = e,
          i = r.useRef(void 0);
        return (
          (0, p.O7)(i, !!i.current, !1),
          (0, o.jsx)(f.D6, {
            navID: "PopoverList",
            onCancelButton: () => t.floating.context.onOpenChange(!1),
            modal: !0,
            navTreeRef: i,
            children: n,
          })
        );
      }
      function m(e) {
        const { state: t, children: n } = e;
        return (0, o.jsx)(i.s3, {
          context: t.floating.context,
          initialFocus: t.initialFocus,
          returnFocus: !1,
          children: n,
        });
      }
      const b = function (e) {
          const { children: t, state: n } = e;
          return (0, o.jsx)(x.Provider, { value: n, children: t });
        },
        w = function (e) {
          const { children: t } = e,
            n = r.Children.only(t),
            o = (0, r.useContext)(x),
            s = (0, i.SV)([o?.floating.refs.setReference, n?.props.ref]);
          if (!n) return null;
          if (!o)
            return (
              console.error(
                "<PopoverListAnchor> must be a child of <PopoverListRoot>.",
              ),
              null
            );
          const { ref: l, ...c } = n.props;
          return (0, r.cloneElement)(n, { ref: s, ...o.getReferenceProps(c) });
        },
        j = function (e) {
          const { children: t, render: n, ref: s } = e,
            l = (0, r.useContext)(x),
            c = (0, i.SV)([
              s,
              l?.floating.refs.setFloating,
              (e) => e?.showPopover?.(),
            ]);
          return l
            ? l.open
              ? (0, o.jsx)(g, {
                  state: l,
                  children: (0, o.jsx)(d, {
                    ref: c,
                    style: l.floating.floatingStyles,
                    ...l.getFloatingProps({ popover: "manual" }),
                    render: n,
                    children: (0, o.jsx)(i.ph, {
                      elementsRef: l.elementsRef,
                      labelsRef: l.labelsRef,
                      children: t,
                    }),
                  }),
                })
              : null
            : (console.error(
                "<PopoverListPositioner> must be a child of <PopoverListRoot>.",
              ),
              null);
        },
        S = function (e) {
          const {
              children: t,
              label: n,
              selected: s,
              onSelect: l,
              ref: c,
              disabled: a,
              ...u
            } = e,
            p = (0, r.useContext)(x),
            { ref: f, index: h } = (0, i.rm)({ label: n }),
            g = (0, i.SV)([c, f]);
          if (!p)
            return (
              console.error(
                "<PopoverListItem> must be a child of <PopoverListRoot>.",
              ),
              null
            );
          const v = h === p.activeIndex,
            m = h === p.selectedIndex || !!s;
          return (0, o.jsx)(d.Option, {
            ref: g,
            selected: m,
            focused: v,
            role: "option",
            tabIndex: 0,
            ...p.getItemProps({
              onClick: a ? void 0 : l,
              onKeyDown: (e) => {
                a ||
                  ("Enter" !== e.key &&
                    (" " !== e.key || p.typingRef.current)) ||
                  (l(e), e.preventDefault(), e.stopPropagation());
              },
              active: v,
              selected: m,
              disabled: a,
              ...u,
            }),
            children: t,
          });
        };
      var C = n(61023),
        I = n(40704);
      const L = {
        up: "rotate( 180, 10, 10 )",
        left: "rotate( 90, 10, 10 )",
        right: "rotate( 270, 10, 10 )",
      };
      function P(e) {
        const { direction: t = "down" } = e,
          n = L[t];
        return (0, o.jsx)(I.I, {
          ...e,
          children: (0, o.jsx)("path", {
            transform: n,
            d: "M5.14541 6.89977L10.0063 12.2027L14.8671 6.89977C15.3557 6.36674 16.145 6.36674 16.6336 6.89977C17.1221 7.4328 17.1221 8.29385 16.6336 8.82688L10.8832 15.1002C10.3946 15.6333 9.60537 15.6333 9.11678 15.1002L3.36644 8.82688C2.87785 8.29385 2.87785 7.4328 3.36644 6.89977C3.85503 6.38041 4.65682 6.36674 5.14541 6.89977Z",
            fill: "currentColor",
          }),
        });
      }
      var y = n(20187);
      function O(e) {
        return (0, o.jsx)(I.I, {
          ...e,
          viewBoxSize: 12,
          children: (0, o.jsx)("path", {
            d: "M10.7068 2.46964L9.53012 1.29297L6.00012 4.81964L2.47012 1.29297L1.29346 2.46964L4.82012 5.99964L1.29346 9.52964L2.47012 10.7063L6.00012 7.17964L9.53012 10.7063L10.7068 9.52964L7.18012 5.99964L10.7068 2.46964Z",
            fill: "currentColor",
          }),
        });
      }
      var R = n(13843);
      var k = n(57757),
        F = n(83392),
        V = n(66922);
      function z(e) {
        return _(e, !1);
      }
      function _(e, t) {
        const { onSelectionChange: n, selectedValue: o, ...i } = e,
          [s, l] = (0, r.useState)(!1),
          c = (0, r.useCallback)(
            (e) => {
              n(e), t || l(!1);
            },
            [n, t],
          ),
          a = (0, r.useCallback)(
            (e) => {
              c(t ? [] : null), e.stopPropagation(), e.preventDefault();
            },
            [c, t],
          ),
          d = (0, r.useCallback)(
            (e) => {
              if (t) {
                const t = o,
                  n = t.indexOf(e);
                if (-1 !== n) return c(t.slice(0, n).concat(t.slice(n + 1)));
                c(t.concat(e));
              } else c(e);
            },
            [c, o, t],
          );
        return {
          onSelectionChange: c,
          onItemSelectionChange: d,
          onClear: a,
          bOpen: s,
          setOpen: l,
          multiselect: t,
          selectedValue: o,
          ...i,
        };
      }
      const D = {
        Root: function (e) {
          const {
              children: t,
              state: n,
              placement: l = "bottom-end",
              popoverWidth: c = "dropdown",
              popoverMaxHeight: a,
              ...d
            } = e,
            [p, f] = (0, r.useState)(null),
            [h, x] = (0, r.useState)(null),
            g = (0, r.useMemo)(
              () =>
                n.rgOptions.findIndex((e) =>
                  n.multiselect
                    ? n.selectedValue.includes(e)
                    : e === n.selectedValue,
                ),
              [n.selectedValue, n.rgOptions, n.multiselect],
            ),
            v = (0, r.useRef)(null),
            m = {
              ...n,
              ...d,
              focusedValue: p,
              onFocusChange: f,
              refPopover: v,
              setOpen: (e) => {
                e && f(n.multiselect ? n.selectedValue[0] : n.selectedValue),
                  n.setOpen(e);
              },
              focusedIndex: h,
              onFocusedIndexChange: x,
            },
            w = (function (e) {
              const {
                open: t,
                onOpenChange: n,
                activeIndex: o,
                setActiveIndex: l,
                selectedIndex: c,
                setSelectedIndex: a,
                interactions: d = {},
                role: p,
                placement: f,
              } = e;
              let h = t;
              const x = (0, i.we)({
                  open: h,
                  onOpenChange: n,
                  middleware: (0, u.p)(e),
                  whileElementsMounted: s.ll,
                  placement: f && "object" == typeof f ? f.initial : f,
                  strategy: "fixed",
                  platform: {
                    ...s.iD,
                    getOffsetParent: (e) =>
                      e?.ownerDocument?.defaultView ?? window,
                  },
                }),
                g = (0, i.kp)(x.context, { enabled: !!d.click }),
                v = (0, i.iQ)(x.context, { enabled: !!d.focus }),
                m = (0, i.s9)(x.context),
                b = (0, r.useRef)([]),
                w = (0, i.C1)(x.context, {
                  listRef: b,
                  activeIndex: o,
                  selectedIndex: c,
                  onNavigate: l,
                  virtual: !!d.virtualItemFocus,
                  loop: !0,
                  focusItemOnOpen: !1,
                }),
                j = (0, r.useRef)([]),
                S = (0, r.useRef)(!1),
                C = (0, i.lY)(x.context, {
                  enabled: !!d.typeahead,
                  listRef: j,
                  activeIndex: o,
                  selectedIndex: c,
                  onMatch: h ? l : a,
                  onTypingChange: (e) => (S.current = e),
                }),
                I = (0, i.It)(x.context, { role: p }),
                {
                  getFloatingProps: L,
                  getReferenceProps: P,
                  getItemProps: y,
                } = (0, i.bv)([I, g, v, m, w, C]);
              return {
                floating: x,
                getFloatingProps: L,
                getReferenceProps: P,
                getItemProps: y,
                open: h,
                activeIndex: o,
                selectedIndex: c,
                setSelectedIndex: a,
                elementsRef: b,
                labelsRef: j,
                typingRef: S,
                initialFocus: d.virtualItemFocus ? -1 : void 0,
              };
            })({
              open: n.bOpen,
              onOpenChange: n.setOpen,
              width: c,
              maxHeight: a,
              placement: l,
              selectedIndex: g,
              setSelectedIndex: (e) => n.onItemSelectionChange(n.rgOptions[e]),
              activeIndex: h,
              setActiveIndex: x,
              gutter: "4",
              interactions: { click: !0, typeahead: !0 },
              role: "select",
              scroll: !0,
            });
          return (0, o.jsx)(A.Provider, {
            value: m,
            children: (0, o.jsx)(b, { state: w, children: t }),
          });
        },
        Option: function (e) {
          const { value: t, children: n, disabled: r, ...i } = e,
            {
              onItemSelectionChange: s,
              multiselect: l,
              selectedValue: c,
              maxSelected: a,
            } = N("<SelectTrigger>"),
            d = "string" == typeof t ? t : void 0;
          let u = !1,
            p = !1;
          l
            ? ((u = Array.isArray(c) && c.includes(t)),
              (p = !!a && Array.isArray(c) && c.length >= a))
            : (u = t === c);
          const f = r || (p && !u);
          return (0, o.jsxs)(S, {
            label: d,
            onSelect: () => s(t),
            selected: u,
            disabled: f,
            ...i,
            children: [
              l &&
                (0, o.jsxs)(F.s, {
                  gap: "2",
                  align: "center",
                  children: [
                    (0, o.jsx)(k.S, { checked: u, variant: "dark" }),
                    n,
                  ],
                }),
              !l && n,
            ],
          });
        },
        Options: function (e) {
          const { refPopover: t } = N("<Select.Options>");
          return (0, o.jsx)(j, { ref: t, children: e.children });
        },
        Trigger: function (e) {
          const { children: t, render: n } = e,
            {
              bOpen: r,
              setOpen: i,
              selectedValue: s,
              variant: l,
              size: a,
              radius: d,
              status: u,
              rgOptions: p,
              multiselect: f,
              onClear: h,
              focusedValue: x,
              onFocusChange: g,
              onSelectionChange: v,
              clearable: m,
              focusedIndex: b,
              onItemSelectionChange: j,
              onFocusedIndexChange: S,
              refPopover: I,
              placeholder: L,
              maxSelected: y,
              ...R
            } = N("<SelectTrigger>"),
            k = {
              tabIndex: 0,
              role: "combobox",
              onClick: () => i(!r),
              children: t,
            },
            F = f ? Array.isArray(s) && s.length > 0 : !!s,
            z =
              F && m
                ? (0, o.jsx)(O, { onClick: h, cursor: "pointer", hitSlop: !0 })
                : (0, o.jsx)(P, {}),
            _ = (0, V.f)("Select", l),
            D = (0, o.jsx)(C.j, {
              afterContent: z,
              variant: _,
              size: a,
              radius: d,
              status: u,
              hasValue: F,
              tabIndex: 0,
              cursor: "pointer",
              ...R,
            }),
            T = (0, c.Q)(n, D, k, void 0);
          return (0, o.jsx)(w, { children: T });
        },
        Value: function (e) {
          return (0, o.jsx)(y.EY, {
            weight: "medium",
            truncate: !0,
            contrast: "title",
            children: e.children,
          });
        },
        Placeholder: function (e) {
          return (0, o.jsx)(y.EY, {
            contrast: "description",
            truncate: !0,
            children: e.children,
          });
        },
      };
      function T(e) {
        return "string" == typeof e
          ? e
          : "number" == typeof e
            ? e.toString()
            : (console.error(
                "Could not use default option labeler on Select option value. Custom labeler requried",
                e,
              ),
              "");
      }
      const B = Object.assign(function (e) {
        const {
            selectedValue: t,
            onSelectionChange: n,
            options: r,
            placeholder: i,
            getOptionLabel: s = T,
            ...l
          } = e,
          c = z({
            onSelectionChange: n,
            selectedValue: t,
            rgOptions: r,
            placeholder: i,
          }),
          a = null != t,
          d = a ? s(t) : "";
        return (0, o.jsxs)(B.Root, {
          state: c,
          ...l,
          children: [
            (0, o.jsxs)(B.Trigger, {
              children: [
                a && (0, o.jsx)(B.Value, { children: d }),
                !a && (0, o.jsx)(B.Placeholder, { children: i }),
              ],
            }),
            (0, o.jsx)(B.Options, {
              children: c.rgOptions.map((e, t) =>
                (0, o.jsx)(B.Option, { value: e, children: s(e) }, t),
              ),
            }),
          ],
        });
      }, D);
      const E = D;
      const H = Object.assign(function (e) {
          const {
              selectedValue: t,
              onSelectionChange: n,
              options: r,
              placeholder: i,
              getOptionLabel: s = T,
              maxSelected: l,
              ...c
            } = e,
            a = (function (e) {
              return _(e, !0);
            })({
              onSelectionChange: n,
              selectedValue: t,
              rgOptions: r,
              placeholder: i,
              maxSelected: l,
            }),
            d = Array.isArray(t) && t.length > 0;
          let u = "";
          if (d) {
            const e = t.map((e) => s(e));
            u =
              "ListFormat" in Intl
                ? new Intl.ListFormat(
                    (0, R.A)().languages[0].strISOCode,
                  ).format(e)
                : e.join(", ");
          }
          return (0, o.jsxs)(H.Root, {
            state: a,
            ...c,
            children: [
              (0, o.jsxs)(H.Trigger, {
                children: [
                  d && (0, o.jsx)(H.Value, { children: u }),
                  !d && (0, o.jsx)(H.Placeholder, { children: i }),
                ],
              }),
              (0, o.jsx)(H.Options, {
                children: a.rgOptions.map((e, t) =>
                  (0, o.jsx)(H.Option, { value: e, children: s(e) }, t),
                ),
              }),
            ],
          });
        }, E),
        A = (0, r.createContext)(null);
      function N(e) {
        const t = (0, r.useContext)(A);
        return t || console.error(`${e} must be used within a <Select>!`), t;
      }
    },
    40704: (e, t, n) => {
      "use strict";
      n.d(t, { I: () => l });
      var o = n(7850),
        r = n(11526),
        i = n(75659),
        s = n(16619);
      function l(e) {
        const { viewBoxSize: t = 20, ...n } = e,
          i = n.size ? void 0 : s.IconSizeDefault;
        return (0, o.jsx)("svg", {
          viewBox: `0 0 ${t} ${t}`,
          ...(0, r.mz)({ className: i, ...n }, c),
        });
      }
      const c = [
        ...i.L,
        { prop: "size", responsive: !0, className: (e) => s[`IconSize-${e}`] },
        {
          prop: "color",
          className: s.Color,
          cssProperty: (e) => ["--icon-color", (0, r.w7)(e)],
        },
        {
          prop: "hitSlop",
          className: s.HitSlop,
          cssProperty: (e) => [
            "--hit-slop-custom",
            "string" == typeof e ? e : "",
          ],
        },
        i.h.find(({ prop: e }) => "cursor" === e),
      ];
    },
    20433: (e, t, n) => {
      "use strict";
      n.d(t, { j: () => f, u: () => h });
      var o = n(7850),
        r = n(90626),
        i = n(45699),
        s = n(55963),
        l = n(60014),
        c = n(49411),
        a = n(61336),
        d = n(52541),
        u = n(66418);
      n(78327);
      function p(e) {
        if (e) {
          if ("appid" in e) return "app";
          if ("bundleid" in e) return "bundle";
          if ("packageid" in e) return "sub";
        }
      }
      function f(e) {
        const {
            id: t,
            hoverClassName: n,
            fnGetIDOverride: i,
            fnHoverState: s,
            disableScreenshots: l,
            children: c,
          } = e,
          a = r.useRef(null),
          u = r.useCallback(
            (e) => {
              const n = p(t);
              n &&
                (s && s(!0),
                window.GameHover &&
                  (a.current &&
                    l &&
                    (a.current.dataset.hoverDisableScreenshots = "true"),
                  window.GameHover(i ? i() : a.current, e, "global_hover", {
                    type: n,
                    id: (0, d.G$)(t).id,
                    v6: 1,
                  })));
            },
            [s, i, l, t],
          ),
          f = r.useCallback(
            (e) => {
              p(t) &&
                (s && e.relatedTarget && s(!1),
                window.HideGameHover &&
                  window.HideGameHover(i ? i() : a.current, e, "global_hover"));
            },
            [t, s, i],
          );
        return (0, o.jsx)("div", {
          ref: a,
          className: n,
          onMouseEnter: u,
          onMouseLeave: f,
          onFocus: u,
          onBlur: f,
          children: c,
        });
      }
      function h(e) {
        const {
            id: t,
            strExtraParams: n,
            fnOnClickOverride: r,
            strOverrideURL: h,
          } = e,
          x = (0, l.n9)(),
          g = (0, c.w)(),
          v = (0, a.NT)(
            h ||
              (t && "creatorid" in t
                ? (0, s.It)(
                    `${u.TS.STORE_BASE_URL}curator/${((0, d.G$))(t).id}${n ? `?${n}` : ""}`,
                    x,
                    g,
                  )
                : (0, s.It)(
                    `${u.TS.STORE_BASE_URL}${p(t)}/${((0, d.G$))(t).id}${n ? `?${n}` : ""}`,
                    x,
                    g,
                  )),
          );
        return (0, o.jsx)(f, {
          ...e,
          children: (0, o.jsx)(i.Ii, {
            className: e.className,
            href: r ? void 0 : v,
            target: u.TS.IN_CLIENT || r ? void 0 : "_blank",
            rel: "noopener noreferrer",
            onClick: r,
            children: e.children,
          }),
        });
      }
    },
    82477: (e, t, n) => {
      "use strict";
      n.d(t, { Cg: () => h, pZ: () => g, vg: () => x });
      var o = n(7850),
        r = n(90626),
        i = n(738),
        s = n(61859),
        l = n(78327),
        c = n(92120),
        a = n(51883),
        d = n(72034),
        u = n(28240),
        p = n(74568);
      function f(e) {
        return (0, o.jsx)(i.x_, {
          onEscKeypress: e.closeModal,
          bDisableBackgroundDismiss: !0,
          children: (0, o.jsx)(v, {
            redirectURL: e.redirectURL,
            guestOption: e.guestOption,
          }),
        });
      }
      function h(e) {
        const { redirectURL: t = window.location.href } = e;
        return (0, o.jsx)(p.EN, {
          active: !0,
          children: (0, o.jsx)(f, { redirectURL: t }),
        });
      }
      function x() {
        (0, i.pg)(
          (0, o.jsx)(f, {
            ownerWin: window,
            redirectURL: window.location.href,
          }),
          window,
          { strTitle: (0, s.we)("#Login_SignInTitle") },
        );
      }
      function g(e, t) {
        (0, i.pg)(
          (0, o.jsx)(f, { ownerWin: window, redirectURL: e, guestOption: t }),
          window,
          { strTitle: (0, s.we)("#Login_SignInTitle") },
        );
      }
      function v(e) {
        const { redirectURL: t, guestOption: n } = e,
          [i] = (0, r.useState)(
            new d.D(l.TS.WEBAPI_BASE_URL).GetAnonymousServiceTransport(),
          ),
          [s, p] = (0, r.useState)(!1);
        return (0, o.jsx)("div", {
          children: s
            ? (0, o.jsx)(c.Fn, {})
            : (0, o.jsx)(c.YN, {
                autoFocus: !0,
                transport: i,
                platform: a.SS.tS,
                onComplete: (e) => {
                  e == u.wI.k_PrimaryDomainFail
                    ? p(!0)
                    : window.location.assign(t);
                },
                redirectUrl: t,
                theme: "modal",
                children: n && (0, o.jsx)(c.Mk, { redirectURL: t }),
              }),
        });
      }
    },
  },
]);
