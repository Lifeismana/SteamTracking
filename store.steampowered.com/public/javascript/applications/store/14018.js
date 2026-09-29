/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [14018],
  {
    48093: (e) => {
      e.exports = {
        ListBox: "_1PUg8GjnBeN7rBK-dcyQFl",
        ListBoxOption: "_20oF9tLSfptitLraDOp6X6",
      };
    },
    14018: (e, n, t) => {
      "use strict";
      t.d(n, { l6: () => M, WM: () => B });
      var o = t(7850),
        i = t(90626),
        r = t(73788),
        l = t(90534),
        s = t(80797),
        c = t(48093);
      const a = Object.assign(
        function (e) {
          const { render: n, ...t } = e;
          return (0, s.Q)(
            n,
            (0, o.jsx)(l.az, {
              radius: "sm",
              background: "dull-8",
              className: c.ListBox,
            }),
            { role: "listbox", ...t },
          );
        },
        {
          Option: function (e) {
            const {
                selected: n,
                focused: t,
                label: i = null,
                render: r,
                disabled: a,
                ...d
              } = e,
              u = n ? "true" : "false",
              h = t ? "true" : void 0;
            return (0, s.Q)(
              r,
              (0, o.jsx)(l.az, {
                focusable: !0,
                "data-selected": u,
                "data-focused": h,
                "aria-disabled": a,
                className: c.ListBoxOption,
                paddingY: "2",
                paddingX: "3",
              }),
              { role: "option", ...d },
              { selected: n, focused: t, disabled: a },
            );
          },
        },
      );
      var d = t(49560),
        u = t(82321),
        h = t(45699),
        p = t(85585),
        f = t(78327);
      const g = (0, i.createContext)(null);
      function x(e) {
        return (0, f.Qn)() ? (0, o.jsx)(b, { ...e }) : (0, o.jsx)(v, { ...e });
      }
      function b(e) {
        const { state: n, children: t } = e,
          r = i.useRef(void 0);
        return (
          (0, h.O7)(r, !0, !0),
          (0, o.jsx)(p.D6, {
            navID: "PopoverList",
            onCancelButton: () => n.floating.context.onOpenChange(!1),
            modal: !0,
            navTreeRef: r,
            children: t,
          })
        );
      }
      function v(e) {
        const { state: n, children: t } = e;
        return (0, o.jsx)(r.s3, {
          context: n.floating.context,
          initialFocus: n.initialFocus,
          returnFocus: !1,
          children: t,
        });
      }
      const m = function (e) {
          const { children: n, state: t } = e;
          return (0, o.jsx)(g.Provider, { value: t, children: n });
        },
        j = function (e) {
          const { children: n } = e,
            t = i.Children.only(n),
            o = (0, i.useContext)(g),
            l = (0, r.SV)([o?.floating.refs.setReference, t?.props.ref]);
          if (!t) return null;
          if (!o)
            return (
              console.error(
                "<PopoverListAnchor> must be a child of <PopoverListRoot>.",
              ),
              null
            );
          const { ref: s, ...c } = t.props;
          return (0, i.cloneElement)(t, { ref: l, ...o.getReferenceProps(c) });
        },
        C = function (e) {
          const { children: n, render: t, ref: l, label: s } = e,
            c = (0, i.useContext)(g),
            d = (0, r.SV)([l, c?.floating.refs.setFloating]);
          return c
            ? c.open
              ? (0, o.jsx)(x, {
                  state: c,
                  children: (0, o.jsx)(u.HF, {
                    presentation: c.presentation,
                    sizing: c.sizing,
                    floatingRef: d,
                    floatingProps: c.getFloatingProps(),
                    floatingStyles: c.floating.floatingStyles,
                    referenceElement: c.floating.elements.domReference,
                    label: s,
                    children: (0, o.jsx)(a, {
                      render: t,
                      children: (0, o.jsx)(r.ph, {
                        elementsRef: c.elementsRef,
                        labelsRef: c.labelsRef,
                        children: n,
                      }),
                    }),
                  }),
                })
              : null
            : (console.error(
                "<PopoverListPositioner> must be a child of <PopoverListRoot>.",
              ),
              null);
        },
        I = function (e) {
          const {
              children: n,
              label: t,
              selected: l,
              onSelect: s,
              ref: c,
              disabled: d,
              ...u
            } = e,
            h = (0, i.useContext)(g),
            { ref: p, index: f } = (0, r.rm)({ label: t }),
            x = (0, r.SV)([c, p]);
          if (!h)
            return (
              console.error(
                "<PopoverListItem> must be a child of <PopoverListRoot>.",
              ),
              null
            );
          const b = f === h.activeIndex,
            v = f === h.selectedIndex || !!l;
          return (0, o.jsx)(a.Option, {
            ref: x,
            selected: v,
            focused: b,
            role: "option",
            tabIndex: 0,
            ...h.getItemProps({
              onClick: d ? void 0 : s,
              onKeyDown: (e) => {
                d ||
                  ("Enter" !== e.key &&
                    (" " !== e.key || h.typingRef.current)) ||
                  (s(e), e.preventDefault(), e.stopPropagation());
              },
              active: b,
              selected: v,
              disabled: d,
              ...u,
            }),
            children: n,
          });
        };
      var O = t(61023),
        S = t(89047),
        L = t(20187),
        P = t(40704);
      function R(e) {
        return (0, o.jsx)(P.I, {
          ...e,
          viewBox: 12,
          children: (0, o.jsx)("path", {
            d: "M10.7068 2.46964L9.53012 1.29297L6.00012 4.81964L2.47012 1.29297L1.29346 2.46964L4.82012 5.99964L1.29346 9.52964L2.47012 10.7063L6.00012 7.17964L9.53012 10.7063L10.7068 9.52964L7.18012 5.99964L10.7068 2.46964Z",
            fill: "currentColor",
          }),
        });
      }
      var y = t(13843);
      var V = t(57757),
        k = t(61011),
        F = t(66922);
      const w = {};
      (w.arabic = () => t.e(47608).then(t.t.bind(t, 47608, 19))),
        (w.brazilian = () => t.e(29930).then(t.t.bind(t, 29930, 19))),
        (w.bulgarian = () => t.e(48465).then(t.t.bind(t, 48465, 19))),
        (w.czech = () => t.e(14027).then(t.t.bind(t, 14027, 19))),
        (w.danish = () => t.e(19661).then(t.t.bind(t, 19661, 19))),
        (w.dutch = () => t.e(94654).then(t.t.bind(t, 94654, 19))),
        (w.english = () => t.e(83996).then(t.t.bind(t, 83996, 19))),
        (w.finnish = () => t.e(47759).then(t.t.bind(t, 47759, 19))),
        (w.french = () => t.e(37140).then(t.t.bind(t, 37140, 19))),
        (w.german = () => t.e(81194).then(t.t.bind(t, 81194, 19))),
        (w.greek = () => t.e(71744).then(t.t.bind(t, 71744, 19))),
        (w.hungarian = () => t.e(59845).then(t.t.bind(t, 59845, 19))),
        (w.indonesian = () => t.e(30308).then(t.t.bind(t, 30308, 19))),
        (w.italian = () => t.e(51380).then(t.t.bind(t, 51380, 19))),
        (w.japanese = () => t.e(787).then(t.t.bind(t, 787, 19))),
        (w.koreana = () => t.e(36691).then(t.t.bind(t, 36691, 19))),
        (w.latam = () => t.e(21579).then(t.t.bind(t, 21579, 19))),
        (w.malay = () => t.e(83924).then(t.t.bind(t, 83924, 19))),
        (w.norwegian = () => t.e(97284).then(t.t.bind(t, 97284, 19))),
        (w.polish = () => t.e(44373).then(t.t.bind(t, 44373, 19))),
        (w.portuguese = () => t.e(32561).then(t.t.bind(t, 32561, 19))),
        (w.romanian = () => t.e(17423).then(t.t.bind(t, 17423, 19))),
        (w.russian = () => t.e(52757).then(t.t.bind(t, 52757, 19))),
        (w.sc_schinese = () => t.e(30175).then(t.t.bind(t, 30175, 19))),
        (w.schinese = () => t.e(6128).then(t.t.bind(t, 6128, 19))),
        (w.spanish = () => t.e(41052).then(t.t.bind(t, 41052, 19))),
        (w.swedish = () => t.e(95773).then(t.t.bind(t, 95773, 19))),
        (w.tchinese = () => t.e(66563).then(t.t.bind(t, 66563, 19))),
        (w.thai = () => t.e(75178).then(t.t.bind(t, 75178, 19))),
        (w.turkish = () => t.e(14028).then(t.t.bind(t, 14028, 19))),
        (w.ukrainian = () => t.e(90778).then(t.t.bind(t, 90778, 19))),
        (w.vietnamese = () => t.e(1291).then(t.t.bind(t, 1291, 19)));
      const A = (0, y.l)(async function (e) {
        if (w[e]) return w[e]();
      });
      var z = t(88006);
      function B(e) {
        return D(e, !1);
      }
      function D(e, n) {
        const { onSelectionChange: t, selectedValue: o, ...r } = e,
          [l, s] = (0, i.useState)(!1),
          c = (0, i.useCallback)(
            (e) => {
              t(e), n || s(!1);
            },
            [t, n],
          ),
          a = (0, i.useCallback)(
            (e) => {
              c(n ? [] : null), e?.stopPropagation(), e?.preventDefault();
            },
            [c, n],
          ),
          d = (0, i.useCallback)(
            (e) => {
              if (n) {
                const n = o,
                  t = n.indexOf(e);
                if (-1 !== t) return c(n.slice(0, t).concat(n.slice(t + 1)));
                c(n.concat(e));
              } else c(e);
            },
            [c, o, n],
          );
        return {
          onSelectionChange: c,
          onItemSelectionChange: d,
          onClear: a,
          bOpen: l,
          setOpen: s,
          multiselect: n,
          selectedValue: o,
          ...r,
        };
      }
      const T = {
        Root: function (e) {
          const {
              children: n,
              state: t,
              placement: l = "bottom-end",
              popoverWidth: s = "dropdown",
              popoverMaxHeight: c,
              popoverPresentation: a,
              popoverLabel: h,
              ...p
            } = e,
            [f, g] = (0, i.useState)(null),
            [x, b] = (0, i.useState)(null),
            v = (0, i.useMemo)(
              () =>
                t.rgOptions.findIndex((e) =>
                  t.multiselect
                    ? t.selectedValue.includes(e)
                    : e === t.selectedValue,
                ),
              [t.selectedValue, t.rgOptions, t.multiselect],
            ),
            j = (0, i.useRef)(null),
            C = {
              ...t,
              ...p,
              focusedValue: f,
              onFocusChange: g,
              refPopover: j,
              popoverLabel: h,
              setOpen: (e) => {
                e && g(t.multiselect ? t.selectedValue[0] : t.selectedValue),
                  t.setOpen(e);
              },
              focusedIndex: x,
              onFocusedIndexChange: b,
            },
            I = (function (e) {
              const {
                open: n,
                activeIndex: t,
                setActiveIndex: o,
                selectedIndex: l,
                setSelectedIndex: s,
                interactions: c = {},
                role: a,
                width: h,
                maxHeight: p,
                gutter: f,
                scroll: g,
              } = e;
              let x = n;
              const b = (0, u.Pr)(e.presentation),
                v = (0, d.Pr)(e, x, b),
                m = (0, r.kp)(v.context, { enabled: !!c.click }),
                j = (0, r.iQ)(v.context, { enabled: !!c.focus }),
                C = (0, r.s9)(v.context),
                I = (0, i.useRef)([]),
                O = (0, r.C1)(v.context, {
                  listRef: I,
                  activeIndex: t,
                  selectedIndex: l,
                  onNavigate: o,
                  virtual: !!c.virtualItemFocus,
                  loop: !0,
                  focusItemOnOpen: !1,
                }),
                S = (0, i.useRef)([]),
                L = (0, i.useRef)(!1),
                P = (0, r.lY)(v.context, {
                  enabled: !!c.typeahead,
                  listRef: S,
                  activeIndex: t,
                  selectedIndex: l,
                  onMatch: x ? o : s,
                  onTypingChange: (e) => (L.current = e),
                }),
                R = (0, r.It)(v.context, { role: a }),
                {
                  getFloatingProps: y,
                  getReferenceProps: V,
                  getItemProps: k,
                } = (0, r.bv)([R, m, j, C, O, P]);
              return {
                floating: v,
                getFloatingProps: y,
                getReferenceProps: V,
                getItemProps: k,
                open: x,
                activeIndex: t,
                selectedIndex: l,
                setSelectedIndex: s,
                elementsRef: I,
                labelsRef: S,
                typingRef: L,
                initialFocus: c.virtualItemFocus ? -1 : void 0,
                presentation: b,
                sizing: { width: h, maxHeight: p, gutter: f, scroll: g },
              };
            })({
              open: t.bOpen,
              onOpenChange: t.setOpen,
              width: s,
              maxHeight: c,
              placement: l,
              presentation: a,
              selectedIndex: v,
              setSelectedIndex: (e) => t.onItemSelectionChange(t.rgOptions[e]),
              activeIndex: x,
              setActiveIndex: b,
              gutter: "4",
              interactions: { click: !0, typeahead: !0 },
              role: "select",
              scroll: !0,
            });
          return (0, o.jsx)(N.Provider, {
            value: C,
            children: (0, o.jsx)(m, { state: I, children: n }),
          });
        },
        Option: function (e) {
          const { value: n, children: t, disabled: i, ...r } = e,
            {
              onItemSelectionChange: l,
              multiselect: s,
              selectedValue: c,
              maxSelected: a,
            } = Y("<SelectTrigger>"),
            d = "string" == typeof n ? n : void 0;
          let u = !1,
            h = !1;
          s
            ? ((u = Array.isArray(c) && c.includes(n)),
              (h = !!a && Array.isArray(c) && c.length >= a))
            : (u = n === c);
          const p = i || (h && !u);
          return (0, o.jsxs)(I, {
            label: d,
            onSelect: () => l(n),
            selected: u,
            disabled: p,
            ...r,
            children: [
              s &&
                (0, o.jsxs)(k.s, {
                  gap: "2",
                  align: "center",
                  children: [
                    (0, o.jsx)(V.S, { checked: u, variant: "dark" }),
                    t,
                  ],
                }),
              !s && t,
            ],
          });
        },
        Options: function (e) {
          const { refPopover: n, popoverLabel: t } = Y("<Select.Options>");
          return (0, o.jsx)(C, { ref: n, label: t, children: e.children });
        },
        Trigger: function (e) {
          const { children: n, render: t } = e,
            {
              bOpen: i,
              setOpen: r,
              selectedValue: l,
              variant: c,
              size: a,
              radius: d,
              status: u,
              rgOptions: h,
              multiselect: p,
              onClear: f,
              focusedValue: g,
              onFocusChange: x,
              onSelectionChange: b,
              clearable: v,
              focusedIndex: m,
              onItemSelectionChange: C,
              onFocusedIndexChange: I,
              refPopover: L,
              popoverLabel: P,
              placeholder: y,
              maxSelected: V,
              ...k
            } = Y("<SelectTrigger>"),
            w = {
              tabIndex: 0,
              role: "combobox",
              onClick: () => r(!i),
              children: n,
            },
            B = p ? Array.isArray(l) && l.length > 0 : !!l,
            D = B && v,
            T = D
              ? (0, o.jsx)(R, { onClick: f, cursor: "pointer", hitSlop: !0 })
              : (0, o.jsx)(S.V, {}),
            E = D
              ? {
                  onSecondaryButton: f,
                  actionDescriptionMap: {
                    [z.pR.SECONDARY]: A.Localize("#Clear"),
                  },
                }
              : void 0,
            M = (0, F.f)("Select", c),
            Q = (0, o.jsx)(O.j, {
              afterContent: T,
              variant: M,
              size: a,
              radius: d,
              status: u,
              hasValue: B,
              tabIndex: 0,
              cursor: "pointer",
              navProps: E,
              ...k,
            }),
            H = (0, s.Q)(t, Q, w, void 0);
          return (0, o.jsx)(j, { children: H });
        },
        Value: function (e) {
          return (0, o.jsx)(L.EY, {
            weight: "medium",
            truncate: !0,
            contrast: "title",
            children: e.children,
          });
        },
        Placeholder: function (e) {
          return (0, o.jsx)(L.EY, {
            contrast: "description",
            truncate: !0,
            children: e.children,
          });
        },
      };
      function E(e) {
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
      const M = Object.assign(function (e) {
        const {
            selectedValue: n,
            onSelectionChange: t,
            options: i,
            placeholder: r,
            getOptionLabel: l = E,
            ...s
          } = e,
          c = B({
            onSelectionChange: t,
            selectedValue: n,
            rgOptions: i,
            placeholder: r,
          }),
          a = null != n,
          d = a ? l(n) : "";
        return (0, o.jsxs)(M.Root, {
          state: c,
          ...s,
          children: [
            (0, o.jsxs)(M.Trigger, {
              children: [
                a && (0, o.jsx)(M.Value, { children: d }),
                !a && (0, o.jsx)(M.Placeholder, { children: r }),
              ],
            }),
            (0, o.jsx)(M.Options, {
              children: c.rgOptions.map((e, n) =>
                (0, o.jsx)(M.Option, { value: e, children: l(e) }, n),
              ),
            }),
          ],
        });
      }, T);
      const Q = T;
      const H = Object.assign(function (e) {
          const {
              selectedValue: n,
              onSelectionChange: t,
              options: i,
              placeholder: r,
              getOptionLabel: l = E,
              maxSelected: s,
              ...c
            } = e,
            a = (function (e) {
              return D(e, !0);
            })({
              onSelectionChange: t,
              selectedValue: n,
              rgOptions: i,
              placeholder: r,
              maxSelected: s,
            }),
            d = Array.isArray(n) && n.length > 0;
          let u = "";
          if (d) {
            const e = n.map((e) => l(e));
            u =
              "ListFormat" in Intl
                ? new Intl.ListFormat(
                    (0, y.A)().languages[0].strISOCode,
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
                  !d && (0, o.jsx)(H.Placeholder, { children: r }),
                ],
              }),
              (0, o.jsx)(H.Options, {
                children: a.rgOptions.map((e, n) =>
                  (0, o.jsx)(H.Option, { value: e, children: l(e) }, n),
                ),
              }),
            ],
          });
        }, Q),
        N = (0, i.createContext)(null);
      function Y(e) {
        const n = (0, i.useContext)(N);
        return n || console.error(`${e} must be used within a <Select>!`), n;
      }
    },
  },
]);
