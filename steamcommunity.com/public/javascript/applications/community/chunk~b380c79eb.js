/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [9769],
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
        "Variant-default": "_1fNVqPb5rhUOTSV5nEBHdl",
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
    24089: (e) => {
      e.exports = { TextEntry: "_1vE-LsK6l_D_5yjbywZV1p" };
    },
    53011: (e) => {
      e.exports = {
        SegmentedControlBox: "_3tuJ3SHrhBu16Q7GZBtKyt",
        Indicator: "_2OvUYpkiij1e7K-4vW8i9W",
        SegmentedControl: "_3XFGk1-WmLNC9KlGi7IYtN",
        IndicatorPosition: "_1Dgxrv7wtUW1EViSgrdMlA",
        Item: "_2aNlsjcdOdHOtP8uACA3bM",
        "Size-1": "_2Y43gK-c1jI0x35n45iZ0",
        "Size-3": "_3ohjaEz8PkzSzIrIZKEdt9",
        disabled: "_3gVhaCZ4k3QSnF9WhRZk5m",
        "Variant-default": "_3hD10Qy5141ZEY503SxZkd",
        "Variant-inset": "_1FRhoIifZWCKbnl4jrnmG2",
        "Variant-inset-glass": "_1gVVovvLBjwCxSH4wWUabt",
        "Variant-dim": "_3qc1Re1q3AH_JYfN49uj8r",
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
    52908: (e, n, t) => {
      "use strict";
      t.d(n, { S: () => a });
      var r = t(7850),
        o = t(83392),
        i = t(20422),
        l = t(21895),
        s = t(64238),
        c = t.n(s);
      function a(e) {
        const {
            checked: n,
            onChange: t,
            disabled: s,
            children: a,
            ref: h,
            variant: f = "default",
            color: p,
            ...x
          } = e,
          g = "indeterminate" === n,
          v = g ? d : i.i,
          m = () => {
            s || (t && t(!!g || !n));
          };
        return (0, r.jsxs)(o.s, {
          align: "center",
          ref: h,
          role: "checkbox",
          "aria-checked": g ? "mixed" : n,
          "data-state": u(n),
          className: c()(l.Root, l[`Variant-${f}`], s && l.Disabled),
          onClick: m,
          tabIndex: 0,
          onKeyDown: (e) => {
            s ||
              (" " === e.key && (m(), e.preventDefault(), e.stopPropagation()));
          },
          cursor: "default",
          "aria-disabled": s,
          "data-accent-color": p,
          ...x,
          children: [
            (0, r.jsx)("div", {
              className: l.Checkbox,
              children: n && (0, r.jsx)(v, { className: l.Icon }),
            }),
            a,
          ],
        });
      }
      function u(e) {
        return "indeterminate" === e ? e : e ? "checked" : "unchecked";
      }
      function d(e) {
        return (0, r.jsx)("svg", {
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, r.jsx)("path", {
            d: "M14.6663 7.11133H1.33301V9.33355H14.6663V7.11133Z",
            fill: "currentColor",
          }),
        });
      }
    },
    48906: (e, n, t) => {
      "use strict";
      t.d(n, { C: () => l, I: () => s });
      var r = t(7850),
        o = t(90626),
        i = t(7157);
      const l = Symbol("CoercingTextInputNotParseable");
      function s(e) {
        const {
            value: n,
            onValueChange: t,
            valueToString: s,
            valueFromString: c,
            checkValidText: a,
            onBlur: u,
            onKeyDown: d,
            ...h
          } = e,
          [f, p] = (0, o.useState)(null),
          x = null != f ? f : void 0 === n ? "" : s(n),
          g = () => {
            if (null !== f) {
              const e = c(f);
              e !== l && t(e), p(null);
            }
          };
        return (0, r.jsx)(i.k, {
          value: x,
          onTextChange: (e) => {
            const n = c(e);
            n !== l && e === s(n) ? (p(null), t(n)) : (a && !a(e, n)) || p(e);
          },
          onKeyDown: (e) => {
            "Enter" === e.key && g(), d && d(e);
          },
          onBlur: (e) => {
            g(), u && u(e);
          },
          ...h,
        });
      }
    },
    61023: (e, n, t) => {
      "use strict";
      t.d(n, { j: () => d });
      var r = t(7850),
        o = t(64238),
        i = t.n(o),
        l = t(38878),
        s = t(90534),
        c = t(83392),
        a = t(75659),
        u = t(11526);
      function d(e) {
        const {
            children: n,
            beforeContent: t,
            afterContent: o,
            hasValue: d,
            ...h
          } = e,
          f = (function (e) {
            const {
                variant: n = "default",
                size: t = "2",
                radius: r,
                focusable: o = !0,
                hoverable: s = !0,
                clickable: c = !0,
                disabled: d,
                className: h,
                ...f
              } = e,
              p = "underline" === n ? "none" : r;
            return (0, u.mz)(
              {
                ...f,
                radius: p,
                className: i()(
                  l.ControlBox,
                  o && !d && l.Focusable,
                  s && !d && l.Hoverable,
                  c && !d && l.Clickable,
                  d && l.Disabled,
                  l[`Variant-${n}`],
                  l[`Size-${t}`],
                  h,
                ),
              },
              a.h,
            );
          })(h);
        return (0, r.jsxs)(c.s, {
          ...f,
          align: "center",
          "data-has-value": !!d,
          children: [
            t && (0, r.jsx)(c.s, { paddingRight: "2", children: t }),
            (0, r.jsx)(s.az, { flexGrow: "1", minWidth: "0", children: n }),
            o && (0, r.jsx)(c.s, { paddingLeft: "2", children: o }),
          ],
        });
      }
    },
    25671: (e, n, t) => {
      "use strict";
      t.d(n, { k: () => I, T: () => C });
      var r = t(7850),
        o = t(90626),
        i = t(73788),
        l = t(28505),
        s = t(90534),
        c = t(80797),
        a = t(48093);
      const u = Object.assign(
        function (e) {
          const { render: n, ...t } = e;
          return (0, c.Q)(
            n,
            (0, r.jsx)(s.az, {
              radius: "sm",
              background: "dull-8",
              className: a.ListBox,
            }),
            { role: "listbox", ...t },
          );
        },
        {
          Option: function (e) {
            const {
                selected: n,
                focused: t,
                label: o = null,
                render: i,
                disabled: l,
                ...u
              } = e,
              d = n ? "true" : "false",
              h = t ? "true" : void 0;
            return (0, c.Q)(
              i,
              (0, r.jsx)(s.az, {
                focusable: !0,
                "data-selected": d,
                "data-focused": h,
                "aria-disabled": l,
                className: a.ListBoxOption,
                paddingY: "2",
                paddingX: "3",
              }),
              { role: "option", ...u },
              { selected: n, focused: t, disabled: l },
            );
          },
        },
      );
      var d = t(49560),
        h = t(45699),
        f = t(85585),
        p = t(8527);
      const x = (0, o.createContext)(null);
      function g(e) {
        return p.TS.IN_GAMEPADUI
          ? (0, r.jsx)(v, { ...e })
          : (0, r.jsx)(m, { ...e });
      }
      function v(e) {
        const { state: n, children: t } = e,
          i = o.useRef(void 0);
        return (
          (0, h.O7)(i, !!i.current, !1),
          (0, r.jsx)(f.D6, {
            navID: "PopoverList",
            onCancelButton: () => n.floating.context.onOpenChange(!1),
            modal: !0,
            navTreeRef: i,
            children: t,
          })
        );
      }
      function m(e) {
        const { state: n, children: t } = e;
        return (0, r.jsx)(i.s3, {
          context: n.floating.context,
          initialFocus: n.initialFocus,
          returnFocus: !1,
          children: t,
        });
      }
      function C(e) {
        const {
          open: n,
          onOpenChange: t,
          activeIndex: r,
          setActiveIndex: s,
          selectedIndex: c,
          setSelectedIndex: a,
          interactions: u = {},
          role: h,
          placement: f,
        } = e;
        let p = n;
        const x = (0, i.we)({
            open: p,
            onOpenChange: t,
            middleware: (0, d.p)(e),
            whileElementsMounted: l.ll,
            placement: f && "object" == typeof f ? f.initial : f,
          }),
          g = (0, i.kp)(x.context, { enabled: !!u.click }),
          v = (0, i.iQ)(x.context, { enabled: !!u.focus }),
          m = (0, i.s9)(x.context),
          C = (0, o.useRef)([]),
          I = (0, i.C1)(x.context, {
            listRef: C,
            activeIndex: r,
            selectedIndex: c,
            onNavigate: s,
            virtual: !!u.virtualItemFocus,
            loop: !0,
            focusItemOnOpen: !1,
          }),
          b = (0, o.useRef)([]),
          j = (0, o.useRef)(!1),
          S = (0, i.lY)(x.context, {
            enabled: !!u.typeahead,
            listRef: b,
            activeIndex: r,
            selectedIndex: c,
            onMatch: p ? s : a,
            onTypingChange: (e) => (j.current = e),
          }),
          k = (0, i.It)(x.context, { role: h }),
          {
            getFloatingProps: O,
            getReferenceProps: V,
            getItemProps: y,
          } = (0, i.bv)([k, g, v, m, I, S]);
        return {
          floating: x,
          getFloatingProps: O,
          getReferenceProps: V,
          getItemProps: y,
          open: p,
          activeIndex: r,
          selectedIndex: c,
          setSelectedIndex: a,
          elementsRef: C,
          labelsRef: b,
          typingRef: j,
          initialFocus: u.virtualItemFocus ? -1 : void 0,
        };
      }
      const I = {
        Root: function (e) {
          const { children: n, state: t } = e;
          return (0, r.jsx)(x.Provider, { value: t, children: n });
        },
        Anchor: function (e) {
          const { children: n } = e,
            t = o.Children.only(n),
            r = (0, o.useContext)(x),
            l = (0, i.SV)([
              null == r ? void 0 : r.floating.refs.setReference,
              null == t ? void 0 : t.props.ref,
            ]);
          if (!t) return null;
          if (!r)
            return (
              console.error(
                "<PopoverListAnchor> must be a child of <PopoverListRoot>.",
              ),
              null
            );
          const { ref: s, ...c } = t.props;
          return (0, o.cloneElement)(t, { ref: l, ...r.getReferenceProps(c) });
        },
        Positioner: function (e) {
          const { children: n, render: t, ref: l } = e,
            s = (0, o.useContext)(x),
            c = (0, i.SV)([
              l,
              null == s ? void 0 : s.floating.refs.setFloating,
              (e) => {
                var n;
                return null === (n = null == e ? void 0 : e.showPopover) ||
                  void 0 === n
                  ? void 0
                  : n.call(e);
              },
            ]);
          return s
            ? s.open
              ? (0, r.jsx)(g, {
                  state: s,
                  children: (0, r.jsx)(u, {
                    ref: c,
                    style: s.floating.floatingStyles,
                    ...s.getFloatingProps({ popover: "manual" }),
                    render: t,
                    children: (0, r.jsx)(i.ph, {
                      elementsRef: s.elementsRef,
                      labelsRef: s.labelsRef,
                      children: n,
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
              children: n,
              label: t,
              selected: l,
              onSelect: s,
              ref: c,
              disabled: a,
              ...d
            } = e,
            h = (0, o.useContext)(x),
            { ref: f, index: p } = (0, i.rm)({ label: t }),
            g = (0, i.SV)([c, f]);
          if (!h)
            return (
              console.error(
                "<PopoverListItem> must be a child of <PopoverListRoot>.",
              ),
              null
            );
          const v = p === h.activeIndex,
            m = p === h.selectedIndex || !!l;
          return (0, r.jsx)(u.Option, {
            ref: g,
            selected: m,
            focused: v,
            role: "option",
            tabIndex: 0,
            ...h.getItemProps({
              onClick: a ? void 0 : s,
              onKeyDown: (e) => {
                a ||
                  ("Enter" !== e.key &&
                    (" " !== e.key || h.typingRef.current)) ||
                  (s(e), e.preventDefault(), e.stopPropagation());
              },
              active: v,
              selected: m,
              disabled: a,
              ...d,
            }),
            children: n,
          });
        },
      };
    },
    86632: (e, n, t) => {
      "use strict";
      t.d(n, { I: () => f });
      var r = t(7850),
        o = t(90626),
        i = t(61023),
        l = t(90534),
        s = t(81393),
        c = t(64238),
        a = t.n(c),
        u = t(53011),
        d = t(83392);
      const h = (0, o.createContext)(null);
      function f(e) {
        const { options: n, getOptionLabel: t = (e) => e, ...o } = e;
        return (0, r.jsx)(f.Root, {
          ...o,
          children: n.map((e) =>
            (0, r.jsx)(f.Item, { value: e, children: t(e) }, e),
          ),
        });
      }
      function p(e) {
        const { radius: n } = e;
        return (0, r.jsx)(l.az, {
          className: u.IndicatorPosition,
          children: (0, r.jsx)("div", { className: u.Indicator }),
        });
      }
      function x(e, n) {
        const t = e.compareDocumentPosition(n);
        return t & Node.DOCUMENT_POSITION_FOLLOWING
          ? -1
          : t & Node.DOCUMENT_POSITION_PRECEDING
            ? 1
            : 0;
      }
      (f.Item = function (e) {
        const { value: n, children: t, disabled: i } = e,
          l = (0, o.useContext)(h),
          [s, c] = (0, o.useState)(),
          { register: f, unregister: p } = l || {};
        if (
          ((0, o.useEffect)(
            () => (s && f && p ? (f(s, n), () => p(s, n)) : () => {}),
            [f, p, n, s],
          ),
          !l)
        )
          return null;
        const { value: x, onValueChange: g, radius: v, size: m } = l,
          C = n === x,
          I = void 0 === t ? n : t;
        return (0, r.jsx)(d.s, {
          justify: "center",
          align: "center",
          ref: c,
          onClick: (e) => {
            e.stopPropagation(), e.preventDefault(), C || i || g(n);
          },
          "data-selected": C ? "true" : "false",
          className: a()(u.Item, m && u[`Size-${m}`], i ? u.disabled : ""),
          children: I,
        });
      }),
        (f.Root = function (e) {
          const {
              variant: n = "default",
              radius: t,
              size: c,
              children: d,
              value: f,
              onValueChange: g,
            } = e,
            [v, m] = (0, o.useState)({}),
            C = (0, o.useCallback)((e, n) => m((t) => ({ ...t, [n]: e })), []),
            I = (0, o.useCallback)(
              (e, n) =>
                m((t) => {
                  const r = { ...t };
                  return r[n] === e && delete r[n], r;
                }),
              [],
            ),
            b = (0, o.useMemo)(
              () => ({
                value: f,
                onValueChange: g,
                register: C,
                unregister: I,
                radius: t,
                size: c,
              }),
              [f, g, C, I, t, c],
            );
          return (0, r.jsx)(i.j, {
            clickable: !1,
            hoverable: !1,
            focusable: !1,
            variant: n,
            radius: t,
            size: c,
            className: a()(u.SegmentedControlBox, u[`Variant-${n}`]),
            tabIndex: 0,
            onKeyDown: (e) => {
              let n = 0;
              switch (e.key) {
                case " ":
                case "Enter":
                case "ArrowRight":
                  n = 1;
                  break;
                case "ArrowLeft":
                  n = -1;
              }
              if (n) {
                const t = Array.from(Object.values(v)).sort(x);
                let r;
                if (null === f) r = n > 0 ? 0 : t.length - 1;
                else {
                  const e = v[f],
                    o = t.findIndex((n) => n === e);
                  (0, s.wT)(
                    "number" == typeof o,
                    "Could not find current segmented value position",
                  ),
                    (r = o + n);
                }
                const o = t[r < 0 ? t.length + r : r % t.length],
                  i = Object.keys(v).find((e) => v[e] === o);
                "string" != typeof i
                  ? console.error("Could not find next segmeneted value")
                  : (g(i), e.stopPropagation(), e.preventDefault());
              }
            },
            children: (0, r.jsx)(h.Provider, {
              value: b,
              children: (0, r.jsxs)(l.az, {
                className: u.SegmentedControl,
                style: { "--outer-radius": `var(--radius-${t})` },
                children: [d, null !== f && (0, r.jsx)(p, { radius: t })],
              }),
            }),
          });
        });
    },
    11967: (e, n, t) => {
      "use strict";
      t.d(n, { DL: () => C, WM: () => p, l6: () => m, uh: () => b });
      var r = t(7850),
        o = t(90626),
        i = t(25671),
        l = t(61023),
        s = t(89047),
        c = t(20187),
        a = t(77914),
        u = t(80797),
        d = t(14181),
        h = t(52908),
        f = t(83392);
      function p(e) {
        return x(e, !1);
      }
      function x(e, n) {
        const { onSelectionChange: t, selectedValue: r, ...i } = e,
          [l, s] = (0, o.useState)(!1),
          c = (0, o.useCallback)(
            (e) => {
              t(e), n || s(!1);
            },
            [t, n],
          ),
          a = (0, o.useCallback)(
            (e) => {
              c(n ? [] : null), e.stopPropagation(), e.preventDefault();
            },
            [c, n],
          ),
          u = (0, o.useCallback)(
            (e) => {
              if (n) {
                const n = r,
                  t = n.indexOf(e);
                if (-1 !== t) return c(n.slice(0, t).concat(n.slice(t + 1)));
                c(n.concat(e));
              } else c(e);
            },
            [c, r, n],
          );
        return {
          onSelectionChange: c,
          onItemSelectionChange: u,
          onClear: a,
          bOpen: l,
          setOpen: s,
          multiselect: n,
          selectedValue: r,
          ...i,
        };
      }
      const g = {
        Root: function (e) {
          const {
              children: n,
              state: t,
              placement: l = "bottom-end",
              popoverWidth: s = "dropdown",
              popoverMaxHeight: c,
              ...a
            } = e,
            [u, d] = (0, o.useState)(null),
            [h, f] = (0, o.useState)(null),
            p = (0, o.useMemo)(
              () =>
                t.rgOptions.findIndex((e) =>
                  t.multiselect
                    ? t.selectedValue.includes(e)
                    : e === t.selectedValue,
                ),
              [t.selectedValue, t.rgOptions, t.multiselect],
            ),
            x = (0, o.useRef)(null),
            g = {
              ...t,
              ...a,
              focusedValue: u,
              onFocusChange: d,
              refPopover: x,
              setOpen: (e) => {
                e && d(t.multiselect ? t.selectedValue[0] : t.selectedValue),
                  t.setOpen(e);
              },
              focusedIndex: h,
              onFocusedIndexChange: f,
            },
            v = (0, i.T)({
              open: t.bOpen,
              onOpenChange: t.setOpen,
              width: s,
              maxHeight: c,
              placement: l,
              selectedIndex: p,
              setSelectedIndex: (e) => t.onItemSelectionChange(t.rgOptions[e]),
              activeIndex: h,
              setActiveIndex: f,
              gutter: "4",
              interactions: { click: !0, typeahead: !0 },
              role: "select",
              scroll: !0,
            });
          return (0, r.jsx)(j.Provider, {
            value: g,
            children: (0, r.jsx)(i.k.Root, { state: v, children: n }),
          });
        },
        Option: function (e) {
          const { value: n, children: t, disabled: o, ...l } = e,
            {
              onItemSelectionChange: s,
              multiselect: c,
              selectedValue: a,
              maxSelected: u,
            } = S("<SelectTrigger>"),
            d = "string" == typeof n ? n : void 0;
          let p = !1,
            x = !1;
          c
            ? ((p = Array.isArray(a) && a.includes(n)),
              (x = !!u && Array.isArray(a) && a.length >= u))
            : (p = n === a);
          const g = o || (x && !p);
          return (0, r.jsxs)(i.k.Item, {
            label: d,
            onSelect: () => s(n),
            selected: p,
            disabled: g,
            ...l,
            children: [
              c &&
                (0, r.jsxs)(f.s, {
                  gap: "2",
                  align: "center",
                  children: [
                    (0, r.jsx)(h.S, { checked: p, variant: "dark" }),
                    t,
                  ],
                }),
              !c && t,
            ],
          });
        },
        Options: function (e) {
          const { refPopover: n } = S("<Select.Options>");
          return (0, r.jsx)(i.k.Positioner, { ref: n, children: e.children });
        },
        Trigger: function (e) {
          const { children: n, render: t } = e,
            {
              bOpen: o,
              setOpen: c,
              selectedValue: d,
              variant: h,
              size: f,
              radius: p,
              rgOptions: x,
              multiselect: g,
              onClear: v,
              focusedValue: m,
              onFocusChange: C,
              onSelectionChange: I,
              clearable: b,
              focusedIndex: j,
              onItemSelectionChange: k,
              onFocusedIndexChange: O,
              refPopover: V,
              placeholder: y,
              maxSelected: w,
              ...L
            } = S("<SelectTrigger>"),
            P = {
              tabIndex: 0,
              role: "combobox",
              onClick: () => c(!o),
              children: n,
            },
            _ = g ? Array.isArray(d) && d.length > 0 : !!d,
            z =
              _ && b
                ? (0, r.jsx)(a.g, {
                    onClick: v,
                    cursor: "pointer",
                    hitSlop: !0,
                  })
                : (0, r.jsx)(s.V, {}),
            R = (0, r.jsx)(l.j, {
              afterContent: z,
              variant: h,
              size: f,
              radius: p,
              hasValue: _,
              tabIndex: 0,
              cursor: "pointer",
              ...L,
            }),
            N = (0, u.Q)(t, R, P, void 0);
          return (0, r.jsx)(i.k.Anchor, { children: N });
        },
        Value: function (e) {
          return (0, r.jsx)(c.EY, {
            weight: "medium",
            truncate: !0,
            contrast: "title",
            children: e.children,
          });
        },
        Placeholder: function (e) {
          return (0, r.jsx)(c.EY, {
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
      const m = Object.assign(function (e) {
        const {
            selectedValue: n,
            onSelectionChange: t,
            options: o,
            placeholder: i,
            getOptionLabel: l = v,
            ...s
          } = e,
          c = p({
            onSelectionChange: t,
            selectedValue: n,
            rgOptions: o,
            placeholder: i,
          }),
          a = null != n,
          u = a ? l(n) : "";
        return (0, r.jsxs)(m.Root, {
          state: c,
          ...s,
          children: [
            (0, r.jsxs)(m.Trigger, {
              children: [
                a && (0, r.jsx)(m.Value, { children: u }),
                !a && (0, r.jsx)(m.Placeholder, { children: i }),
              ],
            }),
            (0, r.jsx)(m.Options, {
              children: c.rgOptions.map((e, n) =>
                (0, r.jsx)(m.Option, { value: e, children: l(e) }, n),
              ),
            }),
          ],
        });
      }, g);
      function C(e) {
        return x(e, !0);
      }
      const I = g;
      const b = Object.assign(function (e) {
          const {
              selectedValue: n,
              onSelectionChange: t,
              options: o,
              placeholder: i,
              getOptionLabel: l = v,
              maxSelected: s,
              ...c
            } = e,
            a = C({
              onSelectionChange: t,
              selectedValue: n,
              rgOptions: o,
              placeholder: i,
              maxSelected: s,
            }),
            u = Array.isArray(n) && n.length > 0;
          let h = "";
          if (u) {
            const e = n.map((e) => l(e));
            h =
              "ListFormat" in Intl
                ? new Intl.ListFormat((0, d.ZO)().strISOCode).format(e)
                : e.join(", ");
          }
          return (0, r.jsxs)(b.Root, {
            state: a,
            ...c,
            children: [
              (0, r.jsxs)(b.Trigger, {
                children: [
                  u && (0, r.jsx)(b.Value, { children: h }),
                  !u && (0, r.jsx)(b.Placeholder, { children: i }),
                ],
              }),
              (0, r.jsx)(b.Options, {
                children: a.rgOptions.map((e, n) =>
                  (0, r.jsx)(b.Option, { value: e, children: l(e) }, n),
                ),
              }),
            ],
          });
        }, I),
        j = (0, o.createContext)(null);
      function S(e) {
        const n = (0, o.useContext)(j);
        return n || console.error(`${e} must be used within a <Select>!`), n;
      }
    },
    7157: (e, n, t) => {
      "use strict";
      t.d(n, { k: () => x });
      var r = t(7850),
        o = t(90626),
        i = t(64238),
        l = t.n(i),
        s = t(11820),
        c = t(24089);
      var a = t(90534),
        u = t(61023),
        d = t(77914),
        h = t(8871),
        f = t(45699),
        p = t(8527);
      function x(e) {
        const { extracted: n, remaining: t } = (0, a.A4)(e),
          {
            value: i,
            onTextChange: x,
            onTextClear: g,
            clearable: v,
            onChange: m,
            radius: C,
            variant: I,
            size: b,
            beforeContent: j,
            afterContent: S,
            inputRef: k,
            ref: O,
            disabled: V,
            gamepadFocusable: y = !0,
            ...w
          } = t,
          L = {
            ...n,
            variant: I,
            size: b,
            radius: C,
            beforeContent: j,
            afterContent:
              i && v
                ? (0, r.jsx)(d.g, {
                    onClick: () => {
                      x(""), g && g();
                    },
                    cursor: "pointer",
                    hitSlop: !0,
                  })
                : S,
            ref: O,
            disabled: V,
          },
          P = (0, o.useRef)(null),
          _ = y && p.TS.IN_GAMEPADUI ? f.BA : "input";
        return (0, r.jsx)(u.j, {
          cursor: "text",
          ...L,
          onClick: (e) => {
            P.current && e.target !== P.current && P.current.focus();
          },
          children: (0, r.jsx)(_, {
            ref: (0, h.Ue)(k, P),
            type: "text",
            "aria-disabled": V,
            readOnly: V,
            className: l()((0, s.T)(), c.TextEntry),
            value: i || "",
            onChange: (e) => {
              V || (x(e.target.value), m && m(e));
            },
            ...w,
          }),
        });
      }
    },
    40704: (e, n, t) => {
      "use strict";
      t.d(n, { I: () => s });
      var r = t(7850),
        o = t(11526),
        i = t(75659),
        l = t(16619);
      function s(e) {
        const { viewBoxSize: n = 20, ...t } = e,
          i = t.size ? void 0 : l.IconSizeDefault;
        return (0, r.jsx)("svg", {
          viewBox: `0 0 ${n} ${n}`,
          ...(0, o.mz)({ className: i, ...t }, c),
        });
      }
      const c = [
        ...i.L,
        { prop: "size", responsive: !0, className: (e) => l[`IconSize-${e}`] },
        {
          prop: "color",
          className: l.Color,
          cssProperty: (e) => ["--icon-color", (0, o.w7)(e)],
        },
        {
          prop: "hitSlop",
          className: l.HitSlop,
          cssProperty: (e) => [
            "--hit-slop-custom",
            "string" == typeof e ? e : "",
          ],
        },
        i.h.find(({ prop: e }) => "cursor" === e),
      ];
    },
    20422: (e, n, t) => {
      "use strict";
      t.d(n, { i: () => i });
      var r = t(7850),
        o = t(40704);
      function i(e) {
        return (0, r.jsx)(o.I, {
          ...e,
          viewBoxSize: 16,
          children: (0, r.jsx)("path", {
            d: "M13.8182 1.94629L5.77816 9.98184L2.40483 6.61296L0.835938 8.18184L5.77816 13.1285L15.387 3.51518L13.8182 1.94629Z",
            fill: "currentColor",
          }),
        });
      }
    },
    89047: (e, n, t) => {
      "use strict";
      t.d(n, { V: () => l });
      var r = t(7850),
        o = t(40704);
      const i = {
        up: "rotate( 180, 10, 10 )",
        left: "rotate( 90, 10, 10 )",
        right: "rotate( 270, 10, 10 )",
      };
      function l(e) {
        const { direction: n = "down" } = e,
          t = i[n];
        return (0, r.jsx)(o.I, {
          ...e,
          children: (0, r.jsx)("path", {
            transform: t,
            d: "M5.14541 6.89977L10.0063 12.2027L14.8671 6.89977C15.3557 6.36674 16.145 6.36674 16.6336 6.89977C17.1221 7.4328 17.1221 8.29385 16.6336 8.82688L10.8832 15.1002C10.3946 15.6333 9.60537 15.6333 9.11678 15.1002L3.36644 8.82688C2.87785 8.29385 2.87785 7.4328 3.36644 6.89977C3.85503 6.38041 4.65682 6.36674 5.14541 6.89977Z",
            fill: "currentColor",
          }),
        });
      }
    },
    77914: (e, n, t) => {
      "use strict";
      t.d(n, { g: () => i });
      var r = t(7850),
        o = t(40704);
      function i(e) {
        return (0, r.jsx)(o.I, {
          ...e,
          viewBoxSize: 12,
          children: (0, r.jsx)("path", {
            d: "M10.7068 2.46964L9.53012 1.29297L6.00012 4.81964L2.47012 1.29297L1.29346 2.46964L4.82012 5.99964L1.29346 9.52964L2.47012 10.7063L6.00012 7.17964L9.53012 10.7063L10.7068 9.52964L7.18012 5.99964L10.7068 2.46964Z",
            fill: "currentColor",
          }),
        });
      }
    },
    80797: (e, n, t) => {
      "use strict";
      t.d(n, { Q: () => i });
      var r = t(90626);
      function o(e, n, t) {
        return "function" == typeof e ? e(n, t) : r.cloneElement(e, n);
      }
      function i(e, n, t, r) {
        return o(e || n, t, r);
      }
    },
    91307: (e, n, t) => {
      "use strict";
      function r(e, n) {
        return void 0 === n ? e[""] : e[n];
      }
      t.d(n, { P: () => r });
    },
    47535: (e, n, t) => {
      "use strict";
      t.d(n, { L: () => i });
      var r = t(7850),
        o = t(91307);
      const i = {
        b: {
          Constructor: function (e) {
            return (0, r.jsx)("b", { children: e.children });
          },
        },
        i: {
          Constructor: function (e) {
            return (0, r.jsx)("i", { children: e.children });
          },
        },
        u: {
          Constructor: function (e) {
            return (0, r.jsx)("u", { children: e.children });
          },
        },
        c: {
          Constructor: function (e) {
            return (0, r.jsx)("code", { children: e.children });
          },
        },
        strike: {
          Constructor: function (e) {
            return (0, r.jsx)("s", { children: e.children });
          },
        },
        color: {
          Constructor: function (e) {
            const n = (0, o.P)(e.args),
              t = {};
            n &&
              (n.match(/^#[a-fA-F0-9]+$/) || n.match(/rgba?\([0-9, ]+\)$/)) &&
              (t.color = n);
            return (0, r.jsx)("span", { style: t, children: e.children });
          },
        },
      };
    },
    78312: (e, n, t) => {
      "use strict";
      t.d(n, { F: () => o });
      var r = t(7850);
      const o = {
        h1: {
          Constructor: function (e) {
            return (0, r.jsx)("h1", { children: e.children });
          },
          skipFollowingNewline: !0,
        },
        h2: {
          Constructor: function (e) {
            return (0, r.jsx)("h2", { children: e.children });
          },
          skipFollowingNewline: !0,
        },
        h3: {
          Constructor: function (e) {
            return (0, r.jsx)("h3", { children: e.children });
          },
          skipFollowingNewline: !0,
        },
        code: {
          Constructor: function (e) {
            return (0, r.jsx)("pre", {
              children: (0, r.jsx)("code", { children: e.children }),
            });
          },
          skipFollowingNewline: !0,
        },
        quote: {
          Constructor: function (e) {
            return (0, r.jsx)("blockquote", { children: e.children });
          },
          skipFollowingNewline: !0,
          skipInternalNewline: !0,
        },
        hr: {
          Constructor: function (e) {
            return (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsx)("hr", {}), e.children],
            });
          },
          skipFollowingNewline: !0,
        },
      };
    },
    1736: (e, n, t) => {
      "use strict";
      t.d(n, { _: () => s });
      var r = t(7850),
        o = t(15759),
        i = t(28491),
        l = t(91307);
      function s(e) {
        var n;
        let t =
          null !== (n = (0, l.P)(e.args)) && void 0 !== n
            ? n
            : (0, l.P)(e.args, "href");
        return t && t.match(/^https?:\/\//)
          ? ((0, o.p)(t) && (t = (0, o.E)(t)),
            (0, r.jsx)(i.Y, {
              target: "_blank",
              href: t,
              underline: "auto",
              contrast: "title",
              children: e.children,
            }))
          : e.children;
      }
    },
    60869: (e, n, t) => {
      "use strict";
      t.d(n, { I: () => o });
      var r = t(7850);
      const o = {
        list: {
          Constructor: function (e) {
            return (0, r.jsx)("ul", { children: e.children });
          },
          skipInternalNewline: !0,
        },
        olist: {
          Constructor: function (e) {
            return (0, r.jsx)("ol", { children: e.children });
          },
          skipInternalNewline: !0,
        },
        "*": {
          Constructor: function (e) {
            return (0, r.jsx)("li", { children: e.children });
          },
          autocloses: !0,
        },
      };
    },
    14181: (e, n, t) => {
      "use strict";
      t.d(n, { ZO: () => o });
      var r = t(13843);
      function o() {
        return (0, r.A)().languages[0];
      }
    },
  },
]);
