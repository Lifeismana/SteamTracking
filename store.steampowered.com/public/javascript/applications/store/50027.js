/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [50027],
    {
      94381: (G, Y, a) => {
        "use strict";
        a.d(Y, { S: () => Q });
        var e = a(7850),
          S = a(68031),
          P = a(31857);
        function E(y) {
          return (0, e.jsx)(P.I, {
            ...y,
            viewBox: 16,
            children: (0, e.jsx)("path", {
              d: "M13.8182 1.94629L5.77816 9.98184L2.40483 6.61296L0.835938 8.18184L5.77816 13.1285L15.387 3.51518L13.8182 1.94629Z",
              fill: "currentColor",
            }),
          });
        }
        var v = a(21895),
          k = a(64238),
          _ = a.n(k),
          z = a(80549);
        function Q(y) {
          const {
              checked: W,
              onChange: ee,
              disabled: Z,
              children: K,
              ref: C,
              variant: O,
              color: N,
              align: te = "center",
              icon: R,
              ...r
            } = y,
            d = W === "indeterminate",
            g = R ?? (d ? l : E),
            I = () => {
              Z || (ee && ee(d ? !0 : !W));
            },
            F = (D) => {
              Z ||
                (D.key === " " &&
                  (I(), D.preventDefault(), D.stopPropagation()));
            },
            h = (0, z.f)("Checkbox", O);
          return (0, e.jsxs)(S.s, {
            align: te,
            ref: C,
            role: "checkbox",
            "aria-checked": d ? "mixed" : W,
            "data-state": M(W),
            className: _()(v.Root, v[`Variant-${h}`], Z && v.Disabled),
            onClick: I,
            tabIndex: 0,
            onKeyDown: F,
            cursor: "default",
            "aria-disabled": Z,
            "data-accent-color": N,
            ...r,
            children: [
              (0, e.jsx)("div", {
                className: v.Checkbox,
                children: W && (0, e.jsx)(g, { className: v.Icon }),
              }),
              K,
            ],
          });
        }
        function M(y) {
          return y === "indeterminate" ? y : y ? "checked" : "unchecked";
        }
        function l(y) {
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
      84909: (G, Y, a) => {
        "use strict";
        a.d(Y, { AM: () => F, Pr: () => g });
        var e = a(7850),
          S = a(90626),
          P = a(73788),
          E = a(8083),
          v = a(94621),
          k = a(18938),
          _ = a(24660),
          z = a(38566),
          Q = a(54130),
          M = a(71742),
          l = a(64238),
          y = a.n(l),
          W = a(3877),
          ee = a(3166),
          Z = a(28020);
        const K = (0, S.createContext)(null);
        function C(h) {
          const { children: D, ...A } = h,
            w = d(A);
          return (0, e.jsx)(K.Provider, { value: w, children: D });
        }
        function O(h) {
          const { children: D } = h,
            A = S.Children.only(D),
            w = (0, S.useContext)(K);
          return A
            ? w
              ? (0, S.cloneElement)(A, {
                  ...w.getReferenceProps(A.props),
                  ref: (0, k.XB)(A.props.ref, w.floating.refs.setReference),
                })
              : (console.error(
                  "<PopoverAnchor> must be a child of <PopoverRoot>.",
                ),
                null)
            : null;
        }
        function N(h) {
          const { children: D, className: A, ref: w, label: H } = h,
            V = (0, S.useContext)(K),
            X = (0, P.SV)([w, V?.floating.refs.setFloating]);
          if (!V)
            return (
              console.error(
                "<Popover.Positioner> must be a child of <Popover.Root>.",
              ),
              null
            );
          if (!V.open) return null;
          let q = S.Children.only(D),
            ae = S.Fragment;
          return (
            q.type == F.FocusManager &&
              ((q = S.Children.only(q.props.children)), (ae = te)),
            (0, e.jsx)(ae, {
              children: (0, e.jsx)(Z.HF, {
                presentation: V.presentation,
                sizing: V.sizing,
                floatingRef: X,
                floatingProps: V.getFloatingProps(),
                floatingStyles: V.floating.floatingStyles,
                referenceElement: V.floating.elements.domReference,
                className: y()((0, W.T)(), A),
                label: H,
                children: q,
              }),
            })
          );
        }
        function te(h) {
          return (0, ee.Qn)()
            ? (0, e.jsx)(R, { ...h })
            : (0, e.jsx)(r, { ...h });
        }
        function R(h) {
          const { children: D } = h,
            A = (0, S.useContext)(K);
          (0, M.wT)(
            !!A,
            "<Popover.Positioner> must be a child of <Popover.Root>.",
          );
          const w = () => A.floating.context.onOpenChange(!1),
            H = S.useRef(void 0);
          return (
            (0, _.O7)(H, !0, !0),
            (0, e.jsx)(z.D6, {
              navID: "Popover",
              onCancelButton: w,
              modal: !0,
              navTreeRef: H,
              children: (0, e.jsx)("div", {
                style: { display: "contents" },
                children: (0, e.jsx)(Q.q, { children: D }),
              }),
            })
          );
        }
        function r(h) {
          const { children: D } = h,
            A = (0, S.useContext)(K);
          return (
            (0, M.wT)(
              !!A,
              "<Popover.Positioner> must be a child of <Popover.Root>.",
            ),
            (0, e.jsx)(P.s3, {
              context: A.floating.context,
              initialFocus: -1,
              returnFocus: !1,
              children: D,
            })
          );
        }
        function d(h) {
          const {
            open: D,
            interactions: A = {},
            width: w,
            maxHeight: H,
            gutter: V,
            scroll: X,
          } = h;
          let q = D;
          const ae = (0, Z.Pr)(h.presentation),
            $ = g(h, q, ae),
            me = { enabled: !!A.click },
            ue = typeof A.click == "function" ? A.click(me) : me,
            fe = (0, P.kp)($.context, ue),
            Ce = { enabled: !!A.focus },
            pe = typeof A.focus == "function" ? A.focus(Ce) : Ce,
            he = (0, P.iQ)($.context, pe),
            ve = { handleClose: (0, P.iB)() },
            Ae = typeof A.hover == "function" ? A.hover(ve) : ve,
            De = (0, P.Mk)($.context, { enabled: !!A.hover, ...Ae }),
            ce = (0, P.s9)($.context),
            { getFloatingProps: xe, getReferenceProps: _e } = (0, P.bv)([
              fe,
              he,
              De,
              ce,
            ]);
          return {
            floating: $,
            getFloatingProps: xe,
            getReferenceProps: _e,
            open: q,
            presentation: ae,
            sizing: { width: w, maxHeight: H, gutter: V, scroll: X },
          };
        }
        function g(h, D, A) {
          const { onOpenChange: w, placement: H } = h,
            V = A === "anchor";
          return (0, P.we)({
            open: D,
            onOpenChange: w,
            middleware: V ? I(h) : [],
            whileElementsMounted: V ? E.ll : void 0,
            placement: H && typeof H == "object" ? H.initial : H,
            strategy: "fixed",
            platform: {
              ...E.iD,
              getOffsetParent: (X) => X?.ownerDocument?.defaultView ?? window,
            },
          });
        }
        function I(h) {
          const { gutter: D = 0, placement: A } = h,
            w = [],
            H = A && typeof A == "object";
          return (
            H && A.offset
              ? w.push((0, v.cY)(A.offset))
              : (!H || A.offset === void 0) && w.push((0, v.cY)(2)),
            H && A.flip
              ? w.push((0, v.UU)(A.flip))
              : (!H || A.flip === void 0) && w.push((0, v.UU)()),
            H && A.shift
              ? w.push((0, v.BN)(A.shift))
              : (!H || A.shift === void 0) && w.push((0, v.BN)()),
            w.push(
              (0, v.Ej)({
                apply: (V) => {
                  const { rects: X, elements: q, availableHeight: ae } = V,
                    $ = {
                      boxSizing: "border-box",
                      zIndex: "1",
                      "-webkit-app-region": "no-drag",
                    };
                  switch ((h.scroll && ($.overflowY = "auto"), h.width)) {
                    case "target": {
                      $.width = `${X.reference.width}px`;
                      break;
                    }
                    case "content": {
                      $.width = `${X.floating.width}px`;
                      break;
                    }
                    case "dropdown": {
                      let ue = X.reference.width;
                      X.floating.width > ue &&
                        ue < 200 &&
                        (ue = X.floating.width),
                        ($.width = `${ue}px`);
                    }
                  }
                  typeof h.width == "function" &&
                    ($.width = h.width({
                      unContentWidth: X.floating.width,
                      unTargetWidth: X.reference.width,
                    }));
                  const me =
                    typeof D == "number" ? `${D}px` : `var(--spacing-${D})`;
                  typeof h.maxHeight == "function"
                    ? ($.maxHeight = h.maxHeight({
                        unAvailableHeight: ae,
                        gutter: me,
                      }))
                    : typeof h.maxHeight == "number"
                      ? ($.maxHeight = `min( calc( ${ae}px - ${me} ), ${h.maxHeight}px )`)
                      : typeof D == "number"
                        ? ($.maxHeight = `${ae - D}px`)
                        : ($.maxHeight = `calc( ${ae}px - var(--spacing-${D}) )`),
                    Object.assign(q.floating.style, $),
                    q.floating.style.setProperty(
                      "--popover-max-height",
                      $.maxHeight,
                    );
                },
              }),
            ),
            w
          );
        }
        const F = { Root: C, Anchor: O, Positioner: N, FocusManager: te };
      },
      31857: (G, Y, a) => {
        "use strict";
        a.d(Y, { I: () => k });
        var e = a(7850),
          S = a(69289),
          P = a(8928),
          E = a(16619),
          v = a.n(E);
        function k(l) {
          return (0, e.jsx)("svg", { ...Q(l) });
        }
        const _ = [
          ...P.L,
          {
            prop: "size",
            responsive: !0,
            className: (l) => E[`IconSize-${l}`],
          },
          {
            prop: "color",
            className: E.Color,
            cssProperty: (l) => ["--icon-color", z(l)],
          },
          {
            prop: "hitSlop",
            className: E.HitSlop,
            cssProperty: (l) => [
              "--hit-slop-custom",
              typeof l == "string" ? l : "",
            ],
          },
          P.h.find(({ prop: l }) => l === "cursor"),
        ];
        function z(l) {
          return !l || l[0] === "#" ? l : (0, S.w7)(l);
        }
        function Q(l) {
          const { viewBox: y, ...W } = l,
            Z = { className: W.size ? void 0 : E.IconSizeDefault, ...W };
          return y && (Z.viewBox = M(y)), (0, S.mz)(Z, _);
        }
        function M(l) {
          if (l)
            return typeof l == "number"
              ? `0 0 ${l} ${l}`
              : typeof l == "string"
                ? l
                : `0 0 ${l.width} ${l.height}`;
        }
      },
      12204: (G, Y, a) => {
        "use strict";
        a.d(Y, { V: () => E });
        var e = a(7850),
          S = a(31857);
        const P = {
          up: "rotate( 180, 10, 10 )",
          left: "rotate( 90, 10, 10 )",
          right: "rotate( 270, 10, 10 )",
        };
        function E(v) {
          const { direction: k = "down" } = v,
            _ = P[k];
          return (0, e.jsx)(S.I, {
            ...v,
            viewBox: 20,
            children: (0, e.jsx)("path", {
              transform: _,
              d: "M5.14541 6.89977L10.0063 12.2027L14.8671 6.89977C15.3557 6.36674 16.145 6.36674 16.6336 6.89977C17.1221 7.4328 17.1221 8.29385 16.6336 8.82688L10.8832 15.1002C10.3946 15.6333 9.60537 15.6333 9.11678 15.1002L3.36644 8.82688C2.87785 8.29385 2.87785 7.4328 3.36644 6.89977C3.85503 6.38041 4.65682 6.36674 5.14541 6.89977Z",
              fill: "currentColor",
            }),
          });
        }
      },
      59432: (G, Y, a) => {
        "use strict";
        a.d(Y, { Gw: () => v, Lk: () => k, ai: () => E, mm: () => P });
        var e = a(14947);
        const S = e.sH.box(void 0);
        function P() {
          return S.get();
        }
        function E(_) {
          (0, e.h5)(() => S.set(_));
        }
        function v() {
          const _ = S.get();
          return _ || Math.floor(Date.now() / 1e3);
        }
        function k() {
          const _ = S.get();
          return _ ? new Date(_ * 1e3) : new Date();
        }
      },
      79083: (G, Y, a) => {
        "use strict";
        a.d(Y, { m: () => v, U: () => k });
        var e = a(7850),
          S = a(36118),
          P = ((_) => (
            (_.k_ECutArrowStyle = "single"),
            (_.k_EDoubleArrowStyle = "double"),
            (_.k_EThickChevron = "chevron"),
            (_.k_EFilledArrow = "filled"),
            (_.k_EPointyArrow = "pointy"),
            _
          ))(P || {}),
          E = ((_) => (
            (_.k_EPillCrumb = "pill"),
            (_.k_ECircularCrumb = "circle"),
            (_.k_ESquareCrumb = "square"),
            _
          ))(E || {});
        function v(_) {
          const { arrowFill: z, arrowStyle: Q, direction: M } = _;
          switch (Q) {
            default:
            case P.k_ECutArrowStyle: {
              const l = M == "right" ? 0 : 180;
              return (0, e.jsx)(S.uMb, {
                fill: z || "white",
                role: "presentation",
                angle: l,
              });
            }
            case P.k_EDoubleArrowStyle: {
              const l = M == "right" ? 180 : 0;
              return (0, e.jsx)(S.F2T, {
                fill: z || "white",
                role: "presentation",
                angle: l,
              });
            }
            case P.k_EThickChevron: {
              const l = M == "right" ? 0 : 180;
              return (0, e.jsx)(S.l8x, {
                fill: z || "white",
                role: "presentation",
                angle: l,
              });
            }
            case P.k_EFilledArrow: {
              const l = M == "right" ? 90 : 270;
              return (0, e.jsx)(S.V5W, {
                fill: z || "white",
                role: "presentation",
                angle: l,
              });
            }
            case P.k_EPointyArrow:
              return (0, e.jsx)(S.L0X, {
                fill: z || "white",
                role: "presentation",
                direction: M || "left",
              });
          }
        }
        function k(_) {
          const {
              bIsActive: z,
              breadcrumbActiveColor: Q,
              breadcrumbColor: M,
              breadcrumbStyle: l,
            } = _,
            y = z ? Q || "#FFFFFF" : M || "#606974";
          switch (l) {
            default:
            case E.k_EPillCrumb:
              return (0, e.jsx)(S.IGf, { fill: y, role: "presentation" });
            case E.k_ECircularCrumb:
              return (0, e.jsx)(S.az8, { fill: y, role: "presentation" });
            case E.k_ESquareCrumb:
              return (0, e.jsx)(S.koA, { fill: y, role: "presentation" });
          }
        }
      },
      46943: (G, Y, a) => {
        "use strict";
        a.d(Y, { Ul: () => O, xz: () => R, $Y: () => te, i8: () => N });
        var e = a(7850),
          S = a(90626),
          P = a(75844),
          E = a(5858),
          v = a(36707),
          k = a(3166),
          _ = a(13465);
        const z =
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAIAAgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/P4mW5nmllmeSR3LMzMSSc1a07R73V72KzsILi9u5TiOC2RpJHPoFGSarQ/ef6n+de4fAn9oaL4D+DfGX9i6Uf8AhO9XSKDT9eZY3WxiDZcBGByTkn0JCZBxQB41qeiX+iXslnqNtdWF3H9+3uo2jkX6q2CKpgy208MsUzxyI4ZWViCDmvsr9rrUdT1j9nb4T6h8RBbH4qXUs0zMsSxXJ04hivnKoAU5MPGBg7uM7q+NpvvJ9R/OgAh+8/1P867T4POI/iz4Mc6U+u7NZtG/suPbuu8TKfKG4hct93njnmuKIltp5opYXjkRyrKykEHNWbDVbvSr63vbKaezvLeRZYbi3ZkkidTlWVhyCCMgjpQB6l+1F411nx58dPFWpa5a3mnXaXP2ZNOvXVpLKNBhYflJUY5PB5JJ6k15LN95PqP51a1PWr7WtQnvtRuLm/vrhzJNc3TtJLIx6lmbJJ9zVQCW5nhiiheSR3CqqqSSc0Af/9k=",
          Q =
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gODAK/9sAQwAGBAUGBQQGBgUGBwcGCAoQCgoJCQoUDg8MEBcUGBgXFBYWGh0lHxobIxwWFiAsICMmJykqKRkfLTAtKDAlKCko/9sAQwEHBwcKCAoTCgoTKBoWGigoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo/8AAEQgAQABAAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8Inmk8+T94/3j/EfWmedJ/z0f/vo0T/6+T/eP86ZQA/zpP8Ano//AH0aPOk/56P/AN9GmVo6Loeq65M0Wj6ddXrr94QRF9v1I6fjQBR86T/no/8A30aPOk/56P8A99GtHW/Dus6GV/tjS7yyD8K00RVW+h6GsugB/nSf89H/AO+jT4JpPPj/AHj/AHh/EfWoafB/r4/94fzoAJ/9fJ/vH+dMp8/+vk/3j/OmUAXdE099W1mw06Jgsl3PHApPYswUH9a+qPF3iHSPhF4S0+003TxK0hMcEAbZvIA3SO2OvIz6k18nW88ttcRz28jxTRMHSRGKsrA5BBHQg1b1TWdT1fy/7V1G8vfLzs+0TNJtz1xknHQUAfUXw+8c6Z8UdN1HS9V0xIpUTM1s7eYkiE43KcAgg/lxg180+NtEHhzxZqmkqxdLWcojHqUPK598EV9CfBbwpF4G8J3fiLxA4trm5hEsnmceRCOQD/tHqR9B1r568a63/wAJH4r1TVghRLqYuinqE6KD74AoAxafB/r4/wDeH86ZT4P9fH/vD+dABP8A6+T/AHj/ADplPn/18n+8f50ygArt/gtpltq/xK0e2vYxJArPMUYZDFEZhn2yBXEV0/w203VNX8YWdloOoHTtQkWQx3IZl2gISeV55AI/GgD1H9pvxPdi/s/DcDGOz8pbqfHWRizBQfYbc/U+1eD12PxW0fWtE8Tpa+I9UOqXpt0cTl2bCEthctz1B/OuOoAKfB/r4/8AeH86ZT4P9fH/ALw/nQAT/wCvk/3j/OmVNPDJ58n7t/vH+E+tM8mT/nm//fJoAZV7Q9Xv9C1KLUNJuGtryMEJIoBIyCD1BHQmqnkyf883/wC+TR5Mn/PN/wDvk0AaHiHXtT8RX4vdau2u7oIIxIygHaCSBwB6msyn+TJ/zzf/AL5NHkyf883/AO+TQAynwf6+P/eH86PJk/55v/3yafBDJ58f7t/vD+E+tAH/2Q==",
          M =
            a.p +
            "images/applications/store/avatar_default_full.jpg?v=valveisgoodatcaching";
        var l = a(43047),
          y = a.n(l),
          W = a(71742),
          ee = Object.defineProperty,
          Z = Object.getOwnPropertyDescriptor,
          K = (r, d, g, I) => {
            for (
              var F = I > 1 ? void 0 : I ? Z(d, g) : d, h = r.length - 1, D;
              h >= 0;
              h--
            )
              (D = r[h]) && (F = (I ? D(d, g, F) : D(F)) || F);
            return I && F && ee(d, g, F), F;
          };
        function C(r) {
          switch (r) {
            case "X-Small":
            case "Small":
              return z;
            case "Medium":
            case "MediumLarge":
              return Q;
            case "Large":
            case "X-Large":
            case "FillArea":
              return M;
            default:
              return (0, W.z_)(r, `Unhandled size ${r}`), Q;
          }
        }
        const O = S.memo(function (d) {
          const {
              strAvatarURL: g,
              size: I = "Medium",
              className: F,
              statusStyle: h,
              statusPosition: D,
              children: A,
              ...w
            } = d,
            H = S.useMemo(() => {
              const V = [];
              return g && V.push(g), V.push(C(I)), V;
            }, [g, I]);
          return (0, e.jsxs)("div", {
            className: (0, v.A)(
              y().avatarHolder,
              "avatarHolder",
              "no-drag",
              I,
              F,
            ),
            ...w,
            children: [
              (0, e.jsx)("div", {
                className: (0, v.A)(y().avatarStatus, "avatarStatus", D),
                style: h,
              }),
              (0, e.jsx)(_.c, {
                className: (0, v.A)(y().avatar, "avatar"),
                rgSources: H,
                draggable: !1,
              }),
              A,
            ],
          });
        });
        let N = class extends S.Component {
          render() {
            const {
              persona: r,
              size: d = "Medium",
              animatedAvatar: g,
              className: I,
              strBackupAvatarURL: F,
              ...h
            } = this.props;
            let D = "";
            return (
              g && g.image_small && g.image_small.length != 0
                ? (D = k.TS.MEDIA_CDN_COMMUNITY_URL + "images/" + g.image_small)
                : r
                  ? ((D = r.avatar_url_medium),
                    d == "Small" || d == "X-Small"
                      ? (D = r.avatar_url)
                      : (d == "Large" || d == "X-Large" || d == "FillArea") &&
                        (D = r.avatar_url_full))
                  : F && (D = F),
              (0, e.jsx)(O, {
                strAvatarURL: D,
                size: d,
                className: (0, v.A)((0, E.rO)(r), I),
                ...h,
              })
            );
          }
        };
        N = K([P.PA], N);
        const te = (0, P.PA)((r) => {
          const {
            profileItem: d,
            className: g,
            bDisableAnimation: I,
            ...F
          } = r;
          if (!d || !d.image_small || d.image_small.length == 0) return null;
          let h = I ? d.image_large : d.image_small;
          return (
            h || (h = d.image_small),
            h.startsWith("https://") ||
              (h = k.TS.MEDIA_CDN_COMMUNITY_URL + "images/" + h),
            (0, e.jsx)("div", {
              className: (0, v.A)(y().avatarFrame, g, "avatarFrame"),
              ...F,
              children: (0, e.jsx)("img", {
                className: y().avatarFrameImg,
                src: h,
              }),
            })
          );
        });
        let R = class extends S.Component {
          m_timer;
          constructor(r) {
            super(r),
              (this.state = { bAnimate: this.props.loopDuration != "None" }),
              (this.m_timer = 0);
          }
          componentDidMount() {
            this.props.bParentHovered || this.SetupAnimationTimer();
          }
          SetupAnimationTimer() {
            let r = 0;
            switch (this.props.loopDuration) {
              case "Short":
                r = 2500;
                break;
              case "Medium":
                r = 5e3;
                break;
              case "Long":
                r = 1e4;
                break;
            }
            r != 0 &&
              (this.setState({ bAnimate: this.props.loopDuration != "None" }),
              (this.m_timer = window.setTimeout(
                () => this.setState({ bAnimate: !1 }),
                r,
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
          componentDidUpdate(r) {
            this.props.loopDuration != r.loopDuration &&
              (this.props.loopDuration == "None"
                ? (this.setState({ bAnimate: !1 }), this.StopAnimationTimer())
                : this.props.loopDuration == "Infinite"
                  ? (this.setState({ bAnimate: !0 }), this.StopAnimationTimer())
                  : (this.setState({ bAnimate: !0 }),
                    this.SetupAnimationTimer())),
              this.props.bParentHovered != r.bParentHovered &&
                (this.props.bParentHovered &&
                this.props.loopDuration != "None" &&
                this.props.loopDuration != "Infinite"
                  ? (this.setState({ bAnimate: !0 }), this.StopAnimationTimer())
                  : this.state.bAnimate && this.SetupAnimationTimer());
          }
          render() {
            let {
              loopDuration: r,
              animatedAvatar: d,
              avatarFrame: g,
              children: I,
              style: F,
              bLimitProfileFrameAnimationTime: h,
              bParentHovered: D,
              ...A
            } = this.props;
            A.onClick && (F = { ...F, cursor: "pointer" });
            const w = this.state.bAnimate ? (d ?? void 0) : void 0;
            return (0, e.jsx)("div", {
              onMouseEnter: () =>
                this.setState({ bAnimate: this.props.loopDuration != "None" }),
              onMouseLeave: () => this.SetupAnimationTimer(),
              children: (0, e.jsxs)(N, {
                animatedAvatar: w,
                ...A,
                children: [
                  I,
                  (0, e.jsx)(te, {
                    profileItem: g ?? null,
                    bDisableAnimation: h && !this.state.bAnimate,
                  }),
                ],
              }),
            });
          }
        };
        R = K([P.PA], R);
      },
      35098: (G, Y, a) => {
        "use strict";
        a.d(Y, { DW: () => y, js: () => M, mK: () => C, tb: () => K });
        var e = a(90626),
          S = a(80902),
          P = a(54806),
          E = a(99412),
          v = a(68312),
          k = a(15369),
          _ = a(5858),
          z = a(76559),
          Q = a(15860);
        function M(R) {
          const r = (0, v.KV)(),
            d = e.useContext(Z);
          return (0, S.I)(C(d, r, R));
        }
        function l(R) {
          const r = React.useRef(void 0),
            d = M(R);
          return d.data
            ? d
            : (r.current ||
                (r.current = new CPersonaStateImpl(
                  typeof R == "string"
                    ? new CSteamID(R)
                    : CSteamID.InitFromAccountID(R),
                )),
              { ...d, data: r.current });
        }
        function y(R) {
          const r = (0, v.KV)(),
            d = e.useContext(Z);
          return (0, P.E)({ queries: R.map((g) => C(d, r, g)) });
        }
        function W(R) {
          return ReactQueryClient.getQueryData(["PlayerSummary", R]);
        }
        function ee(R) {
          const { loadPersonaState: r, children: d } = R,
            g = React.useMemo(() => ({ loadPersonaState: r }), [r]);
          return React.createElement(Z.Provider, { value: g }, d);
        }
        const Z = e.createContext({
          loadPersonaState: async (R, r) => {
            if (R == null) return null;
            const d = await N(r).load(
              z.b.InitFromAccountID(R).ConvertTo64BitString(),
            );
            return te(z.b.InitFromAccountID(R), d);
          },
        });
        function K() {
          return e.useContext(Z);
        }
        function C(R, r, d) {
          const g = typeof d == "string" ? new z.b(d).GetAccountID() : d;
          return {
            queryKey: ["PlayerSummary", g],
            queryFn: () => R.loadPersonaState(g, r),
            enabled: !!g,
          };
        }
        let O;
        function N(R) {
          return (O ??= (0, Q.c)(R));
        }
        function te(R, r) {
          let d = new _.Z(R);
          const g = r?.public_data,
            I = r?.private_data;
          return (
            (d.m_bInitialized = !!r),
            (d.m_ePersonaState = I?.persona_state ?? E.cU3),
            (d.m_strAvatarHash = g?.sha_digest_avatar
              ? (0, k.Kx)(g.sha_digest_avatar)
              : _.dV),
            (d.m_strPlayerName = g?.persona_name ?? R.ConvertTo64BitString()),
            (d.m_strAccountName = I?.account_name),
            I?.persona_state_flags &&
              (d.m_unPersonaStateFlags = I?.persona_state_flags),
            I?.game_id && (d.m_gameid = I?.game_id),
            I?.game_server_ip_address &&
              (d.m_unGameServerIP = I?.game_server_ip_address),
            I?.lobby_steam_id && (d.m_game_lobby_id = I?.lobby_steam_id),
            I?.game_extra_info && (d.m_strGameExtraInfo = I?.game_extra_info),
            g?.profile_url && (d.m_strProfileURL = g.profile_url),
            d
          );
        }
      },
      84676: (G, Y, a) => {
        "use strict";
        a.d(Y, {
          G6: () => y,
          Gg: () => Z,
          Ow: () => ee,
          Sq: () => Q,
          YM: () => R,
          eR: () => M,
          ik: () => l,
          mZ: () => K,
          t7: () => W,
          zX: () => O,
        });
        var e = a(41735),
          S = a.n(e),
          P = a(90626),
          E = a(72604),
          v = a(78192),
          k = a(30096),
          _ = a(10142);
        function z(r, d, g = !0) {
          const I = g
              ? CStoreItemCache.k_DataRequest_BasicInfo
              : CStoreItemCache.k_DataRequest_CommonOnly,
            F = g || CStoreItemCache.Get().BHasStoreItem(r, d, I) ? r : null,
            [h, D] = y(F, d, I),
            [A, w] = useState(null),
            [H, V] = y(A, d, I);
          useEffect(() => {
            h?.GetAppType() === EStoreAppType.k_EStoreAppType_Demo &&
              w(h.GetParentAppID());
          }, [h]);
          let X = h?.GetShortDescription()
            ? StripBBCodeTags(h.GetShortDescription())
            : "";
          (!X || X.length === 0) &&
            H &&
            (X = H?.GetShortDescription()
              ? StripBBCodeTags(H.GetShortDescription())
              : "");
          const q = D == l && (!A || V == l);
          return [X, q];
        }
        const Q = 1,
          M = 2,
          l = 3;
        function y(r, d, g, I) {
          const F = (0, P.useRef)(void 0),
            h = (0, P.useRef)(void 0),
            D = (0, k.CH)();
          F.current = r;
          const [A, w] = (0, P.useState)(void 0),
            {
              include_assets: H,
              include_release: V,
              include_platforms: X,
              include_all_purchase_options: q,
              include_screenshots: ae,
              include_trailers: $,
              include_ratings: me,
              include_tag_count: ue,
              include_reviews: fe,
              include_basic_info: Ce,
              include_supported_languages: pe,
              include_full_description: he,
              include_included_items: ve,
              include_assets_without_overrides: Ae,
              apply_user_filters: De,
              include_links: ce,
              include_extra_details: xe,
              include_optin_registration_tags: _e,
            } = g;
          if (
            ((0, P.useEffect)(() => {
              const Ie = {
                include_assets: H,
                include_release: V,
                include_platforms: X,
                include_all_purchase_options: q,
                include_screenshots: ae,
                include_trailers: $,
                include_ratings: me,
                include_tag_count: ue,
                include_reviews: fe,
                include_basic_info: Ce,
                include_supported_languages: pe,
                include_full_description: he,
                include_included_items: ve,
                include_assets_without_overrides: Ae,
                apply_user_filters: De,
                include_links: ce,
                include_extra_details: xe,
                include_optin_registration_tags: _e,
              };
              let Ee = null;
              return (
                !r ||
                  r < 0 ||
                  _.A.Get().BHasStoreItem(r, d, Ie) ||
                  (A !== void 0 && I && I == h.current) ||
                  (I !== h.current && (w(void 0), (h.current = I)),
                  (Ee = S().CancelToken.source()),
                  _.A.Get()
                    .QueueStoreItemRequest(r, d, Ie)
                    .then((ke) => {
                      !Ee?.token.reason && F.current === r && w(ke == E.R), D();
                    })),
                () => Ee?.cancel("useStoreItemCache: unmounting")
              );
            }, [
              r,
              d,
              I,
              A,
              H,
              V,
              X,
              q,
              ae,
              $,
              me,
              ue,
              fe,
              Ce,
              pe,
              he,
              ve,
              Ae,
              De,
              ce,
              xe,
              _e,
              D,
            ]),
            !r)
          )
            return [null, M];
          if (A === !1) return [void 0, M];
          if (_.A.Get().BIsStoreItemMissing(r, d)) return [void 0, M];
          if (!_.A.Get().BHasStoreItem(r, d, g)) return [void 0, Q];
          const Se = _.A.Get().GetStoreItemWithLegacyVisibilityCheck(r, d);
          return Se ? [Se, l] : [null, M];
        }
        function W(r, d, g) {
          return y(r, v.c6.qI, d, g);
        }
        function ee(r, d, g) {
          return y(r, v.c6.xO, d, g);
        }
        function Z(r, d, g) {
          return y(r, v.c6.RD, d, g);
        }
        function K(r, d, g) {
          const [I, F] = y(r, d, g);
          let h;
          I?.GetStoreItemType() == v.c6.RD &&
            !I.GetAssets()?.GetHeaderURL() &&
            I?.GetIncludedAppIDs().length == 1 &&
            (h = I.GetIncludedAppIDs()[0]);
          const [D, A] = W(h, g);
          return h && D?.BIsVisible() ? [D, A] : [I, F];
        }
        function C(r, d, g, I) {
          const F = (0, k.CH)(),
            {
              include_assets: h,
              include_release: D,
              include_platforms: A,
              include_all_purchase_options: w,
              include_screenshots: H,
              include_trailers: V,
              include_ratings: X,
              include_tag_count: q,
              include_reviews: ae,
              include_basic_info: $,
              include_supported_languages: me,
              include_full_description: ue,
              include_included_items: fe,
              include_assets_without_overrides: Ce,
              apply_user_filters: pe,
              include_links: he,
              include_extra_details: ve,
              include_optin_registration_tags: Ae,
            } = g;
          return (
            (0, P.useEffect)(() => {
              if (!r || r.length == 0) return;
              const ce = {
                  include_assets: h,
                  include_release: D,
                  include_platforms: A,
                  include_all_purchase_options: w,
                  include_screenshots: H,
                  include_trailers: V,
                  include_ratings: X,
                  include_tag_count: q,
                  include_reviews: ae,
                  include_basic_info: $,
                  include_supported_languages: me,
                  include_full_description: ue,
                  include_included_items: fe,
                  include_assets_without_overrides: Ce,
                  apply_user_filters: pe,
                  include_links: he,
                  include_extra_details: ve,
                  include_optin_registration_tags: Ae,
                },
                xe = r.filter(
                  (Ie) =>
                    !(
                      _.A.Get().BHasStoreItem(Ie, d, ce) ||
                      _.A.Get().BIsStoreItemMissing(Ie, d)
                    ),
                );
              if (xe.length == 0) return;
              const _e = S().CancelToken.source(),
                Se = xe.map((Ie) => _.A.Get().QueueStoreItemRequest(Ie, d, ce));
              return (
                Promise.all(Se).then(() => {
                  _e.token.reason || F();
                }),
                () => _e.cancel("useStoreItemCacheMultiplePackages: unmounting")
              );
            }, [
              r,
              d,
              I,
              F,
              h,
              D,
              A,
              w,
              H,
              V,
              X,
              q,
              ae,
              $,
              me,
              ue,
              fe,
              Ce,
              pe,
              he,
              ve,
              Ae,
            ]),
            r
              ? r.every(
                  (ce) =>
                    _.A.Get().BHasStoreItem(ce, d, g) ||
                    _.A.Get().BIsStoreItemMissing(ce, d),
                )
                ? r.every((ce) =>
                    _.A.Get().GetStoreItemWithLegacyVisibilityCheck(ce, d),
                  )
                  ? l
                  : M
                : Q
              : M
          );
        }
        function O(r, d, g) {
          return C(r, v.c6.qI, d, g);
        }
        function N(r, d, g) {
          return C(r, EStoreItemType.k_EStoreItemType_Bundle, d, g);
        }
        function te(r, d, g) {
          return C(r, EStoreItemType.k_EStoreItemType_Package, d, g);
        }
        function R() {
          P.useEffect(
            () => (
              _.A.Get().SetReturnUnavailableItems(!0),
              () => _.A.Get().SetReturnUnavailableItems(!1)
            ),
            [],
          );
        }
      },
      86390: (G, Y, a) => {
        "use strict";
        a.d(Y, { Cg: () => y, pZ: () => ee, vg: () => W });
        var e = a(7850),
          S = a(90626),
          P = a(88003),
          E = a(18210),
          v = a(3166),
          k = a(34004),
          _ = a(6740),
          z = a(3685),
          Q = a(8059),
          M = a(96538);
        function l(K) {
          return (0, e.jsx)(P.x_, {
            onEscKeypress: K.closeModal,
            bDisableBackgroundDismiss: !0,
            children: (0, e.jsx)(Z, {
              redirectURL: K.redirectURL,
              guestOption: K.guestOption,
            }),
          });
        }
        function y(K) {
          const { redirectURL: C = window.location.href } = K;
          return (0, e.jsx)(M.EN, {
            active: !0,
            children: (0, e.jsx)(l, { redirectURL: C }),
          });
        }
        function W() {
          (0, P.pg)(
            (0, e.jsx)(l, {
              ownerWin: window,
              redirectURL: window.location.href,
            }),
            window,
            { strTitle: (0, E.we)("#Login_SignInTitle") },
          );
        }
        function ee(K, C) {
          (0, P.pg)(
            (0, e.jsx)(l, { ownerWin: window, redirectURL: K, guestOption: C }),
            window,
            { strTitle: (0, E.we)("#Login_SignInTitle") },
          );
        }
        function Z(K) {
          const { redirectURL: C, guestOption: O } = K,
            [N] = (0, S.useState)(
              new z.D(v.TS.WEBAPI_BASE_URL).GetAnonymousServiceTransport(),
            ),
            [te, R] = (0, S.useState)(!1),
            r = (d) => {
              d == Q.wI.k_PrimaryDomainFail ? R(!0) : window.location.assign(C);
            };
          return (0, e.jsx)("div", {
            children: te
              ? (0, e.jsx)(k.Fn, {})
              : (0, e.jsx)(k.YN, {
                  autoFocus: !0,
                  transport: N,
                  platform: _.SS.tS,
                  onComplete: r,
                  redirectUrl: C,
                  theme: "modal",
                  children: O && (0, e.jsx)(k.Mk, { redirectURL: C }),
                }),
          });
        }
      },
      13465: (G, Y, a) => {
        "use strict";
        a.d(Y, { c: () => P });
        var e = a(7850),
          S = a(90626);
        function P(E) {
          const {
              rgSources: v,
              onIncrementalError: k,
              onError: _,
              strAltText: z,
              ref: Q,
              ...M
            } = E,
            [l, y] = S.useState(0),
            W = S.useMemo(() => JSON.stringify(v), [v]),
            [ee, Z] = S.useState(W);
          ee != W && (Z(W), y(0));
          const K = S.useMemo(() => {
              let N = "";
              return (
                v && v.length > l && (N = v[l]),
                N ||
                  (console.warn(
                    "MultiSourceImage created with no image src",
                    E,
                    l,
                  ),
                  (N =
                    "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=")),
                N
              );
            }, [v, l, E]),
            C = S.useCallback(
              (N) => {
                k?.(N, v[l], l);
                const te = l + 1;
                te >= v.length && _ && _(N), te < v.length && y(te);
              },
              [l, _, k, v],
            ),
            O = S.useRef(null);
          return (
            S.useImperativeHandle(
              Q,
              () => ({ imgRef: O, nSourceIndex: l, nSourceLength: v.length }),
              [O, l, v],
            ),
            S.useEffect(() => {
              const N = O.current;
              N?.complete && N.naturalWidth == 0 && (N.src = N.src);
            }, []),
            (0, e.jsx)("img", { ref: O, ...M, src: K, onError: C, alt: z }, ee)
          );
        }
      },
      23366: (G, Y, a) => {
        "use strict";
        a.d(Y, {
          F$: () => K,
          Mn: () => ee,
          S0: () => Z,
          Vh: () => M,
          zJ: () => y,
        });
        var e = a(48366),
          S = a(78280),
          P = a(87913),
          E = a(72604),
          v = a(2289),
          k = a(80902),
          _ = a(4874),
          z = a(98609),
          Q = a(67705);
        function M() {
          return (0, Q.Fd)("cart_config", "application_config");
        }
        function l() {
          return ["shopping_cart", "sale_drop_progress"];
        }
        function y() {
          return (0, k.I)({
            queryKey: l(),
            queryFn: async () => {
              const O = await (
                await fetch(`${z.TS.STORE_BASE_URL}cart/ajaxsaledropprogress`)
              ).json();
              return (
                O.eresult !== E.R &&
                  console.error("Failed to load sale drop progress"),
                O
              );
            },
            enabled: z.iA.logged_in,
          });
        }
        function W(C) {
          return (0, e.c2)(C) || (0, e.kx)(C);
        }
        var ee = ((C) => (
          (C[(C.k_ECanRequest = 0)] = "k_ECanRequest"),
          (C[(C.k_EIsNotChild = 1)] = "k_EIsNotChild"),
          (C[(C.k_EInvalidCartType = 2)] = "k_EInvalidCartType"),
          (C[(C.k_ENonGiftableItemPresent = 3)] = "k_ENonGiftableItemPresent"),
          C
        ))(ee || {});
        function Z() {
          const C = (0, S.j4)(),
            O = (0, _.vo)(),
            N = (0, P.g7)(),
            te = O.isSuccess && O.data.role() == v.PQ.sf,
            R = N.data?.cart_items.some((d) => !d.can_purchase_as_gift);
          let r = 0;
          return te ? (W(C) ? R && (r = 3) : (r = 2)) : (r = 1), [r === 0, r];
        }
        function K() {
          const C = (0, S.j4)(),
            O = (0, _.vo)();
          return O.isSuccess && O.data.role() == v.PQ.s && (0, e.uU)(C);
        }
      },
      49311: (G, Y, a) => {
        "use strict";
        a.r(Y),
          a.d(Y, {
            BaseCartPage: () => et,
            default: () => xs,
            useInitCartLocalization: () => bt,
          });
        var e = a(7850),
          S = a(63088),
          P = a(78280),
          E = a(19298),
          v = a(78192),
          k = a(56925),
          _ = a(64238),
          z = a.n(_),
          Q = a(9843),
          M = a(87913),
          l = a(90626),
          y = a(92757),
          W = a(4874),
          ee = a(67529),
          Z = a(10142),
          K = a(84676),
          C = a(16412),
          O = a(25792),
          N = a(86390),
          te = a(51079),
          R = a(85599),
          r = a(18210),
          d = a(98609),
          g = a(36707),
          I = a(34633);
        function F(n) {
          return (0, e.jsx)("div", {
            className: (0, g.A)(I.CartCard, n.className),
            children: n.children,
          });
        }
        var h = a(23366),
          D = a(32093),
          A = a(98972);
        function w(n) {
          const { cart: t } = n,
            s = H(t);
          if (
            !t ||
            !d.iA.logged_in ||
            !s ||
            (0, D.nA)(d.TS.EREALM) ||
            !s.strSaleName
          )
            return null;
          const {
              cEarned: i,
              pctProgress: o,
              rgPrepurchaseApps: c,
              strFormattedSpendPerDrop: u,
              strSaleName: m,
            } = s,
            f = i > 0,
            p = (0, e.jsx)("div", {
              className: A.Explanation,
              children: (0, r.we)("#Cart_SaleCardDrops_Explanation", m),
            });
          return (0, e.jsxs)(F, {
            className: A.TradingCardContainer,
            children: [
              f &&
                (0, e.jsx)("div", {
                  className: A.EarnedMessage,
                  children: (0, r.Yp)(
                    "#Cart_SaleCardDrops_EarnedMessage",
                    i,
                    m,
                  ),
                }),
              !f && p,
              (0, e.jsxs)("div", {
                className: A.ProgressSection,
                children: [
                  (0, e.jsx)("div", {
                    children: (0, r.we)("#Cart_SaleCardDrops_ProgressLabel"),
                  }),
                  (0, e.jsx)(V, { value: o }),
                  (0, e.jsxs)("div", {
                    className: A.Right,
                    children: [
                      "(",
                      (0, r.we)("#Cart_SaleCardDrops_CardCost", u),
                      ")",
                    ],
                  }),
                ],
              }),
              f && p,
              c.length > 0 &&
                (0, e.jsxs)("div", {
                  className: A.IneligbleList,
                  children: [
                    (0, e.jsx)("p", {
                      children: (0, r.we)(
                        "#Cart_SaleCardDrops_PrepurchaseIneligible",
                        m,
                      ),
                    }),
                    (0, e.jsx)("ul", {
                      children: c.map((j) =>
                        (0, e.jsx)("li", { children: j }, j),
                      ),
                    }),
                  ],
                }),
            ],
          });
        }
        function H(n) {
          const t = (0, h.zJ)();
          if (!n || !t.isSuccess || !t.data?.sale_name) return null;
          const s = new Set();
          let i = 0;
          for (const B of n.cart_items)
            B.subtotal && (i += parseInt(B.subtotal.amount_in_cents));
          const {
              sale_name: o,
              spend_earned_for_next_drop: c,
              spend_needed_for_next_drop: u,
              formatted_spend_per_drop: m,
            } = t.data,
            f = i + c,
            p = Math.floor(f / u),
            j = Math.floor((100 * (f % u)) / u);
          return {
            cEarned: p,
            pctProgress: j,
            strFormattedSpendPerDrop: m,
            rgPrepurchaseApps: Array.from(s),
            strSaleName: o,
          };
        }
        function V(n) {
          const { value: t } = n,
            s = Math.min(100, Math.max(0, t));
          return (0, e.jsx)("div", {
            className: A.ProgressRail,
            children: (0, e.jsx)("div", {
              className: A.Progress,
              style: { width: `${s}%` },
            }),
          });
        }
        var X = a(20169),
          q = a(10349),
          ae = a(2668),
          $ = a(96117),
          me = a(15437);
        function ue(n, t = !0) {
          return (0, me.FY)(
            {
              bIncludeDailyDeals: !0,
              nIncludeTopNSpecials: 8,
              spotlightLocation: { location: "cart" },
              rgAdditionalRecommendationIDs: n,
            },
            { include_assets: !0, include_release: !0 },
            t,
          );
        }
        var fe = a(50169),
          Ce = a(45803),
          pe = a.n(Ce),
          he = a(40358),
          ve = a(13784),
          Ae = a(30096);
        function De() {
          const n = (0, Ae.CH)();
          return (
            l.useEffect(
              () => (
                window.addEventListener("resize", n),
                () => window.removeEventListener("resize", n)
              ),
              [n],
            ),
            window.innerWidth < parseInt(I.strMaxCartPartResponsiveWidth)
          );
        }
        function ce(n) {
          const { bMinimalDisplay: t } = n,
            s = De();
          return (s && t) || (!s && !t) ? null : (0, e.jsx)(xe, { ...n });
        }
        function xe(n) {
          const { cart: t, bMinimalDisplay: s } = n,
            i = _e(t),
            o = (0, l.useMemo)(() => {
              const c = new Set(
                [
                  ...(i?.developers || []),
                  ...(i?.publishers || []),
                  ...(i?.franchises || []),
                ]
                  .filter((u) => !!u && !!u.creator_clan_account_id)
                  .map((u) => u.creator_clan_account_id),
              );
              return Array.from(c);
            }, [i]);
          return o.length == 0
            ? null
            : (0, e.jsxs)("div", {
                className: pe().CartCreatorCtn,
                children: [
                  (0, e.jsx)("div", {
                    className: pe().Title,
                    children: (0, r.we)("#Cart_FollowCreator_title"),
                  }),
                  (0, e.jsx)("div", {
                    className: pe().Description,
                    children: (0, r.we)("#Cart_FollowCreator_desc"),
                  }),
                  (0, e.jsx)("br", {}),
                  o.map((c) =>
                    (0, e.jsx)(
                      ve.hA,
                      {
                        creatorID: {
                          name: "",
                          clan_account_id: c,
                          type: "developer",
                        },
                        bHideCreatorType: !0,
                        bSmallFormat: !0,
                        bMinimalDisplay: s,
                      },
                      "creat" + c,
                    ),
                  ),
                ],
              });
        }
        function _e(n) {
          const [t, s] = (0, l.useState)(null),
            i = (0, l.useMemo)(
              () =>
                n?.line_items?.length == 1 && n.line_items[0].packageid
                  ? { packageid: n.line_items[0].packageid }
                  : void 0,
              [n],
            ),
            { data: o } = (0, he.U2)(i);
          (0, l.useEffect)(() => {
            const m = o?.type;
            m == v.uE.HT
              ? s(o.id)
              : (m == v.uE._i || m == v.uE.Ov) &&
                s(o.related_items?.parent_appid);
          }, [o?.id, o?.related_items?.parent_appid, o?.type]);
          const c = (0, l.useMemo)(() => (t ? { appid: t } : void 0), [t]),
            { data: u } = (0, he.wl)(c);
          return u;
        }
        function Se(n, t = []) {
          return t.filter(({ item_id: s, item: i }) =>
            s
              ? n[s.appid]
                ? !1
                : i?.appid
                  ? !n[i?.appid]
                  : i?.included_appids
                    ? i.included_appids.every((o) => !n[o])
                    : !0
              : !0,
          );
        }
        function Ie(n) {
          const { cart: t, validatedCart: s } = n,
            [i, o] = l.useState(void 0),
            c = (s?.cart_items || []).reduce(
              (x, U) => x.concat(U.store_item.included_appids),
              [],
            );
          l.useEffect(() => {
            i === void 0 &&
              t &&
              o(
                t?.line_items.map((x) =>
                  x.packageid
                    ? { packageid: x.packageid }
                    : { bundleid: x.bundleid },
                ),
              );
          }, [i, t]);
          const u = ue(i, i !== void 0);
          if (u.isError) return null;
          const m = c.reduce((x, U) => ((x[U] = !0), x), {}),
            f = Se(m, u.data?.purchase_recommendations),
            p = Se(m, u.data?.specials),
            j = Se(m, u.data?.daily_deals),
            B = Se(m, u.data?.spotlights);
          return (0, e.jsxs)("div", {
            className: fe.CartUpsellArea,
            children: [
              (0, e.jsx)("div", {
                className: fe.CartUpsellTitle,
                children: (0, r.we)("#Recommendations_Header"),
              }),
              f?.length > 3
                ? (0, e.jsx)(Ee, {
                    type: "recommended",
                    data: f,
                    isLoaded: !u.isLoading,
                  })
                : (0, e.jsx)(Ee, {
                    type: "specials",
                    data: p,
                    isLoaded: !u.isLoading,
                  }),
              (0, e.jsx)(ce, { cart: t, bMinimalDisplay: !1 }),
            ],
          });
        }
        function Ee(n) {
          const { data: t, isLoaded: s, type: i } = n;
          return !t && s
            ? null
            : (0, e.jsx)(te.Ay, {
                feature: `upsell-${i}`,
                children: (0, e.jsx)(ze, {
                  className: (0, g.A)(fe.Specials),
                  children: t
                    ?.slice(0, 3)
                    .map(({ item_id: o, item: c }) =>
                      (0, e.jsx)(ke, { item_id: o, item: c }, (0, q.wD)(o)),
                    ),
                }),
              });
        }
        function ke(n) {
          const { item: t } = n;
          return (0, e.jsx)($.W, {
            capsule: { id: t.id, type: (0, q._4)(t.item_type, t.type) },
            imageType: "header",
            onlyOneDiscountPct: !0,
            bPreferAssetWithoutOverride: !1,
          });
        }
        function ks(n) {
          const { data: t, isLoaded: s } = n;
          return !t && s
            ? null
            : jsx(ze, {
                className: classnames(styles.DailyDeals, !s && styles.Loading),
                children: t
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
        function zs(n) {
          const { data: t, isLoaded: s } = n,
            i = React.useMemo(
              () =>
                t
                  ?.filter((o) => o.spotlight_template != "weeklong_deals")
                  .slice(0, 2),
              [t],
            );
          return !i && s
            ? null
            : jsx(ze, {
                className: classnames(styles.Spotlights, !s && styles.Loading),
                children: i.map((o) =>
                  jsx(
                    FeaturedItemSpotlight,
                    { spotlight: o },
                    o.item_id
                      ? StoreItemIDToString(o.item_id)
                      : o.spotlight_title,
                  ),
                ),
              });
        }
        function ze(n) {
          const { className: t, children: s } = n;
          return (0, e.jsx)(E.Z, {
            "flow-children": "row",
            navEntryPreferPosition: X.iU.MAINTAIN_X,
            className: (0, g.A)(fe.UpsellRow, t),
            children: s,
          });
        }
        var Ve = a(8892),
          Ge = a(68031),
          ot = a(60351),
          lt = a(15252),
          ct = a(86336),
          Pe = a(79485),
          Ht = a(38580),
          Ye = a(2289),
          Qt = a(86519),
          ut = a(42993),
          kt = a(20117),
          dt = a(35038),
          mt = a(19563),
          ft = a(80902),
          gt = a(68312),
          zt = a(5858),
          pt = a(76559),
          Vt = a(58612),
          be = a(35098),
          ye = a(3166);
        function Yt(n, t) {
          const s = Zt(n),
            i = (0, Vt.d0)({ loadFavorites: !0, loadNicknames: !0 }),
            o = s?.data?.ownership_info[0]?.friend_ownership,
            c = l.useMemo(
              () => new Map(o && o.map((f) => [f.accountid, f])),
              [o],
            ),
            u = l.useMemo(() => new Set(t), [t]);
          if (s.isLoading || i.isLoading) return { isLoading: !0 };
          if (s.isError || i.isError) return { isError: !0 };
          const m = i.data.map((f, p) => {
            const j = c.get(f.accountid) || {
              already_owns: !1,
              wishes_for: !1,
            };
            return { ...f, ownership: j };
          });
          return (
            m.sort((f, p) => {
              const j = u.has(f.accountid),
                B = u.has(p.accountid);
              if (j != B) return j ? -1 : 1;
              if (f.is_favorite != p.is_favorite) return f.is_favorite ? -1 : 1;
              if (f.ownership.wishes_for) {
                if (!p.ownership.wishes_for) return -1;
              } else if (p.ownership.wishes_for) return 1;
              const x = f.ownership.partial_wishes_for?.length ?? 0,
                U = p.ownership.partial_wishes_for?.length ?? 0;
              if (x != U) return U - x;
              if (f.ownership.already_owns) {
                if (!p.ownership.already_owns) return 1;
              } else if (p.ownership.already_owns) return -1;
              const re = f.ownership.partial_owns_appids?.length ?? 0,
                ne = p.ownership.partial_owns_appids?.length ?? 0;
              if (re != ne) return re - ne;
              if (x > 0) {
                const J = f.ownership.partial_wishes_for.reduce(
                    (ie, le) => ie ^ le,
                    0,
                  ),
                  se = p.ownership.partial_wishes_for.reduce(
                    (ie, le) => ie ^ le,
                    0,
                  );
                if (J != se) return J - se;
              }
              if (re > 0) {
                const J = f.ownership.partial_owns_appids.reduce(
                    (ie, le) => ie ^ le,
                    0,
                  ),
                  se = p.ownership.partial_owns_appids.reduce(
                    (ie, le) => ie ^ le,
                    0,
                  );
                if (J != se) return J - se;
              }
              return f.persona.m_strPlayerName.localeCompare(
                p.persona.m_strPlayerName,
              );
            }),
            { rgFriendsForGifting: m }
          );
        }
        function Zt(n) {
          const t = (0, gt.KV)(),
            s = (0, q.Je)(n.id, n.item_type);
          return (0, ft.I)({
            queryKey: ["FriendOwnershipForGifting", s],
            queryFn: async () => {
              const i = dt.w.Init(mt.HM);
              i.Body().set_item_ids([v.O4.fromObject(s)]);
              const o = await mt._o.GetFriendOwnershipForGifting(t, i);
              if (!o.BSuccess()) throw o.GetEResult();
              return o.Body().toObject();
            },
          });
        }
        function Ze(n) {
          const t = (0, ut.LH)(),
            s = (0, be.js)(n.gift_info?.accountid_giftee),
            i = l.useMemo(
              () =>
                (0, ye.Fd)("giftee_player_summaries", "application_config") ??
                [],
              [],
            );
          if (!n.gift_info?.accountid_giftee || s.isLoading) return null;
          if (s.data?.m_bInitialized || t) return s.data;
          const o = i.find((u) => u.accountid === n.gift_info.accountid_giftee);
          if (!o) return null;
          let c = new zt.Z(pt.b.InitFromAccountID(o.accountid));
          return (
            (c.m_strAvatarHash = o.avatarHash),
            (c.m_strPlayerName = o.playerName),
            (c.m_bInitialized = !0),
            c
          );
        }
        var Jt = a(92298),
          ht = a.n(Jt),
          Xt = a(44894),
          Ct = a(7582),
          $t = a(95695),
          Je = a.n($t),
          qt = a(71421),
          en = a(12916),
          ge = a.n(en),
          tn = a(87937),
          oe = a.n(tn);
        const vt = "hh:mm a",
          Xe = "HH:mm";
        function nn(n) {
          const {
            nLatestTime: t,
            nEarliestTime: s,
            fnGetTimeToUpdate: i,
            onError: o,
            strAlsoShowTimeZone: c,
            disabled: u,
            bNoDefaultDate: m,
            className: f,
            strDescToolTip: p,
            strDescription: j,
            bShowTimeZone: B,
            strInvalidDateTimeLocalizedMsg: x,
            fnIsValidDateTime: U,
            bWeekdaysOnly: re,
            fnSetTimeToUpdate: ne,
            bForce24HourFormat: J,
            bAllowClear: se,
          } = n;
          let ie = an() || J ? Xe : vt;
          const le = i(),
            [tt, Re] = l.useState(le > 0 ? oe()(le * 1e3) : null),
            [Ne, Bs] = l.useState(0),
            [nt, st] = l.useState(),
            [it, at] = l.useState(),
            Gs = on(nt, it, x, U, o),
            Ut = !o && Gs;
          let rt;
          if (t && s && t == s && s > Ct.HD.GetTimeNowWithOverride()) {
            const b = oe().unix(s);
            (rt = {
              hours: { max: b.hour(), min: b.hour(), step: 0 },
              minutes: { max: b.minute(), min: b.minute(), step: 0 },
              seconds: { max: b.seconds(), min: b.seconds(), step: 0 },
              milliseconds: { max: 0, min: 0, step: 0 },
            }),
              (ie = Xe);
          }
          let Wt;
          !le && s && !m && (Wt = oe().unix(s));
          const Kt = oe().tz.guess(),
            Ls = oe().unix(le).tz(Kt),
            Be = !!c && Kt != c && oe().unix(le).tz(c),
            Os = (b) => {
              if (u) return;
              at(null);
              const He = i(),
                je = oe().unix(He || Ct.HD.GetTimeNowWithOverride());
              (b = b.clone()),
                b.hour(je.hour()),
                b.minute(je.minute()),
                b.second(0),
                ne(b.unix()),
                Re(b);
            },
            {
              fnOnInput: Fs,
              fnOnInputBlur: ws,
              fnOnChange: Ns,
            } = At(xt, Os, at),
            bs = (b) => {
              if (u) return;
              st(null);
              let He = i(),
                je = 0;
              if (!He)
                je =
                  oe().unix(s).hour(0).second(0).minutes(0).unix() +
                  3600 * b.hour() +
                  60 * b.minutes();
              else {
                const Qe = oe().unix(He);
                (b = b.clone()),
                  b.year(Qe.year()),
                  b.month(Qe.month()),
                  b.date(Qe.date()),
                  (je = b.unix());
              }
              ne(je), Re(oe().unix(je));
            },
            {
              fnOnInput: Us,
              fnOnInputBlur: Ws,
              fnOnChange: Ks,
            } = At(_t, bs, st),
            Hs = () => {
              u || (ne(0), Re(null), at(null), st(null), Bs((b) => b + 1));
            },
            Qs = se && !u && le > 0;
          return (0, e.jsxs)("div", {
            className: (0, g.A)(ge().EventTimeSection, f),
            children: [
              (0, e.jsxs)("div", {
                className: (0, g.A)(ge().EventTimeTitle, "DialogLabel"),
                children: [
                  (0, e.jsx)(qt.he, {
                    toolTipContent: p,
                    direction: "top",
                    children: !!j && (0, e.jsx)("span", { children: j }),
                  }),
                  Ut &&
                    (0, e.jsxs)("span", {
                      className: ge().DateErrorCtn,
                      children: [(0, e.jsx)("img", { src: Xt.A }), Ut],
                    }),
                ],
              }),
              (0, e.jsxs)("div", {
                className: Je().FlexRowContainer,
                children: [
                  (0, e.jsxs)("div", {
                    className: (0, g.A)(Je().InputBorder, ge().TimeBlock),
                    children: [
                      (0, e.jsx)(
                        ht(),
                        {
                          onChange: Ns,
                          timeFormat: !1,
                          value: it ?? tt,
                          isValidDate: (b) => !u && rn(s, t, re, b),
                          initialValue: Wt,
                          inputProps: {
                            placeholder: (0, r.we)(
                              "#DateTimePicker_Enter_Date",
                            ),
                            className: (0, g.A)(
                              ge().DateWidth,
                              "DialogInput",
                              "DialogTextInputBase",
                            ),
                            disabled: u,
                            onChange: (b) => Fs(b.currentTarget.value),
                            onBlur: (b) => ws(b.currentTarget.value),
                          },
                        },
                        "date" + Ne,
                      ),
                      !!Be &&
                        (0, e.jsx)("div", {
                          className: ge().PacificTimeHint,
                          children: Be.format("L"),
                        }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: (0, g.A)(Je().InputBorder, ge().TimeBlock),
                    children: [
                      (0, e.jsx)(
                        ht(),
                        {
                          onChange: Ks,
                          dateFormat: !1,
                          timeFormat: ie,
                          timeConstraints: rt,
                          value: nt ?? tt,
                          inputProps: {
                            placeholder: (0, r.we)(
                              "#DateTimePicker_Enter_Time",
                            ),
                            className: (0, g.A)(
                              ge().TimeWidth,
                              "DialogInput",
                              "DialogTextInputBase",
                            ),
                            disabled: u,
                            onChange: (b) => Us(b.currentTarget.value),
                            onBlur: (b) => Ws(b.currentTarget.value),
                          },
                        },
                        "time" + Ne,
                      ),
                      !!Be &&
                        (0, e.jsx)("div", {
                          className: ge().PacificTimeHint,
                          children: Be.format("LT"),
                        }),
                    ],
                  }),
                  B &&
                    (0, e.jsxs)("div", {
                      children: [
                        (0, e.jsx)("div", {
                          className: ge().TimeZone,
                          children: Ls.zoneAbbr(),
                        }),
                        !!Be &&
                          (0, e.jsx)("div", {
                            className: ge().TimeZone,
                            children: Be.zoneAbbr(),
                          }),
                      ],
                    }),
                  Qs &&
                    (0, e.jsx)("button", {
                      type: "button",
                      className: ge().ClearButton,
                      onClick: Hs,
                      children: (0, r.we)("#Button_Clear"),
                    }),
                ],
              }),
              !!rt &&
                (0, e.jsx)("div", {
                  children: (0, r.we)("#DateTimePicker_DateTime_Fixed"),
                }),
            ],
          });
        }
        function At(n, t, s) {
          const [i, o] = l.useState(!1);
          return {
            fnOnInput: (f) => {
              s(f), o(!0);
            },
            fnOnInputBlur: (f) => {
              if (i) {
                const p = n(f);
                p.isValid() && t(p);
              }
              o(!1);
            },
            fnOnChange: (f) => {
              if (!i)
                if (typeof f == "string") {
                  const p = n(f);
                  p.isValid() && t(p);
                } else t(f);
            },
          };
        }
        function sn() {
          const t = oe()("2025-01-14").format("L").split(/[-/.]/),
            s = t.indexOf("14");
          return t.indexOf("01") < s;
        }
        function an() {
          return oe()("2025-01-14T13:00:00")
            .format("LT")
            .toLowerCase()
            .includes("13");
        }
        function xt(n) {
          return oe()(n, sn() ? "M/D/YYYY" : "D/M/YYYY", !1);
        }
        function _t(n) {
          return oe()(n, [vt, Xe], !1);
        }
        function rn(n, t, s, i) {
          const o = oe().unix(n).hour(0).seconds(0).minute(0);
          let c = i.unix() >= o.unix();
          if (c && t && t >= n) {
            const u = oe().unix(t).hour(23).minute(59).seconds(59);
            c = i.unix() <= u.unix();
          }
          return (
            c && s && (i.weekday() == 0 || i.weekday() == 6) && (c = !1), c
          );
        }
        function on(n, t, s, i, o) {
          const c = i && i(),
            u = t && !xt(t).isValid(),
            m = n && !_t(n).isValid(),
            f = m || u || typeof c == "string" || c === !1;
          let p = null;
          return (
            f &&
              ((p = (0, r.we)(
                s || "#DateTimePicker_Fallback_Invalid_DateTime",
              )),
              m
                ? (p = (0, r.we)("#DateTimePicker_Time_CannotParse"))
                : u
                  ? (p = (0, r.we)("#DateTimePicker_Date_CannotParse"))
                  : typeof c == "string" && (p = c)),
            l.useEffect(() => {
              o && o(p);
            }, [p, o]),
            p
          );
        }
        var ln = a(36174),
          cn = a(83934),
          T = a.n(cn);
        const un = l.memo(function (t) {
          const { scheduledTime: s, onScheduledTimeChange: i } = t,
            [o, c] = l.useState(null),
            u = s > 0,
            m = () => {
              i(0);
            },
            f = () => {
              s || i(Date.now() / 1e3);
            };
          return (0, e.jsxs)(Fe, {
            children: [
              (0, e.jsx)(Te, {
                children: (0, r.we)("#Cart_GiftDelivery_Label"),
              }),
              (0, e.jsx)(Rt, {
                children: (0, e.jsx)(C.Od, {
                  controlled: !0,
                  checked: !u,
                  onChange: (p) => p && m(),
                  label: (0, r.we)("#Cart_GiftDelivery_Now"),
                }),
              }),
              (0, e.jsxs)(Rt, {
                children: [
                  (0, e.jsx)(C.Od, {
                    controlled: !0,
                    checked: u,
                    onChange: (p) => p && f(),
                    label: (0, r.we)("#Cart_GiftDelivery_ScheduleDelivery"),
                  }),
                  (0, e.jsx)("div", { style: { clear: "both" } }),
                  o &&
                    (0, e.jsx)("div", {
                      className: T().ScheduleError,
                      children: o,
                    }),
                  u &&
                    (0, e.jsx)(O.tH, {
                      children: (0, e.jsx)(dn, {
                        scheduledTime: s,
                        onScheduledTimeChange: i,
                        setScheduledError: c,
                      }),
                    }),
                ],
              }),
            ],
          });
        });
        function dn(n) {
          const {
            scheduledTime: t,
            onScheduledTimeChange: s,
            setScheduledError: i,
          } = n;
          if ((0, ye.Qn)())
            return (0, e.jsx)(fn, {
              scheduledTime: t,
              onScheduledTimeChange: s,
              setScheduledError: i,
            });
          {
            const c = () => St(t);
            return (0, e.jsx)(nn, {
              bShowTimeZone: !0,
              className: T().GiftDatePicker,
              nEarliestTime: Date.now() / 1e3,
              fnGetTimeToUpdate: () => t,
              fnSetTimeToUpdate: s,
              fnIsValidDateTime: c,
              onError: i,
            });
          }
        }
        function St(n) {
          const t = Date.now() / 1e3 + ln.Kp.PerYear,
            s = new Date(null, null, null, 0, 0, 0, 0).getTime() / 1e3;
          return n > t
            ? (0, r.we)("#Cart_GiftScheduleError_TooFar")
            : n < s
              ? (0, r.we)("#Cart_GiftScheduleError_InvalidDate")
              : !0;
        }
        function mn(n, t) {
          let s = n.getHours(),
            i = n.getMinutes();
          return (
            t && (s > 12 ? (s -= 12) : s == 0 && (s = 12)),
            `${s}:${i < 10 ? "0" : ""}${i}`
          );
        }
        function fn(n) {
          const {
              scheduledTime: t,
              onScheduledTimeChange: s,
              setScheduledError: i,
            } = n,
            o = l.useMemo(() => {
              const se = new Intl.DateTimeFormat(r.pf.GetPreferredLocales(), {
                hour: "numeric",
              });
              return (
                se.resolvedOptions().hour12 ||
                se.resolvedOptions().hourCycle == "h12"
              );
            }, []),
            c = new Date(t * 1e3),
            [u, m] = (0, l.useState)(c.getMonth()),
            [f, p] = (0, l.useState)(c.getDate()),
            [j, B] = (0, l.useState)(c.getFullYear()),
            [x, U] = (0, l.useState)(() => mn(c, o)),
            [re, ne] = (0, l.useState)(c.getHours() >= 12 ? "PM" : "AM");
          l.useEffect(() => {
            let se = x.match(/^\s*([012]?[0-9]):([0-9]{2})\s*/);
            if (!se) return;
            let ie = parseInt(se[1]);
            const le = parseInt(se[2]);
            o &&
              (re == "PM" && ie < 12
                ? (ie += 12)
                : re == "AM" && ie == 12 && (ie = 0));
            const Re = new Date(j, u, f, ie, le, 0, 0).getTime() / 1e3,
              Ne = St(Re);
            Ne === !0 ? (i(null), s(Re)) : i(Ne);
          }, [j, u, f, x, re, o, s, i]);
          const J = ye.TS.COUNTRY == "US" && ye.TS.LANGUAGE == "english";
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsxs)(C.Xp, {
                className: T().GamepadTimePickerRow,
                children: [
                  J && (0, e.jsx)(It, { month: u, setMonth: m }),
                  (0, e.jsx)(pn, { year: j, month: u, day: f, setDay: p }),
                  !J && (0, e.jsx)(It, { month: u, setMonth: m }),
                  (0, e.jsx)(gn, { year: j, setYear: B }),
                ],
              }),
              (0, e.jsxs)(C.Xp, {
                className: T().GamepadTimePickerRow,
                children: [
                  (0, e.jsx)(C.pd, {
                    value: x,
                    onChange: (se) => U(se.currentTarget.value),
                  }),
                  o && (0, e.jsx)(hn, { strAMPM: re, setAMPM: ne }),
                  (0, e.jsx)(C.VP, {
                    className: T().TimezoneDisplay,
                    children: (0, e.jsx)(O.tH, {
                      children: (0, e.jsx)(Cn, {}),
                    }),
                  }),
                  !o && (0, e.jsx)(C.VP, { children: "\xA0" }),
                ],
              }),
            ],
          });
        }
        function gn(n) {
          const { year: t, setYear: s } = n,
            i = l.useMemo(() => {
              const o = new Date(),
                c = new Intl.DateTimeFormat(r.pf.GetPreferredLocales(), {
                  year: "numeric",
                });
              return [o.getFullYear(), o.getFullYear() + 1].map((u) => ({
                label: c.format(new Date(u, 0, 1)),
                data: u,
              }));
            }, []);
          return (0, e.jsx)(C.m, {
            selectedOption: t,
            onChange: (o) => s(o.data),
            rgOptions: i,
          });
        }
        function It(n) {
          const { month: t, setMonth: s } = n,
            i = l.useMemo(() => {
              const o = new Intl.DateTimeFormat(r.pf.GetPreferredLocales(), {
                month: "short",
              });
              return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((c) => ({
                label: o.format(new Date(null, c)),
                data: c,
              }));
            }, []);
          return (0, e.jsx)(C.m, {
            selectedOption: t,
            onChange: (o) => s(o.data),
            rgOptions: i,
          });
        }
        function pn(n) {
          const { year: t, month: s, day: i, setDay: o } = n,
            c = l.useMemo(() => {
              const u = new Date(t, s + 1, 0).getDate(),
                m = new Intl.DateTimeFormat(r.pf.GetPreferredLocales(), {
                  day: "numeric",
                });
              let f = [];
              for (let p = 1; p <= u; p++)
                f.push({ label: m.format(new Date(null, null, p)), data: p });
              return f;
            }, [s, t]);
          return (0, e.jsx)(C.m, {
            selectedOption: i,
            onChange: (u) => o(u.data),
            rgOptions: c,
          });
        }
        function hn(n) {
          const { strAMPM: t, setAMPM: s } = n,
            i = l.useMemo(() => {
              const o = new Intl.DateTimeFormat(r.pf.GetPreferredLocales(), {
                  hour: "numeric",
                  hour12: !0,
                }),
                c =
                  o
                    .formatToParts(new Date(null, null, null, 5))
                    .find((m) => m.type == "dayPeriod")?.value || "AM",
                u =
                  o
                    .formatToParts(new Date(null, null, null, 17))
                    .find((m) => m.type == "dayPeriod")?.value || "PM";
              return [
                { label: c, data: "AM" },
                { label: u, data: "PM" },
              ];
            }, []);
          return (0, e.jsx)(C.m, {
            selectedOption: t,
            onChange: (o) => s(o.data),
            rgOptions: i,
          });
        }
        function Cn() {
          const n = new Intl.DateTimeFormat(r.pf.GetPreferredLocales(), {
            timeZoneName: "short",
          })
            .formatToParts()
            .find((t) => t.type == "timeZoneName");
          return (0, e.jsx)(e.Fragment, { children: n ? n.value : "" });
        }
        var Le = a(46943),
          Oe = a(53080);
        function vn(n) {
          const { lineItem: t } = n,
            { data: s } = (0, Q.UI)(),
            i = l.useMemo(() => {
              let m = [];
              for (const f of s?.line_items ?? [])
                f.line_item_id === t.line_item_id ||
                  !f.flags?.is_gift ||
                  !f.gift_info ||
                  m.push(f);
              return m;
            }, [s?.line_items, t.line_item_id]),
            { mutate: o } = (0, Pe.C)(),
            c = (m) => {
              o({
                lineItemID: t.line_item_id,
                lineItemFlags: t.flags,
                giftInfo: { ...(m.gift_info ?? {}) },
              });
            },
            u = (0, Oe.WM)({
              rgOptions: i,
              selectedValue: null,
              onSelectionChange: c,
            });
          return i.length < 1
            ? null
            : (0, e.jsx)(ot.az, {
                flexGrow: "0",
                children: (0, e.jsxs)(Oe.l6.Root, {
                  state: u,
                  children: [
                    (0, e.jsx)(Oe.l6.Trigger, {
                      children: (0, e.jsx)(lt.EY, {
                        children: (0, r.we)(
                          "#Cart_Gifting_CopyGiftOptionsFrom",
                        ),
                      }),
                    }),
                    (0, e.jsx)(Oe.l6.Options, {
                      children: i.map((m, f) =>
                        (0, e.jsx)(
                          Oe.l6.Option,
                          {
                            value: m,
                            children: (0, e.jsx)(An, { lineItem: m }),
                          },
                          f,
                        ),
                      ),
                    }),
                  ],
                }),
              });
        }
        function An(n) {
          const { lineItem: t } = n,
            s = t.bundleid ? v.c6.xO : v.c6.RD,
            [i] = (0, K.mZ)(t.bundleid ? t.bundleid : t.packageid, s, {
              include_basic_info: !0,
            }),
            o = Ze(t),
            c = o?.m_strPlayerName ?? t.gift_info?.email_giftee;
          if (!i || !c) return null;
          const u = o
            ? (0, e.jsx)(Le.i8, {
                size: "X-Small",
                statusPosition: "none",
                persona: o,
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
                children: [u, c],
              }),
            ],
          });
        }
        var xn = a(7967),
          _n = a(5827),
          Sn = a(54806),
          In = a(93125),
          Dt = a(96538);
        function Dn(n) {
          const {
            storeItem: t,
            lineItem: s,
            bShowGiftRecipientModal: i,
            fnOnDismiss: o,
            highlightedAccountIDs: c,
          } = n;
          return (0, e.jsx)(Dt.mt, {
            className: T().GiftRecipientPickerModal,
            active: i,
            onDismiss: o,
            children: (0, e.jsx)(Pn, {
              onDismiss: o,
              lineItem: s,
              storeItem: t,
              highlightedAccountIDs: c ?? [],
            }),
          });
        }
        const Pn = l.memo(function (t) {
          const { storeItem: s, highlightedAccountIDs: i, ...o } = t,
            { rgFriendsForGifting: c, isLoading: u, isError: m } = Yt(s, i),
            f = (0, be.DW)(i),
            p = l.useMemo(() => {
              const j = new Map(
                f
                  .filter((x) => !!x.data)
                  .map((x) => [x.data.GetAccountID(), x.data]),
              );
              for (const x of c ?? []) j.delete(x.accountid);
              let B = [];
              for (const x of j.values())
                B.push({
                  accountid: x.GetAccountID(),
                  persona: x,
                  ownership: { already_owns: !1, wishes_for: !1 },
                });
              return c && B.push(...c), B;
            }, [c, f]);
          return (0, e.jsx)(jn, {
            ...o,
            rgAccountsForGifting: p,
            isLoading: u,
            isError: m,
          });
        });
        function jn(n) {
          const {
              lineItem: t,
              onDismiss: s,
              rgAccountsForGifting: i,
              isLoading: o,
              isError: c,
            } = n,
            u = (0, Pe.C)(),
            [m, f] = l.useState(""),
            p = l.useMemo(() => {
              if (!i) return [];
              const x = m.toLocaleLowerCase();
              return x.length < 1
                ? i
                : i.filter(
                    (U) =>
                      !!(
                        U.persona.m_strPlayerName
                          .toLocaleLowerCase()
                          .indexOf(x) > -1 ||
                        (U.nickname &&
                          U.nickname.toLocaleLowerCase().indexOf(x) > -1)
                      ),
                  );
            }, [m, i]),
            j = t.gift_info?.accountid_giftee,
            B = (x) => {
              if (x) {
                const U = new pt.b(x);
                U.BIsValid() &&
                  u.mutate({
                    lineItemID: t.line_item_id,
                    lineItemFlags: t.flags,
                    giftInfo: {
                      ...(t.gift_info ?? {}),
                      accountid_giftee: U && U.GetAccountID(),
                    },
                  });
              }
              s();
            };
          return c
            ? (0, e.jsx)(Pt, {
                children: (0, e.jsx)("div", {
                  className: T().LoadingError,
                  children: (0, r.we)("#Cart_GiftRecipientModal_IssueLoading"),
                }),
              })
            : (0, e.jsxs)(Pt, {
                loading: o,
                children: [
                  (0, e.jsx)(En, { value: m, onChange: f }),
                  (0, e.jsx)(yn, {
                    children: p.map((x) =>
                      (0, e.jsx)(
                        Tn,
                        {
                          selected: x.accountid === j,
                          onSelect: B,
                          ownership: x.ownership,
                          persona: x.persona,
                          nickname: x.nickname,
                        },
                        x.accountid,
                      ),
                    ),
                  }),
                ],
              });
        }
        function Pt(n) {
          const { loading: t, children: s } = n;
          return (0, e.jsxs)(E.Z, {
            className: T().GiftRecipientPickerFormCtn,
            children: [
              (0, e.jsx)("div", {
                className: T().FormTitle,
                children: (0, r.we)("#Cart_GiftRecipientModal_Title"),
              }),
              t && (0, e.jsx)(R.t, { position: "center", size: "large" }),
              !t && s,
            ],
          });
        }
        function En(n) {
          const { value: t, onChange: s } = n;
          return (0, e.jsx)(C.pd, {
            autoFocus: !0,
            bShowClearAction: !0,
            className: T().GiftFriendsInput,
            placeholder: (0, r.we)("#Cart_GiftRecipientModal_Placeholder"),
            value: t,
            onChange: (i) => s(i.currentTarget.value),
          });
        }
        function yn(n) {
          return (0, e.jsx)(xn.MS, { className: T().GiftFriendsListCtn, ...n });
        }
        function Tn(n) {
          const {
              selected: t,
              onSelect: s,
              nickname: i,
              persona: o,
              ownership: c,
            } = n,
            u = c.already_owns,
            m = l.useCallback(() => {
              u || s(o.m_steamid.ConvertTo64BitString());
            }, [u, s, o]);
          return (0, e.jsxs)(E.Z, {
            className: (0, g.A)(
              T().GiftPickerFriendBlock,
              t && T().Selected,
              u && T().Disabled,
            ),
            focusClassName: T().Focused,
            noFocusRing: !0,
            onActivate: m,
            children: [
              (0, e.jsx)(Le.i8, {
                className: T().FriendAvatar,
                statusPosition: "right",
                persona: o,
              }),
              (0, e.jsx)(In.A, {
                bParenthesizeNicknames: !0,
                strNickname: i,
                persona: o,
                className: T().PersonaName,
              }),
              (0, e.jsxs)("div", {
                className: T().FriendsGiftLabel,
                children: [
                  (0, e.jsx)(Mn, { ownership: c }),
                  (0, e.jsx)(Rn, { ownership: c }),
                ],
              }),
            ],
          });
        }
        function Mn(n) {
          const { ownership: t } = n,
            { already_owns: s, partial_owns_appids: i } = t;
          return s
            ? (0, e.jsx)("div", {
                className: (0, g.A)(T().OwnsGame),
                children: (0, r.we)("#Cart_GiftRecipientModal_OwnsGameLabel"),
              })
            : i && i.length > 0
              ? (0, e.jsx)("div", {
                  className: (0, g.A)(T().OwnsGame),
                  children: (0, r.PP)(
                    "#Cart_GiftRecipientModal_PartialOwnsLabel",
                    (0, e.jsx)(jt, { rgAppList: i }),
                  ),
                })
              : null;
        }
        function Rn(n) {
          const { ownership: t } = n,
            { already_owns: s, wishes_for: i, partial_wishes_for: o } = t;
          return s
            ? null
            : i
              ? (0, e.jsx)("div", {
                  className: (0, g.A)(T().OnWishlist),
                  children: (0, r.we)("#Cart_GiftRecipientModal_OnWishlist"),
                })
              : o && o.length > 0
                ? (0, e.jsx)("div", {
                    className: (0, g.A)(T().OnWishlist),
                    children: (0, r.PP)(
                      "#Cart_GiftRecipientModal_PartialWishlistLabel",
                      (0, e.jsx)(jt, { rgAppList: o }),
                    ),
                  })
                : null;
        }
        function jt(n) {
          const { rgAppList: t } = n,
            s = (0, _n.eG)(),
            i = l.useMemo(
              () =>
                Array.from(new Set(t))
                  .slice(0, 6)
                  .map((u) => (0, he.us)(s, { appid: u })),
              [s, t],
            ),
            o = (0, Sn.E)({ queries: i }),
            c = [];
          for (const u of o)
            if (!(!u.data || !u.data.name)) {
              if (c.length >= 3) break;
              c.push(
                (0, e.jsxs)(e.Fragment, {
                  children: [c.length ? ", " : "", u.data.name],
                }),
              );
            }
          return c;
        }
        function Bn(n) {
          const { giftInfo: t, onChange: s } = n,
            i = (0, be.js)(t.accountid_giftee);
          return i.data
            ? (0, e.jsxs)(Tt, {
                children: [
                  (0, e.jsxs)(Mt, {
                    children: [
                      (0, e.jsx)(Te, {
                        children: (0, r.we)("#Cart_PurchaseFor_Label"),
                      }),
                      (0, e.jsx)("a", {
                        href: i.data.GetCommunityProfileURL(),
                        target: "_blank",
                        children: (0, e.jsx)(Le.i8, {
                          className: T().FriendAvatar,
                          statusPosition: "right",
                          persona: i.data,
                        }),
                      }),
                      i.data.m_strPlayerName,
                    ],
                  }),
                  (0, e.jsx)(Qn, { giftInfo: t, onChange: s }),
                ],
              })
            : null;
        }
        function Gn(n) {
          const { lineItem: t } = n;
          return (0, e.jsxs)(Tt, {
            children: [
              (0, e.jsx)(Un, { ...n }),
              (0, e.jsx)(Hn, { lineItem: t }),
              (0, e.jsx)(zn, {
                gifteeAccountID: t.gift_info?.accountid_giftee,
              }),
            ],
          });
        }
        function Ln(n) {
          return d.iA.logged_in
            ? null
            : (0, e.jsx)("div", {
                className: T().SignInLink,
                children: (0, e.jsx)(Ve.$, {
                  onClick: () => (0, N.vg)(),
                  children: (0, r.we)("#Cart_Gifting_SignInForFriends"),
                }),
              });
        }
        function On(n) {
          const { lineItem: t, storeItem: s } = n,
            [i, o] = l.useState(!1),
            { data: c } = (0, Q.UI)(),
            u = l.useMemo(() => {
              if (!c?.line_items) return [];
              let m = new Set();
              for (const f of c.line_items)
                f.line_item_id !== t.line_item_id &&
                  f.gift_info?.accountid_giftee &&
                  m.add(f.gift_info.accountid_giftee);
              return [...m];
            }, [c?.line_items, t.line_item_id]);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              d.iA.logged_in &&
                (0, e.jsx)(Ve.$, {
                  onClick: () => o(!0),
                  children: (0, r.we)("#Cart_SelectRecipient"),
                }),
              i &&
                (0, e.jsx)(Dn, {
                  bShowGiftRecipientModal: i,
                  fnOnDismiss: () => o(!1),
                  lineItem: t,
                  storeItem: s,
                  highlightedAccountIDs: u,
                }),
            ],
          });
        }
        function Fn(n) {
          const { lineItem: t, onClick: s } = n,
            { mutate: i } = (0, Pe.C)(),
            o = l.useCallback(() => {
              i({
                lineItemID: t.line_item_id,
                lineItemFlags: t.flags,
                giftInfo: { ...t.gift_info, email_giftee: "" },
              }),
                s();
            }, [i, t, s]);
          return (0, e.jsx)(Ve.$, {
            color: "dull",
            onClick: o,
            children: (0, r.we)("#Cart_EnterRecipientEmail"),
          });
        }
        function wn(n) {
          const { lineItem: t } = n,
            s = Ze(t);
          return s
            ? (0, e.jsxs)(Ge.s, {
                align: "center",
                children: [
                  (0, e.jsx)("a", {
                    href: s.GetCommunityProfileURL(),
                    target: "_blank",
                    children: (0, e.jsx)(Le.i8, {
                      className: T().FriendAvatar,
                      statusPosition: "right",
                      persona: s,
                    }),
                  }),
                  s.m_strPlayerName,
                ],
              })
            : null;
        }
        function Nn(n) {
          const { lineItem: t } = n,
            s = t.gift_info?.email_giftee,
            { mutate: i } = (0, Pe.C)(),
            [o, c, u] = (0, Qt.M)(s, 1e3);
          return (
            (0, l.useEffect)(() => {
              if (!c || c == t.gift_info?.email_giftee) return;
              let m = t.gift_info ? { ...t.gift_info } : {};
              (m.email_giftee = c),
                (m.time_scheduled_send = 0),
                i({
                  lineItemID: t.line_item_id,
                  lineItemFlags: t.flags,
                  giftInfo: m,
                });
            }, [i, t, c]),
            (0, e.jsxs)("div", {
              children: [
                (0, e.jsx)("div", {
                  className: T().GiftEmailInput,
                  children: (0, e.jsx)(C.pd, {
                    label: " ",
                    mustBeEmail: !0,
                    value: o,
                    onChange: (m) => u(m.target.value),
                    maxChars: kn,
                  }),
                }),
                (0, e.jsxs)("ul", {
                  className: T().GiftEmailWarnings,
                  children: [
                    (0, e.jsx)("li", {
                      children: (0, r.we)("#Cart_GiftDeliveryEmail_Warning1"),
                    }),
                    (0, e.jsx)("li", {
                      children: (0, r.we)(
                        "#Cart_GiftDeliveryEmail_Warning2",
                        d.iA.country_code,
                      ),
                    }),
                  ],
                }),
              ],
            })
          );
        }
        var bn = ((n) => (
          (n[(n.NoRecipientSelected = 0)] = "NoRecipientSelected"),
          (n[(n.AccountSelected = 1)] = "AccountSelected"),
          (n[(n.EmailSelected = 2)] = "EmailSelected"),
          n
        ))(bn || {});
        function Un(n) {
          const { lineItem: t } = n,
            [s, i] = l.useState(!1),
            o = l.useMemo(
              () =>
                t.gift_info?.accountid_giftee
                  ? 1
                  : s || t.gift_info?.email_giftee
                    ? 2
                    : 0,
              [t, s],
            ),
            { mutate: c } = (0, Pe.C)(),
            u = l.useCallback(() => {
              let m = t.gift_info ? { ...t.gift_info } : {};
              (m.accountid_giftee = null),
                (m.email_giftee = null),
                i(!1),
                c({
                  lineItemID: t.line_item_id,
                  lineItemFlags: t.flags,
                  giftInfo: m,
                });
            }, [c, t]);
          return (0, e.jsxs)(Fe, {
            children: [
              (0, e.jsx)("div", { className: T().GiftFormDivider }),
              (0, e.jsxs)(Ge.s, {
                justify: "between",
                gap: "3",
                direction: { initial: "column-reverse", md: "row" },
                marginBottom: "2",
                children: [
                  (0, e.jsxs)(Mt, {
                    children: [
                      (0, e.jsx)(Te, {
                        fullWidth: o === 2,
                        children:
                          o == 2
                            ? (0, r.we)("#Cart_GiftRecipientEmail_Label")
                            : (0, r.we)("#Cart_GiftRecipient_Label"),
                      }),
                      o == 1 && (0, e.jsx)(wn, { lineItem: t }),
                      o == 0 &&
                        (0, e.jsx)(Wn, { onEmailRecipient: () => i(!0), ...n }),
                      o != 0 &&
                        (0, e.jsxs)(Ue, {
                          onClick: u,
                          children: [
                            "(",
                            o == 2
                              ? (0, r.we)("#Cart_EditGiftDelivery")
                              : (0, r.we)("#Cart_Edit"),
                            ")",
                          ],
                        }),
                    ],
                  }),
                  (0, e.jsx)(vn, { lineItem: t }),
                ],
              }),
              (0, e.jsx)("div", {
                children: o == 2 && (0, e.jsx)(Nn, { ...n }),
              }),
              o == 1 && (0, e.jsx)(Kn, { lineItem: t }),
            ],
          });
        }
        function Wn(n) {
          const { onEmailRecipient: t, ...s } = n;
          return (0, e.jsxs)(Ge.s, {
            align: "center",
            gap: "2",
            marginStart: "2",
            wrap: "wrap",
            children: [
              (0, e.jsx)(On, { ...s }),
              (0, e.jsx)(Fn, { onClick: t, ...s }),
              (0, e.jsx)(Ln, {}),
            ],
          });
        }
        function Kn(n) {
          const { lineItem: t } = n,
            s = Ze(t),
            { data: i } = (0, Ht.Dv)(),
            o = l.useMemo(
              () => !i || i.includes(s?.GetSteamIDAsString()),
              [i, s],
            );
          return !s || o
            ? null
            : (0, e.jsx)(ot.az, {
                marginTop: "3",
                className: T().GiftNonFriendWarning,
                children: (0, e.jsxs)(lt.EY, {
                  size: "3",
                  color: "amber-9",
                  children: [
                    d.iA.logged_in &&
                      (0, r.PP)(
                        "#Cart_Warning_GiftToNonFriend_Named",
                        (0, e.jsx)(ct.Y, {
                          target: "_blank",
                          href: s.GetCommunityProfileURL(),
                          children: s.m_strPlayerName,
                        }),
                      ),
                    !d.iA.logged_in &&
                      (0, r.oW)(
                        "#Cart_Warning_GiftToAccount_LoggedOut_Actionable",
                        (0, e.jsx)(ct.W, {
                          color: "text-light",
                          contrast: "title",
                          onClick: () => (0, N.vg)(),
                        }),
                      ),
                  ],
                }),
              });
        }
        function Hn(n) {
          const { lineItem: t } = n,
            [s, i] = l.useState(t.gift_info?.gift_message?.message || ""),
            o = l.useRef(s),
            [c, u] = l.useState(t.gift_info?.gift_message?.signature || ""),
            m = l.useRef(c),
            [f, p] = l.useState(t.gift_info?.time_scheduled_send),
            j = l.useRef(f),
            B = l.useCallback((J) => {
              (x.current = !0), p(Math.floor(J));
            }, []),
            x = l.useRef(!1);
          l.useEffect(() => {
            x.current ||
              ((j.current = t.gift_info?.time_scheduled_send),
              (o.current = t.gift_info?.gift_message?.message || ""),
              (m.current = t.gift_info?.gift_message?.signature || ""),
              p(j.current),
              i(o.current),
              u(m.current));
          }, [t.gift_info]);
          const U = (0, Ae._g)(3e3),
            { mutate: re } = (0, Pe.C)(),
            ne = l.useCallback(
              (J) => {
                U(() => {
                  x.current &&
                    (re({
                      lineItemID: t.line_item_id,
                      lineItemFlags: t.flags,
                      giftInfo: J,
                    }),
                    (x.current = !1));
                });
              },
              [re, t.line_item_id, t.flags, U],
            );
          return (
            (0, l.useEffect)(() => {
              (j.current != f || o.current != s || m.current != c) &&
                (ne({
                  accountid_giftee: t.gift_info?.accountid_giftee,
                  email_giftee: t.gift_info?.email_giftee,
                  gift_message: { message: s, signature: c },
                  time_scheduled_send: f,
                }),
                (j.current = f),
                (o.current = s),
                (m.current = c));
            }, [s, c, f, ne, t.gift_info]),
            (0, e.jsx)(yt, {
              id: t.line_item_id,
              message: s,
              onMessageChange: (J) => {
                (x.current = !0), i(J);
              },
              signature: c,
              onSignatureChange: (J) => {
                (x.current = !0), u(J);
              },
              scheduledTime: f,
              onScheduledTimeChange: B,
              bShowScheduledTime:
                !t.gift_info?.email_giftee || t.gift_info?.email_giftee == "",
            })
          );
        }
        function Qn(n) {
          const { giftInfo: t, onChange: s } = n;
          return (0, e.jsx)(yt, {
            id: "cart",
            message: t.gift_message?.message || "",
            onMessageChange: (i) =>
              s({ ...t, gift_message: { ...t.gift_message, message: i } }),
            signature: t.gift_message?.signature || "",
            onSignatureChange: (i) =>
              s({ ...t, gift_message: { ...t.gift_message, signature: i } }),
            scheduledTime: t.time_scheduled_send,
            onScheduledTimeChange: (i) => s({ ...t, time_scheduled_send: i }),
            bShowScheduledTime: !t?.email_giftee || t?.email_giftee == "",
          });
        }
        const Et = 160,
          kn = 330;
        function yt(n) {
          const {
              id: t,
              message: s,
              onMessageChange: i,
              signature: o,
              onSignatureChange: c,
              bShowScheduledTime: u,
              scheduledTime: m,
              onScheduledTimeChange: f,
              onBlur: p,
            } = n,
            j = (0, ut.LH)(),
            B = Et - s.length,
            [x, U] = l.useState(!1),
            re = x || o?.length > 0 || !j,
            { data: ne } = (0, be.js)(d.iA.accountid);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsxs)(Fe, {
                children: [
                  (0, e.jsx)(Te, {
                    fullWidth: !0,
                    children: (0, r.PP)(
                      "#Cart_GiftDelivery_Body",
                      (0, e.jsx)("span", {
                        className: B <= 0 ? T().RedText : null,
                        children: B,
                      }),
                    ),
                  }),
                  (0, e.jsx)(C.Cl, {
                    nMinHeight: 50,
                    className: T().GiftNoteInput,
                    value: s,
                    onBlur: p,
                    onChange: (J) => i(J.target.value),
                  }),
                ],
              }),
              !!j &&
                (0, e.jsx)(Fe, {
                  children: (0, e.jsxs)("div", {
                    className: T().GiftFormRecipient,
                    children: [
                      (0, e.jsx)(Te, {
                        children: (0, r.we)("#Cart_GiftDelivery_From"),
                      }),
                      (0, e.jsx)(Le.i8, {
                        className: T().FriendAvatar,
                        statusPosition: "right",
                        persona: ne,
                      }),
                      " ",
                      ne?.m_strPlayerName || "",
                      !re &&
                        (0, e.jsxs)(Ue, {
                          onClick: () => U(!0),
                          children: [
                            "(",
                            (0, r.we)("#Cart_GiftDelivery_AddSignature"),
                            ")",
                          ],
                        }),
                    ],
                  }),
                }),
              re &&
                (0, e.jsxs)(Fe, {
                  children: [
                    (0, e.jsx)(Te, {
                      fullWidth: !0,
                      children: (0, r.we)("#Cart_GiftDelivery_Signature"),
                    }),
                    (0, e.jsx)(C.pd, {
                      value: o,
                      className: T().GiftSignatureInput,
                      onChange: (J) => c(J.target.value),
                      onBlur: p,
                      maxChars: Et,
                    }),
                  ],
                }),
              u &&
                (0, e.jsx)(un, { scheduledTime: m, onScheduledTimeChange: f }),
            ],
          });
        }
        function Tt(n) {
          return (0, e.jsx)("div", {
            className: T().GiftFormCtn,
            children: n.children,
          });
        }
        function Fe(n) {
          return (0, e.jsx)("div", {
            className: T().GiftFormSection,
            children: n.children,
          });
        }
        function Mt(n) {
          return (0, e.jsx)("div", {
            className: T().GiftFormRecipient,
            children: n.children,
          });
        }
        function Rt(n) {
          return (0, e.jsx)("div", {
            className: T().GiftRadioRow,
            children: n.children,
          });
        }
        function Te(n) {
          const { fullWidth: t } = n;
          return (0, e.jsx)("div", {
            className: z()(T().FormTextLabel, t && T().FullWidth),
            children: n.children,
          });
        }
        function Ue(n) {
          return (0, e.jsx)(E.Z, {
            onActivate: n.onClick,
            children: n.children,
            className: T().LinkButton,
          });
        }
        function zn(n) {
          const { gifteeAccountID: t } = n,
            { isLoading: s, data: i } = (0, W.vo)(!0);
          if (s || i.is_not_member_of_any_group() || i.role() === Ye.PQ.sf)
            return null;
          const o = kt.b2
            .InitFromAccountID(t, d.TS.EUNIVERSE)
            .ConvertTo64BitString();
          return i
            .family_group()
            .members()
            .some((u) => u.steamid() === o && u.role() === Ye.PQ.sf)
            ? (0, e.jsxs)("div", {
                className: T().FamilyGiftNotice,
                children: [" ", (0, r.we)("#Cart_FamilyGift_Notice")],
              })
            : null;
        }
        var we = a(48366),
          Vn = a(48201),
          Bt = a(58162),
          We = a(99412),
          Gt = a(71742),
          Yn = a(58732),
          $e = a(72609),
          Me = a(60659);
        function Zn() {
          const n = (0, P.j4)(),
            [t] = (0, Me.fg)(),
            s = `${$e.TS.STORE_CHECKOUT_BASE_URL}checkout/`;
          if ((0, we.c2)(n)) return `${s}?accountcart=1`;
          if ((0, we.sb)(n)) return `${s}?gidreplay=${n.gid}`;
          {
            const i = new URLSearchParams();
            return (
              i.append("cart", n.gid ?? ""),
              t?.accountid_giftee &&
                (i.append("purchasetype", "gift"),
                i.append("bIsGift", "1"),
                i.append("giftInfo", encodeURIComponent(JSON.stringify(t)))),
              `${s}?${i.toString()}`
            );
          }
        }
        var Lt = a(29392);
        function Jn() {
          return ["shopping_cart", "relevant_coupons"];
        }
        async function Xn(n) {
          const t = dt.w.Init(Lt.wi);
          t.Body().set_language((0, We.sfN)($e.TS.LANGUAGE));
          const s = await Lt.t8.GetRelevantCoupons(n, t);
          return s.BIsValid()
            ? s.Body().toObject()
            : (console.error("Failed to load relevant coupons"), {});
        }
        function $n() {
          const n = (0, gt.KV)();
          return (0, ft.I)({
            queryKey: Jn(),
            queryFn: async () =>
              ((await Xn(n)).line_items ?? []).reduce(
                (s, i) => (
                  i.line_item_id && (s[i.line_item_id] = i.coupons ?? []), s
                ),
                {},
              ),
            enabled: $e.iA.logged_in,
            placeholderData: () => ({}),
          });
        }
        var de = a(50829),
          qn = a(75975);
        function es(n) {
          const {
              lineItem: t,
              storeItem: s,
              couponApplied: i,
              availableCoupons: o,
            } = n,
            [{ bDialogActive: c, strDialogTitle: u }, m] = l.useState({
              bDialogActive: !1,
            }),
            f = () =>
              m({
                bDialogActive: !0,
                strDialogTitle: (0, r.we)(
                  i ? "#Cart_CouponModify_Change" : "#Cart_CouponModify_Add",
                ),
              }),
            p = (0, Pe.C)(),
            j = (B) => {
              p.mutate({
                lineItemID: t.line_item_id,
                giftInfo: t.gift_info,
                lineItemFlags: { ...t.flags },
                gidCoupon: B,
              });
            };
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(ts, {
                couponApplied: i,
                numAvailable: o.length,
                onModifyClick: f,
              }),
              (0, e.jsx)(ss, {
                active: c,
                title: u || (0, r.we)("#Cart_CouponModify_Add"),
                packageName: s.name,
                onRequestClose: () => m({ bDialogActive: !1 }),
                couponApplied: i,
                availableCoupons: o,
                onCouponChange: j,
              }),
            ],
          });
        }
        function ts(n) {
          const { couponApplied: t, numAvailable: s, onModifyClick: i } = n,
            o = (0, r.we)(
              t ? "#Cart_CouponModify_Change" : "#Cart_CouponModify_Add",
            );
          return (0, e.jsx)("div", {
            className: de.CouponPickerRowGlow,
            children: (0, e.jsxs)("div", {
              className: de.CouponPickerRow,
              children: [
                t ? (0, e.jsx)(ns, { ...t }) : null,
                (0, e.jsx)(qe, {
                  children: (0, r.Yp)("#Cart_CouponAvailability", s),
                }),
                (0, e.jsx)("div", {
                  className: de.ModifyLink,
                  children: (0, e.jsx)(Ue, { onClick: i, children: o }),
                }),
              ],
            }),
          });
        }
        function ns(n) {
          const { large_icon_url: t, title: s } = n;
          return (0, e.jsx)("img", {
            className: de.CouponRepresentation,
            src: t,
            title: s,
          });
        }
        function ss(n) {
          const {
              active: t,
              onRequestClose: s,
              packageName: i,
              title: o,
              couponApplied: c,
              availableCoupons: u,
              onCouponChange: m,
            } = n,
            [f, p] = l.useState(c?.gidcoupon || ""),
            j = () => {
              s(), m(f || We.kFb);
            };
          return (0, e.jsxs)(Dt.mt, {
            active: t,
            onDismiss: s,
            children: [
              (0, e.jsx)(C.Y9, { children: o }),
              (0, e.jsx)(C.a3, {
                children: (0, r.PP)(
                  "#Cart_SelectCouponToApply",
                  (0, e.jsx)("span", {
                    className: de.PackageName,
                    children: i,
                  }),
                ),
              }),
              (0, e.jsx)(is, {
                availableCoupons: u,
                couponApplied: c?.gidcoupon,
                couponSelected: f,
                onSelectedChange: p,
              }),
              (0, e.jsx)(C.CB, {
                onCancel: s,
                onOK: j,
                strOKText: (0, r.we)("#Button_Done"),
              }),
            ],
          });
        }
        function is(n) {
          const {
              availableCoupons: t,
              couponApplied: s,
              couponSelected: i,
              onSelectedChange: o,
            } = n,
            { data: c } = (0, M.g7)(),
            u = (c?.cart_items || []).map((m) => m.coupon_applied?.gidcoupon);
          return (0, e.jsx)("div", {
            className: de.CouponListContainer,
            children: t.map((m) =>
              (0, e.jsx)(
                as,
                {
                  ...m,
                  applied: s === m.gidcoupon,
                  selected: i === m.gidcoupon,
                  inUse: u.includes(m.gidcoupon),
                  onSelected: (f) => o(f ? m.gidcoupon : ""),
                },
                m.gidcoupon,
              ),
            ),
          });
        }
        function as(n) {
          const {
              applied: t,
              inUse: s,
              selected: i,
              large_icon_url: o,
              title: c,
              discount_pct: u,
              onSelected: m,
            } = n,
            f = !t && s,
            p = f ? void 0 : () => m(!i);
          return (0, e.jsxs)("div", {
            className: (0, g.A)(de.CouponListItem, f && de.Disabled),
            onClick: p,
            children: [
              (0, e.jsx)(rs, { checked: i, hidden: f }),
              (0, e.jsx)("img", { src: o, title: c, className: de.Image }),
              (0, e.jsxs)("div", {
                className: de.Info,
                children: [
                  t &&
                    (0, e.jsx)(qe, {
                      children: (0, r.we)("#Cart_Coupons_Applied"),
                    }),
                  f &&
                    (0, e.jsx)(qe, {
                      children: (0, r.we)("#Cart_Coupons_InUse"),
                    }),
                ],
              }),
              (0, e.jsxs)("div", {
                className: de.Discount,
                children: ["-", u, "%"],
              }),
            ],
          });
        }
        function qe(n) {
          return (0, e.jsx)("div", {
            className: de.CouponInfoText,
            children: n.children,
          });
        }
        function rs(n) {
          const { checked: t, hidden: s } = n;
          return (0, e.jsx)("div", {
            className: (0, g.A)(de.Checkbox, s && de.Hidden),
            children: t && (0, e.jsx)(qn.Jl, {}),
          });
        }
        var Ke = a(2165),
          os = a(71460),
          ls = a.n(os),
          cs = a(11543),
          L = a.n(cs);
        function us() {
          const [n, t] = l.useState(null);
          return (
            l.useEffect(() => {
              t((0, h.Vh)()?.rgUserCountryOptions);
            }, []),
            n
              ? (0, e.jsxs)("div", {
                  className: (0, g.A)(
                    L().EstimatedTotalFlex,
                    ls().UserCountrySelector,
                  ),
                  children: [
                    (0, e.jsx)("div", {
                      className: L().CartLabelText,
                      children: (0, r.we)("#Cart_UserCountrySelector"),
                    }),
                    (0, e.jsx)("div", {
                      className: L().CartValueText,
                      children: (0, e.jsx)(ds, { rgCountryOptions: n }),
                    }),
                  ],
                })
              : null
          );
        }
        function ds(n) {
          const { rgCountryOptions: t } = n,
            [s, i] = l.useState(d.TS.COUNTRY),
            o = l.useMemo(
              () => Object.keys(t).map((u) => ({ label: t[u], data: u })),
              [t],
            ),
            c = l.useCallback((u) => {
              u.data != d.TS.COUNTRY &&
                PresentCountryCurrencyChangeDialog(u.data == "help"),
                i(u.data);
            }, []);
          return (0, e.jsx)(C.m, {
            selectedOption: s,
            onChange: c,
            rgOptions: o,
            contextMenuPositionOptions: { bMatchWidth: !1 },
          });
        }
        function ms(n) {
          const { children: t } = n;
          return (0, e.jsx)(fs, { children: t });
        }
        function fs(n) {
          const { children: t } = n,
            s = (0, Q.UI)(),
            { data: i } = $n(),
            o = s.isLoading || !s.data,
            c = (0, ye.Qn)(),
            [u, m] = (0, Me.fg)(),
            { sortedLineItems: f, bCartIncludesGifts: p } = l.useMemo(() => {
              const x = s?.data?.line_items || [],
                U = x.some((ne) => ne.flags?.is_gift);
              return {
                sortedLineItems: x.sort((ne, J) => {
                  const se = ne.bundleid ?? ne.packageid,
                    ie = J.bundleid ?? J.packageid;
                  return ne.time_added == J.time_added
                    ? se < ie
                      ? 1
                      : -1
                    : ne.time_added < J.time_added
                      ? 1
                      : -1;
                }),
                bCartIncludesGifts: U,
              };
            }, [s?.data?.line_items]),
            j = (x) =>
              (0, e.jsx)(gs, {
                ...x,
                availableCoupons: (i && i[x.lineItem.line_item_id]) || [],
              }),
            { data: B } = (0, M.g7)();
          return (0, e.jsxs)(Ke.wW, {
            validateCart: B,
            eDisplayType: Ke.WA.k_ECartDisplayType_FullPage,
            children: [
              (0, e.jsx)(Ke.ZZ, {}),
              (0, e.jsxs)(E.Z, {
                className: L().ShoppingCartCtn,
                children: [
                  (0, e.jsxs)(E.Z, {
                    className: L().ShoppingCartLeftCol,
                    children: [
                      o && (0, e.jsx)(Bt.UD, {}),
                      !!u &&
                        !!m &&
                        (0, e.jsx)(O.tH, {
                          children: (0, e.jsx)(F, {
                            children: (0, e.jsx)(Bn, {
                              giftInfo: u,
                              onChange: m,
                            }),
                          }),
                        }),
                      (0, e.jsx)(O.tH, {
                        children: (0, e.jsx)(Vn.p, {
                          lineItems: f,
                          cartValidation: B,
                          renderLineItem: j,
                        }),
                      }),
                      (0, e.jsx)(Ke.LP, { validateCart: B }),
                      !c &&
                        (0, e.jsxs)("div", {
                          className: L().ResponsiveShoppingCartSummary,
                          children: [
                            (0, e.jsx)(Ot, {
                              bCartIncludesGifts: p,
                              strEstimatedTotal:
                                B?.estimated_totals?.subtotal.formatted_amount,
                            }),
                            (0, e.jsx)(Nt, {}),
                          ],
                        }),
                      t &&
                        t({
                          cart: s.data,
                          validatedCart: B,
                          bCartIncludesGifts: p,
                        }),
                    ],
                  }),
                  (0, e.jsx)(E.Z, {
                    className: (0, g.A)(
                      L().ShoppingCartRightCol,
                      f?.length <= 2 && L().SmallCart,
                    ),
                    children: (0, e.jsxs)("div", {
                      className: L().CartRightColStickyCtn,
                      children: [
                        (0, e.jsx)(Ot, {
                          bCartIncludesGifts: p,
                          strEstimatedTotal:
                            B?.estimated_totals?.subtotal.formatted_amount,
                        }),
                        (0, e.jsx)(Nt, {}),
                        (0, e.jsx)(ce, { cart: s.data, bMinimalDisplay: !0 }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          });
        }
        function gs(n) {
          const {
              lineItem: t,
              storeItem: s,
              validatedItem: i,
              availableCoupons: o,
              children: c,
            } = n,
            [u] = (0, Me.Ez)(),
            m = u === "gifts" && !!t.flags.is_gift,
            f = !!o.length;
          return (0, e.jsxs)(E.Z, {
            children: [
              (0, e.jsxs)(Bt.Rz, {
                children: [
                  c,
                  m && (0, e.jsx)(Gn, { storeItem: s, lineItem: t }),
                ],
              }),
              f &&
                (0, e.jsx)(es, {
                  storeItem: s,
                  lineItem: t,
                  couponApplied: i?.coupon_applied,
                  availableCoupons: o,
                }),
            ],
          });
        }
        const Ot = (0, O.Nr)(function (t) {
          const { strEstimatedTotal: s, bCartIncludesGifts: i } = t,
            { bButtonDisabled: o, nextStep: c, bGuestAvailable: u } = Ft(i);
          return (0, e.jsxs)("div", {
            className: L().CartSummaryCtn,
            children: [
              (0, e.jsx)(O.tH, { children: (0, e.jsx)(us, {}) }),
              (0, e.jsxs)("div", {
                className: (0, g.A)(
                  L().EstimatedTotalFlex,
                  L().SummaryMarginBottom,
                ),
                children: [
                  (0, e.jsx)("div", {
                    className: L().CartLabelText,
                    children: (0, r.we)("#Cart_EstimatedTotal"),
                  }),
                  (0, e.jsx)("div", {
                    className: L().CartValueText,
                    children: s,
                  }),
                ],
              }),
              (0, e.jsx)("div", {
                className: (0, g.A)(L().CartNoteText, L().SummaryMarginBottom),
                children: (0, r.we)("#Cart_Note_SalesTax"),
              }),
              (0, e.jsxs)(O.wC, {
                children: [
                  (0, e.jsx)(wt, {
                    bDisabled: o,
                    nextStep: c,
                    bGuestOption: u,
                  }),
                  (0, e.jsx)(vs, { disabled: o || i }),
                  (0, e.jsx)(hs, { bDisabled: o }),
                ],
              }),
            ],
          });
        });
        function Ft(n) {
          const t = (0, Q.UI)(),
            s = (0, M.g7)(),
            i = s.isSuccess && s.data.cart_items.every((U) => !U.errors),
            [o, c] = (0, Me.Ez)(),
            u = (0, we.EJ)(),
            m = (0, M.p2)(s.data),
            p = (0, M.MT)(s.data) || m,
            j =
              t.isSuccess &&
              t.data.line_items.some(
                (U) =>
                  U.flags?.is_gift &&
                  !U.gift_info?.accountid_giftee &&
                  (!U.gift_info?.email_giftee ||
                    !C.pd.validateEmail(U.gift_info?.email_giftee)),
              );
          let B =
            d.iA.logged_in &&
            ((o === "initial" && !n && !i) ||
              (t.isSuccess && t.data.line_items.length == 0));
          B = B || (o === "gifts" && (!i || j));
          let x;
          return (
            n && o == "initial" && !u
              ? (x = "gifts")
              : d.iA.logged_in
                ? (x = "checkout")
                : (x = "login"),
            { bButtonDisabled: B, nextStep: x, bGuestAvailable: p }
          );
        }
        function ps(n) {
          const {
            bButtonDisabled: t,
            nextStep: s,
            bGuestAvailable: i,
          } = Ft(n.bCartIncludesGifts);
          return (0, e.jsx)(wt, { bDisabled: t, nextStep: s, bGuestOption: i });
        }
        function wt(n) {
          const { bDisabled: t, nextStep: s, bGuestOption: i } = n,
            o = Zn(),
            c = (0, y.W6)(),
            [u, m] = (0, Me.Ez)(),
            f = (0, P.j4)();
          let p = We.kFb;
          (0, we.kx)(f) && (p = f.gid);
          const j = () => {
              switch (s) {
                case "login":
                  if (p != We.kFb && i) {
                    const U =
                      d.TS.STORE_CHECKOUT_BASE_URL +
                      "checkout?purchasetype=self&cart=" +
                      p;
                    (0, N.pZ)(U, i);
                  } else (0, N.vg)();
                  break;
                case "gifts":
                  m("gifts"), c.push(Yn.B.ShoppingCartGifts());
                  break;
                case "checkout":
                  location.href = o;
                  break;
                default:
                  (0, Gt.z_)(s, "unhandled step");
              }
            },
            B = Cs(s),
            x = (0, g.A)(
              L().CartSummaryBtn,
              L().SummaryMarginBottom,
              L().Button,
            );
          return (0, e.jsx)(C.jn, {
            disabled: t,
            className: x,
            onClick: j,
            children: B,
          });
        }
        function Nt() {
          const n = `${d.TS.STORE_BASE_URL}subscriber_agreement/`;
          return (0, e.jsxs)(E.Z, {
            className: L().LicenseContextCtn,
            children: [
              (0, e.jsx)("img", {
                src: `${d.TS.IMG_URL}/checkout/computer.png`,
                alt: "",
              }),
              (0, e.jsxs)("div", {
                children: [
                  (0, e.jsx)("div", {
                    className: L().LicenseTitle,
                    children: (0, r.we)("#Cart_LicenseContextTitle"),
                  }),
                  (0, e.jsx)("div", {
                    className: L().LicenseLink,
                    children: (0, r.PP)(
                      "#Cart_LicenseContextLink",
                      (0, e.jsx)("a", {
                        href: n,
                        children: (0, r.we)("#Cart_LicenseContextSSA"),
                      }),
                    ),
                  }),
                ],
              }),
            ],
          });
        }
        function hs(n) {
          const { bDisabled: t } = n,
            s = (0, W.vo)(),
            i = (0, we.sI)(),
            o = (0, h.F$)(),
            c = (0, W.Ke)(s.data?.family_groupid(), i, Ye.IG.DP),
            u = () => {
              c.mutate(void 0, {
                onSuccess: () => {
                  location.href = `${d.TS.STORE_BASE_URL}account/familymanagement?tab=requests`;
                },
              });
            };
          return o
            ? (0, e.jsx)(C.$n, {
                disabled: t,
                className: (0, g.A)(
                  L().CartSummaryBtn,
                  L().SummaryMarginBottom,
                ),
                onClick: u,
                children: (0, r.we)("#Cart_DeclinePurchaseRequest"),
              })
            : null;
        }
        function Cs(n) {
          return n == "login"
            ? (0, r.we)("#Cart_ContinueButton_Payment")
            : n == "gifts"
              ? (0, r.we)("#Cart_ContinueButton_Gifts")
              : n == "checkout"
                ? (0, r.we)("#Cart_ContinueButton_Payment")
                : ((0, Gt.z_)(n, "unhandled step"), "");
        }
        function vs(n) {
          const { disabled: t } = n,
            i = (0, W.vo)().data?.family_groupid(),
            o = (0, W.Yc)(i, d.iA.country_code),
            [c, u] = (0, h.S0)(),
            [m, f] = l.useState(!1),
            p = () => {
              !t &&
                !m &&
                (f(!0),
                o.mutate(void 0, {
                  onSuccess: () => {
                    window.location.assign((0, W.Vo)(i));
                  },
                }));
            };
          return !c && u != h.Mn.k_ENonGiftableItemPresent
            ? null
            : (0, e.jsxs)("div", {
                className: (0, g.A)(
                  L().RequestPurchaseCtn,
                  L().SummaryMarginBottom,
                ),
                children: [
                  (0, e.jsx)(C.jn, {
                    disabled: t || m || !c,
                    className: (0, g.A)(L().CartSummaryBtn),
                    onClick: p,
                    children: (0, r.we)("#Cart_RequestPurchase"),
                  }),
                  c &&
                    (0, e.jsx)("div", {
                      children: (0, r.we)("#Cart_RequestPurchaseExplanation"),
                    }),
                  u === h.Mn.k_ENonGiftableItemPresent &&
                    (0, e.jsx)("div", {
                      children: (0, r.we)(
                        "#Cart_RequestPurchaseNonGiftableItems",
                      ),
                    }),
                ],
              });
        }
        var As = a(32593);
        function xs(n) {
          const t = bt(),
            s = Ts();
          (0, K.YM)();
          let i = null;
          return (
            t
              ? s.type == "replay"
                ? (i = (0, e.jsx)(Is, { cartID: s }))
                : (i = (0, e.jsx)(Ss, { cartID: s, ...n }))
              : (i = (0, e.jsx)("div", {
                  className: z()(L().ShoppingCartPage, L().CartPagePlaceholder),
                  children: (0, e.jsx)(R.t, {
                    position: "center",
                    msDelayAppear: 250,
                  }),
                })),
            (0, e.jsxs)(e.Fragment, { children: [(0, e.jsx)(_s, {}), i] })
          );
        }
        function _s() {
          return (0, k.Pt)(), (0, W.vo)(), null;
        }
        function Ss(n) {
          const { cartID: t, initialStep: s = "initial" } = n,
            [i, o] = l.useState(s),
            u = (0, Q.UI)()?.data?.line_items.length || 0,
            m = Ps(i, u);
          return (0, e.jsx)(et, {
            cartID: t,
            title: m,
            step: i,
            onStepChange: o,
            children: ({ cart: f, validatedCart: p, bCartIncludesGifts: j }) =>
              (0, e.jsxs)(e.Fragment, {
                children: [
                  (0, e.jsx)(O.tH, {
                    children: (0, e.jsx)(Ms, {
                      isCartEmpty: !f || f.line_items.length === 0,
                      cart: p,
                      bCartIncludesGifts: j,
                    }),
                  }),
                  (0, e.jsx)(O.tH, {
                    children: (0, e.jsx)(Ie, { cart: f, validatedCart: p }),
                  }),
                ],
              }),
          });
        }
        function Is(n) {
          const { cartID: t } = n;
          return d.iA.logged_in
            ? (0, e.jsx)(et, {
                cartID: t,
                title: (0, r.we)("#Cart_Replay_SavedCart"),
                step: "initial",
                onStepChange: () => {},
                children: () =>
                  (0, e.jsx)(F, {
                    children: (0, r.we)("#Cart_Replay_Instructions", 72),
                  }),
              })
            : (0, e.jsx)(N.Cg, {});
        }
        function et(n) {
          const {
              children: t,
              cartID: s,
              title: i,
              step: o,
              onStepChange: c,
              ...u
            } = n,
            m = l.useRef(null);
          return (
            l.useEffect(() => {
              m.current && m.current.NavTree()?.Activate(!0);
            }, []),
            (0, e.jsx)(te.Ay, {
              controller: "cart",
              method: "display",
              submethod: o,
              children: (0, e.jsxs)(Me.iZ, {
                cartID: s,
                step: o,
                setStep: c,
                ...u,
                children: [
                  (0, e.jsx)(Es, {}),
                  (0, e.jsxs)(E.Z, {
                    className: L().ShoppingCartPage,
                    navRef: m,
                    children: [
                      (0, e.jsx)(Ds, { step: o, title: i }),
                      (0, e.jsx)("div", {
                        className: L().ShoppingCartHeader,
                        children: i,
                      }),
                      (0, e.jsx)(ms, { children: t }),
                    ],
                  }),
                ],
              }),
            })
          );
        }
        function Ds(n) {
          const { step: t, title: s } = n,
            i = js(t);
          return (0, ye.Qn)()
            ? null
            : (0, e.jsxs)("div", {
                className: L().ShoppingCartBreadcrumbs,
                children: [
                  (0, e.jsx)("a", {
                    href: d.TS.STORE_BASE_URL,
                    children: (0, r.we)("#Cart_Bradcrumb_Home"),
                  }),
                  " ",
                  i,
                  " ",
                  (0, e.jsxs)("span", {
                    className: L().CurrentBreadcrumb,
                    children: ["> ", s],
                  }),
                ],
              });
        }
        function bt() {
          const [n, t] = l.useState(!1);
          return (
            l.useEffect(() => {
              n || (0, As.U)().then(() => t(!0));
            }, [n]),
            n
          );
        }
        function Ps(n, t) {
          return n === "gifts"
            ? (0, r.we)("#Cart_GiftOptions")
            : t > 0
              ? (0, r.Yp)("#Cart_YourShoppingCartLineItems", t)
              : (0, r.we)("#Cart_YourShoppingCart");
        }
        function js(n) {
          return n === "gifts"
            ? (0, e.jsxs)(e.Fragment, {
                children: [
                  "> ",
                  (0, e.jsx)("a", {
                    href: d.TS.STORE_BASE_URL + "cart",
                    children: (0, r.we)("#Cart_YourShoppingCart"),
                  }),
                ],
              })
            : null;
        }
        function Es(n) {
          const t = ys();
          return (0, e.jsx)("div", {
            className: L().BackgroundImage,
            style: t ? { backgroundImage: `url("${t}")` } : null,
          });
        }
        function ys() {
          const n = l.useRef(""),
            t = (0, Q.UI)(),
            { data: s } = (0, M.g7)(),
            i = !n.current;
          let o = ee.sc,
            c = v.c6.Ep;
          if (i && s !== void 0) {
            const m = t.data?.line_items || [],
              f = m.length
                ? m.reduce((p, j) => (p.time_added > j.time_added ? p : j))
                : null;
            (o = f?.bundleid || f?.packageid || ee.sc),
              (c = o === f?.bundleid ? v.c6.xO : v.c6.RD);
          }
          const [u] = (0, K.G6)(o, c, M.xz);
          if (u && i) {
            const m = Z.A.Get(),
              f = u.GetIncludedAppIDs();
            for (const p of f) {
              const j = m.GetApp(p);
              if (!j) continue;
              const B = j.GetAssets().GetPageBackgroundURL();
              if (B) {
                n.current = B;
                break;
              }
            }
          }
          return n.current;
        }
        function Ts() {
          const n = (0, y.zy)();
          return (0, l.useMemo)(
            () =>
              (0, P.VF)(
                new URLSearchParams(n.search).get("gidreplay") ?? void 0,
              ),
            [n.search],
          );
        }
        function Ms(n) {
          const { isCartEmpty: t, cart: s, bCartIncludesGifts: i } = n,
            o = () => (window.location.href = d.TS.STORE_BASE_URL);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              !t && (0, e.jsx)(w, { cart: s }),
              (0, e.jsxs)(E.Z, {
                "flow-children": "row",
                className: L().CartFooter,
                children: [
                  (0, e.jsxs)("div", {
                    className: L().NavButtons,
                    children: [
                      (0, e.jsx)(C.$n, {
                        onClick: o,
                        className: L().Button,
                        children: (0, r.we)("#Cart_ContinueShopping"),
                      }),
                      (0, e.jsx)(ps, { bCartIncludesGifts: i }),
                    ],
                  }),
                  !t && (0, e.jsx)(Rs, {}),
                ],
              }),
            ],
          });
        }
        function Rs() {
          const n = (0, S.Z)(),
            t = () => n.mutate();
          return (0, e.jsx)(Ue, {
            onClick: t,
            children: (0, r.we)("#Cart_RemoveAll"),
          });
        }
      },
      21895: (G) => {
        G.exports = {
          Root: "_1kIuUssJvopWbHik1IKMG6",
          "Variant-light": "zcrlDqGBY0Lrl7faLFoJI",
          "Variant-dark": "_3b6kFRuG8ILziz88w8GESp",
          "Variant-outline": "wlcXkTKJWe-SE0fCwIRwQ",
          Disabled: "kLcGKsNxkoEqxgok6YzML",
          Checkbox: "_3babFLLB0YYBf8znrlE7Dt",
          Icon: "cngAYeP7ZvFo2pT_v3-xO",
        };
      },
      16619: (G) => {
        G.exports = {
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
      34633: (G) => {
        G.exports = {
          strMaxCartPartResponsiveWidth: "840px",
          CartCard: "tVR7nCVynuzImpvF9viMI",
        };
      },
      43047: (G) => {
        G.exports = {
          narrowWidth: "500px",
          avatarHolder: "nibodjvvrm86uCfnnAn4g",
          avatarStatus: "_3xUpb5DWXPFNcHHIcv-9pe",
          avatar: "_3h-QRJGxnVOIExtHD1R0f2",
          avatarFrame: "X_mJE4BYV5StDPwZhSiAu",
          avatarFrameImg: "_3fM0F85j3aWVzr4RJM9-eu",
        };
      },
      12916: (G) => {
        G.exports = {
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
      45803: (G) => {
        G.exports = {
          CartCreatorCtn: "_2HG7VOroS8aHSg-W3fPyTt",
          Title: "_307GrwtjhKkXh5dUC5KjUv",
          Description: "_3YGQuryhG_j0UPSIaC_7ul",
        };
      },
      98972: (G) => {
        G.exports = {
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
      50169: (G) => {
        G.exports = {
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
      50829: (G) => {
        G.exports = {
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
      83934: (G) => {
        G.exports = {
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
      11543: (G) => {
        G.exports = {
          strMaxCartPartResponsiveWidth: "840px",
          CartCard: "_2w0ZEap3hR1c0K0_DxJDdN",
          ShoppingCartPage: "_22xtsolKcQit92o-LBeRWD",
          CartCheckboxNoMargin: "_1S9a0tZYJv0d4x3-DrxbuS",
          CartPagePlaceholder: "_3Hr6r9HTC7jT51-4vf_X8B",
          ShoppingCartHeader: "bCGAC51za6R_thjPd7_vw",
          ShoppingCartCtn: "_1jqUY_WcPgZnIOE-d9x7wc",
          ShoppingCartLeftCol: "_17GFdSD2pc0BquZk5cejg8",
          ShoppingCartRightCol: "_3HIve50RR17shqpJqmrUps",
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
          CartFooter: "_1Sdz1qnoKoD9eEPpC340Yj",
          NavButtons: "pp99Du2IR2EJ9UsjKcrRQ",
          Button: "_1rk1xUIAHMcMMDm4jz3MOM",
          CartSummaryBtn: "_1OKOHubCISYxpyNw0_nSgh",
          BetaNotice: "_1DTyDw3G0f4gmhjAvr_MGb",
          Text: "I4Bz94kh1lGOH1KrPzxzk",
          BackgroundImage: "FaiD8bJRAZ-HoNo0VvLOO",
        };
      },
      71460: (G) => {
        G.exports = { UserCountrySelector: "_1G8JdfmCwhonn-pZk-tfwP" };
      },
      44894: (G, Y, a) => {
        "use strict";
        a.d(Y, { A: () => e });
        const e =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcJJREFUeNqkUz1PAkEQfStggjESejU0GozlGqn8SGywkYIYY0IsaLCwIBTQUN5fMLGm8S8QSWwslVAYjAlUBEJDhCgWwp3nzN6eHqIVl8zN7rx5b+dm9oRt25jlmcOMj59f10JAkPcBcXIGWdECyqYn6TfGdZ9S9d4K4gQYx4WCtJzE+G/sKJudwpQABUGnGSf5vKzX60jmctL8SYzz+iCdls1mEzuplMIsLSC4iSUh1ClUlpHIZGStVkM0GsVNqVRlIJZIyG63i1AohMdKpUrZRQqXz4j7LWA7VSiR/WRSNhsNRRgOh+i02wgGg3hrtRSZelLmI6cExs7nKJGVtTX50uupMn0+H157PUWmZpYDXLoWUFPo6MC87jivx4MBFtxOWZYS11VipNdT98DWDVsPh2XQNLFIMdc4xpg9OZ3JMdIpRowSXVKt36+yuXvGxn+N0XS+3zj0kG+JSPEi261H5FCLmN9lUyNWyZ+Qag54eA6Hbfa8j1A88g+2qrlqCkKIZdovbAG7m8D5E3B5D9xR7IPsk/u7DextABd14OrBwd6J23YFligQ0IPwXE7lbedXUAPya5yHMiLuq5j1d/4SYAAj3NATBGE4PgAAAABJRU5ErkJggg==";
      },
    },
  ]);
})();
