/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [48312],
  {
    69041: (e) => {
      e.exports = {
        Button: "_0BH1ydyFmSnUvoVK2hIc",
        "Size-1": "_3QKUrmKA1DptBhihc8GSAF",
        Icon: "_2_fy3SzcKa1xbrgpG7JsW1",
        "Size-2": "_2rbqjlRz2ShvIiYodebfc2",
        "Size-3": "_2WV0DrM2sIAtg0N1lOU26f",
        "Variant-default": "RttCMpsTJp47IkzXpZYvA",
        "Variant-inverted": "RmQIHBmo3QqjBtWih540t",
        "Variant-outline": "_3Ivla_Ow2vkS32o8Ih_PeA",
        "Variant-ghost": "_2oeLjYS5GL7cq3t8V_fC-8",
        "Variant-vibrant": "HpR1uGt2MH6wMkWZz8XTQ",
        Width: "_3sJrbUPuxxtvf7RM9OYpwU",
        MinWidth: "_1SOkb8NGXTctRFJs2fKHh-",
      };
    },
    73406: (e) => {
      e.exports = {
        Spinner: "_2DCKU_4nS3RTO87T3YPOx_",
        LoadingSpinnerAmin: "_1SGyFmFKc3sUwmfqrrtxxJ",
        "Size-1": "_1Vxi9jNBkNCJzht7q4pUcZ",
        "Size-2": "_4YMNfb67K5DdLQo1iUILX",
        "Size-3": "_389OPmdZoebw42_AlsUFxi",
        "Size-4": "_2_bEJtUl18pDhzOGeCFemg",
        "Size-5": "_1XSG-5xKQMEoGjfZTMCTke",
        "Variant-solid": "lQP4sfWThY4O0ZGRwTFFo",
        "Variant-bright": "_3Jl5ljGbdHy_fzyOpYdWpB",
        ChildContainer: "_3drTSOAFK4l1BW7WUUbGvs",
      };
    },
    44041: (e) => {
      e.exports = { Box: "_2YzOLNBx6TonKU0Zmp20l4" };
    },
    68875: (e) => {
      e.exports = {
        Flex: "_3nHL7awgK1Qei1XivGvHMK",
        Direction: "_3JCkAyd9cnB90tRcDLPp4W",
        Justify: "_12ampOcrpRamy1y301kEaK",
        Align: "_1SxQuUnaM-MXeF5UfssWve",
        Gap: "ja5o2GZTopxfGJArsZgFh",
        GapX: "_3KiTPfFvdkPH6ixij56nVM",
        GapY: "_38cfDT7owcq-7PHlx-Bx2j",
        Wrap: "dB7ipW28YN-_GytLR4EuE",
        Inline: "LOeaKjPDMbdcAB54IFgyX",
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
    91239: (e) => {
      e.exports = { Reset: "_3A_c3YHYd4YIjA8Y-olnPl" };
    },
    53965: (e, t, n) => {
      "use strict";
      n.d(t, { $: () => _, v: () => y });
      var o = n(7850),
        s = n(64238),
        i = n.n(s),
        r = n(69041),
        a = n(75659),
        c = n(11526),
        l = n(11820),
        p = n(73406),
        f = n(90534),
        u = n(83392);
      function d(e) {
        const {
          size: t = "3",
          loading: n = !0,
          children: s,
          color: i,
          variant: r,
          ...a
        } = e;
        return s || !n
          ? (0, o.jsxs)(f.az, {
              position: "relative",
              ...a,
              width: "fit-content",
              children: [
                (0, o.jsx)("div", {
                  "data-visibility": !n,
                  className: p.ChildContainer,
                  children: s,
                }),
                n &&
                  (0, o.jsx)(u.s, {
                    position: "absolute",
                    inset: "0",
                    justify: "center",
                    align: "center",
                    children: (0, o.jsx)(h, { size: t, color: i, variant: r }),
                  }),
              ],
            })
          : (0, o.jsx)(h, { size: t, color: i, variant: r, ...a });
      }
      function h(e) {
        const { className: t, color: n, ...s } = (0, c.mz)(e, x);
        return (0, o.jsx)("div", {
          "data-accent-color": n,
          className: i()(t, p.Spinner),
          ...s,
        });
      }
      const x = [
        ...a.L,
        { prop: "size", responsive: !0, className: (e) => p[`Size-${e}`] },
        { prop: "variant", className: (e) => p[`Variant-${e}`] },
      ];
      var m = n(45699),
        v = n(8527);
      function g(e) {
        e.preventDefault();
      }
      const P = [
          ...a.L,
          { prop: "size", responsive: !0, className: (e) => r[`Size-${e}`] },
          { prop: "variant", className: (e) => r[`Variant-${e}`] },
          { prop: "color", dataProperty: (e) => ["accent-color", `${e}`] },
          {
            prop: "width",
            className: r.Width,
            cssProperty: "--width",
            responsive: !0,
          },
          {
            prop: "minWidth",
            className: r.MinWidth,
            cssProperty: "--min-width",
            responsive: !0,
          },
        ],
        _ = function (e) {
          const {
              variant: t = "default",
              size: n = "2",
              minWidth: s = "fit-content",
              color: a,
              loading: l,
              children: p,
              onClick: f,
              icon: u,
              focusable: h,
              navProps: x,
              ...g
            } = e,
            _ = l
              ? (0, o.jsx)(d, {
                  size: n,
                  color: a,
                  variant: "bright",
                  children: p,
                })
              : p,
            y = l ? void 0 : f,
            b = h ?? x?.focusable ?? !!y,
            z = {
              type: "button",
              ...(0, c.mz)(
                {
                  ...g,
                  variant: t,
                  size: n,
                  minWidth: s,
                  color: a,
                  className: i()(r.Button, u && r.Icon),
                  onClick: y,
                },
                P,
              ),
              children: _,
            };
          return v.TS.IN_GAMEPADUI && (b || x)
            ? (0, o.jsx)(m.fu, { ...z, ...(x || {}), focusable: b })
            : (0, o.jsx)("button", { ...z });
        },
        y = function (e) {
          const {
              variant: t = "default",
              size: n = "2",
              minWidth: s = "fit-content",
              disabled: a,
              icon: p,
              focusable: f,
              navProps: u,
              ...d
            } = e,
            h = a ? g : void 0,
            x = (0, c.mz)(
              {
                onClick: h,
                ...d,
                variant: t,
                size: n,
                minWidth: s,
                className: i()(r.Button, p && r.Icon, (0, l.T)()),
              },
              P,
            );
          return v.TS.IN_GAMEPADUI && (f || u)
            ? (0, o.jsx)(m.Ii, { ...x, ...(u || {}), focusable: f })
            : (0, o.jsx)("a", { ...x });
        };
    },
    49560: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => b, p: () => y });
      var o = n(7850),
        s = n(90626),
        i = n(73788),
        r = n(28505),
        a = n(94621),
        c = n(8871),
        l = n(45699),
        p = n(85585),
        f = n(7445),
        u = n(8527),
        d = n(81393),
        h = n(64238),
        x = n.n(h),
        m = n(11820);
      const v = (0, s.createContext)(null);
      function g(e) {
        return u.TS.IN_GAMEPADUI
          ? (0, o.jsx)(P, { ...e })
          : (0, o.jsx)(_, { ...e });
      }
      function P(e) {
        const { children: t } = e,
          n = (0, s.useContext)(v);
        (0, d.wT)(
          !!n,
          "<Popover.Positioner> must be a child of <Popover.Root>.",
        );
        const i = s.useRef(void 0);
        return (
          (0, l.O7)(i, !!i.current, !1),
          (0, o.jsx)(p.D6, {
            navID: "Popover",
            onCancelButton: () => n.floating.context.onOpenChange(!1),
            modal: !0,
            navTreeRef: i,
            children: (0, o.jsx)("div", {
              style: { display: "contents" },
              children: (0, o.jsx)(f.q, { children: t }),
            }),
          })
        );
      }
      function _(e) {
        const { children: t } = e,
          n = (0, s.useContext)(v);
        return (
          (0, d.wT)(
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
      function y(e) {
        const { gutter: t = 0, placement: n } = e,
          o = [],
          s = n && "object" == typeof n;
        return (
          s && n.offset
            ? o.push((0, a.cY)(n.offset))
            : (s && void 0 !== n.offset) || o.push((0, a.cY)(2)),
          s && n.flip
            ? o.push((0, a.UU)(n.flip))
            : (s && void 0 !== n.flip) || o.push((0, a.UU)()),
          s && n.shift
            ? o.push((0, a.BN)(n.shift))
            : (s && void 0 !== n.shift) || o.push((0, a.BN)()),
          o.push(
            (0, a.Ej)({
              apply: (n) => {
                const { rects: o, elements: s, availableHeight: i } = n,
                  r = { boxSizing: "border-box", zIndex: "1" };
                switch ((e.scroll && (r.overflowY = "auto"), e.width)) {
                  case "target":
                    r.width = `${o.reference.width}px`;
                    break;
                  case "content":
                    r.width = `${o.floating.width}px`;
                    break;
                  case "dropdown": {
                    let e = o.reference.width;
                    o.floating.width > e && e < 200 && (e = o.floating.width),
                      (r.width = `${e}px`);
                  }
                }
                "function" == typeof e.width &&
                  (r.width = e.width({
                    unContentWidth: o.floating.width,
                    unTargetWidth: o.reference.width,
                  }));
                const a =
                  "number" == typeof t ? `${t}px` : `var(--spacing-${t})`;
                "function" == typeof e.maxHeight
                  ? (r.maxHeight = e.maxHeight({
                      unAvailableHeight: i,
                      gutter: a,
                    }))
                  : "number" == typeof e.maxHeight
                    ? (r.maxHeight = `min( calc( ${i}px - ${a} ), ${e.maxHeight}px )`)
                    : (r.maxHeight =
                        "number" == typeof t
                          ? i - t + "px"
                          : `calc( ${i}px - var(--spacing-${t}) )`),
                  Object.assign(s.floating.style, r),
                  s.floating.style.setProperty(
                    "--popover-max-height",
                    r.maxHeight,
                  );
              },
            }),
          ),
          o
        );
      }
      const b = {
        Root: function (e) {
          const { children: t, ...n } = e,
            s = (function (e) {
              const {
                open: t,
                onOpenChange: n,
                placement: o,
                interactions: s = {},
              } = e;
              let a = t;
              0;
              const c = (0, i.we)({
                  open: a,
                  onOpenChange: n,
                  middleware: y(e),
                  whileElementsMounted: r.ll,
                  placement: o && "object" == typeof o ? o.initial : o,
                  strategy: "fixed",
                  platform: {
                    ...r.iD,
                    getOffsetParent: (e) =>
                      e?.ownerDocument?.defaultView ?? window,
                  },
                }),
                l = (0, i.kp)(c.context, { enabled: !!s.click }),
                p = (0, i.iQ)(c.context, { enabled: !!s.focus }),
                f = { handleClose: (0, i.iB)() },
                u = "function" == typeof s.hover ? s.hover(f) : f,
                d = (0, i.Mk)(c.context, { enabled: !!s.hover, ...u }),
                h = (0, i.s9)(c.context),
                { getFloatingProps: x, getReferenceProps: m } = (0, i.bv)([
                  l,
                  p,
                  d,
                  h,
                ]);
              return {
                floating: c,
                getFloatingProps: x,
                getReferenceProps: m,
                open: a,
              };
            })(n);
          return (0, o.jsx)(v.Provider, { value: s, children: t });
        },
        Anchor: function (e) {
          const { children: t } = e,
            n = s.Children.only(t),
            o = (0, s.useContext)(v);
          return n
            ? o
              ? (0, s.cloneElement)(n, {
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
          const { children: t, className: n, ref: r } = e,
            a = (0, s.useContext)(v),
            c = (0, i.SV)([
              r,
              a?.floating.refs.setFloating,
              (e) => e?.showPopover?.(),
            ]);
          if (!a)
            return (
              console.error(
                "<Popover.Positioner> must be a child of <Popover.Root>.",
              ),
              null
            );
          if (!a.open) return null;
          let l = s.Children.only(t),
            p = s.Fragment;
          l.type == b.FocusManager &&
            ((l = s.Children.only(l.props.children)), (p = g));
          const f = (0, s.cloneElement)(l, {
            ref: c,
            style: { ...a.floating.floatingStyles },
            className: x()((0, m.T)(), n),
            popover: "manual",
            ...a.getFloatingProps(),
          });
          return (0, o.jsx)(p, { children: f });
        },
        FocusManager: g,
      };
    },
    90534: (e, t, n) => {
      "use strict";
      n.d(t, { az: () => u });
      var o = n(7850),
        s = n(44041),
        i = n(39479),
        r = n(64238),
        a = n.n(r),
        c = n(11526),
        l = n(75659),
        p = n(8527),
        f = n(11820);
      function u(e) {
        const { as: t = "div", focusable: n, navProps: r, ref: l, ...u } = e,
          h = (0, c.mz)(
            { ...u, className: a()(s.Box, (0, f.T)(), e.className) },
            d,
          ),
          x = n ?? r?.focusable ?? !!u.onClick,
          m = (0, o.jsx)(t, { ref: l, ...h });
        return p.TS.IN_GAMEPADUI && (x || r)
          ? (0, o.jsx)(i.J, { ...(r || {}), focusable: x, children: m })
          : m;
      }
      const d = l.h;
    },
    83392: (e, t, n) => {
      "use strict";
      n.d(t, { s: () => u });
      var o = n(7850),
        s = n(39479),
        i = n(64238),
        r = n.n(i),
        a = n(11526),
        c = n(55348),
        l = n(75659),
        p = n(68875),
        f = n(8527);
      function u(e) {
        const { as: t = "div", focusable: n, navProps: i, ref: l, ...u } = e,
          h = (0, a.mz)({ ...u, className: r()(e.className, p.Flex) }, d),
          x = n ?? i?.focusable ?? !!u.onClick,
          m = (0, o.jsx)(t, { ref: l, ...h }),
          v = (0, c.n)(u.direction ?? "row");
        return f.TS.IN_GAMEPADUI
          ? (0, o.jsx)(s.J, {
              ...(i || {}),
              focusable: x,
              "flow-children": v,
              children: m,
            })
          : m;
      }
      const d = [
        ...l.h,
        {
          prop: "direction",
          responsive: !0,
          className: p.Direction,
          cssProperty: "--direction",
        },
        {
          prop: "justify",
          responsive: !0,
          className: p.Justify,
          cssProperty: (e) => ["--justify", h(e)],
        },
        {
          prop: "align",
          responsive: !0,
          className: p.Align,
          cssProperty: "--align",
        },
        {
          prop: "gap",
          responsive: !0,
          className: p.Gap,
          cssProperty: (e) => ["--gap", `var(--spacing-${e})`],
        },
        {
          prop: "gapX",
          responsive: !0,
          className: p.GapX,
          cssProperty: (e) => ["--gap-x", `var(--spacing-${e})`],
        },
        {
          prop: "gapY",
          responsive: !0,
          className: p.GapY,
          cssProperty: (e) => ["--gap-y", `var(--spacing-${e})`],
        },
        {
          prop: "wrap",
          responsive: !0,
          className: p.Wrap,
          cssProperty: "--wrap",
        },
        { prop: "inline", responsive: !0, className: p.Inline },
      ];
      function h(e) {
        return /^(between|around|evenly)$/.test(e) ? `space-${e}` : e;
      }
    },
    20187: (e, t, n) => {
      "use strict";
      n.d(t, { Ae: () => u, EY: () => p, U6: () => f });
      var o = n(7850),
        s = n(55348),
        i = n(11526),
        r = n(75659),
        a = n(64238),
        c = n.n(a),
        l = n(65274);
      function p(e) {
        const { as: t = "span", ref: n, className: s, ...r } = e,
          a = t;
        return (0, o.jsx)(a, {
          ref: n,
          ...(0, i.mz)({ ...r, className: c()(l.Text, s) }, u),
        });
      }
      const f = [
          {
            prop: "weight",
            responsive: !0,
            className: l.TextWeight,
            cssProperty: (e) => ["--text-weight", `var(--font-weight-${e})`],
          },
          {
            prop: "align",
            responsive: !0,
            className: l.TextAlign,
            cssProperty: "--text-align",
          },
          {
            prop: "color",
            responsive: !0,
            cssProperty: (e, t, n) => [
              "--text-color",
              (0, i.To)(e, (0, s.I)(t.contrast, n) ?? "body"),
            ],
          },
          {
            prop: "contrast",
            responsive: !0,
            cssProperty: (e, t, n) => [
              "--text-color",
              (0, i.To)((0, s.I)(t.color, n) ?? "text-body", e),
            ],
          },
          { prop: "truncate", className: l.Truncate },
          {
            prop: "lineClamp",
            responsive: !0,
            className: l.LineClamp,
            cssProperty: "--line-clamp",
          },
          {
            prop: "whiteSpace",
            className: l.WhiteSpace,
            cssProperty: "--white-space",
          },
        ],
        u = [
          ...f,
          ...r.L,
          {
            prop: "size",
            responsive: !0,
            className: (e) => l[`TextSize-${e}`],
          },
        ];
    },
    11820: (e, t, n) => {
      "use strict";
      n.d(t, { T: () => s });
      var o = n(91239);
      function s() {
        return o.Reset;
      }
    },
  },
]);
