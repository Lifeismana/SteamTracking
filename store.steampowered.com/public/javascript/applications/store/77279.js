/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [77279],
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
        "Variant-bare": "_3vxqpebgJYIYNTcigTXx21",
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
    65274: (e) => {
      e.exports = {
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
    57757: (e, t, n) => {
      "use strict";
      n.d(t, { S: () => u });
      var o = n(7850),
        r = n(83392),
        s = n(40704);
      function i(e) {
        return (0, o.jsx)(s.I, {
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
            disabled: s,
            children: c,
            ref: u,
            variant: h,
            color: x,
            align: g = "center",
            ...m
          } = e,
          v = "indeterminate" === t,
          b = v ? f : i,
          I = () => {
            s || (n && n(!!v || !t));
          },
          S = (0, d.f)("Checkbox", h);
        return (0, o.jsxs)(r.s, {
          align: g,
          ref: u,
          role: "checkbox",
          "aria-checked": v ? "mixed" : t,
          "data-state": p(t),
          className: a()(l.Root, l[`Variant-${S}`], s && l.Disabled),
          onClick: I,
          tabIndex: 0,
          onKeyDown: (e) => {
            s ||
              (" " === e.key && (I(), e.preventDefault(), e.stopPropagation()));
          },
          cursor: "default",
          "aria-disabled": s,
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
    61023: (e, t, n) => {
      "use strict";
      n.d(t, { j: () => u });
      var o = n(7850),
        r = n(64238),
        s = n.n(r),
        i = n(38878),
        l = n(90534),
        c = n(83392),
        a = n(75659),
        d = n(11526);
      function u(e) {
        const {
            children: t,
            beforeContent: n,
            afterContent: r,
            hasValue: u,
            ...p
          } = e,
          f = (function (e) {
            const {
                variant: t = "basic",
                size: n = "2",
                radius: o,
                focusable: r = !0,
                hoverable: l = !0,
                clickable: c = !0,
                disabled: u,
                className: p,
                status: f,
                ...h
              } = e,
              x = "underline" === t ? "none" : o;
            return (0, d.mz)(
              {
                ...h,
                radius: x,
                "data-status": f,
                className: s()(
                  i.ControlBox,
                  r && !u && i.Focusable,
                  l && !u && i.Hoverable,
                  c && !u && i.Clickable,
                  u && i.Disabled,
                  i[`Variant-${t}`],
                  i[`Size-${n}`],
                  p,
                ),
              },
              a.h,
            );
          })(p);
        return (0, o.jsxs)(c.s, {
          ...f,
          align: "center",
          "data-has-value": !!u,
          children: [
            n && (0, o.jsx)(c.s, { paddingRight: "2", children: n }),
            (0, o.jsx)(l.az, { flexGrow: "1", minWidth: "0", children: t }),
            r && (0, o.jsx)(c.s, { paddingLeft: "2", children: r }),
          ],
        });
      }
    },
    49560: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => C, p: () => S });
      var o = n(7850),
        r = n(90626),
        s = n(73788),
        i = n(8083),
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
      const m = (0, r.createContext)(null);
      function v(e) {
        return (0, g.Qn)() ? (0, o.jsx)(b, { ...e }) : (0, o.jsx)(I, { ...e });
      }
      function b(e) {
        const { children: t } = e,
          n = (0, r.useContext)(m);
        (0, p.wT)(
          !!n,
          "<Popover.Positioner> must be a child of <Popover.Root>.",
        );
        const s = r.useRef(void 0);
        return (
          (0, a.O7)(s, !!s.current, !1),
          (0, o.jsx)(d.D6, {
            navID: "Popover",
            onCancelButton: () => n.floating.context.onOpenChange(!1),
            modal: !0,
            navTreeRef: s,
            children: (0, o.jsx)("div", {
              style: { display: "contents" },
              children: (0, o.jsx)(u.q, { children: t }),
            }),
          })
        );
      }
      function I(e) {
        const { children: t } = e,
          n = (0, r.useContext)(m);
        return (
          (0, p.wT)(
            !!n,
            "<Popover.Positioner> must be a child of <Popover.Root>.",
          ),
          (0, o.jsx)(s.s3, {
            context: n.floating.context,
            initialFocus: -1,
            returnFocus: !1,
            children: t,
          })
        );
      }
      function S(e) {
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
                const { rects: o, elements: r, availableHeight: s } = n,
                  i = { boxSizing: "border-box", zIndex: "1" };
                switch ((e.scroll && (i.overflowY = "auto"), e.width)) {
                  case "target":
                    i.width = `${o.reference.width}px`;
                    break;
                  case "content":
                    i.width = `${o.floating.width}px`;
                    break;
                  case "dropdown": {
                    let e = o.reference.width;
                    o.floating.width > e && e < 200 && (e = o.floating.width),
                      (i.width = `${e}px`);
                  }
                }
                "function" == typeof e.width &&
                  (i.width = e.width({
                    unContentWidth: o.floating.width,
                    unTargetWidth: o.reference.width,
                  }));
                const l =
                  "number" == typeof t ? `${t}px` : `var(--spacing-${t})`;
                "function" == typeof e.maxHeight
                  ? (i.maxHeight = e.maxHeight({
                      unAvailableHeight: s,
                      gutter: l,
                    }))
                  : "number" == typeof e.maxHeight
                    ? (i.maxHeight = `min( calc( ${s}px - ${l} ), ${e.maxHeight}px )`)
                    : (i.maxHeight =
                        "number" == typeof t
                          ? s - t + "px"
                          : `calc( ${s}px - var(--spacing-${t}) )`),
                  Object.assign(r.floating.style, i),
                  r.floating.style.setProperty(
                    "--popover-max-height",
                    i.maxHeight,
                  );
              },
            }),
          ),
          o
        );
      }
      const C = {
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
              const c = (0, s.we)({
                  open: l,
                  onOpenChange: n,
                  middleware: S(e),
                  whileElementsMounted: i.ll,
                  placement: o && "object" == typeof o ? o.initial : o,
                  strategy: "fixed",
                  platform: {
                    ...i.iD,
                    getOffsetParent: (e) =>
                      e?.ownerDocument?.defaultView ?? window,
                  },
                }),
                a = { enabled: !!r.click },
                d = "function" == typeof r.click ? r.click(a) : a,
                u = (0, s.kp)(c.context, d),
                p = { enabled: !!r.focus },
                f = "function" == typeof r.focus ? r.focus(p) : p,
                h = (0, s.iQ)(c.context, f),
                x = { handleClose: (0, s.iB)() },
                g = "function" == typeof r.hover ? r.hover(x) : x,
                m = (0, s.Mk)(c.context, { enabled: !!r.hover, ...g }),
                v = (0, s.s9)(c.context),
                { getFloatingProps: b, getReferenceProps: I } = (0, s.bv)([
                  u,
                  h,
                  m,
                  v,
                ]);
              return {
                floating: c,
                getFloatingProps: b,
                getReferenceProps: I,
                open: l,
              };
            })(n);
          return (0, o.jsx)(m.Provider, { value: r, children: t });
        },
        Anchor: function (e) {
          const { children: t } = e,
            n = r.Children.only(t),
            o = (0, r.useContext)(m);
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
          const { children: t, className: n, ref: i } = e,
            l = (0, r.useContext)(m),
            c = (0, s.SV)([
              i,
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
          a.type == C.FocusManager &&
            ((a = r.Children.only(a.props.children)), (d = v));
          const u = (0, r.cloneElement)(a, {
            ref: c,
            style: { ...l.floating.floatingStyles },
            className: h()((0, x.T)(), n),
            popover: "manual",
            ...l.getFloatingProps(),
          });
          return (0, o.jsx)(d, { children: u });
        },
        FocusManager: v,
      };
    },
    71232: (e, t, n) => {
      "use strict";
      n.d(t, { l6: () => N, WM: () => V });
      var o = n(7850),
        r = n(90626),
        s = n(73788),
        i = n(8083),
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
                render: s,
                disabled: i,
                ...d
              } = e,
              u = t ? "true" : "false",
              p = n ? "true" : void 0;
            return (0, c.Q)(
              s,
              (0, o.jsx)(l.az, {
                focusable: !0,
                "data-selected": u,
                "data-focused": p,
                "aria-disabled": i,
                className: a.ListBoxOption,
                paddingY: "2",
                paddingX: "3",
              }),
              { role: "option", ...d },
              { selected: t, focused: n, disabled: i },
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
        return (0, h.Qn)() ? (0, o.jsx)(m, { ...e }) : (0, o.jsx)(v, { ...e });
      }
      function m(e) {
        const { state: t, children: n } = e,
          s = r.useRef(void 0);
        return (
          (0, p.O7)(s, !!s.current, !1),
          (0, o.jsx)(f.D6, {
            navID: "PopoverList",
            onCancelButton: () => t.floating.context.onOpenChange(!1),
            modal: !0,
            navTreeRef: s,
            children: n,
          })
        );
      }
      function v(e) {
        const { state: t, children: n } = e;
        return (0, o.jsx)(s.s3, {
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
        I = function (e) {
          const { children: t } = e,
            n = r.Children.only(t),
            o = (0, r.useContext)(x),
            i = (0, s.SV)([o?.floating.refs.setReference, n?.props.ref]);
          if (!n) return null;
          if (!o)
            return (
              console.error(
                "<PopoverListAnchor> must be a child of <PopoverListRoot>.",
              ),
              null
            );
          const { ref: l, ...c } = n.props;
          return (0, r.cloneElement)(n, { ref: i, ...o.getReferenceProps(c) });
        },
        S = function (e) {
          const { children: t, render: n, ref: i } = e,
            l = (0, r.useContext)(x),
            c = (0, s.SV)([
              i,
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
                    children: (0, o.jsx)(s.ph, {
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
        C = function (e) {
          const {
              children: t,
              label: n,
              selected: i,
              onSelect: l,
              ref: c,
              disabled: a,
              ...u
            } = e,
            p = (0, r.useContext)(x),
            { ref: f, index: h } = (0, s.rm)({ label: n }),
            g = (0, s.SV)([c, f]);
          if (!p)
            return (
              console.error(
                "<PopoverListItem> must be a child of <PopoverListRoot>.",
              ),
              null
            );
          const m = h === p.activeIndex,
            v = h === p.selectedIndex || !!i;
          return (0, o.jsx)(d.Option, {
            ref: g,
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
        };
      var j = n(61023),
        w = n(40704);
      const y = {
        up: "rotate( 180, 10, 10 )",
        left: "rotate( 90, 10, 10 )",
        right: "rotate( 270, 10, 10 )",
      };
      function P(e) {
        const { direction: t = "down" } = e,
          n = y[t];
        return (0, o.jsx)(w.I, {
          ...e,
          children: (0, o.jsx)("path", {
            transform: n,
            d: "M5.14541 6.89977L10.0063 12.2027L14.8671 6.89977C15.3557 6.36674 16.145 6.36674 16.6336 6.89977C17.1221 7.4328 17.1221 8.29385 16.6336 8.82688L10.8832 15.1002C10.3946 15.6333 9.60537 15.6333 9.11678 15.1002L3.36644 8.82688C2.87785 8.29385 2.87785 7.4328 3.36644 6.89977C3.85503 6.38041 4.65682 6.36674 5.14541 6.89977Z",
            fill: "currentColor",
          }),
        });
      }
      var O = n(20187);
      function _(e) {
        return (0, o.jsx)(w.I, {
          ...e,
          viewBoxSize: 12,
          children: (0, o.jsx)("path", {
            d: "M10.7068 2.46964L9.53012 1.29297L6.00012 4.81964L2.47012 1.29297L1.29346 2.46964L4.82012 5.99964L1.29346 9.52964L2.47012 10.7063L6.00012 7.17964L9.53012 10.7063L10.7068 9.52964L7.18012 5.99964L10.7068 2.46964Z",
            fill: "currentColor",
          }),
        });
      }
      var z = n(13843);
      var k = n(57757),
        L = n(83392),
        R = n(66922);
      function V(e) {
        return F(e, !1);
      }
      function F(e, t) {
        const { onSelectionChange: n, selectedValue: o, ...s } = e,
          [i, l] = (0, r.useState)(!1),
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
          bOpen: i,
          setOpen: l,
          multiselect: t,
          selectedValue: o,
          ...s,
        };
      }
      const H = {
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
            m = (0, r.useRef)(null),
            v = {
              ...n,
              ...d,
              focusedValue: p,
              onFocusChange: f,
              refPopover: m,
              setOpen: (e) => {
                e && f(n.multiselect ? n.selectedValue[0] : n.selectedValue),
                  n.setOpen(e);
              },
              focusedIndex: h,
              onFocusedIndexChange: x,
            },
            I = (function (e) {
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
              const x = (0, s.we)({
                  open: h,
                  onOpenChange: n,
                  middleware: (0, u.p)(e),
                  whileElementsMounted: i.ll,
                  placement: f && "object" == typeof f ? f.initial : f,
                  strategy: "fixed",
                  platform: {
                    ...i.iD,
                    getOffsetParent: (e) =>
                      e?.ownerDocument?.defaultView ?? window,
                  },
                }),
                g = (0, s.kp)(x.context, { enabled: !!d.click }),
                m = (0, s.iQ)(x.context, { enabled: !!d.focus }),
                v = (0, s.s9)(x.context),
                b = (0, r.useRef)([]),
                I = (0, s.C1)(x.context, {
                  listRef: b,
                  activeIndex: o,
                  selectedIndex: c,
                  onNavigate: l,
                  virtual: !!d.virtualItemFocus,
                  loop: !0,
                  focusItemOnOpen: !1,
                }),
                S = (0, r.useRef)([]),
                C = (0, r.useRef)(!1),
                j = (0, s.lY)(x.context, {
                  enabled: !!d.typeahead,
                  listRef: S,
                  activeIndex: o,
                  selectedIndex: c,
                  onMatch: h ? l : a,
                  onTypingChange: (e) => (C.current = e),
                }),
                w = (0, s.It)(x.context, { role: p }),
                {
                  getFloatingProps: y,
                  getReferenceProps: P,
                  getItemProps: O,
                } = (0, s.bv)([w, g, m, v, I, j]);
              return {
                floating: x,
                getFloatingProps: y,
                getReferenceProps: P,
                getItemProps: O,
                open: h,
                activeIndex: o,
                selectedIndex: c,
                setSelectedIndex: a,
                elementsRef: b,
                labelsRef: S,
                typingRef: C,
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
          return (0, o.jsx)(B.Provider, {
            value: v,
            children: (0, o.jsx)(b, { state: I, children: t }),
          });
        },
        Option: function (e) {
          const { value: t, children: n, disabled: r, ...s } = e,
            {
              onItemSelectionChange: i,
              multiselect: l,
              selectedValue: c,
              maxSelected: a,
            } = M("<SelectTrigger>"),
            d = "string" == typeof t ? t : void 0;
          let u = !1,
            p = !1;
          l
            ? ((u = Array.isArray(c) && c.includes(t)),
              (p = !!a && Array.isArray(c) && c.length >= a))
            : (u = t === c);
          const f = r || (p && !u);
          return (0, o.jsxs)(C, {
            label: d,
            onSelect: () => i(t),
            selected: u,
            disabled: f,
            ...s,
            children: [
              l &&
                (0, o.jsxs)(L.s, {
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
          const { refPopover: t } = M("<Select.Options>");
          return (0, o.jsx)(S, { ref: t, children: e.children });
        },
        Trigger: function (e) {
          const { children: t, render: n } = e,
            {
              bOpen: r,
              setOpen: s,
              selectedValue: i,
              variant: l,
              size: a,
              radius: d,
              status: u,
              rgOptions: p,
              multiselect: f,
              onClear: h,
              focusedValue: x,
              onFocusChange: g,
              onSelectionChange: m,
              clearable: v,
              focusedIndex: b,
              onItemSelectionChange: S,
              onFocusedIndexChange: C,
              refPopover: w,
              placeholder: y,
              maxSelected: O,
              ...z
            } = M("<SelectTrigger>"),
            k = {
              tabIndex: 0,
              role: "combobox",
              onClick: () => s(!r),
              children: t,
            },
            L = f ? Array.isArray(i) && i.length > 0 : !!i,
            V =
              L && v
                ? (0, o.jsx)(_, { onClick: h, cursor: "pointer", hitSlop: !0 })
                : (0, o.jsx)(P, {}),
            F = (0, R.f)("Select", l),
            H = (0, o.jsx)(j.j, {
              afterContent: V,
              variant: F,
              size: a,
              radius: d,
              status: u,
              hasValue: L,
              tabIndex: 0,
              cursor: "pointer",
              ...z,
            }),
            T = (0, c.Q)(n, H, k, void 0);
          return (0, o.jsx)(I, { children: T });
        },
        Value: function (e) {
          return (0, o.jsx)(O.EY, {
            weight: "medium",
            truncate: !0,
            contrast: "title",
            children: e.children,
          });
        },
        Placeholder: function (e) {
          return (0, o.jsx)(O.EY, {
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
      const N = Object.assign(function (e) {
        const {
            selectedValue: t,
            onSelectionChange: n,
            options: r,
            placeholder: s,
            getOptionLabel: i = T,
            ...l
          } = e,
          c = V({
            onSelectionChange: n,
            selectedValue: t,
            rgOptions: r,
            placeholder: s,
          }),
          a = null != t,
          d = a ? i(t) : "";
        return (0, o.jsxs)(N.Root, {
          state: c,
          ...l,
          children: [
            (0, o.jsxs)(N.Trigger, {
              children: [
                a && (0, o.jsx)(N.Value, { children: d }),
                !a && (0, o.jsx)(N.Placeholder, { children: s }),
              ],
            }),
            (0, o.jsx)(N.Options, {
              children: c.rgOptions.map((e, t) =>
                (0, o.jsx)(N.Option, { value: e, children: i(e) }, t),
              ),
            }),
          ],
        });
      }, H);
      const A = H;
      const D = Object.assign(function (e) {
          const {
              selectedValue: t,
              onSelectionChange: n,
              options: r,
              placeholder: s,
              getOptionLabel: i = T,
              maxSelected: l,
              ...c
            } = e,
            a = (function (e) {
              return F(e, !0);
            })({
              onSelectionChange: n,
              selectedValue: t,
              rgOptions: r,
              placeholder: s,
              maxSelected: l,
            }),
            d = Array.isArray(t) && t.length > 0;
          let u = "";
          if (d) {
            const e = t.map((e) => i(e));
            u =
              "ListFormat" in Intl
                ? new Intl.ListFormat(
                    (0, z.A)().languages[0].strISOCode,
                  ).format(e)
                : e.join(", ");
          }
          return (0, o.jsxs)(D.Root, {
            state: a,
            ...c,
            children: [
              (0, o.jsxs)(D.Trigger, {
                children: [
                  d && (0, o.jsx)(D.Value, { children: u }),
                  !d && (0, o.jsx)(D.Placeholder, { children: s }),
                ],
              }),
              (0, o.jsx)(D.Options, {
                children: a.rgOptions.map((e, t) =>
                  (0, o.jsx)(D.Option, { value: e, children: i(e) }, t),
                ),
              }),
            ],
          });
        }, A),
        B = (0, r.createContext)(null);
      function M(e) {
        const t = (0, r.useContext)(B);
        return t || console.error(`${e} must be used within a <Select>!`), t;
      }
    },
    40704: (e, t, n) => {
      "use strict";
      n.d(t, { I: () => l });
      var o = n(7850),
        r = n(11526),
        s = n(75659),
        i = n(16619);
      function l(e) {
        const { viewBoxSize: t = 20, ...n } = e,
          s = n.size ? void 0 : i.IconSizeDefault;
        return (0, o.jsx)("svg", {
          viewBox: `0 0 ${t} ${t}`,
          ...(0, r.mz)({ className: s, ...n }, c),
        });
      }
      const c = [
        ...s.L,
        { prop: "size", responsive: !0, className: (e) => i[`IconSize-${e}`] },
        {
          prop: "color",
          className: i.Color,
          cssProperty: (e) => ["--icon-color", (0, r.w7)(e)],
        },
        {
          prop: "hitSlop",
          className: i.HitSlop,
          cssProperty: (e) => [
            "--hit-slop-custom",
            "string" == typeof e ? e : "",
          ],
        },
        s.h.find(({ prop: e }) => "cursor" === e),
      ];
    },
    80797: (e, t, n) => {
      "use strict";
      n.d(t, { Q: () => s });
      var o = n(90626);
      function r(e, t, n) {
        return "function" == typeof e ? e(t, n) : o.cloneElement(e, t);
      }
      function s(e, t, n, o) {
        return r(e || t, n, o);
      }
    },
    20187: (e, t, n) => {
      "use strict";
      n.d(t, { Ae: () => p, EY: () => d, U6: () => u });
      var o = n(7850),
        r = n(55348),
        s = n(11526),
        i = n(75659),
        l = n(64238),
        c = n.n(l),
        a = n(65274);
      function d(e) {
        const { as: t = "span", ref: n, className: r, ...i } = e,
          l = t;
        return (0, o.jsx)(l, {
          ref: n,
          ...(0, s.mz)({ ...i, className: c()(a.Text, r) }, p),
        });
      }
      const u = [
          {
            prop: "weight",
            responsive: !0,
            className: a.TextWeight,
            cssProperty: (e) => ["--text-weight", `var(--font-weight-${e})`],
          },
          {
            prop: "align",
            responsive: !0,
            className: a.TextAlign,
            cssProperty: "--text-align",
          },
          {
            prop: "color",
            responsive: !0,
            cssProperty: (e, t, n) => [
              "--text-color",
              (0, s.To)(e, (0, r.I)(t.contrast, n) ?? "body"),
            ],
          },
          {
            prop: "contrast",
            responsive: !0,
            cssProperty: (e, t, n) => [
              "--text-color",
              (0, s.To)((0, r.I)(t.color, n) ?? "text-body", e),
            ],
          },
          { prop: "truncate", className: a.Truncate },
          {
            prop: "lineClamp",
            responsive: !0,
            className: a.LineClamp,
            cssProperty: "--line-clamp",
          },
          {
            prop: "whiteSpace",
            className: a.WhiteSpace,
            cssProperty: "--white-space",
          },
        ],
        p = [
          ...u,
          ...i.L,
          {
            prop: "size",
            responsive: !0,
            className: (e) => a[`TextSize-${e}`],
          },
        ];
    },
    64466: (e, t, n) => {
      "use strict";
      n.d(t, { l: () => r });
      var o = n(30470);
      function r(e, t) {
        if (e?.asset_url_format && e[t])
          return (
            o.TS.BASE_URL_SHARED_CDN +
            "/store_item_assets/" +
            e.asset_url_format.replace("${FILENAME}", e[t])
          );
      }
    },
  },
]);
