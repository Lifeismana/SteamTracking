/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [88903],
    {
      86946: (V, X, t) => {
        "use strict";
        t.d(X, { j: () => G });
        var e = t(7850),
          A = t(64238),
          M = t.n(A),
          f = t(38878),
          R = t.n(f),
          E = t(60351),
          I = t(68031),
          g = t(8928),
          o = t(69289);
        function G(C) {
          const {
              children: b,
              beforeContent: S,
              afterContent: h,
              hasValue: B,
              ...y
            } = C,
            Z = D(y);
          return (0, e.jsxs)(I.s, {
            ...Z,
            align: "center",
            "data-has-value": !!B,
            children: [
              S && (0, e.jsx)(I.s, { paddingRight: "2", children: S }),
              (0, e.jsx)(E.az, { flexGrow: "1", minWidth: "0", children: b }),
              h && (0, e.jsx)(I.s, { paddingLeft: "2", children: h }),
            ],
          });
        }
        function D(C) {
          const {
              variant: b = "basic",
              size: S = "2",
              radius: h,
              focusable: B = !0,
              hoverable: y = !0,
              clickable: Z = !0,
              disabled: k,
              className: te,
              status: l,
              ...p
            } = C,
            s = b === "underline" ? "none" : h;
          return (0, o.mz)(
            {
              ...p,
              radius: s,
              "data-status": l,
              className: M()(
                f.ControlBox,
                B && !k && f.Focusable,
                y && !k && f.Hoverable,
                Z && !k && f.Clickable,
                k && f.Disabled,
                f[`Variant-${b}`],
                f[`Size-${S}`],
                te,
              ),
            },
            g.h,
          );
        }
      },
      84909: (V, X, t) => {
        "use strict";
        t.d(X, { A: () => d, p: () => s });
        var e = t(7850),
          A = t(90626),
          M = t(73788),
          f = t(8083),
          R = t(94621),
          E = t(18938),
          I = t(24660),
          g = t(38566),
          o = t(54130),
          G = t(71742),
          D = t(64238),
          C = t.n(D),
          b = t(3877),
          S = t(3166);
        const h = (0, A.createContext)(null);
        function B(_) {
          const { children: c, ...m } = _,
            U = p(m);
          return (0, e.jsx)(h.Provider, { value: U, children: c });
        }
        function y(_) {
          const { children: c } = _,
            m = A.Children.only(c),
            U = (0, A.useContext)(h);
          return m
            ? U
              ? (0, A.cloneElement)(m, {
                  ...U.getReferenceProps(m.props),
                  ref: (0, E.XB)(m.props.ref, U.floating.refs.setReference),
                })
              : (console.error(
                  "<PopoverAnchor> must be a child of <PopoverRoot>.",
                ),
                null)
            : null;
        }
        function Z(_) {
          const { children: c, className: m, ref: U } = _,
            N = (0, A.useContext)(h),
            Y = (0, M.SV)([
              U,
              N?.floating.refs.setFloating,
              (P) => P?.showPopover?.(),
            ]);
          if (!N)
            return (
              console.error(
                "<Popover.Positioner> must be a child of <Popover.Root>.",
              ),
              null
            );
          if (!N.open) return null;
          let x = A.Children.only(c),
            v = A.Fragment;
          x.type == d.FocusManager &&
            ((x = A.Children.only(x.props.children)), (v = k));
          const L = (0, A.cloneElement)(x, {
            ref: Y,
            style: { ...N.floating.floatingStyles },
            className: C()((0, b.T)(), m),
            popover: "manual",
            ...N.getFloatingProps(),
          });
          return (0, e.jsx)(v, { children: L });
        }
        function k(_) {
          return (0, S.Qn)()
            ? (0, e.jsx)(te, { ..._ })
            : (0, e.jsx)(l, { ..._ });
        }
        function te(_) {
          const { children: c } = _,
            m = (0, A.useContext)(h);
          (0, G.wT)(
            !!m,
            "<Popover.Positioner> must be a child of <Popover.Root>.",
          );
          const U = () => m.floating.context.onOpenChange(!1),
            N = A.useRef(void 0);
          return (
            (0, I.O7)(N, !!N.current, !1),
            (0, e.jsx)(g.D6, {
              navID: "Popover",
              onCancelButton: U,
              modal: !0,
              navTreeRef: N,
              children: (0, e.jsx)("div", {
                style: { display: "contents" },
                children: (0, e.jsx)(o.q, { children: c }),
              }),
            })
          );
        }
        function l(_) {
          const { children: c } = _,
            m = (0, A.useContext)(h);
          return (
            (0, G.wT)(
              !!m,
              "<Popover.Positioner> must be a child of <Popover.Root>.",
            ),
            (0, e.jsx)(M.s3, {
              context: m.floating.context,
              initialFocus: -1,
              returnFocus: !1,
              children: c,
            })
          );
        }
        function p(_) {
          const {
            open: c,
            onOpenChange: m,
            placement: U,
            interactions: N = {},
          } = _;
          let Y = c;
          const x = (0, M.we)({
              open: Y,
              onOpenChange: m,
              middleware: s(_),
              whileElementsMounted: f.ll,
              placement: U && typeof U == "object" ? U.initial : U,
              strategy: "fixed",
              platform: {
                ...f.iD,
                getOffsetParent: (De) =>
                  De?.ownerDocument?.defaultView ?? window,
              },
            }),
            v = { enabled: !!N.click },
            L = typeof N.click == "function" ? N.click(v) : v,
            P = (0, M.kp)(x.context, L),
            H = { enabled: !!N.focus },
            z = typeof N.focus == "function" ? N.focus(H) : H,
            W = (0, M.iQ)(x.context, z),
            $ = { handleClose: (0, M.iB)() },
            J = typeof N.hover == "function" ? N.hover($) : $,
            se = (0, M.Mk)(x.context, { enabled: !!N.hover, ...J }),
            _e = (0, M.s9)(x.context),
            { getFloatingProps: ue, getReferenceProps: me } = (0, M.bv)([
              P,
              W,
              se,
              _e,
            ]);
          return {
            floating: x,
            getFloatingProps: ue,
            getReferenceProps: me,
            open: Y,
          };
        }
        function s(_) {
          const { gutter: c = 0, placement: m } = _,
            U = [],
            N = m && typeof m == "object";
          return (
            N && m.offset
              ? U.push((0, R.cY)(m.offset))
              : (!N || m.offset === void 0) && U.push((0, R.cY)(2)),
            N && m.flip
              ? U.push((0, R.UU)(m.flip))
              : (!N || m.flip === void 0) && U.push((0, R.UU)()),
            N && m.shift
              ? U.push((0, R.BN)(m.shift))
              : (!N || m.shift === void 0) && U.push((0, R.BN)()),
            U.push(
              (0, R.Ej)({
                apply: (Y) => {
                  const { rects: x, elements: v, availableHeight: L } = Y,
                    P = { boxSizing: "border-box", zIndex: "1" };
                  switch ((_.scroll && (P.overflowY = "auto"), _.width)) {
                    case "target": {
                      P.width = `${x.reference.width}px`;
                      break;
                    }
                    case "content": {
                      P.width = `${x.floating.width}px`;
                      break;
                    }
                    case "dropdown": {
                      let z = x.reference.width;
                      x.floating.width > z && z < 200 && (z = x.floating.width),
                        (P.width = `${z}px`);
                    }
                  }
                  typeof _.width == "function" &&
                    (P.width = _.width({
                      unContentWidth: x.floating.width,
                      unTargetWidth: x.reference.width,
                    }));
                  const H =
                    typeof c == "number" ? `${c}px` : `var(--spacing-${c})`;
                  typeof _.maxHeight == "function"
                    ? (P.maxHeight = _.maxHeight({
                        unAvailableHeight: L,
                        gutter: H,
                      }))
                    : typeof _.maxHeight == "number"
                      ? (P.maxHeight = `min( calc( ${L}px - ${H} ), ${_.maxHeight}px )`)
                      : typeof c == "number"
                        ? (P.maxHeight = `${L - c}px`)
                        : (P.maxHeight = `calc( ${L}px - var(--spacing-${c}) )`),
                    Object.assign(v.floating.style, P),
                    v.floating.style.setProperty(
                      "--popover-max-height",
                      P.maxHeight,
                    );
                },
              }),
            ),
            U
          );
        }
        const d = { Root: B, Anchor: y, Positioner: Z, FocusManager: k };
      },
      76854: (V, X, t) => {
        "use strict";
        t.d(X, { Q: () => M });
        var e = t(90626);
        function A(f, R, E) {
          return typeof f == "function" ? f(R, E) : e.cloneElement(f, R);
        }
        function M(f, R, E, I) {
          return A(f || R, E, I);
        }
      },
      15252: (V, X, t) => {
        "use strict";
        t.d(X, { Ae: () => D, EY: () => o, U6: () => G });
        var e = t(7850),
          A = t(1039),
          M = t(69289),
          f = t(8928),
          R = t(64238),
          E = t.n(R),
          I = t(65274),
          g = t.n(I);
        function o(C) {
          const { as: b = "span", ref: S, className: h, ...B } = C,
            y = b;
          return (0, e.jsx)(y, {
            ref: S,
            ...(0, M.mz)({ ...B, className: E()(I.Text, h) }, D),
          });
        }
        const G = [
            {
              prop: "weight",
              responsive: !0,
              className: I.TextWeight,
              cssProperty: (C) => ["--text-weight", `var(--font-weight-${C})`],
            },
            {
              prop: "align",
              responsive: !0,
              className: I.TextAlign,
              cssProperty: "--text-align",
            },
            {
              prop: "color",
              responsive: !0,
              cssProperty: (C, b, S) => [
                "--text-color",
                (0, M.To)(C, (0, A.I)(b.contrast, S) ?? "body"),
              ],
            },
            {
              prop: "contrast",
              responsive: !0,
              cssProperty: (C, b, S) => [
                "--text-color",
                (0, M.To)((0, A.I)(b.color, S) ?? "text-body", C),
              ],
            },
            { prop: "truncate", className: I.Truncate },
            {
              prop: "lineClamp",
              responsive: !0,
              className: I.LineClamp,
              cssProperty: "--line-clamp",
            },
            {
              prop: "whiteSpace",
              className: I.WhiteSpace,
              cssProperty: "--white-space",
            },
          ],
          D = [
            ...G,
            ...f.L,
            {
              prop: "size",
              responsive: !0,
              className: (C) => I[`TextSize-${C}`],
            },
          ];
      },
      86336: (V, X, t) => {
        "use strict";
        t.d(X, { W: () => D, Y: () => o });
        var e = t(7850),
          A = t(50122),
          M = t.n(A),
          f = t(15252),
          R = t(69289),
          E = t(24660),
          I = t(70182),
          g = t(3166);
        function o(C) {
          const { underline: b = "auto", focusable: S, navProps: h, ...B } = C,
            y = (0, g.Qn)(),
            Z = S ?? h?.focusable ?? !!B.href,
            k = (0, R.mz)({ ...B, underline: b, className: A.TextLink }, G);
          return y && (Z || h)
            ? (0, e.jsx)(E.Ii, { ...k, ...(h || {}), focusable: Z })
            : (0, e.jsx)("a", { ...k });
        }
        const G = [
          ...f.Ae,
          { prop: "underline", className: (C) => A[`Underline-${C}`] },
        ];
        function D(C) {
          const { underline: b = "auto", focusable: S, navProps: h, ...B } = C,
            y = (0, g.Qn)(),
            Z = S ?? h?.focusable ?? !!B.onClick,
            k = (0, e.jsx)("span", {
              role: "button",
              ...(0, R.mz)(
                { ...B, underline: b, className: A.TextLinkButton },
                G,
              ),
            });
          return y && (Z || h)
            ? (0, e.jsx)(I.J, { ...(h || {}), focusable: Z, children: k })
            : k;
        }
      },
      15860: (V, X, t) => {
        "use strict";
        t.d(X, { L: () => E, c: () => R });
        var e = t(27386),
          A = t(76617),
          M = t(58632),
          f = t.n(M);
        function R(I, g) {
          return new (f())(
            async (o) => {
              const G = [...o],
                D = await e.xtC.GetPlayerLinkDetails(I, { steamids: G }),
                C = new Map();
              return (
                D.Body()
                  .accounts()
                  .forEach((b) => {
                    const S = b.toObject();
                    C.set(S.public_data.steamid, S);
                  }),
                G.map((b) => C.get(b) ?? null)
              );
            },
            { maxBatchSize: 100, cache: !1, ...g },
          );
        }
        function E(I) {
          return (0, A.V)("PlayerLinkDetails", () => R(I));
        }
      },
      79083: (V, X, t) => {
        "use strict";
        t.d(X, { m: () => R, U: () => E });
        var e = t(7850),
          A = t(36118),
          M = ((I) => (
            (I.k_ECutArrowStyle = "single"),
            (I.k_EDoubleArrowStyle = "double"),
            (I.k_EThickChevron = "chevron"),
            (I.k_EFilledArrow = "filled"),
            (I.k_EPointyArrow = "pointy"),
            I
          ))(M || {}),
          f = ((I) => (
            (I.k_EPillCrumb = "pill"),
            (I.k_ECircularCrumb = "circle"),
            (I.k_ESquareCrumb = "square"),
            I
          ))(f || {});
        function R(I) {
          const { arrowFill: g, arrowStyle: o, direction: G } = I;
          switch (o) {
            default:
            case M.k_ECutArrowStyle: {
              const D = G == "right" ? 0 : 180;
              return (0, e.jsx)(A.uMb, {
                fill: g || "white",
                role: "presentation",
                angle: D,
              });
            }
            case M.k_EDoubleArrowStyle: {
              const D = G == "right" ? 180 : 0;
              return (0, e.jsx)(A.F2T, {
                fill: g || "white",
                role: "presentation",
                angle: D,
              });
            }
            case M.k_EThickChevron: {
              const D = G == "right" ? 0 : 180;
              return (0, e.jsx)(A.l8x, {
                fill: g || "white",
                role: "presentation",
                angle: D,
              });
            }
            case M.k_EFilledArrow: {
              const D = G == "right" ? 90 : 270;
              return (0, e.jsx)(A.V5W, {
                fill: g || "white",
                role: "presentation",
                angle: D,
              });
            }
            case M.k_EPointyArrow:
              return (0, e.jsx)(A.L0X, {
                fill: g || "white",
                role: "presentation",
                direction: G || "left",
              });
          }
        }
        function E(I) {
          const {
              bIsActive: g,
              breadcrumbActiveColor: o,
              breadcrumbColor: G,
              breadcrumbStyle: D,
            } = I,
            C = g ? o || "#FFFFFF" : G || "#606974";
          switch (D) {
            default:
            case f.k_EPillCrumb:
              return (0, e.jsx)(A.IGf, { fill: C, role: "presentation" });
            case f.k_ECircularCrumb:
              return (0, e.jsx)(A.az8, { fill: C, role: "presentation" });
            case f.k_ESquareCrumb:
              return (0, e.jsx)(A.koA, { fill: C, role: "presentation" });
          }
        }
      },
      57646: (V, X, t) => {
        "use strict";
        t.d(X, { _w: () => o, eF: () => D, hJ: () => b, kb: () => G });
        var e = t(7850),
          A = t(40358),
          M = t(36118),
          f = t(36707),
          R = t(18126),
          E = t.n(R),
          I = ((S) => (
            (S.k_eBlock = "block"),
            (S.k_eFinal = "final"),
            (S.k_eOriginal = "original"),
            (S.k_eReservation = "reservation"),
            S
          ))(I || {});
        const g = Object.values(I);
        function o(S) {
          return g.find((h) => h === S);
        }
        function G(S) {
          switch (S.display_style) {
            case "final":
              return S.formatted_final_price
                ? (0, e.jsx)("span", { children: S.formatted_final_price })
                : null;
            case "original": {
              const Z = S.formatted_orig_price || S.formatted_final_price;
              return Z ? (0, e.jsx)("span", { children: Z }) : null;
            }
            default:
          }
          const h = S.display_style == "reservation",
            B = S.bHideDiscountPercentForCompliance,
            y = S.className == "bbcode_price";
          return (0, e.jsxs)("span", {
            className: (0, f.A)({
              [E().StoreSalePriceWidget]: !0,
              [S.className ?? ""]: !!S.className,
              [E().StoreSaleReservationPrice]: h,
            }),
            children: [
              !!(S.discount_percent && !B) &&
                (0, e.jsx)("span", {
                  className: (0, f.A)(
                    E().StoreSaleDiscountBox,
                    "StoreSaleDiscountBox",
                    S.bDiscountFromCoupon && E().FromCoupon,
                  ),
                  children: `-${S.discount_percent}%`,
                }),
              !!(S.discount_percent && B) &&
                (0, e.jsx)("div", {
                  className: (0, f.A)({
                    [E().DiscountIconCtn]: !0,
                    bbcode_price_discount: y,
                  }),
                  children: (0, e.jsx)(M.XH_, {}),
                }),
              !!S.formatted_final_price &&
                (S.discount_percent && S.formatted_orig_price
                  ? (0, e.jsxs)("div", {
                      className: (0, f.A)({
                        [E().StoreSaleDiscountedPriceCtn]: !0,
                        bbcode_price_ctn: y,
                      }),
                      children: [
                        (0, e.jsx)("div", {
                          className: (0, f.A)({
                            [E().StoreOriginalPrice]: !0,
                            StoreOriginalPrice: !0,
                            bbcode_price_orig: y,
                          }),
                          children: S.formatted_orig_price,
                        }),
                        (0, e.jsx)("div", {
                          className: (0, f.A)({
                            [E().StoreSalePriceBox]: !0,
                            bbcode_price_box: y,
                            [E().StoreSaleReservationPriceBox]: h,
                            bbcode_price_final: y,
                          }),
                          children: S.formatted_final_price,
                        }),
                      ],
                    })
                  : (0, e.jsx)("div", {
                      className: (0, f.A)({
                        [E().StoreSalePriceBox]: !0,
                        bbcode_price_box: y,
                        [E().StoreSaleReservationPriceBox]: h,
                        bbcode_price_final: y,
                      }),
                      children: S.formatted_final_price,
                    })),
            ],
          });
        }
        function D(S) {
          const { data: h } = (0, A.Q_)({ packageid: S.packageID });
          return h
            ? (0, e.jsx)(G, {
                formatted_final_price: h.formatted_final_price,
                formatted_orig_price: h.formatted_original_price,
                discount_percent: h.discount_pct,
                bHideDiscountPercentForCompliance:
                  h.hide_discount_pct_for_compliance,
                display_style: S.display_style,
                className: "bbcode_price",
              })
            : null;
        }
        function C(S, h) {
          return !S?.final_price_in_cents || !h?.final_price_in_cents
            ? void 0
            : (
                100 *
                (1 -
                  Number.parseInt(S.final_price_in_cents) /
                    Number.parseInt(h.final_price_in_cents))
              ).toFixed(0) + "%";
        }
        function b(S) {
          const { data: h } = (0, A.Q_)({ packageid: S.packageID }),
            { data: B } = (0, A.Q_)({ packageid: S.compareID }),
            y = C(h, B);
          return y === void 0
            ? null
            : (0, e.jsx)("span", {
                className: E().StorePriceSavings,
                children: y,
              });
        }
      },
      76617: (V, X, t) => {
        "use strict";
        t.d(X, { V: () => g });
        function e(o) {
          return Object.prototype.toString.call(o) === "[object Object]";
        }
        function A(o) {
          if (!e(o)) return !1;
          const G = o.constructor;
          if (typeof G > "u") return !0;
          const D = G.prototype;
          return !(
            !e(D) || !Object.prototype.hasOwnProperty.call(D, "isPrototypeOf")
          );
        }
        function M(...o) {
          return JSON.stringify(o, (G, D) => {
            if (A(D)) {
              const C = {};
              return (
                Object.keys(D)
                  .sort()
                  .forEach((b) => {
                    C[b] = D[b];
                  }),
                C
              );
            }
            return D;
          });
        }
        var f = t(90626),
          R = t(7850);
        const E = (0, f.createContext)({ instances: {}, factories: {} });
        function I(o) {
          const { name: G, fnFactory: D, children: C } = o,
            b = React.useContext(E),
            [S] = useState({}),
            h = useMemo(
              () => ({
                instances: S,
                factories: { ...b.factories, [G]: D },
                parent: b,
              }),
              [S, G, b],
            );
          return jsx(E.Provider, { value: h, children: C });
        }
        function g(o, G) {
          const D = (0, f.useContext)(E),
            C = typeof o == "string" ? o : M(...o);
          let b = D;
          for (; b; ) {
            if (C in b.instances) return b.instances[C];
            if (C in b.factories) break;
            b = b.parent;
          }
          const h = (b?.factories[C] ?? G)();
          return ((b ?? D).instances[C] = h), h;
        }
      },
      88034: (V, X, t) => {
        "use strict";
        t.d(X, { Gw: () => R, Lk: () => E, ai: () => f, mm: () => M });
        var e = t(14947);
        const A = e.sH.box(void 0);
        function M() {
          return A.get();
        }
        function f(I) {
          (0, e.h5)(() => A.set(I));
        }
        function R() {
          const I = A.get();
          return I || Math.floor(Date.now() / 1e3);
        }
        function E() {
          const I = A.get();
          return I ? new Date(I * 1e3) : new Date();
        }
      },
      93125: (V, X, t) => {
        "use strict";
        t.d(X, { A: () => U, D: () => m });
        var e = t(7850),
          A = t(90626),
          M = t(75844),
          f = t(18210),
          R = t(99412),
          E = t(5858),
          I = t(36707),
          g = t(56420),
          o = t.n(g),
          G = Object.defineProperty,
          D = Object.getOwnPropertyDescriptor,
          C = (N, Y, x, v) => {
            for (
              var L = v > 1 ? void 0 : v ? D(Y, x) : Y, P = N.length - 1, H;
              P >= 0;
              P--
            )
              (H = N[P]) && (L = (v ? H(Y, x, L) : H(L)) || L);
            return v && L && G(Y, x, L), L;
          };
        let b = class extends A.Component {
          static get hoverClass() {
            return o().hoverParent;
          }
          render() {
            const {
              persona: N,
              animating: Y,
              className: x,
              size: v,
              dim: L,
              ...P
            } = this.props;
            let H = "";
            return (
              v == "medium"
                ? (H = o().Medium)
                : v == "large" && (H = o().Large),
              (0, e.jsxs)("div", {
                className: (0, I.A)(
                  o().SnoozeContainer,
                  N.online_state,
                  x,
                  Y && o().animating,
                  H,
                  L && o().Dim,
                ),
                ...P,
                children: [
                  (0, e.jsx)("div", {
                    "data-text": "Z",
                    className: (0, I.A)(o().SnoozeZ, o().Z1),
                    children: "Z",
                  }),
                  (0, e.jsx)("div", {
                    "data-text": "Z",
                    className: (0, I.A)(o().SnoozeZ, o().Z2),
                    children: "Z",
                  }),
                  (0, e.jsx)("div", {
                    "data-text": "Z",
                    className: (0, I.A)(o().SnoozeZ, o().Z3),
                    children: "Z",
                  }),
                ],
              })
            );
          }
        };
        b = C([M.PA], b);
        var S = t(88363),
          h = t(36118),
          B = t(70342),
          y = t.n(B),
          Z = t(75975);
        const k = (0, M.PA)((N) => {
          const { persona: Y, className: x, ...v } = N;
          if (!Y || !Y.is_online) return null;
          const L = Y.HasStateFlag(S.R$),
            P = Y.HasStateFlag(S.hs),
            H = Y.m_eGamingDeviceType == R.LS$,
            z = Y.m_eGamingDeviceType == R.ppM,
            W = !H && !z && !P && Y.HasStateFlag(S.sr);
          return (0, e.jsxs)(A.Fragment, {
            children: [
              L &&
                (0, e.jsx)("div", {
                  className: (0, I.A)(
                    x,
                    y().PersonaStatusIcon,
                    y().MobilePhoneIcon,
                    (0, E.rO)(Y),
                  ),
                  title: (0, f.we)("#Platform_Hint_Mobile"),
                  ...v,
                  children: (0, e.jsx)(Z.rf, {}),
                }),
              P &&
                (0, e.jsx)("div", {
                  className: (0, I.A)(
                    x,
                    y().PersonaStatusIcon,
                    y().VRIcon,
                    (0, E.rO)(Y),
                  ),
                  title: (0, f.we)("#Platform_Hint_VR"),
                  ...v,
                  children: (0, e.jsx)(h.MUh, {}),
                }),
              W &&
                (0, e.jsx)("div", {
                  className: (0, I.A)(
                    x,
                    y().PersonaStatusIcon,
                    y().BigPictureIcon,
                    (0, E.rO)(Y),
                  ),
                  title: (0, f.we)("#Platform_Hint_BigPicture"),
                  ...v,
                  children: (0, e.jsx)(h.bPr, {}),
                }),
              H &&
                (0, e.jsx)("div", {
                  className: (0, I.A)(
                    x,
                    y().PersonaStatusIcon,
                    y().SteamDeckIcon,
                    (0, E.rO)(Y),
                  ),
                  title: (0, f.we)("#Platform_Hint_SteamDeck"),
                  ...v,
                  children: (0, e.jsx)(h.DQe, {}),
                }),
              z &&
                (0, e.jsx)("div", {
                  className: (0, I.A)(
                    x,
                    y().PersonaStatusIcon,
                    y().SteamDeckIcon,
                    (0, E.rO)(Y),
                  ),
                  title: (0, f.we)("#Platform_Hint_LegionGoS"),
                  ...v,
                  children: (0, e.jsx)(h.DQe, {}),
                }),
            ],
          });
        });
        var te = t(18828),
          l = t.n(te),
          p = t(3166),
          s = Object.defineProperty,
          d = Object.getOwnPropertyDescriptor,
          _ = (N, Y, x, v) => {
            for (
              var L = v > 1 ? void 0 : v ? d(Y, x) : Y, P = N.length - 1, H;
              P >= 0;
              P--
            )
              (H = N[P]) && (L = (v ? H(Y, x, L) : H(L)) || L);
            return v && L && s(Y, x, L), L;
          };
        function c(N) {
          return (0, e.jsxs)(A.Fragment, {
            children: [
              (0, e.jsx)("span", {
                className: l().partyBeaconJoin,
                children: (0, f.we)("#User_WantsToPlay"),
              }),
              "\xA0\u2013\xA0",
              N.persona.GetCurrentGameName(),
            ],
          });
        }
        let m = class extends A.Component {
          render() {
            const {
              className: N,
              onContextMenu: Y,
              persona: x,
              eFriendRelationship: v,
              bIsSelf: L,
              bParenthesizeNicknames: P,
              strNickname: H,
              bCompactView: z,
              bHideGameName: W,
              bHideEnhancedRichPresenceLabel: $,
              bHideSnooze: J,
              bHideStatus: se,
              renderStatus: _e,
              renderRichPresence: ue,
              bHidePersona: me,
              bDNDSet: De,
              bHasPartyBeacon: Ce,
              bHasGamePrivacy: Ae,
              bNoMask: Le,
              bEllipsisName: ye,
              bDropPadding: xe,
              ...Ue
            } = this.props;
            let Ke = null,
              Te = null,
              He = null,
              Re = [
                N,
                l().personaNameAndStatusLabel,
                (0, E.rO)(x),
                z ? l().compactView : void 0,
                Le ? l().NoMask : void 0,
              ];
            Ce || x.has_public_party_beacon
              ? (Te = (0, e.jsx)(c, { persona: x }))
              : (0, R.aPS)(v)
                ? ((Te = (0, f.we)("#PersonaStateBlocked")),
                  Re.push(l().blocked))
                : x.is_ingame
                  ? (!x.is_in_nonsteam_game || L || (0, R.S$u)(v)
                      ? (Te = x.GetCurrentGameName())
                      : (Te = (0, f.we)("#PersonaStateInNonSteamGame")),
                    !L && !me
                      ? (He = x.GetCurrentGameRichPresence())
                      : L &&
                        x.is_awayOrSnooze &&
                        (He = (0, f.we)("#PersonaStateAway")))
                  : x.m_broadcastAccountId &&
                    (Te = (0, f.we)("#PersonaStateWatchingBroadcast")),
              Te || (Te = x.GetLocalizedOnlineStatus()),
              _e && (Te = _e());
            let Ve = !me && !J;
            J === !1 && (Ve = !0),
              x.is_awayOrSnooze && Ve && (Ke = (0, e.jsx)(b, { persona: x }));
            let Ge = (0, e.jsx)(e.Fragment, {});
            Y
              ? (Ge = (0, e.jsx)("div", {
                  className: "ContextMenuButton",
                  onClick: Y,
                  children: (0, e.jsx)(h.GB9, {}),
                }))
              : Re.push(l().noContextMenu),
              me && Re.push(l().hidePersona),
              ue && (He = ue()),
              (W || !He) && Re.push(l().twoLine);
            const $e = !x.is_ingame && !se,
              Qe = !$ && He,
              qe = Te && (!W || !Qe),
              Be = (0, R.IDH)(p.TS.LAUNCHER_TYPE);
            let Ze = H && !P,
              at = Ze ? H : x.m_strPlayerName,
              Ye = !me && (qe || $e) && Qe;
            return (0, e.jsxs)("div", {
              ...Ue,
              className: (0, I.A)(...Re),
              onContextMenu: Y,
              children: [
                (0, e.jsxs)("div", {
                  className: (0, I.A)(
                    l().statusAndName,
                    Ye ? l().threeLines : void 0,
                  ),
                  children: [
                    (0, e.jsxs)("div", {
                      className: (0, I.A)(
                        l().playerName,
                        ye ? l().EllipsisName : void 0,
                      ),
                      children: [
                        at || "\xA0",
                        P &&
                          H &&
                          (0, e.jsxs)("span", {
                            className: l().playerNickname,
                            children: ["(", H, ")"],
                          }),
                      ],
                    }),
                    De &&
                      (0, e.jsx)("div", {
                        className: l().DNDContainer,
                        title: (0, f.we)("#User_ToggleDoNotDisturb"),
                        children: (0, e.jsx)(h.Aj0, {}),
                      }),
                    Ze &&
                      (0, e.jsx)("span", {
                        className: l().playerNicknameBracket,
                        title: (0, f.we)("#isNickname"),
                        children: " *",
                      }),
                    (0, e.jsx)(k, { persona: x }),
                    Ke,
                    (x.m_bPlayerNamePending || x.m_bAvatarPending) &&
                      Be &&
                      (0, e.jsx)("div", {
                        className: l().PendingPersona,
                        title: (0, f.we)("#SteamChina_PendingPersonaName"),
                        children: (0, e.jsx)(h.zD7, {}),
                      }),
                    Ge,
                  ],
                }),
                !me &&
                  (0, e.jsxs)("div", {
                    className: l().richPresenceContainer,
                    children: [
                      (qe || $e) &&
                        (0, e.jsxs)("div", {
                          className: (0, I.A)(
                            l().gameName,
                            Ye ? l().threeLines : void 0,
                            l().richPresenceLabel,
                            xe && l().dropPadding,
                            "no-drag",
                          ),
                          children: [
                            Ae &&
                              (0, e.jsx)("div", {
                                className: l().gameIsPrivateIcon,
                                title: (0, f.we)("#User_GameInfoHidden"),
                                children: (0, e.jsx)(h.jZl, {}),
                              }),
                            Te,
                          ],
                        }),
                      Qe &&
                        (0, e.jsxs)("div", {
                          className: (0, I.A)(
                            l().richPresenceLabel,
                            xe && l().dropPadding,
                            "no-drag",
                          ),
                          children: [He, " "],
                        }),
                    ],
                  }),
              ],
            });
          }
        };
        m = _([M.PA], m);
        const U = (0, M.PA)((N) => {
          const {
            persona: Y,
            bParenthesizeNicknames: x,
            strNickname: v,
            bIgnorePersonaStatus: L,
            bDisableColoring: P,
            className: H,
            ...z
          } = N;
          let $ = v && !x ? v : Y.m_strPlayerName;
          return (0, e.jsx)("span", {
            ...z,
            className: (0, I.A)(
              H,
              P && l().DisableColoring,
              !L && (0, E.rO)(Y),
            ),
            children: (0, e.jsxs)("span", {
              className: l().playerName,
              children: [
                $ || "\xA0",
                x &&
                  v &&
                  (0, e.jsxs)("span", {
                    className: l().playerNickname,
                    children: ["(", v, ")"],
                  }),
              ],
            }),
          });
        });
      },
      46943: (V, X, t) => {
        "use strict";
        t.d(X, { Ul: () => Z, xz: () => l, $Y: () => te, i8: () => k });
        var e = t(7850),
          A = t(90626),
          M = t(75844),
          f = t(5858),
          R = t(36707),
          E = t(3166),
          I = t(13465);
        const g =
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAIAAgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/P4mW5nmllmeSR3LMzMSSc1a07R73V72KzsILi9u5TiOC2RpJHPoFGSarQ/ef6n+de4fAn9oaL4D+DfGX9i6Uf8AhO9XSKDT9eZY3WxiDZcBGByTkn0JCZBxQB41qeiX+iXslnqNtdWF3H9+3uo2jkX6q2CKpgy208MsUzxyI4ZWViCDmvsr9rrUdT1j9nb4T6h8RBbH4qXUs0zMsSxXJ04hivnKoAU5MPGBg7uM7q+NpvvJ9R/OgAh+8/1P867T4POI/iz4Mc6U+u7NZtG/suPbuu8TKfKG4hct93njnmuKIltp5opYXjkRyrKykEHNWbDVbvSr63vbKaezvLeRZYbi3ZkkidTlWVhyCCMgjpQB6l+1F411nx58dPFWpa5a3mnXaXP2ZNOvXVpLKNBhYflJUY5PB5JJ6k15LN95PqP51a1PWr7WtQnvtRuLm/vrhzJNc3TtJLIx6lmbJJ9zVQCW5nhiiheSR3CqqqSSc0Af/9k=",
          o =
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gODAK/9sAQwAGBAUGBQQGBgUGBwcGCAoQCgoJCQoUDg8MEBcUGBgXFBYWGh0lHxobIxwWFiAsICMmJykqKRkfLTAtKDAlKCko/9sAQwEHBwcKCAoTCgoTKBoWGigoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo/8AAEQgAQABAAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8Inmk8+T94/3j/EfWmedJ/z0f/vo0T/6+T/eP86ZQA/zpP8Ano//AH0aPOk/56P/AN9GmVo6Loeq65M0Wj6ddXrr94QRF9v1I6fjQBR86T/no/8A30aPOk/56P8A99GtHW/Dus6GV/tjS7yyD8K00RVW+h6GsugB/nSf89H/AO+jT4JpPPj/AHj/AHh/EfWoafB/r4/94fzoAJ/9fJ/vH+dMp8/+vk/3j/OmUAXdE099W1mw06Jgsl3PHApPYswUH9a+qPF3iHSPhF4S0+003TxK0hMcEAbZvIA3SO2OvIz6k18nW88ttcRz28jxTRMHSRGKsrA5BBHQg1b1TWdT1fy/7V1G8vfLzs+0TNJtz1xknHQUAfUXw+8c6Z8UdN1HS9V0xIpUTM1s7eYkiE43KcAgg/lxg180+NtEHhzxZqmkqxdLWcojHqUPK598EV9CfBbwpF4G8J3fiLxA4trm5hEsnmceRCOQD/tHqR9B1r568a63/wAJH4r1TVghRLqYuinqE6KD74AoAxafB/r4/wDeH86ZT4P9fH/vD+dABP8A6+T/AHj/ADplPn/18n+8f50ygArt/gtpltq/xK0e2vYxJArPMUYZDFEZhn2yBXEV0/w203VNX8YWdloOoHTtQkWQx3IZl2gISeV55AI/GgD1H9pvxPdi/s/DcDGOz8pbqfHWRizBQfYbc/U+1eD12PxW0fWtE8Tpa+I9UOqXpt0cTl2bCEthctz1B/OuOoAKfB/r4/8AeH86ZT4P9fH/ALw/nQAT/wCvk/3j/OmVNPDJ58n7t/vH+E+tM8mT/nm//fJoAZV7Q9Xv9C1KLUNJuGtryMEJIoBIyCD1BHQmqnkyf883/wC+TR5Mn/PN/wDvk0AaHiHXtT8RX4vdau2u7oIIxIygHaCSBwB6msyn+TJ/zzf/AL5NHkyf883/AO+TQAynwf6+P/eH86PJk/55v/3yafBDJ58f7t/vD+E+tAH/2Q==",
          G =
            t.p +
            "images/applications/store/avatar_default_full.jpg?v=valveisgoodatcaching";
        var D = t(43047),
          C = t.n(D),
          b = t(71742),
          S = Object.defineProperty,
          h = Object.getOwnPropertyDescriptor,
          B = (p, s, d, _) => {
            for (
              var c = _ > 1 ? void 0 : _ ? h(s, d) : s, m = p.length - 1, U;
              m >= 0;
              m--
            )
              (U = p[m]) && (c = (_ ? U(s, d, c) : U(c)) || c);
            return _ && c && S(s, d, c), c;
          };
        function y(p) {
          switch (p) {
            case "X-Small":
            case "Small":
              return g;
            case "Medium":
            case "MediumLarge":
              return o;
            case "Large":
            case "X-Large":
            case "FillArea":
              return G;
            default:
              return (0, b.z_)(p, `Unhandled size ${p}`), o;
          }
        }
        const Z = A.memo(function (s) {
          const {
              strAvatarURL: d,
              size: _ = "Medium",
              className: c,
              statusStyle: m,
              statusPosition: U,
              children: N,
              ...Y
            } = s,
            x = A.useMemo(() => {
              const v = [];
              return d && v.push(d), v.push(y(_)), v;
            }, [d, _]);
          return (0, e.jsxs)("div", {
            className: (0, R.A)(
              C().avatarHolder,
              "avatarHolder",
              "no-drag",
              _,
              c,
            ),
            ...Y,
            children: [
              (0, e.jsx)("div", {
                className: (0, R.A)(C().avatarStatus, "avatarStatus", U),
                style: m,
              }),
              (0, e.jsx)(I.c, {
                className: (0, R.A)(C().avatar, "avatar"),
                rgSources: x,
                draggable: !1,
              }),
              N,
            ],
          });
        });
        let k = class extends A.Component {
          render() {
            const {
              persona: p,
              size: s = "Medium",
              animatedAvatar: d,
              className: _,
              strBackupAvatarURL: c,
              ...m
            } = this.props;
            let U = "";
            return (
              d && d.image_small && d.image_small.length != 0
                ? (U = E.TS.MEDIA_CDN_COMMUNITY_URL + "images/" + d.image_small)
                : p
                  ? ((U = p.avatar_url_medium),
                    s == "Small" || s == "X-Small"
                      ? (U = p.avatar_url)
                      : (s == "Large" || s == "X-Large" || s == "FillArea") &&
                        (U = p.avatar_url_full))
                  : c && (U = c),
              (0, e.jsx)(Z, {
                strAvatarURL: U,
                size: s,
                className: (0, R.A)((0, f.rO)(p), _),
                ...m,
              })
            );
          }
        };
        k = B([M.PA], k);
        const te = (0, M.PA)((p) => {
          const {
            profileItem: s,
            className: d,
            bDisableAnimation: _,
            ...c
          } = p;
          if (!s || !s.image_small || s.image_small.length == 0) return null;
          let m = _ ? s.image_large : s.image_small;
          return (
            m || (m = s.image_small),
            m.startsWith("https://") ||
              (m = E.TS.MEDIA_CDN_COMMUNITY_URL + "images/" + m),
            (0, e.jsx)("div", {
              className: (0, R.A)(C().avatarFrame, d, "avatarFrame"),
              ...c,
              children: (0, e.jsx)("img", {
                className: C().avatarFrameImg,
                src: m,
              }),
            })
          );
        });
        let l = class extends A.Component {
          m_timer;
          constructor(p) {
            super(p),
              (this.state = { bAnimate: this.props.loopDuration != "None" }),
              (this.m_timer = 0);
          }
          componentDidMount() {
            this.props.bParentHovered || this.SetupAnimationTimer();
          }
          SetupAnimationTimer() {
            let p = 0;
            switch (this.props.loopDuration) {
              case "Short":
                p = 2500;
                break;
              case "Medium":
                p = 5e3;
                break;
              case "Long":
                p = 1e4;
                break;
            }
            p != 0 &&
              (this.setState({ bAnimate: this.props.loopDuration != "None" }),
              (this.m_timer = window.setTimeout(
                () => this.setState({ bAnimate: !1 }),
                p,
              )));
          }
          StopAnimationTimer() {
            this.m_timer &&
              (window.clearTimeout(this.m_timer), (this.m_timer = 0));
          }
          onHover() {
            this.SetupAnimationTimer();
          }
          componentWillUnmount() {
            this.StopAnimationTimer();
          }
          componentDidUpdate(p) {
            this.props.loopDuration != p.loopDuration &&
              (this.props.loopDuration == "None"
                ? (this.setState({ bAnimate: !1 }), this.StopAnimationTimer())
                : this.props.loopDuration == "Infinite"
                  ? (this.setState({ bAnimate: !0 }), this.StopAnimationTimer())
                  : (this.setState({ bAnimate: !0 }),
                    this.SetupAnimationTimer())),
              this.props.bParentHovered != p.bParentHovered &&
                (this.props.bParentHovered &&
                this.props.loopDuration != "None" &&
                this.props.loopDuration != "Infinite"
                  ? (this.setState({ bAnimate: !0 }), this.StopAnimationTimer())
                  : this.state.bAnimate && this.SetupAnimationTimer());
          }
          render() {
            let {
              loopDuration: p,
              animatedAvatar: s,
              avatarFrame: d,
              children: _,
              style: c,
              bLimitProfileFrameAnimationTime: m,
              bParentHovered: U,
              ...N
            } = this.props;
            N.onClick && (c = { ...c, cursor: "pointer" });
            const Y = this.state.bAnimate ? (s ?? void 0) : void 0;
            return (0, e.jsx)("div", {
              onMouseEnter: () =>
                this.setState({ bAnimate: this.props.loopDuration != "None" }),
              onMouseLeave: () => this.SetupAnimationTimer(),
              children: (0, e.jsxs)(k, {
                animatedAvatar: Y,
                ...N,
                children: [
                  _,
                  (0, e.jsx)(te, {
                    profileItem: d ?? null,
                    bDisableAnimation: m && !this.state.bAnimate,
                  }),
                ],
              }),
            });
          }
        };
        l = B([M.PA], l);
      },
      7582: (V, X, t) => {
        "use strict";
        t.d(X, { HD: () => g, f1: () => S, s4: () => h, sB: () => b });
        var e = t(19367),
          A = t.n(e),
          M = t(90626),
          f = t(88034),
          R = t(47689),
          E = t(77291);
        class I {
          bIncludeFeaturedAsGameSource = !0;
          get nOverrideDateNow() {
            return (0, f.mm)();
          }
          set nOverrideDateNow(y) {
            (0, f.ai)(y);
          }
          get bRequireAllEventsLoadedInTimeBlock() {
            return !1;
          }
          get bIncludeCurators() {
            return !0;
          }
          GetTimeNowWithOverride() {
            return (0, f.Gw)();
          }
          GetTimeNowWithOverrideAsDate() {
            return (0, f.Lk)();
          }
          BHasTimeOverride() {
            return !!(0, f.mm)();
          }
          ParseDevOverrides(y) {
            if (!y || y.length == 0) return;
            new URLSearchParams(y[0] == "?" ? y.substring(1) : y).has("t");
          }
        }
        const g = new I();
        (0, E.V)("g_EventCalendarDevFeatures", g);
        function o(B = 1) {
          const [y, Z] = React.useState(() => C()),
            k = useCancelTokenSource("useTimeNowWithOverride"),
            te = React.useCallback(() => {
              k.token.reason || Z(C());
            }, []);
          return (
            React.useEffect(() => {
              const l = 1e3 * B,
                p = Date.now() % l,
                s = l - p,
                d = window.setTimeout(te, s);
              return () => {
                window.clearTimeout(d);
              };
            }, [y, B, te]),
            y
          );
        }
        const D = Math.floor(new Date().getTime() / 1e3);
        function C() {
          const B = Math.floor(Date.now() / 1e3);
          return g.nOverrideDateNow ? g.nOverrideDateNow + (B - D) : B;
        }
        function b() {
          return g.nOverrideDateNow ?? D;
        }
        function S() {
          return M.useMemo(() => b(), []);
        }
        function h() {
          return M.useMemo(() => g.GetTimeNowWithOverrideAsDate(), []);
        }
      },
      57698: (V, X, t) => {
        "use strict";
        t.d(X, { N: () => e });
        var e = ((A) => (
          (A[(A.k_ENotifyFlagNone = 0)] = "k_ENotifyFlagNone"),
          (A[(A.k_ENotifyFlagByEmail = 1)] = "k_ENotifyFlagByEmail"),
          (A[(A.k_ENotifyFlagByPush = 2)] = "k_ENotifyFlagByPush"),
          A
        ))(e || {});
      },
      7638: (V, X, t) => {
        "use strict";
        t.d(X, { Ec: () => l, KN: () => k, kY: () => te });
        var e = t(72604),
          A = t(35038),
          M = t(72849),
          f = t(41735),
          R = t.n(f),
          E = t(14947),
          I = t(90626),
          g = t(76559),
          o = t(49628),
          G = t(71742),
          D = t(34592),
          C = t(3166),
          b = t(57698),
          S = Object.defineProperty,
          h = Object.getOwnPropertyDescriptor,
          B = (p, s, d, _) => {
            for (
              var c = _ > 1 ? void 0 : _ ? h(s, d) : s, m = p.length - 1, U;
              m >= 0;
              m--
            )
              (U = p[m]) && (c = (_ ? U(s, d, c) : U(c)) || c);
            return _ && c && S(s, d, c), c;
          };
        class y {
          clanid = void 0;
          appid = 0;
          can_edit = !1;
          owns_app = !1;
          follows_app = !1;
          support_user = !1;
          valve_admin = !1;
          limited_user = !1;
          event_ignored = new Array();
          event_followed = new Array();
          event_followed_flags = new Array();
          constructor(s) {
            (0, E.Gn)(this), (this.clanid = s);
          }
        }
        B([E.sH], y.prototype, "clanid", 2),
          B([E.sH], y.prototype, "appid", 2),
          B([E.sH], y.prototype, "can_edit", 2),
          B([E.sH], y.prototype, "owns_app", 2),
          B([E.sH], y.prototype, "follows_app", 2),
          B([E.sH], y.prototype, "support_user", 2),
          B([E.sH], y.prototype, "valve_admin", 2),
          B([E.sH], y.prototype, "limited_user", 2),
          B([E.sH], y.prototype, "event_ignored", 2),
          B([E.sH], y.prototype, "event_followed", 2),
          B([E.sH], y.prototype, "event_followed_flags", 2);
        const Z = class We {
          constructor() {
            (0, E.Gn)(this);
          }
          m_mapClanToUserPermissions = new Map();
          m_mapAnnounceGIDToVote = new Map();
          m_cm = void 0;
          static s_EventUserStore;
          m_bIsPresentationMode = (0, C.Bu)();
          static Get() {
            return (
              (0, G.wT)(
                !!We.s_EventUserStore,
                "Have not yet initialized global EventUserStore",
              ),
              We.s_EventUserStore
            );
          }
          static IsInitialized() {
            return !!We.s_EventUserStore;
          }
          static async InitGlobal(s) {
            if (!We.s_EventUserStore) {
              const d = new We();
              await d.Init(s), (We.s_EventUserStore = d);
            }
          }
          static BIsInited() {
            return !!We.s_EventUserStore;
          }
          async Init(s) {
            this.m_cm = s;
            const d = (0, C.Fd)(
              "partnereventpermissions",
              "application_config",
            );
            this.ValidateStoreDefault(d) &&
              (0, E.h5)(() => {
                d.forEach((c) => {
                  let m = new y(c.clanid),
                    U = {
                      result: m,
                      promise: We.RemapToPromise(m),
                      bLoaded: !0,
                    };
                  this.CopyFromResponseToTrack(U, c),
                    this.m_mapClanToUserPermissions.set(c.clanid, U);
                });
              });
            let _ = (0, C.Fd)("uservotes", "application_config");
            _ &&
              (0, E.h5)(() => {
                _.forEach((c) => {
                  let m = c.voted_up ? !0 : c.voted_down ? !1 : void 0;
                  this.m_mapAnnounceGIDToVote.set(c.clanAnnouncementGID, m);
                });
              });
          }
          ValidateStoreDefault(s) {
            const d = s;
            return d &&
              Array.isArray(d) &&
              d.length > 0 &&
              typeof d[0] == "object"
              ? typeof d[0].clanid == "number" && typeof d[0].appid == "number"
              : !1;
          }
          static async RemapToPromise(s) {
            return s;
          }
          BIsUserLoggedIn() {
            return C.iA.logged_in;
          }
          BIsPartnerEventPermissionsLoaded(s) {
            return (
              this.m_mapClanToUserPermissions.has(s) &&
              this.m_mapClanToUserPermissions.get(s).bLoaded
            );
          }
          GetPartnerEventPermissions(s) {
            if (!s || !s.BIsValid()) return new y(0);
            const d = s.GetAccountID();
            return (
              this.m_mapClanToUserPermissions.has(d) ||
                this.LoadSingleAppEventPermissions(s),
              this.m_mapClanToUserPermissions.get(d).result
            );
          }
          async LoadSingleAppEventPermissions(s) {
            let d = s.GetAccountID(),
              _ = this.m_mapClanToUserPermissions.get(d);
            return (
              _ ||
                ((_ = {
                  promise: this.InternalLoadSingleAppEventPermissions(s),
                  result: new y(d),
                  bLoaded: !1,
                }),
                this.m_mapClanToUserPermissions.set(d, _)),
              _.promise
            );
          }
          CopyFromResponseToTrack(s, d) {
            (s.result.appid = d.appid ?? 0),
              (s.result.can_edit = !!d.can_edit),
              (s.result.clanid = d.appid),
              (s.result.event_followed = d.event_followed ?? []),
              (s.result.event_ignored = d.event_ignored ?? []),
              (s.result.event_followed_flags = d.event_followed_flags ?? []),
              (s.result.follows_app = !!d.follows_app),
              (s.result.owns_app = !!d.owns_app),
              (s.result.limited_user = !!d.limited_user),
              (d.support_user || d.valve_admin) && this.m_bIsPresentationMode
                ? ((s.result.can_edit = !0),
                  (s.result.support_user = !1),
                  (s.result.valve_admin = !1))
                : ((s.result.support_user = !!d.support_user),
                  (s.result.valve_admin = !!d.valve_admin)),
              (s.bLoaded = !0);
          }
          async InternalLoadSingleAppEventPermissions(s) {
            let d = null,
              _ = s.GetAccountID(),
              c = !C.iA.logged_in;
            if (!this.m_mapClanToUserPermissions.has(_)) {
              let m = new y(s.GetAccountID());
              this.m_mapClanToUserPermissions.set(_, {
                result: m,
                promise: We.RemapToPromise(m),
                bLoaded: !1,
              });
            }
            try {
              if (C.iA.logged_in) {
                let m =
                    C.TS.COMMUNITY_BASE_URL +
                    "gid/" +
                    s.ConvertTo64BitString() +
                    "/ajaxgetpartnereventpermissions/",
                  U = {};
                if (
                  ((0, C.yK)() == "partnerweb"
                    ? ((m =
                        C.TS.PARTNER_BASE_URL +
                        "partnerevents/ajaxgetpartnereventpermissions"),
                      (U = { clanaccountid: s.GetAccountID() }))
                    : (0, C.yK)() == "store" &&
                      ((m =
                        C.TS.STORE_BASE_URL +
                        "events/ajaxgetpartnereventpermissions"),
                      (U = { clanaccountid: s.GetAccountID() })),
                  (d = await R().get(m, { params: U, withCredentials: !0 })),
                  !d || d.data.success != e.R)
                )
                  console.error(
                    "Partner Events Failed Load:" +
                      (0, D.H)(d?.data).strErrorMsg,
                  ),
                    (c = !0);
                else {
                  let N = this.m_mapClanToUserPermissions.get(_);
                  N && this.CopyFromResponseToTrack(N, d.data);
                }
              }
            } catch (m) {
              if (
                ((d = m.response),
                (c = !0),
                !(
                  m &&
                  typeof m.response < "u" &&
                  typeof m.response.data < "u" &&
                  typeof m.response.data.success < "u" &&
                  m.response.data.success == e.Dy
                ))
              ) {
                const U = (0, D.H)(m);
                console.error(
                  "InternalLoadSingleAppEventPermissions account: " +
                    _ +
                    ": " +
                    U.strErrorMsg,
                  U,
                );
              }
            } finally {
              c &&
                (0, E.h5)(() => {
                  let m = this.m_mapClanToUserPermissions.get(_);
                  (m.result.appid = d?.data.appid ?? 0),
                    (m.result.can_edit = !1),
                    (m.result.clanid = d && d.data ? d.data.clanid : 0),
                    (m.result.event_followed = new Array()),
                    (m.result.event_ignored = new Array()),
                    (m.result.event_followed_flags = new Array()),
                    (m.result.follows_app = !1),
                    (m.result.owns_app = !1),
                    (m.result.support_user = !1),
                    (m.result.valve_admin = !1),
                    (m.result.limited_user = !1),
                    (m.bLoaded = !0);
                });
            }
            return this.m_mapClanToUserPermissions.get(_).result;
          }
          async Vote(s, d, _) {
            if (!s || !s.AnnouncementGID) return !1;
            const c = this.m_mapAnnounceGIDToVote.get(s.AnnouncementGID);
            if (c === d) return !0;
            if (
              (this.m_mapAnnounceGIDToVote.set(s.AnnouncementGID, d),
              (0, E.h5)(() => {
                c === !0 && s.UpdateVoteCount("up", -1),
                  c === !1 && s.UpdateVoteCount("down", -1),
                  d === !0 && s.UpdateVoteCount("up", 1),
                  d === !1 && s.UpdateVoteCount("down", 1);
              }),
              this.m_cm)
            ) {
              let m = A.w.Init(M.QU);
              return (
                m.Body().set_announcementid(s.AnnouncementGID),
                m.Body().set_vote_up(!!d),
                m.Body().set_clan_accountid(s.clanSteamID.GetAccountID()),
                (
                  await M.BE.RateClanAnnouncement(
                    this.m_cm.GetServiceTransport(),
                    m,
                  )
                ).GetEResult() == e.R
              );
            } else {
              const m = (0, C.yK)(),
                U =
                  m == "community" || m == "steamtv"
                    ? C.TS.COMMUNITY_BASE_URL +
                      "gid/" +
                      s.clanSteamID.ConvertTo64BitString() +
                      "/announcements/rate/" +
                      s.AnnouncementGID
                    : C.TS.STORE_BASE_URL +
                      "updated/ajaxrateupdate/" +
                      s.AnnouncementGID,
                N = new URLSearchParams();
              N.append("sessionid", (0, C.KC)()),
                N.append("voteup", d ? "1" : "0"),
                N.append("clanid", "" + s.clanSteamID.GetAccountID()),
                N.append("ajax", "1");
              const Y = { withCredentials: !0, cancelToken: _.token };
              return (await R().post(U, N, Y)).data.success == e.R;
            }
          }
          async LoadMyVote(s, d) {
            if (s?.AnnouncementGID) {
              if (this.m_mapAnnounceGIDToVote.has(s.AnnouncementGID))
                return !!this.m_mapAnnounceGIDToVote.get(s.AnnouncementGID);
              let _;
              if (this.m_cm) {
                let c = A.w.Init(M.$Y);
                c.Body().set_announcementid(s.AnnouncementGID);
                let m = await M.BE.GetClanAnnouncementVoteForUser(
                  this.m_cm.GetServiceTransport(),
                  c,
                );
                m.GetEResult() == e.R &&
                  (_ = m.Body().voted_up()
                    ? !0
                    : m.Body().voted_down()
                      ? !1
                      : void 0);
              } else {
                const c = (0, C.yK)() == "store",
                  m = c
                    ? C.TS.STORE_BASE_URL + "actions/ajaxgetmyannouncementvote"
                    : C.TS.COMMUNITY_BASE_URL +
                      "gid/" +
                      s.clanSteamID.ConvertTo64BitString() +
                      "/announcements/ajaxgetmyvote/" +
                      s.AnnouncementGID,
                  U = { gid: c ? s.AnnouncementGID : void 0 },
                  N = await R().get(m, {
                    withCredentials: !0,
                    cancelToken: d.token,
                    params: U,
                  });
                _ = N.data.voted_up ? !0 : N.data.voted_down ? !1 : void 0;
              }
              return this.m_mapAnnounceGIDToVote.set(s.AnnouncementGID, _), _;
            }
          }
          SetVote(s, d) {
            this.m_mapAnnounceGIDToVote.set(s, d);
          }
          BHasMyVote(s) {
            return s.AnnouncementGID
              ? this.m_mapAnnounceGIDToVote.has(s.AnnouncementGID)
              : !1;
          }
          GetPreviouslyLoadedVote(s) {
            return s.AnnouncementGID
              ? this.m_mapAnnounceGIDToVote.get(s.AnnouncementGID)
              : void 0;
          }
          BShowEmailEditorTab(s) {
            if (
              s.BHasEmailEnabled() ||
              s.clanSteamID.GetAccountID() == (0, o.H)()
            )
              return !0;
            let d = this.GetPartnerEventPermissions(s.clanSteamID);
            return (C.UF.IS_OGG || C.UF.IS_VALVE_GROUP) && d.valve_admin;
          }
        };
        B([E.sH], Z.prototype, "m_mapClanToUserPermissions", 2),
          B([E.sH], Z.prototype, "m_mapAnnounceGIDToVote", 2),
          B([E.XI], Z.prototype, "CopyFromResponseToTrack", 1);
        let k = Z;
        function te() {
          const [p, s] = (0, I.useState)(() => k.BIsInited());
          return (
            (0, I.useEffect)(() => {
              p || (async () => (await Promise.all([k.InitGlobal()]), s(!0)))();
            }, [p]),
            p
          );
        }
        function l(p) {
          const [s, d] = (0, I.useState)(
              k.Get().BIsPartnerEventPermissionsLoaded(p),
            ),
            _ = g.b.InitFromClanID(p),
            [c, m] = (0, I.useState)(k.Get().GetPartnerEventPermissions(_));
          return (
            (0, I.useEffect)(() => {
              if (!s) {
                const U = g.b.InitFromClanID(p);
                k.Get()
                  .LoadSingleAppEventPermissions(U)
                  .then((N) => {
                    m(N), d(!0);
                  });
              }
            }, [s, p]),
            c
          );
        }
      },
      35098: (V, X, t) => {
        "use strict";
        t.d(X, { DW: () => C, js: () => G, mK: () => y, tb: () => B });
        var e = t(90626),
          A = t(80902),
          M = t(54806),
          f = t(99412),
          R = t(68312),
          E = t(15369),
          I = t(5858),
          g = t(76559),
          o = t(15860);
        function G(l) {
          const p = (0, R.KV)(),
            s = e.useContext(h);
          return (0, A.I)(y(s, p, l));
        }
        function D(l) {
          const p = React.useRef(void 0),
            s = G(l);
          return s.data
            ? s
            : (p.current ||
                (p.current = new CPersonaStateImpl(
                  typeof l == "string"
                    ? new CSteamID(l)
                    : CSteamID.InitFromAccountID(l),
                )),
              { ...s, data: p.current });
        }
        function C(l) {
          const p = (0, R.KV)(),
            s = e.useContext(h);
          return (0, M.E)({ queries: l.map((d) => y(s, p, d)) });
        }
        function b(l) {
          return ReactQueryClient.getQueryData(["PlayerSummary", l]);
        }
        function S(l) {
          const { loadPersonaState: p, children: s } = l,
            d = React.useMemo(() => ({ loadPersonaState: p }), [p]);
          return React.createElement(h.Provider, { value: d }, s);
        }
        const h = e.createContext({
          loadPersonaState: async (l, p) => {
            if (l == null) return null;
            const s = await k(p).load(
              g.b.InitFromAccountID(l).ConvertTo64BitString(),
            );
            return te(g.b.InitFromAccountID(l), s);
          },
        });
        function B() {
          return e.useContext(h);
        }
        function y(l, p, s) {
          const d = typeof s == "string" ? new g.b(s).GetAccountID() : s;
          return {
            queryKey: ["PlayerSummary", d],
            queryFn: () => l.loadPersonaState(d, p),
            enabled: !!d,
          };
        }
        let Z;
        function k(l) {
          return (Z ??= (0, o.c)(l));
        }
        function te(l, p) {
          let s = new I.Z(l);
          const d = p?.public_data,
            _ = p?.private_data;
          return (
            (s.m_bInitialized = !!p),
            (s.m_ePersonaState = _?.persona_state ?? f.cU3),
            (s.m_strAvatarHash = d?.sha_digest_avatar
              ? (0, E.Kx)(d.sha_digest_avatar)
              : I.dV),
            (s.m_strPlayerName = d?.persona_name ?? l.ConvertTo64BitString()),
            (s.m_strAccountName = _?.account_name),
            _?.persona_state_flags &&
              (s.m_unPersonaStateFlags = _?.persona_state_flags),
            _?.game_id && (s.m_gameid = _?.game_id),
            _?.game_server_ip_address &&
              (s.m_unGameServerIP = _?.game_server_ip_address),
            _?.lobby_steam_id && (s.m_game_lobby_id = _?.lobby_steam_id),
            _?.game_extra_info && (s.m_strGameExtraInfo = _?.game_extra_info),
            d?.profile_url && (s.m_strProfileURL = d.profile_url),
            s
          );
        }
      },
      84676: (V, X, t) => {
        "use strict";
        t.d(X, {
          G6: () => C,
          Gg: () => h,
          Ow: () => S,
          Sq: () => o,
          YM: () => l,
          eR: () => G,
          ik: () => D,
          mZ: () => B,
          t7: () => b,
          zX: () => Z,
        });
        var e = t(41735),
          A = t.n(e),
          M = t(90626),
          f = t(72604),
          R = t(56062),
          E = t(30096),
          I = t(10142);
        function g(p, s, d = !0) {
          const _ = d
              ? CStoreItemCache.k_DataRequest_BasicInfo
              : CStoreItemCache.k_DataRequest_CommonOnly,
            c = d || CStoreItemCache.Get().BHasStoreItem(p, s, _) ? p : null,
            [m, U] = C(c, s, _),
            [N, Y] = useState(null),
            [x, v] = C(N, s, _);
          useEffect(() => {
            m?.GetAppType() === EStoreAppType.k_EStoreAppType_Demo &&
              Y(m.GetParentAppID());
          }, [m]);
          let L = m?.GetShortDescription()
            ? StripBBCodeTags(m.GetShortDescription())
            : "";
          (!L || L.length === 0) &&
            x &&
            (L = x?.GetShortDescription()
              ? StripBBCodeTags(x.GetShortDescription())
              : "");
          const P = U == D && (!N || v == D);
          return [L, P];
        }
        const o = 1,
          G = 2,
          D = 3;
        function C(p, s, d, _) {
          const c = (0, M.useRef)(void 0),
            m = (0, M.useRef)(void 0),
            U = (0, E.CH)();
          c.current = p;
          const [N, Y] = (0, M.useState)(void 0),
            {
              include_assets: x,
              include_release: v,
              include_platforms: L,
              include_all_purchase_options: P,
              include_screenshots: H,
              include_trailers: z,
              include_ratings: W,
              include_tag_count: $,
              include_reviews: J,
              include_basic_info: se,
              include_supported_languages: _e,
              include_full_description: ue,
              include_included_items: me,
              include_assets_without_overrides: De,
              apply_user_filters: Ce,
              include_links: Ae,
              include_extra_details: Le,
            } = d;
          if (
            ((0, M.useEffect)(() => {
              const xe = {
                include_assets: x,
                include_release: v,
                include_platforms: L,
                include_all_purchase_options: P,
                include_screenshots: H,
                include_trailers: z,
                include_ratings: W,
                include_tag_count: $,
                include_reviews: J,
                include_basic_info: se,
                include_supported_languages: _e,
                include_full_description: ue,
                include_included_items: me,
                include_assets_without_overrides: De,
                apply_user_filters: Ce,
                include_links: Ae,
                include_extra_details: Le,
              };
              let Ue = null;
              return (
                !p ||
                  p < 0 ||
                  I.A.Get().BHasStoreItem(p, s, xe) ||
                  (N !== void 0 && _ && _ == m.current) ||
                  (_ !== m.current && (Y(void 0), (m.current = _)),
                  (Ue = A().CancelToken.source()),
                  I.A.Get()
                    .QueueStoreItemRequest(p, s, xe)
                    .then((Ke) => {
                      !Ue?.token.reason && c.current === p && Y(Ke == f.R), U();
                    })),
                () => Ue?.cancel("useStoreItemCache: unmounting")
              );
            }, [
              p,
              s,
              _,
              N,
              x,
              v,
              L,
              P,
              H,
              z,
              W,
              $,
              J,
              se,
              _e,
              ue,
              me,
              De,
              Ce,
              Ae,
              Le,
              U,
            ]),
            !p)
          )
            return [null, G];
          if (N === !1) return [void 0, G];
          if (I.A.Get().BIsStoreItemMissing(p, s)) return [void 0, G];
          if (!I.A.Get().BHasStoreItem(p, s, d)) return [void 0, o];
          const ye = I.A.Get().GetStoreItemWithLegacyVisibilityCheck(p, s);
          return ye ? [ye, D] : [null, G];
        }
        function b(p, s, d) {
          return C(p, R.c6.qI, s, d);
        }
        function S(p, s, d) {
          return C(p, R.c6.xO, s, d);
        }
        function h(p, s, d) {
          return C(p, R.c6.RD, s, d);
        }
        function B(p, s, d) {
          const [_, c] = C(p, s, d);
          let m;
          _?.GetStoreItemType() == R.c6.RD &&
            !_.GetAssets()?.GetHeaderURL() &&
            _?.GetIncludedAppIDs().length == 1 &&
            (m = _.GetIncludedAppIDs()[0]);
          const [U, N] = b(m, d);
          return m && U?.BIsVisible() ? [U, N] : [_, c];
        }
        function y(p, s, d, _) {
          const c = (0, E.CH)(),
            {
              include_assets: m,
              include_release: U,
              include_platforms: N,
              include_all_purchase_options: Y,
              include_screenshots: x,
              include_trailers: v,
              include_ratings: L,
              include_tag_count: P,
              include_reviews: H,
              include_basic_info: z,
              include_supported_languages: W,
              include_full_description: $,
              include_included_items: J,
              include_assets_without_overrides: se,
              apply_user_filters: _e,
              include_links: ue,
              include_extra_details: me,
            } = d;
          return (
            (0, M.useEffect)(() => {
              if (!p || p.length == 0) return;
              const Ce = {
                  include_assets: m,
                  include_release: U,
                  include_platforms: N,
                  include_all_purchase_options: Y,
                  include_screenshots: x,
                  include_trailers: v,
                  include_ratings: L,
                  include_tag_count: P,
                  include_reviews: H,
                  include_basic_info: z,
                  include_supported_languages: W,
                  include_full_description: $,
                  include_included_items: J,
                  include_assets_without_overrides: se,
                  apply_user_filters: _e,
                  include_links: ue,
                  include_extra_details: me,
                },
                Ae = p.filter(
                  (xe) =>
                    !(
                      I.A.Get().BHasStoreItem(xe, s, Ce) ||
                      I.A.Get().BIsStoreItemMissing(xe, s)
                    ),
                );
              if (Ae.length == 0) return;
              const Le = A().CancelToken.source(),
                ye = Ae.map((xe) => I.A.Get().QueueStoreItemRequest(xe, s, Ce));
              return (
                Promise.all(ye).then(() => {
                  Le.token.reason || c();
                }),
                () => Le.cancel("useStoreItemCacheMultiplePackages: unmounting")
              );
            }, [
              p,
              s,
              _,
              c,
              m,
              U,
              N,
              Y,
              x,
              v,
              L,
              P,
              H,
              z,
              W,
              $,
              J,
              se,
              _e,
              ue,
              me,
            ]),
            p
              ? p.every(
                  (Ce) =>
                    I.A.Get().BHasStoreItem(Ce, s, d) ||
                    I.A.Get().BIsStoreItemMissing(Ce, s),
                )
                ? p.every((Ce) =>
                    I.A.Get().GetStoreItemWithLegacyVisibilityCheck(Ce, s),
                  )
                  ? D
                  : G
                : o
              : G
          );
        }
        function Z(p, s, d) {
          return y(p, R.c6.qI, s, d);
        }
        function k(p, s, d) {
          return y(p, EStoreItemType.k_EStoreItemType_Bundle, s, d);
        }
        function te(p, s, d) {
          return y(p, EStoreItemType.k_EStoreItemType_Package, s, d);
        }
        function l() {
          M.useEffect(
            () => (
              I.A.Get().SetReturnUnavailableItems(!0),
              () => I.A.Get().SetReturnUnavailableItems(!1)
            ),
            [],
          );
        }
      },
      19681: (V, X, t) => {
        "use strict";
        t.d(X, { l: () => A });
        var e = t(98609);
        function A(M, f) {
          if (!(!M?.asset_url_format || typeof M[f] != "string"))
            return (
              e.TS.BASE_URL_SHARED_CDN +
              "/store_item_assets/" +
              M.asset_url_format.replace("${FILENAME}", M[f])
            );
        }
      },
      2668: (V, X, t) => {
        "use strict";
        t.d(X, { Li: () => k, ue: () => l });
        var e = t(7850),
          A = t(19298),
          M = t(10349),
          f = t(19681),
          R = t(18654),
          E = t.n(R),
          I = t(98932),
          g = t(95995),
          o = t(36118),
          G = t(72865),
          D = t(53107),
          C = t(36707),
          b = t(18210),
          S = t(98609),
          h = t(18714),
          B = t.n(h),
          y = t(40358),
          Z = t(68094);
        function k(_) {
          const { spotlight: c } = _,
            m = (0, G.aL)(c.url, "spotlight");
          return (0, e.jsx)(g.A, {
            appID: c.item?.type == "app" ? c.item.id : void 0,
            feature: "spotlight",
            children: (0, e.jsxs)(A.Z, {
              className: h.SpotlightCtn,
              onOKButton: () => {
                window.location.href = m;
              },
              children: [
                (0, e.jsxs)("div", {
                  className: h.SpotlightImageCtn,
                  children: [
                    (0, e.jsx)("div", {
                      className: (0, C.A)(
                        R.CapsuleDecorators,
                        h.CapsuleDecorators,
                      ),
                      children: c.has_live_broadcast && (0, e.jsx)(I.K, {}),
                    }),
                    c.open_in_new_window
                      ? (0, e.jsx)(D.uU, {
                          href: m,
                          children: (0, e.jsx)("img", {
                            src: c.image_url,
                            alt: c.title,
                          }),
                        })
                      : (0, e.jsx)("a", {
                          href: m,
                          children: (0, e.jsx)("img", {
                            src: c.image_url,
                            alt: c.title,
                          }),
                        }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  className: h.SpotlightTextCtn,
                  children: [
                    (0, e.jsx)("div", {
                      className: h.SpotlightTitle,
                      children: c.title,
                    }),
                    (0, e.jsx)("div", {
                      className: h.SpotlightBody,
                      children: c.body,
                    }),
                    (0, e.jsx)("div", {
                      className: h.BottomBarPriceInfo,
                      children: (0, e.jsx)(s, {
                        discountBlock: c.discount_block,
                        bIsSalePage: c.is_sale_page,
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        function te(_) {
          const { spotlight: c } = _,
            m = c.associated_item,
            U = {
              is_weeklong_deals: c.spotlight_template == "weeklong_deals",
              url: c.spotlight_link_url,
              image_url: Config.MEDIA_CDN_URL + c.asset_url,
              title: c.spotlight_title,
              body: c.spotlight_body,
              ...d(m),
            };
          if (
            (!U.url && m && (U.url = Config.STORE_BASE_URL + m.store_url_path),
            c.spotlight_body?.indexOf("%1$s") !== -1)
          ) {
            let N;
            m?.best_purchase_option?.active_discounts?.length
              ? (N = new Date(
                  m.best_purchase_option.active_discounts[0].discount_end_date *
                    1e3,
                ))
              : c.end_date && (N = new Date(c.end_date * 1e3)),
              N &&
                (U.body = c.spotlight_body?.replace(
                  "%1$s",
                  N.toLocaleTimeString(
                    LocalizationManager.GetPreferredLocales(),
                    {
                      hour: "numeric",
                      minute: "2-digit",
                      month: "short",
                      day: "numeric",
                    },
                  ),
                ));
          }
          return jsx(k, { spotlight: U });
        }
        function l(_) {
          const { dailyDeal: c } = _,
            m = (0, G.aL)(c.target, "daily-deal"),
            U = (0, M.SW)(c.item?.type ?? "application"),
            N = (0, y.J$)((0, Z.Jz)({ item_type: U, id: c.item?.id }));
          return (0, e.jsx)(g.A, {
            appID: c.item?.type == "app" ? c.item.id : void 0,
            feature: "daily-deal",
            children: (0, e.jsxs)(A.Z, {
              className: h.DailyDealCtn,
              onOKButton: () => {
                window.location.href = m;
              },
              children: [
                (0, e.jsx)("div", {
                  className: h.DailyDealImageCtn,
                  children: (0, e.jsx)("a", {
                    href: m,
                    children: (0, e.jsx)("img", {
                      src: c.image,
                      alt: N.data?.name,
                    }),
                  }),
                }),
                (0, e.jsxs)("div", {
                  className: h.DailyDealTextCtn,
                  children: [
                    (0, e.jsx)("div", {
                      className: h.DailyDealDesc,
                      children: c.desc,
                    }),
                    (0, e.jsx)(s, {
                      discountBlock: c.discount_block,
                      bIsSalePage: c.is_sale_page,
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        function p(_) {
          const {
              dailyDeal: { item: c },
            } = _,
            m = {
              end_date:
                c?.best_purchase_option?.active_discounts?.[0]
                  ?.discount_end_date,
              target: Config.STORE_BASE_URL + c?.store_url_path,
              image: BuildStoreAssetURL(c?.assets, "header"),
              ...d(c),
            };
          return jsx(l, { dailyDeal: m });
        }
        const s = (_) => {
          const { discountBlock: c, bIsSalePage: m } = _;
          if (!c) return null;
          const U = c.hide_discount_percent_for_compliance;
          return m
            ? c.discount_max == null || c.discount_max <= 0
              ? null
              : c.discount_min == null || c.discount_min <= 0
                ? (0, e.jsx)("div", {
                    className: (0, C.A)(
                      E().StoreSalePriceWidgetContainer,
                      E().Discounted,
                    ),
                    children: (0, e.jsxs)("div", {
                      className: E().StoreSaleDiscountBox,
                      children: ["Up to -", c.discount_max, "%"],
                    }),
                  })
                : U
                  ? (0, e.jsx)("div", {
                      className: E().DiscountIconCtn,
                      children: (0, e.jsx)(o.XH_, {}),
                    })
                  : (0, e.jsx)("div", {
                      className: (0, C.A)(
                        E().StoreSalePriceWidgetContainer,
                        E().Discounted,
                      ),
                      children:
                        c.discount_min === c.discount_max
                          ? (0, e.jsxs)("div", {
                              className: E().StoreSaleDiscountBox,
                              children: [c.discount_min, "%"],
                            })
                          : (0, e.jsxs)("div", {
                              className: E().StoreSaleDiscountBox,
                              children: [
                                c.discount_min,
                                " - ",
                                c.discount_max,
                                "%",
                              ],
                            }),
                    })
            : c.final_price == null || c.final_price === ""
              ? null
              : c.bundle_discount != null && c.bundle_discount > 0 && !U
                ? (0, e.jsx)("div", {
                    className: h.DiscountBlock,
                    children: (0, e.jsxs)("div", {
                      className: h.DiscountPercent,
                      children: ["-", c.bundle_discount, "%"],
                    }),
                  })
                : c.discount_percent != null && c.discount_percent > 0
                  ? U
                    ? (0, e.jsxs)("div", {
                        className: (0, C.A)(
                          E().StoreSalePriceWidgetContainer,
                          E().Discounted,
                        ),
                        children: [
                          (0, e.jsx)("div", {
                            className: E().DiscountIconCtn,
                            children: (0, e.jsx)(o.XH_, {}),
                          }),
                          (0, e.jsx)("div", {
                            className: E().StoreSaleDiscountedPriceCtn,
                            children: (0, e.jsx)("div", {
                              className: E().StoreSalePriceBox,
                              children: c.final_price,
                            }),
                          }),
                        ],
                      })
                    : (0, e.jsxs)("div", {
                        className: (0, C.A)(
                          E().StoreSalePriceWidgetContainer,
                          E().Discounted,
                        ),
                        children: [
                          (0, e.jsxs)("div", {
                            className: E().StoreSaleDiscountBox,
                            children: [c.discount_percent, "%"],
                          }),
                          (0, e.jsxs)("div", {
                            className: E().StoreSaleDiscountedPriceCtn,
                            children: [
                              (0, e.jsx)("div", {
                                className: E().StoreOriginalPrice,
                                children: c.orig_price,
                              }),
                              (0, e.jsx)("div", {
                                className: E().StoreSalePriceBox,
                                children: c.final_price,
                              }),
                            ],
                          }),
                        ],
                      })
                  : (0, e.jsx)("div", {
                      className: (0, C.A)(E().StoreSalePriceWidgetContainer),
                      children: (0, e.jsx)("div", {
                        className: E().StoreSaleDiscountedPriceCtn,
                        children: (0, e.jsx)("div", {
                          className: E().StoreSalePriceBox,
                          children: c.final_price,
                        }),
                      }),
                    });
        };
        function d(_) {
          return _
            ? {
                item: {
                  type: ConvertEStoreItemTypeToString(_.item_type),
                  id: _.id,
                },
                discount_block: {
                  orig_price: _.best_purchase_option?.formatted_original_price,
                  final_price: _.best_purchase_option?.formatted_final_price,
                  discount_percent: _.best_purchase_option?.discount_pct,
                  hide_discount_percent_for_compliance:
                    _.best_purchase_option?.hide_discount_pct_for_compliance,
                },
              }
            : {};
        }
      },
      49628: (V, X, t) => {
        "use strict";
        t.d(X, { H: () => M });
        var e = t(99412),
          A = t(98609);
        const M = () => (A.TS.EUNIVERSE === e.Rv ? 2581 : 45267781);
      },
      60655: (V, X, t) => {
        "use strict";
        t.d(X, { hA: () => Y, LG: () => x });
        var e = t(7850),
          A = t(60480),
          M = t(6469),
          f = t(18210),
          R = t(3166),
          E = t(25792),
          I = t(85599),
          g = t(24660),
          o = t(79083),
          G = t(40358),
          D = t(29522),
          C = t(90626),
          b = t(56524),
          S = t.n(b),
          h = t(19298),
          B = t(95695),
          y = t.n(B),
          Z = t(51079),
          k = t(13484),
          te = t(36707),
          l = t(19730),
          p = t(53113);
        function s(L) {
          const {
            strURL: P,
            strName: H,
            strAvatarURL: z,
            nFollowers: W,
            strCreatorType: $,
            strTagLine: J,
            strMemberListURL: se,
            followButton: _e,
            bSmallFormat: ue,
            bMinimalDisplay: me,
          } = L;
          return (0, e.jsx)(Z.Ay, {
            feature: "salecreatorhome",
            children: (0, e.jsxs)(h.Z, {
              className: (0, te.A)(
                S().DevSummaryCtn,
                ue ? S().SmallFormat : S().LargeFormat,
                me ? S().MinimalDisplay : "",
              ),
              "flow-children": "row",
              children: [
                !!$ &&
                  (0, e.jsx)("span", { className: S().Title, children: $ }),
                (0, e.jsxs)("div", {
                  className: S().DevSummaryWidgetCtn,
                  children: [
                    (0, e.jsx)("div", {
                      className: S().DevSummaryBackground,
                      style: { backgroundImage: `url(${z} )` },
                    }),
                    (0, e.jsxs)("div", {
                      className: (0, te.A)(S().DevSummaryContent),
                      children: [
                        (0, e.jsxs)("div", {
                          className: y().FlexRowContainer,
                          children: [
                            (0, e.jsx)(k.m, {
                              href: (0, p.k2)(P),
                              className: S().AvatarLink,
                              bAllowFocuseableAnchor: !0,
                              children: (0, e.jsx)("img", {
                                className: (0, te.A)(S().Avatar, "Avatar_Trgt"),
                                src: z,
                              }),
                            }),
                            (0, e.jsxs)("div", {
                              className: (0, te.A)(
                                y().FlexColumnContainer,
                                S().CreatorDescCtn,
                              ),
                              children: [
                                (0, e.jsxs)("div", {
                                  className: (0, te.A)(
                                    S().CreatorTitleCtn,
                                    y().FlexColumnContainer,
                                  ),
                                  children: [
                                    (0, e.jsx)(k.m, {
                                      href: (0, p.k2)(P),
                                      className: S().CreatorNameName,
                                      children: H,
                                    }),
                                    !!J &&
                                      (0, e.jsx)("div", {
                                        className: (0, te.A)(
                                          y().FlexColumnContainer,
                                          S().CreatorTagline,
                                        ),
                                        children: J,
                                      }),
                                  ],
                                }),
                                (0, e.jsx)("div", {
                                  className: (0, te.A)({
                                    [y().FlexColumnContainer]: ue,
                                    [y().FlexRowContainer]: !ue,
                                    [S().SocialFollowersCtn]: !0,
                                  }),
                                  children: (0, e.jsxs)("div", {
                                    className: (0, te.A)(S().FollowBtnCtn),
                                    children: [
                                      _e,
                                      (0, e.jsxs)("div", {
                                        className: (0, te.A)({
                                          [S().Followers]: !0,
                                        }),
                                        children: [
                                          (0, e.jsx)("span", {
                                            children: (0, f.we)(
                                              "#CreatorHome_JustFollowers",
                                            ),
                                          }),
                                          (0, e.jsx)("span", {
                                            className: S().FollowerCount,
                                            children: (0, l.Dq)(W),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        !!se &&
                          (0, e.jsx)("a", {
                            href: se,
                            target: "_blank",
                            className: S().MembersListLink,
                            children: (0, f.we)("#ClanMembershipList"),
                          }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        var d = t(37934);
        function _(L) {
          const { data: P } = (0, G.wl)(L ? { appid: L } : void 0);
          return C.useMemo(() => {
            if (!L) return [];
            if (!P) return;
            const H = [],
              z = new Set(),
              W = [
                ["developer", (0, D.Qm)(P.developers)],
                ["publisher", (0, D.Qm)(P.publishers)],
                ["franchise", (0, D.Qm)(P.franchises)],
              ];
            for (const [$, J] of W)
              for (const se of J)
                z.has(se) ||
                  (z.add(se),
                  H.push({ appid: L, name: "", clan_account_id: se, type: $ }));
            return H;
          }, [L, P]);
        }
        function c(L) {
          const { rgCreators: P, renderCreator: H } = L,
            [z, W] = C.useState(0);
          if (!P.length) return null;
          if (P.length == 1)
            return (0, e.jsx)(e.Fragment, { children: H(P[0]) });
          const $ = z % P.length;
          return (0, e.jsxs)("div", {
            className: S().CreatorCarouselCtn,
            children: [
              H(P[$]),
              (0, e.jsx)("div", {
                className: S().CreatorCarouselCrumbs,
                children: P.map((J, se) =>
                  (0, e.jsx)(
                    g.ml,
                    {
                      className: S().CreatorCarouselCrumb,
                      onClick: () => W(se),
                      "aria-label": N(J.type),
                      children: (0, e.jsx)(o.U, { bIsActive: se == $ }),
                    },
                    J.clan_account_id,
                  ),
                ),
              }),
            ],
          });
        }
        function m(L) {
          const { creatorID: P, bSmallFormat: H } = L,
            { data: z } = useCreatorHomeByClanAccountID(P.clan_account_id);
          return z
            ? jsx(CreatorHomeEmbedDisplay, {
                strURL: GetCreatorHomeURL(z, P.type),
                strName: z.name ?? "",
                strAvatarURL: z.avatar_url_full_size ?? "",
                nFollowers: z.followers ?? 0,
                strCreatorType: N(P.type),
                followButton: jsx(CuratorFollowButton, {
                  clanAccountID: P.clan_account_id,
                  followType: "creatorhome",
                }),
                bSmallFormat: H,
              })
            : null;
        }
        function U(L) {
          const { appid: P, bSmallFormat: H } = L,
            z = _(P);
          return z
            ? jsx(c, {
                rgCreators: z,
                renderCreator: (W) => jsx(m, { creatorID: W, bSmallFormat: H }),
              })
            : jsx("div", {
                className: creatorstyle.DevSummaryWidgetCtn,
                children: jsx(Throbber, {}),
              });
        }
        function N(L) {
          switch (L) {
            case "publisher":
              return (0, f.we)("#CreatorHome_PublishedBy");
            case "franchise":
              return (0, f.we)("#CreatorHome_InFranchise");
          }
          return (0, f.we)("#CreatorHome_DevelopedBy");
        }
        function Y(L) {
          const {
              creatorID: P,
              bShowTagline: H,
              bHideCreatorType: z,
              bSmallFormat: W,
              bHideFollowButton: $,
              bAddLinkToMemberList: J,
              bMinimalDisplay: se,
            } = L,
            { creatorHome: _e } = (0, A.FV)(P.clan_account_id),
            [ue] = (0, M.L2)();
          return ue || !_e
            ? (0, e.jsx)("div", {
                className: b.DevSummaryWidgetCtn,
                children: (0, e.jsx)(I.t, {
                  string: (0, f.we)("#Loading"),
                  size: "medium",
                  position: "center",
                }),
              })
            : (0, e.jsx)(E.tH, {
                children: (0, e.jsx)(s, {
                  strURL: _e.GetCreatorHomeURL(P.type),
                  strName: _e.GetName(),
                  strAvatarURL: _e.GetAvatarURLFullSize(),
                  nFollowers: _e.GetNumFollowers(),
                  strCreatorType: z ? void 0 : N(P.type),
                  strTagLine: H ? _e.GetTagLine() : void 0,
                  strMemberListURL: J
                    ? R.TS.COMMUNITY_BASE_URL +
                      "gid/" +
                      _e.GetClanSteamID().ConvertTo64BitString() +
                      "/members/"
                    : void 0,
                  followButton: $
                    ? void 0
                    : (0, e.jsx)(d.of, {
                        clanAccountID: P.clan_account_id,
                        creatorID: P,
                      }),
                  bSmallFormat: W,
                  bMinimalDisplay: se,
                }),
              });
        }
        function x(L) {
          const { appid: P, bSmallFormat: H } = L,
            z = _(P);
          return z
            ? (0, e.jsx)(E.tH, {
                children: (0, e.jsx)(c, {
                  rgCreators: z,
                  renderCreator: (W) =>
                    (0, e.jsx)(Y, { creatorID: W, bSmallFormat: H }),
                }),
              })
            : (0, e.jsx)("div", {
                className: b.DevSummaryWidgetCtn,
                children: (0, e.jsx)(I.t, {}),
              });
        }
        function v(L) {
          const { clanInfo: P, bAddLinkToMemberList: H } = L;
          if (
            (AssertMsg(
              P && P.clanAccountID,
              "CuratorHoverContent expect clanInfo, not supplied",
            ),
            !P)
          )
            return null;
          const z = {
            clan_account_id: P.clanAccountID,
            name: P.group_name,
            type: "developer",
          };
          return jsx("div", {
            className: creatorstyle.CuratorHoverCtn,
            children: jsx(Y, {
              creatorID: z,
              bSmallFormat: !0,
              bShowTagline: !0,
              bHideCreatorType: !0,
              bAddLinkToMemberList: H,
            }),
          });
        }
      },
      86390: (V, X, t) => {
        "use strict";
        t.d(X, { Cg: () => C, pZ: () => S, vg: () => b });
        var e = t(7850),
          A = t(90626),
          M = t(88003),
          f = t(18210),
          R = t(3166),
          E = t(34004),
          I = t(6740),
          g = t(3685),
          o = t(8059),
          G = t(96538);
        function D(B) {
          return (0, e.jsx)(M.x_, {
            onEscKeypress: B.closeModal,
            bDisableBackgroundDismiss: !0,
            children: (0, e.jsx)(h, {
              redirectURL: B.redirectURL,
              guestOption: B.guestOption,
            }),
          });
        }
        function C(B) {
          const { redirectURL: y = window.location.href } = B;
          return (0, e.jsx)(G.EN, {
            active: !0,
            children: (0, e.jsx)(D, { redirectURL: y }),
          });
        }
        function b() {
          (0, M.pg)(
            (0, e.jsx)(D, {
              ownerWin: window,
              redirectURL: window.location.href,
            }),
            window,
            { strTitle: (0, f.we)("#Login_SignInTitle") },
          );
        }
        function S(B, y) {
          (0, M.pg)(
            (0, e.jsx)(D, { ownerWin: window, redirectURL: B, guestOption: y }),
            window,
            { strTitle: (0, f.we)("#Login_SignInTitle") },
          );
        }
        function h(B) {
          const { redirectURL: y, guestOption: Z } = B,
            [k] = (0, A.useState)(
              new g.D(R.TS.WEBAPI_BASE_URL).GetAnonymousServiceTransport(),
            ),
            [te, l] = (0, A.useState)(!1),
            p = (s) => {
              s == o.wI.k_PrimaryDomainFail ? l(!0) : window.location.assign(y);
            };
          return (0, e.jsx)("div", {
            children: te
              ? (0, e.jsx)(E.Fn, {})
              : (0, e.jsx)(E.YN, {
                  autoFocus: !0,
                  transport: k,
                  platform: I.SS.tS,
                  onComplete: p,
                  redirectUrl: y,
                  theme: "modal",
                  children: Z && (0, e.jsx)(E.Mk, { redirectURL: y }),
                }),
          });
        }
      },
      13465: (V, X, t) => {
        "use strict";
        t.d(X, { c: () => M });
        var e = t(7850),
          A = t(90626);
        function M(f) {
          const {
              rgSources: R,
              onIncrementalError: E,
              onError: I,
              strAltText: g,
              ref: o,
              ...G
            } = f,
            D = A.useRef(null),
            [C, b] = A.useState(0),
            [S, h] = A.useState(0);
          A.useImperativeHandle(
            o,
            () => ({ imgRef: D, nSourceIndex: C, nSourceLength: R.length }),
            [D, C, R],
          );
          const B = A.useMemo(() => JSON.stringify(R), [R]);
          A.useEffect(() => {
            b(0), h((k) => k + 1);
          }, [B]);
          const y = A.useMemo(() => {
              let k = "";
              return (
                R && R.length > C && (k = R[C]),
                k ||
                  (console.warn(
                    "MultiSourceImage created with no image src",
                    f,
                    C,
                  ),
                  (k =
                    "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=")),
                k
              );
            }, [R, C, f]),
            Z = A.useCallback(
              (k) => {
                E?.(k, R[C], C);
                const te = C + 1;
                te >= R.length && I && I(k), te < R.length && b(te);
              },
              [C, I, E, R],
            );
          return (0, e.jsx)(
            "img",
            { ref: D, ...G, src: y, onError: Z, alt: g },
            S,
          );
        }
      },
      69736: (V, X, t) => {
        "use strict";
        t.d(X, { r: () => o, x: () => G });
        var e = t(35038),
          A = t(56062),
          M = t(58632),
          f = t.n(M),
          R = t(80902),
          E = t(68312),
          I = t(84192),
          g = t(18210);
        function o(h) {
          const { item: B } = h,
            { data: y } = D(
              B.GetStoreItemType() == A.c6.RD ? B.GetID() : void 0,
            );
          return y
            ? (0, g.we)("#Cart_ShippingEstimate_DeliveryDate", G(y))
            : null;
        }
        function G(h) {
          return (0, g.we)(
            "#Hardware_ShippingEstimate_Range",
            h.estimated_delivery_soonest_business_days ?? 0,
            h.estimated_delivery_latest_business_days ?? 0,
          );
        }
        function D(h) {
          const B = (0, E.KV)();
          return (0, R.I)({
            queryKey: ["GetHardwareItems", h],
            queryFn: async () => b(B).load(h),
            enabled: !!h,
          });
        }
        let C;
        function b(h) {
          return C || (C = S(h)), C;
        }
        function S(h) {
          return new (f())(
            async (B) => {
              const y = e.w.Init(A.eW);
              (0, I.rV)(y), y.Body().set_packageid([...B]);
              const Z = await A.$4.GetHardwareItems(h, y);
              return Z.BSuccess()
                ? (Z.Body().toObject().details ??
                    B.map(() => new Error("No hardware details returned")))
                : (console.warn(`Failed to load hardware: ${Z.GetEResult()}`),
                  B.map(() => new Error(Z.GetErrorMessage())));
            },
            { cache: !1 },
          );
        }
      },
      96016: (V, X, t) => {
        "use strict";
        t.d(X, { p: () => o });
        var e = t(7850),
          A = t(90626),
          M = t(83482),
          f = t(56062),
          R = t(37740),
          E = t(72865),
          I = t(25294),
          g = t(2259);
        function o(D) {
          const { component: C = "a" } = D,
            b = G(D);
          return (0, e.jsx)(C, { ...b });
        }
        function G(D) {
          const {
              item: C,
              feature: b,
              depth: S,
              noImpressionTracking: h,
              ...B
            } = D,
            y = A.useRef(0),
            Z = C && C.GetStoreItemType() == f.c6.qI ? C.GetAppID() : null,
            k = (0, E.n9)(),
            te = A.useMemo(
              () => M.Ay.GetLinkParam({ ...k, feature: b || k.feature }, S),
              [k, b, S],
            ),
            l = A.useMemo(() => I.A.GetCuratorClanIDParam(k), [k]),
            p = A.useMemo(
              () => I.A.AddNavParamToURL(C ? C.GetStorePageURL() : "", te, l),
              [C, te, l],
            ),
            s = (0, R.b)(),
            d = A.useCallback(() => {
              Z && y.current != Z && (s.AddImpression(Z, te), (y.current = Z));
            }, [s, Z, te, y]),
            _ = (0, g.OO)({ onEnter: d });
          return { ...B, href: p, ref: Z && !h ? _ : void 0 };
        }
      },
      13484: (V, X, t) => {
        "use strict";
        t.d(X, { m: () => R });
        var e = t(7850),
          A = t(24660),
          M = t(72609),
          f = t(32093);
        function R(E) {
          const { href: I, children: g, bAllowFocuseableAnchor: o, ...G } = E;
          return M.TS.EREALM === f.TU.k_ESteamRealmChina
            ? (0, e.jsx)("div", { ...G, children: g })
            : o
              ? (0, e.jsx)(A.Ii, { href: I, ...G, children: g })
              : (0, e.jsx)("a", { href: I, ...G, children: g });
        }
      },
      34846: (V, X, t) => {
        "use strict";
        t.d(X, { $: () => B, g: () => S });
        var e = t(35038),
          A = t(19563),
          M = t(56062),
          f = t(42993),
          R = t(80902),
          E = t(90626),
          I = t(68312),
          g = t(5858),
          o = t(76559),
          G = t(58612),
          D = t(35098),
          C = t(10349),
          b = t(3166);
        function S(y, Z) {
          const k = h(y),
            te = (0, G.d0)({ loadFavorites: !0, loadNicknames: !0 }),
            l = k?.data?.ownership_info[0]?.friend_ownership,
            p = E.useMemo(
              () => new Map(l && l.map((_) => [_.accountid, _])),
              [l],
            ),
            s = E.useMemo(() => new Set(Z), [Z]);
          if (k.isLoading || te.isLoading) return { isLoading: !0 };
          if (k.isError || te.isError) return { isError: !0 };
          const d = te.data.map((_, c) => {
            const m = p.get(_.accountid) || {
              already_owns: !1,
              wishes_for: !1,
            };
            return { ..._, ownership: m };
          });
          return (
            d.sort((_, c) => {
              const m = s.has(_.accountid),
                U = s.has(c.accountid);
              if (m != U) return m ? -1 : 1;
              if (_.is_favorite != c.is_favorite) return _.is_favorite ? -1 : 1;
              if (_.ownership.wishes_for) {
                if (!c.ownership.wishes_for) return -1;
              } else if (c.ownership.wishes_for) return 1;
              const N = _.ownership.partial_wishes_for?.length ?? 0,
                Y = c.ownership.partial_wishes_for?.length ?? 0;
              if (N != Y) return Y - N;
              if (_.ownership.already_owns) {
                if (!c.ownership.already_owns) return 1;
              } else if (c.ownership.already_owns) return -1;
              const x = _.ownership.partial_owns_appids?.length ?? 0,
                v = c.ownership.partial_owns_appids?.length ?? 0;
              if (x != v) return x - v;
              if (N > 0) {
                const L = _.ownership.partial_wishes_for.reduce(
                    (H, z) => H ^ z,
                    0,
                  ),
                  P = c.ownership.partial_wishes_for.reduce((H, z) => H ^ z, 0);
                if (L != P) return L - P;
              }
              if (x > 0) {
                const L = _.ownership.partial_owns_appids.reduce(
                    (H, z) => H ^ z,
                    0,
                  ),
                  P = c.ownership.partial_owns_appids.reduce(
                    (H, z) => H ^ z,
                    0,
                  );
                if (L != P) return L - P;
              }
              return _.persona.m_strPlayerName.localeCompare(
                c.persona.m_strPlayerName,
              );
            }),
            { rgFriendsForGifting: d }
          );
        }
        function h(y) {
          const Z = (0, I.KV)(),
            k = (0, C.Je)(y.GetID(), y.GetStoreItemType());
          return (0, R.I)({
            queryKey: ["FriendOwnershipForGifting", k],
            queryFn: async () => {
              const te = e.w.Init(A.HM);
              te.Body().set_item_ids([M.O4.fromObject(k)]);
              const l = await A._o.GetFriendOwnershipForGifting(Z, te);
              if (!l.BSuccess()) throw l.GetEResult();
              return l.Body().toObject();
            },
          });
        }
        function B(y) {
          const Z = (0, f.LH)(),
            k = (0, D.js)(y.gift_info?.accountid_giftee),
            te = E.useMemo(
              () =>
                (0, b.Fd)("giftee_player_summaries", "application_config") ??
                [],
              [],
            );
          if (!y.gift_info?.accountid_giftee || k.isLoading) return null;
          if (k.data?.m_bInitialized || Z) return k.data;
          const l = te.find(
            (s) => s.accountid === y.gift_info.accountid_giftee,
          );
          if (!l) return null;
          let p = new g.Z(o.b.InitFromAccountID(l.accountid));
          return (
            (p.m_strAvatarHash = l.avatarHash),
            (p.m_strPlayerName = l.playerName),
            (p.m_bInitialized = !0),
            p
          );
        }
      },
      23366: (V, X, t) => {
        "use strict";
        t.d(X, {
          Ck: () => N,
          F$: () => z,
          Mn: () => P,
          S0: () => H,
          UI: () => y.UI,
          Vh: () => Z,
          g7: () => _,
          jY: () => x,
          lP: () => s,
          n0: () => m,
          sI: () => v,
          uQ: () => c,
          xz: () => d,
          zJ: () => Y,
        });
        var e = t(48366),
          A = t(87913),
          M = t(78280),
          f = t(99412),
          R = t(72604),
          E = t(35038),
          I = t(29392),
          g = t(2289),
          o = t(36053),
          G = t(56062),
          D = t(80902),
          C = t(75454),
          b = t(68312),
          S = t(4874),
          h = t(98609),
          B = t(67705),
          y = t(9843);
        function Z() {
          return (0, B.Fd)("cart_config", "application_config");
        }
        function k() {
          return ["shopping_cart", "relevant_coupons"];
        }
        function te() {
          return ["shopping_cart", "sale_drop_progress"];
        }
        async function l(W, $, J, se, _e, ue) {
          if (BIsAccountCart($)) {
            const me = CProtoBufMsg.Init(CAccountCart_AddItemsToCart_Request);
            me.Body().set_user_country(UserConfig.country_code);
            for (let Ce = 0; Ce < J; Ce++) {
              const Ae = me.Body().add_items();
              ue == EStoreItemType.k_EStoreItemType_Package
                ? Ae.set_packageid(_e)
                : ue == EStoreItemType.k_EStoreItemType_Bundle
                  ? Ae.set_bundleid(_e)
                  : console.error(
                      `Unrecognized store item type for quantity update: ${ue}`,
                    );
            }
            const De = await AccountCartService.AddItemsToCart(W, me);
            De.BSuccess() ||
              console.warn(
                `Failed to update account cart item quantity: ${De.GetEResult()}`,
              );
          } else {
            const me = CProtoBufMsg.Init(
              CShoppingCart_UpdatePackageQuantity_Request,
            );
            me.Body().set_gidlineitem(se),
              me.Body().set_gidshoppingcart($.gid),
              me.Body().set_quantity(J);
            const De = await ShoppingCartService.UpdatePackageQuantity(W, me);
            De.BSuccess() ||
              console.warn(
                `Failed to update shopping cart: ${De.GetEResult()}`,
              );
          }
        }
        function p(W, $, J, se) {
          const _e = useShoppingCartID(),
            ue = useActiveServiceTransport(),
            me = useQueryClient(),
            De = useShoppingCartID();
          return useMutation({
            mutationFn: async () => await l(ue, De, W, $, J, se),
            onSuccess: () => InvalidateShoppingCart(me, _e),
          });
        }
        const s = {
            include_basic_info: !0,
            include_assets: !0,
            include_platforms: !0,
            include_release: !0,
          },
          d = {
            ...s,
            include_included_items: !0,
            include_all_purchase_options: !0,
            included_item_data_request: s,
          };
        function _() {
          const [W] = (0, C.fg)();
          return (0, A.g)(W, d);
        }
        function c(W) {
          return (
            W?.cart_items.length &&
            W.cart_items.every(
              ({ store_item: $ }) =>
                $.item_type == G.c6.RD &&
                ($.self_purchase_option || $.best_purchase_option)
                  ?.requires_shipping,
            )
          );
        }
        function m(W) {
          return (
            W?.cart_items.length &&
            W.cart_items.every(
              ({ store_item: $, gift_info: J }) =>
                $.item_type == G.c6.RD &&
                J !== void 0 &&
                (!!J.accountid_giftee || !!J.email_giftee),
            )
          );
        }
        async function U(W) {
          const $ = E.w.Init(I.wi);
          $.Body().set_language((0, f.sfN)(h.TS.LANGUAGE));
          const J = await I.t8.GetRelevantCoupons(W, $);
          return J.BIsValid()
            ? J.Body().toObject()
            : (console.error("Failed to load relevant coupons"), {});
        }
        function N() {
          const W = (0, b.KV)();
          return (0, D.I)({
            queryKey: k(),
            queryFn: async () =>
              (await U(W)).line_items.reduce(
                (J, se) => ((J[se.line_item_id] = se.coupons), J),
                {},
              ),
            enabled: h.iA.logged_in,
            placeholderData: () => ({}),
          });
        }
        function Y() {
          return (0, D.I)({
            queryKey: te(),
            queryFn: async () => {
              const $ = await (
                await fetch(`${h.TS.STORE_BASE_URL}cart/ajaxsaledropprogress`)
              ).json();
              return (
                $.eresult !== R.R &&
                  console.error("Failed to load sale drop progress"),
                $
              );
            },
            enabled: h.iA.logged_in,
          });
        }
        function x() {
          const W = (0, M.j4)(),
            [$] = (0, C.fg)(),
            J = `${h.TS.STORE_CHECKOUT_BASE_URL}checkout/`;
          if ((0, e.c2)(W)) return `${J}?accountcart=1`;
          if ((0, e.sb)(W)) return `${J}?gidreplay=${W.gid}`;
          {
            const se = new URLSearchParams();
            return (
              se.append("cart", W.gid),
              $ &&
                $.accountid_giftee &&
                (se.append("purchasetype", "gift"),
                se.append("bIsGift", "1"),
                se.append("giftInfo", encodeURIComponent(JSON.stringify($)))),
              `${J}?${se.toString()}`
            );
          }
        }
        function v() {
          const W = (0, M.j4)();
          return (0, e.uU)(W) ? W.requestID : null;
        }
        function L(W) {
          return (0, e.c2)(W) || (0, e.kx)(W);
        }
        var P = ((W) => (
          (W[(W.k_ECanRequest = 0)] = "k_ECanRequest"),
          (W[(W.k_EIsNotChild = 1)] = "k_EIsNotChild"),
          (W[(W.k_EInvalidCartType = 2)] = "k_EInvalidCartType"),
          (W[(W.k_ENonGiftableItemPresent = 3)] = "k_ENonGiftableItemPresent"),
          W
        ))(P || {});
        function H() {
          const W = (0, M.j4)(),
            $ = (0, S.vo)(),
            J = _(),
            se = $.isSuccess && $.data.role() == g.PQ.sf,
            _e = J.data?.cart_items.some((me) => !me.can_purchase_as_gift);
          let ue = 0;
          return (
            se ? (L(W) ? _e && (ue = 3) : (ue = 2)) : (ue = 1), [ue === 0, ue]
          );
        }
        function z() {
          const W = (0, M.j4)(),
            $ = (0, S.vo)();
          return $.isSuccess && $.data.role() == g.PQ.s && (0, e.uU)(W);
        }
      },
      88383: (V, X, t) => {
        "use strict";
        t.d(X, { O3: () => rt, Zx: () => mt, pf: () => H });
        var e = t(7850),
          A = t(91405),
          M = t(63088),
          f = t(79485),
          R = t(48366),
          E = t(78280),
          I = t(86711),
          g = t.n(I),
          o = t(58162),
          G = t(19298),
          D = t(29392),
          C = t(56062),
          b = t(29245),
          S = t(57646),
          h = t(80702),
          B = t(5827),
          y = t(40358),
          Z = t(56925),
          k = t(54806),
          te = t(23366),
          l = t(94451),
          p = t(34846),
          s = t(90626),
          d = t(35098),
          _ = t(14874),
          c = t(84676),
          m = t(16412),
          U = t(25792),
          N = t(69736),
          Y = t(96016),
          x = t(36707),
          v = t(18210),
          L = t(98609),
          P = t(75454);
        function H(K) {
          const {
            lineItems: w = [],
            cartValidation: ne,
            LineItemContainer: ee = Ce,
            scrollable: oe = !1,
          } = K;
          if (!w.length) return (0, e.jsx)(J, {});
          const ie = ne?.cart_items
            ? ne.cart_items.reduce(
                (pe, ge) => ((pe[ge.line_item_id] = ge), pe),
                {},
              )
            : {};
          return (0, e.jsx)(o.uO, {
            scrollable: oe,
            children:
              w &&
              w.map((pe, ge) =>
                pe
                  ? (0, e.jsx)(
                      W,
                      {
                        item: pe,
                        loading: ne === void 0,
                        validatedItem: ie[pe.line_item_id],
                        LineItemContainer: ee,
                      },
                      pe.line_item_id,
                    )
                  : (0, e.jsx)(o.vF, {}, ge),
              ),
          });
        }
        const z = { [D.KW.$B]: _e, [D.KW.XY]: se };
        function W(K) {
          const { item: w, loading: ne, ...ee } = K,
            oe = ne ? o.vF : z[w.type];
          return oe
            ? (0, e.jsx)(U.tH, {
                fallback: (ie) => (0, e.jsx)($, { ...K, error: ie }),
                children: (0, e.jsx)(oe, { item: w, ...ee }),
              })
            : (console.error(`Unknown line item type (${w.type})`), null);
        }
        function $(K) {
          const { item: w, error: ne } = K,
            ee = (0, M.t)(w.line_item_id);
          return (0, e.jsxs)(o.Rz, {
            className: g().ErrorLineItem,
            children: [
              (0, e.jsxs)("div", {
                className: g().Left,
                children: [
                  (0, e.jsx)("div", {
                    className: g().Error,
                    children: (0, v.we)("#Cart_LineItem_ErrorBoundary"),
                  }),
                  (0, e.jsx)("div", {
                    className: g().Muted,
                    children: ne.message,
                  }),
                ],
              }),
              (0, e.jsx)(G.Z, {
                onActivate: () => ee.mutate(),
                className: g().RemoveButton,
                children: (0, v.we)("#Cart_Remove"),
              }),
            ],
          });
        }
        function J() {
          return (0, e.jsx)(o.Rz, {
            className: g().ErrorLineItem,
            children: (0, e.jsx)("div", {
              className: g().Left,
              children: (0, e.jsx)("div", {
                className: g().LineItemTitle,
                children: (0, v.we)("#Cart_Empty"),
              }),
            }),
          });
        }
        function se(K) {
          const { item: w, validatedItem: ne } = K,
            [ee, oe] = (0, c.G6)(w.bundleid, C.c6.xO, te.xz);
          if ((ee && !ee.BIsVisible()) || oe === c.eR)
            return (0, e.jsx)(ue, {
              lineItemID: w.line_item_id,
              validatedItem: ne,
              storeItem: ee,
            });
          if (!ee) return (0, e.jsx)(o.vF, {});
          const ie = ee.GetSelfPurchaseOption();
          return (0, e.jsx)(me, {
            ...K,
            storeItem: ee,
            displayItem: ee,
            lineItem: w,
            validatedItem: ne,
            purchaseOption: ie,
          });
        }
        function _e(K) {
          const { item: w, validatedItem: ne } = K,
            [ee, oe] = (0, c.Gg)(w.packageid, {}),
            [ie, pe] = (0, c.mZ)(w.packageid, C.c6.RD, te.lP),
            ge = (ie && !ie.BIsVisible()) || pe === c.eR || oe === c.eR,
            Ee = ee?.GetSelfPurchaseOption();
          return ge || (ee && !Ee)
            ? (0, e.jsx)(ue, {
                lineItemID: w.line_item_id,
                validatedItem: ne,
                storeItem: ie,
              })
            : !ie || !ee
              ? (0, e.jsx)(o.vF, {})
              : (0, e.jsx)(me, {
                  ...K,
                  storeItem: ee,
                  displayItem: ie,
                  lineItem: w,
                  purchaseOption: Ee,
                });
        }
        function ue(K) {
          const { lineItemID: w, validatedItem: ne, storeItem: ee } = K,
            oe = xe(ee),
            ie = (0, M.t)(w),
            pe = ie.isPending;
          return (0, e.jsxs)(o.Rz, {
            placeholder: !0,
            children: [
              pe && (0, e.jsx)(o.UD, {}),
              (0, e.jsxs)("div", {
                className: (0, x.A)(
                  g().InnerLineItemCtn,
                  pe && g().PendingLineItem,
                ),
                children: [
                  (0, e.jsx)("div", {
                    className: (0, x.A)(
                      g().LineItemColumn,
                      g().LineItemCapsule,
                    ),
                    children: (0, e.jsx)(Y.p, {
                      item: ee,
                      noImpressionTracking: !0,
                      children: (0, e.jsx)("img", {
                        className: g().HeaderImg,
                        src: oe,
                      }),
                    }),
                  }),
                  (0, e.jsxs)("div", {
                    className: g().LineItemDetailsCtn,
                    children: [
                      (0, e.jsx)(o.UW, {
                        className: g().LineItemDetailsRowTop,
                        children: (0, e.jsx)("div", {
                          className: g().LineItemTitle,
                          children:
                            ee?.GetName() ||
                            (0, v.we)("#SteamCharts_UnknownGameTitle"),
                        }),
                      }),
                      (0, e.jsx)(Ke, { validatedItem: ne }),
                      (0, e.jsx)(o.UW, {
                        className: g().LineItemSpaceBetween,
                        children: (0, e.jsx)(G.Z, {
                          onActivate: () => ie.mutate(),
                          className: g().RemoveLineItem,
                          children: (0, v.we)("#Cart_Remove"),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        function me(K) {
          const {
              storeItem: w,
              displayItem: ne,
              lineItem: ee,
              purchaseOption: oe,
              validatedItem: ie,
              LineItemContainer: pe,
            } = K,
            ge = ee.line_item_id,
            Ee = (0, _.DJ)(w),
            ke = (0, M.t)(ge),
            Pe = ke.isPending || ke.isSuccess,
            Ne = w.GetIncludedAppIDsOrSelf(),
            { data: he, isLoading: Je } = (0, Z.Pt)(),
            je = Ne.filter((_t) => he?.has(_t)),
            be = s.useId();
          if (Je || !ie) return (0, e.jsx)(o.vF, {});
          const we = ee.flags?.is_gift,
            ze = je.length === Ne.length,
            vt = !we && je.length > 0 && !ze;
          return (0, e.jsxs)(pe, {
            lineItem: ee,
            storeItem: w,
            validatedItem: ie,
            children: [
              Pe && (0, e.jsx)(o.UD, {}),
              (0, e.jsxs)("div", {
                className: (0, x.A)(
                  g().InnerLineItemCtn,
                  Pe && g().PendingLineItem,
                ),
                children: [
                  (0, e.jsx)(De, {
                    storeItem: w,
                    displayItem: ne,
                    validatedItem: ie,
                  }),
                  (0, e.jsxs)("div", {
                    className: g().LineItemDetailsCtn,
                    children: [
                      (0, e.jsx)(o.UW, {
                        className: g().LineItemDetailsRowTop,
                        children: (0, e.jsx)("div", {
                          className: g().LineItemTitle,
                          id: be,
                          children: w.GetName(),
                        }),
                      }),
                      w.BIsComingSoon() && (0, e.jsx)(Ue, { storeItem: w }),
                      (0, e.jsxs)(Ke, {
                        validatedItem: ie,
                        children: [
                          (0, e.jsx)(Te, { item: w }),
                          (0, e.jsx)(He, { item: w }),
                          (0, e.jsx)(Ge, { item: w }),
                        ],
                      }),
                      (0, e.jsx)(qe, { validatedItem: ie }),
                      vt && (0, e.jsx)(Be, { appids: je }),
                      (0, e.jsxs)(o.UW, {
                        className: g().LineItemSpaceBetween,
                        children: [
                          (0, e.jsx)("div", {
                            className: (0, x.A)(
                              g().LineItemCol,
                              g().PlatformIcons,
                            ),
                            children: (0, e.jsx)(b.Q, {
                              id: Ee,
                              strClassName: g().LineItemPlatforms,
                            }),
                          }),
                          (0, e.jsx)(Ae, {
                            purchaseOption: oe,
                            validatedItem: ie,
                          }),
                        ],
                      }),
                      (0, e.jsx)(Le, {
                        lineItem: ee,
                        storeItem: w,
                        purchaseOption: oe,
                        validatedItem: ie,
                        bAllAppsPrivate: ze,
                        fnRemoveLineItem: ke.mutate,
                        accessibilityId: be,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        function De(K) {
          const { storeItem: w, displayItem: ne, validatedItem: ee } = K,
            oe = xe(ne),
            ie = ee?.errors?.adult_content_restricted;
          return (0, e.jsx)("div", {
            className: (0, x.A)(g().LineItemColumn, g().LineItemCapsule),
            children: (0, e.jsx)(Y.p, {
              item: ne,
              feature: "cart-items",
              noImpressionTracking: !0,
              children: (0, e.jsx)("img", {
                className: ie ? g().HeaderImgBlurred : g().HeaderImg,
                src: oe,
                alt: w.GetName(),
              }),
            }),
          });
        }
        function Ce(K) {
          return (0, e.jsx)(G.Z, {
            children: (0, e.jsx)(o.Rz, { children: K.children }),
          });
        }
        function Ae(K) {
          const { purchaseOption: w, validatedItem: ne } = K;
          let ee = w?.formatted_original_price,
            oe = w?.formatted_final_price,
            ie = w?.discount_pct,
            pe = w?.final_price_in_cents;
          return (
            ne &&
              ne.original_price &&
              ne.subtotal.amount_in_cents != pe &&
              ((ee = ne.original_price.formatted_amount),
              (oe = ne.subtotal.formatted_amount),
              (ie = (0, o.dR)(ne))),
            (0, e.jsx)("div", {
              className: g().LineItemRightCol,
              children: (0, e.jsx)(S.kb, {
                className: g().PriceWidget,
                formatted_orig_price: ee,
                formatted_final_price: oe,
                discount_percent: ie,
                bHideDiscountPercentForCompliance:
                  w.hide_discount_pct_for_compliance,
                bDiscountFromCoupon: !!ne?.coupon_discount?.amount_in_cents,
              }),
            })
          );
        }
        function Le(K) {
          const {
              lineItem: w,
              storeItem: ne,
              purchaseOption: ee,
              validatedItem: oe,
              bAllAppsPrivate: ie,
              fnRemoveLineItem: pe,
              accessibilityId: ge,
            } = K,
            Ee = (0, R.EJ)(),
            [ke] = (0, P.fg)(),
            Pe =
              ke?.accountid_giftee ||
              (Ee ? w.gift_info?.accountid_giftee : void 0),
            Ne = (0, E.j4)(),
            he =
              (0, R.ZB)() &&
              !oe?.restrict_add_additional_to_cart &&
              !(0, R.kx)(Ne),
            Je = oe.errors?.adult_content_restricted,
            je = (0, A.A)(
              w.packageid,
              w.bundleid,
              Ze(ee),
              void 0,
              "cart-add-additional",
            ),
            be = s.useId(),
            we = s.useId();
          return (0, e.jsxs)(o.UW, {
            className: g().LineItemSpaceBetween,
            children: [
              (0, e.jsx)("div", {
                className: g().LineItemCol,
                children: Pe
                  ? (0, e.jsx)(ye, { recipient: Pe })
                  : (0, e.jsx)($e, {
                      lineItem: w,
                      storeItem: ne,
                      bAllAppsPrivate: ie,
                      purchaseOption: ee,
                    }),
              }),
              (0, e.jsxs)("div", {
                className: (0, x.A)(g().LineItemRightCol, g().AddRemoveLinks),
                children: [
                  he &&
                    (0, e.jsxs)(e.Fragment, {
                      children: [
                        (0, e.jsx)(G.Z, {
                          onActivate: () => !je.isPending && je.mutate(),
                          className: g().AddLineItem,
                          title: (0, v.we)("#Cart_LineItem_Add_Tooltip"),
                          id: be,
                          "aria-labelledby": `${be} ${ge}`,
                          children: (0, v.we)("#Cart_Add"),
                        }),
                        "|",
                      ],
                    }),
                  !Ee &&
                    (0, e.jsx)(G.Z, {
                      onActivate: () => pe(),
                      className: g().RemoveLineItem,
                      id: we,
                      "aria-labelledby": `${we} ${ge}`,
                      children: (0, v.we)("#Cart_Remove"),
                    }),
                  Je &&
                    (0, e.jsxs)(e.Fragment, {
                      children: [
                        "| ",
                        (0, e.jsx)("a", {
                          href: `${L.TS.STORE_CHECKOUT_BASE_URL}checkout/?purchasetype=updatebillinginfo&r=cart`,
                          className: g().VerifyLineItem,
                          children: (0, v.we)("#Cart_Verify"),
                        }),
                        " ",
                      ],
                    }),
                ],
              }),
            ],
          });
        }
        function ye(K) {
          const w = (0, d.js)(K.recipient);
          return (0, e.jsx)("div", {
            className: g().GiftForNotice,
            children: (0, v.PP)(
              "#Cart_GiftForNotice",
              w.data
                ? (0, e.jsx)("span", {
                    className: g().Name,
                    children: w.data.m_strPlayerName,
                  })
                : "",
            ),
          });
        }
        function xe(K) {
          const w = `${L.TS.STORE_BASE_URL}public/images/checkout/Cart_generic_header_logo.png`;
          if (!K) return w;
          const ne = K.GetAssets();
          if (!ne) return w;
          const ee = ne.GetHeaderURL(),
            oe = ne.GetSmallCapsuleURL();
          return ee || oe || w;
        }
        function Ue(K) {
          const { storeItem: w } = K;
          let ne = (0, v.we)(
            "#Cart_ComingSoon",
            w.GetFormattedSteamReleaseDate(),
          );
          return (
            w.BIsCustomComingSoonDisplay() &&
              (ne = w.GetFormattedSteamReleaseDate()),
            (0, e.jsx)(o.dp, { children: ne })
          );
        }
        function Ke(K) {
          const { validatedItem: w, children: ne } = K;
          return (0, e.jsxs)("div", {
            className: (0, x.A)(g().LineItemSpaceBetween),
            children: [(0, e.jsx)(l.Yz, { lineItem: w }), ne],
          });
        }
        function Te(K) {
          const { item: w } = K;
          return w.GetSelfPurchaseOption()?.requires_shipping
            ? (0, e.jsx)(o.dp, { children: (0, e.jsx)(N.r, { item: w }) })
            : null;
        }
        function He(K) {
          const { item: w } = K;
          if (!w.GetSelfPurchaseOption()?.requires_shipping) return null;
          const ne = L.iA.country_code;
          return ["GB"].includes(ne)
            ? (0, e.jsx)(o.dp, {
                children: (0, e.jsx)(G.Z, {
                  children: (0, e.jsx)("a", {
                    className: (0, x.A)(g().ComplianceLink),
                    target: "_blank",
                    href: "https://www.valvesoftware.com/legal/statement-of-compliance",
                    children: (0, v.we)(
                      "#Cart_LineItem_Hardware_Compliance_Label",
                    ),
                  }),
                }),
              })
            : null;
        }
        var Re = ((K) => (
            (K[(K.k_EBillingAgreementTypeInvalid = 0)] =
              "k_EBillingAgreementTypeInvalid"),
            (K[(K.k_EBillingAgreementTypeSteam = 1)] =
              "k_EBillingAgreementTypeSteam"),
            (K[(K.k_EBillingAgreementTypeGame = 2)] =
              "k_EBillingAgreementTypeGame"),
            K
          ))(Re || {}),
          Ve = ((K) => (
            (K[(K.k_ETimeUnitNone = 0)] = "k_ETimeUnitNone"),
            (K[(K.k_ETimeUnitSecond = 1)] = "k_ETimeUnitSecond"),
            (K[(K.k_ETimeUnitMinute = 2)] = "k_ETimeUnitMinute"),
            (K[(K.k_ETimeUnitHour = 3)] = "k_ETimeUnitHour"),
            (K[(K.k_ETimeUnitDay = 4)] = "k_ETimeUnitDay"),
            (K[(K.k_ETimeUnitWeek = 5)] = "k_ETimeUnitWeek"),
            (K[(K.k_ETimeUnitMonth = 6)] = "k_ETimeUnitMonth"),
            (K[(K.k_ETimeUnitYear = 7)] = "k_ETimeUnitYear"),
            K
          ))(Ve || {});
        function Ge(K) {
          const { item: w } = K;
          if (!w || w.GetStoreItemType() != C.c6.RD) return null;
          const ee = w.GetSelfPurchaseOption()?.recurrence_info;
          if (!ee) return null;
          let oe = "#Package";
          ee.billing_agreement_type === 2 && (oe = "#GameBillingPackage");
          const ie = w.GetSelfPurchaseOption();
          ie.formatted_final_price && ie.discount_pct && (oe += "WithDiscount");
          const ge = {
              1: "Second",
              2: "Minute",
              3: "Hour",
              4: "Day",
              5: "Week",
              6: "Month",
              7: "Year",
            }[ee.renewal_time_unit],
            Ee = oe + "CostIncludesSubscriptionBy" + ge;
          return (0, e.jsx)(o.dp, {
            children: (0, v.we)(
              Ee,
              ie.formatted_final_price,
              ee.formatted_renewal_price,
              ee.renewal_time_period,
              ie.discount_pct,
            ),
          });
        }
        function $e(K) {
          const {
              lineItem: w,
              storeItem: ne,
              bAllAppsPrivate: ee,
              purchaseOption: oe,
            } = K,
            ie = (0, f.C)(),
            pe = (0, Z.DT)(),
            ge = (0, R.EJ)(),
            Ee = (0, p.$)(w),
            ke = !Ze(oe) || ge,
            Pe = !at(oe);
          let Ne = [
            {
              data: "myself",
              label: (0, v.we)("#Cart_LineItemOptions_Myself"),
            },
            !Pe && {
              data: "private",
              label: (0, v.we)("#Cart_LineItemOptions_Privately"),
              tooltip: (0, v.we)("#Cart_LineItemOptions_PrivateTooltip"),
            },
          ].filter(Boolean);
          ke ||
            (w.gift_info?.accountid_giftee && Ee?.m_strPlayerName
              ? Ne.push({
                  data: "gift",
                  label: (0, v.we)(
                    "#Cart_LineItemOptions_GiftForPersona",
                    Ee.m_strPlayerName,
                  ),
                })
              : Ne.push({
                  data: "gift",
                  label: (0, v.we)("#Cart_LineItemOptions_Gift"),
                }));
          let he = w.flags?.is_gift ? "gift" : "myself";
          if ((he === "myself" && ee && (he = "private"), Ne.length === 1))
            return null;
          const Je = (je) => {
            if (he === je.data) return;
            const be = (ze) =>
                pe.mutate({
                  rgAppIDs: ne.GetIncludedAppIDsOrSelf(),
                  bPrivate: ze,
                }),
              we = (ze) =>
                ie.mutate({
                  lineItemID: w.line_item_id,
                  lineItemFlags: { ...w.flags, is_gift: ze },
                  giftInfo: ze ? w.gift_info : void 0,
                });
            he === "private" ? be(!1) : he === "gift" && we(!1),
              je.data === "private" ? be(!0) : je.data === "gift" && we(!0);
          };
          return (0, e.jsx)(Qe, {
            onChange: Je,
            selectedOption: he,
            rgOptions: Ne,
          });
        }
        function Qe(K) {
          return (0, e.jsx)(m.m, {
            strClassName: g().LineItemDropDown,
            strDropDownItemClassName: g().DropDownOptionItem,
            strDropDownClassName: g().DropDownOptionsCtnThin,
            strDropDownButtonClassName: g().DropDownThin,
            ...K,
          });
        }
        const qe = s.memo(function (w) {
          const { validatedItem: ne } = w,
            ee = ne.included_packageids,
            oe = (0, B.eG)(),
            ie = (0, k.E)({
              queries: ee.map((ge) => (0, y.mt)(oe, { packageid: ge })),
            }),
            pe = [
              ...new Set(
                ie
                  .map((ge) => ge.data)
                  .filter(Boolean)
                  .flat(),
              ),
            ];
          return !pe.length || (pe.length == 1 && !ne.item_id.bundleid)
            ? null
            : (0, e.jsxs)(o.UW, {
                text: !0,
                children: [
                  (0, e.jsxs)("span", {
                    children: [
                      (0, v.Yp)("#Cart_IncludesItems", pe.length),
                      ":",
                      " ",
                    ],
                  }),
                  pe.map((ge, Ee) =>
                    (0, e.jsxs)(
                      s.Fragment,
                      {
                        children: [
                          Ee > 0 && ", ",
                          (0, e.jsx)(rt, { appid: ge }),
                        ],
                      },
                      Ee,
                    ),
                  ),
                ],
              });
        });
        function Be(K) {
          const { appids: w } = K,
            ne = w.map((ee, oe) =>
              (0, e.jsxs)(
                s.Fragment,
                { children: [oe > 0 && ", ", (0, e.jsx)(rt, { appid: ee })] },
                ee,
              ),
            );
          return (0, e.jsxs)(o.UW, {
            children: [
              (0, e.jsxs)("span", {
                children: [(0, v.we)("#Cart_Notice_SomeAppsPrivate"), "\xA0"],
              }),
              ne,
            ],
          });
        }
        function Ze(K) {
          return K.user_can_purchase_as_gift;
        }
        function at(K) {
          return !K.is_commercial_license && !K.requires_shipping;
        }
        const Ye = {
          direction: "right",
          style: { width: "320px", height: `${320 * (125 / 184)}px` },
        };
        function rt(K) {
          const { name_override: w, ...ne } = K,
            { data: ee } = (0, y.J$)(w ? void 0 : ne),
            oe = w ?? ee?.name;
          return (0, e.jsx)(mt, { ...ne, name: oe, children: oe });
        }
        function mt(K) {
          const { name: w, children: ne, ...ee } = K;
          return (0, e.jsx)(h.Q, {
            id: ee,
            hoverProps: Ye,
            name: w,
            className: g().LineItemStoreHover,
            bShowWishlistButton: !1,
            children: ne,
          });
        }
      },
      94451: (V, X, t) => {
        "use strict";
        t.d(X, {
          LP: () => Z,
          WA: () => l,
          Yz: () => s,
          ZZ: () => y,
          wW: () => B,
        });
        var e = t(7850),
          A = t(58162),
          M = t(2165),
          f = t(8173),
          R = t(40358),
          E = t(68094),
          I = t(88383),
          g = t(90626),
          o = t(84676),
          G = t(96016),
          D = t(18210),
          C = t(11543),
          b = t.n(C),
          S = t(36707);
        const h = g.createContext(null);
        function B(x) {
          const { validateCart: v, children: L, eDisplayType: P } = x,
            H = Y(v, P);
          return (0, e.jsx)(h.Provider, { value: H, children: L });
        }
        function y() {
          const { rgCartLevelNotices: x } = g.useContext(h);
          return !x || !x.length
            ? null
            : x.length == 1
              ? (0, e.jsx)("div", {
                  className: b().HeaderNotices,
                  children: (0, D.we)("#Cart_CartLevelErrorFormat", x[0]),
                })
              : (0, e.jsxs)("div", {
                  className: b().HeaderNotices,
                  children: [
                    (0, e.jsx)("div", {
                      children: (0, D.we)("#Cart_CartLevelErrorMultiple"),
                    }),
                    (0, e.jsx)("ul", {
                      children: x.map((v, L) =>
                        (0, e.jsx)("li", { children: v }, L),
                      ),
                    }),
                  ],
                });
        }
        function Z(x) {
          const { validateCart: v } = x,
            { mapValidateNoticesToFootnote: L } = g.useContext(h);
          if (!L || !L.size) return null;
          const H = (v?.cart_items || []).every(($) => !$.errors),
            z = H
              ? (0, D.we)("#Cart_FooterNoticeHeader_Warning")
              : (0, D.we)("#Cart_FooterNoticeHeader_MustFix"),
            W = (0, S.A)(b().FooterNoticesHeader, !H && b().MustFix);
          return (0, e.jsxs)("div", {
            className: b().FooterNoticesCtn,
            children: [
              (0, e.jsx)("div", { className: W, children: z }),
              Array.from(L).map(([$, J]) =>
                (0, e.jsx)(k, { notice: J }, J.index),
              ),
            ],
          });
        }
        function k(x) {
          const { notice: v } = x;
          return (0, e.jsxs)("div", {
            className: b().FooterNotice,
            children: [
              (0, e.jsx)("div", {
                className: b().NoticeIndex,
                children: (0, e.jsx)("sup", { children: v.index }),
              }),
              (0, e.jsx)("div", {
                className: b().NoticeText,
                children: v.footnote_text,
              }),
            ],
          });
        }
        function te(x) {
          return g.useContext(h)?.mapValidateNoticesToFootnote.get(x)?.index;
        }
        var l = ((x) => (
          (x[(x.k_ECartDisplayType_Unknown = 0)] =
            "k_ECartDisplayType_Unknown"),
          (x[(x.k_ECartDisplayType_Modal = 1)] = "k_ECartDisplayType_Modal"),
          (x[(x.k_ECartDisplayType_FullPage = 2)] =
            "k_ECartDisplayType_FullPage"),
          x
        ))(l || {});
        function p() {
          return g.useContext(h)?.eDisplayType ?? 0;
        }
        function s(x) {
          const { lineItem: v } = x,
            L = p();
          let P = [],
            H = !!v.gift_info?.accountid_giftee;
          return (
            v.errors?.duplicate_appids_in_cart?.length &&
              P.push(
                (0, e.jsx)(
                  d,
                  {
                    purchase_state: f.WN.ZK,
                    notice_text: (0, D.we)(
                      "#Cart_Error_DuplicateApps_LineItem",
                    ),
                    appids: v.errors.duplicate_appids_in_cart,
                  },
                  "duplicate_appids",
                ),
              ),
            P.push((0, e.jsx)(m, { lineItem: v }, "owned_apps")),
            v.errors?.unavailable_in_country &&
              P.push(
                (0, e.jsx)(
                  d,
                  {
                    purchase_state: f.WN.Hp,
                    notice_text: (0, D.we)(
                      "#Cart_Error_UnavailableCountry_LineItem",
                    ),
                  },
                  "unavailable_in_country",
                ),
              ),
            v.errors?.adult_content_restricted &&
              P.push(
                (0, e.jsx)(
                  d,
                  {
                    purchase_state: f.WN.C4,
                    notice_text: (0, D.we)(
                      "#Cart_Error_AdultContentRestricted_LineItem",
                    ),
                  },
                  "adult_content_restricted",
                ),
              ),
            v.errors?.commercial_license_restricted &&
              P.push(
                (0, e.jsx)(
                  d,
                  {
                    purchase_state: f.WN.yQ,
                    notice_text: (0, D.we)(
                      "#Cart_Error_CommercialLicenseRestricted_LineItem",
                    ),
                  },
                  "commercial_license_restricted",
                ),
              ),
            v.errors?.gift_not_valid_for_recipient_region &&
              P.push(
                (0, e.jsx)(
                  d,
                  {
                    purchase_state: f.WN._o,
                    notice_text: (0, D.we)("#Cart_Error_GiftRecipientInvalid"),
                  },
                  "gift_recipient_invalid",
                ),
              ),
            P.push((0, e.jsx)(U, { lineItem: v }, "coupon_notices")),
            v.errors?.too_many_in_cart &&
              P.push(
                (0, e.jsx)(
                  d,
                  {
                    purchase_state: f.WN.YF,
                    notice_text: (0, D.we)("#Cart_Error_TooManyInCart"),
                  },
                  "too_many_in_cart",
                ),
              ),
            v.errors?.missing_must_own_appids?.length &&
              P.push(
                (0, e.jsx)(
                  d,
                  {
                    purchase_state: f.WN.VL,
                    notice_text: H
                      ? (0, D.we)("#Cart_Error_MissingMustOwnApps_GiftLineItem")
                      : (0, D.we)("#Cart_Error_MissingMustOwnApps_LineItem"),
                    appids: v.errors.missing_must_own_appids,
                  },
                  "missing_must_own_appids",
                ),
              ),
            v.warnings?.appids_in_mastersub?.length &&
              P.push(
                (0, e.jsx)(
                  d,
                  {
                    purchase_state: f.WN.Q7,
                    notice_text: (0, D.we)(
                      "#Cart_Error_MasterSubscription_LineItem",
                    ),
                    appids: v.warnings.appids_in_mastersub.map(
                      (z) => z.cart_appid,
                    ),
                  },
                  "appids_in_mastersub",
                ),
              ),
            v.warnings?.owned_appids?.length &&
              P.push(
                (0, e.jsx)(
                  d,
                  {
                    purchase_state: f.WN.fZ,
                    notice_text: (0, D.we)(
                      "#Cart_Warning_AlreadyOwned_LineItem",
                    ),
                    appids: v.warnings.owned_appids,
                  },
                  "owned_appids",
                ),
              ),
            v.warnings?.owned_appids_extra_copy?.length &&
              P.push(
                (0, e.jsx)(
                  d,
                  {
                    purchase_state: f.WN.Vx,
                    notice_text: (0, D.we)(
                      "#Cart_Warning_ExtraCopies_LineItem",
                    ),
                    appids: v.warnings.owned_appids_extra_copy,
                  },
                  "owned_appids_extra_copy",
                ),
              ),
            v.warnings?.price_has_changed &&
              P.push(
                (0, e.jsx)(
                  d,
                  {
                    purchase_state: f.WN.vY,
                    notice_text: (0, D.we)(
                      "#Cart_Warning_PriceChange_LineItem",
                    ),
                  },
                  "price_has_changed",
                ),
              ),
            v.warnings?.non_refundable &&
              P.push(
                (0, e.jsx)(
                  d,
                  {
                    purchase_state: f.WN.YQ,
                    notice_text: (0, D.we)("#Cart_Warning_NoRefund_LineItem"),
                  },
                  "non_refundable",
                ),
              ),
            v.warnings?.gift_recipient_higher_price &&
              P.push(
                (0, e.jsx)(
                  d,
                  {
                    purchase_state: f.WN.j6,
                    notice_text: (0, D.we)(
                      "#Cart_Warning_RecipientHigherPrice",
                    ),
                  },
                  "non_refundable",
                ),
              ),
            P.push((0, e.jsx)(N, { lineItem: v }, "available_cheaper")),
            H &&
              L === 1 &&
              P.push(
                (0, e.jsx)(
                  M.h,
                  { nGifteeAccountID: v.gift_info.accountid_giftee },
                  "non_friend_gift",
                ),
              ),
            P
          );
        }
        function d(x) {
          const { purchase_state: v, notice_text: L, appids: P } = x,
            H = te(v);
          return (0, e.jsxs)(A.dp, {
            children: [
              L,
              H && (0, e.jsx)("sup", { children: H }),
              " ",
              (0, e.jsx)(_, { rgAppIDs: P }),
            ],
          });
        }
        function _(x) {
          const { rgAppIDs: v } = x;
          return !v || v.length == 0
            ? null
            : v.map((L, P) =>
                (0, e.jsx)(
                  c,
                  { appid: L, last: P >= v.length - 1 },
                  `${L}_${P}`,
                ),
              );
        }
        function c(x) {
          const { appid: v, last: L } = x,
            [P] = (0, o.t7)(v, { include_basic_info: !0 });
          return P
            ? (0, e.jsxs)(I.Zx, {
                appid: v,
                children: [
                  (0, e.jsx)(G.p, {
                    item: P,
                    noImpressionTracking: !0,
                    children: P.GetName(),
                  }),
                  !L && (0, e.jsx)(e.Fragment, { children: ", " }),
                ],
              })
            : null;
        }
        function m(x) {
          const { lineItem: v } = x;
          if (!v.errors?.owned_appids?.length) return null;
          let L = !!v.gift_info?.accountid_giftee;
          if (v.errors?.has_existing_billing_agreement)
            return (0, e.jsx)(d, {
              purchase_state: f.WN.Gy,
              notice_text: (0, D.we)("#Cart_Error_ExistingBillingAgreement"),
            });
          {
            const P = (v.store_item?.included_appids.length ?? 0) > 1;
            let H = (0, D.we)(
              L
                ? "#Cart_Error_AlreadyOwned_GiftLineItem_Game"
                : "#Cart_Error_AlreadyOwned_LineItem_Game",
            );
            return (
              P &&
                (H = (0, D.we)(
                  L
                    ? "#Cart_Error_AlreadyOwned_GiftLineItem"
                    : "#Cart_Error_AlreadyOwned_LineItem",
                )),
              (0, e.jsx)(d, {
                purchase_state: f.WN.kj,
                notice_text: H,
                appids: P ? v.errors.owned_appids : null,
              })
            );
          }
        }
        function U(x) {
          const { lineItem: v } = x;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              v.errors?.coupon_exclusive_promo &&
                (0, e.jsx)(d, {
                  purchase_state: f.WN.rp,
                  notice_text: (0, D.we)("#Cart_Error_CouponIsExclusivePromo"),
                }),
              v.errors?.invalid_coupon &&
                (0, e.jsx)(d, {
                  purchase_state: f.WN.p_,
                  notice_text: (0, D.we)("#Cart_Error_CouponIsInvalid"),
                }),
              v.errors?.invalid_coupon_for_item &&
                (0, e.jsx)(d, {
                  purchase_state: f.WN.VJ,
                  notice_text: (0, D.we)("#Cart_Error_CouponIsInvalidForItem"),
                }),
            ],
          });
        }
        function N(x) {
          const { lineItem: v } = x,
            { data: L } = (0, R.mr)(v.item_id),
            { data: P } = (0, R.EO)(v.item_id);
          if (!!v.gift_info?.accountid_giftee || !L || !P || (0, E.vk)(L, P))
            return null;
          const { purchase_option_name: z, packageid: W, bundleid: $ } = P,
            J = W ? { packageid: W } : { bundleid: $ };
          return (0, e.jsx)(A.dp, {
            children: (0, D.PP)(
              "#Cart_Warning_AvailableAtALowerPrice",
              (0, e.jsx)(I.O3, { name_override: z, ...J }),
            ),
          });
        }
        function Y(x, v) {
          return g.useMemo(() => {
            let L = new Map(),
              P = new Map(),
              H = 1;
            const z = (J, se) => {
              P.has(J) || P.set(J, { index: H++, footnote_text: se });
            };
            let W = !1;
            x?.cart_items?.forEach((J) => {
              let se = !!J.gift_info?.accountid_giftee;
              J.errors && (W = !0),
                J.errors?.duplicate_appids_in_cart?.length &&
                  z(f.WN.ZK, (0, D.we)("#Cart_Error_DuplicateApps_FootNote")),
                J.errors?.owned_appids?.length &&
                  (J.errors?.has_existing_billing_agreement
                    ? z(
                        f.WN.Gy,
                        (0, D.we)(
                          "#Cart_Error_ExistingBillingAgreement_FootNote",
                        ),
                      )
                    : z(
                        f.WN.kj,
                        (0, D.we)(
                          se
                            ? "#Cart_Error_AlreadyOwned_GiftFootNote"
                            : "#Cart_Error_AlreadyOwned_FootNote",
                        ),
                      )),
                J.errors?.unavailable_in_country &&
                  z(
                    f.WN.Hp,
                    (0, D.we)("#Cart_Error_UnavailableCountry_FootNote"),
                  ),
                J.errors?.adult_content_restricted &&
                  z(
                    f.WN.C4,
                    (0, D.we)("#Cart_Error_AdultContentRestricted_FootNote"),
                  ),
                J.errors?.commercial_license_restricted &&
                  z(
                    f.WN.yQ,
                    (0, D.we)(
                      "#Cart_Error_CommercialLicenseRestricted_FootNote",
                    ),
                  ),
                J.errors?.missing_must_own_appids &&
                  z(
                    f.WN.VL,
                    se
                      ? (0, D.we)("#Cart_Error_MissingMustOwnApps_FootNoteGift")
                      : (0, D.we)("#Cart_Error_MissingMustOwnApps_FootNote"),
                  ),
                J.warnings?.appids_in_mastersub?.length &&
                  z(
                    f.WN.Q7,
                    (0, D.we)("#Cart_Error_MasterSubscription_FootNote"),
                  ),
                J.warnings?.price_has_changed &&
                  L.set(
                    f.WN.vY,
                    (0, D.we)("#Cart_Warning_PriceChange_FootNote"),
                  );
            });
            let $ = Array.from(L.values());
            return (
              W && $.unshift((0, D.we)("#Cart_CartLevelErrorNotice")),
              {
                rgCartLevelNotices: $,
                mapValidateNoticesToFootnote: P,
                eDisplayType: v,
              }
            );
          }, [x, v]);
        }
      },
      60424: (V, X, t) => {
        "use strict";
        t.r(X),
          t.d(X, {
            BaseCartPage: () => It,
            default: () => us,
            useInitCartLocalization: () => Qt,
          });
        var e = t(7850),
          A = t(63088),
          M = t(19298),
          f = t(56062),
          R = t(56925),
          E = t(64238),
          I = t.n(E),
          g = t(23366),
          o = t(90626),
          G = t(92757),
          D = t(4874),
          C = t(67529),
          b = t(10142),
          S = t(84676),
          h = t(16412),
          B = t(25792),
          y = t(86390),
          Z = t(51079),
          k = t(85599),
          te = t(97996),
          l = t(18210),
          p = t(98609),
          s = t(36707),
          d = t(34633);
        function _(a) {
          return (0, e.jsx)("div", {
            className: (0, s.A)(d.CartCard, a.className),
            children: a.children,
          });
        }
        var c = t(32093),
          m = t(98972);
        function U(a) {
          const { cart: n } = a,
            r = N(n);
          if (
            !n ||
            !p.iA.logged_in ||
            !r ||
            (0, c.nA)(p.TS.EREALM) ||
            !r.strSaleName
          )
            return null;
          const {
              cEarned: i,
              pctProgress: u,
              rgPrepurchaseApps: j,
              strFormattedSpendPerDrop: T,
              strSaleName: O,
            } = r,
            F = i > 0,
            Q = (0, e.jsx)("div", {
              className: m.Explanation,
              children: (0, l.we)("#Cart_SaleCardDrops_Explanation", O),
            });
          return (0, e.jsxs)(_, {
            className: m.TradingCardContainer,
            children: [
              F &&
                (0, e.jsx)("div", {
                  className: m.EarnedMessage,
                  children: (0, l.Yp)(
                    "#Cart_SaleCardDrops_EarnedMessage",
                    i,
                    O,
                  ),
                }),
              !F && Q,
              (0, e.jsxs)("div", {
                className: m.ProgressSection,
                children: [
                  (0, e.jsx)("div", {
                    children: (0, l.we)("#Cart_SaleCardDrops_ProgressLabel"),
                  }),
                  (0, e.jsx)(Y, { value: u }),
                  (0, e.jsxs)("div", {
                    className: m.Right,
                    children: [
                      "(",
                      (0, l.we)("#Cart_SaleCardDrops_CardCost", T),
                      ")",
                    ],
                  }),
                ],
              }),
              F && Q,
              j.length > 0 &&
                (0, e.jsxs)("div", {
                  className: m.IneligbleList,
                  children: [
                    (0, e.jsx)("p", {
                      children: (0, l.we)(
                        "#Cart_SaleCardDrops_PrepurchaseIneligible",
                        O,
                      ),
                    }),
                    (0, e.jsx)("ul", {
                      children: j.map((ae) =>
                        (0, e.jsx)("li", { children: ae }, ae),
                      ),
                    }),
                  ],
                }),
            ],
          });
        }
        function N(a) {
          const n = (0, g.zJ)();
          if (!a || !n.isSuccess || !n.data?.sale_name) return null;
          const r = new Set();
          let i = 0;
          for (const ce of a.cart_items)
            ce.subtotal && (i += parseInt(ce.subtotal.amount_in_cents));
          const {
              sale_name: u,
              spend_earned_for_next_drop: j,
              spend_needed_for_next_drop: T,
              formatted_spend_per_drop: O,
            } = n.data,
            F = i + j,
            Q = Math.floor(F / T),
            ae = Math.floor((100 * (F % T)) / T);
          return {
            cEarned: Q,
            pctProgress: ae,
            strFormattedSpendPerDrop: O,
            rgPrepurchaseApps: Array.from(r),
            strSaleName: u,
          };
        }
        function Y(a) {
          const { value: n } = a,
            r = Math.min(100, Math.max(0, n));
          return (0, e.jsx)("div", {
            className: m.ProgressRail,
            children: (0, e.jsx)("div", {
              className: m.Progress,
              style: { width: `${r}%` },
            }),
          });
        }
        var x = t(20169),
          v = t(10349),
          L = t(2668),
          P = t(96117),
          H = t(15437);
        function z(a, n = !0) {
          return (0, H.FY)(
            {
              bIncludeDailyDeals: !0,
              nIncludeTopNSpecials: 8,
              spotlightLocation: { location: "cart" },
              rgAdditionalRecommendationIDs: a,
            },
            { include_assets: !0, include_release: !0 },
            n,
          );
        }
        var W = t(50169),
          $ = t(45803),
          J = t.n($),
          se = t(40358),
          _e = t(60655),
          ue = t(30096);
        function me() {
          const a = (0, ue.CH)();
          return (
            o.useEffect(
              () => (
                window.addEventListener("resize", a),
                () => window.removeEventListener("resize", a)
              ),
              [a],
            ),
            window.innerWidth < parseInt(d.strMaxCartPartResponsiveWidth)
          );
        }
        var De = t(7638);
        function Ce(a) {
          const { bMinimalDisplay: n } = a,
            r = me();
          return (r && n) || (!r && !n) ? null : (0, e.jsx)(Ae, { ...a });
        }
        function Ae(a) {
          const { cart: n, bMinimalDisplay: r } = a,
            i = Le(n),
            u = (0, De.kY)(),
            j = (0, o.useMemo)(() => {
              const T = new Set(
                [
                  ...(i?.developers || []),
                  ...(i?.publishers || []),
                  ...(i?.franchises || []),
                ]
                  .filter((O) => !!O && !!O.creator_clan_account_id)
                  .map((O) => O.creator_clan_account_id),
              );
              return Array.from(T);
            }, [i]);
          return j.length == 0 || !u
            ? null
            : (0, e.jsxs)("div", {
                className: J().CartCreatorCtn,
                children: [
                  (0, e.jsx)("div", {
                    className: J().Title,
                    children: (0, l.we)("#Cart_FollowCreator_title"),
                  }),
                  (0, e.jsx)("div", {
                    className: J().Description,
                    children: (0, l.we)("#Cart_FollowCreator_desc"),
                  }),
                  (0, e.jsx)("br", {}),
                  j.map((T) =>
                    (0, e.jsx)(
                      _e.hA,
                      {
                        creatorID: {
                          name: "",
                          clan_account_id: T,
                          type: "developer",
                        },
                        bHideCreatorType: !0,
                        bSmallFormat: !0,
                        bMinimalDisplay: r,
                      },
                      "creat" + T,
                    ),
                  ),
                ],
              });
        }
        function Le(a) {
          const [n, r] = (0, o.useState)(null),
            i = (0, o.useMemo)(
              () =>
                a?.line_items?.length == 1 && a.line_items[0].packageid
                  ? { packageid: a.line_items[0].packageid }
                  : void 0,
              [a],
            ),
            { data: u } = (0, se.U2)(i);
          (0, o.useEffect)(() => {
            const O = u?.type;
            O == f.uE.HT
              ? r(u.id)
              : (O == f.uE._i || O == f.uE.Ov) &&
                r(u.related_items?.parent_appid);
          }, [u?.id, u?.related_items?.parent_appid, u?.type]);
          const j = (0, o.useMemo)(() => (n ? { appid: n } : void 0), [n]),
            { data: T } = (0, se.wl)(j);
          return T;
        }
        function ye(a, n = []) {
          return n.filter(({ item_id: r, item: i }) =>
            r
              ? a[r.appid]
                ? !1
                : i?.appid
                  ? !a[i?.appid]
                  : i?.included_appids
                    ? i.included_appids.every((u) => !a[u])
                    : !0
              : !0,
          );
        }
        function xe(a) {
          const { cart: n, validatedCart: r } = a,
            [i, u] = o.useState(void 0),
            j = (r?.cart_items || []).reduce(
              (q, fe) => q.concat(fe.store_item.included_appids),
              [],
            );
          o.useEffect(() => {
            i === void 0 &&
              n &&
              u(
                n?.line_items.map((q) =>
                  q.packageid
                    ? { packageid: q.packageid }
                    : { bundleid: q.bundleid },
                ),
              );
          }, [i, n]);
          const T = z(i, i !== void 0);
          if (T.isError) return null;
          const O = j.reduce((q, fe) => ((q[fe] = !0), q), {}),
            F = ye(O, T.data?.purchase_recommendations),
            Q = ye(O, T.data?.specials),
            ae = ye(O, T.data?.daily_deals),
            ce = ye(O, T.data?.spotlights);
          return (0, e.jsxs)("div", {
            className: W.CartUpsellArea,
            children: [
              (0, e.jsx)("div", {
                className: W.CartUpsellTitle,
                children: (0, l.we)("#Recommendations_Header"),
              }),
              F?.length > 3
                ? (0, e.jsx)(Ue, {
                    type: "recommended",
                    data: F,
                    isLoaded: !T.isLoading,
                  })
                : (0, e.jsx)(Ue, {
                    type: "specials",
                    data: Q,
                    isLoaded: !T.isLoading,
                  }),
              (0, e.jsx)(Ce, { cart: n, bMinimalDisplay: !1 }),
            ],
          });
        }
        function Ue(a) {
          const { data: n, isLoaded: r, type: i } = a;
          return !n && r
            ? null
            : (0, e.jsx)(Z.Ay, {
                feature: `upsell-${i}`,
                children: (0, e.jsx)(Re, {
                  className: (0, s.A)(W.Specials),
                  children: n
                    ?.slice(0, 3)
                    .map(({ item_id: u, item: j }) =>
                      (0, e.jsx)(Ke, { item_id: u, item: j }, (0, v.wD)(u)),
                    ),
                }),
              });
        }
        function Ke(a) {
          const { item: n } = a;
          return (0, e.jsx)(P.W, {
            capsule: { id: n.id, type: (0, v._4)(n.item_type, n.type) },
            imageType: "header",
            onlyOneDiscountPct: !0,
            bPreferAssetWithoutOverride: !1,
          });
        }
        function Te(a) {
          const { data: n, isLoaded: r } = a;
          return !n && r
            ? null
            : jsx(Re, {
                className: classnames(styles.DailyDeals, !r && styles.Loading),
                children: n
                  ?.slice(0, 2)
                  .map((i) =>
                    jsx(
                      FeaturedItemDailyDeal,
                      { dailyDeal: i },
                      StoreItemIDToString(i.item_id),
                    ),
                  ),
              });
        }
        function He(a) {
          const { data: n, isLoaded: r } = a,
            i = React.useMemo(
              () =>
                n
                  ?.filter((u) => u.spotlight_template != "weeklong_deals")
                  .slice(0, 2),
              [n],
            );
          return !i && r
            ? null
            : jsx(Re, {
                className: classnames(styles.Spotlights, !r && styles.Loading),
                children: i.map((u) =>
                  jsx(
                    FeaturedItemSpotlight,
                    { spotlight: u },
                    u.item_id
                      ? StoreItemIDToString(u.item_id)
                      : u.spotlight_title,
                  ),
                ),
              });
        }
        function Re(a) {
          const { className: n, children: r } = a;
          return (0, e.jsx)(M.Z, {
            "flow-children": "row",
            navEntryPreferPosition: x.iU.MAINTAIN_X,
            className: (0, s.A)(W.UpsellRow, n),
            children: r,
          });
        }
        var Ve = t(79611),
          Ge = t(68031),
          $e = t(60351),
          Qe = t(15252),
          qe = t(86336),
          Be = t(79485),
          Ze = t(9843),
          at = t(38580),
          Ye = t(2289),
          rt = t(86519),
          mt = t(42993),
          K = t(20117),
          w = t(34846),
          ne = t(92298),
          ee = t.n(ne),
          oe = t(44894),
          ie = t(7582),
          pe = t(95695),
          ge = t.n(pe),
          Ee = t(71421),
          ke = t(12916),
          Pe = t.n(ke),
          Ne = t(87937),
          he = t.n(Ne);
        const Je = "hh:mm a",
          je = "HH:mm";
        function be(a) {
          const {
            nLatestTime: n,
            nEarliestTime: r,
            fnGetTimeToUpdate: i,
            onError: u,
            strAlsoShowTimeZone: j,
            disabled: T,
            bNoDefaultDate: O,
            className: F,
            strDescToolTip: Q,
            strDescription: ae,
            bShowTimeZone: ce,
            strInvalidDateTimeLocalizedMsg: q,
            fnIsValidDateTime: fe,
            bWeekdaysOnly: Me,
            fnSetTimeToUpdate: Ie,
            bForce24HourFormat: ve,
            bAllowClear: Oe,
          } = a;
          let Fe = vt() || ve ? je : Je;
          const Xe = i(),
            [Et, nt] = o.useState(Xe > 0 ? he()(Xe * 1e3) : null),
            [ut, Es] = o.useState(0),
            [xt, At] = o.useState(),
            [jt, St] = o.useState(),
            xs = $t(xt, jt, q, fe, u),
            Zt = !u && xs;
          let yt;
          if (n && r && n == r && r > ie.HD.GetTimeNowWithOverride()) {
            const de = he().unix(r);
            (yt = {
              hours: { max: de.hour(), min: de.hour(), step: 0 },
              minutes: { max: de.minute(), min: de.minute(), step: 0 },
              seconds: { max: de.seconds(), min: de.seconds(), step: 0 },
              milliseconds: { max: 0, min: 0, step: 0 },
            }),
              (Fe = je);
          }
          let Yt;
          !Xe && r && !O && (Yt = he().unix(r));
          const Jt = he().tz.guess(),
            As = he().unix(Xe).tz(Jt),
            st = !!j && Jt != j && he().unix(Xe).tz(j),
            js = (de) => {
              if (T) return;
              St(null);
              const ht = i(),
                et = he().unix(ht || ie.HD.GetTimeNowWithOverride());
              (de = de.clone()),
                de.hour(et.hour()),
                de.minute(et.minute()),
                de.second(0),
                Ie(de.unix()),
                nt(de);
            },
            {
              fnOnInput: Ss,
              fnOnInputBlur: ys,
              fnOnChange: Ts,
            } = we(_t, js, St),
            Ms = (de) => {
              if (T) return;
              At(null);
              let ht = i(),
                et = 0;
              if (!ht)
                et =
                  he().unix(r).hour(0).second(0).minutes(0).unix() +
                  3600 * de.hour() +
                  60 * de.minutes();
              else {
                const gt = he().unix(ht);
                (de = de.clone()),
                  de.year(gt.year()),
                  de.month(gt.month()),
                  de.date(gt.date()),
                  (et = de.unix());
              }
              Ie(et), nt(he().unix(et));
            },
            {
              fnOnInput: Os,
              fnOnInputBlur: Ls,
              fnOnChange: Rs,
            } = we(Tt, Ms, At),
            Bs = () => {
              T || (Ie(0), nt(null), St(null), At(null), Es((de) => de + 1));
            },
            Ns = Oe && !T && Xe > 0;
          return (0, e.jsxs)("div", {
            className: (0, s.A)(Pe().EventTimeSection, F),
            children: [
              (0, e.jsxs)("div", {
                className: (0, s.A)(Pe().EventTimeTitle, "DialogLabel"),
                children: [
                  (0, e.jsx)(Ee.he, {
                    toolTipContent: Q,
                    direction: "top",
                    children: !!ae && (0, e.jsx)("span", { children: ae }),
                  }),
                  Zt &&
                    (0, e.jsxs)("span", {
                      className: Pe().DateErrorCtn,
                      children: [(0, e.jsx)("img", { src: oe.A }), Zt],
                    }),
                ],
              }),
              (0, e.jsxs)("div", {
                className: ge().FlexRowContainer,
                children: [
                  (0, e.jsxs)("div", {
                    className: (0, s.A)(ge().InputBorder, Pe().TimeBlock),
                    children: [
                      (0, e.jsx)(
                        ee(),
                        {
                          onChange: Ts,
                          timeFormat: !1,
                          value: jt ?? Et,
                          isValidDate: (de) => !T && Xt(r, n, Me, de),
                          initialValue: Yt,
                          inputProps: {
                            placeholder: (0, l.we)(
                              "#DateTimePicker_Enter_Date",
                            ),
                            className: (0, s.A)(
                              Pe().DateWidth,
                              "DialogInput",
                              "DialogTextInputBase",
                            ),
                            disabled: T,
                            onChange: (de) => Ss(de.currentTarget.value),
                            onBlur: (de) => ys(de.currentTarget.value),
                          },
                        },
                        "date" + ut,
                      ),
                      !!st &&
                        (0, e.jsx)("div", {
                          className: Pe().PacificTimeHint,
                          children: st.format("L"),
                        }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: (0, s.A)(ge().InputBorder, Pe().TimeBlock),
                    children: [
                      (0, e.jsx)(
                        ee(),
                        {
                          onChange: Rs,
                          dateFormat: !1,
                          timeFormat: Fe,
                          timeConstraints: yt,
                          value: xt ?? Et,
                          inputProps: {
                            placeholder: (0, l.we)(
                              "#DateTimePicker_Enter_Time",
                            ),
                            className: (0, s.A)(
                              Pe().TimeWidth,
                              "DialogInput",
                              "DialogTextInputBase",
                            ),
                            disabled: T,
                            onChange: (de) => Os(de.currentTarget.value),
                            onBlur: (de) => Ls(de.currentTarget.value),
                          },
                        },
                        "time" + ut,
                      ),
                      !!st &&
                        (0, e.jsx)("div", {
                          className: Pe().PacificTimeHint,
                          children: st.format("LT"),
                        }),
                    ],
                  }),
                  ce &&
                    (0, e.jsxs)("div", {
                      children: [
                        (0, e.jsx)("div", {
                          className: Pe().TimeZone,
                          children: As.zoneAbbr(),
                        }),
                        !!st &&
                          (0, e.jsx)("div", {
                            className: Pe().TimeZone,
                            children: st.zoneAbbr(),
                          }),
                      ],
                    }),
                  Ns &&
                    (0, e.jsx)("button", {
                      type: "button",
                      className: Pe().ClearButton,
                      onClick: Bs,
                      children: (0, l.we)("#Button_Clear"),
                    }),
                ],
              }),
              !!yt &&
                (0, e.jsx)("div", {
                  children: (0, l.we)("#DateTimePicker_DateTime_Fixed"),
                }),
            ],
          });
        }
        function we(a, n, r) {
          const [i, u] = o.useState(!1);
          return {
            fnOnInput: (F) => {
              r(F), u(!0);
            },
            fnOnInputBlur: (F) => {
              if (i) {
                const Q = a(F);
                Q.isValid() && n(Q);
              }
              u(!1);
            },
            fnOnChange: (F) => {
              if (!i)
                if (typeof F == "string") {
                  const Q = a(F);
                  Q.isValid() && n(Q);
                } else n(F);
            },
          };
        }
        function ze() {
          const n = he()("2025-01-14").format("L").split(/[-/.]/),
            r = n.indexOf("14");
          return n.indexOf("01") < r;
        }
        function vt() {
          return he()("2025-01-14T13:00:00")
            .format("LT")
            .toLowerCase()
            .includes("13");
        }
        function _t(a) {
          return he()(a, ze() ? "M/D/YYYY" : "D/M/YYYY", !1);
        }
        function Tt(a) {
          return he()(a, [Je, je], !1);
        }
        function Xt(a, n, r, i) {
          const u = he().unix(a).hour(0).seconds(0).minute(0);
          let j = i.unix() >= u.unix();
          if (j && n && n >= a) {
            const T = he().unix(n).hour(23).minute(59).seconds(59);
            j = i.unix() <= T.unix();
          }
          return (
            j && r && (i.weekday() == 0 || i.weekday() == 6) && (j = !1), j
          );
        }
        function $t(a, n, r, i, u) {
          const j = i && i(),
            T = n && !_t(n).isValid(),
            O = a && !Tt(a).isValid(),
            F = O || T || typeof j == "string" || j === !1;
          let Q = null;
          return (
            F &&
              ((Q = (0, l.we)(
                r || "#DateTimePicker_Fallback_Invalid_DateTime",
              )),
              O
                ? (Q = (0, l.we)("#DateTimePicker_Time_CannotParse"))
                : T
                  ? (Q = (0, l.we)("#DateTimePicker_Date_CannotParse"))
                  : typeof j == "string" && (Q = j)),
            o.useEffect(() => {
              u && u(Q);
            }, [Q, u]),
            Q
          );
        }
        var qt = t(36174),
          it = t(3166),
          en = t(83934),
          re = t.n(en);
        const tn = o.memo(function (n) {
          const { scheduledTime: r, onScheduledTimeChange: i } = n,
            [u, j] = o.useState(null),
            T = r > 0,
            O = () => {
              i(0);
            },
            F = () => {
              r || i(Date.now() / 1e3);
            };
          return (0, e.jsxs)(ct, {
            children: [
              (0, e.jsx)(tt, {
                children: (0, l.we)("#Cart_GiftDelivery_Label"),
              }),
              (0, e.jsx)(wt, {
                children: (0, e.jsx)(h.Od, {
                  controlled: !0,
                  checked: !T,
                  onChange: (Q) => Q && O(),
                  label: (0, l.we)("#Cart_GiftDelivery_Now"),
                }),
              }),
              (0, e.jsxs)(wt, {
                children: [
                  (0, e.jsx)(h.Od, {
                    controlled: !0,
                    checked: T,
                    onChange: (Q) => Q && F(),
                    label: (0, l.we)("#Cart_GiftDelivery_ScheduleDelivery"),
                  }),
                  (0, e.jsx)("div", { style: { clear: "both" } }),
                  u &&
                    (0, e.jsx)("div", {
                      className: re().ScheduleError,
                      children: u,
                    }),
                  T &&
                    (0, e.jsx)(B.tH, {
                      children: (0, e.jsx)(nn, {
                        scheduledTime: r,
                        onScheduledTimeChange: i,
                        setScheduledError: j,
                      }),
                    }),
                ],
              }),
            ],
          });
        });
        function nn(a) {
          const {
            scheduledTime: n,
            onScheduledTimeChange: r,
            setScheduledError: i,
          } = a;
          if ((0, it.Qn)())
            return (0, e.jsx)(an, {
              scheduledTime: n,
              onScheduledTimeChange: r,
              setScheduledError: i,
            });
          {
            const j = () => Mt(n);
            return (0, e.jsx)(be, {
              bShowTimeZone: !0,
              className: re().GiftDatePicker,
              nEarliestTime: Date.now() / 1e3,
              fnGetTimeToUpdate: () => n,
              fnSetTimeToUpdate: r,
              fnIsValidDateTime: j,
              onError: i,
            });
          }
        }
        function Mt(a) {
          const n = Date.now() / 1e3 + qt.Kp.PerYear,
            r = new Date(null, null, null, 0, 0, 0, 0).getTime() / 1e3;
          return a > n
            ? (0, l.we)("#Cart_GiftScheduleError_TooFar")
            : a < r
              ? (0, l.we)("#Cart_GiftScheduleError_InvalidDate")
              : !0;
        }
        function sn(a, n) {
          let r = a.getHours(),
            i = a.getMinutes();
          return (
            n && (r > 12 ? (r -= 12) : r == 0 && (r = 12)),
            `${r}:${i < 10 ? "0" : ""}${i}`
          );
        }
        function an(a) {
          const {
              scheduledTime: n,
              onScheduledTimeChange: r,
              setScheduledError: i,
            } = a,
            u = o.useMemo(() => {
              const Oe = new Intl.DateTimeFormat(l.pf.GetPreferredLocales(), {
                hour: "numeric",
              });
              return (
                Oe.resolvedOptions().hour12 ||
                Oe.resolvedOptions().hourCycle == "h12"
              );
            }, []),
            j = new Date(n * 1e3),
            [T, O] = (0, o.useState)(j.getMonth()),
            [F, Q] = (0, o.useState)(j.getDate()),
            [ae, ce] = (0, o.useState)(j.getFullYear()),
            [q, fe] = (0, o.useState)(() => sn(j, u)),
            [Me, Ie] = (0, o.useState)(j.getHours() >= 12 ? "PM" : "AM");
          o.useEffect(() => {
            let Oe = q.match(/^\s*([012]?[0-9]):([0-9]{2})\s*/);
            if (!Oe) return;
            let Fe = parseInt(Oe[1]);
            const Xe = parseInt(Oe[2]);
            u &&
              (Me == "PM" && Fe < 12
                ? (Fe += 12)
                : Me == "AM" && Fe == 12 && (Fe = 0));
            const nt = new Date(ae, T, F, Fe, Xe, 0, 0).getTime() / 1e3,
              ut = Mt(nt);
            ut === !0 ? (i(null), r(nt)) : i(ut);
          }, [ae, T, F, q, Me, u, r, i]);
          const ve = it.TS.COUNTRY == "US" && it.TS.LANGUAGE == "english";
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsxs)(h.Xp, {
                className: re().GamepadTimePickerRow,
                children: [
                  ve && (0, e.jsx)(Ot, { month: T, setMonth: O }),
                  (0, e.jsx)(on, { year: ae, month: T, day: F, setDay: Q }),
                  !ve && (0, e.jsx)(Ot, { month: T, setMonth: O }),
                  (0, e.jsx)(rn, { year: ae, setYear: ce }),
                ],
              }),
              (0, e.jsxs)(h.Xp, {
                className: re().GamepadTimePickerRow,
                children: [
                  (0, e.jsx)(h.pd, {
                    value: q,
                    onChange: (Oe) => fe(Oe.currentTarget.value),
                  }),
                  u && (0, e.jsx)(ln, { strAMPM: Me, setAMPM: Ie }),
                  (0, e.jsx)(h.VP, {
                    className: re().TimezoneDisplay,
                    children: (0, e.jsx)(B.tH, {
                      children: (0, e.jsx)(cn, {}),
                    }),
                  }),
                  !u && (0, e.jsx)(h.VP, { children: "\xA0" }),
                ],
              }),
            ],
          });
        }
        function rn(a) {
          const { year: n, setYear: r } = a,
            i = o.useMemo(() => {
              const u = new Date(),
                j = new Intl.DateTimeFormat(l.pf.GetPreferredLocales(), {
                  year: "numeric",
                });
              return [u.getFullYear(), u.getFullYear() + 1].map((T) => ({
                label: j.format(new Date(T, 0, 1)),
                data: T,
              }));
            }, []);
          return (0, e.jsx)(h.m, {
            selectedOption: n,
            onChange: (u) => r(u.data),
            rgOptions: i,
          });
        }
        function Ot(a) {
          const { month: n, setMonth: r } = a,
            i = o.useMemo(() => {
              const u = new Intl.DateTimeFormat(l.pf.GetPreferredLocales(), {
                month: "short",
              });
              return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((j) => ({
                label: u.format(new Date(null, j)),
                data: j,
              }));
            }, []);
          return (0, e.jsx)(h.m, {
            selectedOption: n,
            onChange: (u) => r(u.data),
            rgOptions: i,
          });
        }
        function on(a) {
          const { year: n, month: r, day: i, setDay: u } = a,
            j = o.useMemo(() => {
              const T = new Date(n, r + 1, 0).getDate(),
                O = new Intl.DateTimeFormat(l.pf.GetPreferredLocales(), {
                  day: "numeric",
                });
              let F = [];
              for (let Q = 1; Q <= T; Q++)
                F.push({ label: O.format(new Date(null, null, Q)), data: Q });
              return F;
            }, [r, n]);
          return (0, e.jsx)(h.m, {
            selectedOption: i,
            onChange: (T) => u(T.data),
            rgOptions: j,
          });
        }
        function ln(a) {
          const { strAMPM: n, setAMPM: r } = a,
            i = o.useMemo(() => {
              const u = new Intl.DateTimeFormat(l.pf.GetPreferredLocales(), {
                  hour: "numeric",
                  hour12: !0,
                }),
                j =
                  u
                    .formatToParts(new Date(null, null, null, 5))
                    .find((O) => O.type == "dayPeriod")?.value || "AM",
                T =
                  u
                    .formatToParts(new Date(null, null, null, 17))
                    .find((O) => O.type == "dayPeriod")?.value || "PM";
              return [
                { label: j, data: "AM" },
                { label: T, data: "PM" },
              ];
            }, []);
          return (0, e.jsx)(h.m, {
            selectedOption: n,
            onChange: (u) => r(u.data),
            rgOptions: i,
          });
        }
        function cn() {
          const a = new Intl.DateTimeFormat(l.pf.GetPreferredLocales(), {
            timeZoneName: "short",
          })
            .formatToParts()
            .find((n) => n.type == "timeZoneName");
          return (0, e.jsx)(e.Fragment, { children: a ? a.value : "" });
        }
        var ot = t(46943),
          Ct = t(35098),
          lt = t(68388);
        function dn(a) {
          const { lineItem: n } = a,
            { data: r } = (0, Ze.UI)(),
            i = o.useMemo(() => {
              let O = [];
              for (const F of r?.line_items ?? [])
                F.line_item_id === n.line_item_id ||
                  !F.flags?.is_gift ||
                  !F.gift_info ||
                  O.push(F);
              return O;
            }, [r?.line_items, n.line_item_id]),
            { mutate: u } = (0, Be.C)(),
            j = (O) => {
              u({
                lineItemID: n.line_item_id,
                lineItemFlags: n.flags,
                giftInfo: { ...(O.gift_info ?? {}) },
              });
            },
            T = (0, lt.WM)({
              rgOptions: i,
              selectedValue: null,
              onSelectionChange: j,
            });
          return i.length < 1
            ? null
            : (0, e.jsx)($e.az, {
                flexGrow: "0",
                children: (0, e.jsxs)(lt.l6.Root, {
                  state: T,
                  children: [
                    (0, e.jsx)(lt.l6.Trigger, {
                      children: (0, e.jsx)(Qe.EY, {
                        children: (0, l.we)(
                          "#Cart_Gifting_CopyGiftOptionsFrom",
                        ),
                      }),
                    }),
                    (0, e.jsx)(lt.l6.Options, {
                      children: i.map((O, F) =>
                        (0, e.jsx)(
                          lt.l6.Option,
                          {
                            value: O,
                            children: (0, e.jsx)(un, { lineItem: O }),
                          },
                          F,
                        ),
                      ),
                    }),
                  ],
                }),
              });
        }
        function un(a) {
          const { lineItem: n } = a,
            r = n.bundleid ? f.c6.xO : f.c6.RD,
            [i] = (0, S.mZ)(n.bundleid ? n.bundleid : n.packageid, r, {
              include_basic_info: !0,
            }),
            u = (0, w.$)(n),
            j = u?.m_strPlayerName ?? n.gift_info?.email_giftee;
          if (!i || !j) return null;
          const T = u
            ? (0, e.jsx)(ot.i8, {
                size: "X-Small",
                statusPosition: "none",
                persona: u,
              })
            : (0, e.jsx)(e.Fragment, {});
          return (0, e.jsxs)(Ge.s, {
            minWidth: "0",
            align: "center",
            justify: "between",
            gap: "4",
            maxWidth: "600px",
            children: [
              (0, e.jsx)("div", { children: i.GetName() }),
              (0, e.jsxs)(Ge.s, {
                gap: "1",
                align: "center",
                children: [T, j],
              }),
            ],
          });
        }
        var mn = t(7967),
          _n = t(5827),
          fn = t(54806),
          pn = t(93125),
          hn = t(76559),
          Lt = t(96538);
        function gn(a) {
          const {
            storeItem: n,
            lineItem: r,
            bShowGiftRecipientModal: i,
            fnOnDismiss: u,
            highlightedAccountIDs: j,
          } = a;
          return (0, e.jsx)(Lt.mt, {
            className: re().GiftRecipientPickerModal,
            active: i,
            onDismiss: u,
            children: (0, e.jsx)(vn, {
              onDismiss: u,
              lineItem: r,
              storeItem: n,
              highlightedAccountIDs: j ?? [],
            }),
          });
        }
        const vn = o.memo(function (n) {
          const { storeItem: r, highlightedAccountIDs: i, ...u } = n,
            {
              rgFriendsForGifting: j,
              isLoading: T,
              isError: O,
            } = (0, w.g)(r, i),
            F = (0, Ct.DW)(i),
            Q = o.useMemo(() => {
              const ae = new Map(
                F.filter((q) => !!q.data).map((q) => [
                  q.data.GetAccountID(),
                  q.data,
                ]),
              );
              for (const q of j ?? []) ae.delete(q.accountid);
              let ce = [];
              for (const q of ae.values())
                ce.push({
                  accountid: q.GetAccountID(),
                  persona: q,
                  ownership: { already_owns: !1, wishes_for: !1 },
                });
              return j && ce.push(...j), ce;
            }, [j, F]);
          return (0, e.jsx)(Cn, {
            ...u,
            rgAccountsForGifting: Q,
            isLoading: T,
            isError: O,
          });
        });
        function Cn(a) {
          const {
              lineItem: n,
              onDismiss: r,
              rgAccountsForGifting: i,
              isLoading: u,
              isError: j,
            } = a,
            T = (0, Be.C)(),
            [O, F] = o.useState(""),
            Q = o.useMemo(() => {
              if (!i) return [];
              const q = O.toLocaleLowerCase();
              return q.length < 1
                ? i
                : i.filter(
                    (fe) =>
                      !!(
                        fe.persona.m_strPlayerName
                          .toLocaleLowerCase()
                          .indexOf(q) > -1 ||
                        (fe.nickname &&
                          fe.nickname.toLocaleLowerCase().indexOf(q) > -1)
                      ),
                  );
            }, [O, i]),
            ae = n.gift_info?.accountid_giftee,
            ce = (q) => {
              if (q) {
                const fe = new hn.b(q);
                fe.BIsValid() &&
                  T.mutate({
                    lineItemID: n.line_item_id,
                    lineItemFlags: n.flags,
                    giftInfo: {
                      ...(n.gift_info ?? {}),
                      accountid_giftee: fe && fe.GetAccountID(),
                    },
                  });
              }
              r();
            };
          return j
            ? (0, e.jsx)(Rt, {
                children: (0, e.jsx)("div", {
                  className: re().LoadingError,
                  children: (0, l.we)("#Cart_GiftRecipientModal_IssueLoading"),
                }),
              })
            : (0, e.jsxs)(Rt, {
                loading: u,
                children: [
                  (0, e.jsx)(Pn, { value: O, onChange: F }),
                  (0, e.jsx)(Dn, {
                    children: Q.map((q) =>
                      (0, e.jsx)(
                        In,
                        {
                          selected: q.accountid === ae,
                          onSelect: ce,
                          ownership: q.ownership,
                          persona: q.persona,
                          nickname: q.nickname,
                        },
                        q.accountid,
                      ),
                    ),
                  }),
                ],
              });
        }
        function Rt(a) {
          const { loading: n, children: r } = a;
          return (0, e.jsxs)(M.Z, {
            className: re().GiftRecipientPickerFormCtn,
            children: [
              (0, e.jsx)("div", {
                className: re().FormTitle,
                children: (0, l.we)("#Cart_GiftRecipientModal_Title"),
              }),
              n && (0, e.jsx)(k.t, { position: "center", size: "large" }),
              !n && r,
            ],
          });
        }
        function Pn(a) {
          const { value: n, onChange: r } = a;
          return (0, e.jsx)(h.pd, {
            autoFocus: !0,
            bShowClearAction: !0,
            className: re().GiftFriendsInput,
            placeholder: (0, l.we)("#Cart_GiftRecipientModal_Placeholder"),
            value: n,
            onChange: (i) => r(i.currentTarget.value),
          });
        }
        function Dn(a) {
          return (0, e.jsx)(mn.MS, {
            className: re().GiftFriendsListCtn,
            ...a,
          });
        }
        function In(a) {
          const {
              selected: n,
              onSelect: r,
              nickname: i,
              persona: u,
              ownership: j,
            } = a,
            T = j.already_owns,
            O = o.useCallback(() => {
              T || r(u.m_steamid.ConvertTo64BitString());
            }, [T, r, u]);
          return (0, e.jsxs)(M.Z, {
            className: (0, s.A)(
              re().GiftPickerFriendBlock,
              n && re().Selected,
              T && re().Disabled,
            ),
            focusClassName: re().Focused,
            noFocusRing: !0,
            onActivate: O,
            children: [
              (0, e.jsx)(ot.i8, {
                className: re().FriendAvatar,
                statusPosition: "right",
                persona: u,
              }),
              (0, e.jsx)(pn.A, {
                bParenthesizeNicknames: !0,
                strNickname: i,
                persona: u,
                className: re().PersonaName,
              }),
              (0, e.jsxs)("div", {
                className: re().FriendsGiftLabel,
                children: [
                  (0, e.jsx)(En, { ownership: j }),
                  (0, e.jsx)(xn, { ownership: j }),
                ],
              }),
            ],
          });
        }
        function En(a) {
          const { ownership: n } = a,
            { already_owns: r, partial_owns_appids: i } = n;
          return r
            ? (0, e.jsx)("div", {
                className: (0, s.A)(re().OwnsGame),
                children: (0, l.we)("#Cart_GiftRecipientModal_OwnsGameLabel"),
              })
            : i && i.length > 0
              ? (0, e.jsx)("div", {
                  className: (0, s.A)(re().OwnsGame),
                  children: (0, l.PP)(
                    "#Cart_GiftRecipientModal_PartialOwnsLabel",
                    (0, e.jsx)(Bt, { rgAppList: i }),
                  ),
                })
              : null;
        }
        function xn(a) {
          const { ownership: n } = a,
            { already_owns: r, wishes_for: i, partial_wishes_for: u } = n;
          return r
            ? null
            : i
              ? (0, e.jsx)("div", {
                  className: (0, s.A)(re().OnWishlist),
                  children: (0, l.we)("#Cart_GiftRecipientModal_OnWishlist"),
                })
              : u && u.length > 0
                ? (0, e.jsx)("div", {
                    className: (0, s.A)(re().OnWishlist),
                    children: (0, l.PP)(
                      "#Cart_GiftRecipientModal_PartialWishlistLabel",
                      (0, e.jsx)(Bt, { rgAppList: u }),
                    ),
                  })
                : null;
        }
        function Bt(a) {
          const { rgAppList: n } = a,
            r = (0, _n.eG)(),
            i = o.useMemo(
              () =>
                Array.from(new Set(n))
                  .slice(0, 6)
                  .map((T) => (0, se.us)(r, { appid: T })),
              [r, n],
            ),
            u = (0, fn.E)({ queries: i }),
            j = [];
          for (const T of u)
            if (!(!T.data || !T.data.name)) {
              if (j.length >= 3) break;
              j.push(
                (0, e.jsxs)(e.Fragment, {
                  children: [j.length ? ", " : "", T.data.name],
                }),
              );
            }
          return j;
        }
        function An(a) {
          const { giftInfo: n, onChange: r } = a,
            i = (0, Ct.js)(n.accountid_giftee);
          return i.data
            ? (0, e.jsxs)(Gt, {
                children: [
                  (0, e.jsxs)(bt, {
                    children: [
                      (0, e.jsx)(tt, {
                        children: (0, l.we)("#Cart_PurchaseFor_Label"),
                      }),
                      (0, e.jsx)("a", {
                        href: i.data.GetCommunityProfileURL(),
                        target: "_blank",
                        children: (0, e.jsx)(ot.i8, {
                          className: re().FriendAvatar,
                          statusPosition: "right",
                          persona: i.data,
                        }),
                      }),
                      i.data.m_strPlayerName,
                    ],
                  }),
                  (0, e.jsx)(Gn, { giftInfo: n, onChange: r }),
                ],
              })
            : null;
        }
        function jn(a) {
          const { lineItem: n } = a;
          return (0, e.jsxs)(Gt, {
            children: [
              (0, e.jsx)(Rn, { ...a }),
              (0, e.jsx)(Un, { lineItem: n }),
              (0, e.jsx)(wn, {
                gifteeAccountID: n.gift_info?.accountid_giftee,
              }),
            ],
          });
        }
        function Sn(a) {
          return p.iA.logged_in
            ? null
            : (0, e.jsx)("div", {
                className: re().SignInLink,
                children: (0, e.jsx)(Ve.$, {
                  onClick: () => (0, y.vg)(),
                  children: (0, l.we)("#Cart_Gifting_SignInForFriends"),
                }),
              });
        }
        function yn(a) {
          const { lineItem: n, storeItem: r } = a,
            [i, u] = o.useState(!1),
            { data: j } = (0, Ze.UI)(),
            T = o.useMemo(() => {
              if (!j?.line_items) return [];
              let O = new Set();
              for (const F of j.line_items)
                F.line_item_id !== n.line_item_id &&
                  F.gift_info?.accountid_giftee &&
                  O.add(F.gift_info.accountid_giftee);
              return [...O];
            }, [j?.line_items, n.line_item_id]);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              p.iA.logged_in &&
                (0, e.jsx)(Ve.$, {
                  onClick: () => u(!0),
                  children: (0, l.we)("#Cart_SelectRecipient"),
                }),
              i &&
                (0, e.jsx)(gn, {
                  bShowGiftRecipientModal: i,
                  fnOnDismiss: () => u(!1),
                  lineItem: n,
                  storeItem: r,
                  highlightedAccountIDs: T,
                }),
            ],
          });
        }
        function Tn(a) {
          const { lineItem: n, onClick: r } = a,
            { mutate: i } = (0, Be.C)(),
            u = o.useCallback(() => {
              i({
                lineItemID: n.line_item_id,
                lineItemFlags: n.flags,
                giftInfo: { ...n.gift_info, email_giftee: "" },
              }),
                r();
            }, [i, n, r]);
          return (0, e.jsx)(Ve.$, {
            color: "dull",
            onClick: u,
            children: (0, l.we)("#Cart_EnterRecipientEmail"),
          });
        }
        function Mn(a) {
          const { lineItem: n } = a,
            r = (0, w.$)(n);
          return r
            ? (0, e.jsxs)(Ge.s, {
                align: "center",
                children: [
                  (0, e.jsx)("a", {
                    href: r.GetCommunityProfileURL(),
                    target: "_blank",
                    children: (0, e.jsx)(ot.i8, {
                      className: re().FriendAvatar,
                      statusPosition: "right",
                      persona: r,
                    }),
                  }),
                  r.m_strPlayerName,
                ],
              })
            : null;
        }
        function On(a) {
          const { lineItem: n } = a,
            r = n.gift_info?.email_giftee,
            { mutate: i } = (0, Be.C)(),
            [u, j, T] = (0, rt.M)(r, 1e3);
          return (
            (0, o.useEffect)(() => {
              if (!j || j == n.gift_info?.email_giftee) return;
              let O = n.gift_info ? { ...n.gift_info } : {};
              (O.email_giftee = j),
                (O.time_scheduled_send = 0),
                i({
                  lineItemID: n.line_item_id,
                  lineItemFlags: n.flags,
                  giftInfo: O,
                });
            }, [i, n, j]),
            (0, e.jsxs)("div", {
              children: [
                (0, e.jsx)("div", {
                  className: re().GiftEmailInput,
                  children: (0, e.jsx)(h.pd, {
                    label: " ",
                    mustBeEmail: !0,
                    value: u,
                    onChange: (O) => T(O.target.value),
                    maxChars: bn,
                  }),
                }),
                (0, e.jsxs)("ul", {
                  className: re().GiftEmailWarnings,
                  children: [
                    (0, e.jsx)("li", {
                      children: (0, l.we)("#Cart_GiftDeliveryEmail_Warning1"),
                    }),
                    (0, e.jsx)("li", {
                      children: (0, l.we)(
                        "#Cart_GiftDeliveryEmail_Warning2",
                        p.iA.country_code,
                      ),
                    }),
                  ],
                }),
              ],
            })
          );
        }
        var Ln = ((a) => (
          (a[(a.NoRecipientSelected = 0)] = "NoRecipientSelected"),
          (a[(a.AccountSelected = 1)] = "AccountSelected"),
          (a[(a.EmailSelected = 2)] = "EmailSelected"),
          a
        ))(Ln || {});
        function Rn(a) {
          const { lineItem: n } = a,
            [r, i] = o.useState(!1),
            u = o.useMemo(
              () =>
                n.gift_info?.accountid_giftee
                  ? 1
                  : r || n.gift_info?.email_giftee
                    ? 2
                    : 0,
              [n, r],
            ),
            { mutate: j } = (0, Be.C)(),
            T = o.useCallback(() => {
              let O = n.gift_info ? { ...n.gift_info } : {};
              (O.accountid_giftee = null),
                (O.email_giftee = null),
                i(!1),
                j({
                  lineItemID: n.line_item_id,
                  lineItemFlags: n.flags,
                  giftInfo: O,
                });
            }, [j, n]);
          return (0, e.jsxs)(ct, {
            children: [
              (0, e.jsx)("div", { className: re().GiftFormDivider }),
              (0, e.jsxs)(Ge.s, {
                justify: "between",
                gap: "3",
                direction: { initial: "column-reverse", md: "row" },
                marginBottom: "2",
                children: [
                  (0, e.jsxs)(bt, {
                    children: [
                      (0, e.jsx)(tt, {
                        fullWidth: u === 2,
                        children:
                          u == 2
                            ? (0, l.we)("#Cart_GiftRecipientEmail_Label")
                            : (0, l.we)("#Cart_GiftRecipient_Label"),
                      }),
                      u == 1 && (0, e.jsx)(Mn, { lineItem: n }),
                      u == 0 &&
                        (0, e.jsx)(Bn, { onEmailRecipient: () => i(!0), ...a }),
                      u != 0 &&
                        (0, e.jsxs)(ft, {
                          onClick: T,
                          children: [
                            "(",
                            u == 2
                              ? (0, l.we)("#Cart_EditGiftDelivery")
                              : (0, l.we)("#Cart_Edit"),
                            ")",
                          ],
                        }),
                    ],
                  }),
                  (0, e.jsx)(dn, { lineItem: n }),
                ],
              }),
              (0, e.jsx)("div", {
                children: u == 2 && (0, e.jsx)(On, { ...a }),
              }),
              u == 1 && (0, e.jsx)(Nn, { lineItem: n }),
            ],
          });
        }
        function Bn(a) {
          const { onEmailRecipient: n, ...r } = a;
          return (0, e.jsxs)(Ge.s, {
            align: "center",
            gap: "2",
            marginStart: "2",
            wrap: "wrap",
            children: [
              (0, e.jsx)(yn, { ...r }),
              (0, e.jsx)(Tn, { onClick: n, ...r }),
              (0, e.jsx)(Sn, {}),
            ],
          });
        }
        function Nn(a) {
          const { lineItem: n } = a,
            r = (0, w.$)(n),
            { data: i } = (0, at.Dv)(),
            u = o.useMemo(
              () => !i || i.includes(r?.GetSteamIDAsString()),
              [i, r],
            );
          return !r || u
            ? null
            : (0, e.jsx)($e.az, {
                marginTop: "3",
                className: re().GiftNonFriendWarning,
                children: (0, e.jsxs)(Qe.EY, {
                  size: "3",
                  color: "amber-9",
                  children: [
                    p.iA.logged_in &&
                      (0, l.PP)(
                        "#Cart_Warning_GiftToNonFriend_Named",
                        (0, e.jsx)(qe.Y, {
                          target: "_blank",
                          href: r.GetCommunityProfileURL(),
                          children: r.m_strPlayerName,
                        }),
                      ),
                    !p.iA.logged_in &&
                      (0, l.oW)(
                        "#Cart_Warning_GiftToAccount_LoggedOut_Actionable",
                        (0, e.jsx)(qe.W, {
                          color: "text-light",
                          contrast: "title",
                          onClick: () => (0, y.vg)(),
                        }),
                      ),
                  ],
                }),
              });
        }
        function Un(a) {
          const { lineItem: n } = a,
            [r, i] = o.useState(n.gift_info?.gift_message?.message || ""),
            u = o.useRef(r),
            [j, T] = o.useState(n.gift_info?.gift_message?.signature || ""),
            O = o.useRef(j),
            [F, Q] = o.useState(n.gift_info?.time_scheduled_send),
            ae = o.useRef(F),
            ce = o.useCallback((ve) => {
              (q.current = !0), Q(Math.floor(ve));
            }, []),
            q = o.useRef(!1);
          o.useEffect(() => {
            q.current ||
              ((ae.current = n.gift_info?.time_scheduled_send),
              (u.current = n.gift_info?.gift_message?.message || ""),
              (O.current = n.gift_info?.gift_message?.signature || ""),
              Q(ae.current),
              i(u.current),
              T(O.current));
          }, [n.gift_info]);
          const fe = (0, ue._g)(3e3),
            { mutate: Me } = (0, Be.C)(),
            Ie = o.useCallback(
              (ve) => {
                fe(() => {
                  q.current &&
                    (Me({
                      lineItemID: n.line_item_id,
                      lineItemFlags: n.flags,
                      giftInfo: ve,
                    }),
                    (q.current = !1));
                });
              },
              [Me, n.line_item_id, n.flags, fe],
            );
          return (
            (0, o.useEffect)(() => {
              (ae.current != F || u.current != r || O.current != j) &&
                (Ie({
                  accountid_giftee: n.gift_info?.accountid_giftee,
                  email_giftee: n.gift_info?.email_giftee,
                  gift_message: { message: r, signature: j },
                  time_scheduled_send: F,
                }),
                (ae.current = F),
                (u.current = r),
                (O.current = j));
            }, [r, j, F, Ie, n.gift_info]),
            (0, e.jsx)(Ut, {
              id: n.line_item_id,
              message: r,
              onMessageChange: (ve) => {
                (q.current = !0), i(ve);
              },
              signature: j,
              onSignatureChange: (ve) => {
                (q.current = !0), T(ve);
              },
              scheduledTime: F,
              onScheduledTimeChange: ce,
              bShowScheduledTime:
                !n.gift_info?.email_giftee || n.gift_info?.email_giftee == "",
            })
          );
        }
        function Gn(a) {
          const { giftInfo: n, onChange: r } = a;
          return (0, e.jsx)(Ut, {
            id: "cart",
            message: n.gift_message?.message || "",
            onMessageChange: (i) =>
              r({ ...n, gift_message: { ...n.gift_message, message: i } }),
            signature: n.gift_message?.signature || "",
            onSignatureChange: (i) =>
              r({ ...n, gift_message: { ...n.gift_message, signature: i } }),
            scheduledTime: n.time_scheduled_send,
            onScheduledTimeChange: (i) => r({ ...n, time_scheduled_send: i }),
            bShowScheduledTime: !n?.email_giftee || n?.email_giftee == "",
          });
        }
        const Nt = 160,
          bn = 330;
        function Ut(a) {
          const {
              id: n,
              message: r,
              onMessageChange: i,
              signature: u,
              onSignatureChange: j,
              bShowScheduledTime: T,
              scheduledTime: O,
              onScheduledTimeChange: F,
              onBlur: Q,
            } = a,
            ae = (0, mt.LH)(),
            ce = Nt - r.length,
            [q, fe] = o.useState(!1),
            Me = q || u?.length > 0 || !ae,
            { data: Ie } = (0, Ct.js)(p.iA.accountid);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsxs)(ct, {
                children: [
                  (0, e.jsx)(tt, {
                    fullWidth: !0,
                    children: (0, l.PP)(
                      "#Cart_GiftDelivery_Body",
                      (0, e.jsx)("span", {
                        className: ce <= 0 ? re().RedText : null,
                        children: ce,
                      }),
                    ),
                  }),
                  (0, e.jsx)(h.Cl, {
                    nMinHeight: 50,
                    className: re().GiftNoteInput,
                    value: r,
                    onBlur: Q,
                    onChange: (ve) => i(ve.target.value),
                  }),
                ],
              }),
              !!ae &&
                (0, e.jsx)(ct, {
                  children: (0, e.jsxs)("div", {
                    className: re().GiftFormRecipient,
                    children: [
                      (0, e.jsx)(tt, {
                        children: (0, l.we)("#Cart_GiftDelivery_From"),
                      }),
                      (0, e.jsx)(ot.i8, {
                        className: re().FriendAvatar,
                        statusPosition: "right",
                        persona: Ie,
                      }),
                      " ",
                      Ie?.m_strPlayerName || "",
                      !Me &&
                        (0, e.jsxs)(ft, {
                          onClick: () => fe(!0),
                          children: [
                            "(",
                            (0, l.we)("#Cart_GiftDelivery_AddSignature"),
                            ")",
                          ],
                        }),
                    ],
                  }),
                }),
              Me &&
                (0, e.jsxs)(ct, {
                  children: [
                    (0, e.jsx)(tt, {
                      fullWidth: !0,
                      children: (0, l.we)("#Cart_GiftDelivery_Signature"),
                    }),
                    (0, e.jsx)(h.pd, {
                      value: u,
                      className: re().GiftSignatureInput,
                      onChange: (ve) => j(ve.target.value),
                      onBlur: Q,
                      maxChars: Nt,
                    }),
                  ],
                }),
              T &&
                (0, e.jsx)(tn, { scheduledTime: O, onScheduledTimeChange: F }),
            ],
          });
        }
        function Gt(a) {
          return (0, e.jsx)("div", {
            className: re().GiftFormCtn,
            children: a.children,
          });
        }
        function ct(a) {
          return (0, e.jsx)("div", {
            className: re().GiftFormSection,
            children: a.children,
          });
        }
        function bt(a) {
          return (0, e.jsx)("div", {
            className: re().GiftFormRecipient,
            children: a.children,
          });
        }
        function wt(a) {
          return (0, e.jsx)("div", {
            className: re().GiftRadioRow,
            children: a.children,
          });
        }
        function tt(a) {
          const { fullWidth: n } = a;
          return (0, e.jsx)("div", {
            className: I()(re().FormTextLabel, n && re().FullWidth),
            children: a.children,
          });
        }
        function ft(a) {
          return (0, e.jsx)(M.Z, {
            onActivate: a.onClick,
            children: a.children,
            className: re().LinkButton,
          });
        }
        function wn(a) {
          const { gifteeAccountID: n } = a,
            { isLoading: r, data: i } = (0, D.vo)(!0);
          if (r || i.is_not_member_of_any_group() || i.role() === Ye.PQ.sf)
            return null;
          const u = K.b2
            .InitFromAccountID(n, p.TS.EUNIVERSE)
            .ConvertTo64BitString();
          return i
            .family_group()
            .members()
            .some((T) => T.steamid() === u && T.role() === Ye.PQ.sf)
            ? (0, e.jsxs)("div", {
                className: re().FamilyGiftNotice,
                children: [" ", (0, l.we)("#Cart_FamilyGift_Notice")],
              })
            : null;
        }
        var Ft = t(48366),
          Fn = t(78280),
          Wt = t(58162),
          Pt = t(99412),
          Kt = t(71742),
          Wn = t(58732),
          Se = t(50829),
          Kn = t(75975),
          Hn = t(87913);
        function kn(a) {
          const {
              lineItem: n,
              storeItem: r,
              couponApplied: i,
              availableCoupons: u,
            } = a,
            [{ bDialogActive: j, strDialogTitle: T }, O] = o.useState({
              bDialogActive: !1,
            }),
            F = () =>
              O({
                bDialogActive: !0,
                strDialogTitle: (0, l.we)(
                  i ? "#Cart_CouponModify_Change" : "#Cart_CouponModify_Add",
                ),
              }),
            Q = (0, Be.C)(),
            ae = (ce) => {
              Q.mutate({
                lineItemID: n.line_item_id,
                giftInfo: n.gift_info,
                lineItemFlags: { ...n.flags },
                gidCoupon: ce,
              });
            };
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(zn, {
                couponApplied: i,
                numAvailable: u.length,
                onModifyClick: F,
              }),
              (0, e.jsx)(Qn, {
                active: j,
                title: T || (0, l.we)("#Cart_CouponModify_Add"),
                packageName: r.GetName(),
                onRequestClose: () => O({ bDialogActive: !1 }),
                couponApplied: i,
                availableCoupons: u,
                onCouponChange: ae,
              }),
            ],
          });
        }
        function zn(a) {
          const { couponApplied: n, numAvailable: r, onModifyClick: i } = a,
            u = (0, l.we)(
              n ? "#Cart_CouponModify_Change" : "#Cart_CouponModify_Add",
            );
          return (0, e.jsx)("div", {
            className: Se.CouponPickerRowGlow,
            children: (0, e.jsxs)("div", {
              className: Se.CouponPickerRow,
              children: [
                n ? (0, e.jsx)(Vn, { ...n }) : null,
                (0, e.jsx)(Dt, {
                  children: (0, l.Yp)("#Cart_CouponAvailability", r),
                }),
                (0, e.jsx)("div", {
                  className: Se.ModifyLink,
                  children: (0, e.jsx)(ft, { onClick: i, children: u }),
                }),
              ],
            }),
          });
        }
        function Vn(a) {
          const { large_icon_url: n, title: r } = a;
          return (0, e.jsx)("img", {
            className: Se.CouponRepresentation,
            src: n,
            title: r,
          });
        }
        function Qn(a) {
          const {
              active: n,
              onRequestClose: r,
              packageName: i,
              title: u,
              couponApplied: j,
              availableCoupons: T,
              onCouponChange: O,
            } = a,
            [F, Q] = o.useState(j?.gidcoupon || ""),
            ae = () => {
              r(), O(F || Pt.kFb);
            };
          return (0, e.jsxs)(Lt.mt, {
            active: n,
            onDismiss: r,
            children: [
              (0, e.jsx)(h.Y9, { children: u }),
              (0, e.jsx)(h.a3, {
                children: (0, l.PP)(
                  "#Cart_SelectCouponToApply",
                  (0, e.jsx)("span", {
                    className: Se.PackageName,
                    children: i,
                  }),
                ),
              }),
              (0, e.jsx)(Zn, {
                availableCoupons: T,
                couponApplied: j?.gidcoupon,
                couponSelected: F,
                onSelectedChange: Q,
              }),
              (0, e.jsx)(h.CB, {
                onCancel: r,
                onOK: ae,
                strOKText: (0, l.we)("#Button_Done"),
              }),
            ],
          });
        }
        function Zn(a) {
          const {
              availableCoupons: n,
              couponApplied: r,
              couponSelected: i,
              onSelectedChange: u,
            } = a,
            { data: j } = (0, Hn.g)(),
            T = (j?.cart_items || []).map((O) => O.coupon_applied?.gidcoupon);
          return (0, e.jsx)("div", {
            className: Se.CouponListContainer,
            children: n.map((O) =>
              (0, e.jsx)(
                Yn,
                {
                  ...O,
                  applied: r === O.gidcoupon,
                  selected: i === O.gidcoupon,
                  inUse: T.includes(O.gidcoupon),
                  onSelected: (F) => u(F ? O.gidcoupon : ""),
                },
                O.gidcoupon,
              ),
            ),
          });
        }
        function Yn(a) {
          const {
              applied: n,
              inUse: r,
              selected: i,
              large_icon_url: u,
              title: j,
              discount_pct: T,
              onSelected: O,
            } = a,
            F = !n && r,
            Q = F ? void 0 : () => O(!i);
          return (0, e.jsxs)("div", {
            className: (0, s.A)(Se.CouponListItem, F && Se.Disabled),
            onClick: Q,
            children: [
              (0, e.jsx)(Jn, { checked: i, hidden: F }),
              (0, e.jsx)("img", { src: u, title: j, className: Se.Image }),
              (0, e.jsxs)("div", {
                className: Se.Info,
                children: [
                  n &&
                    (0, e.jsx)(Dt, {
                      children: (0, l.we)("#Cart_Coupons_Applied"),
                    }),
                  F &&
                    (0, e.jsx)(Dt, {
                      children: (0, l.we)("#Cart_Coupons_InUse"),
                    }),
                ],
              }),
              (0, e.jsxs)("div", {
                className: Se.Discount,
                children: ["-", T, "%"],
              }),
            ],
          });
        }
        function Dt(a) {
          return (0, e.jsx)("div", {
            className: Se.CouponInfoText,
            children: a.children,
          });
        }
        function Jn(a) {
          const { checked: n, hidden: r } = a;
          return (0, e.jsx)("div", {
            className: (0, s.A)(Se.Checkbox, r && Se.Hidden),
            children: n && (0, e.jsx)(Kn.Jl, {}),
          });
        }
        var pt = t(94451),
          Xn = t(71460),
          $n = t.n(Xn),
          qn = t(11543),
          le = t.n(qn);
        function es() {
          const [a, n] = o.useState(null);
          return (
            o.useEffect(() => {
              n((0, g.Vh)()?.rgUserCountryOptions);
            }, []),
            a
              ? (0, e.jsxs)("div", {
                  className: (0, s.A)(
                    le().EstimatedTotalFlex,
                    $n().UserCountrySelector,
                  ),
                  children: [
                    (0, e.jsx)("div", {
                      className: le().CartLabelText,
                      children: (0, l.we)("#Cart_UserCountrySelector"),
                    }),
                    (0, e.jsx)("div", {
                      className: le().CartValueText,
                      children: (0, e.jsx)(ts, { rgCountryOptions: a }),
                    }),
                  ],
                })
              : null
          );
        }
        function ts(a) {
          const { rgCountryOptions: n } = a,
            [r, i] = o.useState(p.TS.COUNTRY),
            u = o.useMemo(
              () => Object.keys(n).map((T) => ({ label: n[T], data: T })),
              [n],
            ),
            j = o.useCallback((T) => {
              T.data != p.TS.COUNTRY &&
                PresentCountryCurrencyChangeDialog(T.data == "help"),
                i(T.data);
            }, []);
          return (0, e.jsx)(h.m, {
            selectedOption: r,
            onChange: j,
            rgOptions: u,
            contextMenuPositionOptions: { bMatchWidth: !1 },
          });
        }
        var ns = t(88383),
          dt = t(75454);
        function ss(a) {
          const { children: n } = a;
          return (0, e.jsx)(as, { children: n });
        }
        function as(a) {
          const { children: n } = a,
            r = (0, g.UI)(),
            { data: i } = (0, g.Ck)(),
            u = r.isLoading || !r.data,
            j = (0, it.Qn)(),
            [T, O] = (0, dt.fg)(),
            { sortedLineItems: F, bCartIncludesGifts: Q } = o.useMemo(() => {
              const q = r?.data?.line_items || [],
                fe = q.some((Ie) => Ie.flags?.is_gift);
              return {
                sortedLineItems: q.sort((Ie, ve) => {
                  const Oe = Ie.bundleid ?? Ie.packageid,
                    Fe = ve.bundleid ?? ve.packageid;
                  return Ie.time_added == ve.time_added
                    ? Oe < Fe
                      ? 1
                      : -1
                    : Ie.time_added < ve.time_added
                      ? 1
                      : -1;
                }),
                bCartIncludesGifts: fe,
              };
            }, [r?.data?.line_items]),
            ae = o.useCallback(
              (q) =>
                (0, e.jsx)(rs, {
                  ...q,
                  availableCoupons: (i && i[q.lineItem.line_item_id]) || [],
                }),
              [i],
            ),
            { data: ce } = (0, g.g7)();
          return (0, e.jsxs)(pt.wW, {
            validateCart: ce,
            eDisplayType: pt.WA.k_ECartDisplayType_FullPage,
            children: [
              (0, e.jsx)(pt.ZZ, {}),
              (0, e.jsxs)(M.Z, {
                className: le().ShoppingCartCtn,
                children: [
                  (0, e.jsxs)(M.Z, {
                    className: le().ShoppingCartLeftCol,
                    children: [
                      u && (0, e.jsx)(Wt.UD, {}),
                      !!T &&
                        (0, e.jsx)(B.tH, {
                          children: (0, e.jsx)(_, {
                            children: (0, e.jsx)(An, {
                              giftInfo: T,
                              onChange: O,
                            }),
                          }),
                        }),
                      (0, e.jsx)(B.tH, {
                        children: (0, e.jsx)(ns.pf, {
                          lineItems: F,
                          cartValidation: ce,
                          LineItemContainer: ae,
                        }),
                      }),
                      (0, e.jsx)(pt.LP, { validateCart: ce }),
                      !j &&
                        (0, e.jsxs)("div", {
                          className: le().ResponsiveShoppingCartSummary,
                          children: [
                            (0, e.jsx)(Ht, {
                              bCartIncludesGifts: Q,
                              strEstimatedTotal:
                                ce?.estimated_totals?.subtotal.formatted_amount,
                            }),
                            (0, e.jsx)(Vt, {}),
                          ],
                        }),
                      n &&
                        n({
                          cart: r.data,
                          validatedCart: ce,
                          bCartIncludesGifts: Q,
                        }),
                    ],
                  }),
                  (0, e.jsx)(M.Z, {
                    className: (0, s.A)(
                      le().ShoppingCartRightCol,
                      F?.length <= 2 && le().SmallCart,
                    ),
                    children: (0, e.jsxs)("div", {
                      className: le().CartRightColStickyCtn,
                      children: [
                        (0, e.jsx)(Ht, {
                          bCartIncludesGifts: Q,
                          strEstimatedTotal:
                            ce?.estimated_totals?.subtotal.formatted_amount,
                        }),
                        (0, e.jsx)(Vt, {}),
                        (0, e.jsx)(Ce, { cart: r.data, bMinimalDisplay: !0 }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          });
        }
        function rs(a) {
          const {
              lineItem: n,
              storeItem: r,
              validatedItem: i,
              availableCoupons: u,
              children: j,
            } = a,
            [T] = (0, dt.Ez)(),
            O = T === "gifts" && !!n.flags.is_gift,
            F = !!u.length;
          return (0, e.jsxs)(M.Z, {
            children: [
              (0, e.jsxs)(Wt.Rz, {
                children: [
                  j,
                  O && (0, e.jsx)(jn, { storeItem: r, lineItem: n }),
                ],
              }),
              F &&
                (0, e.jsx)(kn, {
                  storeItem: r,
                  lineItem: n,
                  couponApplied: i?.coupon_applied,
                  availableCoupons: u,
                }),
            ],
          });
        }
        const Ht = (0, B.Nr)(function (n) {
          const { strEstimatedTotal: r, bCartIncludesGifts: i } = n,
            { bButtonDisabled: u, nextStep: j, bGuestAvailable: T } = kt(i);
          return (0, e.jsxs)("div", {
            className: le().CartSummaryCtn,
            children: [
              (0, e.jsx)(B.tH, { children: (0, e.jsx)(es, {}) }),
              (0, e.jsxs)("div", {
                className: (0, s.A)(
                  le().EstimatedTotalFlex,
                  le().SummaryMarginBottom,
                ),
                children: [
                  (0, e.jsx)("div", {
                    className: le().CartLabelText,
                    children: (0, l.we)("#Cart_EstimatedTotal"),
                  }),
                  (0, e.jsx)("div", {
                    className: le().CartValueText,
                    children: r,
                  }),
                ],
              }),
              (0, e.jsx)("div", {
                className: (0, s.A)(
                  le().CartNoteText,
                  le().SummaryMarginBottom,
                ),
                children: (0, l.we)("#Cart_Note_SalesTax"),
              }),
              (0, e.jsxs)(B.wC, {
                children: [
                  (0, e.jsx)(zt, {
                    bDisabled: u,
                    nextStep: j,
                    bGuestOption: T,
                  }),
                  (0, e.jsx)(cs, { disabled: u || i }),
                  (0, e.jsx)(os, { bDisabled: u }),
                ],
              }),
            ],
          });
        });
        function kt(a) {
          const n = (0, g.UI)(),
            r = (0, g.g7)(),
            i = r.isSuccess && r.data.cart_items.every((fe) => !fe.errors),
            [u, j] = (0, dt.Ez)(),
            T = (0, Ft.EJ)(),
            O = (0, g.uQ)(r.data),
            Q = (0, g.n0)(r.data) || O,
            ae =
              n.isSuccess &&
              n.data.line_items.some(
                (fe) =>
                  fe.flags?.is_gift &&
                  !fe.gift_info?.accountid_giftee &&
                  (!fe.gift_info?.email_giftee ||
                    !h.pd.validateEmail(fe.gift_info?.email_giftee)),
              );
          let ce =
            p.iA.logged_in &&
            ((u === "initial" && !a && !i) ||
              (n.isSuccess && n.data.line_items.length == 0));
          ce = ce || (u === "gifts" && (!i || ae));
          let q;
          return (
            a && u == "initial" && !T
              ? (q = "gifts")
              : p.iA.logged_in
                ? (q = "checkout")
                : (q = "login"),
            { bButtonDisabled: ce, nextStep: q, bGuestAvailable: Q }
          );
        }
        function is(a) {
          const {
            bButtonDisabled: n,
            nextStep: r,
            bGuestAvailable: i,
          } = kt(a.bCartIncludesGifts);
          return (0, e.jsx)(zt, { bDisabled: n, nextStep: r, bGuestOption: i });
        }
        function zt(a) {
          const { bDisabled: n, nextStep: r, bGuestOption: i } = a,
            u = (0, g.jY)(),
            j = (0, G.W6)(),
            [T, O] = (0, dt.Ez)(),
            F = (0, Fn.j4)();
          let Q = Pt.kFb;
          (0, Ft.kx)(F) && (Q = F.gid);
          const ae = () => {
              switch (r) {
                case "login":
                  if (Q != Pt.kFb && i) {
                    const fe =
                      p.TS.STORE_CHECKOUT_BASE_URL +
                      "checkout?purchasetype=self&cart=" +
                      Q;
                    (0, y.pZ)(fe, i);
                  } else (0, y.vg)();
                  break;
                case "gifts":
                  O("gifts"), j.push(Wn.B.ShoppingCartGifts());
                  break;
                case "checkout":
                  location.href = u;
                  break;
                default:
                  (0, Kt.z_)(r, "unhandled step");
              }
            },
            ce = ls(r),
            q = (0, s.A)(
              le().CartSummaryBtn,
              le().SummaryMarginBottom,
              le().Button,
            );
          return (0, e.jsx)(h.jn, {
            disabled: n,
            className: q,
            onClick: ae,
            children: ce,
          });
        }
        function Vt() {
          const a = `${p.TS.STORE_BASE_URL}subscriber_agreement/`;
          return (0, e.jsxs)(M.Z, {
            className: le().LicenseContextCtn,
            children: [
              (0, e.jsx)("img", {
                src: `${p.TS.IMG_URL}/checkout/computer.png`,
                alt: "",
              }),
              (0, e.jsxs)("div", {
                children: [
                  (0, e.jsx)("div", {
                    className: le().LicenseTitle,
                    children: (0, l.we)("#Cart_LicenseContextTitle"),
                  }),
                  (0, e.jsx)("div", {
                    className: le().LicenseLink,
                    children: (0, l.PP)(
                      "#Cart_LicenseContextLink",
                      (0, e.jsx)("a", {
                        href: a,
                        children: (0, l.we)("#Cart_LicenseContextSSA"),
                      }),
                    ),
                  }),
                ],
              }),
            ],
          });
        }
        function os(a) {
          const { bDisabled: n } = a,
            r = (0, D.vo)(),
            i = (0, g.sI)(),
            u = (0, g.F$)(),
            j = (0, D.Ke)(r.data?.family_groupid(), i, Ye.IG.DP),
            T = () => {
              j.mutate(void 0, {
                onSuccess: () => {
                  location.href = `${p.TS.STORE_BASE_URL}account/familymanagement?tab=requests`;
                },
              });
            };
          return u
            ? (0, e.jsx)(h.$n, {
                disabled: n,
                className: (0, s.A)(
                  le().CartSummaryBtn,
                  le().SummaryMarginBottom,
                ),
                onClick: T,
                children: (0, l.we)("#Cart_DeclinePurchaseRequest"),
              })
            : null;
        }
        function ls(a) {
          return a == "login"
            ? (0, l.we)("#Cart_ContinueButton_Payment")
            : a == "gifts"
              ? (0, l.we)("#Cart_ContinueButton_Gifts")
              : a == "checkout"
                ? (0, l.we)("#Cart_ContinueButton_Payment")
                : ((0, Kt.z_)(a, "unhandled step"), "");
        }
        function cs(a) {
          const { disabled: n } = a,
            i = (0, D.vo)().data?.family_groupid(),
            u = (0, D.Yc)(i, p.iA.country_code),
            [j, T] = (0, g.S0)(),
            [O, F] = o.useState(!1),
            Q = () => {
              !n &&
                !O &&
                (F(!0),
                u.mutate(void 0, {
                  onSuccess: () => {
                    window.location.assign((0, D.Vo)(i));
                  },
                }));
            };
          return !j && T != g.Mn.k_ENonGiftableItemPresent
            ? null
            : (0, e.jsxs)("div", {
                className: (0, s.A)(
                  le().RequestPurchaseCtn,
                  le().SummaryMarginBottom,
                ),
                children: [
                  (0, e.jsx)(h.jn, {
                    disabled: n || O || !j,
                    className: (0, s.A)(le().CartSummaryBtn),
                    onClick: Q,
                    children: (0, l.we)("#Cart_RequestPurchase"),
                  }),
                  j &&
                    (0, e.jsx)("div", {
                      children: (0, l.we)("#Cart_RequestPurchaseExplanation"),
                    }),
                  T === g.Mn.k_ENonGiftableItemPresent &&
                    (0, e.jsx)("div", {
                      children: (0, l.we)(
                        "#Cart_RequestPurchaseNonGiftableItems",
                      ),
                    }),
                ],
              });
        }
        var ds = t(32593);
        function us(a) {
          const n = Qt(),
            r = Ps();
          (0, S.YM)();
          let i = null;
          return (
            n
              ? r.type == "replay"
                ? (i = (0, e.jsx)(fs, { cartID: r }))
                : (i = (0, e.jsx)(_s, { cartID: r, ...a }))
              : (i = (0, e.jsx)("div", {
                  className: I()(
                    le().ShoppingCartPage,
                    le().CartPagePlaceholder,
                  ),
                  children: (0, e.jsx)(k.t, {
                    position: "center",
                    msDelayAppear: 250,
                  }),
                })),
            (0, e.jsxs)(e.Fragment, { children: [(0, e.jsx)(ms, {}), i] })
          );
        }
        function ms() {
          return (0, R.Pt)(), (0, D.vo)(), null;
        }
        function _s(a) {
          const { cartID: n, initialStep: r = "initial" } = a,
            [i, u] = o.useState(r),
            T = (0, g.UI)()?.data?.line_items.length || 0,
            O = hs(i, T);
          return (0, e.jsx)(It, {
            cartID: n,
            title: O,
            step: i,
            onStepChange: u,
            children: ({ cart: F, validatedCart: Q, bCartIncludesGifts: ae }) =>
              (0, e.jsxs)(e.Fragment, {
                children: [
                  (0, e.jsx)(B.tH, {
                    children: (0, e.jsx)(Ds, {
                      isCartEmpty: !F || F.line_items.length === 0,
                      cart: Q,
                      bCartIncludesGifts: ae,
                    }),
                  }),
                  (0, e.jsx)(B.tH, {
                    children: (0, e.jsx)(xe, { cart: F, validatedCart: Q }),
                  }),
                ],
              }),
          });
        }
        function fs(a) {
          const { cartID: n } = a;
          return p.iA.logged_in
            ? (0, e.jsx)(It, {
                cartID: n,
                title: (0, l.we)("#Cart_Replay_SavedCart"),
                step: "initial",
                onStepChange: () => {},
                children: () =>
                  (0, e.jsx)(_, {
                    children: (0, l.we)("#Cart_Replay_Instructions", 72),
                  }),
              })
            : (0, e.jsx)(y.Cg, {});
        }
        function It(a) {
          const {
              children: n,
              cartID: r,
              title: i,
              step: u,
              onStepChange: j,
              ...T
            } = a,
            O = o.useRef(null);
          return (
            o.useEffect(() => {
              O.current && O.current.NavTree()?.Activate(!0);
            }, []),
            (0, e.jsx)(Z.Ay, {
              controller: "cart",
              method: "display",
              submethod: u,
              children: (0, e.jsxs)(dt.iZ, {
                cartID: r,
                step: u,
                setStep: j,
                ...T,
                children: [
                  (0, e.jsx)(vs, {}),
                  (0, e.jsxs)(M.Z, {
                    className: le().ShoppingCartPage,
                    navRef: O,
                    children: [
                      (0, e.jsx)(ps, { step: u, title: i }),
                      (0, e.jsx)("div", {
                        className: le().ShoppingCartHeader,
                        children: i,
                      }),
                      (0, e.jsx)(ss, { children: n }),
                    ],
                  }),
                ],
              }),
            })
          );
        }
        function ps(a) {
          const { step: n, title: r } = a,
            i = gs(n);
          return (0, it.Qn)()
            ? null
            : (0, e.jsxs)("div", {
                className: le().ShoppingCartBreadcrumbs,
                children: [
                  (0, e.jsx)("a", {
                    href: p.TS.STORE_BASE_URL,
                    children: (0, l.we)("#Cart_Bradcrumb_Home"),
                  }),
                  " ",
                  i,
                  " ",
                  (0, e.jsxs)("span", {
                    className: le().CurrentBreadcrumb,
                    children: ["> ", r],
                  }),
                ],
              });
        }
        function Qt() {
          const [a, n] = o.useState(!1);
          return (
            o.useEffect(() => {
              a || (0, ds.U)().then(() => n(!0));
            }, [a]),
            a
          );
        }
        function hs(a, n) {
          return a === "gifts"
            ? (0, l.we)("#Cart_GiftOptions")
            : n > 0
              ? (0, l.Yp)("#Cart_YourShoppingCartLineItems", n)
              : (0, l.we)("#Cart_YourShoppingCart");
        }
        function gs(a) {
          return a === "gifts"
            ? (0, e.jsxs)(e.Fragment, {
                children: [
                  "> ",
                  (0, e.jsx)("a", {
                    href: p.TS.STORE_BASE_URL + "cart",
                    children: (0, l.we)("#Cart_YourShoppingCart"),
                  }),
                ],
              })
            : null;
        }
        function vs(a) {
          const n = Cs();
          return (0, e.jsx)("div", {
            className: le().BackgroundImage,
            style: n ? { backgroundImage: `url("${n}")` } : null,
          });
        }
        function Cs() {
          const a = o.useRef(""),
            n = (0, g.UI)(),
            { data: r } = (0, g.g7)(),
            i = !a.current;
          let u = C.sc,
            j = f.c6.Ep;
          if (i && r !== void 0) {
            const O = n.data?.line_items || [],
              F = O.length
                ? O.reduce((Q, ae) => (Q.time_added > ae.time_added ? Q : ae))
                : null;
            (u = F?.bundleid || F?.packageid || C.sc),
              (j = u === F?.bundleid ? f.c6.xO : f.c6.RD);
          }
          const [T] = (0, S.G6)(u, j, g.xz);
          if (T && i) {
            const O = b.A.Get(),
              F = T.GetIncludedAppIDs();
            for (const Q of F) {
              const ae = O.GetApp(Q);
              if (!ae) continue;
              const ce = ae.GetAssets().GetPageBackgroundURL();
              if (ce) {
                a.current = ce;
                break;
              }
            }
          }
          return a.current;
        }
        function Ps() {
          const a = (0, G.zy)();
          return (0, o.useMemo)(() => {
            let n = new URLSearchParams(a.search);
            return n.get("gidreplay")
              ? { type: "replay", gid: n.get("gidreplay") }
              : p.iA.logged_in
                ? { type: "account", global: !0 }
                : {
                    type: "anonymous",
                    gid: (0, te.VY)("shoppingCartGID"),
                    global: !0,
                  };
          }, [a.search]);
        }
        function Ds(a) {
          const { isCartEmpty: n, cart: r, bCartIncludesGifts: i } = a,
            u = () => (window.location.href = p.TS.STORE_BASE_URL);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              !n && (0, e.jsx)(U, { cart: r }),
              (0, e.jsxs)(M.Z, {
                "flow-children": "row",
                className: le().CartFooter,
                children: [
                  (0, e.jsxs)("div", {
                    className: le().NavButtons,
                    children: [
                      (0, e.jsx)(h.$n, {
                        onClick: u,
                        className: le().Button,
                        children: (0, l.we)("#Cart_ContinueShopping"),
                      }),
                      (0, e.jsx)(is, { bCartIncludesGifts: i }),
                    ],
                  }),
                  !n && (0, e.jsx)(Is, {}),
                ],
              }),
            ],
          });
        }
        function Is() {
          const a = (0, A.Z)(),
            n = () => a.mutate();
          return (0, e.jsx)(ft, {
            onClick: n,
            children: (0, l.we)("#Cart_RemoveAll"),
          });
        }
      },
      75454: (V, X, t) => {
        "use strict";
        t.d(X, { Ez: () => E, fg: () => I, iZ: () => g });
        var e = t(7850),
          A = t(78280),
          M = t(90626);
        const f = M.createContext({ step: "initial", setStep: () => {} });
        function R() {
          return (0, M.useContext)(f);
        }
        function E() {
          const o = R();
          return [o.step, o.setStep];
        }
        function I() {
          const o = R();
          return [o.cartWideGiftInfo, o.onCartWideGiftInfoChange];
        }
        function g(o) {
          const {
              step: G,
              setStep: D,
              cartID: C,
              cartWideGiftInfo: b,
              onCartWideGiftInfoChange: S,
              children: h,
            } = o,
            B = M.useMemo(
              () => ({
                step: G,
                setStep: D,
                cartWideGiftInfo: b,
                onCartWideGiftInfoChange: S,
              }),
              [G, D, b, S],
            );
          return (0, e.jsx)(f.Provider, {
            value: B,
            children: (0, e.jsx)(A.h3, { cartID: C, children: h }),
          });
        }
      },
      38878: (V) => {
        V.exports = {
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
      65274: (V) => {
        V.exports = {
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
      50122: (V) => {
        V.exports = {
          TextLink: "_1DLGHwAfYnbFVIwbZjO2cn",
          TextLinkButton: "_30P9kUCljAZzX5fl1DHGJe",
          Truncate: "_1FVRWG5uD8VhzoEiOZWrEo",
          "Underline-always": "_3ASRyX4FTT_eMM5S5yrkwK",
          "Underline-never": "_1gsOIvG4APXjSra-_55rdz",
          "Underline-auto": "_2OgYmw12nDHXtyT9za9yzL",
          "Underline-hover": "_3RITvcDUZq-hpnXRpiayfs",
        };
      },
      34633: (V) => {
        V.exports = {
          strMaxCartPartResponsiveWidth: "840px",
          CartCard: "tVR7nCVynuzImpvF9viMI",
        };
      },
      18126: (V) => {
        V.exports = {
          StoreSalePriceWidget: "_2-McVXIMf_N62bUl92jzfB",
          StoreSaleDiscountedPriceCtn: "_1_P7Dmzd6trtJ9KdCsm-Nk",
          StoreSalePriceBox: "_2Ddt9rJYO847UxQG9pUQiI",
          StoreSaleReservationPriceBox: "_2EisNLmBrsT1g7ArYp9HU6",
          StoreSaleDiscountBox: "_1W5KL6SFFSmWCA-_9poz6t",
          FromCoupon: "_2GpdhLpPsPUodknhaYhTa3",
          StoreOriginalPrice: "_2z2Ba4q2zi5jWk2QF17G2c",
        };
      },
      56420: (V) => {
        V.exports = {
          narrowWidth: "500px",
          SnoozeContainer: "_1DsumfIa3MlkzUV9EXY5W9",
          SnoozeZ: "_2n0EiKMGRP-r_BI5tDtttu",
          none: "T3Fb5KTXwIHM2B-ThTvEs",
          Medium: "_1iYPlsChibPe7Ga9B3c5Wm",
          Large: "_3BESV4eFnr4EnaSaJSdk6T",
          Dim: "rpZ9bKyFXYvNQvgtKn5GV",
          Z1: "_2hnF3M_l4xdIdQ4CkN7LYB",
          Z2: "VmQTOrz5MPOWte5C9K7YS",
          Z3: "_29mtadjX8N6pRn5TX1nA0o",
          hoverParent: "_3-8cByP2koYzHwgZqjvFA",
          animating: "_2rXc7hLg6bohWZ-JpRcYEB",
          Snoring: "_38wIVgo1WjvGqL5ZsmpmiX",
        };
      },
      18828: (V) => {
        V.exports = {
          "duration-app-launch": "800ms",
          narrowWidth: "500px",
          statusAndName: "_4ZTzGZ5TTgFyfw1DcXLXS",
          threeLines: "_1oYSXGjBe7QctQ1ikLpCMm",
          blocked: "VTxPkslK1CSpKNFMgKg7d",
          richPresenceLabel: "_2Ri005Wg_uXDTa71kdRbcN",
          playerName: "nOdcT-MoOaXGePXLyPe0H",
          playerNickname: "_2saJTAocZ9TnYXTGvnqUMC",
          EllipsisName: "_1valFgvEGxquAi_2IrAKqO",
          DisableColoring: "_3oDmKGyTBBm7i4DULjwYcC",
          playerNicknameBracket: "_3XEmWmfQy7gbYJ4KJ1N9tp",
          richPresenceContainer: "_3sxE7F1LV2IcSX68YsH9dI",
          gameName: "_1cB0qtF0paHWWyj1XNcnbG",
          dropPadding: "_3tEPYJ6xjX0d6akU-hhrs4",
          NoMask: "_2dAj6KfWRAxoYPr6tgXd6t",
          twoLine: "_1BbOegz8bYL7iPzgYpOgQI",
          DNDContainer: "_3IswZMeeD6ORStUjgv6Xh8",
          partyBeaconJoin: "_3BnDsXrefFJrt_8frF2wvB",
          hidePersona: "_3ZJkOzmqed_i-p74uF3hus",
          compactView: "_3bbRZyUiK-bfc5Qov6xukI",
          noContextMenu: "_1JE5G7_FNm2SRDEEnOWMVv",
          gameIsPrivateIcon: "_2gBKQXiTBLjeVVaqvc5QVh",
          PendingPersona: "_2sxXnGfkPxNgR6Lk1-SmfQ",
          BackgroundAnimation: "_2hlRK2hm0pHy1YSxwknFCj",
          "ItemFocusAnim-darkerGrey-nocolor": "_3Ye-Lgym31_-ibnmbFywrn",
          "ItemFocusAnim-darkerGrey": "_1klcEk0V0JFATe7imIRZ1C",
          "ItemFocusAnim-darkGreySettings": "_1o29CI_yDNVtgTV1cxDqGZ",
          "ItemFocusAnim-darkGrey": "_2BtPOA0wSbFULgc-Zh-0_x",
          "ItemFocusAnim-grey": "_24LF-yODOtVFSuejuQ_xu2",
          "ItemFocusAnim-translucent-white-10": "uTNXVgYo8JPxZgJyTl9LQ",
          "ItemFocusAnim-translucent-white-20": "ItJlj151fY2eNJEBeWVOA",
          "ItemFocusAnimBorder-darkGrey": "_2blFzc6unV1uJG63OhTkyP",
          "ItemFocusAnim-green": "_3CaU0PXdB2ThLG-Q0foVrK",
          focusAnimation: "_1EZdMwnQzoxjAOoFpXHuZ_",
          hoverAnimation: "kfeP_UGfxsZwzWvFD4ytm",
        };
      },
      70342: (V) => {
        V.exports = {
          "duration-app-launch": "800ms",
          narrowWidth: "500px",
          PersonaStatusIcon: "KxAI_M9gWx3OnKSshHOs6",
          MobilePhoneIcon: "_1iRFj5lJrMqMnRb3GZYPSw",
          SteamDeckIcon: "_2oLqcfqHHKKAK0WfzjXMg_",
          VRIcon: "_368tz9TSOLGiG2mNMLScMz",
          BackgroundAnimation: "_3EMAF_7GAyPW8G7OSt8s0z",
          "ItemFocusAnim-darkerGrey-nocolor": "_3fWOpZpfDmwOCKEdw8xcqf",
          "ItemFocusAnim-darkerGrey": "_2Tvf1f8cUg1eYlQg027B3W",
          "ItemFocusAnim-darkGreySettings": "_1tKhhjTYPWAz5_eQe91O1A",
          "ItemFocusAnim-darkGrey": "_1l7IyrCH5ez4PBO7R4h8RT",
          "ItemFocusAnim-grey": "_3X7_M9NEYzjKEgQRMQevkQ",
          "ItemFocusAnim-translucent-white-10": "_3YCxpOEfjLuLbB1hut87fZ",
          "ItemFocusAnim-translucent-white-20": "_2kvhksXgWA4vxGz5Oy1tV1",
          "ItemFocusAnimBorder-darkGrey": "_3N1wGZIJ5QySTBWgyBavuM",
          "ItemFocusAnim-green": "Vgab6fHUHvZ-iWKRJwy8h",
          focusAnimation: "GvE_FaPqTf1D0HASx1C_0",
          hoverAnimation: "_88lGefJsUDJUpRFJ3pUq7",
        };
      },
      43047: (V) => {
        V.exports = {
          narrowWidth: "500px",
          avatarHolder: "nibodjvvrm86uCfnnAn4g",
          avatarStatus: "_3xUpb5DWXPFNcHHIcv-9pe",
          avatar: "_3h-QRJGxnVOIExtHD1R0f2",
          avatarFrame: "X_mJE4BYV5StDPwZhSiAu",
          avatarFrameImg: "_3fM0F85j3aWVzr4RJM9-eu",
        };
      },
      18714: (V) => {
        V.exports = {
          narrowWidth: "500px",
          "duration-app-launch": "800ms",
          MainCarousel: "_3SWsMT4_EVVsmPbanjlEy4",
          FeatureCtn: "_10K5p_DOyGW-WttCA1UwuC",
          StoreSection: "OyJ48UmHDKl9fN7ue4oPF",
          SectionTitle: "_2RnIwgy025bixjWk2UTw40",
          SectionDescription: "nVpbhpPkgrAwu1ZjFf7-B",
          SectionTitleCtn: "_3LagaO9m29xPGnO2YwpQnq",
          SpotlightsColumn: "_2Y2C1oQ7JEMkq2AoDp_S0A",
          SpecialsItem: "_1txjwTLoJcqr0tBIHfKXTG",
          SpotlightCtn: "_10ZMM-6TwuIxLIDYNo11cI",
          SpotlightImageCtn: "_1bl_5_eovS3fDHK3GbmixH",
          CapsuleDecorators: "_2kI35iD_oF1-ul1amEDSsK",
          SpotlightTextCtn: "_1clRj5v7vU3Cuj7x9c3ZNZ",
          SpotlightTitle: "_2egM2GG5RaDSQYVNWlMHat",
          SpotlightBody: "_1ls2pcPp4wzuE2mXhMudcd",
          SpotlightWeeklongTextCtn: "_3oM7Hgank9qu0ZtiIqT4Ti",
          SpotlightItemCount: "MsDhVPTMNn95Jd3XWTPQR",
          BottomBarPriceInfo: "w6OMUI_I9oVaxDOwRzRrh",
          BroadcastPage: "_2wLdHFCsbh4BfZ6kvvpRyL",
          BroadcastCtn: "_1D6ilQYGn-cYI2fhTAjSzD",
          BroadcastImageCtn: "cIETZLGVM0l5WCskcyNy2",
          BroadcastVideoThumbnail: "_39GHoC1PY5ctRSLAksxgN2",
          BroadcastPlayIcon: "_39krE1gLBTakOzuK41yZBD",
          BroadcastTextCtn: "_14UDZIeZXOLeUPaEDmYrfn",
          BroadcastName: "_3mq3Uyxqjh000D4-OJ9PiI",
          BroadcastDesc: "_3jIzvnoNk4DzmB7w3vl3dz",
          DailyDealCtn: "_3pSANczPET1GBWiNfM8ZEZ",
          DailyDealImageCtn: "pNmm6ej3gbZJbTFnF34Bb",
          DailyDealTextCtn: "_1tG1_bqddtY0lm02Wf4X9T",
          DailyDealDesc: "_21_xVixMh0-rRqUGdGxbEg",
          ContentHubTakeoverCtn: "_2NgkNEEvdNAueuTkHH4V0S",
          TweaksMenu: "_3N0H151KuH7D3iNrbRNL3D",
          MenuTitle: "_1qcGKxEKb2AANDw4iXQ0kF",
          MenuOptions: "_2BNKaMvGCPl8BE2y48Zyu2",
          BackgroundAnimation: "_26VKCvvlOekXO3gQ4lt52K",
          "ItemFocusAnim-darkerGrey-nocolor": "_3wTkpIb4XE7F7ZZDUXHgm_",
          "ItemFocusAnim-darkerGrey": "_2JTxWE9ODcqL4KEwAQsSC5",
          "ItemFocusAnim-darkGreySettings": "_1t6voKc6Z9o4Tv6RxMOxKZ",
          "ItemFocusAnim-darkGrey": "_3hNDwFLzATB9Rlsqzdi0SL",
          "ItemFocusAnim-grey": "DO3pGo-5_dzvOUiQSw2fW",
          "ItemFocusAnim-translucent-white-10": "_1yAke0XKqQ2OeiVkyNRJPm",
          "ItemFocusAnim-translucent-white-20": "_3HsFu62m74Ss4hGpugGIY",
          "ItemFocusAnimBorder-darkGrey": "_2rbzbmBTlYOt4Kd3V_AurK",
          "ItemFocusAnim-green": "_2ha4PsCJYLF62a1zUQzOkG",
          focusAnimation: "yX4eIfH38xAjJpSzr9zFe",
          hoverAnimation: "ib5aU4OmCxpvW7mx1Gkl7",
        };
      },
      12916: (V) => {
        V.exports = {
          EventTimeSection: "_3HyTVTASSmLacvaM964sgu",
          EventTimeTitle: "_2lG5hFYhu9PGPn6RoFeQOL",
          EventVisibilityItem: "_1she-lvNiCP3ASjTnl4q7x",
          EventEditorInputPaneContainer: "_1fCy4cz5Hyj9wDivcVseuc",
          TimeWidth: "_3JGsBe8Ou5QGqfihv0OPed",
          EventPublishTimeCtn: "_2QIVvn2p9gUwsAlifi-nkM",
          DateWidth: "_2P2kw0vHZogg7Ny7cAjQBo",
          PacificTimeHint: "_18FxDrpsfO5Tt8EFui49hV",
          TimeZone: "-x3Rw6W2fJfWRMs7vKr1I",
          ClearButton: "TzhaDn0jN2ILks403xqXQ",
          InputBorder: "_1_H1sN2GVTzxSaz55gv03s",
          TimeBlock: "_2xLBsAMYVDoygyWbl2YIzI",
          TimeRowContainer: "BWmgg29ZeDbO6oj7Z1U7T",
          TimeRowDropDown: "_3ECiyuGLUqPzuS1hKCdfDm",
          EndDateAmountCtn: "_1BIlZEGSO_4tw5Lmc1Kkbf",
          EndRound: "jwuNowbLB28M6nkqFkF_C",
          VisibilityItemList: "_3B0QM3cOEqER2AD2Y85NFy",
          VisibilityItems: "_1WleIEEiF-9nJ57tLWkRmS",
          EventEditorVisibilityCtn: "_4gWwydbAbp2t1NCeW9LLV",
          DateErrorCtn: "_1Ao_g72kBAdoOo0lGUG7Mr",
        };
      },
      45803: (V) => {
        V.exports = {
          CartCreatorCtn: "_2HG7VOroS8aHSg-W3fPyTt",
          Title: "_307GrwtjhKkXh5dUC5KjUv",
          Description: "_3YGQuryhG_j0UPSIaC_7ul",
        };
      },
      98972: (V) => {
        V.exports = {
          strMaxCartPartResponsiveWidth: "840px",
          CartCard: "_3s8SimT1ZQwPeXXdDFPQLK",
          TradingCardContainer: "_2haWAmlu7TDqdL95bf4G8g",
          EarnedMessage: "_2p5xYmfnLWerjNkmBDfZXp",
          Right: "_18eO4-XadW5jmTpgdATkSz",
          ProgressSection: "_2M_5i3fmNkCv4pCoMmk1Os",
          Progress: "lf5WnbH_ohSVbUnvd3Nf2",
          ProgressRail: "_3TjWhPYAqbU3Hrzm6Iq6il",
          IneligbleList: "_1r6njhPeny9XyTQKt2-__7",
        };
      },
      50169: (V) => {
        V.exports = {
          strMaxCartPartResponsiveWidth: "840px",
          CartCard: "qp08vFwlN2mRCsja6T_-g",
          CartUpsellArea: "_2rkDlHZ2yi-tFtDk4-CC4U",
          CartUpsellTitle: "_2dxsG5kVzdAeX8R0mGOiV8",
          UpsellRow: "_24yiwSg4qoT0NRBSlWoUXw",
          Specials: "_2-sCaPlOkBP6wsNVrDNHvZ",
          Loading: "pUmkjugwizSD0CopYMP1P",
          DailyDeals: "rpifv8i-Dj8KDO5qKGvWG",
          Spotlights: "udcFpqnwSDcMv_byU2oQc",
        };
      },
      50829: (V) => {
        V.exports = {
          CouponPickerRowGlow: "_2ETXQ6ojtTNSbACqQ2o0Yv",
          CouponPickerRow: "_3wfeHGptWCHP2ctMNwtAr8",
          ModifyLink: "_3JmdOP-Eoam3irQDjytJ9V",
          CouponRepresentation: "_1_LYYN59DADLVYtqwZYjSm",
          PackageName: "_3L1DF5dTgbrn6BlQIgv8c-",
          CouponListContainer: "ir0tpMmQQazulD77PH8DZ",
          CouponListItem: "_3pw4q_MAfhjbHBkGJVrYyz",
          Disabled: "_1GFD8zuMK_JuYQUQhOo4zz",
          Image: "_2gY_V_NV2khWDAjW5A9Nmd",
          Info: "_1Je1cc8-t1TZpSr6VwGwbN",
          Discount: "_3KPbt6pUHnz1M3cEORSHvV",
          CouponInfoText: "FicMnlG4nr7BEujcPpbGp",
          Checkbox: "_265qJZDbyz2JxqvT15KpRr",
          Hidden: "_21w270Ne6__P31083H0FFV",
        };
      },
      83934: (V) => {
        V.exports = {
          GiftFormDivider: "_1mAU7zkVivAPGFPI3maedz",
          GiftFormSection: "_1tguxhk732P4gi865oLjSE",
          SignInLink: "_3PPF6YhUS0OHDhePQ8H8GV",
          FormTextLabel: "_1TulC_KnETCU3Ks4Y1hQ70",
          FullWidth: "_1NKGWg4uzU98wSFcgJ4tz1",
          FormTitle: "NYKHMrCLjXgs0HgP8G8ei",
          RedText: "_1Ja8Ra-vrBec1_MVpbvrL",
          GiftNoteInput: "_3wPcWGmcqJzbUXHRTPYsXa",
          GiftRecipientPickerModal: "_3R_gixvbcQCJxxRTmCvpJw",
          GiftFriendsListCtn: "_321Woxp4ONn3k90_NLayE0",
          GiftRecipientPickerFormCtn: "_2SDa5ofHp4X7qHQE540cIS",
          GiftFriendsInput: "_1OuNJQWR-7lSdtgyJf69uF",
          GiftRecipientSaveBtn: "_18bhpboMEhi47IMCRQt-2s",
          GiftPickerFriendBlock: "_3qPIR-iXdtj8oUzr8cH1Ey",
          FriendAvatar: "_1AeyMd0eAcDoRyiR0KkOwC",
          Focused: "_11n414df5ioq8YLpNJuHpM",
          Disabled: "_3jwhGaqW0tVwkzg9eXjJWZ",
          Selected: "_1Wx7OLK94f5EXTrnc8MqUs",
          PersonaName: "_1ki9msaNQoGECm27Yz5YGX",
          FriendsGiftLabel: "_3FPeG6FVHnapQP5UKhrMvC",
          OwnsGame: "YK5pj3LG0Q81ZMKdO9Mcc",
          OnWishlist: "_28yZdTwE0gz4jOV6olyg7F",
          GiftFormRecipient: "_2bnjZDtqxcOZI3eITR0MuL",
          LinkButton: "_12zYFuKO2U-1QfeVxlGfwF",
          GiftDatePicker: "VZsqgN_QGXQcRsD6OgscT",
          ScheduleGiftBtn: "_3gADDjjeuuq4YHM8O1IeiQ",
          GiftScheduleIcon: "_742UkQg_TM_Sdf4w5Ye2a",
          GiftRadioLabel: "_3IlfjNwkM2GwzkZyD0llva",
          GiftRadioRow: "RMDo0KSLaIgeffA12m9Ln",
          GiftSignatureInput: "_3tP7DCVH8b-Vyu5ig2fTAk",
          ScheduleError: "_3y4BqvBTwDLWUl1TCNqWp9",
          LoadingError: "_35a12Zg31sBh2Lj4ClSTRz",
          GamepadTimePickerRow: "_2EZzsNeqqWMVcuzawVZc56",
          TimezoneDisplay: "_1zgxnwJ3wM_SzElTI5DOyw",
          FamilyGiftNotice: "_1B5Eew-T7ehFeKRYrle_-l",
          GiftNonFriendWarning: "_2RHycas9bwPdkNJ4QSaMnr",
          GiftEmailInput: "vsYKgPb-InpQZyJ4AoP2m",
          GiftEmailWarnings: "_37q9WvJ0H38LXVjg2BQI1w",
        };
      },
      11543: (V) => {
        V.exports = {
          strMaxCartPartResponsiveWidth: "840px",
          CartCard: "_2w0ZEap3hR1c0K0_DxJDdN",
          ShoppingCartPage: "_22xtsolKcQit92o-LBeRWD",
          CartCheckboxNoMargin: "_1S9a0tZYJv0d4x3-DrxbuS",
          CartPagePlaceholder: "_3Hr6r9HTC7jT51-4vf_X8B",
          ShoppingCartHeader: "bCGAC51za6R_thjPd7_vw",
          ShoppingCartCtn: "_1jqUY_WcPgZnIOE-d9x7wc",
          ShoppingCartLeftCol: "_17GFdSD2pc0BquZk5cejg8",
          ShoppingCartRightCol: "_3HIve50RR17shqpJqmrUps",
          GifteeHintCtn: "_3UNuK95bMDWBfxlG-FNrLd",
          GifteeHint: "zhqWr27UI7EOAAv_zxuY",
          PersonaName: "_370ZzVVcpzmF7GBPgOL9hc",
          LoadingThrobber: "eDdFpOTz0O9U7xBshZJUx",
          CartRightColStickyCtn: "_1bCdGv5zX6cYDovFfcBfdg",
          CartSummaryCtn: "_2bIzQo07mxubFvscA8RIA8",
          EstimatedTotalFlex: "_2DjadWLFH3keW9rGWZKxSk",
          SummaryMarginBottom: "qV80oahDZsbXiS6lIDLND",
          LicenseContextCtn: "jY9l4aHTdQLHeTWfPonTr",
          LicenseTitle: "p8XFGmprI4snkQjm11Pf2",
          LicenseLink: "_2Wg3oyIvxKKM_o6q7rXdc5",
          ResponsiveShoppingCartSummary: "dpVdC9qAMjdzrN7VWFria",
          RequestPurchaseCtn: "_2jup-7OkSAzTBG-K9r9OCX",
          CartNoteText: "_31DQWsrdb_9oV-vMOaaPqI",
          CartLabelText: "_3ayrhzEm-T_IRhWeQ4HFxr",
          CartValueText: "_2WLaY5TxjBGVyuWe_6KS3N",
          ShoppingCartBreadcrumbs: "_2FKdJT3nRLNX_ue4Zj-qdK",
          CurrentBreadcrumb: "_3TtUDn-J9j6rkwHqjT-i4Y",
          ShoppingCartModal: "_28yxHQw3ZhIBbVa9EZ27Vo",
          ShoppingCartModalBtns: "_1qRagOpQN0EH1x4-13UjR5",
          FooterNoticesHeader: "_8oyM41lAqEbIWSdjhPxzd",
          MustFix: "_3h66W1co-LupmeBf9p-avb",
          FooterNotice: "LXZhw7nTAlKyny-hrKcX9",
          NoticeIndex: "_3GJopp-lG4ZnUYB5mqk2q0",
          CartFooter: "_1Sdz1qnoKoD9eEPpC340Yj",
          NavButtons: "pp99Du2IR2EJ9UsjKcrRQ",
          Button: "_1rk1xUIAHMcMMDm4jz3MOM",
          CartSummaryBtn: "_1OKOHubCISYxpyNw0_nSgh",
          BetaNotice: "_1DTyDw3G0f4gmhjAvr_MGb",
          Text: "I4Bz94kh1lGOH1KrPzxzk",
          BackgroundImage: "FaiD8bJRAZ-HoNo0VvLOO",
          HeaderNotices: "_3SXN1YgsAs-4iju4Oo7cx5",
          ErrorModalContent: "_1Fli53rt96SoYErpk1TqAg",
          ErrorModalMessage: "vNpgPsE5lRrVJ55wTdc1i",
          ErrorModalBottom: "_5g0iBBKqtjiGHu5VHzz1h",
          ErrorModalCode: "_34Q7Jyhi9BetqDtEOzt-26",
        };
      },
      71460: (V) => {
        V.exports = { UserCountrySelector: "_1G8JdfmCwhonn-pZk-tfwP" };
      },
      61738: (V, X, t) => {
        var e = {
          "./af": 30911,
          "./af.js": 30911,
          "./ar": 63595,
          "./ar-dz": 99358,
          "./ar-dz.js": 99358,
          "./ar-kw": 46830,
          "./ar-kw.js": 46830,
          "./ar-ly": 26067,
          "./ar-ly.js": 26067,
          "./ar-ma": 64154,
          "./ar-ma.js": 64154,
          "./ar-ps": 90753,
          "./ar-ps.js": 90753,
          "./ar-sa": 53616,
          "./ar-sa.js": 53616,
          "./ar-tn": 19026,
          "./ar-tn.js": 19026,
          "./ar.js": 63595,
          "./az": 87043,
          "./az.js": 87043,
          "./be": 28437,
          "./be.js": 28437,
          "./bg": 29843,
          "./bg.js": 29843,
          "./bm": 39421,
          "./bm.js": 39421,
          "./bn": 41300,
          "./bn-bd": 54487,
          "./bn-bd.js": 54487,
          "./bn.js": 41300,
          "./bo": 40827,
          "./bo.js": 40827,
          "./br": 35120,
          "./br.js": 35120,
          "./bs": 41991,
          "./bs.js": 41991,
          "./ca": 47504,
          "./ca.js": 47504,
          "./cs": 98346,
          "./cs.js": 98346,
          "./cv": 17525,
          "./cv.js": 17525,
          "./cy": 80872,
          "./cy.js": 80872,
          "./da": 48787,
          "./da.js": 48787,
          "./de": 30199,
          "./de-at": 33461,
          "./de-at.js": 33461,
          "./de-ch": 97995,
          "./de-ch.js": 97995,
          "./de.js": 30199,
          "./dv": 14682,
          "./dv.js": 14682,
          "./el": 52549,
          "./el.js": 52549,
          "./en-au": 5706,
          "./en-au.js": 5706,
          "./en-ca": 50584,
          "./en-ca.js": 50584,
          "./en-gb": 41685,
          "./en-gb.js": 41685,
          "./en-ie": 32050,
          "./en-ie.js": 32050,
          "./en-il": 35545,
          "./en-il.js": 35545,
          "./en-in": 42551,
          "./en-in.js": 42551,
          "./en-nz": 10620,
          "./en-nz.js": 10620,
          "./en-sg": 16222,
          "./en-sg.js": 16222,
          "./eo": 88124,
          "./eo.js": 88124,
          "./es": 59784,
          "./es-do": 30300,
          "./es-do.js": 30300,
          "./es-mx": 47292,
          "./es-mx.js": 47292,
          "./es-us": 36469,
          "./es-us.js": 36469,
          "./es.js": 59784,
          "./et": 56349,
          "./et.js": 56349,
          "./eu": 6782,
          "./eu.js": 6782,
          "./fa": 86749,
          "./fa.js": 86749,
          "./fi": 52469,
          "./fi.js": 52469,
          "./fil": 2989,
          "./fil.js": 2989,
          "./fo": 50743,
          "./fo.js": 50743,
          "./fr": 34916,
          "./fr-ca": 96853,
          "./fr-ca.js": 96853,
          "./fr-ch": 81566,
          "./fr-ch.js": 81566,
          "./fr.js": 34916,
          "./fy": 82949,
          "./fy.js": 82949,
          "./ga": 80932,
          "./ga.js": 80932,
          "./gd": 82671,
          "./gd.js": 82671,
          "./gl": 95687,
          "./gl.js": 95687,
          "./gom-deva": 67330,
          "./gom-deva.js": 67330,
          "./gom-latn": 7021,
          "./gom-latn.js": 7021,
          "./gu": 78728,
          "./gu.js": 78728,
          "./he": 28211,
          "./he.js": 28211,
          "./hi": 15487,
          "./hi.js": 15487,
          "./hr": 94106,
          "./hr.js": 94106,
          "./hu": 14147,
          "./hu.js": 14147,
          "./hy-am": 23862,
          "./hy-am.js": 23862,
          "./id": 78825,
          "./id.js": 78825,
          "./is": 57612,
          "./is.js": 57612,
          "./it": 9497,
          "./it-ch": 75653,
          "./it-ch.js": 75653,
          "./it.js": 9497,
          "./ja": 2209,
          "./ja.js": 2209,
          "./jv": 85668,
          "./jv.js": 85668,
          "./ka": 6904,
          "./ka.js": 6904,
          "./kk": 2138,
          "./kk.js": 2138,
          "./km": 81660,
          "./km.js": 81660,
          "./kn": 88613,
          "./kn.js": 88613,
          "./ko": 57894,
          "./ko.js": 57894,
          "./ku": 28468,
          "./ku-kmr": 57123,
          "./ku-kmr.js": 57123,
          "./ku.js": 28468,
          "./ky": 91808,
          "./ky.js": 91808,
          "./lb": 47070,
          "./lb.js": 47070,
          "./lo": 56505,
          "./lo.js": 56505,
          "./lt": 53656,
          "./lt.js": 53656,
          "./lv": 83746,
          "./lv.js": 83746,
          "./me": 42486,
          "./me.js": 42486,
          "./mi": 82,
          "./mi.js": 82,
          "./mk": 14792,
          "./mk.js": 14792,
          "./ml": 10845,
          "./ml.js": 10845,
          "./mn": 46939,
          "./mn.js": 46939,
          "./mr": 5575,
          "./mr.js": 5575,
          "./ms": 81424,
          "./ms-my": 43179,
          "./ms-my.js": 43179,
          "./ms.js": 81424,
          "./mt": 30341,
          "./mt.js": 30341,
          "./my": 72834,
          "./my.js": 72834,
          "./nb": 75292,
          "./nb.js": 75292,
          "./ne": 23753,
          "./ne.js": 23753,
          "./nl": 53922,
          "./nl-be": 77542,
          "./nl-be.js": 77542,
          "./nl.js": 53922,
          "./nn": 81304,
          "./nn.js": 81304,
          "./oc-lnc": 41156,
          "./oc-lnc.js": 41156,
          "./pa-in": 17851,
          "./pa-in.js": 17851,
          "./pl": 66636,
          "./pl.js": 66636,
          "./pt": 13252,
          "./pt-br": 95189,
          "./pt-br.js": 95189,
          "./pt.js": 13252,
          "./ro": 5451,
          "./ro.js": 5451,
          "./ru": 981,
          "./ru.js": 981,
          "./sd": 49139,
          "./sd.js": 49139,
          "./se": 24684,
          "./se.js": 24684,
          "./si": 85448,
          "./si.js": 85448,
          "./sk": 61682,
          "./sk.js": 61682,
          "./sl": 17595,
          "./sl.js": 17595,
          "./sq": 61360,
          "./sq.js": 61360,
          "./sr": 45897,
          "./sr-cyrl": 80616,
          "./sr-cyrl.js": 80616,
          "./sr.js": 45897,
          "./ss": 15034,
          "./ss.js": 15034,
          "./sv": 78213,
          "./sv.js": 78213,
          "./sw": 47494,
          "./sw.js": 47494,
          "./ta": 48387,
          "./ta.js": 48387,
          "./te": 90951,
          "./te.js": 90951,
          "./tet": 83675,
          "./tet.js": 83675,
          "./tg": 99753,
          "./tg.js": 99753,
          "./th": 59844,
          "./th.js": 59844,
          "./tk": 84429,
          "./tk.js": 84429,
          "./tl-ph": 54645,
          "./tl-ph.js": 54645,
          "./tlh": 56946,
          "./tlh.js": 56946,
          "./tr": 8630,
          "./tr.js": 8630,
          "./tzl": 79480,
          "./tzl.js": 79480,
          "./tzm": 13839,
          "./tzm-latn": 36313,
          "./tzm-latn.js": 36313,
          "./tzm.js": 13839,
          "./ug-cn": 26648,
          "./ug-cn.js": 26648,
          "./uk": 24192,
          "./uk.js": 24192,
          "./ur": 8335,
          "./ur.js": 8335,
          "./uz": 21351,
          "./uz-latn": 60785,
          "./uz-latn.js": 60785,
          "./uz.js": 21351,
          "./vi": 9541,
          "./vi.js": 9541,
          "./x-pseudo": 309,
          "./x-pseudo.js": 309,
          "./yo": 21512,
          "./yo.js": 21512,
          "./zh-cn": 98562,
          "./zh-cn.js": 98562,
          "./zh-hk": 7374,
          "./zh-hk.js": 7374,
          "./zh-mo": 87107,
          "./zh-mo.js": 87107,
          "./zh-tw": 34518,
          "./zh-tw.js": 34518,
        };
        function A(f) {
          var R = M(f);
          return t(R);
        }
        function M(f) {
          if (!t.o(e, f)) {
            var R = new Error("Cannot find module '" + f + "'");
            throw ((R.code = "MODULE_NOT_FOUND"), R);
          }
          return e[f];
        }
        (A.keys = function () {
          return Object.keys(e);
        }),
          (A.resolve = M),
          (V.exports = A),
          (A.id = 61738);
      },
      44894: (V, X, t) => {
        "use strict";
        t.d(X, { A: () => e });
        const e =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcJJREFUeNqkUz1PAkEQfStggjESejU0GozlGqn8SGywkYIYY0IsaLCwIBTQUN5fMLGm8S8QSWwslVAYjAlUBEJDhCgWwp3nzN6eHqIVl8zN7rx5b+dm9oRt25jlmcOMj59f10JAkPcBcXIGWdECyqYn6TfGdZ9S9d4K4gQYx4WCtJzE+G/sKJudwpQABUGnGSf5vKzX60jmctL8SYzz+iCdls1mEzuplMIsLSC4iSUh1ClUlpHIZGStVkM0GsVNqVRlIJZIyG63i1AohMdKpUrZRQqXz4j7LWA7VSiR/WRSNhsNRRgOh+i02wgGg3hrtRSZelLmI6cExs7nKJGVtTX50uupMn0+H157PUWmZpYDXLoWUFPo6MC87jivx4MBFtxOWZYS11VipNdT98DWDVsPh2XQNLFIMdc4xpg9OZ3JMdIpRowSXVKt36+yuXvGxn+N0XS+3zj0kG+JSPEi261H5FCLmN9lUyNWyZ+Qag54eA6Hbfa8j1A88g+2qrlqCkKIZdovbAG7m8D5E3B5D9xR7IPsk/u7DextABd14OrBwd6J23YFligQ0IPwXE7lbedXUAPya5yHMiLuq5j1d/4SYAAj3NATBGE4PgAAAABJRU5ErkJggg==";
      },
    },
  ]);
})();
