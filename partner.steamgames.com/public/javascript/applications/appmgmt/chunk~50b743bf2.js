/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [7845],
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
    38878: (e) => {
      e.exports = {
        "Variant-basic": "xqG5GdDEeYauX2ots2DLl",
        "Size-3": "_1K_Ve980-qBq8l1-cZJdw1",
        "Variant-inset": "_2Z-Zr4UW8-jHrU5olM_rpn",
        "Variant-inset-focus": "_2RYWJyn7v0tvoY5cR63QuI",
        Focusable: "_1cd-wdIp5lIWsydAxII-vY",
        "Variant-inset-glass": "_32JdL4FubsmwHfHXm6OB9I",
        "Variant-underline": "yV_Aq5WutzzittgbOJ1R-",
        "Variant-dim": "_2qQgKJgeeqc9lEI-i7HdsM",
        "Variant-highlight": "EFvA4gLIikUE06LDGCqg5",
        ControlBox: "_2gL71Yq-HzVI9oOGyWu3jH",
        Hoverable: "_8JNTStqpIYaMWQJx6g6hK",
        Clickable: "_1KONo9A0HE0_NOK2F6uvXy",
        Disabled: "_2I6xXve3oCxh8fra7SWTnq",
        "Size-1": "_2e1xlPghh48rkP13ydQOPb",
        "Size-2": "B7HtDxiiORArIRcBR9kVB",
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
            variant: f,
            color: x,
            align: g = "center",
            ...m
          } = e,
          v = "indeterminate" === t,
          b = v ? h : s,
          I = () => {
            i || (n && n(!!v || !t));
          },
          C = (0, d.f)("Checkbox", f);
        return (0, o.jsxs)(r.s, {
          align: g,
          ref: u,
          role: "checkbox",
          "aria-checked": v ? "mixed" : t,
          "data-state": p(t),
          className: a()(l.Root, l[`Variant-${C}`], i && l.Disabled),
          onClick: I,
          tabIndex: 0,
          onKeyDown: (e) => {
            i ||
              (" " === e.key && (I(), e.preventDefault(), e.stopPropagation()));
          },
          cursor: "default",
          "aria-disabled": i,
          "data-accent-color": x,
          ...m,
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
      function h(e) {
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
    61023: (e, t, n) => {
      "use strict";
      n.d(t, { j: () => u, w: () => p });
      var o = n(7850),
        r = n(64238),
        i = n.n(r),
        s = n(38878),
        l = n(90534),
        c = n(83392),
        a = n(75659),
        d = n(11526);
      function u(e) {
        const {
            children: t,
            beforeContent: n,
            afterContent: r,
            hasValue: i,
            ...s
          } = e,
          a = p(s);
        return (0, o.jsxs)(c.s, {
          ...a,
          align: "center",
          "data-has-value": !!i,
          children: [
            n && (0, o.jsx)(c.s, { paddingRight: "2", children: n }),
            (0, o.jsx)(l.az, { flexGrow: "1", minWidth: "0", children: t }),
            r && (0, o.jsx)(c.s, { paddingLeft: "2", children: r }),
          ],
        });
      }
      function p(e) {
        const {
            variant: t = "basic",
            size: n = "2",
            radius: o,
            focusable: r = !0,
            hoverable: l = !0,
            clickable: c = !0,
            disabled: u,
            className: p,
            ...h
          } = e,
          f = "underline" === t ? "none" : o;
        return (0, d.mz)(
          {
            ...h,
            radius: f,
            className: i()(
              s.ControlBox,
              r && !u && s.Focusable,
              l && !u && s.Hoverable,
              c && !u && s.Clickable,
              u && s.Disabled,
              s[`Variant-${t}`],
              s[`Size-${n}`],
              p,
            ),
          },
          a.h,
        );
      }
    },
    17394: (e, t, n) => {
      "use strict";
      n.d(t, { k: () => C, T: () => I });
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
      var u = n(94621),
        p = (n(8871), n(45699)),
        h = n(85585),
        f = (n(7445), n(81393), n(64238), n(11820), n(78327));
      (0, r.createContext)(null);
      function x(e) {
        const { gutter: t = 0, placement: n } = e,
          o = [],
          r = n && "object" == typeof n;
        return (
          r && n.offset
            ? o.push((0, u.cY)(n.offset))
            : (r && void 0 !== n.offset) || o.push((0, u.cY)(2)),
          r && n.flip
            ? o.push((0, u.UU)(n.flip))
            : (r && void 0 !== n.flip) || o.push((0, u.UU)()),
          r && n.shift
            ? o.push((0, u.BN)(n.shift))
            : (r && void 0 !== n.shift) || o.push((0, u.BN)()),
          o.push(
            (0, u.Ej)({
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
      const g = (0, r.createContext)(null);
      function m(e) {
        return (0, f.Qn)() ? (0, o.jsx)(v, { ...e }) : (0, o.jsx)(b, { ...e });
      }
      function v(e) {
        const { state: t, children: n } = e,
          i = r.useRef(void 0);
        return (
          (0, p.O7)(i, !!i.current, !1),
          (0, o.jsx)(h.D6, {
            navID: "PopoverList",
            onCancelButton: () => t.floating.context.onOpenChange(!1),
            modal: !0,
            navTreeRef: i,
            children: n,
          })
        );
      }
      function b(e) {
        const { state: t, children: n } = e;
        return (0, o.jsx)(i.s3, {
          context: t.floating.context,
          initialFocus: t.initialFocus,
          returnFocus: !1,
          children: n,
        });
      }
      function I(e) {
        const {
          open: t,
          onOpenChange: n,
          activeIndex: o,
          setActiveIndex: l,
          selectedIndex: c,
          setSelectedIndex: a,
          interactions: d = {},
          role: u,
          placement: p,
        } = e;
        let h = t;
        const f = (0, i.we)({
            open: h,
            onOpenChange: n,
            middleware: x(e),
            whileElementsMounted: s.ll,
            placement: p && "object" == typeof p ? p.initial : p,
            strategy: "fixed",
            platform: {
              ...s.iD,
              getOffsetParent: (e) => e?.ownerDocument?.defaultView ?? window,
            },
          }),
          g = (0, i.kp)(f.context, { enabled: !!d.click }),
          m = (0, i.iQ)(f.context, { enabled: !!d.focus }),
          v = (0, i.s9)(f.context),
          b = (0, r.useRef)([]),
          I = (0, i.C1)(f.context, {
            listRef: b,
            activeIndex: o,
            selectedIndex: c,
            onNavigate: l,
            virtual: !!d.virtualItemFocus,
            loop: !0,
            focusItemOnOpen: !1,
          }),
          C = (0, r.useRef)([]),
          S = (0, r.useRef)(!1),
          j = (0, i.lY)(f.context, {
            enabled: !!d.typeahead,
            listRef: C,
            activeIndex: o,
            selectedIndex: c,
            onMatch: h ? l : a,
            onTypingChange: (e) => (S.current = e),
          }),
          w = (0, i.It)(f.context, { role: u }),
          {
            getFloatingProps: L,
            getReferenceProps: y,
            getItemProps: k,
          } = (0, i.bv)([w, g, m, v, I, j]);
        return {
          floating: f,
          getFloatingProps: L,
          getReferenceProps: y,
          getItemProps: k,
          open: h,
          activeIndex: o,
          selectedIndex: c,
          setSelectedIndex: a,
          elementsRef: b,
          labelsRef: C,
          typingRef: S,
          initialFocus: d.virtualItemFocus ? -1 : void 0,
        };
      }
      const C = {
        Root: function (e) {
          const { children: t, state: n } = e;
          return (0, o.jsx)(g.Provider, { value: n, children: t });
        },
        Anchor: function (e) {
          const { children: t } = e,
            n = r.Children.only(t),
            o = (0, r.useContext)(g),
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
        Positioner: function (e) {
          const { children: t, render: n, ref: s } = e,
            l = (0, r.useContext)(g),
            c = (0, i.SV)([
              s,
              l?.floating.refs.setFloating,
              (e) => e?.showPopover?.(),
            ]);
          return l
            ? l.open
              ? (0, o.jsx)(m, {
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
        Item: function (e) {
          const {
              children: t,
              label: n,
              selected: s,
              onSelect: l,
              ref: c,
              disabled: a,
              ...u
            } = e,
            p = (0, r.useContext)(g),
            { ref: h, index: f } = (0, i.rm)({ label: n }),
            x = (0, i.SV)([c, h]);
          if (!p)
            return (
              console.error(
                "<PopoverListItem> must be a child of <PopoverListRoot>.",
              ),
              null
            );
          const m = f === p.activeIndex,
            v = f === p.selectedIndex || !!s;
          return (0, o.jsx)(d.Option, {
            ref: x,
            selected: v,
            focused: m,
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
              active: m,
              selected: v,
              disabled: a,
              ...u,
            }),
            children: t,
          });
        },
      };
    },
    11967: (e, t, n) => {
      "use strict";
      n.d(t, { WM: () => x, l6: () => b, uh: () => C });
      var o = n(7850),
        r = n(90626),
        i = n(17394),
        s = n(61023),
        l = n(89047),
        c = n(20187),
        a = n(77914),
        d = n(80797),
        u = n(14181),
        p = n(57757),
        h = n(83392),
        f = n(66922);
      function x(e) {
        return g(e, !1);
      }
      function g(e, t) {
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
      const m = {
        Root: function (e) {
          const {
              children: t,
              state: n,
              placement: s = "bottom-end",
              popoverWidth: l = "dropdown",
              popoverMaxHeight: c,
              ...a
            } = e,
            [d, u] = (0, r.useState)(null),
            [p, h] = (0, r.useState)(null),
            f = (0, r.useMemo)(
              () =>
                n.rgOptions.findIndex((e) =>
                  n.multiselect
                    ? n.selectedValue.includes(e)
                    : e === n.selectedValue,
                ),
              [n.selectedValue, n.rgOptions, n.multiselect],
            ),
            x = (0, r.useRef)(null),
            g = {
              ...n,
              ...a,
              focusedValue: d,
              onFocusChange: u,
              refPopover: x,
              setOpen: (e) => {
                e && u(n.multiselect ? n.selectedValue[0] : n.selectedValue),
                  n.setOpen(e);
              },
              focusedIndex: p,
              onFocusedIndexChange: h,
            },
            m = (0, i.T)({
              open: n.bOpen,
              onOpenChange: n.setOpen,
              width: l,
              maxHeight: c,
              placement: s,
              selectedIndex: f,
              setSelectedIndex: (e) => n.onItemSelectionChange(n.rgOptions[e]),
              activeIndex: p,
              setActiveIndex: h,
              gutter: "4",
              interactions: { click: !0, typeahead: !0 },
              role: "select",
              scroll: !0,
            });
          return (0, o.jsx)(S.Provider, {
            value: g,
            children: (0, o.jsx)(i.k.Root, { state: m, children: t }),
          });
        },
        Option: function (e) {
          const { value: t, children: n, disabled: r, ...s } = e,
            {
              onItemSelectionChange: l,
              multiselect: c,
              selectedValue: a,
              maxSelected: d,
            } = j("<SelectTrigger>"),
            u = "string" == typeof t ? t : void 0;
          let f = !1,
            x = !1;
          c
            ? ((f = Array.isArray(a) && a.includes(t)),
              (x = !!d && Array.isArray(a) && a.length >= d))
            : (f = t === a);
          const g = r || (x && !f);
          return (0, o.jsxs)(i.k.Item, {
            label: u,
            onSelect: () => l(t),
            selected: f,
            disabled: g,
            ...s,
            children: [
              c &&
                (0, o.jsxs)(h.s, {
                  gap: "2",
                  align: "center",
                  children: [
                    (0, o.jsx)(p.S, { checked: f, variant: "dark" }),
                    n,
                  ],
                }),
              !c && n,
            ],
          });
        },
        Options: function (e) {
          const { refPopover: t } = j("<Select.Options>");
          return (0, o.jsx)(i.k.Positioner, { ref: t, children: e.children });
        },
        Trigger: function (e) {
          const { children: t, render: n } = e,
            {
              bOpen: r,
              setOpen: c,
              selectedValue: u,
              variant: p,
              size: h,
              radius: x,
              rgOptions: g,
              multiselect: m,
              onClear: v,
              focusedValue: b,
              onFocusChange: I,
              onSelectionChange: C,
              clearable: S,
              focusedIndex: w,
              onItemSelectionChange: L,
              onFocusedIndexChange: y,
              refPopover: k,
              placeholder: O,
              maxSelected: V,
              ...P
            } = j("<SelectTrigger>"),
            z = {
              tabIndex: 0,
              role: "combobox",
              onClick: () => c(!r),
              children: t,
            },
            R = m ? Array.isArray(u) && u.length > 0 : !!u,
            F =
              R && S
                ? (0, o.jsx)(a.g, {
                    onClick: v,
                    cursor: "pointer",
                    hitSlop: !0,
                  })
                : (0, o.jsx)(l.V, {}),
            _ = (0, f.f)("Select", p),
            H = (0, o.jsx)(s.j, {
              afterContent: F,
              variant: _,
              size: h,
              radius: x,
              hasValue: R,
              tabIndex: 0,
              cursor: "pointer",
              ...P,
            }),
            B = (0, d.Q)(n, H, z, void 0);
          return (0, o.jsx)(i.k.Anchor, { children: B });
        },
        Value: function (e) {
          return (0, o.jsx)(c.EY, {
            weight: "medium",
            truncate: !0,
            contrast: "title",
            children: e.children,
          });
        },
        Placeholder: function (e) {
          return (0, o.jsx)(c.EY, {
            contrast: "description",
            truncate: !0,
            children: e.children,
          });
        },
      };
      function v(e) {
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
      const b = Object.assign(function (e) {
        const {
            selectedValue: t,
            onSelectionChange: n,
            options: r,
            placeholder: i,
            getOptionLabel: s = v,
            ...l
          } = e,
          c = x({
            onSelectionChange: n,
            selectedValue: t,
            rgOptions: r,
            placeholder: i,
          }),
          a = null != t,
          d = a ? s(t) : "";
        return (0, o.jsxs)(b.Root, {
          state: c,
          ...l,
          children: [
            (0, o.jsxs)(b.Trigger, {
              children: [
                a && (0, o.jsx)(b.Value, { children: d }),
                !a && (0, o.jsx)(b.Placeholder, { children: i }),
              ],
            }),
            (0, o.jsx)(b.Options, {
              children: c.rgOptions.map((e, t) =>
                (0, o.jsx)(b.Option, { value: e, children: s(e) }, t),
              ),
            }),
          ],
        });
      }, m);
      const I = m;
      const C = Object.assign(function (e) {
          const {
              selectedValue: t,
              onSelectionChange: n,
              options: r,
              placeholder: i,
              getOptionLabel: s = v,
              maxSelected: l,
              ...c
            } = e,
            a = (function (e) {
              return g(e, !0);
            })({
              onSelectionChange: n,
              selectedValue: t,
              rgOptions: r,
              placeholder: i,
              maxSelected: l,
            }),
            d = Array.isArray(t) && t.length > 0;
          let p = "";
          if (d) {
            const e = t.map((e) => s(e));
            p =
              "ListFormat" in Intl
                ? new Intl.ListFormat((0, u.ZO)().strISOCode).format(e)
                : e.join(", ");
          }
          return (0, o.jsxs)(C.Root, {
            state: a,
            ...c,
            children: [
              (0, o.jsxs)(C.Trigger, {
                children: [
                  d && (0, o.jsx)(C.Value, { children: p }),
                  !d && (0, o.jsx)(C.Placeholder, { children: i }),
                ],
              }),
              (0, o.jsx)(C.Options, {
                children: a.rgOptions.map((e, t) =>
                  (0, o.jsx)(C.Option, { value: e, children: s(e) }, t),
                ),
              }),
            ],
          });
        }, I),
        S = (0, r.createContext)(null);
      function j(e) {
        const t = (0, r.useContext)(S);
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
    89047: (e, t, n) => {
      "use strict";
      n.d(t, { V: () => s });
      var o = n(7850),
        r = n(40704);
      const i = {
        up: "rotate( 180, 10, 10 )",
        left: "rotate( 90, 10, 10 )",
        right: "rotate( 270, 10, 10 )",
      };
      function s(e) {
        const { direction: t = "down" } = e,
          n = i[t];
        return (0, o.jsx)(r.I, {
          ...e,
          children: (0, o.jsx)("path", {
            transform: n,
            d: "M5.14541 6.89977L10.0063 12.2027L14.8671 6.89977C15.3557 6.36674 16.145 6.36674 16.6336 6.89977C17.1221 7.4328 17.1221 8.29385 16.6336 8.82688L10.8832 15.1002C10.3946 15.6333 9.60537 15.6333 9.11678 15.1002L3.36644 8.82688C2.87785 8.29385 2.87785 7.4328 3.36644 6.89977C3.85503 6.38041 4.65682 6.36674 5.14541 6.89977Z",
            fill: "currentColor",
          }),
        });
      }
    },
    77914: (e, t, n) => {
      "use strict";
      n.d(t, { g: () => i });
      var o = n(7850),
        r = n(40704);
      function i(e) {
        return (0, o.jsx)(r.I, {
          ...e,
          viewBoxSize: 12,
          children: (0, o.jsx)("path", {
            d: "M10.7068 2.46964L9.53012 1.29297L6.00012 4.81964L2.47012 1.29297L1.29346 2.46964L4.82012 5.99964L1.29346 9.52964L2.47012 10.7063L6.00012 7.17964L9.53012 10.7063L10.7068 9.52964L7.18012 5.99964L10.7068 2.46964Z",
            fill: "currentColor",
          }),
        });
      }
    },
    14181: (e, t, n) => {
      "use strict";
      n.d(t, { ZO: () => r });
      var o = n(13843);
      function r() {
        return (0, o.A)().languages[0];
      }
    },
    9161: (e, t, n) => {
      "use strict";
      n.d(t, { g: () => i });
      var o = n(40323),
        r = n.n(o);
      class i {
        static ParseCSVFile(e) {
          return new Promise((t, n) => {
            const o = {
              header: !0,
              skipEmptyLines: "greedy",
              complete: t,
              error: (e) => n({ errors: [e] }),
            };
            r().parse(e, o);
          });
        }
        static ReadFile(e) {
          return new Promise((t, n) => {
            const o = new FileReader();
            (o.onload = (e) => t(o.result)), o.readAsText(e);
          });
        }
        static WriteFile(e, t) {
          let n = document.createElement("a");
          if (navigator.msSaveBlob) navigator.msSaveBlob(e, t);
          else {
            const t = window.URL.createObjectURL(e);
            n.href = t;
          }
          n.setAttribute("download", t), n.click();
          try {
            document.removeChild(n);
          } catch (e) {}
        }
        static WriteCSVToFile(e, t, n) {
          const o = r().unparse(e, { header: !0 }),
            s = 1 == n ? ["\ufeff" + o] : [o];
          i.WriteFile(new Blob(s, { type: "text/csv:charset=utf-8;" }), t);
        }
        static m_DummyValueForQuestionHack = 0;
        static WriteXMLToFile(e, t) {
          const n = () =>
            this.m_DummyValueForQuestionHack ? "never returned" : "?";
          let o =
            "<" + n() + 'xml version="1.0" encoding="UTF-8" ' + n() + ">\n";
          (o += new XMLSerializer().serializeToString(e)),
            i.WriteFile(
              new Blob([o], { type: "application/xml:charset=utf-8;" }),
              t,
            );
        }
      }
    },
  },
]);
